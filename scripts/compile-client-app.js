var moduleName = process.argv[2];
require('ralph/compiler')['compile-client-application'](moduleName);
