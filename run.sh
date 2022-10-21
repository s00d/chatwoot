#bundle
#yarn
bundle exec rake db:create
bundle exec rake db:reset
foreman start -f Procfile.dev
