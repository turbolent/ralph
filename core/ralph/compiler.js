var B1267 = require('ralph/core');
var B3716 = require('ralph/format'), B3717 = require('ralph/stream'), B3718 = require('ralph/file-system'), B3719 = require('ralph/compiler/utilities'), B3720 = require('ralph/compiler/module'), B3721 = require('ralph/compiler/environment'), B3722 = require('ralph/compiler/reader'), B3723 = require('ralph/compiler/macros'), B3724 = require('ralph/compiler/special-forms'), B3725 = require('ralph/compiler/macroexpansion'), B3726 = require('ralph/compiler/symbol-lifting'), B3727 = require('ralph/compiler/alpha'), B3728 = require('ralph/compiler/anf'), B3729 = require('ralph/compiler/statements'), B3730 = require('ralph/compiler/flattening'), B3731 = require('ralph/compiler/javascript');
var ralphScoreCCMvar = B1267['%var'], ralphScoreCCmake_object = B1267['make-object'], TmodulesT__3732 = ralphScoreCCmake_object();
var ralphScoreCCMmake_function = B1267['%make-function'], ralphScoreCCMkeys = B1267['%keys'], ralphScoreCCnot = B1267['not'], ralphScoreCCEE = B1267['=='], ralphScoreCCmake_plain_object = B1267['make-plain-object'], ralphScoreCCdo = B1267['do'], ralphScoreCCget = B1267['get'], ralphScoreCCget_setter = B1267['get-setter'], ralphScoreCCapply = B1267['apply'], ralphScompilerSutilitiesCCprocess_import_names = B3719['process-import-names'], ralphScoreCCobject_properties = B1267['object-properties'], ralphScoreCCchain_object = B1267['chain-object'], compile_time_import_module__3750 = ralphScoreCCMmake_function('compile_time_import_module', function B3737(env__3738, module_name__3739) {
        var B3740 = $SL.call(arguments, 2), B3741 = ralphScoreCCMkeys(B3740, { 'options': false }), options__3742 = B3741['options'];
        if (($T)(ralphScoreCCnot(ralphScoreCCEE(module_name__3739, 'ralph/core')))) {
            compile_module__3743(module_name__3739);
            var definitions__3744 = require(module_name__3739), macros__3745 = ralphScoreCCmake_plain_object(), symbol_macros__3746 = ralphScoreCCmake_plain_object();
            ralphScoreCCdo(function B3747(name__3748) {
                var definition__3749 = ralphScoreCCget(definitions__3744, name__3748);
                if (($T)(ralphScoreCCget(definition__3749, '%macro?')))
                    return(ralphScoreCCget_setter(macros__3745, name__3748, definition__3749));
                else if (($T)(ralphScoreCCget(definition__3749, '%symbol-macro?')))
                    return(ralphScoreCCget_setter(symbol_macros__3746, name__3748, definition__3749));
                else
                    return(false);
            }, ralphScoreCCapply(ralphScompilerSutilitiesCCprocess_import_names, ralphScoreCCobject_properties(definitions__3744), options__3742));
            ralphScoreCCchain_object(macros__3745, ralphScoreCCget(env__3738, 'macros'));
            ralphScoreCCget_setter(env__3738, 'macros', macros__3745);
            ralphScoreCCchain_object(symbol_macros__3746, ralphScoreCCget(env__3738, 'symbol-macros'));
            return(ralphScoreCCget_setter(env__3738, 'symbol-macros', symbol_macros__3746));
        } else
            return(false);
    }, false);
var ralphScoreCCpush = B1267['push'], ralphScoreCCsignal = B1267['signal'], ralphSformatCCformat_to_string = B3716['format-to-string'], import_module__3760 = ralphScoreCCMmake_function('import_module', function B3753(module__3754, module_name__3755) {
        var options__3756 = $SL.call(arguments, 2), B3758 = find_module__3757(module_name__3755);
        if (($T)(B3758)) {
            var other_module__3759 = B3758;
            ralphScoreCCpush(ralphScoreCCget(module__3754, 'imports'), [
                other_module__3759,
                ralphScoreCCapply(ralphScompilerSutilitiesCCprocess_import_names, ralphScoreCCget(other_module__3759, 'exports'), options__3756)
            ]);
            ralphScoreCCpush(ralphScoreCCget(module__3754, 'dependencies'), module_name__3755);
            return(other_module__3759);
        } else
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Unable to import module \'%s\'', module_name__3755)));
    }, false);
