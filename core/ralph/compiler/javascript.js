require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3489(name__3490, value__3491) {
            var B3493 = (exports);
            return(B3493[name__3490] = value__3491);
        };
        {
            ($module)['%eval'] = function B3492() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3494 = require('ralph/core');
{
    var B3495 = require('ralph/regexp');
    {
        var B3496 = require('ralph/compiler/utilities');
        var B3497 = require('escodegen');
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
($module)['*symbol-escapes*'] = B3494['make-object']('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
{
    ($module)['escape-name'] = function B3500(name__3501) {
        if (($T)(B3494['member?'](name__3501, ($module)['*reserved*'])))
            return(B3494['concatenate']('R', name__3501));
        else {
            var chars__3504 = B3494['map'](function B3502(char__3503) {
                    if (($T)(B3494['has?'](($module)['*symbol-escapes*'], char__3503)))
                        return(B3494['get'](($module)['*symbol-escapes*'], char__3503));
                    else if (($T)(B3495['match']('\\w', char__3503)))
                        return(char__3503);
                    else
                        return(B3494['concatenate']('Z', B3494['as-string'](B3494['char-code'](char__3503))));
                }, B3494['as-array'](name__3501));
            return(B3494['join'](chars__3504, ''));
        }
    };
    B3494['%annotate-function'](($module)['escape-name'], 'escape-name', false);
}
{
    {
        ($module)['compile-js'] = function B3506(exp__3507, env__3508) {
            return(B3497['generate'](($module)['as-statement'](($module)['compile'](exp__3507, env__3508)), { 'verbatim': 'x-verbatim' }));
        };
        ($module)['%export']('compile-js', ($module)['compile-js']);
    }
    B3494['%annotate-function'](($module)['compile-js'], 'compile-js', false);
}
{
    ($module)['as-statement'] = function B3511(exp__3512) {
        var B3513 = B3494['position'](B3494['get'](exp__3512, 'type'), 'Statement');
        {
            var B3514 = false;
            if (($T)(B3513))
                B3514 = B3513;
            else
                B3514 = B3494['position'](B3494['get'](exp__3512, 'type'), 'Declaration');
            if (($T)(B3514))
                return(exp__3512);
            else
                return({
                    'type': 'ExpressionStatement',
                    'expression': exp__3512
                });
        }
    };
    B3494['%annotate-function'](($module)['as-statement'], 'as-statement', false);
}
{
    ($module)['make-block'] = function B3516(statements__3517) {
        return({
            'type': 'BlockStatement',
            'body': statements__3517
        });
    };
    B3494['%annotate-function'](($module)['make-block'], 'make-block', false);
}
{
    var B3522 = $K('message');
    {
        ($module)['compile'] = function B3523(exp__3524, env__3525) {
            var B3526 = exp__3524;
            if (($T)(B3494['instance?'](B3526, B3494['<array>'])))
                if (($T)(B3494['empty?'](exp__3524)))
                    return(B3494['signal'](B3494['make'](B3494['<error>'], B3522, 'empty expression')));
                else
                    return(($module)['compile-exp'](exp__3524, env__3525));
            else if (($T)(B3494['instance?'](B3526, B3494['<hash-symbol>'])))
                return({
                    'type': 'Identifier',
                    'name': B3494['concatenate']('$', B3494['as-uppercase'](B3494['symbol-name'](exp__3524)))
                });
            else if (($T)(B3494['instance?'](B3526, B3494['<keyword>'])))
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': '$K'
                    },
                    'arguments': [($module)['compile'](B3494['symbol-name'](exp__3524), env__3525)]
                });
            else if (($T)(B3494['instance?'](B3526, B3494['<symbol>']))) {
                var B3527 = B3494['symbol-name'](exp__3524);
                if (($T)(B3494['=='](B3527, '%this-method')))
                    return(($module)['compile'](B3494['get'](env__3525, 'current-method'), env__3525));
                else if (($T)(B3494['=='](B3527, '%all-arguments')))
                    return({
                        'type': 'Identifier',
                        'name': 'arguments'
                    });
                else {
                    var B3529 = false;
                    if (($T)(B3494['=='](B3494['get'](exp__3524, 'module'), B3494['get'](env__3525, 'module', 'name'))))
                        B3529 = B3494['symbol-name'](exp__3524);
                    else
                        B3529 = B3494['description'](exp__3524);
                    {
                        var B3530 = ($module)['escape-name'](B3529);
                        return({
                            'type': 'Identifier',
                            'name': B3530
                        });
                    }
                }
            } else if (($T)(B3494['instance?'](B3526, B3494['<number>'])))
                if (($T)(B3494['<'](exp__3524, 0)))
                    return({
                        'type': 'UnaryExpression',
                        'operator': '-',
                        'prefix': true,
                        'argument': {
                            'type': 'Literal',
                            'value': B3494['abs'](exp__3524)
                        }
                    });
                else
                    return({
                        'type': 'Literal',
                        'value': exp__3524
                    });
            else {
                var B3528 = exp__3524;
                {
                    var B3531 = false;
                    if (($T)(B3528))
                        B3531 = B3528;
                    else
                        B3531 = false;
                    return({
                        'type': 'Literal',
                        'value': B3531
                    });
                }
            }
        };
        B3494['%annotate-function'](($module)['compile'], 'compile', false);
    }
}
{
    var B3543 = $S('%native-call', 'ralph/core');
    {
        var B3544 = $S('%begin', 'ralph/core');
        {
            ($module)['compile-exp'] = function B3545(exp__3546, env__3547) {
                var name__3548 = B3494['symbol-name'](B3494['first'](exp__3546));
                {
                    var B3549 = name__3548;
                    if (($T)(B3494['=='](B3549, '%quote'))) {
                        var B3550 = B3494['destructure-symbol'](B3494['second'](exp__3546));
                        {
                            var name__3551 = B3550[0];
                            {
                                var module_name__3552 = B3550[1];
                                {
                                    var B3606 = B3494['%concat'];
                                    {
                                        var B3607 = [
                                                B3543,
                                                '$S',
                                                name__3551
                                            ];
                                        {
                                            var B3608 = false;
                                            if (($T)(module_name__3552))
                                                B3608 = [module_name__3552];
                                            else
                                                B3608 = [];
                                            {
                                                var B3609 = B3606(B3607, B3608);
                                                return(($module)['compile'](B3609, env__3547));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%method'))) {
                        var ____3553 = exp__3546[0];
                        {
                            var name__3554 = exp__3546[1];
                            {
                                var parameters__3555 = exp__3546[2];
                                {
                                    var form__3556 = exp__3546[3];
                                    {
                                        var previous_method__3557 = B3494['get'](env__3547, 'current-method');
                                        {
                                            var B3610 = ($module)['compile'](name__3554, env__3547);
                                            {
                                                var B3611 = B3494['map'](B3494['rcurry'](($module)['compile'], env__3547), parameters__3555);
                                                {
                                                    B3494['get-setter'](env__3547, 'current-method', name__3554);
                                                    {
                                                        var B3612 = false;
                                                        if (($T)(B3496['op?']('%begin', form__3556)))
                                                            B3612 = form__3556;
                                                        else
                                                            B3612 = [
                                                                B3544,
                                                                form__3556
                                                            ];
                                                        {
                                                            var formT__3558 = ($module)['compile'](B3612, env__3547);
                                                            {
                                                                B3494['get-setter'](env__3547, 'current-method', previous_method__3557);
                                                                return({
                                                                    'type': 'FunctionExpression',
                                                                    'id': B3610,
                                                                    'params': B3611,
                                                                    'body': formT__3558
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
                    } else if (($T)(B3494['=='](B3549, '%set'))) {
                        var ____3559 = exp__3546[0];
                        {
                            var identifier__3560 = exp__3546[1];
                            {
                                var value__3561 = exp__3546[2];
                                return({
                                    'type': 'AssignmentExpression',
                                    'operator': '=',
                                    'left': ($module)['compile'](identifier__3560, env__3547),
                                    'right': ($module)['compile'](value__3561, env__3547)
                                });
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%if'))) {
                        var ____3562 = exp__3546[0];
                        {
                            var test__3563 = exp__3546[1];
                            {
                                var consequent__3564 = exp__3546[2];
                                {
                                    var alternate__3565 = exp__3546[3];
                                    {
                                        var B3613 = ($module)['compile'](test__3563, env__3547);
                                        {
                                            var B3614 = ($module)['as-statement'](($module)['compile'](consequent__3564, env__3547));
                                            {
                                                var B3615 = false;
                                                if (($T)(alternate__3565))
                                                    B3615 = ($module)['as-statement'](($module)['compile'](alternate__3565, env__3547));
                                                else
                                                    B3615 = false;
                                                return({
                                                    'type': 'IfStatement',
                                                    'test': B3613,
                                                    'consequent': B3614,
                                                    'alternate': B3615
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%begin')))
                        return(($module)['make-block'](B3494['map'](function B3566(exp__3567) {
                            return(($module)['as-statement'](($module)['compile'](exp__3567, env__3547)));
                        }, B3494['rest'](exp__3546))));
                    else if (($T)(B3494['=='](B3549, '%while'))) {
                        var ____3568 = exp__3546[0];
                        {
                            var test__3569 = exp__3546[1];
                            {
                                var form__3570 = exp__3546[2];
                                return({
                                    'type': 'WhileStatement',
                                    'test': ($module)['compile'](test__3569, env__3547),
                                    'body': ($module)['as-statement'](($module)['compile'](form__3570, env__3547))
                                });
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%try'))) {
                        var ____3571 = exp__3546[0];
                        {
                            var protected_form__3572 = exp__3546[1];
                            {
                                var identifier__3573 = exp__3546[2];
                                {
                                    var handling_form__3574 = exp__3546[3];
                                    return({
                                        'type': 'TryStatement',
                                        'block': ($module)['make-block']([($module)['as-statement'](($module)['compile'](protected_form__3572, env__3547))]),
                                        'handler': {
                                            'type': 'CatchClause',
                                            'param': ($module)['compile'](identifier__3573, env__3547),
                                            'body': ($module)['make-block']([($module)['as-statement'](($module)['compile'](handling_form__3574, env__3547))])
                                        }
                                    });
                                }
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%var'))) {
                        var ____3575 = exp__3546[0];
                        {
                            var identifier__3576 = exp__3546[1];
                            {
                                var value__3577 = exp__3546[2];
                                {
                                    var B3616 = ($module)['compile'](identifier__3576, env__3547);
                                    {
                                        var B3578 = value__3577;
                                        {
                                            var B3617 = false;
                                            if (($T)(B3578))
                                                B3617 = B3578;
                                            else
                                                B3617 = false;
                                            {
                                                var B3618 = ($module)['compile'](B3617, env__3547);
                                                {
                                                    var B3619 = {
                                                            'type': 'VariableDeclarator',
                                                            'id': B3616,
                                                            'init': B3618
                                                        };
                                                    {
                                                        var B3620 = [B3619];
                                                        return({
                                                            'type': 'VariableDeclaration',
                                                            'kind': 'var',
                                                            'declarations': B3620
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%native-call'))) {
                        var ____3579 = exp__3546[0];
                        {
                            var operator__3580 = exp__3546[1];
                            {
                                var arguments__3581 = $SL.call(exp__3546, 2);
                                return({
                                    'type': 'CallExpression',
                                    'callee': {
                                        'type': 'Identifier',
                                        'name': operator__3580
                                    },
                                    'arguments': B3494['map'](B3494['rcurry'](($module)['compile'], env__3547), arguments__3581)
                                });
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%infix'))) {
                        var ____3582 = exp__3546[0];
                        {
                            var operator__3583 = exp__3546[1];
                            {
                                var arguments__3584 = $SL.call(exp__3546, 2);
                                return(B3494['reduce1'](function B3585(result__3586, exp__3587) {
                                    return({
                                        'type': 'BinaryExpression',
                                        'operator': operator__3583,
                                        'left': result__3586,
                                        'right': exp__3587
                                    });
                                }, B3494['map'](B3494['rcurry'](($module)['compile'], env__3547), arguments__3584)));
                            }
                        }
                    } else if (($T)(B3494['=='](B3549, '%native')))
                        return({
                            'type': 'Expression',
                            'x-verbatim': B3494['reduce1'](B3494['concatenate'], B3494['map'](function B3588(e__3589) {
                                var B3590 = e__3589;
                                {
                                    var B3591 = B3494['instance?'](B3590, B3494['<symbol>']);
                                    {
                                        var B3621 = false;
                                        if (($T)(B3591))
                                            B3621 = B3591;
                                        else
                                            B3621 = B3494['instance?'](B3590, B3494['<array>']);
                                        if (($T)(B3621))
                                            return(B3494['but-last'](($module)['compile-js'](e__3589, env__3547)));
                                        else
                                            return(B3494['as-string'](e__3589));
                                    }
                                }
                            }, B3494['rest'](exp__3546)))
                        });
                    else if (($T)(B3494['=='](B3549, '%object')))
                        return({
                            'type': 'ObjectExpression',
                            'properties': B3494['map'](function B3592(propertySvalue__3593) {
                                var property__3594 = propertySvalue__3593[0];
                                {
                                    var value__3595 = propertySvalue__3593[1];
                                    return({
                                        'type': 'Property',
                                        'key': ($module)['compile'](property__3594, env__3547),
                                        'value': ($module)['compile'](value__3595, env__3547),
                                        'kind': 'init'
                                    });
                                }
                            }, B3494['partition'](2, B3494['rest'](exp__3546)))
                        });
                    else if (($T)(B3494['=='](B3549, '%array'))) {
                        var ____3596 = exp__3546[0];
                        {
                            var elements__3597 = $SL.call(exp__3546, 1);
                            return({
                                'type': 'ArrayExpression',
                                'elements': B3494['map'](B3494['rcurry'](($module)['compile'], env__3547), elements__3597)
                            });
                        }
                    } else if (($T)(B3494['=='](B3549, '%get-property'))) {
                        var ____3598 = exp__3546[0];
                        {
                            var object__3599 = exp__3546[1];
                            {
                                var properties__3600 = $SL.call(exp__3546, 2);
                                return(B3494['reduce'](function B3601(object__3602, property__3603) {
                                    return({
                                        'type': 'MemberExpression',
                                        'object': object__3602,
                                        'property': ($module)['compile'](property__3603, env__3547),
                                        'computed': true
                                    });
                                }, ($module)['compile'](object__3599, env__3547), properties__3600));
                            }
                        }
                    } else {
                        var function__3604 = exp__3546[0];
                        {
                            var arguments__3605 = $SL.call(exp__3546, 1);
                            return({
                                'type': 'CallExpression',
                                'callee': ($module)['compile'](function__3604, env__3547),
                                'arguments': B3494['map'](B3494['rcurry'](($module)['compile'], env__3547), arguments__3605)
                            });
                        }
                    }
                }
            };
            B3494['%annotate-function'](($module)['compile-exp'], 'compile-exp', false);
        }
    }
}
