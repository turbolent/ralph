# Ralph

Ralph is a Lisp-1 dialect that compiles to JavaScript. It is inspired by
[Dylan - An object-oriented dynamic language](http://lispm.dyndns.org/documentation/prefix-dylan/book.annotated/annotated-manual.html), but doesn't feature multiple-inheritance and multi-methods. Instead it borrows the concept of protocols from Clojure.

## Status

The bootstraping compiler is complete, the runtime is mostly stable.
The compiler has been ported to Ralph itself, supports define-macro and is self-hosting.
The test suite is passing all tests.

## Getting started

The compiler and runtime run with any CommonJS-compatible JavaScript engine and in modern browsers.
Currently Flusspferd and RingoJS are tested and supported environments.

- Bootstrap the runtime and compiler:
  `$ ringo -l -b path.js --bootstrapDirectories runtime compiler tests`

- Run the runtime tests:
  either: `$ flusspferd -Iruntime tests/runtime-tests.js`
  or: `$ ringo -l -b paths.js tests/runtime-tests.js`

- Compile the runtime and compiler:
  `$ ringo -l -b path.js --compileDirectories runtime compiler tests`

