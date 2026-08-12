# 03. Миграция со старого Linux VM на новый Docker

Старый сервер установлен по гайду Chatwoot  
https://developers.chatwoot.com/self-hosted/deployment/linux-vm  
(скрипт `install.sh`, пользователь `chatwoot`, systemd `chatwoot.target`, CLI `cwctl`).

Новый сервер — Docker Compose из этого репозитория (`docker-compose.onlinesim.yaml`).

## Карта ПО (что где лежит)

### Старый Linux VM (типично)

| Компонент | Софт / путь |
|-----------|-------------|
| App | Ruby + Node, код в `/home/chatwoot/chatwoot` |
| Process | systemd: `chatwoot-web.1`, `chatwoot-worker.1` (`cwctl -r`) |
| Postgres | локальный PostgreSQL (часто 14/15/16), БД обычно `chatwoot_production` |
| Redis | локальный Redis |
| Файлы | `storage/` в корне приложения (ActiveStorage disk) |
| Env | `/home/chatwoot/chatwoot/.env` |
| Proxy | Nginx + Let’s Encrypt |

Проверка на старом:

```bash
sudo -i -u chatwoot
cd ~/chatwoot
cwctl --help          # если установлен
grep -E 'POSTGRES_|REDIS_|FRONTEND_|SECRET_' .env | sed 's/=.*/=***/'
```

Версия Chatwoot на старом (важно для миграций схемы):

```bash
grep -E 'CHATWOOT_VERSION|version' package.json | head -5
# или
RAILS_ENV=production bundle exec rails runner 'puts Chatwoot.config[:version]'
```

### Новый Docker

| Компонент | Софт |
|-----------|------|
| App + Sidekiq | образ из `docker/Dockerfile` |
| Postgres | контейнер `pgvector/pgvector:pg16` |
| Redis | контейнер `redis:alpine` |
| Файлы | volumes `storage_data`, `avatars_data` |
| Env | `/opt/chatwoot/.env` |

## Критично про версии БД (3.x → 4.16)

Если старый инстанс **3.x**, а новый образ **4.16.2**, прямой `db:migrate` на дампе с данными часто падает.

Рекомендуемый путь для **данных**:

1. На **отдельной** staging-машине или временно: поднять промежуточный Chatwoot **v4.1.x**, восстановить дамп 3.x, прогнать `db:chatwoot_prepare`
2. Снять новый дамп уже с 4.1
3. Поднять **4.16.2**, восстановить дамп 4.1, снова `db:chatwoot_prepare`

Если старый уже **≥ 4.1**, можно идти на 4.16.2 напрямую (всё равно с бэкапом и тестом на staging).

Код в этой ветке — 4.16.2; промежуточный 4.1 удобнее взять официальным образом `chatwoot/chatwoot:v4.1.0` только для миграции схемы.

---

## План переноса (чеклист)

1. [ ] Бэкап старого (БД + storage + `.env`)
2. [ ] Поднять новый Docker на staging-домене (пустая БД)
3. [ ] Восстановить дамп (+ при необходимости промежуточная версия)
4. [ ] Скопировать `storage/` (и аватары, если были отдельно)
5. [ ] Сверить `.env` (секреты те же `SECRET_KEY_BASE`!)
6. [ ] `db:chatwoot_prepare` / миграции
7. [ ] Смоук-тесты
8. [ ] Cutover DNS (см. [02](02-domain-staging-to-prod.md))
9. [ ] Остановить старый сервер

---

## 1. Бэкап на старом сервере

### 1.1. PostgreSQL

Узнайте имя БД и пользователя из `.env` (`POSTGRES_DATABASE`, часто `chatwoot_production`).

```bash
# от root или postgres
sudo -u postgres pg_dump -Fc -d chatwoot_production -f /tmp/chatwoot.dump
# или SQL:
sudo -u postgres pg_dump -d chatwoot_production | gzip > /tmp/chatwoot.sql.gz

sudo cp /tmp/chatwoot.dump /home/ubuntu/   # куда есть доступ по scp
```

Формат `-Fc` (custom) удобен для `pg_restore`.

### 1.2. Файлы ActiveStorage

```bash
sudo -i -u chatwoot
cd ~/chatwoot
tar -czf /tmp/chatwoot-storage.tgz storage
# если был кастомный каталог avatars:
# tar -czf /tmp/chatwoot-avatars.tgz avatars
```

### 1.3. Redis (обычно необязательно)

В Redis — кэш, sidekiq (лучше дождаться пустой очереди), сессии.  
Для чистого переноса **достаточно Postgres + storage**.  
Если очень нужно:

```bash
redis-cli -a "$REDIS_PASSWORD" BGSAVE
# скопировать dump.rdb из dir redis
```

### 1.4. `.env` и секреты

Скопируйте `.env` в сейф. **`SECRET_KEY_BASE` на новом должен совпасть**, иначе сессии/некоторые подписи сломаются.  
Ключи Active Record Encryption (если включены) — тоже один в один.

