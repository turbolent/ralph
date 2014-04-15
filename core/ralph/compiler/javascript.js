require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3451(name__3452, value__3453) {
            var B3455 = (exports);
            return(B3455[name__3452] = value__3453);
        };
        {
            ($module)['%eval'] = function B3454() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3456 = require('ralph/core');
{
    var B3457 = require('ralph/regexp');
    {
        var B3458 = require('ralph/compiler/utilities');
        var B3459 = require('escodegen');
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
($module)['*symbol-escapes*'] = B3456['make-object']('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
{
    ($module)['escape-name'] = function B3462(name__3463) {
        if (($T)(B3456['member?'](name__3463, ($module)['*reserved*'])))
            return(B3456['concatenate']('R', name__3463));
        else {
            var chars__3466 = B3456['map'](function B3464(char__3465) {
                    if (($T)(B3456['has?'](($module)['*symbol-escapes*'], char__3465)))
                        return(B3456['get'](($module)['*symbol-escapes*'], char__3465));
                    else if (($T)(B3457['match']('\\w', char__3465)))
                        return(char__3465);
                    else
                        return(B3456['concatenate']('Z', B3456['as-string'](B3456['char-code'](char__3465))));
                }, B3456['as-array'](name__3463));
            return(B3456['join'](chars__3466, ''));
        }
    };
    B3456['%annotate-function'](($module)['escape-name'], 'escape-name', false);
}
{
    {
        ($module)['compile-js'] = function B3468(exp__3469, env__3470) {
            return(B3459['generate'](($module)['as-statement'](($module)['compile'](exp__3469, env__3470)), { 'verbatim': 'x-verbatim' }));
        };
        ($module)['%export']('compile-js', ($module)['compile-js']);
    }
    B3456['%annotate-function'](($module)['compile-js'], 'compile-js', false);
}
{
    ($module)['as-statement'] = function B3473(exp__3474) {
        var B3475 = B3456['position'](B3456['get'](exp__3474, 'type'), 'Statement');
        {
            var B3476 = false;
            if (($T)(B3475))
                B3476 = B3475;
            else
                B3476 = B3456['position'](B3456['get'](exp__3474, 'type'), 'Declaration');
            if (($T)(B3476))
                return(exp__3474);
            else
                return({
                    'type': 'ExpressionStatement',
                    'expression': exp__3474
                });
        }
    };
    B3456['%annotate-function'](($module)['as-statement'], 'as-statement', false);
}
{
    ($module)['make-block'] = function B3478(statements__3479) {
        return({
            'type': 'BlockStatement',
            'body': statements__3479
        });
    };
    B3456['%annotate-function'](($module)['make-block'], 'make-block', false);
}
{
    var B3484 = $K('message');
    {
        ($module)['compile'] = function B3485(exp__3486, env__3487) {
            var B3488 = exp__3486;
            if (($T)(B3456['instance?'](B3488, B3456['<array>'])))
                if (($T)(B3456['empty?'](exp__3486)))
                    return(B3456['signal'](B3456['make'](B3456['<error>'], B3484, 'empty expression')));
                else
                    return(($module)['compile-exp'](exp__3486, env__3487));
            else if (($T)(B3456['instance?'](B3488, B3456['<hash-symbol>'])))
                return({
                    'type': 'Identifier',
                    'name': B3456['concatenate']('$', B3456['as-uppercase'](B3456['symbol-name'](exp__3486)))
                });
            else if (($T)(B3456['instance?'](B3488, B3456['<keyword>'])))
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': '$K'
                    },
                    'arguments': [($module)['compile'](B3456['symbol-name'](exp__3486), env__3487)]
                });
            else if (($T)(B3456['instance?'](B3488, B3456['<symbol>']))) {
                var B3489 = B3456['symbol-name'](exp__3486);
                if (($T)(B3456['=='](B3489, '%this-method')))
                    return(($module)['compile'](B3456['get'](env__3487, 'current-method'), env__3487));
                else if (($T)(B3456['=='](B3489, '%all-arguments')))
                    return({
                        'type': 'Identifier',
                        'name': 'arguments'
                    });
                else {
                    var B3491 = false;
                    if (($T)(B3456['=='](B3456['get'](exp__3486, 'module'), B3456['get'](env__3487, 'module', 'name'))))
                        B3491 = B3456['symbol-name'](exp__3486);
                    else
                        B3491 = B3456['description'](exp__3486);
                    {
                        var B3492 = ($module)['escape-name'](B3491);
                        return({
                            'type': 'Identifier',
                            'name': B3492
                        });
                    }
                }
            } else if (($T)(B3456['instance?'](B3488, B3456['<number>'])))
                if (($T)(B3456['<'](exp__3486, 0)))
                    return({
                        'type': 'UnaryExpression',
                        'operator': '-',
                        'prefix': true,
                        'argument': {
                            'type': 'Literal',
                            'value': B3456['abs'](exp__3486)
                        }
                    });
                else
                    return({
                        'type': 'Literal',
                        'value': exp__3486
                    });
            else {
                var B3490 = exp__3486;
                {
                    var B3493 = false;
                    if (($T)(B3490))
                        B3493 = B3490;
                    else
                        B3493 = false;
                    return({
                        'type': 'Literal',
                        'value': B3493
                    });
                }
            }
        };
        B3456['%annotate-function'](($module)['compile'], 'compile', false);
    }
}
{
    var B3505 = $S('%native-call', 'ralph/core');
    {
        var B3506 = $S('%begin', 'ralph/core');
        {
            ($module)['compile-exp'] = function B3507(exp__3508, env__3509) {
                var name__3510 = B3456['symbol-name'](B3456['first'](exp__3508));
                {
                    var B3511 = name__3510;
                    if (($T)(B3456['=='](B3511, '%quote'))) {
                        var B3512 = B3456['destructure-symbol'](B3456['second'](exp__3508));
                        {
                            var name__3513 = B3512[0];
                            {
                                var module_name__3514 = B3512[1];
                                {
                                    var B3568 = B3456['%concat'];
                                    {
                                        var B3569 = [
                                                B3505,
                                                '$S',
                                                name__3513
                                            ];
                                        {
                                            var B3570 = false;
                                            if (($T)(module_name__3514))
                                                B3570 = [module_name__3514];
                                            else
                                                B3570 = [];
                                            {
                                                var B3571 = B3568(B3569, B3570);
                                                return(($module)['compile'](B3571, env__3509));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%method'))) {
                        var ____3515 = exp__3508[0];
                        {
                            var name__3516 = exp__3508[1];
                            {
                                var parameters__3517 = exp__3508[2];
                                {
                                    var form__3518 = exp__3508[3];
                                    {
                                        var previous_method__3519 = B3456['get'](env__3509, 'current-method');
                                        {
                                            var B3572 = ($module)['compile'](name__3516, env__3509);
                                            {
                                                var B3573 = B3456['map'](B3456['rcurry'](($module)['compile'], env__3509), parameters__3517);
                                                {
                                                    B3456['get-setter'](env__3509, 'current-method', name__3516);
                                                    {
                                                        var B3574 = false;
                                                        if (($T)(B3458['op?']('%begin', form__3518)))
                                                            B3574 = form__3518;
                                                        else
                                                            B3574 = [
                                                                B3506,
                                                                form__3518
                                                            ];
                                                        {
                                                            var formT__3520 = ($module)['compile'](B3574, env__3509);
                                                            {
                                                                B3456['get-setter'](env__3509, 'current-method', previous_method__3519);
                                                                return({
                                                                    'type': 'FunctionExpression',
                                                                    'id': B3572,
                                                                    'params': B3573,
                                                                    'body': formT__3520
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
                    } else if (($T)(B3456['=='](B3511, '%set'))) {
                        var ____3521 = exp__3508[0];
                        {
                            var identifier__3522 = exp__3508[1];
                            {
                                var value__3523 = exp__3508[2];
                                return({
                                    'type': 'AssignmentExpression',
                                    'operator': '=',
                                    'left': ($module)['compile'](identifier__3522, env__3509),
                                    'right': ($module)['compile'](value__3523, env__3509)
                                });
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%if'))) {
                        var ____3524 = exp__3508[0];
                        {
                            var test__3525 = exp__3508[1];
                            {
                                var consequent__3526 = exp__3508[2];
                                {
                                    var alternate__3527 = exp__3508[3];
                                    {
                                        var B3575 = ($module)['compile'](test__3525, env__3509);
                                        {
                                            var B3576 = ($module)['as-statement'](($module)['compile'](consequent__3526, env__3509));
                                            {
                                                var B3577 = false;
                                                if (($T)(alternate__3527))
                                                    B3577 = ($module)['as-statement'](($module)['compile'](alternate__3527, env__3509));
                                                else
                                                    B3577 = false;
                                                return({
                                                    'type': 'IfStatement',
                                                    'test': B3575,
                                                    'consequent': B3576,
                                                    'alternate': B3577
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%begin')))
                        return(($module)['make-block'](B3456['map'](function B3528(exp__3529) {
                            return(($module)['as-statement'](($module)['compile'](exp__3529, env__3509)));
                        }, B3456['rest'](exp__3508))));
                    else if (($T)(B3456['=='](B3511, '%while'))) {
                        var ____3530 = exp__3508[0];
                        {
                            var test__3531 = exp__3508[1];
                            {
                                var form__3532 = exp__3508[2];
                                return({
                                    'type': 'WhileStatement',
                                    'test': ($module)['compile'](test__3531, env__3509),
                                    'body': ($module)['as-statement'](($module)['compile'](form__3532, env__3509))
                                });
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%try'))) {
                        var ____3533 = exp__3508[0];
                        {
                            var protected_form__3534 = exp__3508[1];
                            {
                                var identifier__3535 = exp__3508[2];
                                {
                                    var handling_form__3536 = exp__3508[3];
                                    return({
                                        'type': 'TryStatement',
                                        'block': ($module)['make-block']([($module)['as-statement'](($module)['compile'](protected_form__3534, env__3509))]),
                                        'handler': {
                                            'type': 'CatchClause',
                                            'param': ($module)['compile'](identifier__3535, env__3509),
                                            'body': ($module)['make-block']([($module)['as-statement'](($module)['compile'](handling_form__3536, env__3509))])
                                        }
                                    });
                                }
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%var'))) {
                        var ____3537 = exp__3508[0];
                        {
                            var identifier__3538 = exp__3508[1];
                            {
                                var value__3539 = exp__3508[2];
                                {
                                    var B3578 = ($module)['compile'](identifier__3538, env__3509);
                                    {
                                        var B3540 = value__3539;
                                        {
                                            var B3579 = false;
                                            if (($T)(B3540))
                                                B3579 = B3540;
                                            else
                                                B3579 = false;
                                            {
                                                var B3580 = ($module)['compile'](B3579, env__3509);
                                                {
                                                    var B3581 = {
                                                            'type': 'VariableDeclarator',
                                                            'id': B3578,
                                                            'init': B3580
                                                        };
                                                    {
                                                        var B3582 = [B3581];
                                                        return({
                                                            'type': 'VariableDeclaration',
                                                            'kind': 'var',
                                                            'declarations': B3582
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%native-call'))) {
                        var ____3541 = exp__3508[0];
                        {
                            var operator__3542 = exp__3508[1];
                            {
                                var arguments__3543 = $SL.call(exp__3508, 2);
                                return({
                                    'type': 'CallExpression',
                                    'callee': {
                                        'type': 'Identifier',
                                        'name': operator__3542
                                    },
                                    'arguments': B3456['map'](B3456['rcurry'](($module)['compile'], env__3509), arguments__3543)
                                });
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%infix'))) {
                        var ____3544 = exp__3508[0];
                        {
                            var operator__3545 = exp__3508[1];
                            {
                                var arguments__3546 = $SL.call(exp__3508, 2);
                                return(B3456['reduce1'](function B3547(result__3548, exp__3549) {
                                    return({
                                        'type': 'BinaryExpression',
                                        'operator': operator__3545,
                                        'left': result__3548,
                                        'right': exp__3549
                                    });
                                }, B3456['map'](B3456['rcurry'](($module)['compile'], env__3509), arguments__3546)));
                            }
                        }
                    } else if (($T)(B3456['=='](B3511, '%native')))
                        return({
                            'type': 'Expression',
                            'x-verbatim': B3456['reduce1'](B3456['concatenate'], B3456['map'](function B3550(e__3551) {
                                var B3552 = e__3551;
                                {
                                    var B3553 = B3456['instance?'](B3552, B3456['<symbol>']);
                                    {
                                        var B3583 = false;
                                        if (($T)(B3553))
                                            B3583 = B3553;
                                        else
                                            B3583 = B3456['instance?'](B3552, B3456['<array>']);
                                        if (($T)(B3583))
                                            return(B3456['but-last'](($module)['compile-js'](e__3551, env__3509)));
                                        else
                                            return(B3456['as-string'](e__3551));
                                    }
                                }
                            }, B3456['rest'](exp__3508)))
                        });
                    else if (($T)(B3456['=='](B3511, '%object')))
                        return({
                            'type': 'ObjectExpression',
                            'properties': B3456['map'](function B3554(propertySvalue__3555) {
                                var property__3556 = propertySvalue__3555[0];
                                {
                                    var value__3557 = propertySvalue__3555[1];
                                    return({
                                        'type': 'Property',
                                        'key': ($module)['compile'](property__3556, env__3509),
                                        'value': ($module)['compile'](value__3557, env__3509),
                                        'kind': 'init'
                                    });
                                }
                            }, B3456['partition'](2, B3456['rest'](exp__3508)))
                        });
                    else if (($T)(B3456['=='](B3511, '%array'))) {
                        var ____3558 = exp__3508[0];
                        {
                            var elements__3559 = $SL.call(exp__3508, 1);
                            return({
                                'type': 'ArrayExpression',
                                'elements': B3456['map'](B3456['rcurry'](($module)['compile'], env__3509), elements__3559)
                            });
                        }
                    } else if (($T)(B3456['=='](B3511, '%get-property'))) {
                        var ____3560 = exp__3508[0];
                        {
                            var object__3561 = exp__3508[1];
                            {
                                var properties__3562 = $SL.call(exp__3508, 2);
                                return(B3456['reduce'](function B3563(object__3564, property__3565) {
                                    return({
                                        'type': 'MemberExpression',
                                        'object': object__3564,
                                        'property': ($module)['compile'](property__3565, env__3509),
                                        'computed': true
                                    });
                                }, ($module)['compile'](object__3561, env__3509), properties__3562));
                            }
                        }
                    } else {
                        var function__3566 = exp__3508[0];
                        {
                            var arguments__3567 = $SL.call(exp__3508, 1);
                            return({
                                'type': 'CallExpression',
                                'callee': ($module)['compile'](function__3566, env__3509),
                                'arguments': B3456['map'](B3456['rcurry'](($module)['compile'], env__3509), arguments__3567)
                            });
                        }
                    }
                }
            };
            B3456['%annotate-function'](($module)['compile-exp'], 'compile-exp', false);
        }
    }
}
