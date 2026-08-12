# 01. Docker: от установки до запуска

## 0. Требования к серверу

- Ubuntu 22.04/24.04 (или совместимый Linux)
- ≥ 4 GB RAM (лучше 8 GB), ≥ 40 GB диск
- Открыты порты **80/443** (Nginx) и по желанию SSH
- DNS A-запись на IP сервера (см. [02-domain-staging-to-prod.md](02-domain-staging-to-prod.md))

## 1. Установка Docker Engine + Compose plugin

Официально: https://docs.docker.com/engine/install/ubuntu/

Кратко:

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo usermod -aG docker "$USER"
# перелогиньтесь, затем:
docker version
docker compose version
```

## 2. Код репозитория

```bash
sudo mkdir -p /opt/chatwoot && sudo chown "$USER":"$USER" /opt/chatwoot
cd /opt/chatwoot
git clone git@github.com:s00d/chatwoot.git .
git checkout upgrade/v4.16.2-onlinesim
```

(или `git pull` на уже существующем клоне)

## 3. Файл окружения `.env`

```bash
cp dev/.env.production.example .env
nano .env
```

Обязательно задайте:

| Переменная | Пример |
|------------|--------|
| `SECRET_KEY_BASE` | `openssl rand -hex 64` |
| `FRONTEND_URL` | `https://chat-staging.example.com` |
| `FORCE_SSL` | `true` |
| `POSTGRES_PASSWORD` | сильный пароль |
| `REDIS_PASSWORD` | сильный пароль |
| `REDIS_URL` | `redis://:ПАРОЛЬ@redis:6379/5` |

Подробности: [04-github-actions-and-env.md](04-github-actions-and-env.md).

## 4. Сборка образа (ассеты внутри Docker)

```bash
cd /opt/chatwoot
docker compose -f docker-compose.onlinesim.yaml build
```

Сборка долгая (10–30+ мин): Ruby gems + pnpm + Vite + SDK.  
В логе должны быть `Building SDK` / `assets:precompile`.  
Проверка внутри образа (опционально):

```bash
docker compose -f docker-compose.onlinesim.yaml run --rm --entrypoint sh rails -c \
  'test -f /app/public/packs/js/sdk.js && test -f /app/public/lite_sdk.js && echo OK'
```

## 5. Подготовка БД (первый запуск)

```bash
docker compose -f docker-compose.onlinesim.yaml run --rm rails \
  bundle exec rails db:chatwoot_prepare
```

## 6. Старт

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
docker compose -f docker-compose.onlinesim.yaml ps
curl -sI http://127.0.0.1:3000/api | head -5
```

Ожидается HTTP 200/302 с localhost.

## 7. Nginx + Let’s Encrypt (перед доменом)

Порты контейнера слушают **только localhost** (`127.0.0.1:3000`). Снаружи — Nginx.

```bash
sudo apt-get install -y nginx certbot python3-certbot-nginx
```

Пример `/etc/nginx/sites-available/chatwoot`:

```nginx
map $http_upgrade $connection_upgrade {
  default upgrade;
  '' close;
}

upstream chatwoot {
  server 127.0.0.1:3000;
}

server {
  listen 80;
  server_name chat-staging.example.com;

  location / {
    proxy_pass http://chatwoot;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_read_timeout 300;
    client_max_body_size 20m;
  }

  location /cable {
    proxy_pass http://chatwoot;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 86400;
  }
}
```

```bash
sudo ln -sf /etc/nginx/sites-available/chatwoot /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d chat-staging.example.com
```

После SSL в `.env`:

```bash
FRONTEND_URL=https://chat-staging.example.com
FORCE_SSL=true
```

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
```

## 8. Обновление кода / образа

### Вариант A — сборка на сервере

```bash
cd /opt/chatwoot
git pull
docker compose -f docker-compose.onlinesim.yaml build
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails db:chatwoot_prepare
docker compose -f docker-compose.onlinesim.yaml up -d
```

### Вариант B — образ из GitHub Actions

Собрать вручную Action (см. [04](04-github-actions-and-env.md)), затем на сервере:

```bash
# в .env или shell:
export CHATWOOT_IMAGE=ghcr.io/OWNER/REPO:staging
docker compose -f docker-compose.onlinesim.yaml pull
docker compose -f docker-compose.onlinesim.yaml run --rm rails bundle exec rails db:chatwoot_prepare
docker compose -f docker-compose.onlinesim.yaml up -d
```

> При `pull` у сервиса должен быть `image:` с тем же именем. Compose-файл уже читает `CHATWOOT_IMAGE`.

## 9. Полезные команды

```bash
# логи
docker compose -f docker-compose.onlinesim.yaml logs -f rails
docker compose -f docker-compose.onlinesim.yaml logs -f sidekiq

# rails console
docker compose -f docker-compose.onlinesim.yaml exec rails bundle exec rails c

# бэкап БД
docker compose -f docker-compose.onlinesim.yaml exec -T postgres \
  pg_dump -U postgres chatwoot | gzip > chatwoot-$(date +%F).sql.gz
```

## 10. Volumes (данные)

| Volume | Содержимое |
|--------|------------|
| `postgres_data` | PostgreSQL |
| `redis_data` | Redis |
| `storage_data` | ActiveStorage вложения (`/app/storage`) |
| `avatars_data` | Аватары (`/app/avatars`, кастом OnlineSIM) |

Не удаляйте volumes без бэкапа.
