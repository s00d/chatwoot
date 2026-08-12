# 04. GitHub Actions (ручной) и переменные окружения

## A. Ручной Deploy Docker Action

Файл: [`.github/workflows/deploy_docker_manual.yml`](../.github/workflows/deploy_docker_manual.yml)

- Триггер: **только** `workflow_dispatch` (Actions → *Deploy Docker (manual)* → *Run workflow*)
- Не пушит образ при обычном `git push`
- Собирает `docker/Dockerfile` (внутри — `assets:precompile`, SDK, lite_sdk)
- Пушит в **GHCR** или **Docker Hub**

### Как запустить

1. GitHub → репозиторий → **Actions**
2. Workflow **Deploy Docker (manual)**
3. **Run workflow**
4. Параметры:
   - `image_tag` — например `staging`, `v4.16.2`, `prod-2026-08-12`
   - `push` — `true` чтобы залить в registry
   - `registry` — `ghcr.io` или `docker.io`

### Secrets и Variables — где взять и куда вписать

GitHub → **Settings** → **Secrets and variables** → **Actions**

#### Variables (не секретные)

| Name | Пример | Зачем |
|------|--------|-------|
| `DOCKER_IMAGE_NAME` | `s00d/chatwoot` или `myorg/chatwoot-onlinesim` | Имя образа без registry. Если пусто — берётся `github.repository` |

**Add variable** → Name / Value → Save.

#### Secrets

| Name | Когда нужен | Как получить |
|------|-------------|--------------|
| `GITHUB_TOKEN` | GHCR | **Не создаёте** — GitHub подставляет сам при `packages: write` |
| `DOCKERHUB_USERNAME` | `registry=docker.io` | Логин Docker Hub |
| `DOCKERHUB_TOKEN` | `registry=docker.io` | Docker Hub → Account Settings → Security → New Access Token (Read & Write) |

**Add repository secret** → вставить токен → Save.

#### Права GHCR

Для push в `ghcr.io/OWNER/REPO`:

- Workflow уже имеет `permissions: packages: write`
- После первого push: Packages → пакет → Package settings → **Manage Actions access** / visibility (internal/private) по политике org

### После успешного Action — на сервере

```bash
# пример GHCR
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin   # или PAT с read:packages

export CHATWOOT_IMAGE=ghcr.io/OWNER/REPO:staging
cd /opt/chatwoot
# убедитесь что compose использует image ${CHATWOOT_IMAGE}
docker compose -f docker-compose.onlinesim.yaml pull
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails db:chatwoot_prepare
docker compose -f docker-compose.onlinesim.yaml up -d
```

Локальная сборка **без** registry по-прежнему:

```bash
docker compose -f docker-compose.onlinesim.yaml build
```

---

## B. Полный справочник ENV для Docker-деплоя

Шаблон: [`dev/.env.production.example`](.env.production.example)  
Официальный список Chatwoot: https://developers.chatwoot.com/self-hosted/configuration/environment-variables

### Обязательные

| ENV | Описание | Как задать |
|-----|----------|------------|
| `SECRET_KEY_BASE` | Подпись cookies/сессий | `openssl rand -hex 64` (при миграции — **скопировать со старого**) |
| `FRONTEND_URL` | Публичный URL с https | `https://chat.example.com` |
| `RAILS_ENV` | | `production` |
| `POSTGRES_HOST` | | `postgres` (имя сервиса compose) |
| `POSTGRES_USERNAME` | | `postgres` |
| `POSTGRES_PASSWORD` | Пароль БД | сильный пароль; тот же в сервисе `postgres` |
| `POSTGRES_DATABASE` | | `chatwoot` |
| `REDIS_PASSWORD` | | сильный пароль |
| `REDIS_URL` | Полный URL | `redis://:PASSWORD@redis:6379/5` |

### Настоятельно рекомендуемые (прод)

| ENV | Описание |
|-----|----------|
| `FORCE_SSL` | `true` за reverse-proxy с HTTPS |
| `INSTALLATION_ENV` | `docker` |
| `ENABLE_ACCOUNT_SIGNUP` | `false` для закрытого инстанса |
| `RAILS_LOG_TO_STDOUT` | `true` |
| `ACTIVE_STORAGE_SERVICE` | `local` (volumes) или `amazon` / S3-compatible |
| `MAILER_SENDER_EMAIL` | From для писем |
| `SMTP_*` | Адрес/порт/логин SMTP |

### OnlineSIM / этот форк

| ENV | Default в коде | Описание |
|-----|----------------|----------|
| `CHATWOOT_HUB_URL` | `https://hub.2.chatwoot.on-mail.ru` | Свой hub |
| `REDIS_DB` | `5` | Номер Redis DB (также укажите в `REDIS_URL`) |
| `HELPCENTER_URL` | — | Если HC на отдельном домене |

Installation configs (premium, file size) задаются через `config/installation_config.yml` / Super Admin после старта; см. [CUSTOM_VS_V4.16.2.md](CUSTOM_VS_V4.16.2.md).

### MFA / encryption (если используете)

| ENV | Как получить |
|-----|----------------|
| `ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY` | `rails db:encryption:init` (один раз, сохранить!) |
| `ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY` | то же |
| `ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT` | то же |

### Хранилище S3 (опционально)

| ENV | Описание |
|-----|----------|
| `ACTIVE_STORAGE_SERVICE` | `amazon` или `s3_compatible` |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` / `AWS_REGION` / `S3_BUCKET_NAME` | для amazon |
| `STORAGE_*` | для s3_compatible (см. `.env.example`) |

### Где править ENV

| Место | Назначение |
|-------|------------|
| Файл `/opt/chatwoot/.env` на сервере | Основной источник для Compose (`env_file: .env`) |
| GitHub Actions Secrets/Variables | Только для **сборки/публикации образа**, не для runtime приложения |
| Nginx | Не ENV приложения; SSL и proxy headers |

**Не кладите** прод-`.env` в git.

### После смены критичных ENV

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
# если меняли только FRONTEND_URL — достаточно recreate rails/sidekiq
```

Смена `SECRET_KEY_BASE` разлогинит всех.  
Смена Redis DB «потеряет» кэш/онлайн-статусы (данные чатов в Postgres).

---

## C. Что сознательно НЕ делаем

- ❌ Не коммитим `public/packs` / `public/vite` в git  
- ❌ Не `git add public/*` в `build.sh`  
- ❌ Не авто-деплой на каждый push (только ручной workflow)  
- ❌ Не храним Docker Hub пароль в репозитории — только Actions Secrets
