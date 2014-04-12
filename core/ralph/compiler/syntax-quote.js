{
    var $module = Object.create(null);
    var Mexport = function B1924(name__1925, value__1926) {
        var B1927 = (exports);
        return(B1927[name__1925] = value__1926);
    };
}
var B1928 = require('ralph/core');
{
    var B1929 = require('ralph/compiler/module');
    {
        var B1930 = require('ralph/compiler/environment');
        var B1931 = require('ralph/compiler/utilities');
    }
}
{
    var B1933 = $S('unquote', 'ralph/core');
    {
        var unquotedQ = function B1934(form__1935, env__1936) {
            if (($T)(B1928['expression?'](form__1935)))
                return(B1928['=='](B1930['resolve-symbol'](B1928['first'](form__1935), env__1936), B1933));
            else
                return(false);
        };
        B1928['%annotate-function'](unquotedQ, 'unquoted?', false);
    }
}
{
    var B1938 = $S('unquote-splicing', 'ralph/core');
    {
        var unquote_splicedQ = function B1939(form__1940, env__1941) {
            if (($T)(B1928['expression?'](form__1940)))
                return(B1928['=='](B1930['resolve-symbol'](B1928['first'](form__1940), env__1941), B1938));
            else
                return(false);
        };
        B1928['%annotate-function'](unquote_splicedQ, 'unquote-spliced?', false);
    }
}
{
    var B1943 = $S('quote', 'ralph/core');
    {
        var syntax_quote_symbol = function B1944(symbol__1945, env__1946) {
            return([
                B1943,
                B1930['resolve-symbol'](symbol__1945, env__1946)
            ]);
        };
        B1928['%annotate-function'](syntax_quote_symbol, 'syntax-quote-symbol', false);
    }
}
{
    var B1949 = $S('%array', 'ralph/core');
    {
        var B1950 = $S('%concat', 'ralph/core');
        {
            var syntax_quote_array = function B1951(array__1952, env__1953) {
                if (($T)(unquotedQ(array__1952, env__1953)))
                    return(B1928['second'](array__1952));
                else {
                    var part__1954 = [B1949];
                    return(B1928['reduce'](function B1955(result__1956, form__1957) {
                        if (($T)(unquote_splicedQ(form__1957, env__1953))) {
                            part__1954 = false;
                            return([
                                B1950,
                                result__1956,
                                B1928['second'](form__1957)
                            ]);
                        } else {
                            var formT__1958 = false;
                            if (($T)(unquotedQ(form__1957, env__1953)))
                                formT__1958 = B1928['second'](form__1957);
                            else
                                formT__1958 = syntax_quote_form(form__1957, env__1953);
                            if (($T)(part__1954)) {
                                B1928['push-last'](part__1954, formT__1958);
                                return(result__1956);
                            } else {
                                part__1954 = [
                                    B1949,
                                    formT__1958
                                ];
                                return([
                                    B1950,
                                    result__1956,
                                    part__1954
                                ]);
                            }
                        }
                    }, part__1954, array__1952));
                }
            };
            B1928['%annotate-function'](syntax_quote_array, 'syntax-quote-array', false);
        }
    }
}
{
    {
        var syntax_quote_form = function B1961(form__1962, env__1963) {
            var B1964 = form__1962;
            if (($T)(B1928['instance?'](B1964, B1928['<array>'])))
                return(syntax_quote_array(form__1962, env__1963));
            else if (($T)(B1928['instance?'](B1964, B1928['<symbol>'])))
                return(syntax_quote_symbol(form__1962, env__1963));
            else
                return(form__1962);
        };
        Mexport('syntax-quote-form', syntax_quote_form);
    }
    B1928['%annotate-function'](syntax_quote_form, 'syntax-quote-form', false);
}
