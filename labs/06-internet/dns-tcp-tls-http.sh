#!/usr/bin/env bash
# ci: yes
# Chapter 6 · The journey of one HTTPS request, measured.
source "$(dirname "$0")/../lib.sh"; need curl dig openssl; set -e
H=www.wikipedia.org
step "DNS: resolve $H"; dig +short $H | head -3 | sed 's/^/  /'
step "Timing breakdown (DNS → TCP → TLS → first byte)"
curl -so /dev/null -w '  dns=%{time_namelookup}s tcp=%{time_connect}s tls=%{time_appconnect}s ttfb=%{time_starttransfer}s http=%{http_version}\n' https://$H
step "Response headers"; curl -sI https://$H | head -15 | sed 's/^/  /'
step "Conditional request (ETag → 304)"
U=https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png
E=$(curl -sI $U | awk 'tolower($1)=="etag:"{print $2}' | tr -d '\r')
echo "  ETag $E → status $(curl -s -o /dev/null -w '%{http_code}' -H "If-None-Match: $E" $U)"
step "TLS certificate"
echo | openssl s_client -connect $H:443 -servername $H 2>/dev/null | openssl x509 -noout -subject -issuer -enddate | sed 's/^/  /'
