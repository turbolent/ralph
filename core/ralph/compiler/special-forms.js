{
    var B2584 = require('ralph/core');
}
{
    var B2624 = require('ralph/format');
    var B2625 = require('ralph/compiler/utilities');
    var B2626 = require('ralph/compiler/macroexpansion');
    var B2627 = require('ralph/compiler/environment');
}
{
    {
        var ralphScoreCCMvar = B2584['%var'];
        var ralphScoreCCMconcat = B2584['%concat'];
        var ralphScoreCCmap = B2584['map'];
        var ralphScoreCCrcurry = B2584['rcurry'];
        var ralphScompilerSmacroexpansionCCmacroexpand_all = B2626['macroexpand-all'];
        var ralphScoreCCMannotate_function = B2584['%annotate-function'];
        var expand_forms__2633 = function B2629(symbol__2630, env__2631) {
            {
                var forms__2632 = $SL.call(arguments, 2);
            }
            return(ralphScoreCCMconcat([symbol__2630], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2631), forms__2632)));
        };
    }
    ralphScoreCCMannotate_function(expand_forms__2633, 'expand_forms', false);
}
{
    {
        var ralphScoreCCnot = B2584['not'];
        var ralphScoreCCget = B2584['get'];
        var ralphScoreCCEE = B2584['=='];
        var ralphScoreCCsignal = B2584['signal'];
        var ralphSformatCCformat_to_string = B2624['format-to-string'];
        var check_identifier__2643 = function B2637(identifier__2638, env__2639, format_string__2640) {
            {
                var B2641 = ralphScoreCCnot(ralphScoreCCget(identifier__2638, 'module'));
                var B2644 = false;
            }
            if (($T)(B2641))
                B2644 = B2641;
            else
                B2644 = ralphScoreCCEE(ralphScoreCCget(identifier__2638, 'module'), ralphScoreCCget(env__2639, 'module', 'name'));
            {
                var B2645 = ralphScoreCCnot(B2644);
            }
            if (($T)(B2645)) {
                {
                    var B2642 = format_string__2640;
                    var B2646 = false;
                }
                if (($T)(B2642))
                    B2646 = B2642;
                else
                    B2646 = 'External identifier: %=';
                {
                    var B2647 = ralphSformatCCformat_to_string(B2646, identifier__2638);
                }
                return(ralphScoreCCsignal(B2647));
            } else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(check_identifier__2643, 'check_identifier', false);
}
{
    var B2650 = $KEY;
    var B2651 = $REST;
    var Bhash_symbols__2652 = [
            B2650,
            B2651
        ];
}
{
    {
        var ralphScoreCCinstanceQ = B2584['instance?'];
        var ralphScoreCCLarrayG = B2584['<array>'];
        var ralphScoreCCfirst = B2584['first'];
        var ralphScoreCCchoose = B2584['choose'];
        var ralphScoreCCmemberQ = B2584['member?'];
        var parameter_list_identifiers__2662 = function B2656(parameter_list__2657) {
            return(ralphScoreCCmap(function B2658(parameter__2659) {
                if (($T)(ralphScoreCCinstanceQ(parameter__2659, ralphScoreCCLarrayG)))
                    return(ralphScoreCCfirst(parameter__2659));
                else
                    return(parameter__2659);
            }, ralphScoreCCchoose(function B2660(parameter__2661) {
                return(ralphScoreCCnot(ralphScoreCCmemberQ(parameter__2661, Bhash_symbols__2652)));
            }, parameter_list__2657)));
        };
    }
    ralphScoreCCMannotate_function(parameter_list_identifiers__2662, 'parameter_list_identifiers', false);
}
{
    {
        var ralphScoreCCmake_plain_object = B2584['make-plain-object'];
        var Bcore_special_forms__2663 = ralphScoreCCmake_plain_object();
    }
    (exports)['$core-special-forms'] = Bcore_special_forms__2663;
}
{
    {
        var ralphScoreCCget_setter = B2584['get-setter'];
        var B2666 = $S('quote', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'quote', function B2667(____2668, form__2669) {
        {
            var superfluous__2670 = $SL.call(arguments, 2);
        }
        return([
            B2666,
            form__2669
        ]);
    });
}
{
    {
        var ralphScompilerSutilitiesCCcheck_type = B2625['check-type'];
        var ralphScoreCCLsymbolG = B2584['<symbol>'];
        var ralphScompilerSenvironmentCCbindN = B2627['bind!'];
        var ralphScoreCCpush_last = B2584['push-last'];
        var ralphScoreCCdo = B2584['do'];
        var ralphScompilerSenvironmentCCunbindN = B2627['unbind!'];
        var B2675 = $S('bind', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'bind', function B2676(env__2677, bindings__2678) {
        {
            var forms__2679 = $SL.call(arguments, 2);
            var identifiers__2680 = [];
            var bindingsT__2689 = ralphScoreCCmap(function B2681(binding__2682) {
                    {
                        var arrayQ__2683 = ralphScoreCCinstanceQ(bindings__2678, ralphScoreCCLarrayG);
                        var B2684 = false;
                    }
                    if (($T)(arrayQ__2683))
                        B2684 = binding__2682;
                    else
                        B2684 = [binding__2682];
                    {
                        var identifier__2685 = B2684[0];
                        var value__2686 = B2684[1];
                        var superflous__2687 = $SL.call(B2684, 2);
                    }
                    ralphScompilerSutilitiesCCcheck_type(identifier__2685, ralphScoreCCLsymbolG, 'Non-symbol identifier in bind: %=');
                    check_identifier__2643(identifier__2685, env__2677, 'External identifier in bind: %=');
                    {
                        var valueT__2688 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2686, env__2677);
                    }
                    ralphScompilerSenvironmentCCbindN(identifier__2685, env__2677);
                    ralphScoreCCpush_last(identifiers__2680, identifier__2685);
                    if (($T)(arrayQ__2683))
                        return([
                            identifier__2685,
                            valueT__2688
                        ]);
                    else
                        return(identifier__2685);
                }, bindings__2678);
            var formsT__2690 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2677), forms__2679);
        }
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2677), identifiers__2680);
        return(ralphScoreCCMconcat([
            B2675,
            ralphScoreCCMconcat([], bindingsT__2689)
        ], formsT__2690));
    });
}
{
    {
        var ralphScompilerSutilitiesCCdestructure_parameter_list = B2625['destructure-parameter-list'];
        var ralphScoreCCconcatenate = B2584['concatenate'];
        var ralphScoreCCsecond = B2584['second'];
        var B2695 = $S('method', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'method', function B2696(env__2697, parameter_list__2698) {
        {
            var forms__2699 = $SL.call(arguments, 2);
            var identifiers__2700 = parameter_list_identifiers__2662(parameter_list__2698);
        }
        ralphScoreCCdo(ralphScoreCCrcurry(check_identifier__2643, env__2697, 'External identifier in parameter list of method: %='), identifiers__2700);
        {
            var B2701 = ralphScompilerSutilitiesCCdestructure_parameter_list(parameter_list__2698);
            var normal_parameters__2702 = B2701[0];
            var rest_parameter__2703 = B2701[1];
            var keyword_parameters__2704 = B2701[2];
            var B2709 = false;
        }
        if (($T)(rest_parameter__2703))
            B2709 = [
                B2651,
                rest_parameter__2703
            ];
        else
            B2709 = [];
        {
            var B2710 = false;
        }
        if (($T)(keyword_parameters__2704))
            B2710 = ralphScoreCCMconcat([B2650], ralphScoreCCmap(function B2705(parameter__2706) {
                if (($T)(ralphScoreCCinstanceQ(parameter__2706, ralphScoreCCLarrayG)))
                    return([
                        ralphScoreCCfirst(parameter__2706),
                        ralphScompilerSmacroexpansionCCmacroexpand_all(ralphScoreCCsecond(parameter__2706), env__2697)
                    ]);
                else
                    return(parameter__2706);
            }, keyword_parameters__2704));
        else
            B2710 = [];
        {
            var parameter_listT__2707 = ralphScoreCCconcatenate(normal_parameters__2702, B2709, B2710);
        }
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCbindN, env__2697), identifiers__2700);
        {
            var formsT__2708 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2697), forms__2699);
        }
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2697), identifiers__2700);
        return(ralphScoreCCMconcat([
            B2695,
            parameter_listT__2707
        ], formsT__2708));
    });
}
{
    {
        var ralphScoreCCcurry = B2584['curry'];
        var B2712 = $S('set!', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'set!', ralphScoreCCcurry(expand_forms__2633, B2712));
}
{
    {
        var ralphScompilerSenvironmentCCbind_globallyN = B2627['bind-globally!'];
        var B2715 = $S('define', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'define', function B2716(env__2717, identifier__2718, initial_value__2719) {
        {
            var superfluous__2720 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(identifier__2718, ralphScoreCCLsymbolG, 'Non-symbol identifier in define: %=');
        check_identifier__2643(identifier__2718, env__2717, 'External identifier in define: %=');
        ralphScompilerSenvironmentCCbind_globallyN(identifier__2718, env__2717);
        if (($T)(initial_value__2719))
            return([
                B2715,
                identifier__2718,
                ralphScompilerSmacroexpansionCCmacroexpand_all(initial_value__2719, env__2717)
            ]);
        else
            return([
                B2715,
                identifier__2718
            ]);
    });
}
{
    {
        var B2723 = $S('if', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'if', function B2724(env__2725, test__2726, consequent__2727, alternate__2728) {
        {
            var superfluous__2729 = $SL.call(arguments, 4);
        }
        return(ralphScoreCCMconcat([B2723], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2725), [
            test__2726,
            consequent__2727,
            alternate__2728
        ])));
    });
}
{
    {
        var B2731 = $S('begin', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'begin', ralphScoreCCcurry(expand_forms__2633, B2731));
}
{
    {
        var B2733 = $S('while', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'while', ralphScoreCCcurry(expand_forms__2633, B2733));
}
{
    {
        var ralphScoreCCMkeys = B2584['%keys'];
        var ralphScoreCCrest = B2584['rest'];
        var B2739 = $S('handler-case', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'handler-case', function B2740(env__2741, protected_form__2742) {
        {
            var cases__2743 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCMconcat([
            B2739,
            ralphScompilerSmacroexpansionCCmacroexpand_all(protected_form__2742, env__2741)
        ], ralphScoreCCmap(function B2744(case__2745) {
            ralphScompilerSutilitiesCCcheck_type(case__2745, ralphScoreCCLarrayG, 'Non-array case in handler-case: %=');
            {
                var binding__2746 = case__2745[0];
                var forms__2747 = $SL.call(case__2745, 1);
            }
            ralphScompilerSutilitiesCCcheck_type(binding__2746, ralphScoreCCLarrayG, 'Non-array case-binding in handler-case: %=');
            {
                var type__2748 = binding__2746[0];
                var B2749 = $SL.call(binding__2746, 1);
                var B2750 = ralphScoreCCMkeys(B2749, { 'condition': false });
                var condition__2751 = B2750['condition'];
            }
            if (($T)(condition__2751)) {
                ralphScompilerSutilitiesCCcheck_type(condition__2751, ralphScoreCCLsymbolG, 'Non-symbol condition variable in handler-case: %=');
                check_identifier__2643(condition__2751, env__2741, 'External identifier in handler-case: %=');
                ralphScompilerSenvironmentCCbindN(condition__2751, env__2741);
            }
            {
                var typeT__2752 = ralphScompilerSmacroexpansionCCmacroexpand_all(type__2748, env__2741);
                var formsT__2753 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2741), forms__2747);
            }
            if (($T)(condition__2751))
                ralphScompilerSenvironmentCCunbindN(condition__2751, env__2741);
            return(ralphScoreCCMconcat([ralphScoreCCMconcat([typeT__2752], ralphScoreCCrest(binding__2746))], formsT__2753));
        }, cases__2743)));
    });
}
{
    {
        var B2756 = $S('define-module', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_special_forms__2663, 'define-module', function B2757(____2758) {
        {
            var arguments__2759 = $SL.call(arguments, 1);
        }
        return(ralphScoreCCMconcat([B2756], arguments__2759));
    });
}
{
    {
        var Binternal_special_forms__2760 = ralphScoreCCmake_plain_object();
    }
    (exports)['$internal-special-forms'] = Binternal_special_forms__2760;
}
{
    {
        var B2763 = $S('%quote', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%quote', function B2764(____2765, symbol__2766) {
        {
            var superfluous__2767 = $SL.call(arguments, 2);
        }
        ralphScompilerSutilitiesCCcheck_type(symbol__2766, ralphScoreCCLsymbolG, 'Non-symbol in %%quote: %=');
        return([
            B2763,
            symbol__2766
        ]);
    });
}
{
    {
        var B2770 = $S('%bind', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%bind', function B2771(env__2772, binding__2773, form__2774) {
        {
            var superflous__2775 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(binding__2773, ralphScoreCCLarrayG, 'Non-array binding in %%bind: %=');
        {
            var identifier__2776 = binding__2773[0];
            var value__2777 = binding__2773[1];
        }
        check_identifier__2643(identifier__2776, env__2772, 'External identifier in %%bind: %=');
        {
            var valueT__2778 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2777, env__2772);
        }
        ralphScompilerSenvironmentCCbindN(identifier__2776, env__2772);
        {
            var formT__2779 = ralphScompilerSmacroexpansionCCmacroexpand_all(form__2774, env__2772);
        }
        ralphScompilerSenvironmentCCunbindN(identifier__2776, env__2772);
        return([
            B2770,
            [
                identifier__2776,
                valueT__2778
            ],
            formT__2779
        ]);
    });
}
{
    {
        var ralphScoreCCcons = B2584['cons'];
        var B2783 = $S('%method', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%method', function B2784(env__2785, name__2786, parameters__2787, form__2788) {
        {
            var superfluous__2789 = $SL.call(arguments, 4);
            var identifiers__2790 = ralphScoreCCcons(name__2786, parameters__2787);
        }
        ralphScompilerSutilitiesCCcheck_type(name__2786, ralphScoreCCLsymbolG, 'Non-symbol name in %%method: %=');
        ralphScoreCCdo(function B2791(parameter__2792) {
            return(ralphScompilerSutilitiesCCcheck_type(parameter__2792, ralphScoreCCLsymbolG, 'Non-symbol parameter in %%method: %='));
        }, parameters__2787);
        ralphScoreCCdo(ralphScoreCCrcurry(check_identifier__2643, env__2785, 'External identifier in parameter list of %%method: %='), identifiers__2790);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCbindN, env__2785), identifiers__2790);
        {
            var formT__2793 = ralphScompilerSmacroexpansionCCmacroexpand_all(form__2788, env__2785);
        }
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2785), identifiers__2790);
        return([
            B2783,
            name__2786,
            parameters__2787,
            formT__2793
        ]);
    });
}
{
    {
        var ralphScompilerSutilitiesCCopQ = B2625['op?'];
        var B2796 = $S('%set', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%set', function B2797(env__2798, place__2799, value__2800) {
        {
            var superflous__2801 = $SL.call(arguments, 3);
        }
        if (($T)(ralphScoreCCinstanceQ(place__2799, ralphScoreCCLsymbolG)))
            return([
                B2796,
                place__2799,
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2800, env__2798)
            ]);
        else if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__2799)))
            return([
                B2796,
                ralphScompilerSmacroexpansionCCmacroexpand_all(place__2799, env__2798),
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2800, env__2798)
            ]);
        else
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Non-symbol identifier or %get-property in %%set: %=', place__2799)));
    });
}
{
    {
        var B2804 = $S('%define', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%define', function B2805(env__2806, identifier__2807, value__2808) {
        {
            var superflous__2809 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(identifier__2807, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%define: %=');
        {
            var valueT__2810 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2808, env__2806);
        }
        ralphScompilerSenvironmentCCbind_globallyN(identifier__2807, env__2806);
        return([
            B2804,
            identifier__2807,
            valueT__2810
        ]);
    });
}
{
    {
        var B2813 = $S('%if', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%if', function B2814(env__2815, test__2816, consequent__2817, alternate__2818) {
        {
            var superfluous__2819 = $SL.call(arguments, 4);
        }
        return(ralphScoreCCMconcat([B2813], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2815), [
            test__2816,
            consequent__2817,
            alternate__2818
        ])));
    });
}
{
    {
        var B2821 = $S('%begin', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%begin', ralphScoreCCcurry(expand_forms__2633, B2821));
}
{
    {
        var B2824 = $S('%while', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%while', function B2825(env__2826, test__2827, form__2828) {
        {
            var superfluous__2829 = $SL.call(arguments, 3);
        }
        return(ralphScoreCCMconcat([B2824], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2826), [
            test__2827,
            form__2828
        ])));
    });
}
{
    {
        var B2832 = $S('%try', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%try', function B2833(env__2834, protected_form__2835, identifier__2836, handling_form__2837) {
        {
            var superfluous__2838 = $SL.call(arguments, 4);
        }
        ralphScompilerSutilitiesCCcheck_type(identifier__2836, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%try: %=');
        check_identifier__2643(identifier__2836, env__2834, 'External identifier in %%try: %=');
        {
            var protected_formT__2839 = ralphScompilerSmacroexpansionCCmacroexpand_all(protected_form__2835, env__2834);
        }
        ralphScompilerSenvironmentCCbindN(identifier__2836, env__2834);
        {
            var handling_formT__2840 = ralphScompilerSmacroexpansionCCmacroexpand_all(handling_form__2837, env__2834);
        }
        ralphScompilerSenvironmentCCunbindN(identifier__2836, env__2834);
        return([
            B2832,
            protected_formT__2839,
            identifier__2836,
            handling_formT__2840
        ]);
    });
}
{
    {
        var B2844 = $S('%var', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%var', function B2845(env__2846, identifier__2847, value__2848) {
        {
            var superflous__2849 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(identifier__2847, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%var: %=');
        {
            var valueT__2850 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2848, env__2846);
            var module_name__2851 = ralphScoreCCget(identifier__2847, 'module');
            var B2852 = ralphScoreCCnot(module_name__2851);
            var B2853 = false;
        }
        if (($T)(B2852))
            B2853 = B2852;
        else
            B2853 = ralphScoreCCEE(module_name__2851, ralphScoreCCget(env__2846, 'module', 'name'));
        if (($T)(B2853))
            ralphScompilerSenvironmentCCbind_globallyN(identifier__2847, env__2846);
        return([
            B2844,
            identifier__2847,
            valueT__2850
        ]);
    });
}
{
    {
        var ralphScoreCCLstringG = B2584['<string>'];
        var B2856 = $S('%native-name', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%native-name', function B2857(env__2858, name__2859) {
        {
            var superflous__2860 = $SL.call(arguments, 2);
        }
        ralphScompilerSutilitiesCCcheck_type(name__2859, ralphScoreCCLstringG, 'Non-string name in %%native-name: %=');
        return([
            B2856,
            name__2859
        ]);
    });
}
{
    {
        var B2863 = $S('%native-call', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%native-call', function B2864(env__2865, operator_name__2866) {
        {
            var arguments__2867 = $SL.call(arguments, 2);
        }
        ralphScompilerSutilitiesCCcheck_type(operator_name__2866, ralphScoreCCLstringG, 'Non-string operator-name in %%native-call: %=');
        return(ralphScoreCCMconcat([
            B2863,
            operator_name__2866
        ], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2865), arguments__2867)));
    });
}
{
    {
        var B2870 = $S('%infix', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%infix', function B2871(env__2872, operator_name__2873) {
        {
            var arguments__2874 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCMconcat([
            B2870,
            operator_name__2873
        ], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2872), arguments__2874)));
    });
}
{
    {
        var B2876 = $S('%native', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%native', ralphScoreCCcurry(expand_forms__2633, B2876));
}
{
    {
        var ralphScoreCCreduce1 = B2584['reduce1'];
        var ralphScoreCCpartition = B2584['partition'];
        var B2880 = $S('%object', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%object', function B2881(env__2882) {
        {
            var property_nameSvalues__2883 = $SL.call(arguments, 1);
        }
        return(ralphScoreCCMconcat([B2880], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2884(property_nameSvalue__2885) {
            {
                var property_name__2886 = property_nameSvalue__2885[0];
                var value__2887 = property_nameSvalue__2885[1];
            }
            ralphScompilerSutilitiesCCcheck_type(property_name__2886, ralphScoreCCLstringG, 'Non-string property-name in %%object: %=');
            return([
                property_name__2886,
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2887, env__2882)
            ]);
        }, ralphScoreCCpartition(2, property_nameSvalues__2883)))));
    });
}
{
    {
        var B2889 = $S('%array', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%array', ralphScoreCCcurry(expand_forms__2633, B2889));
}
{
    {
        var B2891 = $S('%get-property', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_special_forms__2760, '%get-property', ralphScoreCCcurry(expand_forms__2633, B2891));
}
