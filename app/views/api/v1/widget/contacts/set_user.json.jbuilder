json.id @contact.id
json.has_email @contact.email.present?
json.has_name @contact.name.present?
json.has_phone_number @contact.phone_number.present?
json.pubsub_token @contact_inbox.pubsub_token
json.widget_auth_token @widget_auth_token if @widget_auth_token.present?
