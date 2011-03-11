
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
        [HashSymbol.key, HashSymbol.rest].map(position);
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

function functionDeclaration (name, args, body) {
    // strip documentation
    if (body.length > 1 && typeof body[0] == 'string')
        body.shift();
    var restAndKey = [];
    var rest = [S('as-array'), S('js:arguments'), requiredArguments(args).length];
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
        args.slice(keyPosition + 1)
            .forEach(function (key) {
                         var name = key;
                         var _default = false;
                         if (key instanceof Array) {
                             name = key[0];
                             _default = key[1];
                         }
                         restAndKey.push([S('js:var'), name, _default]);
                         setter.push([[K(name.name)], [S('js:set'), name, valueVar]]);
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
                         [S('when'), [S('keyword?'), keyVar], setter]]);
    }
    return [S('js:function'), name ? name : S('js:null'), argumentNames(requiredArguments(args)),
            [S('begin')].concat(restAndKey).concat(addReturn(body))];
}


var macros = {
    'rest': function (array) {
        return [[S('js:get-property'), array, "slice"], 1];
    },
    'slice': function (array, start, end) {
        return [[S('js:get-property'), array, "slice"], start]
            .concat(end ? [end] : []);
    },
    'as-array': function (_arguments, skip) {
        return [[S('js:get-property'), "Array", "prototype",
                 "slice", "call"], _arguments, skip || 0];
    },
    'size': function (object) {
        return [S('js:get-property'), object, 'length'];
    },
    'has?': function (object, property) {
        return [[S('js:get-property'), object,
                 "hasOwnProperty"],
                property];
    },
    '%has-constructor?': function (object, constructor) {
        return [S('js:==='),
                [S('js:get-property'), object, 'constructor'],
                constructor];
    },
    '%actual-type': function (type) {
        return [S('js:or'),
                [S('%get-property'), type, "%js-type"],
                type];
    },
    'make-array': function () {
        var elements = arguments.toArray();
        return [S('js:array')].concat(elements);
    },
    '%backquote': function (form) {
        function transform (form) {
            if (form instanceof Array) {
                if (form.length > 0
                    && form[0] instanceof Symbol
                    && form[0].name == '%comma')
                {
                    return form[1];
                } else
                    return ([S('make-array')]
                            .concat(form.map(transform)));
            } else if (form instanceof Symbol) {
                return [[S("js:identifier"), "_s"], form.name];
            } else {
                return form;
            }
        }
        return transform(form);
    },
    '%comma': function (value) {
        return value;
    },
    'define': function (name, value) {
        return [S('%define'),
                S('*module*'), S('exports'),
                [S('js:escape'), name],
                value];
    },
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
        var type = S('js:null');
        if (args.length > 0) {
            if (args[0] instanceof Array
                && args[0].length > 1)
                type = [S('js:escape'), args[0][1]];
            else
                type = "Object";
        }
        return [setter ? S('%define-setter') : S('%define-getter'),
                S('*module*'),
                S('exports'),
                [S('js:escape'), name],
                functionDeclaration([S('js:identifier'), '__method__'],
                                    args, body),
                type];
    },
    'method': function (args) {
        var body = arguments.toArray().slice(1);
        return functionDeclaration(S('js:null'), args, body);
    },
    'bind': function (bindings) {
        var body = arguments.toArray().slice(1);
        var binding = bindings[0];
        var variable = binding[0];
        var value = binding[1];
        return [[S('js:function'), S('js:null'), [variable],
                 bindings.length > 1 ?
                 [S('js:return'),
                  [S('bind'), bindings.slice(1)].concat(body)]
                 : [S('begin')].concat(addReturn(body))]]
            .concat(value !== undefined
                    && value != S('js:undefined')
                    ? [value] : []);
    },
    'if-bind': function (binding, _then, _else) {
        var variable = binding[0];
        var value = binding[1];
        var temp = Symbol.generate();
        return [S('bind'), [[temp, value]],
                [S('if'), temp,
                 [S('bind'), [[variable, temp]],
                  _then],
                 _else]];
    },
    'when': function (test) {
        var body = arguments.toArray().slice(1);
        body.unshift(S('begin'));
        return [S('if'), test, body, false];
    },
    'unless': function (test) {
        var body = arguments.toArray().slice(1);
        body.unshift(S('begin'));
        return [S('if'), [S('not'), test], body, false];
    },
    'cond': function () {
        var cases = arguments.toArray();
        if (cases.length == 0)
            return false;
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
            return [binding[0], functionDeclaration(binding[0], binding[1],
                                                    binding.slice(2))];
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
            return ([[S('instance?'), conditionVariable, type]]
                    .concat(binding).concat(addReturn(condition.slice(1))));
        });
        return [[S('js:function'), S('js:null'), [],
                 [S('begin'),
                  [S('js:try'),
                   [S('js:return'), body],
                   conditionVariable,
                   [S('cond')].concat(cases)]]]];
    },
    'define-class': function (_class, superclass) {
        var slots = arguments.toArray().slice(2);
        var initializer = [];
        if (slots.length > 0) {
            initializer =
                [[S('define-function'), S('initialize'),
                  [[S('object'), _class], HashSymbol.key]
                  .concat(slots)]
                 .concat(argumentNames(slots)
                         .map(function (slot) {
                                  return [S('set!'),
                                          [S('get'), S('object'),
                                           slot.name],
                                          slot];
                              }))];
        }
        return [S('begin'),
                [S('define'), _class,
                 [S('js:function'), S('js:null'), []]],
                [S('set!'), [S('js:get-property'), _class, '%name'],
                 _class.name]]
            .concat(initializer)
            .concat(superclass.length > 0 ?
                    [[S('%inherit'), _class, superclass[0]]] : []);
    },
    'define-generic': function (name, _arguments) {
        return [S('define'), name,
                [S('%make-generic'), [S('js:escape'), name]]];
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
                                [S('js:var'), importSymbol,
                                 [S('require'), name.name]],
                                [S('js:for-in'),
                                 [propertySymbol, importSymbol],
                                 [S('js:if'), [[S('js:get-property'), importSymbol,
                                             "hasOwnProperty"], propertySymbol],
                                  [S('js:set'),
                                   [S('js:get-property'), S('*module*'), propertySymbol],
                                   [S('js:get-property'), importSymbol, propertySymbol]]]]];
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
        return [S('begin'),
                [S('js:var'), S('*module*'), S('js:this')],
                [S('js:set'),
                 [S('js:get-property'), S('*module*'), '%exports'],
                 [S('js:array')].concat(exports)]]
            .concat(imports);
    },
    'if': function (test, then, _else) {
        return [S('js:if'), [S('true?'), test], then, _else];
    },
    'set!': function (expression, value) {
        if (expression instanceof Array
            && expression[0] != S('js:get-property'))
        {
            return ([S('%set')]
                    .concat(expression)
                    .concat([value]));
        } else
            return [S('js:set'), expression, value];
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
                    [S('if'),
                     [S('and'),
                      [S('%non-local-exit?'), conditionSymbol],
                      [S('js:==='), [S('js:get-property'), conditionSymbol, 'name'], returnSymbol.name]],
                     [S('js:return'), [S('js:get-property'), conditionSymbol, 'value']],
                     [S('js:throw'), conditionSymbol]]];
        } else
            return [S('begin')].concat(body);
    },
    'while': function (test) {
        var body = arguments.toArray().slice(1);
        return [[S('js:function'), S('js:null'), [],
                 [S('begin'),
                  [S('js:while'), test].concat(body),
                  [S('js:return'), false]]]];

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
            initClauses.push(clause.slice(0, 2));
            // next value
            nextClauses.push(clause[0]);
            nextClauses.push(clause[2]);
        });
        return [S('bind'), initClauses,
                [S('while'), [S('not'), end[0]]]
                .concat(body)
                .concat([[S('%parallel-set')]
                         .concat(nextClauses)]),
                end.length == 1 ? false : end[1]];
    },
    'dotimes': function (varCountResult) {
        var body = arguments.toArray().slice(1);
        var variable = varCountResult[0];
        var count = varCountResult[1];
        var result = varCountResult[2];
        if (result === undefined)
            result = false;
        return [S('for'),
                [[variable, 0, [S('js:+'), variable, 1]]],
                [[S('js:>='), variable, count], result]]
            .concat(body);
    },
    'and': function () {
        var expressions = arguments.toArray();
        if (expressions.length === 0)
            return true;
        else {
            var butLast = expressions.slice(0, -1)
                .map(function (expression) {
                    return [S('true?'), expression];
                });
            return [S('when'), [S('js:and')].concat(butLast),
                    expressions[expressions.length - 1]];
        }
    },
    'or': function () {
        var expressions = arguments.toArray();
        if (expressions.length === 0)
            return false;
        var vars = [];
        var clauses = [];
        expressions.forEach(function (expression) {
            var tmp = Symbol.generate();
            vars.push([S('js:var'), tmp]);
            clauses.push([[S('begin'),
                           [S('js:set'), tmp, expression],
                           [S('true?'), tmp]],
                          tmp]);
        });
        return [[S('js:function'), S('js:null'), [],
		 [S('begin')]
		 .concat(vars)
		 .concat([[S('js:return'),
			   [S('cond')].concat(clauses)]])]];
    },
    'inc!': function (object, value) {
        return [S('set!'), object,
                [S('js:+'), object,
                 value !== undefined ? value : 1]];
    },
    'destructuring-bind': function (pattern, value) {
        var body = arguments.toArray().slice(2);
        var target;
        function destructure (p, v) {
            var nested = [];
            var inner = [S('method'),
                         p.map(function (o) {
                                   if (o instanceof Array) {
                                       var temp = Symbol.generate();
                                       nested.push([o, temp]);
                                       return temp;
                                   } else
                                       return o;
                               })];
            var wrapper = [S('apply'), inner, v];
            target = inner;
            nested.forEach(function (n) {
                               var subWrapper = destructure.apply(null, n);
                               inner.push(subWrapper);
                               inner = subWrapper[1];
                           });
            return wrapper;
        }
        var wrapping = destructure(pattern, value);
        Array.prototype.splice.apply(target, [target.length, 0].concat(body));
        return wrapping;
    }
};

