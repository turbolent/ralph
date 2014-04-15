require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3477(name__3478, value__3479) {
            var B3481 = (exports);
            return(B3481[name__3478] = value__3479);
        };
        {
            ($module)['%eval'] = function B3480() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3482 = require('ralph/core');
{
    var B3483 = require('ralph/regexp');
    {
        var B3484 = require('ralph/compiler/utilities');
        var B3485 = require('escodegen');
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
($module)['*symbol-escapes*'] = B3482['make-object']('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
{
    ($module)['escape-name'] = function B3488(name__3489) {
        if (($T)(B3482['member?'](name__3489, ($module)['*reserved*'])))
            return(B3482['concatenate']('R', name__3489));
        else {
            var chars__3492 = B3482['map'](function B3490(char__3491) {
                    if (($T)(B3482['has?'](($module)['*symbol-escapes*'], char__3491)))
                        return(B3482['get'](($module)['*symbol-escapes*'], char__3491));
                    else if (($T)(B3483['match']('\\w', char__3491)))
                        return(char__3491);
                    else
                        return(B3482['concatenate']('Z', B3482['as-string'](B3482['char-code'](char__3491))));
                }, B3482['as-array'](name__3489));
            return(B3482['join'](chars__3492, ''));
        }
    };
    B3482['%annotate-function'](($module)['escape-name'], 'escape-name', false);
}
{
    {
        ($module)['compile-js'] = function B3494(exp__3495, env__3496) {
            return(B3485['generate'](($module)['as-statement'](($module)['compile'](exp__3495, env__3496)), { 'verbatim': 'x-verbatim' }));
        };
        ($module)['%export']('compile-js', ($module)['compile-js']);
    }
    B3482['%annotate-function'](($module)['compile-js'], 'compile-js', false);
}
{
    ($module)['as-statement'] = function B3499(exp__3500) {
        var B3501 = B3482['position'](B3482['get'](exp__3500, 'type'), 'Statement');
        {
            var B3502 = false;
            if (($T)(B3501))
                B3502 = B3501;
            else
                B3502 = B3482['position'](B3482['get'](exp__3500, 'type'), 'Declaration');
            if (($T)(B3502))
                return(exp__3500);
            else
                return({
                    'type': 'ExpressionStatement',
                    'expression': exp__3500
                });
        }
    };
    B3482['%annotate-function'](($module)['as-statement'], 'as-statement', false);
}
{
    ($module)['make-block'] = function B3504(statements__3505) {
        return({
            'type': 'BlockStatement',
            'body': statements__3505
        });
    };
    B3482['%annotate-function'](($module)['make-block'], 'make-block', false);
}
{
    var B3510 = $K('message');
    {
        ($module)['compile'] = function B3511(exp__3512, env__3513) {
            var B3514 = exp__3512;
            if (($T)(B3482['instance?'](B3514, B3482['<array>'])))
                if (($T)(B3482['empty?'](exp__3512)))
                    return(B3482['signal'](B3482['make'](B3482['<error>'], B3510, 'empty expression')));
                else
                    return(($module)['compile-exp'](exp__3512, env__3513));
            else if (($T)(B3482['instance?'](B3514, B3482['<hash-symbol>'])))
                return({
                    'type': 'Identifier',
                    'name': B3482['concatenate']('$', B3482['as-uppercase'](B3482['symbol-name'](exp__3512)))
                });
            else if (($T)(B3482['instance?'](B3514, B3482['<keyword>'])))
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': '$K'
                    },
                    'arguments': [($module)['compile'](B3482['symbol-name'](exp__3512), env__3513)]
                });
            else if (($T)(B3482['instance?'](B3514, B3482['<symbol>']))) {
                var B3515 = B3482['symbol-name'](exp__3512);
                if (($T)(B3482['=='](B3515, '%this-method')))
                    return(($module)['compile'](B3482['get'](env__3513, 'current-method'), env__3513));
                else if (($T)(B3482['=='](B3515, '%all-arguments')))
                    return({
                        'type': 'Identifier',
                        'name': 'arguments'
                    });
                else {
                    var B3517 = false;
                    if (($T)(B3482['=='](B3482['get'](exp__3512, 'module'), B3482['get'](env__3513, 'module', 'name'))))
                        B3517 = B3482['symbol-name'](exp__3512);
                    else
                        B3517 = B3482['description'](exp__3512);
                    {
                        var B3518 = ($module)['escape-name'](B3517);
                        return({
                            'type': 'Identifier',
                            'name': B3518
                        });
                    }
                }
            } else if (($T)(B3482['instance?'](B3514, B3482['<number>'])))
                if (($T)(B3482['<'](exp__3512, 0)))
                    return({
                        'type': 'UnaryExpression',
                        'operator': '-',
                        'prefix': true,
                        'argument': {
                            'type': 'Literal',
                            'value': B3482['abs'](exp__3512)
                        }
                    });
                else
                    return({
                        'type': 'Literal',
                        'value': exp__3512
                    });
            else {
                var B3516 = exp__3512;
                {
                    var B3519 = false;
                    if (($T)(B3516))
                        B3519 = B3516;
                    else
                        B3519 = false;
                    return({
                        'type': 'Literal',
                        'value': B3519
                    });
                }
            }
        };
        B3482['%annotate-function'](($module)['compile'], 'compile', false);
    }
}
{
    var B3531 = $S('%native-call', 'ralph/core');
    {
        var B3532 = $S('%begin', 'ralph/core');
        {
            ($module)['compile-exp'] = function B3533(exp__3534, env__3535) {
                var name__3536 = B3482['symbol-name'](B3482['first'](exp__3534));
                {
                    var B3537 = name__3536;
                    if (($T)(B3482['=='](B3537, '%quote'))) {
                        var B3538 = B3482['destructure-symbol'](B3482['second'](exp__3534));
                        {
                            var name__3539 = B3538[0];
                            {
                                var module_name__3540 = B3538[1];
                                {
                                    var B3594 = B3482['%concat'];
                                    {
                                        var B3595 = [
                                                B3531,
                                                '$S',
                                                name__3539
                                            ];
                                        {
                                            var B3596 = false;
                                            if (($T)(module_name__3540))
                                                B3596 = [module_name__3540];
                                            else
                                                B3596 = [];
                                            {
                                                var B3597 = B3594(B3595, B3596);
                                                return(($module)['compile'](B3597, env__3535));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%method'))) {
                        var ____3541 = exp__3534[0];
                        {
                            var name__3542 = exp__3534[1];
                            {
                                var parameters__3543 = exp__3534[2];
                                {
                                    var form__3544 = exp__3534[3];
                                    {
                                        var previous_method__3545 = B3482['get'](env__3535, 'current-method');
                                        {
                                            var B3598 = ($module)['compile'](name__3542, env__3535);
                                            {
                                                var B3599 = B3482['map'](B3482['rcurry'](($module)['compile'], env__3535), parameters__3543);
                                                {
                                                    B3482['get-setter'](env__3535, 'current-method', name__3542);
                                                    {
                                                        var B3600 = false;
                                                        if (($T)(B3484['op?']('%begin', form__3544)))
                                                            B3600 = form__3544;
                                                        else
                                                            B3600 = [
                                                                B3532,
                                                                form__3544
                                                            ];
                                                        {
                                                            var formT__3546 = ($module)['compile'](B3600, env__3535);
                                                            {
                                                                B3482['get-setter'](env__3535, 'current-method', previous_method__3545);
                                                                return({
                                                                    'type': 'FunctionExpression',
                                                                    'id': B3598,
                                                                    'params': B3599,
                                                                    'body': formT__3546
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
                    } else if (($T)(B3482['=='](B3537, '%set'))) {
                        var ____3547 = exp__3534[0];
                        {
                            var identifier__3548 = exp__3534[1];
                            {
                                var value__3549 = exp__3534[2];
                                return({
                                    'type': 'AssignmentExpression',
                                    'operator': '=',
                                    'left': ($module)['compile'](identifier__3548, env__3535),
                                    'right': ($module)['compile'](value__3549, env__3535)
                                });
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%if'))) {
                        var ____3550 = exp__3534[0];
                        {
                            var test__3551 = exp__3534[1];
                            {
                                var consequent__3552 = exp__3534[2];
                                {
                                    var alternate__3553 = exp__3534[3];
                                    {
                                        var B3601 = ($module)['compile'](test__3551, env__3535);
                                        {
                                            var B3602 = ($module)['as-statement'](($module)['compile'](consequent__3552, env__3535));
                                            {
                                                var B3603 = false;
                                                if (($T)(alternate__3553))
                                                    B3603 = ($module)['as-statement'](($module)['compile'](alternate__3553, env__3535));
                                                else
                                                    B3603 = false;
                                                return({
                                                    'type': 'IfStatement',
                                                    'test': B3601,
                                                    'consequent': B3602,
                                                    'alternate': B3603
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%begin')))
                        return(($module)['make-block'](B3482['map'](function B3554(exp__3555) {
                            return(($module)['as-statement'](($module)['compile'](exp__3555, env__3535)));
                        }, B3482['rest'](exp__3534))));
                    else if (($T)(B3482['=='](B3537, '%while'))) {
                        var ____3556 = exp__3534[0];
                        {
                            var test__3557 = exp__3534[1];
                            {
                                var form__3558 = exp__3534[2];
                                return({
                                    'type': 'WhileStatement',
                                    'test': ($module)['compile'](test__3557, env__3535),
                                    'body': ($module)['as-statement'](($module)['compile'](form__3558, env__3535))
                                });
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%try'))) {
                        var ____3559 = exp__3534[0];
                        {
                            var protected_form__3560 = exp__3534[1];
                            {
                                var identifier__3561 = exp__3534[2];
                                {
                                    var handling_form__3562 = exp__3534[3];
                                    return({
                                        'type': 'TryStatement',
                                        'block': ($module)['make-block']([($module)['as-statement'](($module)['compile'](protected_form__3560, env__3535))]),
                                        'handler': {
                                            'type': 'CatchClause',
                                            'param': ($module)['compile'](identifier__3561, env__3535),
                                            'body': ($module)['make-block']([($module)['as-statement'](($module)['compile'](handling_form__3562, env__3535))])
                                        }
                                    });
                                }
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%var'))) {
                        var ____3563 = exp__3534[0];
                        {
                            var identifier__3564 = exp__3534[1];
                            {
                                var value__3565 = exp__3534[2];
                                {
                                    var B3604 = ($module)['compile'](identifier__3564, env__3535);
                                    {
                                        var B3566 = value__3565;
                                        {
                                            var B3605 = false;
                                            if (($T)(B3566))
                                                B3605 = B3566;
                                            else
                                                B3605 = false;
                                            {
                                                var B3606 = ($module)['compile'](B3605, env__3535);
                                                {
                                                    var B3607 = {
                                                            'type': 'VariableDeclarator',
                                                            'id': B3604,
                                                            'init': B3606
                                                        };
                                                    {
                                                        var B3608 = [B3607];
                                                        return({
                                                            'type': 'VariableDeclaration',
                                                            'kind': 'var',
                                                            'declarations': B3608
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%native-call'))) {
                        var ____3567 = exp__3534[0];
                        {
                            var operator__3568 = exp__3534[1];
                            {
                                var arguments__3569 = $SL.call(exp__3534, 2);
                                return({
                                    'type': 'CallExpression',
                                    'callee': {
                                        'type': 'Identifier',
                                        'name': operator__3568
                                    },
                                    'arguments': B3482['map'](B3482['rcurry'](($module)['compile'], env__3535), arguments__3569)
                                });
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%infix'))) {
                        var ____3570 = exp__3534[0];
                        {
                            var operator__3571 = exp__3534[1];
                            {
                                var arguments__3572 = $SL.call(exp__3534, 2);
                                return(B3482['reduce1'](function B3573(result__3574, exp__3575) {
                                    return({
                                        'type': 'BinaryExpression',
                                        'operator': operator__3571,
                                        'left': result__3574,
                                        'right': exp__3575
                                    });
                                }, B3482['map'](B3482['rcurry'](($module)['compile'], env__3535), arguments__3572)));
                            }
                        }
                    } else if (($T)(B3482['=='](B3537, '%native')))
                        return({
                            'type': 'Expression',
                            'x-verbatim': B3482['reduce1'](B3482['concatenate'], B3482['map'](function B3576(e__3577) {
                                var B3578 = e__3577;
                                {
                                    var B3579 = B3482['instance?'](B3578, B3482['<symbol>']);
                                    {
                                        var B3609 = false;
                                        if (($T)(B3579))
                                            B3609 = B3579;
                                        else
                                            B3609 = B3482['instance?'](B3578, B3482['<array>']);
                                        if (($T)(B3609))
                                            return(B3482['but-last'](($module)['compile-js'](e__3577, env__3535)));
                                        else
                                            return(B3482['as-string'](e__3577));
                                    }
                                }
                            }, B3482['rest'](exp__3534)))
                        });
                    else if (($T)(B3482['=='](B3537, '%object')))
                        return({
                            'type': 'ObjectExpression',
                            'properties': B3482['map'](function B3580(propertySvalue__3581) {
                                var property__3582 = propertySvalue__3581[0];
                                {
                                    var value__3583 = propertySvalue__3581[1];
                                    return({
                                        'type': 'Property',
                                        'key': ($module)['compile'](property__3582, env__3535),
                                        'value': ($module)['compile'](value__3583, env__3535),
                                        'kind': 'init'
                                    });
                                }
                            }, B3482['partition'](2, B3482['rest'](exp__3534)))
                        });
                    else if (($T)(B3482['=='](B3537, '%array'))) {
                        var ____3584 = exp__3534[0];
                        {
                            var elements__3585 = $SL.call(exp__3534, 1);
                            return({
                                'type': 'ArrayExpression',
                                'elements': B3482['map'](B3482['rcurry'](($module)['compile'], env__3535), elements__3585)
                            });
                        }
                    } else if (($T)(B3482['=='](B3537, '%get-property'))) {
                        var ____3586 = exp__3534[0];
                        {
                            var object__3587 = exp__3534[1];
                            {
                                var properties__3588 = $SL.call(exp__3534, 2);
                                return(B3482['reduce'](function B3589(object__3590, property__3591) {
                                    return({
                                        'type': 'MemberExpression',
                                        'object': object__3590,
                                        'property': ($module)['compile'](property__3591, env__3535),
                                        'computed': true
                                    });
                                }, ($module)['compile'](object__3587, env__3535), properties__3588));
                            }
                        }
                    } else {
                        var function__3592 = exp__3534[0];
                        {
                            var arguments__3593 = $SL.call(exp__3534, 1);
                            return({
                                'type': 'CallExpression',
                                'callee': ($module)['compile'](function__3592, env__3535),
                                'arguments': B3482['map'](B3482['rcurry'](($module)['compile'], env__3535), arguments__3593)
                            });
                        }
                    }
                }
            };
            B3482['%annotate-function'](($module)['compile-exp'], 'compile-exp', false);
        }
    }
}
