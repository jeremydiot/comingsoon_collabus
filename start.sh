#!/bin/bash

set -a
source .env
set +a

[ ! -v FRONTEND_PORT ] && echo "ERROR (.env): missing 'FRONTEND_PORT' environment variable" && exit 1
[ ! -v BACKEND_PORT ] && echo "ERROR (.env): missing 'BACKEND_PORT' environment variable" && exit 1
[ ! -v BACKEND_URL ] && echo "ERROR (.env): missing 'BACKEND_URL' environment variable" && exit 1

./stop.sh

docker compose build --no-cache
docker compose up -d --detach --force-recreate
docker system prune --force
