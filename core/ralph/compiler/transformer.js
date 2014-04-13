{
    var $module = Object.create(null);
    ($module)['%export'] = function B2456(name__2457, value__2458) {
        var B2459 = (exports);
        return(B2459[name__2457] = value__2458);
    };
}
var B2460 = require('ralph/core');
{
    var B2461 = require('ralph/format');
    {
        var B2462 = require('ralph/compiler/utilities');
        var B2463 = require('ralph/compiler/environment');
    }
}
{
    {
        ($module)['make-quote-transformer'] = function B2468(symbol__2469) {
            var B2470 = $SL.call(arguments, 1);
            {
                var B2471 = B2460['%keys'](B2470, { 'check?': false });
                {
                    var checkQ__2472 = B2471['check?'];
                    return(function B2473(env__2474, value__2475) {
                        var superfluous__2476 = $SL.call(arguments, 2);
                        {
                            if (($T)(checkQ__2472))
                                B2462['check-type'](value__2475, B2460['<symbol>'], B2461['format-to-string']('Non-symbol value in %= %%=', symbol__2469));
                            return([
                                symbol__2469,
                                value__2475
                            ]);
                        }
                    });
                }
            }
        };
        ($module)['%export']('make-quote-transformer', ($module)['make-quote-transformer']);
    }
    B2460['%annotate-function'](($module)['make-quote-transformer'], 'make-quote-transformer', false);
}
{
    var B2481 = $K('end');
    {
        {
            ($module)['make-rest-transformer'] = function B2482(transformer__2483) {
                var B2484 = $SL.call(arguments, 1);
                {
                    var B2485 = B2460['%keys'](B2484, {
                            'count': false,
                            'symbol': false,
                            'k': false
                        });
                    {
                        var count__2486 = B2485['count'];
                        {
                            var symbol__2487 = B2485['symbol'];
                            {
                                var k__2488 = B2485['k'];
                                return(function B2489(env__2490) {
                                    var forms__2491 = $SL.call(arguments, 1);
                                    {
                                        var B2493 = B2460['map'];
                                        {
                                            var B2494 = B2460['rcurry'](transformer__2483, env__2490);
                                            {
                                                var B2495 = false;
                                                if (($T)(count__2486))
                                                    B2495 = B2460['copy-sequence'](forms__2491, B2481, count__2486);
                                                else
                                                    B2495 = forms__2491;
                                                {
                                                    var formsT__2492 = B2493(B2494, B2495);
                                                    if (($T)(k__2488))
                                                        return(B2460['apply'](k__2488, env__2490, formsT__2492));
                                                    else if (($T)(symbol__2487))
                                                        return(B2460['%concat']([symbol__2487], formsT__2492));
                                                    else
                                                        return(B2460['signal']('rest transformer without symbol or continuation'));
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
        B2460['%annotate-function'](($module)['make-rest-transformer'], 'make-rest-transformer', false);
    }
}
{
    {
        ($module)['make-bind-transformer'] = function B2498(transformer__2499, k__2500) {
            return(function B2501(env__2502, binding__2503, form__2504) {
                var superflous__2505 = $SL.call(arguments, 3);
                {
                    B2462['check-type'](binding__2503, B2460['<array>'], 'Non-array binding in %%bind: %=');
                    {
                        var identifier__2506 = binding__2503[0];
                        {
                            var value__2507 = binding__2503[1];
                            {
                                B2462['check-identifier'](identifier__2506, env__2502, 'External identifier in %%bind: %=');
                                {
                                    var valueT__2508 = transformer__2499(value__2507, env__2502);
                                    {
                                        B2463['bind-locally!'](identifier__2506, env__2502);
                                        {
                                            var formT__2509 = transformer__2499(form__2504, env__2502);
                                            {
                                                B2463['unbind-locally!'](identifier__2506, env__2502);
                                                return(k__2500(env__2502, identifier__2506, valueT__2508, formT__2509));
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
    B2460['%annotate-function'](($module)['make-bind-transformer'], 'make-bind-transformer', false);
}
{
    {
        ($module)['make-method-transformer'] = function B2513(transformer__2514, k__2515) {
            return(function B2516(env__2517, name__2518, parameters__2519, form__2520) {
                var superfluous__2521 = $SL.call(arguments, 4);
                {
                    B2462['check-type'](name__2518, B2460['<symbol>'], 'Non-symbol name in %%method: %=');
                    {
                        var identifiers__2522 = B2460['cons'](name__2518, parameters__2519);
                        {
                            B2460['do'](function B2523(parameter__2524) {
                                return(B2462['check-type'](parameter__2524, B2460['<symbol>'], 'Non-symbol parameter in %%method: %='));
                            }, parameters__2519);
                            {
                                B2460['do'](B2460['rcurry'](B2462['check-identifier'], env__2517, 'External identifier in parameter list of %%method: %='), identifiers__2522);
                                {
                                    B2460['do'](B2460['rcurry'](B2463['bind-locally!'], env__2517), identifiers__2522);
                                    {
                                        var formT__2525 = transformer__2514(form__2520, env__2517);
                                        {
                                            B2460['do'](B2460['rcurry'](B2463['unbind-locally!'], env__2517), identifiers__2522);
                                            return(k__2515(env__2517, name__2518, parameters__2519, formT__2525));
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
    B2460['%annotate-function'](($module)['make-method-transformer'], 'make-method-transformer', false);
}
{
    {
        ($module)['make-set-transformer'] = function B2529(transformer__2530, k__2531) {
            return(function B2532(env__2533, place__2534, value__2535) {
                var superflous__2536 = $SL.call(arguments, 3);
                {
                    var B2537 = B2460['instance?'](place__2534, B2460['<symbol>']);
                    {
                        var B2538 = false;
                        if (($T)(B2537))
                            B2538 = B2537;
                        else
                            B2538 = B2462['op?']('%get-property', place__2534);
                        if (($T)(B2538))
                            return(k__2531(env__2533, transformer__2530(place__2534, env__2533), transformer__2530(value__2535, env__2533)));
                        else
                            return(B2460['signal'](B2461['format-to-string']('Non-symbol identifier or %%get-property in %%set: %=', place__2534)));
                    }
                }
            });
        };
        ($module)['%export']('make-set-transformer', ($module)['make-set-transformer']);
    }
    B2460['%annotate-function'](($module)['make-set-transformer'], 'make-set-transformer', false);
}
{
    var B2541 = $S('%define', 'ralph/core');
    {
        {
            ($module)['make-define-transformer'] = function B2542(transformer__2543) {
                return(function B2544(env__2545, identifier__2546, value__2547) {
                    var superflous__2548 = $SL.call(arguments, 3);
                    {
                        B2462['check-type'](identifier__2546, B2460['<symbol>'], 'Non-symbol identifier in %%define: %=');
                        {
                            var valueT__2549 = transformer__2543(value__2547, env__2545);
                            {
                                B2463['bind-globally!'](identifier__2546, env__2545);
                                return([
                                    B2541,
                                    identifier__2546,
                                    valueT__2549
                                ]);
                            }
                        }
                    }
                });
            };
            ($module)['%export']('make-define-transformer', ($module)['make-define-transformer']);
        }
        B2460['%annotate-function'](($module)['make-define-transformer'], 'make-define-transformer', false);
    }
}
{
    var B2552 = $S('%try', 'ralph/core');
    {
        {
            ($module)['make-try-transformer'] = function B2553(transformer__2554) {
                return(function B2555(env__2556, protected_form__2557, identifier__2558, handling_form__2559) {
                    var superfluous__2560 = $SL.call(arguments, 4);
                    {
                        B2462['check-type'](identifier__2558, B2460['<symbol>'], 'Non-symbol identifier in %%try: %=');
                        {
                            B2462['check-identifier'](identifier__2558, env__2556, 'External identifier in %%try: %=');
                            {
                                var protected_formT__2561 = transformer__2554(protected_form__2557, env__2556);
                                {
                                    B2463['bind-locally!'](identifier__2558, env__2556);
                                    {
                                        var handling_formT__2562 = transformer__2554(handling_form__2559, env__2556);
                                        {
                                            B2463['unbind-locally!'](identifier__2558, env__2556);
                                            return([
                                                B2552,
                                                protected_formT__2561,
                                                identifier__2558,
                                                handling_formT__2562
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
        B2460['%annotate-function'](($module)['make-try-transformer'], 'make-try-transformer', false);
    }
}
{
    {
        ($module)['make-var-transformer'] = function B2566(transformer__2567, k__2568) {
            return(function B2569(env__2570, identifier__2571, value__2572) {
                var superflous__2573 = $SL.call(arguments, 3);
                {
                    B2462['check-type'](identifier__2571, B2460['<symbol>'], 'Non-symbol identifier in %%var: %=');
                    {
                        var valueT__2574 = transformer__2567(value__2572, env__2570);
                        {
                            var module_name__2575 = B2460['get'](identifier__2571, 'module');
                            {
                                var B2576 = B2460['not'](module_name__2575);
                                {
                                    var B2577 = false;
                                    if (($T)(B2576))
                                        B2577 = B2576;
                                    else
                                        B2577 = B2460['=='](module_name__2575, B2460['get'](env__2570, 'module', 'name'));
                                    {
                                        if (($T)(B2577))
                                            B2463['bind-globally!'](identifier__2571, env__2570);
                                        return(k__2568(env__2570, identifier__2571, valueT__2574));
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
    B2460['%annotate-function'](($module)['make-var-transformer'], 'make-var-transformer', false);
}
{
    {
        ($module)['make-operator-transformer'] = function B2580(symbol__2581, transformer__2582) {
            return(function B2583(env__2584, operator_name__2585) {
                var arguments__2586 = $SL.call(arguments, 2);
                {
                    B2462['check-type'](operator_name__2585, B2460['<string>'], 'Non-string operator-name in %%native-call: %=');
                    return(B2460['%concat']([
                        symbol__2581,
                        operator_name__2585
                    ], B2460['map'](B2460['rcurry'](transformer__2582, env__2584), arguments__2586)));
                }
            });
        };
        ($module)['%export']('make-operator-transformer', ($module)['make-operator-transformer']);
    }
    B2460['%annotate-function'](($module)['make-operator-transformer'], 'make-operator-transformer', false);
}
{
    var B2590 = $S('%object', 'ralph/core');
    {
        {
            ($module)['make-object-transformer'] = function B2591(transformer__2592) {
                return(function B2593(env__2594) {
                    var property_nameSvalues__2595 = $SL.call(arguments, 1);
                    return(B2460['%concat']([B2590], B2460['reduce1'](B2460['concatenate'], B2460['map'](function B2596(property_nameSvalue__2597) {
                        var property_name__2598 = property_nameSvalue__2597[0];
                        {
                            var value__2599 = property_nameSvalue__2597[1];
                            {
                                B2462['check-type'](property_name__2598, B2460['<string>'], 'Non-string property-name in %%object: %=');
                                return([
                                    property_name__2598,
                                    transformer__2592(value__2599, env__2594)
                                ]);
                            }
                        }
                    }, B2460['partition'](2, property_nameSvalues__2595)))));
                });
            };
            ($module)['%export']('make-object-transformer', ($module)['make-object-transformer']);
        }
        B2460['%annotate-function'](($module)['make-object-transformer'], 'make-object-transformer', false);
    }
}
{
    ($module)['%eval'] = function B2601() {
        return(eval((arguments[0])));
    };
    {
        B2460['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
