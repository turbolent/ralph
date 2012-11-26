var B3064 = require('ralph/core');
var B3067 = require('ralph/compiler/environment'), B3068 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3064['%var'], ralphScoreCCMmake_function = B3064['%make-function'], ralphScoreCCnot = B3064['not'], ralphScoreCCget = B3064['get'], ralphScoreCCget_setter = B3064['get-setter'], ralphScoreCCmake_object = B3064['make-object'], ensure_naming_structure__3075 = ralphScoreCCMmake_function('ensure_naming_structure', function B3070(env__3071, module_name__3072, name__3073) {
        if (($T)(ralphScoreCCnot(ralphScoreCCget(env__3071, 'identifiers', module_name__3072))))
            ralphScoreCCget_setter(env__3071, 'identifiers', module_name__3072, ralphScoreCCmake_object());
        var module_renamings__3074 = ralphScoreCCget(env__3071, 'identifiers', module_name__3072);
        if (($T)(ralphScoreCCnot(ralphScoreCCget(module_renamings__3074, name__3073))))
            ralphScoreCCget_setter(module_renamings__3074, name__3073, []);
        return(env__3071);
    }, false);
var B3078 = $S('%all-arguments'), B3079 = $S('%this-method'), Bspecial_symbols__3080 = [
        B3078,
        B3079
    ];
var ralphScoreCCfirst = B3064['first'], ralphScoreCCsymbol_name = B3064['symbol-name'], rename_definition__3087 = ralphScoreCCMmake_function('rename_definition', function B3082(identifier__3083, env__3084) {
        var new_identifier__3086 = ralphScoreCCfirst(rename_identifiers__3085([identifier__3083], env__3084));
        ralphScoreCCget_setter(env__3084, 'original-identifier', ralphScoreCCsymbol_name(new_identifier__3086), identifier__3083);
        return(new_identifier__3086);
    }, false);
var ralphScoreCCmap = B3064['map'], ralphScoreCCmemberQ = B3064['member?'], ralphScoreCCdestructure_symbol = B3064['destructure-symbol'], ralphScoreCCgenerate_symbol = B3064['generate-symbol'], ralphScoreCCpush = B3064['push'], rename_identifiers__3085 = ralphScoreCCMmake_function('rename_identifiers', function B3091(identifiers__3092, env__3093) {
        return(ralphScoreCCmap(function B3094(identifier__3095) {
            if (($T)(ralphScoreCCmemberQ(identifier__3095, Bspecial_symbols__3080)))
                return(identifier__3095);
            else {
                var B3096 = ralphScoreCCdestructure_symbol(identifier__3095), name__3097 = B3096[0], module_name__3098 = B3096[1];
                if (($T)(ralphScoreCCnot(module_name__3098)))
                    module_name__3098 = ralphScoreCCget(env__3093, 'module', 'name');
                var B3100 = false;
                if (($T)(ralphScoreCCnot(ralphScoreCCget(identifier__3095, 'generated?'))))
                    B3100 = name__3097;
                else
                    B3100 = false;
                var identifierT__3099 = ralphScoreCCgenerate_symbol(env__3093, B3100);
                ensure_naming_structure__3075(env__3093, module_name__3098, name__3097);
                ralphScoreCCpush(ralphScoreCCget(env__3093, 'identifiers', module_name__3098, name__3097), identifierT__3099);
                return(identifierT__3099);
            }
        }, identifiers__3092));
    }, false);
