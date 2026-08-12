# OnlineSIM Chatwoot — эксплуатация (Docker)

Документация для ветки `upgrade/v4.16.2-onlinesim`.

| Файл | Содержание |
|------|------------|
| [01-docker-from-scratch.md](01-docker-from-scratch.md) | Установка Docker → сборка → первый запуск |
| [02-domain-staging-to-prod.md](02-domain-staging-to-prod.md) | Временный домен для тестов → замена на основной |
| [03-migrate-from-linux-vm.md](03-migrate-from-linux-vm.md) | Перенос данных со старого Linux VM (cwctl / install.sh) |
| [04-github-actions-and-env.md](04-github-actions-and-env.md) | Ручной GitHub Action + полный список ENV |
| [.env.production.example](.env.production.example) | Шаблон `.env` для продакшена |
| [nginx-chatwoot.conf.example](nginx-chatwoot.conf.example) | Пример Nginx |
| [CUSTOM_VS_V4.16.2.md](CUSTOM_VS_V4.16.2.md) | Кастомы OnlineSIM vs upstream v4.16.2 |
| [CUSTOM_VS_V3.11.1.md](CUSTOM_VS_V3.11.1.md) | Исторический отчёт кастомов на базе 3.11 |
| [CUSTOM_VS_V3.11.1.patch](CUSTOM_VS_V3.11.1.patch) | Patch-справочник (3.11) |

## Принцип сборки (важно)

**Не коммитим** `public/packs`, `public/vite`, собранные ассеты (как в старом форке с `git add public/*`).

Docker-образ сам выполняет `rake assets:precompile`, который:

1. `pnpm run build:sdk` → `public/packs/js/sdk.js`
2. minify `public/lite_sdk.js` → `public/lite_sdk.min.js`
3. Vite-сборку dashboard/widget

См. [`lib/tasks/build.rake`](../lib/tasks/build.rake) и [`docker/Dockerfile`](../docker/Dockerfile).

Compose для этого форка: [`docker-compose.onlinesim.yaml`](../docker-compose.onlinesim.yaml).
