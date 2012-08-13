var $g1464 = require("ralph2/core")
{var $g2061, $g2062, $g2063, $g2064, $g2065;
$g2061 = require("ralph2/stream");
$g2062 = require("ralph2/format");
$g2063 = require("ralph2/regexp");
$g2064 = require("ralph2/reader");
$g2065 = require("ralph2/date")}
var $g2066 = $g1464["make-object"], $g2067 = $g2066()
var $g2068 = $g1464["%make-class"], $g2069 = $g1464["<object>"], $g2070 = $g2068($g2069, {name:false,
exports:function $g2071 ()
{return []},
imports:function $g2072 ()
{return []},
inline:function $g2073 ()
{return []}})
var $g2074 = $g1464.symbol, $g2075 = [$g2074("%all-arguments"), $g2074("%this-method")]
var $g2076 = $g1464["make-plain-object"], $g2077 = $g2068($g2069, {module:false,
macros:function $g2078 ()
{return $g2076()},
"symbol-macros":function $g2079 ()
{return $g2076()},
identifiers:function $g2080 ()
{return $g2066()},
"defined?":function $g2081 ()
{return $g2066()},
lifted:function $g2082 ()
{return $g2066()},
"import-identifiers":function $g2083 ()
{return $g2076()}})
var trueQ = $g1464["true?"], $g2084 = $g1464["%make-function"], $g2085 = $g1464["instance?"], $g2086 = $g1464["<array>"], $g2087 = $g1464.not, $g2088 = $g1464["empty?"], $g2089 = $g1464.first, $g2090 = $g1464["<symbol>"], $g2091 = $g2084("expressionQ", function $g2113 ($form2092)
{if ($T($g2085($form2092, $g2086)))
{var $sequence2104 = $form2092, $g2105 = $sequence2104, $g2106 = (($g2105 || false).length || 0), $g2107 = 0, $value2108 = ($g2106 === $g2107), $g2111 = !(trueQ($value2108));
if ($T($g2111))
{var $sequence2110 = $form2092, $g2112 = $sequence2110[0];
return $g2085($g2112, $g2090)}}}, false)
var $g2114 = $g1464.concatenate, $g2115 = $g1464["symbol-name"], $g2116 = $g2084("transform_setter_identifier", function $g2118 ($identifier2117)
{return $g2074($g2114($g2115($identifier2117), "-setter"))}, false)
var $g2119 = $g1464["=="], $g2120 = $g1464.size, $g2121 = $g1464["every?"], $g2122 = $g1464.rcurry, $g2123 = $g2084("setter_identifierQ", function $g2133 ($form2124)
{if ($T($g2085($form2124, $g2086)))
{var $robject2126 = $form2124, $g2129 = (($robject2126 || false).length || 0), $g2130 = $g2119($g2129, 2);
if ($T($g2130))
if ($T($g2121($g2122($g2085, $g2090), $form2124)))
{var $sequence2128 = $form2124, $g2131 = $sequence2128[0], $g2132 = $g2115($g2131);
return $g2119($g2132, "setter")}}}, false)
var $g2134 = $g1464.second, $g2135 = $g2084("identifier_name", function $g2141 ($identifier2136)
{var $g2140;
if ($T($g2123($identifier2136)))
{var $sequence2138 = $identifier2136, $g2139 = $sequence2138[1];
$g2140 = $g2116($g2139)}
else $g2140 = $identifier2136;
return $g2115($g2140)}, false)
var $g2142 = 0
var $g2143 = $g2084("reset_symbol_counterN", function $g2144 ()
{return $g2142 = 0}, false)
var $g2145 = $g1464["get-setter"], $g2146, $g2147 = $g1464["as-string"], $g2148 = $g2084("generate_symbol", function $g2154 ($prefix2149)
{var $g2152;
if ($T($prefix2149))
$g2152 = $g2146($prefix2149)
else $g2152 = "g";
var $g2153 = $g2147($g2142 = ($g2142 + 1)), $name2150 = $g2114($g2152, $g2153), $result2151 = $g2074($name2150);
$g2145($result2151, "generated?", true);
return $result2151}, false)
var $g2155 = $g2084("bindN", function $g2158 ($env2156, $identifier2157)
{return $g2145($env2156, "bound?", $g2115($identifier2157), true)}, false)
var $g2159 = $g2084("unbindN", function $g2162 ($env2160, $identifier2161)
{return $g2145($env2160, "bound?", $g2115($identifier2161), false)}, false)
var $g2163 = $g2066()
var $g2164 = $g1464.get, $g2165 = $g2084("find_special_form", function $g2172 ($form2166, $env2167)
{if ($T($g2091($form2166)))
{var $sequence2169 = $form2166, $g2170 = $sequence2169[0], $g2171 = $g2115($g2170);
return $g2164($g2163, $g2171)}}, false)
{var $g2173 = $g1464["do"], $g2174 = $g1464.curry, $g2175;
$g2145($g2163, "%method", function $g2180 ($env2176, $rarguments2177, $body2178)
{$g2173($g2174($g2155, $env2176), $rarguments2177);
var $expanded_body2179 = $g2175($body2178, $env2176);
$g2173($g2174($g2159, $env2176), $rarguments2177);
return [$g2074("%method"), $rarguments2177, $expanded_body2179]})}
$g2145($g2163, "%set", function $g2184 ($env2181, $identifier2182, $value2183)
{return [$g2074("%set"), $identifier2182, $g2175($value2183, $env2181)]})
$g2145($g2163, "define", function $g2188 ($env2185, $identifier2186, $value2187)
{$g2155($env2185, $identifier2186);
return [$g2074("define"), $identifier2186, $g2175($value2187, $env2185)]})
{var $g2189 = $g1464.element;
$g2145($g2163, "%bind", function $g2197 ($env2190, $binding2191, $body2192)
{var $rvar2193 = $g2189($binding2191, 0), $value2194 = $g2189($binding2191, 1), $expanded_value2195 = $g2175($value2194, $env2190);
$g2155($env2190, $rvar2193);
var $result2196 = [$g2074("%bind"), [$rvar2193, $expanded_value2195], $g2175($body2192, $env2190)];
$g2159($env2190, $rvar2193);
return $result2196})}
var $g2198 = $g2066()
var $g2201 = $g2084("maybe_begin", function $g2209 ($expressions2202)
{var $robject2206 = $expressions2202, $g2203 = (($robject2206 || false).length || 0), $g2204 = $g2119;
if ($T($g2204($g2203, 0)))
return false
else if ($T($g2204($g2203, 1)))
{var $sequence2208 = $expressions2202;
return $sequence2208[0]}
else return $g2114([$g2074("%begin")], $expressions2202)}, false)
var $g2236 = $REST, $g2237 = $KEY, $g2238 = $K("end"), $g2239 = $K("start"), $g2212 = $g1464["find-key"], $g2213 = $g1464["="], $g2214 = $g1464["copy-sequence"], $g2215 = $g1464.inc, $g2216 = $g2084("analyze_lambda_list", function $g2240 ($list2217)
{var $position2218 = function $g2241 ($symbol2219)
{return $g2212($list2217, $g2174($g2213, $symbol2219))}, $rest2220 = $position2218($g2236), $key2221 = $position2218($g2237), $g2222 = $rest2220, $g2230;
if ($T($g2222))
$g2230 = $g2222
else {var $g2223 = $key2221;
if ($T($g2223))
$g2230 = $g2223
else {var $robject2225 = $list2217;
$g2230 = (($robject2225 || false).length || 0)}};
var $g2231 = $g2214($list2217, $g2238, $g2230), $g2233;
if ($T($rest2220))
{var $rnumber2227 = $rest2220, $g2232 = ($rnumber2227 + 1);
$g2233 = $g2189($list2217, $g2232)}
else $g2233 = false;
var $g2235;
if ($T($key2221))
{var $rnumber2229 = $key2221, $g2234 = ($rnumber2229 + 1);
$g2235 = $g2214($list2217, $g2239, $g2234)}
else $g2235 = false;
return [$g2231, $g2233, $g2235]}, false)
var $g2242 = $g1464.reduce, $g2243 = $g2084("wrap", function $g2248 ($form2244)
{var $wrappers2245 = $SL.call(arguments, 1);
return $g2242(function $g2249 ($result2246, $wrapper2247)
{return $wrapper2247($result2246)}, $form2244, $wrappers2245)}, false)
var trueQ = $g1464["true?"], $g2252 = $g1464.map, $g2253 = $g1464.reduce1, $g2254 = $g2084("wrap_restSkeys", function $g2349 ($body2255, $all2256, $required2257, $rest2258, $key2259)
{var $restq2260 = $rest2258, $g2261 = $rest2258, $rest2262;
if ($T($g2261))
$rest2262 = $g2261
else {var $sequence2282 = $key2259, $g2283 = $sequence2282, $g2284 = (($g2283 || false).length || 0), $g2285 = 0, $value2286 = ($g2284 === $g2285), $g2331 = !(trueQ($value2286));
if ($T($g2331))
$rest2262 = $g2148()
else $rest2262 = false};
return $g2243($body2255, function $g2350 ($body2263)
{var $sequence2297 = $key2259, $g2298 = $sequence2297, $g2299 = (($g2298 || false).length || 0), $g2300 = 0, $g2332 = ($g2299 === $g2300);
if ($T($g2332))
return $body2263
else {var $key_values2265 = $g2252(function $g2351 ($binding2264)
{if ($T($g2085($binding2264, $g2086)))
return $binding2264
else return [$binding2264, false]}, $key2259), $g2333 = $g2074("bind-properties"), $g2334 = $g2252($g2089, $key_values2265), $g2335 = $g2074("%keys"), $g2336 = [$g2074("%object")], $rfunction2309 = $g2114, $values2310 = $g2252(function $g2352 ($key_value2266)
{var $key2267 = $g2189($key_value2266, 0), $value2268 = $g2189($key_value2266, 1);
return [$g2115($key2267), $value2268]}, $key_values2265), $g2311 = $values2310, $g2337 = $g2311[0], $g2312 = $values2310, $g2338 = $g2312.slice(1), $g2339 = $g2242($rfunction2309, $g2337, $g2338), $g2340 = $g2114($g2336, $g2339), $g2341 = [$g2335, $rest2262, $g2340];
return [$g2333, $g2334, $g2341, $body2263]}}, function $g2353 ($body2269)
{var $g2270 = $restq2260, $g2342;
if ($T($g2270))
$g2342 = $g2270
else {var $sequence2324 = $key2259, $g2325 = $sequence2324, $g2326 = (($g2325 || false).length || 0), $g2327 = 0, $value2328 = ($g2326 === $g2327);
$g2342 = !(trueQ($value2328))};
if ($T($g2342))
{var $g2343 = $g2074("bind"), $g2344 = $g2074("%native-call"), $robject2330 = $required2257, $g2345 = (($robject2330 || false).length || 0), $g2346 = [$g2344, "$SL.call", $all2256, $g2345], $g2347 = [$rest2262, $g2346], $g2348 = [$g2347];
return [$g2343, $g2348, $body2269]}
else return $body2269})}, false)
$g2145($g2198, "begin", function $g2356 ($__2354)
{var $expressions2355 = $SL.call(arguments, 1);
return $g2201($expressions2355)})
$g2145($g2198, "method", function $g2365 ($__2358, $rarguments2359)
{var $body2360 = $SL.call(arguments, 2), $g2361 = $g2216($rarguments2359), $required2362 = $g2189($g2361, 0), $rest2363 = $g2189($g2361, 1), $key2364 = $g2189($g2361, 2);
return [$g2074("%method"), $required2362, $g2254($g2201($body2360), $g2074("%all-arguments"), $required2362, $rest2363, $key2364)]})
{var $g2366 = $g1464.reverse;
$g2145($g2198, "bind", function $g2389 ($__2367, $bindings2368)
{var $body2369 = $SL.call(arguments, 2), $sequence2382 = $bindings2368, $g2383 = $sequence2382, $g2384 = (($g2383 || false).length || 0), $g2385 = 0, $g2386 = ($g2384 === $g2385);
if ($T($g2386))
return $g2201($body2369)
else return $g2242(function $g2390 ($body2370, $binding2371)
{var $g2387 = $g2074("%bind"), $g2388;
if ($T($g2085($binding2371, $g2090)))
$g2388 = [$binding2371, false]
else $g2388 = $binding2371;
return [$g2387, $g2388, $body2370]}, $g2201($body2369), $g2366($bindings2368))})}
$g2145($g2198, "if", function $g2395 ($__2391, $test2392, $then2393, $relse2394)
{return [$g2074("%if"), $test2392, $then2393, $relse2394]})
{var trueQ = $g1464["true?"], $g2396 = $g1464.rest;
$g2145($g2198, "set!", function $g2419 ($__2397, $place2398)
{var $values2399 = $SL.call(arguments, 2), $g2412;
if ($T($g2085($place2398, $g2086)))
{var $sequence2402 = $place2398, $g2410 = $sequence2402[0], $g2411 = $g2074("%get-property"), $value2403 = $g2119($g2410, $g2411);
$g2412 = !(trueQ($value2403))}
else $g2412 = false;
if ($T($g2412))
{var $sequence2405 = $place2398, $g2413 = $sequence2405[0], $g2414 = $g2116($g2413), $g2415 = [$g2414], $sequence2407 = $place2398, $g2416 = $sequence2407.slice(1);
return $g2114($g2415, $g2416, $values2399)}
else {var $g2417 = $g2074("%set"), $sequence2409 = $values2399, $g2418 = $sequence2409[0];
return [$g2417, $place2398, $g2418]}})}
$g2145($g2198, "parallel-set!", function $g2440 ($__2420, $rvar2421, $value2422)
{var $clauses2423 = $SL.call(arguments, 3), $sequence2435 = $clauses2423, $g2436 = $sequence2435, $g2437 = (($g2436 || false).length || 0), $g2438 = 0, $g2439 = ($g2437 === $g2438);
if ($T($g2439))
return [$g2074("set!"), $rvar2421, $value2422]
else {var $temp2424 = $g2148();
return [$g2074("bind"), [[$temp2424, $value2422]], $g2114([$g2074("parallel-set!")], $clauses2423), [$g2074("set!"), $rvar2421, $temp2424]]}})
{var $g2473 = $K("else"), trueQ = $g1464["true?"];
$g2145($g2198, "cond", function $g2474 ($__2442)
{var $cases2443 = $SL.call(arguments, 1), $sequence2459 = $cases2443, $g2460 = $sequence2459, $g2461 = (($g2460 || false).length || 0), $g2462 = 0, $value2463 = ($g2461 === $g2462), $g2468 = !(trueQ($value2463));
if ($T($g2468))
{var $sequence2465 = $cases2443, $g2444 = $sequence2465[0], $test2445 = $g2189($g2444, 0), $then2446 = $SL.call($g2444, 1), $then2447 = $g2201($then2446);
if ($T($g2119($test2445, $g2473)))
return $then2447
else {var $g2469 = $g2074("if"), $g2470 = [$g2074("cond")], $sequence2467 = $cases2443, $g2471 = $sequence2467.slice(1), $g2472 = $g2114($g2470, $g2471);
return [$g2469, $test2445, $then2447, $g2472]}}})}
$g2145($g2198, "when", function $g2478 ($__2475, $test2476)
{var $body2477 = $SL.call(arguments, 2);
return [$g2074("if"), $test2476, $g2201($body2477), false]})
$g2145($g2198, "unless", function $g2482 ($__2479, $test2480)
{var $body2481 = $SL.call(arguments, 2);
return [$g2074("if"), [$g2074("not"), $test2480], $g2201($body2481), false]})
$g2145($g2198, "and", function $g2502 ($__2485)
{var $values2486 = $SL.call(arguments, 1), $robject2490 = $values2486, $g2487 = (($robject2490 || false).length || 0), $g2488 = $g2119;
if ($T($g2488($g2487, 0)))
return true
else if ($T($g2488($g2487, 1)))
{var $sequence2492 = $values2486;
return $sequence2492[0]}
else {var $g2497 = $g2074("when"), $sequence2494 = $values2486, $g2498 = $sequence2494[0], $g2499 = [$g2074("and")], $sequence2496 = $values2486, $g2500 = $sequence2496.slice(1), $g2501 = $g2114($g2499, $g2500);
return [$g2497, $g2498, $g2501]}})
$g2145($g2198, "or", function $g2527 ($__2505)
{var $values2506 = $SL.call(arguments, 1), $robject2511 = $values2506, $g2507 = (($robject2511 || false).length || 0), $g2508 = $g2119;
if ($T($g2508($g2507, 0)))
return false
else if ($T($g2508($g2507, 1)))
{var $sequence2513 = $values2506;
return $sequence2513[0]}
else {var $value2509 = $g2148(), $g2518 = $g2074("bind"), $sequence2515 = $values2506, $g2519 = $sequence2515[0], $g2520 = [$value2509, $g2519], $g2521 = [$g2520], $g2522 = $g2074("if"), $g2523 = [$g2074("or")], $sequence2517 = $values2506, $g2524 = $sequence2517.slice(1), $g2525 = $g2114($g2523, $g2524), $g2526 = [$g2522, $value2509, $value2509, $g2525];
return [$g2518, $g2521, $g2526]}})
$g2145($g2198, "if-bind", function $g2535 ($__2528, $binding2529, $then2530, $relse2531)
{var $rvar2532 = $g2189($binding2529, 0), $value2533 = $g2189($binding2529, 1), $temp2534 = $g2148();
return [$g2074("bind"), [[$temp2534, $value2533]], [$g2074("if"), $temp2534, [$g2074("bind"), [[$rvar2532, $temp2534]], $then2530], $relse2531]]})
$g2145($g2198, "while", function $g2539 ($__2536, $test2537)
{var $body2538 = $SL.call(arguments, 2);
return [$g2074("%while"), $test2537, $g2201($body2538)]})
$g2145($g2198, "until", function $g2543 ($__2540, $test2541)
{var $body2542 = $SL.call(arguments, 2);
return $g2114([$g2074("while"), [$g2074("not"), $test2541]], $body2542)})
$g2145($g2198, "dotimes", function $g2562 ($__2545, $binding2546)
{var $body2547 = $SL.call(arguments, 2), $temp2548 = $g2148(), $rvar2549 = $g2189($binding2546, 0), $count2550 = $g2189($binding2546, 1), $result2551 = $g2189($binding2546, 2), $g2553 = $g2074("bind"), $g2554 = [[$temp2548, $count2550]], $g2555 = $g2074("for"), $g2556 = [[$rvar2549, 0, [$g2074("+"), $rvar2549, 1]]], $g2557 = [$g2074(">="), $rvar2549, $temp2548], $g2552 = $result2551, $g2558;
if ($T($g2552))
$g2558 = $g2552
else $g2558 = false;
var $g2559 = [$g2557, $g2558], $g2560 = [$g2555, $g2556, $g2559], $g2561 = $g2114($g2560, $body2547);
return [$g2553, $g2554, $g2561]})
{var trueQ = $g1464["true?"], $g2569 = $g1464["any?"], $g2570 = $g1464["push-last"], $g2571 = $g1464.slice, $g2572 = $g1464.third;
$g2145($g2198, "for", function $g2667 ($__2573, $clauses2574, $end2575)
{var $body2576 = $SL.call(arguments, 3), $init_clauses2577 = [], $next_clauses2578 = [], $vars2579 = $g2252($g2089, $clauses2574), $g2580 = $clauses2574, $g2581, $g2582, $g2583 = [$g2580];
while ($T(true))
{var $g2584 = $g2581, $value2589;
if ($T($g2584))
$value2589 = $g2584
else $value2589 = $g2569($g2088, $g2583);
var $g2653 = !(trueQ($value2589));
if ($T($g2653))
{var $sequence2591 = $g2580, $clause2585 = $sequence2591[0];
(function $g2668 ($clause2586)
{var $rarray2600 = $init_clauses2577, $rarray2597 = $clause2586, $start2598 = 0, $end2599 = 2, $value2601 = $rarray2597.slice($start2598, $end2599);
$rarray2600.push($value2601);
$rarray2600;
var $rarray2606 = $next_clauses2578, $sequence2605 = $clause2586, $value2607 = $sequence2605[0];
$rarray2606.push($value2607);
$rarray2606;
var $rarray2612 = $next_clauses2578, $sequence2611 = $clause2586, $value2613 = $sequence2611[2];
$rarray2612.push($value2613);
return $rarray2612})($clause2585);
var $sequence2615 = $g2580, $g2652 = $sequence2615.slice(1);
$g2580 = $g2652;
$g2583 = [$g2580]}
else break};
$g2582;
var $g2654 = $g2074("bind"), $g2655 = $g2074("while"), $sequence2626 = $end2575, $g2627 = $sequence2626, $g2628 = (($g2627 || false).length || 0), $g2629 = 0, $g2587 = ($g2628 === $g2629), $g2658;
if ($T($g2587))
$g2658 = $g2587
else {var $g2656 = $g2074("not"), $sequence2631 = $end2575, $g2657 = $sequence2631[0];
$g2658 = [$g2656, $g2657]};
var $g2659 = $g2114([$g2114([$g2074("method"), $vars2579], $body2576)], $vars2579), $g2660 = $g2114([$g2074("parallel-set!")], $next_clauses2578), $g2661 = [$g2655, $g2658, $g2659, $g2660], $g2662 = $g2114($g2661), $sequence2644 = $end2575, $sequence2645 = $sequence2644.slice(1), $g2646 = $sequence2645, $g2647 = (($g2646 || false).length || 0), $g2648 = 0, $value2649 = ($g2647 === $g2648), $g2663 = !(trueQ($value2649)), $g2666;
if ($T($g2663))
{var $g2664 = [$g2074("begin")], $sequence2651 = $end2575, $g2665 = $sequence2651.slice(1);
$g2666 = $g2114($g2664, $g2665)}
else $g2666 = false;
return [$g2654, $init_clauses2577, $g2662, $g2666]})}
$g2145($g2198, "for-each", function $g2743 ($__2670, $clauses2671, $end2672)
{var $body2673 = $SL.call(arguments, 3), $clauses2675 = $g2252(function $g2744 ($clause2674)
{return $g2114([$g2148()], $clause2674)}, $clauses2671), $endq2676 = $g2148(), $values2677 = $g2148(), $result2678 = $g2148(), $g2715 = $g2074("begin"), $vars2679 = $g2252($g2134, $clauses2675), $g2716 = $g2114([$g2114([$g2074("method"), $vars2679], $body2673)], $vars2679), $g2717 = [$g2715, $g2716], $g2723 = $g2252(function $g2745 ($clause2680)
{var $g2718 = $g2074("set!"), $sequence2694 = $clause2680, $g2719 = $sequence2694[0], $g2720 = $g2074("rest"), $sequence2696 = $clause2680, $g2721 = $sequence2696[0], $g2722 = [$g2720, $g2721];
return [$g2718, $g2719, $g2722]}, $clauses2675), $g2724 = [[$g2074("set!"), $values2677, $g2114([$g2074("%array")], $g2252($g2089, $clauses2675))]], $body2681 = $g2114($g2717, $g2723, $g2724), $g2725 = $g2074("bind"), $g2726 = $g2114($g2252(function $g2746 ($clause2682)
{var $temp2683 = $g2189($clause2682, 0), $rvar2684 = $g2189($clause2682, 1), $values2685 = $g2189($clause2682, 2);
return [$temp2683, $values2685]}, $clauses2675), [[$endq2676, false], [$result2678, false], [$values2677, $g2114([$g2074("%array")], $g2252($g2089, $clauses2675))]]), $g2727 = $g2074("until"), $g2728 = [$g2074("or"), $endq2676, [$g2074("any?"), $g2074("empty?"), $values2677]], $g2729 = $g2074("bind"), $g2730 = $g2252(function $g2747 ($clause2686)
{var $temp2687 = $g2189($clause2686, 0), $rvar2688 = $g2189($clause2686, 1), $values2689 = $g2189($clause2686, 2);
return [$rvar2688, [$g2074("first"), $temp2687]]}, $clauses2675), $sequence2698 = $end2672, $g2690 = $sequence2698[0], $g2740;
if ($T($g2690))
{var $end_test2691 = $g2690, $g2731 = $g2074("if"), $g2732 = $g2074("begin"), $g2733 = $g2074("set!"), $sequence2700 = $end2672, $results2692 = $sequence2700.slice(1), $sequence2711 = $results2692, $g2712 = $sequence2711, $g2713 = (($g2712 || false).length || 0), $g2714 = 0, $g2734 = ($g2713 === $g2714), $g2735;
if ($T($g2734))
$g2735 = [false]
else $g2735 = $results2692;
var $g2736 = $g2201($g2735), $g2737 = [$g2733, $result2678, $g2736], $g2738 = [$g2074("set!"), $endq2676, true], $g2739 = [$g2732, $g2737, $g2738];
$g2740 = [$g2731, $end_test2691, $g2739, $body2681]}
else $g2740 = $body2681;
var $g2741 = [$g2729, $g2730, $g2740], $g2742 = [$g2727, $g2728, $g2741];
return [$g2725, $g2726, $g2742, $result2678]})
$g2145($g2198, "bind-properties", function $g2754 ($__2748, $properties2749, $robject2750)
{var $body2751 = $SL.call(arguments, 3), $objectt2752 = $g2148();
return $g2114([$g2074("bind"), $g2114([[$objectt2752, $robject2750]], $g2252(function $g2755 ($property2753)
{return [$property2753, [$g2074("%get-property"), $objectt2752, $g2115($property2753)]]}, $properties2749))], $body2751)})
$g2145($g2198, "select", function $g2767 ($__2756, $value2757, $test2758)
{var $cases2759 = $SL.call(arguments, 3), $valuet2760 = $g2148(), $testt2761 = $g2148(), $test_expression2762 = function $g2768 ($test_value2763)
{return [$testt2761, $valuet2760, $test_value2763]};
return [$g2074("bind"), [[$valuet2760, $value2757], [$testt2761, $test2758]], $g2114([$g2074("cond")], $g2252(function $g2769 ($rcase2764)
{var $tests2765 = $g2189($rcase2764, 0), $then2766 = $SL.call($rcase2764, 1);
if ($T($g2119($tests2765, $g2473)))
return $rcase2764
else return $g2114([$g2114([$g2074("or")], $g2252($test_expression2762, $tests2765))], $then2766)}, $cases2759))]})
var $g2771 = $g2084("destructure", function $g2785 ($bindings2772, $values2773, $body2774)
{if ($T($g2085($values2773, $g2090)))
{var $g2775 = $g2216($bindings2772), $required2776 = $g2189($g2775, 0), $rest2777 = $g2189($g2775, 1), $key2778 = $g2189($g2775, 2), $robject2784 = $required2776, $i2779 = (($robject2784 || false).length || 0);
return $g2242(function $g2786 ($body2780, $binding2781)
{$i2779 = ($i2779 - 1);
if ($T($g2085($binding2781, $g2090)))
return [$g2074("bind"), [[$binding2781, [$g2074("element"), $values2773, $i2779]]], $body2780]
else return $g2771($binding2781, [$g2074("%get-property"), $values2773, $i2779], $body2780)}, $g2254($body2774, $values2773, $required2776, $rest2777, $key2778), $g2366($required2776))}
else {var $rvar2782 = $g2148();
return [$g2074("bind"), [[$rvar2782, $values2773]], $g2771($bindings2772, $rvar2782, $body2774)]}}, false)
$g2145($g2198, "destructuring-bind", function $g2791 ($__2787, $bindings2788, $values2789)
{var $body2790 = $SL.call(arguments, 3);
return $g2771($bindings2788, $values2789, $g2114([$g2074("begin")], $body2790))})
$g2145($g2198, "bind-methods", function $g2799 ($__2792, $bindings2793)
{var $body2794 = $SL.call(arguments, 2);
return $g2114([$g2074("bind"), $g2252($g2089, $bindings2793)], $g2252(function $g2800 ($binding2795)
{var $identifier2796 = $g2189($binding2795, 0), $rarguments2797 = $g2189($binding2795, 1), $body2798 = $SL.call($binding2795, 2);
return [$g2074("set!"), $identifier2796, $g2114([$g2074("method"), $rarguments2797], $body2798)]}, $bindings2793), $body2794)})
$g2145($g2198, "inc!", function $g2810 ($__2802, $robject2803, $value2804)
{var $g2806 = $g2074("set!"), $g2807 = $g2074("+"), $g2805 = $value2804, $g2808;
if ($T($g2805))
$g2808 = $g2805
else $g2808 = 1;
var $g2809 = [$g2807, $robject2803, $g2808];
return [$g2806, $robject2803, $g2809]})
$g2145($g2198, "dec!", function $g2820 ($__2812, $robject2813, $value2814)
{var $g2816 = $g2074("set!"), $g2817 = $g2074("-"), $g2815 = $value2814, $g2818;
if ($T($g2815))
$g2818 = $g2815
else $g2818 = 1;
var $g2819 = [$g2817, $robject2813, $g2818];
return [$g2816, $robject2813, $g2819]})
$g2145($g2198, "+", function $g2838 ($__2821)
{var $values2822 = $SL.call(arguments, 1), $sequence2833 = $values2822, $g2834 = $sequence2833, $g2835 = (($g2834 || false).length || 0), $g2836 = 0, $g2837 = ($g2835 === $g2836);
if ($T($g2837))
return 0
else return $g2114([$g2074("%plus")], $values2822)})
$g2145($g2198, "-", function $g2857 ($__2839, $minuend2840)
{var $subtrahends2841 = $SL.call(arguments, 2), $sequence2852 = $subtrahends2841, $g2853 = $sequence2852, $g2854 = (($g2853 || false).length || 0), $g2855 = 0, $g2856 = ($g2854 === $g2855);
if ($T($g2856))
return [$g2074("%native-call"), "-", $minuend2840]
else return $g2114([$g2074("%minus"), $minuend2840], $subtrahends2841)})
$g2145($g2198, "*", function $g2875 ($__2858)
{var $values2859 = $SL.call(arguments, 1), $sequence2870 = $values2859, $g2871 = $sequence2870, $g2872 = (($g2871 || false).length || 0), $g2873 = 0, $g2874 = ($g2872 === $g2873);
if ($T($g2874))
return 1
else return $g2114([$g2074("%times")], $values2859)})
$g2145($g2198, "/", function $g2894 ($__2876, $numerator2877)
{var $denominators2878 = $SL.call(arguments, 2), $sequence2889 = $denominators2878, $g2890 = $sequence2889, $g2891 = (($g2890 || false).length || 0), $g2892 = 0, $g2893 = ($g2891 === $g2892);
if ($T($g2893))
return [$g2074("%divide"), 1, $numerator2877]
else return $g2114([$g2074("%divide"), $numerator2877], $denominators2878)})
$g2145($g2198, "call-next-method", function $g2896 ($__2895)
{return [[$g2074("%get-property"), $g2074("next-method"), "apply"], [$g2074("%native"), "null"], [$g2074("%native"), "arguments"]]})
var trueQ = $g1464["true?"], $g2897 = $g2084("transform_quoted", function $g2923 ($form2898)
{if ($T($g2085($form2898, $g2086)))
{var $sequence2910 = $form2898, $g2911 = $sequence2910, $g2912 = (($g2911 || false).length || 0), $g2913 = 0, $value2914 = ($g2912 === $g2913), $g2919 = !(trueQ($value2914)), $g2922;
if ($T($g2919))
{var $sequence2916 = $form2898, $g2920 = $sequence2916[0], $g2921 = $g2115($g2920);
$g2922 = $g2119($g2921, "%comma")}
else $g2922 = false;
if ($T($g2922))
{var $sequence2918 = $form2898;
return $sequence2918[1]}
else return $g2114([$g2074("%array")], $g2252($g2897, $form2898))}
else if ($T($g2085($form2898, $g2090)))
return [$g2074("symbol"), $g2115($form2898)]
else return $form2898}, false)
$g2145($g2198, "%backquote", function $g2926 ($__2924, $exp2925)
{return $g2897($exp2925)})
{var $g2934 = $K("message"), $g2927 = $g1464.signal, $g2928 = $g1464.make, $g2929 = $g1464["<error>"];
$g2145($g2198, "%comma", function $g2935 ($__2930, $value2931)
{var $error2933 = $g2928($g2929, $g2934, "comma not inside backquote");
throw($error2933);
return false})}
var $g2936 = $g2928($g2929, $g2934, "unsupported name for call in dot")
{var $g2939 = $g1464["<string>"];
$g2145($g2198, ".", function $g2955 ($__2940, $value2941)
{var $calls2942 = $SL.call(arguments, 2);
return $g2242(function $g2956 ($value2943, $call2944)
{var $property2945 = $g2189($call2944, 0), $rarguments2946 = $SL.call($call2944, 1), $g2951 = $g2074("%get-property"), $g2947 = $property2945, $g2948 = $g2085, $g2952;
if ($T($g2948($g2947, $g2939)))
$g2952 = $property2945
else if ($T($g2948($g2947, $g2090)))
$g2952 = $g2115($property2945)
else {var $error2950 = $g2936;
throw($error2950);
$g2952 = false};
var $g2953 = [$g2951, $value2943, $g2952], $g2954 = [$g2953];
return $g2114($g2954, $rarguments2946)}, $value2941, $calls2942)})}
var $g2958 = $g2084("simplify_arguments", function $g2970 ($rarguments2959)
{var $g2960 = $g2216($rarguments2959), $required2961 = $g2189($g2960, 0), $rest2962 = $g2189($g2960, 1), $key2963 = $g2189($g2960, 2), $required2965 = $g2252(function $g2971 ($argument2964)
{if ($T($g2085($argument2964, $g2086)))
{var $sequence2967 = $argument2964;
return $sequence2967[0]}
else return $argument2964}, $required2961), $g2968;
if ($T($rest2962))
$g2968 = $g2114([$g2236], $rest2962)
else $g2968 = [];
var $g2969;
if ($T($key2963))
$g2969 = $g2114([$g2237], $key2963)
else $g2969 = [];
return $g2114($required2965, $g2968, $g2969)}, false)
var trueQ = $g1464["true?"], $g2976 = $g1464[">"], $g2977 = $g1464["%keys"], $g2978 = $g2084("make_function_definer", function $g3035 ($macro_name2979, $definer_name2980)
{var $g2981 = $SL.call(arguments, 2), $g2982 = $g2977($g2981, {"type/existing?":false,
"record?":false}), $typesexistingq2983 = $g2982["type/existing?"], $recordq2984 = $g2982["record?"];
return function $g3036 ($env2985, $identifier2986, $rarguments2987)
{var $body2988 = $SL.call(arguments, 3), $g2989;
if ($T($g2123($identifier2986)))
{var $sequence2997 = $identifier2986, $g3024 = $sequence2997[1], $g3025 = $g2116($g3024);
$g2989 = [true, $g3025]}
else $g2989 = [false, $identifier2986];
var $setterq2990 = $g2189($g2989, 0), $identifier2991 = $g2189($g2989, 1), $g2992 = $g2085($identifier2991, $g2090), $value2999;
if ($T($g2992))
$value2999 = $g2992
else $value2999 = $setterq2990;
var $g3026 = !(trueQ($value2999));
if ($T($g3026))
{var $error3001 = $g2928($g2929, $g2934, $g2114($macro_name2979, ": ", "name not <var> or (setter <var>)"));
throw($error3001);
false};
var $g3027;
if ($T($typesexistingq2983))
{var $sequence3012 = $rarguments2987, $g3013 = $sequence3012, $g3014 = (($g3013 || false).length || 0), $g3015 = 0;
$g3027 = ($g3014 === $g3015)}
else $g3027 = false;
if ($T($g3027))
{var $error3017 = $g2928($g2929, $g2934, $g2114($macro_name2979, ": ", "method has no arguments"));
throw($error3017);
false};
var $simplified_arguments2993 = $g2958($rarguments2987), $method_definition2994 = $g2175($g2114([$g2074("method"), $simplified_arguments2993], $body2988), $env2985);
if ($T($recordq2984))
$g2145($env2985, "module", "functions", $g2115($identifier2991), $method_definition2994);
var $g3028 = $g2074("define"), $g3029 = [$g2074($definer_name2980), [$g2074("%native-name"), $g2115($identifier2991)], $method_definition2994, $setterq2990], $g3033;
if ($T($typesexistingq2983))
{var $sequence3019 = $rarguments2987, $head2995 = $sequence3019[0], $g3031;
if ($T($g2085($head2995, $g2086)))
{var $robject3021 = $head2995, $g3030 = (($robject3021 || false).length || 0);
$g3031 = $g2976($g3030, 1)}
else $g3031 = false;
var $g3032;
if ($T($g3031))
{var $sequence3023 = $head2995;
$g3032 = $sequence3023[1]}
else $g3032 = $g2074("<object>");
$g3033 = [$g3032, $identifier2991]}
else $g3033 = [];
var $g3034 = $g2114($g3029, $g3033);
return [$g3028, $identifier2991, $g3034]}}, false)
{var $g3062 = $K("type/existing?"), $g3063 = $K("record?"), trueQ = $g1464["true?"], $g3042 = $g1464.apply, $g3043 = [["define-function", "%make-function", $g3062, false, $g3063, true], ["define-method", "%make-method", $g3062, true]], $g3044, $g3045, $g3046 = [$g3043];
while ($T(true))
{var $g3047 = $g3044, $value3051;
if ($T($g3047))
$value3051 = $g3047
else $value3051 = $g2569($g2088, $g3046);
var $g3061 = !(trueQ($value3051));
if ($T($g3061))
{var $sequence3053 = $g3043, $rarguments3048 = $sequence3053[0];
(function $g3064 ($rarguments3049)
{var $sequence3055 = $rarguments3049, $g3058 = $sequence3055[0], $g3059 = $g3042($g2978, $rarguments3049);
return $g2145($g2198, $g3058, $g3059)})($rarguments3048);
var $sequence3057 = $g3043, $g3060 = $sequence3057.slice(1);
$g3043 = $g3060;
$g3046 = [$g3043]}
else break};
$g3045}
$g2145($g2198, "define-generic", function $g3068 ($__3065, $identifier3066, $rarguments3067)
{return [$g2074("define"), $identifier3066, [$g2074("%make-generic"), [$g2074("%native-name"), $g2115($identifier3066)]]]})
{var trueQ = $g1464["true?"];
$g2145($g2198, "define-class", function $g3141 ($__3074, $identifier3075, $superclass3076)
{var $properties3077 = $SL.call(arguments, 3), $robject3078 = [$g2074("%object")], $g3079 = $properties3077, $g3080, $g3081, $g3082 = [$g3079];
while ($T(true))
{var $g3083 = $g3080, $value3087;
if ($T($g3083))
$value3087 = $g3083
else $value3087 = $g2569($g2088, $g3082);
var $g3135 = !(trueQ($value3087));
if ($T($g3135))
{var $sequence3089 = $g3079, $property3084 = $sequence3089[0];
(function $g3142 ($property3085)
{if ($T($g2085($property3085, $g2086)))
{var $rarray3094 = $robject3078, $sequence3093 = $property3085, $g3130 = $sequence3093[0], $value3095 = $g2115($g3130);
$rarray3094.push($value3095);
$rarray3094;
var $rarray3100 = $robject3078, $g3131 = $g2074("method"), $g3132 = [], $sequence3099 = $property3085, $g3133 = $sequence3099[1], $value3101 = [$g3131, $g3132, $g3133];
$rarray3100.push($value3101);
return $rarray3100}
else {var $rarray3104 = $robject3078, $value3105 = $g2115($property3085);
$rarray3104.push($value3105);
$rarray3104;
var $rarray3108 = $robject3078, $value3109 = undefined;
$rarray3108.push($value3109);
return $rarray3108}})($property3084);
var $sequence3111 = $g3079, $g3134 = $sequence3111.slice(1);
$g3079 = $g3134;
$g3082 = [$g3079]}
else break};
$g3081;
var $g3136 = $g2074("define"), $g3137 = $g2074("%make-class"), $sequence3123 = $superclass3076, $g3124 = $sequence3123, $g3125 = (($g3124 || false).length || 0), $g3126 = 0, $value3127 = ($g3125 === $g3126), $g3138 = !(trueQ($value3127)), $g3139;
if ($T($g3138))
{var $sequence3129 = $superclass3076;
$g3139 = $sequence3129[0]}
else $g3139 = false;
var $g3140 = [$g3137, $g3139, $robject3078];
return [$g3136, $identifier3075, $g3140]})}
{var $g3175 = $K("names"), $g3145, $g3146, $g3147;
$g2145($g2198, "define-module", function $g3176 ($env3148, $__3149)
{var $g3150 = $SL.call(arguments, 2), $g3151 = $g2977($g3150, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), $rimport3152 = $g3151["import"], $rexport3153 = $g3151["export"], $compile_time_import3154 = $g3151["compile-time-import"], $inline3155 = $g3151.inline;
$g2145($env3148, "module", "exports", $g2252($g2135, $rexport3153));
$g2173(function $g3177 ($rimport3156)
{var $g3168;
if ($T($g2085($rimport3156, $g2086)))
{var $sequence3161 = $rimport3156;
$g3168 = $sequence3161[0]}
else $g3168 = $rimport3156;
var $module_name3157 = $g2115($g3168), $g3170;
if ($T($g2085($rimport3156, $g2086)))
{var $sequence3163 = $rimport3156, $g3169 = $sequence3163.slice(1);
$g3170 = $g2252($g2135, $g3169)}
else $g3170 = false;
return $g3145($env3148, $module_name3157, $g3175, $g3170)}, $compile_time_import3154);
$g2145($env3148, "module", "inline", $g2252($g2135, $inline3155));
return $g2201($g2252(function $g3178 ($rimport3158)
{var $g3171;
if ($T($g2085($rimport3158, $g2086)))
{var $sequence3165 = $rimport3158;
$g3171 = $sequence3165[0]}
else $g3171 = $rimport3158;
var $module_name3159 = $g2115($g3171), $g3172 = $g2164($env3148, "module"), $g3174;
if ($T($g2085($rimport3158, $g2086)))
{var $sequence3167 = $rimport3158, $g3173 = $sequence3167.slice(1);
$g3174 = $g2252($g2135, $g3173)}
else $g3174 = false;
$g3146($g3172, $module_name3159, $g3175, $g3174);
return $g3147($module_name3159, $env3148)}, $rimport3152))})}
$g3147 = $g2084("make_import_definition", function $g3182 ($module_name3179, $env3180)
{var $identifier3181 = $g2148();
$g2145($env3180, "import-identifiers", $module_name3179, $identifier3181);
return [$g2074("define"), $identifier3181, [[$g2074("%native"), "require"], $module_name3179]]}, false)
$g2145($g2198, "define-macro", function $g3187 ($env3183, $identifier3184, $rarguments3185)
{var $body3186 = $SL.call(arguments, 3);
return [$g2074("begin"), $g2114([$g2074("define-function"), $identifier3184, $g2114([$g2148()], $rarguments3185)], $body3186), [$g2074("set!"), [$g2074("%get-property"), $identifier3184, "%macro?"], true]]})
$g2145($g2198, "define-symbol-macro", function $g3192 ($env3188, $identifier3189, $rarguments3190)
{var $body3191 = $SL.call(arguments, 3);
return [$g2074("begin"), $g2114([$g2074("define-function"), $identifier3189, []], $body3191), [$g2074("set!"), [$g2074("%get-property"), $identifier3189, "%symbol-macro?"], true]]})
$g2145($g2198, "handler-case", function $g3209 ($__3196, $body3197)
{var $cases3198 = $SL.call(arguments, 2), $condition_var3199 = $g2148();
return [$g2074("%try"), $body3197, $condition_var3199, $g2114([$g2074("cond")], $g2252(function $g3210 ($rcase3200)
{var $g3201 = $rcase3200[0], $type3202 = $g2189($g3201, 0), $g3203 = $SL.call($g3201, 1), $g3204 = $g2977($g3203, {condition:false}), $condition3205 = $g3204.condition, $body3206 = $SL.call($rcase3200, 1), $g3207 = [[$g2074("instance?"), $condition_var3199, $type3202]], $g3208;
if ($T($condition3205))
$g3208 = [$g2114([$g2074("bind"), [[$condition3205, $condition_var3199]]], $body3206)]
else $g3208 = $body3206;
return $g2114($g3207, $g3208)}, $cases3198))]})
var $g3211, $g3212 = $g1464.identity, $g3213 = $g2084("lift_defines", function $g3216 ($exp3214, $env3215)
{return $g3211($exp3214, $env3215, $g3212)}, false)
{var $g3223, $g3224 = $g1464["has?"], $g3225;
$g3211 = $g2084("lift_define", function $g3275 ($exp3226, $env3227, $k3228)
{if ($T($g2091($exp3226)))
{var $sequence3266 = $exp3226, $g3271 = $sequence3266[0], $g3229 = $g2115($g3271), $g3230 = $g2119;
if ($T($g3230($g3229, "%bind")))
{var $__3231 = $g2189($exp3226, 0), $g3232 = $exp3226[1], $rvar3233 = $g2189($g3232, 0), $value3234 = $g2189($g3232, 1), $body3235 = $g2189($exp3226, 2);
return $g3211($value3234, $env3227, function $g3276 ($lvalue3236, $env3237)
{return $g3211($body3235, $env3237, function $g3277 ($lbody3238, $env3239)
{return $k3228([$g2074("%bind"), [$rvar3233, $lvalue3236], $lbody3238], $env3239)})})}
else if ($T($g3230($g3229, "%try")))
{var $m3240 = $g2189($exp3226, 0), $e13241 = $g2189($exp3226, 1), $v3242 = $g2189($exp3226, 2), $e23243 = $g2189($exp3226, 3);
return $g3223([$e13241, $e23243], $env3227, function $g3278 ($let3244, $env3245)
{var $le13246 = $g2189($let3244, 0), $le23247 = $g2189($let3244, 1);
return $k3228([$m3240, $le13246, $v3242, $le23247], $env3245)})}
else {var $g3248 = $g3230($g3229, "%method"), $g3272;
if ($T($g3248))
$g3272 = $g3248
else $g3272 = $g3230($g3229, "%set");
if ($T($g3272))
{var $m3249 = $g2189($exp3226, 0), $e13250 = $g2189($exp3226, 1), $e23251 = $g2189($exp3226, 2);
return $g3211($e23251, $env3227, function $g3279 ($le23252, $env3253)
{return $k3228([$m3249, $e13250, $le23252], $env3253)})}
else {var $g3254 = $g3230($g3229, "%begin"), $g3273;
if ($T($g3254))
$g3273 = $g3254
else {var $g3255 = $g3230($g3229, "%if");
if ($T($g3255))
$g3273 = $g3255
else $g3273 = $g3230($g3229, "%while")};
if ($T($g3273))
{var $m3256 = $g2189($exp3226, 0), $et3257 = $SL.call($exp3226, 1);
return $g3223($et3257, $env3227, function $g3280 ($let3258, $env3259)
{return $k3228($g2114([$m3256], $let3258), $env3259)})}
else if ($T($g3230($g3229, "define")))
{var $__3260 = $g2189($exp3226, 0), $rvar3261 = $g2189($exp3226, 1), $value3262 = $g2189($exp3226, 2), $exportq3263 = $g2189($exp3226, 3), $name3264 = $g2115($rvar3261), $robject3269 = $g2164($env3227, "defined?"), $property3270 = $name3264, $g3274 = $HP.call($robject3269,$property3270);
if ($T($g3274))
return $k3228([$g2074("%set"), $rvar3261, $value3262], $env3227)
else {$g2145($env3227, "defined?", $name3264, true);
return [$g2074("%begin"), [$g2074("%define"), $rvar3261], $k3228([$g2074("%set"), $rvar3261, $value3262], $env3227)]}}
else return $g3225($exp3226, $env3227, $k3228)}}}
else return $k3228($exp3226, $env3227)}, false)}
$g3223 = $g2084("lift_defineT", function $g3299 ($expt3281, $env3282, $k3283)
{var $sequence3294 = $expt3281, $g3295 = $sequence3294, $g3296 = (($g3295 || false).length || 0), $g3297 = 0, $g3298 = ($g3296 === $g3297);
if ($T($g3298))
return $k3283([], $env3282)
else return $g3225($expt3281, $env3282, $k3283)}, false)
$g3225 = $g2084("lift_defineTT", function $g3315 ($exp3300, $env3301, $k3302)
{var $sequence3308 = $exp3300, $g3311 = $sequence3308[0], $g3314 = function $g3316 ($t3303, $env3304)
{var $sequence3310 = $exp3300, $g3312 = $sequence3310.slice(1), $g3313 = function $g3317 ($tt3305, $env3306)
{return $k3302($g2114([$t3303], $tt3305), $env3306)};
return $g3223($g3312, $env3304, $g3313)};
return $g3211($g3311, $env3301, $g3314)}, false)
var $g3318 = $g2066()
$g2145($g3318, "next-method", function $g3320 ($__3319)
{return [$g2074("%next-method"), $g2074("%this-method")]})
var trueQ = $g1464["true?"], $g3323 = $g2084("find_macro_definition", function $g3356 ($form3324, $env3325)
{var $g3326 = $form3324, $g3327 = $g2085;
if ($T($g3327($g3326, $g2086)))
{var $sequence3340 = $form3324, $g3341 = $sequence3340, $g3342 = (($g3341 || false).length || 0), $g3343 = 0, $g3352 = ($g3342 === $g3343);
if ($T($g3352))
{var $error3345 = "Empty form";
throw($error3345);
false};
var $sequence3347 = $form3324, $g3353 = $sequence3347[0], $name3328 = $g2115($g3353), $value3349 = $g2164($env3325, "bound?", $name3328), $g3354 = !(trueQ($value3349));
if ($T($g3354))
return $env3325.macros[$name3328]}
else if ($T($g3327($g3326, $g2090)))
{var $name3329 = $g2115($form3324), $value3351 = $g2164($env3325, "bound?", $name3329), $g3355 = !(trueQ($value3351));
if ($T($g3355))
return $env3325["symbol-macros"][$name3329]}}, false)
var $g3358 = $g2084("macroexpand_1", function $g3366 ($form3359, $env3360)
{var $g3361 = $g3323($form3359, $env3360);
if ($T($g3361))
{var $macro3362 = $g3361, $g3365;
if ($T($g2085($form3359, $g2086)))
{var $sequence3364 = $form3359;
$g3365 = $sequence3364.slice(1)}
else $g3365 = $form3359;
return $g3042($macro3362, $env3360, $g3365)}
else return $form3359}, false)
var trueQ = $g1464["true?"], $g3367 = $g2084("macroexpand", function $g3375 ($form3368, $env3369)
{var $doneq3370;
while ($T(true))
{var $value3373 = $doneq3370, $g3374 = !(trueQ($value3373));
if ($T($g3374))
{var $expanded3371 = $g3358($form3368, $env3369);
$doneq3370 = $g2119($expanded3371, $form3368);
$form3368 = $expanded3371}
else break};
return $form3368}, false)
$g2175 = $g2084("macroexpand_all", function $g3388 ($form3379, $env3380)
{var $g3381 = $form3379, $g3382 = $g2085;
if ($T($g3382($g3381, $g2086)))
if ($T($g3323($form3379, $env3380)))
return $g2175($g3367($form3379, $env3380), $env3380)
else {var $g3383 = $g2165($form3379, $env3380);
if ($T($g3383))
{var $expander3384 = $g3383, $sequence3386 = $form3379, $g3387 = $sequence3386.slice(1);
return $g3042($expander3384, $env3380, $g3387)}
else return $g2252($g2122($g2175, $env3380), $form3379)}
else if ($T($g3382($g3381, $g2090)))
if ($T($g3323($form3379, $env3380)))
return $g2175($g3367($form3379, $env3380), $env3380)
else return $form3379
else return $form3379}, false)
var $g3389 = $g1464["member?"], $g3390 = $g2084("find_module_for_definition", function $g3396 ($definition_name3391, $env3392)
{return $g2569(function $g3397 ($rimport3393)
{var $module3394 = $g2189($rimport3393, 0), $names3395 = $g2189($rimport3393, 1);
if ($T($g3389($definition_name3391, $names3395)))
return $module3394}, $g2164($env3392, "module", "imports"))}, false)
var $g3399 = $g2084("find_import_identifier", function $g3404 ($definition_name3400, $env3401)
{var $g3402 = $g3390($definition_name3400, $env3401);
if ($T($g3402))
{var $module3403 = $g3402;
return $g2164($env3401, "import-identifiers", $g2164($module3403, "name"))}}, false)
var $g3406 = $g1464["set-subtract!"], $g3407, $g3408 = $g1464["as-set"], $g3409 = $g1464["object-properties"], $g3410 = $g2084("define_free_variables", function $g3436 ($exp3411, $env3412)
{var $variables3413 = $g3406($g3406($g3407($exp3411), $g3408($g2252($g2074, $g3409($g2164($env3412, "defined?"))))), $g2075), $sequence3428 = $variables3413, $g3429 = $sequence3428, $g3430 = (($g3429 || false).length || 0), $g3431 = 0, $g3432 = ($g3430 === $g3431);
if ($T($g3432))
return $exp3411
else return $g2114([$g2074("%begin")], $g2252(function $g3437 ($variable3414)
{var $name3415 = $g2115($variable3414);
$g2145($env3412, "defined?", $name3415, true);
var $g3433 = [[$g2074("%define"), $variable3414]], $g3416 = $g3399($name3415, $env3412), $g3434;
if ($T($g3416))
{var $import_identifier3417 = $g3416;
$g3434 = [[$g2074("%set"), $variable3414, [$g2074("%get-property"), $import_identifier3417, $name3415]]]}
else $g3434 = [];
var $g3435 = $g2114($g3433, $g3434);
return $g2201($g3435)}, $variables3413), [$exp3411])}, false)
var trueQ = $g1464["true?"], $g3439 = $g1464.choose, $g3440 = $g2084("define_free_variables2", function $g3475 ($exp3441, $env3442)
{var $free3443 = $g3406($g3407($exp3441), $g2075), $variables3445 = $g3439(function $g3476 ($variable3444)
{var $robject3454 = $g2164($env3442, "definition-names"), $property3455 = $g2115($variable3444), $value3456 = $HP.call($robject3454,$property3455);
return !(trueQ($value3456))}, $free3443), $sequence3467 = $variables3445, $g3468 = $sequence3467, $g3469 = (($g3468 || false).length || 0), $g3470 = 0, $g3471 = ($g3469 === $g3470);
if ($T($g3471))
return $exp3441
else return $g2114([$g2074("%begin")], $g2252(function $g3477 ($variable3446)
{var $name3447 = $g2115($variable3446);
$g2145($env3442, "defined?", $name3447, true);
var $g3472 = [[$g2074("%define"), $variable3446]], $g3448 = $g3399($name3447, $env3442), $g3473;
if ($T($g3448))
{var $old_import_identifier3449 = $g3448, $import_identifier3450 = $g2164($env3442, "new-identifiers", $g2115($old_import_identifier3449));
$g3473 = [[$g2074("%set"), $variable3446, [$g2074("%get-property"), $import_identifier3450, $name3447]]]}
else $g3473 = [];
var $g3474 = $g2114($g3472, $g3473);
return $g2201($g3474)}, $variables3445), [$exp3441])}, false)
{var trueQ = $g1464["true?"], $g3494 = $g1464["set-union!"];
$g3407 = $g2084("find_free_variables", function $g3589 ($exp3495)
{var $g3570;
if ($T($g2085($exp3495, $g2086)))
{var $sequence3539 = $exp3495, $g3540 = $sequence3539, $g3541 = (($g3540 || false).length || 0), $g3542 = 0, $value3543 = ($g3541 === $g3542);
$g3570 = !(trueQ($value3543))}
else $g3570 = false;
if ($T($g3570))
{var $sequence3545 = $exp3495, $head3496 = $sequence3545[0], $name3497;
if ($T($g2085($head3496, $g2090)))
$name3497 = $g2115($head3496)
else $name3497 = false;
var $g3498 = $name3497, $g3499 = $g2119;
if ($T($g3499($g3498, "%method")))
{var $__3500 = $g2189($exp3495, 0), $rarguments3501 = $g2189($exp3495, 1), $body3502 = $g2189($exp3495, 2);
return $g3406($g3407($body3502), $g3408($rarguments3501))}
else if ($T($g3499($g3498, "%bind")))
{var $__3503 = $g2189($exp3495, 0), $g3504 = $exp3495[1], $rvar3505 = $g2189($g3504, 0), $value3506 = $g2189($g3504, 1), $body3507 = $g2189($exp3495, 2);
return $g3494($g3406($g3407($body3507), $g3408([$rvar3505])), $g3407($value3506))}
else if ($T($g3499($g3498, "%begin")))
{var $definitions3508 = [], $g3575 = function $g3590 ($result3509, $e3510)
{var $g3573;
if ($T($g2091($e3510)))
{var $sequence3547 = $e3510, $g3571 = $sequence3547[0], $g3572 = $g2074("%define");
$g3573 = $g2119($g3571, $g3572)}
else $g3573 = false;
var $g3574;
if ($T($g3573))
{var $rarray3552 = $definitions3508, $sequence3551 = $e3510, $value3553 = $sequence3551[1];
$rarray3552.push($value3553);
$rarray3552;
$g3574 = []}
else $g3574 = $g3407($e3510);
return $g2114($result3509, $g3574)}, $g3576 = [], $sequence3555 = $exp3495, $g3577 = $sequence3555.slice(1), $g3578 = $g2242($g3575, $g3576, $g3577), $g3579 = $g3408($g3578), $g3580 = $g3408($definitions3508);
return $g3406($g3579, $g3580)}
else if ($T($g3499($g3498, "%try")))
{var $__3511 = $g2189($exp3495, 0), $e13512 = $g2189($exp3495, 1), $v3513 = $g2189($exp3495, 2), $e23514 = $g2189($exp3495, 3);
return $g3406($g3494($g3408($g3407($e13512)), $g3408($g3407($e23514))), $g3408([$v3513]))}
else {var $g3515 = $g3499($g3498, "%set"), $g3581;
if ($T($g3515))
$g3581 = $g3515
else {var $g3516 = $g3499($g3498, "%if");
if ($T($g3516))
$g3581 = $g3516
else {var $g3517 = $g3499($g3498, "%while");
if ($T($g3517))
$g3581 = $g3517
else {var $g3518 = $g3499($g3498, "%array");
if ($T($g3518))
$g3581 = $g3518
else {var $g3519 = $g3499($g3498, "%object");
if ($T($g3519))
$g3581 = $g3519
else {var $g3520 = $g3499($g3498, "%infix");
if ($T($g3520))
$g3581 = $g3520
else {var $g3521 = $g3499($g3498, "%get-property");
if ($T($g3521))
$g3581 = $g3521
else {var $g3522 = $g3499($g3498, "%native-call");
if ($T($g3522))
$g3581 = $g3522
else {var $g3523 = $g3499($g3498, "%plus");
if ($T($g3523))
$g3581 = $g3523
else {var $g3524 = $g3499($g3498, "%minus");
if ($T($g3524))
$g3581 = $g3524
else {var $g3525 = $g3499($g3498, "%times");
if ($T($g3525))
$g3581 = $g3525
else $g3581 = $g3499($g3498, "%divide")}}}}}}}}}};
if ($T($g3581))
{var $g3582 = [], $sequence3557 = $exp3495, $g3583 = $sequence3557.slice(1), $g3584 = $g2252($g3407, $g3583), $g3585 = $g2242($g2114, $g3582, $g3584);
return $g3408($g3585)}
else {var $g3526 = $g3499($g3498, "%native"), $g3586;
if ($T($g3526))
$g3586 = $g3526
else {var $g3527 = $g3499($g3498, "%native-name");
if ($T($g3527))
$g3586 = $g3527
else $g3586 = $g3499($g3498, "%define")};
if ($T($g3586))
return $g3408([])
else {var $rfunction3566 = $g3494, $values3567 = $g2252($g3407, $exp3495), $g3568 = $values3567, $g3587 = $g3568[0], $g3569 = $values3567, $g3588 = $g3569.slice(1);
return $g2242($rfunction3566, $g3587, $g3588)}}}}
else if ($T($g2085($exp3495, $g2090)))
return $g3408([$exp3495])
else return $g3408([])}, false)}
var trueQ = $g1464["true?"], $g3591 = $g2084("ensure_naming_structure", function $g3602 ($env3592, $module_name3593, $name3594)
{var $value3597 = $g2164($env3592, "identifiers", $module_name3593), $g3600 = !(trueQ($value3597));
if ($T($g3600))
$g2145($env3592, "identifiers", $module_name3593, $g2066());
var $module_renamings3595 = $g2164($env3592, "identifiers", $module_name3593), $value3599 = $g2164($module_renamings3595, $name3594), $g3601 = !(trueQ($value3599));
if ($T($g3601))
$g2145($module_renamings3595, $name3594, []);
return $env3592}, false)
var $g3604 = $g2084("get_module_nameSname", function $g3609 ($identifier3605)
{var $g3606 = $g2164($identifier3605, "module"), $g3607;
if ($T($g3606))
$g3607 = $g3606
else $g3607 = "";
var $g3608 = $g2115($identifier3605);
return [$g3607, $g3608]}, false)
var trueQ = $g1464["true?"], $g3611 = $g1464.push, $g3612 = $g2084("rename_identifiers", function $g3628 ($identifiers3613, $env3614)
{return $g2252(function $g3629 ($identifier3615)
{var $g3616 = $g3604($identifier3615), $module_name3617 = $g2189($g3616, 0), $name3618 = $g2189($g3616, 1), $value3621 = $g2164($identifier3615, "generated?"), $g3626 = !(trueQ($value3621)), $g3627;
if ($T($g3626))
$g3627 = $name3618
else $g3627 = false;
var $new_identifier3619 = $g2148($g3627);
$g3591($env3614, $module_name3617, $name3618);
var $rarray3624 = $g2164($env3614, "identifiers", $module_name3617, $name3618), $value3625 = $new_identifier3619;
$rarray3624.unshift($value3625);
$rarray3624;
return $new_identifier3619}, $identifiers3613)}, false)
var trueQ = $g1464["true?"], $g3636 = $g1464.pop, $g3637 = $g2084("restore_identifiers", function $g3660 ($identifiers3638, $env3639)
{var $g3640 = $identifiers3638, $g3641, $g3642, $g3643 = [$g3640];
while ($T(true))
{var $g3644 = $g3641, $value3651;
if ($T($g3644))
$value3651 = $g3644
else $value3651 = $g2569($g2088, $g3643);
var $g3659 = !(trueQ($value3651));
if ($T($g3659))
{var $sequence3653 = $g3640, $identifier3645 = $sequence3653[0];
(function $g3661 ($identifier3646)
{var $g3647 = $g3604($identifier3646), $module_name3648 = $g2189($g3647, 0), $name3649 = $g2189($g3647, 1), $rarray3655 = $g2164($env3639, "identifiers", $module_name3648, $name3649);
return $rarray3655.shift()})($identifier3645);
var $sequence3657 = $g3640, $g3658 = $sequence3657.slice(1);
$g3640 = $g3658;
$g3643 = [$g3640]}
else break};
return $g3642}, false)
var $g3662 = $g2066()
var $g3665 = $g2084("find_identifier", function $g3675 ($identifier3666, $env3667)
{var $g3668 = $g3604($identifier3666), $module_name3669 = $g2189($g3668, 0), $name3670 = $g2189($g3668, 1), $g3671 = $g2164($env3667, "identifiers", $module_name3669, $name3670);
if ($T($g3671))
{var $renamings3672 = $g3671, $sequence3674 = $renamings3672;
return $sequence3674[0]}
else return $g3662}, false)
var $g3684 = $g1464["second-setter"], $g3685 = $g2084("alpha_convert", function $g3733 ($form3686, $env3687)
{var $g3688 = $form3686, $g3689 = $g2085;
if ($T($g3689($g3688, $g2086)))
{var $sequence3723 = $form3686, $g3732 = $sequence3723[0], $g3690 = $g2115($g3732), $g3691 = $g2119;
if ($T($g3691($g3690, "%method")))
{var $__3692 = $g2189($form3686, 0), $rarguments3693 = $g2189($form3686, 1), $body3694 = $g2189($form3686, 2), $new_arguments3695 = $g3612($rarguments3693, $env3687), $new_body3696 = $g3685($body3694, $env3687), $result3697 = [$__3692, $new_arguments3695, $new_body3696];
$g3637($rarguments3693, $env3687);
return $result3697}
else if ($T($g3691($g3690, "%bind")))
{var $__3698 = $g2189($form3686, 0), $g3699 = $form3686[1], $rvar3700 = $g2189($g3699, 0), $value3701 = $g2189($g3699, 1), $body3702 = $g2189($form3686, 2), $new_value3703 = $g3685($value3701, $env3687), $g3704 = $g3612([$rvar3700], $env3687), $new_var3705 = $g2189($g3704, 0), $result3706 = [$g2074("%bind"), [$new_var3705, $new_value3703], $g3685($body3702, $env3687)];
$g3637([$rvar3700], $env3687);
return $result3706}
else if ($T($g3691($g3690, "%try")))
{var $__3707 = $g2189($form3686, 0), $body3708 = $g2189($form3686, 1), $rvar3709 = $g2189($form3686, 2), $rcatch3710 = $g2189($form3686, 3), $new_body3711 = $g3685($body3708, $env3687), $g3712 = $g3612([$rvar3709], $env3687), $new_var3713 = $g2189($g3712, 0), $result3714 = [$g2074("%try"), $new_body3711, $new_var3713, $g3685($rcatch3710, $env3687)];
$g3637([$rvar3709], $env3687);
return $result3714}
else if ($T($g3691($g3690, "%define")))
{var $__3715 = $g2189($form3686, 0), $identifier3716 = $g2189($form3686, 1), $g3717 = $g3604($identifier3716), $module_name3718 = $g2189($g3717, 0), $name3719 = $g2189($g3717, 1), $new_identifier3720 = $g2148();
$g3591($env3687, $module_name3718, $name3719);
var $rarray3726 = $g2164($env3687, "identifiers", $module_name3718, $name3719), $value3727 = $new_identifier3720;
$rarray3726.push($value3727);
$rarray3726;
$g2145($env3687, "definition-names", $g2115($new_identifier3720), $name3719);
$g2145($env3687, "new-identifiers", $name3719, $new_identifier3720);
var $rarray3730 = $form3686, $value3731 = $new_identifier3720;
$rarray3730[1] = $value3731;
return $form3686}
else return $g2252($g2122($g3685, $env3687), $form3686)}
else if ($T($g3689($g3688, $g2090)))
{var $value3721 = $g3665($form3686, $env3687);
if ($T($g2119($value3721, $g3662)))
return $form3686
else return $value3721}
else return $form3686}, false)
var trueQ = $g1464["true?"], dec = $g1464.dec, $g3753 = $g1464["last-setter"], $g3754 = $g1464.last, $g3755, $g3756, $g3757 = $g2084("inline", function $g3867 ($form3758, $env3759)
{var $g3850;
if ($T($g2085($form3758, $g2086)))
{var $sequence3801 = $form3758, $g3802 = $sequence3801, $g3803 = (($g3802 || false).length || 0), $g3804 = 0, $value3805 = ($g3803 === $g3804);
$g3850 = !(trueQ($value3805))}
else $g3850 = false;
if ($T($g3850))
{var $sequence3807 = $form3758, $g3851 = $sequence3807[0], $g3852 = $g2085($g3851, $g2090);
if ($T($g3852))
{var $sequence3809 = $form3758, $g3853 = $sequence3809[0], $g3760 = $g2115($g3853), $g3761 = $g2119, $g3762 = $g3761($g3760, "%method"), $g3854;
if ($T($g3762))
$g3854 = $g3762
else $g3854 = $g3761($g3760, "%set");
if ($T($g3854))
{var $rarray3822 = $form3758, $rarray3819 = $form3758, $g3820 = $rarray3819, $g3821 = (($g3820 || false).length || 0), $g3855 = ($g3821 - 1), $g3856 = $rarray3819[$g3855], $value3823 = $g3757($g3856, $env3759);
$rarray3822[dec($g2120($rarray3822), 1)] = $value3823;
return $form3758}
else if ($T($g3761($g3760, "%bind")))
{var $__3763 = $g2189($form3758, 0), $binding3764 = $g2189($form3758, 1), $body3765 = $g2189($form3758, 2), $rarray3828 = $binding3764, $sequence3827 = $binding3764, $g3857 = $sequence3827[1], $value3829 = $g3757($g3857, $env3759);
$rarray3828[1] = $value3829;
var $rarray3832 = $form3758, $value3833 = $g3757($body3765, $env3759);
$rarray3832[dec($g2120($rarray3832), 1)] = $value3833;
return $form3758}
else if ($T($g3761($g3760, "%try")))
{var $__3766 = $g2189($form3758, 0), $body3767 = $g2189($form3758, 1), $rvar3768 = $g2189($form3758, 2), $rcatch3769 = $g2189($form3758, 3), $rarray3836 = $form3758, $value3837 = $g3757($body3767, $env3759);
$rarray3836[1] = $value3837;
var $rarray3840 = $form3758, $value3841 = $g3757($rcatch3769, $env3759);
$rarray3840[dec($g2120($rarray3840), 1)] = $value3841;
return $form3758}
else {var $g3770 = $g3761($g3760, "%begin"), $g3858;
if ($T($g3770))
$g3858 = $g3770
else {var $g3771 = $g3761($g3760, "%if");
if ($T($g3771))
$g3858 = $g3771
else {var $g3772 = $g3761($g3760, "%while");
if ($T($g3772))
$g3858 = $g3772
else {var $g3773 = $g3761($g3760, "%array");
if ($T($g3773))
$g3858 = $g3773
else {var $g3774 = $g3761($g3760, "%object");
if ($T($g3774))
$g3858 = $g3774
else {var $g3775 = $g3761($g3760, "%get-property");
if ($T($g3775))
$g3858 = $g3775
else {var $g3776 = $g3761($g3760, "%native-call");
if ($T($g3776))
$g3858 = $g3776
else {var $g3777 = $g3761($g3760, "%infix");
if ($T($g3777))
$g3858 = $g3777
else {var $g3778 = $g3761($g3760, "%plus");
if ($T($g3778))
$g3858 = $g3778
else {var $g3779 = $g3761($g3760, "%minus");
if ($T($g3779))
$g3858 = $g3779
else {var $g3780 = $g3761($g3760, "%times");
if ($T($g3780))
$g3858 = $g3780
else $g3858 = $g3761($g3760, "%divide")}}}}}}}}}};
if ($T($g3858))
{var $sequence3843 = $form3758, $g3859 = $sequence3843[0], $g3860 = [$g3859], $g3861 = $g2122($g3757, $env3759), $sequence3845 = $form3758, $g3862 = $sequence3845.slice(1), $g3863 = $g2252($g3861, $g3862);
return $g2114($g3860, $g3863)}
else {var $g3781 = $g3761($g3760, "%native"), $g3864;
if ($T($g3781))
$g3864 = $g3781
else {var $g3782 = $g3761($g3760, "%native-name");
if ($T($g3782))
$g3864 = $g3782
else $g3864 = $g3761($g3760, "%define")};
if ($T($g3864))
return $form3758
else {var $sequence3847 = $form3758, $g3865 = $sequence3847[0], $name3783 = $g2115($g3865), $g3784 = $g2164($env3759, "definition-names", $name3783), $definition_name3785;
if ($T($g3784))
$definition_name3785 = $g3784
else $definition_name3785 = $name3783;
var $g3786;
if ($T($g3756($g2164($env3759, "module"), $definition_name3785)))
$g3786 = $g2164($env3759, "module", "functions", $definition_name3785)
else $g3786 = false;
var $definition3789;
if ($T($g3786))
$definition3789 = $g3786
else {var $g3787 = $g3390($definition_name3785, $env3759);
if ($T($g3787))
{var $module3788 = $g3787;
if ($T($g3756($module3788, $definition_name3785)))
$definition3789 = $g2164($module3788, "functions", $definition_name3785)
else $definition3789 = false}
else $definition3789 = false};
if ($T($definition3789))
{var $sequence3849 = $form3758, $g3866 = $sequence3849.slice(1);
return $g3755($definition3789, $g3866, $env3759)}
else return $g2252($g2122($g3757, $env3759), $form3758)}}}}
else return $g2252($g2122($g3757, $env3759), $form3758)}
else return $form3758}, false)
$g3756 = $g2084("inlineQ", function $g3870 ($module3868, $definition_name3869)
{return $g2569($g2174($g2119, $definition_name3869), $g2164($module3868, "inline"))}, false)
{var trueQ = $g1464["true?"], $g3873 = $g1464[">="];
$g3755 = $g2084("inline_definition", function $g3903 ($definition3874, $values3875, $env3876)
{var $__3877 = $g2189($definition3874, 0), $rarguments3878 = $g2189($definition3874, 1), $body3879 = $g2189($definition3874, 2), $body3882 = $g2242(function $g3904 ($body3880, $argument3881)
{return [$g2074("%bind"), [$argument3881, $argument3881], $body3880]}, $body3879, $g2366($rarguments3878)), $inlined3883 = $g3757($body3882, $env3876), $prepared3884 = $g3685($inlined3883, $env3876), $robject3895 = $rarguments3878, $g3885 = (($robject3895 || false).length || 0), $i3886 = 0;
while ($T(true))
{var $value3897 = $g3873($i3886, $g3885), $g3902 = !(trueQ($value3897));
if ($T($g3902))
{(function $g3905 ($i3887)
{var $argument3888 = $g2189($rarguments3878, $i3887), $value3889 = $g2189($values3875, $i3887), $g3890 = $g3604($argument3888), $module_name3891 = $g2189($g3890, 0), $name3892 = $g2189($g3890, 1);
$g3591($env3876, $module_name3891, $name3892);
var $rarray3900 = $g2164($env3876, "identifiers", $module_name3891, $name3892), $value3901;
if ($T($value3889))
$value3901 = $g3757($value3889, $env3876)
else $value3901 = [$g2074("%native"), "undefined"];
$rarray3900.unshift($value3901);
return $rarray3900})($i3886);
$i3886 = ($i3886 + 1)}
else break};
false;
var $result3893 = $g3685($body3882, $env3876);
$g3637($rarguments3878, $env3876);
return $result3893}, false)}
var $g3906 = $g1464["<number>"], $g3907 = $g1464["<boolean>"], $g3908 = $g1464["<keyword>"], $g3909 = $g2084("atomicQ", function $g3911 ($expression3910)
{return $g2569($g2174($g2085, $expression3910), [$g3906, $g3907, $g2939, $g2090, $g3908])}, false)
var $g3912, $g3913 = $g2084("normalize_term", function $g3915 ($expression3914)
{return $g3912($expression3914, $g3212)}, false)
{var trueQ = $g1464["true?"], $g3919, $g3920, $g3921;
$g3912 = $g2084("normalize", function $g3991 ($exp3922, $k3923)
{var $g3987;
if ($T($g2085($exp3922, $g2086)))
{var $sequence3966 = $exp3922, $g3967 = $sequence3966, $g3968 = (($g3967 || false).length || 0), $g3969 = 0, $value3970 = ($g3968 === $g3969);
$g3987 = !(trueQ($value3970))}
else $g3987 = false;
if ($T($g3987))
{var $sequence3972 = $exp3922, $g3988 = $sequence3972[0], $g3924 = $g2115($g3988), $g3925 = $g2119;
if ($T($g3925($g3924, "%method")))
{var $__3926 = $g2189($exp3922, 0), $rarguments3927 = $g2189($exp3922, 1), $body3928 = $g2189($exp3922, 2);
return $k3923([$g2074("%method"), $rarguments3927, $g3913($body3928)])}
else if ($T($g3925($g3924, "%begin")))
{var $__3929 = $g2189($exp3922, 0), $exp13930 = $g2189($exp3922, 1), $et3931 = $SL.call($exp3922, 2), $sequence3983 = $et3931, $g3984 = $sequence3983, $g3985 = (($g3984 || false).length || 0), $g3986 = 0, $g3989 = ($g3985 === $g3986);
if ($T($g3989))
return $g3912($exp13930, $k3923)
else return $g3912($exp13930, function $g3992 ($aexp13932)
{return [$g2074("%begin"), $aexp13932, $g3912($g2114([$g2074("%begin")], $et3931), $k3923)]})}
else if ($T($g3925($g3924, "%bind")))
{var $__3933 = $g2189($exp3922, 0), $g3934 = $exp3922[1], $rvar3935 = $g2189($g3934, 0), $value3936 = $g2189($g3934, 1), $body3937 = $g2189($exp3922, 2);
return $g3912($value3936, function $g3993 ($avalue3938)
{return [$g2074("%bind"), [$rvar3935, $avalue3938], $g3912($body3937, $k3923)]})}
else if ($T($g3925($g3924, "%if")))
{var $__3939 = $g2189($exp3922, 0), $test3940 = $g2189($exp3922, 1), $then3941 = $g2189($exp3922, 2), $relse3942 = $g2189($exp3922, 3);
return $g3919($test3940, function $g3994 ($atest3943)
{return $k3923([$g2074("%if"), $atest3943, $g3913($then3941), $g3913($relse3942)])})}
else if ($T($g3925($g3924, "%while")))
{var $__3944 = $g2189($exp3922, 0), $test3945 = $g2189($exp3922, 1), $body3946 = $g2189($exp3922, 2), $g3990;
if ($T($g3920($test3945)))
$g3990 = [$g2074("%while"), true, [$g2074("%begin"), $g3913([$g2074("%if"), $test3945, $g3913($body3946), [$g2074("%native"), "break"], false])]]
else $g3990 = [$g2074("%while"), $g3913($test3945), $g3913($body3946)];
return $k3923($g3990)}
else if ($T($g3925($g3924, "%try")))
{var $__3947 = $g2189($exp3922, 0), $body3948 = $g2189($exp3922, 1), $rvar3949 = $g2189($exp3922, 2), $rcatch3950 = $g2189($exp3922, 3);
return $k3923([$g2074("%try"), $g3913($body3948), $rvar3949, $g3913($rcatch3950)])}
else if ($T($g3925($g3924, "%set")))
{var $__3951 = $g2189($exp3922, 0), $rvar3952 = $g2189($exp3922, 1), $value3953 = $g2189($exp3922, 2);
return $g3919($value3953, function $g3995 ($avalue3954)
{return $k3923([$g2074("%set"), $rvar3952, $avalue3954])})}
else if ($T($g3920($exp3922)))
return $g3921($exp3922, $k3923)
else return $k3923($g2252($g3913, $exp3922))}
else return $k3923($exp3922)}, false)}
{var $g3996;
$g3919 = $g2084("normalize_value", function $g4000 ($exp3997, $k3998)
{if ($T($g3920($exp3997)))
return $g3996($exp3997, $k3998)
else {var $g3999;
if ($T($g2085($exp3997, $g2086)))
$g3999 = $g2252($g3913, $exp3997)
else $g3999 = $exp3997;
return $k3998($g3999)}}, false)}
{var trueQ = $g1464["true?"];
$g3920 = $g2084("contains_statementsQ", function $g4047 ($exp4007)
{var $g4042;
if ($T($g2085($exp4007, $g2086)))
{var $sequence4025 = $exp4007, $g4026 = $sequence4025, $g4027 = (($g4026 || false).length || 0), $g4028 = 0, $value4029 = ($g4027 === $g4028);
$g4042 = !(trueQ($value4029))}
else $g4042 = false;
if ($T($g4042))
{var $sequence4031 = $exp4007, $g4043 = $sequence4031[0], $g4008 = $g2115($g4043), $g4009 = $g2119, $g4010 = $g4009($g4008, "%begin"), $g4044;
if ($T($g4010))
$g4044 = $g4010
else {var $g4011 = $g4009($g4008, "%if");
if ($T($g4011))
$g4044 = $g4011
else {var $g4012 = $g4009($g4008, "%while");
if ($T($g4012))
$g4044 = $g4012
else {var $g4013 = $g4009($g4008, "%bind");
if ($T($g4013))
$g4044 = $g4013
else $g4044 = $g4009($g4008, "%try")}}};
if ($T($g4044))
return true
else if ($T($g4009($g4008, "%set")))
{var $rarray4039 = $exp4007, $g4040 = $rarray4039, $g4041 = (($g4040 || false).length || 0), $g4045 = ($g4041 - 1), $g4046 = $rarray4039[$g4045];
return $g3920($g4046)}
else if ($T($g4009($g4008, "%method")))
return false
else return $g2569($g3920, $exp4007)}}, false)}
$g3996 = $g2084("normalizeT", function $g4052 ($exp4048, $k4049)
{return $g3912($exp4048, function $g4053 ($aexp4050)
{if ($T($g3909($aexp4050)))
return $k4049($aexp4050)
else {var $t4051 = $g2148();
return [$g2074("%bind"), [$t4051, $aexp4050], $k4049($t4051)]}})}, false)
var $g4054 = $g2084("normalizeTT", function $g4072 ($expt4055, $k4056)
{var $sequence4067 = $expt4055, $g4068 = $sequence4067, $g4069 = (($g4068 || false).length || 0), $g4070 = 0, $g4071 = ($g4069 === $g4070);
if ($T($g4071))
return $k4056([])
else return $g3921($expt4055, $k4056)}, false)
$g3921 = $g2084("normalize_all", function $g4085 ($exp4073, $k4074)
{var $sequence4078 = $exp4073, $g4081 = $sequence4078[0], $g4084 = function $g4086 ($t4075)
{var $sequence4080 = $exp4073, $g4082 = $sequence4080.slice(1), $g4083 = function $g4087 ($tt4076)
{return $k4074($g2114([$t4075], $tt4076))};
return $g4054($g4082, $g4083)};
return $g3996($g4081, $g4084)}, false)
var $g4088 = $g2084("sccp", function $g4091 ($exp4089, $env4090)
{return $exp4089}, false)
var dec = $g1464.dec, $g4095 = $g1464["third-setter"], $g4096 = $g2084("wrap_value", function $g4168 ($exp4097, $wrapper4098)
{if ($T($g2085($exp4097, $g2086)))
{var $sequence4103 = $exp4097, $g4158 = $sequence4103[0], $g4099 = $g2115($g4158), $g4100 = $g2119, $g4101 = $g4100($g4099, "%begin"), $g4159;
if ($T($g4101))
$g4159 = $g4101
else $g4159 = $g4100($g4099, "%bind");
if ($T($g4159))
{var $rarray4116 = $exp4097, $rarray4113 = $exp4097, $g4114 = $rarray4113, $g4115 = (($g4114 || false).length || 0), $g4160 = ($g4115 - 1), $g4161 = $rarray4113[$g4160], $value4117 = $g4096($g4161, $wrapper4098);
$rarray4116[dec($g2120($rarray4116), 1)] = $value4117;
return $exp4097}
else if ($T($g4100($g4099, "%if")))
{var $rarray4122 = $exp4097, $sequence4121 = $exp4097, $g4162 = $sequence4121[2], $value4123 = $g4096($g4162, $wrapper4098);
$rarray4122[2] = $value4123;
var $rarray4136 = $exp4097, $rarray4133 = $exp4097, $g4134 = $rarray4133, $g4135 = (($g4134 || false).length || 0), $g4163 = ($g4135 - 1), $g4164 = $rarray4133[$g4163], $value4137 = $g4096($g4164, $wrapper4098);
$rarray4136[dec($g2120($rarray4136), 1)] = $value4137;
return $exp4097}
else if ($T($g4100($g4099, "%while")))
return [$g2074("%begin"), $exp4097, $g4096(false, $wrapper4098)]
else if ($T($g4100($g4099, "%try")))
{var $rarray4142 = $exp4097, $sequence4141 = $exp4097, $g4165 = $sequence4141[1], $value4143 = $g4096($g4165, $wrapper4098);
$rarray4142[1] = $value4143;
var $rarray4156 = $exp4097, $rarray4153 = $exp4097, $g4154 = $rarray4153, $g4155 = (($g4154 || false).length || 0), $g4166 = ($g4155 - 1), $g4167 = $rarray4153[$g4166], $value4157 = $g4096($g4167, $wrapper4098);
$rarray4156[dec($g2120($rarray4156), 1)] = $value4157;
return $exp4097}
else return $g2114($wrapper4098, [$exp4097])}
else return $g2114($wrapper4098, [$exp4097])}, false)
var $g4169 = $g2084("add_explicit_return", function $g4171 ($exp4170)
{return $g4096($exp4170, [$g2074("%return")])}, false)
var trueQ = $g1464["true?"], $g4172 = $g2084("statementQ", function $g4195 ($exp4173)
{if ($T($g2085($exp4173, $g2086)))
{var $sequence4185 = $exp4173, $g4186 = $sequence4185, $g4187 = (($g4186 || false).length || 0), $g4188 = 0, $value4189 = ($g4187 === $g4188), $g4192 = !(trueQ($value4189));
if ($T($g4192))
{var $sequence4191 = $exp4173, $g4193 = $sequence4191[0], $g4194 = [$g2074("%if"), $g2074("%while"), $g2074("%begin"), $g2074("%bind"), $g2074("%try")];
return $g3389($g4193, $g4194)}}}, false)
var $g4196 = $g2084("add_explicit_true", function $g4198 ($exp4197)
{return [[$g2074("%native"), "$T"], $exp4197]}, false)
var dec = $g1464.dec, $g4202 = $g1464["first-setter"], $g4203 = $g2084("transform_statements", function $g4312 ($exp4204, $env4205)
{if ($T($g2085($exp4204, $g2086)))
{var $sequence4225 = $exp4204, $g4298 = $sequence4225[0], $g4206 = $g2115($g4298), $g4207 = $g2119;
if ($T($g4207($g4206, "%method")))
{var $rarray4238 = $exp4204, $rarray4235 = $exp4204, $g4236 = $rarray4235, $g4237 = (($g4236 || false).length || 0), $g4299 = ($g4237 - 1), $g4300 = $rarray4235[$g4299], $g4301 = $g4203($g4300, $env4205), $value4239 = $g4169($g4301);
$rarray4238[dec($g2120($rarray4238), 1)] = $value4239;
return $exp4204}
else if ($T($g4207($g4206, "%begin")))
{var $__4208 = $g2189($exp4204, 0), $exps4209 = $SL.call($exp4204, 1);
return $g2201($g2252($g2122($g4203, $env4205), $exps4209))}
else if ($T($g4207($g4206, "%bind")))
{var $__4210 = $g2189($exp4204, 0), $g4211 = $exp4204[1], $rvar4212 = $g2189($g4211, 0), $value4213 = $g2189($g4211, 1), $body4214 = $g2189($exp4204, 2);
if ($T($g4172($value4213)))
return [$g2074("%bind"), [$rvar4212, false], [$g2074("%begin"), $g4096($g4203($value4213, $env4205), [$g2074("%set"), $rvar4212]), $g4203($body4214, $env4205)]]
else return [$g2074("%bind"), [$rvar4212, $g4203($value4213, $env4205)], $g4203($body4214, $env4205)]}
else if ($T($g4207($g4206, "%if")))
{var $__4215 = $g2189($exp4204, 0), $test4216 = $g2189($exp4204, 1), $then4217 = $g2189($exp4204, 2), $relse4218 = $g2189($exp4204, 3);
return [$g2074("%if"), $g4196($test4216), $g4203($then4217, $env4205), $g4203($relse4218, $env4205)]}
else if ($T($g4207($g4206, "%while")))
{var $rarray4244 = $exp4204, $sequence4243 = $exp4204, $g4302 = $sequence4243[1], $value4245 = $g4196($g4302);
$rarray4244[1] = $value4245;
var $rarray4250 = $exp4204, $sequence4249 = $exp4204, $g4303 = $sequence4249[2], $value4251 = $g4203($g4303, $env4205);
$rarray4250[2] = $value4251;
return $exp4204}
else if ($T($g4207($g4206, "%try")))
{var $rarray4256 = $exp4204, $sequence4255 = $exp4204, $g4304 = $sequence4255[1], $value4257 = $g4203($g4304, $exp4204);
$rarray4256[1] = $value4257;
var $rarray4270 = $exp4204, $rarray4267 = $exp4204, $g4268 = $rarray4267, $g4269 = (($g4268 || false).length || 0), $g4305 = ($g4269 - 1), $g4306 = $rarray4267[$g4305], $value4271 = $g4203($g4306, $env4205);
$rarray4270[dec($g2120($rarray4270), 1)] = $value4271;
return $exp4204}
else if ($T($g4207($g4206, "%set")))
{var $__4219 = $g2189($exp4204, 0), $identifier4220 = $g2189($exp4204, 1), $value4221 = $g2189($exp4204, 2), $valuet4222 = $g4203($value4221, $env4205), $definition_name4223 = $g2164($env4205, "definition-names", $g2115($identifier4220)), $g4307;
if ($T($definition_name4223))
$g4307 = $g3389($definition_name4223, $g2164($env4205, "module", "exports"))
else $g4307 = false;
if ($T($g4307))
{var $rarray4274 = $exp4204, $value4275 = $g2074("%begin");
$rarray4274[0] = $value4275;
var $rarray4278 = $exp4204, $value4279 = [$g2074("%set"), $identifier4220, $valuet4222];
$rarray4278[1] = $value4279;
var $rarray4282 = $exp4204, $value4283 = [$g2074("%set"), [$g2074("%get-property"), [$g2074("%native"), "exports"], $definition_name4223], $identifier4220];
$rarray4282[2] = $value4283}
else {var $rarray4286 = $exp4204, $value4287 = $valuet4222;
$rarray4286[2] = $value4287};
return $exp4204}
else if ($T($g4207($g4206, "%define")))
{var $g4308 = $g2074("%var"), $rarray4295 = $exp4204, $g4296 = $rarray4295, $g4297 = (($g4296 || false).length || 0), $g4309 = ($g4297 - 1), $g4310 = $rarray4295[$g4309], $g4311 = [$g4310, false];
return [$g4308, $g4311]}
else return $g2252($g2122($g4203, $env4205), $exp4204)}
else return $exp4204}, false)
var $g4313, $g4314 = $g2084("lift_symbols", function $g4317 ($exp4315, $env4316)
{return $g4313($exp4315, $env4316, $g3212)}, false)
{var trueQ = $g1464["true?"], $g4326, $g4327, $g4328, $g4329 = $g1464["<hash-symbol>"];
$g4313 = $g2084("lift_symbol", function $g4390 ($exp4330, $env4331, $k4332)
{var $g4386;
if ($T($g2085($exp4330, $g2086)))
{var $sequence4379 = $exp4330, $g4380 = $sequence4379, $g4381 = (($g4380 || false).length || 0), $g4382 = 0, $value4383 = ($g4381 === $g4382);
$g4386 = !(trueQ($value4383))}
else $g4386 = false;
if ($T($g4386))
{var $sequence4385 = $exp4330, $g4387 = $sequence4385[0], $g4333 = $g2115($g4387), $g4334 = $g2119;
if ($T($g4334($g4333, "%bind")))
{var $__4335 = $g2189($exp4330, 0), $g4336 = $exp4330[1], $rvar4337 = $g2189($g4336, 0), $value4338 = $g2189($g4336, 1), $body4339 = $g2189($exp4330, 2);
return $g4313($value4338, $env4331, function $g4391 ($lvalue4340, $env4341)
{return $g4313($body4339, $env4341, function $g4392 ($lbody4342, $env4343)
{return $k4332([$g2074("%bind"), [$rvar4337, $lvalue4340], $lbody4342], $env4343)})})}
else {var $g4344 = $g4334($g4333, "%method"), $g4388;
if ($T($g4344))
$g4388 = $g4344
else $g4388 = $g4334($g4333, "%set");
if ($T($g4388))
{var $m4345 = $g2189($exp4330, 0), $e14346 = $g2189($exp4330, 1), $e24347 = $g2189($exp4330, 2);
return $g4313($e24347, $env4331, function $g4393 ($le24348, $env4349)
{return $k4332([$m4345, $e14346, $le24348], $env4349)})}
else {var $g4350 = $g4334($g4333, "%begin"), $g4389;
if ($T($g4350))
$g4389 = $g4350
else {var $g4351 = $g4334($g4333, "%if");
if ($T($g4351))
$g4389 = $g4351
else $g4389 = $g4334($g4333, "%while")};
if ($T($g4389))
{var $m4352 = $g2189($exp4330, 0), $et4353 = $SL.call($exp4330, 1);
return $g4326($et4353, $env4331, function $g4394 ($let4354, $env4355)
{return $k4332($g2114([$m4352], $let4354), $env4355)})}
else if ($T($g4334($g4333, "%try")))
{var $__4356 = $g2189($exp4330, 0), $e14357 = $g2189($exp4330, 1), $v4358 = $g2189($exp4330, 2), $e24359 = $g2189($exp4330, 3);
return $g4326([$e14357, $e24359], $env4331, function $g4395 ($let4360, $env4361)
{var $le14362 = $g2189($let4360, 0), $le24363 = $g2189($let4360, 1);
return $k4332([$g2074("%try"), $le14362, $v4358, $le24363], $env4361)})}
else if ($T($g4334($g4333, "symbol")))
{var $__4364 = $g2189($exp4330, 0), $name4365 = $g2189($exp4330, 1);
return $g4327($name4365, $exp4330, "symbol", $env4331, $k4332)}
else return $g4328($exp4330, $env4331, $k4332)}}}
else {var $g4366 = $exp4330, $g4367 = $g2085;
if ($T($g4367($g4366, $g3908)))
return $g4327($g2115($exp4330), $exp4330, "keyword", $env4331, $k4332)
else if ($T($g4367($g4366, $g4329)))
return $g4327($g2115($exp4330), $exp4330, "hash", $env4331, $k4332)
else return $k4332($exp4330, $env4331)}}, false)}
$g4327 = $g2084("lift_value", function $g4405 ($name4397, $value4398, $type4399, $env4400, $k4401)
{var $g4402 = $g2164($env4400, "lifted", $type4399, $name4397);
if ($T($g4402))
{var $t4403 = $g4402;
return $k4401($t4403, $env4400)}
else {var $t4404 = $g2145($env4400, "lifted", $type4399, $name4397, $g2148());
return [$g2074("%bind"), [$t4404, $value4398], $k4401($t4404, $env4400)]}}, false)
$g4326 = $g2084("lift_symbolT", function $g4424 ($expt4406, $env4407, $k4408)
{var $sequence4419 = $expt4406, $g4420 = $sequence4419, $g4421 = (($g4420 || false).length || 0), $g4422 = 0, $g4423 = ($g4421 === $g4422);
if ($T($g4423))
return $k4408([], $env4407)
else return $g4328($expt4406, $env4407, $k4408)}, false)
$g4328 = $g2084("lift_symbolTT", function $g4440 ($exp4425, $env4426, $k4427)
{var $sequence4433 = $exp4425, $g4436 = $sequence4433[0], $g4439 = function $g4441 ($t4428, $env4429)
{var $sequence4435 = $exp4425, $g4437 = $sequence4435.slice(1), $g4438 = function $g4442 ($tt4430, $env4431)
{return $k4427($g2114([$t4428], $tt4430), $env4431)};
return $g4326($g4437, $env4429, $g4438)};
return $g4313($g4436, $env4426, $g4439)}, false)
var trueQ = $g1464["true?"], $g4443, $g4444 = $g2084("flatten_begins", function $g4486 ($exps4445)
{var $rfunction4476 = $g2114, $values4477 = $g2252(function $g4487 ($exp4446)
{var $flattened4447 = $g4443($exp4446), $g4483;
if ($T($g2085($flattened4447, $g2086)))
{var $sequence4467 = $flattened4447, $g4468 = $sequence4467, $g4469 = (($g4468 || false).length || 0), $g4470 = 0, $value4471 = ($g4469 === $g4470), $g4480 = !(trueQ($value4471));
if ($T($g4480))
{var $sequence4473 = $flattened4447, $g4481 = $sequence4473[0], $g4482 = $g2074("%begin");
$g4483 = $g2119($g4481, $g4482)}
else $g4483 = false}
else $g4483 = false;
if ($T($g4483))
{var $sequence4475 = $flattened4447;
return $sequence4475.slice(1)}
else return [$flattened4447]}, $exps4445), $g4478 = $values4477, $g4484 = $g4478[0], $g4479 = $values4477, $g4485 = $g4479.slice(1);
return $g2242($rfunction4476, $g4484, $g4485)}, false)
var $g4488 = $g2084("varQ", function $g4494 ($exp4489)
{if ($T($g2091($exp4489)))
{var $sequence4491 = $exp4489, $g4492 = $sequence4491[0], $g4493 = $g2074("%var");
return $g2119($g4492, $g4493)}}, false)
var $g4495 = $g2084("setQ", function $g4501 ($exp4496)
{if ($T($g2091($exp4496)))
{var $sequence4498 = $exp4496, $g4499 = $sequence4498[0], $g4500 = $g2074("%set");
return $g2119($g4499, $g4500)}}, false)
var $g4502 = $g2084("methodQ", function $g4508 ($exp4503)
{if ($T($g2091($exp4503)))
{var $sequence4505 = $exp4503, $g4506 = $sequence4505[0], $g4507 = $g2074("%method");
return $g2119($g4506, $g4507)}}, false)
var trueQ = $g1464["true?"], $g4509 = $g2084("flatten_vars", function $g4601 ($exps4510)
{return $g2242(function $g4602 ($result4511, $exp4512)
{var $sequence4530 = $result4511, $g4531 = $sequence4530, $g4532 = (($g4531 || false).length || 0), $g4533 = 0, $value4534 = ($g4532 === $g4533), $g4591 = !(trueQ($value4534)), $previous4513;
if ($T($g4591))
{var $rarray4542 = $result4511, $g4543 = $rarray4542, $g4544 = (($g4543 || false).length || 0), $g4592 = ($g4544 - 1);
$previous4513 = $rarray4542[$g4592]}
else $previous4513 = false;
var $previous_varq4514;
if ($T($previous4513))
$previous_varq4514 = $g4488($previous4513)
else $previous_varq4514 = false;
var $g4593;
if ($T($previous_varq4514))
$g4593 = $g4488($exp4512)
else $g4593 = false;
if ($T($g4593))
{var $g4595 = function $g4603 ($binding4515)
{var $rarray4554 = $result4511, $g4555 = $rarray4554, $g4556 = (($g4555 || false).length || 0), $g4594 = ($g4556 - 1), $rarray4557 = $rarray4554[$g4594], $value4558 = $binding4515;
$rarray4557.push($value4558);
return $rarray4557}, $sequence4560 = $exp4512, $g4596 = $sequence4560.slice(1);
$g2173($g4595, $g4596);
return $result4511}
else {var $mergeq4516;
if ($T($previous_varq4514))
$mergeq4516 = $g4495($exp4512)
else $mergeq4516 = false;
var $binding4517;
if ($T($mergeq4516))
{var $rarray4575 = $result4511, $g4576 = $rarray4575, $g4577 = (($g4576 || false).length || 0), $g4597 = ($g4577 - 1), $rarray4578 = $rarray4575[$g4597], $g4579 = $rarray4578, $g4580 = (($g4579 || false).length || 0), $g4598 = ($g4580 - 1);
$binding4517 = $rarray4578[$g4598]}
else $binding4517 = false;
var $identifier4518;
if ($T($mergeq4516))
{var $sequence4582 = $exp4512;
$identifier4518 = $sequence4582[1]}
else $identifier4518 = false;
var $sequence4584 = $binding4517, $g4599 = $sequence4584[0], $g4600 = $g2119($g4599, $identifier4518);
if ($T($g4600))
{var $rarray4589 = $binding4517, $sequence4588 = $exp4512, $value4590 = $sequence4588[2];
$rarray4589[1] = $value4590;
return $result4511}
else return $g2114($result4511, [$exp4512])}}, [], $exps4510)}, false)
{var dec = $g1464.dec;
$g4443 = $g2084("flatten_statements", function $g4684 ($exp4608)
{if ($T($g2085($exp4608, $g2086)))
{var $sequence4619 = $exp4608, $g4674 = $sequence4619[0], $g4609 = $g2115($g4674), $g4610 = $g2119, $g4611 = $g4610($g4609, "%method"), $g4675;
if ($T($g4611))
$g4675 = $g4611
else {var $g4612 = $g4610($g4609, "%while");
if ($T($g4612))
$g4675 = $g4612
else $g4675 = $g4610($g4609, "%set")};
if ($T($g4675))
{var $rarray4632 = $exp4608, $rarray4629 = $exp4608, $g4630 = $rarray4629, $g4631 = (($g4630 || false).length || 0), $g4676 = ($g4631 - 1), $g4677 = $rarray4629[$g4676], $value4633 = $g4443($g4677);
$rarray4632[dec($g2120($rarray4632), 1)] = $value4633;
return $exp4608}
else if ($T($g4610($g4609, "%begin")))
{var $__4613 = $g2189($exp4608, 0), $exps4614 = $SL.call($exp4608, 1);
return $g2201($g4509($g4444($exps4614)))}
else if ($T($g4610($g4609, "%bind")))
{var $__4615 = $g2189($exp4608, 0), $binding4616 = $g2189($exp4608, 1), $body4617 = $g2189($exp4608, 2);
return $g4443([$g2074("%begin"), [$g2074("%var"), $binding4616], $body4617])}
else if ($T($g4610($g4609, "%if")))
{var $rarray4638 = $exp4608, $sequence4637 = $exp4608, $g4678 = $sequence4637[2], $value4639 = $g4443($g4678);
$rarray4638[2] = $value4639;
var $rarray4652 = $exp4608, $rarray4649 = $exp4608, $g4650 = $rarray4649, $g4651 = (($g4650 || false).length || 0), $g4679 = ($g4651 - 1), $g4680 = $rarray4649[$g4679], $value4653 = $g4443($g4680);
$rarray4652[dec($g2120($rarray4652), 1)] = $value4653;
return $exp4608}
else if ($T($g4610($g4609, "%try")))
{var $rarray4658 = $exp4608, $sequence4657 = $exp4608, $g4681 = $sequence4657[1], $value4659 = $g4443($g4681);
$rarray4658[1] = $value4659;
var $rarray4672 = $exp4608, $rarray4669 = $exp4608, $g4670 = $rarray4669, $g4671 = (($g4670 || false).length || 0), $g4682 = ($g4671 - 1), $g4683 = $rarray4669[$g4682], $value4673 = $g4443($g4683);
$rarray4672[dec($g2120($rarray4672), 1)] = $value4673;
return $exp4608}
else return $g2252($g4443, $exp4608)}
else return $exp4608}, false)}
var $g4685 = $g2066("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var $g4686 = $g2084("fill_zeros", function $g4698 ($rstring4687)
{var $rarray4693 = "0000", $start4694 = 0, $robject4692 = $rstring4687, $g4696 = (($robject4692 || false).length || 0), $end4695 = (4 - $g4696), $g4697 = $rarray4693.slice($start4694, $end4695);
return $g2114($g4697, $rstring4687)}, false)
var $g4700 = $g1464.join, $g4701 = $g1464["<"], $g4702 = $g1464["as-hex-string"], $g4703 = $g1464["char-code"], $g4704 = $g1464["as-array"], $g4705 = $g2084("escape_string", function $g4724 ($rstring4706)
{var $g4721 = function $g4725 ($rchar4707)
{var $g4708 = $g2164($g4685, $rchar4707);
if ($T($g4708))
{var $escaped4709 = $g4708;
return $g2114("\\", $escaped4709)}
else {var $rchar4712 = $rchar4707, $code4710 = $rchar4712.charCodeAt(0);
if ($T($g4701(31, $code4710, 127)))
return $rchar4707
else {var $rnumber4714 = $code4710, $g4719 = $rnumber4714.toString(16), $g4720 = $g4686($g4719);
return $g2114("\\u", $g4720)}}}, $rarguments4717 = $rstring4706, $skip4718 = undefined, $g4722 = $SL.call($rarguments4717, ($skip4718 || 0)), $g4723 = $g2252($g4721, $g4722);
return $g4700($g4723, "")}, false)
var $g4726 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var $g4727 = $g2066("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
{var $g4728 = $g2063.match;
$g2146 = $g2084("escape_name", function $g4752 ($name4729)
{if ($T($g3389($name4729, $g4726)))
return $g2114("R", $name4729)
else {var $g4750 = function $g4753 ($rchar4730)
{var $robject4734 = $g4727, $property4735 = $rchar4730, $g4746 = $HP.call($robject4734,$property4735);
if ($T($g4746))
return $g2164($g4727, $rchar4730)
else {var $regexp4738 = "\\w", $rstring4739 = $rchar4730, $g4747 = $rstring4739.match($regexp4738);
if ($T($g4747))
return $rchar4730
else {var $rchar4741 = $rchar4730, $g4748 = $rchar4741.charCodeAt(0), $g4749 = $g2147($g4748);
return $g2114("Z", $g4749)}}}, $rarguments4744 = $name4729, $skip4745 = undefined, $g4751 = $SL.call($rarguments4744, ($skip4745 || 0)), $chars4731 = $g2252($g4750, $g4751);
return $g4700($chars4731, "")}}, false)}
var trueQ = $g1464["true?"], $g4754 = $g2084("valid_js_nameQ", function $g4763 ($identifier4755)
{var $value4757 = $g3389($identifier4755, $g4726), $g4762 = !(trueQ($value4757));
if ($T($g4762))
{var $regexp4760 = "^\\w+$", $rstring4761 = $identifier4755;
return $rstring4761.match($regexp4760)}}, false)
var $g4768, $g4769 = $g1464["as-uppercase"], $g4770 = $g1464.description, $g4771 = $g2084("compile_js", function $g4798 ($exp4772, $env4773)
{var $g4774 = $exp4772, $g4775 = $g2085;
if ($T($g4775($g4774, $g2086)))
{var $sequence4788 = $exp4772, $g4789 = $sequence4788, $g4790 = (($g4789 || false).length || 0), $g4791 = 0, $g4796 = ($g4790 === $g4791);
if ($T($g4796))
{var $error4793 = $g2928($g2929, $g2934, "empty expression");
throw($error4793);
return false}
else return $g4768($exp4772, $env4773)}
else if ($T($g4775($g4774, $g3906)))
return $g2147($exp4772)
else if ($T($g4775($g4774, $g3907)))
if ($T($exp4772))
return "true"
else return "false"
else if ($T($g4775($g4774, $g2939)))
return $g2114("\"", $g4705($exp4772), "\"")
else if ($T($g4775($g4774, $g4329)))
{var $rstring4795 = $g2115($exp4772), $g4797 = $rstring4795.toUpperCase();
return $g2114("$", $g4797)}
else if ($T($g4775($g4774, $g3908)))
return $g2114("$K(\"", $g2115($exp4772), "\")")
else if ($T($g4775($g4774, $g2090)))
{var $g4776 = $exp4772, $g4777 = $g2119;
if ($T($g4777($g4776, $g2074("%this-method"))))
return $g4771($g2164($env4773, "current-method"), $env4773)
else if ($T($g4777($g4776, $g2074("%all-arguments"))))
return "arguments"
else if ($T($g2164($exp4772, "generated?")))
return $g2114("$", $g2115($exp4772))
else return $g2146($g2115($exp4772))}
else return $g4770($exp4772)}, false)
{var trueQ = $g1464["true?"], $g4808;
$g4768 = $g2084("compile_js_exp", function $g4947 ($exp4809, $env4810)
{var $sequence4869 = $exp4809, $g4906 = $sequence4869[0], $name4811 = $g2115($g4906), $g4812 = $name4811, $g4813 = $g2119;
if ($T($g4813($g4812, "%native-call")))
{var $__4814 = $g2189($exp4809, 0), $operator4815 = $g2189($exp4809, 1), $values4816 = $SL.call($exp4809, 2);
return $g2114($operator4815, $g4808($values4816, $env4810))}
else if ($T($g4813($g4812, "%infix")))
{var $__4817 = $g2189($exp4809, 0), $operator4818 = $g2189($exp4809, 1), $values4819 = $SL.call($exp4809, 2);
return $g2114("(", $g4700($g2252($g2122($g4771, $env4810), $values4819), $g2114(" ", $operator4818, " ")), ")")}
else {var $g4820 = $g4813($g4812, "%plus"), $g4907;
if ($T($g4820))
$g4907 = $g4820
else {var $g4821 = $g4813($g4812, "%minus");
if ($T($g4821))
$g4907 = $g4821
else {var $g4822 = $g4813($g4812, "%times");
if ($T($g4822))
$g4907 = $g4822
else $g4907 = $g4813($g4812, "%divide")}};
if ($T($g4907))
{var $g4908 = $g2074("%infix"), $g4823 = $name4811, $g4824 = $g2119, $g4909;
if ($T($g4824($g4823, "%plus")))
$g4909 = "+"
else if ($T($g4824($g4823, "%minus")))
$g4909 = "-"
else if ($T($g4824($g4823, "%times")))
$g4909 = "*"
else if ($T($g4824($g4823, "%divide")))
$g4909 = "/"
else $g4909 = false;
var $g4910 = [$g4908, $g4909], $sequence4871 = $exp4809, $g4911 = $sequence4871.slice(1), $g4912 = $g2114($g4910, $g4911);
return $g4768($g4912, $env4810)}
else if ($T($g4813($g4812, "%array")))
{var $__4825 = $g2189($exp4809, 0), $elements4826 = $SL.call($exp4809, 1);
return $g2114("[", $g4700($g2252($g2122($g4771, $env4810), $elements4826), ", "), "]")}
else if ($T($g4813($g4812, "%object")))
{var $sequence4873 = $exp4809, $key_values4827 = $sequence4873.slice(1), $entries4828 = [], $robject4875 = $key_values4827, $g4913 = (($robject4875 || false).length || 0), $g4829 = ($g4913 / 2), $i4830 = 0;
while ($T(true))
{var $value4877 = $g3873($i4830, $g4829), $g4916 = !(trueQ($value4877));
if ($T($g4916))
{(function $g4948 ($i4831)
{var $rarray4880 = $entries4828, $name4832 = $g2189($key_values4827, ($i4831 * 2)), $g4914;
if ($T($g4754($name4832)))
$g4914 = $name4832
else $g4914 = $g4771($name4832, $env4810);
var $g4915 = $g4771($g2189($key_values4827, (($i4831 * 2) + 1)), $env4810), $value4881 = $g2114($g4914, ":", $g4915);
$rarray4880.push($value4881);
return $rarray4880})($i4830);
$i4830 = ($i4830 + 1)}
else break};
false;
return $g2114("{", $g4700($entries4828, ",\n"), "}")}
else if ($T($g4813($g4812, "%if")))
{var $__4833 = $g2189($exp4809, 0), $test4834 = $g2189($exp4809, 1), $then4835 = $g2189($exp4809, 2), $relse4836 = $g2189($exp4809, 3), $g4917 = $g4771($test4834, $env4810), $g4918 = $g4771($then4835, $env4810), $g4919;
if ($T($relse4836))
{var $value4883 = $g2213($relse4836, [$g2074("%return"), false]);
$g4919 = !(trueQ($value4883))}
else $g4919 = false;
var $g4920;
if ($T($g4919))
$g4920 = $g2114("\nelse ", $g4771($relse4836, $env4810))
else $g4920 = "";
return $g2114("if (", $g4917, ")\n", $g4918, $g4920)}
else if ($T($g4813($g4812, "%while")))
{var $__4837 = $g2189($exp4809, 0), $test4838 = $g2189($exp4809, 1), $body4839 = $g2189($exp4809, 2);
return $g2114("while (", $g4771($test4838, $env4810), ")\n", $g4771($body4839, $env4810))}
else if ($T($g4813($g4812, "%try")))
{var $__4840 = $g2189($exp4809, 0), $body4841 = $g2189($exp4809, 1), $rvar4842 = $g2189($exp4809, 2), $rcatch4843 = $g2189($exp4809, 3);
return $g2114("try {", $g4771($body4841, $env4810), "}\n", "catch (", $g4771($rvar4842, $env4810), ")\n", "{", $g4771($rcatch4843, $env4810), "}")}
else if ($T($g4813($g4812, "%return")))
{var $sequence4885 = $exp4809, $g4921 = $sequence4885[1], $g4922 = $g4771($g4921, $env4810);
return $g2114("return ", $g4922)}
else if ($T($g4813($g4812, "%begin")))
{var $g4923 = $g2122($g4771, $env4810), $sequence4887 = $exp4809, $g4924 = $sequence4887.slice(1), $g4925 = $g2252($g4923, $g4924), $g4926 = $g4700($g4925, ";\n");
return $g2114("{", $g4926, "}")}
else if ($T($g4813($g4812, "%set")))
{var $__4844 = $g2189($exp4809, 0), $rvar4845 = $g2189($exp4809, 1), $value4846 = $g2189($exp4809, 2);
return $g2114($g4771($rvar4845, $env4810), " = ", $g4771($value4846, $env4810))}
else if ($T($g4813($g4812, "%method")))
{var $__4847 = $g2189($exp4809, 0), $rarguments4848 = $g2189($exp4809, 1), $body4849 = $g2189($exp4809, 2), $name4850 = $g2148(), $previous_method4851 = $g2164($env4810, "current-method"), $g4927 = $g4771($name4850, $env4810), $g4928 = $g4700($g2252($g2122($g4771, $env4810), $rarguments4848), ", ");
$g2145($env4810, "current-method", $name4850);
var $bodyt4852 = $g4771($body4849, $env4810);
$g2145($env4810, "current-method", $previous_method4851);
var $g4931;
if ($T($g2091($body4849)))
{var $sequence4889 = $body4849, $g4929 = $sequence4889[0], $g4930 = $g2074("%begin");
$g4931 = $g2119($g4929, $g4930)}
else $g4931 = false;
var $g4932;
if ($T($g4931))
$g4932 = $bodyt4852
else $g4932 = $g2114("{", $bodyt4852, "}");
return $g2114("function ", $g4927, " (", $g4928, ")\n", $g4932)}
else if ($T($g4813($g4812, "%var")))
{var $__4853 = $g2189($exp4809, 0), $bindings4854 = $SL.call($exp4809, 1);
return $g2114("var ", $g4700($g2252(function $g4949 ($binding4855)
{var $g4856;
if ($T($g2085($binding4855, $g2086)))
$g4856 = $binding4855
else $g4856 = [$binding4855, false];
var $rvar4857 = $g2189($g4856, 0), $value4858 = $g2189($g4856, 1), $g4933 = $g4771($rvar4857, $env4810), $g4934;
if ($T($value4858))
$g4934 = $g2114(" = ", $g4771($value4858, $env4810))
else $g4934 = "";
return $g2114($g4933, $g4934)}, $bindings4854), ", "))}
else if ($T($g4813($g4812, "%native")))
{var $rfunction4900 = $g2114, $g4935 = function $g4950 ($e4859)
{if ($T($g2085($e4859, $g2090)))
return $g4771($e4859)
else return $g2147($e4859)}, $sequence4899 = $exp4809, $g4936 = $sequence4899.slice(1), $values4901 = $g2252($g4935, $g4936), $g4902 = $values4901, $g4937 = $g4902[0], $g4903 = $values4901, $g4938 = $g4903.slice(1);
return $g2242($rfunction4900, $g4937, $g4938)}
else if ($T($g4813($g4812, "%native-name")))
{var $sequence4905 = $exp4809, $g4939 = $sequence4905[1], $g4940 = $g2146($g4939);
return $g2114("\"", $g4940, "\"")}
else if ($T($g4813($g4812, "%get-property")))
{var $__4860 = $g2189($exp4809, 0), $robject4861 = $g2189($exp4809, 1), $properties4862 = $SL.call($exp4809, 2), $g4941;
if ($T($g2085($robject4861, $g3906)))
$g4941 = $g2114("(", $g4771($robject4861, $env4810), ")")
else $g4941 = $g4771($robject4861, $env4810);
var $g4944 = $g2242(function $g4951 ($result4863, $property4864)
{var $g4942;
if ($T($g2085($property4864, $g2939)))
$g4942 = $g4754($property4864)
else $g4942 = false;
var $g4943;
if ($T($g4942))
$g4943 = $g2114(".", $property4864)
else $g4943 = $g2114("[", $g4771($property4864, $env4810), "]");
return $g2114($result4863, $g4943)}, "", $properties4862);
return $g2114($g4941, $g4944)}
else {var $rfunction4865 = $g2189($exp4809, 0), $values4866 = $SL.call($exp4809, 1), $functiont4867 = $g4771($rfunction4865, $env4810), $g4945;
if ($T($g4502($rfunction4865)))
$g4945 = $g2114("(", $functiont4867, ")")
else $g4945 = $functiont4867;
var $g4946 = $g4808($values4866, $env4810);
return $g2114($g4945, $g4946)}}}, false)}
$g4808 = $g2084("compile_js_call", function $g4954 ($values4952, $env4953)
{return $g2114("(", $g4700($g2252($g2122($g4771, $env4953), $values4952), ", "), ")")}, false)
var $g4959 = $K("string"), $g4955 = $g2064.read, $g4956 = $g2061["<string-stream>"], $g4957 = $g2084("read_program", function $g4960 ($source4958)
{return $g4955($g2928($g4956, $g4959, $g2114("(", $source4958, "\n)")))}, false)
var $g4961 = $g2084("compile_expression", function $g4973 ($exp4962, $env4963)
{return $g2242(function $g4974 ($result4964, $namesfn4965)
{var $name4966 = $g2189($namesfn4965, 0), $fn4967 = $g2189($namesfn4965, 1), $result4968 = $fn4967($result4964);
return $result4968}, $exp4962, [["source", $g3212], ["macroexpanded", $g2122($g2175, $env4963)], ["lifted defines", $g2122($g3213, $env4963)], ["defined free variables", $g2122($g3410, $env4963)], ["alpha-converted", $g2122($g3685, $env4963)], ["inline", $g2122($g3757, $env4963)], ["defined free variables after inline", $g2122($g3440, $env4963)], ["ANF", $g3913], ["SCCP", function $g4975 ($exp4969)
{var $result4970 = $g4088($exp4969, $env4963);
return $result4970}], ["lifted symbols", $g2122($g4314, $env4963)], ["statements", $g2122($g4203, $env4963)], ["flattened", function $g4976 ($exp4971)
{var $result4972 = $g4443($exp4971);
return $result4972}], ["compiled", $g2122($g4771, $env4963)]])}, false)
var $g4977 = require("path")
var $g4978 = require("fs")
var $g4979 = require("vm")
var trueQ = $g1464["true?"], $g4980 = $g2084("ensure_directory", function $g4989 ($directory4981)
{var $parent4982 = $g4977.dirname($directory4981), $value4984 = $g4977.existsSync($parent4982), $g4987 = !(trueQ($value4984));
if ($T($g4987))
$g4980($parent4982);
var $value4986 = $g4977.existsSync($directory4981), $g4988 = !(trueQ($value4986));
if ($T($g4988))
return $g4978.mkdirSync($directory4981)}, false)
var $g4990 = $g2084("executable_path", function $g4992 ($module_name4991)
{return $g4977.resolve("output2", $g2114($module_name4991, ".js"))}, false)
var $g4993 = $g2084("module_path", function $g4995 ($module_name4994)
{return $g4977.resolve("output2", $g2114($module_name4994, ".rm"))}, false)
var $g4996 = $g2084("source_path", function $g4998 ($module_name4997)
{return $g4977.resolve("src", $g2114($module_name4997, ".ralph"))}, false)
var trueQ = $g1464["true?"], $g5000 = $g2084("recompileQ", function $g5007 ($module_name5001)
{var $p5002 = $g4990($module_name5001), $value5006 = $g4977.existsSync($p5002), $g5003 = !(trueQ($value5006));
if ($T($g5003))
return $g5003
else {var $p25004 = $g4996($module_name5001);
return $g4701($g2164($g4978.statSync($p5002), "mtime"), $g2164($g4978.statSync($p25004), "mtime"))}}, false)
{var $g5012 = $g1464["chain-object"], $g5013;
$g3145 = $g2084("compile_time_import_module", function $g5030 ($env5014, $module_name5015)
{var $g5016 = $SL.call(arguments, 2), $g5017 = $g2977($g5016, {names:false}), $names5018 = $g5017.names, $g5025;
if ($T($g2119($module_name5015, "ralph2/core")))
$g5025 = [$g2198, $g3318]
else {$g5013($module_name5015);
var $definitions5019 = require($module_name5015), $macros5020 = $g2076(), $symbol_macros5021 = $g2076(), $g5028 = function $g5031 ($name5022)
{var $definition5023 = $g2164($definitions5019, $name5022);
if ($T($g2164($definition5023, "%macro?")))
return $g2145($macros5020, $name5022, $definition5023)
else if ($T($g2164($definition5023, "%symbol-macro?")))
return $g2145($symbol_macros5021, $name5022, $definition5023)}, $g5024 = $names5018, $g5029;
if ($T($g5024))
$g5029 = $g5024
else $g5029 = $g3409($definitions5019);
$g2173($g5028, $g5029);
$g5025 = [$macros5020, $symbol_macros5021]};
var $macros5026 = $g2189($g5025, 0), $symbol_macros5027 = $g2189($g5025, 1);
$g5012($g2164($env5014, "macros"), $macros5026);
return $g5012($g2164($env5014, "symbol-macros"), $symbol_macros5027)}, false)}
{var $g5035;
$g3146 = $g2084("import_module", function $g5048 ($module5036, $module_name5037)
{var $g5038 = $SL.call(arguments, 2), $g5039 = $g2977($g5038, {names:false}), $names5040 = $g5039.names, $other_module5041 = $g5035($module_name5037), $rarray5045 = $g2164($module5036, "imports"), $g5042 = $names5040, $g5047;
if ($T($g5042))
$g5047 = $g5042
else $g5047 = $g2164($other_module5041, "exports");
var $value5046 = [$other_module5041, $g5047];
$rarray5045.unshift($value5046);
$rarray5045;
return $other_module5041}, false)}
{var $g5051;
$g5035 = $g2084("find_module", function $g5055 ($module_name5052)
{var $g5053 = $g5013($module_name5052);
if ($T($g5053))
return $g5053
else {var $g5054 = $g2164($g2067, $module_name5052);
if ($T($g5054))
return $g5054
else return $g5051($module_name5052)}}, false)}
{var $g5059 = $K("name"), $g5056;
$g5051 = $g2084("read_module", function $g5060 ($module_name5057)
{var $p5058 = $g4993($module_name5057);
if ($T($g4977.existsSync($p5058)))
return $g3042($g2174($g2928, $g2070, $g5059), $g4955($g2928($g4956, $g4959, $g5056($p5058))))}, false)}
$g5056 = $g2084("read_file", function $g5062 ($path5061)
{return $g4978.readFileSync($path5061).toString()}, false)
var $g5063 = $g2084("open_executable", function $g5066 ($module_name5064)
{var $p5065 = $g4990($module_name5064);
$g4980($g4977.dirname($p5065));
return $g4978.openSync($p5065, "w")}, false)
{var $g5089 = $K("module"), $g5090 = $K("exports"), trueQ = $g1464["true?"];
$g5013 = $g2084("compile_module", function $g5091 ($module_name5067)
{var $robject5077 = $g2067, $property5078 = $module_name5067, $value5079 = $HP.call($robject5077,$property5078), $g5086 = !(trueQ($value5079)), $g5087;
if ($T($g5086))
$g5087 = true
else $g5087 = false;
if ($T($g5087))
{var $module5068 = $g2928($g2070, $g5059, $module_name5067), $env5069 = $g2928($g2077, $g5089, $module5068), $source5070 = $g5056($g4996($module_name5067)), $program5071 = $g4957($source5070), $executable5072 = $g5063($module_name5067);
$g2145($g2067, $module_name5067, $module5068);
$g3145($env5069, "ralph2/core");
var $value5081 = $g2119($module_name5067, "ralph2/core"), $g5088 = !(trueQ($value5081));
if ($T($g5088))
{$g3146($module5068, "ralph2/core");
var $rarray5084 = $program5071, $value5085 = $g3147("ralph2/core", $env5069);
$rarray5084.unshift($value5085);
$rarray5084};
$g2173(function $g5092 ($expression5073)
{return $g4978.writeSync($executable5072, $g2114($g4961($expression5073, $env5069), "\n"))}, $program5071);
$g4978.closeSync($executable5072);
$g4978.writeFileSync($g4993($module_name5067), $g4770([$module_name5067, $g5090, $g2164($module5068, "exports")]));
return $module5068}}, false)}
{var $g5093 = $g2062["format-out"], $g5094 = $g2065["<date>"], $start5095 = $g2928($g5094);
$g5013("ralph2/compiler");
$g5013("ralph2/runtime.test");
$g5093("%d\n", ($g2928($g5094) - $start5095))}
