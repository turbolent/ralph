require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2621(name__2622, value__2623) {
            var B2625 = (exports);
            return(B2625[name__2622] = value__2623);
        };
        {
            ($module)['%eval'] = function B2624() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2626 = require('ralph/core');
{
    var B2627 = require('ralph/compiler/environment');
    var B2628 = require('ralph/compiler/utilities');
}
{
    {
        ($module)['macroexpand-1'] = function B2632(form__2633, env__2634) {
            if (($T)(B2626['expression?'](form__2633))) {
                var identifier__2635 = B2626['first'](form__2633);
                if (($T)(B2627['special-operator?'](identifier__2635, env__2634)))
                    return(form__2633);
                else {
                    var identifierT__2636 = ($module)['macroexpand'](identifier__2635, env__2634);
                    {
                        var B2637 = false;
                        if (($T)(B2626['instance?'](identifierT__2636, B2626['<symbol>'])))
                            B2637 = B2627['find-macro'](identifierT__2636, env__2634);
                        else
                            B2637 = false;
                        if (($T)(B2637)) {
                            var macro__2638 = B2637;
                            return(B2626['apply'](macro__2638, env__2634, B2626['rest'](form__2633)));
                        } else
                            return(form__2633);
                    }
                }
            } else {
                var B2639 = false;
                if (($T)(B2626['instance?'](form__2633, B2626['<symbol>'])))
                    B2639 = B2627['find-symbol-macro'](form__2633, env__2634);
                else
                    B2639 = false;
                if (($T)(B2639)) {
                    var symbol_macro__2640 = B2639;
                    return(symbol_macro__2640(env__2634));
                } else
                    return(form__2633);
            }
        };
        ($module)['%export']('macroexpand-1', ($module)['macroexpand-1']);
    }
    B2626['%annotate-function'](($module)['macroexpand-1'], 'macroexpand-1', false);
}
{
    {
        ($module)['macroexpand'] = function B2642(form__2643, env__2644) {
            var doneQ__2645 = false;
            {
                while (($T)(B2626['not'](doneQ__2645))) {
                    var expanded__2646 = ($module)['macroexpand-1'](form__2643, env__2644);
                    {
                        doneQ__2645 = B2626['=='](expanded__2646, form__2643);
                        form__2643 = expanded__2646;
                    }
                }
                return(form__2643);
            }
        };
        ($module)['%export']('macroexpand', ($module)['macroexpand']);
    }
    B2626['%annotate-function'](($module)['macroexpand'], 'macroexpand', false);
}
{
    {
        ($module)['macroexpand-all'] = function B2649(form__2650, env__2651) {
            var formT__2652 = ($module)['macroexpand'](form__2650, env__2651);
            if (($T)(B2626['instance?'](formT__2652, B2626['<array>']))) {
                var B2653 = false;
                if (($T)(B2626['expression?'](formT__2652)))
                    B2653 = B2627['find-special-form'](B2626['first'](formT__2652), env__2651);
                else
                    B2653 = false;
                if (($T)(B2653)) {
                    var special_form__2654 = B2653;
                    return(B2626['apply'](special_form__2654, env__2651, B2626['rest'](formT__2652)));
                } else
                    return(B2626['map'](B2626['rcurry'](($module)['macroexpand-all'], env__2651), formT__2652));
            } else
                return(formT__2652);
        };
        ($module)['%export']('macroexpand-all', ($module)['macroexpand-all']);
    }
    B2626['%annotate-function'](($module)['macroexpand-all'], 'macroexpand-all', false);
}
