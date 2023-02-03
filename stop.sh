#!/bin/bash

set -a
source .env
set +a

docker compose down --remove-orphans --rmi local --volumes
docker system prune --force
