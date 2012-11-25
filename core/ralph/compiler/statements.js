var B3433 = require('ralph/core');
var B3435 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3433['%var'], ralphScoreCCMmake_function = B3433['%make-function'], ralphScoreCCinstanceQ = B3433['instance?'], ralphScoreCCLarrayG = B3433['<array>'], ralphScoreCCsymbol_name = B3433['symbol-name'], ralphScoreCCfirst = B3433['first'], ralphScoreCCEE = B3433['=='], ralphScoreCClast_setter = B3433['last-setter'], ralphScoreCClast = B3433['last'], ralphScoreCCthird_setter = B3433['third-setter'], ralphScoreCCthird = B3433['third'], ralphScoreCCsecond_setter = B3433['second-setter'], ralphScoreCCsecond = B3433['second'], ralphScoreCCconcatenate = B3433['concatenate'], B3441 = $S('%begin'), wrap_valueN__3448 = ralphScoreCCMmake_function('wrap_valueN', function B3442(exp__3443, wrapper__3444) {
        if (($T)(ralphScoreCCinstanceQ(exp__3443, ralphScoreCCLarrayG))) {
            var B3445 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3443)), B3446 = ralphScoreCCEE(B3445, '%quote'), B3449 = false;
            if (($T)(B3446))
                B3449 = B3446;
            else
                B3449 = ralphScoreCCEE(B3445, '%native-name');
            if (($T)(B3449))
                return(exp__3443);
            else {
                var B3447 = ralphScoreCCEE(B3445, '%begin'), B3450 = false;
                if (($T)(B3447))
                    B3450 = B3447;
                else
                    B3450 = ralphScoreCCEE(B3445, '%bind');
                if (($T)(B3450)) {
                    ralphScoreCClast_setter(exp__3443, wrap_valueN__3448(ralphScoreCClast(exp__3443), wrapper__3444));
                    return(exp__3443);
                } else if (($T)(ralphScoreCCEE(B3445, '%if'))) {
                    ralphScoreCCthird_setter(exp__3443, wrap_valueN__3448(ralphScoreCCthird(exp__3443), wrapper__3444));
                    ralphScoreCClast_setter(exp__3443, wrap_valueN__3448(ralphScoreCClast(exp__3443), wrapper__3444));
                    return(exp__3443);
                } else if (($T)(ralphScoreCCEE(B3445, '%while')))
                    return([
                        B3441,
                        exp__3443,
                        wrap_valueN__3448(false, wrapper__3444)
                    ]);
                else if (($T)(ralphScoreCCEE(B3445, '%try'))) {
                    ralphScoreCCsecond_setter(exp__3443, wrap_valueN__3448(ralphScoreCCsecond(exp__3443), wrapper__3444));
                    ralphScoreCClast_setter(exp__3443, wrap_valueN__3448(ralphScoreCClast(exp__3443), wrapper__3444));
                    return(exp__3443);
                } else
                    return(ralphScoreCCconcatenate(wrapper__3444, [exp__3443]));
            }
        } else
            return(ralphScoreCCconcatenate(wrapper__3444, [exp__3443]));
    }, false);
var B3453 = $S('%native-call'), add_explicit_return__3456 = ralphScoreCCMmake_function('add_explicit_return', function B3454(exp__3455) {
        return(wrap_valueN__3448(exp__3455, [
            B3453,
            'return'
        ]));
    }, false);
var ralphScoreCCnot = B3433['not'], ralphScoreCCemptyQ = B3433['empty?'], ralphScoreCCmemberQ = B3433['member?'], B3462 = $S('%if'), B3463 = $S('%while'), B3464 = $S('%bind'), B3465 = $S('%try'), statementQ__3468 = ralphScoreCCMmake_function('statementQ', function B3466(exp__3467) {
        if (($T)(ralphScoreCCinstanceQ(exp__3467, ralphScoreCCLarrayG)))
            if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(exp__3467))))
                return(ralphScoreCCmemberQ(ralphScoreCCfirst(exp__3467), [
                    B3462,
                    B3463,
                    B3441,
                    B3464,
                    B3465
                ]));
            else
                return(false);
        else
            return(false);
    }, false);
var ralphScoreCCLbooleanG = B3433['<boolean>'], ralphScoreCCtrueQ = B3433['true?'], B3471 = $S('%native'), add_explicit_true__3474 = ralphScoreCCMmake_function('add_explicit_true', function B3472(exp__3473) {
        if (($T)(ralphScoreCCinstanceQ(exp__3473, ralphScoreCCLbooleanG)))
            return(ralphScoreCCtrueQ(exp__3473));
        else
            return([
                [
                    B3471,
                    '$T'
                ],
                exp__3473
            ]);
    }, false);
