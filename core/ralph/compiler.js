var $g1464 = require("ralph/core")
{var $g2052, $g2053, $g2054, $g2055, $g2056;
$g2052 = require("ralph/stream");
$g2053 = require("ralph/format");
$g2054 = require("ralph/regexp");
$g2055 = require("ralph/reader");
$g2056 = require("ralph/date")}
var $g2057 = $g1464["make-object"], $g2058 = $g2057()
var $g2059 = $g1464["%make-class"], $g2060 = $g1464["<object>"], $g2061 = $g2059($g2060, {name:false,
exports:function $g2062 ()
{return []},
imports:function $g2063 ()
{return []},
inline:function $g2064 ()
{return []}})
var $g2065 = $g1464.symbol, $g2066 = [$g2065("%all-arguments"), $g2065("%this-method")]
var $g2067 = $g1464["make-plain-object"], $g2068 = $g2059($g2060, {module:false,
macros:function $g2069 ()
{return $g2067()},
"symbol-macros":function $g2070 ()
{return $g2067()},
identifiers:function $g2071 ()
{return $g2057()},
"defined?":function $g2072 ()
{return $g2057()},
lifted:function $g2073 ()
{return $g2057()},
"import-identifiers":function $g2074 ()
{return $g2067()}})
var trueQ = $g1464["true?"], $g2075 = $g1464["%make-function"], $g2076 = $g1464["instance?"], $g2077 = $g1464["<array>"], $g2078 = $g1464.not, $g2079 = $g1464["empty?"], $g2080 = $g1464.first, $g2081 = $g1464["<symbol>"], $g2082 = $g2075("expressionQ", function $g2104 ($form2083)
{if ($T($g2076($form2083, $g2077)))
{var $sequence2095 = $form2083, $g2096 = $sequence2095, $g2097 = (($g2096 || false).length || 0), $g2098 = 0, $value2099 = ($g2097 === $g2098), $g2102 = !(trueQ($value2099));
if ($T($g2102))
{var $sequence2101 = $form2083, $g2103 = $sequence2101[0];
return $g2076($g2103, $g2081)}}}, false)
var $g2105 = $g1464.concatenate, $g2106 = $g1464["symbol-name"], $g2107 = $g2075("transform_setter_identifier", function $g2109 ($identifier2108)
{return $g2065($g2105($g2106($identifier2108), "-setter"))}, false)
var $g2110 = $g1464["=="], $g2111 = $g1464.size, $g2112 = $g1464["every?"], $g2113 = $g1464.rcurry, $g2114 = $g2075("setter_identifierQ", function $g2124 ($form2115)
{if ($T($g2076($form2115, $g2077)))
{var $robject2117 = $form2115, $g2120 = (($robject2117 || false).length || 0), $g2121 = $g2110($g2120, 2);
if ($T($g2121))
if ($T($g2112($g2113($g2076, $g2081), $form2115)))
{var $sequence2119 = $form2115, $g2122 = $sequence2119[0], $g2123 = $g2106($g2122);
return $g2110($g2123, "setter")}}}, false)
var $g2125 = $g1464.second, $g2126 = $g2075("identifier_name", function $g2132 ($identifier2127)
{var $g2131;
if ($T($g2114($identifier2127)))
{var $sequence2129 = $identifier2127, $g2130 = $sequence2129[1];
$g2131 = $g2107($g2130)}
else $g2131 = $identifier2127;
return $g2106($g2131)}, false)
var $g2133 = 0
var $g2134 = $g2075("reset_symbol_counterN", function $g2135 ()
{return $g2133 = 0}, false)
var $g2136 = $g1464["get-setter"], $g2137, $g2138 = $g1464["as-string"], $g2139 = $g2075("generate_symbol", function $g2145 ($prefix2140)
{var $g2143;
if ($T($prefix2140))
$g2143 = $g2137($prefix2140)
else $g2143 = "g";
var $g2144 = $g2138($g2133 = ($g2133 + 1)), $name2141 = $g2105($g2143, $g2144), $result2142 = $g2065($name2141);
$g2136($result2142, "generated?", true);
return $result2142}, false)
var $g2146 = $g2075("bindN", function $g2149 ($env2147, $identifier2148)
{return $g2136($env2147, "bound?", $g2106($identifier2148), true)}, false)
var $g2150 = $g2075("unbindN", function $g2153 ($env2151, $identifier2152)
{return $g2136($env2151, "bound?", $g2106($identifier2152), false)}, false)
var $g2154 = $g2057()
var $g2155 = $g1464.get, $g2156 = $g2075("find_special_form", function $g2163 ($form2157, $env2158)
{if ($T($g2082($form2157)))
{var $sequence2160 = $form2157, $g2161 = $sequence2160[0], $g2162 = $g2106($g2161);
return $g2155($g2154, $g2162)}}, false)
{var $g2164 = $g1464["do"], $g2165 = $g1464.curry, $g2166;
$g2136($g2154, "%method", function $g2171 ($env2167, $rarguments2168, $body2169)
{$g2164($g2165($g2146, $env2167), $rarguments2168);
var $expanded_body2170 = $g2166($body2169, $env2167);
$g2164($g2165($g2150, $env2167), $rarguments2168);
return [$g2065("%method"), $rarguments2168, $expanded_body2170]})}
$g2136($g2154, "%set", function $g2175 ($env2172, $identifier2173, $value2174)
{return [$g2065("%set"), $identifier2173, $g2166($value2174, $env2172)]})
$g2136($g2154, "define", function $g2179 ($env2176, $identifier2177, $value2178)
{$g2146($env2176, $identifier2177);
return [$g2065("define"), $identifier2177, $g2166($value2178, $env2176)]})
$g2136($g2154, "%bind", function $g2187 ($env2180, $binding2181, $body2182)
{var $rvar2183 = $binding2181[0], $value2184 = $binding2181[1], $expanded_value2185 = $g2166($value2184, $env2180);
$g2146($env2180, $rvar2183);
var $result2186 = [$g2065("%bind"), [$rvar2183, $expanded_value2185], $g2166($body2182, $env2180)];
$g2150($env2180, $rvar2183);
return $result2186})
var $g2188 = $g2057()
var $g2190 = $g2075("maybe_begin", function $g2197 ($expressions2191)
{var $robject2194 = $expressions2191, $g2192 = (($robject2194 || false).length || 0);
if ($T($g2110($g2192, 0)))
return false
else if ($T($g2110($g2192, 1)))
{var $sequence2196 = $expressions2191;
return $sequence2196[0]}
else return $g2105([$g2065("%begin")], $expressions2191)}, false)
var $g2225 = $REST, $g2226 = $KEY, $g2227 = $K("end"), $g2228 = $K("start"), $g2200 = $g1464["find-key"], $g2201 = $g1464["="], $g2202 = $g1464["copy-sequence"], $g2203 = $g1464.element, $g2204 = $g1464.inc, $g2205 = $g2075("analyze_lambda_list", function $g2229 ($list2206)
{var $position2207 = function $g2230 ($symbol2208)
{return $g2200($list2206, $g2165($g2201, $symbol2208))}, $rest2209 = $position2207($g2225), $key2210 = $position2207($g2226), $g2211 = $rest2209, $g2219;
if ($T($g2211))
$g2219 = $g2211
else {var $g2212 = $key2210;
if ($T($g2212))
$g2219 = $g2212
else {var $robject2214 = $list2206;
$g2219 = (($robject2214 || false).length || 0)}};
var $g2220 = $g2202($list2206, $g2227, $g2219), $g2222;
if ($T($rest2209))
{var $rnumber2216 = $rest2209, $g2221 = ($rnumber2216 + 1);
$g2222 = $g2203($list2206, $g2221)}
else $g2222 = false;
var $g2224;
if ($T($key2210))
{var $rnumber2218 = $key2210, $g2223 = ($rnumber2218 + 1);
$g2224 = $g2202($list2206, $g2228, $g2223)}
else $g2224 = false;
return [$g2220, $g2222, $g2224]}, false)
var $g2231 = $g1464.reduce, $g2232 = $g2075("wrap", function $g2237 ($form2233)
{var $wrappers2234 = $SL.call(arguments, 1);
return $g2231(function $g2238 ($result2235, $wrapper2236)
{return $wrapper2236($result2235)}, $form2233, $wrappers2234)}, false)
var trueQ = $g1464["true?"], $g2241 = $g1464.map, $g2242 = $g1464.reduce1, $g2243 = $g2075("wrap_restSkeys", function $g2338 ($body2244, $all2245, $required2246, $rest2247, $key2248)
{var $restq2249 = $rest2247, $g2250 = $rest2247, $rest2251;
if ($T($g2250))
$rest2251 = $g2250
else {var $sequence2271 = $key2248, $g2272 = $sequence2271, $g2273 = (($g2272 || false).length || 0), $g2274 = 0, $value2275 = ($g2273 === $g2274), $g2320 = !(trueQ($value2275));
if ($T($g2320))
$rest2251 = $g2139()
else $rest2251 = false};
return $g2232($body2244, function $g2339 ($body2252)
{var $sequence2286 = $key2248, $g2287 = $sequence2286, $g2288 = (($g2287 || false).length || 0), $g2289 = 0, $g2321 = ($g2288 === $g2289);
if ($T($g2321))
return $body2252
else {var $key_values2254 = $g2241(function $g2340 ($binding2253)
{if ($T($g2076($binding2253, $g2077)))
return $binding2253
else return [$binding2253, false]}, $key2248), $g2322 = $g2065("bind-properties"), $g2323 = $g2241($g2080, $key_values2254), $g2324 = $g2065("%keys"), $g2325 = [$g2065("%object")], $rfunction2298 = $g2105, $values2299 = $g2241(function $g2341 ($key_value2255)
{var $key2256 = $key_value2255[0], $value2257 = $key_value2255[1];
return [$g2106($key2256), $value2257]}, $key_values2254), $g2300 = $values2299, $g2326 = $g2300[0], $g2301 = $values2299, $g2327 = $g2301.slice(1), $g2328 = $g2231($rfunction2298, $g2326, $g2327), $g2329 = $g2105($g2325, $g2328), $g2330 = [$g2324, $rest2251, $g2329];
return [$g2322, $g2323, $g2330, $body2252]}}, function $g2342 ($body2258)
{var $g2259 = $restq2249, $g2331;
if ($T($g2259))
$g2331 = $g2259
else {var $sequence2313 = $key2248, $g2314 = $sequence2313, $g2315 = (($g2314 || false).length || 0), $g2316 = 0, $value2317 = ($g2315 === $g2316);
$g2331 = !(trueQ($value2317))};
if ($T($g2331))
{var $g2332 = $g2065("bind"), $g2333 = $g2065("%native-call"), $robject2319 = $required2246, $g2334 = (($robject2319 || false).length || 0), $g2335 = [$g2333, "$SL.call", $all2245, $g2334], $g2336 = [$rest2251, $g2335], $g2337 = [$g2336];
return [$g2332, $g2337, $body2258]}
else return $body2258})}, false)
$g2136($g2188, "begin", function $g2345 ($__2343)
{var $expressions2344 = $SL.call(arguments, 1);
return $g2190($expressions2344)})
$g2136($g2188, "method", function $g2354 ($__2347, $rarguments2348)
{var $body2349 = $SL.call(arguments, 2), $g2350 = $g2205($rarguments2348), $required2351 = $g2350[0], $rest2352 = $g2350[1], $key2353 = $g2350[2];
return [$g2065("%method"), $required2351, $g2243($g2190($body2349), $g2065("%all-arguments"), $required2351, $rest2352, $key2353)]})
{var $g2355 = $g1464.reverse;
$g2136($g2188, "bind", function $g2378 ($__2356, $bindings2357)
{var $body2358 = $SL.call(arguments, 2), $sequence2371 = $bindings2357, $g2372 = $sequence2371, $g2373 = (($g2372 || false).length || 0), $g2374 = 0, $g2375 = ($g2373 === $g2374);
if ($T($g2375))
return $g2190($body2358)
else return $g2231(function $g2379 ($body2359, $binding2360)
{var $g2376 = $g2065("%bind"), $g2377;
if ($T($g2076($binding2360, $g2081)))
$g2377 = [$binding2360, false]
else $g2377 = $binding2360;
return [$g2376, $g2377, $body2359]}, $g2190($body2358), $g2355($bindings2357))})}
$g2136($g2188, "if", function $g2384 ($__2380, $test2381, $then2382, $relse2383)
{return [$g2065("%if"), $test2381, $then2382, $relse2383]})
{var trueQ = $g1464["true?"], $g2385 = $g1464.rest;
$g2136($g2188, "set!", function $g2408 ($__2386, $place2387)
{var $values2388 = $SL.call(arguments, 2), $g2401;
if ($T($g2076($place2387, $g2077)))
{var $sequence2391 = $place2387, $g2399 = $sequence2391[0], $g2400 = $g2065("%get-property"), $value2392 = $g2110($g2399, $g2400);
$g2401 = !(trueQ($value2392))}
else $g2401 = false;
if ($T($g2401))
{var $sequence2394 = $place2387, $g2402 = $sequence2394[0], $g2403 = $g2107($g2402), $g2404 = [$g2403], $sequence2396 = $place2387, $g2405 = $sequence2396.slice(1);
return $g2105($g2404, $g2405, $values2388)}
else {var $g2406 = $g2065("%set"), $sequence2398 = $values2388, $g2407 = $sequence2398[0];
return [$g2406, $place2387, $g2407]}})}
$g2136($g2188, "parallel-set!", function $g2429 ($__2409, $rvar2410, $value2411)
{var $clauses2412 = $SL.call(arguments, 3), $sequence2424 = $clauses2412, $g2425 = $sequence2424, $g2426 = (($g2425 || false).length || 0), $g2427 = 0, $g2428 = ($g2426 === $g2427);
if ($T($g2428))
return [$g2065("set!"), $rvar2410, $value2411]
else {var $temp2413 = $g2139();
return [$g2065("bind"), [[$temp2413, $value2411]], $g2105([$g2065("parallel-set!")], $clauses2412), [$g2065("set!"), $rvar2410, $temp2413]]}})
{var $g2462 = $K("else"), trueQ = $g1464["true?"];
$g2136($g2188, "cond", function $g2463 ($__2431)
{var $cases2432 = $SL.call(arguments, 1), $sequence2448 = $cases2432, $g2449 = $sequence2448, $g2450 = (($g2449 || false).length || 0), $g2451 = 0, $value2452 = ($g2450 === $g2451), $g2457 = !(trueQ($value2452));
if ($T($g2457))
{var $sequence2454 = $cases2432, $g2433 = $sequence2454[0], $test2434 = $g2433[0], $then2435 = $SL.call($g2433, 1), $then2436 = $g2190($then2435);
if ($T($g2110($test2434, $g2462)))
return $then2436
else {var $g2458 = $g2065("if"), $g2459 = [$g2065("cond")], $sequence2456 = $cases2432, $g2460 = $sequence2456.slice(1), $g2461 = $g2105($g2459, $g2460);
return [$g2458, $test2434, $then2436, $g2461]}}})}
$g2136($g2188, "when", function $g2467 ($__2464, $test2465)
{var $body2466 = $SL.call(arguments, 2);
return [$g2065("if"), $test2465, $g2190($body2466), false]})
$g2136($g2188, "unless", function $g2471 ($__2468, $test2469)
{var $body2470 = $SL.call(arguments, 2);
return [$g2065("if"), [$g2065("not"), $test2469], $g2190($body2470), false]})
$g2136($g2188, "and", function $g2489 ($__2473)
{var $values2474 = $SL.call(arguments, 1), $robject2477 = $values2474, $g2475 = (($robject2477 || false).length || 0);
if ($T($g2110($g2475, 0)))
return true
else if ($T($g2110($g2475, 1)))
{var $sequence2479 = $values2474;
return $sequence2479[0]}
else {var $g2484 = $g2065("when"), $sequence2481 = $values2474, $g2485 = $sequence2481[0], $g2486 = [$g2065("and")], $sequence2483 = $values2474, $g2487 = $sequence2483.slice(1), $g2488 = $g2105($g2486, $g2487);
return [$g2484, $g2485, $g2488]}})
$g2136($g2188, "or", function $g2512 ($__2491)
{var $values2492 = $SL.call(arguments, 1), $robject2496 = $values2492, $g2493 = (($robject2496 || false).length || 0);
if ($T($g2110($g2493, 0)))
return false
else if ($T($g2110($g2493, 1)))
{var $sequence2498 = $values2492;
return $sequence2498[0]}
else {var $value2494 = $g2139(), $g2503 = $g2065("bind"), $sequence2500 = $values2492, $g2504 = $sequence2500[0], $g2505 = [$value2494, $g2504], $g2506 = [$g2505], $g2507 = $g2065("if"), $g2508 = [$g2065("or")], $sequence2502 = $values2492, $g2509 = $sequence2502.slice(1), $g2510 = $g2105($g2508, $g2509), $g2511 = [$g2507, $value2494, $value2494, $g2510];
return [$g2503, $g2506, $g2511]}})
$g2136($g2188, "if-bind", function $g2520 ($__2513, $binding2514, $then2515, $relse2516)
{var $rvar2517 = $binding2514[0], $value2518 = $binding2514[1], $temp2519 = $g2139();
return [$g2065("bind"), [[$temp2519, $value2518]], [$g2065("if"), $temp2519, [$g2065("bind"), [[$rvar2517, $temp2519]], $then2515], $relse2516]]})
$g2136($g2188, "while", function $g2524 ($__2521, $test2522)
{var $body2523 = $SL.call(arguments, 2);
return [$g2065("%while"), $test2522, $g2190($body2523)]})
$g2136($g2188, "until", function $g2528 ($__2525, $test2526)
{var $body2527 = $SL.call(arguments, 2);
return $g2105([$g2065("while"), [$g2065("not"), $test2526]], $body2527)})
$g2136($g2188, "dotimes", function $g2547 ($__2530, $binding2531)
{var $body2532 = $SL.call(arguments, 2), $temp2533 = $g2139(), $rvar2534 = $binding2531[0], $count2535 = $binding2531[1], $result2536 = $binding2531[2], $g2538 = $g2065("bind"), $g2539 = [[$temp2533, $count2535]], $g2540 = $g2065("for"), $g2541 = [[$rvar2534, 0, [$g2065("+"), $rvar2534, 1]]], $g2542 = [$g2065(">="), $rvar2534, $temp2533], $g2537 = $result2536, $g2543;
if ($T($g2537))
$g2543 = $g2537
else $g2543 = false;
var $g2544 = [$g2542, $g2543], $g2545 = [$g2540, $g2541, $g2544], $g2546 = $g2105($g2545, $body2532);
return [$g2538, $g2539, $g2546]})
{var trueQ = $g1464["true?"], $g2554 = $g1464["any?"], $g2555 = $g1464["push-last"], $g2556 = $g1464.slice, $g2557 = $g1464.third;
$g2136($g2188, "for", function $g2652 ($__2558, $clauses2559, $end2560)
{var $body2561 = $SL.call(arguments, 3), $init_clauses2562 = [], $next_clauses2563 = [], $vars2564 = $g2241($g2080, $clauses2559), $g2565 = $clauses2559, $g2566, $g2567, $g2568 = [$g2565];
while ($T(true))
{var $g2569 = $g2566, $value2574;
if ($T($g2569))
$value2574 = $g2569
else $value2574 = $g2554($g2079, $g2568);
var $g2638 = !(trueQ($value2574));
if ($T($g2638))
{var $sequence2576 = $g2565, $clause2570 = $sequence2576[0];
(function $g2653 ($clause2571)
{var $rarray2585 = $init_clauses2562, $rarray2582 = $clause2571, $start2583 = 0, $end2584 = 2, $value2586 = $rarray2582.slice($start2583, $end2584);
$rarray2585.push($value2586);
$rarray2585;
var $rarray2591 = $next_clauses2563, $sequence2590 = $clause2571, $value2592 = $sequence2590[0];
$rarray2591.push($value2592);
$rarray2591;
var $rarray2597 = $next_clauses2563, $sequence2596 = $clause2571, $value2598 = $sequence2596[2];
$rarray2597.push($value2598);
return $rarray2597})($clause2570);
var $sequence2600 = $g2565, $g2637 = $sequence2600.slice(1);
$g2565 = $g2637;
$g2568 = [$g2565]}
else break};
$g2567;
var $g2639 = $g2065("bind"), $g2640 = $g2065("while"), $sequence2611 = $end2560, $g2612 = $sequence2611, $g2613 = (($g2612 || false).length || 0), $g2614 = 0, $g2572 = ($g2613 === $g2614), $g2643;
if ($T($g2572))
$g2643 = $g2572
else {var $g2641 = $g2065("not"), $sequence2616 = $end2560, $g2642 = $sequence2616[0];
$g2643 = [$g2641, $g2642]};
var $g2644 = $g2105([$g2105([$g2065("method"), $vars2564], $body2561)], $vars2564), $g2645 = $g2105([$g2065("parallel-set!")], $next_clauses2563), $g2646 = [$g2640, $g2643, $g2644, $g2645], $g2647 = $g2105($g2646), $sequence2629 = $end2560, $sequence2630 = $sequence2629.slice(1), $g2631 = $sequence2630, $g2632 = (($g2631 || false).length || 0), $g2633 = 0, $value2634 = ($g2632 === $g2633), $g2648 = !(trueQ($value2634)), $g2651;
if ($T($g2648))
{var $g2649 = [$g2065("begin")], $sequence2636 = $end2560, $g2650 = $sequence2636.slice(1);
$g2651 = $g2105($g2649, $g2650)}
else $g2651 = false;
return [$g2639, $init_clauses2562, $g2647, $g2651]})}
$g2136($g2188, "for-each", function $g2728 ($__2655, $clauses2656, $end2657)
{var $body2658 = $SL.call(arguments, 3), $clauses2660 = $g2241(function $g2729 ($clause2659)
{return $g2105([$g2139()], $clause2659)}, $clauses2656), $endq2661 = $g2139(), $values2662 = $g2139(), $result2663 = $g2139(), $g2700 = $g2065("begin"), $vars2664 = $g2241($g2125, $clauses2660), $g2701 = $g2105([$g2105([$g2065("method"), $vars2664], $body2658)], $vars2664), $g2702 = [$g2700, $g2701], $g2708 = $g2241(function $g2730 ($clause2665)
{var $g2703 = $g2065("set!"), $sequence2679 = $clause2665, $g2704 = $sequence2679[0], $g2705 = $g2065("rest"), $sequence2681 = $clause2665, $g2706 = $sequence2681[0], $g2707 = [$g2705, $g2706];
return [$g2703, $g2704, $g2707]}, $clauses2660), $g2709 = [[$g2065("set!"), $values2662, $g2105([$g2065("%array")], $g2241($g2080, $clauses2660))]], $body2666 = $g2105($g2702, $g2708, $g2709), $g2710 = $g2065("bind"), $g2711 = $g2105($g2241(function $g2731 ($clause2667)
{var $temp2668 = $clause2667[0], $rvar2669 = $clause2667[1], $values2670 = $clause2667[2];
return [$temp2668, $values2670]}, $clauses2660), [[$endq2661, false], [$result2663, false], [$values2662, $g2105([$g2065("%array")], $g2241($g2080, $clauses2660))]]), $g2712 = $g2065("until"), $g2713 = [$g2065("or"), $endq2661, [$g2065("any?"), $g2065("empty?"), $values2662]], $g2714 = $g2065("bind"), $g2715 = $g2241(function $g2732 ($clause2671)
{var $temp2672 = $clause2671[0], $rvar2673 = $clause2671[1], $values2674 = $clause2671[2];
return [$rvar2673, [$g2065("first"), $temp2672]]}, $clauses2660), $sequence2683 = $end2657, $g2675 = $sequence2683[0], $g2725;
if ($T($g2675))
{var $end_test2676 = $g2675, $g2716 = $g2065("if"), $g2717 = $g2065("begin"), $g2718 = $g2065("set!"), $sequence2685 = $end2657, $results2677 = $sequence2685.slice(1), $sequence2696 = $results2677, $g2697 = $sequence2696, $g2698 = (($g2697 || false).length || 0), $g2699 = 0, $g2719 = ($g2698 === $g2699), $g2720;
if ($T($g2719))
$g2720 = [false]
else $g2720 = $results2677;
var $g2721 = $g2190($g2720), $g2722 = [$g2718, $result2663, $g2721], $g2723 = [$g2065("set!"), $endq2661, true], $g2724 = [$g2717, $g2722, $g2723];
$g2725 = [$g2716, $end_test2676, $g2724, $body2666]}
else $g2725 = $body2666;
var $g2726 = [$g2714, $g2715, $g2725], $g2727 = [$g2712, $g2713, $g2726];
return [$g2710, $g2711, $g2727, $result2663]})
$g2136($g2188, "bind-properties", function $g2739 ($__2733, $properties2734, $robject2735)
{var $body2736 = $SL.call(arguments, 3), $objectt2737 = $g2139();
return $g2105([$g2065("bind"), $g2105([[$objectt2737, $robject2735]], $g2241(function $g2740 ($property2738)
{return [$property2738, [$g2065("%get-property"), $objectt2737, $g2106($property2738)]]}, $properties2734))], $body2736)})
$g2136($g2188, "select", function $g2757 ($__2741, $value2742, $test2743)
{var $cases2744 = $SL.call(arguments, 3), $valuet2745 = $g2139(), $testt2746;
if ($T($g2076($test2743, $g2081)))
$testt2746 = $test2743
else $testt2746 = $g2139();
var $test_expression2747 = function $g2758 ($test_value2748)
{return [$testt2746, $valuet2745, $test_value2748]}, $g2752 = $g2065("bind"), $g2753 = [[$valuet2745, $value2742]], $g2754;
if ($T($g2076($test2743, $g2081)))
$g2754 = []
else $g2754 = [[$testt2746, $test2743]];
var $g2755 = $g2105($g2753, $g2754), $g2756 = $g2105([$g2065("cond")], $g2241(function $g2759 ($rcase2749)
{var $tests2750 = $rcase2749[0], $then2751 = $SL.call($rcase2749, 1);
if ($T($g2110($tests2750, $g2462)))
return $rcase2749
else return $g2105([$g2105([$g2065("or")], $g2241($test_expression2747, $tests2750))], $then2751)}, $cases2744));
return [$g2752, $g2755, $g2756]})
var $g2761 = $g2075("destructure", function $g2775 ($bindings2762, $values2763, $body2764)
{if ($T($g2076($values2763, $g2081)))
{var $g2765 = $g2205($bindings2762), $required2766 = $g2765[0], $rest2767 = $g2765[1], $key2768 = $g2765[2], $robject2774 = $required2766, $i2769 = (($robject2774 || false).length || 0);
return $g2231(function $g2776 ($body2770, $binding2771)
{$i2769 = ($i2769 - 1);
if ($T($g2076($binding2771, $g2081)))
return [$g2065("bind"), [[$binding2771, [$g2065("%get-property"), $values2763, $i2769]]], $body2770]
else return $g2761($binding2771, [$g2065("%get-property"), $values2763, $i2769], $body2770)}, $g2243($body2764, $values2763, $required2766, $rest2767, $key2768), $g2355($required2766))}
else {var $rvar2772 = $g2139();
return [$g2065("bind"), [[$rvar2772, $values2763]], $g2761($bindings2762, $rvar2772, $body2764)]}}, false)
$g2136($g2188, "destructuring-bind", function $g2781 ($__2777, $bindings2778, $values2779)
{var $body2780 = $SL.call(arguments, 3);
return $g2761($bindings2778, $values2779, $g2105([$g2065("begin")], $body2780))})
$g2136($g2188, "bind-methods", function $g2789 ($__2782, $bindings2783)
{var $body2784 = $SL.call(arguments, 2);
return $g2105([$g2065("bind"), $g2241($g2080, $bindings2783)], $g2241(function $g2790 ($binding2785)
{var $identifier2786 = $binding2785[0], $rarguments2787 = $binding2785[1], $body2788 = $SL.call($binding2785, 2);
return [$g2065("set!"), $identifier2786, $g2105([$g2065("method"), $rarguments2787], $body2788)]}, $bindings2783), $body2784)})
$g2136($g2188, "inc!", function $g2800 ($__2792, $robject2793, $value2794)
{var $g2796 = $g2065("set!"), $g2797 = $g2065("+"), $g2795 = $value2794, $g2798;
if ($T($g2795))
$g2798 = $g2795
else $g2798 = 1;
var $g2799 = [$g2797, $robject2793, $g2798];
return [$g2796, $robject2793, $g2799]})
$g2136($g2188, "dec!", function $g2810 ($__2802, $robject2803, $value2804)
{var $g2806 = $g2065("set!"), $g2807 = $g2065("-"), $g2805 = $value2804, $g2808;
if ($T($g2805))
$g2808 = $g2805
else $g2808 = 1;
var $g2809 = [$g2807, $robject2803, $g2808];
return [$g2806, $robject2803, $g2809]})
$g2136($g2188, "+", function $g2828 ($__2811)
{var $values2812 = $SL.call(arguments, 1), $sequence2823 = $values2812, $g2824 = $sequence2823, $g2825 = (($g2824 || false).length || 0), $g2826 = 0, $g2827 = ($g2825 === $g2826);
if ($T($g2827))
return 0
else return $g2105([$g2065("%plus")], $values2812)})
$g2136($g2188, "-", function $g2847 ($__2829, $minuend2830)
{var $subtrahends2831 = $SL.call(arguments, 2), $sequence2842 = $subtrahends2831, $g2843 = $sequence2842, $g2844 = (($g2843 || false).length || 0), $g2845 = 0, $g2846 = ($g2844 === $g2845);
if ($T($g2846))
return [$g2065("%native-call"), "-", $minuend2830]
else return $g2105([$g2065("%minus"), $minuend2830], $subtrahends2831)})
$g2136($g2188, "*", function $g2865 ($__2848)
{var $values2849 = $SL.call(arguments, 1), $sequence2860 = $values2849, $g2861 = $sequence2860, $g2862 = (($g2861 || false).length || 0), $g2863 = 0, $g2864 = ($g2862 === $g2863);
if ($T($g2864))
return 1
else return $g2105([$g2065("%times")], $values2849)})
$g2136($g2188, "/", function $g2884 ($__2866, $numerator2867)
{var $denominators2868 = $SL.call(arguments, 2), $sequence2879 = $denominators2868, $g2880 = $sequence2879, $g2881 = (($g2880 || false).length || 0), $g2882 = 0, $g2883 = ($g2881 === $g2882);
if ($T($g2883))
return [$g2065("%divide"), 1, $numerator2867]
else return $g2105([$g2065("%divide"), $numerator2867], $denominators2868)})
$g2136($g2188, "call-next-method", function $g2886 ($__2885)
{return [[$g2065("%get-property"), $g2065("next-method"), "apply"], [$g2065("%native"), "null"], [$g2065("%native"), "arguments"]]})
var trueQ = $g1464["true?"], $g2887 = $g2075("transform_quoted", function $g2913 ($form2888)
{if ($T($g2076($form2888, $g2077)))
{var $sequence2900 = $form2888, $g2901 = $sequence2900, $g2902 = (($g2901 || false).length || 0), $g2903 = 0, $value2904 = ($g2902 === $g2903), $g2909 = !(trueQ($value2904)), $g2912;
if ($T($g2909))
{var $sequence2906 = $form2888, $g2910 = $sequence2906[0], $g2911 = $g2106($g2910);
$g2912 = $g2110($g2911, "%comma")}
else $g2912 = false;
if ($T($g2912))
{var $sequence2908 = $form2888;
return $sequence2908[1]}
else return $g2105([$g2065("%array")], $g2241($g2887, $form2888))}
else if ($T($g2076($form2888, $g2081)))
return [$g2065("symbol"), $g2106($form2888)]
else return $form2888}, false)
$g2136($g2188, "%backquote", function $g2916 ($__2914, $exp2915)
{return $g2887($exp2915)})
{var $g2924 = $K("message"), $g2917 = $g1464.signal, $g2918 = $g1464.make, $g2919 = $g1464["<error>"];
$g2136($g2188, "%comma", function $g2925 ($__2920, $value2921)
{var $error2923 = $g2918($g2919, $g2924, "comma not inside backquote");
throw($error2923);
return false})}
var $g2926 = $g2918($g2919, $g2924, "unsupported name for call in dot")
{var $g2928 = $g1464["<string>"];
$g2136($g2188, ".", function $g2943 ($__2929, $value2930)
{var $calls2931 = $SL.call(arguments, 2);
return $g2231(function $g2944 ($value2932, $call2933)
{var $property2934 = $call2933[0], $rarguments2935 = $SL.call($call2933, 1), $g2939 = $g2065("%get-property"), $g2936 = $property2934, $g2940;
if ($T($g2076($g2936, $g2928)))
$g2940 = $property2934
else if ($T($g2076($g2936, $g2081)))
$g2940 = $g2106($property2934)
else {var $error2938 = $g2926;
throw($error2938);
$g2940 = false};
var $g2941 = [$g2939, $value2932, $g2940], $g2942 = [$g2941];
return $g2105($g2942, $rarguments2935)}, $value2930, $calls2931)})}
var $g2946 = $g2075("simplify_arguments", function $g2958 ($rarguments2947)
{var $g2948 = $g2205($rarguments2947), $required2949 = $g2948[0], $rest2950 = $g2948[1], $key2951 = $g2948[2], $required2953 = $g2241(function $g2959 ($argument2952)
{if ($T($g2076($argument2952, $g2077)))
{var $sequence2955 = $argument2952;
return $sequence2955[0]}
else return $argument2952}, $required2949), $g2956;
if ($T($rest2950))
$g2956 = $g2105([$g2225], $rest2950)
else $g2956 = [];
var $g2957;
if ($T($key2951))
$g2957 = $g2105([$g2226], $key2951)
else $g2957 = [];
return $g2105($required2953, $g2956, $g2957)}, false)
var trueQ = $g1464["true?"], $g2964 = $g1464[">"], $g2965 = $g1464["%keys"], $g2966 = $g2075("make_function_definer", function $g3023 ($macro_name2967, $definer_name2968)
{var $g2969 = $SL.call(arguments, 2), $g2970 = $g2965($g2969, {"type/existing?":false,
"record?":false}), $typesexistingq2971 = $g2970["type/existing?"], $recordq2972 = $g2970["record?"];
return function $g3024 ($env2973, $identifier2974, $rarguments2975)
{var $body2976 = $SL.call(arguments, 3), $g2977;
if ($T($g2114($identifier2974)))
{var $sequence2985 = $identifier2974, $g3012 = $sequence2985[1], $g3013 = $g2107($g3012);
$g2977 = [true, $g3013]}
else $g2977 = [false, $identifier2974];
var $setterq2978 = $g2977[0], $identifier2979 = $g2977[1], $g2980 = $g2076($identifier2979, $g2081), $value2987;
if ($T($g2980))
$value2987 = $g2980
else $value2987 = $setterq2978;
var $g3014 = !(trueQ($value2987));
if ($T($g3014))
{var $error2989 = $g2918($g2919, $g2924, $g2105($macro_name2967, ": ", "name not <var> or (setter <var>)"));
throw($error2989);
false};
var $g3015;
if ($T($typesexistingq2971))
{var $sequence3000 = $rarguments2975, $g3001 = $sequence3000, $g3002 = (($g3001 || false).length || 0), $g3003 = 0;
$g3015 = ($g3002 === $g3003)}
else $g3015 = false;
if ($T($g3015))
{var $error3005 = $g2918($g2919, $g2924, $g2105($macro_name2967, ": ", "method has no arguments"));
throw($error3005);
false};
var $simplified_arguments2981 = $g2946($rarguments2975), $method_definition2982 = $g2166($g2105([$g2065("method"), $simplified_arguments2981], $body2976), $env2973);
if ($T($recordq2972))
$g2136($env2973, "module", "functions", $g2106($identifier2979), $method_definition2982);
var $g3016 = $g2065("define"), $g3017 = [$g2065($definer_name2968), [$g2065("%native-name"), $g2106($identifier2979)], $method_definition2982, $setterq2978], $g3021;
if ($T($typesexistingq2971))
{var $sequence3007 = $rarguments2975, $head2983 = $sequence3007[0], $g3019;
if ($T($g2076($head2983, $g2077)))
{var $robject3009 = $head2983, $g3018 = (($robject3009 || false).length || 0);
$g3019 = $g2964($g3018, 1)}
else $g3019 = false;
var $g3020;
if ($T($g3019))
{var $sequence3011 = $head2983;
$g3020 = $sequence3011[1]}
else $g3020 = $g2065("<object>");
$g3021 = [$g3020, $identifier2979]}
else $g3021 = [];
var $g3022 = $g2105($g3017, $g3021);
return [$g3016, $identifier2979, $g3022]}}, false)
{var $g3050 = $K("type/existing?"), $g3051 = $K("record?"), trueQ = $g1464["true?"], $g3030 = $g1464.apply, $g3031 = [["define-function", "%make-function", $g3050, false, $g3051, true], ["define-method", "%make-method", $g3050, true]], $g3032, $g3033, $g3034 = [$g3031];
while ($T(true))
{var $g3035 = $g3032, $value3039;
if ($T($g3035))
$value3039 = $g3035
else $value3039 = $g2554($g2079, $g3034);
var $g3049 = !(trueQ($value3039));
if ($T($g3049))
{var $sequence3041 = $g3031, $rarguments3036 = $sequence3041[0];
(function $g3052 ($rarguments3037)
{var $sequence3043 = $rarguments3037, $g3046 = $sequence3043[0], $g3047 = $g3030($g2966, $rarguments3037);
return $g2136($g2188, $g3046, $g3047)})($rarguments3036);
var $sequence3045 = $g3031, $g3048 = $sequence3045.slice(1);
$g3031 = $g3048;
$g3034 = [$g3031]}
else break};
$g3033}
$g2136($g2188, "define-generic", function $g3056 ($__3053, $identifier3054, $rarguments3055)
{return [$g2065("define"), $identifier3054, [$g2065("%make-generic"), [$g2065("%native-name"), $g2106($identifier3054)]]]})
{var trueQ = $g1464["true?"];
$g2136($g2188, "define-class", function $g3129 ($__3062, $identifier3063, $superclass3064)
{var $properties3065 = $SL.call(arguments, 3), $robject3066 = [$g2065("%object")], $g3067 = $properties3065, $g3068, $g3069, $g3070 = [$g3067];
while ($T(true))
{var $g3071 = $g3068, $value3075;
if ($T($g3071))
$value3075 = $g3071
else $value3075 = $g2554($g2079, $g3070);
var $g3123 = !(trueQ($value3075));
if ($T($g3123))
{var $sequence3077 = $g3067, $property3072 = $sequence3077[0];
(function $g3130 ($property3073)
{if ($T($g2076($property3073, $g2077)))
{var $rarray3082 = $robject3066, $sequence3081 = $property3073, $g3118 = $sequence3081[0], $value3083 = $g2106($g3118);
$rarray3082.push($value3083);
$rarray3082;
var $rarray3088 = $robject3066, $g3119 = $g2065("method"), $g3120 = [], $sequence3087 = $property3073, $g3121 = $sequence3087[1], $value3089 = [$g3119, $g3120, $g3121];
$rarray3088.push($value3089);
return $rarray3088}
else {var $rarray3092 = $robject3066, $value3093 = $g2106($property3073);
$rarray3092.push($value3093);
$rarray3092;
var $rarray3096 = $robject3066, $value3097 = undefined;
$rarray3096.push($value3097);
return $rarray3096}})($property3072);
var $sequence3099 = $g3067, $g3122 = $sequence3099.slice(1);
$g3067 = $g3122;
$g3070 = [$g3067]}
else break};
$g3069;
var $g3124 = $g2065("define"), $g3125 = $g2065("%make-class"), $sequence3111 = $superclass3064, $g3112 = $sequence3111, $g3113 = (($g3112 || false).length || 0), $g3114 = 0, $value3115 = ($g3113 === $g3114), $g3126 = !(trueQ($value3115)), $g3127;
if ($T($g3126))
{var $sequence3117 = $superclass3064;
$g3127 = $sequence3117[0]}
else $g3127 = false;
var $g3128 = [$g3125, $g3127, $robject3066];
return [$g3124, $identifier3063, $g3128]})}
{var $g3163 = $K("names"), $g3133, $g3134, $g3135;
$g2136($g2188, "define-module", function $g3164 ($env3136, $__3137)
{var $g3138 = $SL.call(arguments, 2), $g3139 = $g2965($g3138, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), $rimport3140 = $g3139["import"], $rexport3141 = $g3139["export"], $compile_time_import3142 = $g3139["compile-time-import"], $inline3143 = $g3139.inline;
$g2136($env3136, "module", "exports", $g2241($g2126, $rexport3141));
$g2164(function $g3165 ($rimport3144)
{var $g3156;
if ($T($g2076($rimport3144, $g2077)))
{var $sequence3149 = $rimport3144;
$g3156 = $sequence3149[0]}
else $g3156 = $rimport3144;
var $module_name3145 = $g2106($g3156), $g3158;
if ($T($g2076($rimport3144, $g2077)))
{var $sequence3151 = $rimport3144, $g3157 = $sequence3151.slice(1);
$g3158 = $g2241($g2126, $g3157)}
else $g3158 = false;
return $g3133($env3136, $module_name3145, $g3163, $g3158)}, $compile_time_import3142);
$g2136($env3136, "module", "inline", $g2241($g2126, $inline3143));
return $g2190($g2241(function $g3166 ($rimport3146)
{var $g3159;
if ($T($g2076($rimport3146, $g2077)))
{var $sequence3153 = $rimport3146;
$g3159 = $sequence3153[0]}
else $g3159 = $rimport3146;
var $module_name3147 = $g2106($g3159), $g3160 = $g2155($env3136, "module"), $g3162;
if ($T($g2076($rimport3146, $g2077)))
{var $sequence3155 = $rimport3146, $g3161 = $sequence3155.slice(1);
$g3162 = $g2241($g2126, $g3161)}
else $g3162 = false;
$g3134($g3160, $module_name3147, $g3163, $g3162);
return $g3135($module_name3147, $env3136)}, $rimport3140))})}
$g3135 = $g2075("make_import_definition", function $g3170 ($module_name3167, $env3168)
{var $identifier3169 = $g2139();
$g2136($env3168, "import-identifiers", $module_name3167, $identifier3169);
return [$g2065("define"), $identifier3169, [[$g2065("%native"), "require"], $module_name3167]]}, false)
$g2136($g2188, "define-macro", function $g3175 ($env3171, $identifier3172, $rarguments3173)
{var $body3174 = $SL.call(arguments, 3);
return [$g2065("begin"), $g2105([$g2065("define-function"), $identifier3172, $g2105([$g2139()], $rarguments3173)], $body3174), [$g2065("set!"), [$g2065("%get-property"), $identifier3172, "%macro?"], true]]})
$g2136($g2188, "define-symbol-macro", function $g3180 ($env3176, $identifier3177, $rarguments3178)
{var $body3179 = $SL.call(arguments, 3);
return [$g2065("begin"), $g2105([$g2065("define-function"), $identifier3177, []], $body3179), [$g2065("set!"), [$g2065("%get-property"), $identifier3177, "%symbol-macro?"], true]]})
$g2136($g2188, "handler-case", function $g3197 ($__3184, $body3185)
{var $cases3186 = $SL.call(arguments, 2), $condition_var3187 = $g2139();
return [$g2065("%try"), $body3185, $condition_var3187, $g2105([$g2065("cond")], $g2241(function $g3198 ($rcase3188)
{var $g3189 = $rcase3188[0], $type3190 = $g3189[0], $g3191 = $SL.call($g3189, 1), $g3192 = $g2965($g3191, {condition:false}), $condition3193 = $g3192.condition, $body3194 = $SL.call($rcase3188, 1), $g3195 = [[$g2065("instance?"), $condition_var3187, $type3190]], $g3196;
if ($T($condition3193))
$g3196 = [$g2105([$g2065("bind"), [[$condition3193, $condition_var3187]]], $body3194)]
else $g3196 = $body3194;
return $g2105($g3195, $g3196)}, $cases3186))]})
var $g3199, $g3200 = $g1464.identity, $g3201 = $g2075("lift_defines", function $g3204 ($exp3202, $env3203)
{return $g3199($exp3202, $env3203, $g3200)}, false)
{var $g3210, $g3211 = $g1464["has?"], $g3212;
$g3199 = $g2075("lift_define", function $g3261 ($exp3213, $env3214, $k3215)
{if ($T($g2082($exp3213)))
{var $sequence3252 = $exp3213, $g3257 = $sequence3252[0], $g3216 = $g2106($g3257);
if ($T($g2110($g3216, "%bind")))
{var $__3217 = $exp3213[0], $g3218 = $exp3213[1], $rvar3219 = $g3218[0], $value3220 = $g3218[1], $body3221 = $exp3213[2];
return $g3199($value3220, $env3214, function $g3262 ($lvalue3222, $env3223)
{return $g3199($body3221, $env3223, function $g3263 ($lbody3224, $env3225)
{return $k3215([$g2065("%bind"), [$rvar3219, $lvalue3222], $lbody3224], $env3225)})})}
else if ($T($g2110($g3216, "%try")))
{var $m3226 = $exp3213[0], $e13227 = $exp3213[1], $v3228 = $exp3213[2], $e23229 = $exp3213[3];
return $g3210([$e13227, $e23229], $env3214, function $g3264 ($let3230, $env3231)
{var $le13232 = $let3230[0], $le23233 = $let3230[1];
return $k3215([$m3226, $le13232, $v3228, $le23233], $env3231)})}
else {var $g3234 = $g2110($g3216, "%method"), $g3258;
if ($T($g3234))
$g3258 = $g3234
else $g3258 = $g2110($g3216, "%set");
if ($T($g3258))
{var $m3235 = $exp3213[0], $e13236 = $exp3213[1], $e23237 = $exp3213[2];
return $g3199($e23237, $env3214, function $g3265 ($le23238, $env3239)
{return $k3215([$m3235, $e13236, $le23238], $env3239)})}
else {var $g3240 = $g2110($g3216, "%begin"), $g3259;
if ($T($g3240))
$g3259 = $g3240
else {var $g3241 = $g2110($g3216, "%if");
if ($T($g3241))
$g3259 = $g3241
else $g3259 = $g2110($g3216, "%while")};
if ($T($g3259))
{var $m3242 = $exp3213[0], $et3243 = $SL.call($exp3213, 1);
return $g3210($et3243, $env3214, function $g3266 ($let3244, $env3245)
{return $k3215($g2105([$m3242], $let3244), $env3245)})}
else if ($T($g2110($g3216, "define")))
{var $__3246 = $exp3213[0], $rvar3247 = $exp3213[1], $value3248 = $exp3213[2], $exportq3249 = $exp3213[3], $name3250 = $g2106($rvar3247), $robject3255 = $g2155($env3214, "defined?"), $property3256 = $name3250, $g3260 = $HP.call($robject3255,$property3256);
if ($T($g3260))
return $k3215([$g2065("%set"), $rvar3247, $value3248], $env3214)
else {$g2136($env3214, "defined?", $name3250, true);
return [$g2065("%begin"), [$g2065("%define"), $rvar3247], $k3215([$g2065("%set"), $rvar3247, $value3248], $env3214)]}}
else return $g3212($exp3213, $env3214, $k3215)}}}
else return $k3215($exp3213, $env3214)}, false)}
$g3210 = $g2075("lift_defineT", function $g3285 ($expt3267, $env3268, $k3269)
{var $sequence3280 = $expt3267, $g3281 = $sequence3280, $g3282 = (($g3281 || false).length || 0), $g3283 = 0, $g3284 = ($g3282 === $g3283);
if ($T($g3284))
return $k3269([], $env3268)
else return $g3212($expt3267, $env3268, $k3269)}, false)
$g3212 = $g2075("lift_defineTT", function $g3301 ($exp3286, $env3287, $k3288)
{var $sequence3294 = $exp3286, $g3297 = $sequence3294[0], $g3300 = function $g3302 ($t3289, $env3290)
{var $sequence3296 = $exp3286, $g3298 = $sequence3296.slice(1), $g3299 = function $g3303 ($tt3291, $env3292)
{return $k3288($g2105([$t3289], $tt3291), $env3292)};
return $g3210($g3298, $env3290, $g3299)};
return $g3199($g3297, $env3287, $g3300)}, false)
var $g3304 = $g2057()
$g2136($g3304, "next-method", function $g3306 ($__3305)
{return [$g2065("%next-method"), $g2065("%this-method")]})
var trueQ = $g1464["true?"], $g3308 = $g2075("find_macro_definition", function $g3340 ($form3309, $env3310)
{var $g3311 = $form3309;
if ($T($g2076($g3311, $g2077)))
{var $sequence3324 = $form3309, $g3325 = $sequence3324, $g3326 = (($g3325 || false).length || 0), $g3327 = 0, $g3336 = ($g3326 === $g3327);
if ($T($g3336))
{var $error3329 = "Empty form";
throw($error3329);
false};
var $sequence3331 = $form3309, $g3337 = $sequence3331[0], $name3312 = $g2106($g3337), $value3333 = $g2155($env3310, "bound?", $name3312), $g3338 = !(trueQ($value3333));
if ($T($g3338))
return $env3310.macros[$name3312]}
else if ($T($g2076($g3311, $g2081)))
{var $name3313 = $g2106($form3309), $value3335 = $g2155($env3310, "bound?", $name3313), $g3339 = !(trueQ($value3335));
if ($T($g3339))
return $env3310["symbol-macros"][$name3313]}}, false)
var $g3342 = $g2075("macroexpand_1", function $g3350 ($form3343, $env3344)
{var $g3345 = $g3308($form3343, $env3344);
if ($T($g3345))
{var $macro3346 = $g3345, $g3349;
if ($T($g2076($form3343, $g2077)))
{var $sequence3348 = $form3343;
$g3349 = $sequence3348.slice(1)}
else $g3349 = $form3343;
return $g3030($macro3346, $env3344, $g3349)}
else return $form3343}, false)
var trueQ = $g1464["true?"], $g3351 = $g2075("macroexpand", function $g3359 ($form3352, $env3353)
{var $doneq3354;
while ($T(true))
{var $value3357 = $doneq3354, $g3358 = !(trueQ($value3357));
if ($T($g3358))
{var $expanded3355 = $g3342($form3352, $env3353);
$doneq3354 = $g2110($expanded3355, $form3352);
$form3352 = $expanded3355}
else break};
return $form3352}, false)
$g2166 = $g2075("macroexpand_all", function $g3370 ($form3362, $env3363)
{var $g3364 = $form3362;
if ($T($g2076($g3364, $g2077)))
if ($T($g3308($form3362, $env3363)))
return $g2166($g3351($form3362, $env3363), $env3363)
else {var $g3365 = $g2156($form3362, $env3363);
if ($T($g3365))
{var $expander3366 = $g3365, $sequence3368 = $form3362, $g3369 = $sequence3368.slice(1);
return $g3030($expander3366, $env3363, $g3369)}
else return $g2241($g2113($g2166, $env3363), $form3362)}
else if ($T($g2076($g3364, $g2081)))
if ($T($g3308($form3362, $env3363)))
return $g2166($g3351($form3362, $env3363), $env3363)
else return $form3362
else return $form3362}, false)
var $g3371 = $g1464["member?"], $g3372 = $g2075("find_module_for_definition", function $g3378 ($definition_name3373, $env3374)
{return $g2554(function $g3379 ($rimport3375)
{var $module3376 = $rimport3375[0], $names3377 = $rimport3375[1];
if ($T($g3371($definition_name3373, $names3377)))
return $module3376}, $g2155($env3374, "module", "imports"))}, false)
var $g3381 = $g2075("find_import_identifier", function $g3386 ($definition_name3382, $env3383)
{var $g3384 = $g3372($definition_name3382, $env3383);
if ($T($g3384))
{var $module3385 = $g3384;
return $g2155($env3383, "import-identifiers", $g2155($module3385, "name"))}}, false)
var $g3388 = $g1464["set-subtract!"], $g3389, $g3390 = $g1464["as-set"], $g3391 = $g1464["object-properties"], $g3392 = $g2075("define_free_variables", function $g3418 ($exp3393, $env3394)
{var $variables3395 = $g3388($g3388($g3389($exp3393), $g3390($g2241($g2065, $g3391($g2155($env3394, "defined?"))))), $g2066), $sequence3410 = $variables3395, $g3411 = $sequence3410, $g3412 = (($g3411 || false).length || 0), $g3413 = 0, $g3414 = ($g3412 === $g3413);
if ($T($g3414))
return $exp3393
else return $g2105([$g2065("%begin")], $g2241(function $g3419 ($variable3396)
{var $name3397 = $g2106($variable3396);
$g2136($env3394, "defined?", $name3397, true);
var $g3415 = [[$g2065("%define"), $variable3396]], $g3398 = $g3381($name3397, $env3394), $g3416;
if ($T($g3398))
{var $import_identifier3399 = $g3398;
$g3416 = [[$g2065("%set"), $variable3396, [$g2065("%get-property"), $import_identifier3399, $name3397]]]}
else $g3416 = [];
var $g3417 = $g2105($g3415, $g3416);
return $g2190($g3417)}, $variables3395), [$exp3393])}, false)
var trueQ = $g1464["true?"], $g3421 = $g1464.choose, $g3422 = $g2075("define_free_variables2", function $g3457 ($exp3423, $env3424)
{var $free3425 = $g3388($g3389($exp3423), $g2066), $variables3427 = $g3421(function $g3458 ($variable3426)
{var $robject3436 = $g2155($env3424, "definition-names"), $property3437 = $g2106($variable3426), $value3438 = $HP.call($robject3436,$property3437);
return !(trueQ($value3438))}, $free3425), $sequence3449 = $variables3427, $g3450 = $sequence3449, $g3451 = (($g3450 || false).length || 0), $g3452 = 0, $g3453 = ($g3451 === $g3452);
if ($T($g3453))
return $exp3423
else return $g2105([$g2065("%begin")], $g2241(function $g3459 ($variable3428)
{var $name3429 = $g2106($variable3428);
$g2136($env3424, "defined?", $name3429, true);
var $g3454 = [[$g2065("%define"), $variable3428]], $g3430 = $g3381($name3429, $env3424), $g3455;
if ($T($g3430))
{var $old_import_identifier3431 = $g3430, $import_identifier3432 = $g2155($env3424, "new-identifiers", $g2106($old_import_identifier3431));
$g3455 = [[$g2065("%set"), $variable3428, [$g2065("%get-property"), $import_identifier3432, $name3429]]]}
else $g3455 = [];
var $g3456 = $g2105($g3454, $g3455);
return $g2190($g3456)}, $variables3427), [$exp3423])}, false)
{var trueQ = $g1464["true?"], $g3475 = $g1464["set-union!"];
$g3389 = $g2075("find_free_variables", function $g3569 ($exp3476)
{var $g3550;
if ($T($g2076($exp3476, $g2077)))
{var $sequence3519 = $exp3476, $g3520 = $sequence3519, $g3521 = (($g3520 || false).length || 0), $g3522 = 0, $value3523 = ($g3521 === $g3522);
$g3550 = !(trueQ($value3523))}
else $g3550 = false;
if ($T($g3550))
{var $sequence3525 = $exp3476, $head3477 = $sequence3525[0], $name3478;
if ($T($g2076($head3477, $g2081)))
$name3478 = $g2106($head3477)
else $name3478 = false;
var $g3479 = $name3478;
if ($T($g2110($g3479, "%method")))
{var $__3480 = $exp3476[0], $rarguments3481 = $exp3476[1], $body3482 = $exp3476[2];
return $g3388($g3389($body3482), $g3390($rarguments3481))}
else if ($T($g2110($g3479, "%bind")))
{var $__3483 = $exp3476[0], $g3484 = $exp3476[1], $rvar3485 = $g3484[0], $value3486 = $g3484[1], $body3487 = $exp3476[2];
return $g3475($g3388($g3389($body3487), $g3390([$rvar3485])), $g3389($value3486))}
else if ($T($g2110($g3479, "%begin")))
{var $definitions3488 = [], $g3555 = function $g3570 ($result3489, $e3490)
{var $g3553;
if ($T($g2082($e3490)))
{var $sequence3527 = $e3490, $g3551 = $sequence3527[0], $g3552 = $g2065("%define");
$g3553 = $g2110($g3551, $g3552)}
else $g3553 = false;
var $g3554;
if ($T($g3553))
{var $rarray3532 = $definitions3488, $sequence3531 = $e3490, $value3533 = $sequence3531[1];
$rarray3532.push($value3533);
$rarray3532;
$g3554 = []}
else $g3554 = $g3389($e3490);
return $g2105($result3489, $g3554)}, $g3556 = [], $sequence3535 = $exp3476, $g3557 = $sequence3535.slice(1), $g3558 = $g2231($g3555, $g3556, $g3557), $g3559 = $g3390($g3558), $g3560 = $g3390($definitions3488);
return $g3388($g3559, $g3560)}
else if ($T($g2110($g3479, "%try")))
{var $__3491 = $exp3476[0], $e13492 = $exp3476[1], $v3493 = $exp3476[2], $e23494 = $exp3476[3];
return $g3388($g3475($g3390($g3389($e13492)), $g3390($g3389($e23494))), $g3390([$v3493]))}
else {var $g3495 = $g2110($g3479, "%set"), $g3561;
if ($T($g3495))
$g3561 = $g3495
else {var $g3496 = $g2110($g3479, "%if");
if ($T($g3496))
$g3561 = $g3496
else {var $g3497 = $g2110($g3479, "%while");
if ($T($g3497))
$g3561 = $g3497
else {var $g3498 = $g2110($g3479, "%array");
if ($T($g3498))
$g3561 = $g3498
else {var $g3499 = $g2110($g3479, "%object");
if ($T($g3499))
$g3561 = $g3499
else {var $g3500 = $g2110($g3479, "%infix");
if ($T($g3500))
$g3561 = $g3500
else {var $g3501 = $g2110($g3479, "%get-property");
if ($T($g3501))
$g3561 = $g3501
else {var $g3502 = $g2110($g3479, "%native-call");
if ($T($g3502))
$g3561 = $g3502
else {var $g3503 = $g2110($g3479, "%plus");
if ($T($g3503))
$g3561 = $g3503
else {var $g3504 = $g2110($g3479, "%minus");
if ($T($g3504))
$g3561 = $g3504
else {var $g3505 = $g2110($g3479, "%times");
if ($T($g3505))
$g3561 = $g3505
else $g3561 = $g2110($g3479, "%divide")}}}}}}}}}};
if ($T($g3561))
{var $g3562 = [], $sequence3537 = $exp3476, $g3563 = $sequence3537.slice(1), $g3564 = $g2241($g3389, $g3563), $g3565 = $g2231($g2105, $g3562, $g3564);
return $g3390($g3565)}
else {var $g3506 = $g2110($g3479, "%native"), $g3566;
if ($T($g3506))
$g3566 = $g3506
else {var $g3507 = $g2110($g3479, "%native-name");
if ($T($g3507))
$g3566 = $g3507
else $g3566 = $g2110($g3479, "%define")};
if ($T($g3566))
return $g3390([])
else {var $rfunction3546 = $g3475, $values3547 = $g2241($g3389, $exp3476), $g3548 = $values3547, $g3567 = $g3548[0], $g3549 = $values3547, $g3568 = $g3549.slice(1);
return $g2231($rfunction3546, $g3567, $g3568)}}}}
else if ($T($g2076($exp3476, $g2081)))
return $g3390([$exp3476])
else return $g3390([])}, false)}
var trueQ = $g1464["true?"], $g3571 = $g2075("ensure_naming_structure", function $g3582 ($env3572, $module_name3573, $name3574)
{var $value3577 = $g2155($env3572, "identifiers", $module_name3573), $g3580 = !(trueQ($value3577));
if ($T($g3580))
$g2136($env3572, "identifiers", $module_name3573, $g2057());
var $module_renamings3575 = $g2155($env3572, "identifiers", $module_name3573), $value3579 = $g2155($module_renamings3575, $name3574), $g3581 = !(trueQ($value3579));
if ($T($g3581))
$g2136($module_renamings3575, $name3574, []);
return $env3572}, false)
var $g3584 = $g2075("get_module_nameSname", function $g3589 ($identifier3585)
{var $g3586 = $g2155($identifier3585, "module"), $g3587;
if ($T($g3586))
$g3587 = $g3586
else $g3587 = "";
var $g3588 = $g2106($identifier3585);
return [$g3587, $g3588]}, false)
var trueQ = $g1464["true?"], $g3591 = $g1464.push, $g3592 = $g2075("rename_identifiers", function $g3608 ($identifiers3593, $env3594)
{return $g2241(function $g3609 ($identifier3595)
{var $g3596 = $g3584($identifier3595), $module_name3597 = $g3596[0], $name3598 = $g3596[1], $value3601 = $g2155($identifier3595, "generated?"), $g3606 = !(trueQ($value3601)), $g3607;
if ($T($g3606))
$g3607 = $name3598
else $g3607 = false;
var $new_identifier3599 = $g2139($g3607);
$g3571($env3594, $module_name3597, $name3598);
var $rarray3604 = $g2155($env3594, "identifiers", $module_name3597, $name3598), $value3605 = $new_identifier3599;
$rarray3604.unshift($value3605);
$rarray3604;
return $new_identifier3599}, $identifiers3593)}, false)
var trueQ = $g1464["true?"], $g3616 = $g1464.pop, $g3617 = $g2075("restore_identifiers", function $g3640 ($identifiers3618, $env3619)
{var $g3620 = $identifiers3618, $g3621, $g3622, $g3623 = [$g3620];
while ($T(true))
{var $g3624 = $g3621, $value3631;
if ($T($g3624))
$value3631 = $g3624
else $value3631 = $g2554($g2079, $g3623);
var $g3639 = !(trueQ($value3631));
if ($T($g3639))
{var $sequence3633 = $g3620, $identifier3625 = $sequence3633[0];
(function $g3641 ($identifier3626)
{var $g3627 = $g3584($identifier3626), $module_name3628 = $g3627[0], $name3629 = $g3627[1], $rarray3635 = $g2155($env3619, "identifiers", $module_name3628, $name3629);
return $rarray3635.shift()})($identifier3625);
var $sequence3637 = $g3620, $g3638 = $sequence3637.slice(1);
$g3620 = $g3638;
$g3623 = [$g3620]}
else break};
return $g3622}, false)
var $g3642 = $g2057()
var $g3645 = $g2075("find_identifier", function $g3655 ($identifier3646, $env3647)
{var $g3648 = $g3584($identifier3646), $module_name3649 = $g3648[0], $name3650 = $g3648[1], $g3651 = $g2155($env3647, "identifiers", $module_name3649, $name3650);
if ($T($g3651))
{var $renamings3652 = $g3651, $sequence3654 = $renamings3652;
return $sequence3654[0]}
else return $g3642}, false)
var $g3662 = $g1464["second-setter"], $g3663 = $g2075("alpha_convert", function $g3709 ($form3664, $env3665)
{var $g3666 = $form3664;
if ($T($g2076($g3666, $g2077)))
{var $sequence3699 = $form3664, $g3708 = $sequence3699[0], $g3667 = $g2106($g3708);
if ($T($g2110($g3667, "%method")))
{var $__3668 = $form3664[0], $rarguments3669 = $form3664[1], $body3670 = $form3664[2], $new_arguments3671 = $g3592($rarguments3669, $env3665), $new_body3672 = $g3663($body3670, $env3665), $result3673 = [$__3668, $new_arguments3671, $new_body3672];
$g3617($rarguments3669, $env3665);
return $result3673}
else if ($T($g2110($g3667, "%bind")))
{var $__3674 = $form3664[0], $g3675 = $form3664[1], $rvar3676 = $g3675[0], $value3677 = $g3675[1], $body3678 = $form3664[2], $new_value3679 = $g3663($value3677, $env3665), $g3680 = $g3592([$rvar3676], $env3665), $new_var3681 = $g3680[0], $result3682 = [$g2065("%bind"), [$new_var3681, $new_value3679], $g3663($body3678, $env3665)];
$g3617([$rvar3676], $env3665);
return $result3682}
else if ($T($g2110($g3667, "%try")))
{var $__3683 = $form3664[0], $body3684 = $form3664[1], $rvar3685 = $form3664[2], $rcatch3686 = $form3664[3], $new_body3687 = $g3663($body3684, $env3665), $g3688 = $g3592([$rvar3685], $env3665), $new_var3689 = $g3688[0], $result3690 = [$g2065("%try"), $new_body3687, $new_var3689, $g3663($rcatch3686, $env3665)];
$g3617([$rvar3685], $env3665);
return $result3690}
else if ($T($g2110($g3667, "%define")))
{var $__3691 = $form3664[0], $identifier3692 = $form3664[1], $g3693 = $g3584($identifier3692), $module_name3694 = $g3693[0], $name3695 = $g3693[1], $new_identifier3696 = $g2139();
$g3571($env3665, $module_name3694, $name3695);
var $rarray3702 = $g2155($env3665, "identifiers", $module_name3694, $name3695), $value3703 = $new_identifier3696;
$rarray3702.push($value3703);
$rarray3702;
$g2136($env3665, "definition-names", $g2106($new_identifier3696), $name3695);
$g2136($env3665, "new-identifiers", $name3695, $new_identifier3696);
var $rarray3706 = $form3664, $value3707 = $new_identifier3696;
$rarray3706[1] = $value3707;
return $form3664}
else return $g2241($g2113($g3663, $env3665), $form3664)}
else if ($T($g2076($g3666, $g2081)))
{var $value3697 = $g3645($form3664, $env3665);
if ($T($g2110($value3697, $g3642)))
return $form3664
else return $value3697}
else return $form3664}, false)
var trueQ = $g1464["true?"], dec = $g1464.dec, $g3728 = $g1464["last-setter"], $g3729 = $g1464.last, $g3730, $g3731, $g3732 = $g2075("inline", function $g3841 ($form3733, $env3734)
{var $g3824;
if ($T($g2076($form3733, $g2077)))
{var $sequence3775 = $form3733, $g3776 = $sequence3775, $g3777 = (($g3776 || false).length || 0), $g3778 = 0, $value3779 = ($g3777 === $g3778);
$g3824 = !(trueQ($value3779))}
else $g3824 = false;
if ($T($g3824))
{var $sequence3781 = $form3733, $g3825 = $sequence3781[0], $g3826 = $g2076($g3825, $g2081);
if ($T($g3826))
{var $sequence3783 = $form3733, $g3827 = $sequence3783[0], $g3735 = $g2106($g3827), $g3736 = $g2110($g3735, "%method"), $g3828;
if ($T($g3736))
$g3828 = $g3736
else $g3828 = $g2110($g3735, "%set");
if ($T($g3828))
{var $rarray3796 = $form3733, $rarray3793 = $form3733, $g3794 = $rarray3793, $g3795 = (($g3794 || false).length || 0), $g3829 = ($g3795 - 1), $g3830 = $rarray3793[$g3829], $value3797 = $g3732($g3830, $env3734);
$rarray3796[dec($g2111($rarray3796), 1)] = $value3797;
return $form3733}
else if ($T($g2110($g3735, "%bind")))
{var $__3737 = $form3733[0], $binding3738 = $form3733[1], $body3739 = $form3733[2], $rarray3802 = $binding3738, $sequence3801 = $binding3738, $g3831 = $sequence3801[1], $value3803 = $g3732($g3831, $env3734);
$rarray3802[1] = $value3803;
var $rarray3806 = $form3733, $value3807 = $g3732($body3739, $env3734);
$rarray3806[dec($g2111($rarray3806), 1)] = $value3807;
return $form3733}
else if ($T($g2110($g3735, "%try")))
{var $__3740 = $form3733[0], $body3741 = $form3733[1], $rvar3742 = $form3733[2], $rcatch3743 = $form3733[3], $rarray3810 = $form3733, $value3811 = $g3732($body3741, $env3734);
$rarray3810[1] = $value3811;
var $rarray3814 = $form3733, $value3815 = $g3732($rcatch3743, $env3734);
$rarray3814[dec($g2111($rarray3814), 1)] = $value3815;
return $form3733}
else {var $g3744 = $g2110($g3735, "%begin"), $g3832;
if ($T($g3744))
$g3832 = $g3744
else {var $g3745 = $g2110($g3735, "%if");
if ($T($g3745))
$g3832 = $g3745
else {var $g3746 = $g2110($g3735, "%while");
if ($T($g3746))
$g3832 = $g3746
else {var $g3747 = $g2110($g3735, "%array");
if ($T($g3747))
$g3832 = $g3747
else {var $g3748 = $g2110($g3735, "%object");
if ($T($g3748))
$g3832 = $g3748
else {var $g3749 = $g2110($g3735, "%get-property");
if ($T($g3749))
$g3832 = $g3749
else {var $g3750 = $g2110($g3735, "%native-call");
if ($T($g3750))
$g3832 = $g3750
else {var $g3751 = $g2110($g3735, "%infix");
if ($T($g3751))
$g3832 = $g3751
else {var $g3752 = $g2110($g3735, "%plus");
if ($T($g3752))
$g3832 = $g3752
else {var $g3753 = $g2110($g3735, "%minus");
if ($T($g3753))
$g3832 = $g3753
else {var $g3754 = $g2110($g3735, "%times");
if ($T($g3754))
$g3832 = $g3754
else $g3832 = $g2110($g3735, "%divide")}}}}}}}}}};
if ($T($g3832))
{var $sequence3817 = $form3733, $g3833 = $sequence3817[0], $g3834 = [$g3833], $g3835 = $g2113($g3732, $env3734), $sequence3819 = $form3733, $g3836 = $sequence3819.slice(1), $g3837 = $g2241($g3835, $g3836);
return $g2105($g3834, $g3837)}
else {var $g3755 = $g2110($g3735, "%native"), $g3838;
if ($T($g3755))
$g3838 = $g3755
else {var $g3756 = $g2110($g3735, "%native-name");
if ($T($g3756))
$g3838 = $g3756
else $g3838 = $g2110($g3735, "%define")};
if ($T($g3838))
return $form3733
else {var $sequence3821 = $form3733, $g3839 = $sequence3821[0], $name3757 = $g2106($g3839), $g3758 = $g2155($env3734, "definition-names", $name3757), $definition_name3759;
if ($T($g3758))
$definition_name3759 = $g3758
else $definition_name3759 = $name3757;
var $g3760;
if ($T($g3731($g2155($env3734, "module"), $definition_name3759)))
$g3760 = $g2155($env3734, "module", "functions", $definition_name3759)
else $g3760 = false;
var $definition3763;
if ($T($g3760))
$definition3763 = $g3760
else {var $g3761 = $g3372($definition_name3759, $env3734);
if ($T($g3761))
{var $module3762 = $g3761;
if ($T($g3731($module3762, $definition_name3759)))
$definition3763 = $g2155($module3762, "functions", $definition_name3759)
else $definition3763 = false}
else $definition3763 = false};
if ($T($definition3763))
{var $sequence3823 = $form3733, $g3840 = $sequence3823.slice(1);
return $g3730($definition3763, $g3840, $env3734)}
else return $g2241($g2113($g3732, $env3734), $form3733)}}}}
else return $g2241($g2113($g3732, $env3734), $form3733)}
else return $form3733}, false)
$g3731 = $g2075("inlineQ", function $g3844 ($module3842, $definition_name3843)
{return $g2554($g2165($g2110, $definition_name3843), $g2155($module3842, "inline"))}, false)
{var trueQ = $g1464["true?"], $g3847 = $g1464[">="];
$g3730 = $g2075("inline_definition", function $g3877 ($definition3848, $values3849, $env3850)
{var $__3851 = $definition3848[0], $rarguments3852 = $definition3848[1], $body3853 = $definition3848[2], $body3856 = $g2231(function $g3878 ($body3854, $argument3855)
{return [$g2065("%bind"), [$argument3855, $argument3855], $body3854]}, $body3853, $g2355($rarguments3852)), $inlined3857 = $g3732($body3856, $env3850), $prepared3858 = $g3663($inlined3857, $env3850), $robject3869 = $rarguments3852, $g3859 = (($robject3869 || false).length || 0), $i3860 = 0;
while ($T(true))
{var $value3871 = $g3847($i3860, $g3859), $g3876 = !(trueQ($value3871));
if ($T($g3876))
{(function $g3879 ($i3861)
{var $argument3862 = $g2203($rarguments3852, $i3861), $value3863 = $g2203($values3849, $i3861), $g3864 = $g3584($argument3862), $module_name3865 = $g3864[0], $name3866 = $g3864[1];
$g3571($env3850, $module_name3865, $name3866);
var $rarray3874 = $g2155($env3850, "identifiers", $module_name3865, $name3866), $value3875;
if ($T($value3863))
$value3875 = $g3732($value3863, $env3850)
else $value3875 = [$g2065("%native"), "undefined"];
$rarray3874.unshift($value3875);
return $rarray3874})($i3860);
$i3860 = ($i3860 + 1)}
else break};
false;
var $result3867 = $g3663($body3856, $env3850);
$g3617($rarguments3852, $env3850);
return $result3867}, false)}
var $g3880 = $g1464["<number>"], $g3881 = $g1464["<boolean>"], $g3882 = $g1464["<keyword>"], $g3883 = $g2075("atomicQ", function $g3885 ($expression3884)
{return $g2554($g2165($g2076, $expression3884), [$g3880, $g3881, $g2928, $g2081, $g3882])}, false)
var $g3886, $g3887 = $g2075("normalize_term", function $g3889 ($expression3888)
{return $g3886($expression3888, $g3200)}, false)
{var trueQ = $g1464["true?"], $g3892, $g3893, $g3894;
$g3886 = $g2075("normalize", function $g3963 ($exp3895, $k3896)
{var $g3959;
if ($T($g2076($exp3895, $g2077)))
{var $sequence3938 = $exp3895, $g3939 = $sequence3938, $g3940 = (($g3939 || false).length || 0), $g3941 = 0, $value3942 = ($g3940 === $g3941);
$g3959 = !(trueQ($value3942))}
else $g3959 = false;
if ($T($g3959))
{var $sequence3944 = $exp3895, $g3960 = $sequence3944[0], $g3897 = $g2106($g3960);
if ($T($g2110($g3897, "%method")))
{var $__3898 = $exp3895[0], $rarguments3899 = $exp3895[1], $body3900 = $exp3895[2];
return $k3896([$g2065("%method"), $rarguments3899, $g3887($body3900)])}
else if ($T($g2110($g3897, "%begin")))
{var $__3901 = $exp3895[0], $exp13902 = $exp3895[1], $et3903 = $SL.call($exp3895, 2), $sequence3955 = $et3903, $g3956 = $sequence3955, $g3957 = (($g3956 || false).length || 0), $g3958 = 0, $g3961 = ($g3957 === $g3958);
if ($T($g3961))
return $g3886($exp13902, $k3896)
else return $g3886($exp13902, function $g3964 ($aexp13904)
{return [$g2065("%begin"), $aexp13904, $g3886($g2105([$g2065("%begin")], $et3903), $k3896)]})}
else if ($T($g2110($g3897, "%bind")))
{var $__3905 = $exp3895[0], $g3906 = $exp3895[1], $rvar3907 = $g3906[0], $value3908 = $g3906[1], $body3909 = $exp3895[2];
return $g3886($value3908, function $g3965 ($avalue3910)
{return [$g2065("%bind"), [$rvar3907, $avalue3910], $g3886($body3909, $k3896)]})}
else if ($T($g2110($g3897, "%if")))
{var $__3911 = $exp3895[0], $test3912 = $exp3895[1], $then3913 = $exp3895[2], $relse3914 = $exp3895[3];
return $g3892($test3912, function $g3966 ($atest3915)
{return $k3896([$g2065("%if"), $atest3915, $g3887($then3913), $g3887($relse3914)])})}
else if ($T($g2110($g3897, "%while")))
{var $__3916 = $exp3895[0], $test3917 = $exp3895[1], $body3918 = $exp3895[2], $g3962;
if ($T($g3893($test3917)))
$g3962 = [$g2065("%while"), true, [$g2065("%begin"), $g3887([$g2065("%if"), $test3917, $g3887($body3918), [$g2065("%native"), "break"], false])]]
else $g3962 = [$g2065("%while"), $g3887($test3917), $g3887($body3918)];
return $k3896($g3962)}
else if ($T($g2110($g3897, "%try")))
{var $__3919 = $exp3895[0], $body3920 = $exp3895[1], $rvar3921 = $exp3895[2], $rcatch3922 = $exp3895[3];
return $k3896([$g2065("%try"), $g3887($body3920), $rvar3921, $g3887($rcatch3922)])}
else if ($T($g2110($g3897, "%set")))
{var $__3923 = $exp3895[0], $rvar3924 = $exp3895[1], $value3925 = $exp3895[2];
return $g3892($value3925, function $g3967 ($avalue3926)
{return $k3896([$g2065("%set"), $rvar3924, $avalue3926])})}
else if ($T($g3893($exp3895)))
return $g3894($exp3895, $k3896)
else return $k3896($g2241($g3887, $exp3895))}
else return $k3896($exp3895)}, false)}
{var $g3968;
$g3892 = $g2075("normalize_value", function $g3972 ($exp3969, $k3970)
{if ($T($g3893($exp3969)))
return $g3968($exp3969, $k3970)
else {var $g3971;
if ($T($g2076($exp3969, $g2077)))
$g3971 = $g2241($g3887, $exp3969)
else $g3971 = $exp3969;
return $k3970($g3971)}}, false)}
{var trueQ = $g1464["true?"];
$g3893 = $g2075("contains_statementsQ", function $g4017 ($exp3978)
{var $g4012;
if ($T($g2076($exp3978, $g2077)))
{var $sequence3995 = $exp3978, $g3996 = $sequence3995, $g3997 = (($g3996 || false).length || 0), $g3998 = 0, $value3999 = ($g3997 === $g3998);
$g4012 = !(trueQ($value3999))}
else $g4012 = false;
if ($T($g4012))
{var $sequence4001 = $exp3978, $g4013 = $sequence4001[0], $g3979 = $g2106($g4013), $g3980 = $g2110($g3979, "%begin"), $g4014;
if ($T($g3980))
$g4014 = $g3980
else {var $g3981 = $g2110($g3979, "%if");
if ($T($g3981))
$g4014 = $g3981
else {var $g3982 = $g2110($g3979, "%while");
if ($T($g3982))
$g4014 = $g3982
else {var $g3983 = $g2110($g3979, "%bind");
if ($T($g3983))
$g4014 = $g3983
else $g4014 = $g2110($g3979, "%try")}}};
if ($T($g4014))
return true
else if ($T($g2110($g3979, "%set")))
{var $rarray4009 = $exp3978, $g4010 = $rarray4009, $g4011 = (($g4010 || false).length || 0), $g4015 = ($g4011 - 1), $g4016 = $rarray4009[$g4015];
return $g3893($g4016)}
else if ($T($g2110($g3979, "%method")))
return false
else return $g2554($g3893, $exp3978)}}, false)}
$g3968 = $g2075("normalizeT", function $g4022 ($exp4018, $k4019)
{return $g3886($exp4018, function $g4023 ($aexp4020)
{if ($T($g3883($aexp4020)))
return $k4019($aexp4020)
else {var $t4021 = $g2139();
return [$g2065("%bind"), [$t4021, $aexp4020], $k4019($t4021)]}})}, false)
var $g4024 = $g2075("normalizeTT", function $g4042 ($expt4025, $k4026)
{var $sequence4037 = $expt4025, $g4038 = $sequence4037, $g4039 = (($g4038 || false).length || 0), $g4040 = 0, $g4041 = ($g4039 === $g4040);
if ($T($g4041))
return $k4026([])
else return $g3894($expt4025, $k4026)}, false)
$g3894 = $g2075("normalize_all", function $g4055 ($exp4043, $k4044)
{var $sequence4048 = $exp4043, $g4051 = $sequence4048[0], $g4054 = function $g4056 ($t4045)
{var $sequence4050 = $exp4043, $g4052 = $sequence4050.slice(1), $g4053 = function $g4057 ($tt4046)
{return $k4044($g2105([$t4045], $tt4046))};
return $g4024($g4052, $g4053)};
return $g3968($g4051, $g4054)}, false)
var dec = $g1464.dec, $g4060 = $g1464["third-setter"], $g4061 = $g2075("wrap_value", function $g4132 ($exp4062, $wrapper4063)
{if ($T($g2076($exp4062, $g2077)))
{var $sequence4067 = $exp4062, $g4122 = $sequence4067[0], $g4064 = $g2106($g4122), $g4065 = $g2110($g4064, "%begin"), $g4123;
if ($T($g4065))
$g4123 = $g4065
else $g4123 = $g2110($g4064, "%bind");
if ($T($g4123))
{var $rarray4080 = $exp4062, $rarray4077 = $exp4062, $g4078 = $rarray4077, $g4079 = (($g4078 || false).length || 0), $g4124 = ($g4079 - 1), $g4125 = $rarray4077[$g4124], $value4081 = $g4061($g4125, $wrapper4063);
$rarray4080[dec($g2111($rarray4080), 1)] = $value4081;
return $exp4062}
else if ($T($g2110($g4064, "%if")))
{var $rarray4086 = $exp4062, $sequence4085 = $exp4062, $g4126 = $sequence4085[2], $value4087 = $g4061($g4126, $wrapper4063);
$rarray4086[2] = $value4087;
var $rarray4100 = $exp4062, $rarray4097 = $exp4062, $g4098 = $rarray4097, $g4099 = (($g4098 || false).length || 0), $g4127 = ($g4099 - 1), $g4128 = $rarray4097[$g4127], $value4101 = $g4061($g4128, $wrapper4063);
$rarray4100[dec($g2111($rarray4100), 1)] = $value4101;
return $exp4062}
else if ($T($g2110($g4064, "%while")))
return [$g2065("%begin"), $exp4062, $g4061(false, $wrapper4063)]
else if ($T($g2110($g4064, "%try")))
{var $rarray4106 = $exp4062, $sequence4105 = $exp4062, $g4129 = $sequence4105[1], $value4107 = $g4061($g4129, $wrapper4063);
$rarray4106[1] = $value4107;
var $rarray4120 = $exp4062, $rarray4117 = $exp4062, $g4118 = $rarray4117, $g4119 = (($g4118 || false).length || 0), $g4130 = ($g4119 - 1), $g4131 = $rarray4117[$g4130], $value4121 = $g4061($g4131, $wrapper4063);
$rarray4120[dec($g2111($rarray4120), 1)] = $value4121;
return $exp4062}
else return $g2105($wrapper4063, [$exp4062])}
else return $g2105($wrapper4063, [$exp4062])}, false)
var $g4133 = $g2075("add_explicit_return", function $g4135 ($exp4134)
{return $g4061($exp4134, [$g2065("%return")])}, false)
var trueQ = $g1464["true?"], $g4136 = $g2075("statementQ", function $g4159 ($exp4137)
{if ($T($g2076($exp4137, $g2077)))
{var $sequence4149 = $exp4137, $g4150 = $sequence4149, $g4151 = (($g4150 || false).length || 0), $g4152 = 0, $value4153 = ($g4151 === $g4152), $g4156 = !(trueQ($value4153));
if ($T($g4156))
{var $sequence4155 = $exp4137, $g4157 = $sequence4155[0], $g4158 = [$g2065("%if"), $g2065("%while"), $g2065("%begin"), $g2065("%bind"), $g2065("%try")];
return $g3371($g4157, $g4158)}}}, false)
var $g4160 = $g2075("add_explicit_true", function $g4162 ($exp4161)
{return [[$g2065("%native"), "$T"], $exp4161]}, false)
var dec = $g1464.dec, $g4165 = $g1464["first-setter"], $g4166 = $g2075("transform_statements", function $g4274 ($exp4167, $env4168)
{if ($T($g2076($exp4167, $g2077)))
{var $sequence4187 = $exp4167, $g4260 = $sequence4187[0], $g4169 = $g2106($g4260);
if ($T($g2110($g4169, "%method")))
{var $rarray4200 = $exp4167, $rarray4197 = $exp4167, $g4198 = $rarray4197, $g4199 = (($g4198 || false).length || 0), $g4261 = ($g4199 - 1), $g4262 = $rarray4197[$g4261], $g4263 = $g4166($g4262, $env4168), $value4201 = $g4133($g4263);
$rarray4200[dec($g2111($rarray4200), 1)] = $value4201;
return $exp4167}
else if ($T($g2110($g4169, "%begin")))
{var $__4170 = $exp4167[0], $exps4171 = $SL.call($exp4167, 1);
return $g2190($g2241($g2113($g4166, $env4168), $exps4171))}
else if ($T($g2110($g4169, "%bind")))
{var $__4172 = $exp4167[0], $g4173 = $exp4167[1], $rvar4174 = $g4173[0], $value4175 = $g4173[1], $body4176 = $exp4167[2];
if ($T($g4136($value4175)))
return [$g2065("%bind"), [$rvar4174, false], [$g2065("%begin"), $g4061($g4166($value4175, $env4168), [$g2065("%set"), $rvar4174]), $g4166($body4176, $env4168)]]
else return [$g2065("%bind"), [$rvar4174, $g4166($value4175, $env4168)], $g4166($body4176, $env4168)]}
else if ($T($g2110($g4169, "%if")))
{var $__4177 = $exp4167[0], $test4178 = $exp4167[1], $then4179 = $exp4167[2], $relse4180 = $exp4167[3];
return [$g2065("%if"), $g4160($test4178), $g4166($then4179, $env4168), $g4166($relse4180, $env4168)]}
else if ($T($g2110($g4169, "%while")))
{var $rarray4206 = $exp4167, $sequence4205 = $exp4167, $g4264 = $sequence4205[1], $value4207 = $g4160($g4264);
$rarray4206[1] = $value4207;
var $rarray4212 = $exp4167, $sequence4211 = $exp4167, $g4265 = $sequence4211[2], $value4213 = $g4166($g4265, $env4168);
$rarray4212[2] = $value4213;
return $exp4167}
else if ($T($g2110($g4169, "%try")))
{var $rarray4218 = $exp4167, $sequence4217 = $exp4167, $g4266 = $sequence4217[1], $value4219 = $g4166($g4266, $exp4167);
$rarray4218[1] = $value4219;
var $rarray4232 = $exp4167, $rarray4229 = $exp4167, $g4230 = $rarray4229, $g4231 = (($g4230 || false).length || 0), $g4267 = ($g4231 - 1), $g4268 = $rarray4229[$g4267], $value4233 = $g4166($g4268, $env4168);
$rarray4232[dec($g2111($rarray4232), 1)] = $value4233;
return $exp4167}
else if ($T($g2110($g4169, "%set")))
{var $__4181 = $exp4167[0], $identifier4182 = $exp4167[1], $value4183 = $exp4167[2], $valuet4184 = $g4166($value4183, $env4168), $definition_name4185 = $g2155($env4168, "definition-names", $g2106($identifier4182)), $g4269;
if ($T($definition_name4185))
$g4269 = $g3371($definition_name4185, $g2155($env4168, "module", "exports"))
else $g4269 = false;
if ($T($g4269))
{var $rarray4236 = $exp4167, $value4237 = $g2065("%begin");
$rarray4236[0] = $value4237;
var $rarray4240 = $exp4167, $value4241 = [$g2065("%set"), $identifier4182, $valuet4184];
$rarray4240[1] = $value4241;
var $rarray4244 = $exp4167, $value4245 = [$g2065("%set"), [$g2065("%get-property"), [$g2065("%native"), "exports"], $definition_name4185], $identifier4182];
$rarray4244[2] = $value4245}
else {var $rarray4248 = $exp4167, $value4249 = $valuet4184;
$rarray4248[2] = $value4249};
return $exp4167}
else if ($T($g2110($g4169, "%define")))
{var $g4270 = $g2065("%var"), $rarray4257 = $exp4167, $g4258 = $rarray4257, $g4259 = (($g4258 || false).length || 0), $g4271 = ($g4259 - 1), $g4272 = $rarray4257[$g4271], $g4273 = [$g4272, false];
return [$g4270, $g4273]}
else return $g2241($g2113($g4166, $env4168), $exp4167)}
else return $exp4167}, false)
var $g4275, $g4276 = $g2075("lift_symbols", function $g4279 ($exp4277, $env4278)
{return $g4275($exp4277, $env4278, $g3200)}, false)
{var trueQ = $g1464["true?"], $g4286, $g4287, $g4288, $g4289 = $g1464["<hash-symbol>"];
$g4275 = $g2075("lift_symbol", function $g4348 ($exp4290, $env4291, $k4292)
{var $g4344;
if ($T($g2076($exp4290, $g2077)))
{var $sequence4337 = $exp4290, $g4338 = $sequence4337, $g4339 = (($g4338 || false).length || 0), $g4340 = 0, $value4341 = ($g4339 === $g4340);
$g4344 = !(trueQ($value4341))}
else $g4344 = false;
if ($T($g4344))
{var $sequence4343 = $exp4290, $g4345 = $sequence4343[0], $g4293 = $g2106($g4345);
if ($T($g2110($g4293, "%bind")))
{var $__4294 = $exp4290[0], $g4295 = $exp4290[1], $rvar4296 = $g4295[0], $value4297 = $g4295[1], $body4298 = $exp4290[2];
return $g4275($value4297, $env4291, function $g4349 ($lvalue4299, $env4300)
{return $g4275($body4298, $env4300, function $g4350 ($lbody4301, $env4302)
{return $k4292([$g2065("%bind"), [$rvar4296, $lvalue4299], $lbody4301], $env4302)})})}
else {var $g4303 = $g2110($g4293, "%method"), $g4346;
if ($T($g4303))
$g4346 = $g4303
else $g4346 = $g2110($g4293, "%set");
if ($T($g4346))
{var $m4304 = $exp4290[0], $e14305 = $exp4290[1], $e24306 = $exp4290[2];
return $g4275($e24306, $env4291, function $g4351 ($le24307, $env4308)
{return $k4292([$m4304, $e14305, $le24307], $env4308)})}
else {var $g4309 = $g2110($g4293, "%begin"), $g4347;
if ($T($g4309))
$g4347 = $g4309
else {var $g4310 = $g2110($g4293, "%if");
if ($T($g4310))
$g4347 = $g4310
else $g4347 = $g2110($g4293, "%while")};
if ($T($g4347))
{var $m4311 = $exp4290[0], $et4312 = $SL.call($exp4290, 1);
return $g4286($et4312, $env4291, function $g4352 ($let4313, $env4314)
{return $k4292($g2105([$m4311], $let4313), $env4314)})}
else if ($T($g2110($g4293, "%try")))
{var $__4315 = $exp4290[0], $e14316 = $exp4290[1], $v4317 = $exp4290[2], $e24318 = $exp4290[3];
return $g4286([$e14316, $e24318], $env4291, function $g4353 ($let4319, $env4320)
{var $le14321 = $let4319[0], $le24322 = $let4319[1];
return $k4292([$g2065("%try"), $le14321, $v4317, $le24322], $env4320)})}
else if ($T($g2110($g4293, "symbol")))
{var $__4323 = $exp4290[0], $name4324 = $exp4290[1];
return $g4287($name4324, $exp4290, "symbol", $env4291, $k4292)}
else return $g4288($exp4290, $env4291, $k4292)}}}
else {var $g4325 = $exp4290;
if ($T($g2076($g4325, $g3882)))
return $g4287($g2106($exp4290), $exp4290, "keyword", $env4291, $k4292)
else if ($T($g2076($g4325, $g4289)))
return $g4287($g2106($exp4290), $exp4290, "hash", $env4291, $k4292)
else return $k4292($exp4290, $env4291)}}, false)}
$g4287 = $g2075("lift_value", function $g4363 ($name4355, $value4356, $type4357, $env4358, $k4359)
{var $g4360 = $g2155($env4358, "lifted", $type4357, $name4355);
if ($T($g4360))
{var $t4361 = $g4360;
return $k4359($t4361, $env4358)}
else {var $t4362 = $g2136($env4358, "lifted", $type4357, $name4355, $g2139());
return [$g2065("%bind"), [$t4362, $value4356], $k4359($t4362, $env4358)]}}, false)
$g4286 = $g2075("lift_symbolT", function $g4382 ($expt4364, $env4365, $k4366)
{var $sequence4377 = $expt4364, $g4378 = $sequence4377, $g4379 = (($g4378 || false).length || 0), $g4380 = 0, $g4381 = ($g4379 === $g4380);
if ($T($g4381))
return $k4366([], $env4365)
else return $g4288($expt4364, $env4365, $k4366)}, false)
$g4288 = $g2075("lift_symbolTT", function $g4398 ($exp4383, $env4384, $k4385)
{var $sequence4391 = $exp4383, $g4394 = $sequence4391[0], $g4397 = function $g4399 ($t4386, $env4387)
{var $sequence4393 = $exp4383, $g4395 = $sequence4393.slice(1), $g4396 = function $g4400 ($tt4388, $env4389)
{return $k4385($g2105([$t4386], $tt4388), $env4389)};
return $g4286($g4395, $env4387, $g4396)};
return $g4275($g4394, $env4384, $g4397)}, false)
var trueQ = $g1464["true?"], $g4401, $g4402 = $g2075("flatten_begins", function $g4444 ($exps4403)
{var $rfunction4434 = $g2105, $values4435 = $g2241(function $g4445 ($exp4404)
{var $flattened4405 = $g4401($exp4404), $g4441;
if ($T($g2076($flattened4405, $g2077)))
{var $sequence4425 = $flattened4405, $g4426 = $sequence4425, $g4427 = (($g4426 || false).length || 0), $g4428 = 0, $value4429 = ($g4427 === $g4428), $g4438 = !(trueQ($value4429));
if ($T($g4438))
{var $sequence4431 = $flattened4405, $g4439 = $sequence4431[0], $g4440 = $g2065("%begin");
$g4441 = $g2110($g4439, $g4440)}
else $g4441 = false}
else $g4441 = false;
if ($T($g4441))
{var $sequence4433 = $flattened4405;
return $sequence4433.slice(1)}
else return [$flattened4405]}, $exps4403), $g4436 = $values4435, $g4442 = $g4436[0], $g4437 = $values4435, $g4443 = $g4437.slice(1);
return $g2231($rfunction4434, $g4442, $g4443)}, false)
var $g4446 = $g2075("varQ", function $g4452 ($exp4447)
{if ($T($g2082($exp4447)))
{var $sequence4449 = $exp4447, $g4450 = $sequence4449[0], $g4451 = $g2065("%var");
return $g2110($g4450, $g4451)}}, false)
var $g4453 = $g2075("setQ", function $g4459 ($exp4454)
{if ($T($g2082($exp4454)))
{var $sequence4456 = $exp4454, $g4457 = $sequence4456[0], $g4458 = $g2065("%set");
return $g2110($g4457, $g4458)}}, false)
var $g4460 = $g2075("methodQ", function $g4466 ($exp4461)
{if ($T($g2082($exp4461)))
{var $sequence4463 = $exp4461, $g4464 = $sequence4463[0], $g4465 = $g2065("%method");
return $g2110($g4464, $g4465)}}, false)
var trueQ = $g1464["true?"], $g4467 = $g2075("flatten_vars", function $g4559 ($exps4468)
{return $g2231(function $g4560 ($result4469, $exp4470)
{var $sequence4488 = $result4469, $g4489 = $sequence4488, $g4490 = (($g4489 || false).length || 0), $g4491 = 0, $value4492 = ($g4490 === $g4491), $g4549 = !(trueQ($value4492)), $previous4471;
if ($T($g4549))
{var $rarray4500 = $result4469, $g4501 = $rarray4500, $g4502 = (($g4501 || false).length || 0), $g4550 = ($g4502 - 1);
$previous4471 = $rarray4500[$g4550]}
else $previous4471 = false;
var $previous_varq4472;
if ($T($previous4471))
$previous_varq4472 = $g4446($previous4471)
else $previous_varq4472 = false;
var $g4551;
if ($T($previous_varq4472))
$g4551 = $g4446($exp4470)
else $g4551 = false;
if ($T($g4551))
{var $g4553 = function $g4561 ($binding4473)
{var $rarray4512 = $result4469, $g4513 = $rarray4512, $g4514 = (($g4513 || false).length || 0), $g4552 = ($g4514 - 1), $rarray4515 = $rarray4512[$g4552], $value4516 = $binding4473;
$rarray4515.push($value4516);
return $rarray4515}, $sequence4518 = $exp4470, $g4554 = $sequence4518.slice(1);
$g2164($g4553, $g4554);
return $result4469}
else {var $mergeq4474;
if ($T($previous_varq4472))
$mergeq4474 = $g4453($exp4470)
else $mergeq4474 = false;
var $binding4475;
if ($T($mergeq4474))
{var $rarray4533 = $result4469, $g4534 = $rarray4533, $g4535 = (($g4534 || false).length || 0), $g4555 = ($g4535 - 1), $rarray4536 = $rarray4533[$g4555], $g4537 = $rarray4536, $g4538 = (($g4537 || false).length || 0), $g4556 = ($g4538 - 1);
$binding4475 = $rarray4536[$g4556]}
else $binding4475 = false;
var $identifier4476;
if ($T($mergeq4474))
{var $sequence4540 = $exp4470;
$identifier4476 = $sequence4540[1]}
else $identifier4476 = false;
var $sequence4542 = $binding4475, $g4557 = $sequence4542[0], $g4558 = $g2110($g4557, $identifier4476);
if ($T($g4558))
{var $rarray4547 = $binding4475, $sequence4546 = $exp4470, $value4548 = $sequence4546[2];
$rarray4547[1] = $value4548;
return $result4469}
else return $g2105($result4469, [$exp4470])}}, [], $exps4468)}, false)
{var dec = $g1464.dec;
$g4401 = $g2075("flatten_statements", function $g4640 ($exp4565)
{if ($T($g2076($exp4565, $g2077)))
{var $sequence4575 = $exp4565, $g4630 = $sequence4575[0], $g4566 = $g2106($g4630), $g4567 = $g2110($g4566, "%method"), $g4631;
if ($T($g4567))
$g4631 = $g4567
else {var $g4568 = $g2110($g4566, "%while");
if ($T($g4568))
$g4631 = $g4568
else $g4631 = $g2110($g4566, "%set")};
if ($T($g4631))
{var $rarray4588 = $exp4565, $rarray4585 = $exp4565, $g4586 = $rarray4585, $g4587 = (($g4586 || false).length || 0), $g4632 = ($g4587 - 1), $g4633 = $rarray4585[$g4632], $value4589 = $g4401($g4633);
$rarray4588[dec($g2111($rarray4588), 1)] = $value4589;
return $exp4565}
else if ($T($g2110($g4566, "%begin")))
{var $__4569 = $exp4565[0], $exps4570 = $SL.call($exp4565, 1);
return $g2190($g4467($g4402($exps4570)))}
else if ($T($g2110($g4566, "%bind")))
{var $__4571 = $exp4565[0], $binding4572 = $exp4565[1], $body4573 = $exp4565[2];
return $g4401([$g2065("%begin"), [$g2065("%var"), $binding4572], $body4573])}
else if ($T($g2110($g4566, "%if")))
{var $rarray4594 = $exp4565, $sequence4593 = $exp4565, $g4634 = $sequence4593[2], $value4595 = $g4401($g4634);
$rarray4594[2] = $value4595;
var $rarray4608 = $exp4565, $rarray4605 = $exp4565, $g4606 = $rarray4605, $g4607 = (($g4606 || false).length || 0), $g4635 = ($g4607 - 1), $g4636 = $rarray4605[$g4635], $value4609 = $g4401($g4636);
$rarray4608[dec($g2111($rarray4608), 1)] = $value4609;
return $exp4565}
else if ($T($g2110($g4566, "%try")))
{var $rarray4614 = $exp4565, $sequence4613 = $exp4565, $g4637 = $sequence4613[1], $value4615 = $g4401($g4637);
$rarray4614[1] = $value4615;
var $rarray4628 = $exp4565, $rarray4625 = $exp4565, $g4626 = $rarray4625, $g4627 = (($g4626 || false).length || 0), $g4638 = ($g4627 - 1), $g4639 = $rarray4625[$g4638], $value4629 = $g4401($g4639);
$rarray4628[dec($g2111($rarray4628), 1)] = $value4629;
return $exp4565}
else return $g2241($g4401, $exp4565)}
else return $exp4565}, false)}
var $g4641 = $g2057("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var $g4642 = $g2075("fill_zeros", function $g4654 ($rstring4643)
{var $rarray4649 = "0000", $start4650 = 0, $robject4648 = $rstring4643, $g4652 = (($robject4648 || false).length || 0), $end4651 = (4 - $g4652), $g4653 = $rarray4649.slice($start4650, $end4651);
return $g2105($g4653, $rstring4643)}, false)
var $g4656 = $g1464.join, $g4657 = $g1464["<"], $g4658 = $g1464["as-hex-string"], $g4659 = $g1464["char-code"], $g4660 = $g1464["as-array"], $g4661 = $g2075("escape_string", function $g4680 ($rstring4662)
{var $g4677 = function $g4681 ($rchar4663)
{var $g4664 = $g2155($g4641, $rchar4663);
if ($T($g4664))
{var $escaped4665 = $g4664;
return $g2105("\\", $escaped4665)}
else {var $rchar4668 = $rchar4663, $code4666 = $rchar4668.charCodeAt(0);
if ($T($g4657(31, $code4666, 127)))
return $rchar4663
else {var $rnumber4670 = $code4666, $g4675 = $rnumber4670.toString(16), $g4676 = $g4642($g4675);
return $g2105("\\u", $g4676)}}}, $rarguments4673 = $rstring4662, $skip4674 = undefined, $g4678 = $SL.call($rarguments4673, ($skip4674 || 0)), $g4679 = $g2241($g4677, $g4678);
return $g4656($g4679, "")}, false)
var $g4682 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var $g4683 = $g2057("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
{var $g4684 = $g2054.match;
$g2137 = $g2075("escape_name", function $g4708 ($name4685)
{if ($T($g3371($name4685, $g4682)))
return $g2105("R", $name4685)
else {var $g4706 = function $g4709 ($rchar4686)
{var $robject4690 = $g4683, $property4691 = $rchar4686, $g4702 = $HP.call($robject4690,$property4691);
if ($T($g4702))
return $g2155($g4683, $rchar4686)
else {var $regexp4694 = "\\w", $rstring4695 = $rchar4686, $g4703 = $rstring4695.match($regexp4694);
if ($T($g4703))
return $rchar4686
else {var $rchar4697 = $rchar4686, $g4704 = $rchar4697.charCodeAt(0), $g4705 = $g2138($g4704);
return $g2105("Z", $g4705)}}}, $rarguments4700 = $name4685, $skip4701 = undefined, $g4707 = $SL.call($rarguments4700, ($skip4701 || 0)), $chars4687 = $g2241($g4706, $g4707);
return $g4656($chars4687, "")}}, false)}
var trueQ = $g1464["true?"], $g4710 = $g2075("valid_js_nameQ", function $g4719 ($identifier4711)
{var $value4713 = $g3371($identifier4711, $g4682), $g4718 = !(trueQ($value4713));
if ($T($g4718))
{var $regexp4716 = "^\\w+$", $rstring4717 = $identifier4711;
return $rstring4717.match($regexp4716)}}, false)
var $g4722, $g4723 = $g1464["as-uppercase"], $g4724 = $g1464.description, $g4725 = $g2075("compile_js", function $g4750 ($exp4726, $env4727)
{var $g4728 = $exp4726;
if ($T($g2076($g4728, $g2077)))
{var $sequence4740 = $exp4726, $g4741 = $sequence4740, $g4742 = (($g4741 || false).length || 0), $g4743 = 0, $g4748 = ($g4742 === $g4743);
if ($T($g4748))
{var $error4745 = $g2918($g2919, $g2924, "empty expression");
throw($error4745);
return false}
else return $g4722($exp4726, $env4727)}
else if ($T($g2076($g4728, $g3880)))
return $g2138($exp4726)
else if ($T($g2076($g4728, $g3881)))
if ($T($exp4726))
return "true"
else return "false"
else if ($T($g2076($g4728, $g2928)))
return $g2105("\"", $g4661($exp4726), "\"")
else if ($T($g2076($g4728, $g4289)))
{var $rstring4747 = $g2106($exp4726), $g4749 = $rstring4747.toUpperCase();
return $g2105("$", $g4749)}
else if ($T($g2076($g4728, $g3882)))
return $g2105("$K(\"", $g2106($exp4726), "\")")
else if ($T($g2076($g4728, $g2081)))
{var $g4729 = $exp4726;
if ($T($g2110($g4729, $g2065("%this-method"))))
return $g4725($g2155($env4727, "current-method"), $env4727)
else if ($T($g2110($g4729, $g2065("%all-arguments"))))
return "arguments"
else if ($T($g2155($exp4726, "generated?")))
return $g2105("$", $g2106($exp4726))
else return $g2137($g2106($exp4726))}
else return $g4724($exp4726)}, false)
{var trueQ = $g1464["true?"], $g4758;
$g4722 = $g2075("compile_js_exp", function $g4895 ($exp4759, $env4760)
{var $sequence4817 = $exp4759, $g4854 = $sequence4817[0], $name4761 = $g2106($g4854), $g4762 = $name4761;
if ($T($g2110($g4762, "%native-call")))
{var $__4763 = $exp4759[0], $operator4764 = $exp4759[1], $values4765 = $SL.call($exp4759, 2);
return $g2105($operator4764, $g4758($values4765, $env4760))}
else if ($T($g2110($g4762, "%infix")))
{var $__4766 = $exp4759[0], $operator4767 = $exp4759[1], $values4768 = $SL.call($exp4759, 2);
return $g2105("(", $g4656($g2241($g2113($g4725, $env4760), $values4768), $g2105(" ", $operator4767, " ")), ")")}
else {var $g4769 = $g2110($g4762, "%plus"), $g4855;
if ($T($g4769))
$g4855 = $g4769
else {var $g4770 = $g2110($g4762, "%minus");
if ($T($g4770))
$g4855 = $g4770
else {var $g4771 = $g2110($g4762, "%times");
if ($T($g4771))
$g4855 = $g4771
else $g4855 = $g2110($g4762, "%divide")}};
if ($T($g4855))
{var $g4856 = $g2065("%infix"), $g4772 = $name4761, $g4857;
if ($T($g2110($g4772, "%plus")))
$g4857 = "+"
else if ($T($g2110($g4772, "%minus")))
$g4857 = "-"
else if ($T($g2110($g4772, "%times")))
$g4857 = "*"
else if ($T($g2110($g4772, "%divide")))
$g4857 = "/"
else $g4857 = false;
var $g4858 = [$g4856, $g4857], $sequence4819 = $exp4759, $g4859 = $sequence4819.slice(1), $g4860 = $g2105($g4858, $g4859);
return $g4722($g4860, $env4760)}
else if ($T($g2110($g4762, "%array")))
{var $__4773 = $exp4759[0], $elements4774 = $SL.call($exp4759, 1);
return $g2105("[", $g4656($g2241($g2113($g4725, $env4760), $elements4774), ", "), "]")}
else if ($T($g2110($g4762, "%object")))
{var $sequence4821 = $exp4759, $key_values4775 = $sequence4821.slice(1), $entries4776 = [], $robject4823 = $key_values4775, $g4861 = (($robject4823 || false).length || 0), $g4777 = ($g4861 / 2), $i4778 = 0;
while ($T(true))
{var $value4825 = $g3847($i4778, $g4777), $g4864 = !(trueQ($value4825));
if ($T($g4864))
{(function $g4896 ($i4779)
{var $rarray4828 = $entries4776, $name4780 = $g2203($key_values4775, ($i4779 * 2)), $g4862;
if ($T($g4710($name4780)))
$g4862 = $name4780
else $g4862 = $g4725($name4780, $env4760);
var $g4863 = $g4725($g2203($key_values4775, (($i4779 * 2) + 1)), $env4760), $value4829 = $g2105($g4862, ":", $g4863);
$rarray4828.push($value4829);
return $rarray4828})($i4778);
$i4778 = ($i4778 + 1)}
else break};
false;
return $g2105("{", $g4656($entries4776, ",\n"), "}")}
else if ($T($g2110($g4762, "%if")))
{var $__4781 = $exp4759[0], $test4782 = $exp4759[1], $then4783 = $exp4759[2], $relse4784 = $exp4759[3], $g4865 = $g4725($test4782, $env4760), $g4866 = $g4725($then4783, $env4760), $g4867;
if ($T($relse4784))
{var $value4831 = $g2201($relse4784, [$g2065("%return"), false]);
$g4867 = !(trueQ($value4831))}
else $g4867 = false;
var $g4868;
if ($T($g4867))
$g4868 = $g2105("\nelse ", $g4725($relse4784, $env4760))
else $g4868 = "";
return $g2105("if (", $g4865, ")\n", $g4866, $g4868)}
else if ($T($g2110($g4762, "%while")))
{var $__4785 = $exp4759[0], $test4786 = $exp4759[1], $body4787 = $exp4759[2];
return $g2105("while (", $g4725($test4786, $env4760), ")\n", $g4725($body4787, $env4760))}
else if ($T($g2110($g4762, "%try")))
{var $__4788 = $exp4759[0], $body4789 = $exp4759[1], $rvar4790 = $exp4759[2], $rcatch4791 = $exp4759[3];
return $g2105("try {", $g4725($body4789, $env4760), "}\n", "catch (", $g4725($rvar4790, $env4760), ")\n", "{", $g4725($rcatch4791, $env4760), "}")}
else if ($T($g2110($g4762, "%return")))
{var $sequence4833 = $exp4759, $g4869 = $sequence4833[1], $g4870 = $g4725($g4869, $env4760);
return $g2105("return ", $g4870)}
else if ($T($g2110($g4762, "%begin")))
{var $g4871 = $g2113($g4725, $env4760), $sequence4835 = $exp4759, $g4872 = $sequence4835.slice(1), $g4873 = $g2241($g4871, $g4872), $g4874 = $g4656($g4873, ";\n");
return $g2105("{", $g4874, "}")}
else if ($T($g2110($g4762, "%set")))
{var $__4792 = $exp4759[0], $rvar4793 = $exp4759[1], $value4794 = $exp4759[2];
return $g2105($g4725($rvar4793, $env4760), " = ", $g4725($value4794, $env4760))}
else if ($T($g2110($g4762, "%method")))
{var $__4795 = $exp4759[0], $rarguments4796 = $exp4759[1], $body4797 = $exp4759[2], $name4798 = $g2139(), $previous_method4799 = $g2155($env4760, "current-method"), $g4875 = $g4725($name4798, $env4760), $g4876 = $g4656($g2241($g2113($g4725, $env4760), $rarguments4796), ", ");
$g2136($env4760, "current-method", $name4798);
var $bodyt4800 = $g4725($body4797, $env4760);
$g2136($env4760, "current-method", $previous_method4799);
var $g4879;
if ($T($g2082($body4797)))
{var $sequence4837 = $body4797, $g4877 = $sequence4837[0], $g4878 = $g2065("%begin");
$g4879 = $g2110($g4877, $g4878)}
else $g4879 = false;
var $g4880;
if ($T($g4879))
$g4880 = $bodyt4800
else $g4880 = $g2105("{", $bodyt4800, "}");
return $g2105("function ", $g4875, " (", $g4876, ")\n", $g4880)}
else if ($T($g2110($g4762, "%var")))
{var $__4801 = $exp4759[0], $bindings4802 = $SL.call($exp4759, 1);
return $g2105("var ", $g4656($g2241(function $g4897 ($binding4803)
{var $g4804;
if ($T($g2076($binding4803, $g2077)))
$g4804 = $binding4803
else $g4804 = [$binding4803, false];
var $rvar4805 = $g4804[0], $value4806 = $g4804[1], $g4881 = $g4725($rvar4805, $env4760), $g4882;
if ($T($value4806))
$g4882 = $g2105(" = ", $g4725($value4806, $env4760))
else $g4882 = "";
return $g2105($g4881, $g4882)}, $bindings4802), ", "))}
else if ($T($g2110($g4762, "%native")))
{var $rfunction4848 = $g2105, $g4883 = function $g4898 ($e4807)
{if ($T($g2076($e4807, $g2081)))
return $g4725($e4807)
else return $g2138($e4807)}, $sequence4847 = $exp4759, $g4884 = $sequence4847.slice(1), $values4849 = $g2241($g4883, $g4884), $g4850 = $values4849, $g4885 = $g4850[0], $g4851 = $values4849, $g4886 = $g4851.slice(1);
return $g2231($rfunction4848, $g4885, $g4886)}
else if ($T($g2110($g4762, "%native-name")))
{var $sequence4853 = $exp4759, $g4887 = $sequence4853[1], $g4888 = $g2137($g4887);
return $g2105("\"", $g4888, "\"")}
else if ($T($g2110($g4762, "%get-property")))
{var $__4808 = $exp4759[0], $robject4809 = $exp4759[1], $properties4810 = $SL.call($exp4759, 2), $g4889;
if ($T($g2076($robject4809, $g3880)))
$g4889 = $g2105("(", $g4725($robject4809, $env4760), ")")
else $g4889 = $g4725($robject4809, $env4760);
var $g4892 = $g2231(function $g4899 ($result4811, $property4812)
{var $g4890;
if ($T($g2076($property4812, $g2928)))
$g4890 = $g4710($property4812)
else $g4890 = false;
var $g4891;
if ($T($g4890))
$g4891 = $g2105(".", $property4812)
else $g4891 = $g2105("[", $g4725($property4812, $env4760), "]");
return $g2105($result4811, $g4891)}, "", $properties4810);
return $g2105($g4889, $g4892)}
else {var $rfunction4813 = $exp4759[0], $values4814 = $SL.call($exp4759, 1), $functiont4815 = $g4725($rfunction4813, $env4760), $g4893;
if ($T($g4460($rfunction4813)))
$g4893 = $g2105("(", $functiont4815, ")")
else $g4893 = $functiont4815;
var $g4894 = $g4758($values4814, $env4760);
return $g2105($g4893, $g4894)}}}, false)}
$g4758 = $g2075("compile_js_call", function $g4902 ($values4900, $env4901)
{return $g2105("(", $g4656($g2241($g2113($g4725, $env4901), $values4900), ", "), ")")}, false)
var $g4907 = $K("string"), $g4903 = $g2055.read, $g4904 = $g2052["<string-stream>"], $g4905 = $g2075("read_program", function $g4908 ($source4906)
{return $g4903($g2918($g4904, $g4907, $g2105("(", $source4906, "\n)")))}, false)
var $g4909 = $g2075("compile_expression", function $g4917 ($exp4910, $env4911)
{return $g2231(function $g4918 ($result4912, $namesfn4913)
{var $name4914 = $namesfn4913[0], $fn4915 = $namesfn4913[1], $result4916 = $fn4915($result4912);
return $result4916}, $exp4910, [["source", $g3200], ["macroexpanded", $g2113($g2166, $env4911)], ["lifted defines", $g2113($g3201, $env4911)], ["defined free variables", $g2113($g3392, $env4911)], ["alpha-converted", $g2113($g3663, $env4911)], ["inline", $g2113($g3732, $env4911)], ["defined free variables after inline", $g2113($g3422, $env4911)], ["ANF", $g3887], ["lifted symbols", $g2113($g4276, $env4911)], ["statements", $g2113($g4166, $env4911)], ["flattened", $g4401], ["compiled", $g2113($g4725, $env4911)]])}, false)
var $g4919 = require("path")
var $g4920 = require("fs")
var $g4921 = require("vm")
var trueQ = $g1464["true?"], $g4922 = $g2075("ensure_directory", function $g4931 ($directory4923)
{var $parent4924 = $g4919.dirname($directory4923), $value4926 = $g4919.existsSync($parent4924), $g4929 = !(trueQ($value4926));
if ($T($g4929))
$g4922($parent4924);
var $value4928 = $g4919.existsSync($directory4923), $g4930 = !(trueQ($value4928));
if ($T($g4930))
return $g4920.mkdirSync($directory4923)}, false)
var $g4932 = $g2075("executable_path", function $g4934 ($module_name4933)
{return $g4919.resolve("build", $g2105($module_name4933, ".js"))}, false)
var $g4935 = $g2075("module_path", function $g4937 ($module_name4936)
{return $g4919.resolve("build", $g2105($module_name4936, ".rm"))}, false)
var $g4938 = $g2075("source_path", function $g4940 ($module_name4939)
{return $g4919.resolve("src", $g2105($module_name4939, ".ralph"))}, false)
var trueQ = $g1464["true?"], $g4942 = $g2075("recompileQ", function $g4949 ($module_name4943)
{var $p4944 = $g4932($module_name4943), $value4948 = $g4919.existsSync($p4944), $g4945 = !(trueQ($value4948));
if ($T($g4945))
return $g4945
else {var $p24946 = $g4938($module_name4943);
return $g4657($g2155($g4920.statSync($p4944), "mtime"), $g2155($g4920.statSync($p24946), "mtime"))}}, false)
{var $g4954 = $g1464["chain-object"], $g4955;
$g3133 = $g2075("compile_time_import_module", function $g4972 ($env4956, $module_name4957)
{var $g4958 = $SL.call(arguments, 2), $g4959 = $g2965($g4958, {names:false}), $names4960 = $g4959.names, $g4967;
if ($T($g2110($module_name4957, "ralph/core")))
$g4967 = [$g2188, $g3304]
else {$g4955($module_name4957);
var $definitions4961 = require($module_name4957), $macros4962 = $g2067(), $symbol_macros4963 = $g2067(), $g4970 = function $g4973 ($name4964)
{var $definition4965 = $g2155($definitions4961, $name4964);
if ($T($g2155($definition4965, "%macro?")))
return $g2136($macros4962, $name4964, $definition4965)
else if ($T($g2155($definition4965, "%symbol-macro?")))
return $g2136($symbol_macros4963, $name4964, $definition4965)}, $g4966 = $names4960, $g4971;
if ($T($g4966))
$g4971 = $g4966
else $g4971 = $g3391($definitions4961);
$g2164($g4970, $g4971);
$g4967 = [$macros4962, $symbol_macros4963]};
var $macros4968 = $g4967[0], $symbol_macros4969 = $g4967[1];
$g4954($g2155($env4956, "macros"), $macros4968);
return $g4954($g2155($env4956, "symbol-macros"), $symbol_macros4969)}, false)}
{var $g4977;
$g3134 = $g2075("import_module", function $g4990 ($module4978, $module_name4979)
{var $g4980 = $SL.call(arguments, 2), $g4981 = $g2965($g4980, {names:false}), $names4982 = $g4981.names, $other_module4983 = $g4977($module_name4979), $rarray4987 = $g2155($module4978, "imports"), $g4984 = $names4982, $g4989;
if ($T($g4984))
$g4989 = $g4984
else $g4989 = $g2155($other_module4983, "exports");
var $value4988 = [$other_module4983, $g4989];
$rarray4987.unshift($value4988);
$rarray4987;
return $other_module4983}, false)}
{var $g4993;
$g4977 = $g2075("find_module", function $g4997 ($module_name4994)
{var $g4995 = $g4955($module_name4994);
if ($T($g4995))
return $g4995
else {var $g4996 = $g2155($g2058, $module_name4994);
if ($T($g4996))
return $g4996
else return $g4993($module_name4994)}}, false)}
{var $g5001 = $K("name"), $g4998;
$g4993 = $g2075("read_module", function $g5002 ($module_name4999)
{var $p5000 = $g4935($module_name4999);
if ($T($g4919.existsSync($p5000)))
return $g3030($g2165($g2918, $g2061, $g5001), $g4903($g2918($g4904, $g4907, $g4998($p5000))))}, false)}
$g4998 = $g2075("read_file", function $g5004 ($path5003)
{return $g4920.readFileSync($path5003).toString()}, false)
var $g5005 = $g2075("open_executable", function $g5008 ($module_name5006)
{var $p5007 = $g4932($module_name5006);
$g4922($g4919.dirname($p5007));
return $g4920.openSync($p5007, "w")}, false)
{var $g5031 = $K("module"), $g5032 = $K("exports"), trueQ = $g1464["true?"];
$g4955 = $g2075("compile_module", function $g5033 ($module_name5009)
{var $robject5019 = $g2058, $property5020 = $module_name5009, $value5021 = $HP.call($robject5019,$property5020), $g5028 = !(trueQ($value5021)), $g5029;
if ($T($g5028))
$g5029 = $g4942($module_name5009)
else $g5029 = false;
if ($T($g5029))
{var $module5010 = $g2918($g2061, $g5001, $module_name5009), $env5011 = $g2918($g2068, $g5031, $module5010), $source5012 = $g4998($g4938($module_name5009)), $program5013 = $g4905($source5012), $executable5014 = $g5005($module_name5009);
$g2136($g2058, $module_name5009, $module5010);
$g3133($env5011, "ralph/core");
var $value5023 = $g2110($module_name5009, "ralph/core"), $g5030 = !(trueQ($value5023));
if ($T($g5030))
{$g3134($module5010, "ralph/core");
var $rarray5026 = $program5013, $value5027 = $g3135("ralph/core", $env5011);
$rarray5026.unshift($value5027);
$rarray5026};
$g2164(function $g5034 ($expression5015)
{return $g4920.writeSync($executable5014, $g2105($g4909($expression5015, $env5011), "\n"))}, $program5013);
$g4920.closeSync($executable5014);
$g4920.writeFileSync($g4935($module_name5009), $g4724([$module_name5009, $g5032, $g2155($module5010, "exports")]));
return $module5010}}, false);
exports["compile-module"] = $g4955}
