#!/bin/bash

set -ex

NODE_ENV=production
export NODE_ENV

rm -rf dist
mkdir dist

REACT_APP_CONF_DOMAIN=js npm run build
npm run snapshot
mv build dist/js
REACT_APP_CONF_DOMAIN=css npm run build
npm run snapshot
mv build dist/css
REACT_APP_CONF_DOMAIN=decompress npm run build
npm run snapshot
mv build dist/decompress
