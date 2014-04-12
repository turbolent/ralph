{
    var $module = Object.create(null);
    var Mexport = function B3425(name__3426, value__3427) {
        var B3428 = (exports);
        return(B3428[name__3426] = value__3427);
    };
}
var B3429 = require('ralph/core');
{
    var B3430 = require('ralph/compiler/utilities');
    {
        var B3431 = require('ralph/compiler/environment');
        {
            var B3432 = require('ralph/compiler/transformer');
            var B3433 = require('ralph/format');
        }
    }
}
{
    var B3437 = $S('%begin', 'ralph/core');
    {
        var wrap_valueN = function B3438(exp__3439, wrapper__3440) {
            if (($T)(B3429['instance?'](exp__3439, B3429['<array>']))) {
                var B3441 = B3429['symbol-name'](B3429['first'](exp__3439));
                if (($T)(B3429['=='](B3441, '%quote')))
                    return(exp__3439);
                else {
                    var B3442 = B3429['=='](B3441, '%begin');
                    {
                        var B3443 = false;
                        if (($T)(B3442))
                            B3443 = B3442;
                        else
                            B3443 = B3429['=='](B3441, '%bind');
                        if (($T)(B3443)) {
                            B3429['last-setter'](exp__3439, wrap_valueN(B3429['last'](exp__3439), wrapper__3440));
                            return(exp__3439);
                        } else if (($T)(B3429['=='](B3441, '%if'))) {
                            B3429['third-setter'](exp__3439, wrap_valueN(B3429['third'](exp__3439), wrapper__3440));
                            {
                                B3429['last-setter'](exp__3439, wrap_valueN(B3429['last'](exp__3439), wrapper__3440));
                                return(exp__3439);
                            }
                        } else if (($T)(B3429['=='](B3441, '%while')))
                            return([
                                B3437,
                                exp__3439,
                                wrap_valueN(false, wrapper__3440)
                            ]);
                        else if (($T)(B3429['=='](B3441, '%try'))) {
                            B3429['second-setter'](exp__3439, wrap_valueN(B3429['second'](exp__3439), wrapper__3440));
                            {
                                B3429['last-setter'](exp__3439, wrap_valueN(B3429['last'](exp__3439), wrapper__3440));
                                return(exp__3439);
                            }
                        } else
                            return(B3429['concatenate'](wrapper__3440, [exp__3439]));
                    }
                }
            } else
                return(B3429['concatenate'](wrapper__3440, [exp__3439]));
        };
        B3429['%annotate-function'](wrap_valueN, 'wrap-value!', false);
    }
}
{
    var B3445 = $S('%native-call', 'ralph/core');
    {
        var wrap_return = function B3446(exp__3447) {
            return(wrap_valueN(exp__3447, [
                B3445,
                'return'
            ]));
        };
        B3429['%annotate-function'](wrap_return, 'wrap-return', false);
    }
}
{
    var B3448 = $S('%if', 'ralph/core');
    {
        var B3449 = $S('%while', 'ralph/core');
        {
            var B3450 = $S('%bind', 'ralph/core');
            {
                var B3451 = $S('%try', 'ralph/core');
                var Bstatement_symbols = [
                        B3448,
                        B3449,
                        B3437,
                        B3450,
                        B3451
                    ];
            }
        }
    }
}
{
    var generates_statementQ = function B3453(exp__3454) {
        if (($T)(B3429['instance?'](exp__3454, B3429['<array>'])))
            if (($T)(B3429['not'](B3429['empty?'](exp__3454))))
                return(B3429['member?'](B3429['first'](exp__3454), Bstatement_symbols));
            else
                return(false);
        else
            return(false);
    };
    B3429['%annotate-function'](generates_statementQ, 'generates-statement?', false);
}
{
    var B3456 = $S('%native', 'ralph/core');
    {
        var wrap_true = function B3457(exp__3458) {
            if (($T)(B3429['instance?'](exp__3458, B3429['<boolean>'])))
                return(B3429['true?'](exp__3458));
            else
                return([
                    [
                        B3456,
                        '$T'
                    ],
                    exp__3458
                ]);
        };
        B3429['%annotate-function'](wrap_true, 'wrap-true', false);
    }
}
{
    var B3460 = $S('%export');
    {
        var wrap_export = function B3461(identifier__3462, value__3463, exp__3464, env__3465) {
            var B3466 = false;
            if (($T)(B3429['not'](B3431['locally-bound?'](exp__3464, env__3465))))
                B3466 = B3429['member?'](B3429['symbol-name'](identifier__3462), B3429['get'](env__3465, 'module', 'exports'));
            else
                B3466 = false;
            if (($T)(B3466))
                return([
                    B3437,
                    exp__3464,
                    [
                        B3460,
                        B3429['symbol-name'](identifier__3462),
                        value__3463
                    ]
                ]);
            else
                return(exp__3464);
        };
        B3429['%annotate-function'](wrap_export, 'wrap-export', false);
    }
}
var TtransformersT = B3429['make-plain-object']();
{
    {
        var transform_statementsN = function B3470(exp__3471, env__3472) {
            var B3473 = exp__3471;
            if (($T)(B3429['instance?'](B3473, B3429['<array>']))) {
                var name__3474 = B3429['symbol-name'](B3429['first'](exp__3471));
                {
                    var B3475 = B3429['get'](TtransformersT, name__3474);
                    if (($T)(B3475)) {
                        var transformer__3476 = B3475;
                        return(B3429['apply'](transformer__3476, env__3472, B3429['rest'](exp__3471)));
                    } else
                        return(B3429['map'](B3429['rcurry'](transform_statementsN, env__3472), exp__3471));
                }
            } else if (($T)(B3429['instance?'](B3473, B3429['<symbol>'])))
                if (($T)(B3430['special-symbol?'](exp__3471)))
                    return(exp__3471);
                else
                    return(exp__3471);
            else
                return(exp__3471);
        };
        Mexport('transform-statements!', transform_statementsN);
    }
    B3429['%annotate-function'](transform_statementsN, 'transform-statements!', false);
}
{
    var B3477 = $S('%quote', 'ralph/core');
    B3429['get-setter'](TtransformersT, '%quote', B3432['make-quote-transformer'](B3477));
}
{
    var B3479 = $S('%var', 'ralph/core');
    {
        var B3480 = $S('%set', 'ralph/core');
        B3429['get-setter'](TtransformersT, '%bind', B3432['make-bind-transformer'](transform_statementsN, function B3481(env__3482, identifier__3483, valueT__3484, bodyT__3485) {
            if (($T)(generates_statementQ(valueT__3484)))
                return([
                    B3437,
                    [
                        B3479,
                        identifier__3483,
                        false
                    ],
                    wrap_valueN(valueT__3484, [
                        B3480,
                        identifier__3483
                    ]),
                    bodyT__3485
                ]);
            else
                return([
                    B3437,
                    [
                        B3479,
                        identifier__3483,
                        valueT__3484
                    ],
                    bodyT__3485
                ]);
        }));
    }
}
{
    var B3487 = $S('%method', 'ralph/core');
    B3429['get-setter'](TtransformersT, '%method', B3432['make-method-transformer'](transform_statementsN, function B3488(env__3489, name__3490, parameters__3491, formT__3492) {
        return([
            B3487,
            name__3490,
            parameters__3491,
            wrap_return(formT__3492)
        ]);
    }));
}
B3429['get-setter'](TtransformersT, '%set', B3432['make-set-transformer'](transform_statementsN, function B3494(env__3495, placeT__3496, valueT__3497) {
    return(wrap_export(placeT__3496, placeT__3496, [
        B3480,
        placeT__3496,
        valueT__3497
    ], env__3495));
}));
{
    var B3505 = [
            '%var',
            '%define'
        ];
    {
        var B3506 = false;
        {
            var B3507 = false;
            {
                var B3508 = [B3505];
                {
                    while (true) {
                        var B3517 = B3429['not'];
                        {
                            var B3509 = B3506;
                            {
                                var B3518 = false;
                                if (($T)(B3509))
                                    B3518 = B3509;
                                else
                                    B3518 = B3429['any?'](B3429['empty?'], B3508);
                                {
                                    var B3519 = B3517(B3518);
                                    if (($T)(B3519)) {
                                        var name__3510 = B3429['first'](B3505);
                                        {
                                            (function B3511(name__3512) {
                                                return(B3429['get-setter'](TtransformersT, name__3512, B3432['make-var-transformer'](transform_statementsN, function B3513(env__3514, identifier__3515, valueT__3516) {
                                                    return(wrap_export(identifier__3515, identifier__3515, [
                                                        B3479,
                                                        identifier__3515,
                                                        valueT__3516
                                                    ], env__3514));
                                                })));
                                            }(name__3510));
                                            {
                                                B3505 = B3429['rest'](B3505);
                                                B3508 = [B3505];
                                            }
                                        }
                                    } else
                                        break;
                                }
                            }
                        }
                    }
                    B3507;
                }
            }
        }
    }
}
{
    var B3521 = $K('count');
    {
        var B3522 = $K('k');
        B3429['get-setter'](TtransformersT, '%if', B3432['make-rest-transformer'](transform_statementsN, B3521, 3, B3522, function B3523(env__3524, predicateT__3525, consequentT__3526, alternateT__3527) {
            return([
                B3448,
                wrap_true(predicateT__3525),
                consequentT__3526,
                alternateT__3527
            ]);
        }));
    }
}
B3429['get-setter'](TtransformersT, '%while', B3432['make-rest-transformer'](transform_statementsN, B3521, 2, B3522, function B3529(env__3530, predicateT__3531, formT__3532) {
    return([
        B3449,
        wrap_true(predicateT__3531),
        formT__3532
    ]);
}));
B3429['get-setter'](TtransformersT, '%try', B3432['make-try-transformer'](transform_statementsN));
B3429['get-setter'](TtransformersT, '%object', B3432['make-object-transformer'](transform_statementsN));
{
    var B3539 = $S('%infix', 'ralph/core');
    {
        var B3540 = [
                B3445,
                B3539
            ];
        {
            var B3541 = false;
            {
                var B3542 = false;
                {
                    var B3543 = [B3540];
                    {
                        while (true) {
                            var B3548 = B3429['not'];
                            {
                                var B3544 = B3541;
                                {
                                    var B3549 = false;
                                    if (($T)(B3544))
                                        B3549 = B3544;
                                    else
                                        B3549 = B3429['any?'](B3429['empty?'], B3543);
                                    {
                                        var B3550 = B3548(B3549);
                                        if (($T)(B3550)) {
                                            var symbol__3545 = B3429['first'](B3540);
                                            {
                                                (function B3546(symbol__3547) {
                                                    return(B3429['get-setter'](TtransformersT, B3429['symbol-name'](symbol__3547), B3432['make-operator-transformer'](symbol__3547, transform_statementsN)));
                                                }(symbol__3545));
                                                {
                                                    B3540 = B3429['rest'](B3540);
                                                    B3543 = [B3540];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                        }
                        B3542;
                    }
                }
            }
        }
    }
}
{
    var B3557 = $S('%array', 'ralph/core');
    {
        var B3558 = $S('%get-property', 'ralph/core');
        {
            var B3559 = $K('symbol');
            {
                var B3560 = [
                        B3437,
                        B3456,
                        B3557,
                        B3558
                    ];
                {
                    var B3561 = false;
                    {
                        var B3562 = false;
                        {
                            var B3563 = [B3560];
                            {
                                while (true) {
                                    var B3568 = B3429['not'];
                                    {
                                        var B3564 = B3561;
                                        {
                                            var B3569 = false;
                                            if (($T)(B3564))
                                                B3569 = B3564;
                                            else
                                                B3569 = B3429['any?'](B3429['empty?'], B3563);
                                            {
                                                var B3570 = B3568(B3569);
                                                if (($T)(B3570)) {
                                                    var symbol__3565 = B3429['first'](B3560);
                                                    {
                                                        (function B3566(symbol__3567) {
                                                            return(B3429['get-setter'](TtransformersT, B3429['symbol-name'](symbol__3567), B3432['make-rest-transformer'](transform_statementsN, B3559, symbol__3567)));
                                                        }(symbol__3565));
                                                        {
                                                            B3560 = B3429['rest'](B3560);
                                                            B3563 = [B3560];
                                                        }
                                                    }
                                                } else
                                                    break;
                                            }
                                        }
                                    }
                                }
                                B3562;
                            }
                        }
                    }
                }
            }
        }
    }
}
