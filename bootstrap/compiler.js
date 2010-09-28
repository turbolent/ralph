
var primitives = require('./primitives');
var Symbol = primitives.Symbol, HashSymbol = primitives.HashSymbol;

var Reader = require('./reader').Reader;
var Stream = require('./stream').Stream;

//// utils

Object.prototype.toArray = function () {
    return Array.prototype.slice.call(this);
};

//// expansion

function argumentNames (args) {
    return args.map(function (arg) {
	return (arg instanceof Array ? arg[0] : arg);
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
    var documentation = [];
    if (typeof body[0] == 'string' && body.length > 1) {
	documentation.push([new Symbol('js:documentation'), body.shift()]);
    }
    var restAndKey = [];
    var restPosition = args.indexOf(HashSymbol.rest);
    if (restPosition >= 0) {
	restAndKey.push([new Symbol('js:var'), args[restPosition + 1],
		   [[new Symbol('js:get-property'),
		     "Array", "prototype", "slice", "call"],
		    [new Symbol('js:identifier'), "arguments"],
		    requiredArguments(args).length]]);
    }
    var keyPosition = args.indexOf(HashSymbol.key);
    if (keyPosition >= 0) {
	args.slice(keyPosition + 1).forEach(function (key) {
	    var name, _default = new Symbol('#f');
	    if (key instanceof Array) {
		name = key[0];
		_default = key[1];
	    } else if (key instanceof Symbol) {
		name = key;
	    }
	    if (name) {
		restAndKey.push([new Symbol('js:var'), name, _default]);
	    }
	});
	// TODO: search and set keyword values
	// TODO: reuse rest variable is available:
	// if (restPosition >= ) args[restPosition + 1]
    }
    // TODO: documentation, keyword arguments, use reduce
    return [new Symbol('js:function'), name,
	    argumentNames(requiredArguments(args)),
	    [new Symbol('begin')].concat(restAndKey).concat(body)];
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
	return functionDeclaration(null, args, body);
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
	    return ([new Symbol('js:var')].concat(binding));
	});
	return [[new Symbol('method'), []]
		.concat(declarations)
		.concat(body)];
    },
    'when': function (test, then) {
	return [new Symbol('if'), test, then, new Symbol('#f')];
    },
    'cond': function () {
	var cases = arguments.toArray();
	if (cases.length == 0)
	    return new Symbol('#f');
	else {
	    var _case = cases[0];
	    if (_case instanceof Symbol && _case[0].name == 'else:')
		return _case.slice(1);
	    else {
		var then = _case.slice(1);
		then.unshift(new Symbol('begin'));
		return [new Symbol('if'), _case[0], then,
			[new Symbol('cond')].concat(cases.slice(1))];
	    }
	}
    },
    'bind-methods': function (bindings) {
	var body = arguments.toArray().slice(1);
	var methodBindings = bindings.map(function (binding) {
	    return [binding[0], [new Symbol('method')].concat(binding.slice(1))];
	});
	return [new Symbol('bind'), methodBindings].concat(body);
    },
    'handler-case': function (body) {
	var conditions = arguments.toArray().slice(1);
	// TODO: gensym
	var conditionVariable = new Symbol('__CONDITION__');
	var cases = conditions.map(function (condition) {
	    var _if = condition[0];
	    return [[new Symbol('instance?'),
		     conditionVariable, _if[0]]]
		.concat(condition.slice(1));
	});
	return [[new Symbol('method'), [],
		 [new Symbol('js:try'), body, conditionVariable,
		  [new Symbol('cond')].concat(cases)]]];
    },
    // TODO: define-method
    'define-method': function () {
	return [new Symbol('begin'),
		[new Symbol('define-function')].concat(arguments.toArray())];
    }
}

var symbolMacros = {}

function macroexpand (form) {
    if (form instanceof Array) {
	var head = form[0];
	var rest = form.slice(1);
	if (head instanceof Symbol && macros.hasOwnProperty(head.name))
	    form = macros[head.name].apply(this, rest);

	if (form instanceof Array)
	    return form.map(macroexpand);
	else
	    return macroexpand(form);
    } else if (form instanceof Symbol
	       && symbolMacros.hasOwnProperty(form.name)) {
	return macroexpand(symbolMacros[form.name]());
    } else
	return form;
}

//// writing

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

var symbolValues = {
    'js:null': 'null',
    '#f': 'false',
    '#t': 'true'
}

