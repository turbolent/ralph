require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3625(name__3626, value__3627) {
            var B3629 = (exports);
            return(B3629[name__3626] = value__3627);
        };
        {
            ($module)['%eval'] = function B3628() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3630 = require('ralph/core');
{
    var B3631 = require('ralph/format');
    {
        var B3632 = require('ralph/compiler/module');
        {
            var B3633 = require('ralph/compiler/environment');
            {
                var B3634 = require('ralph/compiler/macros');
                {
                    var B3635 = require('ralph/compiler/special-forms');
                    {
                        var B3636 = require('ralph/compiler/macroexpansion');
                        {
                            var B3637 = require('ralph/compiler/symbol-lifting');
                            {
                                var B3638 = require('ralph/compiler/alpha');
                                {
                                    var B3639 = require('ralph/compiler/anf');
                                    {
                                        var B3640 = require('ralph/compiler/statements');
                                        var B3641 = require('ralph/compiler/javascript');
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
B3630['do'](function B3643(name__3644) {
    if (($T)(B3630['not'](B3630['has?'](B3634['$internal-macros'], name__3644))))
        return(B3630['signal'](B3631['format-to-string']('No internal macro for special form: %s', name__3644)));
    else
        return(false);
}, B3630['object-properties'](B3635['$core-special-forms']));
{
    var B3646 = $K('module');
    {
        var B3647 = $K('name');
        {
            var B3648 = $K('special-forms');
            {
                var B3649 = $K('macros');
                {
                    var B3650 = $K('symbol-macros');
                    {
                        {
                            ($module)['make-module-environment'] = function B3651(module_name__3652) {
                                var all_symbol_macros__3653 = B3630['make-plain-object']();
                                {
                                    var all_macros__3654 = B3630['make-plain-object']();
                                    {
                                        B3630['extend!'](all_symbol_macros__3653, B3634['$internal-symbol-macros']);
                                        {
                                            B3630['extend!'](all_symbol_macros__3653, B3634['$core-symbol-macros']);
                                            {
                                                B3630['extend!'](all_macros__3654, B3634['$internal-macros']);
                                                {
                                                    B3630['extend!'](all_macros__3654, B3634['$core-macros']);
                                                    return(B3630['make'](B3633['<environment>'], B3646, B3630['make'](B3632['<module>'], B3647, module_name__3652), B3648, B3635['$internal-special-forms'], B3649, all_macros__3654, B3650, all_symbol_macros__3653));
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            ($module)['%export']('make-module-environment', ($module)['make-module-environment']);
                        }
                        B3630['%annotate-function'](($module)['make-module-environment'], 'make-module-environment', false);
                    }
                }
            }
        }
    }
}
($module)['<compilation-pass>'] = B3630['%make-class'](B3630['<object>'], {
    'name': false,
    'function': false
}, function Lcompilation_passG__3655() {
    var B3656 = (this);
    {
        B3656['name'] = (undefined);
        {
            var B3657 = (this);
            return(B3657['function'] = (undefined));
        }
    }
});
{
    ($module)['cleanup'] = function B3659(result__3660, env__3661) {
        if (($T)(B3630['not'](B3630['get'](env__3661, 'persistent?'))))
            B3630['remove-property!'](env__3661, 'import-identifiers');
        return(result__3660);
    };
    B3630['%annotate-function'](($module)['cleanup'], 'cleanup', false);
}
{
    var B3663 = $K('function');
    ($module)['*passes*'] = B3630['map'](function B3664(nameSfunction__3665) {
        var name__3666 = nameSfunction__3665[0];
        {
            var function__3667 = nameSfunction__3665[1];
            return(B3630['make'](($module)['<compilation-pass>'], B3647, name__3666, B3663, function__3667));
        }
    }, [
        [
            'macroexpansion',
            B3636['macroexpand-all']
        ],
        [
            'symbol lifting',
            B3637['lift-symbols']
        ],
        [
            'alpha conversion',
            B3638['alpha-convert-form']
        ],
        [
            'ANF transformation',
            B3639['normalize-term']
        ],
        [
            'statement transfomation',
            B3640['transform-statements!']
        ],
        [
            'code generation',
            B3641['compile-js']
        ],
        [
            'cleanup',
            ($module)['cleanup']
        ]
    ]);
}
{
    {
        ($module)['compile-to-string'] = function B3671(form__3672, env__3673) {
            return(B3630['reduce'](function B3674(result__3675, pass__3676) {
                var B3677 = pass__3676;
                {
                    var function__3678 = B3677['function'];
                    return(function__3678(result__3675, env__3673));
                }
            }, form__3672, ($module)['*passes*']));
        };
        ($module)['%export']('compile-to-string', ($module)['compile-to-string']);
    }
    B3630['%annotate-function'](($module)['compile-to-string'], 'compile-to-string', false);
}
