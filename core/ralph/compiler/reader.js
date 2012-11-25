var B1778 = require('ralph/core');
var B1882 = require('ralph/stream'), B1883 = require('ralph/format'), B1884 = require('ralph/regexp'), B1885 = require('ralph/compiler/syntax-quote');
var ralphScoreCCMvar = B1778['%var'], ralphScoreCCmap = B1778['map'], ralphScoreCCcurry = B1778['curry'], ralphScoreCCmake = B1778['make'], ralphSregexpCCLregexpG = B1884['<regexp>'], B1888 = $K('ignore-case?'), B1889 = $K('pattern'), Tnumber_patternsT__1890 = ralphScoreCCmap(ralphScoreCCcurry(ralphScoreCCmake, ralphSregexpCCLregexpG, B1888, true, B1889), [
        '^[+-]?0x[0-9a-f]+',
        '^[+-]?0[0-7]+',
        '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
    ]);
var Tline_patternT__1891 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1889, '(.*)[\n\r]?');
var Twhitespace_subpatternT__1892 = '\t\n\r\v\f\xa0\ufeff ';
var ralphScoreCCconcatenate = B1778['concatenate'], Twhitespace_patternT__1893 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1889, ralphScoreCCconcatenate('[', Twhitespace_subpatternT__1892, ']*'));
var Tatom_patternT__1894 = ralphScoreCCmake(ralphSregexpCCLregexpG, B1889, ralphScoreCCconcatenate('[^\\[\\]();`,', Twhitespace_subpatternT__1892, ']+'));
var ralphScoreCCMmake_function = B1778['%make-function'], ralphSregexpCCmatch = B1884['match'], ralphSstreamCCstream_remaining_contents = B1882['stream-remaining-contents'], ralphSstreamCCstream_read = B1882['stream-read'], ralphScoreCCsize = B1778['size'], ralphScoreCCfirst = B1778['first'], match_stream__1902 = ralphScoreCCMmake_function('match_stream', function B1897(regexp__1898, stream__1899) {
        var B1900 = ralphSregexpCCmatch(regexp__1898, ralphSstreamCCstream_remaining_contents(stream__1899));
        if (($T)(B1900)) {
            var result__1901 = B1900;
            ralphSstreamCCstream_read(stream__1899, ralphScoreCCsize(ralphScoreCCfirst(result__1901)));
            return(result__1901);
        } else
            return(false);
    }, false);
var read_line__1906 = ralphScoreCCMmake_function('read_line', function B1904(stream__1905) {
        return(match_stream__1902(Tline_patternT__1891, stream__1905));
    }, false);
var read_whitespace__1910 = ralphScoreCCMmake_function('read_whitespace', function B1908(stream__1909) {
        return(match_stream__1902(Twhitespace_patternT__1893, stream__1909));
    }, false);
var ralphScoreCCEE = B1778['=='], ralphScoreCCanyQ = B1778['any?'], ralphScoreCCrcurry = B1778['rcurry'], ralphScoreCCas_number = B1778['as-number'], ralphScoreCClast = B1778['last'], ralphScoreCCkeyword = B1778['keyword'], ralphScoreCCbut_last = B1778['but-last'], ralphScoreCCsplit = B1778['split'], ralphScoreCCemptyQ = B1778['empty?'], ralphScoreCCsymbol = B1778['symbol'], ralphScoreCCreduce1 = B1778['reduce1'], B1917 = $KEY, B1918 = $REST, make_atom__1927 = ralphScoreCCMmake_function('make_atom', function B1919(value__1920) {
        var B1921 = value__1920;
        if (($T)(ralphScoreCCEE(B1921, '#t')))
            return(true);
        else if (($T)(ralphScoreCCEE(B1921, '#f')))
            return(false);
        else if (($T)(ralphScoreCCEE(B1921, '#key')))
            return(B1917);
        else if (($T)(ralphScoreCCEE(B1921, '#rest')))
            return(B1918);
        else {
            var B1922 = ralphScoreCCanyQ(ralphScoreCCrcurry(ralphSregexpCCmatch, value__1920), Tnumber_patternsT__1890);
            if (($T)(B1922)) {
                var number__1923 = B1922;
                return(ralphScoreCCas_number(ralphScoreCCfirst(number__1923)));
            } else if (($T)(ralphScoreCCEE(ralphScoreCClast(value__1920), ':')))
                return(ralphScoreCCkeyword(ralphScoreCCbut_last(value__1920)));
            else {
                var B1924 = ralphScoreCCsplit(value__1920, '::'), head__1925 = B1924[0], tail__1926 = $SL.call(B1924, 1);
                if (($T)(ralphScoreCCemptyQ(tail__1926)))
                    return(ralphScoreCCsymbol(head__1925));
                else
                    return(ralphScoreCCsymbol(ralphScoreCCreduce1(ralphScoreCCconcatenate, tail__1926), head__1925));
            }
        }
    }, false);
