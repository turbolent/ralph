var B2613 = require('ralph/core');
var B2616 = require('ralph/compiler/environment'), B2617 = require('ralph/compiler/utilities');
{
    var ralphScoreCCMvar = B2613['%var'], ralphScoreCCMmake_function = B2613['%make-function'], ralphScompilerSutilitiesCCexpressionQ = B2617['expression?'], ralphScoreCCfirst = B2613['first'], ralphScompilerSenvironmentCCspecial_operatorQ = B2616['special-operator?'], ralphScoreCCinstanceQ = B2613['instance?'], ralphScoreCCLsymbolG = B2613['<symbol>'], ralphScompilerSenvironmentCCfind_macro = B2616['find-macro'], ralphScoreCCapply = B2613['apply'], ralphScoreCCrest = B2613['rest'], ralphScompilerSenvironmentCCfind_symbol_macro = B2616['find-symbol-macro'], macroexpand_1__2631 = ralphScoreCCMmake_function('macroexpand_1', function B2621(form__2622, env__2623) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__2622))) {
                var identifier__2624 = ralphScoreCCfirst(form__2622);
                if (($T)(ralphScompilerSenvironmentCCspecial_operatorQ(identifier__2624, env__2623)))
                    return(form__2622);
                else {
                    var identifierT__2626 = macroexpand__2625(identifier__2624, env__2623), B2627 = false;
                    if (($T)(ralphScoreCCinstanceQ(identifierT__2626, ralphScoreCCLsymbolG)))
                        B2627 = ralphScompilerSenvironmentCCfind_macro(identifierT__2626, env__2623);
                    else
                        B2627 = false;
                    if (($T)(B2627)) {
                        var macro__2628 = B2627;
                        return(ralphScoreCCapply(macro__2628, env__2623, ralphScoreCCrest(form__2622)));
                    } else
                        return(form__2622);
                }
            } else {
                var B2629 = false;
                if (($T)(ralphScoreCCinstanceQ(form__2622, ralphScoreCCLsymbolG)))
                    B2629 = ralphScompilerSenvironmentCCfind_symbol_macro(form__2622, env__2623);
                else
                    B2629 = false;
                if (($T)(B2629)) {
                    var symbol_macro__2630 = B2629;
                    return(symbol_macro__2630(env__2623));
                } else
                    return(form__2622);
            }
        }, false);
    (exports)['macroexpand-1'] = macroexpand_1__2631;
}
{
    var ralphScoreCCnot = B2613['not'], ralphScoreCCEE = B2613['=='], macroexpand__2625 = ralphScoreCCMmake_function('macroexpand', function B2633(form__2634, env__2635) {
            var doneQ__2636 = false;
            while (($T)(ralphScoreCCnot(doneQ__2636))) {
                var expanded__2637 = macroexpand_1__2631(form__2634, env__2635);
                doneQ__2636 = ralphScoreCCEE(expanded__2637, form__2634);
                form__2634 = expanded__2637;
            }
            return(form__2634);
        }, false);
    (exports)['macroexpand'] = macroexpand__2625;
}
{
    var ralphScoreCCLarrayG = B2613['<array>'], ralphScompilerSenvironmentCCfind_special_form = B2616['find-special-form'], ralphScoreCCmap = B2613['map'], ralphScoreCCrcurry = B2613['rcurry'], macroexpand_all__2646 = ralphScoreCCMmake_function('macroexpand_all', function B2640(form__2641, env__2642) {
            var formT__2643 = macroexpand__2625(form__2641, env__2642);
            if (($T)(ralphScoreCCinstanceQ(formT__2643, ralphScoreCCLarrayG))) {
                var B2644 = false;
                if (($T)(ralphScompilerSutilitiesCCexpressionQ(formT__2643)))
                    B2644 = ralphScompilerSenvironmentCCfind_special_form(ralphScoreCCfirst(formT__2643), env__2642);
                else
                    B2644 = false;
                if (($T)(B2644)) {
                    var special_form__2645 = B2644;
                    return(ralphScoreCCapply(special_form__2645, env__2642, ralphScoreCCrest(formT__2643)));
                } else
                    return(ralphScoreCCmap(ralphScoreCCrcurry(macroexpand_all__2646, env__2642), formT__2643));
            } else
                return(formT__2643);
        }, false);
    (exports)['macroexpand-all'] = macroexpand_all__2646;
}
