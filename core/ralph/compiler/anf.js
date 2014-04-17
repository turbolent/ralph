require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3193(name__3194, value__3195) {
            var B3197 = (exports);
            return(B3197[name__3194] = value__3195);
        };
        {
            ($module)['%eval'] = function B3196() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3198 = require('ralph/core');
var B3199 = require('ralph/compiler/utilities');
{
    ($module)['atomic?'] = function B3201(expression__3202) {
        return(B3198['any?'](B3198['curry'](B3198['instance?'], expression__3202), [
            B3198['<number>'],
            B3198['<boolean>'],
            B3198['<string>'],
            B3198['<symbol>'],
            B3198['<keyword>']
        ]));
    };
    B3198['%annotate-function'](($module)['atomic?'], 'atomic?', false);
}
{
    ($module)['generates-statements?'] = function B3209(exp__3210) {
        var B3216 = false;
        if (($T)(B3198['instance?'](exp__3210, B3198['<array>'])))
            B3216 = B3198['not'](B3198['empty?'](exp__3210));
        else
            B3216 = false;
        if (($T)(B3216)) {
            var B3211 = B3198['symbol-name'](B3198['first'](exp__3210));
            {
                var B3212 = B3198['=='](B3211, '%begin');
                {
                    var B3217 = false;
                    if (($T)(B3212))
                        B3217 = B3212;
                    else {
                        var B3213 = B3198['=='](B3211, '%if');
                        if (($T)(B3213))
                            B3217 = B3213;
                        else {
                            var B3214 = B3198['=='](B3211, '%while');
                            if (($T)(B3214))
                                B3217 = B3214;
                            else {
                                var B3215 = B3198['=='](B3211, '%bind');
                                if (($T)(B3215))
                                    B3217 = B3215;
                                else
                                    B3217 = B3198['=='](B3211, '%try');
                            }
                        }
                    }
                    if (($T)(B3217))
                        return(true);
                    else if (($T)(B3198['=='](B3211, '%set')))
                        return(($module)['generates-statements?'](B3198['last'](exp__3210)));
                    else if (($T)(B3198['=='](B3211, '%method')))
                        return(false);
                    else
                        return(B3198['any?'](($module)['generates-statements?'], exp__3210));
                }
            }
        } else
            return(false);
    };
    B3198['%annotate-function'](($module)['generates-statements?'], 'generates-statements?', false);
}
{
    {
        ($module)['normalize-term'] = function B3219(expression__3220, env__3221) {
            return(($module)['normalize'](expression__3220, env__3221, B3198['identity']));
        };
        ($module)['%export']('normalize-term', ($module)['normalize-term']);
    }
    B3198['%annotate-function'](($module)['normalize-term'], 'normalize-term', false);
}
{
    var B3233 = $S('%bind', 'ralph/core');
    {
        var B3234 = $S('%method', 'ralph/core');
        {
            var B3235 = $S('%set', 'ralph/core');
            {
                var B3236 = $S('%get-property', 'ralph/core');
                {
                    var B3237 = $S('%if', 'ralph/core');
                    {
                        var B3238 = $S('%begin', 'ralph/core');
                        {
                            var B3239 = $S('%while', 'ralph/core');
                            {
                                var B3240 = $S('%native', 'ralph/core');
                                {
                                    var B3241 = $S('%try', 'ralph/core');
                                    {
                                        ($module)['normalize'] = function B3242(exp__3243, env__3244, k__3245) {
                                            var B3291 = false;
                                            if (($T)(B3198['instance?'](exp__3243, B3198['<array>'])))
                                                B3291 = B3198['not'](B3198['empty?'](exp__3243));
                                            else
                                                B3291 = false;
                                            if (($T)(B3291)) {
                                                var B3246 = B3198['symbol-name'](B3198['first'](exp__3243));
                                                if (($T)(B3198['=='](B3246, '%quote')))
                                                    return(k__3245(exp__3243));
                                                else if (($T)(B3198['=='](B3246, '%bind'))) {
                                                    var ____3247 = exp__3243[0];
                                                    {
                                                        var B3248 = exp__3243[1];
                                                        {
                                                            var identifier__3249 = B3248[0];
                                                            {
                                                                var value__3250 = B3248[1];
                                                                {
                                                                    var form__3251 = exp__3243[2];
                                                                    return(($module)['normalize'](value__3250, env__3244, function B3252(valueT__3253) {
                                                                        return([
                                                                            B3233,
                                                                            [
                                                                                identifier__3249,
                                                                                valueT__3253
                                                                            ],
                                                                            ($module)['normalize'](form__3251, env__3244, k__3245)
                                                                        ]);
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3198['=='](B3246, '%method'))) {
                                                    var ____3254 = exp__3243[0];
                                                    {
                                                        var name__3255 = exp__3243[1];
                                                        {
                                                            var parameters__3256 = exp__3243[2];
                                                            {
                                                                var form__3257 = exp__3243[3];
                                                                return(k__3245([
                                                                    B3234,
                                                                    name__3255,
                                                                    parameters__3256,
                                                                    ($module)['normalize-term'](form__3257, env__3244)
                                                                ]));
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3198['=='](B3246, '%set'))) {
                                                    var ____3258 = exp__3243[0];
                                                    {
                                                        var place__3259 = exp__3243[1];
                                                        {
                                                            var value__3260 = exp__3243[2];
                                                            if (($T)(B3199['op?']('%get-property', place__3259)))
                                                                return(($module)['normalize**'](B3198['rest'](place__3259), env__3244, function B3261(argumentsT__3262) {
                                                                    return(($module)['normalize-value'](value__3260, env__3244, function B3263(valueT__3264) {
                                                                        return(k__3245([
                                                                            B3235,
                                                                            B3198['%concat']([B3236], argumentsT__3262),
                                                                            valueT__3264
                                                                        ]));
                                                                    }));
                                                                }));
                                                            else
                                                                return(($module)['normalize-value'](value__3260, env__3244, function B3265(valueT__3266) {
                                                                    return(k__3245([
                                                                        B3235,
                                                                        place__3259,
                                                                        valueT__3266
                                                                    ]));
                                                                }));
                                                        }
                                                    }
                                                } else {
                                                    var B3267 = B3198['=='](B3246, '%define');
                                                    {
                                                        var B3292 = false;
                                                        if (($T)(B3267))
                                                            B3292 = B3267;
                                                        else
                                                            B3292 = B3198['=='](B3246, '%var');
                                                        if (($T)(B3292)) {
                                                            var op__3268 = exp__3243[0];
                                                            {
                                                                var identifier__3269 = exp__3243[1];
                                                                {
                                                                    var value__3270 = exp__3243[2];
                                                                    return(($module)['normalize-value'](value__3270, env__3244, function B3271(valueT__3272) {
                                                                        return(k__3245([
                                                                            op__3268,
                                                                            identifier__3269,
                                                                            valueT__3272
                                                                        ]));
                                                                    }));
                                                                }
                                                            }
                                                        } else if (($T)(B3198['=='](B3246, '%if'))) {
                                                            var ____3273 = exp__3243[0];
                                                            {
                                                                var test__3274 = exp__3243[1];
                                                                {
                                                                    var consequent__3275 = exp__3243[2];
                                                                    {
                                                                        var alternate__3276 = exp__3243[3];
                                                                        return(($module)['normalize-value'](test__3274, env__3244, function B3277(testT__3278) {
                                                                            return(k__3245([
                                                                                B3237,
                                                                                testT__3278,
                                                                                ($module)['normalize-term'](consequent__3275, env__3244),
                                                                                ($module)['normalize-term'](alternate__3276, env__3244)
                                                                            ]));
                                                                        }));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3198['=='](B3246, '%begin'))) {
                                                            var ____3279 = exp__3243[0];
                                                            {
                                                                var form__3280 = exp__3243[1];
                                                                {
                                                                    var forms__3281 = $SL.call(exp__3243, 2);
                                                                    if (($T)(B3198['empty?'](forms__3281)))
                                                                        return(($module)['normalize'](form__3280, env__3244, k__3245));
                                                                    else
                                                                        return(($module)['normalize'](form__3280, env__3244, function B3282(formT__3283) {
                                                                            return([
                                                                                B3238,
                                                                                formT__3283,
                                                                                ($module)['normalize'](B3198['%concat']([B3238], forms__3281), env__3244, k__3245)
                                                                            ]);
                                                                        }));
                                                                }
                                                            }
                                                        } else if (($T)(B3198['=='](B3246, '%while'))) {
                                                            var ____3284 = exp__3243[0];
                                                            {
                                                                var test__3285 = exp__3243[1];
                                                                {
                                                                    var form__3286 = exp__3243[2];
                                                                    {
                                                                        var B3293 = false;
                                                                        if (($T)(($module)['generates-statements?'](test__3285)))
                                                                            B3293 = [
                                                                                B3239,
                                                                                true,
                                                                                ($module)['normalize-term']([
                                                                                    B3237,
                                                                                    test__3285,
                                                                                    ($module)['normalize-term'](form__3286),
                                                                                    [
                                                                                        B3240,
                                                                                        'break'
                                                                                    ]
                                                                                ], env__3244)
                                                                            ];
                                                                        else
                                                                            B3293 = [
                                                                                B3239,
                                                                                ($module)['normalize-term'](test__3285, env__3244),
                                                                                ($module)['normalize-term'](form__3286, env__3244)
                                                                            ];
                                                                        return(k__3245(B3293));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3198['=='](B3246, '%try'))) {
                                                            var ____3287 = exp__3243[0];
                                                            {
                                                                var protected_form__3288 = exp__3243[1];
                                                                {
                                                                    var identifier__3289 = exp__3243[2];
                                                                    {
                                                                        var handling_form__3290 = exp__3243[3];
                                                                        return(k__3245([
                                                                            B3241,
                                                                            ($module)['normalize-term'](protected_form__3288, env__3244),
                                                                            identifier__3289,
                                                                            ($module)['normalize-term'](handling_form__3290, env__3244)
                                                                        ]));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(($module)['generates-statements?'](exp__3243)))
                                                            return(($module)['normalize-all'](exp__3243, env__3244, k__3245));
                                                        else
                                                            return(k__3245(B3198['map'](B3198['rcurry'](($module)['normalize-term'], env__3244), exp__3243)));
                                                    }
                                                }
                                            } else
                                                return(k__3245(exp__3243));
                                        };
                                        B3198['%annotate-function'](($module)['normalize'], 'normalize', false);
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
    ($module)['normalize-value'] = function B3295(exp__3296, env__3297, k__3298) {
        if (($T)(($module)['generates-statements?'](exp__3296)))
            return(($module)['normalize*'](exp__3296, env__3297, k__3298));
        else {
            var B3299 = false;
            if (($T)(B3198['instance?'](exp__3296, B3198['<array>'])))
                B3299 = B3198['map'](B3198['rcurry'](($module)['normalize-term'], env__3297), exp__3296);
            else
                B3299 = exp__3296;
            return(k__3298(B3299));
        }
    };
    B3198['%annotate-function'](($module)['normalize-value'], 'normalize-value', false);
}
{
    ($module)['normalize*'] = function B3302(exp__3303, env__3304, k__3305) {
        return(($module)['normalize'](exp__3303, env__3304, function B3306(expT__3307) {
            if (($T)(($module)['atomic?'](expT__3307)))
                return(k__3305(expT__3307));
            else {
                var t__3308 = B3198['generate-symbol']();
                return([
                    B3233,
                    [
                        t__3308,
                        expT__3307
                    ],
                    k__3305(t__3308)
                ]);
            }
        }));
    };
    B3198['%annotate-function'](($module)['normalize*'], 'normalize*', false);
}
{
    ($module)['normalize**'] = function B3310(expT__3311, env__3312, k__3313) {
        if (($T)(B3198['empty?'](expT__3311)))
            return(k__3313([]));
        else
            return(($module)['normalize-all'](expT__3311, env__3312, k__3313));
    };
    B3198['%annotate-function'](($module)['normalize**'], 'normalize**', false);
}
{
    ($module)['normalize-all'] = function B3317(exp__3318, env__3319, k__3320) {
        return(($module)['normalize*'](B3198['first'](exp__3318), env__3319, function B3321(t__3322) {
            return(($module)['normalize**'](B3198['rest'](exp__3318), env__3319, function B3323(tT__3324) {
                return(k__3320(B3198['cons'](t__3322, tT__3324)));
            }));
        }));
    };
    B3198['%annotate-function'](($module)['normalize-all'], 'normalize-all', false);
}
