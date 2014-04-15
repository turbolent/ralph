require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1920(name__1921, value__1922) {
            var B1924 = (exports);
            return(B1924[name__1921] = value__1922);
        };
        {
            ($module)['%eval'] = function B1923() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1925 = require('ralph/core');
{
    var B1926 = require('ralph/format');
    var B1927 = require('ralph/compiler/utilities');
}
{
    var B1931 = $S('bind-properties', 'ralph/core');
    {
        var B1932 = $S('%keys', 'ralph/core');
        {
            var B1933 = $S('%object', 'ralph/core');
            {
                ($module)['wrap-keys'] = function B1934(form__1935, rest_parameter__1936, keyword_parameters__1937) {
                    var keyword_parametersT__1940 = B1925['map'](function B1938(parameter__1939) {
                            if (($T)(B1925['instance?'](parameter__1939, B1925['<array>'])))
                                return(parameter__1939);
                            else
                                return([
                                    parameter__1939,
                                    false
                                ]);
                        }, keyword_parameters__1937);
                    return([
                        B1931,
                        B1925['map'](B1925['first'], keyword_parametersT__1940),
                        [
                            B1932,
                            rest_parameter__1936,
                            B1925['%concat']([B1933], B1925['reduce1'](B1925['concatenate'], B1925['map'](function B1941(parameter__1942) {
                                var key__1943 = parameter__1942[0];
                                {
                                    var value__1944 = parameter__1942[1];
                                    return([
                                        B1925['symbol-name'](key__1943),
                                        value__1944
                                    ]);
                                }
                            }, keyword_parametersT__1940)))
                        ],
                        form__1935
                    ]);
                };
                B1925['%annotate-function'](($module)['wrap-keys'], 'wrap-keys', false);
            }
        }
    }
}
{
    var B1948 = $S('bind', 'ralph/core');
    {
        var B1949 = $S('%native-call', 'ralph/core');
        {
            ($module)['wrap-rest/keys'] = function B1950(form__1951, all_parameters__1952, normal_parameters__1953, rest_parameter__1954, keyword_parameters__1955) {
                var restQ__1956 = rest_parameter__1954;
                {
                    var B1957 = rest_parameter__1954;
                    {
                        var rest_parameter__1958 = false;
                        if (($T)(B1957))
                            rest_parameter__1958 = B1957;
                        else if (($T)(B1925['not'](B1925['empty?'](keyword_parameters__1955))))
                            rest_parameter__1958 = B1925['generate-symbol']();
                        else
                            rest_parameter__1958 = false;
                        {
                            var formT__1959 = false;
                            if (($T)(B1925['empty?'](keyword_parameters__1955)))
                                formT__1959 = form__1951;
                            else
                                formT__1959 = ($module)['wrap-keys'](form__1951, rest_parameter__1958, keyword_parameters__1955);
                            {
                                var B1960 = restQ__1956;
                                {
                                    var B1961 = false;
                                    if (($T)(B1960))
                                        B1961 = B1960;
                                    else
                                        B1961 = B1925['not'](B1925['empty?'](keyword_parameters__1955));
                                    if (($T)(B1961))
                                        return([
                                            B1948,
                                            [[
                                                    rest_parameter__1958,
                                                    [
                                                        B1949,
                                                        '$SL.call',
                                                        all_parameters__1952,
                                                        B1925['size'](normal_parameters__1953)
                                                    ]
                                                ]],
                                            formT__1959
                                        ]);
                                    else
                                        return(formT__1959);
                                }
                            }
                        }
                    }
                }
            };
            B1925['%annotate-function'](($module)['wrap-rest/keys'], 'wrap-rest/keys', false);
        }
    }
}
{
    ($module)['strip-types'] = function B1964(parameters__1965) {
        return(B1925['map'](function B1966(parameter__1967) {
            if (($T)(B1925['instance?'](parameter__1967, B1925['<array>'])))
                return(B1925['first'](parameter__1967));
            else
                return(parameter__1967);
        }, parameters__1965));
    };
    B1925['%annotate-function'](($module)['strip-types'], 'strip-types', false);
}
{
    var B1970 = $S('%method', 'ralph/core');
    {
        var B1971 = $S('%all-arguments');
        {
            ($module)['named-method'] = function B1972(name__1973, parameter_list__1974, form__1975) {
                var B1976 = B1927['destructure-parameter-list'](parameter_list__1974);
                {
                    var normal_parameters__1977 = B1976[0];
                    {
                        var rest_parameter__1978 = B1976[1];
                        {
                            var keyword_parameters__1979 = B1976[2];
                            return([
                                B1970,
                                name__1973,
                                ($module)['strip-types'](normal_parameters__1977),
                                ($module)['wrap-rest/keys'](form__1975, B1971, normal_parameters__1977, rest_parameter__1978, keyword_parameters__1979)
                            ]);
                        }
                    }
                }
            };
            B1925['%annotate-function'](($module)['named-method'], 'named-method', false);
        }
    }
}
{
    ($module)['$core-macros'] = B1925['make-plain-object']();
    ($module)['%export']('$core-macros', ($module)['$core-macros']);
}
{
    var B1981 = $S('if', 'ralph/core');
    {
        var B1982 = $S('begin', 'ralph/core');
        B1925['get-setter'](($module)['$core-macros'], 'when', function B1983(____1984, test__1985) {
            var forms__1986 = $SL.call(arguments, 2);
            return([
                B1981,
                test__1985,
                B1925['%concat']([B1982], forms__1986),
                false
            ]);
        });
    }
}
{
    var B1988 = $S('not', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'unless', function B1989(____1990, test__1991) {
        var forms__1992 = $SL.call(arguments, 2);
        return([
            B1981,
            [
                B1988,
                test__1991
            ],
            B1925['%concat']([B1982], forms__1992),
            false
        ]);
    });
}
{
    var B1994 = $S('set!', 'ralph/core');
    {
        var B1995 = $S('parallel-set!', 'ralph/core');
        B1925['get-setter'](($module)['$core-macros'], 'parallel-set!', function B1996(____1997, identifier__1998, new_value__1999) {
            var clauses__2000 = $SL.call(arguments, 3);
            if (($T)(B1925['empty?'](clauses__2000)))
                return([
                    B1994,
                    identifier__1998,
                    new_value__1999
                ]);
            else {
                var value__2001 = B1925['generate-symbol']();
                return([
                    B1948,
                    [[
                            value__2001,
                            new_value__1999
                        ]],
                    B1925['%concat']([B1995], clauses__2000),
                    [
                        B1994,
                        identifier__1998,
                        value__2001
                    ]
                ]);
            }
        });
    }
}
{
    var B2003 = $K('else');
    {
        var B2004 = $S('cond', 'ralph/core');
        B1925['get-setter'](($module)['$core-macros'], 'cond', function B2005(____2006) {
            var cases__2007 = $SL.call(arguments, 1);
            if (($T)(B1925['not'](B1925['empty?'](cases__2007)))) {
                var case__2008 = B1925['first'](cases__2007);
                {
                    B1927['check-type'](case__2008, B1925['<array>'], 'Non-array case in cond: %=');
                    {
                        var test__2009 = case__2008[0];
                        {
                            var forms__2010 = $SL.call(case__2008, 1);
                            {
                                var form__2011 = B1925['%concat']([B1982], forms__2010);
                                if (($T)(B1925['=='](test__2009, B2003)))
                                    return(form__2011);
                                else
                                    return([
                                        B1981,
                                        test__2009,
                                        form__2011,
                                        B1925['%concat']([B2004], B1925['rest'](cases__2007))
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
    var B2014 = $S('when', 'ralph/core');
    {
        var B2015 = $S('and', 'ralph/core');
        B1925['get-setter'](($module)['$core-macros'], 'and', function B2016(____2017) {
            var forms__2018 = $SL.call(arguments, 1);
            {
                var B2019 = B1925['size'](forms__2018);
                if (($T)(B1925['=='](B2019, 0)))
                    return(true);
                else if (($T)(B1925['=='](B2019, 1)))
                    return(B1925['first'](forms__2018));
                else
                    return([
                        B2014,
                        B1925['first'](forms__2018),
                        B1925['%concat']([B2015], B1925['rest'](forms__2018))
                    ]);
            }
        });
    }
}
{
    var B2022 = $S('or', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'or', function B2023(____2024) {
        var forms__2025 = $SL.call(arguments, 1);
        {
            var B2026 = B1925['size'](forms__2025);
            if (($T)(B1925['=='](B2026, 0)))
                return(false);
            else if (($T)(B1925['=='](B2026, 1)))
                return(B1925['first'](forms__2025));
            else {
                var value__2027 = B1925['generate-symbol']();
                return([
                    B1948,
                    [[
                            value__2027,
                            B1925['first'](forms__2025)
                        ]],
                    [
                        B1981,
                        value__2027,
                        value__2027,
                        B1925['%concat']([B2022], B1925['rest'](forms__2025))
                    ]
                ]);
            }
        }
    });
}
B1925['get-setter'](($module)['$core-macros'], 'if-bind', function B2029(____2030, binding__2031, consequent__2032, alternate__2033) {
    var superflous__2034 = $SL.call(arguments, 4);
    {
        B1927['check-type'](binding__2031, B1925['<array>'], 'Non-array binding in if-bind: %=');
        {
            var var__2035 = binding__2031[0];
            {
                var value__2036 = binding__2031[1];
                {
                    var temp__2037 = B1925['generate-symbol']();
                    return([
                        B1948,
                        [[
                                temp__2037,
                                value__2036
                            ]],
                        [
                            B1981,
                            temp__2037,
                            [
                                B1948,
                                [[
                                        var__2035,
                                        temp__2037
                                    ]],
                                consequent__2032
                            ],
                            alternate__2033
                        ]
                    ]);
                }
            }
        }
    }
});
{
    var B2039 = $S('while', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'until', function B2040(____2041, test__2042) {
        var forms__2043 = $SL.call(arguments, 2);
        return(B1925['%concat']([
            B2039,
            [
                B1988,
                test__2042
            ]
        ], forms__2043));
    });
}
{
    var B2046 = $S('for', 'ralph/core');
    {
        var B2047 = $S('inc', 'ralph/core');
        {
            var B2048 = $S('binary>=', 'ralph/core');
            B1925['get-setter'](($module)['$core-macros'], 'dotimes', function B2049(____2050, binding__2051) {
                var forms__2052 = $SL.call(arguments, 2);
                {
                    B1927['check-type'](binding__2051, B1925['<array>'], 'Non-array binding in dotimes: %=');
                    {
                        var temp__2053 = B1925['generate-symbol']();
                        {
                            var var__2054 = binding__2051[0];
                            {
                                var count__2055 = binding__2051[1];
                                {
                                    var result__2056 = binding__2051[2];
                                    {
                                        B1927['check-type'](var__2054, B1925['<symbol>'], 'Non-symbol var in dotimes: %=');
                                        {
                                            var B2058 = [[
                                                        temp__2053,
                                                        count__2055
                                                    ]];
                                            {
                                                var B2059 = B1925['%concat'];
                                                {
                                                    var B2060 = [[
                                                                var__2054,
                                                                0,
                                                                [
                                                                    B2047,
                                                                    var__2054
                                                                ]
                                                            ]];
                                                    {
                                                        var B2061 = [
                                                                B2048,
                                                                var__2054,
                                                                temp__2053
                                                            ];
                                                        {
                                                            var B2057 = result__2056;
                                                            {
                                                                var B2062 = false;
                                                                if (($T)(B2057))
                                                                    B2062 = B2057;
                                                                else
                                                                    B2062 = false;
                                                                {
                                                                    var B2063 = [
                                                                            B2061,
                                                                            B2062
                                                                        ];
                                                                    {
                                                                        var B2064 = [
                                                                                B2046,
                                                                                B2060,
                                                                                B2063
                                                                            ];
                                                                        {
                                                                            var B2065 = B2059(B2064, forms__2052);
                                                                            return([
                                                                                B1948,
                                                                                B2058,
                                                                                B2065
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
    var B2074 = $S('method', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'for', function B2075(____2076, clauses__2077, end_clause__2078) {
        var forms__2079 = $SL.call(arguments, 3);
        {
            B1927['check-type'](clauses__2077, B1925['<array>'], 'Non-array set of clauses in for: %=');
            {
                B1927['check-type'](end_clause__2078, B1925['<array>'], 'Non-array end-clause in for: %=');
                {
                    var init_clauses__2080 = [];
                    {
                        var next_clauses__2081 = [];
                        {
                            var vars__2082 = B1925['map'](B1925['first'], clauses__2077);
                            {
                                var B2083 = clauses__2077;
                                {
                                    var B2084 = false;
                                    {
                                        var B2085 = false;
                                        {
                                            var B2086 = [B2083];
                                            {
                                                while (true) {
                                                    var B2092 = B1925['not'];
                                                    {
                                                        var B2087 = B2084;
                                                        {
                                                            var B2093 = false;
                                                            if (($T)(B2087))
                                                                B2093 = B2087;
                                                            else
                                                                B2093 = B1925['any?'](B1925['empty?'], B2086);
                                                            {
                                                                var B2094 = B2092(B2093);
                                                                if (($T)(B2094)) {
                                                                    var clause__2088 = B1925['first'](B2083);
                                                                    {
                                                                        (function B2089(clause__2090) {
                                                                            B1927['check-type'](clause__2090, B1925['<array>'], 'Non-array clause in for: %=');
                                                                            {
                                                                                B1925['push-last'](init_clauses__2080, B1925['slice'](clause__2090, 0, 2));
                                                                                {
                                                                                    B1925['push-last'](next_clauses__2081, B1925['first'](clause__2090));
                                                                                    return(B1925['push-last'](next_clauses__2081, B1925['third'](clause__2090)));
                                                                                }
                                                                            }
                                                                        }(clause__2088));
                                                                        {
                                                                            B2083 = B1925['rest'](B2083);
                                                                            B2086 = [B2083];
                                                                        }
                                                                    }
                                                                } else
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                }
                                                {
                                                    B2085;
                                                    {
                                                        var B2091 = B1925['empty?'](end_clause__2078);
                                                        {
                                                            var B2095 = false;
                                                            if (($T)(B2091))
                                                                B2095 = B2091;
                                                            else
                                                                B2095 = [
                                                                    B1988,
                                                                    B1925['first'](end_clause__2078)
                                                                ];
                                                            {
                                                                var B2096 = B1925['%concat']([B1925['%concat']([
                                                                            B2074,
                                                                            vars__2082
                                                                        ], forms__2079)], vars__2082);
                                                                {
                                                                    var B2097 = B1925['%concat']([B1995], next_clauses__2081);
                                                                    {
                                                                        var B2098 = [
                                                                                B2039,
                                                                                B2095,
                                                                                B2096,
                                                                                B2097
                                                                            ];
                                                                        {
                                                                            var B2099 = B1925['%concat']([B1982], B1925['rest'](end_clause__2078));
                                                                            return([
                                                                                B1948,
                                                                                init_clauses__2080,
                                                                                B2098,
                                                                                B2099
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
    var B2106 = $S('rest', 'ralph/core');
    {
        var B2107 = $S('%array', 'ralph/core');
        {
            var B2108 = $S('until', 'ralph/core');
            {
                var B2109 = $S('any?', 'ralph/core');
                {
                    var B2110 = $S('empty?', 'ralph/core');
                    {
                        var B2111 = $S('first', 'ralph/core');
                        B1925['get-setter'](($module)['$core-macros'], 'for-each', function B2112(____2113, clauses__2114, end_clause__2115) {
                            var forms__2116 = $SL.call(arguments, 3);
                            {
                                B1927['check-type'](clauses__2114, B1925['<array>'], 'Non-array set of clauses in for: %=');
                                {
                                    B1927['check-type'](end_clause__2115, B1925['<array>'], 'Non-array end-clause in for: %=');
                                    {
                                        var clauses__2119 = B1925['map'](function B2117(clause__2118) {
                                                B1927['check-type'](clause__2118, B1925['<array>'], 'Non-array clause in for-each: %=');
                                                return(B1925['cons'](B1925['generate-symbol'](), clause__2118));
                                            }, clauses__2114);
                                        {
                                            var endQ__2120 = B1925['generate-symbol']();
                                            {
                                                var values__2121 = B1925['generate-symbol']();
                                                {
                                                    var result__2122 = B1925['generate-symbol']();
                                                    {
                                                        var B2139 = B1925['%concat'];
                                                        {
                                                            var B2140 = B1925['%concat'];
                                                            {
                                                                var vars__2123 = B1925['map'](B1925['second'], clauses__2119);
                                                                {
                                                                    var B2141 = B1925['%concat']([B1925['%concat']([
                                                                                B2074,
                                                                                vars__2123
                                                                            ], forms__2116)], vars__2123);
                                                                    {
                                                                        var B2142 = [
                                                                                B1982,
                                                                                B2141
                                                                            ];
                                                                        {
                                                                            var B2143 = B1925['map'](function B2124(clause__2125) {
                                                                                    return([
                                                                                        B1994,
                                                                                        B1925['first'](clause__2125),
                                                                                        [
                                                                                            B2106,
                                                                                            B1925['first'](clause__2125)
                                                                                        ]
                                                                                    ]);
                                                                                }, clauses__2119);
                                                                            {
                                                                                var B2144 = B2140(B2142, B2143);
                                                                                {
                                                                                    var B2145 = [[
                                                                                                B1994,
                                                                                                values__2121,
                                                                                                B1925['%concat']([B2107], B1925['map'](B1925['first'], clauses__2119))
                                                                                            ]];
                                                                                    {
                                                                                        var form__2126 = B2139(B2144, B2145);
                                                                                        {
                                                                                            var B2146 = B1925['%concat'](B1925['%concat']([], B1925['map'](function B2127(clause__2128) {
                                                                                                    var temp__2129 = clause__2128[0];
                                                                                                    {
                                                                                                        var var__2130 = clause__2128[1];
                                                                                                        {
                                                                                                            var values__2131 = clause__2128[2];
                                                                                                            return([
                                                                                                                temp__2129,
                                                                                                                values__2131
                                                                                                            ]);
                                                                                                        }
                                                                                                    }
                                                                                                }, clauses__2119)), [
                                                                                                    [
                                                                                                        endQ__2120,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        result__2122,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        values__2121,
                                                                                                        B1925['%concat']([B2107], B1925['map'](B1925['first'], clauses__2119))
                                                                                                    ]
                                                                                                ]);
                                                                                            {
                                                                                                var B2147 = [
                                                                                                        B2022,
                                                                                                        endQ__2120,
                                                                                                        [
                                                                                                            B2109,
                                                                                                            B2110,
                                                                                                            values__2121
                                                                                                        ]
                                                                                                    ];
                                                                                                {
                                                                                                    var B2148 = B1925['map'](function B2132(clause__2133) {
                                                                                                            var temp__2134 = clause__2133[0];
                                                                                                            {
                                                                                                                var var__2135 = clause__2133[1];
                                                                                                                {
                                                                                                                    var values__2136 = clause__2133[2];
                                                                                                                    return([
                                                                                                                        var__2135,
                                                                                                                        [
                                                                                                                            B2111,
                                                                                                                            temp__2134
                                                                                                                        ]
                                                                                                                    ]);
                                                                                                                }
                                                                                                            }
                                                                                                        }, clauses__2119);
                                                                                                    {
                                                                                                        var B2137 = B1925['first'](end_clause__2115);
                                                                                                        {
                                                                                                            var B2149 = false;
                                                                                                            if (($T)(B2137)) {
                                                                                                                var end_test__2138 = B2137;
                                                                                                                B2149 = [
                                                                                                                    B1981,
                                                                                                                    end_test__2138,
                                                                                                                    [
                                                                                                                        B1982,
                                                                                                                        [
                                                                                                                            B1994,
                                                                                                                            result__2122,
                                                                                                                            B1925['%concat']([B1982], B1925['rest'](end_clause__2115))
                                                                                                                        ],
                                                                                                                        [
                                                                                                                            B1994,
                                                                                                                            endQ__2120,
                                                                                                                            true
                                                                                                                        ]
                                                                                                                    ],
                                                                                                                    form__2126
                                                                                                                ];
                                                                                                            } else
                                                                                                                B2149 = form__2126;
                                                                                                            {
                                                                                                                var B2150 = [
                                                                                                                        B1948,
                                                                                                                        B2148,
                                                                                                                        B2149
                                                                                                                    ];
                                                                                                                {
                                                                                                                    var B2151 = [
                                                                                                                            B2108,
                                                                                                                            B2147,
                                                                                                                            B2150
                                                                                                                        ];
                                                                                                                    return([
                                                                                                                        B1948,
                                                                                                                        B2146,
                                                                                                                        B2151,
                                                                                                                        result__2122
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
B1925['get-setter'](($module)['$core-macros'], 'select', function B2155(____2156, value__2157, test__2158) {
    var cases__2159 = $SL.call(arguments, 3);
    {
        var valueT__2160 = B1925['generate-symbol']();
        {
            var testT__2161 = false;
            if (($T)(B1925['instance?'](test__2158, B1925['<symbol>'])))
                testT__2161 = test__2158;
            else
                testT__2161 = B1925['generate-symbol']();
            {
                var test_expression__2162 = false;
                {
                    test_expression__2162 = function B2163(test_value__2164) {
                        return([
                            testT__2161,
                            valueT__2160,
                            test_value__2164
                        ]);
                    };
                    {
                        var B2169 = B1925['concatenate'];
                        {
                            var B2170 = [[
                                        valueT__2160,
                                        value__2157
                                    ]];
                            {
                                var B2171 = false;
                                if (($T)(B1925['instance?'](test__2158, B1925['<symbol>'])))
                                    B2171 = [];
                                else
                                    B2171 = [[
                                            testT__2161,
                                            test__2158
                                        ]];
                                {
                                    var B2172 = B2169(B2170, B2171);
                                    {
                                        var B2173 = B1925['%concat']([B2004], B1925['map'](function B2165(case__2166) {
                                                B1927['check-type'](case__2166, B1925['<array>'], 'Non-array case in select: %=');
                                                {
                                                    var test_forms__2167 = case__2166[0];
                                                    {
                                                        var forms__2168 = $SL.call(case__2166, 1);
                                                        if (($T)(B1925['=='](test_forms__2167, B2003)))
                                                            return(case__2166);
                                                        else {
                                                            B1927['check-type'](test_forms__2167, B1925['<array>'], 'Non-array set of test forms in select: %=');
                                                            return(B1925['%concat']([B1925['%concat']([B2022], B1925['map'](test_expression__2162, test_forms__2167))], forms__2168));
                                                        }
                                                    }
                                                }
                                            }, cases__2159));
                                        return([
                                            B1948,
                                            B2172,
                                            B2173
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
    var B2177 = $S('%get-property', 'ralph/core');
    {
        ($module)['destructure'] = function B2178(bindings__2179, values__2180, form__2181) {
            if (($T)(B1925['instance?'](values__2180, B1925['<symbol>']))) {
                B1927['check-type'](bindings__2179, B1925['<array>'], 'Non-array set of bindings while destructuring: %=');
                {
                    var B2182 = B1927['destructure-parameter-list'](bindings__2179);
                    {
                        var normal_parameters__2183 = B2182[0];
                        {
                            var rest_parameter__2184 = B2182[1];
                            {
                                var keyword_parameters__2185 = B2182[2];
                                {
                                    var i__2186 = B1925['size'](normal_parameters__2183);
                                    return(B1925['reduce'](function B2187(form__2188, binding__2189) {
                                        i__2186 = B1925['-'](i__2186, 1);
                                        if (($T)(B1925['instance?'](binding__2189, B1925['<symbol>'])))
                                            return([
                                                B1948,
                                                [[
                                                        binding__2189,
                                                        [
                                                            B2177,
                                                            values__2180,
                                                            i__2186
                                                        ]
                                                    ]],
                                                form__2188
                                            ]);
                                        else
                                            return(($module)['destructure'](binding__2189, [
                                                B2177,
                                                values__2180,
                                                i__2186
                                            ], form__2188));
                                    }, ($module)['wrap-rest/keys'](form__2181, values__2180, normal_parameters__2183, rest_parameter__2184, keyword_parameters__2185), B1925['reverse'](normal_parameters__2183)));
                                }
                            }
                        }
                    }
                }
            } else {
                var var__2190 = B1925['generate-symbol']();
                return([
                    B1948,
                    [[
                            var__2190,
                            values__2180
                        ]],
                    ($module)['destructure'](bindings__2179, var__2190, form__2181)
                ]);
            }
        };
        B1925['%annotate-function'](($module)['destructure'], 'destructure', false);
    }
}
B1925['get-setter'](($module)['$core-macros'], 'destructuring-bind', function B2192(____2193, bindings__2194, values__2195) {
    var forms__2196 = $SL.call(arguments, 3);
    return(($module)['destructure'](bindings__2194, values__2195, B1925['%concat']([B1982], forms__2196)));
});
B1925['get-setter'](($module)['$core-macros'], 'bind-properties', function B2199(____2200, properties__2201, object__2202) {
    var forms__2203 = $SL.call(arguments, 3);
    {
        var objectT__2204 = B1925['generate-symbol']();
        return(B1925['%concat']([
            B1948,
            B1925['%concat']([[
                    objectT__2204,
                    object__2202
                ]], B1925['map'](function B2205(property__2206) {
                return([
                    property__2206,
                    [
                        B2177,
                        objectT__2204,
                        B1925['symbol-name'](property__2206)
                    ]
                ]);
            }, properties__2201))
        ], forms__2203));
    }
});
B1925['get-setter'](($module)['$core-macros'], 'bind-methods', function B2209(____2210, bindings__2211) {
    var forms__2212 = $SL.call(arguments, 2);
    {
        B1927['check-type'](bindings__2211, B1925['<array>'], 'Non-array set of bindings in bind-methods: %=');
        return(B1925['%concat'](B1925['%concat']([
            B1948,
            B1925['map'](B1925['first'], bindings__2211)
        ], B1925['map'](function B2213(binding__2214) {
            B1927['check-type'](bindings__2211, B1925['<array>'], 'Non-array binding in bind-methods: %=');
            {
                var identifier__2215 = binding__2214[0];
                {
                    var parameter_list__2216 = binding__2214[1];
                    {
                        var forms__2217 = $SL.call(binding__2214, 2);
                        return([
                            B1994,
                            identifier__2215,
                            B1925['%concat']([
                                B2074,
                                parameter_list__2216
                            ], forms__2217)
                        ]);
                    }
                }
            }
        }, bindings__2211)), forms__2212));
    }
});
{
    var B2223 = $S('generate-symbol', 'ralph/core');
    {
        var B2224 = $S('quote', 'ralph/core');
        B1925['get-setter'](($module)['$core-macros'], 'once-only', function B2225(____2226, names__2227) {
            var forms__2228 = $SL.call(arguments, 2);
            {
                var symbols__2231 = B1925['map'](function B2229(name__2230) {
                        return(B1925['generate-symbol']());
                    }, names__2227);
                return([
                    B1948,
                    B1925['%concat']([], B1925['map'](function B2232(symbol__2233) {
                        return([
                            symbol__2233,
                            [B2223]
                        ]);
                    }, symbols__2231)),
                    [
                        B2107,
                        [
                            B2224,
                            B1948
                        ],
                        B1925['%concat']([B2107], B1925['map'](function B2234(symbol__2235, name__2236) {
                            return([
                                B2107,
                                symbol__2235,
                                name__2236
                            ]);
                        }, symbols__2231, names__2227)),
                        B1925['%concat']([
                            B1948,
                            B1925['%concat']([], B1925['map'](function B2237(name__2238, symbol__2239) {
                                return([
                                    name__2238,
                                    symbol__2239
                                ]);
                            }, names__2227, symbols__2231))
                        ], forms__2228)
                    ]
                ]);
            }
        });
    }
}
{
    var B2242 = $S('+', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'inc!', function B2243(____2244, object__2245, value__2246) {
        var B2247 = value__2246;
        {
            var B2248 = false;
            if (($T)(B2247))
                B2248 = B2247;
            else
                B2248 = 1;
            {
                var B2249 = [
                        B2242,
                        object__2245,
                        B2248
                    ];
                return([
                    B1994,
                    object__2245,
                    B2249
                ]);
            }
        }
    });
}
{
    var B2252 = $S('-', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'dec!', function B2253(____2254, object__2255, value__2256) {
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
                    B1994,
                    object__2255,
                    B2259
                ]);
            }
        }
    });
}
{
    ($module)['signal-unsupported-dot-name'] = function B2261(property__2262) {
        return(B1925['signal'](B1926['format-to-string']('Unsupported name for call in dot: %=', property__2262)));
    };
    B1925['%annotate-function'](($module)['signal-unsupported-dot-name'], 'signal-unsupported-dot-name', false);
}
B1925['get-setter'](($module)['$core-macros'], '.', function B2267(____2268, form__2269) {
    var calls__2270 = $SL.call(arguments, 2);
    return(B1925['reduce'](function B2271(form__2272, call__2273) {
        B1927['check-type'](call__2273, B1925['<array>'], 'Non-array call in dot: %=');
        {
            var property__2274 = call__2273[0];
            {
                var arguments__2275 = $SL.call(call__2273, 1);
                {
                    var bindings__2278 = B1925['map'](function B2276(argument__2277) {
                            return([
                                B1925['generate-symbol'](),
                                argument__2277
                            ]);
                        }, arguments__2275);
                    {
                        var formT__2279 = B1925['generate-symbol']();
                        {
                            var B2281 = [[
                                        formT__2279,
                                        form__2272
                                    ]];
                            {
                                var B2282 = B1925['%concat'];
                                {
                                    var B2280 = property__2274;
                                    {
                                        var B2283 = false;
                                        if (($T)(B1925['instance?'](B2280, B1925['<string>'])))
                                            B2283 = property__2274;
                                        else if (($T)(B1925['instance?'](B2280, B1925['<symbol>'])))
                                            B2283 = B1925['symbol-name'](property__2274);
                                        else
                                            B2283 = ($module)['signal-unsupported-dot-name'](property__2274);
                                        {
                                            var B2284 = [
                                                    B2177,
                                                    formT__2279,
                                                    B2283
                                                ];
                                            {
                                                var B2285 = [B2284];
                                                {
                                                    var B2286 = B1925['map'](B1925['first'], bindings__2278);
                                                    {
                                                        var B2287 = B2282(B2285, B2286);
                                                        {
                                                            var B2288 = [
                                                                    B1948,
                                                                    bindings__2278,
                                                                    B2287
                                                                ];
                                                            return([
                                                                B1948,
                                                                B2281,
                                                                B2288
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
    }, form__2269, calls__2270));
});
{
    var B2292 = $S('define', 'ralph/core');
    {
        var B2293 = $S('%make-method', 'ralph/core');
        {
            var B2294 = $S('<object>', 'ralph/core');
            B1925['get-setter'](($module)['$core-macros'], 'define-method', function B2295(env__2296, identifier__2297, parameter_list__2298) {
                var forms__2299 = $SL.call(arguments, 3);
                {
                    var B2300 = false;
                    if (($T)(B1927['setter-identifier?'](identifier__2297)))
                        B2300 = [
                            true,
                            B1927['transform-setter-identifier'](B1925['second'](identifier__2297))
                        ];
                    else
                        B2300 = [
                            false,
                            identifier__2297
                        ];
                    {
                        var setterQ__2301 = B2300[0];
                        {
                            var identifier__2302 = B2300[1];
                            {
                                var B2307 = B1925['not'];
                                {
                                    var B2303 = B1925['instance?'](identifier__2302, B1925['<symbol>']);
                                    {
                                        var B2308 = false;
                                        if (($T)(B2303))
                                            B2308 = B2303;
                                        else
                                            B2308 = setterQ__2301;
                                        {
                                            var B2309 = B2307(B2308);
                                            {
                                                if (($T)(B2309))
                                                    B1925['signal'](B1926['format-to-string']('Identifier not symbol or setter in define-method: %=', identifier__2302));
                                                {
                                                    if (($T)(B1925['empty?'](parameter_list__2298)))
                                                        B1925['signal'](B1926['format-to-string']('Empty parameter-list in define-method: %=', identifier__2302));
                                                    {
                                                        var name__2304 = B1925['symbol-name'](identifier__2302);
                                                        {
                                                            var definition__2305 = B1925['%concat']([
                                                                    B2074,
                                                                    parameter_list__2298
                                                                ], forms__2299);
                                                            {
                                                                var head__2306 = B1925['first'](parameter_list__2298);
                                                                {
                                                                    var B2310 = false;
                                                                    if (($T)(B1925['instance?'](head__2306, B1925['<array>'])))
                                                                        B2310 = B1925['>'](B1925['size'](head__2306), 1);
                                                                    else
                                                                        B2310 = false;
                                                                    {
                                                                        var B2311 = false;
                                                                        if (($T)(B2310))
                                                                            B2311 = B1925['second'](head__2306);
                                                                        else
                                                                            B2311 = B2294;
                                                                        {
                                                                            var B2312 = [
                                                                                    B2293,
                                                                                    name__2304,
                                                                                    definition__2305,
                                                                                    setterQ__2301,
                                                                                    B2311,
                                                                                    identifier__2302
                                                                                ];
                                                                            return([
                                                                                B2292,
                                                                                identifier__2302,
                                                                                B2312
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
    var B2316 = $S('%begin', 'ralph/core');
    {
        var B2317 = $S('%annotate-function', 'ralph/core');
        B1925['get-setter'](($module)['$core-macros'], 'define-function', function B2318(env__2319, identifier__2320, parameter_list__2321) {
            var forms__2322 = $SL.call(arguments, 3);
            {
                var B2323 = false;
                if (($T)(B1927['setter-identifier?'](identifier__2320)))
                    B2323 = [
                        true,
                        B1927['transform-setter-identifier'](B1925['second'](identifier__2320))
                    ];
                else
                    B2323 = [
                        false,
                        identifier__2320
                    ];
                {
                    var setterQ__2324 = B2323[0];
                    {
                        var identifier__2325 = B2323[1];
                        {
                            var B2329 = B1925['not'];
                            {
                                var B2326 = B1925['instance?'](identifier__2325, B1925['<symbol>']);
                                {
                                    var B2330 = false;
                                    if (($T)(B2326))
                                        B2330 = B2326;
                                    else
                                        B2330 = setterQ__2324;
                                    {
                                        var B2331 = B2329(B2330);
                                        {
                                            if (($T)(B2331))
                                                B1925['signal'](B1926['format-to-string']('Identifier not symbol or setter in define-function: %=', identifier__2325));
                                            {
                                                var name__2327 = B1925['symbol-name'](identifier__2325);
                                                {
                                                    var definition__2328 = B1925['%concat']([
                                                            B2074,
                                                            parameter_list__2321
                                                        ], forms__2322);
                                                    {
                                                        B1925['get-setter'](env__2319, 'module', 'functions', name__2327, definition__2328);
                                                        return([
                                                            B2316,
                                                            [
                                                                B2292,
                                                                identifier__2325,
                                                                definition__2328
                                                            ],
                                                            [
                                                                B2317,
                                                                identifier__2325,
                                                                name__2327,
                                                                setterQ__2324
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
    var B2333 = $S('%make-generic', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'define-generic', function B2334(____2335, identifier__2336, arguments__2337) {
        var superflous__2338 = $SL.call(arguments, 3);
        return([
            B2292,
            identifier__2336,
            [
                B2333,
                B1925['symbol-name'](identifier__2336)
            ]
        ]);
    });
}
{
    var B2342 = $S('%make-class', 'ralph/core');
    {
        var B2343 = $S('%set', 'ralph/core');
        {
            var B2344 = $S('%native', 'ralph/core');
            B1925['get-setter'](($module)['$core-macros'], 'define-class', function B2345(____2346, identifier__2347, superclass__2348) {
                var properties__2349 = $SL.call(arguments, 3);
                {
                    var B2354 = false;
                    if (($T)(B1925['not'](B1925['empty?'](superclass__2348))))
                        B2354 = B1925['first'](superclass__2348);
                    else
                        B2354 = false;
                    {
                        var B2355 = B1925['%concat']([B1933], B1925['reduce1'](B1925['concatenate'], B1925['map'](function B2350(property__2351) {
                                if (($T)(B1925['instance?'](property__2351, B1925['<array>'])))
                                    return([
                                        B1925['symbol-name'](B1925['first'](property__2351)),
                                        [
                                            B2074,
                                            [],
                                            B1925['second'](property__2351)
                                        ]
                                    ]);
                                else
                                    return([
                                        B1925['symbol-name'](property__2351),
                                        false
                                    ]);
                            }, properties__2349)));
                        {
                            var B2360 = [
                                    B1970,
                                    identifier__2347,
                                    [],
                                    B1925['%concat']([B2316], B1925['map'](function B2352(property__2353) {
                                        var B2356 = [
                                                B2344,
                                                'this'
                                            ];
                                        {
                                            var B2357 = false;
                                            if (($T)(B1925['instance?'](property__2353, B1925['<array>'])))
                                                B2357 = B1925['symbol-name'](B1925['first'](property__2353));
                                            else
                                                B2357 = B1925['symbol-name'](property__2353);
                                            {
                                                var B2358 = [
                                                        B2177,
                                                        B2356,
                                                        B2357
                                                    ];
                                                {
                                                    var B2359 = [
                                                            B2344,
                                                            'undefined'
                                                        ];
                                                    return([
                                                        B2343,
                                                        B2358,
                                                        B2359
                                                    ]);
                                                }
                                            }
                                        }
                                    }, properties__2349))
                                ];
                            {
                                var B2361 = [
                                        B2342,
                                        B2354,
                                        B2355,
                                        B2360
                                    ];
                                return([
                                    B2292,
                                    identifier__2347,
                                    B2361
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
    var B2363 = $S('define-function', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'define-macro', function B2364(____2365, identifier__2366, parameter_list__2367) {
        var forms__2368 = $SL.call(arguments, 3);
        {
            B1927['check-type'](identifier__2366, B1925['<symbol>'], 'Non-symbol identifier in define-macro: %=');
            {
                B1927['check-type'](parameter_list__2367, B1925['<array>'], 'Non-array parameter-list in define-macro: %=');
                return([
                    B1982,
                    B1925['%concat']([
                        B2363,
                        identifier__2366,
                        B1925['%concat']([B1925['generate-symbol']()], parameter_list__2367)
                    ], forms__2368),
                    [
                        B1994,
                        [
                            B2177,
                            identifier__2366,
                            '%macro?'
                        ],
                        true
                    ]
                ]);
            }
        }
    });
}
B1925['get-setter'](($module)['$core-macros'], 'define-symbol-macro', function B2370(____2371, identifier__2372, parameter_list__2373) {
    var forms__2374 = $SL.call(arguments, 3);
    {
        B1927['check-type'](identifier__2372, B1925['<symbol>'], 'Non-symbol identifier in define-symbol-macro: %=');
        {
            B1927['check-type'](parameter_list__2373, B1925['<array>'], 'Non-array parameter-list in define-symbol-macro: %=');
            return([
                B1982,
                B1925['%concat']([
                    B2363,
                    identifier__2372,
                    []
                ], forms__2374),
                [
                    B1994,
                    [
                        B2177,
                        identifier__2372,
                        '%symbol-macro?'
                    ],
                    true
                ]
            ]);
        }
    }
});
{
    var B2376 = $S('next-method', 'ralph/core');
    B1925['get-setter'](($module)['$core-macros'], 'call-next-method', function B2377(____2378) {
        var superflous__2379 = $SL.call(arguments, 1);
        return([
            [
                B2177,
                B2376,
                'apply'
            ],
            [
                B2344,
                'null'
            ],
            B1971
        ]);
    });
}
{
    var B2382 = $S('%make-exit-function', 'ralph/core');
    {
        var B2383 = $S('%try', 'ralph/core');
        {
            var B2384 = $S('instance?', 'ralph/core');
            {
                var B2385 = $S('<non-local-exit>', 'ralph/core');
                {
                    var B2386 = $S('%infix', 'ralph/core');
                    {
                        var B2387 = $S('signal', 'ralph/core');
                        B1925['get-setter'](($module)['$core-macros'], 'block', function B2388(____2389, name__2390) {
                            var body__2391 = $SL.call(arguments, 2);
                            {
                                var B2392 = false;
                                if (($T)(B1925['not'](B1925['empty?'](name__2390))))
                                    B2392 = B1925['first'](name__2390);
                                else
                                    B2392 = false;
                                if (($T)(B2392)) {
                                    var name__2393 = B2392;
                                    {
                                        var block_var__2394 = B1925['generate-symbol']();
                                        {
                                            var condition_var__2395 = B1925['generate-symbol']();
                                            return([
                                                B1948,
                                                [
                                                    [
                                                        name__2393,
                                                        [B2382]
                                                    ],
                                                    [
                                                        block_var__2394,
                                                        B1925['%concat']([
                                                            B2074,
                                                            []
                                                        ], body__2391)
                                                    ]
                                                ],
                                                [
                                                    B2383,
                                                    [block_var__2394],
                                                    condition_var__2395,
                                                    [
                                                        B1981,
                                                        [
                                                            B2015,
                                                            [
                                                                B2384,
                                                                condition_var__2395,
                                                                B2385
                                                            ],
                                                            [
                                                                B2386,
                                                                '===',
                                                                [
                                                                    B2177,
                                                                    condition_var__2395,
                                                                    'identifier'
                                                                ],
                                                                [
                                                                    B2177,
                                                                    name__2393,
                                                                    'identifier'
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B2177,
                                                            condition_var__2395,
                                                            'return-value'
                                                        ],
                                                        [
                                                            B2387,
                                                            condition_var__2395
                                                        ]
                                                    ]
                                                ]
                                            ]);
                                        }
                                    }
                                } else
                                    return(B1925['%concat']([B1982], body__2391));
                            }
                        });
                    }
                }
            }
        }
    }
}
{
    ($module)['$core-symbol-macros'] = B1925['make-plain-object']();
    ($module)['%export']('$core-symbol-macros', ($module)['$core-symbol-macros']);
}
{
    var B2397 = $S('%next-method', 'ralph/core');
    {
        var B2398 = $S('%this-method');
        B1925['get-setter'](($module)['$core-symbol-macros'], 'next-method', function B2399(____2400) {
            var superflous__2401 = $SL.call(arguments, 1);
            return([
                B2397,
                B2398
            ]);
        });
    }
}
{
    ($module)['$internal-macros'] = B1925['make-plain-object']();
    ($module)['%export']('$internal-macros', ($module)['$internal-macros']);
}
{
    var B2404 = $S('%quote', 'ralph/core');
    {
        ($module)['transform-quoted'] = function B2405(form__2406) {
            var B2407 = form__2406;
            if (($T)(B1925['instance?'](B2407, B1925['<array>'])))
                return(B1925['%concat']([B2107], B1925['map'](($module)['transform-quoted'], form__2406)));
            else if (($T)(B1925['instance?'](B2407, B1925['<symbol>'])))
                return([
                    B2404,
                    form__2406
                ]);
            else
                return(form__2406);
        };
        B1925['%annotate-function'](($module)['transform-quoted'], 'transform-quoted', false);
    }
}
B1925['get-setter'](($module)['$internal-macros'], 'quote', function B2409(____2410, form__2411) {
    var superflous__2412 = $SL.call(arguments, 2);
    return(($module)['transform-quoted'](form__2411));
});
B1925['get-setter'](($module)['$internal-macros'], 'begin', function B2415(____2416) {
    var forms__2417 = $SL.call(arguments, 1);
    {
        var B2418 = B1925['size'](forms__2417);
        if (($T)(B1925['=='](B2418, 0)))
            return(false);
        else if (($T)(B1925['=='](B2418, 1)))
            return(B1925['first'](forms__2417));
        else
            return(B1925['%concat']([B2316], forms__2417));
    }
});
{
    var B2421 = $S('%bind', 'ralph/core');
    B1925['get-setter'](($module)['$internal-macros'], 'bind', function B2422(____2423, bindings__2424) {
        var forms__2425 = $SL.call(arguments, 2);
        return(B1925['reduce'](function B2426(form__2427, binding__2428) {
            var B2429 = false;
            if (($T)(B1925['instance?'](binding__2428, B1925['<symbol>'])))
                B2429 = [
                    binding__2428,
                    false
                ];
            else
                B2429 = binding__2428;
            return([
                B2421,
                B2429,
                form__2427
            ]);
        }, B1925['%concat']([B1982], forms__2425), B1925['reverse'](bindings__2424)));
    });
}
B1925['get-setter'](($module)['$internal-macros'], 'method', function B2431(____2432, parameter_list__2433) {
    var forms__2434 = $SL.call(arguments, 2);
    return(($module)['named-method'](B1925['generate-symbol'](), parameter_list__2433, B1925['%concat']([B1982], forms__2434)));
});
{
    var B2436 = $S('%while', 'ralph/core');
    B1925['get-setter'](($module)['$internal-macros'], 'while', function B2437(____2438, test__2439) {
        var forms__2440 = $SL.call(arguments, 2);
        return([
            B2436,
            test__2439,
            B1925['%concat']([B1982], forms__2440)
        ]);
    });
}
{
    var B2442 = $S('%if', 'ralph/core');
    B1925['get-setter'](($module)['$internal-macros'], 'if', function B2443(____2444, test__2445, then__2446, else__2447) {
        var superflous__2448 = $SL.call(arguments, 4);
        return([
            B2442,
            test__2445,
            then__2446,
            else__2447
        ]);
    });
}
B1925['get-setter'](($module)['$internal-macros'], 'set!', function B2450(____2451, place__2452) {
    var new_values__2453 = $SL.call(arguments, 2);
    {
        var B2454 = false;
        if (($T)(B1925['instance?'](place__2452, B1925['<array>'])))
            B2454 = B1925['not'](B1925['=='](B1925['symbol-name'](B1925['first'](place__2452)), '%get-property'));
        else
            B2454 = false;
        if (($T)(B2454))
            return(B1925['%concat'](B1925['%concat']([B1927['transform-setter-identifier'](B1925['first'](place__2452))], B1925['rest'](place__2452)), new_values__2453));
        else
            return([
                B2343,
                place__2452,
                B1925['first'](new_values__2453)
            ]);
    }
});
{
    var B2457 = $S('%define', 'ralph/core');
    B1925['get-setter'](($module)['$internal-macros'], 'define', function B2458(env__2459, identifier__2460, value__2461) {
        var B2462 = value__2461;
        {
            var B2463 = false;
            if (($T)(B2462))
                B2463 = B2462;
            else
                B2463 = false;
            return([
                B2457,
                identifier__2460,
                B2463
            ]);
        }
    });
}
B1925['get-setter'](($module)['$internal-macros'], 'handler-case', function B2469(____2470, protected_form__2471) {
    var cases__2472 = $SL.call(arguments, 2);
    {
        var condition_var__2473 = B1925['generate-symbol']();
        return([
            B2383,
            protected_form__2471,
            condition_var__2473,
            B1925['%concat']([B2004], B1925['map'](function B2474(case__2475) {
                var B2476 = case__2475[0];
                {
                    var type__2477 = B2476[0];
                    {
                        var B2478 = $SL.call(B2476, 1);
                        {
                            var B2479 = B1925['%keys'](B2478, { 'condition': false });
                            {
                                var condition__2480 = B2479['condition'];
                                {
                                    var body__2481 = $SL.call(case__2475, 1);
                                    {
                                        var B2482 = B1925['concatenate'];
                                        {
                                            var B2483 = [[
                                                        B2384,
                                                        condition_var__2473,
                                                        type__2477
                                                    ]];
                                            {
                                                var B2484 = false;
                                                if (($T)(condition__2480))
                                                    B2484 = [B1925['%concat']([
                                                            B1948,
                                                            [[
                                                                    condition__2480,
                                                                    condition_var__2473
                                                                ]]
                                                        ], body__2481)];
                                                else
                                                    B2484 = body__2481;
                                                return(B2482(B2483, B2484));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, cases__2472))
        ]);
    }
});
{
    ($module)['$internal-symbol-macros'] = B1925['make-plain-object']();
    ($module)['%export']('$internal-symbol-macros', ($module)['$internal-symbol-macros']);
}
