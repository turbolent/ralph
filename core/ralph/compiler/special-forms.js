var B2608 = require('ralph/core');
var B2648 = require('ralph/format'), B2649 = require('ralph/compiler/utilities'), B2650 = require('ralph/compiler/macroexpansion'), B2651 = require('ralph/compiler/environment');
var ralphScoreCCMvar = B2608['%var'], ralphScoreCCMmake_function = B2608['%make-function'], ralphScoreCCMconcat = B2608['%concat'], ralphScoreCCmap = B2608['map'], ralphScoreCCrcurry = B2608['rcurry'], ralphScompilerSmacroexpansionCCmacroexpand_all = B2650['macroexpand-all'], expand_forms__2657 = ralphScoreCCMmake_function('expand_forms', function B2653(symbol__2654, env__2655) {
        var forms__2656 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([symbol__2654], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2655), forms__2656)));
    }, false);
var ralphScoreCCnot = B2608['not'], ralphScoreCCget = B2608['get'], ralphScoreCCEE = B2608['=='], ralphScoreCCsignal = B2608['signal'], ralphSformatCCformat_to_string = B2648['format-to-string'], check_identifier__2667 = ralphScoreCCMmake_function('check_identifier', function B2661(identifier__2662, env__2663, format_string__2664) {
        var B2665 = ralphScoreCCnot(ralphScoreCCget(identifier__2662, 'module')), B2668 = false;
        if (($T)(B2665))
            B2668 = B2665;
        else
            B2668 = ralphScoreCCEE(ralphScoreCCget(identifier__2662, 'module'), ralphScoreCCget(env__2663, 'module', 'name'));
        var B2669 = ralphScoreCCnot(B2668);
        if (($T)(B2669)) {
            var B2666 = format_string__2664, B2670 = false;
            if (($T)(B2666))
                B2670 = B2666;
            else
                B2670 = 'External identifier: %=';
            var B2671 = ralphSformatCCformat_to_string(B2670, identifier__2662);
            return(ralphScoreCCsignal(B2671));
        } else
            return(false);
    }, false);
var B2674 = $KEY, B2675 = $REST, Bhash_symbols__2676 = [
        B2674,
        B2675
    ];
