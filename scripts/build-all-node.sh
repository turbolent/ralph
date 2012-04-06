#!/bin/bash
echo "==== STAGE 1 ====" && \
time python build.py -e node --path src --bootstrap --dest stage1 && \
time NODE_PATH=stage1 node stage1/tests/runtime-tests.js && \
echo "==== STAGE 2 ====" && \
time python build.py -e node --path stage1 --dest stage2 && \
time NODE_PATH=stage2 node stage2/tests/runtime-tests.js && \
echo "==== BUILD ====" && \
time python build.py -e node --path stage2 && \
time NODE_PATH=build node build/tests/runtime-tests.js
