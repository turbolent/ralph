{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B1715(name__1716, value__1717) {
            var B1719 = (exports);
            return(B1719[name__1716] = value__1717);
        };
        {
            ($module)['%eval'] = function B1718() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1720 = require('ralph/core');
{
    var B1721 = require('ralph/stream');
    {
        var B1722 = require('ralph/format');
        {
            var B1770 = require('ralph/regexp');
            var B1815 = require('ralph/compiler/syntax-quote');
        }
    }
}
{
    var B1816 = $K('ignore-case?');
    {
        var B1817 = $K('pattern');
        ($module)['*number-patterns*'] = B1720['map'](B1720['curry'](B1720['make'], B1770['<regexp>'], B1816, true, B1817), [
            '^[+-]?0x[0-9a-f]+',
            '^[+-]?0[0-7]+',
            '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
        ]);
    }
}
($module)['*line-pattern*'] = B1720['make'](B1770['<regexp>'], B1817, '(.*)[\n\r]?');
($module)['*whitespace-subpattern*'] = '\t\n\r\x0B\f\xA0\uFEFF ';
($module)['*whitespace-pattern*'] = B1720['make'](B1770['<regexp>'], B1817, B1720['concatenate']('[', ($module)['*whitespace-subpattern*'], ']*'));
($module)['*atom-pattern*'] = B1720['make'](B1770['<regexp>'], B1817, B1720['concatenate']('[^\\[\\]();`,', ($module)['*whitespace-subpattern*'], ']+'));
{
    ($module)['match-stream'] = function B1820(regexp__1821, stream__1822) {
        var B1823 = B1770['match'](regexp__1821, B1721['stream-remaining-contents'](stream__1822));
        if (($T)(B1823)) {
            var result__1824 = B1823;
            {
                B1721['stream-read'](stream__1822, B1720['size'](B1720['first'](result__1824)));
                return(result__1824);
            }
        } else
            return(false);
    };
    B1720['%annotate-function'](($module)['match-stream'], 'match-stream', false);
}
{
    ($module)['read-line'] = function B1826(stream__1827) {
        return(($module)['match-stream'](($module)['*line-pattern*'], stream__1827));
    };
    B1720['%annotate-function'](($module)['read-line'], 'read-line', false);
}
{
    ($module)['read-whitespace'] = function B1829(stream__1830) {
        return(($module)['match-stream'](($module)['*whitespace-pattern*'], stream__1830));
    };
    B1720['%annotate-function'](($module)['read-whitespace'], 'read-whitespace', false);
}
{
    var B1835 = $KEY;
    {
        var B1836 = $REST;
        {
            ($module)['make-atom'] = function B1837(value__1838) {
                var B1839 = value__1838;
                if (($T)(B1720['=='](B1839, '#t')))
                    return(true);
                else if (($T)(B1720['=='](B1839, '#f')))
                    return(false);
                else if (($T)(B1720['=='](B1839, '#key')))
                    return(B1835);
                else if (($T)(B1720['=='](B1839, '#rest')))
                    return(B1836);
                else {
                    var B1840 = B1720['any?'](B1720['rcurry'](B1770['match'], value__1838), ($module)['*number-patterns*']);
                    if (($T)(B1840)) {
                        var number__1841 = B1840;
                        return(B1720['as-number'](B1720['first'](number__1841)));
                    } else if (($T)(B1720['=='](B1720['last'](value__1838), ':')))
                        return(B1720['keyword'](B1720['but-last'](value__1838)));
                    else {
                        var B1842 = B1720['split'](value__1838, '::');
                        {
                            var head__1843 = B1842[0];
                            {
                                var tail__1844 = $SL.call(B1842, 1);
                                if (($T)(B1720['empty?'](tail__1844)))
                                    return(B1720['symbol'](head__1843));
                                else
                                    return(B1720['symbol'](B1720['reduce1'](B1720['concatenate'], tail__1844), head__1843));
                            }
                        }
                    }
                }
            };
            B1720['%annotate-function'](($module)['make-atom'], 'make-atom', false);
        }
    }
}
{
    var B1847 = $K('radix');
    {
        ($module)['read-string'] = function B1848(stream__1849) {
            var result__1850 = B1720['make'](B1721['<string-stream>']);
            {
                var char__1851 = B1721['stream-read-element'](stream__1849);
                {
                    while (($T)(B1720['not'](B1720['=='](char__1851, '"')))) {
                        if (($T)(B1721['stream-at-end?'](stream__1849)))
                            B1720['signal']('missing end of string');
                        {
                            var B1853 = B1721['stream-write'];
                            {
                                var B1854 = false;
                                if (($T)(B1720['=='](char__1851, '\\'))) {
                                    var B1852 = B1721['stream-read-element'](stream__1849);
                                    if (($T)(B1720['=='](B1852, '"')))
                                        B1854 = '"';
                                    else if (($T)(B1720['=='](B1852, '\\')))
                                        B1854 = '\\';
                                    else if (($T)(B1720['=='](B1852, 'b')))
                                        B1854 = '\b';
                                    else if (($T)(B1720['=='](B1852, 'f')))
                                        B1854 = '\f';
                                    else if (($T)(B1720['=='](B1852, 'n')))
                                        B1854 = '\n';
                                    else if (($T)(B1720['=='](B1852, 'r')))
                                        B1854 = '\r';
                                    else if (($T)(B1720['=='](B1852, 't')))
                                        B1854 = '\t';
                                    else if (($T)(B1720['=='](B1852, 'v')))
                                        B1854 = '\x0B';
                                    else if (($T)(B1720['=='](B1852, 'u')))
                                        B1854 = B1720['code-char'](B1720['parse-integer'](B1721['stream-read'](stream__1849, 4), B1847, 16));
                                    else
                                        B1854 = B1720['signal']('bad escape sequence');
                                } else
                                    B1854 = char__1851;
                                {
                                    B1853(result__1850, B1854);
                                    char__1851 = B1721['stream-read-element'](stream__1849);
                                }
                            }
                        }
                    }
                    return(B1721['stream-contents'](result__1850));
                }
            }
        };
        B1720['%annotate-function'](($module)['read-string'], 'read-string', false);
    }
}
{
    var B1855 = $S('quote', 'ralph/core');
    {
        var B1856 = $S('unquote', 'ralph/core');
        {
            var B1857 = $S('unquote-splicing', 'ralph/core');
            ($module)['*wrapper-symbols*'] = [
                B1855,
                B1856,
                B1857
            ];
        }
    }
}
{
    ($module)['$end-of-file'] = B1720['make-object']();
    ($module)['%export']('$end-of-file', ($module)['$end-of-file']);
}
{
    var B1865 = $S('signal');
    {
        var B1866 = $S('syntax-quote', 'ralph/core');
        {
            var B1867 = $S('%array', 'ralph/core');
            {
                {
                    ($module)['read'] = function B1868(stream__1869, env__1870) {
                        var B1871 = $SL.call(arguments, 2);
                        {
                            var B1872 = B1720['%keys'](B1871, {
                                    'eof-error?': true,
                                    'eof-value': ($module)['$end-of-file'],
                                    'if-incomplete': B1865
                                });
                            {
                                var eof_errorQ__1873 = B1872['eof-error?'];
                                {
                                    var eof_value__1874 = B1872['eof-value'];
                                    {
                                        var if_incomplete__1875 = B1872['if-incomplete'];
                                        {
                                            var stack__1876 = [[]];
                                            {
                                                var ends__1877 = [];
                                                {
                                                    var readQ__1878 = true;
                                                    {
                                                        var result__1879 = false;
                                                        {
                                                            var add_to_stackN__1880 = false;
                                                            {
                                                                var add_lastN__1881 = false;
                                                                {
                                                                    add_to_stackN__1880 = function B1882(value__1883) {
                                                                        B1720['push-last'](stack__1876, value__1883);
                                                                        return(add_lastN__1881());
                                                                    };
                                                                    {
                                                                        add_lastN__1881 = function B1884() {
                                                                            var value__1885 = B1720['pop-last'](stack__1876);
                                                                            {
                                                                                var l__1886 = B1720['last'](stack__1876);
                                                                                if (($T)(B1720['=='](l__1886, B1866))) {
                                                                                    B1720['pop-last'](stack__1876);
                                                                                    return(add_to_stackN__1880(B1815['syntax-quote-form'](value__1885, env__1870)));
                                                                                } else if (($T)(B1720['member?'](l__1886, ($module)['*wrapper-symbols*'])))
                                                                                    return(add_to_stackN__1880([
                                                                                        B1720['pop-last'](stack__1876),
                                                                                        value__1885
                                                                                    ]));
                                                                                else
                                                                                    return(B1720['push-last'](l__1886, value__1885));
                                                                            }
                                                                        };
                                                                        {
                                                                            while (($T)(readQ__1878)) {
                                                                                ($module)['read-whitespace'](stream__1869);
                                                                                if (($T)(B1721['stream-at-end?'](stream__1869))) {
                                                                                    readQ__1878 = false;
                                                                                    if (($T)(B1720['empty?'](ends__1877)))
                                                                                        if (($T)(eof_errorQ__1873))
                                                                                            B1720['signal']('EOF before finished');
                                                                                        else
                                                                                            result__1879 = eof_value__1874;
                                                                                    else if (($T)(B1720['=='](if_incomplete__1875, B1865)))
                                                                                        B1720['signal'](B1722['format-to-string']('missing closings: %=', ends__1877));
                                                                                    else
                                                                                        result__1879 = if_incomplete__1875;
                                                                                } else {
                                                                                    var char__1887 = B1721['stream-read-element'](stream__1869);
                                                                                    {
                                                                                        var B1888 = char__1887;
                                                                                        {
                                                                                            if (($T)(B1720['=='](B1888, ';')))
                                                                                                ($module)['read-line'](stream__1869);
                                                                                            else if (($T)(B1720['=='](B1888, '\'')))
                                                                                                B1720['push-last'](stack__1876, B1855);
                                                                                            else if (($T)(B1720['=='](B1888, '`')))
                                                                                                B1720['push-last'](stack__1876, B1866);
                                                                                            else if (($T)(B1720['=='](B1888, ',')))
                                                                                                if (($T)(B1720['=='](B1721['stream-peek'](stream__1869), '@'))) {
                                                                                                    B1721['stream-read-element'](stream__1869);
                                                                                                    B1720['push-last'](stack__1876, B1857);
                                                                                                } else
                                                                                                    B1720['push-last'](stack__1876, B1856);
                                                                                            else if (($T)(B1720['=='](B1888, '('))) {
                                                                                                B1720['push-last'](ends__1877, ')');
                                                                                                B1720['push-last'](stack__1876, []);
                                                                                            } else if (($T)(B1720['=='](B1888, '['))) {
                                                                                                B1720['push-last'](ends__1877, ']');
                                                                                                B1720['push-last'](stack__1876, [B1867]);
                                                                                            } else if (($T)(B1720['=='](B1888, B1720['last'](ends__1877)))) {
                                                                                                B1720['pop-last'](ends__1877);
                                                                                                add_lastN__1881();
                                                                                            } else {
                                                                                                var B1889 = B1720['=='](B1888, ')');
                                                                                                {
                                                                                                    var B1890 = false;
                                                                                                    if (($T)(B1889))
                                                                                                        B1890 = B1889;
                                                                                                    else
                                                                                                        B1890 = B1720['=='](B1888, ']');
                                                                                                    if (($T)(B1890))
                                                                                                        B1720['signal'](B1722['format-to-string']('too many closings: %=', char__1887));
                                                                                                    else if (($T)(B1720['=='](B1888, '"')))
                                                                                                        add_to_stackN__1880(($module)['read-string'](stream__1869));
                                                                                                    else {
                                                                                                        B1721['stream-unread-element'](stream__1869);
                                                                                                        add_to_stackN__1880(($module)['make-atom'](B1720['first'](($module)['match-stream'](($module)['*atom-pattern*'], stream__1869))));
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            {
                                                                                                var B1891 = false;
                                                                                                if (($T)(B1720['=='](B1720['size'](stack__1876), 1)))
                                                                                                    B1891 = B1720['not'](B1720['empty?'](B1720['first'](stack__1876)));
                                                                                                else
                                                                                                    B1891 = false;
                                                                                                if (($T)(B1891)) {
                                                                                                    readQ__1878 = false;
                                                                                                    result__1879 = B1720['first'](B1720['first'](stack__1876));
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            return(result__1879);
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
                B1720['%annotate-function'](($module)['read'], 'read', false);
            }
        }
    }
}
