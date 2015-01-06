# Ralph

Ralph is a Lisp-1 dialect that compiles to JavaScript. It is heavily inspired 
by an early version of Dylan (also known as "Prefix Dylan"), as described in 
[Dylan – An object-oriented dynamic language](http://lispm.de/docs/prefix-dylan/book.annotated/contents.html).

## Getting started

### Installation

First, install [Node.js](http://nodejs.org/) and then all necessary modules:

* `$ npm install`

The directory `core` already contains the full Ralph runtime and compiler 
as pre-compiled JavaScript, so you are ready to go.

### REPL

To start a local, Node.js-based REPL, run:

* `$ NODE_PATH=core node repl.js`

To start a remote, browser-based REPL, install [browserify](http://browserify.org/),
generate the browser evaluator, start the REPL with the `--remote` option,
and open `index.html` in your browser:

* `$ NODE_PATH=~/node_modules:core browserify evaluator.js -o evaluator.out.js`
* `$ NODE_PATH=core node repl.js --remote`

### Compilation

To compile a simple "Hello, world!" program:

* Place `hello.ralph` into `src`:
 
  ```
  (define-module hello
    import: (ralph/format-out)
    export: (hello))
      
  (define-function hello (name)
    (format-out "Hello, %s!" name))
  ```

* Compile the `hello` module. The compiler outputs files into `build`.

  `$ NODE_PATH=core node -e "require('ralph/compiler')['compile-module']('hello')"`

* Run the program by opening the `hello` module and calling the `hello` function:

  ```
  $ NODE_PATH=build node -e "require('hello')['hello']('World')"
  Hello, World!
  ```

## Documentation

There is unfortunately no API documentation. The module [`ralph/core`](src/ralph/core.ralph) 
contains the core runtime and the standard library. 

The [manual of Prefix Dylan](http://lispm.de/docs/prefix-dylan/book.annotated/contents.html) 
can be used as a reference and is a good introduction into the language.

There are also [slides from a talk](http://turbolent.github.io/ralph-ilc2012/) 
given at [ILC 2012](http://www.international-lisp-conference.org/2012/index.html),
and a [paper](https://github.com/turbolent/ralph-ilc2012/blob/master/paper.pdf) 
explaining the motivation, features and compilation strategy of Ralph.

### Syntax

For performance reasons, Ralph is using JavaScript arrays as its core data structure,
instead of implementing its own list data structure based on objects. Arrays can be
created using the `[]` syntax (e.g. `(first [1 2 3])`).

The syntax for numbers and strings is that of JavaScript. 

Symbols may contain any character which is not otherwise syntactically significant
(e.g., introduces a number, an array, etc). The character sequence `::` in symbols
is treated as the separator for fully-qualified symbols: The first part is 
the module name, the second is the symbol name.

Keywords have the same syntax as symbols and end with a colon (e.g., `foo:`).

The syntax for the canonical true value is `#t`, for the canonical false value `#f`.

In parameter lists, `#rest` is used to introduce the name of the variable containing
the additional arguments, and `#key` is used to introduce keyword parameters.

A single quote is used for quoting. A backquote is used for syntax-quoting (see [macros](#Macros)).

A semicolon indicates the start of a comment. 

## Interoperability

The special operator `%native` allows writing inline JavaScript. All strings that are
passed to it are directly emitted as-is. Numbers are first converted to strings, and 
symbols are properly renamed. Other forms are not supported.

For example, the following Ralph code

```
(bind ((delta 3))
  (%native "x += " delta " * " 2))
```

would compile to the following JavaScript code:

```
var delta__1 = 3;
x += delta__1 * 2;
```

Ralph's compiler knows nothing about the global `x` and there is no need to 
declare it exists.

The utility macro `.` can be used for easily writing JavaScript method calls.
For example,

```
(. (%native "console") 
   (log "Hello, %s" "World"))
```

would compile to:

```
console.log("Hello, %s!", "World");
```
  
Ralph also integrates well with Node.js. To be able to use a Node.js module 
in Ralph, place a `.rm` file (ralph module definition) in `src` that specifies
the name, it is native (`native?: #t`) and the definitions it is exporting. 

For example, a basic definition for the Node.js module `vm` could look like:

```
("vm"
 native?: #t
 exports: ("createContext" "runInContext"))
```

See [`fs`](src/fs.rm) and [`ralph/file-system`](src/ralph/file-system.ralph)
for a an extended example of this mechanism.


## Macros

Ralph supports hygienic macros through Clojure-like syntax-quoting.

In a separate module, define the macro using `define-macro`. In the module you 
want to use it, import the module during compilation using the `compile-time-import:`
option in the `define-module` definition. 

For a full example, see [`ralph/macro-test.a`](src/ralph/macro-test.a.ralph), which
can be compiled using.

` $ NODE_PATH=core:build node -e "require('ralph/compiler')['compile-module']('ralph/macro-test.a')"`

The section "Macro system" in the [paper](https://github.com/turbolent/ralph-ilc2012/blob/master/paper.pdf) contains more details.

## Development

The compiler can be recompiled and all tests can be run using:

* `$ ./scripts/test-self.sh`


## Status

Ralph is [not actively maintained](http://turbolent.com/2014/09/20/ralph-future.html).

If you have questions, are interested in using it, or even would like to continue its development, just open a new issue!


