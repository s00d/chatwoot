# Кастомизации форка vs Chatwoot v3.11.1

База сравнения: upstream tag **v3.11.1** (`ffc0183809bea74302b8f9f947ccb86a7f8b9a14`).  
Контекст: форк под **OnlineSIM** (`onlinesim.ru`, hub `hub.2.chatwoot.on-mail.ru`).

Полный машинный diff (без packs/assets/yarn.lock): `CUSTOM_VS_V3.11.1.patch`.

---

## 1. Lite SDK (ленивая загрузка)

**Где:** `public/lite_sdk.js`, `public/lite_sdk.min.js`, `public/chatwoot_local.html`, `public/chatwoot_local2.html`, скрипт `minify:lite_sdk` в `package.json`

**Что:** лёгкая кнопка «Поддержка»; полный `sdk.js` грузится только по клику или если чат открывали за последние 4 часа (`localStorage` / `chatwoot_opened_date`). Слушает события `chatwoot:open2` / `ready2` / `close2`.

**Зачем:** не тащить тяжёлый виджет на каждую страницу OnlineSIM.

---

## 2. SDK / iframe под сайт и Astro

**Где:** `app/javascript/packs/sdk.js`, `app/javascript/sdk/*`, widget ActionCable / contacts store, `app/views/api/v1/widget/contacts/set_user.json.jbuilder`, `shared/helpers/BaseActionCableConnector.js`

**Что:**

- `mountSelector` — встроить виджет в свой DOM-узел (embedded)
- `restoreWidgetBeforeSwap` — восстановление при Astro-навигации только по флагу (по умолчанию выкл.)
- `setUserForce` — принудительная смена пользователя без skip по cookie-hash
- `reset()` возвращает Promise; cookies SDK: `SameSite=None; Secure`
- доп. события (`open2` / `ready2` / `close2` / `loaded`…), обновление `pubsub_token` / WS при смене юзера
- ошибки `setUser` пробрасываются в parent; при reconnect WS — `fetchOldConversations()`

**Зачем:** кабинет в iframe/SPA, смена аккаунта без «залипшего» сокета.

---

## 3. Редактирование и удаление своих сообщений

**Где:** `app/controllers/api/v1/accounts/conversations/messages_controller.rb` (`edit` + guard на `destroy`), `config/routes.rb`, dashboard API/store, `Message.vue` / `MessageContextMenu.vue`, i18n `CONVERSATION.CONTEXT_MENU.EDIT`

**Что:** агент может править/удалять только сообщения, где `sender_id == текущий user`.

**Зачем:** править опечатки, не трогая чужие сообщения.

**Замечание:** в routes блок `messages` продублирован рядом с translate/retry — риск конфликта маршрутов.

---

## 4. Автоназначение при ответе

**Где:** `app/builders/messages/message_builder.rb` → `process_assignee`

**Что:** исходящее сообщение → диалог назначается на отправителя, кроме `user.id == 4`.

**Зачем:** «кто ответил — тот ведёт тикет»; id 4, скорее всего, бот/служебный аккаунт.

---

## 5. Тише activity при смене assignee

**Где:** `app/models/concerns/assignment_handler.rb`

**Что:** activity «сменился assignee» отключена (team-change activity остаётся). В лог пишется `process_assignment_changes off` / `saved_change_to_assignee_id off`.

**Зачем:** меньше системного шума от частого auto-assign.

---

## 6. Пагинация истории

**Где:** `app/finders/message_finder.rb`

**Что:** `limit` из params (по умолчанию 20) для after/before/latest.

**Зачем:** гибкая подгрузка ленты сообщений.

---

## 7. Файлы / диск

**Где:** `CleanupOldFilesJob` + cron в `config/schedule.yml` (04:00), `RemoveStaleActiveStorageFilesJob` (есть, в schedule закомментирован), `ActiveStorageErrorsHandler`, `attachment.rb` (лимит **10 MB** вместо 40), отдельный Disk service `avatars/` в `config/storage.yml`, rake `assets_preserve_images` / `assets_move_images`

**Что:** вложения старше ~160 дней помечаются удалёнными (`deleted: true`, content «auto cleanup»); аватары хранятся отдельно от общего storage; missing ActiveStorage file → **404** вместо 500.

**Зачем:** не раздувать диск, UI не падает на битых файлах, аватары не чистятся вместе с `storage/`.

---

## 8. White-label

**Где:** `app/javascript/shared/components/Branding.vue`, `app/views/public/api/v1/portals/_footer.html.erb`, заголовки виджета (`ChatHeader`, `CHAT_HEADER`), offline-тексты inbox/widget

**Что:** убран «Powered by Chatwoot» / portal footer; свои «Support» и offline copy («Unfortunately, all operators are offline»).

**Зачем:** брендинг OnlineSIM вместо Chatwoot.

---

## 9. Hub / «premium» навсегда

