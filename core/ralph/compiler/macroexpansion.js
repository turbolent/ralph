require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2646(name__2647, value__2648) {
            var B2650 = (exports);
            return(B2650[name__2647] = value__2648);
        };
        {
            ($module)['%eval'] = function B2649() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2651 = require('ralph/core');
{
    var B2652 = require('ralph/compiler/environment');
    var B2653 = require('ralph/compiler/utilities');
}
{
    {
        ($module)['macroexpand-1'] = function B2657(form__2658, env__2659) {
            if (($T)(B2651['expression?'](form__2658))) {
                var identifier__2660 = B2651['first'](form__2658);
                if (($T)(B2652['special-operator?'](identifier__2660, env__2659)))
                    return(form__2658);
                else {
                    var identifierT__2661 = ($module)['macroexpand'](identifier__2660, env__2659);
                    {
                        var B2662 = false;
                        if (($T)(B2651['instance?'](identifierT__2661, B2651['<symbol>'])))
                            B2662 = B2652['find-macro'](identifierT__2661, env__2659);
                        else
                            B2662 = false;
                        if (($T)(B2662)) {
                            var macro__2663 = B2662;
                            return(B2651['apply'](macro__2663, env__2659, B2651['rest'](form__2658)));
                        } else
                            return(form__2658);
                    }
                }
            } else {
                var B2664 = false;
                if (($T)(B2651['instance?'](form__2658, B2651['<symbol>'])))
                    B2664 = B2652['find-symbol-macro'](form__2658, env__2659);
                else
                    B2664 = false;
                if (($T)(B2664)) {
                    var symbol_macro__2665 = B2664;
                    return(symbol_macro__2665(env__2659));
                } else
                    return(form__2658);
            }
        };
        ($module)['%export']('macroexpand-1', ($module)['macroexpand-1']);
    }
    B2651['%annotate-function'](($module)['macroexpand-1'], 'macroexpand-1', false);
}
{
    {
        ($module)['macroexpand'] = function B2667(form__2668, env__2669) {
            var doneQ__2670 = false;
            {
                while (($T)(B2651['not'](doneQ__2670))) {
                    var expanded__2671 = ($module)['macroexpand-1'](form__2668, env__2669);
                    {
                        doneQ__2670 = B2651['=='](expanded__2671, form__2668);
                        form__2668 = expanded__2671;
                    }
                }
                return(form__2668);
            }
        };
        ($module)['%export']('macroexpand', ($module)['macroexpand']);
    }
    B2651['%annotate-function'](($module)['macroexpand'], 'macroexpand', false);
}
{
    {
        ($module)['macroexpand-all'] = function B2674(form__2675, env__2676) {
            var formT__2677 = ($module)['macroexpand'](form__2675, env__2676);
            if (($T)(B2651['instance?'](formT__2677, B2651['<array>']))) {
                var B2678 = false;
                if (($T)(B2651['expression?'](formT__2677)))
                    B2678 = B2652['find-special-form'](B2651['first'](formT__2677), env__2676);
                else
                    B2678 = false;
                if (($T)(B2678)) {
                    var special_form__2679 = B2678;
                    return(B2651['apply'](special_form__2679, env__2676, B2651['rest'](formT__2677)));
                } else
                    return(B2651['map'](B2651['rcurry'](($module)['macroexpand-all'], env__2676), formT__2677));
            } else
                return(formT__2677);
        };
        ($module)['%export']('macroexpand-all', ($module)['macroexpand-all']);
    }
    B2651['%annotate-function'](($module)['macroexpand-all'], 'macroexpand-all', false);
}
