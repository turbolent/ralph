{
    var $module = Object.create(null);
    ($module)['%export'] = function B3142(name__3143, value__3144) {
        var B3145 = (exports);
        return(B3145[name__3143] = value__3144);
    };
}
var B3146 = require('ralph/core');
var B3147 = require('ralph/compiler/utilities');
{
    ($module)['atomic?'] = function B3149(expression__3150) {
        return(B3146['any?'](B3146['curry'](B3146['instance?'], expression__3150), [
            B3146['<number>'],
            B3146['<boolean>'],
            B3146['<string>'],
            B3146['<symbol>'],
            B3146['<keyword>']
        ]));
    };
    B3146['%annotate-function'](($module)['atomic?'], 'atomic?', false);
}
{
    ($module)['generates-statements?'] = function B3157(exp__3158) {
        var B3164 = false;
        if (($T)(B3146['instance?'](exp__3158, B3146['<array>'])))
            B3164 = B3146['not'](B3146['empty?'](exp__3158));
        else
            B3164 = false;
        if (($T)(B3164)) {
            var B3159 = B3146['symbol-name'](B3146['first'](exp__3158));
            {
                var B3160 = B3146['=='](B3159, '%begin');
                {
                    var B3165 = false;
                    if (($T)(B3160))
                        B3165 = B3160;
                    else {
                        var B3161 = B3146['=='](B3159, '%if');
                        if (($T)(B3161))
                            B3165 = B3161;
                        else {
                            var B3162 = B3146['=='](B3159, '%while');
                            if (($T)(B3162))
                                B3165 = B3162;
                            else {
                                var B3163 = B3146['=='](B3159, '%bind');
                                if (($T)(B3163))
                                    B3165 = B3163;
                                else
                                    B3165 = B3146['=='](B3159, '%try');
                            }
                        }
                    }
                    if (($T)(B3165))
                        return(true);
                    else if (($T)(B3146['=='](B3159, '%set')))
                        return(($module)['generates-statements?'](B3146['last'](exp__3158)));
                    else if (($T)(B3146['=='](B3159, '%method')))
                        return(false);
                    else
                        return(B3146['any?'](($module)['generates-statements?'], exp__3158));
                }
            }
        } else
            return(false);
    };
    B3146['%annotate-function'](($module)['generates-statements?'], 'generates-statements?', false);
}
{
    {
        ($module)['normalize-term'] = function B3167(expression__3168, env__3169) {
            return(($module)['normalize'](expression__3168, env__3169, B3146['identity']));
        };
        ($module)['%export']('normalize-term', ($module)['normalize-term']);
    }
    B3146['%annotate-function'](($module)['normalize-term'], 'normalize-term', false);
}
{
    var B3181 = $S('%bind', 'ralph/core');
    {
        var B3182 = $S('%method', 'ralph/core');
        {
            var B3183 = $S('%set', 'ralph/core');
            {
                var B3184 = $S('%get-property', 'ralph/core');
                {
                    var B3185 = $S('%if', 'ralph/core');
                    {
                        var B3186 = $S('%begin', 'ralph/core');
                        {
                            var B3187 = $S('%while', 'ralph/core');
                            {
                                var B3188 = $S('%native', 'ralph/core');
                                {
                                    var B3189 = $S('%try', 'ralph/core');
                                    {
                                        ($module)['normalize'] = function B3190(exp__3191, env__3192, k__3193) {
                                            var B3239 = false;
                                            if (($T)(B3146['instance?'](exp__3191, B3146['<array>'])))
                                                B3239 = B3146['not'](B3146['empty?'](exp__3191));
                                            else
                                                B3239 = false;
                                            if (($T)(B3239)) {
                                                var B3194 = B3146['symbol-name'](B3146['first'](exp__3191));
                                                if (($T)(B3146['=='](B3194, '%quote')))
                                                    return(k__3193(exp__3191));
                                                else if (($T)(B3146['=='](B3194, '%bind'))) {
                                                    var ____3195 = exp__3191[0];
                                                    {
                                                        var B3196 = exp__3191[1];
                                                        {
                                                            var identifier__3197 = B3196[0];
                                                            {
                                                                var value__3198 = B3196[1];
                                                                {
                                                                    var form__3199 = exp__3191[2];
                                                                    return(($module)['normalize'](value__3198, env__3192, function B3200(valueT__3201) {
                                                                        return([
                                                                            B3181,
                                                                            [
                                                                                identifier__3197,
                                                                                valueT__3201
                                                                            ],
                                                                            ($module)['normalize'](form__3199, env__3192, k__3193)
                                                                        ]);
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3146['=='](B3194, '%method'))) {
                                                    var ____3202 = exp__3191[0];
                                                    {
                                                        var name__3203 = exp__3191[1];
                                                        {
                                                            var parameters__3204 = exp__3191[2];
                                                            {
                                                                var form__3205 = exp__3191[3];
                                                                return(k__3193([
                                                                    B3182,
                                                                    name__3203,
                                                                    parameters__3204,
                                                                    ($module)['normalize-term'](form__3205, env__3192)
                                                                ]));
                                                            }
                                                        }
                                                    }
                                                } else if (($T)(B3146['=='](B3194, '%set'))) {
                                                    var ____3206 = exp__3191[0];
                                                    {
                                                        var place__3207 = exp__3191[1];
                                                        {
                                                            var value__3208 = exp__3191[2];
                                                            if (($T)(B3147['op?']('%get-property', place__3207)))
                                                                return(($module)['normalize**'](B3146['rest'](place__3207), env__3192, function B3209(argumentsT__3210) {
                                                                    return(($module)['normalize-value'](value__3208, env__3192, function B3211(valueT__3212) {
                                                                        return(k__3193([
                                                                            B3183,
                                                                            B3146['%concat']([B3184], argumentsT__3210),
                                                                            valueT__3212
                                                                        ]));
                                                                    }));
                                                                }));
                                                            else
                                                                return(($module)['normalize-value'](value__3208, env__3192, function B3213(valueT__3214) {
                                                                    return(k__3193([
                                                                        B3183,
                                                                        place__3207,
                                                                        valueT__3214
                                                                    ]));
                                                                }));
                                                        }
                                                    }
                                                } else {
                                                    var B3215 = B3146['=='](B3194, '%define');
                                                    {
                                                        var B3240 = false;
                                                        if (($T)(B3215))
                                                            B3240 = B3215;
                                                        else
                                                            B3240 = B3146['=='](B3194, '%var');
                                                        if (($T)(B3240)) {
                                                            var op__3216 = exp__3191[0];
                                                            {
                                                                var identifier__3217 = exp__3191[1];
                                                                {
                                                                    var value__3218 = exp__3191[2];
                                                                    return(($module)['normalize-value'](value__3218, env__3192, function B3219(valueT__3220) {
                                                                        return(k__3193([
                                                                            op__3216,
                                                                            identifier__3217,
                                                                            valueT__3220
                                                                        ]));
                                                                    }));
                                                                }
                                                            }
                                                        } else if (($T)(B3146['=='](B3194, '%if'))) {
                                                            var ____3221 = exp__3191[0];
                                                            {
                                                                var test__3222 = exp__3191[1];
                                                                {
                                                                    var consequent__3223 = exp__3191[2];
                                                                    {
                                                                        var alternate__3224 = exp__3191[3];
                                                                        return(($module)['normalize-value'](test__3222, env__3192, function B3225(testT__3226) {
                                                                            return(k__3193([
                                                                                B3185,
                                                                                testT__3226,
                                                                                ($module)['normalize-term'](consequent__3223, env__3192),
                                                                                ($module)['normalize-term'](alternate__3224, env__3192)
                                                                            ]));
                                                                        }));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3146['=='](B3194, '%begin'))) {
                                                            var ____3227 = exp__3191[0];
                                                            {
                                                                var form__3228 = exp__3191[1];
                                                                {
                                                                    var forms__3229 = $SL.call(exp__3191, 2);
                                                                    if (($T)(B3146['empty?'](forms__3229)))
                                                                        return(($module)['normalize'](form__3228, env__3192, k__3193));
                                                                    else
                                                                        return(($module)['normalize'](form__3228, env__3192, function B3230(formT__3231) {
                                                                            return([
                                                                                B3186,
                                                                                formT__3231,
                                                                                ($module)['normalize'](B3146['%concat']([B3186], forms__3229), env__3192, k__3193)
                                                                            ]);
                                                                        }));
                                                                }
                                                            }
                                                        } else if (($T)(B3146['=='](B3194, '%while'))) {
                                                            var ____3232 = exp__3191[0];
                                                            {
                                                                var test__3233 = exp__3191[1];
                                                                {
                                                                    var form__3234 = exp__3191[2];
                                                                    {
                                                                        var B3241 = false;
                                                                        if (($T)(($module)['generates-statements?'](test__3233)))
                                                                            B3241 = [
                                                                                B3187,
                                                                                true,
                                                                                ($module)['normalize-term']([
                                                                                    B3185,
                                                                                    test__3233,
                                                                                    ($module)['normalize-term'](form__3234),
                                                                                    [
                                                                                        B3188,
                                                                                        'break'
                                                                                    ]
                                                                                ], env__3192)
                                                                            ];
                                                                        else
                                                                            B3241 = [
                                                                                B3187,
                                                                                ($module)['normalize-term'](test__3233, env__3192),
                                                                                ($module)['normalize-term'](form__3234, env__3192)
                                                                            ];
                                                                        return(k__3193(B3241));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(B3146['=='](B3194, '%try'))) {
                                                            var ____3235 = exp__3191[0];
                                                            {
                                                                var protected_form__3236 = exp__3191[1];
                                                                {
                                                                    var identifier__3237 = exp__3191[2];
                                                                    {
                                                                        var handling_form__3238 = exp__3191[3];
                                                                        return(k__3193([
                                                                            B3189,
                                                                            ($module)['normalize-term'](protected_form__3236, env__3192),
                                                                            identifier__3237,
                                                                            ($module)['normalize-term'](handling_form__3238, env__3192)
                                                                        ]));
                                                                    }
                                                                }
                                                            }
                                                        } else if (($T)(($module)['generates-statements?'](exp__3191)))
                                                            return(($module)['normalize-all'](exp__3191, env__3192, k__3193));
                                                        else
                                                            return(k__3193(B3146['map'](B3146['rcurry'](($module)['normalize-term'], env__3192), exp__3191)));
                                                    }
                                                }
                                            } else
                                                return(k__3193(exp__3191));
                                        };
                                        B3146['%annotate-function'](($module)['normalize'], 'normalize', false);
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
    ($module)['normalize-value'] = function B3243(exp__3244, env__3245, k__3246) {
        if (($T)(($module)['generates-statements?'](exp__3244)))
            return(($module)['normalize*'](exp__3244, env__3245, k__3246));
        else {
            var B3247 = false;
            if (($T)(B3146['instance?'](exp__3244, B3146['<array>'])))
                B3247 = B3146['map'](B3146['rcurry'](($module)['normalize-term'], env__3245), exp__3244);
            else
                B3247 = exp__3244;
            return(k__3246(B3247));
        }
    };
    B3146['%annotate-function'](($module)['normalize-value'], 'normalize-value', false);
}
{
    ($module)['normalize*'] = function B3250(exp__3251, env__3252, k__3253) {
        return(($module)['normalize'](exp__3251, env__3252, function B3254(expT__3255) {
            if (($T)(($module)['atomic?'](expT__3255)))
                return(k__3253(expT__3255));
            else {
                var t__3256 = B3146['generate-symbol']();
                return([
                    B3181,
                    [
                        t__3256,
                        expT__3255
                    ],
                    k__3253(t__3256)
                ]);
            }
        }));
    };
    B3146['%annotate-function'](($module)['normalize*'], 'normalize*', false);
}
{
    ($module)['normalize**'] = function B3258(expT__3259, env__3260, k__3261) {
        if (($T)(B3146['empty?'](expT__3259)))
            return(k__3261([]));
        else
            return(($module)['normalize-all'](expT__3259, env__3260, k__3261));
    };
    B3146['%annotate-function'](($module)['normalize**'], 'normalize**', false);
}
{
    ($module)['normalize-all'] = function B3265(exp__3266, env__3267, k__3268) {
        return(($module)['normalize*'](B3146['first'](exp__3266), env__3267, function B3269(t__3270) {
            return(($module)['normalize**'](B3146['rest'](exp__3266), env__3267, function B3271(tT__3272) {
                return(k__3268(B3146['cons'](t__3270, tT__3272)));
            }));
        }));
    };
    B3146['%annotate-function'](($module)['normalize-all'], 'normalize-all', false);
}
{
    ($module)['%eval'] = function B3274() {
        return(eval((arguments[0])));
    };
    {
        B3146['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
