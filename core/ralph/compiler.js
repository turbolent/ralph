var $g1464 = require("ralph/core")
{var $g2179, $g2180, $g2181, $g2182, $g2183, $g2184;
$g2179 = require("ralph/stream");
$g2180 = require("ralph/format");
$g2181 = require("ralph/regexp");
$g2182 = require("ralph/reader");
$g2183 = require("ralph/date");
$g2184 = require("ralph/file-system")}
var $g2185 = $g1464["make-object"], $g2186 = $g2185()
var $g2187 = $g1464["%make-class"], $g2188 = $g1464["<object>"], $g2189 = $g2187($g2188, {name:false,
"native?":false,
exports:function $g2190 ()
{return []},
imports:function $g2191 ()
{return []},
inline:function $g2192 ()
{return []}})
var $g2193 = $g1464.symbol, $g2194 = [$g2193("%all-arguments"), $g2193("%this-method")]
var $g2195 = $g1464["make-plain-object"], $g2196 = $g2187($g2188, {module:false,
macros:function $g2197 ()
{return $g2195()},
"symbol-macros":function $g2198 ()
{return $g2195()},
identifiers:function $g2199 ()
{return $g2185()},
"defined?":function $g2200 ()
{return $g2185()},
lifted:function $g2201 ()
{return $g2185()},
"import-identifiers":function $g2202 ()
{return $g2195()}})
var trueQ = $g1464["true?"], $g2203 = $g1464["%make-function"], $g2204 = $g1464["instance?"], $g2205 = $g1464["<array>"], $g2206 = $g1464.not, $g2207 = $g1464["empty?"], $g2208 = $g1464.first, $g2209 = $g1464["<symbol>"], $g2210 = $g2203("expressionQ", function $g2232 ($form2211)
{if ($T($g2204($form2211, $g2205)))
{var $sequence2223 = $form2211, $g2224 = $sequence2223, $g2225 = (($g2224 || false).length || 0), $g2226 = 0, $value2227 = ($g2225 === $g2226), $g2230 = !(trueQ($value2227));
if ($T($g2230))
{var $sequence2229 = $form2211, $g2231 = $sequence2229[0];
return $g2204($g2231, $g2209)}}}, false)
var $g2233 = $g1464.concatenate, $g2234 = $g1464["symbol-name"], $g2235 = $g2203("transform_setter_identifier", function $g2237 ($identifier2236)
{return $g2193($g2233($g2234($identifier2236), "-setter"))}, false)
var $g2238 = $g1464["=="], $g2239 = $g1464.size, $g2240 = $g1464["every?"], $g2241 = $g1464.rcurry, $g2242 = $g2203("setter_identifierQ", function $g2252 ($form2243)
{if ($T($g2204($form2243, $g2205)))
{var $robject2245 = $form2243, $g2248 = (($robject2245 || false).length || 0), $g2249 = $g2238($g2248, 2);
if ($T($g2249))
if ($T($g2240($g2241($g2204, $g2209), $form2243)))
{var $sequence2247 = $form2243, $g2250 = $sequence2247[0], $g2251 = $g2234($g2250);
return $g2238($g2251, "setter")}}}, false)
var $g2253 = $g1464.second, $g2254 = $g2203("identifier_name", function $g2260 ($identifier2255)
{var $g2259;
if ($T($g2242($identifier2255)))
{var $sequence2257 = $identifier2255, $g2258 = $sequence2257[1];
$g2259 = $g2235($g2258)}
else $g2259 = $identifier2255;
return $g2234($g2259)}, false)
var $g2261 = 0
var $g2262 = $g2203("reset_symbol_counterN", function $g2263 ()
{return $g2261 = 0}, false)
var $g2264 = $g1464["get-setter"], $g2265, $g2266 = $g1464["as-string"], $g2267 = $g2203("generate_symbol", function $g2273 ($prefix2268)
{var $g2271;
if ($T($prefix2268))
$g2271 = $g2265($prefix2268)
else $g2271 = "g";
var $g2272 = $g2266($g2261 = ($g2261 + 1)), $name2269 = $g2233($g2271, $g2272), $result2270 = $g2193($name2269);
$g2264($result2270, "generated?", true);
return $result2270}, false)
var $g2274 = $g2203("bindN", function $g2277 ($env2275, $identifier2276)
{return $g2264($env2275, "bound?", $g2234($identifier2276), true)}, false)
var $g2278 = $g2203("unbindN", function $g2281 ($env2279, $identifier2280)
{return $g2264($env2279, "bound?", $g2234($identifier2280), false)}, false)
var $g2282 = $g2185()
var $g2283 = $g1464.get, $g2284 = $g2203("find_special_form", function $g2291 ($form2285, $env2286)
{if ($T($g2210($form2285)))
{var $sequence2288 = $form2285, $g2289 = $sequence2288[0], $g2290 = $g2234($g2289);
return $g2283($g2282, $g2290)}}, false)
{var $g2292 = $g1464["do"], $g2293 = $g1464.curry, $g2294;
$g2264($g2282, "%method", function $g2299 ($env2295, $rarguments2296, $body2297)
{$g2292($g2293($g2274, $env2295), $rarguments2296);
var $expanded_body2298 = $g2294($body2297, $env2295);
$g2292($g2293($g2278, $env2295), $rarguments2296);
return [$g2193("%method"), $rarguments2296, $expanded_body2298]})}
$g2264($g2282, "%set", function $g2303 ($env2300, $identifier2301, $value2302)
{return [$g2193("%set"), $identifier2301, $g2294($value2302, $env2300)]})
$g2264($g2282, "define", function $g2307 ($env2304, $identifier2305, $value2306)
{$g2274($env2304, $identifier2305);
return [$g2193("define"), $identifier2305, $g2294($value2306, $env2304)]})
$g2264($g2282, "%bind", function $g2315 ($env2308, $binding2309, $body2310)
{var $rvar2311 = $binding2309[0], $value2312 = $binding2309[1], $expanded_value2313 = $g2294($value2312, $env2308);
$g2274($env2308, $rvar2311);
var $result2314 = [$g2193("%bind"), [$rvar2311, $expanded_value2313], $g2294($body2310, $env2308)];
$g2278($env2308, $rvar2311);
return $result2314})
var $g2316 = $g2185()
var $g2318 = $g2203("maybe_begin", function $g2325 ($expressions2319)
{var $robject2322 = $expressions2319, $g2320 = (($robject2322 || false).length || 0);
if ($T($g2238($g2320, 0)))
return false
else if ($T($g2238($g2320, 1)))
{var $sequence2324 = $expressions2319;
return $sequence2324[0]}
else return $g2233([$g2193("%begin")], $expressions2319)}, false)
var $g2353 = $REST, $g2354 = $KEY, $g2355 = $K("end"), $g2356 = $K("start"), $g2328 = $g1464["find-key"], $g2329 = $g1464["="], $g2330 = $g1464["copy-sequence"], $g2331 = $g1464.element, $g2332 = $g1464.inc, $g2333 = $g2203("analyze_lambda_list", function $g2357 ($list2334)
{var $position2335 = function $g2358 ($symbol2336)
{return $g2328($list2334, $g2293($g2329, $symbol2336))}, $rest2337 = $position2335($g2353), $key2338 = $position2335($g2354), $g2339 = $rest2337, $g2347;
if ($T($g2339))
$g2347 = $g2339
else {var $g2340 = $key2338;
if ($T($g2340))
$g2347 = $g2340
else {var $robject2342 = $list2334;
$g2347 = (($robject2342 || false).length || 0)}};
var $g2348 = $g2330($list2334, $g2355, $g2347), $g2350;
if ($T($rest2337))
{var $rnumber2344 = $rest2337, $g2349 = ($rnumber2344 + 1);
$g2350 = $g2331($list2334, $g2349)}
else $g2350 = false;
var $g2352;
if ($T($key2338))
{var $rnumber2346 = $key2338, $g2351 = ($rnumber2346 + 1);
$g2352 = $g2330($list2334, $g2356, $g2351)}
else $g2352 = false;
return [$g2348, $g2350, $g2352]}, false)
var $g2359 = $g1464.reduce, $g2360 = $g2203("wrap", function $g2365 ($form2361)
{var $wrappers2362 = $SL.call(arguments, 1);
return $g2359(function $g2366 ($result2363, $wrapper2364)
{return $wrapper2364($result2363)}, $form2361, $wrappers2362)}, false)
var trueQ = $g1464["true?"], $g2369 = $g1464.map, $g2370 = $g1464.reduce1, $g2371 = $g2203("wrap_restSkeys", function $g2466 ($body2372, $all2373, $required2374, $rest2375, $key2376)
{var $restq2377 = $rest2375, $g2378 = $rest2375, $rest2379;
if ($T($g2378))
$rest2379 = $g2378
else {var $sequence2399 = $key2376, $g2400 = $sequence2399, $g2401 = (($g2400 || false).length || 0), $g2402 = 0, $value2403 = ($g2401 === $g2402), $g2448 = !(trueQ($value2403));
if ($T($g2448))
$rest2379 = $g2267()
else $rest2379 = false};
return $g2360($body2372, function $g2467 ($body2380)
{var $sequence2414 = $key2376, $g2415 = $sequence2414, $g2416 = (($g2415 || false).length || 0), $g2417 = 0, $g2449 = ($g2416 === $g2417);
if ($T($g2449))
return $body2380
else {var $key_values2382 = $g2369(function $g2468 ($binding2381)
{if ($T($g2204($binding2381, $g2205)))
return $binding2381
else return [$binding2381, false]}, $key2376), $g2450 = $g2193("bind-properties"), $g2451 = $g2369($g2208, $key_values2382), $g2452 = $g2193("%keys"), $g2453 = [$g2193("%object")], $rfunction2426 = $g2233, $values2427 = $g2369(function $g2469 ($key_value2383)
{var $key2384 = $key_value2383[0], $value2385 = $key_value2383[1];
return [$g2234($key2384), $value2385]}, $key_values2382), $g2428 = $values2427, $g2454 = $g2428[0], $g2429 = $values2427, $g2455 = $g2429.slice(1), $g2456 = $g2359($rfunction2426, $g2454, $g2455), $g2457 = $g2233($g2453, $g2456), $g2458 = [$g2452, $rest2379, $g2457];
return [$g2450, $g2451, $g2458, $body2380]}}, function $g2470 ($body2386)
{var $g2387 = $restq2377, $g2459;
if ($T($g2387))
$g2459 = $g2387
else {var $sequence2441 = $key2376, $g2442 = $sequence2441, $g2443 = (($g2442 || false).length || 0), $g2444 = 0, $value2445 = ($g2443 === $g2444);
$g2459 = !(trueQ($value2445))};
if ($T($g2459))
{var $g2460 = $g2193("bind"), $g2461 = $g2193("%native-call"), $robject2447 = $required2374, $g2462 = (($robject2447 || false).length || 0), $g2463 = [$g2461, "$SL.call", $all2373, $g2462], $g2464 = [$rest2379, $g2463], $g2465 = [$g2464];
return [$g2460, $g2465, $body2386]}
else return $body2386})}, false)
$g2264($g2316, "begin", function $g2473 ($__2471)
{var $expressions2472 = $SL.call(arguments, 1);
return $g2318($expressions2472)})
$g2264($g2316, "method", function $g2482 ($__2475, $rarguments2476)
{var $body2477 = $SL.call(arguments, 2), $g2478 = $g2333($rarguments2476), $required2479 = $g2478[0], $rest2480 = $g2478[1], $key2481 = $g2478[2];
return [$g2193("%method"), $required2479, $g2371($g2318($body2477), $g2193("%all-arguments"), $required2479, $rest2480, $key2481)]})
{var $g2483 = $g1464.reverse;
$g2264($g2316, "bind", function $g2506 ($__2484, $bindings2485)
{var $body2486 = $SL.call(arguments, 2), $sequence2499 = $bindings2485, $g2500 = $sequence2499, $g2501 = (($g2500 || false).length || 0), $g2502 = 0, $g2503 = ($g2501 === $g2502);
if ($T($g2503))
return $g2318($body2486)
else return $g2359(function $g2507 ($body2487, $binding2488)
{var $g2504 = $g2193("%bind"), $g2505;
if ($T($g2204($binding2488, $g2209)))
$g2505 = [$binding2488, false]
else $g2505 = $binding2488;
return [$g2504, $g2505, $body2487]}, $g2318($body2486), $g2483($bindings2485))})}
$g2264($g2316, "if", function $g2512 ($__2508, $test2509, $then2510, $relse2511)
{return [$g2193("%if"), $test2509, $then2510, $relse2511]})
{var trueQ = $g1464["true?"], $g2513 = $g1464.rest;
$g2264($g2316, "set!", function $g2536 ($__2514, $place2515)
{var $values2516 = $SL.call(arguments, 2), $g2529;
if ($T($g2204($place2515, $g2205)))
{var $sequence2519 = $place2515, $g2527 = $sequence2519[0], $g2528 = $g2193("%get-property"), $value2520 = $g2238($g2527, $g2528);
$g2529 = !(trueQ($value2520))}
else $g2529 = false;
if ($T($g2529))
{var $sequence2522 = $place2515, $g2530 = $sequence2522[0], $g2531 = $g2235($g2530), $g2532 = [$g2531], $sequence2524 = $place2515, $g2533 = $sequence2524.slice(1);
return $g2233($g2532, $g2533, $values2516)}
else {var $g2534 = $g2193("%set"), $sequence2526 = $values2516, $g2535 = $sequence2526[0];
return [$g2534, $place2515, $g2535]}})}
$g2264($g2316, "parallel-set!", function $g2557 ($__2537, $rvar2538, $value2539)
{var $clauses2540 = $SL.call(arguments, 3), $sequence2552 = $clauses2540, $g2553 = $sequence2552, $g2554 = (($g2553 || false).length || 0), $g2555 = 0, $g2556 = ($g2554 === $g2555);
if ($T($g2556))
return [$g2193("set!"), $rvar2538, $value2539]
else {var $temp2541 = $g2267();
return [$g2193("bind"), [[$temp2541, $value2539]], $g2233([$g2193("parallel-set!")], $clauses2540), [$g2193("set!"), $rvar2538, $temp2541]]}})
{var $g2590 = $K("else"), trueQ = $g1464["true?"];
$g2264($g2316, "cond", function $g2591 ($__2559)
{var $cases2560 = $SL.call(arguments, 1), $sequence2576 = $cases2560, $g2577 = $sequence2576, $g2578 = (($g2577 || false).length || 0), $g2579 = 0, $value2580 = ($g2578 === $g2579), $g2585 = !(trueQ($value2580));
if ($T($g2585))
{var $sequence2582 = $cases2560, $g2561 = $sequence2582[0], $test2562 = $g2561[0], $then2563 = $SL.call($g2561, 1), $then2564 = $g2318($then2563);
if ($T($g2238($test2562, $g2590)))
return $then2564
else {var $g2586 = $g2193("if"), $g2587 = [$g2193("cond")], $sequence2584 = $cases2560, $g2588 = $sequence2584.slice(1), $g2589 = $g2233($g2587, $g2588);
return [$g2586, $test2562, $then2564, $g2589]}}})}
$g2264($g2316, "when", function $g2595 ($__2592, $test2593)
{var $body2594 = $SL.call(arguments, 2);
return [$g2193("if"), $test2593, $g2318($body2594), false]})
$g2264($g2316, "unless", function $g2599 ($__2596, $test2597)
{var $body2598 = $SL.call(arguments, 2);
return [$g2193("if"), [$g2193("not"), $test2597], $g2318($body2598), false]})
$g2264($g2316, "and", function $g2617 ($__2601)
{var $values2602 = $SL.call(arguments, 1), $robject2605 = $values2602, $g2603 = (($robject2605 || false).length || 0);
if ($T($g2238($g2603, 0)))
return true
else if ($T($g2238($g2603, 1)))
{var $sequence2607 = $values2602;
return $sequence2607[0]}
else {var $g2612 = $g2193("when"), $sequence2609 = $values2602, $g2613 = $sequence2609[0], $g2614 = [$g2193("and")], $sequence2611 = $values2602, $g2615 = $sequence2611.slice(1), $g2616 = $g2233($g2614, $g2615);
return [$g2612, $g2613, $g2616]}})
$g2264($g2316, "or", function $g2640 ($__2619)
{var $values2620 = $SL.call(arguments, 1), $robject2624 = $values2620, $g2621 = (($robject2624 || false).length || 0);
if ($T($g2238($g2621, 0)))
return false
else if ($T($g2238($g2621, 1)))
{var $sequence2626 = $values2620;
return $sequence2626[0]}
else {var $value2622 = $g2267(), $g2631 = $g2193("bind"), $sequence2628 = $values2620, $g2632 = $sequence2628[0], $g2633 = [$value2622, $g2632], $g2634 = [$g2633], $g2635 = $g2193("if"), $g2636 = [$g2193("or")], $sequence2630 = $values2620, $g2637 = $sequence2630.slice(1), $g2638 = $g2233($g2636, $g2637), $g2639 = [$g2635, $value2622, $value2622, $g2638];
return [$g2631, $g2634, $g2639]}})
$g2264($g2316, "if-bind", function $g2648 ($__2641, $binding2642, $then2643, $relse2644)
{var $rvar2645 = $binding2642[0], $value2646 = $binding2642[1], $temp2647 = $g2267();
return [$g2193("bind"), [[$temp2647, $value2646]], [$g2193("if"), $temp2647, [$g2193("bind"), [[$rvar2645, $temp2647]], $then2643], $relse2644]]})
$g2264($g2316, "while", function $g2652 ($__2649, $test2650)
{var $body2651 = $SL.call(arguments, 2);
return [$g2193("%while"), $test2650, $g2318($body2651)]})
$g2264($g2316, "until", function $g2656 ($__2653, $test2654)
{var $body2655 = $SL.call(arguments, 2);
return $g2233([$g2193("while"), [$g2193("not"), $test2654]], $body2655)})
$g2264($g2316, "dotimes", function $g2675 ($__2658, $binding2659)
{var $body2660 = $SL.call(arguments, 2), $temp2661 = $g2267(), $rvar2662 = $binding2659[0], $count2663 = $binding2659[1], $result2664 = $binding2659[2], $g2666 = $g2193("bind"), $g2667 = [[$temp2661, $count2663]], $g2668 = $g2193("for"), $g2669 = [[$rvar2662, 0, [$g2193("+"), $rvar2662, 1]]], $g2670 = [$g2193(">="), $rvar2662, $temp2661], $g2665 = $result2664, $g2671;
if ($T($g2665))
$g2671 = $g2665
else $g2671 = false;
var $g2672 = [$g2670, $g2671], $g2673 = [$g2668, $g2669, $g2672], $g2674 = $g2233($g2673, $body2660);
return [$g2666, $g2667, $g2674]})
{var trueQ = $g1464["true?"], $g2682 = $g1464["any?"], $g2683 = $g1464["push-last"], $g2684 = $g1464.slice, $g2685 = $g1464.third;
$g2264($g2316, "for", function $g2780 ($__2686, $clauses2687, $end2688)
{var $body2689 = $SL.call(arguments, 3), $init_clauses2690 = [], $next_clauses2691 = [], $vars2692 = $g2369($g2208, $clauses2687), $g2693 = $clauses2687, $g2694, $g2695, $g2696 = [$g2693];
while ($T(true))
{var $g2697 = $g2694, $value2702;
if ($T($g2697))
$value2702 = $g2697
else $value2702 = $g2682($g2207, $g2696);
var $g2766 = !(trueQ($value2702));
if ($T($g2766))
{var $sequence2704 = $g2693, $clause2698 = $sequence2704[0];
(function $g2781 ($clause2699)
{var $rarray2713 = $init_clauses2690, $rarray2710 = $clause2699, $start2711 = 0, $end2712 = 2, $value2714 = $rarray2710.slice($start2711, $end2712);
$rarray2713.push($value2714);
$rarray2713;
var $rarray2719 = $next_clauses2691, $sequence2718 = $clause2699, $value2720 = $sequence2718[0];
$rarray2719.push($value2720);
$rarray2719;
var $rarray2725 = $next_clauses2691, $sequence2724 = $clause2699, $value2726 = $sequence2724[2];
$rarray2725.push($value2726);
return $rarray2725})($clause2698);
var $sequence2728 = $g2693, $g2765 = $sequence2728.slice(1);
$g2693 = $g2765;
$g2696 = [$g2693]}
else break};
$g2695;
var $g2767 = $g2193("bind"), $g2768 = $g2193("while"), $sequence2739 = $end2688, $g2740 = $sequence2739, $g2741 = (($g2740 || false).length || 0), $g2742 = 0, $g2700 = ($g2741 === $g2742), $g2771;
if ($T($g2700))
$g2771 = $g2700
else {var $g2769 = $g2193("not"), $sequence2744 = $end2688, $g2770 = $sequence2744[0];
$g2771 = [$g2769, $g2770]};
var $g2772 = $g2233([$g2233([$g2193("method"), $vars2692], $body2689)], $vars2692), $g2773 = $g2233([$g2193("parallel-set!")], $next_clauses2691), $g2774 = [$g2768, $g2771, $g2772, $g2773], $g2775 = $g2233($g2774), $sequence2757 = $end2688, $sequence2758 = $sequence2757.slice(1), $g2759 = $sequence2758, $g2760 = (($g2759 || false).length || 0), $g2761 = 0, $value2762 = ($g2760 === $g2761), $g2776 = !(trueQ($value2762)), $g2779;
if ($T($g2776))
{var $g2777 = [$g2193("begin")], $sequence2764 = $end2688, $g2778 = $sequence2764.slice(1);
$g2779 = $g2233($g2777, $g2778)}
else $g2779 = false;
return [$g2767, $init_clauses2690, $g2775, $g2779]})}
$g2264($g2316, "for-each", function $g2856 ($__2783, $clauses2784, $end2785)
{var $body2786 = $SL.call(arguments, 3), $clauses2788 = $g2369(function $g2857 ($clause2787)
{return $g2233([$g2267()], $clause2787)}, $clauses2784), $endq2789 = $g2267(), $values2790 = $g2267(), $result2791 = $g2267(), $g2828 = $g2193("begin"), $vars2792 = $g2369($g2253, $clauses2788), $g2829 = $g2233([$g2233([$g2193("method"), $vars2792], $body2786)], $vars2792), $g2830 = [$g2828, $g2829], $g2836 = $g2369(function $g2858 ($clause2793)
{var $g2831 = $g2193("set!"), $sequence2807 = $clause2793, $g2832 = $sequence2807[0], $g2833 = $g2193("rest"), $sequence2809 = $clause2793, $g2834 = $sequence2809[0], $g2835 = [$g2833, $g2834];
return [$g2831, $g2832, $g2835]}, $clauses2788), $g2837 = [[$g2193("set!"), $values2790, $g2233([$g2193("%array")], $g2369($g2208, $clauses2788))]], $body2794 = $g2233($g2830, $g2836, $g2837), $g2838 = $g2193("bind"), $g2839 = $g2233($g2369(function $g2859 ($clause2795)
{var $temp2796 = $clause2795[0], $rvar2797 = $clause2795[1], $values2798 = $clause2795[2];
return [$temp2796, $values2798]}, $clauses2788), [[$endq2789, false], [$result2791, false], [$values2790, $g2233([$g2193("%array")], $g2369($g2208, $clauses2788))]]), $g2840 = $g2193("until"), $g2841 = [$g2193("or"), $endq2789, [$g2193("any?"), $g2193("empty?"), $values2790]], $g2842 = $g2193("bind"), $g2843 = $g2369(function $g2860 ($clause2799)
{var $temp2800 = $clause2799[0], $rvar2801 = $clause2799[1], $values2802 = $clause2799[2];
return [$rvar2801, [$g2193("first"), $temp2800]]}, $clauses2788), $sequence2811 = $end2785, $g2803 = $sequence2811[0], $g2853;
if ($T($g2803))
{var $end_test2804 = $g2803, $g2844 = $g2193("if"), $g2845 = $g2193("begin"), $g2846 = $g2193("set!"), $sequence2813 = $end2785, $results2805 = $sequence2813.slice(1), $sequence2824 = $results2805, $g2825 = $sequence2824, $g2826 = (($g2825 || false).length || 0), $g2827 = 0, $g2847 = ($g2826 === $g2827), $g2848;
if ($T($g2847))
$g2848 = [false]
else $g2848 = $results2805;
var $g2849 = $g2318($g2848), $g2850 = [$g2846, $result2791, $g2849], $g2851 = [$g2193("set!"), $endq2789, true], $g2852 = [$g2845, $g2850, $g2851];
$g2853 = [$g2844, $end_test2804, $g2852, $body2794]}
else $g2853 = $body2794;
var $g2854 = [$g2842, $g2843, $g2853], $g2855 = [$g2840, $g2841, $g2854];
return [$g2838, $g2839, $g2855, $result2791]})
$g2264($g2316, "bind-properties", function $g2867 ($__2861, $properties2862, $robject2863)
{var $body2864 = $SL.call(arguments, 3), $objectt2865 = $g2267();
return $g2233([$g2193("bind"), $g2233([[$objectt2865, $robject2863]], $g2369(function $g2868 ($property2866)
{return [$property2866, [$g2193("%get-property"), $objectt2865, $g2234($property2866)]]}, $properties2862))], $body2864)})
$g2264($g2316, "select", function $g2885 ($__2869, $value2870, $test2871)
{var $cases2872 = $SL.call(arguments, 3), $valuet2873 = $g2267(), $testt2874;
if ($T($g2204($test2871, $g2209)))
$testt2874 = $test2871
else $testt2874 = $g2267();
var $test_expression2875 = function $g2886 ($test_value2876)
{return [$testt2874, $valuet2873, $test_value2876]}, $g2880 = $g2193("bind"), $g2881 = [[$valuet2873, $value2870]], $g2882;
if ($T($g2204($test2871, $g2209)))
$g2882 = []
else $g2882 = [[$testt2874, $test2871]];
var $g2883 = $g2233($g2881, $g2882), $g2884 = $g2233([$g2193("cond")], $g2369(function $g2887 ($rcase2877)
{var $tests2878 = $rcase2877[0], $then2879 = $SL.call($rcase2877, 1);
if ($T($g2238($tests2878, $g2590)))
return $rcase2877
else return $g2233([$g2233([$g2193("or")], $g2369($test_expression2875, $tests2878))], $then2879)}, $cases2872));
return [$g2880, $g2883, $g2884]})
var $g2889 = $g2203("destructure", function $g2903 ($bindings2890, $values2891, $body2892)
{if ($T($g2204($values2891, $g2209)))
{var $g2893 = $g2333($bindings2890), $required2894 = $g2893[0], $rest2895 = $g2893[1], $key2896 = $g2893[2], $robject2902 = $required2894, $i2897 = (($robject2902 || false).length || 0);
return $g2359(function $g2904 ($body2898, $binding2899)
{$i2897 = ($i2897 - 1);
if ($T($g2204($binding2899, $g2209)))
return [$g2193("bind"), [[$binding2899, [$g2193("%get-property"), $values2891, $i2897]]], $body2898]
else return $g2889($binding2899, [$g2193("%get-property"), $values2891, $i2897], $body2898)}, $g2371($body2892, $values2891, $required2894, $rest2895, $key2896), $g2483($required2894))}
else {var $rvar2900 = $g2267();
return [$g2193("bind"), [[$rvar2900, $values2891]], $g2889($bindings2890, $rvar2900, $body2892)]}}, false)
$g2264($g2316, "destructuring-bind", function $g2909 ($__2905, $bindings2906, $values2907)
{var $body2908 = $SL.call(arguments, 3);
return $g2889($bindings2906, $values2907, $g2233([$g2193("begin")], $body2908))})
$g2264($g2316, "bind-methods", function $g2917 ($__2910, $bindings2911)
{var $body2912 = $SL.call(arguments, 2);
return $g2233([$g2193("bind"), $g2369($g2208, $bindings2911)], $g2369(function $g2918 ($binding2913)
{var $identifier2914 = $binding2913[0], $rarguments2915 = $binding2913[1], $body2916 = $SL.call($binding2913, 2);
return [$g2193("set!"), $identifier2914, $g2233([$g2193("method"), $rarguments2915], $body2916)]}, $bindings2911), $body2912)})
$g2264($g2316, "inc!", function $g2928 ($__2920, $robject2921, $value2922)
{var $g2924 = $g2193("set!"), $g2925 = $g2193("+"), $g2923 = $value2922, $g2926;
if ($T($g2923))
$g2926 = $g2923
else $g2926 = 1;
var $g2927 = [$g2925, $robject2921, $g2926];
return [$g2924, $robject2921, $g2927]})
$g2264($g2316, "dec!", function $g2938 ($__2930, $robject2931, $value2932)
{var $g2934 = $g2193("set!"), $g2935 = $g2193("-"), $g2933 = $value2932, $g2936;
if ($T($g2933))
$g2936 = $g2933
else $g2936 = 1;
var $g2937 = [$g2935, $robject2931, $g2936];
return [$g2934, $robject2931, $g2937]})
$g2264($g2316, "+", function $g2956 ($__2939)
{var $values2940 = $SL.call(arguments, 1), $sequence2951 = $values2940, $g2952 = $sequence2951, $g2953 = (($g2952 || false).length || 0), $g2954 = 0, $g2955 = ($g2953 === $g2954);
if ($T($g2955))
return 0
else return $g2233([$g2193("%plus")], $values2940)})
$g2264($g2316, "-", function $g2975 ($__2957, $minuend2958)
{var $subtrahends2959 = $SL.call(arguments, 2), $sequence2970 = $subtrahends2959, $g2971 = $sequence2970, $g2972 = (($g2971 || false).length || 0), $g2973 = 0, $g2974 = ($g2972 === $g2973);
if ($T($g2974))
return [$g2193("%native-call"), "-", $minuend2958]
else return $g2233([$g2193("%minus"), $minuend2958], $subtrahends2959)})
$g2264($g2316, "*", function $g2993 ($__2976)
{var $values2977 = $SL.call(arguments, 1), $sequence2988 = $values2977, $g2989 = $sequence2988, $g2990 = (($g2989 || false).length || 0), $g2991 = 0, $g2992 = ($g2990 === $g2991);
if ($T($g2992))
return 1
else return $g2233([$g2193("%times")], $values2977)})
$g2264($g2316, "/", function $g3012 ($__2994, $numerator2995)
{var $denominators2996 = $SL.call(arguments, 2), $sequence3007 = $denominators2996, $g3008 = $sequence3007, $g3009 = (($g3008 || false).length || 0), $g3010 = 0, $g3011 = ($g3009 === $g3010);
if ($T($g3011))
return [$g2193("%divide"), 1, $numerator2995]
else return $g2233([$g2193("%divide"), $numerator2995], $denominators2996)})
$g2264($g2316, "call-next-method", function $g3014 ($__3013)
{return [[$g2193("%get-property"), $g2193("next-method"), "apply"], [$g2193("%native"), "null"], [$g2193("%native"), "arguments"]]})
var trueQ = $g1464["true?"], $g3015 = $g2203("transform_quoted", function $g3041 ($form3016)
{if ($T($g2204($form3016, $g2205)))
{var $sequence3028 = $form3016, $g3029 = $sequence3028, $g3030 = (($g3029 || false).length || 0), $g3031 = 0, $value3032 = ($g3030 === $g3031), $g3037 = !(trueQ($value3032)), $g3040;
if ($T($g3037))
{var $sequence3034 = $form3016, $g3038 = $sequence3034[0], $g3039 = $g2234($g3038);
$g3040 = $g2238($g3039, "%comma")}
else $g3040 = false;
if ($T($g3040))
{var $sequence3036 = $form3016;
return $sequence3036[1]}
else return $g2233([$g2193("%array")], $g2369($g3015, $form3016))}
else if ($T($g2204($form3016, $g2209)))
return [$g2193("symbol"), $g2234($form3016)]
else return $form3016}, false)
$g2264($g2316, "%backquote", function $g3044 ($__3042, $exp3043)
{return $g3015($exp3043)})
{var $g3052 = $K("message"), $g3045 = $g1464.signal, $g3046 = $g1464.make, $g3047 = $g1464["<error>"];
$g2264($g2316, "%comma", function $g3053 ($__3048, $value3049)
{var $error3051 = $g3046($g3047, $g3052, "comma not inside backquote");
throw($error3051);
return false})}
var $g3054 = $g3046($g3047, $g3052, "unsupported name for call in dot")
{var $g3056 = $g1464["<string>"];
$g2264($g2316, ".", function $g3071 ($__3057, $value3058)
{var $calls3059 = $SL.call(arguments, 2);
return $g2359(function $g3072 ($value3060, $call3061)
{var $property3062 = $call3061[0], $rarguments3063 = $SL.call($call3061, 1), $g3067 = $g2193("%get-property"), $g3064 = $property3062, $g3068;
if ($T($g2204($g3064, $g3056)))
$g3068 = $property3062
else if ($T($g2204($g3064, $g2209)))
$g3068 = $g2234($property3062)
else {var $error3066 = $g3054;
throw($error3066);
$g3068 = false};
var $g3069 = [$g3067, $value3060, $g3068], $g3070 = [$g3069];
return $g2233($g3070, $rarguments3063)}, $value3058, $calls3059)})}
var $g3074 = $g2203("simplify_arguments", function $g3086 ($rarguments3075)
{var $g3076 = $g2333($rarguments3075), $required3077 = $g3076[0], $rest3078 = $g3076[1], $key3079 = $g3076[2], $required3081 = $g2369(function $g3087 ($argument3080)
{if ($T($g2204($argument3080, $g2205)))
{var $sequence3083 = $argument3080;
return $sequence3083[0]}
else return $argument3080}, $required3077), $g3084;
if ($T($rest3078))
$g3084 = $g2233([$g2353], $rest3078)
else $g3084 = [];
var $g3085;
if ($T($key3079))
$g3085 = $g2233([$g2354], $key3079)
else $g3085 = [];
return $g2233($required3081, $g3084, $g3085)}, false)
var trueQ = $g1464["true?"], $g3092 = $g1464[">"], $g3093 = $g1464["%keys"], $g3094 = $g2203("make_function_definer", function $g3151 ($macro_name3095, $definer_name3096)
{var $g3097 = $SL.call(arguments, 2), $g3098 = $g3093($g3097, {"type/existing?":false,
"record?":false}), $typesexistingq3099 = $g3098["type/existing?"], $recordq3100 = $g3098["record?"];
return function $g3152 ($env3101, $identifier3102, $rarguments3103)
{var $body3104 = $SL.call(arguments, 3), $g3105;
if ($T($g2242($identifier3102)))
{var $sequence3113 = $identifier3102, $g3140 = $sequence3113[1], $g3141 = $g2235($g3140);
$g3105 = [true, $g3141]}
else $g3105 = [false, $identifier3102];
var $setterq3106 = $g3105[0], $identifier3107 = $g3105[1], $g3108 = $g2204($identifier3107, $g2209), $value3115;
if ($T($g3108))
$value3115 = $g3108
else $value3115 = $setterq3106;
var $g3142 = !(trueQ($value3115));
if ($T($g3142))
{var $error3117 = $g3046($g3047, $g3052, $g2233($macro_name3095, ": ", "name not <var> or (setter <var>)"));
throw($error3117);
false};
var $g3143;
if ($T($typesexistingq3099))
{var $sequence3128 = $rarguments3103, $g3129 = $sequence3128, $g3130 = (($g3129 || false).length || 0), $g3131 = 0;
$g3143 = ($g3130 === $g3131)}
else $g3143 = false;
if ($T($g3143))
{var $error3133 = $g3046($g3047, $g3052, $g2233($macro_name3095, ": ", "method has no arguments"));
throw($error3133);
false};
var $simplified_arguments3109 = $g3074($rarguments3103), $method_definition3110 = $g2294($g2233([$g2193("method"), $simplified_arguments3109], $body3104), $env3101);
if ($T($recordq3100))
$g2264($env3101, "module", "functions", $g2234($identifier3107), $method_definition3110);
var $g3144 = $g2193("define"), $g3145 = [$g2193($definer_name3096), [$g2193("%native-name"), $g2234($identifier3107)], $method_definition3110, $setterq3106], $g3149;
if ($T($typesexistingq3099))
{var $sequence3135 = $rarguments3103, $head3111 = $sequence3135[0], $g3147;
if ($T($g2204($head3111, $g2205)))
{var $robject3137 = $head3111, $g3146 = (($robject3137 || false).length || 0);
$g3147 = $g3092($g3146, 1)}
else $g3147 = false;
var $g3148;
if ($T($g3147))
{var $sequence3139 = $head3111;
$g3148 = $sequence3139[1]}
else $g3148 = $g2193("<object>");
$g3149 = [$g3148, $identifier3107]}
else $g3149 = [];
var $g3150 = $g2233($g3145, $g3149);
return [$g3144, $identifier3107, $g3150]}}, false)
{var $g3178 = $K("type/existing?"), $g3179 = $K("record?"), trueQ = $g1464["true?"], $g3158 = $g1464.apply, $g3159 = [["define-function", "%make-function", $g3178, false, $g3179, true], ["define-method", "%make-method", $g3178, true]], $g3160, $g3161, $g3162 = [$g3159];
while ($T(true))
{var $g3163 = $g3160, $value3167;
if ($T($g3163))
$value3167 = $g3163
else $value3167 = $g2682($g2207, $g3162);
var $g3177 = !(trueQ($value3167));
if ($T($g3177))
{var $sequence3169 = $g3159, $rarguments3164 = $sequence3169[0];
(function $g3180 ($rarguments3165)
{var $sequence3171 = $rarguments3165, $g3174 = $sequence3171[0], $g3175 = $g3158($g3094, $rarguments3165);
return $g2264($g2316, $g3174, $g3175)})($rarguments3164);
var $sequence3173 = $g3159, $g3176 = $sequence3173.slice(1);
$g3159 = $g3176;
$g3162 = [$g3159]}
else break};
$g3161}
$g2264($g2316, "define-generic", function $g3184 ($__3181, $identifier3182, $rarguments3183)
{return [$g2193("define"), $identifier3182, [$g2193("%make-generic"), [$g2193("%native-name"), $g2234($identifier3182)]]]})
{var trueQ = $g1464["true?"];
$g2264($g2316, "define-class", function $g3257 ($__3190, $identifier3191, $superclass3192)
{var $properties3193 = $SL.call(arguments, 3), $robject3194 = [$g2193("%object")], $g3195 = $properties3193, $g3196, $g3197, $g3198 = [$g3195];
while ($T(true))
{var $g3199 = $g3196, $value3203;
if ($T($g3199))
$value3203 = $g3199
else $value3203 = $g2682($g2207, $g3198);
var $g3251 = !(trueQ($value3203));
if ($T($g3251))
{var $sequence3205 = $g3195, $property3200 = $sequence3205[0];
(function $g3258 ($property3201)
{if ($T($g2204($property3201, $g2205)))
{var $rarray3210 = $robject3194, $sequence3209 = $property3201, $g3246 = $sequence3209[0], $value3211 = $g2234($g3246);
$rarray3210.push($value3211);
$rarray3210;
var $rarray3216 = $robject3194, $g3247 = $g2193("method"), $g3248 = [], $sequence3215 = $property3201, $g3249 = $sequence3215[1], $value3217 = [$g3247, $g3248, $g3249];
$rarray3216.push($value3217);
return $rarray3216}
else {var $rarray3220 = $robject3194, $value3221 = $g2234($property3201);
$rarray3220.push($value3221);
$rarray3220;
var $rarray3224 = $robject3194, $value3225 = undefined;
$rarray3224.push($value3225);
return $rarray3224}})($property3200);
var $sequence3227 = $g3195, $g3250 = $sequence3227.slice(1);
$g3195 = $g3250;
$g3198 = [$g3195]}
else break};
$g3197;
var $g3252 = $g2193("define"), $g3253 = $g2193("%make-class"), $sequence3239 = $superclass3192, $g3240 = $sequence3239, $g3241 = (($g3240 || false).length || 0), $g3242 = 0, $value3243 = ($g3241 === $g3242), $g3254 = !(trueQ($value3243)), $g3255;
if ($T($g3254))
{var $sequence3245 = $superclass3192;
$g3255 = $sequence3245[0]}
else $g3255 = false;
var $g3256 = [$g3253, $g3255, $robject3194];
return [$g3252, $identifier3191, $g3256]})}
var $g3259 = $g2203("get_import_module_nameSoptions", function $g3268 ($rimport3260)
{var $g3265;
if ($T($g2204($rimport3260, $g2205)))
{var $sequence3262 = $rimport3260;
$g3265 = $sequence3262[0]}
else $g3265 = $rimport3260;
var $g3266 = $g2234($g3265), $g3267;
if ($T($g2204($rimport3260, $g2205)))
{var $sequence3264 = $rimport3260;
$g3267 = $sequence3264.slice(1)}
else $g3267 = [];
return [$g3266, $g3267]}, false)
{var $g3273, $g3274, $g3275;
$g2264($g2316, "define-module", function $g3292 ($env3276, $__3277)
{var $g3278 = $SL.call(arguments, 2), $g3279 = $g3093($g3278, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), $rimport3280 = $g3279["import"], $rexport3281 = $g3279["export"], $compile_time_import3282 = $g3279["compile-time-import"], $inline3283 = $g3279.inline;
$g2264($env3276, "module", "exports", $g2369($g2254, $rexport3281));
$g2292(function $g3293 ($rimport3284)
{var $g3285 = $g3259($rimport3284), $module_name3286 = $g3285[0], $options3287 = $g3285[1];
return $g3158($g3273, $env3276, $module_name3286, $options3287)}, $compile_time_import3282);
$g2264($env3276, "module", "inline", $g2369($g2254, $inline3283));
return $g2318($g2369(function $g3294 ($rimport3288)
{var $g3289 = $g3259($rimport3288), $module_name3290 = $g3289[0], $options3291 = $g3289[1];
$g3158($g3274, $g2283($env3276, "module"), $module_name3290, $options3291);
return $g3275($module_name3290, $env3276)}, $rimport3280))})}
$g3275 = $g2203("make_import_definition", function $g3298 ($module_name3295, $env3296)
{var $identifier3297 = $g2267();
$g2264($env3296, "import-identifiers", $module_name3295, $identifier3297);
return [$g2193("define"), $identifier3297, [[$g2193("%native"), "require"], $module_name3295]]}, false)
$g2264($g2316, "define-macro", function $g3303 ($env3299, $identifier3300, $rarguments3301)
{var $body3302 = $SL.call(arguments, 3);
return [$g2193("begin"), $g2233([$g2193("define-function"), $identifier3300, $g2233([$g2267()], $rarguments3301)], $body3302), [$g2193("set!"), [$g2193("%get-property"), $identifier3300, "%macro?"], true]]})
$g2264($g2316, "define-symbol-macro", function $g3308 ($env3304, $identifier3305, $rarguments3306)
{var $body3307 = $SL.call(arguments, 3);
return [$g2193("begin"), $g2233([$g2193("define-function"), $identifier3305, []], $body3307), [$g2193("set!"), [$g2193("%get-property"), $identifier3305, "%symbol-macro?"], true]]})
$g2264($g2316, "handler-case", function $g3325 ($__3312, $body3313)
{var $cases3314 = $SL.call(arguments, 2), $condition_var3315 = $g2267();
return [$g2193("%try"), $body3313, $condition_var3315, $g2233([$g2193("cond")], $g2369(function $g3326 ($rcase3316)
{var $g3317 = $rcase3316[0], $type3318 = $g3317[0], $g3319 = $SL.call($g3317, 1), $g3320 = $g3093($g3319, {condition:false}), $condition3321 = $g3320.condition, $body3322 = $SL.call($rcase3316, 1), $g3323 = [[$g2193("instance?"), $condition_var3315, $type3318]], $g3324;
if ($T($condition3321))
$g3324 = [$g2233([$g2193("bind"), [[$condition3321, $condition_var3315]]], $body3322)]
else $g3324 = $body3322;
return $g2233($g3323, $g3324)}, $cases3314))]})
var $g3327, $g3328 = $g1464.identity, $g3329 = $g2203("lift_defines", function $g3332 ($exp3330, $env3331)
{return $g3327($exp3330, $env3331, $g3328)}, false)
{var $g3338, $g3339 = $g1464["has?"], $g3340;
$g3327 = $g2203("lift_define", function $g3389 ($exp3341, $env3342, $k3343)
{if ($T($g2210($exp3341)))
{var $sequence3380 = $exp3341, $g3385 = $sequence3380[0], $g3344 = $g2234($g3385);
if ($T($g2238($g3344, "%bind")))
{var $__3345 = $exp3341[0], $g3346 = $exp3341[1], $rvar3347 = $g3346[0], $value3348 = $g3346[1], $body3349 = $exp3341[2];
return $g3327($value3348, $env3342, function $g3390 ($lvalue3350, $env3351)
{return $g3327($body3349, $env3351, function $g3391 ($lbody3352, $env3353)
{return $k3343([$g2193("%bind"), [$rvar3347, $lvalue3350], $lbody3352], $env3353)})})}
else if ($T($g2238($g3344, "%try")))
{var $m3354 = $exp3341[0], $e13355 = $exp3341[1], $v3356 = $exp3341[2], $e23357 = $exp3341[3];
return $g3338([$e13355, $e23357], $env3342, function $g3392 ($let3358, $env3359)
{var $le13360 = $let3358[0], $le23361 = $let3358[1];
return $k3343([$m3354, $le13360, $v3356, $le23361], $env3359)})}
else {var $g3362 = $g2238($g3344, "%method"), $g3386;
if ($T($g3362))
$g3386 = $g3362
else $g3386 = $g2238($g3344, "%set");
if ($T($g3386))
{var $m3363 = $exp3341[0], $e13364 = $exp3341[1], $e23365 = $exp3341[2];
return $g3327($e23365, $env3342, function $g3393 ($le23366, $env3367)
{return $k3343([$m3363, $e13364, $le23366], $env3367)})}
else {var $g3368 = $g2238($g3344, "%begin"), $g3387;
if ($T($g3368))
$g3387 = $g3368
else {var $g3369 = $g2238($g3344, "%if");
if ($T($g3369))
$g3387 = $g3369
else $g3387 = $g2238($g3344, "%while")};
if ($T($g3387))
{var $m3370 = $exp3341[0], $et3371 = $SL.call($exp3341, 1);
return $g3338($et3371, $env3342, function $g3394 ($let3372, $env3373)
{return $k3343($g2233([$m3370], $let3372), $env3373)})}
else if ($T($g2238($g3344, "define")))
{var $__3374 = $exp3341[0], $rvar3375 = $exp3341[1], $value3376 = $exp3341[2], $exportq3377 = $exp3341[3], $name3378 = $g2234($rvar3375), $robject3383 = $g2283($env3342, "defined?"), $property3384 = $name3378, $g3388 = $HP.call($robject3383,$property3384);
if ($T($g3388))
return $k3343([$g2193("%set"), $rvar3375, $value3376], $env3342)
else {$g2264($env3342, "defined?", $name3378, true);
return [$g2193("%begin"), [$g2193("%define"), $rvar3375], $k3343([$g2193("%set"), $rvar3375, $value3376], $env3342)]}}
else return $g3340($exp3341, $env3342, $k3343)}}}
else return $k3343($exp3341, $env3342)}, false)}
$g3338 = $g2203("lift_defineT", function $g3413 ($expt3395, $env3396, $k3397)
{var $sequence3408 = $expt3395, $g3409 = $sequence3408, $g3410 = (($g3409 || false).length || 0), $g3411 = 0, $g3412 = ($g3410 === $g3411);
if ($T($g3412))
return $k3397([], $env3396)
else return $g3340($expt3395, $env3396, $k3397)}, false)
$g3340 = $g2203("lift_defineTT", function $g3429 ($exp3414, $env3415, $k3416)
{var $sequence3422 = $exp3414, $g3425 = $sequence3422[0], $g3428 = function $g3430 ($t3417, $env3418)
{var $sequence3424 = $exp3414, $g3426 = $sequence3424.slice(1), $g3427 = function $g3431 ($tt3419, $env3420)
{return $k3416($g2233([$t3417], $tt3419), $env3420)};
return $g3338($g3426, $env3418, $g3427)};
return $g3327($g3425, $env3415, $g3428)}, false)
var $g3432 = $g2185()
$g2264($g3432, "next-method", function $g3434 ($__3433)
{return [$g2193("%next-method"), $g2193("%this-method")]})
var trueQ = $g1464["true?"], $g3436 = $g2203("find_macro_definition", function $g3468 ($form3437, $env3438)
{var $g3439 = $form3437;
if ($T($g2204($g3439, $g2205)))
{var $sequence3452 = $form3437, $g3453 = $sequence3452, $g3454 = (($g3453 || false).length || 0), $g3455 = 0, $g3464 = ($g3454 === $g3455);
if ($T($g3464))
{var $error3457 = "Empty form";
throw($error3457);
false};
var $sequence3459 = $form3437, $g3465 = $sequence3459[0], $name3440 = $g2234($g3465), $value3461 = $g2283($env3438, "bound?", $name3440), $g3466 = !(trueQ($value3461));
if ($T($g3466))
return $env3438.macros[$name3440]}
else if ($T($g2204($g3439, $g2209)))
{var $name3441 = $g2234($form3437), $value3463 = $g2283($env3438, "bound?", $name3441), $g3467 = !(trueQ($value3463));
if ($T($g3467))
return $env3438["symbol-macros"][$name3441]}}, false)
var $g3470 = $g2203("macroexpand_1", function $g3478 ($form3471, $env3472)
{var $g3473 = $g3436($form3471, $env3472);
if ($T($g3473))
{var $macro3474 = $g3473, $g3477;
if ($T($g2204($form3471, $g2205)))
{var $sequence3476 = $form3471;
$g3477 = $sequence3476.slice(1)}
else $g3477 = $form3471;
return $g3158($macro3474, $env3472, $g3477)}
else return $form3471}, false)
var trueQ = $g1464["true?"], $g3479 = $g2203("macroexpand", function $g3487 ($form3480, $env3481)
{var $doneq3482;
while ($T(true))
{var $value3485 = $doneq3482, $g3486 = !(trueQ($value3485));
if ($T($g3486))
{var $expanded3483 = $g3470($form3480, $env3481);
$doneq3482 = $g2238($expanded3483, $form3480);
$form3480 = $expanded3483}
else break};
return $form3480}, false)
$g2294 = $g2203("macroexpand_all", function $g3498 ($form3490, $env3491)
{var $g3492 = $form3490;
if ($T($g2204($g3492, $g2205)))
if ($T($g3436($form3490, $env3491)))
return $g2294($g3479($form3490, $env3491), $env3491)
else {var $g3493 = $g2284($form3490, $env3491);
if ($T($g3493))
{var $expander3494 = $g3493, $sequence3496 = $form3490, $g3497 = $sequence3496.slice(1);
return $g3158($expander3494, $env3491, $g3497)}
else return $g2369($g2241($g2294, $env3491), $form3490)}
else if ($T($g2204($g3492, $g2209)))
if ($T($g3436($form3490, $env3491)))
return $g2294($g3479($form3490, $env3491), $env3491)
else return $form3490
else return $form3490}, false)
var $g3500 = $g2203("find_moduleSimport_name", function $g3510 ($definition_name3501, $env3502)
{return $g2682(function $g3511 ($rimport3503)
{var $module3504 = $rimport3503[0], $names3505 = $rimport3503[1];
return $g2682(function $g3512 ($name3506)
{var $g3507;
if ($T($g2204($name3506, $g2205)))
$g3507 = $name3506
else $g3507 = [$name3506, $name3506];
var $import_name3508 = $g3507[0], $new_name3509 = $g3507[1];
if ($T($g2238($definition_name3501, $new_name3509)))
return [$module3504, $import_name3508]}, $names3505)}, $g2283($env3502, "module", "imports"))}, false)
var $g3513 = $g2203("find_import_identifier", function $g3516 ($module3514, $env3515)
{return $g2283($env3515, "import-identifiers", $g2283($module3514, "name"))}, false)
var $g3517 = $g1464["set-subtract!"], $g3518, $g3519 = $g1464["as-set"], $g3520 = $g1464["object-properties"], $g3521 = $g2203("define_free_variables", function $g3549 ($exp3522, $env3523)
{var $variables3524 = $g3517($g3517($g3518($exp3522), $g3519($g2369($g2193, $g3520($g2283($env3523, "defined?"))))), $g2194), $sequence3541 = $variables3524, $g3542 = $sequence3541, $g3543 = (($g3542 || false).length || 0), $g3544 = 0, $g3545 = ($g3543 === $g3544);
if ($T($g3545))
return $exp3522
else return $g2233([$g2193("%begin")], $g2369(function $g3550 ($variable3525)
{var $name3526 = $g2234($variable3525);
$g2264($env3523, "defined?", $name3526, true);
var $g3546 = [[$g2193("%define"), $variable3525]], $modulesimport_name3527 = $g3500($name3526, $env3523), $g3547;
if ($T($modulesimport_name3527))
{var $module3528 = $modulesimport_name3527[0], $import_name3529 = $modulesimport_name3527[1], $import_identifier3530 = $g3513($module3528, $env3523);
$g3547 = [[$g2193("%set"), $variable3525, [$g2193("%get-property"), $import_identifier3530, $import_name3529]]]}
else $g3547 = [];
var $g3548 = $g2233($g3546, $g3547);
return $g2318($g3548)}, $variables3524), [$exp3522])}, false)
var trueQ = $g1464["true?"], $g3551 = $g1464.choose, $g3552 = $g2203("define_free_variables2", function $g3589 ($exp3553, $env3554)
{var $free3555 = $g3517($g3518($exp3553), $g2194), $variables3557 = $g3551(function $g3590 ($variable3556)
{var $robject3568 = $g2283($env3554, "definition-names"), $property3569 = $g2234($variable3556), $value3570 = $HP.call($robject3568,$property3569);
return !(trueQ($value3570))}, $free3555), $sequence3581 = $variables3557, $g3582 = $sequence3581, $g3583 = (($g3582 || false).length || 0), $g3584 = 0, $g3585 = ($g3583 === $g3584);
if ($T($g3585))
return $exp3553
else return $g2233([$g2193("%begin")], $g2369(function $g3591 ($variable3558)
{var $name3559 = $g2234($variable3558);
$g2264($env3554, "defined?", $name3559, true);
var $g3586 = [[$g2193("%define"), $variable3558]], $modulesimport_name3560 = $g3500($name3559, $env3554), $g3587;
if ($T($modulesimport_name3560))
{var $module3561 = $modulesimport_name3560[0], $import_name3562 = $modulesimport_name3560[1], $old_import_identifier3563 = $g3513($module3561, $env3554), $import_identifier3564 = $g2283($env3554, "new-identifiers", $g2234($old_import_identifier3563));
$g3587 = [[$g2193("%set"), $variable3558, [$g2193("%get-property"), $import_identifier3564, $import_name3562]]]}
else $g3587 = [];
var $g3588 = $g2233($g3586, $g3587);
return $g2318($g3588)}, $variables3557), [$exp3553])}, false)
{var trueQ = $g1464["true?"], $g3607 = $g1464["set-union!"];
$g3518 = $g2203("find_free_variables", function $g3701 ($exp3608)
{var $g3682;
if ($T($g2204($exp3608, $g2205)))
{var $sequence3651 = $exp3608, $g3652 = $sequence3651, $g3653 = (($g3652 || false).length || 0), $g3654 = 0, $value3655 = ($g3653 === $g3654);
$g3682 = !(trueQ($value3655))}
else $g3682 = false;
if ($T($g3682))
{var $sequence3657 = $exp3608, $head3609 = $sequence3657[0], $name3610;
if ($T($g2204($head3609, $g2209)))
$name3610 = $g2234($head3609)
else $name3610 = false;
var $g3611 = $name3610;
if ($T($g2238($g3611, "%method")))
{var $__3612 = $exp3608[0], $rarguments3613 = $exp3608[1], $body3614 = $exp3608[2];
return $g3517($g3518($body3614), $g3519($rarguments3613))}
else if ($T($g2238($g3611, "%bind")))
{var $__3615 = $exp3608[0], $g3616 = $exp3608[1], $rvar3617 = $g3616[0], $value3618 = $g3616[1], $body3619 = $exp3608[2];
return $g3607($g3517($g3518($body3619), $g3519([$rvar3617])), $g3518($value3618))}
else if ($T($g2238($g3611, "%begin")))
{var $definitions3620 = [], $g3687 = function $g3702 ($result3621, $e3622)
{var $g3685;
if ($T($g2210($e3622)))
{var $sequence3659 = $e3622, $g3683 = $sequence3659[0], $g3684 = $g2193("%define");
$g3685 = $g2238($g3683, $g3684)}
else $g3685 = false;
var $g3686;
if ($T($g3685))
{var $rarray3664 = $definitions3620, $sequence3663 = $e3622, $value3665 = $sequence3663[1];
$rarray3664.push($value3665);
$rarray3664;
$g3686 = []}
else $g3686 = $g3518($e3622);
return $g2233($result3621, $g3686)}, $g3688 = [], $sequence3667 = $exp3608, $g3689 = $sequence3667.slice(1), $g3690 = $g2359($g3687, $g3688, $g3689), $g3691 = $g3519($g3690), $g3692 = $g3519($definitions3620);
return $g3517($g3691, $g3692)}
else if ($T($g2238($g3611, "%try")))
{var $__3623 = $exp3608[0], $e13624 = $exp3608[1], $v3625 = $exp3608[2], $e23626 = $exp3608[3];
return $g3517($g3607($g3519($g3518($e13624)), $g3519($g3518($e23626))), $g3519([$v3625]))}
else {var $g3627 = $g2238($g3611, "%set"), $g3693;
if ($T($g3627))
$g3693 = $g3627
else {var $g3628 = $g2238($g3611, "%if");
if ($T($g3628))
$g3693 = $g3628
else {var $g3629 = $g2238($g3611, "%while");
if ($T($g3629))
$g3693 = $g3629
else {var $g3630 = $g2238($g3611, "%array");
if ($T($g3630))
$g3693 = $g3630
else {var $g3631 = $g2238($g3611, "%object");
if ($T($g3631))
$g3693 = $g3631
else {var $g3632 = $g2238($g3611, "%infix");
if ($T($g3632))
$g3693 = $g3632
else {var $g3633 = $g2238($g3611, "%get-property");
if ($T($g3633))
$g3693 = $g3633
else {var $g3634 = $g2238($g3611, "%native-call");
if ($T($g3634))
$g3693 = $g3634
else {var $g3635 = $g2238($g3611, "%plus");
if ($T($g3635))
$g3693 = $g3635
else {var $g3636 = $g2238($g3611, "%minus");
if ($T($g3636))
$g3693 = $g3636
else {var $g3637 = $g2238($g3611, "%times");
if ($T($g3637))
$g3693 = $g3637
else $g3693 = $g2238($g3611, "%divide")}}}}}}}}}};
if ($T($g3693))
{var $g3694 = [], $sequence3669 = $exp3608, $g3695 = $sequence3669.slice(1), $g3696 = $g2369($g3518, $g3695), $g3697 = $g2359($g2233, $g3694, $g3696);
return $g3519($g3697)}
else {var $g3638 = $g2238($g3611, "%native"), $g3698;
if ($T($g3638))
$g3698 = $g3638
else {var $g3639 = $g2238($g3611, "%native-name");
if ($T($g3639))
$g3698 = $g3639
else $g3698 = $g2238($g3611, "%define")};
if ($T($g3698))
return $g3519([])
else {var $rfunction3678 = $g3607, $values3679 = $g2369($g3518, $exp3608), $g3680 = $values3679, $g3699 = $g3680[0], $g3681 = $values3679, $g3700 = $g3681.slice(1);
return $g2359($rfunction3678, $g3699, $g3700)}}}}
else if ($T($g2204($exp3608, $g2209)))
return $g3519([$exp3608])
else return $g3519([])}, false)}
var trueQ = $g1464["true?"], $g3703 = $g2203("ensure_naming_structure", function $g3714 ($env3704, $module_name3705, $name3706)
{var $value3709 = $g2283($env3704, "identifiers", $module_name3705), $g3712 = !(trueQ($value3709));
if ($T($g3712))
$g2264($env3704, "identifiers", $module_name3705, $g2185());
var $module_renamings3707 = $g2283($env3704, "identifiers", $module_name3705), $value3711 = $g2283($module_renamings3707, $name3706), $g3713 = !(trueQ($value3711));
if ($T($g3713))
$g2264($module_renamings3707, $name3706, []);
return $env3704}, false)
var $g3716 = $g2203("get_module_nameSname", function $g3721 ($identifier3717)
{var $g3718 = $g2283($identifier3717, "module"), $g3719;
if ($T($g3718))
$g3719 = $g3718
else $g3719 = "";
var $g3720 = $g2234($identifier3717);
return [$g3719, $g3720]}, false)
var trueQ = $g1464["true?"], $g3723 = $g1464.push, $g3724 = $g2203("rename_identifiers", function $g3740 ($identifiers3725, $env3726)
{return $g2369(function $g3741 ($identifier3727)
{var $g3728 = $g3716($identifier3727), $module_name3729 = $g3728[0], $name3730 = $g3728[1], $value3733 = $g2283($identifier3727, "generated?"), $g3738 = !(trueQ($value3733)), $g3739;
if ($T($g3738))
$g3739 = $name3730
else $g3739 = false;
var $new_identifier3731 = $g2267($g3739);
$g3703($env3726, $module_name3729, $name3730);
var $rarray3736 = $g2283($env3726, "identifiers", $module_name3729, $name3730), $value3737 = $new_identifier3731;
$rarray3736.unshift($value3737);
$rarray3736;
return $new_identifier3731}, $identifiers3725)}, false)
var trueQ = $g1464["true?"], $g3748 = $g1464.pop, $g3749 = $g2203("restore_identifiers", function $g3772 ($identifiers3750, $env3751)
{var $g3752 = $identifiers3750, $g3753, $g3754, $g3755 = [$g3752];
while ($T(true))
{var $g3756 = $g3753, $value3763;
if ($T($g3756))
$value3763 = $g3756
else $value3763 = $g2682($g2207, $g3755);
var $g3771 = !(trueQ($value3763));
if ($T($g3771))
{var $sequence3765 = $g3752, $identifier3757 = $sequence3765[0];
(function $g3773 ($identifier3758)
{var $g3759 = $g3716($identifier3758), $module_name3760 = $g3759[0], $name3761 = $g3759[1], $rarray3767 = $g2283($env3751, "identifiers", $module_name3760, $name3761);
return $rarray3767.shift()})($identifier3757);
var $sequence3769 = $g3752, $g3770 = $sequence3769.slice(1);
$g3752 = $g3770;
$g3755 = [$g3752]}
else break};
return $g3754}, false)
var $g3774 = $g2185()
var $g3777 = $g2203("find_identifier", function $g3787 ($identifier3778, $env3779)
{var $g3780 = $g3716($identifier3778), $module_name3781 = $g3780[0], $name3782 = $g3780[1], $g3783 = $g2283($env3779, "identifiers", $module_name3781, $name3782);
if ($T($g3783))
{var $renamings3784 = $g3783, $sequence3786 = $renamings3784;
return $sequence3786[0]}
else return $g3774}, false)
var $g3794 = $g1464["second-setter"], $g3795 = $g2203("alpha_convert", function $g3841 ($form3796, $env3797)
{var $g3798 = $form3796;
if ($T($g2204($g3798, $g2205)))
{var $sequence3831 = $form3796, $g3840 = $sequence3831[0], $g3799 = $g2234($g3840);
if ($T($g2238($g3799, "%method")))
{var $__3800 = $form3796[0], $rarguments3801 = $form3796[1], $body3802 = $form3796[2], $new_arguments3803 = $g3724($rarguments3801, $env3797), $new_body3804 = $g3795($body3802, $env3797), $result3805 = [$__3800, $new_arguments3803, $new_body3804];
$g3749($rarguments3801, $env3797);
return $result3805}
else if ($T($g2238($g3799, "%bind")))
{var $__3806 = $form3796[0], $g3807 = $form3796[1], $rvar3808 = $g3807[0], $value3809 = $g3807[1], $body3810 = $form3796[2], $new_value3811 = $g3795($value3809, $env3797), $g3812 = $g3724([$rvar3808], $env3797), $new_var3813 = $g3812[0], $result3814 = [$g2193("%bind"), [$new_var3813, $new_value3811], $g3795($body3810, $env3797)];
$g3749([$rvar3808], $env3797);
return $result3814}
else if ($T($g2238($g3799, "%try")))
{var $__3815 = $form3796[0], $body3816 = $form3796[1], $rvar3817 = $form3796[2], $rcatch3818 = $form3796[3], $new_body3819 = $g3795($body3816, $env3797), $g3820 = $g3724([$rvar3817], $env3797), $new_var3821 = $g3820[0], $result3822 = [$g2193("%try"), $new_body3819, $new_var3821, $g3795($rcatch3818, $env3797)];
$g3749([$rvar3817], $env3797);
return $result3822}
else if ($T($g2238($g3799, "%define")))
{var $__3823 = $form3796[0], $identifier3824 = $form3796[1], $g3825 = $g3716($identifier3824), $module_name3826 = $g3825[0], $name3827 = $g3825[1], $new_identifier3828 = $g2267();
$g3703($env3797, $module_name3826, $name3827);
var $rarray3834 = $g2283($env3797, "identifiers", $module_name3826, $name3827), $value3835 = $new_identifier3828;
$rarray3834.push($value3835);
$rarray3834;
$g2264($env3797, "definition-names", $g2234($new_identifier3828), $name3827);
$g2264($env3797, "new-identifiers", $name3827, $new_identifier3828);
var $rarray3838 = $form3796, $value3839 = $new_identifier3828;
$rarray3838[1] = $value3839;
return $form3796}
else return $g2369($g2241($g3795, $env3797), $form3796)}
else if ($T($g2204($g3798, $g2209)))
{var $value3829 = $g3777($form3796, $env3797);
if ($T($g2238($value3829, $g3774)))
return $form3796
else return $value3829}
else return $form3796}, false)
var trueQ = $g1464["true?"], dec = $g1464.dec, $g3860 = $g1464["last-setter"], $g3861 = $g1464.last, $g3862, $g3863, $g3864 = $g2203("inline", function $g3975 ($form3865, $env3866)
{var $g3958;
if ($T($g2204($form3865, $g2205)))
{var $sequence3909 = $form3865, $g3910 = $sequence3909, $g3911 = (($g3910 || false).length || 0), $g3912 = 0, $value3913 = ($g3911 === $g3912);
$g3958 = !(trueQ($value3913))}
else $g3958 = false;
if ($T($g3958))
{var $sequence3915 = $form3865, $g3959 = $sequence3915[0], $g3960 = $g2204($g3959, $g2209);
if ($T($g3960))
{var $sequence3917 = $form3865, $g3961 = $sequence3917[0], $g3867 = $g2234($g3961), $g3868 = $g2238($g3867, "%method"), $g3962;
if ($T($g3868))
$g3962 = $g3868
else $g3962 = $g2238($g3867, "%set");
if ($T($g3962))
{var $rarray3930 = $form3865, $rarray3927 = $form3865, $g3928 = $rarray3927, $g3929 = (($g3928 || false).length || 0), $g3963 = ($g3929 - 1), $g3964 = $rarray3927[$g3963], $value3931 = $g3864($g3964, $env3866);
$rarray3930[dec($g2239($rarray3930), 1)] = $value3931;
return $form3865}
else if ($T($g2238($g3867, "%bind")))
{var $__3869 = $form3865[0], $binding3870 = $form3865[1], $body3871 = $form3865[2], $rarray3936 = $binding3870, $sequence3935 = $binding3870, $g3965 = $sequence3935[1], $value3937 = $g3864($g3965, $env3866);
$rarray3936[1] = $value3937;
var $rarray3940 = $form3865, $value3941 = $g3864($body3871, $env3866);
$rarray3940[dec($g2239($rarray3940), 1)] = $value3941;
return $form3865}
else if ($T($g2238($g3867, "%try")))
{var $__3872 = $form3865[0], $body3873 = $form3865[1], $rvar3874 = $form3865[2], $rcatch3875 = $form3865[3], $rarray3944 = $form3865, $value3945 = $g3864($body3873, $env3866);
$rarray3944[1] = $value3945;
var $rarray3948 = $form3865, $value3949 = $g3864($rcatch3875, $env3866);
$rarray3948[dec($g2239($rarray3948), 1)] = $value3949;
return $form3865}
else {var $g3876 = $g2238($g3867, "%begin"), $g3966;
if ($T($g3876))
$g3966 = $g3876
else {var $g3877 = $g2238($g3867, "%if");
if ($T($g3877))
$g3966 = $g3877
else {var $g3878 = $g2238($g3867, "%while");
if ($T($g3878))
$g3966 = $g3878
else {var $g3879 = $g2238($g3867, "%array");
if ($T($g3879))
$g3966 = $g3879
else {var $g3880 = $g2238($g3867, "%object");
if ($T($g3880))
$g3966 = $g3880
else {var $g3881 = $g2238($g3867, "%get-property");
if ($T($g3881))
$g3966 = $g3881
else {var $g3882 = $g2238($g3867, "%native-call");
if ($T($g3882))
$g3966 = $g3882
else {var $g3883 = $g2238($g3867, "%infix");
if ($T($g3883))
$g3966 = $g3883
else {var $g3884 = $g2238($g3867, "%plus");
if ($T($g3884))
$g3966 = $g3884
else {var $g3885 = $g2238($g3867, "%minus");
if ($T($g3885))
$g3966 = $g3885
else {var $g3886 = $g2238($g3867, "%times");
if ($T($g3886))
$g3966 = $g3886
else $g3966 = $g2238($g3867, "%divide")}}}}}}}}}};
if ($T($g3966))
{var $sequence3951 = $form3865, $g3967 = $sequence3951[0], $g3968 = [$g3967], $g3969 = $g2241($g3864, $env3866), $sequence3953 = $form3865, $g3970 = $sequence3953.slice(1), $g3971 = $g2369($g3969, $g3970);
return $g2233($g3968, $g3971)}
else {var $g3887 = $g2238($g3867, "%native"), $g3972;
if ($T($g3887))
$g3972 = $g3887
else {var $g3888 = $g2238($g3867, "%native-name");
if ($T($g3888))
$g3972 = $g3888
else $g3972 = $g2238($g3867, "%define")};
if ($T($g3972))
return $form3865
else {var $sequence3955 = $form3865, $g3973 = $sequence3955[0], $name3889 = $g2234($g3973), $g3890 = $g2283($env3866, "definition-names", $name3889), $definition_name3891;
if ($T($g3890))
$definition_name3891 = $g3890
else $definition_name3891 = $name3889;
var $g3892;
if ($T($g3863($g2283($env3866, "module"), $definition_name3891)))
$g3892 = $g2283($env3866, "module", "functions", $definition_name3891)
else $g3892 = false;
var $definition3897;
if ($T($g3892))
$definition3897 = $g3892
else {var $g3893 = $g3500($definition_name3891, $env3866);
if ($T($g3893))
{var $modulesimport_name3894 = $g3893, $module3895 = $modulesimport_name3894[0], $import_name3896 = $modulesimport_name3894[1];
if ($T($g3863($module3895, $import_name3896)))
$definition3897 = $g2283($module3895, "functions", $import_name3896)
else $definition3897 = false}
else $definition3897 = false};
if ($T($definition3897))
{var $sequence3957 = $form3865, $g3974 = $sequence3957.slice(1);
return $g3862($definition3897, $g3974, $env3866)}
else return $g2369($g2241($g3864, $env3866), $form3865)}}}}
else return $g2369($g2241($g3864, $env3866), $form3865)}
else return $form3865}, false)
$g3863 = $g2203("inlineQ", function $g3978 ($module3976, $name3977)
{return $g2682($g2293($g2238, $name3977), $g2283($module3976, "inline"))}, false)
{var trueQ = $g1464["true?"], $g3981 = $g1464[">="];
$g3862 = $g2203("inline_definition", function $g4011 ($definition3982, $values3983, $env3984)
{var $__3985 = $definition3982[0], $rarguments3986 = $definition3982[1], $body3987 = $definition3982[2], $body3990 = $g2359(function $g4012 ($body3988, $argument3989)
{return [$g2193("%bind"), [$argument3989, $argument3989], $body3988]}, $body3987, $g2483($rarguments3986)), $inlined3991 = $g3864($body3990, $env3984), $prepared3992 = $g3795($inlined3991, $env3984), $robject4003 = $rarguments3986, $g3993 = (($robject4003 || false).length || 0), $i3994 = 0;
while ($T(true))
{var $value4005 = $g3981($i3994, $g3993), $g4010 = !(trueQ($value4005));
if ($T($g4010))
{(function $g4013 ($i3995)
{var $argument3996 = $g2331($rarguments3986, $i3995), $value3997 = $g2331($values3983, $i3995), $g3998 = $g3716($argument3996), $module_name3999 = $g3998[0], $name4000 = $g3998[1];
$g3703($env3984, $module_name3999, $name4000);
var $rarray4008 = $g2283($env3984, "identifiers", $module_name3999, $name4000), $value4009;
if ($T($value3997))
$value4009 = $g3864($value3997, $env3984)
else $value4009 = [$g2193("%native"), "undefined"];
$rarray4008.unshift($value4009);
return $rarray4008})($i3994);
$i3994 = ($i3994 + 1)}
else break};
false;
var $result4001 = $g3795($body3990, $env3984);
$g3749($rarguments3986, $env3984);
return $result4001}, false)}
var $g4014 = $g1464["<number>"], $g4015 = $g1464["<boolean>"], $g4016 = $g1464["<keyword>"], $g4017 = $g2203("atomicQ", function $g4019 ($expression4018)
{return $g2682($g2293($g2204, $expression4018), [$g4014, $g4015, $g3056, $g2209, $g4016])}, false)
var $g4020, $g4021 = $g2203("normalize_term", function $g4023 ($expression4022)
{return $g4020($expression4022, $g3328)}, false)
{var trueQ = $g1464["true?"], $g4026, $g4027, $g4028;
$g4020 = $g2203("normalize", function $g4097 ($exp4029, $k4030)
{var $g4093;
if ($T($g2204($exp4029, $g2205)))
{var $sequence4072 = $exp4029, $g4073 = $sequence4072, $g4074 = (($g4073 || false).length || 0), $g4075 = 0, $value4076 = ($g4074 === $g4075);
$g4093 = !(trueQ($value4076))}
else $g4093 = false;
if ($T($g4093))
{var $sequence4078 = $exp4029, $g4094 = $sequence4078[0], $g4031 = $g2234($g4094);
if ($T($g2238($g4031, "%method")))
{var $__4032 = $exp4029[0], $rarguments4033 = $exp4029[1], $body4034 = $exp4029[2];
return $k4030([$g2193("%method"), $rarguments4033, $g4021($body4034)])}
else if ($T($g2238($g4031, "%begin")))
{var $__4035 = $exp4029[0], $exp14036 = $exp4029[1], $et4037 = $SL.call($exp4029, 2), $sequence4089 = $et4037, $g4090 = $sequence4089, $g4091 = (($g4090 || false).length || 0), $g4092 = 0, $g4095 = ($g4091 === $g4092);
if ($T($g4095))
return $g4020($exp14036, $k4030)
else return $g4020($exp14036, function $g4098 ($aexp14038)
{return [$g2193("%begin"), $aexp14038, $g4020($g2233([$g2193("%begin")], $et4037), $k4030)]})}
else if ($T($g2238($g4031, "%bind")))
{var $__4039 = $exp4029[0], $g4040 = $exp4029[1], $rvar4041 = $g4040[0], $value4042 = $g4040[1], $body4043 = $exp4029[2];
return $g4020($value4042, function $g4099 ($avalue4044)
{return [$g2193("%bind"), [$rvar4041, $avalue4044], $g4020($body4043, $k4030)]})}
else if ($T($g2238($g4031, "%if")))
{var $__4045 = $exp4029[0], $test4046 = $exp4029[1], $then4047 = $exp4029[2], $relse4048 = $exp4029[3];
return $g4026($test4046, function $g4100 ($atest4049)
{return $k4030([$g2193("%if"), $atest4049, $g4021($then4047), $g4021($relse4048)])})}
else if ($T($g2238($g4031, "%while")))
{var $__4050 = $exp4029[0], $test4051 = $exp4029[1], $body4052 = $exp4029[2], $g4096;
if ($T($g4027($test4051)))
$g4096 = [$g2193("%while"), true, [$g2193("%begin"), $g4021([$g2193("%if"), $test4051, $g4021($body4052), [$g2193("%native"), "break"], false])]]
else $g4096 = [$g2193("%while"), $g4021($test4051), $g4021($body4052)];
return $k4030($g4096)}
else if ($T($g2238($g4031, "%try")))
{var $__4053 = $exp4029[0], $body4054 = $exp4029[1], $rvar4055 = $exp4029[2], $rcatch4056 = $exp4029[3];
return $k4030([$g2193("%try"), $g4021($body4054), $rvar4055, $g4021($rcatch4056)])}
else if ($T($g2238($g4031, "%set")))
{var $__4057 = $exp4029[0], $rvar4058 = $exp4029[1], $value4059 = $exp4029[2];
return $g4026($value4059, function $g4101 ($avalue4060)
{return $k4030([$g2193("%set"), $rvar4058, $avalue4060])})}
else if ($T($g4027($exp4029)))
return $g4028($exp4029, $k4030)
else return $k4030($g2369($g4021, $exp4029))}
else return $k4030($exp4029)}, false)}
{var $g4102;
$g4026 = $g2203("normalize_value", function $g4106 ($exp4103, $k4104)
{if ($T($g4027($exp4103)))
return $g4102($exp4103, $k4104)
else {var $g4105;
if ($T($g2204($exp4103, $g2205)))
$g4105 = $g2369($g4021, $exp4103)
else $g4105 = $exp4103;
return $k4104($g4105)}}, false)}
{var trueQ = $g1464["true?"];
$g4027 = $g2203("contains_statementsQ", function $g4151 ($exp4112)
{var $g4146;
if ($T($g2204($exp4112, $g2205)))
{var $sequence4129 = $exp4112, $g4130 = $sequence4129, $g4131 = (($g4130 || false).length || 0), $g4132 = 0, $value4133 = ($g4131 === $g4132);
$g4146 = !(trueQ($value4133))}
else $g4146 = false;
if ($T($g4146))
{var $sequence4135 = $exp4112, $g4147 = $sequence4135[0], $g4113 = $g2234($g4147), $g4114 = $g2238($g4113, "%begin"), $g4148;
if ($T($g4114))
$g4148 = $g4114
else {var $g4115 = $g2238($g4113, "%if");
if ($T($g4115))
$g4148 = $g4115
else {var $g4116 = $g2238($g4113, "%while");
if ($T($g4116))
$g4148 = $g4116
else {var $g4117 = $g2238($g4113, "%bind");
if ($T($g4117))
$g4148 = $g4117
else $g4148 = $g2238($g4113, "%try")}}};
if ($T($g4148))
return true
else if ($T($g2238($g4113, "%set")))
{var $rarray4143 = $exp4112, $g4144 = $rarray4143, $g4145 = (($g4144 || false).length || 0), $g4149 = ($g4145 - 1), $g4150 = $rarray4143[$g4149];
return $g4027($g4150)}
else if ($T($g2238($g4113, "%method")))
return false
else return $g2682($g4027, $exp4112)}}, false)}
$g4102 = $g2203("normalizeT", function $g4156 ($exp4152, $k4153)
{return $g4020($exp4152, function $g4157 ($aexp4154)
{if ($T($g4017($aexp4154)))
return $k4153($aexp4154)
else {var $t4155 = $g2267();
return [$g2193("%bind"), [$t4155, $aexp4154], $k4153($t4155)]}})}, false)
var $g4158 = $g2203("normalizeTT", function $g4176 ($expt4159, $k4160)
{var $sequence4171 = $expt4159, $g4172 = $sequence4171, $g4173 = (($g4172 || false).length || 0), $g4174 = 0, $g4175 = ($g4173 === $g4174);
if ($T($g4175))
return $k4160([])
else return $g4028($expt4159, $k4160)}, false)
$g4028 = $g2203("normalize_all", function $g4189 ($exp4177, $k4178)
{var $sequence4182 = $exp4177, $g4185 = $sequence4182[0], $g4188 = function $g4190 ($t4179)
{var $sequence4184 = $exp4177, $g4186 = $sequence4184.slice(1), $g4187 = function $g4191 ($tt4180)
{return $k4178($g2233([$t4179], $tt4180))};
return $g4158($g4186, $g4187)};
return $g4102($g4185, $g4188)}, false)
var dec = $g1464.dec, $g4194 = $g1464["third-setter"], $g4195 = $g2203("wrap_value", function $g4266 ($exp4196, $wrapper4197)
{if ($T($g2204($exp4196, $g2205)))
{var $sequence4201 = $exp4196, $g4256 = $sequence4201[0], $g4198 = $g2234($g4256), $g4199 = $g2238($g4198, "%begin"), $g4257;
if ($T($g4199))
$g4257 = $g4199
else $g4257 = $g2238($g4198, "%bind");
if ($T($g4257))
{var $rarray4214 = $exp4196, $rarray4211 = $exp4196, $g4212 = $rarray4211, $g4213 = (($g4212 || false).length || 0), $g4258 = ($g4213 - 1), $g4259 = $rarray4211[$g4258], $value4215 = $g4195($g4259, $wrapper4197);
$rarray4214[dec($g2239($rarray4214), 1)] = $value4215;
return $exp4196}
else if ($T($g2238($g4198, "%if")))
{var $rarray4220 = $exp4196, $sequence4219 = $exp4196, $g4260 = $sequence4219[2], $value4221 = $g4195($g4260, $wrapper4197);
$rarray4220[2] = $value4221;
var $rarray4234 = $exp4196, $rarray4231 = $exp4196, $g4232 = $rarray4231, $g4233 = (($g4232 || false).length || 0), $g4261 = ($g4233 - 1), $g4262 = $rarray4231[$g4261], $value4235 = $g4195($g4262, $wrapper4197);
$rarray4234[dec($g2239($rarray4234), 1)] = $value4235;
return $exp4196}
else if ($T($g2238($g4198, "%while")))
return [$g2193("%begin"), $exp4196, $g4195(false, $wrapper4197)]
else if ($T($g2238($g4198, "%try")))
{var $rarray4240 = $exp4196, $sequence4239 = $exp4196, $g4263 = $sequence4239[1], $value4241 = $g4195($g4263, $wrapper4197);
$rarray4240[1] = $value4241;
var $rarray4254 = $exp4196, $rarray4251 = $exp4196, $g4252 = $rarray4251, $g4253 = (($g4252 || false).length || 0), $g4264 = ($g4253 - 1), $g4265 = $rarray4251[$g4264], $value4255 = $g4195($g4265, $wrapper4197);
$rarray4254[dec($g2239($rarray4254), 1)] = $value4255;
return $exp4196}
else return $g2233($wrapper4197, [$exp4196])}
else return $g2233($wrapper4197, [$exp4196])}, false)
var $g4267 = $g2203("add_explicit_return", function $g4269 ($exp4268)
{return $g4195($exp4268, [$g2193("%return")])}, false)
var trueQ = $g1464["true?"], $g4270 = $g1464["member?"], $g4271 = $g2203("statementQ", function $g4294 ($exp4272)
{if ($T($g2204($exp4272, $g2205)))
{var $sequence4284 = $exp4272, $g4285 = $sequence4284, $g4286 = (($g4285 || false).length || 0), $g4287 = 0, $value4288 = ($g4286 === $g4287), $g4291 = !(trueQ($value4288));
if ($T($g4291))
{var $sequence4290 = $exp4272, $g4292 = $sequence4290[0], $g4293 = [$g2193("%if"), $g2193("%while"), $g2193("%begin"), $g2193("%bind"), $g2193("%try")];
return $g4270($g4292, $g4293)}}}, false)
var $g4295 = $g2203("add_explicit_true", function $g4297 ($exp4296)
{return [[$g2193("%native"), "$T"], $exp4296]}, false)
var dec = $g1464.dec, $g4300 = $g1464["first-setter"], $g4301 = $g2203("transform_statements", function $g4409 ($exp4302, $env4303)
{if ($T($g2204($exp4302, $g2205)))
{var $sequence4322 = $exp4302, $g4395 = $sequence4322[0], $g4304 = $g2234($g4395);
if ($T($g2238($g4304, "%method")))
{var $rarray4335 = $exp4302, $rarray4332 = $exp4302, $g4333 = $rarray4332, $g4334 = (($g4333 || false).length || 0), $g4396 = ($g4334 - 1), $g4397 = $rarray4332[$g4396], $g4398 = $g4301($g4397, $env4303), $value4336 = $g4267($g4398);
$rarray4335[dec($g2239($rarray4335), 1)] = $value4336;
return $exp4302}
else if ($T($g2238($g4304, "%begin")))
{var $__4305 = $exp4302[0], $exps4306 = $SL.call($exp4302, 1);
return $g2318($g2369($g2241($g4301, $env4303), $exps4306))}
else if ($T($g2238($g4304, "%bind")))
{var $__4307 = $exp4302[0], $g4308 = $exp4302[1], $rvar4309 = $g4308[0], $value4310 = $g4308[1], $body4311 = $exp4302[2];
if ($T($g4271($value4310)))
return [$g2193("%bind"), [$rvar4309, false], [$g2193("%begin"), $g4195($g4301($value4310, $env4303), [$g2193("%set"), $rvar4309]), $g4301($body4311, $env4303)]]
else return [$g2193("%bind"), [$rvar4309, $g4301($value4310, $env4303)], $g4301($body4311, $env4303)]}
else if ($T($g2238($g4304, "%if")))
{var $__4312 = $exp4302[0], $test4313 = $exp4302[1], $then4314 = $exp4302[2], $relse4315 = $exp4302[3];
return [$g2193("%if"), $g4295($test4313), $g4301($then4314, $env4303), $g4301($relse4315, $env4303)]}
else if ($T($g2238($g4304, "%while")))
{var $rarray4341 = $exp4302, $sequence4340 = $exp4302, $g4399 = $sequence4340[1], $value4342 = $g4295($g4399);
$rarray4341[1] = $value4342;
var $rarray4347 = $exp4302, $sequence4346 = $exp4302, $g4400 = $sequence4346[2], $value4348 = $g4301($g4400, $env4303);
$rarray4347[2] = $value4348;
return $exp4302}
else if ($T($g2238($g4304, "%try")))
{var $rarray4353 = $exp4302, $sequence4352 = $exp4302, $g4401 = $sequence4352[1], $value4354 = $g4301($g4401, $exp4302);
$rarray4353[1] = $value4354;
var $rarray4367 = $exp4302, $rarray4364 = $exp4302, $g4365 = $rarray4364, $g4366 = (($g4365 || false).length || 0), $g4402 = ($g4366 - 1), $g4403 = $rarray4364[$g4402], $value4368 = $g4301($g4403, $env4303);
$rarray4367[dec($g2239($rarray4367), 1)] = $value4368;
return $exp4302}
else if ($T($g2238($g4304, "%set")))
{var $__4316 = $exp4302[0], $identifier4317 = $exp4302[1], $value4318 = $exp4302[2], $valuet4319 = $g4301($value4318, $env4303), $definition_name4320 = $g2283($env4303, "definition-names", $g2234($identifier4317)), $g4404;
if ($T($definition_name4320))
$g4404 = $g4270($definition_name4320, $g2283($env4303, "module", "exports"))
else $g4404 = false;
if ($T($g4404))
{var $rarray4371 = $exp4302, $value4372 = $g2193("%begin");
$rarray4371[0] = $value4372;
var $rarray4375 = $exp4302, $value4376 = [$g2193("%set"), $identifier4317, $valuet4319];
$rarray4375[1] = $value4376;
var $rarray4379 = $exp4302, $value4380 = [$g2193("%set"), [$g2193("%get-property"), [$g2193("%native"), "exports"], $definition_name4320], $identifier4317];
$rarray4379[2] = $value4380}
else {var $rarray4383 = $exp4302, $value4384 = $valuet4319;
$rarray4383[2] = $value4384};
return $exp4302}
else if ($T($g2238($g4304, "%define")))
{var $g4405 = $g2193("%var"), $rarray4392 = $exp4302, $g4393 = $rarray4392, $g4394 = (($g4393 || false).length || 0), $g4406 = ($g4394 - 1), $g4407 = $rarray4392[$g4406], $g4408 = [$g4407, false];
return [$g4405, $g4408]}
else return $g2369($g2241($g4301, $env4303), $exp4302)}
else return $exp4302}, false)
var $g4410, $g4411 = $g2203("lift_symbols", function $g4414 ($exp4412, $env4413)
{return $g4410($exp4412, $env4413, $g3328)}, false)
{var trueQ = $g1464["true?"], $g4421, $g4422, $g4423, $g4424 = $g1464["<hash-symbol>"];
$g4410 = $g2203("lift_symbol", function $g4483 ($exp4425, $env4426, $k4427)
{var $g4479;
if ($T($g2204($exp4425, $g2205)))
{var $sequence4472 = $exp4425, $g4473 = $sequence4472, $g4474 = (($g4473 || false).length || 0), $g4475 = 0, $value4476 = ($g4474 === $g4475);
$g4479 = !(trueQ($value4476))}
else $g4479 = false;
if ($T($g4479))
{var $sequence4478 = $exp4425, $g4480 = $sequence4478[0], $g4428 = $g2234($g4480);
if ($T($g2238($g4428, "%bind")))
{var $__4429 = $exp4425[0], $g4430 = $exp4425[1], $rvar4431 = $g4430[0], $value4432 = $g4430[1], $body4433 = $exp4425[2];
return $g4410($value4432, $env4426, function $g4484 ($lvalue4434, $env4435)
{return $g4410($body4433, $env4435, function $g4485 ($lbody4436, $env4437)
{return $k4427([$g2193("%bind"), [$rvar4431, $lvalue4434], $lbody4436], $env4437)})})}
else {var $g4438 = $g2238($g4428, "%method"), $g4481;
if ($T($g4438))
$g4481 = $g4438
else $g4481 = $g2238($g4428, "%set");
if ($T($g4481))
{var $m4439 = $exp4425[0], $e14440 = $exp4425[1], $e24441 = $exp4425[2];
return $g4410($e24441, $env4426, function $g4486 ($le24442, $env4443)
{return $k4427([$m4439, $e14440, $le24442], $env4443)})}
else {var $g4444 = $g2238($g4428, "%begin"), $g4482;
if ($T($g4444))
$g4482 = $g4444
else {var $g4445 = $g2238($g4428, "%if");
if ($T($g4445))
$g4482 = $g4445
else $g4482 = $g2238($g4428, "%while")};
if ($T($g4482))
{var $m4446 = $exp4425[0], $et4447 = $SL.call($exp4425, 1);
return $g4421($et4447, $env4426, function $g4487 ($let4448, $env4449)
{return $k4427($g2233([$m4446], $let4448), $env4449)})}
else if ($T($g2238($g4428, "%try")))
{var $__4450 = $exp4425[0], $e14451 = $exp4425[1], $v4452 = $exp4425[2], $e24453 = $exp4425[3];
return $g4421([$e14451, $e24453], $env4426, function $g4488 ($let4454, $env4455)
{var $le14456 = $let4454[0], $le24457 = $let4454[1];
return $k4427([$g2193("%try"), $le14456, $v4452, $le24457], $env4455)})}
else if ($T($g2238($g4428, "symbol")))
{var $__4458 = $exp4425[0], $name4459 = $exp4425[1];
return $g4422($name4459, $exp4425, "symbol", $env4426, $k4427)}
else return $g4423($exp4425, $env4426, $k4427)}}}
else {var $g4460 = $exp4425;
if ($T($g2204($g4460, $g4016)))
return $g4422($g2234($exp4425), $exp4425, "keyword", $env4426, $k4427)
else if ($T($g2204($g4460, $g4424)))
return $g4422($g2234($exp4425), $exp4425, "hash", $env4426, $k4427)
else return $k4427($exp4425, $env4426)}}, false)}
$g4422 = $g2203("lift_value", function $g4498 ($name4490, $value4491, $type4492, $env4493, $k4494)
{var $g4495 = $g2283($env4493, "lifted", $type4492, $name4490);
if ($T($g4495))
{var $t4496 = $g4495;
return $k4494($t4496, $env4493)}
else {var $t4497 = $g2264($env4493, "lifted", $type4492, $name4490, $g2267());
return [$g2193("%bind"), [$t4497, $value4491], $k4494($t4497, $env4493)]}}, false)
$g4421 = $g2203("lift_symbolT", function $g4517 ($expt4499, $env4500, $k4501)
{var $sequence4512 = $expt4499, $g4513 = $sequence4512, $g4514 = (($g4513 || false).length || 0), $g4515 = 0, $g4516 = ($g4514 === $g4515);
if ($T($g4516))
return $k4501([], $env4500)
else return $g4423($expt4499, $env4500, $k4501)}, false)
$g4423 = $g2203("lift_symbolTT", function $g4533 ($exp4518, $env4519, $k4520)
{var $sequence4526 = $exp4518, $g4529 = $sequence4526[0], $g4532 = function $g4534 ($t4521, $env4522)
{var $sequence4528 = $exp4518, $g4530 = $sequence4528.slice(1), $g4531 = function $g4535 ($tt4523, $env4524)
{return $k4520($g2233([$t4521], $tt4523), $env4524)};
return $g4421($g4530, $env4522, $g4531)};
return $g4410($g4529, $env4519, $g4532)}, false)
var trueQ = $g1464["true?"], $g4536, $g4537 = $g2203("flatten_begins", function $g4579 ($exps4538)
{var $rfunction4569 = $g2233, $values4570 = $g2369(function $g4580 ($exp4539)
{var $flattened4540 = $g4536($exp4539), $g4576;
if ($T($g2204($flattened4540, $g2205)))
{var $sequence4560 = $flattened4540, $g4561 = $sequence4560, $g4562 = (($g4561 || false).length || 0), $g4563 = 0, $value4564 = ($g4562 === $g4563), $g4573 = !(trueQ($value4564));
if ($T($g4573))
{var $sequence4566 = $flattened4540, $g4574 = $sequence4566[0], $g4575 = $g2193("%begin");
$g4576 = $g2238($g4574, $g4575)}
else $g4576 = false}
else $g4576 = false;
if ($T($g4576))
{var $sequence4568 = $flattened4540;
return $sequence4568.slice(1)}
else return [$flattened4540]}, $exps4538), $g4571 = $values4570, $g4577 = $g4571[0], $g4572 = $values4570, $g4578 = $g4572.slice(1);
return $g2359($rfunction4569, $g4577, $g4578)}, false)
var $g4581 = $g2203("varQ", function $g4587 ($exp4582)
{if ($T($g2210($exp4582)))
{var $sequence4584 = $exp4582, $g4585 = $sequence4584[0], $g4586 = $g2193("%var");
return $g2238($g4585, $g4586)}}, false)
var $g4588 = $g2203("setQ", function $g4594 ($exp4589)
{if ($T($g2210($exp4589)))
{var $sequence4591 = $exp4589, $g4592 = $sequence4591[0], $g4593 = $g2193("%set");
return $g2238($g4592, $g4593)}}, false)
var $g4595 = $g2203("methodQ", function $g4601 ($exp4596)
{if ($T($g2210($exp4596)))
{var $sequence4598 = $exp4596, $g4599 = $sequence4598[0], $g4600 = $g2193("%method");
return $g2238($g4599, $g4600)}}, false)
var trueQ = $g1464["true?"], $g4602 = $g2203("flatten_vars", function $g4694 ($exps4603)
{return $g2359(function $g4695 ($result4604, $exp4605)
{var $sequence4623 = $result4604, $g4624 = $sequence4623, $g4625 = (($g4624 || false).length || 0), $g4626 = 0, $value4627 = ($g4625 === $g4626), $g4684 = !(trueQ($value4627)), $previous4606;
if ($T($g4684))
{var $rarray4635 = $result4604, $g4636 = $rarray4635, $g4637 = (($g4636 || false).length || 0), $g4685 = ($g4637 - 1);
$previous4606 = $rarray4635[$g4685]}
else $previous4606 = false;
var $previous_varq4607;
if ($T($previous4606))
$previous_varq4607 = $g4581($previous4606)
else $previous_varq4607 = false;
var $g4686;
if ($T($previous_varq4607))
$g4686 = $g4581($exp4605)
else $g4686 = false;
if ($T($g4686))
{var $g4688 = function $g4696 ($binding4608)
{var $rarray4647 = $result4604, $g4648 = $rarray4647, $g4649 = (($g4648 || false).length || 0), $g4687 = ($g4649 - 1), $rarray4650 = $rarray4647[$g4687], $value4651 = $binding4608;
$rarray4650.push($value4651);
return $rarray4650}, $sequence4653 = $exp4605, $g4689 = $sequence4653.slice(1);
$g2292($g4688, $g4689);
return $result4604}
else {var $mergeq4609;
if ($T($previous_varq4607))
$mergeq4609 = $g4588($exp4605)
else $mergeq4609 = false;
var $binding4610;
if ($T($mergeq4609))
{var $rarray4668 = $result4604, $g4669 = $rarray4668, $g4670 = (($g4669 || false).length || 0), $g4690 = ($g4670 - 1), $rarray4671 = $rarray4668[$g4690], $g4672 = $rarray4671, $g4673 = (($g4672 || false).length || 0), $g4691 = ($g4673 - 1);
$binding4610 = $rarray4671[$g4691]}
else $binding4610 = false;
var $identifier4611;
if ($T($mergeq4609))
{var $sequence4675 = $exp4605;
$identifier4611 = $sequence4675[1]}
else $identifier4611 = false;
var $sequence4677 = $binding4610, $g4692 = $sequence4677[0], $g4693 = $g2238($g4692, $identifier4611);
if ($T($g4693))
{var $rarray4682 = $binding4610, $sequence4681 = $exp4605, $value4683 = $sequence4681[2];
$rarray4682[1] = $value4683;
return $result4604}
else return $g2233($result4604, [$exp4605])}}, [], $exps4603)}, false)
{var dec = $g1464.dec;
$g4536 = $g2203("flatten_statements", function $g4775 ($exp4700)
{if ($T($g2204($exp4700, $g2205)))
{var $sequence4710 = $exp4700, $g4765 = $sequence4710[0], $g4701 = $g2234($g4765), $g4702 = $g2238($g4701, "%method"), $g4766;
if ($T($g4702))
$g4766 = $g4702
else {var $g4703 = $g2238($g4701, "%while");
if ($T($g4703))
$g4766 = $g4703
else $g4766 = $g2238($g4701, "%set")};
if ($T($g4766))
{var $rarray4723 = $exp4700, $rarray4720 = $exp4700, $g4721 = $rarray4720, $g4722 = (($g4721 || false).length || 0), $g4767 = ($g4722 - 1), $g4768 = $rarray4720[$g4767], $value4724 = $g4536($g4768);
$rarray4723[dec($g2239($rarray4723), 1)] = $value4724;
return $exp4700}
else if ($T($g2238($g4701, "%begin")))
{var $__4704 = $exp4700[0], $exps4705 = $SL.call($exp4700, 1);
return $g2318($g4602($g4537($exps4705)))}
else if ($T($g2238($g4701, "%bind")))
{var $__4706 = $exp4700[0], $binding4707 = $exp4700[1], $body4708 = $exp4700[2];
return $g4536([$g2193("%begin"), [$g2193("%var"), $binding4707], $body4708])}
else if ($T($g2238($g4701, "%if")))
{var $rarray4729 = $exp4700, $sequence4728 = $exp4700, $g4769 = $sequence4728[2], $value4730 = $g4536($g4769);
$rarray4729[2] = $value4730;
var $rarray4743 = $exp4700, $rarray4740 = $exp4700, $g4741 = $rarray4740, $g4742 = (($g4741 || false).length || 0), $g4770 = ($g4742 - 1), $g4771 = $rarray4740[$g4770], $value4744 = $g4536($g4771);
$rarray4743[dec($g2239($rarray4743), 1)] = $value4744;
return $exp4700}
else if ($T($g2238($g4701, "%try")))
{var $rarray4749 = $exp4700, $sequence4748 = $exp4700, $g4772 = $sequence4748[1], $value4750 = $g4536($g4772);
$rarray4749[1] = $value4750;
var $rarray4763 = $exp4700, $rarray4760 = $exp4700, $g4761 = $rarray4760, $g4762 = (($g4761 || false).length || 0), $g4773 = ($g4762 - 1), $g4774 = $rarray4760[$g4773], $value4764 = $g4536($g4774);
$rarray4763[dec($g2239($rarray4763), 1)] = $value4764;
return $exp4700}
else return $g2369($g4536, $exp4700)}
else return $exp4700}, false)}
var $g4776 = $g2185("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var $g4777 = $g2203("fill_zeros", function $g4789 ($rstring4778)
{var $rarray4784 = "0000", $start4785 = 0, $robject4783 = $rstring4778, $g4787 = (($robject4783 || false).length || 0), $end4786 = (4 - $g4787), $g4788 = $rarray4784.slice($start4785, $end4786);
return $g2233($g4788, $rstring4778)}, false)
var $g4791 = $g1464.join, $g4792 = $g1464["<"], $g4793 = $g1464["as-hex-string"], $g4794 = $g1464["char-code"], $g4795 = $g1464["as-array"], $g4796 = $g2203("escape_string", function $g4815 ($rstring4797)
{var $g4812 = function $g4816 ($rchar4798)
{var $g4799 = $g2283($g4776, $rchar4798);
if ($T($g4799))
{var $escaped4800 = $g4799;
return $g2233("\\", $escaped4800)}
else {var $rchar4803 = $rchar4798, $code4801 = $rchar4803.charCodeAt(0);
if ($T($g4792(31, $code4801, 127)))
return $rchar4798
else {var $rnumber4805 = $code4801, $g4810 = $rnumber4805.toString(16), $g4811 = $g4777($g4810);
return $g2233("\\u", $g4811)}}}, $rarguments4808 = $rstring4797, $skip4809 = undefined, $g4813 = $SL.call($rarguments4808, ($skip4809 || 0)), $g4814 = $g2369($g4812, $g4813);
return $g4791($g4814, "")}, false)
var $g4817 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var $g4818 = $g2185("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
{var $g4819 = $g2181.match;
$g2265 = $g2203("escape_name", function $g4843 ($name4820)
{if ($T($g4270($name4820, $g4817)))
return $g2233("R", $name4820)
else {var $g4841 = function $g4844 ($rchar4821)
{var $robject4825 = $g4818, $property4826 = $rchar4821, $g4837 = $HP.call($robject4825,$property4826);
if ($T($g4837))
return $g2283($g4818, $rchar4821)
else {var $regexp4829 = "\\w", $rstring4830 = $rchar4821, $g4838 = $rstring4830.match($regexp4829);
if ($T($g4838))
return $rchar4821
else {var $rchar4832 = $rchar4821, $g4839 = $rchar4832.charCodeAt(0), $g4840 = $g2266($g4839);
return $g2233("Z", $g4840)}}}, $rarguments4835 = $name4820, $skip4836 = undefined, $g4842 = $SL.call($rarguments4835, ($skip4836 || 0)), $chars4822 = $g2369($g4841, $g4842);
return $g4791($chars4822, "")}}, false)}
var trueQ = $g1464["true?"], $g4845 = $g2203("valid_js_nameQ", function $g4854 ($identifier4846)
{var $value4848 = $g4270($identifier4846, $g4817), $g4853 = !(trueQ($value4848));
if ($T($g4853))
{var $regexp4851 = "^\\w+$", $rstring4852 = $identifier4846;
return $rstring4852.match($regexp4851)}}, false)
var $g4857, $g4858 = $g1464["as-uppercase"], $g4859 = $g1464.description, $g4860 = $g2203("compile_js", function $g4885 ($exp4861, $env4862)
{var $g4863 = $exp4861;
if ($T($g2204($g4863, $g2205)))
{var $sequence4875 = $exp4861, $g4876 = $sequence4875, $g4877 = (($g4876 || false).length || 0), $g4878 = 0, $g4883 = ($g4877 === $g4878);
if ($T($g4883))
{var $error4880 = $g3046($g3047, $g3052, "empty expression");
throw($error4880);
return false}
else return $g4857($exp4861, $env4862)}
else if ($T($g2204($g4863, $g4014)))
return $g2266($exp4861)
else if ($T($g2204($g4863, $g4015)))
if ($T($exp4861))
return "true"
else return "false"
else if ($T($g2204($g4863, $g3056)))
return $g2233("\"", $g4796($exp4861), "\"")
else if ($T($g2204($g4863, $g4424)))
{var $rstring4882 = $g2234($exp4861), $g4884 = $rstring4882.toUpperCase();
return $g2233("$", $g4884)}
else if ($T($g2204($g4863, $g4016)))
return $g2233("$K(\"", $g2234($exp4861), "\")")
else if ($T($g2204($g4863, $g2209)))
{var $g4864 = $exp4861;
if ($T($g2238($g4864, $g2193("%this-method"))))
return $g4860($g2283($env4862, "current-method"), $env4862)
else if ($T($g2238($g4864, $g2193("%all-arguments"))))
return "arguments"
else if ($T($g2283($exp4861, "generated?")))
return $g2233("$", $g2234($exp4861))
else return $g2265($g2234($exp4861))}
else return $g4859($exp4861)}, false)
{var trueQ = $g1464["true?"], $g4893;
$g4857 = $g2203("compile_js_exp", function $g5030 ($exp4894, $env4895)
{var $sequence4952 = $exp4894, $g4989 = $sequence4952[0], $name4896 = $g2234($g4989), $g4897 = $name4896;
if ($T($g2238($g4897, "%native-call")))
{var $__4898 = $exp4894[0], $operator4899 = $exp4894[1], $values4900 = $SL.call($exp4894, 2);
return $g2233($operator4899, $g4893($values4900, $env4895))}
else if ($T($g2238($g4897, "%infix")))
{var $__4901 = $exp4894[0], $operator4902 = $exp4894[1], $values4903 = $SL.call($exp4894, 2);
return $g2233("(", $g4791($g2369($g2241($g4860, $env4895), $values4903), $g2233(" ", $operator4902, " ")), ")")}
else {var $g4904 = $g2238($g4897, "%plus"), $g4990;
if ($T($g4904))
$g4990 = $g4904
else {var $g4905 = $g2238($g4897, "%minus");
if ($T($g4905))
$g4990 = $g4905
else {var $g4906 = $g2238($g4897, "%times");
if ($T($g4906))
$g4990 = $g4906
else $g4990 = $g2238($g4897, "%divide")}};
if ($T($g4990))
{var $g4991 = $g2193("%infix"), $g4907 = $name4896, $g4992;
if ($T($g2238($g4907, "%plus")))
$g4992 = "+"
else if ($T($g2238($g4907, "%minus")))
$g4992 = "-"
else if ($T($g2238($g4907, "%times")))
$g4992 = "*"
else if ($T($g2238($g4907, "%divide")))
$g4992 = "/"
else $g4992 = false;
var $g4993 = [$g4991, $g4992], $sequence4954 = $exp4894, $g4994 = $sequence4954.slice(1), $g4995 = $g2233($g4993, $g4994);
return $g4857($g4995, $env4895)}
else if ($T($g2238($g4897, "%array")))
{var $__4908 = $exp4894[0], $elements4909 = $SL.call($exp4894, 1);
return $g2233("[", $g4791($g2369($g2241($g4860, $env4895), $elements4909), ", "), "]")}
else if ($T($g2238($g4897, "%object")))
{var $sequence4956 = $exp4894, $key_values4910 = $sequence4956.slice(1), $entries4911 = [], $robject4958 = $key_values4910, $g4996 = (($robject4958 || false).length || 0), $g4912 = ($g4996 / 2), $i4913 = 0;
while ($T(true))
{var $value4960 = $g3981($i4913, $g4912), $g4999 = !(trueQ($value4960));
if ($T($g4999))
{(function $g5031 ($i4914)
{var $rarray4963 = $entries4911, $name4915 = $g2331($key_values4910, ($i4914 * 2)), $g4997;
if ($T($g4845($name4915)))
$g4997 = $name4915
else $g4997 = $g4860($name4915, $env4895);
var $g4998 = $g4860($g2331($key_values4910, (($i4914 * 2) + 1)), $env4895), $value4964 = $g2233($g4997, ":", $g4998);
$rarray4963.push($value4964);
return $rarray4963})($i4913);
$i4913 = ($i4913 + 1)}
else break};
false;
return $g2233("{", $g4791($entries4911, ",\n"), "}")}
else if ($T($g2238($g4897, "%if")))
{var $__4916 = $exp4894[0], $test4917 = $exp4894[1], $then4918 = $exp4894[2], $relse4919 = $exp4894[3], $g5000 = $g4860($test4917, $env4895), $g5001 = $g4860($then4918, $env4895), $g5002;
if ($T($relse4919))
{var $value4966 = $g2329($relse4919, [$g2193("%return"), false]);
$g5002 = !(trueQ($value4966))}
else $g5002 = false;
var $g5003;
if ($T($g5002))
$g5003 = $g2233("\nelse ", $g4860($relse4919, $env4895))
else $g5003 = "";
return $g2233("if (", $g5000, ")\n", $g5001, $g5003)}
else if ($T($g2238($g4897, "%while")))
{var $__4920 = $exp4894[0], $test4921 = $exp4894[1], $body4922 = $exp4894[2];
return $g2233("while (", $g4860($test4921, $env4895), ")\n", $g4860($body4922, $env4895))}
else if ($T($g2238($g4897, "%try")))
{var $__4923 = $exp4894[0], $body4924 = $exp4894[1], $rvar4925 = $exp4894[2], $rcatch4926 = $exp4894[3];
return $g2233("try {", $g4860($body4924, $env4895), "}\n", "catch (", $g4860($rvar4925, $env4895), ")\n", "{", $g4860($rcatch4926, $env4895), "}")}
else if ($T($g2238($g4897, "%return")))
{var $sequence4968 = $exp4894, $g5004 = $sequence4968[1], $g5005 = $g4860($g5004, $env4895);
return $g2233("return ", $g5005)}
else if ($T($g2238($g4897, "%begin")))
{var $g5006 = $g2241($g4860, $env4895), $sequence4970 = $exp4894, $g5007 = $sequence4970.slice(1), $g5008 = $g2369($g5006, $g5007), $g5009 = $g4791($g5008, ";\n");
return $g2233("{", $g5009, "}")}
else if ($T($g2238($g4897, "%set")))
{var $__4927 = $exp4894[0], $rvar4928 = $exp4894[1], $value4929 = $exp4894[2];
return $g2233($g4860($rvar4928, $env4895), " = ", $g4860($value4929, $env4895))}
else if ($T($g2238($g4897, "%method")))
{var $__4930 = $exp4894[0], $rarguments4931 = $exp4894[1], $body4932 = $exp4894[2], $name4933 = $g2267(), $previous_method4934 = $g2283($env4895, "current-method"), $g5010 = $g4860($name4933, $env4895), $g5011 = $g4791($g2369($g2241($g4860, $env4895), $rarguments4931), ", ");
$g2264($env4895, "current-method", $name4933);
var $bodyt4935 = $g4860($body4932, $env4895);
$g2264($env4895, "current-method", $previous_method4934);
var $g5014;
if ($T($g2210($body4932)))
{var $sequence4972 = $body4932, $g5012 = $sequence4972[0], $g5013 = $g2193("%begin");
$g5014 = $g2238($g5012, $g5013)}
else $g5014 = false;
var $g5015;
if ($T($g5014))
$g5015 = $bodyt4935
else $g5015 = $g2233("{", $bodyt4935, "}");
return $g2233("function ", $g5010, " (", $g5011, ")\n", $g5015)}
else if ($T($g2238($g4897, "%var")))
{var $__4936 = $exp4894[0], $bindings4937 = $SL.call($exp4894, 1);
return $g2233("var ", $g4791($g2369(function $g5032 ($binding4938)
{var $g4939;
if ($T($g2204($binding4938, $g2205)))
$g4939 = $binding4938
else $g4939 = [$binding4938, false];
var $rvar4940 = $g4939[0], $value4941 = $g4939[1], $g5016 = $g4860($rvar4940, $env4895), $g5017;
if ($T($value4941))
$g5017 = $g2233(" = ", $g4860($value4941, $env4895))
else $g5017 = "";
return $g2233($g5016, $g5017)}, $bindings4937), ", "))}
else if ($T($g2238($g4897, "%native")))
{var $rfunction4983 = $g2233, $g5018 = function $g5033 ($e4942)
{if ($T($g2204($e4942, $g2209)))
return $g4860($e4942)
else return $g2266($e4942)}, $sequence4982 = $exp4894, $g5019 = $sequence4982.slice(1), $values4984 = $g2369($g5018, $g5019), $g4985 = $values4984, $g5020 = $g4985[0], $g4986 = $values4984, $g5021 = $g4986.slice(1);
return $g2359($rfunction4983, $g5020, $g5021)}
else if ($T($g2238($g4897, "%native-name")))
{var $sequence4988 = $exp4894, $g5022 = $sequence4988[1], $g5023 = $g2265($g5022);
return $g2233("\"", $g5023, "\"")}
else if ($T($g2238($g4897, "%get-property")))
{var $__4943 = $exp4894[0], $robject4944 = $exp4894[1], $properties4945 = $SL.call($exp4894, 2), $g5024;
if ($T($g2204($robject4944, $g4014)))
$g5024 = $g2233("(", $g4860($robject4944, $env4895), ")")
else $g5024 = $g4860($robject4944, $env4895);
var $g5027 = $g2359(function $g5034 ($result4946, $property4947)
{var $g5025;
if ($T($g2204($property4947, $g3056)))
$g5025 = $g4845($property4947)
else $g5025 = false;
var $g5026;
if ($T($g5025))
$g5026 = $g2233(".", $property4947)
else $g5026 = $g2233("[", $g4860($property4947, $env4895), "]");
return $g2233($result4946, $g5026)}, "", $properties4945);
return $g2233($g5024, $g5027)}
else {var $rfunction4948 = $exp4894[0], $values4949 = $SL.call($exp4894, 1), $functiont4950 = $g4860($rfunction4948, $env4895), $g5028;
if ($T($g4595($rfunction4948)))
$g5028 = $g2233("(", $functiont4950, ")")
else $g5028 = $functiont4950;
var $g5029 = $g4893($values4949, $env4895);
return $g2233($g5028, $g5029)}}}, false)}
$g4893 = $g2203("compile_js_call", function $g5037 ($values5035, $env5036)
{return $g2233("(", $g4791($g2369($g2241($g4860, $env5036), $values5035), ", "), ")")}, false)
var $g5042 = $K("string"), $g5038 = $g2182.read, $g5039 = $g2179["<string-stream>"], $g5040 = $g2203("read_program", function $g5043 ($source5041)
{return $g5038($g3046($g5039, $g5042, $g2233("(", $source5041, "\n)")))}, false)
var $g5044 = $g2203("compile_expression", function $g5052 ($exp5045, $env5046)
{return $g2359(function $g5053 ($result5047, $namesfn5048)
{var $name5049 = $namesfn5048[0], $fn5050 = $namesfn5048[1], $result5051 = $fn5050($result5047);
return $result5051}, $exp5045, [["source", $g3328], ["macroexpanded", $g2241($g2294, $env5046)], ["lifted defines", $g2241($g3329, $env5046)], ["defined free variables", $g2241($g3521, $env5046)], ["alpha-converted", $g2241($g3795, $env5046)], ["inline", $g2241($g3864, $env5046)], ["defined free variables after inline", $g2241($g3552, $env5046)], ["ANF", $g4021], ["lifted symbols", $g2241($g4411, $env5046)], ["statements", $g2241($g4301, $env5046)], ["flattened", $g4536], ["compiled", $g2241($g4860, $env5046)]])}, false)
var $g5054 = $g2184["resolve-path"], $g5055 = $g2203("executable_path", function $g5057 ($module_name5056)
{return $g5054("build", $g2233($module_name5056, ".js"))}, false)
var $g5058 = $g2203("module_path", function $g5061 ($base_path5059, $module_name5060)
{return $g5054($base_path5059, $g2233($module_name5060, ".rm"))}, false)
var $g5062 = $g2203("source_path", function $g5064 ($module_name5063)
{return $g5054("src", $g2233($module_name5063, ".ralph"))}, false)
var trueQ = $g1464["true?"], $g5066 = $g2184["file-properties"], $g5067 = $g2184["file-exists?"], $g5068 = $g2203("recompileQ", function $g5078 ($module_name5069)
{var $value5074 = $g2283($g2186, $module_name5069, "native?"), $g5077 = !(trueQ($value5074));
if ($T($g5077))
{var $path5070 = $g5055($module_name5069), $value5076 = $g5067($path5070), $g5071 = !(trueQ($value5076));
if ($T($g5071))
return $g5071
else {var $path25072 = $g5062($module_name5069);
return $g4792($g2283($g5066($path5070), "modification-date"), $g2283($g5066($path25072), "modification-date"))}}}, false)
{var $g5082 = $g1464["chain-object"], $g5083, $g5084;
$g3273 = $g2203("compile_time_import_module", function $g5098 ($env5085, $module_name5086)
{var $g5087 = $SL.call(arguments, 2), $g5088 = $g3093($g5087, {options:false}), $options5089 = $g5088.options, $g5095;
if ($T($g2238($module_name5086, "ralph/core")))
$g5095 = [$g2316, $g3432]
else {$g5083($module_name5086);
var $definitions5090 = require($module_name5086), $macros5091 = $g2195(), $symbol_macros5092 = $g2195();
$g2292(function $g5099 ($name5093)
{var $definition5094 = $g2283($definitions5090, $name5093);
if ($T($g2283($definition5094, "%macro?")))
return $g2264($macros5091, $name5093, $definition5094)
else if ($T($g2283($definition5094, "%symbol-macro?")))
return $g2264($symbol_macros5092, $name5093, $definition5094)}, $g3158($g5084, $g3520($definitions5090), $options5089));
$g5095 = [$macros5091, $symbol_macros5092]};
var $macros5096 = $g5095[0], $symbol_macros5097 = $g5095[1];
$g5082($g2283($env5085, "macros"), $macros5096);
return $g5082($g2283($env5085, "symbol-macros"), $symbol_macros5097)}, false)}
{var $g5104 = $g1464["remove!"], $g5105 = $g1464["as-object"];
$g5084 = $g2203("process_names", function $g5124 ($all5106)
{var $g5107 = $SL.call(arguments, 1), $g5108 = $g3093($g5107, {only:false,
exclude:false,
prefix:false,
rename:false}), $only5109 = $g5108.only, $exclude5110 = $g5108.exclude, $prefix5111 = $g5108.prefix, $rename5112 = $g5108.rename, $resolve5113 = function $g5125 ($exp5114)
{if ($T($g2204($exp5114, $g3056)))
return $exp5114
else return $g2254($exp5114)}, $g5121;
if ($T($g2204($only5109, $g2205)))
$g5121 = $g2369($resolve5113, $only5109)
else $g5121 = $all5106;
var $names5115 = $g3519($g5121), $g5116 = $rename5112, $g5122;
if ($T($g5116))
$g5122 = $g5116
else $g5122 = [];
var $g5123 = $g2369($resolve5113, $g5122), $renamings5117 = $g5105($g5123);
$g2292($g2293($g5104, $names5115), $g2369($resolve5113, $exclude5110));
$g3607($names5115, $g3520($renamings5117));
return $g2369(function $g5126 ($name5118)
{var $g5119 = $g2283($renamings5117, $name5118);
if ($T($g5119))
{var $renaming5120 = $g5119;
return [$name5118, $renaming5120]}
else if ($T($g2204($prefix5111, $g3056)))
return [$name5118, $g2233($prefix5111, $name5118)]
else return $name5118}, $names5115)}, false)}
{var $g5127;
$g3274 = $g2203("import_module", function $g5136 ($module5128, $module_name5129)
{var $options5130 = $SL.call(arguments, 2), $other_module5131 = $g5127($module_name5129), $rarray5134 = $g2283($module5128, "imports"), $value5135 = [$other_module5131, $g3158($g5084, $g2283($other_module5131, "exports"), $options5130)];
$rarray5134.unshift($value5135);
$rarray5134;
return $other_module5131}, false)}
{var $g5140;
$g5127 = $g2203("find_module", function $g5145 ($module_name5141)
{var $g5142 = $g5083($module_name5141);
if ($T($g5142))
return $g5142
else {var $g5143 = $g2283($g2186, $module_name5141);
if ($T($g5143))
return $g5143
else {var $g5144 = $g5140("src", $module_name5141);
if ($T($g5144))
return $g5144
else return $g5140("build", $module_name5141)}}}, false)}
{var $g5150 = $K("name"), $g5146 = $g2184["read-file"];
$g5140 = $g2203("read_module", function $g5151 ($base_path5147, $module_name5148)
{var $path5149 = $g5058($base_path5147, $module_name5148);
if ($T($g5067($path5149)))
return $g3158($g2293($g3046, $g2189, $g5150), $g5038($g3046($g5039, $g5042, $g5146($path5149))))}, false)}
{var $g5178 = $K("module"), $g5179 = $K("exports"), $g5180 = $K("inline"), trueQ = $g1464["true?"], $g5153 = $g2184["write-file"];
$g5083 = $g2203("compile_module", function $g5181 ($module_name5154)
{var $robject5167 = $g2186, $property5168 = $module_name5154, $value5169 = $HP.call($robject5167,$property5168), $g5176 = !(trueQ($value5169));
if ($T($g5176))
{var $g5155 = $g5140("src", $module_name5154);
if ($T($g5155))
{var $module5156 = $g5155;
$g2264($g2186, $module_name5154, $module5156)}};
if ($T($g5068($module_name5154)))
{var $module5157 = $g3046($g2189, $g5150, $module_name5154), $env5158 = $g3046($g2196, $g5178, $module5157), $source5159 = $g5146($g5062($module_name5154)), $program5160 = $g5040($source5159), $result5161 = "";
$g2264($g2186, $module_name5154, $module5157);
$g3273($env5158, "ralph/core");
var $value5171 = $g2238($module_name5154, "ralph/core"), $g5177 = !(trueQ($value5171));
if ($T($g5177))
{$g3274($module5157, "ralph/core");
var $rarray5174 = $program5160, $value5175 = $g3275("ralph/core", $env5158);
$rarray5174.unshift($value5175);
$rarray5174};
$g2292(function $g5182 ($expression5162)
{var $code5163 = $g5044($expression5162, $env5158);
return $result5161 = $g2233($result5161, $code5163, "\n")}, $program5160);
$g5153($g5055($module_name5154), $result5161);
$g5153($g5058("build", $module_name5154), $g4859([$module_name5154, $g5179, $g2283($module5157, "exports"), $g5180, $g2283($module5157, "inline")]));
return $module5157}}, false);
exports["compile-module"] = $g5083}
