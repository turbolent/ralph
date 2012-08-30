{
var B1717;
false;
B1717 = require("ralph/core")}
{
var B1719;
false;
B1719 = require("ralph/compiler/utilities")}
{
var Mmake_function__1737 = B1717["%make-function"],
instanceQ__1738 = B1717["instance?"],
LarrayG__1739 = B1717["<array>"],
not__1740 = B1717.not,
emptyQ__1741 = B1717["empty?"],
binaryEE__1742 = B1717["binary=="],
set_subtractN__1743 = B1717["set-subtract!"],
as_set__1744 = B1717["as-set"],
concatenate__1745 = B1717.concatenate,
set_unionN__1746 = B1717["set-union!"],
reduce1__1747 = B1717.reduce1,
map__1748 = B1717.map,
rcurry__1749 = B1717.rcurry,
rest__1750 = B1717.rest,
reduce__1751 = B1717.reduce,
LsymbolG__1752 = B1717["<symbol>"],
symbol_name__1753 = B1717["symbol-name"],
first__1754 = B1717.first,
localize__1755 = B1719.localize,
find_free_variables__1756;
false;
find_free_variables__1756 = Mmake_function__1737("find_free_variables", function find_free_variables__1757 (exp__1758, env__1759)
{
var B1791;
if ($T(instanceQ__1738(exp__1758, LarrayG__1739)))
{B1791 = not__1740(emptyQ__1741(exp__1758))}
else
B1791 = false;
if ($T(B1791))
{
var head__1760 = first__1754(exp__1758),
name__1761;
if ($T(instanceQ__1738(head__1760, LsymbolG__1752)))
{name__1761 = symbol_name__1753(head__1760)}
else
name__1761 = false;
var B1762 = name__1761;
if ($T(binaryEE__1742(B1762, "%method")))
{
var ____1763 = exp__1758[0],
name__1764 = exp__1758[1],
arguments__1765 = exp__1758[2],
body__1766 = exp__1758[3];
return set_subtractN__1743(find_free_variables__1757(body__1766, env__1759), as_set__1744(concatenate__1745([name__1764], arguments__1765)))}
else
if ($T(binaryEE__1742(B1762, "%bind")))
{
var ____1767 = exp__1758[0],
B1768 = exp__1758[1],
var__1769 = B1768[0],
value__1770 = B1768[1],
body__1771 = exp__1758[2];
return set_unionN__1746(set_subtractN__1743(find_free_variables__1757(body__1771, env__1759), as_set__1744([var__1769])), find_free_variables__1757(value__1770, env__1759))}
else
if ($T(binaryEE__1742(B1762, "%begin")))
{return reduce1__1747(set_unionN__1746, map__1748(rcurry__1749(find_free_variables__1757, env__1759), rest__1750(exp__1758)))}
else
if ($T(binaryEE__1742(B1762, "%try")))
{
var ____1772 = exp__1758[0],
e1__1773 = exp__1758[1],
v__1774 = exp__1758[2],
e2__1775 = exp__1758[3];
return set_subtractN__1743(set_unionN__1746(as_set__1744(find_free_variables__1757(e1__1773, env__1759)), as_set__1744(find_free_variables__1757(e2__1775, env__1759))), as_set__1744([v__1774]))}
else
{
var B1776 = binaryEE__1742(B1762, "%set"),
B1792;
if ($T(B1776))
{B1792 = B1776}
else
{
var B1777 = binaryEE__1742(B1762, "%if");
if ($T(B1777))
{B1792 = B1777}
else
{
var B1778 = binaryEE__1742(B1762, "%while");
if ($T(B1778))
{B1792 = B1778}
else
{
var B1779 = binaryEE__1742(B1762, "%array");
if ($T(B1779))
{B1792 = B1779}
else
{
var B1780 = binaryEE__1742(B1762, "%object");
if ($T(B1780))
{B1792 = B1780}
else
{
var B1781 = binaryEE__1742(B1762, "%infix");
if ($T(B1781))
{B1792 = B1781}
else
{
var B1782 = binaryEE__1742(B1762, "%get-property");
if ($T(B1782))
{B1792 = B1782}
else
{
var B1783 = binaryEE__1742(B1762, "%native-call");
if ($T(B1783))
{B1792 = B1783}
else
{
var B1784 = binaryEE__1742(B1762, "%return");
if ($T(B1784))
{B1792 = B1784}
else
{
var B1785 = binaryEE__1742(B1762, "%plus");
if ($T(B1785))
{B1792 = B1785}
else
{
var B1786 = binaryEE__1742(B1762, "%minus");
if ($T(B1786))
{B1792 = B1786}
else
{
var B1787 = binaryEE__1742(B1762, "%times");
if ($T(B1787))
{B1792 = B1787}
else
B1792 = binaryEE__1742(B1762, "%divide")}}}}}}}}}}};
if ($T(B1792))
{return as_set__1744(reduce__1751(concatenate__1745, [], map__1748(rcurry__1749(find_free_variables__1757, env__1759), rest__1750(exp__1758))))}
else
{
var B1788 = binaryEE__1742(B1762, "%native"),
B1793;
if ($T(B1788))
{B1793 = B1788}
else
{
var B1789 = binaryEE__1742(B1762, "%native-name");
if ($T(B1789))
{B1793 = B1789}
else
{
var B1790 = binaryEE__1742(B1762, "%define");
if ($T(B1790))
{B1793 = B1790}
else
B1793 = binaryEE__1742(B1762, "%symbol")}};
if ($T(B1793))
{return as_set__1744([])}
else
return reduce1__1747(set_unionN__1746, map__1748(rcurry__1749(find_free_variables__1757, env__1759), exp__1758))}}}
else
if ($T(instanceQ__1738(exp__1758, LsymbolG__1752)))
{return as_set__1744([localize__1755(exp__1758, env__1759)])}
else
return as_set__1744([])}, false);
exports["find-free-variables"] = find_free_variables__1756}
