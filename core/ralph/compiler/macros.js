{
    var B599 = require('ralph/core');
}
{
    var B602 = require('ralph/format');
    var B603 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B599['%var'];
        var ralphScoreCCmap = B599['map'];
        var ralphScoreCCinstanceQ = B599['instance?'];
        var ralphScoreCCLarrayG = B599['<array>'];
        var ralphScoreCCfirst = B599['first'];
        var ralphScoreCCMconcat = B599['%concat'];
        var ralphScoreCCreduce1 = B599['reduce1'];
        var ralphScoreCCconcatenate = B599['concatenate'];
        var ralphScoreCCsymbol_name = B599['symbol-name'];
        var ralphScoreCCMannotate_function = B599['%annotate-function'];
        var B610 = $S('bind-properties', 'ralph/core');
        var B611 = $S('%keys', 'ralph/core');
        var B612 = $S('%object', 'ralph/core');
        var wrap_keys__624 = function B613(form__614, rest_parameter__615, keyword_parameters__616) {
            {
                var keyword_parametersT__619 = ralphScoreCCmap(function B617(parameter__618) {
                        if (($T)(ralphScoreCCinstanceQ(parameter__618, ralphScoreCCLarrayG)))
                            return(parameter__618);
                        else
                            return([
                                parameter__618,
                                false
                            ]);
                    }, keyword_parameters__616);
            }
            return([
                B610,
                ralphScoreCCmap(ralphScoreCCfirst, keyword_parametersT__619),
                [
                    B611,
                    rest_parameter__615,
                    ralphScoreCCMconcat([B612], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B620(parameter__621) {
                        {
                            var key__622 = parameter__621[0];
                            var value__623 = parameter__621[1];
                        }
                        return([
                            ralphScoreCCsymbol_name(key__622),
                            value__623
                        ]);
                    }, keyword_parametersT__619)))
                ],
                form__614
            ]);
        };
    }
    ralphScoreCCMannotate_function(wrap_keys__624, 'wrap_keys', false);
}
{
    {
        var ralphScoreCCnot = B599['not'];
        var ralphScoreCCemptyQ = B599['empty?'];
        var ralphScoreCCgenerate_symbol = B599['generate-symbol'];
        var ralphScoreCCsize = B599['size'];
        var B630 = $S('bind', 'ralph/core');
        var B631 = $S('%native-call', 'ralph/core');
        var wrap_restSkeys__643 = function B632(form__633, all_parameters__634, normal_parameters__635, rest_parameter__636, keyword_parameters__637) {
            {
                var restQ__638 = rest_parameter__636;
                var B639 = rest_parameter__636;
                var rest_parameter__640 = false;
            }
            if (($T)(B639))
                rest_parameter__640 = B639;
            else if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__637))))
                rest_parameter__640 = ralphScoreCCgenerate_symbol();
            else
                rest_parameter__640 = false;
            {
                var formT__641 = false;
            }
            if (($T)(ralphScoreCCemptyQ(keyword_parameters__637)))
                formT__641 = form__633;
            else
                formT__641 = wrap_keys__624(form__633, rest_parameter__640, keyword_parameters__637);
            {
                var B642 = restQ__638;
                var B644 = false;
            }
            if (($T)(B642))
                B644 = B642;
            else
                B644 = ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__637));
            if (($T)(B644))
                return([
                    B630,
                    [[
                            rest_parameter__640,
                            [
                                B631,
                                '$SL.call',
                                all_parameters__634,
                                ralphScoreCCsize(normal_parameters__635)
                            ]
                        ]],
                    formT__641
                ]);
            else
                return(formT__641);
        };
    }
    ralphScoreCCMannotate_function(wrap_restSkeys__643, 'wrap_restSkeys', false);
}
{
    {
        var strip_types__651 = function B647(parameters__648) {
            return(ralphScoreCCmap(function B649(parameter__650) {
                if (($T)(ralphScoreCCinstanceQ(parameter__650, ralphScoreCCLarrayG)))
                    return(ralphScoreCCfirst(parameter__650));
                else
                    return(parameter__650);
            }, parameters__648));
        };
    }
    ralphScoreCCMannotate_function(strip_types__651, 'strip_types', false);
}
{
    {
        var ralphScompilerSutilitiesCCdestructure_parameter_list = B603['destructure-parameter-list'];
        var B656 = $S('%method', 'ralph/core');
        var B657 = $S('%all-arguments');
        var named_method__666 = function B658(name__659, parameter_list__660, form__661) {
            {
                var B662 = ralphScompilerSutilitiesCCdestructure_parameter_list(parameter_list__660);
                var normal_parameters__663 = B662[0];
                var rest_parameter__664 = B662[1];
                var keyword_parameters__665 = B662[2];
            }
            return([
                B656,
                name__659,
                strip_types__651(normal_parameters__663),
                wrap_restSkeys__643(form__661, B657, normal_parameters__663, rest_parameter__664, keyword_parameters__665)
            ]);
        };
    }
    ralphScoreCCMannotate_function(named_method__666, 'named_method', false);
}
{
    {
        var ralphScoreCCmake_plain_object = B599['make-plain-object'];
        var Bcore_macros__667 = ralphScoreCCmake_plain_object();
    }
    (exports)['$core-macros'] = Bcore_macros__667;
}
{
    {
        var ralphScoreCCget_setter = B599['get-setter'];
        var B671 = $S('if', 'ralph/core');
        var B672 = $S('begin', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'when', function B673(____674, test__675) {
        {
            var forms__676 = $SL.call(arguments, 2);
        }
        return([
            B671,
            test__675,
            ralphScoreCCMconcat([B672], forms__676),
            false
        ]);
    });
}
{
    {
        var B679 = $S('not', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'unless', function B680(____681, test__682) {
        {
            var forms__683 = $SL.call(arguments, 2);
        }
        return([
            B671,
            [
                B679,
                test__682
            ],
            ralphScoreCCMconcat([B672], forms__683),
            false
        ]);
    });
}
{
    {
        var B687 = $S('set!', 'ralph/core');
        var B688 = $S('parallel-set!', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'parallel-set!', function B689(____690, identifier__691, new_value__692) {
        {
            var clauses__693 = $SL.call(arguments, 3);
        }
        if (($T)(ralphScoreCCemptyQ(clauses__693)))
            return([
                B687,
                identifier__691,
                new_value__692
            ]);
        else {
            {
                var value__694 = ralphScoreCCgenerate_symbol();
            }
            return([
                B630,
                [[
                        value__694,
                        new_value__692
                    ]],
                ralphScoreCCMconcat([B688], clauses__693),
                [
                    B687,
                    identifier__691,
                    value__694
                ]
            ]);
        }
    });
}
{
    {
        var ralphScompilerSutilitiesCCcheck_type = B603['check-type'];
        var ralphScoreCCEE = B599['=='];
        var ralphScoreCCrest = B599['rest'];
        var B698 = $K('else');
        var B699 = $S('cond', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'cond', function B700(____701) {
        {
            var cases__702 = $SL.call(arguments, 1);
        }
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(cases__702)))) {
            {
                var case__703 = ralphScoreCCfirst(cases__702);
            }
            ralphScompilerSutilitiesCCcheck_type(case__703, ralphScoreCCLarrayG, 'Non-array case in cond: %=');
            {
                var test__704 = case__703[0];
                var forms__705 = $SL.call(case__703, 1);
                var form__706 = ralphScoreCCMconcat([B672], forms__705);
            }
            if (($T)(ralphScoreCCEE(test__704, B698)))
                return(form__706);
            else
                return([
                    B671,
                    test__704,
                    form__706,
                    ralphScoreCCMconcat([B699], ralphScoreCCrest(cases__702))
                ]);
        } else
            return(false);
    });
}
{
    {
        var B711 = $S('when', 'ralph/core');
        var B712 = $S('and', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'and', function B713(____714) {
        {
            var forms__715 = $SL.call(arguments, 1);
            var B716 = ralphScoreCCsize(forms__715);
        }
        if (($T)(ralphScoreCCEE(B716, 0)))
            return(true);
        else if (($T)(ralphScoreCCEE(B716, 1)))
            return(ralphScoreCCfirst(forms__715));
        else
            return([
                B711,
                ralphScoreCCfirst(forms__715),
                ralphScoreCCMconcat([B712], ralphScoreCCrest(forms__715))
            ]);
    });
}
{
    {
        var B720 = $S('or', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'or', function B721(____722) {
        {
            var forms__723 = $SL.call(arguments, 1);
            var B724 = ralphScoreCCsize(forms__723);
        }
        if (($T)(ralphScoreCCEE(B724, 0)))
            return(false);
        else if (($T)(ralphScoreCCEE(B724, 1)))
            return(ralphScoreCCfirst(forms__723));
        else {
            {
                var value__725 = ralphScoreCCgenerate_symbol();
            }
            return([
                B630,
                [[
                        value__725,
                        ralphScoreCCfirst(forms__723)
                    ]],
                [
                    B671,
                    value__725,
                    value__725,
                    ralphScoreCCMconcat([B720], ralphScoreCCrest(forms__723))
                ]
            ]);
        }
    });
}
ralphScoreCCget_setter(Bcore_macros__667, 'if-bind', function B727(____728, binding__729, consequent__730, alternate__731) {
    {
        var superflous__732 = $SL.call(arguments, 4);
    }
    ralphScompilerSutilitiesCCcheck_type(binding__729, ralphScoreCCLarrayG, 'Non-array binding in if-bind: %=');
    {
        var var__733 = binding__729[0];
        var value__734 = binding__729[1];
        var temp__735 = ralphScoreCCgenerate_symbol();
    }
    return([
        B630,
        [[
                temp__735,
                value__734
            ]],
        [
            B671,
            temp__735,
            [
                B630,
                [[
                        var__733,
                        temp__735
                    ]],
                consequent__730
            ],
            alternate__731
        ]
    ]);
});
{
    {
        var B738 = $S('while', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'until', function B739(____740, test__741) {
        {
            var forms__742 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCMconcat([
            B738,
            [
                B679,
                test__741
            ]
        ], forms__742));
    });
}
{
    {
        var ralphScoreCCLsymbolG = B599['<symbol>'];
        var B748 = $S('for', 'ralph/core');
        var B749 = $S('inc', 'ralph/core');
        var B750 = $S('binary>=', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'dotimes', function B751(____752, binding__753) {
        {
            var forms__754 = $SL.call(arguments, 2);
        }
        ralphScompilerSutilitiesCCcheck_type(binding__753, ralphScoreCCLarrayG, 'Non-array binding in dotimes: %=');
        {
            var temp__755 = ralphScoreCCgenerate_symbol();
            var var__756 = binding__753[0];
            var count__757 = binding__753[1];
            var result__758 = binding__753[2];
        }
        ralphScompilerSutilitiesCCcheck_type(var__756, ralphScoreCCLsymbolG, 'Non-symbol var in dotimes: %=');
        {
            var B760 = [[
                        temp__755,
                        count__757
                    ]];
            var B761 = [[
                        var__756,
                        0,
                        [
                            B749,
                            var__756
                        ]
                    ]];
            var B762 = [
                    B750,
                    var__756,
                    temp__755
                ];
            var B759 = result__758;
            var B763 = false;
        }
        if (($T)(B759))
            B763 = B759;
        else
            B763 = false;
        {
            var B764 = [
                    B762,
                    B763
                ];
            var B765 = [
                    B748,
                    B761,
                    B764
                ];
            var B766 = ralphScoreCCMconcat(B765, forms__754);
        }
        return([
            B630,
            B760,
            B766
        ]);
    });
}
{
    {
        var ralphScoreCCanyQ = B599['any?'];
        var ralphScoreCCpush_last = B599['push-last'];
        var ralphScoreCCslice = B599['slice'];
        var ralphScoreCCthird = B599['third'];
        var B776 = $S('method', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'for', function B777(____778, clauses__779, end_clause__780) {
        {
            var forms__781 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(clauses__779, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__780, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        {
            var init_clauses__782 = [];
            var next_clauses__783 = [];
            var vars__784 = ralphScoreCCmap(ralphScoreCCfirst, clauses__779);
            var B785 = clauses__779;
            var B786 = false;
            var B787 = false;
            var B788 = [B785];
        }
        while (true) {
            {
                var B789 = B786;
                var B794 = false;
            }
            if (($T)(B789))
                B794 = B789;
            else
                B794 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B788);
            {
                var B795 = ralphScoreCCnot(B794);
            }
            if (($T)(B795)) {
                {
                    var clause__790 = ralphScoreCCfirst(B785);
                }
                (function B791(clause__792) {
                    ralphScompilerSutilitiesCCcheck_type(clause__792, ralphScoreCCLarrayG, 'Non-array clause in for: %=');
                    ralphScoreCCpush_last(init_clauses__782, ralphScoreCCslice(clause__792, 0, 2));
                    ralphScoreCCpush_last(next_clauses__783, ralphScoreCCfirst(clause__792));
                    return(ralphScoreCCpush_last(next_clauses__783, ralphScoreCCthird(clause__792)));
                }(clause__790));
                B785 = ralphScoreCCrest(B785);
                B788 = [B785];
            } else
                break;
        }
        B787;
        {
            var B793 = ralphScoreCCemptyQ(end_clause__780);
            var B796 = false;
        }
        if (($T)(B793))
            B796 = B793;
        else
            B796 = [
                B679,
                ralphScoreCCfirst(end_clause__780)
            ];
        {
            var B797 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                        B776,
                        vars__784
                    ], forms__781)], vars__784);
            var B798 = ralphScoreCCMconcat([B688], next_clauses__783);
            var B799 = [
                    B738,
                    B796,
                    B797,
                    B798
                ];
            var B800 = ralphScoreCCMconcat([B672], ralphScoreCCrest(end_clause__780));
        }
        return([
            B630,
            init_clauses__782,
            B799,
            B800
        ]);
    });
}
{
    {
        var ralphScoreCCcons = B599['cons'];
        var ralphScoreCCsecond = B599['second'];
        var B813 = $S('rest', 'ralph/core');
        var B814 = $S('%array', 'ralph/core');
        var B815 = $S('until', 'ralph/core');
        var B816 = $S('any?', 'ralph/core');
        var B817 = $S('empty?', 'ralph/core');
        var B818 = $S('first', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'for-each', function B819(____820, clauses__821, end_clause__822) {
        {
            var forms__823 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(clauses__821, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__822, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        {
            var clauses__826 = ralphScoreCCmap(function B824(clause__825) {
                    ralphScompilerSutilitiesCCcheck_type(clause__825, ralphScoreCCLarrayG, 'Non-array clause in for-each: %=');
                    return(ralphScoreCCcons(ralphScoreCCgenerate_symbol(), clause__825));
                }, clauses__821);
            var endQ__827 = ralphScoreCCgenerate_symbol();
            var values__828 = ralphScoreCCgenerate_symbol();
            var result__829 = ralphScoreCCgenerate_symbol();
            var vars__830 = ralphScoreCCmap(ralphScoreCCsecond, clauses__826);
            var B846 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                        B776,
                        vars__830
                    ], forms__823)], vars__830);
            var B847 = [
                    B672,
                    B846
                ];
            var B848 = ralphScoreCCmap(function B831(clause__832) {
                    return([
                        B687,
                        ralphScoreCCfirst(clause__832),
                        [
                            B813,
                            ralphScoreCCfirst(clause__832)
                        ]
                    ]);
                }, clauses__826);
            var B849 = ralphScoreCCMconcat(B847, B848);
            var B850 = [[
                        B687,
                        values__828,
                        ralphScoreCCMconcat([B814], ralphScoreCCmap(ralphScoreCCfirst, clauses__826))
                    ]];
            var form__833 = ralphScoreCCMconcat(B849, B850);
            var B851 = ralphScoreCCMconcat(ralphScoreCCMconcat([], ralphScoreCCmap(function B834(clause__835) {
                    {
                        var temp__836 = clause__835[0];
                        var var__837 = clause__835[1];
                        var values__838 = clause__835[2];
                    }
                    return([
                        temp__836,
                        values__838
                    ]);
                }, clauses__826)), [
                    [
                        endQ__827,
                        false
                    ],
                    [
                        result__829,
                        false
                    ],
                    [
                        values__828,
                        ralphScoreCCMconcat([B814], ralphScoreCCmap(ralphScoreCCfirst, clauses__826))
                    ]
                ]);
            var B852 = [
                    B720,
                    endQ__827,
                    [
                        B816,
                        B817,
                        values__828
                    ]
                ];
            var B853 = ralphScoreCCmap(function B839(clause__840) {
                    {
                        var temp__841 = clause__840[0];
                        var var__842 = clause__840[1];
                        var values__843 = clause__840[2];
                    }
                    return([
                        var__842,
                        [
                            B818,
                            temp__841
                        ]
                    ]);
                }, clauses__826);
            var B844 = ralphScoreCCfirst(end_clause__822);
            var B854 = false;
        }
        if (($T)(B844)) {
            {
                var end_test__845 = B844;
            }
            B854 = [
                B671,
                end_test__845,
                [
                    B672,
                    [
                        B687,
                        result__829,
                        ralphScoreCCMconcat([B672], ralphScoreCCrest(end_clause__822))
                    ],
                    [
                        B687,
                        endQ__827,
                        true
                    ]
                ],
                form__833
            ];
        } else
            B854 = form__833;
        {
            var B855 = [
                    B630,
                    B853,
                    B854
                ];
            var B856 = [
                    B815,
                    B852,
                    B855
                ];
        }
        return([
            B630,
            B851,
            B856,
            result__829
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__667, 'select', function B860(____861, value__862, test__863) {
    {
        var cases__864 = $SL.call(arguments, 3);
        var valueT__865 = ralphScoreCCgenerate_symbol();
        var testT__866 = false;
    }
    if (($T)(ralphScoreCCinstanceQ(test__863, ralphScoreCCLsymbolG)))
        testT__866 = test__863;
    else
        testT__866 = ralphScoreCCgenerate_symbol();
    {
        var test_expression__867 = false;
    }
    test_expression__867 = function B868(test_value__869) {
        return([
            testT__866,
            valueT__865,
            test_value__869
        ]);
    };
    {
        var B874 = [[
                    valueT__865,
                    value__862
                ]];
        var B875 = false;
    }
    if (($T)(ralphScoreCCinstanceQ(test__863, ralphScoreCCLsymbolG)))
        B875 = [];
    else
        B875 = [[
                testT__866,
                test__863
            ]];
    {
        var B876 = ralphScoreCCconcatenate(B874, B875);
        var B877 = ralphScoreCCMconcat([B699], ralphScoreCCmap(function B870(case__871) {
                ralphScompilerSutilitiesCCcheck_type(case__871, ralphScoreCCLarrayG, 'Non-array case in select: %=');
                {
                    var test_forms__872 = case__871[0];
                    var forms__873 = $SL.call(case__871, 1);
                }
                if (($T)(ralphScoreCCEE(test_forms__872, B698)))
                    return(case__871);
                else {
                    ralphScompilerSutilitiesCCcheck_type(test_forms__872, ralphScoreCCLarrayG, 'Non-array set of test forms in select: %=');
                    return(ralphScoreCCMconcat([ralphScoreCCMconcat([B720], ralphScoreCCmap(test_expression__867, test_forms__872))], forms__873));
                }
            }, cases__864));
    }
    return([
        B630,
        B876,
        B877
    ]);
});
{
    {
        var ralphScoreCCreduce = B599['reduce'];
        var ralphScoreCC_ = B599['-'];
        var ralphScoreCCreverse = B599['reverse'];
        var B882 = $S('%get-property', 'ralph/core');
        var destructure__895 = function B883(bindings__884, values__885, form__886) {
            if (($T)(ralphScoreCCinstanceQ(values__885, ralphScoreCCLsymbolG))) {
                ralphScompilerSutilitiesCCcheck_type(bindings__884, ralphScoreCCLarrayG, 'Non-array set of bindings while destructuring: %=');
                {
                    var B887 = ralphScompilerSutilitiesCCdestructure_parameter_list(bindings__884);
                    var normal_parameters__888 = B887[0];
                    var rest_parameter__889 = B887[1];
                    var keyword_parameters__890 = B887[2];
                    var i__891 = ralphScoreCCsize(normal_parameters__888);
                }
                return(ralphScoreCCreduce(function B892(form__893, binding__894) {
                    i__891 = ralphScoreCC_(i__891, 1);
                    if (($T)(ralphScoreCCinstanceQ(binding__894, ralphScoreCCLsymbolG)))
                        return([
                            B630,
                            [[
                                    binding__894,
                                    [
                                        B882,
                                        values__885,
                                        i__891
                                    ]
                                ]],
                            form__893
                        ]);
                    else
                        return(destructure__895(binding__894, [
                            B882,
                            values__885,
                            i__891
                        ], form__893));
                }, wrap_restSkeys__643(form__886, values__885, normal_parameters__888, rest_parameter__889, keyword_parameters__890), ralphScoreCCreverse(normal_parameters__888)));
            } else {
                {
                    var var__896 = ralphScoreCCgenerate_symbol();
                }
                return([
                    B630,
                    [[
                            var__896,
                            values__885
                        ]],
                    destructure__895(bindings__884, var__896, form__886)
                ]);
            }
        };
    }
    ralphScoreCCMannotate_function(destructure__895, 'destructure', false);
}
ralphScoreCCget_setter(Bcore_macros__667, 'destructuring-bind', function B898(____899, bindings__900, values__901) {
    {
        var forms__902 = $SL.call(arguments, 3);
    }
    return(destructure__895(bindings__900, values__901, ralphScoreCCMconcat([B672], forms__902)));
});
ralphScoreCCget_setter(Bcore_macros__667, 'bind-properties', function B905(____906, properties__907, object__908) {
    {
        var forms__909 = $SL.call(arguments, 3);
        var objectT__910 = ralphScoreCCgenerate_symbol();
    }
    return(ralphScoreCCMconcat([
        B630,
        ralphScoreCCMconcat([[
                objectT__910,
                object__908
            ]], ralphScoreCCmap(function B911(property__912) {
            return([
                property__912,
                [
                    B882,
                    objectT__910,
                    ralphScoreCCsymbol_name(property__912)
                ]
            ]);
        }, properties__907))
    ], forms__909));
});
ralphScoreCCget_setter(Bcore_macros__667, 'bind-methods', function B915(____916, bindings__917) {
    {
        var forms__918 = $SL.call(arguments, 2);
    }
    ralphScompilerSutilitiesCCcheck_type(bindings__917, ralphScoreCCLarrayG, 'Non-array set of bindings in bind-methods: %=');
    return(ralphScoreCCMconcat(ralphScoreCCMconcat([
        B630,
        ralphScoreCCmap(ralphScoreCCfirst, bindings__917)
    ], ralphScoreCCmap(function B919(binding__920) {
        ralphScompilerSutilitiesCCcheck_type(bindings__917, ralphScoreCCLarrayG, 'Non-array binding in bind-methods: %=');
        {
            var identifier__921 = binding__920[0];
            var parameter_list__922 = binding__920[1];
            var forms__923 = $SL.call(binding__920, 2);
        }
        return([
            B687,
            identifier__921,
            ralphScoreCCMconcat([
                B776,
                parameter_list__922
            ], forms__923)
        ]);
    }, bindings__917)), forms__918));
});
{
    {
        var B931 = $S('generate-symbol', 'ralph/core');
        var B932 = $S('quote', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'once-only', function B933(____934, names__935) {
        {
            var forms__936 = $SL.call(arguments, 2);
            var symbols__939 = ralphScoreCCmap(function B937(name__938) {
                    return(ralphScoreCCgenerate_symbol());
                }, names__935);
        }
        return([
            B630,
            ralphScoreCCMconcat([], ralphScoreCCmap(function B940(symbol__941) {
                return([
                    symbol__941,
                    [B931]
                ]);
            }, symbols__939)),
            [
                B814,
                [
                    B932,
                    B630
                ],
                ralphScoreCCMconcat([B814], ralphScoreCCmap(function B942(symbol__943, name__944) {
                    return([
                        B814,
                        symbol__943,
                        name__944
                    ]);
                }, symbols__939, names__935)),
                ralphScoreCCMconcat([
                    B630,
                    ralphScoreCCMconcat([], ralphScoreCCmap(function B945(name__946, symbol__947) {
                        return([
                            name__946,
                            symbol__947
                        ]);
                    }, names__935, symbols__939))
                ], forms__936)
            ]
        ]);
    });
}
{
    {
        var B951 = $S('+', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'inc!', function B952(____953, object__954, value__955) {
        {
            var B956 = value__955;
            var B957 = false;
        }
        if (($T)(B956))
            B957 = B956;
        else
            B957 = 1;
        {
            var B958 = [
                    B951,
                    object__954,
                    B957
                ];
        }
        return([
            B687,
            object__954,
            B958
        ]);
    });
}
{
    {
        var B962 = $S('-', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'dec!', function B963(____964, object__965, value__966) {
        {
            var B967 = value__966;
            var B968 = false;
        }
        if (($T)(B967))
            B968 = B967;
        else
            B968 = 1;
        {
            var B969 = [
                    B962,
                    object__965,
                    B968
                ];
        }
        return([
            B687,
            object__965,
            B969
        ]);
    });
}
{
    {
        var ralphScoreCCsignal = B599['signal'];
        var ralphSformatCCformat_to_string = B602['format-to-string'];
        var signal_unsupported_dot_name__973 = function B971(property__972) {
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Unsupported name for call in dot: %=', property__972)));
        };
    }
    ralphScoreCCMannotate_function(signal_unsupported_dot_name__973, 'signal_unsupported_dot_name', false);
}
{
    {
        var ralphScoreCCLstringG = B599['<string>'];
    }
    ralphScoreCCget_setter(Bcore_macros__667, '.', function B978(____979, form__980) {
        {
            var calls__981 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCreduce(function B982(form__983, call__984) {
            ralphScompilerSutilitiesCCcheck_type(call__984, ralphScoreCCLarrayG, 'Non-array call in dot: %=');
            {
                var property__985 = call__984[0];
                var arguments__986 = $SL.call(call__984, 1);
                var bindings__989 = ralphScoreCCmap(function B987(argument__988) {
                        return([
                            ralphScoreCCgenerate_symbol(),
                            argument__988
                        ]);
                    }, arguments__986);
                var formT__990 = ralphScoreCCgenerate_symbol();
                var B992 = [[
                            formT__990,
                            form__983
                        ]];
                var B991 = property__985;
                var B993 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(B991, ralphScoreCCLstringG)))
                B993 = property__985;
            else if (($T)(ralphScoreCCinstanceQ(B991, ralphScoreCCLsymbolG)))
                B993 = ralphScoreCCsymbol_name(property__985);
            else
                B993 = signal_unsupported_dot_name__973(property__985);
            {
                var B994 = [
                        B882,
                        formT__990,
                        B993
                    ];
                var B995 = [B994];
                var B996 = ralphScoreCCmap(ralphScoreCCfirst, bindings__989);
                var B997 = ralphScoreCCMconcat(B995, B996);
                var B998 = [
                        B630,
                        bindings__989,
                        B997
                    ];
            }
            return([
                B630,
                B992,
                B998
            ]);
        }, form__980, calls__981));
    });
}
{
    {
        var ralphScompilerSutilitiesCCsetter_identifierQ = B603['setter-identifier?'];
        var ralphScompilerSutilitiesCCtransform_setter_identifier = B603['transform-setter-identifier'];
        var ralphScoreCCG = B599['>'];
        var B1006 = $S('define', 'ralph/core');
        var B1007 = $S('%make-method', 'ralph/core');
        var B1008 = $S('%native-name', 'ralph/core');
        var B1009 = $S('<object>', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'define-method', function B1010(env__1011, identifier__1012, parameter_list__1013) {
        {
            var forms__1014 = $SL.call(arguments, 3);
            var B1015 = false;
        }
        if (($T)(ralphScompilerSutilitiesCCsetter_identifierQ(identifier__1012)))
            B1015 = [
                true,
                ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCsecond(identifier__1012))
            ];
        else
            B1015 = [
                false,
                identifier__1012
            ];
        {
            var setterQ__1016 = B1015[0];
            var identifier__1017 = B1015[1];
            var B1018 = ralphScoreCCinstanceQ(identifier__1017, ralphScoreCCLsymbolG);
            var B1022 = false;
        }
        if (($T)(B1018))
            B1022 = B1018;
        else
            B1022 = setterQ__1016;
        {
            var B1023 = ralphScoreCCnot(B1022);
        }
        if (($T)(B1023))
            ralphScoreCCsignal(ralphSformatCCformat_to_string('Identifier not symbol or setter in define-method: %=', identifier__1017));
        if (($T)(ralphScoreCCemptyQ(parameter_list__1013)))
            ralphScoreCCsignal(ralphSformatCCformat_to_string('Empty parameter-list in define-method: %=', identifier__1017));
        {
            var name__1019 = ralphScoreCCsymbol_name(identifier__1017);
            var definition__1020 = ralphScoreCCMconcat([
                    B776,
                    parameter_list__1013
                ], forms__1014);
            var B1024 = [
                    B1008,
                    name__1019
                ];
            var head__1021 = ralphScoreCCfirst(parameter_list__1013);
            var B1025 = false;
        }
        if (($T)(ralphScoreCCinstanceQ(head__1021, ralphScoreCCLarrayG)))
            B1025 = ralphScoreCCG(ralphScoreCCsize(head__1021), 1);
        else
            B1025 = false;
        {
            var B1026 = false;
        }
        if (($T)(B1025))
            B1026 = ralphScoreCCsecond(head__1021);
        else
            B1026 = B1009;
        {
            var B1027 = [
                    B1007,
                    B1024,
                    definition__1020,
                    setterQ__1016,
                    B1026,
                    identifier__1017
                ];
        }
        return([
            B1006,
            identifier__1017,
            B1027
        ]);
    });
}
{
    {
        var B1033 = $S('%begin', 'ralph/core');
        var B1034 = $S('%annotate-function', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'define-function', function B1035(env__1036, identifier__1037, parameter_list__1038) {
        {
            var forms__1039 = $SL.call(arguments, 3);
            var B1040 = false;
        }
        if (($T)(ralphScompilerSutilitiesCCsetter_identifierQ(identifier__1037)))
            B1040 = [
                true,
                ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCsecond(identifier__1037))
            ];
        else
            B1040 = [
                false,
                identifier__1037
            ];
        {
            var setterQ__1041 = B1040[0];
            var identifier__1042 = B1040[1];
            var B1043 = ralphScoreCCinstanceQ(identifier__1042, ralphScoreCCLsymbolG);
            var B1046 = false;
        }
        if (($T)(B1043))
            B1046 = B1043;
        else
            B1046 = setterQ__1041;
        {
            var B1047 = ralphScoreCCnot(B1046);
        }
        if (($T)(B1047))
            ralphScoreCCsignal(ralphSformatCCformat_to_string('Identifier not symbol or setter in define-function: %=', identifier__1042));
        {
            var name__1044 = ralphScoreCCsymbol_name(identifier__1042);
            var definition__1045 = ralphScoreCCMconcat([
                    B776,
                    parameter_list__1038
                ], forms__1039);
        }
        ralphScoreCCget_setter(env__1036, 'module', 'functions', name__1044, definition__1045);
        return([
            B1033,
            [
                B1006,
                identifier__1042,
                definition__1045
            ],
            [
                B1034,
                identifier__1042,
                [
                    B1008,
                    name__1044
                ],
                setterQ__1041
            ]
        ]);
    });
}
{
    {
        var B1050 = $S('%make-generic', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'define-generic', function B1051(____1052, identifier__1053, arguments__1054) {
        {
            var superflous__1055 = $SL.call(arguments, 3);
        }
        return([
            B1006,
            identifier__1053,
            [
                B1050,
                [
                    B1008,
                    ralphScoreCCsymbol_name(identifier__1053)
                ]
            ]
        ]);
    });
}
{
    {
        var B1062 = $S('%make-class', 'ralph/core');
        var B1063 = $S('%set', 'ralph/core');
        var B1064 = $S('%native', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'define-class', function B1065(____1066, identifier__1067, superclass__1068) {
        {
            var properties__1069 = $SL.call(arguments, 3);
            var B1074 = false;
        }
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(superclass__1068))))
            B1074 = ralphScoreCCfirst(superclass__1068);
        else
            B1074 = false;
        {
            var B1075 = ralphScoreCCMconcat([B612], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B1070(property__1071) {
                    if (($T)(ralphScoreCCinstanceQ(property__1071, ralphScoreCCLarrayG)))
                        return([
                            ralphScoreCCsymbol_name(ralphScoreCCfirst(property__1071)),
                            [
                                B776,
                                [],
                                ralphScoreCCsecond(property__1071)
                            ]
                        ]);
                    else
                        return([
                            ralphScoreCCsymbol_name(property__1071),
                            false
                        ]);
                }, properties__1069)));
            var B1080 = [
                    B656,
                    identifier__1067,
                    [],
                    ralphScoreCCMconcat([B1033], ralphScoreCCmap(function B1072(property__1073) {
                        {
                            var B1076 = [
                                    B1064,
                                    'this'
                                ];
                            var B1077 = false;
                        }
                        if (($T)(ralphScoreCCinstanceQ(property__1073, ralphScoreCCLarrayG)))
                            B1077 = ralphScoreCCsymbol_name(ralphScoreCCfirst(property__1073));
                        else
                            B1077 = ralphScoreCCsymbol_name(property__1073);
                        {
                            var B1078 = [
                                    B882,
                                    B1076,
                                    B1077
                                ];
                            var B1079 = [
                                    B1064,
                                    'undefined'
                                ];
                        }
                        return([
                            B1063,
                            B1078,
                            B1079
                        ]);
                    }, properties__1069))
                ];
            var B1081 = [
                    B1062,
                    B1074,
                    B1075,
                    B1080
                ];
        }
        return([
            B1006,
            identifier__1067,
            B1081
        ]);
    });
}
{
    {
        var B1084 = $S('define-function', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'define-macro', function B1085(____1086, identifier__1087, parameter_list__1088) {
        {
            var forms__1089 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(identifier__1087, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-macro: %=');
        ralphScompilerSutilitiesCCcheck_type(parameter_list__1088, ralphScoreCCLarrayG, 'Non-array parameter-list in define-macro: %=');
        return([
            B672,
            ralphScoreCCMconcat([
                B1084,
                identifier__1087,
                ralphScoreCCMconcat([ralphScoreCCgenerate_symbol()], parameter_list__1088)
            ], forms__1089),
            [
                B687,
                [
                    B882,
                    identifier__1087,
                    '%macro?'
                ],
                true
            ]
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__667, 'define-symbol-macro', function B1091(____1092, identifier__1093, parameter_list__1094) {
    {
        var forms__1095 = $SL.call(arguments, 3);
    }
    ralphScompilerSutilitiesCCcheck_type(identifier__1093, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-symbol-macro: %=');
    ralphScompilerSutilitiesCCcheck_type(parameter_list__1094, ralphScoreCCLarrayG, 'Non-array parameter-list in define-symbol-macro: %=');
    return([
        B672,
        ralphScoreCCMconcat([
            B1084,
            identifier__1093,
            []
        ], forms__1095),
        [
            B687,
            [
                B882,
                identifier__1093,
                '%symbol-macro?'
            ],
            true
        ]
    ]);
});
{
    {
        var B1098 = $S('next-method', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__667, 'call-next-method', function B1099(____1100) {
        {
            var superflous__1101 = $SL.call(arguments, 1);
        }
        return([
            [
                B882,
                B1098,
                'apply'
            ],
            [
                B1064,
                'null'
            ],
            B657
        ]);
    });
}
{
    {
        var Bcore_symbol_macros__1102 = ralphScoreCCmake_plain_object();
    }
    (exports)['$core-symbol-macros'] = Bcore_symbol_macros__1102;
}
{
    {
        var B1106 = $S('%next-method', 'ralph/core');
        var B1107 = $S('%this-method');
    }
    ralphScoreCCget_setter(Bcore_symbol_macros__1102, 'next-method', function B1108(____1109) {
        {
            var superflous__1110 = $SL.call(arguments, 1);
        }
        return([
            B1106,
            B1107
        ]);
    });
}
{
    {
        var Binternal_macros__1111 = ralphScoreCCmake_plain_object();
    }
    (exports)['$internal-macros'] = Binternal_macros__1111;
}
{
    {
        var B1115 = $S('%quote', 'ralph/core');
        var transform_quoted__1119 = function B1116(form__1117) {
            {
                var B1118 = form__1117;
            }
            if (($T)(ralphScoreCCinstanceQ(B1118, ralphScoreCCLarrayG)))
                return(ralphScoreCCMconcat([B814], ralphScoreCCmap(transform_quoted__1119, form__1117)));
            else if (($T)(ralphScoreCCinstanceQ(B1118, ralphScoreCCLsymbolG)))
                return([
                    B1115,
                    form__1117
                ]);
            else
                return(form__1117);
        };
    }
    ralphScoreCCMannotate_function(transform_quoted__1119, 'transform_quoted', false);
}
ralphScoreCCget_setter(Binternal_macros__1111, 'quote', function B1121(____1122, form__1123) {
    {
        var superflous__1124 = $SL.call(arguments, 2);
    }
    return(transform_quoted__1119(form__1123));
});
ralphScoreCCget_setter(Binternal_macros__1111, 'begin', function B1127(____1128) {
    {
        var forms__1129 = $SL.call(arguments, 1);
        var B1130 = ralphScoreCCsize(forms__1129);
    }
    if (($T)(ralphScoreCCEE(B1130, 0)))
        return(false);
    else if (($T)(ralphScoreCCEE(B1130, 1)))
        return(ralphScoreCCfirst(forms__1129));
    else
        return(ralphScoreCCMconcat([B1033], forms__1129));
});
{
    {
        var B1134 = $S('%bind', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__1111, 'bind', function B1135(____1136, bindings__1137) {
        {
            var forms__1138 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCreduce(function B1139(form__1140, binding__1141) {
            {
                var B1142 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(binding__1141, ralphScoreCCLsymbolG)))
                B1142 = [
                    binding__1141,
                    false
                ];
            else
                B1142 = binding__1141;
            return([
                B1134,
                B1142,
                form__1140
            ]);
        }, ralphScoreCCMconcat([B672], forms__1138), ralphScoreCCreverse(bindings__1137)));
    });
}
ralphScoreCCget_setter(Binternal_macros__1111, 'method', function B1144(____1145, parameter_list__1146) {
    {
        var forms__1147 = $SL.call(arguments, 2);
    }
    return(named_method__666(ralphScoreCCgenerate_symbol(), parameter_list__1146, ralphScoreCCMconcat([B672], forms__1147)));
});
{
    {
        var B1150 = $S('%while', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__1111, 'while', function B1151(____1152, test__1153) {
        {
            var forms__1154 = $SL.call(arguments, 2);
        }
        return([
            B1150,
            test__1153,
            ralphScoreCCMconcat([B672], forms__1154)
        ]);
    });
}
{
    {
        var B1157 = $S('%if', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__1111, 'if', function B1158(____1159, test__1160, then__1161, else__1162) {
        {
            var superflous__1163 = $SL.call(arguments, 4);
        }
        return([
            B1157,
            test__1160,
            then__1161,
            else__1162
        ]);
    });
}
ralphScoreCCget_setter(Binternal_macros__1111, 'set!', function B1165(____1166, place__1167) {
    {
        var new_values__1168 = $SL.call(arguments, 2);
        var B1169 = false;
    }
    if (($T)(ralphScoreCCinstanceQ(place__1167, ralphScoreCCLarrayG)))
        B1169 = ralphScoreCCnot(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(place__1167)), '%get-property'));
    else
        B1169 = false;
    if (($T)(B1169))
        return(ralphScoreCCMconcat(ralphScoreCCMconcat([ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCfirst(place__1167))], ralphScoreCCrest(place__1167)), new_values__1168));
    else
        return([
            B1063,
            place__1167,
            ralphScoreCCfirst(new_values__1168)
        ]);
});
{
    {
        var B1173 = $S('%define', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__1111, 'define', function B1174(env__1175, identifier__1176, value__1177) {
        {
            var B1178 = value__1177;
            var B1179 = false;
        }
        if (($T)(B1178))
            B1179 = B1178;
        else
            B1179 = false;
        return([
            B1173,
            identifier__1176,
            B1179
        ]);
    });
}
{
    {
        var ralphScoreCCMkeys = B599['%keys'];
        var B1187 = $S('%try', 'ralph/core');
        var B1188 = $S('instance?', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__1111, 'handler-case', function B1189(____1190, protected_form__1191) {
        {
            var cases__1192 = $SL.call(arguments, 2);
            var condition_var__1193 = ralphScoreCCgenerate_symbol();
        }
        return([
            B1187,
            protected_form__1191,
            condition_var__1193,
            ralphScoreCCMconcat([B699], ralphScoreCCmap(function B1194(case__1195) {
                {
                    var B1196 = case__1195[0];
                    var type__1197 = B1196[0];
                    var B1198 = $SL.call(B1196, 1);
                    var B1199 = ralphScoreCCMkeys(B1198, { 'condition': false });
                    var condition__1200 = B1199['condition'];
                    var body__1201 = $SL.call(case__1195, 1);
                    var B1202 = [[
                                B1188,
                                condition_var__1193,
                                type__1197
                            ]];
                    var B1203 = false;
                }
                if (($T)(condition__1200))
                    B1203 = [ralphScoreCCMconcat([
                            B630,
                            [[
                                    condition__1200,
                                    condition_var__1193
                                ]]
                        ], body__1201)];
                else
                    B1203 = body__1201;
                return(ralphScoreCCconcatenate(B1202, B1203));
            }, cases__1192))
        ]);
    });
}
{
    {
        var Binternal_symbol_macros__1204 = ralphScoreCCmake_plain_object();
    }
    (exports)['$internal-symbol-macros'] = Binternal_symbol_macros__1204;
}