var ralphScoreCCLsymbolG = B3433['<symbol>'], ralphScoreCCget = B3433['get'], B3479 = $S('%set'), B3480 = $S('%get-property'), wrap_export__3489 = ralphScoreCCMmake_function('wrap_export', function B3481(identifier__3482, exp__3483, env__3484) {
        var B3485 = false;
        if (($T)(ralphScoreCCinstanceQ(identifier__3482, ralphScoreCCLsymbolG)))
            B3485 = ralphScoreCCget(env__3484, 'original-identifier', ralphScoreCCsymbol_name(identifier__3482));
        else
            B3485 = false;
        var definition_name__3487 = false;
        if (($T)(B3485)) {
            var original_identifier__3486 = B3485;
            definition_name__3487 = ralphScoreCCsymbol_name(original_identifier__3486);
        } else
            definition_name__3487 = false;
        var exportedQ__3488 = false;
        if (($T)(definition_name__3487))
            exportedQ__3488 = ralphScoreCCmemberQ(definition_name__3487, ralphScoreCCget(env__3484, 'module', 'exports'));
        else
            exportedQ__3488 = false;
        if (($T)(exportedQ__3488))
            return([
                B3441,
                exp__3483,
                [
                    B3479,
                    [
                        B3480,
                        [
                            B3471,
                            'exports'
                        ],
                        definition_name__3487
                    ],
                    identifier__3482
                ]
            ]);
        else
            return(exp__3483);
    }, false);
{
    var ralphScoreCCMconcat = B3433['%concat'], ralphScoreCCmap = B3433['map'], ralphScoreCCrcurry = B3433['rcurry'], B3495 = $S('%var'), transform_statementsN__3506 = ralphScoreCCMmake_function('transform_statementsN', function B3496(exp__3497, env__3498) {
            if (($T)(ralphScoreCCinstanceQ(exp__3497, ralphScoreCCLarrayG))) {
                var B3499 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3497)), B3500 = ralphScoreCCEE(B3499, '%quote'), B3519 = false;
                if (($T)(B3500))
                    B3519 = B3500;
                else
                    B3519 = ralphScoreCCEE(B3499, '%native-name');
                if (($T)(B3519))
                    return(exp__3497);
                else if (($T)(ralphScoreCCEE(B3499, '%bind'))) {
                    var ____3501 = exp__3497[0], B3502 = exp__3497[1], var__3503 = B3502[0], value__3504 = B3502[1], body__3505 = exp__3497[2];
                    if (($T)(statementQ__3468(value__3504)))
                        return([
                            B3464,
                            [
                                var__3503,
                                false
                            ],
                            [
                                B3441,
                                wrap_valueN__3448(transform_statementsN__3506(value__3504, env__3498), [
                                    B3479,
                                    var__3503
                                ]),
                                transform_statementsN__3506(body__3505, env__3498)
                            ]
                        ]);
                    else
                        return([
                            B3464,
                            [
                                var__3503,
                                transform_statementsN__3506(value__3504, env__3498)
                            ],
                            transform_statementsN__3506(body__3505, env__3498)
                        ]);
                } else if (($T)(ralphScoreCCEE(B3499, '%method'))) {
                    ralphScoreCClast_setter(exp__3497, add_explicit_return__3456(transform_statementsN__3506(ralphScoreCClast(exp__3497), env__3498)));
                    return(exp__3497);
                } else if (($T)(ralphScoreCCEE(B3499, '%set'))) {
                    var ____3507 = exp__3497[0], place__3508 = exp__3497[1], value__3509 = exp__3497[2];
                    return(wrap_export__3489(place__3508, [
                        B3479,
                        place__3508,
                        transform_statementsN__3506(value__3509, env__3498)
                    ], env__3498));
                } else if (($T)(ralphScoreCCEE(B3499, '%define')))
                    return(transform_statementsN__3506([
                        B3495,
                        ralphScoreCCsecond(exp__3497),
                        ralphScoreCCthird(exp__3497)
                    ], env__3498));
                else if (($T)(ralphScoreCCEE(B3499, '%if'))) {
                    var ____3510 = exp__3497[0], test__3511 = exp__3497[1], then__3512 = exp__3497[2], else__3513 = exp__3497[3];
                    return([
                        B3462,
                        add_explicit_true__3474(transform_statementsN__3506(test__3511, env__3498)),
                        transform_statementsN__3506(then__3512, env__3498),
                        transform_statementsN__3506(else__3513, env__3498)
                    ]);
                } else if (($T)(ralphScoreCCEE(B3499, '%begin'))) {
                    var ____3514 = exp__3497[0], exps__3515 = $SL.call(exp__3497, 1);
                    return(ralphScoreCCMconcat([B3441], ralphScoreCCmap(ralphScoreCCrcurry(transform_statementsN__3506, env__3498), exps__3515)));
                } else if (($T)(ralphScoreCCEE(B3499, '%while'))) {
                    ralphScoreCCsecond_setter(exp__3497, add_explicit_true__3474(transform_statementsN__3506(ralphScoreCCsecond(exp__3497), env__3498)));
                    ralphScoreCCthird_setter(exp__3497, transform_statementsN__3506(ralphScoreCCthird(exp__3497), env__3498));
                    return(exp__3497);
                } else if (($T)(ralphScoreCCEE(B3499, '%try'))) {
                    ralphScoreCCsecond_setter(exp__3497, transform_statementsN__3506(ralphScoreCCsecond(exp__3497), exp__3497));
                    ralphScoreCClast_setter(exp__3497, transform_statementsN__3506(ralphScoreCClast(exp__3497), env__3498));
                    return(exp__3497);
                } else if (($T)(ralphScoreCCEE(B3499, '%var'))) {
                    var ____3516 = exp__3497[0], identifier__3517 = exp__3497[1], value__3518 = exp__3497[2];
                    return(wrap_export__3489(identifier__3517, [
                        B3495,
                        identifier__3517,
                        transform_statementsN__3506(value__3518, env__3498)
                    ], env__3498));
                } else
                    return(ralphScoreCCmap(ralphScoreCCrcurry(transform_statementsN__3506, env__3498), exp__3497));
            } else
                return(exp__3497);
        }, false);
    (exports)['transform-statements!'] = transform_statementsN__3506;
}
