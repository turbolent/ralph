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
var B1200 = require('ralph/core');
{
    var B1455 = require('ralph/format');
    {
        var B1456 = require('ralph/stream');
        {
            var B1457 = require('ralph/file-stream');
            {
                var B1458 = require('ralph/file-system');
                {
                    var B1560 = require('ralph/compiler/utilities');
                    {
                        var B1609 = require('ralph/compiler/module');
                        {
                            var B1712 = require('ralph/compiler/environment');
                            {
                                var B1892 = require('ralph/compiler/reader');
                                {
                                    var B2460 = require('ralph/compiler/macros');
                                    {
                                        var B2810 = require('ralph/compiler/special-forms');
                                        {
                                            var B2811 = require('ralph/compiler/macroexpansion');
                                            {
                                                var B2946 = require('ralph/compiler/symbol-lifting');
                                                {
                                                    var B3154 = require('ralph/compiler/alpha');
                                                    {
                                                        var B3289 = require('ralph/compiler/anf');
                                                        {
                                                            var B3448 = require('ralph/compiler/statements');
                                                            {
                                                                var B3584 = require('ralph/compiler/javascript');
                                                                var B3637 = require('ralph/compiler/compile');
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
($module)['*modules*'] = B1200['make-object']();
{
    ($module)['compile-time-import-module'] = function B3642(env__3643, module_name__3644) {
        var B3645 = $SL.call(arguments, 2);
        {
            var B3646 = B1200['%keys'](B3645, { 'options': false });
            {
                var options__3647 = B3646['options'];
                if (($T)(B1200['not'](B1200['=='](module_name__3644, 'ralph/core')))) {
                    ($module)['compile-module'](module_name__3644);
                    {
                        var definitions__3648 = require(module_name__3644);
                        {
                            var macros__3649 = B1200['make-plain-object']();
                            {
                                var symbol_macros__3650 = B1200['make-plain-object']();
                                {
                                    B1200['do'](function B3651(name__3652) {
                                        var definition__3653 = B1200['get'](definitions__3648, name__3652);
                                        if (($T)(B1200['get'](definition__3653, '%macro?')))
                                            return(B1200['get-setter'](macros__3649, name__3652, definition__3653));
                                        else if (($T)(B1200['get'](definition__3653, '%symbol-macro?')))
                                            return(B1200['get-setter'](symbol_macros__3650, name__3652, definition__3653));
                                        else
                                            return(false);
                                    }, B1200['apply'](B1560['process-import-names'], B1200['object-properties'](definitions__3648), options__3647));
                                    {
                                        B1200['chain-object'](macros__3649, B1200['get'](env__3643, 'macros'));
                                        {
                                            B1200['get-setter'](env__3643, 'macros', macros__3649);
                                            {
                                                B1200['chain-object'](symbol_macros__3650, B1200['get'](env__3643, 'symbol-macros'));
                                                return(B1200['get-setter'](env__3643, 'symbol-macros', symbol_macros__3650));
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
    B1200['%annotate-function'](($module)['compile-time-import-module'], 'compile-time-import-module', false);
}
{
    ($module)['import-module'] = function B3656(module__3657, module_name__3658) {
        var options__3659 = $SL.call(arguments, 2);
        {
            var B3660 = ($module)['find-module'](module_name__3658);
            if (($T)(B3660)) {
                var other_module__3661 = B3660;
                {
                    B1200['push'](B1200['get'](module__3657, 'imports'), [
                        other_module__3661,
                        B1200['apply'](B1560['process-import-names'], B1200['get'](other_module__3661, 'exports'), options__3659)
                    ]);
                    {
                        B1200['push'](B1200['get'](module__3657, 'dependencies'), module_name__3658);
                        return(other_module__3661);
                    }
                }
            } else
                return(B1200['signal'](B1455['format-to-string']('Unable to import module \'%s\'', module_name__3658)));
        }
    };
    B1200['%annotate-function'](($module)['import-module'], 'import-module', false);
}
{
    ($module)['find-module'] = function B3666(module_name__3667) {
        var B3668 = ($module)['compile-module'](module_name__3667);
        if (($T)(B3668))
            return(B3668);
        else {
            var B3669 = B1200['get'](($module)['*modules*'], module_name__3667);
            if (($T)(B3669))
                return(B3669);
            else {
                var B3670 = ($module)['read-module']('build', module_name__3667);
                if (($T)(B3670))
                    return(B3670);
                else
                    return(($module)['read-module']('src', module_name__3667));
            }
        }
    };
    B1200['%annotate-function'](($module)['find-module'], 'find-module', false);
}
{
    var B3672 = $K('name');
    {
        var B3673 = $K('string');
        {
            ($module)['read-module'] = function B3674(base_path__3675, module_name__3676) {
                var path__3677 = ($module)['module-path'](base_path__3675, module_name__3676);
                if (($T)(B1458['file-exists?'](path__3677)))
                    return(B1200['apply'](B1200['curry'](B1200['make'], B1609['<module>'], B3672), B1892['read'](B1200['make'](B1456['<string-stream>'], B3673, B1458['read-file'](path__3677)))));
                else
                    return(false);
            };
            B1200['%annotate-function'](($module)['read-module'], 'read-module', false);
        }
    }
}
{
    ($module)['executable-path'] = function B3679(module_name__3680) {
        return(B1458['resolve-path']('build', B1200['concatenate'](module_name__3680, '.js')));
    };
    B1200['%annotate-function'](($module)['executable-path'], 'executable-path', false);
}
{
    ($module)['module-path'] = function B3682(base_path__3683, module_name__3684) {
        return(B1458['resolve-path'](base_path__3683, B1200['concatenate'](module_name__3684, '.rm')));
    };
    B1200['%annotate-function'](($module)['module-path'], 'module-path', false);
}
{
    ($module)['source-path'] = function B3686(module_name__3687) {
        return(B1458['resolve-path']('src', B1200['concatenate'](module_name__3687, '.ralph')));
    };
    B1200['%annotate-function'](($module)['source-path'], 'source-path', false);
}
{
    ($module)['recompile?'] = function B3690(module_name__3691) {
        if (($T)(B1200['not'](B1200['get'](($module)['*modules*'], module_name__3691, 'native?')))) {
            var path__3692 = ($module)['executable-path'](module_name__3691);
            {
                var B3693 = B1200['not'](B1458['file-exists?'](path__3692));
                if (($T)(B3693))
                    return(B3693);
                else {
                    var path2__3694 = ($module)['source-path'](module_name__3691);
                    return(B1200['<'](B1200['get'](B1458['file-properties'](path__3692), 'modification-date'), B1200['get'](B1458['file-properties'](path2__3694), 'modification-date')));
                }
            }
        } else
            return(false);
    };
    B1200['%annotate-function'](($module)['recompile?'], 'recompile?', false);
}
{
    ($module)['compile-form'] = function B3696(form__3697, stream__3698, env__3699) {
        B1456['stream-write'](stream__3698, B3637['compile-to-string'](form__3697, env__3699));
        return(B1456['stream-write'](stream__3698, '\n'));
    };
    B1200['%annotate-function'](($module)['compile-form'], 'compile-form', false);
}
{
    var B3701 = $K('eof-error?');
    {
        ($module)['compile-stream'] = function B3702(input_stream__3703, output_stream__3704, env__3705) {
            var readQ__3706 = true;
            {
                while (($T)(readQ__3706)) {
                    var form__3707 = B1892['read'](input_stream__3703, env__3705, B3701, false);
                    {
                        readQ__3706 = B1200['not'](B1200['=='](form__3707, B1892['$end-of-file']));
                        if (($T)(readQ__3706))
                            ($module)['compile-form'](form__3707, output_stream__3704, env__3705);
                    }
                }
                return(false);
            }
        };
        B1200['%annotate-function'](($module)['compile-stream'], 'compile-stream', false);
    }
}
{
    var B3710 = $K('path');
    {
        var B3711 = $K('direction');
        {
            var B3712 = $S('output');
            {
                var B3713 = $S('%native');
                {
                    var B3714 = $K('exports');
                    {
                        var B3715 = $K('inline');
                        {
                            var B3716 = $K('dependencies');
                            {
                                {
                                    ($module)['compile-module'] = function B3717(module_name__3718) {
                                        if (($T)(B1200['not'](B1200['has?'](($module)['*modules*'], module_name__3718)))) {
                                            var B3719 = ($module)['read-module']('src', module_name__3718);
                                            if (($T)(B3719)) {
                                                var module__3720 = B3719;
                                                B1200['get-setter'](($module)['*modules*'], module_name__3718, module__3720);
                                            }
                                        }
                                        if (($T)(($module)['recompile?'](module_name__3718))) {
                                            B1455['format-out']('Compiling: %s\n', module_name__3718);
                                            {
                                                if (($T)(B1200['not'](B1458['file-exists?'](($module)['source-path'](module_name__3718)))))
                                                    B1200['signal'](B1455['format-to-string']('Unable to compile non-existing module \'%s\'', module_name__3718));
                                                {
                                                    var env__3721 = B3637['make-module-environment'](module_name__3718);
                                                    {
                                                        var module__3722 = B1200['get'](env__3721, 'module');
                                                        {
                                                            var target_path__3723 = ($module)['executable-path'](module_name__3718);
                                                            {
                                                                B1458['ensure-directories-exist'](target_path__3723);
                                                                {
                                                                    var output_stream__3724 = B1200['make'](B1457['<file-stream>'], B3710, target_path__3723, B3711, B3712);
                                                                    {
                                                                        var source__3725 = B1458['read-file'](($module)['source-path'](module_name__3718));
                                                                        {
                                                                            var input_stream__3726 = B1200['make'](B1456['<string-stream>'], B3673, source__3725);
                                                                            {
                                                                                B1200['get-setter'](($module)['*modules*'], module_name__3718, module__3722);
                                                                                {
                                                                                    if (($T)(B1200['=='](module_name__3718, 'ralph/core'))) {
                                                                                        ($module)['compile-form']([
                                                                                            B3713,
                                                                                            '$moduleRoot = Object.create(null)'
                                                                                        ], output_stream__3724, env__3721);
                                                                                        ($module)['compile-form'](B1609['*module-prologue*'], output_stream__3724, env__3721);
                                                                                    } else {
                                                                                        ($module)['compile-form']([
                                                                                            B3713,
                                                                                            'require(\'ralph/core\')'
                                                                                        ], output_stream__3724, env__3721);
                                                                                        {
                                                                                            ($module)['compile-form'](B1609['*module-prologue*'], output_stream__3724, env__3721);
                                                                                            {
                                                                                                ($module)['import-module'](module__3722, 'ralph/core');
                                                                                                ($module)['compile-form'](B1712['make-import-definition']('ralph/core', env__3721), output_stream__3724, env__3721);
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    {
                                                                                        ($module)['compile-stream'](input_stream__3726, output_stream__3724, env__3721);
                                                                                        {
                                                                                            B1456['stream-close'](output_stream__3724);
                                                                                            {
                                                                                                B1458['write-file'](($module)['module-path']('build', module_name__3718), B1200['description']([
                                                                                                    module_name__3718,
                                                                                                    B3714,
                                                                                                    B1200['get'](module__3722, 'exports'),
                                                                                                    B3715,
                                                                                                    B1200['object-properties'](B1200['get'](module__3722, 'inline')),
                                                                                                    B3716,
                                                                                                    B1200['get'](module__3722, 'dependencies')
                                                                                                ]));
                                                                                                {
                                                                                                    B1455['format-out']('Finished: %s\n', module_name__3718);
                                                                                                    return(module__3722);
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
                                B1200['%annotate-function'](($module)['compile-module'], 'compile-module', false);
                            }
                        }
                    }
                }
            }
        }
    }
}
{
    ($module)['destructure-import'] = function B3728(import__3729) {
        var B3730 = B1200['symbol-name'];
        {
            var B3731 = false;
            if (($T)(B1200['instance?'](import__3729, B1200['<array>'])))
                B3731 = B1200['first'](import__3729);
            else
                B3731 = import__3729;
            {
                var B3732 = B3730(B3731);
                {
                    var B3733 = false;
                    if (($T)(B1200['instance?'](import__3729, B1200['<array>'])))
                        B3733 = B1200['rest'](import__3729);
                    else
                        B3733 = [];
                    return([
                        B3732,
                        B3733
                    ]);
                }
            }
        }
    };
    B1200['%annotate-function'](($module)['destructure-import'], 'destructure-import', false);
}
{
    var B3735 = $S('define-module', 'ralph/core');
    B1200['get-setter'](B2810['$core-special-forms'], 'define-module', function B3736(____3737) {
        var arguments__3738 = $SL.call(arguments, 1);
        return(B1200['%concat']([B3735], arguments__3738));
    });
}
{
    var B3748 = $S('begin', 'ralph/core');
    B1200['get-setter'](B2460['$internal-macros'], 'define-module', function B3749(env__3750, ____3751) {
        var B3752 = $SL.call(arguments, 2);
        {
            var B3753 = B1200['%keys'](B3752, {
                    'import': [],
                    'export': [],
                    'compile-time-import': [],
                    'inline': []
                });
            {
                var import__3754 = B3753['import'];
                {
                    var export__3755 = B3753['export'];
                    {
                        var compile_time_import__3756 = B3753['compile-time-import'];
                        {
                            var inline__3757 = B3753['inline'];
                            {
                                var B3758 = env__3750;
                                {
                                    var module__3759 = B3758['module'];
                                    {
                                        var import_identifiers__3760 = B3758['import-identifiers'];
                                        {
                                            B1200['get-setter'](module__3759, 'exports', B1200['map'](B1560['identifier-name'], export__3755));
                                            {
                                                B1200['do'](function B3761(import__3762) {
                                                    var B3763 = ($module)['destructure-import'](import__3762);
                                                    {
                                                        var module_name__3764 = B3763[0];
                                                        {
                                                            var options__3765 = B3763[1];
                                                            return(B1200['apply'](($module)['compile-time-import-module'], env__3750, module_name__3764, options__3765));
                                                        }
                                                    }
                                                }, compile_time_import__3756);
                                                {
                                                    B1200['do'](function B3766(name__3767) {
                                                        return(B1200['get-setter'](module__3759, 'inline', name__3767, true));
                                                    }, B1200['map'](B1560['identifier-name'], inline__3757));
                                                    return(B1200['%concat']([B3748], B1200['map'](function B3768(import__3769) {
                                                        var B3770 = ($module)['destructure-import'](import__3769);
                                                        {
                                                            var module_name__3771 = B3770[0];
                                                            {
                                                                var options__3772 = B3770[1];
                                                                {
                                                                    B1200['apply'](($module)['import-module'], module__3759, module_name__3771, options__3772);
                                                                    return(B1712['make-import-definition'](module_name__3771, env__3750));
                                                                }
                                                            }
                                                        }
                                                    }, import__3754)));
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
