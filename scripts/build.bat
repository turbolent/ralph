@echo off
set NODE_PATH=%CD%\core
node -e "require('ralph/compiler')"