var symbolMacros = {
    'next-method': [S('js:get-property'),
                    [S('js:identifier'), '__method__'],
                    '%next-method']
};

function macroexpand (form) {
    if (form instanceof Array) {
        // apply macros
        while (form instanceof Array
               && form[0] instanceof Symbol
               && macros.hasOwnProperty(form[0].name))
            form = macros[form[0].name].apply(this, form.slice(1));
        if (form instanceof Array) {
            // special?
            if (form[0] instanceof Symbol
                && specialForms.hasOwnProperty(form[0].name))
            {
                var expander = specialForms[form[0].name];
                if (expander === false)  {
                    return form;
                } else if (typeof expander == 'function') {
                    return expander.apply(this, form.slice(1));
                } else
                    return (form.slice(0, ++expander)
                            .concat(form.slice(expander)
                                    .map(macroexpand)));
            } else
                return form.map(macroexpand);
        } else
            return macroexpand(form);
    } else if (form instanceof Symbol
               && symbolMacros.hasOwnProperty(form.name)) {
        return macroexpand(symbolMacros[form.name]);
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
};

var symbolValues = {
    'js:null': 'null',
    'js:this': 'this',
    'js:undefined': 'undefined',
    'js:arguments': 'arguments'
};

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
            var result = forms.map(writeStatements);
            if (result.length > 1)
                result = result.join(';\n');
            else
                result = result[0];
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
    'js:delete': function (allowStatements, expression) {
        return '(delete (' + write(expression) + '))';
    },
    'js:try': function (allowStatements, body, conditionVariable, _catch, _finally) {
        var result = 'try {\n' + writeStatements(body) + '\n}';
        if (_catch) {
            result += (' catch (' + write(conditionVariable) + ') {\n'
                       + writeStatements(_catch)
                       + '\n}');
        }
        if (_finally)
            result += (' finally {\n' + writeStatements(_finally) + '\n}');
        if (!allowStatements)
            result = wrapBlock(result);
        return result;
    },
    'js:for-in': function (allowStatements, variableAndExpression) {
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
                       /^[a-zA-Z_]+[a-zA-Z0-9]*$/.exec(element))
                   {
                       return '.' + element;
                   } else
                       return '[' + write(element) + ']';
               }).join(''));
    },
    'js:new': function (allowStatements, name) {
        var args = arguments.toArray().slice(2);
        return 'new ' + write(name) +
            '(' + args.map(writeExpressions).join(', ') + ')';
    },
    'js:var': function (allowStatements, name, value) {
        var result = "var " + name;
        if (value != undefined && value != S('js:undefined'))
            result += " = " + write(value);
        return result;
    },
    'js:set': function (allowStatements, name, value) {
        return write(name) + " = " + write(value);
    },
    'js:return': function (allowStatements, body) {
        return 'return ' + write(body);
    },
    'js:function': function (allowStatements, name, args, body) {
        return 'function ' + (name && name != S('js:null')
                              ? (name instanceof Array ? write(name) : name) + ' '
                              : '')
            + '(' + args.join(', ') + ') '
            + '{' + (body ? '\n' + writeStatements(body) + '\n' : "") + '}';
    },
    'js:escape': function (allowStatements, symbol) {
        return write(symbol.toString());
    },
    'js:throw': function (allowStatements, error) {
        var _throw = 'throw ' + write(error);
        if (!allowStatements)
            _throw = wrapBlock(_throw);
        return _throw;
    },
    'make-object': function (allowStatements) {
        var kvs = arguments.toArray().slice(1);
        var entries = [];
        for (var i = 0; i < kvs.length; i++)
            entries.push(write(kvs[i++]) + ":" + write(kvs[i]));
        return "{" + entries.join(',\n') + "}";
    },
}

