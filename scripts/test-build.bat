@echo off
set NODE_PATH=%CD%\build
node -e "require('ralph/runtime.test')"
