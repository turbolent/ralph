{
    var $module = Object.create(null);
    var Mexport = function B1870(name__1871, value__1872) {
        var B1873 = (exports);
        return(B1873[name__1871] = value__1872);
    };
}
var B1874 = require('ralph/core');
{
    var B1875 = require('ralph/stream');
    {
        var B1876 = require('ralph/format');
        {
            var B1922 = require('ralph/regexp');
            var B1965 = require('ralph/compiler/syntax-quote');
        }
    }
}
{
    var B1966 = $K('ignore-case?');
    {
        var B1967 = $K('pattern');
        var Tnumber_patternsT = B1874['map'](B1874['curry'](B1874['make'], B1922['<regexp>'], B1966, true, B1967), [
                '^[+-]?0x[0-9a-f]+',
                '^[+-]?0[0-7]+',
                '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
            ]);
    }
}
var Tline_patternT = B1874['make'](B1922['<regexp>'], B1967, '(.*)[\n\r]?');
var Twhitespace_subpatternT = '\t\n\r\x0B\f\xA0\uFEFF ';
var Twhitespace_patternT = B1874['make'](B1922['<regexp>'], B1967, B1874['concatenate']('[', Twhitespace_subpatternT, ']*'));
var Tatom_patternT = B1874['make'](B1922['<regexp>'], B1967, B1874['concatenate']('[^\\[\\]();`,', Twhitespace_subpatternT, ']+'));
{
    var match_stream = function B1970(regexp__1971, stream__1972) {
        var B1973 = B1922['match'](regexp__1971, B1875['stream-remaining-contents'](stream__1972));
        if (($T)(B1973)) {
            var result__1974 = B1973;
            {
                B1875['stream-read'](stream__1972, B1874['size'](B1874['first'](result__1974)));
                return(result__1974);
            }
        } else
            return(false);
    };
    B1874['%annotate-function'](match_stream, 'match-stream', false);
}
{
    var read_line = function B1976(stream__1977) {
        return(match_stream(Tline_patternT, stream__1977));
    };
    B1874['%annotate-function'](read_line, 'read-line', false);
}
{
    var read_whitespace = function B1979(stream__1980) {
        return(match_stream(Twhitespace_patternT, stream__1980));
    };
    B1874['%annotate-function'](read_whitespace, 'read-whitespace', false);
}
{
    var B1985 = $KEY;
    {
        var B1986 = $REST;
        {
            var make_atom = function B1987(value__1988) {
                var B1989 = value__1988;
                if (($T)(B1874['=='](B1989, '#t')))
                    return(true);
                else if (($T)(B1874['=='](B1989, '#f')))
                    return(false);
                else if (($T)(B1874['=='](B1989, '#key')))
                    return(B1985);
                else if (($T)(B1874['=='](B1989, '#rest')))
                    return(B1986);
                else {
                    var B1990 = B1874['any?'](B1874['rcurry'](B1922['match'], value__1988), Tnumber_patternsT);
                    if (($T)(B1990)) {
                        var number__1991 = B1990;
                        return(B1874['as-number'](B1874['first'](number__1991)));
                    } else if (($T)(B1874['=='](B1874['last'](value__1988), ':')))
                        return(B1874['keyword'](B1874['but-last'](value__1988)));
                    else {
                        var B1992 = B1874['split'](value__1988, '::');
                        {
                            var head__1993 = B1992[0];
                            {
                                var tail__1994 = $SL.call(B1992, 1);
                                if (($T)(B1874['empty?'](tail__1994)))
                                    return(B1874['symbol'](head__1993));
                                else
                                    return(B1874['symbol'](B1874['reduce1'](B1874['concatenate'], tail__1994), head__1993));
                            }
                        }
                    }
                }
            };
            B1874['%annotate-function'](make_atom, 'make-atom', false);
        }
    }
}
{
    var B1997 = $K('radix');
    {
        var read_string = function B1998(stream__1999) {
            var result__2000 = B1874['make'](B1875['<string-stream>']);
            {
                var char__2001 = B1875['stream-read-element'](stream__1999);
                {
                    while (($T)(B1874['not'](B1874['=='](char__2001, '"')))) {
                        if (($T)(B1875['stream-at-end?'](stream__1999)))
                            B1874['signal']('missing end of string');
                        {
                            var B2003 = B1875['stream-write'];
                            {
                                var B2004 = false;
                                if (($T)(B1874['=='](char__2001, '\\'))) {
                                    var B2002 = B1875['stream-read-element'](stream__1999);
                                    if (($T)(B1874['=='](B2002, '"')))
                                        B2004 = '"';
                                    else if (($T)(B1874['=='](B2002, '\\')))
                                        B2004 = '\\';
                                    else if (($T)(B1874['=='](B2002, 'b')))
                                        B2004 = '\b';
                                    else if (($T)(B1874['=='](B2002, 'f')))
                                        B2004 = '\f';
                                    else if (($T)(B1874['=='](B2002, 'n')))
                                        B2004 = '\n';
                                    else if (($T)(B1874['=='](B2002, 'r')))
                                        B2004 = '\r';
                                    else if (($T)(B1874['=='](B2002, 't')))
                                        B2004 = '\t';
                                    else if (($T)(B1874['=='](B2002, 'v')))
                                        B2004 = '\x0B';
                                    else if (($T)(B1874['=='](B2002, 'u')))
                                        B2004 = B1874['code-char'](B1874['parse-integer'](B1875['stream-read'](stream__1999, 4), B1997, 16));
                                    else
                                        B2004 = B1874['signal']('bad escape sequence');
                                } else
                                    B2004 = char__2001;
                                {
                                    B2003(result__2000, B2004);
                                    char__2001 = B1875['stream-read-element'](stream__1999);
                                }
                            }
                        }
                    }
                    return(B1875['stream-contents'](result__2000));
                }
            }
        };
        B1874['%annotate-function'](read_string, 'read-string', false);
    }
}
{
    var B2005 = $S('quote', 'ralph/core');
    {
        var B2006 = $S('unquote', 'ralph/core');
        {
            var B2007 = $S('unquote-splicing', 'ralph/core');
            var Twrapper_symbolsT = [
                    B2005,
                    B2006,
                    B2007
                ];
        }
    }
}
{
    var Bend_of_file = B1874['make-object']();
    Mexport('$end-of-file', Bend_of_file);
}
{
    var B2015 = $S('syntax-quote', 'ralph/core');
    {
        var B2016 = $S('%array', 'ralph/core');
        {
            {
                var read = function B2017(stream__2018, env__2019) {
                    var B2020 = $SL.call(arguments, 2);
                    {
                        var B2021 = B1874['%keys'](B2020, {
                                'eof-error?': true,
                                'eof-value': Bend_of_file
                            });
                        {
                            var eof_errorQ__2022 = B2021['eof-error?'];
                            {
                                var eof_value__2023 = B2021['eof-value'];
                                {
                                    var stack__2024 = [[]];
                                    {
                                        var ends__2025 = [];
                                        {
                                            var readQ__2026 = true;
                                            {
                                                var result__2027 = false;
                                                {
                                                    var add_to_stackN__2028 = false;
                                                    {
                                                        var add_lastN__2029 = false;
                                                        {
                                                            add_to_stackN__2028 = function B2030(value__2031) {
                                                                B1874['push-last'](stack__2024, value__2031);
                                                                return(add_lastN__2029());
                                                            };
                                                            {
                                                                add_lastN__2029 = function B2032() {
                                                                    var value__2033 = B1874['pop-last'](stack__2024);
                                                                    {
                                                                        var l__2034 = B1874['last'](stack__2024);
                                                                        if (($T)(B1874['=='](l__2034, B2015))) {
                                                                            B1874['pop-last'](stack__2024);
                                                                            return(add_to_stackN__2028(B1965['syntax-quote-form'](value__2033, env__2019)));
                                                                        } else if (($T)(B1874['member?'](l__2034, Twrapper_symbolsT)))
                                                                            return(add_to_stackN__2028([
                                                                                B1874['pop-last'](stack__2024),
                                                                                value__2033
                                                                            ]));
                                                                        else
                                                                            return(B1874['push-last'](l__2034, value__2033));
                                                                    }
                                                                };
                                                                {
                                                                    while (($T)(readQ__2026)) {
                                                                        read_whitespace(stream__2018);
                                                                        if (($T)(B1875['stream-at-end?'](stream__2018))) {
                                                                            readQ__2026 = false;
                                                                            if (($T)(B1874['empty?'](ends__2025)))
                                                                                if (($T)(eof_errorQ__2022))
                                                                                    B1874['signal']('EOF before finished');
                                                                                else
                                                                                    result__2027 = eof_value__2023;
                                                                            else
                                                                                B1874['signal'](B1876['format-to-string']('missing closings: %=', ends__2025));
                                                                        } else {
                                                                            var char__2035 = B1875['stream-read-element'](stream__2018);
                                                                            {
                                                                                var B2036 = char__2035;
                                                                                {
                                                                                    if (($T)(B1874['=='](B2036, ';')))
                                                                                        read_line(stream__2018);
                                                                                    else if (($T)(B1874['=='](B2036, '\'')))
                                                                                        B1874['push-last'](stack__2024, B2005);
                                                                                    else if (($T)(B1874['=='](B2036, '`')))
                                                                                        B1874['push-last'](stack__2024, B2015);
                                                                                    else if (($T)(B1874['=='](B2036, ',')))
                                                                                        if (($T)(B1874['=='](B1875['stream-peek'](stream__2018), '@'))) {
                                                                                            B1875['stream-read-element'](stream__2018);
                                                                                            B1874['push-last'](stack__2024, B2007);
                                                                                        } else
                                                                                            B1874['push-last'](stack__2024, B2006);
                                                                                    else if (($T)(B1874['=='](B2036, '('))) {
                                                                                        B1874['push-last'](ends__2025, ')');
                                                                                        B1874['push-last'](stack__2024, []);
                                                                                    } else if (($T)(B1874['=='](B2036, '['))) {
                                                                                        B1874['push-last'](ends__2025, ']');
                                                                                        B1874['push-last'](stack__2024, [B2016]);
                                                                                    } else if (($T)(B1874['=='](B2036, B1874['last'](ends__2025)))) {
                                                                                        B1874['pop-last'](ends__2025);
                                                                                        add_lastN__2029();
                                                                                    } else {
                                                                                        var B2037 = B1874['=='](B2036, ')');
                                                                                        {
                                                                                            var B2038 = false;
                                                                                            if (($T)(B2037))
                                                                                                B2038 = B2037;
                                                                                            else
                                                                                                B2038 = B1874['=='](B2036, ']');
                                                                                            if (($T)(B2038))
                                                                                                B1874['signal'](B1876['format-to-string']('too many closings: %=', char__2035));
                                                                                            else if (($T)(B1874['=='](B2036, '"')))
                                                                                                add_to_stackN__2028(read_string(stream__2018));
                                                                                            else {
                                                                                                B1875['stream-unread-element'](stream__2018);
                                                                                                add_to_stackN__2028(make_atom(B1874['first'](match_stream(Tatom_patternT, stream__2018))));
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    {
                                                                                        var B2039 = false;
                                                                                        if (($T)(B1874['=='](B1874['size'](stack__2024), 1)))
                                                                                            B2039 = B1874['not'](B1874['empty?'](B1874['first'](stack__2024)));
                                                                                        else
                                                                                            B2039 = false;
                                                                                        if (($T)(B2039)) {
                                                                                            readQ__2026 = false;
                                                                                            result__2027 = B1874['first'](B1874['first'](stack__2024));
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    return(result__2027);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                Mexport('read', read);
            }
            B1874['%annotate-function'](read, 'read', false);
        }
    }
}
