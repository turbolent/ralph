{
    var B1273 = require('ralph/core');
}
{
    var B3692 = require('ralph/format');
    var B3693 = require('ralph/stream');
    var B3694 = require('ralph/file-system');
    var B3695 = require('ralph/compiler/utilities');
    var B3696 = require('ralph/compiler/module');
    var B3697 = require('ralph/compiler/environment');
    var B3698 = require('ralph/compiler/reader');
    var B3699 = require('ralph/compiler/macros');
    var B3700 = require('ralph/compiler/special-forms');
    var B3701 = require('ralph/compiler/macroexpansion');
    var B3702 = require('ralph/compiler/symbol-lifting');
    var B3703 = require('ralph/compiler/alpha');
    var B3704 = require('ralph/compiler/anf');
    var B3705 = require('ralph/compiler/statements');
    var B3706 = require('ralph/compiler/flattening');
    var B3707 = require('ralph/compiler/javascript');
}
{
    var ralphScoreCCMvar = B1273['%var'];
    var ralphScoreCCmake_object = B1273['make-object'];
    var TmodulesT__3708 = ralphScoreCCmake_object();
}
{
    {
        var ralphScoreCCMkeys = B1273['%keys'];
        var ralphScoreCCnot = B1273['not'];
        var ralphScoreCCEE = B1273['=='];
        var ralphScoreCCmake_plain_object = B1273['make-plain-object'];
        var ralphScoreCCdo = B1273['do'];
        var ralphScoreCCget = B1273['get'];
        var ralphScoreCCget_setter = B1273['get-setter'];
        var ralphScoreCCapply = B1273['apply'];
        var ralphScompilerSutilitiesCCprocess_import_names = B3695['process-import-names'];
        var ralphScoreCCobject_properties = B1273['object-properties'];
        var ralphScoreCCchain_object = B1273['chain-object'];
        var ralphScoreCCMannotate_function = B1273['%annotate-function'];
        var compile_time_import_module__3726 = function B3713(env__3714, module_name__3715) {
            {
                var B3716 = $SL.call(arguments, 2);
                var B3717 = ralphScoreCCMkeys(B3716, { 'options': false });
                var options__3718 = B3717['options'];
            }
            if (($T)(ralphScoreCCnot(ralphScoreCCEE(module_name__3715, 'ralph/core')))) {
                compile_module__3719(module_name__3715);
                {
                    var definitions__3720 = require(module_name__3715);
                    var macros__3721 = ralphScoreCCmake_plain_object();
                    var symbol_macros__3722 = ralphScoreCCmake_plain_object();
                }
                ralphScoreCCdo(function B3723(name__3724) {
                    {
                        var definition__3725 = ralphScoreCCget(definitions__3720, name__3724);
                    }
                    if (($T)(ralphScoreCCget(definition__3725, '%macro?')))
                        return(ralphScoreCCget_setter(macros__3721, name__3724, definition__3725));
                    else if (($T)(ralphScoreCCget(definition__3725, '%symbol-macro?')))
                        return(ralphScoreCCget_setter(symbol_macros__3722, name__3724, definition__3725));
                    else
                        return(false);
                }, ralphScoreCCapply(ralphScompilerSutilitiesCCprocess_import_names, ralphScoreCCobject_properties(definitions__3720), options__3718));
                ralphScoreCCchain_object(macros__3721, ralphScoreCCget(env__3714, 'macros'));
                ralphScoreCCget_setter(env__3714, 'macros', macros__3721);
                ralphScoreCCchain_object(symbol_macros__3722, ralphScoreCCget(env__3714, 'symbol-macros'));
                return(ralphScoreCCget_setter(env__3714, 'symbol-macros', symbol_macros__3722));
            } else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(compile_time_import_module__3726, 'compile_time_import_module', false);
}
{
    {
        var ralphScoreCCpush = B1273['push'];
        var ralphScoreCCsignal = B1273['signal'];
        var ralphSformatCCformat_to_string = B3692['format-to-string'];
        var import_module__3736 = function B3729(module__3730, module_name__3731) {
            {
                var options__3732 = $SL.call(arguments, 2);
                var B3734 = find_module__3733(module_name__3731);
            }
            if (($T)(B3734)) {
                {
                    var other_module__3735 = B3734;
                }
                ralphScoreCCpush(ralphScoreCCget(module__3730, 'imports'), [
                    other_module__3735,
                    ralphScoreCCapply(ralphScompilerSutilitiesCCprocess_import_names, ralphScoreCCget(other_module__3735, 'exports'), options__3732)
                ]);
                ralphScoreCCpush(ralphScoreCCget(module__3730, 'dependencies'), module_name__3731);
                return(other_module__3735);
            } else
                return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Unable to import module \'%s\'', module_name__3731)));
        };
    }
    ralphScoreCCMannotate_function(import_module__3736, 'import_module', false);
}
{
    {
        var find_module__3733 = function B3741(module_name__3742) {
            {
                var B3743 = compile_module__3719(module_name__3742);
            }
            if (($T)(B3743))
                return(B3743);
            else {
                {
                    var B3744 = ralphScoreCCget(TmodulesT__3708, module_name__3742);
                }
                if (($T)(B3744))
                    return(B3744);
                else {
                    {
                        var B3746 = read_module__3745('build', module_name__3742);
                    }
                    if (($T)(B3746))
                        return(B3746);
                    else
                        return(read_module__3745('src', module_name__3742));
                }
            }
        };
    }
    ralphScoreCCMannotate_function(find_module__3733, 'find_module', false);
}
{
    {
        var ralphSfile_systemCCfile_existsQ = B3694['file-exists?'];
        var ralphScoreCCcurry = B1273['curry'];
        var ralphScoreCCmake = B1273['make'];
        var ralphScompilerSmoduleCCLmoduleG = B3696['<module>'];
        var ralphScompilerSreaderCCread = B3698['read'];
        var ralphSstreamCCLstring_streamG = B3693['<string-stream>'];
        var ralphSfile_systemCCread_file = B3694['read-file'];
        var B3750 = $K('name');
        var B3751 = $K('string');
        var read_module__3745 = function B3752(base_path__3753, module_name__3754) {
            {
                var path__3756 = module_path__3755(base_path__3753, module_name__3754);
            }
            if (($T)(ralphSfile_systemCCfile_existsQ(path__3756)))
                return(ralphScoreCCapply(ralphScoreCCcurry(ralphScoreCCmake, ralphScompilerSmoduleCCLmoduleG, B3750), ralphScompilerSreaderCCread(ralphScoreCCmake(ralphSstreamCCLstring_streamG, B3751, ralphSfile_systemCCread_file(path__3756)))));
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(read_module__3745, 'read_module', false);
}
{
    {
        var ralphScoreCCreduce = B1273['reduce'];
        var ralphScoreCCrcurry = B1273['rcurry'];
        var ralphScompilerSmacroexpansionCCmacroexpand_all = B3701['macroexpand-all'];
        var ralphScompilerSsymbol_liftingCClift_symbols = B3702['lift-symbols'];
        var ralphScompilerSalphaCCalpha_convert_form = B3703['alpha-convert-form'];
        var ralphScompilerSanfCCnormalize_term = B3704['normalize-term'];
        var ralphScompilerSstatementsCCtransform_statementsN = B3705['transform-statements!'];
        var ralphScompilerSflatteningCCflatten_statementsN = B3706['flatten-statements!'];
        var ralphScompilerSjavascriptCCcompile_js = B3707['compile-js'];
        var compile_expression__3768 = function B3759(exp__3760, env__3761) {
            return(ralphScoreCCreduce(function B3762(result__3763, nameSpass__3764) {
                {
                    var name__3765 = nameSpass__3764[0];
                    var pass__3766 = nameSpass__3764[1];
                    var result__3767 = pass__3766(result__3763);
                }
                return(result__3767);
            }, exp__3760, [
                [
                    'macroexpansion',
                    ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__3761)
                ],
                [
                    'symbol lifting',
                    ralphScoreCCrcurry(ralphScompilerSsymbol_liftingCClift_symbols, env__3761)
                ],
                [
                    'alpha conversion',
                    ralphScoreCCrcurry(ralphScompilerSalphaCCalpha_convert_form, env__3761)
                ],
                [
                    'ANF transformation',
                    ralphScoreCCrcurry(ralphScompilerSanfCCnormalize_term, env__3761)
                ],
                [
                    'statement transfomation',
                    ralphScoreCCrcurry(ralphScompilerSstatementsCCtransform_statementsN, env__3761)
                ],
                [
                    'statement flattening',
                    ralphScompilerSflatteningCCflatten_statementsN
                ],
                [
                    'code generation',
                    ralphScoreCCrcurry(ralphScompilerSjavascriptCCcompile_js, env__3761)
                ]
            ]));
        };
    }
    ralphScoreCCMannotate_function(compile_expression__3768, 'compile_expression', false);
}
{
    {
        var ralphSfile_systemCCresolve_path = B3694['resolve-path'];
        var ralphScoreCCconcatenate = B1273['concatenate'];
        var executable_path__3772 = function B3770(module_name__3771) {
            return(ralphSfile_systemCCresolve_path('build', ralphScoreCCconcatenate(module_name__3771, '.js')));
        };
    }
    ralphScoreCCMannotate_function(executable_path__3772, 'executable_path', false);
}
{
    {
        var module_path__3755 = function B3774(base_path__3775, module_name__3776) {
            return(ralphSfile_systemCCresolve_path(base_path__3775, ralphScoreCCconcatenate(module_name__3776, '.rm')));
        };
    }
    ralphScoreCCMannotate_function(module_path__3755, 'module_path', false);
}
{
    {
        var source_path__3780 = function B3778(module_name__3779) {
            return(ralphSfile_systemCCresolve_path('src', ralphScoreCCconcatenate(module_name__3779, '.ralph')));
        };
    }
    ralphScoreCCMannotate_function(source_path__3780, 'source_path', false);
}
{
    {
        var ralphScoreCCL = B1273['<'];
        var ralphSfile_systemCCfile_properties = B3694['file-properties'];
        var recompileQ__3788 = function B3783(module_name__3784) {
            if (($T)(ralphScoreCCnot(ralphScoreCCget(TmodulesT__3708, module_name__3784, 'native?')))) {
                {
                    var path__3785 = executable_path__3772(module_name__3784);
                    var B3786 = ralphScoreCCnot(ralphSfile_systemCCfile_existsQ(path__3785));
                }
                if (($T)(B3786))
                    return(B3786);
                else {
                    {
                        var path2__3787 = source_path__3780(module_name__3784);
                    }
                    return(ralphScoreCCL(ralphScoreCCget(ralphSfile_systemCCfile_properties(path__3785), 'modification-date'), ralphScoreCCget(ralphSfile_systemCCfile_properties(path2__3787), 'modification-date')));
                }
            } else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(recompileQ__3788, 'recompileQ', false);
}
{
    {
        var ralphScoreCChasQ = B1273['has?'];
        var ralphSformatCCformat_out = B3692['format-out'];
        var ralphScompilerSenvironmentCCLenvironmentG = B3697['<environment>'];
        var ralphScompilerSspecial_formsCCBinternal_special_forms = B3700['$internal-special-forms'];
        var ralphScompilerSenvironmentCCmake_import_definition = B3697['make-import-definition'];
        var ralphScompilerSreaderCCBend_of_file = B3698['$end-of-file'];
        var ralphSfile_systemCCwrite_file = B3694['write-file'];
        var ralphScoreCCdescription = B1273['description'];
        var B3800 = $K('module');
        var B3801 = $K('special-forms');
        var B3802 = $K('macros');
        var B3803 = $K('symbol-macros');
        var B3804 = $K('eof-error?');
        var B3805 = $K('exports');
        var B3806 = $K('inline');
        var B3807 = $K('dependencies');
        var compile_module__3719 = function B3808(module_name__3809) {
            if (($T)(ralphScoreCCnot(ralphScoreCChasQ(TmodulesT__3708, module_name__3809)))) {
                {
                    var B3810 = read_module__3745('src', module_name__3809);
                }
                if (($T)(B3810)) {
                    {
                        var module__3811 = B3810;
                    }
                    ralphScoreCCget_setter(TmodulesT__3708, module_name__3809, module__3811);
                }
            }
            if (($T)(recompileQ__3788(module_name__3809))) {
                ralphSformatCCformat_out('Compiling: %s\n', module_name__3809);
                if (($T)(ralphScoreCCnot(ralphSfile_systemCCfile_existsQ(source_path__3780(module_name__3809)))))
                    ralphScoreCCsignal(ralphSformatCCformat_to_string('Unable to compile non-existing module \'%s\'', module_name__3809));
                {
                    var module__3812 = ralphScoreCCmake(ralphScompilerSmoduleCCLmoduleG, B3750, module_name__3809);
                    var env__3815 = ralphScoreCCmake(ralphScompilerSenvironmentCCLenvironmentG, B3800, module__3812, B3801, ralphScompilerSspecial_formsCCBinternal_special_forms, B3802, Ball_macros__3813, B3803, Ball_symbol_macros__3814);
                    var source__3816 = ralphSfile_systemCCread_file(source_path__3780(module_name__3809));
                    var stream__3817 = ralphScoreCCmake(ralphSstreamCCLstring_streamG, B3751, source__3816);
                    var result__3818 = '';
                    var compile__3819 = false;
                }
                compile__3819 = function B3820(form__3821) {
                    {
                        var compiled__3822 = compile_expression__3768(form__3821, env__3815);
                    }
                    return(result__3818 = ralphScoreCCconcatenate(result__3818, compiled__3822, '\n'));
                };
                ralphScoreCCget_setter(TmodulesT__3708, module_name__3809, module__3812);
                if (($T)(ralphScoreCCnot(ralphScoreCCEE(module_name__3809, 'ralph/core')))) {
                    import_module__3736(module__3812, 'ralph/core');
                    compile__3819(ralphScompilerSenvironmentCCmake_import_definition('ralph/core', env__3815));
                }
                {
                    var readQ__3823 = true;
                }
                while (($T)(readQ__3823)) {
                    {
                        var form__3824 = ralphScompilerSreaderCCread(stream__3817, env__3815, B3804, false);
                    }
                    readQ__3823 = ralphScoreCCnot(ralphScoreCCEE(form__3824, ralphScompilerSreaderCCBend_of_file));
                    if (($T)(readQ__3823))
                        compile__3819(form__3824);
                }
                ralphSfile_systemCCwrite_file(executable_path__3772(module_name__3809), result__3818);
                ralphSfile_systemCCwrite_file(module_path__3755('build', module_name__3809), ralphScoreCCdescription([
                    module_name__3809,
                    B3805,
                    ralphScoreCCget(module__3812, 'exports'),
                    B3806,
                    ralphScoreCCobject_properties(ralphScoreCCget(module__3812, 'inline')),
                    B3807,
                    ralphScoreCCget(module__3812, 'dependencies')
                ]));
                ralphSformatCCformat_out('Finished: %s\n', module_name__3809);
                return(module__3812);
            } else
                return(false);
        };
    }
    (exports)['compile-module'] = compile_module__3719;
    ralphScoreCCMannotate_function(compile_module__3719, 'compile_module', false);
}
{
    {
        var ralphScoreCCsymbol_name = B1273['symbol-name'];
        var ralphScoreCCinstanceQ = B1273['instance?'];
        var ralphScoreCCLarrayG = B1273['<array>'];
        var ralphScoreCCfirst = B1273['first'];
        var ralphScoreCCrest = B1273['rest'];
        var destructure_import__3828 = function B3826(import__3827) {
            {
                var B3829 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(import__3827, ralphScoreCCLarrayG)))
                B3829 = ralphScoreCCfirst(import__3827);
            else
                B3829 = import__3827;
            {
                var B3830 = ralphScoreCCsymbol_name(B3829);
                var B3831 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(import__3827, ralphScoreCCLarrayG)))
                B3831 = ralphScoreCCrest(import__3827);
            else
                B3831 = [];
            return([
                B3830,
                B3831
            ]);
        };
    }
    ralphScoreCCMannotate_function(destructure_import__3828, 'destructure_import', false);
}
{
    {
        var ralphScompilerSmacrosCCBinternal_macros = B3699['$internal-macros'];
        var ralphScoreCCmap = B1273['map'];
        var ralphScompilerSutilitiesCCidentifier_name = B3695['identifier-name'];
        var ralphScoreCCMconcat = B1273['%concat'];
        var B3842 = $S('begin', 'ralph/core');
    }
    ralphScoreCCget_setter(ralphScompilerSmacrosCCBinternal_macros, 'define-module', function B3843(env__3844, ____3845) {
        {
            var B3846 = $SL.call(arguments, 2);
            var B3847 = ralphScoreCCMkeys(B3846, {
                    'import': [],
                    'export': [],
                    'compile-time-import': [],
                    'inline': []
                });
            var import__3848 = B3847['import'];
            var export__3849 = B3847['export'];
            var compile_time_import__3850 = B3847['compile-time-import'];
            var inline__3851 = B3847['inline'];
            var B3852 = env__3844;
            var module__3853 = B3852['module'];
            var import_identifiers__3854 = B3852['import-identifiers'];
        }
        ralphScoreCCget_setter(module__3853, 'exports', ralphScoreCCmap(ralphScompilerSutilitiesCCidentifier_name, export__3849));
        ralphScoreCCdo(function B3855(import__3856) {
            {
                var B3857 = destructure_import__3828(import__3856);
                var module_name__3858 = B3857[0];
                var options__3859 = B3857[1];
            }
            return(ralphScoreCCapply(compile_time_import_module__3726, env__3844, module_name__3858, options__3859));
        }, compile_time_import__3850);
        ralphScoreCCdo(function B3860(name__3861) {
            return(ralphScoreCCget_setter(module__3853, 'inline', name__3861, true));
        }, ralphScoreCCmap(ralphScompilerSutilitiesCCidentifier_name, inline__3851));
        return(ralphScoreCCMconcat([B3842], ralphScoreCCmap(function B3862(import__3863) {
            {
                var B3864 = destructure_import__3828(import__3863);
                var module_name__3865 = B3864[0];
                var options__3866 = B3864[1];
            }
            ralphScoreCCapply(import_module__3736, module__3853, module_name__3865, options__3866);
            return(ralphScompilerSenvironmentCCmake_import_definition(module_name__3865, env__3844));
        }, import__3848)));
    });
}
{
    var Ball_symbol_macros__3814 = ralphScoreCCmake_plain_object();
}
{
    {
        var ralphScoreCCextendN = B1273['extend!'];
        var ralphScompilerSmacrosCCBinternal_symbol_macros = B3699['$internal-symbol-macros'];
    }
    ralphScoreCCextendN(Ball_symbol_macros__3814, ralphScompilerSmacrosCCBinternal_symbol_macros);
}
{
    {
        var ralphScompilerSmacrosCCBcore_symbol_macros = B3699['$core-symbol-macros'];
    }
    ralphScoreCCextendN(Ball_symbol_macros__3814, ralphScompilerSmacrosCCBcore_symbol_macros);
}
{
    var Ball_macros__3813 = ralphScoreCCmake_plain_object();
}
ralphScoreCCextendN(Ball_macros__3813, ralphScompilerSmacrosCCBinternal_macros);
{
    {
        var ralphScompilerSmacrosCCBcore_macros = B3699['$core-macros'];
    }
    ralphScoreCCextendN(Ball_macros__3813, ralphScompilerSmacrosCCBcore_macros);
}
{
    {
        var ralphScompilerSspecial_formsCCBcore_special_forms = B3700['$core-special-forms'];
    }
    ralphScoreCCdo(function B3868(name__3869) {
        if (($T)(ralphScoreCCnot(ralphScoreCChasQ(ralphScompilerSmacrosCCBinternal_macros, name__3869))))
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('No internal macro for special form: %s', name__3869)));
        else
            return(false);
    }, ralphScoreCCobject_properties(ralphScompilerSspecial_formsCCBcore_special_forms));
}
