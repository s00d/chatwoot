# Кастомизации OnlineSIM на Chatwoot v4.16.2

База: upstream tag **v4.16.2** (`70e284a04`).  
Ветка: `upgrade/v4.16.2-onlinesim`.  
Источник правд: [CUSTOM_VS_V3.11.1.md](CUSTOM_VS_V3.11.1.md) (форк 3.11).

## Деплой БД (важно)

С живых данных **3.x** не прыгать сразу на 4.16.2:

1. `v3.x → v4.1.x` + `bundle exec rails db:chatwoot_prepare`
2. затем `v4.1.x → v4.16.2` + `db:chatwoot_prepare`

Прямой апгрейд 3→4.2+ часто ломает миграцию feature flags на аккаунтах с пользователями.

Нужен Ruby **3.4.4** (см. Gemfile / `.ruby-version`).

---

## Что сделано (по слоям)

### REPLACE (взяли механизм upstream)

| Было в 3.11 | Стало в 4.16.2 |
|-------------|----------------|
| Пустой `Branding.vue` | Feature `disable_branding` (+ seed включает на demo-аккаунте) |
| Хардкод 10 MB в `attachment.rb` | `MAXIMUM_FILE_UPLOAD_SIZE=10` в `config/installation_config.yml` + FE default 10 |

### REWRITE / REAPPLY

#### Hub / plan
- `lib/chatwoot_hub.rb`: hub `https://hub.2.chatwoot.on-mail.ru` (override `CHATWOOT_HUB_URL`)
- installation id по умолчанию `onlinesim`
- plan/qty из InstallationConfig без enterprise-gate; defaults `premium` / `99999999`

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
- Browser/OS на карточке, красный unread, цвета preview
- Контакты: `accountId` / `balance` / `spent` / `profile`; скрыты phone/company; скрыты attrs `accountId`/`hash_id`
- 24h время (`kk:mm`)
- Canned trigger `\` + `/`
- Alt+↑/↓ навигация
- Cap уведомлений ~10

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
- [ ] Astro `before-swap` restore (как upstream)
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
