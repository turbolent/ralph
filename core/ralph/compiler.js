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
    var B1477 = require('ralph/format');
    {
        var B1478 = require('ralph/stream');
        {
            var B1479 = require('ralph/file-stream');
            {
                var B1480 = require('ralph/file-system');
                {
                    var B1582 = require('ralph/compiler/utilities');
                    {
                        var B1631 = require('ralph/compiler/module');
                        {
                            var B1737 = require('ralph/compiler/environment');
                            {
                                var B1917 = require('ralph/compiler/reader');
                                {
                                    var B2485 = require('ralph/compiler/macros');
                                    {
                                        var B2835 = require('ralph/compiler/special-forms');
                                        {
                                            var B2836 = require('ralph/compiler/macroexpansion');
                                            {
                                                var B2972 = require('ralph/compiler/symbol-lifting');
                                                {
                                                    var B3180 = require('ralph/compiler/alpha');
                                                    {
                                                        var B3315 = require('ralph/compiler/anf');
                                                        {
                                                            var B3474 = require('ralph/compiler/statements');
                                                            {
                                                                var B3610 = require('ralph/compiler/javascript');
                                                                var B3667 = require('ralph/compiler/compile');
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
    ($module)['compile-time-import-module'] = function B3672(env__3673, module_name__3674) {
        var B3675 = $SL.call(arguments, 2);
        {
            var B3676 = B1222['%keys'](B3675, { 'options': false });
            {
                var options__3677 = B3676['options'];
                if (($T)(B1222['not'](B1222['=='](module_name__3674, 'ralph/core')))) {
                    ($module)['compile-module'](module_name__3674);
                    {
                        var definitions__3678 = require(module_name__3674);
                        {
                            var macros__3679 = B1222['make-plain-object']();
                            {
                                var symbol_macros__3680 = B1222['make-plain-object']();
                                {
                                    B1222['do'](function B3681(name__3682) {
                                        var definition__3683 = B1222['get'](definitions__3678, name__3682);
                                        if (($T)(B1222['get'](definition__3683, '%macro?')))
                                            return(B1222['get-setter'](macros__3679, name__3682, definition__3683));
                                        else if (($T)(B1222['get'](definition__3683, '%symbol-macro?')))
                                            return(B1222['get-setter'](symbol_macros__3680, name__3682, definition__3683));
                                        else
                                            return(false);
                                    }, B1222['apply'](B1582['process-import-names'], B1222['object-properties'](definitions__3678), options__3677));
                                    {
                                        B1222['chain-object'](macros__3679, B1222['get'](env__3673, 'macros'));
                                        {
                                            B1222['get-setter'](env__3673, 'macros', macros__3679);
                                            {
                                                B1222['chain-object'](symbol_macros__3680, B1222['get'](env__3673, 'symbol-macros'));
                                                return(B1222['get-setter'](env__3673, 'symbol-macros', symbol_macros__3680));
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
    ($module)['import-module'] = function B3686(module__3687, module_name__3688) {
        var options__3689 = $SL.call(arguments, 2);
        {
            var B3690 = ($module)['find-module'](module_name__3688);
            if (($T)(B3690)) {
                var other_module__3691 = B3690;
                {
                    B1222['push'](B1222['get'](module__3687, 'imports'), [
                        other_module__3691,
                        B1222['apply'](B1582['process-import-names'], B1222['get'](other_module__3691, 'exports'), options__3689)
                    ]);
                    {
                        B1222['push'](B1222['get'](module__3687, 'dependencies'), module_name__3688);
                        return(other_module__3691);
                    }
                }
            } else
                return(B1222['signal'](B1477['format-to-string']('Unable to import module \'%s\'', module_name__3688)));
        }
    };
    B1222['%annotate-function'](($module)['import-module'], 'import-module', false);
}
{
    ($module)['find-module'] = function B3696(module_name__3697) {
        var B3698 = ($module)['compile-module'](module_name__3697);
        if (($T)(B3698))
            return(B3698);
        else {
            var B3699 = B1222['get'](($module)['*modules*'], module_name__3697);
            if (($T)(B3699))
                return(B3699);
            else {
                var B3700 = ($module)['read-module']('build', module_name__3697);
                if (($T)(B3700))
                    return(B3700);
                else
                    return(($module)['read-module']('src', module_name__3697));
            }
        }
    };
    B1222['%annotate-function'](($module)['find-module'], 'find-module', false);
}
{
    var B3702 = $K('name');
    {
        var B3703 = $K('string');
        {
            ($module)['read-module'] = function B3704(base_path__3705, module_name__3706) {
                var path__3707 = ($module)['module-path'](base_path__3705, module_name__3706);
                if (($T)(B1480['file-exists?'](path__3707)))
                    return(B1222['apply'](B1222['curry'](B1222['make'], B1631['<module>'], B3702), B1917['read'](B1222['make'](B1478['<string-stream>'], B3703, B1480['read-file'](path__3707)))));
                else
                    return(false);
            };
            B1222['%annotate-function'](($module)['read-module'], 'read-module', false);
        }
    }
}
{
    ($module)['executable-path'] = function B3709(module_name__3710) {
        return(B1480['resolve-path']('build', B1222['concatenate'](module_name__3710, '.js')));
    };
    B1222['%annotate-function'](($module)['executable-path'], 'executable-path', false);
}
{
    ($module)['module-path'] = function B3712(base_path__3713, module_name__3714) {
        return(B1480['resolve-path'](base_path__3713, B1222['concatenate'](module_name__3714, '.rm')));
    };
    B1222['%annotate-function'](($module)['module-path'], 'module-path', false);
}
{
    ($module)['source-path'] = function B3716(module_name__3717) {
        return(B1480['resolve-path']('src', B1222['concatenate'](module_name__3717, '.ralph')));
    };
    B1222['%annotate-function'](($module)['source-path'], 'source-path', false);
}
{
    ($module)['recompile?'] = function B3720(module_name__3721) {
        if (($T)(B1222['not'](B1222['get'](($module)['*modules*'], module_name__3721, 'native?')))) {
            var path__3722 = ($module)['executable-path'](module_name__3721);
            {
                var B3723 = B1222['not'](B1480['file-exists?'](path__3722));
                if (($T)(B3723))
                    return(B3723);
                else {
                    var path2__3724 = ($module)['source-path'](module_name__3721);
                    return(B1222['<'](B1222['get'](B1480['file-properties'](path__3722), 'modification-date'), B1222['get'](B1480['file-properties'](path2__3724), 'modification-date')));
                }
            }
        } else
            return(false);
    };
    B1222['%annotate-function'](($module)['recompile?'], 'recompile?', false);
}
{
    ($module)['compile-form'] = function B3726(form__3727, stream__3728, env__3729) {
        B1478['stream-write'](stream__3728, B3667['compile-to-string'](form__3727, env__3729));
        return(B1478['stream-write'](stream__3728, '\n'));
    };
    B1222['%annotate-function'](($module)['compile-form'], 'compile-form', false);
}
{
    var B3731 = $K('eof-error?');
    {
        ($module)['compile-stream'] = function B3732(input_stream__3733, output_stream__3734, env__3735) {
            var readQ__3736 = true;
            {
                while (($T)(readQ__3736)) {
                    var form__3737 = B1917['read'](input_stream__3733, env__3735, B3731, false);
                    {
                        readQ__3736 = B1222['not'](B1222['=='](form__3737, B1917['$end-of-file']));
                        if (($T)(readQ__3736))
                            ($module)['compile-form'](form__3737, output_stream__3734, env__3735);
                    }
                }
                return(false);
            }
        };
        B1222['%annotate-function'](($module)['compile-stream'], 'compile-stream', false);
    }
}
{
    var B3740 = $K('path');
    {
        var B3741 = $K('direction');
        {
            var B3742 = $S('output');
            {
                var B3743 = $S('%native');
                {
                    var B3744 = $K('exports');
                    {
                        var B3745 = $K('inline');
                        {
                            var B3746 = $K('dependencies');
                            {
                                {
                                    ($module)['compile-module'] = function B3747(module_name__3748) {
                                        if (($T)(B1222['not'](B1222['has?'](($module)['*modules*'], module_name__3748)))) {
                                            var B3749 = ($module)['read-module']('src', module_name__3748);
                                            if (($T)(B3749)) {
                                                var module__3750 = B3749;
                                                B1222['get-setter'](($module)['*modules*'], module_name__3748, module__3750);
                                            }
                                        }
                                        if (($T)(($module)['recompile?'](module_name__3748))) {
                                            B1477['format-out']('Compiling: %s\n', module_name__3748);
                                            {
                                                if (($T)(B1222['not'](B1480['file-exists?'](($module)['source-path'](module_name__3748)))))
                                                    B1222['signal'](B1477['format-to-string']('Unable to compile non-existing module \'%s\'', module_name__3748));
                                                {
                                                    var env__3751 = B3667['make-module-environment'](module_name__3748);
                                                    {
                                                        var module__3752 = B1222['get'](env__3751, 'module');
                                                        {
                                                            var target_path__3753 = ($module)['executable-path'](module_name__3748);
                                                            {
                                                                B1480['ensure-directories-exist'](target_path__3753);
                                                                {
                                                                    var output_stream__3754 = B1222['make'](B1479['<file-stream>'], B3740, target_path__3753, B3741, B3742);
                                                                    {
                                                                        var source__3755 = B1480['read-file'](($module)['source-path'](module_name__3748));
                                                                        {
                                                                            var input_stream__3756 = B1222['make'](B1478['<string-stream>'], B3703, source__3755);
                                                                            {
                                                                                B1222['get-setter'](($module)['*modules*'], module_name__3748, module__3752);
                                                                                {
                                                                                    if (($T)(B1222['=='](module_name__3748, 'ralph/core'))) {
                                                                                        ($module)['compile-form']([
                                                                                            B3743,
                                                                                            '$moduleRoot = Object.create(null)'
                                                                                        ], output_stream__3754, env__3751);
                                                                                        ($module)['compile-form'](B1631['*module-prologue*'], output_stream__3754, env__3751);
                                                                                    } else {
                                                                                        ($module)['compile-form']([
                                                                                            B3743,
                                                                                            'require(\'ralph/core\')'
                                                                                        ], output_stream__3754, env__3751);
                                                                                        {
                                                                                            ($module)['compile-form'](B1631['*module-prologue*'], output_stream__3754, env__3751);
                                                                                            {
                                                                                                ($module)['import-module'](module__3752, 'ralph/core');
                                                                                                ($module)['compile-form'](B1737['make-import-definition']('ralph/core', env__3751), output_stream__3754, env__3751);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    {
                                                                                        ($module)['compile-stream'](input_stream__3756, output_stream__3754, env__3751);
                                                                                        {
                                                                                            B1478['stream-close'](output_stream__3754);
                                                                                            {
                                                                                                B1480['write-file'](($module)['module-path']('build', module_name__3748), B1222['description']([
                                                                                                    module_name__3748,
                                                                                                    B3744,
                                                                                                    B1222['get'](module__3752, 'exports'),
                                                                                                    B3745,
                                                                                                    B1222['object-properties'](B1222['get'](module__3752, 'inline')),
                                                                                                    B3746,
                                                                                                    B1222['get'](module__3752, 'dependencies')
                                                                                                ]));
                                                                                                {
                                                                                                    B1477['format-out']('Finished: %s\n', module_name__3748);
                                                                                                    return(module__3752);
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
    ($module)['destructure-import'] = function B3758(import__3759) {
        var B3760 = B1222['symbol-name'];
        {
            var B3761 = false;
            if (($T)(B1222['instance?'](import__3759, B1222['<array>'])))
                B3761 = B1222['first'](import__3759);
            else
                B3761 = import__3759;
            {
                var B3762 = B3760(B3761);
                {
                    var B3763 = false;
                    if (($T)(B1222['instance?'](import__3759, B1222['<array>'])))
                        B3763 = B1222['rest'](import__3759);
                    else
                        B3763 = [];
                    return([
                        B3762,
                        B3763
                    ]);
                }
            }
        }
    };
    B1222['%annotate-function'](($module)['destructure-import'], 'destructure-import', false);
}
{
    var B3765 = $S('define-module', 'ralph/core');
    B1222['get-setter'](B2835['$core-special-forms'], 'define-module', function B3766(____3767) {
        var arguments__3768 = $SL.call(arguments, 1);
        return(B1222['%concat']([B3765], arguments__3768));
    });
}
{
    var B3778 = $S('begin', 'ralph/core');
    B1222['get-setter'](B2485['$internal-macros'], 'define-module', function B3779(env__3780, ____3781) {
        var B3782 = $SL.call(arguments, 2);
        {
            var B3783 = B1222['%keys'](B3782, {
                    'import': [],
                    'export': [],
                    'compile-time-import': [],
                    'inline': []
                });
            {
                var import__3784 = B3783['import'];
                {
                    var export__3785 = B3783['export'];
                    {
                        var compile_time_import__3786 = B3783['compile-time-import'];
                        {
                            var inline__3787 = B3783['inline'];
                            {
                                var B3788 = env__3780;
                                {
                                    var module__3789 = B3788['module'];
                                    {
                                        var import_identifiers__3790 = B3788['import-identifiers'];
                                        {
                                            B1222['get-setter'](module__3789, 'exports', B1222['map'](B1582['identifier-name'], export__3785));
                                            {
                                                B1222['do'](function B3791(import__3792) {
                                                    var B3793 = ($module)['destructure-import'](import__3792);
                                                    {
                                                        var module_name__3794 = B3793[0];
                                                        {
                                                            var options__3795 = B3793[1];
                                                            return(B1222['apply'](($module)['compile-time-import-module'], env__3780, module_name__3794, options__3795));
                                                        }
                                                    }
                                                }, compile_time_import__3786);
                                                {
                                                    B1222['do'](function B3796(name__3797) {
                                                        return(B1222['get-setter'](module__3789, 'inline', name__3797, true));
                                                    }, B1222['map'](B1582['identifier-name'], inline__3787));
                                                    return(B1222['%concat']([B3778], B1222['map'](function B3798(import__3799) {
                                                        var B3800 = ($module)['destructure-import'](import__3799);
                                                        {
                                                            var module_name__3801 = B3800[0];
                                                            {
                                                                var options__3802 = B3800[1];
                                                                {
                                                                    B1222['apply'](($module)['import-module'], module__3789, module_name__3801, options__3802);
                                                                    return(B1737['make-import-definition'](module_name__3801, env__3780));
                                                                }
                                                            }
                                                        }
                                                    }, import__3784)));
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
