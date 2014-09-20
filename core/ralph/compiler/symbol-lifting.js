require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2851(name__2852, value__2853) {
            var B2855 = (exports);
            return(B2855[name__2852] = value__2853);
        };
        {
            ($module)['%eval'] = function B2854() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2856 = require('ralph/core');
var B2857 = require('ralph/compiler/utilities');
{
    {
        ($module)['lift-symbols'] = function B2859(exp__2860, env__2861) {
            var result__2862 = ($module)['lift-symbol'](exp__2860, env__2861, B2856['identity']);
            {
                if (($T)(B2856['not'](B2856['get'](env__2861, 'persistent?'))))
                    B2856['remove-property!'](env__2861, 'lifted');
                return(result__2862);
            }
        };
        ($module)['%export']('lift-symbols', ($module)['lift-symbols']);
    }
    B2856['%annotate-function'](($module)['lift-symbols'], 'lift-symbols', false);
}
{
    var B2884 = $K('module');
    {
        var B2885 = $S('%bind', 'ralph/core');
        {
            var B2886 = $S('%method', 'ralph/core');
            {
                var B2887 = $S('%set', 'ralph/core');
                {
                    var B2888 = $S('%get-property', 'ralph/core');
                    {
                        var B2889 = $S('%try', 'ralph/core');
                        {
                            ($module)['lift-symbol'] = function B2890(exp__2891, env__2892, k__2893) {
                                var B2947 = false;
                                if (($T)(B2856['instance?'](exp__2891, B2856['<array>'])))
                                    B2947 = B2856['not'](B2856['empty?'](exp__2891));
                                else
                                    B2947 = false;
                                if (($T)(B2947)) {
                                    var B2894 = B2856['symbol-name'](B2856['first'](exp__2891));
                                    if (($T)(B2856['=='](B2894, '%quote'))) {
                                        var B2895 = B2856['destructure-symbol'](B2856['second'](exp__2891));
                                        {
                                            var name__2896 = B2895[0];
                                            {
                                                var module_name__2897 = B2895[1];
                                                return(($module)['lift-value'](name__2896, exp__2891, 'symbol', env__2892, k__2893, B2884, module_name__2897));
                                            }
                                        }
                                    } else if (($T)(B2856['=='](B2894, '%bind'))) {
                                        var ____2898 = exp__2891[0];
                                        {
                                            var B2899 = exp__2891[1];
                                            {
                                                var identifier__2900 = B2899[0];
                                                {
                                                    var value__2901 = B2899[1];
                                                    {
                                                        var form__2902 = exp__2891[2];
                                                        return(($module)['lift-symbol*']([
                                                            value__2901,
                                                            form__2902
                                                        ], env__2892, function B2903(formsT__2904) {
                                                            var valueT__2905 = formsT__2904[0];
                                                            {
                                                                var formT__2906 = formsT__2904[1];
                                                                return(k__2893([
                                                                    B2885,
                                                                    [
                                                                        identifier__2900,
                                                                        valueT__2905
                                                                    ],
                                                                    formT__2906
                                                                ]));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        }
                                    } else if (($T)(B2856['=='](B2894, '%method'))) {
                                        var ____2907 = exp__2891[0];
                                        {
                                            var name__2908 = exp__2891[1];
                                            {
                                                var parameters__2909 = exp__2891[2];
                                                {
                                                    var form__2910 = exp__2891[3];
                                                    return(($module)['lift-symbol'](form__2910, env__2892, function B2911(formT__2912) {
                                                        return(k__2893([
                                                            B2886,
                                                            name__2908,
                                                            parameters__2909,
                                                            formT__2912
                                                        ]));
                                                    }));
                                                }
                                            }
                                        }
                                    } else if (($T)(B2856['=='](B2894, '%set'))) {
                                        var ____2913 = exp__2891[0];
                                        {
                                            var place__2914 = exp__2891[1];
                                            {
                                                var value__2915 = exp__2891[2];
                                                return(($module)['lift-symbol'](value__2915, env__2892, function B2916(valueT__2917) {
                                                    if (($T)(B2857['op?']('%get-property', place__2914)))
                                                        return(($module)['lift-symbol**'](B2856['rest'](place__2914), env__2892, function B2918(argumentsT__2919) {
                                                            return(k__2893([
                                                                B2887,
                                                                B2856['%concat']([B2888], argumentsT__2919),
                                                                valueT__2917
                                                            ]));
                                                        }));
                                                    else
                                                        return(k__2893([
                                                            B2887,
                                                            place__2914,
                                                            valueT__2917
                                                        ]));
                                                }));
                                            }
                                        }
                                    } else {
                                        var B2920 = B2856['=='](B2894, '%define');
                                        {
                                            var B2948 = false;
                                            if (($T)(B2920))
                                                B2948 = B2920;
                                            else
                                                B2948 = B2856['=='](B2894, '%var');
                                            if (($T)(B2948)) {
                                                var op__2921 = exp__2891[0];
                                                {
                                                    var identifier__2922 = exp__2891[1];
                                                    {
                                                        var value__2923 = exp__2891[2];
                                                        return(($module)['lift-symbol'](value__2923, env__2892, function B2924(valueT__2925) {
                                                            return(k__2893([
                                                                op__2921,
                                                                identifier__2922,
                                                                valueT__2925
                                                            ]));
                                                        }));
                                                    }
                                                }
                                            } else {
                                                var B2926 = B2856['=='](B2894, '%if');
                                                {
                                                    var B2949 = false;
                                                    if (($T)(B2926))
                                                        B2949 = B2926;
                                                    else {
                                                        var B2927 = B2856['=='](B2894, '%begin');
                                                        if (($T)(B2927))
                                                            B2949 = B2927;
                                                        else {
                                                            var B2928 = B2856['=='](B2894, '%while');
                                                            if (($T)(B2928))
                                                                B2949 = B2928;
                                                            else {
                                                                var B2929 = B2856['=='](B2894, '%infix');
                                                                if (($T)(B2929))
                                                                    B2949 = B2929;
                                                                else {
                                                                    var B2930 = B2856['=='](B2894, '%native');
                                                                    if (($T)(B2930))
                                                                        B2949 = B2930;
                                                                    else {
                                                                        var B2931 = B2856['=='](B2894, '%native-call');
                                                                        if (($T)(B2931))
                                                                            B2949 = B2931;
                                                                        else {
                                                                            var B2932 = B2856['=='](B2894, '%object');
                                                                            if (($T)(B2932))
                                                                                B2949 = B2932;
                                                                            else {
                                                                                var B2933 = B2856['=='](B2894, '%array');
                                                                                if (($T)(B2933))
                                                                                    B2949 = B2933;
                                                                                else
                                                                                    B2949 = B2856['=='](B2894, '%get-property');
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (($T)(B2949)) {
                                                        var op__2934 = exp__2891[0];
                                                        {
                                                            var forms__2935 = $SL.call(exp__2891, 1);
                                                            return(($module)['lift-symbol*'](forms__2935, env__2892, function B2936(formsT__2937) {
                                                                return(k__2893(B2856['%concat']([op__2934], formsT__2937)));
                                                            }));
                                                        }
                                                    } else if (($T)(B2856['=='](B2894, '%try'))) {
                                                        var ____2938 = exp__2891[0];
                                                        {
                                                            var protected_form__2939 = exp__2891[1];
                                                            {
                                                                var identifier__2940 = exp__2891[2];
                                                                {
                                                                    var handling_form__2941 = exp__2891[3];
                                                                    return(($module)['lift-symbol*']([
                                                                        protected_form__2939,
                                                                        handling_form__2941
                                                                    ], env__2892, function B2942(formsT__2943) {
                                                                        var protected_formT__2944 = formsT__2943[0];
                                                                        {
                                                                            var handling_formT__2945 = formsT__2943[1];
                                                                            return(k__2893([
                                                                                B2889,
                                                                                protected_formT__2944,
                                                                                identifier__2940,
                                                                                handling_formT__2945
                                                                            ]));
                                                                        }
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(($module)['lift-symbol**'](exp__2891, env__2892, k__2893));
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var B2946 = exp__2891;
                                    if (($T)(B2856['instance?'](B2946, B2856['<keyword>'])))
                                        return(($module)['lift-value'](B2856['symbol-name'](exp__2891), exp__2891, 'keyword', env__2892, k__2893));
                                    else if (($T)(B2856['instance?'](B2946, B2856['<hash-symbol>'])))
                                        return(($module)['lift-value'](B2856['symbol-name'](exp__2891), exp__2891, 'hash', env__2892, k__2893));
                                    else
                                        return(k__2893(exp__2891));
                                }
                            };
                            B2856['%annotate-function'](($module)['lift-symbol'], 'lift-symbol', false);
                        }
                    }
                }
            }
        }
    }
}
{
    var B2954 = $S('%begin', 'ralph/core');
    {
        var B2955 = $S('%define', 'ralph/core');
        {
            ($module)['lift-value'] = function B2956(name__2957, value__2958, type__2959, env__2960, k__2961) {
                var B2962 = $SL.call(arguments, 5);
                {
                    var B2963 = B2856['%keys'](B2962, { 'module': '' });
                    {
                        var module__2964 = B2963['module'];
                        {
                            var B2965 = B2856['get'](env__2960, 'lifted', type__2959, module__2964, name__2957);
                            if (($T)(B2965)) {
                                var t__2966 = B2965;
                                return(k__2961(t__2966));
                            } else {
                                var t__2967 = B2856['get-setter'](env__2960, 'lifted', type__2959, module__2964, name__2957, B2856['generate-symbol']());
                                return([
                                    B2954,
                                    [
                                        B2955,
                                        t__2967,
                                        value__2958
                                    ],
                                    k__2961(t__2967)
                                ]);
                            }
                        }
                    }
                }
            };
            B2856['%annotate-function'](($module)['lift-value'], 'lift-value', false);
        }
    }
}
{
    ($module)['lift-symbol*'] = function B2969(expT__2970, env__2971, k__2972) {
        if (($T)(B2856['empty?'](expT__2970)))
            return(k__2972([]));
        else
            return(($module)['lift-symbol**'](expT__2970, env__2971, k__2972));
    };
    B2856['%annotate-function'](($module)['lift-symbol*'], 'lift-symbol*', false);
}
{
    ($module)['lift-symbol**'] = function B2976(exp__2977, env__2978, k__2979) {
        return(($module)['lift-symbol'](B2856['first'](exp__2977), env__2978, function B2980(t__2981) {
            return(($module)['lift-symbol*'](B2856['rest'](exp__2977), env__2978, function B2982(tT__2983) {
                return(k__2979(B2856['cons'](t__2981, tT__2983)));
            }));
        }));
    };
    B2856['%annotate-function'](($module)['lift-symbol**'], 'lift-symbol**', false);
}
