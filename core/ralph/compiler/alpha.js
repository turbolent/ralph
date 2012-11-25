var B3065 = require('ralph/core');
var B3068 = require('ralph/compiler/environment'), B3069 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3065['%var'], ralphScoreCCMmake_function = B3065['%make-function'], ralphScoreCCnot = B3065['not'], ralphScoreCCget = B3065['get'], ralphScoreCCget_setter = B3065['get-setter'], ralphScoreCCmake_object = B3065['make-object'], ensure_naming_structure__3076 = ralphScoreCCMmake_function('ensure_naming_structure', function B3071(env__3072, module_name__3073, name__3074) {
        if (($T)(ralphScoreCCnot(ralphScoreCCget(env__3072, 'identifiers', module_name__3073))))
            ralphScoreCCget_setter(env__3072, 'identifiers', module_name__3073, ralphScoreCCmake_object());
        var module_renamings__3075 = ralphScoreCCget(env__3072, 'identifiers', module_name__3073);
        if (($T)(ralphScoreCCnot(ralphScoreCCget(module_renamings__3075, name__3074))))
            ralphScoreCCget_setter(module_renamings__3075, name__3074, []);
        return(env__3072);
    }, false);
var B3079 = $S('%all-arguments'), B3080 = $S('%this-method'), Bspecial_symbols__3081 = [
        B3079,
        B3080
    ];
var ralphScoreCCfirst = B3065['first'], ralphScoreCCsymbol_name = B3065['symbol-name'], rename_definition__3088 = ralphScoreCCMmake_function('rename_definition', function B3083(identifier__3084, env__3085) {
        var new_identifier__3087 = ralphScoreCCfirst(rename_identifiers__3086([identifier__3084], env__3085));
        ralphScoreCCget_setter(env__3085, 'original-identifier', ralphScoreCCsymbol_name(new_identifier__3087), identifier__3084);
        return(new_identifier__3087);
    }, false);
var ralphScoreCCmap = B3065['map'], ralphScoreCCmemberQ = B3065['member?'], ralphScoreCCdestructure_symbol = B3065['destructure-symbol'], ralphScoreCCgenerate_symbol = B3065['generate-symbol'], ralphScoreCCpush = B3065['push'], rename_identifiers__3086 = ralphScoreCCMmake_function('rename_identifiers', function B3092(identifiers__3093, env__3094) {
        return(ralphScoreCCmap(function B3095(identifier__3096) {
            if (($T)(ralphScoreCCmemberQ(identifier__3096, Bspecial_symbols__3081)))
                return(identifier__3096);
            else {
                var B3097 = ralphScoreCCdestructure_symbol(identifier__3096), name__3098 = B3097[0], module_name__3099 = B3097[1];
                if (($T)(ralphScoreCCnot(module_name__3099)))
                    module_name__3099 = ralphScoreCCget(env__3094, 'module', 'name');
                var B3101 = false;
                if (($T)(ralphScoreCCnot(ralphScoreCCget(identifier__3096, 'generated?'))))
                    B3101 = name__3098;
                else
                    B3101 = false;
                var identifierT__3100 = ralphScoreCCgenerate_symbol(env__3094, B3101);
                ensure_naming_structure__3076(env__3094, module_name__3099, name__3098);
                ralphScoreCCpush(ralphScoreCCget(env__3094, 'identifiers', module_name__3099, name__3098), identifierT__3100);
                return(identifierT__3100);
            }
        }, identifiers__3093));
    }, false);