var ralphScoreCCanyQ = B3064['any?'], ralphScoreCCemptyQ = B3064['empty?'], ralphScoreCCpop = B3064['pop'], ralphScoreCCrest = B3064['rest'], restore_identifiers__3123 = ralphScoreCCMmake_function('restore_identifiers', function B3109(identifiers__3110, env__3111) {
        var B3112 = identifiers__3110, B3113 = false, B3114 = false, B3115 = [B3112];
        while (true) {
            var B3116 = B3113, B3124 = false;
            if (($T)(B3116))
                B3124 = B3116;
            else
                B3124 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B3115);
            var B3125 = ralphScoreCCnot(B3124);
            if (($T)(B3125)) {
                var identifier__3117 = ralphScoreCCfirst(B3112);
                (function B3118(identifier__3119) {
                    if (($T)(ralphScoreCCnot(ralphScoreCCmemberQ(identifier__3119, Bspecial_symbols__3080)))) {
                        var B3120 = ralphScoreCCdestructure_symbol(identifier__3119), name__3121 = B3120[0], module_name__3122 = B3120[1];
                        if (($T)(ralphScoreCCnot(module_name__3122)))
                            module_name__3122 = ralphScoreCCget(env__3111, 'module', 'name');
                        return(ralphScoreCCpop(ralphScoreCCget(env__3111, 'identifiers', module_name__3122, name__3121)));
                    } else
                        return(false);
                }(identifier__3117));
                B3112 = ralphScoreCCrest(B3112);
                B3115 = [B3112];
            } else
                break;
        }
        return(B3114);
    }, false);
