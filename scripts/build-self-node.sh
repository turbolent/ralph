echo "==== BUILD ====" && \
time python build.py -e node --path core && \
time NODE_PATH=build node build/tests/runtime-tests.js && \
echo "==== SELF ====" && \
time python build.py -e node --path build --dest self && \
time NODE_PATH=self node build/tests/runtime-tests.js && \
time NODE_PATH=self node build/tests/reader-tests.js

