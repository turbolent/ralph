# Ralph

Ralph is a Lisp-1 dialect that compiles to JavaScript. It is inspired by
[Dylan - An object-oriented dynamic language](http://lispm.dyndns.org/documentation/prefix-dylan/book.annotated/annotated-manual.html), but doesn't feature multiple-inheritance and multi-methods.

## Status

The bootstrapping compiler is complete, the runtime is mostly stable.
The compiler has been ported to Ralph itself, supports define-macro and is self-hosting.
The test suite is passing all tests.

## Getting started

The compiler and runtime run with any CommonJS-compatible JavaScript engine and in modern browsers.
Install node and python, then:

  `$ ./build-all-node.sh`

This will bootstrap the compiler and run the tests.
