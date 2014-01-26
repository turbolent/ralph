{
    var B1771 = require('ralph/core');
}
{
    var B1874 = require('ralph/stream');
    var B1875 = require('ralph/format');
    var B1876 = require('ralph/regexp');
    var B1877 = require('ralph/compiler/syntax-quote');
}
{
    var ralphScoreCCMvar = B1771['%var'];
    var ralphScoreCCmap = B1771['map'];
    var ralphScoreCCcurry = B1771['curry'];
    var ralphScoreCCmake = B1771['make'];
    var ralphSregexpCCLregexpG = B1876['<regexp>'];
    var B1880 = $K('ignore-case?');
    var B1881 = $K('pattern');
    var Tnumber_patternsT__1882 = ralphScoreCCmap(ralphScoreCCcurry(ralphScoreCCmake, ralphSregexpCCLregexpG, B1880, true, B1881), [
            '^[+-]?0x[0-9a-f]+',
            '^[+-]?0[0-7]+',
            '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
        ]);
}
{
    var Tline_patternT__1883 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1881, '(.*)[\n\r]?');
}
{
    var Twhitespace_subpatternT__1884 = '\t\n\r\x0B\f\xA0\uFEFF ';
}
{
    var ralphScoreCCconcatenate = B1771['concatenate'];
    var Twhitespace_patternT__1885 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1881, ralphScoreCCconcatenate('[', Twhitespace_subpatternT__1884, ']*'));
}
{
    var Tatom_patternT__1886 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1881, ralphScoreCCconcatenate('[^\\[\\]();`,', Twhitespace_subpatternT__1884, ']+'));
}
{
    {
        var ralphSregexpCCmatch = B1876['match'];
        var ralphSstreamCCstream_remaining_contents = B1874['stream-remaining-contents'];
        var ralphSstreamCCstream_read = B1874['stream-read'];
        var ralphScoreCCsize = B1771['size'];
        var ralphScoreCCfirst = B1771['first'];
        var ralphScoreCCMannotate_function = B1771['%annotate-function'];
        var match_stream__1894 = function B1889(regexp__1890, stream__1891) {
            {
                var B1892 = ralphSregexpCCmatch(regexp__1890, ralphSstreamCCstream_remaining_contents(stream__1891));
            }
            if (($T)(B1892)) {
                {
                    var result__1893 = B1892;
                }
                ralphSstreamCCstream_read(stream__1891, ralphScoreCCsize(ralphScoreCCfirst(result__1893)));
                return(result__1893);
            } else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(match_stream__1894, 'match_stream', false);
}
{
    {
        var read_line__1898 = function B1896(stream__1897) {
            return(match_stream__1894(Tline_patternT__1883, stream__1897));
        };
    }
    ralphScoreCCMannotate_function(read_line__1898, 'read_line', false);
}
{
    {
        var read_whitespace__1902 = function B1900(stream__1901) {
            return(match_stream__1894(Twhitespace_patternT__1885, stream__1901));
        };
    }
    ralphScoreCCMannotate_function(read_whitespace__1902, 'read_whitespace', false);
}
{
    {
        var ralphScoreCCEE = B1771['=='];
        var ralphScoreCCanyQ = B1771['any?'];
        var ralphScoreCCrcurry = B1771['rcurry'];
        var ralphScoreCCas_number = B1771['as-number'];
        var ralphScoreCClast = B1771['last'];
        var ralphScoreCCkeyword = B1771['keyword'];
        var ralphScoreCCbut_last = B1771['but-last'];
        var ralphScoreCCsplit = B1771['split'];
        var ralphScoreCCemptyQ = B1771['empty?'];
        var ralphScoreCCsymbol = B1771['symbol'];
        var ralphScoreCCreduce1 = B1771['reduce1'];
        var B1909 = $KEY;
        var B1910 = $REST;
        var make_atom__1919 = function B1911(value__1912) {
            {
                var B1913 = value__1912;
            }
            if (($T)(ralphScoreCCEE(B1913, '#t')))
                return(true);
            else if (($T)(ralphScoreCCEE(B1913, '#f')))
                return(false);
            else if (($T)(ralphScoreCCEE(B1913, '#key')))
                return(B1909);
            else if (($T)(ralphScoreCCEE(B1913, '#rest')))
                return(B1910);
            else {
                {
                    var B1914 = ralphScoreCCanyQ(ralphScoreCCrcurry(ralphSregexpCCmatch, value__1912), Tnumber_patternsT__1882);
                }
                if (($T)(B1914)) {
                    {
                        var number__1915 = B1914;
                    }
                    return(ralphScoreCCas_number(ralphScoreCCfirst(number__1915)));
                } else if (($T)(ralphScoreCCEE(ralphScoreCClast(value__1912), ':')))
                    return(ralphScoreCCkeyword(ralphScoreCCbut_last(value__1912)));
                else {
                    {
                        var B1916 = ralphScoreCCsplit(value__1912, '::');
                        var head__1917 = B1916[0];
                        var tail__1918 = $SL.call(B1916, 1);
                    }
                    if (($T)(ralphScoreCCemptyQ(tail__1918)))
                        return(ralphScoreCCsymbol(head__1917));
                    else
                        return(ralphScoreCCsymbol(ralphScoreCCreduce1(ralphScoreCCconcatenate, tail__1918), head__1917));
                }
            }
        };
    }
    ralphScoreCCMannotate_function(make_atom__1919, 'make_atom', false);
}
{
    {
        var ralphSstreamCCLstring_streamG = B1874['<string-stream>'];
        var ralphSstreamCCstream_read_element = B1874['stream-read-element'];
        var ralphScoreCCnot = B1771['not'];
        var ralphSstreamCCstream_at_endQ = B1874['stream-at-end?'];
        var ralphScoreCCsignal = B1771['signal'];
        var ralphSstreamCCstream_write = B1874['stream-write'];
        var ralphScoreCCcode_char = B1771['code-char'];
        var ralphScoreCCparse_integer = B1771['parse-integer'];
        var ralphSstreamCCstream_contents = B1874['stream-contents'];
        var B1923 = $K('radix');
        var read_string__1929 = function B1924(stream__1925) {
            {
                var result__1926 = ralphScoreCCmake(ralphSstreamCCLstring_streamG);
                var char__1927 = ralphSstreamCCstream_read_element(stream__1925);
            }
            while (($T)(ralphScoreCCnot(ralphScoreCCEE(char__1927, '"')))) {
                if (($T)(ralphSstreamCCstream_at_endQ(stream__1925)))
                    ralphScoreCCsignal('missing end of string');
                {
                    var B1930 = false;
                }
                if (($T)(ralphScoreCCEE(char__1927, '\\'))) {
                    {
                        var B1928 = ralphSstreamCCstream_read_element(stream__1925);
                    }
                    if (($T)(ralphScoreCCEE(B1928, '"')))
                        B1930 = '"';
                    else if (($T)(ralphScoreCCEE(B1928, '\\')))
                        B1930 = '\\';
                    else if (($T)(ralphScoreCCEE(B1928, 'b')))
                        B1930 = '\b';
                    else if (($T)(ralphScoreCCEE(B1928, 'f')))
                        B1930 = '\f';
                    else if (($T)(ralphScoreCCEE(B1928, 'n')))
                        B1930 = '\n';
                    else if (($T)(ralphScoreCCEE(B1928, 'r')))
                        B1930 = '\r';
                    else if (($T)(ralphScoreCCEE(B1928, 't')))
                        B1930 = '\t';
                    else if (($T)(ralphScoreCCEE(B1928, 'v')))
                        B1930 = '\x0B';
                    else if (($T)(ralphScoreCCEE(B1928, 'u')))
                        B1930 = ralphScoreCCcode_char(ralphScoreCCparse_integer(ralphSstreamCCstream_read(stream__1925, 4), B1923, 16));
                    else
                        B1930 = ralphScoreCCsignal('bad escape sequence');
                } else
                    B1930 = char__1927;
                ralphSstreamCCstream_write(result__1926, B1930);
                char__1927 = ralphSstreamCCstream_read_element(stream__1925);
            }
            return(ralphSstreamCCstream_contents(result__1926));
        };
    }
    ralphScoreCCMannotate_function(read_string__1929, 'read_string', false);
}
{
    var B1934 = $S('quote', 'ralph/core');
    var B1935 = $S('unquote', 'ralph/core');
    var B1936 = $S('unquote-splicing', 'ralph/core');
    var Twrapper_symbolsT__1937 = [
            B1934,
            B1935,
            B1936
        ];
}
{
    {
        var ralphScoreCCmake_object = B1771['make-object'];
        var Bend_of_file__1938 = ralphScoreCCmake_object();
    }
    (exports)['$end-of-file'] = Bend_of_file__1938;
}
{
    {
        var ralphScoreCCMkeys = B1771['%keys'];
        var ralphScoreCCpush_last = B1771['push-last'];
        var ralphScoreCCpop_last = B1771['pop-last'];
        var ralphScompilerSsyntax_quoteCCsyntax_quote_form = B1877['syntax-quote-form'];
        var ralphScoreCCmemberQ = B1771['member?'];
        var ralphSformatCCformat_to_string = B1875['format-to-string'];
        var ralphSstreamCCstream_peek = B1874['stream-peek'];
        var ralphSstreamCCstream_unread_element = B1874['stream-unread-element'];
        var B1948 = $S('syntax-quote', 'ralph/core');
        var B1949 = $S('%array', 'ralph/core');
        var read__1971 = function B1950(stream__1951, env__1952) {
            {
                var B1953 = $SL.call(arguments, 2);
                var B1954 = ralphScoreCCMkeys(B1953, {
                        'eof-error?': true,
                        'eof-value': Bend_of_file__1938
                    });
                var eof_errorQ__1955 = B1954['eof-error?'];
                var eof_value__1956 = B1954['eof-value'];
                var stack__1957 = [[]];
                var ends__1958 = [];
                var readQ__1959 = true;
                var result__1960 = false;
                var add_to_stackN__1961 = false;
                var add_lastN__1962 = false;
            }
            add_to_stackN__1961 = function B1963(value__1964) {
                ralphScoreCCpush_last(stack__1957, value__1964);
                return(add_lastN__1962());
            };
            add_lastN__1962 = function B1965() {
                {
                    var value__1966 = ralphScoreCCpop_last(stack__1957);
                    var l__1967 = ralphScoreCClast(stack__1957);
                }
                if (($T)(ralphScoreCCEE(l__1967, B1948))) {
                    ralphScoreCCpop_last(stack__1957);
                    return(add_to_stackN__1961(ralphScompilerSsyntax_quoteCCsyntax_quote_form(value__1966, env__1952)));
                } else if (($T)(ralphScoreCCmemberQ(l__1967, Twrapper_symbolsT__1937)))
                    return(add_to_stackN__1961([
                        ralphScoreCCpop_last(stack__1957),
                        value__1966
                    ]));
                else
                    return(ralphScoreCCpush_last(l__1967, value__1966));
            };
            while (($T)(readQ__1959)) {
                read_whitespace__1902(stream__1951);
                if (($T)(ralphSstreamCCstream_at_endQ(stream__1951))) {
                    readQ__1959 = false;
                    if (($T)(ralphScoreCCemptyQ(ends__1958)))
                        if (($T)(eof_errorQ__1955))
                            ralphScoreCCsignal('EOF before finished');
                        else
                            result__1960 = eof_value__1956;
                    else
                        ralphScoreCCsignal(ralphSformatCCformat_to_string('missing closings: %=', ends__1958));
                } else {
                    {
                        var char__1968 = ralphSstreamCCstream_read_element(stream__1951);
                        var B1969 = char__1968;
                    }
                    if (($T)(ralphScoreCCEE(B1969, ';')))
                        read_line__1898(stream__1951);
                    else if (($T)(ralphScoreCCEE(B1969, '\'')))
                        ralphScoreCCpush_last(stack__1957, B1934);
                    else if (($T)(ralphScoreCCEE(B1969, '`')))
                        ralphScoreCCpush_last(stack__1957, B1948);
                    else if (($T)(ralphScoreCCEE(B1969, ',')))
                        if (($T)(ralphScoreCCEE(ralphSstreamCCstream_peek(stream__1951), '@'))) {
                            ralphSstreamCCstream_read_element(stream__1951);
                            ralphScoreCCpush_last(stack__1957, B1936);
                        } else
                            ralphScoreCCpush_last(stack__1957, B1935);
                    else if (($T)(ralphScoreCCEE(B1969, '('))) {
                        ralphScoreCCpush_last(ends__1958, ')');
                        ralphScoreCCpush_last(stack__1957, []);
                    } else if (($T)(ralphScoreCCEE(B1969, '['))) {
                        ralphScoreCCpush_last(ends__1958, ']');
                        ralphScoreCCpush_last(stack__1957, [B1949]);
                    } else if (($T)(ralphScoreCCEE(B1969, ralphScoreCClast(ends__1958)))) {
                        ralphScoreCCpop_last(ends__1958);
                        add_lastN__1962();
                    } else {
                        {
                            var B1970 = ralphScoreCCEE(B1969, ')');
                            var B1972 = false;
                        }
                        if (($T)(B1970))
                            B1972 = B1970;
                        else
                            B1972 = ralphScoreCCEE(B1969, ']');
                        if (($T)(B1972))
                            ralphScoreCCsignal(ralphSformatCCformat_to_string('too many closings: %=', char__1968));
                        else if (($T)(ralphScoreCCEE(B1969, '"')))
                            add_to_stackN__1961(read_string__1929(stream__1951));
                        else {
                            ralphSstreamCCstream_unread_element(stream__1951);
                            add_to_stackN__1961(make_atom__1919(ralphScoreCCfirst(match_stream__1894(Tatom_patternT__1886, stream__1951))));
                        }
                    }
                    {
                        var B1973 = false;
                    }
                    if (($T)(ralphScoreCCEE(ralphScoreCCsize(stack__1957), 1)))
                        B1973 = ralphScoreCCnot(ralphScoreCCemptyQ(ralphScoreCCfirst(stack__1957)));
                    else
                        B1973 = false;
                    if (($T)(B1973)) {
                        readQ__1959 = false;
                        result__1960 = ralphScoreCCfirst(ralphScoreCCfirst(stack__1957));
                    }
                }
            }
            return(result__1960);
        };
    }
    (exports)['read'] = read__1971;
    ralphScoreCCMannotate_function(read__1971, 'read', false);
}
