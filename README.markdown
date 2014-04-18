# Ralph

Ralph is a Lisp-1 dialect that compiles to JavaScript. It is inspired by
[Dylan - An object-oriented dynamic language](http://lispm.de/docs/prefix-dylan/book.annotated/contents.html).

## Getting started

First, install [node.js](http://nodejs.org/) and install the dependencies:

* `$ npm install`

To start a local REPL, run:

* `$ NODE_PATH=core node repl.js`

To start a remote REPL, install [browserify](http://browserify.org/),
generate the browser evaluator, start the REPL with the `--remote` option,
and open `index.html` in your browser:

* `$ NODE_PATH=~/node_modules:core browserify evaluator.js -o evaluator.out.js`
* `$ NODE_PATH=core node repl.js --remote`


## Development

Recompile the compiler and run all tests using:

* `$ ./scripts/test-self.sh`