var find_identifier__3135 = ralphScoreCCMmake_function('find_identifier', function B3128(identifier__3129, env__3130) {
        if (($T)(ralphScoreCCmemberQ(identifier__3129, Bspecial_symbols__3080)))
            return(identifier__3129);
        else {
            var B3131 = ralphScoreCCdestructure_symbol(identifier__3129), name__3132 = B3131[0], module_name__3133 = B3131[1];
            if (($T)(ralphScoreCCnot(module_name__3133)))
                module_name__3133 = ralphScoreCCget(env__3130, 'module', 'name');
            var renamings__3134 = ralphScoreCCget(env__3130, 'identifiers', module_name__3133, name__3132), B3136 = false;
            if (($T)(renamings__3134))
                B3136 = ralphScoreCCnot(ralphScoreCCemptyQ(renamings__3134));
            else
                B3136 = false;
            if (($T)(B3136))
                return(ralphScoreCCfirst(renamings__3134));
            else
                return(false);
        }
    }, false);
{
    var ralphScoreCCidentity = B3064['identity'], alpha_convert_form__3142 = ralphScoreCCMmake_function('alpha_convert_form', function B3138(exp__3139, env__3140) {
            return(alpha_convert__3141(exp__3139, env__3140, ralphScoreCCidentity));
        }, false);
    (exports)['alpha-convert-form'] = alpha_convert_form__3142;
}
var ralphScoreCCinstanceQ = B3064['instance?'], ralphScoreCCLarrayG = B3064['<array>'], ralphScoreCCEE = B3064['=='], ralphScoreCCcons = B3064['cons'], ralphScoreCCLsymbolG = B3064['<symbol>'], ralphScompilerSenvironmentCCresolve_symbol = B3067['resolve-symbol'], ralphScompilerSenvironmentCCfind_import_identifier = B3067['find-import-identifier'], ralphScoreCCMconcat = B3064['%concat'], ralphScompilerSenvironmentCCmake_import_definition = B3067['make-import-definition'], ralphScoreCCpush_last = B3064['push-last'], B3178 = $S('%bind', 'ralph/core'), B3179 = $S('%method', 'ralph/core'), B3180 = $S('%define', 'ralph/core'), B3181 = $S('%try', 'ralph/core'), B3182 = $S('%begin', 'ralph/core'), B3183 = $S('%var', 'ralph/core'), B3184 = $S('%get-property', 'ralph/core'), alpha_convert__3141 = ralphScoreCCMmake_function('alpha_convert', function B3185(exp__3186, env__3187, k__3188) {
        var B3189 = exp__3186;
        if (($T)(ralphScoreCCinstanceQ(B3189, ralphScoreCCLarrayG))) {
            var B3190 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3186)), B3191 = ralphScoreCCEE(B3190, '%quote'), B3254 = false;
            if (($T)(B3191))
                B3254 = B3191;
            else
                B3254 = ralphScoreCCEE(B3190, '%native-name');
            if (($T)(B3254))
                return(k__3188(exp__3186));
            else if (($T)(ralphScoreCCEE(B3190, '%bind'))) {
                var ____3192 = exp__3186[0], B3193 = exp__3186[1], identifier__3194 = B3193[0], value__3195 = B3193[1], form__3196 = exp__3186[2];
                return(alpha_convert__3141(value__3195, env__3187, function B3197(valueT__3198) {
                    var B3199 = rename_identifiers__3085([identifier__3194], env__3187), identifierT__3200 = B3199[0];
                    return(alpha_convert__3141(form__3196, env__3187, function B3201(formT__3202) {
                        restore_identifiers__3123([identifier__3194], env__3187);
                        return(k__3188([
                            B3178,
                            [
                                identifierT__3200,
                                valueT__3198
                            ],
                            formT__3202
                        ]));
                    }));
                }));
            } else if (($T)(ralphScoreCCEE(B3190, '%method'))) {
                var ____3203 = exp__3186[0], name__3204 = exp__3186[1], parameters__3205 = exp__3186[2], form__3206 = exp__3186[3], identifiers__3207 = ralphScoreCCcons(name__3204, parameters__3205), B3208 = rename_identifiers__3085(identifiers__3207, env__3187), nameT__3209 = B3208[0], parametersT__3210 = $SL.call(B3208, 1);
                return(alpha_convert__3141(form__3206, env__3187, function B3211(formT__3212) {
                    restore_identifiers__3123(identifiers__3207, env__3187);
                    return(k__3188([
                        B3179,
                        nameT__3209,
                        parametersT__3210,
                        formT__3212
                    ]));
                }));
            } else {
                var B3213 = ralphScoreCCEE(B3190, '%set'), B3255 = false;
                if (($T)(B3213))
                    B3255 = B3213;
                else {
                    var B3214 = ralphScoreCCEE(B3190, '%if');
                    if (($T)(B3214))
                        B3255 = B3214;
                    else {
                        var B3215 = ralphScoreCCEE(B3190, '%begin');
                        if (($T)(B3215))
                            B3255 = B3215;
                        else {
                            var B3216 = ralphScoreCCEE(B3190, '%while');
                            if (($T)(B3216))
                                B3255 = B3216;
                            else {
                                var B3217 = ralphScoreCCEE(B3190, '%native');
                                if (($T)(B3217))
                                    B3255 = B3217;
                                else {
                                    var B3218 = ralphScoreCCEE(B3190, '%native-call');
                                    if (($T)(B3218))
                                        B3255 = B3218;
                                    else {
                                        var B3219 = ralphScoreCCEE(B3190, '%infix');
                                        if (($T)(B3219))
                                            B3255 = B3219;
                                        else {
                                            var B3220 = ralphScoreCCEE(B3190, '%object');
                                            if (($T)(B3220))
                                                B3255 = B3220;
                                            else {
                                                var B3221 = ralphScoreCCEE(B3190, '%array');
                                                if (($T)(B3221))
                                                    B3255 = B3221;
                                                else
                                                    B3255 = ralphScoreCCEE(B3190, '%get-property');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (($T)(B3255)) {
                    var op__3222 = exp__3186[0], arguments__3223 = $SL.call(exp__3186, 1);
                    return(alpha_convertT__3224(arguments__3223, env__3187, function B3225(argumentsT__3226) {
                        return(k__3188(ralphScoreCCcons(op__3222, argumentsT__3226)));
                    }));
                } else if (($T)(ralphScoreCCEE(B3190, '%define'))) {
                    var ____3227 = exp__3186[0], identifier__3228 = exp__3186[1], value__3229 = exp__3186[2];
                    return(alpha_convert__3141(value__3229, env__3187, function B3230(valueT__3231) {
                        var B3232 = find_identifier__3135(identifier__3228, env__3187), identifierT__3233 = false;
                        if (($T)(B3232))
                            identifierT__3233 = B3232;
                        else
                            identifierT__3233 = rename_definition__3087(identifier__3228, env__3187);
                        return(k__3188([
                            B3180,
                            identifierT__3233,
                            valueT__3231
                        ]));
                    }));
                } else if (($T)(ralphScoreCCEE(B3190, '%try'))) {
                    var ____3234 = exp__3186[0], protected_form__3235 = exp__3186[1], identifier__3236 = exp__3186[2], handling_form__3237 = exp__3186[3];
                    return(alpha_convert__3141(protected_form__3235, env__3187, function B3238(protected_formT__3239) {
                        var B3240 = rename_identifiers__3085([identifier__3236], env__3187), identifierT__3241 = B3240[0];
                        return(alpha_convert__3141(handling_form__3237, env__3187, function B3242(handling_formT__3243) {
                            restore_identifiers__3123([identifier__3236], env__3187);
                            return(k__3188([
                                B3181,
                                protected_formT__3239,
                                identifierT__3241,
                                handling_formT__3243
                            ]));
                        }));
                    }));
                } else
                    return(alpha_convertTT__3244(exp__3186, env__3187, k__3188));
            }
        } else if (($T)(ralphScoreCCinstanceQ(B3189, ralphScoreCCLsymbolG))) {
            var B3245 = find_identifier__3135(exp__3186, env__3187);
            if (($T)(B3245)) {
                var identifier__3246 = B3245;
                return(k__3188(identifier__3246));
            } else {
                var symbol__3247 = ralphScompilerSenvironmentCCresolve_symbol(exp__3186, env__3187), B3248 = ralphScoreCCdestructure_symbol(symbol__3247), name__3249 = B3248[0], module_name__3250 = B3248[1];
                if (($T)(ralphScoreCCEE(module_name__3250, ralphScoreCCget(env__3187, 'module', 'name'))))
                    return(k__3188(rename_definition__3087(symbol__3247, env__3187)));
                else if (($T)(ralphScoreCCget(env__3187, 'definition-imported?', module_name__3250, name__3249)))
                    return(k__3188(symbol__3247));
                else {
                    ralphScoreCCget_setter(env__3187, 'definition-imported?', module_name__3250, name__3249, true);
                    var import_identifier__3251 = ralphScompilerSenvironmentCCfind_import_identifier(module_name__3250, env__3187), B3256 = [B3182], B3257 = false;
                    if (($T)(import_identifier__3251))
                        B3257 = [];
                    else
                        B3257 = [ralphScompilerSenvironmentCCmake_import_definition(module_name__3250, env__3187)];
                    var B3258 = ralphScoreCCMconcat(B3256, B3257), B3252 = import_identifier__3251, B3259 = false;
                    if (($T)(B3252))
                        B3259 = B3252;
                    else
                        B3259 = ralphScompilerSenvironmentCCfind_import_identifier(module_name__3250, env__3187);
                    var B3260 = [
                            B3184,
                            B3259,
                            name__3249
                        ], B3261 = [
                            B3183,
                            symbol__3247,
                            B3260
                        ], B3262 = [B3261], B3263 = ralphScoreCCMconcat(B3258, B3262), result__3253 = alpha_convert_form__3142(B3263, env__3187);
                    ralphScoreCCpush_last(result__3253, k__3188(symbol__3247));
                    return(result__3253);
                }
            }
        } else
            return(k__3188(exp__3186));
    }, false);
var alpha_convertT__3224 = ralphScoreCCMmake_function('alpha_convertT', function B3265(expT__3266, env__3267, k__3268) {
        if (($T)(ralphScoreCCemptyQ(expT__3266)))
            return(k__3268([]));
        else
            return(alpha_convertTT__3244(expT__3266, env__3267, k__3268));
    }, false);
var alpha_convertTT__3244 = ralphScoreCCMmake_function('alpha_convertTT', function B3272(exp__3273, env__3274, k__3275) {
        return(alpha_convert__3141(ralphScoreCCfirst(exp__3273), env__3274, function B3276(t__3277) {
            return(alpha_convertT__3224(ralphScoreCCrest(exp__3273), env__3274, function B3278(tT__3279) {
                return(k__3275(ralphScoreCCcons(t__3277, tT__3279)));
            }));
        }));
    }, false);
