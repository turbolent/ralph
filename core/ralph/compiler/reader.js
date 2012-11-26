var B1778 = require('ralph/core');
var B1881 = require('ralph/stream'), B1882 = require('ralph/format'), B1883 = require('ralph/regexp'), B1884 = require('ralph/compiler/syntax-quote');
var ralphScoreCCMvar = B1778['%var'], ralphScoreCCmap = B1778['map'], ralphScoreCCcurry = B1778['curry'], ralphScoreCCmake = B1778['make'], ralphSregexpCCLregexpG = B1883['<regexp>'], B1887 = $K('ignore-case?'), B1888 = $K('pattern'), Tnumber_patternsT__1889 = ralphScoreCCmap(ralphScoreCCcurry(ralphScoreCCmake, ralphSregexpCCLregexpG, B1887, true, B1888), [
        '^[+-]?0x[0-9a-f]+',
        '^[+-]?0[0-7]+',
        '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
    ]);
var Tline_patternT__1890 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1888, '(.*)[\n\r]?');
var Twhitespace_subpatternT__1891 = '\t\n\r\v\f\xa0\ufeff ';
var ralphScoreCCconcatenate = B1778['concatenate'], Twhitespace_patternT__1892 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1888, ralphScoreCCconcatenate('[', Twhitespace_subpatternT__1891, ']*'));
var Tatom_patternT__1893 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1888, ralphScoreCCconcatenate('[^\\[\\]();`,', Twhitespace_subpatternT__1891, ']+'));
var ralphScoreCCMmake_function = B1778['%make-function'], ralphSregexpCCmatch = B1883['match'], ralphSstreamCCstream_remaining_contents = B1881['stream-remaining-contents'], ralphSstreamCCstream_read = B1881['stream-read'], ralphScoreCCsize = B1778['size'], ralphScoreCCfirst = B1778['first'], match_stream__1901 = ralphScoreCCMmake_function('match_stream', function B1896(regexp__1897, stream__1898) {
        var B1899 = ralphSregexpCCmatch(regexp__1897, ralphSstreamCCstream_remaining_contents(stream__1898));
        if (($T)(B1899)) {
            var result__1900 = B1899;
            ralphSstreamCCstream_read(stream__1898, ralphScoreCCsize(ralphScoreCCfirst(result__1900)));
            return(result__1900);
        } else
            return(false);
    }, false);
var read_line__1905 = ralphScoreCCMmake_function('read_line', function B1903(stream__1904) {
        return(match_stream__1901(Tline_patternT__1890, stream__1904));
    }, false);
var read_whitespace__1909 = ralphScoreCCMmake_function('read_whitespace', function B1907(stream__1908) {
        return(match_stream__1901(Twhitespace_patternT__1892, stream__1908));
    }, false);
var ralphScoreCCEE = B1778['=='], ralphScoreCCanyQ = B1778['any?'], ralphScoreCCrcurry = B1778['rcurry'], ralphScoreCCas_number = B1778['as-number'], ralphScoreCClast = B1778['last'], ralphScoreCCkeyword = B1778['keyword'], ralphScoreCCbut_last = B1778['but-last'], ralphScoreCCsplit = B1778['split'], ralphScoreCCemptyQ = B1778['empty?'], ralphScoreCCsymbol = B1778['symbol'], ralphScoreCCreduce1 = B1778['reduce1'], B1916 = $KEY, B1917 = $REST, make_atom__1926 = ralphScoreCCMmake_function('make_atom', function B1918(value__1919) {
        var B1920 = value__1919;
        if (($T)(ralphScoreCCEE(B1920, '#t')))
            return(true);
        else if (($T)(ralphScoreCCEE(B1920, '#f')))
            return(false);
        else if (($T)(ralphScoreCCEE(B1920, '#key')))
            return(B1916);
        else if (($T)(ralphScoreCCEE(B1920, '#rest')))
            return(B1917);
        else {
            var B1921 = ralphScoreCCanyQ(ralphScoreCCrcurry(ralphSregexpCCmatch, value__1919), Tnumber_patternsT__1889);
            if (($T)(B1921)) {
                var number__1922 = B1921;
                return(ralphScoreCCas_number(ralphScoreCCfirst(number__1922)));
            } else if (($T)(ralphScoreCCEE(ralphScoreCClast(value__1919), ':')))
                return(ralphScoreCCkeyword(ralphScoreCCbut_last(value__1919)));
            else {
                var B1923 = ralphScoreCCsplit(value__1919, '::'), head__1924 = B1923[0], tail__1925 = $SL.call(B1923, 1);
                if (($T)(ralphScoreCCemptyQ(tail__1925)))
                    return(ralphScoreCCsymbol(head__1924));
                else
                    return(ralphScoreCCsymbol(ralphScoreCCreduce1(ralphScoreCCconcatenate, tail__1925), head__1924));
            }
        }
    }, false);
