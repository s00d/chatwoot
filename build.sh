rm -rf public/packs
rake assets:precompile RAILS_ENV=production
git add public/*
