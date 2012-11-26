var B2919 = require('ralph/core');
var B2921 = require('ralph/compiler/utilities');
{
    var ralphScoreCCMvar = B2919['%var'], ralphScoreCCMmake_function = B2919['%make-function'], ralphScoreCCidentity = B2919['identity'], lift_symbols__2927 = ralphScoreCCMmake_function('lift_symbols', function B2923(exp__2924, env__2925) {
            return(lift_symbol__2926(exp__2924, env__2925, ralphScoreCCidentity));
        }, false);
    (exports)['lift-symbols'] = lift_symbols__2927;
}
var ralphScoreCCinstanceQ = B2919['instance?'], ralphScoreCCLarrayG = B2919['<array>'], ralphScoreCCnot = B2919['not'], ralphScoreCCemptyQ = B2919['empty?'], ralphScoreCCsymbol_name = B2919['symbol-name'], ralphScoreCCfirst = B2919['first'], ralphScoreCCEE = B2919['=='], ralphScoreCCdestructure_symbol = B2919['destructure-symbol'], ralphScoreCCsecond = B2919['second'], ralphScompilerSutilitiesCCopQ = B2921['op?'], ralphScoreCCrest = B2919['rest'], ralphScoreCCMconcat = B2919['%concat'], ralphScoreCCLkeywordG = B2919['<keyword>'], ralphScoreCCLhash_symbolG = B2919['<hash-symbol>'], B2956 = $K('module'), B2957 = $S('%bind', 'ralph/core'), B2958 = $S('%method', 'ralph/core'), B2959 = $S('%set', 'ralph/core'), B2960 = $S('%get-property', 'ralph/core'), B2961 = $S('%try', 'ralph/core'), lift_symbol__2926 = ralphScoreCCMmake_function('lift_symbol', function B2962(exp__2963, env__2964, k__2965) {
        var B3023 = false;
        if (($T)(ralphScoreCCinstanceQ(exp__2963, ralphScoreCCLarrayG)))
            B3023 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__2963));
        else
            B3023 = false;
        if (($T)(B3023)) {
            var B2966 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__2963));
            if (($T)(ralphScoreCCEE(B2966, '%quote'))) {
                var B2967 = ralphScoreCCdestructure_symbol(ralphScoreCCsecond(exp__2963)), name__2968 = B2967[0], module_name__2969 = B2967[1];
                return(lift_value__2970(name__2968, exp__2963, 'symbol', env__2964, k__2965, B2956, module_name__2969));
            } else if (($T)(ralphScoreCCEE(B2966, '%bind'))) {
                var ____2971 = exp__2963[0], B2972 = exp__2963[1], identifier__2973 = B2972[0], value__2974 = B2972[1], form__2975 = exp__2963[2];
                return(lift_symbolT__2976([
                    value__2974,
                    form__2975
                ], env__2964, function B2977(formsT__2978) {
                    var valueT__2979 = formsT__2978[0], formT__2980 = formsT__2978[1];
                    return(k__2965([
                        B2957,
                        [
                            identifier__2973,
                            valueT__2979
                        ],
                        formT__2980
                    ]));
                }));
            } else if (($T)(ralphScoreCCEE(B2966, '%method'))) {
                var ____2981 = exp__2963[0], name__2982 = exp__2963[1], parameters__2983 = exp__2963[2], form__2984 = exp__2963[3];
                return(lift_symbol__2926(form__2984, env__2964, function B2985(formT__2986) {
                    return(k__2965([
                        B2958,
                        name__2982,
                        parameters__2983,
                        formT__2986
                    ]));
                }));
            } else if (($T)(ralphScoreCCEE(B2966, '%set'))) {
                var ____2987 = exp__2963[0], place__2988 = exp__2963[1], value__2989 = exp__2963[2];
                return(lift_symbol__2926(value__2989, env__2964, function B2990(valueT__2991) {
                    if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__2988)))
                        return(lift_symbolTT__2992(ralphScoreCCrest(place__2988), env__2964, function B2993(argumentsT__2994) {
                            return(k__2965([
                                B2959,
                                ralphScoreCCMconcat([B2960], argumentsT__2994),
                                valueT__2991
                            ]));
                        }));
                    else
                        return(k__2965([
                            B2959,
                            place__2988,
                            valueT__2991
                        ]));
                }));
            } else {
                var B2995 = ralphScoreCCEE(B2966, '%define'), B3024 = false;
                if (($T)(B2995))
                    B3024 = B2995;
                else
                    B3024 = ralphScoreCCEE(B2966, '%var');
                if (($T)(B3024)) {
                    var op__2996 = exp__2963[0], identifier__2997 = exp__2963[1], value__2998 = exp__2963[2];
                    return(lift_symbol__2926(value__2998, env__2964, function B2999(valueT__3000) {
                        return(k__2965([
                            op__2996,
                            identifier__2997,
                            valueT__3000
                        ]));
                    }));
                } else {
                    var B3001 = ralphScoreCCEE(B2966, '%if'), B3025 = false;
                    if (($T)(B3001))
                        B3025 = B3001;
                    else {
                        var B3002 = ralphScoreCCEE(B2966, '%begin');
                        if (($T)(B3002))
                            B3025 = B3002;
                        else {
                            var B3003 = ralphScoreCCEE(B2966, '%while');
                            if (($T)(B3003))
                                B3025 = B3003;
                            else {
                                var B3004 = ralphScoreCCEE(B2966, '%native-name');
                                if (($T)(B3004))
                                    B3025 = B3004;
                                else {
                                    var B3005 = ralphScoreCCEE(B2966, '%native-call');
                                    if (($T)(B3005))
                                        B3025 = B3005;
                                    else {
                                        var B3006 = ralphScoreCCEE(B2966, '%infix');
                                        if (($T)(B3006))
                                            B3025 = B3006;
                                        else {
                                            var B3007 = ralphScoreCCEE(B2966, '%native');
                                            if (($T)(B3007))
                                                B3025 = B3007;
                                            else {
                                                var B3008 = ralphScoreCCEE(B2966, '%object');
                                                if (($T)(B3008))
                                                    B3025 = B3008;
                                                else {
                                                    var B3009 = ralphScoreCCEE(B2966, '%array');
                                                    if (($T)(B3009))
                                                        B3025 = B3009;
                                                    else
                                                        B3025 = ralphScoreCCEE(B2966, '%get-property');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (($T)(B3025)) {
                        var op__3010 = exp__2963[0], forms__3011 = $SL.call(exp__2963, 1);
                        return(lift_symbolT__2976(forms__3011, env__2964, function B3012(formsT__3013) {
                            return(k__2965(ralphScoreCCMconcat([op__3010], formsT__3013)));
                        }));
                    } else if (($T)(ralphScoreCCEE(B2966, '%try'))) {
                        var ____3014 = exp__2963[0], protected_form__3015 = exp__2963[1], identifier__3016 = exp__2963[2], handling_form__3017 = exp__2963[3];
                        return(lift_symbolT__2976([
                            protected_form__3015,
                            handling_form__3017
                        ], env__2964, function B3018(formsT__3019) {
                            var protected_formT__3020 = formsT__3019[0], handling_formT__3021 = formsT__3019[1];
                            return(k__2965([
                                B2961,
                                protected_formT__3020,
                                identifier__3016,
                                handling_formT__3021
                            ]));
                        }));
                    } else
                        return(lift_symbolTT__2992(exp__2963, env__2964, k__2965));
                }
            }
        } else {
            var B3022 = exp__2963;
            if (($T)(ralphScoreCCinstanceQ(B3022, ralphScoreCCLkeywordG)))
                return(lift_value__2970(ralphScoreCCsymbol_name(exp__2963), exp__2963, 'keyword', env__2964, k__2965));
            else if (($T)(ralphScoreCCinstanceQ(B3022, ralphScoreCCLhash_symbolG)))
                return(lift_value__2970(ralphScoreCCsymbol_name(exp__2963), exp__2963, 'hash', env__2964, k__2965));
            else
                return(k__2965(exp__2963));
        }
    }, false);
var ralphScoreCCMkeys = B2919['%keys'], ralphScoreCCget = B2919['get'], ralphScoreCCget_setter = B2919['get-setter'], ralphScoreCCgenerate_symbol = B2919['generate-symbol'], B3032 = $S('%begin', 'ralph/core'), B3033 = $S('%define', 'ralph/core'), lift_value__2970 = ralphScoreCCMmake_function('lift_value', function B3034(name__3035, value__3036, type__3037, env__3038, k__3039) {
        var B3040 = $SL.call(arguments, 5), B3041 = ralphScoreCCMkeys(B3040, { 'module': '' }), module__3042 = B3041['module'], B3043 = ralphScoreCCget(env__3038, 'lifted', type__3037, module__3042, name__3035);
        if (($T)(B3043)) {
            var t__3044 = B3043;
            return(k__3039(t__3044));
        } else {
            var t__3045 = ralphScoreCCget_setter(env__3038, 'lifted', type__3037, module__3042, name__3035, ralphScoreCCgenerate_symbol(env__3038));
            return([
                B3032,
                [
                    B3033,
                    t__3045,
                    value__3036
                ],
                k__3039(t__3045)
            ]);
        }
    }, false);
var lift_symbolT__2976 = ralphScoreCCMmake_function('lift_symbolT', function B3047(expT__3048, env__3049, k__3050) {
        if (($T)(ralphScoreCCemptyQ(expT__3048)))
            return(k__3050([]));
        else
            return(lift_symbolTT__2992(expT__3048, env__3049, k__3050));
    }, false);
var ralphScoreCCcons = B2919['cons'], lift_symbolTT__2992 = ralphScoreCCMmake_function('lift_symbolTT', function B3054(exp__3055, env__3056, k__3057) {
        return(lift_symbol__2926(ralphScoreCCfirst(exp__3055), env__3056, function B3058(t__3059) {
            return(lift_symbolT__2976(ralphScoreCCrest(exp__3055), env__3056, function B3060(tT__3061) {
                return(k__3057(ralphScoreCCcons(t__3059, tT__3061)));
            }));
        }));
    }, false);
