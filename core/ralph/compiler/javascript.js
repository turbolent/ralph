{
var B2465;
false;
B2465 = require("ralph/core")}
{
var B2468,
B2469;
false;
B2468 = require("ralph/regexp");
false;
B2469 = require("ralph/compiler/utilities")}
{
var make_object__2470 = B2465["make-object"],
TescapedT__2471;
false;
TescapedT__2471 = make_object__2470("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")}
{
var Mmake_function__2472 = B2465["%make-function"],
concatenate__2473 = B2465.concatenate,
slice__2474 = B2465.slice,
size__2475 = B2465.size,
fill_zeros__2476;
false;
fill_zeros__2476 = Mmake_function__2472("fill_zeros", function fill_zeros__2477 (string__2478)
{return concatenate__2473(slice__2474("0000", 0, (4 - size__2475(string__2478))), string__2478)}, false)}
{
var join__2481 = B2465.join,
map__2482 = B2465.map,
L__2483 = B2465["<"],
as_hex_string__2484 = B2465["as-hex-string"],
char_code__2485 = B2465["char-code"],
get__2486 = B2465.get,
as_array__2487 = B2465["as-array"],
escape_string__2488;
false;
escape_string__2488 = Mmake_function__2472("escape_string", function escape_string__2489 (string__2490)
{return join__2481(map__2482(function B2479__2491 (char__2492)
{
var B2480__2493 = get__2486(TescapedT__2471, char__2492);
if ($T(B2480__2493))
{
var escaped__2494 = B2480__2493;
return concatenate__2473("\\", escaped__2494)}
else
{
var code__2495 = char_code__2485(char__2492);
if ($T(L__2483(31, code__2495, 127)))
{return char__2492}
else
return concatenate__2473("\\u", fill_zeros__2476(as_hex_string__2484(code__2495)))}}, as_array__2487(string__2490)), "")}, false)}
{
var TreservedT__2496;
false;
TreservedT__2496 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]}
{
var Tsymbol_escapesT__2497;
false;
Tsymbol_escapesT__2497 = make_object__2470("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")}
{
var memberQ__2499 = B2465["member?"],
hasQ__2500 = B2465["has?"],
match__2501 = B2468.match,
as_string__2502 = B2465["as-string"],
escape_name__2503;
false;
escape_name__2503 = Mmake_function__2472("escape_name", function escape_name__2504 (name__2505)
{if ($T(memberQ__2499(name__2505, TreservedT__2496)))
{return concatenate__2473("R", name__2505)}
else
{
var chars__2508 = map__2482(function B2498__2506 (char__2507)
{if ($T(hasQ__2500(Tsymbol_escapesT__2497, char__2507)))
{return get__2486(Tsymbol_escapesT__2497, char__2507)}
else
if ($T(match__2501("\\w", char__2507)))
{return char__2507}
else
return concatenate__2473("Z", as_string__2502(char_code__2485(char__2507)))}, as_array__2487(name__2505));
return join__2481(chars__2508, "")}}, false)}
{
var not__2509 = B2465.not,
valid_js_nameQ__2510;
false;
valid_js_nameQ__2510 = Mmake_function__2472("valid_js_nameQ", function valid_js_nameQ__2511 (identifier__2512)
{if ($T(not__2509(memberQ__2499(identifier__2512, TreservedT__2496))))
{return match__2501("^\\w+$", identifier__2512)}}, false)}
{
var B2539 = $K("message"),
instanceQ__2515 = B2465["instance?"],
LarrayG__2516 = B2465["<array>"],
emptyQ__2517 = B2465["empty?"],
signal__2518 = B2465.signal,
make__2519 = B2465.make,
LerrorG__2520 = B2465["<error>"],
compile_js_exp__2521,
LnumberG__2522 = B2465["<number>"],
LbooleanG__2523 = B2465["<boolean>"],
LstringG__2524 = B2465["<string>"],
Lhash_symbolG__2525 = B2465["<hash-symbol>"],
as_uppercase__2526 = B2465["as-uppercase"],
symbol_name__2527 = B2465["symbol-name"],
LkeywordG__2528 = B2465["<keyword>"],
LsymbolG__2529 = B2465["<symbol>"],
binaryEE__2530 = B2465["binary=="],
description__2531 = B2465.description,
compile_js__2532;
false;
compile_js__2532 = Mmake_function__2472("compile_js", function compile_js__2533 (exp__2534, env__2535)
{B2540:while(true){
var B2513__2536 = exp__2534;
if ($T(instanceQ__2515(B2513__2536, LarrayG__2516)))
{if ($T(emptyQ__2517(exp__2534)))
{return signal__2518(make__2519(LerrorG__2520, B2539, "empty expression"))}
else
return compile_js_exp__2521(exp__2534, env__2535)}
else
if ($T(instanceQ__2515(B2513__2536, LnumberG__2522)))
{return as_string__2502(exp__2534)}
else
if ($T(instanceQ__2515(B2513__2536, LbooleanG__2523)))
{if ($T(exp__2534))
{return "true"}
else
return "false"}
else
if ($T(instanceQ__2515(B2513__2536, LstringG__2524)))
{return concatenate__2473("\"", escape_string__2488(exp__2534), "\"")}
else
if ($T(instanceQ__2515(B2513__2536, Lhash_symbolG__2525)))
{return concatenate__2473("$", as_uppercase__2526(symbol_name__2527(exp__2534)))}
else
if ($T(instanceQ__2515(B2513__2536, LkeywordG__2528)))
{return concatenate__2473("$K(\"", symbol_name__2527(exp__2534), "\")")}
else
if ($T(instanceQ__2515(B2513__2536, LsymbolG__2529)))
{
var B2514__2537 = symbol_name__2527(exp__2534);
if ($T(binaryEE__2530(B2514__2537, "%this-method")))
{
arguments = [get__2486(env__2535, "current-method"), env__2535];
exp__2534 = arguments[0];
env__2535 = arguments[1];
continue B2540}
else
if ($T(binaryEE__2530(B2514__2537, "%all-arguments")))
{return "arguments"}
else
{
var B2538;
if ($T(binaryEE__2530(get__2486(exp__2534, "module"), get__2486(env__2535, "module", "name"))))
{B2538 = symbol_name__2527(exp__2534)}
else
B2538 = description__2531(exp__2534);
return escape_name__2503(B2538)}}
else
return description__2531(exp__2534);
break}}, false);
exports["compile-js"] = compile_js__2532}
{
var B2666 = $S("%infix", "ralph/core"),
B2667 = $S("%return", "ralph/core"),
compile_js_call__2555,
rcurry__2556 = B2465.rcurry,
rest__2557 = B2465.rest,
GE__2558 = B2465[">="],
push_last__2559 = B2465["push-last"],
element__2560 = B2465.element,
beginQ__2561 = B2469["begin?"],
E__2562 = B2465["="],
second__2563 = B2465.second,
reduce1__2564 = B2465.reduce1,
reduce__2565 = B2465.reduce,
as_lowercase__2566 = B2465["as-lowercase"],
methodQ__2567 = B2469["method?"],
first__2568 = B2465.first;
false;
compile_js_exp__2521 = Mmake_function__2472("compile_js_exp", function compile_js_exp__2569 (exp__2570, env__2571)
{B2668:while(true){
var name__2572 = symbol_name__2527(first__2568(exp__2570)),
B2541__2573 = name__2572;
if ($T(binaryEE__2530(B2541__2573, "%native-call")))
{
var ____2574 = exp__2570[0],
operator__2575 = exp__2570[1],
values__2576 = $SL.call(exp__2570, 2);
return concatenate__2473(operator__2575, compile_js_call__2555(values__2576, env__2571))}
else
if ($T(binaryEE__2530(B2541__2573, "%infix")))
{
var ____2577 = exp__2570[0],
operator__2578 = exp__2570[1],
values__2579 = $SL.call(exp__2570, 2);
return concatenate__2473("(", join__2481(map__2482(rcurry__2556(compile_js__2532, env__2571), values__2579), concatenate__2473(" ", operator__2578, " ")), ")")}
else
{
var B2542__2580 = binaryEE__2530(B2541__2573, "%plus"),
B2637;
if ($T(B2542__2580))
{B2637 = B2542__2580}
else
{
var B2543__2581 = binaryEE__2530(B2541__2573, "%minus");
if ($T(B2543__2581))
{B2637 = B2543__2581}
else
{
var B2544__2582 = binaryEE__2530(B2541__2573, "%times");
if ($T(B2544__2582))
{B2637 = B2544__2582}
else
B2637 = binaryEE__2530(B2541__2573, "%divide")}};
if ($T(B2637))
{
var B2638 = B2666,
B2545__2583 = name__2572,
B2639;
if ($T(binaryEE__2530(B2545__2583, "%plus")))
{B2639 = "+"}
else
if ($T(binaryEE__2530(B2545__2583, "%minus")))
{B2639 = "-"}
else
if ($T(binaryEE__2530(B2545__2583, "%times")))
{B2639 = "*"}
else
if ($T(binaryEE__2530(B2545__2583, "%divide")))
{B2639 = "/"}
else
B2639 = false;
var B2640 = [B2638, B2639],
B2641 = rest__2557(exp__2570),
B2642 = concatenate__2473(B2640, B2641);
arguments = [B2642, env__2571];
exp__2570 = arguments[0];
env__2571 = arguments[1];
continue B2668}
else
if ($T(binaryEE__2530(B2541__2573, "%array")))
{
var ____2584 = exp__2570[0],
elements__2585 = $SL.call(exp__2570, 1);
return concatenate__2473("[", join__2481(map__2482(rcurry__2556(compile_js__2532, env__2571), elements__2585), ", "), "]")}
else
if ($T(binaryEE__2530(B2541__2573, "%object")))
{
var key_values__2586 = rest__2557(exp__2570),
entries__2587 = [],
B2546__2588 = (size__2475(key_values__2586) / 2),
i__2589 = 0;
while ($T(not__2509(GE__2558(i__2589, B2546__2588))))
{
(function B2547__2590 (i__2591)
{
var name__2592 = element__2560(key_values__2586, (i__2591 * 2)),
B2643;
if ($T(valid_js_nameQ__2510(name__2592)))
{B2643 = name__2592}
else
B2643 = compile_js__2532(name__2592, env__2571);
var B2644 = compile_js__2532(element__2560(key_values__2586, ((i__2591 * 2) + 1)), env__2571),
B2645 = concatenate__2473(B2643, ":", B2644);
return push_last__2559(entries__2587, B2645)})(i__2589);
i__2589 = (i__2589 + 1)};
false;
return concatenate__2473("{", join__2481(entries__2587, ",\n"), "}")}
else
if ($T(binaryEE__2530(B2541__2573, "%if")))
{
var ____2593 = exp__2570[0],
test__2594 = exp__2570[1],
then__2595 = exp__2570[2],
else__2596 = exp__2570[3],
thenT__2597 = compile_js__2532(then__2595, env__2571),
B2646 = compile_js__2532(test__2594, env__2571),
B2647;
if ($T(beginQ__2561(then__2595)))
{B2647 = thenT__2597}
else
B2647 = concatenate__2473("{", thenT__2597, "}");
var B2648;
if ($T(else__2596))
{B2648 = not__2509(E__2562(else__2596, [B2667, false]))}
else
B2648 = false;
var B2649;
if ($T(B2648))
{B2649 = concatenate__2473("\nelse\n", compile_js__2532(else__2596, env__2571))}
else
B2649 = "";
return concatenate__2473("if (", B2646, ")\n", B2647, B2649)}
else
if ($T(binaryEE__2530(B2541__2573, "%while")))
{
var ____2598 = exp__2570[0],
test__2599 = exp__2570[1],
body__2600 = exp__2570[2];
return concatenate__2473("while (", compile_js__2532(test__2599, env__2571), ")\n", compile_js__2532(body__2600, env__2571))}
else
if ($T(binaryEE__2530(B2541__2573, "%try")))
{
var ____2601 = exp__2570[0],
body__2602 = exp__2570[1],
var__2603 = exp__2570[2],
catch__2604 = exp__2570[3];
return concatenate__2473("try {", compile_js__2532(body__2602, env__2571), "}\n", "catch (", compile_js__2532(var__2603, env__2571), ")\n", "{", compile_js__2532(catch__2604, env__2571), "}")}
else
if ($T(binaryEE__2530(B2541__2573, "%return")))
{return concatenate__2473("return ", compile_js__2532(second__2563(exp__2570), env__2571))}
else
if ($T(binaryEE__2530(B2541__2573, "%begin")))
{return concatenate__2473("{\n", join__2481(map__2482(rcurry__2556(compile_js__2532, env__2571), rest__2557(exp__2570)), ";\n"), "}")}
else
if ($T(binaryEE__2530(B2541__2573, "%set")))
{
var ____2605 = exp__2570[0],
var__2606 = exp__2570[1],
value__2607 = exp__2570[2];
return concatenate__2473(compile_js__2532(var__2606, env__2571), " = ", compile_js__2532(value__2607, env__2571))}
else
if ($T(binaryEE__2530(B2541__2573, "%method")))
{
var ____2608 = exp__2570[0],
name__2609 = exp__2570[1],
arguments__2610 = exp__2570[2],
body__2611 = exp__2570[3],
previous_method__2612 = get__2486(env__2571, "current-method"),
B2650 = compile_js__2532(name__2609, env__2571),
B2651 = join__2481(map__2482(rcurry__2556(compile_js__2532, env__2571), arguments__2610), ", ");
env__2571["current-method"] = name__2609;
var bodyT__2613 = compile_js__2532(body__2611, env__2571);
env__2571["current-method"] = previous_method__2612;
var B2652;
if ($T(beginQ__2561(body__2611)))
{B2652 = bodyT__2613}
else
B2652 = concatenate__2473("{", bodyT__2613, "}");
return concatenate__2473("function ", B2650, " (", B2651, ")\n", B2652)}
else
if ($T(binaryEE__2530(B2541__2573, "%var")))
{
var ____2614 = exp__2570[0],
bindings__2615 = $SL.call(exp__2570, 1);
return concatenate__2473("var ", join__2481(map__2482(function B2548__2616 (binding__2617)
{
var B2549__2618;
if ($T(instanceQ__2515(binding__2617, LarrayG__2516)))
{B2549__2618 = binding__2617}
else
B2549__2618 = [binding__2617, false];
var var__2619 = B2549__2618[0],
value__2620 = B2549__2618[1],
B2653 = compile_js__2532(var__2619, env__2571),
B2654;
if ($T(value__2620))
{B2654 = concatenate__2473(" = ", compile_js__2532(value__2620, env__2571))}
else
B2654 = "";
return concatenate__2473(B2653, B2654)}, bindings__2615), ",\n"))}
else
if ($T(binaryEE__2530(B2541__2573, "%native")))
{return reduce1__2564(concatenate__2473, map__2482(function B2550__2621 (e__2622)
{
var B2551__2623 = e__2622,
B2552__2624 = instanceQ__2515(B2551__2623, LsymbolG__2529),
B2655;
if ($T(B2552__2624))
{B2655 = B2552__2624}
else
B2655 = instanceQ__2515(B2551__2623, LarrayG__2516);
if ($T(B2655))
{return compile_js__2532(e__2622, env__2571)}
else
return as_string__2502(e__2622)}, rest__2557(exp__2570)))}
else
if ($T(binaryEE__2530(B2541__2573, "%native-name")))
{return concatenate__2473("\"", escape_name__2503(second__2563(exp__2570)), "\"")}
else
if ($T(binaryEE__2530(B2541__2573, "%get-property")))
{
var ____2625 = exp__2570[0],
object__2626 = exp__2570[1],
properties__2627 = $SL.call(exp__2570, 2),
B2656;
if ($T(instanceQ__2515(object__2626, LnumberG__2522)))
{B2656 = concatenate__2473("(", compile_js__2532(object__2626, env__2571), ")")}
else
B2656 = compile_js__2532(object__2626, env__2571);
var B2659 = reduce__2565(function B2553__2628 (result__2629, property__2630)
{
var B2657;
if ($T(instanceQ__2515(property__2630, LstringG__2524)))
{B2657 = valid_js_nameQ__2510(property__2630)}
else
B2657 = false;
var B2658;
if ($T(B2657))
{B2658 = concatenate__2473(".", property__2630)}
else
B2658 = concatenate__2473("[", compile_js__2532(property__2630, env__2571), "]");
return concatenate__2473(result__2629, B2658)}, "", properties__2627);
return concatenate__2473(B2656, B2659)}
else
if ($T(binaryEE__2530(B2541__2573, "%symbol")))
{
var B2554__2631 = rest__2557(exp__2570),
name__2632 = B2554__2631[0],
module_name__2633 = B2554__2631[1],
B2660 = as_lowercase__2566(name__2632),
B2661;
if ($T(module_name__2633))
{B2661 = as_lowercase__2566(module_name__2633)}
else
B2661 = false;
var B2662 = [B2660, B2661],
B2663 = compile_js_call__2555(B2662, env__2571);
return concatenate__2473("$S", B2663)}
else
{
var function__2634 = exp__2570[0],
values__2635 = $SL.call(exp__2570, 1),
functionT__2636 = compile_js__2532(function__2634, env__2571),
B2664;
if ($T(methodQ__2567(function__2634)))
{B2664 = concatenate__2473("(", functionT__2636, ")")}
else
B2664 = functionT__2636;
var B2665 = compile_js_call__2555(values__2635, env__2571);
return concatenate__2473(B2664, B2665)}};
break}}, false)}
{
false;
compile_js_call__2555 = Mmake_function__2472("compile_js_call", function compile_js_call__2669 (values__2670, env__2671)
{return concatenate__2473("(", join__2481(map__2482(rcurry__2556(compile_js__2532, env__2671), values__2670), ", "), ")")}, false)}