var ralphSstreamCCLstring_streamG = B1882['<string-stream>'], ralphSstreamCCstream_read_element = B1882['stream-read-element'], ralphScoreCCnot = B1778['not'], ralphSstreamCCstream_at_endQ = B1882['stream-at-end?'], ralphScoreCCsignal = B1778['signal'], ralphSstreamCCstream_write = B1882['stream-write'], ralphScoreCCcode_char = B1778['code-char'], ralphScoreCCparse_integer = B1778['parse-integer'], ralphSstreamCCstream_contents = B1882['stream-contents'], B1931 = $K('radix'), read_string__1937 = ralphScoreCCMmake_function('read_string', function B1932(stream__1933) {
        var result__1934 = ralphScoreCCmake(ralphSstreamCCLstring_streamG), char__1935 = ralphSstreamCCstream_read_element(stream__1933);
        while (($T)(ralphScoreCCnot(ralphScoreCCEE(char__1935, '"')))) {
            if (($T)(ralphSstreamCCstream_at_endQ(stream__1933)))
                ralphScoreCCsignal('missing end of string');
            var B1938 = false;
            if (($T)(ralphScoreCCEE(char__1935, '\\'))) {
                var B1936 = ralphSstreamCCstream_read_element(stream__1933);
                if (($T)(ralphScoreCCEE(B1936, '"')))
                    B1938 = '"';
                else if (($T)(ralphScoreCCEE(B1936, '\\')))
                    B1938 = '\\';
                else if (($T)(ralphScoreCCEE(B1936, 'b')))
                    B1938 = '\b';
                else if (($T)(ralphScoreCCEE(B1936, 'f')))
                    B1938 = '\f';
                else if (($T)(ralphScoreCCEE(B1936, 'n')))
                    B1938 = '\n';
                else if (($T)(ralphScoreCCEE(B1936, 'r')))
                    B1938 = '\r';
                else if (($T)(ralphScoreCCEE(B1936, 't')))
                    B1938 = '\t';
                else if (($T)(ralphScoreCCEE(B1936, 'v')))
                    B1938 = '\v';
                else if (($T)(ralphScoreCCEE(B1936, 'u')))
                    B1938 = ralphScoreCCcode_char(ralphScoreCCparse_integer(ralphSstreamCCstream_read(stream__1933, 4), B1931, 16));
                else
                    B1938 = ralphScoreCCsignal('bad escape sequence');
            } else
                B1938 = char__1935;
            ralphSstreamCCstream_write(result__1934, B1938);
            char__1935 = ralphSstreamCCstream_read_element(stream__1933);
        }
        return(ralphSstreamCCstream_contents(result__1934));
    }, false);
