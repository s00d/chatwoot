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

Старый сервер: Linux VM, код в `/home/chatwoot/chatwoot`, systemd `chatwoot.target`, локальные PostgreSQL и Redis. С него берём только дамп БД, файлы и `.env`.  
Новый сервер: **всё в Docker** (`docker-compose.onlinesim.yaml`, каталог `/opt/chatwoot`): Rails, Sidekiq, PostgreSQL (`pgvector/pgvector:pg16`), Redis, а также промежуточная миграция через 4.1.0. На сам сервер ставятся только Docker и Nginx с certbot (принимает HTTPS и проксирует на контейнер). Ruby, Node, PostgreSQL и Redis на хост **не ставим**.

Порядок: сначала **репетиция** на свежем дампе без остановки старого (шаги 1–11), проверяем, потом **боевой переезд** с остановкой (шаг 12).
Старый сервер не удалять, пока новый не проработает несколько дней.

### Шаг 1. Новый сервер: Docker и код

Установить Docker по [01-docker-from-scratch.md](01-docker-from-scratch.md), раздел 1. Затем:

```bash
sudo mkdir -p /opt/chatwoot && sudo chown "$USER":"$USER" /opt/chatwoot
cd /opt/chatwoot
git clone git@github.com:s00d/chatwoot.git .
git checkout upgrade/v4.19.1-onlinesim
```

### Шаг 2. `.env` на новом сервере

Взять со **старого** сервера `/home/chatwoot/chatwoot/.env` и перенести значения в новый:

```bash
cp dev/.env.production.example .env
nano .env
```

| Переменная | Откуда |
|------------|--------|
| `SECRET_KEY_BASE` | **строго со старого**, иначе все разлогинятся и сломаются подписанные ссылки |
| `ACTIVE_RECORD_ENCRYPTION_*` | со старого, если были (MFA) |
| `SMTP_*`, `MAILER_SENDER_EMAIL`, `MAILER_INBOUND_EMAIL_DOMAIN`, `RAILS_INBOUND_EMAIL_*` | со старого |
| ключи интеграций (`FB_*`, `SLACK_*`, `GOOGLE_*`, `AZURE_*`, `OPENAI_*` и т.п.) | со старого |
| `FRONTEND_URL` | на репетиции — временный домен; при боевом — основной (`https://chatwoot.on-mail.ru` или новый) |
| `HELPCENTER_URL` | если доки открываются по отдельному домену — его |
| `FORCE_SSL` | `true` (без него cookie сессии не получат `SameSite=None`, виджет в iframe отвалится) |
| `POSTGRES_HOST` / `POSTGRES_USERNAME` / `POSTGRES_DATABASE` | `postgres` / `postgres` / `chatwoot` (контейнер) |
| `POSTGRES_PASSWORD`, `REDIS_PASSWORD` | новые сильные пароли |
| `REDIS_URL` | `redis://:ПАРОЛЬ@redis:6379/5` |
| `ACTIVE_STORAGE_SERVICE` | `local` |

> В `.env` не ставьте кавычки вокруг значений и пробелы вокруг `=`: файл читает и Docker `--env-file` (шаг 7), он кавычки не снимает.

### Шаг 3. Собрать образ

```bash
docker compose -f docker-compose.onlinesim.yaml build
```

Долго (10–30 мин). Внутри собираются гемы, Vite-ассеты, SDK и `lite_sdk.min.js`.

### Шаг 4. Поднять Postgres и Redis, создать БД с расширениями

```bash
docker compose -f docker-compose.onlinesim.yaml up -d postgres redis
docker compose -f docker-compose.onlinesim.yaml ps
```

Chatwoot 4.x нужны расширения PostgreSQL:

| Расширение | Зачем |
|------------|-------|
| `pg_stat_statements` | статистика запросов |
| `pg_trgm` | поиск по тексту (триграммы) |
| `pgcrypto` | `gen_random_uuid()` |
| `vector` | **pgvector**, Captain / AI-поиск (появилось в 4.x, на старом сервере его нет) |
| `plpgsql` | стандартное, есть всегда |

Образ `pgvector/pgvector:pg16` уже содержит все пакеты, нужно только создать их в БД (от суперпользователя `postgres`):

```bash
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -c "CREATE DATABASE chatwoot;"
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -d chatwoot -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements; CREATE EXTENSION IF NOT EXISTS pg_trgm; CREATE EXTENSION IF NOT EXISTS pgcrypto; CREATE EXTENSION IF NOT EXISTS vector;"
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -d chatwoot -c "\dx"
```

В `\dx` должны быть все пять.

### Шаг 5. Бэкап со старого сервера

На **старом** сервере (имя БД смотрите в его `.env`, `POSTGRES_DATABASE`, обычно `chatwoot_production`):

```bash
sudo -u postgres pg_dump -Fc -d chatwoot_production -f /tmp/chatwoot.dump
sudo tar -czf /tmp/chatwoot-storage.tgz -C /home/chatwoot/chatwoot storage
sudo tar -czf /tmp/chatwoot-avatars.tgz -C /home/chatwoot/chatwoot avatars
sudo cp /home/chatwoot/chatwoot/.env /tmp/chatwoot-old.env
```

`storage/` — вложения, `avatars/` — аватары (отдельный сервис OnlineSIM, был и в 3.11). Если `avatars/` нет — пропустить.

Скопировать на новый сервер:

```bash
scp OLD:/tmp/chatwoot.dump OLD:/tmp/chatwoot-storage.tgz OLD:/tmp/chatwoot-avatars.tgz /opt/chatwoot/
```

