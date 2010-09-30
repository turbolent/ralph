
var primitives = require('./primitives');
var Symbol = primitives.Symbol, HashSymbol = primitives.HashSymbol;

var Reader = require('./reader').Reader;
var Stream = require('./stream').Stream;

//// utils

Object.prototype.toArray = function () {
    return Array.prototype.slice.call(this);
};

function S (name) {
    return new Symbol(name);
}

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
    var last = forms.length - 1;
    if (forms[last] instanceof Array
	&& !(forms[last][0] instanceof Symbol
	     && forms[last][0].name == 'js:return'))
    {
	forms[last] = [S('js:return'), forms[last]];
    }
    return forms;
}

function functionDeclaration (name, args, body) {
    var documentation = [];
    if (typeof body[0] == 'string' && body.length > 1) {
	documentation.push([S('js:documentation'), body.shift()]);
    }
    var rest = [[S('js:get-property'),
		 "Array", "prototype", "slice", "call"],
		[S('js:identifier'), "arguments"],
		requiredArguments(args).length];
    var restAndKey = [];
    var restPosition = args.indexOf(HashSymbol.rest);
    if (restPosition >= 0) {
	restAndKey.push([S('js:var'), args[restPosition + 1], rest]);
    }
    var keyPosition = args.indexOf(HashSymbol.key);
    if (keyPosition >= 0) {
	// check order of #rest and #key
	if (restPosition >= 0 && keyPosition < restPosition)
	    throw new Error("function '" + name + "': #key before #rest in args: " +
			    JSON.stringify(args));

	var keyVar = Symbol.generate();
	var valueVar = Symbol.generate();
	var restVar = Symbol.generate();
	var indexVar = Symbol.generate();

	// declarations with defaults, setters
	var setter = [S('select'), keyVar, S('==')];
	args.slice(keyPosition + 1).forEach(function (key) {
	    var name, _default = S('#f');
	    if (key instanceof Array) {
		name = key[0];
		_default = key[1];
	    } else if (key instanceof Symbol) {
		name = key;
	    }
	    if (name) {
		restAndKey.push([S('js:var'), name, _default]);
		setter.push([[name.toString()], // TODO: check for keyword
			     [S('js:set'), name, valueVar]]);
	    }
	});
	if (restPosition == -1)
	    restAndKey.push([S('js:var'), restVar, rest]);
	else
	    restVar = args[restPosition + 1];

	restAndKey.push([S('js:for'), [[indexVar, 0],
				       [S('js:<'), indexVar, [S('js:get-property'), restVar, 'length']],
				       [S('js:set'), indexVar, [S('js:+'), indexVar, 2]]],
			 [S('js:var'), keyVar, [S('js:get-property'), restVar, indexVar]],
			 [S('js:var'), valueVar, [S('js:get-property'), restVar, [S('js:+'), indexVar, 1]]],
			 [S('when'), [S('instance?'), keyVar, S('<keyword>')], setter]]);
    }
    return [S('js:function'), name,
	    argumentNames(requiredArguments(args)),
	    [S('begin')].concat(restAndKey).concat(addReturn(body))];
}

