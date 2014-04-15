{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B2463(name__2464, value__2465) {
            var B2467 = (exports);
            return(B2467[name__2464] = value__2465);
        };
        {
            ($module)['%eval'] = function B2466() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2468 = require('ralph/core');
{
    var B2469 = require('ralph/format');
    {
        var B2470 = require('ralph/compiler/utilities');
        {
            var B2618 = require('ralph/compiler/transformer');
            {
                var B2655 = require('ralph/compiler/macroexpansion');
                var B2656 = require('ralph/compiler/environment');
            }
        }
    }
}
{
    var B2657 = $KEY;
    {
        var B2658 = $REST;
        ($module)['$hash-symbols'] = [
            B2657,
            B2658
        ];
    }
}
{
    ($module)['parameter-list-identifiers'] = function B2662(parameter_list__2663) {
        return(B2468['map'](function B2664(parameter__2665) {
            if (($T)(B2468['instance?'](parameter__2665, B2468['<array>'])))
                return(B2468['first'](parameter__2665));
            else
                return(parameter__2665);
        }, B2468['choose'](function B2666(parameter__2667) {
            return(B2468['not'](B2468['member?'](parameter__2667, ($module)['$hash-symbols'])));
        }, parameter_list__2663)));
    };
    B2468['%annotate-function'](($module)['parameter-list-identifiers'], 'parameter-list-identifiers', false);
}
{
    ($module)['$core-special-forms'] = B2468['make-plain-object']();
    ($module)['%export']('$core-special-forms', ($module)['$core-special-forms']);
}
{
    var B2671 = $S('bind', 'ralph/core');
    B2468['get-setter'](($module)['$core-special-forms'], 'bind', function B2672(env__2673, bindings__2674) {
        var forms__2675 = $SL.call(arguments, 2);
        {
            var identifiers__2676 = [];
            {
                var bindingsT__2685 = B2468['map'](function B2677(binding__2678) {
                        var arrayQ__2679 = B2468['instance?'](bindings__2674, B2468['<array>']);
                        {
                            var B2680 = false;
                            if (($T)(arrayQ__2679))
                                B2680 = binding__2678;
                            else
                                B2680 = [binding__2678];
                            {
                                var identifier__2681 = B2680[0];
                                {
                                    var value__2682 = B2680[1];
                                    {
                                        var superflous__2683 = $SL.call(B2680, 2);
                                        {
                                            B2470['check-type'](identifier__2681, B2468['<symbol>'], 'Non-symbol identifier in bind: %=');
                                            {
                                                B2470['check-identifier'](identifier__2681, env__2673, 'External identifier in bind: %=');
                                                {
                                                    var valueT__2684 = B2655['macroexpand-all'](value__2682, env__2673);
                                                    {
                                                        B2656['bind-locally!'](identifier__2681, env__2673);
                                                        {
                                                            B2468['push-last'](identifiers__2676, identifier__2681);
                                                            if (($T)(arrayQ__2679))
                                                                return([
                                                                    identifier__2681,
                                                                    valueT__2684
                                                                ]);
                                                            else
                                                                return(identifier__2681);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, bindings__2674);
                {
                    var formsT__2686 = B2468['map'](B2468['rcurry'](B2655['macroexpand-all'], env__2673), forms__2675);
                    {
                        B2468['do'](B2468['rcurry'](B2656['unbind-locally!'], env__2673), identifiers__2676);
                        return(B2468['%concat']([
                            B2671,
                            B2468['%concat']([], bindingsT__2685)
                        ], formsT__2686));
                    }
                }
            }
        }
    });
}
{
    var B2690 = $S('method', 'ralph/core');
    B2468['get-setter'](($module)['$core-special-forms'], 'method', function B2691(env__2692, parameter_list__2693) {
        var forms__2694 = $SL.call(arguments, 2);
        {
            var identifiers__2695 = ($module)['parameter-list-identifiers'](parameter_list__2693);
            {
                B2468['do'](B2468['rcurry'](B2470['check-identifier'], env__2692, 'External identifier in parameter list of method: %='), identifiers__2695);
                {
                    var B2696 = B2470['destructure-parameter-list'](parameter_list__2693);
                    {
                        var normal_parameters__2697 = B2696[0];
                        {
                            var rest_parameter__2698 = B2696[1];
                            {
                                var keyword_parameters__2699 = B2696[2];
                                {
                                    var B2704 = B2468['concatenate'];
                                    {
                                        var B2705 = false;
                                        if (($T)(rest_parameter__2698))
                                            B2705 = [
                                                B2658,
                                                rest_parameter__2698
                                            ];
                                        else
                                            B2705 = [];
                                        {
                                            var B2706 = false;
                                            if (($T)(keyword_parameters__2699))
                                                B2706 = B2468['%concat']([B2657], B2468['map'](function B2700(parameter__2701) {
                                                    if (($T)(B2468['instance?'](parameter__2701, B2468['<array>'])))
                                                        return([
                                                            B2468['first'](parameter__2701),
                                                            B2655['macroexpand-all'](B2468['second'](parameter__2701), env__2692)
                                                        ]);
                                                    else
                                                        return(parameter__2701);
                                                }, keyword_parameters__2699));
                                            else
                                                B2706 = [];
                                            {
                                                var parameter_listT__2702 = B2704(normal_parameters__2697, B2705, B2706);
                                                {
                                                    B2468['do'](B2468['rcurry'](B2656['bind-locally!'], env__2692), identifiers__2695);
                                                    {
                                                        var formsT__2703 = B2468['map'](B2468['rcurry'](B2655['macroexpand-all'], env__2692), forms__2694);
                                                        {
                                                            B2468['do'](B2468['rcurry'](B2656['unbind-locally!'], env__2692), identifiers__2695);
                                                            return(B2468['%concat']([
                                                                B2690,
                                                                parameter_listT__2702
                                                            ], formsT__2703));
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
    var B2708 = $S('define', 'ralph/core');
    B2468['get-setter'](($module)['$core-special-forms'], 'define', function B2709(env__2710, identifier__2711, initial_value__2712) {
        var superfluous__2713 = $SL.call(arguments, 3);
        {
            B2470['check-type'](identifier__2711, B2468['<symbol>'], 'Non-symbol identifier in define: %=');
            {
                B2470['check-identifier'](identifier__2711, env__2710, 'External identifier in define: %=');
                {
                    B2656['bind-globally!'](identifier__2711, env__2710);
                    if (($T)(initial_value__2712))
                        return([
                            B2708,
                            identifier__2711,
                            B2655['macroexpand-all'](initial_value__2712, env__2710)
                        ]);
                    else
                        return([
                            B2708,
                            identifier__2711
                        ]);
                }
            }
        }
    });
}
{
    var B2718 = $S('handler-case', 'ralph/core');
    B2468['get-setter'](($module)['$core-special-forms'], 'handler-case', function B2719(env__2720, protected_form__2721) {
        var cases__2722 = $SL.call(arguments, 2);
        return(B2468['%concat']([
            B2718,
            B2655['macroexpand-all'](protected_form__2721, env__2720)
        ], B2468['map'](function B2723(case__2724) {
            B2470['check-type'](case__2724, B2468['<array>'], 'Non-array case in handler-case: %=');
            {
                var binding__2725 = case__2724[0];
                {
                    var forms__2726 = $SL.call(case__2724, 1);
                    {
                        B2470['check-type'](binding__2725, B2468['<array>'], 'Non-array case-binding in handler-case: %=');
                        {
                            var type__2727 = binding__2725[0];
                            {
                                var B2728 = $SL.call(binding__2725, 1);
                                {
                                    var B2729 = B2468['%keys'](B2728, { 'condition': false });
                                    {
                                        var condition__2730 = B2729['condition'];
                                        {
                                            if (($T)(condition__2730)) {
                                                B2470['check-type'](condition__2730, B2468['<symbol>'], 'Non-symbol condition variable in handler-case: %=');
                                                {
                                                    B2470['check-identifier'](condition__2730, env__2720, 'External identifier in handler-case: %=');
                                                    B2656['bind-locally!'](condition__2730, env__2720);
                                                }
                                            }
                                            {
                                                var typeT__2731 = B2655['macroexpand-all'](type__2727, env__2720);
                                                {
                                                    var formsT__2732 = B2468['map'](B2468['rcurry'](B2655['macroexpand-all'], env__2720), forms__2726);
                                                    {
                                                        if (($T)(condition__2730))
                                                            B2656['unbind-locally!'](condition__2730, env__2720);
                                                        return(B2468['%concat']([B2468['%concat']([typeT__2731], B2468['rest'](binding__2725))], formsT__2732));
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
        }, cases__2722)));
    });
}
{
    var B2733 = $S('quote', 'ralph/core');
    B2468['get-setter'](($module)['$core-special-forms'], 'quote', B2618['make-quote-transformer'](B2733));
}
{
    var B2734 = $K('symbol');
    {
        var B2735 = $S('set!', 'ralph/core');
        B2468['get-setter'](($module)['$core-special-forms'], 'set!', B2618['make-rest-transformer'](B2655['macroexpand-all'], B2734, B2735));
    }
}
{
    var B2736 = $S('if', 'ralph/core');
    {
        var B2737 = $K('count');
        B2468['get-setter'](($module)['$core-special-forms'], 'if', B2618['make-rest-transformer'](B2655['macroexpand-all'], B2734, B2736, B2737, 3));
    }
}
{
    var B2738 = $S('begin', 'ralph/core');
    B2468['get-setter'](($module)['$core-special-forms'], 'begin', B2618['make-rest-transformer'](B2655['macroexpand-all'], B2734, B2738));
}
{
    var B2739 = $S('while', 'ralph/core');
    B2468['get-setter'](($module)['$core-special-forms'], 'while', B2618['make-rest-transformer'](B2655['macroexpand-all'], B2734, B2739));
}
{
    ($module)['$internal-special-forms'] = B2468['make-plain-object']();
    ($module)['%export']('$internal-special-forms', ($module)['$internal-special-forms']);
}
{
    var B2740 = $S('%quote', 'ralph/core');
    {
        var B2741 = $K('check?');
        B2468['get-setter'](($module)['$internal-special-forms'], '%quote', B2618['make-quote-transformer'](B2740, B2741, true));
    }
}
{
    var B2743 = $S('%bind', 'ralph/core');
    B2468['get-setter'](($module)['$internal-special-forms'], '%bind', B2618['make-bind-transformer'](B2655['macroexpand-all'], function B2744(env__2745, identifier__2746, valueT__2747, formT__2748) {
        return([
            B2743,
            [
                identifier__2746,
                valueT__2747
            ],
            formT__2748
        ]);
    }));
}
{
    var B2750 = $S('%method', 'ralph/core');
    B2468['get-setter'](($module)['$internal-special-forms'], '%method', B2618['make-method-transformer'](B2655['macroexpand-all'], function B2751(env__2752, name__2753, parameters__2754, formT__2755) {
        return([
            B2750,
            name__2753,
            parameters__2754,
            formT__2755
        ]);
    }));
}
{
    var B2757 = $S('%set', 'ralph/core');
    B2468['get-setter'](($module)['$internal-special-forms'], '%set', B2618['make-set-transformer'](B2655['macroexpand-all'], function B2758(env__2759, placeT__2760, valueT__2761) {
        return([
            B2757,
            placeT__2760,
            valueT__2761
        ]);
    }));
}
B2468['get-setter'](($module)['$internal-special-forms'], '%define', B2618['make-define-transformer'](B2655['macroexpand-all']));
{
    var B2762 = $S('%if', 'ralph/core');
    B2468['get-setter'](($module)['$internal-special-forms'], '%if', B2618['make-rest-transformer'](B2655['macroexpand-all'], B2734, B2762, B2737, 3));
}
{
    var B2763 = $S('%while', 'ralph/core');
    B2468['get-setter'](($module)['$internal-special-forms'], '%while', B2618['make-rest-transformer'](B2655['macroexpand-all'], B2734, B2763, B2737, 2));
}
B2468['get-setter'](($module)['$internal-special-forms'], '%try', B2618['make-try-transformer'](B2655['macroexpand-all']));
{
    var B2765 = $S('%var', 'ralph/core');
    B2468['get-setter'](($module)['$internal-special-forms'], '%var', B2618['make-var-transformer'](B2655['macroexpand-all'], function B2766(env__2767, identifier__2768, valueT__2769) {
        return([
            B2765,
            identifier__2768,
            valueT__2769
        ]);
    }));
}
B2468['get-setter'](($module)['$internal-special-forms'], '%object', B2618['make-object-transformer'](B2655['macroexpand-all']));
{
    var B2776 = $S('%native-call', 'ralph/core');
    {
        var B2777 = $S('%infix', 'ralph/core');
        {
            var B2778 = [
                    B2776,
                    B2777
                ];
            {
                var B2779 = false;
                {
                    var B2780 = false;
                    {
                        var B2781 = [B2778];
                        {
                            while (true) {
                                var B2786 = B2468['not'];
                                {
                                    var B2782 = B2779;
                                    {
                                        var B2787 = false;
                                        if (($T)(B2782))
                                            B2787 = B2782;
                                        else
                                            B2787 = B2468['any?'](B2468['empty?'], B2781);
                                        {
                                            var B2788 = B2786(B2787);
                                            if (($T)(B2788)) {
                                                var symbol__2783 = B2468['first'](B2778);
                                                {
                                                    (function B2784(symbol__2785) {
                                                        return(B2468['get-setter'](($module)['$internal-special-forms'], B2468['symbol-name'](symbol__2785), B2618['make-operator-transformer'](symbol__2785, B2655['macroexpand-all'])));
                                                    }(symbol__2783));
                                                    {
                                                        B2778 = B2468['rest'](B2778);
                                                        B2781 = [B2778];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B2780;
                        }
                    }
                }
            }
        }
    }
}
{
    var B2795 = $S('%begin', 'ralph/core');
    {
        var B2796 = $S('%native', 'ralph/core');
        {
            var B2797 = $S('%array', 'ralph/core');
            {
                var B2798 = $S('%get-property', 'ralph/core');
                {
                    var B2799 = [
                            B2795,
                            B2796,
                            B2797,
                            B2798
                        ];
                    {
                        var B2800 = false;
                        {
                            var B2801 = false;
                            {
                                var B2802 = [B2799];
                                {
                                    while (true) {
                                        var B2807 = B2468['not'];
                                        {
                                            var B2803 = B2800;
                                            {
                                                var B2808 = false;
                                                if (($T)(B2803))
                                                    B2808 = B2803;
                                                else
                                                    B2808 = B2468['any?'](B2468['empty?'], B2802);
                                                {
                                                    var B2809 = B2807(B2808);
                                                    if (($T)(B2809)) {
                                                        var symbol__2804 = B2468['first'](B2799);
                                                        {
                                                            (function B2805(symbol__2806) {
                                                                return(B2468['get-setter'](($module)['$internal-special-forms'], B2468['symbol-name'](symbol__2806), B2618['make-rest-transformer'](B2655['macroexpand-all'], B2734, symbol__2806)));
                                                            }(symbol__2804));
                                                            {
                                                                B2799 = B2468['rest'](B2799);
                                                                B2802 = [B2799];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    B2801;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
