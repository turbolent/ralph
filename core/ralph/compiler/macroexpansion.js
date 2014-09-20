require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2658(name__2659, value__2660) {
            var B2662 = (exports);
            return(B2662[name__2659] = value__2660);
        };
        {
            ($module)['%eval'] = function B2661() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2663 = require('ralph/core');
{
    var B2664 = require('ralph/compiler/environment');
    var B2665 = require('ralph/compiler/utilities');
}
{
    {
        ($module)['macroexpand-1'] = function B2669(form__2670, env__2671) {
            if (($T)(B2663['expression?'](form__2670))) {
                var identifier__2672 = B2663['first'](form__2670);
                if (($T)(B2664['special-operator?'](identifier__2672, env__2671)))
                    return(form__2670);
                else {
                    var identifierT__2673 = ($module)['macroexpand'](identifier__2672, env__2671);
                    {
                        var B2674 = false;
                        if (($T)(B2663['instance?'](identifierT__2673, B2663['<symbol>'])))
                            B2674 = B2664['find-macro'](identifierT__2673, env__2671);
                        else
                            B2674 = false;
                        if (($T)(B2674)) {
                            var macro__2675 = B2674;
                            return(B2663['apply'](macro__2675, env__2671, B2663['rest'](form__2670)));
                        } else
                            return(form__2670);
                    }
                }
            } else {
                var B2676 = false;
                if (($T)(B2663['instance?'](form__2670, B2663['<symbol>'])))
                    B2676 = B2664['find-symbol-macro'](form__2670, env__2671);
                else
                    B2676 = false;
                if (($T)(B2676)) {
                    var symbol_macro__2677 = B2676;
                    return(symbol_macro__2677(env__2671));
                } else
                    return(form__2670);
            }
        };
        ($module)['%export']('macroexpand-1', ($module)['macroexpand-1']);
    }
    B2663['%annotate-function'](($module)['macroexpand-1'], 'macroexpand-1', false);
}
{
    {
        ($module)['macroexpand'] = function B2679(form__2680, env__2681) {
            var doneQ__2682 = false;
            {
                while (($T)(B2663['not'](doneQ__2682))) {
                    var expanded__2683 = ($module)['macroexpand-1'](form__2680, env__2681);
                    {
                        doneQ__2682 = B2663['=='](expanded__2683, form__2680);
                        form__2680 = expanded__2683;
                    }
                }
                return(form__2680);
            }
        };
        ($module)['%export']('macroexpand', ($module)['macroexpand']);
    }
    B2663['%annotate-function'](($module)['macroexpand'], 'macroexpand', false);
}
{
    {
        ($module)['macroexpand-all'] = function B2686(form__2687, env__2688) {
            var formT__2689 = ($module)['macroexpand'](form__2687, env__2688);
            if (($T)(B2663['instance?'](formT__2689, B2663['<array>']))) {
                var B2690 = false;
                if (($T)(B2663['expression?'](formT__2689)))
                    B2690 = B2664['find-special-form'](B2663['first'](formT__2689), env__2688);
                else
                    B2690 = false;
                if (($T)(B2690)) {
                    var special_form__2691 = B2690;
                    return(B2663['apply'](special_form__2691, env__2688, B2663['rest'](formT__2689)));
                } else
                    return(B2663['map'](B2663['rcurry'](($module)['macroexpand-all'], env__2688), formT__2689));
            } else
                return(formT__2689);
        };
        ($module)['%export']('macroexpand-all', ($module)['macroexpand-all']);
    }
    B2663['%annotate-function'](($module)['macroexpand-all'], 'macroexpand-all', false);
}
