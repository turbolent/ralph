{
    var B2588 = require('ralph/core');
}
{
    var B2591 = require('ralph/compiler/environment');
    var B2592 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B2588['%var'];
        var ralphScompilerSutilitiesCCexpressionQ = B2592['expression?'];
        var ralphScoreCCfirst = B2588['first'];
        var ralphScompilerSenvironmentCCspecial_operatorQ = B2591['special-operator?'];
        var ralphScoreCCinstanceQ = B2588['instance?'];
        var ralphScoreCCLsymbolG = B2588['<symbol>'];
        var ralphScompilerSenvironmentCCfind_macro = B2591['find-macro'];
        var ralphScoreCCapply = B2588['apply'];
        var ralphScoreCCrest = B2588['rest'];
        var ralphScompilerSenvironmentCCfind_symbol_macro = B2591['find-symbol-macro'];
        var ralphScoreCCMannotate_function = B2588['%annotate-function'];
        var macroexpand_1__2606 = function B2596(form__2597, env__2598) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__2597))) {
                {
                    var identifier__2599 = ralphScoreCCfirst(form__2597);
                }
                if (($T)(ralphScompilerSenvironmentCCspecial_operatorQ(identifier__2599, env__2598)))
                    return(form__2597);
                else {
                    {
                        var identifierT__2601 = macroexpand__2600(identifier__2599, env__2598);
                        var B2602 = false;
                    }
                    if (($T)(ralphScoreCCinstanceQ(identifierT__2601, ralphScoreCCLsymbolG)))
                        B2602 = ralphScompilerSenvironmentCCfind_macro(identifierT__2601, env__2598);
                    else
                        B2602 = false;
                    if (($T)(B2602)) {
                        {
                            var macro__2603 = B2602;
                        }
                        return(ralphScoreCCapply(macro__2603, env__2598, ralphScoreCCrest(form__2597)));
                    } else
                        return(form__2597);
                }
            } else {
                {
                    var B2604 = false;
                }
                if (($T)(ralphScoreCCinstanceQ(form__2597, ralphScoreCCLsymbolG)))
                    B2604 = ralphScompilerSenvironmentCCfind_symbol_macro(form__2597, env__2598);
                else
                    B2604 = false;
                if (($T)(B2604)) {
                    {
                        var symbol_macro__2605 = B2604;
                    }
                    return(symbol_macro__2605(env__2598));
                } else
                    return(form__2597);
            }
        };
    }
    (exports)['macroexpand-1'] = macroexpand_1__2606;
    ralphScoreCCMannotate_function(macroexpand_1__2606, 'macroexpand_1', false);
}
{
    {
        var ralphScoreCCnot = B2588['not'];
        var ralphScoreCCEE = B2588['=='];
        var macroexpand__2600 = function B2608(form__2609, env__2610) {
            {
                var doneQ__2611 = false;
            }
            while (($T)(ralphScoreCCnot(doneQ__2611))) {
                {
                    var expanded__2612 = macroexpand_1__2606(form__2609, env__2610);
                }
                doneQ__2611 = ralphScoreCCEE(expanded__2612, form__2609);
                form__2609 = expanded__2612;
            }
            return(form__2609);
        };
    }
    (exports)['macroexpand'] = macroexpand__2600;
    ralphScoreCCMannotate_function(macroexpand__2600, 'macroexpand', false);
}
{
    {
        var ralphScoreCCLarrayG = B2588['<array>'];
        var ralphScompilerSenvironmentCCfind_special_form = B2591['find-special-form'];
        var ralphScoreCCmap = B2588['map'];
        var ralphScoreCCrcurry = B2588['rcurry'];
        var macroexpand_all__2621 = function B2615(form__2616, env__2617) {
            {
                var formT__2618 = macroexpand__2600(form__2616, env__2617);
            }
            if (($T)(ralphScoreCCinstanceQ(formT__2618, ralphScoreCCLarrayG))) {
                {
                    var B2619 = false;
                }
                if (($T)(ralphScompilerSutilitiesCCexpressionQ(formT__2618)))
                    B2619 = ralphScompilerSenvironmentCCfind_special_form(ralphScoreCCfirst(formT__2618), env__2617);
                else
                    B2619 = false;
                if (($T)(B2619)) {
                    {
                        var special_form__2620 = B2619;
                    }
                    return(ralphScoreCCapply(special_form__2620, env__2617, ralphScoreCCrest(formT__2618)));
                } else
                    return(ralphScoreCCmap(ralphScoreCCrcurry(macroexpand_all__2621, env__2617), formT__2618));
            } else
                return(formT__2618);
        };
    }
    (exports)['macroexpand-all'] = macroexpand_all__2621;
    ralphScoreCCMannotate_function(macroexpand_all__2621, 'macroexpand_all', false);
}
