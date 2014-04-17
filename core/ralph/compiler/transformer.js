require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2508(name__2509, value__2510) {
            var B2512 = (exports);
            return(B2512[name__2509] = value__2510);
        };
        {
            ($module)['%eval'] = function B2511() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2513 = require('ralph/core');
{
    var B2514 = require('ralph/format');
    {
        var B2515 = require('ralph/compiler/utilities');
        var B2516 = require('ralph/compiler/environment');
    }
}
{
    {
        ($module)['make-quote-transformer'] = function B2521(symbol__2522) {
            var B2523 = $SL.call(arguments, 1);
            {
                var B2524 = B2513['%keys'](B2523, { 'check?': false });
                {
                    var checkQ__2525 = B2524['check?'];
                    return(function B2526(env__2527, value__2528) {
                        var superfluous__2529 = $SL.call(arguments, 2);
                        {
                            if (($T)(checkQ__2525))
                                B2515['check-type'](value__2528, B2513['<symbol>'], B2514['format-to-string']('Non-symbol value in %= %%=', symbol__2522));
                            return([
                                symbol__2522,
                                value__2528
                            ]);
                        }
                    });
                }
            }
        };
        ($module)['%export']('make-quote-transformer', ($module)['make-quote-transformer']);
    }
    B2513['%annotate-function'](($module)['make-quote-transformer'], 'make-quote-transformer', false);
}
{
    var B2534 = $K('end');
    {
        {
            ($module)['make-rest-transformer'] = function B2535(transformer__2536) {
                var B2537 = $SL.call(arguments, 1);
                {
                    var B2538 = B2513['%keys'](B2537, {
                            'count': false,
                            'symbol': false,
                            'k': false
                        });
                    {
                        var count__2539 = B2538['count'];
                        {
                            var symbol__2540 = B2538['symbol'];
                            {
                                var k__2541 = B2538['k'];
                                return(function B2542(env__2543) {
                                    var forms__2544 = $SL.call(arguments, 1);
                                    {
                                        var B2546 = B2513['map'];
                                        {
                                            var B2547 = B2513['rcurry'](transformer__2536, env__2543);
                                            {
                                                var B2548 = false;
                                                if (($T)(count__2539))
                                                    B2548 = B2513['copy-sequence'](forms__2544, B2534, count__2539);
                                                else
                                                    B2548 = forms__2544;
                                                {
                                                    var formsT__2545 = B2546(B2547, B2548);
                                                    if (($T)(k__2541))
                                                        return(B2513['apply'](k__2541, env__2543, formsT__2545));
                                                    else if (($T)(symbol__2540))
                                                        return(B2513['%concat']([symbol__2540], formsT__2545));
                                                    else
                                                        return(B2513['signal']('rest transformer without symbol or continuation'));
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
            ($module)['%export']('make-rest-transformer', ($module)['make-rest-transformer']);
        }
        B2513['%annotate-function'](($module)['make-rest-transformer'], 'make-rest-transformer', false);
    }
}
{
    {
        ($module)['make-bind-transformer'] = function B2551(transformer__2552, k__2553) {
            return(function B2554(env__2555, binding__2556, form__2557) {
                var superflous__2558 = $SL.call(arguments, 3);
                {
                    B2515['check-type'](binding__2556, B2513['<array>'], 'Non-array binding in %%bind: %=');
                    {
                        var identifier__2559 = binding__2556[0];
                        {
                            var value__2560 = binding__2556[1];
                            {
                                B2515['check-identifier'](identifier__2559, env__2555, 'External identifier in %%bind: %=');
                                {
                                    var valueT__2561 = transformer__2552(value__2560, env__2555);
                                    {
                                        B2516['bind-locally!'](identifier__2559, env__2555);
                                        {
                                            var formT__2562 = transformer__2552(form__2557, env__2555);
                                            {
                                                B2516['unbind-locally!'](identifier__2559, env__2555);
                                                return(k__2553(env__2555, identifier__2559, valueT__2561, formT__2562));
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
        ($module)['%export']('make-bind-transformer', ($module)['make-bind-transformer']);
    }
    B2513['%annotate-function'](($module)['make-bind-transformer'], 'make-bind-transformer', false);
}
{
    {
        ($module)['make-method-transformer'] = function B2566(transformer__2567, k__2568) {
            return(function B2569(env__2570, name__2571, parameters__2572, form__2573) {
                var superfluous__2574 = $SL.call(arguments, 4);
                {
                    B2515['check-type'](name__2571, B2513['<symbol>'], 'Non-symbol name in %%method: %=');
                    {
                        var identifiers__2575 = B2513['cons'](name__2571, parameters__2572);
                        {
                            B2513['do'](function B2576(parameter__2577) {
                                return(B2515['check-type'](parameter__2577, B2513['<symbol>'], 'Non-symbol parameter in %%method: %='));
                            }, parameters__2572);
                            {
                                B2513['do'](B2513['rcurry'](B2515['check-identifier'], env__2570, 'External identifier in parameter list of %%method: %='), identifiers__2575);
                                {
                                    B2513['do'](B2513['rcurry'](B2516['bind-locally!'], env__2570), identifiers__2575);
                                    {
                                        var formT__2578 = transformer__2567(form__2573, env__2570);
                                        {
                                            B2513['do'](B2513['rcurry'](B2516['unbind-locally!'], env__2570), identifiers__2575);
                                            return(k__2568(env__2570, name__2571, parameters__2572, formT__2578));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        };
        ($module)['%export']('make-method-transformer', ($module)['make-method-transformer']);
    }
    B2513['%annotate-function'](($module)['make-method-transformer'], 'make-method-transformer', false);
}
{
    {
        ($module)['make-set-transformer'] = function B2582(transformer__2583, k__2584) {
            return(function B2585(env__2586, place__2587, value__2588) {
                var superflous__2589 = $SL.call(arguments, 3);
                {
                    var B2590 = B2513['instance?'](place__2587, B2513['<symbol>']);
                    {
                        var B2591 = false;
                        if (($T)(B2590))
                            B2591 = B2590;
                        else
                            B2591 = B2515['op?']('%get-property', place__2587);
                        if (($T)(B2591))
                            return(k__2584(env__2586, transformer__2583(place__2587, env__2586), transformer__2583(value__2588, env__2586)));
                        else
                            return(B2513['signal'](B2514['format-to-string']('Non-symbol identifier or %%get-property in %%set: %=', place__2587)));
                    }
                }
            });
        };
        ($module)['%export']('make-set-transformer', ($module)['make-set-transformer']);
    }
    B2513['%annotate-function'](($module)['make-set-transformer'], 'make-set-transformer', false);
}
{
    var B2594 = $S('%define', 'ralph/core');
    {
        {
            ($module)['make-define-transformer'] = function B2595(transformer__2596) {
                return(function B2597(env__2598, identifier__2599, value__2600) {
                    var superflous__2601 = $SL.call(arguments, 3);
                    {
                        B2515['check-type'](identifier__2599, B2513['<symbol>'], 'Non-symbol identifier in %%define: %=');
                        {
                            var valueT__2602 = transformer__2596(value__2600, env__2598);
                            {
                                B2516['bind-globally!'](identifier__2599, env__2598);
                                return([
                                    B2594,
                                    identifier__2599,
                                    valueT__2602
                                ]);
                            }
                        }
                    }
                });
            };
            ($module)['%export']('make-define-transformer', ($module)['make-define-transformer']);
        }
        B2513['%annotate-function'](($module)['make-define-transformer'], 'make-define-transformer', false);
    }
}
{
    var B2605 = $S('%try', 'ralph/core');
    {
        {
            ($module)['make-try-transformer'] = function B2606(transformer__2607) {
                return(function B2608(env__2609, protected_form__2610, identifier__2611, handling_form__2612) {
                    var superfluous__2613 = $SL.call(arguments, 4);
                    {
                        B2515['check-type'](identifier__2611, B2513['<symbol>'], 'Non-symbol identifier in %%try: %=');
                        {
                            B2515['check-identifier'](identifier__2611, env__2609, 'External identifier in %%try: %=');
                            {
                                var protected_formT__2614 = transformer__2607(protected_form__2610, env__2609);
                                {
                                    B2516['bind-locally!'](identifier__2611, env__2609);
                                    {
                                        var handling_formT__2615 = transformer__2607(handling_form__2612, env__2609);
                                        {
                                            B2516['unbind-locally!'](identifier__2611, env__2609);
                                            return([
                                                B2605,
                                                protected_formT__2614,
                                                identifier__2611,
                                                handling_formT__2615
                                            ]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            };
            ($module)['%export']('make-try-transformer', ($module)['make-try-transformer']);
        }
        B2513['%annotate-function'](($module)['make-try-transformer'], 'make-try-transformer', false);
    }
}
{
    {
        ($module)['make-var-transformer'] = function B2619(transformer__2620, k__2621) {
            return(function B2622(env__2623, identifier__2624, value__2625) {
                var superflous__2626 = $SL.call(arguments, 3);
                {
                    B2515['check-type'](identifier__2624, B2513['<symbol>'], 'Non-symbol identifier in %%var: %=');
                    {
                        var valueT__2627 = transformer__2620(value__2625, env__2623);
                        {
                            var module_name__2628 = B2513['get'](identifier__2624, 'module');
                            {
                                var B2629 = B2513['not'](module_name__2628);
                                {
                                    var B2630 = false;
                                    if (($T)(B2629))
                                        B2630 = B2629;
                                    else
                                        B2630 = B2513['=='](module_name__2628, B2513['get'](env__2623, 'module', 'name'));
                                    {
                                        if (($T)(B2630))
                                            B2516['bind-globally!'](identifier__2624, env__2623);
                                        return(k__2621(env__2623, identifier__2624, valueT__2627));
                                    }
                                }
                            }
                        }
                    }
                }
            });
        };
        ($module)['%export']('make-var-transformer', ($module)['make-var-transformer']);
    }
    B2513['%annotate-function'](($module)['make-var-transformer'], 'make-var-transformer', false);
}
{
    {
        ($module)['make-operator-transformer'] = function B2633(symbol__2634, transformer__2635) {
            return(function B2636(env__2637, operator_name__2638) {
                var arguments__2639 = $SL.call(arguments, 2);
                {
                    B2515['check-type'](operator_name__2638, B2513['<string>'], 'Non-string operator-name in %%native-call: %=');
                    return(B2513['%concat']([
                        symbol__2634,
                        operator_name__2638
                    ], B2513['map'](B2513['rcurry'](transformer__2635, env__2637), arguments__2639)));
                }
            });
        };
        ($module)['%export']('make-operator-transformer', ($module)['make-operator-transformer']);
    }
    B2513['%annotate-function'](($module)['make-operator-transformer'], 'make-operator-transformer', false);
}
{
    var B2643 = $S('%object', 'ralph/core');
    {
        {
            ($module)['make-object-transformer'] = function B2644(transformer__2645) {
                return(function B2646(env__2647) {
                    var property_nameSvalues__2648 = $SL.call(arguments, 1);
                    return(B2513['%concat']([B2643], B2513['reduce1'](B2513['concatenate'], B2513['map'](function B2649(property_nameSvalue__2650) {
                        var property_name__2651 = property_nameSvalue__2650[0];
                        {
                            var value__2652 = property_nameSvalue__2650[1];
                            {
                                B2515['check-type'](property_name__2651, B2513['<string>'], 'Non-string property-name in %%object: %=');
                                return([
                                    property_name__2651,
                                    transformer__2645(value__2652, env__2647)
                                ]);
                            }
                        }
                    }, B2513['partition'](2, property_nameSvalues__2648)))));
                });
            };
            ($module)['%export']('make-object-transformer', ($module)['make-object-transformer']);
        }
        B2513['%annotate-function'](($module)['make-object-transformer'], 'make-object-transformer', false);
    }
}