### Шаг 6. Залить дамп в новую БД

```bash
cd /opt/chatwoot
docker compose -f docker-compose.onlinesim.yaml exec -T postgres \
  pg_restore -U postgres -d chatwoot --no-owner --no-acl < chatwoot.dump
```

`--no-owner --no-acl` — на старом владелец был пользователь `chatwoot`, в контейнере его нет.
Ошибки вида `extension ... already exists` безобидны. В дампе 3.11 есть лишние старые таблицы (`events`, `subscriptions`) — не мешают.

Проверка:

```bash
docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -d chatwoot -c "select count(*) from accounts; select max(version) from schema_migrations;"
```

### Шаг 7. Промежуточная миграция через 4.1.0

Схему 3.11 надо сначала довести официальным образом **v4.1.0** (без этого миграции 4.2+ падают на feature flags):

```bash
docker network ls | grep chatwoot     # обычно chatwoot_default
docker run --rm --network chatwoot_default --env-file .env \
  -e RAILS_ENV=production -e INSTALLATION_ENV=docker \
  chatwoot/chatwoot:v4.1.0 bundle exec rails db:chatwoot_prepare
```

Должно закончиться без ошибок. Если упало — не идти дальше, разбираться на этом шаге (лог целиком).

### Шаг 8. Миграции до v4.19.1 (наш образ)

```bash
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails db:chatwoot_prepare
```

Здесь же выполнится миграция OnlineSIM `20261109000000_onlinesim_force_premium_plan_and_disable_branding`: план `premium`, id `onlinesim`, брендинг выключен на всех аккаунтах.

Проверка:

```bash
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails runner '
  puts [Account.count, User.count, Conversation.count, Message.count].inspect
  puts InstallationConfig.where(name: %w[INSTALLATION_PRICING_PLAN INSTALLATION_IDENTIFIER]).map { |c| [c.name, c.value] }.inspect
  puts Account.all.map { |a| a.feature_enabled?("disable_branding") }.uniq.inspect
'
```

Ожидается: числа как на старом, `premium` / `onlinesim`, `[true]`.

### Шаг 9. Файлы: вложения и аватары

```bash
docker compose -f docker-compose.onlinesim.yaml up -d rails
docker compose -f docker-compose.onlinesim.yaml cp chatwoot-storage.tgz rails:/tmp/
docker compose -f docker-compose.onlinesim.yaml cp chatwoot-avatars.tgz rails:/tmp/
docker compose -f docker-compose.onlinesim.yaml exec rails sh -c \
  'cd /app && tar -xzf /tmp/chatwoot-storage.tgz && tar -xzf /tmp/chatwoot-avatars.tgz && rm /tmp/chatwoot-*.tgz && ls storage | head && ls avatars | head'
```

Файлы ложатся в volumes `storage_data` (`/app/storage`) и `avatars_data` (`/app/avatars`).

### Шаг 10. Запуск всего и Nginx

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
docker compose -f docker-compose.onlinesim.yaml ps
docker compose -f docker-compose.onlinesim.yaml logs -f rails sidekiq
```

Nginx + Let’s Encrypt на домен из `FRONTEND_URL` — [01-docker-from-scratch.md](01-docker-from-scratch.md), раздел 7 (там же блок `/cable` для WebSocket).

### Шаг 11. Проверка (репетиция)

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

Если всё ок — переходим к боевому переезду. Если нет — чиним и повторяем с шага 4 (`DROP DATABASE chatwoot;` и заново).

### Шаг 12. Боевой переезд

1. Предупредить пользователей о простое (обычно 20–60 мин, зависит от размера БД).
2. На **старом**: остановить приложение, чтобы данные больше не менялись:
   ```bash
   sudo systemctl stop chatwoot.target
   ```
3. Сделать **свежий** бэкап — шаг 5.
4. На **новом**: в `.env` выставить боевой `FRONTEND_URL`, остановить контейнеры, пересоздать БД:
   ```bash
   docker compose -f docker-compose.onlinesim.yaml down
   docker compose -f docker-compose.onlinesim.yaml up -d postgres redis
   docker compose -f docker-compose.onlinesim.yaml exec postgres psql -U postgres -c "DROP DATABASE chatwoot;"
   ```
5. Повторить шаги **4 (БД + расширения), 6, 7, 8, 9, 10**. Volumes с файлами очистить перед шагом 9 не обязательно — `tar` перезапишет.
6. DNS: A-запись домена на IP нового сервера, выпустить SSL на новом (`certbot --nginx -d ДОМЕН`).
7. Проверка — шаг 11.

### Шаг 13. После переезда

| Что | Действие |
|-----|----------|
| Telegram / WhatsApp / другие каналы с вебхуками | открыть канал в настройках и пересохранить — вебхук перерегистрируется на текущий `FRONTEND_URL` |
| OAuth (Google, Microsoft, Facebook, Instagram и т.п.) | у провайдера добавить redirect URI с новым доменом, если домен поменялся |
| Второй домен (`chatwoot.on-mailbox.com` и т.п.) | направить на новый сервер тоже; ссылки на файлы и картинки строятся от `FRONTEND_URL` |
| Бэкапы | настроить ежедневный `pg_dump` + копию volumes `storage_data`, `avatars_data` ([01](01-docker-from-scratch.md), раздел 9) |
| Старый сервер | держать выключенным 1–2 недели, потом удалить |

### Откат

Старый сервер не трогаем: `sudo systemctl start chatwoot.target` на старом и DNS обратно на старый IP.
Данные, написанные на новом после переезда, при откате теряются.
