{
    var B1820 = require('ralph/core');
}
{
    var B1824 = require('ralph/compiler/module');
    var B1825 = require('ralph/compiler/environment');
    var B1826 = require('ralph/compiler/utilities');
}
{
    var ralphScoreCCMvar = B1820['%var'];
    var ralphScoreCCrcurry = B1820['rcurry'];
    var ralphScompilerSenvironmentCCresolve_symbol = B1825['resolve-symbol'];
    var ralphScoreCCcomplement = B1820['complement'];
    var ralphScompilerSenvironmentCCglobally_boundQ = B1825['globally-bound?'];
    var B1828 = $K('import-guard');
    var resolve__1829 = ralphScoreCCrcurry(ralphScompilerSenvironmentCCresolve_symbol, B1828, ralphScoreCCcomplement(ralphScompilerSenvironmentCCglobally_boundQ));
}
{
    {
        var ralphScompilerSutilitiesCCexpressionQ = B1826['expression?'];
        var ralphScoreCCEE = B1820['=='];
        var ralphScoreCCfirst = B1820['first'];
        var ralphScoreCCMannotate_function = B1820['%annotate-function'];
        var B1832 = $S('unquote', 'ralph/core');
        var unquotedQ__1836 = function B1833(form__1834, env__1835) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__1834)))
                return(ralphScoreCCEE(resolve__1829(ralphScoreCCfirst(form__1834), env__1835), B1832));
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(unquotedQ__1836, 'unquotedQ', false);
}
{
    {
        var B1839 = $S('unquote-splicing', 'ralph/core');
        var unquote_splicedQ__1843 = function B1840(form__1841, env__1842) {
            if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__1841)))
                return(ralphScoreCCEE(resolve__1829(ralphScoreCCfirst(form__1841), env__1842), B1839));
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(unquote_splicedQ__1843, 'unquote_splicedQ', false);
}
{
    {
        var B1846 = $S('quote', 'ralph/core');
        var syntax_quote_symbol__1850 = function B1847(symbol__1848, env__1849) {
            return([
                B1846,
                resolve__1829(symbol__1848, env__1849)
            ]);
        };
    }
    ralphScoreCCMannotate_function(syntax_quote_symbol__1850, 'syntax_quote_symbol', false);
}
{
    {
        var ralphScoreCCsecond = B1820['second'];
        var ralphScoreCCreduce = B1820['reduce'];
        var ralphScoreCCpush_last = B1820['push-last'];
        var B1855 = $S('%array', 'ralph/core');
        var B1856 = $S('%concat', 'ralph/core');
        var syntax_quote_array__1866 = function B1857(array__1858, env__1859) {
            if (($T)(unquotedQ__1836(array__1858, env__1859)))
                return(ralphScoreCCsecond(array__1858));
            else {
                {
                    var part__1860 = [B1855];
                }
                return(ralphScoreCCreduce(function B1861(result__1862, form__1863) {
                    if (($T)(unquote_splicedQ__1843(form__1863, env__1859))) {
                        part__1860 = false;
                        return([
                            B1856,
                            result__1862,
                            ralphScoreCCsecond(form__1863)
                        ]);
                    } else {
                        {
                            var formT__1865 = false;
                        }
                        if (($T)(unquotedQ__1836(form__1863, env__1859)))
                            formT__1865 = ralphScoreCCsecond(form__1863);
                        else
                            formT__1865 = syntax_quote_form__1864(form__1863, env__1859);
                        if (($T)(part__1860)) {
                            ralphScoreCCpush_last(part__1860, formT__1865);
                            return(result__1862);
                        } else {
                            part__1860 = [
                                B1855,
                                formT__1865
                            ];
                            return([
                                B1856,
                                result__1862,
                                part__1860
                            ]);
                        }
                    }
                }, part__1860, array__1858));
            }
        };
    }
    ralphScoreCCMannotate_function(syntax_quote_array__1866, 'syntax_quote_array', false);
}
{
    {
        var ralphScoreCCinstanceQ = B1820['instance?'];
        var ralphScoreCCLarrayG = B1820['<array>'];
        var ralphScoreCCLsymbolG = B1820['<symbol>'];
        var syntax_quote_form__1864 = function B1869(form__1870, env__1871) {
            {
                var B1872 = form__1870;
            }
            if (($T)(ralphScoreCCinstanceQ(B1872, ralphScoreCCLarrayG)))
                return(syntax_quote_array__1866(form__1870, env__1871));
            else if (($T)(ralphScoreCCinstanceQ(B1872, ralphScoreCCLsymbolG)))
                return(syntax_quote_symbol__1850(form__1870, env__1871));
            else
                return(form__1870);
        };
    }
    (exports)['syntax-quote-form'] = syntax_quote_form__1864;
    ralphScoreCCMannotate_function(syntax_quote_form__1864, 'syntax_quote_form', false);
}
