#!/usr/bin/env bash
# ci: yes
# Chapter 7 · Redis TTLs and a Postgres index turning a 1M-row scan into a lookup.
source "$(dirname "$0")/../lib.sh"; need docker; set -e
docker run -d --rm --name lab-redis redis:7-alpine >/dev/null
docker run -d --rm --name lab-pg -e POSTGRES_PASSWORD=pw postgres:17 >/dev/null
trap 'docker stop lab-redis lab-pg >/dev/null 2>&1' EXIT
step "Redis: value with a TTL"
sleep 2; R="docker exec lab-redis redis-cli"
$R SET user:42 '{"name":"Jane"}' EX 300 >/dev/null; echo "  GET → $($R GET user:42)   TTL → $($R TTL user:42)s"
step "Postgres: waiting to start"; for i in $(seq 30); do docker exec lab-pg pg_isready -q && break; sleep 1; done
P="docker exec -i lab-pg psql -U postgres -qAt"
$P -c "CREATE TABLE users(id serial primary key, email text); INSERT INTO users(email) SELECT 'u'||g||'@x.com' FROM generate_series(1,1000000) g;"
step "Without index"; $P -c "EXPLAIN ANALYZE SELECT * FROM users WHERE email='u777777@x.com';" | grep -E 'Scan|Execution' | sed 's/^/  /'
$P -c "CREATE INDEX ON users(email);"
step "With index";    $P -c "EXPLAIN ANALYZE SELECT * FROM users WHERE email='u777777@x.com';" | grep -E 'Scan|Execution' | sed 's/^/  /'
