require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2849(name__2850, value__2851) {
            var B2853 = (exports);
            return(B2853[name__2850] = value__2851);
        };
        {
            ($module)['%eval'] = function B2852() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2854 = require('ralph/core');
var B2855 = require('ralph/compiler/utilities');
{
    {
        ($module)['lift-symbols'] = function B2857(exp__2858, env__2859) {
            var result__2860 = ($module)['lift-symbol'](exp__2858, env__2859, B2854['identity']);
            {
                if (($T)(B2854['not'](B2854['get'](env__2859, 'persistent?'))))
                    B2854['remove-property!'](env__2859, 'lifted');
                return(result__2860);
            }
        };
        ($module)['%export']('lift-symbols', ($module)['lift-symbols']);
    }
    B2854['%annotate-function'](($module)['lift-symbols'], 'lift-symbols', false);
}
{
    var B2882 = $K('module');
    {
        var B2883 = $S('%bind', 'ralph/core');
        {
            var B2884 = $S('%method', 'ralph/core');
            {
                var B2885 = $S('%set', 'ralph/core');
                {
                    var B2886 = $S('%get-property', 'ralph/core');
                    {
                        var B2887 = $S('%try', 'ralph/core');
                        {
                            ($module)['lift-symbol'] = function B2888(exp__2889, env__2890, k__2891) {
                                var B2945 = false;
                                if (($T)(B2854['instance?'](exp__2889, B2854['<array>'])))
                                    B2945 = B2854['not'](B2854['empty?'](exp__2889));
                                else
                                    B2945 = false;
                                if (($T)(B2945)) {
                                    var B2892 = B2854['symbol-name'](B2854['first'](exp__2889));
                                    if (($T)(B2854['=='](B2892, '%quote'))) {
                                        var B2893 = B2854['destructure-symbol'](B2854['second'](exp__2889));
                                        {
                                            var name__2894 = B2893[0];
                                            {
                                                var module_name__2895 = B2893[1];
                                                return(($module)['lift-value'](name__2894, exp__2889, 'symbol', env__2890, k__2891, B2882, module_name__2895));
                                            }
                                        }
                                    } else if (($T)(B2854['=='](B2892, '%bind'))) {
                                        var ____2896 = exp__2889[0];
                                        {
                                            var B2897 = exp__2889[1];
                                            {
                                                var identifier__2898 = B2897[0];
                                                {
                                                    var value__2899 = B2897[1];
                                                    {
                                                        var form__2900 = exp__2889[2];
                                                        return(($module)['lift-symbol*']([
                                                            value__2899,
                                                            form__2900
                                                        ], env__2890, function B2901(formsT__2902) {
                                                            var valueT__2903 = formsT__2902[0];
                                                            {
                                                                var formT__2904 = formsT__2902[1];
                                                                return(k__2891([
                                                                    B2883,
                                                                    [
                                                                        identifier__2898,
                                                                        valueT__2903
                                                                    ],
                                                                    formT__2904
                                                                ]));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        }
                                    } else if (($T)(B2854['=='](B2892, '%method'))) {
                                        var ____2905 = exp__2889[0];
                                        {
                                            var name__2906 = exp__2889[1];
                                            {
                                                var parameters__2907 = exp__2889[2];
                                                {
                                                    var form__2908 = exp__2889[3];
                                                    return(($module)['lift-symbol'](form__2908, env__2890, function B2909(formT__2910) {
                                                        return(k__2891([
                                                            B2884,
                                                            name__2906,
                                                            parameters__2907,
                                                            formT__2910
                                                        ]));
                                                    }));
                                                }
                                            }
                                        }
                                    } else if (($T)(B2854['=='](B2892, '%set'))) {
                                        var ____2911 = exp__2889[0];
                                        {
                                            var place__2912 = exp__2889[1];
                                            {
                                                var value__2913 = exp__2889[2];
                                                return(($module)['lift-symbol'](value__2913, env__2890, function B2914(valueT__2915) {
                                                    if (($T)(B2855['op?']('%get-property', place__2912)))
                                                        return(($module)['lift-symbol**'](B2854['rest'](place__2912), env__2890, function B2916(argumentsT__2917) {
                                                            return(k__2891([
                                                                B2885,
                                                                B2854['%concat']([B2886], argumentsT__2917),
                                                                valueT__2915
                                                            ]));
                                                        }));
                                                    else
                                                        return(k__2891([
                                                            B2885,
                                                            place__2912,
                                                            valueT__2915
                                                        ]));
                                                }));
                                            }
                                        }
                                    } else {
                                        var B2918 = B2854['=='](B2892, '%define');
                                        {
                                            var B2946 = false;
                                            if (($T)(B2918))
                                                B2946 = B2918;
                                            else
                                                B2946 = B2854['=='](B2892, '%var');
                                            if (($T)(B2946)) {
                                                var op__2919 = exp__2889[0];
                                                {
                                                    var identifier__2920 = exp__2889[1];
                                                    {
                                                        var value__2921 = exp__2889[2];
                                                        return(($module)['lift-symbol'](value__2921, env__2890, function B2922(valueT__2923) {
                                                            return(k__2891([
                                                                op__2919,
                                                                identifier__2920,
                                                                valueT__2923
                                                            ]));
                                                        }));
                                                    }
                                                }
                                            } else {
                                                var B2924 = B2854['=='](B2892, '%if');
                                                {
                                                    var B2947 = false;
                                                    if (($T)(B2924))
                                                        B2947 = B2924;
                                                    else {
                                                        var B2925 = B2854['=='](B2892, '%begin');
                                                        if (($T)(B2925))
                                                            B2947 = B2925;
                                                        else {
                                                            var B2926 = B2854['=='](B2892, '%while');
                                                            if (($T)(B2926))
                                                                B2947 = B2926;
                                                            else {
                                                                var B2927 = B2854['=='](B2892, '%infix');
                                                                if (($T)(B2927))
                                                                    B2947 = B2927;
                                                                else {
                                                                    var B2928 = B2854['=='](B2892, '%native');
                                                                    if (($T)(B2928))
                                                                        B2947 = B2928;
                                                                    else {
                                                                        var B2929 = B2854['=='](B2892, '%native-call');
                                                                        if (($T)(B2929))
                                                                            B2947 = B2929;
                                                                        else {
                                                                            var B2930 = B2854['=='](B2892, '%object');
                                                                            if (($T)(B2930))
                                                                                B2947 = B2930;
                                                                            else {
                                                                                var B2931 = B2854['=='](B2892, '%array');
                                                                                if (($T)(B2931))
                                                                                    B2947 = B2931;
                                                                                else
                                                                                    B2947 = B2854['=='](B2892, '%get-property');
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (($T)(B2947)) {
                                                        var op__2932 = exp__2889[0];
                                                        {
                                                            var forms__2933 = $SL.call(exp__2889, 1);
                                                            return(($module)['lift-symbol*'](forms__2933, env__2890, function B2934(formsT__2935) {
                                                                return(k__2891(B2854['%concat']([op__2932], formsT__2935)));
                                                            }));
                                                        }
                                                    } else if (($T)(B2854['=='](B2892, '%try'))) {
                                                        var ____2936 = exp__2889[0];
                                                        {
                                                            var protected_form__2937 = exp__2889[1];
                                                            {
                                                                var identifier__2938 = exp__2889[2];
                                                                {
                                                                    var handling_form__2939 = exp__2889[3];
                                                                    return(($module)['lift-symbol*']([
                                                                        protected_form__2937,
                                                                        handling_form__2939
                                                                    ], env__2890, function B2940(formsT__2941) {
                                                                        var protected_formT__2942 = formsT__2941[0];
                                                                        {
                                                                            var handling_formT__2943 = formsT__2941[1];
                                                                            return(k__2891([
                                                                                B2887,
                                                                                protected_formT__2942,
                                                                                identifier__2938,
                                                                                handling_formT__2943
                                                                            ]));
                                                                        }
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(($module)['lift-symbol**'](exp__2889, env__2890, k__2891));
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var B2944 = exp__2889;
                                    if (($T)(B2854['instance?'](B2944, B2854['<keyword>'])))
                                        return(($module)['lift-value'](B2854['symbol-name'](exp__2889), exp__2889, 'keyword', env__2890, k__2891));
                                    else if (($T)(B2854['instance?'](B2944, B2854['<hash-symbol>'])))
                                        return(($module)['lift-value'](B2854['symbol-name'](exp__2889), exp__2889, 'hash', env__2890, k__2891));
                                    else
                                        return(k__2891(exp__2889));
                                }
                            };
                            B2854['%annotate-function'](($module)['lift-symbol'], 'lift-symbol', false);
                        }
                    }
                }
            }
        }
    }
}
{
    var B2952 = $S('%begin', 'ralph/core');
    {
        var B2953 = $S('%define', 'ralph/core');
        {
            ($module)['lift-value'] = function B2954(name__2955, value__2956, type__2957, env__2958, k__2959) {
                var B2960 = $SL.call(arguments, 5);
                {
                    var B2961 = B2854['%keys'](B2960, { 'module': '' });
                    {
                        var module__2962 = B2961['module'];
                        {
                            var B2963 = B2854['get'](env__2958, 'lifted', type__2957, module__2962, name__2955);
                            if (($T)(B2963)) {
                                var t__2964 = B2963;
                                return(k__2959(t__2964));
                            } else {
                                var t__2965 = B2854['get-setter'](env__2958, 'lifted', type__2957, module__2962, name__2955, B2854['generate-symbol']());
                                return([
                                    B2952,
                                    [
                                        B2953,
                                        t__2965,
                                        value__2956
                                    ],
                                    k__2959(t__2965)
                                ]);
                            }
                        }
                    }
                }
            };
            B2854['%annotate-function'](($module)['lift-value'], 'lift-value', false);
        }
    }
}
{
    ($module)['lift-symbol*'] = function B2967(expT__2968, env__2969, k__2970) {
        if (($T)(B2854['empty?'](expT__2968)))
            return(k__2970([]));
        else
            return(($module)['lift-symbol**'](expT__2968, env__2969, k__2970));
    };
    B2854['%annotate-function'](($module)['lift-symbol*'], 'lift-symbol*', false);
}
{
    ($module)['lift-symbol**'] = function B2974(exp__2975, env__2976, k__2977) {
        return(($module)['lift-symbol'](B2854['first'](exp__2975), env__2976, function B2978(t__2979) {
            return(($module)['lift-symbol*'](B2854['rest'](exp__2975), env__2976, function B2980(tT__2981) {
                return(k__2977(B2854['cons'](t__2979, tT__2981)));
            }));
        }));
    };
    B2854['%annotate-function'](($module)['lift-symbol**'], 'lift-symbol**', false);
}
