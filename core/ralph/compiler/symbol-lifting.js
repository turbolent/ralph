var B2920 = require('ralph/core');
var B2922 = require('ralph/compiler/utilities');
{
    var ralphScoreCCMvar = B2920['%var'], ralphScoreCCMmake_function = B2920['%make-function'], ralphScoreCCidentity = B2920['identity'], lift_symbols__2928 = ralphScoreCCMmake_function('lift_symbols', function B2924(exp__2925, env__2926) {
            return(lift_symbol__2927(exp__2925, env__2926, ralphScoreCCidentity));
        }, false);
    (exports)['lift-symbols'] = lift_symbols__2928;
}
var ralphScoreCCinstanceQ = B2920['instance?'], ralphScoreCCLarrayG = B2920['<array>'], ralphScoreCCnot = B2920['not'], ralphScoreCCemptyQ = B2920['empty?'], ralphScoreCCsymbol_name = B2920['symbol-name'], ralphScoreCCfirst = B2920['first'], ralphScoreCCEE = B2920['=='], ralphScoreCCdestructure_symbol = B2920['destructure-symbol'], ralphScoreCCsecond = B2920['second'], ralphScompilerSutilitiesCCopQ = B2922['op?'], ralphScoreCCrest = B2920['rest'], ralphScoreCCMconcat = B2920['%concat'], ralphScoreCCLkeywordG = B2920['<keyword>'], ralphScoreCCLhash_symbolG = B2920['<hash-symbol>'], B2957 = $K('module'), B2958 = $S('%bind'), B2959 = $S('%method'), B2960 = $S('%set'), B2961 = $S('%get-property'), B2962 = $S('%try'), lift_symbol__2927 = ralphScoreCCMmake_function('lift_symbol', function B2963(exp__2964, env__2965, k__2966) {
        var B3024 = false;
        if (($T)(ralphScoreCCinstanceQ(exp__2964, ralphScoreCCLarrayG)))
            B3024 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__2964));
        else
            B3024 = false;
        if (($T)(B3024)) {
            var B2967 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__2964));
            if (($T)(ralphScoreCCEE(B2967, '%quote'))) {
                var B2968 = ralphScoreCCdestructure_symbol(ralphScoreCCsecond(exp__2964)), name__2969 = B2968[0], module_name__2970 = B2968[1];
                return(lift_value__2971(name__2969, exp__2964, 'symbol', env__2965, k__2966, B2957, module_name__2970));
            } else if (($T)(ralphScoreCCEE(B2967, '%bind'))) {
                var ____2972 = exp__2964[0], B2973 = exp__2964[1], identifier__2974 = B2973[0], value__2975 = B2973[1], form__2976 = exp__2964[2];
                return(lift_symbolT__2977([
                    value__2975,
                    form__2976
                ], env__2965, function B2978(formsT__2979) {
                    var valueT__2980 = formsT__2979[0], formT__2981 = formsT__2979[1];
                    return(k__2966([
                        B2958,
                        [
                            identifier__2974,
                            valueT__2980
                        ],
                        formT__2981
                    ]));
                }));
            } else if (($T)(ralphScoreCCEE(B2967, '%method'))) {
                var ____2982 = exp__2964[0], name__2983 = exp__2964[1], parameters__2984 = exp__2964[2], form__2985 = exp__2964[3];
                return(lift_symbol__2927(form__2985, env__2965, function B2986(formT__2987) {
                    return(k__2966([
                        B2959,
                        name__2983,
                        parameters__2984,
                        formT__2987
                    ]));
                }));
            } else if (($T)(ralphScoreCCEE(B2967, '%set'))) {
                var ____2988 = exp__2964[0], place__2989 = exp__2964[1], value__2990 = exp__2964[2];
                return(lift_symbol__2927(value__2990, env__2965, function B2991(valueT__2992) {
                    if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__2989)))
                        return(lift_symbolTT__2993(ralphScoreCCrest(place__2989), env__2965, function B2994(argumentsT__2995) {
                            return(k__2966([
                                B2960,
                                ralphScoreCCMconcat([B2961], argumentsT__2995),
                                valueT__2992
                            ]));
                        }));
                    else
                        return(k__2966([
                            B2960,
                            place__2989,
                            valueT__2992
                        ]));
                }));
            } else {
                var B2996 = ralphScoreCCEE(B2967, '%define'), B3025 = false;
                if (($T)(B2996))
                    B3025 = B2996;
                else
                    B3025 = ralphScoreCCEE(B2967, '%var');
                if (($T)(B3025)) {
                    var op__2997 = exp__2964[0], identifier__2998 = exp__2964[1], value__2999 = exp__2964[2];
                    return(lift_symbol__2927(value__2999, env__2965, function B3000(valueT__3001) {
                        return(k__2966([
                            op__2997,
                            identifier__2998,
                            valueT__3001
                        ]));
                    }));
                } else {
                    var B3002 = ralphScoreCCEE(B2967, '%if'), B3026 = false;
                    if (($T)(B3002))
                        B3026 = B3002;
                    else {
                        var B3003 = ralphScoreCCEE(B2967, '%begin');
                        if (($T)(B3003))
                            B3026 = B3003;
                        else {
                            var B3004 = ralphScoreCCEE(B2967, '%while');
                            if (($T)(B3004))
                                B3026 = B3004;
                            else {
                                var B3005 = ralphScoreCCEE(B2967, '%native-name');
                                if (($T)(B3005))
                                    B3026 = B3005;
                                else {
                                    var B3006 = ralphScoreCCEE(B2967, '%native-call');
                                    if (($T)(B3006))
                                        B3026 = B3006;
                                    else {
                                        var B3007 = ralphScoreCCEE(B2967, '%infix');
                                        if (($T)(B3007))
                                            B3026 = B3007;
                                        else {
                                            var B3008 = ralphScoreCCEE(B2967, '%native');
                                            if (($T)(B3008))
                                                B3026 = B3008;
                                            else {
                                                var B3009 = ralphScoreCCEE(B2967, '%object');
                                                if (($T)(B3009))
                                                    B3026 = B3009;
                                                else {
                                                    var B3010 = ralphScoreCCEE(B2967, '%array');
                                                    if (($T)(B3010))
                                                        B3026 = B3010;
                                                    else
                                                        B3026 = ralphScoreCCEE(B2967, '%get-property');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (($T)(B3026)) {
                        var op__3011 = exp__2964[0], forms__3012 = $SL.call(exp__2964, 1);
                        return(lift_symbolT__2977(forms__3012, env__2965, function B3013(formsT__3014) {
                            return(k__2966(ralphScoreCCMconcat([op__3011], formsT__3014)));
                        }));
                    } else if (($T)(ralphScoreCCEE(B2967, '%try'))) {
                        var ____3015 = exp__2964[0], protected_form__3016 = exp__2964[1], identifier__3017 = exp__2964[2], handling_form__3018 = exp__2964[3];
                        return(lift_symbolT__2977([
                            protected_form__3016,
                            handling_form__3018
                        ], env__2965, function B3019(formsT__3020) {
                            var protected_formT__3021 = formsT__3020[0], handling_formT__3022 = formsT__3020[1];
                            return(k__2966([
                                B2962,
                                protected_formT__3021,
                                identifier__3017,
                                handling_formT__3022
                            ]));
                        }));
                    } else
                        return(lift_symbolTT__2993(exp__2964, env__2965, k__2966));
                }
            }
        } else {
            var B3023 = exp__2964;
            if (($T)(ralphScoreCCinstanceQ(B3023, ralphScoreCCLkeywordG)))
                return(lift_value__2971(ralphScoreCCsymbol_name(exp__2964), exp__2964, 'keyword', env__2965, k__2966));
            else if (($T)(ralphScoreCCinstanceQ(B3023, ralphScoreCCLhash_symbolG)))
                return(lift_value__2971(ralphScoreCCsymbol_name(exp__2964), exp__2964, 'hash', env__2965, k__2966));
            else
                return(k__2966(exp__2964));
        }
    }, false);
var ralphScoreCCMkeys = B2920['%keys'], ralphScoreCCget = B2920['get'], ralphScoreCCget_setter = B2920['get-setter'], ralphScoreCCgenerate_symbol = B2920['generate-symbol'], B3033 = $S('%begin'), B3034 = $S('%define'), lift_value__2971 = ralphScoreCCMmake_function('lift_value', function B3035(name__3036, value__3037, type__3038, env__3039, k__3040) {
        var B3041 = $SL.call(arguments, 5), B3042 = ralphScoreCCMkeys(B3041, { 'module': '' }), module__3043 = B3042['module'], B3044 = ralphScoreCCget(env__3039, 'lifted', type__3038, module__3043, name__3036);
        if (($T)(B3044)) {
            var t__3045 = B3044;
            return(k__3040(t__3045));
        } else {
            var t__3046 = ralphScoreCCget_setter(env__3039, 'lifted', type__3038, module__3043, name__3036, ralphScoreCCgenerate_symbol(env__3039));
            return([
                B3033,
                [
                    B3034,
                    t__3046,
                    value__3037
                ],
                k__3040(t__3046)
            ]);
        }
    }, false);
var lift_symbolT__2977 = ralphScoreCCMmake_function('lift_symbolT', function B3048(expT__3049, env__3050, k__3051) {
        if (($T)(ralphScoreCCemptyQ(expT__3049)))
            return(k__3051([]));
        else
            return(lift_symbolTT__2993(expT__3049, env__3050, k__3051));
    }, false);
var ralphScoreCCcons = B2920['cons'], lift_symbolTT__2993 = ralphScoreCCMmake_function('lift_symbolTT', function B3055(exp__3056, env__3057, k__3058) {
        return(lift_symbol__2927(ralphScoreCCfirst(exp__3056), env__3057, function B3059(t__3060) {
            return(lift_symbolT__2977(ralphScoreCCrest(exp__3056), env__3057, function B3061(tT__3062) {
                return(k__3058(ralphScoreCCcons(t__3060, tT__3062)));
            }));
        }));
    }, false);
