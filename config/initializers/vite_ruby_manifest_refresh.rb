# OnlineSIM local Docker dev (docker-compose.local.yaml) serves assets from `vite build --watch`
# instead of the Vite dev server. Rails must not build them itself (VITE_RUBY_AUTO_BUILD=false),
# and in that mode vite_ruby caches the manifest for the life of the process, so each rebuild
# would go unnoticed. Reload the manifest on every request instead.
if Rails.env.development? && ActiveModel::Type::Boolean.new.cast(ENV.fetch('VITE_RUBY_REFRESH_MANIFEST', false))
  class ViteManifestRefresh
    def initialize(app)
      @app = app
    end

    def call(env)
      ViteRuby.instance.manifest.refresh
      @app.call(env)
    end
  end

  Rails.application.config.middleware.use ViteManifestRefresh
end
