{
    var $module = Object.create(null);
    ($module)['%export'] = function B2604(name__2605, value__2606) {
        var B2607 = (exports);
        return(B2607[name__2605] = value__2606);
    };
}
var B2608 = require('ralph/core');
{
    var B2609 = require('ralph/compiler/environment');
    var B2610 = require('ralph/compiler/utilities');
}
{
    {
        ($module)['macroexpand-1'] = function B2614(form__2615, env__2616) {
            if (($T)(B2608['expression?'](form__2615))) {
                var identifier__2617 = B2608['first'](form__2615);
                if (($T)(B2609['special-operator?'](identifier__2617, env__2616)))
                    return(form__2615);
                else {
                    var identifierT__2618 = ($module)['macroexpand'](identifier__2617, env__2616);
                    {
                        var B2619 = false;
                        if (($T)(B2608['instance?'](identifierT__2618, B2608['<symbol>'])))
                            B2619 = B2609['find-macro'](identifierT__2618, env__2616);
                        else
                            B2619 = false;
                        if (($T)(B2619)) {
                            var macro__2620 = B2619;
                            return(B2608['apply'](macro__2620, env__2616, B2608['rest'](form__2615)));
                        } else
                            return(form__2615);
                    }
                }
            } else {
                var B2621 = false;
                if (($T)(B2608['instance?'](form__2615, B2608['<symbol>'])))
                    B2621 = B2609['find-symbol-macro'](form__2615, env__2616);
                else
                    B2621 = false;
                if (($T)(B2621)) {
                    var symbol_macro__2622 = B2621;
                    return(symbol_macro__2622(env__2616));
                } else
                    return(form__2615);
            }
        };
        ($module)['%export']('macroexpand-1', ($module)['macroexpand-1']);
    }
    B2608['%annotate-function'](($module)['macroexpand-1'], 'macroexpand-1', false);
}
{
    {
        ($module)['macroexpand'] = function B2624(form__2625, env__2626) {
            var doneQ__2627 = false;
            {
                while (($T)(B2608['not'](doneQ__2627))) {
                    var expanded__2628 = ($module)['macroexpand-1'](form__2625, env__2626);
                    {
                        doneQ__2627 = B2608['=='](expanded__2628, form__2625);
                        form__2625 = expanded__2628;
                    }
                }
                return(form__2625);
            }
        };
        ($module)['%export']('macroexpand', ($module)['macroexpand']);
    }
    B2608['%annotate-function'](($module)['macroexpand'], 'macroexpand', false);
}
{
    {
        ($module)['macroexpand-all'] = function B2631(form__2632, env__2633) {
            var formT__2634 = ($module)['macroexpand'](form__2632, env__2633);
            if (($T)(B2608['instance?'](formT__2634, B2608['<array>']))) {
                var B2635 = false;
                if (($T)(B2608['expression?'](formT__2634)))
                    B2635 = B2609['find-special-form'](B2608['first'](formT__2634), env__2633);
                else
                    B2635 = false;
                if (($T)(B2635)) {
                    var special_form__2636 = B2635;
                    return(B2608['apply'](special_form__2636, env__2633, B2608['rest'](formT__2634)));
                } else
                    return(B2608['map'](B2608['rcurry'](($module)['macroexpand-all'], env__2633), formT__2634));
            } else
                return(formT__2634);
        };
        ($module)['%export']('macroexpand-all', ($module)['macroexpand-all']);
    }
    B2608['%annotate-function'](($module)['macroexpand-all'], 'macroexpand-all', false);
}
{
    ($module)['%eval'] = function B2638() {
        return(eval((arguments[0])));
    };
    {
        B2608['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
