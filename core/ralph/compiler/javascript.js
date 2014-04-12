{
    var $module = Object.create(null);
    var Mexport = function B3573(name__3574, value__3575) {
        var B3576 = (exports);
        return(B3576[name__3574] = value__3575);
    };
}
var B3577 = require('ralph/core');
{
    var B3578 = require('ralph/regexp');
    {
        var B3579 = require('ralph/compiler/utilities');
        var B3580 = require('escodegen');
    }
}
var TreservedT = [
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
var Tsymbol_escapesT = B3577['make-object']('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
{
    var escape_name = function B3583(name__3584) {
        if (($T)(B3577['member?'](name__3584, TreservedT)))
            return(B3577['concatenate']('R', name__3584));
        else {
            var chars__3587 = B3577['map'](function B3585(char__3586) {
                    if (($T)(B3577['has?'](Tsymbol_escapesT, char__3586)))
                        return(B3577['get'](Tsymbol_escapesT, char__3586));
                    else if (($T)(B3578['match']('\\w', char__3586)))
                        return(char__3586);
                    else
                        return(B3577['concatenate']('Z', B3577['as-string'](B3577['char-code'](char__3586))));
                }, B3577['as-array'](name__3584));
            return(B3577['join'](chars__3587, ''));
        }
    };
    B3577['%annotate-function'](escape_name, 'escape-name', false);
}
{
    {
        var compile_js = function B3589(exp__3590, env__3591) {
            return(B3580['generate'](as_statement(compile(exp__3590, env__3591)), { 'verbatim': 'x-verbatim' }));
        };
        Mexport('compile-js', compile_js);
    }
    B3577['%annotate-function'](compile_js, 'compile-js', false);
}
{
    var as_statement = function B3594(exp__3595) {
        var B3596 = B3577['position'](B3577['get'](exp__3595, 'type'), 'Statement');
        {
            var B3597 = false;
            if (($T)(B3596))
                B3597 = B3596;
            else
                B3597 = B3577['position'](B3577['get'](exp__3595, 'type'), 'Declaration');
            if (($T)(B3597))
                return(exp__3595);
            else
                return({
                    'type': 'ExpressionStatement',
                    'expression': exp__3595
                });
        }
    };
    B3577['%annotate-function'](as_statement, 'as-statement', false);
}
{
    var make_block = function B3599(statements__3600) {
        return({
            'type': 'BlockStatement',
            'body': statements__3600
        });
    };
    B3577['%annotate-function'](make_block, 'make-block', false);
}
{
    var B3605 = $K('message');
    {
        var compile = function B3606(exp__3607, env__3608) {
            var B3609 = exp__3607;
            if (($T)(B3577['instance?'](B3609, B3577['<array>'])))
                if (($T)(B3577['empty?'](exp__3607)))
                    return(B3577['signal'](B3577['make'](B3577['<error>'], B3605, 'empty expression')));
                else
                    return(compile_exp(exp__3607, env__3608));
            else if (($T)(B3577['instance?'](B3609, B3577['<hash-symbol>'])))
                return({
                    'type': 'Identifier',
                    'name': B3577['concatenate']('$', B3577['as-uppercase'](B3577['symbol-name'](exp__3607)))
                });
            else if (($T)(B3577['instance?'](B3609, B3577['<keyword>'])))
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': '$K'
                    },
                    'arguments': [compile(B3577['symbol-name'](exp__3607), env__3608)]
                });
            else if (($T)(B3577['instance?'](B3609, B3577['<symbol>']))) {
                var B3610 = B3577['symbol-name'](exp__3607);
                if (($T)(B3577['=='](B3610, '%this-method')))
                    return(compile(B3577['get'](env__3608, 'current-method'), env__3608));
                else if (($T)(B3577['=='](B3610, '%all-arguments')))
                    return({
                        'type': 'Identifier',
                        'name': 'arguments'
                    });
                else {
                    var B3612 = false;
                    if (($T)(B3577['=='](B3577['get'](exp__3607, 'module'), B3577['get'](env__3608, 'module', 'name'))))
                        B3612 = B3577['symbol-name'](exp__3607);
                    else
                        B3612 = B3577['description'](exp__3607);
                    {
                        var B3613 = escape_name(B3612);
                        return({
                            'type': 'Identifier',
                            'name': B3613
                        });
                    }
                }
            } else if (($T)(B3577['instance?'](B3609, B3577['<number>'])))
                if (($T)(B3577['<'](exp__3607, 0)))
                    return({
                        'type': 'UnaryExpression',
                        'operator': '-',
                        'prefix': true,
                        'argument': {
                            'type': 'Literal',
                            'value': B3577['abs'](exp__3607)
                        }
                    });
                else
                    return({
                        'type': 'Literal',
                        'value': exp__3607
                    });
            else {
                var B3611 = exp__3607;
                {
                    var B3614 = false;
                    if (($T)(B3611))
                        B3614 = B3611;
                    else
                        B3614 = false;
                    return({
                        'type': 'Literal',
                        'value': B3614
                    });
                }
            }
        };
        B3577['%annotate-function'](compile, 'compile', false);
    }
}
{
    var B3626 = $S('%native-call', 'ralph/core');
    {
        var B3627 = $S('%begin', 'ralph/core');
        {
            var compile_exp = function B3628(exp__3629, env__3630) {
                var name__3631 = B3577['symbol-name'](B3577['first'](exp__3629));
                {
                    var B3632 = name__3631;
                    if (($T)(B3577['=='](B3632, '%quote'))) {
                        var B3633 = B3577['destructure-symbol'](B3577['second'](exp__3629));
                        {
                            var name__3634 = B3633[0];
                            {
                                var module_name__3635 = B3633[1];
                                {
                                    var B3689 = B3577['%concat'];
                                    {
                                        var B3690 = [
                                                B3626,
                                                '$S',
                                                name__3634
                                            ];
                                        {
                                            var B3691 = false;
                                            if (($T)(module_name__3635))
                                                B3691 = [module_name__3635];
                                            else
                                                B3691 = [];
                                            {
                                                var B3692 = B3689(B3690, B3691);
                                                return(compile(B3692, env__3630));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%method'))) {
                        var ____3636 = exp__3629[0];
                        {
                            var name__3637 = exp__3629[1];
                            {
                                var parameters__3638 = exp__3629[2];
                                {
                                    var form__3639 = exp__3629[3];
                                    {
                                        var previous_method__3640 = B3577['get'](env__3630, 'current-method');
                                        {
                                            var B3693 = compile(name__3637, env__3630);
                                            {
                                                var B3694 = B3577['map'](B3577['rcurry'](compile, env__3630), parameters__3638);
                                                {
                                                    B3577['get-setter'](env__3630, 'current-method', name__3637);
                                                    {
                                                        var B3695 = false;
                                                        if (($T)(B3579['op?']('%begin', form__3639)))
                                                            B3695 = form__3639;
                                                        else
                                                            B3695 = [
                                                                B3627,
                                                                form__3639
                                                            ];
                                                        {
                                                            var formT__3641 = compile(B3695, env__3630);
                                                            {
                                                                B3577['get-setter'](env__3630, 'current-method', previous_method__3640);
                                                                return({
                                                                    'type': 'FunctionExpression',
                                                                    'id': B3693,
                                                                    'params': B3694,
                                                                    'body': formT__3641
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
                    } else if (($T)(B3577['=='](B3632, '%set'))) {
                        var ____3642 = exp__3629[0];
                        {
                            var identifier__3643 = exp__3629[1];
                            {
                                var value__3644 = exp__3629[2];
                                return({
                                    'type': 'AssignmentExpression',
                                    'operator': '=',
                                    'left': compile(identifier__3643, env__3630),
                                    'right': compile(value__3644, env__3630)
                                });
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%if'))) {
                        var ____3645 = exp__3629[0];
                        {
                            var test__3646 = exp__3629[1];
                            {
                                var consequent__3647 = exp__3629[2];
                                {
                                    var alternate__3648 = exp__3629[3];
                                    {
                                        var B3696 = compile(test__3646, env__3630);
                                        {
                                            var B3697 = as_statement(compile(consequent__3647, env__3630));
                                            {
                                                var B3698 = false;
                                                if (($T)(alternate__3648))
                                                    B3698 = as_statement(compile(alternate__3648, env__3630));
                                                else
                                                    B3698 = false;
                                                return({
                                                    'type': 'IfStatement',
                                                    'test': B3696,
                                                    'consequent': B3697,
                                                    'alternate': B3698
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%begin')))
                        return(make_block(B3577['map'](function B3649(exp__3650) {
                            return(as_statement(compile(exp__3650, env__3630)));
                        }, B3577['rest'](exp__3629))));
                    else if (($T)(B3577['=='](B3632, '%while'))) {
                        var ____3651 = exp__3629[0];
                        {
                            var test__3652 = exp__3629[1];
                            {
                                var form__3653 = exp__3629[2];
                                return({
                                    'type': 'WhileStatement',
                                    'test': compile(test__3652, env__3630),
                                    'body': as_statement(compile(form__3653, env__3630))
                                });
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%try'))) {
                        var ____3654 = exp__3629[0];
                        {
                            var protected_form__3655 = exp__3629[1];
                            {
                                var identifier__3656 = exp__3629[2];
                                {
                                    var handling_form__3657 = exp__3629[3];
                                    return({
                                        'type': 'TryStatement',
                                        'block': make_block([as_statement(compile(protected_form__3655, env__3630))]),
                                        'handler': {
                                            'type': 'CatchClause',
                                            'param': compile(identifier__3656, env__3630),
                                            'body': make_block([as_statement(compile(handling_form__3657, env__3630))])
                                        }
                                    });
                                }
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%var'))) {
                        var ____3658 = exp__3629[0];
                        {
                            var identifier__3659 = exp__3629[1];
                            {
                                var value__3660 = exp__3629[2];
                                {
                                    var B3699 = compile(identifier__3659, env__3630);
                                    {
                                        var B3661 = value__3660;
                                        {
                                            var B3700 = false;
                                            if (($T)(B3661))
                                                B3700 = B3661;
                                            else
                                                B3700 = false;
                                            {
                                                var B3701 = compile(B3700, env__3630);
                                                {
                                                    var B3702 = {
                                                            'type': 'VariableDeclarator',
                                                            'id': B3699,
                                                            'init': B3701
                                                        };
                                                    {
                                                        var B3703 = [B3702];
                                                        return({
                                                            'type': 'VariableDeclaration',
                                                            'kind': 'var',
                                                            'declarations': B3703
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%native-call'))) {
                        var ____3662 = exp__3629[0];
                        {
                            var operator__3663 = exp__3629[1];
                            {
                                var arguments__3664 = $SL.call(exp__3629, 2);
                                return({
                                    'type': 'CallExpression',
                                    'callee': {
                                        'type': 'Identifier',
                                        'name': operator__3663
                                    },
                                    'arguments': B3577['map'](B3577['rcurry'](compile, env__3630), arguments__3664)
                                });
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%infix'))) {
                        var ____3665 = exp__3629[0];
                        {
                            var operator__3666 = exp__3629[1];
                            {
                                var arguments__3667 = $SL.call(exp__3629, 2);
                                return(B3577['reduce1'](function B3668(result__3669, exp__3670) {
                                    return({
                                        'type': 'BinaryExpression',
                                        'operator': operator__3666,
                                        'left': result__3669,
                                        'right': exp__3670
                                    });
                                }, B3577['map'](B3577['rcurry'](compile, env__3630), arguments__3667)));
                            }
                        }
                    } else if (($T)(B3577['=='](B3632, '%native')))
                        return({
                            'type': 'Expression',
                            'x-verbatim': B3577['reduce1'](B3577['concatenate'], B3577['map'](function B3671(e__3672) {
                                var B3673 = e__3672;
                                {
                                    var B3674 = B3577['instance?'](B3673, B3577['<symbol>']);
                                    {
                                        var B3704 = false;
                                        if (($T)(B3674))
                                            B3704 = B3674;
                                        else
                                            B3704 = B3577['instance?'](B3673, B3577['<array>']);
                                        if (($T)(B3704))
                                            return(B3577['but-last'](compile_js(e__3672, env__3630)));
                                        else
                                            return(B3577['as-string'](e__3672));
                                    }
                                }
                            }, B3577['rest'](exp__3629)))
                        });
                    else if (($T)(B3577['=='](B3632, '%object')))
                        return({
                            'type': 'ObjectExpression',
                            'properties': B3577['map'](function B3675(propertySvalue__3676) {
                                var property__3677 = propertySvalue__3676[0];
                                {
                                    var value__3678 = propertySvalue__3676[1];
                                    return({
                                        'type': 'Property',
                                        'key': compile(property__3677, env__3630),
                                        'value': compile(value__3678, env__3630),
                                        'kind': 'init'
                                    });
                                }
                            }, B3577['partition'](2, B3577['rest'](exp__3629)))
                        });
                    else if (($T)(B3577['=='](B3632, '%array'))) {
                        var ____3679 = exp__3629[0];
                        {
                            var elements__3680 = $SL.call(exp__3629, 1);
                            return({
                                'type': 'ArrayExpression',
                                'elements': B3577['map'](B3577['rcurry'](compile, env__3630), elements__3680)
                            });
                        }
                    } else if (($T)(B3577['=='](B3632, '%get-property'))) {
                        var ____3681 = exp__3629[0];
                        {
                            var object__3682 = exp__3629[1];
                            {
                                var properties__3683 = $SL.call(exp__3629, 2);
                                return(B3577['reduce'](function B3684(object__3685, property__3686) {
                                    return({
                                        'type': 'MemberExpression',
                                        'object': object__3685,
                                        'property': compile(property__3686, env__3630),
                                        'computed': true
                                    });
                                }, compile(object__3682, env__3630), properties__3683));
                            }
                        }
                    } else {
                        var function__3687 = exp__3629[0];
                        {
                            var arguments__3688 = $SL.call(exp__3629, 1);
                            return({
                                'type': 'CallExpression',
                                'callee': compile(function__3687, env__3630),
                                'arguments': B3577['map'](B3577['rcurry'](compile, env__3630), arguments__3688)
                            });
                        }
                    }
                }
            };
            B3577['%annotate-function'](compile_exp, 'compile-exp', false);
        }
    }
}