**Где:** `lib/chatwoot_hub.rb`

**Что:**

- `BASE_URL = 'https://hub.2.chatwoot.on-mail.ru'`
- `installation_identifier` → `'onlinesim'`
- `pricing_plan` → `'premium'`
- `pricing_plan_quantity` → `99999999`

**Зачем:** свой hub и premium-фичи без облачного биллинга Chatwoot.

---

## 10. Session cookies для iframe

**Где:** `config/initializers/session_store.rb`, `app/javascript/dashboard/store/utils/api.js`, cookies SDK

**Что:** `SameSite=None` (+ Secure на клиенте) вместо Lax.

**Зачем:** авторизация/сессия в cross-site iframe (нужен HTTPS).

---

## 11. Dashboard под саппорт OnlineSIM

**Где (основные):** `ChatList.vue`, `ConversationCard.vue`, `MessagePreview.vue`, `Secondary.vue`, Contact*/ContactsTable, `Editor.vue` / `ReplyBox.vue` / `MentionBox.vue`, store conversations/notifications, `uiSettings.js`, time mixins

**Что (главное):**

- новые чаты сверху (`unshift`); вкладка assignee в LocalStorage
- в карточке browser/OS/device; без аватарки в списке; unread badge красный
- preview цвета по типу (user/agent/bot/note)
- контакты: колонки `accountId`, `balance`, `spent`, `profile`; phone/company/social скрыты; custom attrs `accountId`/`hash_id` скрыты
- canned `/` и `\`; Esc/close; Alt+↑/↓ по чатам; время **24h** (`kk:mm`)
- secondary menu сворачивается (`is_secondary_menu_open`); macros/info первыми; conversation_info всегда open
- `conversation.read` на dashboard отключён; лимит нотификаций в store ~10
- guard на `chat.attachments` при ADD_MESSAGE

**Зачем:** быстрее работать с тикетами и видеть биллинг-атрибуты аккаунта.

---

## 12. Widget UI

**Где:** widget SCSS (`_conversation.scss`, `_variables.scss`), `AgentMessage.vue`, i18n locales (`CHAT_HEADER`)

**Что:** стили цитат/`blockquote`, 24h timestamps, единый заголовок во всех locale.

**Зачем:** шаблон `[ticket] >` и единый вид виджета.

---

## 13. Деплой / ops

**Где:** `build.sh`, `run.sh`, rake preserve/move images, Envoy (`composer.json`), Redis **db 5** (`lib/redis/config.rb`), доп. Redis helpers (`alfred.rb`), Puma + `puma_worker_killer` / ActionCable worker boot, yarn 3 (`.yarnrc.yml`), packs коммитятся (`.gitignore`), husky / `bin/validate_push` ослаблены, `webpacker.yml` https, `Gemfile` (`grpc ~> 1.62`)

**Что:** свой сбор assets с бэкапом картинок, свой деплой (Envoy), изоляция Redis, стабильность Puma/ActionCable.

**Зачем:** прод-пайплайн форка, не upstream CE release machine.

---

## 14. CI upstream вырезан

**Где:** удалены workflow’ы в `.github/workflows/` — `lint_pr`, `lock`, `logging_percentage_check`, `nightly_installer`, `publish_codespace_image`, `publish_foss_docker`, `run_foss_spec`, `run_response_bot_spec`, `size-limit`, `stale`

**Зачем:** не гонять чужой community CI на форке.

---

## 15. Мелочи / задел

| Тема | Детали |
|------|--------|
| Seeds | canned `ticket` → `[ticket] > ` |
| Отчёты | CSV агентов: колонка Agent id; swagger/i18n keys `time_work` / `resolution_work_time` — без полной реализации в diff |
| Schema | в `db/schema.rb` есть `events`, `subscriptions`, `super_admins`, `time_trackings` — моделей под это в diff почти нет (dump/хвост) |
| Helpers | `Conversation#last_message` / `#all_messages` — почти без usage |
| Mail | `bin/import_mail_to_chatwoot` — черновик mail ingress; в production ingress закомментирован |
| Прочее | `ruby.md` — личные заметки; `online_status_tracker` — `pluck` вместо `map`; `Thumbnail.vue` — пустой `src` → initials |

---

## Карта «зачем» (кратко)

| Группа | Мотив |
|--------|--------|
| Lite SDK + SDK events/embed | Перф и интеграция на onlinesim.ru |
| SameSite=None + premium hub | Cross-site iframe + enterprise UI без Chatwoot Cloud |
| Edit / auto-assign / quiet activities | Скорость работы операторов |
| Contacts custom columns | CRM/биллинг-данные аккаунта в саппорте |
| Storage cleanup / 10MB / avatars | Ops диска |
| build.sh / yarn3 / Envoy / no CI | Свой деплой |
| White-label | Скрытие бренда Chatwoot |