var specialForms = {
    'make-object': 0,
    'js:array': 0,
    'js:defined': 0,
    'js:delete': 0,
    'js:negative': 0,
    'js:not': 0,
    'begin': 0,
    'js:if': 0,
    'js:throw': 0,
    'js:return': 0,
    'js:while': 0,
    'js:new': 1,
    'js:var': 1,
    'js:set': 1,
    'js:for-in': 1,
    'js:function': 2,
    'js:escape': false,
    'js:identifier': false,
    'js:get-property': false,
    'js:for': function (clauses) {
        var body = arguments.toArray().slice(1);
        return [S('js:for'),
                clauses.map(function (clause) {
                    return [[clause[0][0], macroexpand(clause[0][1])],
                            macroexpand(clause[1]),
                            macroexpand(clause[2])];
                })]
            .concat(body.map(macroexpand));
    },
    'js:try': function (body, conditionVariable, _catch, _finally) {
        return [S('js:try'),
                macroexpand(body),
                conditionVariable,
                macroexpand(_catch),
                macroexpand(_finally)];
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
            && infix.hasOwnProperty(head.name))
        {
            return '(' + rest.map(writeExpressions).join(' ' + infix[head.name] + ' ') + ')';
        } else if (head instanceof Symbol
                   && writers.hasOwnProperty(head.name))
        {
            return writers[head.name].apply(this, [allowStatements].concat(rest));
        } else if (head instanceof Array
                   && head[0] instanceof Symbol
                   && head[0].name == 'js:function')
        {
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

function transformAsync (form) {
    var modules = {};
    function walk (current, parent) {
        var proceed = current instanceof Array;
        if (proceed &&
            current.length == 3) {
            var head = current[0];
            var value = current[2];
            if (head instanceof Symbol
                && head.name == 'js:var'
                && value instanceof Array
                && value[0] instanceof Symbol
                && value[0].name == 'require')
            {
                // note module
                modules[current[1]] = value[1];
                // remove synchronous require
                parent.splice(parent.indexOf(current), 1);
                proceed = false;
            }
        }

        if (proceed)
            // walk rest of the form
            current.slice(1)
            .forEach(function (r) {
                         walk(r, current);
                     });
    }
    walk(form);
    for (var variable in modules) {
        if (modules.hasOwnProperty(variable)) {
            form = [S('require'), modules[variable],
                    [S('js:function'), S('js:null'), [variable],
                     form]];
        }
    }
    return form;
}

//// interface

exports.compile = function (code, async) {
    var stream = new Stream("(begin\n" + code + "\n)");
    var reader = new Reader(stream);
    var form = reader.read();
    if (async)
        form = transformAsync(macroexpand(form));
    return write(macroexpand(form), true);
};