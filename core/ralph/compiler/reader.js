require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1750(name__1751, value__1752) {
            var B1754 = (exports);
            return(B1754[name__1751] = value__1752);
        };
        {
            ($module)['%eval'] = function B1753() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1755 = require('ralph/core');
{
    var B1756 = require('ralph/stream');
    {
        var B1757 = require('ralph/format');
        {
            var B1805 = require('ralph/regexp');
            var B1850 = require('ralph/compiler/syntax-quote');
        }
    }
}
{
    var B1851 = $K('ignore-case?');
    {
        var B1852 = $K('pattern');
        ($module)['*number-patterns*'] = B1755['map'](B1755['curry'](B1755['make'], B1805['<regexp>'], B1851, true, B1852), [
            '^[+-]?0x[0-9a-f]+',
            '^[+-]?0[0-7]+',
            '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
        ]);
    }
}
($module)['*line-pattern*'] = B1755['make'](B1805['<regexp>'], B1852, '(.*)[\n\r]?');
($module)['*whitespace-subpattern*'] = '\t\n\r\x0B\f\xA0\uFEFF ';
($module)['*whitespace-pattern*'] = B1755['make'](B1805['<regexp>'], B1852, B1755['concatenate']('[', ($module)['*whitespace-subpattern*'], ']*'));
($module)['*atom-pattern*'] = B1755['make'](B1805['<regexp>'], B1852, B1755['concatenate']('[^\\[\\]();`,', ($module)['*whitespace-subpattern*'], ']+'));
{
    ($module)['match-stream'] = function B1855(regexp__1856, stream__1857) {
        var B1858 = B1805['match'](regexp__1856, B1756['stream-remaining-contents'](stream__1857));
        if (($T)(B1858)) {
            var result__1859 = B1858;
            {
                B1756['stream-read'](stream__1857, B1755['size'](B1755['first'](result__1859)));
                return(result__1859);
            }
        } else
            return(false);
    };
    B1755['%annotate-function'](($module)['match-stream'], 'match-stream', false);
}
{
    ($module)['read-line'] = function B1861(stream__1862) {
        return(($module)['match-stream'](($module)['*line-pattern*'], stream__1862));
    };
    B1755['%annotate-function'](($module)['read-line'], 'read-line', false);
}
{
    ($module)['read-whitespace'] = function B1864(stream__1865) {
        return(($module)['match-stream'](($module)['*whitespace-pattern*'], stream__1865));
    };
    B1755['%annotate-function'](($module)['read-whitespace'], 'read-whitespace', false);
}
{
    var B1870 = $KEY;
    {
        var B1871 = $REST;
        {
            ($module)['make-atom'] = function B1872(value__1873) {
                var B1874 = value__1873;
                if (($T)(B1755['=='](B1874, '#t')))
                    return(true);
                else if (($T)(B1755['=='](B1874, '#f')))
                    return(false);
                else if (($T)(B1755['=='](B1874, '#key')))
                    return(B1870);
                else if (($T)(B1755['=='](B1874, '#rest')))
                    return(B1871);
                else {
                    var B1875 = B1755['any?'](B1755['rcurry'](B1805['match'], value__1873), ($module)['*number-patterns*']);
                    if (($T)(B1875)) {
                        var number__1876 = B1875;
                        return(B1755['as-number'](B1755['first'](number__1876)));
                    } else if (($T)(B1755['=='](B1755['last'](value__1873), ':')))
                        return(B1755['keyword'](B1755['but-last'](value__1873)));
                    else {
                        var B1877 = B1755['split'](value__1873, '::');
                        {
                            var head__1878 = B1877[0];
                            {
                                var tail__1879 = $SL.call(B1877, 1);
                                if (($T)(B1755['empty?'](tail__1879)))
                                    return(B1755['symbol'](head__1878));
                                else
                                    return(B1755['symbol'](B1755['reduce1'](B1755['concatenate'], tail__1879), head__1878));
                            }
                        }
                    }
                }
            };
            B1755['%annotate-function'](($module)['make-atom'], 'make-atom', false);
        }
    }
}
{
    var B1882 = $K('radix');
    {
        ($module)['read-string'] = function B1883(stream__1884) {
            var result__1885 = B1755['make'](B1756['<string-stream>']);
            {
                var char__1886 = B1756['stream-read-element'](stream__1884);
                {
                    while (($T)(B1755['not'](B1755['=='](char__1886, '"')))) {
                        if (($T)(B1756['stream-at-end?'](stream__1884)))
                            B1755['signal']('missing end of string');
                        {
                            var B1888 = B1756['stream-write'];
                            {
                                var B1889 = false;
                                if (($T)(B1755['=='](char__1886, '\\'))) {
                                    var B1887 = B1756['stream-read-element'](stream__1884);
                                    if (($T)(B1755['=='](B1887, '"')))
                                        B1889 = '"';
                                    else if (($T)(B1755['=='](B1887, '\\')))
                                        B1889 = '\\';
                                    else if (($T)(B1755['=='](B1887, 'b')))
                                        B1889 = '\b';
                                    else if (($T)(B1755['=='](B1887, 'f')))
                                        B1889 = '\f';
                                    else if (($T)(B1755['=='](B1887, 'n')))
                                        B1889 = '\n';
                                    else if (($T)(B1755['=='](B1887, 'r')))
                                        B1889 = '\r';
                                    else if (($T)(B1755['=='](B1887, 't')))
                                        B1889 = '\t';
                                    else if (($T)(B1755['=='](B1887, 'v')))
                                        B1889 = '\x0B';
                                    else if (($T)(B1755['=='](B1887, 'u')))
                                        B1889 = B1755['code-char'](B1755['parse-integer'](B1756['stream-read'](stream__1884, 4), B1882, 16));
                                    else
                                        B1889 = B1755['signal']('bad escape sequence');
                                } else
                                    B1889 = char__1886;
                                {
                                    B1888(result__1885, B1889);
                                    char__1886 = B1756['stream-read-element'](stream__1884);
                                }
                            }
                        }
                    }
                    return(B1756['stream-contents'](result__1885));
                }
            }
        };
        B1755['%annotate-function'](($module)['read-string'], 'read-string', false);
    }
}
{
    var B1890 = $S('quote', 'ralph/core');
    {
        var B1891 = $S('unquote', 'ralph/core');
        {
            var B1892 = $S('unquote-splicing', 'ralph/core');
            ($module)['*wrapper-symbols*'] = [
                B1890,
                B1891,
                B1892
            ];
        }
    }
}
{
    ($module)['$end-of-file'] = B1755['make-object']();
    ($module)['%export']('$end-of-file', ($module)['$end-of-file']);
}
{
    var B1900 = $S('signal');
    {
        var B1901 = $S('syntax-quote', 'ralph/core');
        {
            var B1902 = $S('%array', 'ralph/core');
            {
                {
                    ($module)['read'] = function B1903(stream__1904, env__1905) {
                        var B1906 = $SL.call(arguments, 2);
                        {
                            var B1907 = B1755['%keys'](B1906, {
                                    'eof-error?': true,
                                    'eof-value': ($module)['$end-of-file'],
                                    'if-incomplete': B1900
                                });
                            {
                                var eof_errorQ__1908 = B1907['eof-error?'];
                                {
                                    var eof_value__1909 = B1907['eof-value'];
                                    {
                                        var if_incomplete__1910 = B1907['if-incomplete'];
                                        {
                                            var stack__1911 = [[]];
                                            {
                                                var ends__1912 = [];
                                                {
                                                    var readQ__1913 = true;
                                                    {
                                                        var result__1914 = false;
                                                        {
                                                            var add_to_stackN__1915 = false;
                                                            {
                                                                var add_lastN__1916 = false;
                                                                {
                                                                    add_to_stackN__1915 = function B1917(value__1918) {
                                                                        B1755['push-last'](stack__1911, value__1918);
                                                                        return(add_lastN__1916());
                                                                    };
                                                                    {
                                                                        add_lastN__1916 = function B1919() {
                                                                            var value__1920 = B1755['pop-last'](stack__1911);
                                                                            {
                                                                                var l__1921 = B1755['last'](stack__1911);
                                                                                if (($T)(B1755['=='](l__1921, B1901))) {
                                                                                    B1755['pop-last'](stack__1911);
                                                                                    return(add_to_stackN__1915(B1850['syntax-quote-form'](value__1920, env__1905)));
                                                                                } else if (($T)(B1755['member?'](l__1921, ($module)['*wrapper-symbols*'])))
                                                                                    return(add_to_stackN__1915([
                                                                                        B1755['pop-last'](stack__1911),
                                                                                        value__1920
                                                                                    ]));
                                                                                else
                                                                                    return(B1755['push-last'](l__1921, value__1920));
                                                                            }
                                                                        };
                                                                        {
                                                                            while (($T)(readQ__1913)) {
                                                                                ($module)['read-whitespace'](stream__1904);
                                                                                if (($T)(B1756['stream-at-end?'](stream__1904))) {
                                                                                    readQ__1913 = false;
                                                                                    if (($T)(B1755['empty?'](ends__1912)))
                                                                                        if (($T)(eof_errorQ__1908))
                                                                                            B1755['signal']('EOF before finished');
                                                                                        else
                                                                                            result__1914 = eof_value__1909;
                                                                                    else if (($T)(B1755['=='](if_incomplete__1910, B1900)))
                                                                                        B1755['signal'](B1757['format-to-string']('missing closings: %=', ends__1912));
                                                                                    else
                                                                                        result__1914 = if_incomplete__1910;
                                                                                } else {
                                                                                    var char__1922 = B1756['stream-read-element'](stream__1904);
                                                                                    {
                                                                                        var B1923 = char__1922;
                                                                                        {
                                                                                            if (($T)(B1755['=='](B1923, ';')))
                                                                                                ($module)['read-line'](stream__1904);
                                                                                            else if (($T)(B1755['=='](B1923, '\'')))
                                                                                                B1755['push-last'](stack__1911, B1890);
                                                                                            else if (($T)(B1755['=='](B1923, '`')))
                                                                                                B1755['push-last'](stack__1911, B1901);
                                                                                            else if (($T)(B1755['=='](B1923, ',')))
                                                                                                if (($T)(B1755['=='](B1756['stream-peek'](stream__1904), '@'))) {
                                                                                                    B1756['stream-read-element'](stream__1904);
                                                                                                    B1755['push-last'](stack__1911, B1892);
                                                                                                } else
                                                                                                    B1755['push-last'](stack__1911, B1891);
                                                                                            else if (($T)(B1755['=='](B1923, '('))) {
                                                                                                B1755['push-last'](ends__1912, ')');
                                                                                                B1755['push-last'](stack__1911, []);
                                                                                            } else if (($T)(B1755['=='](B1923, '['))) {
                                                                                                B1755['push-last'](ends__1912, ']');
                                                                                                B1755['push-last'](stack__1911, [B1902]);
                                                                                            } else if (($T)(B1755['=='](B1923, B1755['last'](ends__1912)))) {
                                                                                                B1755['pop-last'](ends__1912);
                                                                                                add_lastN__1916();
                                                                                            } else {
                                                                                                var B1924 = B1755['=='](B1923, ')');
                                                                                                {
                                                                                                    var B1925 = false;
                                                                                                    if (($T)(B1924))
                                                                                                        B1925 = B1924;
                                                                                                    else
                                                                                                        B1925 = B1755['=='](B1923, ']');
                                                                                                    if (($T)(B1925))
                                                                                                        B1755['signal'](B1757['format-to-string']('too many closings: %=', char__1922));
                                                                                                    else if (($T)(B1755['=='](B1923, '"')))
                                                                                                        add_to_stackN__1915(($module)['read-string'](stream__1904));
                                                                                                    else {
                                                                                                        B1756['stream-unread-element'](stream__1904);
                                                                                                        add_to_stackN__1915(($module)['make-atom'](B1755['first'](($module)['match-stream'](($module)['*atom-pattern*'], stream__1904))));
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            {
                                                                                                var B1926 = false;
                                                                                                if (($T)(B1755['=='](B1755['size'](stack__1911), 1)))
                                                                                                    B1926 = B1755['not'](B1755['empty?'](B1755['first'](stack__1911)));
                                                                                                else
                                                                                                    B1926 = false;
                                                                                                if (($T)(B1926)) {
                                                                                                    readQ__1913 = false;
                                                                                                    result__1914 = B1755['first'](B1755['first'](stack__1911));
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            return(result__1914);
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
                        }
                    };
                    ($module)['%export']('read', ($module)['read']);
                }
                B1755['%annotate-function'](($module)['read'], 'read', false);
            }
        }
    }
}
