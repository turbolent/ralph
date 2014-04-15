require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1895(name__1896, value__1897) {
            var B1899 = (exports);
            return(B1899[name__1896] = value__1897);
        };
        {
            ($module)['%eval'] = function B1898() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1900 = require('ralph/core');
{
    var B1901 = require('ralph/format');
    var B1902 = require('ralph/compiler/utilities');
}
{
    var B1906 = $S('bind-properties', 'ralph/core');
    {
        var B1907 = $S('%keys', 'ralph/core');
        {
            var B1908 = $S('%object', 'ralph/core');
            {
                ($module)['wrap-keys'] = function B1909(form__1910, rest_parameter__1911, keyword_parameters__1912) {
                    var keyword_parametersT__1915 = B1900['map'](function B1913(parameter__1914) {
                            if (($T)(B1900['instance?'](parameter__1914, B1900['<array>'])))
                                return(parameter__1914);
                            else
                                return([
                                    parameter__1914,
                                    false
                                ]);
                        }, keyword_parameters__1912);
                    return([
                        B1906,
                        B1900['map'](B1900['first'], keyword_parametersT__1915),
                        [
                            B1907,
                            rest_parameter__1911,
                            B1900['%concat']([B1908], B1900['reduce1'](B1900['concatenate'], B1900['map'](function B1916(parameter__1917) {
                                var key__1918 = parameter__1917[0];
                                {
                                    var value__1919 = parameter__1917[1];
                                    return([
                                        B1900['symbol-name'](key__1918),
                                        value__1919
                                    ]);
                                }
                            }, keyword_parametersT__1915)))
                        ],
                        form__1910
                    ]);
                };
                B1900['%annotate-function'](($module)['wrap-keys'], 'wrap-keys', false);
            }
        }
    }
}
{
    var B1923 = $S('bind', 'ralph/core');
    {
        var B1924 = $S('%native-call', 'ralph/core');
        {
            ($module)['wrap-rest/keys'] = function B1925(form__1926, all_parameters__1927, normal_parameters__1928, rest_parameter__1929, keyword_parameters__1930) {
                var restQ__1931 = rest_parameter__1929;
                {
                    var B1932 = rest_parameter__1929;
                    {
                        var rest_parameter__1933 = false;
                        if (($T)(B1932))
                            rest_parameter__1933 = B1932;
                        else if (($T)(B1900['not'](B1900['empty?'](keyword_parameters__1930))))
                            rest_parameter__1933 = B1900['generate-symbol']();
                        else
                            rest_parameter__1933 = false;
                        {
                            var formT__1934 = false;
                            if (($T)(B1900['empty?'](keyword_parameters__1930)))
                                formT__1934 = form__1926;
                            else
                                formT__1934 = ($module)['wrap-keys'](form__1926, rest_parameter__1933, keyword_parameters__1930);
                            {
                                var B1935 = restQ__1931;
                                {
                                    var B1936 = false;
                                    if (($T)(B1935))
                                        B1936 = B1935;
                                    else
                                        B1936 = B1900['not'](B1900['empty?'](keyword_parameters__1930));
                                    if (($T)(B1936))
                                        return([
                                            B1923,
                                            [[
                                                    rest_parameter__1933,
                                                    [
                                                        B1924,
                                                        '$SL.call',
                                                        all_parameters__1927,
                                                        B1900['size'](normal_parameters__1928)
                                                    ]
                                                ]],
                                            formT__1934
                                        ]);
                                    else
                                        return(formT__1934);
                                }
                            }
                        }
                    }
                }
            };
            B1900['%annotate-function'](($module)['wrap-rest/keys'], 'wrap-rest/keys', false);
        }
    }
}
{
    ($module)['strip-types'] = function B1939(parameters__1940) {
        return(B1900['map'](function B1941(parameter__1942) {
            if (($T)(B1900['instance?'](parameter__1942, B1900['<array>'])))
                return(B1900['first'](parameter__1942));
            else
                return(parameter__1942);
        }, parameters__1940));
    };
    B1900['%annotate-function'](($module)['strip-types'], 'strip-types', false);
}
{
    var B1945 = $S('%method', 'ralph/core');
    {
        var B1946 = $S('%all-arguments');
        {
            ($module)['named-method'] = function B1947(name__1948, parameter_list__1949, form__1950) {
                var B1951 = B1902['destructure-parameter-list'](parameter_list__1949);
                {
                    var normal_parameters__1952 = B1951[0];
                    {
                        var rest_parameter__1953 = B1951[1];
                        {
                            var keyword_parameters__1954 = B1951[2];
                            return([
                                B1945,
                                name__1948,
                                ($module)['strip-types'](normal_parameters__1952),
                                ($module)['wrap-rest/keys'](form__1950, B1946, normal_parameters__1952, rest_parameter__1953, keyword_parameters__1954)
                            ]);
                        }
                    }
                }
            };
            B1900['%annotate-function'](($module)['named-method'], 'named-method', false);
        }
    }
}
{
    ($module)['$core-macros'] = B1900['make-plain-object']();
    ($module)['%export']('$core-macros', ($module)['$core-macros']);
}
{
    var B1956 = $S('if', 'ralph/core');
    {
        var B1957 = $S('begin', 'ralph/core');
        B1900['get-setter'](($module)['$core-macros'], 'when', function B1958(____1959, test__1960) {
            var forms__1961 = $SL.call(arguments, 2);
            return([
                B1956,
                test__1960,
                B1900['%concat']([B1957], forms__1961),
                false
            ]);
        });
    }
}
{
    var B1963 = $S('not', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'unless', function B1964(____1965, test__1966) {
        var forms__1967 = $SL.call(arguments, 2);
        return([
            B1956,
            [
                B1963,
                test__1966
            ],
            B1900['%concat']([B1957], forms__1967),
            false
        ]);
    });
}
{
    var B1969 = $S('set!', 'ralph/core');
    {
        var B1970 = $S('parallel-set!', 'ralph/core');
        B1900['get-setter'](($module)['$core-macros'], 'parallel-set!', function B1971(____1972, identifier__1973, new_value__1974) {
            var clauses__1975 = $SL.call(arguments, 3);
            if (($T)(B1900['empty?'](clauses__1975)))
                return([
                    B1969,
                    identifier__1973,
                    new_value__1974
                ]);
            else {
                var value__1976 = B1900['generate-symbol']();
                return([
                    B1923,
                    [[
                            value__1976,
                            new_value__1974
                        ]],
                    B1900['%concat']([B1970], clauses__1975),
                    [
                        B1969,
                        identifier__1973,
                        value__1976
                    ]
                ]);
            }
        });
    }
}
{
    var B1978 = $K('else');
    {
        var B1979 = $S('cond', 'ralph/core');
        B1900['get-setter'](($module)['$core-macros'], 'cond', function B1980(____1981) {
            var cases__1982 = $SL.call(arguments, 1);
            if (($T)(B1900['not'](B1900['empty?'](cases__1982)))) {
                var case__1983 = B1900['first'](cases__1982);
                {
                    B1902['check-type'](case__1983, B1900['<array>'], 'Non-array case in cond: %=');
                    {
                        var test__1984 = case__1983[0];
                        {
                            var forms__1985 = $SL.call(case__1983, 1);
                            {
                                var form__1986 = B1900['%concat']([B1957], forms__1985);
                                if (($T)(B1900['=='](test__1984, B1978)))
                                    return(form__1986);
                                else
                                    return([
                                        B1956,
                                        test__1984,
                                        form__1986,
                                        B1900['%concat']([B1979], B1900['rest'](cases__1982))
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
    var B1989 = $S('when', 'ralph/core');
    {
        var B1990 = $S('and', 'ralph/core');
        B1900['get-setter'](($module)['$core-macros'], 'and', function B1991(____1992) {
            var forms__1993 = $SL.call(arguments, 1);
            {
                var B1994 = B1900['size'](forms__1993);
                if (($T)(B1900['=='](B1994, 0)))
                    return(true);
                else if (($T)(B1900['=='](B1994, 1)))
                    return(B1900['first'](forms__1993));
                else
                    return([
                        B1989,
                        B1900['first'](forms__1993),
                        B1900['%concat']([B1990], B1900['rest'](forms__1993))
                    ]);
            }
        });
    }
}
{
    var B1997 = $S('or', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'or', function B1998(____1999) {
        var forms__2000 = $SL.call(arguments, 1);
        {
            var B2001 = B1900['size'](forms__2000);
            if (($T)(B1900['=='](B2001, 0)))
                return(false);
            else if (($T)(B1900['=='](B2001, 1)))
                return(B1900['first'](forms__2000));
            else {
                var value__2002 = B1900['generate-symbol']();
                return([
                    B1923,
                    [[
                            value__2002,
                            B1900['first'](forms__2000)
                        ]],
                    [
                        B1956,
                        value__2002,
                        value__2002,
                        B1900['%concat']([B1997], B1900['rest'](forms__2000))
                    ]
                ]);
            }
        }
    });
}
B1900['get-setter'](($module)['$core-macros'], 'if-bind', function B2004(____2005, binding__2006, consequent__2007, alternate__2008) {
    var superflous__2009 = $SL.call(arguments, 4);
    {
        B1902['check-type'](binding__2006, B1900['<array>'], 'Non-array binding in if-bind: %=');
        {
            var var__2010 = binding__2006[0];
            {
                var value__2011 = binding__2006[1];
                {
                    var temp__2012 = B1900['generate-symbol']();
                    return([
                        B1923,
                        [[
                                temp__2012,
                                value__2011
                            ]],
                        [
                            B1956,
                            temp__2012,
                            [
                                B1923,
                                [[
                                        var__2010,
                                        temp__2012
                                    ]],
                                consequent__2007
                            ],
                            alternate__2008
                        ]
                    ]);
                }
            }
        }
    }
});
{
    var B2014 = $S('while', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'until', function B2015(____2016, test__2017) {
        var forms__2018 = $SL.call(arguments, 2);
        return(B1900['%concat']([
            B2014,
            [
                B1963,
                test__2017
            ]
        ], forms__2018));
    });
}
{
    var B2021 = $S('for', 'ralph/core');
    {
        var B2022 = $S('inc', 'ralph/core');
        {
            var B2023 = $S('binary>=', 'ralph/core');
            B1900['get-setter'](($module)['$core-macros'], 'dotimes', function B2024(____2025, binding__2026) {
                var forms__2027 = $SL.call(arguments, 2);
                {
                    B1902['check-type'](binding__2026, B1900['<array>'], 'Non-array binding in dotimes: %=');
                    {
                        var temp__2028 = B1900['generate-symbol']();
                        {
                            var var__2029 = binding__2026[0];
                            {
                                var count__2030 = binding__2026[1];
                                {
                                    var result__2031 = binding__2026[2];
                                    {
                                        B1902['check-type'](var__2029, B1900['<symbol>'], 'Non-symbol var in dotimes: %=');
                                        {
                                            var B2033 = [[
                                                        temp__2028,
                                                        count__2030
                                                    ]];
                                            {
                                                var B2034 = B1900['%concat'];
                                                {
                                                    var B2035 = [[
                                                                var__2029,
                                                                0,
                                                                [
                                                                    B2022,
                                                                    var__2029
                                                                ]
                                                            ]];
                                                    {
                                                        var B2036 = [
                                                                B2023,
                                                                var__2029,
                                                                temp__2028
                                                            ];
                                                        {
                                                            var B2032 = result__2031;
                                                            {
                                                                var B2037 = false;
                                                                if (($T)(B2032))
                                                                    B2037 = B2032;
                                                                else
                                                                    B2037 = false;
                                                                {
                                                                    var B2038 = [
                                                                            B2036,
                                                                            B2037
                                                                        ];
                                                                    {
                                                                        var B2039 = [
                                                                                B2021,
                                                                                B2035,
                                                                                B2038
                                                                            ];
                                                                        {
                                                                            var B2040 = B2034(B2039, forms__2027);
                                                                            return([
                                                                                B1923,
                                                                                B2033,
                                                                                B2040
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
    var B2049 = $S('method', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'for', function B2050(____2051, clauses__2052, end_clause__2053) {
        var forms__2054 = $SL.call(arguments, 3);
        {
            B1902['check-type'](clauses__2052, B1900['<array>'], 'Non-array set of clauses in for: %=');
            {
                B1902['check-type'](end_clause__2053, B1900['<array>'], 'Non-array end-clause in for: %=');
                {
                    var init_clauses__2055 = [];
                    {
                        var next_clauses__2056 = [];
                        {
                            var vars__2057 = B1900['map'](B1900['first'], clauses__2052);
                            {
                                var B2058 = clauses__2052;
                                {
                                    var B2059 = false;
                                    {
                                        var B2060 = false;
                                        {
                                            var B2061 = [B2058];
                                            {
                                                while (true) {
                                                    var B2067 = B1900['not'];
                                                    {
                                                        var B2062 = B2059;
                                                        {
                                                            var B2068 = false;
                                                            if (($T)(B2062))
                                                                B2068 = B2062;
                                                            else
                                                                B2068 = B1900['any?'](B1900['empty?'], B2061);
                                                            {
                                                                var B2069 = B2067(B2068);
                                                                if (($T)(B2069)) {
                                                                    var clause__2063 = B1900['first'](B2058);
                                                                    {
                                                                        (function B2064(clause__2065) {
                                                                            B1902['check-type'](clause__2065, B1900['<array>'], 'Non-array clause in for: %=');
                                                                            {
                                                                                B1900['push-last'](init_clauses__2055, B1900['slice'](clause__2065, 0, 2));
                                                                                {
                                                                                    B1900['push-last'](next_clauses__2056, B1900['first'](clause__2065));
                                                                                    return(B1900['push-last'](next_clauses__2056, B1900['third'](clause__2065)));
                                                                                }
                                                                            }
                                                                        }(clause__2063));
                                                                        {
                                                                            B2058 = B1900['rest'](B2058);
                                                                            B2061 = [B2058];
                                                                        }
                                                                    }
                                                                } else
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                }
                                                {
                                                    B2060;
                                                    {
                                                        var B2066 = B1900['empty?'](end_clause__2053);
                                                        {
                                                            var B2070 = false;
                                                            if (($T)(B2066))
                                                                B2070 = B2066;
                                                            else
                                                                B2070 = [
                                                                    B1963,
                                                                    B1900['first'](end_clause__2053)
                                                                ];
                                                            {
                                                                var B2071 = B1900['%concat']([B1900['%concat']([
                                                                            B2049,
                                                                            vars__2057
                                                                        ], forms__2054)], vars__2057);
                                                                {
                                                                    var B2072 = B1900['%concat']([B1970], next_clauses__2056);
                                                                    {
                                                                        var B2073 = [
                                                                                B2014,
                                                                                B2070,
                                                                                B2071,
                                                                                B2072
                                                                            ];
                                                                        {
                                                                            var B2074 = B1900['%concat']([B1957], B1900['rest'](end_clause__2053));
                                                                            return([
                                                                                B1923,
                                                                                init_clauses__2055,
                                                                                B2073,
                                                                                B2074
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
    var B2081 = $S('rest', 'ralph/core');
    {
        var B2082 = $S('%array', 'ralph/core');
        {
            var B2083 = $S('until', 'ralph/core');
            {
                var B2084 = $S('any?', 'ralph/core');
                {
                    var B2085 = $S('empty?', 'ralph/core');
                    {
                        var B2086 = $S('first', 'ralph/core');
                        B1900['get-setter'](($module)['$core-macros'], 'for-each', function B2087(____2088, clauses__2089, end_clause__2090) {
                            var forms__2091 = $SL.call(arguments, 3);
                            {
                                B1902['check-type'](clauses__2089, B1900['<array>'], 'Non-array set of clauses in for: %=');
                                {
                                    B1902['check-type'](end_clause__2090, B1900['<array>'], 'Non-array end-clause in for: %=');
                                    {
                                        var clauses__2094 = B1900['map'](function B2092(clause__2093) {
                                                B1902['check-type'](clause__2093, B1900['<array>'], 'Non-array clause in for-each: %=');
                                                return(B1900['cons'](B1900['generate-symbol'](), clause__2093));
                                            }, clauses__2089);
                                        {
                                            var endQ__2095 = B1900['generate-symbol']();
                                            {
                                                var values__2096 = B1900['generate-symbol']();
                                                {
                                                    var result__2097 = B1900['generate-symbol']();
                                                    {
                                                        var B2114 = B1900['%concat'];
                                                        {
                                                            var B2115 = B1900['%concat'];
                                                            {
                                                                var vars__2098 = B1900['map'](B1900['second'], clauses__2094);
                                                                {
                                                                    var B2116 = B1900['%concat']([B1900['%concat']([
                                                                                B2049,
                                                                                vars__2098
                                                                            ], forms__2091)], vars__2098);
                                                                    {
                                                                        var B2117 = [
                                                                                B1957,
                                                                                B2116
                                                                            ];
                                                                        {
                                                                            var B2118 = B1900['map'](function B2099(clause__2100) {
                                                                                    return([
                                                                                        B1969,
                                                                                        B1900['first'](clause__2100),
                                                                                        [
                                                                                            B2081,
                                                                                            B1900['first'](clause__2100)
                                                                                        ]
                                                                                    ]);
                                                                                }, clauses__2094);
                                                                            {
                                                                                var B2119 = B2115(B2117, B2118);
                                                                                {
                                                                                    var B2120 = [[
                                                                                                B1969,
                                                                                                values__2096,
                                                                                                B1900['%concat']([B2082], B1900['map'](B1900['first'], clauses__2094))
                                                                                            ]];
                                                                                    {
                                                                                        var form__2101 = B2114(B2119, B2120);
                                                                                        {
                                                                                            var B2121 = B1900['%concat'](B1900['%concat']([], B1900['map'](function B2102(clause__2103) {
                                                                                                    var temp__2104 = clause__2103[0];
                                                                                                    {
                                                                                                        var var__2105 = clause__2103[1];
                                                                                                        {
                                                                                                            var values__2106 = clause__2103[2];
                                                                                                            return([
                                                                                                                temp__2104,
                                                                                                                values__2106
                                                                                                            ]);
                                                                                                        }
                                                                                                    }
                                                                                                }, clauses__2094)), [
                                                                                                    [
                                                                                                        endQ__2095,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        result__2097,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        values__2096,
                                                                                                        B1900['%concat']([B2082], B1900['map'](B1900['first'], clauses__2094))
                                                                                                    ]
                                                                                                ]);
                                                                                            {
                                                                                                var B2122 = [
                                                                                                        B1997,
                                                                                                        endQ__2095,
                                                                                                        [
                                                                                                            B2084,
                                                                                                            B2085,
                                                                                                            values__2096
                                                                                                        ]
                                                                                                    ];
                                                                                                {
                                                                                                    var B2123 = B1900['map'](function B2107(clause__2108) {
                                                                                                            var temp__2109 = clause__2108[0];
                                                                                                            {
                                                                                                                var var__2110 = clause__2108[1];
                                                                                                                {
                                                                                                                    var values__2111 = clause__2108[2];
                                                                                                                    return([
                                                                                                                        var__2110,
                                                                                                                        [
                                                                                                                            B2086,
                                                                                                                            temp__2109
                                                                                                                        ]
                                                                                                                    ]);
                                                                                                                }
                                                                                                            }
                                                                                                        }, clauses__2094);
                                                                                                    {
                                                                                                        var B2112 = B1900['first'](end_clause__2090);
                                                                                                        {
                                                                                                            var B2124 = false;
                                                                                                            if (($T)(B2112)) {
                                                                                                                var end_test__2113 = B2112;
                                                                                                                B2124 = [
                                                                                                                    B1956,
                                                                                                                    end_test__2113,
                                                                                                                    [
                                                                                                                        B1957,
                                                                                                                        [
                                                                                                                            B1969,
                                                                                                                            result__2097,
                                                                                                                            B1900['%concat']([B1957], B1900['rest'](end_clause__2090))
                                                                                                                        ],
                                                                                                                        [
                                                                                                                            B1969,
                                                                                                                            endQ__2095,
                                                                                                                            true
                                                                                                                        ]
                                                                                                                    ],
                                                                                                                    form__2101
                                                                                                                ];
                                                                                                            } else
                                                                                                                B2124 = form__2101;
                                                                                                            {
                                                                                                                var B2125 = [
                                                                                                                        B1923,
                                                                                                                        B2123,
                                                                                                                        B2124
                                                                                                                    ];
                                                                                                                {
                                                                                                                    var B2126 = [
                                                                                                                            B2083,
                                                                                                                            B2122,
                                                                                                                            B2125
                                                                                                                        ];
                                                                                                                    return([
                                                                                                                        B1923,
                                                                                                                        B2121,
                                                                                                                        B2126,
                                                                                                                        result__2097
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
B1900['get-setter'](($module)['$core-macros'], 'select', function B2130(____2131, value__2132, test__2133) {
    var cases__2134 = $SL.call(arguments, 3);
    {
        var valueT__2135 = B1900['generate-symbol']();
        {
            var testT__2136 = false;
            if (($T)(B1900['instance?'](test__2133, B1900['<symbol>'])))
                testT__2136 = test__2133;
            else
                testT__2136 = B1900['generate-symbol']();
            {
                var test_expression__2137 = false;
                {
                    test_expression__2137 = function B2138(test_value__2139) {
                        return([
                            testT__2136,
                            valueT__2135,
                            test_value__2139
                        ]);
                    };
                    {
                        var B2144 = B1900['concatenate'];
                        {
                            var B2145 = [[
                                        valueT__2135,
                                        value__2132
                                    ]];
                            {
                                var B2146 = false;
                                if (($T)(B1900['instance?'](test__2133, B1900['<symbol>'])))
                                    B2146 = [];
                                else
                                    B2146 = [[
                                            testT__2136,
                                            test__2133
                                        ]];
                                {
                                    var B2147 = B2144(B2145, B2146);
                                    {
                                        var B2148 = B1900['%concat']([B1979], B1900['map'](function B2140(case__2141) {
                                                B1902['check-type'](case__2141, B1900['<array>'], 'Non-array case in select: %=');
                                                {
                                                    var test_forms__2142 = case__2141[0];
                                                    {
                                                        var forms__2143 = $SL.call(case__2141, 1);
                                                        if (($T)(B1900['=='](test_forms__2142, B1978)))
                                                            return(case__2141);
                                                        else {
                                                            B1902['check-type'](test_forms__2142, B1900['<array>'], 'Non-array set of test forms in select: %=');
                                                            return(B1900['%concat']([B1900['%concat']([B1997], B1900['map'](test_expression__2137, test_forms__2142))], forms__2143));
                                                        }
                                                    }
                                                }
                                            }, cases__2134));
                                        return([
                                            B1923,
                                            B2147,
                                            B2148
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
    var B2152 = $S('%get-property', 'ralph/core');
    {
        ($module)['destructure'] = function B2153(bindings__2154, values__2155, form__2156) {
            if (($T)(B1900['instance?'](values__2155, B1900['<symbol>']))) {
                B1902['check-type'](bindings__2154, B1900['<array>'], 'Non-array set of bindings while destructuring: %=');
                {
                    var B2157 = B1902['destructure-parameter-list'](bindings__2154);
                    {
                        var normal_parameters__2158 = B2157[0];
                        {
                            var rest_parameter__2159 = B2157[1];
                            {
                                var keyword_parameters__2160 = B2157[2];
                                {
                                    var i__2161 = B1900['size'](normal_parameters__2158);
                                    return(B1900['reduce'](function B2162(form__2163, binding__2164) {
                                        i__2161 = B1900['-'](i__2161, 1);
                                        if (($T)(B1900['instance?'](binding__2164, B1900['<symbol>'])))
                                            return([
                                                B1923,
                                                [[
                                                        binding__2164,
                                                        [
                                                            B2152,
                                                            values__2155,
                                                            i__2161
                                                        ]
                                                    ]],
                                                form__2163
                                            ]);
                                        else
                                            return(($module)['destructure'](binding__2164, [
                                                B2152,
                                                values__2155,
                                                i__2161
                                            ], form__2163));
                                    }, ($module)['wrap-rest/keys'](form__2156, values__2155, normal_parameters__2158, rest_parameter__2159, keyword_parameters__2160), B1900['reverse'](normal_parameters__2158)));
                                }
                            }
                        }
                    }
                }
            } else {
                var var__2165 = B1900['generate-symbol']();
                return([
                    B1923,
                    [[
                            var__2165,
                            values__2155
                        ]],
                    ($module)['destructure'](bindings__2154, var__2165, form__2156)
                ]);
            }
        };
        B1900['%annotate-function'](($module)['destructure'], 'destructure', false);
    }
}
B1900['get-setter'](($module)['$core-macros'], 'destructuring-bind', function B2167(____2168, bindings__2169, values__2170) {
    var forms__2171 = $SL.call(arguments, 3);
    return(($module)['destructure'](bindings__2169, values__2170, B1900['%concat']([B1957], forms__2171)));
});
B1900['get-setter'](($module)['$core-macros'], 'bind-properties', function B2174(____2175, properties__2176, object__2177) {
    var forms__2178 = $SL.call(arguments, 3);
    {
        var objectT__2179 = B1900['generate-symbol']();
        return(B1900['%concat']([
            B1923,
            B1900['%concat']([[
                    objectT__2179,
                    object__2177
                ]], B1900['map'](function B2180(property__2181) {
                return([
                    property__2181,
                    [
                        B2152,
                        objectT__2179,
                        B1900['symbol-name'](property__2181)
                    ]
                ]);
            }, properties__2176))
        ], forms__2178));
    }
});
B1900['get-setter'](($module)['$core-macros'], 'bind-methods', function B2184(____2185, bindings__2186) {
    var forms__2187 = $SL.call(arguments, 2);
    {
        B1902['check-type'](bindings__2186, B1900['<array>'], 'Non-array set of bindings in bind-methods: %=');
        return(B1900['%concat'](B1900['%concat']([
            B1923,
            B1900['map'](B1900['first'], bindings__2186)
        ], B1900['map'](function B2188(binding__2189) {
            B1902['check-type'](bindings__2186, B1900['<array>'], 'Non-array binding in bind-methods: %=');
            {
                var identifier__2190 = binding__2189[0];
                {
                    var parameter_list__2191 = binding__2189[1];
                    {
                        var forms__2192 = $SL.call(binding__2189, 2);
                        return([
                            B1969,
                            identifier__2190,
                            B1900['%concat']([
                                B2049,
                                parameter_list__2191
                            ], forms__2192)
                        ]);
                    }
                }
            }
        }, bindings__2186)), forms__2187));
    }
});
{
    var B2198 = $S('generate-symbol', 'ralph/core');
    {
        var B2199 = $S('quote', 'ralph/core');
        B1900['get-setter'](($module)['$core-macros'], 'once-only', function B2200(____2201, names__2202) {
            var forms__2203 = $SL.call(arguments, 2);
            {
                var symbols__2206 = B1900['map'](function B2204(name__2205) {
                        return(B1900['generate-symbol']());
                    }, names__2202);
                return([
                    B1923,
                    B1900['%concat']([], B1900['map'](function B2207(symbol__2208) {
                        return([
                            symbol__2208,
                            [B2198]
                        ]);
                    }, symbols__2206)),
                    [
                        B2082,
                        [
                            B2199,
                            B1923
                        ],
                        B1900['%concat']([B2082], B1900['map'](function B2209(symbol__2210, name__2211) {
                            return([
                                B2082,
                                symbol__2210,
                                name__2211
                            ]);
                        }, symbols__2206, names__2202)),
                        B1900['%concat']([
                            B1923,
                            B1900['%concat']([], B1900['map'](function B2212(name__2213, symbol__2214) {
                                return([
                                    name__2213,
                                    symbol__2214
                                ]);
                            }, names__2202, symbols__2206))
                        ], forms__2203)
                    ]
                ]);
            }
        });
    }
}
{
    var B2217 = $S('+', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'inc!', function B2218(____2219, object__2220, value__2221) {
        var B2222 = value__2221;
        {
            var B2223 = false;
            if (($T)(B2222))
                B2223 = B2222;
            else
                B2223 = 1;
            {
                var B2224 = [
                        B2217,
                        object__2220,
                        B2223
                    ];
                return([
                    B1969,
                    object__2220,
                    B2224
                ]);
            }
        }
    });
}
{
    var B2227 = $S('-', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'dec!', function B2228(____2229, object__2230, value__2231) {
        var B2232 = value__2231;
        {
            var B2233 = false;
            if (($T)(B2232))
                B2233 = B2232;
            else
                B2233 = 1;
            {
                var B2234 = [
                        B2227,
                        object__2230,
                        B2233
                    ];
                return([
                    B1969,
                    object__2230,
                    B2234
                ]);
            }
        }
    });
}
{
    ($module)['signal-unsupported-dot-name'] = function B2236(property__2237) {
        return(B1900['signal'](B1901['format-to-string']('Unsupported name for call in dot: %=', property__2237)));
    };
    B1900['%annotate-function'](($module)['signal-unsupported-dot-name'], 'signal-unsupported-dot-name', false);
}
B1900['get-setter'](($module)['$core-macros'], '.', function B2242(____2243, form__2244) {
    var calls__2245 = $SL.call(arguments, 2);
    return(B1900['reduce'](function B2246(form__2247, call__2248) {
        B1902['check-type'](call__2248, B1900['<array>'], 'Non-array call in dot: %=');
        {
            var property__2249 = call__2248[0];
            {
                var arguments__2250 = $SL.call(call__2248, 1);
                {
                    var bindings__2253 = B1900['map'](function B2251(argument__2252) {
                            return([
                                B1900['generate-symbol'](),
                                argument__2252
                            ]);
                        }, arguments__2250);
                    {
                        var formT__2254 = B1900['generate-symbol']();
                        {
                            var B2256 = [[
                                        formT__2254,
                                        form__2247
                                    ]];
                            {
                                var B2257 = B1900['%concat'];
                                {
                                    var B2255 = property__2249;
                                    {
                                        var B2258 = false;
                                        if (($T)(B1900['instance?'](B2255, B1900['<string>'])))
                                            B2258 = property__2249;
                                        else if (($T)(B1900['instance?'](B2255, B1900['<symbol>'])))
                                            B2258 = B1900['symbol-name'](property__2249);
                                        else
                                            B2258 = ($module)['signal-unsupported-dot-name'](property__2249);
                                        {
                                            var B2259 = [
                                                    B2152,
                                                    formT__2254,
                                                    B2258
                                                ];
                                            {
                                                var B2260 = [B2259];
                                                {
                                                    var B2261 = B1900['map'](B1900['first'], bindings__2253);
                                                    {
                                                        var B2262 = B2257(B2260, B2261);
                                                        {
                                                            var B2263 = [
                                                                    B1923,
                                                                    bindings__2253,
                                                                    B2262
                                                                ];
                                                            return([
                                                                B1923,
                                                                B2256,
                                                                B2263
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
    }, form__2244, calls__2245));
});
{
    var B2267 = $S('define', 'ralph/core');
    {
        var B2268 = $S('%make-method', 'ralph/core');
        {
            var B2269 = $S('<object>', 'ralph/core');
            B1900['get-setter'](($module)['$core-macros'], 'define-method', function B2270(env__2271, identifier__2272, parameter_list__2273) {
                var forms__2274 = $SL.call(arguments, 3);
                {
                    var B2275 = false;
                    if (($T)(B1902['setter-identifier?'](identifier__2272)))
                        B2275 = [
                            true,
                            B1902['transform-setter-identifier'](B1900['second'](identifier__2272))
                        ];
                    else
                        B2275 = [
                            false,
                            identifier__2272
                        ];
                    {
                        var setterQ__2276 = B2275[0];
                        {
                            var identifier__2277 = B2275[1];
                            {
                                var B2282 = B1900['not'];
                                {
                                    var B2278 = B1900['instance?'](identifier__2277, B1900['<symbol>']);
                                    {
                                        var B2283 = false;
                                        if (($T)(B2278))
                                            B2283 = B2278;
                                        else
                                            B2283 = setterQ__2276;
                                        {
                                            var B2284 = B2282(B2283);
                                            {
                                                if (($T)(B2284))
                                                    B1900['signal'](B1901['format-to-string']('Identifier not symbol or setter in define-method: %=', identifier__2277));
                                                {
                                                    if (($T)(B1900['empty?'](parameter_list__2273)))
                                                        B1900['signal'](B1901['format-to-string']('Empty parameter-list in define-method: %=', identifier__2277));
                                                    {
                                                        var name__2279 = B1900['symbol-name'](identifier__2277);
                                                        {
                                                            var definition__2280 = B1900['%concat']([
                                                                    B2049,
                                                                    parameter_list__2273
                                                                ], forms__2274);
                                                            {
                                                                var head__2281 = B1900['first'](parameter_list__2273);
                                                                {
                                                                    var B2285 = false;
                                                                    if (($T)(B1900['instance?'](head__2281, B1900['<array>'])))
                                                                        B2285 = B1900['>'](B1900['size'](head__2281), 1);
                                                                    else
                                                                        B2285 = false;
                                                                    {
                                                                        var B2286 = false;
                                                                        if (($T)(B2285))
                                                                            B2286 = B1900['second'](head__2281);
                                                                        else
                                                                            B2286 = B2269;
                                                                        {
                                                                            var B2287 = [
                                                                                    B2268,
                                                                                    name__2279,
                                                                                    definition__2280,
                                                                                    setterQ__2276,
                                                                                    B2286,
                                                                                    identifier__2277
                                                                                ];
                                                                            return([
                                                                                B2267,
                                                                                identifier__2277,
                                                                                B2287
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
    var B2291 = $S('%begin', 'ralph/core');
    {
        var B2292 = $S('%annotate-function', 'ralph/core');
        B1900['get-setter'](($module)['$core-macros'], 'define-function', function B2293(env__2294, identifier__2295, parameter_list__2296) {
            var forms__2297 = $SL.call(arguments, 3);
            {
                var B2298 = false;
                if (($T)(B1902['setter-identifier?'](identifier__2295)))
                    B2298 = [
                        true,
                        B1902['transform-setter-identifier'](B1900['second'](identifier__2295))
                    ];
                else
                    B2298 = [
                        false,
                        identifier__2295
                    ];
                {
                    var setterQ__2299 = B2298[0];
                    {
                        var identifier__2300 = B2298[1];
                        {
                            var B2304 = B1900['not'];
                            {
                                var B2301 = B1900['instance?'](identifier__2300, B1900['<symbol>']);
                                {
                                    var B2305 = false;
                                    if (($T)(B2301))
                                        B2305 = B2301;
                                    else
                                        B2305 = setterQ__2299;
                                    {
                                        var B2306 = B2304(B2305);
                                        {
                                            if (($T)(B2306))
                                                B1900['signal'](B1901['format-to-string']('Identifier not symbol or setter in define-function: %=', identifier__2300));
                                            {
                                                var name__2302 = B1900['symbol-name'](identifier__2300);
                                                {
                                                    var definition__2303 = B1900['%concat']([
                                                            B2049,
                                                            parameter_list__2296
                                                        ], forms__2297);
                                                    {
                                                        B1900['get-setter'](env__2294, 'module', 'functions', name__2302, definition__2303);
                                                        return([
                                                            B2291,
                                                            [
                                                                B2267,
                                                                identifier__2300,
                                                                definition__2303
                                                            ],
                                                            [
                                                                B2292,
                                                                identifier__2300,
                                                                name__2302,
                                                                setterQ__2299
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
    var B2308 = $S('%make-generic', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'define-generic', function B2309(____2310, identifier__2311, arguments__2312) {
        var superflous__2313 = $SL.call(arguments, 3);
        return([
            B2267,
            identifier__2311,
            [
                B2308,
                B1900['symbol-name'](identifier__2311)
            ]
        ]);
    });
}
{
    var B2317 = $S('%make-class', 'ralph/core');
    {
        var B2318 = $S('%set', 'ralph/core');
        {
            var B2319 = $S('%native', 'ralph/core');
            B1900['get-setter'](($module)['$core-macros'], 'define-class', function B2320(____2321, identifier__2322, superclass__2323) {
                var properties__2324 = $SL.call(arguments, 3);
                {
                    var B2329 = false;
                    if (($T)(B1900['not'](B1900['empty?'](superclass__2323))))
                        B2329 = B1900['first'](superclass__2323);
                    else
                        B2329 = false;
                    {
                        var B2330 = B1900['%concat']([B1908], B1900['reduce1'](B1900['concatenate'], B1900['map'](function B2325(property__2326) {
                                if (($T)(B1900['instance?'](property__2326, B1900['<array>'])))
                                    return([
                                        B1900['symbol-name'](B1900['first'](property__2326)),
                                        [
                                            B2049,
                                            [],
                                            B1900['second'](property__2326)
                                        ]
                                    ]);
                                else
                                    return([
                                        B1900['symbol-name'](property__2326),
                                        false
                                    ]);
                            }, properties__2324)));
                        {
                            var B2335 = [
                                    B1945,
                                    identifier__2322,
                                    [],
                                    B1900['%concat']([B2291], B1900['map'](function B2327(property__2328) {
                                        var B2331 = [
                                                B2319,
                                                'this'
                                            ];
                                        {
                                            var B2332 = false;
                                            if (($T)(B1900['instance?'](property__2328, B1900['<array>'])))
                                                B2332 = B1900['symbol-name'](B1900['first'](property__2328));
                                            else
                                                B2332 = B1900['symbol-name'](property__2328);
                                            {
                                                var B2333 = [
                                                        B2152,
                                                        B2331,
                                                        B2332
                                                    ];
                                                {
                                                    var B2334 = [
                                                            B2319,
                                                            'undefined'
                                                        ];
                                                    return([
                                                        B2318,
                                                        B2333,
                                                        B2334
                                                    ]);
                                                }
                                            }
                                        }
                                    }, properties__2324))
                                ];
                            {
                                var B2336 = [
                                        B2317,
                                        B2329,
                                        B2330,
                                        B2335
                                    ];
                                return([
                                    B2267,
                                    identifier__2322,
                                    B2336
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
    var B2338 = $S('define-function', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'define-macro', function B2339(____2340, identifier__2341, parameter_list__2342) {
        var forms__2343 = $SL.call(arguments, 3);
        {
            B1902['check-type'](identifier__2341, B1900['<symbol>'], 'Non-symbol identifier in define-macro: %=');
            {
                B1902['check-type'](parameter_list__2342, B1900['<array>'], 'Non-array parameter-list in define-macro: %=');
                return([
                    B1957,
                    B1900['%concat']([
                        B2338,
                        identifier__2341,
                        B1900['%concat']([B1900['generate-symbol']()], parameter_list__2342)
                    ], forms__2343),
                    [
                        B1969,
                        [
                            B2152,
                            identifier__2341,
                            '%macro?'
                        ],
                        true
                    ]
                ]);
            }
        }
    });
}
B1900['get-setter'](($module)['$core-macros'], 'define-symbol-macro', function B2345(____2346, identifier__2347, parameter_list__2348) {
    var forms__2349 = $SL.call(arguments, 3);
    {
        B1902['check-type'](identifier__2347, B1900['<symbol>'], 'Non-symbol identifier in define-symbol-macro: %=');
        {
            B1902['check-type'](parameter_list__2348, B1900['<array>'], 'Non-array parameter-list in define-symbol-macro: %=');
            return([
                B1957,
                B1900['%concat']([
                    B2338,
                    identifier__2347,
                    []
                ], forms__2349),
                [
                    B1969,
                    [
                        B2152,
                        identifier__2347,
                        '%symbol-macro?'
                    ],
                    true
                ]
            ]);
        }
    }
});
{
    var B2351 = $S('next-method', 'ralph/core');
    B1900['get-setter'](($module)['$core-macros'], 'call-next-method', function B2352(____2353) {
        var superflous__2354 = $SL.call(arguments, 1);
        return([
            [
                B2152,
                B2351,
                'apply'
            ],
            [
                B2319,
                'null'
            ],
            B1946
        ]);
    });
}
{
    var B2357 = $S('%make-exit-function', 'ralph/core');
    {
        var B2358 = $S('%try', 'ralph/core');
        {
            var B2359 = $S('instance?', 'ralph/core');
            {
                var B2360 = $S('<non-local-exit>', 'ralph/core');
                {
                    var B2361 = $S('%infix', 'ralph/core');
                    {
                        var B2362 = $S('signal', 'ralph/core');
                        B1900['get-setter'](($module)['$core-macros'], 'block', function B2363(____2364, name__2365) {
                            var body__2366 = $SL.call(arguments, 2);
                            {
                                var B2367 = false;
                                if (($T)(B1900['not'](B1900['empty?'](name__2365))))
                                    B2367 = B1900['first'](name__2365);
                                else
                                    B2367 = false;
                                if (($T)(B2367)) {
                                    var name__2368 = B2367;
                                    {
                                        var block_var__2369 = B1900['generate-symbol']();
                                        {
                                            var condition_var__2370 = B1900['generate-symbol']();
                                            return([
                                                B1923,
                                                [
                                                    [
                                                        name__2368,
                                                        [B2357]
                                                    ],
                                                    [
                                                        block_var__2369,
                                                        B1900['%concat']([
                                                            B2049,
                                                            []
                                                        ], body__2366)
                                                    ]
                                                ],
                                                [
                                                    B2358,
                                                    [block_var__2369],
                                                    condition_var__2370,
                                                    [
                                                        B1956,
                                                        [
                                                            B1990,
                                                            [
                                                                B2359,
                                                                condition_var__2370,
                                                                B2360
                                                            ],
                                                            [
                                                                B2361,
                                                                '===',
                                                                [
                                                                    B2152,
                                                                    condition_var__2370,
                                                                    'identifier'
                                                                ],
                                                                [
                                                                    B2152,
                                                                    name__2368,
                                                                    'identifier'
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B2152,
                                                            condition_var__2370,
                                                            'return-value'
                                                        ],
                                                        [
                                                            B2362,
                                                            condition_var__2370
                                                        ]
                                                    ]
                                                ]
                                            ]);
                                        }
                                    }
                                } else
                                    return(B1900['%concat']([B1957], body__2366));
                            }
                        });
                    }
                }
            }
        }
    }
}
{
    ($module)['$core-symbol-macros'] = B1900['make-plain-object']();
    ($module)['%export']('$core-symbol-macros', ($module)['$core-symbol-macros']);
}
{
    var B2372 = $S('%next-method', 'ralph/core');
    {
        var B2373 = $S('%this-method');
        B1900['get-setter'](($module)['$core-symbol-macros'], 'next-method', function B2374(____2375) {
            var superflous__2376 = $SL.call(arguments, 1);
            return([
                B2372,
                B2373
            ]);
        });
    }
}
{
    ($module)['$internal-macros'] = B1900['make-plain-object']();
    ($module)['%export']('$internal-macros', ($module)['$internal-macros']);
}
{
    var B2379 = $S('%quote', 'ralph/core');
    {
        ($module)['transform-quoted'] = function B2380(form__2381) {
            var B2382 = form__2381;
            if (($T)(B1900['instance?'](B2382, B1900['<array>'])))
                return(B1900['%concat']([B2082], B1900['map'](($module)['transform-quoted'], form__2381)));
            else if (($T)(B1900['instance?'](B2382, B1900['<symbol>'])))
                return([
                    B2379,
                    form__2381
                ]);
            else
                return(form__2381);
        };
        B1900['%annotate-function'](($module)['transform-quoted'], 'transform-quoted', false);
    }
}
B1900['get-setter'](($module)['$internal-macros'], 'quote', function B2384(____2385, form__2386) {
    var superflous__2387 = $SL.call(arguments, 2);
    return(($module)['transform-quoted'](form__2386));
});
B1900['get-setter'](($module)['$internal-macros'], 'begin', function B2390(____2391) {
    var forms__2392 = $SL.call(arguments, 1);
    {
        var B2393 = B1900['size'](forms__2392);
        if (($T)(B1900['=='](B2393, 0)))
            return(false);
        else if (($T)(B1900['=='](B2393, 1)))
            return(B1900['first'](forms__2392));
        else
            return(B1900['%concat']([B2291], forms__2392));
    }
});
{
    var B2396 = $S('%bind', 'ralph/core');
    B1900['get-setter'](($module)['$internal-macros'], 'bind', function B2397(____2398, bindings__2399) {
        var forms__2400 = $SL.call(arguments, 2);
        return(B1900['reduce'](function B2401(form__2402, binding__2403) {
            var B2404 = false;
            if (($T)(B1900['instance?'](binding__2403, B1900['<symbol>'])))
                B2404 = [
                    binding__2403,
                    false
                ];
            else
                B2404 = binding__2403;
            return([
                B2396,
                B2404,
                form__2402
            ]);
        }, B1900['%concat']([B1957], forms__2400), B1900['reverse'](bindings__2399)));
    });
}
B1900['get-setter'](($module)['$internal-macros'], 'method', function B2406(____2407, parameter_list__2408) {
    var forms__2409 = $SL.call(arguments, 2);
    return(($module)['named-method'](B1900['generate-symbol'](), parameter_list__2408, B1900['%concat']([B1957], forms__2409)));
});
{
    var B2411 = $S('%while', 'ralph/core');
    B1900['get-setter'](($module)['$internal-macros'], 'while', function B2412(____2413, test__2414) {
        var forms__2415 = $SL.call(arguments, 2);
        return([
            B2411,
            test__2414,
            B1900['%concat']([B1957], forms__2415)
        ]);
    });
}
{
    var B2417 = $S('%if', 'ralph/core');
    B1900['get-setter'](($module)['$internal-macros'], 'if', function B2418(____2419, test__2420, then__2421, else__2422) {
        var superflous__2423 = $SL.call(arguments, 4);
        return([
            B2417,
            test__2420,
            then__2421,
            else__2422
        ]);
    });
}
B1900['get-setter'](($module)['$internal-macros'], 'set!', function B2425(____2426, place__2427) {
    var new_values__2428 = $SL.call(arguments, 2);
    {
        var B2429 = false;
        if (($T)(B1900['instance?'](place__2427, B1900['<array>'])))
            B2429 = B1900['not'](B1900['=='](B1900['symbol-name'](B1900['first'](place__2427)), '%get-property'));
        else
            B2429 = false;
        if (($T)(B2429))
            return(B1900['%concat'](B1900['%concat']([B1902['transform-setter-identifier'](B1900['first'](place__2427))], B1900['rest'](place__2427)), new_values__2428));
        else
            return([
                B2318,
                place__2427,
                B1900['first'](new_values__2428)
            ]);
    }
});
{
    var B2432 = $S('%define', 'ralph/core');
    B1900['get-setter'](($module)['$internal-macros'], 'define', function B2433(env__2434, identifier__2435, value__2436) {
        var B2437 = value__2436;
        {
            var B2438 = false;
            if (($T)(B2437))
                B2438 = B2437;
            else
                B2438 = false;
            return([
                B2432,
                identifier__2435,
                B2438
            ]);
        }
    });
}
B1900['get-setter'](($module)['$internal-macros'], 'handler-case', function B2444(____2445, protected_form__2446) {
    var cases__2447 = $SL.call(arguments, 2);
    {
        var condition_var__2448 = B1900['generate-symbol']();
        return([
            B2358,
            protected_form__2446,
            condition_var__2448,
            B1900['%concat']([B1979], B1900['map'](function B2449(case__2450) {
                var B2451 = case__2450[0];
                {
                    var type__2452 = B2451[0];
                    {
                        var B2453 = $SL.call(B2451, 1);
                        {
                            var B2454 = B1900['%keys'](B2453, { 'condition': false });
                            {
                                var condition__2455 = B2454['condition'];
                                {
                                    var body__2456 = $SL.call(case__2450, 1);
                                    {
                                        var B2457 = B1900['concatenate'];
                                        {
                                            var B2458 = [[
                                                        B2359,
                                                        condition_var__2448,
                                                        type__2452
                                                    ]];
                                            {
                                                var B2459 = false;
                                                if (($T)(condition__2455))
                                                    B2459 = [B1900['%concat']([
                                                            B1923,
                                                            [[
                                                                    condition__2455,
                                                                    condition_var__2448
                                                                ]]
                                                        ], body__2456)];
                                                else
                                                    B2459 = body__2456;
                                                return(B2457(B2458, B2459));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, cases__2447))
        ]);
    }
});
{
    ($module)['$internal-symbol-macros'] = B1900['make-plain-object']();
    ($module)['%export']('$internal-symbol-macros', ($module)['$internal-symbol-macros']);
}
