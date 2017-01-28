#!/bin/bash

echo ">> Pulling latest changes from the github repo!!!"
git pull

echo ">> Killing any old process (if any):"
ps -edf | grep node | awk '{print $2}' | xargs -I {} kill -9 {}

echo ">> Starting yarn in the background"
yarn start 1> /dev/null 2>&1 &

