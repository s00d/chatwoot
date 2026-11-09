# Обновление OnlineSIM Chatwoot: прод 3.11 (`master`) → v4.19.1

Сейчас на проде: ветка **`master`** = Chatwoot **v3.11.1** + правки OnlineSIM, установка Linux VM (systemd, без Docker).  
Цель: ветка **`upgrade/v4.19.1-onlinesim`** = Chatwoot **v4.19.1** + те же правки, на **новом сервере в Docker**.  
Список правок 3.11: [CUSTOM_VS_V3.11.1.md](CUSTOM_VS_V3.11.1.md). Ниже — что из них и как перенесено, и пошаговый переезд.

## Деплой БД (важно)

С живых данных **3.11** нельзя сразу на 4.19.1, только через промежуточную 4.1.0:

1. `3.11 → v4.1.0` (официальный образ `chatwoot/chatwoot:v4.1.0`) + `db:chatwoot_prepare`
2. затем `v4.1.0 → upgrade/v4.19.1-onlinesim` + `db:chatwoot_prepare`

Прямой апгрейд 3→4.2+ часто ломает миграцию feature flags на аккаунтах с пользователями.  
Пошагово — раздел [«Переезд прода на новый сервер»](#переезд-прода-на-новый-сервер-311--v4191-docker) ниже.

Нужен Ruby **3.4.4** (см. Gemfile / `.ruby-version`).

---

## Что сделано (по слоям)

### REPLACE (взяли механизм upstream)

| Было в 3.11 | Стало в 4.19.1 |
|-------------|----------------|
| Пустой `Branding.vue` | Feature `disable_branding` (+ seed включает на demo-аккаунте) |
| Хардкод 10 MB в `attachment.rb` | `MAXIMUM_FILE_UPLOAD_SIZE=10` в `config/installation_config.yml` + FE default 10 |

### REWRITE / REAPPLY

#### Hub / plan
- `lib/chatwoot_hub.rb`: hub `https://hub.2.chatwoot.on-mail.ru` (override `CHATWOOT_HUB_URL`)
- `enterprise/lib/enterprise/chatwoot_hub.rb`: same default (EE prepend must not force upstream hub)
- installation id `onlinesim`, plan `premium`, qty `99999999` — **захардкожены** в `ChatwootHub` (как в 3.11); `CheckNewVersionsJob` не даёт hub понизить план
- миграция `20261109000000_onlinesim_force_premium_plan_and_disable_branding` выставляет эти строки в БД и включает `disable_branding` всем аккаунтам

#### Cookies / Redis / Puma / storage
- Session + SDK/dashboard cookies: `SameSite=None; Secure`
- Redis `db` default **5** (`REDIS_DB`)
- Alfred: `hincrby` / `hdercby` / `hdel`
- Avatars Disk service `avatars/` + `Avatarable` service `:avatars`
- `CleanupOldFilesJob` (cron 04:00, 160 дней)
- `RemoveStaleActiveStorageFilesJob` (в schedule закомментирован)
- Middleware `ActiveStorageErrorsHandler` → 404
- Puma: ActionCable restart on worker boot + `puma_worker_killer`
- `build.sh` / `run.sh` / `composer.json` (Envoy)

#### Messages
- Auto-assign на исходящий ответ (`SYSTEM_USER_ID = 4` исключён)
- Mute assignee activity
- `PATCH …/messages/:id/edit_content` + sender guard на destroy
- MessageFinder `limit` param
- UI Edit в MessageContextMenu

#### SDK / widget
- Vite `entrypoints/sdk.js`: `mountSelector`, `setUserForce`, Promise `reset`
- Events: `open2` / `ready2` / `close2` / `loaded` / `init` (+ upstream `opened`/`closed`)
- Cookie SameSite None; pubsub_token на setUser + ActionCable `refreshConnection`
- `public/lite_sdk.js` (+ min) — lazy load полного `/packs/js/sdk.js`
- Header `CHAT_HEADER`, offline copy, blockquote в bubble

#### Dashboard / contacts (components-next)
- Новые чаты сверху (`unshift`)
- Browser/OS только в «Предыдущих диалогах» (`show-browser-info`), красный unread, цвета preview
- Чат-лист: вкладка Mine/Unassigned/All запоминается (LocalStorage), без фото (инициалы), плавный скролл, `conversation.read` игнорируется
- Сайдбар диалога: макросы первыми, «Инфо о диалоге» всегда открыта, в карточке контакта нет phone/company
- Превью виджета: «Support / Поддержка» перед названием
- Контакты: `accountId` / `balance` / `spent` / `profile`; скрыты phone/company; скрыты attrs `accountId`/`hash_id`
- 24h время (`HH:mm`) везде: пузыри, аудит, CSAT, кампании, SLA, snooze, виджет
- Canned trigger `\` + `/`
- Alt+↑/↓ навигация
- Cap уведомлений ~10
- **Compact density**: меньшие отступы, font 14px по умолчанию (13px «маленький»), узкие колонки

#### Upstream CI workflows
- Удалены все community/Chatwoot workflows (lint, stale, foss docker, size-limit, heroku deploy check и т.д.)
- Остался только ручной [`.github/workflows/deploy_docker_manual.yml`](../.github/workflows/deploy_docker_manual.yml) — см. [04-github-actions-and-env.md](04-github-actions-and-env.md)

---

## DROP относительно 3.11

- Хак пустого Branding.vue
- Хардкод размера файла в модели
- Webpacker-only asset preserve rake (заменён Vite-ориентированным `build.sh`)

---

## Smoke checklist

- [ ] Lite SDK → полный sdk по клику / в окне 4ч
- [ ] `mountSelector` embed
- [ ] Astro `before-swap` restore только при `restoreWidgetBeforeSwap: true`
- [ ] `setUserForce` + WS после смены пользователя
- [ ] SameSite iframe (HTTPS)
- [ ] Edit/delete только своих сообщений
- [ ] Auto-assign при ответе
- [ ] Contacts billing columns
- [ ] `disable_branding` на аккаунте
- [ ] Cleanup job dry-run
- [ ] Docker `assets:precompile` внутри образа (без коммита `public/packs`)

---

## Эксплуатация / Docker

См. [README.md](README.md): установка Docker, домены, миграция с linux-vm, ручной GitHub Action и ENV.

## Не коммитить

- `Envoy.blade.php` (секреты деплоя) — в `.gitignore`
- `/avatars` runtime storage — в `.gitignore`
- `public/packs`, `public/vite`, `public/lite_sdk.min.js` — собираются в Docker
- Локальные `.yarn/` артефакты без необходимости
- Прод-файл `.env`

---

## Переезд прода на новый сервер (3.11 → v4.19.1, Docker)

Старый сервер: Linux VM **без Docker** (код в `/home/chatwoot/chatwoot`, systemd `chatwoot.target`, локальные PostgreSQL и Redis). С него берём только дамп БД, файлы и `.env`, сам он не меняется.  
Новый сервер: **всё в Docker** (`docker-compose.onlinesim.yaml`, каталог `/opt/chatwoot`), сразу на последней версии. На хост ставятся только Docker и Nginx с certbot.

Идея: данные и сервер — две независимые части.

- **Часть A — конвертация дампа.** Дамп 3.11 прогоняем через миграции во **временных** контейнерах (3.11 → 4.1.0 → 4.19.1) и снимаем с результата **готовый дамп 4.19.1**. Делается на любой машине с Docker (ноутбук или новый сервер), временные контейнеры потом удаляются.
- **Часть B — новый сервер.** Ставим чистый 4.19.1 и заливаем в него готовый дамп. Никаких промежуточных версий на сервере.
- **Часть C — боевой переезд.** Останавливаем старый, повторяем A на свежем дампе, заливаем в B, переключаем DNS.

Сначала делаем A и B на дампе без остановки старого (репетиция), проверяем, потом C.

---

### Часть A. Конвертация дампа 3.11 → 4.19.1

#### A1. Снять дамп и файлы со старого сервера

На **старом** сервере (имя БД — `POSTGRES_DATABASE` в его `.env`, обычно `chatwoot_production`):

```bash
sudo -u postgres pg_dump -Fc -d chatwoot_production -f /tmp/chatwoot-3.11.dump
sudo tar -czf /tmp/chatwoot-storage.tgz -C /home/chatwoot/chatwoot storage
sudo tar -czf /tmp/chatwoot-avatars.tgz -C /home/chatwoot/chatwoot avatars
sudo cp /home/chatwoot/chatwoot/.env /tmp/chatwoot-old.env
sudo chmod 644 /tmp/chatwoot-3.11.dump /tmp/chatwoot-*.tgz /tmp/chatwoot-old.env
```

`storage/` — вложения, `avatars/` — аватары (отдельный сервис OnlineSIM). Если `avatars/` нет — пропустить.  
Забрать на машину, где будет конвертация (и потом на новый сервер):

```bash
mkdir -p ~/cw-move && cd ~/cw-move
scp OLD:/tmp/chatwoot-3.11.dump OLD:/tmp/chatwoot-storage.tgz OLD:/tmp/chatwoot-avatars.tgz OLD:/tmp/chatwoot-old.env .
```

`chatwoot-old.env` содержит секреты — после переезда удалить.

#### A2. Образ последней версии

На машине конвертации нужен наш образ 4.19.1:

```bash
git clone git@github.com:s00d/chatwoot.git ~/cw-src && cd ~/cw-src
git checkout upgrade/v4.19.1-onlinesim
docker compose -f docker-compose.onlinesim.yaml build     # даёт образ chatwoot-onlinesim:local
cd ~/cw-move
```

(или взять готовый образ из GitHub Actions, см. [04](04-github-actions-and-env.md), и подставить его имя вместо `chatwoot-onlinesim:local` ниже).

#### A3. Файл окружения для конвертации

Миграции должны идти с **теми же** секретами, что на проде. Создать `~/cw-move/convert.env`, перенеся значения из `chatwoot-old.env` (без кавычек, без пробелов вокруг `=`):

```bash
RAILS_ENV=production
INSTALLATION_ENV=docker
SECRET_KEY_BASE=значение_со_старого
# если были на старом:
# ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=...
# ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=...
# ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=...
POSTGRES_HOST=cw-convert-pg
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=convert
POSTGRES_DATABASE=chatwoot
REDIS_URL=redis://cw-convert-redis:6379
FRONTEND_URL=http://localhost:3000
```

#### A4. Временные Postgres и Redis, расширения

Chatwoot 4.x нужны расширения PostgreSQL:

| Расширение | Зачем |
|------------|-------|
| `pg_stat_statements` | статистика запросов |
| `pg_trgm` | поиск по тексту (триграммы) |
| `pgcrypto` | `gen_random_uuid()` |
| `vector` | **pgvector**, Captain / AI-поиск (появилось в 4.x, на старом сервере его нет) |
| `plpgsql` | стандартное, есть всегда |

Образ `pgvector/pgvector:pg16` содержит их все, нужно только включить в БД:

```bash
docker network create cw-convert
docker run -d --name cw-convert-pg --network cw-convert \
  -e POSTGRES_PASSWORD=convert -e POSTGRES_DB=chatwoot pgvector/pgvector:pg16
docker run -d --name cw-convert-redis --network cw-convert redis:alpine

until docker exec cw-convert-pg pg_isready -U postgres; do sleep 2; done
docker exec cw-convert-pg psql -U postgres -d chatwoot -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements; CREATE EXTENSION IF NOT EXISTS pg_trgm; CREATE EXTENSION IF NOT EXISTS pgcrypto; CREATE EXTENSION IF NOT EXISTS vector;"
docker exec cw-convert-pg psql -U postgres -d chatwoot -c "\dx"
```

В `\dx` должны быть все пять.

#### A5. Залить дамп 3.11

```bash
docker exec -i cw-convert-pg pg_restore -U postgres -d chatwoot --no-owner --no-acl < chatwoot-3.11.dump
docker exec cw-convert-pg psql -U postgres -d chatwoot -c "select count(*) from accounts; select max(version) from schema_migrations;"
```

`--no-owner --no-acl` — на старом владелец пользователь `chatwoot`, тут его нет. Сообщения `extension ... already exists` безобидны.
Лишние старые таблицы из 3.11 (`events`, `subscriptions`) не мешают.

#### A6. Миграции 3.11 → 4.1.0 (официальный образ)

Без промежуточной 4.1.0 миграции 4.2+ падают на feature flags:

```bash
docker run --rm --network cw-convert --env-file convert.env \
  chatwoot/chatwoot:v4.1.0 bundle exec rails db:chatwoot_prepare
```

Должно закончиться без ошибок. Если упало — дальше не идти, лог целиком.

#### A7. Миграции 4.1.0 → 4.19.1 (наш образ)

```bash
docker run --rm --network cw-convert --env-file convert.env \
  chatwoot-onlinesim:local bundle exec rails db:chatwoot_prepare
```

Здесь же выполнится миграция OnlineSIM `20261109000000_onlinesim_force_premium_plan_and_disable_branding`: план `premium`, id `onlinesim`, брендинг выключен на всех аккаунтах.

Проверка:

```bash
docker run --rm --network cw-convert --env-file convert.env chatwoot-onlinesim:local bundle exec rails runner '
  puts [Account.count, User.count, Conversation.count, Message.count].inspect
  puts InstallationConfig.where(name: %w[INSTALLATION_PRICING_PLAN INSTALLATION_IDENTIFIER]).map { |c| [c.name, c.value] }.inspect
  puts Account.all.map { |a| a.feature_enabled?("disable_branding") }.uniq.inspect
'
```

Ожидается: числа как на старом, `premium` / `onlinesim`, `[true]`.

#### A8. Снять готовый дамп 4.19.1 и убрать временное

```bash
docker exec cw-convert-pg pg_dump -U postgres -Fc -d chatwoot > chatwoot-4.19.1.dump
ls -lh chatwoot-4.19.1.dump

docker rm -f cw-convert-pg cw-convert-redis
docker network rm cw-convert
```

Итог части A: `chatwoot-4.19.1.dump` + `chatwoot-storage.tgz` + `chatwoot-avatars.tgz`.

---

### Часть B. Новый сервер сразу на 4.19.1

#### B1. Docker и код

Установить Docker по [01-docker-from-scratch.md](01-docker-from-scratch.md), раздел 1. Затем:

```bash
sudo mkdir -p /opt/chatwoot && sudo chown "$USER":"$USER" /opt/chatwoot
cd /opt/chatwoot
git clone git@github.com:s00d/chatwoot.git .
git checkout upgrade/v4.19.1-onlinesim
```

#### B2. `.env`

```bash
cp dev/.env.production.example .env
nano .env
```

| Переменная | Значение |
|------------|----------|
| `SECRET_KEY_BASE` | **строго со старого** (тот же, что в `convert.env`), иначе все разлогинятся и сломаются подписанные ссылки |
| `ACTIVE_RECORD_ENCRYPTION_*` | со старого, если были |
| `SMTP_*`, `MAILER_SENDER_EMAIL`, `MAILER_INBOUND_EMAIL_DOMAIN`, `RAILS_INBOUND_EMAIL_*` | со старого |
| ключи интеграций (`FB_*`, `SLACK_*`, `GOOGLE_*`, `AZURE_*`, `OPENAI_*` и т.п.) | со старого |
| `FRONTEND_URL` | на репетиции — временный домен; при боевом — основной |
| `HELPCENTER_URL` | если доки открываются по отдельному домену — его |
| `FORCE_SSL` | `true` (без него cookie сессии не получат `SameSite=None`, виджет в iframe отвалится) |
| `POSTGRES_HOST` / `POSTGRES_USERNAME` / `POSTGRES_DATABASE` | `postgres` / `postgres` / `chatwoot` |
| `POSTGRES_PASSWORD`, `REDIS_PASSWORD` | новые сильные пароли |
| `REDIS_URL` | `redis://:ПАРОЛЬ@redis:6379/5` |
| `ACTIVE_STORAGE_SERVICE` | `local` |

#### B3. Собрать образ

```bash
docker compose -f docker-compose.onlinesim.yaml build
```

(или тот же образ, что в A2, через registry — см. [01](01-docker-from-scratch.md), раздел 8, вариант B).

#### B4. Postgres + Redis, БД с расширениями

```bash
docker compose -f docker-compose.onlinesim.yaml up -d postgres redis
until docker compose -f docker-compose.onlinesim.yaml exec postgres pg_isready -U postgres; do sleep 2; done
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -c "CREATE DATABASE chatwoot;"
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -d chatwoot -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements; CREATE EXTENSION IF NOT EXISTS pg_trgm; CREATE EXTENSION IF NOT EXISTS pgcrypto; CREATE EXTENSION IF NOT EXISTS vector;"
```

#### B5. Залить готовый дамп

```bash
scp ~/cw-move/chatwoot-4.19.1.dump ~/cw-move/chatwoot-storage.tgz ~/cw-move/chatwoot-avatars.tgz NEW:/opt/chatwoot/   # с машины конвертации
cd /opt/chatwoot
docker compose -f docker-compose.onlinesim.yaml exec -T postgres \
  pg_restore -U postgres -d chatwoot --no-owner --no-acl < chatwoot-4.19.1.dump
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails db:chatwoot_prepare
```

`db:chatwoot_prepare` тут ничего не мигрирует (дамп уже 4.19.1), только сверяет конфиги. Если он что-то мигрирует — значит A сделан на другой версии кода.

#### B6. Файлы: вложения и аватары

```bash
docker compose -f docker-compose.onlinesim.yaml up -d rails
docker compose -f docker-compose.onlinesim.yaml cp chatwoot-storage.tgz rails:/tmp/
docker compose -f docker-compose.onlinesim.yaml cp chatwoot-avatars.tgz rails:/tmp/
docker compose -f docker-compose.onlinesim.yaml exec rails sh -c \
  'cd /app && tar -xzf /tmp/chatwoot-storage.tgz && tar -xzf /tmp/chatwoot-avatars.tgz && rm /tmp/chatwoot-*.tgz && ls storage | head && ls avatars | head'
```

Файлы ложатся в volumes `storage_data` (`/app/storage`) и `avatars_data` (`/app/avatars`).

#### B7. Запуск и Nginx

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
docker compose -f docker-compose.onlinesim.yaml ps
docker compose -f docker-compose.onlinesim.yaml logs -f rails sidekiq
```

Nginx + Let’s Encrypt на домен из `FRONTEND_URL` — [01-docker-from-scratch.md](01-docker-from-scratch.md), раздел 7 (там же блок `/cable` для WebSocket).

#### B8. Проверка

- [ ] вход агентом, список диалогов, история сообщений
- [ ] картинки / вложения / аватары открываются (старые и новые)
- [ ] виджет на сайте (`on-nuxt-3`): открывается, сообщения туда-обратно в реальном времени
- [ ] Lite SDK → полный sdk, `mountSelector`, `setUserForce`
- [ ] правка/удаление только своих сообщений
- [ ] автоназначение при ответе
- [ ] Help Center / документация открывается, нет «Powered by»
- [ ] Super Admin → план `Premium`
- [ ] письма уходят (SMTP), входящая почта если есть
- [ ] Sidekiq: в логах нет ошибок, Cron-задачи на месте

---

### Часть C. Боевой переезд

1. Предупредить пользователей о простое (обычно 20–60 мин, зависит от размера БД).
2. На **старом** остановить приложение, чтобы данные больше не менялись:
   ```bash
   sudo systemctl stop chatwoot.target
   ```
3. Повторить **часть A целиком** на свежем дампе (A1, A3–A8; образ из A2 уже есть).
4. На **новом**: в `.env` боевой `FRONTEND_URL`, затем пересоздать БД и залить новый дамп:
   ```bash
   cd /opt/chatwoot
   docker compose -f docker-compose.onlinesim.yaml down
   docker compose -f docker-compose.onlinesim.yaml up -d postgres redis
   docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -c "DROP DATABASE chatwoot;"
   ```
   и шаги **B4 (без сборки), B5, B6, B7**.
5. DNS: A-запись домена на IP нового сервера, SSL на новом (`sudo certbot --nginx -d ДОМЕН`).
6. Проверка — B8.

### После переезда

| Что | Действие |
|-----|----------|
| Telegram / WhatsApp / другие каналы с вебхуками | открыть канал в настройках и пересохранить — вебхук перерегистрируется на текущий `FRONTEND_URL` |
| OAuth (Google, Microsoft, Facebook, Instagram и т.п.) | у провайдера добавить redirect URI с новым доменом, если домен поменялся |
| Второй домен (`chatwoot.on-mailbox.com` и т.п.) | направить на новый сервер тоже; ссылки на файлы и картинки строятся от `FRONTEND_URL` |
| Бэкапы | ежедневный `pg_dump` + копия volumes `storage_data`, `avatars_data` ([01](01-docker-from-scratch.md), раздел 9) |
| Секреты | удалить `chatwoot-old.env`, `convert.env`, дампы с машины конвертации |
| Старый сервер | держать выключенным 1–2 недели, потом удалить |

### Откат

Старый сервер не трогаем: `sudo systemctl start chatwoot.target` на старом и DNS обратно на старый IP.
Данные, написанные на новом после переезда, при откате теряются.
