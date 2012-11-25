var B1267 = require('ralph/core');
var B3717 = require('ralph/format'), B3718 = require('ralph/stream'), B3719 = require('ralph/file-system'), B3720 = require('ralph/compiler/utilities'), B3721 = require('ralph/compiler/module'), B3722 = require('ralph/compiler/environment'), B3723 = require('ralph/compiler/reader'), B3724 = require('ralph/compiler/macros'), B3725 = require('ralph/compiler/special-forms'), B3726 = require('ralph/compiler/macroexpansion'), B3727 = require('ralph/compiler/symbol-lifting'), B3728 = require('ralph/compiler/alpha'), B3729 = require('ralph/compiler/anf'), B3730 = require('ralph/compiler/statements'), B3731 = require('ralph/compiler/flattening'), B3732 = require('ralph/compiler/javascript');
var ralphScoreCCMvar = B1267['%var'], ralphScoreCCmake_object = B1267['make-object'], TmodulesT__3733 = ralphScoreCCmake_object();
var ralphScoreCCMmake_function = B1267['%make-function'], ralphScoreCCMkeys = B1267['%keys'], ralphScoreCCnot = B1267['not'], ralphScoreCCEE = B1267['=='], ralphScoreCCmake_plain_object = B1267['make-plain-object'], ralphScoreCCdo = B1267['do'], ralphScoreCCget = B1267['get'], ralphScoreCCget_setter = B1267['get-setter'], ralphScoreCCapply = B1267['apply'], ralphScompilerSutilitiesCCprocess_import_names = B3720['process-import-names'], ralphScoreCCobject_properties = B1267['object-properties'], ralphScoreCCchain_object = B1267['chain-object'], compile_time_import_module__3751 = ralphScoreCCMmake_function('compile_time_import_module', function B3738(env__3739, module_name__3740) {
        var B3741 = $SL.call(arguments, 2), B3742 = ralphScoreCCMkeys(B3741, { 'options': false }), options__3743 = B3742['options'];
        if (($T)(ralphScoreCCnot(ralphScoreCCEE(module_name__3740, 'ralph/core')))) {
            compile_module__3744(module_name__3740);
            var definitions__3745 = require(module_name__3740), macros__3746 = ralphScoreCCmake_plain_object(), symbol_macros__3747 = ralphScoreCCmake_plain_object();
            ralphScoreCCdo(function B3748(name__3749) {
                var definition__3750 = ralphScoreCCget(definitions__3745, name__3749);
                if (($T)(ralphScoreCCget(definition__3750, '%macro?')))
                    return(ralphScoreCCget_setter(macros__3746, name__3749, definition__3750));
                else if (($T)(ralphScoreCCget(definition__3750, '%symbol-macro?')))
                    return(ralphScoreCCget_setter(symbol_macros__3747, name__3749, definition__3750));
                else
                    return(false);
            }, ralphScoreCCapply(ralphScompilerSutilitiesCCprocess_import_names, ralphScoreCCobject_properties(definitions__3745), options__3743));
            ralphScoreCCchain_object(macros__3746, ralphScoreCCget(env__3739, 'macros'));
            ralphScoreCCget_setter(env__3739, 'macros', macros__3746);
            ralphScoreCCchain_object(symbol_macros__3747, ralphScoreCCget(env__3739, 'symbol-macros'));
            return(ralphScoreCCget_setter(env__3739, 'symbol-macros', symbol_macros__3747));
        } else
            return(false);
    }, false);
var ralphScoreCCpush = B1267['push'], ralphScoreCCsignal = B1267['signal'], ralphSformatCCformat_to_string = B3717['format-to-string'], import_module__3761 = ralphScoreCCMmake_function('import_module', function B3754(module__3755, module_name__3756) {
        var options__3757 = $SL.call(arguments, 2), B3759 = find_module__3758(module_name__3756);
        if (($T)(B3759)) {
            var other_module__3760 = B3759;
            ralphScoreCCpush(ralphScoreCCget(module__3755, 'imports'), [
                other_module__3760,
                ralphScoreCCapply(ralphScompilerSutilitiesCCprocess_import_names, ralphScoreCCget(other_module__3760, 'exports'), options__3757)
            ]);
            ralphScoreCCpush(ralphScoreCCget(module__3755, 'dependencies'), module_name__3756);
            return(other_module__3760);
        } else
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Unable to import module \'%s\'', module_name__3756)));
    }, false);
var find_module__3758 = ralphScoreCCMmake_function('find_module', function B3766(module_name__3767) {
        var B3768 = compile_module__3744(module_name__3767);
        if (($T)(B3768))
            return(B3768);
        else {
            var B3769 = ralphScoreCCget(TmodulesT__3733, module_name__3767);
            if (($T)(B3769))
                return(B3769);
            else {
                var B3771 = read_module__3770('build', module_name__3767);
                if (($T)(B3771))
                    return(B3771);
                else
                    return(read_module__3770('src', module_name__3767));
            }
        }
    }, false);
