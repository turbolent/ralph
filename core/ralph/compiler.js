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
                                            var B2847 = require('ralph/compiler/special-forms');
                                            {
                                                var B2848 = require('ralph/compiler/macroexpansion');
                                                {
                                                    var B2984 = require('ralph/compiler/symbol-lifting');
                                                    {
                                                        var B3192 = require('ralph/compiler/alpha');
                                                        {
                                                            var B3327 = require('ralph/compiler/anf');
                                                            {
                                                                var B3486 = require('ralph/compiler/statements');
                                                                {
                                                                    var B3622 = require('ralph/compiler/javascript');
                                                                    var B3679 = require('ralph/compiler/compile');
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
    ($module)['compile-time-import-module'] = function B3684(env__3685, module_name__3686) {
        var B3687 = $SL.call(arguments, 2);
        {
            var B3688 = B1222['%keys'](B3687, { 'options': false });
            {
                var options__3689 = B3688['options'];
                if (($T)(B1222['not'](B1222['=='](module_name__3686, 'ralph/core')))) {
                    ($module)['compile-module'](module_name__3686);
                    {
                        var definitions__3690 = require(module_name__3686);
                        {
                            var macros__3691 = B1222['make-plain-object']();
                            {
                                var symbol_macros__3692 = B1222['make-plain-object']();
                                {
                                    B1222['do'](function B3693(name__3694) {
                                        var definition__3695 = B1222['get'](definitions__3690, name__3694);
                                        if (($T)(B1222['get'](definition__3695, '%macro?')))
                                            return(B1222['get-setter'](macros__3691, name__3694, definition__3695));
                                        else if (($T)(B1222['get'](definition__3695, '%symbol-macro?')))
                                            return(B1222['get-setter'](symbol_macros__3692, name__3694, definition__3695));
                                        else
                                            return(false);
                                    }, B1222['apply'](B1592['process-import-names'], B1222['object-properties'](definitions__3690), options__3689));
                                    {
                                        B1222['chain-object'](macros__3691, B1222['get'](env__3685, 'macros'));
                                        {
                                            B1222['get-setter'](env__3685, 'macros', macros__3691);
                                            {
                                                B1222['chain-object'](symbol_macros__3692, B1222['get'](env__3685, 'symbol-macros'));
                                                return(B1222['get-setter'](env__3685, 'symbol-macros', symbol_macros__3692));
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
    ($module)['import-module'] = function B3698(module__3699, module_name__3700) {
        var options__3701 = $SL.call(arguments, 2);
        {
            var B3702 = ($module)['find-module'](module_name__3700);
            if (($T)(B3702)) {
                var other_module__3703 = B3702;
                {
                    B1222['push'](B1222['get'](module__3699, 'imports'), [
                        other_module__3703,
                        B1222['apply'](B1592['process-import-names'], B1222['get'](other_module__3703, 'exports'), options__3701)
                    ]);
                    {
                        B1222['push'](B1222['get'](module__3699, 'dependencies'), module_name__3700);
                        return(other_module__3703);
                    }
                }
            } else
                return(B1222['signal'](B1342['format-to-string']('Unable to import module \'%s\'', module_name__3700)));
        }
    };
    B1222['%annotate-function'](($module)['import-module'], 'import-module', false);
}
{
    ($module)['find-module'] = function B3708(module_name__3709) {
        var B3710 = ($module)['compile-module'](module_name__3709);
        if (($T)(B3710))
            return(B3710);
        else {
            var B3711 = B1222['get'](($module)['*modules*'], module_name__3709);
            if (($T)(B3711))
                return(B3711);
            else {
                var B3712 = ($module)['read-module']('build', module_name__3709);
                if (($T)(B3712))
                    return(B3712);
                else
                    return(($module)['read-module']('src', module_name__3709));
            }
        }
    };
    B1222['%annotate-function'](($module)['find-module'], 'find-module', false);
}
{
    var B3714 = $K('name');
    {
        var B3715 = $K('string');
        {
            ($module)['read-module'] = function B3716(base_path__3717, module_name__3718) {
                var path__3719 = ($module)['module-path'](base_path__3717, module_name__3718);
                if (($T)(B1490['file-exists?'](path__3719)))
                    return(B1222['apply'](B1222['curry'](B1222['make'], B1641['<module>'], B3714), B1927['read'](B1222['make'](B1488['<string-stream>'], B3715, B1490['read-file'](path__3719)))));
                else
                    return(false);
            };
            B1222['%annotate-function'](($module)['read-module'], 'read-module', false);
        }
    }
}
{
    ($module)['executable-path'] = function B3721(module_name__3722) {
        return(B1490['resolve-path']('build', B1222['concatenate'](module_name__3722, '.js')));
    };
    B1222['%annotate-function'](($module)['executable-path'], 'executable-path', false);
}
{
    ($module)['module-path'] = function B3724(base_path__3725, module_name__3726) {
        return(B1490['resolve-path'](base_path__3725, B1222['concatenate'](module_name__3726, '.rm')));
    };
    B1222['%annotate-function'](($module)['module-path'], 'module-path', false);
}
{
    ($module)['source-path'] = function B3728(module_name__3729) {
        return(B1490['resolve-path']('src', B1222['concatenate'](module_name__3729, '.ralph')));
    };
    B1222['%annotate-function'](($module)['source-path'], 'source-path', false);
}
{
    ($module)['recompile?'] = function B3732(module_name__3733) {
        if (($T)(B1222['not'](B1222['get'](($module)['*modules*'], module_name__3733, 'native?')))) {
            var path__3734 = ($module)['executable-path'](module_name__3733);
            {
                var B3735 = B1222['not'](B1490['file-exists?'](path__3734));
                if (($T)(B3735))
                    return(B3735);
                else {
                    var path2__3736 = ($module)['source-path'](module_name__3733);
                    return(B1222['<'](B1222['get'](B1490['file-properties'](path__3734), 'modification-date'), B1222['get'](B1490['file-properties'](path2__3736), 'modification-date')));
                }
            }
        } else
            return(false);
    };
    B1222['%annotate-function'](($module)['recompile?'], 'recompile?', false);
}
{
    ($module)['compile-form'] = function B3738(form__3739, stream__3740, env__3741) {
        B1488['stream-write'](stream__3740, B3679['compile-to-string'](form__3739, env__3741));
        return(B1488['stream-write'](stream__3740, '\n'));
    };
    B1222['%annotate-function'](($module)['compile-form'], 'compile-form', false);
}
{
    var B3743 = $K('eof-error?');
    {
        ($module)['compile-stream'] = function B3744(input_stream__3745, output_stream__3746, env__3747) {
            var readQ__3748 = true;
            {
                while (($T)(readQ__3748)) {
                    var form__3749 = B1927['read'](input_stream__3745, env__3747, B3743, false);
                    {
                        readQ__3748 = B1222['not'](B1222['=='](form__3749, B1927['$end-of-file']));
                        if (($T)(readQ__3748))
                            ($module)['compile-form'](form__3749, output_stream__3746, env__3747);
                    }
                }
                return(false);
            }
        };
        B1222['%annotate-function'](($module)['compile-stream'], 'compile-stream', false);
    }
}
{
    var B3752 = $K('path');
    {
        var B3753 = $K('direction');
        {
            var B3754 = $S('output');
            {
                var B3755 = $S('%native');
                {
                    var B3756 = $K('exports');
                    {
                        var B3757 = $K('inline');
                        {
                            var B3758 = $K('dependencies');
                            {
                                {
                                    ($module)['compile-module'] = function B3759(module_name__3760) {
                                        if (($T)(B1222['not'](B1222['has?'](($module)['*modules*'], module_name__3760)))) {
                                            var B3761 = ($module)['read-module']('src', module_name__3760);
                                            if (($T)(B3761)) {
                                                var module__3762 = B3761;
                                                B1222['get-setter'](($module)['*modules*'], module_name__3760, module__3762);
                                            }
                                        }
                                        if (($T)(($module)['recompile?'](module_name__3760))) {
                                            B1487['format-out']('Compiling: %s\n', module_name__3760);
                                            {
                                                if (($T)(B1222['not'](B1490['file-exists?'](($module)['source-path'](module_name__3760)))))
                                                    B1222['signal'](B1342['format-to-string']('Unable to compile non-existing module \'%s\'', module_name__3760));
                                                {
                                                    var env__3763 = B3679['make-module-environment'](module_name__3760);
                                                    {
                                                        var module__3764 = B1222['get'](env__3763, 'module');
                                                        {
                                                            var target_path__3765 = ($module)['executable-path'](module_name__3760);
                                                            {
                                                                B1490['ensure-directories-exist'](target_path__3765);
                                                                {
                                                                    var output_stream__3766 = B1222['make'](B1489['<file-stream>'], B3752, target_path__3765, B3753, B3754);
                                                                    {
                                                                        var source__3767 = B1490['read-file'](($module)['source-path'](module_name__3760));
                                                                        {
                                                                            var input_stream__3768 = B1222['make'](B1488['<string-stream>'], B3715, source__3767);
                                                                            {
                                                                                B1222['get-setter'](($module)['*modules*'], module_name__3760, module__3764);
                                                                                {
                                                                                    if (($T)(B1222['=='](module_name__3760, 'ralph/core'))) {
                                                                                        ($module)['compile-form']([
                                                                                            B3755,
                                                                                            '$moduleRoot = Object.create(null)'
                                                                                        ], output_stream__3766, env__3763);
                                                                                        ($module)['compile-form'](B1641['*module-prologue*'], output_stream__3766, env__3763);
                                                                                    } else {
                                                                                        ($module)['compile-form']([
                                                                                            B3755,
                                                                                            'require(\'ralph/core\')'
                                                                                        ], output_stream__3766, env__3763);
                                                                                        {
                                                                                            ($module)['compile-form'](B1641['*module-prologue*'], output_stream__3766, env__3763);
                                                                                            {
                                                                                                ($module)['import-module'](module__3764, 'ralph/core');
                                                                                                ($module)['compile-form'](B1747['make-import-definition']('ralph/core', env__3763), output_stream__3766, env__3763);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    {
                                                                                        ($module)['compile-stream'](input_stream__3768, output_stream__3766, env__3763);
                                                                                        {
                                                                                            B1488['stream-close'](output_stream__3766);
                                                                                            {
                                                                                                B1490['write-file'](($module)['module-path']('build', module_name__3760), B1222['description']([
                                                                                                    module_name__3760,
                                                                                                    B3756,
                                                                                                    B1222['get'](module__3764, 'exports'),
                                                                                                    B3757,
                                                                                                    B1222['object-properties'](B1222['get'](module__3764, 'inline')),
                                                                                                    B3758,
                                                                                                    B1222['get'](module__3764, 'dependencies')
                                                                                                ]));
                                                                                                {
                                                                                                    B1487['format-out']('Finished: %s\n', module_name__3760);
                                                                                                    return(module__3764);
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
    ($module)['destructure-import'] = function B3770(import__3771) {
        var B3772 = B1222['symbol-name'];
        {
            var B3773 = false;
            if (($T)(B1222['instance?'](import__3771, B1222['<array>'])))
                B3773 = B1222['first'](import__3771);
            else
                B3773 = import__3771;
            {
                var B3774 = B3772(B3773);
                {
                    var B3775 = false;
                    if (($T)(B1222['instance?'](import__3771, B1222['<array>'])))
                        B3775 = B1222['rest'](import__3771);
                    else
                        B3775 = [];
                    return([
                        B3774,
                        B3775
                    ]);
                }
            }
        }
    };
    B1222['%annotate-function'](($module)['destructure-import'], 'destructure-import', false);
}
{
    var B3777 = $S('define-module', 'ralph/core');
    B1222['get-setter'](B2847['$core-special-forms'], 'define-module', function B3778(____3779) {
        var arguments__3780 = $SL.call(arguments, 1);
        return(B1222['%concat']([B3777], arguments__3780));
    });
}
{
    var B3790 = $S('begin', 'ralph/core');
    B1222['get-setter'](B2495['$internal-macros'], 'define-module', function B3791(env__3792, ____3793) {
        var B3794 = $SL.call(arguments, 2);
        {
            var B3795 = B1222['%keys'](B3794, {
                    'import': [],
                    'export': [],
                    'compile-time-import': [],
                    'inline': []
                });
            {
                var import__3796 = B3795['import'];
                {
                    var export__3797 = B3795['export'];
                    {
                        var compile_time_import__3798 = B3795['compile-time-import'];
                        {
                            var inline__3799 = B3795['inline'];
                            {
                                var B3800 = env__3792;
                                {
                                    var module__3801 = B3800['module'];
                                    {
                                        var import_identifiers__3802 = B3800['import-identifiers'];
                                        {
                                            B1222['get-setter'](module__3801, 'exports', B1222['map'](B1592['identifier-name'], export__3797));
                                            {
                                                B1222['do'](function B3803(import__3804) {
                                                    var B3805 = ($module)['destructure-import'](import__3804);
                                                    {
                                                        var module_name__3806 = B3805[0];
                                                        {
                                                            var options__3807 = B3805[1];
                                                            return(B1222['apply'](($module)['compile-time-import-module'], env__3792, module_name__3806, options__3807));
                                                        }
                                                    }
                                                }, compile_time_import__3798);
                                                {
                                                    B1222['do'](function B3808(name__3809) {
                                                        return(B1222['get-setter'](module__3801, 'inline', name__3809, true));
                                                    }, B1222['map'](B1592['identifier-name'], inline__3799));
                                                    return(B1222['%concat']([B3790], B1222['map'](function B3810(import__3811) {
                                                        var B3812 = ($module)['destructure-import'](import__3811);
                                                        {
                                                            var module_name__3813 = B3812[0];
                                                            {
                                                                var options__3814 = B3812[1];
                                                                {
                                                                    B1222['apply'](($module)['import-module'], module__3801, module_name__3813, options__3814);
                                                                    return(B1747['make-import-definition'](module_name__3813, env__3792));
                                                                }
                                                            }
                                                        }
                                                    }, import__3796)));
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
