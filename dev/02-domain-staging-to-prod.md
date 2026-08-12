# 02. Временный домен → основной

Цель: поднять инстанс на **staging-домене**, проверить миграцию и виджет, затем переключить на **боевой** домен без пересборки логики (только DNS + `.env` + Nginx).

## Схема

```text
1) DNS A → staging.chat.example.com → IP нового сервера
2) FRONTEND_URL=https://staging...  + certbot
3) Миграция данных, тесты виджета / iframe / SameSite
4) DNS A → chat.example.com → тот же IP (или cutover)
5) FRONTEND_URL=https://chat.example.com + новый сертификат
6) (опционально) убрать staging
```

## 1. Staging DNS

В панели DNS:

| Тип | Имя | Значение |
|-----|-----|----------|
| A | `chat-staging` (или `staging.chat`) | IP нового сервера |

Дождитесь пропагации (`dig +short chat-staging.example.com`).

## 2. Конфиг приложения

В `.env`:

```bash
FRONTEND_URL=https://chat-staging.example.com
FORCE_SSL=true
# HELPCENTER_URL=https://chat-staging.example.com   # если используете HC на том же хосте
```

Перезапуск:

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
```

Nginx `server_name` = staging-имя, затем:

```bash
sudo certbot --nginx -d chat-staging.example.com
```

## 3. Что проверить на staging

- Логин в dashboard
- Виджет / `lite_sdk.js` на тестовой странице с `BASE_URL` = staging
- iframe / cookies (нужны HTTPS + `SameSite=None` — уже в форке)
- WebSocket `/cable`
- Загрузка вложений
- После миграции БД — старые диалоги и контакты

Виджет на сайте OnlineSIM пока **не** переключайте на staging, пока не готовы: либо отдельный тестовый HTML, либо временно `BASE_URL` только у себя.

## 4. Переход на основной домен

### 4.1. Подготовка

1. Добавьте A-запись основного домена на **новый** IP (TTL лучше снизить заранее до 300).
2. Добавьте `server_name chat.example.com;` в Nginx (можно второй `server` блок или заменить staging).
3. Выпустите сертификат:

```bash
sudo certbot --nginx -d chat.example.com
```

### 4.2. Смена FRONTEND_URL

```bash
# .env
FRONTEND_URL=https://chat.example.com
FORCE_SSL=true
```

```bash
docker compose -f docker-compose.onlinesim.yaml up -d
```

### 4.3. Данные в БД / конфиге

После смены домена обычно достаточно `FRONTEND_URL`. Дополнительно проверьте:

- Super Admin → Installation configs / account settings с абсолютными URL
- Inbox website URL / callback URL каналов (WhatsApp, Facebook и т.д.) — обновить в кабинетах провайдеров на новый домен
- Webhooks наружу

В rails console (при необходимости):

```ruby
InstallationConfig.find_by(name: 'ACCOUNT_LEVEL_FEATURE_DEFAULTS') # пример
# массовых URL в Chatwoot мало — главное FRONTEND_URL и каналы
```

### 4.4. Виджет на проде

На сайте клиента:

```html
g.src = 'https://chat.example.com/lite_sdk.js';
// или /packs/js/sdk.js
window.chatwootLITESDK.BASE_URL = 'https://chat.example.com';
```

### 4.5. Старый сервер

После проверки трафика на новом:

1. Поставьте maintenance / остановите старый `chatwoot.target` (linux-vm)
2. Оставьте staging DNS на время отката или удалите

## 5. Откат

Если cutover неудачный:

1. DNS A основного домена → IP **старого** сервера
2. На новом можно оставить staging для отладки
3. БД на старом не затирайте, пока не пройдёт soak-период (24–72 ч)

## 6. Два домена одновременно (опционально)

Можно держать оба `server_name` в Nginx на один upstream, но **один** канонический `FRONTEND_URL` (основной).  
Staging тогда только для ручных тестов с явным URL, не для продакшен-виджета.