var ralphScoreCCinstanceQ = B2608['instance?'], ralphScoreCCLarrayG = B2608['<array>'], ralphScoreCCfirst = B2608['first'], ralphScoreCCchoose = B2608['choose'], ralphScoreCCmemberQ = B2608['member?'], parameter_list_identifiers__2686 = ralphScoreCCMmake_function('parameter_list_identifiers', function B2680(parameter_list__2681) {
        return(ralphScoreCCmap(function B2682(parameter__2683) {
            if (($T)(ralphScoreCCinstanceQ(parameter__2683, ralphScoreCCLarrayG)))
                return(ralphScoreCCfirst(parameter__2683));
            else
                return(parameter__2683);
        }, ralphScoreCCchoose(function B2684(parameter__2685) {
            return(ralphScoreCCnot(ralphScoreCCmemberQ(parameter__2685, Bhash_symbols__2676)));
        }, parameter_list__2681)));
    }, false);
{
    var ralphScoreCCmake_plain_object = B2608['make-plain-object'], Bcore_special_forms__2687 = ralphScoreCCmake_plain_object();
    (exports)['$core-special-forms'] = Bcore_special_forms__2687;
}
{
    var ralphScoreCCget_setter = B2608['get-setter'], B2690 = $S('quote', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'quote', function B2691(____2692, form__2693) {
        var superfluous__2694 = $SL.call(arguments, 2);
        return([
            B2690,
            form__2693
        ]);
    });
}
{
    var ralphScompilerSutilitiesCCcheck_type = B2649['check-type'], ralphScoreCCLsymbolG = B2608['<symbol>'], ralphScompilerSenvironmentCCbindN = B2651['bind!'], ralphScoreCCpush_last = B2608['push-last'], ralphScoreCCdo = B2608['do'], ralphScompilerSenvironmentCCunbindN = B2651['unbind!'], B2699 = $S('bind', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'bind', function B2700(env__2701, bindings__2702) {
        var forms__2703 = $SL.call(arguments, 2), identifiers__2704 = [], bindingsT__2713 = ralphScoreCCmap(function B2705(binding__2706) {
                var arrayQ__2707 = ralphScoreCCinstanceQ(bindings__2702, ralphScoreCCLarrayG), B2708 = false;
                if (($T)(arrayQ__2707))
                    B2708 = binding__2706;
                else
                    B2708 = [binding__2706];
                var identifier__2709 = B2708[0], value__2710 = B2708[1], superflous__2711 = $SL.call(B2708, 2);
                ralphScompilerSutilitiesCCcheck_type(identifier__2709, ralphScoreCCLsymbolG, 'Non-symbol identifier in bind: %=');
                check_identifier__2667(identifier__2709, env__2701, 'External identifier in bind: %=');
                var valueT__2712 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2710, env__2701);
                ralphScompilerSenvironmentCCbindN(identifier__2709, env__2701);
                ralphScoreCCpush_last(identifiers__2704, identifier__2709);
                if (($T)(arrayQ__2707))
                    return([
                        identifier__2709,
                        valueT__2712
                    ]);
                else
                    return(identifier__2709);
            }, bindings__2702), formsT__2714 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2701), forms__2703);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2701), identifiers__2704);
        return(ralphScoreCCMconcat([
            B2699,
            ralphScoreCCMconcat([], bindingsT__2713)
        ], formsT__2714));
    });
}
{
    var ralphScompilerSutilitiesCCdestructure_parameter_list = B2649['destructure-parameter-list'], ralphScoreCCconcatenate = B2608['concatenate'], ralphScoreCCsecond = B2608['second'], B2719 = $S('method', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'method', function B2720(env__2721, parameter_list__2722) {
        var forms__2723 = $SL.call(arguments, 2), identifiers__2724 = parameter_list_identifiers__2686(parameter_list__2722);
        ralphScoreCCdo(ralphScoreCCrcurry(check_identifier__2667, env__2721, 'External identifier in parameter list of method: %='), identifiers__2724);
        var B2725 = ralphScompilerSutilitiesCCdestructure_parameter_list(parameter_list__2722), normal_parameters__2726 = B2725[0], rest_parameter__2727 = B2725[1], keyword_parameters__2728 = B2725[2], B2733 = false;
        if (($T)(rest_parameter__2727))
            B2733 = [
                B2675,
                rest_parameter__2727
            ];
        else
            B2733 = [];
        var B2734 = false;
        if (($T)(keyword_parameters__2728))
            B2734 = ralphScoreCCMconcat([B2674], ralphScoreCCmap(function B2729(parameter__2730) {
                if (($T)(ralphScoreCCinstanceQ(parameter__2730, ralphScoreCCLarrayG)))
                    return([
                        ralphScoreCCfirst(parameter__2730),
                        ralphScompilerSmacroexpansionCCmacroexpand_all(ralphScoreCCsecond(parameter__2730), env__2721)
                    ]);
                else
                    return(parameter__2730);
            }, keyword_parameters__2728));
        else
            B2734 = [];
        var parameter_listT__2731 = ralphScoreCCconcatenate(normal_parameters__2726, B2733, B2734);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCbindN, env__2721), identifiers__2724);
        var formsT__2732 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2721), forms__2723);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2721), identifiers__2724);
        return(ralphScoreCCMconcat([
            B2719,
            parameter_listT__2731
        ], formsT__2732));
    });
}
{
    var ralphScoreCCcurry = B2608['curry'], B2736 = $S('set!', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'set!', ralphScoreCCcurry(expand_forms__2657, B2736));
}
{
    var ralphScompilerSenvironmentCCbind_globallyN = B2651['bind-globally!'], B2739 = $S('define', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'define', function B2740(env__2741, identifier__2742, initial_value__2743) {
        var superfluous__2744 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2742, ralphScoreCCLsymbolG, 'Non-symbol identifier in define: %=');
        check_identifier__2667(identifier__2742, env__2741, 'External identifier in define: %=');
        ralphScompilerSenvironmentCCbind_globallyN(identifier__2742, env__2741);
        if (($T)(initial_value__2743))
            return([
                B2739,
                identifier__2742,
                ralphScompilerSmacroexpansionCCmacroexpand_all(initial_value__2743, env__2741)
            ]);
        else
            return([
                B2739,
                identifier__2742
            ]);
    });
}
{
    var B2747 = $S('if', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'if', function B2748(env__2749, test__2750, consequent__2751, alternate__2752) {
        var superfluous__2753 = $SL.call(arguments, 4);
        return(ralphScoreCCMconcat([B2747], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2749), [
            test__2750,
            consequent__2751,
            alternate__2752
        ])));
    });
}
{
    var B2755 = $S('begin', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'begin', ralphScoreCCcurry(expand_forms__2657, B2755));
}
{
    var B2757 = $S('while', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'while', ralphScoreCCcurry(expand_forms__2657, B2757));
}
{
    var ralphScoreCCMkeys = B2608['%keys'], ralphScoreCCrest = B2608['rest'], B2763 = $S('handler-case', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'handler-case', function B2764(env__2765, protected_form__2766) {
        var cases__2767 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([
            B2763,
            ralphScompilerSmacroexpansionCCmacroexpand_all(protected_form__2766, env__2765)
        ], ralphScoreCCmap(function B2768(case__2769) {
            ralphScompilerSutilitiesCCcheck_type(case__2769, ralphScoreCCLarrayG, 'Non-array case in handler-case: %=');
            var binding__2770 = case__2769[0], forms__2771 = $SL.call(case__2769, 1);
            ralphScompilerSutilitiesCCcheck_type(binding__2770, ralphScoreCCLarrayG, 'Non-array case-binding in handler-case: %=');
            var type__2772 = binding__2770[0], B2773 = $SL.call(binding__2770, 1), B2774 = ralphScoreCCMkeys(B2773, { 'condition': false }), condition__2775 = B2774['condition'];
            if (($T)(condition__2775)) {
                ralphScompilerSutilitiesCCcheck_type(condition__2775, ralphScoreCCLsymbolG, 'Non-symbol condition variable in handler-case: %=');
                check_identifier__2667(condition__2775, env__2765, 'External identifier in handler-case: %=');
                ralphScompilerSenvironmentCCbindN(condition__2775, env__2765);
            }
            var typeT__2776 = ralphScompilerSmacroexpansionCCmacroexpand_all(type__2772, env__2765), formsT__2777 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2765), forms__2771);
            if (($T)(condition__2775))
                ralphScompilerSenvironmentCCunbindN(condition__2775, env__2765);
            return(ralphScoreCCMconcat([ralphScoreCCMconcat([typeT__2776], ralphScoreCCrest(binding__2770))], formsT__2777));
        }, cases__2767)));
    });
}
{
    var B2780 = $S('define-module', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2687, 'define-module', function B2781(____2782) {
        var arguments__2783 = $SL.call(arguments, 1);
        return(ralphScoreCCMconcat([B2780], arguments__2783));
    });
}
{
    var Binternal_special_forms__2784 = ralphScoreCCmake_plain_object();
    (exports)['$internal-special-forms'] = Binternal_special_forms__2784;
}
{
    var B2787 = $S('%quote', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%quote', function B2788(____2789, symbol__2790) {
        var superfluous__2791 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(symbol__2790, ralphScoreCCLsymbolG, 'Non-symbol in %%quote: %=');
        return([
            B2787,
            symbol__2790
        ]);
    });
}
{
    var B2794 = $S('%bind', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%bind', function B2795(env__2796, binding__2797, form__2798) {
        var superflous__2799 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(binding__2797, ralphScoreCCLarrayG, 'Non-array binding in %%bind: %=');
        var identifier__2800 = binding__2797[0], value__2801 = binding__2797[1];
        check_identifier__2667(identifier__2800, env__2796, 'External identifier in %%bind: %=');
        var valueT__2802 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2801, env__2796);
        ralphScompilerSenvironmentCCbindN(identifier__2800, env__2796);
        var formT__2803 = ralphScompilerSmacroexpansionCCmacroexpand_all(form__2798, env__2796);
        ralphScompilerSenvironmentCCunbindN(identifier__2800, env__2796);
        return([
            B2794,
            [
                identifier__2800,
                valueT__2802
            ],
            formT__2803
        ]);
    });
}
{
    var ralphScoreCCcons = B2608['cons'], B2807 = $S('%method', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%method', function B2808(env__2809, name__2810, parameters__2811, form__2812) {
        var superfluous__2813 = $SL.call(arguments, 4), identifiers__2814 = ralphScoreCCcons(name__2810, parameters__2811);
        ralphScompilerSutilitiesCCcheck_type(name__2810, ralphScoreCCLsymbolG, 'Non-symbol name in %%method: %=');
        ralphScoreCCdo(function B2815(parameter__2816) {
            return(ralphScompilerSutilitiesCCcheck_type(parameter__2816, ralphScoreCCLsymbolG, 'Non-symbol parameter in %%method: %='));
        }, parameters__2811);
        ralphScoreCCdo(ralphScoreCCrcurry(check_identifier__2667, env__2809, 'External identifier in parameter list of %%method: %='), identifiers__2814);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCbindN, env__2809), identifiers__2814);
        var formT__2817 = ralphScompilerSmacroexpansionCCmacroexpand_all(form__2812, env__2809);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2809), identifiers__2814);
        return([
            B2807,
            name__2810,
            parameters__2811,
            formT__2817
        ]);
    });
}
{
    var ralphScompilerSutilitiesCCopQ = B2649['op?'], B2820 = $S('%set', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%set', function B2821(env__2822, place__2823, value__2824) {
        var superflous__2825 = $SL.call(arguments, 3);
        if (($T)(ralphScoreCCinstanceQ(place__2823, ralphScoreCCLsymbolG)))
            return([
                B2820,
                place__2823,
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2824, env__2822)
            ]);
        else if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__2823)))
            return([
                B2820,
                ralphScompilerSmacroexpansionCCmacroexpand_all(place__2823, env__2822),
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2824, env__2822)
            ]);
        else
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Non-symbol identifier or %get-property in %%set: %=', place__2823)));
    });
}
{
    var B2828 = $S('%define', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%define', function B2829(env__2830, identifier__2831, value__2832) {
        var superflous__2833 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2831, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%define: %=');
        var valueT__2834 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2832, env__2830);
        ralphScompilerSenvironmentCCbind_globallyN(identifier__2831, env__2830);
        return([
            B2828,
            identifier__2831,
            valueT__2834
        ]);
    });
}
{
    var B2837 = $S('%if', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%if', function B2838(env__2839, test__2840, consequent__2841, alternate__2842) {
        var superfluous__2843 = $SL.call(arguments, 4);
        return(ralphScoreCCMconcat([B2837], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2839), [
            test__2840,
            consequent__2841,
            alternate__2842
        ])));
    });
}
{
    var B2845 = $S('%begin', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%begin', ralphScoreCCcurry(expand_forms__2657, B2845));
}
{
    var B2848 = $S('%while', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%while', function B2849(env__2850, test__2851, form__2852) {
        var superfluous__2853 = $SL.call(arguments, 3);
        return(ralphScoreCCMconcat([B2848], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2850), [
            test__2851,
            form__2852
        ])));
    });
}
{
    var B2856 = $S('%try', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%try', function B2857(env__2858, protected_form__2859, identifier__2860, handling_form__2861) {
        var superfluous__2862 = $SL.call(arguments, 4);
        ralphScompilerSutilitiesCCcheck_type(identifier__2860, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%try: %=');
        check_identifier__2667(identifier__2860, env__2858, 'External identifier in %%try: %=');
        var protected_formT__2863 = ralphScompilerSmacroexpansionCCmacroexpand_all(protected_form__2859, env__2858);
        ralphScompilerSenvironmentCCbindN(identifier__2860, env__2858);
        var handling_formT__2864 = ralphScompilerSmacroexpansionCCmacroexpand_all(handling_form__2861, env__2858);
        ralphScompilerSenvironmentCCunbindN(identifier__2860, env__2858);
        return([
            B2856,
            protected_formT__2863,
            identifier__2860,
            handling_formT__2864
        ]);
    });
}
{
    var B2868 = $S('%var', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%var', function B2869(env__2870, identifier__2871, value__2872) {
        var superflous__2873 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2871, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%var: %=');
        var valueT__2874 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2872, env__2870), module_name__2875 = ralphScoreCCget(identifier__2871, 'module'), B2876 = ralphScoreCCnot(module_name__2875), B2877 = false;
        if (($T)(B2876))
            B2877 = B2876;
        else
            B2877 = ralphScoreCCEE(module_name__2875, ralphScoreCCget(env__2870, 'module', 'name'));
        if (($T)(B2877))
            ralphScompilerSenvironmentCCbind_globallyN(identifier__2871, env__2870);
        return([
            B2868,
            identifier__2871,
            valueT__2874
        ]);
    });
}
{
    var ralphScoreCCLstringG = B2608['<string>'], B2880 = $S('%native-name', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%native-name', function B2881(env__2882, name__2883) {
        var superflous__2884 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(name__2883, ralphScoreCCLstringG, 'Non-string name in %%native-name: %=');
        return([
            B2880,
            name__2883
        ]);
    });
}
{
    var B2887 = $S('%native-call', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%native-call', function B2888(env__2889, operator_name__2890) {
        var arguments__2891 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(operator_name__2890, ralphScoreCCLstringG, 'Non-string operator-name in %%native-call: %=');
        return(ralphScoreCCMconcat([
            B2887,
            operator_name__2890
        ], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2889), arguments__2891)));
    });
}
{
    var B2894 = $S('%infix', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%infix', function B2895(env__2896, operator_name__2897) {
        var arguments__2898 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([
            B2894,
            operator_name__2897
        ], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2896), arguments__2898)));
    });
}
{
    var B2900 = $S('%native', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%native', ralphScoreCCcurry(expand_forms__2657, B2900));
}
{
    var ralphScoreCCreduce1 = B2608['reduce1'], ralphScoreCCpartition = B2608['partition'], B2904 = $S('%object', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%object', function B2905(env__2906) {
        var property_nameSvalues__2907 = $SL.call(arguments, 1);
        return(ralphScoreCCMconcat([B2904], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2908(property_nameSvalue__2909) {
            var property_name__2910 = property_nameSvalue__2909[0], value__2911 = property_nameSvalue__2909[1];
            ralphScompilerSutilitiesCCcheck_type(property_name__2910, ralphScoreCCLstringG, 'Non-string property-name in %%object: %=');
            return([
                property_name__2910,
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2911, env__2906)
            ]);
        }, ralphScoreCCpartition(2, property_nameSvalues__2907)))));
    });
}
{
    var B2913 = $S('%array', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%array', ralphScoreCCcurry(expand_forms__2657, B2913));
}
{
    var B2915 = $S('%get-property', 'ralph/core');
    ralphScoreCCget_setter(Binternal_special_forms__2784, '%get-property', ralphScoreCCcurry(expand_forms__2657, B2915));
}
