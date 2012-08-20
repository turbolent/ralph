var B2513 = require("ralph/core")
var B2515 = require("ralph/compiler/utilities")
{var B2516 = B2513["%make-function"], B2517, B2518 = B2513.identity, B2519 = B2516("lift_defines", function B2522 (exp__2520, env__2521)
{return B2517(exp__2520, env__2521, B2518)}, false);
exports["lift-defines"] = B2519}
{var B2611 = $S("%bind"), B2612 = $S("%set"), B2613 = $S("%begin"), B2614 = $S("%define"), B2540 = B2515["expression?"], B2541 = B2513["=="], B2542, B2543 = B2513.concatenate, B2544 = B2513["has?"], B2545 = B2513.get, B2546 = B2513["get-setter"], B2547 = B2513["symbol-name"], B2548, B2549 = B2513.first;
B2517 = B2516("lift_define", function B2615 (exp__2550, env__2551, k__2552)
{if ($T(B2540(exp__2550)))
{var sequence__2601 = exp__2550, B2606 = sequence__2601[0], B2553 = B2547(B2606);
if ($T(B2541(B2553, "%bind")))
{var ____2554 = exp__2550[0], B2555 = exp__2550[1], var__2556 = B2555[0], value__2557 = B2555[1], body__2558 = exp__2550[2];
return B2517(value__2557, env__2551, function B2616 (lvalue__2559, env__2560)
{return B2517(body__2558, env__2560, function B2617 (lbody__2561, env__2562)
{return k__2552([B2611, [var__2556, lvalue__2559], lbody__2561], env__2562)})})}
else if ($T(B2541(B2553, "%try")))
{var m__2563 = exp__2550[0], e1__2564 = exp__2550[1], v__2565 = exp__2550[2], e2__2566 = exp__2550[3];
return B2542([e1__2564, e2__2566], env__2551, function B2618 (leT__2567, env__2568)
{var le1__2569 = leT__2567[0], le2__2570 = leT__2567[1];
return k__2552([m__2563, le1__2569, v__2565, le2__2570], env__2568)})}
else {var B2571 = B2541(B2553, "%method"), B2607;
if ($T(B2571))
B2607 = B2571
else B2607 = B2541(B2553, "%set");
if ($T(B2607))
{var m__2572 = exp__2550[0], e1__2573 = exp__2550[1], e2__2574 = exp__2550[2];
return B2517(e2__2574, env__2551, function B2619 (le2__2575, env__2576)
{return k__2552([m__2572, e1__2573, le2__2575], env__2576)})}
else {var B2577 = B2541(B2553, "%begin"), B2608;
if ($T(B2577))
B2608 = B2577
else {var B2578 = B2541(B2553, "%if");
if ($T(B2578))
B2608 = B2578
else {var B2579 = B2541(B2553, "%while");
if ($T(B2579))
B2608 = B2579
else {var B2580 = B2541(B2553, "%array");
if ($T(B2580))
B2608 = B2580
else {var B2581 = B2541(B2553, "%object");
if ($T(B2581))
B2608 = B2581
else {var B2582 = B2541(B2553, "%get-property");
if ($T(B2582))
B2608 = B2582
else {var B2583 = B2541(B2553, "%infix");
if ($T(B2583))
B2608 = B2583
else {var B2584 = B2541(B2553, "%native");
if ($T(B2584))
B2608 = B2584
else {var B2585 = B2541(B2553, "%native-name");
if ($T(B2585))
B2608 = B2585
else {var B2586 = B2541(B2553, "%native-call");
if ($T(B2586))
B2608 = B2586
else {var B2587 = B2541(B2553, "%plus");
if ($T(B2587))
B2608 = B2587
else {var B2588 = B2541(B2553, "%minus");
if ($T(B2588))
B2608 = B2588
else {var B2589 = B2541(B2553, "%times");
if ($T(B2589))
B2608 = B2589
else B2608 = B2541(B2553, "%divide")}}}}}}}}}}}};
if ($T(B2608))
{var m__2590 = exp__2550[0], eT__2591 = $SL.call(exp__2550, 1);
return B2542(eT__2591, env__2551, function B2620 (leT__2592, env__2593)
{return k__2552(B2543([m__2590], leT__2592), env__2593)})}
else {var B2594 = B2541(B2553, "%define"), B2609;
if ($T(B2594))
B2609 = B2594
else B2609 = B2541(B2553, "%symbol");
if ($T(B2609))
return k__2552(exp__2550)
else if ($T(B2541(B2553, "define")))
{var ____2595 = exp__2550[0], var__2596 = exp__2550[1], value__2597 = exp__2550[2], exportQ__2598 = exp__2550[3], name__2599 = B2547(var__2596), object__2604 = B2545(env__2551, "defined?"), property__2605 = name__2599, B2610 = $HP.call(object__2604,property__2605);
if ($T(B2610))
return k__2552([B2612, var__2596, value__2597], env__2551)
else {B2546(env__2551, "defined?", name__2599, true);
return [B2613, [B2614, var__2596], k__2552([B2612, var__2596, value__2597], env__2551)]}}
else return B2548(exp__2550, env__2551, k__2552)}}}}
else return k__2552(exp__2550, env__2551)}, false)}
{var B2621 = B2513["empty?"];
B2542 = B2516("lift_defineT", function B2640 (expT__2622, env__2623, k__2624)
{var sequence__2635 = expT__2622, B2636 = sequence__2635, B2637 = ((B2636 || false).length || 0), B2638 = 0, B2639 = (B2637 === B2638);
if ($T(B2639))
return k__2624([], env__2623)
else return B2548(expT__2622, env__2623, k__2624)}, false)}
{var B2641 = B2513.rest;
B2548 = B2516("lift_defineTT", function B2657 (exp__2642, env__2643, k__2644)
{var sequence__2650 = exp__2642, B2653 = sequence__2650[0], B2656 = function B2658 (t__2645, env__2646)
{var sequence__2652 = exp__2642, B2654 = sequence__2652.slice(1), B2655 = function B2659 (tT__2647, env__2648)
{return k__2644(B2543([t__2645], tT__2647), env__2648)};
return B2542(B2654, env__2646, B2655)};
return B2517(B2653, env__2643, B2656)}, false)}
