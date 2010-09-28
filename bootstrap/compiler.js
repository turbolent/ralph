
var primitives = require('./primitives');
var Symbol = primitives.Symbol, HashSymbol = primitives.HashSymbol;

var Reader = require('./reader').Reader;
var Stream = require('./stream').Stream;

// utils

Object.prototype.toArray = function () {
    return Array.prototype.slice.call(this);
};

// compiler

function compileAll (forms, all, comma) {
    var separator = ';\n';
    if (comma) {
	separator = ', ';
    }
    var result = forms.map(compile).join(separator);
    if (all && forms.length == 1) {
	result += (separator + '\n');
    }
    return result;
}

function compile (form) {
    if (form instanceof Array) {
	var head = form[0];
	var rest = form.slice(1);
	if (head instanceof Symbol && macros.hasOwnProperty(head.name)) {
	    return macros[head.name].apply(this, rest);
	} else if (head instanceof Symbol && infix.hasOwnProperty(head.name)) {
	    return rest.map(compile).join(' ' + infix[head.name] + ' ');
	} else {
	    return compile(head) + '(' + rest.map(compile).join(', ') + ')';
	}
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
    'js:+': '+',
    'js:-': '-',
    'js:>': '>',
    'js:<': '<',
    'js:>=': '>=',
    'js:<=': '<=',
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
	if (arg instanceof Array) {
	    return arg[0];
	} else
	    return arg;
    });
}

function requiredArguments (args) {
    function position (hashSymbol) {
	var result = args.indexOf(hashSymbol);
	if (result == -1) {
	    result = args.length;
	}
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
    if (restPosition >= 0) {
	rest = restDeclaration(args[restPosition + 1],
			       requiredArguments(args).length);
    }

    // TODO: keyword arguments, use reduce
    return (documentation +
	    'function ' + (name ? name + ' ' : '')
	    + '(' + argumentNames(requiredArguments(args)).join(', ') + ') '
	    + '{\n' + rest + compileAll(addReturn(body)) + ';\n}');
}

var macros = {
    // TODO: should be property of current module,
    //       and accessible as function
    'define-function': function (name, args) {
	var body = arguments.toArray().slice(2);
	if (!(name instanceof Symbol))
	    throw new Error('function\'s name should be a symbol: '
			    + JSON.stringify(name));
	return functionDeclaration(name, args, body);
    },
    'method': function (args) {
	var body = arguments.toArray().slice(1);
	return '(' + functionDeclaration("", args, body) + ')';
    },
    'list': function () {
	return '[' + arguments.toArray().map(compile).join(', ') + ']';
    },
    'js:call': function (name) {
	var args = arguments.toArray().slice(1);
	return name + '(' + args.map(compile).join(', ') + ')';
    },
    'js:new': function (name) {
	var args = arguments.toArray().slice(1);
	return 'new ' + name + '(' + args.map(compile).join(', ') + ')';
    },
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
	var declarations = bindings.map(function (binding) {
	    return ([new Symbol('define')].concat(binding));
	});
	return compile([[new Symbol('method'), []]
			.concat(declarations)
			.concat(body)]);
    },
    'js:get-property': function () {
	var elements = arguments.toArray();
	var object = elements[0];
	if (!(object instanceof Symbol || typeof object == "string")) {
	    object = compile(object);
	}
	return object +
	    elements.slice(1)
	    .map(function (element) {
		if (typeof element == 'string' &&
		    /^[a-zA-Z_]+$/.exec(element))
		{
		    return '.' + element;
		} else
		    return '[' + compile(element) + ']';
	    }).join('');
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
	var _case = _case;
	if (_case[0].name == 'else:')
	    return compile(_case.splice(1));
	else if (cases.length == 1)
	    return compile(new Symbol('#f'));
	else
	    return compile([new Symbol('if'), _case[0],
			    _case.splice(1),
			    [new Symbol('cond')].concat(cases.splice(1))]);
    },
    'js:negative': function (object) {
	return '(- ' + object + ')';
    },
    'not': function (expression) {
	return '!' + compile(expression);
    },
    'js:identifier': function (name) {
	return ('' + name);
    },
    // statement!
    'js:for-in': function (variableAndExpression) {
	var body = arguments.toArray().slice(1);
	var variable = variableAndExpression[0];
	var expression = variableAndExpression[1];
	return 'for (var ' + variable + ' in ' + compile(expression) + ') {\n'
	    + compileAll(body, true) + '}';
    },
    // TODO:
    'handler-case': function (expression) {
	return compile([[new Symbol('method'), []]]);
    },
    // TODO: expand to (bind ((name (method (..
    'bind-methods': function () {
    },
    // TODO: define-method
}

var symbolMacros = {
    'js:null': function () { return 'null'; },
    '#f': function () { return 'false'; },
    '#t': function () { return 'true'; }
}

// interface

exports.compile = function (code) {
    var stream = new Stream("(\n" + code + "\n)");
    var reader = new Reader(stream);
    var forms = reader.read();
    return compileAll(forms);
}