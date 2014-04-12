{
    var $module = Object.create(null);
    var Mexport = function B2616(name__2617, value__2618) {
        var B2619 = (exports);
        return(B2619[name__2617] = value__2618);
    };
}
var B2620 = require('ralph/core');
{
    var B2621 = require('ralph/format');
    {
        var B2622 = require('ralph/compiler/utilities');
        var B2623 = require('ralph/compiler/environment');
    }
}
{
    {
        var make_quote_transformer = function B2628(symbol__2629) {
            var B2630 = $SL.call(arguments, 1);
            {
                var B2631 = B2620['%keys'](B2630, { 'check?': false });
                {
                    var checkQ__2632 = B2631['check?'];
                    return(function B2633(env__2634, value__2635) {
                        var superfluous__2636 = $SL.call(arguments, 2);
                        {
                            if (($T)(checkQ__2632))
                                B2622['check-type'](value__2635, B2620['<symbol>'], B2621['format-to-string']('Non-symbol value in %= %%=', symbol__2629));
                            return([
                                symbol__2629,
                                value__2635
                            ]);
                        }
                    });
                }
            }
        };
        Mexport('make-quote-transformer', make_quote_transformer);
    }
    B2620['%annotate-function'](make_quote_transformer, 'make-quote-transformer', false);
}
{
    var B2641 = $K('end');
    {
        {
            var make_rest_transformer = function B2642(transformer__2643) {
                var B2644 = $SL.call(arguments, 1);
                {
                    var B2645 = B2620['%keys'](B2644, {
                            'count': false,
                            'symbol': false,
                            'k': false
                        });
                    {
                        var count__2646 = B2645['count'];
                        {
                            var symbol__2647 = B2645['symbol'];
                            {
                                var k__2648 = B2645['k'];
                                return(function B2649(env__2650) {
                                    var forms__2651 = $SL.call(arguments, 1);
                                    {
                                        var B2653 = B2620['map'];
                                        {
                                            var B2654 = B2620['rcurry'](transformer__2643, env__2650);
                                            {
                                                var B2655 = false;
                                                if (($T)(count__2646))
                                                    B2655 = B2620['copy-sequence'](forms__2651, B2641, count__2646);
                                                else
                                                    B2655 = forms__2651;
                                                {
                                                    var formsT__2652 = B2653(B2654, B2655);
                                                    if (($T)(k__2648))
                                                        return(B2620['apply'](k__2648, env__2650, formsT__2652));
                                                    else if (($T)(symbol__2647))
                                                        return(B2620['%concat']([symbol__2647], formsT__2652));
                                                    else
                                                        return(B2620['signal']('rest transformer without symbol or continuation'));
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            };
            Mexport('make-rest-transformer', make_rest_transformer);
        }
        B2620['%annotate-function'](make_rest_transformer, 'make-rest-transformer', false);
    }
}
{
    {
        var make_bind_transformer = function B2658(transformer__2659, k__2660) {
            return(function B2661(env__2662, binding__2663, form__2664) {
                var superflous__2665 = $SL.call(arguments, 3);
                {
                    B2622['check-type'](binding__2663, B2620['<array>'], 'Non-array binding in %%bind: %=');
                    {
                        var identifier__2666 = binding__2663[0];
                        {
                            var value__2667 = binding__2663[1];
                            {
                                B2622['check-identifier'](identifier__2666, env__2662, 'External identifier in %%bind: %=');
                                {
                                    var valueT__2668 = transformer__2659(value__2667, env__2662);
                                    {
                                        B2623['bind-locally!'](identifier__2666, env__2662);
                                        {
                                            var formT__2669 = transformer__2659(form__2664, env__2662);
                                            {
                                                B2623['unbind-locally!'](identifier__2666, env__2662);
                                                return(k__2660(env__2662, identifier__2666, valueT__2668, formT__2669));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        };
        Mexport('make-bind-transformer', make_bind_transformer);
    }
    B2620['%annotate-function'](make_bind_transformer, 'make-bind-transformer', false);
}
{
    {
        var make_method_transformer = function B2673(transformer__2674, k__2675) {
            return(function B2676(env__2677, name__2678, parameters__2679, form__2680) {
                var superfluous__2681 = $SL.call(arguments, 4);
                {
                    B2622['check-type'](name__2678, B2620['<symbol>'], 'Non-symbol name in %%method: %=');
                    {
                        var identifiers__2682 = B2620['cons'](name__2678, parameters__2679);
                        {
                            B2620['do'](function B2683(parameter__2684) {
                                return(B2622['check-type'](parameter__2684, B2620['<symbol>'], 'Non-symbol parameter in %%method: %='));
                            }, parameters__2679);
                            {
                                B2620['do'](B2620['rcurry'](B2622['check-identifier'], env__2677, 'External identifier in parameter list of %%method: %='), identifiers__2682);
                                {
                                    B2620['do'](B2620['rcurry'](B2623['bind-locally!'], env__2677), identifiers__2682);
                                    {
                                        var formT__2685 = transformer__2674(form__2680, env__2677);
                                        {
                                            B2620['do'](B2620['rcurry'](B2623['unbind-locally!'], env__2677), identifiers__2682);
                                            return(k__2675(env__2677, name__2678, parameters__2679, formT__2685));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        };
        Mexport('make-method-transformer', make_method_transformer);
    }
    B2620['%annotate-function'](make_method_transformer, 'make-method-transformer', false);
}
{
    {
        var make_set_transformer = function B2688(transformer__2689, k__2690) {
            return(function B2691(env__2692, place__2693, value__2694) {
                var superflous__2695 = $SL.call(arguments, 3);
                if (($T)(B2620['instance?'](place__2693, B2620['<symbol>'])))
                    return(k__2690(env__2692, place__2693, transformer__2689(value__2694, env__2692)));
                else if (($T)(B2622['op?']('%get-property', place__2693)))
                    return(k__2690(env__2692, transformer__2689(place__2693, env__2692), transformer__2689(value__2694, env__2692)));
                else
                    return(B2620['signal'](B2621['format-to-string']('Non-symbol identifier or %%get-property in %%set: %=', place__2693)));
            });
        };
        Mexport('make-set-transformer', make_set_transformer);
    }
    B2620['%annotate-function'](make_set_transformer, 'make-set-transformer', false);
}
{
    var B2698 = $S('%define', 'ralph/core');
    {
        {
            var make_define_transformer = function B2699(transformer__2700) {
                return(function B2701(env__2702, identifier__2703, value__2704) {
                    var superflous__2705 = $SL.call(arguments, 3);
                    {
                        B2622['check-type'](identifier__2703, B2620['<symbol>'], 'Non-symbol identifier in %%define: %=');
                        {
                            var valueT__2706 = transformer__2700(value__2704, env__2702);
                            {
                                B2623['bind-globally!'](identifier__2703, env__2702);
                                return([
                                    B2698,
                                    identifier__2703,
                                    valueT__2706
                                ]);
                            }
                        }
                    }
                });
            };
            Mexport('make-define-transformer', make_define_transformer);
        }
        B2620['%annotate-function'](make_define_transformer, 'make-define-transformer', false);
    }
}
{
    var B2709 = $S('%try', 'ralph/core');
    {
        {
            var make_try_transformer = function B2710(transformer__2711) {
                return(function B2712(env__2713, protected_form__2714, identifier__2715, handling_form__2716) {
                    var superfluous__2717 = $SL.call(arguments, 4);
                    {
                        B2622['check-type'](identifier__2715, B2620['<symbol>'], 'Non-symbol identifier in %%try: %=');
                        {
                            B2622['check-identifier'](identifier__2715, env__2713, 'External identifier in %%try: %=');
                            {
                                var protected_formT__2718 = transformer__2711(protected_form__2714, env__2713);
                                {
                                    B2623['bind-locally!'](identifier__2715, env__2713);
                                    {
                                        var handling_formT__2719 = transformer__2711(handling_form__2716, env__2713);
                                        {
                                            B2623['unbind-locally!'](identifier__2715, env__2713);
                                            return([
                                                B2709,
                                                protected_formT__2718,
                                                identifier__2715,
                                                handling_formT__2719
                                            ]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            };
            Mexport('make-try-transformer', make_try_transformer);
        }
        B2620['%annotate-function'](make_try_transformer, 'make-try-transformer', false);
    }
}
{
    {
        var make_var_transformer = function B2723(transformer__2724, k__2725) {
            return(function B2726(env__2727, identifier__2728, value__2729) {
                var superflous__2730 = $SL.call(arguments, 3);
                {
                    B2622['check-type'](identifier__2728, B2620['<symbol>'], 'Non-symbol identifier in %%var: %=');
                    {
                        var valueT__2731 = transformer__2724(value__2729, env__2727);
                        {
                            var module_name__2732 = B2620['get'](identifier__2728, 'module');
                            {
                                var B2733 = B2620['not'](module_name__2732);
                                {
                                    var B2734 = false;
                                    if (($T)(B2733))
                                        B2734 = B2733;
                                    else
                                        B2734 = B2620['=='](module_name__2732, B2620['get'](env__2727, 'module', 'name'));
                                    {
                                        if (($T)(B2734))
                                            B2623['bind-globally!'](identifier__2728, env__2727);
                                        return(k__2725(env__2727, identifier__2728, valueT__2731));
                                    }
                                }
                            }
                        }
                    }
                }
            });
        };
        Mexport('make-var-transformer', make_var_transformer);
    }
    B2620['%annotate-function'](make_var_transformer, 'make-var-transformer', false);
}
{
    {
        var make_operator_transformer = function B2737(symbol__2738, transformer__2739) {
            return(function B2740(env__2741, operator_name__2742) {
                var arguments__2743 = $SL.call(arguments, 2);
                {
                    B2622['check-type'](operator_name__2742, B2620['<string>'], 'Non-string operator-name in %%native-call: %=');
                    return(B2620['%concat']([
                        symbol__2738,
                        operator_name__2742
                    ], B2620['map'](B2620['rcurry'](transformer__2739, env__2741), arguments__2743)));
                }
            });
        };
        Mexport('make-operator-transformer', make_operator_transformer);
    }
    B2620['%annotate-function'](make_operator_transformer, 'make-operator-transformer', false);
}
{
    var B2747 = $S('%object', 'ralph/core');
    {
        {
            var make_object_transformer = function B2748(transformer__2749) {
                return(function B2750(env__2751) {
                    var property_nameSvalues__2752 = $SL.call(arguments, 1);
                    return(B2620['%concat']([B2747], B2620['reduce1'](B2620['concatenate'], B2620['map'](function B2753(property_nameSvalue__2754) {
                        var property_name__2755 = property_nameSvalue__2754[0];
                        {
                            var value__2756 = property_nameSvalue__2754[1];
                            {
                                B2622['check-type'](property_name__2755, B2620['<string>'], 'Non-string property-name in %%object: %=');
                                return([
                                    property_name__2755,
                                    transformer__2749(value__2756, env__2751)
                                ]);
                            }
                        }
                    }, B2620['partition'](2, property_nameSvalues__2752)))));
                });
            };
            Mexport('make-object-transformer', make_object_transformer);
        }
        B2620['%annotate-function'](make_object_transformer, 'make-object-transformer', false);
    }
}
