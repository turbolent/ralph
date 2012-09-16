{
var B1046;
false;
B1046 = require("ralph/core")}
{
var B2673,
B2674,
B2675,
B2676,
B2677,
B2678,
B2679,
B2680,
B2681,
B2682,
B2683,
B2684,
B2685,
B2686;
false;
B2673 = require("ralph/stream");
false;
B2674 = require("ralph/format");
false;
B2675 = require("ralph/date");
false;
B2676 = require("ralph/reader");
false;
B2677 = require("ralph/file-system");
false;
B2678 = require("ralph/compiler/utilities");
false;
B2679 = require("ralph/compiler/alpha");
false;
B2680 = require("ralph/compiler/define-lifting");
false;
B2681 = require("ralph/compiler/free-variables");
false;
B2682 = require("ralph/compiler/anf");
false;
B2683 = require("ralph/compiler/statements");
false;
B2684 = require("ralph/compiler/tco");
false;
B2685 = require("ralph/compiler/flattening");
false;
B2686 = require("ralph/compiler/javascript")}
{
var Mmake_function__2687 = B1046["%make-function"],
symbol__2688 = B1046.symbol,
concatenate__2689 = B1046.concatenate,
symbol_name__2690 = B1046["symbol-name"],
transform_setter_identifier__2691;
false;
transform_setter_identifier__2691 = Mmake_function__2687("transform_setter_identifier", function transform_setter_identifier__2692 (identifier__2693)
{return symbol__2688(concatenate__2689(symbol_name__2690(identifier__2693), "-setter"), false)}, false)}
{
var setter_identifierQ__2694 = B2678["setter-identifier?"],
second__2695 = B1046.second,
identifier_name__2696;
false;
identifier_name__2696 = Mmake_function__2687("identifier_name", function identifier_name__2697 (identifier__2698)
{
var B2699;
if ($T(setter_identifierQ__2694(identifier__2698)))
{B2699 = transform_setter_identifier__2691(second__2695(identifier__2698))}
else
B2699 = identifier__2698;
return symbol_name__2690(B2699)}, false)}
{
var make_object__2700 = B1046["make-object"],
TmodulesT__2701;
false;
TmodulesT__2701 = make_object__2700()}
{
var Mmake_class__2706 = B1046["%make-class"],
LobjectG__2707 = B1046["<object>"],
LmoduleG__2708;
false;
LmoduleG__2708 = Mmake_class__2706(LobjectG__2707, {name:false,
"native?":false,
exports:function B2702__2709 ()
{return []},
imports:function B2703__2710 ()
{return []},
dependencies:function B2704__2711 ()
{return []},
inline:function B2705__2712 ()
{return []}});
exports["<module>"] = LmoduleG__2708}
{
var make_plain_object__2720 = B1046["make-plain-object"],
LenvironmentG__2721;
false;
LenvironmentG__2721 = Mmake_class__2706(LobjectG__2707, {module:false,
macros:function B2713__2722 ()
{return make_plain_object__2720()},
"symbol-macros":function B2714__2723 ()
{return make_plain_object__2720()},
identifiers:function B2715__2724 ()
{return make_object__2700()},
"defined?":function B2716__2725 ()
{return make_object__2700()},
lifted:function B2717__2726 ()
{return make_object__2700()},
"import-identifiers":function B2718__2727 ()
{return make_plain_object__2720()},
timing:function B2719__2728 ()
{return make_object__2700()}});
exports["<environment>"] = LenvironmentG__2721}
{
var Mmake_method__2732 = B1046["%make-method"],
apply__2733 = B1046.apply,
Mnext_method__2734 = B1046["%next-method"],
do__2735 = B1046["do"],
get_setter__2736 = B1046["get-setter"],
get__2737 = B1046.get,
Mkeys__2738 = B1046["%keys"],
initialize__2739;
false;
initialize__2739 = Mmake_method__2732("initialize", function B2729__2740 (env__2741)
{
var rest__2742 = $SL.call(arguments, 1),
B2730__2743 = Mkeys__2738(rest__2742, {module:false}),
module__2744 = B2730__2743.module;
apply__2733(Mnext_method__2734(B2729__2740), env__2741, rest__2742);
return do__2735(function B2731__2745 (name__2746)
{return get_setter__2736(env__2741, "defined?", get__2737(module__2744, "name"), name__2746, true)}, ["%all-arguments", "%this-method"])}, false, LenvironmentG__2721, initialize__2739)}
{
var Tspecial_formsT__2747;
false;
Tspecial_formsT__2747 = make_object__2700()}
{
var expressionQ__2748 = B2678["expression?"],
first__2749 = B1046.first,
find_special_form__2750;
false;
find_special_form__2750 = Mmake_function__2687("find_special_form", function find_special_form__2751 (form__2752, env__2753)
{if ($T(expressionQ__2748(form__2752)))
{return get__2737(Tspecial_formsT__2747, symbol_name__2690(first__2749(form__2752)))}}, false)}
{
var B2781 = $K("message"),
B2782 = $S("%method", "ralph/core"),
not__2756 = B1046.not,
binaryEE__2757 = B1046["binary=="],
signal__2758 = B1046.signal,
make__2759 = B1046.make,
LerrorG__2760 = B1046["<error>"],
format_to_string__2761 = B2674["format-to-string"],
curry__2762 = B1046.curry,
bindN__2763 = B2678["bind!"],
unbindN__2764 = B2678["unbind!"],
macroexpand_all__2765,
map__2766 = B1046.map,
rcurry__2767 = B1046.rcurry,
localize__2768 = B2678.localize,
cons__2769 = B1046.cons;
Tspecial_formsT__2747["%method"] = function B2754__2770 (env__2771, name__2772, arguments__2773, body__2774)
{
var identifiersT__2775 = map__2766(rcurry__2767(localize__2768, env__2771), cons__2769(name__2772, arguments__2773));
do__2735(function B2755__2776 (identifierT__2777)
{if ($T(not__2756(binaryEE__2757(get__2737(identifierT__2777, "module"), get__2737(env__2771, "module", "name")))))
{return signal__2758(make__2759(LerrorG__2760, B2781, format_to_string__2761("Can't create method using identifier with external qualifier: %=", identifierT__2777)))}}, identifiersT__2775);
do__2735(curry__2762(bindN__2763, env__2771), identifiersT__2775);
var bodyT__2778 = macroexpand_all__2765(body__2774, env__2771);
do__2735(curry__2762(unbindN__2764, env__2771), identifiersT__2775);
var nameT__2779 = identifiersT__2775[0],
argumentsT__2780 = $SL.call(identifiersT__2775, 1);
return [B2782, nameT__2779, argumentsT__2780, bodyT__2778]}}
{
var B2789 = $S("%set", "ralph/core"),
qualify__2784;
Tspecial_formsT__2747["%set"] = function B2783__2785 (env__2786, identifier__2787, value__2788)
{return [B2789, qualify__2784(identifier__2787, env__2786), macroexpand_all__2765(value__2788, env__2786)]}}
{
var B2800 = $S("%bind", "ralph/core");
Tspecial_formsT__2747["%bind"] = function B2790__2791 (env__2792, binding__2793, body__2794)
{
var var__2795 = binding__2793[0],
value__2796 = binding__2793[1],
valueT__2797 = macroexpand_all__2765(value__2796, env__2792);
bindN__2763(env__2792, var__2795);
var varT__2798 = localize__2768(var__2795, env__2792);
if ($T(not__2756(binaryEE__2757(get__2737(varT__2798, "module"), get__2737(env__2792, "module", "name")))))
{signal__2758(make__2759(LerrorG__2760, B2781, format_to_string__2761("Can't bind using identifier with external %=", var__2795)))};
var result__2799 = [B2800, [varT__2798, valueT__2797], macroexpand_all__2765(body__2794, env__2792)];
unbindN__2764(env__2792, var__2795);
return result__2799}}
{
var Tcore_macrosT__2801;
false;
Tcore_macrosT__2801 = make_object__2700();
exports["*core-macros*"] = Tcore_macrosT__2801}
{
var B2824 = $REST,
B2825 = $KEY,
B2826 = $K("end"),
B2827 = $K("start"),
find_key__2804 = B1046["find-key"],
E__2805 = B1046["="],
copy_sequence__2806 = B1046["copy-sequence"],
size__2807 = B1046.size,
element__2808 = B1046.element,
inc__2809 = B1046.inc,
destructure_lambda_list__2810;
false;
destructure_lambda_list__2810 = Mmake_function__2687("destructure_lambda_list", function destructure_lambda_list__2811 (list__2812)
{
var position__2813 = function position__2814 (symbol__2815)
{return find_key__2804(list__2812, curry__2762(E__2805, symbol__2815))},
rest__2816 = position__2813(B2824),
key__2817 = position__2813(B2825),
B2802__2818 = rest__2816,
B2820;
if ($T(B2802__2818))
{B2820 = B2802__2818}
else
{
var B2803__2819 = key__2817;
if ($T(B2803__2819))
{B2820 = B2803__2819}
else
B2820 = size__2807(list__2812)};
var B2821 = copy_sequence__2806(list__2812, B2826, B2820),
B2822;
if ($T(rest__2816))
{B2822 = element__2808(list__2812, inc__2809(rest__2816))}
else
B2822 = false;
var B2823;
if ($T(key__2817))
{B2823 = copy_sequence__2806(list__2812, B2827, inc__2809(key__2817))}
else
B2823 = false;
return [B2821, B2822, B2823]}, false);
exports["destructure-lambda-list"] = destructure_lambda_list__2810}
{
var reduce__2829 = B1046.reduce,
wrap__2830;
false;
wrap__2830 = Mmake_function__2687("wrap", function wrap__2831 (form__2832)
{
var wrappers__2833 = $SL.call(arguments, 1);
return reduce__2829(function B2828__2834 (result__2835, wrapper__2836)
{return wrapper__2836(result__2835)}, form__2832, wrappers__2833)}, false)}
{
var B2872 = $S("bind-properties", "ralph/core"),
B2873 = $S("%keys", "ralph/core"),
B2874 = $S("%object", "ralph/core"),
B2875 = $S("bind", "ralph/core"),
B2876 = $S("%native-call", "ralph/core"),
emptyQ__2843 = B1046["empty?"],
Mconcat__2844 = B1046["%concat"],
reduce1__2845 = B1046.reduce1,
instanceQ__2846 = B1046["instance?"],
LarrayG__2847 = B1046["<array>"],
generate_symbol__2848 = B2678["generate-symbol"],
wrap_restSkeys__2849;
false;
wrap_restSkeys__2849 = Mmake_function__2687("wrap_restSkeys", function wrap_restSkeys__2850 (body__2851, all__2852, required__2853, rest__2854, key__2855)
{
var restQ__2856 = rest__2854,
B2837__2857 = rest__2854,
rest__2858;
if ($T(B2837__2857))
{rest__2858 = B2837__2857}
else
if ($T(not__2756(emptyQ__2843(key__2855))))
{rest__2858 = generate_symbol__2848()}
else
rest__2858 = false;
return wrap__2830(body__2851, function B2838__2859 (body__2860)
{if ($T(emptyQ__2843(key__2855)))
{return body__2860}
else
{
var key_values__2863 = map__2766(function B2839__2861 (binding__2862)
{if ($T(instanceQ__2846(binding__2862, LarrayG__2847)))
{return binding__2862}
else
return [binding__2862, false]}, key__2855);
return [B2872, map__2766(first__2749, key_values__2863), [B2873, rest__2858, Mconcat__2844([B2874], reduce1__2845(concatenate__2689, map__2766(function B2840__2864 (key_value__2865)
{
var key__2866 = key_value__2865[0],
value__2867 = key_value__2865[1];
return [symbol_name__2690(key__2866), value__2867]}, key_values__2863)))], body__2860]}}, function B2841__2868 (body__2869)
{
var B2842__2870 = restQ__2856,
B2871;
if ($T(B2842__2870))
{B2871 = B2842__2870}
else
B2871 = not__2756(emptyQ__2843(key__2855));
if ($T(B2871))
{return [B2875, [[rest__2858, [B2876, "$SL.call", all__2852, size__2807(required__2853)]]], body__2869]}
else
return body__2869})}, false)}
{
var maybe_begin__2878 = B2678["maybe-begin"];
Tcore_macrosT__2801.begin = function B2877__2879 (____2880)
{
var expressions__2881 = $SL.call(arguments, 1);
return maybe_begin__2878(expressions__2881)}}
{
var B2892 = $S("%all-arguments", false),
named_method__2883;
false;
named_method__2883 = Mmake_function__2687("named_method", function named_method__2884 (name__2885, arguments__2886, body__2887)
{
var B2882__2888 = destructure_lambda_list__2810(arguments__2886),
required__2889 = B2882__2888[0],
rest__2890 = B2882__2888[1],
key__2891 = B2882__2888[2];
return [B2782, name__2885, required__2889, wrap_restSkeys__2849(body__2887, B2892, required__2889, rest__2890, key__2891)]}, false)}
Tcore_macrosT__2801.method = function B2893__2894 (____2895, arguments__2896)
{
var body__2897 = $SL.call(arguments, 2);
return named_method__2883(generate_symbol__2848(), arguments__2896, maybe_begin__2878(body__2897))}
{
var LsymbolG__2900 = B1046["<symbol>"],
reverse__2901 = B1046.reverse;
Tcore_macrosT__2801.bind = function B2898__2902 (____2903, bindings__2904)
{
var body__2905 = $SL.call(arguments, 2);
if ($T(emptyQ__2843(bindings__2904)))
{return maybe_begin__2878(body__2905)}
else
return reduce__2829(function B2899__2906 (body__2907, binding__2908)
{
var B2909 = B2800,
B2910;
if ($T(instanceQ__2846(binding__2908, LsymbolG__2900)))
{B2910 = [binding__2908, false]}
else
B2910 = binding__2908;
return [B2909, B2910, body__2907]}, maybe_begin__2878(body__2905), reverse__2901(bindings__2904))}}
{
var B2917 = $S("%if", "ralph/core");
Tcore_macrosT__2801["if"] = function B2911__2912 (____2913, test__2914, then__2915, else__2916)
{return [B2917, test__2914, then__2915, else__2916]}}
{
var rest__2919 = B1046.rest;
Tcore_macrosT__2801["set!"] = function B2918__2920 (____2921, place__2922)
{
var values__2923 = $SL.call(arguments, 2),
B2924;
if ($T(instanceQ__2846(place__2922, LarrayG__2847)))
{B2924 = not__2756(binaryEE__2757(symbol_name__2690(first__2749(place__2922)), "%get-property"))}
else
B2924 = false;
if ($T(B2924))
{return concatenate__2689([transform_setter_identifier__2691(first__2749(place__2922))], rest__2919(place__2922), values__2923)}
else
return [B2789, place__2922, first__2749(values__2923)]}}
{
var B2932 = $S("set!", "ralph/core"),
B2933 = $S("parallel-set!", "ralph/core");
Tcore_macrosT__2801["parallel-set!"] = function B2925__2926 (____2927, var__2928, value__2929)
{
var clauses__2930 = $SL.call(arguments, 3);
if ($T(emptyQ__2843(clauses__2930)))
{return [B2932, var__2928, value__2929]}
else
{
var temp__2931 = generate_symbol__2848();
return [B2875, [[temp__2931, value__2929]], Mconcat__2844([B2933], clauses__2930), [B2932, var__2928, temp__2931]]}}}
{
var B2943 = $K("else"),
B2944 = $S("if", "ralph/core"),
B2945 = $S("cond", "ralph/core");
Tcore_macrosT__2801.cond = function B2934__2936 (____2937)
{
var cases__2938 = $SL.call(arguments, 1);
if ($T(not__2756(emptyQ__2843(cases__2938))))
{
var B2935__2939 = first__2749(cases__2938),
test__2940 = B2935__2939[0],
then__2941 = $SL.call(B2935__2939, 1),
then__2942 = maybe_begin__2878(then__2941);
if ($T(binaryEE__2757(test__2940, B2943)))
{return then__2942}
else
return [B2944, test__2940, then__2942, Mconcat__2844([B2945], rest__2919(cases__2938))]}}}
Tcore_macrosT__2801.when = function B2946__2947 (____2948, test__2949)
{
var body__2950 = $SL.call(arguments, 2);
return [B2944, test__2949, maybe_begin__2878(body__2950), false]}
{
var B2956 = $S("not", "ralph/core");
Tcore_macrosT__2801.unless = function B2951__2952 (____2953, test__2954)
{
var body__2955 = $SL.call(arguments, 2);
return [B2944, [B2956, test__2954], maybe_begin__2878(body__2955), false]}}
{
var B2963 = $S("when", "ralph/core"),
B2964 = $S("and", "ralph/core");
Tcore_macrosT__2801.and = function B2957__2959 (____2960)
{
var values__2961 = $SL.call(arguments, 1),
B2958__2962 = size__2807(values__2961);
if ($T(binaryEE__2757(B2958__2962, 0)))
{return true}
else
if ($T(binaryEE__2757(B2958__2962, 1)))
{return first__2749(values__2961)}
else
return [B2963, first__2749(values__2961), Mconcat__2844([B2964], rest__2919(values__2961))]}}
{
var B2972 = $S("or", "ralph/core");
Tcore_macrosT__2801.or = function B2965__2967 (____2968)
{
var values__2969 = $SL.call(arguments, 1),
B2966__2970 = size__2807(values__2969);
if ($T(binaryEE__2757(B2966__2970, 0)))
{return false}
else
if ($T(binaryEE__2757(B2966__2970, 1)))
{return first__2749(values__2969)}
else
{
var value__2971 = generate_symbol__2848();
return [B2875, [[value__2971, first__2749(values__2969)]], [B2944, value__2971, value__2971, Mconcat__2844([B2972], rest__2919(values__2969))]]}}}
Tcore_macrosT__2801["if-bind"] = function B2973__2974 (____2975, binding__2976, then__2977, else__2978)
{
var var__2979 = binding__2976[0],
value__2980 = binding__2976[1],
temp__2981 = generate_symbol__2848();
return [B2875, [[temp__2981, value__2980]], [B2944, temp__2981, [B2875, [[var__2979, temp__2981]], then__2977], else__2978]]}
{
var B2987 = $S("%while", "ralph/core");
Tcore_macrosT__2801["while"] = function B2982__2983 (____2984, test__2985)
{
var body__2986 = $SL.call(arguments, 2);
return [B2987, test__2985, maybe_begin__2878(body__2986)]}}
{
var B2993 = $S("while", "ralph/core");
Tcore_macrosT__2801.until = function B2988__2989 (____2990, test__2991)
{
var body__2992 = $SL.call(arguments, 2);
return Mconcat__2844([B2993, [B2956, test__2991]], body__2992)}}
{
var B3014 = $S("for", "ralph/core"),
B3015 = $S("+", "ralph/core"),
B3016 = $S(">=", "ralph/core");
Tcore_macrosT__2801.dotimes = function B2994__2996 (____2997, binding__2998)
{
var body__2999 = $SL.call(arguments, 2),
temp__3000 = generate_symbol__2848(),
var__3001 = binding__2998[0],
count__3002 = binding__2998[1],
result__3003 = binding__2998[2],
B3005 = B2875,
B3006 = [[temp__3000, count__3002]],
B3007 = B3014,
B3008 = [[var__3001, 0, [B3015, var__3001, 1]]],
B3009 = [B3016, var__3001, temp__3000],
B2995__3004 = result__3003,
B3010;
if ($T(B2995__3004))
{B3010 = B2995__3004}
else
B3010 = false;
var B3011 = [B3009, B3010],
B3012 = [B3007, B3008, B3011],
B3013 = Mconcat__2844(B3012, body__2999);
return [B3005, B3006, B3013]}}
{
var B3055 = $S("method", "ralph/core"),
B3056 = $S("begin", "ralph/core"),
anyQ__3025 = B1046["any?"],
push_last__3026 = B1046["push-last"],
slice__3027 = B1046.slice,
third__3028 = B1046.third;
Tcore_macrosT__2801["for"] = function B3017__3029 (____3030, clauses__3031, end__3032)
{
var body__3033 = $SL.call(arguments, 3),
init_clauses__3034 = [],
next_clauses__3035 = [],
vars__3036 = map__2766(first__2749, clauses__3031),
B3018__3037 = clauses__3031,
B3019__3038,
B3021__3039,
B3020__3040 = [B3018__3037];
while (true)
{
var B3022__3041 = B3019__3038,
B3046;
if ($T(B3022__3041))
{B3046 = B3022__3041}
else
B3046 = anyQ__3025(emptyQ__2843, B3020__3040);
var B3047 = not__2756(B3046);
if ($T(B3047))
{
var clause__3042 = first__2749(B3018__3037);
(function B3023__3043 (clause__3044)
{
push_last__3026(init_clauses__3034, slice__3027(clause__3044, 0, 2));
push_last__3026(next_clauses__3035, first__2749(clause__3044));
return push_last__3026(next_clauses__3035, third__3028(clause__3044))})(clause__3042);
B3018__3037 = rest__2919(B3018__3037);
B3020__3040 = [B3018__3037]}
else
break};
B3021__3039;
var B3048 = B2875,
B3049 = B2993,
B3024__3045 = emptyQ__2843(end__3032),
B3050;
if ($T(B3024__3045))
{B3050 = B3024__3045}
else
B3050 = [B2956, first__2749(end__3032)];
var B3051 = Mconcat__2844([Mconcat__2844([B3055, vars__3036], body__3033)], vars__3036),
B3052 = Mconcat__2844([B2933], next_clauses__3035),
B3053 = [B3049, B3050, B3051, B3052],
B3054;
if ($T(not__2756(emptyQ__2843(rest__2919(end__3032)))))
{B3054 = Mconcat__2844([B3056], rest__2919(end__3032))}
else
B3054 = false;
return [B3048, init_clauses__3034, B3053, B3054]}}
{
var B3114 = $S("rest", "ralph/core"),
B3115 = $S("%array", "ralph/core"),
B3116 = $S("until", "ralph/compiler"),
B3117 = $S("any?", "ralph/core"),
B3118 = $S("empty?", "ralph/core"),
B3119 = $S("first", "ralph/core");
Tcore_macrosT__2801["for-each"] = function B3057__3063 (____3064, clauses__3065, end__3066)
{
var body__3067 = $SL.call(arguments, 3),
clauses__3070 = map__2766(function B3058__3068 (clause__3069)
{return cons__2769(generate_symbol__2848(), clause__3069)}, clauses__3065),
endQ__3071 = generate_symbol__2848(),
values__3072 = generate_symbol__2848(),
result__3073 = generate_symbol__2848(),
B3091 = B3056,
vars__3074 = map__2766(second__2695, clauses__3070),
B3092 = Mconcat__2844([Mconcat__2844([B3055, vars__3074], body__3067)], vars__3074),
B3093 = [B3091, B3092],
B3094 = map__2766(function B3059__3075 (clause__3076)
{return [B2932, first__2749(clause__3076), [B3114, first__2749(clause__3076)]]}, clauses__3070),
B3095 = Mconcat__2844(B3093, B3094),
B3096 = [[B2932, values__3072, Mconcat__2844([B3115], map__2766(first__2749, clauses__3070))]],
body__3077 = Mconcat__2844(B3095, B3096),
B3097 = B2875,
B3098 = Mconcat__2844(Mconcat__2844([], map__2766(function B3060__3078 (clause__3079)
{
var temp__3080 = clause__3079[0],
var__3081 = clause__3079[1],
values__3082 = clause__3079[2];
return [temp__3080, values__3082]}, clauses__3070)), [[endQ__3071, false], [result__3073, false], [values__3072, Mconcat__2844([B3115], map__2766(first__2749, clauses__3070))]]),
B3099 = B3116,
B3100 = [B2972, endQ__3071, [B3117, B3118, values__3072]],
B3101 = B2875,
B3102 = map__2766(function B3061__3083 (clause__3084)
{
var temp__3085 = clause__3084[0],
var__3086 = clause__3084[1],
values__3087 = clause__3084[2];
return [var__3086, [B3119, temp__3085]]}, clauses__3070),
B3062__3088 = first__2749(end__3066),
B3111;
if ($T(B3062__3088))
{
var end_test__3089 = B3062__3088,
B3103 = B2944,
B3104 = B3056,
B3105 = B2932,
results__3090 = rest__2919(end__3066),
B3106;
if ($T(emptyQ__2843(results__3090)))
{B3106 = [false]}
else
B3106 = results__3090;
var B3107 = maybe_begin__2878(B3106),
B3108 = [B3105, result__3073, B3107],
B3109 = [B2932, endQ__3071, true],
B3110 = [B3104, B3108, B3109];
B3111 = [B3103, end_test__3089, B3110, body__3077]}
else
B3111 = body__3077;
var B3112 = [B3101, B3102, B3111],
B3113 = [B3099, B3100, B3112];
return [B3097, B3098, B3113, result__3073]}}
{
var B3130 = $S("%get-property", "ralph/core");
Tcore_macrosT__2801["bind-properties"] = function B3120__3122 (____3123, properties__3124, object__3125)
{
var body__3126 = $SL.call(arguments, 3),
objectT__3127 = generate_symbol__2848();
return Mconcat__2844([B2875, Mconcat__2844([[objectT__3127, object__3125]], map__2766(function B3121__3128 (property__3129)
{return [property__3129, [B3130, objectT__3127, symbol_name__2690(property__3129)]]}, properties__3124))], body__3126)}}
Tcore_macrosT__2801.select = function B3131__3133 (____3134, value__3135, test__3136)
{
var cases__3137 = $SL.call(arguments, 3),
valueT__3138 = generate_symbol__2848(),
testT__3139;
if ($T(instanceQ__2846(test__3136, LsymbolG__2900)))
{testT__3139 = test__3136}
else
testT__3139 = generate_symbol__2848();
var test_expression__3140 = function test_expression__3141 (test_value__3142)
{return [testT__3139, valueT__3138, test_value__3142]},
B3147 = B2875,
B3148 = [[valueT__3138, value__3135]],
B3149;
if ($T(instanceQ__2846(test__3136, LsymbolG__2900)))
{B3149 = []}
else
B3149 = [[testT__3139, test__3136]];
var B3150 = concatenate__2689(B3148, B3149),
B3151 = Mconcat__2844([B2945], map__2766(function B3132__3143 (case__3144)
{
var tests__3145 = case__3144[0],
then__3146 = $SL.call(case__3144, 1);
if ($T(binaryEE__2757(tests__3145, B2943)))
{return case__3144}
else
return Mconcat__2844([Mconcat__2844([B2972], map__2766(test_expression__3140, tests__3145))], then__3146)}, cases__3137));
return [B3147, B3150, B3151]}
{
var destructure__3154;
false;
destructure__3154 = Mmake_function__2687("destructure", function destructure__3155 (bindings__3156, values__3157, body__3158)
{if ($T(instanceQ__2846(values__3157, LsymbolG__2900)))
{
var B3152__3159 = destructure_lambda_list__2810(bindings__3156),
required__3160 = B3152__3159[0],
rest__3161 = B3152__3159[1],
key__3162 = B3152__3159[2],
i__3163 = size__2807(required__3160);
return reduce__2829(function B3153__3164 (body__3165, binding__3166)
{
i__3163 = (i__3163 - 1);
if ($T(instanceQ__2846(binding__3166, LsymbolG__2900)))
{return [B2875, [[binding__3166, [B3130, values__3157, i__3163]]], body__3165]}
else
return destructure__3155(binding__3166, [B3130, values__3157, i__3163], body__3165)}, wrap_restSkeys__2849(body__3158, values__3157, required__3160, rest__3161, key__3162), reverse__2901(required__3160))}
else
{
var var__3167 = generate_symbol__2848();
return [B2875, [[var__3167, values__3157]], destructure__3155(bindings__3156, var__3167, body__3158)]}}, false)}
Tcore_macrosT__2801["destructuring-bind"] = function B3168__3169 (____3170, bindings__3171, values__3172)
{
var body__3173 = $SL.call(arguments, 3);
return destructure__3154(bindings__3171, values__3172, Mconcat__2844([B3056], body__3173))}
Tcore_macrosT__2801["bind-methods"] = function B3174__3176 (____3177, bindings__3178)
{
var body__3179 = $SL.call(arguments, 2);
return Mconcat__2844(Mconcat__2844([B2875, map__2766(first__2749, bindings__3178)], map__2766(function B3175__3180 (binding__3181)
{
var identifier__3182 = binding__3181[0],
arguments__3183 = binding__3181[1],
body__3184 = $SL.call(binding__3181, 2);
return [B2932, identifier__3182, named_method__2883(identifier__3182, arguments__3183, maybe_begin__2878(body__3184))]}, bindings__3178)), body__3179)}
Tcore_macrosT__2801["inc!"] = function B3185__3187 (____3188, object__3189, value__3190)
{
var B3192 = B2932,
B3193 = B3015,
B3186__3191 = value__3190,
B3194;
if ($T(B3186__3191))
{B3194 = B3186__3191}
else
B3194 = 1;
var B3195 = [B3193, object__3189, B3194];
return [B3192, object__3189, B3195]}
{
var B3207 = $S("-", "ralph/core");
Tcore_macrosT__2801["dec!"] = function B3196__3198 (____3199, object__3200, value__3201)
{
var B3203 = B2932,
B3204 = B3207,
B3197__3202 = value__3201,
B3205;
if ($T(B3197__3202))
{B3205 = B3197__3202}
else
B3205 = 1;
var B3206 = [B3204, object__3200, B3205];
return [B3203, object__3200, B3206]}}
{
var B3212 = $S("%plus", "ralph/core");
Tcore_macrosT__2801["+"] = function B3208__3209 (____3210)
{
var values__3211 = $SL.call(arguments, 1);
if ($T(emptyQ__2843(values__3211)))
{return 0}
else
return Mconcat__2844([B3212], values__3211)}}
{
var B3218 = $S("%minus", "ralph/core");
Tcore_macrosT__2801["-"] = function B3213__3214 (____3215, minuend__3216)
{
var subtrahends__3217 = $SL.call(arguments, 2);
if ($T(emptyQ__2843(subtrahends__3217)))
{return [B2876, "-", minuend__3216]}
else
return Mconcat__2844([B3218, minuend__3216], subtrahends__3217)}}
{
var B3223 = $S("%times", "ralph/core");
Tcore_macrosT__2801["*"] = function B3219__3220 (____3221)
{
var values__3222 = $SL.call(arguments, 1);
if ($T(emptyQ__2843(values__3222)))
{return 1}
else
return Mconcat__2844([B3223], values__3222)}}
{
var B3229 = $S("%divide", "ralph/core");
Tcore_macrosT__2801["/"] = function B3224__3225 (____3226, numerator__3227)
{
var denominators__3228 = $SL.call(arguments, 2);
if ($T(emptyQ__2843(denominators__3228)))
{return [B3229, 1, numerator__3227]}
else
return Mconcat__2844([B3229, numerator__3227], denominators__3228)}}
{
var B3233 = $S("next-method", "ralph/compiler"),
B3234 = $S("%native", "ralph/core");
Tcore_macrosT__2801["call-next-method"] = function B3230__3231 (____3232)
{return [[B3130, B3233, "apply"], [B3234, "null"], B2892]}}
{
var B3238 = $S("%symbol", "ralph/core"),
transform_quoted__3235;
false;
transform_quoted__3235 = Mmake_function__2687("transform_quoted", function transform_quoted__3236 (form__3237)
{if ($T(instanceQ__2846(form__3237, LarrayG__2847)))
{return Mconcat__2844([B3115], map__2766(transform_quoted__3236, form__3237))}
else
if ($T(instanceQ__2846(form__3237, LsymbolG__2900)))
{return [B3238, symbol_name__2690(form__3237)]}
else
return form__3237}, false)}
Tcore_macrosT__2801.quote = function B3239__3240 (____3241, exp__3242)
{return transform_quoted__3235(exp__3242)}
{
var B3265 = $S("%splice", "ralph/compiler"),
B3266 = $S("%concat", "ralph/core"),
boundQ__3246 = B2678["bound?"],
find_moduleSimport_name__3247,
transform_backquoted__3248;
false;
transform_backquoted__3248 = Mmake_function__2687("transform_backquoted", function transform_backquoted__3249 (form__3250, env__3251)
{
var B3243__3252 = form__3250;
if ($T(instanceQ__2846(B3243__3252, LarrayG__2847)))
{
var B3262;
if ($T(not__2756(emptyQ__2843(form__3250))))
{B3262 = binaryEE__2757(symbol_name__2690(first__2749(form__3250)), "%comma")}
else
B3262 = false;
if ($T(B3262))
{return second__2695(form__3250)}
else
{
var B3263;
if ($T(not__2756(emptyQ__2843(form__3250))))
{B3263 = binaryEE__2757(symbol_name__2690(first__2749(form__3250)), "%at")}
else
B3263 = false;
if ($T(B3263))
{return [B3265, second__2695(form__3250)]}
else
{
var explicit__3253 = [B3115];
return reduce__2829(function B3244__3254 (result__3255, value__3256)
{
var quoted__3257 = transform_backquoted__3249(value__3256, env__3251),
B3264;
if ($T(expressionQ__2748(quoted__3257)))
{B3264 = binaryEE__2757(first__2749(quoted__3257), B3265)}
else
B3264 = false;
if ($T(B3264))
{
explicit__3253 = false;
return [B3266, result__3255, second__2695(quoted__3257)]}
else
if ($T(explicit__3253))
{
push_last__3026(explicit__3253, quoted__3257);
return result__3255}
else
{
explicit__3253 = [B3115, quoted__3257];
return [B3266, result__3255, explicit__3253]}}, explicit__3253, form__3250)}}}
else
if ($T(instanceQ__2846(B3243__3252, LsymbolG__2900)))
{
var name__3258 = symbol_name__2690(form__3250),
B3245__3259;
if ($T(not__2756(boundQ__3246(env__3251, form__3250))))
{B3245__3259 = find_moduleSimport_name__3247(name__3258, env__3251)}
else
B3245__3259 = false;
var module__3261;
if ($T(B3245__3259))
{
var moduleSimport_name__3260 = B3245__3259;
module__3261 = first__2749(moduleSimport_name__3260)}
else
module__3261 = get__2737(env__3251, "module");
return [B3238, name__3258, get__2737(module__3261, "name")]}
else
return form__3250}, false)}
Tcore_macrosT__2801["%backquote"] = function B3267__3268 (env__3269, exp__3270)
{return transform_backquoted__3248(exp__3270, env__3269)}
Tcore_macrosT__2801["%comma"] = function B3271__3272 (____3273, value__3274)
{return signal__2758(make__2759(LerrorG__2760, B2781, format_to_string__2761("comma not inside backquote: %=\n", value__3274)))}
Tcore_macrosT__2801["%at"] = function B3275__3276 (____3277, value__3278)
{return signal__2758(make__2759(LerrorG__2760, B2781, format_to_string__2761("at not inside backquote: %=\n", value__3278)))}
{
var Tdot_name_errorT__3279;
false;
Tdot_name_errorT__3279 = make__2759(LerrorG__2760, B2781, "unsupported name for call in dot")}
{
var LstringG__3284 = B1046["<string>"];
Tcore_macrosT__2801["."] = function B3280__3285 (____3286, value__3287)
{
var calls__3288 = $SL.call(arguments, 2);
return reduce__2829(function B3281__3289 (value__3290, call__3291)
{
var property__3292 = call__3291[0],
arguments__3293 = $SL.call(call__3291, 1),
bindings__3296 = map__2766(function B3282__3294 (argument__3295)
{return [generate_symbol__2848(), argument__3295]}, arguments__3293),
valueT__3297 = generate_symbol__2848(),
B3299 = B2875,
B3300 = [[valueT__3297, value__3290]],
B3301 = B2875,
B3302 = B3130,
B3283__3298 = property__3292,
B3303;
if ($T(instanceQ__2846(B3283__3298, LstringG__3284)))
{B3303 = property__3292}
else
if ($T(instanceQ__2846(B3283__3298, LsymbolG__2900)))
{B3303 = symbol_name__2690(property__3292)}
else
B3303 = signal__2758(Tdot_name_errorT__3279);
var B3304 = [B3302, valueT__3297, B3303],
B3305 = [B3304],
B3306 = map__2766(first__2749, bindings__3296),
B3307 = Mconcat__2844(B3305, B3306),
B3308 = [B3301, bindings__3296, B3307];
return [B3299, B3300, B3308]}, value__3287, calls__3288)}}
{
var simplify_arguments__3311;
false;
simplify_arguments__3311 = Mmake_function__2687("simplify_arguments", function simplify_arguments__3312 (arguments__3313)
{
var B3309__3314 = destructure_lambda_list__2810(arguments__3313),
required__3315 = B3309__3314[0],
rest__3316 = B3309__3314[1],
key__3317 = B3309__3314[2],
B3320 = map__2766(function B3310__3318 (argument__3319)
{if ($T(instanceQ__2846(argument__3319, LarrayG__2847)))
{return first__2749(argument__3319)}
else
return argument__3319}, required__3315),
B3321;
if ($T(rest__3316))
{B3321 = concatenate__2689([B2824], rest__3316)}
else
B3321 = [];
var B3322;
if ($T(key__3317))
{B3322 = concatenate__2689([B2825], key__3317)}
else
B3322 = [];
return concatenate__2689(B3320, B3321, B3322)}, false)}
{
var B3366 = $S("define", "ralph/core"),
B3367 = $S("%native-name", "ralph/compiler"),
B3368 = $S("<object>", "ralph/core"),
memberQ__3328 = B1046["member?"],
module__3329,
G__3330 = B1046[">"],
make_function_definer__3331;
false;
make_function_definer__3331 = Mmake_function__2687("make_function_definer", function make_function_definer__3332 (macro_name__3333, definer__3334)
{
var B3323__3335 = $SL.call(arguments, 2),
B3324__3336 = Mkeys__2738(B3323__3335, {"name?":false,
"type/existing?":false,
"record?":false}),
nameQ__3337 = B3324__3336["name?"],
typeSexistingQ__3338 = B3324__3336["type/existing?"],
recordQ__3339 = B3324__3336["record?"];
return function B3325__3340 (env__3341, identifier__3342, arguments__3343)
{
var body__3344 = $SL.call(arguments, 3),
B3326__3345;
if ($T(setter_identifierQ__2694(identifier__3342)))
{B3326__3345 = [true, transform_setter_identifier__2691(second__2695(identifier__3342))]}
else
B3326__3345 = [false, identifier__3342];
var setterQ__3346 = B3326__3345[0],
identifier__3347 = B3326__3345[1],
B3327__3348 = instanceQ__2846(identifier__3347, LsymbolG__2900),
B3353;
if ($T(B3327__3348))
{B3353 = B3327__3348}
else
B3353 = setterQ__3346;
var B3354 = not__2756(B3353);
if ($T(B3354))
{signal__2758(make__2759(LerrorG__2760, B2781, concatenate__2689(macro_name__3333, ": ", "name not <var> or (setter <var>)")))};
var B3355;
if ($T(typeSexistingQ__3338))
{B3355 = emptyQ__2843(arguments__3343)}
else
B3355 = false;
if ($T(B3355))
{signal__2758(make__2759(LerrorG__2760, B2781, concatenate__2689(macro_name__3333, ": ", "method has no arguments")))};
var simplified_arguments__3349 = simplify_arguments__3311(arguments__3343),
name__3350 = symbol_name__2690(identifier__3347),
B3356;
if ($T(nameQ__3337))
{B3356 = identifier__3347}
else
B3356 = generate_symbol__2848();
var B3357 = maybe_begin__2878(body__3344),
B3358 = named_method__2883(B3356, simplified_arguments__3349, B3357),
method_definition__3351 = macroexpand_all__2765(B3358, env__3341),
B3359;
if ($T(recordQ__3339))
{B3359 = memberQ__3328(name__3350, get__2737(env__3341, module__3329, "inline"))}
else
B3359 = false;
if ($T(B3359))
{get_setter__2736(env__3341, "module", "functions", name__3350, method_definition__3351)};
var B3360 = B3366,
B3361 = [definer__3334, [B3367, name__3350], method_definition__3351, setterQ__3346],
B3364;
if ($T(typeSexistingQ__3338))
{
var head__3352 = first__2749(arguments__3343),
B3362;
if ($T(instanceQ__2846(head__3352, LarrayG__2847)))
{B3362 = G__3330(size__2807(head__3352), 1)}
else
B3362 = false;
var B3363;
if ($T(B3362))
{B3363 = second__2695(head__3352)}
else
B3363 = B3368;
B3364 = [B3363, identifier__3347]}
else
B3364 = [];
var B3365 = concatenate__2689(B3361, B3364);
return [B3360, identifier__3347, B3365]}}, false)}
{
var B3385 = $S("%make-function", "ralph/core"),
B3386 = $K("record?"),
B3387 = $K("name?"),
B3388 = $S("%make-method", "ralph/core"),
B3389 = $K("type/existing?"),
B3369__3375 = [["define-function", B3385, B3386, true, B3387, true], ["define-method", B3388, B3389, true]],
B3370__3376,
B3372__3377,
B3371__3378 = [B3369__3375];
while (true)
{
var B3373__3379 = B3370__3376,
B3383;
if ($T(B3373__3379))
{B3383 = B3373__3379}
else
B3383 = anyQ__3025(emptyQ__2843, B3371__3378);
var B3384 = not__2756(B3383);
if ($T(B3384))
{
var arguments__3380 = first__2749(B3369__3375);
(function B3374__3381 (arguments__3382)
{return Tcore_macrosT__2801[first__2749(arguments__3382)] = apply__2733(make_function_definer__3331, arguments__3382)})(arguments__3380);
B3369__3375 = rest__2919(B3369__3375);
B3371__3378 = [B3369__3375]}
else
break};
B3372__3377}
{
var B3396 = $S("%define", "ralph/core");
Tcore_macrosT__2801.define = function B3390__3391 (env__3392, identifier__3393, value__3394)
{
var identifierT__3395 = localize__2768(identifier__3393, env__3392);
if ($T(not__2756(binaryEE__2757(get__2737(identifierT__3395, "module"), get__2737(env__3392, "module", "name")))))
{signal__2758(make__2759(LerrorG__2760, B2781, format_to_string__2761("Can't define using identifier with external qualifier: %=", identifier__3393)))};
bindN__2763(env__3392, identifier__3393);
return [B3056, [B3396, identifierT__3395], [B2789, identifierT__3395, value__3394]]}}
{
var B3402 = $S("%make-generic", "ralph/core");
Tcore_macrosT__2801["define-generic"] = function B3397__3398 (____3399, identifier__3400, arguments__3401)
{return [B3366, identifier__3400, [B3402, [B3367, symbol_name__2690(identifier__3400)]]]}}
{
var B3430 = $S("%make-class", "ralph/core");
Tcore_macrosT__2801["define-class"] = function B3403__3410 (____3411, identifier__3412, superclass__3413)
{
var properties__3414 = $SL.call(arguments, 3),
object__3415 = [B2874],
B3404__3416 = properties__3414,
B3405__3417,
B3407__3418,
B3406__3419 = [B3404__3416];
while (true)
{
var B3408__3420 = B3405__3417,
B3424;
if ($T(B3408__3420))
{B3424 = B3408__3420}
else
B3424 = anyQ__3025(emptyQ__2843, B3406__3419);
var B3425 = not__2756(B3424);
if ($T(B3425))
{
var property__3421 = first__2749(B3404__3416);
(function B3409__3422 (property__3423)
{if ($T(instanceQ__2846(property__3423, LarrayG__2847)))
{
push_last__3026(object__3415, symbol_name__2690(first__2749(property__3423)));
return push_last__3026(object__3415, [B3055, [], second__2695(property__3423)])}
else
{
push_last__3026(object__3415, symbol_name__2690(property__3423));
return push_last__3026(object__3415, false)}})(property__3421);
B3404__3416 = rest__2919(B3404__3416);
B3406__3419 = [B3404__3416]}
else
break};
B3407__3418;
var B3426 = B3366,
B3427 = B3430,
B3428;
if ($T(not__2756(emptyQ__2843(superclass__3413))))
{B3428 = first__2749(superclass__3413)}
else
B3428 = false;
var B3429 = [B3427, B3428, object__3415];
return [B3426, identifier__3412, B3429]}}
{
var get_import_module_nameSoptions__3431;
false;
get_import_module_nameSoptions__3431 = Mmake_function__2687("get_import_module_nameSoptions", function get_import_module_nameSoptions__3432 (import__3433)
{
var B3434;
if ($T(instanceQ__2846(import__3433, LarrayG__2847)))
{B3434 = first__2749(import__3433)}
else
B3434 = import__3433;
var B3435 = symbol_name__2690(B3434),
B3436;
if ($T(instanceQ__2846(import__3433, LarrayG__2847)))
{B3436 = rest__2919(import__3433)}
else
B3436 = [];
return [B3435, B3436]}, false)}
{
var compile_time_import_module__3444,
import_module__3445,
make_import_definition__3446;
Tcore_macrosT__2801["define-module"] = function B3437__3447 (env__3448, ____3449)
{
var B3438__3450 = $SL.call(arguments, 2),
B3439__3451 = Mkeys__2738(B3438__3450, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}),
import__3452 = B3439__3451["import"],
export__3453 = B3439__3451["export"],
compile_time_import__3454 = B3439__3451["compile-time-import"],
inline__3455 = B3439__3451.inline;
get_setter__2736(env__3448, "module", "exports", map__2766(identifier_name__2696, export__3453));
do__2735(function B3440__3456 (import__3457)
{
var B3441__3458 = get_import_module_nameSoptions__3431(import__3457),
module_name__3459 = B3441__3458[0],
options__3460 = B3441__3458[1];
return apply__2733(compile_time_import_module__3444, env__3448, module_name__3459, options__3460)}, compile_time_import__3454);
get_setter__2736(env__3448, "module", "inline", map__2766(identifier_name__2696, inline__3455));
return maybe_begin__2878(map__2766(function B3442__3461 (import__3462)
{
var B3443__3463 = get_import_module_nameSoptions__3431(import__3462),
module_name__3464 = B3443__3463[0],
options__3465 = B3443__3463[1];
apply__2733(import_module__3445, get__2737(env__3448, "module"), module_name__3464, options__3465);
return make_import_definition__3446(module_name__3464, env__3448)}, import__3452))}}
{
var B3470 = $S("%begin", "ralph/core");
false;
make_import_definition__3446 = Mmake_function__2687("make_import_definition", function make_import_definition__3466 (module_name__3467, env__3468)
{
var identifier__3469 = generate_symbol__2848(env__3468);
get_setter__2736(env__3468, "import-identifiers", module_name__3467, identifier__3469);
return [B3470, [B3396, identifier__3469], [B2789, identifier__3469, [[B3234, "require"], module_name__3467]]]}, false)}
{
var B3477 = $S("define-function", "ralph/core");
Tcore_macrosT__2801["define-macro"] = function B3471__3472 (env__3473, identifier__3474, arguments__3475)
{
var body__3476 = $SL.call(arguments, 3);
return [B3056, Mconcat__2844([B3477, identifier__3474, Mconcat__2844([generate_symbol__2848()], arguments__3475)], body__3476), [B2932, [B3130, identifier__3474, "%macro?"], true]]}}
Tcore_macrosT__2801["define-symbol-macro"] = function B3478__3479 (env__3480, identifier__3481, arguments__3482)
{
var body__3483 = $SL.call(arguments, 3);
return [B3056, Mconcat__2844([B3477, identifier__3481, []], body__3483), [B2932, [B3130, identifier__3481, "%symbol-macro?"], true]]}
{
var B3504 = $S("%try", "ralph/core"),
B3505 = $S("instance?", "ralph/core");
Tcore_macrosT__2801["handler-case"] = function B3484__3489 (____3490, body__3491)
{
var cases__3492 = $SL.call(arguments, 2),
condition_var__3493 = generate_symbol__2848();
return [B3504, body__3491, condition_var__3493, Mconcat__2844([B2945], map__2766(function B3485__3494 (case__3495)
{
var B3486__3496 = case__3495[0],
type__3497 = B3486__3496[0],
B3487__3498 = $SL.call(B3486__3496, 1),
B3488__3499 = Mkeys__2738(B3487__3498, {condition:false}),
condition__3500 = B3488__3499.condition,
body__3501 = $SL.call(case__3495, 1),
B3502 = [[B3505, condition_var__3493, type__3497]],
B3503;
if ($T(condition__3500))
{B3503 = [Mconcat__2844([B2875, [[condition__3500, condition_var__3493]]], body__3501)]}
else
B3503 = body__3501;
return concatenate__2689(B3502, B3503)}, cases__3492))]}}
{
var B3512 = $S("%call", "ralph/core"),
B3513 = $S("get-setter", "ralph/core");
Tcore_macrosT__2801["get-setter"] = function B3506__3507 (____3508, object__3509, property__3510)
{
var propertiesSvalue__3511 = $SL.call(arguments, 3);
if ($T(binaryEE__2757(size__2807(propertiesSvalue__3511), 1)))
{return [B2789, [B3130, object__3509, property__3510], first__2749(propertiesSvalue__3511)]}
else
return Mconcat__2844([B3512, B3513, object__3509, property__3510], propertiesSvalue__3511)}}
{
var B3519 = $S("symbol", "ralph/core");
Tcore_macrosT__2801.symbol = function B3514__3515 (____3516, name__3517, module__3518)
{if ($T(instanceQ__2846(name__3517, LstringG__3284)))
{if ($T(instanceQ__2846(module__3518, LstringG__3284)))
{return [B3238, name__3517, module__3518]}
else
return [B3238, name__3517]}
else
return [B3512, B3519, name__3517, module__3518]}}
{
var B3526 = $S("binary==", "ralph/core"),
B3527 = $S("==", "ralph/core");
Tcore_macrosT__2801["=="] = function B3520__3521 (____3522, object1__3523, object2__3524)
{
var objects__3525 = $SL.call(arguments, 3);
if ($T(emptyQ__2843(objects__3525)))
{return [B3526, object1__3523, object2__3524]}
else
return Mconcat__2844([B3512, B3527, object1__3523, object2__3524], objects__3525)}}
{
var Tcore_symbol_macrosT__3528;
false;
Tcore_symbol_macrosT__3528 = make_object__2700();
exports["*core-symbol-macros*"] = Tcore_symbol_macrosT__3528}
{
var B3532 = $S("%next-method", "ralph/core"),
B3533 = $S("%this-method", false);
Tcore_symbol_macrosT__3528["next-method"] = function B3529__3530 (____3531)
{return [B3532, B3533]}}
{
var MMsymbol__3537 = B1046["%%symbol"],
destructure_symbol__3538 = B2678["destructure-symbol"];
false;
qualify__2784 = Mmake_function__2687("qualify", function qualify__3539 (form__3540, env__3541)
{
var B3534__3542 = form__3540;
if ($T(instanceQ__2846(B3534__3542, LarrayG__2847)))
{return map__2766(rcurry__2767(qualify__3539, env__3541), form__3540)}
else
if ($T(instanceQ__2846(B3534__3542, LsymbolG__2900)))
{
var B3535__3543 = destructure_symbol__3538(form__3540),
name__3544 = B3535__3543[0],
module_name__3545 = B3535__3543[1];
if ($T(module_name__3545))
{return form__3540}
else
{
var B3536__3546;
if ($T(not__2756(boundQ__3246(env__3541, form__3540))))
{B3536__3546 = find_moduleSimport_name__3247(name__3544, env__3541)}
else
B3536__3546 = false;
if ($T(B3536__3546))
{
var moduleSimport_name__3547 = B3536__3546,
module__3548 = moduleSimport_name__3547[0],
import_name__3549 = moduleSimport_name__3547[1];
return MMsymbol__3537(import_name__3549, get__2737(module__3548, "name"))}
else
return symbol__2688(name__3544, get__2737(env__3541, "module", "name"))}}
else
return form__3540}, false)}
{
var find_macro_definition__3551;
false;
find_macro_definition__3551 = Mmake_function__2687("find_macro_definition", function find_macro_definition__3552 (form__3553, env__3554)
{
var B3550__3555 = form__3553;
if ($T(instanceQ__2846(B3550__3555, LarrayG__2847)))
{
if ($T(emptyQ__2843(form__3553)))
{signal__2758("Empty form")};
var identifier__3556 = first__2749(form__3553),
name__3557 = symbol_name__2690(identifier__3556);
if ($T(not__2756(boundQ__3246(env__3554, identifier__3556))))
{return env__3554.macros[name__3557]}}
else
if ($T(instanceQ__2846(B3550__3555, LsymbolG__2900)))
{
var name__3558 = symbol_name__2690(form__3553);
if ($T(not__2756(boundQ__3246(env__3554, form__3553))))
{return env__3554["symbol-macros"][name__3558]}}}, false)}
{
var macroexpand_1__3560;
false;
macroexpand_1__3560 = Mmake_function__2687("macroexpand_1", function macroexpand_1__3561 (form__3562, env__3563)
{
var B3559__3564 = find_macro_definition__3551(form__3562, env__3563);
if ($T(B3559__3564))
{
var macro__3565 = B3559__3564,
B3566;
if ($T(instanceQ__2846(form__3562, LarrayG__2847)))
{B3566 = rest__2919(form__3562)}
else
B3566 = form__3562;
return apply__2733(macro__3565, env__3563, B3566)}
else
return form__3562}, false);
exports["macroexpand-1"] = macroexpand_1__3560}
{
var macroexpand__3567;
false;
macroexpand__3567 = Mmake_function__2687("macroexpand", function macroexpand__3568 (form__3569, env__3570)
{
var doneQ__3571;
while ($T(not__2756(doneQ__3571)))
{
var expanded__3572 = macroexpand_1__3560(form__3569, env__3570);
doneQ__3571 = binaryEE__2757(expanded__3572, form__3569);
form__3569 = expanded__3572};
return form__3569}, false);
exports.macroexpand = macroexpand__3567}
{
var simplify_call__3575;
false;
macroexpand_all__2765 = Mmake_function__2687("macroexpand_all", function macroexpand_all__3576 (form__3577, env__3578)
{B3582:while(true){
var B3573__3579 = form__3577;
if ($T(instanceQ__2846(B3573__3579, LarrayG__2847)))
{if ($T(find_macro_definition__3551(form__3577, env__3578)))
{return simplify_call__3575(macroexpand_all__3576(macroexpand__3567(form__3577, env__3578), env__3578))}
else
{
var B3574__3580 = find_special_form__2750(form__3577, env__3578);
if ($T(B3574__3580))
{
var expander__3581 = B3574__3580;
return apply__2733(expander__3581, env__3578, rest__2919(form__3577))}
else
return map__2766(rcurry__2767(macroexpand_all__3576, env__3578), form__3577)}}
else
if ($T(instanceQ__2846(B3573__3579, LsymbolG__2900)))
{if ($T(find_macro_definition__3551(form__3577, env__3578)))
{
arguments = [macroexpand__3567(form__3577, env__3578), env__3578];
form__3577 = arguments[0];
env__3578 = arguments[1];
continue B3582}
else
return qualify__2784(form__3577, env__3578)}
else
return form__3577;
break}}, false);
exports["macroexpand-all"] = macroexpand_all__2765}
{
false;
simplify_call__3575 = Mmake_function__2687("simplify_call", function simplify_call__3583 (exp__3584)
{
var B3585;
if ($T(expressionQ__2748(exp__3584, LarrayG__2847)))
{B3585 = binaryEE__2757(symbol_name__2690(first__2749(exp__3584)), "%call")}
else
B3585 = false;
if ($T(B3585))
{return rest__2919(exp__3584)}
else
return exp__3584}, false)}
{
false;
find_moduleSimport_name__3247 = Mmake_function__2687("find_moduleSimport_name", function find_moduleSimport_name__3589 (definition_name__3590, env__3591)
{return anyQ__3025(function B3586__3592 (import__3593)
{
var module__3594 = import__3593[0],
names__3595 = import__3593[1];
return anyQ__3025(function B3587__3596 (name__3597)
{
var B3588__3598;
if ($T(instanceQ__2846(name__3597, LarrayG__2847)))
{B3588__3598 = name__3597}
else
B3588__3598 = [name__3597, name__3597];
var import_name__3599 = B3588__3598[0],
new_name__3600 = B3588__3598[1];
if ($T(binaryEE__2757(definition_name__3590, new_name__3600)))
{return [module__3594, import_name__3599]}}, names__3595)}, get__2737(env__3591, "module", "imports"))}, false)}
{
var find_import_identifier__3601;
false;
find_import_identifier__3601 = Mmake_function__2687("find_import_identifier", function find_import_identifier__3602 (module__3603, env__3604)
{return get__2737(env__3604, "import-identifiers", get__2737(module__3603, "name"))}, false)}
{
var external_definition__3606;
false;
external_definition__3606 = Mmake_function__2687("external_definition", function external_definition__3607 (variable__3608, import_identifier__3609, import_name__3610, env__3611)
{
var B3605__3612 = destructure_symbol__3538(variable__3608),
name__3613 = B3605__3612[0],
module_name__3614 = B3605__3612[1];
if ($T(not__2756(get__2737(env__3611, "defined?", module_name__3614, name__3613))))
{
get_setter__2736(env__3611, "defined?", module_name__3614, name__3613, true);
return [B3470, [B3396, variable__3608], [B2789, variable__3608, [B3130, import_identifier__3609, import_name__3610]]]}}, false)}
{
var description__3626 = B1046.description,
alpha_convert__3627 = B2679["alpha-convert"],
format_out__3628 = B2674["format-out"],
find_module__3629,
remove_defined_identifiers__3630 = B2678["remove-defined-identifiers"],
find_free_variables__3631 = B2681["find-free-variables"],
identity__3632 = B1046.identity,
define_free_variables__3633;
false;
define_free_variables__3633 = Mmake_function__2687("define_free_variables", function define_free_variables__3634 (exp__3635, env__3636)
{
var B3615__3637 = $SL.call(arguments, 2),
B3616__3638 = Mkeys__2738(B3615__3637, {filter:identity__3632}),
filter__3639 = B3616__3638.filter,
variables__3640 = filter__3639(remove_defined_identifiers__3630(find_free_variables__3631(exp__3635, env__3636), env__3636)),
result__3641 = [],
B3617__3642 = variables__3640,
B3618__3643,
B3620__3644,
B3619__3645 = [B3617__3642];
while (true)
{
var B3621__3646 = B3618__3643,
B3663;
if ($T(B3621__3646))
{B3663 = B3621__3646}
else
B3663 = anyQ__3025(emptyQ__2843, B3619__3645);
var B3664 = not__2756(B3663);
if ($T(B3664))
{
var variable__3647 = first__2749(B3617__3642);
(function B3622__3648 (variable__3649)
{
var B3623__3650 = destructure_symbol__3538(variable__3649),
name__3651 = B3623__3650[0],
module_name__3652 = B3623__3650[1],
import_name__3653;
if ($T(not__2756(module_name__3652)))
{signal__2758(concatenate__2689("NOT QUALIFIED: ", description__3626(variable__3649)))};
if ($T(binaryEE__2757(module_name__3652, get__2737(env__3636, "module", "name"))))
{
get_setter__2736(env__3636, "defined?", module_name__3652, name__3651, true);
push_last__3026(result__3641, [B3396, variable__3649]);
var B3624__3654 = find_moduleSimport_name__3247(name__3651, env__3636);
if ($T(B3624__3654))
{
var moduleSimport_name__3655 = B3624__3654,
module__3656 = moduleSimport_name__3655[0],
import_name__3657 = moduleSimport_name__3655[1],
external_variable__3658 = symbol__2688(import_name__3657, get__2737(module__3656, "name")),
B3625__3659 = external_definition__3606(external_variable__3658, alpha_convert__3627(find_import_identifier__3601(module__3656, env__3636), env__3636), import_name__3657, env__3636);
if ($T(B3625__3659))
{
var definition__3660 = B3625__3659;
push_last__3026(result__3641, definition__3660)};
return push_last__3026([B2789, variable__3649, external_variable__3658])}
else
return format_out__3628("Warning: Undefined variable: %=\n", variable__3649)}
else
{
var module__3661 = find_module__3629(module_name__3652),
import_identifier__3662 = find_import_identifier__3601(module__3661, env__3636);
if ($T(not__2756(import_identifier__3662)))
{
push_last__3026(result__3641, make_import_definition__3446(module_name__3652, env__3636));
import_identifier__3662 = find_import_identifier__3601(module__3661, env__3636)};
return push_last__3026(result__3641, external_definition__3606(variable__3649, alpha_convert__3627(import_identifier__3662, env__3636), name__3651, env__3636))}})(variable__3647);
B3617__3642 = rest__2919(B3617__3642);
B3619__3645 = [B3617__3642]}
else
break};
B3620__3644;
return Mconcat__2844(Mconcat__2844([B3470], result__3641), [exp__3635])}, false);
exports["define-free-variables"] = define_free_variables__3633}
{
var last_setter__3685 = B1046["last-setter"],
last__3686 = B1046.last,
second_setter__3687 = B1046["second-setter"],
inline_definition__3688,
inlineQ__3689,
inline__3690;
false;
inline__3690 = Mmake_function__2687("inline", function inline__3691 (form__3692, env__3693)
{
var B3730;
if ($T(instanceQ__2846(form__3692, LarrayG__2847)))
{B3730 = not__2756(emptyQ__2843(form__3692))}
else
B3730 = false;
if ($T(B3730))
{if ($T(instanceQ__2846(first__2749(form__3692), LsymbolG__2900)))
{
var B3665__3694 = symbol_name__2690(first__2749(form__3692)),
B3666__3695 = binaryEE__2757(B3665__3694, "%method"),
B3731;
if ($T(B3666__3695))
{B3731 = B3666__3695}
else
B3731 = binaryEE__2757(B3665__3694, "%set");
if ($T(B3731))
{
last_setter__3685(form__3692, inline__3691(last__3686(form__3692), env__3693));
return form__3692}
else
if ($T(binaryEE__2757(B3665__3694, "%bind")))
{
var ____3696 = form__3692[0],
binding__3697 = form__3692[1],
body__3698 = form__3692[2];
second_setter__3687(binding__3697, inline__3691(second__2695(binding__3697), env__3693));
last_setter__3685(form__3692, inline__3691(body__3698, env__3693));
return form__3692}
else
if ($T(binaryEE__2757(B3665__3694, "%try")))
{
var ____3699 = form__3692[0],
body__3700 = form__3692[1],
var__3701 = form__3692[2],
catch__3702 = form__3692[3];
second_setter__3687(form__3692, inline__3691(body__3700, env__3693));
last_setter__3685(form__3692, inline__3691(catch__3702, env__3693));
return form__3692}
else
{
var B3667__3703 = binaryEE__2757(B3665__3694, "%begin"),
B3732;
if ($T(B3667__3703))
{B3732 = B3667__3703}
else
{
var B3668__3704 = binaryEE__2757(B3665__3694, "%if");
if ($T(B3668__3704))
{B3732 = B3668__3704}
else
{
var B3669__3705 = binaryEE__2757(B3665__3694, "%while");
if ($T(B3669__3705))
{B3732 = B3669__3705}
else
{
var B3670__3706 = binaryEE__2757(B3665__3694, "%array");
if ($T(B3670__3706))
{B3732 = B3670__3706}
else
{
var B3671__3707 = binaryEE__2757(B3665__3694, "%object");
if ($T(B3671__3707))
{B3732 = B3671__3707}
else
{
var B3672__3708 = binaryEE__2757(B3665__3694, "%get-property");
if ($T(B3672__3708))
{B3732 = B3672__3708}
else
{
var B3673__3709 = binaryEE__2757(B3665__3694, "%native-call");
if ($T(B3673__3709))
{B3732 = B3673__3709}
else
{
var B3674__3710 = binaryEE__2757(B3665__3694, "%infix");
if ($T(B3674__3710))
{B3732 = B3674__3710}
else
{
var B3675__3711 = binaryEE__2757(B3665__3694, "%plus");
if ($T(B3675__3711))
{B3732 = B3675__3711}
else
{
var B3676__3712 = binaryEE__2757(B3665__3694, "%minus");
if ($T(B3676__3712))
{B3732 = B3676__3712}
else
{
var B3677__3713 = binaryEE__2757(B3665__3694, "%times");
if ($T(B3677__3713))
{B3732 = B3677__3713}
else
B3732 = binaryEE__2757(B3665__3694, "%divide")}}}}}}}}}};
if ($T(B3732))
{return cons__2769(first__2749(form__3692), map__2766(rcurry__2767(inline__3691, env__3693), rest__2919(form__3692)))}
else
{
var B3678__3714 = binaryEE__2757(B3665__3694, "%native"),
B3733;
if ($T(B3678__3714))
{B3733 = B3678__3714}
else
{
var B3679__3715 = binaryEE__2757(B3665__3694, "%native-name");
if ($T(B3679__3715))
{B3733 = B3679__3715}
else
{
var B3680__3716 = binaryEE__2757(B3665__3694, "%define");
if ($T(B3680__3716))
{B3733 = B3680__3716}
else
B3733 = binaryEE__2757(B3665__3694, "%symbol")}};
if ($T(B3733))
{return form__3692}
else
{
var identifier__3717 = form__3692[0],
values__3718 = $SL.call(form__3692, 1),
B3681__3719 = destructure_symbol__3538(identifier__3717),
name__3720 = B3681__3719[0],
module_name__3721 = B3681__3719[1],
B3682__3722 = get__2737(env__3693, "original-identifier", name__3720);
if ($T(B3682__3722))
{
var original_identifier__3723 = B3682__3722,
B3683__3724 = destructure_symbol__3538(original_identifier__3723),
name__3725 = B3683__3724[0],
module_name__3726 = B3683__3724[1],
module__3727;
if ($T(binaryEE__2757(module_name__3726, get__2737(env__3693, "module", "name"))))
{module__3727 = get__2737(env__3693, "module")}
else
module__3727 = find_module__3629(module_name__3726);
var B3684__3728;
if ($T(inlineQ__3689(module__3727, name__3725)))
{B3684__3728 = get__2737(module__3727, "functions", name__3725)}
else
B3684__3728 = false;
if ($T(B3684__3728))
{
var definition__3729 = B3684__3728;
return inline_definition__3688(definition__3729, values__3718, env__3693)}
else
return map__2766(rcurry__2767(inline__3691, env__3693), form__3692)}
else
return map__2766(rcurry__2767(inline__3691, env__3693), form__3692)}}}}
else
return map__2766(rcurry__2767(inline__3691, env__3693), form__3692)}
else
return form__3692}, false)}
{
var EE__3734 = B1046["=="];
false;
inlineQ__3689 = Mmake_function__2687("inlineQ", function inlineQ__3735 (module__3736, name__3737)
{return anyQ__3025(curry__2762(EE__3734, name__3737), get__2737(module__3736, "inline"))}, false)}
{
var GE__3740 = B1046[">="],
restore_identifiers__3741 = B2679["restore-identifiers"],
rename_identifiers__3742 = B2679["rename-identifiers"];
false;
inline_definition__3688 = Mmake_function__2687("inline_definition", function inline_definition__3743 (definition__3744, values__3745, env__3746)
{
var ____3747 = definition__3744[0],
name__3748 = definition__3744[1],
arguments__3749 = definition__3744[2],
body__3750 = definition__3744[3],
argumentsT__3751 = rename_identifiers__3742(arguments__3749, env__3746),
bodyT__3752 = alpha_convert__3627(body__3750, env__3746),
B3738__3753 = size__2807(arguments__3749),
i__3754 = 0;
while ($T(not__2756(GE__3740(i__3754, B3738__3753))))
{
(function B3739__3755 (i__3756)
{
var argumentT__3757 = element__2808(argumentsT__3751, i__3756),
value__3758 = element__2808(values__3745, i__3756),
valueT__3759;
if ($T(value__3758))
{valueT__3759 = inline__3690(value__3758, env__3746)}
else
valueT__3759 = [B3234, "undefined"];
return bodyT__3752 = [B2800, [argumentT__3757, valueT__3759], bodyT__3752]})(i__3754);
i__3754 = (i__3754 + 1)};
false;
restore_identifiers__3741(arguments__3749, env__3746);
return bodyT__3752}, false)}
{
var lift_symbol__3760,
lift_symbols__3761;
false;
lift_symbols__3761 = Mmake_function__2687("lift_symbols", function lift_symbols__3762 (exp__3763, env__3764)
{return lift_symbol__3760(exp__3763, env__3764, identity__3632)}, false);
exports["lift-symbols"] = lift_symbols__3761}
{
var B3854 = $K("module"),
lift_symbolT__3787,
lift_value__3788,
lift_symbolTT__3789,
LkeywordG__3790 = B1046["<keyword>"],
Lhash_symbolG__3791 = B1046["<hash-symbol>"];
false;
lift_symbol__3760 = Mmake_function__2687("lift_symbol", function lift_symbol__3792 (exp__3793, env__3794, k__3795)
{B3855:while(true){
var B3852;
if ($T(instanceQ__2846(exp__3793, LarrayG__2847)))
{B3852 = not__2756(emptyQ__2843(exp__3793))}
else
B3852 = false;
if ($T(B3852))
{
var B3765__3796 = symbol_name__2690(first__2749(exp__3793));
if ($T(binaryEE__2757(B3765__3796, "%bind")))
{
var ____3797 = exp__3793[0],
B3766__3798 = exp__3793[1],
var__3799 = B3766__3798[0],
value__3800 = B3766__3798[1],
body__3801 = exp__3793[2];
arguments = [value__3800, env__3794, (function B3856 (lift_symbol__3792, body__3801, k__3795, B2800, var__3799)
{return function B3767__3802 (lvalue__3803, env__3804)
{return lift_symbol__3792(body__3801, env__3804, function B3768__3805 (lbody__3806, env__3807)
{return k__3795([B2800, [var__3799, lvalue__3803], lbody__3806], env__3807)})}})(lift_symbol__3792, body__3801, k__3795, B2800, var__3799)];
exp__3793 = arguments[0];
env__3794 = arguments[1];
k__3795 = arguments[2];
continue B3855}
else
if ($T(binaryEE__2757(B3765__3796, "%set")))
{
var ____3808 = exp__3793[0],
e1__3809 = exp__3793[1],
e2__3810 = exp__3793[2];
arguments = [e2__3810, env__3794, (function B3857 (k__3795, B2789, e1__3809)
{return function B3769__3811 (le2__3812, env__3813)
{return k__3795([B2789, e1__3809, le2__3812], env__3813)}})(k__3795, B2789, e1__3809)];
exp__3793 = arguments[0];
env__3794 = arguments[1];
k__3795 = arguments[2];
continue B3855}
else
if ($T(binaryEE__2757(B3765__3796, "%method")))
{
var ____3814 = exp__3793[0],
name__3815 = exp__3793[1],
arguments__3816 = exp__3793[2],
body__3817 = exp__3793[3];
arguments = [body__3817, env__3794, (function B3858 (k__3795, B2782, name__3815, arguments__3816)
{return function B3770__3818 (lbody__3819, env__3820)
{return k__3795([B2782, name__3815, arguments__3816, lbody__3819], env__3820)}})(k__3795, B2782, name__3815, arguments__3816)];
exp__3793 = arguments[0];
env__3794 = arguments[1];
k__3795 = arguments[2];
continue B3855}
else
{
var B3771__3821 = binaryEE__2757(B3765__3796, "%begin"),
B3853;
if ($T(B3771__3821))
{B3853 = B3771__3821}
else
{
var B3772__3822 = binaryEE__2757(B3765__3796, "%if");
if ($T(B3772__3822))
{B3853 = B3772__3822}
else
{
var B3773__3823 = binaryEE__2757(B3765__3796, "%while");
if ($T(B3773__3823))
{B3853 = B3773__3823}
else
{
var B3774__3824 = binaryEE__2757(B3765__3796, "%array");
if ($T(B3774__3824))
{B3853 = B3774__3824}
else
{
var B3775__3825 = binaryEE__2757(B3765__3796, "%object");
if ($T(B3775__3825))
{B3853 = B3775__3825}
else
{
var B3776__3826 = binaryEE__2757(B3765__3796, "%get-property");
if ($T(B3776__3826))
{B3853 = B3776__3826}
else
{
var B3777__3827 = binaryEE__2757(B3765__3796, "%infix");
if ($T(B3777__3827))
{B3853 = B3777__3827}
else
{
var B3778__3828 = binaryEE__2757(B3765__3796, "%native");
if ($T(B3778__3828))
{B3853 = B3778__3828}
else
{
var B3779__3829 = binaryEE__2757(B3765__3796, "%native-name");
if ($T(B3779__3829))
{B3853 = B3779__3829}
else
{
var B3780__3830 = binaryEE__2757(B3765__3796, "%native-call");
if ($T(B3780__3830))
{B3853 = B3780__3830}
else
{
var B3781__3831 = binaryEE__2757(B3765__3796, "%plus");
if ($T(B3781__3831))
{B3853 = B3781__3831}
else
{
var B3782__3832 = binaryEE__2757(B3765__3796, "%minus");
if ($T(B3782__3832))
{B3853 = B3782__3832}
else
{
var B3783__3833 = binaryEE__2757(B3765__3796, "%times");
if ($T(B3783__3833))
{B3853 = B3783__3833}
else
B3853 = binaryEE__2757(B3765__3796, "%divide")}}}}}}}}}}}};
if ($T(B3853))
{
var m__3834 = exp__3793[0],
eT__3835 = $SL.call(exp__3793, 1);
return lift_symbolT__3787(eT__3835, env__3794, function B3784__3836 (leT__3837, env__3838)
{return k__3795(cons__2769(m__3834, leT__3837), env__3838)})}
else
if ($T(binaryEE__2757(B3765__3796, "%try")))
{
var ____3839 = exp__3793[0],
e1__3840 = exp__3793[1],
v__3841 = exp__3793[2],
e2__3842 = exp__3793[3];
return lift_symbolT__3787([e1__3840, e2__3842], env__3794, function B3785__3843 (leT__3844, env__3845)
{
var le1__3846 = leT__3844[0],
le2__3847 = leT__3844[1];
return k__3795([B3504, le1__3846, v__3841, le2__3847], env__3845)})}
else
if ($T(binaryEE__2757(B3765__3796, "%symbol")))
{
var ____3848 = exp__3793[0],
name__3849 = exp__3793[1],
module__3850 = exp__3793[2];
return lift_value__3788(name__3849, exp__3793, "symbol", env__3794, k__3795, B3854, module__3850)}
else
return lift_symbolTT__3789(exp__3793, env__3794, k__3795)}}
else
{
var B3786__3851 = exp__3793;
if ($T(instanceQ__2846(B3786__3851, LkeywordG__3790)))
{return lift_value__3788(symbol_name__2690(exp__3793), exp__3793, "keyword", env__3794, k__3795)}
else
if ($T(instanceQ__2846(B3786__3851, Lhash_symbolG__3791)))
{return lift_value__3788(symbol_name__2690(exp__3793), exp__3793, "hash", env__3794, k__3795)}
else
return k__3795(exp__3793, env__3794)};
break}}, false)}
{
false;
lift_value__3788 = Mmake_function__2687("lift_value", function lift_value__3862 (name__3863, value__3864, type__3865, env__3866, k__3867)
{
var B3859__3868 = $SL.call(arguments, 5),
B3860__3869 = Mkeys__2738(B3859__3868, {module:""}),
module__3870 = B3860__3869.module,
B3861__3871 = get__2737(env__3866, "lifted", type__3865, module__3870, name__3863);
if ($T(B3861__3871))
{
var t__3872 = B3861__3871;
return k__3867(t__3872, env__3866)}
else
{
var t__3873 = get_setter__2736(env__3866, "lifted", type__3865, module__3870, name__3863, generate_symbol__2848(env__3866));
return [B2800, [t__3873, value__3864], k__3867(t__3873, env__3866)]}}, false)}
{
false;
lift_symbolT__3787 = Mmake_function__2687("lift_symbolT", function lift_symbolT__3874 (expT__3875, env__3876, k__3877)
{if ($T(emptyQ__2843(expT__3875)))
{return k__3877([], env__3876)}
else
return lift_symbolTT__3789(expT__3875, env__3876, k__3877)}, false)}
{
false;
lift_symbolTT__3789 = Mmake_function__2687("lift_symbolTT", function lift_symbolTT__3880 (exp__3881, env__3882, k__3883)
{return lift_symbol__3760(first__2749(exp__3881), env__3882, function B3878__3884 (t__3885, env__3886)
{return lift_symbolT__3787(rest__2919(exp__3881), env__3886, function B3879__3887 (tT__3888, env__3889)
{return k__3883(cons__2769(t__3885, tT__3888), env__3889)})})}, false)}
{
var B3895 = $K("string"),
read__3890 = B2676.read,
Lstring_streamG__3891 = B2673["<string-stream>"],
read_program__3892;
false;
read_program__3892 = Mmake_function__2687("read_program", function read_program__3893 (source__3894)
{return read__3890(make__2759(Lstring_streamG__3891, B3895, concatenate__2689("(", source__3894, "\n)")))}, false)}
{
var B3929 = $K("filter"),
LdateG__3900 = B2675["<date>"],
lift_defines__3901 = B2680["lift-defines"],
choose__3902 = B1046.choose,
hasQ__3903 = B1046["has?"],
normalize_term__3904 = B2682["normalize-term"],
transform_statementsN__3905 = B2683["transform-statements!"],
optimize_tail_callsN__3906 = B2684["optimize-tail-calls!"],
flatten_statementsN__3907 = B2685["flatten-statements!"],
compile_js__3908 = B2686["compile-js"],
compile_expression__3909;
false;
compile_expression__3909 = Mmake_function__2687("compile_expression", function compile_expression__3910 (exp__3911, env__3912)
{return reduce__2829(function B3896__3913 (result__3914, nameSpass__3915)
{
var name__3916 = nameSpass__3915[0],
pass__3917 = nameSpass__3915[1],
start__3918 = make__2759(LdateG__3900),
result__3919 = pass__3917(result__3914),
end__3920 = make__2759(LdateG__3900),
B3897__3921 = get__2737(env__3912, "timing", name__3916),
B3926;
if ($T(B3897__3921))
{B3926 = B3897__3921}
else
B3926 = 0;
var B3927 = (end__3920 - start__3918),
B3928 = (B3926 + B3927);
get_setter__2736(env__3912, "timing", name__3916, B3928);
return result__3919}, exp__3911, [["macroexpansion", rcurry__2767(macroexpand_all__2765, env__3912)], ["define lifting", rcurry__2767(lift_defines__3901, env__3912)], ["free variable definition", rcurry__2767(define_free_variables__3633, env__3912)], ["alpha conversion", rcurry__2767(alpha_convert__3627, env__3912)], ["free variable definition #2", rcurry__2767(define_free_variables__3633, env__3912, B3929, curry__2762(choose__3902, function B3898__3922 (variable__3923)
{return not__2756(hasQ__3903(get__2737(env__3912, "original-identifier"), symbol_name__2690(variable__3923)))}))], ["ANF transformation", rcurry__2767(normalize_term__3904, env__3912)], ["symbol lifting", rcurry__2767(lift_symbols__3761, env__3912)], ["statement transfomation", rcurry__2767(transform_statementsN__3905, env__3912)], ["TCO", function B3899__3924 (exp__3925)
{return optimize_tail_callsN__3906(exp__3925, env__3912)}], ["statement flattening", flatten_statementsN__3907], ["code generation", rcurry__2767(compile_js__3908, env__3912)]])}, false);
exports["compile-expression"] = compile_expression__3909}
{
var resolve_path__3930 = B2677["resolve-path"],
executable_path__3931;
false;
executable_path__3931 = Mmake_function__2687("executable_path", function executable_path__3932 (module_name__3933)
{return resolve_path__3930("build", concatenate__2689(module_name__3933, ".js"))}, false)}
{
var module_path__3934;
false;
module_path__3934 = Mmake_function__2687("module_path", function module_path__3935 (base_path__3936, module_name__3937)
{return resolve_path__3930(base_path__3936, concatenate__2689(module_name__3937, ".rm"))}, false)}
{
var source_path__3938;
false;
source_path__3938 = Mmake_function__2687("source_path", function source_path__3939 (module_name__3940)
{return resolve_path__3930("src", concatenate__2689(module_name__3940, ".ralph"))}, false)}
{
var L__3942 = B1046["<"],
file_properties__3943 = B2677["file-properties"],
file_existsQ__3944 = B2677["file-exists?"],
recompileQ__3945;
false;
recompileQ__3945 = Mmake_function__2687("recompileQ", function recompileQ__3946 (module_name__3947)
{if ($T(not__2756(get__2737(TmodulesT__2701, module_name__3947, "native?"))))
{
var path__3948 = executable_path__3931(module_name__3947),
B3941__3949 = not__2756(file_existsQ__3944(path__3948));
if ($T(B3941__3949))
{return B3941__3949}
else
{
var path2__3950 = source_path__3938(module_name__3947);
return L__3942(get__2737(file_properties__3943(path__3948), "modification-date"), get__2737(file_properties__3943(path2__3950), "modification-date"))}}}, false)}
{
var chain_object__3955 = B1046["chain-object"],
compile_module__3956,
process_names__3957,
object_properties__3958 = B1046["object-properties"];
false;
compile_time_import_module__3444 = Mmake_function__2687("compile_time_import_module", function compile_time_import_module__3959 (env__3960, module_name__3961)
{
var B3951__3962 = $SL.call(arguments, 2),
B3952__3963 = Mkeys__2738(B3951__3962, {options:false}),
options__3964 = B3952__3963.options,
B3953__3971;
if ($T(binaryEE__2757(module_name__3961, "ralph/core")))
{B3953__3971 = [Tcore_macrosT__2801, Tcore_symbol_macrosT__3528]}
else
{
compile_module__3956(module_name__3961);
var definitions__3965 = require(module_name__3961),
macros__3966 = make_plain_object__2720(),
symbol_macros__3967 = make_plain_object__2720();
do__2735(function B3954__3968 (name__3969)
{
var definition__3970 = get__2737(definitions__3965, name__3969);
if ($T(get__2737(definition__3970, "%macro?")))
{return macros__3966[name__3969] = definition__3970}
else
if ($T(get__2737(definition__3970, "%symbol-macro?")))
{return symbol_macros__3967[name__3969] = definition__3970}}, apply__2733(process_names__3957, object_properties__3958(definitions__3965), options__3964));
B3953__3971 = [macros__3966, symbol_macros__3967]};
var macros__3972 = B3953__3971[0],
symbol_macros__3973 = B3953__3971[1];
chain_object__3955(get__2737(env__3960, "macros"), macros__3972);
return chain_object__3955(get__2737(env__3960, "symbol-macros"), symbol_macros__3973)}, false)}
{
var removeN__3979 = B1046["remove!"],
set_unionN__3980 = B1046["set-union!"],
as_object__3981 = B1046["as-object"],
as_set__3982 = B1046["as-set"];
false;
process_names__3957 = Mmake_function__2687("process_names", function process_names__3983 (all__3984)
{
var B3974__3985 = $SL.call(arguments, 1),
B3975__3986 = Mkeys__2738(B3974__3985, {only:false,
exclude:false,
prefix:false,
rename:false}),
only__3987 = B3975__3986.only,
exclude__3988 = B3975__3986.exclude,
prefix__3989 = B3975__3986.prefix,
rename__3990 = B3975__3986.rename,
resolve__3991 = function resolve__3992 (exp__3993)
{if ($T(instanceQ__2846(exp__3993, LstringG__3284)))
{return exp__3993}
else
return identifier_name__2696(exp__3993)},
B4001;
if ($T(instanceQ__2846(only__3987, LarrayG__2847)))
{B4001 = map__2766(resolve__3991, only__3987)}
else
B4001 = all__3984;
var names__3994 = as_set__3982(B4001),
B3976__3995 = rename__3990,
B4002;
if ($T(B3976__3995))
{B4002 = B3976__3995}
else
B4002 = [];
var B4003 = map__2766(resolve__3991, B4002),
renamings__3996 = as_object__3981(B4003);
do__2735(curry__2762(removeN__3979, names__3994), map__2766(resolve__3991, exclude__3988));
set_unionN__3980(names__3994, object_properties__3958(renamings__3996));
return map__2766(function B3977__3997 (name__3998)
{
var B3978__3999 = get__2737(renamings__3996, name__3998);
if ($T(B3978__3999))
{
var renaming__4000 = B3978__3999;
return [name__3998, renaming__4000]}
else
if ($T(instanceQ__2846(prefix__3989, LstringG__3284)))
{return [name__3998, concatenate__2689(prefix__3989, name__3998)]}
else
return name__3998}, names__3994)}, false)}
{
var push__4005 = B1046.push;
false;
import_module__3445 = Mmake_function__2687("import_module", function import_module__4006 (module__4007, module_name__4008)
{
var options__4009 = $SL.call(arguments, 2),
B4004__4010 = find_module__3629(module_name__4008);
if ($T(B4004__4010))
{
var other_module__4011 = B4004__4010;
push__4005(get__2737(module__4007, "imports"), [other_module__4011, apply__2733(process_names__3957, get__2737(other_module__4011, "exports"), options__4009)]);
push__4005(get__2737(module__4007, "dependencies"), module_name__4008);
return other_module__4011}
else
return signal__2758(concatenate__2689("unable to import module '", module_name__4008, "'"))}, false);
exports["import-module"] = import_module__3445}
{
var read_module__4015;
false;
find_module__3629 = Mmake_function__2687("find_module", function find_module__4016 (module_name__4017)
{
var B4012__4018 = compile_module__3956(module_name__4017);
if ($T(B4012__4018))
{return B4012__4018}
else
{
var B4013__4019 = get__2737(TmodulesT__2701, module_name__4017);
if ($T(B4013__4019))
{return B4013__4019}
else
{
var B4014__4020 = read_module__4015("build", module_name__4017);
if ($T(B4014__4020))
{return B4014__4020}
else
return read_module__4015("src", module_name__4017)}}}, false)}
{
var B4026 = $K("name"),
read_file__4021 = B2677["read-file"];
false;
read_module__4015 = Mmake_function__2687("read_module", function read_module__4022 (base_path__4023, module_name__4024)
{
var path__4025 = module_path__3934(base_path__4023, module_name__4024);
if ($T(file_existsQ__3944(path__4025)))
{return apply__2733(curry__2762(make__2759, LmoduleG__2708, B4026), read__3890(make__2759(Lstring_streamG__3891, B3895, read_file__4021(path__4025))))}}, false)}
{
var as_association_list__4033 = B1046["as-association-list"],
display_timing__4034;
false;
display_timing__4034 = Mmake_function__2687("display_timing", function display_timing__4035 (env__4036)
{
var B4027__4037 = as_association_list__4033(get__2737(env__4036, "timing")),
B4028__4038,
B4030__4039,
B4029__4040 = [B4027__4037];
while (true)
{
var B4031__4041 = B4028__4038,
B4047;
if ($T(B4031__4041))
{B4047 = B4031__4041}
else
B4047 = anyQ__3025(emptyQ__2843, B4029__4040);
var B4048 = not__2756(B4047);
if ($T(B4048))
{
var pass_nameStime__4042 = first__2749(B4027__4037);
(function B4032__4043 (pass_nameStime__4044)
{
var pass_name__4045 = pass_nameStime__4044[0],
time__4046 = pass_nameStime__4044[1];
return format_out__3628("- %s: %ds\n", pass_name__4045, (time__4046 / 1000))})(pass_nameStime__4042);
B4027__4037 = rest__2919(B4027__4037);
B4029__4040 = [B4027__4037]}
else
break};
return B4030__4039}, false)}
{
var B4064 = $K("exports"),
B4065 = $K("inline"),
B4066 = $K("dependencies"),
write_file__4051 = B2677["write-file"];
false;
compile_module__3956 = Mmake_function__2687("compile_module", function compile_module__4052 (module_name__4053)
{
if ($T(not__2756(hasQ__3903(TmodulesT__2701, module_name__4053))))
{
var B4049__4054 = read_module__4015("src", module_name__4053);
if ($T(B4049__4054))
{
var module__4055 = B4049__4054;
TmodulesT__2701[module_name__4053] = module__4055}};
if ($T(recompileQ__3945(module_name__4053)))
{
format_out__3628("Compiling: %s\n", module_name__4053);
if ($T(not__2756(file_existsQ__3944(source_path__3938(module_name__4053)))))
{signal__2758(concatenate__2689("unable to compile module '", module_name__4053, "'"))};
var module__4056 = make__2759(LmoduleG__2708, B4026, module_name__4053),
env__4057 = make__2759(LenvironmentG__2721, B3854, module__4056),
source__4058 = read_file__4021(source_path__3938(module_name__4053)),
program__4059 = read_program__3892(source__4058),
result__4060 = "";
TmodulesT__2701[module_name__4053] = module__4056;
compile_time_import_module__3444(env__4057, "ralph/core");
if ($T(not__2756(binaryEE__2757(module_name__4053, "ralph/core"))))
{
import_module__3445(module__4056, "ralph/core");
push__4005(program__4059, make_import_definition__3446("ralph/core", env__4057))};
do__2735(function B4050__4061 (expression__4062)
{
var code__4063 = compile_expression__3909(expression__4062, env__4057);
return result__4060 = concatenate__2689(result__4060, code__4063, "\n")}, program__4059);
write_file__4051(executable_path__3931(module_name__4053), result__4060);
write_file__4051(module_path__3934("build", module_name__4053), description__3626([module_name__4053, B4064, get__2737(module__4056, "exports"), B4065, get__2737(module__4056, "inline"), B4066, get__2737(module__4056, "dependencies")]));
format_out__3628("Finished: %s\n", module_name__4053);
display_timing__4034(env__4057);
return module__4056}}, false);
exports["compile-module"] = compile_module__3956}
{
var analyze_dependencies__4071;
false;
analyze_dependencies__4071 = Mmake_function__2687("analyze_dependencies", function analyze_dependencies__4072 (module_name__4073)
{
var B4067__4074 = find_module__3629(module_name__4073);
if ($T(B4067__4074))
{
var module__4075 = B4067__4074;
TmodulesT__2701[module_name__4073] = module__4075;
var B4068__4076 = module__4075,
dependencies__4077 = B4068__4076.dependencies,
result__4078 = copy_sequence__2806(dependencies__4077);
do__2735(function B4069__4079 (dependency__4080)
{return do__2735(function B4070__4081 (sub_dependency__4082)
{
if ($T(memberQ__3328(sub_dependency__4082, result__4078)))
{removeN__3979(result__4078, sub_dependency__4082)};
return push__4005(result__4078, sub_dependency__4082)}, analyze_dependencies__4072(dependency__4080))}, dependencies__4077);
return result__4078}
else
return signal__2758(concatenate__2689("unable to find-module '", module_name__4073, "'"))}, false);
exports["analyze-dependencies"] = analyze_dependencies__4071}
{
var client_path__4083;
false;
client_path__4083 = Mmake_function__2687("client_path", function client_path__4084 (module_name__4085)
{return resolve_path__3930("client", concatenate__2689(module_name__4085, ".js"))}, false)}
{
var B4113 = $K("append?"),
ensure_directories_exist__4092 = B2677["ensure-directories-exist"],
copy_file__4093 = B2677["copy-file"],
as_json__4094 = B1046["as-json"],
compile_client_application__4096;
false;
compile_client_application__4096 = Mmake_function__2687("compile_client_application", function compile_client_application__4097 (module_name__4098)
{
compile_module__3956(module_name__4098);
var dependencies__4099 = analyze_dependencies__4071(module_name__4098),
module_names__4100 = concatenate__2689(dependencies__4099, [module_name__4098]),
B4086__4101 = module_names__4100,
B4087__4102,
B4089__4103,
B4088__4104 = [B4086__4101];
while (true)
{
var B4090__4105 = B4087__4102,
B4111;
if ($T(B4090__4105))
{B4111 = B4090__4105}
else
B4111 = anyQ__3025(emptyQ__2843, B4088__4104);
var B4112 = not__2756(B4111);
if ($T(B4112))
{
var module_name__4106 = first__2749(B4086__4101);
(function B4091__4107 (module_name__4108)
{
var path__4109 = executable_path__3931(module_name__4108),
path2__4110 = client_path__4083(module_name__4108);
ensure_directories_exist__4092(path2__4110);
write_file__4051(path2__4110, format_to_string__2761("define(\"%s\", function (exports) {\n", module_name__4108));
copy_file__4093(path__4109, path2__4110, B4113, true);
return write_file__4051(path2__4110, "})", B4113, true)})(module_name__4106);
B4086__4101 = rest__2919(B4086__4101);
B4088__4104 = [B4086__4101]}
else
break};
B4089__4103;
return write_file__4051(client_path__4083("load"), format_to_string__2761("load(%s)", as_json__4094(module_names__4100)))}, false);
exports["compile-client-application"] = compile_client_application__4096}
