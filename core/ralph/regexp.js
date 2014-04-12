{
    var $module = Object.create(null);
    var Mexport = function B1878(name__1879, value__1880) {
        var B1881 = (exports);
        return(B1881[name__1879] = value__1880);
    };
}
var B1882 = require('ralph/core');
false;
{
    var LregexpG = (RegExp);
    Mexport('<regexp>', LregexpG);
}
var initialize = B1882['%make-method']('initialize', function B1889(regexp__1890) {
        var B1891 = $SL.call(arguments, 1);
        {
            var B1892 = B1882['%keys'](B1891, {
                    'pattern': false,
                    'global?': false,
                    'ignore-case?': false,
                    'multiline?': false
                });
            {
                var pattern__1893 = B1892['pattern'];
                {
                    var globalQ__1894 = B1892['global?'];
                    {
                        var ignore_caseQ__1895 = B1892['ignore-case?'];
                        {
                            var multilineQ__1896 = B1892['multiline?'];
                            if (($T)(pattern__1893)) {
                                var B1901 = B1882['concatenate'];
                                {
                                    var B1902 = false;
                                    if (($T)(globalQ__1894))
                                        B1902 = 'g';
                                    else
                                        B1902 = '';
                                    {
                                        var B1903 = false;
                                        if (($T)(ignore_caseQ__1895))
                                            B1903 = 'i';
                                        else
                                            B1903 = '';
                                        {
                                            var B1904 = false;
                                            if (($T)(multilineQ__1896))
                                                B1904 = 'm';
                                            else
                                                B1904 = '';
                                            {
                                                var flags__1897 = B1901(B1902, B1903, B1904);
                                                {
                                                    var B1898 = regexp__1890;
                                                    {
                                                        var B1899 = pattern__1893;
                                                        {
                                                            var B1900 = flags__1897;
                                                            return(B1898['compile'](B1899, B1900));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else
                                return(false);
                        }
                    }
                }
            }
        }
    }, false, LregexpG, initialize);
{
    var find = function B1908(regexp__1909, string__1910) {
        var B1911 = string__1910;
        {
            var B1912 = regexp__1909;
            {
                var position__1913 = B1911['search'](B1912);
                if (($T)(B1882['>'](position__1913, -1)))
                    return(position__1913);
                else
                    return(false);
            }
        }
    };
    B1882['%annotate-function'](find, 'find', false);
}
{
    {
        var match = function B1917(regexp__1918, string__1919) {
            var B1920 = string__1919;
            {
                var B1921 = regexp__1918;
                return(B1920['match'](B1921));
            }
        };
        Mexport('match', match);
    }
    B1882['%annotate-function'](match, 'match', false);
}