var ralphScoreCCanyQ = B3065['any?'], ralphScoreCCemptyQ = B3065['empty?'], ralphScoreCCpop = B3065['pop'], ralphScoreCCrest = B3065['rest'], restore_identifiers__3124 = ralphScoreCCMmake_function('restore_identifiers', function B3110(identifiers__3111, env__3112) {
        var B3113 = identifiers__3111, B3114 = false, B3115 = false, B3116 = [B3113];
        while (true) {
            var B3117 = B3114, B3125 = false;
            if (($T)(B3117))
                B3125 = B3117;
            else
                B3125 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B3116);
            var B3126 = ralphScoreCCnot(B3125);
            if (($T)(B3126)) {
                var identifier__3118 = ralphScoreCCfirst(B3113);
                (function B3119(identifier__3120) {
                    if (($T)(ralphScoreCCnot(ralphScoreCCmemberQ(identifier__3120, Bspecial_symbols__3081)))) {
                        var B3121 = ralphScoreCCdestructure_symbol(identifier__3120), name__3122 = B3121[0], module_name__3123 = B3121[1];
                        if (($T)(ralphScoreCCnot(module_name__3123)))
                            module_name__3123 = ralphScoreCCget(env__3112, 'module', 'name');
                        return(ralphScoreCCpop(ralphScoreCCget(env__3112, 'identifiers', module_name__3123, name__3122)));
                    } else
                        return(false);
                }(identifier__3118));
                B3113 = ralphScoreCCrest(B3113);
                B3116 = [B3113];
            } else
                break;
        }
        return(B3115);
    }, false);
