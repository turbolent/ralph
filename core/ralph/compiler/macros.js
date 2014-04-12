{
    var $module = Object.create(null);
    var Mexport = function B2042(name__2043, value__2044) {
        var B2045 = (exports);
        return(B2045[name__2043] = value__2044);
    };
}
var B2046 = require('ralph/core');
{
    var B2047 = require('ralph/format');
    var B2048 = require('ralph/compiler/utilities');
}
{
    var B2052 = $S('bind-properties', 'ralph/core');
    {
        var B2053 = $S('%keys', 'ralph/core');
        {
            var B2054 = $S('%object', 'ralph/core');
            {
                var wrap_keys = function B2055(form__2056, rest_parameter__2057, keyword_parameters__2058) {
                    var keyword_parametersT__2061 = B2046['map'](function B2059(parameter__2060) {
                            if (($T)(B2046['instance?'](parameter__2060, B2046['<array>'])))
                                return(parameter__2060);
                            else
                                return([
                                    parameter__2060,
                                    false
                                ]);
                        }, keyword_parameters__2058);
                    return([
                        B2052,
                        B2046['map'](B2046['first'], keyword_parametersT__2061),
                        [
                            B2053,
                            rest_parameter__2057,
                            B2046['%concat']([B2054], B2046['reduce1'](B2046['concatenate'], B2046['map'](function B2062(parameter__2063) {
                                var key__2064 = parameter__2063[0];
                                {
                                    var value__2065 = parameter__2063[1];
                                    return([
                                        B2046['symbol-name'](key__2064),
                                        value__2065
                                    ]);
                                }
                            }, keyword_parametersT__2061)))
                        ],
                        form__2056
                    ]);
                };
                B2046['%annotate-function'](wrap_keys, 'wrap-keys', false);
            }
        }
    }
}
{
    var B2069 = $S('bind', 'ralph/core');
    {
        var B2070 = $S('%native-call', 'ralph/core');
        {
            var wrap_restSkeys = function B2071(form__2072, all_parameters__2073, normal_parameters__2074, rest_parameter__2075, keyword_parameters__2076) {
                var restQ__2077 = rest_parameter__2075;
                {
                    var B2078 = rest_parameter__2075;
                    {
                        var rest_parameter__2079 = false;
                        if (($T)(B2078))
                            rest_parameter__2079 = B2078;
                        else if (($T)(B2046['not'](B2046['empty?'](keyword_parameters__2076))))
                            rest_parameter__2079 = B2046['generate-symbol']();
                        else
                            rest_parameter__2079 = false;
                        {
                            var formT__2080 = false;
                            if (($T)(B2046['empty?'](keyword_parameters__2076)))
                                formT__2080 = form__2072;
                            else
                                formT__2080 = wrap_keys(form__2072, rest_parameter__2079, keyword_parameters__2076);
                            {
                                var B2081 = restQ__2077;
                                {
                                    var B2082 = false;
                                    if (($T)(B2081))
                                        B2082 = B2081;
                                    else
                                        B2082 = B2046['not'](B2046['empty?'](keyword_parameters__2076));
                                    if (($T)(B2082))
                                        return([
                                            B2069,
                                            [[
                                                    rest_parameter__2079,
                                                    [
                                                        B2070,
                                                        '$SL.call',
                                                        all_parameters__2073,
                                                        B2046['size'](normal_parameters__2074)
                                                    ]
                                                ]],
                                            formT__2080
                                        ]);
                                    else
                                        return(formT__2080);
                                }
                            }
                        }
                    }
                }
            };
            B2046['%annotate-function'](wrap_restSkeys, 'wrap-rest/keys', false);
        }
    }
}
{
    var strip_types = function B2085(parameters__2086) {
        return(B2046['map'](function B2087(parameter__2088) {
            if (($T)(B2046['instance?'](parameter__2088, B2046['<array>'])))
                return(B2046['first'](parameter__2088));
            else
                return(parameter__2088);
        }, parameters__2086));
    };
    B2046['%annotate-function'](strip_types, 'strip-types', false);
}
{
    var B2091 = $S('%method', 'ralph/core');
    {
        var B2092 = $S('%all-arguments');
        {
            var named_method = function B2093(name__2094, parameter_list__2095, form__2096) {
                var B2097 = B2048['destructure-parameter-list'](parameter_list__2095);
                {
                    var normal_parameters__2098 = B2097[0];
                    {
                        var rest_parameter__2099 = B2097[1];
                        {
                            var keyword_parameters__2100 = B2097[2];
                            return([
                                B2091,
                                name__2094,
                                strip_types(normal_parameters__2098),
                                wrap_restSkeys(form__2096, B2092, normal_parameters__2098, rest_parameter__2099, keyword_parameters__2100)
                            ]);
                        }
                    }
                }
            };
            B2046['%annotate-function'](named_method, 'named-method', false);
        }
    }
}
{
    var Bcore_macros = B2046['make-plain-object']();
    Mexport('$core-macros', Bcore_macros);
}
{
    var B2102 = $S('if', 'ralph/core');
    {
        var B2103 = $S('begin', 'ralph/core');
        B2046['get-setter'](Bcore_macros, 'when', function B2104(____2105, test__2106) {
            var forms__2107 = $SL.call(arguments, 2);
            return([
                B2102,
                test__2106,
                B2046['%concat']([B2103], forms__2107),
                false
            ]);
        });
    }
}
{
    var B2109 = $S('not', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'unless', function B2110(____2111, test__2112) {
        var forms__2113 = $SL.call(arguments, 2);
        return([
            B2102,
            [
                B2109,
                test__2112
            ],
            B2046['%concat']([B2103], forms__2113),
            false
        ]);
    });
}
{
    var B2115 = $S('set!', 'ralph/core');
    {
        var B2116 = $S('parallel-set!', 'ralph/core');
        B2046['get-setter'](Bcore_macros, 'parallel-set!', function B2117(____2118, identifier__2119, new_value__2120) {
            var clauses__2121 = $SL.call(arguments, 3);
            if (($T)(B2046['empty?'](clauses__2121)))
                return([
                    B2115,
                    identifier__2119,
                    new_value__2120
                ]);
            else {
                var value__2122 = B2046['generate-symbol']();
                return([
                    B2069,
                    [[
                            value__2122,
                            new_value__2120
                        ]],
                    B2046['%concat']([B2116], clauses__2121),
                    [
                        B2115,
                        identifier__2119,
                        value__2122
                    ]
                ]);
            }
        });
    }
}
{
    var B2124 = $K('else');
    {
        var B2125 = $S('cond', 'ralph/core');
        B2046['get-setter'](Bcore_macros, 'cond', function B2126(____2127) {
            var cases__2128 = $SL.call(arguments, 1);
            if (($T)(B2046['not'](B2046['empty?'](cases__2128)))) {
                var case__2129 = B2046['first'](cases__2128);
                {
                    B2048['check-type'](case__2129, B2046['<array>'], 'Non-array case in cond: %=');
                    {
                        var test__2130 = case__2129[0];
                        {
                            var forms__2131 = $SL.call(case__2129, 1);
                            {
                                var form__2132 = B2046['%concat']([B2103], forms__2131);
                                if (($T)(B2046['=='](test__2130, B2124)))
                                    return(form__2132);
                                else
                                    return([
                                        B2102,
                                        test__2130,
                                        form__2132,
                                        B2046['%concat']([B2125], B2046['rest'](cases__2128))
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
    var B2135 = $S('when', 'ralph/core');
    {
        var B2136 = $S('and', 'ralph/core');
        B2046['get-setter'](Bcore_macros, 'and', function B2137(____2138) {
            var forms__2139 = $SL.call(arguments, 1);
            {
                var B2140 = B2046['size'](forms__2139);
                if (($T)(B2046['=='](B2140, 0)))
                    return(true);
                else if (($T)(B2046['=='](B2140, 1)))
                    return(B2046['first'](forms__2139));
                else
                    return([
                        B2135,
                        B2046['first'](forms__2139),
                        B2046['%concat']([B2136], B2046['rest'](forms__2139))
                    ]);
            }
        });
    }
}
{
    var B2143 = $S('or', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'or', function B2144(____2145) {
        var forms__2146 = $SL.call(arguments, 1);
        {
            var B2147 = B2046['size'](forms__2146);
            if (($T)(B2046['=='](B2147, 0)))
                return(false);
            else if (($T)(B2046['=='](B2147, 1)))
                return(B2046['first'](forms__2146));
            else {
                var value__2148 = B2046['generate-symbol']();
                return([
                    B2069,
                    [[
                            value__2148,
                            B2046['first'](forms__2146)
                        ]],
                    [
                        B2102,
                        value__2148,
                        value__2148,
                        B2046['%concat']([B2143], B2046['rest'](forms__2146))
                    ]
                ]);
            }
        }
    });
}
B2046['get-setter'](Bcore_macros, 'if-bind', function B2150(____2151, binding__2152, consequent__2153, alternate__2154) {
    var superflous__2155 = $SL.call(arguments, 4);
    {
        B2048['check-type'](binding__2152, B2046['<array>'], 'Non-array binding in if-bind: %=');
        {
            var var__2156 = binding__2152[0];
            {
                var value__2157 = binding__2152[1];
                {
                    var temp__2158 = B2046['generate-symbol']();
                    return([
                        B2069,
                        [[
                                temp__2158,
                                value__2157
                            ]],
                        [
                            B2102,
                            temp__2158,
                            [
                                B2069,
                                [[
                                        var__2156,
                                        temp__2158
                                    ]],
                                consequent__2153
                            ],
                            alternate__2154
                        ]
                    ]);
                }
            }
        }
    }
});
{
    var B2160 = $S('while', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'until', function B2161(____2162, test__2163) {
        var forms__2164 = $SL.call(arguments, 2);
        return(B2046['%concat']([
            B2160,
            [
                B2109,
                test__2163
            ]
        ], forms__2164));
    });
}
{
    var B2167 = $S('for', 'ralph/core');
    {
        var B2168 = $S('inc', 'ralph/core');
        {
            var B2169 = $S('binary>=', 'ralph/core');
            B2046['get-setter'](Bcore_macros, 'dotimes', function B2170(____2171, binding__2172) {
                var forms__2173 = $SL.call(arguments, 2);
                {
                    B2048['check-type'](binding__2172, B2046['<array>'], 'Non-array binding in dotimes: %=');
                    {
                        var temp__2174 = B2046['generate-symbol']();
                        {
                            var var__2175 = binding__2172[0];
                            {
                                var count__2176 = binding__2172[1];
                                {
                                    var result__2177 = binding__2172[2];
                                    {
                                        B2048['check-type'](var__2175, B2046['<symbol>'], 'Non-symbol var in dotimes: %=');
                                        {
                                            var B2179 = [[
                                                        temp__2174,
                                                        count__2176
                                                    ]];
                                            {
                                                var B2180 = B2046['%concat'];
                                                {
                                                    var B2181 = [[
                                                                var__2175,
                                                                0,
                                                                [
                                                                    B2168,
                                                                    var__2175
                                                                ]
                                                            ]];
                                                    {
                                                        var B2182 = [
                                                                B2169,
                                                                var__2175,
                                                                temp__2174
                                                            ];
                                                        {
                                                            var B2178 = result__2177;
                                                            {
                                                                var B2183 = false;
                                                                if (($T)(B2178))
                                                                    B2183 = B2178;
                                                                else
                                                                    B2183 = false;
                                                                {
                                                                    var B2184 = [
                                                                            B2182,
                                                                            B2183
                                                                        ];
                                                                    {
                                                                        var B2185 = [
                                                                                B2167,
                                                                                B2181,
                                                                                B2184
                                                                            ];
                                                                        {
                                                                            var B2186 = B2180(B2185, forms__2173);
                                                                            return([
                                                                                B2069,
                                                                                B2179,
                                                                                B2186
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
    var B2195 = $S('method', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'for', function B2196(____2197, clauses__2198, end_clause__2199) {
        var forms__2200 = $SL.call(arguments, 3);
        {
            B2048['check-type'](clauses__2198, B2046['<array>'], 'Non-array set of clauses in for: %=');
            {
                B2048['check-type'](end_clause__2199, B2046['<array>'], 'Non-array end-clause in for: %=');
                {
                    var init_clauses__2201 = [];
                    {
                        var next_clauses__2202 = [];
                        {
                            var vars__2203 = B2046['map'](B2046['first'], clauses__2198);
                            {
                                var B2204 = clauses__2198;
                                {
                                    var B2205 = false;
                                    {
                                        var B2206 = false;
                                        {
                                            var B2207 = [B2204];
                                            {
                                                while (true) {
                                                    var B2213 = B2046['not'];
                                                    {
                                                        var B2208 = B2205;
                                                        {
                                                            var B2214 = false;
                                                            if (($T)(B2208))
                                                                B2214 = B2208;
                                                            else
                                                                B2214 = B2046['any?'](B2046['empty?'], B2207);
                                                            {
                                                                var B2215 = B2213(B2214);
                                                                if (($T)(B2215)) {
                                                                    var clause__2209 = B2046['first'](B2204);
                                                                    {
                                                                        (function B2210(clause__2211) {
                                                                            B2048['check-type'](clause__2211, B2046['<array>'], 'Non-array clause in for: %=');
                                                                            {
                                                                                B2046['push-last'](init_clauses__2201, B2046['slice'](clause__2211, 0, 2));
                                                                                {
                                                                                    B2046['push-last'](next_clauses__2202, B2046['first'](clause__2211));
                                                                                    return(B2046['push-last'](next_clauses__2202, B2046['third'](clause__2211)));
                                                                                }
                                                                            }
                                                                        }(clause__2209));
                                                                        {
                                                                            B2204 = B2046['rest'](B2204);
                                                                            B2207 = [B2204];
                                                                        }
                                                                    }
                                                                } else
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                }
                                                {
                                                    B2206;
                                                    {
                                                        var B2212 = B2046['empty?'](end_clause__2199);
                                                        {
                                                            var B2216 = false;
                                                            if (($T)(B2212))
                                                                B2216 = B2212;
                                                            else
                                                                B2216 = [
                                                                    B2109,
                                                                    B2046['first'](end_clause__2199)
                                                                ];
                                                            {
                                                                var B2217 = B2046['%concat']([B2046['%concat']([
                                                                            B2195,
                                                                            vars__2203
                                                                        ], forms__2200)], vars__2203);
                                                                {
                                                                    var B2218 = B2046['%concat']([B2116], next_clauses__2202);
                                                                    {
                                                                        var B2219 = [
                                                                                B2160,
                                                                                B2216,
                                                                                B2217,
                                                                                B2218
                                                                            ];
                                                                        {
                                                                            var B2220 = B2046['%concat']([B2103], B2046['rest'](end_clause__2199));
                                                                            return([
                                                                                B2069,
                                                                                init_clauses__2201,
                                                                                B2219,
                                                                                B2220
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
    var B2227 = $S('rest', 'ralph/core');
    {
        var B2228 = $S('%array', 'ralph/core');
        {
            var B2229 = $S('until', 'ralph/core');
            {
                var B2230 = $S('any?', 'ralph/core');
                {
                    var B2231 = $S('empty?', 'ralph/core');
                    {
                        var B2232 = $S('first', 'ralph/core');
                        B2046['get-setter'](Bcore_macros, 'for-each', function B2233(____2234, clauses__2235, end_clause__2236) {
                            var forms__2237 = $SL.call(arguments, 3);
                            {
                                B2048['check-type'](clauses__2235, B2046['<array>'], 'Non-array set of clauses in for: %=');
                                {
                                    B2048['check-type'](end_clause__2236, B2046['<array>'], 'Non-array end-clause in for: %=');
                                    {
                                        var clauses__2240 = B2046['map'](function B2238(clause__2239) {
                                                B2048['check-type'](clause__2239, B2046['<array>'], 'Non-array clause in for-each: %=');
                                                return(B2046['cons'](B2046['generate-symbol'](), clause__2239));
                                            }, clauses__2235);
                                        {
                                            var endQ__2241 = B2046['generate-symbol']();
                                            {
                                                var values__2242 = B2046['generate-symbol']();
                                                {
                                                    var result__2243 = B2046['generate-symbol']();
                                                    {
                                                        var B2260 = B2046['%concat'];
                                                        {
                                                            var B2261 = B2046['%concat'];
                                                            {
                                                                var vars__2244 = B2046['map'](B2046['second'], clauses__2240);
                                                                {
                                                                    var B2262 = B2046['%concat']([B2046['%concat']([
                                                                                B2195,
                                                                                vars__2244
                                                                            ], forms__2237)], vars__2244);
                                                                    {
                                                                        var B2263 = [
                                                                                B2103,
                                                                                B2262
                                                                            ];
                                                                        {
                                                                            var B2264 = B2046['map'](function B2245(clause__2246) {
                                                                                    return([
                                                                                        B2115,
                                                                                        B2046['first'](clause__2246),
                                                                                        [
                                                                                            B2227,
                                                                                            B2046['first'](clause__2246)
                                                                                        ]
                                                                                    ]);
                                                                                }, clauses__2240);
                                                                            {
                                                                                var B2265 = B2261(B2263, B2264);
                                                                                {
                                                                                    var B2266 = [[
                                                                                                B2115,
                                                                                                values__2242,
                                                                                                B2046['%concat']([B2228], B2046['map'](B2046['first'], clauses__2240))
                                                                                            ]];
                                                                                    {
                                                                                        var form__2247 = B2260(B2265, B2266);
                                                                                        {
                                                                                            var B2267 = B2046['%concat'](B2046['%concat']([], B2046['map'](function B2248(clause__2249) {
                                                                                                    var temp__2250 = clause__2249[0];
                                                                                                    {
                                                                                                        var var__2251 = clause__2249[1];
                                                                                                        {
                                                                                                            var values__2252 = clause__2249[2];
                                                                                                            return([
                                                                                                                temp__2250,
                                                                                                                values__2252
                                                                                                            ]);
                                                                                                        }
                                                                                                    }
                                                                                                }, clauses__2240)), [
                                                                                                    [
                                                                                                        endQ__2241,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        result__2243,
                                                                                                        false
                                                                                                    ],
                                                                                                    [
                                                                                                        values__2242,
                                                                                                        B2046['%concat']([B2228], B2046['map'](B2046['first'], clauses__2240))
                                                                                                    ]
                                                                                                ]);
                                                                                            {
                                                                                                var B2268 = [
                                                                                                        B2143,
                                                                                                        endQ__2241,
                                                                                                        [
                                                                                                            B2230,
                                                                                                            B2231,
                                                                                                            values__2242
                                                                                                        ]
                                                                                                    ];
                                                                                                {
                                                                                                    var B2269 = B2046['map'](function B2253(clause__2254) {
                                                                                                            var temp__2255 = clause__2254[0];
                                                                                                            {
                                                                                                                var var__2256 = clause__2254[1];
                                                                                                                {
                                                                                                                    var values__2257 = clause__2254[2];
                                                                                                                    return([
                                                                                                                        var__2256,
                                                                                                                        [
                                                                                                                            B2232,
                                                                                                                            temp__2255
                                                                                                                        ]
                                                                                                                    ]);
                                                                                                                }
                                                                                                            }
                                                                                                        }, clauses__2240);
                                                                                                    {
                                                                                                        var B2258 = B2046['first'](end_clause__2236);
                                                                                                        {
                                                                                                            var B2270 = false;
                                                                                                            if (($T)(B2258)) {
                                                                                                                var end_test__2259 = B2258;
                                                                                                                B2270 = [
                                                                                                                    B2102,
                                                                                                                    end_test__2259,
                                                                                                                    [
                                                                                                                        B2103,
                                                                                                                        [
                                                                                                                            B2115,
                                                                                                                            result__2243,
                                                                                                                            B2046['%concat']([B2103], B2046['rest'](end_clause__2236))
                                                                                                                        ],
                                                                                                                        [
                                                                                                                            B2115,
                                                                                                                            endQ__2241,
                                                                                                                            true
                                                                                                                        ]
                                                                                                                    ],
                                                                                                                    form__2247
                                                                                                                ];
                                                                                                            } else
                                                                                                                B2270 = form__2247;
                                                                                                            {
                                                                                                                var B2271 = [
                                                                                                                        B2069,
                                                                                                                        B2269,
                                                                                                                        B2270
                                                                                                                    ];
                                                                                                                {
                                                                                                                    var B2272 = [
                                                                                                                            B2229,
                                                                                                                            B2268,
                                                                                                                            B2271
                                                                                                                        ];
                                                                                                                    return([
                                                                                                                        B2069,
                                                                                                                        B2267,
                                                                                                                        B2272,
                                                                                                                        result__2243
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
B2046['get-setter'](Bcore_macros, 'select', function B2276(____2277, value__2278, test__2279) {
    var cases__2280 = $SL.call(arguments, 3);
    {
        var valueT__2281 = B2046['generate-symbol']();
        {
            var testT__2282 = false;
            if (($T)(B2046['instance?'](test__2279, B2046['<symbol>'])))
                testT__2282 = test__2279;
            else
                testT__2282 = B2046['generate-symbol']();
            {
                var test_expression__2283 = false;
                {
                    test_expression__2283 = function B2284(test_value__2285) {
                        return([
                            testT__2282,
                            valueT__2281,
                            test_value__2285
                        ]);
                    };
                    {
                        var B2290 = B2046['concatenate'];
                        {
                            var B2291 = [[
                                        valueT__2281,
                                        value__2278
                                    ]];
                            {
                                var B2292 = false;
                                if (($T)(B2046['instance?'](test__2279, B2046['<symbol>'])))
                                    B2292 = [];
                                else
                                    B2292 = [[
                                            testT__2282,
                                            test__2279
                                        ]];
                                {
                                    var B2293 = B2290(B2291, B2292);
                                    {
                                        var B2294 = B2046['%concat']([B2125], B2046['map'](function B2286(case__2287) {
                                                B2048['check-type'](case__2287, B2046['<array>'], 'Non-array case in select: %=');
                                                {
                                                    var test_forms__2288 = case__2287[0];
                                                    {
                                                        var forms__2289 = $SL.call(case__2287, 1);
                                                        if (($T)(B2046['=='](test_forms__2288, B2124)))
                                                            return(case__2287);
                                                        else {
                                                            B2048['check-type'](test_forms__2288, B2046['<array>'], 'Non-array set of test forms in select: %=');
                                                            return(B2046['%concat']([B2046['%concat']([B2143], B2046['map'](test_expression__2283, test_forms__2288))], forms__2289));
                                                        }
                                                    }
                                                }
                                            }, cases__2280));
                                        return([
                                            B2069,
                                            B2293,
                                            B2294
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
    var B2298 = $S('%get-property', 'ralph/core');
    {
        var destructure = function B2299(bindings__2300, values__2301, form__2302) {
            if (($T)(B2046['instance?'](values__2301, B2046['<symbol>']))) {
                B2048['check-type'](bindings__2300, B2046['<array>'], 'Non-array set of bindings while destructuring: %=');
                {
                    var B2303 = B2048['destructure-parameter-list'](bindings__2300);
                    {
                        var normal_parameters__2304 = B2303[0];
                        {
                            var rest_parameter__2305 = B2303[1];
                            {
                                var keyword_parameters__2306 = B2303[2];
                                {
                                    var i__2307 = B2046['size'](normal_parameters__2304);
                                    return(B2046['reduce'](function B2308(form__2309, binding__2310) {
                                        i__2307 = B2046['-'](i__2307, 1);
                                        if (($T)(B2046['instance?'](binding__2310, B2046['<symbol>'])))
                                            return([
                                                B2069,
                                                [[
                                                        binding__2310,
                                                        [
                                                            B2298,
                                                            values__2301,
                                                            i__2307
                                                        ]
                                                    ]],
                                                form__2309
                                            ]);
                                        else
                                            return(destructure(binding__2310, [
                                                B2298,
                                                values__2301,
                                                i__2307
                                            ], form__2309));
                                    }, wrap_restSkeys(form__2302, values__2301, normal_parameters__2304, rest_parameter__2305, keyword_parameters__2306), B2046['reverse'](normal_parameters__2304)));
                                }
                            }
                        }
                    }
                }
            } else {
                var var__2311 = B2046['generate-symbol']();
                return([
                    B2069,
                    [[
                            var__2311,
                            values__2301
                        ]],
                    destructure(bindings__2300, var__2311, form__2302)
                ]);
            }
        };
        B2046['%annotate-function'](destructure, 'destructure', false);
    }
}
B2046['get-setter'](Bcore_macros, 'destructuring-bind', function B2313(____2314, bindings__2315, values__2316) {
    var forms__2317 = $SL.call(arguments, 3);
    return(destructure(bindings__2315, values__2316, B2046['%concat']([B2103], forms__2317)));
});
B2046['get-setter'](Bcore_macros, 'bind-properties', function B2320(____2321, properties__2322, object__2323) {
    var forms__2324 = $SL.call(arguments, 3);
    {
        var objectT__2325 = B2046['generate-symbol']();
        return(B2046['%concat']([
            B2069,
            B2046['%concat']([[
                    objectT__2325,
                    object__2323
                ]], B2046['map'](function B2326(property__2327) {
                return([
                    property__2327,
                    [
                        B2298,
                        objectT__2325,
                        B2046['symbol-name'](property__2327)
                    ]
                ]);
            }, properties__2322))
        ], forms__2324));
    }
});
B2046['get-setter'](Bcore_macros, 'bind-methods', function B2330(____2331, bindings__2332) {
    var forms__2333 = $SL.call(arguments, 2);
    {
        B2048['check-type'](bindings__2332, B2046['<array>'], 'Non-array set of bindings in bind-methods: %=');
        return(B2046['%concat'](B2046['%concat']([
            B2069,
            B2046['map'](B2046['first'], bindings__2332)
        ], B2046['map'](function B2334(binding__2335) {
            B2048['check-type'](bindings__2332, B2046['<array>'], 'Non-array binding in bind-methods: %=');
            {
                var identifier__2336 = binding__2335[0];
                {
                    var parameter_list__2337 = binding__2335[1];
                    {
                        var forms__2338 = $SL.call(binding__2335, 2);
                        return([
                            B2115,
                            identifier__2336,
                            B2046['%concat']([
                                B2195,
                                parameter_list__2337
                            ], forms__2338)
                        ]);
                    }
                }
            }
        }, bindings__2332)), forms__2333));
    }
});
{
    var B2344 = $S('generate-symbol', 'ralph/core');
    {
        var B2345 = $S('quote', 'ralph/core');
        B2046['get-setter'](Bcore_macros, 'once-only', function B2346(____2347, names__2348) {
            var forms__2349 = $SL.call(arguments, 2);
            {
                var symbols__2352 = B2046['map'](function B2350(name__2351) {
                        return(B2046['generate-symbol']());
                    }, names__2348);
                return([
                    B2069,
                    B2046['%concat']([], B2046['map'](function B2353(symbol__2354) {
                        return([
                            symbol__2354,
                            [B2344]
                        ]);
                    }, symbols__2352)),
                    [
                        B2228,
                        [
                            B2345,
                            B2069
                        ],
                        B2046['%concat']([B2228], B2046['map'](function B2355(symbol__2356, name__2357) {
                            return([
                                B2228,
                                symbol__2356,
                                name__2357
                            ]);
                        }, symbols__2352, names__2348)),
                        B2046['%concat']([
                            B2069,
                            B2046['%concat']([], B2046['map'](function B2358(name__2359, symbol__2360) {
                                return([
                                    name__2359,
                                    symbol__2360
                                ]);
                            }, names__2348, symbols__2352))
                        ], forms__2349)
                    ]
                ]);
            }
        });
    }
}
{
    var B2363 = $S('+', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'inc!', function B2364(____2365, object__2366, value__2367) {
        var B2368 = value__2367;
        {
            var B2369 = false;
            if (($T)(B2368))
                B2369 = B2368;
            else
                B2369 = 1;
            {
                var B2370 = [
                        B2363,
                        object__2366,
                        B2369
                    ];
                return([
                    B2115,
                    object__2366,
                    B2370
                ]);
            }
        }
    });
}
{
    var B2373 = $S('-', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'dec!', function B2374(____2375, object__2376, value__2377) {
        var B2378 = value__2377;
        {
            var B2379 = false;
            if (($T)(B2378))
                B2379 = B2378;
            else
                B2379 = 1;
            {
                var B2380 = [
                        B2373,
                        object__2376,
                        B2379
                    ];
                return([
                    B2115,
                    object__2376,
                    B2380
                ]);
            }
        }
    });
}
{
    var signal_unsupported_dot_name = function B2382(property__2383) {
        return(B2046['signal'](B2047['format-to-string']('Unsupported name for call in dot: %=', property__2383)));
    };
    B2046['%annotate-function'](signal_unsupported_dot_name, 'signal-unsupported-dot-name', false);
}
B2046['get-setter'](Bcore_macros, '.', function B2388(____2389, form__2390) {
    var calls__2391 = $SL.call(arguments, 2);
    return(B2046['reduce'](function B2392(form__2393, call__2394) {
        B2048['check-type'](call__2394, B2046['<array>'], 'Non-array call in dot: %=');
        {
            var property__2395 = call__2394[0];
            {
                var arguments__2396 = $SL.call(call__2394, 1);
                {
                    var bindings__2399 = B2046['map'](function B2397(argument__2398) {
                            return([
                                B2046['generate-symbol'](),
                                argument__2398
                            ]);
                        }, arguments__2396);
                    {
                        var formT__2400 = B2046['generate-symbol']();
                        {
                            var B2402 = [[
                                        formT__2400,
                                        form__2393
                                    ]];
                            {
                                var B2403 = B2046['%concat'];
                                {
                                    var B2401 = property__2395;
                                    {
                                        var B2404 = false;
                                        if (($T)(B2046['instance?'](B2401, B2046['<string>'])))
                                            B2404 = property__2395;
                                        else if (($T)(B2046['instance?'](B2401, B2046['<symbol>'])))
                                            B2404 = B2046['symbol-name'](property__2395);
                                        else
                                            B2404 = signal_unsupported_dot_name(property__2395);
                                        {
                                            var B2405 = [
                                                    B2298,
                                                    formT__2400,
                                                    B2404
                                                ];
                                            {
                                                var B2406 = [B2405];
                                                {
                                                    var B2407 = B2046['map'](B2046['first'], bindings__2399);
                                                    {
                                                        var B2408 = B2403(B2406, B2407);
                                                        {
                                                            var B2409 = [
                                                                    B2069,
                                                                    bindings__2399,
                                                                    B2408
                                                                ];
                                                            return([
                                                                B2069,
                                                                B2402,
                                                                B2409
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
    }, form__2390, calls__2391));
});
{
    var B2413 = $S('define', 'ralph/core');
    {
        var B2414 = $S('%make-method', 'ralph/core');
        {
            var B2415 = $S('<object>', 'ralph/core');
            B2046['get-setter'](Bcore_macros, 'define-method', function B2416(env__2417, identifier__2418, parameter_list__2419) {
                var forms__2420 = $SL.call(arguments, 3);
                {
                    var B2421 = false;
                    if (($T)(B2048['setter-identifier?'](identifier__2418)))
                        B2421 = [
                            true,
                            B2048['transform-setter-identifier'](B2046['second'](identifier__2418))
                        ];
                    else
                        B2421 = [
                            false,
                            identifier__2418
                        ];
                    {
                        var setterQ__2422 = B2421[0];
                        {
                            var identifier__2423 = B2421[1];
                            {
                                var B2428 = B2046['not'];
                                {
                                    var B2424 = B2046['instance?'](identifier__2423, B2046['<symbol>']);
                                    {
                                        var B2429 = false;
                                        if (($T)(B2424))
                                            B2429 = B2424;
                                        else
                                            B2429 = setterQ__2422;
                                        {
                                            var B2430 = B2428(B2429);
                                            {
                                                if (($T)(B2430))
                                                    B2046['signal'](B2047['format-to-string']('Identifier not symbol or setter in define-method: %=', identifier__2423));
                                                {
                                                    if (($T)(B2046['empty?'](parameter_list__2419)))
                                                        B2046['signal'](B2047['format-to-string']('Empty parameter-list in define-method: %=', identifier__2423));
                                                    {
                                                        var name__2425 = B2046['symbol-name'](identifier__2423);
                                                        {
                                                            var definition__2426 = B2046['%concat']([
                                                                    B2195,
                                                                    parameter_list__2419
                                                                ], forms__2420);
                                                            {
                                                                var head__2427 = B2046['first'](parameter_list__2419);
                                                                {
                                                                    var B2431 = false;
                                                                    if (($T)(B2046['instance?'](head__2427, B2046['<array>'])))
                                                                        B2431 = B2046['>'](B2046['size'](head__2427), 1);
                                                                    else
                                                                        B2431 = false;
                                                                    {
                                                                        var B2432 = false;
                                                                        if (($T)(B2431))
                                                                            B2432 = B2046['second'](head__2427);
                                                                        else
                                                                            B2432 = B2415;
                                                                        {
                                                                            var B2433 = [
                                                                                    B2414,
                                                                                    name__2425,
                                                                                    definition__2426,
                                                                                    setterQ__2422,
                                                                                    B2432,
                                                                                    identifier__2423
                                                                                ];
                                                                            return([
                                                                                B2413,
                                                                                identifier__2423,
                                                                                B2433
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
    var B2437 = $S('%begin', 'ralph/core');
    {
        var B2438 = $S('%annotate-function', 'ralph/core');
        B2046['get-setter'](Bcore_macros, 'define-function', function B2439(env__2440, identifier__2441, parameter_list__2442) {
            var forms__2443 = $SL.call(arguments, 3);
            {
                var B2444 = false;
                if (($T)(B2048['setter-identifier?'](identifier__2441)))
                    B2444 = [
                        true,
                        B2048['transform-setter-identifier'](B2046['second'](identifier__2441))
                    ];
                else
                    B2444 = [
                        false,
                        identifier__2441
                    ];
                {
                    var setterQ__2445 = B2444[0];
                    {
                        var identifier__2446 = B2444[1];
                        {
                            var B2450 = B2046['not'];
                            {
                                var B2447 = B2046['instance?'](identifier__2446, B2046['<symbol>']);
                                {
                                    var B2451 = false;
                                    if (($T)(B2447))
                                        B2451 = B2447;
                                    else
                                        B2451 = setterQ__2445;
                                    {
                                        var B2452 = B2450(B2451);
                                        {
                                            if (($T)(B2452))
                                                B2046['signal'](B2047['format-to-string']('Identifier not symbol or setter in define-function: %=', identifier__2446));
                                            {
                                                var name__2448 = B2046['symbol-name'](identifier__2446);
                                                {
                                                    var definition__2449 = B2046['%concat']([
                                                            B2195,
                                                            parameter_list__2442
                                                        ], forms__2443);
                                                    {
                                                        B2046['get-setter'](env__2440, 'module', 'functions', name__2448, definition__2449);
                                                        return([
                                                            B2437,
                                                            [
                                                                B2413,
                                                                identifier__2446,
                                                                definition__2449
                                                            ],
                                                            [
                                                                B2438,
                                                                identifier__2446,
                                                                name__2448,
                                                                setterQ__2445
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
    var B2454 = $S('%make-generic', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'define-generic', function B2455(____2456, identifier__2457, arguments__2458) {
        var superflous__2459 = $SL.call(arguments, 3);
        return([
            B2413,
            identifier__2457,
            [
                B2454,
                B2046['symbol-name'](identifier__2457)
            ]
        ]);
    });
}
{
    var B2463 = $S('%make-class', 'ralph/core');
    {
        var B2464 = $S('%set', 'ralph/core');
        {
            var B2465 = $S('%native', 'ralph/core');
            B2046['get-setter'](Bcore_macros, 'define-class', function B2466(____2467, identifier__2468, superclass__2469) {
                var properties__2470 = $SL.call(arguments, 3);
                {
                    var B2475 = false;
                    if (($T)(B2046['not'](B2046['empty?'](superclass__2469))))
                        B2475 = B2046['first'](superclass__2469);
                    else
                        B2475 = false;
                    {
                        var B2476 = B2046['%concat']([B2054], B2046['reduce1'](B2046['concatenate'], B2046['map'](function B2471(property__2472) {
                                if (($T)(B2046['instance?'](property__2472, B2046['<array>'])))
                                    return([
                                        B2046['symbol-name'](B2046['first'](property__2472)),
                                        [
                                            B2195,
                                            [],
                                            B2046['second'](property__2472)
                                        ]
                                    ]);
                                else
                                    return([
                                        B2046['symbol-name'](property__2472),
                                        false
                                    ]);
                            }, properties__2470)));
                        {
                            var B2481 = [
                                    B2091,
                                    identifier__2468,
                                    [],
                                    B2046['%concat']([B2437], B2046['map'](function B2473(property__2474) {
                                        var B2477 = [
                                                B2465,
                                                'this'
                                            ];
                                        {
                                            var B2478 = false;
                                            if (($T)(B2046['instance?'](property__2474, B2046['<array>'])))
                                                B2478 = B2046['symbol-name'](B2046['first'](property__2474));
                                            else
                                                B2478 = B2046['symbol-name'](property__2474);
                                            {
                                                var B2479 = [
                                                        B2298,
                                                        B2477,
                                                        B2478
                                                    ];
                                                {
                                                    var B2480 = [
                                                            B2465,
                                                            'undefined'
                                                        ];
                                                    return([
                                                        B2464,
                                                        B2479,
                                                        B2480
                                                    ]);
                                                }
                                            }
                                        }
                                    }, properties__2470))
                                ];
                            {
                                var B2482 = [
                                        B2463,
                                        B2475,
                                        B2476,
                                        B2481
                                    ];
                                return([
                                    B2413,
                                    identifier__2468,
                                    B2482
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
    var B2484 = $S('define-function', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'define-macro', function B2485(____2486, identifier__2487, parameter_list__2488) {
        var forms__2489 = $SL.call(arguments, 3);
        {
            B2048['check-type'](identifier__2487, B2046['<symbol>'], 'Non-symbol identifier in define-macro: %=');
            {
                B2048['check-type'](parameter_list__2488, B2046['<array>'], 'Non-array parameter-list in define-macro: %=');
                return([
                    B2103,
                    B2046['%concat']([
                        B2484,
                        identifier__2487,
                        B2046['%concat']([B2046['generate-symbol']()], parameter_list__2488)
                    ], forms__2489),
                    [
                        B2115,
                        [
                            B2298,
                            identifier__2487,
                            '%macro?'
                        ],
                        true
                    ]
                ]);
            }
        }
    });
}
B2046['get-setter'](Bcore_macros, 'define-symbol-macro', function B2491(____2492, identifier__2493, parameter_list__2494) {
    var forms__2495 = $SL.call(arguments, 3);
    {
        B2048['check-type'](identifier__2493, B2046['<symbol>'], 'Non-symbol identifier in define-symbol-macro: %=');
        {
            B2048['check-type'](parameter_list__2494, B2046['<array>'], 'Non-array parameter-list in define-symbol-macro: %=');
            return([
                B2103,
                B2046['%concat']([
                    B2484,
                    identifier__2493,
                    []
                ], forms__2495),
                [
                    B2115,
                    [
                        B2298,
                        identifier__2493,
                        '%symbol-macro?'
                    ],
                    true
                ]
            ]);
        }
    }
});
{
    var B2497 = $S('next-method', 'ralph/core');
    B2046['get-setter'](Bcore_macros, 'call-next-method', function B2498(____2499) {
        var superflous__2500 = $SL.call(arguments, 1);
        return([
            [
                B2298,
                B2497,
                'apply'
            ],
            [
                B2465,
                'null'
            ],
            B2092
        ]);
    });
}
{
    var B2503 = $S('%make-exit-function', 'ralph/core');
    {
        var B2504 = $S('%try', 'ralph/core');
        {
            var B2505 = $S('instance?', 'ralph/core');
            {
                var B2506 = $S('<non-local-exit>', 'ralph/core');
                {
                    var B2507 = $S('%infix', 'ralph/core');
                    {
                        var B2508 = $S('signal', 'ralph/core');
                        B2046['get-setter'](Bcore_macros, 'block', function B2509(____2510, name__2511) {
                            var body__2512 = $SL.call(arguments, 2);
                            {
                                var B2513 = false;
                                if (($T)(B2046['not'](B2046['empty?'](name__2511))))
                                    B2513 = B2046['first'](name__2511);
                                else
                                    B2513 = false;
                                if (($T)(B2513)) {
                                    var name__2514 = B2513;
                                    {
                                        var block_var__2515 = B2046['generate-symbol']();
                                        {
                                            var condition_var__2516 = B2046['generate-symbol']();
                                            return([
                                                B2069,
                                                [
                                                    [
                                                        name__2514,
                                                        [B2503]
                                                    ],
                                                    [
                                                        block_var__2515,
                                                        B2046['%concat']([
                                                            B2195,
                                                            []
                                                        ], body__2512)
                                                    ]
                                                ],
                                                [
                                                    B2504,
                                                    [block_var__2515],
                                                    condition_var__2516,
                                                    [
                                                        B2102,
                                                        [
                                                            B2136,
                                                            [
                                                                B2505,
                                                                condition_var__2516,
                                                                B2506
                                                            ],
                                                            [
                                                                B2507,
                                                                '===',
                                                                [
                                                                    B2298,
                                                                    condition_var__2516,
                                                                    'identifier'
                                                                ],
                                                                [
                                                                    B2298,
                                                                    name__2514,
                                                                    'identifier'
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B2298,
                                                            condition_var__2516,
                                                            'return-value'
                                                        ],
                                                        [
                                                            B2508,
                                                            condition_var__2516
                                                        ]
                                                    ]
                                                ]
                                            ]);
                                        }
                                    }
                                } else
                                    return(B2046['%concat']([B2103], body__2512));
                            }
                        });
                    }
                }
            }
        }
    }
}
{
    var Bcore_symbol_macros = B2046['make-plain-object']();
    Mexport('$core-symbol-macros', Bcore_symbol_macros);
}
{
    var B2518 = $S('%next-method', 'ralph/core');
    {
        var B2519 = $S('%this-method');
        B2046['get-setter'](Bcore_symbol_macros, 'next-method', function B2520(____2521) {
            var superflous__2522 = $SL.call(arguments, 1);
            return([
                B2518,
                B2519
            ]);
        });
    }
}
{
    var Binternal_macros = B2046['make-plain-object']();
    Mexport('$internal-macros', Binternal_macros);
}
{
    var B2525 = $S('%quote', 'ralph/core');
    {
        var transform_quoted = function B2526(form__2527) {
            var B2528 = form__2527;
            if (($T)(B2046['instance?'](B2528, B2046['<array>'])))
                return(B2046['%concat']([B2228], B2046['map'](transform_quoted, form__2527)));
            else if (($T)(B2046['instance?'](B2528, B2046['<symbol>'])))
                return([
                    B2525,
                    form__2527
                ]);
            else
                return(form__2527);
        };
        B2046['%annotate-function'](transform_quoted, 'transform-quoted', false);
    }
}
B2046['get-setter'](Binternal_macros, 'quote', function B2530(____2531, form__2532) {
    var superflous__2533 = $SL.call(arguments, 2);
    return(transform_quoted(form__2532));
});
B2046['get-setter'](Binternal_macros, 'begin', function B2536(____2537) {
    var forms__2538 = $SL.call(arguments, 1);
    {
        var B2539 = B2046['size'](forms__2538);
        if (($T)(B2046['=='](B2539, 0)))
            return(false);
        else if (($T)(B2046['=='](B2539, 1)))
            return(B2046['first'](forms__2538));
        else
            return(B2046['%concat']([B2437], forms__2538));
    }
});
{
    var B2542 = $S('%bind', 'ralph/core');
    B2046['get-setter'](Binternal_macros, 'bind', function B2543(____2544, bindings__2545) {
        var forms__2546 = $SL.call(arguments, 2);
        return(B2046['reduce'](function B2547(form__2548, binding__2549) {
            var B2550 = false;
            if (($T)(B2046['instance?'](binding__2549, B2046['<symbol>'])))
                B2550 = [
                    binding__2549,
                    false
                ];
            else
                B2550 = binding__2549;
            return([
                B2542,
                B2550,
                form__2548
            ]);
        }, B2046['%concat']([B2103], forms__2546), B2046['reverse'](bindings__2545)));
    });
}
B2046['get-setter'](Binternal_macros, 'method', function B2552(____2553, parameter_list__2554) {
    var forms__2555 = $SL.call(arguments, 2);
    return(named_method(B2046['generate-symbol'](), parameter_list__2554, B2046['%concat']([B2103], forms__2555)));
});
{
    var B2557 = $S('%while', 'ralph/core');
    B2046['get-setter'](Binternal_macros, 'while', function B2558(____2559, test__2560) {
        var forms__2561 = $SL.call(arguments, 2);
        return([
            B2557,
            test__2560,
            B2046['%concat']([B2103], forms__2561)
        ]);
    });
}
{
    var B2563 = $S('%if', 'ralph/core');
    B2046['get-setter'](Binternal_macros, 'if', function B2564(____2565, test__2566, then__2567, else__2568) {
        var superflous__2569 = $SL.call(arguments, 4);
        return([
            B2563,
            test__2566,
            then__2567,
            else__2568
        ]);
    });
}
B2046['get-setter'](Binternal_macros, 'set!', function B2571(____2572, place__2573) {
    var new_values__2574 = $SL.call(arguments, 2);
    {
        var B2575 = false;
        if (($T)(B2046['instance?'](place__2573, B2046['<array>'])))
            B2575 = B2046['not'](B2046['=='](B2046['symbol-name'](B2046['first'](place__2573)), '%get-property'));
        else
            B2575 = false;
        if (($T)(B2575))
            return(B2046['%concat'](B2046['%concat']([B2048['transform-setter-identifier'](B2046['first'](place__2573))], B2046['rest'](place__2573)), new_values__2574));
        else
            return([
                B2464,
                place__2573,
                B2046['first'](new_values__2574)
            ]);
    }
});
{
    var B2578 = $S('%define', 'ralph/core');
    B2046['get-setter'](Binternal_macros, 'define', function B2579(env__2580, identifier__2581, value__2582) {
        var B2583 = value__2582;
        {
            var B2584 = false;
            if (($T)(B2583))
                B2584 = B2583;
            else
                B2584 = false;
            return([
                B2578,
                identifier__2581,
                B2584
            ]);
        }
    });
}
B2046['get-setter'](Binternal_macros, 'handler-case', function B2590(____2591, protected_form__2592) {
    var cases__2593 = $SL.call(arguments, 2);
    {
        var condition_var__2594 = B2046['generate-symbol']();
        return([
            B2504,
            protected_form__2592,
            condition_var__2594,
            B2046['%concat']([B2125], B2046['map'](function B2595(case__2596) {
                var B2597 = case__2596[0];
                {
                    var type__2598 = B2597[0];
                    {
                        var B2599 = $SL.call(B2597, 1);
                        {
                            var B2600 = B2046['%keys'](B2599, { 'condition': false });
                            {
                                var condition__2601 = B2600['condition'];
                                {
                                    var body__2602 = $SL.call(case__2596, 1);
                                    {
                                        var B2603 = B2046['concatenate'];
                                        {
                                            var B2604 = [[
                                                        B2505,
                                                        condition_var__2594,
                                                        type__2598
                                                    ]];
                                            {
                                                var B2605 = false;
                                                if (($T)(condition__2601))
                                                    B2605 = [B2046['%concat']([
                                                            B2069,
                                                            [[
                                                                    condition__2601,
                                                                    condition_var__2594
                                                                ]]
                                                        ], body__2602)];
                                                else
                                                    B2605 = body__2602;
                                                return(B2603(B2604, B2605));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, cases__2593))
        ]);
    }
});
{
    var Binternal_symbol_macros = B2046['make-plain-object']();
    Mexport('$internal-symbol-macros', Binternal_symbol_macros);
}
