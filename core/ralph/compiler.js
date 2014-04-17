require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3(name__4, value__5) {
            var B7 = (exports);
            return(B7[name__4] = value__5);
        };
        {
            ($module)['%eval'] = function B6() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1222 = require('ralph/core');
{
    var B1342 = require('ralph/format');
    {
        var B1487 = require('ralph/format-out');
        {
            var B1488 = require('ralph/stream');
            {
                var B1489 = require('ralph/file-stream');
                {
                    var B1490 = require('ralph/file-system');
                    {
                        var B1592 = require('ralph/compiler/utilities');
                        {
                            var B1641 = require('ralph/compiler/module');
                            {
                                var B1747 = require('ralph/compiler/environment');
                                {
                                    var B1927 = require('ralph/compiler/reader');
                                    {
                                        var B2495 = require('ralph/compiler/macros');
                                        {
                                            var B2845 = require('ralph/compiler/special-forms');
                                            {
                                                var B2846 = require('ralph/compiler/macroexpansion');
                                                {
                                                    var B2982 = require('ralph/compiler/symbol-lifting');
                                                    {
                                                        var B3190 = require('ralph/compiler/alpha');
                                                        {
                                                            var B3325 = require('ralph/compiler/anf');
                                                            {
                                                                var B3484 = require('ralph/compiler/statements');
                                                                {
                                                                    var B3620 = require('ralph/compiler/javascript');
                                                                    var B3677 = require('ralph/compiler/compile');
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
}
($module)['*modules*'] = B1222['make-object']();
{
    ($module)['compile-time-import-module'] = function B3682(env__3683, module_name__3684) {
        var B3685 = $SL.call(arguments, 2);
        {
            var B3686 = B1222['%keys'](B3685, { 'options': false });
            {
                var options__3687 = B3686['options'];
                if (($T)(B1222['not'](B1222['=='](module_name__3684, 'ralph/core')))) {
                    ($module)['compile-module'](module_name__3684);
                    {
                        var definitions__3688 = require(module_name__3684);
                        {
                            var macros__3689 = B1222['make-plain-object']();
                            {
                                var symbol_macros__3690 = B1222['make-plain-object']();
                                {
                                    B1222['do'](function B3691(name__3692) {
                                        var definition__3693 = B1222['get'](definitions__3688, name__3692);
                                        if (($T)(B1222['get'](definition__3693, '%macro?')))
                                            return(B1222['get-setter'](macros__3689, name__3692, definition__3693));
                                        else if (($T)(B1222['get'](definition__3693, '%symbol-macro?')))
                                            return(B1222['get-setter'](symbol_macros__3690, name__3692, definition__3693));
                                        else
                                            return(false);
                                    }, B1222['apply'](B1592['process-import-names'], B1222['object-properties'](definitions__3688), options__3687));
                                    {
                                        B1222['chain-object'](macros__3689, B1222['get'](env__3683, 'macros'));
                                        {
                                            B1222['get-setter'](env__3683, 'macros', macros__3689);
                                            {
                                                B1222['chain-object'](symbol_macros__3690, B1222['get'](env__3683, 'symbol-macros'));
                                                return(B1222['get-setter'](env__3683, 'symbol-macros', symbol_macros__3690));
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
    B1222['%annotate-function'](($module)['compile-time-import-module'], 'compile-time-import-module', false);
}
{
    ($module)['import-module'] = function B3696(module__3697, module_name__3698) {
        var options__3699 = $SL.call(arguments, 2);
        {
            var B3700 = ($module)['find-module'](module_name__3698);
            if (($T)(B3700)) {
                var other_module__3701 = B3700;
                {
                    B1222['push'](B1222['get'](module__3697, 'imports'), [
                        other_module__3701,
                        B1222['apply'](B1592['process-import-names'], B1222['get'](other_module__3701, 'exports'), options__3699)
                    ]);
                    {
                        B1222['push'](B1222['get'](module__3697, 'dependencies'), module_name__3698);
                        return(other_module__3701);
                    }
                }
            } else
                return(B1222['signal'](B1342['format-to-string']('Unable to import module \'%s\'', module_name__3698)));
        }
    };
    B1222['%annotate-function'](($module)['import-module'], 'import-module', false);
}
{
    ($module)['find-module'] = function B3706(module_name__3707) {
        var B3708 = ($module)['compile-module'](module_name__3707);
        if (($T)(B3708))
            return(B3708);
        else {
            var B3709 = B1222['get'](($module)['*modules*'], module_name__3707);
            if (($T)(B3709))
                return(B3709);
            else {
                var B3710 = ($module)['read-module']('build', module_name__3707);
                if (($T)(B3710))
                    return(B3710);
                else
                    return(($module)['read-module']('src', module_name__3707));
            }
        }
    };
    B1222['%annotate-function'](($module)['find-module'], 'find-module', false);
}
{
    var B3712 = $K('name');
    {
        var B3713 = $K('string');
        {
            ($module)['read-module'] = function B3714(base_path__3715, module_name__3716) {
                var path__3717 = ($module)['module-path'](base_path__3715, module_name__3716);
                if (($T)(B1490['file-exists?'](path__3717)))
                    return(B1222['apply'](B1222['curry'](B1222['make'], B1641['<module>'], B3712), B1927['read'](B1222['make'](B1488['<string-stream>'], B3713, B1490['read-file'](path__3717)))));
                else
                    return(false);
            };
            B1222['%annotate-function'](($module)['read-module'], 'read-module', false);
        }
    }
}
{
    ($module)['executable-path'] = function B3719(module_name__3720) {
        return(B1490['resolve-path']('build', B1222['concatenate'](module_name__3720, '.js')));
    };
    B1222['%annotate-function'](($module)['executable-path'], 'executable-path', false);
}
{
    ($module)['module-path'] = function B3722(base_path__3723, module_name__3724) {
        return(B1490['resolve-path'](base_path__3723, B1222['concatenate'](module_name__3724, '.rm')));
    };
    B1222['%annotate-function'](($module)['module-path'], 'module-path', false);
}
{
    ($module)['source-path'] = function B3726(module_name__3727) {
        return(B1490['resolve-path']('src', B1222['concatenate'](module_name__3727, '.ralph')));
    };
    B1222['%annotate-function'](($module)['source-path'], 'source-path', false);
}
{
    ($module)['recompile?'] = function B3730(module_name__3731) {
        if (($T)(B1222['not'](B1222['get'](($module)['*modules*'], module_name__3731, 'native?')))) {
            var path__3732 = ($module)['executable-path'](module_name__3731);
            {
                var B3733 = B1222['not'](B1490['file-exists?'](path__3732));
                if (($T)(B3733))
                    return(B3733);
                else {
                    var path2__3734 = ($module)['source-path'](module_name__3731);
                    return(B1222['<'](B1222['get'](B1490['file-properties'](path__3732), 'modification-date'), B1222['get'](B1490['file-properties'](path2__3734), 'modification-date')));
                }
            }
        } else
            return(false);
    };
    B1222['%annotate-function'](($module)['recompile?'], 'recompile?', false);
}
{
    ($module)['compile-form'] = function B3736(form__3737, stream__3738, env__3739) {
        B1488['stream-write'](stream__3738, B3677['compile-to-string'](form__3737, env__3739));
        return(B1488['stream-write'](stream__3738, '\n'));
    };
    B1222['%annotate-function'](($module)['compile-form'], 'compile-form', false);
}
{
    var B3741 = $K('eof-error?');
    {
        ($module)['compile-stream'] = function B3742(input_stream__3743, output_stream__3744, env__3745) {
            var readQ__3746 = true;
            {
                while (($T)(readQ__3746)) {
                    var form__3747 = B1927['read'](input_stream__3743, env__3745, B3741, false);
                    {
                        readQ__3746 = B1222['not'](B1222['=='](form__3747, B1927['$end-of-file']));
                        if (($T)(readQ__3746))
                            ($module)['compile-form'](form__3747, output_stream__3744, env__3745);
                    }
                }
                return(false);
            }
        };
        B1222['%annotate-function'](($module)['compile-stream'], 'compile-stream', false);
    }
}
{
    var B3750 = $K('path');
    {
        var B3751 = $K('direction');
        {
            var B3752 = $S('output');
            {
                var B3753 = $S('%native');
                {
                    var B3754 = $K('exports');
                    {
                        var B3755 = $K('inline');
                        {
                            var B3756 = $K('dependencies');
                            {
                                {
                                    ($module)['compile-module'] = function B3757(module_name__3758) {
                                        if (($T)(B1222['not'](B1222['has?'](($module)['*modules*'], module_name__3758)))) {
                                            var B3759 = ($module)['read-module']('src', module_name__3758);
                                            if (($T)(B3759)) {
                                                var module__3760 = B3759;
                                                B1222['get-setter'](($module)['*modules*'], module_name__3758, module__3760);
                                            }
                                        }
                                        if (($T)(($module)['recompile?'](module_name__3758))) {
                                            B1487['format-out']('Compiling: %s\n', module_name__3758);
                                            {
                                                if (($T)(B1222['not'](B1490['file-exists?'](($module)['source-path'](module_name__3758)))))
                                                    B1222['signal'](B1342['format-to-string']('Unable to compile non-existing module \'%s\'', module_name__3758));
                                                {
                                                    var env__3761 = B3677['make-module-environment'](module_name__3758);
                                                    {
                                                        var module__3762 = B1222['get'](env__3761, 'module');
                                                        {
                                                            var target_path__3763 = ($module)['executable-path'](module_name__3758);
                                                            {
                                                                B1490['ensure-directories-exist'](target_path__3763);
                                                                {
                                                                    var output_stream__3764 = B1222['make'](B1489['<file-stream>'], B3750, target_path__3763, B3751, B3752);
                                                                    {
                                                                        var source__3765 = B1490['read-file'](($module)['source-path'](module_name__3758));
                                                                        {
                                                                            var input_stream__3766 = B1222['make'](B1488['<string-stream>'], B3713, source__3765);
                                                                            {
                                                                                B1222['get-setter'](($module)['*modules*'], module_name__3758, module__3762);
                                                                                {
                                                                                    if (($T)(B1222['=='](module_name__3758, 'ralph/core'))) {
                                                                                        ($module)['compile-form']([
                                                                                            B3753,
                                                                                            '$moduleRoot = Object.create(null)'
                                                                                        ], output_stream__3764, env__3761);
                                                                                        ($module)['compile-form'](B1641['*module-prologue*'], output_stream__3764, env__3761);
                                                                                    } else {
                                                                                        ($module)['compile-form']([
                                                                                            B3753,
                                                                                            'require(\'ralph/core\')'
                                                                                        ], output_stream__3764, env__3761);
                                                                                        {
                                                                                            ($module)['compile-form'](B1641['*module-prologue*'], output_stream__3764, env__3761);
                                                                                            {
                                                                                                ($module)['import-module'](module__3762, 'ralph/core');
                                                                                                ($module)['compile-form'](B1747['make-import-definition']('ralph/core', env__3761), output_stream__3764, env__3761);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    {
                                                                                        ($module)['compile-stream'](input_stream__3766, output_stream__3764, env__3761);
                                                                                        {
                                                                                            B1488['stream-close'](output_stream__3764);
                                                                                            {
                                                                                                B1490['write-file'](($module)['module-path']('build', module_name__3758), B1222['description']([
                                                                                                    module_name__3758,
                                                                                                    B3754,
                                                                                                    B1222['get'](module__3762, 'exports'),
                                                                                                    B3755,
                                                                                                    B1222['object-properties'](B1222['get'](module__3762, 'inline')),
                                                                                                    B3756,
                                                                                                    B1222['get'](module__3762, 'dependencies')
                                                                                                ]));
                                                                                                {
                                                                                                    B1487['format-out']('Finished: %s\n', module_name__3758);
                                                                                                    return(module__3762);
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
                                B1222['%annotate-function'](($module)['compile-module'], 'compile-module', false);
                            }
                        }
                    }
                }
            }
        }
    }
}
{
    ($module)['destructure-import'] = function B3768(import__3769) {
        var B3770 = B1222['symbol-name'];
        {
            var B3771 = false;
            if (($T)(B1222['instance?'](import__3769, B1222['<array>'])))
                B3771 = B1222['first'](import__3769);
            else
                B3771 = import__3769;
            {
                var B3772 = B3770(B3771);
                {
                    var B3773 = false;
                    if (($T)(B1222['instance?'](import__3769, B1222['<array>'])))
                        B3773 = B1222['rest'](import__3769);
                    else
                        B3773 = [];
                    return([
                        B3772,
                        B3773
                    ]);
                }
            }
        }
    };
    B1222['%annotate-function'](($module)['destructure-import'], 'destructure-import', false);
}
{
    var B3775 = $S('define-module', 'ralph/core');
    B1222['get-setter'](B2845['$core-special-forms'], 'define-module', function B3776(____3777) {
        var arguments__3778 = $SL.call(arguments, 1);
        return(B1222['%concat']([B3775], arguments__3778));
    });
}
{
    var B3788 = $S('begin', 'ralph/core');
    B1222['get-setter'](B2495['$internal-macros'], 'define-module', function B3789(env__3790, ____3791) {
        var B3792 = $SL.call(arguments, 2);
        {
            var B3793 = B1222['%keys'](B3792, {
                    'import': [],
                    'export': [],
                    'compile-time-import': [],
                    'inline': []
                });
            {
                var import__3794 = B3793['import'];
                {
                    var export__3795 = B3793['export'];
                    {
                        var compile_time_import__3796 = B3793['compile-time-import'];
                        {
                            var inline__3797 = B3793['inline'];
                            {
                                var B3798 = env__3790;
                                {
                                    var module__3799 = B3798['module'];
                                    {
                                        var import_identifiers__3800 = B3798['import-identifiers'];
                                        {
                                            B1222['get-setter'](module__3799, 'exports', B1222['map'](B1592['identifier-name'], export__3795));
                                            {
                                                B1222['do'](function B3801(import__3802) {
                                                    var B3803 = ($module)['destructure-import'](import__3802);
                                                    {
                                                        var module_name__3804 = B3803[0];
                                                        {
                                                            var options__3805 = B3803[1];
                                                            return(B1222['apply'](($module)['compile-time-import-module'], env__3790, module_name__3804, options__3805));
                                                        }
                                                    }
                                                }, compile_time_import__3796);
                                                {
                                                    B1222['do'](function B3806(name__3807) {
                                                        return(B1222['get-setter'](module__3799, 'inline', name__3807, true));
                                                    }, B1222['map'](B1592['identifier-name'], inline__3797));
                                                    return(B1222['%concat']([B3788], B1222['map'](function B3808(import__3809) {
                                                        var B3810 = ($module)['destructure-import'](import__3809);
                                                        {
                                                            var module_name__3811 = B3810[0];
                                                            {
                                                                var options__3812 = B3810[1];
                                                                {
                                                                    B1222['apply'](($module)['import-module'], module__3799, module_name__3811, options__3812);
                                                                    return(B1747['make-import-definition'](module_name__3811, env__3790));
                                                                }
                                                            }
                                                        }
                                                    }, import__3794)));
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
}
