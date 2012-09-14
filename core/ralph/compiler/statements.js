{
var B2053;
false;
B2053 = require("ralph/core")}
{
var B2055;
false;
B2055 = require("ralph/compiler/utilities")}
{
var B2078 = $S("%begin", "ralph/core"),
Mmake_function__2058 = B2053["%make-function"],
instanceQ__2059 = B2053["instance?"],
LarrayG__2060 = B2053["<array>"],
binaryEE__2061 = B2053["binary=="],
last_setter__2062 = B2053["last-setter"],
last__2063 = B2053.last,
third_setter__2064 = B2053["third-setter"],
third__2065 = B2053.third,
second_setter__2066 = B2053["second-setter"],
second__2067 = B2053.second,
concatenate__2068 = B2053.concatenate,
symbol_name__2069 = B2053["symbol-name"],
first__2070 = B2053.first,
wrap_valueN__2071;
false;
wrap_valueN__2071 = Mmake_function__2058("wrap_valueN", function wrap_valueN__2072 (exp__2073, wrapper__2074)
{if ($T(instanceQ__2059(exp__2073, LarrayG__2060)))
{
var B2056__2075 = symbol_name__2069(first__2070(exp__2073)),
B2057__2076 = binaryEE__2061(B2056__2075, "%begin"),
B2077;
if ($T(B2057__2076))
{B2077 = B2057__2076}
else
B2077 = binaryEE__2061(B2056__2075, "%bind");
if ($T(B2077))
{
last_setter__2062(exp__2073, wrap_valueN__2072(last__2063(exp__2073), wrapper__2074));
return exp__2073}
else
if ($T(binaryEE__2061(B2056__2075, "%if")))
{
third_setter__2064(exp__2073, wrap_valueN__2072(third__2065(exp__2073), wrapper__2074));
last_setter__2062(exp__2073, wrap_valueN__2072(last__2063(exp__2073), wrapper__2074));
return exp__2073}
else
if ($T(binaryEE__2061(B2056__2075, "%while")))
{return [B2078, exp__2073, wrap_valueN__2072(false, wrapper__2074)]}
else
if ($T(binaryEE__2061(B2056__2075, "%try")))
{
second_setter__2066(exp__2073, wrap_valueN__2072(second__2067(exp__2073), wrapper__2074));
last_setter__2062(exp__2073, wrap_valueN__2072(last__2063(exp__2073), wrapper__2074));
return exp__2073}
else
return concatenate__2068(wrapper__2074, [exp__2073])}
else
return concatenate__2068(wrapper__2074, [exp__2073])}, false)}
{
var B2082 = $S("%return", "ralph/core"),
add_explicit_return__2079;
false;
add_explicit_return__2079 = Mmake_function__2058("add_explicit_return", function add_explicit_return__2080 (exp__2081)
{return wrap_valueN__2071(exp__2081, [B2082])}, false)}
{
var B2089 = $S("%if", "ralph/core"),
B2090 = $S("%while", "ralph/core"),
B2091 = $S("%bind", "ralph/core"),
B2092 = $S("%try", "ralph/core"),
not__2083 = B2053.not,
emptyQ__2084 = B2053["empty?"],
memberQ__2085 = B2053["member?"],
statementQ__2086;
false;
statementQ__2086 = Mmake_function__2058("statementQ", function statementQ__2087 (exp__2088)
{if ($T(instanceQ__2059(exp__2088, LarrayG__2060)))
{if ($T(not__2083(emptyQ__2084(exp__2088))))
{return memberQ__2085(first__2070(exp__2088), [B2089, B2090, B2078, B2091, B2092])}}}, false)}
{
var B2098 = $S("%native", "ralph/core"),
LbooleanG__2093 = B2053["<boolean>"],
trueQ__2094 = B2053["true?"],
add_explicit_true__2095;
false;
add_explicit_true__2095 = Mmake_function__2058("add_explicit_true", function add_explicit_true__2096 (exp__2097)
{if ($T(instanceQ__2059(exp__2097, LbooleanG__2093)))
{return trueQ__2094(exp__2097)}
else
return [[B2098, "$T"], exp__2097]}, false)}
{
var B2128 = $S("%set", "ralph/core"),
B2129 = $S("%get-property", "ralph/core"),
B2130 = $S("%var", "ralph/core"),
maybe_begin__2101 = B2055["maybe-begin"],
map__2102 = B2053.map,
rcurry__2103 = B2053.rcurry,
get__2104 = B2053.get,
first_setter__2105 = B2053["first-setter"],
transform_statementsN__2106;
false;
transform_statementsN__2106 = Mmake_function__2058("transform_statementsN", function transform_statementsN__2107 (exp__2108, env__2109)
{if ($T(instanceQ__2059(exp__2108, LarrayG__2060)))
{
var B2099__2110 = symbol_name__2069(first__2070(exp__2108));
if ($T(binaryEE__2061(B2099__2110, "%method")))
{
last_setter__2062(exp__2108, add_explicit_return__2079(transform_statementsN__2107(last__2063(exp__2108), env__2109)));
return exp__2108}
else
if ($T(binaryEE__2061(B2099__2110, "%begin")))
{
var ____2111 = exp__2108[0],
exps__2112 = $SL.call(exp__2108, 1);
return maybe_begin__2101(map__2102(rcurry__2103(transform_statementsN__2107, env__2109), exps__2112))}
else
if ($T(binaryEE__2061(B2099__2110, "%bind")))
{
var ____2113 = exp__2108[0],
B2100__2114 = exp__2108[1],
var__2115 = B2100__2114[0],
value__2116 = B2100__2114[1],
body__2117 = exp__2108[2];
if ($T(statementQ__2086(value__2116)))
{return [B2091, [var__2115, false], [B2078, wrap_valueN__2071(transform_statementsN__2107(value__2116, env__2109), [B2128, var__2115]), transform_statementsN__2107(body__2117, env__2109)]]}
else
return [B2091, [var__2115, transform_statementsN__2107(value__2116, env__2109)], transform_statementsN__2107(body__2117, env__2109)]}
else
if ($T(binaryEE__2061(B2099__2110, "%if")))
{
var ____2118 = exp__2108[0],
test__2119 = exp__2108[1],
then__2120 = exp__2108[2],
else__2121 = exp__2108[3];
return [B2089, add_explicit_true__2095(test__2119), transform_statementsN__2107(then__2120, env__2109), transform_statementsN__2107(else__2121, env__2109)]}
else
if ($T(binaryEE__2061(B2099__2110, "%while")))
{
second_setter__2066(exp__2108, add_explicit_true__2095(second__2067(exp__2108)));
third_setter__2064(exp__2108, transform_statementsN__2107(third__2065(exp__2108), env__2109));
return exp__2108}
else
if ($T(binaryEE__2061(B2099__2110, "%try")))
{
second_setter__2066(exp__2108, transform_statementsN__2107(second__2067(exp__2108), exp__2108));
last_setter__2062(exp__2108, transform_statementsN__2107(last__2063(exp__2108), env__2109));
return exp__2108}
else
if ($T(binaryEE__2061(B2099__2110, "%set")))
{
var ____2122 = exp__2108[0],
identifier__2123 = exp__2108[1],
value__2124 = exp__2108[2],
valueT__2125 = transform_statementsN__2107(value__2124, env__2109),
definition_name__2126 = symbol_name__2069(get__2104(env__2109, "original-identifier", symbol_name__2069(identifier__2123))),
B2127;
if ($T(definition_name__2126))
{B2127 = memberQ__2085(definition_name__2126, get__2104(env__2109, "module", "exports"))}
else
B2127 = false;
if ($T(B2127))
{
first_setter__2105(exp__2108, B2078);
second_setter__2066(exp__2108, [B2128, identifier__2123, valueT__2125]);
third_setter__2064(exp__2108, [B2128, [B2129, [B2098, "exports"], definition_name__2126], identifier__2123])}
else
third_setter__2064(exp__2108, valueT__2125);
return exp__2108}
else
if ($T(binaryEE__2061(B2099__2110, "%define")))
{return [B2130, [last__2063(exp__2108), false]]}
else
return map__2102(rcurry__2103(transform_statementsN__2107, env__2109), exp__2108)}
else
return exp__2108}, false);
exports["transform-statements!"] = transform_statementsN__2106}