var find_module__3757 = ralphScoreCCMmake_function('find_module', function B3765(module_name__3766) {
        var B3767 = compile_module__3743(module_name__3766);
        if (($T)(B3767))
            return(B3767);
        else {
            var B3768 = ralphScoreCCget(TmodulesT__3732, module_name__3766);
            if (($T)(B3768))
                return(B3768);
            else {
                var B3770 = read_module__3769('build', module_name__3766);
                if (($T)(B3770))
                    return(B3770);
                else
                    return(read_module__3769('src', module_name__3766));
            }
        }
    }, false);
var ralphSfile_systemCCfile_existsQ = B3718['file-exists?'], ralphScoreCCcurry = B1267['curry'], ralphScoreCCmake = B1267['make'], ralphScompilerSmoduleCCLmoduleG = B3720['<module>'], ralphScompilerSreaderCCread = B3722['read'], ralphSstreamCCLstring_streamG = B3717['<string-stream>'], ralphSfile_systemCCread_file = B3718['read-file'], B3774 = $K('name'), B3775 = $K('string'), read_module__3769 = ralphScoreCCMmake_function('read_module', function B3776(base_path__3777, module_name__3778) {
        var path__3780 = module_path__3779(base_path__3777, module_name__3778);
        if (($T)(ralphSfile_systemCCfile_existsQ(path__3780)))
            return(ralphScoreCCapply(ralphScoreCCcurry(ralphScoreCCmake, ralphScompilerSmoduleCCLmoduleG, B3774), ralphScompilerSreaderCCread(ralphScoreCCmake(ralphSstreamCCLstring_streamG, B3775, ralphSfile_systemCCread_file(path__3780)))));
        else
            return(false);
    }, false);
var ralphScoreCCreduce = B1267['reduce'], ralphScoreCCrcurry = B1267['rcurry'], ralphScompilerSmacroexpansionCCmacroexpand_all = B3725['macroexpand-all'], ralphScompilerSsymbol_liftingCClift_symbols = B3726['lift-symbols'], ralphScompilerSalphaCCalpha_convert_form = B3727['alpha-convert-form'], ralphScompilerSanfCCnormalize_term = B3728['normalize-term'], ralphScompilerSstatementsCCtransform_statementsN = B3729['transform-statements!'], ralphScompilerSflatteningCCflatten_statementsN = B3730['flatten-statements!'], ralphScompilerSjavascriptCCcompile_js = B3731['compile-js'], compile_expression__3792 = ralphScoreCCMmake_function('compile_expression', function B3783(exp__3784, env__3785) {
        return(ralphScoreCCreduce(function B3786(result__3787, nameSpass__3788) {
            var name__3789 = nameSpass__3788[0], pass__3790 = nameSpass__3788[1], result__3791 = pass__3790(result__3787);
            return(result__3791);
        }, exp__3784, [
            [
                'macroexpansion',
                ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__3785)
            ],
            [
                'symbol lifting',
                ralphScoreCCrcurry(ralphScompilerSsymbol_liftingCClift_symbols, env__3785)
            ],
            [
                'alpha conversion',
                ralphScoreCCrcurry(ralphScompilerSalphaCCalpha_convert_form, env__3785)
            ],
            [
                'ANF transformation',
                ralphScoreCCrcurry(ralphScompilerSanfCCnormalize_term, env__3785)
            ],
            [
                'statement transfomation',
                ralphScoreCCrcurry(ralphScompilerSstatementsCCtransform_statementsN, env__3785)
            ],
            [
                'statement flattening',
                ralphScompilerSflatteningCCflatten_statementsN
            ],
            [
                'code generation',
                ralphScoreCCrcurry(ralphScompilerSjavascriptCCcompile_js, env__3785)
            ]
        ]));
    }, false);
var ralphSfile_systemCCresolve_path = B3718['resolve-path'], ralphScoreCCconcatenate = B1267['concatenate'], executable_path__3796 = ralphScoreCCMmake_function('executable_path', function B3794(module_name__3795) {
        return(ralphSfile_systemCCresolve_path('build', ralphScoreCCconcatenate(module_name__3795, '.js')));
    }, false);
var module_path__3779 = ralphScoreCCMmake_function('module_path', function B3798(base_path__3799, module_name__3800) {
        return(ralphSfile_systemCCresolve_path(base_path__3799, ralphScoreCCconcatenate(module_name__3800, '.rm')));
    }, false);
var source_path__3804 = ralphScoreCCMmake_function('source_path', function B3802(module_name__3803) {
        return(ralphSfile_systemCCresolve_path('src', ralphScoreCCconcatenate(module_name__3803, '.ralph')));
    }, false);
