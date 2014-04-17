require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3487(name__3488, value__3489) {
            var B3491 = (exports);
            return(B3491[name__3488] = value__3489);
        };
        {
            ($module)['%eval'] = function B3490() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3492 = require('ralph/core');
{
    var B3493 = require('ralph/regexp');
    {
        var B3494 = require('ralph/compiler/utilities');
        var B3495 = require('escodegen');
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
($module)['*symbol-escapes*'] = B3492['make-object']('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
{
    ($module)['escape-name'] = function B3498(name__3499) {
        if (($T)(B3492['member?'](name__3499, ($module)['*reserved*'])))
            return(B3492['concatenate']('R', name__3499));
        else {
            var chars__3502 = B3492['map'](function B3500(char__3501) {
                    if (($T)(B3492['has?'](($module)['*symbol-escapes*'], char__3501)))
                        return(B3492['get'](($module)['*symbol-escapes*'], char__3501));
                    else if (($T)(B3493['match']('\\w', char__3501)))
                        return(char__3501);
                    else
                        return(B3492['concatenate']('Z', B3492['as-string'](B3492['char-code'](char__3501))));
                }, B3492['as-array'](name__3499));
            return(B3492['join'](chars__3502, ''));
        }
    };
    B3492['%annotate-function'](($module)['escape-name'], 'escape-name', false);
}
{
    {
        ($module)['compile-js'] = function B3504(exp__3505, env__3506) {
            return(B3495['generate'](($module)['as-statement'](($module)['compile'](exp__3505, env__3506)), { 'verbatim': 'x-verbatim' }));
        };
        ($module)['%export']('compile-js', ($module)['compile-js']);
    }
    B3492['%annotate-function'](($module)['compile-js'], 'compile-js', false);
}
{
    ($module)['as-statement'] = function B3509(exp__3510) {
        var B3511 = B3492['position'](B3492['get'](exp__3510, 'type'), 'Statement');
        {
            var B3512 = false;
            if (($T)(B3511))
                B3512 = B3511;
            else
                B3512 = B3492['position'](B3492['get'](exp__3510, 'type'), 'Declaration');
            if (($T)(B3512))
                return(exp__3510);
            else
                return({
                    'type': 'ExpressionStatement',
                    'expression': exp__3510
                });
        }
    };
    B3492['%annotate-function'](($module)['as-statement'], 'as-statement', false);
}
{
    ($module)['make-block'] = function B3514(statements__3515) {
        return({
            'type': 'BlockStatement',
            'body': statements__3515
        });
    };
    B3492['%annotate-function'](($module)['make-block'], 'make-block', false);
}
{
    var B3520 = $K('message');
    {
        ($module)['compile'] = function B3521(exp__3522, env__3523) {
            var B3524 = exp__3522;
            if (($T)(B3492['instance?'](B3524, B3492['<array>'])))
                if (($T)(B3492['empty?'](exp__3522)))
                    return(B3492['signal'](B3492['make'](B3492['<error>'], B3520, 'empty expression')));
                else
                    return(($module)['compile-exp'](exp__3522, env__3523));
            else if (($T)(B3492['instance?'](B3524, B3492['<hash-symbol>'])))
                return({
                    'type': 'Identifier',
                    'name': B3492['concatenate']('$', B3492['as-uppercase'](B3492['symbol-name'](exp__3522)))
                });
            else if (($T)(B3492['instance?'](B3524, B3492['<keyword>'])))
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': '$K'
                    },
                    'arguments': [($module)['compile'](B3492['symbol-name'](exp__3522), env__3523)]
                });
            else if (($T)(B3492['instance?'](B3524, B3492['<symbol>']))) {
                var B3525 = B3492['symbol-name'](exp__3522);
                if (($T)(B3492['=='](B3525, '%this-method')))
                    return(($module)['compile'](B3492['get'](env__3523, 'current-method'), env__3523));
                else if (($T)(B3492['=='](B3525, '%all-arguments')))
                    return({
                        'type': 'Identifier',
                        'name': 'arguments'
                    });
                else {
                    var B3527 = false;
                    if (($T)(B3492['=='](B3492['get'](exp__3522, 'module'), B3492['get'](env__3523, 'module', 'name'))))
                        B3527 = B3492['symbol-name'](exp__3522);
                    else
                        B3527 = B3492['description'](exp__3522);
                    {
                        var B3528 = ($module)['escape-name'](B3527);
                        return({
                            'type': 'Identifier',
                            'name': B3528
                        });
                    }
                }
            } else if (($T)(B3492['instance?'](B3524, B3492['<number>'])))
                if (($T)(B3492['<'](exp__3522, 0)))
                    return({
                        'type': 'UnaryExpression',
                        'operator': '-',
                        'prefix': true,
                        'argument': {
                            'type': 'Literal',
                            'value': B3492['abs'](exp__3522)
                        }
                    });
                else
                    return({
                        'type': 'Literal',
                        'value': exp__3522
                    });
            else {
                var B3526 = exp__3522;
                {
                    var B3529 = false;
                    if (($T)(B3526))
                        B3529 = B3526;
                    else
                        B3529 = false;
                    return({
                        'type': 'Literal',
                        'value': B3529
                    });
                }
            }
        };
        B3492['%annotate-function'](($module)['compile'], 'compile', false);
    }
}
{
    var B3541 = $S('%native-call', 'ralph/core');
    {
        var B3542 = $S('%begin', 'ralph/core');
        {
            ($module)['compile-exp'] = function B3543(exp__3544, env__3545) {
                var name__3546 = B3492['symbol-name'](B3492['first'](exp__3544));
                {
                    var B3547 = name__3546;
                    if (($T)(B3492['=='](B3547, '%quote'))) {
                        var B3548 = B3492['destructure-symbol'](B3492['second'](exp__3544));
                        {
                            var name__3549 = B3548[0];
                            {
                                var module_name__3550 = B3548[1];
                                {
                                    var B3604 = B3492['%concat'];
                                    {
                                        var B3605 = [
                                                B3541,
                                                '$S',
                                                name__3549
                                            ];
                                        {
                                            var B3606 = false;
                                            if (($T)(module_name__3550))
                                                B3606 = [module_name__3550];
                                            else
                                                B3606 = [];
                                            {
                                                var B3607 = B3604(B3605, B3606);
                                                return(($module)['compile'](B3607, env__3545));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%method'))) {
                        var ____3551 = exp__3544[0];
                        {
                            var name__3552 = exp__3544[1];
                            {
                                var parameters__3553 = exp__3544[2];
                                {
                                    var form__3554 = exp__3544[3];
                                    {
                                        var previous_method__3555 = B3492['get'](env__3545, 'current-method');
                                        {
                                            var B3608 = ($module)['compile'](name__3552, env__3545);
                                            {
                                                var B3609 = B3492['map'](B3492['rcurry'](($module)['compile'], env__3545), parameters__3553);
                                                {
                                                    B3492['get-setter'](env__3545, 'current-method', name__3552);
                                                    {
                                                        var B3610 = false;
                                                        if (($T)(B3494['op?']('%begin', form__3554)))
                                                            B3610 = form__3554;
                                                        else
                                                            B3610 = [
                                                                B3542,
                                                                form__3554
                                                            ];
                                                        {
                                                            var formT__3556 = ($module)['compile'](B3610, env__3545);
                                                            {
                                                                B3492['get-setter'](env__3545, 'current-method', previous_method__3555);
                                                                return({
                                                                    'type': 'FunctionExpression',
                                                                    'id': B3608,
                                                                    'params': B3609,
                                                                    'body': formT__3556
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
                    } else if (($T)(B3492['=='](B3547, '%set'))) {
                        var ____3557 = exp__3544[0];
                        {
                            var identifier__3558 = exp__3544[1];
                            {
                                var value__3559 = exp__3544[2];
                                return({
                                    'type': 'AssignmentExpression',
                                    'operator': '=',
                                    'left': ($module)['compile'](identifier__3558, env__3545),
                                    'right': ($module)['compile'](value__3559, env__3545)
                                });
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%if'))) {
                        var ____3560 = exp__3544[0];
                        {
                            var test__3561 = exp__3544[1];
                            {
                                var consequent__3562 = exp__3544[2];
                                {
                                    var alternate__3563 = exp__3544[3];
                                    {
                                        var B3611 = ($module)['compile'](test__3561, env__3545);
                                        {
                                            var B3612 = ($module)['as-statement'](($module)['compile'](consequent__3562, env__3545));
                                            {
                                                var B3613 = false;
                                                if (($T)(alternate__3563))
                                                    B3613 = ($module)['as-statement'](($module)['compile'](alternate__3563, env__3545));
                                                else
                                                    B3613 = false;
                                                return({
                                                    'type': 'IfStatement',
                                                    'test': B3611,
                                                    'consequent': B3612,
                                                    'alternate': B3613
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%begin')))
                        return(($module)['make-block'](B3492['map'](function B3564(exp__3565) {
                            return(($module)['as-statement'](($module)['compile'](exp__3565, env__3545)));
                        }, B3492['rest'](exp__3544))));
                    else if (($T)(B3492['=='](B3547, '%while'))) {
                        var ____3566 = exp__3544[0];
                        {
                            var test__3567 = exp__3544[1];
                            {
                                var form__3568 = exp__3544[2];
                                return({
                                    'type': 'WhileStatement',
                                    'test': ($module)['compile'](test__3567, env__3545),
                                    'body': ($module)['as-statement'](($module)['compile'](form__3568, env__3545))
                                });
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%try'))) {
                        var ____3569 = exp__3544[0];
                        {
                            var protected_form__3570 = exp__3544[1];
                            {
                                var identifier__3571 = exp__3544[2];
                                {
                                    var handling_form__3572 = exp__3544[3];
                                    return({
                                        'type': 'TryStatement',
                                        'block': ($module)['make-block']([($module)['as-statement'](($module)['compile'](protected_form__3570, env__3545))]),
                                        'handler': {
                                            'type': 'CatchClause',
                                            'param': ($module)['compile'](identifier__3571, env__3545),
                                            'body': ($module)['make-block']([($module)['as-statement'](($module)['compile'](handling_form__3572, env__3545))])
                                        }
                                    });
                                }
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%var'))) {
                        var ____3573 = exp__3544[0];
                        {
                            var identifier__3574 = exp__3544[1];
                            {
                                var value__3575 = exp__3544[2];
                                {
                                    var B3614 = ($module)['compile'](identifier__3574, env__3545);
                                    {
                                        var B3576 = value__3575;
                                        {
                                            var B3615 = false;
                                            if (($T)(B3576))
                                                B3615 = B3576;
                                            else
                                                B3615 = false;
                                            {
                                                var B3616 = ($module)['compile'](B3615, env__3545);
                                                {
                                                    var B3617 = {
                                                            'type': 'VariableDeclarator',
                                                            'id': B3614,
                                                            'init': B3616
                                                        };
                                                    {
                                                        var B3618 = [B3617];
                                                        return({
                                                            'type': 'VariableDeclaration',
                                                            'kind': 'var',
                                                            'declarations': B3618
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%native-call'))) {
                        var ____3577 = exp__3544[0];
                        {
                            var operator__3578 = exp__3544[1];
                            {
                                var arguments__3579 = $SL.call(exp__3544, 2);
                                return({
                                    'type': 'CallExpression',
                                    'callee': {
                                        'type': 'Identifier',
                                        'name': operator__3578
                                    },
                                    'arguments': B3492['map'](B3492['rcurry'](($module)['compile'], env__3545), arguments__3579)
                                });
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%infix'))) {
                        var ____3580 = exp__3544[0];
                        {
                            var operator__3581 = exp__3544[1];
                            {
                                var arguments__3582 = $SL.call(exp__3544, 2);
                                return(B3492['reduce1'](function B3583(result__3584, exp__3585) {
                                    return({
                                        'type': 'BinaryExpression',
                                        'operator': operator__3581,
                                        'left': result__3584,
                                        'right': exp__3585
                                    });
                                }, B3492['map'](B3492['rcurry'](($module)['compile'], env__3545), arguments__3582)));
                            }
                        }
                    } else if (($T)(B3492['=='](B3547, '%native')))
                        return({
                            'type': 'Expression',
                            'x-verbatim': B3492['reduce1'](B3492['concatenate'], B3492['map'](function B3586(e__3587) {
                                var B3588 = e__3587;
                                {
                                    var B3589 = B3492['instance?'](B3588, B3492['<symbol>']);
                                    {
                                        var B3619 = false;
                                        if (($T)(B3589))
                                            B3619 = B3589;
                                        else
                                            B3619 = B3492['instance?'](B3588, B3492['<array>']);
                                        if (($T)(B3619))
                                            return(B3492['but-last'](($module)['compile-js'](e__3587, env__3545)));
                                        else
                                            return(B3492['as-string'](e__3587));
                                    }
                                }
                            }, B3492['rest'](exp__3544)))
                        });
                    else if (($T)(B3492['=='](B3547, '%object')))
                        return({
                            'type': 'ObjectExpression',
                            'properties': B3492['map'](function B3590(propertySvalue__3591) {
                                var property__3592 = propertySvalue__3591[0];
                                {
                                    var value__3593 = propertySvalue__3591[1];
                                    return({
                                        'type': 'Property',
                                        'key': ($module)['compile'](property__3592, env__3545),
                                        'value': ($module)['compile'](value__3593, env__3545),
                                        'kind': 'init'
                                    });
                                }
                            }, B3492['partition'](2, B3492['rest'](exp__3544)))
                        });
                    else if (($T)(B3492['=='](B3547, '%array'))) {
                        var ____3594 = exp__3544[0];
                        {
                            var elements__3595 = $SL.call(exp__3544, 1);
                            return({
                                'type': 'ArrayExpression',
                                'elements': B3492['map'](B3492['rcurry'](($module)['compile'], env__3545), elements__3595)
                            });
                        }
                    } else if (($T)(B3492['=='](B3547, '%get-property'))) {
                        var ____3596 = exp__3544[0];
                        {
                            var object__3597 = exp__3544[1];
                            {
                                var properties__3598 = $SL.call(exp__3544, 2);
                                return(B3492['reduce'](function B3599(object__3600, property__3601) {
                                    return({
                                        'type': 'MemberExpression',
                                        'object': object__3600,
                                        'property': ($module)['compile'](property__3601, env__3545),
                                        'computed': true
                                    });
                                }, ($module)['compile'](object__3597, env__3545), properties__3598));
                            }
                        }
                    } else {
                        var function__3602 = exp__3544[0];
                        {
                            var arguments__3603 = $SL.call(exp__3544, 1);
                            return({
                                'type': 'CallExpression',
                                'callee': ($module)['compile'](function__3602, env__3545),
                                'arguments': B3492['map'](B3492['rcurry'](($module)['compile'], env__3545), arguments__3603)
                            });
                        }
                    }
                }
            };
            B3492['%annotate-function'](($module)['compile-exp'], 'compile-exp', false);
        }
    }
}
