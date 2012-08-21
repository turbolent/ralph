var B1040 = require("ralph/core")
var B1042 = require("ralph/compiler/utilities")
var B1065 = $S("%begin"),
wrap_valueN__1059,
B1045 = B1040["%make-function"],
B1046 = B1040["instance?"],
B1047 = B1040["<array>"],
B1048 = B1040["binary=="],
B1049 = B1040["last-setter"],
B1050 = B1040.last,
B1051 = B1040["third-setter"],
B1052 = B1040.third,
B1053 = B1040["second-setter"],
B1054 = B1040.second,
B1055 = B1040.concatenate,
B1056 = B1040["symbol-name"],
B1057 = B1040.first,
B1058 = B1045("wrap_valueN", function wrap_valueN__1059 (exp__1060, wrapper__1061)
{if ($T(B1046(exp__1060, B1047)))
{
var B1062 = B1056(B1057(exp__1060)),
B1063 = B1048(B1062, "%begin"),
B1064;
if ($T(B1063))
B1064 = B1063
else
B1064 = B1048(B1062, "%bind");
if ($T(B1064))
{
B1049(exp__1060, wrap_valueN__1059(B1050(exp__1060), wrapper__1061));
return exp__1060}
else
if ($T(B1048(B1062, "%if")))
{
B1051(exp__1060, wrap_valueN__1059(B1052(exp__1060), wrapper__1061));
B1049(exp__1060, wrap_valueN__1059(B1050(exp__1060), wrapper__1061));
return exp__1060}
else
if ($T(B1048(B1062, "%while")))
return [B1065, exp__1060, wrap_valueN__1059(false, wrapper__1061)]
else
if ($T(B1048(B1062, "%try")))
{
B1053(exp__1060, wrap_valueN__1059(B1054(exp__1060), wrapper__1061));
B1049(exp__1060, wrap_valueN__1059(B1050(exp__1060), wrapper__1061));
return exp__1060}
else
return B1055(wrapper__1061, [exp__1060])}
else
return B1055(wrapper__1061, [exp__1060])}, false)
var B1069 = $S("%return"),
B1066 = B1045("add_explicit_return", function add_explicit_return__1067 (exp__1068)
{return B1058(exp__1068, [B1069])}, false)
var B1076 = $S("%if"),
B1077 = $S("%while"),
B1078 = $S("%bind"),
B1079 = $S("%try"),
B1070 = B1040.not,
B1071 = B1040["empty?"],
B1072 = B1040["member?"],
B1073 = B1045("statementQ", function statementQ__1074 (exp__1075)
{if ($T(B1046(exp__1075, B1047)))
if ($T(B1070(B1071(exp__1075))))
return B1072(B1057(exp__1075), [B1076, B1077, B1065, B1078, B1079])}, false)
var B1085 = $S("%native"),
B1080 = B1040["<boolean>"],
B1081 = B1040["true?"],
B1082 = B1045("add_explicit_true", function add_explicit_true__1083 (exp__1084)
{if ($T(B1046(exp__1084, B1080)))
return B1081(exp__1084)
else
return [[B1085, "$T"], exp__1084]}, false)
{
var B1115 = $S("%set"),
B1116 = $S("%get-property"),
B1117 = $S("%var"),
transform_statementsN__1094,
B1088 = B1042["maybe-begin"],
B1089 = B1040.map,
B1090 = B1040.rcurry,
B1091 = B1040.get,
B1092 = B1040["first-setter"],
B1093 = B1045("transform_statementsN", function transform_statementsN__1094 (exp__1095, env__1096)
{if ($T(B1046(exp__1095, B1047)))
{
var B1097 = B1056(B1057(exp__1095));
if ($T(B1048(B1097, "%method")))
{
B1049(exp__1095, B1066(transform_statementsN__1094(B1050(exp__1095), env__1096)));
return exp__1095}
else
if ($T(B1048(B1097, "%begin")))
{
var ____1098 = exp__1095[0],
exps__1099 = $SL.call(exp__1095, 1);
return B1088(B1089(B1090(transform_statementsN__1094, env__1096), exps__1099))}
else
if ($T(B1048(B1097, "%bind")))
{
var ____1100 = exp__1095[0],
B1101 = exp__1095[1],
var__1102 = B1101[0],
value__1103 = B1101[1],
body__1104 = exp__1095[2];
if ($T(B1073(value__1103)))
return [B1078, [var__1102, false], [B1065, B1058(transform_statementsN__1094(value__1103, env__1096), [B1115, var__1102]), transform_statementsN__1094(body__1104, env__1096)]]
else
return [B1078, [var__1102, transform_statementsN__1094(value__1103, env__1096)], transform_statementsN__1094(body__1104, env__1096)]}
else
if ($T(B1048(B1097, "%if")))
{
var ____1105 = exp__1095[0],
test__1106 = exp__1095[1],
then__1107 = exp__1095[2],
else__1108 = exp__1095[3];
return [B1076, B1082(test__1106), transform_statementsN__1094(then__1107, env__1096), transform_statementsN__1094(else__1108, env__1096)]}
else
if ($T(B1048(B1097, "%while")))
{
B1053(exp__1095, B1082(B1054(exp__1095)));
B1051(exp__1095, transform_statementsN__1094(B1052(exp__1095), env__1096));
return exp__1095}
else
if ($T(B1048(B1097, "%try")))
{
B1053(exp__1095, transform_statementsN__1094(B1054(exp__1095), exp__1095));
B1049(exp__1095, transform_statementsN__1094(B1050(exp__1095), env__1096));
return exp__1095}
else
if ($T(B1048(B1097, "%set")))
{
var ____1109 = exp__1095[0],
identifier__1110 = exp__1095[1],
value__1111 = exp__1095[2],
valueT__1112 = transform_statementsN__1094(value__1111, env__1096),
definition_name__1113 = B1091(env__1096, "definition-names", B1056(identifier__1110)),
B1114;
if ($T(definition_name__1113))
B1114 = B1072(definition_name__1113, B1091(env__1096, "module", "exports"))
else
B1114 = false;
if ($T(B1114))
{
B1092(exp__1095, B1065);
B1053(exp__1095, [B1115, identifier__1110, valueT__1112]);
B1051(exp__1095, [B1115, [B1116, [B1085, "exports"], definition_name__1113], identifier__1110])}
else
B1051(exp__1095, valueT__1112);
return exp__1095}
else
if ($T(B1048(B1097, "%define")))
return [B1117, [B1050(exp__1095), false]]
else
return B1089(B1090(transform_statementsN__1094, env__1096), exp__1095)}
else
return exp__1095}, false);
exports["transform-statements!"] = B1093}
