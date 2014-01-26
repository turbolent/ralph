{
    var B2895 = require('ralph/core');
}
{
    var B2897 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B2895['%var'];
        var ralphScoreCCidentity = B2895['identity'];
        var ralphScoreCCMannotate_function = B2895['%annotate-function'];
        var lift_symbols__2903 = function B2899(exp__2900, env__2901) {
            return(lift_symbol__2902(exp__2900, env__2901, ralphScoreCCidentity));
        };
    }
    (exports)['lift-symbols'] = lift_symbols__2903;
    ralphScoreCCMannotate_function(lift_symbols__2903, 'lift_symbols', false);
}
{
    {
        var ralphScoreCCinstanceQ = B2895['instance?'];
        var ralphScoreCCLarrayG = B2895['<array>'];
        var ralphScoreCCnot = B2895['not'];
        var ralphScoreCCemptyQ = B2895['empty?'];
        var ralphScoreCCsymbol_name = B2895['symbol-name'];
        var ralphScoreCCfirst = B2895['first'];
        var ralphScoreCCEE = B2895['=='];
        var ralphScoreCCdestructure_symbol = B2895['destructure-symbol'];
        var ralphScoreCCsecond = B2895['second'];
        var ralphScompilerSutilitiesCCopQ = B2897['op?'];
        var ralphScoreCCrest = B2895['rest'];
        var ralphScoreCCMconcat = B2895['%concat'];
        var ralphScoreCCLkeywordG = B2895['<keyword>'];
        var ralphScoreCCLhash_symbolG = B2895['<hash-symbol>'];
        var B2932 = $K('module');
        var B2933 = $S('%bind', 'ralph/core');
        var B2934 = $S('%method', 'ralph/core');
        var B2935 = $S('%set', 'ralph/core');
        var B2936 = $S('%get-property', 'ralph/core');
        var B2937 = $S('%try', 'ralph/core');
        var lift_symbol__2902 = function B2938(exp__2939, env__2940, k__2941) {
            {
                var B2999 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(exp__2939, ralphScoreCCLarrayG)))
                B2999 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__2939));
            else
                B2999 = false;
            if (($T)(B2999)) {
                {
                    var B2942 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__2939));
                }
                if (($T)(ralphScoreCCEE(B2942, '%quote'))) {
                    {
                        var B2943 = ralphScoreCCdestructure_symbol(ralphScoreCCsecond(exp__2939));
                        var name__2944 = B2943[0];
                        var module_name__2945 = B2943[1];
                    }
                    return(lift_value__2946(name__2944, exp__2939, 'symbol', env__2940, k__2941, B2932, module_name__2945));
                } else if (($T)(ralphScoreCCEE(B2942, '%bind'))) {
                    {
                        var ____2947 = exp__2939[0];
                        var B2948 = exp__2939[1];
                        var identifier__2949 = B2948[0];
                        var value__2950 = B2948[1];
                        var form__2951 = exp__2939[2];
                    }
                    return(lift_symbolT__2952([
                        value__2950,
                        form__2951
                    ], env__2940, function B2953(formsT__2954) {
                        {
                            var valueT__2955 = formsT__2954[0];
                            var formT__2956 = formsT__2954[1];
                        }
                        return(k__2941([
                            B2933,
                            [
                                identifier__2949,
                                valueT__2955
                            ],
                            formT__2956
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B2942, '%method'))) {
                    {
                        var ____2957 = exp__2939[0];
                        var name__2958 = exp__2939[1];
                        var parameters__2959 = exp__2939[2];
                        var form__2960 = exp__2939[3];
                    }
                    return(lift_symbol__2902(form__2960, env__2940, function B2961(formT__2962) {
                        return(k__2941([
                            B2934,
                            name__2958,
                            parameters__2959,
                            formT__2962
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B2942, '%set'))) {
                    {
                        var ____2963 = exp__2939[0];
                        var place__2964 = exp__2939[1];
                        var value__2965 = exp__2939[2];
                    }
                    return(lift_symbol__2902(value__2965, env__2940, function B2966(valueT__2967) {
                        if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__2964)))
                            return(lift_symbolTT__2968(ralphScoreCCrest(place__2964), env__2940, function B2969(argumentsT__2970) {
                                return(k__2941([
                                    B2935,
                                    ralphScoreCCMconcat([B2936], argumentsT__2970),
                                    valueT__2967
                                ]));
                            }));
                        else
                            return(k__2941([
                                B2935,
                                place__2964,
                                valueT__2967
                            ]));
                    }));
                } else {
                    {
                        var B2971 = ralphScoreCCEE(B2942, '%define');
                        var B3000 = false;
                    }
                    if (($T)(B2971))
                        B3000 = B2971;
                    else
                        B3000 = ralphScoreCCEE(B2942, '%var');
                    if (($T)(B3000)) {
                        {
                            var op__2972 = exp__2939[0];
                            var identifier__2973 = exp__2939[1];
                            var value__2974 = exp__2939[2];
                        }
                        return(lift_symbol__2902(value__2974, env__2940, function B2975(valueT__2976) {
                            return(k__2941([
                                op__2972,
                                identifier__2973,
                                valueT__2976
                            ]));
                        }));
                    } else {
                        {
                            var B2977 = ralphScoreCCEE(B2942, '%if');
                            var B3001 = false;
                        }
                        if (($T)(B2977))
                            B3001 = B2977;
                        else {
                            {
                                var B2978 = ralphScoreCCEE(B2942, '%begin');
                            }
                            if (($T)(B2978))
                                B3001 = B2978;
                            else {
                                {
                                    var B2979 = ralphScoreCCEE(B2942, '%while');
                                }
                                if (($T)(B2979))
                                    B3001 = B2979;
                                else {
                                    {
                                        var B2980 = ralphScoreCCEE(B2942, '%native-name');
                                    }
                                    if (($T)(B2980))
                                        B3001 = B2980;
                                    else {
                                        {
                                            var B2981 = ralphScoreCCEE(B2942, '%native-call');
                                        }
                                        if (($T)(B2981))
                                            B3001 = B2981;
                                        else {
                                            {
                                                var B2982 = ralphScoreCCEE(B2942, '%infix');
                                            }
                                            if (($T)(B2982))
                                                B3001 = B2982;
                                            else {
                                                {
                                                    var B2983 = ralphScoreCCEE(B2942, '%native');
                                                }
                                                if (($T)(B2983))
                                                    B3001 = B2983;
                                                else {
                                                    {
                                                        var B2984 = ralphScoreCCEE(B2942, '%object');
                                                    }
                                                    if (($T)(B2984))
                                                        B3001 = B2984;
                                                    else {
                                                        {
                                                            var B2985 = ralphScoreCCEE(B2942, '%array');
                                                        }
                                                        if (($T)(B2985))
                                                            B3001 = B2985;
                                                        else
                                                            B3001 = ralphScoreCCEE(B2942, '%get-property');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (($T)(B3001)) {
                            {
                                var op__2986 = exp__2939[0];
                                var forms__2987 = $SL.call(exp__2939, 1);
                            }
                            return(lift_symbolT__2952(forms__2987, env__2940, function B2988(formsT__2989) {
                                return(k__2941(ralphScoreCCMconcat([op__2986], formsT__2989)));
                            }));
                        } else if (($T)(ralphScoreCCEE(B2942, '%try'))) {
                            {
                                var ____2990 = exp__2939[0];
                                var protected_form__2991 = exp__2939[1];
                                var identifier__2992 = exp__2939[2];
                                var handling_form__2993 = exp__2939[3];
                            }
                            return(lift_symbolT__2952([
                                protected_form__2991,
                                handling_form__2993
                            ], env__2940, function B2994(formsT__2995) {
                                {
                                    var protected_formT__2996 = formsT__2995[0];
                                    var handling_formT__2997 = formsT__2995[1];
                                }
                                return(k__2941([
                                    B2937,
                                    protected_formT__2996,
                                    identifier__2992,
                                    handling_formT__2997
                                ]));
                            }));
                        } else
                            return(lift_symbolTT__2968(exp__2939, env__2940, k__2941));
                    }
                }
            } else {
                {
                    var B2998 = exp__2939;
                }
                if (($T)(ralphScoreCCinstanceQ(B2998, ralphScoreCCLkeywordG)))
                    return(lift_value__2946(ralphScoreCCsymbol_name(exp__2939), exp__2939, 'keyword', env__2940, k__2941));
                else if (($T)(ralphScoreCCinstanceQ(B2998, ralphScoreCCLhash_symbolG)))
                    return(lift_value__2946(ralphScoreCCsymbol_name(exp__2939), exp__2939, 'hash', env__2940, k__2941));
                else
                    return(k__2941(exp__2939));
            }
        };
    }
    ralphScoreCCMannotate_function(lift_symbol__2902, 'lift_symbol', false);
}
{
    {
        var ralphScoreCCMkeys = B2895['%keys'];
        var ralphScoreCCget = B2895['get'];
        var ralphScoreCCget_setter = B2895['get-setter'];
        var ralphScoreCCgenerate_symbol = B2895['generate-symbol'];
        var B3008 = $S('%begin', 'ralph/core');
        var B3009 = $S('%define', 'ralph/core');
        var lift_value__2946 = function B3010(name__3011, value__3012, type__3013, env__3014, k__3015) {
            {
                var B3016 = $SL.call(arguments, 5);
                var B3017 = ralphScoreCCMkeys(B3016, { 'module': '' });
                var module__3018 = B3017['module'];
                var B3019 = ralphScoreCCget(env__3014, 'lifted', type__3013, module__3018, name__3011);
            }
            if (($T)(B3019)) {
                {
                    var t__3020 = B3019;
                }
                return(k__3015(t__3020));
            } else {
                {
                    var t__3021 = ralphScoreCCget_setter(env__3014, 'lifted', type__3013, module__3018, name__3011, ralphScoreCCgenerate_symbol(env__3014));
                }
                return([
                    B3008,
                    [
                        B3009,
                        t__3021,
                        value__3012
                    ],
                    k__3015(t__3021)
                ]);
            }
        };
    }
    ralphScoreCCMannotate_function(lift_value__2946, 'lift_value', false);
}
{
    {
        var lift_symbolT__2952 = function B3023(expT__3024, env__3025, k__3026) {
            if (($T)(ralphScoreCCemptyQ(expT__3024)))
                return(k__3026([]));
            else
                return(lift_symbolTT__2968(expT__3024, env__3025, k__3026));
        };
    }
    ralphScoreCCMannotate_function(lift_symbolT__2952, 'lift_symbolT', false);
}
{
    {
        var ralphScoreCCcons = B2895['cons'];
        var lift_symbolTT__2968 = function B3030(exp__3031, env__3032, k__3033) {
            return(lift_symbol__2902(ralphScoreCCfirst(exp__3031), env__3032, function B3034(t__3035) {
                return(lift_symbolT__2952(ralphScoreCCrest(exp__3031), env__3032, function B3036(tT__3037) {
                    return(k__3033(ralphScoreCCcons(t__3035, tT__3037)));
                }));
            }));
        };
    }
    ralphScoreCCMannotate_function(lift_symbolTT__2968, 'lift_symbolTT', false);
}
