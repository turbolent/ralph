{
var B1993;
false;
B1993 = require("ralph/core")}
{
var B1996,
B1997;
false;
B1996 = require("ralph/compiler/utilities");
false;
B1997 = require("ralph/compiler/free-variables")}
{
var Mmake_function__2006 = B1993["%make-function"],
instanceQ__2007 = B1993["instance?"],
LarrayG__2008 = B1993["<array>"],
binaryEE__2009 = B1993["binary=="],
last_setter__2010 = B1993["last-setter"],
identity__2011 = B1993.identity,
get__2012 = B1993.get,
symbol_name__2013 = B1993["symbol-name"],
second__2014 = B1993.second,
last__2015 = B1993.last,
second_setter__2016 = B1993["second-setter"],
concatenate__2017 = B1993.concatenate,
first__2018 = B1993.first,
map__2019 = B1993.map,
rcurry__2020 = B1993.rcurry,
rest__2021 = B1993.rest,
expressionQ__2022 = B1996["expression?"],
not__2023 = B1993.not,
get_setter__2024 = B1993["get-setter"],
GE__2025 = B1993[">="],
push_last__2026 = B1993["push-last"],
element__2027 = B1993.element,
size__2028 = B1993.size,
close_free_variables__2029,
generate_symbol__2030 = B1996["generate-symbol"],
optimize_tail_callsN__2031;
false;
optimize_tail_callsN__2031 = Mmake_function__2006("optimize_tail_callsN", function optimize_tail_callsN__2032 (exp__2033, env__2034)
{if ($T(instanceQ__2007(exp__2033, LarrayG__2008)))
{
var B2035 = symbol_name__2013(first__2018(exp__2033));
if ($T(binaryEE__2009(B2035, "%method")))
{
var last_method__2036 = get__2012(env__2034, "current-method");
env__2034["current-method"] = exp__2033;
var result__2037 = optimize_tail_callsN__2032(last__2015(exp__2033), env__2034),
name__2038 = symbol_name__2013(second__2014(exp__2033)),
B2039 = get__2012(env__2034, "tco-wrappers", name__2038),
wrapper__2040;
if ($T(B2039))
{wrapper__2040 = B2039}
else
wrapper__2040 = identity__2011;
last_setter__2010(exp__2033, wrapper__2040(result__2037));
env__2034["current-method"] = last_method__2036;
return exp__2033}
else
if ($T(binaryEE__2009(B2035, "%bind")))
{
var ____2041 = exp__2033[0],
binding__2042 = exp__2033[1],
body__2043 = exp__2033[2];
second_setter__2016(binding__2042, optimize_tail_callsN__2032(second__2014(binding__2042), env__2034));
last_setter__2010(exp__2033, optimize_tail_callsN__2032(body__2043, env__2034));
return exp__2033}
else
{
var B2044 = binaryEE__2009(B2035, "%begin"),
B2067;
if ($T(B2044))
{B2067 = B2044}
else
B2067 = binaryEE__2009(B2035, "%while");
if ($T(B2067))
{return concatenate__2017([first__2018(exp__2033)], map__2019(rcurry__2020(optimize_tail_callsN__2032, env__2034), rest__2021(exp__2033)))}
else
if ($T(binaryEE__2009(B2035, "%set")))
{
last_setter__2010(exp__2033, optimize_tail_callsN__2032(last__2015(exp__2033), env__2034));
return exp__2033}
else
if ($T(binaryEE__2009(B2035, "%if")))
{
var ____2045 = exp__2033[0],
test__2046 = exp__2033[1],
then__2047 = exp__2033[2],
else__2048 = exp__2033[3];
return [$S("%if", "ralph/core"), test__2046, optimize_tail_callsN__2032(then__2047, env__2034), optimize_tail_callsN__2032(else__2048, env__2034)]}
else
if ($T(binaryEE__2009(B2035, "%try")))
{
second_setter__2016(exp__2033, optimize_tail_callsN__2032(second__2014(exp__2033), env__2034));
last_setter__2010(exp__2033, optimize_tail_callsN__2032(last__2015(exp__2033), env__2034));
return exp__2033}
else
if ($T(binaryEE__2009(B2035, "%return")))
{
var B2049 = env__2034,
current_method__2050 = B2049["current-method"],
____2051 = current_method__2050[0],
method_name__2052 = current_method__2050[1],
arguments__2053 = current_method__2050[2],
body__2054 = current_method__2050[3],
value__2055 = second__2014(exp__2033),
name__2056 = symbol_name__2013(method_name__2052),
B2068;
if ($T(expressionQ__2022(value__2055)))
{B2068 = binaryEE__2009(first__2018(value__2055), method_name__2052)}
else
B2068 = false;
if ($T(B2068))
{
var B2057 = get__2012(env__2034, "tco-labels", name__2056),
label__2058;
if ($T(B2057))
{label__2058 = B2057}
else
label__2058 = get_setter__2024(env__2034, "tco-labels", name__2056, generate_symbol__2030());
var new_values__2059 = rest__2021(value__2055);
if ($T(not__2023(get__2012(env__2034, "tco-wrappers", name__2056))))
{get_setter__2024(env__2034, "tco-wrappers", name__2056, function B2060 (exp__2061)
{return [$S("%native", "ralph/core"), label__2058, ":while(true)", [$S("%begin", "ralph/core"), exp__2061, [$S("%native", "ralph/core"), "break"]]]})};
var assignments__2062 = [],
B2063 = size__2028(arguments__2053),
i__2064 = 0;
while ($T(not__2023(GE__2025(i__2064, B2063))))
{
(function B2065 (i__2066)
{return push_last__2026(assignments__2062, [$S("%set", "ralph/core"), element__2027(arguments__2053, i__2066), [$S("%get-property", "ralph/core"), $S("%all-arguments", "ralph/compiler/tco"), i__2066]])})(i__2064);
i__2064 = (i__2064 + 1)};
false;
return concatenate__2017([$S("%begin", "ralph/core"), [$S("%set", "ralph/core"), $S("%all-arguments", "ralph/compiler/tco"), close_free_variables__2029(concatenate__2017([$S("%array", "ralph/core")], new_values__2059), env__2034)]], assignments__2062, [[$S("%native", "ralph/core"), "continue ", label__2058]])}
else
{
last_setter__2010(exp__2033, optimize_tail_callsN__2032(last__2015(exp__2033), env__2034));
return exp__2033}}
else
return map__2019(rcurry__2020(optimize_tail_callsN__2032, env__2034), exp__2033)}}
else
return exp__2033}, false);
exports["optimize-tail-calls!"] = optimize_tail_callsN__2031}
{
var methodQ__2069 = B1996["method?"],
reduce__2070 = B1993.reduce,
set_subtractN__2071 = B1993["set-subtract!"],
find_free_variables__2072 = B1997["find-free-variables"],
environment_definitions__2073,
TdefinedT__2074 = B1996["*defined*"];
false;
close_free_variables__2029 = Mmake_function__2006("close_free_variables", function close_free_variables__2075 (exp__2076, env__2077)
{if ($T(instanceQ__2007(exp__2076, LarrayG__2008)))
{if ($T(methodQ__2069(exp__2076)))
{
var variables__2078 = reduce__2070(set_subtractN__2071, find_free_variables__2072(exp__2076), [environment_definitions__2073(env__2077), TdefinedT__2074]);
return concatenate__2017([[$S("%method", "ralph/core"), generate_symbol__2030(), variables__2078, [$S("%return", "ralph/core"), exp__2076]]], variables__2078)}
else
return map__2019(rcurry__2020(close_free_variables__2075, env__2077), exp__2076)}
else
return exp__2076}, false)}
