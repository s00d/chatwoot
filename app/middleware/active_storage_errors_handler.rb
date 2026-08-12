class ActiveStorageErrorsHandler
  def initialize(app)
    @app = app
  end

  def call(env)
    @app.call(env)
  rescue ActiveStorage::FileNotFoundError => e
    Rails.logger.info "ActiveStorage::FileNotFoundError: #{e.message}"
    [404, { 'Content-Type' => 'text/plain' }, ['File Not Found']]
  end
end
