#!/bin/bash
time python build.py --bootstrap --dest stage1 && \
time NODE_PATH=stage1 node stage1/tests/runtime-tests.js && \
time NODE_PATH=stage1 python build.py --dest stage2 && \
time NODE_PATH=stage2 node stage2/tests/runtime-tests.js && \
time NODE_PATH=stage2 python build.py && \
time NODE_PATH=build node build/tests/runtime-tests.js
