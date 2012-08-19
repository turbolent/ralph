var B2774 = require("ralph/core")
var B2776 = require("ralph/compiler/utilities")
var B2863 = $S("%begin"), dec = B2774.dec, size = B2774.size, B2779 = B2774["%make-function"], B2780 = B2774["instance?"], B2781 = B2774["<array>"], B2782 = B2774["=="], B2783 = B2774["last-setter"], B2784 = B2774.last, B2785 = B2774["third-setter"], B2786 = B2774.third, B2787 = B2774["second-setter"], B2788 = B2774.second, B2789 = B2774.concatenate, B2790 = B2774["symbol-name"], B2791 = B2774.first, B2792 = B2779("wrap_valueN", function B2864 (exp__2793, wrapper__2794)
{if ($T(B2780(exp__2793, B2781)))
{var sequence__2798 = exp__2793, B2853 = sequence__2798[0], B2795 = B2790(B2853), B2796 = B2782(B2795, "%begin"), B2854;
if ($T(B2796))
B2854 = B2796
else B2854 = B2782(B2795, "%bind");
if ($T(B2854))
{var array__2811 = exp__2793, array__2808 = exp__2793, B2809 = array__2808, B2810 = ((B2809 || false).length || 0), B2855 = (B2810 - 1), B2856 = array__2808[B2855], value__2812 = B2792(B2856, wrapper__2794);
array__2811[dec(size(array__2811), 1)] = value__2812;
return exp__2793}
else if ($T(B2782(B2795, "%if")))
{var array__2817 = exp__2793, sequence__2816 = exp__2793, B2857 = sequence__2816[2], value__2818 = B2792(B2857, wrapper__2794);
array__2817[2] = value__2818;
var array__2831 = exp__2793, array__2828 = exp__2793, B2829 = array__2828, B2830 = ((B2829 || false).length || 0), B2858 = (B2830 - 1), B2859 = array__2828[B2858], value__2832 = B2792(B2859, wrapper__2794);
array__2831[dec(size(array__2831), 1)] = value__2832;
return exp__2793}
else if ($T(B2782(B2795, "%while")))
return [B2863, exp__2793, B2792(false, wrapper__2794)]
else if ($T(B2782(B2795, "%try")))
{var array__2837 = exp__2793, sequence__2836 = exp__2793, B2860 = sequence__2836[1], value__2838 = B2792(B2860, wrapper__2794);
array__2837[1] = value__2838;
var array__2851 = exp__2793, array__2848 = exp__2793, B2849 = array__2848, B2850 = ((B2849 || false).length || 0), B2861 = (B2850 - 1), B2862 = array__2848[B2861], value__2852 = B2792(B2862, wrapper__2794);
array__2851[dec(size(array__2851), 1)] = value__2852;
return exp__2793}
else return B2789(wrapper__2794, [exp__2793])}
else return B2789(wrapper__2794, [exp__2793])}, false)
var B2867 = $S("%return"), B2865 = B2779("add_explicit_return", function B2868 (exp__2866)
{return B2792(exp__2866, [B2867])}, false)
var B2895 = $S("%if"), B2896 = $S("%while"), B2897 = $S("%bind"), B2898 = $S("%try"), trueQ = B2774["true?"], B2869 = B2774.not, B2870 = B2774["empty?"], B2871 = B2774["member?"], B2872 = B2779("statementQ", function B2899 (exp__2873)
{if ($T(B2780(exp__2873, B2781)))
{var sequence__2885 = exp__2873, B2886 = sequence__2885, B2887 = ((B2886 || false).length || 0), B2888 = 0, value__2889 = (B2887 === B2888), B2892 = !(trueQ(value__2889));
if ($T(B2892))
{var sequence__2891 = exp__2873, B2893 = sequence__2891[0], B2894 = [B2895, B2896, B2863, B2897, B2898];
return B2871(B2893, B2894)}}}, false)
var B2902 = $S("%native"), B2900 = B2779("add_explicit_true", function B2903 (exp__2901)
{return [[B2902, "$T"], exp__2901]}, false)
{var B3020 = $S("%set"), B3021 = $S("%get-property"), B3022 = $S("%var"), dec = B2774.dec, size = B2774.size, B2906 = B2776["maybe-begin"], B2907 = B2774.map, B2908 = B2774.rcurry, B2909 = B2774.get, B2910 = B2774["first-setter"], B2911 = B2774.symbol, B2912 = B2779("transform_statementsN", function B3023 (exp__2913, env__2914)
{if ($T(B2780(exp__2913, B2781)))
{var sequence__2933 = exp__2913, B3006 = sequence__2933[0], B2915 = B2790(B3006);
if ($T(B2782(B2915, "%method")))
{var array__2946 = exp__2913, array__2943 = exp__2913, B2944 = array__2943, B2945 = ((B2944 || false).length || 0), B3007 = (B2945 - 1), B3008 = array__2943[B3007], B3009 = B2912(B3008, env__2914), value__2947 = B2865(B3009);
array__2946[dec(size(array__2946), 1)] = value__2947;
return exp__2913}
else if ($T(B2782(B2915, "%begin")))
{var ____2916 = exp__2913[0], exps__2917 = $SL.call(exp__2913, 1);
return B2906(B2907(B2908(B2912, env__2914), exps__2917))}
else if ($T(B2782(B2915, "%bind")))
{var ____2918 = exp__2913[0], B2919 = exp__2913[1], var__2920 = B2919[0], value__2921 = B2919[1], body__2922 = exp__2913[2];
if ($T(B2872(value__2921)))
return [B2897, [var__2920, false], [B2863, B2792(B2912(value__2921, env__2914), [B3020, var__2920]), B2912(body__2922, env__2914)]]
else return [B2897, [var__2920, B2912(value__2921, env__2914)], B2912(body__2922, env__2914)]}
else if ($T(B2782(B2915, "%if")))
{var ____2923 = exp__2913[0], test__2924 = exp__2913[1], then__2925 = exp__2913[2], else__2926 = exp__2913[3];
return [B2895, B2900(test__2924), B2912(then__2925, env__2914), B2912(else__2926, env__2914)]}
else if ($T(B2782(B2915, "%while")))
{var array__2952 = exp__2913, sequence__2951 = exp__2913, B3010 = sequence__2951[1], value__2953 = B2900(B3010);
array__2952[1] = value__2953;
var array__2958 = exp__2913, sequence__2957 = exp__2913, B3011 = sequence__2957[2], value__2959 = B2912(B3011, env__2914);
array__2958[2] = value__2959;
return exp__2913}
else if ($T(B2782(B2915, "%try")))
{var array__2964 = exp__2913, sequence__2963 = exp__2913, B3012 = sequence__2963[1], value__2965 = B2912(B3012, exp__2913);
array__2964[1] = value__2965;
var array__2978 = exp__2913, array__2975 = exp__2913, B2976 = array__2975, B2977 = ((B2976 || false).length || 0), B3013 = (B2977 - 1), B3014 = array__2975[B3013], value__2979 = B2912(B3014, env__2914);
array__2978[dec(size(array__2978), 1)] = value__2979;
return exp__2913}
else if ($T(B2782(B2915, "%set")))
{var ____2927 = exp__2913[0], identifier__2928 = exp__2913[1], value__2929 = exp__2913[2], valueT__2930 = B2912(value__2929, env__2914), definition_name__2931 = B2909(env__2914, "definition-names", B2790(identifier__2928)), B3015;
if ($T(definition_name__2931))
B3015 = B2871(definition_name__2931, B2909(env__2914, "module", "exports"))
else B3015 = false;
if ($T(B3015))
{var array__2982 = exp__2913, value__2983 = B2911("%begin");
array__2982[0] = value__2983;
var array__2986 = exp__2913, value__2987 = [B3020, identifier__2928, valueT__2930];
array__2986[1] = value__2987;
var array__2990 = exp__2913, value__2991 = [B3020, [B3021, [B2902, "exports"], definition_name__2931], identifier__2928];
array__2990[2] = value__2991}
else {var array__2994 = exp__2913, value__2995 = valueT__2930;
array__2994[2] = value__2995};
return exp__2913}
else if ($T(B2782(B2915, "%define")))
{var B3016 = B3022, array__3003 = exp__2913, B3004 = array__3003, B3005 = ((B3004 || false).length || 0), B3017 = (B3005 - 1), B3018 = array__3003[B3017], B3019 = [B3018, false];
return [B3016, B3019]}
else return B2907(B2908(B2912, env__2914), exp__2913)}
else return exp__2913}, false);
exports["transform-statements!"] = B2912}
