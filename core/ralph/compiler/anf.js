var B3283 = require('ralph/core');
var B3285 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3283['%var'], ralphScoreCCMmake_function = B3283['%make-function'], ralphScoreCCanyQ = B3283['any?'], ralphScoreCCcurry = B3283['curry'], ralphScoreCCinstanceQ = B3283['instance?'], ralphScoreCCLnumberG = B3283['<number>'], ralphScoreCCLbooleanG = B3283['<boolean>'], ralphScoreCCLstringG = B3283['<string>'], ralphScoreCCLsymbolG = B3283['<symbol>'], ralphScoreCCLkeywordG = B3283['<keyword>'], atomicQ__3289 = ralphScoreCCMmake_function('atomicQ', function B3287(expression__3288) {
        return(ralphScoreCCanyQ(ralphScoreCCcurry(ralphScoreCCinstanceQ, expression__3288), [
            ralphScoreCCLnumberG,
            ralphScoreCCLbooleanG,
            ralphScoreCCLstringG,
            ralphScoreCCLsymbolG,
            ralphScoreCCLkeywordG
        ]));
    }, false);
var ralphScoreCCLarrayG = B3283['<array>'], ralphScoreCCnot = B3283['not'], ralphScoreCCemptyQ = B3283['empty?'], ralphScoreCCsymbol_name = B3283['symbol-name'], ralphScoreCCfirst = B3283['first'], ralphScoreCCEE = B3283['=='], ralphScoreCClast = B3283['last'], generates_statementsQ__3303 = ralphScoreCCMmake_function('generates_statementsQ', function B3296(exp__3297) {
        var B3304 = false;
        if (($T)(ralphScoreCCinstanceQ(exp__3297, ralphScoreCCLarrayG)))
            B3304 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__3297));
        else
            B3304 = false;
        if (($T)(B3304)) {
            var B3298 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3297)), B3299 = ralphScoreCCEE(B3298, '%begin'), B3305 = false;
            if (($T)(B3299))
                B3305 = B3299;
            else {
                var B3300 = ralphScoreCCEE(B3298, '%if');
                if (($T)(B3300))
                    B3305 = B3300;
                else {
                    var B3301 = ralphScoreCCEE(B3298, '%while');
                    if (($T)(B3301))
                        B3305 = B3301;
                    else {
                        var B3302 = ralphScoreCCEE(B3298, '%bind');
                        if (($T)(B3302))
                            B3305 = B3302;
                        else
                            B3305 = ralphScoreCCEE(B3298, '%try');
                    }
                }
            }
            if (($T)(B3305))
                return(true);
            else if (($T)(ralphScoreCCEE(B3298, '%set')))
                return(generates_statementsQ__3303(ralphScoreCClast(exp__3297)));
            else if (($T)(ralphScoreCCEE(B3298, '%method')))
                return(false);
            else
                return(ralphScoreCCanyQ(generates_statementsQ__3303, exp__3297));
        } else
            return(false);
    }, false);
{
    var ralphScoreCCidentity = B3283['identity'], normalize_term__3311 = ralphScoreCCMmake_function('normalize_term', function B3307(expression__3308, env__3309) {
            return(normalize__3310(expression__3308, env__3309, ralphScoreCCidentity));
        }, false);
    (exports)['normalize-term'] = normalize_term__3311;
}
var ralphScompilerSutilitiesCCopQ = B3285['op?'], ralphScoreCCrest = B3283['rest'], ralphScoreCCMconcat = B3283['%concat'], ralphScoreCCmap = B3283['map'], ralphScoreCCrcurry = B3283['rcurry'], B3333 = $S('%bind'), B3334 = $S('%method'), B3335 = $S('%set'), B3336 = $S('%get-property'), B3337 = $S('%if'), B3338 = $S('%begin'), B3339 = $S('%while'), B3340 = $S('%native'), B3341 = $S('%try'), normalize__3310 = ralphScoreCCMmake_function('normalize', function B3342(exp__3343, env__3344, k__3345) {
        var B3395 = false;
        if (($T)(ralphScoreCCinstanceQ(exp__3343, ralphScoreCCLarrayG)))
            B3395 = ralphScoreCCnot(ralphScoreCCemptyQ(exp__3343));
        else
            B3395 = false;
        if (($T)(B3395)) {
            var B3346 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3343)), B3347 = ralphScoreCCEE(B3346, '%quote'), B3396 = false;
            if (($T)(B3347))
                B3396 = B3347;
            else
                B3396 = ralphScoreCCEE(B3346, '%native-name');
            if (($T)(B3396))
                return(k__3345(exp__3343));
            else if (($T)(ralphScoreCCEE(B3346, '%bind'))) {
                var ____3348 = exp__3343[0], B3349 = exp__3343[1], identifier__3350 = B3349[0], value__3351 = B3349[1], form__3352 = exp__3343[2];
                return(normalize__3310(value__3351, env__3344, function B3353(valueT__3354) {
                    return([
                        B3333,
                        [
                            identifier__3350,
                            valueT__3354
                        ],
                        normalize__3310(form__3352, env__3344, k__3345)
                    ]);
                }));
            } else if (($T)(ralphScoreCCEE(B3346, '%method'))) {
                var ____3355 = exp__3343[0], name__3356 = exp__3343[1], parameters__3357 = exp__3343[2], form__3358 = exp__3343[3];
                return(k__3345([
                    B3334,
                    name__3356,
                    parameters__3357,
                    normalize_term__3311(form__3358, env__3344)
                ]));
            } else if (($T)(ralphScoreCCEE(B3346, '%set'))) {
                var ____3359 = exp__3343[0], place__3360 = exp__3343[1], value__3361 = exp__3343[2];
                if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__3360)))
                    return(normalizeTT__3362(ralphScoreCCrest(place__3360), env__3344, function B3363(argumentsT__3364) {
                        return(normalize_value__3365(value__3361, env__3344, function B3366(valueT__3367) {
                            return(k__3345([
                                B3335,
                                ralphScoreCCMconcat([B3336], argumentsT__3364),
                                valueT__3367
                            ]));
                        }));
                    }));
                else
                    return(normalize_value__3365(value__3361, env__3344, function B3368(valueT__3369) {
                        return(k__3345([
                            B3335,
                            place__3360,
                            valueT__3369
                        ]));
                    }));
            } else {
                var B3370 = ralphScoreCCEE(B3346, '%define'), B3397 = false;
                if (($T)(B3370))
                    B3397 = B3370;
                else
                    B3397 = ralphScoreCCEE(B3346, '%var');
                if (($T)(B3397)) {
                    var op__3371 = exp__3343[0], identifier__3372 = exp__3343[1], value__3373 = exp__3343[2];
                    return(normalize_value__3365(value__3373, env__3344, function B3374(valueT__3375) {
                        return(k__3345([
                            op__3371,
                            identifier__3372,
                            valueT__3375
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B3346, '%if'))) {
                    var ____3376 = exp__3343[0], test__3377 = exp__3343[1], consequent__3378 = exp__3343[2], alternate__3379 = exp__3343[3];
                    return(normalize_value__3365(test__3377, env__3344, function B3380(testT__3381) {
                        return(k__3345([
                            B3337,
                            testT__3381,
                            normalize_term__3311(consequent__3378, env__3344),
                            normalize_term__3311(alternate__3379, env__3344)
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B3346, '%begin'))) {
                    var ____3382 = exp__3343[0], form__3383 = exp__3343[1], forms__3384 = $SL.call(exp__3343, 2);
                    if (($T)(ralphScoreCCemptyQ(forms__3384)))
                        return(normalize__3310(form__3383, env__3344, k__3345));
                    else
                        return(normalize__3310(form__3383, env__3344, function B3385(formT__3386) {
                            return([
                                B3338,
                                formT__3386,
                                normalize__3310(ralphScoreCCMconcat([B3338], forms__3384), env__3344, k__3345)
                            ]);
                        }));
                } else if (($T)(ralphScoreCCEE(B3346, '%while'))) {
                    var ____3387 = exp__3343[0], test__3388 = exp__3343[1], form__3389 = exp__3343[2], B3398 = false;
                    if (($T)(generates_statementsQ__3303(test__3388)))
                        B3398 = [
                            B3339,
                            true,
                            normalize_term__3311([
                                B3337,
                                test__3388,
                                normalize_term__3311(form__3389),
                                [
                                    B3340,
                                    'break'
                                ]
                            ], env__3344)
                        ];
                    else
                        B3398 = [
                            B3339,
                            normalize_term__3311(test__3388, env__3344),
                            normalize_term__3311(form__3389, env__3344)
                        ];
                    return(k__3345(B3398));
                } else if (($T)(ralphScoreCCEE(B3346, '%try'))) {
                    var ____3390 = exp__3343[0], protected_form__3391 = exp__3343[1], identifier__3392 = exp__3343[2], handling_form__3393 = exp__3343[3];
                    return(k__3345([
                        B3341,
                        normalize_term__3311(protected_form__3391, env__3344),
                        identifier__3392,
                        normalize_term__3311(handling_form__3393, env__3344)
                    ]));
                } else if (($T)(generates_statementsQ__3303(exp__3343)))
                    return(normalize_all__3394(exp__3343, env__3344, k__3345));
                else
                    return(k__3345(ralphScoreCCmap(ralphScoreCCrcurry(normalize_term__3311, env__3344), exp__3343)));
            }
        } else
            return(k__3345(exp__3343));
    }, false);
var normalize_value__3365 = ralphScoreCCMmake_function('normalize_value', function B3400(exp__3401, env__3402, k__3403) {
        if (($T)(generates_statementsQ__3303(exp__3401)))
            return(normalizeT__3404(exp__3401, env__3402, k__3403));
        else {
            var B3405 = false;
            if (($T)(ralphScoreCCinstanceQ(exp__3401, ralphScoreCCLarrayG)))
                B3405 = ralphScoreCCmap(ralphScoreCCrcurry(normalize_term__3311, env__3402), exp__3401);
            else
                B3405 = exp__3401;
            return(k__3403(B3405));
        }
    }, false);
var ralphScoreCCgenerate_symbol = B3283['generate-symbol'], normalizeT__3404 = ralphScoreCCMmake_function('normalizeT', function B3408(exp__3409, env__3410, k__3411) {
        return(normalize__3310(exp__3409, env__3410, function B3412(expT__3413) {
            if (($T)(atomicQ__3289(expT__3413)))
                return(k__3411(expT__3413));
            else {
                var t__3414 = ralphScoreCCgenerate_symbol(env__3410);
                return([
                    B3333,
                    [
                        t__3414,
                        expT__3413
                    ],
                    k__3411(t__3414)
                ]);
            }
        }));
    }, false);
var normalizeTT__3362 = ralphScoreCCMmake_function('normalizeTT', function B3416(expT__3417, env__3418, k__3419) {
        if (($T)(ralphScoreCCemptyQ(expT__3417)))
            return(k__3419([]));
        else
            return(normalize_all__3394(expT__3417, env__3418, k__3419));
    }, false);
var ralphScoreCCcons = B3283['cons'], normalize_all__3394 = ralphScoreCCMmake_function('normalize_all', function B3423(exp__3424, env__3425, k__3426) {
        return(normalizeT__3404(ralphScoreCCfirst(exp__3424), env__3425, function B3427(t__3428) {
            return(normalizeTT__3362(ralphScoreCCrest(exp__3424), env__3425, function B3429(tT__3430) {
                return(k__3426(ralphScoreCCcons(t__3428, tT__3430)));
            }));
        }));
    }, false);
