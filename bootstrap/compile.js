// reduced compiler, runs on any CommonJS-compatible engine

// TODO: escapes in strings: \t, \r, \n

var system = require('system');
var fs = require('fs');

// utils

Object.prototype.toArray = function () {
    return Array.prototype.slice.call(this);
}

// stream

function Stream (string) {
    this.string = string;
    this.index = 0;
}

Stream.prototype.peekChar = function () {
    return this.string[this.index];
}

Stream.prototype.rest = function () {
    return this.string.substring(this.index);
}

Stream.prototype.skipLine = function () {
    var result = /(.*)[\n]/.exec(this.rest());
    this.index += result[1].length;
}

Stream.prototype.skipWhitespace = function () {
    var result = /[ \t\n]*/.exec(this.rest());
    this.index += result[0].length;
}

Stream.prototype.readChar = function () {
    return this.string[this.index++];
}

Stream.prototype.eof = function () {
    return this.index >= (this.string.length - 1);
}

// symbol

function Symbol (name) {
    this.name = name;
}

Symbol.escaped = {
    '-': 'minus',
    '+': 'plus',
    '!': 'bang',
    '?': 'what',
    '%': 'percent',
    '#': 'hash',
    '@': 'at',
    '*': 'star',
    '/': 'slash',
    '=': 'equals',
    ':': 'colon',
    '<': 'lessthan',
    '>': 'greaterthan'
}

Symbol.reserved = ['function', 'arguments'];

Symbol.prototype.escape = function () {
    var name = this.name;
    for (c in Symbol.escaped) {
	name = name.replace(new RegExp('\\' + c, 'g'),
			    '_' + Symbol.escaped[c] + '_');
    }
    if (Symbol.reserved.indexOf(name) >= 0)
	name = '_' + name;
    return name;
}

Symbol.prototype.toString = function () {
    return this.escape();
}

// hash symbols

var HashSymbol = function (name) {
    this.name = name;
}

HashSymbol.names = ['key', 'rest', 'values'];

HashSymbol.names.forEach(function (hashSymbol) {
    HashSymbol[hashSymbol] = new HashSymbol(hashSymbol);
});

/* TODO: into own namespace?
HashSymbol.prototype.toString = function () {
    return 'HashSymbol.' + this.name;
}
*/

// reader

function Reader (stream) {
    this.stream = stream;
}

Reader.prototype.read = function () {
    this.stream.skipWhitespace();

    if (!this.stream.eof()) {
	switch (this.stream.peekChar()) {
	case ';':
	    this.stream.skipLine();
	    return this.read();
	case '"':
	    return this.readString();
	case '(':
	    return this.readList();
	default:
	    return this.readAtom();
	}
    }
}

Reader.prototype.readAtom = function () {
    var c = this.stream.peekChar();
    if ((c >= '0' && c <= '9') || c == '-')
	return this.readNumber();
    else
	return this.readSymbol();
}

Reader.prototype.readList = function () {
    var result = new Array();
    this.stream.readChar();
    this.stream.skipWhitespace();

    while (this.stream.peekChar() != ')') {
	if (this.stream.eof())
	    throw new Error('Unbalanced parens');
	var next = this.read();
	result.push(next);
	this.stream.skipWhitespace();
    }

    this.stream.readChar();
    return result;
}

Reader.prototype.readSymbol = function () {
    var match = /[^()\n\t ]+/.exec(this.stream.rest());
    var name = match[0];
    this.stream.index += name.length;
    // TODO: keywords
    if (name[0] == '#' && HashSymbol.names.indexOf(name.substring(1)) >= 0)
	return HashSymbol[name.substring(1)];
    else
	return new Symbol(match[0]);
}

Reader.prototype.readString = function () {
    this.stream.readChar();
    var c, result = "";
    while ((c = this.stream.readChar()) != '"') {
	if (c == '\\')
	    result += this.stream.readChar();
	else
	    result += c;
    }
    return result;
}

Reader.prototype.readNumber = function () {
    var match = /[^()\n\t ]+/.exec(this.stream.rest());
    this.stream.index += match[0].length;
    return new Number(match[0]);
}


// compiler

function compileAll (forms, all, comma) {
    var separator = ';\n';
    if (comma)
	separator = ', ';
    var result = forms.map(compile).join(separator);
    if (all && forms.length == 1)
	result += (separator + '\n');
    return result;
}

function compile (form) {
    if (form instanceof Array) {
	var head = form[0];
	var rest = form.slice(1);
	if (macros.hasOwnProperty(head.name))
	    return macros[head.name].apply(this, rest);
	else if (infix.hasOwnProperty(head.name))
	    return rest.map(compile).join(' ' + infix[head.name] + ' ');
	else
	    return compile(head) + '(' + rest.map(compile).join(', ') + ')';
    } else if (typeof form == "string") {
	return '"' + form + '"';
    } else if (form instanceof Symbol
	       && symbolMacros.hasOwnProperty(form.name)) {
	return symbolMacros[form.name]();
    } else
	return form;
}

// TODO: precedence?

var infix = {
    'and': '&&',
    'or': '||',
    'js:>': '>',
    'js:<': '<',
    'js:==': '==',
    'js:===': '==='
}