var macros = {
    // TODO: should be property of current module,
    //       and accessible as function
    'define-function': function (name, args) {
	var body = arguments.toArray().slice(2);
	if (!(name instanceof Symbol))
	    throw new Error('function\'s name should be a symbol: '
			    + JSON.stringify(name));
	return [S('js:statements')]
	    .concat(exports.indexOf(name.name) >= 0 ?
		    [[S('js:export'), name]] : [])
	    .concat([functionDeclaration(name, args, body)]);
    },
    'method': function (args) {
	var body = arguments.toArray().slice(1);
	return functionDeclaration(null, args, body);
    },
    'bind': function (bindings) {
	var body = arguments.toArray().slice(1);
	var declarations = [];
	bindings.forEach(function (binding) {
	    var value = binding[binding.length - 1];
	    var variables = binding.slice(0, -1);
	    var restPosition = variables.indexOf(HashSymbol.rest);
	    var normalVariables = binding.slice(0, (restPosition >= 0 ?
						    restPosition : variables.length));
	    var valueSymbol = null;
	    declarations.push([S('js:var'),
			       (normalVariables.length > 0 ? normalVariables[0] :
				(valueSymbol = Symbol.generate())),
			       value]);
	    if (normalVariables.length > 1 || restPosition >= 0) {
		var otherValuesSymbol = Symbol.generate();
		var otherValues = [S('js:get-property'), 'arguments', 'callee', 'otherValues'];
		var i = 0;
		var setters = normalVariables.slice(1)
		    .map(function (variable) {
			return [S('js:var'), variable,
				[S('or'), [S('js:get-property'), otherValuesSymbol, i++], S('#f')]];
		    });
		declarations.push([S('js:try'),
				   [S('begin'),
				    [S('js:var'), otherValuesSymbol, [S('or'), otherValues, [S('list')]]]]
				   .concat(setters)
				   .concat(restPosition >= 0 ?
				    	   [[S('js:var'), variables[restPosition + 1],
				    	     (normalVariables.length == 0 ?
					      [[S('js:get-property'), [S('list'), valueSymbol], 'concat'],
					       otherValuesSymbol]
					      : (normalVariables.length == 1 ? otherValuesSymbol
						 : [[S('js:get-property'), otherValuesSymbol, 'slice'],
						    normalVariables.length - 1]))]]
					   : []),
				   // catch Variable, and catch block
				   null, null,
				   [S('js:set'), otherValues, S('js:undefined')]]);
	    }
	});
	return [[S('method'), []]
		.concat(declarations)
		.concat(body)];
    },
    'when': function (test) {
	var body = arguments.toArray().slice(1);
	body.unshift(S('begin'));
	return [S('if'), test, body, S('#f')];
    },
    'cond': function () {
	var cases = arguments.toArray();
	if (cases.length == 0)
	    return S('#f');
	else {
	    var _case = cases[0];
	    var then = _case.slice(1);
	    then.unshift(S('begin'));
	    if (_case[0] instanceof Symbol && _case[0].name == 'else:')
		return then;
	    else
		return [S('if'), _case[0], then,
			[S('cond')].concat(cases.slice(1))];
	}
    },
    'select': function (value, test) {
	function testExpression (testValue) {
	    return [test, testValue, value];
	}
	var cases = arguments.toArray().slice(2).map(function (_case) {
	    if (_case[0] instanceof Symbol && _case[0].name == 'else:')
		return _case;
	    else
		return ([[S('or')].concat(_case[0].map(testExpression))]
			.concat(_case.slice(1)));
	});
	return [S('cond')].concat(cases);
    },
    'bind-methods': function (bindings) {
	var body = arguments.toArray().slice(1);
	var methodBindings = bindings.map(function (binding) {
	    return [binding[0], [S('method')].concat(binding.slice(1))];
	});
	return [S('bind'), methodBindings].concat(body);
    },
    'handler-case': function (body) {
	var conditions = arguments.toArray().slice(1);
	var conditionVariable = Symbol.generate();
	var cases = conditions.map(function (condition) {
	    // TODO: bind condition: argument
	    var _if = condition[0];
	    var type = _if[0];
	    var binding = [];
	    if (_if.length > 1) {
		for (var i = 1; i < _if.length; i += 2) {
		    var key = _if[i];
		    if (key instanceof Symbol && key.name == 'condition:')
			binding.push([S('js:var'), _if[i + 1], conditionVariable]);
		}
	    }
	    return ([[S('instance?'), conditionVariable, type]]
		    .concat(binding).concat(addReturn(condition.slice(1))));
	});
	return [[S('js:function'), '', [],
		 [S('begin'),
		  [S('js:try'), addReturn(body),
		   conditionVariable,
		   [S('cond')].concat(cases)]]]];
    },
    // TODO: define-method
    'define-method': function () {
	return [S('js:statements'),
		[S('define-function')].concat(arguments.toArray())];
    },
    'values': function () {
	var values = arguments.toArray();
	var caller = ['arguments', 'callee', 'caller'];
	return [S('begin'),
		[S('js:set'), ([S('js:get-property')]
			       .concat(caller).concat(['otherValues'])),
		 [S('list')].concat(values.slice(1))],
		values[0]];
    },
    'define-module': function (name) {
	var keyArgs = arguments.toArray().slice(1);
	var imports = [];
	for (var i = 0; i < keyArgs.length; i += 2) {
	    var key = keyArgs[i];
	    var value = keyArgs[i + 1];
	    if (key instanceof Symbol) {
		if (key.name == 'import:') {
		    value.forEach(function (symbol) {
			imports.push([S('include'), symbol.toString()]);
		    });
		} else if (key.name == 'export:') {
		    // record exports
		    value.forEach(function (symbol) {
			exports.push(symbol.name);
		    });
		}
	    }
	}
	return [S('js:statements')].concat(imports);
    },
    'js:export': function (name) {
	return [S('js:set'),
		[S('js:get-property'), 'exports', name.toString()],
		name];
    }
}

