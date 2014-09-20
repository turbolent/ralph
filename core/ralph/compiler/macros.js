require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1930(name__1931, value__1932) {
            var B1934 = (exports);
            return(B1934[name__1931] = value__1932);
        };
        {
            ($module)['%eval'] = function B1933() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1935 = require('ralph/core');
{
    var B1936 = require('ralph/format');
    var B1937 = require('ralph/compiler/utilities');
}
{
    var B1941 = $S('bind-properties', 'ralph/core');
    {
        var B1942 = $S('%keys', 'ralph/core');
        {
            var B1943 = $S('%object', 'ralph/core');
            {
                ($module)['wrap-keys'] = function B1944(form__1945, rest_parameter__1946, keyword_parameters__1947) {
                    var keyword_parametersT__1950 = B1935['map'](function B1948(parameter__1949) {
                            if (($T)(B1935['instance?'](parameter__1949, B1935['<array>'])))
                                return(parameter__1949);
                            else
                                return([
                                    parameter__1949,
                                    false
                                ]);
                        }, keyword_parameters__1947);
                    return([
                        B1941,
                        B1935['map'](B1935['first'], keyword_parametersT__1950),
                        [
                            B1942,
                            rest_parameter__1946,
                            B1935['%concat']([B1943], B1935['reduce1'](B1935['concatenate'], B1935['map'](function B1951(parameter__1952) {
                                var key__1953 = parameter__1952[0];
                                {
                                    var value__1954 = parameter__1952[1];
                                    return([
                                        B1935['symbol-name'](key__1953),
                                        value__1954
                                    ]);
                                }
                            }, keyword_parametersT__1950)))
                        ],
                        form__1945
                    ]);
                };
                B1935['%annotate-function'](($module)['wrap-keys'], 'wrap-keys', false);
            }
        }
    }
}
{
    var B1958 = $S('bind', 'ralph/core');
    {
        var B1959 = $S('%native-call', 'ralph/core');
        {
            ($module)['wrap-rest/keys'] = function B1960(form__1961, all_parameters__1962, normal_parameters__1963, rest_parameter__1964, keyword_parameters__1965) {
                var restQ__1966 = rest_parameter__1964;
                {
                    var B1967 = rest_parameter__1964;
                    {
                        var rest_parameter__1968 = false;
                        if (($T)(B1967))
                            rest_parameter__1968 = B1967;
                        else if (($T)(B1935['not'](B1935['empty?'](keyword_parameters__1965))))
                            rest_parameter__1968 = B1935['generate-symbol']();
                        else
                            rest_parameter__1968 = false;
                        {
                            var formT__1969 = false;
                            if (($T)(B1935['empty?'](keyword_parameters__1965)))
                                formT__1969 = form__1961;
                            else
                                formT__1969 = ($module)['wrap-keys'](form__1961, rest_parameter__1968, keyword_parameters__1965);
                            {
                                var B1970 = restQ__1966;
                                {
                                    var B1971 = false;
                                    if (($T)(B1970))
                                        B1971 = B1970;
                                    else
                                        B1971 = B1935['not'](B1935['empty?'](keyword_parameters__1965));
                                    if (($T)(B1971))
                                        return([
                                            B1958,
                                            [[
                                                    rest_parameter__1968,
                                                    [
                                                        B1959,
                                                        '$SL.call',
                                                        all_parameters__1962,
                                                        B1935['size'](normal_parameters__1963)
                                                    ]
                                                ]],
                                            formT__1969
                                        ]);
                                    else
                                        return(formT__1969);
                                }
                            }
                        }
                    }
                }
            };
            B1935['%annotate-function'](($module)['wrap-rest/keys'], 'wrap-rest/keys', false);
        }
    }
}
{
    ($module)['strip-types'] = function B1974(parameters__1975) {
        return(B1935['map'](function B1976(parameter__1977) {
            if (($T)(B1935['instance?'](parameter__1977, B1935['<array>'])))
                return(B1935['first'](parameter__1977));
            else
                return(parameter__1977);
        }, parameters__1975));
    };
    B1935['%annotate-function'](($module)['strip-types'], 'strip-types', false);
}
{
    var B1980 = $S('%method', 'ralph/core');
    {
        var B1981 = $S('%all-arguments');
        {
            ($module)['named-method'] = function B1982(name__1983, parameter_list__1984, form__1985) {
                var B1986 = B1937['destructure-parameter-list'](parameter_list__1984);
                {
                    var normal_parameters__1987 = B1986[0];
                    {
                        var rest_parameter__1988 = B1986[1];
                        {
                            var keyword_parameters__1989 = B1986[2];
                            return([
                                B1980,
                                name__1983,
                                ($module)['strip-types'](normal_parameters__1987),
                                ($module)['wrap-rest/keys'](form__1985, B1981, normal_parameters__1987, rest_parameter__1988, keyword_parameters__1989)
                            ]);
                        }
                    }
                }
            };
            B1935['%annotate-function'](($module)['named-method'], 'named-method', false);
        }
    }
}
{
    ($module)['$core-macros'] = B1935['make-plain-object']();
    ($module)['%export']('$core-macros', ($module)['$core-macros']);
}
{
    var B1991 = $S('if', 'ralph/core');
    {
        var B1992 = $S('begin', 'ralph/core');
        B1935['get-setter'](($module)['$core-macros'], 'when', function B1993(____1994, test__1995) {
            var forms__1996 = $SL.call(arguments, 2);
            return([
                B1991,
                test__1995,
                B1935['%concat']([B1992], forms__1996),
                false
            ]);
        });
    }
}
{
    var B1998 = $S('not', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'unless', function B1999(____2000, test__2001) {
        var forms__2002 = $SL.call(arguments, 2);
        return([
            B1991,
            [
                B1998,
                test__2001
            ],
            B1935['%concat']([B1992], forms__2002),
            false
        ]);
    });
}
{
    var B2004 = $S('set!', 'ralph/core');
    {
        var B2005 = $S('parallel-set!', 'ralph/core');
        B1935['get-setter'](($module)['$core-macros'], 'parallel-set!', function B2006(____2007, identifier__2008, new_value__2009) {
            var clauses__2010 = $SL.call(arguments, 3);
            if (($T)(B1935['empty?'](clauses__2010)))
                return([
                    B2004,
                    identifier__2008,
                    new_value__2009
                ]);
            else {
                var value__2011 = B1935['generate-symbol']();
                return([
                    B1958,
                    [[
                            value__2011,
                            new_value__2009
                        ]],
                    B1935['%concat']([B2005], clauses__2010),
                    [
                        B2004,
                        identifier__2008,
                        value__2011
                    ]
                ]);
            }
        });
    }
}
{
    var B2013 = $K('else');
    {
        var B2014 = $S('cond', 'ralph/core');
        B1935['get-setter'](($module)['$core-macros'], 'cond', function B2015(____2016) {
            var cases__2017 = $SL.call(arguments, 1);
            if (($T)(B1935['not'](B1935['empty?'](cases__2017)))) {
                var case__2018 = B1935['first'](cases__2017);
                {
                    B1937['check-type'](case__2018, B1935['<array>'], 'Non-array case in cond: %=');
                    {
                        var test__2019 = case__2018[0];
                        {
                            var forms__2020 = $SL.call(case__2018, 1);
                            {
                                var form__2021 = B1935['%concat']([B1992], forms__2020);
                                if (($T)(B1935['=='](test__2019, B2013)))
                                    return(form__2021);
                                else
                                    return([
                                        B1991,
                                        test__2019,
                                        form__2021,
                                        B1935['%concat']([B2014], B1935['rest'](cases__2017))
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
    var B2024 = $S('when', 'ralph/core');
    {
        var B2025 = $S('and', 'ralph/core');
        B1935['get-setter'](($module)['$core-macros'], 'and', function B2026(____2027) {
            var forms__2028 = $SL.call(arguments, 1);
            {
                var B2029 = B1935['size'](forms__2028);
                if (($T)(B1935['=='](B2029, 0)))
                    return(true);
                else if (($T)(B1935['=='](B2029, 1)))
                    return(B1935['first'](forms__2028));
                else
                    return([
                        B2024,
                        B1935['first'](forms__2028),
                        B1935['%concat']([B2025], B1935['rest'](forms__2028))
                    ]);
            }
        });
    }
}
{
    var B2032 = $S('or', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'or', function B2033(____2034) {
        var forms__2035 = $SL.call(arguments, 1);
        {
            var B2036 = B1935['size'](forms__2035);
            if (($T)(B1935['=='](B2036, 0)))
                return(false);
            else if (($T)(B1935['=='](B2036, 1)))
                return(B1935['first'](forms__2035));
            else {
                var value__2037 = B1935['generate-symbol']();
                return([
                    B1958,
                    [[
                            value__2037,
                            B1935['first'](forms__2035)
                        ]],
                    [
                        B1991,
                        value__2037,
                        value__2037,
                        B1935['%concat']([B2032], B1935['rest'](forms__2035))
                    ]
                ]);
            }
        }
    });
}
B1935['get-setter'](($module)['$core-macros'], 'if-bind', function B2039(____2040, binding__2041, consequent__2042, alternate__2043) {
    var superflous__2044 = $SL.call(arguments, 4);
    {
        B1937['check-type'](binding__2041, B1935['<array>'], 'Non-array binding in if-bind: %=');
        {
            var var__2045 = binding__2041[0];
            {
                var value__2046 = binding__2041[1];
                {
                    var temp__2047 = B1935['generate-symbol']();
                    return([
                        B1958,
                        [[
                                temp__2047,
                                value__2046
                            ]],
                        [
                            B1991,
                            temp__2047,
                            [
                                B1958,
                                [[
                                        var__2045,
                                        temp__2047
                                    ]],
                                consequent__2042
                            ],
                            alternate__2043
                        ]
                    ]);
                }
            }
        }
    }
});
{
    var B2049 = $S('while', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'until', function B2050(____2051, test__2052) {
        var forms__2053 = $SL.call(arguments, 2);
        return(B1935['%concat']([
            B2049,
            [
                B1998,
                test__2052
            ]
        ], forms__2053));
    });
}
{
    var B2056 = $S('for', 'ralph/core');
    {
        var B2057 = $S('inc', 'ralph/core');
        {
            var B2058 = $S('binary>=', 'ralph/core');
            B1935['get-setter'](($module)['$core-macros'], 'dotimes', function B2059(____2060, binding__2061) {
                var forms__2062 = $SL.call(arguments, 2);
                {
                    B1937['check-type'](binding__2061, B1935['<array>'], 'Non-array binding in dotimes: %=');
                    {
                        var temp__2063 = B1935['generate-symbol']();
                        {
                            var var__2064 = binding__2061[0];
                            {
                                var count__2065 = binding__2061[1];
                                {
                                    var result__2066 = binding__2061[2];
                                    {
                                        B1937['check-type'](var__2064, B1935['<symbol>'], 'Non-symbol var in dotimes: %=');
                                        {
                                            var B2068 = [[
                                                        temp__2063,
                                                        count__2065
                                                    ]];
                                            {
                                                var B2069 = B1935['%concat'];
                                                {
                                                    var B2070 = [[
                                                                var__2064,
                                                                0,
                                                                [
                                                                    B2057,
                                                                    var__2064
                                                                ]
                                                            ]];
                                                    {
                                                        var B2071 = [
                                                                B2058,
                                                                var__2064,
                                                                temp__2063
                                                            ];
                                                        {
                                                            var B2067 = result__2066;
                                                            {
                                                                var B2072 = false;
                                                                if (($T)(B2067))
                                                                    B2072 = B2067;
                                                                else
                                                                    B2072 = false;
                                                                {
                                                                    var B2073 = [
                                                                            B2071,
                                                                            B2072
                                                                        ];
                                                                    {
                                                                        var B2074 = [
                                                                                B2056,
                                                                                B2070,
                                                                                B2073
                                                                            ];
                                                                        {
                                                                            var B2075 = B2069(B2074, forms__2062);
                                                                            return([
                                                                                B1958,
                                                                                B2068,
                                                                                B2075
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
    var B2084 = $S('method', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'for', function B2085(____2086, clauses__2087, end_clause__2088) {
        var forms__2089 = $SL.call(arguments, 3);
        {
            B1937['check-type'](clauses__2087, B1935['<array>'], 'Non-array set of clauses in for: %=');
            {
                B1937['check-type'](end_clause__2088, B1935['<array>'], 'Non-array end-clause in for: %=');
                {
                    var init_clauses__2090 = [];
                    {
                        var next_clauses__2091 = [];
                        {
                            var vars__2092 = B1935['map'](B1935['first'], clauses__2087);
                            {
                                var B2093 = clauses__2087;
                                {
                                    var B2094 = false;
                                    {
                                        var B2095 = false;
                                        {
                                            var B2096 = [B2093];
                                            {
                                                while (true) {
                                                    var B2102 = B1935['not'];
                                                    {
                                                        var B2097 = B2094;
                                                        {
                                                            var B2103 = false;
                                                            if (($T)(B2097))
                                                                B2103 = B2097;
                                                            else
                                                                B2103 = B1935['any?'](B1935['empty?'], B2096);
                                                            {
                                                                var B2104 = B2102(B2103);
                                                                if (($T)(B2104)) {
                                                                    var clause__2098 = B1935['first'](B2093);
                                                                    {
                                                                        (function B2099(clause__2100) {
                                                                            B1937['check-type'](clause__2100, B1935['<array>'], 'Non-array clause in for: %=');
                                                                            {
                                                                                B1935['push-last'](init_clauses__2090, B1935['slice'](clause__2100, 0, 2));
                                                                                {
                                                                                    B1935['push-last'](next_clauses__2091, B1935['first'](clause__2100));
                                                                                    return(B1935['push-last'](next_clauses__2091, B1935['third'](clause__2100)));
                                                                                }
                                                                            }
                                                                        }(clause__2098));
                                                                        {
                                                                            B2093 = B1935['rest'](B2093);
                                                                            B2096 = [B2093];
                                                                        }
                                                                    }
                                                                } else
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                }
                                                {
                                                    B2095;
                                                    {
                                                        var B2101 = B1935['empty?'](end_clause__2088);
                                                        {
                                                            var B2105 = false;
                                                            if (($T)(B2101))
                                                                B2105 = B2101;
                                                            else
                                                                B2105 = [
                                                                    B1998,
                                                                    B1935['first'](end_clause__2088)
                                                                ];
                                                            {
                                                                var B2106 = B1935['%concat']([B1935['%concat']([
                                                                            B2084,
                                                                            vars__2092
                                                                        ], forms__2089)], vars__2092);
                                                                {
                                                                    var B2107 = B1935['%concat']([B2005], next_clauses__2091);
                                                                    {
                                                                        var B2108 = [
                                                                                B2049,
                                                                                B2105,
                                                                                B2106,
                                                                                B2107
                                                                            ];
                                                                        {
                                                                            var B2109 = B1935['%concat']([B1992], B1935['rest'](end_clause__2088));
                                                                            return([
                                                                                B1958,
                                                                                init_clauses__2090,
                                                                                B2108,
                                                                                B2109
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
    var B2116 = $S('rest', 'ralph/core');
    {
        var B2117 = $S('%array', 'ralph/core');
        {
            var B2118 = $S('until', 'ralph/core');
            {
                var B2119 = $S('any?', 'ralph/core');
                {
                    var B2120 = $S('empty?', 'ralph/core');
                    {
                        var B2121 = $S('first', 'ralph/core');
                        B1935['get-setter'](($module)['$core-macros'], 'for-each', function B2122(____2123, clauses__2124, end_clause__2125) {
                            var forms__2126 = $SL.call(arguments, 3);
                            {
                                B1937['check-type'](clauses__2124, B1935['<array>'], 'Non-array set of clauses in for: %=');
                                {
                                    B1937['check-type'](end_clause__2125, B1935['<array>'], 'Non-array end-clause in for: %=');
                                    {
                                        var clauses__2129 = B1935['map'](function B2127(clause__2128) {
                                                B1937['check-type'](clause__2128, B1935['<array>'], 'Non-array clause in for-each: %=');
                                                return(B1935['cons'](B1935['generate-symbol'](), clause__2128));
                                            }, clauses__2124);
                                        {
                                            var endQ__2130 = B1935['generate-symbol']();
                                            {
                                                var values__2131 = B1935['generate-symbol']();
                                                {
                                                    var result__2132 = B1935['generate-symbol']();
                                                    {
                                                        var B2149 = B1935['%concat'];
                                                        {
                                                            var B2150 = B1935['%concat'];
                                                            {
                                                                var vars__2133 = B1935['map'](B1935['second'], clauses__2129);
                                                                {
                                                                    var B2151 = B1935['%concat']([B1935['%concat']([
                                                                                B2084,
                                                                                vars__2133
                                                                            ], forms__2126)], vars__2133);
                                                                    {
                                                                        var B2152 = [
                                                                                B1992,
                                                                                B2151
                                                                            ];
                                                                        {
                                                                            var B2153 = B1935['map'](function B2134(clause__2135) {
                                                                                    return([
                                                                                        B2004,
                                                                                        B1935['first'](clause__2135),
                                                                                        [
                                                                                            B2116,
                                                                                            B1935['first'](clause__2135)
                                                                                        ]
                                                                                    ]);
                                                                                }, clauses__2129);
                                                                            {
                                                                                var B2154 = B2150(B2152, B2153);
                                                                                {
                                                                                    var B2155 = [[
                                                                                                B2004,
                                                                                                values__2131,
                                                                                                B1935['%concat']([B2117], B1935['map'](B1935['first'], clauses__2129))
                                                                                            ]];
                                                                                    {
                                                                                        var form__2136 = B2149(B2154, B2155);
                                                                                        {
                                                                                            var B2156 = B1935['%concat'](B1935['%concat']([], B1935['map'](function B2137(clause__2138) {
                                                                                                    var temp__2139 = clause__2138[0];
                                                                                                    {
                                                                                                        var var__2140 = clause__2138[1];
                                                                                                        {
                                                                                                            var values__2141 = clause__2138[2];
                                                                                                            return([
                                                                                                                temp__2139,
                                                                                                                values__2141
                                                                                                            ]);
                                                                                                        }
                                                                                                    }
                                                                                                }, clauses__2129)), [
                                                                                                    [
                                                                                                        endQ__2130,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        result__2132,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        values__2131,
                                                                                                        B1935['%concat']([B2117], B1935['map'](B1935['first'], clauses__2129))
                                                                                                    ]
                                                                                                ]);
                                                                                            {
                                                                                                var B2157 = [
                                                                                                        B2032,
                                                                                                        endQ__2130,
                                                                                                        [
                                                                                                            B2119,
                                                                                                            B2120,
                                                                                                            values__2131
                                                                                                        ]
                                                                                                    ];
                                                                                                {
                                                                                                    var B2158 = B1935['map'](function B2142(clause__2143) {
                                                                                                            var temp__2144 = clause__2143[0];
                                                                                                            {
                                                                                                                var var__2145 = clause__2143[1];
                                                                                                                {
                                                                                                                    var values__2146 = clause__2143[2];
                                                                                                                    return([
                                                                                                                        var__2145,
                                                                                                                        [
                                                                                                                            B2121,
                                                                                                                            temp__2144
                                                                                                                        ]
                                                                                                                    ]);
                                                                                                                }
                                                                                                            }
                                                                                                        }, clauses__2129);
                                                                                                    {
                                                                                                        var B2147 = B1935['first'](end_clause__2125);
                                                                                                        {
                                                                                                            var B2159 = false;
                                                                                                            if (($T)(B2147)) {
                                                                                                                var end_test__2148 = B2147;
                                                                                                                B2159 = [
                                                                                                                    B1991,
                                                                                                                    end_test__2148,
                                                                                                                    [
                                                                                                                        B1992,
                                                                                                                        [
                                                                                                                            B2004,
                                                                                                                            result__2132,
                                                                                                                            B1935['%concat']([B1992], B1935['rest'](end_clause__2125))
                                                                                                                        ],
                                                                                                                        [
                                                                                                                            B2004,
                                                                                                                            endQ__2130,
                                                                                                                            true
                                                                                                                        ]
                                                                                                                    ],
                                                                                                                    form__2136
                                                                                                                ];
                                                                                                            } else
                                                                                                                B2159 = form__2136;
                                                                                                            {
                                                                                                                var B2160 = [
                                                                                                                        B1958,
                                                                                                                        B2158,
                                                                                                                        B2159
                                                                                                                    ];
                                                                                                                {
                                                                                                                    var B2161 = [
                                                                                                                            B2118,
                                                                                                                            B2157,
                                                                                                                            B2160
                                                                                                                        ];
                                                                                                                    return([
                                                                                                                        B1958,
                                                                                                                        B2156,
                                                                                                                        B2161,
                                                                                                                        result__2132
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
B1935['get-setter'](($module)['$core-macros'], 'select', function B2165(____2166, value__2167, test__2168) {
    var cases__2169 = $SL.call(arguments, 3);
    {
        var valueT__2170 = B1935['generate-symbol']();
        {
            var testT__2171 = false;
            if (($T)(B1935['instance?'](test__2168, B1935['<symbol>'])))
                testT__2171 = test__2168;
            else
                testT__2171 = B1935['generate-symbol']();
            {
                var test_expression__2172 = false;
                {
                    test_expression__2172 = function B2173(test_value__2174) {
                        return([
                            testT__2171,
                            valueT__2170,
                            test_value__2174
                        ]);
                    };
                    {
                        var B2179 = B1935['concatenate'];
                        {
                            var B2180 = [[
                                        valueT__2170,
                                        value__2167
                                    ]];
                            {
                                var B2181 = false;
                                if (($T)(B1935['instance?'](test__2168, B1935['<symbol>'])))
                                    B2181 = [];
                                else
                                    B2181 = [[
                                            testT__2171,
                                            test__2168
                                        ]];
                                {
                                    var B2182 = B2179(B2180, B2181);
                                    {
                                        var B2183 = B1935['%concat']([B2014], B1935['map'](function B2175(case__2176) {
                                                B1937['check-type'](case__2176, B1935['<array>'], 'Non-array case in select: %=');
                                                {
                                                    var test_forms__2177 = case__2176[0];
                                                    {
                                                        var forms__2178 = $SL.call(case__2176, 1);
                                                        if (($T)(B1935['=='](test_forms__2177, B2013)))
                                                            return(case__2176);
                                                        else {
                                                            B1937['check-type'](test_forms__2177, B1935['<array>'], 'Non-array set of test forms in select: %=');
                                                            return(B1935['%concat']([B1935['%concat']([B2032], B1935['map'](test_expression__2172, test_forms__2177))], forms__2178));
                                                        }
                                                    }
                                                }
                                            }, cases__2169));
                                        return([
                                            B1958,
                                            B2182,
                                            B2183
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
    var B2187 = $S('%get-property', 'ralph/core');
    {
        ($module)['destructure'] = function B2188(bindings__2189, values__2190, form__2191) {
            if (($T)(B1935['instance?'](values__2190, B1935['<symbol>']))) {
                B1937['check-type'](bindings__2189, B1935['<array>'], 'Non-array set of bindings while destructuring: %=');
                {
                    var B2192 = B1937['destructure-parameter-list'](bindings__2189);
                    {
                        var normal_parameters__2193 = B2192[0];
                        {
                            var rest_parameter__2194 = B2192[1];
                            {
                                var keyword_parameters__2195 = B2192[2];
                                {
                                    var i__2196 = B1935['size'](normal_parameters__2193);
                                    return(B1935['reduce'](function B2197(form__2198, binding__2199) {
                                        i__2196 = B1935['-'](i__2196, 1);
                                        if (($T)(B1935['instance?'](binding__2199, B1935['<symbol>'])))
                                            return([
                                                B1958,
                                                [[
                                                        binding__2199,
                                                        [
                                                            B2187,
                                                            values__2190,
                                                            i__2196
                                                        ]
                                                    ]],
                                                form__2198
                                            ]);
                                        else
                                            return(($module)['destructure'](binding__2199, [
                                                B2187,
                                                values__2190,
                                                i__2196
                                            ], form__2198));
                                    }, ($module)['wrap-rest/keys'](form__2191, values__2190, normal_parameters__2193, rest_parameter__2194, keyword_parameters__2195), B1935['reverse'](normal_parameters__2193)));
                                }
                            }
                        }
                    }
                }
            } else {
                var var__2200 = B1935['generate-symbol']();
                return([
                    B1958,
                    [[
                            var__2200,
                            values__2190
                        ]],
                    ($module)['destructure'](bindings__2189, var__2200, form__2191)
                ]);
            }
        };
        B1935['%annotate-function'](($module)['destructure'], 'destructure', false);
    }
}
B1935['get-setter'](($module)['$core-macros'], 'destructuring-bind', function B2202(____2203, bindings__2204, values__2205) {
    var forms__2206 = $SL.call(arguments, 3);
    return(($module)['destructure'](bindings__2204, values__2205, B1935['%concat']([B1992], forms__2206)));
});
B1935['get-setter'](($module)['$core-macros'], 'bind-properties', function B2209(____2210, properties__2211, object__2212) {
    var forms__2213 = $SL.call(arguments, 3);
    {
        var objectT__2214 = B1935['generate-symbol']();
        return(B1935['%concat']([
            B1958,
            B1935['%concat']([[
                    objectT__2214,
                    object__2212
                ]], B1935['map'](function B2215(property__2216) {
                return([
                    property__2216,
                    [
                        B2187,
                        objectT__2214,
                        B1935['symbol-name'](property__2216)
                    ]
                ]);
            }, properties__2211))
        ], forms__2213));
    }
});
B1935['get-setter'](($module)['$core-macros'], 'bind-methods', function B2219(____2220, bindings__2221) {
    var forms__2222 = $SL.call(arguments, 2);
    {
        B1937['check-type'](bindings__2221, B1935['<array>'], 'Non-array set of bindings in bind-methods: %=');
        return(B1935['%concat'](B1935['%concat']([
            B1958,
            B1935['map'](B1935['first'], bindings__2221)
        ], B1935['map'](function B2223(binding__2224) {
            B1937['check-type'](bindings__2221, B1935['<array>'], 'Non-array binding in bind-methods: %=');
            {
                var identifier__2225 = binding__2224[0];
                {
                    var parameter_list__2226 = binding__2224[1];
                    {
                        var forms__2227 = $SL.call(binding__2224, 2);
                        return([
                            B2004,
                            identifier__2225,
                            B1935['%concat']([
                                B2084,
                                parameter_list__2226
                            ], forms__2227)
                        ]);
                    }
                }
            }
        }, bindings__2221)), forms__2222));
    }
});
{
    var B2233 = $S('generate-symbol', 'ralph/core');
    {
        var B2234 = $S('quote', 'ralph/core');
        B1935['get-setter'](($module)['$core-macros'], 'once-only', function B2235(____2236, names__2237) {
            var forms__2238 = $SL.call(arguments, 2);
            {
                var symbols__2241 = B1935['map'](function B2239(name__2240) {
                        return(B1935['generate-symbol']());
                    }, names__2237);
                return([
                    B1958,
                    B1935['%concat']([], B1935['map'](function B2242(symbol__2243) {
                        return([
                            symbol__2243,
                            [B2233]
                        ]);
                    }, symbols__2241)),
                    [
                        B2117,
                        [
                            B2234,
                            B1958
                        ],
                        B1935['%concat']([B2117], B1935['map'](function B2244(symbol__2245, name__2246) {
                            return([
                                B2117,
                                symbol__2245,
                                name__2246
                            ]);
                        }, symbols__2241, names__2237)),
                        B1935['%concat']([
                            B1958,
                            B1935['%concat']([], B1935['map'](function B2247(name__2248, symbol__2249) {
                                return([
                                    name__2248,
                                    symbol__2249
                                ]);
                            }, names__2237, symbols__2241))
                        ], forms__2238)
                    ]
                ]);
            }
        });
    }
}
{
    var B2252 = $S('+', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'inc!', function B2253(____2254, object__2255, value__2256) {
        var B2257 = value__2256;
        {
            var B2258 = false;
            if (($T)(B2257))
                B2258 = B2257;
            else
                B2258 = 1;
            {
                var B2259 = [
                        B2252,
                        object__2255,
                        B2258
                    ];
                return([
                    B2004,
                    object__2255,
                    B2259
                ]);
            }
        }
    });
}
{
    var B2262 = $S('-', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'dec!', function B2263(____2264, object__2265, value__2266) {
        var B2267 = value__2266;
        {
            var B2268 = false;
            if (($T)(B2267))
                B2268 = B2267;
            else
                B2268 = 1;
            {
                var B2269 = [
                        B2262,
                        object__2265,
                        B2268
                    ];
                return([
                    B2004,
                    object__2265,
                    B2269
                ]);
            }
        }
    });
}
{
    ($module)['signal-unsupported-dot-name'] = function B2271(property__2272) {
        return(B1935['signal'](B1936['format-to-string']('Unsupported name for call in dot: %=', property__2272)));
    };
    B1935['%annotate-function'](($module)['signal-unsupported-dot-name'], 'signal-unsupported-dot-name', false);
}
B1935['get-setter'](($module)['$core-macros'], '.', function B2277(____2278, form__2279) {
    var calls__2280 = $SL.call(arguments, 2);
    return(B1935['reduce'](function B2281(form__2282, call__2283) {
        B1937['check-type'](call__2283, B1935['<array>'], 'Non-array call in dot: %=');
        {
            var property__2284 = call__2283[0];
            {
                var arguments__2285 = $SL.call(call__2283, 1);
                {
                    var bindings__2288 = B1935['map'](function B2286(argument__2287) {
                            return([
                                B1935['generate-symbol'](),
                                argument__2287
                            ]);
                        }, arguments__2285);
                    {
                        var formT__2289 = B1935['generate-symbol']();
                        {
                            var B2291 = [[
                                        formT__2289,
                                        form__2282
                                    ]];
                            {
                                var B2292 = B1935['%concat'];
                                {
                                    var B2290 = property__2284;
                                    {
                                        var B2293 = false;
                                        if (($T)(B1935['instance?'](B2290, B1935['<string>'])))
                                            B2293 = property__2284;
                                        else if (($T)(B1935['instance?'](B2290, B1935['<symbol>'])))
                                            B2293 = B1935['symbol-name'](property__2284);
                                        else
                                            B2293 = ($module)['signal-unsupported-dot-name'](property__2284);
                                        {
                                            var B2294 = [
                                                    B2187,
                                                    formT__2289,
                                                    B2293
                                                ];
                                            {
                                                var B2295 = [B2294];
                                                {
                                                    var B2296 = B1935['map'](B1935['first'], bindings__2288);
                                                    {
                                                        var B2297 = B2292(B2295, B2296);
                                                        {
                                                            var B2298 = [
                                                                    B1958,
                                                                    bindings__2288,
                                                                    B2297
                                                                ];
                                                            return([
                                                                B1958,
                                                                B2291,
                                                                B2298
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
    }, form__2279, calls__2280));
});
{
    var B2302 = $S('define', 'ralph/core');
    {
        var B2303 = $S('%make-method', 'ralph/core');
        {
            var B2304 = $S('<object>', 'ralph/core');
            B1935['get-setter'](($module)['$core-macros'], 'define-method', function B2305(env__2306, identifier__2307, parameter_list__2308) {
                var forms__2309 = $SL.call(arguments, 3);
                {
                    var B2310 = false;
                    if (($T)(B1937['setter-identifier?'](identifier__2307)))
                        B2310 = [
                            true,
                            B1937['transform-setter-identifier'](B1935['second'](identifier__2307))
                        ];
                    else
                        B2310 = [
                            false,
                            identifier__2307
                        ];
                    {
                        var setterQ__2311 = B2310[0];
                        {
                            var identifier__2312 = B2310[1];
                            {
                                var B2317 = B1935['not'];
                                {
                                    var B2313 = B1935['instance?'](identifier__2312, B1935['<symbol>']);
                                    {
                                        var B2318 = false;
                                        if (($T)(B2313))
                                            B2318 = B2313;
                                        else
                                            B2318 = setterQ__2311;
                                        {
                                            var B2319 = B2317(B2318);
                                            {
                                                if (($T)(B2319))
                                                    B1935['signal'](B1936['format-to-string']('Identifier not symbol or setter in define-method: %=', identifier__2312));
                                                {
                                                    if (($T)(B1935['empty?'](parameter_list__2308)))
                                                        B1935['signal'](B1936['format-to-string']('Empty parameter-list in define-method: %=', identifier__2312));
                                                    {
                                                        var name__2314 = B1935['symbol-name'](identifier__2312);
                                                        {
                                                            var definition__2315 = B1935['%concat']([
                                                                    B2084,
                                                                    parameter_list__2308
                                                                ], forms__2309);
                                                            {
                                                                var head__2316 = B1935['first'](parameter_list__2308);
                                                                {
                                                                    var B2320 = false;
                                                                    if (($T)(B1935['instance?'](head__2316, B1935['<array>'])))
                                                                        B2320 = B1935['>'](B1935['size'](head__2316), 1);
                                                                    else
                                                                        B2320 = false;
                                                                    {
                                                                        var B2321 = false;
                                                                        if (($T)(B2320))
                                                                            B2321 = B1935['second'](head__2316);
                                                                        else
                                                                            B2321 = B2304;
                                                                        {
                                                                            var B2322 = [
                                                                                    B2303,
                                                                                    name__2314,
                                                                                    definition__2315,
                                                                                    setterQ__2311,
                                                                                    B2321,
                                                                                    identifier__2312
                                                                                ];
                                                                            return([
                                                                                B2302,
                                                                                identifier__2312,
                                                                                B2322
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
    var B2326 = $S('%begin', 'ralph/core');
    {
        var B2327 = $S('%annotate-function', 'ralph/core');
        B1935['get-setter'](($module)['$core-macros'], 'define-function', function B2328(env__2329, identifier__2330, parameter_list__2331) {
            var forms__2332 = $SL.call(arguments, 3);
            {
                var B2333 = false;
                if (($T)(B1937['setter-identifier?'](identifier__2330)))
                    B2333 = [
                        true,
                        B1937['transform-setter-identifier'](B1935['second'](identifier__2330))
                    ];
                else
                    B2333 = [
                        false,
                        identifier__2330
                    ];
                {
                    var setterQ__2334 = B2333[0];
                    {
                        var identifier__2335 = B2333[1];
                        {
                            var B2339 = B1935['not'];
                            {
                                var B2336 = B1935['instance?'](identifier__2335, B1935['<symbol>']);
                                {
                                    var B2340 = false;
                                    if (($T)(B2336))
                                        B2340 = B2336;
                                    else
                                        B2340 = setterQ__2334;
                                    {
                                        var B2341 = B2339(B2340);
                                        {
                                            if (($T)(B2341))
                                                B1935['signal'](B1936['format-to-string']('Identifier not symbol or setter in define-function: %=', identifier__2335));
                                            {
                                                var name__2337 = B1935['symbol-name'](identifier__2335);
                                                {
                                                    var definition__2338 = B1935['%concat']([
                                                            B2084,
                                                            parameter_list__2331
                                                        ], forms__2332);
                                                    {
                                                        B1935['get-setter'](env__2329, 'module', 'functions', name__2337, definition__2338);
                                                        return([
                                                            B2326,
                                                            [
                                                                B2302,
                                                                identifier__2335,
                                                                definition__2338
                                                            ],
                                                            [
                                                                B2327,
                                                                identifier__2335,
                                                                name__2337,
                                                                setterQ__2334
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
    var B2343 = $S('%make-generic', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'define-generic', function B2344(____2345, identifier__2346, arguments__2347) {
        var superflous__2348 = $SL.call(arguments, 3);
        return([
            B2302,
            identifier__2346,
            [
                B2343,
                B1935['symbol-name'](identifier__2346)
            ]
        ]);
    });
}
{
    var B2352 = $S('%make-class', 'ralph/core');
    {
        var B2353 = $S('%set', 'ralph/core');
        {
            var B2354 = $S('%native', 'ralph/core');
            B1935['get-setter'](($module)['$core-macros'], 'define-class', function B2355(____2356, identifier__2357, superclass__2358) {
                var properties__2359 = $SL.call(arguments, 3);
                {
                    var B2364 = false;
                    if (($T)(B1935['not'](B1935['empty?'](superclass__2358))))
                        B2364 = B1935['first'](superclass__2358);
                    else
                        B2364 = false;
                    {
                        var B2365 = B1935['%concat']([B1943], B1935['reduce1'](B1935['concatenate'], B1935['map'](function B2360(property__2361) {
                                if (($T)(B1935['instance?'](property__2361, B1935['<array>'])))
                                    return([
                                        B1935['symbol-name'](B1935['first'](property__2361)),
                                        [
                                            B2084,
                                            [],
                                            B1935['second'](property__2361)
                                        ]
                                    ]);
                                else
                                    return([
                                        B1935['symbol-name'](property__2361),
                                        false
                                    ]);
                            }, properties__2359)));
                        {
                            var B2370 = [
                                    B1980,
                                    identifier__2357,
                                    [],
                                    B1935['%concat']([B2326], B1935['map'](function B2362(property__2363) {
                                        var B2366 = [
                                                B2354,
                                                'this'
                                            ];
                                        {
                                            var B2367 = false;
                                            if (($T)(B1935['instance?'](property__2363, B1935['<array>'])))
                                                B2367 = B1935['symbol-name'](B1935['first'](property__2363));
                                            else
                                                B2367 = B1935['symbol-name'](property__2363);
                                            {
                                                var B2368 = [
                                                        B2187,
                                                        B2366,
                                                        B2367
                                                    ];
                                                {
                                                    var B2369 = [
                                                            B2354,
                                                            'undefined'
                                                        ];
                                                    return([
                                                        B2353,
                                                        B2368,
                                                        B2369
                                                    ]);
                                                }
                                            }
                                        }
                                    }, properties__2359))
                                ];
                            {
                                var B2371 = [
                                        B2352,
                                        B2364,
                                        B2365,
                                        B2370
                                    ];
                                return([
                                    B2302,
                                    identifier__2357,
                                    B2371
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
    var B2373 = $S('define-function', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'define-macro', function B2374(____2375, identifier__2376, parameter_list__2377) {
        var forms__2378 = $SL.call(arguments, 3);
        {
            B1937['check-type'](identifier__2376, B1935['<symbol>'], 'Non-symbol identifier in define-macro: %=');
            {
                B1937['check-type'](parameter_list__2377, B1935['<array>'], 'Non-array parameter-list in define-macro: %=');
                return([
                    B1992,
                    B1935['%concat']([
                        B2373,
                        identifier__2376,
                        B1935['%concat']([B1935['generate-symbol']()], parameter_list__2377)
                    ], forms__2378),
                    [
                        B2004,
                        [
                            B2187,
                            identifier__2376,
                            '%macro?'
                        ],
                        true
                    ]
                ]);
            }
        }
    });
}
B1935['get-setter'](($module)['$core-macros'], 'define-symbol-macro', function B2380(____2381, identifier__2382, parameter_list__2383) {
    var forms__2384 = $SL.call(arguments, 3);
    {
        B1937['check-type'](identifier__2382, B1935['<symbol>'], 'Non-symbol identifier in define-symbol-macro: %=');
        {
            B1937['check-type'](parameter_list__2383, B1935['<array>'], 'Non-array parameter-list in define-symbol-macro: %=');
            return([
                B1992,
                B1935['%concat']([
                    B2373,
                    identifier__2382,
                    []
                ], forms__2384),
                [
                    B2004,
                    [
                        B2187,
                        identifier__2382,
                        '%symbol-macro?'
                    ],
                    true
                ]
            ]);
        }
    }
});
{
    var B2386 = $S('next-method', 'ralph/core');
    B1935['get-setter'](($module)['$core-macros'], 'call-next-method', function B2387(____2388) {
        var superflous__2389 = $SL.call(arguments, 1);
        return([
            [
                B2187,
                B2386,
                'apply'
            ],
            [
                B2354,
                'null'
            ],
            B1981
        ]);
    });
}
{
    var B2392 = $S('%make-exit-function', 'ralph/core');
    {
        var B2393 = $S('%try', 'ralph/core');
        {
            var B2394 = $S('instance?', 'ralph/core');
            {
                var B2395 = $S('<non-local-exit>', 'ralph/core');
                {
                    var B2396 = $S('%infix', 'ralph/core');
                    {
                        var B2397 = $S('signal', 'ralph/core');
                        B1935['get-setter'](($module)['$core-macros'], 'block', function B2398(____2399, name__2400) {
                            var body__2401 = $SL.call(arguments, 2);
                            {
                                var B2402 = false;
                                if (($T)(B1935['not'](B1935['empty?'](name__2400))))
                                    B2402 = B1935['first'](name__2400);
                                else
                                    B2402 = false;
                                if (($T)(B2402)) {
                                    var name__2403 = B2402;
                                    {
                                        var block_var__2404 = B1935['generate-symbol']();
                                        {
                                            var condition_var__2405 = B1935['generate-symbol']();
                                            return([
                                                B1958,
                                                [
                                                    [
                                                        name__2403,
                                                        [B2392]
                                                    ],
                                                    [
                                                        block_var__2404,
                                                        B1935['%concat']([
                                                            B2084,
                                                            []
                                                        ], body__2401)
                                                    ]
                                                ],
                                                [
                                                    B2393,
                                                    [block_var__2404],
                                                    condition_var__2405,
                                                    [
                                                        B1991,
                                                        [
                                                            B2025,
                                                            [
                                                                B2394,
                                                                condition_var__2405,
                                                                B2395
                                                            ],
                                                            [
                                                                B2396,
                                                                '===',
                                                                [
                                                                    B2187,
                                                                    condition_var__2405,
                                                                    'identifier'
                                                                ],
                                                                [
                                                                    B2187,
                                                                    name__2403,
                                                                    'identifier'
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B2187,
                                                            condition_var__2405,
                                                            'return-value'
                                                        ],
                                                        [
                                                            B2397,
                                                            condition_var__2405
                                                        ]
                                                    ]
                                                ]
                                            ]);
                                        }
                                    }
                                } else
                                    return(B1935['%concat']([B1992], body__2401));
                            }
                        });
                    }
                }
            }
        }
    }
}
{
    ($module)['$core-symbol-macros'] = B1935['make-plain-object']();
    ($module)['%export']('$core-symbol-macros', ($module)['$core-symbol-macros']);
}
{
    var B2407 = $S('%next-method', 'ralph/core');
    {
        var B2408 = $S('%this-method');
        B1935['get-setter'](($module)['$core-symbol-macros'], 'next-method', function B2409(____2410) {
            var superflous__2411 = $SL.call(arguments, 1);
            return([
                B2407,
                B2408
            ]);
        });
    }
}
{
    ($module)['$internal-macros'] = B1935['make-plain-object']();
    ($module)['%export']('$internal-macros', ($module)['$internal-macros']);
}
{
    var B2414 = $S('%quote', 'ralph/core');
    {
        ($module)['transform-quoted'] = function B2415(form__2416) {
            var B2417 = form__2416;
            if (($T)(B1935['instance?'](B2417, B1935['<array>'])))
                return(B1935['%concat']([B2117], B1935['map'](($module)['transform-quoted'], form__2416)));
            else if (($T)(B1935['instance?'](B2417, B1935['<symbol>'])))
                return([
                    B2414,
                    form__2416
                ]);
            else
                return(form__2416);
        };
        B1935['%annotate-function'](($module)['transform-quoted'], 'transform-quoted', false);
    }
}
B1935['get-setter'](($module)['$internal-macros'], 'quote', function B2419(____2420, form__2421) {
    var superflous__2422 = $SL.call(arguments, 2);
    return(($module)['transform-quoted'](form__2421));
});
B1935['get-setter'](($module)['$internal-macros'], 'begin', function B2425(____2426) {
    var forms__2427 = $SL.call(arguments, 1);
    {
        var B2428 = B1935['size'](forms__2427);
        if (($T)(B1935['=='](B2428, 0)))
            return(false);
        else if (($T)(B1935['=='](B2428, 1)))
            return(B1935['first'](forms__2427));
        else
            return(B1935['%concat']([B2326], forms__2427));
    }
});
{
    var B2431 = $S('%bind', 'ralph/core');
    B1935['get-setter'](($module)['$internal-macros'], 'bind', function B2432(____2433, bindings__2434) {
        var forms__2435 = $SL.call(arguments, 2);
        return(B1935['reduce'](function B2436(form__2437, binding__2438) {
            var B2439 = false;
            if (($T)(B1935['instance?'](binding__2438, B1935['<symbol>'])))
                B2439 = [
                    binding__2438,
                    false
                ];
            else
                B2439 = binding__2438;
            return([
                B2431,
                B2439,
                form__2437
            ]);
        }, B1935['%concat']([B1992], forms__2435), B1935['reverse'](bindings__2434)));
    });
}
B1935['get-setter'](($module)['$internal-macros'], 'method', function B2441(____2442, parameter_list__2443) {
    var forms__2444 = $SL.call(arguments, 2);
    return(($module)['named-method'](B1935['generate-symbol'](), parameter_list__2443, B1935['%concat']([B1992], forms__2444)));
});
{
    var B2446 = $S('%while', 'ralph/core');
    B1935['get-setter'](($module)['$internal-macros'], 'while', function B2447(____2448, test__2449) {
        var forms__2450 = $SL.call(arguments, 2);
        return([
            B2446,
            test__2449,
            B1935['%concat']([B1992], forms__2450)
        ]);
    });
}
{
    var B2452 = $S('%if', 'ralph/core');
    B1935['get-setter'](($module)['$internal-macros'], 'if', function B2453(____2454, test__2455, then__2456, else__2457) {
        var superflous__2458 = $SL.call(arguments, 4);
        return([
            B2452,
            test__2455,
            then__2456,
            else__2457
        ]);
    });
}
B1935['get-setter'](($module)['$internal-macros'], 'set!', function B2460(____2461, place__2462) {
    var new_values__2463 = $SL.call(arguments, 2);
    {
        var B2464 = false;
        if (($T)(B1935['instance?'](place__2462, B1935['<array>'])))
            B2464 = B1935['not'](B1935['=='](B1935['symbol-name'](B1935['first'](place__2462)), '%get-property'));
        else
            B2464 = false;
        if (($T)(B2464))
            return(B1935['%concat'](B1935['%concat']([B1937['transform-setter-identifier'](B1935['first'](place__2462))], B1935['rest'](place__2462)), new_values__2463));
        else
            return([
                B2353,
                place__2462,
                B1935['first'](new_values__2463)
            ]);
    }
});
{
    var B2467 = $S('%define', 'ralph/core');
    B1935['get-setter'](($module)['$internal-macros'], 'define', function B2468(env__2469, identifier__2470, value__2471) {
        var B2472 = value__2471;
        {
            var B2473 = false;
            if (($T)(B2472))
                B2473 = B2472;
            else
                B2473 = false;
            return([
                B2467,
                identifier__2470,
                B2473
            ]);
        }
    });
}
B1935['get-setter'](($module)['$internal-macros'], 'handler-case', function B2479(____2480, protected_form__2481) {
    var cases__2482 = $SL.call(arguments, 2);
    {
        var condition_var__2483 = B1935['generate-symbol']();
        return([
            B2393,
            protected_form__2481,
            condition_var__2483,
            B1935['%concat']([B2014], B1935['map'](function B2484(case__2485) {
                var B2486 = case__2485[0];
                {
                    var type__2487 = B2486[0];
                    {
                        var B2488 = $SL.call(B2486, 1);
                        {
                            var B2489 = B1935['%keys'](B2488, { 'condition': false });
                            {
                                var condition__2490 = B2489['condition'];
                                {
                                    var body__2491 = $SL.call(case__2485, 1);
                                    {
                                        var B2492 = B1935['concatenate'];
                                        {
                                            var B2493 = [[
                                                        B2394,
                                                        condition_var__2483,
                                                        type__2487
                                                    ]];
                                            {
                                                var B2494 = false;
                                                if (($T)(condition__2490))
                                                    B2494 = [B1935['%concat']([
                                                            B1958,
                                                            [[
                                                                    condition__2490,
                                                                    condition_var__2483
                                                                ]]
                                                        ], body__2491)];
                                                else
                                                    B2494 = body__2491;
                                                return(B2492(B2493, B2494));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, cases__2482))
        ]);
    }
});
{
    ($module)['$internal-symbol-macros'] = B1935['make-plain-object']();
    ($module)['%export']('$internal-symbol-macros', ($module)['$internal-symbol-macros']);
}
