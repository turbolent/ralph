{
var B1980;
false;
B1980 = require("ralph/core")}
{
var B1982;
false;
B1982 = require("ralph/compiler/utilities")}
{
var Mmake_function__2000 = B1980["%make-function"],
instanceQ__2001 = B1980["instance?"],
LarrayG__2002 = B1980["<array>"],
not__2003 = B1980.not,
emptyQ__2004 = B1980["empty?"],
binaryEE__2005 = B1980["binary=="],
set_subtractN__2006 = B1980["set-subtract!"],
as_set__2007 = B1980["as-set"],
cons__2008 = B1980.cons,
set_unionN__2009 = B1980["set-union!"],
reduce1__2010 = B1980.reduce1,
map__2011 = B1980.map,
rcurry__2012 = B1980.rcurry,
rest__2013 = B1980.rest,
reduce__2014 = B1980.reduce,
concatenate__2015 = B1980.concatenate,
LsymbolG__2016 = B1980["<symbol>"],
symbol_name__2017 = B1980["symbol-name"],
first__2018 = B1980.first,
get__2019 = B1980.get,
signal__2020 = B1980.signal,
description__2021 = B1980.description,
find_free_variables__2022;
false;
find_free_variables__2022 = Mmake_function__2000("find_free_variables", function find_free_variables__2023 (exp__2024, env__2025)
{
var B2057;
if ($T(instanceQ__2001(exp__2024, LarrayG__2002)))
{B2057 = not__2003(emptyQ__2004(exp__2024))}
else
B2057 = false;
if ($T(B2057))
{
var head__2026 = first__2018(exp__2024),
name__2027;
if ($T(instanceQ__2001(head__2026, LsymbolG__2016)))
{name__2027 = symbol_name__2017(head__2026)}
else
name__2027 = false;
var B1983__2028 = name__2027;
if ($T(binaryEE__2005(B1983__2028, "%method")))
{
var ____2029 = exp__2024[0],
name__2030 = exp__2024[1],
arguments__2031 = exp__2024[2],
body__2032 = exp__2024[3];
return set_subtractN__2006(find_free_variables__2023(body__2032, env__2025), as_set__2007(cons__2008(name__2030, arguments__2031)))}
else
if ($T(binaryEE__2005(B1983__2028, "%bind")))
{
var ____2033 = exp__2024[0],
B1984__2034 = exp__2024[1],
var__2035 = B1984__2034[0],
value__2036 = B1984__2034[1],
body__2037 = exp__2024[2];
return set_unionN__2009(set_subtractN__2006(find_free_variables__2023(body__2037, env__2025), as_set__2007([var__2035])), find_free_variables__2023(value__2036, env__2025))}
else
if ($T(binaryEE__2005(B1983__2028, "%begin")))
{return reduce1__2010(set_unionN__2009, map__2011(rcurry__2012(find_free_variables__2023, env__2025), rest__2013(exp__2024)))}
else
if ($T(binaryEE__2005(B1983__2028, "%try")))
{
var ____2038 = exp__2024[0],
e1__2039 = exp__2024[1],
v__2040 = exp__2024[2],
e2__2041 = exp__2024[3];
return set_subtractN__2006(set_unionN__2009(as_set__2007(find_free_variables__2023(e1__2039, env__2025)), as_set__2007(find_free_variables__2023(e2__2041, env__2025))), as_set__2007([v__2040]))}
else
{
var B1985__2042 = binaryEE__2005(B1983__2028, "%set"),
B2058;
if ($T(B1985__2042))
{B2058 = B1985__2042}
else
{
var B1986__2043 = binaryEE__2005(B1983__2028, "%if");
if ($T(B1986__2043))
{B2058 = B1986__2043}
else
{
var B1987__2044 = binaryEE__2005(B1983__2028, "%while");
if ($T(B1987__2044))
{B2058 = B1987__2044}
else
{
var B1988__2045 = binaryEE__2005(B1983__2028, "%array");
if ($T(B1988__2045))
{B2058 = B1988__2045}
else
{
var B1989__2046 = binaryEE__2005(B1983__2028, "%object");
if ($T(B1989__2046))
{B2058 = B1989__2046}
else
{
var B1990__2047 = binaryEE__2005(B1983__2028, "%infix");
if ($T(B1990__2047))
{B2058 = B1990__2047}
else
{
var B1991__2048 = binaryEE__2005(B1983__2028, "%get-property");
if ($T(B1991__2048))
{B2058 = B1991__2048}
else
{
var B1992__2049 = binaryEE__2005(B1983__2028, "%native-call");
if ($T(B1992__2049))
{B2058 = B1992__2049}
else
{
var B1993__2050 = binaryEE__2005(B1983__2028, "%return");
if ($T(B1993__2050))
{B2058 = B1993__2050}
else
{
var B1994__2051 = binaryEE__2005(B1983__2028, "%plus");
if ($T(B1994__2051))
{B2058 = B1994__2051}
else
{
var B1995__2052 = binaryEE__2005(B1983__2028, "%minus");
if ($T(B1995__2052))
{B2058 = B1995__2052}
else
{
var B1996__2053 = binaryEE__2005(B1983__2028, "%times");
if ($T(B1996__2053))
{B2058 = B1996__2053}
else
B2058 = binaryEE__2005(B1983__2028, "%divide")}}}}}}}}}}};
if ($T(B2058))
{return as_set__2007(reduce__2014(concatenate__2015, [], map__2011(rcurry__2012(find_free_variables__2023, env__2025), rest__2013(exp__2024))))}
else
{
var B1997__2054 = binaryEE__2005(B1983__2028, "%native"),
B2059;
if ($T(B1997__2054))
{B2059 = B1997__2054}
else
{
var B1998__2055 = binaryEE__2005(B1983__2028, "%native-name");
if ($T(B1998__2055))
{B2059 = B1998__2055}
else
{
var B1999__2056 = binaryEE__2005(B1983__2028, "%define");
if ($T(B1999__2056))
{B2059 = B1999__2056}
else
B2059 = binaryEE__2005(B1983__2028, "%symbol")}};
if ($T(B2059))
{return as_set__2007([])}
else
return reduce1__2010(set_unionN__2009, map__2011(rcurry__2012(find_free_variables__2023, env__2025), exp__2024))}}}
else
if ($T(instanceQ__2001(exp__2024, LsymbolG__2016)))
{
if ($T(not__2003(get__2019(exp__2024, "module"))))
{signal__2020(concatenate__2015("NOT QUALIFIED: ", description__2021(exp__2024)))};
return as_set__2007([exp__2024])}
else
return as_set__2007([])}, false);
exports["find-free-variables"] = find_free_variables__2022}