var find_identifier__3136 = ralphScoreCCMmake_function('find_identifier', function B3129(identifier__3130, env__3131) {
        if (($T)(ralphScoreCCmemberQ(identifier__3130, Bspecial_symbols__3081)))
            return(identifier__3130);
        else {
            var B3132 = ralphScoreCCdestructure_symbol(identifier__3130), name__3133 = B3132[0], module_name__3134 = B3132[1];
            if (($T)(ralphScoreCCnot(module_name__3134)))
                module_name__3134 = ralphScoreCCget(env__3131, 'module', 'name');
            var renamings__3135 = ralphScoreCCget(env__3131, 'identifiers', module_name__3134, name__3133), B3137 = false;
            if (($T)(renamings__3135))
                B3137 = ralphScoreCCnot(ralphScoreCCemptyQ(renamings__3135));
            else
                B3137 = false;
            if (($T)(B3137))
                return(ralphScoreCCfirst(renamings__3135));
            else
                return(false);
        }
    }, false);
{
    var ralphScoreCCidentity = B3065['identity'], alpha_convert_form__3143 = ralphScoreCCMmake_function('alpha_convert_form', function B3139(exp__3140, env__3141) {
            return(alpha_convert__3142(exp__3140, env__3141, ralphScoreCCidentity));
        }, false);
    (exports)['alpha-convert-form'] = alpha_convert_form__3143;
}
var ralphScoreCCinstanceQ = B3065['instance?'], ralphScoreCCLarrayG = B3065['<array>'], ralphScoreCCEE = B3065['=='], ralphScoreCCcons = B3065['cons'], ralphScoreCCLsymbolG = B3065['<symbol>'], ralphScompilerSenvironmentCCresolve_symbol = B3068['resolve-symbol'], ralphScompilerSenvironmentCCfind_import_identifier = B3068['find-import-identifier'], ralphScoreCCMconcat = B3065['%concat'], ralphScompilerSenvironmentCCmake_import_definition = B3068['make-import-definition'], ralphScoreCCpush_last = B3065['push-last'], B3179 = $S('%bind'), B3180 = $S('%method'), B3181 = $S('%define'), B3182 = $S('%try'), B3183 = $S('%begin'), B3184 = $S('%var'), B3185 = $S('%get-property'), alpha_convert__3142 = ralphScoreCCMmake_function('alpha_convert', function B3186(exp__3187, env__3188, k__3189) {
        var B3190 = exp__3187;
        if (($T)(ralphScoreCCinstanceQ(B3190, ralphScoreCCLarrayG))) {
            var B3191 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3187)), B3192 = ralphScoreCCEE(B3191, '%quote'), B3255 = false;
            if (($T)(B3192))
                B3255 = B3192;
            else
                B3255 = ralphScoreCCEE(B3191, '%native-name');
            if (($T)(B3255))
                return(k__3189(exp__3187));
            else if (($T)(ralphScoreCCEE(B3191, '%bind'))) {
                var ____3193 = exp__3187[0], B3194 = exp__3187[1], identifier__3195 = B3194[0], value__3196 = B3194[1], form__3197 = exp__3187[2];
                return(alpha_convert__3142(value__3196, env__3188, function B3198(valueT__3199) {
                    var B3200 = rename_identifiers__3086([identifier__3195], env__3188), identifierT__3201 = B3200[0];
                    return(alpha_convert__3142(form__3197, env__3188, function B3202(formT__3203) {
                        restore_identifiers__3124([identifier__3195], env__3188);
                        return(k__3189([
                            B3179,
                            [
                                identifierT__3201,
                                valueT__3199
                            ],
                            formT__3203
                        ]));
                    }));
                }));
            } else if (($T)(ralphScoreCCEE(B3191, '%method'))) {
                var ____3204 = exp__3187[0], name__3205 = exp__3187[1], parameters__3206 = exp__3187[2], form__3207 = exp__3187[3], identifiers__3208 = ralphScoreCCcons(name__3205, parameters__3206), B3209 = rename_identifiers__3086(identifiers__3208, env__3188), nameT__3210 = B3209[0], parametersT__3211 = $SL.call(B3209, 1);
                return(alpha_convert__3142(form__3207, env__3188, function B3212(formT__3213) {
                    restore_identifiers__3124(identifiers__3208, env__3188);
                    return(k__3189([
                        B3180,
                        nameT__3210,
                        parametersT__3211,
                        formT__3213
                    ]));
                }));
            } else {
                var B3214 = ralphScoreCCEE(B3191, '%set'), B3256 = false;
                if (($T)(B3214))
                    B3256 = B3214;
                else {
                    var B3215 = ralphScoreCCEE(B3191, '%if');
                    if (($T)(B3215))
                        B3256 = B3215;
                    else {
                        var B3216 = ralphScoreCCEE(B3191, '%begin');
                        if (($T)(B3216))
                            B3256 = B3216;
                        else {
                            var B3217 = ralphScoreCCEE(B3191, '%while');
                            if (($T)(B3217))
                                B3256 = B3217;
                            else {
                                var B3218 = ralphScoreCCEE(B3191, '%native');
                                if (($T)(B3218))
                                    B3256 = B3218;
                                else {
                                    var B3219 = ralphScoreCCEE(B3191, '%native-call');
                                    if (($T)(B3219))
                                        B3256 = B3219;
                                    else {
                                        var B3220 = ralphScoreCCEE(B3191, '%infix');
                                        if (($T)(B3220))
                                            B3256 = B3220;
                                        else {
                                            var B3221 = ralphScoreCCEE(B3191, '%object');
                                            if (($T)(B3221))
                                                B3256 = B3221;
                                            else {
                                                var B3222 = ralphScoreCCEE(B3191, '%array');
                                                if (($T)(B3222))
                                                    B3256 = B3222;
                                                else
                                                    B3256 = ralphScoreCCEE(B3191, '%get-property');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (($T)(B3256)) {
                    var op__3223 = exp__3187[0], arguments__3224 = $SL.call(exp__3187, 1);
                    return(alpha_convertT__3225(arguments__3224, env__3188, function B3226(argumentsT__3227) {
                        return(k__3189(ralphScoreCCcons(op__3223, argumentsT__3227)));
                    }));
                } else if (($T)(ralphScoreCCEE(B3191, '%define'))) {
                    var ____3228 = exp__3187[0], identifier__3229 = exp__3187[1], value__3230 = exp__3187[2];
                    return(alpha_convert__3142(value__3230, env__3188, function B3231(valueT__3232) {
                        var B3233 = find_identifier__3136(identifier__3229, env__3188), identifierT__3234 = false;
                        if (($T)(B3233))
                            identifierT__3234 = B3233;
                        else
                            identifierT__3234 = rename_definition__3088(identifier__3229, env__3188);
                        return(k__3189([
                            B3181,
                            identifierT__3234,
                            valueT__3232
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B3191, '%try'))) {
                    var ____3235 = exp__3187[0], protected_form__3236 = exp__3187[1], identifier__3237 = exp__3187[2], handling_form__3238 = exp__3187[3];
                    return(alpha_convert__3142(protected_form__3236, env__3188, function B3239(protected_formT__3240) {
                        var B3241 = rename_identifiers__3086([identifier__3237], env__3188), identifierT__3242 = B3241[0];
                        return(alpha_convert__3142(handling_form__3238, env__3188, function B3243(handling_formT__3244) {
                            restore_identifiers__3124([identifier__3237], env__3188);
                            return(k__3189([
                                B3182,
                                protected_formT__3240,
                                identifierT__3242,
                                handling_formT__3244
                            ]));
                        }));
                    }));
                } else
                    return(alpha_convertTT__3245(exp__3187, env__3188, k__3189));
            }
        } else if (($T)(ralphScoreCCinstanceQ(B3190, ralphScoreCCLsymbolG))) {
            var B3246 = find_identifier__3136(exp__3187, env__3188);
            if (($T)(B3246)) {
                var identifier__3247 = B3246;
                return(k__3189(identifier__3247));
            } else {
                var symbol__3248 = ralphScompilerSenvironmentCCresolve_symbol(exp__3187, env__3188), B3249 = ralphScoreCCdestructure_symbol(symbol__3248), name__3250 = B3249[0], module_name__3251 = B3249[1];
                if (($T)(ralphScoreCCEE(module_name__3251, ralphScoreCCget(env__3188, 'module', 'name'))))
                    return(k__3189(rename_definition__3088(symbol__3248, env__3188)));
                else if (($T)(ralphScoreCCget(env__3188, 'definition-imported?', module_name__3251, name__3250)))
                    return(k__3189(symbol__3248));
                else {
                    ralphScoreCCget_setter(env__3188, 'definition-imported?', module_name__3251, name__3250, true);
                    var import_identifier__3252 = ralphScompilerSenvironmentCCfind_import_identifier(module_name__3251, env__3188), B3257 = [B3183], B3258 = false;
                    if (($T)(import_identifier__3252))
                        B3258 = [];
                    else
                        B3258 = [ralphScompilerSenvironmentCCmake_import_definition(module_name__3251, env__3188)];
                    var B3259 = ralphScoreCCMconcat(B3257, B3258), B3253 = import_identifier__3252, B3260 = false;
                    if (($T)(B3253))
                        B3260 = B3253;
                    else
                        B3260 = ralphScompilerSenvironmentCCfind_import_identifier(module_name__3251, env__3188);
                    var B3261 = [
                            B3185,
                            B3260,
                            name__3250
                        ], B3262 = [
                            B3184,
                            symbol__3248,
                            B3261
                        ], B3263 = [B3262], B3264 = ralphScoreCCMconcat(B3259, B3263), result__3254 = alpha_convert_form__3143(B3264, env__3188);
                    ralphScoreCCpush_last(result__3254, k__3189(symbol__3248));
                    return(result__3254);
                }
            }
        } else
            return(k__3189(exp__3187));
    }, false);
var alpha_convertT__3225 = ralphScoreCCMmake_function('alpha_convertT', function B3266(expT__3267, env__3268, k__3269) {
        if (($T)(ralphScoreCCemptyQ(expT__3267)))
            return(k__3269([]));
        else
            return(alpha_convertTT__3245(expT__3267, env__3268, k__3269));
    }, false);
var alpha_convertTT__3245 = ralphScoreCCMmake_function('alpha_convertTT', function B3273(exp__3274, env__3275, k__3276) {
        return(alpha_convert__3142(ralphScoreCCfirst(exp__3274), env__3275, function B3277(t__3278) {
            return(alpha_convertT__3225(ralphScoreCCrest(exp__3274), env__3275, function B3279(tT__3280) {
                return(k__3276(ralphScoreCCcons(t__3278, tT__3280)));
            }));
        }));
    }, false);
