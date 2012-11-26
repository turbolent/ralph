var B3575 = require('ralph/core');
var B3579 = require('ralph/regexp'), B3580 = require('ralph/compiler/utilities'), B3581 = require('escodegen');
var TreservedT__3582 = [
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
var ralphScoreCCMvar = B3575['%var'], ralphScoreCCmake_object = B3575['make-object'], Tsymbol_escapesT__3583 = ralphScoreCCmake_object('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
var ralphScoreCCMmake_function = B3575['%make-function'], ralphScoreCCmemberQ = B3575['member?'], ralphScoreCCconcatenate = B3575['concatenate'], ralphScoreCCmap = B3575['map'], ralphScoreCChasQ = B3575['has?'], ralphScoreCCget = B3575['get'], ralphSregexpCCmatch = B3579['match'], ralphScoreCCas_string = B3575['as-string'], ralphScoreCCchar_code = B3575['char-code'], ralphScoreCCas_array = B3575['as-array'], ralphScoreCCjoin = B3575['join'], escape_name__3591 = ralphScoreCCMmake_function('escape_name', function B3586(name__3587) {
        if (($T)(ralphScoreCCmemberQ(name__3587, TreservedT__3582)))
            return(ralphScoreCCconcatenate('R', name__3587));
        else {
            var chars__3590 = ralphScoreCCmap(function B3588(char__3589) {
                    if (($T)(ralphScoreCChasQ(Tsymbol_escapesT__3583, char__3589)))
                        return(ralphScoreCCget(Tsymbol_escapesT__3583, char__3589));
                    else if (($T)(ralphSregexpCCmatch('\\w', char__3589)))
                        return(char__3589);
                    else
                        return(ralphScoreCCconcatenate('Z', ralphScoreCCas_string(ralphScoreCCchar_code(char__3589))));
                }, ralphScoreCCas_array(name__3587));
            return(ralphScoreCCjoin(chars__3590, ''));
        }
    }, false);
var ralphScoreCCnot = B3575['not'], valid_js_nameQ__3595 = ralphScoreCCMmake_function('valid_js_nameQ', function B3593(identifier__3594) {
        if (($T)(ralphScoreCCnot(ralphScoreCCmemberQ(identifier__3594, TreservedT__3582))))
            return(ralphSregexpCCmatch('^\\w+$', identifier__3594));
        else
            return(false);
    }, false);
{
    var escodegenCCgenerate = B3581['generate'], compile_js__3602 = ralphScoreCCMmake_function('compile_js', function B3597(exp__3598, env__3599) {
            return(escodegenCCgenerate(as_statement__3600(compile__3601(exp__3598, env__3599)), { 'verbatim': 'x-verbatim' }));
        }, false);
    (exports)['compile-js'] = compile_js__3602;
}
var ralphScoreCCposition = B3575['position'], as_statement__3600 = ralphScoreCCMmake_function('as_statement', function B3605(exp__3606) {
        var B3607 = ralphScoreCCposition(ralphScoreCCget(exp__3606, 'type'), 'Statement'), B3608 = false;
        if (($T)(B3607))
            B3608 = B3607;
        else
            B3608 = ralphScoreCCposition(ralphScoreCCget(exp__3606, 'type'), 'Declaration');
        if (($T)(B3608))
            return(exp__3606);
        else
            return({
                'type': 'ExpressionStatement',
                'expression': exp__3606
            });
    }, false);
var ralphScoreCCinstanceQ = B3575['instance?'], ralphScoreCCLarrayG = B3575['<array>'], ralphScoreCCemptyQ = B3575['empty?'], ralphScoreCCsignal = B3575['signal'], ralphScoreCCmake = B3575['make'], ralphScoreCCLerrorG = B3575['<error>'], ralphScoreCCLhash_symbolG = B3575['<hash-symbol>'], ralphScoreCCas_uppercase = B3575['as-uppercase'], ralphScoreCCsymbol_name = B3575['symbol-name'], ralphScoreCCLkeywordG = B3575['<keyword>'], ralphScoreCCLsymbolG = B3575['<symbol>'], ralphScoreCCEE = B3575['=='], ralphScoreCCdescription = B3575['description'], ralphScoreCCLnumberG = B3575['<number>'], ralphScoreCCL = B3575['<'], ralphScoreCCabs = B3575['abs'], B3614 = $K('message'), compile__3601 = ralphScoreCCMmake_function('compile', function B3615(exp__3616, env__3617) {
        var B3618 = exp__3616;
        if (($T)(ralphScoreCCinstanceQ(B3618, ralphScoreCCLarrayG)))
            if (($T)(ralphScoreCCemptyQ(exp__3616)))
                return(ralphScoreCCsignal(ralphScoreCCmake(ralphScoreCCLerrorG, B3614, 'empty expression')));
            else
                return(compile_exp__3619(exp__3616, env__3617));
        else if (($T)(ralphScoreCCinstanceQ(B3618, ralphScoreCCLhash_symbolG)))
            return({
                'type': 'Identifier',
                'name': ralphScoreCCconcatenate('$', ralphScoreCCas_uppercase(ralphScoreCCsymbol_name(exp__3616)))
            });
        else if (($T)(ralphScoreCCinstanceQ(B3618, ralphScoreCCLkeywordG)))
            return({
                'type': 'CallExpression',
                'callee': {
                    'type': 'Identifier',
                    'name': '$K'
                },
                'arguments': [compile__3601(ralphScoreCCsymbol_name(exp__3616), env__3617)]
            });
        else if (($T)(ralphScoreCCinstanceQ(B3618, ralphScoreCCLsymbolG))) {
            var B3620 = ralphScoreCCsymbol_name(exp__3616);
            if (($T)(ralphScoreCCEE(B3620, '%this-method')))
                return(compile__3601(ralphScoreCCget(env__3617, 'current-method'), env__3617));
            else if (($T)(ralphScoreCCEE(B3620, '%all-arguments')))
                return({
                    'type': 'Identifier',
                    'name': 'arguments'
                });
            else {
                var B3622 = false;
                if (($T)(ralphScoreCCEE(ralphScoreCCget(exp__3616, 'module'), ralphScoreCCget(env__3617, 'module', 'name'))))
                    B3622 = ralphScoreCCsymbol_name(exp__3616);
                else
                    B3622 = ralphScoreCCdescription(exp__3616);
                var B3623 = escape_name__3591(B3622);
                return({
                    'type': 'Identifier',
                    'name': B3623
                });
            }
        } else if (($T)(ralphScoreCCinstanceQ(B3618, ralphScoreCCLnumberG)))
            if (($T)(ralphScoreCCL(exp__3616, 0)))
                return({
                    'type': 'UnaryExpression',
                    'operator': '-',
                    'prefix': true,
                    'argument': {
                        'type': 'Literal',
                        'value': ralphScoreCCabs(exp__3616)
                    }
                });
            else
                return({
                    'type': 'Literal',
                    'value': exp__3616
                });
        else {
            var B3621 = exp__3616, B3624 = false;
            if (($T)(B3621))
                B3624 = B3621;
            else
                B3624 = false;
            return({
                'type': 'Literal',
                'value': B3624
            });
        }
    }, false);
var ralphScoreCCfirst = B3575['first'], ralphScoreCCdestructure_symbol = B3575['destructure-symbol'], ralphScoreCCsecond = B3575['second'], ralphScoreCCMconcat = B3575['%concat'], ralphScoreCCrcurry = B3575['rcurry'], ralphScoreCCget_setter = B3575['get-setter'], ralphScompilerSutilitiesCCopQ = B3580['op?'], ralphScoreCCrest = B3575['rest'], ralphScoreCCpartition = B3575['partition'], ralphScoreCCreduce1 = B3575['reduce1'], ralphScoreCCbut_last = B3575['but-last'], ralphScoreCCreduce = B3575['reduce'], B3639 = $S('%native-call', 'ralph/core'), B3640 = $S('%begin', 'ralph/core'), compile_exp__3619 = ralphScoreCCMmake_function('compile_exp', function B3641(exp__3642, env__3643) {
        var name__3644 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3642)), B3645 = name__3644;
        if (($T)(ralphScoreCCEE(B3645, '%quote'))) {
            var B3646 = ralphScoreCCdestructure_symbol(ralphScoreCCsecond(exp__3642)), name__3647 = B3646[0], module_name__3648 = B3646[1], B3705 = [
                    B3639,
                    '$S',
                    name__3647
                ], B3706 = false;
            if (($T)(module_name__3648))
                B3706 = [module_name__3648];
            else
                B3706 = [];
            var B3707 = ralphScoreCCMconcat(B3705, B3706);
            return(compile__3601(B3707, env__3643));
        } else if (($T)(ralphScoreCCEE(B3645, '%method'))) {
            var ____3649 = exp__3642[0], name__3650 = exp__3642[1], parameters__3651 = exp__3642[2], form__3652 = exp__3642[3], previous_method__3653 = ralphScoreCCget(env__3643, 'current-method'), B3708 = compile__3601(name__3650, env__3643), B3709 = ralphScoreCCmap(ralphScoreCCrcurry(compile__3601, env__3643), parameters__3651);
            ralphScoreCCget_setter(env__3643, 'current-method', name__3650);
            var B3710 = false;
            if (($T)(ralphScompilerSutilitiesCCopQ('%begin', form__3652)))
                B3710 = form__3652;
            else
                B3710 = [
                    B3640,
                    form__3652
                ];
            var formT__3654 = compile__3601(B3710, env__3643);
            ralphScoreCCget_setter(env__3643, 'current-method', previous_method__3653);
            return({
                'type': 'FunctionExpression',
                'id': B3708,
                'params': B3709,
                'body': formT__3654
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%set'))) {
            var ____3655 = exp__3642[0], identifier__3656 = exp__3642[1], value__3657 = exp__3642[2];
            return({
                'type': 'AssignmentExpression',
                'operator': '=',
                'left': compile__3601(identifier__3656, env__3643),
                'right': compile__3601(value__3657, env__3643)
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%if'))) {
            var ____3658 = exp__3642[0], test__3659 = exp__3642[1], consequent__3660 = exp__3642[2], alternate__3661 = exp__3642[3], B3711 = compile__3601(test__3659, env__3643), B3712 = as_statement__3600(compile__3601(consequent__3660, env__3643)), B3713 = false;
            if (($T)(alternate__3661))
                B3713 = as_statement__3600(compile__3601(alternate__3661, env__3643));
            else
                B3713 = false;
            return({
                'type': 'IfStatement',
                'test': B3711,
                'consequent': B3712,
                'alternate': B3713
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%begin')))
            return({
                'type': 'BlockStatement',
                'body': ralphScoreCCmap(function B3662(exp__3663) {
                    return(as_statement__3600(compile__3601(exp__3663, env__3643)));
                }, ralphScoreCCrest(exp__3642))
            });
        else if (($T)(ralphScoreCCEE(B3645, '%while'))) {
            var ____3664 = exp__3642[0], test__3665 = exp__3642[1], form__3666 = exp__3642[2];
            return({
                'type': 'WhileStatement',
                'test': compile__3601(test__3665, env__3643),
                'body': as_statement__3600(compile__3601(form__3666, env__3643))
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%try'))) {
            var ____3667 = exp__3642[0], protected_form__3668 = exp__3642[1], identifier__3669 = exp__3642[2], handling_form__3670 = exp__3642[3];
            return({
                'type': 'TryStatement',
                'block': as_statement__3600(compile__3601(protected_form__3668, env__3643)),
                'handlers': [{
                        'type': 'CatchClause',
                        'param': compile__3601(identifier__3669, env__3643),
                        'body': {
                            'type': 'BlockStatement',
                            'body': as_statement__3600(compile__3601(handling_form__3670, env__3643))
                        }
                    }]
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%var'))) {
            var ____3671 = exp__3642[0], bindings__3672 = $SL.call(exp__3642, 1);
            return({
                'type': 'VariableDeclaration',
                'kind': 'var',
                'declarations': ralphScoreCCmap(function B3673(binding__3674) {
                    var B3675 = false;
                    if (($T)(ralphScoreCCinstanceQ(binding__3674, ralphScoreCCLarrayG)))
                        B3675 = binding__3674;
                    else
                        B3675 = [
                            binding__3674,
                            false
                        ];
                    var var__3676 = B3675[0], value__3677 = B3675[1];
                    return({
                        'type': 'VariableDeclarator',
                        'id': compile__3601(var__3676, env__3643),
                        'init': compile__3601(value__3677, env__3643)
                    });
                }, ralphScoreCCpartition(2, bindings__3672))
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%native-name')))
            return(compile__3601(escape_name__3591(ralphScoreCCsecond(exp__3642)), env__3643));
        else if (($T)(ralphScoreCCEE(B3645, '%native-call'))) {
            var ____3678 = exp__3642[0], operator__3679 = exp__3642[1], arguments__3680 = $SL.call(exp__3642, 2);
            return({
                'type': 'CallExpression',
                'callee': {
                    'type': 'Identifier',
                    'name': operator__3679
                },
                'arguments': ralphScoreCCmap(ralphScoreCCrcurry(compile__3601, env__3643), arguments__3680)
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%infix'))) {
            var ____3681 = exp__3642[0], operator__3682 = exp__3642[1], arguments__3683 = $SL.call(exp__3642, 2);
            return(ralphScoreCCreduce1(function B3684(result__3685, exp__3686) {
                return({
                    'type': 'BinaryExpression',
                    'operator': operator__3682,
                    'left': result__3685,
                    'right': exp__3686
                });
            }, ralphScoreCCmap(ralphScoreCCrcurry(compile__3601, env__3643), arguments__3683)));
        } else if (($T)(ralphScoreCCEE(B3645, '%native')))
            return({
                'type': 'Expression',
                'x-verbatim': ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B3687(e__3688) {
                    var B3689 = e__3688, B3690 = ralphScoreCCinstanceQ(B3689, ralphScoreCCLsymbolG), B3714 = false;
                    if (($T)(B3690))
                        B3714 = B3690;
                    else
                        B3714 = ralphScoreCCinstanceQ(B3689, ralphScoreCCLarrayG);
                    if (($T)(B3714))
                        return(ralphScoreCCbut_last(compile_js__3602(e__3688, env__3643)));
                    else
                        return(ralphScoreCCas_string(e__3688));
                }, ralphScoreCCrest(exp__3642)))
            });
        else if (($T)(ralphScoreCCEE(B3645, '%object')))
            return({
                'type': 'ObjectExpression',
                'properties': ralphScoreCCmap(function B3691(propertySvalue__3692) {
                    var property__3693 = propertySvalue__3692[0], value__3694 = propertySvalue__3692[1];
                    return({
                        'type': 'Property',
                        'key': compile__3601(property__3693, env__3643),
                        'value': compile__3601(value__3694, env__3643),
                        'kind': 'init'
                    });
                }, ralphScoreCCpartition(2, ralphScoreCCrest(exp__3642)))
            });
        else if (($T)(ralphScoreCCEE(B3645, '%array'))) {
            var ____3695 = exp__3642[0], elements__3696 = $SL.call(exp__3642, 1);
            return({
                'type': 'ArrayExpression',
                'elements': ralphScoreCCmap(ralphScoreCCrcurry(compile__3601, env__3643), elements__3696)
            });
        } else if (($T)(ralphScoreCCEE(B3645, '%get-property'))) {
            var ____3697 = exp__3642[0], object__3698 = exp__3642[1], properties__3699 = $SL.call(exp__3642, 2);
            return(ralphScoreCCreduce(function B3700(object__3701, property__3702) {
                return({
                    'type': 'MemberExpression',
                    'object': object__3701,
                    'property': compile__3601(property__3702, env__3643),
                    'computed': true
                });
            }, compile__3601(object__3698, env__3643), properties__3699));
        } else {
            var function__3703 = exp__3642[0], arguments__3704 = $SL.call(exp__3642, 1);
            return({
                'type': 'CallExpression',
                'callee': compile__3601(function__3703, env__3643),
                'arguments': ralphScoreCCmap(ralphScoreCCrcurry(compile__3601, env__3643), arguments__3704)
            });
        }
    }, false);
