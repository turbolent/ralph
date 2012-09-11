{
var B1781;
false;
B1781 = require("ralph/core")}
false
{
var ralphScoreCCtrueQ = B1781["true?"],
Mmake_function__1782 = B1781["%make-function"],
instanceQ__1783 = B1781["instance?"],
LarrayG__1784 = B1781["<array>"],
not__1785 = B1781.not,
emptyQ__1786 = B1781["empty?"],
first__1787 = B1781.first,
LsymbolG__1788 = B1781["<symbol>"],
expressionQ__1789;
false;
expressionQ__1789 = Mmake_function__1782("expressionQ", function expressionQ__1790 (form__1791)
{if ($T(instanceQ__1783(form__1791, LarrayG__1784)))
{
var value__1792 = emptyQ__1786(form__1791),
B1794 = !(ralphScoreCCtrueQ(value__1792));
if ($T(B1794))
{
var sequence__1793 = form__1791,
B1795 = sequence__1793[0];
return instanceQ__1783(B1795, LsymbolG__1788)}}}, false);
exports["expression?"] = expressionQ__1789}
{
var binaryEE__1796 = B1781["binary=="],
symbol_name__1797 = B1781["symbol-name"],
varQ__1798;
false;
varQ__1798 = Mmake_function__1782("varQ", function varQ__1799 (exp__1800)
{if ($T(expressionQ__1789(exp__1800)))
{
var object2__1802 = "%var",
object1__1801 = symbol_name__1797(first__1787(exp__1800));
return (object1__1801 === object2__1802)}}, false);
exports["var?"] = varQ__1798}
{
var setQ__1803;
false;
setQ__1803 = Mmake_function__1782("setQ", function setQ__1804 (exp__1805)
{if ($T(expressionQ__1789(exp__1805)))
{
var object2__1807 = "%set",
object1__1806 = symbol_name__1797(first__1787(exp__1805));
return (object1__1806 === object2__1807)}}, false);
exports["set?"] = setQ__1803}
{
var defineQ__1808;
false;
defineQ__1808 = Mmake_function__1782("defineQ", function defineQ__1809 (exp__1810)
{if ($T(expressionQ__1789(exp__1810)))
{
var object2__1812 = "%define",
object1__1811 = symbol_name__1797(first__1787(exp__1810));
return (object1__1811 === object2__1812)}}, false);
exports["define?"] = defineQ__1808}
{
var methodQ__1813;
false;
methodQ__1813 = Mmake_function__1782("methodQ", function methodQ__1814 (exp__1815)
{if ($T(expressionQ__1789(exp__1815)))
{
var object2__1817 = "%method",
object1__1816 = symbol_name__1797(first__1787(exp__1815));
return (object1__1816 === object2__1817)}}, false);
exports["method?"] = methodQ__1813}
{
var beginQ__1818;
false;
beginQ__1818 = Mmake_function__1782("beginQ", function beginQ__1819 (exp__1820)
{if ($T(expressionQ__1789(exp__1820)))
{
var object2__1822 = "%begin",
object1__1821 = symbol_name__1797(first__1787(exp__1820));
return (object1__1821 === object2__1822)}}, false);
exports["begin?"] = beginQ__1818}
{
var size__1823 = B1781.size,
everyQ__1824 = B1781["every?"],
rcurry__1825 = B1781.rcurry,
setter_identifierQ__1826;
false;
setter_identifierQ__1826 = Mmake_function__1782("setter_identifierQ", function setter_identifierQ__1827 (form__1828)
{if ($T(instanceQ__1783(form__1828, LarrayG__1784)))
{
var object2__1830 = 2,
object1__1829 = size__1823(form__1828),
B1833 = (object1__1829 === object2__1830);
if ($T(B1833))
{if ($T(everyQ__1824(rcurry__1825(instanceQ__1783, LsymbolG__1788), form__1828)))
{
var object2__1832 = "setter",
object1__1831 = symbol_name__1797(first__1787(form__1828));
return (object1__1831 === object2__1832)}}}}, false);
exports["setter-identifier?"] = setter_identifierQ__1826}
{
var Tsymbol_countT__1834;
false;
Tsymbol_countT__1834 = 0}
{
var reset_symbol_counterN__1835;
false;
reset_symbol_counterN__1835 = Mmake_function__1782("reset_symbol_counterN", function reset_symbol_counterN__1836 ()
{return Tsymbol_countT__1834 = 0}, false);
exports["reset-symbol-counter!"] = reset_symbol_counterN__1835}
{
var symbol__1837 = B1781.symbol,
get__1838 = B1781.get,
concatenate__1839 = B1781.concatenate,
as_string__1840 = B1781["as-string"],
generate_symbol__1841;
false;
generate_symbol__1841 = Mmake_function__1782("generate_symbol", function generate_symbol__1842 (env__1843, prefix__1844)
{
var B1847;
if ($T(prefix__1844))
{B1847 = concatenate__1839(prefix__1844, "_")}
else
B1847 = "$";
var B1848 = as_string__1840(Tsymbol_countT__1834 = (Tsymbol_countT__1834 + 1)),
name__1845 = concatenate__1839(B1847, B1848),
B1849;
if ($T(env__1843))
{B1849 = get__1838(env__1843, "module", "name")}
else
B1849 = false;
var result__1846 = symbol__1837(name__1845, B1849);
result__1846["generated?"] = true;
return result__1846}, false);
exports["generate-symbol"] = generate_symbol__1841}
{
var B1863 = $S("%begin", "ralph/core"),
maybe_begin__1851;
false;
maybe_begin__1851 = Mmake_function__1782("maybe_begin", function maybe_begin__1852 (expressions__1853)
{
var object__1855 = expressions__1853,
B1850__1854 = ((object__1855 || false).length || 0),
object2__1857 = 0,
object1__1856 = B1850__1854,
B1861 = (object1__1856 === object2__1857);
if ($T(B1861))
{return false}
else
{
var object2__1859 = 1,
object1__1858 = B1850__1854,
B1862 = (object1__1858 === object2__1859);
if ($T(B1862))
{
var sequence__1860 = expressions__1853;
return sequence__1860[0]}
else
return concatenate__1839([B1863], expressions__1853)}}, false);
exports["maybe-begin"] = maybe_begin__1851}
{
var module_nameSname__1864;
false;
module_nameSname__1864 = Mmake_function__1782("module_nameSname", function module_nameSname__1865 (identifier__1866)
{return [get__1838(identifier__1866, "module"), symbol_name__1797(identifier__1866)]}, false);
exports["module-name/name"] = module_nameSname__1864}
{
var localize__1867;
false;
localize__1867 = Mmake_function__1782("localize", function localize__1868 (identifier__1869, env__1870)
{if ($T(get__1838(identifier__1869, "module")))
{return identifier__1869}
else
return symbol__1837(symbol_name__1797(identifier__1869), get__1838(env__1870, "module", "name"))}, false);
exports.localize = localize__1867}
{
var get_setter__1871 = B1781["get-setter"],
bindN__1872;
false;
bindN__1872 = Mmake_function__1782("bindN", function bindN__1873 (env__1874, identifier__1875)
{return get_setter__1871(env__1874, "binding-count", symbol_name__1797(identifier__1875), (get__1838(env__1874, "binding-count", symbol_name__1797(identifier__1875)) + 1))}, false);
exports["bind!"] = bindN__1872}
{
var G__1877 = B1781[">"],
boundQ__1878;
false;
boundQ__1878 = Mmake_function__1782("boundQ", function boundQ__1879 (env__1880, identifier__1881)
{
var B1876__1882 = get__1838(env__1880, "binding-count", symbol_name__1797(identifier__1881));
if ($T(B1876__1882))
{
var count__1883 = B1876__1882;
return G__1877(count__1883, 0)}}, false);
exports["bound?"] = boundQ__1878}
{
var unbindN__1884;
false;
unbindN__1884 = Mmake_function__1782("unbindN", function unbindN__1885 (env__1886, identifier__1887)
{return get_setter__1871(env__1886, "binding-count", symbol_name__1797(identifier__1887), (get__1838(env__1886, "binding-count", symbol_name__1797(identifier__1887)) - 1))}, false);
exports["unbind!"] = unbindN__1884}
{
var choose__1890 = B1781.choose,
remove_defined_identifiers__1891;
false;
remove_defined_identifiers__1891 = Mmake_function__1782("remove_defined_identifiers", function remove_defined_identifiers__1892 (identifiers__1893, env__1894)
{return choose__1890(function B1888__1895 (identifier__1896)
{
var B1889__1897 = module_nameSname__1864(identifier__1896),
module_name__1898 = B1889__1897[0],
name__1899 = B1889__1897[1],
value__1900 = get__1838(env__1894, "defined?", module_name__1898, name__1899);
return !(ralphScoreCCtrueQ(value__1900))}, identifiers__1893)}, false);
exports["remove-defined-identifiers"] = remove_defined_identifiers__1891}
