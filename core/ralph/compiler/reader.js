require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1740(name__1741, value__1742) {
            var B1744 = (exports);
            return(B1744[name__1741] = value__1742);
        };
        {
            ($module)['%eval'] = function B1743() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1745 = require('ralph/core');
{
    var B1746 = require('ralph/stream');
    {
        var B1747 = require('ralph/format');
        {
            var B1795 = require('ralph/regexp');
            var B1840 = require('ralph/compiler/syntax-quote');
        }
    }
}
{
    var B1841 = $K('ignore-case?');
    {
        var B1842 = $K('pattern');
        ($module)['*number-patterns*'] = B1745['map'](B1745['curry'](B1745['make'], B1795['<regexp>'], B1841, true, B1842), [
            '^[+-]?0x[0-9a-f]+',
            '^[+-]?0[0-7]+',
            '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
        ]);
    }
}
($module)['*line-pattern*'] = B1745['make'](B1795['<regexp>'], B1842, '(.*)[\n\r]?');
($module)['*whitespace-subpattern*'] = '\t\n\r\x0B\f\xA0\uFEFF ';
($module)['*whitespace-pattern*'] = B1745['make'](B1795['<regexp>'], B1842, B1745['concatenate']('[', ($module)['*whitespace-subpattern*'], ']*'));
($module)['*atom-pattern*'] = B1745['make'](B1795['<regexp>'], B1842, B1745['concatenate']('[^\\[\\]();`,', ($module)['*whitespace-subpattern*'], ']+'));
{
    ($module)['match-stream'] = function B1845(regexp__1846, stream__1847) {
        var B1848 = B1795['match'](regexp__1846, B1746['stream-remaining-contents'](stream__1847));
        if (($T)(B1848)) {
            var result__1849 = B1848;
            {
                B1746['stream-read'](stream__1847, B1745['size'](B1745['first'](result__1849)));
                return(result__1849);
            }
        } else
            return(false);
    };
    B1745['%annotate-function'](($module)['match-stream'], 'match-stream', false);
}
{
    ($module)['read-line'] = function B1851(stream__1852) {
        return(($module)['match-stream'](($module)['*line-pattern*'], stream__1852));
    };
    B1745['%annotate-function'](($module)['read-line'], 'read-line', false);
}
{
    ($module)['read-whitespace'] = function B1854(stream__1855) {
        return(($module)['match-stream'](($module)['*whitespace-pattern*'], stream__1855));
    };
    B1745['%annotate-function'](($module)['read-whitespace'], 'read-whitespace', false);
}
{
    var B1860 = $KEY;
    {
        var B1861 = $REST;
        {
            ($module)['make-atom'] = function B1862(value__1863) {
                var B1864 = value__1863;
                if (($T)(B1745['=='](B1864, '#t')))
                    return(true);
                else if (($T)(B1745['=='](B1864, '#f')))
                    return(false);
                else if (($T)(B1745['=='](B1864, '#key')))
                    return(B1860);
                else if (($T)(B1745['=='](B1864, '#rest')))
                    return(B1861);
                else {
                    var B1865 = B1745['any?'](B1745['rcurry'](B1795['match'], value__1863), ($module)['*number-patterns*']);
                    if (($T)(B1865)) {
                        var number__1866 = B1865;
                        return(B1745['as-number'](B1745['first'](number__1866)));
                    } else if (($T)(B1745['=='](B1745['last'](value__1863), ':')))
                        return(B1745['keyword'](B1745['but-last'](value__1863)));
                    else {
                        var B1867 = B1745['split'](value__1863, '::');
                        {
                            var head__1868 = B1867[0];
                            {
                                var tail__1869 = $SL.call(B1867, 1);
                                if (($T)(B1745['empty?'](tail__1869)))
                                    return(B1745['symbol'](head__1868));
                                else
                                    return(B1745['symbol'](B1745['reduce1'](B1745['concatenate'], tail__1869), head__1868));
                            }
                        }
                    }
                }
            };
            B1745['%annotate-function'](($module)['make-atom'], 'make-atom', false);
        }
    }
}
{
    var B1872 = $K('radix');
    {
        ($module)['read-string'] = function B1873(stream__1874) {
            var result__1875 = B1745['make'](B1746['<string-stream>']);
            {
                var char__1876 = B1746['stream-read-element'](stream__1874);
                {
                    while (($T)(B1745['not'](B1745['=='](char__1876, '"')))) {
                        if (($T)(B1746['stream-at-end?'](stream__1874)))
                            B1745['signal']('missing end of string');
                        {
                            var B1878 = B1746['stream-write'];
                            {
                                var B1879 = false;
                                if (($T)(B1745['=='](char__1876, '\\'))) {
                                    var B1877 = B1746['stream-read-element'](stream__1874);
                                    if (($T)(B1745['=='](B1877, '"')))
                                        B1879 = '"';
                                    else if (($T)(B1745['=='](B1877, '\\')))
                                        B1879 = '\\';
                                    else if (($T)(B1745['=='](B1877, 'b')))
                                        B1879 = '\b';
                                    else if (($T)(B1745['=='](B1877, 'f')))
                                        B1879 = '\f';
                                    else if (($T)(B1745['=='](B1877, 'n')))
                                        B1879 = '\n';
                                    else if (($T)(B1745['=='](B1877, 'r')))
                                        B1879 = '\r';
                                    else if (($T)(B1745['=='](B1877, 't')))
                                        B1879 = '\t';
                                    else if (($T)(B1745['=='](B1877, 'v')))
                                        B1879 = '\x0B';
                                    else if (($T)(B1745['=='](B1877, 'u')))
                                        B1879 = B1745['code-char'](B1745['parse-integer'](B1746['stream-read'](stream__1874, 4), B1872, 16));
                                    else
                                        B1879 = B1745['signal']('bad escape sequence');
                                } else
                                    B1879 = char__1876;
                                {
                                    B1878(result__1875, B1879);
                                    char__1876 = B1746['stream-read-element'](stream__1874);
                                }
                            }
                        }
                    }
                    return(B1746['stream-contents'](result__1875));
                }
            }
        };
        B1745['%annotate-function'](($module)['read-string'], 'read-string', false);
    }
}
{
    var B1880 = $S('quote', 'ralph/core');
    {
        var B1881 = $S('unquote', 'ralph/core');
        {
            var B1882 = $S('unquote-splicing', 'ralph/core');
            ($module)['*wrapper-symbols*'] = [
                B1880,
                B1881,
                B1882
            ];
        }
    }
}
{
    ($module)['$end-of-file'] = B1745['make-object']();
    ($module)['%export']('$end-of-file', ($module)['$end-of-file']);
}
{
    var B1890 = $S('signal');
    {
        var B1891 = $S('syntax-quote', 'ralph/core');
        {
            var B1892 = $S('%array', 'ralph/core');
            {
                {
                    ($module)['read'] = function B1893(stream__1894, env__1895) {
                        var B1896 = $SL.call(arguments, 2);
                        {
                            var B1897 = B1745['%keys'](B1896, {
                                    'eof-error?': true,
                                    'eof-value': ($module)['$end-of-file'],
                                    'if-incomplete': B1890
                                });
                            {
                                var eof_errorQ__1898 = B1897['eof-error?'];
                                {
                                    var eof_value__1899 = B1897['eof-value'];
                                    {
                                        var if_incomplete__1900 = B1897['if-incomplete'];
                                        {
                                            var stack__1901 = [[]];
                                            {
                                                var ends__1902 = [];
                                                {
                                                    var readQ__1903 = true;
                                                    {
                                                        var result__1904 = false;
                                                        {
                                                            var add_to_stackN__1905 = false;
                                                            {
                                                                var add_lastN__1906 = false;
                                                                {
                                                                    add_to_stackN__1905 = function B1907(value__1908) {
                                                                        B1745['push-last'](stack__1901, value__1908);
                                                                        return(add_lastN__1906());
                                                                    };
                                                                    {
                                                                        add_lastN__1906 = function B1909() {
                                                                            var value__1910 = B1745['pop-last'](stack__1901);
                                                                            {
                                                                                var l__1911 = B1745['last'](stack__1901);
                                                                                if (($T)(B1745['=='](l__1911, B1891))) {
                                                                                    B1745['pop-last'](stack__1901);
                                                                                    return(add_to_stackN__1905(B1840['syntax-quote-form'](value__1910, env__1895)));
                                                                                } else if (($T)(B1745['member?'](l__1911, ($module)['*wrapper-symbols*'])))
                                                                                    return(add_to_stackN__1905([
                                                                                        B1745['pop-last'](stack__1901),
                                                                                        value__1910
                                                                                    ]));
                                                                                else
                                                                                    return(B1745['push-last'](l__1911, value__1910));
                                                                            }
                                                                        };
                                                                        {
                                                                            while (($T)(readQ__1903)) {
                                                                                ($module)['read-whitespace'](stream__1894);
                                                                                if (($T)(B1746['stream-at-end?'](stream__1894))) {
                                                                                    readQ__1903 = false;
                                                                                    if (($T)(B1745['empty?'](ends__1902)))
                                                                                        if (($T)(eof_errorQ__1898))
                                                                                            B1745['signal']('EOF before finished');
                                                                                        else
                                                                                            result__1904 = eof_value__1899;
                                                                                    else if (($T)(B1745['=='](if_incomplete__1900, B1890)))
                                                                                        B1745['signal'](B1747['format-to-string']('missing closings: %=', ends__1902));
                                                                                    else
                                                                                        result__1904 = if_incomplete__1900;
                                                                                } else {
                                                                                    var char__1912 = B1746['stream-read-element'](stream__1894);
                                                                                    {
                                                                                        var B1913 = char__1912;
                                                                                        {
                                                                                            if (($T)(B1745['=='](B1913, ';')))
                                                                                                ($module)['read-line'](stream__1894);
                                                                                            else if (($T)(B1745['=='](B1913, '\'')))
                                                                                                B1745['push-last'](stack__1901, B1880);
                                                                                            else if (($T)(B1745['=='](B1913, '`')))
                                                                                                B1745['push-last'](stack__1901, B1891);
                                                                                            else if (($T)(B1745['=='](B1913, ',')))
                                                                                                if (($T)(B1745['=='](B1746['stream-peek'](stream__1894), '@'))) {
                                                                                                    B1746['stream-read-element'](stream__1894);
                                                                                                    B1745['push-last'](stack__1901, B1882);
                                                                                                } else
                                                                                                    B1745['push-last'](stack__1901, B1881);
                                                                                            else if (($T)(B1745['=='](B1913, '('))) {
                                                                                                B1745['push-last'](ends__1902, ')');
                                                                                                B1745['push-last'](stack__1901, []);
                                                                                            } else if (($T)(B1745['=='](B1913, '['))) {
                                                                                                B1745['push-last'](ends__1902, ']');
                                                                                                B1745['push-last'](stack__1901, [B1892]);
                                                                                            } else if (($T)(B1745['=='](B1913, B1745['last'](ends__1902)))) {
                                                                                                B1745['pop-last'](ends__1902);
                                                                                                add_lastN__1906();
                                                                                            } else {
                                                                                                var B1914 = B1745['=='](B1913, ')');
                                                                                                {
                                                                                                    var B1915 = false;
                                                                                                    if (($T)(B1914))
                                                                                                        B1915 = B1914;
                                                                                                    else
                                                                                                        B1915 = B1745['=='](B1913, ']');
                                                                                                    if (($T)(B1915))
                                                                                                        B1745['signal'](B1747['format-to-string']('too many closings: %=', char__1912));
                                                                                                    else if (($T)(B1745['=='](B1913, '"')))
                                                                                                        add_to_stackN__1905(($module)['read-string'](stream__1894));
                                                                                                    else {
                                                                                                        B1746['stream-unread-element'](stream__1894);
                                                                                                        add_to_stackN__1905(($module)['make-atom'](B1745['first'](($module)['match-stream'](($module)['*atom-pattern*'], stream__1894))));
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            {
                                                                                                var B1916 = false;
                                                                                                if (($T)(B1745['=='](B1745['size'](stack__1901), 1)))
                                                                                                    B1916 = B1745['not'](B1745['empty?'](B1745['first'](stack__1901)));
                                                                                                else
                                                                                                    B1916 = false;
                                                                                                if (($T)(B1916)) {
                                                                                                    readQ__1903 = false;
                                                                                                    result__1904 = B1745['first'](B1745['first'](stack__1901));
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            return(result__1904);
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
                B1745['%annotate-function'](($module)['read'], 'read', false);
            }
        }
    }
}
