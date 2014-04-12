{
    var $module = Object.create(null);
    var Mexport = function B2759(name__2760, value__2761) {
        var B2762 = (exports);
        return(B2762[name__2760] = value__2761);
    };
}
var B2763 = require('ralph/core');
{
    var B2764 = require('ralph/compiler/environment');
    var B2765 = require('ralph/compiler/utilities');
}
{
    {
        var macroexpand_1 = function B2769(form__2770, env__2771) {
            if (($T)(B2763['expression?'](form__2770))) {
                var identifier__2772 = B2763['first'](form__2770);
                if (($T)(B2764['special-operator?'](identifier__2772, env__2771)))
                    return(form__2770);
                else {
                    var identifierT__2773 = macroexpand(identifier__2772, env__2771);
                    {
                        var B2774 = false;
                        if (($T)(B2763['instance?'](identifierT__2773, B2763['<symbol>'])))
                            B2774 = B2764['find-macro'](identifierT__2773, env__2771);
                        else
                            B2774 = false;
                        if (($T)(B2774)) {
                            var macro__2775 = B2774;
                            return(B2763['apply'](macro__2775, env__2771, B2763['rest'](form__2770)));
                        } else
                            return(form__2770);
                    }
                }
            } else {
                var B2776 = false;
                if (($T)(B2763['instance?'](form__2770, B2763['<symbol>'])))
                    B2776 = B2764['find-symbol-macro'](form__2770, env__2771);
                else
                    B2776 = false;
                if (($T)(B2776)) {
                    var symbol_macro__2777 = B2776;
                    return(symbol_macro__2777(env__2771));
                } else
                    return(form__2770);
            }
        };
        Mexport('macroexpand-1', macroexpand_1);
    }
    B2763['%annotate-function'](macroexpand_1, 'macroexpand-1', false);
}
{
    {
        var macroexpand = function B2779(form__2780, env__2781) {
            var doneQ__2782 = false;
            {
                while (($T)(B2763['not'](doneQ__2782))) {
                    var expanded__2783 = macroexpand_1(form__2780, env__2781);
                    {
                        doneQ__2782 = B2763['=='](expanded__2783, form__2780);
                        form__2780 = expanded__2783;
                    }
                }
                return(form__2780);
            }
        };
        Mexport('macroexpand', macroexpand);
    }
    B2763['%annotate-function'](macroexpand, 'macroexpand', false);
}
{
    {
        var macroexpand_all = function B2786(form__2787, env__2788) {
            var formT__2789 = macroexpand(form__2787, env__2788);
            if (($T)(B2763['instance?'](formT__2789, B2763['<array>']))) {
                var B2790 = false;
                if (($T)(B2763['expression?'](formT__2789)))
                    B2790 = B2764['find-special-form'](B2763['first'](formT__2789), env__2788);
                else
                    B2790 = false;
                if (($T)(B2790)) {
                    var special_form__2791 = B2790;
                    return(B2763['apply'](special_form__2791, env__2788, B2763['rest'](formT__2789)));
                } else
                    return(B2763['map'](B2763['rcurry'](macroexpand_all, env__2788), formT__2789));
            } else
                return(formT__2789);
        };
        Mexport('macroexpand-all', macroexpand_all);
    }
    B2763['%annotate-function'](macroexpand_all, 'macroexpand-all', false);
}
