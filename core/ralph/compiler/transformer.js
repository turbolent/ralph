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
        var B2506 = require('ralph/compiler/environment');
    }
}
{
    {
        ($module)['make-quote-transformer'] = function B2511(symbol__2512) {
            var B2513 = $SL.call(arguments, 1);
            {
                var B2514 = B2503['%keys'](B2513, { 'check?': false });
                {
                    var checkQ__2515 = B2514['check?'];
                    return(function B2516(env__2517, value__2518) {
                        var superfluous__2519 = $SL.call(arguments, 2);
                        {
                            if (($T)(checkQ__2515))
                                B2505['check-type'](value__2518, B2503['<symbol>'], B2504['format-to-string']('Non-symbol value in %= %%=', symbol__2512));
                            return([
                                symbol__2512,
                                value__2518
                            ]);
                        }
                    });
                }
            }
        };
        ($module)['%export']('make-quote-transformer', ($module)['make-quote-transformer']);
    }
    B2503['%annotate-function'](($module)['make-quote-transformer'], 'make-quote-transformer', false);
}
{
    var B2524 = $K('end');
    {
        {
            ($module)['make-rest-transformer'] = function B2525(transformer__2526) {
                var B2527 = $SL.call(arguments, 1);
                {
                    var B2528 = B2503['%keys'](B2527, {
                            'count': false,
                            'symbol': false,
                            'k': false
                        });
                    {
                        var count__2529 = B2528['count'];
                        {
                            var symbol__2530 = B2528['symbol'];
                            {
                                var k__2531 = B2528['k'];
                                return(function B2532(env__2533) {
                                    var forms__2534 = $SL.call(arguments, 1);
                                    {
                                        var B2536 = B2503['map'];
                                        {
                                            var B2537 = B2503['rcurry'](transformer__2526, env__2533);
                                            {
                                                var B2538 = false;
                                                if (($T)(count__2529))
                                                    B2538 = B2503['copy-sequence'](forms__2534, B2524, count__2529);
                                                else
                                                    B2538 = forms__2534;
                                                {
                                                    var formsT__2535 = B2536(B2537, B2538);
                                                    if (($T)(k__2531))
                                                        return(B2503['apply'](k__2531, env__2533, formsT__2535));
                                                    else if (($T)(symbol__2530))
                                                        return(B2503['%concat']([symbol__2530], formsT__2535));
                                                    else
                                                        return(B2503['signal']('rest transformer without symbol or continuation'));
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
        B2503['%annotate-function'](($module)['make-rest-transformer'], 'make-rest-transformer', false);
    }
}
{
    {
        ($module)['make-bind-transformer'] = function B2541(transformer__2542, k__2543) {
            return(function B2544(env__2545, binding__2546, form__2547) {
                var superflous__2548 = $SL.call(arguments, 3);
                {
                    B2505['check-type'](binding__2546, B2503['<array>'], 'Non-array binding in %%bind: %=');
                    {
                        var identifier__2549 = binding__2546[0];
                        {
                            var value__2550 = binding__2546[1];
                            {
                                B2505['check-identifier'](identifier__2549, env__2545, 'External identifier in %%bind: %=');
                                {
                                    var valueT__2551 = transformer__2542(value__2550, env__2545);
                                    {
                                        B2506['bind-locally!'](identifier__2549, env__2545);
                                        {
                                            var formT__2552 = transformer__2542(form__2547, env__2545);
                                            {
                                                B2506['unbind-locally!'](identifier__2549, env__2545);
                                                return(k__2543(env__2545, identifier__2549, valueT__2551, formT__2552));
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
    B2503['%annotate-function'](($module)['make-bind-transformer'], 'make-bind-transformer', false);
}
{
    {
        ($module)['make-method-transformer'] = function B2556(transformer__2557, k__2558) {
            return(function B2559(env__2560, name__2561, parameters__2562, form__2563) {
                var superfluous__2564 = $SL.call(arguments, 4);
                {
                    B2505['check-type'](name__2561, B2503['<symbol>'], 'Non-symbol name in %%method: %=');
                    {
                        var identifiers__2565 = B2503['cons'](name__2561, parameters__2562);
                        {
                            B2503['do'](function B2566(parameter__2567) {
                                return(B2505['check-type'](parameter__2567, B2503['<symbol>'], 'Non-symbol parameter in %%method: %='));
                            }, parameters__2562);
                            {
                                B2503['do'](B2503['rcurry'](B2505['check-identifier'], env__2560, 'External identifier in parameter list of %%method: %='), identifiers__2565);
                                {
                                    B2503['do'](B2503['rcurry'](B2506['bind-locally!'], env__2560), identifiers__2565);
                                    {
                                        var formT__2568 = transformer__2557(form__2563, env__2560);
                                        {
                                            B2503['do'](B2503['rcurry'](B2506['unbind-locally!'], env__2560), identifiers__2565);
                                            return(k__2558(env__2560, name__2561, parameters__2562, formT__2568));
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
    B2503['%annotate-function'](($module)['make-method-transformer'], 'make-method-transformer', false);
}
{
    {
        ($module)['make-set-transformer'] = function B2572(transformer__2573, k__2574) {
            return(function B2575(env__2576, place__2577, value__2578) {
                var superflous__2579 = $SL.call(arguments, 3);
                {
                    var B2580 = B2503['instance?'](place__2577, B2503['<symbol>']);
                    {
                        var B2581 = false;
                        if (($T)(B2580))
                            B2581 = B2580;
                        else
                            B2581 = B2505['op?']('%get-property', place__2577);
                        if (($T)(B2581))
                            return(k__2574(env__2576, transformer__2573(place__2577, env__2576), transformer__2573(value__2578, env__2576)));
                        else
                            return(B2503['signal'](B2504['format-to-string']('Non-symbol identifier or %%get-property in %%set: %=', place__2577)));
                    }
                }
            });
        };
        ($module)['%export']('make-set-transformer', ($module)['make-set-transformer']);
    }
    B2503['%annotate-function'](($module)['make-set-transformer'], 'make-set-transformer', false);
}
{
    var B2584 = $S('%define', 'ralph/core');
    {
        {
            ($module)['make-define-transformer'] = function B2585(transformer__2586) {
                return(function B2587(env__2588, identifier__2589, value__2590) {
                    var superflous__2591 = $SL.call(arguments, 3);
                    {
                        B2505['check-type'](identifier__2589, B2503['<symbol>'], 'Non-symbol identifier in %%define: %=');
                        {
                            var valueT__2592 = transformer__2586(value__2590, env__2588);
                            {
                                B2506['bind-globally!'](identifier__2589, env__2588);
                                return([
                                    B2584,
                                    identifier__2589,
                                    valueT__2592
                                ]);
                            }
                        }
                    }
                });
            };
            ($module)['%export']('make-define-transformer', ($module)['make-define-transformer']);
        }
        B2503['%annotate-function'](($module)['make-define-transformer'], 'make-define-transformer', false);
    }
}
{
    var B2595 = $S('%try', 'ralph/core');
    {
        {
            ($module)['make-try-transformer'] = function B2596(transformer__2597) {
                return(function B2598(env__2599, protected_form__2600, identifier__2601, handling_form__2602) {
                    var superfluous__2603 = $SL.call(arguments, 4);
                    {
                        B2505['check-type'](identifier__2601, B2503['<symbol>'], 'Non-symbol identifier in %%try: %=');
                        {
                            B2505['check-identifier'](identifier__2601, env__2599, 'External identifier in %%try: %=');
                            {
                                var protected_formT__2604 = transformer__2597(protected_form__2600, env__2599);
                                {
                                    B2506['bind-locally!'](identifier__2601, env__2599);
                                    {
                                        var handling_formT__2605 = transformer__2597(handling_form__2602, env__2599);
                                        {
                                            B2506['unbind-locally!'](identifier__2601, env__2599);
                                            return([
                                                B2595,
                                                protected_formT__2604,
                                                identifier__2601,
                                                handling_formT__2605
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
        B2503['%annotate-function'](($module)['make-try-transformer'], 'make-try-transformer', false);
    }
}
{
    {
        ($module)['make-var-transformer'] = function B2609(transformer__2610, k__2611) {
            return(function B2612(env__2613, identifier__2614, value__2615) {
                var superflous__2616 = $SL.call(arguments, 3);
                {
                    B2505['check-type'](identifier__2614, B2503['<symbol>'], 'Non-symbol identifier in %%var: %=');
                    {
                        var valueT__2617 = transformer__2610(value__2615, env__2613);
                        {
                            var module_name__2618 = B2503['get'](identifier__2614, 'module');
                            {
                                var B2619 = B2503['not'](module_name__2618);
                                {
                                    var B2620 = false;
                                    if (($T)(B2619))
                                        B2620 = B2619;
                                    else
                                        B2620 = B2503['=='](module_name__2618, B2503['get'](env__2613, 'module', 'name'));
                                    {
                                        if (($T)(B2620))
                                            B2506['bind-globally!'](identifier__2614, env__2613);
                                        return(k__2611(env__2613, identifier__2614, valueT__2617));
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
    B2503['%annotate-function'](($module)['make-var-transformer'], 'make-var-transformer', false);
}
{
    {
        ($module)['make-operator-transformer'] = function B2623(symbol__2624, transformer__2625) {
            return(function B2626(env__2627, operator_name__2628) {
                var arguments__2629 = $SL.call(arguments, 2);
                {
                    B2505['check-type'](operator_name__2628, B2503['<string>'], 'Non-string operator-name in %%native-call: %=');
                    return(B2503['%concat']([
                        symbol__2624,
                        operator_name__2628
                    ], B2503['map'](B2503['rcurry'](transformer__2625, env__2627), arguments__2629)));
                }
            });
        };
        ($module)['%export']('make-operator-transformer', ($module)['make-operator-transformer']);
    }
    B2503['%annotate-function'](($module)['make-operator-transformer'], 'make-operator-transformer', false);
}
{
    var B2633 = $S('%object', 'ralph/core');
    {
        {
            ($module)['make-object-transformer'] = function B2634(transformer__2635) {
                return(function B2636(env__2637) {
                    var property_nameSvalues__2638 = $SL.call(arguments, 1);
                    return(B2503['%concat']([B2633], B2503['reduce1'](B2503['concatenate'], B2503['map'](function B2639(property_nameSvalue__2640) {
                        var property_name__2641 = property_nameSvalue__2640[0];
                        {
                            var value__2642 = property_nameSvalue__2640[1];
                            {
                                B2505['check-type'](property_name__2641, B2503['<string>'], 'Non-string property-name in %%object: %=');
                                return([
                                    property_name__2641,
                                    transformer__2635(value__2642, env__2637)
                                ]);
                            }
                        }
                    }, B2503['partition'](2, property_nameSvalues__2638)))));
                });
            };
            ($module)['%export']('make-object-transformer', ($module)['make-object-transformer']);
        }
        B2503['%annotate-function'](($module)['make-object-transformer'], 'make-object-transformer', false);
    }
}
