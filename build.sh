#!/bin/bash

rm -rf public/packs
rake assets:clean assets:clobber assets:precompile RAILS_ENV=production NODE_OPTIONS=--openssl-legacy-provider
git add public/*
