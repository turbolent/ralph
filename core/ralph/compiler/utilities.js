var B433 = require("ralph/core")
false
{
var B434 = B433["%make-function"],
B435 = B433["instance?"],
B436 = B433["<array>"],
B437 = B433.not,
B438 = B433["empty?"],
B439 = B433.first,
B440 = B433["<symbol>"],
B441 = B434("expressionQ", function expressionQ__442 (form__443)
{if ($T(B435(form__443, B436)))
if ($T(B437(B438(form__443))))
return B435(B439(form__443), B440)}, false);
exports["expression?"] = B441}
{
var B448 = $S("%var"),
B444 = B433["binary=="],
B445 = B434("varQ", function varQ__446 (exp__447)
{if ($T(B441(exp__447)))
return B444(B439(exp__447), B448)}, false);
exports["var?"] = B445}
{
var B452 = $S("%set"),
B449 = B434("setQ", function setQ__450 (exp__451)
{if ($T(B441(exp__451)))
return B444(B439(exp__451), B452)}, false);
exports["set?"] = B449}
{
var B456 = $S("%method"),
B453 = B434("methodQ", function methodQ__454 (exp__455)
{if ($T(B441(exp__455)))
return B444(B439(exp__455), B456)}, false);
exports["method?"] = B453}
{
var B457 = B433.symbol,
B458 = B433.concatenate,
B459 = B433["symbol-name"],
B460 = B434("transform_setter_identifier", function transform_setter_identifier__461 (identifier__462)
{return B457(B458(B459(identifier__462), "-setter"))}, false);
exports["transform-setter-identifier"] = B460}
{
var B463 = B433.size,
B464 = B433["every?"],
B465 = B433.rcurry,
B466 = B434("setter_identifierQ", function setter_identifierQ__467 (form__468)
{if ($T(B435(form__468, B436)))
if ($T(B444(B463(form__468), 2)))
if ($T(B464(B465(B435, B440), form__468)))
return B444(B459(B439(form__468)), "setter")}, false);
exports["setter-identifier?"] = B466}
{
var B469 = B433.second,
B470 = B434("identifier_name", function identifier_name__471 (identifier__472)
{
var B473;
if ($T(B466(identifier__472)))
B473 = B460(B469(identifier__472))
else
B473 = identifier__472;
return B459(B473)}, false);
exports["identifier-name"] = B470}
var B474 = 0
{
var B475 = B434("reset_symbol_counterN", function reset_symbol_counterN__476 ()
{return B474 = 0}, false);
exports["reset-symbol-counter!"] = B475}
{
var B477 = B433["as-string"],
B478 = B434("generate_symbol", function generate_symbol__479 (prefix__480)
{
var B483;
if ($T(prefix__480))
B483 = B458(prefix__480, "_")
else
B483 = "$";
var B484 = B477(B474 = (B474 + 1)),
name__481 = B458(B483, B484),
result__482 = B457(name__481);
result__482["generated?"] = true;
return result__482}, false);
exports["generate-symbol"] = B478}
{
var B490 = $S("%begin"),
B486 = B434("maybe_begin", function maybe_begin__487 (expressions__488)
{
var B489 = B463(expressions__488);
if ($T(B444(B489, 0)))
return false
else
if ($T(B444(B489, 1)))
return B439(expressions__488)
else
return B458([B490], expressions__488)}, false);
exports["maybe-begin"] = B486}
{
var B492 = B433.get,
B493 = B434("get_module_nameSname", function get_module_nameSname__494 (identifier__495)
{
var B496 = B492(identifier__495, "module"),
B497;
if ($T(B496))
B497 = B496
else
B497 = "";
var B498 = B459(identifier__495);
return [B497, B498]}, false);
exports["get-module-name/name"] = B493}
{
var B500 = $S("%all-arguments"),
B501 = $S("%this-method"),
B499 = [B500, B501];
exports["*defined*"] = B499}
{
var B502 = B433["as-set"],
B503 = B433.map,
B504 = B433["object-properties"],
B505 = B434("environment_definitions", function environment_definitions__506 (env__507)
{return B502(B503(B457, B504(B492(env__507, "defined?"))))}, false);
exports["environment-definitions"] = B505}
