{
var B3014;
false;
B3014 = require("ralph/core")}
{
var B3016;
false;
B3016 = require("ralph/compiler/utilities")}
{
var ralphScoreCCreduce = B3014.reduce,
ralphScoreCCfirst = B3014.first,
Mmake_function__3018 = B3014["%make-function"],
reduce1__3019 = B3014.reduce1,
concatenate__3020 = B3014.concatenate,
map__3021 = B3014.map,
beginQ__3022 = B3016["begin?"],
rest__3023 = B3014.rest,
flatten_statementsN__3024,
flatten_begins__3025;
false;
flatten_begins__3025 = Mmake_function__3018("flatten_begins", function flatten_begins__3026 (exps__3027)
{
var values__3032 = map__3021(function B3017__3028 (exp__3029)
{
var flattened__3030 = flatten_statementsN__3024(exp__3029);
if ($T(beginQ__3022(flattened__3030)))
{return rest__3023(flattened__3030)}
else
return [flattened__3030]}, exps__3027),
function__3031 = concatenate__3020;
return ralphScoreCCreduce(function__3031, ralphScoreCCfirst(values__3032), rest__3023(values__3032))}, false)}
{
var ralphScoreCCdec = B3014.dec,
ralphScoreCCsize = B3014.size,
ralphScoreCCtrueQ = B3014["true?"],
varQ__3035 = B3016["var?"],
do__3036 = B3014["do"],
push_last__3037 = B3014["push-last"],
last__3038 = B3014.last,
binaryEE__3039 = B3014["binary=="],
second_setter__3040 = B3014["second-setter"],
third__3041 = B3014.third,
second__3042 = B3014.second,
setQ__3043 = B3016["set?"],
not__3044 = B3014.not,
emptyQ__3045 = B3014["empty?"],
flatten_varsN__3046;
false;
flatten_varsN__3046 = Mmake_function__3018("flatten_varsN", function flatten_varsN__3047 (exps__3048)
{return ralphScoreCCreduce(function B3033__3049 (result__3050, exp__3051)
{
var value__3059 = emptyQ__3045(result__3050),
B3070 = !(ralphScoreCCtrueQ(value__3059)),
previous__3052;
if ($T(B3070))
{
var array__3060 = result__3050;
previous__3052 = array__3060[ralphScoreCCdec(ralphScoreCCsize(array__3060), 1)]}
else
previous__3052 = false;
var previous_varQ__3053;
if ($T(previous__3052))
{previous_varQ__3053 = varQ__3035(previous__3052)}
else
previous_varQ__3053 = false;
var B3071;
if ($T(previous_varQ__3053))
{B3071 = varQ__3035(exp__3051)}
else
B3071 = false;
if ($T(B3071))
{
var B3072 = function B3034__3054 (binding__3055)
{
var value__3062 = binding__3055,
array__3061 = last__3038(result__3050);
array__3061.push(value__3062);
return array__3061},
sequence__3063 = exp__3051,
B3073 = sequence__3063.slice(1);
do__3036(B3072, B3073);
return result__3050}
else
{
var mergeQ__3056;
if ($T(previous_varQ__3053))
{mergeQ__3056 = setQ__3043(exp__3051)}
else
mergeQ__3056 = false;
var binding__3057;
if ($T(mergeQ__3056))
{
var array__3064 = last__3038(result__3050);
binding__3057 = array__3064[ralphScoreCCdec(ralphScoreCCsize(array__3064), 1)]}
else
binding__3057 = false;
var identifier__3058;
if ($T(mergeQ__3056))
{
var sequence__3065 = exp__3051;
identifier__3058 = sequence__3065[1]}
else
identifier__3058 = false;
var object2__3067 = identifier__3058,
object1__3066 = ralphScoreCCfirst(binding__3057),
B3074 = (object1__3066 === object2__3067);
if ($T(B3074))
{
var value__3069 = third__3041(exp__3051),
array__3068 = binding__3057;
array__3068[1] = value__3069;
return result__3050}
else
return concatenate__3020(result__3050, [exp__3051])}}, [], exps__3048)}, false)}
{
var B3123 = $S("%begin", "ralph/core"),
B3124 = $S("%var", "ralph/core"),
instanceQ__3078 = B3014["instance?"],
LarrayG__3079 = B3014["<array>"],
last_setter__3080 = B3014["last-setter"],
maybe_begin__3081 = B3016["maybe-begin"],
third_setter__3082 = B3014["third-setter"],
symbol_name__3083 = B3014["symbol-name"];
false;
flatten_statementsN__3024 = Mmake_function__3018("flatten_statementsN", function flatten_statementsN__3084 (exp__3085)
{B3125:while(true){
if ($T(instanceQ__3078(exp__3085, LarrayG__3079)))
{
var B3075__3086 = symbol_name__3083(ralphScoreCCfirst(exp__3085)),
object2__3095 = "%method",
object1__3094 = B3075__3086,
B3076__3087 = (object1__3094 === object2__3095),
B3118;
if ($T(B3076__3087))
{B3118 = B3076__3087}
else
{
var object2__3097 = "%while",
object1__3096 = B3075__3086,
B3077__3088 = (object1__3096 === object2__3097);
if ($T(B3077__3088))
{B3118 = B3077__3088}
else
{
var object2__3099 = "%set",
object1__3098 = B3075__3086;
B3118 = (object1__3098 === object2__3099)}};
if ($T(B3118))
{
var value__3101 = flatten_statementsN__3084(last__3038(exp__3085)),
array__3100 = exp__3085;
array__3100[ralphScoreCCdec(ralphScoreCCsize(array__3100), 1)] = value__3101;
return exp__3085}
else
{
var object2__3103 = "%begin",
object1__3102 = B3075__3086,
B3119 = (object1__3102 === object2__3103);
if ($T(B3119))
{
var ____3089 = exp__3085[0],
exps__3090 = $SL.call(exp__3085, 1);
return maybe_begin__3081(flatten_varsN__3046(flatten_begins__3025(exps__3090)))}
else
{
var object2__3105 = "%bind",
object1__3104 = B3075__3086,
B3120 = (object1__3104 === object2__3105);
if ($T(B3120))
{
var ____3091 = exp__3085[0],
binding__3092 = exp__3085[1],
body__3093 = exp__3085[2];
arguments = [[B3123, [B3124, binding__3092], body__3093]];
exp__3085 = arguments[0];
continue B3125}
else
{
var object2__3107 = "%if",
object1__3106 = B3075__3086,
B3121 = (object1__3106 === object2__3107);
if ($T(B3121))
{
var value__3109 = flatten_statementsN__3084(third__3041(exp__3085)),
array__3108 = exp__3085;
array__3108[2] = value__3109;
var value__3111 = flatten_statementsN__3084(last__3038(exp__3085)),
array__3110 = exp__3085;
array__3110[ralphScoreCCdec(ralphScoreCCsize(array__3110), 1)] = value__3111;
return exp__3085}
else
{
var object2__3113 = "%try",
object1__3112 = B3075__3086,
B3122 = (object1__3112 === object2__3113);
if ($T(B3122))
{
var value__3115 = flatten_statementsN__3084(second__3042(exp__3085)),
array__3114 = exp__3085;
array__3114[1] = value__3115;
var value__3117 = flatten_statementsN__3084(last__3038(exp__3085)),
array__3116 = exp__3085;
array__3116[ralphScoreCCdec(ralphScoreCCsize(array__3116), 1)] = value__3117;
return exp__3085}
else
return map__3021(flatten_statementsN__3084, exp__3085)}}}}}
else
return exp__3085;
break}}, false);
exports["flatten-statements!"] = flatten_statementsN__3024}
