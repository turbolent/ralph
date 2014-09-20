require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2987(name__2988, value__2989) {
            var B2991 = (exports);
            return(B2991[name__2988] = value__2989);
        };
        {
            ($module)['%eval'] = function B2990() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2992 = require('ralph/core');
{
    var B2993 = require('ralph/compiler/environment');
    var B2994 = require('ralph/compiler/utilities');
}
{
    ($module)['ensure-naming-structure'] = function B2996(env__2997, module_name__2998, name__2999) {
        if (($T)(B2992['not'](B2992['get'](env__2997, 'identifiers', module_name__2998))))
            B2992['get-setter'](env__2997, 'identifiers', module_name__2998, B2992['make-object']());
        {
            var module_renamings__3000 = B2992['get'](env__2997, 'identifiers', module_name__2998);
            {
                if (($T)(B2992['not'](B2992['get'](module_renamings__3000, name__2999))))
                    B2992['get-setter'](module_renamings__3000, name__2999, []);
                return(env__2997);
            }
        }
    };
    B2992['%annotate-function'](($module)['ensure-naming-structure'], 'ensure-naming-structure', false);
}
{
    ($module)['rename-definition'] = function B3002(identifier__3003, env__3004) {
        var new_identifier__3005 = B2992['first'](($module)['rename-identifiers']([identifier__3003], env__3004));
        {
            B2992['get-setter'](env__3004, 'original-identifier', B2992['symbol-name'](new_identifier__3005), identifier__3003);
            return(new_identifier__3005);
        }
    };
    B2992['%annotate-function'](($module)['rename-definition'], 'rename-definition', false);
}
{
    ($module)['rename-identifiers'] = function B3009(identifiers__3010, env__3011) {
        return(B2992['map'](function B3012(identifier__3013) {
            if (($T)(B2994['special-symbol?'](identifier__3013)))
                return(identifier__3013);
            else {
                var B3014 = B2992['destructure-symbol'](identifier__3013);
                {
                    var name__3015 = B3014[0];
                    {
                        var module_name__3016 = B3014[1];
                        {
                            if (($T)(B2992['not'](module_name__3016)))
                                module_name__3016 = B2992['get'](env__3011, 'module', 'name');
                            {
                                var B3018 = B2992['generate-symbol'];
                                {
                                    var B3019 = false;
                                    if (($T)(B2992['not'](B2992['get'](identifier__3013, 'generated?'))))
                                        B3019 = name__3015;
                                    else
                                        B3019 = false;
                                    {
                                        var identifierT__3017 = B3018(env__3011, B3019);
                                        {
                                            ($module)['ensure-naming-structure'](env__3011, module_name__3016, name__3015);
                                            {
                                                B2992['push'](B2992['get'](env__3011, 'identifiers', module_name__3016, name__3015), identifierT__3017);
                                                return(identifierT__3017);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, identifiers__3010));
    };
    B2992['%annotate-function'](($module)['rename-identifiers'], 'rename-identifiers', false);
}
{
    ($module)['restore-identifiers'] = function B3028(identifiers__3029, env__3030) {
        var B3031 = identifiers__3029;
        {
            var B3032 = false;
            {
                var B3033 = false;
                {
                    var B3034 = [B3031];
                    {
                        while (true) {
                            var B3042 = B2992['not'];
                            {
                                var B3035 = B3032;
                                {
                                    var B3043 = false;
                                    if (($T)(B3035))
                                        B3043 = B3035;
                                    else
                                        B3043 = B2992['any?'](B2992['empty?'], B3034);
                                    {
                                        var B3044 = B3042(B3043);
                                        if (($T)(B3044)) {
                                            var identifier__3036 = B2992['first'](B3031);
                                            {
                                                (function B3037(identifier__3038) {
                                                    if (($T)(B2992['not'](B2994['special-symbol?'](identifier__3038)))) {
                                                        var B3039 = B2992['destructure-symbol'](identifier__3038);
                                                        {
                                                            var name__3040 = B3039[0];
                                                            {
                                                                var module_name__3041 = B3039[1];
                                                                {
                                                                    if (($T)(B2992['not'](module_name__3041)))
                                                                        module_name__3041 = B2992['get'](env__3030, 'module', 'name');
                                                                    return(B2992['pop'](B2992['get'](env__3030, 'identifiers', module_name__3041, name__3040)));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(false);
                                                }(identifier__3036));
                                                {
                                                    B3031 = B2992['rest'](B3031);
                                                    B3034 = [B3031];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        return(B3033);
                    }
                }
            }
        }
    };
    B2992['%annotate-function'](($module)['restore-identifiers'], 'restore-identifiers', false);
}
{
    ($module)['find-identifier'] = function B3047(identifier__3048, env__3049) {
        if (($T)(B2994['special-symbol?'](identifier__3048)))
            return(identifier__3048);
        else {
            var B3050 = B2992['destructure-symbol'](identifier__3048);
            {
                var name__3051 = B3050[0];
                {
                    var module_name__3052 = B3050[1];
                    {
                        if (($T)(B2992['not'](module_name__3052)))
                            module_name__3052 = B2992['get'](env__3049, 'module', 'name');
                        {
                            var renamings__3053 = B2992['get'](env__3049, 'identifiers', module_name__3052, name__3051);
                            {
                                var B3054 = false;
                                if (($T)(renamings__3053))
                                    B3054 = B2992['not'](B2992['empty?'](renamings__3053));
                                else
                                    B3054 = false;
                                if (($T)(B3054))
                                    return(B2992['first'](renamings__3053));
                                else
                                    return(false);
                            }
                        }
                    }
                }
            }
        }
    };
    B2992['%annotate-function'](($module)['find-identifier'], 'find-identifier', false);
}
{
    {
        ($module)['alpha-convert-form'] = function B3056(exp__3057, env__3058) {
            return(($module)['alpha-convert'](exp__3057, env__3058, B2992['identity']));
        };
        ($module)['%export']('alpha-convert-form', ($module)['alpha-convert-form']);
    }
    B2992['%annotate-function'](($module)['alpha-convert-form'], 'alpha-convert-form', false);
}
{
    var B3085 = $S('%bind', 'ralph/core');
    {
        var B3086 = $S('%method', 'ralph/core');
        {
            var B3087 = $S('%try', 'ralph/core');
            {
                ($module)['alpha-convert'] = function B3088(exp__3089, env__3090, k__3091) {
                    var B3092 = exp__3089;
                    if (($T)(B2992['instance?'](B3092, B2992['<array>']))) {
                        var B3093 = B2992['symbol-name'](B2992['first'](exp__3089));
                        if (($T)(B2992['=='](B3093, '%quote')))
                            return(k__3091(exp__3089));
                        else if (($T)(B2992['=='](B3093, '%bind'))) {
                            var ____3094 = exp__3089[0];
                            {
                                var B3095 = exp__3089[1];
                                {
                                    var identifier__3096 = B3095[0];
                                    {
                                        var value__3097 = B3095[1];
                                        {
                                            var form__3098 = exp__3089[2];
                                            return(($module)['alpha-convert'](value__3097, env__3090, function B3099(valueT__3100) {
                                                var B3101 = ($module)['rename-identifiers']([identifier__3096], env__3090);
                                                {
                                                    var identifierT__3102 = B3101[0];
                                                    return(($module)['alpha-convert'](form__3098, env__3090, function B3103(formT__3104) {
                                                        ($module)['restore-identifiers']([identifier__3096], env__3090);
                                                        return(k__3091([
                                                            B3085,
                                                            [
                                                                identifierT__3102,
                                                                valueT__3100
                                                            ],
                                                            formT__3104
                                                        ]));
                                                    }));
                                                }
                                            }));
                                        }
                                    }
                                }
                            }
                        } else if (($T)(B2992['=='](B3093, '%method'))) {
                            var ____3105 = exp__3089[0];
                            {
                                var name__3106 = exp__3089[1];
                                {
                                    var parameters__3107 = exp__3089[2];
                                    {
                                        var form__3108 = exp__3089[3];
                                        {
                                            var identifiers__3109 = B2992['cons'](name__3106, parameters__3107);
                                            {
                                                var B3110 = ($module)['rename-identifiers'](identifiers__3109, env__3090);
                                                {
                                                    var nameT__3111 = B3110[0];
                                                    {
                                                        var parametersT__3112 = $SL.call(B3110, 1);
                                                        return(($module)['alpha-convert'](form__3108, env__3090, function B3113(formT__3114) {
                                                            ($module)['restore-identifiers'](identifiers__3109, env__3090);
                                                            return(k__3091([
                                                                B3086,
                                                                nameT__3111,
                                                                parametersT__3112,
                                                                formT__3114
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
                            var B3115 = B2992['=='](B3093, '%set');
                            {
                                var B3149 = false;
                                if (($T)(B3115))
                                    B3149 = B3115;
                                else {
                                    var B3116 = B2992['=='](B3093, '%if');
                                    if (($T)(B3116))
                                        B3149 = B3116;
                                    else {
                                        var B3117 = B2992['=='](B3093, '%begin');
                                        if (($T)(B3117))
                                            B3149 = B3117;
                                        else {
                                            var B3118 = B2992['=='](B3093, '%while');
                                            if (($T)(B3118))
                                                B3149 = B3118;
                                            else {
                                                var B3119 = B2992['=='](B3093, '%native');
                                                if (($T)(B3119))
                                                    B3149 = B3119;
                                                else {
                                                    var B3120 = B2992['=='](B3093, '%native-call');
                                                    if (($T)(B3120))
                                                        B3149 = B3120;
                                                    else {
                                                        var B3121 = B2992['=='](B3093, '%infix');
                                                        if (($T)(B3121))
                                                            B3149 = B3121;
                                                        else {
                                                            var B3122 = B2992['=='](B3093, '%object');
                                                            if (($T)(B3122))
                                                                B3149 = B3122;
                                                            else {
                                                                var B3123 = B2992['=='](B3093, '%array');
                                                                if (($T)(B3123))
                                                                    B3149 = B3123;
                                                                else
                                                                    B3149 = B2992['=='](B3093, '%get-property');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (($T)(B3149)) {
                                    var op__3124 = exp__3089[0];
                                    {
                                        var arguments__3125 = $SL.call(exp__3089, 1);
                                        return(($module)['alpha-convert*'](arguments__3125, env__3090, function B3126(argumentsT__3127) {
                                            return(k__3091(B2992['cons'](op__3124, argumentsT__3127)));
                                        }));
                                    }
                                } else {
                                    var B3128 = B2992['=='](B3093, '%define');
                                    {
                                        var B3150 = false;
                                        if (($T)(B3128))
                                            B3150 = B3128;
                                        else
                                            B3150 = B2992['=='](B3093, '%var');
                                        if (($T)(B3150)) {
                                            var op__3129 = exp__3089[0];
                                            {
                                                var identifier__3130 = exp__3089[1];
                                                {
                                                    var value__3131 = exp__3089[2];
                                                    return(($module)['alpha-convert'](value__3131, env__3090, function B3132(valueT__3133) {
                                                        var B3134 = ($module)['find-identifier'](identifier__3130, env__3090);
                                                        {
                                                            var identifierT__3135 = false;
                                                            if (($T)(B3134))
                                                                identifierT__3135 = B3134;
                                                            else
                                                                identifierT__3135 = B2993['qualify-symbol'](identifier__3130, env__3090);
                                                            return(k__3091([
                                                                op__3129,
                                                                identifierT__3135,
                                                                valueT__3133
                                                            ]));
                                                        }
                                                    }));
                                                }
                                            }
                                        } else if (($T)(B2992['=='](B3093, '%try'))) {
                                            var ____3136 = exp__3089[0];
                                            {
                                                var protected_form__3137 = exp__3089[1];
                                                {
                                                    var identifier__3138 = exp__3089[2];
                                                    {
                                                        var handling_form__3139 = exp__3089[3];
                                                        return(($module)['alpha-convert'](protected_form__3137, env__3090, function B3140(protected_formT__3141) {
                                                            var B3142 = ($module)['rename-identifiers']([identifier__3138], env__3090);
                                                            {
                                                                var identifierT__3143 = B3142[0];
                                                                return(($module)['alpha-convert'](handling_form__3139, env__3090, function B3144(handling_formT__3145) {
                                                                    ($module)['restore-identifiers']([identifier__3138], env__3090);
                                                                    return(k__3091([
                                                                        B3087,
                                                                        protected_formT__3141,
                                                                        identifierT__3143,
                                                                        handling_formT__3145
                                                                    ]));
                                                                }));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        } else
                                            return(($module)['alpha-convert**'](exp__3089, env__3090, k__3091));
                                    }
                                }
                            }
                        }
                    } else if (($T)(B2992['instance?'](B3092, B2992['<symbol>']))) {
                        var B3146 = ($module)['find-identifier'](exp__3089, env__3090);
                        if (($T)(B3146)) {
                            var identifier__3147 = B3146;
                            return(k__3091(identifier__3147));
                        } else {
                            var symbol__3148 = B2993['resolve-symbol'](exp__3089, env__3090);
                            if (($T)(B2992['=='](B2992['get'](symbol__3148, 'module'), B2992['get'](env__3090, 'module', 'name'))))
                                return(k__3091(symbol__3148));
                            else
                                return(($module)['convert-free-variable'](symbol__3148, env__3090, k__3091));
                        }
                    } else
                        return(k__3091(exp__3089));
                };
                B2992['%annotate-function'](($module)['alpha-convert'], 'alpha-convert', false);
            }
        }
    }
}
{
    var B3152 = $S('%get-property', 'ralph/core');
    {
        ($module)['make-external-reference'] = function B3153(name__3154, module_name__3155, env__3156) {
            return([
                B3152,
                B2993['find-import-identifier'](module_name__3155, env__3156),
                name__3154
            ]);
        };
        B2992['%annotate-function'](($module)['make-external-reference'], 'make-external-reference', false);
    }
}
{
    var B3161 = $S('%begin', 'ralph/core');
    {
        ($module)['convert-free-variable'] = function B3162(symbol__3163, env__3164, k__3165) {
            var B3166 = B2992['destructure-symbol'](symbol__3163);
            {
                var name__3167 = B3166[0];
                {
                    var module_name__3168 = B3166[1];
                    {
                        var B3169 = B2993['find-import-identifier'](module_name__3168, env__3164);
                        if (($T)(B3169)) {
                            var import_identifier__3170 = B3169;
                            {
                                var reference__3171 = ($module)['make-external-reference'](name__3167, module_name__3168, env__3164);
                                return(($module)['alpha-convert'](reference__3171, env__3164, k__3165));
                            }
                        } else
                            return(($module)['alpha-convert*']([
                                B2993['make-import-definition'](module_name__3168, env__3164),
                                ($module)['make-external-reference'](name__3167, module_name__3168, env__3164)
                            ], env__3164, function B3172(formsT__3173) {
                                var importT__3174 = formsT__3173[0];
                                {
                                    var referenceT__3175 = formsT__3173[1];
                                    return([
                                        B3161,
                                        importT__3174,
                                        k__3165(referenceT__3175)
                                    ]);
                                }
                            }));
                    }
                }
            }
        };
        B2992['%annotate-function'](($module)['convert-free-variable'], 'convert-free-variable', false);
    }
}
{
    ($module)['alpha-convert*'] = function B3177(expT__3178, env__3179, k__3180) {
        if (($T)(B2992['empty?'](expT__3178)))
            return(k__3180([]));
        else
            return(($module)['alpha-convert**'](expT__3178, env__3179, k__3180));
    };
    B2992['%annotate-function'](($module)['alpha-convert*'], 'alpha-convert*', false);
}
{
    ($module)['alpha-convert**'] = function B3184(exp__3185, env__3186, k__3187) {
        return(($module)['alpha-convert'](B2992['first'](exp__3185), env__3186, function B3188(t__3189) {
            return(($module)['alpha-convert*'](B2992['rest'](exp__3185), env__3186, function B3190(tT__3191) {
                return(k__3187(B2992['cons'](t__3189, tT__3191)));
            }));
        }));
    };
    B2992['%annotate-function'](($module)['alpha-convert**'], 'alpha-convert**', false);
}
