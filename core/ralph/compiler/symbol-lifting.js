require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2839(name__2840, value__2841) {
            var B2843 = (exports);
            return(B2843[name__2840] = value__2841);
        };
        {
            ($module)['%eval'] = function B2842() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2844 = require('ralph/core');
var B2845 = require('ralph/compiler/utilities');
{
    {
        ($module)['lift-symbols'] = function B2847(exp__2848, env__2849) {
            var result__2850 = ($module)['lift-symbol'](exp__2848, env__2849, B2844['identity']);
            {
                if (($T)(B2844['not'](B2844['get'](env__2849, 'persistent?'))))
                    B2844['remove-property!'](env__2849, 'lifted');
                return(result__2850);
            }
        };
        ($module)['%export']('lift-symbols', ($module)['lift-symbols']);
    }
    B2844['%annotate-function'](($module)['lift-symbols'], 'lift-symbols', false);
}
{
    var B2872 = $K('module');
    {
        var B2873 = $S('%bind', 'ralph/core');
        {
            var B2874 = $S('%method', 'ralph/core');
            {
                var B2875 = $S('%set', 'ralph/core');
                {
                    var B2876 = $S('%get-property', 'ralph/core');
                    {
                        var B2877 = $S('%try', 'ralph/core');
                        {
                            ($module)['lift-symbol'] = function B2878(exp__2879, env__2880, k__2881) {
                                var B2935 = false;
                                if (($T)(B2844['instance?'](exp__2879, B2844['<array>'])))
                                    B2935 = B2844['not'](B2844['empty?'](exp__2879));
                                else
                                    B2935 = false;
                                if (($T)(B2935)) {
                                    var B2882 = B2844['symbol-name'](B2844['first'](exp__2879));
                                    if (($T)(B2844['=='](B2882, '%quote'))) {
                                        var B2883 = B2844['destructure-symbol'](B2844['second'](exp__2879));
                                        {
                                            var name__2884 = B2883[0];
                                            {
                                                var module_name__2885 = B2883[1];
                                                return(($module)['lift-value'](name__2884, exp__2879, 'symbol', env__2880, k__2881, B2872, module_name__2885));
                                            }
                                        }
                                    } else if (($T)(B2844['=='](B2882, '%bind'))) {
                                        var ____2886 = exp__2879[0];
                                        {
                                            var B2887 = exp__2879[1];
                                            {
                                                var identifier__2888 = B2887[0];
                                                {
                                                    var value__2889 = B2887[1];
                                                    {
                                                        var form__2890 = exp__2879[2];
                                                        return(($module)['lift-symbol*']([
                                                            value__2889,
                                                            form__2890
                                                        ], env__2880, function B2891(formsT__2892) {
                                                            var valueT__2893 = formsT__2892[0];
                                                            {
                                                                var formT__2894 = formsT__2892[1];
                                                                return(k__2881([
                                                                    B2873,
                                                                    [
                                                                        identifier__2888,
                                                                        valueT__2893
                                                                    ],
                                                                    formT__2894
                                                                ]));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        }
                                    } else if (($T)(B2844['=='](B2882, '%method'))) {
                                        var ____2895 = exp__2879[0];
                                        {
                                            var name__2896 = exp__2879[1];
                                            {
                                                var parameters__2897 = exp__2879[2];
                                                {
                                                    var form__2898 = exp__2879[3];
                                                    return(($module)['lift-symbol'](form__2898, env__2880, function B2899(formT__2900) {
                                                        return(k__2881([
                                                            B2874,
                                                            name__2896,
                                                            parameters__2897,
                                                            formT__2900
                                                        ]));
                                                    }));
                                                }
                                            }
                                        }
                                    } else if (($T)(B2844['=='](B2882, '%set'))) {
                                        var ____2901 = exp__2879[0];
                                        {
                                            var place__2902 = exp__2879[1];
                                            {
                                                var value__2903 = exp__2879[2];
                                                return(($module)['lift-symbol'](value__2903, env__2880, function B2904(valueT__2905) {
                                                    if (($T)(B2845['op?']('%get-property', place__2902)))
                                                        return(($module)['lift-symbol**'](B2844['rest'](place__2902), env__2880, function B2906(argumentsT__2907) {
                                                            return(k__2881([
                                                                B2875,
                                                                B2844['%concat']([B2876], argumentsT__2907),
                                                                valueT__2905
                                                            ]));
                                                        }));
                                                    else
                                                        return(k__2881([
                                                            B2875,
                                                            place__2902,
                                                            valueT__2905
                                                        ]));
                                                }));
                                            }
                                        }
                                    } else {
                                        var B2908 = B2844['=='](B2882, '%define');
                                        {
                                            var B2936 = false;
                                            if (($T)(B2908))
                                                B2936 = B2908;
                                            else
                                                B2936 = B2844['=='](B2882, '%var');
                                            if (($T)(B2936)) {
                                                var op__2909 = exp__2879[0];
                                                {
                                                    var identifier__2910 = exp__2879[1];
                                                    {
                                                        var value__2911 = exp__2879[2];
                                                        return(($module)['lift-symbol'](value__2911, env__2880, function B2912(valueT__2913) {
                                                            return(k__2881([
                                                                op__2909,
                                                                identifier__2910,
                                                                valueT__2913
                                                            ]));
                                                        }));
                                                    }
                                                }
                                            } else {
                                                var B2914 = B2844['=='](B2882, '%if');
                                                {
                                                    var B2937 = false;
                                                    if (($T)(B2914))
                                                        B2937 = B2914;
                                                    else {
                                                        var B2915 = B2844['=='](B2882, '%begin');
                                                        if (($T)(B2915))
                                                            B2937 = B2915;
                                                        else {
                                                            var B2916 = B2844['=='](B2882, '%while');
                                                            if (($T)(B2916))
                                                                B2937 = B2916;
                                                            else {
                                                                var B2917 = B2844['=='](B2882, '%infix');
                                                                if (($T)(B2917))
                                                                    B2937 = B2917;
                                                                else {
                                                                    var B2918 = B2844['=='](B2882, '%native');
                                                                    if (($T)(B2918))
                                                                        B2937 = B2918;
                                                                    else {
                                                                        var B2919 = B2844['=='](B2882, '%native-call');
                                                                        if (($T)(B2919))
                                                                            B2937 = B2919;
                                                                        else {
                                                                            var B2920 = B2844['=='](B2882, '%object');
                                                                            if (($T)(B2920))
                                                                                B2937 = B2920;
                                                                            else {
                                                                                var B2921 = B2844['=='](B2882, '%array');
                                                                                if (($T)(B2921))
                                                                                    B2937 = B2921;
                                                                                else
                                                                                    B2937 = B2844['=='](B2882, '%get-property');
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (($T)(B2937)) {
                                                        var op__2922 = exp__2879[0];
                                                        {
                                                            var forms__2923 = $SL.call(exp__2879, 1);
                                                            return(($module)['lift-symbol*'](forms__2923, env__2880, function B2924(formsT__2925) {
                                                                return(k__2881(B2844['%concat']([op__2922], formsT__2925)));
                                                            }));
                                                        }
                                                    } else if (($T)(B2844['=='](B2882, '%try'))) {
                                                        var ____2926 = exp__2879[0];
                                                        {
                                                            var protected_form__2927 = exp__2879[1];
                                                            {
                                                                var identifier__2928 = exp__2879[2];
                                                                {
                                                                    var handling_form__2929 = exp__2879[3];
                                                                    return(($module)['lift-symbol*']([
                                                                        protected_form__2927,
                                                                        handling_form__2929
                                                                    ], env__2880, function B2930(formsT__2931) {
                                                                        var protected_formT__2932 = formsT__2931[0];
                                                                        {
                                                                            var handling_formT__2933 = formsT__2931[1];
                                                                            return(k__2881([
                                                                                B2877,
                                                                                protected_formT__2932,
                                                                                identifier__2928,
                                                                                handling_formT__2933
                                                                            ]));
                                                                        }
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(($module)['lift-symbol**'](exp__2879, env__2880, k__2881));
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var B2934 = exp__2879;
                                    if (($T)(B2844['instance?'](B2934, B2844['<keyword>'])))
                                        return(($module)['lift-value'](B2844['symbol-name'](exp__2879), exp__2879, 'keyword', env__2880, k__2881));
                                    else if (($T)(B2844['instance?'](B2934, B2844['<hash-symbol>'])))
                                        return(($module)['lift-value'](B2844['symbol-name'](exp__2879), exp__2879, 'hash', env__2880, k__2881));
                                    else
                                        return(k__2881(exp__2879));
                                }
                            };
                            B2844['%annotate-function'](($module)['lift-symbol'], 'lift-symbol', false);
                        }
                    }
                }
            }
        }
    }
}
{
    var B2942 = $S('%begin', 'ralph/core');
    {
        var B2943 = $S('%define', 'ralph/core');
        {
            ($module)['lift-value'] = function B2944(name__2945, value__2946, type__2947, env__2948, k__2949) {
                var B2950 = $SL.call(arguments, 5);
                {
                    var B2951 = B2844['%keys'](B2950, { 'module': '' });
                    {
                        var module__2952 = B2951['module'];
                        {
                            var B2953 = B2844['get'](env__2948, 'lifted', type__2947, module__2952, name__2945);
                            if (($T)(B2953)) {
                                var t__2954 = B2953;
                                return(k__2949(t__2954));
                            } else {
                                var t__2955 = B2844['get-setter'](env__2948, 'lifted', type__2947, module__2952, name__2945, B2844['generate-symbol']());
                                return([
                                    B2942,
                                    [
                                        B2943,
                                        t__2955,
                                        value__2946
                                    ],
                                    k__2949(t__2955)
                                ]);
                            }
                        }
                    }
                }
            };
            B2844['%annotate-function'](($module)['lift-value'], 'lift-value', false);
        }
    }
}
{
    ($module)['lift-symbol*'] = function B2957(expT__2958, env__2959, k__2960) {
        if (($T)(B2844['empty?'](expT__2958)))
            return(k__2960([]));
        else
            return(($module)['lift-symbol**'](expT__2958, env__2959, k__2960));
    };
    B2844['%annotate-function'](($module)['lift-symbol*'], 'lift-symbol*', false);
}
{
    ($module)['lift-symbol**'] = function B2964(exp__2965, env__2966, k__2967) {
        return(($module)['lift-symbol'](B2844['first'](exp__2965), env__2966, function B2968(t__2969) {
            return(($module)['lift-symbol*'](B2844['rest'](exp__2965), env__2966, function B2970(tT__2971) {
                return(k__2967(B2844['cons'](t__2969, tT__2971)));
            }));
        }));
    };
    B2844['%annotate-function'](($module)['lift-symbol**'], 'lift-symbol**', false);
}
