var B1827 = require('ralph/core');
var B1831 = require('ralph/compiler/module'), B1832 = require('ralph/compiler/environment'), B1833 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B1827['%var'], ralphScoreCCrcurry = B1827['rcurry'], ralphScompilerSenvironmentCCresolve_symbol = B1832['resolve-symbol'], ralphScoreCCcomplement = B1827['complement'], ralphScompilerSenvironmentCCglobally_boundQ = B1832['globally-bound?'], B1835 = $K('import-guard'), resolve__1836 = ralphScoreCCrcurry(ralphScompilerSenvironmentCCresolve_symbol, B1835, ralphScoreCCcomplement(ralphScompilerSenvironmentCCglobally_boundQ));
var ralphScoreCCMmake_function = B1827['%make-function'], ralphScompilerSutilitiesCCexpressionQ = B1833['expression?'], ralphScoreCCEE = B1827['=='], ralphScoreCCfirst = B1827['first'], B1839 = $S('unquote', 'ralph/core'), unquotedQ__1843 = ralphScoreCCMmake_function('unquotedQ', function B1840(form__1841, env__1842) {
        if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__1841)))
            return(ralphScoreCCEE(resolve__1836(ralphScoreCCfirst(form__1841), env__1842), B1839));
        else
            return(false);
    }, false);
var B1846 = $S('unquote-splicing', 'ralph/core'), unquote_splicedQ__1850 = ralphScoreCCMmake_function('unquote_splicedQ', function B1847(form__1848, env__1849) {
        if (($T)(ralphScompilerSutilitiesCCexpressionQ(form__1848)))
            return(ralphScoreCCEE(resolve__1836(ralphScoreCCfirst(form__1848), env__1849), B1846));
        else
            return(false);
    }, false);
var B1853 = $S('quote', 'ralph/core'), syntax_quote_symbol__1857 = ralphScoreCCMmake_function('syntax_quote_symbol', function B1854(symbol__1855, env__1856) {
        return([
            B1853,
            resolve__1836(symbol__1855, env__1856)
        ]);
    }, false);
var ralphScoreCCsecond = B1827['second'], ralphScoreCCreduce = B1827['reduce'], ralphScoreCCpush_last = B1827['push-last'], B1862 = $S('%array', 'ralph/core'), B1863 = $S('%concat', 'ralph/core'), syntax_quote_array__1873 = ralphScoreCCMmake_function('syntax_quote_array', function B1864(array__1865, env__1866) {
        if (($T)(unquotedQ__1843(array__1865, env__1866)))
            return(ralphScoreCCsecond(array__1865));
        else {
            var part__1867 = [B1862];
            return(ralphScoreCCreduce(function B1868(result__1869, form__1870) {
                if (($T)(unquote_splicedQ__1850(form__1870, env__1866))) {
                    part__1867 = false;
                    return([
                        B1863,
                        result__1869,
                        ralphScoreCCsecond(form__1870)
                    ]);
                } else {
                    var formT__1872 = false;
                    if (($T)(unquotedQ__1843(form__1870, env__1866)))
                        formT__1872 = ralphScoreCCsecond(form__1870);
                    else
                        formT__1872 = syntax_quote_form__1871(form__1870, env__1866);
                    if (($T)(part__1867)) {
                        ralphScoreCCpush_last(part__1867, formT__1872);
                        return(result__1869);
                    } else {
                        part__1867 = [
                            B1862,
                            formT__1872
                        ];
                        return([
                            B1863,
                            result__1869,
                            part__1867
                        ]);
                    }
                }
            }, part__1867, array__1865));
        }
    }, false);
{
    var ralphScoreCCinstanceQ = B1827['instance?'], ralphScoreCCLarrayG = B1827['<array>'], ralphScoreCCLsymbolG = B1827['<symbol>'], syntax_quote_form__1871 = ralphScoreCCMmake_function('syntax_quote_form', function B1876(form__1877, env__1878) {
            var B1879 = form__1877;
            if (($T)(ralphScoreCCinstanceQ(B1879, ralphScoreCCLarrayG)))
                return(syntax_quote_array__1873(form__1877, env__1878));
            else if (($T)(ralphScoreCCinstanceQ(B1879, ralphScoreCCLsymbolG)))
                return(syntax_quote_symbol__1857(form__1877, env__1878));
            else
                return(form__1877);
        }, false);
    (exports)['syntax-quote-form'] = syntax_quote_form__1871;
}
