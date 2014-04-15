require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3292(name__3293, value__3294) {
            var B3296 = (exports);
            return(B3296[name__3293] = value__3294);
        };
        {
            ($module)['%eval'] = function B3295() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3297 = require('ralph/core');
{
    var B3298 = require('ralph/compiler/utilities');
    {
        var B3299 = require('ralph/compiler/environment');
        {
            var B3300 = require('ralph/compiler/transformer');
            var B3301 = require('ralph/format');
        }
    }
}
{
    var B3303 = $S('%get-property', 'ralph/core');
    {
        var B3304 = $S('%native', 'ralph/core');
        {
            ($module)['make-module-reference'] = function B3305(identifier__3306) {
                return([
                    B3303,
                    [
                        B3304,
                        '$module'
                    ],
                    B3297['symbol-name'](identifier__3306)
                ]);
            };
            B3297['%annotate-function'](($module)['make-module-reference'], 'make-module-reference', false);
        }
    }
}
{
    var B3310 = $S('%begin', 'ralph/core');
    {
        ($module)['wrap-value!'] = function B3311(exp__3312, wrapper__3313) {
            if (($T)(B3297['instance?'](exp__3312, B3297['<array>']))) {
                var B3314 = B3297['symbol-name'](B3297['first'](exp__3312));
                if (($T)(B3297['=='](B3314, '%quote')))
                    return(exp__3312);
                else {
                    var B3315 = B3297['=='](B3314, '%begin');
                    {
                        var B3316 = false;
                        if (($T)(B3315))
                            B3316 = B3315;
                        else
                            B3316 = B3297['=='](B3314, '%bind');
                        if (($T)(B3316)) {
                            B3297['last-setter'](exp__3312, ($module)['wrap-value!'](B3297['last'](exp__3312), wrapper__3313));
                            return(exp__3312);
                        } else if (($T)(B3297['=='](B3314, '%if'))) {
                            B3297['third-setter'](exp__3312, ($module)['wrap-value!'](B3297['third'](exp__3312), wrapper__3313));
                            {
                                B3297['last-setter'](exp__3312, ($module)['wrap-value!'](B3297['last'](exp__3312), wrapper__3313));
                                return(exp__3312);
                            }
                        } else if (($T)(B3297['=='](B3314, '%while')))
                            return([
                                B3310,
                                exp__3312,
                                ($module)['wrap-value!'](false, wrapper__3313)
                            ]);
                        else if (($T)(B3297['=='](B3314, '%try'))) {
                            B3297['second-setter'](exp__3312, ($module)['wrap-value!'](B3297['second'](exp__3312), wrapper__3313));
                            {
                                B3297['last-setter'](exp__3312, ($module)['wrap-value!'](B3297['last'](exp__3312), wrapper__3313));
                                return(exp__3312);
                            }
                        } else
                            return(B3297['concatenate'](wrapper__3313, [exp__3312]));
                    }
                }
            } else
                return(B3297['concatenate'](wrapper__3313, [exp__3312]));
        };
        B3297['%annotate-function'](($module)['wrap-value!'], 'wrap-value!', false);
    }
}
{
    var B3318 = $S('%native-call', 'ralph/core');
    {
        ($module)['wrap-return'] = function B3319(exp__3320) {
            return(($module)['wrap-value!'](exp__3320, [
                B3318,
                'return'
            ]));
        };
        B3297['%annotate-function'](($module)['wrap-return'], 'wrap-return', false);
    }
}
{
    var B3321 = $S('%if', 'ralph/core');
    {
        var B3322 = $S('%while', 'ralph/core');
        {
            var B3323 = $S('%bind', 'ralph/core');
            {
                var B3324 = $S('%try', 'ralph/core');
                ($module)['$statement-symbols'] = [
                    B3321,
                    B3322,
                    B3310,
                    B3323,
                    B3324
                ];
            }
        }
    }
}
{
    ($module)['generates-statement?'] = function B3326(exp__3327) {
        if (($T)(B3297['instance?'](exp__3327, B3297['<array>'])))
            if (($T)(B3297['not'](B3297['empty?'](exp__3327))))
                return(B3297['member?'](B3297['first'](exp__3327), ($module)['$statement-symbols']));
            else
                return(false);
        else
            return(false);
    };
    B3297['%annotate-function'](($module)['generates-statement?'], 'generates-statement?', false);
}
{
    ($module)['wrap-true'] = function B3329(exp__3330) {
        if (($T)(B3297['instance?'](exp__3330, B3297['<boolean>'])))
            return(B3297['true?'](exp__3330));
        else
            return([
                [
                    B3304,
                    '$T'
                ],
                exp__3330
            ]);
    };
    B3297['%annotate-function'](($module)['wrap-true'], 'wrap-true', false);
}
{
    var B3332 = $S('%export');
    {
        ($module)['wrap-export'] = function B3333(identifier__3334, value__3335, exp__3336, env__3337) {
            var B3338 = false;
            if (($T)(B3297['not'](B3299['locally-bound?'](exp__3336, env__3337))))
                B3338 = B3297['member?'](B3297['symbol-name'](identifier__3334), B3297['get'](env__3337, 'module', 'exports'));
            else
                B3338 = false;
            if (($T)(B3338))
                return([
                    B3310,
                    exp__3336,
                    [
                        ($module)['make-module-reference'](B3332),
                        B3297['symbol-name'](identifier__3334),
                        value__3335
                    ]
                ]);
            else
                return(exp__3336);
        };
        B3297['%annotate-function'](($module)['wrap-export'], 'wrap-export', false);
    }
}
($module)['*transformers*'] = B3297['make-plain-object']();
{
    {
        ($module)['transform-statements!'] = function B3344(exp__3345, env__3346) {
            var B3347 = exp__3345;
            if (($T)(B3297['instance?'](B3347, B3297['<array>']))) {
                var name__3348 = B3297['symbol-name'](B3297['first'](exp__3345));
                {
                    var B3349 = B3297['get'](($module)['*transformers*'], name__3348);
                    if (($T)(B3349)) {
                        var transformer__3350 = B3349;
                        return(B3297['apply'](transformer__3350, env__3346, B3297['rest'](exp__3345)));
                    } else
                        return(B3297['map'](B3297['rcurry'](($module)['transform-statements!'], env__3346), exp__3345));
                }
            } else if (($T)(B3297['instance?'](B3347, B3297['<symbol>']))) {
                var B3351 = B3298['special-symbol?'](exp__3345);
                {
                    var B3353 = false;
                    if (($T)(B3351))
                        B3353 = B3351;
                    else {
                        var B3352 = B3299['locally-bound?'](exp__3345, env__3346);
                        if (($T)(B3352))
                            B3353 = B3352;
                        else
                            B3353 = B3297['get'](exp__3345, 'generated?');
                    }
                    if (($T)(B3353))
                        return(exp__3345);
                    else
                        return(($module)['make-module-reference'](exp__3345));
                }
            } else
                return(exp__3345);
        };
        ($module)['%export']('transform-statements!', ($module)['transform-statements!']);
    }
    B3297['%annotate-function'](($module)['transform-statements!'], 'transform-statements!', false);
}
{
    var B3354 = $S('%quote', 'ralph/core');
    B3297['get-setter'](($module)['*transformers*'], '%quote', B3300['make-quote-transformer'](B3354));
}
{
    var B3356 = $S('%var', 'ralph/core');
    {
        var B3357 = $S('%set', 'ralph/core');
        B3297['get-setter'](($module)['*transformers*'], '%bind', B3300['make-bind-transformer'](($module)['transform-statements!'], function B3358(env__3359, identifier__3360, valueT__3361, bodyT__3362) {
            if (($T)(($module)['generates-statement?'](valueT__3361)))
                return([
                    B3310,
                    [
                        B3356,
                        identifier__3360,
                        false
                    ],
                    ($module)['wrap-value!'](valueT__3361, [
                        B3357,
                        identifier__3360
                    ]),
                    bodyT__3362
                ]);
            else
                return([
                    B3310,
                    [
                        B3356,
                        identifier__3360,
                        valueT__3361
                    ],
                    bodyT__3362
                ]);
        }));
    }
}
{
    var B3364 = $S('%method', 'ralph/core');
    B3297['get-setter'](($module)['*transformers*'], '%method', B3300['make-method-transformer'](($module)['transform-statements!'], function B3365(env__3366, name__3367, parameters__3368, formT__3369) {
        return([
            B3364,
            name__3367,
            parameters__3368,
            ($module)['wrap-return'](formT__3369)
        ]);
    }));
}
B3297['get-setter'](($module)['*transformers*'], '%set', B3300['make-set-transformer'](($module)['transform-statements!'], function B3371(env__3372, placeT__3373, valueT__3374) {
    return(($module)['wrap-export'](placeT__3373, placeT__3373, [
        B3357,
        placeT__3373,
        valueT__3374
    ], env__3372));
}));
{
    var B3382 = [
            '%var',
            '%define'
        ];
    {
        var B3383 = false;
        {
            var B3384 = false;
            {
                var B3385 = [B3382];
                {
                    while (true) {
                        var B3395 = B3297['not'];
                        {
                            var B3386 = B3383;
                            {
                                var B3396 = false;
                                if (($T)(B3386))
                                    B3396 = B3386;
                                else
                                    B3396 = B3297['any?'](B3297['empty?'], B3385);
                                {
                                    var B3397 = B3395(B3396);
                                    if (($T)(B3397)) {
                                        var name__3387 = B3297['first'](B3382);
                                        {
                                            (function B3388(name__3389) {
                                                return(B3297['get-setter'](($module)['*transformers*'], name__3389, B3300['make-var-transformer'](($module)['transform-statements!'], function B3390(env__3391, identifier__3392, valueT__3393) {
                                                    if (($T)(B3297['get'](identifier__3392, 'generated?')))
                                                        return(($module)['wrap-export'](identifier__3392, identifier__3392, [
                                                            B3356,
                                                            identifier__3392,
                                                            valueT__3393
                                                        ], env__3391));
                                                    else {
                                                        var place__3394 = ($module)['make-module-reference'](identifier__3392);
                                                        return(($module)['wrap-export'](identifier__3392, place__3394, [
                                                            B3357,
                                                            place__3394,
                                                            valueT__3393
                                                        ], env__3391));
                                                    }
                                                })));
                                            }(name__3387));
                                            {
                                                B3382 = B3297['rest'](B3382);
                                                B3385 = [B3382];
                                            }
                                        }
                                    } else
                                        break;
                                }
                            }
                        }
                    }
                    B3384;
                }
            }
        }
    }
}
{
    var B3399 = $K('count');
    {
        var B3400 = $K('k');
        B3297['get-setter'](($module)['*transformers*'], '%if', B3300['make-rest-transformer'](($module)['transform-statements!'], B3399, 3, B3400, function B3401(env__3402, predicateT__3403, consequentT__3404, alternateT__3405) {
            return([
                B3321,
                ($module)['wrap-true'](predicateT__3403),
                consequentT__3404,
                alternateT__3405
            ]);
        }));
    }
}
B3297['get-setter'](($module)['*transformers*'], '%while', B3300['make-rest-transformer'](($module)['transform-statements!'], B3399, 2, B3400, function B3407(env__3408, predicateT__3409, formT__3410) {
    return([
        B3322,
        ($module)['wrap-true'](predicateT__3409),
        formT__3410
    ]);
}));
B3297['get-setter'](($module)['*transformers*'], '%try', B3300['make-try-transformer'](($module)['transform-statements!']));
B3297['get-setter'](($module)['*transformers*'], '%object', B3300['make-object-transformer'](($module)['transform-statements!']));
{
    var B3417 = $S('%infix', 'ralph/core');
    {
        var B3418 = [
                B3318,
                B3417
            ];
        {
            var B3419 = false;
            {
                var B3420 = false;
                {
                    var B3421 = [B3418];
                    {
                        while (true) {
                            var B3426 = B3297['not'];
                            {
                                var B3422 = B3419;
                                {
                                    var B3427 = false;
                                    if (($T)(B3422))
                                        B3427 = B3422;
                                    else
                                        B3427 = B3297['any?'](B3297['empty?'], B3421);
                                    {
                                        var B3428 = B3426(B3427);
                                        if (($T)(B3428)) {
                                            var symbol__3423 = B3297['first'](B3418);
                                            {
                                                (function B3424(symbol__3425) {
                                                    return(B3297['get-setter'](($module)['*transformers*'], B3297['symbol-name'](symbol__3425), B3300['make-operator-transformer'](symbol__3425, ($module)['transform-statements!'])));
                                                }(symbol__3423));
                                                {
                                                    B3418 = B3297['rest'](B3418);
                                                    B3421 = [B3418];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        B3420;
                    }
                }
            }
        }
    }
}
{
    var B3435 = $S('%array', 'ralph/core');
    {
        var B3436 = $K('symbol');
        {
            var B3437 = [
                    B3310,
                    B3304,
                    B3435,
                    B3303
                ];
            {
                var B3438 = false;
                {
                    var B3439 = false;
                    {
                        var B3440 = [B3437];
                        {
                            while (true) {
                                var B3445 = B3297['not'];
                                {
                                    var B3441 = B3438;
                                    {
                                        var B3446 = false;
                                        if (($T)(B3441))
                                            B3446 = B3441;
                                        else
                                            B3446 = B3297['any?'](B3297['empty?'], B3440);
                                        {
                                            var B3447 = B3445(B3446);
                                            if (($T)(B3447)) {
                                                var symbol__3442 = B3297['first'](B3437);
                                                {
                                                    (function B3443(symbol__3444) {
                                                        return(B3297['get-setter'](($module)['*transformers*'], B3297['symbol-name'](symbol__3444), B3300['make-rest-transformer'](($module)['transform-statements!'], B3436, symbol__3444)));
                                                    }(symbol__3442));
                                                    {
                                                        B3437 = B3297['rest'](B3437);
                                                        B3440 = [B3437];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B3439;
                        }
                    }
                }
            }
        }
    }
}
