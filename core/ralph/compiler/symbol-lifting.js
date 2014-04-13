{
    var $module = Object.create(null);
    ($module)['%export'] = function B2799(name__2800, value__2801) {
        var B2802 = (exports);
        return(B2802[name__2800] = value__2801);
    };
}
var B2803 = require('ralph/core');
var B2804 = require('ralph/compiler/utilities');
{
    {
        ($module)['lift-symbols'] = function B2806(exp__2807, env__2808) {
            return(($module)['lift-symbol'](exp__2807, env__2808, B2803['identity']));
        };
        ($module)['%export']('lift-symbols', ($module)['lift-symbols']);
    }
    B2803['%annotate-function'](($module)['lift-symbols'], 'lift-symbols', false);
}
{
    var B2830 = $K('module');
    {
        var B2831 = $S('%bind', 'ralph/core');
        {
            var B2832 = $S('%method', 'ralph/core');
            {
                var B2833 = $S('%set', 'ralph/core');
                {
                    var B2834 = $S('%get-property', 'ralph/core');
                    {
                        var B2835 = $S('%try', 'ralph/core');
                        {
                            ($module)['lift-symbol'] = function B2836(exp__2837, env__2838, k__2839) {
                                var B2893 = false;
                                if (($T)(B2803['instance?'](exp__2837, B2803['<array>'])))
                                    B2893 = B2803['not'](B2803['empty?'](exp__2837));
                                else
                                    B2893 = false;
                                if (($T)(B2893)) {
                                    var B2840 = B2803['symbol-name'](B2803['first'](exp__2837));
                                    if (($T)(B2803['=='](B2840, '%quote'))) {
                                        var B2841 = B2803['destructure-symbol'](B2803['second'](exp__2837));
                                        {
                                            var name__2842 = B2841[0];
                                            {
                                                var module_name__2843 = B2841[1];
                                                return(($module)['lift-value'](name__2842, exp__2837, 'symbol', env__2838, k__2839, B2830, module_name__2843));
                                            }
                                        }
                                    } else if (($T)(B2803['=='](B2840, '%bind'))) {
                                        var ____2844 = exp__2837[0];
                                        {
                                            var B2845 = exp__2837[1];
                                            {
                                                var identifier__2846 = B2845[0];
                                                {
                                                    var value__2847 = B2845[1];
                                                    {
                                                        var form__2848 = exp__2837[2];
                                                        return(($module)['lift-symbol*']([
                                                            value__2847,
                                                            form__2848
                                                        ], env__2838, function B2849(formsT__2850) {
                                                            var valueT__2851 = formsT__2850[0];
                                                            {
                                                                var formT__2852 = formsT__2850[1];
                                                                return(k__2839([
                                                                    B2831,
                                                                    [
                                                                        identifier__2846,
                                                                        valueT__2851
                                                                    ],
                                                                    formT__2852
                                                                ]));
                                                            }
                                                        }));
                                                    }
                                                }
                                            }
                                        }
                                    } else if (($T)(B2803['=='](B2840, '%method'))) {
                                        var ____2853 = exp__2837[0];
                                        {
                                            var name__2854 = exp__2837[1];
                                            {
                                                var parameters__2855 = exp__2837[2];
                                                {
                                                    var form__2856 = exp__2837[3];
                                                    return(($module)['lift-symbol'](form__2856, env__2838, function B2857(formT__2858) {
                                                        return(k__2839([
                                                            B2832,
                                                            name__2854,
                                                            parameters__2855,
                                                            formT__2858
                                                        ]));
                                                    }));
                                                }
                                            }
                                        }
                                    } else if (($T)(B2803['=='](B2840, '%set'))) {
                                        var ____2859 = exp__2837[0];
                                        {
                                            var place__2860 = exp__2837[1];
                                            {
                                                var value__2861 = exp__2837[2];
                                                return(($module)['lift-symbol'](value__2861, env__2838, function B2862(valueT__2863) {
                                                    if (($T)(B2804['op?']('%get-property', place__2860)))
                                                        return(($module)['lift-symbol**'](B2803['rest'](place__2860), env__2838, function B2864(argumentsT__2865) {
                                                            return(k__2839([
                                                                B2833,
                                                                B2803['%concat']([B2834], argumentsT__2865),
                                                                valueT__2863
                                                            ]));
                                                        }));
                                                    else
                                                        return(k__2839([
                                                            B2833,
                                                            place__2860,
                                                            valueT__2863
                                                        ]));
                                                }));
                                            }
                                        }
                                    } else {
                                        var B2866 = B2803['=='](B2840, '%define');
                                        {
                                            var B2894 = false;
                                            if (($T)(B2866))
                                                B2894 = B2866;
                                            else
                                                B2894 = B2803['=='](B2840, '%var');
                                            if (($T)(B2894)) {
                                                var op__2867 = exp__2837[0];
                                                {
                                                    var identifier__2868 = exp__2837[1];
                                                    {
                                                        var value__2869 = exp__2837[2];
                                                        return(($module)['lift-symbol'](value__2869, env__2838, function B2870(valueT__2871) {
                                                            return(k__2839([
                                                                op__2867,
                                                                identifier__2868,
                                                                valueT__2871
                                                            ]));
                                                        }));
                                                    }
                                                }
                                            } else {
                                                var B2872 = B2803['=='](B2840, '%if');
                                                {
                                                    var B2895 = false;
                                                    if (($T)(B2872))
                                                        B2895 = B2872;
                                                    else {
                                                        var B2873 = B2803['=='](B2840, '%begin');
                                                        if (($T)(B2873))
                                                            B2895 = B2873;
                                                        else {
                                                            var B2874 = B2803['=='](B2840, '%while');
                                                            if (($T)(B2874))
                                                                B2895 = B2874;
                                                            else {
                                                                var B2875 = B2803['=='](B2840, '%infix');
                                                                if (($T)(B2875))
                                                                    B2895 = B2875;
                                                                else {
                                                                    var B2876 = B2803['=='](B2840, '%native');
                                                                    if (($T)(B2876))
                                                                        B2895 = B2876;
                                                                    else {
                                                                        var B2877 = B2803['=='](B2840, '%native-call');
                                                                        if (($T)(B2877))
                                                                            B2895 = B2877;
                                                                        else {
                                                                            var B2878 = B2803['=='](B2840, '%object');
                                                                            if (($T)(B2878))
                                                                                B2895 = B2878;
                                                                            else {
                                                                                var B2879 = B2803['=='](B2840, '%array');
                                                                                if (($T)(B2879))
                                                                                    B2895 = B2879;
                                                                                else
                                                                                    B2895 = B2803['=='](B2840, '%get-property');
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (($T)(B2895)) {
                                                        var op__2880 = exp__2837[0];
                                                        {
                                                            var forms__2881 = $SL.call(exp__2837, 1);
                                                            return(($module)['lift-symbol*'](forms__2881, env__2838, function B2882(formsT__2883) {
                                                                return(k__2839(B2803['%concat']([op__2880], formsT__2883)));
                                                            }));
                                                        }
                                                    } else if (($T)(B2803['=='](B2840, '%try'))) {
                                                        var ____2884 = exp__2837[0];
                                                        {
                                                            var protected_form__2885 = exp__2837[1];
                                                            {
                                                                var identifier__2886 = exp__2837[2];
                                                                {
                                                                    var handling_form__2887 = exp__2837[3];
                                                                    return(($module)['lift-symbol*']([
                                                                        protected_form__2885,
                                                                        handling_form__2887
                                                                    ], env__2838, function B2888(formsT__2889) {
                                                                        var protected_formT__2890 = formsT__2889[0];
                                                                        {
                                                                            var handling_formT__2891 = formsT__2889[1];
                                                                            return(k__2839([
                                                                                B2835,
                                                                                protected_formT__2890,
                                                                                identifier__2886,
                                                                                handling_formT__2891
                                                                            ]));
                                                                        }
                                                                    }));
                                                                }
                                                            }
                                                        }
                                                    } else
                                                        return(($module)['lift-symbol**'](exp__2837, env__2838, k__2839));
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var B2892 = exp__2837;
                                    if (($T)(B2803['instance?'](B2892, B2803['<keyword>'])))
                                        return(($module)['lift-value'](B2803['symbol-name'](exp__2837), exp__2837, 'keyword', env__2838, k__2839));
                                    else if (($T)(B2803['instance?'](B2892, B2803['<hash-symbol>'])))
                                        return(($module)['lift-value'](B2803['symbol-name'](exp__2837), exp__2837, 'hash', env__2838, k__2839));
                                    else
                                        return(k__2839(exp__2837));
                                }
                            };
                            B2803['%annotate-function'](($module)['lift-symbol'], 'lift-symbol', false);
                        }
                    }
                }
            }
        }
    }
}
{
    var B2900 = $S('%begin', 'ralph/core');
    {
        var B2901 = $S('%define', 'ralph/core');
        {
            ($module)['lift-value'] = function B2902(name__2903, value__2904, type__2905, env__2906, k__2907) {
                var B2908 = $SL.call(arguments, 5);
                {
                    var B2909 = B2803['%keys'](B2908, { 'module': '' });
                    {
                        var module__2910 = B2909['module'];
                        {
                            var B2911 = B2803['get'](env__2906, 'lifted', type__2905, module__2910, name__2903);
                            if (($T)(B2911)) {
                                var t__2912 = B2911;
                                return(k__2907(t__2912));
                            } else {
                                var t__2913 = B2803['get-setter'](env__2906, 'lifted', type__2905, module__2910, name__2903, B2803['generate-symbol']());
                                return([
                                    B2900,
                                    [
                                        B2901,
                                        t__2913,
                                        value__2904
                                    ],
                                    k__2907(t__2913)
                                ]);
                            }
                        }
                    }
                }
            };
            B2803['%annotate-function'](($module)['lift-value'], 'lift-value', false);
        }
    }
}
{
    ($module)['lift-symbol*'] = function B2915(expT__2916, env__2917, k__2918) {
        if (($T)(B2803['empty?'](expT__2916)))
            return(k__2918([]));
        else
            return(($module)['lift-symbol**'](expT__2916, env__2917, k__2918));
    };
    B2803['%annotate-function'](($module)['lift-symbol*'], 'lift-symbol*', false);
}
{
    ($module)['lift-symbol**'] = function B2922(exp__2923, env__2924, k__2925) {
        return(($module)['lift-symbol'](B2803['first'](exp__2923), env__2924, function B2926(t__2927) {
            return(($module)['lift-symbol*'](B2803['rest'](exp__2923), env__2924, function B2928(tT__2929) {
                return(k__2925(B2803['cons'](t__2927, tT__2929)));
            }));
        }));
    };
    B2803['%annotate-function'](($module)['lift-symbol**'], 'lift-symbol**', false);
}
{
    ($module)['%eval'] = function B2931() {
        return(eval((arguments[0])));
    };
    {
        B2803['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