var B1942 = $S('quote', 'ralph/core'), B1943 = $S('unquote', 'ralph/core'), B1944 = $S('unquote-splicing', 'ralph/core'), Twrapper_symbolsT__1945 = [
        B1942,
        B1943,
        B1944
    ];
{
    var ralphScoreCCmake_object = B1778['make-object'], Bend_of_file__1946 = ralphScoreCCmake_object();
    (exports)['$end-of-file'] = Bend_of_file__1946;
}
{
    var ralphScoreCCMkeys = B1778['%keys'], ralphScoreCCpush_last = B1778['push-last'], ralphScoreCCpop_last = B1778['pop-last'], ralphScompilerSsyntax_quoteCCsyntax_quote_form = B1885['syntax-quote-form'], ralphScoreCCmemberQ = B1778['member?'], ralphSformatCCformat_to_string = B1883['format-to-string'], ralphSstreamCCstream_peek = B1882['stream-peek'], ralphSstreamCCstream_unread_element = B1882['stream-unread-element'], B1956 = $S('syntax-quote', 'ralph/core'), B1957 = $S('%array'), read__1979 = ralphScoreCCMmake_function('read', function B1958(stream__1959, env__1960) {
            var B1961 = $SL.call(arguments, 2), B1962 = ralphScoreCCMkeys(B1961, {
                    'eof-error?': true,
                    'eof-value': Bend_of_file__1946
                }), eof_errorQ__1963 = B1962['eof-error?'], eof_value__1964 = B1962['eof-value'], stack__1965 = [[]], ends__1966 = [], readQ__1967 = true, result__1968 = false, add_to_stackN__1969 = false, add_lastN__1970 = false;
            add_to_stackN__1969 = function B1971(value__1972) {
                ralphScoreCCpush_last(stack__1965, value__1972);
                return(add_lastN__1970());
            };
            add_lastN__1970 = function B1973() {
                var value__1974 = ralphScoreCCpop_last(stack__1965), l__1975 = ralphScoreCClast(stack__1965);
                if (($T)(ralphScoreCCEE(l__1975, B1956))) {
                    ralphScoreCCpop_last(stack__1965);
                    return(add_to_stackN__1969(ralphScompilerSsyntax_quoteCCsyntax_quote_form(value__1974, env__1960)));
                } else if (($T)(ralphScoreCCmemberQ(l__1975, Twrapper_symbolsT__1945)))
                    return(add_to_stackN__1969([
                        ralphScoreCCpop_last(stack__1965),
                        value__1974
                    ]));
                else
                    return(ralphScoreCCpush_last(l__1975, value__1974));
            };
            while (($T)(readQ__1967)) {
                read_whitespace__1910(stream__1959);
                if (($T)(ralphSstreamCCstream_at_endQ(stream__1959))) {
                    readQ__1967 = false;
                    if (($T)(ralphScoreCCemptyQ(ends__1966)))
                        if (($T)(eof_errorQ__1963))
                            ralphScoreCCsignal('EOF before finished');
                        else
                            result__1968 = eof_value__1964;
                    else
                        ralphScoreCCsignal(ralphSformatCCformat_to_string('missing closings: %=', ends__1966));
                } else {
                    var char__1976 = ralphSstreamCCstream_read_element(stream__1959), B1977 = char__1976;
                    if (($T)(ralphScoreCCEE(B1977, ';')))
                        read_line__1906(stream__1959);
                    else if (($T)(ralphScoreCCEE(B1977, '\'')))
                        ralphScoreCCpush_last(stack__1965, B1942);
                    else if (($T)(ralphScoreCCEE(B1977, '`')))
                        ralphScoreCCpush_last(stack__1965, B1956);
                    else if (($T)(ralphScoreCCEE(B1977, ',')))
                        if (($T)(ralphScoreCCEE(ralphSstreamCCstream_peek(stream__1959), '@'))) {
                            ralphSstreamCCstream_read_element(stream__1959);
                            ralphScoreCCpush_last(stack__1965, B1944);
                        } else
                            ralphScoreCCpush_last(stack__1965, B1943);
                    else if (($T)(ralphScoreCCEE(B1977, '('))) {
                        ralphScoreCCpush_last(ends__1966, ')');
                        ralphScoreCCpush_last(stack__1965, []);
                    } else if (($T)(ralphScoreCCEE(B1977, '['))) {
                        ralphScoreCCpush_last(ends__1966, ']');
                        ralphScoreCCpush_last(stack__1965, [B1957]);
                    } else if (($T)(ralphScoreCCEE(B1977, ralphScoreCClast(ends__1966)))) {
                        ralphScoreCCpop_last(ends__1966);
                        add_lastN__1970();
                    } else {
                        var B1978 = ralphScoreCCEE(B1977, ')'), B1980 = false;
                        if (($T)(B1978))
                            B1980 = B1978;
                        else
                            B1980 = ralphScoreCCEE(B1977, ']');
                        if (($T)(B1980))
                            ralphScoreCCsignal(ralphSformatCCformat_to_string('too many closings: %=', char__1976));
                        else if (($T)(ralphScoreCCEE(B1977, '"')))
                            add_to_stackN__1969(read_string__1937(stream__1959));
                        else {
                            ralphSstreamCCstream_unread_element(stream__1959);
                            add_to_stackN__1969(make_atom__1927(ralphScoreCCfirst(match_stream__1902(Tatom_patternT__1894, stream__1959))));
                        }
                    }
                    var B1981 = false;
                    if (($T)(ralphScoreCCEE(ralphScoreCCsize(stack__1965), 1)))
                        B1981 = ralphScoreCCnot(ralphScoreCCemptyQ(ralphScoreCCfirst(stack__1965)));
                    else
                        B1981 = false;
                    if (($T)(B1981)) {
                        readQ__1967 = false;
                        result__1968 = ralphScoreCCfirst(ralphScoreCCfirst(stack__1965));
                    }
                }
            }
            return(result__1968);
        }, false);
    (exports)['read'] = read__1979;
}
