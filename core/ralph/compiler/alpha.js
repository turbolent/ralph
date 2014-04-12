{
    var $module = Object.create(null);
    var Mexport = function B3088(name__3089, value__3090) {
        var B3091 = (exports);
        return(B3091[name__3089] = value__3090);
    };
}
var B3092 = require('ralph/core');
{
    var B3093 = require('ralph/compiler/environment');
    var B3094 = require('ralph/compiler/utilities');
}
{
    var ensure_naming_structure = function B3096(env__3097, module_name__3098, name__3099) {
        if (($T)(B3092['not'](B3092['get'](env__3097, 'identifiers', module_name__3098))))
            B3092['get-setter'](env__3097, 'identifiers', module_name__3098, B3092['make-object']());
        {
            var module_renamings__3100 = B3092['get'](env__3097, 'identifiers', module_name__3098);
            {
                if (($T)(B3092['not'](B3092['get'](module_renamings__3100, name__3099))))
                    B3092['get-setter'](module_renamings__3100, name__3099, []);
                return(env__3097);
            }
        }
    };
    B3092['%annotate-function'](ensure_naming_structure, 'ensure-naming-structure', false);
}
{
    var rename_definition = function B3102(identifier__3103, env__3104) {
        var new_identifier__3105 = B3092['first'](rename_identifiers([identifier__3103], env__3104));
        {
            B3092['get-setter'](env__3104, 'original-identifier', B3092['symbol-name'](new_identifier__3105), identifier__3103);
            return(new_identifier__3105);
        }
    };
    B3092['%annotate-function'](rename_definition, 'rename-definition', false);
}
{
    var rename_identifiers = function B3109(identifiers__3110, env__3111) {
        return(B3092['map'](function B3112(identifier__3113) {
            if (($T)(B3094['special-symbol?'](identifier__3113)))
                return(identifier__3113);
            else {
                var B3114 = B3092['destructure-symbol'](identifier__3113);
                {
                    var name__3115 = B3114[0];
                    {
                        var module_name__3116 = B3114[1];
                        {
                            if (($T)(B3092['not'](module_name__3116)))
                                module_name__3116 = B3092['get'](env__3111, 'module', 'name');
                            {
                                var B3118 = B3092['generate-symbol'];
                                {
                                    var B3119 = false;
                                    if (($T)(B3092['not'](B3092['get'](identifier__3113, 'generated?'))))
                                        B3119 = name__3115;
                                    else
                                        B3119 = false;
                                    {
                                        var identifierT__3117 = B3118(env__3111, B3119);
                                        {
                                            ensure_naming_structure(env__3111, module_name__3116, name__3115);
                                            {
                                                B3092['push'](B3092['get'](env__3111, 'identifiers', module_name__3116, name__3115), identifierT__3117);
                                                return(identifierT__3117);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, identifiers__3110));
    };
    B3092['%annotate-function'](rename_identifiers, 'rename-identifiers', false);
}
{
    var restore_identifiers = function B3128(identifiers__3129, env__3130) {
        var B3131 = identifiers__3129;
        {
            var B3132 = false;
            {
                var B3133 = false;
                {
                    var B3134 = [B3131];
                    {
                        while (true) {
                            var B3142 = B3092['not'];
                            {
                                var B3135 = B3132;
                                {
                                    var B3143 = false;
                                    if (($T)(B3135))
                                        B3143 = B3135;
                                    else
                                        B3143 = B3092['any?'](B3092['empty?'], B3134);
                                    {
                                        var B3144 = B3142(B3143);
                                        if (($T)(B3144)) {
                                            var identifier__3136 = B3092['first'](B3131);
                                            {
                                                (function B3137(identifier__3138) {
                                                    if (($T)(B3092['not'](B3094['special-symbol?'](identifier__3138)))) {
                                                        var B3139 = B3092['destructure-symbol'](identifier__3138);
                                                        {
                                                            var name__3140 = B3139[0];
                                                            {
                                                                var module_name__3141 = B3139[1];
                                                                {
                                                                    if (($T)(B3092['not'](module_name__3141)))
                                                                        module_name__3141 = B3092['get'](env__3130, 'module', 'name');
                                                                    return(B3092['pop'](B3092['get'](env__3130, 'identifiers', module_name__3141, name__3140)));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(false);
                                                }(identifier__3136));
                                                {
                                                    B3131 = B3092['rest'](B3131);
                                                    B3134 = [B3131];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        return(B3133);
                    }
                }
            }
        }
    };
    B3092['%annotate-function'](restore_identifiers, 'restore-identifiers', false);
}
{
    var find_identifier = function B3147(identifier__3148, env__3149) {
        if (($T)(B3094['special-symbol?'](identifier__3148)))
            return(identifier__3148);
        else {
            var B3150 = B3092['destructure-symbol'](identifier__3148);
            {
                var name__3151 = B3150[0];
                {
                    var module_name__3152 = B3150[1];
                    {
                        if (($T)(B3092['not'](module_name__3152)))
                            module_name__3152 = B3092['get'](env__3149, 'module', 'name');
                        {
                            var renamings__3153 = B3092['get'](env__3149, 'identifiers', module_name__3152, name__3151);
                            {
                                var B3154 = false;
                                if (($T)(renamings__3153))
                                    B3154 = B3092['not'](B3092['empty?'](renamings__3153));
                                else
                                    B3154 = false;
                                if (($T)(B3154))
                                    return(B3092['first'](renamings__3153));
                                else
                                    return(false);
                            }
                        }
                    }
                }
            }
        }
    };
    B3092['%annotate-function'](find_identifier, 'find-identifier', false);
}
{
    {
        var alpha_convert_form = function B3156(exp__3157, env__3158) {
            return(alpha_convert(exp__3157, env__3158, B3092['identity']));
        };
        Mexport('alpha-convert-form', alpha_convert_form);
    }
    B3092['%annotate-function'](alpha_convert_form, 'alpha-convert-form', false);
}
{
    var B3184 = $S('%bind', 'ralph/core');
    {
        var B3185 = $S('%method', 'ralph/core');
        {
            var B3186 = $S('%define', 'ralph/core');
            {
                var B3187 = $S('%try', 'ralph/core');
                {
                    var alpha_convert = function B3188(exp__3189, env__3190, k__3191) {
                        var B3192 = exp__3189;
                        if (($T)(B3092['instance?'](B3192, B3092['<array>']))) {
                            var B3193 = B3092['symbol-name'](B3092['first'](exp__3189));
                            if (($T)(B3092['=='](B3193, '%quote')))
                                return(k__3191(exp__3189));
                            else if (($T)(B3092['=='](B3193, '%bind'))) {
                                var ____3194 = exp__3189[0];
                                {
                                    var B3195 = exp__3189[1];
                                    {
                                        var identifier__3196 = B3195[0];
                                        {
                                            var value__3197 = B3195[1];
                                            {
                                                var form__3198 = exp__3189[2];
                                                return(alpha_convert(value__3197, env__3190, function B3199(valueT__3200) {
                                                    var B3201 = rename_identifiers([identifier__3196], env__3190);
                                                    {
                                                        var identifierT__3202 = B3201[0];
                                                        return(alpha_convert(form__3198, env__3190, function B3203(formT__3204) {
                                                            restore_identifiers([identifier__3196], env__3190);
                                                            return(k__3191([
                                                                B3184,
                                                                [
                                                                    identifierT__3202,
                                                                    valueT__3200
                                                                ],
                                                                formT__3204
                                                            ]));
                                                        }));
                                                    }
                                                }));
                                            }
                                        }
                                    }
                                }
                            } else if (($T)(B3092['=='](B3193, '%method'))) {
                                var ____3205 = exp__3189[0];
                                {
                                    var name__3206 = exp__3189[1];
                                    {
                                        var parameters__3207 = exp__3189[2];
                                        {
                                            var form__3208 = exp__3189[3];
                                            {
                                                var identifiers__3209 = B3092['cons'](name__3206, parameters__3207);
                                                {
                                                    var B3210 = rename_identifiers(identifiers__3209, env__3190);
                                                    {
                                                        var nameT__3211 = B3210[0];
                                                        {
                                                            var parametersT__3212 = $SL.call(B3210, 1);
                                                            return(alpha_convert(form__3208, env__3190, function B3213(formT__3214) {
                                                                restore_identifiers(identifiers__3209, env__3190);
                                                                return(k__3191([
                                                                    B3185,
                                                                    nameT__3211,
                                                                    parametersT__3212,
                                                                    formT__3214
                                                                ]));
                                                            }));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                var B3215 = B3092['=='](B3193, '%set');
                                {
                                    var B3248 = false;
                                    if (($T)(B3215))
                                        B3248 = B3215;
                                    else {
                                        var B3216 = B3092['=='](B3193, '%if');
                                        if (($T)(B3216))
                                            B3248 = B3216;
                                        else {
                                            var B3217 = B3092['=='](B3193, '%begin');
                                            if (($T)(B3217))
                                                B3248 = B3217;
                                            else {
                                                var B3218 = B3092['=='](B3193, '%while');
                                                if (($T)(B3218))
                                                    B3248 = B3218;
                                                else {
                                                    var B3219 = B3092['=='](B3193, '%native');
                                                    if (($T)(B3219))
                                                        B3248 = B3219;
                                                    else {
                                                        var B3220 = B3092['=='](B3193, '%native-call');
                                                        if (($T)(B3220))
                                                            B3248 = B3220;
                                                        else {
                                                            var B3221 = B3092['=='](B3193, '%infix');
                                                            if (($T)(B3221))
                                                                B3248 = B3221;
                                                            else {
                                                                var B3222 = B3092['=='](B3193, '%object');
                                                                if (($T)(B3222))
                                                                    B3248 = B3222;
                                                                else {
                                                                    var B3223 = B3092['=='](B3193, '%array');
                                                                    if (($T)(B3223))
                                                                        B3248 = B3223;
                                                                    else
                                                                        B3248 = B3092['=='](B3193, '%get-property');
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (($T)(B3248)) {
                                        var op__3224 = exp__3189[0];
                                        {
                                            var arguments__3225 = $SL.call(exp__3189, 1);
                                            return(alpha_convertT(arguments__3225, env__3190, function B3226(argumentsT__3227) {
                                                return(k__3191(B3092['cons'](op__3224, argumentsT__3227)));
                                            }));
                                        }
                                    } else if (($T)(B3092['=='](B3193, '%define'))) {
                                        var ____3228 = exp__3189[0];
                                        {
                                            var identifier__3229 = exp__3189[1];
                                            {
                                                var value__3230 = exp__3189[2];
                                                return(alpha_convert(value__3230, env__3190, function B3231(valueT__3232) {
                                                    var B3233 = find_identifier(identifier__3229, env__3190);
                                                    {
                                                        var identifierT__3234 = false;
                                                        if (($T)(B3233))
                                                            identifierT__3234 = B3233;
                                                        else
                                                            identifierT__3234 = B3093['qualify-symbol'](identifier__3229, env__3190);
                                                        return(k__3191([
                                                            B3186,
                                                            identifierT__3234,
                                                            valueT__3232
                                                        ]));
                                                    }
                                                }));
                                            }
                                        }
                                    } else if (($T)(B3092['=='](B3193, '%try'))) {
                                        var ____3235 = exp__3189[0];
                                        {
                                            var protected_form__3236 = exp__3189[1];
                                            {
                                                var identifier__3237 = exp__3189[2];
                                                {
                                                    var handling_form__3238 = exp__3189[3];
                                                    return(alpha_convert(protected_form__3236, env__3190, function B3239(protected_formT__3240) {
                                                        var B3241 = rename_identifiers([identifier__3237], env__3190);
                                                        {
                                                            var identifierT__3242 = B3241[0];
                                                            return(alpha_convert(handling_form__3238, env__3190, function B3243(handling_formT__3244) {
                                                                restore_identifiers([identifier__3237], env__3190);
                                                                return(k__3191([
                                                                    B3187,
                                                                    protected_formT__3240,
                                                                    identifierT__3242,
                                                                    handling_formT__3244
                                                                ]));
                                                            }));
                                                        }
                                                    }));
                                                }
                                            }
                                        }
                                    } else
                                        return(alpha_convertTT(exp__3189, env__3190, k__3191));
                                }
                            }
                        } else if (($T)(B3092['instance?'](B3192, B3092['<symbol>']))) {
                            var B3245 = find_identifier(exp__3189, env__3190);
                            if (($T)(B3245)) {
                                var identifier__3246 = B3245;
                                return(k__3191(identifier__3246));
                            } else {
                                var symbol__3247 = B3093['resolve-symbol'](exp__3189, env__3190);
                                if (($T)(B3092['=='](B3092['get'](symbol__3247, 'module'), B3092['get'](env__3190, 'module', 'name'))))
                                    return(k__3191(symbol__3247));
                                else
                                    return(convert_free_variable(symbol__3247, env__3190, k__3191));
                            }
                        } else
                            return(k__3191(exp__3189));
                    };
                    B3092['%annotate-function'](alpha_convert, 'alpha-convert', false);
                }
            }
        }
    }
}
{
    var B3250 = $S('%get-property', 'ralph/core');
    {
        var make_external_reference = function B3251(name__3252, module_name__3253, env__3254) {
            return([
                B3250,
                B3093['find-import-identifier'](module_name__3253, env__3254),
                name__3252
            ]);
        };
        B3092['%annotate-function'](make_external_reference, 'make-external-reference', false);
    }
}
{
    var B3259 = $S('%begin', 'ralph/core');
    {
        var convert_free_variable = function B3260(symbol__3261, env__3262, k__3263) {
            var B3264 = B3092['destructure-symbol'](symbol__3261);
            {
                var name__3265 = B3264[0];
                {
                    var module_name__3266 = B3264[1];
                    {
                        var B3267 = B3093['find-import-identifier'](module_name__3266, env__3262);
                        if (($T)(B3267)) {
                            var import_identifier__3268 = B3267;
                            {
                                var reference__3269 = make_external_reference(name__3265, module_name__3266, env__3262);
                                return(alpha_convert(reference__3269, env__3262, k__3263));
                            }
                        } else
                            return(alpha_convertT([
                                B3093['make-import-definition'](module_name__3266, env__3262),
                                make_external_reference(name__3265, module_name__3266, env__3262)
                            ], env__3262, function B3270(formsT__3271) {
                                var importT__3272 = formsT__3271[0];
                                {
                                    var referenceT__3273 = formsT__3271[1];
                                    return([
                                        B3259,
                                        importT__3272,
                                        k__3263(referenceT__3273)
                                    ]);
                                }
                            }));
                    }
                }
            }
        };
        B3092['%annotate-function'](convert_free_variable, 'convert-free-variable', false);
    }
}
{
    var alpha_convertT = function B3275(expT__3276, env__3277, k__3278) {
        if (($T)(B3092['empty?'](expT__3276)))
            return(k__3278([]));
        else
            return(alpha_convertTT(expT__3276, env__3277, k__3278));
    };
    B3092['%annotate-function'](alpha_convertT, 'alpha-convert*', false);
}
{
    var alpha_convertTT = function B3282(exp__3283, env__3284, k__3285) {
        return(alpha_convert(B3092['first'](exp__3283), env__3284, function B3286(t__3287) {
            return(alpha_convertT(B3092['rest'](exp__3283), env__3284, function B3288(tT__3289) {
                return(k__3285(B3092['cons'](t__3287, tT__3289)));
            }));
        }));
    };
    B3092['%annotate-function'](alpha_convertTT, 'alpha-convert**', false);
}
