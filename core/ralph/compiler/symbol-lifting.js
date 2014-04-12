{
    var $module = Object.create(null);
    var Mexport = function B2955(name__2956, value__2957) {
        var B2958 = (exports);
        return(B2958[name__2956] = value__2957);
    };
}
var B2959 = require('ralph/core');
var B2960 = require('ralph/compiler/utilities');
{
    {
        var lift_symbols = function B2962(exp__2963, env__2964) {
            return(lift_symbol(exp__2963, env__2964, B2959['identity']));
        };
        Mexport('lift-symbols', lift_symbols);
    }
    B2959['%annotate-function'](lift_symbols, 'lift-symbols', false);
}
{
    var B2986 = $K('module');
    {
        var B2987 = $S('%bind', 'ralph/core');
        {
            var B2988 = $S('%method', 'ralph/core');
            {
                var B2989 = $S('%set', 'ralph/core');
                {
                    var B2990 = $S('%get-property', 'ralph/core');
                    {
                        var B2991 = $S('%try', 'ralph/core');
                        {
                            var lift_symbol = function B2992(exp__2993, env__2994, k__2995) {
                                var B3049 = false;
                                if (($T)(B2959['instance?'](exp__2993, B2959['<array>'])))
                                    B3049 = B2959['not'](B2959['empty?'](exp__2993));
                                else
                                    B3049 = false;
                                if (($T)(B3049)) {
                                    var B2996 = B2959['symbol-name'](B2959['first'](exp__2993));
                                    if (($T)(B2959['=='](B2996, '%quote'))) {
                                        var B2997 = B2959['destructure-symbol'](B2959['second'](exp__2993));
                                        {
                                            var name__2998 = B2997[0];
                                            {
                                                var module_name__2999 = B2997[1];
                                                return(lift_value(name__2998, exp__2993, 'symbol', env__2994, k__2995, B2986, module_name__2999));
                                            }
                                        }
                                    } else if (($T)(B2959['=='](B2996, '%bind'))) {
                                        var ____3000 = exp__2993[0];
                                        {
                                            var B3001 = exp__2993[1];
                                            {
                                                var identifier__3002 = B3001[0];
                                                {
                                                    var value__3003 = B3001[1];
                                                    {
                                                        var form__3004 = exp__2993[2];
                                                        return(lift_symbolT([
                                                            value__3003,
                                                            form__3004
                                                        ], env__2994, function B3005(formsT__3006) {
                                                            var valueT__3007 = formsT__3006[0];
                                                            {
                                                                var formT__3008 = formsT__3006[1];
                                                                return(k__2995([
                                                                    B2987,
                                                                    [
                                                                        identifier__3002,
                                                                        valueT__3007
                                                                    ],
                                                                    formT__3008
                                                                ]));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        }
                                    } else if (($T)(B2959['=='](B2996, '%method'))) {
                                        var ____3009 = exp__2993[0];
                                        {
                                            var name__3010 = exp__2993[1];
                                            {
                                                var parameters__3011 = exp__2993[2];
                                                {
                                                    var form__3012 = exp__2993[3];
                                                    return(lift_symbol(form__3012, env__2994, function B3013(formT__3014) {
                                                        return(k__2995([
                                                            B2988,
                                                            name__3010,
                                                            parameters__3011,
                                                            formT__3014
                                                        ]));
                                                    }));
                                                }
                                            }
                                        }
                                    } else if (($T)(B2959['=='](B2996, '%set'))) {
                                        var ____3015 = exp__2993[0];
                                        {
                                            var place__3016 = exp__2993[1];
                                            {
                                                var value__3017 = exp__2993[2];
                                                return(lift_symbol(value__3017, env__2994, function B3018(valueT__3019) {
                                                    if (($T)(B2960['op?']('%get-property', place__3016)))
                                                        return(lift_symbolTT(B2959['rest'](place__3016), env__2994, function B3020(argumentsT__3021) {
                                                            return(k__2995([
                                                                B2989,
                                                                B2959['%concat']([B2990], argumentsT__3021),
                                                                valueT__3019
                                                            ]));
                                                        }));
                                                    else
                                                        return(k__2995([
                                                            B2989,
                                                            place__3016,
                                                            valueT__3019
                                                        ]));
                                                }));
                                            }
                                        }
                                    } else {
                                        var B3022 = B2959['=='](B2996, '%define');
                                        {
                                            var B3050 = false;
                                            if (($T)(B3022))
                                                B3050 = B3022;
                                            else
                                                B3050 = B2959['=='](B2996, '%var');
                                            if (($T)(B3050)) {
                                                var op__3023 = exp__2993[0];
                                                {
                                                    var identifier__3024 = exp__2993[1];
                                                    {
                                                        var value__3025 = exp__2993[2];
                                                        return(lift_symbol(value__3025, env__2994, function B3026(valueT__3027) {
                                                            return(k__2995([
                                                                op__3023,
                                                                identifier__3024,
                                                                valueT__3027
                                                            ]));
                                                        }));
                                                    }
                                                }
                                            } else {
                                                var B3028 = B2959['=='](B2996, '%if');
                                                {
                                                    var B3051 = false;
                                                    if (($T)(B3028))
                                                        B3051 = B3028;
                                                    else {
                                                        var B3029 = B2959['=='](B2996, '%begin');
                                                        if (($T)(B3029))
                                                            B3051 = B3029;
                                                        else {
                                                            var B3030 = B2959['=='](B2996, '%while');
                                                            if (($T)(B3030))
                                                                B3051 = B3030;
                                                            else {
                                                                var B3031 = B2959['=='](B2996, '%infix');
                                                                if (($T)(B3031))
                                                                    B3051 = B3031;
                                                                else {
                                                                    var B3032 = B2959['=='](B2996, '%native');
                                                                    if (($T)(B3032))
                                                                        B3051 = B3032;
                                                                    else {
                                                                        var B3033 = B2959['=='](B2996, '%native-call');
                                                                        if (($T)(B3033))
                                                                            B3051 = B3033;
                                                                        else {
                                                                            var B3034 = B2959['=='](B2996, '%object');
                                                                            if (($T)(B3034))
                                                                                B3051 = B3034;
                                                                            else {
                                                                                var B3035 = B2959['=='](B2996, '%array');
                                                                                if (($T)(B3035))
                                                                                    B3051 = B3035;
                                                                                else
                                                                                    B3051 = B2959['=='](B2996, '%get-property');
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (($T)(B3051)) {
                                                        var op__3036 = exp__2993[0];
                                                        {
                                                            var forms__3037 = $SL.call(exp__2993, 1);
                                                            return(lift_symbolT(forms__3037, env__2994, function B3038(formsT__3039) {
                                                                return(k__2995(B2959['%concat']([op__3036], formsT__3039)));
                                                            }));
                                                        }
                                                    } else if (($T)(B2959['=='](B2996, '%try'))) {
                                                        var ____3040 = exp__2993[0];
                                                        {
                                                            var protected_form__3041 = exp__2993[1];
                                                            {
                                                                var identifier__3042 = exp__2993[2];
                                                                {
                                                                    var handling_form__3043 = exp__2993[3];
                                                                    return(lift_symbolT([
                                                                        protected_form__3041,
                                                                        handling_form__3043
                                                                    ], env__2994, function B3044(formsT__3045) {
                                                                        var protected_formT__3046 = formsT__3045[0];
                                                                        {
                                                                            var handling_formT__3047 = formsT__3045[1];
                                                                            return(k__2995([
                                                                                B2991,
                                                                                protected_formT__3046,
                                                                                identifier__3042,
                                                                                handling_formT__3047
                                                                            ]));
                                                                        }
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(lift_symbolTT(exp__2993, env__2994, k__2995));
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var B3048 = exp__2993;
                                    if (($T)(B2959['instance?'](B3048, B2959['<keyword>'])))
                                        return(lift_value(B2959['symbol-name'](exp__2993), exp__2993, 'keyword', env__2994, k__2995));
                                    else if (($T)(B2959['instance?'](B3048, B2959['<hash-symbol>'])))
                                        return(lift_value(B2959['symbol-name'](exp__2993), exp__2993, 'hash', env__2994, k__2995));
                                    else
                                        return(k__2995(exp__2993));
                                }
                            };
                            B2959['%annotate-function'](lift_symbol, 'lift-symbol', false);
                        }
                    }
                }
            }
        }
    }
}
{
    var B3056 = $S('%begin', 'ralph/core');
    {
        var B3057 = $S('%define', 'ralph/core');
        {
            var lift_value = function B3058(name__3059, value__3060, type__3061, env__3062, k__3063) {
                var B3064 = $SL.call(arguments, 5);
                {
                    var B3065 = B2959['%keys'](B3064, { 'module': '' });
                    {
                        var module__3066 = B3065['module'];
                        {
                            var B3067 = B2959['get'](env__3062, 'lifted', type__3061, module__3066, name__3059);
                            if (($T)(B3067)) {
                                var t__3068 = B3067;
                                return(k__3063(t__3068));
                            } else {
                                var t__3069 = B2959['get-setter'](env__3062, 'lifted', type__3061, module__3066, name__3059, B2959['generate-symbol']());
                                return([
                                    B3056,
                                    [
                                        B3057,
                                        t__3069,
                                        value__3060
                                    ],
                                    k__3063(t__3069)
                                ]);
                            }
                        }
                    }
                }
            };
            B2959['%annotate-function'](lift_value, 'lift-value', false);
        }
    }
}
{
    var lift_symbolT = function B3071(expT__3072, env__3073, k__3074) {
        if (($T)(B2959['empty?'](expT__3072)))
            return(k__3074([]));
        else
            return(lift_symbolTT(expT__3072, env__3073, k__3074));
    };
    B2959['%annotate-function'](lift_symbolT, 'lift-symbol*', false);
}
{
    var lift_symbolTT = function B3078(exp__3079, env__3080, k__3081) {
        return(lift_symbol(B2959['first'](exp__3079), env__3080, function B3082(t__3083) {
            return(lift_symbolT(B2959['rest'](exp__3079), env__3080, function B3084(tT__3085) {
                return(k__3081(B2959['cons'](t__3083, tT__3085)));
            }));
        }));
    };
    B2959['%annotate-function'](lift_symbolTT, 'lift-symbol**', false);
}
