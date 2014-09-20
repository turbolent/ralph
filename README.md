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


To compile a simple "Hello, world!" program:

* Place `hello.ralph` in `src/`:
 
  ```
  (define-module hello
    import: (ralph/format-out)
    export: (hello))
      
  (define-function hello (name)
    (format-out "Hello, %s!" name))
  ```

* Compile the `hello` module:

  `$ NODE_PATH=core node -e "require('ralph/compiler')['compile-module']('hello')"`

* Run the program by opening the `hello` module and calling the `hello` function:

  ```
  $ NODE_PATH=build node -e "require('hello')['hello']('World')"
  Hello, World!
  ```

## Development

Recompile the compiler and run all tests using:

* `$ ./scripts/test-self.sh`
