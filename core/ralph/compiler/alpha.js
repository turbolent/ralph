{
    var B3040 = require('ralph/core');
}
{
    var B3043 = require('ralph/compiler/environment');
    var B3044 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B3040['%var'];
        var ralphScoreCCnot = B3040['not'];
        var ralphScoreCCget = B3040['get'];
        var ralphScoreCCget_setter = B3040['get-setter'];
        var ralphScoreCCmake_object = B3040['make-object'];
        var ralphScoreCCMannotate_function = B3040['%annotate-function'];
        var ensure_naming_structure__3051 = function B3046(env__3047, module_name__3048, name__3049) {
            if (($T)(ralphScoreCCnot(ralphScoreCCget(env__3047, 'identifiers', module_name__3048))))
                ralphScoreCCget_setter(env__3047, 'identifiers', module_name__3048, ralphScoreCCmake_object());
            {
                var module_renamings__3050 = ralphScoreCCget(env__3047, 'identifiers', module_name__3048);
            }
            if (($T)(ralphScoreCCnot(ralphScoreCCget(module_renamings__3050, name__3049))))
                ralphScoreCCget_setter(module_renamings__3050, name__3049, []);
            return(env__3047);
        };
    }
    ralphScoreCCMannotate_function(ensure_naming_structure__3051, 'ensure_naming_structure', false);
}
{
    var B3054 = $S('%all-arguments');
    var B3055 = $S('%this-method');
    var Bspecial_symbols__3056 = [
            B3054,
            B3055
        ];
}
{
    {
        var ralphScoreCCfirst = B3040['first'];
        var ralphScoreCCsymbol_name = B3040['symbol-name'];
        var rename_definition__3063 = function B3058(identifier__3059, env__3060) {
            {
                var new_identifier__3062 = ralphScoreCCfirst(rename_identifiers__3061([identifier__3059], env__3060));
            }
            ralphScoreCCget_setter(env__3060, 'original-identifier', ralphScoreCCsymbol_name(new_identifier__3062), identifier__3059);
            return(new_identifier__3062);
        };
    }
    ralphScoreCCMannotate_function(rename_definition__3063, 'rename_definition', false);
}
{
    {
        var ralphScoreCCmap = B3040['map'];
        var ralphScoreCCmemberQ = B3040['member?'];
        var ralphScoreCCdestructure_symbol = B3040['destructure-symbol'];
        var ralphScoreCCgenerate_symbol = B3040['generate-symbol'];
        var ralphScoreCCpush = B3040['push'];
        var rename_identifiers__3061 = function B3067(identifiers__3068, env__3069) {
            return(ralphScoreCCmap(function B3070(identifier__3071) {
                if (($T)(ralphScoreCCmemberQ(identifier__3071, Bspecial_symbols__3056)))
                    return(identifier__3071);
                else {
                    {
                        var B3072 = ralphScoreCCdestructure_symbol(identifier__3071);
                        var name__3073 = B3072[0];
                        var module_name__3074 = B3072[1];
                    }
                    if (($T)(ralphScoreCCnot(module_name__3074)))
                        module_name__3074 = ralphScoreCCget(env__3069, 'module', 'name');
                    {
                        var B3076 = false;
                    }
                    if (($T)(ralphScoreCCnot(ralphScoreCCget(identifier__3071, 'generated?'))))
                        B3076 = name__3073;
                    else
                        B3076 = false;
                    {
                        var identifierT__3075 = ralphScoreCCgenerate_symbol(env__3069, B3076);
                    }
                    ensure_naming_structure__3051(env__3069, module_name__3074, name__3073);
                    ralphScoreCCpush(ralphScoreCCget(env__3069, 'identifiers', module_name__3074, name__3073), identifierT__3075);
                    return(identifierT__3075);
                }
            }, identifiers__3068));
        };
    }
    ralphScoreCCMannotate_function(rename_identifiers__3061, 'rename_identifiers', false);
}
{
    {
        var ralphScoreCCanyQ = B3040['any?'];
        var ralphScoreCCemptyQ = B3040['empty?'];
        var ralphScoreCCpop = B3040['pop'];
        var ralphScoreCCrest = B3040['rest'];
        var restore_identifiers__3099 = function B3085(identifiers__3086, env__3087) {
            {
                var B3088 = identifiers__3086;
                var B3089 = false;
                var B3090 = false;
                var B3091 = [B3088];
            }
            while (true) {
                {
                    var B3092 = B3089;
                    var B3100 = false;
                }
                if (($T)(B3092))
                    B3100 = B3092;
                else
                    B3100 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B3091);
                {
                    var B3101 = ralphScoreCCnot(B3100);
                }
                if (($T)(B3101)) {
                    {
                        var identifier__3093 = ralphScoreCCfirst(B3088);
                    }
                    (function B3094(identifier__3095) {
                        if (($T)(ralphScoreCCnot(ralphScoreCCmemberQ(identifier__3095, Bspecial_symbols__3056)))) {
                            {
                                var B3096 = ralphScoreCCdestructure_symbol(identifier__3095);
                                var name__3097 = B3096[0];
                                var module_name__3098 = B3096[1];
                            }
                            if (($T)(ralphScoreCCnot(module_name__3098)))
                                module_name__3098 = ralphScoreCCget(env__3087, 'module', 'name');
                            return(ralphScoreCCpop(ralphScoreCCget(env__3087, 'identifiers', module_name__3098, name__3097)));
                        } else
                            return(false);
                    }(identifier__3093));
                    B3088 = ralphScoreCCrest(B3088);
                    B3091 = [B3088];
                } else
                    break;
            }
            return(B3090);
        };
    }
    ralphScoreCCMannotate_function(restore_identifiers__3099, 'restore_identifiers', false);
}
{
    {
        var find_identifier__3111 = function B3104(identifier__3105, env__3106) {
            if (($T)(ralphScoreCCmemberQ(identifier__3105, Bspecial_symbols__3056)))
                return(identifier__3105);
            else {
                {
                    var B3107 = ralphScoreCCdestructure_symbol(identifier__3105);
                    var name__3108 = B3107[0];
                    var module_name__3109 = B3107[1];
                }
                if (($T)(ralphScoreCCnot(module_name__3109)))
                    module_name__3109 = ralphScoreCCget(env__3106, 'module', 'name');
                {
                    var renamings__3110 = ralphScoreCCget(env__3106, 'identifiers', module_name__3109, name__3108);
                    var B3112 = false;
                }
                if (($T)(renamings__3110))
                    B3112 = ralphScoreCCnot(ralphScoreCCemptyQ(renamings__3110));
                else
                    B3112 = false;
                if (($T)(B3112))
                    return(ralphScoreCCfirst(renamings__3110));
                else
                    return(false);
            }
        };
    }
    ralphScoreCCMannotate_function(find_identifier__3111, 'find_identifier', false);
}
{
    {
        var ralphScoreCCidentity = B3040['identity'];
        var alpha_convert_form__3118 = function B3114(exp__3115, env__3116) {
            return(alpha_convert__3117(exp__3115, env__3116, ralphScoreCCidentity));
        };
    }
    (exports)['alpha-convert-form'] = alpha_convert_form__3118;
    ralphScoreCCMannotate_function(alpha_convert_form__3118, 'alpha_convert_form', false);
}
{
    {
        var ralphScoreCCinstanceQ = B3040['instance?'];
        var ralphScoreCCLarrayG = B3040['<array>'];
        var ralphScoreCCEE = B3040['=='];
        var ralphScoreCCcons = B3040['cons'];
        var ralphScoreCCLsymbolG = B3040['<symbol>'];
        var ralphScompilerSenvironmentCCresolve_symbol = B3043['resolve-symbol'];
        var ralphScompilerSenvironmentCCfind_import_identifier = B3043['find-import-identifier'];
        var ralphScoreCCMconcat = B3040['%concat'];
        var ralphScompilerSenvironmentCCmake_import_definition = B3043['make-import-definition'];
        var ralphScoreCCpush_last = B3040['push-last'];
        var B3154 = $S('%bind', 'ralph/core');
        var B3155 = $S('%method', 'ralph/core');
        var B3156 = $S('%define', 'ralph/core');
        var B3157 = $S('%try', 'ralph/core');
        var B3158 = $S('%begin', 'ralph/core');
        var B3159 = $S('%var', 'ralph/core');
        var B3160 = $S('%get-property', 'ralph/core');
        var alpha_convert__3117 = function B3161(exp__3162, env__3163, k__3164) {
            {
                var B3165 = exp__3162;
            }
            if (($T)(ralphScoreCCinstanceQ(B3165, ralphScoreCCLarrayG))) {
                {
                    var B3166 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3162));
                    var B3167 = ralphScoreCCEE(B3166, '%quote');
                    var B3230 = false;
                }
                if (($T)(B3167))
                    B3230 = B3167;
                else
                    B3230 = ralphScoreCCEE(B3166, '%native-name');
                if (($T)(B3230))
                    return(k__3164(exp__3162));
                else if (($T)(ralphScoreCCEE(B3166, '%bind'))) {
                    {
                        var ____3168 = exp__3162[0];
                        var B3169 = exp__3162[1];
                        var identifier__3170 = B3169[0];
                        var value__3171 = B3169[1];
                        var form__3172 = exp__3162[2];
                    }
                    return(alpha_convert__3117(value__3171, env__3163, function B3173(valueT__3174) {
                        {
                            var B3175 = rename_identifiers__3061([identifier__3170], env__3163);
                            var identifierT__3176 = B3175[0];
                        }
                        return(alpha_convert__3117(form__3172, env__3163, function B3177(formT__3178) {
                            restore_identifiers__3099([identifier__3170], env__3163);
                            return(k__3164([
                                B3154,
                                [
                                    identifierT__3176,
                                    valueT__3174
                                ],
                                formT__3178
                            ]));
                        }));
                    }));
                } else if (($T)(ralphScoreCCEE(B3166, '%method'))) {
                    {
                        var ____3179 = exp__3162[0];
                        var name__3180 = exp__3162[1];
                        var parameters__3181 = exp__3162[2];
                        var form__3182 = exp__3162[3];
                        var identifiers__3183 = ralphScoreCCcons(name__3180, parameters__3181);
                        var B3184 = rename_identifiers__3061(identifiers__3183, env__3163);
                        var nameT__3185 = B3184[0];
                        var parametersT__3186 = $SL.call(B3184, 1);
                    }
                    return(alpha_convert__3117(form__3182, env__3163, function B3187(formT__3188) {
                        restore_identifiers__3099(identifiers__3183, env__3163);
                        return(k__3164([
                            B3155,
                            nameT__3185,
                            parametersT__3186,
                            formT__3188
                        ]));
                    }));
                } else {
                    {
                        var B3189 = ralphScoreCCEE(B3166, '%set');
                        var B3231 = false;
                    }
                    if (($T)(B3189))
                        B3231 = B3189;
                    else {
                        {
                            var B3190 = ralphScoreCCEE(B3166, '%if');
                        }
                        if (($T)(B3190))
                            B3231 = B3190;
                        else {
                            {
                                var B3191 = ralphScoreCCEE(B3166, '%begin');
                            }
                            if (($T)(B3191))
                                B3231 = B3191;
                            else {
                                {
                                    var B3192 = ralphScoreCCEE(B3166, '%while');
                                }
                                if (($T)(B3192))
                                    B3231 = B3192;
                                else {
                                    {
                                        var B3193 = ralphScoreCCEE(B3166, '%native');
                                    }
                                    if (($T)(B3193))
                                        B3231 = B3193;
                                    else {
                                        {
                                            var B3194 = ralphScoreCCEE(B3166, '%native-call');
                                        }
                                        if (($T)(B3194))
                                            B3231 = B3194;
                                        else {
                                            {
                                                var B3195 = ralphScoreCCEE(B3166, '%infix');
                                            }
                                            if (($T)(B3195))
                                                B3231 = B3195;
                                            else {
                                                {
                                                    var B3196 = ralphScoreCCEE(B3166, '%object');
                                                }
                                                if (($T)(B3196))
                                                    B3231 = B3196;
                                                else {
                                                    {
                                                        var B3197 = ralphScoreCCEE(B3166, '%array');
                                                    }
                                                    if (($T)(B3197))
                                                        B3231 = B3197;
                                                    else
                                                        B3231 = ralphScoreCCEE(B3166, '%get-property');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (($T)(B3231)) {
                        {
                            var op__3198 = exp__3162[0];
                            var arguments__3199 = $SL.call(exp__3162, 1);
                        }
                        return(alpha_convertT__3200(arguments__3199, env__3163, function B3201(argumentsT__3202) {
                            return(k__3164(ralphScoreCCcons(op__3198, argumentsT__3202)));
                        }));
                    } else if (($T)(ralphScoreCCEE(B3166, '%define'))) {
                        {
                            var ____3203 = exp__3162[0];
                            var identifier__3204 = exp__3162[1];
                            var value__3205 = exp__3162[2];
                        }
                        return(alpha_convert__3117(value__3205, env__3163, function B3206(valueT__3207) {
                            {
                                var B3208 = find_identifier__3111(identifier__3204, env__3163);
                                var identifierT__3209 = false;
                            }
                            if (($T)(B3208))
                                identifierT__3209 = B3208;
                            else
                                identifierT__3209 = rename_definition__3063(identifier__3204, env__3163);
                            return(k__3164([
                                B3156,
                                identifierT__3209,
                                valueT__3207
                            ]));
                        }));
                    } else if (($T)(ralphScoreCCEE(B3166, '%try'))) {
                        {
                            var ____3210 = exp__3162[0];
                            var protected_form__3211 = exp__3162[1];
                            var identifier__3212 = exp__3162[2];
                            var handling_form__3213 = exp__3162[3];
                        }
                        return(alpha_convert__3117(protected_form__3211, env__3163, function B3214(protected_formT__3215) {
                            {
                                var B3216 = rename_identifiers__3061([identifier__3212], env__3163);
                                var identifierT__3217 = B3216[0];
                            }
                            return(alpha_convert__3117(handling_form__3213, env__3163, function B3218(handling_formT__3219) {
                                restore_identifiers__3099([identifier__3212], env__3163);
                                return(k__3164([
                                    B3157,
                                    protected_formT__3215,
                                    identifierT__3217,
                                    handling_formT__3219
                                ]));
                            }));
                        }));
                    } else
                        return(alpha_convertTT__3220(exp__3162, env__3163, k__3164));
                }
            } else if (($T)(ralphScoreCCinstanceQ(B3165, ralphScoreCCLsymbolG))) {
                {
                    var B3221 = find_identifier__3111(exp__3162, env__3163);
                }
                if (($T)(B3221)) {
                    {
                        var identifier__3222 = B3221;
                    }
                    return(k__3164(identifier__3222));
                } else {
                    {
                        var symbol__3223 = ralphScompilerSenvironmentCCresolve_symbol(exp__3162, env__3163);
                        var B3224 = ralphScoreCCdestructure_symbol(symbol__3223);
                        var name__3225 = B3224[0];
                        var module_name__3226 = B3224[1];
                    }
                    if (($T)(ralphScoreCCEE(module_name__3226, ralphScoreCCget(env__3163, 'module', 'name'))))
                        return(k__3164(rename_definition__3063(symbol__3223, env__3163)));
                    else if (($T)(ralphScoreCCget(env__3163, 'definition-imported?', module_name__3226, name__3225)))
                        return(k__3164(symbol__3223));
                    else {
                        ralphScoreCCget_setter(env__3163, 'definition-imported?', module_name__3226, name__3225, true);
                        {
                            var import_identifier__3227 = ralphScompilerSenvironmentCCfind_import_identifier(module_name__3226, env__3163);
                            var B3232 = [B3158];
                            var B3233 = false;
                        }
                        if (($T)(import_identifier__3227))
                            B3233 = [];
                        else
                            B3233 = [ralphScompilerSenvironmentCCmake_import_definition(module_name__3226, env__3163)];
                        {
                            var B3234 = ralphScoreCCMconcat(B3232, B3233);
                            var B3228 = import_identifier__3227;
                            var B3235 = false;
                        }
                        if (($T)(B3228))
                            B3235 = B3228;
                        else
                            B3235 = ralphScompilerSenvironmentCCfind_import_identifier(module_name__3226, env__3163);
                        {
                            var B3236 = [
                                    B3160,
                                    B3235,
                                    name__3225
                                ];
                            var B3237 = [
                                    B3159,
                                    symbol__3223,
                                    B3236
                                ];
                            var B3238 = [B3237];
                            var B3239 = ralphScoreCCMconcat(B3234, B3238);
                            var result__3229 = alpha_convert_form__3118(B3239, env__3163);
                        }
                        ralphScoreCCpush_last(result__3229, k__3164(symbol__3223));
                        return(result__3229);
                    }
                }
            } else
                return(k__3164(exp__3162));
        };
    }
    ralphScoreCCMannotate_function(alpha_convert__3117, 'alpha_convert', false);
}
{
    {
        var alpha_convertT__3200 = function B3241(expT__3242, env__3243, k__3244) {
            if (($T)(ralphScoreCCemptyQ(expT__3242)))
                return(k__3244([]));
            else
                return(alpha_convertTT__3220(expT__3242, env__3243, k__3244));
        };
    }
    ralphScoreCCMannotate_function(alpha_convertT__3200, 'alpha_convertT', false);
}
{
    {
        var alpha_convertTT__3220 = function B3248(exp__3249, env__3250, k__3251) {
            return(alpha_convert__3117(ralphScoreCCfirst(exp__3249), env__3250, function B3252(t__3253) {
                return(alpha_convertT__3200(ralphScoreCCrest(exp__3249), env__3250, function B3254(tT__3255) {
                    return(k__3251(ralphScoreCCcons(t__3253, tT__3255)));
                }));
            }));
        };
    }
    ralphScoreCCMannotate_function(alpha_convertTT__3220, 'alpha_convertTT', false);
}
