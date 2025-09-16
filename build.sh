#!/bin/bash

rm -rf public/packs
# Use custom tasks to preserve images during build
rake assets:clean assets:clobber assets:precompile RAILS_ENV=production NODE_OPTIONS=--openssl-legacy-provider
# Clean up temporary files after successful build
rake assets:cleanup_images_backup RAILS_ENV=production
git add public/*
