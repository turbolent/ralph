require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B2656(name__2657, value__2658) {
            var B2660 = (exports);
            return(B2660[name__2657] = value__2658);
        };
        {
            ($module)['%eval'] = function B2659() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B2661 = require('ralph/core');
{
    var B2662 = require('ralph/compiler/environment');
    var B2663 = require('ralph/compiler/utilities');
}
{
    {
        ($module)['macroexpand-1'] = function B2667(form__2668, env__2669) {
            if (($T)(B2661['expression?'](form__2668))) {
                var identifier__2670 = B2661['first'](form__2668);
                if (($T)(B2662['special-operator?'](identifier__2670, env__2669)))
                    return(form__2668);
                else {
                    var identifierT__2671 = ($module)['macroexpand'](identifier__2670, env__2669);
                    {
                        var B2672 = false;
                        if (($T)(B2661['instance?'](identifierT__2671, B2661['<symbol>'])))
                            B2672 = B2662['find-macro'](identifierT__2671, env__2669);
                        else
                            B2672 = false;
                        if (($T)(B2672)) {
                            var macro__2673 = B2672;
                            return(B2661['apply'](macro__2673, env__2669, B2661['rest'](form__2668)));
                        } else
                            return(form__2668);
                    }
                }
            } else {
                var B2674 = false;
                if (($T)(B2661['instance?'](form__2668, B2661['<symbol>'])))
                    B2674 = B2662['find-symbol-macro'](form__2668, env__2669);
                else
                    B2674 = false;
                if (($T)(B2674)) {
                    var symbol_macro__2675 = B2674;
                    return(symbol_macro__2675(env__2669));
                } else
                    return(form__2668);
            }
        };
        ($module)['%export']('macroexpand-1', ($module)['macroexpand-1']);
    }
    B2661['%annotate-function'](($module)['macroexpand-1'], 'macroexpand-1', false);
}
{
    {
        ($module)['macroexpand'] = function B2677(form__2678, env__2679) {
            var doneQ__2680 = false;
            {
                while (($T)(B2661['not'](doneQ__2680))) {
                    var expanded__2681 = ($module)['macroexpand-1'](form__2678, env__2679);
                    {
                        doneQ__2680 = B2661['=='](expanded__2681, form__2678);
                        form__2678 = expanded__2681;
                    }
                }
                return(form__2678);
            }
        };
        ($module)['%export']('macroexpand', ($module)['macroexpand']);
    }
    B2661['%annotate-function'](($module)['macroexpand'], 'macroexpand', false);
}
{
    {
        ($module)['macroexpand-all'] = function B2684(form__2685, env__2686) {
            var formT__2687 = ($module)['macroexpand'](form__2685, env__2686);
            if (($T)(B2661['instance?'](formT__2687, B2661['<array>']))) {
                var B2688 = false;
                if (($T)(B2661['expression?'](formT__2687)))
                    B2688 = B2662['find-special-form'](B2661['first'](formT__2687), env__2686);
                else
                    B2688 = false;
                if (($T)(B2688)) {
                    var special_form__2689 = B2688;
                    return(B2661['apply'](special_form__2689, env__2686, B2661['rest'](formT__2687)));
                } else
                    return(B2661['map'](B2661['rcurry'](($module)['macroexpand-all'], env__2686), formT__2687));
            } else
                return(formT__2687);
        };
        ($module)['%export']('macroexpand-all', ($module)['macroexpand-all']);
    }
    B2661['%annotate-function'](($module)['macroexpand-all'], 'macroexpand-all', false);
}
