{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B3587(name__3588, value__3589) {
            var B3591 = (exports);
            return(B3591[name__3588] = value__3589);
        };
        {
            ($module)['%eval'] = function B3590() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3592 = require('ralph/core');
{
    var B3593 = require('ralph/format');
    {
        var B3594 = require('ralph/compiler/module');
        {
            var B3595 = require('ralph/compiler/environment');
            {
                var B3596 = require('ralph/compiler/macros');
                {
                    var B3597 = require('ralph/compiler/special-forms');
                    {
                        var B3598 = require('ralph/compiler/macroexpansion');
                        {
                            var B3599 = require('ralph/compiler/symbol-lifting');
                            {
                                var B3600 = require('ralph/compiler/alpha');
                                {
                                    var B3601 = require('ralph/compiler/anf');
                                    {
                                        var B3602 = require('ralph/compiler/statements');
                                        var B3603 = require('ralph/compiler/javascript');
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
B3592['do'](function B3605(name__3606) {
    if (($T)(B3592['not'](B3592['has?'](B3596['$internal-macros'], name__3606))))
        return(B3592['signal'](B3593['format-to-string']('No internal macro for special form: %s', name__3606)));
    else
        return(false);
}, B3592['object-properties'](B3597['$core-special-forms']));
{
    var B3608 = $K('module');
    {
        var B3609 = $K('name');
        {
            var B3610 = $K('special-forms');
            {
                var B3611 = $K('macros');
                {
                    var B3612 = $K('symbol-macros');
                    {
                        {
                            ($module)['make-module-environment'] = function B3613(module_name__3614) {
                                var all_symbol_macros__3615 = B3592['make-plain-object']();
                                {
                                    var all_macros__3616 = B3592['make-plain-object']();
                                    {
                                        B3592['extend!'](all_symbol_macros__3615, B3596['$internal-symbol-macros']);
                                        {
                                            B3592['extend!'](all_symbol_macros__3615, B3596['$core-symbol-macros']);
                                            {
                                                B3592['extend!'](all_macros__3616, B3596['$internal-macros']);
                                                {
                                                    B3592['extend!'](all_macros__3616, B3596['$core-macros']);
                                                    return(B3592['make'](B3595['<environment>'], B3608, B3592['make'](B3594['<module>'], B3609, module_name__3614), B3610, B3597['$internal-special-forms'], B3611, all_macros__3616, B3612, all_symbol_macros__3615));
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                            ($module)['%export']('make-module-environment', ($module)['make-module-environment']);
                        }
                        B3592['%annotate-function'](($module)['make-module-environment'], 'make-module-environment', false);
                    }
                }
            }
        }
    }
}
($module)['<compilation-pass>'] = B3592['%make-class'](B3592['<object>'], {
    'name': false,
    'function': false
}, function Lcompilation_passG__3617() {
    var B3618 = (this);
    {
        B3618['name'] = (undefined);
        {
            var B3619 = (this);
            return(B3619['function'] = (undefined));
        }
    }
});
{
    var B3621 = $K('function');
    ($module)['*passes*'] = B3592['map'](function B3622(nameSfunction__3623) {
        var name__3624 = nameSfunction__3623[0];
        {
            var function__3625 = nameSfunction__3623[1];
            return(B3592['make'](($module)['<compilation-pass>'], B3609, name__3624, B3621, function__3625));
        }
    }, [
        [
            'macroexpansion',
            B3598['macroexpand-all']
        ],
        [
            'symbol lifting',
            B3599['lift-symbols']
        ],
        [
            'alpha conversion',
            B3600['alpha-convert-form']
        ],
        [
            'ANF transformation',
            B3601['normalize-term']
        ],
        [
            'statement transfomation',
            B3602['transform-statements!']
        ],
        [
            'code generation',
            B3603['compile-js']
        ]
    ]);
}
{
    {
        ($module)['compile-to-string'] = function B3629(form__3630, env__3631) {
            return(B3592['reduce'](function B3632(result__3633, pass__3634) {
                var B3635 = pass__3634;
                {
                    var function__3636 = B3635['function'];
                    return(function__3636(result__3633, env__3631));
                }
            }, form__3630, ($module)['*passes*']));
        };
        ($module)['%export']('compile-to-string', ($module)['compile-to-string']);
    }
    B3592['%annotate-function'](($module)['compile-to-string'], 'compile-to-string', false);
}
