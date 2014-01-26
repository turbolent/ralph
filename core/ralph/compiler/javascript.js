{
    var B3551 = require('ralph/core');
}
{
    var B3555 = require('ralph/regexp');
    var B3556 = require('ralph/compiler/utilities');
    var B3557 = require('escodegen');
}
{
    var TreservedT__3558 = [
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
}
{
    var ralphScoreCCMvar = B3551['%var'];
    var ralphScoreCCmake_object = B3551['make-object'];
    var Tsymbol_escapesT__3559 = ralphScoreCCmake_object('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
}
{
    {
        var ralphScoreCCmemberQ = B3551['member?'];
        var ralphScoreCCconcatenate = B3551['concatenate'];
        var ralphScoreCCmap = B3551['map'];
        var ralphScoreCChasQ = B3551['has?'];
        var ralphScoreCCget = B3551['get'];
        var ralphSregexpCCmatch = B3555['match'];
        var ralphScoreCCas_string = B3551['as-string'];
        var ralphScoreCCchar_code = B3551['char-code'];
        var ralphScoreCCas_array = B3551['as-array'];
        var ralphScoreCCjoin = B3551['join'];
        var ralphScoreCCMannotate_function = B3551['%annotate-function'];
        var escape_name__3567 = function B3562(name__3563) {
            if (($T)(ralphScoreCCmemberQ(name__3563, TreservedT__3558)))
                return(ralphScoreCCconcatenate('R', name__3563));
            else {
                {
                    var chars__3566 = ralphScoreCCmap(function B3564(char__3565) {
                            if (($T)(ralphScoreCChasQ(Tsymbol_escapesT__3559, char__3565)))
                                return(ralphScoreCCget(Tsymbol_escapesT__3559, char__3565));
                            else if (($T)(ralphSregexpCCmatch('\\w', char__3565)))
                                return(char__3565);
                            else
                                return(ralphScoreCCconcatenate('Z', ralphScoreCCas_string(ralphScoreCCchar_code(char__3565))));
                        }, ralphScoreCCas_array(name__3563));
                }
                return(ralphScoreCCjoin(chars__3566, ''));
            }
        };
    }
    ralphScoreCCMannotate_function(escape_name__3567, 'escape_name', false);
}
{
    {
        var ralphScoreCCnot = B3551['not'];
        var valid_js_nameQ__3571 = function B3569(identifier__3570) {
            if (($T)(ralphScoreCCnot(ralphScoreCCmemberQ(identifier__3570, TreservedT__3558))))
                return(ralphSregexpCCmatch('^\\w+$', identifier__3570));
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(valid_js_nameQ__3571, 'valid_js_nameQ', false);
}
{
    {
        var escodegenCCgenerate = B3557['generate'];
        var compile_js__3578 = function B3573(exp__3574, env__3575) {
            return(escodegenCCgenerate(as_statement__3576(compile__3577(exp__3574, env__3575)), { 'verbatim': 'x-verbatim' }));
        };
    }
    (exports)['compile-js'] = compile_js__3578;
    ralphScoreCCMannotate_function(compile_js__3578, 'compile_js', false);
}
{
    {
        var ralphScoreCCposition = B3551['position'];
        var as_statement__3576 = function B3581(exp__3582) {
            {
                var B3583 = ralphScoreCCposition(ralphScoreCCget(exp__3582, 'type'), 'Statement');
                var B3584 = false;
            }
            if (($T)(B3583))
                B3584 = B3583;
            else
                B3584 = ralphScoreCCposition(ralphScoreCCget(exp__3582, 'type'), 'Declaration');
            if (($T)(B3584))
                return(exp__3582);
            else
                return({
                    'type': 'ExpressionStatement',
                    'expression': exp__3582
                });
        };
    }
    ralphScoreCCMannotate_function(as_statement__3576, 'as_statement', false);
}
{
    {
        var ralphScoreCCinstanceQ = B3551['instance?'];
        var ralphScoreCCLarrayG = B3551['<array>'];
        var ralphScoreCCemptyQ = B3551['empty?'];
        var ralphScoreCCsignal = B3551['signal'];
        var ralphScoreCCmake = B3551['make'];
        var ralphScoreCCLerrorG = B3551['<error>'];
        var ralphScoreCCLhash_symbolG = B3551['<hash-symbol>'];
        var ralphScoreCCas_uppercase = B3551['as-uppercase'];
        var ralphScoreCCsymbol_name = B3551['symbol-name'];
        var ralphScoreCCLkeywordG = B3551['<keyword>'];
        var ralphScoreCCLsymbolG = B3551['<symbol>'];
        var ralphScoreCCEE = B3551['=='];
        var ralphScoreCCdescription = B3551['description'];
        var ralphScoreCCLnumberG = B3551['<number>'];
        var ralphScoreCCL = B3551['<'];
        var ralphScoreCCabs = B3551['abs'];
        var B3590 = $K('message');
        var compile__3577 = function B3591(exp__3592, env__3593) {
            {
                var B3594 = exp__3592;
            }
            if (($T)(ralphScoreCCinstanceQ(B3594, ralphScoreCCLarrayG)))
                if (($T)(ralphScoreCCemptyQ(exp__3592)))
                    return(ralphScoreCCsignal(ralphScoreCCmake(ralphScoreCCLerrorG, B3590, 'empty expression')));
                else
                    return(compile_exp__3595(exp__3592, env__3593));
            else if (($T)(ralphScoreCCinstanceQ(B3594, ralphScoreCCLhash_symbolG)))
                return({
                    'type': 'Identifier',
                    'name': ralphScoreCCconcatenate('$', ralphScoreCCas_uppercase(ralphScoreCCsymbol_name(exp__3592)))
                });
            else if (($T)(ralphScoreCCinstanceQ(B3594, ralphScoreCCLkeywordG)))
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': '$K'
                    },
                    'arguments': [compile__3577(ralphScoreCCsymbol_name(exp__3592), env__3593)]
                });
            else if (($T)(ralphScoreCCinstanceQ(B3594, ralphScoreCCLsymbolG))) {
                {
                    var B3596 = ralphScoreCCsymbol_name(exp__3592);
                }
                if (($T)(ralphScoreCCEE(B3596, '%this-method')))
                    return(compile__3577(ralphScoreCCget(env__3593, 'current-method'), env__3593));
                else if (($T)(ralphScoreCCEE(B3596, '%all-arguments')))
                    return({
                        'type': 'Identifier',
                        'name': 'arguments'
                    });
                else {
                    {
                        var B3598 = false;
                    }
                    if (($T)(ralphScoreCCEE(ralphScoreCCget(exp__3592, 'module'), ralphScoreCCget(env__3593, 'module', 'name'))))
                        B3598 = ralphScoreCCsymbol_name(exp__3592);
                    else
                        B3598 = ralphScoreCCdescription(exp__3592);
                    {
                        var B3599 = escape_name__3567(B3598);
                    }
                    return({
                        'type': 'Identifier',
                        'name': B3599
                    });
                }
            } else if (($T)(ralphScoreCCinstanceQ(B3594, ralphScoreCCLnumberG)))
                if (($T)(ralphScoreCCL(exp__3592, 0)))
                    return({
                        'type': 'UnaryExpression',
                        'operator': '-',
                        'prefix': true,
                        'argument': {
                            'type': 'Literal',
                            'value': ralphScoreCCabs(exp__3592)
                        }
                    });
                else
                    return({
                        'type': 'Literal',
                        'value': exp__3592
                    });
            else {
                {
                    var B3597 = exp__3592;
                    var B3600 = false;
                }
                if (($T)(B3597))
                    B3600 = B3597;
                else
                    B3600 = false;
                return({
                    'type': 'Literal',
                    'value': B3600
                });
            }
        };
    }
    ralphScoreCCMannotate_function(compile__3577, 'compile', false);
}
{
    {
        var ralphScoreCCfirst = B3551['first'];
        var ralphScoreCCdestructure_symbol = B3551['destructure-symbol'];
        var ralphScoreCCsecond = B3551['second'];
        var ralphScoreCCMconcat = B3551['%concat'];
        var ralphScoreCCrcurry = B3551['rcurry'];
        var ralphScoreCCget_setter = B3551['get-setter'];
        var ralphScompilerSutilitiesCCopQ = B3556['op?'];
        var ralphScoreCCrest = B3551['rest'];
        var ralphScoreCCpartition = B3551['partition'];
        var ralphScoreCCreduce1 = B3551['reduce1'];
        var ralphScoreCCbut_last = B3551['but-last'];
        var ralphScoreCCreduce = B3551['reduce'];
        var B3615 = $S('%native-call', 'ralph/core');
        var B3616 = $S('%begin', 'ralph/core');
        var compile_exp__3595 = function B3617(exp__3618, env__3619) {
            {
                var name__3620 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3618));
                var B3621 = name__3620;
            }
            if (($T)(ralphScoreCCEE(B3621, '%quote'))) {
                {
                    var B3622 = ralphScoreCCdestructure_symbol(ralphScoreCCsecond(exp__3618));
                    var name__3623 = B3622[0];
                    var module_name__3624 = B3622[1];
                    var B3681 = [
                            B3615,
                            '$S',
                            name__3623
                        ];
                    var B3682 = false;
                }
                if (($T)(module_name__3624))
                    B3682 = [module_name__3624];
                else
                    B3682 = [];
                {
                    var B3683 = ralphScoreCCMconcat(B3681, B3682);
                }
                return(compile__3577(B3683, env__3619));
            } else if (($T)(ralphScoreCCEE(B3621, '%method'))) {
                {
                    var ____3625 = exp__3618[0];
                    var name__3626 = exp__3618[1];
                    var parameters__3627 = exp__3618[2];
                    var form__3628 = exp__3618[3];
                    var previous_method__3629 = ralphScoreCCget(env__3619, 'current-method');
                    var B3684 = compile__3577(name__3626, env__3619);
                    var B3685 = ralphScoreCCmap(ralphScoreCCrcurry(compile__3577, env__3619), parameters__3627);
                }
                ralphScoreCCget_setter(env__3619, 'current-method', name__3626);
                {
                    var B3686 = false;
                }
                if (($T)(ralphScompilerSutilitiesCCopQ('%begin', form__3628)))
                    B3686 = form__3628;
                else
                    B3686 = [
                        B3616,
                        form__3628
                    ];
                {
                    var formT__3630 = compile__3577(B3686, env__3619);
                }
                ralphScoreCCget_setter(env__3619, 'current-method', previous_method__3629);
                return({
                    'type': 'FunctionExpression',
                    'id': B3684,
                    'params': B3685,
                    'body': formT__3630
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%set'))) {
                {
                    var ____3631 = exp__3618[0];
                    var identifier__3632 = exp__3618[1];
                    var value__3633 = exp__3618[2];
                }
                return({
                    'type': 'AssignmentExpression',
                    'operator': '=',
                    'left': compile__3577(identifier__3632, env__3619),
                    'right': compile__3577(value__3633, env__3619)
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%if'))) {
                {
                    var ____3634 = exp__3618[0];
                    var test__3635 = exp__3618[1];
                    var consequent__3636 = exp__3618[2];
                    var alternate__3637 = exp__3618[3];
                    var B3687 = compile__3577(test__3635, env__3619);
                    var B3688 = as_statement__3576(compile__3577(consequent__3636, env__3619));
                    var B3689 = false;
                }
                if (($T)(alternate__3637))
                    B3689 = as_statement__3576(compile__3577(alternate__3637, env__3619));
                else
                    B3689 = false;
                return({
                    'type': 'IfStatement',
                    'test': B3687,
                    'consequent': B3688,
                    'alternate': B3689
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%begin')))
                return({
                    'type': 'BlockStatement',
                    'body': ralphScoreCCmap(function B3638(exp__3639) {
                        return(as_statement__3576(compile__3577(exp__3639, env__3619)));
                    }, ralphScoreCCrest(exp__3618))
                });
            else if (($T)(ralphScoreCCEE(B3621, '%while'))) {
                {
                    var ____3640 = exp__3618[0];
                    var test__3641 = exp__3618[1];
                    var form__3642 = exp__3618[2];
                }
                return({
                    'type': 'WhileStatement',
                    'test': compile__3577(test__3641, env__3619),
                    'body': as_statement__3576(compile__3577(form__3642, env__3619))
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%try'))) {
                {
                    var ____3643 = exp__3618[0];
                    var protected_form__3644 = exp__3618[1];
                    var identifier__3645 = exp__3618[2];
                    var handling_form__3646 = exp__3618[3];
                }
                return({
                    'type': 'TryStatement',
                    'block': as_statement__3576(compile__3577(protected_form__3644, env__3619)),
                    'handlers': [{
                            'type': 'CatchClause',
                            'param': compile__3577(identifier__3645, env__3619),
                            'body': {
                                'type': 'BlockStatement',
                                'body': as_statement__3576(compile__3577(handling_form__3646, env__3619))
                            }
                        }]
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%var'))) {
                {
                    var ____3647 = exp__3618[0];
                    var bindings__3648 = $SL.call(exp__3618, 1);
                }
                return({
                    'type': 'BlockStatement',
                    'body': ralphScoreCCmap(function B3649(binding__3650) {
                        {
                            var B3651 = false;
                        }
                        if (($T)(ralphScoreCCinstanceQ(binding__3650, ralphScoreCCLarrayG)))
                            B3651 = binding__3650;
                        else
                            B3651 = [
                                binding__3650,
                                false
                            ];
                        {
                            var var__3652 = B3651[0];
                            var value__3653 = B3651[1];
                        }
                        return({
                            'type': 'VariableDeclaration',
                            'kind': 'var',
                            'declarations': [{
                                    'type': 'VariableDeclarator',
                                    'id': compile__3577(var__3652, env__3619),
                                    'init': compile__3577(value__3653, env__3619)
                                }]
                        });
                    }, ralphScoreCCpartition(2, bindings__3648))
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%native-name')))
                return(compile__3577(escape_name__3567(ralphScoreCCsecond(exp__3618)), env__3619));
            else if (($T)(ralphScoreCCEE(B3621, '%native-call'))) {
                {
                    var ____3654 = exp__3618[0];
                    var operator__3655 = exp__3618[1];
                    var arguments__3656 = $SL.call(exp__3618, 2);
                }
                return({
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': operator__3655
                    },
                    'arguments': ralphScoreCCmap(ralphScoreCCrcurry(compile__3577, env__3619), arguments__3656)
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%infix'))) {
                {
                    var ____3657 = exp__3618[0];
                    var operator__3658 = exp__3618[1];
                    var arguments__3659 = $SL.call(exp__3618, 2);
                }
                return(ralphScoreCCreduce1(function B3660(result__3661, exp__3662) {
                    return({
                        'type': 'BinaryExpression',
                        'operator': operator__3658,
                        'left': result__3661,
                        'right': exp__3662
                    });
                }, ralphScoreCCmap(ralphScoreCCrcurry(compile__3577, env__3619), arguments__3659)));
            } else if (($T)(ralphScoreCCEE(B3621, '%native')))
                return({
                    'type': 'Expression',
                    'x-verbatim': ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B3663(e__3664) {
                        {
                            var B3665 = e__3664;
                            var B3666 = ralphScoreCCinstanceQ(B3665, ralphScoreCCLsymbolG);
                            var B3690 = false;
                        }
                        if (($T)(B3666))
                            B3690 = B3666;
                        else
                            B3690 = ralphScoreCCinstanceQ(B3665, ralphScoreCCLarrayG);
                        if (($T)(B3690))
                            return(ralphScoreCCbut_last(compile_js__3578(e__3664, env__3619)));
                        else
                            return(ralphScoreCCas_string(e__3664));
                    }, ralphScoreCCrest(exp__3618)))
                });
            else if (($T)(ralphScoreCCEE(B3621, '%object')))
                return({
                    'type': 'ObjectExpression',
                    'properties': ralphScoreCCmap(function B3667(propertySvalue__3668) {
                        {
                            var property__3669 = propertySvalue__3668[0];
                            var value__3670 = propertySvalue__3668[1];
                        }
                        return({
                            'type': 'Property',
                            'key': compile__3577(property__3669, env__3619),
                            'value': compile__3577(value__3670, env__3619),
                            'kind': 'init'
                        });
                    }, ralphScoreCCpartition(2, ralphScoreCCrest(exp__3618)))
                });
            else if (($T)(ralphScoreCCEE(B3621, '%array'))) {
                {
                    var ____3671 = exp__3618[0];
                    var elements__3672 = $SL.call(exp__3618, 1);
                }
                return({
                    'type': 'ArrayExpression',
                    'elements': ralphScoreCCmap(ralphScoreCCrcurry(compile__3577, env__3619), elements__3672)
                });
            } else if (($T)(ralphScoreCCEE(B3621, '%get-property'))) {
                {
                    var ____3673 = exp__3618[0];
                    var object__3674 = exp__3618[1];
                    var properties__3675 = $SL.call(exp__3618, 2);
                }
                return(ralphScoreCCreduce(function B3676(object__3677, property__3678) {
                    return({
                        'type': 'MemberExpression',
                        'object': object__3677,
                        'property': compile__3577(property__3678, env__3619),
                        'computed': true
                    });
                }, compile__3577(object__3674, env__3619), properties__3675));
            } else {
                {
                    var function__3679 = exp__3618[0];
                    var arguments__3680 = $SL.call(exp__3618, 1);
                }
                return({
                    'type': 'CallExpression',
                    'callee': compile__3577(function__3679, env__3619),
                    'arguments': ralphScoreCCmap(ralphScoreCCrcurry(compile__3577, env__3619), arguments__3680)
                });
            }
        };
    }
    ralphScoreCCMannotate_function(compile_exp__3595, 'compile_exp', false);
}