var exports = [];

var symbolMacros = {}

function macroexpand (form) {
    if (form instanceof Array) {
	while (form[0] instanceof Symbol && macros.hasOwnProperty(form[0].name))
	    form = macros[form[0].name].apply(this, form.slice(1));
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
    'and': '&&', 'or': '||', 'js:+': '+', 'js:-': '-',
    'js:>': '>', 'js:<': '<', 'js:>=': '>=', 'js:<=': '<=',
    'js:==': '==', 'js:===': '==='
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
    'js:not': function (allowStatements, expression) {
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
	} else if (forms.length > 1)
	    return '(' + forms.map(writeExpressions).join(', ') + ')';
	else
	    return writeExpressions(forms[0]);
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
	// TODO: if !allowStatements: wrap with function
	return 'try {\n'
	    + writeStatements(body) // TODO: return?
	    + '} catch (' + write(conditionVariable) + ') {\n'
	    + writeStatements(_catch)
	    + '\n}';
    },
    'js:for-in': function (allowStatements, variableAndExpression) {
	// TODO: if !allowStatements: wrap with function
	var body = arguments.toArray().slice(2);
	var variable = variableAndExpression[0];
	var expression = variableAndExpression[1];
	return 'for (var ' + variable + ' in ' + write(expression) + ') {\n'
	    + writeStatements([S('begin')].concat(body)) + '\n}';
    },
    'js:for': function (allowStatements, initTestNext) {
	// TODO: if !allowStatements: wrap with function
	var body = arguments.toArray().slice(2);
	var init = initTestNext[0];
	var test = initTestNext[1];
	var next = initTestNext[2];
	return 'for (var ' + init[0] + ' = ' + init[1] + '; '
	    + write(test) + '; ' + write(next) + ') {\n'
	    + writeStatements([S('begin')].concat(body)) + '\n}';
    },
    'js:identifier': function (allowStatements, name) {
	return ('' + name);
    },
    'js:get-property': function (allowStatements) {
	var elements = arguments.toArray().slice(1);
	var object = elements[0];
	if (typeof object != 'string')
	    object = write(object);
	return object
	    + (elements.slice(1)
	       .map(function (element) {
		   if (typeof element == 'string' &&
		       /^[a-zA-Z_]+$/.exec(element))
		   {
		       return '.' + element;
		   } else
		       return '[' + write(element) + ']';
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
    'js:set': function (allowStatements, name, value) {
	return write(name) + " = " + write(value);
    },
    'js:return': function (allowStatements, body) {
	return 'return ' + write(body);
    },
    'js:function': function (allowStatements, name, args, body) {
	return 'function ' + (name ? name + ' ' : '')
	    + '(' + args.join(', ') + ') '
	    + '{\n' + writeStatements(body) + '\n}';
    },
    'js:documentation': function (allowStatements, documentation) {
	return '/** \n'
	    + documentation.split('\n').map(function (line) {
		return ' * ' + line;
	    }).join('\n')
	    + '\n */\n';
    },
    'js:statements': function (allowStatements) {
	var body = arguments.toArray().slice(1);
	return body.map(writeStatements).join(';\n');
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