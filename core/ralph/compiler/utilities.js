var B2375 = require("ralph/core")
false
{
var trueQ = B2375["true?"],
B2376 = B2375["%make-function"],
B2377 = B2375["instance?"],
B2378 = B2375["<array>"],
B2379 = B2375.not,
B2380 = B2375["empty?"],
B2381 = B2375.first,
B2382 = B2375["<symbol>"],
B2383 = B2376("expressionQ", function expressionQ__2384 (form__2385)
{if ($T(B2377(form__2385, B2378)))
{
var sequence__2397 = form__2385,
B2398 = sequence__2397,
B2399 = ((B2398 || false).length || 0),
B2400 = 0,
value__2401 = (B2399 === B2400),
B2404 = !(trueQ(value__2401));
if ($T(B2404))
{
var sequence__2403 = form__2385,
B2405 = sequence__2403[0];
return B2377(B2405, B2382)}}}, false);
exports["expression?"] = B2383}
{
var B2416 = $S("%var"),
B2406 = B2375["binary=="],
B2407 = B2376("varQ", function varQ__2408 (exp__2409)
{if ($T(B2383(exp__2409)))
{
var sequence__2413 = exp__2409,
object1__2414 = sequence__2413[0],
object2__2415 = B2416;
return (object1__2414 === object2__2415)}}, false);
exports["var?"] = B2407}
{
var B2426 = $S("%set"),
B2417 = B2376("setQ", function setQ__2418 (exp__2419)
{if ($T(B2383(exp__2419)))
{
var sequence__2423 = exp__2419,
object1__2424 = sequence__2423[0],
object2__2425 = B2426;
return (object1__2424 === object2__2425)}}, false);
exports["set?"] = B2417}
{
var B2436 = $S("%method"),
B2427 = B2376("methodQ", function methodQ__2428 (exp__2429)
{if ($T(B2383(exp__2429)))
{
var sequence__2433 = exp__2429,
object1__2434 = sequence__2433[0],
object2__2435 = B2436;
return (object1__2434 === object2__2435)}}, false);
exports["method?"] = B2427}
{
var B2437 = B2375.symbol,
B2438 = B2375.concatenate,
B2439 = B2375["symbol-name"],
B2440 = B2376("transform_setter_identifier", function transform_setter_identifier__2441 (identifier__2442)
{return B2437(B2438(B2439(identifier__2442), "-setter"))}, false);
exports["transform-setter-identifier"] = B2440}
{
var B2443 = B2375.size,
B2444 = B2375["every?"],
B2445 = B2375.rcurry,
B2446 = B2376("setter_identifierQ", function setter_identifierQ__2447 (form__2448)
{if ($T(B2377(form__2448, B2378)))
{
var object__2452 = form__2448,
object1__2453 = ((object__2452 || false).length || 0),
object2__2454 = 2,
B2461 = (object1__2453 === object2__2454);
if ($T(B2461))
if ($T(B2444(B2445(B2377, B2382), form__2448)))
{
var sequence__2458 = form__2448,
B2462 = sequence__2458[0],
object1__2459 = B2439(B2462),
object2__2460 = "setter";
return (object1__2459 === object2__2460)}}}, false);
exports["setter-identifier?"] = B2446}
{
var B2463 = B2375.second,
B2464 = B2376("identifier_name", function identifier_name__2465 (identifier__2466)
{
var B2470;
if ($T(B2446(identifier__2466)))
{
var sequence__2468 = identifier__2466,
B2469 = sequence__2468[1];
B2470 = B2440(B2469)}
else
B2470 = identifier__2466;
return B2439(B2470)}, false);
exports["identifier-name"] = B2464}
var B2471 = 0
{
var B2472 = B2376("reset_symbol_counterN", function reset_symbol_counterN__2473 ()
{return B2471 = 0}, false);
exports["reset-symbol-counter!"] = B2472}
{
var B2474 = B2375["as-string"],
B2475 = B2376("generate_symbol", function generate_symbol__2476 (prefix__2477)
{
var B2480;
if ($T(prefix__2477))
B2480 = B2438(prefix__2477, "_")
else
B2480 = "$";
var B2481 = B2474(B2471 = (B2471 + 1)),
name__2478 = B2438(B2480, B2481),
result__2479 = B2437(name__2478);
result__2479["generated?"] = true;
return result__2479}, false);
exports["generate-symbol"] = B2475}
{
var B2501 = $S("%begin"),
B2483 = B2376("maybe_begin", function maybe_begin__2484 (expressions__2485)
{
var object__2488 = expressions__2485,
B2486 = ((object__2488 || false).length || 0),
object1__2491 = B2486,
object2__2492 = 0,
B2499 = (object1__2491 === object2__2492);
if ($T(B2499))
return false
else
{
var object1__2495 = B2486,
object2__2496 = 1,
B2500 = (object1__2495 === object2__2496);
if ($T(B2500))
{
var sequence__2498 = expressions__2485;
return sequence__2498[0]}
else
return B2438([B2501], expressions__2485)}}, false);
exports["maybe-begin"] = B2483}
{
var B2503 = B2375.get,
B2504 = B2376("get_module_nameSname", function get_module_nameSname__2505 (identifier__2506)
{
var B2507 = B2503(identifier__2506, "module"),
B2508;
if ($T(B2507))
B2508 = B2507
else
B2508 = "";
var B2509 = B2439(identifier__2506);
return [B2508, B2509]}, false);
exports["get-module-name/name"] = B2504}
{
var B2511 = $S("%all-arguments"),
B2512 = $S("%this-method"),
B2510 = [B2511, B2512];
exports["*defined*"] = B2510}
{
var B2513 = B2375["as-set"],
B2514 = B2375.map,
B2515 = B2375["object-properties"],
B2516 = B2376("environment_definitions", function environment_definitions__2517 (env__2518)
{return B2513(B2514(B2437, B2515(B2503(env__2518, "defined?"))))}, false);
exports["environment-definitions"] = B2516}
