{
    var $module = Object.create(null);
    ($module)['%export'] = function B2448(name__2449, value__2450) {
        var B2451 = (exports);
        return(B2451[name__2449] = value__2450);
    };
}
var B2452 = require('ralph/core');
{
    var B2453 = require('ralph/format');
    {
        var B2454 = require('ralph/compiler/utilities');
        {
            var B2602 = require('ralph/compiler/transformer');
            {
                var B2639 = require('ralph/compiler/macroexpansion');
                var B2640 = require('ralph/compiler/environment');
            }
        }
    }
}
{
    var B2641 = $KEY;
    {
        var B2642 = $REST;
        ($module)['$hash-symbols'] = [
            B2641,
            B2642
        ];
    }
}
{
    ($module)['parameter-list-identifiers'] = function B2646(parameter_list__2647) {
        return(B2452['map'](function B2648(parameter__2649) {
            if (($T)(B2452['instance?'](parameter__2649, B2452['<array>'])))
                return(B2452['first'](parameter__2649));
            else
                return(parameter__2649);
        }, B2452['choose'](function B2650(parameter__2651) {
            return(B2452['not'](B2452['member?'](parameter__2651, ($module)['$hash-symbols'])));
        }, parameter_list__2647)));
    };
    B2452['%annotate-function'](($module)['parameter-list-identifiers'], 'parameter-list-identifiers', false);
}
{
    ($module)['$core-special-forms'] = B2452['make-plain-object']();
    ($module)['%export']('$core-special-forms', ($module)['$core-special-forms']);
}
{
    var B2655 = $S('bind', 'ralph/core');
    B2452['get-setter'](($module)['$core-special-forms'], 'bind', function B2656(env__2657, bindings__2658) {
        var forms__2659 = $SL.call(arguments, 2);
        {
            var identifiers__2660 = [];
            {
                var bindingsT__2669 = B2452['map'](function B2661(binding__2662) {
                        var arrayQ__2663 = B2452['instance?'](bindings__2658, B2452['<array>']);
                        {
                            var B2664 = false;
                            if (($T)(arrayQ__2663))
                                B2664 = binding__2662;
                            else
                                B2664 = [binding__2662];
                            {
                                var identifier__2665 = B2664[0];
                                {
                                    var value__2666 = B2664[1];
                                    {
                                        var superflous__2667 = $SL.call(B2664, 2);
                                        {
                                            B2454['check-type'](identifier__2665, B2452['<symbol>'], 'Non-symbol identifier in bind: %=');
                                            {
                                                B2454['check-identifier'](identifier__2665, env__2657, 'External identifier in bind: %=');
                                                {
                                                    var valueT__2668 = B2639['macroexpand-all'](value__2666, env__2657);
                                                    {
                                                        B2640['bind-locally!'](identifier__2665, env__2657);
                                                        {
                                                            B2452['push-last'](identifiers__2660, identifier__2665);
                                                            if (($T)(arrayQ__2663))
                                                                return([
                                                                    identifier__2665,
                                                                    valueT__2668
                                                                ]);
                                                            else
                                                                return(identifier__2665);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, bindings__2658);
                {
                    var formsT__2670 = B2452['map'](B2452['rcurry'](B2639['macroexpand-all'], env__2657), forms__2659);
                    {
                        B2452['do'](B2452['rcurry'](B2640['unbind-locally!'], env__2657), identifiers__2660);
                        return(B2452['%concat']([
                            B2655,
                            B2452['%concat']([], bindingsT__2669)
                        ], formsT__2670));
                    }
                }
            }
        }
    });
}
{
    var B2674 = $S('method', 'ralph/core');
    B2452['get-setter'](($module)['$core-special-forms'], 'method', function B2675(env__2676, parameter_list__2677) {
        var forms__2678 = $SL.call(arguments, 2);
        {
            var identifiers__2679 = ($module)['parameter-list-identifiers'](parameter_list__2677);
            {
                B2452['do'](B2452['rcurry'](B2454['check-identifier'], env__2676, 'External identifier in parameter list of method: %='), identifiers__2679);
                {
                    var B2680 = B2454['destructure-parameter-list'](parameter_list__2677);
                    {
                        var normal_parameters__2681 = B2680[0];
                        {
                            var rest_parameter__2682 = B2680[1];
                            {
                                var keyword_parameters__2683 = B2680[2];
                                {
                                    var B2688 = B2452['concatenate'];
                                    {
                                        var B2689 = false;
                                        if (($T)(rest_parameter__2682))
                                            B2689 = [
                                                B2642,
                                                rest_parameter__2682
                                            ];
                                        else
                                            B2689 = [];
                                        {
                                            var B2690 = false;
                                            if (($T)(keyword_parameters__2683))
                                                B2690 = B2452['%concat']([B2641], B2452['map'](function B2684(parameter__2685) {
                                                    if (($T)(B2452['instance?'](parameter__2685, B2452['<array>'])))
                                                        return([
                                                            B2452['first'](parameter__2685),
                                                            B2639['macroexpand-all'](B2452['second'](parameter__2685), env__2676)
                                                        ]);
                                                    else
                                                        return(parameter__2685);
                                                }, keyword_parameters__2683));
                                            else
                                                B2690 = [];
                                            {
                                                var parameter_listT__2686 = B2688(normal_parameters__2681, B2689, B2690);
                                                {
                                                    B2452['do'](B2452['rcurry'](B2640['bind-locally!'], env__2676), identifiers__2679);
                                                    {
                                                        var formsT__2687 = B2452['map'](B2452['rcurry'](B2639['macroexpand-all'], env__2676), forms__2678);
                                                        {
                                                            B2452['do'](B2452['rcurry'](B2640['unbind-locally!'], env__2676), identifiers__2679);
                                                            return(B2452['%concat']([
                                                                B2674,
                                                                parameter_listT__2686
                                                            ], formsT__2687));
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
    var B2692 = $S('define', 'ralph/core');
    B2452['get-setter'](($module)['$core-special-forms'], 'define', function B2693(env__2694, identifier__2695, initial_value__2696) {
        var superfluous__2697 = $SL.call(arguments, 3);
        {
            B2454['check-type'](identifier__2695, B2452['<symbol>'], 'Non-symbol identifier in define: %=');
            {
                B2454['check-identifier'](identifier__2695, env__2694, 'External identifier in define: %=');
                {
                    B2640['bind-globally!'](identifier__2695, env__2694);
                    if (($T)(initial_value__2696))
                        return([
                            B2692,
                            identifier__2695,
                            B2639['macroexpand-all'](initial_value__2696, env__2694)
                        ]);
                    else
                        return([
                            B2692,
                            identifier__2695
                        ]);
                }
            }
        }
    });
}
{
    var B2702 = $S('handler-case', 'ralph/core');
    B2452['get-setter'](($module)['$core-special-forms'], 'handler-case', function B2703(env__2704, protected_form__2705) {
        var cases__2706 = $SL.call(arguments, 2);
        return(B2452['%concat']([
            B2702,
            B2639['macroexpand-all'](protected_form__2705, env__2704)
        ], B2452['map'](function B2707(case__2708) {
            B2454['check-type'](case__2708, B2452['<array>'], 'Non-array case in handler-case: %=');
            {
                var binding__2709 = case__2708[0];
                {
                    var forms__2710 = $SL.call(case__2708, 1);
                    {
                        B2454['check-type'](binding__2709, B2452['<array>'], 'Non-array case-binding in handler-case: %=');
                        {
                            var type__2711 = binding__2709[0];
                            {
                                var B2712 = $SL.call(binding__2709, 1);
                                {
                                    var B2713 = B2452['%keys'](B2712, { 'condition': false });
                                    {
                                        var condition__2714 = B2713['condition'];
                                        {
                                            if (($T)(condition__2714)) {
                                                B2454['check-type'](condition__2714, B2452['<symbol>'], 'Non-symbol condition variable in handler-case: %=');
                                                {
                                                    B2454['check-identifier'](condition__2714, env__2704, 'External identifier in handler-case: %=');
                                                    B2640['bind-locally!'](condition__2714, env__2704);
                                                }
                                            }
                                            {
                                                var typeT__2715 = B2639['macroexpand-all'](type__2711, env__2704);
                                                {
                                                    var formsT__2716 = B2452['map'](B2452['rcurry'](B2639['macroexpand-all'], env__2704), forms__2710);
                                                    {
                                                        if (($T)(condition__2714))
                                                            B2640['unbind-locally!'](condition__2714, env__2704);
                                                        return(B2452['%concat']([B2452['%concat']([typeT__2715], B2452['rest'](binding__2709))], formsT__2716));
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
        }, cases__2706)));
    });
}
{
    var B2717 = $S('quote', 'ralph/core');
    B2452['get-setter'](($module)['$core-special-forms'], 'quote', B2602['make-quote-transformer'](B2717));
}
{
    var B2718 = $K('symbol');
    {
        var B2719 = $S('set!', 'ralph/core');
        B2452['get-setter'](($module)['$core-special-forms'], 'set!', B2602['make-rest-transformer'](B2639['macroexpand-all'], B2718, B2719));
    }
}
{
    var B2720 = $S('if', 'ralph/core');
    {
        var B2721 = $K('count');
        B2452['get-setter'](($module)['$core-special-forms'], 'if', B2602['make-rest-transformer'](B2639['macroexpand-all'], B2718, B2720, B2721, 3));
    }
}
{
    var B2722 = $S('begin', 'ralph/core');
    B2452['get-setter'](($module)['$core-special-forms'], 'begin', B2602['make-rest-transformer'](B2639['macroexpand-all'], B2718, B2722));
}
{
    var B2723 = $S('while', 'ralph/core');
    B2452['get-setter'](($module)['$core-special-forms'], 'while', B2602['make-rest-transformer'](B2639['macroexpand-all'], B2718, B2723));
}
{
    ($module)['$internal-special-forms'] = B2452['make-plain-object']();
    ($module)['%export']('$internal-special-forms', ($module)['$internal-special-forms']);
}
{
    var B2724 = $S('%quote', 'ralph/core');
    {
        var B2725 = $K('check?');
        B2452['get-setter'](($module)['$internal-special-forms'], '%quote', B2602['make-quote-transformer'](B2724, B2725, true));
    }
}
{
    var B2727 = $S('%bind', 'ralph/core');
    B2452['get-setter'](($module)['$internal-special-forms'], '%bind', B2602['make-bind-transformer'](B2639['macroexpand-all'], function B2728(env__2729, identifier__2730, valueT__2731, formT__2732) {
        return([
            B2727,
            [
                identifier__2730,
                valueT__2731
            ],
            formT__2732
        ]);
    }));
}
{
    var B2734 = $S('%method', 'ralph/core');
    B2452['get-setter'](($module)['$internal-special-forms'], '%method', B2602['make-method-transformer'](B2639['macroexpand-all'], function B2735(env__2736, name__2737, parameters__2738, formT__2739) {
        return([
            B2734,
            name__2737,
            parameters__2738,
            formT__2739
        ]);
    }));
}
{
    var B2741 = $S('%set', 'ralph/core');
    B2452['get-setter'](($module)['$internal-special-forms'], '%set', B2602['make-set-transformer'](B2639['macroexpand-all'], function B2742(env__2743, placeT__2744, valueT__2745) {
        return([
            B2741,
            placeT__2744,
            valueT__2745
        ]);
    }));
}
B2452['get-setter'](($module)['$internal-special-forms'], '%define', B2602['make-define-transformer'](B2639['macroexpand-all']));
{
    var B2746 = $S('%if', 'ralph/core');
    B2452['get-setter'](($module)['$internal-special-forms'], '%if', B2602['make-rest-transformer'](B2639['macroexpand-all'], B2718, B2746, B2721, 3));
}
{
    var B2747 = $S('%while', 'ralph/core');
    B2452['get-setter'](($module)['$internal-special-forms'], '%while', B2602['make-rest-transformer'](B2639['macroexpand-all'], B2718, B2747, B2721, 2));
}
B2452['get-setter'](($module)['$internal-special-forms'], '%try', B2602['make-try-transformer'](B2639['macroexpand-all']));
{
    var B2749 = $S('%var', 'ralph/core');
    B2452['get-setter'](($module)['$internal-special-forms'], '%var', B2602['make-var-transformer'](B2639['macroexpand-all'], function B2750(env__2751, identifier__2752, valueT__2753) {
        return([
            B2749,
            identifier__2752,
            valueT__2753
        ]);
    }));
}
B2452['get-setter'](($module)['$internal-special-forms'], '%object', B2602['make-object-transformer'](B2639['macroexpand-all']));
{
    var B2760 = $S('%native-call', 'ralph/core');
    {
        var B2761 = $S('%infix', 'ralph/core');
        {
            var B2762 = [
                    B2760,
                    B2761
                ];
            {
                var B2763 = false;
                {
                    var B2764 = false;
                    {
                        var B2765 = [B2762];
                        {
                            while (true) {
                                var B2770 = B2452['not'];
                                {
                                    var B2766 = B2763;
                                    {
                                        var B2771 = false;
                                        if (($T)(B2766))
                                            B2771 = B2766;
                                        else
                                            B2771 = B2452['any?'](B2452['empty?'], B2765);
                                        {
                                            var B2772 = B2770(B2771);
                                            if (($T)(B2772)) {
                                                var symbol__2767 = B2452['first'](B2762);
                                                {
                                                    (function B2768(symbol__2769) {
                                                        return(B2452['get-setter'](($module)['$internal-special-forms'], B2452['symbol-name'](symbol__2769), B2602['make-operator-transformer'](symbol__2769, B2639['macroexpand-all'])));
                                                    }(symbol__2767));
                                                    {
                                                        B2762 = B2452['rest'](B2762);
                                                        B2765 = [B2762];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B2764;
                        }
                    }
                }
            }
        }
    }
}
{
    var B2779 = $S('%begin', 'ralph/core');
    {
        var B2780 = $S('%native', 'ralph/core');
        {
            var B2781 = $S('%array', 'ralph/core');
            {
                var B2782 = $S('%get-property', 'ralph/core');
                {
                    var B2783 = [
                            B2779,
                            B2780,
                            B2781,
                            B2782
                        ];
                    {
                        var B2784 = false;
                        {
                            var B2785 = false;
                            {
                                var B2786 = [B2783];
                                {
                                    while (true) {
                                        var B2791 = B2452['not'];
                                        {
                                            var B2787 = B2784;
                                            {
                                                var B2792 = false;
                                                if (($T)(B2787))
                                                    B2792 = B2787;
                                                else
                                                    B2792 = B2452['any?'](B2452['empty?'], B2786);
                                                {
                                                    var B2793 = B2791(B2792);
                                                    if (($T)(B2793)) {
                                                        var symbol__2788 = B2452['first'](B2783);
                                                        {
                                                            (function B2789(symbol__2790) {
                                                                return(B2452['get-setter'](($module)['$internal-special-forms'], B2452['symbol-name'](symbol__2790), B2602['make-rest-transformer'](B2639['macroexpand-all'], B2718, symbol__2790)));
                                                            }(symbol__2788));
                                                            {
                                                                B2783 = B2452['rest'](B2783);
                                                                B2786 = [B2783];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    B2785;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
{
    ($module)['%eval'] = function B2795() {
        return(eval((arguments[0])));
    };
    {
        B2452['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