var ralphSfile_systemCCfile_existsQ = B3719['file-exists?'], ralphScoreCCcurry = B1267['curry'], ralphScoreCCmake = B1267['make'], ralphScompilerSmoduleCCLmoduleG = B3721['<module>'], ralphScompilerSreaderCCread = B3723['read'], ralphSstreamCCLstring_streamG = B3718['<string-stream>'], ralphSfile_systemCCread_file = B3719['read-file'], B3775 = $K('name'), B3776 = $K('string'), read_module__3770 = ralphScoreCCMmake_function('read_module', function B3777(base_path__3778, module_name__3779) {
        var path__3781 = module_path__3780(base_path__3778, module_name__3779);
        if (($T)(ralphSfile_systemCCfile_existsQ(path__3781)))
            return(ralphScoreCCapply(ralphScoreCCcurry(ralphScoreCCmake, ralphScompilerSmoduleCCLmoduleG, B3775), ralphScompilerSreaderCCread(ralphScoreCCmake(ralphSstreamCCLstring_streamG, B3776, ralphSfile_systemCCread_file(path__3781)))));
        else
            return(false);
    }, false);
var ralphScoreCCreduce = B1267['reduce'], ralphScoreCCrcurry = B1267['rcurry'], ralphScompilerSmacroexpansionCCmacroexpand_all = B3726['macroexpand-all'], ralphScompilerSsymbol_liftingCClift_symbols = B3727['lift-symbols'], ralphScompilerSalphaCCalpha_convert_form = B3728['alpha-convert-form'], ralphScompilerSanfCCnormalize_term = B3729['normalize-term'], ralphScompilerSstatementsCCtransform_statementsN = B3730['transform-statements!'], ralphScompilerSflatteningCCflatten_statementsN = B3731['flatten-statements!'], ralphScompilerSjavascriptCCcompile_js = B3732['compile-js'], compile_expression__3793 = ralphScoreCCMmake_function('compile_expression', function B3784(exp__3785, env__3786) {
        return(ralphScoreCCreduce(function B3787(result__3788, nameSpass__3789) {
            var name__3790 = nameSpass__3789[0], pass__3791 = nameSpass__3789[1], result__3792 = pass__3791(result__3788);
            return(result__3792);
        }, exp__3785, [
            [
                'macroexpansion',
                ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__3786)
            ],
            [
                'symbol lifting',
                ralphScoreCCrcurry(ralphScompilerSsymbol_liftingCClift_symbols, env__3786)
            ],
            [
                'alpha conversion',
                ralphScoreCCrcurry(ralphScompilerSalphaCCalpha_convert_form, env__3786)
            ],
            [
                'ANF transformation',
                ralphScoreCCrcurry(ralphScompilerSanfCCnormalize_term, env__3786)
            ],
            [
                'statement transfomation',
                ralphScoreCCrcurry(ralphScompilerSstatementsCCtransform_statementsN, env__3786)
            ],
            [
                'statement flattening',
                ralphScompilerSflatteningCCflatten_statementsN
            ],
            [
                'code generation',
                ralphScoreCCrcurry(ralphScompilerSjavascriptCCcompile_js, env__3786)
            ]
        ]));
    }, false);
var ralphSfile_systemCCresolve_path = B3719['resolve-path'], ralphScoreCCconcatenate = B1267['concatenate'], executable_path__3797 = ralphScoreCCMmake_function('executable_path', function B3795(module_name__3796) {
        return(ralphSfile_systemCCresolve_path('build', ralphScoreCCconcatenate(module_name__3796, '.js')));
    }, false);
var module_path__3780 = ralphScoreCCMmake_function('module_path', function B3799(base_path__3800, module_name__3801) {
        return(ralphSfile_systemCCresolve_path(base_path__3800, ralphScoreCCconcatenate(module_name__3801, '.rm')));
    }, false);
var source_path__3805 = ralphScoreCCMmake_function('source_path', function B3803(module_name__3804) {
        return(ralphSfile_systemCCresolve_path('src', ralphScoreCCconcatenate(module_name__3804, '.ralph')));
    }, false);
