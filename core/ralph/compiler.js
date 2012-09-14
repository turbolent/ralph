{
var B948;
false;
B948 = require("ralph/core")}
{
var B2498,
B2499,
B2500,
B2501,
B2502,
B2503,
B2504,
B2505,
B2506,
B2507,
B2508,
B2509,
B2510,
B2511;
false;
B2498 = require("ralph/stream");
false;
B2499 = require("ralph/format");
false;
B2500 = require("ralph/date");
false;
B2501 = require("ralph/reader");
false;
B2502 = require("ralph/file-system");
false;
B2503 = require("ralph/compiler/utilities");
false;
B2504 = require("ralph/compiler/alpha");
false;
B2505 = require("ralph/compiler/define-lifting");
false;
B2506 = require("ralph/compiler/free-variables");
false;
B2507 = require("ralph/compiler/anf");
false;
B2508 = require("ralph/compiler/statements");
false;
B2509 = require("ralph/compiler/tco");
false;
B2510 = require("ralph/compiler/flattening");
false;
B2511 = require("ralph/compiler/javascript")}
{
var Mmake_function__2512 = B948["%make-function"],
symbol__2513 = B948.symbol,
concatenate__2514 = B948.concatenate,
symbol_name__2515 = B948["symbol-name"],
transform_setter_identifier__2516;
false;
transform_setter_identifier__2516 = Mmake_function__2512("transform_setter_identifier", function transform_setter_identifier__2517 (identifier__2518)
{return symbol__2513(concatenate__2514(symbol_name__2515(identifier__2518), "-setter"), false)}, false)}
{
var setter_identifierQ__2519 = B2503["setter-identifier?"],
second__2520 = B948.second,
identifier_name__2521;
false;
identifier_name__2521 = Mmake_function__2512("identifier_name", function identifier_name__2522 (identifier__2523)
{
var B2524;
if ($T(setter_identifierQ__2519(identifier__2523)))
{B2524 = transform_setter_identifier__2516(second__2520(identifier__2523))}
else
B2524 = identifier__2523;
return symbol_name__2515(B2524)}, false)}
{
var make_object__2525 = B948["make-object"],
TmodulesT__2526;
false;
TmodulesT__2526 = make_object__2525()}
{
var Mmake_class__2531 = B948["%make-class"],
LobjectG__2532 = B948["<object>"],
LmoduleG__2533;
false;
LmoduleG__2533 = Mmake_class__2531(LobjectG__2532, {name:false,
"native?":false,
exports:function B2527__2534 ()
{return []},
imports:function B2528__2535 ()
{return []},
dependencies:function B2529__2536 ()
{return []},
inline:function B2530__2537 ()
{return []}});
exports["<module>"] = LmoduleG__2533}
{
var make_plain_object__2545 = B948["make-plain-object"],
LenvironmentG__2546;
false;
LenvironmentG__2546 = Mmake_class__2531(LobjectG__2532, {module:false,
macros:function B2538__2547 ()
{return make_plain_object__2545()},
"symbol-macros":function B2539__2548 ()
{return make_plain_object__2545()},
identifiers:function B2540__2549 ()
{return make_object__2525()},
"defined?":function B2541__2550 ()
{return make_object__2525()},
lifted:function B2542__2551 ()
{return make_object__2525()},
"import-identifiers":function B2543__2552 ()
{return make_plain_object__2545()},
timing:function B2544__2553 ()
{return make_object__2525()}});
exports["<environment>"] = LenvironmentG__2546}
{
var Mmake_method__2557 = B948["%make-method"],
apply__2558 = B948.apply,
Mnext_method__2559 = B948["%next-method"],
do__2560 = B948["do"],
get_setter__2561 = B948["get-setter"],
get__2562 = B948.get,
Mkeys__2563 = B948["%keys"],
initialize__2564;
false;
initialize__2564 = Mmake_method__2557("initialize", function B2554__2565 (env__2566)
{
var rest__2567 = $SL.call(arguments, 1),
B2555__2568 = Mkeys__2563(rest__2567, {module:false}),
module__2569 = B2555__2568.module;
apply__2558(Mnext_method__2559(B2554__2565), env__2566, rest__2567);
return do__2560(function B2556__2570 (name__2571)
{return get_setter__2561(env__2566, "defined?", get__2562(module__2569, "name"), name__2571, true)}, ["%all-arguments", "%this-method"])}, false, LenvironmentG__2546, initialize__2564)}
{
var Tspecial_formsT__2572;
false;
Tspecial_formsT__2572 = make_object__2525()}
{
var expressionQ__2573 = B2503["expression?"],
first__2574 = B948.first,
find_special_form__2575;
false;
find_special_form__2575 = Mmake_function__2512("find_special_form", function find_special_form__2576 (form__2577, env__2578)
{if ($T(expressionQ__2573(form__2577)))
{return get__2562(Tspecial_formsT__2572, symbol_name__2515(first__2574(form__2577)))}}, false)}
{
var B2605 = $K("message"),
B2606 = $S("%method", "ralph/core"),
not__2581 = B948.not,
binaryEE__2582 = B948["binary=="],
signal__2583 = B948.signal,
make__2584 = B948.make,
LerrorG__2585 = B948["<error>"],
curry__2586 = B948.curry,
bindN__2587 = B2503["bind!"],
unbindN__2588 = B2503["unbind!"],
macroexpand_all__2589,
map__2590 = B948.map,
rcurry__2591 = B948.rcurry,
localize__2592 = B2503.localize,
cons__2593 = B948.cons;
Tspecial_formsT__2572["%method"] = function B2579__2594 (env__2595, name__2596, arguments__2597, body__2598)
{
var identifiersT__2599 = map__2590(rcurry__2591(localize__2592, env__2595), cons__2593(name__2596, arguments__2597));
do__2560(function B2580__2600 (identifierT__2601)
{if ($T(not__2581(binaryEE__2582(get__2562(identifierT__2601, "module"), get__2562(env__2595, "module", "name")))))
{return signal__2583(make__2584(LerrorG__2585, B2605, "Can't create method using identifier with external qualifier"))}}, identifiersT__2599);
do__2560(curry__2586(bindN__2587, env__2595), identifiersT__2599);
var bodyT__2602 = macroexpand_all__2589(body__2598, env__2595);
do__2560(curry__2586(unbindN__2588, env__2595), identifiersT__2599);
var nameT__2603 = identifiersT__2599[0],
argumentsT__2604 = $SL.call(identifiersT__2599, 1);
return [B2606, nameT__2603, argumentsT__2604, bodyT__2602]}}
{
var B2613 = $S("%set", "ralph/core"),
qualify__2608;
Tspecial_formsT__2572["%set"] = function B2607__2609 (env__2610, identifier__2611, value__2612)
{return [B2613, qualify__2608(identifier__2611, env__2610), macroexpand_all__2589(value__2612, env__2610)]}}
{
var B2624 = $S("%bind", "ralph/core");
Tspecial_formsT__2572["%bind"] = function B2614__2615 (env__2616, binding__2617, body__2618)
{
var var__2619 = binding__2617[0],
value__2620 = binding__2617[1];
bindN__2587(env__2616, var__2619);
var varT__2621 = localize__2592(var__2619, env__2616),
valueT__2622 = macroexpand_all__2589(value__2620, env__2616);
if ($T(not__2581(binaryEE__2582(get__2562(varT__2621, "module"), get__2562(env__2616, "module", "name")))))
{signal__2583(make__2584(LerrorG__2585, B2605, "Can't bind using identifier with external qualifier"))};
var result__2623 = [B2624, [varT__2621, valueT__2622], macroexpand_all__2589(body__2618, env__2616)];
unbindN__2588(env__2616, var__2619);
return result__2623}}
{
var Tcore_macrosT__2625;
false;
Tcore_macrosT__2625 = make_object__2525();
exports["*core-macros*"] = Tcore_macrosT__2625}
{
var B2648 = $REST,
B2649 = $KEY,
B2650 = $K("end"),
B2651 = $K("start"),
find_key__2628 = B948["find-key"],
E__2629 = B948["="],
copy_sequence__2630 = B948["copy-sequence"],
size__2631 = B948.size,
element__2632 = B948.element,
inc__2633 = B948.inc,
destructure_lambda_list__2634;
false;
destructure_lambda_list__2634 = Mmake_function__2512("destructure_lambda_list", function destructure_lambda_list__2635 (list__2636)
{
var position__2637 = function position__2638 (symbol__2639)
{return find_key__2628(list__2636, curry__2586(E__2629, symbol__2639))},
rest__2640 = position__2637(B2648),
key__2641 = position__2637(B2649),
B2626__2642 = rest__2640,
B2644;
if ($T(B2626__2642))
{B2644 = B2626__2642}
else
{
var B2627__2643 = key__2641;
if ($T(B2627__2643))
{B2644 = B2627__2643}
else
B2644 = size__2631(list__2636)};
var B2645 = copy_sequence__2630(list__2636, B2650, B2644),
B2646;
if ($T(rest__2640))
{B2646 = element__2632(list__2636, inc__2633(rest__2640))}
else
B2646 = false;
var B2647;
if ($T(key__2641))
{B2647 = copy_sequence__2630(list__2636, B2651, inc__2633(key__2641))}
else
B2647 = false;
return [B2645, B2646, B2647]}, false);
exports["destructure-lambda-list"] = destructure_lambda_list__2634}
{
var reduce__2653 = B948.reduce,
wrap__2654;
false;
wrap__2654 = Mmake_function__2512("wrap", function wrap__2655 (form__2656)
{
var wrappers__2657 = $SL.call(arguments, 1);
return reduce__2653(function B2652__2658 (result__2659, wrapper__2660)
{return wrapper__2660(result__2659)}, form__2656, wrappers__2657)}, false)}
{
var B2695 = $S("bind-properties", "ralph/core"),
B2696 = $S("%keys", "ralph/core"),
B2697 = $S("%object", "ralph/core"),
B2698 = $S("bind", "ralph/core"),
B2699 = $S("%native-call", "ralph/core"),
emptyQ__2667 = B948["empty?"],
reduce1__2668 = B948.reduce1,
instanceQ__2669 = B948["instance?"],
LarrayG__2670 = B948["<array>"],
generate_symbol__2671 = B2503["generate-symbol"],
wrap_restSkeys__2672;
false;
wrap_restSkeys__2672 = Mmake_function__2512("wrap_restSkeys", function wrap_restSkeys__2673 (body__2674, all__2675, required__2676, rest__2677, key__2678)
{
var restQ__2679 = rest__2677,
B2661__2680 = rest__2677,
rest__2681;
if ($T(B2661__2680))
{rest__2681 = B2661__2680}
else
if ($T(not__2581(emptyQ__2667(key__2678))))
{rest__2681 = generate_symbol__2671()}
else
rest__2681 = false;
return wrap__2654(body__2674, function B2662__2682 (body__2683)
{if ($T(emptyQ__2667(key__2678)))
{return body__2683}
else
{
var key_values__2686 = map__2590(function B2663__2684 (binding__2685)
{if ($T(instanceQ__2669(binding__2685, LarrayG__2670)))
{return binding__2685}
else
return [binding__2685, false]}, key__2678);
return [B2695, map__2590(first__2574, key_values__2686), [B2696, rest__2681, concatenate__2514([B2697], reduce1__2668(concatenate__2514, map__2590(function B2664__2687 (key_value__2688)
{
var key__2689 = key_value__2688[0],
value__2690 = key_value__2688[1];
return [symbol_name__2515(key__2689), value__2690]}, key_values__2686)))], body__2683]}}, function B2665__2691 (body__2692)
{
var B2666__2693 = restQ__2679,
B2694;
if ($T(B2666__2693))
{B2694 = B2666__2693}
else
B2694 = not__2581(emptyQ__2667(key__2678));
if ($T(B2694))
{return [B2698, [[rest__2681, [B2699, "$SL.call", all__2675, size__2631(required__2676)]]], body__2692]}
else
return body__2692})}, false)}
{
var maybe_begin__2701 = B2503["maybe-begin"];
Tcore_macrosT__2625.begin = function B2700__2702 (____2703)
{
var expressions__2704 = $SL.call(arguments, 1);
return maybe_begin__2701(expressions__2704)}}
{
var B2715 = $S("%all-arguments"),
named_method__2706;
false;
named_method__2706 = Mmake_function__2512("named_method", function named_method__2707 (name__2708, arguments__2709, body__2710)
{
var B2705__2711 = destructure_lambda_list__2634(arguments__2709),
required__2712 = B2705__2711[0],
rest__2713 = B2705__2711[1],
key__2714 = B2705__2711[2];
return [B2606, name__2708, required__2712, wrap_restSkeys__2672(body__2710, B2715, required__2712, rest__2713, key__2714)]}, false)}
Tcore_macrosT__2625.method = function B2716__2717 (____2718, arguments__2719)
{
var body__2720 = $SL.call(arguments, 2);
return named_method__2706(generate_symbol__2671(), arguments__2719, maybe_begin__2701(body__2720))}
{
var LsymbolG__2723 = B948["<symbol>"],
reverse__2724 = B948.reverse;
Tcore_macrosT__2625.bind = function B2721__2725 (____2726, bindings__2727)
{
var body__2728 = $SL.call(arguments, 2);
if ($T(emptyQ__2667(bindings__2727)))
{return maybe_begin__2701(body__2728)}
else
return reduce__2653(function B2722__2729 (body__2730, binding__2731)
{
var B2732 = B2624,
B2733;
if ($T(instanceQ__2669(binding__2731, LsymbolG__2723)))
{B2733 = [binding__2731, false]}
else
B2733 = binding__2731;
return [B2732, B2733, body__2730]}, maybe_begin__2701(body__2728), reverse__2724(bindings__2727))}}
{
var B2740 = $S("%if", "ralph/core");
Tcore_macrosT__2625["if"] = function B2734__2735 (____2736, test__2737, then__2738, else__2739)
{return [B2740, test__2737, then__2738, else__2739]}}
{
var rest__2742 = B948.rest;
Tcore_macrosT__2625["set!"] = function B2741__2743 (____2744, place__2745)
{
var values__2746 = $SL.call(arguments, 2),
B2747;
if ($T(instanceQ__2669(place__2745, LarrayG__2670)))
{B2747 = not__2581(binaryEE__2582(symbol_name__2515(first__2574(place__2745)), "%get-property"))}
else
B2747 = false;
if ($T(B2747))
{return concatenate__2514([transform_setter_identifier__2516(first__2574(place__2745))], rest__2742(place__2745), values__2746)}
else
return [B2613, place__2745, first__2574(values__2746)]}}
{
var B2755 = $S("set!", "ralph/core"),
B2756 = $S("parallel-set!", "ralph/core");
Tcore_macrosT__2625["parallel-set!"] = function B2748__2749 (____2750, var__2751, value__2752)
{
var clauses__2753 = $SL.call(arguments, 3);
if ($T(emptyQ__2667(clauses__2753)))
{return [B2755, var__2751, value__2752]}
else
{
var temp__2754 = generate_symbol__2671();
return [B2698, [[temp__2754, value__2752]], concatenate__2514([B2756], clauses__2753), [B2755, var__2751, temp__2754]]}}}
{
var B2766 = $K("else"),
B2767 = $S("if", "ralph/core"),
B2768 = $S("cond", "ralph/core");
Tcore_macrosT__2625.cond = function B2757__2759 (____2760)
{
var cases__2761 = $SL.call(arguments, 1);
if ($T(not__2581(emptyQ__2667(cases__2761))))
{
var B2758__2762 = first__2574(cases__2761),
test__2763 = B2758__2762[0],
then__2764 = $SL.call(B2758__2762, 1),
then__2765 = maybe_begin__2701(then__2764);
if ($T(binaryEE__2582(test__2763, B2766)))
{return then__2765}
else
return [B2767, test__2763, then__2765, concatenate__2514([B2768], rest__2742(cases__2761))]}}}
Tcore_macrosT__2625.when = function B2769__2770 (____2771, test__2772)
{
var body__2773 = $SL.call(arguments, 2);
return [B2767, test__2772, maybe_begin__2701(body__2773), false]}
{
var B2779 = $S("not", "ralph/core");
Tcore_macrosT__2625.unless = function B2774__2775 (____2776, test__2777)
{
var body__2778 = $SL.call(arguments, 2);
return [B2767, [B2779, test__2777], maybe_begin__2701(body__2778), false]}}
{
var B2786 = $S("when", "ralph/core"),
B2787 = $S("and", "ralph/core");
Tcore_macrosT__2625.and = function B2780__2782 (____2783)
{
var values__2784 = $SL.call(arguments, 1),
B2781__2785 = size__2631(values__2784);
if ($T(binaryEE__2582(B2781__2785, 0)))
{return true}
else
if ($T(binaryEE__2582(B2781__2785, 1)))
{return first__2574(values__2784)}
else
return [B2786, first__2574(values__2784), concatenate__2514([B2787], rest__2742(values__2784))]}}
{
var B2795 = $S("or", "ralph/core");
Tcore_macrosT__2625.or = function B2788__2790 (____2791)
{
var values__2792 = $SL.call(arguments, 1),
B2789__2793 = size__2631(values__2792);
if ($T(binaryEE__2582(B2789__2793, 0)))
{return false}
else
if ($T(binaryEE__2582(B2789__2793, 1)))
{return first__2574(values__2792)}
else
{
var value__2794 = generate_symbol__2671();
return [B2698, [[value__2794, first__2574(values__2792)]], [B2767, value__2794, value__2794, concatenate__2514([B2795], rest__2742(values__2792))]]}}}
Tcore_macrosT__2625["if-bind"] = function B2796__2797 (____2798, binding__2799, then__2800, else__2801)
{
var var__2802 = binding__2799[0],
value__2803 = binding__2799[1],
temp__2804 = generate_symbol__2671();
return [B2698, [[temp__2804, value__2803]], [B2767, temp__2804, [B2698, [[var__2802, temp__2804]], then__2800], else__2801]]}
{
var B2810 = $S("%while", "ralph/core");
Tcore_macrosT__2625["while"] = function B2805__2806 (____2807, test__2808)
{
var body__2809 = $SL.call(arguments, 2);
return [B2810, test__2808, maybe_begin__2701(body__2809)]}}
{
var B2816 = $S("while", "ralph/core");
Tcore_macrosT__2625.until = function B2811__2812 (____2813, test__2814)
{
var body__2815 = $SL.call(arguments, 2);
return concatenate__2514([B2816, [B2779, test__2814]], body__2815)}}
{
var B2837 = $S("for", "ralph/core"),
B2838 = $S("+", "ralph/core"),
B2839 = $S(">=", "ralph/core");
Tcore_macrosT__2625.dotimes = function B2817__2819 (____2820, binding__2821)
{
var body__2822 = $SL.call(arguments, 2),
temp__2823 = generate_symbol__2671(),
var__2824 = binding__2821[0],
count__2825 = binding__2821[1],
result__2826 = binding__2821[2],
B2828 = B2698,
B2829 = [[temp__2823, count__2825]],
B2830 = B2837,
B2831 = [[var__2824, 0, [B2838, var__2824, 1]]],
B2832 = [B2839, var__2824, temp__2823],
B2818__2827 = result__2826,
B2833;
if ($T(B2818__2827))
{B2833 = B2818__2827}
else
B2833 = false;
var B2834 = [B2832, B2833],
B2835 = [B2830, B2831, B2834],
B2836 = concatenate__2514(B2835, body__2822);
return [B2828, B2829, B2836]}}
{
var B2879 = $S("method", "ralph/core"),
B2880 = $S("begin", "ralph/core"),
anyQ__2848 = B948["any?"],
push_last__2849 = B948["push-last"],
slice__2850 = B948.slice,
third__2851 = B948.third;
Tcore_macrosT__2625["for"] = function B2840__2852 (____2853, clauses__2854, end__2855)
{
var body__2856 = $SL.call(arguments, 3),
init_clauses__2857 = [],
next_clauses__2858 = [],
vars__2859 = map__2590(first__2574, clauses__2854),
B2841__2860 = clauses__2854,
B2842__2861,
B2844__2862,
B2843__2863 = [B2841__2860];
while (true)
{
var B2845__2864 = B2842__2861,
B2869;
if ($T(B2845__2864))
{B2869 = B2845__2864}
else
B2869 = anyQ__2848(emptyQ__2667, B2843__2863);
var B2870 = not__2581(B2869);
if ($T(B2870))
{
var clause__2865 = first__2574(B2841__2860);
(function B2846__2866 (clause__2867)
{
push_last__2849(init_clauses__2857, slice__2850(clause__2867, 0, 2));
push_last__2849(next_clauses__2858, first__2574(clause__2867));
return push_last__2849(next_clauses__2858, third__2851(clause__2867))})(clause__2865);
B2841__2860 = rest__2742(B2841__2860);
B2843__2863 = [B2841__2860]}
else
break};
B2844__2862;
var B2871 = B2698,
B2872 = B2816,
B2847__2868 = emptyQ__2667(end__2855),
B2873;
if ($T(B2847__2868))
{B2873 = B2847__2868}
else
B2873 = [B2779, first__2574(end__2855)];
var B2874 = concatenate__2514([concatenate__2514([B2879, vars__2859], body__2856)], vars__2859),
B2875 = concatenate__2514([B2756], next_clauses__2858),
B2876 = [B2872, B2873, B2874, B2875],
B2877 = concatenate__2514(B2876),
B2878;
if ($T(not__2581(emptyQ__2667(rest__2742(end__2855)))))
{B2878 = concatenate__2514([B2880], rest__2742(end__2855))}
else
B2878 = false;
return [B2871, init_clauses__2857, B2877, B2878]}}
{
var B2937 = $S("rest", "ralph/core"),
B2938 = $S("%array", "ralph/core"),
B2939 = $S("until", "ralph/compiler"),
B2940 = $S("any?", "ralph/core"),
B2941 = $S("empty?", "ralph/core"),
B2942 = $S("first", "ralph/core");
Tcore_macrosT__2625["for-each"] = function B2881__2887 (____2888, clauses__2889, end__2890)
{
var body__2891 = $SL.call(arguments, 3),
clauses__2894 = map__2590(function B2882__2892 (clause__2893)
{return cons__2593(generate_symbol__2671(), clause__2893)}, clauses__2889),
endQ__2895 = generate_symbol__2671(),
values__2896 = generate_symbol__2671(),
result__2897 = generate_symbol__2671(),
B2915 = B2880,
vars__2898 = map__2590(second__2520, clauses__2894),
B2916 = concatenate__2514([concatenate__2514([B2879, vars__2898], body__2891)], vars__2898),
B2917 = [B2915, B2916],
B2918 = map__2590(function B2883__2899 (clause__2900)
{return [B2755, first__2574(clause__2900), [B2937, first__2574(clause__2900)]]}, clauses__2894),
B2919 = [[B2755, values__2896, concatenate__2514([B2938], map__2590(first__2574, clauses__2894))]],
body__2901 = concatenate__2514(B2917, B2918, B2919),
B2920 = B2698,
B2921 = concatenate__2514(map__2590(function B2884__2902 (clause__2903)
{
var temp__2904 = clause__2903[0],
var__2905 = clause__2903[1],
values__2906 = clause__2903[2];
return [temp__2904, values__2906]}, clauses__2894), [[endQ__2895, false], [result__2897, false], [values__2896, concatenate__2514([B2938], map__2590(first__2574, clauses__2894))]]),
B2922 = B2939,
B2923 = [B2795, endQ__2895, [B2940, B2941, values__2896]],
B2924 = B2698,
B2925 = map__2590(function B2885__2907 (clause__2908)
{
var temp__2909 = clause__2908[0],
var__2910 = clause__2908[1],
values__2911 = clause__2908[2];
return [var__2910, [B2942, temp__2909]]}, clauses__2894),
B2886__2912 = first__2574(end__2890),
B2934;
if ($T(B2886__2912))
{
var end_test__2913 = B2886__2912,
B2926 = B2767,
B2927 = B2880,
B2928 = B2755,
results__2914 = rest__2742(end__2890),
B2929;
if ($T(emptyQ__2667(results__2914)))
{B2929 = [false]}
else
B2929 = results__2914;
var B2930 = maybe_begin__2701(B2929),
B2931 = [B2928, result__2897, B2930],
B2932 = [B2755, endQ__2895, true],
B2933 = [B2927, B2931, B2932];
B2934 = [B2926, end_test__2913, B2933, body__2901]}
else
B2934 = body__2901;
var B2935 = [B2924, B2925, B2934],
B2936 = [B2922, B2923, B2935];
return [B2920, B2921, B2936, result__2897]}}
{
var B2953 = $S("%get-property", "ralph/core");
Tcore_macrosT__2625["bind-properties"] = function B2943__2945 (____2946, properties__2947, object__2948)
{
var body__2949 = $SL.call(arguments, 3),
objectT__2950 = generate_symbol__2671();
return concatenate__2514([B2698, concatenate__2514([[objectT__2950, object__2948]], map__2590(function B2944__2951 (property__2952)
{return [property__2952, [B2953, objectT__2950, symbol_name__2515(property__2952)]]}, properties__2947))], body__2949)}}
Tcore_macrosT__2625.select = function B2954__2956 (____2957, value__2958, test__2959)
{
var cases__2960 = $SL.call(arguments, 3),
valueT__2961 = generate_symbol__2671(),
testT__2962;
if ($T(instanceQ__2669(test__2959, LsymbolG__2723)))
{testT__2962 = test__2959}
else
testT__2962 = generate_symbol__2671();
var test_expression__2963 = function test_expression__2964 (test_value__2965)
{return [testT__2962, valueT__2961, test_value__2965]},
B2970 = B2698,
B2971 = [[valueT__2961, value__2958]],
B2972;
if ($T(instanceQ__2669(test__2959, LsymbolG__2723)))
{B2972 = []}
else
B2972 = [[testT__2962, test__2959]];
var B2973 = concatenate__2514(B2971, B2972),
B2974 = concatenate__2514([B2768], map__2590(function B2955__2966 (case__2967)
{
var tests__2968 = case__2967[0],
then__2969 = $SL.call(case__2967, 1);
if ($T(binaryEE__2582(tests__2968, B2766)))
{return case__2967}
else
return concatenate__2514([concatenate__2514([B2795], map__2590(test_expression__2963, tests__2968))], then__2969)}, cases__2960));
return [B2970, B2973, B2974]}
{
var destructure__2977;
false;
destructure__2977 = Mmake_function__2512("destructure", function destructure__2978 (bindings__2979, values__2980, body__2981)
{if ($T(instanceQ__2669(values__2980, LsymbolG__2723)))
{
var B2975__2982 = destructure_lambda_list__2634(bindings__2979),
required__2983 = B2975__2982[0],
rest__2984 = B2975__2982[1],
key__2985 = B2975__2982[2],
i__2986 = size__2631(required__2983);
return reduce__2653(function B2976__2987 (body__2988, binding__2989)
{
i__2986 = (i__2986 - 1);
if ($T(instanceQ__2669(binding__2989, LsymbolG__2723)))
{return [B2698, [[binding__2989, [B2953, values__2980, i__2986]]], body__2988]}
else
return destructure__2978(binding__2989, [B2953, values__2980, i__2986], body__2988)}, wrap_restSkeys__2672(body__2981, values__2980, required__2983, rest__2984, key__2985), reverse__2724(required__2983))}
else
{
var var__2990 = generate_symbol__2671();
return [B2698, [[var__2990, values__2980]], destructure__2978(bindings__2979, var__2990, body__2981)]}}, false)}
Tcore_macrosT__2625["destructuring-bind"] = function B2991__2992 (____2993, bindings__2994, values__2995)
{
var body__2996 = $SL.call(arguments, 3);
return destructure__2977(bindings__2994, values__2995, concatenate__2514([B2880], body__2996))}
Tcore_macrosT__2625["bind-methods"] = function B2997__2999 (____3000, bindings__3001)
{
var body__3002 = $SL.call(arguments, 2);
return concatenate__2514([B2698, map__2590(first__2574, bindings__3001)], map__2590(function B2998__3003 (binding__3004)
{
var identifier__3005 = binding__3004[0],
arguments__3006 = binding__3004[1],
body__3007 = $SL.call(binding__3004, 2);
return [B2755, identifier__3005, named_method__2706(identifier__3005, arguments__3006, maybe_begin__2701(body__3007))]}, bindings__3001), body__3002)}
Tcore_macrosT__2625["inc!"] = function B3008__3010 (____3011, object__3012, value__3013)
{
var B3015 = B2755,
B3016 = B2838,
B3009__3014 = value__3013,
B3017;
if ($T(B3009__3014))
{B3017 = B3009__3014}
else
B3017 = 1;
var B3018 = [B3016, object__3012, B3017];
return [B3015, object__3012, B3018]}
{
var B3030 = $S("-", "ralph/core");
Tcore_macrosT__2625["dec!"] = function B3019__3021 (____3022, object__3023, value__3024)
{
var B3026 = B2755,
B3027 = B3030,
B3020__3025 = value__3024,
B3028;
if ($T(B3020__3025))
{B3028 = B3020__3025}
else
B3028 = 1;
var B3029 = [B3027, object__3023, B3028];
return [B3026, object__3023, B3029]}}
{
var B3035 = $S("%plus", "ralph/core");
Tcore_macrosT__2625["+"] = function B3031__3032 (____3033)
{
var values__3034 = $SL.call(arguments, 1);
if ($T(emptyQ__2667(values__3034)))
{return 0}
else
return concatenate__2514([B3035], values__3034)}}
{
var B3041 = $S("%minus", "ralph/core");
Tcore_macrosT__2625["-"] = function B3036__3037 (____3038, minuend__3039)
{
var subtrahends__3040 = $SL.call(arguments, 2);
if ($T(emptyQ__2667(subtrahends__3040)))
{return [B2699, "-", minuend__3039]}
else
return concatenate__2514([B3041, minuend__3039], subtrahends__3040)}}
{
var B3046 = $S("%times", "ralph/core");
Tcore_macrosT__2625["*"] = function B3042__3043 (____3044)
{
var values__3045 = $SL.call(arguments, 1);
if ($T(emptyQ__2667(values__3045)))
{return 1}
else
return concatenate__2514([B3046], values__3045)}}
{
var B3052 = $S("%divide", "ralph/core");
Tcore_macrosT__2625["/"] = function B3047__3048 (____3049, numerator__3050)
{
var denominators__3051 = $SL.call(arguments, 2);
if ($T(emptyQ__2667(denominators__3051)))
{return [B3052, 1, numerator__3050]}
else
return concatenate__2514([B3052, numerator__3050], denominators__3051)}}
{
var B3056 = $S("next-method", "ralph/compiler"),
B3057 = $S("%native", "ralph/core");
Tcore_macrosT__2625["call-next-method"] = function B3053__3054 (____3055)
{return [[B2953, B3056, "apply"], [B3057, "null"], B2715]}}
{
var B3061 = $S("%symbol", "ralph/core"),
transform_quoted__3058;
false;
transform_quoted__3058 = Mmake_function__2512("transform_quoted", function transform_quoted__3059 (form__3060)
{if ($T(instanceQ__2669(form__3060, LarrayG__2670)))
{return concatenate__2514([B2938], map__2590(transform_quoted__3059, form__3060))}
else
if ($T(instanceQ__2669(form__3060, LsymbolG__2723)))
{return [B3061, symbol_name__2515(form__3060)]}
else
return form__3060}, false)}
Tcore_macrosT__2625.quote = function B3062__3063 (____3064, exp__3065)
{return transform_quoted__3058(exp__3065)}
{
var B3088 = $S("%splice", "ralph/compiler"),
B3089 = $S("%concat", "ralph/core"),
boundQ__3069 = B2503["bound?"],
find_moduleSimport_name__3070,
transform_backquoted__3071;
false;
transform_backquoted__3071 = Mmake_function__2512("transform_backquoted", function transform_backquoted__3072 (form__3073, env__3074)
{
var B3066__3075 = form__3073;
if ($T(instanceQ__2669(B3066__3075, LarrayG__2670)))
{
var B3085;
if ($T(not__2581(emptyQ__2667(form__3073))))
{B3085 = binaryEE__2582(symbol_name__2515(first__2574(form__3073)), "%comma")}
else
B3085 = false;
if ($T(B3085))
{return second__2520(form__3073)}
else
{
var B3086;
if ($T(not__2581(emptyQ__2667(form__3073))))
{B3086 = binaryEE__2582(symbol_name__2515(first__2574(form__3073)), "%at")}
else
B3086 = false;
if ($T(B3086))
{return [B3088, second__2520(form__3073)]}
else
{
var explicit__3076 = [B2938];
return reduce__2653(function B3067__3077 (result__3078, value__3079)
{
var quoted__3080 = transform_backquoted__3072(value__3079, env__3074),
B3087;
if ($T(expressionQ__2573(quoted__3080)))
{B3087 = binaryEE__2582(first__2574(quoted__3080), B3088)}
else
B3087 = false;
if ($T(B3087))
{
explicit__3076 = false;
return [B3089, result__3078, second__2520(quoted__3080)]}
else
if ($T(explicit__3076))
{
push_last__2849(explicit__3076, quoted__3080);
return result__3078}
else
{
explicit__3076 = [B2938, quoted__3080];
return [B3089, result__3078, explicit__3076]}}, explicit__3076, form__3073)}}}
else
if ($T(instanceQ__2669(B3066__3075, LsymbolG__2723)))
{
var name__3081 = symbol_name__2515(form__3073),
B3068__3082;
if ($T(not__2581(boundQ__3069(env__3074, form__3073))))
{B3068__3082 = find_moduleSimport_name__3070(name__3081, env__3074)}
else
B3068__3082 = false;
var module__3084;
if ($T(B3068__3082))
{
var moduleSimport_name__3083 = B3068__3082;
module__3084 = first__2574(moduleSimport_name__3083)}
else
module__3084 = get__2562(env__3074, "module");
return [B3061, name__3081, get__2562(module__3084, "name")]}
else
return form__3073}, false)}
Tcore_macrosT__2625["%backquote"] = function B3090__3091 (env__3092, exp__3093)
{return transform_backquoted__3071(exp__3093, env__3092)}
{
var format_to_string__3095 = B2499["format-to-string"];
Tcore_macrosT__2625["%comma"] = function B3094__3096 (____3097, value__3098)
{return signal__2583(make__2584(LerrorG__2585, B2605, format_to_string__3095("comma not inside backquote: %=\n", value__3098)))}}
Tcore_macrosT__2625["%at"] = function B3099__3100 (____3101, value__3102)
{return signal__2583(make__2584(LerrorG__2585, B2605, format_to_string__3095("at not inside backquote: %=\n", value__3102)))}
{
var Tdot_name_errorT__3103;
false;
Tdot_name_errorT__3103 = make__2584(LerrorG__2585, B2605, "unsupported name for call in dot")}
{
var LstringG__3107 = B948["<string>"];
Tcore_macrosT__2625["."] = function B3104__3108 (____3109, value__3110)
{
var calls__3111 = $SL.call(arguments, 2);
return reduce__2653(function B3105__3112 (value__3113, call__3114)
{
var property__3115 = call__3114[0],
arguments__3116 = $SL.call(call__3114, 1),
B3118 = B2953,
B3106__3117 = property__3115,
B3119;
if ($T(instanceQ__2669(B3106__3117, LstringG__3107)))
{B3119 = property__3115}
else
if ($T(instanceQ__2669(B3106__3117, LsymbolG__2723)))
{B3119 = symbol_name__2515(property__3115)}
else
B3119 = signal__2583(Tdot_name_errorT__3103);
var B3120 = [B3118, value__3113, B3119],
B3121 = [B3120];
return concatenate__2514(B3121, arguments__3116)}, value__3110, calls__3111)}}
{
var simplify_arguments__3124;
false;
simplify_arguments__3124 = Mmake_function__2512("simplify_arguments", function simplify_arguments__3125 (arguments__3126)
{
var B3122__3127 = destructure_lambda_list__2634(arguments__3126),
required__3128 = B3122__3127[0],
rest__3129 = B3122__3127[1],
key__3130 = B3122__3127[2],
B3133 = map__2590(function B3123__3131 (argument__3132)
{if ($T(instanceQ__2669(argument__3132, LarrayG__2670)))
{return first__2574(argument__3132)}
else
return argument__3132}, required__3128),
B3134;
if ($T(rest__3129))
{B3134 = concatenate__2514([B2648], rest__3129)}
else
B3134 = [];
var B3135;
if ($T(key__3130))
{B3135 = concatenate__2514([B2649], key__3130)}
else
B3135 = [];
return concatenate__2514(B3133, B3134, B3135)}, false)}
{
var B3175 = $S("define", "ralph/core"),
B3176 = $S("%native-name", "ralph/compiler"),
B3177 = $S("<object>", "ralph/core"),
G__3141 = B948[">"],
make_function_definer__3142;
false;
make_function_definer__3142 = Mmake_function__2512("make_function_definer", function make_function_definer__3143 (macro_name__3144, definer__3145)
{
var B3136__3146 = $SL.call(arguments, 2),
B3137__3147 = Mkeys__2563(B3136__3146, {"name?":false,
"type/existing?":false,
"record?":false}),
nameQ__3148 = B3137__3147["name?"],
typeSexistingQ__3149 = B3137__3147["type/existing?"],
recordQ__3150 = B3137__3147["record?"];
return function B3138__3151 (env__3152, identifier__3153, arguments__3154)
{
var body__3155 = $SL.call(arguments, 3),
B3139__3156;
if ($T(setter_identifierQ__2519(identifier__3153)))
{B3139__3156 = [true, transform_setter_identifier__2516(second__2520(identifier__3153))]}
else
B3139__3156 = [false, identifier__3153];
var setterQ__3157 = B3139__3156[0],
identifier__3158 = B3139__3156[1],
B3140__3159 = instanceQ__2669(identifier__3158, LsymbolG__2723),
B3163;
if ($T(B3140__3159))
{B3163 = B3140__3159}
else
B3163 = setterQ__3157;
var B3164 = not__2581(B3163);
if ($T(B3164))
{signal__2583(make__2584(LerrorG__2585, B2605, concatenate__2514(macro_name__3144, ": ", "name not <var> or (setter <var>)")))};
var B3165;
if ($T(typeSexistingQ__3149))
{B3165 = emptyQ__2667(arguments__3154)}
else
B3165 = false;
if ($T(B3165))
{signal__2583(make__2584(LerrorG__2585, B2605, concatenate__2514(macro_name__3144, ": ", "method has no arguments")))};
var simplified_arguments__3160 = simplify_arguments__3124(arguments__3154),
B3166;
if ($T(nameQ__3148))
{B3166 = identifier__3158}
else
B3166 = generate_symbol__2671();
var B3167 = maybe_begin__2701(body__3155),
B3168 = named_method__2706(B3166, simplified_arguments__3160, B3167),
method_definition__3161 = macroexpand_all__2589(B3168, env__3152);
if ($T(recordQ__3150))
{get_setter__2561(env__3152, "module", "functions", symbol_name__2515(identifier__3158), method_definition__3161)};
var B3169 = B3175,
B3170 = [definer__3145, [B3176, symbol_name__2515(identifier__3158)], method_definition__3161, setterQ__3157],
B3173;
if ($T(typeSexistingQ__3149))
{
var head__3162 = first__2574(arguments__3154),
B3171;
if ($T(instanceQ__2669(head__3162, LarrayG__2670)))
{B3171 = G__3141(size__2631(head__3162), 1)}
else
B3171 = false;
var B3172;
if ($T(B3171))
{B3172 = second__2520(head__3162)}
else
B3172 = B3177;
B3173 = [B3172, identifier__3158]}
else
B3173 = [];
var B3174 = concatenate__2514(B3170, B3173);
return [B3169, identifier__3158, B3174]}}, false)}
{
var B3194 = $S("%make-function", "ralph/core"),
B3195 = $K("record?"),
B3196 = $K("name?"),
B3197 = $S("%make-method", "ralph/core"),
B3198 = $K("type/existing?"),
B3178__3184 = [["define-function", B3194, B3195, true, B3196, true], ["define-method", B3197, B3198, true]],
B3179__3185,
B3181__3186,
B3180__3187 = [B3178__3184];
while (true)
{
var B3182__3188 = B3179__3185,
B3192;
if ($T(B3182__3188))
{B3192 = B3182__3188}
else
B3192 = anyQ__2848(emptyQ__2667, B3180__3187);
var B3193 = not__2581(B3192);
if ($T(B3193))
{
var arguments__3189 = first__2574(B3178__3184);
(function B3183__3190 (arguments__3191)
{return Tcore_macrosT__2625[first__2574(arguments__3191)] = apply__2558(make_function_definer__3142, arguments__3191)})(arguments__3189);
B3178__3184 = rest__2742(B3178__3184);
B3180__3187 = [B3178__3184]}
else
break};
B3181__3186}
{
var B3205 = $S("%define", "ralph/core");
Tcore_macrosT__2625.define = function B3199__3200 (env__3201, identifier__3202, value__3203)
{
var identifierT__3204 = localize__2592(identifier__3202, env__3201);
if ($T(not__2581(binaryEE__2582(get__2562(identifierT__3204, "module"), get__2562(env__3201, "module", "name")))))
{signal__2583(make__2584(LerrorG__2585, B2605, "Can't define using identifier with external qualifier"))};
bindN__2587(env__3201, identifier__3202);
return [B2880, [B3205, identifierT__3204], [B2613, identifierT__3204, value__3203]]}}
{
var B3211 = $S("%make-generic", "ralph/core");
Tcore_macrosT__2625["define-generic"] = function B3206__3207 (____3208, identifier__3209, arguments__3210)
{return [B3175, identifier__3209, [B3211, [B3176, symbol_name__2515(identifier__3209)]]]}}
{
var B3239 = $S("%make-class", "ralph/core");
Tcore_macrosT__2625["define-class"] = function B3212__3219 (____3220, identifier__3221, superclass__3222)
{
var properties__3223 = $SL.call(arguments, 3),
object__3224 = [B2697],
B3213__3225 = properties__3223,
B3214__3226,
B3216__3227,
B3215__3228 = [B3213__3225];
while (true)
{
var B3217__3229 = B3214__3226,
B3233;
if ($T(B3217__3229))
{B3233 = B3217__3229}
else
B3233 = anyQ__2848(emptyQ__2667, B3215__3228);
var B3234 = not__2581(B3233);
if ($T(B3234))
{
var property__3230 = first__2574(B3213__3225);
(function B3218__3231 (property__3232)
{if ($T(instanceQ__2669(property__3232, LarrayG__2670)))
{
push_last__2849(object__3224, symbol_name__2515(first__2574(property__3232)));
return push_last__2849(object__3224, [B2879, [], second__2520(property__3232)])}
else
{
push_last__2849(object__3224, symbol_name__2515(property__3232));
return push_last__2849(object__3224, false)}})(property__3230);
B3213__3225 = rest__2742(B3213__3225);
B3215__3228 = [B3213__3225]}
else
break};
B3216__3227;
var B3235 = B3175,
B3236 = B3239,
B3237;
if ($T(not__2581(emptyQ__2667(superclass__3222))))
{B3237 = first__2574(superclass__3222)}
else
B3237 = false;
var B3238 = [B3236, B3237, object__3224];
return [B3235, identifier__3221, B3238]}}
{
var get_import_module_nameSoptions__3240;
false;
get_import_module_nameSoptions__3240 = Mmake_function__2512("get_import_module_nameSoptions", function get_import_module_nameSoptions__3241 (import__3242)
{
var B3243;
if ($T(instanceQ__2669(import__3242, LarrayG__2670)))
{B3243 = first__2574(import__3242)}
else
B3243 = import__3242;
var B3244 = symbol_name__2515(B3243),
B3245;
if ($T(instanceQ__2669(import__3242, LarrayG__2670)))
{B3245 = rest__2742(import__3242)}
else
B3245 = [];
return [B3244, B3245]}, false)}
{
var compile_time_import_module__3253,
import_module__3254,
make_import_definition__3255;
Tcore_macrosT__2625["define-module"] = function B3246__3256 (env__3257, ____3258)
{
var B3247__3259 = $SL.call(arguments, 2),
B3248__3260 = Mkeys__2563(B3247__3259, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}),
import__3261 = B3248__3260["import"],
export__3262 = B3248__3260["export"],
compile_time_import__3263 = B3248__3260["compile-time-import"],
inline__3264 = B3248__3260.inline;
get_setter__2561(env__3257, "module", "exports", map__2590(identifier_name__2521, export__3262));
do__2560(function B3249__3265 (import__3266)
{
var B3250__3267 = get_import_module_nameSoptions__3240(import__3266),
module_name__3268 = B3250__3267[0],
options__3269 = B3250__3267[1];
return apply__2558(compile_time_import_module__3253, env__3257, module_name__3268, options__3269)}, compile_time_import__3263);
get_setter__2561(env__3257, "module", "inline", map__2590(identifier_name__2521, inline__3264));
return maybe_begin__2701(map__2590(function B3251__3270 (import__3271)
{
var B3252__3272 = get_import_module_nameSoptions__3240(import__3271),
module_name__3273 = B3252__3272[0],
options__3274 = B3252__3272[1];
apply__2558(import_module__3254, get__2562(env__3257, "module"), module_name__3273, options__3274);
return make_import_definition__3255(module_name__3273, env__3257)}, import__3261))}}
{
var B3279 = $S("%begin", "ralph/core");
false;
make_import_definition__3255 = Mmake_function__2512("make_import_definition", function make_import_definition__3275 (module_name__3276, env__3277)
{
var identifier__3278 = generate_symbol__2671(env__3277);
get_setter__2561(env__3277, "import-identifiers", module_name__3276, identifier__3278);
return [B3279, [B3205, identifier__3278], [B2613, identifier__3278, [[B3057, "require"], module_name__3276]]]}, false)}
{
var B3286 = $S("define-function", "ralph/core");
Tcore_macrosT__2625["define-macro"] = function B3280__3281 (env__3282, identifier__3283, arguments__3284)
{
var body__3285 = $SL.call(arguments, 3);
return [B2880, concatenate__2514([B3286, identifier__3283, concatenate__2514([generate_symbol__2671()], arguments__3284)], body__3285), [B2755, [B2953, identifier__3283, "%macro?"], true]]}}
Tcore_macrosT__2625["define-symbol-macro"] = function B3287__3288 (env__3289, identifier__3290, arguments__3291)
{
var body__3292 = $SL.call(arguments, 3);
return [B2880, concatenate__2514([B3286, identifier__3290, []], body__3292), [B2755, [B2953, identifier__3290, "%symbol-macro?"], true]]}
{
var B3313 = $S("%try", "ralph/core"),
B3314 = $S("instance?", "ralph/core");
Tcore_macrosT__2625["handler-case"] = function B3293__3298 (____3299, body__3300)
{
var cases__3301 = $SL.call(arguments, 2),
condition_var__3302 = generate_symbol__2671();
return [B3313, body__3300, condition_var__3302, concatenate__2514([B2768], map__2590(function B3294__3303 (case__3304)
{
var B3295__3305 = case__3304[0],
type__3306 = B3295__3305[0],
B3296__3307 = $SL.call(B3295__3305, 1),
B3297__3308 = Mkeys__2563(B3296__3307, {condition:false}),
condition__3309 = B3297__3308.condition,
body__3310 = $SL.call(case__3304, 1),
B3311 = [[B3314, condition_var__3302, type__3306]],
B3312;
if ($T(condition__3309))
{B3312 = [concatenate__2514([B2698, [[condition__3309, condition_var__3302]]], body__3310)]}
else
B3312 = body__3310;
return concatenate__2514(B3311, B3312)}, cases__3301))]}}
{
var B3321 = $S("%call", "ralph/core"),
B3322 = $S("get-setter", "ralph/core");
Tcore_macrosT__2625["get-setter"] = function B3315__3316 (____3317, object__3318, property__3319)
{
var propertiesSvalue__3320 = $SL.call(arguments, 3);
if ($T(binaryEE__2582(size__2631(propertiesSvalue__3320), 1)))
{return [B2613, [B2953, object__3318, property__3319], first__2574(propertiesSvalue__3320)]}
else
return concatenate__2514([B3321, B3322, object__3318, property__3319], propertiesSvalue__3320)}}
{
var B3328 = $S("symbol", "ralph/core");
Tcore_macrosT__2625.symbol = function B3323__3324 (____3325, name__3326, module__3327)
{if ($T(instanceQ__2669(name__3326, LstringG__3107)))
{if ($T(instanceQ__2669(module__3327, LstringG__3107)))
{return [B3061, name__3326, module__3327]}
else
return [B3061, name__3326]}
else
return [B3321, B3328, name__3326, module__3327]}}
{
var B3335 = $S("binary==", "ralph/core"),
B3336 = $S("==", "ralph/core");
Tcore_macrosT__2625["=="] = function B3329__3330 (____3331, object1__3332, object2__3333)
{
var objects__3334 = $SL.call(arguments, 3);
if ($T(emptyQ__2667(objects__3334)))
{return [B3335, object1__3332, object2__3333]}
else
return concatenate__2514([B3321, B3336, object1__3332, object2__3333], objects__3334)}}
{
var Tcore_symbol_macrosT__3337;
false;
Tcore_symbol_macrosT__3337 = make_object__2525();
exports["*core-symbol-macros*"] = Tcore_symbol_macrosT__3337}
{
var B3341 = $S("%next-method", "ralph/core"),
B3342 = $S("%this-method");
Tcore_symbol_macrosT__3337["next-method"] = function B3338__3339 (____3340)
{return [B3341, B3342]}}
{
var Texternal_symbolsT__3343;
false;
Texternal_symbolsT__3343 = {}}
{
var B3350 = $K("name"),
B3351 = $K("module"),
external_symbol__3345;
false;
external_symbol__3345 = Mmake_function__2512("external_symbol", function external_symbol__3346 (name__3347, module__3348)
{
var B3344__3349 = get__2562(Texternal_symbolsT__3343, module__3348, name__3347);
if ($T(B3344__3349))
{return B3344__3349}
else
return get_setter__2561(Texternal_symbolsT__3343, module__3348, name__3347, make__2584(LsymbolG__2723, B3350, name__3347, B3351, module__3348))}, false)}
{
var destructure_symbol__3355 = B2503["destructure-symbol"];
false;
qualify__2608 = Mmake_function__2512("qualify", function qualify__3356 (form__3357, env__3358)
{
var B3352__3359 = form__3357;
if ($T(instanceQ__2669(B3352__3359, LarrayG__2670)))
{return map__2590(rcurry__2591(qualify__3356, env__3358), form__3357)}
else
if ($T(instanceQ__2669(B3352__3359, LsymbolG__2723)))
{
var B3353__3360 = destructure_symbol__3355(form__3357),
name__3361 = B3353__3360[0],
module_name__3362 = B3353__3360[1];
if ($T(module_name__3362))
{return form__3357}
else
{
var B3354__3363;
if ($T(not__2581(boundQ__3069(env__3358, form__3357))))
{B3354__3363 = find_moduleSimport_name__3070(name__3361, env__3358)}
else
B3354__3363 = false;
if ($T(B3354__3363))
{
var moduleSimport_name__3364 = B3354__3363,
module__3365 = moduleSimport_name__3364[0],
import_name__3366 = moduleSimport_name__3364[1];
return external_symbol__3345(import_name__3366, get__2562(module__3365, "name"))}
else
return symbol__2513(name__3361, get__2562(env__3358, "module", "name"))}}
else
return form__3357}, false)}
{
var find_macro_definition__3368;
false;
find_macro_definition__3368 = Mmake_function__2512("find_macro_definition", function find_macro_definition__3369 (form__3370, env__3371)
{
var B3367__3372 = form__3370;
if ($T(instanceQ__2669(B3367__3372, LarrayG__2670)))
{
if ($T(emptyQ__2667(form__3370)))
{signal__2583("Empty form")};
var identifier__3373 = first__2574(form__3370),
name__3374 = symbol_name__2515(identifier__3373);
if ($T(not__2581(boundQ__3069(env__3371, identifier__3373))))
{return env__3371.macros[name__3374]}}
else
if ($T(instanceQ__2669(B3367__3372, LsymbolG__2723)))
{
var name__3375 = symbol_name__2515(form__3370);
if ($T(not__2581(boundQ__3069(env__3371, form__3370))))
{return env__3371["symbol-macros"][name__3375]}}}, false)}
{
var macroexpand_1__3377;
false;
macroexpand_1__3377 = Mmake_function__2512("macroexpand_1", function macroexpand_1__3378 (form__3379, env__3380)
{
var B3376__3381 = find_macro_definition__3368(form__3379, env__3380);
if ($T(B3376__3381))
{
var macro__3382 = B3376__3381,
B3383;
if ($T(instanceQ__2669(form__3379, LarrayG__2670)))
{B3383 = rest__2742(form__3379)}
else
B3383 = form__3379;
return apply__2558(macro__3382, env__3380, B3383)}
else
return form__3379}, false);
exports["macroexpand-1"] = macroexpand_1__3377}
{
var macroexpand__3384;
false;
macroexpand__3384 = Mmake_function__2512("macroexpand", function macroexpand__3385 (form__3386, env__3387)
{
var doneQ__3388;
while ($T(not__2581(doneQ__3388)))
{
var expanded__3389 = macroexpand_1__3377(form__3386, env__3387);
doneQ__3388 = binaryEE__2582(expanded__3389, form__3386);
form__3386 = expanded__3389};
return form__3386}, false);
exports.macroexpand = macroexpand__3384}
{
var simplify_call__3392;
false;
macroexpand_all__2589 = Mmake_function__2512("macroexpand_all", function macroexpand_all__3393 (form__3394, env__3395)
{B3399:while(true){
var B3390__3396 = form__3394;
if ($T(instanceQ__2669(B3390__3396, LarrayG__2670)))
{if ($T(find_macro_definition__3368(form__3394, env__3395)))
{return simplify_call__3392(macroexpand_all__3393(macroexpand__3384(form__3394, env__3395), env__3395))}
else
{
var B3391__3397 = find_special_form__2575(form__3394, env__3395);
if ($T(B3391__3397))
{
var expander__3398 = B3391__3397;
return apply__2558(expander__3398, env__3395, rest__2742(form__3394))}
else
return map__2590(rcurry__2591(macroexpand_all__3393, env__3395), form__3394)}}
else
if ($T(instanceQ__2669(B3390__3396, LsymbolG__2723)))
{if ($T(find_macro_definition__3368(form__3394, env__3395)))
{
arguments = [macroexpand__3384(form__3394, env__3395), env__3395];
form__3394 = arguments[0];
env__3395 = arguments[1];
continue B3399}
else
return qualify__2608(form__3394, env__3395)}
else
return form__3394;
break}}, false);
exports["macroexpand-all"] = macroexpand_all__2589}
{
false;
simplify_call__3392 = Mmake_function__2512("simplify_call", function simplify_call__3400 (exp__3401)
{
var B3402;
if ($T(expressionQ__2573(exp__3401, LarrayG__2670)))
{B3402 = binaryEE__2582(symbol_name__2515(first__2574(exp__3401)), "%call")}
else
B3402 = false;
if ($T(B3402))
{return rest__2742(exp__3401)}
else
return exp__3401}, false)}
{
false;
find_moduleSimport_name__3070 = Mmake_function__2512("find_moduleSimport_name", function find_moduleSimport_name__3406 (definition_name__3407, env__3408)
{return anyQ__2848(function B3403__3409 (import__3410)
{
var module__3411 = import__3410[0],
names__3412 = import__3410[1];
return anyQ__2848(function B3404__3413 (name__3414)
{
var B3405__3415;
if ($T(instanceQ__2669(name__3414, LarrayG__2670)))
{B3405__3415 = name__3414}
else
B3405__3415 = [name__3414, name__3414];
var import_name__3416 = B3405__3415[0],
new_name__3417 = B3405__3415[1];
if ($T(binaryEE__2582(definition_name__3407, new_name__3417)))
{return [module__3411, import_name__3416]}}, names__3412)}, get__2562(env__3408, "module", "imports"))}, false)}
{
var find_import_identifier__3418;
false;
find_import_identifier__3418 = Mmake_function__2512("find_import_identifier", function find_import_identifier__3419 (module__3420, env__3421)
{return get__2562(env__3421, "import-identifiers", get__2562(module__3420, "name"))}, false)}
{
var external_definition__3423;
false;
external_definition__3423 = Mmake_function__2512("external_definition", function external_definition__3424 (variable__3425, import_identifier__3426, import_name__3427, env__3428)
{
var B3422__3429 = destructure_symbol__3355(variable__3425),
name__3430 = B3422__3429[0],
module_name__3431 = B3422__3429[1];
if ($T(not__2581(get__2562(env__3428, "defined?", module_name__3431, name__3430))))
{
get_setter__2561(env__3428, "defined?", module_name__3431, name__3430, true);
return [B3279, [B3205, variable__3425], [B2613, variable__3425, [B2953, import_identifier__3426, import_name__3427]]]}}, false)}
{
var description__3443 = B948.description,
alpha_convert__3444 = B2504["alpha-convert"],
format_out__3445 = B2499["format-out"],
find_module__3446,
remove_defined_identifiers__3447 = B2503["remove-defined-identifiers"],
find_free_variables__3448 = B2506["find-free-variables"],
identity__3449 = B948.identity,
define_free_variables__3450;
false;
define_free_variables__3450 = Mmake_function__2512("define_free_variables", function define_free_variables__3451 (exp__3452, env__3453)
{
var B3432__3454 = $SL.call(arguments, 2),
B3433__3455 = Mkeys__2563(B3432__3454, {filter:identity__3449}),
filter__3456 = B3433__3455.filter,
variables__3457 = filter__3456(remove_defined_identifiers__3447(find_free_variables__3448(exp__3452, env__3453), env__3453)),
result__3458 = [],
B3434__3459 = variables__3457,
B3435__3460,
B3437__3461,
B3436__3462 = [B3434__3459];
while (true)
{
var B3438__3463 = B3435__3460,
B3480;
if ($T(B3438__3463))
{B3480 = B3438__3463}
else
B3480 = anyQ__2848(emptyQ__2667, B3436__3462);
var B3481 = not__2581(B3480);
if ($T(B3481))
{
var variable__3464 = first__2574(B3434__3459);
(function B3439__3465 (variable__3466)
{
var B3440__3467 = destructure_symbol__3355(variable__3466),
name__3468 = B3440__3467[0],
module_name__3469 = B3440__3467[1],
import_name__3470;
if ($T(not__2581(module_name__3469)))
{signal__2583(concatenate__2514("NOT QUALIFIED: ", description__3443(variable__3466)))};
if ($T(binaryEE__2582(module_name__3469, get__2562(env__3453, "module", "name"))))
{
get_setter__2561(env__3453, "defined?", module_name__3469, name__3468, true);
push_last__2849(result__3458, [B3205, variable__3466]);
var B3441__3471 = find_moduleSimport_name__3070(name__3468, env__3453);
if ($T(B3441__3471))
{
var moduleSimport_name__3472 = B3441__3471,
module__3473 = moduleSimport_name__3472[0],
import_name__3474 = moduleSimport_name__3472[1],
external_variable__3475 = symbol__2513(import_name__3474, get__2562(module__3473, "name")),
B3442__3476 = external_definition__3423(external_variable__3475, alpha_convert__3444(find_import_identifier__3418(module__3473, env__3453), env__3453), import_name__3474, env__3453);
if ($T(B3442__3476))
{
var definition__3477 = B3442__3476;
push_last__2849(result__3458, definition__3477)};
return push_last__2849([B2613, variable__3466, external_variable__3475])}
else
return format_out__3445("Warning: Undefined variable: %=\n", variable__3466)}
else
{
var module__3478 = find_module__3446(module_name__3469),
import_identifier__3479 = find_import_identifier__3418(module__3478, env__3453);
if ($T(not__2581(import_identifier__3479)))
{
push_last__2849(result__3458, make_import_definition__3255(module_name__3469, env__3453));
import_identifier__3479 = find_import_identifier__3418(module__3478, env__3453)};
return push_last__2849(result__3458, external_definition__3423(variable__3466, alpha_convert__3444(import_identifier__3479, env__3453), name__3468, env__3453))}})(variable__3464);
B3434__3459 = rest__2742(B3434__3459);
B3436__3462 = [B3434__3459]}
else
break};
B3437__3461;
return concatenate__2514([B3279], result__3458, [exp__3452])}, false);
exports["define-free-variables"] = define_free_variables__3450}
{
var last_setter__3502 = B948["last-setter"],
last__3503 = B948.last,
second_setter__3504 = B948["second-setter"],
inline_definition__3505,
inlineQ__3506,
inline__3507;
false;
inline__3507 = Mmake_function__2512("inline", function inline__3508 (form__3509, env__3510)
{
var B3547;
if ($T(instanceQ__2669(form__3509, LarrayG__2670)))
{B3547 = not__2581(emptyQ__2667(form__3509))}
else
B3547 = false;
if ($T(B3547))
{if ($T(instanceQ__2669(first__2574(form__3509), LsymbolG__2723)))
{
var B3482__3511 = symbol_name__2515(first__2574(form__3509)),
B3483__3512 = binaryEE__2582(B3482__3511, "%method"),
B3548;
if ($T(B3483__3512))
{B3548 = B3483__3512}
else
B3548 = binaryEE__2582(B3482__3511, "%set");
if ($T(B3548))
{
last_setter__3502(form__3509, inline__3508(last__3503(form__3509), env__3510));
return form__3509}
else
if ($T(binaryEE__2582(B3482__3511, "%bind")))
{
var ____3513 = form__3509[0],
binding__3514 = form__3509[1],
body__3515 = form__3509[2];
second_setter__3504(binding__3514, inline__3508(second__2520(binding__3514), env__3510));
last_setter__3502(form__3509, inline__3508(body__3515, env__3510));
return form__3509}
else
if ($T(binaryEE__2582(B3482__3511, "%try")))
{
var ____3516 = form__3509[0],
body__3517 = form__3509[1],
var__3518 = form__3509[2],
catch__3519 = form__3509[3];
second_setter__3504(form__3509, inline__3508(body__3517, env__3510));
last_setter__3502(form__3509, inline__3508(catch__3519, env__3510));
return form__3509}
else
{
var B3484__3520 = binaryEE__2582(B3482__3511, "%begin"),
B3549;
if ($T(B3484__3520))
{B3549 = B3484__3520}
else
{
var B3485__3521 = binaryEE__2582(B3482__3511, "%if");
if ($T(B3485__3521))
{B3549 = B3485__3521}
else
{
var B3486__3522 = binaryEE__2582(B3482__3511, "%while");
if ($T(B3486__3522))
{B3549 = B3486__3522}
else
{
var B3487__3523 = binaryEE__2582(B3482__3511, "%array");
if ($T(B3487__3523))
{B3549 = B3487__3523}
else
{
var B3488__3524 = binaryEE__2582(B3482__3511, "%object");
if ($T(B3488__3524))
{B3549 = B3488__3524}
else
{
var B3489__3525 = binaryEE__2582(B3482__3511, "%get-property");
if ($T(B3489__3525))
{B3549 = B3489__3525}
else
{
var B3490__3526 = binaryEE__2582(B3482__3511, "%native-call");
if ($T(B3490__3526))
{B3549 = B3490__3526}
else
{
var B3491__3527 = binaryEE__2582(B3482__3511, "%infix");
if ($T(B3491__3527))
{B3549 = B3491__3527}
else
{
var B3492__3528 = binaryEE__2582(B3482__3511, "%plus");
if ($T(B3492__3528))
{B3549 = B3492__3528}
else
{
var B3493__3529 = binaryEE__2582(B3482__3511, "%minus");
if ($T(B3493__3529))
{B3549 = B3493__3529}
else
{
var B3494__3530 = binaryEE__2582(B3482__3511, "%times");
if ($T(B3494__3530))
{B3549 = B3494__3530}
else
B3549 = binaryEE__2582(B3482__3511, "%divide")}}}}}}}}}};
if ($T(B3549))
{return cons__2593(first__2574(form__3509), map__2590(rcurry__2591(inline__3508, env__3510), rest__2742(form__3509)))}
else
{
var B3495__3531 = binaryEE__2582(B3482__3511, "%native"),
B3550;
if ($T(B3495__3531))
{B3550 = B3495__3531}
else
{
var B3496__3532 = binaryEE__2582(B3482__3511, "%native-name");
if ($T(B3496__3532))
{B3550 = B3496__3532}
else
{
var B3497__3533 = binaryEE__2582(B3482__3511, "%define");
if ($T(B3497__3533))
{B3550 = B3497__3533}
else
B3550 = binaryEE__2582(B3482__3511, "%symbol")}};
if ($T(B3550))
{return form__3509}
else
{
var identifier__3534 = form__3509[0],
values__3535 = $SL.call(form__3509, 1),
B3498__3536 = destructure_symbol__3355(identifier__3534),
name__3537 = B3498__3536[0],
module_name__3538 = B3498__3536[1],
B3499__3539 = get__2562(env__3510, "original-identifier", name__3537);
if ($T(B3499__3539))
{
var original_identifier__3540 = B3499__3539,
B3500__3541 = destructure_symbol__3355(original_identifier__3540),
name__3542 = B3500__3541[0],
module_name__3543 = B3500__3541[1],
module__3544;
if ($T(binaryEE__2582(module_name__3543, get__2562(env__3510, "module", "name"))))
{module__3544 = get__2562(env__3510, "module")}
else
module__3544 = find_module__3446(module_name__3543);
var B3501__3545;
if ($T(inlineQ__3506(module__3544, name__3542)))
{B3501__3545 = get__2562(module__3544, "functions", name__3542)}
else
B3501__3545 = false;
if ($T(B3501__3545))
{
var definition__3546 = B3501__3545;
return inline_definition__3505(definition__3546, values__3535, env__3510)}
else
return map__2590(rcurry__2591(inline__3508, env__3510), form__3509)}
else
return map__2590(rcurry__2591(inline__3508, env__3510), form__3509)}}}}
else
return map__2590(rcurry__2591(inline__3508, env__3510), form__3509)}
else
return form__3509}, false)}
{
var EE__3551 = B948["=="];
false;
inlineQ__3506 = Mmake_function__2512("inlineQ", function inlineQ__3552 (module__3553, name__3554)
{return anyQ__2848(curry__2586(EE__3551, name__3554), get__2562(module__3553, "inline"))}, false)}
{
var GE__3557 = B948[">="],
restore_identifiers__3558 = B2504["restore-identifiers"],
rename_identifiers__3559 = B2504["rename-identifiers"];
false;
inline_definition__3505 = Mmake_function__2512("inline_definition", function inline_definition__3560 (definition__3561, values__3562, env__3563)
{
var ____3564 = definition__3561[0],
name__3565 = definition__3561[1],
arguments__3566 = definition__3561[2],
body__3567 = definition__3561[3],
argumentsT__3568 = rename_identifiers__3559(arguments__3566, env__3563),
bodyT__3569 = alpha_convert__3444(body__3567, env__3563),
B3555__3570 = size__2631(arguments__3566),
i__3571 = 0;
while ($T(not__2581(GE__3557(i__3571, B3555__3570))))
{
(function B3556__3572 (i__3573)
{
var argumentT__3574 = element__2632(argumentsT__3568, i__3573),
value__3575 = element__2632(values__3562, i__3573),
valueT__3576;
if ($T(value__3575))
{valueT__3576 = inline__3507(value__3575, env__3563)}
else
valueT__3576 = [B3057, "undefined"];
return bodyT__3569 = [B2624, [argumentT__3574, valueT__3576], bodyT__3569]})(i__3571);
i__3571 = (i__3571 + 1)};
false;
restore_identifiers__3558(arguments__3566, env__3563);
return bodyT__3569}, false)}
{
var lift_symbol__3577,
lift_symbols__3578;
false;
lift_symbols__3578 = Mmake_function__2512("lift_symbols", function lift_symbols__3579 (exp__3580, env__3581)
{return lift_symbol__3577(exp__3580, env__3581, identity__3449)}, false);
exports["lift-symbols"] = lift_symbols__3578}
{
var lift_symbolT__3604,
lift_value__3605,
lift_symbolTT__3606,
LkeywordG__3607 = B948["<keyword>"],
Lhash_symbolG__3608 = B948["<hash-symbol>"];
false;
lift_symbol__3577 = Mmake_function__2512("lift_symbol", function lift_symbol__3609 (exp__3610, env__3611, k__3612)
{B3671:while(true){
var B3669;
if ($T(instanceQ__2669(exp__3610, LarrayG__2670)))
{B3669 = not__2581(emptyQ__2667(exp__3610))}
else
B3669 = false;
if ($T(B3669))
{
var B3582__3613 = symbol_name__2515(first__2574(exp__3610));
if ($T(binaryEE__2582(B3582__3613, "%bind")))
{
var ____3614 = exp__3610[0],
B3583__3615 = exp__3610[1],
var__3616 = B3583__3615[0],
value__3617 = B3583__3615[1],
body__3618 = exp__3610[2];
arguments = [value__3617, env__3611, (function B3672 (lift_symbol__3609, body__3618, k__3612, B2624, var__3616)
{return function B3584__3619 (lvalue__3620, env__3621)
{return lift_symbol__3609(body__3618, env__3621, function B3585__3622 (lbody__3623, env__3624)
{return k__3612([B2624, [var__3616, lvalue__3620], lbody__3623], env__3624)})}})(lift_symbol__3609, body__3618, k__3612, B2624, var__3616)];
exp__3610 = arguments[0];
env__3611 = arguments[1];
k__3612 = arguments[2];
continue B3671}
else
if ($T(binaryEE__2582(B3582__3613, "%set")))
{
var ____3625 = exp__3610[0],
e1__3626 = exp__3610[1],
e2__3627 = exp__3610[2];
arguments = [e2__3627, env__3611, (function B3673 (k__3612, B2613, e1__3626)
{return function B3586__3628 (le2__3629, env__3630)
{return k__3612([B2613, e1__3626, le2__3629], env__3630)}})(k__3612, B2613, e1__3626)];
exp__3610 = arguments[0];
env__3611 = arguments[1];
k__3612 = arguments[2];
continue B3671}
else
if ($T(binaryEE__2582(B3582__3613, "%method")))
{
var ____3631 = exp__3610[0],
name__3632 = exp__3610[1],
arguments__3633 = exp__3610[2],
body__3634 = exp__3610[3];
arguments = [body__3634, env__3611, (function B3674 (k__3612, B2606, name__3632, arguments__3633)
{return function B3587__3635 (lbody__3636, env__3637)
{return k__3612([B2606, name__3632, arguments__3633, lbody__3636], env__3637)}})(k__3612, B2606, name__3632, arguments__3633)];
exp__3610 = arguments[0];
env__3611 = arguments[1];
k__3612 = arguments[2];
continue B3671}
else
{
var B3588__3638 = binaryEE__2582(B3582__3613, "%begin"),
B3670;
if ($T(B3588__3638))
{B3670 = B3588__3638}
else
{
var B3589__3639 = binaryEE__2582(B3582__3613, "%if");
if ($T(B3589__3639))
{B3670 = B3589__3639}
else
{
var B3590__3640 = binaryEE__2582(B3582__3613, "%while");
if ($T(B3590__3640))
{B3670 = B3590__3640}
else
{
var B3591__3641 = binaryEE__2582(B3582__3613, "%array");
if ($T(B3591__3641))
{B3670 = B3591__3641}
else
{
var B3592__3642 = binaryEE__2582(B3582__3613, "%object");
if ($T(B3592__3642))
{B3670 = B3592__3642}
else
{
var B3593__3643 = binaryEE__2582(B3582__3613, "%get-property");
if ($T(B3593__3643))
{B3670 = B3593__3643}
else
{
var B3594__3644 = binaryEE__2582(B3582__3613, "%infix");
if ($T(B3594__3644))
{B3670 = B3594__3644}
else
{
var B3595__3645 = binaryEE__2582(B3582__3613, "%native");
if ($T(B3595__3645))
{B3670 = B3595__3645}
else
{
var B3596__3646 = binaryEE__2582(B3582__3613, "%native-name");
if ($T(B3596__3646))
{B3670 = B3596__3646}
else
{
var B3597__3647 = binaryEE__2582(B3582__3613, "%native-call");
if ($T(B3597__3647))
{B3670 = B3597__3647}
else
{
var B3598__3648 = binaryEE__2582(B3582__3613, "%plus");
if ($T(B3598__3648))
{B3670 = B3598__3648}
else
{
var B3599__3649 = binaryEE__2582(B3582__3613, "%minus");
if ($T(B3599__3649))
{B3670 = B3599__3649}
else
{
var B3600__3650 = binaryEE__2582(B3582__3613, "%times");
if ($T(B3600__3650))
{B3670 = B3600__3650}
else
B3670 = binaryEE__2582(B3582__3613, "%divide")}}}}}}}}}}}};
if ($T(B3670))
{
var m__3651 = exp__3610[0],
eT__3652 = $SL.call(exp__3610, 1);
return lift_symbolT__3604(eT__3652, env__3611, function B3601__3653 (leT__3654, env__3655)
{return k__3612(cons__2593(m__3651, leT__3654), env__3655)})}
else
if ($T(binaryEE__2582(B3582__3613, "%try")))
{
var ____3656 = exp__3610[0],
e1__3657 = exp__3610[1],
v__3658 = exp__3610[2],
e2__3659 = exp__3610[3];
return lift_symbolT__3604([e1__3657, e2__3659], env__3611, function B3602__3660 (leT__3661, env__3662)
{
var le1__3663 = leT__3661[0],
le2__3664 = leT__3661[1];
return k__3612([B3313, le1__3663, v__3658, le2__3664], env__3662)})}
else
if ($T(binaryEE__2582(B3582__3613, "%symbol")))
{
var ____3665 = exp__3610[0],
name__3666 = exp__3610[1],
module__3667 = exp__3610[2];
return lift_value__3605(name__3666, exp__3610, "symbol", env__3611, k__3612, B3351, module__3667)}
else
return lift_symbolTT__3606(exp__3610, env__3611, k__3612)}}
else
{
var B3603__3668 = exp__3610;
if ($T(instanceQ__2669(B3603__3668, LkeywordG__3607)))
{return lift_value__3605(symbol_name__2515(exp__3610), exp__3610, "keyword", env__3611, k__3612)}
else
if ($T(instanceQ__2669(B3603__3668, Lhash_symbolG__3608)))
{return lift_value__3605(symbol_name__2515(exp__3610), exp__3610, "hash", env__3611, k__3612)}
else
return k__3612(exp__3610, env__3611)};
break}}, false)}
{
false;
lift_value__3605 = Mmake_function__2512("lift_value", function lift_value__3678 (name__3679, value__3680, type__3681, env__3682, k__3683)
{
var B3675__3684 = $SL.call(arguments, 5),
B3676__3685 = Mkeys__2563(B3675__3684, {module:""}),
module__3686 = B3676__3685.module,
B3677__3687 = get__2562(env__3682, "lifted", type__3681, module__3686, name__3679);
if ($T(B3677__3687))
{
var t__3688 = B3677__3687;
return k__3683(t__3688, env__3682)}
else
{
var t__3689 = get_setter__2561(env__3682, "lifted", type__3681, module__3686, name__3679, generate_symbol__2671(env__3682));
return [B2624, [t__3689, value__3680], k__3683(t__3689, env__3682)]}}, false)}
{
false;
lift_symbolT__3604 = Mmake_function__2512("lift_symbolT", function lift_symbolT__3690 (expT__3691, env__3692, k__3693)
{if ($T(emptyQ__2667(expT__3691)))
{return k__3693([], env__3692)}
else
return lift_symbolTT__3606(expT__3691, env__3692, k__3693)}, false)}
{
false;
lift_symbolTT__3606 = Mmake_function__2512("lift_symbolTT", function lift_symbolTT__3696 (exp__3697, env__3698, k__3699)
{return lift_symbol__3577(first__2574(exp__3697), env__3698, function B3694__3700 (t__3701, env__3702)
{return lift_symbolT__3604(rest__2742(exp__3697), env__3702, function B3695__3703 (tT__3704, env__3705)
{return k__3699(cons__2593(t__3701, tT__3704), env__3705)})})}, false)}
{
var B3711 = $K("string"),
read__3706 = B2501.read,
Lstring_streamG__3707 = B2498["<string-stream>"],
read_program__3708;
false;
read_program__3708 = Mmake_function__2512("read_program", function read_program__3709 (source__3710)
{return read__3706(make__2584(Lstring_streamG__3707, B3711, concatenate__2514("(", source__3710, "\n)")))}, false)}
{
var B3745 = $K("filter"),
LdateG__3716 = B2500["<date>"],
lift_defines__3717 = B2505["lift-defines"],
choose__3718 = B948.choose,
hasQ__3719 = B948["has?"],
normalize_term__3720 = B2507["normalize-term"],
transform_statementsN__3721 = B2508["transform-statements!"],
optimize_tail_callsN__3722 = B2509["optimize-tail-calls!"],
flatten_statementsN__3723 = B2510["flatten-statements!"],
compile_js__3724 = B2511["compile-js"],
compile_expression__3725;
false;
compile_expression__3725 = Mmake_function__2512("compile_expression", function compile_expression__3726 (exp__3727, env__3728)
{return reduce__2653(function B3712__3729 (result__3730, nameSpass__3731)
{
var name__3732 = nameSpass__3731[0],
pass__3733 = nameSpass__3731[1],
start__3734 = make__2584(LdateG__3716),
result__3735 = pass__3733(result__3730),
end__3736 = make__2584(LdateG__3716),
B3713__3737 = get__2562(env__3728, "timing", name__3732),
B3742;
if ($T(B3713__3737))
{B3742 = B3713__3737}
else
B3742 = 0;
var B3743 = (end__3736 - start__3734),
B3744 = (B3742 + B3743);
get_setter__2561(env__3728, "timing", name__3732, B3744);
return result__3735}, exp__3727, [["macroexpansion", rcurry__2591(macroexpand_all__2589, env__3728)], ["define lifting", rcurry__2591(lift_defines__3717, env__3728)], ["free variable definition", rcurry__2591(define_free_variables__3450, env__3728)], ["alpha conversion", rcurry__2591(alpha_convert__3444, env__3728)], ["free variable definition #2", rcurry__2591(define_free_variables__3450, env__3728, B3745, curry__2586(choose__3718, function B3714__3738 (variable__3739)
{return not__2581(hasQ__3719(get__2562(env__3728, "original-identifier"), symbol_name__2515(variable__3739)))}))], ["ANF transformation", rcurry__2591(normalize_term__3720, env__3728)], ["symbol lifting", rcurry__2591(lift_symbols__3578, env__3728)], ["statement transfomation", rcurry__2591(transform_statementsN__3721, env__3728)], ["TCO", function B3715__3740 (exp__3741)
{return optimize_tail_callsN__3722(exp__3741, env__3728)}], ["statement flattening", flatten_statementsN__3723], ["code generation", rcurry__2591(compile_js__3724, env__3728)]])}, false);
exports["compile-expression"] = compile_expression__3725}
{
var resolve_path__3746 = B2502["resolve-path"],
executable_path__3747;
false;
executable_path__3747 = Mmake_function__2512("executable_path", function executable_path__3748 (module_name__3749)
{return resolve_path__3746("build", concatenate__2514(module_name__3749, ".js"))}, false)}
{
var module_path__3750;
false;
module_path__3750 = Mmake_function__2512("module_path", function module_path__3751 (base_path__3752, module_name__3753)
{return resolve_path__3746(base_path__3752, concatenate__2514(module_name__3753, ".rm"))}, false)}
{
var source_path__3754;
false;
source_path__3754 = Mmake_function__2512("source_path", function source_path__3755 (module_name__3756)
{return resolve_path__3746("src", concatenate__2514(module_name__3756, ".ralph"))}, false)}
{
var L__3758 = B948["<"],
file_properties__3759 = B2502["file-properties"],
file_existsQ__3760 = B2502["file-exists?"],
recompileQ__3761;
false;
recompileQ__3761 = Mmake_function__2512("recompileQ", function recompileQ__3762 (module_name__3763)
{if ($T(not__2581(get__2562(TmodulesT__2526, module_name__3763, "native?"))))
{
var path__3764 = executable_path__3747(module_name__3763),
B3757__3765 = not__2581(file_existsQ__3760(path__3764));
if ($T(B3757__3765))
{return B3757__3765}
else
{
var path2__3766 = source_path__3754(module_name__3763);
return L__3758(get__2562(file_properties__3759(path__3764), "modification-date"), get__2562(file_properties__3759(path2__3766), "modification-date"))}}}, false)}
{
var chain_object__3771 = B948["chain-object"],
compile_module__3772,
process_names__3773,
object_properties__3774 = B948["object-properties"];
false;
compile_time_import_module__3253 = Mmake_function__2512("compile_time_import_module", function compile_time_import_module__3775 (env__3776, module_name__3777)
{
var B3767__3778 = $SL.call(arguments, 2),
B3768__3779 = Mkeys__2563(B3767__3778, {options:false}),
options__3780 = B3768__3779.options,
B3769__3787;
if ($T(binaryEE__2582(module_name__3777, "ralph/core")))
{B3769__3787 = [Tcore_macrosT__2625, Tcore_symbol_macrosT__3337]}
else
{
compile_module__3772(module_name__3777);
var definitions__3781 = require(module_name__3777),
macros__3782 = make_plain_object__2545(),
symbol_macros__3783 = make_plain_object__2545();
do__2560(function B3770__3784 (name__3785)
{
var definition__3786 = get__2562(definitions__3781, name__3785);
if ($T(get__2562(definition__3786, "%macro?")))
{return macros__3782[name__3785] = definition__3786}
else
if ($T(get__2562(definition__3786, "%symbol-macro?")))
{return symbol_macros__3783[name__3785] = definition__3786}}, apply__2558(process_names__3773, object_properties__3774(definitions__3781), options__3780));
B3769__3787 = [macros__3782, symbol_macros__3783]};
var macros__3788 = B3769__3787[0],
symbol_macros__3789 = B3769__3787[1];
chain_object__3771(get__2562(env__3776, "macros"), macros__3788);
return chain_object__3771(get__2562(env__3776, "symbol-macros"), symbol_macros__3789)}, false)}
{
var removeN__3795 = B948["remove!"],
set_unionN__3796 = B948["set-union!"],
as_object__3797 = B948["as-object"],
as_set__3798 = B948["as-set"];
false;
process_names__3773 = Mmake_function__2512("process_names", function process_names__3799 (all__3800)
{
var B3790__3801 = $SL.call(arguments, 1),
B3791__3802 = Mkeys__2563(B3790__3801, {only:false,
exclude:false,
prefix:false,
rename:false}),
only__3803 = B3791__3802.only,
exclude__3804 = B3791__3802.exclude,
prefix__3805 = B3791__3802.prefix,
rename__3806 = B3791__3802.rename,
resolve__3807 = function resolve__3808 (exp__3809)
{if ($T(instanceQ__2669(exp__3809, LstringG__3107)))
{return exp__3809}
else
return identifier_name__2521(exp__3809)},
B3817;
if ($T(instanceQ__2669(only__3803, LarrayG__2670)))
{B3817 = map__2590(resolve__3807, only__3803)}
else
B3817 = all__3800;
var names__3810 = as_set__3798(B3817),
B3792__3811 = rename__3806,
B3818;
if ($T(B3792__3811))
{B3818 = B3792__3811}
else
B3818 = [];
var B3819 = map__2590(resolve__3807, B3818),
renamings__3812 = as_object__3797(B3819);
do__2560(curry__2586(removeN__3795, names__3810), map__2590(resolve__3807, exclude__3804));
set_unionN__3796(names__3810, object_properties__3774(renamings__3812));
return map__2590(function B3793__3813 (name__3814)
{
var B3794__3815 = get__2562(renamings__3812, name__3814);
if ($T(B3794__3815))
{
var renaming__3816 = B3794__3815;
return [name__3814, renaming__3816]}
else
if ($T(instanceQ__2669(prefix__3805, LstringG__3107)))
{return [name__3814, concatenate__2514(prefix__3805, name__3814)]}
else
return name__3814}, names__3810)}, false)}
{
var push__3821 = B948.push;
false;
import_module__3254 = Mmake_function__2512("import_module", function import_module__3822 (module__3823, module_name__3824)
{
var options__3825 = $SL.call(arguments, 2),
B3820__3826 = find_module__3446(module_name__3824);
if ($T(B3820__3826))
{
var other_module__3827 = B3820__3826;
push__3821(get__2562(module__3823, "imports"), [other_module__3827, apply__2558(process_names__3773, get__2562(other_module__3827, "exports"), options__3825)]);
push__3821(get__2562(module__3823, "dependencies"), module_name__3824);
return other_module__3827}
else
return signal__2583(concatenate__2514("unable to import module '", module_name__3824, "'"))}, false);
exports["import-module"] = import_module__3254}
{
var read_module__3831;
false;
find_module__3446 = Mmake_function__2512("find_module", function find_module__3832 (module_name__3833)
{
var B3828__3834 = compile_module__3772(module_name__3833);
if ($T(B3828__3834))
{return B3828__3834}
else
{
var B3829__3835 = get__2562(TmodulesT__2526, module_name__3833);
if ($T(B3829__3835))
{return B3829__3835}
else
{
var B3830__3836 = read_module__3831("build", module_name__3833);
if ($T(B3830__3836))
{return B3830__3836}
else
return read_module__3831("src", module_name__3833)}}}, false)}
{
var read_file__3837 = B2502["read-file"];
false;
read_module__3831 = Mmake_function__2512("read_module", function read_module__3838 (base_path__3839, module_name__3840)
{
var path__3841 = module_path__3750(base_path__3839, module_name__3840);
if ($T(file_existsQ__3760(path__3841)))
{return apply__2558(curry__2586(make__2584, LmoduleG__2533, B3350), read__3706(make__2584(Lstring_streamG__3707, B3711, read_file__3837(path__3841))))}}, false)}
{
var as_association_list__3848 = B948["as-association-list"],
display_timing__3849;
false;
display_timing__3849 = Mmake_function__2512("display_timing", function display_timing__3850 (env__3851)
{
var B3842__3852 = as_association_list__3848(get__2562(env__3851, "timing")),
B3843__3853,
B3845__3854,
B3844__3855 = [B3842__3852];
while (true)
{
var B3846__3856 = B3843__3853,
B3862;
if ($T(B3846__3856))
{B3862 = B3846__3856}
else
B3862 = anyQ__2848(emptyQ__2667, B3844__3855);
var B3863 = not__2581(B3862);
if ($T(B3863))
{
var pass_nameStime__3857 = first__2574(B3842__3852);
(function B3847__3858 (pass_nameStime__3859)
{
var pass_name__3860 = pass_nameStime__3859[0],
time__3861 = pass_nameStime__3859[1];
return format_out__3445("- %s: %ds\n", pass_name__3860, (time__3861 / 1000))})(pass_nameStime__3857);
B3842__3852 = rest__2742(B3842__3852);
B3844__3855 = [B3842__3852]}
else
break};
return B3845__3854}, false)}
{
var B3879 = $K("exports"),
B3880 = $K("inline"),
B3881 = $K("dependencies"),
write_file__3866 = B2502["write-file"];
false;
compile_module__3772 = Mmake_function__2512("compile_module", function compile_module__3867 (module_name__3868)
{
if ($T(not__2581(hasQ__3719(TmodulesT__2526, module_name__3868))))
{
var B3864__3869 = read_module__3831("src", module_name__3868);
if ($T(B3864__3869))
{
var module__3870 = B3864__3869;
TmodulesT__2526[module_name__3868] = module__3870}};
if ($T(recompileQ__3761(module_name__3868)))
{
format_out__3445("Compiling: %s\n", module_name__3868);
if ($T(not__2581(file_existsQ__3760(source_path__3754(module_name__3868)))))
{signal__2583(concatenate__2514("unable to compile module '", module_name__3868, "'"))};
var module__3871 = make__2584(LmoduleG__2533, B3350, module_name__3868),
env__3872 = make__2584(LenvironmentG__2546, B3351, module__3871),
source__3873 = read_file__3837(source_path__3754(module_name__3868)),
program__3874 = read_program__3708(source__3873),
result__3875 = "";
TmodulesT__2526[module_name__3868] = module__3871;
compile_time_import_module__3253(env__3872, "ralph/core");
if ($T(not__2581(binaryEE__2582(module_name__3868, "ralph/core"))))
{
import_module__3254(module__3871, "ralph/core");
push__3821(program__3874, make_import_definition__3255("ralph/core", env__3872))};
do__2560(function B3865__3876 (expression__3877)
{
var code__3878 = compile_expression__3725(expression__3877, env__3872);
return result__3875 = concatenate__2514(result__3875, code__3878, "\n")}, program__3874);
write_file__3866(executable_path__3747(module_name__3868), result__3875);
write_file__3866(module_path__3750("build", module_name__3868), description__3443([module_name__3868, B3879, get__2562(module__3871, "exports"), B3880, get__2562(module__3871, "inline"), B3881, get__2562(module__3871, "dependencies")]));
format_out__3445("Finished: %s\n", module_name__3868);
display_timing__3849(env__3872);
return module__3871}}, false);
exports["compile-module"] = compile_module__3772}
{
var memberQ__3886 = B948["member?"],
analyze_dependencies__3887;
false;
analyze_dependencies__3887 = Mmake_function__2512("analyze_dependencies", function analyze_dependencies__3888 (module_name__3889)
{
var B3882__3890 = find_module__3446(module_name__3889);
if ($T(B3882__3890))
{
var module__3891 = B3882__3890;
TmodulesT__2526[module_name__3889] = module__3891;
var B3883__3892 = module__3891,
dependencies__3893 = B3883__3892.dependencies,
result__3894 = copy_sequence__2630(dependencies__3893);
do__2560(function B3884__3895 (dependency__3896)
{return do__2560(function B3885__3897 (sub_dependency__3898)
{
if ($T(memberQ__3886(sub_dependency__3898, result__3894)))
{removeN__3795(result__3894, sub_dependency__3898)};
return push__3821(result__3894, sub_dependency__3898)}, analyze_dependencies__3888(dependency__3896))}, dependencies__3893);
return result__3894}
else
return signal__2583(concatenate__2514("unable to find-module '", module_name__3889, "'"))}, false);
exports["analyze-dependencies"] = analyze_dependencies__3887}
