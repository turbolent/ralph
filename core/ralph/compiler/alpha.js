{
    var $module = Object.create(null);
    ($module)['%export'] = function B2934(name__2935, value__2936) {
        var B2937 = (exports);
        return(B2937[name__2935] = value__2936);
    };
}
var B2938 = require('ralph/core');
{
    var B2939 = require('ralph/compiler/environment');
    var B2940 = require('ralph/compiler/utilities');
}
{
    ($module)['ensure-naming-structure'] = function B2942(env__2943, module_name__2944, name__2945) {
        if (($T)(B2938['not'](B2938['get'](env__2943, 'identifiers', module_name__2944))))
            B2938['get-setter'](env__2943, 'identifiers', module_name__2944, B2938['make-object']());
        {
            var module_renamings__2946 = B2938['get'](env__2943, 'identifiers', module_name__2944);
            {
                if (($T)(B2938['not'](B2938['get'](module_renamings__2946, name__2945))))
                    B2938['get-setter'](module_renamings__2946, name__2945, []);
                return(env__2943);
            }
        }
    };
    B2938['%annotate-function'](($module)['ensure-naming-structure'], 'ensure-naming-structure', false);
}
{
    ($module)['rename-definition'] = function B2948(identifier__2949, env__2950) {
        var new_identifier__2951 = B2938['first'](($module)['rename-identifiers']([identifier__2949], env__2950));
        {
            B2938['get-setter'](env__2950, 'original-identifier', B2938['symbol-name'](new_identifier__2951), identifier__2949);
            return(new_identifier__2951);
        }
    };
    B2938['%annotate-function'](($module)['rename-definition'], 'rename-definition', false);
}
{
    ($module)['rename-identifiers'] = function B2955(identifiers__2956, env__2957) {
        return(B2938['map'](function B2958(identifier__2959) {
            if (($T)(B2940['special-symbol?'](identifier__2959)))
                return(identifier__2959);
            else {
                var B2960 = B2938['destructure-symbol'](identifier__2959);
                {
                    var name__2961 = B2960[0];
                    {
                        var module_name__2962 = B2960[1];
                        {
                            if (($T)(B2938['not'](module_name__2962)))
                                module_name__2962 = B2938['get'](env__2957, 'module', 'name');
                            {
                                var B2964 = B2938['generate-symbol'];
                                {
                                    var B2965 = false;
                                    if (($T)(B2938['not'](B2938['get'](identifier__2959, 'generated?'))))
                                        B2965 = name__2961;
                                    else
                                        B2965 = false;
                                    {
                                        var identifierT__2963 = B2964(env__2957, B2965);
                                        {
                                            ($module)['ensure-naming-structure'](env__2957, module_name__2962, name__2961);
                                            {
                                                B2938['push'](B2938['get'](env__2957, 'identifiers', module_name__2962, name__2961), identifierT__2963);
                                                return(identifierT__2963);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, identifiers__2956));
    };
    B2938['%annotate-function'](($module)['rename-identifiers'], 'rename-identifiers', false);
}
{
    ($module)['restore-identifiers'] = function B2974(identifiers__2975, env__2976) {
        var B2977 = identifiers__2975;
        {
            var B2978 = false;
            {
                var B2979 = false;
                {
                    var B2980 = [B2977];
                    {
                        while (true) {
                            var B2988 = B2938['not'];
                            {
                                var B2981 = B2978;
                                {
                                    var B2989 = false;
                                    if (($T)(B2981))
                                        B2989 = B2981;
                                    else
                                        B2989 = B2938['any?'](B2938['empty?'], B2980);
                                    {
                                        var B2990 = B2988(B2989);
                                        if (($T)(B2990)) {
                                            var identifier__2982 = B2938['first'](B2977);
                                            {
                                                (function B2983(identifier__2984) {
                                                    if (($T)(B2938['not'](B2940['special-symbol?'](identifier__2984)))) {
                                                        var B2985 = B2938['destructure-symbol'](identifier__2984);
                                                        {
                                                            var name__2986 = B2985[0];
                                                            {
                                                                var module_name__2987 = B2985[1];
                                                                {
                                                                    if (($T)(B2938['not'](module_name__2987)))
                                                                        module_name__2987 = B2938['get'](env__2976, 'module', 'name');
                                                                    return(B2938['pop'](B2938['get'](env__2976, 'identifiers', module_name__2987, name__2986)));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(false);
                                                }(identifier__2982));
                                                {
                                                    B2977 = B2938['rest'](B2977);
                                                    B2980 = [B2977];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        return(B2979);
                    }
                }
            }
        }
    };
    B2938['%annotate-function'](($module)['restore-identifiers'], 'restore-identifiers', false);
}
{
    ($module)['find-identifier'] = function B2993(identifier__2994, env__2995) {
        if (($T)(B2940['special-symbol?'](identifier__2994)))
            return(identifier__2994);
        else {
            var B2996 = B2938['destructure-symbol'](identifier__2994);
            {
                var name__2997 = B2996[0];
                {
                    var module_name__2998 = B2996[1];
                    {
                        if (($T)(B2938['not'](module_name__2998)))
                            module_name__2998 = B2938['get'](env__2995, 'module', 'name');
                        {
                            var renamings__2999 = B2938['get'](env__2995, 'identifiers', module_name__2998, name__2997);
                            {
                                var B3000 = false;
                                if (($T)(renamings__2999))
                                    B3000 = B2938['not'](B2938['empty?'](renamings__2999));
                                else
                                    B3000 = false;
                                if (($T)(B3000))
                                    return(B2938['first'](renamings__2999));
                                else
                                    return(false);
                            }
                        }
                    }
                }
            }
        }
    };
    B2938['%annotate-function'](($module)['find-identifier'], 'find-identifier', false);
}
{
    {
        ($module)['alpha-convert-form'] = function B3002(exp__3003, env__3004) {
            return(($module)['alpha-convert'](exp__3003, env__3004, B2938['identity']));
        };
        ($module)['%export']('alpha-convert-form', ($module)['alpha-convert-form']);
    }
    B2938['%annotate-function'](($module)['alpha-convert-form'], 'alpha-convert-form', false);
}
{
    var B3031 = $S('%bind', 'ralph/core');
    {
        var B3032 = $S('%method', 'ralph/core');
        {
            var B3033 = $S('%try', 'ralph/core');
            {
                ($module)['alpha-convert'] = function B3034(exp__3035, env__3036, k__3037) {
                    var B3038 = exp__3035;
                    if (($T)(B2938['instance?'](B3038, B2938['<array>']))) {
                        var B3039 = B2938['symbol-name'](B2938['first'](exp__3035));
                        if (($T)(B2938['=='](B3039, '%quote')))
                            return(k__3037(exp__3035));
                        else if (($T)(B2938['=='](B3039, '%bind'))) {
                            var ____3040 = exp__3035[0];
                            {
                                var B3041 = exp__3035[1];
                                {
                                    var identifier__3042 = B3041[0];
                                    {
                                        var value__3043 = B3041[1];
                                        {
                                            var form__3044 = exp__3035[2];
                                            return(($module)['alpha-convert'](value__3043, env__3036, function B3045(valueT__3046) {
                                                var B3047 = ($module)['rename-identifiers']([identifier__3042], env__3036);
                                                {
                                                    var identifierT__3048 = B3047[0];
                                                    return(($module)['alpha-convert'](form__3044, env__3036, function B3049(formT__3050) {
                                                        ($module)['restore-identifiers']([identifier__3042], env__3036);
                                                        return(k__3037([
                                                            B3031,
                                                            [
                                                                identifierT__3048,
                                                                valueT__3046
                                                            ],
                                                            formT__3050
                                                        ]));
                                                    }));
                                                }
                                            }));
                                        }
                                    }
                                }
                            }
                        } else if (($T)(B2938['=='](B3039, '%method'))) {
                            var ____3051 = exp__3035[0];
                            {
                                var name__3052 = exp__3035[1];
                                {
                                    var parameters__3053 = exp__3035[2];
                                    {
                                        var form__3054 = exp__3035[3];
                                        {
                                            var identifiers__3055 = B2938['cons'](name__3052, parameters__3053);
                                            {
                                                var B3056 = ($module)['rename-identifiers'](identifiers__3055, env__3036);
                                                {
                                                    var nameT__3057 = B3056[0];
                                                    {
                                                        var parametersT__3058 = $SL.call(B3056, 1);
                                                        return(($module)['alpha-convert'](form__3054, env__3036, function B3059(formT__3060) {
                                                            ($module)['restore-identifiers'](identifiers__3055, env__3036);
                                                            return(k__3037([
                                                                B3032,
                                                                nameT__3057,
                                                                parametersT__3058,
                                                                formT__3060
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
                            var B3061 = B2938['=='](B3039, '%set');
                            {
                                var B3095 = false;
                                if (($T)(B3061))
                                    B3095 = B3061;
                                else {
                                    var B3062 = B2938['=='](B3039, '%if');
                                    if (($T)(B3062))
                                        B3095 = B3062;
                                    else {
                                        var B3063 = B2938['=='](B3039, '%begin');
                                        if (($T)(B3063))
                                            B3095 = B3063;
                                        else {
                                            var B3064 = B2938['=='](B3039, '%while');
                                            if (($T)(B3064))
                                                B3095 = B3064;
                                            else {
                                                var B3065 = B2938['=='](B3039, '%native');
                                                if (($T)(B3065))
                                                    B3095 = B3065;
                                                else {
                                                    var B3066 = B2938['=='](B3039, '%native-call');
                                                    if (($T)(B3066))
                                                        B3095 = B3066;
                                                    else {
                                                        var B3067 = B2938['=='](B3039, '%infix');
                                                        if (($T)(B3067))
                                                            B3095 = B3067;
                                                        else {
                                                            var B3068 = B2938['=='](B3039, '%object');
                                                            if (($T)(B3068))
                                                                B3095 = B3068;
                                                            else {
                                                                var B3069 = B2938['=='](B3039, '%array');
                                                                if (($T)(B3069))
                                                                    B3095 = B3069;
                                                                else
                                                                    B3095 = B2938['=='](B3039, '%get-property');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (($T)(B3095)) {
                                    var op__3070 = exp__3035[0];
                                    {
                                        var arguments__3071 = $SL.call(exp__3035, 1);
                                        return(($module)['alpha-convert*'](arguments__3071, env__3036, function B3072(argumentsT__3073) {
                                            return(k__3037(B2938['cons'](op__3070, argumentsT__3073)));
                                        }));
                                    }
                                } else {
                                    var B3074 = B2938['=='](B3039, '%define');
                                    {
                                        var B3096 = false;
                                        if (($T)(B3074))
                                            B3096 = B3074;
                                        else
                                            B3096 = B2938['=='](B3039, '%var');
                                        if (($T)(B3096)) {
                                            var op__3075 = exp__3035[0];
                                            {
                                                var identifier__3076 = exp__3035[1];
                                                {
                                                    var value__3077 = exp__3035[2];
                                                    return(($module)['alpha-convert'](value__3077, env__3036, function B3078(valueT__3079) {
                                                        var B3080 = ($module)['find-identifier'](identifier__3076, env__3036);
                                                        {
                                                            var identifierT__3081 = false;
                                                            if (($T)(B3080))
                                                                identifierT__3081 = B3080;
                                                            else
                                                                identifierT__3081 = B2939['qualify-symbol'](identifier__3076, env__3036);
                                                            return(k__3037([
                                                                op__3075,
                                                                identifierT__3081,
                                                                valueT__3079
                                                            ]));
                                                        }
                                                    }));
                                                }
                                            }
                                        } else if (($T)(B2938['=='](B3039, '%try'))) {
                                            var ____3082 = exp__3035[0];
                                            {
                                                var protected_form__3083 = exp__3035[1];
                                                {
                                                    var identifier__3084 = exp__3035[2];
                                                    {
                                                        var handling_form__3085 = exp__3035[3];
                                                        return(($module)['alpha-convert'](protected_form__3083, env__3036, function B3086(protected_formT__3087) {
                                                            var B3088 = ($module)['rename-identifiers']([identifier__3084], env__3036);
                                                            {
                                                                var identifierT__3089 = B3088[0];
                                                                return(($module)['alpha-convert'](handling_form__3085, env__3036, function B3090(handling_formT__3091) {
                                                                    ($module)['restore-identifiers']([identifier__3084], env__3036);
                                                                    return(k__3037([
                                                                        B3033,
                                                                        protected_formT__3087,
                                                                        identifierT__3089,
                                                                        handling_formT__3091
                                                                    ]));
                                                                }));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        } else
                                            return(($module)['alpha-convert**'](exp__3035, env__3036, k__3037));
                                    }
                                }
                            }
                        }
                    } else if (($T)(B2938['instance?'](B3038, B2938['<symbol>']))) {
                        var B3092 = ($module)['find-identifier'](exp__3035, env__3036);
                        if (($T)(B3092)) {
                            var identifier__3093 = B3092;
                            return(k__3037(identifier__3093));
                        } else {
                            var symbol__3094 = B2939['resolve-symbol'](exp__3035, env__3036);
                            if (($T)(B2938['=='](B2938['get'](symbol__3094, 'module'), B2938['get'](env__3036, 'module', 'name'))))
                                return(k__3037(symbol__3094));
                            else
                                return(($module)['convert-free-variable'](symbol__3094, env__3036, k__3037));
                        }
                    } else
                        return(k__3037(exp__3035));
                };
                B2938['%annotate-function'](($module)['alpha-convert'], 'alpha-convert', false);
            }
        }
    }
}
{
    var B3098 = $S('%get-property', 'ralph/core');
    {
        ($module)['make-external-reference'] = function B3099(name__3100, module_name__3101, env__3102) {
            return([
                B3098,
                B2939['find-import-identifier'](module_name__3101, env__3102),
                name__3100
            ]);
        };
        B2938['%annotate-function'](($module)['make-external-reference'], 'make-external-reference', false);
    }
}
{
    var B3107 = $S('%begin', 'ralph/core');
    {
        ($module)['convert-free-variable'] = function B3108(symbol__3109, env__3110, k__3111) {
            var B3112 = B2938['destructure-symbol'](symbol__3109);
            {
                var name__3113 = B3112[0];
                {
                    var module_name__3114 = B3112[1];
                    {
                        var B3115 = B2939['find-import-identifier'](module_name__3114, env__3110);
                        if (($T)(B3115)) {
                            var import_identifier__3116 = B3115;
                            {
                                var reference__3117 = ($module)['make-external-reference'](name__3113, module_name__3114, env__3110);
                                return(($module)['alpha-convert'](reference__3117, env__3110, k__3111));
                            }
                        } else
                            return(($module)['alpha-convert*']([
                                B2939['make-import-definition'](module_name__3114, env__3110),
                                ($module)['make-external-reference'](name__3113, module_name__3114, env__3110)
                            ], env__3110, function B3118(formsT__3119) {
                                var importT__3120 = formsT__3119[0];
                                {
                                    var referenceT__3121 = formsT__3119[1];
                                    return([
                                        B3107,
                                        importT__3120,
                                        k__3111(referenceT__3121)
                                    ]);
                                }
                            }));
                    }
                }
            }
        };
        B2938['%annotate-function'](($module)['convert-free-variable'], 'convert-free-variable', false);
    }
}
{
    ($module)['alpha-convert*'] = function B3123(expT__3124, env__3125, k__3126) {
        if (($T)(B2938['empty?'](expT__3124)))
            return(k__3126([]));
        else
            return(($module)['alpha-convert**'](expT__3124, env__3125, k__3126));
    };
    B2938['%annotate-function'](($module)['alpha-convert*'], 'alpha-convert*', false);
}
{
    ($module)['alpha-convert**'] = function B3130(exp__3131, env__3132, k__3133) {
        return(($module)['alpha-convert'](B2938['first'](exp__3131), env__3132, function B3134(t__3135) {
            return(($module)['alpha-convert*'](B2938['rest'](exp__3131), env__3132, function B3136(tT__3137) {
                return(k__3133(B2938['cons'](t__3135, tT__3137)));
            }));
        }));
    };
    B2938['%annotate-function'](($module)['alpha-convert**'], 'alpha-convert**', false);
}
{
    ($module)['%eval'] = function B3139() {
        return(eval((arguments[0])));
    };
    {
        B2938['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
