#!/bin/bash
# rm -Rf build && \
time NODE_PATH=core node --stack_size=4096  -e "require('ralph/compiler')['compile-module']('ralph/compiler.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler.test')"
