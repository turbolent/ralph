var B1984 = require('ralph/core');
var B1987 = require('ralph/format'), B1988 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B1984['%var'], ralphScoreCCMmake_function = B1984['%make-function'], ralphScoreCCmap = B1984['map'], ralphScoreCCinstanceQ = B1984['instance?'], ralphScoreCCLarrayG = B1984['<array>'], ralphScoreCCfirst = B1984['first'], ralphScoreCCMconcat = B1984['%concat'], ralphScoreCCreduce1 = B1984['reduce1'], ralphScoreCCconcatenate = B1984['concatenate'], ralphScoreCCsymbol_name = B1984['symbol-name'], B1995 = $S('bind-properties', 'ralph/core'), B1996 = $S('%keys', 'ralph/core'), B1997 = $S('%object'), wrap_keys__2009 = ralphScoreCCMmake_function('wrap_keys', function B1998(form__1999, rest_parameter__2000, keyword_parameters__2001) {
        var keyword_parametersT__2004 = ralphScoreCCmap(function B2002(parameter__2003) {
                if (($T)(ralphScoreCCinstanceQ(parameter__2003, ralphScoreCCLarrayG)))
                    return(parameter__2003);
                else
                    return([
                        parameter__2003,
                        false
                    ]);
            }, keyword_parameters__2001);
        return([
            B1995,
            ralphScoreCCmap(ralphScoreCCfirst, keyword_parametersT__2004),
            [
                B1996,
                rest_parameter__2000,
                ralphScoreCCMconcat([B1997], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2005(parameter__2006) {
                    var key__2007 = parameter__2006[0], value__2008 = parameter__2006[1];
                    return([
                        ralphScoreCCsymbol_name(key__2007),
                        value__2008
                    ]);
                }, keyword_parametersT__2004)))
            ],
            form__1999
        ]);
    }, false);
var ralphScoreCCnot = B1984['not'], ralphScoreCCemptyQ = B1984['empty?'], ralphScoreCCgenerate_symbol = B1984['generate-symbol'], ralphScoreCCsize = B1984['size'], B2015 = $S('bind', 'ralph/core'), B2016 = $S('%native-call'), wrap_restSkeys__2028 = ralphScoreCCMmake_function('wrap_restSkeys', function B2017(form__2018, all_parameters__2019, normal_parameters__2020, rest_parameter__2021, keyword_parameters__2022) {
        var restQ__2023 = rest_parameter__2021, B2024 = rest_parameter__2021, rest_parameter__2025 = false;
        if (($T)(B2024))
            rest_parameter__2025 = B2024;
        else if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__2022))))
            rest_parameter__2025 = ralphScoreCCgenerate_symbol();
        else
            rest_parameter__2025 = false;
        var formT__2026 = false;
        if (($T)(ralphScoreCCemptyQ(keyword_parameters__2022)))
            formT__2026 = form__2018;
        else
            formT__2026 = wrap_keys__2009(form__2018, rest_parameter__2025, keyword_parameters__2022);
        var B2027 = restQ__2023, B2029 = false;
        if (($T)(B2027))
            B2029 = B2027;
        else
            B2029 = ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__2022));
        if (($T)(B2029))
            return([
                B2015,
                [[
                        rest_parameter__2025,
                        [
                            B2016,
                            '$SL.call',
                            all_parameters__2019,
                            ralphScoreCCsize(normal_parameters__2020)
                        ]
                    ]],
                formT__2026
            ]);
        else
            return(formT__2026);
    }, false);
var strip_types__2036 = ralphScoreCCMmake_function('strip_types', function B2032(parameters__2033) {
        return(ralphScoreCCmap(function B2034(parameter__2035) {
            if (($T)(ralphScoreCCinstanceQ(parameter__2035, ralphScoreCCLarrayG)))
                return(ralphScoreCCfirst(parameter__2035));
            else
                return(parameter__2035);
        }, parameters__2033));
    }, false);
