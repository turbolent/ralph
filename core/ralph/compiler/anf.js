{
    var B3258 = require('ralph/core');
}
{
    var B3260 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B3258['%var'];
        var ralphScoreCCanyQ = B3258['any?'];
        var ralphScoreCCcurry = B3258['curry'];
        var ralphScoreCCinstanceQ = B3258['instance?'];
        var ralphScoreCCLnumberG = B3258['<number>'];
        var ralphScoreCCLbooleanG = B3258['<boolean>'];
        var ralphScoreCCLstringG = B3258['<string>'];
        var ralphScoreCCLsymbolG = B3258['<symbol>'];
        var ralphScoreCCLkeywordG = B3258['<keyword>'];
        var ralphScoreCCMannotate_function = B3258['%annotate-function'];
        var atomicQ__3264 = function B3262(expression__3263) {
            return(ralphScoreCCanyQ(ralphScoreCCcurry(ralphScoreCCinstanceQ, expression__3263), [
                ralphScoreCCLnumberG,
                ralphScoreCCLbooleanG,
                ralphScoreCCLstringG,
                ralphScoreCCLsymbolG,
                ralphScoreCCLkeywordG
            ]));
        };
    }
    ralphScoreCCMannotate_function(atomicQ__3264, 'atomicQ', false);
}
{
    {
        var ralphScoreCCLarrayG = B3258['<array>'];
        var ralphScoreCCnot = B3258['not'];
        var ralphScoreCCemptyQ = B3258['empty?'];
        var ralphScoreCCsymbol_name = B3258['symbol-name'];
        var ralphScoreCCfirst = B3258['first'];
        var ralphScoreCCEE = B3258['=='];
        var ralphScoreCClast = B3258['last'];
        var generates_statementsQ__3278 = function B3271(exp__3272) {
            {
                var B3279 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(exp__3272, ralphScoreCCLarrayG)))
                B3279 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__3272));
            else
                B3279 = false;
            if (($T)(B3279)) {
                {
                    var B3273 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3272));
                    var B3274 = ralphScoreCCEE(B3273, '%begin');
                    var B3280 = false;
                }
                if (($T)(B3274))
                    B3280 = B3274;
                else {
                    {
                        var B3275 = ralphScoreCCEE(B3273, '%if');
                    }
                    if (($T)(B3275))
                        B3280 = B3275;
                    else {
                        {
                            var B3276 = ralphScoreCCEE(B3273, '%while');
                        }
                        if (($T)(B3276))
                            B3280 = B3276;
                        else {
                            {
                                var B3277 = ralphScoreCCEE(B3273, '%bind');
                            }
                            if (($T)(B3277))
                                B3280 = B3277;
                            else
                                B3280 = ralphScoreCCEE(B3273, '%try');
                        }
                    }
                }
                if (($T)(B3280))
                    return(true);
                else if (($T)(ralphScoreCCEE(B3273, '%set')))
                    return(generates_statementsQ__3278(ralphScoreCClast(exp__3272)));
                else if (($T)(ralphScoreCCEE(B3273, '%method')))
                    return(false);
                else
                    return(ralphScoreCCanyQ(generates_statementsQ__3278, exp__3272));
            } else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(generates_statementsQ__3278, 'generates_statementsQ', false);
}
{
    {
        var ralphScoreCCidentity = B3258['identity'];
        var normalize_term__3286 = function B3282(expression__3283, env__3284) {
            return(normalize__3285(expression__3283, env__3284, ralphScoreCCidentity));
        };
    }
    (exports)['normalize-term'] = normalize_term__3286;
    ralphScoreCCMannotate_function(normalize_term__3286, 'normalize_term', false);
}
{
    {
        var ralphScompilerSutilitiesCCopQ = B3260['op?'];
        var ralphScoreCCrest = B3258['rest'];
        var ralphScoreCCMconcat = B3258['%concat'];
        var ralphScoreCCmap = B3258['map'];
        var ralphScoreCCrcurry = B3258['rcurry'];
        var B3308 = $S('%bind', 'ralph/core');
        var B3309 = $S('%method', 'ralph/core');
        var B3310 = $S('%set', 'ralph/core');
        var B3311 = $S('%get-property', 'ralph/core');
        var B3312 = $S('%if', 'ralph/core');
        var B3313 = $S('%begin', 'ralph/core');
        var B3314 = $S('%while', 'ralph/core');
        var B3315 = $S('%native', 'ralph/core');
        var B3316 = $S('%try', 'ralph/core');
        var normalize__3285 = function B3317(exp__3318, env__3319, k__3320) {
            {
                var B3370 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(exp__3318, ralphScoreCCLarrayG)))
                B3370 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__3318));
            else
                B3370 = false;
            if (($T)(B3370)) {
                {
                    var B3321 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3318));
                    var B3322 = ralphScoreCCEE(B3321, '%quote');
                    var B3371 = false;
                }
                if (($T)(B3322))
                    B3371 = B3322;
                else
                    B3371 = ralphScoreCCEE(B3321, '%native-name');
                if (($T)(B3371))
                    return(k__3320(exp__3318));
                else if (($T)(ralphScoreCCEE(B3321, '%bind'))) {
                    {
                        var ____3323 = exp__3318[0];
                        var B3324 = exp__3318[1];
                        var identifier__3325 = B3324[0];
                        var value__3326 = B3324[1];
                        var form__3327 = exp__3318[2];
                    }
                    return(normalize__3285(value__3326, env__3319, function B3328(valueT__3329) {
                        return([
                            B3308,
                            [
                                identifier__3325,
                                valueT__3329
                            ],
                            normalize__3285(form__3327, env__3319, k__3320)
                        ]);
                    }));
                } else if (($T)(ralphScoreCCEE(B3321, '%method'))) {
                    {
                        var ____3330 = exp__3318[0];
                        var name__3331 = exp__3318[1];
                        var parameters__3332 = exp__3318[2];
                        var form__3333 = exp__3318[3];
                    }
                    return(k__3320([
                        B3309,
                        name__3331,
                        parameters__3332,
                        normalize_term__3286(form__3333, env__3319)
                    ]));
                } else if (($T)(ralphScoreCCEE(B3321, '%set'))) {
                    {
                        var ____3334 = exp__3318[0];
                        var place__3335 = exp__3318[1];
                        var value__3336 = exp__3318[2];
                    }
                    if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__3335)))
                        return(normalizeTT__3337(ralphScoreCCrest(place__3335), env__3319, function B3338(argumentsT__3339) {
                            return(normalize_value__3340(value__3336, env__3319, function B3341(valueT__3342) {
                                return(k__3320([
                                    B3310,
                                    ralphScoreCCMconcat([B3311], argumentsT__3339),
                                    valueT__3342
                                ]));
                            }));
                        }));
                    else
                        return(normalize_value__3340(value__3336, env__3319, function B3343(valueT__3344) {
                            return(k__3320([
                                B3310,
                                place__3335,
                                valueT__3344
                            ]));
                        }));
                } else {
                    {
                        var B3345 = ralphScoreCCEE(B3321, '%define');
                        var B3372 = false;
                    }
                    if (($T)(B3345))
                        B3372 = B3345;
                    else
                        B3372 = ralphScoreCCEE(B3321, '%var');
                    if (($T)(B3372)) {
                        {
                            var op__3346 = exp__3318[0];
                            var identifier__3347 = exp__3318[1];
                            var value__3348 = exp__3318[2];
                        }
                        return(normalize_value__3340(value__3348, env__3319, function B3349(valueT__3350) {
                            return(k__3320([
                                op__3346,
                                identifier__3347,
                                valueT__3350
                            ]));
                        }));
                    } else if (($T)(ralphScoreCCEE(B3321, '%if'))) {
                        {
                            var ____3351 = exp__3318[0];
                            var test__3352 = exp__3318[1];
                            var consequent__3353 = exp__3318[2];
                            var alternate__3354 = exp__3318[3];
                        }
                        return(normalize_value__3340(test__3352, env__3319, function B3355(testT__3356) {
                            return(k__3320([
                                B3312,
                                testT__3356,
                                normalize_term__3286(consequent__3353, env__3319),
                                normalize_term__3286(alternate__3354, env__3319)
                            ]));
                        }));
                    } else if (($T)(ralphScoreCCEE(B3321, '%begin'))) {
                        {
                            var ____3357 = exp__3318[0];
                            var form__3358 = exp__3318[1];
                            var forms__3359 = $SL.call(exp__3318, 2);
                        }
                        if (($T)(ralphScoreCCemptyQ(forms__3359)))
                            return(normalize__3285(form__3358, env__3319, k__3320));
                        else
                            return(normalize__3285(form__3358, env__3319, function B3360(formT__3361) {
                                return([
                                    B3313,
                                    formT__3361,
                                    normalize__3285(ralphScoreCCMconcat([B3313], forms__3359), env__3319, k__3320)
                                ]);
                            }));
                    } else if (($T)(ralphScoreCCEE(B3321, '%while'))) {
                        {
                            var ____3362 = exp__3318[0];
                            var test__3363 = exp__3318[1];
                            var form__3364 = exp__3318[2];
                            var B3373 = false;
                        }
                        if (($T)(generates_statementsQ__3278(test__3363)))
                            B3373 = [
                                B3314,
                                true,
                                normalize_term__3286([
                                    B3312,
                                    test__3363,
                                    normalize_term__3286(form__3364),
                                    [
                                        B3315,
                                        'break'
                                    ]
                                ], env__3319)
                            ];
                        else
                            B3373 = [
                                B3314,
                                normalize_term__3286(test__3363, env__3319),
                                normalize_term__3286(form__3364, env__3319)
                            ];
                        return(k__3320(B3373));
                    } else if (($T)(ralphScoreCCEE(B3321, '%try'))) {
                        {
                            var ____3365 = exp__3318[0];
                            var protected_form__3366 = exp__3318[1];
                            var identifier__3367 = exp__3318[2];
                            var handling_form__3368 = exp__3318[3];
                        }
                        return(k__3320([
                            B3316,
                            normalize_term__3286(protected_form__3366, env__3319),
                            identifier__3367,
                            normalize_term__3286(handling_form__3368, env__3319)
                        ]));
                    } else if (($T)(generates_statementsQ__3278(exp__3318)))
                        return(normalize_all__3369(exp__3318, env__3319, k__3320));
                    else
                        return(k__3320(ralphScoreCCmap(ralphScoreCCrcurry(normalize_term__3286, env__3319), exp__3318)));
                }
            } else
                return(k__3320(exp__3318));
        };
    }
    ralphScoreCCMannotate_function(normalize__3285, 'normalize', false);
}
{
    {
        var normalize_value__3340 = function B3375(exp__3376, env__3377, k__3378) {
            if (($T)(generates_statementsQ__3278(exp__3376)))
                return(normalizeT__3379(exp__3376, env__3377, k__3378));
            else {
                {
                    var B3380 = false;
                }
                if (($T)(ralphScoreCCinstanceQ(exp__3376, ralphScoreCCLarrayG)))
                    B3380 = ralphScoreCCmap(ralphScoreCCrcurry(normalize_term__3286, env__3377), exp__3376);
                else
                    B3380 = exp__3376;
                return(k__3378(B3380));
            }
        };
    }
    ralphScoreCCMannotate_function(normalize_value__3340, 'normalize_value', false);
}
{
    {
        var ralphScoreCCgenerate_symbol = B3258['generate-symbol'];
        var normalizeT__3379 = function B3383(exp__3384, env__3385, k__3386) {
            return(normalize__3285(exp__3384, env__3385, function B3387(expT__3388) {
                if (($T)(atomicQ__3264(expT__3388)))
                    return(k__3386(expT__3388));
                else {
                    {
                        var t__3389 = ralphScoreCCgenerate_symbol(env__3385);
                    }
                    return([
                        B3308,
                        [
                            t__3389,
                            expT__3388
                        ],
                        k__3386(t__3389)
                    ]);
                }
            }));
        };
    }
    ralphScoreCCMannotate_function(normalizeT__3379, 'normalizeT', false);
}
{
    {
        var normalizeTT__3337 = function B3391(expT__3392, env__3393, k__3394) {
            if (($T)(ralphScoreCCemptyQ(expT__3392)))
                return(k__3394([]));
            else
                return(normalize_all__3369(expT__3392, env__3393, k__3394));
        };
    }
    ralphScoreCCMannotate_function(normalizeTT__3337, 'normalizeTT', false);
}
{
    {
        var ralphScoreCCcons = B3258['cons'];
        var normalize_all__3369 = function B3398(exp__3399, env__3400, k__3401) {
            return(normalizeT__3379(ralphScoreCCfirst(exp__3399), env__3400, function B3402(t__3403) {
                return(normalizeTT__3337(ralphScoreCCrest(exp__3399), env__3400, function B3404(tT__3405) {
                    return(k__3401(ralphScoreCCcons(t__3403, tT__3405)));
                }));
            }));
        };
    }
    ralphScoreCCMannotate_function(normalize_all__3369, 'normalize_all', false);
}
