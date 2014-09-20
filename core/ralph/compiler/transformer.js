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
        ($module)['make-set-transformer'] = function B2583(transformer__2584, k__2585) {
            return(function B2586(env__2587, place__2588, value__2589) {
                var superflous__2590 = $SL.call(arguments, 3);
                {
                    var B2591 = B2513['instance?'](place__2588, B2513['<symbol>']);
                    {
                        var B2593 = false;
                        if (($T)(B2591))
                            B2593 = B2591;
                        else {
                            var B2592 = B2515['op?']('%get-property', place__2588);
                            if (($T)(B2592))
                                B2593 = B2592;
                            else
                                B2593 = B2515['op?']('%native', place__2588);
                        }
                        if (($T)(B2593))
                            return(k__2585(env__2587, transformer__2584(place__2588, env__2587), transformer__2584(value__2589, env__2587)));
                        else
                            return(B2513['signal'](B2514['format-to-string']('Non-symbol identifier or %%get-property in %%set: %=', place__2588)));
                    }
                }
            });
        };
        ($module)['%export']('make-set-transformer', ($module)['make-set-transformer']);
    }
    B2513['%annotate-function'](($module)['make-set-transformer'], 'make-set-transformer', false);
}
{
    var B2596 = $S('%define', 'ralph/core');
    {
        {
            ($module)['make-define-transformer'] = function B2597(transformer__2598) {
                return(function B2599(env__2600, identifier__2601, value__2602) {
                    var superflous__2603 = $SL.call(arguments, 3);
                    {
                        B2515['check-type'](identifier__2601, B2513['<symbol>'], 'Non-symbol identifier in %%define: %=');
                        {
                            var valueT__2604 = transformer__2598(value__2602, env__2600);
                            {
                                B2516['bind-globally!'](identifier__2601, env__2600);
                                return([
                                    B2596,
                                    identifier__2601,
                                    valueT__2604
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
    var B2607 = $S('%try', 'ralph/core');
    {
        {
            ($module)['make-try-transformer'] = function B2608(transformer__2609) {
                return(function B2610(env__2611, protected_form__2612, identifier__2613, handling_form__2614) {
                    var superfluous__2615 = $SL.call(arguments, 4);
                    {
                        B2515['check-type'](identifier__2613, B2513['<symbol>'], 'Non-symbol identifier in %%try: %=');
                        {
                            B2515['check-identifier'](identifier__2613, env__2611, 'External identifier in %%try: %=');
                            {
                                var protected_formT__2616 = transformer__2609(protected_form__2612, env__2611);
                                {
                                    B2516['bind-locally!'](identifier__2613, env__2611);
                                    {
                                        var handling_formT__2617 = transformer__2609(handling_form__2614, env__2611);
                                        {
                                            B2516['unbind-locally!'](identifier__2613, env__2611);
                                            return([
                                                B2607,
                                                protected_formT__2616,
                                                identifier__2613,
                                                handling_formT__2617
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
        ($module)['make-var-transformer'] = function B2621(transformer__2622, k__2623) {
            return(function B2624(env__2625, identifier__2626, value__2627) {
                var superflous__2628 = $SL.call(arguments, 3);
                {
                    B2515['check-type'](identifier__2626, B2513['<symbol>'], 'Non-symbol identifier in %%var: %=');
                    {
                        var valueT__2629 = transformer__2622(value__2627, env__2625);
                        {
                            var module_name__2630 = B2513['get'](identifier__2626, 'module');
                            {
                                var B2631 = B2513['not'](module_name__2630);
                                {
                                    var B2632 = false;
                                    if (($T)(B2631))
                                        B2632 = B2631;
                                    else
                                        B2632 = B2513['=='](module_name__2630, B2513['get'](env__2625, 'module', 'name'));
                                    {
                                        if (($T)(B2632))
                                            B2516['bind-globally!'](identifier__2626, env__2625);
                                        return(k__2623(env__2625, identifier__2626, valueT__2629));
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
        ($module)['make-operator-transformer'] = function B2635(symbol__2636, transformer__2637) {
            return(function B2638(env__2639, operator_name__2640) {
                var arguments__2641 = $SL.call(arguments, 2);
                {
                    B2515['check-type'](operator_name__2640, B2513['<string>'], 'Non-string operator-name in %%native-call: %=');
                    return(B2513['%concat']([
                        symbol__2636,
                        operator_name__2640
                    ], B2513['map'](B2513['rcurry'](transformer__2637, env__2639), arguments__2641)));
                }
            });
        };
        ($module)['%export']('make-operator-transformer', ($module)['make-operator-transformer']);
    }
    B2513['%annotate-function'](($module)['make-operator-transformer'], 'make-operator-transformer', false);
}
{
    var B2645 = $S('%object', 'ralph/core');
    {
        {
            ($module)['make-object-transformer'] = function B2646(transformer__2647) {
                return(function B2648(env__2649) {
                    var property_nameSvalues__2650 = $SL.call(arguments, 1);
                    return(B2513['%concat']([B2645], B2513['reduce1'](B2513['concatenate'], B2513['map'](function B2651(property_nameSvalue__2652) {
                        var property_name__2653 = property_nameSvalue__2652[0];
                        {
                            var value__2654 = property_nameSvalue__2652[1];
                            {
                                B2515['check-type'](property_name__2653, B2513['<string>'], 'Non-string property-name in %%object: %=');
                                return([
                                    property_name__2653,
                                    transformer__2647(value__2654, env__2649)
                                ]);
                            }
                        }
                    }, B2513['partition'](2, property_nameSvalues__2650)))));
                });
            };
            ($module)['%export']('make-object-transformer', ($module)['make-object-transformer']);
        }
        B2513['%annotate-function'](($module)['make-object-transformer'], 'make-object-transformer', false);
    }
}
