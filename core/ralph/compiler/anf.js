var B891 = require("ralph/core")
var B893 = require("ralph/compiler/utilities")
var B894 = B891["%make-function"],
B895 = B891["any?"],
B896 = B891.curry,
B897 = B891["instance?"],
B898 = B891["<number>"],
B899 = B891["<boolean>"],
B900 = B891["<string>"],
B901 = B891["<symbol>"],
B902 = B891["<keyword>"],
B903 = B894("atomicQ", function atomicQ__904 (expression__905)
{return B895(B896(B897, expression__905), [B898, B899, B900, B901, B902])}, false)
var contains_statementsQ__919,
B911 = B891["<array>"],
B912 = B891.not,
B913 = B891["empty?"],
B914 = B891["binary=="],
B915 = B891.last,
B916 = B891["symbol-name"],
B917 = B891.first,
B918 = B894("contains_statementsQ", function contains_statementsQ__919 (exp__920)
{B928:while(true){
var B926;
if ($T(B897(exp__920, B911)))
B926 = B912(B913(exp__920))
else
B926 = false;
if ($T(B926))
{
var B921 = B916(B917(exp__920)),
B922 = B914(B921, "%begin"),
B927;
if ($T(B922))
B927 = B922
else
{
var B923 = B914(B921, "%if");
if ($T(B923))
B927 = B923
else
{
var B924 = B914(B921, "%while");
if ($T(B924))
B927 = B924
else
{
var B925 = B914(B921, "%bind");
if ($T(B925))
B927 = B925
else
B927 = B914(B921, "%try")}}};
if ($T(B927))
return true
else
if ($T(B914(B921, "%set")))
{
arguments = [B915(exp__920)];
exp__920 = arguments[0];
continue B928}
else
if ($T(B914(B921, "%method")))
return false
else
return B895(contains_statementsQ__919, exp__920)};
break}}, false)
{
var B929,
B930 = B891.identity,
B931 = B894("normalize_term", function normalize_term__932 (expression__933)
{return B929(expression__933, B930)}, false);
exports["normalize-term"] = B931}
{
var B991 = $S("%method"),
B992 = $S("%begin"),
B993 = $S("%bind"),
B994 = $S("%if"),
B995 = $S("%while"),
B996 = $S("%native"),
B997 = $S("%try"),
B998 = $S("%set"),
B999 = $S("%array"),
B1000 = $S("%object"),
B1001 = $S("%get-property"),
B1002 = $S("%infix"),
B1003 = $S("%native-call"),
B1004 = $S("%native-name"),
B1005 = $S("%plus"),
B1006 = $S("%minus"),
B1007 = $S("%times"),
B1008 = $S("%divide"),
normalize__948,
B941 = B891.concatenate,
B942,
B943,
B944 = B893["expression?"],
B945 = B891["member?"],
B946 = B891.map,
B947 = B891.rest;
B929 = B894("normalize", function normalize__948 (exp__949, k__950)
{B1009:while(true){
var B987;
if ($T(B897(exp__949, B911)))
B987 = B912(B913(exp__949))
else
B987 = false;
if ($T(B987))
{
var B951 = B916(B917(exp__949));
if ($T(B914(B951, "%method")))
{
var ____952 = exp__949[0],
name__953 = exp__949[1],
arguments__954 = exp__949[2],
body__955 = exp__949[3];
return k__950([B991, name__953, arguments__954, B931(body__955)])}
else
if ($T(B914(B951, "%begin")))
{
var ____956 = exp__949[0],
exp1__957 = exp__949[1],
eT__958 = $SL.call(exp__949, 2);
if ($T(B913(eT__958)))
{
arguments = [exp1__957, k__950];
exp__949 = arguments[0];
k__950 = arguments[1];
continue B1009}
else
{
arguments = [exp1__957, (function B1010 (B992, B941, eT__958, k__950)
{return function B959 (aexp1__960)
{return [B992, aexp1__960, normalize__948(B941([B992], eT__958), k__950)]}})(B992, B941, eT__958, k__950)];
exp__949 = arguments[0];
k__950 = arguments[1];
continue B1009}}
else
if ($T(B914(B951, "%bind")))
{
var ____961 = exp__949[0],
B962 = exp__949[1],
var__963 = B962[0],
value__964 = B962[1],
body__965 = exp__949[2];
arguments = [value__964, (function B1011 (B993, var__963, body__965, k__950)
{return function B966 (avalue__967)
{return [B993, [var__963, avalue__967], normalize__948(body__965, k__950)]}})(B993, var__963, body__965, k__950)];
exp__949 = arguments[0];
k__950 = arguments[1];
continue B1009}
else
if ($T(B914(B951, "%if")))
{
var ____968 = exp__949[0],
test__969 = exp__949[1],
then__970 = exp__949[2],
else__971 = exp__949[3];
return B942(test__969, function B972 (atest__973)
{return k__950([B994, atest__973, B931(then__970), B931(else__971)])})}
else
if ($T(B914(B951, "%while")))
{
var ____974 = exp__949[0],
test__975 = exp__949[1],
body__976 = exp__949[2],
B988;
if ($T(B918(test__975)))
B988 = [B995, true, [B992, B931([B994, test__975, B931(body__976), [B996, "break"], false])]]
else
B988 = [B995, B931(test__975), B931(body__976)];
return k__950(B988)}
else
if ($T(B914(B951, "%try")))
{
var ____977 = exp__949[0],
body__978 = exp__949[1],
var__979 = exp__949[2],
catch__980 = exp__949[3];
return k__950([B997, B931(body__978), var__979, B931(catch__980)])}
else
if ($T(B914(B951, "%set")))
{
var ____981 = exp__949[0],
var__982 = exp__949[1],
value__983 = exp__949[2];
return B942(value__983, function B984 (avalue__985)
{return k__950([B998, var__982, avalue__985])})}
else
{
var B986 = B914(B951, "%define"),
B989;
if ($T(B986))
B989 = B986
else
B989 = B914(B951, "%symbol");
if ($T(B989))
return k__950(exp__949)
else
if ($T(B918(exp__949)))
return B943(exp__949, k__950)
else
{
var B990;
if ($T(B944(exp__949)))
B990 = B945(B917(exp__949), [B999, B1000, B1001, B1002, B996, B1003, B1004, B1005, B1006, B1007, B1008])
else
B990 = false;
if ($T(B990))
return k__950(B941([B917(exp__949)], B946(B931, B947(exp__949))))
else
return k__950(B946(B931, exp__949))}}}
else
return k__950(exp__949);
break}}, false)}
{
var B1012;
B942 = B894("normalize_value", function normalize_value__1013 (exp__1014, k__1015)
{if ($T(B918(exp__1014)))
return B1012(exp__1014, k__1015)
else
{
var B1016;
if ($T(B897(exp__1014, B911)))
B1016 = B946(B931, exp__1014)
else
B1016 = exp__1014;
return k__1015(B1016)}}, false)}
{
var B1018 = B893["generate-symbol"];
B1012 = B894("normalizeT", function normalizeT__1019 (exp__1020, k__1021)
{return B929(exp__1020, function B1022 (aexp__1023)
{if ($T(B903(aexp__1023)))
return k__1021(aexp__1023)
else
{
var t__1024 = B1018();
return [B993, [t__1024, aexp__1023], k__1021(t__1024)]}})}, false)}
var B1025 = B894("normalizeTT", function normalizeTT__1026 (expT__1027, k__1028)
{if ($T(B913(expT__1027)))
return k__1028([])
else
return B943(expT__1027, k__1028)}, false)
B943 = B894("normalize_all", function normalize_all__1031 (exp__1032, k__1033)
{return B1012(B917(exp__1032), function B1034 (t__1035)
{return B1025(B947(exp__1032), function B1036 (tT__1037)
{return k__1033(B941([t__1035], tT__1037))})})}, false)
