var B2612 = require('ralph/core');
var B2615 = require('ralph/compiler/environment'), B2616 = require('ralph/compiler/utilities');
{
    var ralphScoreCCMvar = B2612['%var'], ralphScoreCCMmake_function = B2612['%make-function'], ralphScompilerSutilitiesCCexpressionQ = B2616['expression?'], ralphScoreCCfirst = B2612['first'], ralphScompilerSenvironmentCCspecial_operatorQ = B2615['special-operator?'], ralphScoreCCinstanceQ = B2612['instance?'], ralphScoreCCLsymbolG = B2612['<symbol>'], ralphScompilerSenvironmentCCfind_macro = B2615['find-macro'], ralphScoreCCapply = B2612['apply'], ralphScoreCCrest = B2612['rest'], ralphScompilerSenvironmentCCfind_symbol_macro = B2615['find-symbol-macro'], macroexpand_1__2630 = ralphScoreCCMmake_function('macroexpand_1', function B2620(form__2621, env__2622) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__2621))) {
                var identifier__2623 = ralphScoreCCfirst(form__2621);
                if (($T)(ralphScompilerSenvironmentCCspecial_operatorQ(identifier__2623, env__2622)))
                    return(form__2621);
                else {
                    var identifierT__2625 = macroexpand__2624(identifier__2623, env__2622), B2626 = false;
                    if (($T)(ralphScoreCCinstanceQ(identifierT__2625, ralphScoreCCLsymbolG)))
                        B2626 = ralphScompilerSenvironmentCCfind_macro(identifierT__2625, env__2622);
                    else
                        B2626 = false;
                    if (($T)(B2626)) {
                        var macro__2627 = B2626;
                        return(ralphScoreCCapply(macro__2627, env__2622, ralphScoreCCrest(form__2621)));
                    } else
                        return(form__2621);
                }
            } else {
                var B2628 = false;
                if (($T)(ralphScoreCCinstanceQ(form__2621, ralphScoreCCLsymbolG)))
                    B2628 = ralphScompilerSenvironmentCCfind_symbol_macro(form__2621, env__2622);
                else
                    B2628 = false;
                if (($T)(B2628)) {
                    var symbol_macro__2629 = B2628;
                    return(symbol_macro__2629(env__2622));
                } else
                    return(form__2621);
            }
        }, false);
    (exports)['macroexpand-1'] = macroexpand_1__2630;
}
{
    var ralphScoreCCnot = B2612['not'], ralphScoreCCEE = B2612['=='], macroexpand__2624 = ralphScoreCCMmake_function('macroexpand', function B2632(form__2633, env__2634) {
            var doneQ__2635 = false;
            while (($T)(ralphScoreCCnot(doneQ__2635))) {
                var expanded__2636 = macroexpand_1__2630(form__2633, env__2634);
                doneQ__2635 = ralphScoreCCEE(expanded__2636, form__2633);
                form__2633 = expanded__2636;
            }
            return(form__2633);
        }, false);
    (exports)['macroexpand'] = macroexpand__2624;
}
{
    var ralphScoreCCLarrayG = B2612['<array>'], ralphScompilerSenvironmentCCfind_special_form = B2615['find-special-form'], ralphScoreCCmap = B2612['map'], ralphScoreCCrcurry = B2612['rcurry'], macroexpand_all__2645 = ralphScoreCCMmake_function('macroexpand_all', function B2639(form__2640, env__2641) {
            var formT__2642 = macroexpand__2624(form__2640, env__2641);
            if (($T)(ralphScoreCCinstanceQ(formT__2642, ralphScoreCCLarrayG))) {
                var B2643 = false;
                if (($T)(ralphScompilerSutilitiesCCexpressionQ(formT__2642)))
                    B2643 = ralphScompilerSenvironmentCCfind_special_form(ralphScoreCCfirst(formT__2642), env__2641);
                else
                    B2643 = false;
                if (($T)(B2643)) {
                    var special_form__2644 = B2643;
                    return(ralphScoreCCapply(special_form__2644, env__2641, ralphScoreCCrest(formT__2642)));
                } else
                    return(ralphScoreCCmap(ralphScoreCCrcurry(macroexpand_all__2645, env__2641), formT__2642));
            } else
                return(formT__2642);
        }, false);
    (exports)['macroexpand-all'] = macroexpand_all__2645;
}
