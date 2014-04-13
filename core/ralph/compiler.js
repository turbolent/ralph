{
    var $module = Object.create(null);
    ($module)['%export'] = function B2(name__3, value__4) {
        var B5 = (exports);
        return(B5[name__3] = value__4);
    };
}
var B1198 = require('ralph/core');
{
    var B1453 = require('ralph/format');
    {
        var B1454 = require('ralph/stream');
        {
            var B1455 = require('ralph/file-stream');
            {
                var B1456 = require('ralph/file-system');
                {
                    var B1558 = require('ralph/compiler/utilities');
                    {
                        var B1595 = require('ralph/compiler/module');
                        {
                            var B1698 = require('ralph/compiler/environment');
                            {
                                var B1878 = require('ralph/compiler/reader');
                                {
                                    var B2446 = require('ralph/compiler/macros');
                                    {
                                        var B2796 = require('ralph/compiler/special-forms');
                                        {
                                            var B2797 = require('ralph/compiler/macroexpansion');
                                            {
                                                var B2932 = require('ralph/compiler/symbol-lifting');
                                                {
                                                    var B3140 = require('ralph/compiler/alpha');
                                                    {
                                                        var B3275 = require('ralph/compiler/anf');
                                                        {
                                                            var B3434 = require('ralph/compiler/statements');
                                                            {
                                                                var B3570 = require('ralph/compiler/javascript');
                                                                var B3623 = require('ralph/compiler/compile');
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
($module)['*modules*'] = B1198['make-object']();
{
    ($module)['compile-time-import-module'] = function B3628(env__3629, module_name__3630) {
        var B3631 = $SL.call(arguments, 2);
        {
            var B3632 = B1198['%keys'](B3631, { 'options': false });
            {
                var options__3633 = B3632['options'];
                if (($T)(B1198['not'](B1198['=='](module_name__3630, 'ralph/core')))) {
                    ($module)['compile-module'](module_name__3630);
                    {
                        var definitions__3634 = require(module_name__3630);
                        {
                            var macros__3635 = B1198['make-plain-object']();
                            {
                                var symbol_macros__3636 = B1198['make-plain-object']();
                                {
                                    B1198['do'](function B3637(name__3638) {
                                        var definition__3639 = B1198['get'](definitions__3634, name__3638);
                                        if (($T)(B1198['get'](definition__3639, '%macro?')))
                                            return(B1198['get-setter'](macros__3635, name__3638, definition__3639));
                                        else if (($T)(B1198['get'](definition__3639, '%symbol-macro?')))
                                            return(B1198['get-setter'](symbol_macros__3636, name__3638, definition__3639));
                                        else
                                            return(false);
                                    }, B1198['apply'](B1558['process-import-names'], B1198['object-properties'](definitions__3634), options__3633));
                                    {
                                        B1198['chain-object'](macros__3635, B1198['get'](env__3629, 'macros'));
                                        {
                                            B1198['get-setter'](env__3629, 'macros', macros__3635);
                                            {
                                                B1198['chain-object'](symbol_macros__3636, B1198['get'](env__3629, 'symbol-macros'));
                                                return(B1198['get-setter'](env__3629, 'symbol-macros', symbol_macros__3636));
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
    B1198['%annotate-function'](($module)['compile-time-import-module'], 'compile-time-import-module', false);
}
{
    ($module)['import-module'] = function B3642(module__3643, module_name__3644) {
        var options__3645 = $SL.call(arguments, 2);
        {
            var B3646 = ($module)['find-module'](module_name__3644);
            if (($T)(B3646)) {
                var other_module__3647 = B3646;
                {
                    B1198['push'](B1198['get'](module__3643, 'imports'), [
                        other_module__3647,
                        B1198['apply'](B1558['process-import-names'], B1198['get'](other_module__3647, 'exports'), options__3645)
                    ]);
                    {
                        B1198['push'](B1198['get'](module__3643, 'dependencies'), module_name__3644);
                        return(other_module__3647);
                    }
                }
            } else
                return(B1198['signal'](B1453['format-to-string']('Unable to import module \'%s\'', module_name__3644)));
        }
    };
    B1198['%annotate-function'](($module)['import-module'], 'import-module', false);
}
{
    ($module)['find-module'] = function B3652(module_name__3653) {
        var B3654 = ($module)['compile-module'](module_name__3653);
        if (($T)(B3654))
            return(B3654);
        else {
            var B3655 = B1198['get'](($module)['*modules*'], module_name__3653);
            if (($T)(B3655))
                return(B3655);
            else {
                var B3656 = ($module)['read-module']('build', module_name__3653);
                if (($T)(B3656))
                    return(B3656);
                else
                    return(($module)['read-module']('src', module_name__3653));
            }
        }
    };
    B1198['%annotate-function'](($module)['find-module'], 'find-module', false);
}
{
    var B3658 = $K('name');
    {
        var B3659 = $K('string');
        {
            ($module)['read-module'] = function B3660(base_path__3661, module_name__3662) {
                var path__3663 = ($module)['module-path'](base_path__3661, module_name__3662);
                if (($T)(B1456['file-exists?'](path__3663)))
                    return(B1198['apply'](B1198['curry'](B1198['make'], B1595['<module>'], B3658), B1878['read'](B1198['make'](B1454['<string-stream>'], B3659, B1456['read-file'](path__3663)))));
                else
                    return(false);
            };
            B1198['%annotate-function'](($module)['read-module'], 'read-module', false);
        }
    }
}
{
    ($module)['executable-path'] = function B3665(module_name__3666) {
        return(B1456['resolve-path']('build', B1198['concatenate'](module_name__3666, '.js')));
    };
    B1198['%annotate-function'](($module)['executable-path'], 'executable-path', false);
}
{
    ($module)['module-path'] = function B3668(base_path__3669, module_name__3670) {
        return(B1456['resolve-path'](base_path__3669, B1198['concatenate'](module_name__3670, '.rm')));
    };
    B1198['%annotate-function'](($module)['module-path'], 'module-path', false);
}
{
    ($module)['source-path'] = function B3672(module_name__3673) {
        return(B1456['resolve-path']('src', B1198['concatenate'](module_name__3673, '.ralph')));
    };
    B1198['%annotate-function'](($module)['source-path'], 'source-path', false);
}
{
    ($module)['recompile?'] = function B3676(module_name__3677) {
        if (($T)(B1198['not'](B1198['get'](($module)['*modules*'], module_name__3677, 'native?')))) {
            var path__3678 = ($module)['executable-path'](module_name__3677);
            {
                var B3679 = B1198['not'](B1456['file-exists?'](path__3678));
                if (($T)(B3679))
                    return(B3679);
                else {
                    var path2__3680 = ($module)['source-path'](module_name__3677);
                    return(B1198['<'](B1198['get'](B1456['file-properties'](path__3678), 'modification-date'), B1198['get'](B1456['file-properties'](path2__3680), 'modification-date')));
                }
            }
        } else
            return(false);
    };
    B1198['%annotate-function'](($module)['recompile?'], 'recompile?', false);
}
{
    ($module)['compile-form'] = function B3682(form__3683, stream__3684, env__3685) {
        B1454['stream-write'](stream__3684, B3623['compile-to-string'](form__3683, env__3685));
        return(B1454['stream-write'](stream__3684, '\n'));
    };
    B1198['%annotate-function'](($module)['compile-form'], 'compile-form', false);
}
{
    var B3687 = $K('eof-error?');
    {
        ($module)['compile-stream'] = function B3688(input_stream__3689, output_stream__3690, env__3691) {
            var readQ__3692 = true;
            {
                while (($T)(readQ__3692)) {
                    var form__3693 = B1878['read'](input_stream__3689, env__3691, B3687, false);
                    {
                        readQ__3692 = B1198['not'](B1198['=='](form__3693, B1878['$end-of-file']));
                        if (($T)(readQ__3692))
                            ($module)['compile-form'](form__3693, output_stream__3690, env__3691);
                    }
                }
                return(false);
            }
        };
        B1198['%annotate-function'](($module)['compile-stream'], 'compile-stream', false);
    }
}
{
    var B3696 = $K('path');
    {
        var B3697 = $K('direction');
        {
            var B3698 = $S('output');
            {
                var B3699 = $K('exports');
                {
                    var B3700 = $K('inline');
                    {
                        var B3701 = $K('dependencies');
                        {
                            {
                                ($module)['compile-module'] = function B3702(module_name__3703) {
                                    if (($T)(B1198['not'](B1198['has?'](($module)['*modules*'], module_name__3703)))) {
                                        var B3704 = ($module)['read-module']('src', module_name__3703);
                                        if (($T)(B3704)) {
                                            var module__3705 = B3704;
                                            B1198['get-setter'](($module)['*modules*'], module_name__3703, module__3705);
                                        }
                                    }
                                    if (($T)(($module)['recompile?'](module_name__3703))) {
                                        B1453['format-out']('Compiling: %s\n', module_name__3703);
                                        {
                                            if (($T)(B1198['not'](B1456['file-exists?'](($module)['source-path'](module_name__3703)))))
                                                B1198['signal'](B1453['format-to-string']('Unable to compile non-existing module \'%s\'', module_name__3703));
                                            {
                                                var env__3706 = B3623['make-module-environment'](module_name__3703);
                                                {
                                                    var module__3707 = B1198['get'](env__3706, 'module');
                                                    {
                                                        var target_path__3708 = ($module)['executable-path'](module_name__3703);
                                                        {
                                                            B1456['ensure-directories-exist'](target_path__3708);
                                                            {
                                                                var output_stream__3709 = B1198['make'](B1455['<file-stream>'], B3696, target_path__3708, B3697, B3698);
                                                                {
                                                                    var source__3710 = B1456['read-file'](($module)['source-path'](module_name__3703));
                                                                    {
                                                                        var input_stream__3711 = B1198['make'](B1454['<string-stream>'], B3659, source__3710);
                                                                        {
                                                                            B1198['get-setter'](($module)['*modules*'], module_name__3703, module__3707);
                                                                            {
                                                                                ($module)['compile-form'](($module)['*prologue*'], output_stream__3709, env__3706);
                                                                                {
                                                                                    if (($T)(B1198['not'](B1198['=='](module_name__3703, 'ralph/core')))) {
                                                                                        ($module)['import-module'](module__3707, 'ralph/core');
                                                                                        ($module)['compile-form'](B1698['make-import-definition']('ralph/core', env__3706), output_stream__3709, env__3706);
                                                                                    }
                                                                                    {
                                                                                        ($module)['compile-stream'](input_stream__3711, output_stream__3709, env__3706);
                                                                                        {
                                                                                            ($module)['compile-form'](($module)['*epilogue*'], output_stream__3709, env__3706);
                                                                                            {
                                                                                                B1454['stream-close'](output_stream__3709);
                                                                                                {
                                                                                                    B1456['write-file'](($module)['module-path']('build', module_name__3703), B1198['description']([
                                                                                                        module_name__3703,
                                                                                                        B3699,
                                                                                                        B1198['get'](module__3707, 'exports'),
                                                                                                        B3700,
                                                                                                        B1198['object-properties'](B1198['get'](module__3707, 'inline')),
                                                                                                        B3701,
                                                                                                        B1198['get'](module__3707, 'dependencies')
                                                                                                    ]));
                                                                                                    {
                                                                                                        B1453['format-out']('Finished: %s\n', module_name__3703);
                                                                                                        return(module__3707);
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
                                    } else
                                        return(false);
                                };
                                ($module)['%export']('compile-module', ($module)['compile-module']);
                            }
                            B1198['%annotate-function'](($module)['compile-module'], 'compile-module', false);
                        }
                    }
                }
            }
        }
    }
}
{
    var B3712 = $S('begin', 'ralph/core');
    {
        var B3713 = $S('%native', 'ralph/core');
        {
            var B3714 = $S('%define', 'ralph/core');
            {
                var B3715 = $S('%export');
                {
                    var B3716 = $S('method', 'ralph/core');
                    {
                        var B3717 = $S('name');
                        {
                            var B3718 = $S('value');
                            {
                                var B3719 = $S('set!', 'ralph/core');
                                {
                                    var B3720 = $S('%get-property', 'ralph/core');
                                    ($module)['*prologue*'] = [
                                        B3712,
                                        [
                                            B3713,
                                            'var $module = Object.create(null)'
                                        ],
                                        [
                                            B3714,
                                            B3715,
                                            [
                                                B3716,
                                                [
                                                    B3717,
                                                    B3718
                                                ],
                                                [
                                                    B3719,
                                                    [
                                                        B3720,
                                                        [
                                                            B3713,
                                                            'exports'
                                                        ],
                                                        B3717
                                                    ],
                                                    B3718
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
    var B3721 = $S('define-function', 'ralph/core');
    {
        var B3722 = $S('%eval');
        {
            var B3723 = $S('%native-call', 'ralph/core');
            ($module)['*epilogue*'] = [
                B3712,
                [
                    B3721,
                    B3722,
                    [],
                    [
                        B3723,
                        'eval',
                        [
                            B3713,
                            'arguments[0]'
                        ]
                    ]
                ],
                [
                    B3715,
                    '%eval',
                    B3722
                ]
            ];
        }
    }
}
{
    ($module)['destructure-import'] = function B3725(import__3726) {
        var B3727 = B1198['symbol-name'];
        {
            var B3728 = false;
            if (($T)(B1198['instance?'](import__3726, B1198['<array>'])))
                B3728 = B1198['first'](import__3726);
            else
                B3728 = import__3726;
            {
                var B3729 = B3727(B3728);
                {
                    var B3730 = false;
                    if (($T)(B1198['instance?'](import__3726, B1198['<array>'])))
                        B3730 = B1198['rest'](import__3726);
                    else
                        B3730 = [];
                    return([
                        B3729,
                        B3730
                    ]);
                }
            }
        }
    };
    B1198['%annotate-function'](($module)['destructure-import'], 'destructure-import', false);
}
{
    var B3732 = $S('define-module', 'ralph/core');
    B1198['get-setter'](B2796['$core-special-forms'], 'define-module', function B3733(____3734) {
        var arguments__3735 = $SL.call(arguments, 1);
        return(B1198['%concat']([B3732], arguments__3735));
    });
}
B1198['get-setter'](B2446['$internal-macros'], 'define-module', function B3745(env__3746, ____3747) {
    var B3748 = $SL.call(arguments, 2);
    {
        var B3749 = B1198['%keys'](B3748, {
                'import': [],
                'export': [],
                'compile-time-import': [],
                'inline': []
            });
        {
            var import__3750 = B3749['import'];
            {
                var export__3751 = B3749['export'];
                {
                    var compile_time_import__3752 = B3749['compile-time-import'];
                    {
                        var inline__3753 = B3749['inline'];
                        {
                            var B3754 = env__3746;
                            {
                                var module__3755 = B3754['module'];
                                {
                                    var import_identifiers__3756 = B3754['import-identifiers'];
                                    {
                                        B1198['get-setter'](module__3755, 'exports', B1198['map'](B1558['identifier-name'], export__3751));
                                        {
                                            B1198['do'](function B3757(import__3758) {
                                                var B3759 = ($module)['destructure-import'](import__3758);
                                                {
                                                    var module_name__3760 = B3759[0];
                                                    {
                                                        var options__3761 = B3759[1];
                                                        return(B1198['apply'](($module)['compile-time-import-module'], env__3746, module_name__3760, options__3761));
                                                    }
                                                }
                                            }, compile_time_import__3752);
                                            {
                                                B1198['do'](function B3762(name__3763) {
                                                    return(B1198['get-setter'](module__3755, 'inline', name__3763, true));
                                                }, B1198['map'](B1558['identifier-name'], inline__3753));
                                                return(B1198['%concat']([B3712], B1198['map'](function B3764(import__3765) {
                                                    var B3766 = ($module)['destructure-import'](import__3765);
                                                    {
                                                        var module_name__3767 = B3766[0];
                                                        {
                                                            var options__3768 = B3766[1];
                                                            {
                                                                B1198['apply'](($module)['import-module'], module__3755, module_name__3767, options__3768);
                                                                return(B1698['make-import-definition'](module_name__3767, env__3746));
                                                            }
                                                        }
                                                    }
                                                }, import__3750)));
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
{
    ($module)['%eval'] = function B3770() {
        return(eval((arguments[0])));
    };
    {
        B1198['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
