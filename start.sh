#!/bin/bash

set -a
source .env
set +a

[ ! -v FRONTEND_PORT ] && echo "ERROR (.env): missing 'FRONTEND_PORT' environment variable" && exit 1

./stop.sh

docker compose build --no-cache
docker compose up -d --detach --force-recreate --remove-orphans
docker system prune --force
