# 05. Локальный Docker (dev), без конфликта с nginx

Nginx на `:80`/`:443` **не трогаем**. Chatwoot поднимается на **`127.0.0.1:3041`**, Postgres/Redis — внутри Docker на `:5433`/`:6380`.

## Быстрый старт

```bash
cd /path/to/chatwoot
cp dev/.env.docker.local.example .env.docker
export DOCKER_BUILDKIT=1

# первая сборка долгая (10–30+ мин)
docker compose --env-file .env.docker \
  -f docker-compose.yaml -f docker-compose.local.yaml build base

docker compose --env-file .env.docker \
  -f docker-compose.yaml -f docker-compose.local.yaml run --rm rails \
  bundle exec rails db:chatwoot_prepare

docker compose --env-file .env.docker \
  -f docker-compose.yaml -f docker-compose.local.yaml up -d
```

Открыть: **http://127.0.0.1:3041**

## Dev-аккаунт (из `db/seeds.rb`)

| Поле | Значение |
|------|----------|
| Email | `john@acme.inc` |
| Пароль | `Password1!` |

SuperAdmin + два тестовых аккаунта (Acme Inc / Acme Org).

Super Admin UI: http://127.0.0.1:3041/super_admin/sign_in (тот же `john@acme.inc`).  
Локально в `.env.docker` нужен `FORCE_SSL=false` — без HTTPS сессия super admin не сохраняется (cookies `Secure` только при `FORCE_SSL=true`).

## Порты

| Сервис | URL / порт |
|--------|------------|
| Dashboard | http://127.0.0.1:3041 |
| Vite HMR | 127.0.0.1:3037 |
| Mailhog UI | http://127.0.0.1:8025 |
| Postgres (с хоста) | 127.0.0.1:5433 |
| Redis (с хоста) | 127.0.0.1:6380 |

## Полезное

```bash
# логи
docker compose --env-file .env.docker -f docker-compose.yaml -f docker-compose.local.yaml logs -f rails

# остановить (graceful — Postgres корректно завершится)
docker compose --env-file .env.docker -f docker-compose.yaml -f docker-compose.local.yaml stop

# полный teardown
docker compose --env-file .env.docker -f docker-compose.yaml -f docker-compose.local.yaml down

# консоль
docker compose --env-file .env.docker -f docker-compose.yaml -f docker-compose.local.yaml exec rails bundle exec rails c
```

## Prod-like локально (без dev-seed)

Если нужен образ как на сервере (production, без john@acme.inc):

```bash
cp dev/.env.production.example .env
# в .env задать POSTGRES_PASSWORD, REDIS_PASSWORD, SECRET_KEY_BASE
# FRONTEND_URL=http://127.0.0.1:3042
# CHATWOOT_BIND=127.0.0.1:3042
# POSTGRES_BIND=127.0.0.1:5434
# REDIS_BIND=127.0.0.1:6381

docker compose -f docker-compose.onlinesim.yaml build
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails db:chatwoot_prepare
docker compose -f docker-compose.onlinesim.yaml up -d
```

Первый вход — onboarding (создание admin в UI).

## Nginx (опционально)

Чтобы открывать по своему локальному домену, добавьте **отдельный** `server` block (не меняя существующие сайты), проксируя на `127.0.0.1:3041`. Пример: [nginx-chatwoot.conf.example](nginx-chatwoot.conf.example).
