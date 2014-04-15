{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B2949(name__2950, value__2951) {
            var B2953 = (exports);
            return(B2953[name__2950] = value__2951);
        };
        {
            ($module)['%eval'] = function B2952() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2954 = require('ralph/core');
{
    var B2955 = require('ralph/compiler/environment');
    var B2956 = require('ralph/compiler/utilities');
}
{
    ($module)['ensure-naming-structure'] = function B2958(env__2959, module_name__2960, name__2961) {
        if (($T)(B2954['not'](B2954['get'](env__2959, 'identifiers', module_name__2960))))
            B2954['get-setter'](env__2959, 'identifiers', module_name__2960, B2954['make-object']());
        {
            var module_renamings__2962 = B2954['get'](env__2959, 'identifiers', module_name__2960);
            {
                if (($T)(B2954['not'](B2954['get'](module_renamings__2962, name__2961))))
                    B2954['get-setter'](module_renamings__2962, name__2961, []);
                return(env__2959);
            }
        }
    };
    B2954['%annotate-function'](($module)['ensure-naming-structure'], 'ensure-naming-structure', false);
}
{
    ($module)['rename-definition'] = function B2964(identifier__2965, env__2966) {
        var new_identifier__2967 = B2954['first'](($module)['rename-identifiers']([identifier__2965], env__2966));
        {
            B2954['get-setter'](env__2966, 'original-identifier', B2954['symbol-name'](new_identifier__2967), identifier__2965);
            return(new_identifier__2967);
        }
    };
    B2954['%annotate-function'](($module)['rename-definition'], 'rename-definition', false);
}
{
    ($module)['rename-identifiers'] = function B2971(identifiers__2972, env__2973) {
        return(B2954['map'](function B2974(identifier__2975) {
            if (($T)(B2956['special-symbol?'](identifier__2975)))
                return(identifier__2975);
            else {
                var B2976 = B2954['destructure-symbol'](identifier__2975);
                {
                    var name__2977 = B2976[0];
                    {
                        var module_name__2978 = B2976[1];
                        {
                            if (($T)(B2954['not'](module_name__2978)))
                                module_name__2978 = B2954['get'](env__2973, 'module', 'name');
                            {
                                var B2980 = B2954['generate-symbol'];
                                {
                                    var B2981 = false;
                                    if (($T)(B2954['not'](B2954['get'](identifier__2975, 'generated?'))))
                                        B2981 = name__2977;
                                    else
                                        B2981 = false;
                                    {
                                        var identifierT__2979 = B2980(env__2973, B2981);
                                        {
                                            ($module)['ensure-naming-structure'](env__2973, module_name__2978, name__2977);
                                            {
                                                B2954['push'](B2954['get'](env__2973, 'identifiers', module_name__2978, name__2977), identifierT__2979);
                                                return(identifierT__2979);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, identifiers__2972));
    };
    B2954['%annotate-function'](($module)['rename-identifiers'], 'rename-identifiers', false);
}
{
    ($module)['restore-identifiers'] = function B2990(identifiers__2991, env__2992) {
        var B2993 = identifiers__2991;
        {
            var B2994 = false;
            {
                var B2995 = false;
                {
                    var B2996 = [B2993];
                    {
                        while (true) {
                            var B3004 = B2954['not'];
                            {
                                var B2997 = B2994;
                                {
                                    var B3005 = false;
                                    if (($T)(B2997))
                                        B3005 = B2997;
                                    else
                                        B3005 = B2954['any?'](B2954['empty?'], B2996);
                                    {
                                        var B3006 = B3004(B3005);
                                        if (($T)(B3006)) {
                                            var identifier__2998 = B2954['first'](B2993);
                                            {
                                                (function B2999(identifier__3000) {
                                                    if (($T)(B2954['not'](B2956['special-symbol?'](identifier__3000)))) {
                                                        var B3001 = B2954['destructure-symbol'](identifier__3000);
                                                        {
                                                            var name__3002 = B3001[0];
                                                            {
                                                                var module_name__3003 = B3001[1];
                                                                {
                                                                    if (($T)(B2954['not'](module_name__3003)))
                                                                        module_name__3003 = B2954['get'](env__2992, 'module', 'name');
                                                                    return(B2954['pop'](B2954['get'](env__2992, 'identifiers', module_name__3003, name__3002)));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(false);
                                                }(identifier__2998));
                                                {
                                                    B2993 = B2954['rest'](B2993);
                                                    B2996 = [B2993];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        return(B2995);
                    }
                }
            }
        }
    };
    B2954['%annotate-function'](($module)['restore-identifiers'], 'restore-identifiers', false);
}
{
    ($module)['find-identifier'] = function B3009(identifier__3010, env__3011) {
        if (($T)(B2956['special-symbol?'](identifier__3010)))
            return(identifier__3010);
        else {
            var B3012 = B2954['destructure-symbol'](identifier__3010);
            {
                var name__3013 = B3012[0];
                {
                    var module_name__3014 = B3012[1];
                    {
                        if (($T)(B2954['not'](module_name__3014)))
                            module_name__3014 = B2954['get'](env__3011, 'module', 'name');
                        {
                            var renamings__3015 = B2954['get'](env__3011, 'identifiers', module_name__3014, name__3013);
                            {
                                var B3016 = false;
                                if (($T)(renamings__3015))
                                    B3016 = B2954['not'](B2954['empty?'](renamings__3015));
                                else
                                    B3016 = false;
                                if (($T)(B3016))
                                    return(B2954['first'](renamings__3015));
                                else
                                    return(false);
                            }
                        }
                    }
                }
            }
        }
    };
    B2954['%annotate-function'](($module)['find-identifier'], 'find-identifier', false);
}
{
    {
        ($module)['alpha-convert-form'] = function B3018(exp__3019, env__3020) {
            return(($module)['alpha-convert'](exp__3019, env__3020, B2954['identity']));
        };
        ($module)['%export']('alpha-convert-form', ($module)['alpha-convert-form']);
    }
    B2954['%annotate-function'](($module)['alpha-convert-form'], 'alpha-convert-form', false);
}
{
    var B3047 = $S('%bind', 'ralph/core');
    {
        var B3048 = $S('%method', 'ralph/core');
        {
            var B3049 = $S('%try', 'ralph/core');
            {
                ($module)['alpha-convert'] = function B3050(exp__3051, env__3052, k__3053) {
                    var B3054 = exp__3051;
                    if (($T)(B2954['instance?'](B3054, B2954['<array>']))) {
                        var B3055 = B2954['symbol-name'](B2954['first'](exp__3051));
                        if (($T)(B2954['=='](B3055, '%quote')))
                            return(k__3053(exp__3051));
                        else if (($T)(B2954['=='](B3055, '%bind'))) {
                            var ____3056 = exp__3051[0];
                            {
                                var B3057 = exp__3051[1];
                                {
                                    var identifier__3058 = B3057[0];
                                    {
                                        var value__3059 = B3057[1];
                                        {
                                            var form__3060 = exp__3051[2];
                                            return(($module)['alpha-convert'](value__3059, env__3052, function B3061(valueT__3062) {
                                                var B3063 = ($module)['rename-identifiers']([identifier__3058], env__3052);
                                                {
                                                    var identifierT__3064 = B3063[0];
                                                    return(($module)['alpha-convert'](form__3060, env__3052, function B3065(formT__3066) {
                                                        ($module)['restore-identifiers']([identifier__3058], env__3052);
                                                        return(k__3053([
                                                            B3047,
                                                            [
                                                                identifierT__3064,
                                                                valueT__3062
                                                            ],
                                                            formT__3066
                                                        ]));
                                                    }));
                                                }
                                            }));
                                        }
                                    }
                                }
                            }
                        } else if (($T)(B2954['=='](B3055, '%method'))) {
                            var ____3067 = exp__3051[0];
                            {
                                var name__3068 = exp__3051[1];
                                {
                                    var parameters__3069 = exp__3051[2];
                                    {
                                        var form__3070 = exp__3051[3];
                                        {
                                            var identifiers__3071 = B2954['cons'](name__3068, parameters__3069);
                                            {
                                                var B3072 = ($module)['rename-identifiers'](identifiers__3071, env__3052);
                                                {
                                                    var nameT__3073 = B3072[0];
                                                    {
                                                        var parametersT__3074 = $SL.call(B3072, 1);
                                                        return(($module)['alpha-convert'](form__3070, env__3052, function B3075(formT__3076) {
                                                            ($module)['restore-identifiers'](identifiers__3071, env__3052);
                                                            return(k__3053([
                                                                B3048,
                                                                nameT__3073,
                                                                parametersT__3074,
                                                                formT__3076
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
                            var B3077 = B2954['=='](B3055, '%set');
                            {
                                var B3111 = false;
                                if (($T)(B3077))
                                    B3111 = B3077;
                                else {
                                    var B3078 = B2954['=='](B3055, '%if');
                                    if (($T)(B3078))
                                        B3111 = B3078;
                                    else {
                                        var B3079 = B2954['=='](B3055, '%begin');
                                        if (($T)(B3079))
                                            B3111 = B3079;
                                        else {
                                            var B3080 = B2954['=='](B3055, '%while');
                                            if (($T)(B3080))
                                                B3111 = B3080;
                                            else {
                                                var B3081 = B2954['=='](B3055, '%native');
                                                if (($T)(B3081))
                                                    B3111 = B3081;
                                                else {
                                                    var B3082 = B2954['=='](B3055, '%native-call');
                                                    if (($T)(B3082))
                                                        B3111 = B3082;
                                                    else {
                                                        var B3083 = B2954['=='](B3055, '%infix');
                                                        if (($T)(B3083))
                                                            B3111 = B3083;
                                                        else {
                                                            var B3084 = B2954['=='](B3055, '%object');
                                                            if (($T)(B3084))
                                                                B3111 = B3084;
                                                            else {
                                                                var B3085 = B2954['=='](B3055, '%array');
                                                                if (($T)(B3085))
                                                                    B3111 = B3085;
                                                                else
                                                                    B3111 = B2954['=='](B3055, '%get-property');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (($T)(B3111)) {
                                    var op__3086 = exp__3051[0];
                                    {
                                        var arguments__3087 = $SL.call(exp__3051, 1);
                                        return(($module)['alpha-convert*'](arguments__3087, env__3052, function B3088(argumentsT__3089) {
                                            return(k__3053(B2954['cons'](op__3086, argumentsT__3089)));
                                        }));
                                    }
                                } else {
                                    var B3090 = B2954['=='](B3055, '%define');
                                    {
                                        var B3112 = false;
                                        if (($T)(B3090))
                                            B3112 = B3090;
                                        else
                                            B3112 = B2954['=='](B3055, '%var');
                                        if (($T)(B3112)) {
                                            var op__3091 = exp__3051[0];
                                            {
                                                var identifier__3092 = exp__3051[1];
                                                {
                                                    var value__3093 = exp__3051[2];
                                                    return(($module)['alpha-convert'](value__3093, env__3052, function B3094(valueT__3095) {
                                                        var B3096 = ($module)['find-identifier'](identifier__3092, env__3052);
                                                        {
                                                            var identifierT__3097 = false;
                                                            if (($T)(B3096))
                                                                identifierT__3097 = B3096;
                                                            else
                                                                identifierT__3097 = B2955['qualify-symbol'](identifier__3092, env__3052);
                                                            return(k__3053([
                                                                op__3091,
                                                                identifierT__3097,
                                                                valueT__3095
                                                            ]));
                                                        }
                                                    }));
                                                }
                                            }
                                        } else if (($T)(B2954['=='](B3055, '%try'))) {
                                            var ____3098 = exp__3051[0];
                                            {
                                                var protected_form__3099 = exp__3051[1];
                                                {
                                                    var identifier__3100 = exp__3051[2];
                                                    {
                                                        var handling_form__3101 = exp__3051[3];
                                                        return(($module)['alpha-convert'](protected_form__3099, env__3052, function B3102(protected_formT__3103) {
                                                            var B3104 = ($module)['rename-identifiers']([identifier__3100], env__3052);
                                                            {
                                                                var identifierT__3105 = B3104[0];
                                                                return(($module)['alpha-convert'](handling_form__3101, env__3052, function B3106(handling_formT__3107) {
                                                                    ($module)['restore-identifiers']([identifier__3100], env__3052);
                                                                    return(k__3053([
                                                                        B3049,
                                                                        protected_formT__3103,
                                                                        identifierT__3105,
                                                                        handling_formT__3107
                                                                    ]));
                                                                }));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        } else
                                            return(($module)['alpha-convert**'](exp__3051, env__3052, k__3053));
                                    }
                                }
                            }
                        }
                    } else if (($T)(B2954['instance?'](B3054, B2954['<symbol>']))) {
                        var B3108 = ($module)['find-identifier'](exp__3051, env__3052);
                        if (($T)(B3108)) {
                            var identifier__3109 = B3108;
                            return(k__3053(identifier__3109));
                        } else {
                            var symbol__3110 = B2955['resolve-symbol'](exp__3051, env__3052);
                            if (($T)(B2954['=='](B2954['get'](symbol__3110, 'module'), B2954['get'](env__3052, 'module', 'name'))))
                                return(k__3053(symbol__3110));
                            else
                                return(($module)['convert-free-variable'](symbol__3110, env__3052, k__3053));
                        }
                    } else
                        return(k__3053(exp__3051));
                };
                B2954['%annotate-function'](($module)['alpha-convert'], 'alpha-convert', false);
            }
        }
    }
}
{
    var B3114 = $S('%get-property', 'ralph/core');
    {
        ($module)['make-external-reference'] = function B3115(name__3116, module_name__3117, env__3118) {
            return([
                B3114,
                B2955['find-import-identifier'](module_name__3117, env__3118),
                name__3116
            ]);
        };
        B2954['%annotate-function'](($module)['make-external-reference'], 'make-external-reference', false);
    }
}
{
    var B3123 = $S('%begin', 'ralph/core');
    {
        ($module)['convert-free-variable'] = function B3124(symbol__3125, env__3126, k__3127) {
            var B3128 = B2954['destructure-symbol'](symbol__3125);
            {
                var name__3129 = B3128[0];
                {
                    var module_name__3130 = B3128[1];
                    {
                        var B3131 = B2955['find-import-identifier'](module_name__3130, env__3126);
                        if (($T)(B3131)) {
                            var import_identifier__3132 = B3131;
                            {
                                var reference__3133 = ($module)['make-external-reference'](name__3129, module_name__3130, env__3126);
                                return(($module)['alpha-convert'](reference__3133, env__3126, k__3127));
                            }
                        } else
                            return(($module)['alpha-convert*']([
                                B2955['make-import-definition'](module_name__3130, env__3126),
                                ($module)['make-external-reference'](name__3129, module_name__3130, env__3126)
                            ], env__3126, function B3134(formsT__3135) {
                                var importT__3136 = formsT__3135[0];
                                {
                                    var referenceT__3137 = formsT__3135[1];
                                    return([
                                        B3123,
                                        importT__3136,
                                        k__3127(referenceT__3137)
                                    ]);
                                }
                            }));
                    }
                }
            }
        };
        B2954['%annotate-function'](($module)['convert-free-variable'], 'convert-free-variable', false);
    }
}
{
    ($module)['alpha-convert*'] = function B3139(expT__3140, env__3141, k__3142) {
        if (($T)(B2954['empty?'](expT__3140)))
            return(k__3142([]));
        else
            return(($module)['alpha-convert**'](expT__3140, env__3141, k__3142));
    };
    B2954['%annotate-function'](($module)['alpha-convert*'], 'alpha-convert*', false);
}
{
    ($module)['alpha-convert**'] = function B3146(exp__3147, env__3148, k__3149) {
        return(($module)['alpha-convert'](B2954['first'](exp__3147), env__3148, function B3150(t__3151) {
            return(($module)['alpha-convert*'](B2954['rest'](exp__3147), env__3148, function B3152(tT__3153) {
                return(k__3149(B2954['cons'](t__3151, tT__3153)));
            }));
        }));
    };
    B2954['%annotate-function'](($module)['alpha-convert**'], 'alpha-convert**', false);
}
