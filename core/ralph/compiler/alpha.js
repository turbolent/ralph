require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2975(name__2976, value__2977) {
            var B2979 = (exports);
            return(B2979[name__2976] = value__2977);
        };
        {
            ($module)['%eval'] = function B2978() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2980 = require('ralph/core');
{
    var B2981 = require('ralph/compiler/environment');
    var B2982 = require('ralph/compiler/utilities');
}
{
    ($module)['ensure-naming-structure'] = function B2984(env__2985, module_name__2986, name__2987) {
        if (($T)(B2980['not'](B2980['get'](env__2985, 'identifiers', module_name__2986))))
            B2980['get-setter'](env__2985, 'identifiers', module_name__2986, B2980['make-object']());
        {
            var module_renamings__2988 = B2980['get'](env__2985, 'identifiers', module_name__2986);
            {
                if (($T)(B2980['not'](B2980['get'](module_renamings__2988, name__2987))))
                    B2980['get-setter'](module_renamings__2988, name__2987, []);
                return(env__2985);
            }
        }
    };
    B2980['%annotate-function'](($module)['ensure-naming-structure'], 'ensure-naming-structure', false);
}
{
    ($module)['rename-definition'] = function B2990(identifier__2991, env__2992) {
        var new_identifier__2993 = B2980['first'](($module)['rename-identifiers']([identifier__2991], env__2992));
        {
            B2980['get-setter'](env__2992, 'original-identifier', B2980['symbol-name'](new_identifier__2993), identifier__2991);
            return(new_identifier__2993);
        }
    };
    B2980['%annotate-function'](($module)['rename-definition'], 'rename-definition', false);
}
{
    ($module)['rename-identifiers'] = function B2997(identifiers__2998, env__2999) {
        return(B2980['map'](function B3000(identifier__3001) {
            if (($T)(B2982['special-symbol?'](identifier__3001)))
                return(identifier__3001);
            else {
                var B3002 = B2980['destructure-symbol'](identifier__3001);
                {
                    var name__3003 = B3002[0];
                    {
                        var module_name__3004 = B3002[1];
                        {
                            if (($T)(B2980['not'](module_name__3004)))
                                module_name__3004 = B2980['get'](env__2999, 'module', 'name');
                            {
                                var B3006 = B2980['generate-symbol'];
                                {
                                    var B3007 = false;
                                    if (($T)(B2980['not'](B2980['get'](identifier__3001, 'generated?'))))
                                        B3007 = name__3003;
                                    else
                                        B3007 = false;
                                    {
                                        var identifierT__3005 = B3006(env__2999, B3007);
                                        {
                                            ($module)['ensure-naming-structure'](env__2999, module_name__3004, name__3003);
                                            {
                                                B2980['push'](B2980['get'](env__2999, 'identifiers', module_name__3004, name__3003), identifierT__3005);
                                                return(identifierT__3005);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, identifiers__2998));
    };
    B2980['%annotate-function'](($module)['rename-identifiers'], 'rename-identifiers', false);
}
{
    ($module)['restore-identifiers'] = function B3016(identifiers__3017, env__3018) {
        var B3019 = identifiers__3017;
        {
            var B3020 = false;
            {
                var B3021 = false;
                {
                    var B3022 = [B3019];
                    {
                        while (true) {
                            var B3030 = B2980['not'];
                            {
                                var B3023 = B3020;
                                {
                                    var B3031 = false;
                                    if (($T)(B3023))
                                        B3031 = B3023;
                                    else
                                        B3031 = B2980['any?'](B2980['empty?'], B3022);
                                    {
                                        var B3032 = B3030(B3031);
                                        if (($T)(B3032)) {
                                            var identifier__3024 = B2980['first'](B3019);
                                            {
                                                (function B3025(identifier__3026) {
                                                    if (($T)(B2980['not'](B2982['special-symbol?'](identifier__3026)))) {
                                                        var B3027 = B2980['destructure-symbol'](identifier__3026);
                                                        {
                                                            var name__3028 = B3027[0];
                                                            {
                                                                var module_name__3029 = B3027[1];
                                                                {
                                                                    if (($T)(B2980['not'](module_name__3029)))
                                                                        module_name__3029 = B2980['get'](env__3018, 'module', 'name');
                                                                    return(B2980['pop'](B2980['get'](env__3018, 'identifiers', module_name__3029, name__3028)));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(false);
                                                }(identifier__3024));
                                                {
                                                    B3019 = B2980['rest'](B3019);
                                                    B3022 = [B3019];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        return(B3021);
                    }
                }
            }
        }
    };
    B2980['%annotate-function'](($module)['restore-identifiers'], 'restore-identifiers', false);
}
{
    ($module)['find-identifier'] = function B3035(identifier__3036, env__3037) {
        if (($T)(B2982['special-symbol?'](identifier__3036)))
            return(identifier__3036);
        else {
            var B3038 = B2980['destructure-symbol'](identifier__3036);
            {
                var name__3039 = B3038[0];
                {
                    var module_name__3040 = B3038[1];
                    {
                        if (($T)(B2980['not'](module_name__3040)))
                            module_name__3040 = B2980['get'](env__3037, 'module', 'name');
                        {
                            var renamings__3041 = B2980['get'](env__3037, 'identifiers', module_name__3040, name__3039);
                            {
                                var B3042 = false;
                                if (($T)(renamings__3041))
                                    B3042 = B2980['not'](B2980['empty?'](renamings__3041));
                                else
                                    B3042 = false;
                                if (($T)(B3042))
                                    return(B2980['first'](renamings__3041));
                                else
                                    return(false);
                            }
                        }
                    }
                }
            }
        }
    };
    B2980['%annotate-function'](($module)['find-identifier'], 'find-identifier', false);
}
{
    {
        ($module)['alpha-convert-form'] = function B3044(exp__3045, env__3046) {
            return(($module)['alpha-convert'](exp__3045, env__3046, B2980['identity']));
        };
        ($module)['%export']('alpha-convert-form', ($module)['alpha-convert-form']);
    }
    B2980['%annotate-function'](($module)['alpha-convert-form'], 'alpha-convert-form', false);
}
{
    var B3073 = $S('%bind', 'ralph/core');
    {
        var B3074 = $S('%method', 'ralph/core');
        {
            var B3075 = $S('%try', 'ralph/core');
            {
                ($module)['alpha-convert'] = function B3076(exp__3077, env__3078, k__3079) {
                    var B3080 = exp__3077;
                    if (($T)(B2980['instance?'](B3080, B2980['<array>']))) {
                        var B3081 = B2980['symbol-name'](B2980['first'](exp__3077));
                        if (($T)(B2980['=='](B3081, '%quote')))
                            return(k__3079(exp__3077));
                        else if (($T)(B2980['=='](B3081, '%bind'))) {
                            var ____3082 = exp__3077[0];
                            {
                                var B3083 = exp__3077[1];
                                {
                                    var identifier__3084 = B3083[0];
                                    {
                                        var value__3085 = B3083[1];
                                        {
                                            var form__3086 = exp__3077[2];
                                            return(($module)['alpha-convert'](value__3085, env__3078, function B3087(valueT__3088) {
                                                var B3089 = ($module)['rename-identifiers']([identifier__3084], env__3078);
                                                {
                                                    var identifierT__3090 = B3089[0];
                                                    return(($module)['alpha-convert'](form__3086, env__3078, function B3091(formT__3092) {
                                                        ($module)['restore-identifiers']([identifier__3084], env__3078);
                                                        return(k__3079([
                                                            B3073,
                                                            [
                                                                identifierT__3090,
                                                                valueT__3088
                                                            ],
                                                            formT__3092
                                                        ]));
                                                    }));
                                                }
                                            }));
                                        }
                                    }
                                }
                            }
                        } else if (($T)(B2980['=='](B3081, '%method'))) {
                            var ____3093 = exp__3077[0];
                            {
                                var name__3094 = exp__3077[1];
                                {
                                    var parameters__3095 = exp__3077[2];
                                    {
                                        var form__3096 = exp__3077[3];
                                        {
                                            var identifiers__3097 = B2980['cons'](name__3094, parameters__3095);
                                            {
                                                var B3098 = ($module)['rename-identifiers'](identifiers__3097, env__3078);
                                                {
                                                    var nameT__3099 = B3098[0];
                                                    {
                                                        var parametersT__3100 = $SL.call(B3098, 1);
                                                        return(($module)['alpha-convert'](form__3096, env__3078, function B3101(formT__3102) {
                                                            ($module)['restore-identifiers'](identifiers__3097, env__3078);
                                                            return(k__3079([
                                                                B3074,
                                                                nameT__3099,
                                                                parametersT__3100,
                                                                formT__3102
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
                            var B3103 = B2980['=='](B3081, '%set');
                            {
                                var B3137 = false;
                                if (($T)(B3103))
                                    B3137 = B3103;
                                else {
                                    var B3104 = B2980['=='](B3081, '%if');
                                    if (($T)(B3104))
                                        B3137 = B3104;
                                    else {
                                        var B3105 = B2980['=='](B3081, '%begin');
                                        if (($T)(B3105))
                                            B3137 = B3105;
                                        else {
                                            var B3106 = B2980['=='](B3081, '%while');
                                            if (($T)(B3106))
                                                B3137 = B3106;
                                            else {
                                                var B3107 = B2980['=='](B3081, '%native');
                                                if (($T)(B3107))
                                                    B3137 = B3107;
                                                else {
                                                    var B3108 = B2980['=='](B3081, '%native-call');
                                                    if (($T)(B3108))
                                                        B3137 = B3108;
                                                    else {
                                                        var B3109 = B2980['=='](B3081, '%infix');
                                                        if (($T)(B3109))
                                                            B3137 = B3109;
                                                        else {
                                                            var B3110 = B2980['=='](B3081, '%object');
                                                            if (($T)(B3110))
                                                                B3137 = B3110;
                                                            else {
                                                                var B3111 = B2980['=='](B3081, '%array');
                                                                if (($T)(B3111))
                                                                    B3137 = B3111;
                                                                else
                                                                    B3137 = B2980['=='](B3081, '%get-property');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (($T)(B3137)) {
                                    var op__3112 = exp__3077[0];
                                    {
                                        var arguments__3113 = $SL.call(exp__3077, 1);
                                        return(($module)['alpha-convert*'](arguments__3113, env__3078, function B3114(argumentsT__3115) {
                                            return(k__3079(B2980['cons'](op__3112, argumentsT__3115)));
                                        }));
                                    }
                                } else {
                                    var B3116 = B2980['=='](B3081, '%define');
                                    {
                                        var B3138 = false;
                                        if (($T)(B3116))
                                            B3138 = B3116;
                                        else
                                            B3138 = B2980['=='](B3081, '%var');
                                        if (($T)(B3138)) {
                                            var op__3117 = exp__3077[0];
                                            {
                                                var identifier__3118 = exp__3077[1];
                                                {
                                                    var value__3119 = exp__3077[2];
                                                    return(($module)['alpha-convert'](value__3119, env__3078, function B3120(valueT__3121) {
                                                        var B3122 = ($module)['find-identifier'](identifier__3118, env__3078);
                                                        {
                                                            var identifierT__3123 = false;
                                                            if (($T)(B3122))
                                                                identifierT__3123 = B3122;
                                                            else
                                                                identifierT__3123 = B2981['qualify-symbol'](identifier__3118, env__3078);
                                                            return(k__3079([
                                                                op__3117,
                                                                identifierT__3123,
                                                                valueT__3121
                                                            ]));
                                                        }
                                                    }));
                                                }
                                            }
                                        } else if (($T)(B2980['=='](B3081, '%try'))) {
                                            var ____3124 = exp__3077[0];
                                            {
                                                var protected_form__3125 = exp__3077[1];
                                                {
                                                    var identifier__3126 = exp__3077[2];
                                                    {
                                                        var handling_form__3127 = exp__3077[3];
                                                        return(($module)['alpha-convert'](protected_form__3125, env__3078, function B3128(protected_formT__3129) {
                                                            var B3130 = ($module)['rename-identifiers']([identifier__3126], env__3078);
                                                            {
                                                                var identifierT__3131 = B3130[0];
                                                                return(($module)['alpha-convert'](handling_form__3127, env__3078, function B3132(handling_formT__3133) {
                                                                    ($module)['restore-identifiers']([identifier__3126], env__3078);
                                                                    return(k__3079([
                                                                        B3075,
                                                                        protected_formT__3129,
                                                                        identifierT__3131,
                                                                        handling_formT__3133
                                                                    ]));
                                                                }));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        } else
                                            return(($module)['alpha-convert**'](exp__3077, env__3078, k__3079));
                                    }
                                }
                            }
                        }
                    } else if (($T)(B2980['instance?'](B3080, B2980['<symbol>']))) {
                        var B3134 = ($module)['find-identifier'](exp__3077, env__3078);
                        if (($T)(B3134)) {
                            var identifier__3135 = B3134;
                            return(k__3079(identifier__3135));
                        } else {
                            var symbol__3136 = B2981['resolve-symbol'](exp__3077, env__3078);
                            if (($T)(B2980['=='](B2980['get'](symbol__3136, 'module'), B2980['get'](env__3078, 'module', 'name'))))
                                return(k__3079(symbol__3136));
                            else
                                return(($module)['convert-free-variable'](symbol__3136, env__3078, k__3079));
                        }
                    } else
                        return(k__3079(exp__3077));
                };
                B2980['%annotate-function'](($module)['alpha-convert'], 'alpha-convert', false);
            }
        }
    }
}
{
    var B3140 = $S('%get-property', 'ralph/core');
    {
        ($module)['make-external-reference'] = function B3141(name__3142, module_name__3143, env__3144) {
            return([
                B3140,
                B2981['find-import-identifier'](module_name__3143, env__3144),
                name__3142
            ]);
        };
        B2980['%annotate-function'](($module)['make-external-reference'], 'make-external-reference', false);
    }
}
{
    var B3149 = $S('%begin', 'ralph/core');
    {
        ($module)['convert-free-variable'] = function B3150(symbol__3151, env__3152, k__3153) {
            var B3154 = B2980['destructure-symbol'](symbol__3151);
            {
                var name__3155 = B3154[0];
                {
                    var module_name__3156 = B3154[1];
                    {
                        var B3157 = B2981['find-import-identifier'](module_name__3156, env__3152);
                        if (($T)(B3157)) {
                            var import_identifier__3158 = B3157;
                            {
                                var reference__3159 = ($module)['make-external-reference'](name__3155, module_name__3156, env__3152);
                                return(($module)['alpha-convert'](reference__3159, env__3152, k__3153));
                            }
                        } else
                            return(($module)['alpha-convert*']([
                                B2981['make-import-definition'](module_name__3156, env__3152),
                                ($module)['make-external-reference'](name__3155, module_name__3156, env__3152)
                            ], env__3152, function B3160(formsT__3161) {
                                var importT__3162 = formsT__3161[0];
                                {
                                    var referenceT__3163 = formsT__3161[1];
                                    return([
                                        B3149,
                                        importT__3162,
                                        k__3153(referenceT__3163)
                                    ]);
                                }
                            }));
                    }
                }
            }
        };
        B2980['%annotate-function'](($module)['convert-free-variable'], 'convert-free-variable', false);
    }
}
{
    ($module)['alpha-convert*'] = function B3165(expT__3166, env__3167, k__3168) {
        if (($T)(B2980['empty?'](expT__3166)))
            return(k__3168([]));
        else
            return(($module)['alpha-convert**'](expT__3166, env__3167, k__3168));
    };
    B2980['%annotate-function'](($module)['alpha-convert*'], 'alpha-convert*', false);
}
{
    ($module)['alpha-convert**'] = function B3172(exp__3173, env__3174, k__3175) {
        return(($module)['alpha-convert'](B2980['first'](exp__3173), env__3174, function B3176(t__3177) {
            return(($module)['alpha-convert*'](B2980['rest'](exp__3173), env__3174, function B3178(tT__3179) {
                return(k__3175(B2980['cons'](t__3177, tT__3179)));
            }));
        }));
    };
    B2980['%annotate-function'](($module)['alpha-convert**'], 'alpha-convert**', false);
}
