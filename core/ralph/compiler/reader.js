{
    var $module = Object.create(null);
    ($module)['%export'] = function B1700(name__1701, value__1702) {
        var B1703 = (exports);
        return(B1703[name__1701] = value__1702);
    };
}
var B1704 = require('ralph/core');
{
    var B1705 = require('ralph/stream');
    {
        var B1706 = require('ralph/format');
        {
            var B1754 = require('ralph/regexp');
            var B1799 = require('ralph/compiler/syntax-quote');
        }
    }
}
{
    var B1800 = $K('ignore-case?');
    {
        var B1801 = $K('pattern');
        ($module)['*number-patterns*'] = B1704['map'](B1704['curry'](B1704['make'], B1754['<regexp>'], B1800, true, B1801), [
            '^[+-]?0x[0-9a-f]+',
            '^[+-]?0[0-7]+',
            '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
        ]);
    }
}
($module)['*line-pattern*'] = B1704['make'](B1754['<regexp>'], B1801, '(.*)[\n\r]?');
($module)['*whitespace-subpattern*'] = '\t\n\r\x0B\f\xA0\uFEFF ';
($module)['*whitespace-pattern*'] = B1704['make'](B1754['<regexp>'], B1801, B1704['concatenate']('[', ($module)['*whitespace-subpattern*'], ']*'));
($module)['*atom-pattern*'] = B1704['make'](B1754['<regexp>'], B1801, B1704['concatenate']('[^\\[\\]();`,', ($module)['*whitespace-subpattern*'], ']+'));
{
    ($module)['match-stream'] = function B1804(regexp__1805, stream__1806) {
        var B1807 = B1754['match'](regexp__1805, B1705['stream-remaining-contents'](stream__1806));
        if (($T)(B1807)) {
            var result__1808 = B1807;
            {
                B1705['stream-read'](stream__1806, B1704['size'](B1704['first'](result__1808)));
                return(result__1808);
            }
        } else
            return(false);
    };
    B1704['%annotate-function'](($module)['match-stream'], 'match-stream', false);
}
{
    ($module)['read-line'] = function B1810(stream__1811) {
        return(($module)['match-stream'](($module)['*line-pattern*'], stream__1811));
    };
    B1704['%annotate-function'](($module)['read-line'], 'read-line', false);
}
{
    ($module)['read-whitespace'] = function B1813(stream__1814) {
        return(($module)['match-stream'](($module)['*whitespace-pattern*'], stream__1814));
    };
    B1704['%annotate-function'](($module)['read-whitespace'], 'read-whitespace', false);
}
{
    var B1819 = $KEY;
    {
        var B1820 = $REST;
        {
            ($module)['make-atom'] = function B1821(value__1822) {
                var B1823 = value__1822;
                if (($T)(B1704['=='](B1823, '#t')))
                    return(true);
                else if (($T)(B1704['=='](B1823, '#f')))
                    return(false);
                else if (($T)(B1704['=='](B1823, '#key')))
                    return(B1819);
                else if (($T)(B1704['=='](B1823, '#rest')))
                    return(B1820);
                else {
                    var B1824 = B1704['any?'](B1704['rcurry'](B1754['match'], value__1822), ($module)['*number-patterns*']);
                    if (($T)(B1824)) {
                        var number__1825 = B1824;
                        return(B1704['as-number'](B1704['first'](number__1825)));
                    } else if (($T)(B1704['=='](B1704['last'](value__1822), ':')))
                        return(B1704['keyword'](B1704['but-last'](value__1822)));
                    else {
                        var B1826 = B1704['split'](value__1822, '::');
                        {
                            var head__1827 = B1826[0];
                            {
                                var tail__1828 = $SL.call(B1826, 1);
                                if (($T)(B1704['empty?'](tail__1828)))
                                    return(B1704['symbol'](head__1827));
                                else
                                    return(B1704['symbol'](B1704['reduce1'](B1704['concatenate'], tail__1828), head__1827));
                            }
                        }
                    }
                }
            };
            B1704['%annotate-function'](($module)['make-atom'], 'make-atom', false);
        }
    }
}
{
    var B1831 = $K('radix');
    {
        ($module)['read-string'] = function B1832(stream__1833) {
            var result__1834 = B1704['make'](B1705['<string-stream>']);
            {
                var char__1835 = B1705['stream-read-element'](stream__1833);
                {
                    while (($T)(B1704['not'](B1704['=='](char__1835, '"')))) {
                        if (($T)(B1705['stream-at-end?'](stream__1833)))
                            B1704['signal']('missing end of string');
                        {
                            var B1837 = B1705['stream-write'];
                            {
                                var B1838 = false;
                                if (($T)(B1704['=='](char__1835, '\\'))) {
                                    var B1836 = B1705['stream-read-element'](stream__1833);
                                    if (($T)(B1704['=='](B1836, '"')))
                                        B1838 = '"';
                                    else if (($T)(B1704['=='](B1836, '\\')))
                                        B1838 = '\\';
                                    else if (($T)(B1704['=='](B1836, 'b')))
                                        B1838 = '\b';
                                    else if (($T)(B1704['=='](B1836, 'f')))
                                        B1838 = '\f';
                                    else if (($T)(B1704['=='](B1836, 'n')))
                                        B1838 = '\n';
                                    else if (($T)(B1704['=='](B1836, 'r')))
                                        B1838 = '\r';
                                    else if (($T)(B1704['=='](B1836, 't')))
                                        B1838 = '\t';
                                    else if (($T)(B1704['=='](B1836, 'v')))
                                        B1838 = '\x0B';
                                    else if (($T)(B1704['=='](B1836, 'u')))
                                        B1838 = B1704['code-char'](B1704['parse-integer'](B1705['stream-read'](stream__1833, 4), B1831, 16));
                                    else
                                        B1838 = B1704['signal']('bad escape sequence');
                                } else
                                    B1838 = char__1835;
                                {
                                    B1837(result__1834, B1838);
                                    char__1835 = B1705['stream-read-element'](stream__1833);
                                }
                            }
                        }
                    }
                    return(B1705['stream-contents'](result__1834));
                }
            }
        };
        B1704['%annotate-function'](($module)['read-string'], 'read-string', false);
    }
}
{
    var B1839 = $S('quote', 'ralph/core');
    {
        var B1840 = $S('unquote', 'ralph/core');
        {
            var B1841 = $S('unquote-splicing', 'ralph/core');
            ($module)['*wrapper-symbols*'] = [
                B1839,
                B1840,
                B1841
            ];
        }
    }
}
{
    ($module)['$end-of-file'] = B1704['make-object']();
    ($module)['%export']('$end-of-file', ($module)['$end-of-file']);
}
{
    var B1849 = $S('signal');
    {
        var B1850 = $S('syntax-quote', 'ralph/core');
        {
            var B1851 = $S('%array', 'ralph/core');
            {
                {
                    ($module)['read'] = function B1852(stream__1853, env__1854) {
                        var B1855 = $SL.call(arguments, 2);
                        {
                            var B1856 = B1704['%keys'](B1855, {
                                    'eof-error?': true,
                                    'eof-value': ($module)['$end-of-file'],
                                    'if-incomplete': B1849
                                });
                            {
                                var eof_errorQ__1857 = B1856['eof-error?'];
                                {
                                    var eof_value__1858 = B1856['eof-value'];
                                    {
                                        var if_incomplete__1859 = B1856['if-incomplete'];
                                        {
                                            var stack__1860 = [[]];
                                            {
                                                var ends__1861 = [];
                                                {
                                                    var readQ__1862 = true;
                                                    {
                                                        var result__1863 = false;
                                                        {
                                                            var add_to_stackN__1864 = false;
                                                            {
                                                                var add_lastN__1865 = false;
                                                                {
                                                                    add_to_stackN__1864 = function B1866(value__1867) {
                                                                        B1704['push-last'](stack__1860, value__1867);
                                                                        return(add_lastN__1865());
                                                                    };
                                                                    {
                                                                        add_lastN__1865 = function B1868() {
                                                                            var value__1869 = B1704['pop-last'](stack__1860);
                                                                            {
                                                                                var l__1870 = B1704['last'](stack__1860);
                                                                                if (($T)(B1704['=='](l__1870, B1850))) {
                                                                                    B1704['pop-last'](stack__1860);
                                                                                    return(add_to_stackN__1864(B1799['syntax-quote-form'](value__1869, env__1854)));
                                                                                } else if (($T)(B1704['member?'](l__1870, ($module)['*wrapper-symbols*'])))
                                                                                    return(add_to_stackN__1864([
                                                                                        B1704['pop-last'](stack__1860),
                                                                                        value__1869
                                                                                    ]));
                                                                                else
                                                                                    return(B1704['push-last'](l__1870, value__1869));
                                                                            }
                                                                        };
                                                                        {
                                                                            while (($T)(readQ__1862)) {
                                                                                ($module)['read-whitespace'](stream__1853);
                                                                                if (($T)(B1705['stream-at-end?'](stream__1853))) {
                                                                                    readQ__1862 = false;
                                                                                    if (($T)(B1704['empty?'](ends__1861)))
                                                                                        if (($T)(eof_errorQ__1857))
                                                                                            B1704['signal']('EOF before finished');
                                                                                        else
                                                                                            result__1863 = eof_value__1858;
                                                                                    else if (($T)(B1704['=='](if_incomplete__1859, B1849)))
                                                                                        B1704['signal'](B1706['format-to-string']('missing closings: %=', ends__1861));
                                                                                    else
                                                                                        result__1863 = if_incomplete__1859;
                                                                                } else {
                                                                                    var char__1871 = B1705['stream-read-element'](stream__1853);
                                                                                    {
                                                                                        var B1872 = char__1871;
                                                                                        {
                                                                                            if (($T)(B1704['=='](B1872, ';')))
                                                                                                ($module)['read-line'](stream__1853);
                                                                                            else if (($T)(B1704['=='](B1872, '\'')))
                                                                                                B1704['push-last'](stack__1860, B1839);
                                                                                            else if (($T)(B1704['=='](B1872, '`')))
                                                                                                B1704['push-last'](stack__1860, B1850);
                                                                                            else if (($T)(B1704['=='](B1872, ',')))
                                                                                                if (($T)(B1704['=='](B1705['stream-peek'](stream__1853), '@'))) {
                                                                                                    B1705['stream-read-element'](stream__1853);
                                                                                                    B1704['push-last'](stack__1860, B1841);
                                                                                                } else
                                                                                                    B1704['push-last'](stack__1860, B1840);
                                                                                            else if (($T)(B1704['=='](B1872, '('))) {
                                                                                                B1704['push-last'](ends__1861, ')');
                                                                                                B1704['push-last'](stack__1860, []);
                                                                                            } else if (($T)(B1704['=='](B1872, '['))) {
                                                                                                B1704['push-last'](ends__1861, ']');
                                                                                                B1704['push-last'](stack__1860, [B1851]);
                                                                                            } else if (($T)(B1704['=='](B1872, B1704['last'](ends__1861)))) {
                                                                                                B1704['pop-last'](ends__1861);
                                                                                                add_lastN__1865();
                                                                                            } else {
                                                                                                var B1873 = B1704['=='](B1872, ')');
                                                                                                {
                                                                                                    var B1874 = false;
                                                                                                    if (($T)(B1873))
                                                                                                        B1874 = B1873;
                                                                                                    else
                                                                                                        B1874 = B1704['=='](B1872, ']');
                                                                                                    if (($T)(B1874))
                                                                                                        B1704['signal'](B1706['format-to-string']('too many closings: %=', char__1871));
                                                                                                    else if (($T)(B1704['=='](B1872, '"')))
                                                                                                        add_to_stackN__1864(($module)['read-string'](stream__1853));
                                                                                                    else {
                                                                                                        B1705['stream-unread-element'](stream__1853);
                                                                                                        add_to_stackN__1864(($module)['make-atom'](B1704['first'](($module)['match-stream'](($module)['*atom-pattern*'], stream__1853))));
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            {
                                                                                                var B1875 = false;
                                                                                                if (($T)(B1704['=='](B1704['size'](stack__1860), 1)))
                                                                                                    B1875 = B1704['not'](B1704['empty?'](B1704['first'](stack__1860)));
                                                                                                else
                                                                                                    B1875 = false;
                                                                                                if (($T)(B1875)) {
                                                                                                    readQ__1862 = false;
                                                                                                    result__1863 = B1704['first'](B1704['first'](stack__1860));
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            return(result__1863);
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
                B1704['%annotate-function'](($module)['read'], 'read', false);
            }
        }
    }
}
{
    ($module)['%eval'] = function B1877() {
        return(eval((arguments[0])));
    };
    {
        B1704['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
