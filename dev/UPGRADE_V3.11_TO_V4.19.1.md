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
- Бэкпорт upstream [chatwoot/chatwoot#16135](https://github.com/chatwoot/chatwoot/pull/16135) (есть в `develop`, нет в v4.19.1): список диалогов грузит последние сообщения и счётчики непрочитанного пакетно. При переходе на релиз с этим PR коммит уйдёт сам
- UI Edit в MessageContextMenu

#### SDK / widget
- Vite `entrypoints/sdk.js`: `mountSelector`, `setUserForce`, Promise `reset`
- Events: `open2` / `ready2` / `close2` / `loaded` / `init` (+ upstream `opened`/`closed`)
- Cookie SameSite None; pubsub_token на setUser + ActionCable `refreshConnection`
- `public/lite_sdk.js` (+ min) — lazy load полного `/packs/js/sdk.js`
- Header `CHAT_HEADER`, offline copy, blockquote в bubble
- `shared/components/Branding.vue` пустой, как в 3.11: в виджете и CSAT-опросе нет «Powered by», только отступ (флаг `disable_branding` дополнительно выключает брендинг на портале и в письмах)

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
Новый сервер: **всё в Docker** (`docker-compose.onlinesim.yaml`, каталог `/opt/chatwoot`). На хост ставятся только Docker и Nginx с certbot.

Порядок:

1. **Подготовка** — новый сервер полностью готов заранее: код, `.env`, образы, Postgres/Redis, Nginx. Старый работает, простоя нет.
2. **Переезд** — останавливаем старый, снимаем дамп и сразу на новом: заливаем → миграции 3.11 → 4.1.0 → 4.19.1 → запуск. Простой — минуты.

Перед боевым переездом прогоните часть 2 один раз как репетицию на дампе, снятом без остановки старого.

---

### Часть 1. Подготовка нового сервера (заранее, без простоя)

#### 1.1. Docker и код

Установить Docker по [01-docker-from-scratch.md](01-docker-from-scratch.md), раздел 1. Затем:

```bash
sudo mkdir -p /opt/chatwoot && sudo chown "$USER":"$USER" /opt/chatwoot
cd /opt/chatwoot
git clone git@github.com:s00d/chatwoot.git .
git checkout upgrade/v4.19.1-onlinesim
```

#### 1.2. `.env`

```bash
cp dev/.env.production.example .env
nano .env
```

| Переменная | Значение |
|------------|----------|
| `SECRET_KEY_BASE` | **строго со старого** `/home/chatwoot/chatwoot/.env`, иначе все разлогинятся и сломаются подписанные ссылки |
| `ACTIVE_RECORD_ENCRYPTION_*` | со старого, если были |
| `SMTP_*`, `MAILER_SENDER_EMAIL`, `MAILER_INBOUND_EMAIL_DOMAIN`, `RAILS_INBOUND_EMAIL_*` | со старого |
| ключи интеграций (`FB_*`, `SLACK_*`, `GOOGLE_*`, `AZURE_*`, `OPENAI_*` и т.п.) | со старого |
| `FRONTEND_URL` | боевой домен (на репетиции можно временный) |
| `HELPCENTER_URL` | если доки открываются по отдельному домену — его |
| `FORCE_SSL` | `true` (без него cookie сессии не получат `SameSite=None`, виджет в iframe отвалится) |
| `POSTGRES_HOST` / `POSTGRES_USERNAME` / `POSTGRES_DATABASE` | `postgres` / `postgres` / `chatwoot` |
| `POSTGRES_PASSWORD`, `REDIS_PASSWORD` | новые сильные пароли |
| `REDIS_URL` | `redis://:ПАРОЛЬ@redis:6379/5` |
| `ACTIVE_STORAGE_SERVICE` | `local` |
| `CHATWOOT_BIND` / `POSTGRES_BIND` / `REDIS_BIND` | только если порты `3000` / `5432` / `6379` на хосте заняты, например `127.0.0.1:3100` |

> Значения без кавычек и без пробелов вокруг `=`: этот же файл читает `docker run --env-file` (шаг 2.4), он кавычки не снимает.

#### 1.3. Образы

```bash
docker compose -f docker-compose.onlinesim.yaml build     # наш 4.19.1
docker pull chatwoot/chatwoot:v4.1.0                      # официальный 4.1.0, только для миграций 3.11 → 4.1
```

- Образ на Debian slim: гемы с нативными расширениями (`grpc`, `nokogiri`, `google-protobuf`) ставятся готовыми, сборка ~5–10 мин, образ ~1,8 ГБ. Повторная сборка без изменений `Gemfile.lock` — пара минут (слой с гемами в кэше).
- Чтобы не собирать на сервере вовсе: образ собирает GitHub Actions и пушит в registry, на сервере только `pull` ([01](01-docker-from-scratch.md), раздел 8, вариант B).
- Сообщение при сборке `Failed to configure AI Agents SDK: connection ... 5432 ... refused` — не ошибка: при `assets:precompile` базы нет, upstream просто пишет это в лог.
- Docker Hub ограничивает анонимные скачивания (`429 Too Many Requests`) — `docker login` и повторить.

Проверка образа (все файлы `public/` на месте, SDK собран и минифицирован):

```bash
docker compose -f docker-compose.onlinesim.yaml run --rm --entrypoint sh rails -c \
  'ls public/packs/js/sdk.js public/lite_sdk.js public/lite_sdk.min.js && wc -c public/lite_sdk.js public/lite_sdk.min.js'
```

`lite_sdk.min.js` должен быть меньше `lite_sdk.js`.

#### 1.4. Postgres + Redis

```bash
docker compose -f docker-compose.onlinesim.yaml up -d postgres redis
```

Ничего руками создавать не нужно. При первом старте пустого volume контейнер Postgres сам:

- создаёт базу `chatwoot` (`POSTGRES_DB` в compose);
- выполняет [`docker/postgres/initdb/01-extensions.sql`](../docker/postgres/initdb/01-extensions.sql) — расширения `pg_stat_statements`, `pg_trgm`, `pgcrypto`, `vector`.

Поэтому неважно, были ли эти расширения на старом сервере: дамп с ними (pg_dump пишет `CREATE EXTENSION IF NOT EXISTS`) и без них заливается одинаково. `vector` (pgvector, Captain / AI) есть только в образе `pgvector/pgvector:pg16` — образ Postgres не менять.

#### 1.5. Nginx + SSL

[01-docker-from-scratch.md](01-docker-from-scratch.md), раздел 7 (`proxy_pass` на порт из `CHATWOOT_BIND`, блок `/cable` для WebSocket). Сертификат можно выпустить заранее на временный домен; на боевой — после переключения DNS (шаг 2.7).

---

### Часть 2. Переезд (простой — минуты)

#### 2.1. Остановить старый и снять данные

На **старом** сервере (имя БД — `POSTGRES_DATABASE` в его `.env`, обычно `chatwoot_production`):

```bash
sudo systemctl stop chatwoot.target          # на репетиции НЕ останавливать
sudo -u postgres pg_dump -Fc -d chatwoot_production -f /tmp/chatwoot-3.11.dump
sudo tar -czf /tmp/chatwoot-storage.tgz -C /home/chatwoot/chatwoot storage
sudo tar -czf /tmp/chatwoot-avatars.tgz -C /home/chatwoot/chatwoot avatars   # если есть
sudo chmod 644 /tmp/chatwoot-3.11.dump /tmp/chatwoot-*.tgz
```

#### 2.2. Перенести на новый

```bash
scp OLD:/tmp/chatwoot-3.11.dump OLD:/tmp/chatwoot-storage.tgz OLD:/tmp/chatwoot-avatars.tgz /opt/chatwoot/
```

#### 2.3. Залить дамп 3.11

После репетиции база уже не пустая — пересоздать volume Postgres (init-скрипт из 1.4 снова создаст базу и расширения):

```bash
cd /opt/chatwoot
docker compose -f docker-compose.onlinesim.yaml stop rails sidekiq
docker compose -f docker-compose.onlinesim.yaml rm -sf postgres
docker volume rm chatwoot_postgres_data          # имя: docker volume ls | grep postgres_data
docker compose -f docker-compose.onlinesim.yaml up -d postgres
```

Залить:

```bash
docker compose -f docker-compose.onlinesim.yaml exec -T postgres \
  pg_restore -U postgres -d chatwoot --no-owner --no-acl < chatwoot-3.11.dump
```

`--no-owner --no-acl` — на старом владелец пользователь `chatwoot`, в контейнере его нет.

Проверка, что дамп целый: у каждого аккаунта должна быть своя последовательность номеров диалогов, иначе новые диалоги не создадутся (`relation "conv_dpid_seq_N" does not exist`):

```bash
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -d chatwoot -tAc \
  "select a.id from accounts a where not exists (select 1 from pg_class where relname = 'conv_dpid_seq_' || a.id)"
```

Пустой вывод — всё в порядке.

#### 2.4. Миграции 3.11 → 4.1.0 (официальный образ)

Без промежуточной 4.1.0 миграции 4.2+ падают на feature flags:

```bash
docker network ls | grep chatwoot          # сеть compose, обычно chatwoot_default
docker run --rm --network chatwoot_default --env-file .env \
  chatwoot/chatwoot:v4.1.0 bundle exec rails db:chatwoot_prepare
```

#### 2.5. Миграции 4.1.0 → 4.19.1 (наш образ)

```bash
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails db:chatwoot_prepare
```

Здесь же выполнится миграция OnlineSIM `20261109000000_onlinesim_force_premium_plan_and_disable_branding`: план `premium`, id `onlinesim`, брендинг выключен на всех аккаунтах.

#### 2.6. Файлы и запуск

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
docker compose -f docker-compose.onlinesim.yaml cp chatwoot-storage.tgz rails:/tmp/
docker compose -f docker-compose.onlinesim.yaml cp chatwoot-avatars.tgz rails:/tmp/
docker compose -f docker-compose.onlinesim.yaml exec rails sh -c \
  'cd /app && tar -xzf /tmp/chatwoot-storage.tgz && tar -xzf /tmp/chatwoot-avatars.tgz && rm /tmp/chatwoot-*.tgz'
docker compose -f docker-compose.onlinesim.yaml exec rails bundle exec rails runner '
  puts [Account.count, User.count, Conversation.count, Message.count].inspect
  puts InstallationConfig.where(name: %w[INSTALLATION_PRICING_PLAN INSTALLATION_IDENTIFIER]).map { |c| [c.name, c.value] }.inspect
  puts Account.all.map { |a| a.feature_enabled?("disable_branding") }.uniq.inspect
'
```

Ожидается: числа как на старом, `premium` / `onlinesim`, `[true]`.

Быстрая проверка по HTTP (порт — из `CHATWOOT_BIND`):

```bash
curl -s http://127.0.0.1:3000/api          # {"version":"4.19.1",...,"queue_services":"ok","data_services":"ok"}
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3000/packs/js/sdk.js
docker compose -f docker-compose.onlinesim.yaml logs --no-color rails sidekiq | grep -iE "error|exception|fatal"
```

#### 2.7. DNS и проверка

A-запись домена → IP нового сервера, затем `sudo certbot --nginx -d ДОМЕН`.

- [ ] вход агентом, список диалогов, история сообщений
- [ ] картинки / вложения / аватары открываются (старые и новые)
- [ ] виджет на сайте (`on-nuxt-3`): открывается, сообщения туда-обратно в реальном времени
- [ ] Lite SDK → полный sdk, `mountSelector`, `setUserForce`
- [ ] правка/удаление только своих сообщений, автоназначение при ответе
- [ ] Help Center / документация, нет «Powered by»; Super Admin → план `Premium`
- [ ] письма уходят (SMTP), входящая почта если есть
- [ ] Sidekiq: в логах нет ошибок

---

### Ресурсы и производительность

Замерено локально на 30 000 диалогов / 1,2 млн сообщений, Docker с 2 CPU / 5 ГБ.

**Лимиты контейнеров.** В `docker-compose.onlinesim.yaml` лимитов CPU и памяти нет — cgroup-троттлинга нет. Так и оставить: лимит CPU на Rails/Sidekiq только режет пропускную способность. От разрастания памяти защищает `puma_worker_killer` (ниже).

**Настройки в `.env`** (см. [`.env.production.example`](.env.production.example)):

| Переменная | Значение | Зачем |
|------------|----------|-------|
| `WEB_CONCURRENCY` | число ядер | процессы Puma; при `0` веб использует максимум одно ядро (GVL) |
| `RAILS_MAX_THREADS` | `5` | потоки на процесс |
| `RUBY_YJIT_ENABLE` | `1` | JIT Ruby: ~1,5× пропускной способности, +~80 МБ на процесс |
| `PUMA_WORKER_KILLER_RAM_MB` | ~700 × `WEB_CONCURRENCY` | при превышении суммарной памяти воркеров перезапускается самый большой |
| `SIDEKIQ_CONCURRENCY` | `10` | потоки Sidekiq |

Соединения Postgres: `WEB_CONCURRENCY × RAILS_MAX_THREADS + SIDEKIQ_CONCURRENCY` должно быть меньше `max_connections` (100).

**Память:** Rails ~450 МБ на процесс (≈500 МБ с YJIT), Sidekiq ~600 МБ, Postgres 100–200 МБ + кэш, Redis десятки МБ. Для 4 ядер: 4 воркера ≈ 2 ГБ + Sidekiq 0,6 ГБ + Postgres → сервер от 4–6 ГБ RAM.

**Замеры** (список диалогов, 10 параллельных запросов, база 30 000 диалогов / 1,2 млн сообщений):

| Конфигурация | SQL на страницу | rps | p50 |
|--------------|-----------------|-----|-----|
| v4.19.1 как есть, 1 процесс | 123 | 4,5 | 2,3 с |
| + бэкпорт #16135, 1 процесс | 27 | 13,1 | 0,78 с |
| + YJIT | 27 | 21,8 | 0,45 с |
| + 2 воркера Puma | 27 | 41,8 | 0,23 с |

Утечек памяти нет: 10 минут нагрузки (чтение + запись с задачами Sidekiq) — память всех контейнеров выходит на плато.

`pg_stat_statements` подгружается (`shared_preload_libraries` в compose), статистика запросов:

```bash
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -d chatwoot -c \
  "select calls, round(mean_exec_time::numeric,1) ms, left(query,100) from pg_stat_statements order by total_exec_time desc limit 10"
```

Rack::Attack ограничивает запросы с одного IP (`RACK_ATTACK_LIMIT`, 3000/мин). Для нагрузочных тестов с одной машины её IP добавляют в `RACK_ATTACK_ALLOWED_IPS`, на проде этого не делать.

### После переезда

| Что | Действие |
|-----|----------|
| Telegram / WhatsApp / другие каналы с вебхуками | открыть канал в настройках и пересохранить — вебхук перерегистрируется на текущий `FRONTEND_URL` |
| OAuth (Google, Microsoft, Facebook, Instagram и т.п.) | у провайдера добавить redirect URI с новым доменом, если домен поменялся |
| Второй домен (`chatwoot.on-mailbox.com` и т.п.) | направить на новый сервер тоже; ссылки на файлы и картинки строятся от `FRONTEND_URL` |
| Бэкапы | ежедневный `pg_dump` + копия volumes `storage_data`, `avatars_data` ([01](01-docker-from-scratch.md), раздел 9) |
| Дампы и архивы | удалить с обоих серверов (в них данные клиентов) |
| Старый сервер | держать выключенным 1–2 недели, потом удалить |

### Откат

Старый сервер не трогаем: `sudo systemctl start chatwoot.target` на старом и DNS обратно на старый IP.
Данные, написанные на новом после переезда, при откате теряются.
