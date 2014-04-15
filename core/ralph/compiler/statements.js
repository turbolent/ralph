require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3318(name__3319, value__3320) {
            var B3322 = (exports);
            return(B3322[name__3319] = value__3320);
        };
        {
            ($module)['%eval'] = function B3321() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3323 = require('ralph/core');
{
    var B3324 = require('ralph/compiler/utilities');
    {
        var B3325 = require('ralph/compiler/environment');
        {
            var B3326 = require('ralph/compiler/transformer');
            var B3327 = require('ralph/format');
        }
    }
}
{
    var B3329 = $S('%get-property', 'ralph/core');
    {
        var B3330 = $S('%native', 'ralph/core');
        {
            ($module)['make-module-reference'] = function B3331(identifier__3332) {
                return([
                    B3329,
                    [
                        B3330,
                        '$module'
                    ],
                    B3323['symbol-name'](identifier__3332)
                ]);
            };
            B3323['%annotate-function'](($module)['make-module-reference'], 'make-module-reference', false);
        }
    }
}
{
    var B3336 = $S('%begin', 'ralph/core');
    {
        ($module)['wrap-value!'] = function B3337(exp__3338, wrapper__3339) {
            if (($T)(B3323['instance?'](exp__3338, B3323['<array>']))) {
                var B3340 = B3323['symbol-name'](B3323['first'](exp__3338));
                if (($T)(B3323['=='](B3340, '%quote')))
                    return(exp__3338);
                else {
                    var B3341 = B3323['=='](B3340, '%begin');
                    {
                        var B3342 = false;
                        if (($T)(B3341))
                            B3342 = B3341;
                        else
                            B3342 = B3323['=='](B3340, '%bind');
                        if (($T)(B3342)) {
                            B3323['last-setter'](exp__3338, ($module)['wrap-value!'](B3323['last'](exp__3338), wrapper__3339));
                            return(exp__3338);
                        } else if (($T)(B3323['=='](B3340, '%if'))) {
                            B3323['third-setter'](exp__3338, ($module)['wrap-value!'](B3323['third'](exp__3338), wrapper__3339));
                            {
                                B3323['last-setter'](exp__3338, ($module)['wrap-value!'](B3323['last'](exp__3338), wrapper__3339));
                                return(exp__3338);
                            }
                        } else if (($T)(B3323['=='](B3340, '%while')))
                            return([
                                B3336,
                                exp__3338,
                                ($module)['wrap-value!'](false, wrapper__3339)
                            ]);
                        else if (($T)(B3323['=='](B3340, '%try'))) {
                            B3323['second-setter'](exp__3338, ($module)['wrap-value!'](B3323['second'](exp__3338), wrapper__3339));
                            {
                                B3323['last-setter'](exp__3338, ($module)['wrap-value!'](B3323['last'](exp__3338), wrapper__3339));
                                return(exp__3338);
                            }
                        } else
                            return(B3323['concatenate'](wrapper__3339, [exp__3338]));
                    }
                }
            } else
                return(B3323['concatenate'](wrapper__3339, [exp__3338]));
        };
        B3323['%annotate-function'](($module)['wrap-value!'], 'wrap-value!', false);
    }
}
{
    var B3344 = $S('%native-call', 'ralph/core');
    {
        ($module)['wrap-return'] = function B3345(exp__3346) {
            return(($module)['wrap-value!'](exp__3346, [
                B3344,
                'return'
            ]));
        };
        B3323['%annotate-function'](($module)['wrap-return'], 'wrap-return', false);
    }
}
{
    var B3347 = $S('%if', 'ralph/core');
    {
        var B3348 = $S('%while', 'ralph/core');
        {
            var B3349 = $S('%bind', 'ralph/core');
            {
                var B3350 = $S('%try', 'ralph/core');
                ($module)['$statement-symbols'] = [
                    B3347,
                    B3348,
                    B3336,
                    B3349,
                    B3350
                ];
            }
        }
    }
}
{
    ($module)['generates-statement?'] = function B3352(exp__3353) {
        if (($T)(B3323['instance?'](exp__3353, B3323['<array>'])))
            if (($T)(B3323['not'](B3323['empty?'](exp__3353))))
                return(B3323['member?'](B3323['first'](exp__3353), ($module)['$statement-symbols']));
            else
                return(false);
        else
            return(false);
    };
    B3323['%annotate-function'](($module)['generates-statement?'], 'generates-statement?', false);
}
{
    ($module)['wrap-true'] = function B3355(exp__3356) {
        if (($T)(B3323['instance?'](exp__3356, B3323['<boolean>'])))
            return(B3323['true?'](exp__3356));
        else
            return([
                [
                    B3330,
                    '$T'
                ],
                exp__3356
            ]);
    };
    B3323['%annotate-function'](($module)['wrap-true'], 'wrap-true', false);
}
{
    var B3358 = $S('%export');
    {
        ($module)['wrap-export'] = function B3359(identifier__3360, value__3361, exp__3362, env__3363) {
            var B3364 = false;
            if (($T)(B3323['not'](B3325['locally-bound?'](exp__3362, env__3363))))
                B3364 = B3323['member?'](B3323['symbol-name'](identifier__3360), B3323['get'](env__3363, 'module', 'exports'));
            else
                B3364 = false;
            if (($T)(B3364))
                return([
                    B3336,
                    exp__3362,
                    [
                        ($module)['make-module-reference'](B3358),
                        B3323['symbol-name'](identifier__3360),
                        value__3361
                    ]
                ]);
            else
                return(exp__3362);
        };
        B3323['%annotate-function'](($module)['wrap-export'], 'wrap-export', false);
    }
}
($module)['*transformers*'] = B3323['make-plain-object']();
{
    {
        ($module)['transform-statements!'] = function B3370(exp__3371, env__3372) {
            var B3373 = exp__3371;
            if (($T)(B3323['instance?'](B3373, B3323['<array>']))) {
                var name__3374 = B3323['symbol-name'](B3323['first'](exp__3371));
                {
                    var B3375 = B3323['get'](($module)['*transformers*'], name__3374);
                    if (($T)(B3375)) {
                        var transformer__3376 = B3375;
                        return(B3323['apply'](transformer__3376, env__3372, B3323['rest'](exp__3371)));
                    } else
                        return(B3323['map'](B3323['rcurry'](($module)['transform-statements!'], env__3372), exp__3371));
                }
            } else if (($T)(B3323['instance?'](B3373, B3323['<symbol>']))) {
                var B3377 = B3324['special-symbol?'](exp__3371);
                {
                    var B3379 = false;
                    if (($T)(B3377))
                        B3379 = B3377;
                    else {
                        var B3378 = B3325['locally-bound?'](exp__3371, env__3372);
                        if (($T)(B3378))
                            B3379 = B3378;
                        else
                            B3379 = B3323['get'](exp__3371, 'generated?');
                    }
                    if (($T)(B3379))
                        return(exp__3371);
                    else
                        return(($module)['make-module-reference'](exp__3371));
                }
            } else
                return(exp__3371);
        };
        ($module)['%export']('transform-statements!', ($module)['transform-statements!']);
    }
    B3323['%annotate-function'](($module)['transform-statements!'], 'transform-statements!', false);
}
{
    var B3380 = $S('%quote', 'ralph/core');
    B3323['get-setter'](($module)['*transformers*'], '%quote', B3326['make-quote-transformer'](B3380));
}
{
    var B3382 = $S('%var', 'ralph/core');
    {
        var B3383 = $S('%set', 'ralph/core');
        B3323['get-setter'](($module)['*transformers*'], '%bind', B3326['make-bind-transformer'](($module)['transform-statements!'], function B3384(env__3385, identifier__3386, valueT__3387, bodyT__3388) {
            if (($T)(($module)['generates-statement?'](valueT__3387)))
                return([
                    B3336,
                    [
                        B3382,
                        identifier__3386,
                        false
                    ],
                    ($module)['wrap-value!'](valueT__3387, [
                        B3383,
                        identifier__3386
                    ]),
                    bodyT__3388
                ]);
            else
                return([
                    B3336,
                    [
                        B3382,
                        identifier__3386,
                        valueT__3387
                    ],
                    bodyT__3388
                ]);
        }));
    }
}
{
    var B3390 = $S('%method', 'ralph/core');
    B3323['get-setter'](($module)['*transformers*'], '%method', B3326['make-method-transformer'](($module)['transform-statements!'], function B3391(env__3392, name__3393, parameters__3394, formT__3395) {
        return([
            B3390,
            name__3393,
            parameters__3394,
            ($module)['wrap-return'](formT__3395)
        ]);
    }));
}
B3323['get-setter'](($module)['*transformers*'], '%set', B3326['make-set-transformer'](($module)['transform-statements!'], function B3397(env__3398, placeT__3399, valueT__3400) {
    return(($module)['wrap-export'](placeT__3399, placeT__3399, [
        B3383,
        placeT__3399,
        valueT__3400
    ], env__3398));
}));
{
    var B3408 = [
            '%var',
            '%define'
        ];
    {
        var B3409 = false;
        {
            var B3410 = false;
            {
                var B3411 = [B3408];
                {
                    while (true) {
                        var B3421 = B3323['not'];
                        {
                            var B3412 = B3409;
                            {
                                var B3422 = false;
                                if (($T)(B3412))
                                    B3422 = B3412;
                                else
                                    B3422 = B3323['any?'](B3323['empty?'], B3411);
                                {
                                    var B3423 = B3421(B3422);
                                    if (($T)(B3423)) {
                                        var name__3413 = B3323['first'](B3408);
                                        {
                                            (function B3414(name__3415) {
                                                return(B3323['get-setter'](($module)['*transformers*'], name__3415, B3326['make-var-transformer'](($module)['transform-statements!'], function B3416(env__3417, identifier__3418, valueT__3419) {
                                                    if (($T)(B3323['get'](identifier__3418, 'generated?')))
                                                        return(($module)['wrap-export'](identifier__3418, identifier__3418, [
                                                            B3382,
                                                            identifier__3418,
                                                            valueT__3419
                                                        ], env__3417));
                                                    else {
                                                        var place__3420 = ($module)['make-module-reference'](identifier__3418);
                                                        return(($module)['wrap-export'](identifier__3418, place__3420, [
                                                            B3383,
                                                            place__3420,
                                                            valueT__3419
                                                        ], env__3417));
                                                    }
                                                })));
                                            }(name__3413));
                                            {
                                                B3408 = B3323['rest'](B3408);
                                                B3411 = [B3408];
                                            }
                                        }
                                    } else
                                        break;
                                }
                            }
                        }
                    }
                    B3410;
                }
            }
        }
    }
}
{
    var B3425 = $K('count');
    {
        var B3426 = $K('k');
        B3323['get-setter'](($module)['*transformers*'], '%if', B3326['make-rest-transformer'](($module)['transform-statements!'], B3425, 3, B3426, function B3427(env__3428, predicateT__3429, consequentT__3430, alternateT__3431) {
            return([
                B3347,
                ($module)['wrap-true'](predicateT__3429),
                consequentT__3430,
                alternateT__3431
            ]);
        }));
    }
}
B3323['get-setter'](($module)['*transformers*'], '%while', B3326['make-rest-transformer'](($module)['transform-statements!'], B3425, 2, B3426, function B3433(env__3434, predicateT__3435, formT__3436) {
    return([
        B3348,
        ($module)['wrap-true'](predicateT__3435),
        formT__3436
    ]);
}));
B3323['get-setter'](($module)['*transformers*'], '%try', B3326['make-try-transformer'](($module)['transform-statements!']));
B3323['get-setter'](($module)['*transformers*'], '%object', B3326['make-object-transformer'](($module)['transform-statements!']));
{
    var B3443 = $S('%infix', 'ralph/core');
    {
        var B3444 = [
                B3344,
                B3443
            ];
        {
            var B3445 = false;
            {
                var B3446 = false;
                {
                    var B3447 = [B3444];
                    {
                        while (true) {
                            var B3452 = B3323['not'];
                            {
                                var B3448 = B3445;
                                {
                                    var B3453 = false;
                                    if (($T)(B3448))
                                        B3453 = B3448;
                                    else
                                        B3453 = B3323['any?'](B3323['empty?'], B3447);
                                    {
                                        var B3454 = B3452(B3453);
                                        if (($T)(B3454)) {
                                            var symbol__3449 = B3323['first'](B3444);
                                            {
                                                (function B3450(symbol__3451) {
                                                    return(B3323['get-setter'](($module)['*transformers*'], B3323['symbol-name'](symbol__3451), B3326['make-operator-transformer'](symbol__3451, ($module)['transform-statements!'])));
                                                }(symbol__3449));
                                                {
                                                    B3444 = B3323['rest'](B3444);
                                                    B3447 = [B3444];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        B3446;
                    }
                }
            }
        }
    }
}
{
    var B3461 = $S('%array', 'ralph/core');
    {
        var B3462 = $K('symbol');
        {
            var B3463 = [
                    B3336,
                    B3330,
                    B3461,
                    B3329
                ];
            {
                var B3464 = false;
                {
                    var B3465 = false;
                    {
                        var B3466 = [B3463];
                        {
                            while (true) {
                                var B3471 = B3323['not'];
                                {
                                    var B3467 = B3464;
                                    {
                                        var B3472 = false;
                                        if (($T)(B3467))
                                            B3472 = B3467;
                                        else
                                            B3472 = B3323['any?'](B3323['empty?'], B3466);
                                        {
                                            var B3473 = B3471(B3472);
                                            if (($T)(B3473)) {
                                                var symbol__3468 = B3323['first'](B3463);
                                                {
                                                    (function B3469(symbol__3470) {
                                                        return(B3323['get-setter'](($module)['*transformers*'], B3323['symbol-name'](symbol__3470), B3326['make-rest-transformer'](($module)['transform-statements!'], B3462, symbol__3470)));
                                                    }(symbol__3468));
                                                    {
                                                        B3463 = B3323['rest'](B3463);
                                                        B3466 = [B3463];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B3465;
                        }
                    }
                }
            }
        }
    }
}
