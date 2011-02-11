# Ralph

Ralph is a Lisp-1 dialect that compiles to JavaScript. It is inspired by
[Dylan - An object-oriented dynamic language](http://lispm.dyndns.org/documentation/prefix-dylan/book.annotated/annotated-manual.html), but features no classes and multi-methods. Instead it borrows the concept of types and protocols from Clojure.

## Status

The bootstraping compiler is almost complete and the runtime has matured.
The test suite is passing all tests.

## Getting started

The bootstraping compiler runs with any CommonJS-compatible JavaScript engine.
Currently flusspferd is the only environment that was tested.

- Bootstrap the runtime and compile: 
  `$ flusspferd build.js --compileDirectories runtime compiler tests`

- Run the tests: 
  `$ flusspferd -Iruntime tests/runtime-tests.js`