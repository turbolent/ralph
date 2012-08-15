var $g1464 = require("ralph/core")
{var $g2054, $g2055, $g2056, $g2057, $g2058;
$g2054 = require("ralph/stream");
$g2055 = require("ralph/format");
$g2056 = require("ralph/regexp");
$g2057 = require("ralph/reader");
$g2058 = require("ralph/date")}
var $g2059 = $g1464["make-object"], $g2060 = $g2059()
var $g2061 = $g1464["%make-class"], $g2062 = $g1464["<object>"], $g2063 = $g2061($g2062, {name:false,
"native?":false,
exports:function $g2064 ()
{return []},
imports:function $g2065 ()
{return []},
inline:function $g2066 ()
{return []}})
var $g2067 = $g1464.symbol, $g2068 = [$g2067("%all-arguments"), $g2067("%this-method")]
var $g2069 = $g1464["make-plain-object"], $g2070 = $g2061($g2062, {module:false,
macros:function $g2071 ()
{return $g2069()},
"symbol-macros":function $g2072 ()
{return $g2069()},
identifiers:function $g2073 ()
{return $g2059()},
"defined?":function $g2074 ()
{return $g2059()},
lifted:function $g2075 ()
{return $g2059()},
"import-identifiers":function $g2076 ()
{return $g2069()}})
var trueQ = $g1464["true?"], $g2077 = $g1464["%make-function"], $g2078 = $g1464["instance?"], $g2079 = $g1464["<array>"], $g2080 = $g1464.not, $g2081 = $g1464["empty?"], $g2082 = $g1464.first, $g2083 = $g1464["<symbol>"], $g2084 = $g2077("expressionQ", function $g2106 ($form2085)
{if ($T($g2078($form2085, $g2079)))
{var $sequence2097 = $form2085, $g2098 = $sequence2097, $g2099 = (($g2098 || false).length || 0), $g2100 = 0, $value2101 = ($g2099 === $g2100), $g2104 = !(trueQ($value2101));
if ($T($g2104))
{var $sequence2103 = $form2085, $g2105 = $sequence2103[0];
return $g2078($g2105, $g2083)}}}, false)
var $g2107 = $g1464.concatenate, $g2108 = $g1464["symbol-name"], $g2109 = $g2077("transform_setter_identifier", function $g2111 ($identifier2110)
{return $g2067($g2107($g2108($identifier2110), "-setter"))}, false)
var $g2112 = $g1464["=="], $g2113 = $g1464.size, $g2114 = $g1464["every?"], $g2115 = $g1464.rcurry, $g2116 = $g2077("setter_identifierQ", function $g2126 ($form2117)
{if ($T($g2078($form2117, $g2079)))
{var $robject2119 = $form2117, $g2122 = (($robject2119 || false).length || 0), $g2123 = $g2112($g2122, 2);
if ($T($g2123))
if ($T($g2114($g2115($g2078, $g2083), $form2117)))
{var $sequence2121 = $form2117, $g2124 = $sequence2121[0], $g2125 = $g2108($g2124);
return $g2112($g2125, "setter")}}}, false)
var $g2127 = $g1464.second, $g2128 = $g2077("identifier_name", function $g2134 ($identifier2129)
{var $g2133;
if ($T($g2116($identifier2129)))
{var $sequence2131 = $identifier2129, $g2132 = $sequence2131[1];
$g2133 = $g2109($g2132)}
else $g2133 = $identifier2129;
return $g2108($g2133)}, false)
var $g2135 = 0
var $g2136 = $g2077("reset_symbol_counterN", function $g2137 ()
{return $g2135 = 0}, false)
var $g2138 = $g1464["get-setter"], $g2139, $g2140 = $g1464["as-string"], $g2141 = $g2077("generate_symbol", function $g2147 ($prefix2142)
{var $g2145;
if ($T($prefix2142))
$g2145 = $g2139($prefix2142)
else $g2145 = "g";
var $g2146 = $g2140($g2135 = ($g2135 + 1)), $name2143 = $g2107($g2145, $g2146), $result2144 = $g2067($name2143);
$g2138($result2144, "generated?", true);
return $result2144}, false)
var $g2148 = $g2077("bindN", function $g2151 ($env2149, $identifier2150)
{return $g2138($env2149, "bound?", $g2108($identifier2150), true)}, false)
var $g2152 = $g2077("unbindN", function $g2155 ($env2153, $identifier2154)
{return $g2138($env2153, "bound?", $g2108($identifier2154), false)}, false)
var $g2156 = $g2059()
var $g2157 = $g1464.get, $g2158 = $g2077("find_special_form", function $g2165 ($form2159, $env2160)
{if ($T($g2084($form2159)))
{var $sequence2162 = $form2159, $g2163 = $sequence2162[0], $g2164 = $g2108($g2163);
return $g2157($g2156, $g2164)}}, false)
{var $g2166 = $g1464["do"], $g2167 = $g1464.curry, $g2168;
$g2138($g2156, "%method", function $g2173 ($env2169, $rarguments2170, $body2171)
{$g2166($g2167($g2148, $env2169), $rarguments2170);
var $expanded_body2172 = $g2168($body2171, $env2169);
$g2166($g2167($g2152, $env2169), $rarguments2170);
return [$g2067("%method"), $rarguments2170, $expanded_body2172]})}
$g2138($g2156, "%set", function $g2177 ($env2174, $identifier2175, $value2176)
{return [$g2067("%set"), $identifier2175, $g2168($value2176, $env2174)]})
$g2138($g2156, "define", function $g2181 ($env2178, $identifier2179, $value2180)
{$g2148($env2178, $identifier2179);
return [$g2067("define"), $identifier2179, $g2168($value2180, $env2178)]})
$g2138($g2156, "%bind", function $g2189 ($env2182, $binding2183, $body2184)
{var $rvar2185 = $binding2183[0], $value2186 = $binding2183[1], $expanded_value2187 = $g2168($value2186, $env2182);
$g2148($env2182, $rvar2185);
var $result2188 = [$g2067("%bind"), [$rvar2185, $expanded_value2187], $g2168($body2184, $env2182)];
$g2152($env2182, $rvar2185);
return $result2188})
var $g2190 = $g2059()
var $g2192 = $g2077("maybe_begin", function $g2199 ($expressions2193)
{var $robject2196 = $expressions2193, $g2194 = (($robject2196 || false).length || 0);
if ($T($g2112($g2194, 0)))
return false
else if ($T($g2112($g2194, 1)))
{var $sequence2198 = $expressions2193;
return $sequence2198[0]}
else return $g2107([$g2067("%begin")], $expressions2193)}, false)
var $g2227 = $REST, $g2228 = $KEY, $g2229 = $K("end"), $g2230 = $K("start"), $g2202 = $g1464["find-key"], $g2203 = $g1464["="], $g2204 = $g1464["copy-sequence"], $g2205 = $g1464.element, $g2206 = $g1464.inc, $g2207 = $g2077("analyze_lambda_list", function $g2231 ($list2208)
{var $position2209 = function $g2232 ($symbol2210)
{return $g2202($list2208, $g2167($g2203, $symbol2210))}, $rest2211 = $position2209($g2227), $key2212 = $position2209($g2228), $g2213 = $rest2211, $g2221;
if ($T($g2213))
$g2221 = $g2213
else {var $g2214 = $key2212;
if ($T($g2214))
$g2221 = $g2214
else {var $robject2216 = $list2208;
$g2221 = (($robject2216 || false).length || 0)}};
var $g2222 = $g2204($list2208, $g2229, $g2221), $g2224;
if ($T($rest2211))
{var $rnumber2218 = $rest2211, $g2223 = ($rnumber2218 + 1);
$g2224 = $g2205($list2208, $g2223)}
else $g2224 = false;
var $g2226;
if ($T($key2212))
{var $rnumber2220 = $key2212, $g2225 = ($rnumber2220 + 1);
$g2226 = $g2204($list2208, $g2230, $g2225)}
else $g2226 = false;
return [$g2222, $g2224, $g2226]}, false)
var $g2233 = $g1464.reduce, $g2234 = $g2077("wrap", function $g2239 ($form2235)
{var $wrappers2236 = $SL.call(arguments, 1);
return $g2233(function $g2240 ($result2237, $wrapper2238)
{return $wrapper2238($result2237)}, $form2235, $wrappers2236)}, false)
var trueQ = $g1464["true?"], $g2243 = $g1464.map, $g2244 = $g1464.reduce1, $g2245 = $g2077("wrap_restSkeys", function $g2340 ($body2246, $all2247, $required2248, $rest2249, $key2250)
{var $restq2251 = $rest2249, $g2252 = $rest2249, $rest2253;
if ($T($g2252))
$rest2253 = $g2252
else {var $sequence2273 = $key2250, $g2274 = $sequence2273, $g2275 = (($g2274 || false).length || 0), $g2276 = 0, $value2277 = ($g2275 === $g2276), $g2322 = !(trueQ($value2277));
if ($T($g2322))
$rest2253 = $g2141()
else $rest2253 = false};
return $g2234($body2246, function $g2341 ($body2254)
{var $sequence2288 = $key2250, $g2289 = $sequence2288, $g2290 = (($g2289 || false).length || 0), $g2291 = 0, $g2323 = ($g2290 === $g2291);
if ($T($g2323))
return $body2254
else {var $key_values2256 = $g2243(function $g2342 ($binding2255)
{if ($T($g2078($binding2255, $g2079)))
return $binding2255
else return [$binding2255, false]}, $key2250), $g2324 = $g2067("bind-properties"), $g2325 = $g2243($g2082, $key_values2256), $g2326 = $g2067("%keys"), $g2327 = [$g2067("%object")], $rfunction2300 = $g2107, $values2301 = $g2243(function $g2343 ($key_value2257)
{var $key2258 = $key_value2257[0], $value2259 = $key_value2257[1];
return [$g2108($key2258), $value2259]}, $key_values2256), $g2302 = $values2301, $g2328 = $g2302[0], $g2303 = $values2301, $g2329 = $g2303.slice(1), $g2330 = $g2233($rfunction2300, $g2328, $g2329), $g2331 = $g2107($g2327, $g2330), $g2332 = [$g2326, $rest2253, $g2331];
return [$g2324, $g2325, $g2332, $body2254]}}, function $g2344 ($body2260)
{var $g2261 = $restq2251, $g2333;
if ($T($g2261))
$g2333 = $g2261
else {var $sequence2315 = $key2250, $g2316 = $sequence2315, $g2317 = (($g2316 || false).length || 0), $g2318 = 0, $value2319 = ($g2317 === $g2318);
$g2333 = !(trueQ($value2319))};
if ($T($g2333))
{var $g2334 = $g2067("bind"), $g2335 = $g2067("%native-call"), $robject2321 = $required2248, $g2336 = (($robject2321 || false).length || 0), $g2337 = [$g2335, "$SL.call", $all2247, $g2336], $g2338 = [$rest2253, $g2337], $g2339 = [$g2338];
return [$g2334, $g2339, $body2260]}
else return $body2260})}, false)
$g2138($g2190, "begin", function $g2347 ($__2345)
{var $expressions2346 = $SL.call(arguments, 1);
return $g2192($expressions2346)})
$g2138($g2190, "method", function $g2356 ($__2349, $rarguments2350)
{var $body2351 = $SL.call(arguments, 2), $g2352 = $g2207($rarguments2350), $required2353 = $g2352[0], $rest2354 = $g2352[1], $key2355 = $g2352[2];
return [$g2067("%method"), $required2353, $g2245($g2192($body2351), $g2067("%all-arguments"), $required2353, $rest2354, $key2355)]})
{var $g2357 = $g1464.reverse;
$g2138($g2190, "bind", function $g2380 ($__2358, $bindings2359)
{var $body2360 = $SL.call(arguments, 2), $sequence2373 = $bindings2359, $g2374 = $sequence2373, $g2375 = (($g2374 || false).length || 0), $g2376 = 0, $g2377 = ($g2375 === $g2376);
if ($T($g2377))
return $g2192($body2360)
else return $g2233(function $g2381 ($body2361, $binding2362)
{var $g2378 = $g2067("%bind"), $g2379;
if ($T($g2078($binding2362, $g2083)))
$g2379 = [$binding2362, false]
else $g2379 = $binding2362;
return [$g2378, $g2379, $body2361]}, $g2192($body2360), $g2357($bindings2359))})}
$g2138($g2190, "if", function $g2386 ($__2382, $test2383, $then2384, $relse2385)
{return [$g2067("%if"), $test2383, $then2384, $relse2385]})
{var trueQ = $g1464["true?"], $g2387 = $g1464.rest;
$g2138($g2190, "set!", function $g2410 ($__2388, $place2389)
{var $values2390 = $SL.call(arguments, 2), $g2403;
if ($T($g2078($place2389, $g2079)))
{var $sequence2393 = $place2389, $g2401 = $sequence2393[0], $g2402 = $g2067("%get-property"), $value2394 = $g2112($g2401, $g2402);
$g2403 = !(trueQ($value2394))}
else $g2403 = false;
if ($T($g2403))
{var $sequence2396 = $place2389, $g2404 = $sequence2396[0], $g2405 = $g2109($g2404), $g2406 = [$g2405], $sequence2398 = $place2389, $g2407 = $sequence2398.slice(1);
return $g2107($g2406, $g2407, $values2390)}
else {var $g2408 = $g2067("%set"), $sequence2400 = $values2390, $g2409 = $sequence2400[0];
return [$g2408, $place2389, $g2409]}})}
$g2138($g2190, "parallel-set!", function $g2431 ($__2411, $rvar2412, $value2413)
{var $clauses2414 = $SL.call(arguments, 3), $sequence2426 = $clauses2414, $g2427 = $sequence2426, $g2428 = (($g2427 || false).length || 0), $g2429 = 0, $g2430 = ($g2428 === $g2429);
if ($T($g2430))
return [$g2067("set!"), $rvar2412, $value2413]
else {var $temp2415 = $g2141();
return [$g2067("bind"), [[$temp2415, $value2413]], $g2107([$g2067("parallel-set!")], $clauses2414), [$g2067("set!"), $rvar2412, $temp2415]]}})
{var $g2464 = $K("else"), trueQ = $g1464["true?"];
$g2138($g2190, "cond", function $g2465 ($__2433)
{var $cases2434 = $SL.call(arguments, 1), $sequence2450 = $cases2434, $g2451 = $sequence2450, $g2452 = (($g2451 || false).length || 0), $g2453 = 0, $value2454 = ($g2452 === $g2453), $g2459 = !(trueQ($value2454));
if ($T($g2459))
{var $sequence2456 = $cases2434, $g2435 = $sequence2456[0], $test2436 = $g2435[0], $then2437 = $SL.call($g2435, 1), $then2438 = $g2192($then2437);
if ($T($g2112($test2436, $g2464)))
return $then2438
else {var $g2460 = $g2067("if"), $g2461 = [$g2067("cond")], $sequence2458 = $cases2434, $g2462 = $sequence2458.slice(1), $g2463 = $g2107($g2461, $g2462);
return [$g2460, $test2436, $then2438, $g2463]}}})}
$g2138($g2190, "when", function $g2469 ($__2466, $test2467)
{var $body2468 = $SL.call(arguments, 2);
return [$g2067("if"), $test2467, $g2192($body2468), false]})
$g2138($g2190, "unless", function $g2473 ($__2470, $test2471)
{var $body2472 = $SL.call(arguments, 2);
return [$g2067("if"), [$g2067("not"), $test2471], $g2192($body2472), false]})
$g2138($g2190, "and", function $g2491 ($__2475)
{var $values2476 = $SL.call(arguments, 1), $robject2479 = $values2476, $g2477 = (($robject2479 || false).length || 0);
if ($T($g2112($g2477, 0)))
return true
else if ($T($g2112($g2477, 1)))
{var $sequence2481 = $values2476;
return $sequence2481[0]}
else {var $g2486 = $g2067("when"), $sequence2483 = $values2476, $g2487 = $sequence2483[0], $g2488 = [$g2067("and")], $sequence2485 = $values2476, $g2489 = $sequence2485.slice(1), $g2490 = $g2107($g2488, $g2489);
return [$g2486, $g2487, $g2490]}})
$g2138($g2190, "or", function $g2514 ($__2493)
{var $values2494 = $SL.call(arguments, 1), $robject2498 = $values2494, $g2495 = (($robject2498 || false).length || 0);
if ($T($g2112($g2495, 0)))
return false
else if ($T($g2112($g2495, 1)))
{var $sequence2500 = $values2494;
return $sequence2500[0]}
else {var $value2496 = $g2141(), $g2505 = $g2067("bind"), $sequence2502 = $values2494, $g2506 = $sequence2502[0], $g2507 = [$value2496, $g2506], $g2508 = [$g2507], $g2509 = $g2067("if"), $g2510 = [$g2067("or")], $sequence2504 = $values2494, $g2511 = $sequence2504.slice(1), $g2512 = $g2107($g2510, $g2511), $g2513 = [$g2509, $value2496, $value2496, $g2512];
return [$g2505, $g2508, $g2513]}})
$g2138($g2190, "if-bind", function $g2522 ($__2515, $binding2516, $then2517, $relse2518)
{var $rvar2519 = $binding2516[0], $value2520 = $binding2516[1], $temp2521 = $g2141();
return [$g2067("bind"), [[$temp2521, $value2520]], [$g2067("if"), $temp2521, [$g2067("bind"), [[$rvar2519, $temp2521]], $then2517], $relse2518]]})
$g2138($g2190, "while", function $g2526 ($__2523, $test2524)
{var $body2525 = $SL.call(arguments, 2);
return [$g2067("%while"), $test2524, $g2192($body2525)]})
$g2138($g2190, "until", function $g2530 ($__2527, $test2528)
{var $body2529 = $SL.call(arguments, 2);
return $g2107([$g2067("while"), [$g2067("not"), $test2528]], $body2529)})
$g2138($g2190, "dotimes", function $g2549 ($__2532, $binding2533)
{var $body2534 = $SL.call(arguments, 2), $temp2535 = $g2141(), $rvar2536 = $binding2533[0], $count2537 = $binding2533[1], $result2538 = $binding2533[2], $g2540 = $g2067("bind"), $g2541 = [[$temp2535, $count2537]], $g2542 = $g2067("for"), $g2543 = [[$rvar2536, 0, [$g2067("+"), $rvar2536, 1]]], $g2544 = [$g2067(">="), $rvar2536, $temp2535], $g2539 = $result2538, $g2545;
if ($T($g2539))
$g2545 = $g2539
else $g2545 = false;
var $g2546 = [$g2544, $g2545], $g2547 = [$g2542, $g2543, $g2546], $g2548 = $g2107($g2547, $body2534);
return [$g2540, $g2541, $g2548]})
{var trueQ = $g1464["true?"], $g2556 = $g1464["any?"], $g2557 = $g1464["push-last"], $g2558 = $g1464.slice, $g2559 = $g1464.third;
$g2138($g2190, "for", function $g2654 ($__2560, $clauses2561, $end2562)
{var $body2563 = $SL.call(arguments, 3), $init_clauses2564 = [], $next_clauses2565 = [], $vars2566 = $g2243($g2082, $clauses2561), $g2567 = $clauses2561, $g2568, $g2569, $g2570 = [$g2567];
while ($T(true))
{var $g2571 = $g2568, $value2576;
if ($T($g2571))
$value2576 = $g2571
else $value2576 = $g2556($g2081, $g2570);
var $g2640 = !(trueQ($value2576));
if ($T($g2640))
{var $sequence2578 = $g2567, $clause2572 = $sequence2578[0];
(function $g2655 ($clause2573)
{var $rarray2587 = $init_clauses2564, $rarray2584 = $clause2573, $start2585 = 0, $end2586 = 2, $value2588 = $rarray2584.slice($start2585, $end2586);
$rarray2587.push($value2588);
$rarray2587;
var $rarray2593 = $next_clauses2565, $sequence2592 = $clause2573, $value2594 = $sequence2592[0];
$rarray2593.push($value2594);
$rarray2593;
var $rarray2599 = $next_clauses2565, $sequence2598 = $clause2573, $value2600 = $sequence2598[2];
$rarray2599.push($value2600);
return $rarray2599})($clause2572);
var $sequence2602 = $g2567, $g2639 = $sequence2602.slice(1);
$g2567 = $g2639;
$g2570 = [$g2567]}
else break};
$g2569;
var $g2641 = $g2067("bind"), $g2642 = $g2067("while"), $sequence2613 = $end2562, $g2614 = $sequence2613, $g2615 = (($g2614 || false).length || 0), $g2616 = 0, $g2574 = ($g2615 === $g2616), $g2645;
if ($T($g2574))
$g2645 = $g2574
else {var $g2643 = $g2067("not"), $sequence2618 = $end2562, $g2644 = $sequence2618[0];
$g2645 = [$g2643, $g2644]};
var $g2646 = $g2107([$g2107([$g2067("method"), $vars2566], $body2563)], $vars2566), $g2647 = $g2107([$g2067("parallel-set!")], $next_clauses2565), $g2648 = [$g2642, $g2645, $g2646, $g2647], $g2649 = $g2107($g2648), $sequence2631 = $end2562, $sequence2632 = $sequence2631.slice(1), $g2633 = $sequence2632, $g2634 = (($g2633 || false).length || 0), $g2635 = 0, $value2636 = ($g2634 === $g2635), $g2650 = !(trueQ($value2636)), $g2653;
if ($T($g2650))
{var $g2651 = [$g2067("begin")], $sequence2638 = $end2562, $g2652 = $sequence2638.slice(1);
$g2653 = $g2107($g2651, $g2652)}
else $g2653 = false;
return [$g2641, $init_clauses2564, $g2649, $g2653]})}
$g2138($g2190, "for-each", function $g2730 ($__2657, $clauses2658, $end2659)
{var $body2660 = $SL.call(arguments, 3), $clauses2662 = $g2243(function $g2731 ($clause2661)
{return $g2107([$g2141()], $clause2661)}, $clauses2658), $endq2663 = $g2141(), $values2664 = $g2141(), $result2665 = $g2141(), $g2702 = $g2067("begin"), $vars2666 = $g2243($g2127, $clauses2662), $g2703 = $g2107([$g2107([$g2067("method"), $vars2666], $body2660)], $vars2666), $g2704 = [$g2702, $g2703], $g2710 = $g2243(function $g2732 ($clause2667)
{var $g2705 = $g2067("set!"), $sequence2681 = $clause2667, $g2706 = $sequence2681[0], $g2707 = $g2067("rest"), $sequence2683 = $clause2667, $g2708 = $sequence2683[0], $g2709 = [$g2707, $g2708];
return [$g2705, $g2706, $g2709]}, $clauses2662), $g2711 = [[$g2067("set!"), $values2664, $g2107([$g2067("%array")], $g2243($g2082, $clauses2662))]], $body2668 = $g2107($g2704, $g2710, $g2711), $g2712 = $g2067("bind"), $g2713 = $g2107($g2243(function $g2733 ($clause2669)
{var $temp2670 = $clause2669[0], $rvar2671 = $clause2669[1], $values2672 = $clause2669[2];
return [$temp2670, $values2672]}, $clauses2662), [[$endq2663, false], [$result2665, false], [$values2664, $g2107([$g2067("%array")], $g2243($g2082, $clauses2662))]]), $g2714 = $g2067("until"), $g2715 = [$g2067("or"), $endq2663, [$g2067("any?"), $g2067("empty?"), $values2664]], $g2716 = $g2067("bind"), $g2717 = $g2243(function $g2734 ($clause2673)
{var $temp2674 = $clause2673[0], $rvar2675 = $clause2673[1], $values2676 = $clause2673[2];
return [$rvar2675, [$g2067("first"), $temp2674]]}, $clauses2662), $sequence2685 = $end2659, $g2677 = $sequence2685[0], $g2727;
if ($T($g2677))
{var $end_test2678 = $g2677, $g2718 = $g2067("if"), $g2719 = $g2067("begin"), $g2720 = $g2067("set!"), $sequence2687 = $end2659, $results2679 = $sequence2687.slice(1), $sequence2698 = $results2679, $g2699 = $sequence2698, $g2700 = (($g2699 || false).length || 0), $g2701 = 0, $g2721 = ($g2700 === $g2701), $g2722;
if ($T($g2721))
$g2722 = [false]
else $g2722 = $results2679;
var $g2723 = $g2192($g2722), $g2724 = [$g2720, $result2665, $g2723], $g2725 = [$g2067("set!"), $endq2663, true], $g2726 = [$g2719, $g2724, $g2725];
$g2727 = [$g2718, $end_test2678, $g2726, $body2668]}
else $g2727 = $body2668;
var $g2728 = [$g2716, $g2717, $g2727], $g2729 = [$g2714, $g2715, $g2728];
return [$g2712, $g2713, $g2729, $result2665]})
$g2138($g2190, "bind-properties", function $g2741 ($__2735, $properties2736, $robject2737)
{var $body2738 = $SL.call(arguments, 3), $objectt2739 = $g2141();
return $g2107([$g2067("bind"), $g2107([[$objectt2739, $robject2737]], $g2243(function $g2742 ($property2740)
{return [$property2740, [$g2067("%get-property"), $objectt2739, $g2108($property2740)]]}, $properties2736))], $body2738)})
$g2138($g2190, "select", function $g2759 ($__2743, $value2744, $test2745)
{var $cases2746 = $SL.call(arguments, 3), $valuet2747 = $g2141(), $testt2748;
if ($T($g2078($test2745, $g2083)))
$testt2748 = $test2745
else $testt2748 = $g2141();
var $test_expression2749 = function $g2760 ($test_value2750)
{return [$testt2748, $valuet2747, $test_value2750]}, $g2754 = $g2067("bind"), $g2755 = [[$valuet2747, $value2744]], $g2756;
if ($T($g2078($test2745, $g2083)))
$g2756 = []
else $g2756 = [[$testt2748, $test2745]];
var $g2757 = $g2107($g2755, $g2756), $g2758 = $g2107([$g2067("cond")], $g2243(function $g2761 ($rcase2751)
{var $tests2752 = $rcase2751[0], $then2753 = $SL.call($rcase2751, 1);
if ($T($g2112($tests2752, $g2464)))
return $rcase2751
else return $g2107([$g2107([$g2067("or")], $g2243($test_expression2749, $tests2752))], $then2753)}, $cases2746));
return [$g2754, $g2757, $g2758]})
var $g2763 = $g2077("destructure", function $g2777 ($bindings2764, $values2765, $body2766)
{if ($T($g2078($values2765, $g2083)))
{var $g2767 = $g2207($bindings2764), $required2768 = $g2767[0], $rest2769 = $g2767[1], $key2770 = $g2767[2], $robject2776 = $required2768, $i2771 = (($robject2776 || false).length || 0);
return $g2233(function $g2778 ($body2772, $binding2773)
{$i2771 = ($i2771 - 1);
if ($T($g2078($binding2773, $g2083)))
return [$g2067("bind"), [[$binding2773, [$g2067("%get-property"), $values2765, $i2771]]], $body2772]
else return $g2763($binding2773, [$g2067("%get-property"), $values2765, $i2771], $body2772)}, $g2245($body2766, $values2765, $required2768, $rest2769, $key2770), $g2357($required2768))}
else {var $rvar2774 = $g2141();
return [$g2067("bind"), [[$rvar2774, $values2765]], $g2763($bindings2764, $rvar2774, $body2766)]}}, false)
$g2138($g2190, "destructuring-bind", function $g2783 ($__2779, $bindings2780, $values2781)
{var $body2782 = $SL.call(arguments, 3);
return $g2763($bindings2780, $values2781, $g2107([$g2067("begin")], $body2782))})
$g2138($g2190, "bind-methods", function $g2791 ($__2784, $bindings2785)
{var $body2786 = $SL.call(arguments, 2);
return $g2107([$g2067("bind"), $g2243($g2082, $bindings2785)], $g2243(function $g2792 ($binding2787)
{var $identifier2788 = $binding2787[0], $rarguments2789 = $binding2787[1], $body2790 = $SL.call($binding2787, 2);
return [$g2067("set!"), $identifier2788, $g2107([$g2067("method"), $rarguments2789], $body2790)]}, $bindings2785), $body2786)})
$g2138($g2190, "inc!", function $g2802 ($__2794, $robject2795, $value2796)
{var $g2798 = $g2067("set!"), $g2799 = $g2067("+"), $g2797 = $value2796, $g2800;
if ($T($g2797))
$g2800 = $g2797
else $g2800 = 1;
var $g2801 = [$g2799, $robject2795, $g2800];
return [$g2798, $robject2795, $g2801]})
$g2138($g2190, "dec!", function $g2812 ($__2804, $robject2805, $value2806)
{var $g2808 = $g2067("set!"), $g2809 = $g2067("-"), $g2807 = $value2806, $g2810;
if ($T($g2807))
$g2810 = $g2807
else $g2810 = 1;
var $g2811 = [$g2809, $robject2805, $g2810];
return [$g2808, $robject2805, $g2811]})
$g2138($g2190, "+", function $g2830 ($__2813)
{var $values2814 = $SL.call(arguments, 1), $sequence2825 = $values2814, $g2826 = $sequence2825, $g2827 = (($g2826 || false).length || 0), $g2828 = 0, $g2829 = ($g2827 === $g2828);
if ($T($g2829))
return 0
else return $g2107([$g2067("%plus")], $values2814)})
$g2138($g2190, "-", function $g2849 ($__2831, $minuend2832)
{var $subtrahends2833 = $SL.call(arguments, 2), $sequence2844 = $subtrahends2833, $g2845 = $sequence2844, $g2846 = (($g2845 || false).length || 0), $g2847 = 0, $g2848 = ($g2846 === $g2847);
if ($T($g2848))
return [$g2067("%native-call"), "-", $minuend2832]
else return $g2107([$g2067("%minus"), $minuend2832], $subtrahends2833)})
$g2138($g2190, "*", function $g2867 ($__2850)
{var $values2851 = $SL.call(arguments, 1), $sequence2862 = $values2851, $g2863 = $sequence2862, $g2864 = (($g2863 || false).length || 0), $g2865 = 0, $g2866 = ($g2864 === $g2865);
if ($T($g2866))
return 1
else return $g2107([$g2067("%times")], $values2851)})
$g2138($g2190, "/", function $g2886 ($__2868, $numerator2869)
{var $denominators2870 = $SL.call(arguments, 2), $sequence2881 = $denominators2870, $g2882 = $sequence2881, $g2883 = (($g2882 || false).length || 0), $g2884 = 0, $g2885 = ($g2883 === $g2884);
if ($T($g2885))
return [$g2067("%divide"), 1, $numerator2869]
else return $g2107([$g2067("%divide"), $numerator2869], $denominators2870)})
$g2138($g2190, "call-next-method", function $g2888 ($__2887)
{return [[$g2067("%get-property"), $g2067("next-method"), "apply"], [$g2067("%native"), "null"], [$g2067("%native"), "arguments"]]})
var trueQ = $g1464["true?"], $g2889 = $g2077("transform_quoted", function $g2915 ($form2890)
{if ($T($g2078($form2890, $g2079)))
{var $sequence2902 = $form2890, $g2903 = $sequence2902, $g2904 = (($g2903 || false).length || 0), $g2905 = 0, $value2906 = ($g2904 === $g2905), $g2911 = !(trueQ($value2906)), $g2914;
if ($T($g2911))
{var $sequence2908 = $form2890, $g2912 = $sequence2908[0], $g2913 = $g2108($g2912);
$g2914 = $g2112($g2913, "%comma")}
else $g2914 = false;
if ($T($g2914))
{var $sequence2910 = $form2890;
return $sequence2910[1]}
else return $g2107([$g2067("%array")], $g2243($g2889, $form2890))}
else if ($T($g2078($form2890, $g2083)))
return [$g2067("symbol"), $g2108($form2890)]
else return $form2890}, false)
$g2138($g2190, "%backquote", function $g2918 ($__2916, $exp2917)
{return $g2889($exp2917)})
{var $g2926 = $K("message"), $g2919 = $g1464.signal, $g2920 = $g1464.make, $g2921 = $g1464["<error>"];
$g2138($g2190, "%comma", function $g2927 ($__2922, $value2923)
{var $error2925 = $g2920($g2921, $g2926, "comma not inside backquote");
throw($error2925);
return false})}
var $g2928 = $g2920($g2921, $g2926, "unsupported name for call in dot")
{var $g2930 = $g1464["<string>"];
$g2138($g2190, ".", function $g2945 ($__2931, $value2932)
{var $calls2933 = $SL.call(arguments, 2);
return $g2233(function $g2946 ($value2934, $call2935)
{var $property2936 = $call2935[0], $rarguments2937 = $SL.call($call2935, 1), $g2941 = $g2067("%get-property"), $g2938 = $property2936, $g2942;
if ($T($g2078($g2938, $g2930)))
$g2942 = $property2936
else if ($T($g2078($g2938, $g2083)))
$g2942 = $g2108($property2936)
else {var $error2940 = $g2928;
throw($error2940);
$g2942 = false};
var $g2943 = [$g2941, $value2934, $g2942], $g2944 = [$g2943];
return $g2107($g2944, $rarguments2937)}, $value2932, $calls2933)})}
var $g2948 = $g2077("simplify_arguments", function $g2960 ($rarguments2949)
{var $g2950 = $g2207($rarguments2949), $required2951 = $g2950[0], $rest2952 = $g2950[1], $key2953 = $g2950[2], $required2955 = $g2243(function $g2961 ($argument2954)
{if ($T($g2078($argument2954, $g2079)))
{var $sequence2957 = $argument2954;
return $sequence2957[0]}
else return $argument2954}, $required2951), $g2958;
if ($T($rest2952))
$g2958 = $g2107([$g2227], $rest2952)
else $g2958 = [];
var $g2959;
if ($T($key2953))
$g2959 = $g2107([$g2228], $key2953)
else $g2959 = [];
return $g2107($required2955, $g2958, $g2959)}, false)
var trueQ = $g1464["true?"], $g2966 = $g1464[">"], $g2967 = $g1464["%keys"], $g2968 = $g2077("make_function_definer", function $g3025 ($macro_name2969, $definer_name2970)
{var $g2971 = $SL.call(arguments, 2), $g2972 = $g2967($g2971, {"type/existing?":false,
"record?":false}), $typesexistingq2973 = $g2972["type/existing?"], $recordq2974 = $g2972["record?"];
return function $g3026 ($env2975, $identifier2976, $rarguments2977)
{var $body2978 = $SL.call(arguments, 3), $g2979;
if ($T($g2116($identifier2976)))
{var $sequence2987 = $identifier2976, $g3014 = $sequence2987[1], $g3015 = $g2109($g3014);
$g2979 = [true, $g3015]}
else $g2979 = [false, $identifier2976];
var $setterq2980 = $g2979[0], $identifier2981 = $g2979[1], $g2982 = $g2078($identifier2981, $g2083), $value2989;
if ($T($g2982))
$value2989 = $g2982
else $value2989 = $setterq2980;
var $g3016 = !(trueQ($value2989));
if ($T($g3016))
{var $error2991 = $g2920($g2921, $g2926, $g2107($macro_name2969, ": ", "name not <var> or (setter <var>)"));
throw($error2991);
false};
var $g3017;
if ($T($typesexistingq2973))
{var $sequence3002 = $rarguments2977, $g3003 = $sequence3002, $g3004 = (($g3003 || false).length || 0), $g3005 = 0;
$g3017 = ($g3004 === $g3005)}
else $g3017 = false;
if ($T($g3017))
{var $error3007 = $g2920($g2921, $g2926, $g2107($macro_name2969, ": ", "method has no arguments"));
throw($error3007);
false};
var $simplified_arguments2983 = $g2948($rarguments2977), $method_definition2984 = $g2168($g2107([$g2067("method"), $simplified_arguments2983], $body2978), $env2975);
if ($T($recordq2974))
$g2138($env2975, "module", "functions", $g2108($identifier2981), $method_definition2984);
var $g3018 = $g2067("define"), $g3019 = [$g2067($definer_name2970), [$g2067("%native-name"), $g2108($identifier2981)], $method_definition2984, $setterq2980], $g3023;
if ($T($typesexistingq2973))
{var $sequence3009 = $rarguments2977, $head2985 = $sequence3009[0], $g3021;
if ($T($g2078($head2985, $g2079)))
{var $robject3011 = $head2985, $g3020 = (($robject3011 || false).length || 0);
$g3021 = $g2966($g3020, 1)}
else $g3021 = false;
var $g3022;
if ($T($g3021))
{var $sequence3013 = $head2985;
$g3022 = $sequence3013[1]}
else $g3022 = $g2067("<object>");
$g3023 = [$g3022, $identifier2981]}
else $g3023 = [];
var $g3024 = $g2107($g3019, $g3023);
return [$g3018, $identifier2981, $g3024]}}, false)
{var $g3052 = $K("type/existing?"), $g3053 = $K("record?"), trueQ = $g1464["true?"], $g3032 = $g1464.apply, $g3033 = [["define-function", "%make-function", $g3052, false, $g3053, true], ["define-method", "%make-method", $g3052, true]], $g3034, $g3035, $g3036 = [$g3033];
while ($T(true))
{var $g3037 = $g3034, $value3041;
if ($T($g3037))
$value3041 = $g3037
else $value3041 = $g2556($g2081, $g3036);
var $g3051 = !(trueQ($value3041));
if ($T($g3051))
{var $sequence3043 = $g3033, $rarguments3038 = $sequence3043[0];
(function $g3054 ($rarguments3039)
{var $sequence3045 = $rarguments3039, $g3048 = $sequence3045[0], $g3049 = $g3032($g2968, $rarguments3039);
return $g2138($g2190, $g3048, $g3049)})($rarguments3038);
var $sequence3047 = $g3033, $g3050 = $sequence3047.slice(1);
$g3033 = $g3050;
$g3036 = [$g3033]}
else break};
$g3035}
$g2138($g2190, "define-generic", function $g3058 ($__3055, $identifier3056, $rarguments3057)
{return [$g2067("define"), $identifier3056, [$g2067("%make-generic"), [$g2067("%native-name"), $g2108($identifier3056)]]]})
{var trueQ = $g1464["true?"];
$g2138($g2190, "define-class", function $g3131 ($__3064, $identifier3065, $superclass3066)
{var $properties3067 = $SL.call(arguments, 3), $robject3068 = [$g2067("%object")], $g3069 = $properties3067, $g3070, $g3071, $g3072 = [$g3069];
while ($T(true))
{var $g3073 = $g3070, $value3077;
if ($T($g3073))
$value3077 = $g3073
else $value3077 = $g2556($g2081, $g3072);
var $g3125 = !(trueQ($value3077));
if ($T($g3125))
{var $sequence3079 = $g3069, $property3074 = $sequence3079[0];
(function $g3132 ($property3075)
{if ($T($g2078($property3075, $g2079)))
{var $rarray3084 = $robject3068, $sequence3083 = $property3075, $g3120 = $sequence3083[0], $value3085 = $g2108($g3120);
$rarray3084.push($value3085);
$rarray3084;
var $rarray3090 = $robject3068, $g3121 = $g2067("method"), $g3122 = [], $sequence3089 = $property3075, $g3123 = $sequence3089[1], $value3091 = [$g3121, $g3122, $g3123];
$rarray3090.push($value3091);
return $rarray3090}
else {var $rarray3094 = $robject3068, $value3095 = $g2108($property3075);
$rarray3094.push($value3095);
$rarray3094;
var $rarray3098 = $robject3068, $value3099 = undefined;
$rarray3098.push($value3099);
return $rarray3098}})($property3074);
var $sequence3101 = $g3069, $g3124 = $sequence3101.slice(1);
$g3069 = $g3124;
$g3072 = [$g3069]}
else break};
$g3071;
var $g3126 = $g2067("define"), $g3127 = $g2067("%make-class"), $sequence3113 = $superclass3066, $g3114 = $sequence3113, $g3115 = (($g3114 || false).length || 0), $g3116 = 0, $value3117 = ($g3115 === $g3116), $g3128 = !(trueQ($value3117)), $g3129;
if ($T($g3128))
{var $sequence3119 = $superclass3066;
$g3129 = $sequence3119[0]}
else $g3129 = false;
var $g3130 = [$g3127, $g3129, $robject3068];
return [$g3126, $identifier3065, $g3130]})}
var $g3133 = $g2077("get_import_module_nameSoptions", function $g3142 ($rimport3134)
{var $g3139;
if ($T($g2078($rimport3134, $g2079)))
{var $sequence3136 = $rimport3134;
$g3139 = $sequence3136[0]}
else $g3139 = $rimport3134;
var $g3140 = $g2108($g3139), $g3141;
if ($T($g2078($rimport3134, $g2079)))
{var $sequence3138 = $rimport3134;
$g3141 = $sequence3138.slice(1)}
else $g3141 = [];
return [$g3140, $g3141]}, false)
{var $g3147, $g3148, $g3149;
$g2138($g2190, "define-module", function $g3166 ($env3150, $__3151)
{var $g3152 = $SL.call(arguments, 2), $g3153 = $g2967($g3152, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), $rimport3154 = $g3153["import"], $rexport3155 = $g3153["export"], $compile_time_import3156 = $g3153["compile-time-import"], $inline3157 = $g3153.inline;
$g2138($env3150, "module", "exports", $g2243($g2128, $rexport3155));
$g2166(function $g3167 ($rimport3158)
{var $g3159 = $g3133($rimport3158), $module_name3160 = $g3159[0], $options3161 = $g3159[1];
return $g3032($g3147, $env3150, $module_name3160, $options3161)}, $compile_time_import3156);
$g2138($env3150, "module", "inline", $g2243($g2128, $inline3157));
return $g2192($g2243(function $g3168 ($rimport3162)
{var $g3163 = $g3133($rimport3162), $module_name3164 = $g3163[0], $options3165 = $g3163[1];
$g3032($g3148, $g2157($env3150, "module"), $module_name3164, $options3165);
return $g3149($module_name3164, $env3150)}, $rimport3154))})}
$g3149 = $g2077("make_import_definition", function $g3172 ($module_name3169, $env3170)
{var $identifier3171 = $g2141();
$g2138($env3170, "import-identifiers", $module_name3169, $identifier3171);
return [$g2067("define"), $identifier3171, [[$g2067("%native"), "require"], $module_name3169]]}, false)
$g2138($g2190, "define-macro", function $g3177 ($env3173, $identifier3174, $rarguments3175)
{var $body3176 = $SL.call(arguments, 3);
return [$g2067("begin"), $g2107([$g2067("define-function"), $identifier3174, $g2107([$g2141()], $rarguments3175)], $body3176), [$g2067("set!"), [$g2067("%get-property"), $identifier3174, "%macro?"], true]]})
$g2138($g2190, "define-symbol-macro", function $g3182 ($env3178, $identifier3179, $rarguments3180)
{var $body3181 = $SL.call(arguments, 3);
return [$g2067("begin"), $g2107([$g2067("define-function"), $identifier3179, []], $body3181), [$g2067("set!"), [$g2067("%get-property"), $identifier3179, "%symbol-macro?"], true]]})
$g2138($g2190, "handler-case", function $g3199 ($__3186, $body3187)
{var $cases3188 = $SL.call(arguments, 2), $condition_var3189 = $g2141();
return [$g2067("%try"), $body3187, $condition_var3189, $g2107([$g2067("cond")], $g2243(function $g3200 ($rcase3190)
{var $g3191 = $rcase3190[0], $type3192 = $g3191[0], $g3193 = $SL.call($g3191, 1), $g3194 = $g2967($g3193, {condition:false}), $condition3195 = $g3194.condition, $body3196 = $SL.call($rcase3190, 1), $g3197 = [[$g2067("instance?"), $condition_var3189, $type3192]], $g3198;
if ($T($condition3195))
$g3198 = [$g2107([$g2067("bind"), [[$condition3195, $condition_var3189]]], $body3196)]
else $g3198 = $body3196;
return $g2107($g3197, $g3198)}, $cases3188))]})
var $g3201, $g3202 = $g1464.identity, $g3203 = $g2077("lift_defines", function $g3206 ($exp3204, $env3205)
{return $g3201($exp3204, $env3205, $g3202)}, false)
{var $g3212, $g3213 = $g1464["has?"], $g3214;
$g3201 = $g2077("lift_define", function $g3263 ($exp3215, $env3216, $k3217)
{if ($T($g2084($exp3215)))
{var $sequence3254 = $exp3215, $g3259 = $sequence3254[0], $g3218 = $g2108($g3259);
if ($T($g2112($g3218, "%bind")))
{var $__3219 = $exp3215[0], $g3220 = $exp3215[1], $rvar3221 = $g3220[0], $value3222 = $g3220[1], $body3223 = $exp3215[2];
return $g3201($value3222, $env3216, function $g3264 ($lvalue3224, $env3225)
{return $g3201($body3223, $env3225, function $g3265 ($lbody3226, $env3227)
{return $k3217([$g2067("%bind"), [$rvar3221, $lvalue3224], $lbody3226], $env3227)})})}
else if ($T($g2112($g3218, "%try")))
{var $m3228 = $exp3215[0], $e13229 = $exp3215[1], $v3230 = $exp3215[2], $e23231 = $exp3215[3];
return $g3212([$e13229, $e23231], $env3216, function $g3266 ($let3232, $env3233)
{var $le13234 = $let3232[0], $le23235 = $let3232[1];
return $k3217([$m3228, $le13234, $v3230, $le23235], $env3233)})}
else {var $g3236 = $g2112($g3218, "%method"), $g3260;
if ($T($g3236))
$g3260 = $g3236
else $g3260 = $g2112($g3218, "%set");
if ($T($g3260))
{var $m3237 = $exp3215[0], $e13238 = $exp3215[1], $e23239 = $exp3215[2];
return $g3201($e23239, $env3216, function $g3267 ($le23240, $env3241)
{return $k3217([$m3237, $e13238, $le23240], $env3241)})}
else {var $g3242 = $g2112($g3218, "%begin"), $g3261;
if ($T($g3242))
$g3261 = $g3242
else {var $g3243 = $g2112($g3218, "%if");
if ($T($g3243))
$g3261 = $g3243
else $g3261 = $g2112($g3218, "%while")};
if ($T($g3261))
{var $m3244 = $exp3215[0], $et3245 = $SL.call($exp3215, 1);
return $g3212($et3245, $env3216, function $g3268 ($let3246, $env3247)
{return $k3217($g2107([$m3244], $let3246), $env3247)})}
else if ($T($g2112($g3218, "define")))
{var $__3248 = $exp3215[0], $rvar3249 = $exp3215[1], $value3250 = $exp3215[2], $exportq3251 = $exp3215[3], $name3252 = $g2108($rvar3249), $robject3257 = $g2157($env3216, "defined?"), $property3258 = $name3252, $g3262 = $HP.call($robject3257,$property3258);
if ($T($g3262))
return $k3217([$g2067("%set"), $rvar3249, $value3250], $env3216)
else {$g2138($env3216, "defined?", $name3252, true);
return [$g2067("%begin"), [$g2067("%define"), $rvar3249], $k3217([$g2067("%set"), $rvar3249, $value3250], $env3216)]}}
else return $g3214($exp3215, $env3216, $k3217)}}}
else return $k3217($exp3215, $env3216)}, false)}
$g3212 = $g2077("lift_defineT", function $g3287 ($expt3269, $env3270, $k3271)
{var $sequence3282 = $expt3269, $g3283 = $sequence3282, $g3284 = (($g3283 || false).length || 0), $g3285 = 0, $g3286 = ($g3284 === $g3285);
if ($T($g3286))
return $k3271([], $env3270)
else return $g3214($expt3269, $env3270, $k3271)}, false)
$g3214 = $g2077("lift_defineTT", function $g3303 ($exp3288, $env3289, $k3290)
{var $sequence3296 = $exp3288, $g3299 = $sequence3296[0], $g3302 = function $g3304 ($t3291, $env3292)
{var $sequence3298 = $exp3288, $g3300 = $sequence3298.slice(1), $g3301 = function $g3305 ($tt3293, $env3294)
{return $k3290($g2107([$t3291], $tt3293), $env3294)};
return $g3212($g3300, $env3292, $g3301)};
return $g3201($g3299, $env3289, $g3302)}, false)
var $g3306 = $g2059()
$g2138($g3306, "next-method", function $g3308 ($__3307)
{return [$g2067("%next-method"), $g2067("%this-method")]})
var trueQ = $g1464["true?"], $g3310 = $g2077("find_macro_definition", function $g3342 ($form3311, $env3312)
{var $g3313 = $form3311;
if ($T($g2078($g3313, $g2079)))
{var $sequence3326 = $form3311, $g3327 = $sequence3326, $g3328 = (($g3327 || false).length || 0), $g3329 = 0, $g3338 = ($g3328 === $g3329);
if ($T($g3338))
{var $error3331 = "Empty form";
throw($error3331);
false};
var $sequence3333 = $form3311, $g3339 = $sequence3333[0], $name3314 = $g2108($g3339), $value3335 = $g2157($env3312, "bound?", $name3314), $g3340 = !(trueQ($value3335));
if ($T($g3340))
return $env3312.macros[$name3314]}
else if ($T($g2078($g3313, $g2083)))
{var $name3315 = $g2108($form3311), $value3337 = $g2157($env3312, "bound?", $name3315), $g3341 = !(trueQ($value3337));
if ($T($g3341))
return $env3312["symbol-macros"][$name3315]}}, false)
var $g3344 = $g2077("macroexpand_1", function $g3352 ($form3345, $env3346)
{var $g3347 = $g3310($form3345, $env3346);
if ($T($g3347))
{var $macro3348 = $g3347, $g3351;
if ($T($g2078($form3345, $g2079)))
{var $sequence3350 = $form3345;
$g3351 = $sequence3350.slice(1)}
else $g3351 = $form3345;
return $g3032($macro3348, $env3346, $g3351)}
else return $form3345}, false)
var trueQ = $g1464["true?"], $g3353 = $g2077("macroexpand", function $g3361 ($form3354, $env3355)
{var $doneq3356;
while ($T(true))
{var $value3359 = $doneq3356, $g3360 = !(trueQ($value3359));
if ($T($g3360))
{var $expanded3357 = $g3344($form3354, $env3355);
$doneq3356 = $g2112($expanded3357, $form3354);
$form3354 = $expanded3357}
else break};
return $form3354}, false)
$g2168 = $g2077("macroexpand_all", function $g3372 ($form3364, $env3365)
{var $g3366 = $form3364;
if ($T($g2078($g3366, $g2079)))
if ($T($g3310($form3364, $env3365)))
return $g2168($g3353($form3364, $env3365), $env3365)
else {var $g3367 = $g2158($form3364, $env3365);
if ($T($g3367))
{var $expander3368 = $g3367, $sequence3370 = $form3364, $g3371 = $sequence3370.slice(1);
return $g3032($expander3368, $env3365, $g3371)}
else return $g2243($g2115($g2168, $env3365), $form3364)}
else if ($T($g2078($g3366, $g2083)))
if ($T($g3310($form3364, $env3365)))
return $g2168($g3353($form3364, $env3365), $env3365)
else return $form3364
else return $form3364}, false)
var $g3374 = $g2077("find_moduleSimport_name", function $g3384 ($definition_name3375, $env3376)
{return $g2556(function $g3385 ($rimport3377)
{var $module3378 = $rimport3377[0], $names3379 = $rimport3377[1];
return $g2556(function $g3386 ($name3380)
{var $g3381;
if ($T($g2078($name3380, $g2079)))
$g3381 = $name3380
else $g3381 = [$name3380, $name3380];
var $import_name3382 = $g3381[0], $new_name3383 = $g3381[1];
if ($T($g2112($definition_name3375, $new_name3383)))
return [$module3378, $import_name3382]}, $names3379)}, $g2157($env3376, "module", "imports"))}, false)
var $g3387 = $g2077("find_import_identifier", function $g3390 ($module3388, $env3389)
{return $g2157($env3389, "import-identifiers", $g2157($module3388, "name"))}, false)
var $g3391 = $g1464["set-subtract!"], $g3392, $g3393 = $g1464["as-set"], $g3394 = $g1464["object-properties"], $g3395 = $g2077("define_free_variables", function $g3423 ($exp3396, $env3397)
{var $variables3398 = $g3391($g3391($g3392($exp3396), $g3393($g2243($g2067, $g3394($g2157($env3397, "defined?"))))), $g2068), $sequence3415 = $variables3398, $g3416 = $sequence3415, $g3417 = (($g3416 || false).length || 0), $g3418 = 0, $g3419 = ($g3417 === $g3418);
if ($T($g3419))
return $exp3396
else return $g2107([$g2067("%begin")], $g2243(function $g3424 ($variable3399)
{var $name3400 = $g2108($variable3399);
$g2138($env3397, "defined?", $name3400, true);
var $g3420 = [[$g2067("%define"), $variable3399]], $modulesimport_name3401 = $g3374($name3400, $env3397), $g3421;
if ($T($modulesimport_name3401))
{var $module3402 = $modulesimport_name3401[0], $import_name3403 = $modulesimport_name3401[1], $import_identifier3404 = $g3387($module3402, $env3397);
$g3421 = [[$g2067("%set"), $variable3399, [$g2067("%get-property"), $import_identifier3404, $import_name3403]]]}
else $g3421 = [];
var $g3422 = $g2107($g3420, $g3421);
return $g2192($g3422)}, $variables3398), [$exp3396])}, false)
var trueQ = $g1464["true?"], $g3425 = $g1464.choose, $g3426 = $g2077("define_free_variables2", function $g3463 ($exp3427, $env3428)
{var $free3429 = $g3391($g3392($exp3427), $g2068), $variables3431 = $g3425(function $g3464 ($variable3430)
{var $robject3442 = $g2157($env3428, "definition-names"), $property3443 = $g2108($variable3430), $value3444 = $HP.call($robject3442,$property3443);
return !(trueQ($value3444))}, $free3429), $sequence3455 = $variables3431, $g3456 = $sequence3455, $g3457 = (($g3456 || false).length || 0), $g3458 = 0, $g3459 = ($g3457 === $g3458);
if ($T($g3459))
return $exp3427
else return $g2107([$g2067("%begin")], $g2243(function $g3465 ($variable3432)
{var $name3433 = $g2108($variable3432);
$g2138($env3428, "defined?", $name3433, true);
var $g3460 = [[$g2067("%define"), $variable3432]], $modulesimport_name3434 = $g3374($name3433, $env3428), $g3461;
if ($T($modulesimport_name3434))
{var $module3435 = $modulesimport_name3434[0], $import_name3436 = $modulesimport_name3434[1], $old_import_identifier3437 = $g3387($module3435, $env3428), $import_identifier3438 = $g2157($env3428, "new-identifiers", $g2108($old_import_identifier3437));
$g3461 = [[$g2067("%set"), $variable3432, [$g2067("%get-property"), $import_identifier3438, $import_name3436]]]}
else $g3461 = [];
var $g3462 = $g2107($g3460, $g3461);
return $g2192($g3462)}, $variables3431), [$exp3427])}, false)
{var trueQ = $g1464["true?"], $g3481 = $g1464["set-union!"];
$g3392 = $g2077("find_free_variables", function $g3575 ($exp3482)
{var $g3556;
if ($T($g2078($exp3482, $g2079)))
{var $sequence3525 = $exp3482, $g3526 = $sequence3525, $g3527 = (($g3526 || false).length || 0), $g3528 = 0, $value3529 = ($g3527 === $g3528);
$g3556 = !(trueQ($value3529))}
else $g3556 = false;
if ($T($g3556))
{var $sequence3531 = $exp3482, $head3483 = $sequence3531[0], $name3484;
if ($T($g2078($head3483, $g2083)))
$name3484 = $g2108($head3483)
else $name3484 = false;
var $g3485 = $name3484;
if ($T($g2112($g3485, "%method")))
{var $__3486 = $exp3482[0], $rarguments3487 = $exp3482[1], $body3488 = $exp3482[2];
return $g3391($g3392($body3488), $g3393($rarguments3487))}
else if ($T($g2112($g3485, "%bind")))
{var $__3489 = $exp3482[0], $g3490 = $exp3482[1], $rvar3491 = $g3490[0], $value3492 = $g3490[1], $body3493 = $exp3482[2];
return $g3481($g3391($g3392($body3493), $g3393([$rvar3491])), $g3392($value3492))}
else if ($T($g2112($g3485, "%begin")))
{var $definitions3494 = [], $g3561 = function $g3576 ($result3495, $e3496)
{var $g3559;
if ($T($g2084($e3496)))
{var $sequence3533 = $e3496, $g3557 = $sequence3533[0], $g3558 = $g2067("%define");
$g3559 = $g2112($g3557, $g3558)}
else $g3559 = false;
var $g3560;
if ($T($g3559))
{var $rarray3538 = $definitions3494, $sequence3537 = $e3496, $value3539 = $sequence3537[1];
$rarray3538.push($value3539);
$rarray3538;
$g3560 = []}
else $g3560 = $g3392($e3496);
return $g2107($result3495, $g3560)}, $g3562 = [], $sequence3541 = $exp3482, $g3563 = $sequence3541.slice(1), $g3564 = $g2233($g3561, $g3562, $g3563), $g3565 = $g3393($g3564), $g3566 = $g3393($definitions3494);
return $g3391($g3565, $g3566)}
else if ($T($g2112($g3485, "%try")))
{var $__3497 = $exp3482[0], $e13498 = $exp3482[1], $v3499 = $exp3482[2], $e23500 = $exp3482[3];
return $g3391($g3481($g3393($g3392($e13498)), $g3393($g3392($e23500))), $g3393([$v3499]))}
else {var $g3501 = $g2112($g3485, "%set"), $g3567;
if ($T($g3501))
$g3567 = $g3501
else {var $g3502 = $g2112($g3485, "%if");
if ($T($g3502))
$g3567 = $g3502
else {var $g3503 = $g2112($g3485, "%while");
if ($T($g3503))
$g3567 = $g3503
else {var $g3504 = $g2112($g3485, "%array");
if ($T($g3504))
$g3567 = $g3504
else {var $g3505 = $g2112($g3485, "%object");
if ($T($g3505))
$g3567 = $g3505
else {var $g3506 = $g2112($g3485, "%infix");
if ($T($g3506))
$g3567 = $g3506
else {var $g3507 = $g2112($g3485, "%get-property");
if ($T($g3507))
$g3567 = $g3507
else {var $g3508 = $g2112($g3485, "%native-call");
if ($T($g3508))
$g3567 = $g3508
else {var $g3509 = $g2112($g3485, "%plus");
if ($T($g3509))
$g3567 = $g3509
else {var $g3510 = $g2112($g3485, "%minus");
if ($T($g3510))
$g3567 = $g3510
else {var $g3511 = $g2112($g3485, "%times");
if ($T($g3511))
$g3567 = $g3511
else $g3567 = $g2112($g3485, "%divide")}}}}}}}}}};
if ($T($g3567))
{var $g3568 = [], $sequence3543 = $exp3482, $g3569 = $sequence3543.slice(1), $g3570 = $g2243($g3392, $g3569), $g3571 = $g2233($g2107, $g3568, $g3570);
return $g3393($g3571)}
else {var $g3512 = $g2112($g3485, "%native"), $g3572;
if ($T($g3512))
$g3572 = $g3512
else {var $g3513 = $g2112($g3485, "%native-name");
if ($T($g3513))
$g3572 = $g3513
else $g3572 = $g2112($g3485, "%define")};
if ($T($g3572))
return $g3393([])
else {var $rfunction3552 = $g3481, $values3553 = $g2243($g3392, $exp3482), $g3554 = $values3553, $g3573 = $g3554[0], $g3555 = $values3553, $g3574 = $g3555.slice(1);
return $g2233($rfunction3552, $g3573, $g3574)}}}}
else if ($T($g2078($exp3482, $g2083)))
return $g3393([$exp3482])
else return $g3393([])}, false)}
var trueQ = $g1464["true?"], $g3577 = $g2077("ensure_naming_structure", function $g3588 ($env3578, $module_name3579, $name3580)
{var $value3583 = $g2157($env3578, "identifiers", $module_name3579), $g3586 = !(trueQ($value3583));
if ($T($g3586))
$g2138($env3578, "identifiers", $module_name3579, $g2059());
var $module_renamings3581 = $g2157($env3578, "identifiers", $module_name3579), $value3585 = $g2157($module_renamings3581, $name3580), $g3587 = !(trueQ($value3585));
if ($T($g3587))
$g2138($module_renamings3581, $name3580, []);
return $env3578}, false)
var $g3590 = $g2077("get_module_nameSname", function $g3595 ($identifier3591)
{var $g3592 = $g2157($identifier3591, "module"), $g3593;
if ($T($g3592))
$g3593 = $g3592
else $g3593 = "";
var $g3594 = $g2108($identifier3591);
return [$g3593, $g3594]}, false)
var trueQ = $g1464["true?"], $g3597 = $g1464.push, $g3598 = $g2077("rename_identifiers", function $g3614 ($identifiers3599, $env3600)
{return $g2243(function $g3615 ($identifier3601)
{var $g3602 = $g3590($identifier3601), $module_name3603 = $g3602[0], $name3604 = $g3602[1], $value3607 = $g2157($identifier3601, "generated?"), $g3612 = !(trueQ($value3607)), $g3613;
if ($T($g3612))
$g3613 = $name3604
else $g3613 = false;
var $new_identifier3605 = $g2141($g3613);
$g3577($env3600, $module_name3603, $name3604);
var $rarray3610 = $g2157($env3600, "identifiers", $module_name3603, $name3604), $value3611 = $new_identifier3605;
$rarray3610.unshift($value3611);
$rarray3610;
return $new_identifier3605}, $identifiers3599)}, false)
var trueQ = $g1464["true?"], $g3622 = $g1464.pop, $g3623 = $g2077("restore_identifiers", function $g3646 ($identifiers3624, $env3625)
{var $g3626 = $identifiers3624, $g3627, $g3628, $g3629 = [$g3626];
while ($T(true))
{var $g3630 = $g3627, $value3637;
if ($T($g3630))
$value3637 = $g3630
else $value3637 = $g2556($g2081, $g3629);
var $g3645 = !(trueQ($value3637));
if ($T($g3645))
{var $sequence3639 = $g3626, $identifier3631 = $sequence3639[0];
(function $g3647 ($identifier3632)
{var $g3633 = $g3590($identifier3632), $module_name3634 = $g3633[0], $name3635 = $g3633[1], $rarray3641 = $g2157($env3625, "identifiers", $module_name3634, $name3635);
return $rarray3641.shift()})($identifier3631);
var $sequence3643 = $g3626, $g3644 = $sequence3643.slice(1);
$g3626 = $g3644;
$g3629 = [$g3626]}
else break};
return $g3628}, false)
var $g3648 = $g2059()
var $g3651 = $g2077("find_identifier", function $g3661 ($identifier3652, $env3653)
{var $g3654 = $g3590($identifier3652), $module_name3655 = $g3654[0], $name3656 = $g3654[1], $g3657 = $g2157($env3653, "identifiers", $module_name3655, $name3656);
if ($T($g3657))
{var $renamings3658 = $g3657, $sequence3660 = $renamings3658;
return $sequence3660[0]}
else return $g3648}, false)
var $g3668 = $g1464["second-setter"], $g3669 = $g2077("alpha_convert", function $g3715 ($form3670, $env3671)
{var $g3672 = $form3670;
if ($T($g2078($g3672, $g2079)))
{var $sequence3705 = $form3670, $g3714 = $sequence3705[0], $g3673 = $g2108($g3714);
if ($T($g2112($g3673, "%method")))
{var $__3674 = $form3670[0], $rarguments3675 = $form3670[1], $body3676 = $form3670[2], $new_arguments3677 = $g3598($rarguments3675, $env3671), $new_body3678 = $g3669($body3676, $env3671), $result3679 = [$__3674, $new_arguments3677, $new_body3678];
$g3623($rarguments3675, $env3671);
return $result3679}
else if ($T($g2112($g3673, "%bind")))
{var $__3680 = $form3670[0], $g3681 = $form3670[1], $rvar3682 = $g3681[0], $value3683 = $g3681[1], $body3684 = $form3670[2], $new_value3685 = $g3669($value3683, $env3671), $g3686 = $g3598([$rvar3682], $env3671), $new_var3687 = $g3686[0], $result3688 = [$g2067("%bind"), [$new_var3687, $new_value3685], $g3669($body3684, $env3671)];
$g3623([$rvar3682], $env3671);
return $result3688}
else if ($T($g2112($g3673, "%try")))
{var $__3689 = $form3670[0], $body3690 = $form3670[1], $rvar3691 = $form3670[2], $rcatch3692 = $form3670[3], $new_body3693 = $g3669($body3690, $env3671), $g3694 = $g3598([$rvar3691], $env3671), $new_var3695 = $g3694[0], $result3696 = [$g2067("%try"), $new_body3693, $new_var3695, $g3669($rcatch3692, $env3671)];
$g3623([$rvar3691], $env3671);
return $result3696}
else if ($T($g2112($g3673, "%define")))
{var $__3697 = $form3670[0], $identifier3698 = $form3670[1], $g3699 = $g3590($identifier3698), $module_name3700 = $g3699[0], $name3701 = $g3699[1], $new_identifier3702 = $g2141();
$g3577($env3671, $module_name3700, $name3701);
var $rarray3708 = $g2157($env3671, "identifiers", $module_name3700, $name3701), $value3709 = $new_identifier3702;
$rarray3708.push($value3709);
$rarray3708;
$g2138($env3671, "definition-names", $g2108($new_identifier3702), $name3701);
$g2138($env3671, "new-identifiers", $name3701, $new_identifier3702);
var $rarray3712 = $form3670, $value3713 = $new_identifier3702;
$rarray3712[1] = $value3713;
return $form3670}
else return $g2243($g2115($g3669, $env3671), $form3670)}
else if ($T($g2078($g3672, $g2083)))
{var $value3703 = $g3651($form3670, $env3671);
if ($T($g2112($value3703, $g3648)))
return $form3670
else return $value3703}
else return $form3670}, false)
var trueQ = $g1464["true?"], dec = $g1464.dec, $g3734 = $g1464["last-setter"], $g3735 = $g1464.last, $g3736, $g3737, $g3738 = $g2077("inline", function $g3849 ($form3739, $env3740)
{var $g3832;
if ($T($g2078($form3739, $g2079)))
{var $sequence3783 = $form3739, $g3784 = $sequence3783, $g3785 = (($g3784 || false).length || 0), $g3786 = 0, $value3787 = ($g3785 === $g3786);
$g3832 = !(trueQ($value3787))}
else $g3832 = false;
if ($T($g3832))
{var $sequence3789 = $form3739, $g3833 = $sequence3789[0], $g3834 = $g2078($g3833, $g2083);
if ($T($g3834))
{var $sequence3791 = $form3739, $g3835 = $sequence3791[0], $g3741 = $g2108($g3835), $g3742 = $g2112($g3741, "%method"), $g3836;
if ($T($g3742))
$g3836 = $g3742
else $g3836 = $g2112($g3741, "%set");
if ($T($g3836))
{var $rarray3804 = $form3739, $rarray3801 = $form3739, $g3802 = $rarray3801, $g3803 = (($g3802 || false).length || 0), $g3837 = ($g3803 - 1), $g3838 = $rarray3801[$g3837], $value3805 = $g3738($g3838, $env3740);
$rarray3804[dec($g2113($rarray3804), 1)] = $value3805;
return $form3739}
else if ($T($g2112($g3741, "%bind")))
{var $__3743 = $form3739[0], $binding3744 = $form3739[1], $body3745 = $form3739[2], $rarray3810 = $binding3744, $sequence3809 = $binding3744, $g3839 = $sequence3809[1], $value3811 = $g3738($g3839, $env3740);
$rarray3810[1] = $value3811;
var $rarray3814 = $form3739, $value3815 = $g3738($body3745, $env3740);
$rarray3814[dec($g2113($rarray3814), 1)] = $value3815;
return $form3739}
else if ($T($g2112($g3741, "%try")))
{var $__3746 = $form3739[0], $body3747 = $form3739[1], $rvar3748 = $form3739[2], $rcatch3749 = $form3739[3], $rarray3818 = $form3739, $value3819 = $g3738($body3747, $env3740);
$rarray3818[1] = $value3819;
var $rarray3822 = $form3739, $value3823 = $g3738($rcatch3749, $env3740);
$rarray3822[dec($g2113($rarray3822), 1)] = $value3823;
return $form3739}
else {var $g3750 = $g2112($g3741, "%begin"), $g3840;
if ($T($g3750))
$g3840 = $g3750
else {var $g3751 = $g2112($g3741, "%if");
if ($T($g3751))
$g3840 = $g3751
else {var $g3752 = $g2112($g3741, "%while");
if ($T($g3752))
$g3840 = $g3752
else {var $g3753 = $g2112($g3741, "%array");
if ($T($g3753))
$g3840 = $g3753
else {var $g3754 = $g2112($g3741, "%object");
if ($T($g3754))
$g3840 = $g3754
else {var $g3755 = $g2112($g3741, "%get-property");
if ($T($g3755))
$g3840 = $g3755
else {var $g3756 = $g2112($g3741, "%native-call");
if ($T($g3756))
$g3840 = $g3756
else {var $g3757 = $g2112($g3741, "%infix");
if ($T($g3757))
$g3840 = $g3757
else {var $g3758 = $g2112($g3741, "%plus");
if ($T($g3758))
$g3840 = $g3758
else {var $g3759 = $g2112($g3741, "%minus");
if ($T($g3759))
$g3840 = $g3759
else {var $g3760 = $g2112($g3741, "%times");
if ($T($g3760))
$g3840 = $g3760
else $g3840 = $g2112($g3741, "%divide")}}}}}}}}}};
if ($T($g3840))
{var $sequence3825 = $form3739, $g3841 = $sequence3825[0], $g3842 = [$g3841], $g3843 = $g2115($g3738, $env3740), $sequence3827 = $form3739, $g3844 = $sequence3827.slice(1), $g3845 = $g2243($g3843, $g3844);
return $g2107($g3842, $g3845)}
else {var $g3761 = $g2112($g3741, "%native"), $g3846;
if ($T($g3761))
$g3846 = $g3761
else {var $g3762 = $g2112($g3741, "%native-name");
if ($T($g3762))
$g3846 = $g3762
else $g3846 = $g2112($g3741, "%define")};
if ($T($g3846))
return $form3739
else {var $sequence3829 = $form3739, $g3847 = $sequence3829[0], $name3763 = $g2108($g3847), $g3764 = $g2157($env3740, "definition-names", $name3763), $definition_name3765;
if ($T($g3764))
$definition_name3765 = $g3764
else $definition_name3765 = $name3763;
var $g3766;
if ($T($g3737($g2157($env3740, "module"), $definition_name3765)))
$g3766 = $g2157($env3740, "module", "functions", $definition_name3765)
else $g3766 = false;
var $definition3771;
if ($T($g3766))
$definition3771 = $g3766
else {var $g3767 = $g3374($definition_name3765, $env3740);
if ($T($g3767))
{var $modulesimport_name3768 = $g3767, $module3769 = $modulesimport_name3768[0], $import_name3770 = $modulesimport_name3768[1];
if ($T($g3737($module3769, $import_name3770)))
$definition3771 = $g2157($module3769, "functions", $import_name3770)
else $definition3771 = false}
else $definition3771 = false};
if ($T($definition3771))
{var $sequence3831 = $form3739, $g3848 = $sequence3831.slice(1);
return $g3736($definition3771, $g3848, $env3740)}
else return $g2243($g2115($g3738, $env3740), $form3739)}}}}
else return $g2243($g2115($g3738, $env3740), $form3739)}
else return $form3739}, false)
$g3737 = $g2077("inlineQ", function $g3852 ($module3850, $name3851)
{return $g2556($g2167($g2112, $name3851), $g2157($module3850, "inline"))}, false)
{var trueQ = $g1464["true?"], $g3855 = $g1464[">="];
$g3736 = $g2077("inline_definition", function $g3885 ($definition3856, $values3857, $env3858)
{var $__3859 = $definition3856[0], $rarguments3860 = $definition3856[1], $body3861 = $definition3856[2], $body3864 = $g2233(function $g3886 ($body3862, $argument3863)
{return [$g2067("%bind"), [$argument3863, $argument3863], $body3862]}, $body3861, $g2357($rarguments3860)), $inlined3865 = $g3738($body3864, $env3858), $prepared3866 = $g3669($inlined3865, $env3858), $robject3877 = $rarguments3860, $g3867 = (($robject3877 || false).length || 0), $i3868 = 0;
while ($T(true))
{var $value3879 = $g3855($i3868, $g3867), $g3884 = !(trueQ($value3879));
if ($T($g3884))
{(function $g3887 ($i3869)
{var $argument3870 = $g2205($rarguments3860, $i3869), $value3871 = $g2205($values3857, $i3869), $g3872 = $g3590($argument3870), $module_name3873 = $g3872[0], $name3874 = $g3872[1];
$g3577($env3858, $module_name3873, $name3874);
var $rarray3882 = $g2157($env3858, "identifiers", $module_name3873, $name3874), $value3883;
if ($T($value3871))
$value3883 = $g3738($value3871, $env3858)
else $value3883 = [$g2067("%native"), "undefined"];
$rarray3882.unshift($value3883);
return $rarray3882})($i3868);
$i3868 = ($i3868 + 1)}
else break};
false;
var $result3875 = $g3669($body3864, $env3858);
$g3623($rarguments3860, $env3858);
return $result3875}, false)}
var $g3888 = $g1464["<number>"], $g3889 = $g1464["<boolean>"], $g3890 = $g1464["<keyword>"], $g3891 = $g2077("atomicQ", function $g3893 ($expression3892)
{return $g2556($g2167($g2078, $expression3892), [$g3888, $g3889, $g2930, $g2083, $g3890])}, false)
var $g3894, $g3895 = $g2077("normalize_term", function $g3897 ($expression3896)
{return $g3894($expression3896, $g3202)}, false)
{var trueQ = $g1464["true?"], $g3900, $g3901, $g3902;
$g3894 = $g2077("normalize", function $g3971 ($exp3903, $k3904)
{var $g3967;
if ($T($g2078($exp3903, $g2079)))
{var $sequence3946 = $exp3903, $g3947 = $sequence3946, $g3948 = (($g3947 || false).length || 0), $g3949 = 0, $value3950 = ($g3948 === $g3949);
$g3967 = !(trueQ($value3950))}
else $g3967 = false;
if ($T($g3967))
{var $sequence3952 = $exp3903, $g3968 = $sequence3952[0], $g3905 = $g2108($g3968);
if ($T($g2112($g3905, "%method")))
{var $__3906 = $exp3903[0], $rarguments3907 = $exp3903[1], $body3908 = $exp3903[2];
return $k3904([$g2067("%method"), $rarguments3907, $g3895($body3908)])}
else if ($T($g2112($g3905, "%begin")))
{var $__3909 = $exp3903[0], $exp13910 = $exp3903[1], $et3911 = $SL.call($exp3903, 2), $sequence3963 = $et3911, $g3964 = $sequence3963, $g3965 = (($g3964 || false).length || 0), $g3966 = 0, $g3969 = ($g3965 === $g3966);
if ($T($g3969))
return $g3894($exp13910, $k3904)
else return $g3894($exp13910, function $g3972 ($aexp13912)
{return [$g2067("%begin"), $aexp13912, $g3894($g2107([$g2067("%begin")], $et3911), $k3904)]})}
else if ($T($g2112($g3905, "%bind")))
{var $__3913 = $exp3903[0], $g3914 = $exp3903[1], $rvar3915 = $g3914[0], $value3916 = $g3914[1], $body3917 = $exp3903[2];
return $g3894($value3916, function $g3973 ($avalue3918)
{return [$g2067("%bind"), [$rvar3915, $avalue3918], $g3894($body3917, $k3904)]})}
else if ($T($g2112($g3905, "%if")))
{var $__3919 = $exp3903[0], $test3920 = $exp3903[1], $then3921 = $exp3903[2], $relse3922 = $exp3903[3];
return $g3900($test3920, function $g3974 ($atest3923)
{return $k3904([$g2067("%if"), $atest3923, $g3895($then3921), $g3895($relse3922)])})}
else if ($T($g2112($g3905, "%while")))
{var $__3924 = $exp3903[0], $test3925 = $exp3903[1], $body3926 = $exp3903[2], $g3970;
if ($T($g3901($test3925)))
$g3970 = [$g2067("%while"), true, [$g2067("%begin"), $g3895([$g2067("%if"), $test3925, $g3895($body3926), [$g2067("%native"), "break"], false])]]
else $g3970 = [$g2067("%while"), $g3895($test3925), $g3895($body3926)];
return $k3904($g3970)}
else if ($T($g2112($g3905, "%try")))
{var $__3927 = $exp3903[0], $body3928 = $exp3903[1], $rvar3929 = $exp3903[2], $rcatch3930 = $exp3903[3];
return $k3904([$g2067("%try"), $g3895($body3928), $rvar3929, $g3895($rcatch3930)])}
else if ($T($g2112($g3905, "%set")))
{var $__3931 = $exp3903[0], $rvar3932 = $exp3903[1], $value3933 = $exp3903[2];
return $g3900($value3933, function $g3975 ($avalue3934)
{return $k3904([$g2067("%set"), $rvar3932, $avalue3934])})}
else if ($T($g3901($exp3903)))
return $g3902($exp3903, $k3904)
else return $k3904($g2243($g3895, $exp3903))}
else return $k3904($exp3903)}, false)}
{var $g3976;
$g3900 = $g2077("normalize_value", function $g3980 ($exp3977, $k3978)
{if ($T($g3901($exp3977)))
return $g3976($exp3977, $k3978)
else {var $g3979;
if ($T($g2078($exp3977, $g2079)))
$g3979 = $g2243($g3895, $exp3977)
else $g3979 = $exp3977;
return $k3978($g3979)}}, false)}
{var trueQ = $g1464["true?"];
$g3901 = $g2077("contains_statementsQ", function $g4025 ($exp3986)
{var $g4020;
if ($T($g2078($exp3986, $g2079)))
{var $sequence4003 = $exp3986, $g4004 = $sequence4003, $g4005 = (($g4004 || false).length || 0), $g4006 = 0, $value4007 = ($g4005 === $g4006);
$g4020 = !(trueQ($value4007))}
else $g4020 = false;
if ($T($g4020))
{var $sequence4009 = $exp3986, $g4021 = $sequence4009[0], $g3987 = $g2108($g4021), $g3988 = $g2112($g3987, "%begin"), $g4022;
if ($T($g3988))
$g4022 = $g3988
else {var $g3989 = $g2112($g3987, "%if");
if ($T($g3989))
$g4022 = $g3989
else {var $g3990 = $g2112($g3987, "%while");
if ($T($g3990))
$g4022 = $g3990
else {var $g3991 = $g2112($g3987, "%bind");
if ($T($g3991))
$g4022 = $g3991
else $g4022 = $g2112($g3987, "%try")}}};
if ($T($g4022))
return true
else if ($T($g2112($g3987, "%set")))
{var $rarray4017 = $exp3986, $g4018 = $rarray4017, $g4019 = (($g4018 || false).length || 0), $g4023 = ($g4019 - 1), $g4024 = $rarray4017[$g4023];
return $g3901($g4024)}
else if ($T($g2112($g3987, "%method")))
return false
else return $g2556($g3901, $exp3986)}}, false)}
$g3976 = $g2077("normalizeT", function $g4030 ($exp4026, $k4027)
{return $g3894($exp4026, function $g4031 ($aexp4028)
{if ($T($g3891($aexp4028)))
return $k4027($aexp4028)
else {var $t4029 = $g2141();
return [$g2067("%bind"), [$t4029, $aexp4028], $k4027($t4029)]}})}, false)
var $g4032 = $g2077("normalizeTT", function $g4050 ($expt4033, $k4034)
{var $sequence4045 = $expt4033, $g4046 = $sequence4045, $g4047 = (($g4046 || false).length || 0), $g4048 = 0, $g4049 = ($g4047 === $g4048);
if ($T($g4049))
return $k4034([])
else return $g3902($expt4033, $k4034)}, false)
$g3902 = $g2077("normalize_all", function $g4063 ($exp4051, $k4052)
{var $sequence4056 = $exp4051, $g4059 = $sequence4056[0], $g4062 = function $g4064 ($t4053)
{var $sequence4058 = $exp4051, $g4060 = $sequence4058.slice(1), $g4061 = function $g4065 ($tt4054)
{return $k4052($g2107([$t4053], $tt4054))};
return $g4032($g4060, $g4061)};
return $g3976($g4059, $g4062)}, false)
var dec = $g1464.dec, $g4068 = $g1464["third-setter"], $g4069 = $g2077("wrap_value", function $g4140 ($exp4070, $wrapper4071)
{if ($T($g2078($exp4070, $g2079)))
{var $sequence4075 = $exp4070, $g4130 = $sequence4075[0], $g4072 = $g2108($g4130), $g4073 = $g2112($g4072, "%begin"), $g4131;
if ($T($g4073))
$g4131 = $g4073
else $g4131 = $g2112($g4072, "%bind");
if ($T($g4131))
{var $rarray4088 = $exp4070, $rarray4085 = $exp4070, $g4086 = $rarray4085, $g4087 = (($g4086 || false).length || 0), $g4132 = ($g4087 - 1), $g4133 = $rarray4085[$g4132], $value4089 = $g4069($g4133, $wrapper4071);
$rarray4088[dec($g2113($rarray4088), 1)] = $value4089;
return $exp4070}
else if ($T($g2112($g4072, "%if")))
{var $rarray4094 = $exp4070, $sequence4093 = $exp4070, $g4134 = $sequence4093[2], $value4095 = $g4069($g4134, $wrapper4071);
$rarray4094[2] = $value4095;
var $rarray4108 = $exp4070, $rarray4105 = $exp4070, $g4106 = $rarray4105, $g4107 = (($g4106 || false).length || 0), $g4135 = ($g4107 - 1), $g4136 = $rarray4105[$g4135], $value4109 = $g4069($g4136, $wrapper4071);
$rarray4108[dec($g2113($rarray4108), 1)] = $value4109;
return $exp4070}
else if ($T($g2112($g4072, "%while")))
return [$g2067("%begin"), $exp4070, $g4069(false, $wrapper4071)]
else if ($T($g2112($g4072, "%try")))
{var $rarray4114 = $exp4070, $sequence4113 = $exp4070, $g4137 = $sequence4113[1], $value4115 = $g4069($g4137, $wrapper4071);
$rarray4114[1] = $value4115;
var $rarray4128 = $exp4070, $rarray4125 = $exp4070, $g4126 = $rarray4125, $g4127 = (($g4126 || false).length || 0), $g4138 = ($g4127 - 1), $g4139 = $rarray4125[$g4138], $value4129 = $g4069($g4139, $wrapper4071);
$rarray4128[dec($g2113($rarray4128), 1)] = $value4129;
return $exp4070}
else return $g2107($wrapper4071, [$exp4070])}
else return $g2107($wrapper4071, [$exp4070])}, false)
var $g4141 = $g2077("add_explicit_return", function $g4143 ($exp4142)
{return $g4069($exp4142, [$g2067("%return")])}, false)
var trueQ = $g1464["true?"], $g4144 = $g1464["member?"], $g4145 = $g2077("statementQ", function $g4168 ($exp4146)
{if ($T($g2078($exp4146, $g2079)))
{var $sequence4158 = $exp4146, $g4159 = $sequence4158, $g4160 = (($g4159 || false).length || 0), $g4161 = 0, $value4162 = ($g4160 === $g4161), $g4165 = !(trueQ($value4162));
if ($T($g4165))
{var $sequence4164 = $exp4146, $g4166 = $sequence4164[0], $g4167 = [$g2067("%if"), $g2067("%while"), $g2067("%begin"), $g2067("%bind"), $g2067("%try")];
return $g4144($g4166, $g4167)}}}, false)
var $g4169 = $g2077("add_explicit_true", function $g4171 ($exp4170)
{return [[$g2067("%native"), "$T"], $exp4170]}, false)
var dec = $g1464.dec, $g4174 = $g1464["first-setter"], $g4175 = $g2077("transform_statements", function $g4283 ($exp4176, $env4177)
{if ($T($g2078($exp4176, $g2079)))
{var $sequence4196 = $exp4176, $g4269 = $sequence4196[0], $g4178 = $g2108($g4269);
if ($T($g2112($g4178, "%method")))
{var $rarray4209 = $exp4176, $rarray4206 = $exp4176, $g4207 = $rarray4206, $g4208 = (($g4207 || false).length || 0), $g4270 = ($g4208 - 1), $g4271 = $rarray4206[$g4270], $g4272 = $g4175($g4271, $env4177), $value4210 = $g4141($g4272);
$rarray4209[dec($g2113($rarray4209), 1)] = $value4210;
return $exp4176}
else if ($T($g2112($g4178, "%begin")))
{var $__4179 = $exp4176[0], $exps4180 = $SL.call($exp4176, 1);
return $g2192($g2243($g2115($g4175, $env4177), $exps4180))}
else if ($T($g2112($g4178, "%bind")))
{var $__4181 = $exp4176[0], $g4182 = $exp4176[1], $rvar4183 = $g4182[0], $value4184 = $g4182[1], $body4185 = $exp4176[2];
if ($T($g4145($value4184)))
return [$g2067("%bind"), [$rvar4183, false], [$g2067("%begin"), $g4069($g4175($value4184, $env4177), [$g2067("%set"), $rvar4183]), $g4175($body4185, $env4177)]]
else return [$g2067("%bind"), [$rvar4183, $g4175($value4184, $env4177)], $g4175($body4185, $env4177)]}
else if ($T($g2112($g4178, "%if")))
{var $__4186 = $exp4176[0], $test4187 = $exp4176[1], $then4188 = $exp4176[2], $relse4189 = $exp4176[3];
return [$g2067("%if"), $g4169($test4187), $g4175($then4188, $env4177), $g4175($relse4189, $env4177)]}
else if ($T($g2112($g4178, "%while")))
{var $rarray4215 = $exp4176, $sequence4214 = $exp4176, $g4273 = $sequence4214[1], $value4216 = $g4169($g4273);
$rarray4215[1] = $value4216;
var $rarray4221 = $exp4176, $sequence4220 = $exp4176, $g4274 = $sequence4220[2], $value4222 = $g4175($g4274, $env4177);
$rarray4221[2] = $value4222;
return $exp4176}
else if ($T($g2112($g4178, "%try")))
{var $rarray4227 = $exp4176, $sequence4226 = $exp4176, $g4275 = $sequence4226[1], $value4228 = $g4175($g4275, $exp4176);
$rarray4227[1] = $value4228;
var $rarray4241 = $exp4176, $rarray4238 = $exp4176, $g4239 = $rarray4238, $g4240 = (($g4239 || false).length || 0), $g4276 = ($g4240 - 1), $g4277 = $rarray4238[$g4276], $value4242 = $g4175($g4277, $env4177);
$rarray4241[dec($g2113($rarray4241), 1)] = $value4242;
return $exp4176}
else if ($T($g2112($g4178, "%set")))
{var $__4190 = $exp4176[0], $identifier4191 = $exp4176[1], $value4192 = $exp4176[2], $valuet4193 = $g4175($value4192, $env4177), $definition_name4194 = $g2157($env4177, "definition-names", $g2108($identifier4191)), $g4278;
if ($T($definition_name4194))
$g4278 = $g4144($definition_name4194, $g2157($env4177, "module", "exports"))
else $g4278 = false;
if ($T($g4278))
{var $rarray4245 = $exp4176, $value4246 = $g2067("%begin");
$rarray4245[0] = $value4246;
var $rarray4249 = $exp4176, $value4250 = [$g2067("%set"), $identifier4191, $valuet4193];
$rarray4249[1] = $value4250;
var $rarray4253 = $exp4176, $value4254 = [$g2067("%set"), [$g2067("%get-property"), [$g2067("%native"), "exports"], $definition_name4194], $identifier4191];
$rarray4253[2] = $value4254}
else {var $rarray4257 = $exp4176, $value4258 = $valuet4193;
$rarray4257[2] = $value4258};
return $exp4176}
else if ($T($g2112($g4178, "%define")))
{var $g4279 = $g2067("%var"), $rarray4266 = $exp4176, $g4267 = $rarray4266, $g4268 = (($g4267 || false).length || 0), $g4280 = ($g4268 - 1), $g4281 = $rarray4266[$g4280], $g4282 = [$g4281, false];
return [$g4279, $g4282]}
else return $g2243($g2115($g4175, $env4177), $exp4176)}
else return $exp4176}, false)
var $g4284, $g4285 = $g2077("lift_symbols", function $g4288 ($exp4286, $env4287)
{return $g4284($exp4286, $env4287, $g3202)}, false)
{var trueQ = $g1464["true?"], $g4295, $g4296, $g4297, $g4298 = $g1464["<hash-symbol>"];
$g4284 = $g2077("lift_symbol", function $g4357 ($exp4299, $env4300, $k4301)
{var $g4353;
if ($T($g2078($exp4299, $g2079)))
{var $sequence4346 = $exp4299, $g4347 = $sequence4346, $g4348 = (($g4347 || false).length || 0), $g4349 = 0, $value4350 = ($g4348 === $g4349);
$g4353 = !(trueQ($value4350))}
else $g4353 = false;
if ($T($g4353))
{var $sequence4352 = $exp4299, $g4354 = $sequence4352[0], $g4302 = $g2108($g4354);
if ($T($g2112($g4302, "%bind")))
{var $__4303 = $exp4299[0], $g4304 = $exp4299[1], $rvar4305 = $g4304[0], $value4306 = $g4304[1], $body4307 = $exp4299[2];
return $g4284($value4306, $env4300, function $g4358 ($lvalue4308, $env4309)
{return $g4284($body4307, $env4309, function $g4359 ($lbody4310, $env4311)
{return $k4301([$g2067("%bind"), [$rvar4305, $lvalue4308], $lbody4310], $env4311)})})}
else {var $g4312 = $g2112($g4302, "%method"), $g4355;
if ($T($g4312))
$g4355 = $g4312
else $g4355 = $g2112($g4302, "%set");
if ($T($g4355))
{var $m4313 = $exp4299[0], $e14314 = $exp4299[1], $e24315 = $exp4299[2];
return $g4284($e24315, $env4300, function $g4360 ($le24316, $env4317)
{return $k4301([$m4313, $e14314, $le24316], $env4317)})}
else {var $g4318 = $g2112($g4302, "%begin"), $g4356;
if ($T($g4318))
$g4356 = $g4318
else {var $g4319 = $g2112($g4302, "%if");
if ($T($g4319))
$g4356 = $g4319
else $g4356 = $g2112($g4302, "%while")};
if ($T($g4356))
{var $m4320 = $exp4299[0], $et4321 = $SL.call($exp4299, 1);
return $g4295($et4321, $env4300, function $g4361 ($let4322, $env4323)
{return $k4301($g2107([$m4320], $let4322), $env4323)})}
else if ($T($g2112($g4302, "%try")))
{var $__4324 = $exp4299[0], $e14325 = $exp4299[1], $v4326 = $exp4299[2], $e24327 = $exp4299[3];
return $g4295([$e14325, $e24327], $env4300, function $g4362 ($let4328, $env4329)
{var $le14330 = $let4328[0], $le24331 = $let4328[1];
return $k4301([$g2067("%try"), $le14330, $v4326, $le24331], $env4329)})}
else if ($T($g2112($g4302, "symbol")))
{var $__4332 = $exp4299[0], $name4333 = $exp4299[1];
return $g4296($name4333, $exp4299, "symbol", $env4300, $k4301)}
else return $g4297($exp4299, $env4300, $k4301)}}}
else {var $g4334 = $exp4299;
if ($T($g2078($g4334, $g3890)))
return $g4296($g2108($exp4299), $exp4299, "keyword", $env4300, $k4301)
else if ($T($g2078($g4334, $g4298)))
return $g4296($g2108($exp4299), $exp4299, "hash", $env4300, $k4301)
else return $k4301($exp4299, $env4300)}}, false)}
$g4296 = $g2077("lift_value", function $g4372 ($name4364, $value4365, $type4366, $env4367, $k4368)
{var $g4369 = $g2157($env4367, "lifted", $type4366, $name4364);
if ($T($g4369))
{var $t4370 = $g4369;
return $k4368($t4370, $env4367)}
else {var $t4371 = $g2138($env4367, "lifted", $type4366, $name4364, $g2141());
return [$g2067("%bind"), [$t4371, $value4365], $k4368($t4371, $env4367)]}}, false)
$g4295 = $g2077("lift_symbolT", function $g4391 ($expt4373, $env4374, $k4375)
{var $sequence4386 = $expt4373, $g4387 = $sequence4386, $g4388 = (($g4387 || false).length || 0), $g4389 = 0, $g4390 = ($g4388 === $g4389);
if ($T($g4390))
return $k4375([], $env4374)
else return $g4297($expt4373, $env4374, $k4375)}, false)
$g4297 = $g2077("lift_symbolTT", function $g4407 ($exp4392, $env4393, $k4394)
{var $sequence4400 = $exp4392, $g4403 = $sequence4400[0], $g4406 = function $g4408 ($t4395, $env4396)
{var $sequence4402 = $exp4392, $g4404 = $sequence4402.slice(1), $g4405 = function $g4409 ($tt4397, $env4398)
{return $k4394($g2107([$t4395], $tt4397), $env4398)};
return $g4295($g4404, $env4396, $g4405)};
return $g4284($g4403, $env4393, $g4406)}, false)
var trueQ = $g1464["true?"], $g4410, $g4411 = $g2077("flatten_begins", function $g4453 ($exps4412)
{var $rfunction4443 = $g2107, $values4444 = $g2243(function $g4454 ($exp4413)
{var $flattened4414 = $g4410($exp4413), $g4450;
if ($T($g2078($flattened4414, $g2079)))
{var $sequence4434 = $flattened4414, $g4435 = $sequence4434, $g4436 = (($g4435 || false).length || 0), $g4437 = 0, $value4438 = ($g4436 === $g4437), $g4447 = !(trueQ($value4438));
if ($T($g4447))
{var $sequence4440 = $flattened4414, $g4448 = $sequence4440[0], $g4449 = $g2067("%begin");
$g4450 = $g2112($g4448, $g4449)}
else $g4450 = false}
else $g4450 = false;
if ($T($g4450))
{var $sequence4442 = $flattened4414;
return $sequence4442.slice(1)}
else return [$flattened4414]}, $exps4412), $g4445 = $values4444, $g4451 = $g4445[0], $g4446 = $values4444, $g4452 = $g4446.slice(1);
return $g2233($rfunction4443, $g4451, $g4452)}, false)
var $g4455 = $g2077("varQ", function $g4461 ($exp4456)
{if ($T($g2084($exp4456)))
{var $sequence4458 = $exp4456, $g4459 = $sequence4458[0], $g4460 = $g2067("%var");
return $g2112($g4459, $g4460)}}, false)
var $g4462 = $g2077("setQ", function $g4468 ($exp4463)
{if ($T($g2084($exp4463)))
{var $sequence4465 = $exp4463, $g4466 = $sequence4465[0], $g4467 = $g2067("%set");
return $g2112($g4466, $g4467)}}, false)
var $g4469 = $g2077("methodQ", function $g4475 ($exp4470)
{if ($T($g2084($exp4470)))
{var $sequence4472 = $exp4470, $g4473 = $sequence4472[0], $g4474 = $g2067("%method");
return $g2112($g4473, $g4474)}}, false)
var trueQ = $g1464["true?"], $g4476 = $g2077("flatten_vars", function $g4568 ($exps4477)
{return $g2233(function $g4569 ($result4478, $exp4479)
{var $sequence4497 = $result4478, $g4498 = $sequence4497, $g4499 = (($g4498 || false).length || 0), $g4500 = 0, $value4501 = ($g4499 === $g4500), $g4558 = !(trueQ($value4501)), $previous4480;
if ($T($g4558))
{var $rarray4509 = $result4478, $g4510 = $rarray4509, $g4511 = (($g4510 || false).length || 0), $g4559 = ($g4511 - 1);
$previous4480 = $rarray4509[$g4559]}
else $previous4480 = false;
var $previous_varq4481;
if ($T($previous4480))
$previous_varq4481 = $g4455($previous4480)
else $previous_varq4481 = false;
var $g4560;
if ($T($previous_varq4481))
$g4560 = $g4455($exp4479)
else $g4560 = false;
if ($T($g4560))
{var $g4562 = function $g4570 ($binding4482)
{var $rarray4521 = $result4478, $g4522 = $rarray4521, $g4523 = (($g4522 || false).length || 0), $g4561 = ($g4523 - 1), $rarray4524 = $rarray4521[$g4561], $value4525 = $binding4482;
$rarray4524.push($value4525);
return $rarray4524}, $sequence4527 = $exp4479, $g4563 = $sequence4527.slice(1);
$g2166($g4562, $g4563);
return $result4478}
else {var $mergeq4483;
if ($T($previous_varq4481))
$mergeq4483 = $g4462($exp4479)
else $mergeq4483 = false;
var $binding4484;
if ($T($mergeq4483))
{var $rarray4542 = $result4478, $g4543 = $rarray4542, $g4544 = (($g4543 || false).length || 0), $g4564 = ($g4544 - 1), $rarray4545 = $rarray4542[$g4564], $g4546 = $rarray4545, $g4547 = (($g4546 || false).length || 0), $g4565 = ($g4547 - 1);
$binding4484 = $rarray4545[$g4565]}
else $binding4484 = false;
var $identifier4485;
if ($T($mergeq4483))
{var $sequence4549 = $exp4479;
$identifier4485 = $sequence4549[1]}
else $identifier4485 = false;
var $sequence4551 = $binding4484, $g4566 = $sequence4551[0], $g4567 = $g2112($g4566, $identifier4485);
if ($T($g4567))
{var $rarray4556 = $binding4484, $sequence4555 = $exp4479, $value4557 = $sequence4555[2];
$rarray4556[1] = $value4557;
return $result4478}
else return $g2107($result4478, [$exp4479])}}, [], $exps4477)}, false)
{var dec = $g1464.dec;
$g4410 = $g2077("flatten_statements", function $g4649 ($exp4574)
{if ($T($g2078($exp4574, $g2079)))
{var $sequence4584 = $exp4574, $g4639 = $sequence4584[0], $g4575 = $g2108($g4639), $g4576 = $g2112($g4575, "%method"), $g4640;
if ($T($g4576))
$g4640 = $g4576
else {var $g4577 = $g2112($g4575, "%while");
if ($T($g4577))
$g4640 = $g4577
else $g4640 = $g2112($g4575, "%set")};
if ($T($g4640))
{var $rarray4597 = $exp4574, $rarray4594 = $exp4574, $g4595 = $rarray4594, $g4596 = (($g4595 || false).length || 0), $g4641 = ($g4596 - 1), $g4642 = $rarray4594[$g4641], $value4598 = $g4410($g4642);
$rarray4597[dec($g2113($rarray4597), 1)] = $value4598;
return $exp4574}
else if ($T($g2112($g4575, "%begin")))
{var $__4578 = $exp4574[0], $exps4579 = $SL.call($exp4574, 1);
return $g2192($g4476($g4411($exps4579)))}
else if ($T($g2112($g4575, "%bind")))
{var $__4580 = $exp4574[0], $binding4581 = $exp4574[1], $body4582 = $exp4574[2];
return $g4410([$g2067("%begin"), [$g2067("%var"), $binding4581], $body4582])}
else if ($T($g2112($g4575, "%if")))
{var $rarray4603 = $exp4574, $sequence4602 = $exp4574, $g4643 = $sequence4602[2], $value4604 = $g4410($g4643);
$rarray4603[2] = $value4604;
var $rarray4617 = $exp4574, $rarray4614 = $exp4574, $g4615 = $rarray4614, $g4616 = (($g4615 || false).length || 0), $g4644 = ($g4616 - 1), $g4645 = $rarray4614[$g4644], $value4618 = $g4410($g4645);
$rarray4617[dec($g2113($rarray4617), 1)] = $value4618;
return $exp4574}
else if ($T($g2112($g4575, "%try")))
{var $rarray4623 = $exp4574, $sequence4622 = $exp4574, $g4646 = $sequence4622[1], $value4624 = $g4410($g4646);
$rarray4623[1] = $value4624;
var $rarray4637 = $exp4574, $rarray4634 = $exp4574, $g4635 = $rarray4634, $g4636 = (($g4635 || false).length || 0), $g4647 = ($g4636 - 1), $g4648 = $rarray4634[$g4647], $value4638 = $g4410($g4648);
$rarray4637[dec($g2113($rarray4637), 1)] = $value4638;
return $exp4574}
else return $g2243($g4410, $exp4574)}
else return $exp4574}, false)}
var $g4650 = $g2059("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var $g4651 = $g2077("fill_zeros", function $g4663 ($rstring4652)
{var $rarray4658 = "0000", $start4659 = 0, $robject4657 = $rstring4652, $g4661 = (($robject4657 || false).length || 0), $end4660 = (4 - $g4661), $g4662 = $rarray4658.slice($start4659, $end4660);
return $g2107($g4662, $rstring4652)}, false)
var $g4665 = $g1464.join, $g4666 = $g1464["<"], $g4667 = $g1464["as-hex-string"], $g4668 = $g1464["char-code"], $g4669 = $g1464["as-array"], $g4670 = $g2077("escape_string", function $g4689 ($rstring4671)
{var $g4686 = function $g4690 ($rchar4672)
{var $g4673 = $g2157($g4650, $rchar4672);
if ($T($g4673))
{var $escaped4674 = $g4673;
return $g2107("\\", $escaped4674)}
else {var $rchar4677 = $rchar4672, $code4675 = $rchar4677.charCodeAt(0);
if ($T($g4666(31, $code4675, 127)))
return $rchar4672
else {var $rnumber4679 = $code4675, $g4684 = $rnumber4679.toString(16), $g4685 = $g4651($g4684);
return $g2107("\\u", $g4685)}}}, $rarguments4682 = $rstring4671, $skip4683 = undefined, $g4687 = $SL.call($rarguments4682, ($skip4683 || 0)), $g4688 = $g2243($g4686, $g4687);
return $g4665($g4688, "")}, false)
var $g4691 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var $g4692 = $g2059("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
{var $g4693 = $g2056.match;
$g2139 = $g2077("escape_name", function $g4717 ($name4694)
{if ($T($g4144($name4694, $g4691)))
return $g2107("R", $name4694)
else {var $g4715 = function $g4718 ($rchar4695)
{var $robject4699 = $g4692, $property4700 = $rchar4695, $g4711 = $HP.call($robject4699,$property4700);
if ($T($g4711))
return $g2157($g4692, $rchar4695)
else {var $regexp4703 = "\\w", $rstring4704 = $rchar4695, $g4712 = $rstring4704.match($regexp4703);
if ($T($g4712))
return $rchar4695
else {var $rchar4706 = $rchar4695, $g4713 = $rchar4706.charCodeAt(0), $g4714 = $g2140($g4713);
return $g2107("Z", $g4714)}}}, $rarguments4709 = $name4694, $skip4710 = undefined, $g4716 = $SL.call($rarguments4709, ($skip4710 || 0)), $chars4696 = $g2243($g4715, $g4716);
return $g4665($chars4696, "")}}, false)}
var trueQ = $g1464["true?"], $g4719 = $g2077("valid_js_nameQ", function $g4728 ($identifier4720)
{var $value4722 = $g4144($identifier4720, $g4691), $g4727 = !(trueQ($value4722));
if ($T($g4727))
{var $regexp4725 = "^\\w+$", $rstring4726 = $identifier4720;
return $rstring4726.match($regexp4725)}}, false)
var $g4731, $g4732 = $g1464["as-uppercase"], $g4733 = $g1464.description, $g4734 = $g2077("compile_js", function $g4759 ($exp4735, $env4736)
{var $g4737 = $exp4735;
if ($T($g2078($g4737, $g2079)))
{var $sequence4749 = $exp4735, $g4750 = $sequence4749, $g4751 = (($g4750 || false).length || 0), $g4752 = 0, $g4757 = ($g4751 === $g4752);
if ($T($g4757))
{var $error4754 = $g2920($g2921, $g2926, "empty expression");
throw($error4754);
return false}
else return $g4731($exp4735, $env4736)}
else if ($T($g2078($g4737, $g3888)))
return $g2140($exp4735)
else if ($T($g2078($g4737, $g3889)))
if ($T($exp4735))
return "true"
else return "false"
else if ($T($g2078($g4737, $g2930)))
return $g2107("\"", $g4670($exp4735), "\"")
else if ($T($g2078($g4737, $g4298)))
{var $rstring4756 = $g2108($exp4735), $g4758 = $rstring4756.toUpperCase();
return $g2107("$", $g4758)}
else if ($T($g2078($g4737, $g3890)))
return $g2107("$K(\"", $g2108($exp4735), "\")")
else if ($T($g2078($g4737, $g2083)))
{var $g4738 = $exp4735;
if ($T($g2112($g4738, $g2067("%this-method"))))
return $g4734($g2157($env4736, "current-method"), $env4736)
else if ($T($g2112($g4738, $g2067("%all-arguments"))))
return "arguments"
else if ($T($g2157($exp4735, "generated?")))
return $g2107("$", $g2108($exp4735))
else return $g2139($g2108($exp4735))}
else return $g4733($exp4735)}, false)
{var trueQ = $g1464["true?"], $g4767;
$g4731 = $g2077("compile_js_exp", function $g4904 ($exp4768, $env4769)
{var $sequence4826 = $exp4768, $g4863 = $sequence4826[0], $name4770 = $g2108($g4863), $g4771 = $name4770;
if ($T($g2112($g4771, "%native-call")))
{var $__4772 = $exp4768[0], $operator4773 = $exp4768[1], $values4774 = $SL.call($exp4768, 2);
return $g2107($operator4773, $g4767($values4774, $env4769))}
else if ($T($g2112($g4771, "%infix")))
{var $__4775 = $exp4768[0], $operator4776 = $exp4768[1], $values4777 = $SL.call($exp4768, 2);
return $g2107("(", $g4665($g2243($g2115($g4734, $env4769), $values4777), $g2107(" ", $operator4776, " ")), ")")}
else {var $g4778 = $g2112($g4771, "%plus"), $g4864;
if ($T($g4778))
$g4864 = $g4778
else {var $g4779 = $g2112($g4771, "%minus");
if ($T($g4779))
$g4864 = $g4779
else {var $g4780 = $g2112($g4771, "%times");
if ($T($g4780))
$g4864 = $g4780
else $g4864 = $g2112($g4771, "%divide")}};
if ($T($g4864))
{var $g4865 = $g2067("%infix"), $g4781 = $name4770, $g4866;
if ($T($g2112($g4781, "%plus")))
$g4866 = "+"
else if ($T($g2112($g4781, "%minus")))
$g4866 = "-"
else if ($T($g2112($g4781, "%times")))
$g4866 = "*"
else if ($T($g2112($g4781, "%divide")))
$g4866 = "/"
else $g4866 = false;
var $g4867 = [$g4865, $g4866], $sequence4828 = $exp4768, $g4868 = $sequence4828.slice(1), $g4869 = $g2107($g4867, $g4868);
return $g4731($g4869, $env4769)}
else if ($T($g2112($g4771, "%array")))
{var $__4782 = $exp4768[0], $elements4783 = $SL.call($exp4768, 1);
return $g2107("[", $g4665($g2243($g2115($g4734, $env4769), $elements4783), ", "), "]")}
else if ($T($g2112($g4771, "%object")))
{var $sequence4830 = $exp4768, $key_values4784 = $sequence4830.slice(1), $entries4785 = [], $robject4832 = $key_values4784, $g4870 = (($robject4832 || false).length || 0), $g4786 = ($g4870 / 2), $i4787 = 0;
while ($T(true))
{var $value4834 = $g3855($i4787, $g4786), $g4873 = !(trueQ($value4834));
if ($T($g4873))
{(function $g4905 ($i4788)
{var $rarray4837 = $entries4785, $name4789 = $g2205($key_values4784, ($i4788 * 2)), $g4871;
if ($T($g4719($name4789)))
$g4871 = $name4789
else $g4871 = $g4734($name4789, $env4769);
var $g4872 = $g4734($g2205($key_values4784, (($i4788 * 2) + 1)), $env4769), $value4838 = $g2107($g4871, ":", $g4872);
$rarray4837.push($value4838);
return $rarray4837})($i4787);
$i4787 = ($i4787 + 1)}
else break};
false;
return $g2107("{", $g4665($entries4785, ",\n"), "}")}
else if ($T($g2112($g4771, "%if")))
{var $__4790 = $exp4768[0], $test4791 = $exp4768[1], $then4792 = $exp4768[2], $relse4793 = $exp4768[3], $g4874 = $g4734($test4791, $env4769), $g4875 = $g4734($then4792, $env4769), $g4876;
if ($T($relse4793))
{var $value4840 = $g2203($relse4793, [$g2067("%return"), false]);
$g4876 = !(trueQ($value4840))}
else $g4876 = false;
var $g4877;
if ($T($g4876))
$g4877 = $g2107("\nelse ", $g4734($relse4793, $env4769))
else $g4877 = "";
return $g2107("if (", $g4874, ")\n", $g4875, $g4877)}
else if ($T($g2112($g4771, "%while")))
{var $__4794 = $exp4768[0], $test4795 = $exp4768[1], $body4796 = $exp4768[2];
return $g2107("while (", $g4734($test4795, $env4769), ")\n", $g4734($body4796, $env4769))}
else if ($T($g2112($g4771, "%try")))
{var $__4797 = $exp4768[0], $body4798 = $exp4768[1], $rvar4799 = $exp4768[2], $rcatch4800 = $exp4768[3];
return $g2107("try {", $g4734($body4798, $env4769), "}\n", "catch (", $g4734($rvar4799, $env4769), ")\n", "{", $g4734($rcatch4800, $env4769), "}")}
else if ($T($g2112($g4771, "%return")))
{var $sequence4842 = $exp4768, $g4878 = $sequence4842[1], $g4879 = $g4734($g4878, $env4769);
return $g2107("return ", $g4879)}
else if ($T($g2112($g4771, "%begin")))
{var $g4880 = $g2115($g4734, $env4769), $sequence4844 = $exp4768, $g4881 = $sequence4844.slice(1), $g4882 = $g2243($g4880, $g4881), $g4883 = $g4665($g4882, ";\n");
return $g2107("{", $g4883, "}")}
else if ($T($g2112($g4771, "%set")))
{var $__4801 = $exp4768[0], $rvar4802 = $exp4768[1], $value4803 = $exp4768[2];
return $g2107($g4734($rvar4802, $env4769), " = ", $g4734($value4803, $env4769))}
else if ($T($g2112($g4771, "%method")))
{var $__4804 = $exp4768[0], $rarguments4805 = $exp4768[1], $body4806 = $exp4768[2], $name4807 = $g2141(), $previous_method4808 = $g2157($env4769, "current-method"), $g4884 = $g4734($name4807, $env4769), $g4885 = $g4665($g2243($g2115($g4734, $env4769), $rarguments4805), ", ");
$g2138($env4769, "current-method", $name4807);
var $bodyt4809 = $g4734($body4806, $env4769);
$g2138($env4769, "current-method", $previous_method4808);
var $g4888;
if ($T($g2084($body4806)))
{var $sequence4846 = $body4806, $g4886 = $sequence4846[0], $g4887 = $g2067("%begin");
$g4888 = $g2112($g4886, $g4887)}
else $g4888 = false;
var $g4889;
if ($T($g4888))
$g4889 = $bodyt4809
else $g4889 = $g2107("{", $bodyt4809, "}");
return $g2107("function ", $g4884, " (", $g4885, ")\n", $g4889)}
else if ($T($g2112($g4771, "%var")))
{var $__4810 = $exp4768[0], $bindings4811 = $SL.call($exp4768, 1);
return $g2107("var ", $g4665($g2243(function $g4906 ($binding4812)
{var $g4813;
if ($T($g2078($binding4812, $g2079)))
$g4813 = $binding4812
else $g4813 = [$binding4812, false];
var $rvar4814 = $g4813[0], $value4815 = $g4813[1], $g4890 = $g4734($rvar4814, $env4769), $g4891;
if ($T($value4815))
$g4891 = $g2107(" = ", $g4734($value4815, $env4769))
else $g4891 = "";
return $g2107($g4890, $g4891)}, $bindings4811), ", "))}
else if ($T($g2112($g4771, "%native")))
{var $rfunction4857 = $g2107, $g4892 = function $g4907 ($e4816)
{if ($T($g2078($e4816, $g2083)))
return $g4734($e4816)
else return $g2140($e4816)}, $sequence4856 = $exp4768, $g4893 = $sequence4856.slice(1), $values4858 = $g2243($g4892, $g4893), $g4859 = $values4858, $g4894 = $g4859[0], $g4860 = $values4858, $g4895 = $g4860.slice(1);
return $g2233($rfunction4857, $g4894, $g4895)}
else if ($T($g2112($g4771, "%native-name")))
{var $sequence4862 = $exp4768, $g4896 = $sequence4862[1], $g4897 = $g2139($g4896);
return $g2107("\"", $g4897, "\"")}
else if ($T($g2112($g4771, "%get-property")))
{var $__4817 = $exp4768[0], $robject4818 = $exp4768[1], $properties4819 = $SL.call($exp4768, 2), $g4898;
if ($T($g2078($robject4818, $g3888)))
$g4898 = $g2107("(", $g4734($robject4818, $env4769), ")")
else $g4898 = $g4734($robject4818, $env4769);
var $g4901 = $g2233(function $g4908 ($result4820, $property4821)
{var $g4899;
if ($T($g2078($property4821, $g2930)))
$g4899 = $g4719($property4821)
else $g4899 = false;
var $g4900;
if ($T($g4899))
$g4900 = $g2107(".", $property4821)
else $g4900 = $g2107("[", $g4734($property4821, $env4769), "]");
return $g2107($result4820, $g4900)}, "", $properties4819);
return $g2107($g4898, $g4901)}
else {var $rfunction4822 = $exp4768[0], $values4823 = $SL.call($exp4768, 1), $functiont4824 = $g4734($rfunction4822, $env4769), $g4902;
if ($T($g4469($rfunction4822)))
$g4902 = $g2107("(", $functiont4824, ")")
else $g4902 = $functiont4824;
var $g4903 = $g4767($values4823, $env4769);
return $g2107($g4902, $g4903)}}}, false)}
$g4767 = $g2077("compile_js_call", function $g4911 ($values4909, $env4910)
{return $g2107("(", $g4665($g2243($g2115($g4734, $env4910), $values4909), ", "), ")")}, false)
var $g4916 = $K("string"), $g4912 = $g2057.read, $g4913 = $g2054["<string-stream>"], $g4914 = $g2077("read_program", function $g4917 ($source4915)
{return $g4912($g2920($g4913, $g4916, $g2107("(", $source4915, "\n)")))}, false)
var $g4918 = $g2077("compile_expression", function $g4926 ($exp4919, $env4920)
{return $g2233(function $g4927 ($result4921, $namesfn4922)
{var $name4923 = $namesfn4922[0], $fn4924 = $namesfn4922[1], $result4925 = $fn4924($result4921);
return $result4925}, $exp4919, [["source", $g3202], ["macroexpanded", $g2115($g2168, $env4920)], ["lifted defines", $g2115($g3203, $env4920)], ["defined free variables", $g2115($g3395, $env4920)], ["alpha-converted", $g2115($g3669, $env4920)], ["inline", $g2115($g3738, $env4920)], ["defined free variables after inline", $g2115($g3426, $env4920)], ["ANF", $g3895], ["lifted symbols", $g2115($g4285, $env4920)], ["statements", $g2115($g4175, $env4920)], ["flattened", $g4410], ["compiled", $g2115($g4734, $env4920)]])}, false)
var $g4928 = require("path")
var $g4929 = require("fs")
var $g4930 = require("vm")
var trueQ = $g1464["true?"], $g4931 = $g2077("ensure_directory", function $g4940 ($directory4932)
{var $parent4933 = $g4928.dirname($directory4932), $value4935 = $g4928.existsSync($parent4933), $g4938 = !(trueQ($value4935));
if ($T($g4938))
$g4931($parent4933);
var $value4937 = $g4928.existsSync($directory4932), $g4939 = !(trueQ($value4937));
if ($T($g4939))
return $g4929.mkdirSync($directory4932)}, false)
var $g4941 = $g2077("executable_path", function $g4943 ($module_name4942)
{return $g4928.resolve("build", $g2107($module_name4942, ".js"))}, false)
var $g4944 = $g2077("module_path", function $g4947 ($p4945, $module_name4946)
{return $g4928.resolve($p4945, $g2107($module_name4946, ".rm"))}, false)
var $g4948 = $g2077("source_path", function $g4950 ($module_name4949)
{return $g4928.resolve("src", $g2107($module_name4949, ".ralph"))}, false)
var trueQ = $g1464["true?"], $g4952 = $g2077("recompileQ", function $g4959 ($module_name4953)
{var $p4954 = $g4941($module_name4953), $value4958 = $g4928.existsSync($p4954), $g4955 = !(trueQ($value4958));
if ($T($g4955))
return $g4955
else {var $p24956 = $g4948($module_name4953);
return $g4666($g2157($g4929.statSync($p4954), "mtime"), $g2157($g4929.statSync($p24956), "mtime"))}}, false)
{var $g4963 = $g1464["chain-object"], $g4964, $g4965;
$g3147 = $g2077("compile_time_import_module", function $g4979 ($env4966, $module_name4967)
{var $g4968 = $SL.call(arguments, 2), $g4969 = $g2967($g4968, {options:false}), $options4970 = $g4969.options, $g4976;
if ($T($g2112($module_name4967, "ralph/core")))
$g4976 = [$g2190, $g3306]
else {$g4964($module_name4967);
var $definitions4971 = require($module_name4967), $macros4972 = $g2069(), $symbol_macros4973 = $g2069();
$g2166(function $g4980 ($name4974)
{var $definition4975 = $g2157($definitions4971, $name4974);
if ($T($g2157($definition4975, "%macro?")))
return $g2138($macros4972, $name4974, $definition4975)
else if ($T($g2157($definition4975, "%symbol-macro?")))
return $g2138($symbol_macros4973, $name4974, $definition4975)}, $g3032($g4965, $g3394($definitions4971), $options4970));
$g4976 = [$macros4972, $symbol_macros4973]};
var $macros4977 = $g4976[0], $symbol_macros4978 = $g4976[1];
$g4963($g2157($env4966, "macros"), $macros4977);
return $g4963($g2157($env4966, "symbol-macros"), $symbol_macros4978)}, false)}
{var $g4985 = $g1464["remove!"], $g4986 = $g1464["as-object"];
$g4965 = $g2077("process_names", function $g5005 ($all4987)
{var $g4988 = $SL.call(arguments, 1), $g4989 = $g2967($g4988, {only:false,
exclude:false,
prefix:false,
rename:false}), $only4990 = $g4989.only, $exclude4991 = $g4989.exclude, $prefix4992 = $g4989.prefix, $rename4993 = $g4989.rename, $resolve4994 = function $g5006 ($exp4995)
{if ($T($g2078($exp4995, $g2930)))
return $exp4995
else return $g2128($exp4995)}, $g5002;
if ($T($g2078($only4990, $g2079)))
$g5002 = $g2243($resolve4994, $only4990)
else $g5002 = $all4987;
var $names4996 = $g3393($g5002), $g4997 = $rename4993, $g5003;
if ($T($g4997))
$g5003 = $g4997
else $g5003 = [];
var $g5004 = $g2243($resolve4994, $g5003), $renamings4998 = $g4986($g5004);
$g2166($g2167($g4985, $names4996), $g2243($resolve4994, $exclude4991));
$g3481($names4996, $g3394($renamings4998));
return $g2243(function $g5007 ($name4999)
{var $g5000 = $g2157($renamings4998, $name4999);
if ($T($g5000))
{var $renaming5001 = $g5000;
return [$name4999, $renaming5001]}
else if ($T($g2078($prefix4992, $g2930)))
return [$name4999, $g2107($prefix4992, $name4999)]
else return $name4999}, $names4996)}, false)}
{var $g5008;
$g3148 = $g2077("import_module", function $g5017 ($module5009, $module_name5010)
{var $options5011 = $SL.call(arguments, 2), $other_module5012 = $g5008($module_name5010), $rarray5015 = $g2157($module5009, "imports"), $value5016 = [$other_module5012, $g3032($g4965, $g2157($other_module5012, "exports"), $options5011)];
$rarray5015.unshift($value5016);
$rarray5015;
return $other_module5012}, false)}
{var $g5021;
$g5008 = $g2077("find_module", function $g5026 ($module_name5022)
{var $g5023 = $g4964($module_name5022);
if ($T($g5023))
return $g5023
else {var $g5024 = $g2157($g2060, $module_name5022);
if ($T($g5024))
return $g5024
else {var $g5025 = $g5021("src", $module_name5022);
if ($T($g5025))
return $g5025
else return $g5021("build", $module_name5022)}}}, false)}
{var $g5031 = $K("name"), $g5027;
$g5021 = $g2077("read_module", function $g5032 ($p5028, $module_name5029)
{var $p25030 = $g4944($p5028, $module_name5029);
if ($T($g4928.existsSync($p25030)))
return $g3032($g2167($g2920, $g2063, $g5031), $g4912($g2920($g4913, $g4916, $g5027($p25030))))}, false)}
$g5027 = $g2077("read_file", function $g5034 ($path5033)
{return $g4929.readFileSync($path5033).toString()}, false)
var $g5035 = $g2077("open_executable", function $g5038 ($module_name5036)
{var $p5037 = $g4941($module_name5036);
$g4931($g4928.dirname($p5037));
return $g4929.openSync($p5037, "w")}, false)
{var $g5067 = $K("module"), $g5068 = $K("exports"), $g5069 = $K("inline"), trueQ = $g1464["true?"];
$g4964 = $g2077("compile_module", function $g5070 ($module_name5040)
{var $robject5052 = $g2060, $property5053 = $module_name5040, $value5054 = $HP.call($robject5052,$property5053), $g5063 = !(trueQ($value5054));
if ($T($g5063))
{var $g5041 = $g5021("src", $module_name5040);
if ($T($g5041))
{var $module5042 = $g5041;
$g2138($g2060, $module_name5040, $module5042)}};
var $value5056 = $g2157($g2060, $module_name5040, "native?"), $g5064 = !(trueQ($value5056)), $g5065;
if ($T($g5064))
$g5065 = true
else $g5065 = false;
if ($T($g5065))
{var $module5043 = $g2920($g2063, $g5031, $module_name5040), $env5044 = $g2920($g2070, $g5067, $module5043), $source5045 = $g5027($g4948($module_name5040)), $program5046 = $g4914($source5045), $executable5047 = $g5035($module_name5040);
$g2138($g2060, $module_name5040, $module5043);
$g3147($env5044, "ralph/core");
var $value5058 = $g2112($module_name5040, "ralph/core"), $g5066 = !(trueQ($value5058));
if ($T($g5066))
{$g3148($module5043, "ralph/core");
var $rarray5061 = $program5046, $value5062 = $g3149("ralph/core", $env5044);
$rarray5061.unshift($value5062);
$rarray5061};
$g2166(function $g5071 ($expression5048)
{return $g4929.writeSync($executable5047, $g2107($g4918($expression5048, $env5044), "\n"))}, $program5046);
$g4929.closeSync($executable5047);
$g4929.writeFileSync($g4944("build", $module_name5040), $g4733([$module_name5040, $g5068, $g2157($module5043, "exports"), $g5069, $g2157($module5043, "inline")]));
return $module5043}}, false);
exports["compile-module"] = $g4964}
