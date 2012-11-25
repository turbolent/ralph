#!/bin/bash
rm -Rf build core{2,3} && \
time NODE_PATH=core node --stack_size=4096  -e "require('ralph/compiler')['compile-module']('ralph/compiler')" && \
mv build core2 && \
time NODE_PATH=core2 node --stack_size=4096  -e "require('ralph/compiler')['compile-module']('ralph/compiler')" && \
mv build core3 && \
time NODE_PATH=core3 node --stack_size=4096  -e "require('ralph/compiler')['compile-module']('ralph/compiler.test')" && \
time NODE_PATH=core3 node --stack_size=4096  -e "require('ralph/compiler')['compile-module']('ralph/runtime.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler.test')" && \
time NODE_PATH=build node -e "require('ralph/runtime.test')"

