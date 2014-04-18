require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3195(name__3196, value__3197) {
            var B3199 = (exports);
            return(B3199[name__3196] = value__3197);
        };
        {
            ($module)['%eval'] = function B3198() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3200 = require('ralph/core');
var B3201 = require('ralph/compiler/utilities');
{
    ($module)['atomic?'] = function B3203(expression__3204) {
        return(B3200['any?'](B3200['curry'](B3200['instance?'], expression__3204), [
            B3200['<number>'],
            B3200['<boolean>'],
            B3200['<string>'],
            B3200['<symbol>'],
            B3200['<keyword>']
        ]));
    };
    B3200['%annotate-function'](($module)['atomic?'], 'atomic?', false);
}
{
    ($module)['generates-statements?'] = function B3211(exp__3212) {
        var B3218 = false;
        if (($T)(B3200['instance?'](exp__3212, B3200['<array>'])))
            B3218 = B3200['not'](B3200['empty?'](exp__3212));
        else
            B3218 = false;
        if (($T)(B3218)) {
            var B3213 = B3200['symbol-name'](B3200['first'](exp__3212));
            {
                var B3214 = B3200['=='](B3213, '%begin');
                {
                    var B3219 = false;
                    if (($T)(B3214))
                        B3219 = B3214;
                    else {
                        var B3215 = B3200['=='](B3213, '%if');
                        if (($T)(B3215))
                            B3219 = B3215;
                        else {
                            var B3216 = B3200['=='](B3213, '%while');
                            if (($T)(B3216))
                                B3219 = B3216;
                            else {
                                var B3217 = B3200['=='](B3213, '%bind');
                                if (($T)(B3217))
                                    B3219 = B3217;
                                else
                                    B3219 = B3200['=='](B3213, '%try');
                            }
                        }
                    }
                    if (($T)(B3219))
                        return(true);
                    else if (($T)(B3200['=='](B3213, '%set')))
                        return(($module)['generates-statements?'](B3200['last'](exp__3212)));
                    else if (($T)(B3200['=='](B3213, '%method')))
                        return(false);
                    else
                        return(B3200['any?'](($module)['generates-statements?'], exp__3212));
                }
            }
        } else
            return(false);
    };
    B3200['%annotate-function'](($module)['generates-statements?'], 'generates-statements?', false);
}
{
    {
        ($module)['normalize-term'] = function B3221(expression__3222, env__3223) {
            return(($module)['normalize'](expression__3222, env__3223, B3200['identity']));
        };
        ($module)['%export']('normalize-term', ($module)['normalize-term']);
    }
    B3200['%annotate-function'](($module)['normalize-term'], 'normalize-term', false);
}
{
    var B3235 = $S('%bind', 'ralph/core');
    {
        var B3236 = $S('%method', 'ralph/core');
        {
            var B3237 = $S('%set', 'ralph/core');
            {
                var B3238 = $S('%get-property', 'ralph/core');
                {
                    var B3239 = $S('%if', 'ralph/core');
                    {
                        var B3240 = $S('%begin', 'ralph/core');
                        {
                            var B3241 = $S('%while', 'ralph/core');
                            {
                                var B3242 = $S('%native', 'ralph/core');
                                {
                                    var B3243 = $S('%try', 'ralph/core');
                                    {
                                        ($module)['normalize'] = function B3244(exp__3245, env__3246, k__3247) {
                                            var B3293 = false;
                                            if (($T)(B3200['instance?'](exp__3245, B3200['<array>'])))
                                                B3293 = B3200['not'](B3200['empty?'](exp__3245));
                                            else
                                                B3293 = false;
                                            if (($T)(B3293)) {
                                                var B3248 = B3200['symbol-name'](B3200['first'](exp__3245));
                                                if (($T)(B3200['=='](B3248, '%quote')))
                                                    return(k__3247(exp__3245));
                                                else if (($T)(B3200['=='](B3248, '%bind'))) {
                                                    var ____3249 = exp__3245[0];
                                                    {
                                                        var B3250 = exp__3245[1];
                                                        {
                                                            var identifier__3251 = B3250[0];
                                                            {
                                                                var value__3252 = B3250[1];
                                                                {
                                                                    var form__3253 = exp__3245[2];
                                                                    return(($module)['normalize'](value__3252, env__3246, function B3254(valueT__3255) {
                                                                        return([
                                                                            B3235,
                                                                            [
                                                                                identifier__3251,
                                                                                valueT__3255
                                                                            ],
                                                                            ($module)['normalize'](form__3253, env__3246, k__3247)
                                                                        ]);
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3200['=='](B3248, '%method'))) {
                                                    var ____3256 = exp__3245[0];
                                                    {
                                                        var name__3257 = exp__3245[1];
                                                        {
                                                            var parameters__3258 = exp__3245[2];
                                                            {
                                                                var form__3259 = exp__3245[3];
                                                                return(k__3247([
                                                                    B3236,
                                                                    name__3257,
                                                                    parameters__3258,
                                                                    ($module)['normalize-term'](form__3259, env__3246)
                                                                ]));
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3200['=='](B3248, '%set'))) {
                                                    var ____3260 = exp__3245[0];
                                                    {
                                                        var place__3261 = exp__3245[1];
                                                        {
                                                            var value__3262 = exp__3245[2];
                                                            if (($T)(B3201['op?']('%get-property', place__3261)))
                                                                return(($module)['normalize**'](B3200['rest'](place__3261), env__3246, function B3263(argumentsT__3264) {
                                                                    return(($module)['normalize-value'](value__3262, env__3246, function B3265(valueT__3266) {
                                                                        return(k__3247([
                                                                            B3237,
                                                                            B3200['%concat']([B3238], argumentsT__3264),
                                                                            valueT__3266
                                                                        ]));
                                                                    }));
                                                                }));
                                                            else
                                                                return(($module)['normalize-value'](value__3262, env__3246, function B3267(valueT__3268) {
                                                                    return(k__3247([
                                                                        B3237,
                                                                        place__3261,
                                                                        valueT__3268
                                                                    ]));
                                                                }));
                                                        }
                                                    }
                                                } else {
                                                    var B3269 = B3200['=='](B3248, '%define');
                                                    {
                                                        var B3294 = false;
                                                        if (($T)(B3269))
                                                            B3294 = B3269;
                                                        else
                                                            B3294 = B3200['=='](B3248, '%var');
                                                        if (($T)(B3294)) {
                                                            var op__3270 = exp__3245[0];
                                                            {
                                                                var identifier__3271 = exp__3245[1];
                                                                {
                                                                    var value__3272 = exp__3245[2];
                                                                    return(($module)['normalize-value'](value__3272, env__3246, function B3273(valueT__3274) {
                                                                        return(k__3247([
                                                                            op__3270,
                                                                            identifier__3271,
                                                                            valueT__3274
                                                                        ]));
                                                                    }));
                                                                }
                                                            }
                                                        } else if (($T)(B3200['=='](B3248, '%if'))) {
                                                            var ____3275 = exp__3245[0];
                                                            {
                                                                var test__3276 = exp__3245[1];
                                                                {
                                                                    var consequent__3277 = exp__3245[2];
                                                                    {
                                                                        var alternate__3278 = exp__3245[3];
                                                                        return(($module)['normalize-value'](test__3276, env__3246, function B3279(testT__3280) {
                                                                            return(k__3247([
                                                                                B3239,
                                                                                testT__3280,
                                                                                ($module)['normalize-term'](consequent__3277, env__3246),
                                                                                ($module)['normalize-term'](alternate__3278, env__3246)
                                                                            ]));
                                                                        }));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3200['=='](B3248, '%begin'))) {
                                                            var ____3281 = exp__3245[0];
                                                            {
                                                                var form__3282 = exp__3245[1];
                                                                {
                                                                    var forms__3283 = $SL.call(exp__3245, 2);
                                                                    if (($T)(B3200['empty?'](forms__3283)))
                                                                        return(($module)['normalize'](form__3282, env__3246, k__3247));
                                                                    else
                                                                        return(($module)['normalize'](form__3282, env__3246, function B3284(formT__3285) {
                                                                            return([
                                                                                B3240,
                                                                                formT__3285,
                                                                                ($module)['normalize'](B3200['%concat']([B3240], forms__3283), env__3246, k__3247)
                                                                            ]);
                                                                        }));
                                                                }
                                                            }
                                                        } else if (($T)(B3200['=='](B3248, '%while'))) {
                                                            var ____3286 = exp__3245[0];
                                                            {
                                                                var test__3287 = exp__3245[1];
                                                                {
                                                                    var form__3288 = exp__3245[2];
                                                                    {
                                                                        var B3295 = false;
                                                                        if (($T)(($module)['generates-statements?'](test__3287)))
                                                                            B3295 = [
                                                                                B3241,
                                                                                true,
                                                                                ($module)['normalize-term']([
                                                                                    B3239,
                                                                                    test__3287,
                                                                                    ($module)['normalize-term'](form__3288),
                                                                                    [
                                                                                        B3242,
                                                                                        'break'
                                                                                    ]
                                                                                ], env__3246)
                                                                            ];
                                                                        else
                                                                            B3295 = [
                                                                                B3241,
                                                                                ($module)['normalize-term'](test__3287, env__3246),
                                                                                ($module)['normalize-term'](form__3288, env__3246)
                                                                            ];
                                                                        return(k__3247(B3295));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3200['=='](B3248, '%try'))) {
                                                            var ____3289 = exp__3245[0];
                                                            {
                                                                var protected_form__3290 = exp__3245[1];
                                                                {
                                                                    var identifier__3291 = exp__3245[2];
                                                                    {
                                                                        var handling_form__3292 = exp__3245[3];
                                                                        return(k__3247([
                                                                            B3243,
                                                                            ($module)['normalize-term'](protected_form__3290, env__3246),
                                                                            identifier__3291,
                                                                            ($module)['normalize-term'](handling_form__3292, env__3246)
                                                                        ]));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(($module)['generates-statements?'](exp__3245)))
                                                            return(($module)['normalize-all'](exp__3245, env__3246, k__3247));
                                                        else
                                                            return(k__3247(B3200['map'](B3200['rcurry'](($module)['normalize-term'], env__3246), exp__3245)));
                                                    }
                                                }
                                            } else
                                                return(k__3247(exp__3245));
                                        };
                                        B3200['%annotate-function'](($module)['normalize'], 'normalize', false);
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
    ($module)['normalize-value'] = function B3297(exp__3298, env__3299, k__3300) {
        if (($T)(($module)['generates-statements?'](exp__3298)))
            return(($module)['normalize*'](exp__3298, env__3299, k__3300));
        else {
            var B3301 = false;
            if (($T)(B3200['instance?'](exp__3298, B3200['<array>'])))
                B3301 = B3200['map'](B3200['rcurry'](($module)['normalize-term'], env__3299), exp__3298);
            else
                B3301 = exp__3298;
            return(k__3300(B3301));
        }
    };
    B3200['%annotate-function'](($module)['normalize-value'], 'normalize-value', false);
}
{
    ($module)['normalize*'] = function B3304(exp__3305, env__3306, k__3307) {
        return(($module)['normalize'](exp__3305, env__3306, function B3308(expT__3309) {
            if (($T)(($module)['atomic?'](expT__3309)))
                return(k__3307(expT__3309));
            else {
                var t__3310 = B3200['generate-symbol']();
                return([
                    B3235,
                    [
                        t__3310,
                        expT__3309
                    ],
                    k__3307(t__3310)
                ]);
            }
        }));
    };
    B3200['%annotate-function'](($module)['normalize*'], 'normalize*', false);
}
{
    ($module)['normalize**'] = function B3312(expT__3313, env__3314, k__3315) {
        if (($T)(B3200['empty?'](expT__3313)))
            return(k__3315([]));
        else
            return(($module)['normalize-all'](expT__3313, env__3314, k__3315));
    };
    B3200['%annotate-function'](($module)['normalize**'], 'normalize**', false);
}
{
    ($module)['normalize-all'] = function B3319(exp__3320, env__3321, k__3322) {
        return(($module)['normalize*'](B3200['first'](exp__3320), env__3321, function B3323(t__3324) {
            return(($module)['normalize**'](B3200['rest'](exp__3320), env__3321, function B3325(tT__3326) {
                return(k__3322(B3200['cons'](t__3324, tT__3326)));
            }));
        }));
    };
    B3200['%annotate-function'](($module)['normalize-all'], 'normalize-all', false);
}