var ralphSstreamCCLstring_streamG = B1881['<string-stream>'], ralphSstreamCCstream_read_element = B1881['stream-read-element'], ralphScoreCCnot = B1778['not'], ralphSstreamCCstream_at_endQ = B1881['stream-at-end?'], ralphScoreCCsignal = B1778['signal'], ralphSstreamCCstream_write = B1881['stream-write'], ralphScoreCCcode_char = B1778['code-char'], ralphScoreCCparse_integer = B1778['parse-integer'], ralphSstreamCCstream_contents = B1881['stream-contents'], B1930 = $K('radix'), read_string__1936 = ralphScoreCCMmake_function('read_string', function B1931(stream__1932) {
        var result__1933 = ralphScoreCCmake(ralphSstreamCCLstring_streamG), char__1934 = ralphSstreamCCstream_read_element(stream__1932);
        while (($T)(ralphScoreCCnot(ralphScoreCCEE(char__1934, '"')))) {
            if (($T)(ralphSstreamCCstream_at_endQ(stream__1932)))
                ralphScoreCCsignal('missing end of string');
            var B1937 = false;
            if (($T)(ralphScoreCCEE(char__1934, '\\'))) {
                var B1935 = ralphSstreamCCstream_read_element(stream__1932);
                if (($T)(ralphScoreCCEE(B1935, '"')))
                    B1937 = '"';
                else if (($T)(ralphScoreCCEE(B1935, '\\')))
                    B1937 = '\\';
                else if (($T)(ralphScoreCCEE(B1935, 'b')))
                    B1937 = '\b';
                else if (($T)(ralphScoreCCEE(B1935, 'f')))
                    B1937 = '\f';
                else if (($T)(ralphScoreCCEE(B1935, 'n')))
                    B1937 = '\n';
                else if (($T)(ralphScoreCCEE(B1935, 'r')))
                    B1937 = '\r';
                else if (($T)(ralphScoreCCEE(B1935, 't')))
                    B1937 = '\t';
                else if (($T)(ralphScoreCCEE(B1935, 'v')))
                    B1937 = '\v';
                else if (($T)(ralphScoreCCEE(B1935, 'u')))
                    B1937 = ralphScoreCCcode_char(ralphScoreCCparse_integer(ralphSstreamCCstream_read(stream__1932, 4), B1930, 16));
                else
                    B1937 = ralphScoreCCsignal('bad escape sequence');
            } else
                B1937 = char__1934;
            ralphSstreamCCstream_write(result__1933, B1937);
            char__1934 = ralphSstreamCCstream_read_element(stream__1932);
        }
        return(ralphSstreamCCstream_contents(result__1933));
    }, false);