var specialForms = {
    'js:negative': function (allowStatements, object) {
	return '(- ' + write(object) + ')';
    },
    'not': function (allowStatements, expression) {
	return '!' + write(expression);
    },
    'begin': function (allowStatements) {
	var forms = arguments.toArray().slice(1);
	if (allowStatements) {
	    var separator = ';\n';
	    var result = forms.map(writeExpressions).join(separator);
	    if (forms.length > 1)
		result += '\n';
	    return result;
	} else
	    return '(' + forms.map(writeExpressions).join(', ') + ')';
    },
    'if': function (allowStatements, test, then, _else) {
	if (allowStatements) {
	    var result = 'if (' + write(test) + ') {\n'
		+ writeStatements(then) + '}';
	    if (_else instanceof Array)
		result += (' else {\n' + writeStatements(_else) + '\n}');
	    return result;
	} else {
	    return '(' + write(test) + ' ? '
		+ write(then) + ' : '
		+ write(_else) + ')';
	}
    },
    'list': function (allowStatements) {
	var elements = arguments.toArray().slice(1);
	return '[' + elements.map(writeExpressions).join(', ') + ']';
    },
    'js:defined': function (allowStatements, expression) {
	return '(typeof (' + write(expression) + ') != "undefined")';
    },
    'js:try': function (allowStatements, body, conditionVariable, _catch) {
	// if !allowStatements: wrap with function
	return 'try {\n'
	    + writeStatements(body) // TODO: return?
	    + '} catch (' + write(conditionVariable) + ') {\n'
	    + writeStatements(_catch)
	    + '\n}';
    },
    'js:for-in': function (allowStatements, variableAndExpression) {
	// if !allowStatements: wrap with function
	var body = arguments.toArray().slice(2);
	var variable = variableAndExpression[0];
	var expression = variableAndExpression[1];
	return 'for (var ' + variable + ' in ' + write(expression) + ') {\n'
	    + writeStatements([new Symbol('begin')].concat(body)) + '}';
    },
    'js:identifier': function (allowStatements, name) {
	return ('' + name);
    },
    'js:get-property': function (allowStatements) {
	var elements = arguments.toArray().slice(1);
	var object = elements[0];
	return object + (elements.slice(1)
			 .map(function (element) {
			     if (typeof element == 'string' &&
				 /^[a-zA-Z_]+$/.exec(element))
			     {
				 return '.' + element;
			     } else
				 return '[' + element + ']';
			 }).join(''));
    },
    'js:call': function (allowStatements, name) {
	var args = arguments.toArray().slice(2);
	return name + '(' + args.map(writeExpressions).join(', ') + ')';
    },
    'js:new': function (allowStatements, name) {
	var args = arguments.toArray().slice(2);
	return 'new ' + name + '(' + args.map(writeExpressions).join(', ') + ')';
    },
    'js:var': function (allowStatements, name, value) {
	return "var " + name + " = " + write(value);
    },
    'define': function (allowStatements, name, value) {
	return name + " = " + write(value);
    },
    'js:return': function (allowStatements, body) {
	return 'return ' + write(body);
    },
    'js:function': function (allowStatements, name, args, body) {
	return 'function ' + (name ? name + ' ' : '')
	    + '(' + args.join(', ') + ') '
	    + '{\n' + writeStatements(addReturn(body)) + '}';
    },
    'js:documentation': function (allowStatements, documentation) {
	return '/** \n'
	    + documentation.split('\n').map(function (line) {
		return ' * ' + line;
	    }).join('\n')
	    + '\n */\n';
    }
}

// helper
function writeStatements (form) {
    return write(form, true);
}

function writeExpressions (form) {
    return write(form, false);
}

function write (form, allowStatements) {
    if (form instanceof Array) {
	var head = form[0];
	var rest = form.slice(1);
	if (head instanceof Symbol && infix.hasOwnProperty(head.name)) {
	    return '(' + rest.map(writeExpressions).join(' ' + infix[head.name] + ' ') + ')';
	} else if (head instanceof Symbol && specialForms.hasOwnProperty(head.name)) {
	    return specialForms[head.name].apply(this, [allowStatements].concat(rest));
	} else if (head instanceof Array && head[0] && head[0].name == 'js:function') {
	    return '(' + write(head) + ')(' + rest.map(writeExpressions).join(', ') + ')';
	} else {
	    return write(head) + '(' + rest.map(writeExpressions).join(', ') + ')';
	}
    } else if (typeof form == "string") {
	return '"' + form + '"';
    } else if (form instanceof Symbol && symbolValues.hasOwnProperty(form.name)) {
	return symbolValues[form.name];
    } else
	return form;
}

function compile (form, allowStatements) {
    return write(macroexpand(form), allowStatements);
}

//// interface

exports.compile = function (code) {
    var stream = new Stream("(begin\n" + code + "\n)");
    var reader = new Reader(stream);
    var form = reader.read();
    return compile(form, true);
}