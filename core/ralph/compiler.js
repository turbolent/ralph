{
    var $module = Object.create(null);
    var Mexport = function B2(name__3, value__4) {
        var B5 = (exports);
        return(B5[name__3] = value__4);
    };
}
var B1196 = require('ralph/core');
{
    var B1443 = require('ralph/format');
    {
        var B1444 = require('ralph/stream');
        {
            var B1445 = require('ralph/file-stream');
            {
                var B1446 = require('ralph/file-system');
                {
                    var B1634 = require('ralph/pretty2');
                    {
                        var B1734 = require('ralph/compiler/utilities');
                        {
                            var B1769 = require('ralph/compiler/module');
                            {
                                var B1868 = require('ralph/compiler/environment');
                                {
                                    var B2040 = require('ralph/compiler/reader');
                                    {
                                        var B2606 = require('ralph/compiler/macros');
                                        {
                                            var B2952 = require('ralph/compiler/special-forms');
                                            {
                                                var B2953 = require('ralph/compiler/macroexpansion');
                                                {
                                                    var B3086 = require('ralph/compiler/symbol-lifting');
                                                    {
                                                        var B3290 = require('ralph/compiler/alpha');
                                                        {
                                                            var B3423 = require('ralph/compiler/anf');
                                                            {
                                                                var B3571 = require('ralph/compiler/statements');
                                                                var B3705 = require('ralph/compiler/javascript');
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
                    }
                }
            }
        }
    }
}
var TmodulesT = B1196['make-object']();
{
    var compile_time_import_module = function B3710(env__3711, module_name__3712) {
        var B3713 = $SL.call(arguments, 2);
        {
            var B3714 = B1196['%keys'](B3713, { 'options': false });
            {
                var options__3715 = B3714['options'];
                if (($T)(B1196['not'](B1196['=='](module_name__3712, 'ralph/core')))) {
                    compile_module(module_name__3712);
                    {
                        var definitions__3716 = require(module_name__3712);
                        {
                            var macros__3717 = B1196['make-plain-object']();
                            {
                                var symbol_macros__3718 = B1196['make-plain-object']();
                                {
                                    B1196['do'](function B3719(name__3720) {
                                        var definition__3721 = B1196['get'](definitions__3716, name__3720);
                                        if (($T)(B1196['get'](definition__3721, '%macro?')))
                                            return(B1196['get-setter'](macros__3717, name__3720, definition__3721));
                                        else if (($T)(B1196['get'](definition__3721, '%symbol-macro?')))
                                            return(B1196['get-setter'](symbol_macros__3718, name__3720, definition__3721));
                                        else
                                            return(false);
                                    }, B1196['apply'](B1734['process-import-names'], B1196['object-properties'](definitions__3716), options__3715));
                                    {
                                        B1196['chain-object'](macros__3717, B1196['get'](env__3711, 'macros'));
                                        {
                                            B1196['get-setter'](env__3711, 'macros', macros__3717);
                                            {
                                                B1196['chain-object'](symbol_macros__3718, B1196['get'](env__3711, 'symbol-macros'));
                                                return(B1196['get-setter'](env__3711, 'symbol-macros', symbol_macros__3718));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else
                    return(false);
            }
        }
    };
    B1196['%annotate-function'](compile_time_import_module, 'compile-time-import-module', false);
}
{
    var import_module = function B3724(module__3725, module_name__3726) {
        var options__3727 = $SL.call(arguments, 2);
        {
            var B3728 = find_module(module_name__3726);
            if (($T)(B3728)) {
                var other_module__3729 = B3728;
                {
                    B1196['push'](B1196['get'](module__3725, 'imports'), [
                        other_module__3729,
                        B1196['apply'](B1734['process-import-names'], B1196['get'](other_module__3729, 'exports'), options__3727)
                    ]);
                    {
                        B1196['push'](B1196['get'](module__3725, 'dependencies'), module_name__3726);
                        return(other_module__3729);
                    }
                }
            } else
                return(B1196['signal'](B1443['format-to-string']('Unable to import module \'%s\'', module_name__3726)));
        }
    };
    B1196['%annotate-function'](import_module, 'import-module', false);
}
{
    var find_module = function B3734(module_name__3735) {
        var B3736 = compile_module(module_name__3735);
        if (($T)(B3736))
            return(B3736);
        else {
            var B3737 = B1196['get'](TmodulesT, module_name__3735);
            if (($T)(B3737))
                return(B3737);
            else {
                var B3738 = read_module('build', module_name__3735);
                if (($T)(B3738))
                    return(B3738);
                else
                    return(read_module('src', module_name__3735));
            }
        }
    };
    B1196['%annotate-function'](find_module, 'find-module', false);
}
{
    var B3740 = $K('name');
    {
        var B3741 = $K('string');
        {
            var read_module = function B3742(base_path__3743, module_name__3744) {
                var path__3745 = module_path(base_path__3743, module_name__3744);
                if (($T)(B1446['file-exists?'](path__3745)))
                    return(B1196['apply'](B1196['curry'](B1196['make'], B1769['<module>'], B3740), B2040['read'](B1196['make'](B1444['<string-stream>'], B3741, B1446['read-file'](path__3745)))));
                else
                    return(false);
            };
            B1196['%annotate-function'](read_module, 'read-module', false);
        }
    }
}
{
    var compile_expression = function B3749(exp__3750, env__3751) {
        return(B1196['reduce'](function B3752(result__3753, nameSpass__3754) {
            var name__3755 = nameSpass__3754[0];
            {
                var pass__3756 = nameSpass__3754[1];
                {
                    var result__3757 = pass__3756(result__3753);
                    return(result__3757);
                }
            }
        }, exp__3750, [
            [
                'macroexpansion',
                B1196['rcurry'](B2953['macroexpand-all'], env__3751)
            ],
            [
                'symbol lifting',
                B1196['rcurry'](B3086['lift-symbols'], env__3751)
            ],
            [
                'alpha conversion',
                B1196['rcurry'](B3290['alpha-convert-form'], env__3751)
            ],
            [
                'ANF transformation',
                B1196['rcurry'](B3423['normalize-term'], env__3751)
            ],
            [
                'statement transfomation',
                function B3758(exp__3759) {
                    return(B3571['transform-statements!'](exp__3759, env__3751));
                }
            ],
            [
                'code generation',
                B1196['rcurry'](B3705['compile-js'], env__3751)
            ]
        ]));
    };
    B1196['%annotate-function'](compile_expression, 'compile-expression', false);
}
{
    var executable_path = function B3761(module_name__3762) {
        return(B1446['resolve-path']('build', B1196['concatenate'](module_name__3762, '.js')));
    };
    B1196['%annotate-function'](executable_path, 'executable-path', false);
}
{
    var module_path = function B3764(base_path__3765, module_name__3766) {
        return(B1446['resolve-path'](base_path__3765, B1196['concatenate'](module_name__3766, '.rm')));
    };
    B1196['%annotate-function'](module_path, 'module-path', false);
}
{
    var source_path = function B3768(module_name__3769) {
        return(B1446['resolve-path']('src', B1196['concatenate'](module_name__3769, '.ralph')));
    };
    B1196['%annotate-function'](source_path, 'source-path', false);
}
{
    var recompileQ = function B3772(module_name__3773) {
        if (($T)(B1196['not'](B1196['get'](TmodulesT, module_name__3773, 'native?')))) {
            var path__3774 = executable_path(module_name__3773);
            {
                var B3775 = B1196['not'](B1446['file-exists?'](path__3774));
                if (($T)(B3775))
                    return(B3775);
                else {
                    var path2__3776 = source_path(module_name__3773);
                    return(B1196['<'](B1196['get'](B1446['file-properties'](path__3774), 'modification-date'), B1196['get'](B1446['file-properties'](path2__3776), 'modification-date')));
                }
            }
        } else
            return(false);
    };
    B1196['%annotate-function'](recompileQ, 'recompile?', false);
}
{
    var compile_form = function B3778(form__3779, stream__3780, env__3781) {
        B1444['stream-write'](stream__3780, compile_expression(form__3779, env__3781));
        return(B1444['stream-write'](stream__3780, '\n'));
    };
    B1196['%annotate-function'](compile_form, 'compile-form', false);
}
{
    var B3783 = $K('eof-error?');
    {
        var compile_stream = function B3784(input_stream__3785, output_stream__3786, env__3787) {
            var readQ__3788 = true;
            {
                while (($T)(readQ__3788)) {
                    var form__3789 = B2040['read'](input_stream__3785, env__3787, B3783, false);
                    {
                        readQ__3788 = B1196['not'](B1196['=='](form__3789, B2040['$end-of-file']));
                        if (($T)(readQ__3788))
                            compile_form(form__3789, output_stream__3786, env__3787);
                    }
                }
                return(false);
            }
        };
        B1196['%annotate-function'](compile_stream, 'compile-stream', false);
    }
}
{
    var B3792 = $K('module');
    {
        var B3793 = $K('special-forms');
        {
            var B3794 = $K('macros');
            {
                var B3795 = $K('symbol-macros');
                {
                    var B3796 = $K('path');
                    {
                        var B3797 = $K('direction');
                        {
                            var B3798 = $S('output');
                            {
                                var B3799 = $K('exports');
                                {
                                    var B3800 = $K('inline');
                                    {
                                        var B3801 = $K('dependencies');
                                        {
                                            {
                                                var compile_module = function B3802(module_name__3803) {
                                                    if (($T)(B1196['not'](B1196['has?'](TmodulesT, module_name__3803)))) {
                                                        var B3804 = read_module('src', module_name__3803);
                                                        if (($T)(B3804)) {
                                                            var module__3805 = B3804;
                                                            B1196['get-setter'](TmodulesT, module_name__3803, module__3805);
                                                        }
                                                    }
                                                    if (($T)(recompileQ(module_name__3803))) {
                                                        B1443['format-out']('Compiling: %s\n', module_name__3803);
                                                        {
                                                            if (($T)(B1196['not'](B1446['file-exists?'](source_path(module_name__3803)))))
                                                                B1196['signal'](B1443['format-to-string']('Unable to compile non-existing module \'%s\'', module_name__3803));
                                                            {
                                                                var module__3806 = B1196['make'](B1769['<module>'], B3740, module_name__3803);
                                                                {
                                                                    var env__3807 = B1196['make'](B1868['<environment>'], B3792, module__3806, B3793, B2952['$internal-special-forms'], B3794, Ball_macros, B3795, Ball_symbol_macros);
                                                                    {
                                                                        var target_path__3808 = executable_path(module_name__3803);
                                                                        {
                                                                            B1446['ensure-directories-exist'](target_path__3808);
                                                                            {
                                                                                var output_stream__3809 = B1196['make'](B1445['<file-stream>'], B3796, target_path__3808, B3797, B3798);
                                                                                {
                                                                                    var source__3810 = B1446['read-file'](source_path(module_name__3803));
                                                                                    {
                                                                                        var input_stream__3811 = B1196['make'](B1444['<string-stream>'], B3741, source__3810);
                                                                                        {
                                                                                            B1196['get-setter'](TmodulesT, module_name__3803, module__3806);
                                                                                            {
                                                                                                compile_form(TprologueT, output_stream__3809, env__3807);
                                                                                                {
                                                                                                    if (($T)(B1196['not'](B1196['=='](module_name__3803, 'ralph/core')))) {
                                                                                                        import_module(module__3806, 'ralph/core');
                                                                                                        compile_form(B1868['make-import-definition']('ralph/core', env__3807), output_stream__3809, env__3807);
                                                                                                    }
                                                                                                    {
                                                                                                        compile_stream(input_stream__3811, output_stream__3809, env__3807);
                                                                                                        {
                                                                                                            B1444['stream-close'](output_stream__3809);
                                                                                                            {
                                                                                                                B1446['write-file'](module_path('build', module_name__3803), B1196['description']([
                                                                                                                    module_name__3803,
                                                                                                                    B3799,
                                                                                                                    B1196['get'](module__3806, 'exports'),
                                                                                                                    B3800,
                                                                                                                    B1196['object-properties'](B1196['get'](module__3806, 'inline')),
                                                                                                                    B3801,
                                                                                                                    B1196['get'](module__3806, 'dependencies')
                                                                                                                ]));
                                                                                                                {
                                                                                                                    B1443['format-out']('Finished: %s\n', module_name__3803);
                                                                                                                    return(module__3806);
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
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(false);
                                                };
                                                Mexport('compile-module', compile_module);
                                            }
                                            B1196['%annotate-function'](compile_module, 'compile-module', false);
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
}
{
    var B3812 = $S('begin', 'ralph/core');
    {
        var B3813 = $S('%native', 'ralph/core');
        {
            var B3814 = $S('%define', 'ralph/core');
            {
                var B3815 = $S('%export');
                {
                    var B3816 = $S('method', 'ralph/core');
                    {
                        var B3817 = $S('name');
                        {
                            var B3818 = $S('value');
                            {
                                var B3819 = $S('set!', 'ralph/core');
                                {
                                    var B3820 = $S('%get-property', 'ralph/core');
                                    var TprologueT = [
                                            B3812,
                                            [
                                                B3813,
                                                'var $module = Object.create(null)'
                                            ],
                                            [
                                                B3814,
                                                B3815,
                                                [
                                                    B3816,
                                                    [
                                                        B3817,
                                                        B3818
                                                    ],
                                                    [
                                                        B3819,
                                                        [
                                                            B3820,
                                                            [
                                                                B3813,
                                                                'exports'
                                                            ],
                                                            B3817
                                                        ],
                                                        B3818
                                                    ]
                                                ]
                                            ]
                                        ];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
{
    var destructure_import = function B3822(import__3823) {
        var B3824 = B1196['symbol-name'];
        {
            var B3825 = false;
            if (($T)(B1196['instance?'](import__3823, B1196['<array>'])))
                B3825 = B1196['first'](import__3823);
            else
                B3825 = import__3823;
            {
                var B3826 = B3824(B3825);
                {
                    var B3827 = false;
                    if (($T)(B1196['instance?'](import__3823, B1196['<array>'])))
                        B3827 = B1196['rest'](import__3823);
                    else
                        B3827 = [];
                    return([
                        B3826,
                        B3827
                    ]);
                }
            }
        }
    };
    B1196['%annotate-function'](destructure_import, 'destructure-import', false);
}
B1196['get-setter'](B2606['$internal-macros'], 'define-module', function B3837(env__3838, ____3839) {
    var B3840 = $SL.call(arguments, 2);
    {
        var B3841 = B1196['%keys'](B3840, {
                'import': [],
                'export': [],
                'compile-time-import': [],
                'inline': []
            });
        {
            var import__3842 = B3841['import'];
            {
                var export__3843 = B3841['export'];
                {
                    var compile_time_import__3844 = B3841['compile-time-import'];
                    {
                        var inline__3845 = B3841['inline'];
                        {
                            var B3846 = env__3838;
                            {
                                var module__3847 = B3846['module'];
                                {
                                    var import_identifiers__3848 = B3846['import-identifiers'];
                                    {
                                        B1196['get-setter'](module__3847, 'exports', B1196['map'](B1734['identifier-name'], export__3843));
                                        {
                                            B1196['do'](function B3849(import__3850) {
                                                var B3851 = destructure_import(import__3850);
                                                {
                                                    var module_name__3852 = B3851[0];
                                                    {
                                                        var options__3853 = B3851[1];
                                                        return(B1196['apply'](compile_time_import_module, env__3838, module_name__3852, options__3853));
                                                    }
                                                }
                                            }, compile_time_import__3844);
                                            {
                                                B1196['do'](function B3854(name__3855) {
                                                    return(B1196['get-setter'](module__3847, 'inline', name__3855, true));
                                                }, B1196['map'](B1734['identifier-name'], inline__3845));
                                                return(B1196['%concat']([B3812], B1196['map'](function B3856(import__3857) {
                                                    var B3858 = destructure_import(import__3857);
                                                    {
                                                        var module_name__3859 = B3858[0];
                                                        {
                                                            var options__3860 = B3858[1];
                                                            {
                                                                B1196['apply'](import_module, module__3847, module_name__3859, options__3860);
                                                                return(B1868['make-import-definition'](module_name__3859, env__3838));
                                                            }
                                                        }
                                                    }
                                                }, import__3842)));
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
    }
});
var Ball_symbol_macros = B1196['make-plain-object']();
B1196['extend!'](Ball_symbol_macros, B2606['$internal-symbol-macros']);
B1196['extend!'](Ball_symbol_macros, B2606['$core-symbol-macros']);
var Ball_macros = B1196['make-plain-object']();
B1196['extend!'](Ball_macros, B2606['$internal-macros']);
B1196['extend!'](Ball_macros, B2606['$core-macros']);
B1196['do'](function B3862(name__3863) {
    if (($T)(B1196['not'](B1196['has?'](B2606['$internal-macros'], name__3863))))
        return(B1196['signal'](B1443['format-to-string']('No internal macro for special form: %s', name__3863)));
    else
        return(false);
}, B1196['object-properties'](B2952['$core-special-forms']));
