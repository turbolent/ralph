var B1464 = require("ralph/core")
{var B2131, B2132, B2133, B2134, B2135;
B2131 = require("ralph/stream");
B2132 = require("ralph/format");
B2133 = require("ralph/regexp");
B2134 = require("ralph/reader");
B2135 = require("ralph/file-system")}
var B2136 = B1464["make-object"], B2137 = B2136()
{var B2138 = B1464["%make-class"], B2139 = B1464["<object>"], B2140 = B2138(B2139, {name:false,
"native?":false,
exports:function B2141 ()
{return []},
imports:function B2142 ()
{return []},
dependencies:function B2143 ()
{return []},
inline:function B2144 ()
{return []}});
exports["<module>"] = B2140}
var B2145 = B1464.symbol, B2146 = [B2145("%all-arguments"), B2145("%this-method")]
{var B2147 = B1464["make-plain-object"], B2148 = B2138(B2139, {module:false,
macros:function B2149 ()
{return B2147()},
"symbol-macros":function B2150 ()
{return B2147()},
identifiers:function B2151 ()
{return B2136()},
"defined?":function B2152 ()
{return B2136()},
lifted:function B2153 ()
{return B2136()},
"import-identifiers":function B2154 ()
{return B2147()}});
exports["<environment>"] = B2148}
var trueQ = B1464["true?"], B2155 = B1464["%make-function"], B2156 = B1464["instance?"], B2157 = B1464["<array>"], B2158 = B1464.not, B2159 = B1464["empty?"], B2160 = B1464.first, B2161 = B1464["<symbol>"], B2162 = B2155("expressionQ", function B2184 (form__2163)
{if ($T(B2156(form__2163, B2157)))
{var sequence__2175 = form__2163, B2176 = sequence__2175, B2177 = ((B2176 || false).length || 0), B2178 = 0, value__2179 = (B2177 === B2178), B2182 = !(trueQ(value__2179));
if ($T(B2182))
{var sequence__2181 = form__2163, B2183 = sequence__2181[0];
return B2156(B2183, B2161)}}}, false)
var B2185 = B1464.concatenate, B2186 = B1464["symbol-name"], B2187 = B2155("transform_setter_identifier", function B2189 (identifier__2188)
{return B2145(B2185(B2186(identifier__2188), "-setter"))}, false)
var B2190 = B1464["=="], B2191 = B1464.size, B2192 = B1464["every?"], B2193 = B1464.rcurry, B2194 = B2155("setter_identifierQ", function B2204 (form__2195)
{if ($T(B2156(form__2195, B2157)))
{var object__2197 = form__2195, B2200 = ((object__2197 || false).length || 0), B2201 = B2190(B2200, 2);
if ($T(B2201))
if ($T(B2192(B2193(B2156, B2161), form__2195)))
{var sequence__2199 = form__2195, B2202 = sequence__2199[0], B2203 = B2186(B2202);
return B2190(B2203, "setter")}}}, false)
var B2205 = B1464.second, B2206 = B2155("identifier_name", function B2212 (identifier__2207)
{var B2211;
if ($T(B2194(identifier__2207)))
{var sequence__2209 = identifier__2207, B2210 = sequence__2209[1];
B2211 = B2187(B2210)}
else B2211 = identifier__2207;
return B2186(B2211)}, false)
var B2213 = 0
{var B2214 = B2155("reset_symbol_counterN", function B2215 ()
{return B2213 = 0}, false);
exports["reset-symbol-counter!"] = B2214}
var B2216 = B1464["get-setter"], B2217 = B1464["as-string"], B2218 = B2155("generate_symbol", function B2224 (prefix__2219)
{var B2222;
if ($T(prefix__2219))
B2222 = B2185(prefix__2219, "_")
else B2222 = "$";
var B2223 = B2217(B2213 = (B2213 + 1)), name__2220 = B2185(B2222, B2223), result__2221 = B2145(name__2220);
B2216(result__2221, "generated?", true);
return result__2221}, false)
var B2225 = B2155("bindN", function B2228 (env__2226, identifier__2227)
{return B2216(env__2226, "bound?", B2186(identifier__2227), true)}, false)
var B2229 = B2155("unbindN", function B2232 (env__2230, identifier__2231)
{return B2216(env__2230, "bound?", B2186(identifier__2231), false)}, false)
var B2233 = B2136()
var B2234 = B1464.get, B2235 = B2155("find_special_form", function B2242 (form__2236, env__2237)
{if ($T(B2162(form__2236)))
{var sequence__2239 = form__2236, B2240 = sequence__2239[0], B2241 = B2186(B2240);
return B2234(B2233, B2241)}}, false)
{var B2243 = B1464["do"], B2244 = B1464.curry, B2245;
B2216(B2233, "%method", function B2250 (env__2246, arguments__2247, body__2248)
{B2243(B2244(B2225, env__2246), arguments__2247);
var expanded_body__2249 = B2245(body__2248, env__2246);
B2243(B2244(B2229, env__2246), arguments__2247);
return [B2145("%method"), arguments__2247, expanded_body__2249]})}
B2216(B2233, "%set", function B2254 (env__2251, identifier__2252, value__2253)
{return [B2145("%set"), identifier__2252, B2245(value__2253, env__2251)]})
B2216(B2233, "define", function B2258 (env__2255, identifier__2256, value__2257)
{B2225(env__2255, identifier__2256);
return [B2145("define"), identifier__2256, B2245(value__2257, env__2255)]})
B2216(B2233, "%bind", function B2266 (env__2259, binding__2260, body__2261)
{var var__2262 = binding__2260[0], value__2263 = binding__2260[1], expanded_value__2264 = B2245(value__2263, env__2259);
B2225(env__2259, var__2262);
var result__2265 = [B2145("%bind"), [var__2262, expanded_value__2264], B2245(body__2261, env__2259)];
B2229(env__2259, var__2262);
return result__2265})
{var B2267 = B2136();
exports["*core-macros*"] = B2267}
var B2269 = B2155("maybe_begin", function B2276 (expressions__2270)
{var object__2273 = expressions__2270, B2271 = ((object__2273 || false).length || 0);
if ($T(B2190(B2271, 0)))
return false
else if ($T(B2190(B2271, 1)))
{var sequence__2275 = expressions__2270;
return sequence__2275[0]}
else return B2185([B2145("%begin")], expressions__2270)}, false)
{var B2304 = $REST, B2305 = $KEY, B2306 = $K("end"), B2307 = $K("start"), B2279 = B1464["find-key"], B2280 = B1464["="], B2281 = B1464["copy-sequence"], B2282 = B1464.element, B2283 = B1464.inc, B2284 = B2155("analyze_lambda_list", function B2308 (list__2285)
{var position__2286 = function B2309 (symbol__2287)
{return B2279(list__2285, B2244(B2280, symbol__2287))}, rest__2288 = position__2286(B2304), key__2289 = position__2286(B2305), B2290 = rest__2288, B2298;
if ($T(B2290))
B2298 = B2290
else {var B2291 = key__2289;
if ($T(B2291))
B2298 = B2291
else {var object__2293 = list__2285;
B2298 = ((object__2293 || false).length || 0)}};
var B2299 = B2281(list__2285, B2306, B2298), B2301;
if ($T(rest__2288))
{var number__2295 = rest__2288, B2300 = (number__2295 + 1);
B2301 = B2282(list__2285, B2300)}
else B2301 = false;
var B2303;
if ($T(key__2289))
{var number__2297 = key__2289, B2302 = (number__2297 + 1);
B2303 = B2281(list__2285, B2307, B2302)}
else B2303 = false;
return [B2299, B2301, B2303]}, false);
exports["analyze-lambda-list"] = B2284}
var B2310 = B1464.reduce, B2311 = B2155("wrap", function B2316 (form__2312)
{var wrappers__2313 = $SL.call(arguments, 1);
return B2310(function B2317 (result__2314, wrapper__2315)
{return wrapper__2315(result__2314)}, form__2312, wrappers__2313)}, false)
var trueQ = B1464["true?"], B2320 = B1464.map, B2321 = B1464.reduce1, B2322 = B2155("wrap_restSkeys", function B2417 (body__2323, all__2324, required__2325, rest__2326, key__2327)
{var restQ__2328 = rest__2326, B2329 = rest__2326, rest__2330;
if ($T(B2329))
rest__2330 = B2329
else {var sequence__2350 = key__2327, B2351 = sequence__2350, B2352 = ((B2351 || false).length || 0), B2353 = 0, value__2354 = (B2352 === B2353), B2399 = !(trueQ(value__2354));
if ($T(B2399))
rest__2330 = B2218()
else rest__2330 = false};
return B2311(body__2323, function B2418 (body__2331)
{var sequence__2365 = key__2327, B2366 = sequence__2365, B2367 = ((B2366 || false).length || 0), B2368 = 0, B2400 = (B2367 === B2368);
if ($T(B2400))
return body__2331
else {var key_values__2333 = B2320(function B2419 (binding__2332)
{if ($T(B2156(binding__2332, B2157)))
return binding__2332
else return [binding__2332, false]}, key__2327), B2401 = B2145("bind-properties"), B2402 = B2320(B2160, key_values__2333), B2403 = B2145("%keys"), B2404 = [B2145("%object")], function__2377 = B2185, values__2378 = B2320(function B2420 (key_value__2334)
{var key__2335 = key_value__2334[0], value__2336 = key_value__2334[1];
return [B2186(key__2335), value__2336]}, key_values__2333), B2379 = values__2378, B2405 = B2379[0], B2380 = values__2378, B2406 = B2380.slice(1), B2407 = B2310(function__2377, B2405, B2406), B2408 = B2185(B2404, B2407), B2409 = [B2403, rest__2330, B2408];
return [B2401, B2402, B2409, body__2331]}}, function B2421 (body__2337)
{var B2338 = restQ__2328, B2410;
if ($T(B2338))
B2410 = B2338
else {var sequence__2392 = key__2327, B2393 = sequence__2392, B2394 = ((B2393 || false).length || 0), B2395 = 0, value__2396 = (B2394 === B2395);
B2410 = !(trueQ(value__2396))};
if ($T(B2410))
{var B2411 = B2145("bind"), B2412 = B2145("%native-call"), object__2398 = required__2325, B2413 = ((object__2398 || false).length || 0), B2414 = [B2412, "$SL.call", all__2324, B2413], B2415 = [rest__2330, B2414], B2416 = [B2415];
return [B2411, B2416, body__2337]}
else return body__2337})}, false)
B2216(B2267, "begin", function B2424 (____2422)
{var expressions__2423 = $SL.call(arguments, 1);
return B2269(expressions__2423)})
B2216(B2267, "method", function B2433 (____2426, arguments__2427)
{var body__2428 = $SL.call(arguments, 2), B2429 = B2284(arguments__2427), required__2430 = B2429[0], rest__2431 = B2429[1], key__2432 = B2429[2];
return [B2145("%method"), required__2430, B2322(B2269(body__2428), B2145("%all-arguments"), required__2430, rest__2431, key__2432)]})
{var B2434 = B1464.reverse;
B2216(B2267, "bind", function B2457 (____2435, bindings__2436)
{var body__2437 = $SL.call(arguments, 2), sequence__2450 = bindings__2436, B2451 = sequence__2450, B2452 = ((B2451 || false).length || 0), B2453 = 0, B2454 = (B2452 === B2453);
if ($T(B2454))
return B2269(body__2437)
else return B2310(function B2458 (body__2438, binding__2439)
{var B2455 = B2145("%bind"), B2456;
if ($T(B2156(binding__2439, B2161)))
B2456 = [binding__2439, false]
else B2456 = binding__2439;
return [B2455, B2456, body__2438]}, B2269(body__2437), B2434(bindings__2436))})}
B2216(B2267, "if", function B2463 (____2459, test__2460, then__2461, else__2462)
{return [B2145("%if"), test__2460, then__2461, else__2462]})
{var trueQ = B1464["true?"], B2464 = B1464.rest;
B2216(B2267, "set!", function B2487 (____2465, place__2466)
{var values__2467 = $SL.call(arguments, 2), B2480;
if ($T(B2156(place__2466, B2157)))
{var sequence__2470 = place__2466, B2478 = sequence__2470[0], B2479 = B2145("%get-property"), value__2471 = B2190(B2478, B2479);
B2480 = !(trueQ(value__2471))}
else B2480 = false;
if ($T(B2480))
{var sequence__2473 = place__2466, B2481 = sequence__2473[0], B2482 = B2187(B2481), B2483 = [B2482], sequence__2475 = place__2466, B2484 = sequence__2475.slice(1);
return B2185(B2483, B2484, values__2467)}
else {var B2485 = B2145("%set"), sequence__2477 = values__2467, B2486 = sequence__2477[0];
return [B2485, place__2466, B2486]}})}
B2216(B2267, "parallel-set!", function B2508 (____2488, var__2489, value__2490)
{var clauses__2491 = $SL.call(arguments, 3), sequence__2503 = clauses__2491, B2504 = sequence__2503, B2505 = ((B2504 || false).length || 0), B2506 = 0, B2507 = (B2505 === B2506);
if ($T(B2507))
return [B2145("set!"), var__2489, value__2490]
else {var temp__2492 = B2218();
return [B2145("bind"), [[temp__2492, value__2490]], B2185([B2145("parallel-set!")], clauses__2491), [B2145("set!"), var__2489, temp__2492]]}})
{var B2541 = $K("else"), trueQ = B1464["true?"];
B2216(B2267, "cond", function B2542 (____2510)
{var cases__2511 = $SL.call(arguments, 1), sequence__2527 = cases__2511, B2528 = sequence__2527, B2529 = ((B2528 || false).length || 0), B2530 = 0, value__2531 = (B2529 === B2530), B2536 = !(trueQ(value__2531));
if ($T(B2536))
{var sequence__2533 = cases__2511, B2512 = sequence__2533[0], test__2513 = B2512[0], then__2514 = $SL.call(B2512, 1), then__2515 = B2269(then__2514);
if ($T(B2190(test__2513, B2541)))
return then__2515
else {var B2537 = B2145("if"), B2538 = [B2145("cond")], sequence__2535 = cases__2511, B2539 = sequence__2535.slice(1), B2540 = B2185(B2538, B2539);
return [B2537, test__2513, then__2515, B2540]}}})}
B2216(B2267, "when", function B2546 (____2543, test__2544)
{var body__2545 = $SL.call(arguments, 2);
return [B2145("if"), test__2544, B2269(body__2545), false]})
B2216(B2267, "unless", function B2550 (____2547, test__2548)
{var body__2549 = $SL.call(arguments, 2);
return [B2145("if"), [B2145("not"), test__2548], B2269(body__2549), false]})
B2216(B2267, "and", function B2568 (____2552)
{var values__2553 = $SL.call(arguments, 1), object__2556 = values__2553, B2554 = ((object__2556 || false).length || 0);
if ($T(B2190(B2554, 0)))
return true
else if ($T(B2190(B2554, 1)))
{var sequence__2558 = values__2553;
return sequence__2558[0]}
else {var B2563 = B2145("when"), sequence__2560 = values__2553, B2564 = sequence__2560[0], B2565 = [B2145("and")], sequence__2562 = values__2553, B2566 = sequence__2562.slice(1), B2567 = B2185(B2565, B2566);
return [B2563, B2564, B2567]}})
B2216(B2267, "or", function B2591 (____2570)
{var values__2571 = $SL.call(arguments, 1), object__2575 = values__2571, B2572 = ((object__2575 || false).length || 0);
if ($T(B2190(B2572, 0)))
return false
else if ($T(B2190(B2572, 1)))
{var sequence__2577 = values__2571;
return sequence__2577[0]}
else {var value__2573 = B2218(), B2582 = B2145("bind"), sequence__2579 = values__2571, B2583 = sequence__2579[0], B2584 = [value__2573, B2583], B2585 = [B2584], B2586 = B2145("if"), B2587 = [B2145("or")], sequence__2581 = values__2571, B2588 = sequence__2581.slice(1), B2589 = B2185(B2587, B2588), B2590 = [B2586, value__2573, value__2573, B2589];
return [B2582, B2585, B2590]}})
B2216(B2267, "if-bind", function B2599 (____2592, binding__2593, then__2594, else__2595)
{var var__2596 = binding__2593[0], value__2597 = binding__2593[1], temp__2598 = B2218();
return [B2145("bind"), [[temp__2598, value__2597]], [B2145("if"), temp__2598, [B2145("bind"), [[var__2596, temp__2598]], then__2594], else__2595]]})
B2216(B2267, "while", function B2603 (____2600, test__2601)
{var body__2602 = $SL.call(arguments, 2);
return [B2145("%while"), test__2601, B2269(body__2602)]})
B2216(B2267, "until", function B2607 (____2604, test__2605)
{var body__2606 = $SL.call(arguments, 2);
return B2185([B2145("while"), [B2145("not"), test__2605]], body__2606)})
B2216(B2267, "dotimes", function B2626 (____2609, binding__2610)
{var body__2611 = $SL.call(arguments, 2), temp__2612 = B2218(), var__2613 = binding__2610[0], count__2614 = binding__2610[1], result__2615 = binding__2610[2], B2617 = B2145("bind"), B2618 = [[temp__2612, count__2614]], B2619 = B2145("for"), B2620 = [[var__2613, 0, [B2145("+"), var__2613, 1]]], B2621 = [B2145(">="), var__2613, temp__2612], B2616 = result__2615, B2622;
if ($T(B2616))
B2622 = B2616
else B2622 = false;
var B2623 = [B2621, B2622], B2624 = [B2619, B2620, B2623], B2625 = B2185(B2624, body__2611);
return [B2617, B2618, B2625]})
{var trueQ = B1464["true?"], B2633 = B1464["any?"], B2634 = B1464["push-last"], B2635 = B1464.slice, B2636 = B1464.third;
B2216(B2267, "for", function B2731 (____2637, clauses__2638, end__2639)
{var body__2640 = $SL.call(arguments, 3), init_clauses__2641 = [], next_clauses__2642 = [], vars__2643 = B2320(B2160, clauses__2638), B2644 = clauses__2638, B2645, B2646, B2647 = [B2644];
while ($T(true))
{var B2648 = B2645, value__2653;
if ($T(B2648))
value__2653 = B2648
else value__2653 = B2633(B2159, B2647);
var B2717 = !(trueQ(value__2653));
if ($T(B2717))
{var sequence__2655 = B2644, clause__2649 = sequence__2655[0];
(function B2732 (clause__2650)
{var array__2664 = init_clauses__2641, array__2661 = clause__2650, start__2662 = 0, end__2663 = 2, value__2665 = array__2661.slice(start__2662, end__2663);
array__2664.push(value__2665);
array__2664;
var array__2670 = next_clauses__2642, sequence__2669 = clause__2650, value__2671 = sequence__2669[0];
array__2670.push(value__2671);
array__2670;
var array__2676 = next_clauses__2642, sequence__2675 = clause__2650, value__2677 = sequence__2675[2];
array__2676.push(value__2677);
return array__2676})(clause__2649);
var sequence__2679 = B2644, B2716 = sequence__2679.slice(1);
B2644 = B2716;
B2647 = [B2644]}
else break};
B2646;
var B2718 = B2145("bind"), B2719 = B2145("while"), sequence__2690 = end__2639, B2691 = sequence__2690, B2692 = ((B2691 || false).length || 0), B2693 = 0, B2651 = (B2692 === B2693), B2722;
if ($T(B2651))
B2722 = B2651
else {var B2720 = B2145("not"), sequence__2695 = end__2639, B2721 = sequence__2695[0];
B2722 = [B2720, B2721]};
var B2723 = B2185([B2185([B2145("method"), vars__2643], body__2640)], vars__2643), B2724 = B2185([B2145("parallel-set!")], next_clauses__2642), B2725 = [B2719, B2722, B2723, B2724], B2726 = B2185(B2725), sequence__2708 = end__2639, sequence__2709 = sequence__2708.slice(1), B2710 = sequence__2709, B2711 = ((B2710 || false).length || 0), B2712 = 0, value__2713 = (B2711 === B2712), B2727 = !(trueQ(value__2713)), B2730;
if ($T(B2727))
{var B2728 = [B2145("begin")], sequence__2715 = end__2639, B2729 = sequence__2715.slice(1);
B2730 = B2185(B2728, B2729)}
else B2730 = false;
return [B2718, init_clauses__2641, B2726, B2730]})}
B2216(B2267, "for-each", function B2807 (____2734, clauses__2735, end__2736)
{var body__2737 = $SL.call(arguments, 3), clauses__2739 = B2320(function B2808 (clause__2738)
{return B2185([B2218()], clause__2738)}, clauses__2735), endQ__2740 = B2218(), values__2741 = B2218(), result__2742 = B2218(), B2779 = B2145("begin"), vars__2743 = B2320(B2205, clauses__2739), B2780 = B2185([B2185([B2145("method"), vars__2743], body__2737)], vars__2743), B2781 = [B2779, B2780], B2787 = B2320(function B2809 (clause__2744)
{var B2782 = B2145("set!"), sequence__2758 = clause__2744, B2783 = sequence__2758[0], B2784 = B2145("rest"), sequence__2760 = clause__2744, B2785 = sequence__2760[0], B2786 = [B2784, B2785];
return [B2782, B2783, B2786]}, clauses__2739), B2788 = [[B2145("set!"), values__2741, B2185([B2145("%array")], B2320(B2160, clauses__2739))]], body__2745 = B2185(B2781, B2787, B2788), B2789 = B2145("bind"), B2790 = B2185(B2320(function B2810 (clause__2746)
{var temp__2747 = clause__2746[0], var__2748 = clause__2746[1], values__2749 = clause__2746[2];
return [temp__2747, values__2749]}, clauses__2739), [[endQ__2740, false], [result__2742, false], [values__2741, B2185([B2145("%array")], B2320(B2160, clauses__2739))]]), B2791 = B2145("until"), B2792 = [B2145("or"), endQ__2740, [B2145("any?"), B2145("empty?"), values__2741]], B2793 = B2145("bind"), B2794 = B2320(function B2811 (clause__2750)
{var temp__2751 = clause__2750[0], var__2752 = clause__2750[1], values__2753 = clause__2750[2];
return [var__2752, [B2145("first"), temp__2751]]}, clauses__2739), sequence__2762 = end__2736, B2754 = sequence__2762[0], B2804;
if ($T(B2754))
{var end_test__2755 = B2754, B2795 = B2145("if"), B2796 = B2145("begin"), B2797 = B2145("set!"), sequence__2764 = end__2736, results__2756 = sequence__2764.slice(1), sequence__2775 = results__2756, B2776 = sequence__2775, B2777 = ((B2776 || false).length || 0), B2778 = 0, B2798 = (B2777 === B2778), B2799;
if ($T(B2798))
B2799 = [false]
else B2799 = results__2756;
var B2800 = B2269(B2799), B2801 = [B2797, result__2742, B2800], B2802 = [B2145("set!"), endQ__2740, true], B2803 = [B2796, B2801, B2802];
B2804 = [B2795, end_test__2755, B2803, body__2745]}
else B2804 = body__2745;
var B2805 = [B2793, B2794, B2804], B2806 = [B2791, B2792, B2805];
return [B2789, B2790, B2806, result__2742]})
B2216(B2267, "bind-properties", function B2818 (____2812, properties__2813, object__2814)
{var body__2815 = $SL.call(arguments, 3), objectT__2816 = B2218();
return B2185([B2145("bind"), B2185([[objectT__2816, object__2814]], B2320(function B2819 (property__2817)
{return [property__2817, [B2145("%get-property"), objectT__2816, B2186(property__2817)]]}, properties__2813))], body__2815)})
B2216(B2267, "select", function B2836 (____2820, value__2821, test__2822)
{var cases__2823 = $SL.call(arguments, 3), valueT__2824 = B2218(), testT__2825;
if ($T(B2156(test__2822, B2161)))
testT__2825 = test__2822
else testT__2825 = B2218();
var test_expression__2826 = function B2837 (test_value__2827)
{return [testT__2825, valueT__2824, test_value__2827]}, B2831 = B2145("bind"), B2832 = [[valueT__2824, value__2821]], B2833;
if ($T(B2156(test__2822, B2161)))
B2833 = []
else B2833 = [[testT__2825, test__2822]];
var B2834 = B2185(B2832, B2833), B2835 = B2185([B2145("cond")], B2320(function B2838 (case__2828)
{var tests__2829 = case__2828[0], then__2830 = $SL.call(case__2828, 1);
if ($T(B2190(tests__2829, B2541)))
return case__2828
else return B2185([B2185([B2145("or")], B2320(test_expression__2826, tests__2829))], then__2830)}, cases__2823));
return [B2831, B2834, B2835]})
var B2840 = B2155("destructure", function B2854 (bindings__2841, values__2842, body__2843)
{if ($T(B2156(values__2842, B2161)))
{var B2844 = B2284(bindings__2841), required__2845 = B2844[0], rest__2846 = B2844[1], key__2847 = B2844[2], object__2853 = required__2845, i__2848 = ((object__2853 || false).length || 0);
return B2310(function B2855 (body__2849, binding__2850)
{i__2848 = (i__2848 - 1);
if ($T(B2156(binding__2850, B2161)))
return [B2145("bind"), [[binding__2850, [B2145("%get-property"), values__2842, i__2848]]], body__2849]
else return B2840(binding__2850, [B2145("%get-property"), values__2842, i__2848], body__2849)}, B2322(body__2843, values__2842, required__2845, rest__2846, key__2847), B2434(required__2845))}
else {var var__2851 = B2218();
return [B2145("bind"), [[var__2851, values__2842]], B2840(bindings__2841, var__2851, body__2843)]}}, false)
B2216(B2267, "destructuring-bind", function B2860 (____2856, bindings__2857, values__2858)
{var body__2859 = $SL.call(arguments, 3);
return B2840(bindings__2857, values__2858, B2185([B2145("begin")], body__2859))})
B2216(B2267, "bind-methods", function B2868 (____2861, bindings__2862)
{var body__2863 = $SL.call(arguments, 2);
return B2185([B2145("bind"), B2320(B2160, bindings__2862)], B2320(function B2869 (binding__2864)
{var identifier__2865 = binding__2864[0], arguments__2866 = binding__2864[1], body__2867 = $SL.call(binding__2864, 2);
return [B2145("set!"), identifier__2865, B2185([B2145("method"), arguments__2866], body__2867)]}, bindings__2862), body__2863)})
B2216(B2267, "inc!", function B2879 (____2871, object__2872, value__2873)
{var B2875 = B2145("set!"), B2876 = B2145("+"), B2874 = value__2873, B2877;
if ($T(B2874))
B2877 = B2874
else B2877 = 1;
var B2878 = [B2876, object__2872, B2877];
return [B2875, object__2872, B2878]})
B2216(B2267, "dec!", function B2889 (____2881, object__2882, value__2883)
{var B2885 = B2145("set!"), B2886 = B2145("-"), B2884 = value__2883, B2887;
if ($T(B2884))
B2887 = B2884
else B2887 = 1;
var B2888 = [B2886, object__2882, B2887];
return [B2885, object__2882, B2888]})
B2216(B2267, "+", function B2907 (____2890)
{var values__2891 = $SL.call(arguments, 1), sequence__2902 = values__2891, B2903 = sequence__2902, B2904 = ((B2903 || false).length || 0), B2905 = 0, B2906 = (B2904 === B2905);
if ($T(B2906))
return 0
else return B2185([B2145("%plus")], values__2891)})
B2216(B2267, "-", function B2926 (____2908, minuend__2909)
{var subtrahends__2910 = $SL.call(arguments, 2), sequence__2921 = subtrahends__2910, B2922 = sequence__2921, B2923 = ((B2922 || false).length || 0), B2924 = 0, B2925 = (B2923 === B2924);
if ($T(B2925))
return [B2145("%native-call"), "-", minuend__2909]
else return B2185([B2145("%minus"), minuend__2909], subtrahends__2910)})
B2216(B2267, "*", function B2944 (____2927)
{var values__2928 = $SL.call(arguments, 1), sequence__2939 = values__2928, B2940 = sequence__2939, B2941 = ((B2940 || false).length || 0), B2942 = 0, B2943 = (B2941 === B2942);
if ($T(B2943))
return 1
else return B2185([B2145("%times")], values__2928)})
B2216(B2267, "/", function B2963 (____2945, numerator__2946)
{var denominators__2947 = $SL.call(arguments, 2), sequence__2958 = denominators__2947, B2959 = sequence__2958, B2960 = ((B2959 || false).length || 0), B2961 = 0, B2962 = (B2960 === B2961);
if ($T(B2962))
return [B2145("%divide"), 1, numerator__2946]
else return B2185([B2145("%divide"), numerator__2946], denominators__2947)})
B2216(B2267, "call-next-method", function B2965 (____2964)
{return [[B2145("%get-property"), B2145("next-method"), "apply"], [B2145("%native"), "null"], [B2145("%native"), "arguments"]]})
var trueQ = B1464["true?"], B2966 = B2155("transform_quoted", function B2992 (form__2967)
{if ($T(B2156(form__2967, B2157)))
{var sequence__2979 = form__2967, B2980 = sequence__2979, B2981 = ((B2980 || false).length || 0), B2982 = 0, value__2983 = (B2981 === B2982), B2988 = !(trueQ(value__2983)), B2991;
if ($T(B2988))
{var sequence__2985 = form__2967, B2989 = sequence__2985[0], B2990 = B2186(B2989);
B2991 = B2190(B2990, "%comma")}
else B2991 = false;
if ($T(B2991))
{var sequence__2987 = form__2967;
return sequence__2987[1]}
else return B2185([B2145("%array")], B2320(B2966, form__2967))}
else if ($T(B2156(form__2967, B2161)))
return [B2145("symbol"), B2186(form__2967)]
else return form__2967}, false)
B2216(B2267, "%backquote", function B2995 (____2993, exp__2994)
{return B2966(exp__2994)})
{var B3003 = $K("message"), B2996 = B1464.signal, B2997 = B1464.make, B2998 = B1464["<error>"];
B2216(B2267, "%comma", function B3004 (____2999, value__3000)
{var error__3002 = B2997(B2998, B3003, "comma not inside backquote");
throw(error__3002);
return false})}
var B3005 = B2997(B2998, B3003, "unsupported name for call in dot")
{var B3007 = B1464["<string>"];
B2216(B2267, ".", function B3022 (____3008, value__3009)
{var calls__3010 = $SL.call(arguments, 2);
return B2310(function B3023 (value__3011, call__3012)
{var property__3013 = call__3012[0], arguments__3014 = $SL.call(call__3012, 1), B3018 = B2145("%get-property"), B3015 = property__3013, B3019;
if ($T(B2156(B3015, B3007)))
B3019 = property__3013
else if ($T(B2156(B3015, B2161)))
B3019 = B2186(property__3013)
else {var error__3017 = B3005;
throw(error__3017);
B3019 = false};
var B3020 = [B3018, value__3011, B3019], B3021 = [B3020];
return B2185(B3021, arguments__3014)}, value__3009, calls__3010)})}
var B3025 = B2155("simplify_arguments", function B3037 (arguments__3026)
{var B3027 = B2284(arguments__3026), required__3028 = B3027[0], rest__3029 = B3027[1], key__3030 = B3027[2], required__3032 = B2320(function B3038 (argument__3031)
{if ($T(B2156(argument__3031, B2157)))
{var sequence__3034 = argument__3031;
return sequence__3034[0]}
else return argument__3031}, required__3028), B3035;
if ($T(rest__3029))
B3035 = B2185([B2304], rest__3029)
else B3035 = [];
var B3036;
if ($T(key__3030))
B3036 = B2185([B2305], key__3030)
else B3036 = [];
return B2185(required__3032, B3035, B3036)}, false)
var trueQ = B1464["true?"], B3043 = B1464[">"], B3044 = B1464["%keys"], B3045 = B2155("make_function_definer", function B3102 (macro_name__3046, definer_name__3047)
{var B3048 = $SL.call(arguments, 2), B3049 = B3044(B3048, {"type/existing?":false,
"record?":false}), typeSexistingQ__3050 = B3049["type/existing?"], recordQ__3051 = B3049["record?"];
return function B3103 (env__3052, identifier__3053, arguments__3054)
{var body__3055 = $SL.call(arguments, 3), B3056;
if ($T(B2194(identifier__3053)))
{var sequence__3064 = identifier__3053, B3091 = sequence__3064[1], B3092 = B2187(B3091);
B3056 = [true, B3092]}
else B3056 = [false, identifier__3053];
var setterQ__3057 = B3056[0], identifier__3058 = B3056[1], B3059 = B2156(identifier__3058, B2161), value__3066;
if ($T(B3059))
value__3066 = B3059
else value__3066 = setterQ__3057;
var B3093 = !(trueQ(value__3066));
if ($T(B3093))
{var error__3068 = B2997(B2998, B3003, B2185(macro_name__3046, ": ", "name not <var> or (setter <var>)"));
throw(error__3068);
false};
var B3094;
if ($T(typeSexistingQ__3050))
{var sequence__3079 = arguments__3054, B3080 = sequence__3079, B3081 = ((B3080 || false).length || 0), B3082 = 0;
B3094 = (B3081 === B3082)}
else B3094 = false;
if ($T(B3094))
{var error__3084 = B2997(B2998, B3003, B2185(macro_name__3046, ": ", "method has no arguments"));
throw(error__3084);
false};
var simplified_arguments__3060 = B3025(arguments__3054), method_definition__3061 = B2245(B2185([B2145("method"), simplified_arguments__3060], body__3055), env__3052);
if ($T(recordQ__3051))
B2216(env__3052, "module", "functions", B2186(identifier__3058), method_definition__3061);
var B3095 = B2145("define"), B3096 = [B2145(definer_name__3047), [B2145("%native-name"), B2186(identifier__3058)], method_definition__3061, setterQ__3057], B3100;
if ($T(typeSexistingQ__3050))
{var sequence__3086 = arguments__3054, head__3062 = sequence__3086[0], B3098;
if ($T(B2156(head__3062, B2157)))
{var object__3088 = head__3062, B3097 = ((object__3088 || false).length || 0);
B3098 = B3043(B3097, 1)}
else B3098 = false;
var B3099;
if ($T(B3098))
{var sequence__3090 = head__3062;
B3099 = sequence__3090[1]}
else B3099 = B2145("<object>");
B3100 = [B3099, identifier__3058]}
else B3100 = [];
var B3101 = B2185(B3096, B3100);
return [B3095, identifier__3058, B3101]}}, false)
{var B3129 = $K("type/existing?"), B3130 = $K("record?"), trueQ = B1464["true?"], B3109 = B1464.apply, B3110 = [["define-function", "%make-function", B3129, false, B3130, true], ["define-method", "%make-method", B3129, true]], B3111, B3112, B3113 = [B3110];
while ($T(true))
{var B3114 = B3111, value__3118;
if ($T(B3114))
value__3118 = B3114
else value__3118 = B2633(B2159, B3113);
var B3128 = !(trueQ(value__3118));
if ($T(B3128))
{var sequence__3120 = B3110, arguments__3115 = sequence__3120[0];
(function B3131 (arguments__3116)
{var sequence__3122 = arguments__3116, B3125 = sequence__3122[0], B3126 = B3109(B3045, arguments__3116);
return B2216(B2267, B3125, B3126)})(arguments__3115);
var sequence__3124 = B3110, B3127 = sequence__3124.slice(1);
B3110 = B3127;
B3113 = [B3110]}
else break};
B3112}
B2216(B2267, "define-generic", function B3135 (____3132, identifier__3133, arguments__3134)
{return [B2145("define"), identifier__3133, [B2145("%make-generic"), [B2145("%native-name"), B2186(identifier__3133)]]]})
{var trueQ = B1464["true?"];
B2216(B2267, "define-class", function B3208 (____3141, identifier__3142, superclass__3143)
{var properties__3144 = $SL.call(arguments, 3), object__3145 = [B2145("%object")], B3146 = properties__3144, B3147, B3148, B3149 = [B3146];
while ($T(true))
{var B3150 = B3147, value__3154;
if ($T(B3150))
value__3154 = B3150
else value__3154 = B2633(B2159, B3149);
var B3202 = !(trueQ(value__3154));
if ($T(B3202))
{var sequence__3156 = B3146, property__3151 = sequence__3156[0];
(function B3209 (property__3152)
{if ($T(B2156(property__3152, B2157)))
{var array__3161 = object__3145, sequence__3160 = property__3152, B3197 = sequence__3160[0], value__3162 = B2186(B3197);
array__3161.push(value__3162);
array__3161;
var array__3167 = object__3145, B3198 = B2145("method"), B3199 = [], sequence__3166 = property__3152, B3200 = sequence__3166[1], value__3168 = [B3198, B3199, B3200];
array__3167.push(value__3168);
return array__3167}
else {var array__3171 = object__3145, value__3172 = B2186(property__3152);
array__3171.push(value__3172);
array__3171;
var array__3175 = object__3145, value__3176 = undefined;
array__3175.push(value__3176);
return array__3175}})(property__3151);
var sequence__3178 = B3146, B3201 = sequence__3178.slice(1);
B3146 = B3201;
B3149 = [B3146]}
else break};
B3148;
var B3203 = B2145("define"), B3204 = B2145("%make-class"), sequence__3190 = superclass__3143, B3191 = sequence__3190, B3192 = ((B3191 || false).length || 0), B3193 = 0, value__3194 = (B3192 === B3193), B3205 = !(trueQ(value__3194)), B3206;
if ($T(B3205))
{var sequence__3196 = superclass__3143;
B3206 = sequence__3196[0]}
else B3206 = false;
var B3207 = [B3204, B3206, object__3145];
return [B3203, identifier__3142, B3207]})}
var B3210 = B2155("get_import_module_nameSoptions", function B3219 (import__3211)
{var B3216;
if ($T(B2156(import__3211, B2157)))
{var sequence__3213 = import__3211;
B3216 = sequence__3213[0]}
else B3216 = import__3211;
var B3217 = B2186(B3216), B3218;
if ($T(B2156(import__3211, B2157)))
{var sequence__3215 = import__3211;
B3218 = sequence__3215.slice(1)}
else B3218 = [];
return [B3217, B3218]}, false)
{var B3224, B3225, B3226;
B2216(B2267, "define-module", function B3243 (env__3227, ____3228)
{var B3229 = $SL.call(arguments, 2), B3230 = B3044(B3229, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), import__3231 = B3230["import"], export__3232 = B3230["export"], compile_time_import__3233 = B3230["compile-time-import"], inline__3234 = B3230.inline;
B2216(env__3227, "module", "exports", B2320(B2206, export__3232));
B2243(function B3244 (import__3235)
{var B3236 = B3210(import__3235), module_name__3237 = B3236[0], options__3238 = B3236[1];
return B3109(B3224, env__3227, module_name__3237, options__3238)}, compile_time_import__3233);
B2216(env__3227, "module", "inline", B2320(B2206, inline__3234));
return B2269(B2320(function B3245 (import__3239)
{var B3240 = B3210(import__3239), module_name__3241 = B3240[0], options__3242 = B3240[1];
B3109(B3225, B2234(env__3227, "module"), module_name__3241, options__3242);
return B3226(module_name__3241, env__3227)}, import__3231))})}
B3226 = B2155("make_import_definition", function B3249 (module_name__3246, env__3247)
{var identifier__3248 = B2218();
B2216(env__3247, "import-identifiers", module_name__3246, identifier__3248);
return [B2145("define"), identifier__3248, [[B2145("%native"), "require"], module_name__3246]]}, false)
B2216(B2267, "define-macro", function B3254 (env__3250, identifier__3251, arguments__3252)
{var body__3253 = $SL.call(arguments, 3);
return [B2145("begin"), B2185([B2145("define-function"), identifier__3251, B2185([B2218()], arguments__3252)], body__3253), [B2145("set!"), [B2145("%get-property"), identifier__3251, "%macro?"], true]]})
B2216(B2267, "define-symbol-macro", function B3259 (env__3255, identifier__3256, arguments__3257)
{var body__3258 = $SL.call(arguments, 3);
return [B2145("begin"), B2185([B2145("define-function"), identifier__3256, []], body__3258), [B2145("set!"), [B2145("%get-property"), identifier__3256, "%symbol-macro?"], true]]})
B2216(B2267, "handler-case", function B3276 (____3263, body__3264)
{var cases__3265 = $SL.call(arguments, 2), condition_var__3266 = B2218();
return [B2145("%try"), body__3264, condition_var__3266, B2185([B2145("cond")], B2320(function B3277 (case__3267)
{var B3268 = case__3267[0], type__3269 = B3268[0], B3270 = $SL.call(B3268, 1), B3271 = B3044(B3270, {condition:false}), condition__3272 = B3271.condition, body__3273 = $SL.call(case__3267, 1), B3274 = [[B2145("instance?"), condition_var__3266, type__3269]], B3275;
if ($T(condition__3272))
B3275 = [B2185([B2145("bind"), [[condition__3272, condition_var__3266]]], body__3273)]
else B3275 = body__3273;
return B2185(B3274, B3275)}, cases__3265))]})
{var B3278, B3279 = B1464.identity, B3280 = B2155("lift_defines", function B3283 (exp__3281, env__3282)
{return B3278(exp__3281, env__3282, B3279)}, false);
exports["lift-defines"] = B3280}
{var B3289, B3290 = B1464["has?"], B3291;
B3278 = B2155("lift_define", function B3340 (exp__3292, env__3293, k__3294)
{if ($T(B2162(exp__3292)))
{var sequence__3331 = exp__3292, B3336 = sequence__3331[0], B3295 = B2186(B3336);
if ($T(B2190(B3295, "%bind")))
{var ____3296 = exp__3292[0], B3297 = exp__3292[1], var__3298 = B3297[0], value__3299 = B3297[1], body__3300 = exp__3292[2];
return B3278(value__3299, env__3293, function B3341 (lvalue__3301, env__3302)
{return B3278(body__3300, env__3302, function B3342 (lbody__3303, env__3304)
{return k__3294([B2145("%bind"), [var__3298, lvalue__3301], lbody__3303], env__3304)})})}
else if ($T(B2190(B3295, "%try")))
{var m__3305 = exp__3292[0], e1__3306 = exp__3292[1], v__3307 = exp__3292[2], e2__3308 = exp__3292[3];
return B3289([e1__3306, e2__3308], env__3293, function B3343 (leT__3309, env__3310)
{var le1__3311 = leT__3309[0], le2__3312 = leT__3309[1];
return k__3294([m__3305, le1__3311, v__3307, le2__3312], env__3310)})}
else {var B3313 = B2190(B3295, "%method"), B3337;
if ($T(B3313))
B3337 = B3313
else B3337 = B2190(B3295, "%set");
if ($T(B3337))
{var m__3314 = exp__3292[0], e1__3315 = exp__3292[1], e2__3316 = exp__3292[2];
return B3278(e2__3316, env__3293, function B3344 (le2__3317, env__3318)
{return k__3294([m__3314, e1__3315, le2__3317], env__3318)})}
else {var B3319 = B2190(B3295, "%begin"), B3338;
if ($T(B3319))
B3338 = B3319
else {var B3320 = B2190(B3295, "%if");
if ($T(B3320))
B3338 = B3320
else B3338 = B2190(B3295, "%while")};
if ($T(B3338))
{var m__3321 = exp__3292[0], eT__3322 = $SL.call(exp__3292, 1);
return B3289(eT__3322, env__3293, function B3345 (leT__3323, env__3324)
{return k__3294(B2185([m__3321], leT__3323), env__3324)})}
else if ($T(B2190(B3295, "define")))
{var ____3325 = exp__3292[0], var__3326 = exp__3292[1], value__3327 = exp__3292[2], exportQ__3328 = exp__3292[3], name__3329 = B2186(var__3326), object__3334 = B2234(env__3293, "defined?"), property__3335 = name__3329, B3339 = $HP.call(object__3334,property__3335);
if ($T(B3339))
return k__3294([B2145("%set"), var__3326, value__3327], env__3293)
else {B2216(env__3293, "defined?", name__3329, true);
return [B2145("%begin"), [B2145("%define"), var__3326], k__3294([B2145("%set"), var__3326, value__3327], env__3293)]}}
else return B3291(exp__3292, env__3293, k__3294)}}}
else return k__3294(exp__3292, env__3293)}, false)}
B3289 = B2155("lift_defineT", function B3364 (expT__3346, env__3347, k__3348)
{var sequence__3359 = expT__3346, B3360 = sequence__3359, B3361 = ((B3360 || false).length || 0), B3362 = 0, B3363 = (B3361 === B3362);
if ($T(B3363))
return k__3348([], env__3347)
else return B3291(expT__3346, env__3347, k__3348)}, false)
B3291 = B2155("lift_defineTT", function B3380 (exp__3365, env__3366, k__3367)
{var sequence__3373 = exp__3365, B3376 = sequence__3373[0], B3379 = function B3381 (t__3368, env__3369)
{var sequence__3375 = exp__3365, B3377 = sequence__3375.slice(1), B3378 = function B3382 (tT__3370, env__3371)
{return k__3367(B2185([t__3368], tT__3370), env__3371)};
return B3289(B3377, env__3369, B3378)};
return B3278(B3376, env__3366, B3379)}, false)
{var B3383 = B2136();
exports["*core-symbol-macros*"] = B3383}
B2216(B3383, "next-method", function B3385 (____3384)
{return [B2145("%next-method"), B2145("%this-method")]})
var trueQ = B1464["true?"], B3387 = B2155("find_macro_definition", function B3419 (form__3388, env__3389)
{var B3390 = form__3388;
if ($T(B2156(B3390, B2157)))
{var sequence__3403 = form__3388, B3404 = sequence__3403, B3405 = ((B3404 || false).length || 0), B3406 = 0, B3415 = (B3405 === B3406);
if ($T(B3415))
{var error__3408 = "Empty form";
throw(error__3408);
false};
var sequence__3410 = form__3388, B3416 = sequence__3410[0], name__3391 = B2186(B3416), value__3412 = B2234(env__3389, "bound?", name__3391), B3417 = !(trueQ(value__3412));
if ($T(B3417))
return env__3389.macros[name__3391]}
else if ($T(B2156(B3390, B2161)))
{var name__3392 = B2186(form__3388), value__3414 = B2234(env__3389, "bound?", name__3392), B3418 = !(trueQ(value__3414));
if ($T(B3418))
return env__3389["symbol-macros"][name__3392]}}, false)
{var B3421 = B2155("macroexpand_1", function B3429 (form__3422, env__3423)
{var B3424 = B3387(form__3422, env__3423);
if ($T(B3424))
{var macro__3425 = B3424, B3428;
if ($T(B2156(form__3422, B2157)))
{var sequence__3427 = form__3422;
B3428 = sequence__3427.slice(1)}
else B3428 = form__3422;
return B3109(macro__3425, env__3423, B3428)}
else return form__3422}, false);
exports["macroexpand-1"] = B3421}
{var trueQ = B1464["true?"], B3430 = B2155("macroexpand", function B3438 (form__3431, env__3432)
{var doneQ__3433;
while ($T(true))
{var value__3436 = doneQ__3433, B3437 = !(trueQ(value__3436));
if ($T(B3437))
{var expanded__3434 = B3421(form__3431, env__3432);
doneQ__3433 = B2190(expanded__3434, form__3431);
form__3431 = expanded__3434}
else break};
return form__3431}, false);
exports.macroexpand = B3430}
{B2245 = B2155("macroexpand_all", function B3449 (form__3441, env__3442)
{var B3443 = form__3441;
if ($T(B2156(B3443, B2157)))
if ($T(B3387(form__3441, env__3442)))
return B2245(B3430(form__3441, env__3442), env__3442)
else {var B3444 = B2235(form__3441, env__3442);
if ($T(B3444))
{var expander__3445 = B3444, sequence__3447 = form__3441, B3448 = sequence__3447.slice(1);
return B3109(expander__3445, env__3442, B3448)}
else return B2320(B2193(B2245, env__3442), form__3441)}
else if ($T(B2156(B3443, B2161)))
if ($T(B3387(form__3441, env__3442)))
return B2245(B3430(form__3441, env__3442), env__3442)
else return form__3441
else return form__3441}, false);
exports["macroexpand-all"] = B2245}
var B3451 = B2155("find_moduleSimport_name", function B3461 (definition_name__3452, env__3453)
{return B2633(function B3462 (import__3454)
{var module__3455 = import__3454[0], names__3456 = import__3454[1];
return B2633(function B3463 (name__3457)
{var B3458;
if ($T(B2156(name__3457, B2157)))
B3458 = name__3457
else B3458 = [name__3457, name__3457];
var import_name__3459 = B3458[0], new_name__3460 = B3458[1];
if ($T(B2190(definition_name__3452, new_name__3460)))
return [module__3455, import_name__3459]}, names__3456)}, B2234(env__3453, "module", "imports"))}, false)
var B3464 = B2155("find_import_identifier", function B3467 (module__3465, env__3466)
{return B2234(env__3466, "import-identifiers", B2234(module__3465, "name"))}, false)
{var B3468 = B1464["set-subtract!"], B3469, B3470 = B1464["as-set"], B3471 = B1464["object-properties"], B3472 = B2155("define_free_variables", function B3500 (exp__3473, env__3474)
{var variables__3475 = B3468(B3468(B3469(exp__3473), B3470(B2320(B2145, B3471(B2234(env__3474, "defined?"))))), B2146), sequence__3492 = variables__3475, B3493 = sequence__3492, B3494 = ((B3493 || false).length || 0), B3495 = 0, B3496 = (B3494 === B3495);
if ($T(B3496))
return exp__3473
else return B2185([B2145("%begin")], B2320(function B3501 (variable__3476)
{var name__3477 = B2186(variable__3476);
B2216(env__3474, "defined?", name__3477, true);
var B3497 = [[B2145("%define"), variable__3476]], moduleSimport_name__3478 = B3451(name__3477, env__3474), B3498;
if ($T(moduleSimport_name__3478))
{var module__3479 = moduleSimport_name__3478[0], import_name__3480 = moduleSimport_name__3478[1], import_identifier__3481 = B3464(module__3479, env__3474);
B3498 = [[B2145("%set"), variable__3476, [B2145("%get-property"), import_identifier__3481, import_name__3480]]]}
else B3498 = [];
var B3499 = B2185(B3497, B3498);
return B2269(B3499)}, variables__3475), [exp__3473])}, false);
exports["define-free-variables"] = B3472}
var trueQ = B1464["true?"], B3502 = B1464.choose, B3503 = B2155("define_free_variables2", function B3540 (exp__3504, env__3505)
{var free__3506 = B3468(B3469(exp__3504), B2146), variables__3508 = B3502(function B3541 (variable__3507)
{var object__3519 = B2234(env__3505, "definition-names"), property__3520 = B2186(variable__3507), value__3521 = $HP.call(object__3519,property__3520);
return !(trueQ(value__3521))}, free__3506), sequence__3532 = variables__3508, B3533 = sequence__3532, B3534 = ((B3533 || false).length || 0), B3535 = 0, B3536 = (B3534 === B3535);
if ($T(B3536))
return exp__3504
else return B2185([B2145("%begin")], B2320(function B3542 (variable__3509)
{var name__3510 = B2186(variable__3509);
B2216(env__3505, "defined?", name__3510, true);
var B3537 = [[B2145("%define"), variable__3509]], moduleSimport_name__3511 = B3451(name__3510, env__3505), B3538;
if ($T(moduleSimport_name__3511))
{var module__3512 = moduleSimport_name__3511[0], import_name__3513 = moduleSimport_name__3511[1], old_import_identifier__3514 = B3464(module__3512, env__3505), import_identifier__3515 = B2234(env__3505, "new-identifiers", B2186(old_import_identifier__3514));
B3538 = [[B2145("%set"), variable__3509, [B2145("%get-property"), import_identifier__3515, import_name__3513]]]}
else B3538 = [];
var B3539 = B2185(B3537, B3538);
return B2269(B3539)}, variables__3508), [exp__3504])}, false)
{var trueQ = B1464["true?"], B3558 = B1464["set-union!"];
B3469 = B2155("find_free_variables", function B3652 (exp__3559)
{var B3633;
if ($T(B2156(exp__3559, B2157)))
{var sequence__3602 = exp__3559, B3603 = sequence__3602, B3604 = ((B3603 || false).length || 0), B3605 = 0, value__3606 = (B3604 === B3605);
B3633 = !(trueQ(value__3606))}
else B3633 = false;
if ($T(B3633))
{var sequence__3608 = exp__3559, head__3560 = sequence__3608[0], name__3561;
if ($T(B2156(head__3560, B2161)))
name__3561 = B2186(head__3560)
else name__3561 = false;
var B3562 = name__3561;
if ($T(B2190(B3562, "%method")))
{var ____3563 = exp__3559[0], arguments__3564 = exp__3559[1], body__3565 = exp__3559[2];
return B3468(B3469(body__3565), B3470(arguments__3564))}
else if ($T(B2190(B3562, "%bind")))
{var ____3566 = exp__3559[0], B3567 = exp__3559[1], var__3568 = B3567[0], value__3569 = B3567[1], body__3570 = exp__3559[2];
return B3558(B3468(B3469(body__3570), B3470([var__3568])), B3469(value__3569))}
else if ($T(B2190(B3562, "%begin")))
{var definitions__3571 = [], B3638 = function B3653 (result__3572, e__3573)
{var B3636;
if ($T(B2162(e__3573)))
{var sequence__3610 = e__3573, B3634 = sequence__3610[0], B3635 = B2145("%define");
B3636 = B2190(B3634, B3635)}
else B3636 = false;
var B3637;
if ($T(B3636))
{var array__3615 = definitions__3571, sequence__3614 = e__3573, value__3616 = sequence__3614[1];
array__3615.push(value__3616);
array__3615;
B3637 = []}
else B3637 = B3469(e__3573);
return B2185(result__3572, B3637)}, B3639 = [], sequence__3618 = exp__3559, B3640 = sequence__3618.slice(1), B3641 = B2310(B3638, B3639, B3640), B3642 = B3470(B3641), B3643 = B3470(definitions__3571);
return B3468(B3642, B3643)}
else if ($T(B2190(B3562, "%try")))
{var ____3574 = exp__3559[0], e1__3575 = exp__3559[1], v__3576 = exp__3559[2], e2__3577 = exp__3559[3];
return B3468(B3558(B3470(B3469(e1__3575)), B3470(B3469(e2__3577))), B3470([v__3576]))}
else {var B3578 = B2190(B3562, "%set"), B3644;
if ($T(B3578))
B3644 = B3578
else {var B3579 = B2190(B3562, "%if");
if ($T(B3579))
B3644 = B3579
else {var B3580 = B2190(B3562, "%while");
if ($T(B3580))
B3644 = B3580
else {var B3581 = B2190(B3562, "%array");
if ($T(B3581))
B3644 = B3581
else {var B3582 = B2190(B3562, "%object");
if ($T(B3582))
B3644 = B3582
else {var B3583 = B2190(B3562, "%infix");
if ($T(B3583))
B3644 = B3583
else {var B3584 = B2190(B3562, "%get-property");
if ($T(B3584))
B3644 = B3584
else {var B3585 = B2190(B3562, "%native-call");
if ($T(B3585))
B3644 = B3585
else {var B3586 = B2190(B3562, "%plus");
if ($T(B3586))
B3644 = B3586
else {var B3587 = B2190(B3562, "%minus");
if ($T(B3587))
B3644 = B3587
else {var B3588 = B2190(B3562, "%times");
if ($T(B3588))
B3644 = B3588
else B3644 = B2190(B3562, "%divide")}}}}}}}}}};
if ($T(B3644))
{var B3645 = [], sequence__3620 = exp__3559, B3646 = sequence__3620.slice(1), B3647 = B2320(B3469, B3646), B3648 = B2310(B2185, B3645, B3647);
return B3470(B3648)}
else {var B3589 = B2190(B3562, "%native"), B3649;
if ($T(B3589))
B3649 = B3589
else {var B3590 = B2190(B3562, "%native-name");
if ($T(B3590))
B3649 = B3590
else B3649 = B2190(B3562, "%define")};
if ($T(B3649))
return B3470([])
else {var function__3629 = B3558, values__3630 = B2320(B3469, exp__3559), B3631 = values__3630, B3650 = B3631[0], B3632 = values__3630, B3651 = B3632.slice(1);
return B2310(function__3629, B3650, B3651)}}}}
else if ($T(B2156(exp__3559, B2161)))
return B3470([exp__3559])
else return B3470([])}, false)}
var trueQ = B1464["true?"], B3654 = B2155("ensure_naming_structure", function B3665 (env__3655, module_name__3656, name__3657)
{var value__3660 = B2234(env__3655, "identifiers", module_name__3656), B3663 = !(trueQ(value__3660));
if ($T(B3663))
B2216(env__3655, "identifiers", module_name__3656, B2136());
var module_renamings__3658 = B2234(env__3655, "identifiers", module_name__3656), value__3662 = B2234(module_renamings__3658, name__3657), B3664 = !(trueQ(value__3662));
if ($T(B3664))
B2216(module_renamings__3658, name__3657, []);
return env__3655}, false)
var B3667 = B2155("get_module_nameSname", function B3672 (identifier__3668)
{var B3669 = B2234(identifier__3668, "module"), B3670;
if ($T(B3669))
B3670 = B3669
else B3670 = "";
var B3671 = B2186(identifier__3668);
return [B3670, B3671]}, false)
var trueQ = B1464["true?"], B3674 = B1464.push, B3675 = B2155("rename_identifiers", function B3691 (identifiers__3676, env__3677)
{return B2320(function B3692 (identifier__3678)
{var B3679 = B3667(identifier__3678), module_name__3680 = B3679[0], name__3681 = B3679[1], value__3684 = B2234(identifier__3678, "generated?"), B3689 = !(trueQ(value__3684)), B3690;
if ($T(B3689))
B3690 = name__3681
else B3690 = false;
var new_identifier__3682 = B2218(B3690);
B3654(env__3677, module_name__3680, name__3681);
var array__3687 = B2234(env__3677, "identifiers", module_name__3680, name__3681), value__3688 = new_identifier__3682;
array__3687.unshift(value__3688);
array__3687;
return new_identifier__3682}, identifiers__3676)}, false)
var trueQ = B1464["true?"], B3699 = B1464.pop, B3700 = B2155("restore_identifiers", function B3723 (identifiers__3701, env__3702)
{var B3703 = identifiers__3701, B3704, B3705, B3706 = [B3703];
while ($T(true))
{var B3707 = B3704, value__3714;
if ($T(B3707))
value__3714 = B3707
else value__3714 = B2633(B2159, B3706);
var B3722 = !(trueQ(value__3714));
if ($T(B3722))
{var sequence__3716 = B3703, identifier__3708 = sequence__3716[0];
(function B3724 (identifier__3709)
{var B3710 = B3667(identifier__3709), module_name__3711 = B3710[0], name__3712 = B3710[1], array__3718 = B2234(env__3702, "identifiers", module_name__3711, name__3712);
return array__3718.shift()})(identifier__3708);
var sequence__3720 = B3703, B3721 = sequence__3720.slice(1);
B3703 = B3721;
B3706 = [B3703]}
else break};
return B3705}, false)
var B3725 = B2136()
var B3728 = B2155("find_identifier", function B3738 (identifier__3729, env__3730)
{var B3731 = B3667(identifier__3729), module_name__3732 = B3731[0], name__3733 = B3731[1], B3734 = B2234(env__3730, "identifiers", module_name__3732, name__3733);
if ($T(B3734))
{var renamings__3735 = B3734, sequence__3737 = renamings__3735;
return sequence__3737[0]}
else return B3725}, false)
{var B3745 = B1464["second-setter"], B3746 = B2155("alpha_convert", function B3792 (form__3747, env__3748)
{var B3749 = form__3747;
if ($T(B2156(B3749, B2157)))
{var sequence__3782 = form__3747, B3791 = sequence__3782[0], B3750 = B2186(B3791);
if ($T(B2190(B3750, "%method")))
{var ____3751 = form__3747[0], arguments__3752 = form__3747[1], body__3753 = form__3747[2], new_arguments__3754 = B3675(arguments__3752, env__3748), new_body__3755 = B3746(body__3753, env__3748), result__3756 = [____3751, new_arguments__3754, new_body__3755];
B3700(arguments__3752, env__3748);
return result__3756}
else if ($T(B2190(B3750, "%bind")))
{var ____3757 = form__3747[0], B3758 = form__3747[1], var__3759 = B3758[0], value__3760 = B3758[1], body__3761 = form__3747[2], new_value__3762 = B3746(value__3760, env__3748), B3763 = B3675([var__3759], env__3748), new_var__3764 = B3763[0], result__3765 = [B2145("%bind"), [new_var__3764, new_value__3762], B3746(body__3761, env__3748)];
B3700([var__3759], env__3748);
return result__3765}
else if ($T(B2190(B3750, "%try")))
{var ____3766 = form__3747[0], body__3767 = form__3747[1], var__3768 = form__3747[2], catch__3769 = form__3747[3], new_body__3770 = B3746(body__3767, env__3748), B3771 = B3675([var__3768], env__3748), new_var__3772 = B3771[0], result__3773 = [B2145("%try"), new_body__3770, new_var__3772, B3746(catch__3769, env__3748)];
B3700([var__3768], env__3748);
return result__3773}
else if ($T(B2190(B3750, "%define")))
{var ____3774 = form__3747[0], identifier__3775 = form__3747[1], B3776 = B3667(identifier__3775), module_name__3777 = B3776[0], name__3778 = B3776[1], new_identifier__3779 = B2218();
B3654(env__3748, module_name__3777, name__3778);
var array__3785 = B2234(env__3748, "identifiers", module_name__3777, name__3778), value__3786 = new_identifier__3779;
array__3785.push(value__3786);
array__3785;
B2216(env__3748, "definition-names", B2186(new_identifier__3779), name__3778);
B2216(env__3748, "new-identifiers", name__3778, new_identifier__3779);
var array__3789 = form__3747, value__3790 = new_identifier__3779;
array__3789[1] = value__3790;
return form__3747}
else return B2320(B2193(B3746, env__3748), form__3747)}
else if ($T(B2156(B3749, B2161)))
{var value__3780 = B3728(form__3747, env__3748);
if ($T(B2190(value__3780, B3725)))
return form__3747
else return value__3780}
else return form__3747}, false);
exports["alpha-convert"] = B3746}
var trueQ = B1464["true?"], dec = B1464.dec, B3811 = B1464["last-setter"], B3812 = B1464.last, B3813, B3814, B3815 = B2155("inline", function B3926 (form__3816, env__3817)
{var B3909;
if ($T(B2156(form__3816, B2157)))
{var sequence__3860 = form__3816, B3861 = sequence__3860, B3862 = ((B3861 || false).length || 0), B3863 = 0, value__3864 = (B3862 === B3863);
B3909 = !(trueQ(value__3864))}
else B3909 = false;
if ($T(B3909))
{var sequence__3866 = form__3816, B3910 = sequence__3866[0], B3911 = B2156(B3910, B2161);
if ($T(B3911))
{var sequence__3868 = form__3816, B3912 = sequence__3868[0], B3818 = B2186(B3912), B3819 = B2190(B3818, "%method"), B3913;
if ($T(B3819))
B3913 = B3819
else B3913 = B2190(B3818, "%set");
if ($T(B3913))
{var array__3881 = form__3816, array__3878 = form__3816, B3879 = array__3878, B3880 = ((B3879 || false).length || 0), B3914 = (B3880 - 1), B3915 = array__3878[B3914], value__3882 = B3815(B3915, env__3817);
array__3881[dec(B2191(array__3881), 1)] = value__3882;
return form__3816}
else if ($T(B2190(B3818, "%bind")))
{var ____3820 = form__3816[0], binding__3821 = form__3816[1], body__3822 = form__3816[2], array__3887 = binding__3821, sequence__3886 = binding__3821, B3916 = sequence__3886[1], value__3888 = B3815(B3916, env__3817);
array__3887[1] = value__3888;
var array__3891 = form__3816, value__3892 = B3815(body__3822, env__3817);
array__3891[dec(B2191(array__3891), 1)] = value__3892;
return form__3816}
else if ($T(B2190(B3818, "%try")))
{var ____3823 = form__3816[0], body__3824 = form__3816[1], var__3825 = form__3816[2], catch__3826 = form__3816[3], array__3895 = form__3816, value__3896 = B3815(body__3824, env__3817);
array__3895[1] = value__3896;
var array__3899 = form__3816, value__3900 = B3815(catch__3826, env__3817);
array__3899[dec(B2191(array__3899), 1)] = value__3900;
return form__3816}
else {var B3827 = B2190(B3818, "%begin"), B3917;
if ($T(B3827))
B3917 = B3827
else {var B3828 = B2190(B3818, "%if");
if ($T(B3828))
B3917 = B3828
else {var B3829 = B2190(B3818, "%while");
if ($T(B3829))
B3917 = B3829
else {var B3830 = B2190(B3818, "%array");
if ($T(B3830))
B3917 = B3830
else {var B3831 = B2190(B3818, "%object");
if ($T(B3831))
B3917 = B3831
else {var B3832 = B2190(B3818, "%get-property");
if ($T(B3832))
B3917 = B3832
else {var B3833 = B2190(B3818, "%native-call");
if ($T(B3833))
B3917 = B3833
else {var B3834 = B2190(B3818, "%infix");
if ($T(B3834))
B3917 = B3834
else {var B3835 = B2190(B3818, "%plus");
if ($T(B3835))
B3917 = B3835
else {var B3836 = B2190(B3818, "%minus");
if ($T(B3836))
B3917 = B3836
else {var B3837 = B2190(B3818, "%times");
if ($T(B3837))
B3917 = B3837
else B3917 = B2190(B3818, "%divide")}}}}}}}}}};
if ($T(B3917))
{var sequence__3902 = form__3816, B3918 = sequence__3902[0], B3919 = [B3918], B3920 = B2193(B3815, env__3817), sequence__3904 = form__3816, B3921 = sequence__3904.slice(1), B3922 = B2320(B3920, B3921);
return B2185(B3919, B3922)}
else {var B3838 = B2190(B3818, "%native"), B3923;
if ($T(B3838))
B3923 = B3838
else {var B3839 = B2190(B3818, "%native-name");
if ($T(B3839))
B3923 = B3839
else B3923 = B2190(B3818, "%define")};
if ($T(B3923))
return form__3816
else {var sequence__3906 = form__3816, B3924 = sequence__3906[0], name__3840 = B2186(B3924), B3841 = B2234(env__3817, "definition-names", name__3840), definition_name__3842;
if ($T(B3841))
definition_name__3842 = B3841
else definition_name__3842 = name__3840;
var B3843;
if ($T(B3814(B2234(env__3817, "module"), definition_name__3842)))
B3843 = B2234(env__3817, "module", "functions", definition_name__3842)
else B3843 = false;
var definition__3848;
if ($T(B3843))
definition__3848 = B3843
else {var B3844 = B3451(definition_name__3842, env__3817);
if ($T(B3844))
{var moduleSimport_name__3845 = B3844, module__3846 = moduleSimport_name__3845[0], import_name__3847 = moduleSimport_name__3845[1];
if ($T(B3814(module__3846, import_name__3847)))
definition__3848 = B2234(module__3846, "functions", import_name__3847)
else definition__3848 = false}
else definition__3848 = false};
if ($T(definition__3848))
{var sequence__3908 = form__3816, B3925 = sequence__3908.slice(1);
return B3813(definition__3848, B3925, env__3817)}
else return B2320(B2193(B3815, env__3817), form__3816)}}}}
else return B2320(B2193(B3815, env__3817), form__3816)}
else return form__3816}, false)
B3814 = B2155("inlineQ", function B3929 (module__3927, name__3928)
{return B2633(B2244(B2190, name__3928), B2234(module__3927, "inline"))}, false)
{var trueQ = B1464["true?"], B3932 = B1464[">="];
B3813 = B2155("inline_definition", function B3962 (definition__3933, values__3934, env__3935)
{var ____3936 = definition__3933[0], arguments__3937 = definition__3933[1], body__3938 = definition__3933[2], body__3941 = B2310(function B3963 (body__3939, argument__3940)
{return [B2145("%bind"), [argument__3940, argument__3940], body__3939]}, body__3938, B2434(arguments__3937)), inlined__3942 = B3815(body__3941, env__3935), prepared__3943 = B3746(inlined__3942, env__3935), object__3954 = arguments__3937, B3944 = ((object__3954 || false).length || 0), i__3945 = 0;
while ($T(true))
{var value__3956 = B3932(i__3945, B3944), B3961 = !(trueQ(value__3956));
if ($T(B3961))
{(function B3964 (i__3946)
{var argument__3947 = B2282(arguments__3937, i__3946), value__3948 = B2282(values__3934, i__3946), B3949 = B3667(argument__3947), module_name__3950 = B3949[0], name__3951 = B3949[1];
B3654(env__3935, module_name__3950, name__3951);
var array__3959 = B2234(env__3935, "identifiers", module_name__3950, name__3951), value__3960;
if ($T(value__3948))
value__3960 = B3815(value__3948, env__3935)
else value__3960 = [B2145("%native"), "undefined"];
array__3959.unshift(value__3960);
return array__3959})(i__3945);
i__3945 = (i__3945 + 1)}
else break};
false;
var result__3952 = B3746(body__3941, env__3935);
B3700(arguments__3937, env__3935);
return result__3952}, false)}
{var B3965 = B1464["<number>"], B3966 = B1464["<boolean>"], B3967 = B1464["<keyword>"], B3968 = B2155("atomicQ", function B3970 (expression__3969)
{return B2633(B2244(B2156, expression__3969), [B3965, B3966, B3007, B2161, B3967])}, false);
exports["atomic?"] = B3968}
{var B3971, B3972 = B2155("normalize_term", function B3974 (expression__3973)
{return B3971(expression__3973, B3279)}, false);
exports["normalize-term"] = B3972}
{var trueQ = B1464["true?"], B3977, B3978, B3979;
B3971 = B2155("normalize", function B4048 (exp__3980, k__3981)
{var B4044;
if ($T(B2156(exp__3980, B2157)))
{var sequence__4023 = exp__3980, B4024 = sequence__4023, B4025 = ((B4024 || false).length || 0), B4026 = 0, value__4027 = (B4025 === B4026);
B4044 = !(trueQ(value__4027))}
else B4044 = false;
if ($T(B4044))
{var sequence__4029 = exp__3980, B4045 = sequence__4029[0], B3982 = B2186(B4045);
if ($T(B2190(B3982, "%method")))
{var ____3983 = exp__3980[0], arguments__3984 = exp__3980[1], body__3985 = exp__3980[2];
return k__3981([B2145("%method"), arguments__3984, B3972(body__3985)])}
else if ($T(B2190(B3982, "%begin")))
{var ____3986 = exp__3980[0], exp1__3987 = exp__3980[1], eT__3988 = $SL.call(exp__3980, 2), sequence__4040 = eT__3988, B4041 = sequence__4040, B4042 = ((B4041 || false).length || 0), B4043 = 0, B4046 = (B4042 === B4043);
if ($T(B4046))
return B3971(exp1__3987, k__3981)
else return B3971(exp1__3987, function B4049 (aexp1__3989)
{return [B2145("%begin"), aexp1__3989, B3971(B2185([B2145("%begin")], eT__3988), k__3981)]})}
else if ($T(B2190(B3982, "%bind")))
{var ____3990 = exp__3980[0], B3991 = exp__3980[1], var__3992 = B3991[0], value__3993 = B3991[1], body__3994 = exp__3980[2];
return B3971(value__3993, function B4050 (avalue__3995)
{return [B2145("%bind"), [var__3992, avalue__3995], B3971(body__3994, k__3981)]})}
else if ($T(B2190(B3982, "%if")))
{var ____3996 = exp__3980[0], test__3997 = exp__3980[1], then__3998 = exp__3980[2], else__3999 = exp__3980[3];
return B3977(test__3997, function B4051 (atest__4000)
{return k__3981([B2145("%if"), atest__4000, B3972(then__3998), B3972(else__3999)])})}
else if ($T(B2190(B3982, "%while")))
{var ____4001 = exp__3980[0], test__4002 = exp__3980[1], body__4003 = exp__3980[2], B4047;
if ($T(B3978(test__4002)))
B4047 = [B2145("%while"), true, [B2145("%begin"), B3972([B2145("%if"), test__4002, B3972(body__4003), [B2145("%native"), "break"], false])]]
else B4047 = [B2145("%while"), B3972(test__4002), B3972(body__4003)];
return k__3981(B4047)}
else if ($T(B2190(B3982, "%try")))
{var ____4004 = exp__3980[0], body__4005 = exp__3980[1], var__4006 = exp__3980[2], catch__4007 = exp__3980[3];
return k__3981([B2145("%try"), B3972(body__4005), var__4006, B3972(catch__4007)])}
else if ($T(B2190(B3982, "%set")))
{var ____4008 = exp__3980[0], var__4009 = exp__3980[1], value__4010 = exp__3980[2];
return B3977(value__4010, function B4052 (avalue__4011)
{return k__3981([B2145("%set"), var__4009, avalue__4011])})}
else if ($T(B3978(exp__3980)))
return B3979(exp__3980, k__3981)
else return k__3981(B2320(B3972, exp__3980))}
else return k__3981(exp__3980)}, false)}
{var B4053;
B3977 = B2155("normalize_value", function B4057 (exp__4054, k__4055)
{if ($T(B3978(exp__4054)))
return B4053(exp__4054, k__4055)
else {var B4056;
if ($T(B2156(exp__4054, B2157)))
B4056 = B2320(B3972, exp__4054)
else B4056 = exp__4054;
return k__4055(B4056)}}, false)}
{var trueQ = B1464["true?"];
B3978 = B2155("contains_statementsQ", function B4102 (exp__4063)
{var B4097;
if ($T(B2156(exp__4063, B2157)))
{var sequence__4080 = exp__4063, B4081 = sequence__4080, B4082 = ((B4081 || false).length || 0), B4083 = 0, value__4084 = (B4082 === B4083);
B4097 = !(trueQ(value__4084))}
else B4097 = false;
if ($T(B4097))
{var sequence__4086 = exp__4063, B4098 = sequence__4086[0], B4064 = B2186(B4098), B4065 = B2190(B4064, "%begin"), B4099;
if ($T(B4065))
B4099 = B4065
else {var B4066 = B2190(B4064, "%if");
if ($T(B4066))
B4099 = B4066
else {var B4067 = B2190(B4064, "%while");
if ($T(B4067))
B4099 = B4067
else {var B4068 = B2190(B4064, "%bind");
if ($T(B4068))
B4099 = B4068
else B4099 = B2190(B4064, "%try")}}};
if ($T(B4099))
return true
else if ($T(B2190(B4064, "%set")))
{var array__4094 = exp__4063, B4095 = array__4094, B4096 = ((B4095 || false).length || 0), B4100 = (B4096 - 1), B4101 = array__4094[B4100];
return B3978(B4101)}
else if ($T(B2190(B4064, "%method")))
return false
else return B2633(B3978, exp__4063)}}, false)}
B4053 = B2155("normalizeT", function B4107 (exp__4103, k__4104)
{return B3971(exp__4103, function B4108 (aexp__4105)
{if ($T(B3968(aexp__4105)))
return k__4104(aexp__4105)
else {var t__4106 = B2218();
return [B2145("%bind"), [t__4106, aexp__4105], k__4104(t__4106)]}})}, false)
var B4109 = B2155("normalizeTT", function B4127 (expT__4110, k__4111)
{var sequence__4122 = expT__4110, B4123 = sequence__4122, B4124 = ((B4123 || false).length || 0), B4125 = 0, B4126 = (B4124 === B4125);
if ($T(B4126))
return k__4111([])
else return B3979(expT__4110, k__4111)}, false)
B3979 = B2155("normalize_all", function B4140 (exp__4128, k__4129)
{var sequence__4133 = exp__4128, B4136 = sequence__4133[0], B4139 = function B4141 (t__4130)
{var sequence__4135 = exp__4128, B4137 = sequence__4135.slice(1), B4138 = function B4142 (tT__4131)
{return k__4129(B2185([t__4130], tT__4131))};
return B4109(B4137, B4138)};
return B4053(B4136, B4139)}, false)
var dec = B1464.dec, B4145 = B1464["third-setter"], B4146 = B2155("wrap_value", function B4217 (exp__4147, wrapper__4148)
{if ($T(B2156(exp__4147, B2157)))
{var sequence__4152 = exp__4147, B4207 = sequence__4152[0], B4149 = B2186(B4207), B4150 = B2190(B4149, "%begin"), B4208;
if ($T(B4150))
B4208 = B4150
else B4208 = B2190(B4149, "%bind");
if ($T(B4208))
{var array__4165 = exp__4147, array__4162 = exp__4147, B4163 = array__4162, B4164 = ((B4163 || false).length || 0), B4209 = (B4164 - 1), B4210 = array__4162[B4209], value__4166 = B4146(B4210, wrapper__4148);
array__4165[dec(B2191(array__4165), 1)] = value__4166;
return exp__4147}
else if ($T(B2190(B4149, "%if")))
{var array__4171 = exp__4147, sequence__4170 = exp__4147, B4211 = sequence__4170[2], value__4172 = B4146(B4211, wrapper__4148);
array__4171[2] = value__4172;
var array__4185 = exp__4147, array__4182 = exp__4147, B4183 = array__4182, B4184 = ((B4183 || false).length || 0), B4212 = (B4184 - 1), B4213 = array__4182[B4212], value__4186 = B4146(B4213, wrapper__4148);
array__4185[dec(B2191(array__4185), 1)] = value__4186;
return exp__4147}
else if ($T(B2190(B4149, "%while")))
return [B2145("%begin"), exp__4147, B4146(false, wrapper__4148)]
else if ($T(B2190(B4149, "%try")))
{var array__4191 = exp__4147, sequence__4190 = exp__4147, B4214 = sequence__4190[1], value__4192 = B4146(B4214, wrapper__4148);
array__4191[1] = value__4192;
var array__4205 = exp__4147, array__4202 = exp__4147, B4203 = array__4202, B4204 = ((B4203 || false).length || 0), B4215 = (B4204 - 1), B4216 = array__4202[B4215], value__4206 = B4146(B4216, wrapper__4148);
array__4205[dec(B2191(array__4205), 1)] = value__4206;
return exp__4147}
else return B2185(wrapper__4148, [exp__4147])}
else return B2185(wrapper__4148, [exp__4147])}, false)
var B4218 = B2155("add_explicit_return", function B4220 (exp__4219)
{return B4146(exp__4219, [B2145("%return")])}, false)
var trueQ = B1464["true?"], B4221 = B1464["member?"], B4222 = B2155("statementQ", function B4245 (exp__4223)
{if ($T(B2156(exp__4223, B2157)))
{var sequence__4235 = exp__4223, B4236 = sequence__4235, B4237 = ((B4236 || false).length || 0), B4238 = 0, value__4239 = (B4237 === B4238), B4242 = !(trueQ(value__4239));
if ($T(B4242))
{var sequence__4241 = exp__4223, B4243 = sequence__4241[0], B4244 = [B2145("%if"), B2145("%while"), B2145("%begin"), B2145("%bind"), B2145("%try")];
return B4221(B4243, B4244)}}}, false)
var B4246 = B2155("add_explicit_true", function B4248 (exp__4247)
{return [[B2145("%native"), "$T"], exp__4247]}, false)
{var dec = B1464.dec, B4251 = B1464["first-setter"], B4252 = B2155("transform_statements", function B4360 (exp__4253, env__4254)
{if ($T(B2156(exp__4253, B2157)))
{var sequence__4273 = exp__4253, B4346 = sequence__4273[0], B4255 = B2186(B4346);
if ($T(B2190(B4255, "%method")))
{var array__4286 = exp__4253, array__4283 = exp__4253, B4284 = array__4283, B4285 = ((B4284 || false).length || 0), B4347 = (B4285 - 1), B4348 = array__4283[B4347], B4349 = B4252(B4348, env__4254), value__4287 = B4218(B4349);
array__4286[dec(B2191(array__4286), 1)] = value__4287;
return exp__4253}
else if ($T(B2190(B4255, "%begin")))
{var ____4256 = exp__4253[0], exps__4257 = $SL.call(exp__4253, 1);
return B2269(B2320(B2193(B4252, env__4254), exps__4257))}
else if ($T(B2190(B4255, "%bind")))
{var ____4258 = exp__4253[0], B4259 = exp__4253[1], var__4260 = B4259[0], value__4261 = B4259[1], body__4262 = exp__4253[2];
if ($T(B4222(value__4261)))
return [B2145("%bind"), [var__4260, false], [B2145("%begin"), B4146(B4252(value__4261, env__4254), [B2145("%set"), var__4260]), B4252(body__4262, env__4254)]]
else return [B2145("%bind"), [var__4260, B4252(value__4261, env__4254)], B4252(body__4262, env__4254)]}
else if ($T(B2190(B4255, "%if")))
{var ____4263 = exp__4253[0], test__4264 = exp__4253[1], then__4265 = exp__4253[2], else__4266 = exp__4253[3];
return [B2145("%if"), B4246(test__4264), B4252(then__4265, env__4254), B4252(else__4266, env__4254)]}
else if ($T(B2190(B4255, "%while")))
{var array__4292 = exp__4253, sequence__4291 = exp__4253, B4350 = sequence__4291[1], value__4293 = B4246(B4350);
array__4292[1] = value__4293;
var array__4298 = exp__4253, sequence__4297 = exp__4253, B4351 = sequence__4297[2], value__4299 = B4252(B4351, env__4254);
array__4298[2] = value__4299;
return exp__4253}
else if ($T(B2190(B4255, "%try")))
{var array__4304 = exp__4253, sequence__4303 = exp__4253, B4352 = sequence__4303[1], value__4305 = B4252(B4352, exp__4253);
array__4304[1] = value__4305;
var array__4318 = exp__4253, array__4315 = exp__4253, B4316 = array__4315, B4317 = ((B4316 || false).length || 0), B4353 = (B4317 - 1), B4354 = array__4315[B4353], value__4319 = B4252(B4354, env__4254);
array__4318[dec(B2191(array__4318), 1)] = value__4319;
return exp__4253}
else if ($T(B2190(B4255, "%set")))
{var ____4267 = exp__4253[0], identifier__4268 = exp__4253[1], value__4269 = exp__4253[2], valueT__4270 = B4252(value__4269, env__4254), definition_name__4271 = B2234(env__4254, "definition-names", B2186(identifier__4268)), B4355;
if ($T(definition_name__4271))
B4355 = B4221(definition_name__4271, B2234(env__4254, "module", "exports"))
else B4355 = false;
if ($T(B4355))
{var array__4322 = exp__4253, value__4323 = B2145("%begin");
array__4322[0] = value__4323;
var array__4326 = exp__4253, value__4327 = [B2145("%set"), identifier__4268, valueT__4270];
array__4326[1] = value__4327;
var array__4330 = exp__4253, value__4331 = [B2145("%set"), [B2145("%get-property"), [B2145("%native"), "exports"], definition_name__4271], identifier__4268];
array__4330[2] = value__4331}
else {var array__4334 = exp__4253, value__4335 = valueT__4270;
array__4334[2] = value__4335};
return exp__4253}
else if ($T(B2190(B4255, "%define")))
{var B4356 = B2145("%var"), array__4343 = exp__4253, B4344 = array__4343, B4345 = ((B4344 || false).length || 0), B4357 = (B4345 - 1), B4358 = array__4343[B4357], B4359 = [B4358, false];
return [B4356, B4359]}
else return B2320(B2193(B4252, env__4254), exp__4253)}
else return exp__4253}, false);
exports["transform-statements"] = B4252}
{var B4361, B4362 = B2155("lift_symbols", function B4365 (exp__4363, env__4364)
{return B4361(exp__4363, env__4364, B3279)}, false);
exports["lift-symbols"] = B4362}
{var trueQ = B1464["true?"], B4372, B4373, B4374, B4375 = B1464["<hash-symbol>"];
B4361 = B2155("lift_symbol", function B4434 (exp__4376, env__4377, k__4378)
{var B4430;
if ($T(B2156(exp__4376, B2157)))
{var sequence__4423 = exp__4376, B4424 = sequence__4423, B4425 = ((B4424 || false).length || 0), B4426 = 0, value__4427 = (B4425 === B4426);
B4430 = !(trueQ(value__4427))}
else B4430 = false;
if ($T(B4430))
{var sequence__4429 = exp__4376, B4431 = sequence__4429[0], B4379 = B2186(B4431);
if ($T(B2190(B4379, "%bind")))
{var ____4380 = exp__4376[0], B4381 = exp__4376[1], var__4382 = B4381[0], value__4383 = B4381[1], body__4384 = exp__4376[2];
return B4361(value__4383, env__4377, function B4435 (lvalue__4385, env__4386)
{return B4361(body__4384, env__4386, function B4436 (lbody__4387, env__4388)
{return k__4378([B2145("%bind"), [var__4382, lvalue__4385], lbody__4387], env__4388)})})}
else {var B4389 = B2190(B4379, "%method"), B4432;
if ($T(B4389))
B4432 = B4389
else B4432 = B2190(B4379, "%set");
if ($T(B4432))
{var m__4390 = exp__4376[0], e1__4391 = exp__4376[1], e2__4392 = exp__4376[2];
return B4361(e2__4392, env__4377, function B4437 (le2__4393, env__4394)
{return k__4378([m__4390, e1__4391, le2__4393], env__4394)})}
else {var B4395 = B2190(B4379, "%begin"), B4433;
if ($T(B4395))
B4433 = B4395
else {var B4396 = B2190(B4379, "%if");
if ($T(B4396))
B4433 = B4396
else B4433 = B2190(B4379, "%while")};
if ($T(B4433))
{var m__4397 = exp__4376[0], eT__4398 = $SL.call(exp__4376, 1);
return B4372(eT__4398, env__4377, function B4438 (leT__4399, env__4400)
{return k__4378(B2185([m__4397], leT__4399), env__4400)})}
else if ($T(B2190(B4379, "%try")))
{var ____4401 = exp__4376[0], e1__4402 = exp__4376[1], v__4403 = exp__4376[2], e2__4404 = exp__4376[3];
return B4372([e1__4402, e2__4404], env__4377, function B4439 (leT__4405, env__4406)
{var le1__4407 = leT__4405[0], le2__4408 = leT__4405[1];
return k__4378([B2145("%try"), le1__4407, v__4403, le2__4408], env__4406)})}
else if ($T(B2190(B4379, "symbol")))
{var ____4409 = exp__4376[0], name__4410 = exp__4376[1];
return B4373(name__4410, exp__4376, "symbol", env__4377, k__4378)}
else return B4374(exp__4376, env__4377, k__4378)}}}
else {var B4411 = exp__4376;
if ($T(B2156(B4411, B3967)))
return B4373(B2186(exp__4376), exp__4376, "keyword", env__4377, k__4378)
else if ($T(B2156(B4411, B4375)))
return B4373(B2186(exp__4376), exp__4376, "hash", env__4377, k__4378)
else return k__4378(exp__4376, env__4377)}}, false)}
B4373 = B2155("lift_value", function B4449 (name__4441, value__4442, type__4443, env__4444, k__4445)
{var B4446 = B2234(env__4444, "lifted", type__4443, name__4441);
if ($T(B4446))
{var t__4447 = B4446;
return k__4445(t__4447, env__4444)}
else {var t__4448 = B2216(env__4444, "lifted", type__4443, name__4441, B2218());
return [B2145("%bind"), [t__4448, value__4442], k__4445(t__4448, env__4444)]}}, false)
B4372 = B2155("lift_symbolT", function B4468 (expT__4450, env__4451, k__4452)
{var sequence__4463 = expT__4450, B4464 = sequence__4463, B4465 = ((B4464 || false).length || 0), B4466 = 0, B4467 = (B4465 === B4466);
if ($T(B4467))
return k__4452([], env__4451)
else return B4374(expT__4450, env__4451, k__4452)}, false)
B4374 = B2155("lift_symbolTT", function B4484 (exp__4469, env__4470, k__4471)
{var sequence__4477 = exp__4469, B4480 = sequence__4477[0], B4483 = function B4485 (t__4472, env__4473)
{var sequence__4479 = exp__4469, B4481 = sequence__4479.slice(1), B4482 = function B4486 (tT__4474, env__4475)
{return k__4471(B2185([t__4472], tT__4474), env__4475)};
return B4372(B4481, env__4473, B4482)};
return B4361(B4480, env__4470, B4483)}, false)
var trueQ = B1464["true?"], B4487, B4488 = B2155("flatten_begins", function B4530 (exps__4489)
{var function__4520 = B2185, values__4521 = B2320(function B4531 (exp__4490)
{var flattened__4491 = B4487(exp__4490), B4527;
if ($T(B2156(flattened__4491, B2157)))
{var sequence__4511 = flattened__4491, B4512 = sequence__4511, B4513 = ((B4512 || false).length || 0), B4514 = 0, value__4515 = (B4513 === B4514), B4524 = !(trueQ(value__4515));
if ($T(B4524))
{var sequence__4517 = flattened__4491, B4525 = sequence__4517[0], B4526 = B2145("%begin");
B4527 = B2190(B4525, B4526)}
else B4527 = false}
else B4527 = false;
if ($T(B4527))
{var sequence__4519 = flattened__4491;
return sequence__4519.slice(1)}
else return [flattened__4491]}, exps__4489), B4522 = values__4521, B4528 = B4522[0], B4523 = values__4521, B4529 = B4523.slice(1);
return B2310(function__4520, B4528, B4529)}, false)
var B4532 = B2155("varQ", function B4538 (exp__4533)
{if ($T(B2162(exp__4533)))
{var sequence__4535 = exp__4533, B4536 = sequence__4535[0], B4537 = B2145("%var");
return B2190(B4536, B4537)}}, false)
var B4539 = B2155("setQ", function B4545 (exp__4540)
{if ($T(B2162(exp__4540)))
{var sequence__4542 = exp__4540, B4543 = sequence__4542[0], B4544 = B2145("%set");
return B2190(B4543, B4544)}}, false)
var B4546 = B2155("methodQ", function B4552 (exp__4547)
{if ($T(B2162(exp__4547)))
{var sequence__4549 = exp__4547, B4550 = sequence__4549[0], B4551 = B2145("%method");
return B2190(B4550, B4551)}}, false)
var trueQ = B1464["true?"], B4553 = B2155("flatten_vars", function B4645 (exps__4554)
{return B2310(function B4646 (result__4555, exp__4556)
{var sequence__4574 = result__4555, B4575 = sequence__4574, B4576 = ((B4575 || false).length || 0), B4577 = 0, value__4578 = (B4576 === B4577), B4635 = !(trueQ(value__4578)), previous__4557;
if ($T(B4635))
{var array__4586 = result__4555, B4587 = array__4586, B4588 = ((B4587 || false).length || 0), B4636 = (B4588 - 1);
previous__4557 = array__4586[B4636]}
else previous__4557 = false;
var previous_varQ__4558;
if ($T(previous__4557))
previous_varQ__4558 = B4532(previous__4557)
else previous_varQ__4558 = false;
var B4637;
if ($T(previous_varQ__4558))
B4637 = B4532(exp__4556)
else B4637 = false;
if ($T(B4637))
{var B4639 = function B4647 (binding__4559)
{var array__4598 = result__4555, B4599 = array__4598, B4600 = ((B4599 || false).length || 0), B4638 = (B4600 - 1), array__4601 = array__4598[B4638], value__4602 = binding__4559;
array__4601.push(value__4602);
return array__4601}, sequence__4604 = exp__4556, B4640 = sequence__4604.slice(1);
B2243(B4639, B4640);
return result__4555}
else {var mergeQ__4560;
if ($T(previous_varQ__4558))
mergeQ__4560 = B4539(exp__4556)
else mergeQ__4560 = false;
var binding__4561;
if ($T(mergeQ__4560))
{var array__4619 = result__4555, B4620 = array__4619, B4621 = ((B4620 || false).length || 0), B4641 = (B4621 - 1), array__4622 = array__4619[B4641], B4623 = array__4622, B4624 = ((B4623 || false).length || 0), B4642 = (B4624 - 1);
binding__4561 = array__4622[B4642]}
else binding__4561 = false;
var identifier__4562;
if ($T(mergeQ__4560))
{var sequence__4626 = exp__4556;
identifier__4562 = sequence__4626[1]}
else identifier__4562 = false;
var sequence__4628 = binding__4561, B4643 = sequence__4628[0], B4644 = B2190(B4643, identifier__4562);
if ($T(B4644))
{var array__4633 = binding__4561, sequence__4632 = exp__4556, value__4634 = sequence__4632[2];
array__4633[1] = value__4634;
return result__4555}
else return B2185(result__4555, [exp__4556])}}, [], exps__4554)}, false)
{var dec = B1464.dec;
B4487 = B2155("flatten_statements", function B4726 (exp__4651)
{if ($T(B2156(exp__4651, B2157)))
{var sequence__4661 = exp__4651, B4716 = sequence__4661[0], B4652 = B2186(B4716), B4653 = B2190(B4652, "%method"), B4717;
if ($T(B4653))
B4717 = B4653
else {var B4654 = B2190(B4652, "%while");
if ($T(B4654))
B4717 = B4654
else B4717 = B2190(B4652, "%set")};
if ($T(B4717))
{var array__4674 = exp__4651, array__4671 = exp__4651, B4672 = array__4671, B4673 = ((B4672 || false).length || 0), B4718 = (B4673 - 1), B4719 = array__4671[B4718], value__4675 = B4487(B4719);
array__4674[dec(B2191(array__4674), 1)] = value__4675;
return exp__4651}
else if ($T(B2190(B4652, "%begin")))
{var ____4655 = exp__4651[0], exps__4656 = $SL.call(exp__4651, 1);
return B2269(B4553(B4488(exps__4656)))}
else if ($T(B2190(B4652, "%bind")))
{var ____4657 = exp__4651[0], binding__4658 = exp__4651[1], body__4659 = exp__4651[2];
return B4487([B2145("%begin"), [B2145("%var"), binding__4658], body__4659])}
else if ($T(B2190(B4652, "%if")))
{var array__4680 = exp__4651, sequence__4679 = exp__4651, B4720 = sequence__4679[2], value__4681 = B4487(B4720);
array__4680[2] = value__4681;
var array__4694 = exp__4651, array__4691 = exp__4651, B4692 = array__4691, B4693 = ((B4692 || false).length || 0), B4721 = (B4693 - 1), B4722 = array__4691[B4721], value__4695 = B4487(B4722);
array__4694[dec(B2191(array__4694), 1)] = value__4695;
return exp__4651}
else if ($T(B2190(B4652, "%try")))
{var array__4700 = exp__4651, sequence__4699 = exp__4651, B4723 = sequence__4699[1], value__4701 = B4487(B4723);
array__4700[1] = value__4701;
var array__4714 = exp__4651, array__4711 = exp__4651, B4712 = array__4711, B4713 = ((B4712 || false).length || 0), B4724 = (B4713 - 1), B4725 = array__4711[B4724], value__4715 = B4487(B4725);
array__4714[dec(B2191(array__4714), 1)] = value__4715;
return exp__4651}
else return B2320(B4487, exp__4651)}
else return exp__4651}, false);
exports["flatten-statements"] = B4487}
var B4727 = B2136("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var B4728 = B2155("fill_zeros", function B4740 (string__4729)
{var array__4735 = "0000", start__4736 = 0, object__4734 = string__4729, B4738 = ((object__4734 || false).length || 0), end__4737 = (4 - B4738), B4739 = array__4735.slice(start__4736, end__4737);
return B2185(B4739, string__4729)}, false)
var B4742 = B1464.join, B4743 = B1464["<"], B4744 = B1464["as-hex-string"], B4745 = B1464["char-code"], B4746 = B1464["as-array"], B4747 = B2155("escape_string", function B4766 (string__4748)
{var B4763 = function B4767 (char__4749)
{var B4750 = B2234(B4727, char__4749);
if ($T(B4750))
{var escaped__4751 = B4750;
return B2185("\\", escaped__4751)}
else {var char__4754 = char__4749, code__4752 = char__4754.charCodeAt(0);
if ($T(B4743(31, code__4752, 127)))
return char__4749
else {var number__4756 = code__4752, B4761 = number__4756.toString(16), B4762 = B4728(B4761);
return B2185("\\u", B4762)}}}, arguments__4759 = string__4748, skip__4760 = undefined, B4764 = $SL.call(arguments__4759, (skip__4760 || 0)), B4765 = B2320(B4763, B4764);
return B4742(B4765, "")}, false)
var B4768 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var B4769 = B2136("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
var B4770 = B2133.match, B4771 = B2155("escape_name", function B4795 (name__4772)
{if ($T(B4221(name__4772, B4768)))
return B2185("R", name__4772)
else {var B4793 = function B4796 (char__4773)
{var object__4777 = B4769, property__4778 = char__4773, B4789 = $HP.call(object__4777,property__4778);
if ($T(B4789))
return B2234(B4769, char__4773)
else {var regexp__4781 = "\\w", string__4782 = char__4773, B4790 = string__4782.match(regexp__4781);
if ($T(B4790))
return char__4773
else {var char__4784 = char__4773, B4791 = char__4784.charCodeAt(0), B4792 = B2217(B4791);
return B2185("Z", B4792)}}}, arguments__4787 = name__4772, skip__4788 = undefined, B4794 = $SL.call(arguments__4787, (skip__4788 || 0)), chars__4774 = B2320(B4793, B4794);
return B4742(chars__4774, "")}}, false)
var trueQ = B1464["true?"], B4797 = B2155("valid_js_nameQ", function B4806 (identifier__4798)
{var value__4800 = B4221(identifier__4798, B4768), B4805 = !(trueQ(value__4800));
if ($T(B4805))
{var regexp__4803 = "^\\w+$", string__4804 = identifier__4798;
return string__4804.match(regexp__4803)}}, false)
var B4809, B4810 = B1464["as-uppercase"], B4811 = B1464.description, B4812 = B2155("compile_js", function B4837 (exp__4813, env__4814)
{var B4815 = exp__4813;
if ($T(B2156(B4815, B2157)))
{var sequence__4827 = exp__4813, B4828 = sequence__4827, B4829 = ((B4828 || false).length || 0), B4830 = 0, B4835 = (B4829 === B4830);
if ($T(B4835))
{var error__4832 = B2997(B2998, B3003, "empty expression");
throw(error__4832);
return false}
else return B4809(exp__4813, env__4814)}
else if ($T(B2156(B4815, B3965)))
return B2217(exp__4813)
else if ($T(B2156(B4815, B3966)))
if ($T(exp__4813))
return "true"
else return "false"
else if ($T(B2156(B4815, B3007)))
return B2185("\"", B4747(exp__4813), "\"")
else if ($T(B2156(B4815, B4375)))
{var string__4834 = B2186(exp__4813), B4836 = string__4834.toUpperCase();
return B2185("$", B4836)}
else if ($T(B2156(B4815, B3967)))
return B2185("$K(\"", B2186(exp__4813), "\")")
else if ($T(B2156(B4815, B2161)))
{var B4816 = exp__4813;
if ($T(B2190(B4816, B2145("%this-method"))))
return B4812(B2234(env__4814, "current-method"), env__4814)
else if ($T(B2190(B4816, B2145("%all-arguments"))))
return "arguments"
else return B4771(B2186(exp__4813))}
else return B4811(exp__4813)}, false)
{var trueQ = B1464["true?"], B4845;
B4809 = B2155("compile_js_exp", function B4982 (exp__4846, env__4847)
{var sequence__4904 = exp__4846, B4941 = sequence__4904[0], name__4848 = B2186(B4941), B4849 = name__4848;
if ($T(B2190(B4849, "%native-call")))
{var ____4850 = exp__4846[0], operator__4851 = exp__4846[1], values__4852 = $SL.call(exp__4846, 2);
return B2185(operator__4851, B4845(values__4852, env__4847))}
else if ($T(B2190(B4849, "%infix")))
{var ____4853 = exp__4846[0], operator__4854 = exp__4846[1], values__4855 = $SL.call(exp__4846, 2);
return B2185("(", B4742(B2320(B2193(B4812, env__4847), values__4855), B2185(" ", operator__4854, " ")), ")")}
else {var B4856 = B2190(B4849, "%plus"), B4942;
if ($T(B4856))
B4942 = B4856
else {var B4857 = B2190(B4849, "%minus");
if ($T(B4857))
B4942 = B4857
else {var B4858 = B2190(B4849, "%times");
if ($T(B4858))
B4942 = B4858
else B4942 = B2190(B4849, "%divide")}};
if ($T(B4942))
{var B4943 = B2145("%infix"), B4859 = name__4848, B4944;
if ($T(B2190(B4859, "%plus")))
B4944 = "+"
else if ($T(B2190(B4859, "%minus")))
B4944 = "-"
else if ($T(B2190(B4859, "%times")))
B4944 = "*"
else if ($T(B2190(B4859, "%divide")))
B4944 = "/"
else B4944 = false;
var B4945 = [B4943, B4944], sequence__4906 = exp__4846, B4946 = sequence__4906.slice(1), B4947 = B2185(B4945, B4946);
return B4809(B4947, env__4847)}
else if ($T(B2190(B4849, "%array")))
{var ____4860 = exp__4846[0], elements__4861 = $SL.call(exp__4846, 1);
return B2185("[", B4742(B2320(B2193(B4812, env__4847), elements__4861), ", "), "]")}
else if ($T(B2190(B4849, "%object")))
{var sequence__4908 = exp__4846, key_values__4862 = sequence__4908.slice(1), entries__4863 = [], object__4910 = key_values__4862, B4948 = ((object__4910 || false).length || 0), B4864 = (B4948 / 2), i__4865 = 0;
while ($T(true))
{var value__4912 = B3932(i__4865, B4864), B4951 = !(trueQ(value__4912));
if ($T(B4951))
{(function B4983 (i__4866)
{var array__4915 = entries__4863, name__4867 = B2282(key_values__4862, (i__4866 * 2)), B4949;
if ($T(B4797(name__4867)))
B4949 = name__4867
else B4949 = B4812(name__4867, env__4847);
var B4950 = B4812(B2282(key_values__4862, ((i__4866 * 2) + 1)), env__4847), value__4916 = B2185(B4949, ":", B4950);
array__4915.push(value__4916);
return array__4915})(i__4865);
i__4865 = (i__4865 + 1)}
else break};
false;
return B2185("{", B4742(entries__4863, ",\n"), "}")}
else if ($T(B2190(B4849, "%if")))
{var ____4868 = exp__4846[0], test__4869 = exp__4846[1], then__4870 = exp__4846[2], else__4871 = exp__4846[3], B4952 = B4812(test__4869, env__4847), B4953 = B4812(then__4870, env__4847), B4954;
if ($T(else__4871))
{var value__4918 = B2280(else__4871, [B2145("%return"), false]);
B4954 = !(trueQ(value__4918))}
else B4954 = false;
var B4955;
if ($T(B4954))
B4955 = B2185("\nelse ", B4812(else__4871, env__4847))
else B4955 = "";
return B2185("if (", B4952, ")\n", B4953, B4955)}
else if ($T(B2190(B4849, "%while")))
{var ____4872 = exp__4846[0], test__4873 = exp__4846[1], body__4874 = exp__4846[2];
return B2185("while (", B4812(test__4873, env__4847), ")\n", B4812(body__4874, env__4847))}
else if ($T(B2190(B4849, "%try")))
{var ____4875 = exp__4846[0], body__4876 = exp__4846[1], var__4877 = exp__4846[2], catch__4878 = exp__4846[3];
return B2185("try {", B4812(body__4876, env__4847), "}\n", "catch (", B4812(var__4877, env__4847), ")\n", "{", B4812(catch__4878, env__4847), "}")}
else if ($T(B2190(B4849, "%return")))
{var sequence__4920 = exp__4846, B4956 = sequence__4920[1], B4957 = B4812(B4956, env__4847);
return B2185("return ", B4957)}
else if ($T(B2190(B4849, "%begin")))
{var B4958 = B2193(B4812, env__4847), sequence__4922 = exp__4846, B4959 = sequence__4922.slice(1), B4960 = B2320(B4958, B4959), B4961 = B4742(B4960, ";\n");
return B2185("{", B4961, "}")}
else if ($T(B2190(B4849, "%set")))
{var ____4879 = exp__4846[0], var__4880 = exp__4846[1], value__4881 = exp__4846[2];
return B2185(B4812(var__4880, env__4847), " = ", B4812(value__4881, env__4847))}
else if ($T(B2190(B4849, "%method")))
{var ____4882 = exp__4846[0], arguments__4883 = exp__4846[1], body__4884 = exp__4846[2], name__4885 = B2218(), previous_method__4886 = B2234(env__4847, "current-method"), B4962 = B4812(name__4885, env__4847), B4963 = B4742(B2320(B2193(B4812, env__4847), arguments__4883), ", ");
B2216(env__4847, "current-method", name__4885);
var bodyT__4887 = B4812(body__4884, env__4847);
B2216(env__4847, "current-method", previous_method__4886);
var B4966;
if ($T(B2162(body__4884)))
{var sequence__4924 = body__4884, B4964 = sequence__4924[0], B4965 = B2145("%begin");
B4966 = B2190(B4964, B4965)}
else B4966 = false;
var B4967;
if ($T(B4966))
B4967 = bodyT__4887
else B4967 = B2185("{", bodyT__4887, "}");
return B2185("function ", B4962, " (", B4963, ")\n", B4967)}
else if ($T(B2190(B4849, "%var")))
{var ____4888 = exp__4846[0], bindings__4889 = $SL.call(exp__4846, 1);
return B2185("var ", B4742(B2320(function B4984 (binding__4890)
{var B4891;
if ($T(B2156(binding__4890, B2157)))
B4891 = binding__4890
else B4891 = [binding__4890, false];
var var__4892 = B4891[0], value__4893 = B4891[1], B4968 = B4812(var__4892, env__4847), B4969;
if ($T(value__4893))
B4969 = B2185(" = ", B4812(value__4893, env__4847))
else B4969 = "";
return B2185(B4968, B4969)}, bindings__4889), ", "))}
else if ($T(B2190(B4849, "%native")))
{var function__4935 = B2185, B4970 = function B4985 (e__4894)
{if ($T(B2156(e__4894, B2161)))
return B4812(e__4894)
else return B2217(e__4894)}, sequence__4934 = exp__4846, B4971 = sequence__4934.slice(1), values__4936 = B2320(B4970, B4971), B4937 = values__4936, B4972 = B4937[0], B4938 = values__4936, B4973 = B4938.slice(1);
return B2310(function__4935, B4972, B4973)}
else if ($T(B2190(B4849, "%native-name")))
{var sequence__4940 = exp__4846, B4974 = sequence__4940[1], B4975 = B4771(B4974);
return B2185("\"", B4975, "\"")}
else if ($T(B2190(B4849, "%get-property")))
{var ____4895 = exp__4846[0], object__4896 = exp__4846[1], properties__4897 = $SL.call(exp__4846, 2), B4976;
if ($T(B2156(object__4896, B3965)))
B4976 = B2185("(", B4812(object__4896, env__4847), ")")
else B4976 = B4812(object__4896, env__4847);
var B4979 = B2310(function B4986 (result__4898, property__4899)
{var B4977;
if ($T(B2156(property__4899, B3007)))
B4977 = B4797(property__4899)
else B4977 = false;
var B4978;
if ($T(B4977))
B4978 = B2185(".", property__4899)
else B4978 = B2185("[", B4812(property__4899, env__4847), "]");
return B2185(result__4898, B4978)}, "", properties__4897);
return B2185(B4976, B4979)}
else {var function__4900 = exp__4846[0], values__4901 = $SL.call(exp__4846, 1), functionT__4902 = B4812(function__4900, env__4847), B4980;
if ($T(B4546(function__4900)))
B4980 = B2185("(", functionT__4902, ")")
else B4980 = functionT__4902;
var B4981 = B4845(values__4901, env__4847);
return B2185(B4980, B4981)}}}, false)}
B4845 = B2155("compile_js_call", function B4989 (values__4987, env__4988)
{return B2185("(", B4742(B2320(B2193(B4812, env__4988), values__4987), ", "), ")")}, false)
var B4994 = $K("string"), B4990 = B2134.read, B4991 = B2131["<string-stream>"], B4992 = B2155("read_program", function B4995 (source__4993)
{return B4990(B2997(B4991, B4994, B2185("(", source__4993, "\n)")))}, false)
{var B4996 = B2155("compile_expression", function B5004 (exp__4997, env__4998)
{return B2310(function B5005 (result__4999, nameSfn__5000)
{var name__5001 = nameSfn__5000[0], fn__5002 = nameSfn__5000[1], result__5003 = fn__5002(result__4999);
return result__5003}, exp__4997, [["source", B3279], ["macroexpanded", B2193(B2245, env__4998)], ["lifted defines", B2193(B3280, env__4998)], ["defined free variables", B2193(B3472, env__4998)], ["alpha-converted", B2193(B3746, env__4998)], ["inline", B2193(B3815, env__4998)], ["defined free variables after inline", B2193(B3503, env__4998)], ["ANF", B3972], ["lifted symbols", B2193(B4362, env__4998)], ["statements", B2193(B4252, env__4998)], ["flattened", B4487], ["compiled", B2193(B4812, env__4998)]])}, false);
exports["compile-expression"] = B4996}
var B5006 = B2135["resolve-path"], B5007 = B2155("executable_path", function B5009 (module_name__5008)
{return B5006("build", B2185(module_name__5008, ".js"))}, false)
var B5010 = B2155("module_path", function B5013 (base_path__5011, module_name__5012)
{return B5006(base_path__5011, B2185(module_name__5012, ".rm"))}, false)
var B5014 = B2155("source_path", function B5016 (module_name__5015)
{return B5006("src", B2185(module_name__5015, ".ralph"))}, false)
var trueQ = B1464["true?"], B5018 = B2135["file-properties"], B5019 = B2135["file-exists?"], B5020 = B2155("recompileQ", function B5030 (module_name__5021)
{var value__5026 = B2234(B2137, module_name__5021, "native?"), B5029 = !(trueQ(value__5026));
if ($T(B5029))
{var path__5022 = B5007(module_name__5021), value__5028 = B5019(path__5022), B5023 = !(trueQ(value__5028));
if ($T(B5023))
return B5023
else {var path2__5024 = B5014(module_name__5021);
return B4743(B2234(B5018(path__5022), "modification-date"), B2234(B5018(path2__5024), "modification-date"))}}}, false)
{var B5034 = B1464["chain-object"], B5035, B5036;
B3224 = B2155("compile_time_import_module", function B5050 (env__5037, module_name__5038)
{var B5039 = $SL.call(arguments, 2), B5040 = B3044(B5039, {options:false}), options__5041 = B5040.options, B5047;
if ($T(B2190(module_name__5038, "ralph/core")))
B5047 = [B2267, B3383]
else {B5035(module_name__5038);
var definitions__5042 = require(module_name__5038), macros__5043 = B2147(), symbol_macros__5044 = B2147();
B2243(function B5051 (name__5045)
{var definition__5046 = B2234(definitions__5042, name__5045);
if ($T(B2234(definition__5046, "%macro?")))
return B2216(macros__5043, name__5045, definition__5046)
else if ($T(B2234(definition__5046, "%symbol-macro?")))
return B2216(symbol_macros__5044, name__5045, definition__5046)}, B3109(B5036, B3471(definitions__5042), options__5041));
B5047 = [macros__5043, symbol_macros__5044]};
var macros__5048 = B5047[0], symbol_macros__5049 = B5047[1];
B5034(B2234(env__5037, "macros"), macros__5048);
return B5034(B2234(env__5037, "symbol-macros"), symbol_macros__5049)}, false)}
{var B5056 = B1464["remove!"], B5057 = B1464["as-object"];
B5036 = B2155("process_names", function B5076 (all__5058)
{var B5059 = $SL.call(arguments, 1), B5060 = B3044(B5059, {only:false,
exclude:false,
prefix:false,
rename:false}), only__5061 = B5060.only, exclude__5062 = B5060.exclude, prefix__5063 = B5060.prefix, rename__5064 = B5060.rename, resolve__5065 = function B5077 (exp__5066)
{if ($T(B2156(exp__5066, B3007)))
return exp__5066
else return B2206(exp__5066)}, B5073;
if ($T(B2156(only__5061, B2157)))
B5073 = B2320(resolve__5065, only__5061)
else B5073 = all__5058;
var names__5067 = B3470(B5073), B5068 = rename__5064, B5074;
if ($T(B5068))
B5074 = B5068
else B5074 = [];
var B5075 = B2320(resolve__5065, B5074), renamings__5069 = B5057(B5075);
B2243(B2244(B5056, names__5067), B2320(resolve__5065, exclude__5062));
B3558(names__5067, B3471(renamings__5069));
return B2320(function B5078 (name__5070)
{var B5071 = B2234(renamings__5069, name__5070);
if ($T(B5071))
{var renaming__5072 = B5071;
return [name__5070, renaming__5072]}
else if ($T(B2156(prefix__5063, B3007)))
return [name__5070, B2185(prefix__5063, name__5070)]
else return name__5070}, names__5067)}, false)}
{var B5080;
B3225 = B2155("import_module", function B5096 (module__5081, module_name__5082)
{var options__5083 = $SL.call(arguments, 2), B5084 = B5080(module_name__5082);
if ($T(B5084))
{var other_module__5085 = B5084, array__5088 = B2234(module__5081, "imports"), value__5089 = [other_module__5085, B3109(B5036, B2234(other_module__5085, "exports"), options__5083)];
array__5088.unshift(value__5089);
array__5088;
var array__5092 = B2234(module__5081, "dependencies"), value__5093 = module_name__5082;
array__5092.unshift(value__5093);
array__5092;
return other_module__5085}
else {var error__5095 = B2185("unable to import module '", module_name__5082, "'");
throw(error__5095);
return false}}, false)}
{var B5100;
B5080 = B2155("find_module", function B5105 (module_name__5101)
{var B5102 = B5035(module_name__5101);
if ($T(B5102))
return B5102
else {var B5103 = B2234(B2137, module_name__5101);
if ($T(B5103))
return B5103
else {var B5104 = B5100("build", module_name__5101);
if ($T(B5104))
return B5104
else return B5100("src", module_name__5101)}}}, false)}
{var B5110 = $K("name"), B5106 = B2135["read-file"];
B5100 = B2155("read_module", function B5111 (base_path__5107, module_name__5108)
{var path__5109 = B5010(base_path__5107, module_name__5108);
if ($T(B5019(path__5109)))
return B3109(B2244(B2997, B2140, B5110), B4990(B2997(B4991, B4994, B5106(path__5109))))}, false)}
{var B5143 = $K("module"), B5144 = $K("exports"), B5145 = $K("inline"), B5146 = $K("dependencies"), trueQ = B1464["true?"], B5113 = B2135["write-file"];
B5035 = B2155("compile_module", function B5147 (module_name__5114)
{var object__5127 = B2137, property__5128 = module_name__5114, value__5129 = $HP.call(object__5127,property__5128), B5140 = !(trueQ(value__5129));
if ($T(B5140))
{var B5115 = B5100("src", module_name__5114);
if ($T(B5115))
{var module__5116 = B5115;
B2216(B2137, module_name__5114, module__5116)}};
if ($T(B5020(module_name__5114)))
{var value__5131 = B5019(B5014(module_name__5114)), B5141 = !(trueQ(value__5131));
if ($T(B5141))
{var error__5133 = B2185("unable to compile module '", module_name__5114, "'");
throw(error__5133);
false};
var module__5117 = B2997(B2140, B5110, module_name__5114), env__5118 = B2997(B2148, B5143, module__5117), source__5119 = B5106(B5014(module_name__5114)), program__5120 = B4992(source__5119), result__5121 = "";
B2216(B2137, module_name__5114, module__5117);
B3224(env__5118, "ralph/core");
var value__5135 = B2190(module_name__5114, "ralph/core"), B5142 = !(trueQ(value__5135));
if ($T(B5142))
{B3225(module__5117, "ralph/core");
var array__5138 = program__5120, value__5139 = B3226("ralph/core", env__5118);
array__5138.unshift(value__5139);
array__5138};
B2243(function B5148 (expression__5122)
{var code__5123 = B4996(expression__5122, env__5118);
return result__5121 = B2185(result__5121, code__5123, "\n")}, program__5120);
B5113(B5007(module_name__5114), result__5121);
B5113(B5010("build", module_name__5114), B4811([module_name__5114, B5144, B2234(module__5117, "exports"), B5145, B2234(module__5117, "inline"), B5146, B2234(module__5117, "dependencies")]));
return module__5117}}, false);
exports["compile-module"] = B5035}
{var B5151 = B2155("analyze_dependencies", function B5166 (module_name__5152)
{var B5153 = B5080(module_name__5152);
if ($T(B5153))
{var module__5154 = B5153;
B2216(B2137, module_name__5152, module__5154);
var B5155 = module__5154, dependencies__5156 = B5155.dependencies, result__5157 = B2281(dependencies__5156);
B2243(function B5167 (dependency__5158)
{return B2243(function B5168 (sub_dependency__5159)
{if ($T(B4221(sub_dependency__5159, result__5157)))
B5056(result__5157, sub_dependency__5159);
var array__5162 = result__5157, value__5163 = sub_dependency__5159;
array__5162.unshift(value__5163);
return array__5162}, B5151(dependency__5158))}, dependencies__5156);
return result__5157}
else {var error__5165 = B2185("unable to find-module '", module_name__5152, "'");
throw(error__5165);
return false}}, false);
exports["analyze-dependencies"] = B5151}
