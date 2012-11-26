#!/bin/bash
rm -Rf build core{2,3} && \
time NODE_PATH=core node -e "require('ralph/compiler')['compile-module']('ralph/compiler')" && \
mv build core2 && \
time NODE_PATH=core2 node -e "require('ralph/compiler')['compile-module']('ralph/compiler')" && \
mv build core3 && \
time NODE_PATH=core3 node -e "require('ralph/compiler')['compile-module']('ralph/runtime.test')" && \
time NODE_PATH=core3 node -e "require('ralph/compiler')['compile-module']('ralph/compiler/syntax-quote.test')" && \
time NODE_PATH=core3 node -e "require('ralph/compiler')['compile-module']('ralph/compiler/utilities.test')" && \
time NODE_PATH=core3 node -e "require('ralph/compiler')['compile-module']('ralph/compiler/reader.test')" && \
time NODE_PATH=core3 node -e "require('ralph/compiler')['compile-module']('ralph/compiler/macroexpansion.test')" && \
time NODE_PATH=core3 node -e "require('ralph/compiler')['compile-module']('ralph/compiler/special-forms.test')" && \
time NODE_PATH=core3 node -e "require('ralph/compiler')['compile-module']('ralph/compiler/macros.test')" && \
time NODE_PATH=build node -e "require('ralph/runtime.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler/syntax-quote.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler/utilities.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler/reader.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler/macroexpansion.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler/special-forms.test')" && \
time NODE_PATH=build node -e "require('ralph/compiler/macros.test')"
