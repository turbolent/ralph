{
    var $module = Object.create(null);
    ($module)['%export'] = function B3572(name__3573, value__3574) {
        var B3575 = (exports);
        return(B3575[name__3573] = value__3574);
    };
}
var B3576 = require('ralph/core');
{
    var B3577 = require('ralph/format');
    {
        var B3578 = require('ralph/compiler/module');
        {
            var B3579 = require('ralph/compiler/environment');
            {
                var B3580 = require('ralph/compiler/macros');
                {
                    var B3581 = require('ralph/compiler/special-forms');
                    {
                        var B3582 = require('ralph/compiler/macroexpansion');
                        {
                            var B3583 = require('ralph/compiler/symbol-lifting');
                            {
                                var B3584 = require('ralph/compiler/alpha');
                                {
                                    var B3585 = require('ralph/compiler/anf');
                                    {
                                        var B3586 = require('ralph/compiler/statements');
                                        var B3587 = require('ralph/compiler/javascript');
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
B3576['do'](function B3589(name__3590) {
    if (($T)(B3576['not'](B3576['has?'](B3580['$internal-macros'], name__3590))))
        return(B3576['signal'](B3577['format-to-string']('No internal macro for special form: %s', name__3590)));
    else
        return(false);
}, B3576['object-properties'](B3581['$core-special-forms']));
{
    var B3592 = $K('module');
    {
        var B3593 = $K('name');
        {
            var B3594 = $K('special-forms');
            {
                var B3595 = $K('macros');
                {
                    var B3596 = $K('symbol-macros');
                    {
                        {
                            ($module)['make-module-environment'] = function B3597(module_name__3598) {
                                var all_symbol_macros__3599 = B3576['make-plain-object']();
                                {
                                    var all_macros__3600 = B3576['make-plain-object']();
                                    {
                                        B3576['extend!'](all_symbol_macros__3599, B3580['$internal-symbol-macros']);
                                        {
                                            B3576['extend!'](all_symbol_macros__3599, B3580['$core-symbol-macros']);
                                            {
                                                B3576['extend!'](all_macros__3600, B3580['$internal-macros']);
                                                {
                                                    B3576['extend!'](all_macros__3600, B3580['$core-macros']);
                                                    return(B3576['make'](B3579['<environment>'], B3592, B3576['make'](B3578['<module>'], B3593, module_name__3598), B3594, B3581['$internal-special-forms'], B3595, all_macros__3600, B3596, all_symbol_macros__3599));
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            ($module)['%export']('make-module-environment', ($module)['make-module-environment']);
                        }
                        B3576['%annotate-function'](($module)['make-module-environment'], 'make-module-environment', false);
                    }
                }
            }
        }
    }
}
($module)['<compilation-pass>'] = B3576['%make-class'](B3576['<object>'], {
    'name': false,
    'function': false
}, function Lcompilation_passG__3601() {
    var B3602 = (this);
    {
        B3602['name'] = (undefined);
        {
            var B3603 = (this);
            return(B3603['function'] = (undefined));
        }
    }
});
{
    var B3605 = $K('function');
    ($module)['*passes*'] = B3576['map'](function B3606(nameSfunction__3607) {
        var name__3608 = nameSfunction__3607[0];
        {
            var function__3609 = nameSfunction__3607[1];
            return(B3576['make'](($module)['<compilation-pass>'], B3593, name__3608, B3605, function__3609));
        }
    }, [
        [
            'macroexpansion',
            B3582['macroexpand-all']
        ],
        [
            'symbol lifting',
            B3583['lift-symbols']
        ],
        [
            'alpha conversion',
            B3584['alpha-convert-form']
        ],
        [
            'ANF transformation',
            B3585['normalize-term']
        ],
        [
            'statement transfomation',
            B3586['transform-statements!']
        ],
        [
            'code generation',
            B3587['compile-js']
        ]
    ]);
}
{
    {
        ($module)['compile-to-string'] = function B3613(form__3614, env__3615) {
            return(B3576['reduce'](function B3616(result__3617, pass__3618) {
                var B3619 = pass__3618;
                {
                    var function__3620 = B3619['function'];
                    return(function__3620(result__3617, env__3615));
                }
            }, form__3614, ($module)['*passes*']));
        };
        ($module)['%export']('compile-to-string', ($module)['compile-to-string']);
    }
    B3576['%annotate-function'](($module)['compile-to-string'], 'compile-to-string', false);
}
{
    ($module)['%eval'] = function B3622() {
        return(eval((arguments[0])));
    };
    {
        B3576['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
