var B2609 = require('ralph/core');
var B2649 = require('ralph/format'), B2650 = require('ralph/compiler/utilities'), B2651 = require('ralph/compiler/macroexpansion'), B2652 = require('ralph/compiler/environment');
var ralphScoreCCMvar = B2609['%var'], ralphScoreCCMmake_function = B2609['%make-function'], ralphScoreCCMconcat = B2609['%concat'], ralphScoreCCmap = B2609['map'], ralphScoreCCrcurry = B2609['rcurry'], ralphScompilerSmacroexpansionCCmacroexpand_all = B2651['macroexpand-all'], expand_forms__2658 = ralphScoreCCMmake_function('expand_forms', function B2654(symbol__2655, env__2656) {
        var forms__2657 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([symbol__2655], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2656), forms__2657)));
    }, false);
var ralphScoreCCnot = B2609['not'], ralphScoreCCget = B2609['get'], ralphScoreCCEE = B2609['=='], ralphScoreCCsignal = B2609['signal'], ralphSformatCCformat_to_string = B2649['format-to-string'], check_identifier__2668 = ralphScoreCCMmake_function('check_identifier', function B2662(identifier__2663, env__2664, format_string__2665) {
        var B2666 = ralphScoreCCnot(ralphScoreCCget(identifier__2663, 'module')), B2669 = false;
        if (($T)(B2666))
            B2669 = B2666;
        else
            B2669 = ralphScoreCCEE(ralphScoreCCget(identifier__2663, 'module'), ralphScoreCCget(env__2664, 'module', 'name'));
        var B2670 = ralphScoreCCnot(B2669);
        if (($T)(B2670)) {
            var B2667 = format_string__2665, B2671 = false;
            if (($T)(B2667))
                B2671 = B2667;
            else
                B2671 = 'External identifier: %=';
            var B2672 = ralphSformatCCformat_to_string(B2671, identifier__2663);
            return(ralphScoreCCsignal(B2672));
        } else
            return(false);
    }, false);
var B2675 = $KEY, B2676 = $REST, Bhash_symbols__2677 = [
        B2675,
        B2676
    ];
