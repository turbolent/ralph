{
    var $module = Object.create(null);
    ($module)['%export'] = function B3436(name__3437, value__3438) {
        var B3439 = (exports);
        return(B3439[name__3437] = value__3438);
    };
}
var B3440 = require('ralph/core');
{
    var B3441 = require('ralph/regexp');
    {
        var B3442 = require('ralph/compiler/utilities');
        var B3443 = require('escodegen');
    }
}
($module)['*reserved*'] = [
    'break',
    'case',
    'catch',
    'continue',
    'default',
    'delete',
    'do',
    'else',
    'finally',
    'for',
    'function',
    'if',
    'in',
    'instanceof',
    'new',
    'return',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'abstract',
    'boolean',
    'byte',
    'char',
    'class',
    'const',
    'debugger',
    'double',
    'enum',
    'export',
    'extends',
    'final',
    'float',
    'goto',
    'implements',
    'import',
    'int',
    'interface',
    'long',
    'native',
    'package',
    'private',
    'protected',
    'public',
    'short',
    'static',
    'super',
    'synchronized',
    'throws',
    'transient',
    'volatile',
    'null',
    'true',
    'false',
    'arguments',
    'object',
    'number',
    'string',
    'array',
    'let',
    'yield'
];
($module)['*symbol-escapes*'] = B3440['make-object']('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
{
    ($module)['escape-name'] = function B3446(name__3447) {
        if (($T)(B3440['member?'](name__3447, ($module)['*reserved*'])))
            return(B3440['concatenate']('R', name__3447));
        else {
            var chars__3450 = B3440['map'](function B3448(char__3449) {
                    if (($T)(B3440['has?'](($module)['*symbol-escapes*'], char__3449)))
                        return(B3440['get'](($module)['*symbol-escapes*'], char__3449));
                    else if (($T)(B3441['match']('\\w', char__3449)))
                        return(char__3449);
                    else
                        return(B3440['concatenate']('Z', B3440['as-string'](B3440['char-code'](char__3449))));
                }, B3440['as-array'](name__3447));
            return(B3440['join'](chars__3450, ''));
        }
    };
    B3440['%annotate-function'](($module)['escape-name'], 'escape-name', false);
}
{
    {
        ($module)['compile-js'] = function B3452(exp__3453, env__3454) {
            return(B3443['generate'](($module)['as-statement'](($module)['compile'](exp__3453, env__3454)), { 'verbatim': 'x-verbatim' }));
        };
        ($module)['%export']('compile-js', ($module)['compile-js']);
    }
    B3440['%annotate-function'](($module)['compile-js'], 'compile-js', false);
}
{
    ($module)['as-statement'] = function B3457(exp__3458) {
        var B3459 = B3440['position'](B3440['get'](exp__3458, 'type'), 'Statement');
        {
            var B3460 = false;
            if (($T)(B3459))
                B3460 = B3459;
            else
                B3460 = B3440['position'](B3440['get'](exp__3458, 'type'), 'Declaration');
            if (($T)(B3460))
                return(exp__3458);
            else
                return({
                    'type': 'ExpressionStatement',
                    'expression': exp__3458
                });
        }
    };
    B3440['%annotate-function'](($module)['as-statement'], 'as-statement', false);
}
{
    ($module)['make-block'] = function B3462(statements__3463) {
        return({
            'type': 'BlockStatement',
            'body': statements__3463
        });
    };
    B3440['%annotate-function'](($module)['make-block'], 'make-block', false);
}
{
    var B3468 = $K('message');
    {
        ($module)['compile'] = function B3469(exp__3470, env__3471) {
            var B3472 = exp__3470;
            if (($T)(B3440['instance?'](B3472, B3440['<array>'])))
                if (($T)(B3440['empty?'](exp__3470)))
                    return(B3440['signal'](B3440['make'](B3440['<error>'], B3468, 'empty expression')));
                else
                    return(($module)['compile-exp'](exp__3470, env__3471));
            else if (($T)(B3440['instance?'](B3472, B3440['<hash-symbol>'])))
                return({
                    'type': 'Identifier',
                    'name': B3440['concatenate']('$', B3440['as-uppercase'](B3440['symbol-name'](exp__3470)))
                });
            else if (($T)(B3440['instance?'](B3472, B3440['<keyword>'])))
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': '$K'
                    },
                    'arguments': [($module)['compile'](B3440['symbol-name'](exp__3470), env__3471)]
                });
            else if (($T)(B3440['instance?'](B3472, B3440['<symbol>']))) {
                var B3473 = B3440['symbol-name'](exp__3470);
                if (($T)(B3440['=='](B3473, '%this-method')))
                    return(($module)['compile'](B3440['get'](env__3471, 'current-method'), env__3471));
                else if (($T)(B3440['=='](B3473, '%all-arguments')))
                    return({
                        'type': 'Identifier',
                        'name': 'arguments'
                    });
                else {
                    var B3475 = false;
                    if (($T)(B3440['=='](B3440['get'](exp__3470, 'module'), B3440['get'](env__3471, 'module', 'name'))))
                        B3475 = B3440['symbol-name'](exp__3470);
                    else
                        B3475 = B3440['description'](exp__3470);
                    {
                        var B3476 = ($module)['escape-name'](B3475);
                        return({
                            'type': 'Identifier',
                            'name': B3476
                        });
                    }
                }
            } else if (($T)(B3440['instance?'](B3472, B3440['<number>'])))
                if (($T)(B3440['<'](exp__3470, 0)))
                    return({
                        'type': 'UnaryExpression',
                        'operator': '-',
                        'prefix': true,
                        'argument': {
                            'type': 'Literal',
                            'value': B3440['abs'](exp__3470)
                        }
                    });
                else
                    return({
                        'type': 'Literal',
                        'value': exp__3470
                    });
            else {
                var B3474 = exp__3470;
                {
                    var B3477 = false;
                    if (($T)(B3474))
                        B3477 = B3474;
                    else
                        B3477 = false;
                    return({
                        'type': 'Literal',
                        'value': B3477
                    });
                }
            }
        };
        B3440['%annotate-function'](($module)['compile'], 'compile', false);
    }
}
{
    var B3489 = $S('%native-call', 'ralph/core');
    {
        var B3490 = $S('%begin', 'ralph/core');
        {
            ($module)['compile-exp'] = function B3491(exp__3492, env__3493) {
                var name__3494 = B3440['symbol-name'](B3440['first'](exp__3492));
                {
                    var B3495 = name__3494;
                    if (($T)(B3440['=='](B3495, '%quote'))) {
                        var B3496 = B3440['destructure-symbol'](B3440['second'](exp__3492));
                        {
                            var name__3497 = B3496[0];
                            {
                                var module_name__3498 = B3496[1];
                                {
                                    var B3552 = B3440['%concat'];
                                    {
                                        var B3553 = [
                                                B3489,
                                                '$S',
                                                name__3497
                                            ];
                                        {
                                            var B3554 = false;
                                            if (($T)(module_name__3498))
                                                B3554 = [module_name__3498];
                                            else
                                                B3554 = [];
                                            {
                                                var B3555 = B3552(B3553, B3554);
                                                return(($module)['compile'](B3555, env__3493));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%method'))) {
                        var ____3499 = exp__3492[0];
                        {
                            var name__3500 = exp__3492[1];
                            {
                                var parameters__3501 = exp__3492[2];
                                {
                                    var form__3502 = exp__3492[3];
                                    {
                                        var previous_method__3503 = B3440['get'](env__3493, 'current-method');
                                        {
                                            var B3556 = ($module)['compile'](name__3500, env__3493);
                                            {
                                                var B3557 = B3440['map'](B3440['rcurry'](($module)['compile'], env__3493), parameters__3501);
                                                {
                                                    B3440['get-setter'](env__3493, 'current-method', name__3500);
                                                    {
                                                        var B3558 = false;
                                                        if (($T)(B3442['op?']('%begin', form__3502)))
                                                            B3558 = form__3502;
                                                        else
                                                            B3558 = [
                                                                B3490,
                                                                form__3502
                                                            ];
                                                        {
                                                            var formT__3504 = ($module)['compile'](B3558, env__3493);
                                                            {
                                                                B3440['get-setter'](env__3493, 'current-method', previous_method__3503);
                                                                return({
                                                                    'type': 'FunctionExpression',
                                                                    'id': B3556,
                                                                    'params': B3557,
                                                                    'body': formT__3504
                                                                });
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%set'))) {
                        var ____3505 = exp__3492[0];
                        {
                            var identifier__3506 = exp__3492[1];
                            {
                                var value__3507 = exp__3492[2];
                                return({
                                    'type': 'AssignmentExpression',
                                    'operator': '=',
                                    'left': ($module)['compile'](identifier__3506, env__3493),
                                    'right': ($module)['compile'](value__3507, env__3493)
                                });
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%if'))) {
                        var ____3508 = exp__3492[0];
                        {
                            var test__3509 = exp__3492[1];
                            {
                                var consequent__3510 = exp__3492[2];
                                {
                                    var alternate__3511 = exp__3492[3];
                                    {
                                        var B3559 = ($module)['compile'](test__3509, env__3493);
                                        {
                                            var B3560 = ($module)['as-statement'](($module)['compile'](consequent__3510, env__3493));
                                            {
                                                var B3561 = false;
                                                if (($T)(alternate__3511))
                                                    B3561 = ($module)['as-statement'](($module)['compile'](alternate__3511, env__3493));
                                                else
                                                    B3561 = false;
                                                return({
                                                    'type': 'IfStatement',
                                                    'test': B3559,
                                                    'consequent': B3560,
                                                    'alternate': B3561
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%begin')))
                        return(($module)['make-block'](B3440['map'](function B3512(exp__3513) {
                            return(($module)['as-statement'](($module)['compile'](exp__3513, env__3493)));
                        }, B3440['rest'](exp__3492))));
                    else if (($T)(B3440['=='](B3495, '%while'))) {
                        var ____3514 = exp__3492[0];
                        {
                            var test__3515 = exp__3492[1];
                            {
                                var form__3516 = exp__3492[2];
                                return({
                                    'type': 'WhileStatement',
                                    'test': ($module)['compile'](test__3515, env__3493),
                                    'body': ($module)['as-statement'](($module)['compile'](form__3516, env__3493))
                                });
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%try'))) {
                        var ____3517 = exp__3492[0];
                        {
                            var protected_form__3518 = exp__3492[1];
                            {
                                var identifier__3519 = exp__3492[2];
                                {
                                    var handling_form__3520 = exp__3492[3];
                                    return({
                                        'type': 'TryStatement',
                                        'block': ($module)['make-block']([($module)['as-statement'](($module)['compile'](protected_form__3518, env__3493))]),
                                        'handler': {
                                            'type': 'CatchClause',
                                            'param': ($module)['compile'](identifier__3519, env__3493),
                                            'body': ($module)['make-block']([($module)['as-statement'](($module)['compile'](handling_form__3520, env__3493))])
                                        }
                                    });
                                }
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%var'))) {
                        var ____3521 = exp__3492[0];
                        {
                            var identifier__3522 = exp__3492[1];
                            {
                                var value__3523 = exp__3492[2];
                                {
                                    var B3562 = ($module)['compile'](identifier__3522, env__3493);
                                    {
                                        var B3524 = value__3523;
                                        {
                                            var B3563 = false;
                                            if (($T)(B3524))
                                                B3563 = B3524;
                                            else
                                                B3563 = false;
                                            {
                                                var B3564 = ($module)['compile'](B3563, env__3493);
                                                {
                                                    var B3565 = {
                                                            'type': 'VariableDeclarator',
                                                            'id': B3562,
                                                            'init': B3564
                                                        };
                                                    {
                                                        var B3566 = [B3565];
                                                        return({
                                                            'type': 'VariableDeclaration',
                                                            'kind': 'var',
                                                            'declarations': B3566
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%native-call'))) {
                        var ____3525 = exp__3492[0];
                        {
                            var operator__3526 = exp__3492[1];
                            {
                                var arguments__3527 = $SL.call(exp__3492, 2);
                                return({
                                    'type': 'CallExpression',
                                    'callee': {
                                        'type': 'Identifier',
                                        'name': operator__3526
                                    },
                                    'arguments': B3440['map'](B3440['rcurry'](($module)['compile'], env__3493), arguments__3527)
                                });
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%infix'))) {
                        var ____3528 = exp__3492[0];
                        {
                            var operator__3529 = exp__3492[1];
                            {
                                var arguments__3530 = $SL.call(exp__3492, 2);
                                return(B3440['reduce1'](function B3531(result__3532, exp__3533) {
                                    return({
                                        'type': 'BinaryExpression',
                                        'operator': operator__3529,
                                        'left': result__3532,
                                        'right': exp__3533
                                    });
                                }, B3440['map'](B3440['rcurry'](($module)['compile'], env__3493), arguments__3530)));
                            }
                        }
                    } else if (($T)(B3440['=='](B3495, '%native')))
                        return({
                            'type': 'Expression',
                            'x-verbatim': B3440['reduce1'](B3440['concatenate'], B3440['map'](function B3534(e__3535) {
                                var B3536 = e__3535;
                                {
                                    var B3537 = B3440['instance?'](B3536, B3440['<symbol>']);
                                    {
                                        var B3567 = false;
                                        if (($T)(B3537))
                                            B3567 = B3537;
                                        else
                                            B3567 = B3440['instance?'](B3536, B3440['<array>']);
                                        if (($T)(B3567))
                                            return(B3440['but-last'](($module)['compile-js'](e__3535, env__3493)));
                                        else
                                            return(B3440['as-string'](e__3535));
                                    }
                                }
                            }, B3440['rest'](exp__3492)))
                        });
                    else if (($T)(B3440['=='](B3495, '%object')))
                        return({
                            'type': 'ObjectExpression',
                            'properties': B3440['map'](function B3538(propertySvalue__3539) {
                                var property__3540 = propertySvalue__3539[0];
                                {
                                    var value__3541 = propertySvalue__3539[1];
                                    return({
                                        'type': 'Property',
                                        'key': ($module)['compile'](property__3540, env__3493),
                                        'value': ($module)['compile'](value__3541, env__3493),
                                        'kind': 'init'
                                    });
                                }
                            }, B3440['partition'](2, B3440['rest'](exp__3492)))
                        });
                    else if (($T)(B3440['=='](B3495, '%array'))) {
                        var ____3542 = exp__3492[0];
                        {
                            var elements__3543 = $SL.call(exp__3492, 1);
                            return({
                                'type': 'ArrayExpression',
                                'elements': B3440['map'](B3440['rcurry'](($module)['compile'], env__3493), elements__3543)
                            });
                        }
                    } else if (($T)(B3440['=='](B3495, '%get-property'))) {
                        var ____3544 = exp__3492[0];
                        {
                            var object__3545 = exp__3492[1];
                            {
                                var properties__3546 = $SL.call(exp__3492, 2);
                                return(B3440['reduce'](function B3547(object__3548, property__3549) {
                                    return({
                                        'type': 'MemberExpression',
                                        'object': object__3548,
                                        'property': ($module)['compile'](property__3549, env__3493),
                                        'computed': true
                                    });
                                }, ($module)['compile'](object__3545, env__3493), properties__3546));
                            }
                        }
                    } else {
                        var function__3550 = exp__3492[0];
                        {
                            var arguments__3551 = $SL.call(exp__3492, 1);
                            return({
                                'type': 'CallExpression',
                                'callee': ($module)['compile'](function__3550, env__3493),
                                'arguments': B3440['map'](B3440['rcurry'](($module)['compile'], env__3493), arguments__3551)
                            });
                        }
                    }
                }
            };
            B3440['%annotate-function'](($module)['compile-exp'], 'compile-exp', false);
        }
    }
}
{
    ($module)['%eval'] = function B3569() {
        return(eval((arguments[0])));
    };
    {
        B3440['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
