var B3576 = require('ralph/core');
var B3580 = require('ralph/regexp'), B3581 = require('ralph/compiler/utilities'), B3582 = require('escodegen');
var TreservedT__3583 = [
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
var ralphScoreCCMvar = B3576['%var'], ralphScoreCCmake_object = B3576['make-object'], Tsymbol_escapesT__3584 = ralphScoreCCmake_object('-', '_', '_', '__', '&', 'A', '$', 'B', ':', 'C', '.', 'D', '=', 'E', '^', 'F', '>', 'G', '#', 'H', '@', 'I', '~', 'J', '<', 'L', '%', 'M', '!', 'N', '+', 'P', '?', 'Q', '/', 'S', '*', 'T');
var ralphScoreCCMmake_function = B3576['%make-function'], ralphScoreCCmemberQ = B3576['member?'], ralphScoreCCconcatenate = B3576['concatenate'], ralphScoreCCmap = B3576['map'], ralphScoreCChasQ = B3576['has?'], ralphScoreCCget = B3576['get'], ralphSregexpCCmatch = B3580['match'], ralphScoreCCas_string = B3576['as-string'], ralphScoreCCchar_code = B3576['char-code'], ralphScoreCCas_array = B3576['as-array'], ralphScoreCCjoin = B3576['join'], escape_name__3592 = ralphScoreCCMmake_function('escape_name', function B3587(name__3588) {
        if (($T)(ralphScoreCCmemberQ(name__3588, TreservedT__3583)))
            return(ralphScoreCCconcatenate('R', name__3588));
        else {
            var chars__3591 = ralphScoreCCmap(function B3589(char__3590) {
                    if (($T)(ralphScoreCChasQ(Tsymbol_escapesT__3584, char__3590)))
                        return(ralphScoreCCget(Tsymbol_escapesT__3584, char__3590));
                    else if (($T)(ralphSregexpCCmatch('\\w', char__3590)))
                        return(char__3590);
                    else
                        return(ralphScoreCCconcatenate('Z', ralphScoreCCas_string(ralphScoreCCchar_code(char__3590))));
                }, ralphScoreCCas_array(name__3588));
            return(ralphScoreCCjoin(chars__3591, ''));
        }
    }, false);
var ralphScoreCCnot = B3576['not'], valid_js_nameQ__3596 = ralphScoreCCMmake_function('valid_js_nameQ', function B3594(identifier__3595) {
        if (($T)(ralphScoreCCnot(ralphScoreCCmemberQ(identifier__3595, TreservedT__3583))))
            return(ralphSregexpCCmatch('^\\w+$', identifier__3595));
        else
            return(false);
    }, false);
{
    var escodegenCCgenerate = B3582['generate'], compile_js__3603 = ralphScoreCCMmake_function('compile_js', function B3598(exp__3599, env__3600) {
            return(escodegenCCgenerate(as_statement__3601(compile__3602(exp__3599, env__3600)), { 'verbatim': 'x-verbatim' }));
        }, false);
    (exports)['compile-js'] = compile_js__3603;
}
var ralphScoreCCposition = B3576['position'], as_statement__3601 = ralphScoreCCMmake_function('as_statement', function B3606(exp__3607) {
        var B3608 = ralphScoreCCposition(ralphScoreCCget(exp__3607, 'type'), 'Statement'), B3609 = false;
        if (($T)(B3608))
            B3609 = B3608;
        else
            B3609 = ralphScoreCCposition(ralphScoreCCget(exp__3607, 'type'), 'Declaration');
        if (($T)(B3609))
            return(exp__3607);
        else
            return({
                'type': 'ExpressionStatement',
                'expression': exp__3607
            });
    }, false);
var ralphScoreCCinstanceQ = B3576['instance?'], ralphScoreCCLarrayG = B3576['<array>'], ralphScoreCCemptyQ = B3576['empty?'], ralphScoreCCsignal = B3576['signal'], ralphScoreCCmake = B3576['make'], ralphScoreCCLerrorG = B3576['<error>'], ralphScoreCCLhash_symbolG = B3576['<hash-symbol>'], ralphScoreCCas_uppercase = B3576['as-uppercase'], ralphScoreCCsymbol_name = B3576['symbol-name'], ralphScoreCCLkeywordG = B3576['<keyword>'], ralphScoreCCLsymbolG = B3576['<symbol>'], ralphScoreCCEE = B3576['=='], ralphScoreCCdescription = B3576['description'], ralphScoreCCLnumberG = B3576['<number>'], ralphScoreCCL = B3576['<'], ralphScoreCCabs = B3576['abs'], B3615 = $K('message'), compile__3602 = ralphScoreCCMmake_function('compile', function B3616(exp__3617, env__3618) {
        var B3619 = exp__3617;
        if (($T)(ralphScoreCCinstanceQ(B3619, ralphScoreCCLarrayG)))
            if (($T)(ralphScoreCCemptyQ(exp__3617)))
                return(ralphScoreCCsignal(ralphScoreCCmake(ralphScoreCCLerrorG, B3615, 'empty expression')));
            else
                return(compile_exp__3620(exp__3617, env__3618));
        else if (($T)(ralphScoreCCinstanceQ(B3619, ralphScoreCCLhash_symbolG)))
            return({
                'type': 'Identifier',
                'name': ralphScoreCCconcatenate('$', ralphScoreCCas_uppercase(ralphScoreCCsymbol_name(exp__3617)))
            });
        else if (($T)(ralphScoreCCinstanceQ(B3619, ralphScoreCCLkeywordG)))
            return({
                'type': 'CallExpression',
                'callee': {
                    'type': 'Identifier',
                    'name': '$K'
                },
                'arguments': [compile__3602(ralphScoreCCsymbol_name(exp__3617), env__3618)]
            });
        else if (($T)(ralphScoreCCinstanceQ(B3619, ralphScoreCCLsymbolG))) {
            var B3621 = ralphScoreCCsymbol_name(exp__3617);
            if (($T)(ralphScoreCCEE(B3621, '%this-method')))
                return(compile__3602(ralphScoreCCget(env__3618, 'current-method'), env__3618));
            else if (($T)(ralphScoreCCEE(B3621, '%all-arguments')))
                return({
                    'type': 'Identifier',
                    'name': 'arguments'
                });
            else {
                var B3623 = false;
                if (($T)(ralphScoreCCEE(ralphScoreCCget(exp__3617, 'module'), ralphScoreCCget(env__3618, 'module', 'name'))))
                    B3623 = ralphScoreCCsymbol_name(exp__3617);
                else
                    B3623 = ralphScoreCCdescription(exp__3617);
                var B3624 = escape_name__3592(B3623);
                return({
                    'type': 'Identifier',
                    'name': B3624
                });
            }
        } else if (($T)(ralphScoreCCinstanceQ(B3619, ralphScoreCCLnumberG)))
            if (($T)(ralphScoreCCL(exp__3617, 0)))
                return({
                    'type': 'UnaryExpression',
                    'operator': '-',
                    'prefix': true,
                    'argument': {
                        'type': 'Literal',
                        'value': ralphScoreCCabs(exp__3617)
                    }
                });
            else
                return({
                    'type': 'Literal',
                    'value': exp__3617
                });
        else {
            var B3622 = exp__3617, B3625 = false;
            if (($T)(B3622))
                B3625 = B3622;
            else
                B3625 = false;
            return({
                'type': 'Literal',
                'value': B3625
            });
        }
    }, false);
var ralphScoreCCfirst = B3576['first'], ralphScoreCCdestructure_symbol = B3576['destructure-symbol'], ralphScoreCCsecond = B3576['second'], ralphScoreCCMconcat = B3576['%concat'], ralphScoreCCrcurry = B3576['rcurry'], ralphScoreCCget_setter = B3576['get-setter'], ralphScompilerSutilitiesCCopQ = B3581['op?'], ralphScoreCCrest = B3576['rest'], ralphScoreCCpartition = B3576['partition'], ralphScoreCCreduce1 = B3576['reduce1'], ralphScoreCCbut_last = B3576['but-last'], ralphScoreCCreduce = B3576['reduce'], B3640 = $S('%native-call'), B3641 = $S('%begin'), compile_exp__3620 = ralphScoreCCMmake_function('compile_exp', function B3642(exp__3643, env__3644) {
        var name__3645 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3643)), B3646 = name__3645;
        if (($T)(ralphScoreCCEE(B3646, '%quote'))) {
            var B3647 = ralphScoreCCdestructure_symbol(ralphScoreCCsecond(exp__3643)), name__3648 = B3647[0], module_name__3649 = B3647[1], B3706 = [
                    B3640,
                    '$S',
                    name__3648
                ], B3707 = false;
            if (($T)(module_name__3649))
                B3707 = [module_name__3649];
            else
                B3707 = [];
            var B3708 = ralphScoreCCMconcat(B3706, B3707);
            return(compile__3602(B3708, env__3644));
        } else if (($T)(ralphScoreCCEE(B3646, '%method'))) {
            var ____3650 = exp__3643[0], name__3651 = exp__3643[1], parameters__3652 = exp__3643[2], form__3653 = exp__3643[3], previous_method__3654 = ralphScoreCCget(env__3644, 'current-method'), B3709 = compile__3602(name__3651, env__3644), B3710 = ralphScoreCCmap(ralphScoreCCrcurry(compile__3602, env__3644), parameters__3652);
            ralphScoreCCget_setter(env__3644, 'current-method', name__3651);
            var B3711 = false;
            if (($T)(ralphScompilerSutilitiesCCopQ('%begin', form__3653)))
                B3711 = form__3653;
            else
                B3711 = [
                    B3641,
                    form__3653
                ];
            var formT__3655 = compile__3602(B3711, env__3644);
            ralphScoreCCget_setter(env__3644, 'current-method', previous_method__3654);
            return({
                'type': 'FunctionExpression',
                'id': B3709,
                'params': B3710,
                'body': formT__3655
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%set'))) {
            var ____3656 = exp__3643[0], identifier__3657 = exp__3643[1], value__3658 = exp__3643[2];
            return({
                'type': 'AssignmentExpression',
                'operator': '=',
                'left': compile__3602(identifier__3657, env__3644),
                'right': compile__3602(value__3658, env__3644)
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%if'))) {
            var ____3659 = exp__3643[0], test__3660 = exp__3643[1], consequent__3661 = exp__3643[2], alternate__3662 = exp__3643[3], B3712 = compile__3602(test__3660, env__3644), B3713 = as_statement__3601(compile__3602(consequent__3661, env__3644)), B3714 = false;
            if (($T)(alternate__3662))
                B3714 = as_statement__3601(compile__3602(alternate__3662, env__3644));
            else
                B3714 = false;
            return({
                'type': 'IfStatement',
                'test': B3712,
                'consequent': B3713,
                'alternate': B3714
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%begin')))
            return({
                'type': 'BlockStatement',
                'body': ralphScoreCCmap(function B3663(exp__3664) {
                    return(as_statement__3601(compile__3602(exp__3664, env__3644)));
                }, ralphScoreCCrest(exp__3643))
            });
        else if (($T)(ralphScoreCCEE(B3646, '%while'))) {
            var ____3665 = exp__3643[0], test__3666 = exp__3643[1], form__3667 = exp__3643[2];
            return({
                'type': 'WhileStatement',
                'test': compile__3602(test__3666, env__3644),
                'body': as_statement__3601(compile__3602(form__3667, env__3644))
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%try'))) {
            var ____3668 = exp__3643[0], protected_form__3669 = exp__3643[1], identifier__3670 = exp__3643[2], handling_form__3671 = exp__3643[3];
            return({
                'type': 'TryStatement',
                'block': as_statement__3601(compile__3602(protected_form__3669, env__3644)),
                'handlers': [{
                        'type': 'CatchClause',
                        'param': compile__3602(identifier__3670, env__3644),
                        'body': as_statement__3601(compile__3602(handling_form__3671, env__3644))
                    }]
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%var'))) {
            var ____3672 = exp__3643[0], bindings__3673 = $SL.call(exp__3643, 1);
            return({
                'type': 'VariableDeclaration',
                'kind': 'var',
                'declarations': ralphScoreCCmap(function B3674(binding__3675) {
                    var B3676 = false;
                    if (($T)(ralphScoreCCinstanceQ(binding__3675, ralphScoreCCLarrayG)))
                        B3676 = binding__3675;
                    else
                        B3676 = [
                            binding__3675,
                            false
                        ];
                    var var__3677 = B3676[0], value__3678 = B3676[1];
                    return({
                        'type': 'VariableDeclarator',
                        'id': compile__3602(var__3677, env__3644),
                        'init': compile__3602(value__3678, env__3644)
                    });
                }, ralphScoreCCpartition(2, bindings__3673))
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%native-name')))
            return(compile__3602(escape_name__3592(ralphScoreCCsecond(exp__3643)), env__3644));
        else if (($T)(ralphScoreCCEE(B3646, '%native-call'))) {
            var ____3679 = exp__3643[0], operator__3680 = exp__3643[1], arguments__3681 = $SL.call(exp__3643, 2);
            return({
                'type': 'CallExpression',
                'callee': {
                    'type': 'Identifier',
                    'name': operator__3680
                },
                'arguments': ralphScoreCCmap(ralphScoreCCrcurry(compile__3602, env__3644), arguments__3681)
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%infix'))) {
            var ____3682 = exp__3643[0], operator__3683 = exp__3643[1], arguments__3684 = $SL.call(exp__3643, 2);
            return(ralphScoreCCreduce1(function B3685(result__3686, exp__3687) {
                return({
                    'type': 'BinaryExpression',
                    'operator': operator__3683,
                    'left': result__3686,
                    'right': exp__3687
                });
            }, ralphScoreCCmap(ralphScoreCCrcurry(compile__3602, env__3644), arguments__3684)));
        } else if (($T)(ralphScoreCCEE(B3646, '%native')))
            return({
                'type': 'Expression',
                'x-verbatim': ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B3688(e__3689) {
                    var B3690 = e__3689, B3691 = ralphScoreCCinstanceQ(B3690, ralphScoreCCLsymbolG), B3715 = false;
                    if (($T)(B3691))
                        B3715 = B3691;
                    else
                        B3715 = ralphScoreCCinstanceQ(B3690, ralphScoreCCLarrayG);
                    if (($T)(B3715))
                        return(ralphScoreCCbut_last(compile_js__3603(e__3689, env__3644)));
                    else
                        return(ralphScoreCCas_string(e__3689));
                }, ralphScoreCCrest(exp__3643)))
            });
        else if (($T)(ralphScoreCCEE(B3646, '%object')))
            return({
                'type': 'ObjectExpression',
                'properties': ralphScoreCCmap(function B3692(propertySvalue__3693) {
                    var property__3694 = propertySvalue__3693[0], value__3695 = propertySvalue__3693[1];
                    return({
                        'type': 'Property',
                        'key': compile__3602(property__3694, env__3644),
                        'value': compile__3602(value__3695, env__3644),
                        'kind': 'init'
                    });
                }, ralphScoreCCpartition(2, ralphScoreCCrest(exp__3643)))
            });
        else if (($T)(ralphScoreCCEE(B3646, '%array'))) {
            var ____3696 = exp__3643[0], elements__3697 = $SL.call(exp__3643, 1);
            return({
                'type': 'ArrayExpression',
                'elements': ralphScoreCCmap(ralphScoreCCrcurry(compile__3602, env__3644), elements__3697)
            });
        } else if (($T)(ralphScoreCCEE(B3646, '%get-property'))) {
            var ____3698 = exp__3643[0], object__3699 = exp__3643[1], properties__3700 = $SL.call(exp__3643, 2);
            return(ralphScoreCCreduce(function B3701(object__3702, property__3703) {
                return({
                    'type': 'MemberExpression',
                    'object': object__3702,
                    'property': compile__3602(property__3703, env__3644),
                    'computed': true
                });
            }, compile__3602(object__3699, env__3644), properties__3700));
        } else {
            var function__3704 = exp__3643[0], arguments__3705 = $SL.call(exp__3643, 1);
            return({
                'type': 'CallExpression',
                'callee': compile__3602(function__3704, env__3644),
                'arguments': ralphScoreCCmap(ralphScoreCCrcurry(compile__3602, env__3644), arguments__3705)
            });
        }
    }, false);
