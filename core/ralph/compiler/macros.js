{
    var $module = Object.create(null);
    ($module)['%export'] = function B1880(name__1881, value__1882) {
        var B1883 = (exports);
        return(B1883[name__1881] = value__1882);
    };
}
var B1884 = require('ralph/core');
{
    var B1885 = require('ralph/format');
    var B1886 = require('ralph/compiler/utilities');
}
{
    var B1890 = $S('bind-properties', 'ralph/core');
    {
        var B1891 = $S('%keys', 'ralph/core');
        {
            var B1892 = $S('%object', 'ralph/core');
            {
                ($module)['wrap-keys'] = function B1893(form__1894, rest_parameter__1895, keyword_parameters__1896) {
                    var keyword_parametersT__1899 = B1884['map'](function B1897(parameter__1898) {
                            if (($T)(B1884['instance?'](parameter__1898, B1884['<array>'])))
                                return(parameter__1898);
                            else
                                return([
                                    parameter__1898,
                                    false
                                ]);
                        }, keyword_parameters__1896);
                    return([
                        B1890,
                        B1884['map'](B1884['first'], keyword_parametersT__1899),
                        [
                            B1891,
                            rest_parameter__1895,
                            B1884['%concat']([B1892], B1884['reduce1'](B1884['concatenate'], B1884['map'](function B1900(parameter__1901) {
                                var key__1902 = parameter__1901[0];
                                {
                                    var value__1903 = parameter__1901[1];
                                    return([
                                        B1884['symbol-name'](key__1902),
                                        value__1903
                                    ]);
                                }
                            }, keyword_parametersT__1899)))
                        ],
                        form__1894
                    ]);
                };
                B1884['%annotate-function'](($module)['wrap-keys'], 'wrap-keys', false);
            }
        }
    }
}
{
    var B1907 = $S('bind', 'ralph/core');
    {
        var B1908 = $S('%native-call', 'ralph/core');
        {
            ($module)['wrap-rest/keys'] = function B1909(form__1910, all_parameters__1911, normal_parameters__1912, rest_parameter__1913, keyword_parameters__1914) {
                var restQ__1915 = rest_parameter__1913;
                {
                    var B1916 = rest_parameter__1913;
                    {
                        var rest_parameter__1917 = false;
                        if (($T)(B1916))
                            rest_parameter__1917 = B1916;
                        else if (($T)(B1884['not'](B1884['empty?'](keyword_parameters__1914))))
                            rest_parameter__1917 = B1884['generate-symbol']();
                        else
                            rest_parameter__1917 = false;
                        {
                            var formT__1918 = false;
                            if (($T)(B1884['empty?'](keyword_parameters__1914)))
                                formT__1918 = form__1910;
                            else
                                formT__1918 = ($module)['wrap-keys'](form__1910, rest_parameter__1917, keyword_parameters__1914);
                            {
                                var B1919 = restQ__1915;
                                {
                                    var B1920 = false;
                                    if (($T)(B1919))
                                        B1920 = B1919;
                                    else
                                        B1920 = B1884['not'](B1884['empty?'](keyword_parameters__1914));
                                    if (($T)(B1920))
                                        return([
                                            B1907,
                                            [[
                                                    rest_parameter__1917,
                                                    [
                                                        B1908,
                                                        '$SL.call',
                                                        all_parameters__1911,
                                                        B1884['size'](normal_parameters__1912)
                                                    ]
                                                ]],
                                            formT__1918
                                        ]);
                                    else
                                        return(formT__1918);
                                }
                            }
                        }
                    }
                }
            };
            B1884['%annotate-function'](($module)['wrap-rest/keys'], 'wrap-rest/keys', false);
        }
    }
}
{
    ($module)['strip-types'] = function B1923(parameters__1924) {
        return(B1884['map'](function B1925(parameter__1926) {
            if (($T)(B1884['instance?'](parameter__1926, B1884['<array>'])))
                return(B1884['first'](parameter__1926));
            else
                return(parameter__1926);
        }, parameters__1924));
    };
    B1884['%annotate-function'](($module)['strip-types'], 'strip-types', false);
}
{
    var B1929 = $S('%method', 'ralph/core');
    {
        var B1930 = $S('%all-arguments');
        {
            ($module)['named-method'] = function B1931(name__1932, parameter_list__1933, form__1934) {
                var B1935 = B1886['destructure-parameter-list'](parameter_list__1933);
                {
                    var normal_parameters__1936 = B1935[0];
                    {
                        var rest_parameter__1937 = B1935[1];
                        {
                            var keyword_parameters__1938 = B1935[2];
                            return([
                                B1929,
                                name__1932,
                                ($module)['strip-types'](normal_parameters__1936),
                                ($module)['wrap-rest/keys'](form__1934, B1930, normal_parameters__1936, rest_parameter__1937, keyword_parameters__1938)
                            ]);
                        }
                    }
                }
            };
            B1884['%annotate-function'](($module)['named-method'], 'named-method', false);
        }
    }
}
{
    ($module)['$core-macros'] = B1884['make-plain-object']();
    ($module)['%export']('$core-macros', ($module)['$core-macros']);
}
{
    var B1940 = $S('if', 'ralph/core');
    {
        var B1941 = $S('begin', 'ralph/core');
        B1884['get-setter'](($module)['$core-macros'], 'when', function B1942(____1943, test__1944) {
            var forms__1945 = $SL.call(arguments, 2);
            return([
                B1940,
                test__1944,
                B1884['%concat']([B1941], forms__1945),
                false
            ]);
        });
    }
}
{
    var B1947 = $S('not', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'unless', function B1948(____1949, test__1950) {
        var forms__1951 = $SL.call(arguments, 2);
        return([
            B1940,
            [
                B1947,
                test__1950
            ],
            B1884['%concat']([B1941], forms__1951),
            false
        ]);
    });
}
{
    var B1953 = $S('set!', 'ralph/core');
    {
        var B1954 = $S('parallel-set!', 'ralph/core');
        B1884['get-setter'](($module)['$core-macros'], 'parallel-set!', function B1955(____1956, identifier__1957, new_value__1958) {
            var clauses__1959 = $SL.call(arguments, 3);
            if (($T)(B1884['empty?'](clauses__1959)))
                return([
                    B1953,
                    identifier__1957,
                    new_value__1958
                ]);
            else {
                var value__1960 = B1884['generate-symbol']();
                return([
                    B1907,
                    [[
                            value__1960,
                            new_value__1958
                        ]],
                    B1884['%concat']([B1954], clauses__1959),
                    [
                        B1953,
                        identifier__1957,
                        value__1960
                    ]
                ]);
            }
        });
    }
}
{
    var B1962 = $K('else');
    {
        var B1963 = $S('cond', 'ralph/core');
        B1884['get-setter'](($module)['$core-macros'], 'cond', function B1964(____1965) {
            var cases__1966 = $SL.call(arguments, 1);
            if (($T)(B1884['not'](B1884['empty?'](cases__1966)))) {
                var case__1967 = B1884['first'](cases__1966);
                {
                    B1886['check-type'](case__1967, B1884['<array>'], 'Non-array case in cond: %=');
                    {
                        var test__1968 = case__1967[0];
                        {
                            var forms__1969 = $SL.call(case__1967, 1);
                            {
                                var form__1970 = B1884['%concat']([B1941], forms__1969);
                                if (($T)(B1884['=='](test__1968, B1962)))
                                    return(form__1970);
                                else
                                    return([
                                        B1940,
                                        test__1968,
                                        form__1970,
                                        B1884['%concat']([B1963], B1884['rest'](cases__1966))
                                    ]);
                            }
                        }
                    }
                }
            } else
                return(false);
        });
    }
}
{
    var B1973 = $S('when', 'ralph/core');
    {
        var B1974 = $S('and', 'ralph/core');
        B1884['get-setter'](($module)['$core-macros'], 'and', function B1975(____1976) {
            var forms__1977 = $SL.call(arguments, 1);
            {
                var B1978 = B1884['size'](forms__1977);
                if (($T)(B1884['=='](B1978, 0)))
                    return(true);
                else if (($T)(B1884['=='](B1978, 1)))
                    return(B1884['first'](forms__1977));
                else
                    return([
                        B1973,
                        B1884['first'](forms__1977),
                        B1884['%concat']([B1974], B1884['rest'](forms__1977))
                    ]);
            }
        });
    }
}
{
    var B1981 = $S('or', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'or', function B1982(____1983) {
        var forms__1984 = $SL.call(arguments, 1);
        {
            var B1985 = B1884['size'](forms__1984);
            if (($T)(B1884['=='](B1985, 0)))
                return(false);
            else if (($T)(B1884['=='](B1985, 1)))
                return(B1884['first'](forms__1984));
            else {
                var value__1986 = B1884['generate-symbol']();
                return([
                    B1907,
                    [[
                            value__1986,
                            B1884['first'](forms__1984)
                        ]],
                    [
                        B1940,
                        value__1986,
                        value__1986,
                        B1884['%concat']([B1981], B1884['rest'](forms__1984))
                    ]
                ]);
            }
        }
    });
}
B1884['get-setter'](($module)['$core-macros'], 'if-bind', function B1988(____1989, binding__1990, consequent__1991, alternate__1992) {
    var superflous__1993 = $SL.call(arguments, 4);
    {
        B1886['check-type'](binding__1990, B1884['<array>'], 'Non-array binding in if-bind: %=');
        {
            var var__1994 = binding__1990[0];
            {
                var value__1995 = binding__1990[1];
                {
                    var temp__1996 = B1884['generate-symbol']();
                    return([
                        B1907,
                        [[
                                temp__1996,
                                value__1995
                            ]],
                        [
                            B1940,
                            temp__1996,
                            [
                                B1907,
                                [[
                                        var__1994,
                                        temp__1996
                                    ]],
                                consequent__1991
                            ],
                            alternate__1992
                        ]
                    ]);
                }
            }
        }
    }
});
{
    var B1998 = $S('while', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'until', function B1999(____2000, test__2001) {
        var forms__2002 = $SL.call(arguments, 2);
        return(B1884['%concat']([
            B1998,
            [
                B1947,
                test__2001
            ]
        ], forms__2002));
    });
}
{
    var B2005 = $S('for', 'ralph/core');
    {
        var B2006 = $S('inc', 'ralph/core');
        {
            var B2007 = $S('binary>=', 'ralph/core');
            B1884['get-setter'](($module)['$core-macros'], 'dotimes', function B2008(____2009, binding__2010) {
                var forms__2011 = $SL.call(arguments, 2);
                {
                    B1886['check-type'](binding__2010, B1884['<array>'], 'Non-array binding in dotimes: %=');
                    {
                        var temp__2012 = B1884['generate-symbol']();
                        {
                            var var__2013 = binding__2010[0];
                            {
                                var count__2014 = binding__2010[1];
                                {
                                    var result__2015 = binding__2010[2];
                                    {
                                        B1886['check-type'](var__2013, B1884['<symbol>'], 'Non-symbol var in dotimes: %=');
                                        {
                                            var B2017 = [[
                                                        temp__2012,
                                                        count__2014
                                                    ]];
                                            {
                                                var B2018 = B1884['%concat'];
                                                {
                                                    var B2019 = [[
                                                                var__2013,
                                                                0,
                                                                [
                                                                    B2006,
                                                                    var__2013
                                                                ]
                                                            ]];
                                                    {
                                                        var B2020 = [
                                                                B2007,
                                                                var__2013,
                                                                temp__2012
                                                            ];
                                                        {
                                                            var B2016 = result__2015;
                                                            {
                                                                var B2021 = false;
                                                                if (($T)(B2016))
                                                                    B2021 = B2016;
                                                                else
                                                                    B2021 = false;
                                                                {
                                                                    var B2022 = [
                                                                            B2020,
                                                                            B2021
                                                                        ];
                                                                    {
                                                                        var B2023 = [
                                                                                B2005,
                                                                                B2019,
                                                                                B2022
                                                                            ];
                                                                        {
                                                                            var B2024 = B2018(B2023, forms__2011);
                                                                            return([
                                                                                B1907,
                                                                                B2017,
                                                                                B2024
                                                                            ]);
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
                    }
                }
            });
        }
    }
}
{
    var B2033 = $S('method', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'for', function B2034(____2035, clauses__2036, end_clause__2037) {
        var forms__2038 = $SL.call(arguments, 3);
        {
            B1886['check-type'](clauses__2036, B1884['<array>'], 'Non-array set of clauses in for: %=');
            {
                B1886['check-type'](end_clause__2037, B1884['<array>'], 'Non-array end-clause in for: %=');
                {
                    var init_clauses__2039 = [];
                    {
                        var next_clauses__2040 = [];
                        {
                            var vars__2041 = B1884['map'](B1884['first'], clauses__2036);
                            {
                                var B2042 = clauses__2036;
                                {
                                    var B2043 = false;
                                    {
                                        var B2044 = false;
                                        {
                                            var B2045 = [B2042];
                                            {
                                                while (true) {
                                                    var B2051 = B1884['not'];
                                                    {
                                                        var B2046 = B2043;
                                                        {
                                                            var B2052 = false;
                                                            if (($T)(B2046))
                                                                B2052 = B2046;
                                                            else
                                                                B2052 = B1884['any?'](B1884['empty?'], B2045);
                                                            {
                                                                var B2053 = B2051(B2052);
                                                                if (($T)(B2053)) {
                                                                    var clause__2047 = B1884['first'](B2042);
                                                                    {
                                                                        (function B2048(clause__2049) {
                                                                            B1886['check-type'](clause__2049, B1884['<array>'], 'Non-array clause in for: %=');
                                                                            {
                                                                                B1884['push-last'](init_clauses__2039, B1884['slice'](clause__2049, 0, 2));
                                                                                {
                                                                                    B1884['push-last'](next_clauses__2040, B1884['first'](clause__2049));
                                                                                    return(B1884['push-last'](next_clauses__2040, B1884['third'](clause__2049)));
                                                                                }
                                                                            }
                                                                        }(clause__2047));
                                                                        {
                                                                            B2042 = B1884['rest'](B2042);
                                                                            B2045 = [B2042];
                                                                        }
                                                                    }
                                                                } else
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                }
                                                {
                                                    B2044;
                                                    {
                                                        var B2050 = B1884['empty?'](end_clause__2037);
                                                        {
                                                            var B2054 = false;
                                                            if (($T)(B2050))
                                                                B2054 = B2050;
                                                            else
                                                                B2054 = [
                                                                    B1947,
                                                                    B1884['first'](end_clause__2037)
                                                                ];
                                                            {
                                                                var B2055 = B1884['%concat']([B1884['%concat']([
                                                                            B2033,
                                                                            vars__2041
                                                                        ], forms__2038)], vars__2041);
                                                                {
                                                                    var B2056 = B1884['%concat']([B1954], next_clauses__2040);
                                                                    {
                                                                        var B2057 = [
                                                                                B1998,
                                                                                B2054,
                                                                                B2055,
                                                                                B2056
                                                                            ];
                                                                        {
                                                                            var B2058 = B1884['%concat']([B1941], B1884['rest'](end_clause__2037));
                                                                            return([
                                                                                B1907,
                                                                                init_clauses__2039,
                                                                                B2057,
                                                                                B2058
                                                                            ]);
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
                    }
                }
            }
        }
    });
}
{
    var B2065 = $S('rest', 'ralph/core');
    {
        var B2066 = $S('%array', 'ralph/core');
        {
            var B2067 = $S('until', 'ralph/core');
            {
                var B2068 = $S('any?', 'ralph/core');
                {
                    var B2069 = $S('empty?', 'ralph/core');
                    {
                        var B2070 = $S('first', 'ralph/core');
                        B1884['get-setter'](($module)['$core-macros'], 'for-each', function B2071(____2072, clauses__2073, end_clause__2074) {
                            var forms__2075 = $SL.call(arguments, 3);
                            {
                                B1886['check-type'](clauses__2073, B1884['<array>'], 'Non-array set of clauses in for: %=');
                                {
                                    B1886['check-type'](end_clause__2074, B1884['<array>'], 'Non-array end-clause in for: %=');
                                    {
                                        var clauses__2078 = B1884['map'](function B2076(clause__2077) {
                                                B1886['check-type'](clause__2077, B1884['<array>'], 'Non-array clause in for-each: %=');
                                                return(B1884['cons'](B1884['generate-symbol'](), clause__2077));
                                            }, clauses__2073);
                                        {
                                            var endQ__2079 = B1884['generate-symbol']();
                                            {
                                                var values__2080 = B1884['generate-symbol']();
                                                {
                                                    var result__2081 = B1884['generate-symbol']();
                                                    {
                                                        var B2098 = B1884['%concat'];
                                                        {
                                                            var B2099 = B1884['%concat'];
                                                            {
                                                                var vars__2082 = B1884['map'](B1884['second'], clauses__2078);
                                                                {
                                                                    var B2100 = B1884['%concat']([B1884['%concat']([
                                                                                B2033,
                                                                                vars__2082
                                                                            ], forms__2075)], vars__2082);
                                                                    {
                                                                        var B2101 = [
                                                                                B1941,
                                                                                B2100
                                                                            ];
                                                                        {
                                                                            var B2102 = B1884['map'](function B2083(clause__2084) {
                                                                                    return([
                                                                                        B1953,
                                                                                        B1884['first'](clause__2084),
                                                                                        [
                                                                                            B2065,
                                                                                            B1884['first'](clause__2084)
                                                                                        ]
                                                                                    ]);
                                                                                }, clauses__2078);
                                                                            {
                                                                                var B2103 = B2099(B2101, B2102);
                                                                                {
                                                                                    var B2104 = [[
                                                                                                B1953,
                                                                                                values__2080,
                                                                                                B1884['%concat']([B2066], B1884['map'](B1884['first'], clauses__2078))
                                                                                            ]];
                                                                                    {
                                                                                        var form__2085 = B2098(B2103, B2104);
                                                                                        {
                                                                                            var B2105 = B1884['%concat'](B1884['%concat']([], B1884['map'](function B2086(clause__2087) {
                                                                                                    var temp__2088 = clause__2087[0];
                                                                                                    {
                                                                                                        var var__2089 = clause__2087[1];
                                                                                                        {
                                                                                                            var values__2090 = clause__2087[2];
                                                                                                            return([
                                                                                                                temp__2088,
                                                                                                                values__2090
                                                                                                            ]);
                                                                                                        }
                                                                                                    }
                                                                                                }, clauses__2078)), [
                                                                                                    [
                                                                                                        endQ__2079,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        result__2081,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        values__2080,
                                                                                                        B1884['%concat']([B2066], B1884['map'](B1884['first'], clauses__2078))
                                                                                                    ]
                                                                                                ]);
                                                                                            {
                                                                                                var B2106 = [
                                                                                                        B1981,
                                                                                                        endQ__2079,
                                                                                                        [
                                                                                                            B2068,
                                                                                                            B2069,
                                                                                                            values__2080
                                                                                                        ]
                                                                                                    ];
                                                                                                {
                                                                                                    var B2107 = B1884['map'](function B2091(clause__2092) {
                                                                                                            var temp__2093 = clause__2092[0];
                                                                                                            {
                                                                                                                var var__2094 = clause__2092[1];
                                                                                                                {
                                                                                                                    var values__2095 = clause__2092[2];
                                                                                                                    return([
                                                                                                                        var__2094,
                                                                                                                        [
                                                                                                                            B2070,
                                                                                                                            temp__2093
                                                                                                                        ]
                                                                                                                    ]);
                                                                                                                }
                                                                                                            }
                                                                                                        }, clauses__2078);
                                                                                                    {
                                                                                                        var B2096 = B1884['first'](end_clause__2074);
                                                                                                        {
                                                                                                            var B2108 = false;
                                                                                                            if (($T)(B2096)) {
                                                                                                                var end_test__2097 = B2096;
                                                                                                                B2108 = [
                                                                                                                    B1940,
                                                                                                                    end_test__2097,
                                                                                                                    [
                                                                                                                        B1941,
                                                                                                                        [
                                                                                                                            B1953,
                                                                                                                            result__2081,
                                                                                                                            B1884['%concat']([B1941], B1884['rest'](end_clause__2074))
                                                                                                                        ],
                                                                                                                        [
                                                                                                                            B1953,
                                                                                                                            endQ__2079,
                                                                                                                            true
                                                                                                                        ]
                                                                                                                    ],
                                                                                                                    form__2085
                                                                                                                ];
                                                                                                            } else
                                                                                                                B2108 = form__2085;
                                                                                                            {
                                                                                                                var B2109 = [
                                                                                                                        B1907,
                                                                                                                        B2107,
                                                                                                                        B2108
                                                                                                                    ];
                                                                                                                {
                                                                                                                    var B2110 = [
                                                                                                                            B2067,
                                                                                                                            B2106,
                                                                                                                            B2109
                                                                                                                        ];
                                                                                                                    return([
                                                                                                                        B1907,
                                                                                                                        B2105,
                                                                                                                        B2110,
                                                                                                                        result__2081
                                                                                                                    ]);
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
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            }
        }
    }
}
B1884['get-setter'](($module)['$core-macros'], 'select', function B2114(____2115, value__2116, test__2117) {
    var cases__2118 = $SL.call(arguments, 3);
    {
        var valueT__2119 = B1884['generate-symbol']();
        {
            var testT__2120 = false;
            if (($T)(B1884['instance?'](test__2117, B1884['<symbol>'])))
                testT__2120 = test__2117;
            else
                testT__2120 = B1884['generate-symbol']();
            {
                var test_expression__2121 = false;
                {
                    test_expression__2121 = function B2122(test_value__2123) {
                        return([
                            testT__2120,
                            valueT__2119,
                            test_value__2123
                        ]);
                    };
                    {
                        var B2128 = B1884['concatenate'];
                        {
                            var B2129 = [[
                                        valueT__2119,
                                        value__2116
                                    ]];
                            {
                                var B2130 = false;
                                if (($T)(B1884['instance?'](test__2117, B1884['<symbol>'])))
                                    B2130 = [];
                                else
                                    B2130 = [[
                                            testT__2120,
                                            test__2117
                                        ]];
                                {
                                    var B2131 = B2128(B2129, B2130);
                                    {
                                        var B2132 = B1884['%concat']([B1963], B1884['map'](function B2124(case__2125) {
                                                B1886['check-type'](case__2125, B1884['<array>'], 'Non-array case in select: %=');
                                                {
                                                    var test_forms__2126 = case__2125[0];
                                                    {
                                                        var forms__2127 = $SL.call(case__2125, 1);
                                                        if (($T)(B1884['=='](test_forms__2126, B1962)))
                                                            return(case__2125);
                                                        else {
                                                            B1886['check-type'](test_forms__2126, B1884['<array>'], 'Non-array set of test forms in select: %=');
                                                            return(B1884['%concat']([B1884['%concat']([B1981], B1884['map'](test_expression__2121, test_forms__2126))], forms__2127));
                                                        }
                                                    }
                                                }
                                            }, cases__2118));
                                        return([
                                            B1907,
                                            B2131,
                                            B2132
                                        ]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
{
    var B2136 = $S('%get-property', 'ralph/core');
    {
        ($module)['destructure'] = function B2137(bindings__2138, values__2139, form__2140) {
            if (($T)(B1884['instance?'](values__2139, B1884['<symbol>']))) {
                B1886['check-type'](bindings__2138, B1884['<array>'], 'Non-array set of bindings while destructuring: %=');
                {
                    var B2141 = B1886['destructure-parameter-list'](bindings__2138);
                    {
                        var normal_parameters__2142 = B2141[0];
                        {
                            var rest_parameter__2143 = B2141[1];
                            {
                                var keyword_parameters__2144 = B2141[2];
                                {
                                    var i__2145 = B1884['size'](normal_parameters__2142);
                                    return(B1884['reduce'](function B2146(form__2147, binding__2148) {
                                        i__2145 = B1884['-'](i__2145, 1);
                                        if (($T)(B1884['instance?'](binding__2148, B1884['<symbol>'])))
                                            return([
                                                B1907,
                                                [[
                                                        binding__2148,
                                                        [
                                                            B2136,
                                                            values__2139,
                                                            i__2145
                                                        ]
                                                    ]],
                                                form__2147
                                            ]);
                                        else
                                            return(($module)['destructure'](binding__2148, [
                                                B2136,
                                                values__2139,
                                                i__2145
                                            ], form__2147));
                                    }, ($module)['wrap-rest/keys'](form__2140, values__2139, normal_parameters__2142, rest_parameter__2143, keyword_parameters__2144), B1884['reverse'](normal_parameters__2142)));
                                }
                            }
                        }
                    }
                }
            } else {
                var var__2149 = B1884['generate-symbol']();
                return([
                    B1907,
                    [[
                            var__2149,
                            values__2139
                        ]],
                    ($module)['destructure'](bindings__2138, var__2149, form__2140)
                ]);
            }
        };
        B1884['%annotate-function'](($module)['destructure'], 'destructure', false);
    }
}
B1884['get-setter'](($module)['$core-macros'], 'destructuring-bind', function B2151(____2152, bindings__2153, values__2154) {
    var forms__2155 = $SL.call(arguments, 3);
    return(($module)['destructure'](bindings__2153, values__2154, B1884['%concat']([B1941], forms__2155)));
});
B1884['get-setter'](($module)['$core-macros'], 'bind-properties', function B2158(____2159, properties__2160, object__2161) {
    var forms__2162 = $SL.call(arguments, 3);
    {
        var objectT__2163 = B1884['generate-symbol']();
        return(B1884['%concat']([
            B1907,
            B1884['%concat']([[
                    objectT__2163,
                    object__2161
                ]], B1884['map'](function B2164(property__2165) {
                return([
                    property__2165,
                    [
                        B2136,
                        objectT__2163,
                        B1884['symbol-name'](property__2165)
                    ]
                ]);
            }, properties__2160))
        ], forms__2162));
    }
});
B1884['get-setter'](($module)['$core-macros'], 'bind-methods', function B2168(____2169, bindings__2170) {
    var forms__2171 = $SL.call(arguments, 2);
    {
        B1886['check-type'](bindings__2170, B1884['<array>'], 'Non-array set of bindings in bind-methods: %=');
        return(B1884['%concat'](B1884['%concat']([
            B1907,
            B1884['map'](B1884['first'], bindings__2170)
        ], B1884['map'](function B2172(binding__2173) {
            B1886['check-type'](bindings__2170, B1884['<array>'], 'Non-array binding in bind-methods: %=');
            {
                var identifier__2174 = binding__2173[0];
                {
                    var parameter_list__2175 = binding__2173[1];
                    {
                        var forms__2176 = $SL.call(binding__2173, 2);
                        return([
                            B1953,
                            identifier__2174,
                            B1884['%concat']([
                                B2033,
                                parameter_list__2175
                            ], forms__2176)
                        ]);
                    }
                }
            }
        }, bindings__2170)), forms__2171));
    }
});
{
    var B2182 = $S('generate-symbol', 'ralph/core');
    {
        var B2183 = $S('quote', 'ralph/core');
        B1884['get-setter'](($module)['$core-macros'], 'once-only', function B2184(____2185, names__2186) {
            var forms__2187 = $SL.call(arguments, 2);
            {
                var symbols__2190 = B1884['map'](function B2188(name__2189) {
                        return(B1884['generate-symbol']());
                    }, names__2186);
                return([
                    B1907,
                    B1884['%concat']([], B1884['map'](function B2191(symbol__2192) {
                        return([
                            symbol__2192,
                            [B2182]
                        ]);
                    }, symbols__2190)),
                    [
                        B2066,
                        [
                            B2183,
                            B1907
                        ],
                        B1884['%concat']([B2066], B1884['map'](function B2193(symbol__2194, name__2195) {
                            return([
                                B2066,
                                symbol__2194,
                                name__2195
                            ]);
                        }, symbols__2190, names__2186)),
                        B1884['%concat']([
                            B1907,
                            B1884['%concat']([], B1884['map'](function B2196(name__2197, symbol__2198) {
                                return([
                                    name__2197,
                                    symbol__2198
                                ]);
                            }, names__2186, symbols__2190))
                        ], forms__2187)
                    ]
                ]);
            }
        });
    }
}
{
    var B2201 = $S('+', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'inc!', function B2202(____2203, object__2204, value__2205) {
        var B2206 = value__2205;
        {
            var B2207 = false;
            if (($T)(B2206))
                B2207 = B2206;
            else
                B2207 = 1;
            {
                var B2208 = [
                        B2201,
                        object__2204,
                        B2207
                    ];
                return([
                    B1953,
                    object__2204,
                    B2208
                ]);
            }
        }
    });
}
{
    var B2211 = $S('-', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'dec!', function B2212(____2213, object__2214, value__2215) {
        var B2216 = value__2215;
        {
            var B2217 = false;
            if (($T)(B2216))
                B2217 = B2216;
            else
                B2217 = 1;
            {
                var B2218 = [
                        B2211,
                        object__2214,
                        B2217
                    ];
                return([
                    B1953,
                    object__2214,
                    B2218
                ]);
            }
        }
    });
}
{
    ($module)['signal-unsupported-dot-name'] = function B2220(property__2221) {
        return(B1884['signal'](B1885['format-to-string']('Unsupported name for call in dot: %=', property__2221)));
    };
    B1884['%annotate-function'](($module)['signal-unsupported-dot-name'], 'signal-unsupported-dot-name', false);
}
B1884['get-setter'](($module)['$core-macros'], '.', function B2226(____2227, form__2228) {
    var calls__2229 = $SL.call(arguments, 2);
    return(B1884['reduce'](function B2230(form__2231, call__2232) {
        B1886['check-type'](call__2232, B1884['<array>'], 'Non-array call in dot: %=');
        {
            var property__2233 = call__2232[0];
            {
                var arguments__2234 = $SL.call(call__2232, 1);
                {
                    var bindings__2237 = B1884['map'](function B2235(argument__2236) {
                            return([
                                B1884['generate-symbol'](),
                                argument__2236
                            ]);
                        }, arguments__2234);
                    {
                        var formT__2238 = B1884['generate-symbol']();
                        {
                            var B2240 = [[
                                        formT__2238,
                                        form__2231
                                    ]];
                            {
                                var B2241 = B1884['%concat'];
                                {
                                    var B2239 = property__2233;
                                    {
                                        var B2242 = false;
                                        if (($T)(B1884['instance?'](B2239, B1884['<string>'])))
                                            B2242 = property__2233;
                                        else if (($T)(B1884['instance?'](B2239, B1884['<symbol>'])))
                                            B2242 = B1884['symbol-name'](property__2233);
                                        else
                                            B2242 = ($module)['signal-unsupported-dot-name'](property__2233);
                                        {
                                            var B2243 = [
                                                    B2136,
                                                    formT__2238,
                                                    B2242
                                                ];
                                            {
                                                var B2244 = [B2243];
                                                {
                                                    var B2245 = B1884['map'](B1884['first'], bindings__2237);
                                                    {
                                                        var B2246 = B2241(B2244, B2245);
                                                        {
                                                            var B2247 = [
                                                                    B1907,
                                                                    bindings__2237,
                                                                    B2246
                                                                ];
                                                            return([
                                                                B1907,
                                                                B2240,
                                                                B2247
                                                            ]);
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
    }, form__2228, calls__2229));
});
{
    var B2251 = $S('define', 'ralph/core');
    {
        var B2252 = $S('%make-method', 'ralph/core');
        {
            var B2253 = $S('<object>', 'ralph/core');
            B1884['get-setter'](($module)['$core-macros'], 'define-method', function B2254(env__2255, identifier__2256, parameter_list__2257) {
                var forms__2258 = $SL.call(arguments, 3);
                {
                    var B2259 = false;
                    if (($T)(B1886['setter-identifier?'](identifier__2256)))
                        B2259 = [
                            true,
                            B1886['transform-setter-identifier'](B1884['second'](identifier__2256))
                        ];
                    else
                        B2259 = [
                            false,
                            identifier__2256
                        ];
                    {
                        var setterQ__2260 = B2259[0];
                        {
                            var identifier__2261 = B2259[1];
                            {
                                var B2266 = B1884['not'];
                                {
                                    var B2262 = B1884['instance?'](identifier__2261, B1884['<symbol>']);
                                    {
                                        var B2267 = false;
                                        if (($T)(B2262))
                                            B2267 = B2262;
                                        else
                                            B2267 = setterQ__2260;
                                        {
                                            var B2268 = B2266(B2267);
                                            {
                                                if (($T)(B2268))
                                                    B1884['signal'](B1885['format-to-string']('Identifier not symbol or setter in define-method: %=', identifier__2261));
                                                {
                                                    if (($T)(B1884['empty?'](parameter_list__2257)))
                                                        B1884['signal'](B1885['format-to-string']('Empty parameter-list in define-method: %=', identifier__2261));
                                                    {
                                                        var name__2263 = B1884['symbol-name'](identifier__2261);
                                                        {
                                                            var definition__2264 = B1884['%concat']([
                                                                    B2033,
                                                                    parameter_list__2257
                                                                ], forms__2258);
                                                            {
                                                                var head__2265 = B1884['first'](parameter_list__2257);
                                                                {
                                                                    var B2269 = false;
                                                                    if (($T)(B1884['instance?'](head__2265, B1884['<array>'])))
                                                                        B2269 = B1884['>'](B1884['size'](head__2265), 1);
                                                                    else
                                                                        B2269 = false;
                                                                    {
                                                                        var B2270 = false;
                                                                        if (($T)(B2269))
                                                                            B2270 = B1884['second'](head__2265);
                                                                        else
                                                                            B2270 = B2253;
                                                                        {
                                                                            var B2271 = [
                                                                                    B2252,
                                                                                    name__2263,
                                                                                    definition__2264,
                                                                                    setterQ__2260,
                                                                                    B2270,
                                                                                    identifier__2261
                                                                                ];
                                                                            return([
                                                                                B2251,
                                                                                identifier__2261,
                                                                                B2271
                                                                            ]);
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
                    }
                }
            });
        }
    }
}
{
    var B2275 = $S('%begin', 'ralph/core');
    {
        var B2276 = $S('%annotate-function', 'ralph/core');
        B1884['get-setter'](($module)['$core-macros'], 'define-function', function B2277(env__2278, identifier__2279, parameter_list__2280) {
            var forms__2281 = $SL.call(arguments, 3);
            {
                var B2282 = false;
                if (($T)(B1886['setter-identifier?'](identifier__2279)))
                    B2282 = [
                        true,
                        B1886['transform-setter-identifier'](B1884['second'](identifier__2279))
                    ];
                else
                    B2282 = [
                        false,
                        identifier__2279
                    ];
                {
                    var setterQ__2283 = B2282[0];
                    {
                        var identifier__2284 = B2282[1];
                        {
                            var B2288 = B1884['not'];
                            {
                                var B2285 = B1884['instance?'](identifier__2284, B1884['<symbol>']);
                                {
                                    var B2289 = false;
                                    if (($T)(B2285))
                                        B2289 = B2285;
                                    else
                                        B2289 = setterQ__2283;
                                    {
                                        var B2290 = B2288(B2289);
                                        {
                                            if (($T)(B2290))
                                                B1884['signal'](B1885['format-to-string']('Identifier not symbol or setter in define-function: %=', identifier__2284));
                                            {
                                                var name__2286 = B1884['symbol-name'](identifier__2284);
                                                {
                                                    var definition__2287 = B1884['%concat']([
                                                            B2033,
                                                            parameter_list__2280
                                                        ], forms__2281);
                                                    {
                                                        B1884['get-setter'](env__2278, 'module', 'functions', name__2286, definition__2287);
                                                        return([
                                                            B2275,
                                                            [
                                                                B2251,
                                                                identifier__2284,
                                                                definition__2287
                                                            ],
                                                            [
                                                                B2276,
                                                                identifier__2284,
                                                                name__2286,
                                                                setterQ__2283
                                                            ]
                                                        ]);
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
        });
    }
}
{
    var B2292 = $S('%make-generic', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'define-generic', function B2293(____2294, identifier__2295, arguments__2296) {
        var superflous__2297 = $SL.call(arguments, 3);
        return([
            B2251,
            identifier__2295,
            [
                B2292,
                B1884['symbol-name'](identifier__2295)
            ]
        ]);
    });
}
{
    var B2301 = $S('%make-class', 'ralph/core');
    {
        var B2302 = $S('%set', 'ralph/core');
        {
            var B2303 = $S('%native', 'ralph/core');
            B1884['get-setter'](($module)['$core-macros'], 'define-class', function B2304(____2305, identifier__2306, superclass__2307) {
                var properties__2308 = $SL.call(arguments, 3);
                {
                    var B2313 = false;
                    if (($T)(B1884['not'](B1884['empty?'](superclass__2307))))
                        B2313 = B1884['first'](superclass__2307);
                    else
                        B2313 = false;
                    {
                        var B2314 = B1884['%concat']([B1892], B1884['reduce1'](B1884['concatenate'], B1884['map'](function B2309(property__2310) {
                                if (($T)(B1884['instance?'](property__2310, B1884['<array>'])))
                                    return([
                                        B1884['symbol-name'](B1884['first'](property__2310)),
                                        [
                                            B2033,
                                            [],
                                            B1884['second'](property__2310)
                                        ]
                                    ]);
                                else
                                    return([
                                        B1884['symbol-name'](property__2310),
                                        false
                                    ]);
                            }, properties__2308)));
                        {
                            var B2319 = [
                                    B1929,
                                    identifier__2306,
                                    [],
                                    B1884['%concat']([B2275], B1884['map'](function B2311(property__2312) {
                                        var B2315 = [
                                                B2303,
                                                'this'
                                            ];
                                        {
                                            var B2316 = false;
                                            if (($T)(B1884['instance?'](property__2312, B1884['<array>'])))
                                                B2316 = B1884['symbol-name'](B1884['first'](property__2312));
                                            else
                                                B2316 = B1884['symbol-name'](property__2312);
                                            {
                                                var B2317 = [
                                                        B2136,
                                                        B2315,
                                                        B2316
                                                    ];
                                                {
                                                    var B2318 = [
                                                            B2303,
                                                            'undefined'
                                                        ];
                                                    return([
                                                        B2302,
                                                        B2317,
                                                        B2318
                                                    ]);
                                                }
                                            }
                                        }
                                    }, properties__2308))
                                ];
                            {
                                var B2320 = [
                                        B2301,
                                        B2313,
                                        B2314,
                                        B2319
                                    ];
                                return([
                                    B2251,
                                    identifier__2306,
                                    B2320
                                ]);
                            }
                        }
                    }
                }
            });
        }
    }
}
{
    var B2322 = $S('define-function', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'define-macro', function B2323(____2324, identifier__2325, parameter_list__2326) {
        var forms__2327 = $SL.call(arguments, 3);
        {
            B1886['check-type'](identifier__2325, B1884['<symbol>'], 'Non-symbol identifier in define-macro: %=');
            {
                B1886['check-type'](parameter_list__2326, B1884['<array>'], 'Non-array parameter-list in define-macro: %=');
                return([
                    B1941,
                    B1884['%concat']([
                        B2322,
                        identifier__2325,
                        B1884['%concat']([B1884['generate-symbol']()], parameter_list__2326)
                    ], forms__2327),
                    [
                        B1953,
                        [
                            B2136,
                            identifier__2325,
                            '%macro?'
                        ],
                        true
                    ]
                ]);
            }
        }
    });
}
B1884['get-setter'](($module)['$core-macros'], 'define-symbol-macro', function B2329(____2330, identifier__2331, parameter_list__2332) {
    var forms__2333 = $SL.call(arguments, 3);
    {
        B1886['check-type'](identifier__2331, B1884['<symbol>'], 'Non-symbol identifier in define-symbol-macro: %=');
        {
            B1886['check-type'](parameter_list__2332, B1884['<array>'], 'Non-array parameter-list in define-symbol-macro: %=');
            return([
                B1941,
                B1884['%concat']([
                    B2322,
                    identifier__2331,
                    []
                ], forms__2333),
                [
                    B1953,
                    [
                        B2136,
                        identifier__2331,
                        '%symbol-macro?'
                    ],
                    true
                ]
            ]);
        }
    }
});
{
    var B2335 = $S('next-method', 'ralph/core');
    B1884['get-setter'](($module)['$core-macros'], 'call-next-method', function B2336(____2337) {
        var superflous__2338 = $SL.call(arguments, 1);
        return([
            [
                B2136,
                B2335,
                'apply'
            ],
            [
                B2303,
                'null'
            ],
            B1930
        ]);
    });
}
{
    var B2341 = $S('%make-exit-function', 'ralph/core');
    {
        var B2342 = $S('%try', 'ralph/core');
        {
            var B2343 = $S('instance?', 'ralph/core');
            {
                var B2344 = $S('<non-local-exit>', 'ralph/core');
                {
                    var B2345 = $S('%infix', 'ralph/core');
                    {
                        var B2346 = $S('signal', 'ralph/core');
                        B1884['get-setter'](($module)['$core-macros'], 'block', function B2347(____2348, name__2349) {
                            var body__2350 = $SL.call(arguments, 2);
                            {
                                var B2351 = false;
                                if (($T)(B1884['not'](B1884['empty?'](name__2349))))
                                    B2351 = B1884['first'](name__2349);
                                else
                                    B2351 = false;
                                if (($T)(B2351)) {
                                    var name__2352 = B2351;
                                    {
                                        var block_var__2353 = B1884['generate-symbol']();
                                        {
                                            var condition_var__2354 = B1884['generate-symbol']();
                                            return([
                                                B1907,
                                                [
                                                    [
                                                        name__2352,
                                                        [B2341]
                                                    ],
                                                    [
                                                        block_var__2353,
                                                        B1884['%concat']([
                                                            B2033,
                                                            []
                                                        ], body__2350)
                                                    ]
                                                ],
                                                [
                                                    B2342,
                                                    [block_var__2353],
                                                    condition_var__2354,
                                                    [
                                                        B1940,
                                                        [
                                                            B1974,
                                                            [
                                                                B2343,
                                                                condition_var__2354,
                                                                B2344
                                                            ],
                                                            [
                                                                B2345,
                                                                '===',
                                                                [
                                                                    B2136,
                                                                    condition_var__2354,
                                                                    'identifier'
                                                                ],
                                                                [
                                                                    B2136,
                                                                    name__2352,
                                                                    'identifier'
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B2136,
                                                            condition_var__2354,
                                                            'return-value'
                                                        ],
                                                        [
                                                            B2346,
                                                            condition_var__2354
                                                        ]
                                                    ]
                                                ]
                                            ]);
                                        }
                                    }
                                } else
                                    return(B1884['%concat']([B1941], body__2350));
                            }
                        });
                    }
                }
            }
        }
    }
}
{
    ($module)['$core-symbol-macros'] = B1884['make-plain-object']();
    ($module)['%export']('$core-symbol-macros', ($module)['$core-symbol-macros']);
}
{
    var B2356 = $S('%next-method', 'ralph/core');
    {
        var B2357 = $S('%this-method');
        B1884['get-setter'](($module)['$core-symbol-macros'], 'next-method', function B2358(____2359) {
            var superflous__2360 = $SL.call(arguments, 1);
            return([
                B2356,
                B2357
            ]);
        });
    }
}
{
    ($module)['$internal-macros'] = B1884['make-plain-object']();
    ($module)['%export']('$internal-macros', ($module)['$internal-macros']);
}
{
    var B2363 = $S('%quote', 'ralph/core');
    {
        ($module)['transform-quoted'] = function B2364(form__2365) {
            var B2366 = form__2365;
            if (($T)(B1884['instance?'](B2366, B1884['<array>'])))
                return(B1884['%concat']([B2066], B1884['map'](($module)['transform-quoted'], form__2365)));
            else if (($T)(B1884['instance?'](B2366, B1884['<symbol>'])))
                return([
                    B2363,
                    form__2365
                ]);
            else
                return(form__2365);
        };
        B1884['%annotate-function'](($module)['transform-quoted'], 'transform-quoted', false);
    }
}
B1884['get-setter'](($module)['$internal-macros'], 'quote', function B2368(____2369, form__2370) {
    var superflous__2371 = $SL.call(arguments, 2);
    return(($module)['transform-quoted'](form__2370));
});
B1884['get-setter'](($module)['$internal-macros'], 'begin', function B2374(____2375) {
    var forms__2376 = $SL.call(arguments, 1);
    {
        var B2377 = B1884['size'](forms__2376);
        if (($T)(B1884['=='](B2377, 0)))
            return(false);
        else if (($T)(B1884['=='](B2377, 1)))
            return(B1884['first'](forms__2376));
        else
            return(B1884['%concat']([B2275], forms__2376));
    }
});
{
    var B2380 = $S('%bind', 'ralph/core');
    B1884['get-setter'](($module)['$internal-macros'], 'bind', function B2381(____2382, bindings__2383) {
        var forms__2384 = $SL.call(arguments, 2);
        return(B1884['reduce'](function B2385(form__2386, binding__2387) {
            var B2388 = false;
            if (($T)(B1884['instance?'](binding__2387, B1884['<symbol>'])))
                B2388 = [
                    binding__2387,
                    false
                ];
            else
                B2388 = binding__2387;
            return([
                B2380,
                B2388,
                form__2386
            ]);
        }, B1884['%concat']([B1941], forms__2384), B1884['reverse'](bindings__2383)));
    });
}
B1884['get-setter'](($module)['$internal-macros'], 'method', function B2390(____2391, parameter_list__2392) {
    var forms__2393 = $SL.call(arguments, 2);
    return(($module)['named-method'](B1884['generate-symbol'](), parameter_list__2392, B1884['%concat']([B1941], forms__2393)));
});
{
    var B2395 = $S('%while', 'ralph/core');
    B1884['get-setter'](($module)['$internal-macros'], 'while', function B2396(____2397, test__2398) {
        var forms__2399 = $SL.call(arguments, 2);
        return([
            B2395,
            test__2398,
            B1884['%concat']([B1941], forms__2399)
        ]);
    });
}
{
    var B2401 = $S('%if', 'ralph/core');
    B1884['get-setter'](($module)['$internal-macros'], 'if', function B2402(____2403, test__2404, then__2405, else__2406) {
        var superflous__2407 = $SL.call(arguments, 4);
        return([
            B2401,
            test__2404,
            then__2405,
            else__2406
        ]);
    });
}
B1884['get-setter'](($module)['$internal-macros'], 'set!', function B2409(____2410, place__2411) {
    var new_values__2412 = $SL.call(arguments, 2);
    {
        var B2413 = false;
        if (($T)(B1884['instance?'](place__2411, B1884['<array>'])))
            B2413 = B1884['not'](B1884['=='](B1884['symbol-name'](B1884['first'](place__2411)), '%get-property'));
        else
            B2413 = false;
        if (($T)(B2413))
            return(B1884['%concat'](B1884['%concat']([B1886['transform-setter-identifier'](B1884['first'](place__2411))], B1884['rest'](place__2411)), new_values__2412));
        else
            return([
                B2302,
                place__2411,
                B1884['first'](new_values__2412)
            ]);
    }
});
{
    var B2416 = $S('%define', 'ralph/core');
    B1884['get-setter'](($module)['$internal-macros'], 'define', function B2417(env__2418, identifier__2419, value__2420) {
        var B2421 = value__2420;
        {
            var B2422 = false;
            if (($T)(B2421))
                B2422 = B2421;
            else
                B2422 = false;
            return([
                B2416,
                identifier__2419,
                B2422
            ]);
        }
    });
}
B1884['get-setter'](($module)['$internal-macros'], 'handler-case', function B2428(____2429, protected_form__2430) {
    var cases__2431 = $SL.call(arguments, 2);
    {
        var condition_var__2432 = B1884['generate-symbol']();
        return([
            B2342,
            protected_form__2430,
            condition_var__2432,
            B1884['%concat']([B1963], B1884['map'](function B2433(case__2434) {
                var B2435 = case__2434[0];
                {
                    var type__2436 = B2435[0];
                    {
                        var B2437 = $SL.call(B2435, 1);
                        {
                            var B2438 = B1884['%keys'](B2437, { 'condition': false });
                            {
                                var condition__2439 = B2438['condition'];
                                {
                                    var body__2440 = $SL.call(case__2434, 1);
                                    {
                                        var B2441 = B1884['concatenate'];
                                        {
                                            var B2442 = [[
                                                        B2343,
                                                        condition_var__2432,
                                                        type__2436
                                                    ]];
                                            {
                                                var B2443 = false;
                                                if (($T)(condition__2439))
                                                    B2443 = [B1884['%concat']([
                                                            B1907,
                                                            [[
                                                                    condition__2439,
                                                                    condition_var__2432
                                                                ]]
                                                        ], body__2440)];
                                                else
                                                    B2443 = body__2440;
                                                return(B2441(B2442, B2443));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, cases__2431))
        ]);
    }
});
{
    ($module)['$internal-symbol-macros'] = B1884['make-plain-object']();
    ($module)['%export']('$internal-symbol-macros', ($module)['$internal-symbol-macros']);
}
{
    ($module)['%eval'] = function B2445() {
        return(eval((arguments[0])));
    };
    {
        B1884['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
