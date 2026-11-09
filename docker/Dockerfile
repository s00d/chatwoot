# syntax=docker/dockerfile:1.4
# Debian slim (glibc): grpc, google-protobuf, nokogiri and ffi install as prebuilt gems
# instead of being compiled from source as on Alpine/musl.
FROM node:24.22.1-bookworm-slim AS node

# Runtime shared by the build stage and the final image
FROM ruby:3.4.4-slim-bookworm AS base

ARG RAILS_ENV=production
ARG BUNDLE_WITHOUT=development:test
ARG RAILS_SERVE_STATIC_FILES=true
ENV RAILS_ENV=${RAILS_ENV} \
    BUNDLE_WITHOUT=${BUNDLE_WITHOUT} \
    BUNDLE_PATH=/gems \
    RAILS_SERVE_STATIC_FILES=${RAILS_SERVE_STATIC_FILES} \
    EXECJS_RUNTIME=Disabled \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    # Restrict libvips to its trusted image loaders when generating variants
    VIPS_BLOCK_UNTRUSTED=1

RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 postgresql-client libvips42 imagemagick tzdata git curl \
  && rm -rf /var/lib/apt/lists/* \
  && gem install bundler -v 2.5.16

COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
# pnpm version comes from "packageManager" in package.json
RUN ln -s ../lib/node_modules/corepack/dist/corepack.js /usr/local/bin/corepack && corepack enable

WORKDIR /app

# Build stage: compilers, gems, node packages, assets
FROM base AS build

RUN apt-get update && apt-get install -y --no-install-recommends build-essential libpq-dev libyaml-dev \
  && rm -rf /var/lib/apt/lists/*

COPY Gemfile Gemfile.lock ./
RUN bundle install -j 4 -r 3 && rm -rf /gems/ruby/*/cache

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=chatwoot-pnpm,target=/root/.local/share/pnpm/store \
  HUSKY=0 pnpm install

COPY . .

# Vite app bundles, packs/js/sdk.js and lite_sdk.min.js (lib/tasks/build.rake)
RUN mkdir -p log \
  && if [ "$RAILS_ENV" = "production" ]; then \
    SECRET_KEY_BASE=precompile_placeholder NODE_OPTIONS="--max-old-space-size=4096" bundle exec rake assets:precompile \
    && test -f public/packs/js/sdk.js && test -f public/lite_sdk.min.js \
    && rm -rf node_modules spec tmp/cache; \
  fi

ARG GIT_SHA=docker-build
RUN echo "$GIT_SHA" > .git_sha

# Final image
FROM base

# development: the rails entrypoint runs bundle install, which needs a compiler
RUN if [ "$RAILS_ENV" != "production" ]; then \
    apt-get update && apt-get install -y --no-install-recommends build-essential libpq-dev libyaml-dev \
    && rm -rf /var/lib/apt/lists/*; \
  fi

COPY --from=build /gems /gems
COPY --from=build /app /app

EXPOSE 3000
