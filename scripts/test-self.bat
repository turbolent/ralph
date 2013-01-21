@echo off

rd /s /q %CD%\build
rd /s /q %CD%\core2
rd /s /q %CD%\core3

set NODE_PATH=%CD%\core
node --max-stack-size=4096 -e "require('ralph/compiler')['compile-module']('ralph/compiler')"

move %CD%\build %CD%\core2
set NODE_PATH=%CD%\core2
node --max-stack-size=4096 -e "require('ralph/compiler')['compile-module']('ralph/compiler')"

move %CD%\build %CD%\core3
set NODE_PATH=%CD%\core3
node --max-stack-size=4096 -e "require('ralph/compiler')['compile-module']('ralph/compiler')"
node --max-stack-size=4096 -e "require('ralph/compiler')['compile-module']('ralph/compiler.test')"
node --max-stack-size=4096 -e "require('ralph/compiler')['compile-module']('ralph/runtime.test')"

set NODE_PATH=%CD%\build
node -e "require('ralph/compiler.test')"
node -e "require('ralph/runtime.test')"
