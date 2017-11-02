#!/bin/bash

set -ex

NODE_ENV=production
export NODE_ENV

echo "127.0.0.1 css.localhost\n" > /etc/hosts
echo "127.0.0.1 js.localhost\n" > /etc/hosts
echo "127.0.0.1 decompress.localhost\n" > /etc/hosts

react-scripts build

react-snapshot

react-snapshot --domain css.localhost --output-dir build/css
react-snapshot --domain js.localhost --output-dir build/js
react-snapshot --domain decompress.localhost --output-dir build/decompress
