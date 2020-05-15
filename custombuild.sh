#!/bin/sh
ng build card --prod --output-hashing=none && cat dist/card/runtime-es2015.js dist/card/polyfills-es2015.js dist/card/main-es2015.js > preview/card.js


