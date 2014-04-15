require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3157(name__3158, value__3159) {
            var B3161 = (exports);
            return(B3161[name__3158] = value__3159);
        };
        {
            ($module)['%eval'] = function B3160() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B3162 = require('ralph/core');
var B3163 = require('ralph/compiler/utilities');
{
    ($module)['atomic?'] = function B3165(expression__3166) {
        return(B3162['any?'](B3162['curry'](B3162['instance?'], expression__3166), [
            B3162['<number>'],
            B3162['<boolean>'],
            B3162['<string>'],
            B3162['<symbol>'],
            B3162['<keyword>']
        ]));
    };
    B3162['%annotate-function'](($module)['atomic?'], 'atomic?', false);
}
{
    ($module)['generates-statements?'] = function B3173(exp__3174) {
        var B3180 = false;
        if (($T)(B3162['instance?'](exp__3174, B3162['<array>'])))
            B3180 = B3162['not'](B3162['empty?'](exp__3174));
        else
            B3180 = false;
        if (($T)(B3180)) {
            var B3175 = B3162['symbol-name'](B3162['first'](exp__3174));
            {
                var B3176 = B3162['=='](B3175, '%begin');
                {
                    var B3181 = false;
                    if (($T)(B3176))
                        B3181 = B3176;
                    else {
                        var B3177 = B3162['=='](B3175, '%if');
                        if (($T)(B3177))
                            B3181 = B3177;
                        else {
                            var B3178 = B3162['=='](B3175, '%while');
                            if (($T)(B3178))
                                B3181 = B3178;
                            else {
                                var B3179 = B3162['=='](B3175, '%bind');
                                if (($T)(B3179))
                                    B3181 = B3179;
                                else
                                    B3181 = B3162['=='](B3175, '%try');
                            }
                        }
                    }
                    if (($T)(B3181))
                        return(true);
                    else if (($T)(B3162['=='](B3175, '%set')))
                        return(($module)['generates-statements?'](B3162['last'](exp__3174)));
                    else if (($T)(B3162['=='](B3175, '%method')))
                        return(false);
                    else
                        return(B3162['any?'](($module)['generates-statements?'], exp__3174));
                }
            }
        } else
            return(false);
    };
    B3162['%annotate-function'](($module)['generates-statements?'], 'generates-statements?', false);
}
{
    {
        ($module)['normalize-term'] = function B3183(expression__3184, env__3185) {
            return(($module)['normalize'](expression__3184, env__3185, B3162['identity']));
        };
        ($module)['%export']('normalize-term', ($module)['normalize-term']);
    }
    B3162['%annotate-function'](($module)['normalize-term'], 'normalize-term', false);
}
{
    var B3197 = $S('%bind', 'ralph/core');
    {
        var B3198 = $S('%method', 'ralph/core');
        {
            var B3199 = $S('%set', 'ralph/core');
            {
                var B3200 = $S('%get-property', 'ralph/core');
                {
                    var B3201 = $S('%if', 'ralph/core');
                    {
                        var B3202 = $S('%begin', 'ralph/core');
                        {
                            var B3203 = $S('%while', 'ralph/core');
                            {
                                var B3204 = $S('%native', 'ralph/core');
                                {
                                    var B3205 = $S('%try', 'ralph/core');
                                    {
                                        ($module)['normalize'] = function B3206(exp__3207, env__3208, k__3209) {
                                            var B3255 = false;
                                            if (($T)(B3162['instance?'](exp__3207, B3162['<array>'])))
                                                B3255 = B3162['not'](B3162['empty?'](exp__3207));
                                            else
                                                B3255 = false;
                                            if (($T)(B3255)) {
                                                var B3210 = B3162['symbol-name'](B3162['first'](exp__3207));
                                                if (($T)(B3162['=='](B3210, '%quote')))
                                                    return(k__3209(exp__3207));
                                                else if (($T)(B3162['=='](B3210, '%bind'))) {
                                                    var ____3211 = exp__3207[0];
                                                    {
                                                        var B3212 = exp__3207[1];
                                                        {
                                                            var identifier__3213 = B3212[0];
                                                            {
                                                                var value__3214 = B3212[1];
                                                                {
                                                                    var form__3215 = exp__3207[2];
                                                                    return(($module)['normalize'](value__3214, env__3208, function B3216(valueT__3217) {
                                                                        return([
                                                                            B3197,
                                                                            [
                                                                                identifier__3213,
                                                                                valueT__3217
                                                                            ],
                                                                            ($module)['normalize'](form__3215, env__3208, k__3209)
                                                                        ]);
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3162['=='](B3210, '%method'))) {
                                                    var ____3218 = exp__3207[0];
                                                    {
                                                        var name__3219 = exp__3207[1];
                                                        {
                                                            var parameters__3220 = exp__3207[2];
                                                            {
                                                                var form__3221 = exp__3207[3];
                                                                return(k__3209([
                                                                    B3198,
                                                                    name__3219,
                                                                    parameters__3220,
                                                                    ($module)['normalize-term'](form__3221, env__3208)
                                                                ]));
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3162['=='](B3210, '%set'))) {
                                                    var ____3222 = exp__3207[0];
                                                    {
                                                        var place__3223 = exp__3207[1];
                                                        {
                                                            var value__3224 = exp__3207[2];
                                                            if (($T)(B3163['op?']('%get-property', place__3223)))
                                                                return(($module)['normalize**'](B3162['rest'](place__3223), env__3208, function B3225(argumentsT__3226) {
                                                                    return(($module)['normalize-value'](value__3224, env__3208, function B3227(valueT__3228) {
                                                                        return(k__3209([
                                                                            B3199,
                                                                            B3162['%concat']([B3200], argumentsT__3226),
                                                                            valueT__3228
                                                                        ]));
                                                                    }));
                                                                }));
                                                            else
                                                                return(($module)['normalize-value'](value__3224, env__3208, function B3229(valueT__3230) {
                                                                    return(k__3209([
                                                                        B3199,
                                                                        place__3223,
                                                                        valueT__3230
                                                                    ]));
                                                                }));
                                                        }
                                                    }
                                                } else {
                                                    var B3231 = B3162['=='](B3210, '%define');
                                                    {
                                                        var B3256 = false;
                                                        if (($T)(B3231))
                                                            B3256 = B3231;
                                                        else
                                                            B3256 = B3162['=='](B3210, '%var');
                                                        if (($T)(B3256)) {
                                                            var op__3232 = exp__3207[0];
                                                            {
                                                                var identifier__3233 = exp__3207[1];
                                                                {
                                                                    var value__3234 = exp__3207[2];
                                                                    return(($module)['normalize-value'](value__3234, env__3208, function B3235(valueT__3236) {
                                                                        return(k__3209([
                                                                            op__3232,
                                                                            identifier__3233,
                                                                            valueT__3236
                                                                        ]));
                                                                    }));
                                                                }
                                                            }
                                                        } else if (($T)(B3162['=='](B3210, '%if'))) {
                                                            var ____3237 = exp__3207[0];
                                                            {
                                                                var test__3238 = exp__3207[1];
                                                                {
                                                                    var consequent__3239 = exp__3207[2];
                                                                    {
                                                                        var alternate__3240 = exp__3207[3];
                                                                        return(($module)['normalize-value'](test__3238, env__3208, function B3241(testT__3242) {
                                                                            return(k__3209([
                                                                                B3201,
                                                                                testT__3242,
                                                                                ($module)['normalize-term'](consequent__3239, env__3208),
                                                                                ($module)['normalize-term'](alternate__3240, env__3208)
                                                                            ]));
                                                                        }));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3162['=='](B3210, '%begin'))) {
                                                            var ____3243 = exp__3207[0];
                                                            {
                                                                var form__3244 = exp__3207[1];
                                                                {
                                                                    var forms__3245 = $SL.call(exp__3207, 2);
                                                                    if (($T)(B3162['empty?'](forms__3245)))
                                                                        return(($module)['normalize'](form__3244, env__3208, k__3209));
                                                                    else
                                                                        return(($module)['normalize'](form__3244, env__3208, function B3246(formT__3247) {
                                                                            return([
                                                                                B3202,
                                                                                formT__3247,
                                                                                ($module)['normalize'](B3162['%concat']([B3202], forms__3245), env__3208, k__3209)
                                                                            ]);
                                                                        }));
                                                                }
                                                            }
                                                        } else if (($T)(B3162['=='](B3210, '%while'))) {
                                                            var ____3248 = exp__3207[0];
                                                            {
                                                                var test__3249 = exp__3207[1];
                                                                {
                                                                    var form__3250 = exp__3207[2];
                                                                    {
                                                                        var B3257 = false;
                                                                        if (($T)(($module)['generates-statements?'](test__3249)))
                                                                            B3257 = [
                                                                                B3203,
                                                                                true,
                                                                                ($module)['normalize-term']([
                                                                                    B3201,
                                                                                    test__3249,
                                                                                    ($module)['normalize-term'](form__3250),
                                                                                    [
                                                                                        B3204,
                                                                                        'break'
                                                                                    ]
                                                                                ], env__3208)
                                                                            ];
                                                                        else
                                                                            B3257 = [
                                                                                B3203,
                                                                                ($module)['normalize-term'](test__3249, env__3208),
                                                                                ($module)['normalize-term'](form__3250, env__3208)
                                                                            ];
                                                                        return(k__3209(B3257));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3162['=='](B3210, '%try'))) {
                                                            var ____3251 = exp__3207[0];
                                                            {
                                                                var protected_form__3252 = exp__3207[1];
                                                                {
                                                                    var identifier__3253 = exp__3207[2];
                                                                    {
                                                                        var handling_form__3254 = exp__3207[3];
                                                                        return(k__3209([
                                                                            B3205,
                                                                            ($module)['normalize-term'](protected_form__3252, env__3208),
                                                                            identifier__3253,
                                                                            ($module)['normalize-term'](handling_form__3254, env__3208)
                                                                        ]));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(($module)['generates-statements?'](exp__3207)))
                                                            return(($module)['normalize-all'](exp__3207, env__3208, k__3209));
                                                        else
                                                            return(k__3209(B3162['map'](B3162['rcurry'](($module)['normalize-term'], env__3208), exp__3207)));
                                                    }
                                                }
                                            } else
                                                return(k__3209(exp__3207));
                                        };
                                        B3162['%annotate-function'](($module)['normalize'], 'normalize', false);
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
    ($module)['normalize-value'] = function B3259(exp__3260, env__3261, k__3262) {
        if (($T)(($module)['generates-statements?'](exp__3260)))
            return(($module)['normalize*'](exp__3260, env__3261, k__3262));
        else {
            var B3263 = false;
            if (($T)(B3162['instance?'](exp__3260, B3162['<array>'])))
                B3263 = B3162['map'](B3162['rcurry'](($module)['normalize-term'], env__3261), exp__3260);
            else
                B3263 = exp__3260;
            return(k__3262(B3263));
        }
    };
    B3162['%annotate-function'](($module)['normalize-value'], 'normalize-value', false);
}
{
    ($module)['normalize*'] = function B3266(exp__3267, env__3268, k__3269) {
        return(($module)['normalize'](exp__3267, env__3268, function B3270(expT__3271) {
            if (($T)(($module)['atomic?'](expT__3271)))
                return(k__3269(expT__3271));
            else {
                var t__3272 = B3162['generate-symbol']();
                return([
                    B3197,
                    [
                        t__3272,
                        expT__3271
                    ],
                    k__3269(t__3272)
                ]);
            }
        }));
    };
    B3162['%annotate-function'](($module)['normalize*'], 'normalize*', false);
}
{
    ($module)['normalize**'] = function B3274(expT__3275, env__3276, k__3277) {
        if (($T)(B3162['empty?'](expT__3275)))
            return(k__3277([]));
        else
            return(($module)['normalize-all'](expT__3275, env__3276, k__3277));
    };
    B3162['%annotate-function'](($module)['normalize**'], 'normalize**', false);
}
{
    ($module)['normalize-all'] = function B3281(exp__3282, env__3283, k__3284) {
        return(($module)['normalize*'](B3162['first'](exp__3282), env__3283, function B3285(t__3286) {
            return(($module)['normalize**'](B3162['rest'](exp__3282), env__3283, function B3287(tT__3288) {
                return(k__3284(B3162['cons'](t__3286, tT__3288)));
            }));
        }));
    };
    B3162['%annotate-function'](($module)['normalize-all'], 'normalize-all', false);
}
