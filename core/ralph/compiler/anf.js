{
    var $module = Object.create(null);
    var Mexport = function B3292(name__3293, value__3294) {
        var B3295 = (exports);
        return(B3295[name__3293] = value__3294);
    };
}
var B3296 = require('ralph/core');
var B3297 = require('ralph/compiler/utilities');
{
    var atomicQ = function B3299(expression__3300) {
        return(B3296['any?'](B3296['curry'](B3296['instance?'], expression__3300), [
            B3296['<number>'],
            B3296['<boolean>'],
            B3296['<string>'],
            B3296['<symbol>'],
            B3296['<keyword>']
        ]));
    };
    B3296['%annotate-function'](atomicQ, 'atomic?', false);
}
{
    var generates_statementsQ = function B3307(exp__3308) {
        var B3314 = false;
        if (($T)(B3296['instance?'](exp__3308, B3296['<array>'])))
            B3314 = B3296['not'](B3296['empty?'](exp__3308));
        else
            B3314 = false;
        if (($T)(B3314)) {
            var B3309 = B3296['symbol-name'](B3296['first'](exp__3308));
            {
                var B3310 = B3296['=='](B3309, '%begin');
                {
                    var B3315 = false;
                    if (($T)(B3310))
                        B3315 = B3310;
                    else {
                        var B3311 = B3296['=='](B3309, '%if');
                        if (($T)(B3311))
                            B3315 = B3311;
                        else {
                            var B3312 = B3296['=='](B3309, '%while');
                            if (($T)(B3312))
                                B3315 = B3312;
                            else {
                                var B3313 = B3296['=='](B3309, '%bind');
                                if (($T)(B3313))
                                    B3315 = B3313;
                                else
                                    B3315 = B3296['=='](B3309, '%try');
                            }
                        }
                    }
                    if (($T)(B3315))
                        return(true);
                    else if (($T)(B3296['=='](B3309, '%set')))
                        return(generates_statementsQ(B3296['last'](exp__3308)));
                    else if (($T)(B3296['=='](B3309, '%method')))
                        return(false);
                    else
                        return(B3296['any?'](generates_statementsQ, exp__3308));
                }
            }
        } else
            return(false);
    };
    B3296['%annotate-function'](generates_statementsQ, 'generates-statements?', false);
}
{
    {
        var normalize_term = function B3317(expression__3318, env__3319) {
            return(normalize(expression__3318, env__3319, B3296['identity']));
        };
        Mexport('normalize-term', normalize_term);
    }
    B3296['%annotate-function'](normalize_term, 'normalize-term', false);
}
{
    var B3331 = $S('%bind', 'ralph/core');
    {
        var B3332 = $S('%method', 'ralph/core');
        {
            var B3333 = $S('%set', 'ralph/core');
            {
                var B3334 = $S('%get-property', 'ralph/core');
                {
                    var B3335 = $S('%if', 'ralph/core');
                    {
                        var B3336 = $S('%begin', 'ralph/core');
                        {
                            var B3337 = $S('%while', 'ralph/core');
                            {
                                var B3338 = $S('%native', 'ralph/core');
                                {
                                    var B3339 = $S('%try', 'ralph/core');
                                    {
                                        var normalize = function B3340(exp__3341, env__3342, k__3343) {
                                            var B3389 = false;
                                            if (($T)(B3296['instance?'](exp__3341, B3296['<array>'])))
                                                B3389 = B3296['not'](B3296['empty?'](exp__3341));
                                            else
                                                B3389 = false;
                                            if (($T)(B3389)) {
                                                var B3344 = B3296['symbol-name'](B3296['first'](exp__3341));
                                                if (($T)(B3296['=='](B3344, '%quote')))
                                                    return(k__3343(exp__3341));
                                                else if (($T)(B3296['=='](B3344, '%bind'))) {
                                                    var ____3345 = exp__3341[0];
                                                    {
                                                        var B3346 = exp__3341[1];
                                                        {
                                                            var identifier__3347 = B3346[0];
                                                            {
                                                                var value__3348 = B3346[1];
                                                                {
                                                                    var form__3349 = exp__3341[2];
                                                                    return(normalize(value__3348, env__3342, function B3350(valueT__3351) {
                                                                        return([
                                                                            B3331,
                                                                            [
                                                                                identifier__3347,
                                                                                valueT__3351
                                                                            ],
                                                                            normalize(form__3349, env__3342, k__3343)
                                                                        ]);
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3296['=='](B3344, '%method'))) {
                                                    var ____3352 = exp__3341[0];
                                                    {
                                                        var name__3353 = exp__3341[1];
                                                        {
                                                            var parameters__3354 = exp__3341[2];
                                                            {
                                                                var form__3355 = exp__3341[3];
                                                                return(k__3343([
                                                                    B3332,
                                                                    name__3353,
                                                                    parameters__3354,
                                                                    normalize_term(form__3355, env__3342)
                                                                ]));
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3296['=='](B3344, '%set'))) {
                                                    var ____3356 = exp__3341[0];
                                                    {
                                                        var place__3357 = exp__3341[1];
                                                        {
                                                            var value__3358 = exp__3341[2];
                                                            if (($T)(B3297['op?']('%get-property', place__3357)))
                                                                return(normalizeTT(B3296['rest'](place__3357), env__3342, function B3359(argumentsT__3360) {
                                                                    return(normalize_value(value__3358, env__3342, function B3361(valueT__3362) {
                                                                        return(k__3343([
                                                                            B3333,
                                                                            B3296['%concat']([B3334], argumentsT__3360),
                                                                            valueT__3362
                                                                        ]));
                                                                    }));
                                                                }));
                                                            else
                                                                return(normalize_value(value__3358, env__3342, function B3363(valueT__3364) {
                                                                    return(k__3343([
                                                                        B3333,
                                                                        place__3357,
                                                                        valueT__3364
                                                                    ]));
                                                                }));
                                                        }
                                                    }
                                                } else {
                                                    var B3365 = B3296['=='](B3344, '%define');
                                                    {
                                                        var B3390 = false;
                                                        if (($T)(B3365))
                                                            B3390 = B3365;
                                                        else
                                                            B3390 = B3296['=='](B3344, '%var');
                                                        if (($T)(B3390)) {
                                                            var op__3366 = exp__3341[0];
                                                            {
                                                                var identifier__3367 = exp__3341[1];
                                                                {
                                                                    var value__3368 = exp__3341[2];
                                                                    return(normalize_value(value__3368, env__3342, function B3369(valueT__3370) {
                                                                        return(k__3343([
                                                                            op__3366,
                                                                            identifier__3367,
                                                                            valueT__3370
                                                                        ]));
                                                                    }));
                                                                }
                                                            }
                                                        } else if (($T)(B3296['=='](B3344, '%if'))) {
                                                            var ____3371 = exp__3341[0];
                                                            {
                                                                var test__3372 = exp__3341[1];
                                                                {
                                                                    var consequent__3373 = exp__3341[2];
                                                                    {
                                                                        var alternate__3374 = exp__3341[3];
                                                                        return(normalize_value(test__3372, env__3342, function B3375(testT__3376) {
                                                                            return(k__3343([
                                                                                B3335,
                                                                                testT__3376,
                                                                                normalize_term(consequent__3373, env__3342),
                                                                                normalize_term(alternate__3374, env__3342)
                                                                            ]));
                                                                        }));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3296['=='](B3344, '%begin'))) {
                                                            var ____3377 = exp__3341[0];
                                                            {
                                                                var form__3378 = exp__3341[1];
                                                                {
                                                                    var forms__3379 = $SL.call(exp__3341, 2);
                                                                    if (($T)(B3296['empty?'](forms__3379)))
                                                                        return(normalize(form__3378, env__3342, k__3343));
                                                                    else
                                                                        return(normalize(form__3378, env__3342, function B3380(formT__3381) {
                                                                            return([
                                                                                B3336,
                                                                                formT__3381,
                                                                                normalize(B3296['%concat']([B3336], forms__3379), env__3342, k__3343)
                                                                            ]);
                                                                        }));
                                                                }
                                                            }
                                                        } else if (($T)(B3296['=='](B3344, '%while'))) {
                                                            var ____3382 = exp__3341[0];
                                                            {
                                                                var test__3383 = exp__3341[1];
                                                                {
                                                                    var form__3384 = exp__3341[2];
                                                                    {
                                                                        var B3391 = false;
                                                                        if (($T)(generates_statementsQ(test__3383)))
                                                                            B3391 = [
                                                                                B3337,
                                                                                true,
                                                                                normalize_term([
                                                                                    B3335,
                                                                                    test__3383,
                                                                                    normalize_term(form__3384),
                                                                                    [
                                                                                        B3338,
                                                                                        'break'
                                                                                    ]
                                                                                ], env__3342)
                                                                            ];
                                                                        else
                                                                            B3391 = [
                                                                                B3337,
                                                                                normalize_term(test__3383, env__3342),
                                                                                normalize_term(form__3384, env__3342)
                                                                            ];
                                                                        return(k__3343(B3391));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3296['=='](B3344, '%try'))) {
                                                            var ____3385 = exp__3341[0];
                                                            {
                                                                var protected_form__3386 = exp__3341[1];
                                                                {
                                                                    var identifier__3387 = exp__3341[2];
                                                                    {
                                                                        var handling_form__3388 = exp__3341[3];
                                                                        return(k__3343([
                                                                            B3339,
                                                                            normalize_term(protected_form__3386, env__3342),
                                                                            identifier__3387,
                                                                            normalize_term(handling_form__3388, env__3342)
                                                                        ]));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(generates_statementsQ(exp__3341)))
                                                            return(normalize_all(exp__3341, env__3342, k__3343));
                                                        else
                                                            return(k__3343(B3296['map'](B3296['rcurry'](normalize_term, env__3342), exp__3341)));
                                                    }
                                                }
                                            } else
                                                return(k__3343(exp__3341));
                                        };
                                        B3296['%annotate-function'](normalize, 'normalize', false);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
{
    var normalize_value = function B3393(exp__3394, env__3395, k__3396) {
        if (($T)(generates_statementsQ(exp__3394)))
            return(normalizeT(exp__3394, env__3395, k__3396));
        else {
            var B3397 = false;
            if (($T)(B3296['instance?'](exp__3394, B3296['<array>'])))
                B3397 = B3296['map'](B3296['rcurry'](normalize_term, env__3395), exp__3394);
            else
                B3397 = exp__3394;
            return(k__3396(B3397));
        }
    };
    B3296['%annotate-function'](normalize_value, 'normalize-value', false);
}
{
    var normalizeT = function B3400(exp__3401, env__3402, k__3403) {
        return(normalize(exp__3401, env__3402, function B3404(expT__3405) {
            if (($T)(atomicQ(expT__3405)))
                return(k__3403(expT__3405));
            else {
                var t__3406 = B3296['generate-symbol']();
                return([
                    B3331,
                    [
                        t__3406,
                        expT__3405
                    ],
                    k__3403(t__3406)
                ]);
            }
        }));
    };
    B3296['%annotate-function'](normalizeT, 'normalize*', false);
}
{
    var normalizeTT = function B3408(expT__3409, env__3410, k__3411) {
        if (($T)(B3296['empty?'](expT__3409)))
            return(k__3411([]));
        else
            return(normalize_all(expT__3409, env__3410, k__3411));
    };
    B3296['%annotate-function'](normalizeTT, 'normalize**', false);
}
{
    var normalize_all = function B3415(exp__3416, env__3417, k__3418) {
        return(normalizeT(B3296['first'](exp__3416), env__3417, function B3419(t__3420) {
            return(normalizeTT(B3296['rest'](exp__3416), env__3417, function B3421(tT__3422) {
                return(k__3418(B3296['cons'](t__3420, tT__3422)));
            }));
        }));
    };
    B3296['%annotate-function'](normalize_all, 'normalize-all', false);
}
