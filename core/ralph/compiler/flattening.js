{
var B2081;
false;
B2081 = require("ralph/core")}
{
var B2083;
false;
B2083 = require("ralph/compiler/utilities")}
{
var Mmake_function__2085 = B2081["%make-function"],
reduce1__2086 = B2081.reduce1,
concatenate__2087 = B2081.concatenate,
map__2088 = B2081.map,
beginQ__2089 = B2083["begin?"],
rest__2090 = B2081.rest,
flatten_statementsN__2091,
flatten_begins__2092;
false;
flatten_begins__2092 = Mmake_function__2085("flatten_begins", function flatten_begins__2093 (exps__2094)
{return reduce1__2086(concatenate__2087, map__2088(function B2095 (exp__2096)
{
var flattened__2097 = flatten_statementsN__2091(exp__2096);
if ($T(beginQ__2089(flattened__2097)))
{return rest__2090(flattened__2097)}
else
return [flattened__2097]}, exps__2094))}, false)}
{
var reduce__2100 = B2081.reduce,
varQ__2101 = B2083["var?"],
do__2102 = B2081["do"],
push_last__2103 = B2081["push-last"],
last__2104 = B2081.last,
binaryEE__2105 = B2081["binary=="],
first__2106 = B2081.first,
second_setter__2107 = B2081["second-setter"],
third__2108 = B2081.third,
second__2109 = B2081.second,
setQ__2110 = B2083["set?"],
not__2111 = B2081.not,
emptyQ__2112 = B2081["empty?"],
flatten_varsN__2113;
false;
flatten_varsN__2113 = Mmake_function__2085("flatten_varsN", function flatten_varsN__2114 (exps__2115)
{return reduce__2100(function B2116 (result__2117, exp__2118)
{
var previous__2119;
if ($T(not__2111(emptyQ__2112(result__2117))))
{previous__2119 = last__2104(result__2117)}
else
previous__2119 = false;
var previous_varQ__2120;
if ($T(previous__2119))
{previous_varQ__2120 = varQ__2101(previous__2119)}
else
previous_varQ__2120 = false;
var B2126;
if ($T(previous_varQ__2120))
{B2126 = varQ__2101(exp__2118)}
else
B2126 = false;
if ($T(B2126))
{
do__2102(function B2121 (binding__2122)
{return push_last__2103(last__2104(result__2117), binding__2122)}, rest__2090(exp__2118));
return result__2117}
else
{
var mergeQ__2123;
if ($T(previous_varQ__2120))
{mergeQ__2123 = setQ__2110(exp__2118)}
else
mergeQ__2123 = false;
var binding__2124;
if ($T(mergeQ__2123))
{binding__2124 = last__2104(last__2104(result__2117))}
else
binding__2124 = false;
var identifier__2125;
if ($T(mergeQ__2123))
{identifier__2125 = second__2109(exp__2118)}
else
identifier__2125 = false;
if ($T(binaryEE__2105(first__2106(binding__2124), identifier__2125)))
{
second_setter__2107(binding__2124, third__2108(exp__2118));
return result__2117}
else
return concatenate__2087(result__2117, [exp__2118])}}, [], exps__2115)}, false)}
{
var instanceQ__2130 = B2081["instance?"],
LarrayG__2131 = B2081["<array>"],
last_setter__2132 = B2081["last-setter"],
maybe_begin__2133 = B2083["maybe-begin"],
third_setter__2134 = B2081["third-setter"],
symbol_name__2135 = B2081["symbol-name"];
false;
flatten_statementsN__2091 = Mmake_function__2085("flatten_statementsN", function flatten_statementsN__2136 (exp__2137)
{if ($T(instanceQ__2130(exp__2137, LarrayG__2131)))
{
var B2138 = symbol_name__2135(first__2106(exp__2137)),
B2139 = binaryEE__2105(B2138, "%method"),
B2146;
if ($T(B2139))
{B2146 = B2139}
else
{
var B2140 = binaryEE__2105(B2138, "%while");
if ($T(B2140))
{B2146 = B2140}
else
B2146 = binaryEE__2105(B2138, "%set")};
if ($T(B2146))
{
last_setter__2132(exp__2137, flatten_statementsN__2136(last__2104(exp__2137)));
return exp__2137}
else
if ($T(binaryEE__2105(B2138, "%begin")))
{
var ____2141 = exp__2137[0],
exps__2142 = $SL.call(exp__2137, 1);
return maybe_begin__2133(flatten_varsN__2113(flatten_begins__2092(exps__2142)))}
else
if ($T(binaryEE__2105(B2138, "%bind")))
{
var ____2143 = exp__2137[0],
binding__2144 = exp__2137[1],
body__2145 = exp__2137[2];
return flatten_statementsN__2136([$S("%begin", "ralph/core"), [$S("%var", "ralph/core"), binding__2144], body__2145])}
else
if ($T(binaryEE__2105(B2138, "%if")))
{
third_setter__2134(exp__2137, flatten_statementsN__2136(third__2108(exp__2137)));
last_setter__2132(exp__2137, flatten_statementsN__2136(last__2104(exp__2137)));
return exp__2137}
else
if ($T(binaryEE__2105(B2138, "%try")))
{
second_setter__2107(exp__2137, flatten_statementsN__2136(second__2109(exp__2137)));
last_setter__2132(exp__2137, flatten_statementsN__2136(last__2104(exp__2137)));
return exp__2137}
else
return map__2088(flatten_statementsN__2136, exp__2137)}
else
return exp__2137}, false);
exports["flatten-statements!"] = flatten_statementsN__2091}
