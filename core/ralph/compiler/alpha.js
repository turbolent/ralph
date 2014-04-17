require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2985(name__2986, value__2987) {
            var B2989 = (exports);
            return(B2989[name__2986] = value__2987);
        };
        {
            ($module)['%eval'] = function B2988() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2990 = require('ralph/core');
{
    var B2991 = require('ralph/compiler/environment');
    var B2992 = require('ralph/compiler/utilities');
}
{
    ($module)['ensure-naming-structure'] = function B2994(env__2995, module_name__2996, name__2997) {
        if (($T)(B2990['not'](B2990['get'](env__2995, 'identifiers', module_name__2996))))
            B2990['get-setter'](env__2995, 'identifiers', module_name__2996, B2990['make-object']());
        {
            var module_renamings__2998 = B2990['get'](env__2995, 'identifiers', module_name__2996);
            {
                if (($T)(B2990['not'](B2990['get'](module_renamings__2998, name__2997))))
                    B2990['get-setter'](module_renamings__2998, name__2997, []);
                return(env__2995);
            }
        }
    };
    B2990['%annotate-function'](($module)['ensure-naming-structure'], 'ensure-naming-structure', false);
}
{
    ($module)['rename-definition'] = function B3000(identifier__3001, env__3002) {
        var new_identifier__3003 = B2990['first'](($module)['rename-identifiers']([identifier__3001], env__3002));
        {
            B2990['get-setter'](env__3002, 'original-identifier', B2990['symbol-name'](new_identifier__3003), identifier__3001);
            return(new_identifier__3003);
        }
    };
    B2990['%annotate-function'](($module)['rename-definition'], 'rename-definition', false);
}
{
    ($module)['rename-identifiers'] = function B3007(identifiers__3008, env__3009) {
        return(B2990['map'](function B3010(identifier__3011) {
            if (($T)(B2992['special-symbol?'](identifier__3011)))
                return(identifier__3011);
            else {
                var B3012 = B2990['destructure-symbol'](identifier__3011);
                {
                    var name__3013 = B3012[0];
                    {
                        var module_name__3014 = B3012[1];
                        {
                            if (($T)(B2990['not'](module_name__3014)))
                                module_name__3014 = B2990['get'](env__3009, 'module', 'name');
                            {
                                var B3016 = B2990['generate-symbol'];
                                {
                                    var B3017 = false;
                                    if (($T)(B2990['not'](B2990['get'](identifier__3011, 'generated?'))))
                                        B3017 = name__3013;
                                    else
                                        B3017 = false;
                                    {
                                        var identifierT__3015 = B3016(env__3009, B3017);
                                        {
                                            ($module)['ensure-naming-structure'](env__3009, module_name__3014, name__3013);
                                            {
                                                B2990['push'](B2990['get'](env__3009, 'identifiers', module_name__3014, name__3013), identifierT__3015);
                                                return(identifierT__3015);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, identifiers__3008));
    };
    B2990['%annotate-function'](($module)['rename-identifiers'], 'rename-identifiers', false);
}
{
    ($module)['restore-identifiers'] = function B3026(identifiers__3027, env__3028) {
        var B3029 = identifiers__3027;
        {
            var B3030 = false;
            {
                var B3031 = false;
                {
                    var B3032 = [B3029];
                    {
                        while (true) {
                            var B3040 = B2990['not'];
                            {
                                var B3033 = B3030;
                                {
                                    var B3041 = false;
                                    if (($T)(B3033))
                                        B3041 = B3033;
                                    else
                                        B3041 = B2990['any?'](B2990['empty?'], B3032);
                                    {
                                        var B3042 = B3040(B3041);
                                        if (($T)(B3042)) {
                                            var identifier__3034 = B2990['first'](B3029);
                                            {
                                                (function B3035(identifier__3036) {
                                                    if (($T)(B2990['not'](B2992['special-symbol?'](identifier__3036)))) {
                                                        var B3037 = B2990['destructure-symbol'](identifier__3036);
                                                        {
                                                            var name__3038 = B3037[0];
                                                            {
                                                                var module_name__3039 = B3037[1];
                                                                {
                                                                    if (($T)(B2990['not'](module_name__3039)))
                                                                        module_name__3039 = B2990['get'](env__3028, 'module', 'name');
                                                                    return(B2990['pop'](B2990['get'](env__3028, 'identifiers', module_name__3039, name__3038)));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(false);
                                                }(identifier__3034));
                                                {
                                                    B3029 = B2990['rest'](B3029);
                                                    B3032 = [B3029];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        return(B3031);
                    }
                }
            }
        }
    };
    B2990['%annotate-function'](($module)['restore-identifiers'], 'restore-identifiers', false);
}
{
    ($module)['find-identifier'] = function B3045(identifier__3046, env__3047) {
        if (($T)(B2992['special-symbol?'](identifier__3046)))
            return(identifier__3046);
        else {
            var B3048 = B2990['destructure-symbol'](identifier__3046);
            {
                var name__3049 = B3048[0];
                {
                    var module_name__3050 = B3048[1];
                    {
                        if (($T)(B2990['not'](module_name__3050)))
                            module_name__3050 = B2990['get'](env__3047, 'module', 'name');
                        {
                            var renamings__3051 = B2990['get'](env__3047, 'identifiers', module_name__3050, name__3049);
                            {
                                var B3052 = false;
                                if (($T)(renamings__3051))
                                    B3052 = B2990['not'](B2990['empty?'](renamings__3051));
                                else
                                    B3052 = false;
                                if (($T)(B3052))
                                    return(B2990['first'](renamings__3051));
                                else
                                    return(false);
                            }
                        }
                    }
                }
            }
        }
    };
    B2990['%annotate-function'](($module)['find-identifier'], 'find-identifier', false);
}
{
    {
        ($module)['alpha-convert-form'] = function B3054(exp__3055, env__3056) {
            return(($module)['alpha-convert'](exp__3055, env__3056, B2990['identity']));
        };
        ($module)['%export']('alpha-convert-form', ($module)['alpha-convert-form']);
    }
    B2990['%annotate-function'](($module)['alpha-convert-form'], 'alpha-convert-form', false);
}
{
    var B3083 = $S('%bind', 'ralph/core');
    {
        var B3084 = $S('%method', 'ralph/core');
        {
            var B3085 = $S('%try', 'ralph/core');
            {
                ($module)['alpha-convert'] = function B3086(exp__3087, env__3088, k__3089) {
                    var B3090 = exp__3087;
                    if (($T)(B2990['instance?'](B3090, B2990['<array>']))) {
                        var B3091 = B2990['symbol-name'](B2990['first'](exp__3087));
                        if (($T)(B2990['=='](B3091, '%quote')))
                            return(k__3089(exp__3087));
                        else if (($T)(B2990['=='](B3091, '%bind'))) {
                            var ____3092 = exp__3087[0];
                            {
                                var B3093 = exp__3087[1];
                                {
                                    var identifier__3094 = B3093[0];
                                    {
                                        var value__3095 = B3093[1];
                                        {
                                            var form__3096 = exp__3087[2];
                                            return(($module)['alpha-convert'](value__3095, env__3088, function B3097(valueT__3098) {
                                                var B3099 = ($module)['rename-identifiers']([identifier__3094], env__3088);
                                                {
                                                    var identifierT__3100 = B3099[0];
                                                    return(($module)['alpha-convert'](form__3096, env__3088, function B3101(formT__3102) {
                                                        ($module)['restore-identifiers']([identifier__3094], env__3088);
                                                        return(k__3089([
                                                            B3083,
                                                            [
                                                                identifierT__3100,
                                                                valueT__3098
                                                            ],
                                                            formT__3102
                                                        ]));
                                                    }));
                                                }
                                            }));
                                        }
                                    }
                                }
                            }
                        } else if (($T)(B2990['=='](B3091, '%method'))) {
                            var ____3103 = exp__3087[0];
                            {
                                var name__3104 = exp__3087[1];
                                {
                                    var parameters__3105 = exp__3087[2];
                                    {
                                        var form__3106 = exp__3087[3];
                                        {
                                            var identifiers__3107 = B2990['cons'](name__3104, parameters__3105);
                                            {
                                                var B3108 = ($module)['rename-identifiers'](identifiers__3107, env__3088);
                                                {
                                                    var nameT__3109 = B3108[0];
                                                    {
                                                        var parametersT__3110 = $SL.call(B3108, 1);
                                                        return(($module)['alpha-convert'](form__3106, env__3088, function B3111(formT__3112) {
                                                            ($module)['restore-identifiers'](identifiers__3107, env__3088);
                                                            return(k__3089([
                                                                B3084,
                                                                nameT__3109,
                                                                parametersT__3110,
                                                                formT__3112
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
                            var B3113 = B2990['=='](B3091, '%set');
                            {
                                var B3147 = false;
                                if (($T)(B3113))
                                    B3147 = B3113;
                                else {
                                    var B3114 = B2990['=='](B3091, '%if');
                                    if (($T)(B3114))
                                        B3147 = B3114;
                                    else {
                                        var B3115 = B2990['=='](B3091, '%begin');
                                        if (($T)(B3115))
                                            B3147 = B3115;
                                        else {
                                            var B3116 = B2990['=='](B3091, '%while');
                                            if (($T)(B3116))
                                                B3147 = B3116;
                                            else {
                                                var B3117 = B2990['=='](B3091, '%native');
                                                if (($T)(B3117))
                                                    B3147 = B3117;
                                                else {
                                                    var B3118 = B2990['=='](B3091, '%native-call');
                                                    if (($T)(B3118))
                                                        B3147 = B3118;
                                                    else {
                                                        var B3119 = B2990['=='](B3091, '%infix');
                                                        if (($T)(B3119))
                                                            B3147 = B3119;
                                                        else {
                                                            var B3120 = B2990['=='](B3091, '%object');
                                                            if (($T)(B3120))
                                                                B3147 = B3120;
                                                            else {
                                                                var B3121 = B2990['=='](B3091, '%array');
                                                                if (($T)(B3121))
                                                                    B3147 = B3121;
                                                                else
                                                                    B3147 = B2990['=='](B3091, '%get-property');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (($T)(B3147)) {
                                    var op__3122 = exp__3087[0];
                                    {
                                        var arguments__3123 = $SL.call(exp__3087, 1);
                                        return(($module)['alpha-convert*'](arguments__3123, env__3088, function B3124(argumentsT__3125) {
                                            return(k__3089(B2990['cons'](op__3122, argumentsT__3125)));
                                        }));
                                    }
                                } else {
                                    var B3126 = B2990['=='](B3091, '%define');
                                    {
                                        var B3148 = false;
                                        if (($T)(B3126))
                                            B3148 = B3126;
                                        else
                                            B3148 = B2990['=='](B3091, '%var');
                                        if (($T)(B3148)) {
                                            var op__3127 = exp__3087[0];
                                            {
                                                var identifier__3128 = exp__3087[1];
                                                {
                                                    var value__3129 = exp__3087[2];
                                                    return(($module)['alpha-convert'](value__3129, env__3088, function B3130(valueT__3131) {
                                                        var B3132 = ($module)['find-identifier'](identifier__3128, env__3088);
                                                        {
                                                            var identifierT__3133 = false;
                                                            if (($T)(B3132))
                                                                identifierT__3133 = B3132;
                                                            else
                                                                identifierT__3133 = B2991['qualify-symbol'](identifier__3128, env__3088);
                                                            return(k__3089([
                                                                op__3127,
                                                                identifierT__3133,
                                                                valueT__3131
                                                            ]));
                                                        }
                                                    }));
                                                }
                                            }
                                        } else if (($T)(B2990['=='](B3091, '%try'))) {
                                            var ____3134 = exp__3087[0];
                                            {
                                                var protected_form__3135 = exp__3087[1];
                                                {
                                                    var identifier__3136 = exp__3087[2];
                                                    {
                                                        var handling_form__3137 = exp__3087[3];
                                                        return(($module)['alpha-convert'](protected_form__3135, env__3088, function B3138(protected_formT__3139) {
                                                            var B3140 = ($module)['rename-identifiers']([identifier__3136], env__3088);
                                                            {
                                                                var identifierT__3141 = B3140[0];
                                                                return(($module)['alpha-convert'](handling_form__3137, env__3088, function B3142(handling_formT__3143) {
                                                                    ($module)['restore-identifiers']([identifier__3136], env__3088);
                                                                    return(k__3089([
                                                                        B3085,
                                                                        protected_formT__3139,
                                                                        identifierT__3141,
                                                                        handling_formT__3143
                                                                    ]));
                                                                }));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        } else
                                            return(($module)['alpha-convert**'](exp__3087, env__3088, k__3089));
                                    }
                                }
                            }
                        }
                    } else if (($T)(B2990['instance?'](B3090, B2990['<symbol>']))) {
                        var B3144 = ($module)['find-identifier'](exp__3087, env__3088);
                        if (($T)(B3144)) {
                            var identifier__3145 = B3144;
                            return(k__3089(identifier__3145));
                        } else {
                            var symbol__3146 = B2991['resolve-symbol'](exp__3087, env__3088);
                            if (($T)(B2990['=='](B2990['get'](symbol__3146, 'module'), B2990['get'](env__3088, 'module', 'name'))))
                                return(k__3089(symbol__3146));
                            else
                                return(($module)['convert-free-variable'](symbol__3146, env__3088, k__3089));
                        }
                    } else
                        return(k__3089(exp__3087));
                };
                B2990['%annotate-function'](($module)['alpha-convert'], 'alpha-convert', false);
            }
        }
    }
}
{
    var B3150 = $S('%get-property', 'ralph/core');
    {
        ($module)['make-external-reference'] = function B3151(name__3152, module_name__3153, env__3154) {
            return([
                B3150,
                B2991['find-import-identifier'](module_name__3153, env__3154),
                name__3152
            ]);
        };
        B2990['%annotate-function'](($module)['make-external-reference'], 'make-external-reference', false);
    }
}
{
    var B3159 = $S('%begin', 'ralph/core');
    {
        ($module)['convert-free-variable'] = function B3160(symbol__3161, env__3162, k__3163) {
            var B3164 = B2990['destructure-symbol'](symbol__3161);
            {
                var name__3165 = B3164[0];
                {
                    var module_name__3166 = B3164[1];
                    {
                        var B3167 = B2991['find-import-identifier'](module_name__3166, env__3162);
                        if (($T)(B3167)) {
                            var import_identifier__3168 = B3167;
                            {
                                var reference__3169 = ($module)['make-external-reference'](name__3165, module_name__3166, env__3162);
                                return(($module)['alpha-convert'](reference__3169, env__3162, k__3163));
                            }
                        } else
                            return(($module)['alpha-convert*']([
                                B2991['make-import-definition'](module_name__3166, env__3162),
                                ($module)['make-external-reference'](name__3165, module_name__3166, env__3162)
                            ], env__3162, function B3170(formsT__3171) {
                                var importT__3172 = formsT__3171[0];
                                {
                                    var referenceT__3173 = formsT__3171[1];
                                    return([
                                        B3159,
                                        importT__3172,
                                        k__3163(referenceT__3173)
                                    ]);
                                }
                            }));
                    }
                }
            }
        };
        B2990['%annotate-function'](($module)['convert-free-variable'], 'convert-free-variable', false);
    }
}
{
    ($module)['alpha-convert*'] = function B3175(expT__3176, env__3177, k__3178) {
        if (($T)(B2990['empty?'](expT__3176)))
            return(k__3178([]));
        else
            return(($module)['alpha-convert**'](expT__3176, env__3177, k__3178));
    };
    B2990['%annotate-function'](($module)['alpha-convert*'], 'alpha-convert*', false);
}
{
    ($module)['alpha-convert**'] = function B3182(exp__3183, env__3184, k__3185) {
        return(($module)['alpha-convert'](B2990['first'](exp__3183), env__3184, function B3186(t__3187) {
            return(($module)['alpha-convert*'](B2990['rest'](exp__3183), env__3184, function B3188(tT__3189) {
                return(k__3185(B2990['cons'](t__3187, tT__3189)));
            }));
        }));
    };
    B2990['%annotate-function'](($module)['alpha-convert**'], 'alpha-convert**', false);
}
