{
    var $module = Object.create(null);
    ($module)['%export'] = function B3277(name__3278, value__3279) {
        var B3280 = (exports);
        return(B3280[name__3278] = value__3279);
    };
}
var B3281 = require('ralph/core');
{
    var B3282 = require('ralph/compiler/utilities');
    {
        var B3283 = require('ralph/compiler/environment');
        {
            var B3284 = require('ralph/compiler/transformer');
            var B3285 = require('ralph/format');
        }
    }
}
{
    var B3287 = $S('%get-property', 'ralph/core');
    {
        var B3288 = $S('%native', 'ralph/core');
        {
            ($module)['make-module-reference'] = function B3289(identifier__3290) {
                return([
                    B3287,
                    [
                        B3288,
                        '$module'
                    ],
                    B3281['symbol-name'](identifier__3290)
                ]);
            };
            B3281['%annotate-function'](($module)['make-module-reference'], 'make-module-reference', false);
        }
    }
}
{
    var B3294 = $S('%begin', 'ralph/core');
    {
        ($module)['wrap-value!'] = function B3295(exp__3296, wrapper__3297) {
            if (($T)(B3281['instance?'](exp__3296, B3281['<array>']))) {
                var B3298 = B3281['symbol-name'](B3281['first'](exp__3296));
                if (($T)(B3281['=='](B3298, '%quote')))
                    return(exp__3296);
                else {
                    var B3299 = B3281['=='](B3298, '%begin');
                    {
                        var B3300 = false;
                        if (($T)(B3299))
                            B3300 = B3299;
                        else
                            B3300 = B3281['=='](B3298, '%bind');
                        if (($T)(B3300)) {
                            B3281['last-setter'](exp__3296, ($module)['wrap-value!'](B3281['last'](exp__3296), wrapper__3297));
                            return(exp__3296);
                        } else if (($T)(B3281['=='](B3298, '%if'))) {
                            B3281['third-setter'](exp__3296, ($module)['wrap-value!'](B3281['third'](exp__3296), wrapper__3297));
                            {
                                B3281['last-setter'](exp__3296, ($module)['wrap-value!'](B3281['last'](exp__3296), wrapper__3297));
                                return(exp__3296);
                            }
                        } else if (($T)(B3281['=='](B3298, '%while')))
                            return([
                                B3294,
                                exp__3296,
                                ($module)['wrap-value!'](false, wrapper__3297)
                            ]);
                        else if (($T)(B3281['=='](B3298, '%try'))) {
                            B3281['second-setter'](exp__3296, ($module)['wrap-value!'](B3281['second'](exp__3296), wrapper__3297));
                            {
                                B3281['last-setter'](exp__3296, ($module)['wrap-value!'](B3281['last'](exp__3296), wrapper__3297));
                                return(exp__3296);
                            }
                        } else
                            return(B3281['concatenate'](wrapper__3297, [exp__3296]));
                    }
                }
            } else
                return(B3281['concatenate'](wrapper__3297, [exp__3296]));
        };
        B3281['%annotate-function'](($module)['wrap-value!'], 'wrap-value!', false);
    }
}
{
    var B3302 = $S('%native-call', 'ralph/core');
    {
        ($module)['wrap-return'] = function B3303(exp__3304) {
            return(($module)['wrap-value!'](exp__3304, [
                B3302,
                'return'
            ]));
        };
        B3281['%annotate-function'](($module)['wrap-return'], 'wrap-return', false);
    }
}
{
    var B3305 = $S('%if', 'ralph/core');
    {
        var B3306 = $S('%while', 'ralph/core');
        {
            var B3307 = $S('%bind', 'ralph/core');
            {
                var B3308 = $S('%try', 'ralph/core');
                ($module)['$statement-symbols'] = [
                    B3305,
                    B3306,
                    B3294,
                    B3307,
                    B3308
                ];
            }
        }
    }
}
{
    ($module)['generates-statement?'] = function B3310(exp__3311) {
        if (($T)(B3281['instance?'](exp__3311, B3281['<array>'])))
            if (($T)(B3281['not'](B3281['empty?'](exp__3311))))
                return(B3281['member?'](B3281['first'](exp__3311), ($module)['$statement-symbols']));
            else
                return(false);
        else
            return(false);
    };
    B3281['%annotate-function'](($module)['generates-statement?'], 'generates-statement?', false);
}
{
    ($module)['wrap-true'] = function B3313(exp__3314) {
        if (($T)(B3281['instance?'](exp__3314, B3281['<boolean>'])))
            return(B3281['true?'](exp__3314));
        else
            return([
                [
                    B3288,
                    '$T'
                ],
                exp__3314
            ]);
    };
    B3281['%annotate-function'](($module)['wrap-true'], 'wrap-true', false);
}
{
    var B3316 = $S('%export');
    {
        ($module)['wrap-export'] = function B3317(identifier__3318, value__3319, exp__3320, env__3321) {
            var B3322 = false;
            if (($T)(B3281['not'](B3283['locally-bound?'](exp__3320, env__3321))))
                B3322 = B3281['member?'](B3281['symbol-name'](identifier__3318), B3281['get'](env__3321, 'module', 'exports'));
            else
                B3322 = false;
            if (($T)(B3322))
                return([
                    B3294,
                    exp__3320,
                    [
                        ($module)['make-module-reference'](B3316),
                        B3281['symbol-name'](identifier__3318),
                        value__3319
                    ]
                ]);
            else
                return(exp__3320);
        };
        B3281['%annotate-function'](($module)['wrap-export'], 'wrap-export', false);
    }
}
($module)['*transformers*'] = B3281['make-plain-object']();
{
    {
        ($module)['transform-statements!'] = function B3328(exp__3329, env__3330) {
            var B3331 = exp__3329;
            if (($T)(B3281['instance?'](B3331, B3281['<array>']))) {
                var name__3332 = B3281['symbol-name'](B3281['first'](exp__3329));
                {
                    var B3333 = B3281['get'](($module)['*transformers*'], name__3332);
                    if (($T)(B3333)) {
                        var transformer__3334 = B3333;
                        return(B3281['apply'](transformer__3334, env__3330, B3281['rest'](exp__3329)));
                    } else
                        return(B3281['map'](B3281['rcurry'](($module)['transform-statements!'], env__3330), exp__3329));
                }
            } else if (($T)(B3281['instance?'](B3331, B3281['<symbol>']))) {
                var B3335 = B3282['special-symbol?'](exp__3329);
                {
                    var B3337 = false;
                    if (($T)(B3335))
                        B3337 = B3335;
                    else {
                        var B3336 = B3283['locally-bound?'](exp__3329, env__3330);
                        if (($T)(B3336))
                            B3337 = B3336;
                        else
                            B3337 = B3281['get'](exp__3329, 'generated?');
                    }
                    if (($T)(B3337))
                        return(exp__3329);
                    else
                        return(($module)['make-module-reference'](exp__3329));
                }
            } else
                return(exp__3329);
        };
        ($module)['%export']('transform-statements!', ($module)['transform-statements!']);
    }
    B3281['%annotate-function'](($module)['transform-statements!'], 'transform-statements!', false);
}
{
    var B3338 = $S('%quote', 'ralph/core');
    B3281['get-setter'](($module)['*transformers*'], '%quote', B3284['make-quote-transformer'](B3338));
}
{
    var B3340 = $S('%var', 'ralph/core');
    {
        var B3341 = $S('%set', 'ralph/core');
        B3281['get-setter'](($module)['*transformers*'], '%bind', B3284['make-bind-transformer'](($module)['transform-statements!'], function B3342(env__3343, identifier__3344, valueT__3345, bodyT__3346) {
            if (($T)(($module)['generates-statement?'](valueT__3345)))
                return([
                    B3294,
                    [
                        B3340,
                        identifier__3344,
                        false
                    ],
                    ($module)['wrap-value!'](valueT__3345, [
                        B3341,
                        identifier__3344
                    ]),
                    bodyT__3346
                ]);
            else
                return([
                    B3294,
                    [
                        B3340,
                        identifier__3344,
                        valueT__3345
                    ],
                    bodyT__3346
                ]);
        }));
    }
}
{
    var B3348 = $S('%method', 'ralph/core');
    B3281['get-setter'](($module)['*transformers*'], '%method', B3284['make-method-transformer'](($module)['transform-statements!'], function B3349(env__3350, name__3351, parameters__3352, formT__3353) {
        return([
            B3348,
            name__3351,
            parameters__3352,
            ($module)['wrap-return'](formT__3353)
        ]);
    }));
}
B3281['get-setter'](($module)['*transformers*'], '%set', B3284['make-set-transformer'](($module)['transform-statements!'], function B3355(env__3356, placeT__3357, valueT__3358) {
    return(($module)['wrap-export'](placeT__3357, placeT__3357, [
        B3341,
        placeT__3357,
        valueT__3358
    ], env__3356));
}));
{
    var B3366 = [
            '%var',
            '%define'
        ];
    {
        var B3367 = false;
        {
            var B3368 = false;
            {
                var B3369 = [B3366];
                {
                    while (true) {
                        var B3379 = B3281['not'];
                        {
                            var B3370 = B3367;
                            {
                                var B3380 = false;
                                if (($T)(B3370))
                                    B3380 = B3370;
                                else
                                    B3380 = B3281['any?'](B3281['empty?'], B3369);
                                {
                                    var B3381 = B3379(B3380);
                                    if (($T)(B3381)) {
                                        var name__3371 = B3281['first'](B3366);
                                        {
                                            (function B3372(name__3373) {
                                                return(B3281['get-setter'](($module)['*transformers*'], name__3373, B3284['make-var-transformer'](($module)['transform-statements!'], function B3374(env__3375, identifier__3376, valueT__3377) {
                                                    if (($T)(B3281['get'](identifier__3376, 'generated?')))
                                                        return(($module)['wrap-export'](identifier__3376, identifier__3376, [
                                                            B3340,
                                                            identifier__3376,
                                                            valueT__3377
                                                        ], env__3375));
                                                    else {
                                                        var place__3378 = ($module)['make-module-reference'](identifier__3376);
                                                        return(($module)['wrap-export'](identifier__3376, place__3378, [
                                                            B3341,
                                                            place__3378,
                                                            valueT__3377
                                                        ], env__3375));
                                                    }
                                                })));
                                            }(name__3371));
                                            {
                                                B3366 = B3281['rest'](B3366);
                                                B3369 = [B3366];
                                            }
                                        }
                                    } else
                                        break;
                                }
                            }
                        }
                    }
                    B3368;
                }
            }
        }
    }
}
{
    var B3383 = $K('count');
    {
        var B3384 = $K('k');
        B3281['get-setter'](($module)['*transformers*'], '%if', B3284['make-rest-transformer'](($module)['transform-statements!'], B3383, 3, B3384, function B3385(env__3386, predicateT__3387, consequentT__3388, alternateT__3389) {
            return([
                B3305,
                ($module)['wrap-true'](predicateT__3387),
                consequentT__3388,
                alternateT__3389
            ]);
        }));
    }
}
B3281['get-setter'](($module)['*transformers*'], '%while', B3284['make-rest-transformer'](($module)['transform-statements!'], B3383, 2, B3384, function B3391(env__3392, predicateT__3393, formT__3394) {
    return([
        B3306,
        ($module)['wrap-true'](predicateT__3393),
        formT__3394
    ]);
}));
B3281['get-setter'](($module)['*transformers*'], '%try', B3284['make-try-transformer'](($module)['transform-statements!']));
B3281['get-setter'](($module)['*transformers*'], '%object', B3284['make-object-transformer'](($module)['transform-statements!']));
{
    var B3401 = $S('%infix', 'ralph/core');
    {
        var B3402 = [
                B3302,
                B3401
            ];
        {
            var B3403 = false;
            {
                var B3404 = false;
                {
                    var B3405 = [B3402];
                    {
                        while (true) {
                            var B3410 = B3281['not'];
                            {
                                var B3406 = B3403;
                                {
                                    var B3411 = false;
                                    if (($T)(B3406))
                                        B3411 = B3406;
                                    else
                                        B3411 = B3281['any?'](B3281['empty?'], B3405);
                                    {
                                        var B3412 = B3410(B3411);
                                        if (($T)(B3412)) {
                                            var symbol__3407 = B3281['first'](B3402);
                                            {
                                                (function B3408(symbol__3409) {
                                                    return(B3281['get-setter'](($module)['*transformers*'], B3281['symbol-name'](symbol__3409), B3284['make-operator-transformer'](symbol__3409, ($module)['transform-statements!'])));
                                                }(symbol__3407));
                                                {
                                                    B3402 = B3281['rest'](B3402);
                                                    B3405 = [B3402];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        B3404;
                    }
                }
            }
        }
    }
}
{
    var B3419 = $S('%array', 'ralph/core');
    {
        var B3420 = $K('symbol');
        {
            var B3421 = [
                    B3294,
                    B3288,
                    B3419,
                    B3287
                ];
            {
                var B3422 = false;
                {
                    var B3423 = false;
                    {
                        var B3424 = [B3421];
                        {
                            while (true) {
                                var B3429 = B3281['not'];
                                {
                                    var B3425 = B3422;
                                    {
                                        var B3430 = false;
                                        if (($T)(B3425))
                                            B3430 = B3425;
                                        else
                                            B3430 = B3281['any?'](B3281['empty?'], B3424);
                                        {
                                            var B3431 = B3429(B3430);
                                            if (($T)(B3431)) {
                                                var symbol__3426 = B3281['first'](B3421);
                                                {
                                                    (function B3427(symbol__3428) {
                                                        return(B3281['get-setter'](($module)['*transformers*'], B3281['symbol-name'](symbol__3428), B3284['make-rest-transformer'](($module)['transform-statements!'], B3420, symbol__3428)));
                                                    }(symbol__3426));
                                                    {
                                                        B3421 = B3281['rest'](B3421);
                                                        B3424 = [B3421];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B3423;
                        }
                    }
                }
            }
        }
    }
}
{
    ($module)['%eval'] = function B3433() {
        return(eval((arguments[0])));
    };
    {
        B3281['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
