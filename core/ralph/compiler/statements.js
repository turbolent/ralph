{
    var B3408 = require('ralph/core');
}
{
    var B3410 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B3408['%var'];
        var ralphScoreCCinstanceQ = B3408['instance?'];
        var ralphScoreCCLarrayG = B3408['<array>'];
        var ralphScoreCCsymbol_name = B3408['symbol-name'];
        var ralphScoreCCfirst = B3408['first'];
        var ralphScoreCCEE = B3408['=='];
        var ralphScoreCClast_setter = B3408['last-setter'];
        var ralphScoreCClast = B3408['last'];
        var ralphScoreCCthird_setter = B3408['third-setter'];
        var ralphScoreCCthird = B3408['third'];
        var ralphScoreCCsecond_setter = B3408['second-setter'];
        var ralphScoreCCsecond = B3408['second'];
        var ralphScoreCCconcatenate = B3408['concatenate'];
        var ralphScoreCCMannotate_function = B3408['%annotate-function'];
        var B3416 = $S('%begin', 'ralph/core');
        var wrap_valueN__3423 = function B3417(exp__3418, wrapper__3419) {
            if (($T)(ralphScoreCCinstanceQ(exp__3418, ralphScoreCCLarrayG))) {
                {
                    var B3420 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3418));
                    var B3421 = ralphScoreCCEE(B3420, '%quote');
                    var B3424 = false;
                }
                if (($T)(B3421))
                    B3424 = B3421;
                else
                    B3424 = ralphScoreCCEE(B3420, '%native-name');
                if (($T)(B3424))
                    return(exp__3418);
                else {
                    {
                        var B3422 = ralphScoreCCEE(B3420, '%begin');
                        var B3425 = false;
                    }
                    if (($T)(B3422))
                        B3425 = B3422;
                    else
                        B3425 = ralphScoreCCEE(B3420, '%bind');
                    if (($T)(B3425)) {
                        ralphScoreCClast_setter(exp__3418, wrap_valueN__3423(ralphScoreCClast(exp__3418), wrapper__3419));
                        return(exp__3418);
                    } else if (($T)(ralphScoreCCEE(B3420, '%if'))) {
                        ralphScoreCCthird_setter(exp__3418, wrap_valueN__3423(ralphScoreCCthird(exp__3418), wrapper__3419));
                        ralphScoreCClast_setter(exp__3418, wrap_valueN__3423(ralphScoreCClast(exp__3418), wrapper__3419));
                        return(exp__3418);
                    } else if (($T)(ralphScoreCCEE(B3420, '%while')))
                        return([
                            B3416,
                            exp__3418,
                            wrap_valueN__3423(false, wrapper__3419)
                        ]);
                    else if (($T)(ralphScoreCCEE(B3420, '%try'))) {
                        ralphScoreCCsecond_setter(exp__3418, wrap_valueN__3423(ralphScoreCCsecond(exp__3418), wrapper__3419));
                        ralphScoreCClast_setter(exp__3418, wrap_valueN__3423(ralphScoreCClast(exp__3418), wrapper__3419));
                        return(exp__3418);
                    } else
                        return(ralphScoreCCconcatenate(wrapper__3419, [exp__3418]));
                }
            } else
                return(ralphScoreCCconcatenate(wrapper__3419, [exp__3418]));
        };
    }
    ralphScoreCCMannotate_function(wrap_valueN__3423, 'wrap_valueN', false);
}
{
    {
        var B3428 = $S('%native-call', 'ralph/core');
        var add_explicit_return__3431 = function B3429(exp__3430) {
            return(wrap_valueN__3423(exp__3430, [
                B3428,
                'return'
            ]));
        };
    }
    ralphScoreCCMannotate_function(add_explicit_return__3431, 'add_explicit_return', false);
}
{
    {
        var ralphScoreCCnot = B3408['not'];
        var ralphScoreCCemptyQ = B3408['empty?'];
        var ralphScoreCCmemberQ = B3408['member?'];
        var B3437 = $S('%if', 'ralph/core');
        var B3438 = $S('%while', 'ralph/core');
        var B3439 = $S('%bind', 'ralph/core');
        var B3440 = $S('%try', 'ralph/core');
        var statementQ__3443 = function B3441(exp__3442) {
            if (($T)(ralphScoreCCinstanceQ(exp__3442, ralphScoreCCLarrayG)))
                if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(exp__3442))))
                    return(ralphScoreCCmemberQ(ralphScoreCCfirst(exp__3442), [
                        B3437,
                        B3438,
                        B3416,
                        B3439,
                        B3440
                    ]));
                else
                    return(false);
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(statementQ__3443, 'statementQ', false);
}
{
    {
        var ralphScoreCCLbooleanG = B3408['<boolean>'];
        var ralphScoreCCtrueQ = B3408['true?'];
        var B3446 = $S('%native', 'ralph/core');
        var add_explicit_true__3449 = function B3447(exp__3448) {
            if (($T)(ralphScoreCCinstanceQ(exp__3448, ralphScoreCCLbooleanG)))
                return(ralphScoreCCtrueQ(exp__3448));
            else
                return([
                    [
                        B3446,
                        '$T'
                    ],
                    exp__3448
                ]);
        };
    }
    ralphScoreCCMannotate_function(add_explicit_true__3449, 'add_explicit_true', false);
}
{
    {
        var ralphScoreCCLsymbolG = B3408['<symbol>'];
        var ralphScoreCCget = B3408['get'];
        var B3454 = $S('%set', 'ralph/core');
        var B3455 = $S('%get-property', 'ralph/core');
        var wrap_export__3464 = function B3456(identifier__3457, exp__3458, env__3459) {
            {
                var B3460 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(identifier__3457, ralphScoreCCLsymbolG)))
                B3460 = ralphScoreCCget(env__3459, 'original-identifier', ralphScoreCCsymbol_name(identifier__3457));
            else
                B3460 = false;
            {
                var definition_name__3462 = false;
            }
            if (($T)(B3460)) {
                {
                    var original_identifier__3461 = B3460;
                }
                definition_name__3462 = ralphScoreCCsymbol_name(original_identifier__3461);
            } else
                definition_name__3462 = false;
            {
                var exportedQ__3463 = false;
            }
            if (($T)(definition_name__3462))
                exportedQ__3463 = ralphScoreCCmemberQ(definition_name__3462, ralphScoreCCget(env__3459, 'module', 'exports'));
            else
                exportedQ__3463 = false;
            if (($T)(exportedQ__3463))
                return([
                    B3416,
                    exp__3458,
                    [
                        B3454,
                        [
                            B3455,
                            [
                                B3446,
                                'exports'
                            ],
                            definition_name__3462
                        ],
                        identifier__3457
                    ]
                ]);
            else
                return(exp__3458);
        };
    }
    ralphScoreCCMannotate_function(wrap_export__3464, 'wrap_export', false);
}
{
    {
        var ralphScoreCCMconcat = B3408['%concat'];
        var ralphScoreCCmap = B3408['map'];
        var ralphScoreCCrcurry = B3408['rcurry'];
        var B3470 = $S('%var', 'ralph/core');
        var transform_statementsN__3481 = function B3471(exp__3472, env__3473) {
            if (($T)(ralphScoreCCinstanceQ(exp__3472, ralphScoreCCLarrayG))) {
                {
                    var B3474 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3472));
                    var B3475 = ralphScoreCCEE(B3474, '%quote');
                    var B3494 = false;
                }
                if (($T)(B3475))
                    B3494 = B3475;
                else
                    B3494 = ralphScoreCCEE(B3474, '%native-name');
                if (($T)(B3494))
                    return(exp__3472);
                else if (($T)(ralphScoreCCEE(B3474, '%bind'))) {
                    {
                        var ____3476 = exp__3472[0];
                        var B3477 = exp__3472[1];
                        var var__3478 = B3477[0];
                        var value__3479 = B3477[1];
                        var body__3480 = exp__3472[2];
                    }
                    if (($T)(statementQ__3443(value__3479)))
                        return([
                            B3439,
                            [
                                var__3478,
                                false
                            ],
                            [
                                B3416,
                                wrap_valueN__3423(transform_statementsN__3481(value__3479, env__3473), [
                                    B3454,
                                    var__3478
                                ]),
                                transform_statementsN__3481(body__3480, env__3473)
                            ]
                        ]);
                    else
                        return([
                            B3439,
                            [
                                var__3478,
                                transform_statementsN__3481(value__3479, env__3473)
                            ],
                            transform_statementsN__3481(body__3480, env__3473)
                        ]);
                } else if (($T)(ralphScoreCCEE(B3474, '%method'))) {
                    ralphScoreCClast_setter(exp__3472, add_explicit_return__3431(transform_statementsN__3481(ralphScoreCClast(exp__3472), env__3473)));
                    return(exp__3472);
                } else if (($T)(ralphScoreCCEE(B3474, '%set'))) {
                    {
                        var ____3482 = exp__3472[0];
                        var place__3483 = exp__3472[1];
                        var value__3484 = exp__3472[2];
                    }
                    return(wrap_export__3464(place__3483, [
                        B3454,
                        place__3483,
                        transform_statementsN__3481(value__3484, env__3473)
                    ], env__3473));
                } else if (($T)(ralphScoreCCEE(B3474, '%define')))
                    return(transform_statementsN__3481([
                        B3470,
                        ralphScoreCCsecond(exp__3472),
                        ralphScoreCCthird(exp__3472)
                    ], env__3473));
                else if (($T)(ralphScoreCCEE(B3474, '%if'))) {
                    {
                        var ____3485 = exp__3472[0];
                        var test__3486 = exp__3472[1];
                        var then__3487 = exp__3472[2];
                        var else__3488 = exp__3472[3];
                    }
                    return([
                        B3437,
                        add_explicit_true__3449(transform_statementsN__3481(test__3486, env__3473)),
                        transform_statementsN__3481(then__3487, env__3473),
                        transform_statementsN__3481(else__3488, env__3473)
                    ]);
                } else if (($T)(ralphScoreCCEE(B3474, '%begin'))) {
                    {
                        var ____3489 = exp__3472[0];
                        var exps__3490 = $SL.call(exp__3472, 1);
                    }
                    return(ralphScoreCCMconcat([B3416], ralphScoreCCmap(ralphScoreCCrcurry(transform_statementsN__3481, env__3473), exps__3490)));
                } else if (($T)(ralphScoreCCEE(B3474, '%while'))) {
                    ralphScoreCCsecond_setter(exp__3472, add_explicit_true__3449(transform_statementsN__3481(ralphScoreCCsecond(exp__3472), env__3473)));
                    ralphScoreCCthird_setter(exp__3472, transform_statementsN__3481(ralphScoreCCthird(exp__3472), env__3473));
                    return(exp__3472);
                } else if (($T)(ralphScoreCCEE(B3474, '%try'))) {
                    ralphScoreCCsecond_setter(exp__3472, transform_statementsN__3481(ralphScoreCCsecond(exp__3472), exp__3472));
                    ralphScoreCClast_setter(exp__3472, transform_statementsN__3481(ralphScoreCClast(exp__3472), env__3473));
                    return(exp__3472);
                } else if (($T)(ralphScoreCCEE(B3474, '%var'))) {
                    {
                        var ____3491 = exp__3472[0];
                        var identifier__3492 = exp__3472[1];
                        var value__3493 = exp__3472[2];
                    }
                    return(wrap_export__3464(identifier__3492, [
                        B3470,
                        identifier__3492,
                        transform_statementsN__3481(value__3493, env__3473)
                    ], env__3473));
                } else
                    return(ralphScoreCCmap(ralphScoreCCrcurry(transform_statementsN__3481, env__3473), exp__3472));
            } else
                return(exp__3472);
        };
    }
    (exports)['transform-statements!'] = transform_statementsN__3481;
    ralphScoreCCMannotate_function(transform_statementsN__3481, 'transform_statementsN', false);
}
