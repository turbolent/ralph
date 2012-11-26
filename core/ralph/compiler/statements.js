var B3432 = require('ralph/core');
var B3434 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3432['%var'], ralphScoreCCMmake_function = B3432['%make-function'], ralphScoreCCinstanceQ = B3432['instance?'], ralphScoreCCLarrayG = B3432['<array>'], ralphScoreCCsymbol_name = B3432['symbol-name'], ralphScoreCCfirst = B3432['first'], ralphScoreCCEE = B3432['=='], ralphScoreCClast_setter = B3432['last-setter'], ralphScoreCClast = B3432['last'], ralphScoreCCthird_setter = B3432['third-setter'], ralphScoreCCthird = B3432['third'], ralphScoreCCsecond_setter = B3432['second-setter'], ralphScoreCCsecond = B3432['second'], ralphScoreCCconcatenate = B3432['concatenate'], B3440 = $S('%begin', 'ralph/core'), wrap_valueN__3447 = ralphScoreCCMmake_function('wrap_valueN', function B3441(exp__3442, wrapper__3443) {
        if (($T)(ralphScoreCCinstanceQ(exp__3442, ralphScoreCCLarrayG))) {
            var B3444 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3442)), B3445 = ralphScoreCCEE(B3444, '%quote'), B3448 = false;
            if (($T)(B3445))
                B3448 = B3445;
            else
                B3448 = ralphScoreCCEE(B3444, '%native-name');
            if (($T)(B3448))
                return(exp__3442);
            else {
                var B3446 = ralphScoreCCEE(B3444, '%begin'), B3449 = false;
                if (($T)(B3446))
                    B3449 = B3446;
                else
                    B3449 = ralphScoreCCEE(B3444, '%bind');
                if (($T)(B3449)) {
                    ralphScoreCClast_setter(exp__3442, wrap_valueN__3447(ralphScoreCClast(exp__3442), wrapper__3443));
                    return(exp__3442);
                } else if (($T)(ralphScoreCCEE(B3444, '%if'))) {
                    ralphScoreCCthird_setter(exp__3442, wrap_valueN__3447(ralphScoreCCthird(exp__3442), wrapper__3443));
                    ralphScoreCClast_setter(exp__3442, wrap_valueN__3447(ralphScoreCClast(exp__3442), wrapper__3443));
                    return(exp__3442);
                } else if (($T)(ralphScoreCCEE(B3444, '%while')))
                    return([
                        B3440,
                        exp__3442,
                        wrap_valueN__3447(false, wrapper__3443)
                    ]);
                else if (($T)(ralphScoreCCEE(B3444, '%try'))) {
                    ralphScoreCCsecond_setter(exp__3442, wrap_valueN__3447(ralphScoreCCsecond(exp__3442), wrapper__3443));
                    ralphScoreCClast_setter(exp__3442, wrap_valueN__3447(ralphScoreCClast(exp__3442), wrapper__3443));
                    return(exp__3442);
                } else
                    return(ralphScoreCCconcatenate(wrapper__3443, [exp__3442]));
            }
        } else
            return(ralphScoreCCconcatenate(wrapper__3443, [exp__3442]));
    }, false);
var B3452 = $S('%native-call', 'ralph/core'), add_explicit_return__3455 = ralphScoreCCMmake_function('add_explicit_return', function B3453(exp__3454) {
        return(wrap_valueN__3447(exp__3454, [
            B3452,
            'return'
        ]));
    }, false);
var ralphScoreCCnot = B3432['not'], ralphScoreCCemptyQ = B3432['empty?'], ralphScoreCCmemberQ = B3432['member?'], B3461 = $S('%if', 'ralph/core'), B3462 = $S('%while', 'ralph/core'), B3463 = $S('%bind', 'ralph/core'), B3464 = $S('%try', 'ralph/core'), statementQ__3467 = ralphScoreCCMmake_function('statementQ', function B3465(exp__3466) {
        if (($T)(ralphScoreCCinstanceQ(exp__3466, ralphScoreCCLarrayG)))
            if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(exp__3466))))
                return(ralphScoreCCmemberQ(ralphScoreCCfirst(exp__3466), [
                    B3461,
                    B3462,
                    B3440,
                    B3463,
                    B3464
                ]));
            else
                return(false);
        else
            return(false);
    }, false);
var ralphScoreCCLbooleanG = B3432['<boolean>'], ralphScoreCCtrueQ = B3432['true?'], B3470 = $S('%native', 'ralph/core'), add_explicit_true__3473 = ralphScoreCCMmake_function('add_explicit_true', function B3471(exp__3472) {
        if (($T)(ralphScoreCCinstanceQ(exp__3472, ralphScoreCCLbooleanG)))
            return(ralphScoreCCtrueQ(exp__3472));
        else
            return([
                [
                    B3470,
                    '$T'
                ],
                exp__3472
            ]);
    }, false);
