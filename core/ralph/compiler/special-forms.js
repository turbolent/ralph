require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2488(name__2489, value__2490) {
            var B2492 = (exports);
            return(B2492[name__2489] = value__2490);
        };
        {
            ($module)['%eval'] = function B2491() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2493 = require('ralph/core');
{
    var B2494 = require('ralph/format');
    {
        var B2495 = require('ralph/compiler/utilities');
        {
            var B2643 = require('ralph/compiler/transformer');
            {
                var B2680 = require('ralph/compiler/macroexpansion');
                var B2681 = require('ralph/compiler/environment');
            }
        }
    }
}
{
    var B2682 = $KEY;
    {
        var B2683 = $REST;
        ($module)['$hash-symbols'] = [
            B2682,
            B2683
        ];
    }
}
{
    ($module)['parameter-list-identifiers'] = function B2687(parameter_list__2688) {
        return(B2493['map'](function B2689(parameter__2690) {
            if (($T)(B2493['instance?'](parameter__2690, B2493['<array>'])))
                return(B2493['first'](parameter__2690));
            else
                return(parameter__2690);
        }, B2493['choose'](function B2691(parameter__2692) {
            return(B2493['not'](B2493['member?'](parameter__2692, ($module)['$hash-symbols'])));
        }, parameter_list__2688)));
    };
    B2493['%annotate-function'](($module)['parameter-list-identifiers'], 'parameter-list-identifiers', false);
}
{
    ($module)['$core-special-forms'] = B2493['make-plain-object']();
    ($module)['%export']('$core-special-forms', ($module)['$core-special-forms']);
}
{
    var B2696 = $S('bind', 'ralph/core');
    B2493['get-setter'](($module)['$core-special-forms'], 'bind', function B2697(env__2698, bindings__2699) {
        var forms__2700 = $SL.call(arguments, 2);
        {
            var identifiers__2701 = [];
            {
                var bindingsT__2710 = B2493['map'](function B2702(binding__2703) {
                        var arrayQ__2704 = B2493['instance?'](bindings__2699, B2493['<array>']);
                        {
                            var B2705 = false;
                            if (($T)(arrayQ__2704))
                                B2705 = binding__2703;
                            else
                                B2705 = [binding__2703];
                            {
                                var identifier__2706 = B2705[0];
                                {
                                    var value__2707 = B2705[1];
                                    {
                                        var superflous__2708 = $SL.call(B2705, 2);
                                        {
                                            B2495['check-type'](identifier__2706, B2493['<symbol>'], 'Non-symbol identifier in bind: %=');
                                            {
                                                B2495['check-identifier'](identifier__2706, env__2698, 'External identifier in bind: %=');
                                                {
                                                    var valueT__2709 = B2680['macroexpand-all'](value__2707, env__2698);
                                                    {
                                                        B2681['bind-locally!'](identifier__2706, env__2698);
                                                        {
                                                            B2493['push-last'](identifiers__2701, identifier__2706);
                                                            if (($T)(arrayQ__2704))
                                                                return([
                                                                    identifier__2706,
                                                                    valueT__2709
                                                                ]);
                                                            else
                                                                return(identifier__2706);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, bindings__2699);
                {
                    var formsT__2711 = B2493['map'](B2493['rcurry'](B2680['macroexpand-all'], env__2698), forms__2700);
                    {
                        B2493['do'](B2493['rcurry'](B2681['unbind-locally!'], env__2698), identifiers__2701);
                        return(B2493['%concat']([
                            B2696,
                            B2493['%concat']([], bindingsT__2710)
                        ], formsT__2711));
                    }
                }
            }
        }
    });
}
{
    var B2715 = $S('method', 'ralph/core');
    B2493['get-setter'](($module)['$core-special-forms'], 'method', function B2716(env__2717, parameter_list__2718) {
        var forms__2719 = $SL.call(arguments, 2);
        {
            var identifiers__2720 = ($module)['parameter-list-identifiers'](parameter_list__2718);
            {
                B2493['do'](B2493['rcurry'](B2495['check-identifier'], env__2717, 'External identifier in parameter list of method: %='), identifiers__2720);
                {
                    var B2721 = B2495['destructure-parameter-list'](parameter_list__2718);
                    {
                        var normal_parameters__2722 = B2721[0];
                        {
                            var rest_parameter__2723 = B2721[1];
                            {
                                var keyword_parameters__2724 = B2721[2];
                                {
                                    var B2729 = B2493['concatenate'];
                                    {
                                        var B2730 = false;
                                        if (($T)(rest_parameter__2723))
                                            B2730 = [
                                                B2683,
                                                rest_parameter__2723
                                            ];
                                        else
                                            B2730 = [];
                                        {
                                            var B2731 = false;
                                            if (($T)(keyword_parameters__2724))
                                                B2731 = B2493['%concat']([B2682], B2493['map'](function B2725(parameter__2726) {
                                                    if (($T)(B2493['instance?'](parameter__2726, B2493['<array>'])))
                                                        return([
                                                            B2493['first'](parameter__2726),
                                                            B2680['macroexpand-all'](B2493['second'](parameter__2726), env__2717)
                                                        ]);
                                                    else
                                                        return(parameter__2726);
                                                }, keyword_parameters__2724));
                                            else
                                                B2731 = [];
                                            {
                                                var parameter_listT__2727 = B2729(normal_parameters__2722, B2730, B2731);
                                                {
                                                    B2493['do'](B2493['rcurry'](B2681['bind-locally!'], env__2717), identifiers__2720);
                                                    {
                                                        var formsT__2728 = B2493['map'](B2493['rcurry'](B2680['macroexpand-all'], env__2717), forms__2719);
                                                        {
                                                            B2493['do'](B2493['rcurry'](B2681['unbind-locally!'], env__2717), identifiers__2720);
                                                            return(B2493['%concat']([
                                                                B2715,
                                                                parameter_listT__2727
                                                            ], formsT__2728));
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
    var B2733 = $S('define', 'ralph/core');
    B2493['get-setter'](($module)['$core-special-forms'], 'define', function B2734(env__2735, identifier__2736, initial_value__2737) {
        var superfluous__2738 = $SL.call(arguments, 3);
        {
            B2495['check-type'](identifier__2736, B2493['<symbol>'], 'Non-symbol identifier in define: %=');
            {
                B2495['check-identifier'](identifier__2736, env__2735, 'External identifier in define: %=');
                {
                    B2681['bind-globally!'](identifier__2736, env__2735);
                    if (($T)(initial_value__2737))
                        return([
                            B2733,
                            identifier__2736,
                            B2680['macroexpand-all'](initial_value__2737, env__2735)
                        ]);
                    else
                        return([
                            B2733,
                            identifier__2736
                        ]);
                }
            }
        }
    });
}
{
    var B2743 = $S('handler-case', 'ralph/core');
    B2493['get-setter'](($module)['$core-special-forms'], 'handler-case', function B2744(env__2745, protected_form__2746) {
        var cases__2747 = $SL.call(arguments, 2);
        return(B2493['%concat']([
            B2743,
            B2680['macroexpand-all'](protected_form__2746, env__2745)
        ], B2493['map'](function B2748(case__2749) {
            B2495['check-type'](case__2749, B2493['<array>'], 'Non-array case in handler-case: %=');
            {
                var binding__2750 = case__2749[0];
                {
                    var forms__2751 = $SL.call(case__2749, 1);
                    {
                        B2495['check-type'](binding__2750, B2493['<array>'], 'Non-array case-binding in handler-case: %=');
                        {
                            var type__2752 = binding__2750[0];
                            {
                                var B2753 = $SL.call(binding__2750, 1);
                                {
                                    var B2754 = B2493['%keys'](B2753, { 'condition': false });
                                    {
                                        var condition__2755 = B2754['condition'];
                                        {
                                            if (($T)(condition__2755)) {
                                                B2495['check-type'](condition__2755, B2493['<symbol>'], 'Non-symbol condition variable in handler-case: %=');
                                                {
                                                    B2495['check-identifier'](condition__2755, env__2745, 'External identifier in handler-case: %=');
                                                    B2681['bind-locally!'](condition__2755, env__2745);
                                                }
                                            }
                                            {
                                                var typeT__2756 = B2680['macroexpand-all'](type__2752, env__2745);
                                                {
                                                    var formsT__2757 = B2493['map'](B2493['rcurry'](B2680['macroexpand-all'], env__2745), forms__2751);
                                                    {
                                                        if (($T)(condition__2755))
                                                            B2681['unbind-locally!'](condition__2755, env__2745);
                                                        return(B2493['%concat']([B2493['%concat']([typeT__2756], B2493['rest'](binding__2750))], formsT__2757));
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
        }, cases__2747)));
    });
}
{
    var B2758 = $S('quote', 'ralph/core');
    B2493['get-setter'](($module)['$core-special-forms'], 'quote', B2643['make-quote-transformer'](B2758));
}
{
    var B2759 = $K('symbol');
    {
        var B2760 = $S('set!', 'ralph/core');
        B2493['get-setter'](($module)['$core-special-forms'], 'set!', B2643['make-rest-transformer'](B2680['macroexpand-all'], B2759, B2760));
    }
}
{
    var B2761 = $S('if', 'ralph/core');
    {
        var B2762 = $K('count');
        B2493['get-setter'](($module)['$core-special-forms'], 'if', B2643['make-rest-transformer'](B2680['macroexpand-all'], B2759, B2761, B2762, 3));
    }
}
{
    var B2763 = $S('begin', 'ralph/core');
    B2493['get-setter'](($module)['$core-special-forms'], 'begin', B2643['make-rest-transformer'](B2680['macroexpand-all'], B2759, B2763));
}
{
    var B2764 = $S('while', 'ralph/core');
    B2493['get-setter'](($module)['$core-special-forms'], 'while', B2643['make-rest-transformer'](B2680['macroexpand-all'], B2759, B2764));
}
{
    ($module)['$internal-special-forms'] = B2493['make-plain-object']();
    ($module)['%export']('$internal-special-forms', ($module)['$internal-special-forms']);
}
{
    var B2765 = $S('%quote', 'ralph/core');
    {
        var B2766 = $K('check?');
        B2493['get-setter'](($module)['$internal-special-forms'], '%quote', B2643['make-quote-transformer'](B2765, B2766, true));
    }
}
{
    var B2768 = $S('%bind', 'ralph/core');
    B2493['get-setter'](($module)['$internal-special-forms'], '%bind', B2643['make-bind-transformer'](B2680['macroexpand-all'], function B2769(env__2770, identifier__2771, valueT__2772, formT__2773) {
        return([
            B2768,
            [
                identifier__2771,
                valueT__2772
            ],
            formT__2773
        ]);
    }));
}
{
    var B2775 = $S('%method', 'ralph/core');
    B2493['get-setter'](($module)['$internal-special-forms'], '%method', B2643['make-method-transformer'](B2680['macroexpand-all'], function B2776(env__2777, name__2778, parameters__2779, formT__2780) {
        return([
            B2775,
            name__2778,
            parameters__2779,
            formT__2780
        ]);
    }));
}
{
    var B2782 = $S('%set', 'ralph/core');
    B2493['get-setter'](($module)['$internal-special-forms'], '%set', B2643['make-set-transformer'](B2680['macroexpand-all'], function B2783(env__2784, placeT__2785, valueT__2786) {
        return([
            B2782,
            placeT__2785,
            valueT__2786
        ]);
    }));
}
B2493['get-setter'](($module)['$internal-special-forms'], '%define', B2643['make-define-transformer'](B2680['macroexpand-all']));
{
    var B2787 = $S('%if', 'ralph/core');
    B2493['get-setter'](($module)['$internal-special-forms'], '%if', B2643['make-rest-transformer'](B2680['macroexpand-all'], B2759, B2787, B2762, 3));
}
{
    var B2788 = $S('%while', 'ralph/core');
    B2493['get-setter'](($module)['$internal-special-forms'], '%while', B2643['make-rest-transformer'](B2680['macroexpand-all'], B2759, B2788, B2762, 2));
}
B2493['get-setter'](($module)['$internal-special-forms'], '%try', B2643['make-try-transformer'](B2680['macroexpand-all']));
{
    var B2790 = $S('%var', 'ralph/core');
    B2493['get-setter'](($module)['$internal-special-forms'], '%var', B2643['make-var-transformer'](B2680['macroexpand-all'], function B2791(env__2792, identifier__2793, valueT__2794) {
        return([
            B2790,
            identifier__2793,
            valueT__2794
        ]);
    }));
}
B2493['get-setter'](($module)['$internal-special-forms'], '%object', B2643['make-object-transformer'](B2680['macroexpand-all']));
{
    var B2801 = $S('%native-call', 'ralph/core');
    {
        var B2802 = $S('%infix', 'ralph/core');
        {
            var B2803 = [
                    B2801,
                    B2802
                ];
            {
                var B2804 = false;
                {
                    var B2805 = false;
                    {
                        var B2806 = [B2803];
                        {
                            while (true) {
                                var B2811 = B2493['not'];
                                {
                                    var B2807 = B2804;
                                    {
                                        var B2812 = false;
                                        if (($T)(B2807))
                                            B2812 = B2807;
                                        else
                                            B2812 = B2493['any?'](B2493['empty?'], B2806);
                                        {
                                            var B2813 = B2811(B2812);
                                            if (($T)(B2813)) {
                                                var symbol__2808 = B2493['first'](B2803);
                                                {
                                                    (function B2809(symbol__2810) {
                                                        return(B2493['get-setter'](($module)['$internal-special-forms'], B2493['symbol-name'](symbol__2810), B2643['make-operator-transformer'](symbol__2810, B2680['macroexpand-all'])));
                                                    }(symbol__2808));
                                                    {
                                                        B2803 = B2493['rest'](B2803);
                                                        B2806 = [B2803];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B2805;
                        }
                    }
                }
            }
        }
    }
}
{
    var B2820 = $S('%begin', 'ralph/core');
    {
        var B2821 = $S('%native', 'ralph/core');
        {
            var B2822 = $S('%array', 'ralph/core');
            {
                var B2823 = $S('%get-property', 'ralph/core');
                {
                    var B2824 = [
                            B2820,
                            B2821,
                            B2822,
                            B2823
                        ];
                    {
                        var B2825 = false;
                        {
                            var B2826 = false;
                            {
                                var B2827 = [B2824];
                                {
                                    while (true) {
                                        var B2832 = B2493['not'];
                                        {
                                            var B2828 = B2825;
                                            {
                                                var B2833 = false;
                                                if (($T)(B2828))
                                                    B2833 = B2828;
                                                else
                                                    B2833 = B2493['any?'](B2493['empty?'], B2827);
                                                {
                                                    var B2834 = B2832(B2833);
                                                    if (($T)(B2834)) {
                                                        var symbol__2829 = B2493['first'](B2824);
                                                        {
                                                            (function B2830(symbol__2831) {
                                                                return(B2493['get-setter'](($module)['$internal-special-forms'], B2493['symbol-name'](symbol__2831), B2643['make-rest-transformer'](B2680['macroexpand-all'], B2759, symbol__2831)));
                                                            }(symbol__2829));
                                                            {
                                                                B2824 = B2493['rest'](B2824);
                                                                B2827 = [B2824];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    B2826;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
