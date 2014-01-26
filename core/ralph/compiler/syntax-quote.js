{
    var B147 = require('ralph/core');
}
{
    var B238 = require('ralph/compiler/module');
    var B239 = require('ralph/compiler/environment');
    var B240 = require('ralph/compiler/utilities');
}
{
    var ralphScoreCCMvar = B147['%var'];
    var ralphScoreCCrcurry = B147['rcurry'];
    var ralphScompilerSenvironmentCCresolve_symbol = B239['resolve-symbol'];
    var ralphScoreCCcomplement = B147['complement'];
    var ralphScompilerSenvironmentCCglobally_boundQ = B239['globally-bound?'];
    var B242 = $K('import-guard');
    var resolve__243 = ralphScoreCCrcurry(ralphScompilerSenvironmentCCresolve_symbol, B242, ralphScoreCCcomplement(ralphScompilerSenvironmentCCglobally_boundQ));
}
{
    {
        var ralphScompilerSutilitiesCCexpressionQ = B240['expression?'];
        var ralphScoreCCEE = B147['=='];
        var ralphScoreCCfirst = B147['first'];
        var ralphScoreCCMannotate_function = B147['%annotate-function'];
        var B246 = $S('unquote', 'ralph/core');
        var unquotedQ__250 = function B247(form__248, env__249) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__248)))
                return(ralphScoreCCEE(resolve__243(ralphScoreCCfirst(form__248), env__249), B246));
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(unquotedQ__250, 'unquotedQ', false);
}
{
    {
        var B253 = $S('unquote-splicing', 'ralph/core');
        var unquote_splicedQ__257 = function B254(form__255, env__256) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__255)))
                return(ralphScoreCCEE(resolve__243(ralphScoreCCfirst(form__255), env__256), B253));
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(unquote_splicedQ__257, 'unquote_splicedQ', false);
}
{
    {
        var B260 = $S('quote', 'ralph/core');
        var syntax_quote_symbol__264 = function B261(symbol__262, env__263) {
            return([
                B260,
                resolve__243(symbol__262, env__263)
            ]);
        };
    }
    ralphScoreCCMannotate_function(syntax_quote_symbol__264, 'syntax_quote_symbol', false);
}
{
    {
        var ralphScoreCCsecond = B147['second'];
        var ralphScoreCCreduce = B147['reduce'];
        var ralphScoreCCpush_last = B147['push-last'];
        var B269 = $S('%array', 'ralph/core');
        var B270 = $S('%concat', 'ralph/core');
        var syntax_quote_array__280 = function B271(array__272, env__273) {
            if (($T)(unquotedQ__250(array__272, env__273)))
                return(ralphScoreCCsecond(array__272));
            else {
                {
                    var part__274 = [B269];
                }
                return(ralphScoreCCreduce(function B275(result__276, form__277) {
                    if (($T)(unquote_splicedQ__257(form__277, env__273))) {
                        part__274 = false;
                        return([
                            B270,
                            result__276,
                            ralphScoreCCsecond(form__277)
                        ]);
                    } else {
                        {
                            var formT__279 = false;
                        }
                        if (($T)(unquotedQ__250(form__277, env__273)))
                            formT__279 = ralphScoreCCsecond(form__277);
                        else
                            formT__279 = syntax_quote_form__278(form__277, env__273);
                        if (($T)(part__274)) {
                            ralphScoreCCpush_last(part__274, formT__279);
                            return(result__276);
                        } else {
                            part__274 = [
                                B269,
                                formT__279
                            ];
                            return([
                                B270,
                                result__276,
                                part__274
                            ]);
                        }
                    }
                }, part__274, array__272));
            }
        };
    }
    ralphScoreCCMannotate_function(syntax_quote_array__280, 'syntax_quote_array', false);
}
{
    {
        var ralphScoreCCinstanceQ = B147['instance?'];
        var ralphScoreCCLarrayG = B147['<array>'];
        var ralphScoreCCLsymbolG = B147['<symbol>'];
        var syntax_quote_form__278 = function B283(form__284, env__285) {
            {
                var B286 = form__284;
            }
            if (($T)(ralphScoreCCinstanceQ(B286, ralphScoreCCLarrayG)))
                return(syntax_quote_array__280(form__284, env__285));
            else if (($T)(ralphScoreCCinstanceQ(B286, ralphScoreCCLsymbolG)))
                return(syntax_quote_symbol__264(form__284, env__285));
            else
                return(form__284);
        };
    }
    (exports)['syntax-quote-form'] = syntax_quote_form__278;
    ralphScoreCCMannotate_function(syntax_quote_form__278, 'syntax_quote_form', false);
}
