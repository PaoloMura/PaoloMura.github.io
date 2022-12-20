#!/bin/sh

echo 'Removing node_modules/.cache/gh-pages/'
rm -r ../node_modules/.cache/gh-pages/
echo 'Deploying app...'
npm run deploy