var B1941 = $S('quote', 'ralph/core'), B1942 = $S('unquote', 'ralph/core'), B1943 = $S('unquote-splicing', 'ralph/core'), Twrapper_symbolsT__1944 = [
        B1941,
        B1942,
        B1943
    ];
{
    var ralphScoreCCmake_object = B1778['make-object'], Bend_of_file__1945 = ralphScoreCCmake_object();
    (exports)['$end-of-file'] = Bend_of_file__1945;
}
{
    var ralphScoreCCMkeys = B1778['%keys'], ralphScoreCCpush_last = B1778['push-last'], ralphScoreCCpop_last = B1778['pop-last'], ralphScompilerSsyntax_quoteCCsyntax_quote_form = B1884['syntax-quote-form'], ralphScoreCCmemberQ = B1778['member?'], ralphSformatCCformat_to_string = B1882['format-to-string'], ralphSstreamCCstream_peek = B1881['stream-peek'], ralphSstreamCCstream_unread_element = B1881['stream-unread-element'], B1955 = $S('syntax-quote', 'ralph/core'), B1956 = $S('%array', 'ralph/core'), read__1978 = ralphScoreCCMmake_function('read', function B1957(stream__1958, env__1959) {
            var B1960 = $SL.call(arguments, 2), B1961 = ralphScoreCCMkeys(B1960, {
                    'eof-error?': true,
                    'eof-value': Bend_of_file__1945
                }), eof_errorQ__1962 = B1961['eof-error?'], eof_value__1963 = B1961['eof-value'], stack__1964 = [[]], ends__1965 = [], readQ__1966 = true, result__1967 = false, add_to_stackN__1968 = false, add_lastN__1969 = false;
            add_to_stackN__1968 = function B1970(value__1971) {
                ralphScoreCCpush_last(stack__1964, value__1971);
                return(add_lastN__1969());
            };
            add_lastN__1969 = function B1972() {
                var value__1973 = ralphScoreCCpop_last(stack__1964), l__1974 = ralphScoreCClast(stack__1964);
                if (($T)(ralphScoreCCEE(l__1974, B1955))) {
                    ralphScoreCCpop_last(stack__1964);
                    return(add_to_stackN__1968(ralphScompilerSsyntax_quoteCCsyntax_quote_form(value__1973, env__1959)));
                } else if (($T)(ralphScoreCCmemberQ(l__1974, Twrapper_symbolsT__1944)))
                    return(add_to_stackN__1968([
                        ralphScoreCCpop_last(stack__1964),
                        value__1973
                    ]));
                else
                    return(ralphScoreCCpush_last(l__1974, value__1973));
            };
            while (($T)(readQ__1966)) {
                read_whitespace__1909(stream__1958);
                if (($T)(ralphSstreamCCstream_at_endQ(stream__1958))) {
                    readQ__1966 = false;
                    if (($T)(ralphScoreCCemptyQ(ends__1965)))
                        if (($T)(eof_errorQ__1962))
                            ralphScoreCCsignal('EOF before finished');
                        else
                            result__1967 = eof_value__1963;
                    else
                        ralphScoreCCsignal(ralphSformatCCformat_to_string('missing closings: %=', ends__1965));
                } else {
                    var char__1975 = ralphSstreamCCstream_read_element(stream__1958), B1976 = char__1975;
                    if (($T)(ralphScoreCCEE(B1976, ';')))
                        read_line__1905(stream__1958);
                    else if (($T)(ralphScoreCCEE(B1976, '\'')))
                        ralphScoreCCpush_last(stack__1964, B1941);
                    else if (($T)(ralphScoreCCEE(B1976, '`')))
                        ralphScoreCCpush_last(stack__1964, B1955);
                    else if (($T)(ralphScoreCCEE(B1976, ',')))
                        if (($T)(ralphScoreCCEE(ralphSstreamCCstream_peek(stream__1958), '@'))) {
                            ralphSstreamCCstream_read_element(stream__1958);
                            ralphScoreCCpush_last(stack__1964, B1943);
                        } else
                            ralphScoreCCpush_last(stack__1964, B1942);
                    else if (($T)(ralphScoreCCEE(B1976, '('))) {
                        ralphScoreCCpush_last(ends__1965, ')');
                        ralphScoreCCpush_last(stack__1964, []);
                    } else if (($T)(ralphScoreCCEE(B1976, '['))) {
                        ralphScoreCCpush_last(ends__1965, ']');
                        ralphScoreCCpush_last(stack__1964, [B1956]);
                    } else if (($T)(ralphScoreCCEE(B1976, ralphScoreCClast(ends__1965)))) {
                        ralphScoreCCpop_last(ends__1965);
                        add_lastN__1969();
                    } else {
                        var B1977 = ralphScoreCCEE(B1976, ')'), B1979 = false;
                        if (($T)(B1977))
                            B1979 = B1977;
                        else
                            B1979 = ralphScoreCCEE(B1976, ']');
                        if (($T)(B1979))
                            ralphScoreCCsignal(ralphSformatCCformat_to_string('too many closings: %=', char__1975));
                        else if (($T)(ralphScoreCCEE(B1976, '"')))
                            add_to_stackN__1968(read_string__1936(stream__1958));
                        else {
                            ralphSstreamCCstream_unread_element(stream__1958);
                            add_to_stackN__1968(make_atom__1926(ralphScoreCCfirst(match_stream__1901(Tatom_patternT__1893, stream__1958))));
                        }
                    }
                    var B1980 = false;
                    if (($T)(ralphScoreCCEE(ralphScoreCCsize(stack__1964), 1)))
                        B1980 = ralphScoreCCnot(ralphScoreCCemptyQ(ralphScoreCCfirst(stack__1964)));
                    else
                        B1980 = false;
                    if (($T)(B1980)) {
                        readQ__1966 = false;
                        result__1967 = ralphScoreCCfirst(ralphScoreCCfirst(stack__1964));
                    }
                }
            }
            return(result__1967);
        }, false);
    (exports)['read'] = read__1978;
}
