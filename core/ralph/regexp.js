var B1831 = require("ralph/core")
false
{
var B1832 = RegExp;
exports["<regexp>"] = B1832}
var B1836 = B1831["%make-method"],
B1837 = B1831.concatenate,
B1838 = B1831["%keys"],
B1839 = B1836("initialize", function B1840 (regexp__1841)
{
var B1842 = $SL.call(arguments, 1),
B1843 = B1838(B1842, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}),
pattern__1844 = B1843.pattern,
globalQ__1845 = B1843["global?"],
ignore_caseQ__1846 = B1843["ignore-case?"],
multilineQ__1847 = B1843["multiline?"];
if ($T(pattern__1844))
{
var B1849;
if ($T(globalQ__1845))
B1849 = "g"
else
B1849 = "";
var B1850;
if ($T(ignore_caseQ__1846))
B1850 = "i"
else
B1850 = "";
var B1851;
if ($T(multilineQ__1847))
B1851 = "m"
else
B1851 = "";
var flags__1848 = B1837(B1849, B1850, B1851);
return regexp__1841.compile(pattern__1844)}}, false, B1832, B1839)
var B1852 = B1831["%make-function"],
B1853 = B1831[">"],
B1854 = B1852("find", function find__1855 (regexp__1856, string__1857)
{
var position__1858 = string__1857.search(regexp__1856);
if ($T(B1853(position__1858, -1)))
return position__1858}, false)
{
var B1859 = B1852("match", function match__1860 (regexp__1861, string__1862)
{return string__1862.match(regexp__1861)}, false);
exports.match = B1859}