var ralphScoreCCinstanceQ = B2609['instance?'], ralphScoreCCLarrayG = B2609['<array>'], ralphScoreCCfirst = B2609['first'], ralphScoreCCchoose = B2609['choose'], ralphScoreCCmemberQ = B2609['member?'], parameter_list_identifiers__2687 = ralphScoreCCMmake_function('parameter_list_identifiers', function B2681(parameter_list__2682) {
        return(ralphScoreCCmap(function B2683(parameter__2684) {
            if (($T)(ralphScoreCCinstanceQ(parameter__2684, ralphScoreCCLarrayG)))
                return(ralphScoreCCfirst(parameter__2684));
            else
                return(parameter__2684);
        }, ralphScoreCCchoose(function B2685(parameter__2686) {
            return(ralphScoreCCnot(ralphScoreCCmemberQ(parameter__2686, Bhash_symbols__2677)));
        }, parameter_list__2682)));
    }, false);
{
    var ralphScoreCCmake_plain_object = B2609['make-plain-object'], Bcore_special_forms__2688 = ralphScoreCCmake_plain_object();
    (exports)['$core-special-forms'] = Bcore_special_forms__2688;
}
{
    var ralphScoreCCget_setter = B2609['get-setter'], B2691 = $S('quote', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'quote', function B2692(____2693, form__2694) {
        var superfluous__2695 = $SL.call(arguments, 2);
        return([
            B2691,
            form__2694
        ]);
    });
}
{
    var ralphScompilerSutilitiesCCcheck_type = B2650['check-type'], ralphScoreCCLsymbolG = B2609['<symbol>'], ralphScompilerSenvironmentCCbindN = B2652['bind!'], ralphScoreCCpush_last = B2609['push-last'], ralphScoreCCdo = B2609['do'], ralphScompilerSenvironmentCCunbindN = B2652['unbind!'], B2700 = $S('bind', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'bind', function B2701(env__2702, bindings__2703) {
        var forms__2704 = $SL.call(arguments, 2), identifiers__2705 = [], bindingsT__2714 = ralphScoreCCmap(function B2706(binding__2707) {
                var arrayQ__2708 = ralphScoreCCinstanceQ(bindings__2703, ralphScoreCCLarrayG), B2709 = false;
                if (($T)(arrayQ__2708))
                    B2709 = binding__2707;
                else
                    B2709 = [binding__2707];
                var identifier__2710 = B2709[0], value__2711 = B2709[1], superflous__2712 = $SL.call(B2709, 2);
                ralphScompilerSutilitiesCCcheck_type(identifier__2710, ralphScoreCCLsymbolG, 'Non-symbol identifier in bind: %=');
                check_identifier__2668(identifier__2710, env__2702, 'External identifier in bind: %=');
                var valueT__2713 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2711, env__2702);
                ralphScompilerSenvironmentCCbindN(identifier__2710, env__2702);
                ralphScoreCCpush_last(identifiers__2705, identifier__2710);
                if (($T)(arrayQ__2708))
                    return([
                        identifier__2710,
                        valueT__2713
                    ]);
                else
                    return(identifier__2710);
            }, bindings__2703), formsT__2715 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2702), forms__2704);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2702), identifiers__2705);
        return(ralphScoreCCMconcat([
            B2700,
            ralphScoreCCMconcat([], bindingsT__2714)
        ], formsT__2715));
    });
}
{
    var ralphScompilerSutilitiesCCdestructure_parameter_list = B2650['destructure-parameter-list'], ralphScoreCCconcatenate = B2609['concatenate'], ralphScoreCCsecond = B2609['second'], B2720 = $S('method', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'method', function B2721(env__2722, parameter_list__2723) {
        var forms__2724 = $SL.call(arguments, 2), identifiers__2725 = parameter_list_identifiers__2687(parameter_list__2723);
        ralphScoreCCdo(ralphScoreCCrcurry(check_identifier__2668, env__2722, 'External identifier in parameter list of method: %='), identifiers__2725);
        var B2726 = ralphScompilerSutilitiesCCdestructure_parameter_list(parameter_list__2723), normal_parameters__2727 = B2726[0], rest_parameter__2728 = B2726[1], keyword_parameters__2729 = B2726[2], B2734 = false;
        if (($T)(rest_parameter__2728))
            B2734 = [
                B2676,
                rest_parameter__2728
            ];
        else
            B2734 = [];
        var B2735 = false;
        if (($T)(keyword_parameters__2729))
            B2735 = ralphScoreCCMconcat([B2675], ralphScoreCCmap(function B2730(parameter__2731) {
                if (($T)(ralphScoreCCinstanceQ(parameter__2731, ralphScoreCCLarrayG)))
                    return([
                        ralphScoreCCfirst(parameter__2731),
                        ralphScompilerSmacroexpansionCCmacroexpand_all(ralphScoreCCsecond(parameter__2731), env__2722)
                    ]);
                else
                    return(parameter__2731);
            }, keyword_parameters__2729));
        else
            B2735 = [];
        var parameter_listT__2732 = ralphScoreCCconcatenate(normal_parameters__2727, B2734, B2735);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCbindN, env__2722), identifiers__2725);
        var formsT__2733 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2722), forms__2724);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2722), identifiers__2725);
        return(ralphScoreCCMconcat([
            B2720,
            parameter_listT__2732
        ], formsT__2733));
    });
}
{
    var ralphScoreCCcurry = B2609['curry'], B2737 = $S('set!', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'set!', ralphScoreCCcurry(expand_forms__2658, B2737));
}
{
    var ralphScompilerSenvironmentCCbind_globallyN = B2652['bind-globally!'], B2740 = $S('define', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'define', function B2741(env__2742, identifier__2743, initial_value__2744) {
        var superfluous__2745 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2743, ralphScoreCCLsymbolG, 'Non-symbol identifier in define: %=');
        check_identifier__2668(identifier__2743, env__2742, 'External identifier in define: %=');
        ralphScompilerSenvironmentCCbind_globallyN(identifier__2743, env__2742);
        if (($T)(initial_value__2744))
            return([
                B2740,
                identifier__2743,
                ralphScompilerSmacroexpansionCCmacroexpand_all(initial_value__2744, env__2742)
            ]);
        else
            return([
                B2740,
                identifier__2743
            ]);
    });
}
{
    var B2748 = $S('if', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'if', function B2749(env__2750, test__2751, consequent__2752, alternate__2753) {
        var superfluous__2754 = $SL.call(arguments, 4);
        return(ralphScoreCCMconcat([B2748], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2750), [
            test__2751,
            consequent__2752,
            alternate__2753
        ])));
    });
}
{
    var B2756 = $S('begin', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'begin', ralphScoreCCcurry(expand_forms__2658, B2756));
}
{
    var B2758 = $S('while', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'while', ralphScoreCCcurry(expand_forms__2658, B2758));
}
{
    var ralphScoreCCMkeys = B2609['%keys'], ralphScoreCCrest = B2609['rest'], B2764 = $S('handler-case', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'handler-case', function B2765(env__2766, protected_form__2767) {
        var cases__2768 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([
            B2764,
            ralphScompilerSmacroexpansionCCmacroexpand_all(protected_form__2767, env__2766)
        ], ralphScoreCCmap(function B2769(case__2770) {
            ralphScompilerSutilitiesCCcheck_type(case__2770, ralphScoreCCLarrayG, 'Non-array case in handler-case: %=');
            var binding__2771 = case__2770[0], forms__2772 = $SL.call(case__2770, 1);
            ralphScompilerSutilitiesCCcheck_type(binding__2771, ralphScoreCCLarrayG, 'Non-array case-binding in handler-case: %=');
            var type__2773 = binding__2771[0], B2774 = $SL.call(binding__2771, 1), B2775 = ralphScoreCCMkeys(B2774, { 'condition': false }), condition__2776 = B2775['condition'];
            if (($T)(condition__2776)) {
                ralphScompilerSutilitiesCCcheck_type(condition__2776, ralphScoreCCLsymbolG, 'Non-symbol condition variable in handler-case: %=');
                check_identifier__2668(condition__2776, env__2766, 'External identifier in handler-case: %=');
                ralphScompilerSenvironmentCCbindN(condition__2776, env__2766);
            }
            var typeT__2777 = ralphScompilerSmacroexpansionCCmacroexpand_all(type__2773, env__2766), formsT__2778 = ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2766), forms__2772);
            if (($T)(condition__2776))
                ralphScompilerSenvironmentCCunbindN(condition__2776, env__2766);
            return(ralphScoreCCMconcat([ralphScoreCCMconcat([typeT__2777], ralphScoreCCrest(binding__2771))], formsT__2778));
        }, cases__2768)));
    });
}
{
    var B2781 = $S('define-module', 'ralph/core');
    ralphScoreCCget_setter(Bcore_special_forms__2688, 'define-module', function B2782(____2783) {
        var arguments__2784 = $SL.call(arguments, 1);
        return(ralphScoreCCMconcat([B2781], arguments__2784));
    });
}
{
    var Binternal_special_forms__2785 = ralphScoreCCmake_plain_object();
    (exports)['$internal-special-forms'] = Binternal_special_forms__2785;
}
{
    var B2788 = $S('%quote');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%quote', function B2789(____2790, symbol__2791) {
        var superfluous__2792 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(symbol__2791, ralphScoreCCLsymbolG, 'Non-symbol in %quote: %=');
        return([
            B2788,
            symbol__2791
        ]);
    });
}
{
    var B2795 = $S('%bind');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%bind', function B2796(env__2797, binding__2798, form__2799) {
        var superflous__2800 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(binding__2798, ralphScoreCCLarrayG, 'Non-array binding in %%bind: %=');
        var identifier__2801 = binding__2798[0], value__2802 = binding__2798[1];
        check_identifier__2668(identifier__2801, env__2797, 'External identifier in %%bind: %=');
        var valueT__2803 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2802, env__2797);
        ralphScompilerSenvironmentCCbindN(identifier__2801, env__2797);
        var formT__2804 = ralphScompilerSmacroexpansionCCmacroexpand_all(form__2799, env__2797);
        ralphScompilerSenvironmentCCunbindN(identifier__2801, env__2797);
        return([
            B2795,
            [
                identifier__2801,
                valueT__2803
            ],
            formT__2804
        ]);
    });
}
{
    var ralphScoreCCcons = B2609['cons'], B2808 = $S('%method');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%method', function B2809(env__2810, name__2811, parameters__2812, form__2813) {
        var superfluous__2814 = $SL.call(arguments, 4), identifiers__2815 = ralphScoreCCcons(name__2811, parameters__2812);
        ralphScompilerSutilitiesCCcheck_type(name__2811, ralphScoreCCLsymbolG, 'Non-symbol name in %%method: %=');
        ralphScoreCCdo(function B2816(parameter__2817) {
            return(ralphScompilerSutilitiesCCcheck_type(parameter__2817, ralphScoreCCLsymbolG, 'Non-symbol parameter in %%method: %='));
        }, parameters__2812);
        ralphScoreCCdo(ralphScoreCCrcurry(check_identifier__2668, env__2810, 'External identifier in parameter list of %%method: %='), identifiers__2815);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCbindN, env__2810), identifiers__2815);
        var formT__2818 = ralphScompilerSmacroexpansionCCmacroexpand_all(form__2813, env__2810);
        ralphScoreCCdo(ralphScoreCCrcurry(ralphScompilerSenvironmentCCunbindN, env__2810), identifiers__2815);
        return([
            B2808,
            name__2811,
            parameters__2812,
            formT__2818
        ]);
    });
}
{
    var ralphScompilerSutilitiesCCopQ = B2650['op?'], B2821 = $S('%set');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%set', function B2822(env__2823, place__2824, value__2825) {
        var superflous__2826 = $SL.call(arguments, 3);
        if (($T)(ralphScoreCCinstanceQ(place__2824, ralphScoreCCLsymbolG)))
            return([
                B2821,
                place__2824,
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2825, env__2823)
            ]);
        else if (($T)(ralphScompilerSutilitiesCCopQ('%get-property', place__2824)))
            return([
                B2821,
                ralphScompilerSmacroexpansionCCmacroexpand_all(place__2824, env__2823),
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2825, env__2823)
            ]);
        else
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Non-symbol identifier or %get-property in %%set: %=', place__2824)));
    });
}
{
    var B2829 = $S('%define');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%define', function B2830(env__2831, identifier__2832, value__2833) {
        var superflous__2834 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2832, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%define: %=');
        var valueT__2835 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2833, env__2831);
        ralphScompilerSenvironmentCCbind_globallyN(identifier__2832, env__2831);
        return([
            B2829,
            identifier__2832,
            valueT__2835
        ]);
    });
}
{
    var B2838 = $S('%if');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%if', function B2839(env__2840, test__2841, consequent__2842, alternate__2843) {
        var superfluous__2844 = $SL.call(arguments, 4);
        return(ralphScoreCCMconcat([B2838], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2840), [
            test__2841,
            consequent__2842,
            alternate__2843
        ])));
    });
}
{
    var B2846 = $S('%begin');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%begin', ralphScoreCCcurry(expand_forms__2658, B2846));
}
{
    var B2849 = $S('%while');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%while', function B2850(env__2851, test__2852, form__2853) {
        var superfluous__2854 = $SL.call(arguments, 3);
        return(ralphScoreCCMconcat([B2849], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2851), [
            test__2852,
            form__2853
        ])));
    });
}
{
    var B2857 = $S('%try');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%try', function B2858(env__2859, protected_form__2860, identifier__2861, handling_form__2862) {
        var superfluous__2863 = $SL.call(arguments, 4);
        ralphScompilerSutilitiesCCcheck_type(identifier__2861, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%try: %=');
        check_identifier__2668(identifier__2861, env__2859, 'External identifier in %%try: %=');
        var protected_formT__2864 = ralphScompilerSmacroexpansionCCmacroexpand_all(protected_form__2860, env__2859);
        ralphScompilerSenvironmentCCbindN(identifier__2861, env__2859);
        var handling_formT__2865 = ralphScompilerSmacroexpansionCCmacroexpand_all(handling_form__2862, env__2859);
        ralphScompilerSenvironmentCCunbindN(identifier__2861, env__2859);
        return([
            B2857,
            protected_formT__2864,
            identifier__2861,
            handling_formT__2865
        ]);
    });
}
{
    var B2869 = $S('%var');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%var', function B2870(env__2871, identifier__2872, value__2873) {
        var superflous__2874 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2872, ralphScoreCCLsymbolG, 'Non-symbol identifier in %%var: %=');
        var valueT__2875 = ralphScompilerSmacroexpansionCCmacroexpand_all(value__2873, env__2871), module_name__2876 = ralphScoreCCget(identifier__2872, 'module'), B2877 = ralphScoreCCnot(module_name__2876), B2878 = false;
        if (($T)(B2877))
            B2878 = B2877;
        else
            B2878 = ralphScoreCCEE(module_name__2876, ralphScoreCCget(env__2871, 'module', 'name'));
        if (($T)(B2878))
            ralphScompilerSenvironmentCCbind_globallyN(identifier__2872, env__2871);
        return([
            B2869,
            identifier__2872,
            valueT__2875
        ]);
    });
}
{
    var ralphScoreCCLstringG = B2609['<string>'], B2881 = $S('%native-name');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%native-name', function B2882(env__2883, name__2884) {
        var superflous__2885 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(name__2884, ralphScoreCCLstringG, 'Non-string name in %%native-name: %=');
        return([
            B2881,
            name__2884
        ]);
    });
}
{
    var B2888 = $S('%native-call');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%native-call', function B2889(env__2890, operator_name__2891) {
        var arguments__2892 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(operator_name__2891, ralphScoreCCLstringG, 'Non-string operator-name in %%native-call: %=');
        return(ralphScoreCCMconcat([
            B2888,
            operator_name__2891
        ], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2890), arguments__2892)));
    });
}
{
    var B2895 = $S('%infix');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%infix', function B2896(env__2897, operator_name__2898) {
        var arguments__2899 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([
            B2895,
            operator_name__2898
        ], ralphScoreCCmap(ralphScoreCCrcurry(ralphScompilerSmacroexpansionCCmacroexpand_all, env__2897), arguments__2899)));
    });
}
{
    var B2901 = $S('%native');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%native', ralphScoreCCcurry(expand_forms__2658, B2901));
}
{
    var ralphScoreCCreduce1 = B2609['reduce1'], ralphScoreCCpartition = B2609['partition'], B2905 = $S('%object');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%object', function B2906(env__2907) {
        var property_nameSvalues__2908 = $SL.call(arguments, 1);
        return(ralphScoreCCMconcat([B2905], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2909(property_nameSvalue__2910) {
            var property_name__2911 = property_nameSvalue__2910[0], value__2912 = property_nameSvalue__2910[1];
            ralphScompilerSutilitiesCCcheck_type(property_name__2911, ralphScoreCCLstringG, 'Non-string property-name in %%object: %=');
            return([
                property_name__2911,
                ralphScompilerSmacroexpansionCCmacroexpand_all(value__2912, env__2907)
            ]);
        }, ralphScoreCCpartition(2, property_nameSvalues__2908)))));
    });
}
{
    var B2914 = $S('%array');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%array', ralphScoreCCcurry(expand_forms__2658, B2914));
}
{
    var B2916 = $S('%get-property');
    ralphScoreCCget_setter(Binternal_special_forms__2785, '%get-property', ralphScoreCCcurry(expand_forms__2658, B2916));
}
