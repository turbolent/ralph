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
            var B2653 = require('ralph/compiler/transformer');
            {
                var B2690 = require('ralph/compiler/macroexpansion');
                var B2691 = require('ralph/compiler/environment');
            }
        }
    }
}
{
    var B2692 = $KEY;
    {
        var B2693 = $REST;
        ($module)['$hash-symbols'] = [
            B2692,
            B2693
        ];
    }
}
{
    ($module)['parameter-list-identifiers'] = function B2697(parameter_list__2698) {
        return(B2503['map'](function B2699(parameter__2700) {
            if (($T)(B2503['instance?'](parameter__2700, B2503['<array>'])))
                return(B2503['first'](parameter__2700));
            else
                return(parameter__2700);
        }, B2503['choose'](function B2701(parameter__2702) {
            return(B2503['not'](B2503['member?'](parameter__2702, ($module)['$hash-symbols'])));
        }, parameter_list__2698)));
    };
    B2503['%annotate-function'](($module)['parameter-list-identifiers'], 'parameter-list-identifiers', false);
}
{
    ($module)['$core-special-forms'] = B2503['make-plain-object']();
    ($module)['%export']('$core-special-forms', ($module)['$core-special-forms']);
}
{
    var B2706 = $S('bind', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'bind', function B2707(env__2708, bindings__2709) {
        var forms__2710 = $SL.call(arguments, 2);
        {
            var identifiers__2711 = [];
            {
                var bindingsT__2720 = B2503['map'](function B2712(binding__2713) {
                        var arrayQ__2714 = B2503['instance?'](bindings__2709, B2503['<array>']);
                        {
                            var B2715 = false;
                            if (($T)(arrayQ__2714))
                                B2715 = binding__2713;
                            else
                                B2715 = [binding__2713];
                            {
                                var identifier__2716 = B2715[0];
                                {
                                    var value__2717 = B2715[1];
                                    {
                                        var superflous__2718 = $SL.call(B2715, 2);
                                        {
                                            B2505['check-type'](identifier__2716, B2503['<symbol>'], 'Non-symbol identifier in bind: %=');
                                            {
                                                B2505['check-identifier'](identifier__2716, env__2708, 'External identifier in bind: %=');
                                                {
                                                    var valueT__2719 = B2690['macroexpand-all'](value__2717, env__2708);
                                                    {
                                                        B2691['bind-locally!'](identifier__2716, env__2708);
                                                        {
                                                            B2503['push-last'](identifiers__2711, identifier__2716);
                                                            if (($T)(arrayQ__2714))
                                                                return([
                                                                    identifier__2716,
                                                                    valueT__2719
                                                                ]);
                                                            else
                                                                return(identifier__2716);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, bindings__2709);
                {
                    var formsT__2721 = B2503['map'](B2503['rcurry'](B2690['macroexpand-all'], env__2708), forms__2710);
                    {
                        B2503['do'](B2503['rcurry'](B2691['unbind-locally!'], env__2708), identifiers__2711);
                        return(B2503['%concat']([
                            B2706,
                            B2503['%concat']([], bindingsT__2720)
                        ], formsT__2721));
                    }
                }
            }
        }
    });
}
{
    var B2725 = $S('method', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'method', function B2726(env__2727, parameter_list__2728) {
        var forms__2729 = $SL.call(arguments, 2);
        {
            var identifiers__2730 = ($module)['parameter-list-identifiers'](parameter_list__2728);
            {
                B2503['do'](B2503['rcurry'](B2505['check-identifier'], env__2727, 'External identifier in parameter list of method: %='), identifiers__2730);
                {
                    var B2731 = B2505['destructure-parameter-list'](parameter_list__2728);
                    {
                        var normal_parameters__2732 = B2731[0];
                        {
                            var rest_parameter__2733 = B2731[1];
                            {
                                var keyword_parameters__2734 = B2731[2];
                                {
                                    var B2739 = B2503['concatenate'];
                                    {
                                        var B2740 = false;
                                        if (($T)(rest_parameter__2733))
                                            B2740 = [
                                                B2693,
                                                rest_parameter__2733
                                            ];
                                        else
                                            B2740 = [];
                                        {
                                            var B2741 = false;
                                            if (($T)(keyword_parameters__2734))
                                                B2741 = B2503['%concat']([B2692], B2503['map'](function B2735(parameter__2736) {
                                                    if (($T)(B2503['instance?'](parameter__2736, B2503['<array>'])))
                                                        return([
                                                            B2503['first'](parameter__2736),
                                                            B2690['macroexpand-all'](B2503['second'](parameter__2736), env__2727)
                                                        ]);
                                                    else
                                                        return(parameter__2736);
                                                }, keyword_parameters__2734));
                                            else
                                                B2741 = [];
                                            {
                                                var parameter_listT__2737 = B2739(normal_parameters__2732, B2740, B2741);
                                                {
                                                    B2503['do'](B2503['rcurry'](B2691['bind-locally!'], env__2727), identifiers__2730);
                                                    {
                                                        var formsT__2738 = B2503['map'](B2503['rcurry'](B2690['macroexpand-all'], env__2727), forms__2729);
                                                        {
                                                            B2503['do'](B2503['rcurry'](B2691['unbind-locally!'], env__2727), identifiers__2730);
                                                            return(B2503['%concat']([
                                                                B2725,
                                                                parameter_listT__2737
                                                            ], formsT__2738));
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
    var B2743 = $S('define', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'define', function B2744(env__2745, identifier__2746, initial_value__2747) {
        var superfluous__2748 = $SL.call(arguments, 3);
        {
            B2505['check-type'](identifier__2746, B2503['<symbol>'], 'Non-symbol identifier in define: %=');
            {
                B2505['check-identifier'](identifier__2746, env__2745, 'External identifier in define: %=');
                {
                    B2691['bind-globally!'](identifier__2746, env__2745);
                    if (($T)(initial_value__2747))
                        return([
                            B2743,
                            identifier__2746,
                            B2690['macroexpand-all'](initial_value__2747, env__2745)
                        ]);
                    else
                        return([
                            B2743,
                            identifier__2746
                        ]);
                }
            }
        }
    });
}
{
    var B2753 = $S('handler-case', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'handler-case', function B2754(env__2755, protected_form__2756) {
        var cases__2757 = $SL.call(arguments, 2);
        return(B2503['%concat']([
            B2753,
            B2690['macroexpand-all'](protected_form__2756, env__2755)
        ], B2503['map'](function B2758(case__2759) {
            B2505['check-type'](case__2759, B2503['<array>'], 'Non-array case in handler-case: %=');
            {
                var binding__2760 = case__2759[0];
                {
                    var forms__2761 = $SL.call(case__2759, 1);
                    {
                        B2505['check-type'](binding__2760, B2503['<array>'], 'Non-array case-binding in handler-case: %=');
                        {
                            var type__2762 = binding__2760[0];
                            {
                                var B2763 = $SL.call(binding__2760, 1);
                                {
                                    var B2764 = B2503['%keys'](B2763, { 'condition': false });
                                    {
                                        var condition__2765 = B2764['condition'];
                                        {
                                            if (($T)(condition__2765)) {
                                                B2505['check-type'](condition__2765, B2503['<symbol>'], 'Non-symbol condition variable in handler-case: %=');
                                                {
                                                    B2505['check-identifier'](condition__2765, env__2755, 'External identifier in handler-case: %=');
                                                    B2691['bind-locally!'](condition__2765, env__2755);
                                                }
                                            }
                                            {
                                                var typeT__2766 = B2690['macroexpand-all'](type__2762, env__2755);
                                                {
                                                    var formsT__2767 = B2503['map'](B2503['rcurry'](B2690['macroexpand-all'], env__2755), forms__2761);
                                                    {
                                                        if (($T)(condition__2765))
                                                            B2691['unbind-locally!'](condition__2765, env__2755);
                                                        return(B2503['%concat']([B2503['%concat']([typeT__2766], B2503['rest'](binding__2760))], formsT__2767));
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
        }, cases__2757)));
    });
}
{
    var B2768 = $S('quote', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'quote', B2653['make-quote-transformer'](B2768));
}
{
    var B2769 = $K('symbol');
    {
        var B2770 = $S('set!', 'ralph/core');
        B2503['get-setter'](($module)['$core-special-forms'], 'set!', B2653['make-rest-transformer'](B2690['macroexpand-all'], B2769, B2770));
    }
}
{
    var B2771 = $S('if', 'ralph/core');
    {
        var B2772 = $K('count');
        B2503['get-setter'](($module)['$core-special-forms'], 'if', B2653['make-rest-transformer'](B2690['macroexpand-all'], B2769, B2771, B2772, 3));
    }
}
{
    var B2773 = $S('begin', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'begin', B2653['make-rest-transformer'](B2690['macroexpand-all'], B2769, B2773));
}
{
    var B2774 = $S('while', 'ralph/core');
    B2503['get-setter'](($module)['$core-special-forms'], 'while', B2653['make-rest-transformer'](B2690['macroexpand-all'], B2769, B2774));
}
{
    ($module)['$internal-special-forms'] = B2503['make-plain-object']();
    ($module)['%export']('$internal-special-forms', ($module)['$internal-special-forms']);
}
{
    var B2775 = $S('%quote', 'ralph/core');
    {
        var B2776 = $K('check?');
        B2503['get-setter'](($module)['$internal-special-forms'], '%quote', B2653['make-quote-transformer'](B2775, B2776, true));
    }
}
{
    var B2778 = $S('%bind', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%bind', B2653['make-bind-transformer'](B2690['macroexpand-all'], function B2779(env__2780, identifier__2781, valueT__2782, formT__2783) {
        return([
            B2778,
            [
                identifier__2781,
                valueT__2782
            ],
            formT__2783
        ]);
    }));
}
{
    var B2785 = $S('%method', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%method', B2653['make-method-transformer'](B2690['macroexpand-all'], function B2786(env__2787, name__2788, parameters__2789, formT__2790) {
        return([
            B2785,
            name__2788,
            parameters__2789,
            formT__2790
        ]);
    }));
}
{
    var B2792 = $S('%set', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%set', B2653['make-set-transformer'](B2690['macroexpand-all'], function B2793(env__2794, placeT__2795, valueT__2796) {
        return([
            B2792,
            placeT__2795,
            valueT__2796
        ]);
    }));
}
B2503['get-setter'](($module)['$internal-special-forms'], '%define', B2653['make-define-transformer'](B2690['macroexpand-all']));
{
    var B2797 = $S('%if', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%if', B2653['make-rest-transformer'](B2690['macroexpand-all'], B2769, B2797, B2772, 3));
}
{
    var B2798 = $S('%while', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%while', B2653['make-rest-transformer'](B2690['macroexpand-all'], B2769, B2798, B2772, 2));
}
B2503['get-setter'](($module)['$internal-special-forms'], '%try', B2653['make-try-transformer'](B2690['macroexpand-all']));
{
    var B2800 = $S('%var', 'ralph/core');
    B2503['get-setter'](($module)['$internal-special-forms'], '%var', B2653['make-var-transformer'](B2690['macroexpand-all'], function B2801(env__2802, identifier__2803, valueT__2804) {
        return([
            B2800,
            identifier__2803,
            valueT__2804
        ]);
    }));
}
B2503['get-setter'](($module)['$internal-special-forms'], '%object', B2653['make-object-transformer'](B2690['macroexpand-all']));
{
    var B2811 = $S('%native-call', 'ralph/core');
    {
        var B2812 = $S('%infix', 'ralph/core');
        {
            var B2813 = [
                    B2811,
                    B2812
                ];
            {
                var B2814 = false;
                {
                    var B2815 = false;
                    {
                        var B2816 = [B2813];
                        {
                            while (true) {
                                var B2821 = B2503['not'];
                                {
                                    var B2817 = B2814;
                                    {
                                        var B2822 = false;
                                        if (($T)(B2817))
                                            B2822 = B2817;
                                        else
                                            B2822 = B2503['any?'](B2503['empty?'], B2816);
                                        {
                                            var B2823 = B2821(B2822);
                                            if (($T)(B2823)) {
                                                var symbol__2818 = B2503['first'](B2813);
                                                {
                                                    (function B2819(symbol__2820) {
                                                        return(B2503['get-setter'](($module)['$internal-special-forms'], B2503['symbol-name'](symbol__2820), B2653['make-operator-transformer'](symbol__2820, B2690['macroexpand-all'])));
                                                    }(symbol__2818));
                                                    {
                                                        B2813 = B2503['rest'](B2813);
                                                        B2816 = [B2813];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B2815;
                        }
                    }
                }
            }
        }
    }
}
{
    var B2830 = $S('%begin', 'ralph/core');
    {
        var B2831 = $S('%native', 'ralph/core');
        {
            var B2832 = $S('%array', 'ralph/core');
            {
                var B2833 = $S('%get-property', 'ralph/core');
                {
                    var B2834 = [
                            B2830,
                            B2831,
                            B2832,
                            B2833
                        ];
                    {
                        var B2835 = false;
                        {
                            var B2836 = false;
                            {
                                var B2837 = [B2834];
                                {
                                    while (true) {
                                        var B2842 = B2503['not'];
                                        {
                                            var B2838 = B2835;
                                            {
                                                var B2843 = false;
                                                if (($T)(B2838))
                                                    B2843 = B2838;
                                                else
                                                    B2843 = B2503['any?'](B2503['empty?'], B2837);
                                                {
                                                    var B2844 = B2842(B2843);
                                                    if (($T)(B2844)) {
                                                        var symbol__2839 = B2503['first'](B2834);
                                                        {
                                                            (function B2840(symbol__2841) {
                                                                return(B2503['get-setter'](($module)['$internal-special-forms'], B2503['symbol-name'](symbol__2841), B2653['make-rest-transformer'](B2690['macroexpand-all'], B2769, symbol__2841)));
                                                            }(symbol__2839));
                                                            {
                                                                B2834 = B2503['rest'](B2834);
                                                                B2837 = [B2834];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    B2836;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
