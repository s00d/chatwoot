module Enterprise::ChatwootHub
  # OnlineSIM self-hosted hub (override with CHATWOOT_HUB_URL)
  ENTERPRISE_BASE_URL = 'https://hub.2.chatwoot.on-mail.ru'.freeze

  def base_url
    ENV.fetch('CHATWOOT_HUB_URL', ENTERPRISE_BASE_URL)
  end
end
