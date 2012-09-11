{
var B2860;
false;
B2860 = require("ralph/core")}
{
var B2863,
B2864;
false;
B2863 = require("ralph/compiler/utilities");
false;
B2864 = require("ralph/compiler/free-variables")}
{
var B2996 = $S("%if", "ralph/core"),
B2997 = $S("%native", "ralph/core"),
B2998 = $S("%begin", "ralph/core"),
B2999 = $S("%set", "ralph/core"),
B3000 = $S("%get-property", "ralph/core"),
B3001 = $S("%all-arguments"),
B3002 = $S("%array", "ralph/core"),
ralphScoreCCdec = B2860.dec,
ralphScoreCCtrueQ = B2860["true?"],
Mmake_function__2873 = B2860["%make-function"],
instanceQ__2874 = B2860["instance?"],
LarrayG__2875 = B2860["<array>"],
binaryEE__2876 = B2860["binary=="],
last_setter__2877 = B2860["last-setter"],
identity__2878 = B2860.identity,
get__2879 = B2860.get,
symbol_name__2880 = B2860["symbol-name"],
second__2881 = B2860.second,
last__2882 = B2860.last,
second_setter__2883 = B2860["second-setter"],
concatenate__2884 = B2860.concatenate,
first__2885 = B2860.first,
map__2886 = B2860.map,
rcurry__2887 = B2860.rcurry,
rest__2888 = B2860.rest,
expressionQ__2889 = B2863["expression?"],
not__2890 = B2860.not,
get_setter__2891 = B2860["get-setter"],
GE__2892 = B2860[">="],
push_last__2893 = B2860["push-last"],
element__2894 = B2860.element,
size__2895 = B2860.size,
close_free_variables__2896,
generate_symbol__2897 = B2863["generate-symbol"],
optimize_tail_callsN__2898;
false;
optimize_tail_callsN__2898 = Mmake_function__2873("optimize_tail_callsN", function optimize_tail_callsN__2899 (exp__2900, env__2901)
{if ($T(instanceQ__2874(exp__2900, LarrayG__2875)))
{
var sequence__2934 = exp__2900,
B2978 = sequence__2934[0],
B2865__2902 = symbol_name__2880(B2978),
object2__2936 = "%method",
object1__2935 = B2865__2902,
B2979 = (object1__2935 === object2__2936);
if ($T(B2979))
{
var last_method__2903 = get__2879(env__2901, "current-method");
env__2901["current-method"] = exp__2900;
var array__2937 = exp__2900,
B2980 = array__2937[ralphScoreCCdec(size__2895(array__2937), 1)],
result__2904 = optimize_tail_callsN__2899(B2980, env__2901),
sequence__2938 = exp__2900,
B2981 = sequence__2938[1],
name__2905 = symbol_name__2880(B2981),
B2866__2906 = get__2879(env__2901, "tco-wrappers", name__2905),
wrapper__2907;
if ($T(B2866__2906))
{wrapper__2907 = B2866__2906}
else
wrapper__2907 = identity__2878;
var value__2940 = wrapper__2907(result__2904),
array__2939 = exp__2900;
array__2939[ralphScoreCCdec(size__2895(array__2939), 1)] = value__2940;
env__2901["current-method"] = last_method__2903;
return exp__2900}
else
{
var object2__2942 = "%bind",
object1__2941 = B2865__2902,
B2982 = (object1__2941 === object2__2942);
if ($T(B2982))
{
var ____2908 = exp__2900[0],
binding__2909 = exp__2900[1],
body__2910 = exp__2900[2],
value__2944 = optimize_tail_callsN__2899(second__2881(binding__2909), env__2901),
array__2943 = binding__2909;
array__2943[1] = value__2944;
var value__2946 = optimize_tail_callsN__2899(body__2910, env__2901),
array__2945 = exp__2900;
array__2945[ralphScoreCCdec(size__2895(array__2945), 1)] = value__2946;
return exp__2900}
else
{
var object2__2948 = "%begin",
object1__2947 = B2865__2902,
B2867__2911 = (object1__2947 === object2__2948),
B2983;
if ($T(B2867__2911))
{B2983 = B2867__2911}
else
{
var object2__2950 = "%while",
object1__2949 = B2865__2902;
B2983 = (object1__2949 === object2__2950)};
if ($T(B2983))
{
var sequence__2951 = exp__2900,
B2984 = sequence__2951[0],
B2985 = [B2984],
B2986 = rcurry__2887(optimize_tail_callsN__2899, env__2901),
sequence__2952 = exp__2900,
B2987 = sequence__2952.slice(1),
B2988 = map__2886(B2986, B2987);
return concatenate__2884(B2985, B2988)}
else
{
var object2__2954 = "%set",
object1__2953 = B2865__2902,
B2989 = (object1__2953 === object2__2954);
if ($T(B2989))
{
var value__2956 = optimize_tail_callsN__2899(last__2882(exp__2900), env__2901),
array__2955 = exp__2900;
array__2955[ralphScoreCCdec(size__2895(array__2955), 1)] = value__2956;
return exp__2900}
else
{
var object2__2958 = "%if",
object1__2957 = B2865__2902,
B2990 = (object1__2957 === object2__2958);
if ($T(B2990))
{
var ____2912 = exp__2900[0],
test__2913 = exp__2900[1],
then__2914 = exp__2900[2],
else__2915 = exp__2900[3];
return [B2996, test__2913, optimize_tail_callsN__2899(then__2914, env__2901), optimize_tail_callsN__2899(else__2915, env__2901)]}
else
{
var object2__2960 = "%try",
object1__2959 = B2865__2902,
B2991 = (object1__2959 === object2__2960);
if ($T(B2991))
{
var value__2962 = optimize_tail_callsN__2899(second__2881(exp__2900), env__2901),
array__2961 = exp__2900;
array__2961[1] = value__2962;
var value__2964 = optimize_tail_callsN__2899(last__2882(exp__2900), env__2901),
array__2963 = exp__2900;
array__2963[ralphScoreCCdec(size__2895(array__2963), 1)] = value__2964;
return exp__2900}
else
{
var object2__2966 = "%return",
object1__2965 = B2865__2902,
B2992 = (object1__2965 === object2__2966);
if ($T(B2992))
{
var B2868__2916 = env__2901,
current_method__2917 = B2868__2916["current-method"],
____2918 = current_method__2917[0],
method_name__2919 = current_method__2917[1],
arguments__2920 = current_method__2917[2],
body__2921 = current_method__2917[3],
sequence__2967 = exp__2900,
value__2922 = sequence__2967[1],
name__2923 = symbol_name__2880(method_name__2919),
B2993;
if ($T(expressionQ__2889(value__2922)))
{
var object2__2969 = method_name__2919,
object1__2968 = first__2885(value__2922);
B2993 = (object1__2968 === object2__2969)}
else
B2993 = false;
if ($T(B2993))
{
var B2869__2924 = get__2879(env__2901, "tco-labels", name__2923),
label__2925;
if ($T(B2869__2924))
{label__2925 = B2869__2924}
else
label__2925 = get_setter__2891(env__2901, "tco-labels", name__2923, generate_symbol__2897(env__2901));
var sequence__2970 = value__2922,
new_values__2926 = sequence__2970.slice(1),
value__2971 = get__2879(env__2901, "tco-wrappers", name__2923),
B2994 = !(ralphScoreCCtrueQ(value__2971));
if ($T(B2994))
{get_setter__2891(env__2901, "tco-wrappers", name__2923, function B2870__2927 (exp__2928)
{return [B2997, label__2925, ":while(true)", [B2998, exp__2928, [B2997, "break"]]]})};
var assignments__2929 = [],
object__2972 = arguments__2920,
B2871__2930 = ((object__2972 || false).length || 0),
i__2931 = 0;
while (true)
{
var value__2973 = GE__2892(i__2931, B2871__2930),
B2995 = !(ralphScoreCCtrueQ(value__2973));
if ($T(B2995))
{
(function B2872__2932 (i__2933)
{
var value__2975 = [B2999, element__2894(arguments__2920, i__2933), [B3000, B3001, i__2933]],
array__2974 = assignments__2929;
array__2974.push(value__2975);
return array__2974})(i__2931);
i__2931 = (i__2931 + 1)}
else
break};
false;
return concatenate__2884([B2998, [B2999, B3001, close_free_variables__2896(concatenate__2884([B3002], new_values__2926), env__2901)]], assignments__2929, [[B2997, "continue ", label__2925]])}
else
{
var value__2977 = optimize_tail_callsN__2899(last__2882(exp__2900), env__2901),
array__2976 = exp__2900;
array__2976[ralphScoreCCdec(size__2895(array__2976), 1)] = value__2977;
return exp__2900}}
else
return map__2886(rcurry__2887(optimize_tail_callsN__2899, env__2901), exp__2900)}}}}}}}
else
return exp__2900}, false);
exports["optimize-tail-calls!"] = optimize_tail_callsN__2898}
{
var B3010 = $S("%method", "ralph/core"),
B3011 = $S("%return", "ralph/core"),
methodQ__3003 = B2863["method?"],
remove_defined_identifiers__3004 = B2863["remove-defined-identifiers"],
find_free_variables__3005 = B2864["find-free-variables"];
false;
close_free_variables__2896 = Mmake_function__2873("close_free_variables", function close_free_variables__3006 (exp__3007, env__3008)
{if ($T(instanceQ__2874(exp__3007, LarrayG__2875)))
{if ($T(methodQ__3003(exp__3007)))
{
var variables__3009 = remove_defined_identifiers__3004(find_free_variables__3005(exp__3007, env__3008), env__3008);
return concatenate__2884([[B3010, generate_symbol__2897(), variables__3009, [B3011, exp__3007]]], variables__3009)}
else
return map__2886(rcurry__2887(close_free_variables__3006, env__3008), exp__3007)}
else
return exp__3007}, false)}
