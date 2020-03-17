#!/usr/bin/env bash
set -e

if [[ "$OSTYPE" == "darwin"* ]]; then
    command docker-compose -- 
    #command docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-chrome.json http://host.docker.internal:8080/performance/performance.html
    #command docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-firefox.json http://host.docker.internal:8080/performance/performance.html
elif [[ "$OSTYPE" == "linux-gnu" ]]; then
    command docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-chrome.json --network=host http://localhost:8080/performance/performance.html
    command docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-firefox.json --network=host http://localhost:8080/performance/performance.html
elif [[ "$OSTYPE" == "linux-gnu" && $# > 0 && $1 == "bamboo" ]]; then
    command docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-bamboo-chrome.json --network=host http://localhost:8080/performance/performance.html
    command docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io --config=config/config-bamboo-firefox.json --network=host http://localhost:8080/performance/performance.html
fi
