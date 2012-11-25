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
var ralphScompilerSenvironmentCCspecial_operatorQ = B1832['special-operator?'], B1853 = $S('quote', 'ralph/core'), syntax_quote_symbol__1857 = ralphScoreCCMmake_function('syntax_quote_symbol', function B1854(symbol__1855, env__1856) {
        var B1858 = false;
        if (($T)(ralphScompilerSenvironmentCCspecial_operatorQ(symbol__1855, env__1856)))
            B1858 = symbol__1855;
        else
            B1858 = resolve__1836(symbol__1855, env__1856);
        return([
            B1853,
            B1858
        ]);
    }, false);
var ralphScoreCCsecond = B1827['second'], ralphScoreCCreduce = B1827['reduce'], ralphScoreCCpush_last = B1827['push-last'], B1863 = $S('%array'), B1864 = $S('%concat', 'ralph/core'), syntax_quote_array__1874 = ralphScoreCCMmake_function('syntax_quote_array', function B1865(array__1866, env__1867) {
        if (($T)(unquotedQ__1843(array__1866, env__1867)))
            return(ralphScoreCCsecond(array__1866));
        else {
            var part__1868 = [B1863];
            return(ralphScoreCCreduce(function B1869(result__1870, form__1871) {
                if (($T)(unquote_splicedQ__1850(form__1871, env__1867))) {
                    part__1868 = false;
                    return([
                        B1864,
                        result__1870,
                        ralphScoreCCsecond(form__1871)
                    ]);
                } else {
                    var formT__1873 = false;
                    if (($T)(unquotedQ__1843(form__1871, env__1867)))
                        formT__1873 = ralphScoreCCsecond(form__1871);
                    else
                        formT__1873 = syntax_quote_form__1872(form__1871, env__1867);
                    if (($T)(part__1868)) {
                        ralphScoreCCpush_last(part__1868, formT__1873);
                        return(result__1870);
                    } else {
                        part__1868 = [
                            B1863,
                            formT__1873
                        ];
                        return([
                            B1864,
                            result__1870,
                            part__1868
                        ]);
                    }
                }
            }, part__1868, array__1866));
        }
    }, false);
{
    var ralphScoreCCinstanceQ = B1827['instance?'], ralphScoreCCLarrayG = B1827['<array>'], ralphScoreCCLsymbolG = B1827['<symbol>'], syntax_quote_form__1872 = ralphScoreCCMmake_function('syntax_quote_form', function B1877(form__1878, env__1879) {
            var B1880 = form__1878;
            if (($T)(ralphScoreCCinstanceQ(B1880, ralphScoreCCLarrayG)))
                return(syntax_quote_array__1874(form__1878, env__1879));
            else if (($T)(ralphScoreCCinstanceQ(B1880, ralphScoreCCLsymbolG)))
                return(syntax_quote_symbol__1857(form__1878, env__1879));
            else
                return(form__1878);
        }, false);
    (exports)['syntax-quote-form'] = syntax_quote_form__1872;
}
