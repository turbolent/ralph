{
var B1589;
false;
B1589 = require("ralph/core")}
false
{
var Mmake_function__1590 = B1589["%make-function"],
instanceQ__1591 = B1589["instance?"],
LarrayG__1592 = B1589["<array>"],
not__1593 = B1589.not,
emptyQ__1594 = B1589["empty?"],
first__1595 = B1589.first,
LsymbolG__1596 = B1589["<symbol>"],
expressionQ__1597;
false;
expressionQ__1597 = Mmake_function__1590("expressionQ", function expressionQ__1598 (form__1599)
{if ($T(instanceQ__1591(form__1599, LarrayG__1592)))
{if ($T(not__1593(emptyQ__1594(form__1599))))
{return instanceQ__1591(first__1595(form__1599), LsymbolG__1596)}}}, false);
exports["expression?"] = expressionQ__1597}
{
var binaryEE__1600 = B1589["binary=="],
symbol_name__1601 = B1589["symbol-name"],
varQ__1602;
false;
varQ__1602 = Mmake_function__1590("varQ", function varQ__1603 (exp__1604)
{if ($T(expressionQ__1597(exp__1604)))
{return binaryEE__1600(symbol_name__1601(first__1595(exp__1604)), "%var")}}, false);
exports["var?"] = varQ__1602}
{
var setQ__1605;
false;
setQ__1605 = Mmake_function__1590("setQ", function setQ__1606 (exp__1607)
{if ($T(expressionQ__1597(exp__1607)))
{return binaryEE__1600(symbol_name__1601(first__1595(exp__1607)), "%set")}}, false);
exports["set?"] = setQ__1605}
{
var defineQ__1608;
false;
defineQ__1608 = Mmake_function__1590("defineQ", function defineQ__1609 (exp__1610)
{if ($T(expressionQ__1597(exp__1610)))
{return binaryEE__1600(symbol_name__1601(first__1595(exp__1610)), "%define")}}, false);
exports["define?"] = defineQ__1608}
{
var methodQ__1611;
false;
methodQ__1611 = Mmake_function__1590("methodQ", function methodQ__1612 (exp__1613)
{if ($T(expressionQ__1597(exp__1613)))
{return binaryEE__1600(symbol_name__1601(first__1595(exp__1613)), "%method")}}, false);
exports["method?"] = methodQ__1611}
{
var beginQ__1614;
false;
beginQ__1614 = Mmake_function__1590("beginQ", function beginQ__1615 (exp__1616)
{if ($T(expressionQ__1597(exp__1616)))
{return binaryEE__1600(symbol_name__1601(first__1595(exp__1616)), "%begin")}}, false);
exports["begin?"] = beginQ__1614}
{
var size__1617 = B1589.size,
everyQ__1618 = B1589["every?"],
rcurry__1619 = B1589.rcurry,
setter_identifierQ__1620;
false;
setter_identifierQ__1620 = Mmake_function__1590("setter_identifierQ", function setter_identifierQ__1621 (form__1622)
{if ($T(instanceQ__1591(form__1622, LarrayG__1592)))
{if ($T(binaryEE__1600(size__1617(form__1622), 2)))
{if ($T(everyQ__1618(rcurry__1619(instanceQ__1591, LsymbolG__1596), form__1622)))
{return binaryEE__1600(symbol_name__1601(first__1595(form__1622)), "setter")}}}}, false);
exports["setter-identifier?"] = setter_identifierQ__1620}
{
var Tsymbol_countT__1623;
false;
Tsymbol_countT__1623 = 0}
{
var reset_symbol_counterN__1624;
false;
reset_symbol_counterN__1624 = Mmake_function__1590("reset_symbol_counterN", function reset_symbol_counterN__1625 ()
{return Tsymbol_countT__1623 = 0}, false);
exports["reset-symbol-counter!"] = reset_symbol_counterN__1624}
{
var symbol__1626 = B1589.symbol,
get__1627 = B1589.get,
concatenate__1628 = B1589.concatenate,
as_string__1629 = B1589["as-string"],
generate_symbol__1630;
false;
generate_symbol__1630 = Mmake_function__1590("generate_symbol", function generate_symbol__1631 (env__1632, prefix__1633)
{
var B1636;
if ($T(prefix__1633))
{B1636 = concatenate__1628(prefix__1633, "_")}
else
B1636 = "$";
var B1637 = as_string__1629(Tsymbol_countT__1623 = (Tsymbol_countT__1623 + 1)),
name__1634 = concatenate__1628(B1636, B1637),
B1638;
if ($T(env__1632))
{B1638 = get__1627(env__1632, "module", "name")}
else
B1638 = false;
var result__1635 = symbol__1626(name__1634, B1638);
result__1635["generated?"] = true;
return result__1635}, false);
exports["generate-symbol"] = generate_symbol__1630}
{
var B1644 = $S("%begin", "ralph/core"),
maybe_begin__1640;
false;
maybe_begin__1640 = Mmake_function__1590("maybe_begin", function maybe_begin__1641 (expressions__1642)
{
var B1639__1643 = size__1617(expressions__1642);
if ($T(binaryEE__1600(B1639__1643, 0)))
{return false}
else
if ($T(binaryEE__1600(B1639__1643, 1)))
{return first__1595(expressions__1642)}
else
return concatenate__1628([B1644], expressions__1642)}, false);
exports["maybe-begin"] = maybe_begin__1640}
{
var destructure_symbol__1645;
false;
destructure_symbol__1645 = Mmake_function__1590("destructure_symbol", function destructure_symbol__1646 (identifier__1647)
{return [get__1627(identifier__1647, "name"), get__1627(identifier__1647, "module")]}, false);
exports["destructure-symbol"] = destructure_symbol__1645}
{
var localize__1648;
false;
localize__1648 = Mmake_function__1590("localize", function localize__1649 (identifier__1650, env__1651)
{if ($T(get__1627(identifier__1650, "module")))
{return identifier__1650}
else
return symbol__1626(symbol_name__1601(identifier__1650), get__1627(env__1651, "module", "name"))}, false);
exports.localize = localize__1648}
{
var get_setter__1652 = B1589["get-setter"],
bindN__1653;
false;
bindN__1653 = Mmake_function__1590("bindN", function bindN__1654 (env__1655, identifier__1656)
{return get_setter__1652(env__1655, "binding-count", symbol_name__1601(identifier__1656), (get__1627(env__1655, "binding-count", symbol_name__1601(identifier__1656)) + 1))}, false);
exports["bind!"] = bindN__1653}
{
var G__1658 = B1589[">"],
boundQ__1659;
false;
boundQ__1659 = Mmake_function__1590("boundQ", function boundQ__1660 (env__1661, identifier__1662)
{
var B1657__1663 = get__1627(env__1661, "binding-count", symbol_name__1601(identifier__1662));
if ($T(B1657__1663))
{
var count__1664 = B1657__1663;
return G__1658(count__1664, 0)}}, false);
exports["bound?"] = boundQ__1659}
{
var unbindN__1665;
false;
unbindN__1665 = Mmake_function__1590("unbindN", function unbindN__1666 (env__1667, identifier__1668)
{return get_setter__1652(env__1667, "binding-count", symbol_name__1601(identifier__1668), (get__1627(env__1667, "binding-count", symbol_name__1601(identifier__1668)) - 1))}, false);
exports["unbind!"] = unbindN__1665}
{
var choose__1671 = B1589.choose,
remove_defined_identifiers__1672;
false;
remove_defined_identifiers__1672 = Mmake_function__1590("remove_defined_identifiers", function remove_defined_identifiers__1673 (identifiers__1674, env__1675)
{return choose__1671(function B1669__1676 (identifier__1677)
{
var B1670__1678 = destructure_symbol__1645(identifier__1677),
name__1679 = B1670__1678[0],
module_name__1680 = B1670__1678[1];
return not__1593(get__1627(env__1675, "defined?", module_name__1680, name__1679))}, identifiers__1674)}, false);
exports["remove-defined-identifiers"] = remove_defined_identifiers__1672}
