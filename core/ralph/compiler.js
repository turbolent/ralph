var $g1464 = require("ralph/core")
{var $g2131, $g2132, $g2133, $g2134, $g2135;
$g2131 = require("ralph/stream");
$g2132 = require("ralph/format");
$g2133 = require("ralph/regexp");
$g2134 = require("ralph/reader");
$g2135 = require("ralph/file-system")}
var $g2136 = $g1464["make-object"], $g2137 = $g2136()
var $g2138 = $g1464["%make-class"], $g2139 = $g1464["<object>"], $g2140 = $g2138($g2139, {name:false,
"native?":false,
exports:function $g2141 ()
{return []},
imports:function $g2142 ()
{return []},
dependencies:function $g2143 ()
{return []},
inline:function $g2144 ()
{return []}})
var $g2145 = $g1464.symbol, $g2146 = [$g2145("%all-arguments"), $g2145("%this-method")]
var $g2147 = $g1464["make-plain-object"], $g2148 = $g2138($g2139, {module:false,
macros:function $g2149 ()
{return $g2147()},
"symbol-macros":function $g2150 ()
{return $g2147()},
identifiers:function $g2151 ()
{return $g2136()},
"defined?":function $g2152 ()
{return $g2136()},
lifted:function $g2153 ()
{return $g2136()},
"import-identifiers":function $g2154 ()
{return $g2147()}})
var trueQ = $g1464["true?"], $g2155 = $g1464["%make-function"], $g2156 = $g1464["instance?"], $g2157 = $g1464["<array>"], $g2158 = $g1464.not, $g2159 = $g1464["empty?"], $g2160 = $g1464.first, $g2161 = $g1464["<symbol>"], $g2162 = $g2155("expressionQ", function $g2184 ($form2163)
{if ($T($g2156($form2163, $g2157)))
{var $sequence2175 = $form2163, $g2176 = $sequence2175, $g2177 = (($g2176 || false).length || 0), $g2178 = 0, $value2179 = ($g2177 === $g2178), $g2182 = !(trueQ($value2179));
if ($T($g2182))
{var $sequence2181 = $form2163, $g2183 = $sequence2181[0];
return $g2156($g2183, $g2161)}}}, false)
var $g2185 = $g1464.concatenate, $g2186 = $g1464["symbol-name"], $g2187 = $g2155("transform_setter_identifier", function $g2189 ($identifier2188)
{return $g2145($g2185($g2186($identifier2188), "-setter"))}, false)
var $g2190 = $g1464["=="], $g2191 = $g1464.size, $g2192 = $g1464["every?"], $g2193 = $g1464.rcurry, $g2194 = $g2155("setter_identifierQ", function $g2204 ($form2195)
{if ($T($g2156($form2195, $g2157)))
{var $robject2197 = $form2195, $g2200 = (($robject2197 || false).length || 0), $g2201 = $g2190($g2200, 2);
if ($T($g2201))
if ($T($g2192($g2193($g2156, $g2161), $form2195)))
{var $sequence2199 = $form2195, $g2202 = $sequence2199[0], $g2203 = $g2186($g2202);
return $g2190($g2203, "setter")}}}, false)
var $g2205 = $g1464.second, $g2206 = $g2155("identifier_name", function $g2212 ($identifier2207)
{var $g2211;
if ($T($g2194($identifier2207)))
{var $sequence2209 = $identifier2207, $g2210 = $sequence2209[1];
$g2211 = $g2187($g2210)}
else $g2211 = $identifier2207;
return $g2186($g2211)}, false)
var $g2213 = 0
var $g2214 = $g2155("reset_symbol_counterN", function $g2215 ()
{return $g2213 = 0}, false)
var $g2216 = $g1464["get-setter"], $g2217, $g2218 = $g1464["as-string"], $g2219 = $g2155("generate_symbol", function $g2225 ($prefix2220)
{var $g2223;
if ($T($prefix2220))
$g2223 = $g2217($prefix2220)
else $g2223 = "g";
var $g2224 = $g2218($g2213 = ($g2213 + 1)), $name2221 = $g2185($g2223, $g2224), $result2222 = $g2145($name2221);
$g2216($result2222, "generated?", true);
return $result2222}, false)
var $g2226 = $g2155("bindN", function $g2229 ($env2227, $identifier2228)
{return $g2216($env2227, "bound?", $g2186($identifier2228), true)}, false)
var $g2230 = $g2155("unbindN", function $g2233 ($env2231, $identifier2232)
{return $g2216($env2231, "bound?", $g2186($identifier2232), false)}, false)
var $g2234 = $g2136()
var $g2235 = $g1464.get, $g2236 = $g2155("find_special_form", function $g2243 ($form2237, $env2238)
{if ($T($g2162($form2237)))
{var $sequence2240 = $form2237, $g2241 = $sequence2240[0], $g2242 = $g2186($g2241);
return $g2235($g2234, $g2242)}}, false)
{var $g2244 = $g1464["do"], $g2245 = $g1464.curry, $g2246;
$g2216($g2234, "%method", function $g2251 ($env2247, $rarguments2248, $body2249)
{$g2244($g2245($g2226, $env2247), $rarguments2248);
var $expanded_body2250 = $g2246($body2249, $env2247);
$g2244($g2245($g2230, $env2247), $rarguments2248);
return [$g2145("%method"), $rarguments2248, $expanded_body2250]})}
$g2216($g2234, "%set", function $g2255 ($env2252, $identifier2253, $value2254)
{return [$g2145("%set"), $identifier2253, $g2246($value2254, $env2252)]})
$g2216($g2234, "define", function $g2259 ($env2256, $identifier2257, $value2258)
{$g2226($env2256, $identifier2257);
return [$g2145("define"), $identifier2257, $g2246($value2258, $env2256)]})
$g2216($g2234, "%bind", function $g2267 ($env2260, $binding2261, $body2262)
{var $rvar2263 = $binding2261[0], $value2264 = $binding2261[1], $expanded_value2265 = $g2246($value2264, $env2260);
$g2226($env2260, $rvar2263);
var $result2266 = [$g2145("%bind"), [$rvar2263, $expanded_value2265], $g2246($body2262, $env2260)];
$g2230($env2260, $rvar2263);
return $result2266})
var $g2268 = $g2136()
var $g2270 = $g2155("maybe_begin", function $g2277 ($expressions2271)
{var $robject2274 = $expressions2271, $g2272 = (($robject2274 || false).length || 0);
if ($T($g2190($g2272, 0)))
return false
else if ($T($g2190($g2272, 1)))
{var $sequence2276 = $expressions2271;
return $sequence2276[0]}
else return $g2185([$g2145("%begin")], $expressions2271)}, false)
var $g2305 = $REST, $g2306 = $KEY, $g2307 = $K("end"), $g2308 = $K("start"), $g2280 = $g1464["find-key"], $g2281 = $g1464["="], $g2282 = $g1464["copy-sequence"], $g2283 = $g1464.element, $g2284 = $g1464.inc, $g2285 = $g2155("analyze_lambda_list", function $g2309 ($list2286)
{var $position2287 = function $g2310 ($symbol2288)
{return $g2280($list2286, $g2245($g2281, $symbol2288))}, $rest2289 = $position2287($g2305), $key2290 = $position2287($g2306), $g2291 = $rest2289, $g2299;
if ($T($g2291))
$g2299 = $g2291
else {var $g2292 = $key2290;
if ($T($g2292))
$g2299 = $g2292
else {var $robject2294 = $list2286;
$g2299 = (($robject2294 || false).length || 0)}};
var $g2300 = $g2282($list2286, $g2307, $g2299), $g2302;
if ($T($rest2289))
{var $rnumber2296 = $rest2289, $g2301 = ($rnumber2296 + 1);
$g2302 = $g2283($list2286, $g2301)}
else $g2302 = false;
var $g2304;
if ($T($key2290))
{var $rnumber2298 = $key2290, $g2303 = ($rnumber2298 + 1);
$g2304 = $g2282($list2286, $g2308, $g2303)}
else $g2304 = false;
return [$g2300, $g2302, $g2304]}, false)
var $g2311 = $g1464.reduce, $g2312 = $g2155("wrap", function $g2317 ($form2313)
{var $wrappers2314 = $SL.call(arguments, 1);
return $g2311(function $g2318 ($result2315, $wrapper2316)
{return $wrapper2316($result2315)}, $form2313, $wrappers2314)}, false)
var trueQ = $g1464["true?"], $g2321 = $g1464.map, $g2322 = $g1464.reduce1, $g2323 = $g2155("wrap_restSkeys", function $g2418 ($body2324, $all2325, $required2326, $rest2327, $key2328)
{var $restq2329 = $rest2327, $g2330 = $rest2327, $rest2331;
if ($T($g2330))
$rest2331 = $g2330
else {var $sequence2351 = $key2328, $g2352 = $sequence2351, $g2353 = (($g2352 || false).length || 0), $g2354 = 0, $value2355 = ($g2353 === $g2354), $g2400 = !(trueQ($value2355));
if ($T($g2400))
$rest2331 = $g2219()
else $rest2331 = false};
return $g2312($body2324, function $g2419 ($body2332)
{var $sequence2366 = $key2328, $g2367 = $sequence2366, $g2368 = (($g2367 || false).length || 0), $g2369 = 0, $g2401 = ($g2368 === $g2369);
if ($T($g2401))
return $body2332
else {var $key_values2334 = $g2321(function $g2420 ($binding2333)
{if ($T($g2156($binding2333, $g2157)))
return $binding2333
else return [$binding2333, false]}, $key2328), $g2402 = $g2145("bind-properties"), $g2403 = $g2321($g2160, $key_values2334), $g2404 = $g2145("%keys"), $g2405 = [$g2145("%object")], $rfunction2378 = $g2185, $values2379 = $g2321(function $g2421 ($key_value2335)
{var $key2336 = $key_value2335[0], $value2337 = $key_value2335[1];
return [$g2186($key2336), $value2337]}, $key_values2334), $g2380 = $values2379, $g2406 = $g2380[0], $g2381 = $values2379, $g2407 = $g2381.slice(1), $g2408 = $g2311($rfunction2378, $g2406, $g2407), $g2409 = $g2185($g2405, $g2408), $g2410 = [$g2404, $rest2331, $g2409];
return [$g2402, $g2403, $g2410, $body2332]}}, function $g2422 ($body2338)
{var $g2339 = $restq2329, $g2411;
if ($T($g2339))
$g2411 = $g2339
else {var $sequence2393 = $key2328, $g2394 = $sequence2393, $g2395 = (($g2394 || false).length || 0), $g2396 = 0, $value2397 = ($g2395 === $g2396);
$g2411 = !(trueQ($value2397))};
if ($T($g2411))
{var $g2412 = $g2145("bind"), $g2413 = $g2145("%native-call"), $robject2399 = $required2326, $g2414 = (($robject2399 || false).length || 0), $g2415 = [$g2413, "$SL.call", $all2325, $g2414], $g2416 = [$rest2331, $g2415], $g2417 = [$g2416];
return [$g2412, $g2417, $body2338]}
else return $body2338})}, false)
$g2216($g2268, "begin", function $g2425 ($__2423)
{var $expressions2424 = $SL.call(arguments, 1);
return $g2270($expressions2424)})
$g2216($g2268, "method", function $g2434 ($__2427, $rarguments2428)
{var $body2429 = $SL.call(arguments, 2), $g2430 = $g2285($rarguments2428), $required2431 = $g2430[0], $rest2432 = $g2430[1], $key2433 = $g2430[2];
return [$g2145("%method"), $required2431, $g2323($g2270($body2429), $g2145("%all-arguments"), $required2431, $rest2432, $key2433)]})
{var $g2435 = $g1464.reverse;
$g2216($g2268, "bind", function $g2458 ($__2436, $bindings2437)
{var $body2438 = $SL.call(arguments, 2), $sequence2451 = $bindings2437, $g2452 = $sequence2451, $g2453 = (($g2452 || false).length || 0), $g2454 = 0, $g2455 = ($g2453 === $g2454);
if ($T($g2455))
return $g2270($body2438)
else return $g2311(function $g2459 ($body2439, $binding2440)
{var $g2456 = $g2145("%bind"), $g2457;
if ($T($g2156($binding2440, $g2161)))
$g2457 = [$binding2440, false]
else $g2457 = $binding2440;
return [$g2456, $g2457, $body2439]}, $g2270($body2438), $g2435($bindings2437))})}
$g2216($g2268, "if", function $g2464 ($__2460, $test2461, $then2462, $relse2463)
{return [$g2145("%if"), $test2461, $then2462, $relse2463]})
{var trueQ = $g1464["true?"], $g2465 = $g1464.rest;
$g2216($g2268, "set!", function $g2488 ($__2466, $place2467)
{var $values2468 = $SL.call(arguments, 2), $g2481;
if ($T($g2156($place2467, $g2157)))
{var $sequence2471 = $place2467, $g2479 = $sequence2471[0], $g2480 = $g2145("%get-property"), $value2472 = $g2190($g2479, $g2480);
$g2481 = !(trueQ($value2472))}
else $g2481 = false;
if ($T($g2481))
{var $sequence2474 = $place2467, $g2482 = $sequence2474[0], $g2483 = $g2187($g2482), $g2484 = [$g2483], $sequence2476 = $place2467, $g2485 = $sequence2476.slice(1);
return $g2185($g2484, $g2485, $values2468)}
else {var $g2486 = $g2145("%set"), $sequence2478 = $values2468, $g2487 = $sequence2478[0];
return [$g2486, $place2467, $g2487]}})}
$g2216($g2268, "parallel-set!", function $g2509 ($__2489, $rvar2490, $value2491)
{var $clauses2492 = $SL.call(arguments, 3), $sequence2504 = $clauses2492, $g2505 = $sequence2504, $g2506 = (($g2505 || false).length || 0), $g2507 = 0, $g2508 = ($g2506 === $g2507);
if ($T($g2508))
return [$g2145("set!"), $rvar2490, $value2491]
else {var $temp2493 = $g2219();
return [$g2145("bind"), [[$temp2493, $value2491]], $g2185([$g2145("parallel-set!")], $clauses2492), [$g2145("set!"), $rvar2490, $temp2493]]}})
{var $g2542 = $K("else"), trueQ = $g1464["true?"];
$g2216($g2268, "cond", function $g2543 ($__2511)
{var $cases2512 = $SL.call(arguments, 1), $sequence2528 = $cases2512, $g2529 = $sequence2528, $g2530 = (($g2529 || false).length || 0), $g2531 = 0, $value2532 = ($g2530 === $g2531), $g2537 = !(trueQ($value2532));
if ($T($g2537))
{var $sequence2534 = $cases2512, $g2513 = $sequence2534[0], $test2514 = $g2513[0], $then2515 = $SL.call($g2513, 1), $then2516 = $g2270($then2515);
if ($T($g2190($test2514, $g2542)))
return $then2516
else {var $g2538 = $g2145("if"), $g2539 = [$g2145("cond")], $sequence2536 = $cases2512, $g2540 = $sequence2536.slice(1), $g2541 = $g2185($g2539, $g2540);
return [$g2538, $test2514, $then2516, $g2541]}}})}
$g2216($g2268, "when", function $g2547 ($__2544, $test2545)
{var $body2546 = $SL.call(arguments, 2);
return [$g2145("if"), $test2545, $g2270($body2546), false]})
$g2216($g2268, "unless", function $g2551 ($__2548, $test2549)
{var $body2550 = $SL.call(arguments, 2);
return [$g2145("if"), [$g2145("not"), $test2549], $g2270($body2550), false]})
$g2216($g2268, "and", function $g2569 ($__2553)
{var $values2554 = $SL.call(arguments, 1), $robject2557 = $values2554, $g2555 = (($robject2557 || false).length || 0);
if ($T($g2190($g2555, 0)))
return true
else if ($T($g2190($g2555, 1)))
{var $sequence2559 = $values2554;
return $sequence2559[0]}
else {var $g2564 = $g2145("when"), $sequence2561 = $values2554, $g2565 = $sequence2561[0], $g2566 = [$g2145("and")], $sequence2563 = $values2554, $g2567 = $sequence2563.slice(1), $g2568 = $g2185($g2566, $g2567);
return [$g2564, $g2565, $g2568]}})
$g2216($g2268, "or", function $g2592 ($__2571)
{var $values2572 = $SL.call(arguments, 1), $robject2576 = $values2572, $g2573 = (($robject2576 || false).length || 0);
if ($T($g2190($g2573, 0)))
return false
else if ($T($g2190($g2573, 1)))
{var $sequence2578 = $values2572;
return $sequence2578[0]}
else {var $value2574 = $g2219(), $g2583 = $g2145("bind"), $sequence2580 = $values2572, $g2584 = $sequence2580[0], $g2585 = [$value2574, $g2584], $g2586 = [$g2585], $g2587 = $g2145("if"), $g2588 = [$g2145("or")], $sequence2582 = $values2572, $g2589 = $sequence2582.slice(1), $g2590 = $g2185($g2588, $g2589), $g2591 = [$g2587, $value2574, $value2574, $g2590];
return [$g2583, $g2586, $g2591]}})
$g2216($g2268, "if-bind", function $g2600 ($__2593, $binding2594, $then2595, $relse2596)
{var $rvar2597 = $binding2594[0], $value2598 = $binding2594[1], $temp2599 = $g2219();
return [$g2145("bind"), [[$temp2599, $value2598]], [$g2145("if"), $temp2599, [$g2145("bind"), [[$rvar2597, $temp2599]], $then2595], $relse2596]]})
$g2216($g2268, "while", function $g2604 ($__2601, $test2602)
{var $body2603 = $SL.call(arguments, 2);
return [$g2145("%while"), $test2602, $g2270($body2603)]})
$g2216($g2268, "until", function $g2608 ($__2605, $test2606)
{var $body2607 = $SL.call(arguments, 2);
return $g2185([$g2145("while"), [$g2145("not"), $test2606]], $body2607)})
$g2216($g2268, "dotimes", function $g2627 ($__2610, $binding2611)
{var $body2612 = $SL.call(arguments, 2), $temp2613 = $g2219(), $rvar2614 = $binding2611[0], $count2615 = $binding2611[1], $result2616 = $binding2611[2], $g2618 = $g2145("bind"), $g2619 = [[$temp2613, $count2615]], $g2620 = $g2145("for"), $g2621 = [[$rvar2614, 0, [$g2145("+"), $rvar2614, 1]]], $g2622 = [$g2145(">="), $rvar2614, $temp2613], $g2617 = $result2616, $g2623;
if ($T($g2617))
$g2623 = $g2617
else $g2623 = false;
var $g2624 = [$g2622, $g2623], $g2625 = [$g2620, $g2621, $g2624], $g2626 = $g2185($g2625, $body2612);
return [$g2618, $g2619, $g2626]})
{var trueQ = $g1464["true?"], $g2634 = $g1464["any?"], $g2635 = $g1464["push-last"], $g2636 = $g1464.slice, $g2637 = $g1464.third;
$g2216($g2268, "for", function $g2732 ($__2638, $clauses2639, $end2640)
{var $body2641 = $SL.call(arguments, 3), $init_clauses2642 = [], $next_clauses2643 = [], $vars2644 = $g2321($g2160, $clauses2639), $g2645 = $clauses2639, $g2646, $g2647, $g2648 = [$g2645];
while ($T(true))
{var $g2649 = $g2646, $value2654;
if ($T($g2649))
$value2654 = $g2649
else $value2654 = $g2634($g2159, $g2648);
var $g2718 = !(trueQ($value2654));
if ($T($g2718))
{var $sequence2656 = $g2645, $clause2650 = $sequence2656[0];
(function $g2733 ($clause2651)
{var $rarray2665 = $init_clauses2642, $rarray2662 = $clause2651, $start2663 = 0, $end2664 = 2, $value2666 = $rarray2662.slice($start2663, $end2664);
$rarray2665.push($value2666);
$rarray2665;
var $rarray2671 = $next_clauses2643, $sequence2670 = $clause2651, $value2672 = $sequence2670[0];
$rarray2671.push($value2672);
$rarray2671;
var $rarray2677 = $next_clauses2643, $sequence2676 = $clause2651, $value2678 = $sequence2676[2];
$rarray2677.push($value2678);
return $rarray2677})($clause2650);
var $sequence2680 = $g2645, $g2717 = $sequence2680.slice(1);
$g2645 = $g2717;
$g2648 = [$g2645]}
else break};
$g2647;
var $g2719 = $g2145("bind"), $g2720 = $g2145("while"), $sequence2691 = $end2640, $g2692 = $sequence2691, $g2693 = (($g2692 || false).length || 0), $g2694 = 0, $g2652 = ($g2693 === $g2694), $g2723;
if ($T($g2652))
$g2723 = $g2652
else {var $g2721 = $g2145("not"), $sequence2696 = $end2640, $g2722 = $sequence2696[0];
$g2723 = [$g2721, $g2722]};
var $g2724 = $g2185([$g2185([$g2145("method"), $vars2644], $body2641)], $vars2644), $g2725 = $g2185([$g2145("parallel-set!")], $next_clauses2643), $g2726 = [$g2720, $g2723, $g2724, $g2725], $g2727 = $g2185($g2726), $sequence2709 = $end2640, $sequence2710 = $sequence2709.slice(1), $g2711 = $sequence2710, $g2712 = (($g2711 || false).length || 0), $g2713 = 0, $value2714 = ($g2712 === $g2713), $g2728 = !(trueQ($value2714)), $g2731;
if ($T($g2728))
{var $g2729 = [$g2145("begin")], $sequence2716 = $end2640, $g2730 = $sequence2716.slice(1);
$g2731 = $g2185($g2729, $g2730)}
else $g2731 = false;
return [$g2719, $init_clauses2642, $g2727, $g2731]})}
$g2216($g2268, "for-each", function $g2808 ($__2735, $clauses2736, $end2737)
{var $body2738 = $SL.call(arguments, 3), $clauses2740 = $g2321(function $g2809 ($clause2739)
{return $g2185([$g2219()], $clause2739)}, $clauses2736), $endq2741 = $g2219(), $values2742 = $g2219(), $result2743 = $g2219(), $g2780 = $g2145("begin"), $vars2744 = $g2321($g2205, $clauses2740), $g2781 = $g2185([$g2185([$g2145("method"), $vars2744], $body2738)], $vars2744), $g2782 = [$g2780, $g2781], $g2788 = $g2321(function $g2810 ($clause2745)
{var $g2783 = $g2145("set!"), $sequence2759 = $clause2745, $g2784 = $sequence2759[0], $g2785 = $g2145("rest"), $sequence2761 = $clause2745, $g2786 = $sequence2761[0], $g2787 = [$g2785, $g2786];
return [$g2783, $g2784, $g2787]}, $clauses2740), $g2789 = [[$g2145("set!"), $values2742, $g2185([$g2145("%array")], $g2321($g2160, $clauses2740))]], $body2746 = $g2185($g2782, $g2788, $g2789), $g2790 = $g2145("bind"), $g2791 = $g2185($g2321(function $g2811 ($clause2747)
{var $temp2748 = $clause2747[0], $rvar2749 = $clause2747[1], $values2750 = $clause2747[2];
return [$temp2748, $values2750]}, $clauses2740), [[$endq2741, false], [$result2743, false], [$values2742, $g2185([$g2145("%array")], $g2321($g2160, $clauses2740))]]), $g2792 = $g2145("until"), $g2793 = [$g2145("or"), $endq2741, [$g2145("any?"), $g2145("empty?"), $values2742]], $g2794 = $g2145("bind"), $g2795 = $g2321(function $g2812 ($clause2751)
{var $temp2752 = $clause2751[0], $rvar2753 = $clause2751[1], $values2754 = $clause2751[2];
return [$rvar2753, [$g2145("first"), $temp2752]]}, $clauses2740), $sequence2763 = $end2737, $g2755 = $sequence2763[0], $g2805;
if ($T($g2755))
{var $end_test2756 = $g2755, $g2796 = $g2145("if"), $g2797 = $g2145("begin"), $g2798 = $g2145("set!"), $sequence2765 = $end2737, $results2757 = $sequence2765.slice(1), $sequence2776 = $results2757, $g2777 = $sequence2776, $g2778 = (($g2777 || false).length || 0), $g2779 = 0, $g2799 = ($g2778 === $g2779), $g2800;
if ($T($g2799))
$g2800 = [false]
else $g2800 = $results2757;
var $g2801 = $g2270($g2800), $g2802 = [$g2798, $result2743, $g2801], $g2803 = [$g2145("set!"), $endq2741, true], $g2804 = [$g2797, $g2802, $g2803];
$g2805 = [$g2796, $end_test2756, $g2804, $body2746]}
else $g2805 = $body2746;
var $g2806 = [$g2794, $g2795, $g2805], $g2807 = [$g2792, $g2793, $g2806];
return [$g2790, $g2791, $g2807, $result2743]})
$g2216($g2268, "bind-properties", function $g2819 ($__2813, $properties2814, $robject2815)
{var $body2816 = $SL.call(arguments, 3), $objectt2817 = $g2219();
return $g2185([$g2145("bind"), $g2185([[$objectt2817, $robject2815]], $g2321(function $g2820 ($property2818)
{return [$property2818, [$g2145("%get-property"), $objectt2817, $g2186($property2818)]]}, $properties2814))], $body2816)})
$g2216($g2268, "select", function $g2837 ($__2821, $value2822, $test2823)
{var $cases2824 = $SL.call(arguments, 3), $valuet2825 = $g2219(), $testt2826;
if ($T($g2156($test2823, $g2161)))
$testt2826 = $test2823
else $testt2826 = $g2219();
var $test_expression2827 = function $g2838 ($test_value2828)
{return [$testt2826, $valuet2825, $test_value2828]}, $g2832 = $g2145("bind"), $g2833 = [[$valuet2825, $value2822]], $g2834;
if ($T($g2156($test2823, $g2161)))
$g2834 = []
else $g2834 = [[$testt2826, $test2823]];
var $g2835 = $g2185($g2833, $g2834), $g2836 = $g2185([$g2145("cond")], $g2321(function $g2839 ($rcase2829)
{var $tests2830 = $rcase2829[0], $then2831 = $SL.call($rcase2829, 1);
if ($T($g2190($tests2830, $g2542)))
return $rcase2829
else return $g2185([$g2185([$g2145("or")], $g2321($test_expression2827, $tests2830))], $then2831)}, $cases2824));
return [$g2832, $g2835, $g2836]})
var $g2841 = $g2155("destructure", function $g2855 ($bindings2842, $values2843, $body2844)
{if ($T($g2156($values2843, $g2161)))
{var $g2845 = $g2285($bindings2842), $required2846 = $g2845[0], $rest2847 = $g2845[1], $key2848 = $g2845[2], $robject2854 = $required2846, $i2849 = (($robject2854 || false).length || 0);
return $g2311(function $g2856 ($body2850, $binding2851)
{$i2849 = ($i2849 - 1);
if ($T($g2156($binding2851, $g2161)))
return [$g2145("bind"), [[$binding2851, [$g2145("%get-property"), $values2843, $i2849]]], $body2850]
else return $g2841($binding2851, [$g2145("%get-property"), $values2843, $i2849], $body2850)}, $g2323($body2844, $values2843, $required2846, $rest2847, $key2848), $g2435($required2846))}
else {var $rvar2852 = $g2219();
return [$g2145("bind"), [[$rvar2852, $values2843]], $g2841($bindings2842, $rvar2852, $body2844)]}}, false)
$g2216($g2268, "destructuring-bind", function $g2861 ($__2857, $bindings2858, $values2859)
{var $body2860 = $SL.call(arguments, 3);
return $g2841($bindings2858, $values2859, $g2185([$g2145("begin")], $body2860))})
$g2216($g2268, "bind-methods", function $g2869 ($__2862, $bindings2863)
{var $body2864 = $SL.call(arguments, 2);
return $g2185([$g2145("bind"), $g2321($g2160, $bindings2863)], $g2321(function $g2870 ($binding2865)
{var $identifier2866 = $binding2865[0], $rarguments2867 = $binding2865[1], $body2868 = $SL.call($binding2865, 2);
return [$g2145("set!"), $identifier2866, $g2185([$g2145("method"), $rarguments2867], $body2868)]}, $bindings2863), $body2864)})
$g2216($g2268, "inc!", function $g2880 ($__2872, $robject2873, $value2874)
{var $g2876 = $g2145("set!"), $g2877 = $g2145("+"), $g2875 = $value2874, $g2878;
if ($T($g2875))
$g2878 = $g2875
else $g2878 = 1;
var $g2879 = [$g2877, $robject2873, $g2878];
return [$g2876, $robject2873, $g2879]})
$g2216($g2268, "dec!", function $g2890 ($__2882, $robject2883, $value2884)
{var $g2886 = $g2145("set!"), $g2887 = $g2145("-"), $g2885 = $value2884, $g2888;
if ($T($g2885))
$g2888 = $g2885
else $g2888 = 1;
var $g2889 = [$g2887, $robject2883, $g2888];
return [$g2886, $robject2883, $g2889]})
$g2216($g2268, "+", function $g2908 ($__2891)
{var $values2892 = $SL.call(arguments, 1), $sequence2903 = $values2892, $g2904 = $sequence2903, $g2905 = (($g2904 || false).length || 0), $g2906 = 0, $g2907 = ($g2905 === $g2906);
if ($T($g2907))
return 0
else return $g2185([$g2145("%plus")], $values2892)})
$g2216($g2268, "-", function $g2927 ($__2909, $minuend2910)
{var $subtrahends2911 = $SL.call(arguments, 2), $sequence2922 = $subtrahends2911, $g2923 = $sequence2922, $g2924 = (($g2923 || false).length || 0), $g2925 = 0, $g2926 = ($g2924 === $g2925);
if ($T($g2926))
return [$g2145("%native-call"), "-", $minuend2910]
else return $g2185([$g2145("%minus"), $minuend2910], $subtrahends2911)})
$g2216($g2268, "*", function $g2945 ($__2928)
{var $values2929 = $SL.call(arguments, 1), $sequence2940 = $values2929, $g2941 = $sequence2940, $g2942 = (($g2941 || false).length || 0), $g2943 = 0, $g2944 = ($g2942 === $g2943);
if ($T($g2944))
return 1
else return $g2185([$g2145("%times")], $values2929)})
$g2216($g2268, "/", function $g2964 ($__2946, $numerator2947)
{var $denominators2948 = $SL.call(arguments, 2), $sequence2959 = $denominators2948, $g2960 = $sequence2959, $g2961 = (($g2960 || false).length || 0), $g2962 = 0, $g2963 = ($g2961 === $g2962);
if ($T($g2963))
return [$g2145("%divide"), 1, $numerator2947]
else return $g2185([$g2145("%divide"), $numerator2947], $denominators2948)})
$g2216($g2268, "call-next-method", function $g2966 ($__2965)
{return [[$g2145("%get-property"), $g2145("next-method"), "apply"], [$g2145("%native"), "null"], [$g2145("%native"), "arguments"]]})
var trueQ = $g1464["true?"], $g2967 = $g2155("transform_quoted", function $g2993 ($form2968)
{if ($T($g2156($form2968, $g2157)))
{var $sequence2980 = $form2968, $g2981 = $sequence2980, $g2982 = (($g2981 || false).length || 0), $g2983 = 0, $value2984 = ($g2982 === $g2983), $g2989 = !(trueQ($value2984)), $g2992;
if ($T($g2989))
{var $sequence2986 = $form2968, $g2990 = $sequence2986[0], $g2991 = $g2186($g2990);
$g2992 = $g2190($g2991, "%comma")}
else $g2992 = false;
if ($T($g2992))
{var $sequence2988 = $form2968;
return $sequence2988[1]}
else return $g2185([$g2145("%array")], $g2321($g2967, $form2968))}
else if ($T($g2156($form2968, $g2161)))
return [$g2145("symbol"), $g2186($form2968)]
else return $form2968}, false)
$g2216($g2268, "%backquote", function $g2996 ($__2994, $exp2995)
{return $g2967($exp2995)})
{var $g3004 = $K("message"), $g2997 = $g1464.signal, $g2998 = $g1464.make, $g2999 = $g1464["<error>"];
$g2216($g2268, "%comma", function $g3005 ($__3000, $value3001)
{var $error3003 = $g2998($g2999, $g3004, "comma not inside backquote");
throw($error3003);
return false})}
var $g3006 = $g2998($g2999, $g3004, "unsupported name for call in dot")
{var $g3008 = $g1464["<string>"];
$g2216($g2268, ".", function $g3023 ($__3009, $value3010)
{var $calls3011 = $SL.call(arguments, 2);
return $g2311(function $g3024 ($value3012, $call3013)
{var $property3014 = $call3013[0], $rarguments3015 = $SL.call($call3013, 1), $g3019 = $g2145("%get-property"), $g3016 = $property3014, $g3020;
if ($T($g2156($g3016, $g3008)))
$g3020 = $property3014
else if ($T($g2156($g3016, $g2161)))
$g3020 = $g2186($property3014)
else {var $error3018 = $g3006;
throw($error3018);
$g3020 = false};
var $g3021 = [$g3019, $value3012, $g3020], $g3022 = [$g3021];
return $g2185($g3022, $rarguments3015)}, $value3010, $calls3011)})}
var $g3026 = $g2155("simplify_arguments", function $g3038 ($rarguments3027)
{var $g3028 = $g2285($rarguments3027), $required3029 = $g3028[0], $rest3030 = $g3028[1], $key3031 = $g3028[2], $required3033 = $g2321(function $g3039 ($argument3032)
{if ($T($g2156($argument3032, $g2157)))
{var $sequence3035 = $argument3032;
return $sequence3035[0]}
else return $argument3032}, $required3029), $g3036;
if ($T($rest3030))
$g3036 = $g2185([$g2305], $rest3030)
else $g3036 = [];
var $g3037;
if ($T($key3031))
$g3037 = $g2185([$g2306], $key3031)
else $g3037 = [];
return $g2185($required3033, $g3036, $g3037)}, false)
var trueQ = $g1464["true?"], $g3044 = $g1464[">"], $g3045 = $g1464["%keys"], $g3046 = $g2155("make_function_definer", function $g3103 ($macro_name3047, $definer_name3048)
{var $g3049 = $SL.call(arguments, 2), $g3050 = $g3045($g3049, {"type/existing?":false,
"record?":false}), $typesexistingq3051 = $g3050["type/existing?"], $recordq3052 = $g3050["record?"];
return function $g3104 ($env3053, $identifier3054, $rarguments3055)
{var $body3056 = $SL.call(arguments, 3), $g3057;
if ($T($g2194($identifier3054)))
{var $sequence3065 = $identifier3054, $g3092 = $sequence3065[1], $g3093 = $g2187($g3092);
$g3057 = [true, $g3093]}
else $g3057 = [false, $identifier3054];
var $setterq3058 = $g3057[0], $identifier3059 = $g3057[1], $g3060 = $g2156($identifier3059, $g2161), $value3067;
if ($T($g3060))
$value3067 = $g3060
else $value3067 = $setterq3058;
var $g3094 = !(trueQ($value3067));
if ($T($g3094))
{var $error3069 = $g2998($g2999, $g3004, $g2185($macro_name3047, ": ", "name not <var> or (setter <var>)"));
throw($error3069);
false};
var $g3095;
if ($T($typesexistingq3051))
{var $sequence3080 = $rarguments3055, $g3081 = $sequence3080, $g3082 = (($g3081 || false).length || 0), $g3083 = 0;
$g3095 = ($g3082 === $g3083)}
else $g3095 = false;
if ($T($g3095))
{var $error3085 = $g2998($g2999, $g3004, $g2185($macro_name3047, ": ", "method has no arguments"));
throw($error3085);
false};
var $simplified_arguments3061 = $g3026($rarguments3055), $method_definition3062 = $g2246($g2185([$g2145("method"), $simplified_arguments3061], $body3056), $env3053);
if ($T($recordq3052))
$g2216($env3053, "module", "functions", $g2186($identifier3059), $method_definition3062);
var $g3096 = $g2145("define"), $g3097 = [$g2145($definer_name3048), [$g2145("%native-name"), $g2186($identifier3059)], $method_definition3062, $setterq3058], $g3101;
if ($T($typesexistingq3051))
{var $sequence3087 = $rarguments3055, $head3063 = $sequence3087[0], $g3099;
if ($T($g2156($head3063, $g2157)))
{var $robject3089 = $head3063, $g3098 = (($robject3089 || false).length || 0);
$g3099 = $g3044($g3098, 1)}
else $g3099 = false;
var $g3100;
if ($T($g3099))
{var $sequence3091 = $head3063;
$g3100 = $sequence3091[1]}
else $g3100 = $g2145("<object>");
$g3101 = [$g3100, $identifier3059]}
else $g3101 = [];
var $g3102 = $g2185($g3097, $g3101);
return [$g3096, $identifier3059, $g3102]}}, false)
{var $g3130 = $K("type/existing?"), $g3131 = $K("record?"), trueQ = $g1464["true?"], $g3110 = $g1464.apply, $g3111 = [["define-function", "%make-function", $g3130, false, $g3131, true], ["define-method", "%make-method", $g3130, true]], $g3112, $g3113, $g3114 = [$g3111];
while ($T(true))
{var $g3115 = $g3112, $value3119;
if ($T($g3115))
$value3119 = $g3115
else $value3119 = $g2634($g2159, $g3114);
var $g3129 = !(trueQ($value3119));
if ($T($g3129))
{var $sequence3121 = $g3111, $rarguments3116 = $sequence3121[0];
(function $g3132 ($rarguments3117)
{var $sequence3123 = $rarguments3117, $g3126 = $sequence3123[0], $g3127 = $g3110($g3046, $rarguments3117);
return $g2216($g2268, $g3126, $g3127)})($rarguments3116);
var $sequence3125 = $g3111, $g3128 = $sequence3125.slice(1);
$g3111 = $g3128;
$g3114 = [$g3111]}
else break};
$g3113}
$g2216($g2268, "define-generic", function $g3136 ($__3133, $identifier3134, $rarguments3135)
{return [$g2145("define"), $identifier3134, [$g2145("%make-generic"), [$g2145("%native-name"), $g2186($identifier3134)]]]})
{var trueQ = $g1464["true?"];
$g2216($g2268, "define-class", function $g3209 ($__3142, $identifier3143, $superclass3144)
{var $properties3145 = $SL.call(arguments, 3), $robject3146 = [$g2145("%object")], $g3147 = $properties3145, $g3148, $g3149, $g3150 = [$g3147];
while ($T(true))
{var $g3151 = $g3148, $value3155;
if ($T($g3151))
$value3155 = $g3151
else $value3155 = $g2634($g2159, $g3150);
var $g3203 = !(trueQ($value3155));
if ($T($g3203))
{var $sequence3157 = $g3147, $property3152 = $sequence3157[0];
(function $g3210 ($property3153)
{if ($T($g2156($property3153, $g2157)))
{var $rarray3162 = $robject3146, $sequence3161 = $property3153, $g3198 = $sequence3161[0], $value3163 = $g2186($g3198);
$rarray3162.push($value3163);
$rarray3162;
var $rarray3168 = $robject3146, $g3199 = $g2145("method"), $g3200 = [], $sequence3167 = $property3153, $g3201 = $sequence3167[1], $value3169 = [$g3199, $g3200, $g3201];
$rarray3168.push($value3169);
return $rarray3168}
else {var $rarray3172 = $robject3146, $value3173 = $g2186($property3153);
$rarray3172.push($value3173);
$rarray3172;
var $rarray3176 = $robject3146, $value3177 = undefined;
$rarray3176.push($value3177);
return $rarray3176}})($property3152);
var $sequence3179 = $g3147, $g3202 = $sequence3179.slice(1);
$g3147 = $g3202;
$g3150 = [$g3147]}
else break};
$g3149;
var $g3204 = $g2145("define"), $g3205 = $g2145("%make-class"), $sequence3191 = $superclass3144, $g3192 = $sequence3191, $g3193 = (($g3192 || false).length || 0), $g3194 = 0, $value3195 = ($g3193 === $g3194), $g3206 = !(trueQ($value3195)), $g3207;
if ($T($g3206))
{var $sequence3197 = $superclass3144;
$g3207 = $sequence3197[0]}
else $g3207 = false;
var $g3208 = [$g3205, $g3207, $robject3146];
return [$g3204, $identifier3143, $g3208]})}
var $g3211 = $g2155("get_import_module_nameSoptions", function $g3220 ($rimport3212)
{var $g3217;
if ($T($g2156($rimport3212, $g2157)))
{var $sequence3214 = $rimport3212;
$g3217 = $sequence3214[0]}
else $g3217 = $rimport3212;
var $g3218 = $g2186($g3217), $g3219;
if ($T($g2156($rimport3212, $g2157)))
{var $sequence3216 = $rimport3212;
$g3219 = $sequence3216.slice(1)}
else $g3219 = [];
return [$g3218, $g3219]}, false)
{var $g3225, $g3226, $g3227;
$g2216($g2268, "define-module", function $g3244 ($env3228, $__3229)
{var $g3230 = $SL.call(arguments, 2), $g3231 = $g3045($g3230, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), $rimport3232 = $g3231["import"], $rexport3233 = $g3231["export"], $compile_time_import3234 = $g3231["compile-time-import"], $inline3235 = $g3231.inline;
$g2216($env3228, "module", "exports", $g2321($g2206, $rexport3233));
$g2244(function $g3245 ($rimport3236)
{var $g3237 = $g3211($rimport3236), $module_name3238 = $g3237[0], $options3239 = $g3237[1];
return $g3110($g3225, $env3228, $module_name3238, $options3239)}, $compile_time_import3234);
$g2216($env3228, "module", "inline", $g2321($g2206, $inline3235));
return $g2270($g2321(function $g3246 ($rimport3240)
{var $g3241 = $g3211($rimport3240), $module_name3242 = $g3241[0], $options3243 = $g3241[1];
$g3110($g3226, $g2235($env3228, "module"), $module_name3242, $options3243);
return $g3227($module_name3242, $env3228)}, $rimport3232))})}
$g3227 = $g2155("make_import_definition", function $g3250 ($module_name3247, $env3248)
{var $identifier3249 = $g2219();
$g2216($env3248, "import-identifiers", $module_name3247, $identifier3249);
return [$g2145("define"), $identifier3249, [[$g2145("%native"), "require"], $module_name3247]]}, false)
$g2216($g2268, "define-macro", function $g3255 ($env3251, $identifier3252, $rarguments3253)
{var $body3254 = $SL.call(arguments, 3);
return [$g2145("begin"), $g2185([$g2145("define-function"), $identifier3252, $g2185([$g2219()], $rarguments3253)], $body3254), [$g2145("set!"), [$g2145("%get-property"), $identifier3252, "%macro?"], true]]})
$g2216($g2268, "define-symbol-macro", function $g3260 ($env3256, $identifier3257, $rarguments3258)
{var $body3259 = $SL.call(arguments, 3);
return [$g2145("begin"), $g2185([$g2145("define-function"), $identifier3257, []], $body3259), [$g2145("set!"), [$g2145("%get-property"), $identifier3257, "%symbol-macro?"], true]]})
$g2216($g2268, "handler-case", function $g3277 ($__3264, $body3265)
{var $cases3266 = $SL.call(arguments, 2), $condition_var3267 = $g2219();
return [$g2145("%try"), $body3265, $condition_var3267, $g2185([$g2145("cond")], $g2321(function $g3278 ($rcase3268)
{var $g3269 = $rcase3268[0], $type3270 = $g3269[0], $g3271 = $SL.call($g3269, 1), $g3272 = $g3045($g3271, {condition:false}), $condition3273 = $g3272.condition, $body3274 = $SL.call($rcase3268, 1), $g3275 = [[$g2145("instance?"), $condition_var3267, $type3270]], $g3276;
if ($T($condition3273))
$g3276 = [$g2185([$g2145("bind"), [[$condition3273, $condition_var3267]]], $body3274)]
else $g3276 = $body3274;
return $g2185($g3275, $g3276)}, $cases3266))]})
var $g3279, $g3280 = $g1464.identity, $g3281 = $g2155("lift_defines", function $g3284 ($exp3282, $env3283)
{return $g3279($exp3282, $env3283, $g3280)}, false)
{var $g3290, $g3291 = $g1464["has?"], $g3292;
$g3279 = $g2155("lift_define", function $g3341 ($exp3293, $env3294, $k3295)
{if ($T($g2162($exp3293)))
{var $sequence3332 = $exp3293, $g3337 = $sequence3332[0], $g3296 = $g2186($g3337);
if ($T($g2190($g3296, "%bind")))
{var $__3297 = $exp3293[0], $g3298 = $exp3293[1], $rvar3299 = $g3298[0], $value3300 = $g3298[1], $body3301 = $exp3293[2];
return $g3279($value3300, $env3294, function $g3342 ($lvalue3302, $env3303)
{return $g3279($body3301, $env3303, function $g3343 ($lbody3304, $env3305)
{return $k3295([$g2145("%bind"), [$rvar3299, $lvalue3302], $lbody3304], $env3305)})})}
else if ($T($g2190($g3296, "%try")))
{var $m3306 = $exp3293[0], $e13307 = $exp3293[1], $v3308 = $exp3293[2], $e23309 = $exp3293[3];
return $g3290([$e13307, $e23309], $env3294, function $g3344 ($let3310, $env3311)
{var $le13312 = $let3310[0], $le23313 = $let3310[1];
return $k3295([$m3306, $le13312, $v3308, $le23313], $env3311)})}
else {var $g3314 = $g2190($g3296, "%method"), $g3338;
if ($T($g3314))
$g3338 = $g3314
else $g3338 = $g2190($g3296, "%set");
if ($T($g3338))
{var $m3315 = $exp3293[0], $e13316 = $exp3293[1], $e23317 = $exp3293[2];
return $g3279($e23317, $env3294, function $g3345 ($le23318, $env3319)
{return $k3295([$m3315, $e13316, $le23318], $env3319)})}
else {var $g3320 = $g2190($g3296, "%begin"), $g3339;
if ($T($g3320))
$g3339 = $g3320
else {var $g3321 = $g2190($g3296, "%if");
if ($T($g3321))
$g3339 = $g3321
else $g3339 = $g2190($g3296, "%while")};
if ($T($g3339))
{var $m3322 = $exp3293[0], $et3323 = $SL.call($exp3293, 1);
return $g3290($et3323, $env3294, function $g3346 ($let3324, $env3325)
{return $k3295($g2185([$m3322], $let3324), $env3325)})}
else if ($T($g2190($g3296, "define")))
{var $__3326 = $exp3293[0], $rvar3327 = $exp3293[1], $value3328 = $exp3293[2], $exportq3329 = $exp3293[3], $name3330 = $g2186($rvar3327), $robject3335 = $g2235($env3294, "defined?"), $property3336 = $name3330, $g3340 = $HP.call($robject3335,$property3336);
if ($T($g3340))
return $k3295([$g2145("%set"), $rvar3327, $value3328], $env3294)
else {$g2216($env3294, "defined?", $name3330, true);
return [$g2145("%begin"), [$g2145("%define"), $rvar3327], $k3295([$g2145("%set"), $rvar3327, $value3328], $env3294)]}}
else return $g3292($exp3293, $env3294, $k3295)}}}
else return $k3295($exp3293, $env3294)}, false)}
$g3290 = $g2155("lift_defineT", function $g3365 ($expt3347, $env3348, $k3349)
{var $sequence3360 = $expt3347, $g3361 = $sequence3360, $g3362 = (($g3361 || false).length || 0), $g3363 = 0, $g3364 = ($g3362 === $g3363);
if ($T($g3364))
return $k3349([], $env3348)
else return $g3292($expt3347, $env3348, $k3349)}, false)
$g3292 = $g2155("lift_defineTT", function $g3381 ($exp3366, $env3367, $k3368)
{var $sequence3374 = $exp3366, $g3377 = $sequence3374[0], $g3380 = function $g3382 ($t3369, $env3370)
{var $sequence3376 = $exp3366, $g3378 = $sequence3376.slice(1), $g3379 = function $g3383 ($tt3371, $env3372)
{return $k3368($g2185([$t3369], $tt3371), $env3372)};
return $g3290($g3378, $env3370, $g3379)};
return $g3279($g3377, $env3367, $g3380)}, false)
var $g3384 = $g2136()
$g2216($g3384, "next-method", function $g3386 ($__3385)
{return [$g2145("%next-method"), $g2145("%this-method")]})
var trueQ = $g1464["true?"], $g3388 = $g2155("find_macro_definition", function $g3420 ($form3389, $env3390)
{var $g3391 = $form3389;
if ($T($g2156($g3391, $g2157)))
{var $sequence3404 = $form3389, $g3405 = $sequence3404, $g3406 = (($g3405 || false).length || 0), $g3407 = 0, $g3416 = ($g3406 === $g3407);
if ($T($g3416))
{var $error3409 = "Empty form";
throw($error3409);
false};
var $sequence3411 = $form3389, $g3417 = $sequence3411[0], $name3392 = $g2186($g3417), $value3413 = $g2235($env3390, "bound?", $name3392), $g3418 = !(trueQ($value3413));
if ($T($g3418))
return $env3390.macros[$name3392]}
else if ($T($g2156($g3391, $g2161)))
{var $name3393 = $g2186($form3389), $value3415 = $g2235($env3390, "bound?", $name3393), $g3419 = !(trueQ($value3415));
if ($T($g3419))
return $env3390["symbol-macros"][$name3393]}}, false)
var $g3422 = $g2155("macroexpand_1", function $g3430 ($form3423, $env3424)
{var $g3425 = $g3388($form3423, $env3424);
if ($T($g3425))
{var $macro3426 = $g3425, $g3429;
if ($T($g2156($form3423, $g2157)))
{var $sequence3428 = $form3423;
$g3429 = $sequence3428.slice(1)}
else $g3429 = $form3423;
return $g3110($macro3426, $env3424, $g3429)}
else return $form3423}, false)
var trueQ = $g1464["true?"], $g3431 = $g2155("macroexpand", function $g3439 ($form3432, $env3433)
{var $doneq3434;
while ($T(true))
{var $value3437 = $doneq3434, $g3438 = !(trueQ($value3437));
if ($T($g3438))
{var $expanded3435 = $g3422($form3432, $env3433);
$doneq3434 = $g2190($expanded3435, $form3432);
$form3432 = $expanded3435}
else break};
return $form3432}, false)
$g2246 = $g2155("macroexpand_all", function $g3450 ($form3442, $env3443)
{var $g3444 = $form3442;
if ($T($g2156($g3444, $g2157)))
if ($T($g3388($form3442, $env3443)))
return $g2246($g3431($form3442, $env3443), $env3443)
else {var $g3445 = $g2236($form3442, $env3443);
if ($T($g3445))
{var $expander3446 = $g3445, $sequence3448 = $form3442, $g3449 = $sequence3448.slice(1);
return $g3110($expander3446, $env3443, $g3449)}
else return $g2321($g2193($g2246, $env3443), $form3442)}
else if ($T($g2156($g3444, $g2161)))
if ($T($g3388($form3442, $env3443)))
return $g2246($g3431($form3442, $env3443), $env3443)
else return $form3442
else return $form3442}, false)
var $g3452 = $g2155("find_moduleSimport_name", function $g3462 ($definition_name3453, $env3454)
{return $g2634(function $g3463 ($rimport3455)
{var $module3456 = $rimport3455[0], $names3457 = $rimport3455[1];
return $g2634(function $g3464 ($name3458)
{var $g3459;
if ($T($g2156($name3458, $g2157)))
$g3459 = $name3458
else $g3459 = [$name3458, $name3458];
var $import_name3460 = $g3459[0], $new_name3461 = $g3459[1];
if ($T($g2190($definition_name3453, $new_name3461)))
return [$module3456, $import_name3460]}, $names3457)}, $g2235($env3454, "module", "imports"))}, false)
var $g3465 = $g2155("find_import_identifier", function $g3468 ($module3466, $env3467)
{return $g2235($env3467, "import-identifiers", $g2235($module3466, "name"))}, false)
var $g3469 = $g1464["set-subtract!"], $g3470, $g3471 = $g1464["as-set"], $g3472 = $g1464["object-properties"], $g3473 = $g2155("define_free_variables", function $g3501 ($exp3474, $env3475)
{var $variables3476 = $g3469($g3469($g3470($exp3474), $g3471($g2321($g2145, $g3472($g2235($env3475, "defined?"))))), $g2146), $sequence3493 = $variables3476, $g3494 = $sequence3493, $g3495 = (($g3494 || false).length || 0), $g3496 = 0, $g3497 = ($g3495 === $g3496);
if ($T($g3497))
return $exp3474
else return $g2185([$g2145("%begin")], $g2321(function $g3502 ($variable3477)
{var $name3478 = $g2186($variable3477);
$g2216($env3475, "defined?", $name3478, true);
var $g3498 = [[$g2145("%define"), $variable3477]], $modulesimport_name3479 = $g3452($name3478, $env3475), $g3499;
if ($T($modulesimport_name3479))
{var $module3480 = $modulesimport_name3479[0], $import_name3481 = $modulesimport_name3479[1], $import_identifier3482 = $g3465($module3480, $env3475);
$g3499 = [[$g2145("%set"), $variable3477, [$g2145("%get-property"), $import_identifier3482, $import_name3481]]]}
else $g3499 = [];
var $g3500 = $g2185($g3498, $g3499);
return $g2270($g3500)}, $variables3476), [$exp3474])}, false)
var trueQ = $g1464["true?"], $g3503 = $g1464.choose, $g3504 = $g2155("define_free_variables2", function $g3541 ($exp3505, $env3506)
{var $free3507 = $g3469($g3470($exp3505), $g2146), $variables3509 = $g3503(function $g3542 ($variable3508)
{var $robject3520 = $g2235($env3506, "definition-names"), $property3521 = $g2186($variable3508), $value3522 = $HP.call($robject3520,$property3521);
return !(trueQ($value3522))}, $free3507), $sequence3533 = $variables3509, $g3534 = $sequence3533, $g3535 = (($g3534 || false).length || 0), $g3536 = 0, $g3537 = ($g3535 === $g3536);
if ($T($g3537))
return $exp3505
else return $g2185([$g2145("%begin")], $g2321(function $g3543 ($variable3510)
{var $name3511 = $g2186($variable3510);
$g2216($env3506, "defined?", $name3511, true);
var $g3538 = [[$g2145("%define"), $variable3510]], $modulesimport_name3512 = $g3452($name3511, $env3506), $g3539;
if ($T($modulesimport_name3512))
{var $module3513 = $modulesimport_name3512[0], $import_name3514 = $modulesimport_name3512[1], $old_import_identifier3515 = $g3465($module3513, $env3506), $import_identifier3516 = $g2235($env3506, "new-identifiers", $g2186($old_import_identifier3515));
$g3539 = [[$g2145("%set"), $variable3510, [$g2145("%get-property"), $import_identifier3516, $import_name3514]]]}
else $g3539 = [];
var $g3540 = $g2185($g3538, $g3539);
return $g2270($g3540)}, $variables3509), [$exp3505])}, false)
{var trueQ = $g1464["true?"], $g3559 = $g1464["set-union!"];
$g3470 = $g2155("find_free_variables", function $g3653 ($exp3560)
{var $g3634;
if ($T($g2156($exp3560, $g2157)))
{var $sequence3603 = $exp3560, $g3604 = $sequence3603, $g3605 = (($g3604 || false).length || 0), $g3606 = 0, $value3607 = ($g3605 === $g3606);
$g3634 = !(trueQ($value3607))}
else $g3634 = false;
if ($T($g3634))
{var $sequence3609 = $exp3560, $head3561 = $sequence3609[0], $name3562;
if ($T($g2156($head3561, $g2161)))
$name3562 = $g2186($head3561)
else $name3562 = false;
var $g3563 = $name3562;
if ($T($g2190($g3563, "%method")))
{var $__3564 = $exp3560[0], $rarguments3565 = $exp3560[1], $body3566 = $exp3560[2];
return $g3469($g3470($body3566), $g3471($rarguments3565))}
else if ($T($g2190($g3563, "%bind")))
{var $__3567 = $exp3560[0], $g3568 = $exp3560[1], $rvar3569 = $g3568[0], $value3570 = $g3568[1], $body3571 = $exp3560[2];
return $g3559($g3469($g3470($body3571), $g3471([$rvar3569])), $g3470($value3570))}
else if ($T($g2190($g3563, "%begin")))
{var $definitions3572 = [], $g3639 = function $g3654 ($result3573, $e3574)
{var $g3637;
if ($T($g2162($e3574)))
{var $sequence3611 = $e3574, $g3635 = $sequence3611[0], $g3636 = $g2145("%define");
$g3637 = $g2190($g3635, $g3636)}
else $g3637 = false;
var $g3638;
if ($T($g3637))
{var $rarray3616 = $definitions3572, $sequence3615 = $e3574, $value3617 = $sequence3615[1];
$rarray3616.push($value3617);
$rarray3616;
$g3638 = []}
else $g3638 = $g3470($e3574);
return $g2185($result3573, $g3638)}, $g3640 = [], $sequence3619 = $exp3560, $g3641 = $sequence3619.slice(1), $g3642 = $g2311($g3639, $g3640, $g3641), $g3643 = $g3471($g3642), $g3644 = $g3471($definitions3572);
return $g3469($g3643, $g3644)}
else if ($T($g2190($g3563, "%try")))
{var $__3575 = $exp3560[0], $e13576 = $exp3560[1], $v3577 = $exp3560[2], $e23578 = $exp3560[3];
return $g3469($g3559($g3471($g3470($e13576)), $g3471($g3470($e23578))), $g3471([$v3577]))}
else {var $g3579 = $g2190($g3563, "%set"), $g3645;
if ($T($g3579))
$g3645 = $g3579
else {var $g3580 = $g2190($g3563, "%if");
if ($T($g3580))
$g3645 = $g3580
else {var $g3581 = $g2190($g3563, "%while");
if ($T($g3581))
$g3645 = $g3581
else {var $g3582 = $g2190($g3563, "%array");
if ($T($g3582))
$g3645 = $g3582
else {var $g3583 = $g2190($g3563, "%object");
if ($T($g3583))
$g3645 = $g3583
else {var $g3584 = $g2190($g3563, "%infix");
if ($T($g3584))
$g3645 = $g3584
else {var $g3585 = $g2190($g3563, "%get-property");
if ($T($g3585))
$g3645 = $g3585
else {var $g3586 = $g2190($g3563, "%native-call");
if ($T($g3586))
$g3645 = $g3586
else {var $g3587 = $g2190($g3563, "%plus");
if ($T($g3587))
$g3645 = $g3587
else {var $g3588 = $g2190($g3563, "%minus");
if ($T($g3588))
$g3645 = $g3588
else {var $g3589 = $g2190($g3563, "%times");
if ($T($g3589))
$g3645 = $g3589
else $g3645 = $g2190($g3563, "%divide")}}}}}}}}}};
if ($T($g3645))
{var $g3646 = [], $sequence3621 = $exp3560, $g3647 = $sequence3621.slice(1), $g3648 = $g2321($g3470, $g3647), $g3649 = $g2311($g2185, $g3646, $g3648);
return $g3471($g3649)}
else {var $g3590 = $g2190($g3563, "%native"), $g3650;
if ($T($g3590))
$g3650 = $g3590
else {var $g3591 = $g2190($g3563, "%native-name");
if ($T($g3591))
$g3650 = $g3591
else $g3650 = $g2190($g3563, "%define")};
if ($T($g3650))
return $g3471([])
else {var $rfunction3630 = $g3559, $values3631 = $g2321($g3470, $exp3560), $g3632 = $values3631, $g3651 = $g3632[0], $g3633 = $values3631, $g3652 = $g3633.slice(1);
return $g2311($rfunction3630, $g3651, $g3652)}}}}
else if ($T($g2156($exp3560, $g2161)))
return $g3471([$exp3560])
else return $g3471([])}, false)}
var trueQ = $g1464["true?"], $g3655 = $g2155("ensure_naming_structure", function $g3666 ($env3656, $module_name3657, $name3658)
{var $value3661 = $g2235($env3656, "identifiers", $module_name3657), $g3664 = !(trueQ($value3661));
if ($T($g3664))
$g2216($env3656, "identifiers", $module_name3657, $g2136());
var $module_renamings3659 = $g2235($env3656, "identifiers", $module_name3657), $value3663 = $g2235($module_renamings3659, $name3658), $g3665 = !(trueQ($value3663));
if ($T($g3665))
$g2216($module_renamings3659, $name3658, []);
return $env3656}, false)
var $g3668 = $g2155("get_module_nameSname", function $g3673 ($identifier3669)
{var $g3670 = $g2235($identifier3669, "module"), $g3671;
if ($T($g3670))
$g3671 = $g3670
else $g3671 = "";
var $g3672 = $g2186($identifier3669);
return [$g3671, $g3672]}, false)
var trueQ = $g1464["true?"], $g3675 = $g1464.push, $g3676 = $g2155("rename_identifiers", function $g3692 ($identifiers3677, $env3678)
{return $g2321(function $g3693 ($identifier3679)
{var $g3680 = $g3668($identifier3679), $module_name3681 = $g3680[0], $name3682 = $g3680[1], $value3685 = $g2235($identifier3679, "generated?"), $g3690 = !(trueQ($value3685)), $g3691;
if ($T($g3690))
$g3691 = $name3682
else $g3691 = false;
var $new_identifier3683 = $g2219($g3691);
$g3655($env3678, $module_name3681, $name3682);
var $rarray3688 = $g2235($env3678, "identifiers", $module_name3681, $name3682), $value3689 = $new_identifier3683;
$rarray3688.unshift($value3689);
$rarray3688;
return $new_identifier3683}, $identifiers3677)}, false)
var trueQ = $g1464["true?"], $g3700 = $g1464.pop, $g3701 = $g2155("restore_identifiers", function $g3724 ($identifiers3702, $env3703)
{var $g3704 = $identifiers3702, $g3705, $g3706, $g3707 = [$g3704];
while ($T(true))
{var $g3708 = $g3705, $value3715;
if ($T($g3708))
$value3715 = $g3708
else $value3715 = $g2634($g2159, $g3707);
var $g3723 = !(trueQ($value3715));
if ($T($g3723))
{var $sequence3717 = $g3704, $identifier3709 = $sequence3717[0];
(function $g3725 ($identifier3710)
{var $g3711 = $g3668($identifier3710), $module_name3712 = $g3711[0], $name3713 = $g3711[1], $rarray3719 = $g2235($env3703, "identifiers", $module_name3712, $name3713);
return $rarray3719.shift()})($identifier3709);
var $sequence3721 = $g3704, $g3722 = $sequence3721.slice(1);
$g3704 = $g3722;
$g3707 = [$g3704]}
else break};
return $g3706}, false)
var $g3726 = $g2136()
var $g3729 = $g2155("find_identifier", function $g3739 ($identifier3730, $env3731)
{var $g3732 = $g3668($identifier3730), $module_name3733 = $g3732[0], $name3734 = $g3732[1], $g3735 = $g2235($env3731, "identifiers", $module_name3733, $name3734);
if ($T($g3735))
{var $renamings3736 = $g3735, $sequence3738 = $renamings3736;
return $sequence3738[0]}
else return $g3726}, false)
var $g3746 = $g1464["second-setter"], $g3747 = $g2155("alpha_convert", function $g3793 ($form3748, $env3749)
{var $g3750 = $form3748;
if ($T($g2156($g3750, $g2157)))
{var $sequence3783 = $form3748, $g3792 = $sequence3783[0], $g3751 = $g2186($g3792);
if ($T($g2190($g3751, "%method")))
{var $__3752 = $form3748[0], $rarguments3753 = $form3748[1], $body3754 = $form3748[2], $new_arguments3755 = $g3676($rarguments3753, $env3749), $new_body3756 = $g3747($body3754, $env3749), $result3757 = [$__3752, $new_arguments3755, $new_body3756];
$g3701($rarguments3753, $env3749);
return $result3757}
else if ($T($g2190($g3751, "%bind")))
{var $__3758 = $form3748[0], $g3759 = $form3748[1], $rvar3760 = $g3759[0], $value3761 = $g3759[1], $body3762 = $form3748[2], $new_value3763 = $g3747($value3761, $env3749), $g3764 = $g3676([$rvar3760], $env3749), $new_var3765 = $g3764[0], $result3766 = [$g2145("%bind"), [$new_var3765, $new_value3763], $g3747($body3762, $env3749)];
$g3701([$rvar3760], $env3749);
return $result3766}
else if ($T($g2190($g3751, "%try")))
{var $__3767 = $form3748[0], $body3768 = $form3748[1], $rvar3769 = $form3748[2], $rcatch3770 = $form3748[3], $new_body3771 = $g3747($body3768, $env3749), $g3772 = $g3676([$rvar3769], $env3749), $new_var3773 = $g3772[0], $result3774 = [$g2145("%try"), $new_body3771, $new_var3773, $g3747($rcatch3770, $env3749)];
$g3701([$rvar3769], $env3749);
return $result3774}
else if ($T($g2190($g3751, "%define")))
{var $__3775 = $form3748[0], $identifier3776 = $form3748[1], $g3777 = $g3668($identifier3776), $module_name3778 = $g3777[0], $name3779 = $g3777[1], $new_identifier3780 = $g2219();
$g3655($env3749, $module_name3778, $name3779);
var $rarray3786 = $g2235($env3749, "identifiers", $module_name3778, $name3779), $value3787 = $new_identifier3780;
$rarray3786.push($value3787);
$rarray3786;
$g2216($env3749, "definition-names", $g2186($new_identifier3780), $name3779);
$g2216($env3749, "new-identifiers", $name3779, $new_identifier3780);
var $rarray3790 = $form3748, $value3791 = $new_identifier3780;
$rarray3790[1] = $value3791;
return $form3748}
else return $g2321($g2193($g3747, $env3749), $form3748)}
else if ($T($g2156($g3750, $g2161)))
{var $value3781 = $g3729($form3748, $env3749);
if ($T($g2190($value3781, $g3726)))
return $form3748
else return $value3781}
else return $form3748}, false)
var trueQ = $g1464["true?"], dec = $g1464.dec, $g3812 = $g1464["last-setter"], $g3813 = $g1464.last, $g3814, $g3815, $g3816 = $g2155("inline", function $g3927 ($form3817, $env3818)
{var $g3910;
if ($T($g2156($form3817, $g2157)))
{var $sequence3861 = $form3817, $g3862 = $sequence3861, $g3863 = (($g3862 || false).length || 0), $g3864 = 0, $value3865 = ($g3863 === $g3864);
$g3910 = !(trueQ($value3865))}
else $g3910 = false;
if ($T($g3910))
{var $sequence3867 = $form3817, $g3911 = $sequence3867[0], $g3912 = $g2156($g3911, $g2161);
if ($T($g3912))
{var $sequence3869 = $form3817, $g3913 = $sequence3869[0], $g3819 = $g2186($g3913), $g3820 = $g2190($g3819, "%method"), $g3914;
if ($T($g3820))
$g3914 = $g3820
else $g3914 = $g2190($g3819, "%set");
if ($T($g3914))
{var $rarray3882 = $form3817, $rarray3879 = $form3817, $g3880 = $rarray3879, $g3881 = (($g3880 || false).length || 0), $g3915 = ($g3881 - 1), $g3916 = $rarray3879[$g3915], $value3883 = $g3816($g3916, $env3818);
$rarray3882[dec($g2191($rarray3882), 1)] = $value3883;
return $form3817}
else if ($T($g2190($g3819, "%bind")))
{var $__3821 = $form3817[0], $binding3822 = $form3817[1], $body3823 = $form3817[2], $rarray3888 = $binding3822, $sequence3887 = $binding3822, $g3917 = $sequence3887[1], $value3889 = $g3816($g3917, $env3818);
$rarray3888[1] = $value3889;
var $rarray3892 = $form3817, $value3893 = $g3816($body3823, $env3818);
$rarray3892[dec($g2191($rarray3892), 1)] = $value3893;
return $form3817}
else if ($T($g2190($g3819, "%try")))
{var $__3824 = $form3817[0], $body3825 = $form3817[1], $rvar3826 = $form3817[2], $rcatch3827 = $form3817[3], $rarray3896 = $form3817, $value3897 = $g3816($body3825, $env3818);
$rarray3896[1] = $value3897;
var $rarray3900 = $form3817, $value3901 = $g3816($rcatch3827, $env3818);
$rarray3900[dec($g2191($rarray3900), 1)] = $value3901;
return $form3817}
else {var $g3828 = $g2190($g3819, "%begin"), $g3918;
if ($T($g3828))
$g3918 = $g3828
else {var $g3829 = $g2190($g3819, "%if");
if ($T($g3829))
$g3918 = $g3829
else {var $g3830 = $g2190($g3819, "%while");
if ($T($g3830))
$g3918 = $g3830
else {var $g3831 = $g2190($g3819, "%array");
if ($T($g3831))
$g3918 = $g3831
else {var $g3832 = $g2190($g3819, "%object");
if ($T($g3832))
$g3918 = $g3832
else {var $g3833 = $g2190($g3819, "%get-property");
if ($T($g3833))
$g3918 = $g3833
else {var $g3834 = $g2190($g3819, "%native-call");
if ($T($g3834))
$g3918 = $g3834
else {var $g3835 = $g2190($g3819, "%infix");
if ($T($g3835))
$g3918 = $g3835
else {var $g3836 = $g2190($g3819, "%plus");
if ($T($g3836))
$g3918 = $g3836
else {var $g3837 = $g2190($g3819, "%minus");
if ($T($g3837))
$g3918 = $g3837
else {var $g3838 = $g2190($g3819, "%times");
if ($T($g3838))
$g3918 = $g3838
else $g3918 = $g2190($g3819, "%divide")}}}}}}}}}};
if ($T($g3918))
{var $sequence3903 = $form3817, $g3919 = $sequence3903[0], $g3920 = [$g3919], $g3921 = $g2193($g3816, $env3818), $sequence3905 = $form3817, $g3922 = $sequence3905.slice(1), $g3923 = $g2321($g3921, $g3922);
return $g2185($g3920, $g3923)}
else {var $g3839 = $g2190($g3819, "%native"), $g3924;
if ($T($g3839))
$g3924 = $g3839
else {var $g3840 = $g2190($g3819, "%native-name");
if ($T($g3840))
$g3924 = $g3840
else $g3924 = $g2190($g3819, "%define")};
if ($T($g3924))
return $form3817
else {var $sequence3907 = $form3817, $g3925 = $sequence3907[0], $name3841 = $g2186($g3925), $g3842 = $g2235($env3818, "definition-names", $name3841), $definition_name3843;
if ($T($g3842))
$definition_name3843 = $g3842
else $definition_name3843 = $name3841;
var $g3844;
if ($T($g3815($g2235($env3818, "module"), $definition_name3843)))
$g3844 = $g2235($env3818, "module", "functions", $definition_name3843)
else $g3844 = false;
var $definition3849;
if ($T($g3844))
$definition3849 = $g3844
else {var $g3845 = $g3452($definition_name3843, $env3818);
if ($T($g3845))
{var $modulesimport_name3846 = $g3845, $module3847 = $modulesimport_name3846[0], $import_name3848 = $modulesimport_name3846[1];
if ($T($g3815($module3847, $import_name3848)))
$definition3849 = $g2235($module3847, "functions", $import_name3848)
else $definition3849 = false}
else $definition3849 = false};
if ($T($definition3849))
{var $sequence3909 = $form3817, $g3926 = $sequence3909.slice(1);
return $g3814($definition3849, $g3926, $env3818)}
else return $g2321($g2193($g3816, $env3818), $form3817)}}}}
else return $g2321($g2193($g3816, $env3818), $form3817)}
else return $form3817}, false)
$g3815 = $g2155("inlineQ", function $g3930 ($module3928, $name3929)
{return $g2634($g2245($g2190, $name3929), $g2235($module3928, "inline"))}, false)
{var trueQ = $g1464["true?"], $g3933 = $g1464[">="];
$g3814 = $g2155("inline_definition", function $g3963 ($definition3934, $values3935, $env3936)
{var $__3937 = $definition3934[0], $rarguments3938 = $definition3934[1], $body3939 = $definition3934[2], $body3942 = $g2311(function $g3964 ($body3940, $argument3941)
{return [$g2145("%bind"), [$argument3941, $argument3941], $body3940]}, $body3939, $g2435($rarguments3938)), $inlined3943 = $g3816($body3942, $env3936), $prepared3944 = $g3747($inlined3943, $env3936), $robject3955 = $rarguments3938, $g3945 = (($robject3955 || false).length || 0), $i3946 = 0;
while ($T(true))
{var $value3957 = $g3933($i3946, $g3945), $g3962 = !(trueQ($value3957));
if ($T($g3962))
{(function $g3965 ($i3947)
{var $argument3948 = $g2283($rarguments3938, $i3947), $value3949 = $g2283($values3935, $i3947), $g3950 = $g3668($argument3948), $module_name3951 = $g3950[0], $name3952 = $g3950[1];
$g3655($env3936, $module_name3951, $name3952);
var $rarray3960 = $g2235($env3936, "identifiers", $module_name3951, $name3952), $value3961;
if ($T($value3949))
$value3961 = $g3816($value3949, $env3936)
else $value3961 = [$g2145("%native"), "undefined"];
$rarray3960.unshift($value3961);
return $rarray3960})($i3946);
$i3946 = ($i3946 + 1)}
else break};
false;
var $result3953 = $g3747($body3942, $env3936);
$g3701($rarguments3938, $env3936);
return $result3953}, false)}
var $g3966 = $g1464["<number>"], $g3967 = $g1464["<boolean>"], $g3968 = $g1464["<keyword>"], $g3969 = $g2155("atomicQ", function $g3971 ($expression3970)
{return $g2634($g2245($g2156, $expression3970), [$g3966, $g3967, $g3008, $g2161, $g3968])}, false)
var $g3972, $g3973 = $g2155("normalize_term", function $g3975 ($expression3974)
{return $g3972($expression3974, $g3280)}, false)
{var trueQ = $g1464["true?"], $g3978, $g3979, $g3980;
$g3972 = $g2155("normalize", function $g4049 ($exp3981, $k3982)
{var $g4045;
if ($T($g2156($exp3981, $g2157)))
{var $sequence4024 = $exp3981, $g4025 = $sequence4024, $g4026 = (($g4025 || false).length || 0), $g4027 = 0, $value4028 = ($g4026 === $g4027);
$g4045 = !(trueQ($value4028))}
else $g4045 = false;
if ($T($g4045))
{var $sequence4030 = $exp3981, $g4046 = $sequence4030[0], $g3983 = $g2186($g4046);
if ($T($g2190($g3983, "%method")))
{var $__3984 = $exp3981[0], $rarguments3985 = $exp3981[1], $body3986 = $exp3981[2];
return $k3982([$g2145("%method"), $rarguments3985, $g3973($body3986)])}
else if ($T($g2190($g3983, "%begin")))
{var $__3987 = $exp3981[0], $exp13988 = $exp3981[1], $et3989 = $SL.call($exp3981, 2), $sequence4041 = $et3989, $g4042 = $sequence4041, $g4043 = (($g4042 || false).length || 0), $g4044 = 0, $g4047 = ($g4043 === $g4044);
if ($T($g4047))
return $g3972($exp13988, $k3982)
else return $g3972($exp13988, function $g4050 ($aexp13990)
{return [$g2145("%begin"), $aexp13990, $g3972($g2185([$g2145("%begin")], $et3989), $k3982)]})}
else if ($T($g2190($g3983, "%bind")))
{var $__3991 = $exp3981[0], $g3992 = $exp3981[1], $rvar3993 = $g3992[0], $value3994 = $g3992[1], $body3995 = $exp3981[2];
return $g3972($value3994, function $g4051 ($avalue3996)
{return [$g2145("%bind"), [$rvar3993, $avalue3996], $g3972($body3995, $k3982)]})}
else if ($T($g2190($g3983, "%if")))
{var $__3997 = $exp3981[0], $test3998 = $exp3981[1], $then3999 = $exp3981[2], $relse4000 = $exp3981[3];
return $g3978($test3998, function $g4052 ($atest4001)
{return $k3982([$g2145("%if"), $atest4001, $g3973($then3999), $g3973($relse4000)])})}
else if ($T($g2190($g3983, "%while")))
{var $__4002 = $exp3981[0], $test4003 = $exp3981[1], $body4004 = $exp3981[2], $g4048;
if ($T($g3979($test4003)))
$g4048 = [$g2145("%while"), true, [$g2145("%begin"), $g3973([$g2145("%if"), $test4003, $g3973($body4004), [$g2145("%native"), "break"], false])]]
else $g4048 = [$g2145("%while"), $g3973($test4003), $g3973($body4004)];
return $k3982($g4048)}
else if ($T($g2190($g3983, "%try")))
{var $__4005 = $exp3981[0], $body4006 = $exp3981[1], $rvar4007 = $exp3981[2], $rcatch4008 = $exp3981[3];
return $k3982([$g2145("%try"), $g3973($body4006), $rvar4007, $g3973($rcatch4008)])}
else if ($T($g2190($g3983, "%set")))
{var $__4009 = $exp3981[0], $rvar4010 = $exp3981[1], $value4011 = $exp3981[2];
return $g3978($value4011, function $g4053 ($avalue4012)
{return $k3982([$g2145("%set"), $rvar4010, $avalue4012])})}
else if ($T($g3979($exp3981)))
return $g3980($exp3981, $k3982)
else return $k3982($g2321($g3973, $exp3981))}
else return $k3982($exp3981)}, false)}
{var $g4054;
$g3978 = $g2155("normalize_value", function $g4058 ($exp4055, $k4056)
{if ($T($g3979($exp4055)))
return $g4054($exp4055, $k4056)
else {var $g4057;
if ($T($g2156($exp4055, $g2157)))
$g4057 = $g2321($g3973, $exp4055)
else $g4057 = $exp4055;
return $k4056($g4057)}}, false)}
{var trueQ = $g1464["true?"];
$g3979 = $g2155("contains_statementsQ", function $g4103 ($exp4064)
{var $g4098;
if ($T($g2156($exp4064, $g2157)))
{var $sequence4081 = $exp4064, $g4082 = $sequence4081, $g4083 = (($g4082 || false).length || 0), $g4084 = 0, $value4085 = ($g4083 === $g4084);
$g4098 = !(trueQ($value4085))}
else $g4098 = false;
if ($T($g4098))
{var $sequence4087 = $exp4064, $g4099 = $sequence4087[0], $g4065 = $g2186($g4099), $g4066 = $g2190($g4065, "%begin"), $g4100;
if ($T($g4066))
$g4100 = $g4066
else {var $g4067 = $g2190($g4065, "%if");
if ($T($g4067))
$g4100 = $g4067
else {var $g4068 = $g2190($g4065, "%while");
if ($T($g4068))
$g4100 = $g4068
else {var $g4069 = $g2190($g4065, "%bind");
if ($T($g4069))
$g4100 = $g4069
else $g4100 = $g2190($g4065, "%try")}}};
if ($T($g4100))
return true
else if ($T($g2190($g4065, "%set")))
{var $rarray4095 = $exp4064, $g4096 = $rarray4095, $g4097 = (($g4096 || false).length || 0), $g4101 = ($g4097 - 1), $g4102 = $rarray4095[$g4101];
return $g3979($g4102)}
else if ($T($g2190($g4065, "%method")))
return false
else return $g2634($g3979, $exp4064)}}, false)}
$g4054 = $g2155("normalizeT", function $g4108 ($exp4104, $k4105)
{return $g3972($exp4104, function $g4109 ($aexp4106)
{if ($T($g3969($aexp4106)))
return $k4105($aexp4106)
else {var $t4107 = $g2219();
return [$g2145("%bind"), [$t4107, $aexp4106], $k4105($t4107)]}})}, false)
var $g4110 = $g2155("normalizeTT", function $g4128 ($expt4111, $k4112)
{var $sequence4123 = $expt4111, $g4124 = $sequence4123, $g4125 = (($g4124 || false).length || 0), $g4126 = 0, $g4127 = ($g4125 === $g4126);
if ($T($g4127))
return $k4112([])
else return $g3980($expt4111, $k4112)}, false)
$g3980 = $g2155("normalize_all", function $g4141 ($exp4129, $k4130)
{var $sequence4134 = $exp4129, $g4137 = $sequence4134[0], $g4140 = function $g4142 ($t4131)
{var $sequence4136 = $exp4129, $g4138 = $sequence4136.slice(1), $g4139 = function $g4143 ($tt4132)
{return $k4130($g2185([$t4131], $tt4132))};
return $g4110($g4138, $g4139)};
return $g4054($g4137, $g4140)}, false)
var dec = $g1464.dec, $g4146 = $g1464["third-setter"], $g4147 = $g2155("wrap_value", function $g4218 ($exp4148, $wrapper4149)
{if ($T($g2156($exp4148, $g2157)))
{var $sequence4153 = $exp4148, $g4208 = $sequence4153[0], $g4150 = $g2186($g4208), $g4151 = $g2190($g4150, "%begin"), $g4209;
if ($T($g4151))
$g4209 = $g4151
else $g4209 = $g2190($g4150, "%bind");
if ($T($g4209))
{var $rarray4166 = $exp4148, $rarray4163 = $exp4148, $g4164 = $rarray4163, $g4165 = (($g4164 || false).length || 0), $g4210 = ($g4165 - 1), $g4211 = $rarray4163[$g4210], $value4167 = $g4147($g4211, $wrapper4149);
$rarray4166[dec($g2191($rarray4166), 1)] = $value4167;
return $exp4148}
else if ($T($g2190($g4150, "%if")))
{var $rarray4172 = $exp4148, $sequence4171 = $exp4148, $g4212 = $sequence4171[2], $value4173 = $g4147($g4212, $wrapper4149);
$rarray4172[2] = $value4173;
var $rarray4186 = $exp4148, $rarray4183 = $exp4148, $g4184 = $rarray4183, $g4185 = (($g4184 || false).length || 0), $g4213 = ($g4185 - 1), $g4214 = $rarray4183[$g4213], $value4187 = $g4147($g4214, $wrapper4149);
$rarray4186[dec($g2191($rarray4186), 1)] = $value4187;
return $exp4148}
else if ($T($g2190($g4150, "%while")))
return [$g2145("%begin"), $exp4148, $g4147(false, $wrapper4149)]
else if ($T($g2190($g4150, "%try")))
{var $rarray4192 = $exp4148, $sequence4191 = $exp4148, $g4215 = $sequence4191[1], $value4193 = $g4147($g4215, $wrapper4149);
$rarray4192[1] = $value4193;
var $rarray4206 = $exp4148, $rarray4203 = $exp4148, $g4204 = $rarray4203, $g4205 = (($g4204 || false).length || 0), $g4216 = ($g4205 - 1), $g4217 = $rarray4203[$g4216], $value4207 = $g4147($g4217, $wrapper4149);
$rarray4206[dec($g2191($rarray4206), 1)] = $value4207;
return $exp4148}
else return $g2185($wrapper4149, [$exp4148])}
else return $g2185($wrapper4149, [$exp4148])}, false)
var $g4219 = $g2155("add_explicit_return", function $g4221 ($exp4220)
{return $g4147($exp4220, [$g2145("%return")])}, false)
var trueQ = $g1464["true?"], $g4222 = $g1464["member?"], $g4223 = $g2155("statementQ", function $g4246 ($exp4224)
{if ($T($g2156($exp4224, $g2157)))
{var $sequence4236 = $exp4224, $g4237 = $sequence4236, $g4238 = (($g4237 || false).length || 0), $g4239 = 0, $value4240 = ($g4238 === $g4239), $g4243 = !(trueQ($value4240));
if ($T($g4243))
{var $sequence4242 = $exp4224, $g4244 = $sequence4242[0], $g4245 = [$g2145("%if"), $g2145("%while"), $g2145("%begin"), $g2145("%bind"), $g2145("%try")];
return $g4222($g4244, $g4245)}}}, false)
var $g4247 = $g2155("add_explicit_true", function $g4249 ($exp4248)
{return [[$g2145("%native"), "$T"], $exp4248]}, false)
var dec = $g1464.dec, $g4252 = $g1464["first-setter"], $g4253 = $g2155("transform_statements", function $g4361 ($exp4254, $env4255)
{if ($T($g2156($exp4254, $g2157)))
{var $sequence4274 = $exp4254, $g4347 = $sequence4274[0], $g4256 = $g2186($g4347);
if ($T($g2190($g4256, "%method")))
{var $rarray4287 = $exp4254, $rarray4284 = $exp4254, $g4285 = $rarray4284, $g4286 = (($g4285 || false).length || 0), $g4348 = ($g4286 - 1), $g4349 = $rarray4284[$g4348], $g4350 = $g4253($g4349, $env4255), $value4288 = $g4219($g4350);
$rarray4287[dec($g2191($rarray4287), 1)] = $value4288;
return $exp4254}
else if ($T($g2190($g4256, "%begin")))
{var $__4257 = $exp4254[0], $exps4258 = $SL.call($exp4254, 1);
return $g2270($g2321($g2193($g4253, $env4255), $exps4258))}
else if ($T($g2190($g4256, "%bind")))
{var $__4259 = $exp4254[0], $g4260 = $exp4254[1], $rvar4261 = $g4260[0], $value4262 = $g4260[1], $body4263 = $exp4254[2];
if ($T($g4223($value4262)))
return [$g2145("%bind"), [$rvar4261, false], [$g2145("%begin"), $g4147($g4253($value4262, $env4255), [$g2145("%set"), $rvar4261]), $g4253($body4263, $env4255)]]
else return [$g2145("%bind"), [$rvar4261, $g4253($value4262, $env4255)], $g4253($body4263, $env4255)]}
else if ($T($g2190($g4256, "%if")))
{var $__4264 = $exp4254[0], $test4265 = $exp4254[1], $then4266 = $exp4254[2], $relse4267 = $exp4254[3];
return [$g2145("%if"), $g4247($test4265), $g4253($then4266, $env4255), $g4253($relse4267, $env4255)]}
else if ($T($g2190($g4256, "%while")))
{var $rarray4293 = $exp4254, $sequence4292 = $exp4254, $g4351 = $sequence4292[1], $value4294 = $g4247($g4351);
$rarray4293[1] = $value4294;
var $rarray4299 = $exp4254, $sequence4298 = $exp4254, $g4352 = $sequence4298[2], $value4300 = $g4253($g4352, $env4255);
$rarray4299[2] = $value4300;
return $exp4254}
else if ($T($g2190($g4256, "%try")))
{var $rarray4305 = $exp4254, $sequence4304 = $exp4254, $g4353 = $sequence4304[1], $value4306 = $g4253($g4353, $exp4254);
$rarray4305[1] = $value4306;
var $rarray4319 = $exp4254, $rarray4316 = $exp4254, $g4317 = $rarray4316, $g4318 = (($g4317 || false).length || 0), $g4354 = ($g4318 - 1), $g4355 = $rarray4316[$g4354], $value4320 = $g4253($g4355, $env4255);
$rarray4319[dec($g2191($rarray4319), 1)] = $value4320;
return $exp4254}
else if ($T($g2190($g4256, "%set")))
{var $__4268 = $exp4254[0], $identifier4269 = $exp4254[1], $value4270 = $exp4254[2], $valuet4271 = $g4253($value4270, $env4255), $definition_name4272 = $g2235($env4255, "definition-names", $g2186($identifier4269)), $g4356;
if ($T($definition_name4272))
$g4356 = $g4222($definition_name4272, $g2235($env4255, "module", "exports"))
else $g4356 = false;
if ($T($g4356))
{var $rarray4323 = $exp4254, $value4324 = $g2145("%begin");
$rarray4323[0] = $value4324;
var $rarray4327 = $exp4254, $value4328 = [$g2145("%set"), $identifier4269, $valuet4271];
$rarray4327[1] = $value4328;
var $rarray4331 = $exp4254, $value4332 = [$g2145("%set"), [$g2145("%get-property"), [$g2145("%native"), "exports"], $definition_name4272], $identifier4269];
$rarray4331[2] = $value4332}
else {var $rarray4335 = $exp4254, $value4336 = $valuet4271;
$rarray4335[2] = $value4336};
return $exp4254}
else if ($T($g2190($g4256, "%define")))
{var $g4357 = $g2145("%var"), $rarray4344 = $exp4254, $g4345 = $rarray4344, $g4346 = (($g4345 || false).length || 0), $g4358 = ($g4346 - 1), $g4359 = $rarray4344[$g4358], $g4360 = [$g4359, false];
return [$g4357, $g4360]}
else return $g2321($g2193($g4253, $env4255), $exp4254)}
else return $exp4254}, false)
var $g4362, $g4363 = $g2155("lift_symbols", function $g4366 ($exp4364, $env4365)
{return $g4362($exp4364, $env4365, $g3280)}, false)
{var trueQ = $g1464["true?"], $g4373, $g4374, $g4375, $g4376 = $g1464["<hash-symbol>"];
$g4362 = $g2155("lift_symbol", function $g4435 ($exp4377, $env4378, $k4379)
{var $g4431;
if ($T($g2156($exp4377, $g2157)))
{var $sequence4424 = $exp4377, $g4425 = $sequence4424, $g4426 = (($g4425 || false).length || 0), $g4427 = 0, $value4428 = ($g4426 === $g4427);
$g4431 = !(trueQ($value4428))}
else $g4431 = false;
if ($T($g4431))
{var $sequence4430 = $exp4377, $g4432 = $sequence4430[0], $g4380 = $g2186($g4432);
if ($T($g2190($g4380, "%bind")))
{var $__4381 = $exp4377[0], $g4382 = $exp4377[1], $rvar4383 = $g4382[0], $value4384 = $g4382[1], $body4385 = $exp4377[2];
return $g4362($value4384, $env4378, function $g4436 ($lvalue4386, $env4387)
{return $g4362($body4385, $env4387, function $g4437 ($lbody4388, $env4389)
{return $k4379([$g2145("%bind"), [$rvar4383, $lvalue4386], $lbody4388], $env4389)})})}
else {var $g4390 = $g2190($g4380, "%method"), $g4433;
if ($T($g4390))
$g4433 = $g4390
else $g4433 = $g2190($g4380, "%set");
if ($T($g4433))
{var $m4391 = $exp4377[0], $e14392 = $exp4377[1], $e24393 = $exp4377[2];
return $g4362($e24393, $env4378, function $g4438 ($le24394, $env4395)
{return $k4379([$m4391, $e14392, $le24394], $env4395)})}
else {var $g4396 = $g2190($g4380, "%begin"), $g4434;
if ($T($g4396))
$g4434 = $g4396
else {var $g4397 = $g2190($g4380, "%if");
if ($T($g4397))
$g4434 = $g4397
else $g4434 = $g2190($g4380, "%while")};
if ($T($g4434))
{var $m4398 = $exp4377[0], $et4399 = $SL.call($exp4377, 1);
return $g4373($et4399, $env4378, function $g4439 ($let4400, $env4401)
{return $k4379($g2185([$m4398], $let4400), $env4401)})}
else if ($T($g2190($g4380, "%try")))
{var $__4402 = $exp4377[0], $e14403 = $exp4377[1], $v4404 = $exp4377[2], $e24405 = $exp4377[3];
return $g4373([$e14403, $e24405], $env4378, function $g4440 ($let4406, $env4407)
{var $le14408 = $let4406[0], $le24409 = $let4406[1];
return $k4379([$g2145("%try"), $le14408, $v4404, $le24409], $env4407)})}
else if ($T($g2190($g4380, "symbol")))
{var $__4410 = $exp4377[0], $name4411 = $exp4377[1];
return $g4374($name4411, $exp4377, "symbol", $env4378, $k4379)}
else return $g4375($exp4377, $env4378, $k4379)}}}
else {var $g4412 = $exp4377;
if ($T($g2156($g4412, $g3968)))
return $g4374($g2186($exp4377), $exp4377, "keyword", $env4378, $k4379)
else if ($T($g2156($g4412, $g4376)))
return $g4374($g2186($exp4377), $exp4377, "hash", $env4378, $k4379)
else return $k4379($exp4377, $env4378)}}, false)}
$g4374 = $g2155("lift_value", function $g4450 ($name4442, $value4443, $type4444, $env4445, $k4446)
{var $g4447 = $g2235($env4445, "lifted", $type4444, $name4442);
if ($T($g4447))
{var $t4448 = $g4447;
return $k4446($t4448, $env4445)}
else {var $t4449 = $g2216($env4445, "lifted", $type4444, $name4442, $g2219());
return [$g2145("%bind"), [$t4449, $value4443], $k4446($t4449, $env4445)]}}, false)
$g4373 = $g2155("lift_symbolT", function $g4469 ($expt4451, $env4452, $k4453)
{var $sequence4464 = $expt4451, $g4465 = $sequence4464, $g4466 = (($g4465 || false).length || 0), $g4467 = 0, $g4468 = ($g4466 === $g4467);
if ($T($g4468))
return $k4453([], $env4452)
else return $g4375($expt4451, $env4452, $k4453)}, false)
$g4375 = $g2155("lift_symbolTT", function $g4485 ($exp4470, $env4471, $k4472)
{var $sequence4478 = $exp4470, $g4481 = $sequence4478[0], $g4484 = function $g4486 ($t4473, $env4474)
{var $sequence4480 = $exp4470, $g4482 = $sequence4480.slice(1), $g4483 = function $g4487 ($tt4475, $env4476)
{return $k4472($g2185([$t4473], $tt4475), $env4476)};
return $g4373($g4482, $env4474, $g4483)};
return $g4362($g4481, $env4471, $g4484)}, false)
var trueQ = $g1464["true?"], $g4488, $g4489 = $g2155("flatten_begins", function $g4531 ($exps4490)
{var $rfunction4521 = $g2185, $values4522 = $g2321(function $g4532 ($exp4491)
{var $flattened4492 = $g4488($exp4491), $g4528;
if ($T($g2156($flattened4492, $g2157)))
{var $sequence4512 = $flattened4492, $g4513 = $sequence4512, $g4514 = (($g4513 || false).length || 0), $g4515 = 0, $value4516 = ($g4514 === $g4515), $g4525 = !(trueQ($value4516));
if ($T($g4525))
{var $sequence4518 = $flattened4492, $g4526 = $sequence4518[0], $g4527 = $g2145("%begin");
$g4528 = $g2190($g4526, $g4527)}
else $g4528 = false}
else $g4528 = false;
if ($T($g4528))
{var $sequence4520 = $flattened4492;
return $sequence4520.slice(1)}
else return [$flattened4492]}, $exps4490), $g4523 = $values4522, $g4529 = $g4523[0], $g4524 = $values4522, $g4530 = $g4524.slice(1);
return $g2311($rfunction4521, $g4529, $g4530)}, false)
var $g4533 = $g2155("varQ", function $g4539 ($exp4534)
{if ($T($g2162($exp4534)))
{var $sequence4536 = $exp4534, $g4537 = $sequence4536[0], $g4538 = $g2145("%var");
return $g2190($g4537, $g4538)}}, false)
var $g4540 = $g2155("setQ", function $g4546 ($exp4541)
{if ($T($g2162($exp4541)))
{var $sequence4543 = $exp4541, $g4544 = $sequence4543[0], $g4545 = $g2145("%set");
return $g2190($g4544, $g4545)}}, false)
var $g4547 = $g2155("methodQ", function $g4553 ($exp4548)
{if ($T($g2162($exp4548)))
{var $sequence4550 = $exp4548, $g4551 = $sequence4550[0], $g4552 = $g2145("%method");
return $g2190($g4551, $g4552)}}, false)
var trueQ = $g1464["true?"], $g4554 = $g2155("flatten_vars", function $g4646 ($exps4555)
{return $g2311(function $g4647 ($result4556, $exp4557)
{var $sequence4575 = $result4556, $g4576 = $sequence4575, $g4577 = (($g4576 || false).length || 0), $g4578 = 0, $value4579 = ($g4577 === $g4578), $g4636 = !(trueQ($value4579)), $previous4558;
if ($T($g4636))
{var $rarray4587 = $result4556, $g4588 = $rarray4587, $g4589 = (($g4588 || false).length || 0), $g4637 = ($g4589 - 1);
$previous4558 = $rarray4587[$g4637]}
else $previous4558 = false;
var $previous_varq4559;
if ($T($previous4558))
$previous_varq4559 = $g4533($previous4558)
else $previous_varq4559 = false;
var $g4638;
if ($T($previous_varq4559))
$g4638 = $g4533($exp4557)
else $g4638 = false;
if ($T($g4638))
{var $g4640 = function $g4648 ($binding4560)
{var $rarray4599 = $result4556, $g4600 = $rarray4599, $g4601 = (($g4600 || false).length || 0), $g4639 = ($g4601 - 1), $rarray4602 = $rarray4599[$g4639], $value4603 = $binding4560;
$rarray4602.push($value4603);
return $rarray4602}, $sequence4605 = $exp4557, $g4641 = $sequence4605.slice(1);
$g2244($g4640, $g4641);
return $result4556}
else {var $mergeq4561;
if ($T($previous_varq4559))
$mergeq4561 = $g4540($exp4557)
else $mergeq4561 = false;
var $binding4562;
if ($T($mergeq4561))
{var $rarray4620 = $result4556, $g4621 = $rarray4620, $g4622 = (($g4621 || false).length || 0), $g4642 = ($g4622 - 1), $rarray4623 = $rarray4620[$g4642], $g4624 = $rarray4623, $g4625 = (($g4624 || false).length || 0), $g4643 = ($g4625 - 1);
$binding4562 = $rarray4623[$g4643]}
else $binding4562 = false;
var $identifier4563;
if ($T($mergeq4561))
{var $sequence4627 = $exp4557;
$identifier4563 = $sequence4627[1]}
else $identifier4563 = false;
var $sequence4629 = $binding4562, $g4644 = $sequence4629[0], $g4645 = $g2190($g4644, $identifier4563);
if ($T($g4645))
{var $rarray4634 = $binding4562, $sequence4633 = $exp4557, $value4635 = $sequence4633[2];
$rarray4634[1] = $value4635;
return $result4556}
else return $g2185($result4556, [$exp4557])}}, [], $exps4555)}, false)
{var dec = $g1464.dec;
$g4488 = $g2155("flatten_statements", function $g4727 ($exp4652)
{if ($T($g2156($exp4652, $g2157)))
{var $sequence4662 = $exp4652, $g4717 = $sequence4662[0], $g4653 = $g2186($g4717), $g4654 = $g2190($g4653, "%method"), $g4718;
if ($T($g4654))
$g4718 = $g4654
else {var $g4655 = $g2190($g4653, "%while");
if ($T($g4655))
$g4718 = $g4655
else $g4718 = $g2190($g4653, "%set")};
if ($T($g4718))
{var $rarray4675 = $exp4652, $rarray4672 = $exp4652, $g4673 = $rarray4672, $g4674 = (($g4673 || false).length || 0), $g4719 = ($g4674 - 1), $g4720 = $rarray4672[$g4719], $value4676 = $g4488($g4720);
$rarray4675[dec($g2191($rarray4675), 1)] = $value4676;
return $exp4652}
else if ($T($g2190($g4653, "%begin")))
{var $__4656 = $exp4652[0], $exps4657 = $SL.call($exp4652, 1);
return $g2270($g4554($g4489($exps4657)))}
else if ($T($g2190($g4653, "%bind")))
{var $__4658 = $exp4652[0], $binding4659 = $exp4652[1], $body4660 = $exp4652[2];
return $g4488([$g2145("%begin"), [$g2145("%var"), $binding4659], $body4660])}
else if ($T($g2190($g4653, "%if")))
{var $rarray4681 = $exp4652, $sequence4680 = $exp4652, $g4721 = $sequence4680[2], $value4682 = $g4488($g4721);
$rarray4681[2] = $value4682;
var $rarray4695 = $exp4652, $rarray4692 = $exp4652, $g4693 = $rarray4692, $g4694 = (($g4693 || false).length || 0), $g4722 = ($g4694 - 1), $g4723 = $rarray4692[$g4722], $value4696 = $g4488($g4723);
$rarray4695[dec($g2191($rarray4695), 1)] = $value4696;
return $exp4652}
else if ($T($g2190($g4653, "%try")))
{var $rarray4701 = $exp4652, $sequence4700 = $exp4652, $g4724 = $sequence4700[1], $value4702 = $g4488($g4724);
$rarray4701[1] = $value4702;
var $rarray4715 = $exp4652, $rarray4712 = $exp4652, $g4713 = $rarray4712, $g4714 = (($g4713 || false).length || 0), $g4725 = ($g4714 - 1), $g4726 = $rarray4712[$g4725], $value4716 = $g4488($g4726);
$rarray4715[dec($g2191($rarray4715), 1)] = $value4716;
return $exp4652}
else return $g2321($g4488, $exp4652)}
else return $exp4652}, false)}
var $g4728 = $g2136("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var $g4729 = $g2155("fill_zeros", function $g4741 ($rstring4730)
{var $rarray4736 = "0000", $start4737 = 0, $robject4735 = $rstring4730, $g4739 = (($robject4735 || false).length || 0), $end4738 = (4 - $g4739), $g4740 = $rarray4736.slice($start4737, $end4738);
return $g2185($g4740, $rstring4730)}, false)
var $g4743 = $g1464.join, $g4744 = $g1464["<"], $g4745 = $g1464["as-hex-string"], $g4746 = $g1464["char-code"], $g4747 = $g1464["as-array"], $g4748 = $g2155("escape_string", function $g4767 ($rstring4749)
{var $g4764 = function $g4768 ($rchar4750)
{var $g4751 = $g2235($g4728, $rchar4750);
if ($T($g4751))
{var $escaped4752 = $g4751;
return $g2185("\\", $escaped4752)}
else {var $rchar4755 = $rchar4750, $code4753 = $rchar4755.charCodeAt(0);
if ($T($g4744(31, $code4753, 127)))
return $rchar4750
else {var $rnumber4757 = $code4753, $g4762 = $rnumber4757.toString(16), $g4763 = $g4729($g4762);
return $g2185("\\u", $g4763)}}}, $rarguments4760 = $rstring4749, $skip4761 = undefined, $g4765 = $SL.call($rarguments4760, ($skip4761 || 0)), $g4766 = $g2321($g4764, $g4765);
return $g4743($g4766, "")}, false)
var $g4769 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var $g4770 = $g2136("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
{var $g4771 = $g2133.match;
$g2217 = $g2155("escape_name", function $g4795 ($name4772)
{if ($T($g4222($name4772, $g4769)))
return $g2185("R", $name4772)
else {var $g4793 = function $g4796 ($rchar4773)
{var $robject4777 = $g4770, $property4778 = $rchar4773, $g4789 = $HP.call($robject4777,$property4778);
if ($T($g4789))
return $g2235($g4770, $rchar4773)
else {var $regexp4781 = "\\w", $rstring4782 = $rchar4773, $g4790 = $rstring4782.match($regexp4781);
if ($T($g4790))
return $rchar4773
else {var $rchar4784 = $rchar4773, $g4791 = $rchar4784.charCodeAt(0), $g4792 = $g2218($g4791);
return $g2185("Z", $g4792)}}}, $rarguments4787 = $name4772, $skip4788 = undefined, $g4794 = $SL.call($rarguments4787, ($skip4788 || 0)), $chars4774 = $g2321($g4793, $g4794);
return $g4743($chars4774, "")}}, false)}
var trueQ = $g1464["true?"], $g4797 = $g2155("valid_js_nameQ", function $g4806 ($identifier4798)
{var $value4800 = $g4222($identifier4798, $g4769), $g4805 = !(trueQ($value4800));
if ($T($g4805))
{var $regexp4803 = "^\\w+$", $rstring4804 = $identifier4798;
return $rstring4804.match($regexp4803)}}, false)
var $g4809, $g4810 = $g1464["as-uppercase"], $g4811 = $g1464.description, $g4812 = $g2155("compile_js", function $g4837 ($exp4813, $env4814)
{var $g4815 = $exp4813;
if ($T($g2156($g4815, $g2157)))
{var $sequence4827 = $exp4813, $g4828 = $sequence4827, $g4829 = (($g4828 || false).length || 0), $g4830 = 0, $g4835 = ($g4829 === $g4830);
if ($T($g4835))
{var $error4832 = $g2998($g2999, $g3004, "empty expression");
throw($error4832);
return false}
else return $g4809($exp4813, $env4814)}
else if ($T($g2156($g4815, $g3966)))
return $g2218($exp4813)
else if ($T($g2156($g4815, $g3967)))
if ($T($exp4813))
return "true"
else return "false"
else if ($T($g2156($g4815, $g3008)))
return $g2185("\"", $g4748($exp4813), "\"")
else if ($T($g2156($g4815, $g4376)))
{var $rstring4834 = $g2186($exp4813), $g4836 = $rstring4834.toUpperCase();
return $g2185("$", $g4836)}
else if ($T($g2156($g4815, $g3968)))
return $g2185("$K(\"", $g2186($exp4813), "\")")
else if ($T($g2156($g4815, $g2161)))
{var $g4816 = $exp4813;
if ($T($g2190($g4816, $g2145("%this-method"))))
return $g4812($g2235($env4814, "current-method"), $env4814)
else if ($T($g2190($g4816, $g2145("%all-arguments"))))
return "arguments"
else if ($T($g2235($exp4813, "generated?")))
return $g2185("$", $g2186($exp4813))
else return $g2217($g2186($exp4813))}
else return $g4811($exp4813)}, false)
{var trueQ = $g1464["true?"], $g4845;
$g4809 = $g2155("compile_js_exp", function $g4982 ($exp4846, $env4847)
{var $sequence4904 = $exp4846, $g4941 = $sequence4904[0], $name4848 = $g2186($g4941), $g4849 = $name4848;
if ($T($g2190($g4849, "%native-call")))
{var $__4850 = $exp4846[0], $operator4851 = $exp4846[1], $values4852 = $SL.call($exp4846, 2);
return $g2185($operator4851, $g4845($values4852, $env4847))}
else if ($T($g2190($g4849, "%infix")))
{var $__4853 = $exp4846[0], $operator4854 = $exp4846[1], $values4855 = $SL.call($exp4846, 2);
return $g2185("(", $g4743($g2321($g2193($g4812, $env4847), $values4855), $g2185(" ", $operator4854, " ")), ")")}
else {var $g4856 = $g2190($g4849, "%plus"), $g4942;
if ($T($g4856))
$g4942 = $g4856
else {var $g4857 = $g2190($g4849, "%minus");
if ($T($g4857))
$g4942 = $g4857
else {var $g4858 = $g2190($g4849, "%times");
if ($T($g4858))
$g4942 = $g4858
else $g4942 = $g2190($g4849, "%divide")}};
if ($T($g4942))
{var $g4943 = $g2145("%infix"), $g4859 = $name4848, $g4944;
if ($T($g2190($g4859, "%plus")))
$g4944 = "+"
else if ($T($g2190($g4859, "%minus")))
$g4944 = "-"
else if ($T($g2190($g4859, "%times")))
$g4944 = "*"
else if ($T($g2190($g4859, "%divide")))
$g4944 = "/"
else $g4944 = false;
var $g4945 = [$g4943, $g4944], $sequence4906 = $exp4846, $g4946 = $sequence4906.slice(1), $g4947 = $g2185($g4945, $g4946);
return $g4809($g4947, $env4847)}
else if ($T($g2190($g4849, "%array")))
{var $__4860 = $exp4846[0], $elements4861 = $SL.call($exp4846, 1);
return $g2185("[", $g4743($g2321($g2193($g4812, $env4847), $elements4861), ", "), "]")}
else if ($T($g2190($g4849, "%object")))
{var $sequence4908 = $exp4846, $key_values4862 = $sequence4908.slice(1), $entries4863 = [], $robject4910 = $key_values4862, $g4948 = (($robject4910 || false).length || 0), $g4864 = ($g4948 / 2), $i4865 = 0;
while ($T(true))
{var $value4912 = $g3933($i4865, $g4864), $g4951 = !(trueQ($value4912));
if ($T($g4951))
{(function $g4983 ($i4866)
{var $rarray4915 = $entries4863, $name4867 = $g2283($key_values4862, ($i4866 * 2)), $g4949;
if ($T($g4797($name4867)))
$g4949 = $name4867
else $g4949 = $g4812($name4867, $env4847);
var $g4950 = $g4812($g2283($key_values4862, (($i4866 * 2) + 1)), $env4847), $value4916 = $g2185($g4949, ":", $g4950);
$rarray4915.push($value4916);
return $rarray4915})($i4865);
$i4865 = ($i4865 + 1)}
else break};
false;
return $g2185("{", $g4743($entries4863, ",\n"), "}")}
else if ($T($g2190($g4849, "%if")))
{var $__4868 = $exp4846[0], $test4869 = $exp4846[1], $then4870 = $exp4846[2], $relse4871 = $exp4846[3], $g4952 = $g4812($test4869, $env4847), $g4953 = $g4812($then4870, $env4847), $g4954;
if ($T($relse4871))
{var $value4918 = $g2281($relse4871, [$g2145("%return"), false]);
$g4954 = !(trueQ($value4918))}
else $g4954 = false;
var $g4955;
if ($T($g4954))
$g4955 = $g2185("\nelse ", $g4812($relse4871, $env4847))
else $g4955 = "";
return $g2185("if (", $g4952, ")\n", $g4953, $g4955)}
else if ($T($g2190($g4849, "%while")))
{var $__4872 = $exp4846[0], $test4873 = $exp4846[1], $body4874 = $exp4846[2];
return $g2185("while (", $g4812($test4873, $env4847), ")\n", $g4812($body4874, $env4847))}
else if ($T($g2190($g4849, "%try")))
{var $__4875 = $exp4846[0], $body4876 = $exp4846[1], $rvar4877 = $exp4846[2], $rcatch4878 = $exp4846[3];
return $g2185("try {", $g4812($body4876, $env4847), "}\n", "catch (", $g4812($rvar4877, $env4847), ")\n", "{", $g4812($rcatch4878, $env4847), "}")}
else if ($T($g2190($g4849, "%return")))
{var $sequence4920 = $exp4846, $g4956 = $sequence4920[1], $g4957 = $g4812($g4956, $env4847);
return $g2185("return ", $g4957)}
else if ($T($g2190($g4849, "%begin")))
{var $g4958 = $g2193($g4812, $env4847), $sequence4922 = $exp4846, $g4959 = $sequence4922.slice(1), $g4960 = $g2321($g4958, $g4959), $g4961 = $g4743($g4960, ";\n");
return $g2185("{", $g4961, "}")}
else if ($T($g2190($g4849, "%set")))
{var $__4879 = $exp4846[0], $rvar4880 = $exp4846[1], $value4881 = $exp4846[2];
return $g2185($g4812($rvar4880, $env4847), " = ", $g4812($value4881, $env4847))}
else if ($T($g2190($g4849, "%method")))
{var $__4882 = $exp4846[0], $rarguments4883 = $exp4846[1], $body4884 = $exp4846[2], $name4885 = $g2219(), $previous_method4886 = $g2235($env4847, "current-method"), $g4962 = $g4812($name4885, $env4847), $g4963 = $g4743($g2321($g2193($g4812, $env4847), $rarguments4883), ", ");
$g2216($env4847, "current-method", $name4885);
var $bodyt4887 = $g4812($body4884, $env4847);
$g2216($env4847, "current-method", $previous_method4886);
var $g4966;
if ($T($g2162($body4884)))
{var $sequence4924 = $body4884, $g4964 = $sequence4924[0], $g4965 = $g2145("%begin");
$g4966 = $g2190($g4964, $g4965)}
else $g4966 = false;
var $g4967;
if ($T($g4966))
$g4967 = $bodyt4887
else $g4967 = $g2185("{", $bodyt4887, "}");
return $g2185("function ", $g4962, " (", $g4963, ")\n", $g4967)}
else if ($T($g2190($g4849, "%var")))
{var $__4888 = $exp4846[0], $bindings4889 = $SL.call($exp4846, 1);
return $g2185("var ", $g4743($g2321(function $g4984 ($binding4890)
{var $g4891;
if ($T($g2156($binding4890, $g2157)))
$g4891 = $binding4890
else $g4891 = [$binding4890, false];
var $rvar4892 = $g4891[0], $value4893 = $g4891[1], $g4968 = $g4812($rvar4892, $env4847), $g4969;
if ($T($value4893))
$g4969 = $g2185(" = ", $g4812($value4893, $env4847))
else $g4969 = "";
return $g2185($g4968, $g4969)}, $bindings4889), ", "))}
else if ($T($g2190($g4849, "%native")))
{var $rfunction4935 = $g2185, $g4970 = function $g4985 ($e4894)
{if ($T($g2156($e4894, $g2161)))
return $g4812($e4894)
else return $g2218($e4894)}, $sequence4934 = $exp4846, $g4971 = $sequence4934.slice(1), $values4936 = $g2321($g4970, $g4971), $g4937 = $values4936, $g4972 = $g4937[0], $g4938 = $values4936, $g4973 = $g4938.slice(1);
return $g2311($rfunction4935, $g4972, $g4973)}
else if ($T($g2190($g4849, "%native-name")))
{var $sequence4940 = $exp4846, $g4974 = $sequence4940[1], $g4975 = $g2217($g4974);
return $g2185("\"", $g4975, "\"")}
else if ($T($g2190($g4849, "%get-property")))
{var $__4895 = $exp4846[0], $robject4896 = $exp4846[1], $properties4897 = $SL.call($exp4846, 2), $g4976;
if ($T($g2156($robject4896, $g3966)))
$g4976 = $g2185("(", $g4812($robject4896, $env4847), ")")
else $g4976 = $g4812($robject4896, $env4847);
var $g4979 = $g2311(function $g4986 ($result4898, $property4899)
{var $g4977;
if ($T($g2156($property4899, $g3008)))
$g4977 = $g4797($property4899)
else $g4977 = false;
var $g4978;
if ($T($g4977))
$g4978 = $g2185(".", $property4899)
else $g4978 = $g2185("[", $g4812($property4899, $env4847), "]");
return $g2185($result4898, $g4978)}, "", $properties4897);
return $g2185($g4976, $g4979)}
else {var $rfunction4900 = $exp4846[0], $values4901 = $SL.call($exp4846, 1), $functiont4902 = $g4812($rfunction4900, $env4847), $g4980;
if ($T($g4547($rfunction4900)))
$g4980 = $g2185("(", $functiont4902, ")")
else $g4980 = $functiont4902;
var $g4981 = $g4845($values4901, $env4847);
return $g2185($g4980, $g4981)}}}, false)}
$g4845 = $g2155("compile_js_call", function $g4989 ($values4987, $env4988)
{return $g2185("(", $g4743($g2321($g2193($g4812, $env4988), $values4987), ", "), ")")}, false)
var $g4994 = $K("string"), $g4990 = $g2134.read, $g4991 = $g2131["<string-stream>"], $g4992 = $g2155("read_program", function $g4995 ($source4993)
{return $g4990($g2998($g4991, $g4994, $g2185("(", $source4993, "\n)")))}, false)
var $g4996 = $g2155("compile_expression", function $g5004 ($exp4997, $env4998)
{return $g2311(function $g5005 ($result4999, $namesfn5000)
{var $name5001 = $namesfn5000[0], $fn5002 = $namesfn5000[1], $result5003 = $fn5002($result4999);
return $result5003}, $exp4997, [["source", $g3280], ["macroexpanded", $g2193($g2246, $env4998)], ["lifted defines", $g2193($g3281, $env4998)], ["defined free variables", $g2193($g3473, $env4998)], ["alpha-converted", $g2193($g3747, $env4998)], ["inline", $g2193($g3816, $env4998)], ["defined free variables after inline", $g2193($g3504, $env4998)], ["ANF", $g3973], ["lifted symbols", $g2193($g4363, $env4998)], ["statements", $g2193($g4253, $env4998)], ["flattened", $g4488], ["compiled", $g2193($g4812, $env4998)]])}, false)
var $g5006 = $g2135["resolve-path"], $g5007 = $g2155("executable_path", function $g5009 ($module_name5008)
{return $g5006("build", $g2185($module_name5008, ".js"))}, false)
var $g5010 = $g2155("module_path", function $g5013 ($base_path5011, $module_name5012)
{return $g5006($base_path5011, $g2185($module_name5012, ".rm"))}, false)
var $g5014 = $g2155("source_path", function $g5016 ($module_name5015)
{return $g5006("src", $g2185($module_name5015, ".ralph"))}, false)
var trueQ = $g1464["true?"], $g5018 = $g2135["file-properties"], $g5019 = $g2135["file-exists?"], $g5020 = $g2155("recompileQ", function $g5030 ($module_name5021)
{var $value5026 = $g2235($g2137, $module_name5021, "native?"), $g5029 = !(trueQ($value5026));
if ($T($g5029))
{var $path5022 = $g5007($module_name5021), $value5028 = $g5019($path5022), $g5023 = !(trueQ($value5028));
if ($T($g5023))
return $g5023
else {var $path25024 = $g5014($module_name5021);
return $g4744($g2235($g5018($path5022), "modification-date"), $g2235($g5018($path25024), "modification-date"))}}}, false)
{var $g5034 = $g1464["chain-object"], $g5035, $g5036;
$g3225 = $g2155("compile_time_import_module", function $g5050 ($env5037, $module_name5038)
{var $g5039 = $SL.call(arguments, 2), $g5040 = $g3045($g5039, {options:false}), $options5041 = $g5040.options, $g5047;
if ($T($g2190($module_name5038, "ralph/core")))
$g5047 = [$g2268, $g3384]
else {$g5035($module_name5038);
var $definitions5042 = require($module_name5038), $macros5043 = $g2147(), $symbol_macros5044 = $g2147();
$g2244(function $g5051 ($name5045)
{var $definition5046 = $g2235($definitions5042, $name5045);
if ($T($g2235($definition5046, "%macro?")))
return $g2216($macros5043, $name5045, $definition5046)
else if ($T($g2235($definition5046, "%symbol-macro?")))
return $g2216($symbol_macros5044, $name5045, $definition5046)}, $g3110($g5036, $g3472($definitions5042), $options5041));
$g5047 = [$macros5043, $symbol_macros5044]};
var $macros5048 = $g5047[0], $symbol_macros5049 = $g5047[1];
$g5034($g2235($env5037, "macros"), $macros5048);
return $g5034($g2235($env5037, "symbol-macros"), $symbol_macros5049)}, false)}
{var $g5056 = $g1464["remove!"], $g5057 = $g1464["as-object"];
$g5036 = $g2155("process_names", function $g5076 ($all5058)
{var $g5059 = $SL.call(arguments, 1), $g5060 = $g3045($g5059, {only:false,
exclude:false,
prefix:false,
rename:false}), $only5061 = $g5060.only, $exclude5062 = $g5060.exclude, $prefix5063 = $g5060.prefix, $rename5064 = $g5060.rename, $resolve5065 = function $g5077 ($exp5066)
{if ($T($g2156($exp5066, $g3008)))
return $exp5066
else return $g2206($exp5066)}, $g5073;
if ($T($g2156($only5061, $g2157)))
$g5073 = $g2321($resolve5065, $only5061)
else $g5073 = $all5058;
var $names5067 = $g3471($g5073), $g5068 = $rename5064, $g5074;
if ($T($g5068))
$g5074 = $g5068
else $g5074 = [];
var $g5075 = $g2321($resolve5065, $g5074), $renamings5069 = $g5057($g5075);
$g2244($g2245($g5056, $names5067), $g2321($resolve5065, $exclude5062));
$g3559($names5067, $g3472($renamings5069));
return $g2321(function $g5078 ($name5070)
{var $g5071 = $g2235($renamings5069, $name5070);
if ($T($g5071))
{var $renaming5072 = $g5071;
return [$name5070, $renaming5072]}
else if ($T($g2156($prefix5063, $g3008)))
return [$name5070, $g2185($prefix5063, $name5070)]
else return $name5070}, $names5067)}, false)}
{var $g5080;
$g3226 = $g2155("import_module", function $g5096 ($module5081, $module_name5082)
{var $options5083 = $SL.call(arguments, 2), $g5084 = $g5080($module_name5082);
if ($T($g5084))
{var $other_module5085 = $g5084, $rarray5088 = $g2235($module5081, "imports"), $value5089 = [$other_module5085, $g3110($g5036, $g2235($other_module5085, "exports"), $options5083)];
$rarray5088.unshift($value5089);
$rarray5088;
var $rarray5092 = $g2235($module5081, "dependencies"), $value5093 = $module_name5082;
$rarray5092.unshift($value5093);
$rarray5092;
return $other_module5085}
else {var $error5095 = $g2185("unable to import module '", $module_name5082, "'");
throw($error5095);
return false}}, false)}
{var $g5100;
$g5080 = $g2155("find_module", function $g5105 ($module_name5101)
{var $g5102 = $g5035($module_name5101);
if ($T($g5102))
return $g5102
else {var $g5103 = $g2235($g2137, $module_name5101);
if ($T($g5103))
return $g5103
else {var $g5104 = $g5100("build", $module_name5101);
if ($T($g5104))
return $g5104
else return $g5100("src", $module_name5101)}}}, false)}
{var $g5110 = $K("name"), $g5106 = $g2135["read-file"];
$g5100 = $g2155("read_module", function $g5111 ($base_path5107, $module_name5108)
{var $path5109 = $g5010($base_path5107, $module_name5108);
if ($T($g5019($path5109)))
return $g3110($g2245($g2998, $g2140, $g5110), $g4990($g2998($g4991, $g4994, $g5106($path5109))))}, false)}
{var $g5143 = $K("module"), $g5144 = $K("exports"), $g5145 = $K("inline"), $g5146 = $K("dependencies"), trueQ = $g1464["true?"], $g5113 = $g2135["write-file"];
$g5035 = $g2155("compile_module", function $g5147 ($module_name5114)
{var $robject5127 = $g2137, $property5128 = $module_name5114, $value5129 = $HP.call($robject5127,$property5128), $g5140 = !(trueQ($value5129));
if ($T($g5140))
{var $g5115 = $g5100("src", $module_name5114);
if ($T($g5115))
{var $module5116 = $g5115;
$g2216($g2137, $module_name5114, $module5116)}};
if ($T($g5020($module_name5114)))
{var $value5131 = $g5019($g5014($module_name5114)), $g5141 = !(trueQ($value5131));
if ($T($g5141))
{var $error5133 = $g2185("unable to compile module '", $module_name5114, "'");
throw($error5133);
false};
var $module5117 = $g2998($g2140, $g5110, $module_name5114), $env5118 = $g2998($g2148, $g5143, $module5117), $source5119 = $g5106($g5014($module_name5114)), $program5120 = $g4992($source5119), $result5121 = "";
$g2216($g2137, $module_name5114, $module5117);
$g3225($env5118, "ralph/core");
var $value5135 = $g2190($module_name5114, "ralph/core"), $g5142 = !(trueQ($value5135));
if ($T($g5142))
{$g3226($module5117, "ralph/core");
var $rarray5138 = $program5120, $value5139 = $g3227("ralph/core", $env5118);
$rarray5138.unshift($value5139);
$rarray5138};
$g2244(function $g5148 ($expression5122)
{var $code5123 = $g4996($expression5122, $env5118);
return $result5121 = $g2185($result5121, $code5123, "\n")}, $program5120);
$g5113($g5007($module_name5114), $result5121);
$g5113($g5010("build", $module_name5114), $g4811([$module_name5114, $g5144, $g2235($module5117, "exports"), $g5145, $g2235($module5117, "inline"), $g5146, $g2235($module5117, "dependencies")]));
return $module5117}}, false);
exports["compile-module"] = $g5035}
{var $g5151 = $g2155("analyze_dependencies", function $g5166 ($module_name5152)
{var $g5153 = $g5080($module_name5152);
if ($T($g5153))
{var $module5154 = $g5153;
$g2216($g2137, $module_name5152, $module5154);
var $g5155 = $module5154, $dependencies5156 = $g5155.dependencies, $result5157 = $g2282($dependencies5156);
$g2244(function $g5167 ($dependency5158)
{return $g2244(function $g5168 ($sub_dependency5159)
{if ($T($g4222($sub_dependency5159, $result5157)))
$g5056($result5157, $sub_dependency5159);
var $rarray5162 = $result5157, $value5163 = $sub_dependency5159;
$rarray5162.unshift($value5163);
return $rarray5162}, $g5151($dependency5158))}, $dependencies5156);
return $result5157}
else {var $error5165 = $g2185("unable to find-module '", $module_name5152, "'");
throw($error5165);
return false}}, false);
exports["analyze-dependencies"] = $g5151}
