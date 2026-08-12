# Be sure to restart your server when you modify this file.
# Sessions are used only for the super_admin dashboard (flash/CSRF), not for API auth.
# SameSite=None is required for OnlineSIM cross-site iframe embeds (HTTPS required).

Rails.application.config.session_store :cookie_store,
                                       key: '_chatwoot_session',
                                       same_site: :none,
                                       secure: true,
                                       httponly: true
