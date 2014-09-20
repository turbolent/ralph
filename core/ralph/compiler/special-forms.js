require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2498(name__2499, value__2500) {
            var B2502 = (exports);
            return(B2502[name__2499] = value__2500);
        };
        {
            ($module)['%eval'] = function B2501() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2503 = require('ralph/core');
{
    var B2504 = require('ralph/format');
    {
        var B2505 = require('ralph/compiler/utilities');
        {
            var B2655 = require('ralph/compiler/transformer');
            {
                var B2692 = require('ralph/compiler/macroexpansion');
                var B2693 = require('ralph/compiler/environment');
            }
        }
    }
}
{
    var B2694 = $KEY;
    {
        var B2695 = $REST;
        ($module)['$hash-symbols'] = [
            B2694,
            B2695
        ];
    }
}
{
    ($module)['parameter-list-identifiers'] = function B2699(parameter_list__2700) {
        return(B2503['map'](function B2701(parameter__2702) {
            if (($T)(B2503['instance?'](parameter__2702, B2503['<array>'])))
                return(B2503['first'](parameter__2702));
            else
                return(parameter__2702);
        }, B2503['choose'](function B2703(parameter__2704) {
            return(B2503['not'](B2503['member?'](parameter__2704, ($module)['$hash-symbols'])));
        }, parameter_list__2700)));
    };
    B2503['%annotate-function'](($module)['parameter-list-identifiers'], 'parameter-list-identifiers', false);
}
{
    ($module)['$core-special-forms'] = B2503['make-plain-object']();
    ($module)['%export']('$core-special-forms', ($module)['$core-special-forms']);
}
{
    var B2708 = $S('bind', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'bind', function B2709(env__2710, bindings__2711) {
        var forms__2712 = $SL.call(arguments, 2);
        {
            var identifiers__2713 = [];
            {
                var bindingsT__2722 = B2503['map'](function B2714(binding__2715) {
                        var arrayQ__2716 = B2503['instance?'](bindings__2711, B2503['<array>']);
                        {
                            var B2717 = false;
                            if (($T)(arrayQ__2716))
                                B2717 = binding__2715;
                            else
                                B2717 = [binding__2715];
                            {
                                var identifier__2718 = B2717[0];
                                {
                                    var value__2719 = B2717[1];
                                    {
                                        var superflous__2720 = $SL.call(B2717, 2);
                                        {
                                            B2505['check-type'](identifier__2718, B2503['<symbol>'], 'Non-symbol identifier in bind: %=');
                                            {
                                                B2505['check-identifier'](identifier__2718, env__2710, 'External identifier in bind: %=');
                                                {
                                                    var valueT__2721 = B2692['macroexpand-all'](value__2719, env__2710);
                                                    {
                                                        B2693['bind-locally!'](identifier__2718, env__2710);
                                                        {
                                                            B2503['push-last'](identifiers__2713, identifier__2718);
                                                            if (($T)(arrayQ__2716))
                                                                return([
                                                                    identifier__2718,
                                                                    valueT__2721
                                                                ]);
                                                            else
                                                                return(identifier__2718);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, bindings__2711);
                {
                    var formsT__2723 = B2503['map'](B2503['rcurry'](B2692['macroexpand-all'], env__2710), forms__2712);
                    {
                        B2503['do'](B2503['rcurry'](B2693['unbind-locally!'], env__2710), identifiers__2713);
                        return(B2503['%concat']([
                            B2708,
                            B2503['%concat']([], bindingsT__2722)
                        ], formsT__2723));
                    }
                }
            }
        }
    });
}
{
    var B2727 = $S('method', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'method', function B2728(env__2729, parameter_list__2730) {
        var forms__2731 = $SL.call(arguments, 2);
        {
            var identifiers__2732 = ($module)['parameter-list-identifiers'](parameter_list__2730);
            {
                B2503['do'](B2503['rcurry'](B2505['check-identifier'], env__2729, 'External identifier in parameter list of method: %='), identifiers__2732);
                {
                    var B2733 = B2505['destructure-parameter-list'](parameter_list__2730);
                    {
                        var normal_parameters__2734 = B2733[0];
                        {
                            var rest_parameter__2735 = B2733[1];
                            {
                                var keyword_parameters__2736 = B2733[2];
                                {
                                    var B2741 = B2503['concatenate'];
                                    {
                                        var B2742 = false;
                                        if (($T)(rest_parameter__2735))
                                            B2742 = [
                                                B2695,
                                                rest_parameter__2735
                                            ];
                                        else
                                            B2742 = [];
                                        {
                                            var B2743 = false;
                                            if (($T)(keyword_parameters__2736))
                                                B2743 = B2503['%concat']([B2694], B2503['map'](function B2737(parameter__2738) {
                                                    if (($T)(B2503['instance?'](parameter__2738, B2503['<array>'])))
                                                        return([
                                                            B2503['first'](parameter__2738),
                                                            B2692['macroexpand-all'](B2503['second'](parameter__2738), env__2729)
                                                        ]);
                                                    else
                                                        return(parameter__2738);
                                                }, keyword_parameters__2736));
                                            else
                                                B2743 = [];
                                            {
                                                var parameter_listT__2739 = B2741(normal_parameters__2734, B2742, B2743);
                                                {
                                                    B2503['do'](B2503['rcurry'](B2693['bind-locally!'], env__2729), identifiers__2732);
                                                    {
                                                        var formsT__2740 = B2503['map'](B2503['rcurry'](B2692['macroexpand-all'], env__2729), forms__2731);
                                                        {
                                                            B2503['do'](B2503['rcurry'](B2693['unbind-locally!'], env__2729), identifiers__2732);
                                                            return(B2503['%concat']([
                                                                B2727,
                                                                parameter_listT__2739
                                                            ], formsT__2740));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}
{
    var B2745 = $S('define', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'define', function B2746(env__2747, identifier__2748, initial_value__2749) {
        var superfluous__2750 = $SL.call(arguments, 3);
        {
            B2505['check-type'](identifier__2748, B2503['<symbol>'], 'Non-symbol identifier in define: %=');
            {
                B2505['check-identifier'](identifier__2748, env__2747, 'External identifier in define: %=');
                {
                    B2693['bind-globally!'](identifier__2748, env__2747);
                    if (($T)(initial_value__2749))
                        return([
                            B2745,
                            identifier__2748,
                            B2692['macroexpand-all'](initial_value__2749, env__2747)
                        ]);
                    else
                        return([
                            B2745,
                            identifier__2748
                        ]);
                }
            }
        }
    });
}
{
    var B2755 = $S('handler-case', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'handler-case', function B2756(env__2757, protected_form__2758) {
        var cases__2759 = $SL.call(arguments, 2);
        return(B2503['%concat']([
            B2755,
            B2692['macroexpand-all'](protected_form__2758, env__2757)
        ], B2503['map'](function B2760(case__2761) {
            B2505['check-type'](case__2761, B2503['<array>'], 'Non-array case in handler-case: %=');
            {
                var binding__2762 = case__2761[0];
                {
                    var forms__2763 = $SL.call(case__2761, 1);
                    {
                        B2505['check-type'](binding__2762, B2503['<array>'], 'Non-array case-binding in handler-case: %=');
                        {
                            var type__2764 = binding__2762[0];
                            {
                                var B2765 = $SL.call(binding__2762, 1);
                                {
                                    var B2766 = B2503['%keys'](B2765, { 'condition': false });
                                    {
                                        var condition__2767 = B2766['condition'];
                                        {
                                            if (($T)(condition__2767)) {
                                                B2505['check-type'](condition__2767, B2503['<symbol>'], 'Non-symbol condition variable in handler-case: %=');
                                                {
                                                    B2505['check-identifier'](condition__2767, env__2757, 'External identifier in handler-case: %=');
                                                    B2693['bind-locally!'](condition__2767, env__2757);
                                                }
                                            }
                                            {
                                                var typeT__2768 = B2692['macroexpand-all'](type__2764, env__2757);
                                                {
                                                    var formsT__2769 = B2503['map'](B2503['rcurry'](B2692['macroexpand-all'], env__2757), forms__2763);
                                                    {
                                                        if (($T)(condition__2767))
                                                            B2693['unbind-locally!'](condition__2767, env__2757);
                                                        return(B2503['%concat']([B2503['%concat']([typeT__2768], B2503['rest'](binding__2762))], formsT__2769));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, cases__2759)));
    });
}
{
    var B2770 = $S('quote', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'quote', B2655['make-quote-transformer'](B2770));
}
{
    var B2771 = $K('symbol');
    {
        var B2772 = $S('set!', 'ralph/core');
        B2503['get-setter'](($module)['$core-special-forms'], 'set!', B2655['make-rest-transformer'](B2692['macroexpand-all'], B2771, B2772));
    }
}
{
    var B2773 = $S('if', 'ralph/core');
    {
        var B2774 = $K('count');
        B2503['get-setter'](($module)['$core-special-forms'], 'if', B2655['make-rest-transformer'](B2692['macroexpand-all'], B2771, B2773, B2774, 3));
    }
}
{
    var B2775 = $S('begin', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'begin', B2655['make-rest-transformer'](B2692['macroexpand-all'], B2771, B2775));
}
{
    var B2776 = $S('while', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'while', B2655['make-rest-transformer'](B2692['macroexpand-all'], B2771, B2776));
}
{
    ($module)['$internal-special-forms'] = B2503['make-plain-object']();
    ($module)['%export']('$internal-special-forms', ($module)['$internal-special-forms']);
}
{
    var B2777 = $S('%quote', 'ralph/core');
    {
        var B2778 = $K('check?');
        B2503['get-setter'](($module)['$internal-special-forms'], '%quote', B2655['make-quote-transformer'](B2777, B2778, true));
    }
}
{
    var B2780 = $S('%bind', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%bind', B2655['make-bind-transformer'](B2692['macroexpand-all'], function B2781(env__2782, identifier__2783, valueT__2784, formT__2785) {
        return([
            B2780,
            [
                identifier__2783,
                valueT__2784
            ],
            formT__2785
        ]);
    }));
}
{
    var B2787 = $S('%method', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%method', B2655['make-method-transformer'](B2692['macroexpand-all'], function B2788(env__2789, name__2790, parameters__2791, formT__2792) {
        return([
            B2787,
            name__2790,
            parameters__2791,
            formT__2792
        ]);
    }));
}
{
    var B2794 = $S('%set', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%set', B2655['make-set-transformer'](B2692['macroexpand-all'], function B2795(env__2796, placeT__2797, valueT__2798) {
        return([
            B2794,
            placeT__2797,
            valueT__2798
        ]);
    }));
}
B2503['get-setter'](($module)['$internal-special-forms'], '%define', B2655['make-define-transformer'](B2692['macroexpand-all']));
{
    var B2799 = $S('%if', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%if', B2655['make-rest-transformer'](B2692['macroexpand-all'], B2771, B2799, B2774, 3));
}
{
    var B2800 = $S('%while', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%while', B2655['make-rest-transformer'](B2692['macroexpand-all'], B2771, B2800, B2774, 2));
}
B2503['get-setter'](($module)['$internal-special-forms'], '%try', B2655['make-try-transformer'](B2692['macroexpand-all']));
{
    var B2802 = $S('%var', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%var', B2655['make-var-transformer'](B2692['macroexpand-all'], function B2803(env__2804, identifier__2805, valueT__2806) {
        return([
            B2802,
            identifier__2805,
            valueT__2806
        ]);
    }));
}
B2503['get-setter'](($module)['$internal-special-forms'], '%object', B2655['make-object-transformer'](B2692['macroexpand-all']));
{
    var B2813 = $S('%native-call', 'ralph/core');
    {
        var B2814 = $S('%infix', 'ralph/core');
        {
            var B2815 = [
                    B2813,
                    B2814
                ];
            {
                var B2816 = false;
                {
                    var B2817 = false;
                    {
                        var B2818 = [B2815];
                        {
                            while (true) {
                                var B2823 = B2503['not'];
                                {
                                    var B2819 = B2816;
                                    {
                                        var B2824 = false;
                                        if (($T)(B2819))
                                            B2824 = B2819;
                                        else
                                            B2824 = B2503['any?'](B2503['empty?'], B2818);
                                        {
                                            var B2825 = B2823(B2824);
                                            if (($T)(B2825)) {
                                                var symbol__2820 = B2503['first'](B2815);
                                                {
                                                    (function B2821(symbol__2822) {
                                                        return(B2503['get-setter'](($module)['$internal-special-forms'], B2503['symbol-name'](symbol__2822), B2655['make-operator-transformer'](symbol__2822, B2692['macroexpand-all'])));
                                                    }(symbol__2820));
                                                    {
                                                        B2815 = B2503['rest'](B2815);
                                                        B2818 = [B2815];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B2817;
                        }
                    }
                }
            }
        }
    }
}
{
    var B2832 = $S('%begin', 'ralph/core');
    {
        var B2833 = $S('%native', 'ralph/core');
        {
            var B2834 = $S('%array', 'ralph/core');
            {
                var B2835 = $S('%get-property', 'ralph/core');
                {
                    var B2836 = [
                            B2832,
                            B2833,
                            B2834,
                            B2835
                        ];
                    {
                        var B2837 = false;
                        {
                            var B2838 = false;
                            {
                                var B2839 = [B2836];
                                {
                                    while (true) {
                                        var B2844 = B2503['not'];
                                        {
                                            var B2840 = B2837;
                                            {
                                                var B2845 = false;
                                                if (($T)(B2840))
                                                    B2845 = B2840;
                                                else
                                                    B2845 = B2503['any?'](B2503['empty?'], B2839);
                                                {
                                                    var B2846 = B2844(B2845);
                                                    if (($T)(B2846)) {
                                                        var symbol__2841 = B2503['first'](B2836);
                                                        {
                                                            (function B2842(symbol__2843) {
                                                                return(B2503['get-setter'](($module)['$internal-special-forms'], B2503['symbol-name'](symbol__2843), B2655['make-rest-transformer'](B2692['macroexpand-all'], B2771, symbol__2843)));
                                                            }(symbol__2841));
                                                            {
                                                                B2836 = B2503['rest'](B2836);
                                                                B2839 = [B2836];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    B2838;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