var ralphScoreCCLsymbolG = B3432['<symbol>'], ralphScoreCCget = B3432['get'], B3478 = $S('%set', 'ralph/core'), B3479 = $S('%get-property', 'ralph/core'), wrap_export__3488 = ralphScoreCCMmake_function('wrap_export', function B3480(identifier__3481, exp__3482, env__3483) {
        var B3484 = false;
        if (($T)(ralphScoreCCinstanceQ(identifier__3481, ralphScoreCCLsymbolG)))
            B3484 = ralphScoreCCget(env__3483, 'original-identifier', ralphScoreCCsymbol_name(identifier__3481));
        else
            B3484 = false;
        var definition_name__3486 = false;
        if (($T)(B3484)) {
            var original_identifier__3485 = B3484;
            definition_name__3486 = ralphScoreCCsymbol_name(original_identifier__3485);
        } else
            definition_name__3486 = false;
        var exportedQ__3487 = false;
        if (($T)(definition_name__3486))
            exportedQ__3487 = ralphScoreCCmemberQ(definition_name__3486, ralphScoreCCget(env__3483, 'module', 'exports'));
        else
            exportedQ__3487 = false;
        if (($T)(exportedQ__3487))
            return([
                B3440,
                exp__3482,
                [
                    B3478,
                    [
                        B3479,
                        [
                            B3470,
                            'exports'
                        ],
                        definition_name__3486
                    ],
                    identifier__3481
                ]
            ]);
        else
            return(exp__3482);
    }, false);
{
    var ralphScoreCCMconcat = B3432['%concat'], ralphScoreCCmap = B3432['map'], ralphScoreCCrcurry = B3432['rcurry'], B3494 = $S('%var', 'ralph/core'), transform_statementsN__3505 = ralphScoreCCMmake_function('transform_statementsN', function B3495(exp__3496, env__3497) {
            if (($T)(ralphScoreCCinstanceQ(exp__3496, ralphScoreCCLarrayG))) {
                var B3498 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3496)), B3499 = ralphScoreCCEE(B3498, '%quote'), B3518 = false;
                if (($T)(B3499))
                    B3518 = B3499;
                else
                    B3518 = ralphScoreCCEE(B3498, '%native-name');
                if (($T)(B3518))
                    return(exp__3496);
                else if (($T)(ralphScoreCCEE(B3498, '%bind'))) {
                    var ____3500 = exp__3496[0], B3501 = exp__3496[1], var__3502 = B3501[0], value__3503 = B3501[1], body__3504 = exp__3496[2];
                    if (($T)(statementQ__3467(value__3503)))
                        return([
                            B3463,
                            [
                                var__3502,
                                false
                            ],
                            [
                                B3440,
                                wrap_valueN__3447(transform_statementsN__3505(value__3503, env__3497), [
                                    B3478,
                                    var__3502
                                ]),
                                transform_statementsN__3505(body__3504, env__3497)
                            ]
                        ]);
                    else
                        return([
                            B3463,
                            [
                                var__3502,
                                transform_statementsN__3505(value__3503, env__3497)
                            ],
                            transform_statementsN__3505(body__3504, env__3497)
                        ]);
                } else if (($T)(ralphScoreCCEE(B3498, '%method'))) {
                    ralphScoreCClast_setter(exp__3496, add_explicit_return__3455(transform_statementsN__3505(ralphScoreCClast(exp__3496), env__3497)));
                    return(exp__3496);
                } else if (($T)(ralphScoreCCEE(B3498, '%set'))) {
                    var ____3506 = exp__3496[0], place__3507 = exp__3496[1], value__3508 = exp__3496[2];
                    return(wrap_export__3488(place__3507, [
                        B3478,
                        place__3507,
                        transform_statementsN__3505(value__3508, env__3497)
                    ], env__3497));
                } else if (($T)(ralphScoreCCEE(B3498, '%define')))
                    return(transform_statementsN__3505([
                        B3494,
                        ralphScoreCCsecond(exp__3496),
                        ralphScoreCCthird(exp__3496)
                    ], env__3497));
                else if (($T)(ralphScoreCCEE(B3498, '%if'))) {
                    var ____3509 = exp__3496[0], test__3510 = exp__3496[1], then__3511 = exp__3496[2], else__3512 = exp__3496[3];
                    return([
                        B3461,
                        add_explicit_true__3473(transform_statementsN__3505(test__3510, env__3497)),
                        transform_statementsN__3505(then__3511, env__3497),
                        transform_statementsN__3505(else__3512, env__3497)
                    ]);
                } else if (($T)(ralphScoreCCEE(B3498, '%begin'))) {
                    var ____3513 = exp__3496[0], exps__3514 = $SL.call(exp__3496, 1);
                    return(ralphScoreCCMconcat([B3440], ralphScoreCCmap(ralphScoreCCrcurry(transform_statementsN__3505, env__3497), exps__3514)));
                } else if (($T)(ralphScoreCCEE(B3498, '%while'))) {
                    ralphScoreCCsecond_setter(exp__3496, add_explicit_true__3473(transform_statementsN__3505(ralphScoreCCsecond(exp__3496), env__3497)));
                    ralphScoreCCthird_setter(exp__3496, transform_statementsN__3505(ralphScoreCCthird(exp__3496), env__3497));
                    return(exp__3496);
                } else if (($T)(ralphScoreCCEE(B3498, '%try'))) {
                    ralphScoreCCsecond_setter(exp__3496, transform_statementsN__3505(ralphScoreCCsecond(exp__3496), exp__3496));
                    ralphScoreCClast_setter(exp__3496, transform_statementsN__3505(ralphScoreCClast(exp__3496), env__3497));
                    return(exp__3496);
                } else if (($T)(ralphScoreCCEE(B3498, '%var'))) {
                    var ____3515 = exp__3496[0], identifier__3516 = exp__3496[1], value__3517 = exp__3496[2];
                    return(wrap_export__3488(identifier__3516, [
                        B3494,
                        identifier__3516,
                        transform_statementsN__3505(value__3517, env__3497)
                    ], env__3497));
                } else
                    return(ralphScoreCCmap(ralphScoreCCrcurry(transform_statementsN__3505, env__3497), exp__3496));
            } else
                return(exp__3496);
        }, false);
    (exports)['transform-statements!'] = transform_statementsN__3505;
}
