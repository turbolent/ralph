var B3282 = require('ralph/core');
var B3284 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3282['%var'], ralphScoreCCMmake_function = B3282['%make-function'], ralphScoreCCanyQ = B3282['any?'], ralphScoreCCcurry = B3282['curry'], ralphScoreCCinstanceQ = B3282['instance?'], ralphScoreCCLnumberG = B3282['<number>'], ralphScoreCCLbooleanG = B3282['<boolean>'], ralphScoreCCLstringG = B3282['<string>'], ralphScoreCCLsymbolG = B3282['<symbol>'], ralphScoreCCLkeywordG = B3282['<keyword>'], atomicQ__3288 = ralphScoreCCMmake_function('atomicQ', function B3286(expression__3287) {
        return(ralphScoreCCanyQ(ralphScoreCCcurry(ralphScoreCCinstanceQ, expression__3287), [
            ralphScoreCCLnumberG,
            ralphScoreCCLbooleanG,
            ralphScoreCCLstringG,
            ralphScoreCCLsymbolG,
            ralphScoreCCLkeywordG
        ]));
    }, false);
var ralphScoreCCLarrayG = B3282['<array>'], ralphScoreCCnot = B3282['not'], ralphScoreCCemptyQ = B3282['empty?'], ralphScoreCCsymbol_name = B3282['symbol-name'], ralphScoreCCfirst = B3282['first'], ralphScoreCCEE = B3282['=='], ralphScoreCClast = B3282['last'], generates_statementsQ__3302 = ralphScoreCCMmake_function('generates_statementsQ', function B3295(exp__3296) {
        var B3303 = false;
        if (($T)(ralphScoreCCinstanceQ(exp__3296, ralphScoreCCLarrayG)))
            B3303 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__3296));
        else
            B3303 = false;
        if (($T)(B3303)) {
            var B3297 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3296)), B3298 = ralphScoreCCEE(B3297, '%begin'), B3304 = false;
            if (($T)(B3298))
                B3304 = B3298;
            else {
                var B3299 = ralphScoreCCEE(B3297, '%if');
                if (($T)(B3299))
                    B3304 = B3299;
                else {
                    var B3300 = ralphScoreCCEE(B3297, '%while');
                    if (($T)(B3300))
                        B3304 = B3300;
                    else {
                        var B3301 = ralphScoreCCEE(B3297, '%bind');
                        if (($T)(B3301))
                            B3304 = B3301;
                        else
                            B3304 = ralphScoreCCEE(B3297, '%try');
                    }
                }
            }
            if (($T)(B3304))
                return(true);
            else if (($T)(ralphScoreCCEE(B3297, '%set')))
                return(generates_statementsQ__3302(ralphScoreCClast(exp__3296)));
            else if (($T)(ralphScoreCCEE(B3297, '%method')))
                return(false);
            else
                return(ralphScoreCCanyQ(generates_statementsQ__3302, exp__3296));
        } else
            return(false);
    }, false);
{
    var ralphScoreCCidentity = B3282['identity'], normalize_term__3310 = ralphScoreCCMmake_function('normalize_term', function B3306(expression__3307, env__3308) {
            return(normalize__3309(expression__3307, env__3308, ralphScoreCCidentity));
        }, false);
    (exports)['normalize-term'] = normalize_term__3310;
}
var ralphScompilerSutilitiesCCopQ = B3284['op?'], ralphScoreCCrest = B3282['rest'], ralphScoreCCMconcat = B3282['%concat'], ralphScoreCCmap = B3282['map'], ralphScoreCCrcurry = B3282['rcurry'], B3332 = $S('%bind', 'ralph/core'), B3333 = $S('%method', 'ralph/core'), B3334 = $S('%set', 'ralph/core'), B3335 = $S('%get-property', 'ralph/core'), B3336 = $S('%if', 'ralph/core'), B3337 = $S('%begin', 'ralph/core'), B3338 = $S('%while', 'ralph/core'), B3339 = $S('%native', 'ralph/core'), B3340 = $S('%try', 'ralph/core'), normalize__3309 = ralphScoreCCMmake_function('normalize', function B3341(exp__3342, env__3343, k__3344) {
        var B3394 = false;
        if (($T)(ralphScoreCCinstanceQ(exp__3342, ralphScoreCCLarrayG)))
            B3394 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__3342));
        else
            B3394 = false;
        if (($T)(B3394)) {
            var B3345 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3342)), B3346 = ralphScoreCCEE(B3345, '%quote'), B3395 = false;
            if (($T)(B3346))
                B3395 = B3346;
            else
                B3395 = ralphScoreCCEE(B3345, '%native-name');
            if (($T)(B3395))
                return(k__3344(exp__3342));
            else if (($T)(ralphScoreCCEE(B3345, '%bind'))) {
                var ____3347 = exp__3342[0], B3348 = exp__3342[1], identifier__3349 = B3348[0], value__3350 = B3348[1], form__3351 = exp__3342[2];
                return(normalize__3309(value__3350, env__3343, function B3352(valueT__3353) {
                    return([
                        B3332,
                        [
                            identifier__3349,
                            valueT__3353
                        ],
                        normalize__3309(form__3351, env__3343, k__3344)
                    ]);
                }));
            } else if (($T)(ralphScoreCCEE(B3345, '%method'))) {
                var ____3354 = exp__3342[0], name__3355 = exp__3342[1], parameters__3356 = exp__3342[2], form__3357 = exp__3342[3];
                return(k__3344([
                    B3333,
                    name__3355,
                    parameters__3356,
                    normalize_term__3310(form__3357, env__3343)
                ]));
            } else if (($T)(ralphScoreCCEE(B3345, '%set'))) {
                var ____3358 = exp__3342[0], place__3359 = exp__3342[1], value__3360 = exp__3342[2];
                if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__3359)))
                    return(normalizeTT__3361(ralphScoreCCrest(place__3359), env__3343, function B3362(argumentsT__3363) {
                        return(normalize_value__3364(value__3360, env__3343, function B3365(valueT__3366) {
                            return(k__3344([
                                B3334,
                                ralphScoreCCMconcat([B3335], argumentsT__3363),
                                valueT__3366
                            ]));
                        }));
                    }));
                else
                    return(normalize_value__3364(value__3360, env__3343, function B3367(valueT__3368) {
                        return(k__3344([
                            B3334,
                            place__3359,
                            valueT__3368
                        ]));
                    }));
            } else {
                var B3369 = ralphScoreCCEE(B3345, '%define'), B3396 = false;
                if (($T)(B3369))
                    B3396 = B3369;
                else
                    B3396 = ralphScoreCCEE(B3345, '%var');
                if (($T)(B3396)) {
                    var op__3370 = exp__3342[0], identifier__3371 = exp__3342[1], value__3372 = exp__3342[2];
                    return(normalize_value__3364(value__3372, env__3343, function B3373(valueT__3374) {
                        return(k__3344([
                            op__3370,
                            identifier__3371,
                            valueT__3374
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B3345, '%if'))) {
                    var ____3375 = exp__3342[0], test__3376 = exp__3342[1], consequent__3377 = exp__3342[2], alternate__3378 = exp__3342[3];
                    return(normalize_value__3364(test__3376, env__3343, function B3379(testT__3380) {
                        return(k__3344([
                            B3336,
                            testT__3380,
                            normalize_term__3310(consequent__3377, env__3343),
                            normalize_term__3310(alternate__3378, env__3343)
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B3345, '%begin'))) {
                    var ____3381 = exp__3342[0], form__3382 = exp__3342[1], forms__3383 = $SL.call(exp__3342, 2);
                    if (($T)(ralphScoreCCemptyQ(forms__3383)))
                        return(normalize__3309(form__3382, env__3343, k__3344));
                    else
                        return(normalize__3309(form__3382, env__3343, function B3384(formT__3385) {
                            return([
                                B3337,
                                formT__3385,
                                normalize__3309(ralphScoreCCMconcat([B3337], forms__3383), env__3343, k__3344)
                            ]);
                        }));
                } else if (($T)(ralphScoreCCEE(B3345, '%while'))) {
                    var ____3386 = exp__3342[0], test__3387 = exp__3342[1], form__3388 = exp__3342[2], B3397 = false;
                    if (($T)(generates_statementsQ__3302(test__3387)))
                        B3397 = [
                            B3338,
                            true,
                            normalize_term__3310([
                                B3336,
                                test__3387,
                                normalize_term__3310(form__3388),
                                [
                                    B3339,
                                    'break'
                                ]
                            ], env__3343)
                        ];
                    else
                        B3397 = [
                            B3338,
                            normalize_term__3310(test__3387, env__3343),
                            normalize_term__3310(form__3388, env__3343)
                        ];
                    return(k__3344(B3397));
                } else if (($T)(ralphScoreCCEE(B3345, '%try'))) {
                    var ____3389 = exp__3342[0], protected_form__3390 = exp__3342[1], identifier__3391 = exp__3342[2], handling_form__3392 = exp__3342[3];
                    return(k__3344([
                        B3340,
                        normalize_term__3310(protected_form__3390, env__3343),
                        identifier__3391,
                        normalize_term__3310(handling_form__3392, env__3343)
                    ]));
                } else if (($T)(generates_statementsQ__3302(exp__3342)))
                    return(normalize_all__3393(exp__3342, env__3343, k__3344));
                else
                    return(k__3344(ralphScoreCCmap(ralphScoreCCrcurry(normalize_term__3310, env__3343), exp__3342)));
            }
        } else
            return(k__3344(exp__3342));
    }, false);
var normalize_value__3364 = ralphScoreCCMmake_function('normalize_value', function B3399(exp__3400, env__3401, k__3402) {
        if (($T)(generates_statementsQ__3302(exp__3400)))
            return(normalizeT__3403(exp__3400, env__3401, k__3402));
        else {
            var B3404 = false;
            if (($T)(ralphScoreCCinstanceQ(exp__3400, ralphScoreCCLarrayG)))
                B3404 = ralphScoreCCmap(ralphScoreCCrcurry(normalize_term__3310, env__3401), exp__3400);
            else
                B3404 = exp__3400;
            return(k__3402(B3404));
        }
    }, false);
var ralphScoreCCgenerate_symbol = B3282['generate-symbol'], normalizeT__3403 = ralphScoreCCMmake_function('normalizeT', function B3407(exp__3408, env__3409, k__3410) {
        return(normalize__3309(exp__3408, env__3409, function B3411(expT__3412) {
            if (($T)(atomicQ__3288(expT__3412)))
                return(k__3410(expT__3412));
            else {
                var t__3413 = ralphScoreCCgenerate_symbol(env__3409);
                return([
                    B3332,
                    [
                        t__3413,
                        expT__3412
                    ],
                    k__3410(t__3413)
                ]);
            }
        }));
    }, false);
var normalizeTT__3361 = ralphScoreCCMmake_function('normalizeTT', function B3415(expT__3416, env__3417, k__3418) {
        if (($T)(ralphScoreCCemptyQ(expT__3416)))
            return(k__3418([]));
        else
            return(normalize_all__3393(expT__3416, env__3417, k__3418));
    }, false);
var ralphScoreCCcons = B3282['cons'], normalize_all__3393 = ralphScoreCCMmake_function('normalize_all', function B3422(exp__3423, env__3424, k__3425) {
        return(normalizeT__3403(ralphScoreCCfirst(exp__3423), env__3424, function B3426(t__3427) {
            return(normalizeTT__3361(ralphScoreCCrest(exp__3423), env__3424, function B3428(tT__3429) {
                return(k__3425(ralphScoreCCcons(t__3427, tT__3429)));
            }));
        }));
    }, false);
