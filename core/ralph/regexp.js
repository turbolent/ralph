var B1830 = require("ralph/core")
false
{
var B1831 = RegExp;
exports["<regexp>"] = B1831}
var B1835 = B1830["%make-method"],
B1836 = B1830.concatenate,
B1837 = B1830["%keys"],
B1838 = B1835("initialize", function B1839 (regexp__1840)
{
var B1841 = $SL.call(arguments, 1),
B1842 = B1837(B1841, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}),
pattern__1843 = B1842.pattern,
globalQ__1844 = B1842["global?"],
ignore_caseQ__1845 = B1842["ignore-case?"],
multilineQ__1846 = B1842["multiline?"];
if ($T(pattern__1843))
{
var B1848;
if ($T(globalQ__1844))
B1848 = "g"
else
B1848 = "";
var B1849;
if ($T(ignore_caseQ__1845))
B1849 = "i"
else
B1849 = "";
var B1850;
if ($T(multilineQ__1846))
B1850 = "m"
else
B1850 = "";
var flags__1847 = B1836(B1848, B1849, B1850);
return regexp__1840.compile(pattern__1843)}}, false, B1831, B1838)
var B1851 = B1830["%make-function"],
B1852 = B1830[">"],
B1853 = B1851("find", function find__1854 (regexp__1855, string__1856)
{
var position__1857 = string__1856.search(regexp__1855);
if ($T(B1852(position__1857, -1)))
return position__1857}, false)
{
var B1858 = B1851("match", function match__1859 (regexp__1860, string__1861)
{return string__1861.match(regexp__1860)}, false);
exports.match = B1858}
