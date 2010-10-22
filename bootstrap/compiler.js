
var primitives = require('./primitives');
var Symbol = primitives.Symbol,
    Keyword = primitives.Keyword,
    S = primitives.S,
    K = primitives.K,
    HashSymbol = primitives.HashSymbol;

var Reader = require('./reader').Reader;
var Stream = require('./stream').Stream;

//// utils

Object.prototype.toArray = function () {
    return Array.prototype.slice.call(this);
};

//// expansion

function searchHead (form, symbol) {
    if (form instanceof Array) {
	return form[0] == symbol ||
	    form.some(function (form) {
		return searchHead(form, symbol);
	    });
    } else
	return false;
}

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
    if (!(forms[last] instanceof Array
	  && forms[last][0] == S('js:return')))
    {
	forms[last] = [S('js:return'),
		       [S('begin'), forms[last]]];
    }
    return forms;
}

function functionDeclaration (args, body) {
    var documentation = [];
    if (typeof body[0] == 'string' && body.length > 1) {
	documentation.push([S('js:documentation'), body.shift()]);
    }
    var functionSymbol = Symbol.generate();
    var restAndKey = [];
    if (searchHead(body, S('values')))
	// named function access better than using arguments.callee
	restAndKey.push([S('js:set'), [S('js:get-property'), functionSymbol, "%top"], S('#t')]);
    var rest = [S('js:argument-list'), S('js:arguments'), requiredArguments(args).length];
    var restPosition = args.indexOf(HashSymbol.rest);
    if (restPosition >= 0) {
	restAndKey.push([S('js:var'), args[restPosition + 1], rest]);
    }
    var keyPosition = args.indexOf(HashSymbol.key);
    if (keyPosition >= 0) {
	// check order of #rest and #key
	if (restPosition >= 0 && keyPosition < restPosition)
	    throw new Error("#key before #rest in args: " +
			    JSON.stringify(args));

	var keyVar = Symbol.generate();
	var valueVar = Symbol.generate();
	var restVar = Symbol.generate();
	var indexVar = Symbol.generate();

	// declarations with defaults, setters
	var setter = [S('select'), keyVar, S('js:==')];
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
		setter.push([[K(name.name)], [S('js:set'), name, valueVar]]);
	    }
	});
	if (restPosition == -1)
	    restAndKey.push([S('js:var'), restVar, rest]);
	else
	    restVar = args[restPosition + 1];

	restAndKey.push([S('js:for'), [[[indexVar, 0],
					[S('js:<'), indexVar, [S('js:get-property'), restVar, 'length']],
					[S('js:+'), indexVar, 2]]],
			 [S('js:var'), keyVar, [S('js:get-property'), restVar, indexVar]],
			 [S('js:var'), valueVar, [S('js:get-property'), restVar, [S('js:+'), indexVar, 1]]],
			 [S('when'), [S('js:==='), [S('js:get-property'), keyVar, "constructor"], S('<keyword>')], setter]]);
    }
    return [S('%function'), functionSymbol, argumentNames(requiredArguments(args)),
	    [S('begin')].concat(restAndKey).concat(addReturn(body))];
}

