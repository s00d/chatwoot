-- Extensions Chatwoot 4.x needs, created in POSTGRES_DB on the first start of an empty volume.
-- A restored dump may or may not carry them; pg_dump writes CREATE EXTENSION IF NOT EXISTS, so both cases work.
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS vector;
