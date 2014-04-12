{
    var $module = Object.create(null);
    var Mexport = function B2608(name__2609, value__2610) {
        var B2611 = (exports);
        return(B2611[name__2609] = value__2610);
    };
}
var B2612 = require('ralph/core');
{
    var B2613 = require('ralph/format');
    {
        var B2614 = require('ralph/compiler/utilities');
        {
            var B2757 = require('ralph/compiler/transformer');
            {
                var B2792 = require('ralph/compiler/macroexpansion');
                var B2793 = require('ralph/compiler/environment');
            }
        }
    }
}
{
    var B2794 = $KEY;
    {
        var B2795 = $REST;
        var Bhash_symbols = [
                B2794,
                B2795
            ];
    }
}
{
    var parameter_list_identifiers = function B2799(parameter_list__2800) {
        return(B2612['map'](function B2801(parameter__2802) {
            if (($T)(B2612['instance?'](parameter__2802, B2612['<array>'])))
                return(B2612['first'](parameter__2802));
            else
                return(parameter__2802);
        }, B2612['choose'](function B2803(parameter__2804) {
            return(B2612['not'](B2612['member?'](parameter__2804, Bhash_symbols)));
        }, parameter_list__2800)));
    };
    B2612['%annotate-function'](parameter_list_identifiers, 'parameter-list-identifiers', false);
}
{
    var Bcore_special_forms = B2612['make-plain-object']();
    Mexport('$core-special-forms', Bcore_special_forms);
}
{
    var B2808 = $S('bind', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'bind', function B2809(env__2810, bindings__2811) {
        var forms__2812 = $SL.call(arguments, 2);
        {
            var identifiers__2813 = [];
            {
                var bindingsT__2822 = B2612['map'](function B2814(binding__2815) {
                        var arrayQ__2816 = B2612['instance?'](bindings__2811, B2612['<array>']);
                        {
                            var B2817 = false;
                            if (($T)(arrayQ__2816))
                                B2817 = binding__2815;
                            else
                                B2817 = [binding__2815];
                            {
                                var identifier__2818 = B2817[0];
                                {
                                    var value__2819 = B2817[1];
                                    {
                                        var superflous__2820 = $SL.call(B2817, 2);
                                        {
                                            B2614['check-type'](identifier__2818, B2612['<symbol>'], 'Non-symbol identifier in bind: %=');
                                            {
                                                B2614['check-identifier'](identifier__2818, env__2810, 'External identifier in bind: %=');
                                                {
                                                    var valueT__2821 = B2792['macroexpand-all'](value__2819, env__2810);
                                                    {
                                                        B2793['bind-locally!'](identifier__2818, env__2810);
                                                        {
                                                            B2612['push-last'](identifiers__2813, identifier__2818);
                                                            if (($T)(arrayQ__2816))
                                                                return([
                                                                    identifier__2818,
                                                                    valueT__2821
                                                                ]);
                                                            else
                                                                return(identifier__2818);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, bindings__2811);
                {
                    var formsT__2823 = B2612['map'](B2612['rcurry'](B2792['macroexpand-all'], env__2810), forms__2812);
                    {
                        B2612['do'](B2612['rcurry'](B2793['unbind-locally!'], env__2810), identifiers__2813);
                        return(B2612['%concat']([
                            B2808,
                            B2612['%concat']([], bindingsT__2822)
                        ], formsT__2823));
                    }
                }
            }
        }
    });
}
{
    var B2827 = $S('method', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'method', function B2828(env__2829, parameter_list__2830) {
        var forms__2831 = $SL.call(arguments, 2);
        {
            var identifiers__2832 = parameter_list_identifiers(parameter_list__2830);
            {
                B2612['do'](B2612['rcurry'](B2614['check-identifier'], env__2829, 'External identifier in parameter list of method: %='), identifiers__2832);
                {
                    var B2833 = B2614['destructure-parameter-list'](parameter_list__2830);
                    {
                        var normal_parameters__2834 = B2833[0];
                        {
                            var rest_parameter__2835 = B2833[1];
                            {
                                var keyword_parameters__2836 = B2833[2];
                                {
                                    var B2841 = B2612['concatenate'];
                                    {
                                        var B2842 = false;
                                        if (($T)(rest_parameter__2835))
                                            B2842 = [
                                                B2795,
                                                rest_parameter__2835
                                            ];
                                        else
                                            B2842 = [];
                                        {
                                            var B2843 = false;
                                            if (($T)(keyword_parameters__2836))
                                                B2843 = B2612['%concat']([B2794], B2612['map'](function B2837(parameter__2838) {
                                                    if (($T)(B2612['instance?'](parameter__2838, B2612['<array>'])))
                                                        return([
                                                            B2612['first'](parameter__2838),
                                                            B2792['macroexpand-all'](B2612['second'](parameter__2838), env__2829)
                                                        ]);
                                                    else
                                                        return(parameter__2838);
                                                }, keyword_parameters__2836));
                                            else
                                                B2843 = [];
                                            {
                                                var parameter_listT__2839 = B2841(normal_parameters__2834, B2842, B2843);
                                                {
                                                    B2612['do'](B2612['rcurry'](B2793['bind-locally!'], env__2829), identifiers__2832);
                                                    {
                                                        var formsT__2840 = B2612['map'](B2612['rcurry'](B2792['macroexpand-all'], env__2829), forms__2831);
                                                        {
                                                            B2612['do'](B2612['rcurry'](B2793['unbind-locally!'], env__2829), identifiers__2832);
                                                            return(B2612['%concat']([
                                                                B2827,
                                                                parameter_listT__2839
                                                            ], formsT__2840));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}
{
    var B2845 = $S('define', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'define', function B2846(env__2847, identifier__2848, initial_value__2849) {
        var superfluous__2850 = $SL.call(arguments, 3);
        {
            B2614['check-type'](identifier__2848, B2612['<symbol>'], 'Non-symbol identifier in define: %=');
            {
                B2614['check-identifier'](identifier__2848, env__2847, 'External identifier in define: %=');
                {
                    B2793['bind-globally!'](identifier__2848, env__2847);
                    if (($T)(initial_value__2849))
                        return([
                            B2845,
                            identifier__2848,
                            B2792['macroexpand-all'](initial_value__2849, env__2847)
                        ]);
                    else
                        return([
                            B2845,
                            identifier__2848
                        ]);
                }
            }
        }
    });
}
{
    var B2855 = $S('handler-case', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'handler-case', function B2856(env__2857, protected_form__2858) {
        var cases__2859 = $SL.call(arguments, 2);
        return(B2612['%concat']([
            B2855,
            B2792['macroexpand-all'](protected_form__2858, env__2857)
        ], B2612['map'](function B2860(case__2861) {
            B2614['check-type'](case__2861, B2612['<array>'], 'Non-array case in handler-case: %=');
            {
                var binding__2862 = case__2861[0];
                {
                    var forms__2863 = $SL.call(case__2861, 1);
                    {
                        B2614['check-type'](binding__2862, B2612['<array>'], 'Non-array case-binding in handler-case: %=');
                        {
                            var type__2864 = binding__2862[0];
                            {
                                var B2865 = $SL.call(binding__2862, 1);
                                {
                                    var B2866 = B2612['%keys'](B2865, { 'condition': false });
                                    {
                                        var condition__2867 = B2866['condition'];
                                        {
                                            if (($T)(condition__2867)) {
                                                B2614['check-type'](condition__2867, B2612['<symbol>'], 'Non-symbol condition variable in handler-case: %=');
                                                {
                                                    B2614['check-identifier'](condition__2867, env__2857, 'External identifier in handler-case: %=');
                                                    B2793['bind-locally!'](condition__2867, env__2857);
                                                }
                                            }
                                            {
                                                var typeT__2868 = B2792['macroexpand-all'](type__2864, env__2857);
                                                {
                                                    var formsT__2869 = B2612['map'](B2612['rcurry'](B2792['macroexpand-all'], env__2857), forms__2863);
                                                    {
                                                        if (($T)(condition__2867))
                                                            B2793['unbind-locally!'](condition__2867, env__2857);
                                                        return(B2612['%concat']([B2612['%concat']([typeT__2868], B2612['rest'](binding__2862))], formsT__2869));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, cases__2859)));
    });
}
{
    var B2870 = $S('quote', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'quote', B2757['make-quote-transformer'](B2870));
}
{
    var B2871 = $K('symbol');
    {
        var B2872 = $S('set!', 'ralph/core');
        B2612['get-setter'](Bcore_special_forms, 'set!', B2757['make-rest-transformer'](B2792['macroexpand-all'], B2871, B2872));
    }
}
{
    var B2873 = $S('if', 'ralph/core');
    {
        var B2874 = $K('count');
        B2612['get-setter'](Bcore_special_forms, 'if', B2757['make-rest-transformer'](B2792['macroexpand-all'], B2871, B2873, B2874, 3));
    }
}
{
    var B2875 = $S('begin', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'begin', B2757['make-rest-transformer'](B2792['macroexpand-all'], B2871, B2875));
}
{
    var B2876 = $S('while', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'while', B2757['make-rest-transformer'](B2792['macroexpand-all'], B2871, B2876));
}
{
    var B2878 = $S('define-module', 'ralph/core');
    B2612['get-setter'](Bcore_special_forms, 'define-module', function B2879(____2880) {
        var arguments__2881 = $SL.call(arguments, 1);
        return(B2612['%concat']([B2878], arguments__2881));
    });
}
{
    var Binternal_special_forms = B2612['make-plain-object']();
    Mexport('$internal-special-forms', Binternal_special_forms);
}
{
    var B2882 = $S('%quote', 'ralph/core');
    {
        var B2883 = $K('check?');
        B2612['get-setter'](Binternal_special_forms, '%quote', B2757['make-quote-transformer'](B2882, B2883, true));
    }
}
{
    var B2885 = $S('%bind', 'ralph/core');
    B2612['get-setter'](Binternal_special_forms, '%bind', B2757['make-bind-transformer'](B2792['macroexpand-all'], function B2886(env__2887, identifier__2888, valueT__2889, formT__2890) {
        return([
            B2885,
            [
                identifier__2888,
                valueT__2889
            ],
            formT__2890
        ]);
    }));
}
{
    var B2892 = $S('%method', 'ralph/core');
    B2612['get-setter'](Binternal_special_forms, '%method', B2757['make-method-transformer'](B2792['macroexpand-all'], function B2893(env__2894, name__2895, parameters__2896, formT__2897) {
        return([
            B2892,
            name__2895,
            parameters__2896,
            formT__2897
        ]);
    }));
}
{
    var B2899 = $S('%set', 'ralph/core');
    B2612['get-setter'](Binternal_special_forms, '%set', B2757['make-set-transformer'](B2792['macroexpand-all'], function B2900(env__2901, placeT__2902, valueT__2903) {
        return([
            B2899,
            placeT__2902,
            valueT__2903
        ]);
    }));
}
B2612['get-setter'](Binternal_special_forms, '%define', B2757['make-define-transformer'](B2792['macroexpand-all']));
{
    var B2904 = $S('%if', 'ralph/core');
    B2612['get-setter'](Binternal_special_forms, '%if', B2757['make-rest-transformer'](B2792['macroexpand-all'], B2871, B2904, B2874, 3));
}
{
    var B2905 = $S('%while', 'ralph/core');
    B2612['get-setter'](Binternal_special_forms, '%while', B2757['make-rest-transformer'](B2792['macroexpand-all'], B2871, B2905, B2874, 2));
}
B2612['get-setter'](Binternal_special_forms, '%try', B2757['make-try-transformer'](B2792['macroexpand-all']));
{
    var B2907 = $S('%var', 'ralph/core');
    B2612['get-setter'](Binternal_special_forms, '%var', B2757['make-var-transformer'](B2792['macroexpand-all'], function B2908(env__2909, identifier__2910, valueT__2911) {
        return([
            B2907,
            identifier__2910,
            valueT__2911
        ]);
    }));
}
B2612['get-setter'](Binternal_special_forms, '%object', B2757['make-object-transformer'](B2792['macroexpand-all']));
{
    var B2918 = $S('%native-call', 'ralph/core');
    {
        var B2919 = $S('%infix', 'ralph/core');
        {
            var B2920 = [
                    B2918,
                    B2919
                ];
            {
                var B2921 = false;
                {
                    var B2922 = false;
                    {
                        var B2923 = [B2920];
                        {
                            while (true) {
                                var B2928 = B2612['not'];
                                {
                                    var B2924 = B2921;
                                    {
                                        var B2929 = false;
                                        if (($T)(B2924))
                                            B2929 = B2924;
                                        else
                                            B2929 = B2612['any?'](B2612['empty?'], B2923);
                                        {
                                            var B2930 = B2928(B2929);
                                            if (($T)(B2930)) {
                                                var symbol__2925 = B2612['first'](B2920);
                                                {
                                                    (function B2926(symbol__2927) {
                                                        return(B2612['get-setter'](Binternal_special_forms, B2612['symbol-name'](symbol__2927), B2757['make-operator-transformer'](symbol__2927, B2792['macroexpand-all'])));
                                                    }(symbol__2925));
                                                    {
                                                        B2920 = B2612['rest'](B2920);
                                                        B2923 = [B2920];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            B2922;
                        }
                    }
                }
            }
        }
    }
}
{
    var B2937 = $S('%begin', 'ralph/core');
    {
        var B2938 = $S('%native', 'ralph/core');
        {
            var B2939 = $S('%array', 'ralph/core');
            {
                var B2940 = $S('%get-property', 'ralph/core');
                {
                    var B2941 = [
                            B2937,
                            B2938,
                            B2939,
                            B2940
                        ];
                    {
                        var B2942 = false;
                        {
                            var B2943 = false;
                            {
                                var B2944 = [B2941];
                                {
                                    while (true) {
                                        var B2949 = B2612['not'];
                                        {
                                            var B2945 = B2942;
                                            {
                                                var B2950 = false;
                                                if (($T)(B2945))
                                                    B2950 = B2945;
                                                else
                                                    B2950 = B2612['any?'](B2612['empty?'], B2944);
                                                {
                                                    var B2951 = B2949(B2950);
                                                    if (($T)(B2951)) {
                                                        var symbol__2946 = B2612['first'](B2941);
                                                        {
                                                            (function B2947(symbol__2948) {
                                                                return(B2612['get-setter'](Binternal_special_forms, B2612['symbol-name'](symbol__2948), B2757['make-rest-transformer'](B2792['macroexpand-all'], B2871, symbol__2948)));
                                                            }(symbol__2946));
                                                            {
                                                                B2941 = B2612['rest'](B2941);
                                                                B2944 = [B2941];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    B2943;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
