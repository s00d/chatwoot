#!/bin/sh
# Builds Traefik's routing for Chatwoot from CHATWOOT_DOMAINS (comma-separated), then starts Traefik.
# Every domain in the list gets its own Let's Encrypt certificate.
set -eu

: "${CHATWOOT_DOMAINS:?set CHATWOOT_DOMAINS in .env, e.g. chatwoot.example.com,docs.example.com}"

rule=$(echo "$CHATWOOT_DOMAINS" | awk -F, '{
  for (i = 1; i <= NF; i++) {
    gsub(/[[:space:]]/, "", $i)
    if ($i != "") rule = rule (rule ? " || " : "") "Host(`" $i "`)"
  }
  print rule
}')

cat > /etc/traefik/chatwoot.yml <<EOF
http:
  routers:
    chatwoot:
      rule: "${rule}"
      entryPoints: [websecure]
      service: chatwoot
      middlewares: [chatwoot-compress, chatwoot-hsts]
      tls:
        certResolver: le
  services:
    chatwoot:
      loadBalancer:
        servers:
          - url: "http://rails:3000"
  middlewares:
    # JS/CSS/JSON from the app go out compressed (the dashboard bundle is several MB raw)
    chatwoot-compress:
      compress: {}
    chatwoot-hsts:
      headers:
        stsSeconds: 31536000
        stsIncludeSubdomains: true
EOF

echo "Chatwoot router rule: ${rule}"
exec traefik "$@"
