{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B2814(name__2815, value__2816) {
            var B2818 = (exports);
            return(B2818[name__2815] = value__2816);
        };
        {
            ($module)['%eval'] = function B2817() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2819 = require('ralph/core');
var B2820 = require('ralph/compiler/utilities');
{
    {
        ($module)['lift-symbols'] = function B2822(exp__2823, env__2824) {
            return(($module)['lift-symbol'](exp__2823, env__2824, B2819['identity']));
        };
        ($module)['%export']('lift-symbols', ($module)['lift-symbols']);
    }
    B2819['%annotate-function'](($module)['lift-symbols'], 'lift-symbols', false);
}
{
    var B2846 = $K('module');
    {
        var B2847 = $S('%bind', 'ralph/core');
        {
            var B2848 = $S('%method', 'ralph/core');
            {
                var B2849 = $S('%set', 'ralph/core');
                {
                    var B2850 = $S('%get-property', 'ralph/core');
                    {
                        var B2851 = $S('%try', 'ralph/core');
                        {
                            ($module)['lift-symbol'] = function B2852(exp__2853, env__2854, k__2855) {
                                var B2909 = false;
                                if (($T)(B2819['instance?'](exp__2853, B2819['<array>'])))
                                    B2909 = B2819['not'](B2819['empty?'](exp__2853));
                                else
                                    B2909 = false;
                                if (($T)(B2909)) {
                                    var B2856 = B2819['symbol-name'](B2819['first'](exp__2853));
                                    if (($T)(B2819['=='](B2856, '%quote'))) {
                                        var B2857 = B2819['destructure-symbol'](B2819['second'](exp__2853));
                                        {
                                            var name__2858 = B2857[0];
                                            {
                                                var module_name__2859 = B2857[1];
                                                return(($module)['lift-value'](name__2858, exp__2853, 'symbol', env__2854, k__2855, B2846, module_name__2859));
                                            }
                                        }
                                    } else if (($T)(B2819['=='](B2856, '%bind'))) {
                                        var ____2860 = exp__2853[0];
                                        {
                                            var B2861 = exp__2853[1];
                                            {
                                                var identifier__2862 = B2861[0];
                                                {
                                                    var value__2863 = B2861[1];
                                                    {
                                                        var form__2864 = exp__2853[2];
                                                        return(($module)['lift-symbol*']([
                                                            value__2863,
                                                            form__2864
                                                        ], env__2854, function B2865(formsT__2866) {
                                                            var valueT__2867 = formsT__2866[0];
                                                            {
                                                                var formT__2868 = formsT__2866[1];
                                                                return(k__2855([
                                                                    B2847,
                                                                    [
                                                                        identifier__2862,
                                                                        valueT__2867
                                                                    ],
                                                                    formT__2868
                                                                ]));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        }
                                    } else if (($T)(B2819['=='](B2856, '%method'))) {
                                        var ____2869 = exp__2853[0];
                                        {
                                            var name__2870 = exp__2853[1];
                                            {
                                                var parameters__2871 = exp__2853[2];
                                                {
                                                    var form__2872 = exp__2853[3];
                                                    return(($module)['lift-symbol'](form__2872, env__2854, function B2873(formT__2874) {
                                                        return(k__2855([
                                                            B2848,
                                                            name__2870,
                                                            parameters__2871,
                                                            formT__2874
                                                        ]));
                                                    }));
                                                }
                                            }
                                        }
                                    } else if (($T)(B2819['=='](B2856, '%set'))) {
                                        var ____2875 = exp__2853[0];
                                        {
                                            var place__2876 = exp__2853[1];
                                            {
                                                var value__2877 = exp__2853[2];
                                                return(($module)['lift-symbol'](value__2877, env__2854, function B2878(valueT__2879) {
                                                    if (($T)(B2820['op?']('%get-property', place__2876)))
                                                        return(($module)['lift-symbol**'](B2819['rest'](place__2876), env__2854, function B2880(argumentsT__2881) {
                                                            return(k__2855([
                                                                B2849,
                                                                B2819['%concat']([B2850], argumentsT__2881),
                                                                valueT__2879
                                                            ]));
                                                        }));
                                                    else
                                                        return(k__2855([
                                                            B2849,
                                                            place__2876,
                                                            valueT__2879
                                                        ]));
                                                }));
                                            }
                                        }
                                    } else {
                                        var B2882 = B2819['=='](B2856, '%define');
                                        {
                                            var B2910 = false;
                                            if (($T)(B2882))
                                                B2910 = B2882;
                                            else
                                                B2910 = B2819['=='](B2856, '%var');
                                            if (($T)(B2910)) {
                                                var op__2883 = exp__2853[0];
                                                {
                                                    var identifier__2884 = exp__2853[1];
                                                    {
                                                        var value__2885 = exp__2853[2];
                                                        return(($module)['lift-symbol'](value__2885, env__2854, function B2886(valueT__2887) {
                                                            return(k__2855([
                                                                op__2883,
                                                                identifier__2884,
                                                                valueT__2887
                                                            ]));
                                                        }));
                                                    }
                                                }
                                            } else {
                                                var B2888 = B2819['=='](B2856, '%if');
                                                {
                                                    var B2911 = false;
                                                    if (($T)(B2888))
                                                        B2911 = B2888;
                                                    else {
                                                        var B2889 = B2819['=='](B2856, '%begin');
                                                        if (($T)(B2889))
                                                            B2911 = B2889;
                                                        else {
                                                            var B2890 = B2819['=='](B2856, '%while');
                                                            if (($T)(B2890))
                                                                B2911 = B2890;
                                                            else {
                                                                var B2891 = B2819['=='](B2856, '%infix');
                                                                if (($T)(B2891))
                                                                    B2911 = B2891;
                                                                else {
                                                                    var B2892 = B2819['=='](B2856, '%native');
                                                                    if (($T)(B2892))
                                                                        B2911 = B2892;
                                                                    else {
                                                                        var B2893 = B2819['=='](B2856, '%native-call');
                                                                        if (($T)(B2893))
                                                                            B2911 = B2893;
                                                                        else {
                                                                            var B2894 = B2819['=='](B2856, '%object');
                                                                            if (($T)(B2894))
                                                                                B2911 = B2894;
                                                                            else {
                                                                                var B2895 = B2819['=='](B2856, '%array');
                                                                                if (($T)(B2895))
                                                                                    B2911 = B2895;
                                                                                else
                                                                                    B2911 = B2819['=='](B2856, '%get-property');
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (($T)(B2911)) {
                                                        var op__2896 = exp__2853[0];
                                                        {
                                                            var forms__2897 = $SL.call(exp__2853, 1);
                                                            return(($module)['lift-symbol*'](forms__2897, env__2854, function B2898(formsT__2899) {
                                                                return(k__2855(B2819['%concat']([op__2896], formsT__2899)));
                                                            }));
                                                        }
                                                    } else if (($T)(B2819['=='](B2856, '%try'))) {
                                                        var ____2900 = exp__2853[0];
                                                        {
                                                            var protected_form__2901 = exp__2853[1];
                                                            {
                                                                var identifier__2902 = exp__2853[2];
                                                                {
                                                                    var handling_form__2903 = exp__2853[3];
                                                                    return(($module)['lift-symbol*']([
                                                                        protected_form__2901,
                                                                        handling_form__2903
                                                                    ], env__2854, function B2904(formsT__2905) {
                                                                        var protected_formT__2906 = formsT__2905[0];
                                                                        {
                                                                            var handling_formT__2907 = formsT__2905[1];
                                                                            return(k__2855([
                                                                                B2851,
                                                                                protected_formT__2906,
                                                                                identifier__2902,
                                                                                handling_formT__2907
                                                                            ]));
                                                                        }
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(($module)['lift-symbol**'](exp__2853, env__2854, k__2855));
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var B2908 = exp__2853;
                                    if (($T)(B2819['instance?'](B2908, B2819['<keyword>'])))
                                        return(($module)['lift-value'](B2819['symbol-name'](exp__2853), exp__2853, 'keyword', env__2854, k__2855));
                                    else if (($T)(B2819['instance?'](B2908, B2819['<hash-symbol>'])))
                                        return(($module)['lift-value'](B2819['symbol-name'](exp__2853), exp__2853, 'hash', env__2854, k__2855));
                                    else
                                        return(k__2855(exp__2853));
                                }
                            };
                            B2819['%annotate-function'](($module)['lift-symbol'], 'lift-symbol', false);
                        }
                    }
                }
            }
        }
    }
}
{
    var B2916 = $S('%begin', 'ralph/core');
    {
        var B2917 = $S('%define', 'ralph/core');
        {
            ($module)['lift-value'] = function B2918(name__2919, value__2920, type__2921, env__2922, k__2923) {
                var B2924 = $SL.call(arguments, 5);
                {
                    var B2925 = B2819['%keys'](B2924, { 'module': '' });
                    {
                        var module__2926 = B2925['module'];
                        {
                            var B2927 = B2819['get'](env__2922, 'lifted', type__2921, module__2926, name__2919);
                            if (($T)(B2927)) {
                                var t__2928 = B2927;
                                return(k__2923(t__2928));
                            } else {
                                var t__2929 = B2819['get-setter'](env__2922, 'lifted', type__2921, module__2926, name__2919, B2819['generate-symbol']());
                                return([
                                    B2916,
                                    [
                                        B2917,
                                        t__2929,
                                        value__2920
                                    ],
                                    k__2923(t__2929)
                                ]);
                            }
                        }
                    }
                }
            };
            B2819['%annotate-function'](($module)['lift-value'], 'lift-value', false);
        }
    }
}
{
    ($module)['lift-symbol*'] = function B2931(expT__2932, env__2933, k__2934) {
        if (($T)(B2819['empty?'](expT__2932)))
            return(k__2934([]));
        else
            return(($module)['lift-symbol**'](expT__2932, env__2933, k__2934));
    };
    B2819['%annotate-function'](($module)['lift-symbol*'], 'lift-symbol*', false);
}
{
    ($module)['lift-symbol**'] = function B2938(exp__2939, env__2940, k__2941) {
        return(($module)['lift-symbol'](B2819['first'](exp__2939), env__2940, function B2942(t__2943) {
            return(($module)['lift-symbol*'](B2819['rest'](exp__2939), env__2940, function B2944(tT__2945) {
                return(k__2941(B2819['cons'](t__2943, tT__2945)));
            }));
        }));
    };
    B2819['%annotate-function'](($module)['lift-symbol**'], 'lift-symbol**', false);
}
