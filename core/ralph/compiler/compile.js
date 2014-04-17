require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3623(name__3624, value__3625) {
            var B3627 = (exports);
            return(B3627[name__3624] = value__3625);
        };
        {
            ($module)['%eval'] = function B3626() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3628 = require('ralph/core');
{
    var B3629 = require('ralph/format');
    {
        var B3630 = require('ralph/compiler/module');
        {
            var B3631 = require('ralph/compiler/environment');
            {
                var B3632 = require('ralph/compiler/macros');
                {
                    var B3633 = require('ralph/compiler/special-forms');
                    {
                        var B3634 = require('ralph/compiler/macroexpansion');
                        {
                            var B3635 = require('ralph/compiler/symbol-lifting');
                            {
                                var B3636 = require('ralph/compiler/alpha');
                                {
                                    var B3637 = require('ralph/compiler/anf');
                                    {
                                        var B3638 = require('ralph/compiler/statements');
                                        var B3639 = require('ralph/compiler/javascript');
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
B3628['do'](function B3641(name__3642) {
    if (($T)(B3628['not'](B3628['has?'](B3632['$internal-macros'], name__3642))))
        return(B3628['signal'](B3629['format-to-string']('No internal macro for special form: %s', name__3642)));
    else
        return(false);
}, B3628['object-properties'](B3633['$core-special-forms']));
{
    var B3644 = $K('module');
    {
        var B3645 = $K('name');
        {
            var B3646 = $K('special-forms');
            {
                var B3647 = $K('macros');
                {
                    var B3648 = $K('symbol-macros');
                    {
                        {
                            ($module)['make-module-environment'] = function B3649(module_name__3650) {
                                var all_symbol_macros__3651 = B3628['make-plain-object']();
                                {
                                    var all_macros__3652 = B3628['make-plain-object']();
                                    {
                                        B3628['extend!'](all_symbol_macros__3651, B3632['$internal-symbol-macros']);
                                        {
                                            B3628['extend!'](all_symbol_macros__3651, B3632['$core-symbol-macros']);
                                            {
                                                B3628['extend!'](all_macros__3652, B3632['$internal-macros']);
                                                {
                                                    B3628['extend!'](all_macros__3652, B3632['$core-macros']);
                                                    return(B3628['make'](B3631['<environment>'], B3644, B3628['make'](B3630['<module>'], B3645, module_name__3650), B3646, B3633['$internal-special-forms'], B3647, all_macros__3652, B3648, all_symbol_macros__3651));
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            ($module)['%export']('make-module-environment', ($module)['make-module-environment']);
                        }
                        B3628['%annotate-function'](($module)['make-module-environment'], 'make-module-environment', false);
                    }
                }
            }
        }
    }
}
($module)['<compilation-pass>'] = B3628['%make-class'](B3628['<object>'], {
    'name': false,
    'function': false
}, function Lcompilation_passG__3653() {
    var B3654 = (this);
    {
        B3654['name'] = (undefined);
        {
            var B3655 = (this);
            return(B3655['function'] = (undefined));
        }
    }
});
{
    ($module)['cleanup'] = function B3657(result__3658, env__3659) {
        if (($T)(B3628['not'](B3628['get'](env__3659, 'persistent?'))))
            B3628['remove-property!'](env__3659, 'import-identifiers');
        return(result__3658);
    };
    B3628['%annotate-function'](($module)['cleanup'], 'cleanup', false);
}
{
    var B3661 = $K('function');
    ($module)['*passes*'] = B3628['map'](function B3662(nameSfunction__3663) {
        var name__3664 = nameSfunction__3663[0];
        {
            var function__3665 = nameSfunction__3663[1];
            return(B3628['make'](($module)['<compilation-pass>'], B3645, name__3664, B3661, function__3665));
        }
    }, [
        [
            'macroexpansion',
            B3634['macroexpand-all']
        ],
        [
            'symbol lifting',
            B3635['lift-symbols']
        ],
        [
            'alpha conversion',
            B3636['alpha-convert-form']
        ],
        [
            'ANF transformation',
            B3637['normalize-term']
        ],
        [
            'statement transfomation',
            B3638['transform-statements!']
        ],
        [
            'code generation',
            B3639['compile-js']
        ],
        [
            'cleanup',
            ($module)['cleanup']
        ]
    ]);
}
{
    {
        ($module)['compile-to-string'] = function B3669(form__3670, env__3671) {
            return(B3628['reduce'](function B3672(result__3673, pass__3674) {
                var B3675 = pass__3674;
                {
                    var function__3676 = B3675['function'];
                    return(function__3676(result__3673, env__3671));
                }
            }, form__3670, ($module)['*passes*']));
        };
        ($module)['%export']('compile-to-string', ($module)['compile-to-string']);
    }
    B3628['%annotate-function'](($module)['compile-to-string'], 'compile-to-string', false);
}
