#!/bin/bash

set -a
source .env
set +a

docker compose down --volumes --rmi all
docker system prune --force
