@echo off

set NODE_PATH=%CD%\core
node --max-stack-size=4096 -e "require('ralph/compiler')['compile-module']('ralph/compiler.test')"

set NODE_PATH=%CD%\build
node -e "require('ralph/compiler.test')"
