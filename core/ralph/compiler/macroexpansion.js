{
    var B293 = require('ralph/core');
}
{
    var B296 = require('ralph/compiler/environment');
    var B297 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B293['%var'];
        var ralphScompilerSutilitiesCCexpressionQ = B297['expression?'];
        var ralphScoreCCfirst = B293['first'];
        var ralphScompilerSenvironmentCCspecial_operatorQ = B296['special-operator?'];
        var ralphScoreCCinstanceQ = B293['instance?'];
        var ralphScoreCCLsymbolG = B293['<symbol>'];
        var ralphScompilerSenvironmentCCfind_macro = B296['find-macro'];
        var ralphScoreCCapply = B293['apply'];
        var ralphScoreCCrest = B293['rest'];
        var ralphScompilerSenvironmentCCfind_symbol_macro = B296['find-symbol-macro'];
        var ralphScoreCCMannotate_function = B293['%annotate-function'];
        var macroexpand_1__311 = function B301(form__302, env__303) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__302))) {
                {
                    var identifier__304 = ralphScoreCCfirst(form__302);
                }
                if (($T)(ralphScompilerSenvironmentCCspecial_operatorQ(identifier__304, env__303)))
                    return(form__302);
                else {
                    {
                        var identifierT__306 = macroexpand__305(identifier__304, env__303);
                        var B307 = false;
                    }
                    if (($T)(ralphScoreCCinstanceQ(identifierT__306, ralphScoreCCLsymbolG)))
                        B307 = ralphScompilerSenvironmentCCfind_macro(identifierT__306, env__303);
                    else
                        B307 = false;
                    if (($T)(B307)) {
                        {
                            var macro__308 = B307;
                        }
                        return(ralphScoreCCapply(macro__308, env__303, ralphScoreCCrest(form__302)));
                    } else
                        return(form__302);
                }
            } else {
                {
                    var B309 = false;
                }
                if (($T)(ralphScoreCCinstanceQ(form__302, ralphScoreCCLsymbolG)))
                    B309 = ralphScompilerSenvironmentCCfind_symbol_macro(form__302, env__303);
                else
                    B309 = false;
                if (($T)(B309)) {
                    {
                        var symbol_macro__310 = B309;
                    }
                    return(symbol_macro__310(env__303));
                } else
                    return(form__302);
            }
        };
    }
    (exports)['macroexpand-1'] = macroexpand_1__311;
    ralphScoreCCMannotate_function(macroexpand_1__311, 'macroexpand_1', false);
}
{
    {
        var ralphScoreCCnot = B293['not'];
        var ralphScoreCCEE = B293['=='];
        var macroexpand__305 = function B313(form__314, env__315) {
            {
                var doneQ__316 = false;
            }
            while (($T)(ralphScoreCCnot(doneQ__316))) {
                {
                    var expanded__317 = macroexpand_1__311(form__314, env__315);
                }
                doneQ__316 = ralphScoreCCEE(expanded__317, form__314);
                form__314 = expanded__317;
            }
            return(form__314);
        };
    }
    (exports)['macroexpand'] = macroexpand__305;
    ralphScoreCCMannotate_function(macroexpand__305, 'macroexpand', false);
}
{
    {
        var ralphScoreCCLarrayG = B293['<array>'];
        var ralphScompilerSenvironmentCCfind_special_form = B296['find-special-form'];
        var ralphScoreCCmap = B293['map'];
        var ralphScoreCCrcurry = B293['rcurry'];
        var macroexpand_all__326 = function B320(form__321, env__322) {
            {
                var formT__323 = macroexpand__305(form__321, env__322);
            }
            if (($T)(ralphScoreCCinstanceQ(formT__323, ralphScoreCCLarrayG))) {
                {
                    var B324 = false;
                }
                if (($T)(ralphScompilerSutilitiesCCexpressionQ(formT__323)))
                    B324 = ralphScompilerSenvironmentCCfind_special_form(ralphScoreCCfirst(formT__323), env__322);
                else
                    B324 = false;
                if (($T)(B324)) {
                    {
                        var special_form__325 = B324;
                    }
                    return(ralphScoreCCapply(special_form__325, env__322, ralphScoreCCrest(formT__323)));
                } else
                    return(ralphScoreCCmap(ralphScoreCCrcurry(macroexpand_all__326, env__322), formT__323));
            } else
                return(formT__323);
        };
    }
    (exports)['macroexpand-all'] = macroexpand_all__326;
    ralphScoreCCMannotate_function(macroexpand_all__326, 'macroexpand_all', false);
}
