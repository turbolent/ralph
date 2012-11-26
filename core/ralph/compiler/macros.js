var B1983 = require('ralph/core');
var B1986 = require('ralph/format'), B1987 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B1983['%var'], ralphScoreCCMmake_function = B1983['%make-function'], ralphScoreCCmap = B1983['map'], ralphScoreCCinstanceQ = B1983['instance?'], ralphScoreCCLarrayG = B1983['<array>'], ralphScoreCCfirst = B1983['first'], ralphScoreCCMconcat = B1983['%concat'], ralphScoreCCreduce1 = B1983['reduce1'], ralphScoreCCconcatenate = B1983['concatenate'], ralphScoreCCsymbol_name = B1983['symbol-name'], B1994 = $S('bind-properties', 'ralph/core'), B1995 = $S('%keys', 'ralph/core'), B1996 = $S('%object', 'ralph/core'), wrap_keys__2008 = ralphScoreCCMmake_function('wrap_keys', function B1997(form__1998, rest_parameter__1999, keyword_parameters__2000) {
        var keyword_parametersT__2003 = ralphScoreCCmap(function B2001(parameter__2002) {
                if (($T)(ralphScoreCCinstanceQ(parameter__2002, ralphScoreCCLarrayG)))
                    return(parameter__2002);
                else
                    return([
                        parameter__2002,
                        false
                    ]);
            }, keyword_parameters__2000);
        return([
            B1994,
            ralphScoreCCmap(ralphScoreCCfirst, keyword_parametersT__2003),
            [
                B1995,
                rest_parameter__1999,
                ralphScoreCCMconcat([B1996], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2004(parameter__2005) {
                    var key__2006 = parameter__2005[0], value__2007 = parameter__2005[1];
                    return([
                        ralphScoreCCsymbol_name(key__2006),
                        value__2007
                    ]);
                }, keyword_parametersT__2003)))
            ],
            form__1998
        ]);
    }, false);
var ralphScoreCCnot = B1983['not'], ralphScoreCCemptyQ = B1983['empty?'], ralphScoreCCgenerate_symbol = B1983['generate-symbol'], ralphScoreCCsize = B1983['size'], B2014 = $S('bind', 'ralph/core'), B2015 = $S('%native-call', 'ralph/core'), wrap_restSkeys__2027 = ralphScoreCCMmake_function('wrap_restSkeys', function B2016(form__2017, all_parameters__2018, normal_parameters__2019, rest_parameter__2020, keyword_parameters__2021) {
        var restQ__2022 = rest_parameter__2020, B2023 = rest_parameter__2020, rest_parameter__2024 = false;
        if (($T)(B2023))
            rest_parameter__2024 = B2023;
        else if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__2021))))
            rest_parameter__2024 = ralphScoreCCgenerate_symbol();
        else
            rest_parameter__2024 = false;
        var formT__2025 = false;
        if (($T)(ralphScoreCCemptyQ(keyword_parameters__2021)))
            formT__2025 = form__2017;
        else
            formT__2025 = wrap_keys__2008(form__2017, rest_parameter__2024, keyword_parameters__2021);
        var B2026 = restQ__2022, B2028 = false;
        if (($T)(B2026))
            B2028 = B2026;
        else
            B2028 = ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__2021));
        if (($T)(B2028))
            return([
                B2014,
                [[
                        rest_parameter__2024,
                        [
                            B2015,
                            '$SL.call',
                            all_parameters__2018,
                            ralphScoreCCsize(normal_parameters__2019)
                        ]
                    ]],
                formT__2025
            ]);
        else
            return(formT__2025);
    }, false);
var strip_types__2035 = ralphScoreCCMmake_function('strip_types', function B2031(parameters__2032) {
        return(ralphScoreCCmap(function B2033(parameter__2034) {
            if (($T)(ralphScoreCCinstanceQ(parameter__2034, ralphScoreCCLarrayG)))
                return(ralphScoreCCfirst(parameter__2034));
            else
                return(parameter__2034);
        }, parameters__2032));
    }, false);
