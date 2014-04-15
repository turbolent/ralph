require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3183(name__3184, value__3185) {
            var B3187 = (exports);
            return(B3187[name__3184] = value__3185);
        };
        {
            ($module)['%eval'] = function B3186() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3188 = require('ralph/core');
var B3189 = require('ralph/compiler/utilities');
{
    ($module)['atomic?'] = function B3191(expression__3192) {
        return(B3188['any?'](B3188['curry'](B3188['instance?'], expression__3192), [
            B3188['<number>'],
            B3188['<boolean>'],
            B3188['<string>'],
            B3188['<symbol>'],
            B3188['<keyword>']
        ]));
    };
    B3188['%annotate-function'](($module)['atomic?'], 'atomic?', false);
}
{
    ($module)['generates-statements?'] = function B3199(exp__3200) {
        var B3206 = false;
        if (($T)(B3188['instance?'](exp__3200, B3188['<array>'])))
            B3206 = B3188['not'](B3188['empty?'](exp__3200));
        else
            B3206 = false;
        if (($T)(B3206)) {
            var B3201 = B3188['symbol-name'](B3188['first'](exp__3200));
            {
                var B3202 = B3188['=='](B3201, '%begin');
                {
                    var B3207 = false;
                    if (($T)(B3202))
                        B3207 = B3202;
                    else {
                        var B3203 = B3188['=='](B3201, '%if');
                        if (($T)(B3203))
                            B3207 = B3203;
                        else {
                            var B3204 = B3188['=='](B3201, '%while');
                            if (($T)(B3204))
                                B3207 = B3204;
                            else {
                                var B3205 = B3188['=='](B3201, '%bind');
                                if (($T)(B3205))
                                    B3207 = B3205;
                                else
                                    B3207 = B3188['=='](B3201, '%try');
                            }
                        }
                    }
                    if (($T)(B3207))
                        return(true);
                    else if (($T)(B3188['=='](B3201, '%set')))
                        return(($module)['generates-statements?'](B3188['last'](exp__3200)));
                    else if (($T)(B3188['=='](B3201, '%method')))
                        return(false);
                    else
                        return(B3188['any?'](($module)['generates-statements?'], exp__3200));
                }
            }
        } else
            return(false);
    };
    B3188['%annotate-function'](($module)['generates-statements?'], 'generates-statements?', false);
}
{
    {
        ($module)['normalize-term'] = function B3209(expression__3210, env__3211) {
            return(($module)['normalize'](expression__3210, env__3211, B3188['identity']));
        };
        ($module)['%export']('normalize-term', ($module)['normalize-term']);
    }
    B3188['%annotate-function'](($module)['normalize-term'], 'normalize-term', false);
}
{
    var B3223 = $S('%bind', 'ralph/core');
    {
        var B3224 = $S('%method', 'ralph/core');
        {
            var B3225 = $S('%set', 'ralph/core');
            {
                var B3226 = $S('%get-property', 'ralph/core');
                {
                    var B3227 = $S('%if', 'ralph/core');
                    {
                        var B3228 = $S('%begin', 'ralph/core');
                        {
                            var B3229 = $S('%while', 'ralph/core');
                            {
                                var B3230 = $S('%native', 'ralph/core');
                                {
                                    var B3231 = $S('%try', 'ralph/core');
                                    {
                                        ($module)['normalize'] = function B3232(exp__3233, env__3234, k__3235) {
                                            var B3281 = false;
                                            if (($T)(B3188['instance?'](exp__3233, B3188['<array>'])))
                                                B3281 = B3188['not'](B3188['empty?'](exp__3233));
                                            else
                                                B3281 = false;
                                            if (($T)(B3281)) {
                                                var B3236 = B3188['symbol-name'](B3188['first'](exp__3233));
                                                if (($T)(B3188['=='](B3236, '%quote')))
                                                    return(k__3235(exp__3233));
                                                else if (($T)(B3188['=='](B3236, '%bind'))) {
                                                    var ____3237 = exp__3233[0];
                                                    {
                                                        var B3238 = exp__3233[1];
                                                        {
                                                            var identifier__3239 = B3238[0];
                                                            {
                                                                var value__3240 = B3238[1];
                                                                {
                                                                    var form__3241 = exp__3233[2];
                                                                    return(($module)['normalize'](value__3240, env__3234, function B3242(valueT__3243) {
                                                                        return([
                                                                            B3223,
                                                                            [
                                                                                identifier__3239,
                                                                                valueT__3243
                                                                            ],
                                                                            ($module)['normalize'](form__3241, env__3234, k__3235)
                                                                        ]);
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3188['=='](B3236, '%method'))) {
                                                    var ____3244 = exp__3233[0];
                                                    {
                                                        var name__3245 = exp__3233[1];
                                                        {
                                                            var parameters__3246 = exp__3233[2];
                                                            {
                                                                var form__3247 = exp__3233[3];
                                                                return(k__3235([
                                                                    B3224,
                                                                    name__3245,
                                                                    parameters__3246,
                                                                    ($module)['normalize-term'](form__3247, env__3234)
                                                                ]));
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3188['=='](B3236, '%set'))) {
                                                    var ____3248 = exp__3233[0];
                                                    {
                                                        var place__3249 = exp__3233[1];
                                                        {
                                                            var value__3250 = exp__3233[2];
                                                            if (($T)(B3189['op?']('%get-property', place__3249)))
                                                                return(($module)['normalize**'](B3188['rest'](place__3249), env__3234, function B3251(argumentsT__3252) {
                                                                    return(($module)['normalize-value'](value__3250, env__3234, function B3253(valueT__3254) {
                                                                        return(k__3235([
                                                                            B3225,
                                                                            B3188['%concat']([B3226], argumentsT__3252),
                                                                            valueT__3254
                                                                        ]));
                                                                    }));
                                                                }));
                                                            else
                                                                return(($module)['normalize-value'](value__3250, env__3234, function B3255(valueT__3256) {
                                                                    return(k__3235([
                                                                        B3225,
                                                                        place__3249,
                                                                        valueT__3256
                                                                    ]));
                                                                }));
                                                        }
                                                    }
                                                } else {
                                                    var B3257 = B3188['=='](B3236, '%define');
                                                    {
                                                        var B3282 = false;
                                                        if (($T)(B3257))
                                                            B3282 = B3257;
                                                        else
                                                            B3282 = B3188['=='](B3236, '%var');
                                                        if (($T)(B3282)) {
                                                            var op__3258 = exp__3233[0];
                                                            {
                                                                var identifier__3259 = exp__3233[1];
                                                                {
                                                                    var value__3260 = exp__3233[2];
                                                                    return(($module)['normalize-value'](value__3260, env__3234, function B3261(valueT__3262) {
                                                                        return(k__3235([
                                                                            op__3258,
                                                                            identifier__3259,
                                                                            valueT__3262
                                                                        ]));
                                                                    }));
                                                                }
                                                            }
                                                        } else if (($T)(B3188['=='](B3236, '%if'))) {
                                                            var ____3263 = exp__3233[0];
                                                            {
                                                                var test__3264 = exp__3233[1];
                                                                {
                                                                    var consequent__3265 = exp__3233[2];
                                                                    {
                                                                        var alternate__3266 = exp__3233[3];
                                                                        return(($module)['normalize-value'](test__3264, env__3234, function B3267(testT__3268) {
                                                                            return(k__3235([
                                                                                B3227,
                                                                                testT__3268,
                                                                                ($module)['normalize-term'](consequent__3265, env__3234),
                                                                                ($module)['normalize-term'](alternate__3266, env__3234)
                                                                            ]));
                                                                        }));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3188['=='](B3236, '%begin'))) {
                                                            var ____3269 = exp__3233[0];
                                                            {
                                                                var form__3270 = exp__3233[1];
                                                                {
                                                                    var forms__3271 = $SL.call(exp__3233, 2);
                                                                    if (($T)(B3188['empty?'](forms__3271)))
                                                                        return(($module)['normalize'](form__3270, env__3234, k__3235));
                                                                    else
                                                                        return(($module)['normalize'](form__3270, env__3234, function B3272(formT__3273) {
                                                                            return([
                                                                                B3228,
                                                                                formT__3273,
                                                                                ($module)['normalize'](B3188['%concat']([B3228], forms__3271), env__3234, k__3235)
                                                                            ]);
                                                                        }));
                                                                }
                                                            }
                                                        } else if (($T)(B3188['=='](B3236, '%while'))) {
                                                            var ____3274 = exp__3233[0];
                                                            {
                                                                var test__3275 = exp__3233[1];
                                                                {
                                                                    var form__3276 = exp__3233[2];
                                                                    {
                                                                        var B3283 = false;
                                                                        if (($T)(($module)['generates-statements?'](test__3275)))
                                                                            B3283 = [
                                                                                B3229,
                                                                                true,
                                                                                ($module)['normalize-term']([
                                                                                    B3227,
                                                                                    test__3275,
                                                                                    ($module)['normalize-term'](form__3276),
                                                                                    [
                                                                                        B3230,
                                                                                        'break'
                                                                                    ]
                                                                                ], env__3234)
                                                                            ];
                                                                        else
                                                                            B3283 = [
                                                                                B3229,
                                                                                ($module)['normalize-term'](test__3275, env__3234),
                                                                                ($module)['normalize-term'](form__3276, env__3234)
                                                                            ];
                                                                        return(k__3235(B3283));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3188['=='](B3236, '%try'))) {
                                                            var ____3277 = exp__3233[0];
                                                            {
                                                                var protected_form__3278 = exp__3233[1];
                                                                {
                                                                    var identifier__3279 = exp__3233[2];
                                                                    {
                                                                        var handling_form__3280 = exp__3233[3];
                                                                        return(k__3235([
                                                                            B3231,
                                                                            ($module)['normalize-term'](protected_form__3278, env__3234),
                                                                            identifier__3279,
                                                                            ($module)['normalize-term'](handling_form__3280, env__3234)
                                                                        ]));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(($module)['generates-statements?'](exp__3233)))
                                                            return(($module)['normalize-all'](exp__3233, env__3234, k__3235));
                                                        else
                                                            return(k__3235(B3188['map'](B3188['rcurry'](($module)['normalize-term'], env__3234), exp__3233)));
                                                    }
                                                }
                                            } else
                                                return(k__3235(exp__3233));
                                        };
                                        B3188['%annotate-function'](($module)['normalize'], 'normalize', false);
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
    ($module)['normalize-value'] = function B3285(exp__3286, env__3287, k__3288) {
        if (($T)(($module)['generates-statements?'](exp__3286)))
            return(($module)['normalize*'](exp__3286, env__3287, k__3288));
        else {
            var B3289 = false;
            if (($T)(B3188['instance?'](exp__3286, B3188['<array>'])))
                B3289 = B3188['map'](B3188['rcurry'](($module)['normalize-term'], env__3287), exp__3286);
            else
                B3289 = exp__3286;
            return(k__3288(B3289));
        }
    };
    B3188['%annotate-function'](($module)['normalize-value'], 'normalize-value', false);
}
{
    ($module)['normalize*'] = function B3292(exp__3293, env__3294, k__3295) {
        return(($module)['normalize'](exp__3293, env__3294, function B3296(expT__3297) {
            if (($T)(($module)['atomic?'](expT__3297)))
                return(k__3295(expT__3297));
            else {
                var t__3298 = B3188['generate-symbol']();
                return([
                    B3223,
                    [
                        t__3298,
                        expT__3297
                    ],
                    k__3295(t__3298)
                ]);
            }
        }));
    };
    B3188['%annotate-function'](($module)['normalize*'], 'normalize*', false);
}
{
    ($module)['normalize**'] = function B3300(expT__3301, env__3302, k__3303) {
        if (($T)(B3188['empty?'](expT__3301)))
            return(k__3303([]));
        else
            return(($module)['normalize-all'](expT__3301, env__3302, k__3303));
    };
    B3188['%annotate-function'](($module)['normalize**'], 'normalize**', false);
}
{
    ($module)['normalize-all'] = function B3307(exp__3308, env__3309, k__3310) {
        return(($module)['normalize*'](B3188['first'](exp__3308), env__3309, function B3311(t__3312) {
            return(($module)['normalize**'](B3188['rest'](exp__3308), env__3309, function B3313(tT__3314) {
                return(k__3310(B3188['cons'](t__3312, tT__3314)));
            }));
        }));
    };
    B3188['%annotate-function'](($module)['normalize-all'], 'normalize-all', false);
}
