#!/bin/bash
echo "==== STAGE 1 ====" && \
time python build.py -e ringojs --path src --bootstrap --dest stage1 && \
time ringo -l -m stage1 stage1/tests/runtime-tests.js && \
echo "==== STAGE 2 ====" && \
time python build.py -e ringojs --path stage1 --dest stage2 && \
time ringo -l -m stage2 stage2/tests/runtime-tests.js && \
echo "==== BUILD ====" && \
time python build.py -e ringojs --path stage2 && \
time ringo -l -m build build/tests/runtime-tests.js
