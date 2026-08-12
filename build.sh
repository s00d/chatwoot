#!/bin/bash
set -euo pipefail

# Local/CI helper: compile Vite assets + SDK + lite_sdk.
# Production Docker image already runs the same via `rake assets:precompile`
# (see lib/tasks/build.rake). Do NOT commit public/vite or public/packs.

export RAILS_ENV="${RAILS_ENV:-production}"
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=4096}"

echo "==> assets:precompile (includes build:sdk + lite_sdk minify)"
SECRET_KEY_BASE="${SECRET_KEY_BASE:-precompile_placeholder}" \
  bundle exec rake assets:precompile

echo "==> done. Artifacts are under public/vite and public/packs (gitignored)."
