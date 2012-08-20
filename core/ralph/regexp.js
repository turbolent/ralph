var B1808 = require("ralph/core")
false
{var B1809 = RegExp;
exports["<regexp>"] = B1809}
var B1812 = B1808["%make-method"], B1813 = B1808.concatenate, B1814 = B1808["%keys"], B1815 = B1812("initialize", function B1827 (regexp__1816)
{var B1817 = $SL.call(arguments, 1), B1818 = B1814(B1817, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}), pattern__1819 = B1818.pattern, globalQ__1820 = B1818["global?"], ignore_caseQ__1821 = B1818["ignore-case?"], multilineQ__1822 = B1818["multiline?"];
if ($T(pattern__1819))
{var B1824;
if ($T(globalQ__1820))
B1824 = "g"
else B1824 = "";
var B1825;
if ($T(ignore_caseQ__1821))
B1825 = "i"
else B1825 = "";
var B1826;
if ($T(multilineQ__1822))
B1826 = "m"
else B1826 = "";
var flags__1823 = B1813(B1824, B1825, B1826);
return regexp__1816.compile(pattern__1819)}}, false, B1809, B1815)
var B1828 = B1808["%make-function"], B1829 = B1808[">"], B1830 = B1828("find", function B1834 (regexp__1831, string__1832)
{var position__1833 = string__1832.search(regexp__1831);
if ($T(B1829(position__1833, -1)))
return position__1833}, false)
{var B1835 = B1828("match", function B1838 (regexp__1836, string__1837)
{return string__1837.match(regexp__1836)}, false);
exports.match = B1835}