var ralphScompilerSutilitiesCCdestructure_parameter_list = B1987['destructure-parameter-list'], B2040 = $S('%method', 'ralph/core'), B2041 = $S('%all-arguments'), named_method__2050 = ralphScoreCCMmake_function('named_method', function B2042(name__2043, parameter_list__2044, form__2045) {
        var B2046 = ralphScompilerSutilitiesCCdestructure_parameter_list(parameter_list__2044), normal_parameters__2047 = B2046[0], rest_parameter__2048 = B2046[1], keyword_parameters__2049 = B2046[2];
        return([
            B2040,
            name__2043,
            strip_types__2035(normal_parameters__2047),
            wrap_restSkeys__2027(form__2045, B2041, normal_parameters__2047, rest_parameter__2048, keyword_parameters__2049)
        ]);
    }, false);
{
    var ralphScoreCCmake_plain_object = B1983['make-plain-object'], Bcore_macros__2051 = ralphScoreCCmake_plain_object();
    (exports)['$core-macros'] = Bcore_macros__2051;
}
{
    var ralphScoreCCget_setter = B1983['get-setter'], B2055 = $S('if', 'ralph/core'), B2056 = $S('begin', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'when', function B2057(____2058, test__2059) {
        var forms__2060 = $SL.call(arguments, 2);
        return([
            B2055,
            test__2059,
            ralphScoreCCMconcat([B2056], forms__2060),
            false
        ]);
    });
}
{
    var B2063 = $S('not', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'unless', function B2064(____2065, test__2066) {
        var forms__2067 = $SL.call(arguments, 2);
        return([
            B2055,
            [
                B2063,
                test__2066
            ],
            ralphScoreCCMconcat([B2056], forms__2067),
            false
        ]);
    });
}
{
    var B2071 = $S('set!', 'ralph/core'), B2072 = $S('parallel-set!', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'parallel-set!', function B2073(____2074, identifier__2075, new_value__2076) {
        var clauses__2077 = $SL.call(arguments, 3);
        if (($T)(ralphScoreCCemptyQ(clauses__2077)))
            return([
                B2071,
                identifier__2075,
                new_value__2076
            ]);
        else {
            var value__2078 = ralphScoreCCgenerate_symbol();
            return([
                B2014,
                [[
                        value__2078,
                        new_value__2076
                    ]],
                ralphScoreCCMconcat([B2072], clauses__2077),
                [
                    B2071,
                    identifier__2075,
                    value__2078
                ]
            ]);
        }
    });
}
{
    var ralphScompilerSutilitiesCCcheck_type = B1987['check-type'], ralphScoreCCEE = B1983['=='], ralphScoreCCrest = B1983['rest'], B2082 = $K('else'), B2083 = $S('cond', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'cond', function B2084(____2085) {
        var cases__2086 = $SL.call(arguments, 1);
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(cases__2086)))) {
            var case__2087 = ralphScoreCCfirst(cases__2086);
            ralphScompilerSutilitiesCCcheck_type(case__2087, ralphScoreCCLarrayG, 'Non-array case in cond: %=');
            var test__2088 = case__2087[0], forms__2089 = $SL.call(case__2087, 1), form__2090 = ralphScoreCCMconcat([B2056], forms__2089);
            if (($T)(ralphScoreCCEE(test__2088, B2082)))
                return(form__2090);
            else
                return([
                    B2055,
                    test__2088,
                    form__2090,
                    ralphScoreCCMconcat([B2083], ralphScoreCCrest(cases__2086))
                ]);
        } else
            return(false);
    });
}
{
    var B2095 = $S('when', 'ralph/core'), B2096 = $S('and', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'and', function B2097(____2098) {
        var forms__2099 = $SL.call(arguments, 1), B2100 = ralphScoreCCsize(forms__2099);
        if (($T)(ralphScoreCCEE(B2100, 0)))
            return(true);
        else if (($T)(ralphScoreCCEE(B2100, 1)))
            return(ralphScoreCCfirst(forms__2099));
        else
            return([
                B2095,
                ralphScoreCCfirst(forms__2099),
                ralphScoreCCMconcat([B2096], ralphScoreCCrest(forms__2099))
            ]);
    });
}
{
    var B2104 = $S('or', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'or', function B2105(____2106) {
        var forms__2107 = $SL.call(arguments, 1), B2108 = ralphScoreCCsize(forms__2107);
        if (($T)(ralphScoreCCEE(B2108, 0)))
            return(false);
        else if (($T)(ralphScoreCCEE(B2108, 1)))
            return(ralphScoreCCfirst(forms__2107));
        else {
            var value__2109 = ralphScoreCCgenerate_symbol();
            return([
                B2014,
                [[
                        value__2109,
                        ralphScoreCCfirst(forms__2107)
                    ]],
                [
                    B2055,
                    value__2109,
                    value__2109,
                    ralphScoreCCMconcat([B2104], ralphScoreCCrest(forms__2107))
                ]
            ]);
        }
    });
}
ralphScoreCCget_setter(Bcore_macros__2051, 'if-bind', function B2111(____2112, binding__2113, consequent__2114, alternate__2115) {
    var superflous__2116 = $SL.call(arguments, 4);
    ralphScompilerSutilitiesCCcheck_type(binding__2113, ralphScoreCCLarrayG, 'Non-array binding in if-bind: %=');
    var var__2117 = binding__2113[0], value__2118 = binding__2113[1], temp__2119 = ralphScoreCCgenerate_symbol();
    return([
        B2014,
        [[
                temp__2119,
                value__2118
            ]],
        [
            B2055,
            temp__2119,
            [
                B2014,
                [[
                        var__2117,
                        temp__2119
                    ]],
                consequent__2114
            ],
            alternate__2115
        ]
    ]);
});
{
    var B2122 = $S('while', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'until', function B2123(____2124, test__2125) {
        var forms__2126 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([
            B2122,
            [
                B2063,
                test__2125
            ]
        ], forms__2126));
    });
}
{
    var ralphScoreCCLsymbolG = B1983['<symbol>'], B2132 = $S('for', 'ralph/core'), B2133 = $S('inc', 'ralph/core'), B2134 = $S('binary>=', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'dotimes', function B2135(____2136, binding__2137) {
        var forms__2138 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(binding__2137, ralphScoreCCLarrayG, 'Non-array binding in dotimes: %=');
        var temp__2139 = ralphScoreCCgenerate_symbol(), var__2140 = binding__2137[0], count__2141 = binding__2137[1], result__2142 = binding__2137[2];
        ralphScompilerSutilitiesCCcheck_type(var__2140, ralphScoreCCLsymbolG, 'Non-symbol var in dotimes: %=');
        var B2144 = [[
                    temp__2139,
                    count__2141
                ]], B2145 = [[
                    var__2140,
                    0,
                    [
                        B2133,
                        var__2140
                    ]
                ]], B2146 = [
                B2134,
                var__2140,
                temp__2139
            ], B2143 = result__2142, B2147 = false;
        if (($T)(B2143))
            B2147 = B2143;
        else
            B2147 = false;
        var B2148 = [
                B2146,
                B2147
            ], B2149 = [
                B2132,
                B2145,
                B2148
            ], B2150 = ralphScoreCCMconcat(B2149, forms__2138);
        return([
            B2014,
            B2144,
            B2150
        ]);
    });
}
{
    var ralphScoreCCanyQ = B1983['any?'], ralphScoreCCpush_last = B1983['push-last'], ralphScoreCCslice = B1983['slice'], ralphScoreCCthird = B1983['third'], B2160 = $S('method', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'for', function B2161(____2162, clauses__2163, end_clause__2164) {
        var forms__2165 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(clauses__2163, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__2164, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        var init_clauses__2166 = [], next_clauses__2167 = [], vars__2168 = ralphScoreCCmap(ralphScoreCCfirst, clauses__2163), B2169 = clauses__2163, B2170 = false, B2171 = false, B2172 = [B2169];
        while (true) {
            var B2173 = B2170, B2178 = false;
            if (($T)(B2173))
                B2178 = B2173;
            else
                B2178 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B2172);
            var B2179 = ralphScoreCCnot(B2178);
            if (($T)(B2179)) {
                var clause__2174 = ralphScoreCCfirst(B2169);
                (function B2175(clause__2176) {
                    ralphScompilerSutilitiesCCcheck_type(clause__2176, ralphScoreCCLarrayG, 'Non-array clause in for: %=');
                    ralphScoreCCpush_last(init_clauses__2166, ralphScoreCCslice(clause__2176, 0, 2));
                    ralphScoreCCpush_last(next_clauses__2167, ralphScoreCCfirst(clause__2176));
                    return(ralphScoreCCpush_last(next_clauses__2167, ralphScoreCCthird(clause__2176)));
                }(clause__2174));
                B2169 = ralphScoreCCrest(B2169);
                B2172 = [B2169];
            } else
                break;
        }
        B2171;
        var B2177 = ralphScoreCCemptyQ(end_clause__2164), B2180 = false;
        if (($T)(B2177))
            B2180 = B2177;
        else
            B2180 = [
                B2063,
                ralphScoreCCfirst(end_clause__2164)
            ];
        var B2181 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                    B2160,
                    vars__2168
                ], forms__2165)], vars__2168), B2182 = ralphScoreCCMconcat([B2072], next_clauses__2167), B2183 = [
                B2122,
                B2180,
                B2181,
                B2182
            ], B2184 = ralphScoreCCMconcat([B2056], ralphScoreCCrest(end_clause__2164));
        return([
            B2014,
            init_clauses__2166,
            B2183,
            B2184
        ]);
    });
}
{
    var ralphScoreCCcons = B1983['cons'], ralphScoreCCsecond = B1983['second'], B2197 = $S('rest', 'ralph/core'), B2198 = $S('%array', 'ralph/core'), B2199 = $S('until', 'ralph/core'), B2200 = $S('any?', 'ralph/core'), B2201 = $S('empty?', 'ralph/core'), B2202 = $S('first', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'for-each', function B2203(____2204, clauses__2205, end_clause__2206) {
        var forms__2207 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(clauses__2205, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__2206, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        var clauses__2210 = ralphScoreCCmap(function B2208(clause__2209) {
                ralphScompilerSutilitiesCCcheck_type(clause__2209, ralphScoreCCLarrayG, 'Non-array clause in for-each: %=');
                return(ralphScoreCCcons(ralphScoreCCgenerate_symbol(), clause__2209));
            }, clauses__2205), endQ__2211 = ralphScoreCCgenerate_symbol(), values__2212 = ralphScoreCCgenerate_symbol(), result__2213 = ralphScoreCCgenerate_symbol(), vars__2214 = ralphScoreCCmap(ralphScoreCCsecond, clauses__2210), B2230 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                    B2160,
                    vars__2214
                ], forms__2207)], vars__2214), B2231 = [
                B2056,
                B2230
            ], B2232 = ralphScoreCCmap(function B2215(clause__2216) {
                return([
                    B2071,
                    ralphScoreCCfirst(clause__2216),
                    [
                        B2197,
                        ralphScoreCCfirst(clause__2216)
                    ]
                ]);
            }, clauses__2210), B2233 = ralphScoreCCMconcat(B2231, B2232), B2234 = [[
                    B2071,
                    values__2212,
                    ralphScoreCCMconcat([B2198], ralphScoreCCmap(ralphScoreCCfirst, clauses__2210))
                ]], form__2217 = ralphScoreCCMconcat(B2233, B2234), B2235 = ralphScoreCCMconcat(ralphScoreCCMconcat([], ralphScoreCCmap(function B2218(clause__2219) {
                var temp__2220 = clause__2219[0], var__2221 = clause__2219[1], values__2222 = clause__2219[2];
                return([
                    temp__2220,
                    values__2222
                ]);
            }, clauses__2210)), [
                [
                    endQ__2211,
                    false
                ],
                [
                    result__2213,
                    false
                ],
                [
                    values__2212,
                    ralphScoreCCMconcat([B2198], ralphScoreCCmap(ralphScoreCCfirst, clauses__2210))
                ]
            ]), B2236 = [
                B2104,
                endQ__2211,
                [
                    B2200,
                    B2201,
                    values__2212
                ]
            ], B2237 = ralphScoreCCmap(function B2223(clause__2224) {
                var temp__2225 = clause__2224[0], var__2226 = clause__2224[1], values__2227 = clause__2224[2];
                return([
                    var__2226,
                    [
                        B2202,
                        temp__2225
                    ]
                ]);
            }, clauses__2210), B2228 = ralphScoreCCfirst(end_clause__2206), B2238 = false;
        if (($T)(B2228)) {
            var end_test__2229 = B2228;
            B2238 = [
                B2055,
                end_test__2229,
                [
                    B2056,
                    [
                        B2071,
                        result__2213,
                        ralphScoreCCMconcat([B2056], ralphScoreCCrest(end_clause__2206))
                    ],
                    [
                        B2071,
                        endQ__2211,
                        true
                    ]
                ],
                form__2217
            ];
        } else
            B2238 = form__2217;
        var B2239 = [
                B2014,
                B2237,
                B2238
            ], B2240 = [
                B2199,
                B2236,
                B2239
            ];
        return([
            B2014,
            B2235,
            B2240,
            result__2213
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__2051, 'select', function B2244(____2245, value__2246, test__2247) {
    var cases__2248 = $SL.call(arguments, 3), valueT__2249 = ralphScoreCCgenerate_symbol(), testT__2250 = false;
    if (($T)(ralphScoreCCinstanceQ(test__2247, ralphScoreCCLsymbolG)))
        testT__2250 = test__2247;
    else
        testT__2250 = ralphScoreCCgenerate_symbol();
    var test_expression__2251 = false;
    test_expression__2251 = function B2252(test_value__2253) {
        return([
            testT__2250,
            valueT__2249,
            test_value__2253
        ]);
    };
    var B2258 = [[
                valueT__2249,
                value__2246
            ]], B2259 = false;
    if (($T)(ralphScoreCCinstanceQ(test__2247, ralphScoreCCLsymbolG)))
        B2259 = [];
    else
        B2259 = [[
                testT__2250,
                test__2247
            ]];
    var B2260 = ralphScoreCCconcatenate(B2258, B2259), B2261 = ralphScoreCCMconcat([B2083], ralphScoreCCmap(function B2254(case__2255) {
            ralphScompilerSutilitiesCCcheck_type(case__2255, ralphScoreCCLarrayG, 'Non-array case in select: %=');
            var test_forms__2256 = case__2255[0], forms__2257 = $SL.call(case__2255, 1);
            if (($T)(ralphScoreCCEE(test_forms__2256, B2082)))
                return(case__2255);
            else {
                ralphScompilerSutilitiesCCcheck_type(test_forms__2256, ralphScoreCCLarrayG, 'Non-array set of test forms in select: %=');
                return(ralphScoreCCMconcat([ralphScoreCCMconcat([B2104], ralphScoreCCmap(test_expression__2251, test_forms__2256))], forms__2257));
            }
        }, cases__2248));
    return([
        B2014,
        B2260,
        B2261
    ]);
});
var ralphScoreCCreduce = B1983['reduce'], ralphScoreCC_ = B1983['-'], ralphScoreCCreverse = B1983['reverse'], B2266 = $S('%get-property', 'ralph/core'), destructure__2279 = ralphScoreCCMmake_function('destructure', function B2267(bindings__2268, values__2269, form__2270) {
        if (($T)(ralphScoreCCinstanceQ(values__2269, ralphScoreCCLsymbolG))) {
            ralphScompilerSutilitiesCCcheck_type(bindings__2268, ralphScoreCCLarrayG, 'Non-array set of bindings while destructuring: %=');
            var B2271 = ralphScompilerSutilitiesCCdestructure_parameter_list(bindings__2268), normal_parameters__2272 = B2271[0], rest_parameter__2273 = B2271[1], keyword_parameters__2274 = B2271[2], i__2275 = ralphScoreCCsize(normal_parameters__2272);
            return(ralphScoreCCreduce(function B2276(form__2277, binding__2278) {
                i__2275 = ralphScoreCC_(i__2275, 1);
                if (($T)(ralphScoreCCinstanceQ(binding__2278, ralphScoreCCLsymbolG)))
                    return([
                        B2014,
                        [[
                                binding__2278,
                                [
                                    B2266,
                                    values__2269,
                                    i__2275
                                ]
                            ]],
                        form__2277
                    ]);
                else
                    return(destructure__2279(binding__2278, [
                        B2266,
                        values__2269,
                        i__2275
                    ], form__2277));
            }, wrap_restSkeys__2027(form__2270, values__2269, normal_parameters__2272, rest_parameter__2273, keyword_parameters__2274), ralphScoreCCreverse(normal_parameters__2272)));
        } else {
            var var__2280 = ralphScoreCCgenerate_symbol();
            return([
                B2014,
                [[
                        var__2280,
                        values__2269
                    ]],
                destructure__2279(bindings__2268, var__2280, form__2270)
            ]);
        }
    }, false);
ralphScoreCCget_setter(Bcore_macros__2051, 'destructuring-bind', function B2282(____2283, bindings__2284, values__2285) {
    var forms__2286 = $SL.call(arguments, 3);
    return(destructure__2279(bindings__2284, values__2285, ralphScoreCCMconcat([B2056], forms__2286)));
});
ralphScoreCCget_setter(Bcore_macros__2051, 'bind-properties', function B2289(____2290, properties__2291, object__2292) {
    var forms__2293 = $SL.call(arguments, 3), objectT__2294 = ralphScoreCCgenerate_symbol();
    return(ralphScoreCCMconcat([
        B2014,
        ralphScoreCCMconcat([[
                objectT__2294,
                object__2292
            ]], ralphScoreCCmap(function B2295(property__2296) {
            return([
                property__2296,
                [
                    B2266,
                    objectT__2294,
                    ralphScoreCCsymbol_name(property__2296)
                ]
            ]);
        }, properties__2291))
    ], forms__2293));
});
ralphScoreCCget_setter(Bcore_macros__2051, 'bind-methods', function B2299(____2300, bindings__2301) {
    var forms__2302 = $SL.call(arguments, 2);
    ralphScompilerSutilitiesCCcheck_type(bindings__2301, ralphScoreCCLarrayG, 'Non-array set of bindings in bind-methods: %=');
    return(ralphScoreCCMconcat(ralphScoreCCMconcat([
        B2014,
        ralphScoreCCmap(ralphScoreCCfirst, bindings__2301)
    ], ralphScoreCCmap(function B2303(binding__2304) {
        ralphScompilerSutilitiesCCcheck_type(bindings__2301, ralphScoreCCLarrayG, 'Non-array binding in bind-methods: %=');
        var identifier__2305 = binding__2304[0], parameter_list__2306 = binding__2304[1], forms__2307 = $SL.call(binding__2304, 2);
        return([
            B2071,
            identifier__2305,
            ralphScoreCCMconcat([
                B2160,
                parameter_list__2306
            ], forms__2307)
        ]);
    }, bindings__2301)), forms__2302));
});
{
    var B2315 = $S('generate-symbol', 'ralph/core'), B2316 = $S('quote', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'once-only', function B2317(____2318, names__2319) {
        var forms__2320 = $SL.call(arguments, 2), symbols__2323 = ralphScoreCCmap(function B2321(name__2322) {
                return(ralphScoreCCgenerate_symbol());
            }, names__2319);
        return([
            B2014,
            ralphScoreCCMconcat([], ralphScoreCCmap(function B2324(symbol__2325) {
                return([
                    symbol__2325,
                    [B2315]
                ]);
            }, symbols__2323)),
            [
                B2198,
                [
                    B2316,
                    B2014
                ],
                ralphScoreCCMconcat([B2198], ralphScoreCCmap(function B2326(symbol__2327, name__2328) {
                    return([
                        B2198,
                        symbol__2327,
                        name__2328
                    ]);
                }, symbols__2323, names__2319)),
                ralphScoreCCMconcat([
                    B2014,
                    ralphScoreCCMconcat([], ralphScoreCCmap(function B2329(name__2330, symbol__2331) {
                        return([
                            name__2330,
                            symbol__2331
                        ]);
                    }, names__2319, symbols__2323))
                ], forms__2320)
            ]
        ]);
    });
}
{
    var B2335 = $S('+', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'inc!', function B2336(____2337, object__2338, value__2339) {
        var B2340 = value__2339, B2341 = false;
        if (($T)(B2340))
            B2341 = B2340;
        else
            B2341 = 1;
        var B2342 = [
                B2335,
                object__2338,
                B2341
            ];
        return([
            B2071,
            object__2338,
            B2342
        ]);
    });
}
{
    var B2346 = $S('-', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'dec!', function B2347(____2348, object__2349, value__2350) {
        var B2351 = value__2350, B2352 = false;
        if (($T)(B2351))
            B2352 = B2351;
        else
            B2352 = 1;
        var B2353 = [
                B2346,
                object__2349,
                B2352
            ];
        return([
            B2071,
            object__2349,
            B2353
        ]);
    });
}
var ralphScoreCCsignal = B1983['signal'], ralphSformatCCformat_to_string = B1986['format-to-string'], signal_unsupported_dot_name__2357 = ralphScoreCCMmake_function('signal_unsupported_dot_name', function B2355(property__2356) {
        return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Unsupported name for call in dot: %=', property__2356)));
    }, false);
{
    var ralphScoreCCLstringG = B1983['<string>'];
    ralphScoreCCget_setter(Bcore_macros__2051, '.', function B2362(____2363, form__2364) {
        var calls__2365 = $SL.call(arguments, 2);
        return(ralphScoreCCreduce(function B2366(form__2367, call__2368) {
            ralphScompilerSutilitiesCCcheck_type(call__2368, ralphScoreCCLarrayG, 'Non-array call in dot: %=');
            var property__2369 = call__2368[0], arguments__2370 = $SL.call(call__2368, 1), bindings__2373 = ralphScoreCCmap(function B2371(argument__2372) {
                    return([
                        ralphScoreCCgenerate_symbol(),
                        argument__2372
                    ]);
                }, arguments__2370), formT__2374 = ralphScoreCCgenerate_symbol(), B2376 = [[
                        formT__2374,
                        form__2367
                    ]], B2375 = property__2369, B2377 = false;
            if (($T)(ralphScoreCCinstanceQ(B2375, ralphScoreCCLstringG)))
                B2377 = property__2369;
            else if (($T)(ralphScoreCCinstanceQ(B2375, ralphScoreCCLsymbolG)))
                B2377 = ralphScoreCCsymbol_name(property__2369);
            else
                B2377 = signal_unsupported_dot_name__2357(property__2369);
            var B2378 = [
                    B2266,
                    formT__2374,
                    B2377
                ], B2379 = [B2378], B2380 = ralphScoreCCmap(ralphScoreCCfirst, bindings__2373), B2381 = ralphScoreCCMconcat(B2379, B2380), B2382 = [
                    B2014,
                    bindings__2373,
                    B2381
                ];
            return([
                B2014,
                B2376,
                B2382
            ]);
        }, form__2364, calls__2365));
    });
}
var ralphScoreCCMkeys = B1983['%keys'], ralphScompilerSutilitiesCCsetter_identifierQ = B1987['setter-identifier?'], ralphScompilerSutilitiesCCtransform_setter_identifier = B1987['transform-setter-identifier'], ralphScoreCCG = B1983['>'], B2392 = $S('define', 'ralph/core'), B2393 = $S('%native-name', 'ralph/core'), B2394 = $S('<object>', 'ralph/core'), make_function_definer__2414 = ralphScoreCCMmake_function('make_function_definer', function B2395(macro_name__2396, definer__2397) {
        var B2398 = $SL.call(arguments, 2), B2399 = ralphScoreCCMkeys(B2398, {
                'type/existing?': false,
                'record?': false
            }), typeSexistingQ__2400 = B2399['type/existing?'], recordQ__2401 = B2399['record?'];
        return(function B2402(env__2403, identifier__2404, parameter_list__2405) {
            var forms__2406 = $SL.call(arguments, 3), B2407 = false;
            if (($T)(ralphScompilerSutilitiesCCsetter_identifierQ(identifier__2404)))
                B2407 = [
                    true,
                    ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCsecond(identifier__2404))
                ];
            else
                B2407 = [
                    false,
                    identifier__2404
                ];
            var setterQ__2408 = B2407[0], identifier__2409 = B2407[1], B2410 = ralphScoreCCinstanceQ(identifier__2409, ralphScoreCCLsymbolG), B2415 = false;
            if (($T)(B2410))
                B2415 = B2410;
            else
                B2415 = setterQ__2408;
            var B2416 = ralphScoreCCnot(B2415);
            if (($T)(B2416))
                ralphScoreCCsignal(ralphSformatCCformat_to_string('Identifier not symbol or setter in %s: %=', macro_name__2396, identifier__2409));
            var B2417 = false;
            if (($T)(typeSexistingQ__2400))
                B2417 = ralphScoreCCemptyQ(parameter_list__2405);
            else
                B2417 = false;
            if (($T)(B2417))
                ralphScoreCCsignal(ralphSformatCCformat_to_string('Empty parameter-list in %s: %=', macro_name__2396, parameter_list__2405));
            var name__2411 = ralphScoreCCsymbol_name(identifier__2409), definition__2412 = ralphScoreCCMconcat([
                    B2160,
                    parameter_list__2405
                ], forms__2406);
            if (($T)(recordQ__2401))
                ralphScoreCCget_setter(env__2403, 'module', 'functions', name__2411, definition__2412);
            var B2418 = [
                    definer__2397,
                    [
                        B2393,
                        name__2411
                    ],
                    definition__2412,
                    setterQ__2408
                ], B2421 = false;
            if (($T)(typeSexistingQ__2400)) {
                var head__2413 = ralphScoreCCfirst(parameter_list__2405), B2419 = false;
                if (($T)(ralphScoreCCinstanceQ(head__2413, ralphScoreCCLarrayG)))
                    B2419 = ralphScoreCCG(ralphScoreCCsize(head__2413), 1);
                else
                    B2419 = false;
                var B2420 = false;
                if (($T)(B2419))
                    B2420 = ralphScoreCCsecond(head__2413);
                else
                    B2420 = B2394;
                B2421 = [
                    B2420,
                    identifier__2409
                ];
            } else
                B2421 = [];
            var B2422 = ralphScoreCCMconcat(B2418, B2421);
            return([
                B2392,
                identifier__2409,
                B2422
            ]);
        });
    }, false);
{
    var ralphScoreCCapply = B1983['apply'], B2433 = $S('%make-function', 'ralph/core'), B2434 = $K('record?'), B2435 = $S('%make-method', 'ralph/core'), B2436 = $K('type/existing?'), B2437 = [
            [
                'define-function',
                B2433,
                B2434,
                true
            ],
            [
                'define-method',
                B2435,
                B2436,
                true
            ]
        ], B2438 = false, B2439 = false, B2440 = [B2437];
    while (true) {
        var B2441 = B2438, B2445 = false;
        if (($T)(B2441))
            B2445 = B2441;
        else
            B2445 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B2440);
        var B2446 = ralphScoreCCnot(B2445);
        if (($T)(B2446)) {
            var arguments__2442 = ralphScoreCCfirst(B2437);
            (function B2443(arguments__2444) {
                return(ralphScoreCCget_setter(Bcore_macros__2051, ralphScoreCCfirst(arguments__2444), ralphScoreCCapply(make_function_definer__2414, arguments__2444)));
            }(arguments__2442));
            B2437 = ralphScoreCCrest(B2437);
            B2440 = [B2437];
        } else
            break;
    }
    B2439;
}
{
    var B2449 = $S('%make-generic', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'define-generic', function B2450(____2451, identifier__2452, arguments__2453) {
        var superflous__2454 = $SL.call(arguments, 3);
        return([
            B2392,
            identifier__2452,
            [
                B2449,
                [
                    B2393,
                    ralphScoreCCsymbol_name(identifier__2452)
                ]
            ]
        ]);
    });
}
{
    var B2462 = $S('%make-class', 'ralph/core'), B2463 = $S('%begin', 'ralph/core'), B2464 = $S('%set', 'ralph/core'), B2465 = $S('%native', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'define-class', function B2466(____2467, identifier__2468, superclass__2469) {
        var properties__2470 = $SL.call(arguments, 3), B2475 = false;
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(superclass__2469))))
            B2475 = ralphScoreCCfirst(superclass__2469);
        else
            B2475 = false;
        var B2476 = ralphScoreCCMconcat([B1996], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2471(property__2472) {
                if (($T)(ralphScoreCCinstanceQ(property__2472, ralphScoreCCLarrayG)))
                    return([
                        ralphScoreCCsymbol_name(ralphScoreCCfirst(property__2472)),
                        [
                            B2160,
                            [],
                            ralphScoreCCsecond(property__2472)
                        ]
                    ]);
                else
                    return([
                        ralphScoreCCsymbol_name(property__2472),
                        false
                    ]);
            }, properties__2470))), B2481 = [
                B2040,
                identifier__2468,
                [],
                ralphScoreCCMconcat([B2463], ralphScoreCCmap(function B2473(property__2474) {
                    var B2477 = [
                            B2465,
                            'this'
                        ], B2478 = false;
                    if (($T)(ralphScoreCCinstanceQ(property__2474, ralphScoreCCLarrayG)))
                        B2478 = ralphScoreCCsymbol_name(ralphScoreCCfirst(property__2474));
                    else
                        B2478 = ralphScoreCCsymbol_name(property__2474);
                    var B2479 = [
                            B2266,
                            B2477,
                            B2478
                        ], B2480 = [
                            B2465,
                            'undefined'
                        ];
                    return([
                        B2464,
                        B2479,
                        B2480
                    ]);
                }, properties__2470))
            ], B2482 = [
                B2462,
                B2475,
                B2476,
                B2481
            ];
        return([
            B2392,
            identifier__2468,
            B2482
        ]);
    });
}
{
    var B2485 = $S('define-function', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'define-macro', function B2486(____2487, identifier__2488, parameter_list__2489) {
        var forms__2490 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2488, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-macro: %=');
        ralphScompilerSutilitiesCCcheck_type(parameter_list__2489, ralphScoreCCLarrayG, 'Non-array parameter-list in define-macro: %=');
        return([
            B2056,
            ralphScoreCCMconcat([
                B2485,
                identifier__2488,
                ralphScoreCCMconcat([ralphScoreCCgenerate_symbol()], parameter_list__2489)
            ], forms__2490),
            [
                B2071,
                [
                    B2266,
                    identifier__2488,
                    '%macro?'
                ],
                true
            ]
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__2051, 'define-symbol-macro', function B2492(____2493, identifier__2494, parameter_list__2495) {
    var forms__2496 = $SL.call(arguments, 3);
    ralphScompilerSutilitiesCCcheck_type(identifier__2494, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-symbol-macro: %=');
    ralphScompilerSutilitiesCCcheck_type(parameter_list__2495, ralphScoreCCLarrayG, 'Non-array parameter-list in define-symbol-macro: %=');
    return([
        B2056,
        ralphScoreCCMconcat([
            B2485,
            identifier__2494,
            []
        ], forms__2496),
        [
            B2071,
            [
                B2266,
                identifier__2494,
                '%symbol-macro?'
            ],
            true
        ]
    ]);
});
{
    var B2499 = $S('next-method', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2051, 'call-next-method', function B2500(____2501) {
        var superflous__2502 = $SL.call(arguments, 1);
        return([
            [
                B2266,
                B2499,
                'apply'
            ],
            [
                B2465,
                'null'
            ],
            B2041
        ]);
    });
}
{
    var Bcore_symbol_macros__2503 = ralphScoreCCmake_plain_object();
    (exports)['$core-symbol-macros'] = Bcore_symbol_macros__2503;
}
{
    var B2507 = $S('%next-method', 'ralph/core'), B2508 = $S('%this-method');
    ralphScoreCCget_setter(Bcore_symbol_macros__2503, 'next-method', function B2509(____2510) {
        var superflous__2511 = $SL.call(arguments, 1);
        return([
            B2507,
            B2508
        ]);
    });
}
{
    var Binternal_macros__2512 = ralphScoreCCmake_plain_object();
    (exports)['$internal-macros'] = Binternal_macros__2512;
}
var B2516 = $S('%quote', 'ralph/core'), transform_quoted__2520 = ralphScoreCCMmake_function('transform_quoted', function B2517(form__2518) {
        var B2519 = form__2518;
        if (($T)(ralphScoreCCinstanceQ(B2519, ralphScoreCCLarrayG)))
            return(ralphScoreCCMconcat([B2198], ralphScoreCCmap(transform_quoted__2520, form__2518)));
        else if (($T)(ralphScoreCCinstanceQ(B2519, ralphScoreCCLsymbolG)))
            return([
                B2516,
                form__2518
            ]);
        else
            return(form__2518);
    }, false);
ralphScoreCCget_setter(Binternal_macros__2512, 'quote', function B2522(____2523, form__2524) {
    var superflous__2525 = $SL.call(arguments, 2);
    return(transform_quoted__2520(form__2524));
});
ralphScoreCCget_setter(Binternal_macros__2512, 'begin', function B2528(____2529) {
    var forms__2530 = $SL.call(arguments, 1), B2531 = ralphScoreCCsize(forms__2530);
    if (($T)(ralphScoreCCEE(B2531, 0)))
        return(false);
    else if (($T)(ralphScoreCCEE(B2531, 1)))
        return(ralphScoreCCfirst(forms__2530));
    else
        return(ralphScoreCCMconcat([B2463], forms__2530));
});
{
    var B2535 = $S('%bind', 'ralph/core');
    ralphScoreCCget_setter(Binternal_macros__2512, 'bind', function B2536(____2537, bindings__2538) {
        var forms__2539 = $SL.call(arguments, 2);
        return(ralphScoreCCreduce(function B2540(form__2541, binding__2542) {
            var B2543 = false;
            if (($T)(ralphScoreCCinstanceQ(binding__2542, ralphScoreCCLsymbolG)))
                B2543 = [
                    binding__2542,
                    false
                ];
            else
                B2543 = binding__2542;
            return([
                B2535,
                B2543,
                form__2541
            ]);
        }, ralphScoreCCMconcat([B2056], forms__2539), ralphScoreCCreverse(bindings__2538)));
    });
}
ralphScoreCCget_setter(Binternal_macros__2512, 'method', function B2545(____2546, parameter_list__2547) {
    var forms__2548 = $SL.call(arguments, 2);
    return(named_method__2050(ralphScoreCCgenerate_symbol(), parameter_list__2547, ralphScoreCCMconcat([B2056], forms__2548)));
});
{
    var B2551 = $S('%while', 'ralph/core');
    ralphScoreCCget_setter(Binternal_macros__2512, 'while', function B2552(____2553, test__2554) {
        var forms__2555 = $SL.call(arguments, 2);
        return([
            B2551,
            test__2554,
            ralphScoreCCMconcat([B2056], forms__2555)
        ]);
    });
}
{
    var B2558 = $S('%if', 'ralph/core');
    ralphScoreCCget_setter(Binternal_macros__2512, 'if', function B2559(____2560, test__2561, then__2562, else__2563) {
        var superflous__2564 = $SL.call(arguments, 4);
        return([
            B2558,
            test__2561,
            then__2562,
            else__2563
        ]);
    });
}
ralphScoreCCget_setter(Binternal_macros__2512, 'set!', function B2566(____2567, place__2568) {
    var new_values__2569 = $SL.call(arguments, 2), B2570 = false;
    if (($T)(ralphScoreCCinstanceQ(place__2568, ralphScoreCCLarrayG)))
        B2570 = ralphScoreCCnot(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(place__2568)), '%get-property'));
    else
        B2570 = false;
    if (($T)(B2570))
        return(ralphScoreCCMconcat(ralphScoreCCMconcat([ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCfirst(place__2568))], ralphScoreCCrest(place__2568)), new_values__2569));
    else
        return([
            B2464,
            place__2568,
            ralphScoreCCfirst(new_values__2569)
        ]);
});
{
    var B2574 = $S('%define', 'ralph/core');
    ralphScoreCCget_setter(Binternal_macros__2512, 'define', function B2575(env__2576, identifier__2577, value__2578) {
        var B2579 = value__2578, B2580 = false;
        if (($T)(B2579))
            B2580 = B2579;
        else
            B2580 = false;
        return([
            B2574,
            identifier__2577,
            B2580
        ]);
    });
}
{
    var B2588 = $S('%try', 'ralph/core'), B2589 = $S('instance?', 'ralph/core');
    ralphScoreCCget_setter(Binternal_macros__2512, 'handler-case', function B2590(____2591, protected_form__2592) {
        var cases__2593 = $SL.call(arguments, 2), condition_var__2594 = ralphScoreCCgenerate_symbol();
        return([
            B2588,
            protected_form__2592,
            condition_var__2594,
            ralphScoreCCMconcat([B2083], ralphScoreCCmap(function B2595(case__2596) {
                var B2597 = case__2596[0], type__2598 = B2597[0], B2599 = $SL.call(B2597, 1), B2600 = ralphScoreCCMkeys(B2599, { 'condition': false }), condition__2601 = B2600['condition'], body__2602 = $SL.call(case__2596, 1), B2603 = [[
                            B2589,
                            condition_var__2594,
                            type__2598
                        ]], B2604 = false;
                if (($T)(condition__2601))
                    B2604 = [ralphScoreCCMconcat([
                            B2014,
                            [[
                                    condition__2601,
                                    condition_var__2594
                                ]]
                        ], body__2602)];
                else
                    B2604 = body__2602;
                return(ralphScoreCCconcatenate(B2603, B2604));
            }, cases__2593))
        ]);
    });
}
{
    var Binternal_symbol_macros__2605 = ralphScoreCCmake_plain_object();
    (exports)['$internal-symbol-macros'] = Binternal_symbol_macros__2605;
}