var ralphScoreCCL = B1267['<'], ralphSfile_systemCCfile_properties = B3719['file-properties'], recompileQ__3813 = ralphScoreCCMmake_function('recompileQ', function B3808(module_name__3809) {
        if (($T)(ralphScoreCCnot(ralphScoreCCget(TmodulesT__3733, module_name__3809, 'native?')))) {
            var path__3810 = executable_path__3797(module_name__3809), B3811 = ralphScoreCCnot(ralphSfile_systemCCfile_existsQ(path__3810));
            if (($T)(B3811))
                return(B3811);
            else {
                var path2__3812 = source_path__3805(module_name__3809);
                return(ralphScoreCCL(ralphScoreCCget(ralphSfile_systemCCfile_properties(path__3810), 'modification-date'), ralphScoreCCget(ralphSfile_systemCCfile_properties(path2__3812), 'modification-date')));
            }
        } else
            return(false);
    }, false);
{
    var ralphScoreCChasQ = B1267['has?'], ralphSformatCCformat_out = B3717['format-out'], ralphScompilerSenvironmentCCLenvironmentG = B3722['<environment>'], ralphScompilerSspecial_formsCCBinternal_special_forms = B3725['$internal-special-forms'], ralphScompilerSenvironmentCCmake_import_definition = B3722['make-import-definition'], ralphScompilerSreaderCCBend_of_file = B3723['$end-of-file'], ralphSfile_systemCCwrite_file = B3719['write-file'], ralphScoreCCdescription = B1267['description'], B3825 = $K('module'), B3826 = $K('special-forms'), B3827 = $K('macros'), B3828 = $K('symbol-macros'), B3829 = $K('eof-error?'), B3830 = $K('exports'), B3831 = $K('inline'), B3832 = $K('dependencies'), compile_module__3744 = ralphScoreCCMmake_function('compile_module', function B3833(module_name__3834) {
            if (($T)(ralphScoreCCnot(ralphScoreCChasQ(TmodulesT__3733, module_name__3834)))) {
                var B3835 = read_module__3770('src', module_name__3834);
                if (($T)(B3835)) {
                    var module__3836 = B3835;
                    ralphScoreCCget_setter(TmodulesT__3733, module_name__3834, module__3836);
                }
            }
            if (($T)(recompileQ__3813(module_name__3834))) {
                ralphSformatCCformat_out('Compiling: %s\n', module_name__3834);
                if (($T)(ralphScoreCCnot(ralphSfile_systemCCfile_existsQ(source_path__3805(module_name__3834)))))
                    ralphScoreCCsignal(ralphSformatCCformat_to_string('Unable to compile non-existing module \'%s\'', module_name__3834));
                var module__3837 = ralphScoreCCmake(ralphScompilerSmoduleCCLmoduleG, B3775, module_name__3834), env__3840 = ralphScoreCCmake(ralphScompilerSenvironmentCCLenvironmentG, B3825, module__3837, B3826, ralphScompilerSspecial_formsCCBinternal_special_forms, B3827, Ball_macros__3838, B3828, Ball_symbol_macros__3839), source__3841 = ralphSfile_systemCCread_file(source_path__3805(module_name__3834)), stream__3842 = ralphScoreCCmake(ralphSstreamCCLstring_streamG, B3776, source__3841), result__3843 = '', compile__3844 = false;
                compile__3844 = function B3845(form__3846) {
                    var compiled__3847 = compile_expression__3793(form__3846, env__3840);
                    return(result__3843 = ralphScoreCCconcatenate(result__3843, compiled__3847, '\n'));
                };
                ralphScoreCCget_setter(TmodulesT__3733, module_name__3834, module__3837);
                if (($T)(ralphScoreCCnot(ralphScoreCCEE(module_name__3834, 'ralph/core')))) {
                    import_module__3761(module__3837, 'ralph/core');
                    compile__3844(ralphScompilerSenvironmentCCmake_import_definition('ralph/core', env__3840));
                }
                var readQ__3848 = true;
                while (($T)(readQ__3848)) {
                    var form__3849 = ralphScompilerSreaderCCread(stream__3842, env__3840, B3829, false);
                    readQ__3848 = ralphScoreCCnot(ralphScoreCCEE(form__3849, ralphScompilerSreaderCCBend_of_file));
                    if (($T)(readQ__3848))
                        compile__3844(form__3849);
                }
                ralphSfile_systemCCwrite_file(executable_path__3797(module_name__3834), result__3843);
                ralphSfile_systemCCwrite_file(module_path__3780('build', module_name__3834), ralphScoreCCdescription([
                    module_name__3834,
                    B3830,
                    ralphScoreCCget(module__3837, 'exports'),
                    B3831,
                    ralphScoreCCobject_properties(ralphScoreCCget(module__3837, 'inline')),
                    B3832,
                    ralphScoreCCget(module__3837, 'dependencies')
                ]));
                ralphSformatCCformat_out('Finished: %s\n', module_name__3834);
                return(module__3837);
            } else
                return(false);
        }, false);
    (exports)['compile-module'] = compile_module__3744;
}
var ralphScoreCCsymbol_name = B1267['symbol-name'], ralphScoreCCinstanceQ = B1267['instance?'], ralphScoreCCLarrayG = B1267['<array>'], ralphScoreCCfirst = B1267['first'], ralphScoreCCrest = B1267['rest'], destructure_import__3853 = ralphScoreCCMmake_function('destructure_import', function B3851(import__3852) {
        var B3854 = false;
        if (($T)(ralphScoreCCinstanceQ(import__3852, ralphScoreCCLarrayG)))
            B3854 = ralphScoreCCfirst(import__3852);
        else
            B3854 = import__3852;
        var B3855 = ralphScoreCCsymbol_name(B3854), B3856 = false;
        if (($T)(ralphScoreCCinstanceQ(import__3852, ralphScoreCCLarrayG)))
            B3856 = ralphScoreCCrest(import__3852);
        else
            B3856 = [];
        return([
            B3855,
            B3856
        ]);
    }, false);
{
    var ralphScompilerSmacrosCCBinternal_macros = B3724['$internal-macros'], ralphScoreCCmap = B1267['map'], ralphScompilerSutilitiesCCidentifier_name = B3720['identifier-name'], ralphScoreCCMconcat = B1267['%concat'], B3867 = $S('begin', 'ralph/core');
    ralphScoreCCget_setter(ralphScompilerSmacrosCCBinternal_macros, 'define-module', function B3868(env__3869, ____3870) {
        var B3871 = $SL.call(arguments, 2), B3872 = ralphScoreCCMkeys(B3871, {
                'import': [],
                'export': [],
                'compile-time-import': [],
                'inline': []
            }), import__3873 = B3872['import'], export__3874 = B3872['export'], compile_time_import__3875 = B3872['compile-time-import'], inline__3876 = B3872['inline'], B3877 = env__3869, module__3878 = B3877['module'], import_identifiers__3879 = B3877['import-identifiers'];
        ralphScoreCCget_setter(module__3878, 'exports', ralphScoreCCmap(ralphScompilerSutilitiesCCidentifier_name, export__3874));
        ralphScoreCCdo(function B3880(import__3881) {
            var B3882 = destructure_import__3853(import__3881), module_name__3883 = B3882[0], options__3884 = B3882[1];
            return(ralphScoreCCapply(compile_time_import_module__3751, env__3869, module_name__3883, options__3884));
        }, compile_time_import__3875);
        ralphScoreCCdo(function B3885(name__3886) {
            return(ralphScoreCCget_setter(module__3878, 'inline', name__3886, true));
        }, ralphScoreCCmap(ralphScompilerSutilitiesCCidentifier_name, inline__3876));
        return(ralphScoreCCMconcat([B3867], ralphScoreCCmap(function B3887(import__3888) {
            var B3889 = destructure_import__3853(import__3888), module_name__3890 = B3889[0], options__3891 = B3889[1];
            ralphScoreCCapply(import_module__3761, module__3878, module_name__3890, options__3891);
            return(ralphScompilerSenvironmentCCmake_import_definition(module_name__3890, env__3869));
        }, import__3873)));
    });
}
var Ball_symbol_macros__3839 = ralphScoreCCmake_plain_object();
{
    var ralphScoreCCextendN = B1267['extend!'], ralphScompilerSmacrosCCBinternal_symbol_macros = B3724['$internal-symbol-macros'];
    ralphScoreCCextendN(Ball_symbol_macros__3839, ralphScompilerSmacrosCCBinternal_symbol_macros);
}
{
    var ralphScompilerSmacrosCCBcore_symbol_macros = B3724['$core-symbol-macros'];
    ralphScoreCCextendN(Ball_symbol_macros__3839, ralphScompilerSmacrosCCBcore_symbol_macros);
}
var Ball_macros__3838 = ralphScoreCCmake_plain_object();
ralphScoreCCextendN(Ball_macros__3838, ralphScompilerSmacrosCCBinternal_macros);
{
    var ralphScompilerSmacrosCCBcore_macros = B3724['$core-macros'];
    ralphScoreCCextendN(Ball_macros__3838, ralphScompilerSmacrosCCBcore_macros);
}
{
    var ralphScompilerSspecial_formsCCBcore_special_forms = B3725['$core-special-forms'];
    ralphScoreCCdo(function B3893(name__3894) {
        if (($T)(ralphScoreCCnot(ralphScoreCChasQ(ralphScompilerSmacrosCCBinternal_macros, name__3894))))
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('No internal macro for special form: %s', name__3894)));
        else
            return(false);
    }, ralphScoreCCobject_properties(ralphScompilerSspecial_formsCCBcore_special_forms));
}
