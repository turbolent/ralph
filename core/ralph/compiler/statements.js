require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3330(name__3331, value__3332) {
            var B3334 = (exports);
            return(B3334[name__3331] = value__3332);
        };
        {
            ($module)['%eval'] = function B3333() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3335 = require('ralph/core');
{
    var B3336 = require('ralph/compiler/utilities');
    {
        var B3337 = require('ralph/compiler/environment');
        {
            var B3338 = require('ralph/compiler/transformer');
            var B3339 = require('ralph/format');
        }
    }
}
{
    var B3341 = $S('%get-property', 'ralph/core');
    {
        var B3342 = $S('%native', 'ralph/core');
        {
            ($module)['make-module-reference'] = function B3343(identifier__3344) {
                return([
                    B3341,
                    [
                        B3342,
                        '$module'
                    ],
                    B3335['symbol-name'](identifier__3344)
                ]);
            };
            B3335['%annotate-function'](($module)['make-module-reference'], 'make-module-reference', false);
        }
    }
}
{
    var B3348 = $S('%begin', 'ralph/core');
    {
        ($module)['wrap-value!'] = function B3349(exp__3350, wrapper__3351) {
            if (($T)(B3335['instance?'](exp__3350, B3335['<array>']))) {
                var B3352 = B3335['symbol-name'](B3335['first'](exp__3350));
                if (($T)(B3335['=='](B3352, '%quote')))
                    return(exp__3350);
                else {
                    var B3353 = B3335['=='](B3352, '%begin');
                    {
                        var B3354 = false;
                        if (($T)(B3353))
                            B3354 = B3353;
                        else
                            B3354 = B3335['=='](B3352, '%bind');
                        if (($T)(B3354)) {
                            B3335['last-setter'](exp__3350, ($module)['wrap-value!'](B3335['last'](exp__3350), wrapper__3351));
                            return(exp__3350);
                        } else if (($T)(B3335['=='](B3352, '%if'))) {
                            B3335['third-setter'](exp__3350, ($module)['wrap-value!'](B3335['third'](exp__3350), wrapper__3351));
                            {
                                B3335['last-setter'](exp__3350, ($module)['wrap-value!'](B3335['last'](exp__3350), wrapper__3351));
                                return(exp__3350);
                            }
                        } else if (($T)(B3335['=='](B3352, '%while')))
                            return([
                                B3348,
                                exp__3350,
                                ($module)['wrap-value!'](false, wrapper__3351)
                            ]);
                        else if (($T)(B3335['=='](B3352, '%try'))) {
                            B3335['second-setter'](exp__3350, ($module)['wrap-value!'](B3335['second'](exp__3350), wrapper__3351));
                            {
                                B3335['last-setter'](exp__3350, ($module)['wrap-value!'](B3335['last'](exp__3350), wrapper__3351));
                                return(exp__3350);
                            }
                        } else
                            return(B3335['concatenate'](wrapper__3351, [exp__3350]));
                    }
                }
            } else
                return(B3335['concatenate'](wrapper__3351, [exp__3350]));
        };
        B3335['%annotate-function'](($module)['wrap-value!'], 'wrap-value!', false);
    }
}
{
    var B3356 = $S('%native-call', 'ralph/core');
    {
        ($module)['wrap-return'] = function B3357(exp__3358) {
            return(($module)['wrap-value!'](exp__3358, [
                B3356,
                'return'
            ]));
        };
        B3335['%annotate-function'](($module)['wrap-return'], 'wrap-return', false);
    }
}
{
    var B3359 = $S('%if', 'ralph/core');
    {
        var B3360 = $S('%while', 'ralph/core');
        {
            var B3361 = $S('%bind', 'ralph/core');
            {
                var B3362 = $S('%try', 'ralph/core');
                ($module)['$statement-symbols'] = [
                    B3359,
                    B3360,
                    B3348,
                    B3361,
                    B3362
                ];
            }
        }
    }
}
{
    ($module)['generates-statement?'] = function B3364(exp__3365) {
        if (($T)(B3335['instance?'](exp__3365, B3335['<array>'])))
            if (($T)(B3335['not'](B3335['empty?'](exp__3365))))
                return(B3335['member?'](B3335['first'](exp__3365), ($module)['$statement-symbols']));
            else
                return(false);
        else
            return(false);
    };
    B3335['%annotate-function'](($module)['generates-statement?'], 'generates-statement?', false);
}
{
    ($module)['wrap-true'] = function B3367(exp__3368) {
        if (($T)(B3335['instance?'](exp__3368, B3335['<boolean>'])))
            return(B3335['true?'](exp__3368));
        else
            return([
                [
                    B3342,
                    '$T'
                ],
                exp__3368
            ]);
    };
    B3335['%annotate-function'](($module)['wrap-true'], 'wrap-true', false);
}
{
    var B3370 = $S('%export');
    {
        ($module)['wrap-export'] = function B3371(identifier__3372, value__3373, exp__3374, env__3375) {
            var B3376 = false;
            if (($T)(B3335['not'](B3337['locally-bound?'](exp__3374, env__3375))))
                B3376 = B3335['member?'](B3335['symbol-name'](identifier__3372), B3335['get'](env__3375, 'module', 'exports'));
            else
                B3376 = false;
            if (($T)(B3376))
                return([
                    B3348,
                    exp__3374,
                    [
                        ($module)['make-module-reference'](B3370),
                        B3335['symbol-name'](identifier__3372),
                        value__3373
                    ]
                ]);
            else
                return(exp__3374);
        };
        B3335['%annotate-function'](($module)['wrap-export'], 'wrap-export', false);
    }
}
($module)['*transformers*'] = B3335['make-plain-object']();
{
    {
        ($module)['transform-statements!'] = function B3382(exp__3383, env__3384) {
            var B3385 = exp__3383;
            if (($T)(B3335['instance?'](B3385, B3335['<array>']))) {
                var name__3386 = B3335['symbol-name'](B3335['first'](exp__3383));
                {
                    var B3387 = B3335['get'](($module)['*transformers*'], name__3386);
                    if (($T)(B3387)) {
                        var transformer__3388 = B3387;
                        return(B3335['apply'](transformer__3388, env__3384, B3335['rest'](exp__3383)));
                    } else
                        return(B3335['map'](B3335['rcurry'](($module)['transform-statements!'], env__3384), exp__3383));
                }
            } else if (($T)(B3335['instance?'](B3385, B3335['<symbol>']))) {
                var B3389 = B3336['special-symbol?'](exp__3383);
                {
                    var B3391 = false;
                    if (($T)(B3389))
                        B3391 = B3389;
                    else {
                        var B3390 = B3337['locally-bound?'](exp__3383, env__3384);
                        if (($T)(B3390))
                            B3391 = B3390;
                        else
                            B3391 = B3335['get'](exp__3383, 'generated?');
                    }
                    if (($T)(B3391))
                        return(exp__3383);
                    else
                        return(($module)['make-module-reference'](exp__3383));
                }
            } else
                return(exp__3383);
        };
        ($module)['%export']('transform-statements!', ($module)['transform-statements!']);
    }
    B3335['%annotate-function'](($module)['transform-statements!'], 'transform-statements!', false);
}
{
    var B3392 = $S('%quote', 'ralph/core');
    B3335['get-setter'](($module)['*transformers*'], '%quote', B3338['make-quote-transformer'](B3392));
}
{
    var B3394 = $S('%var', 'ralph/core');
    {
        var B3395 = $S('%set', 'ralph/core');
        B3335['get-setter'](($module)['*transformers*'], '%bind', B3338['make-bind-transformer'](($module)['transform-statements!'], function B3396(env__3397, identifier__3398, valueT__3399, bodyT__3400) {
            if (($T)(($module)['generates-statement?'](valueT__3399)))
                return([
                    B3348,
                    [
                        B3394,
                        identifier__3398,
                        false
                    ],
                    ($module)['wrap-value!'](valueT__3399, [
                        B3395,
                        identifier__3398
                    ]),
                    bodyT__3400
                ]);
            else
                return([
                    B3348,
                    [
                        B3394,
                        identifier__3398,
                        valueT__3399
                    ],
                    bodyT__3400
                ]);
        }));
    }
}
{
    var B3402 = $S('%method', 'ralph/core');
    B3335['get-setter'](($module)['*transformers*'], '%method', B3338['make-method-transformer'](($module)['transform-statements!'], function B3403(env__3404, name__3405, parameters__3406, formT__3407) {
        return([
            B3402,
            name__3405,
            parameters__3406,
            ($module)['wrap-return'](formT__3407)
        ]);
    }));
}
B3335['get-setter'](($module)['*transformers*'], '%set', B3338['make-set-transformer'](($module)['transform-statements!'], function B3409(env__3410, placeT__3411, valueT__3412) {
    return(($module)['wrap-export'](placeT__3411, placeT__3411, [
        B3395,
        placeT__3411,
        valueT__3412
    ], env__3410));
}));
{
    var B3420 = [
            '%var',
            '%define'
        ];
    {
        var B3421 = false;
        {
            var B3422 = false;
            {
                var B3423 = [B3420];
                {
                    while (true) {
                        var B3433 = B3335['not'];
                        {
                            var B3424 = B3421;
                            {
                                var B3434 = false;
                                if (($T)(B3424))
                                    B3434 = B3424;
                                else
                                    B3434 = B3335['any?'](B3335['empty?'], B3423);
                                {
                                    var B3435 = B3433(B3434);
                                    if (($T)(B3435)) {
                                        var name__3425 = B3335['first'](B3420);
                                        {
                                            (function B3426(name__3427) {
                                                return(B3335['get-setter'](($module)['*transformers*'], name__3427, B3338['make-var-transformer'](($module)['transform-statements!'], function B3428(env__3429, identifier__3430, valueT__3431) {
                                                    if (($T)(B3335['get'](identifier__3430, 'generated?')))
                                                        return(($module)['wrap-export'](identifier__3430, identifier__3430, [
                                                            B3394,
                                                            identifier__3430,
                                                            valueT__3431
                                                        ], env__3429));
                                                    else {
                                                        var place__3432 = ($module)['make-module-reference'](identifier__3430);
                                                        return(($module)['wrap-export'](identifier__3430, place__3432, [
                                                            B3395,
                                                            place__3432,
                                                            valueT__3431
                                                        ], env__3429));
                                                    }
                                                })));
                                            }(name__3425));
                                            {
                                                B3420 = B3335['rest'](B3420);
                                                B3423 = [B3420];
                                            }
                                        }
                                    } else
                                        break;
                                }
                            }
                        }
                    }
                    B3422;
                }
            }
        }
    }
}
{
    var B3437 = $K('count');
    {
        var B3438 = $K('k');
        B3335['get-setter'](($module)['*transformers*'], '%if', B3338['make-rest-transformer'](($module)['transform-statements!'], B3437, 3, B3438, function B3439(env__3440, predicateT__3441, consequentT__3442, alternateT__3443) {
            return([
                B3359,
                ($module)['wrap-true'](predicateT__3441),
                consequentT__3442,
                alternateT__3443
            ]);
        }));
    }
}
B3335['get-setter'](($module)['*transformers*'], '%while', B3338['make-rest-transformer'](($module)['transform-statements!'], B3437, 2, B3438, function B3445(env__3446, predicateT__3447, formT__3448) {
    return([
        B3360,
        ($module)['wrap-true'](predicateT__3447),
        formT__3448
    ]);
}));
B3335['get-setter'](($module)['*transformers*'], '%try', B3338['make-try-transformer'](($module)['transform-statements!']));
B3335['get-setter'](($module)['*transformers*'], '%object', B3338['make-object-transformer'](($module)['transform-statements!']));
{
    var B3455 = $S('%infix', 'ralph/core');
    {
        var B3456 = [
                B3356,
                B3455
            ];
        {
            var B3457 = false;
            {
                var B3458 = false;
                {
                    var B3459 = [B3456];
                    {
                        while (true) {
                            var B3464 = B3335['not'];
                            {
                                var B3460 = B3457;
                                {
                                    var B3465 = false;
                                    if (($T)(B3460))
                                        B3465 = B3460;
                                    else
                                        B3465 = B3335['any?'](B3335['empty?'], B3459);
                                    {
                                        var B3466 = B3464(B3465);
                                        if (($T)(B3466)) {
                                            var symbol__3461 = B3335['first'](B3456);
                                            {
                                                (function B3462(symbol__3463) {
                                                    return(B3335['get-setter'](($module)['*transformers*'], B3335['symbol-name'](symbol__3463), B3338['make-operator-transformer'](symbol__3463, ($module)['transform-statements!'])));
                                                }(symbol__3461));
                                                {
                                                    B3456 = B3335['rest'](B3456);
                                                    B3459 = [B3456];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        B3458;
                    }
                }
            }
        }
    }
}
{
    var B3473 = $S('%array', 'ralph/core');
    {
        var B3474 = $K('symbol');
        {
            var B3475 = [
                    B3348,
                    B3342,
                    B3473,
                    B3341
                ];
            {
                var B3476 = false;
                {
                    var B3477 = false;
                    {
                        var B3478 = [B3475];
                        {
                            while (true) {
                                var B3483 = B3335['not'];
                                {
                                    var B3479 = B3476;
                                    {
                                        var B3484 = false;
                                        if (($T)(B3479))
                                            B3484 = B3479;
                                        else
                                            B3484 = B3335['any?'](B3335['empty?'], B3478);
                                        {
                                            var B3485 = B3483(B3484);
                                            if (($T)(B3485)) {
                                                var symbol__3480 = B3335['first'](B3475);
                                                {
                                                    (function B3481(symbol__3482) {
                                                        return(B3335['get-setter'](($module)['*transformers*'], B3335['symbol-name'](symbol__3482), B3338['make-rest-transformer'](($module)['transform-statements!'], B3474, symbol__3482)));
                                                    }(symbol__3480));
                                                    {
                                                        B3475 = B3335['rest'](B3475);
                                                        B3478 = [B3475];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B3477;
                        }
                    }
                }
            }
        }
    }
}
