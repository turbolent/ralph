var B2441 = require("ralph/core")
var B2443 = require("ralph/compiler/utilities")
{var B2444 = B2441["%make-function"], B2445, B2446 = B2441.identity, B2447 = B2444("lift_defines", function B2450 (exp__2448, env__2449)
{return B2445(exp__2448, env__2449, B2446)}, false);
exports["lift-defines"] = B2447}
{var B2514 = $S("%bind"), B2515 = $S("%set"), B2516 = $S("%begin"), B2517 = $S("%define"), B2456 = B2443["expression?"], B2457 = B2441["=="], B2458, B2459 = B2441.concatenate, B2460 = B2441["has?"], B2461 = B2441.get, B2462 = B2441["get-setter"], B2463 = B2441["symbol-name"], B2464, B2465 = B2441.first;
B2445 = B2444("lift_define", function B2518 (exp__2466, env__2467, k__2468)
{if ($T(B2456(exp__2466)))
{var sequence__2505 = exp__2466, B2510 = sequence__2505[0], B2469 = B2463(B2510);
if ($T(B2457(B2469, "%bind")))
{var ____2470 = exp__2466[0], B2471 = exp__2466[1], var__2472 = B2471[0], value__2473 = B2471[1], body__2474 = exp__2466[2];
return B2445(value__2473, env__2467, function B2519 (lvalue__2475, env__2476)
{return B2445(body__2474, env__2476, function B2520 (lbody__2477, env__2478)
{return k__2468([B2514, [var__2472, lvalue__2475], lbody__2477], env__2478)})})}
else if ($T(B2457(B2469, "%try")))
{var m__2479 = exp__2466[0], e1__2480 = exp__2466[1], v__2481 = exp__2466[2], e2__2482 = exp__2466[3];
return B2458([e1__2480, e2__2482], env__2467, function B2521 (leT__2483, env__2484)
{var le1__2485 = leT__2483[0], le2__2486 = leT__2483[1];
return k__2468([m__2479, le1__2485, v__2481, le2__2486], env__2484)})}
else {var B2487 = B2457(B2469, "%method"), B2511;
if ($T(B2487))
B2511 = B2487
else B2511 = B2457(B2469, "%set");
if ($T(B2511))
{var m__2488 = exp__2466[0], e1__2489 = exp__2466[1], e2__2490 = exp__2466[2];
return B2445(e2__2490, env__2467, function B2522 (le2__2491, env__2492)
{return k__2468([m__2488, e1__2489, le2__2491], env__2492)})}
else {var B2493 = B2457(B2469, "%begin"), B2512;
if ($T(B2493))
B2512 = B2493
else {var B2494 = B2457(B2469, "%if");
if ($T(B2494))
B2512 = B2494
else B2512 = B2457(B2469, "%while")};
if ($T(B2512))
{var m__2495 = exp__2466[0], eT__2496 = $SL.call(exp__2466, 1);
return B2458(eT__2496, env__2467, function B2523 (leT__2497, env__2498)
{return k__2468(B2459([m__2495], leT__2497), env__2498)})}
else if ($T(B2457(B2469, "define")))
{var ____2499 = exp__2466[0], var__2500 = exp__2466[1], value__2501 = exp__2466[2], exportQ__2502 = exp__2466[3], name__2503 = B2463(var__2500), object__2508 = B2461(env__2467, "defined?"), property__2509 = name__2503, B2513 = $HP.call(object__2508,property__2509);
if ($T(B2513))
return k__2468([B2515, var__2500, value__2501], env__2467)
else {B2462(env__2467, "defined?", name__2503, true);
return [B2516, [B2517, var__2500], k__2468([B2515, var__2500, value__2501], env__2467)]}}
else return B2464(exp__2466, env__2467, k__2468)}}}
else return k__2468(exp__2466, env__2467)}, false)}
{var B2524 = B2441["empty?"];
B2458 = B2444("lift_defineT", function B2543 (expT__2525, env__2526, k__2527)
{var sequence__2538 = expT__2525, B2539 = sequence__2538, B2540 = ((B2539 || false).length || 0), B2541 = 0, B2542 = (B2540 === B2541);
if ($T(B2542))
return k__2527([], env__2526)
else return B2464(expT__2525, env__2526, k__2527)}, false)}
{var B2544 = B2441.rest;
B2464 = B2444("lift_defineTT", function B2560 (exp__2545, env__2546, k__2547)
{var sequence__2553 = exp__2545, B2556 = sequence__2553[0], B2559 = function B2561 (t__2548, env__2549)
{var sequence__2555 = exp__2545, B2557 = sequence__2555.slice(1), B2558 = function B2562 (tT__2550, env__2551)
{return k__2547(B2459([t__2548], tT__2550), env__2551)};
return B2458(B2557, env__2549, B2558)};
return B2445(B2556, env__2546, B2559)}, false)}