var macros = {
    'define-function': function (name, args) {
	var body = arguments.toArray().slice(2);
	var setter = false;
	if (name instanceof Array && name.length == 2
	    && name[0] instanceof Symbol && name[0].name == 'setter')
	{
	    setter = true;
	    name = name[1];
	}
	if (!(name instanceof Symbol || setter))
	    throw new Error('function\'s name should be a symbol or (setter name): '
			    + JSON.stringify(name));
	return [setter ? S('%define-setter') : S('%define-getter'),
		name.toString(), [S('method'), args].concat(body)];
    },
    'method': function (args) {
	var body = arguments.toArray().slice(1);
	return functionDeclaration(args, body);
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
				    [S('js:var'), otherValuesSymbol, [S('or'), otherValues, [S('js:array')]]]]
				   .concat(setters)
				   .concat(restPosition >= 0 ?
				    	   [[S('js:var'), variables[restPosition + 1],
				    	     (normalVariables.length == 0 ?
					      [[S('js:get-property'), [S('js:array'), valueSymbol], 'concat'],
					       otherValuesSymbol]
					      : (normalVariables.length == 1 ? otherValuesSymbol
						 : [[S('js:get-property'), otherValuesSymbol, 'slice'],
						    normalVariables.length - 1]))]]
					   : []),
				   // catch variable, and catch block
				   null, null,
				   [S('js:set'), otherValues, S('js:undefined')]]);
	    }
	});
	return [[S('%function'), S('js:null'), [],
		 [S('begin')]
		 .concat(declarations)
		 .concat(addReturn(body))]];
    },
    'when': function (test) {
	var body = arguments.toArray().slice(1);
	body.unshift(S('begin'));
	return [S('if'), test, body, S('#f')];
    },
    'unless': function (test) {
	var body = arguments.toArray().slice(1);
	body.unshift(S('begin'));
	return [S('if'), [S('%not'), test], body, S('#f')];
    },
    'cond': function () {
	var cases = arguments.toArray();
	if (cases.length == 0)
	    return S('#f');
	else {
	    var _case = cases[0];
	    var then = _case.slice(1);
	    then.unshift(S('begin'));
	    if (_case[0] instanceof Keyword && _case[0].name == 'else')
		return then;
	    else
		return [S('if'), _case[0], then,
			[S('cond')].concat(cases.slice(1))];
	}
    },
    'select': function (value, test) {
	function testExpression (testValue) {
	    return [test, value, testValue];
	}
	var cases = arguments.toArray().slice(2).map(function (_case) {
	    if (_case[0] instanceof Keyword && _case[0].name == 'else')
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
		    if (key instanceof Keyword && key.name == 'condition')
			binding.push([S('js:var'), _if[i + 1], conditionVariable]);
		}
	    }
	    return ([[S('%instance?'), conditionVariable, type]]
		    .concat(binding).concat(addReturn(condition.slice(1))));
	});
	return [[S('%function'), S('js:null'), [],
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
    'define-module': function (name) {
	var keyArgs = arguments.toArray().slice(1);
	var imports = [];
	var exports = [];
	var propertySymbol = Symbol.generate();
	for (var i = 0; i < keyArgs.length; i += 2) {
	    var key = keyArgs[i];
	    var value = keyArgs[i + 1];
	    if (key instanceof Keyword) {
		if (key.name == 'import') {
		    imports = value.map(function (name) {
			var importSymbol = Symbol.generate();
			return [S('begin'),
				[S('js:var'), importSymbol, [S('require'), name.toString()]],
				[S('js:for-in'),
				 [propertySymbol, importSymbol],
				 [S('js:set'),
				  [S('js:get-property'), S('*module*'), propertySymbol],
				  [S('js:get-property'), importSymbol, propertySymbol]]]];
		    });
		} else if (key.name == 'export') {
		    exports = value.map(function (name) {
			if (name instanceof Symbol)
			    return name.toString();
			else
			    return write(name);
		    });
		}
	    }
	}
	return [S('js:statements'),
		[S('js:var'), S('*module*'), S('js:this')],
		[S('js:set'),
		 [S('js:get-property'), S('*module*'), '%exports'],
		 [S('js:array')].concat(exports)]]
	    .concat(imports);
    },
    'if': function (test, then, _else) {
	return [S('js:if'), [S('%true?'), test], then, _else];
    },
    'set!': function (expression, value) {
	if (expression instanceof Array)
	    return ([[S('setter'), expression[0]]]
		    .concat(expression.slice(1))
		    .concat([value]));
	else
	    return [S('js:set'), expression, value];
    },
    '%define-class': function (name, superclasses) {
	return [S('define'), name,
		[S('%make-class'), name.name,
		 [S('js:array')].concat(superclasses)]];
    },
    'block': function (name) {
	var body = arguments.toArray().slice(1);
 	var returnSymbol = name;
 	if (!(returnSymbol instanceof Array))
 	    throw new Error("block's exit-variable form should be a list");
 	if (returnSymbol.length > 1)
 	    throw new Error("block's exit-variable form shouldn't include more than one name");
 	if (returnSymbol.length == 1) {
	    returnSymbol = returnSymbol[0];
	    var conditionSymbol = Symbol.generate();
 	    return [S('js:try'),
		    [S('js:return'),
		     [S('bind'),
		      // TODO: replace with proper make call
		      [[returnSymbol,
			[S('%make-non-local-exit-function'), returnSymbol.name]]]]
		     .concat(body)],
 		    conditionSymbol,
		    [S('js:return'),
		     [S('when'),
		      [S('and'),
		       [S('js:==='), [S('js:get-property'), conditionSymbol, 'constructor'], S('<non-local-exit>')],
		       [S('js:==='), [S('js:get-property'), conditionSymbol, 'name'], returnSymbol.name]],
 		      [S('%apply'), S('values'), [S('js:get-property'), conditionSymbol, 'values']]]]];
	} else
	    // TODO:
	    return [S('begin'), body];
    },
    'while': function (test) {
	var body = arguments.toArray().slice(1);
	return [[S('%function'), S('js:null'), [],
		 [S('begin'),
		  [S('js:while'), test].concat(body),
		  [S('js:return'), S('#f')]]]];

    },
    '%parallel-set': function () {
    	var clauses = arguments.toArray();
	if (clauses.length > 2) {
	    var tmpClauses = [];
	    var setClauses = [];
	    for (var i = 0; i < clauses.length; i += 2) {
		var tmp = Symbol.generate();
		tmpClauses.push([S('js:var'), tmp, clauses[i+1]]);
		setClauses.push([S('js:set'), clauses[i], tmp]);
	    }
	    return [S('begin')]
		.concat(tmpClauses)
		.concat(setClauses);
	} else
	    return [S('js:set')].concat(clauses);
    },
    'for': function (clauses, end) {
    	var body = arguments.toArray().slice(2);
    	var initClauses = [];
    	var nextClauses = [];
    	clauses.forEach(function (clause) {
	    // initial value
    	    initClauses.push([clause[0], clause[1]]);
	    // next value
	    nextClauses.push(clause[0])
	    nextClauses.push(clause[2]);
    	});
    	return [S('bind'), initClauses,
    		[S('while'), [S('%not'), end[0]]]
		.concat(body)
		.concat([[S('%parallel-set')]
			 .concat(nextClauses)]),
    		end.length == 1 ? S('#f') : end[1]];
    },
    'and': function () {
	var expressions = arguments.toArray();
	if (expressions.length === 0)
	    return S('#t')
	else {
	    var butLast = expressions.slice(0, -1)
		.map(function (expression) {
		    return [S('%true?'), expression];
		});
	    return [S('when'), [S('js:and')].concat(butLast),
		    expressions[expressions.length - 1]];
	}
    },
    'or': function () {
	var expressions = arguments.toArray();
	var bindings = [];
	var clauses = [];
	expressions.forEach(function (expression) {
	    var tmp = Symbol.generate();
	    bindings.push([tmp, S('js:undefined')]);
	    clauses.push([[S('begin'),
			   [S('js:set'), tmp, expression],
			   [S('%true?'), tmp]],
			  tmp]);
	});
	return [S('bind'), bindings,
		[S('cond')].concat(clauses)];
    }
}

var symbolMacros = {};

var specialForms = {
    '%function': function (name, args, body) {
	if (name == S('js:null'))
	    name = null;
	return [S('js:function'), name, args, macroexpand(body)];
    },
    '%%define': function (name, value) {
	return [S('js:set'), [S('js:get-property'), S('*module*'), name.toString()],
		macroexpand(value)];
    },
    'define': function (name, value) {
	return [S('%define'), name.toString(), macroexpand(value)];
    },
    'js:for': function (clauses) {
	var body = arguments.toArray().slice(1);
	return [S('js:for'),
		clauses.map(function (clause) {
		    return [[clause[0][0], macroexpand(clause[0][1])],
			    macroexpand(clause[1]),
			    macroexpand(clause[2])]
		})]
	    .concat(macroexpand(body));
    },
}

function macroexpand (form) {
    if (form instanceof Array) {
	while (form instanceof Array
	       && form[0] instanceof Symbol
	       && macros.hasOwnProperty(form[0].name))
	    form = macros[form[0].name].apply(this, form.slice(1));
	if (form instanceof Array) {
	    if (form[0] instanceof Symbol && specialForms.hasOwnProperty(form[0].name))
		return specialForms[form[0].name].apply(this, form.splice(1));
	    else
		return form.map(macroexpand);
	} else
	    return macroexpand(form);
    } else if (form instanceof Symbol
	       && symbolMacros.hasOwnProperty(form.name)) {
	return macroexpand(symbolMacros[form.name]());
    } else
	return form;
}

//// writing

var infix = {
    'js:and': '&&', 'js:or': '||',
    'js:+': '+', 'js:-': '-',
    'js:*': '*', 'js:/': '/',
    'js:>': '>', 'js:<': '<',
    'js:>=': '>=', 'js:<=': '<=',
    'js:==': '==', 'js:===': '===',
    'js:instanceof': 'instanceof'
}

var symbolValues = {
    'js:null': 'null',
    'js:this': 'this',
    'js:undefined': 'undefined',
    'js:arguments': 'arguments',
    '#f': 'false',
    '#t': 'true',
}

function wrapBlock (code) {
    return '(function () {\n' + code + '\n})()';
}

var writers = {
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
	    var result = forms.map(writeStatements).join(separator);
	    if (forms.length > 1)
		result += '\n';
	    return result;
	} else if (forms.length > 1)
	    return '(' + forms.map(writeExpressions).join(', ') + ')';
	else
	    return writeExpressions(forms[0]);
    },
    'js:if': function (allowStatements, test, then, _else) {
	if (allowStatements) {
	    var result = 'if (' + write(test) + ') {\n'
		+ writeStatements(then) + '\n}';
	    if (_else instanceof Array)
		result += (' else {\n' + writeStatements(_else) + '\n}');
	    return result;
	} else {
	    return '(' + write(test) + ' ? '
		+ write(then) + ' : '
		+ write(_else) + ')';
	}
    },
    'js:array': function (allowStatements) {
	var elements = arguments.toArray().slice(1);
	return '[' + elements.map(writeExpressions).join(', ') + ']';
    },
    'js:defined': function (allowStatements, expression) {
	return '(typeof (' + write(expression) + ') != "undefined")';
    },
    'js:try': function (allowStatements, body, conditionVariable, _catch, _finally) {
	// TODO: if !allowStatements: wrap with function
	var result = 'try {\n' + writeStatements(body) + '\n}';
	if (_catch) {
	    result += (' catch (' + write(conditionVariable) + ') {\n'
		       + writeStatements(_catch)
		       + '\n}');
	}
	if (_finally)
	    result += (' finally {\n' + writeStatements(_finally) + '\n}');
	return result;
    },
    'js:for-in': function (allowStatements, variableAndExpression) {
	// TODO: if !allowStatements: wrap with function
	var body = arguments.toArray().slice(2);
	var variable = variableAndExpression[0];
	var expression = variableAndExpression[1];
	var loop = 'for (var ' + variable + ' in ' + write(expression) + ') {\n'
	    + writeStatements([S('begin')].concat(body)) + '\n}';
	if (!allowStatements)
	    loop = wrapBlock(loop);
	return loop;
    },
    'js:for': function (allowStatements, initTestNextClauses) {
	var body = arguments.toArray().slice(2);
	var inits = [];
	var tests = [];
	var nexts = [];
	initTestNextClauses.forEach(function (initTestNext) {
	    var init = initTestNext[0];
	    inits.push(write(init[0]) + ' = ' + write(init[1]));
	    tests.push(write(initTestNext[1]));
	    nexts.push(write([S('js:set'), init[0], initTestNext[2]]));
	});
	var loop = 'for (var ' +
	    ([inits, tests, nexts]
	     .map(function (parts) { return parts.join(', '); })
	     .join('; '))
	    + ') {\n'
	    + writeStatements([S('begin')].concat(body)) + '\n}';
	if (!allowStatements)
	    loop = wrapBlock(loop);
	return loop;
    },
    'js:while': function (allowStatements, test) {
	var body = arguments.toArray().slice(2);
	var loop = 'while (' + write(test) + ') {\n'
	    + writeStatements([S('begin')].concat(body)) + '\n}';
	if (!allowStatements)
	    loop = wrapBlock(loop);
	return loop;
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
	return 'new ' + write(name) +
	    '(' + args.map(writeExpressions).join(', ') + ')';
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
	return 'function ' + (name ? name + ' ': '')
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
    },
    'js:escape': function (allowStatements, symbol) {
	return write(symbol.toString());
    },
    'js:throw': function (allowStatements, error) {
	var _throw = 'throw ' + write(error);
	if (!allowStatements)
	    _throw = wrapBlock(_throw);
	return _throw;
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
	if (head instanceof Symbol
	    && infix.hasOwnProperty(head.name)) {
	    return '(' + rest.map(writeExpressions).join(' ' + infix[head.name] + ' ') + ')';
	} else if (head instanceof Symbol
		   && writers.hasOwnProperty(head.name)) {
	    return writers[head.name].apply(this, [allowStatements].concat(rest));
	} else if (head instanceof Array
		   && head[0] instanceof Symbol
		   && head[0].name == 'js:function') {
	    return '(' + write(head) + ')(' + rest.map(writeExpressions).join(', ') + ')';
	} else {
	    return write(head) + '(' + rest.map(writeExpressions).join(', ') + ')';
	}
    } else if (typeof form == "string") {
	return '"' + form + '"';
    } else if (form instanceof Symbol
	       && symbolValues.hasOwnProperty(form.name)) {
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