#!/bin/bash

PWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

platform="$1"
stamp=`date +%Y%m%d%H%M%S`

echo "Bundle for $platform"

if ! [ -d "bundle" ];then
  mkdir "bundle"
fi

if ! [ -d "bundle/$platform" ];then
  mkdir "bundle/$platform"
fi

$PWD/node_modules/.bin/react-native bundle --entry-file=index.$platform.js --platform=$platform --dev=false --bundle-encoding=utf-8 --assets-dest=bundle/$platform --sourcemap-output=bundle/$platform/bundle.$platform.sourcemap --bundle-output bundle/$platform/bundle.$platform-$stamp.jsbundle