### 1.5. Очередь Sidekiq

Перед финальным дампом:

```bash
cwctl -r   # или systemctl stop chatwoot-worker.1.service
# убедиться что jobs не пишут в БД, затем финальный pg_dump
```

---

## 2. Перенос файлов на новый сервер

С вашего ноутбука / jump-хоста:

```bash
scp user@OLD:/path/chatwoot.dump .
scp user@OLD:/path/chatwoot-storage.tgz .
scp user@NEW:/opt/chatwoot/   # или rsync
```

Или напрямую `scp` old → new.

---

## 3. Подготовка нового Docker (пустой)

Следуйте [01-docker-from-scratch.md](01-docker-from-scratch.md) до шага «prepare», но **перед** полноценным продом восстановите дамп.

```bash
cd /opt/chatwoot
cp dev/.env.production.example .env
# впишите SECRET_KEY_BASE со старого, пароли postgres/redis, FRONTEND_URL=staging
docker compose -f docker-compose.onlinesim.yaml build
docker compose -f docker-compose.onlinesim.yaml up -d postgres redis
# дождитесь healthy postgres
```

Создайте пустую БД (если ещё нет):

```bash
docker compose -f docker-compose.onlinesim.yaml exec postgres \
  psql -U postgres -c "CREATE DATABASE chatwoot;"
# или имя как в POSTGRES_DATABASE
```

---

## 4. Восстановление дампа Postgres

### Custom format (`-Fc`)

```bash
docker compose -f docker-compose.onlinesim.yaml exec -T postgres \
  pg_restore -U postgres -d chatwoot --clean --if-exists < chatwoot.dump
```

Предупреждения про `extension` / owner часто безобидны. Ошибки про отсутствие ролей — создайте роль или уберите `--clean` и восстанавливайте в свежую БД.

### SQL gzip

```bash
gunzip -c chatwoot.sql.gz | \
  docker compose -f docker-compose.onlinesim.yaml exec -T postgres \
  psql -U postgres -d chatwoot
```

### Версии Postgres

Старый PG 14 → новый PG 16 обычно ок для `pg_dump`/`pg_restore`.  
Если restore ругается на версию — сделайте dump в SQL plain на старом и залейте в новый.

---

## 5. Миграции схемы после restore

```bash
docker compose -f docker-compose.onlinesim.yaml run --rm rails \
  bundle exec rails db:chatwoot_prepare
```

Если падает на известной миграции 3→4.2+ — вернитесь к промежуточному **v4.1** (см. выше), затем снова 4.16.2.

---

## 6. Восстановление storage / avatars

```bash
# storage → volume контейнера rails
docker compose -f docker-compose.onlinesim.yaml up -d rails
docker compose -f docker-compose.onlinesim.yaml cp ./storage/. rails:/app/storage/

# или через tar в volume
docker compose -f docker-compose.onlinesim.yaml run --rm --entrypoint sh rails -c \
  'cd /app && tar -xzf /tmp/chatwoot-storage.tgz'
# (сначала docker cp архива в контейнер)
```

Права:

```bash
docker compose -f docker-compose.onlinesim.yaml exec rails \
  chown -R root:root /app/storage /app/avatars || true
```

Аватары: если на старом был каталог `avatars/`, положите в volume `avatars_data` → `/app/avatars`.

---

## 7. Sidekiq + полная схема процессов

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
docker compose -f docker-compose.onlinesim.yaml ps
docker compose -f docker-compose.onlinesim.yaml logs -f rails sidekiq
```

В Super Admin / rails console проверьте число Account, Conversation, User.

```bash
docker compose -f docker-compose.onlinesim.yaml exec rails \
  bundle exec rails runner 'puts [Account.count, Conversation.count, User.count].inspect'
```

---

## 8. Что не переносится «само»

| Вещь | Действие |
|------|----------|
| DNS / SSL | Настроить на новом ([02](02-domain-staging-to-prod.md)) |
| Каналы WhatsApp/FB/Telegram webhooks | URL на новый домен в кабинетах провайдеров |
| Cron на хосте | В Docker — sidekiq-cron из `config/schedule.yml` |
| Кастомный Nginx на старом | Перенести правила вручную |
| Локальные файлы вне `storage/` | Инвентаризация |

---

## 9. Финальный cutover (кратко)

1. Maintenance на старом / stop worker  
2. Финальный incremental dump (или короткий downtime dump)  
3. Restore на новый (если был дельта)  
4. DNS → новый IP  
5. Мониторинг 24–72 ч  
6. Выключить старый `systemctl stop chatwoot.target`

---

## 10. Откат

Держите старый VM выключенным, но **не** уничтоженным, пока новый не стабилен.  
DNS обратно на старый IP = быстрый rollback (данные на старом заморожены с момента финального dump).
