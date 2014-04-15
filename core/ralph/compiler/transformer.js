{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B2473(name__2474, value__2475) {
            var B2477 = (exports);
            return(B2477[name__2474] = value__2475);
        };
        {
            ($module)['%eval'] = function B2476() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2478 = require('ralph/core');
{
    var B2479 = require('ralph/format');
    {
        var B2480 = require('ralph/compiler/utilities');
        var B2481 = require('ralph/compiler/environment');
    }
}
{
    {
        ($module)['make-quote-transformer'] = function B2486(symbol__2487) {
            var B2488 = $SL.call(arguments, 1);
            {
                var B2489 = B2478['%keys'](B2488, { 'check?': false });
                {
                    var checkQ__2490 = B2489['check?'];
                    return(function B2491(env__2492, value__2493) {
                        var superfluous__2494 = $SL.call(arguments, 2);
                        {
                            if (($T)(checkQ__2490))
                                B2480['check-type'](value__2493, B2478['<symbol>'], B2479['format-to-string']('Non-symbol value in %= %%=', symbol__2487));
                            return([
                                symbol__2487,
                                value__2493
                            ]);
                        }
                    });
                }
            }
        };
        ($module)['%export']('make-quote-transformer', ($module)['make-quote-transformer']);
    }
    B2478['%annotate-function'](($module)['make-quote-transformer'], 'make-quote-transformer', false);
}
{
    var B2499 = $K('end');
    {
        {
            ($module)['make-rest-transformer'] = function B2500(transformer__2501) {
                var B2502 = $SL.call(arguments, 1);
                {
                    var B2503 = B2478['%keys'](B2502, {
                            'count': false,
                            'symbol': false,
                            'k': false
                        });
                    {
                        var count__2504 = B2503['count'];
                        {
                            var symbol__2505 = B2503['symbol'];
                            {
                                var k__2506 = B2503['k'];
                                return(function B2507(env__2508) {
                                    var forms__2509 = $SL.call(arguments, 1);
                                    {
                                        var B2511 = B2478['map'];
                                        {
                                            var B2512 = B2478['rcurry'](transformer__2501, env__2508);
                                            {
                                                var B2513 = false;
                                                if (($T)(count__2504))
                                                    B2513 = B2478['copy-sequence'](forms__2509, B2499, count__2504);
                                                else
                                                    B2513 = forms__2509;
                                                {
                                                    var formsT__2510 = B2511(B2512, B2513);
                                                    if (($T)(k__2506))
                                                        return(B2478['apply'](k__2506, env__2508, formsT__2510));
                                                    else if (($T)(symbol__2505))
                                                        return(B2478['%concat']([symbol__2505], formsT__2510));
                                                    else
                                                        return(B2478['signal']('rest transformer without symbol or continuation'));
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
        B2478['%annotate-function'](($module)['make-rest-transformer'], 'make-rest-transformer', false);
    }
}
{
    {
        ($module)['make-bind-transformer'] = function B2516(transformer__2517, k__2518) {
            return(function B2519(env__2520, binding__2521, form__2522) {
                var superflous__2523 = $SL.call(arguments, 3);
                {
                    B2480['check-type'](binding__2521, B2478['<array>'], 'Non-array binding in %%bind: %=');
                    {
                        var identifier__2524 = binding__2521[0];
                        {
                            var value__2525 = binding__2521[1];
                            {
                                B2480['check-identifier'](identifier__2524, env__2520, 'External identifier in %%bind: %=');
                                {
                                    var valueT__2526 = transformer__2517(value__2525, env__2520);
                                    {
                                        B2481['bind-locally!'](identifier__2524, env__2520);
                                        {
                                            var formT__2527 = transformer__2517(form__2522, env__2520);
                                            {
                                                B2481['unbind-locally!'](identifier__2524, env__2520);
                                                return(k__2518(env__2520, identifier__2524, valueT__2526, formT__2527));
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
    B2478['%annotate-function'](($module)['make-bind-transformer'], 'make-bind-transformer', false);
}
{
    {
        ($module)['make-method-transformer'] = function B2531(transformer__2532, k__2533) {
            return(function B2534(env__2535, name__2536, parameters__2537, form__2538) {
                var superfluous__2539 = $SL.call(arguments, 4);
                {
                    B2480['check-type'](name__2536, B2478['<symbol>'], 'Non-symbol name in %%method: %=');
                    {
                        var identifiers__2540 = B2478['cons'](name__2536, parameters__2537);
                        {
                            B2478['do'](function B2541(parameter__2542) {
                                return(B2480['check-type'](parameter__2542, B2478['<symbol>'], 'Non-symbol parameter in %%method: %='));
                            }, parameters__2537);
                            {
                                B2478['do'](B2478['rcurry'](B2480['check-identifier'], env__2535, 'External identifier in parameter list of %%method: %='), identifiers__2540);
                                {
                                    B2478['do'](B2478['rcurry'](B2481['bind-locally!'], env__2535), identifiers__2540);
                                    {
                                        var formT__2543 = transformer__2532(form__2538, env__2535);
                                        {
                                            B2478['do'](B2478['rcurry'](B2481['unbind-locally!'], env__2535), identifiers__2540);
                                            return(k__2533(env__2535, name__2536, parameters__2537, formT__2543));
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
    B2478['%annotate-function'](($module)['make-method-transformer'], 'make-method-transformer', false);
}
{
    {
        ($module)['make-set-transformer'] = function B2547(transformer__2548, k__2549) {
            return(function B2550(env__2551, place__2552, value__2553) {
                var superflous__2554 = $SL.call(arguments, 3);
                {
                    var B2555 = B2478['instance?'](place__2552, B2478['<symbol>']);
                    {
                        var B2556 = false;
                        if (($T)(B2555))
                            B2556 = B2555;
                        else
                            B2556 = B2480['op?']('%get-property', place__2552);
                        if (($T)(B2556))
                            return(k__2549(env__2551, transformer__2548(place__2552, env__2551), transformer__2548(value__2553, env__2551)));
                        else
                            return(B2478['signal'](B2479['format-to-string']('Non-symbol identifier or %%get-property in %%set: %=', place__2552)));
                    }
                }
            });
        };
        ($module)['%export']('make-set-transformer', ($module)['make-set-transformer']);
    }
    B2478['%annotate-function'](($module)['make-set-transformer'], 'make-set-transformer', false);
}
{
    var B2559 = $S('%define', 'ralph/core');
    {
        {
            ($module)['make-define-transformer'] = function B2560(transformer__2561) {
                return(function B2562(env__2563, identifier__2564, value__2565) {
                    var superflous__2566 = $SL.call(arguments, 3);
                    {
                        B2480['check-type'](identifier__2564, B2478['<symbol>'], 'Non-symbol identifier in %%define: %=');
                        {
                            var valueT__2567 = transformer__2561(value__2565, env__2563);
                            {
                                B2481['bind-globally!'](identifier__2564, env__2563);
                                return([
                                    B2559,
                                    identifier__2564,
                                    valueT__2567
                                ]);
                            }
                        }
                    }
                });
            };
            ($module)['%export']('make-define-transformer', ($module)['make-define-transformer']);
        }
        B2478['%annotate-function'](($module)['make-define-transformer'], 'make-define-transformer', false);
    }
}
{
    var B2570 = $S('%try', 'ralph/core');
    {
        {
            ($module)['make-try-transformer'] = function B2571(transformer__2572) {
                return(function B2573(env__2574, protected_form__2575, identifier__2576, handling_form__2577) {
                    var superfluous__2578 = $SL.call(arguments, 4);
                    {
                        B2480['check-type'](identifier__2576, B2478['<symbol>'], 'Non-symbol identifier in %%try: %=');
                        {
                            B2480['check-identifier'](identifier__2576, env__2574, 'External identifier in %%try: %=');
                            {
                                var protected_formT__2579 = transformer__2572(protected_form__2575, env__2574);
                                {
                                    B2481['bind-locally!'](identifier__2576, env__2574);
                                    {
                                        var handling_formT__2580 = transformer__2572(handling_form__2577, env__2574);
                                        {
                                            B2481['unbind-locally!'](identifier__2576, env__2574);
                                            return([
                                                B2570,
                                                protected_formT__2579,
                                                identifier__2576,
                                                handling_formT__2580
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
        B2478['%annotate-function'](($module)['make-try-transformer'], 'make-try-transformer', false);
    }
}
{
    {
        ($module)['make-var-transformer'] = function B2584(transformer__2585, k__2586) {
            return(function B2587(env__2588, identifier__2589, value__2590) {
                var superflous__2591 = $SL.call(arguments, 3);
                {
                    B2480['check-type'](identifier__2589, B2478['<symbol>'], 'Non-symbol identifier in %%var: %=');
                    {
                        var valueT__2592 = transformer__2585(value__2590, env__2588);
                        {
                            var module_name__2593 = B2478['get'](identifier__2589, 'module');
                            {
                                var B2594 = B2478['not'](module_name__2593);
                                {
                                    var B2595 = false;
                                    if (($T)(B2594))
                                        B2595 = B2594;
                                    else
                                        B2595 = B2478['=='](module_name__2593, B2478['get'](env__2588, 'module', 'name'));
                                    {
                                        if (($T)(B2595))
                                            B2481['bind-globally!'](identifier__2589, env__2588);
                                        return(k__2586(env__2588, identifier__2589, valueT__2592));
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
    B2478['%annotate-function'](($module)['make-var-transformer'], 'make-var-transformer', false);
}
{
    {
        ($module)['make-operator-transformer'] = function B2598(symbol__2599, transformer__2600) {
            return(function B2601(env__2602, operator_name__2603) {
                var arguments__2604 = $SL.call(arguments, 2);
                {
                    B2480['check-type'](operator_name__2603, B2478['<string>'], 'Non-string operator-name in %%native-call: %=');
                    return(B2478['%concat']([
                        symbol__2599,
                        operator_name__2603
                    ], B2478['map'](B2478['rcurry'](transformer__2600, env__2602), arguments__2604)));
                }
            });
        };
        ($module)['%export']('make-operator-transformer', ($module)['make-operator-transformer']);
    }
    B2478['%annotate-function'](($module)['make-operator-transformer'], 'make-operator-transformer', false);
}
{
    var B2608 = $S('%object', 'ralph/core');
    {
        {
            ($module)['make-object-transformer'] = function B2609(transformer__2610) {
                return(function B2611(env__2612) {
                    var property_nameSvalues__2613 = $SL.call(arguments, 1);
                    return(B2478['%concat']([B2608], B2478['reduce1'](B2478['concatenate'], B2478['map'](function B2614(property_nameSvalue__2615) {
                        var property_name__2616 = property_nameSvalue__2615[0];
                        {
                            var value__2617 = property_nameSvalue__2615[1];
                            {
                                B2480['check-type'](property_name__2616, B2478['<string>'], 'Non-string property-name in %%object: %=');
                                return([
                                    property_name__2616,
                                    transformer__2610(value__2617, env__2612)
                                ]);
                            }
                        }
                    }, B2478['partition'](2, property_nameSvalues__2613)))));
                });
            };
            ($module)['%export']('make-object-transformer', ($module)['make-object-transformer']);
        }
        B2478['%annotate-function'](($module)['make-object-transformer'], 'make-object-transformer', false);
    }
}
