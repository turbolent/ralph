time python build.py -e node --path core && \
time NODE_PATH=build node build/tests/runtime-tests.js && \
time NODE_PATH=build node build/tests/reader-tests.js
