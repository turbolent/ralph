#!/bin/bash
echo "==== STAGE 1 ====" && \
time python build.py -e xpcshell --path src --bootstrap --dest stage1 && \
time MODULE_PATH=stage1 xpcshell require.js file://`pwd`/stage1/tests/runtime-tests.js && \
echo "==== STAGE 2 ====" && \
time python build.py -e xpcshell --path src --dest stage2 && \
time MODULE_PATH=stage2 xpcshell require.js file://`pwd`/stage2/tests/runtime-tests.js && \
echo "==== BUILD ====" && \
time python build.py -e xpcshell --path stage2 && \
time MODULE_PATH=build xpcshell require.js file://`pwd`/build/tests/runtime-tests.js