var ralphScompilerSutilitiesCCdestructure_parameter_list = B1988['destructure-parameter-list'], B2041 = $S('%method'), B2042 = $S('%all-arguments'), named_method__2051 = ralphScoreCCMmake_function('named_method', function B2043(name__2044, parameter_list__2045, form__2046) {
        var B2047 = ralphScompilerSutilitiesCCdestructure_parameter_list(parameter_list__2045), normal_parameters__2048 = B2047[0], rest_parameter__2049 = B2047[1], keyword_parameters__2050 = B2047[2];
        return([
            B2041,
            name__2044,
            strip_types__2036(normal_parameters__2048),
            wrap_restSkeys__2028(form__2046, B2042, normal_parameters__2048, rest_parameter__2049, keyword_parameters__2050)
        ]);
    }, false);
{
    var ralphScoreCCmake_plain_object = B1984['make-plain-object'], Bcore_macros__2052 = ralphScoreCCmake_plain_object();
    (exports)['$core-macros'] = Bcore_macros__2052;
}
{
    var ralphScoreCCget_setter = B1984['get-setter'], B2056 = $S('if', 'ralph/core'), B2057 = $S('begin', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'when', function B2058(____2059, test__2060) {
        var forms__2061 = $SL.call(arguments, 2);
        return([
            B2056,
            test__2060,
            ralphScoreCCMconcat([B2057], forms__2061),
            false
        ]);
    });
}
{
    var B2064 = $S('not', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'unless', function B2065(____2066, test__2067) {
        var forms__2068 = $SL.call(arguments, 2);
        return([
            B2056,
            [
                B2064,
                test__2067
            ],
            ralphScoreCCMconcat([B2057], forms__2068),
            false
        ]);
    });
}
{
    var B2072 = $S('set!', 'ralph/core'), B2073 = $S('parallel-set!', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'parallel-set!', function B2074(____2075, identifier__2076, new_value__2077) {
        var clauses__2078 = $SL.call(arguments, 3);
        if (($T)(ralphScoreCCemptyQ(clauses__2078)))
            return([
                B2072,
                identifier__2076,
                new_value__2077
            ]);
        else {
            var value__2079 = ralphScoreCCgenerate_symbol();
            return([
                B2015,
                [[
                        value__2079,
                        new_value__2077
                    ]],
                ralphScoreCCMconcat([B2073], clauses__2078),
                [
                    B2072,
                    identifier__2076,
                    value__2079
                ]
            ]);
        }
    });
}
{
    var ralphScompilerSutilitiesCCcheck_type = B1988['check-type'], ralphScoreCCEE = B1984['=='], ralphScoreCCrest = B1984['rest'], B2083 = $K('else'), B2084 = $S('cond', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'cond', function B2085(____2086) {
        var cases__2087 = $SL.call(arguments, 1);
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(cases__2087)))) {
            var case__2088 = ralphScoreCCfirst(cases__2087);
            ralphScompilerSutilitiesCCcheck_type(case__2088, ralphScoreCCLarrayG, 'Non-array case in cond: %=');
            var test__2089 = case__2088[0], forms__2090 = $SL.call(case__2088, 1), form__2091 = ralphScoreCCMconcat([B2057], forms__2090);
            if (($T)(ralphScoreCCEE(test__2089, B2083)))
                return(form__2091);
            else
                return([
                    B2056,
                    test__2089,
                    form__2091,
                    ralphScoreCCMconcat([B2084], ralphScoreCCrest(cases__2087))
                ]);
        } else
            return(false);
    });
}
{
    var B2096 = $S('when', 'ralph/core'), B2097 = $S('and', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'and', function B2098(____2099) {
        var forms__2100 = $SL.call(arguments, 1), B2101 = ralphScoreCCsize(forms__2100);
        if (($T)(ralphScoreCCEE(B2101, 0)))
            return(true);
        else if (($T)(ralphScoreCCEE(B2101, 1)))
            return(ralphScoreCCfirst(forms__2100));
        else
            return([
                B2096,
                ralphScoreCCfirst(forms__2100),
                ralphScoreCCMconcat([B2097], ralphScoreCCrest(forms__2100))
            ]);
    });
}
{
    var B2105 = $S('or', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'or', function B2106(____2107) {
        var forms__2108 = $SL.call(arguments, 1), B2109 = ralphScoreCCsize(forms__2108);
        if (($T)(ralphScoreCCEE(B2109, 0)))
            return(false);
        else if (($T)(ralphScoreCCEE(B2109, 1)))
            return(ralphScoreCCfirst(forms__2108));
        else {
            var value__2110 = ralphScoreCCgenerate_symbol();
            return([
                B2015,
                [[
                        value__2110,
                        ralphScoreCCfirst(forms__2108)
                    ]],
                [
                    B2056,
                    value__2110,
                    value__2110,
                    ralphScoreCCMconcat([B2105], ralphScoreCCrest(forms__2108))
                ]
            ]);
        }
    });
}
ralphScoreCCget_setter(Bcore_macros__2052, 'if-bind', function B2112(____2113, binding__2114, consequent__2115, alternate__2116) {
    var superflous__2117 = $SL.call(arguments, 4);
    ralphScompilerSutilitiesCCcheck_type(binding__2114, ralphScoreCCLarrayG, 'Non-array binding in if-bind: %=');
    var var__2118 = binding__2114[0], value__2119 = binding__2114[1], temp__2120 = ralphScoreCCgenerate_symbol();
    return([
        B2015,
        [[
                temp__2120,
                value__2119
            ]],
        [
            B2056,
            temp__2120,
            [
                B2015,
                [[
                        var__2118,
                        temp__2120
                    ]],
                consequent__2115
            ],
            alternate__2116
        ]
    ]);
});
{
    var B2123 = $S('while', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'until', function B2124(____2125, test__2126) {
        var forms__2127 = $SL.call(arguments, 2);
        return(ralphScoreCCMconcat([
            B2123,
            [
                B2064,
                test__2126
            ]
        ], forms__2127));
    });
}
{
    var ralphScoreCCLsymbolG = B1984['<symbol>'], B2133 = $S('for', 'ralph/core'), B2134 = $S('inc', 'ralph/core'), B2135 = $S('binary>=', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'dotimes', function B2136(____2137, binding__2138) {
        var forms__2139 = $SL.call(arguments, 2);
        ralphScompilerSutilitiesCCcheck_type(binding__2138, ralphScoreCCLarrayG, 'Non-array binding in dotimes: %=');
        var temp__2140 = ralphScoreCCgenerate_symbol(), var__2141 = binding__2138[0], count__2142 = binding__2138[1], result__2143 = binding__2138[2];
        ralphScompilerSutilitiesCCcheck_type(var__2141, ralphScoreCCLsymbolG, 'Non-symbol var in dotimes: %=');
        var B2145 = [[
                    temp__2140,
                    count__2142
                ]], B2146 = [[
                    var__2141,
                    0,
                    [
                        B2134,
                        var__2141
                    ]
                ]], B2147 = [
                B2135,
                var__2141,
                temp__2140
            ], B2144 = result__2143, B2148 = false;
        if (($T)(B2144))
            B2148 = B2144;
        else
            B2148 = false;
        var B2149 = [
                B2147,
                B2148
            ], B2150 = [
                B2133,
                B2146,
                B2149
            ], B2151 = ralphScoreCCMconcat(B2150, forms__2139);
        return([
            B2015,
            B2145,
            B2151
        ]);
    });
}
{
    var ralphScoreCCanyQ = B1984['any?'], ralphScoreCCpush_last = B1984['push-last'], ralphScoreCCslice = B1984['slice'], ralphScoreCCthird = B1984['third'], B2161 = $S('method', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'for', function B2162(____2163, clauses__2164, end_clause__2165) {
        var forms__2166 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(clauses__2164, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__2165, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        var init_clauses__2167 = [], next_clauses__2168 = [], vars__2169 = ralphScoreCCmap(ralphScoreCCfirst, clauses__2164), B2170 = clauses__2164, B2171 = false, B2172 = false, B2173 = [B2170];
        while (true) {
            var B2174 = B2171, B2179 = false;
            if (($T)(B2174))
                B2179 = B2174;
            else
                B2179 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B2173);
            var B2180 = ralphScoreCCnot(B2179);
            if (($T)(B2180)) {
                var clause__2175 = ralphScoreCCfirst(B2170);
                (function B2176(clause__2177) {
                    ralphScompilerSutilitiesCCcheck_type(clause__2177, ralphScoreCCLarrayG, 'Non-array clause in for: %=');
                    ralphScoreCCpush_last(init_clauses__2167, ralphScoreCCslice(clause__2177, 0, 2));
                    ralphScoreCCpush_last(next_clauses__2168, ralphScoreCCfirst(clause__2177));
                    return(ralphScoreCCpush_last(next_clauses__2168, ralphScoreCCthird(clause__2177)));
                }(clause__2175));
                B2170 = ralphScoreCCrest(B2170);
                B2173 = [B2170];
            } else
                break;
        }
        B2172;
        var B2178 = ralphScoreCCemptyQ(end_clause__2165), B2181 = false;
        if (($T)(B2178))
            B2181 = B2178;
        else
            B2181 = [
                B2064,
                ralphScoreCCfirst(end_clause__2165)
            ];
        var B2182 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                    B2161,
                    vars__2169
                ], forms__2166)], vars__2169), B2183 = ralphScoreCCMconcat([B2073], next_clauses__2168), B2184 = [
                B2123,
                B2181,
                B2182,
                B2183
            ], B2185 = ralphScoreCCMconcat([B2057], ralphScoreCCrest(end_clause__2165));
        return([
            B2015,
            init_clauses__2167,
            B2184,
            B2185
        ]);
    });
}
{
    var ralphScoreCCcons = B1984['cons'], ralphScoreCCsecond = B1984['second'], B2198 = $S('rest', 'ralph/core'), B2199 = $S('%array'), B2200 = $S('until', 'ralph/core'), B2201 = $S('any?', 'ralph/core'), B2202 = $S('empty?', 'ralph/core'), B2203 = $S('first', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'for-each', function B2204(____2205, clauses__2206, end_clause__2207) {
        var forms__2208 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(clauses__2206, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__2207, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        var clauses__2211 = ralphScoreCCmap(function B2209(clause__2210) {
                ralphScompilerSutilitiesCCcheck_type(clause__2210, ralphScoreCCLarrayG, 'Non-array clause in for-each: %=');
                return(ralphScoreCCcons(ralphScoreCCgenerate_symbol(), clause__2210));
            }, clauses__2206), endQ__2212 = ralphScoreCCgenerate_symbol(), values__2213 = ralphScoreCCgenerate_symbol(), result__2214 = ralphScoreCCgenerate_symbol(), vars__2215 = ralphScoreCCmap(ralphScoreCCsecond, clauses__2211), B2231 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                    B2161,
                    vars__2215
                ], forms__2208)], vars__2215), B2232 = [
                B2057,
                B2231
            ], B2233 = ralphScoreCCmap(function B2216(clause__2217) {
                return([
                    B2072,
                    ralphScoreCCfirst(clause__2217),
                    [
                        B2198,
                        ralphScoreCCfirst(clause__2217)
                    ]
                ]);
            }, clauses__2211), B2234 = ralphScoreCCMconcat(B2232, B2233), B2235 = [[
                    B2072,
                    values__2213,
                    ralphScoreCCMconcat([B2199], ralphScoreCCmap(ralphScoreCCfirst, clauses__2211))
                ]], form__2218 = ralphScoreCCMconcat(B2234, B2235), B2236 = ralphScoreCCMconcat(ralphScoreCCMconcat([], ralphScoreCCmap(function B2219(clause__2220) {
                var temp__2221 = clause__2220[0], var__2222 = clause__2220[1], values__2223 = clause__2220[2];
                return([
                    temp__2221,
                    values__2223
                ]);
            }, clauses__2211)), [
                [
                    endQ__2212,
                    false
                ],
                [
                    result__2214,
                    false
                ],
                [
                    values__2213,
                    ralphScoreCCMconcat([B2199], ralphScoreCCmap(ralphScoreCCfirst, clauses__2211))
                ]
            ]), B2237 = [
                B2105,
                endQ__2212,
                [
                    B2201,
                    B2202,
                    values__2213
                ]
            ], B2238 = ralphScoreCCmap(function B2224(clause__2225) {
                var temp__2226 = clause__2225[0], var__2227 = clause__2225[1], values__2228 = clause__2225[2];
                return([
                    var__2227,
                    [
                        B2203,
                        temp__2226
                    ]
                ]);
            }, clauses__2211), B2229 = ralphScoreCCfirst(end_clause__2207), B2239 = false;
        if (($T)(B2229)) {
            var end_test__2230 = B2229;
            B2239 = [
                B2056,
                end_test__2230,
                [
                    B2057,
                    [
                        B2072,
                        result__2214,
                        ralphScoreCCMconcat([B2057], ralphScoreCCrest(end_clause__2207))
                    ],
                    [
                        B2072,
                        endQ__2212,
                        true
                    ]
                ],
                form__2218
            ];
        } else
            B2239 = form__2218;
        var B2240 = [
                B2015,
                B2238,
                B2239
            ], B2241 = [
                B2200,
                B2237,
                B2240
            ];
        return([
            B2015,
            B2236,
            B2241,
            result__2214
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__2052, 'select', function B2245(____2246, value__2247, test__2248) {
    var cases__2249 = $SL.call(arguments, 3), valueT__2250 = ralphScoreCCgenerate_symbol(), testT__2251 = false;
    if (($T)(ralphScoreCCinstanceQ(test__2248, ralphScoreCCLsymbolG)))
        testT__2251 = test__2248;
    else
        testT__2251 = ralphScoreCCgenerate_symbol();
    var test_expression__2252 = false;
    test_expression__2252 = function B2253(test_value__2254) {
        return([
            testT__2251,
            valueT__2250,
            test_value__2254
        ]);
    };
    var B2259 = [[
                valueT__2250,
                value__2247
            ]], B2260 = false;
    if (($T)(ralphScoreCCinstanceQ(test__2248, ralphScoreCCLsymbolG)))
        B2260 = [];
    else
        B2260 = [[
                testT__2251,
                test__2248
            ]];
    var B2261 = ralphScoreCCconcatenate(B2259, B2260), B2262 = ralphScoreCCMconcat([B2084], ralphScoreCCmap(function B2255(case__2256) {
            ralphScompilerSutilitiesCCcheck_type(case__2256, ralphScoreCCLarrayG, 'Non-array case in select: %=');
            var test_forms__2257 = case__2256[0], forms__2258 = $SL.call(case__2256, 1);
            if (($T)(ralphScoreCCEE(test_forms__2257, B2083)))
                return(case__2256);
            else {
                ralphScompilerSutilitiesCCcheck_type(test_forms__2257, ralphScoreCCLarrayG, 'Non-array set of test forms in select: %=');
                return(ralphScoreCCMconcat([ralphScoreCCMconcat([B2105], ralphScoreCCmap(test_expression__2252, test_forms__2257))], forms__2258));
            }
        }, cases__2249));
    return([
        B2015,
        B2261,
        B2262
    ]);
});
var ralphScoreCCreduce = B1984['reduce'], ralphScoreCC_ = B1984['-'], ralphScoreCCreverse = B1984['reverse'], B2267 = $S('%get-property'), destructure__2280 = ralphScoreCCMmake_function('destructure', function B2268(bindings__2269, values__2270, form__2271) {
        if (($T)(ralphScoreCCinstanceQ(values__2270, ralphScoreCCLsymbolG))) {
            ralphScompilerSutilitiesCCcheck_type(bindings__2269, ralphScoreCCLarrayG, 'Non-array set of bindings while destructuring: %=');
            var B2272 = ralphScompilerSutilitiesCCdestructure_parameter_list(bindings__2269), normal_parameters__2273 = B2272[0], rest_parameter__2274 = B2272[1], keyword_parameters__2275 = B2272[2], i__2276 = ralphScoreCCsize(normal_parameters__2273);
            return(ralphScoreCCreduce(function B2277(form__2278, binding__2279) {
                i__2276 = ralphScoreCC_(i__2276, 1);
                if (($T)(ralphScoreCCinstanceQ(binding__2279, ralphScoreCCLsymbolG)))
                    return([
                        B2015,
                        [[
                                binding__2279,
                                [
                                    B2267,
                                    values__2270,
                                    i__2276
                                ]
                            ]],
                        form__2278
                    ]);
                else
                    return(destructure__2280(binding__2279, [
                        B2267,
                        values__2270,
                        i__2276
                    ], form__2278));
            }, wrap_restSkeys__2028(form__2271, values__2270, normal_parameters__2273, rest_parameter__2274, keyword_parameters__2275), ralphScoreCCreverse(normal_parameters__2273)));
        } else {
            var var__2281 = ralphScoreCCgenerate_symbol();
            return([
                B2015,
                [[
                        var__2281,
                        values__2270
                    ]],
                destructure__2280(bindings__2269, var__2281, form__2271)
            ]);
        }
    }, false);
ralphScoreCCget_setter(Bcore_macros__2052, 'destructuring-bind', function B2283(____2284, bindings__2285, values__2286) {
    var forms__2287 = $SL.call(arguments, 3);
    return(destructure__2280(bindings__2285, values__2286, ralphScoreCCMconcat([B2057], forms__2287)));
});
ralphScoreCCget_setter(Bcore_macros__2052, 'bind-properties', function B2290(____2291, properties__2292, object__2293) {
    var forms__2294 = $SL.call(arguments, 3), objectT__2295 = ralphScoreCCgenerate_symbol();
    return(ralphScoreCCMconcat([
        B2015,
        ralphScoreCCMconcat([[
                objectT__2295,
                object__2293
            ]], ralphScoreCCmap(function B2296(property__2297) {
            return([
                property__2297,
                [
                    B2267,
                    objectT__2295,
                    ralphScoreCCsymbol_name(property__2297)
                ]
            ]);
        }, properties__2292))
    ], forms__2294));
});
ralphScoreCCget_setter(Bcore_macros__2052, 'bind-methods', function B2300(____2301, bindings__2302) {
    var forms__2303 = $SL.call(arguments, 2);
    ralphScompilerSutilitiesCCcheck_type(bindings__2302, ralphScoreCCLarrayG, 'Non-array set of bindings in bind-methods: %=');
    return(ralphScoreCCMconcat(ralphScoreCCMconcat([
        B2015,
        ralphScoreCCmap(ralphScoreCCfirst, bindings__2302)
    ], ralphScoreCCmap(function B2304(binding__2305) {
        ralphScompilerSutilitiesCCcheck_type(bindings__2302, ralphScoreCCLarrayG, 'Non-array binding in bind-methods: %=');
        var identifier__2306 = binding__2305[0], parameter_list__2307 = binding__2305[1], forms__2308 = $SL.call(binding__2305, 2);
        return([
            B2072,
            identifier__2306,
            ralphScoreCCMconcat([
                B2161,
                parameter_list__2307
            ], forms__2308)
        ]);
    }, bindings__2302)), forms__2303));
});
{
    var B2316 = $S('generate-symbol', 'ralph/core'), B2317 = $S('quote', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'once-only', function B2318(____2319, names__2320) {
        var forms__2321 = $SL.call(arguments, 2), symbols__2324 = ralphScoreCCmap(function B2322(name__2323) {
                return(ralphScoreCCgenerate_symbol());
            }, names__2320);
        return([
            B2015,
            ralphScoreCCMconcat([], ralphScoreCCmap(function B2325(symbol__2326) {
                return([
                    symbol__2326,
                    [B2316]
                ]);
            }, symbols__2324)),
            [
                B2199,
                [
                    B2317,
                    B2015
                ],
                ralphScoreCCMconcat([B2199], ralphScoreCCmap(function B2327(symbol__2328, name__2329) {
                    return([
                        B2199,
                        symbol__2328,
                        name__2329
                    ]);
                }, symbols__2324, names__2320)),
                ralphScoreCCMconcat([
                    B2015,
                    ralphScoreCCMconcat([], ralphScoreCCmap(function B2330(name__2331, symbol__2332) {
                        return([
                            name__2331,
                            symbol__2332
                        ]);
                    }, names__2320, symbols__2324))
                ], forms__2321)
            ]
        ]);
    });
}
{
    var B2336 = $S('+', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'inc!', function B2337(____2338, object__2339, value__2340) {
        var B2341 = value__2340, B2342 = false;
        if (($T)(B2341))
            B2342 = B2341;
        else
            B2342 = 1;
        var B2343 = [
                B2336,
                object__2339,
                B2342
            ];
        return([
            B2072,
            object__2339,
            B2343
        ]);
    });
}
{
    var B2347 = $S('-', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'dec!', function B2348(____2349, object__2350, value__2351) {
        var B2352 = value__2351, B2353 = false;
        if (($T)(B2352))
            B2353 = B2352;
        else
            B2353 = 1;
        var B2354 = [
                B2347,
                object__2350,
                B2353
            ];
        return([
            B2072,
            object__2350,
            B2354
        ]);
    });
}
var ralphScoreCCsignal = B1984['signal'], ralphSformatCCformat_to_string = B1987['format-to-string'], signal_unsupported_dot_name__2358 = ralphScoreCCMmake_function('signal_unsupported_dot_name', function B2356(property__2357) {
        return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Unsupported name for call in dot: %=', property__2357)));
    }, false);
{
    var ralphScoreCCLstringG = B1984['<string>'];
    ralphScoreCCget_setter(Bcore_macros__2052, '.', function B2363(____2364, form__2365) {
        var calls__2366 = $SL.call(arguments, 2);
        return(ralphScoreCCreduce(function B2367(form__2368, call__2369) {
            ralphScompilerSutilitiesCCcheck_type(call__2369, ralphScoreCCLarrayG, 'Non-array call in dot: %=');
            var property__2370 = call__2369[0], arguments__2371 = $SL.call(call__2369, 1), bindings__2374 = ralphScoreCCmap(function B2372(argument__2373) {
                    return([
                        ralphScoreCCgenerate_symbol(),
                        argument__2373
                    ]);
                }, arguments__2371), formT__2375 = ralphScoreCCgenerate_symbol(), B2377 = [[
                        formT__2375,
                        form__2368
                    ]], B2376 = property__2370, B2378 = false;
            if (($T)(ralphScoreCCinstanceQ(B2376, ralphScoreCCLstringG)))
                B2378 = property__2370;
            else if (($T)(ralphScoreCCinstanceQ(B2376, ralphScoreCCLsymbolG)))
                B2378 = ralphScoreCCsymbol_name(property__2370);
            else
                B2378 = signal_unsupported_dot_name__2358(property__2370);
            var B2379 = [
                    B2267,
                    formT__2375,
                    B2378
                ], B2380 = [B2379], B2381 = ralphScoreCCmap(ralphScoreCCfirst, bindings__2374), B2382 = ralphScoreCCMconcat(B2380, B2381), B2383 = [
                    B2015,
                    bindings__2374,
                    B2382
                ];
            return([
                B2015,
                B2377,
                B2383
            ]);
        }, form__2365, calls__2366));
    });
}
var ralphScoreCCMkeys = B1984['%keys'], ralphScompilerSutilitiesCCsetter_identifierQ = B1988['setter-identifier?'], ralphScompilerSutilitiesCCtransform_setter_identifier = B1988['transform-setter-identifier'], ralphScoreCCG = B1984['>'], B2393 = $S('define', 'ralph/core'), B2394 = $S('%native-name'), B2395 = $S('<object>', 'ralph/core'), make_function_definer__2415 = ralphScoreCCMmake_function('make_function_definer', function B2396(macro_name__2397, definer__2398) {
        var B2399 = $SL.call(arguments, 2), B2400 = ralphScoreCCMkeys(B2399, {
                'type/existing?': false,
                'record?': false
            }), typeSexistingQ__2401 = B2400['type/existing?'], recordQ__2402 = B2400['record?'];
        return(function B2403(env__2404, identifier__2405, parameter_list__2406) {
            var forms__2407 = $SL.call(arguments, 3), B2408 = false;
            if (($T)(ralphScompilerSutilitiesCCsetter_identifierQ(identifier__2405)))
                B2408 = [
                    true,
                    ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCsecond(identifier__2405))
                ];
            else
                B2408 = [
                    false,
                    identifier__2405
                ];
            var setterQ__2409 = B2408[0], identifier__2410 = B2408[1], B2411 = ralphScoreCCinstanceQ(identifier__2410, ralphScoreCCLsymbolG), B2416 = false;
            if (($T)(B2411))
                B2416 = B2411;
            else
                B2416 = setterQ__2409;
            var B2417 = ralphScoreCCnot(B2416);
            if (($T)(B2417))
                ralphScoreCCsignal(ralphSformatCCformat_to_string('Identifier not symbol or setter in %s: %=', macro_name__2397, identifier__2410));
            var B2418 = false;
            if (($T)(typeSexistingQ__2401))
                B2418 = ralphScoreCCemptyQ(parameter_list__2406);
            else
                B2418 = false;
            if (($T)(B2418))
                ralphScoreCCsignal(ralphSformatCCformat_to_string('Empty parameter-list in %s: %=', macro_name__2397, parameter_list__2406));
            var name__2412 = ralphScoreCCsymbol_name(identifier__2410), definition__2413 = ralphScoreCCMconcat([
                    B2161,
                    parameter_list__2406
                ], forms__2407);
            if (($T)(recordQ__2402))
                ralphScoreCCget_setter(env__2404, 'module', 'functions', name__2412, definition__2413);
            var B2419 = [
                    definer__2398,
                    [
                        B2394,
                        name__2412
                    ],
                    definition__2413,
                    setterQ__2409
                ], B2422 = false;
            if (($T)(typeSexistingQ__2401)) {
                var head__2414 = ralphScoreCCfirst(parameter_list__2406), B2420 = false;
                if (($T)(ralphScoreCCinstanceQ(head__2414, ralphScoreCCLarrayG)))
                    B2420 = ralphScoreCCG(ralphScoreCCsize(head__2414), 1);
                else
                    B2420 = false;
                var B2421 = false;
                if (($T)(B2420))
                    B2421 = ralphScoreCCsecond(head__2414);
                else
                    B2421 = B2395;
                B2422 = [
                    B2421,
                    identifier__2410
                ];
            } else
                B2422 = [];
            var B2423 = ralphScoreCCMconcat(B2419, B2422);
            return([
                B2393,
                identifier__2410,
                B2423
            ]);
        });
    }, false);
{
    var ralphScoreCCapply = B1984['apply'], B2434 = $S('%make-function', 'ralph/core'), B2435 = $K('record?'), B2436 = $S('%make-method', 'ralph/core'), B2437 = $K('type/existing?'), B2438 = [
            [
                'define-function',
                B2434,
                B2435,
                true
            ],
            [
                'define-method',
                B2436,
                B2437,
                true
            ]
        ], B2439 = false, B2440 = false, B2441 = [B2438];
    while (true) {
        var B2442 = B2439, B2446 = false;
        if (($T)(B2442))
            B2446 = B2442;
        else
            B2446 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B2441);
        var B2447 = ralphScoreCCnot(B2446);
        if (($T)(B2447)) {
            var arguments__2443 = ralphScoreCCfirst(B2438);
            (function B2444(arguments__2445) {
                return(ralphScoreCCget_setter(Bcore_macros__2052, ralphScoreCCfirst(arguments__2445), ralphScoreCCapply(make_function_definer__2415, arguments__2445)));
            }(arguments__2443));
            B2438 = ralphScoreCCrest(B2438);
            B2441 = [B2438];
        } else
            break;
    }
    B2440;
}
{
    var B2450 = $S('%make-generic', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'define-generic', function B2451(____2452, identifier__2453, arguments__2454) {
        var superflous__2455 = $SL.call(arguments, 3);
        return([
            B2393,
            identifier__2453,
            [
                B2450,
                [
                    B2394,
                    ralphScoreCCsymbol_name(identifier__2453)
                ]
            ]
        ]);
    });
}
{
    var B2463 = $S('%make-class', 'ralph/core'), B2464 = $S('%begin'), B2465 = $S('%set'), B2466 = $S('%native');
    ralphScoreCCget_setter(Bcore_macros__2052, 'define-class', function B2467(____2468, identifier__2469, superclass__2470) {
        var properties__2471 = $SL.call(arguments, 3), B2476 = false;
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(superclass__2470))))
            B2476 = ralphScoreCCfirst(superclass__2470);
        else
            B2476 = false;
        var B2477 = ralphScoreCCMconcat([B1997], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2472(property__2473) {
                if (($T)(ralphScoreCCinstanceQ(property__2473, ralphScoreCCLarrayG)))
                    return([
                        ralphScoreCCsymbol_name(ralphScoreCCfirst(property__2473)),
                        [
                            B2161,
                            [],
                            ralphScoreCCsecond(property__2473)
                        ]
                    ]);
                else
                    return([
                        ralphScoreCCsymbol_name(property__2473),
                        false
                    ]);
            }, properties__2471))), B2482 = [
                B2041,
                identifier__2469,
                [],
                ralphScoreCCMconcat([B2464], ralphScoreCCmap(function B2474(property__2475) {
                    var B2478 = [
                            B2466,
                            'this'
                        ], B2479 = false;
                    if (($T)(ralphScoreCCinstanceQ(property__2475, ralphScoreCCLarrayG)))
                        B2479 = ralphScoreCCsymbol_name(ralphScoreCCfirst(property__2475));
                    else
                        B2479 = ralphScoreCCsymbol_name(property__2475);
                    var B2480 = [
                            B2267,
                            B2478,
                            B2479
                        ], B2481 = [
                            B2466,
                            'undefined'
                        ];
                    return([
                        B2465,
                        B2480,
                        B2481
                    ]);
                }, properties__2471))
            ], B2483 = [
                B2463,
                B2476,
                B2477,
                B2482
            ];
        return([
            B2393,
            identifier__2469,
            B2483
        ]);
    });
}
{
    var B2486 = $S('define-function', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'define-macro', function B2487(____2488, identifier__2489, parameter_list__2490) {
        var forms__2491 = $SL.call(arguments, 3);
        ralphScompilerSutilitiesCCcheck_type(identifier__2489, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-macro: %=');
        ralphScompilerSutilitiesCCcheck_type(parameter_list__2490, ralphScoreCCLarrayG, 'Non-array parameter-list in define-macro: %=');
        return([
            B2057,
            ralphScoreCCMconcat([
                B2486,
                identifier__2489,
                ralphScoreCCMconcat([ralphScoreCCgenerate_symbol()], parameter_list__2490)
            ], forms__2491),
            [
                B2072,
                [
                    B2267,
                    identifier__2489,
                    '%macro?'
                ],
                true
            ]
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__2052, 'define-symbol-macro', function B2493(____2494, identifier__2495, parameter_list__2496) {
    var forms__2497 = $SL.call(arguments, 3);
    ralphScompilerSutilitiesCCcheck_type(identifier__2495, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-symbol-macro: %=');
    ralphScompilerSutilitiesCCcheck_type(parameter_list__2496, ralphScoreCCLarrayG, 'Non-array parameter-list in define-symbol-macro: %=');
    return([
        B2057,
        ralphScoreCCMconcat([
            B2486,
            identifier__2495,
            []
        ], forms__2497),
        [
            B2072,
            [
                B2267,
                identifier__2495,
                '%symbol-macro?'
            ],
            true
        ]
    ]);
});
{
    var B2500 = $S('next-method', 'ralph/core');
    ralphScoreCCget_setter(Bcore_macros__2052, 'call-next-method', function B2501(____2502) {
        var superflous__2503 = $SL.call(arguments, 1);
        return([
            [
                B2267,
                B2500,
                'apply'
            ],
            [
                B2466,
                'null'
            ],
            B2042
        ]);
    });
}
{
    var Bcore_symbol_macros__2504 = ralphScoreCCmake_plain_object();
    (exports)['$core-symbol-macros'] = Bcore_symbol_macros__2504;
}
{
    var B2508 = $S('%next-method', 'ralph/core'), B2509 = $S('%this-method');
    ralphScoreCCget_setter(Bcore_symbol_macros__2504, 'next-method', function B2510(____2511) {
        var superflous__2512 = $SL.call(arguments, 1);
        return([
            B2508,
            B2509
        ]);
    });
}
{
    var Binternal_macros__2513 = ralphScoreCCmake_plain_object();
    (exports)['$internal-macros'] = Binternal_macros__2513;
}
var B2517 = $S('%quote'), transform_quoted__2521 = ralphScoreCCMmake_function('transform_quoted', function B2518(form__2519) {
        var B2520 = form__2519;
        if (($T)(ralphScoreCCinstanceQ(B2520, ralphScoreCCLarrayG)))
            return(ralphScoreCCMconcat([B2199], ralphScoreCCmap(transform_quoted__2521, form__2519)));
        else if (($T)(ralphScoreCCinstanceQ(B2520, ralphScoreCCLsymbolG)))
            return([
                B2517,
                form__2519
            ]);
        else
            return(form__2519);
    }, false);
ralphScoreCCget_setter(Binternal_macros__2513, 'quote', function B2523(____2524, form__2525) {
    var superflous__2526 = $SL.call(arguments, 2);
    return(transform_quoted__2521(form__2525));
});
ralphScoreCCget_setter(Binternal_macros__2513, 'begin', function B2529(____2530) {
    var forms__2531 = $SL.call(arguments, 1), B2532 = ralphScoreCCsize(forms__2531);
    if (($T)(ralphScoreCCEE(B2532, 0)))
        return(false);
    else if (($T)(ralphScoreCCEE(B2532, 1)))
        return(ralphScoreCCfirst(forms__2531));
    else
        return(ralphScoreCCMconcat([B2464], forms__2531));
});
{
    var B2536 = $S('%bind');
    ralphScoreCCget_setter(Binternal_macros__2513, 'bind', function B2537(____2538, bindings__2539) {
        var forms__2540 = $SL.call(arguments, 2);
        return(ralphScoreCCreduce(function B2541(form__2542, binding__2543) {
            var B2544 = false;
            if (($T)(ralphScoreCCinstanceQ(binding__2543, ralphScoreCCLsymbolG)))
                B2544 = [
                    binding__2543,
                    false
                ];
            else
                B2544 = binding__2543;
            return([
                B2536,
                B2544,
                form__2542
            ]);
        }, ralphScoreCCMconcat([B2057], forms__2540), ralphScoreCCreverse(bindings__2539)));
    });
}
ralphScoreCCget_setter(Binternal_macros__2513, 'method', function B2546(____2547, parameter_list__2548) {
    var forms__2549 = $SL.call(arguments, 2);
    return(named_method__2051(ralphScoreCCgenerate_symbol(), parameter_list__2548, ralphScoreCCMconcat([B2057], forms__2549)));
});
{
    var B2552 = $S('%while');
    ralphScoreCCget_setter(Binternal_macros__2513, 'while', function B2553(____2554, test__2555) {
        var forms__2556 = $SL.call(arguments, 2);
        return([
            B2552,
            test__2555,
            ralphScoreCCMconcat([B2057], forms__2556)
        ]);
    });
}
{
    var B2559 = $S('%if');
    ralphScoreCCget_setter(Binternal_macros__2513, 'if', function B2560(____2561, test__2562, then__2563, else__2564) {
        var superflous__2565 = $SL.call(arguments, 4);
        return([
            B2559,
            test__2562,
            then__2563,
            else__2564
        ]);
    });
}
ralphScoreCCget_setter(Binternal_macros__2513, 'set!', function B2567(____2568, place__2569) {
    var new_values__2570 = $SL.call(arguments, 2), B2571 = false;
    if (($T)(ralphScoreCCinstanceQ(place__2569, ralphScoreCCLarrayG)))
        B2571 = ralphScoreCCnot(ralphScoreCCEE(ralphScoreCCfirst(place__2569), B2267));
    else
        B2571 = false;
    if (($T)(B2571))
        return(ralphScoreCCMconcat(ralphScoreCCMconcat([ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCfirst(place__2569))], ralphScoreCCrest(place__2569)), new_values__2570));
    else
        return([
            B2465,
            place__2569,
            ralphScoreCCfirst(new_values__2570)
        ]);
});
{
    var B2575 = $S('%define');
    ralphScoreCCget_setter(Binternal_macros__2513, 'define', function B2576(env__2577, identifier__2578, value__2579) {
        var B2580 = value__2579, B2581 = false;
        if (($T)(B2580))
            B2581 = B2580;
        else
            B2581 = false;
        return([
            B2575,
            identifier__2578,
            B2581
        ]);
    });
}
{
    var B2589 = $S('%try'), B2590 = $S('instance?', 'ralph/core');
    ralphScoreCCget_setter(Binternal_macros__2513, 'handler-case', function B2591(____2592, protected_form__2593) {
        var cases__2594 = $SL.call(arguments, 2), condition_var__2595 = ralphScoreCCgenerate_symbol();
        return([
            B2589,
            protected_form__2593,
            condition_var__2595,
            ralphScoreCCMconcat([B2084], ralphScoreCCmap(function B2596(case__2597) {
                var B2598 = case__2597[0], type__2599 = B2598[0], B2600 = $SL.call(B2598, 1), B2601 = ralphScoreCCMkeys(B2600, { 'condition': false }), condition__2602 = B2601['condition'], body__2603 = $SL.call(case__2597, 1), B2604 = [[
                            B2590,
                            condition_var__2595,
                            type__2599
                        ]], B2605 = false;
                if (($T)(condition__2602))
                    B2605 = [ralphScoreCCMconcat([
                            B2015,
                            [[
                                    condition__2602,
                                    condition_var__2595
                                ]]
                        ], body__2603)];
                else
                    B2605 = body__2603;
                return(ralphScoreCCconcatenate(B2604, B2605));
            }, cases__2594))
        ]);
    });
}
{
    var Binternal_symbol_macros__2606 = ralphScoreCCmake_plain_object();
    (exports)['$internal-symbol-macros'] = Binternal_symbol_macros__2606;
}
