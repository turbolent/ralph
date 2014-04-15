require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3613(name__3614, value__3615) {
            var B3617 = (exports);
            return(B3617[name__3614] = value__3615);
        };
        {
            ($module)['%eval'] = function B3616() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3618 = require('ralph/core');
{
    var B3619 = require('ralph/format');
    {
        var B3620 = require('ralph/compiler/module');
        {
            var B3621 = require('ralph/compiler/environment');
            {
                var B3622 = require('ralph/compiler/macros');
                {
                    var B3623 = require('ralph/compiler/special-forms');
                    {
                        var B3624 = require('ralph/compiler/macroexpansion');
                        {
                            var B3625 = require('ralph/compiler/symbol-lifting');
                            {
                                var B3626 = require('ralph/compiler/alpha');
                                {
                                    var B3627 = require('ralph/compiler/anf');
                                    {
                                        var B3628 = require('ralph/compiler/statements');
                                        var B3629 = require('ralph/compiler/javascript');
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
B3618['do'](function B3631(name__3632) {
    if (($T)(B3618['not'](B3618['has?'](B3622['$internal-macros'], name__3632))))
        return(B3618['signal'](B3619['format-to-string']('No internal macro for special form: %s', name__3632)));
    else
        return(false);
}, B3618['object-properties'](B3623['$core-special-forms']));
{
    var B3634 = $K('module');
    {
        var B3635 = $K('name');
        {
            var B3636 = $K('special-forms');
            {
                var B3637 = $K('macros');
                {
                    var B3638 = $K('symbol-macros');
                    {
                        {
                            ($module)['make-module-environment'] = function B3639(module_name__3640) {
                                var all_symbol_macros__3641 = B3618['make-plain-object']();
                                {
                                    var all_macros__3642 = B3618['make-plain-object']();
                                    {
                                        B3618['extend!'](all_symbol_macros__3641, B3622['$internal-symbol-macros']);
                                        {
                                            B3618['extend!'](all_symbol_macros__3641, B3622['$core-symbol-macros']);
                                            {
                                                B3618['extend!'](all_macros__3642, B3622['$internal-macros']);
                                                {
                                                    B3618['extend!'](all_macros__3642, B3622['$core-macros']);
                                                    return(B3618['make'](B3621['<environment>'], B3634, B3618['make'](B3620['<module>'], B3635, module_name__3640), B3636, B3623['$internal-special-forms'], B3637, all_macros__3642, B3638, all_symbol_macros__3641));
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            ($module)['%export']('make-module-environment', ($module)['make-module-environment']);
                        }
                        B3618['%annotate-function'](($module)['make-module-environment'], 'make-module-environment', false);
                    }
                }
            }
        }
    }
}
($module)['<compilation-pass>'] = B3618['%make-class'](B3618['<object>'], {
    'name': false,
    'function': false
}, function Lcompilation_passG__3643() {
    var B3644 = (this);
    {
        B3644['name'] = (undefined);
        {
            var B3645 = (this);
            return(B3645['function'] = (undefined));
        }
    }
});
{
    ($module)['cleanup'] = function B3647(result__3648, env__3649) {
        if (($T)(B3618['not'](B3618['get'](env__3649, 'persistent?'))))
            B3618['remove-property!'](env__3649, 'import-identifiers');
        return(result__3648);
    };
    B3618['%annotate-function'](($module)['cleanup'], 'cleanup', false);
}
{
    var B3651 = $K('function');
    ($module)['*passes*'] = B3618['map'](function B3652(nameSfunction__3653) {
        var name__3654 = nameSfunction__3653[0];
        {
            var function__3655 = nameSfunction__3653[1];
            return(B3618['make'](($module)['<compilation-pass>'], B3635, name__3654, B3651, function__3655));
        }
    }, [
        [
            'macroexpansion',
            B3624['macroexpand-all']
        ],
        [
            'symbol lifting',
            B3625['lift-symbols']
        ],
        [
            'alpha conversion',
            B3626['alpha-convert-form']
        ],
        [
            'ANF transformation',
            B3627['normalize-term']
        ],
        [
            'statement transfomation',
            B3628['transform-statements!']
        ],
        [
            'code generation',
            B3629['compile-js']
        ],
        [
            'cleanup',
            ($module)['cleanup']
        ]
    ]);
}
{
    {
        ($module)['compile-to-string'] = function B3659(form__3660, env__3661) {
            return(B3618['reduce'](function B3662(result__3663, pass__3664) {
                var B3665 = pass__3664;
                {
                    var function__3666 = B3665['function'];
                    return(function__3666(result__3663, env__3661));
                }
            }, form__3660, ($module)['*passes*']));
        };
        ($module)['%export']('compile-to-string', ($module)['compile-to-string']);
    }
    B3618['%annotate-function'](($module)['compile-to-string'], 'compile-to-string', false);
}
