{
var B2299;
false;
B2299 = require("ralph/core")}
{
var B2302,
B2303;
false;
B2302 = require("ralph/regexp");
false;
B2303 = require("ralph/compiler/utilities")}
{
var make_object__2304 = B2299["make-object"],
TescapedT__2305;
false;
TescapedT__2305 = make_object__2304("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")}
{
var Mmake_function__2306 = B2299["%make-function"],
concatenate__2307 = B2299.concatenate,
slice__2308 = B2299.slice,
size__2309 = B2299.size,
fill_zeros__2310;
false;
fill_zeros__2310 = Mmake_function__2306("fill_zeros", function fill_zeros__2311 (string__2312)
{return concatenate__2307(slice__2308("0000", 0, (4 - size__2309(string__2312))), string__2312)}, false)}
{
var join__2315 = B2299.join,
map__2316 = B2299.map,
L__2317 = B2299["<"],
as_hex_string__2318 = B2299["as-hex-string"],
char_code__2319 = B2299["char-code"],
get__2320 = B2299.get,
as_array__2321 = B2299["as-array"],
escape_string__2322;
false;
escape_string__2322 = Mmake_function__2306("escape_string", function escape_string__2323 (string__2324)
{return join__2315(map__2316(function B2313__2325 (char__2326)
{
var B2314__2327 = get__2320(TescapedT__2305, char__2326);
if ($T(B2314__2327))
{
var escaped__2328 = B2314__2327;
return concatenate__2307("\\", escaped__2328)}
else
{
var code__2329 = char_code__2319(char__2326);
if ($T(L__2317(31, code__2329, 127)))
{return char__2326}
else
return concatenate__2307("\\u", fill_zeros__2310(as_hex_string__2318(code__2329)))}}, as_array__2321(string__2324)), "")}, false)}
{
var TreservedT__2330;
false;
TreservedT__2330 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]}
{
var Tsymbol_escapesT__2331;
false;
Tsymbol_escapesT__2331 = make_object__2304("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")}
{
var memberQ__2333 = B2299["member?"],
hasQ__2334 = B2299["has?"],
match__2335 = B2302.match,
as_string__2336 = B2299["as-string"],
escape_name__2337;
false;
escape_name__2337 = Mmake_function__2306("escape_name", function escape_name__2338 (name__2339)
{if ($T(memberQ__2333(name__2339, TreservedT__2330)))
{return concatenate__2307("R", name__2339)}
else
{
var chars__2342 = map__2316(function B2332__2340 (char__2341)
{if ($T(hasQ__2334(Tsymbol_escapesT__2331, char__2341)))
{return get__2320(Tsymbol_escapesT__2331, char__2341)}
else
if ($T(match__2335("\\w", char__2341)))
{return char__2341}
else
return concatenate__2307("Z", as_string__2336(char_code__2319(char__2341)))}, as_array__2321(name__2339));
return join__2315(chars__2342, "")}}, false)}
{
var not__2343 = B2299.not,
valid_js_nameQ__2344;
false;
valid_js_nameQ__2344 = Mmake_function__2306("valid_js_nameQ", function valid_js_nameQ__2345 (identifier__2346)
{if ($T(not__2343(memberQ__2333(identifier__2346, TreservedT__2330))))
{return match__2335("^\\w+$", identifier__2346)}}, false)}
{
var B2373 = $K("message"),
instanceQ__2349 = B2299["instance?"],
LarrayG__2350 = B2299["<array>"],
emptyQ__2351 = B2299["empty?"],
signal__2352 = B2299.signal,
make__2353 = B2299.make,
LerrorG__2354 = B2299["<error>"],
compile_js_exp__2355,
LnumberG__2356 = B2299["<number>"],
LbooleanG__2357 = B2299["<boolean>"],
LstringG__2358 = B2299["<string>"],
Lhash_symbolG__2359 = B2299["<hash-symbol>"],
as_uppercase__2360 = B2299["as-uppercase"],
symbol_name__2361 = B2299["symbol-name"],
LkeywordG__2362 = B2299["<keyword>"],
LsymbolG__2363 = B2299["<symbol>"],
binaryEE__2364 = B2299["binary=="],
description__2365 = B2299.description,
compile_js__2366;
false;
compile_js__2366 = Mmake_function__2306("compile_js", function compile_js__2367 (exp__2368, env__2369)
{B2374:while(true){
var B2347__2370 = exp__2368;
if ($T(instanceQ__2349(B2347__2370, LarrayG__2350)))
{if ($T(emptyQ__2351(exp__2368)))
{return signal__2352(make__2353(LerrorG__2354, B2373, "empty expression"))}
else
return compile_js_exp__2355(exp__2368, env__2369)}
else
if ($T(instanceQ__2349(B2347__2370, LnumberG__2356)))
{return as_string__2336(exp__2368)}
else
if ($T(instanceQ__2349(B2347__2370, LbooleanG__2357)))
{if ($T(exp__2368))
{return "true"}
else
return "false"}
else
if ($T(instanceQ__2349(B2347__2370, LstringG__2358)))
{return concatenate__2307("\"", escape_string__2322(exp__2368), "\"")}
else
if ($T(instanceQ__2349(B2347__2370, Lhash_symbolG__2359)))
{return concatenate__2307("$", as_uppercase__2360(symbol_name__2361(exp__2368)))}
else
if ($T(instanceQ__2349(B2347__2370, LkeywordG__2362)))
{return concatenate__2307("$K(\"", symbol_name__2361(exp__2368), "\")")}
else
if ($T(instanceQ__2349(B2347__2370, LsymbolG__2363)))
{
var B2348__2371 = symbol_name__2361(exp__2368);
if ($T(binaryEE__2364(B2348__2371, "%this-method")))
{
arguments = [get__2320(env__2369, "current-method"), env__2369];
exp__2368 = arguments[0];
env__2369 = arguments[1];
continue B2374}
else
if ($T(binaryEE__2364(B2348__2371, "%all-arguments")))
{return "arguments"}
else
{
var B2372;
if ($T(binaryEE__2364(get__2320(exp__2368, "module"), get__2320(env__2369, "module", "name"))))
{B2372 = symbol_name__2361(exp__2368)}
else
B2372 = description__2365(exp__2368);
return escape_name__2337(B2372)}}
else
return description__2365(exp__2368);
break}}, false);
exports["compile-js"] = compile_js__2366}
{
var B2491 = $S("%infix", "ralph/core"),
B2492 = $S("%return", "ralph/core"),
compile_js_call__2388,
rcurry__2389 = B2299.rcurry,
rest__2390 = B2299.rest,
GE__2391 = B2299[">="],
push_last__2392 = B2299["push-last"],
element__2393 = B2299.element,
beginQ__2394 = B2303["begin?"],
E__2395 = B2299["="],
second__2396 = B2299.second,
reduce1__2397 = B2299.reduce1,
reduce__2398 = B2299.reduce,
methodQ__2399 = B2303["method?"],
first__2400 = B2299.first;
false;
compile_js_exp__2355 = Mmake_function__2306("compile_js_exp", function compile_js_exp__2401 (exp__2402, env__2403)
{B2493:while(true){
var name__2404 = symbol_name__2361(first__2400(exp__2402)),
B2375__2405 = name__2404;
if ($T(binaryEE__2364(B2375__2405, "%native-call")))
{
var ____2406 = exp__2402[0],
operator__2407 = exp__2402[1],
values__2408 = $SL.call(exp__2402, 2);
return concatenate__2307(operator__2407, compile_js_call__2388(values__2408, env__2403))}
else
if ($T(binaryEE__2364(B2375__2405, "%infix")))
{
var ____2409 = exp__2402[0],
operator__2410 = exp__2402[1],
values__2411 = $SL.call(exp__2402, 2);
return concatenate__2307("(", join__2315(map__2316(rcurry__2389(compile_js__2366, env__2403), values__2411), concatenate__2307(" ", operator__2410, " ")), ")")}
else
{
var B2376__2412 = binaryEE__2364(B2375__2405, "%plus"),
B2466;
if ($T(B2376__2412))
{B2466 = B2376__2412}
else
{
var B2377__2413 = binaryEE__2364(B2375__2405, "%minus");
if ($T(B2377__2413))
{B2466 = B2377__2413}
else
{
var B2378__2414 = binaryEE__2364(B2375__2405, "%times");
if ($T(B2378__2414))
{B2466 = B2378__2414}
else
B2466 = binaryEE__2364(B2375__2405, "%divide")}};
if ($T(B2466))
{
var B2467 = B2491,
B2379__2415 = name__2404,
B2468;
if ($T(binaryEE__2364(B2379__2415, "%plus")))
{B2468 = "+"}
else
if ($T(binaryEE__2364(B2379__2415, "%minus")))
{B2468 = "-"}
else
if ($T(binaryEE__2364(B2379__2415, "%times")))
{B2468 = "*"}
else
if ($T(binaryEE__2364(B2379__2415, "%divide")))
{B2468 = "/"}
else
B2468 = false;
var B2469 = [B2467, B2468],
B2470 = rest__2390(exp__2402),
B2471 = concatenate__2307(B2469, B2470);
arguments = [B2471, env__2403];
exp__2402 = arguments[0];
env__2403 = arguments[1];
continue B2493}
else
if ($T(binaryEE__2364(B2375__2405, "%array")))
{
var ____2416 = exp__2402[0],
elements__2417 = $SL.call(exp__2402, 1);
return concatenate__2307("[", join__2315(map__2316(rcurry__2389(compile_js__2366, env__2403), elements__2417), ", "), "]")}
else
if ($T(binaryEE__2364(B2375__2405, "%object")))
{
var key_values__2418 = rest__2390(exp__2402),
entries__2419 = [],
B2380__2420 = (size__2309(key_values__2418) / 2),
i__2421 = 0;
while ($T(not__2343(GE__2391(i__2421, B2380__2420))))
{
(function B2381__2422 (i__2423)
{
var name__2424 = element__2393(key_values__2418, (i__2423 * 2)),
B2472;
if ($T(valid_js_nameQ__2344(name__2424)))
{B2472 = name__2424}
else
B2472 = compile_js__2366(name__2424, env__2403);
var B2473 = compile_js__2366(element__2393(key_values__2418, ((i__2423 * 2) + 1)), env__2403),
B2474 = concatenate__2307(B2472, ":", B2473);
return push_last__2392(entries__2419, B2474)})(i__2421);
i__2421 = (i__2421 + 1)};
false;
return concatenate__2307("{", join__2315(entries__2419, ",\n"), "}")}
else
if ($T(binaryEE__2364(B2375__2405, "%if")))
{
var ____2425 = exp__2402[0],
test__2426 = exp__2402[1],
then__2427 = exp__2402[2],
else__2428 = exp__2402[3],
thenT__2429 = compile_js__2366(then__2427, env__2403),
B2475 = compile_js__2366(test__2426, env__2403),
B2476;
if ($T(beginQ__2394(then__2427)))
{B2476 = thenT__2429}
else
B2476 = concatenate__2307("{", thenT__2429, "}");
var B2477;
if ($T(else__2428))
{B2477 = not__2343(E__2395(else__2428, [B2492, false]))}
else
B2477 = false;
var B2478;
if ($T(B2477))
{B2478 = concatenate__2307("\nelse\n", compile_js__2366(else__2428, env__2403))}
else
B2478 = "";
return concatenate__2307("if (", B2475, ")\n", B2476, B2478)}
else
if ($T(binaryEE__2364(B2375__2405, "%while")))
{
var ____2430 = exp__2402[0],
test__2431 = exp__2402[1],
body__2432 = exp__2402[2];
return concatenate__2307("while (", compile_js__2366(test__2431, env__2403), ")\n", compile_js__2366(body__2432, env__2403))}
else
if ($T(binaryEE__2364(B2375__2405, "%try")))
{
var ____2433 = exp__2402[0],
body__2434 = exp__2402[1],
var__2435 = exp__2402[2],
catch__2436 = exp__2402[3];
return concatenate__2307("try {", compile_js__2366(body__2434, env__2403), "}\n", "catch (", compile_js__2366(var__2435, env__2403), ")\n", "{", compile_js__2366(catch__2436, env__2403), "}")}
else
if ($T(binaryEE__2364(B2375__2405, "%return")))
{return concatenate__2307("return ", compile_js__2366(second__2396(exp__2402), env__2403))}
else
if ($T(binaryEE__2364(B2375__2405, "%begin")))
{return concatenate__2307("{\n", join__2315(map__2316(rcurry__2389(compile_js__2366, env__2403), rest__2390(exp__2402)), ";\n"), "}")}
else
if ($T(binaryEE__2364(B2375__2405, "%set")))
{
var ____2437 = exp__2402[0],
var__2438 = exp__2402[1],
value__2439 = exp__2402[2];
return concatenate__2307(compile_js__2366(var__2438, env__2403), " = ", compile_js__2366(value__2439, env__2403))}
else
if ($T(binaryEE__2364(B2375__2405, "%method")))
{
var ____2440 = exp__2402[0],
name__2441 = exp__2402[1],
arguments__2442 = exp__2402[2],
body__2443 = exp__2402[3],
previous_method__2444 = get__2320(env__2403, "current-method"),
B2479 = compile_js__2366(name__2441, env__2403),
B2480 = join__2315(map__2316(rcurry__2389(compile_js__2366, env__2403), arguments__2442), ", ");
env__2403["current-method"] = name__2441;
var bodyT__2445 = compile_js__2366(body__2443, env__2403);
env__2403["current-method"] = previous_method__2444;
var B2481;
if ($T(beginQ__2394(body__2443)))
{B2481 = bodyT__2445}
else
B2481 = concatenate__2307("{", bodyT__2445, "}");
return concatenate__2307("function ", B2479, " (", B2480, ")\n", B2481)}
else
if ($T(binaryEE__2364(B2375__2405, "%var")))
{
var ____2446 = exp__2402[0],
bindings__2447 = $SL.call(exp__2402, 1);
return concatenate__2307("var ", join__2315(map__2316(function B2382__2448 (binding__2449)
{
var B2383__2450;
if ($T(instanceQ__2349(binding__2449, LarrayG__2350)))
{B2383__2450 = binding__2449}
else
B2383__2450 = [binding__2449, false];
var var__2451 = B2383__2450[0],
value__2452 = B2383__2450[1],
B2482 = compile_js__2366(var__2451, env__2403),
B2483;
if ($T(value__2452))
{B2483 = concatenate__2307(" = ", compile_js__2366(value__2452, env__2403))}
else
B2483 = "";
return concatenate__2307(B2482, B2483)}, bindings__2447), ",\n"))}
else
if ($T(binaryEE__2364(B2375__2405, "%native")))
{return reduce1__2397(concatenate__2307, map__2316(function B2384__2453 (e__2454)
{
var B2385__2455 = e__2454,
B2386__2456 = instanceQ__2349(B2385__2455, LsymbolG__2363),
B2484;
if ($T(B2386__2456))
{B2484 = B2386__2456}
else
B2484 = instanceQ__2349(B2385__2455, LarrayG__2350);
if ($T(B2484))
{return compile_js__2366(e__2454, env__2403)}
else
return as_string__2336(e__2454)}, rest__2390(exp__2402)))}
else
if ($T(binaryEE__2364(B2375__2405, "%native-name")))
{return concatenate__2307("\"", escape_name__2337(second__2396(exp__2402)), "\"")}
else
if ($T(binaryEE__2364(B2375__2405, "%get-property")))
{
var ____2457 = exp__2402[0],
object__2458 = exp__2402[1],
properties__2459 = $SL.call(exp__2402, 2),
B2485;
if ($T(instanceQ__2349(object__2458, LnumberG__2356)))
{B2485 = concatenate__2307("(", compile_js__2366(object__2458, env__2403), ")")}
else
B2485 = compile_js__2366(object__2458, env__2403);
var B2488 = reduce__2398(function B2387__2460 (result__2461, property__2462)
{
var B2486;
if ($T(instanceQ__2349(property__2462, LstringG__2358)))
{B2486 = valid_js_nameQ__2344(property__2462)}
else
B2486 = false;
var B2487;
if ($T(B2486))
{B2487 = concatenate__2307(".", property__2462)}
else
B2487 = concatenate__2307("[", compile_js__2366(property__2462, env__2403), "]");
return concatenate__2307(result__2461, B2487)}, "", properties__2459);
return concatenate__2307(B2485, B2488)}
else
if ($T(binaryEE__2364(B2375__2405, "%symbol")))
{return concatenate__2307("$S", compile_js_call__2388(rest__2390(exp__2402), env__2403))}
else
{
var function__2463 = exp__2402[0],
values__2464 = $SL.call(exp__2402, 1),
functionT__2465 = compile_js__2366(function__2463, env__2403),
B2489;
if ($T(methodQ__2399(function__2463)))
{B2489 = concatenate__2307("(", functionT__2465, ")")}
else
B2489 = functionT__2465;
var B2490 = compile_js_call__2388(values__2464, env__2403);
return concatenate__2307(B2489, B2490)}};
break}}, false)}
{
false;
compile_js_call__2388 = Mmake_function__2306("compile_js_call", function compile_js_call__2494 (values__2495, env__2496)
{return concatenate__2307("(", join__2315(map__2316(rcurry__2389(compile_js__2366, env__2496), values__2495), ", "), ")")}, false)}