function restDeclaration (name, requiredArguments) {
    return 'var ' + name
	+ ' = Array.prototype.slice.call(arguments, '
	+ requiredArguments + ');\n';
}

function argumentNames (args) {
    return args.map(function (arg) {
	if (arg instanceof Array)
	    return arg[0];
	else
	    return arg;
    });
}

function requiredArguments (args) {
    function position (hashSymbol) {
	var result = args.indexOf(hashSymbol);
	if (result == -1)
	    result = args.length;
	return result;
    }
    var hashSymbolPositions =
	[HashSymbol.key, HashSymbol.rest, HashSymbol.values].map(position);
    var end = Math.min.apply(null, [args.length].concat(hashSymbolPositions));
    return args.slice(0, end);

}

function addReturn (forms) {
    // TODO: values
    // var firstValue = ... , restValues = ... ;
    // if (arguments.callee.caller.acceptsMultipleValues)
    //   arguments.callee.caller.multipleValues = restValues;
    // return firstValue;
    var last = forms.length - 1;
    forms[last] = [new Symbol('js:return'), forms[last]];
    return forms;
}

function functionDeclaration (name, args, body) {
    var documentation = "";
    if (typeof body[0] == 'string' && body.length > 1) {
	documentation = '/** \n';
	body.shift().split('\n').forEach(function (line) {
	    documentation += ' * ' + line + '\n';
	});
	documentation += ' */\n';
    }
    var rest = "";
    var restPosition = args.indexOf(HashSymbol.rest);
    if (restPosition >= 0)
	rest = restDeclaration(args[restPosition + 1], 
			       requiredArguments(args).length);

    // TODO: keyword arguments, use reduce
    return (documentation +
	    'function ' + (name ? name + ' ' : '')
	    + '(' + argumentNames(requiredArguments(args)).join(', ') + ') '
	    + '{\n' + rest + compileAll(addReturn(body)) + ';\n}');
}

var macros = {
    'define-function': function (name, args) {
	var body = arguments.toArray().slice(2);
	return functionDeclaration(name, args, body);
    },
    'method': function (args) {
	var body = arguments.toArray().slice(1);
	return functionDeclaration(null, args, body);
    },
    'js:array': function () {
	return '[' + arguments.toArray().map(compile).join(', ') + ']';
    },
    'js:call': function (name) {
	var args = arguments.toArray().slice(1);
	return name + '(' + args.map(compile).join(', ') + ')';
    },
    // TODO: 'define creates a variable accessible through
    //        variable-name in the current module'
    'define': function (name, value) {
	return "var " + name + " = " + compile(value);
    },
    'js:return': function (body) {
	return 'return ' + compile(body);
    },
    // TODO: bind multiple values
    // e.g. (bind ((foo bar baz (values 1 2 3)))
    // arguments.callee.acceptsMultipleValues = true;
    // (...) ? arguments.callee.MultipleValues : 
    //         new Array([foo, bar, baz].length)
    // TODO: test multiple value bind with nested functions
    'bind': function (bindings) {
	var body = arguments.toArray().slice(1);
	return '(function () {\n'
	    + compileAll(bindings.map(function (binding) {
		return ([new Symbol('define')].concat(binding));
	    }), true)
	    + compileAll(addReturn(body))
	    + ';\n})()';
    },
    // TODO: expand to (bind ((name (method (..
    'bind-methods': function {
    },
    'js:get-property': function () {
	var elements = arguments.toArray();
	return new Symbol([compile(elements[0])]
			  .concat(elements.slice(1)
				  .map(compile)
				  .map(function (element) {
				      if (element instanceof Symbol)
					  return '.' + element;
				      else
					  return '[' + element + ']';
				  })).join(''));
    },
    'begin': function () {
	return '(' + compileAll(arguments.toArray(), false, true) + ')';
    },
    'if': function (test, then, _else) {
	return '(' + compile(test) + ' ? '
	    + compile(then) + ' : ' + compile(_else) + ')';
    },
    'when': function (test, then) {
	return compile([new Symbol('if'), test, then, new Symbol('#f')]);
    },
    'js:defined': function (expression) {
	return '(typeof (' + compile(expression) + ') != "undefined")';
    },
    // FIXME
    'cond': function () {
	var cases = arguments.toArray();
	if (cases[0][0].name == 'else:')
	    return compile(cases[0].splice(1));
	else if (cases.length == 1)
	    return compile(new Symbol('#f'));
	else
	    return compile([new Symbol('if'), cases[0][0],
			    cases[0].splice(1),
			    [new Symbol('cond')].concat(cases.splice(1))]);
    }
}

var symbolMacros = {
    'js:null': function () { return 'null'; },
    '#f': function () { return 'false'; },
    '#t': function () { return 'true'; }
}

function main () {
    if (system.args.length < 2)
	throw new Error("provide a filename");

    var filename = system.args[1];
    var data = fs.read(filename);

    var stream = new Stream("(\n" + data + "\n)");
    var reader = new Reader(stream);
    var forms = reader.read();

    fs.write(fs.base(filename, '.ralph') + '.js',
	     compileAll(forms) + '\n');
}

main();

