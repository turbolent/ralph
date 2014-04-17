require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3328(name__3329, value__3330) {
            var B3332 = (exports);
            return(B3332[name__3329] = value__3330);
        };
        {
            ($module)['%eval'] = function B3331() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3333 = require('ralph/core');
{
    var B3334 = require('ralph/compiler/utilities');
    {
        var B3335 = require('ralph/compiler/environment');
        {
            var B3336 = require('ralph/compiler/transformer');
            var B3337 = require('ralph/format');
        }
    }
}
{
    var B3339 = $S('%get-property', 'ralph/core');
    {
        var B3340 = $S('%native', 'ralph/core');
        {
            ($module)['make-module-reference'] = function B3341(identifier__3342) {
                return([
                    B3339,
                    [
                        B3340,
                        '$module'
                    ],
                    B3333['symbol-name'](identifier__3342)
                ]);
            };
            B3333['%annotate-function'](($module)['make-module-reference'], 'make-module-reference', false);
        }
    }
}
{
    var B3346 = $S('%begin', 'ralph/core');
    {
        ($module)['wrap-value!'] = function B3347(exp__3348, wrapper__3349) {
            if (($T)(B3333['instance?'](exp__3348, B3333['<array>']))) {
                var B3350 = B3333['symbol-name'](B3333['first'](exp__3348));
                if (($T)(B3333['=='](B3350, '%quote')))
                    return(exp__3348);
                else {
                    var B3351 = B3333['=='](B3350, '%begin');
                    {
                        var B3352 = false;
                        if (($T)(B3351))
                            B3352 = B3351;
                        else
                            B3352 = B3333['=='](B3350, '%bind');
                        if (($T)(B3352)) {
                            B3333['last-setter'](exp__3348, ($module)['wrap-value!'](B3333['last'](exp__3348), wrapper__3349));
                            return(exp__3348);
                        } else if (($T)(B3333['=='](B3350, '%if'))) {
                            B3333['third-setter'](exp__3348, ($module)['wrap-value!'](B3333['third'](exp__3348), wrapper__3349));
                            {
                                B3333['last-setter'](exp__3348, ($module)['wrap-value!'](B3333['last'](exp__3348), wrapper__3349));
                                return(exp__3348);
                            }
                        } else if (($T)(B3333['=='](B3350, '%while')))
                            return([
                                B3346,
                                exp__3348,
                                ($module)['wrap-value!'](false, wrapper__3349)
                            ]);
                        else if (($T)(B3333['=='](B3350, '%try'))) {
                            B3333['second-setter'](exp__3348, ($module)['wrap-value!'](B3333['second'](exp__3348), wrapper__3349));
                            {
                                B3333['last-setter'](exp__3348, ($module)['wrap-value!'](B3333['last'](exp__3348), wrapper__3349));
                                return(exp__3348);
                            }
                        } else
                            return(B3333['concatenate'](wrapper__3349, [exp__3348]));
                    }
                }
            } else
                return(B3333['concatenate'](wrapper__3349, [exp__3348]));
        };
        B3333['%annotate-function'](($module)['wrap-value!'], 'wrap-value!', false);
    }
}
{
    var B3354 = $S('%native-call', 'ralph/core');
    {
        ($module)['wrap-return'] = function B3355(exp__3356) {
            return(($module)['wrap-value!'](exp__3356, [
                B3354,
                'return'
            ]));
        };
        B3333['%annotate-function'](($module)['wrap-return'], 'wrap-return', false);
    }
}
{
    var B3357 = $S('%if', 'ralph/core');
    {
        var B3358 = $S('%while', 'ralph/core');
        {
            var B3359 = $S('%bind', 'ralph/core');
            {
                var B3360 = $S('%try', 'ralph/core');
                ($module)['$statement-symbols'] = [
                    B3357,
                    B3358,
                    B3346,
                    B3359,
                    B3360
                ];
            }
        }
    }
}
{
    ($module)['generates-statement?'] = function B3362(exp__3363) {
        if (($T)(B3333['instance?'](exp__3363, B3333['<array>'])))
            if (($T)(B3333['not'](B3333['empty?'](exp__3363))))
                return(B3333['member?'](B3333['first'](exp__3363), ($module)['$statement-symbols']));
            else
                return(false);
        else
            return(false);
    };
    B3333['%annotate-function'](($module)['generates-statement?'], 'generates-statement?', false);
}
{
    ($module)['wrap-true'] = function B3365(exp__3366) {
        if (($T)(B3333['instance?'](exp__3366, B3333['<boolean>'])))
            return(B3333['true?'](exp__3366));
        else
            return([
                [
                    B3340,
                    '$T'
                ],
                exp__3366
            ]);
    };
    B3333['%annotate-function'](($module)['wrap-true'], 'wrap-true', false);
}
{
    var B3368 = $S('%export');
    {
        ($module)['wrap-export'] = function B3369(identifier__3370, value__3371, exp__3372, env__3373) {
            var B3374 = false;
            if (($T)(B3333['not'](B3335['locally-bound?'](exp__3372, env__3373))))
                B3374 = B3333['member?'](B3333['symbol-name'](identifier__3370), B3333['get'](env__3373, 'module', 'exports'));
            else
                B3374 = false;
            if (($T)(B3374))
                return([
                    B3346,
                    exp__3372,
                    [
                        ($module)['make-module-reference'](B3368),
                        B3333['symbol-name'](identifier__3370),
                        value__3371
                    ]
                ]);
            else
                return(exp__3372);
        };
        B3333['%annotate-function'](($module)['wrap-export'], 'wrap-export', false);
    }
}
($module)['*transformers*'] = B3333['make-plain-object']();
{
    {
        ($module)['transform-statements!'] = function B3380(exp__3381, env__3382) {
            var B3383 = exp__3381;
            if (($T)(B3333['instance?'](B3383, B3333['<array>']))) {
                var name__3384 = B3333['symbol-name'](B3333['first'](exp__3381));
                {
                    var B3385 = B3333['get'](($module)['*transformers*'], name__3384);
                    if (($T)(B3385)) {
                        var transformer__3386 = B3385;
                        return(B3333['apply'](transformer__3386, env__3382, B3333['rest'](exp__3381)));
                    } else
                        return(B3333['map'](B3333['rcurry'](($module)['transform-statements!'], env__3382), exp__3381));
                }
            } else if (($T)(B3333['instance?'](B3383, B3333['<symbol>']))) {
                var B3387 = B3334['special-symbol?'](exp__3381);
                {
                    var B3389 = false;
                    if (($T)(B3387))
                        B3389 = B3387;
                    else {
                        var B3388 = B3335['locally-bound?'](exp__3381, env__3382);
                        if (($T)(B3388))
                            B3389 = B3388;
                        else
                            B3389 = B3333['get'](exp__3381, 'generated?');
                    }
                    if (($T)(B3389))
                        return(exp__3381);
                    else
                        return(($module)['make-module-reference'](exp__3381));
                }
            } else
                return(exp__3381);
        };
        ($module)['%export']('transform-statements!', ($module)['transform-statements!']);
    }
    B3333['%annotate-function'](($module)['transform-statements!'], 'transform-statements!', false);
}
{
    var B3390 = $S('%quote', 'ralph/core');
    B3333['get-setter'](($module)['*transformers*'], '%quote', B3336['make-quote-transformer'](B3390));
}
{
    var B3392 = $S('%var', 'ralph/core');
    {
        var B3393 = $S('%set', 'ralph/core');
        B3333['get-setter'](($module)['*transformers*'], '%bind', B3336['make-bind-transformer'](($module)['transform-statements!'], function B3394(env__3395, identifier__3396, valueT__3397, bodyT__3398) {
            if (($T)(($module)['generates-statement?'](valueT__3397)))
                return([
                    B3346,
                    [
                        B3392,
                        identifier__3396,
                        false
                    ],
                    ($module)['wrap-value!'](valueT__3397, [
                        B3393,
                        identifier__3396
                    ]),
                    bodyT__3398
                ]);
            else
                return([
                    B3346,
                    [
                        B3392,
                        identifier__3396,
                        valueT__3397
                    ],
                    bodyT__3398
                ]);
        }));
    }
}
{
    var B3400 = $S('%method', 'ralph/core');
    B3333['get-setter'](($module)['*transformers*'], '%method', B3336['make-method-transformer'](($module)['transform-statements!'], function B3401(env__3402, name__3403, parameters__3404, formT__3405) {
        return([
            B3400,
            name__3403,
            parameters__3404,
            ($module)['wrap-return'](formT__3405)
        ]);
    }));
}
B3333['get-setter'](($module)['*transformers*'], '%set', B3336['make-set-transformer'](($module)['transform-statements!'], function B3407(env__3408, placeT__3409, valueT__3410) {
    return(($module)['wrap-export'](placeT__3409, placeT__3409, [
        B3393,
        placeT__3409,
        valueT__3410
    ], env__3408));
}));
{
    var B3418 = [
            '%var',
            '%define'
        ];
    {
        var B3419 = false;
        {
            var B3420 = false;
            {
                var B3421 = [B3418];
                {
                    while (true) {
                        var B3431 = B3333['not'];
                        {
                            var B3422 = B3419;
                            {
                                var B3432 = false;
                                if (($T)(B3422))
                                    B3432 = B3422;
                                else
                                    B3432 = B3333['any?'](B3333['empty?'], B3421);
                                {
                                    var B3433 = B3431(B3432);
                                    if (($T)(B3433)) {
                                        var name__3423 = B3333['first'](B3418);
                                        {
                                            (function B3424(name__3425) {
                                                return(B3333['get-setter'](($module)['*transformers*'], name__3425, B3336['make-var-transformer'](($module)['transform-statements!'], function B3426(env__3427, identifier__3428, valueT__3429) {
                                                    if (($T)(B3333['get'](identifier__3428, 'generated?')))
                                                        return(($module)['wrap-export'](identifier__3428, identifier__3428, [
                                                            B3392,
                                                            identifier__3428,
                                                            valueT__3429
                                                        ], env__3427));
                                                    else {
                                                        var place__3430 = ($module)['make-module-reference'](identifier__3428);
                                                        return(($module)['wrap-export'](identifier__3428, place__3430, [
                                                            B3393,
                                                            place__3430,
                                                            valueT__3429
                                                        ], env__3427));
                                                    }
                                                })));
                                            }(name__3423));
                                            {
                                                B3418 = B3333['rest'](B3418);
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
{
    var B3435 = $K('count');
    {
        var B3436 = $K('k');
        B3333['get-setter'](($module)['*transformers*'], '%if', B3336['make-rest-transformer'](($module)['transform-statements!'], B3435, 3, B3436, function B3437(env__3438, predicateT__3439, consequentT__3440, alternateT__3441) {
            return([
                B3357,
                ($module)['wrap-true'](predicateT__3439),
                consequentT__3440,
                alternateT__3441
            ]);
        }));
    }
}
B3333['get-setter'](($module)['*transformers*'], '%while', B3336['make-rest-transformer'](($module)['transform-statements!'], B3435, 2, B3436, function B3443(env__3444, predicateT__3445, formT__3446) {
    return([
        B3358,
        ($module)['wrap-true'](predicateT__3445),
        formT__3446
    ]);
}));
B3333['get-setter'](($module)['*transformers*'], '%try', B3336['make-try-transformer'](($module)['transform-statements!']));
B3333['get-setter'](($module)['*transformers*'], '%object', B3336['make-object-transformer'](($module)['transform-statements!']));
{
    var B3453 = $S('%infix', 'ralph/core');
    {
        var B3454 = [
                B3354,
                B3453
            ];
        {
            var B3455 = false;
            {
                var B3456 = false;
                {
                    var B3457 = [B3454];
                    {
                        while (true) {
                            var B3462 = B3333['not'];
                            {
                                var B3458 = B3455;
                                {
                                    var B3463 = false;
                                    if (($T)(B3458))
                                        B3463 = B3458;
                                    else
                                        B3463 = B3333['any?'](B3333['empty?'], B3457);
                                    {
                                        var B3464 = B3462(B3463);
                                        if (($T)(B3464)) {
                                            var symbol__3459 = B3333['first'](B3454);
                                            {
                                                (function B3460(symbol__3461) {
                                                    return(B3333['get-setter'](($module)['*transformers*'], B3333['symbol-name'](symbol__3461), B3336['make-operator-transformer'](symbol__3461, ($module)['transform-statements!'])));
                                                }(symbol__3459));
                                                {
                                                    B3454 = B3333['rest'](B3454);
                                                    B3457 = [B3454];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        B3456;
                    }
                }
            }
        }
    }
}
{
    var B3471 = $S('%array', 'ralph/core');
    {
        var B3472 = $K('symbol');
        {
            var B3473 = [
                    B3346,
                    B3340,
                    B3471,
                    B3339
                ];
            {
                var B3474 = false;
                {
                    var B3475 = false;
                    {
                        var B3476 = [B3473];
                        {
                            while (true) {
                                var B3481 = B3333['not'];
                                {
                                    var B3477 = B3474;
                                    {
                                        var B3482 = false;
                                        if (($T)(B3477))
                                            B3482 = B3477;
                                        else
                                            B3482 = B3333['any?'](B3333['empty?'], B3476);
                                        {
                                            var B3483 = B3481(B3482);
                                            if (($T)(B3483)) {
                                                var symbol__3478 = B3333['first'](B3473);
                                                {
                                                    (function B3479(symbol__3480) {
                                                        return(B3333['get-setter'](($module)['*transformers*'], B3333['symbol-name'](symbol__3480), B3336['make-rest-transformer'](($module)['transform-statements!'], B3472, symbol__3480)));
                                                    }(symbol__3478));
                                                    {
                                                        B3473 = B3333['rest'](B3473);
                                                        B3476 = [B3473];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B3475;
                        }
                    }
                }
            }
        }
    }
}