var ralphScoreCCL = B1267['<'], ralphSfile_systemCCfile_properties = B3718['file-properties'], recompileQ__3812 = ralphScoreCCMmake_function('recompileQ', function B3807(module_name__3808) {
        if (($T)(ralphScoreCCnot(ralphScoreCCget(TmodulesT__3732, module_name__3808, 'native?')))) {
            var path__3809 = executable_path__3796(module_name__3808), B3810 = ralphScoreCCnot(ralphSfile_systemCCfile_existsQ(path__3809));
            if (($T)(B3810))
                return(B3810);
            else {
                var path2__3811 = source_path__3804(module_name__3808);
                return(ralphScoreCCL(ralphScoreCCget(ralphSfile_systemCCfile_properties(path__3809), 'modification-date'), ralphScoreCCget(ralphSfile_systemCCfile_properties(path2__3811), 'modification-date')));
            }
        } else
            return(false);
    }, false);
{
    var ralphScoreCChasQ = B1267['has?'], ralphSformatCCformat_out = B3716['format-out'], ralphScompilerSenvironmentCCLenvironmentG = B3721['<environment>'], ralphScompilerSspecial_formsCCBinternal_special_forms = B3724['$internal-special-forms'], ralphScompilerSenvironmentCCmake_import_definition = B3721['make-import-definition'], ralphScompilerSreaderCCBend_of_file = B3722['$end-of-file'], ralphSfile_systemCCwrite_file = B3718['write-file'], ralphScoreCCdescription = B1267['description'], B3824 = $K('module'), B3825 = $K('special-forms'), B3826 = $K('macros'), B3827 = $K('symbol-macros'), B3828 = $K('eof-error?'), B3829 = $K('exports'), B3830 = $K('inline'), B3831 = $K('dependencies'), compile_module__3743 = ralphScoreCCMmake_function('compile_module', function B3832(module_name__3833) {
            if (($T)(ralphScoreCCnot(ralphScoreCChasQ(TmodulesT__3732, module_name__3833)))) {
                var B3834 = read_module__3769('src', module_name__3833);
                if (($T)(B3834)) {
                    var module__3835 = B3834;
                    ralphScoreCCget_setter(TmodulesT__3732, module_name__3833, module__3835);
                }
            }
            if (($T)(recompileQ__3812(module_name__3833))) {
                ralphSformatCCformat_out('Compiling: %s\n', module_name__3833);
                if (($T)(ralphScoreCCnot(ralphSfile_systemCCfile_existsQ(source_path__3804(module_name__3833)))))
                    ralphScoreCCsignal(ralphSformatCCformat_to_string('Unable to compile non-existing module \'%s\'', module_name__3833));
                var module__3836 = ralphScoreCCmake(ralphScompilerSmoduleCCLmoduleG, B3774, module_name__3833), env__3839 = ralphScoreCCmake(ralphScompilerSenvironmentCCLenvironmentG, B3824, module__3836, B3825, ralphScompilerSspecial_formsCCBinternal_special_forms, B3826, Ball_macros__3837, B3827, Ball_symbol_macros__3838), source__3840 = ralphSfile_systemCCread_file(source_path__3804(module_name__3833)), stream__3841 = ralphScoreCCmake(ralphSstreamCCLstring_streamG, B3775, source__3840), result__3842 = '', compile__3843 = false;
                compile__3843 = function B3844(form__3845) {
                    var compiled__3846 = compile_expression__3792(form__3845, env__3839);
                    return(result__3842 = ralphScoreCCconcatenate(result__3842, compiled__3846, '\n'));
                };
                ralphScoreCCget_setter(TmodulesT__3732, module_name__3833, module__3836);
                if (($T)(ralphScoreCCnot(ralphScoreCCEE(module_name__3833, 'ralph/core')))) {
                    import_module__3760(module__3836, 'ralph/core');
                    compile__3843(ralphScompilerSenvironmentCCmake_import_definition('ralph/core', env__3839));
                }
                var readQ__3847 = true;
                while (($T)(readQ__3847)) {
                    var form__3848 = ralphScompilerSreaderCCread(stream__3841, env__3839, B3828, false);
                    readQ__3847 = ralphScoreCCnot(ralphScoreCCEE(form__3848, ralphScompilerSreaderCCBend_of_file));
                    if (($T)(readQ__3847))
                        compile__3843(form__3848);
                }
                ralphSfile_systemCCwrite_file(executable_path__3796(module_name__3833), result__3842);
                ralphSfile_systemCCwrite_file(module_path__3779('build', module_name__3833), ralphScoreCCdescription([
                    module_name__3833,
                    B3829,
                    ralphScoreCCget(module__3836, 'exports'),
                    B3830,
                    ralphScoreCCobject_properties(ralphScoreCCget(module__3836, 'inline')),
                    B3831,
                    ralphScoreCCget(module__3836, 'dependencies')
                ]));
                ralphSformatCCformat_out('Finished: %s\n', module_name__3833);
                return(module__3836);
            } else
                return(false);
        }, false);
    (exports)['compile-module'] = compile_module__3743;
}
var ralphScoreCCsymbol_name = B1267['symbol-name'], ralphScoreCCinstanceQ = B1267['instance?'], ralphScoreCCLarrayG = B1267['<array>'], ralphScoreCCfirst = B1267['first'], ralphScoreCCrest = B1267['rest'], destructure_import__3852 = ralphScoreCCMmake_function('destructure_import', function B3850(import__3851) {
        var B3853 = false;
        if (($T)(ralphScoreCCinstanceQ(import__3851, ralphScoreCCLarrayG)))
            B3853 = ralphScoreCCfirst(import__3851);
        else
            B3853 = import__3851;
        var B3854 = ralphScoreCCsymbol_name(B3853), B3855 = false;
        if (($T)(ralphScoreCCinstanceQ(import__3851, ralphScoreCCLarrayG)))
            B3855 = ralphScoreCCrest(import__3851);
        else
            B3855 = [];
        return([
            B3854,
            B3855
        ]);
    }, false);
{
    var ralphScompilerSmacrosCCBinternal_macros = B3723['$internal-macros'], ralphScoreCCmap = B1267['map'], ralphScompilerSutilitiesCCidentifier_name = B3719['identifier-name'], ralphScoreCCMconcat = B1267['%concat'], B3866 = $S('begin', 'ralph/core');
    ralphScoreCCget_setter(ralphScompilerSmacrosCCBinternal_macros, 'define-module', function B3867(env__3868, ____3869) {
        var B3870 = $SL.call(arguments, 2), B3871 = ralphScoreCCMkeys(B3870, {
                'import': [],
                'export': [],
                'compile-time-import': [],
                'inline': []
            }), import__3872 = B3871['import'], export__3873 = B3871['export'], compile_time_import__3874 = B3871['compile-time-import'], inline__3875 = B3871['inline'], B3876 = env__3868, module__3877 = B3876['module'], import_identifiers__3878 = B3876['import-identifiers'];
        ralphScoreCCget_setter(module__3877, 'exports', ralphScoreCCmap(ralphScompilerSutilitiesCCidentifier_name, export__3873));
        ralphScoreCCdo(function B3879(import__3880) {
            var B3881 = destructure_import__3852(import__3880), module_name__3882 = B3881[0], options__3883 = B3881[1];
            return(ralphScoreCCapply(compile_time_import_module__3750, env__3868, module_name__3882, options__3883));
        }, compile_time_import__3874);
        ralphScoreCCdo(function B3884(name__3885) {
            return(ralphScoreCCget_setter(module__3877, 'inline', name__3885, true));
        }, ralphScoreCCmap(ralphScompilerSutilitiesCCidentifier_name, inline__3875));
        return(ralphScoreCCMconcat([B3866], ralphScoreCCmap(function B3886(import__3887) {
            var B3888 = destructure_import__3852(import__3887), module_name__3889 = B3888[0], options__3890 = B3888[1];
            ralphScoreCCapply(import_module__3760, module__3877, module_name__3889, options__3890);
            return(ralphScompilerSenvironmentCCmake_import_definition(module_name__3889, env__3868));
        }, import__3872)));
    });
}
var Ball_symbol_macros__3838 = ralphScoreCCmake_plain_object();
{
    var ralphScoreCCextendN = B1267['extend!'], ralphScompilerSmacrosCCBinternal_symbol_macros = B3723['$internal-symbol-macros'];
    ralphScoreCCextendN(Ball_symbol_macros__3838, ralphScompilerSmacrosCCBinternal_symbol_macros);
}
{
    var ralphScompilerSmacrosCCBcore_symbol_macros = B3723['$core-symbol-macros'];
    ralphScoreCCextendN(Ball_symbol_macros__3838, ralphScompilerSmacrosCCBcore_symbol_macros);
}
var Ball_macros__3837 = ralphScoreCCmake_plain_object();
ralphScoreCCextendN(Ball_macros__3837, ralphScompilerSmacrosCCBinternal_macros);
{
    var ralphScompilerSmacrosCCBcore_macros = B3723['$core-macros'];
    ralphScoreCCextendN(Ball_macros__3837, ralphScompilerSmacrosCCBcore_macros);
}
{
    var ralphScompilerSspecial_formsCCBcore_special_forms = B3724['$core-special-forms'];
    ralphScoreCCdo(function B3892(name__3893) {
        if (($T)(ralphScoreCCnot(ralphScoreCChasQ(ralphScompilerSmacrosCCBinternal_macros, name__3893))))
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('No internal macro for special form: %s', name__3893)));
        else
            return(false);
    }, ralphScoreCCobject_properties(ralphScompilerSspecial_formsCCBcore_special_forms));
}
