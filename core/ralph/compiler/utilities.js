{
var B1349;
false;
B1349 = require("ralph/core")}
false
{
var Mmake_function__1350 = B1349["%make-function"],
instanceQ__1351 = B1349["instance?"],
LarrayG__1352 = B1349["<array>"],
not__1353 = B1349.not,
emptyQ__1354 = B1349["empty?"],
first__1355 = B1349.first,
LsymbolG__1356 = B1349["<symbol>"],
expressionQ__1357;
false;
expressionQ__1357 = Mmake_function__1350("expressionQ", function expressionQ__1358 (form__1359)
{if ($T(instanceQ__1351(form__1359, LarrayG__1352)))
{if ($T(not__1353(emptyQ__1354(form__1359))))
{return instanceQ__1351(first__1355(form__1359), LsymbolG__1356)}}}, false);
exports["expression?"] = expressionQ__1357}
{
var binaryEE__1360 = B1349["binary=="],
symbol_name__1361 = B1349["symbol-name"],
varQ__1362;
false;
varQ__1362 = Mmake_function__1350("varQ", function varQ__1363 (exp__1364)
{if ($T(expressionQ__1357(exp__1364)))
{return binaryEE__1360(symbol_name__1361(first__1355(exp__1364)), "%var")}}, false);
exports["var?"] = varQ__1362}
{
var setQ__1365;
false;
setQ__1365 = Mmake_function__1350("setQ", function setQ__1366 (exp__1367)
{if ($T(expressionQ__1357(exp__1367)))
{return binaryEE__1360(symbol_name__1361(first__1355(exp__1367)), "%set")}}, false);
exports["set?"] = setQ__1365}
{
var defineQ__1368;
false;
defineQ__1368 = Mmake_function__1350("defineQ", function defineQ__1369 (exp__1370)
{if ($T(expressionQ__1357(exp__1370)))
{return binaryEE__1360(symbol_name__1361(first__1355(exp__1370)), "%define")}}, false);
exports["define?"] = defineQ__1368}
{
var methodQ__1371;
false;
methodQ__1371 = Mmake_function__1350("methodQ", function methodQ__1372 (exp__1373)
{if ($T(expressionQ__1357(exp__1373)))
{return binaryEE__1360(symbol_name__1361(first__1355(exp__1373)), "%method")}}, false);
exports["method?"] = methodQ__1371}
{
var beginQ__1374;
false;
beginQ__1374 = Mmake_function__1350("beginQ", function beginQ__1375 (exp__1376)
{if ($T(expressionQ__1357(exp__1376)))
{return binaryEE__1360(symbol_name__1361(first__1355(exp__1376)), "%begin")}}, false);
exports["begin?"] = beginQ__1374}
{
var size__1377 = B1349.size,
everyQ__1378 = B1349["every?"],
rcurry__1379 = B1349.rcurry,
setter_identifierQ__1380;
false;
setter_identifierQ__1380 = Mmake_function__1350("setter_identifierQ", function setter_identifierQ__1381 (form__1382)
{if ($T(instanceQ__1351(form__1382, LarrayG__1352)))
{if ($T(binaryEE__1360(size__1377(form__1382), 2)))
{if ($T(everyQ__1378(rcurry__1379(instanceQ__1351, LsymbolG__1356), form__1382)))
{return binaryEE__1360(symbol_name__1361(first__1355(form__1382)), "setter")}}}}, false);
exports["setter-identifier?"] = setter_identifierQ__1380}
{
var Tsymbol_countT__1383;
false;
Tsymbol_countT__1383 = 0}
{
var reset_symbol_counterN__1384;
false;
reset_symbol_counterN__1384 = Mmake_function__1350("reset_symbol_counterN", function reset_symbol_counterN__1385 ()
{return Tsymbol_countT__1383 = 0}, false);
exports["reset-symbol-counter!"] = reset_symbol_counterN__1384}
{
var symbol__1386 = B1349.symbol,
concatenate__1387 = B1349.concatenate,
as_string__1388 = B1349["as-string"],
generate_symbol__1389;
false;
generate_symbol__1389 = Mmake_function__1350("generate_symbol", function generate_symbol__1390 (prefix__1391)
{
var B1394;
if ($T(prefix__1391))
{B1394 = concatenate__1387(prefix__1391, "_")}
else
B1394 = "$";
var B1395 = as_string__1388(Tsymbol_countT__1383 = (Tsymbol_countT__1383 + 1)),
name__1392 = concatenate__1387(B1394, B1395),
result__1393 = symbol__1386(name__1392, false);
result__1393["generated?"] = true;
return result__1393}, false);
exports["generate-symbol"] = generate_symbol__1389}
{
var maybe_begin__1397;
false;
maybe_begin__1397 = Mmake_function__1350("maybe_begin", function maybe_begin__1398 (expressions__1399)
{
var B1400 = size__1377(expressions__1399);
if ($T(binaryEE__1360(B1400, 0)))
{return false}
else
if ($T(binaryEE__1360(B1400, 1)))
{return first__1355(expressions__1399)}
else
return concatenate__1387([$S("%begin", "ralph/core")], expressions__1399)}, false);
exports["maybe-begin"] = maybe_begin__1397}
{
var get__1401 = B1349.get,
module_nameSname__1402;
false;
module_nameSname__1402 = Mmake_function__1350("module_nameSname", function module_nameSname__1403 (identifier__1404, env__1405)
{return [get__1401(identifier__1404, "module"), symbol_name__1361(identifier__1404)]}, false);
exports["module-name/name"] = module_nameSname__1402}
{
var TdefinedT__1406;
false;
TdefinedT__1406 = [$S("%all-arguments"), $S("%this-method")];
exports["*defined*"] = TdefinedT__1406}
{
var localize__1407;
false;
localize__1407 = Mmake_function__1350("localize", function localize__1408 (identifier__1409, env__1410)
{if ($T(binaryEE__1360(get__1401(identifier__1409, "module"), get__1401(env__1410, "module", "name"))))
{return symbol__1386(symbol_name__1361(identifier__1409), false)}
else
return identifier__1409}, false);
exports.localize = localize__1407}
{
var get_setter__1411 = B1349["get-setter"],
bindN__1412;
false;
bindN__1412 = Mmake_function__1350("bindN", function bindN__1413 (env__1414, identifier__1415)
{return get_setter__1411(env__1414, "binding-count", symbol_name__1361(identifier__1415), (get__1401(env__1414, "binding-count", symbol_name__1361(identifier__1415)) + 1))}, false);
exports["bind!"] = bindN__1412}
{
var G__1417 = B1349[">"],
boundQ__1418;
false;
boundQ__1418 = Mmake_function__1350("boundQ", function boundQ__1419 (env__1420, identifier__1421)
{
var B1422 = get__1401(env__1420, "binding-count", symbol_name__1361(identifier__1421));
if ($T(B1422))
{
var count__1423 = B1422;
return G__1417(count__1423, 0)}}, false);
exports["bound?"] = boundQ__1418}
{
var unbindN__1424;
false;
unbindN__1424 = Mmake_function__1350("unbindN", function unbindN__1425 (env__1426, identifier__1427)
{return get_setter__1411(env__1426, "binding-count", symbol_name__1361(identifier__1427), (get__1401(env__1426, "binding-count", symbol_name__1361(identifier__1427)) - 1))}, false);
exports["unbind!"] = unbindN__1424}
