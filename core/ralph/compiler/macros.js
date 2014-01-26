{
    var B1976 = require('ralph/core');
}
{
    var B1979 = require('ralph/format');
    var B1980 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B1976['%var'];
        var ralphScoreCCmap = B1976['map'];
        var ralphScoreCCinstanceQ = B1976['instance?'];
        var ralphScoreCCLarrayG = B1976['<array>'];
        var ralphScoreCCfirst = B1976['first'];
        var ralphScoreCCMconcat = B1976['%concat'];
        var ralphScoreCCreduce1 = B1976['reduce1'];
        var ralphScoreCCconcatenate = B1976['concatenate'];
        var ralphScoreCCsymbol_name = B1976['symbol-name'];
        var ralphScoreCCMannotate_function = B1976['%annotate-function'];
        var B1987 = $S('bind-properties', 'ralph/core');
        var B1988 = $S('%keys', 'ralph/core');
        var B1989 = $S('%object', 'ralph/core');
        var wrap_keys__2001 = function B1990(form__1991, rest_parameter__1992, keyword_parameters__1993) {
            {
                var keyword_parametersT__1996 = ralphScoreCCmap(function B1994(parameter__1995) {
                        if (($T)(ralphScoreCCinstanceQ(parameter__1995, ralphScoreCCLarrayG)))
                            return(parameter__1995);
                        else
                            return([
                                parameter__1995,
                                false
                            ]);
                    }, keyword_parameters__1993);
            }
            return([
                B1987,
                ralphScoreCCmap(ralphScoreCCfirst, keyword_parametersT__1996),
                [
                    B1988,
                    rest_parameter__1992,
                    ralphScoreCCMconcat([B1989], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B1997(parameter__1998) {
                        {
                            var key__1999 = parameter__1998[0];
                            var value__2000 = parameter__1998[1];
                        }
                        return([
                            ralphScoreCCsymbol_name(key__1999),
                            value__2000
                        ]);
                    }, keyword_parametersT__1996)))
                ],
                form__1991
            ]);
        };
    }
    ralphScoreCCMannotate_function(wrap_keys__2001, 'wrap_keys', false);
}
{
    {
        var ralphScoreCCnot = B1976['not'];
        var ralphScoreCCemptyQ = B1976['empty?'];
        var ralphScoreCCgenerate_symbol = B1976['generate-symbol'];
        var ralphScoreCCsize = B1976['size'];
        var B2007 = $S('bind', 'ralph/core');
        var B2008 = $S('%native-call', 'ralph/core');
        var wrap_restSkeys__2020 = function B2009(form__2010, all_parameters__2011, normal_parameters__2012, rest_parameter__2013, keyword_parameters__2014) {
            {
                var restQ__2015 = rest_parameter__2013;
                var B2016 = rest_parameter__2013;
                var rest_parameter__2017 = false;
            }
            if (($T)(B2016))
                rest_parameter__2017 = B2016;
            else if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__2014))))
                rest_parameter__2017 = ralphScoreCCgenerate_symbol();
            else
                rest_parameter__2017 = false;
            {
                var formT__2018 = false;
            }
            if (($T)(ralphScoreCCemptyQ(keyword_parameters__2014)))
                formT__2018 = form__2010;
            else
                formT__2018 = wrap_keys__2001(form__2010, rest_parameter__2017, keyword_parameters__2014);
            {
                var B2019 = restQ__2015;
                var B2021 = false;
            }
            if (($T)(B2019))
                B2021 = B2019;
            else
                B2021 = ralphScoreCCnot(ralphScoreCCemptyQ(keyword_parameters__2014));
            if (($T)(B2021))
                return([
                    B2007,
                    [[
                            rest_parameter__2017,
                            [
                                B2008,
                                '$SL.call',
                                all_parameters__2011,
                                ralphScoreCCsize(normal_parameters__2012)
                            ]
                        ]],
                    formT__2018
                ]);
            else
                return(formT__2018);
        };
    }
    ralphScoreCCMannotate_function(wrap_restSkeys__2020, 'wrap_restSkeys', false);
}
{
    {
        var strip_types__2028 = function B2024(parameters__2025) {
            return(ralphScoreCCmap(function B2026(parameter__2027) {
                if (($T)(ralphScoreCCinstanceQ(parameter__2027, ralphScoreCCLarrayG)))
                    return(ralphScoreCCfirst(parameter__2027));
                else
                    return(parameter__2027);
            }, parameters__2025));
        };
    }
    ralphScoreCCMannotate_function(strip_types__2028, 'strip_types', false);
}
{
    {
        var ralphScompilerSutilitiesCCdestructure_parameter_list = B1980['destructure-parameter-list'];
        var B2033 = $S('%method', 'ralph/core');
        var B2034 = $S('%all-arguments');
        var named_method__2043 = function B2035(name__2036, parameter_list__2037, form__2038) {
            {
                var B2039 = ralphScompilerSutilitiesCCdestructure_parameter_list(parameter_list__2037);
                var normal_parameters__2040 = B2039[0];
                var rest_parameter__2041 = B2039[1];
                var keyword_parameters__2042 = B2039[2];
            }
            return([
                B2033,
                name__2036,
                strip_types__2028(normal_parameters__2040),
                wrap_restSkeys__2020(form__2038, B2034, normal_parameters__2040, rest_parameter__2041, keyword_parameters__2042)
            ]);
        };
    }
    ralphScoreCCMannotate_function(named_method__2043, 'named_method', false);
}
{
    {
        var ralphScoreCCmake_plain_object = B1976['make-plain-object'];
        var Bcore_macros__2044 = ralphScoreCCmake_plain_object();
    }
    (exports)['$core-macros'] = Bcore_macros__2044;
}
{
    {
        var ralphScoreCCget_setter = B1976['get-setter'];
        var B2048 = $S('if', 'ralph/core');
        var B2049 = $S('begin', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'when', function B2050(____2051, test__2052) {
        {
            var forms__2053 = $SL.call(arguments, 2);
        }
        return([
            B2048,
            test__2052,
            ralphScoreCCMconcat([B2049], forms__2053),
            false
        ]);
    });
}
{
    {
        var B2056 = $S('not', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'unless', function B2057(____2058, test__2059) {
        {
            var forms__2060 = $SL.call(arguments, 2);
        }
        return([
            B2048,
            [
                B2056,
                test__2059
            ],
            ralphScoreCCMconcat([B2049], forms__2060),
            false
        ]);
    });
}
{
    {
        var B2064 = $S('set!', 'ralph/core');
        var B2065 = $S('parallel-set!', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'parallel-set!', function B2066(____2067, identifier__2068, new_value__2069) {
        {
            var clauses__2070 = $SL.call(arguments, 3);
        }
        if (($T)(ralphScoreCCemptyQ(clauses__2070)))
            return([
                B2064,
                identifier__2068,
                new_value__2069
            ]);
        else {
            {
                var value__2071 = ralphScoreCCgenerate_symbol();
            }
            return([
                B2007,
                [[
                        value__2071,
                        new_value__2069
                    ]],
                ralphScoreCCMconcat([B2065], clauses__2070),
                [
                    B2064,
                    identifier__2068,
                    value__2071
                ]
            ]);
        }
    });
}
{
    {
        var ralphScompilerSutilitiesCCcheck_type = B1980['check-type'];
        var ralphScoreCCEE = B1976['=='];
        var ralphScoreCCrest = B1976['rest'];
        var B2075 = $K('else');
        var B2076 = $S('cond', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'cond', function B2077(____2078) {
        {
            var cases__2079 = $SL.call(arguments, 1);
        }
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(cases__2079)))) {
            {
                var case__2080 = ralphScoreCCfirst(cases__2079);
            }
            ralphScompilerSutilitiesCCcheck_type(case__2080, ralphScoreCCLarrayG, 'Non-array case in cond: %=');
            {
                var test__2081 = case__2080[0];
                var forms__2082 = $SL.call(case__2080, 1);
                var form__2083 = ralphScoreCCMconcat([B2049], forms__2082);
            }
            if (($T)(ralphScoreCCEE(test__2081, B2075)))
                return(form__2083);
            else
                return([
                    B2048,
                    test__2081,
                    form__2083,
                    ralphScoreCCMconcat([B2076], ralphScoreCCrest(cases__2079))
                ]);
        } else
            return(false);
    });
}
{
    {
        var B2088 = $S('when', 'ralph/core');
        var B2089 = $S('and', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'and', function B2090(____2091) {
        {
            var forms__2092 = $SL.call(arguments, 1);
            var B2093 = ralphScoreCCsize(forms__2092);
        }
        if (($T)(ralphScoreCCEE(B2093, 0)))
            return(true);
        else if (($T)(ralphScoreCCEE(B2093, 1)))
            return(ralphScoreCCfirst(forms__2092));
        else
            return([
                B2088,
                ralphScoreCCfirst(forms__2092),
                ralphScoreCCMconcat([B2089], ralphScoreCCrest(forms__2092))
            ]);
    });
}
{
    {
        var B2097 = $S('or', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'or', function B2098(____2099) {
        {
            var forms__2100 = $SL.call(arguments, 1);
            var B2101 = ralphScoreCCsize(forms__2100);
        }
        if (($T)(ralphScoreCCEE(B2101, 0)))
            return(false);
        else if (($T)(ralphScoreCCEE(B2101, 1)))
            return(ralphScoreCCfirst(forms__2100));
        else {
            {
                var value__2102 = ralphScoreCCgenerate_symbol();
            }
            return([
                B2007,
                [[
                        value__2102,
                        ralphScoreCCfirst(forms__2100)
                    ]],
                [
                    B2048,
                    value__2102,
                    value__2102,
                    ralphScoreCCMconcat([B2097], ralphScoreCCrest(forms__2100))
                ]
            ]);
        }
    });
}
ralphScoreCCget_setter(Bcore_macros__2044, 'if-bind', function B2104(____2105, binding__2106, consequent__2107, alternate__2108) {
    {
        var superflous__2109 = $SL.call(arguments, 4);
    }
    ralphScompilerSutilitiesCCcheck_type(binding__2106, ralphScoreCCLarrayG, 'Non-array binding in if-bind: %=');
    {
        var var__2110 = binding__2106[0];
        var value__2111 = binding__2106[1];
        var temp__2112 = ralphScoreCCgenerate_symbol();
    }
    return([
        B2007,
        [[
                temp__2112,
                value__2111
            ]],
        [
            B2048,
            temp__2112,
            [
                B2007,
                [[
                        var__2110,
                        temp__2112
                    ]],
                consequent__2107
            ],
            alternate__2108
        ]
    ]);
});
{
    {
        var B2115 = $S('while', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'until', function B2116(____2117, test__2118) {
        {
            var forms__2119 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCMconcat([
            B2115,
            [
                B2056,
                test__2118
            ]
        ], forms__2119));
    });
}
{
    {
        var ralphScoreCCLsymbolG = B1976['<symbol>'];
        var B2125 = $S('for', 'ralph/core');
        var B2126 = $S('inc', 'ralph/core');
        var B2127 = $S('binary>=', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'dotimes', function B2128(____2129, binding__2130) {
        {
            var forms__2131 = $SL.call(arguments, 2);
        }
        ralphScompilerSutilitiesCCcheck_type(binding__2130, ralphScoreCCLarrayG, 'Non-array binding in dotimes: %=');
        {
            var temp__2132 = ralphScoreCCgenerate_symbol();
            var var__2133 = binding__2130[0];
            var count__2134 = binding__2130[1];
            var result__2135 = binding__2130[2];
        }
        ralphScompilerSutilitiesCCcheck_type(var__2133, ralphScoreCCLsymbolG, 'Non-symbol var in dotimes: %=');
        {
            var B2137 = [[
                        temp__2132,
                        count__2134
                    ]];
            var B2138 = [[
                        var__2133,
                        0,
                        [
                            B2126,
                            var__2133
                        ]
                    ]];
            var B2139 = [
                    B2127,
                    var__2133,
                    temp__2132
                ];
            var B2136 = result__2135;
            var B2140 = false;
        }
        if (($T)(B2136))
            B2140 = B2136;
        else
            B2140 = false;
        {
            var B2141 = [
                    B2139,
                    B2140
                ];
            var B2142 = [
                    B2125,
                    B2138,
                    B2141
                ];
            var B2143 = ralphScoreCCMconcat(B2142, forms__2131);
        }
        return([
            B2007,
            B2137,
            B2143
        ]);
    });
}
{
    {
        var ralphScoreCCanyQ = B1976['any?'];
        var ralphScoreCCpush_last = B1976['push-last'];
        var ralphScoreCCslice = B1976['slice'];
        var ralphScoreCCthird = B1976['third'];
        var B2153 = $S('method', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'for', function B2154(____2155, clauses__2156, end_clause__2157) {
        {
            var forms__2158 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(clauses__2156, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__2157, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        {
            var init_clauses__2159 = [];
            var next_clauses__2160 = [];
            var vars__2161 = ralphScoreCCmap(ralphScoreCCfirst, clauses__2156);
            var B2162 = clauses__2156;
            var B2163 = false;
            var B2164 = false;
            var B2165 = [B2162];
        }
        while (true) {
            {
                var B2166 = B2163;
                var B2171 = false;
            }
            if (($T)(B2166))
                B2171 = B2166;
            else
                B2171 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B2165);
            {
                var B2172 = ralphScoreCCnot(B2171);
            }
            if (($T)(B2172)) {
                {
                    var clause__2167 = ralphScoreCCfirst(B2162);
                }
                (function B2168(clause__2169) {
                    ralphScompilerSutilitiesCCcheck_type(clause__2169, ralphScoreCCLarrayG, 'Non-array clause in for: %=');
                    ralphScoreCCpush_last(init_clauses__2159, ralphScoreCCslice(clause__2169, 0, 2));
                    ralphScoreCCpush_last(next_clauses__2160, ralphScoreCCfirst(clause__2169));
                    return(ralphScoreCCpush_last(next_clauses__2160, ralphScoreCCthird(clause__2169)));
                }(clause__2167));
                B2162 = ralphScoreCCrest(B2162);
                B2165 = [B2162];
            } else
                break;
        }
        B2164;
        {
            var B2170 = ralphScoreCCemptyQ(end_clause__2157);
            var B2173 = false;
        }
        if (($T)(B2170))
            B2173 = B2170;
        else
            B2173 = [
                B2056,
                ralphScoreCCfirst(end_clause__2157)
            ];
        {
            var B2174 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                        B2153,
                        vars__2161
                    ], forms__2158)], vars__2161);
            var B2175 = ralphScoreCCMconcat([B2065], next_clauses__2160);
            var B2176 = [
                    B2115,
                    B2173,
                    B2174,
                    B2175
                ];
            var B2177 = ralphScoreCCMconcat([B2049], ralphScoreCCrest(end_clause__2157));
        }
        return([
            B2007,
            init_clauses__2159,
            B2176,
            B2177
        ]);
    });
}
{
    {
        var ralphScoreCCcons = B1976['cons'];
        var ralphScoreCCsecond = B1976['second'];
        var B2190 = $S('rest', 'ralph/core');
        var B2191 = $S('%array', 'ralph/core');
        var B2192 = $S('until', 'ralph/core');
        var B2193 = $S('any?', 'ralph/core');
        var B2194 = $S('empty?', 'ralph/core');
        var B2195 = $S('first', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'for-each', function B2196(____2197, clauses__2198, end_clause__2199) {
        {
            var forms__2200 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(clauses__2198, ralphScoreCCLarrayG, 'Non-array set of clauses in for: %=');
        ralphScompilerSutilitiesCCcheck_type(end_clause__2199, ralphScoreCCLarrayG, 'Non-array end-clause in for: %=');
        {
            var clauses__2203 = ralphScoreCCmap(function B2201(clause__2202) {
                    ralphScompilerSutilitiesCCcheck_type(clause__2202, ralphScoreCCLarrayG, 'Non-array clause in for-each: %=');
                    return(ralphScoreCCcons(ralphScoreCCgenerate_symbol(), clause__2202));
                }, clauses__2198);
            var endQ__2204 = ralphScoreCCgenerate_symbol();
            var values__2205 = ralphScoreCCgenerate_symbol();
            var result__2206 = ralphScoreCCgenerate_symbol();
            var vars__2207 = ralphScoreCCmap(ralphScoreCCsecond, clauses__2203);
            var B2223 = ralphScoreCCMconcat([ralphScoreCCMconcat([
                        B2153,
                        vars__2207
                    ], forms__2200)], vars__2207);
            var B2224 = [
                    B2049,
                    B2223
                ];
            var B2225 = ralphScoreCCmap(function B2208(clause__2209) {
                    return([
                        B2064,
                        ralphScoreCCfirst(clause__2209),
                        [
                            B2190,
                            ralphScoreCCfirst(clause__2209)
                        ]
                    ]);
                }, clauses__2203);
            var B2226 = ralphScoreCCMconcat(B2224, B2225);
            var B2227 = [[
                        B2064,
                        values__2205,
                        ralphScoreCCMconcat([B2191], ralphScoreCCmap(ralphScoreCCfirst, clauses__2203))
                    ]];
            var form__2210 = ralphScoreCCMconcat(B2226, B2227);
            var B2228 = ralphScoreCCMconcat(ralphScoreCCMconcat([], ralphScoreCCmap(function B2211(clause__2212) {
                    {
                        var temp__2213 = clause__2212[0];
                        var var__2214 = clause__2212[1];
                        var values__2215 = clause__2212[2];
                    }
                    return([
                        temp__2213,
                        values__2215
                    ]);
                }, clauses__2203)), [
                    [
                        endQ__2204,
                        false
                    ],
                    [
                        result__2206,
                        false
                    ],
                    [
                        values__2205,
                        ralphScoreCCMconcat([B2191], ralphScoreCCmap(ralphScoreCCfirst, clauses__2203))
                    ]
                ]);
            var B2229 = [
                    B2097,
                    endQ__2204,
                    [
                        B2193,
                        B2194,
                        values__2205
                    ]
                ];
            var B2230 = ralphScoreCCmap(function B2216(clause__2217) {
                    {
                        var temp__2218 = clause__2217[0];
                        var var__2219 = clause__2217[1];
                        var values__2220 = clause__2217[2];
                    }
                    return([
                        var__2219,
                        [
                            B2195,
                            temp__2218
                        ]
                    ]);
                }, clauses__2203);
            var B2221 = ralphScoreCCfirst(end_clause__2199);
            var B2231 = false;
        }
        if (($T)(B2221)) {
            {
                var end_test__2222 = B2221;
            }
            B2231 = [
                B2048,
                end_test__2222,
                [
                    B2049,
                    [
                        B2064,
                        result__2206,
                        ralphScoreCCMconcat([B2049], ralphScoreCCrest(end_clause__2199))
                    ],
                    [
                        B2064,
                        endQ__2204,
                        true
                    ]
                ],
                form__2210
            ];
        } else
            B2231 = form__2210;
        {
            var B2232 = [
                    B2007,
                    B2230,
                    B2231
                ];
            var B2233 = [
                    B2192,
                    B2229,
                    B2232
                ];
        }
        return([
            B2007,
            B2228,
            B2233,
            result__2206
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__2044, 'select', function B2237(____2238, value__2239, test__2240) {
    {
        var cases__2241 = $SL.call(arguments, 3);
        var valueT__2242 = ralphScoreCCgenerate_symbol();
        var testT__2243 = false;
    }
    if (($T)(ralphScoreCCinstanceQ(test__2240, ralphScoreCCLsymbolG)))
        testT__2243 = test__2240;
    else
        testT__2243 = ralphScoreCCgenerate_symbol();
    {
        var test_expression__2244 = false;
    }
    test_expression__2244 = function B2245(test_value__2246) {
        return([
            testT__2243,
            valueT__2242,
            test_value__2246
        ]);
    };
    {
        var B2251 = [[
                    valueT__2242,
                    value__2239
                ]];
        var B2252 = false;
    }
    if (($T)(ralphScoreCCinstanceQ(test__2240, ralphScoreCCLsymbolG)))
        B2252 = [];
    else
        B2252 = [[
                testT__2243,
                test__2240
            ]];
    {
        var B2253 = ralphScoreCCconcatenate(B2251, B2252);
        var B2254 = ralphScoreCCMconcat([B2076], ralphScoreCCmap(function B2247(case__2248) {
                ralphScompilerSutilitiesCCcheck_type(case__2248, ralphScoreCCLarrayG, 'Non-array case in select: %=');
                {
                    var test_forms__2249 = case__2248[0];
                    var forms__2250 = $SL.call(case__2248, 1);
                }
                if (($T)(ralphScoreCCEE(test_forms__2249, B2075)))
                    return(case__2248);
                else {
                    ralphScompilerSutilitiesCCcheck_type(test_forms__2249, ralphScoreCCLarrayG, 'Non-array set of test forms in select: %=');
                    return(ralphScoreCCMconcat([ralphScoreCCMconcat([B2097], ralphScoreCCmap(test_expression__2244, test_forms__2249))], forms__2250));
                }
            }, cases__2241));
    }
    return([
        B2007,
        B2253,
        B2254
    ]);
});
{
    {
        var ralphScoreCCreduce = B1976['reduce'];
        var ralphScoreCC_ = B1976['-'];
        var ralphScoreCCreverse = B1976['reverse'];
        var B2259 = $S('%get-property', 'ralph/core');
        var destructure__2272 = function B2260(bindings__2261, values__2262, form__2263) {
            if (($T)(ralphScoreCCinstanceQ(values__2262, ralphScoreCCLsymbolG))) {
                ralphScompilerSutilitiesCCcheck_type(bindings__2261, ralphScoreCCLarrayG, 'Non-array set of bindings while destructuring: %=');
                {
                    var B2264 = ralphScompilerSutilitiesCCdestructure_parameter_list(bindings__2261);
                    var normal_parameters__2265 = B2264[0];
                    var rest_parameter__2266 = B2264[1];
                    var keyword_parameters__2267 = B2264[2];
                    var i__2268 = ralphScoreCCsize(normal_parameters__2265);
                }
                return(ralphScoreCCreduce(function B2269(form__2270, binding__2271) {
                    i__2268 = ralphScoreCC_(i__2268, 1);
                    if (($T)(ralphScoreCCinstanceQ(binding__2271, ralphScoreCCLsymbolG)))
                        return([
                            B2007,
                            [[
                                    binding__2271,
                                    [
                                        B2259,
                                        values__2262,
                                        i__2268
                                    ]
                                ]],
                            form__2270
                        ]);
                    else
                        return(destructure__2272(binding__2271, [
                            B2259,
                            values__2262,
                            i__2268
                        ], form__2270));
                }, wrap_restSkeys__2020(form__2263, values__2262, normal_parameters__2265, rest_parameter__2266, keyword_parameters__2267), ralphScoreCCreverse(normal_parameters__2265)));
            } else {
                {
                    var var__2273 = ralphScoreCCgenerate_symbol();
                }
                return([
                    B2007,
                    [[
                            var__2273,
                            values__2262
                        ]],
                    destructure__2272(bindings__2261, var__2273, form__2263)
                ]);
            }
        };
    }
    ralphScoreCCMannotate_function(destructure__2272, 'destructure', false);
}
ralphScoreCCget_setter(Bcore_macros__2044, 'destructuring-bind', function B2275(____2276, bindings__2277, values__2278) {
    {
        var forms__2279 = $SL.call(arguments, 3);
    }
    return(destructure__2272(bindings__2277, values__2278, ralphScoreCCMconcat([B2049], forms__2279)));
});
ralphScoreCCget_setter(Bcore_macros__2044, 'bind-properties', function B2282(____2283, properties__2284, object__2285) {
    {
        var forms__2286 = $SL.call(arguments, 3);
        var objectT__2287 = ralphScoreCCgenerate_symbol();
    }
    return(ralphScoreCCMconcat([
        B2007,
        ralphScoreCCMconcat([[
                objectT__2287,
                object__2285
            ]], ralphScoreCCmap(function B2288(property__2289) {
            return([
                property__2289,
                [
                    B2259,
                    objectT__2287,
                    ralphScoreCCsymbol_name(property__2289)
                ]
            ]);
        }, properties__2284))
    ], forms__2286));
});
ralphScoreCCget_setter(Bcore_macros__2044, 'bind-methods', function B2292(____2293, bindings__2294) {
    {
        var forms__2295 = $SL.call(arguments, 2);
    }
    ralphScompilerSutilitiesCCcheck_type(bindings__2294, ralphScoreCCLarrayG, 'Non-array set of bindings in bind-methods: %=');
    return(ralphScoreCCMconcat(ralphScoreCCMconcat([
        B2007,
        ralphScoreCCmap(ralphScoreCCfirst, bindings__2294)
    ], ralphScoreCCmap(function B2296(binding__2297) {
        ralphScompilerSutilitiesCCcheck_type(bindings__2294, ralphScoreCCLarrayG, 'Non-array binding in bind-methods: %=');
        {
            var identifier__2298 = binding__2297[0];
            var parameter_list__2299 = binding__2297[1];
            var forms__2300 = $SL.call(binding__2297, 2);
        }
        return([
            B2064,
            identifier__2298,
            ralphScoreCCMconcat([
                B2153,
                parameter_list__2299
            ], forms__2300)
        ]);
    }, bindings__2294)), forms__2295));
});
{
    {
        var B2308 = $S('generate-symbol', 'ralph/core');
        var B2309 = $S('quote', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'once-only', function B2310(____2311, names__2312) {
        {
            var forms__2313 = $SL.call(arguments, 2);
            var symbols__2316 = ralphScoreCCmap(function B2314(name__2315) {
                    return(ralphScoreCCgenerate_symbol());
                }, names__2312);
        }
        return([
            B2007,
            ralphScoreCCMconcat([], ralphScoreCCmap(function B2317(symbol__2318) {
                return([
                    symbol__2318,
                    [B2308]
                ]);
            }, symbols__2316)),
            [
                B2191,
                [
                    B2309,
                    B2007
                ],
                ralphScoreCCMconcat([B2191], ralphScoreCCmap(function B2319(symbol__2320, name__2321) {
                    return([
                        B2191,
                        symbol__2320,
                        name__2321
                    ]);
                }, symbols__2316, names__2312)),
                ralphScoreCCMconcat([
                    B2007,
                    ralphScoreCCMconcat([], ralphScoreCCmap(function B2322(name__2323, symbol__2324) {
                        return([
                            name__2323,
                            symbol__2324
                        ]);
                    }, names__2312, symbols__2316))
                ], forms__2313)
            ]
        ]);
    });
}
{
    {
        var B2328 = $S('+', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'inc!', function B2329(____2330, object__2331, value__2332) {
        {
            var B2333 = value__2332;
            var B2334 = false;
        }
        if (($T)(B2333))
            B2334 = B2333;
        else
            B2334 = 1;
        {
            var B2335 = [
                    B2328,
                    object__2331,
                    B2334
                ];
        }
        return([
            B2064,
            object__2331,
            B2335
        ]);
    });
}
{
    {
        var B2339 = $S('-', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'dec!', function B2340(____2341, object__2342, value__2343) {
        {
            var B2344 = value__2343;
            var B2345 = false;
        }
        if (($T)(B2344))
            B2345 = B2344;
        else
            B2345 = 1;
        {
            var B2346 = [
                    B2339,
                    object__2342,
                    B2345
                ];
        }
        return([
            B2064,
            object__2342,
            B2346
        ]);
    });
}
{
    {
        var ralphScoreCCsignal = B1976['signal'];
        var ralphSformatCCformat_to_string = B1979['format-to-string'];
        var signal_unsupported_dot_name__2350 = function B2348(property__2349) {
            return(ralphScoreCCsignal(ralphSformatCCformat_to_string('Unsupported name for call in dot: %=', property__2349)));
        };
    }
    ralphScoreCCMannotate_function(signal_unsupported_dot_name__2350, 'signal_unsupported_dot_name', false);
}
{
    {
        var ralphScoreCCLstringG = B1976['<string>'];
    }
    ralphScoreCCget_setter(Bcore_macros__2044, '.', function B2355(____2356, form__2357) {
        {
            var calls__2358 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCreduce(function B2359(form__2360, call__2361) {
            ralphScompilerSutilitiesCCcheck_type(call__2361, ralphScoreCCLarrayG, 'Non-array call in dot: %=');
            {
                var property__2362 = call__2361[0];
                var arguments__2363 = $SL.call(call__2361, 1);
                var bindings__2366 = ralphScoreCCmap(function B2364(argument__2365) {
                        return([
                            ralphScoreCCgenerate_symbol(),
                            argument__2365
                        ]);
                    }, arguments__2363);
                var formT__2367 = ralphScoreCCgenerate_symbol();
                var B2369 = [[
                            formT__2367,
                            form__2360
                        ]];
                var B2368 = property__2362;
                var B2370 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(B2368, ralphScoreCCLstringG)))
                B2370 = property__2362;
            else if (($T)(ralphScoreCCinstanceQ(B2368, ralphScoreCCLsymbolG)))
                B2370 = ralphScoreCCsymbol_name(property__2362);
            else
                B2370 = signal_unsupported_dot_name__2350(property__2362);
            {
                var B2371 = [
                        B2259,
                        formT__2367,
                        B2370
                    ];
                var B2372 = [B2371];
                var B2373 = ralphScoreCCmap(ralphScoreCCfirst, bindings__2366);
                var B2374 = ralphScoreCCMconcat(B2372, B2373);
                var B2375 = [
                        B2007,
                        bindings__2366,
                        B2374
                    ];
            }
            return([
                B2007,
                B2369,
                B2375
            ]);
        }, form__2357, calls__2358));
    });
}
{
    {
        var ralphScompilerSutilitiesCCsetter_identifierQ = B1980['setter-identifier?'];
        var ralphScompilerSutilitiesCCtransform_setter_identifier = B1980['transform-setter-identifier'];
        var ralphScoreCCG = B1976['>'];
        var B2383 = $S('define', 'ralph/core');
        var B2384 = $S('%make-method', 'ralph/core');
        var B2385 = $S('%native-name', 'ralph/core');
        var B2386 = $S('<object>', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'define-method', function B2387(env__2388, identifier__2389, parameter_list__2390) {
        {
            var forms__2391 = $SL.call(arguments, 3);
            var B2392 = false;
        }
        if (($T)(ralphScompilerSutilitiesCCsetter_identifierQ(identifier__2389)))
            B2392 = [
                true,
                ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCsecond(identifier__2389))
            ];
        else
            B2392 = [
                false,
                identifier__2389
            ];
        {
            var setterQ__2393 = B2392[0];
            var identifier__2394 = B2392[1];
            var B2395 = ralphScoreCCinstanceQ(identifier__2394, ralphScoreCCLsymbolG);
            var B2399 = false;
        }
        if (($T)(B2395))
            B2399 = B2395;
        else
            B2399 = setterQ__2393;
        {
            var B2400 = ralphScoreCCnot(B2399);
        }
        if (($T)(B2400))
            ralphScoreCCsignal(ralphSformatCCformat_to_string('Identifier not symbol or setter in define-method: %=', identifier__2394));
        if (($T)(ralphScoreCCemptyQ(parameter_list__2390)))
            ralphScoreCCsignal(ralphSformatCCformat_to_string('Empty parameter-list in define-method: %=', identifier__2394));
        {
            var name__2396 = ralphScoreCCsymbol_name(identifier__2394);
            var definition__2397 = ralphScoreCCMconcat([
                    B2153,
                    parameter_list__2390
                ], forms__2391);
            var B2401 = [
                    B2385,
                    name__2396
                ];
            var head__2398 = ralphScoreCCfirst(parameter_list__2390);
            var B2402 = false;
        }
        if (($T)(ralphScoreCCinstanceQ(head__2398, ralphScoreCCLarrayG)))
            B2402 = ralphScoreCCG(ralphScoreCCsize(head__2398), 1);
        else
            B2402 = false;
        {
            var B2403 = false;
        }
        if (($T)(B2402))
            B2403 = ralphScoreCCsecond(head__2398);
        else
            B2403 = B2386;
        {
            var B2404 = [
                    B2384,
                    B2401,
                    definition__2397,
                    setterQ__2393,
                    B2403,
                    identifier__2394
                ];
        }
        return([
            B2383,
            identifier__2394,
            B2404
        ]);
    });
}
{
    {
        var B2410 = $S('%begin', 'ralph/core');
        var B2411 = $S('%annotate-function', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'define-function', function B2412(env__2413, identifier__2414, parameter_list__2415) {
        {
            var forms__2416 = $SL.call(arguments, 3);
            var B2417 = false;
        }
        if (($T)(ralphScompilerSutilitiesCCsetter_identifierQ(identifier__2414)))
            B2417 = [
                true,
                ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCsecond(identifier__2414))
            ];
        else
            B2417 = [
                false,
                identifier__2414
            ];
        {
            var setterQ__2418 = B2417[0];
            var identifier__2419 = B2417[1];
            var B2420 = ralphScoreCCinstanceQ(identifier__2419, ralphScoreCCLsymbolG);
            var B2423 = false;
        }
        if (($T)(B2420))
            B2423 = B2420;
        else
            B2423 = setterQ__2418;
        {
            var B2424 = ralphScoreCCnot(B2423);
        }
        if (($T)(B2424))
            ralphScoreCCsignal(ralphSformatCCformat_to_string('Identifier not symbol or setter in define-function: %=', identifier__2419));
        {
            var name__2421 = ralphScoreCCsymbol_name(identifier__2419);
            var definition__2422 = ralphScoreCCMconcat([
                    B2153,
                    parameter_list__2415
                ], forms__2416);
        }
        ralphScoreCCget_setter(env__2413, 'module', 'functions', name__2421, definition__2422);
        return([
            B2410,
            [
                B2383,
                identifier__2419,
                definition__2422
            ],
            [
                B2411,
                identifier__2419,
                [
                    B2385,
                    name__2421
                ],
                setterQ__2418
            ]
        ]);
    });
}
{
    {
        var B2427 = $S('%make-generic', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'define-generic', function B2428(____2429, identifier__2430, arguments__2431) {
        {
            var superflous__2432 = $SL.call(arguments, 3);
        }
        return([
            B2383,
            identifier__2430,
            [
                B2427,
                [
                    B2385,
                    ralphScoreCCsymbol_name(identifier__2430)
                ]
            ]
        ]);
    });
}
{
    {
        var B2439 = $S('%make-class', 'ralph/core');
        var B2440 = $S('%set', 'ralph/core');
        var B2441 = $S('%native', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'define-class', function B2442(____2443, identifier__2444, superclass__2445) {
        {
            var properties__2446 = $SL.call(arguments, 3);
            var B2451 = false;
        }
        if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(superclass__2445))))
            B2451 = ralphScoreCCfirst(superclass__2445);
        else
            B2451 = false;
        {
            var B2452 = ralphScoreCCMconcat([B1989], ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B2447(property__2448) {
                    if (($T)(ralphScoreCCinstanceQ(property__2448, ralphScoreCCLarrayG)))
                        return([
                            ralphScoreCCsymbol_name(ralphScoreCCfirst(property__2448)),
                            [
                                B2153,
                                [],
                                ralphScoreCCsecond(property__2448)
                            ]
                        ]);
                    else
                        return([
                            ralphScoreCCsymbol_name(property__2448),
                            false
                        ]);
                }, properties__2446)));
            var B2457 = [
                    B2033,
                    identifier__2444,
                    [],
                    ralphScoreCCMconcat([B2410], ralphScoreCCmap(function B2449(property__2450) {
                        {
                            var B2453 = [
                                    B2441,
                                    'this'
                                ];
                            var B2454 = false;
                        }
                        if (($T)(ralphScoreCCinstanceQ(property__2450, ralphScoreCCLarrayG)))
                            B2454 = ralphScoreCCsymbol_name(ralphScoreCCfirst(property__2450));
                        else
                            B2454 = ralphScoreCCsymbol_name(property__2450);
                        {
                            var B2455 = [
                                    B2259,
                                    B2453,
                                    B2454
                                ];
                            var B2456 = [
                                    B2441,
                                    'undefined'
                                ];
                        }
                        return([
                            B2440,
                            B2455,
                            B2456
                        ]);
                    }, properties__2446))
                ];
            var B2458 = [
                    B2439,
                    B2451,
                    B2452,
                    B2457
                ];
        }
        return([
            B2383,
            identifier__2444,
            B2458
        ]);
    });
}
{
    {
        var B2461 = $S('define-function', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'define-macro', function B2462(____2463, identifier__2464, parameter_list__2465) {
        {
            var forms__2466 = $SL.call(arguments, 3);
        }
        ralphScompilerSutilitiesCCcheck_type(identifier__2464, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-macro: %=');
        ralphScompilerSutilitiesCCcheck_type(parameter_list__2465, ralphScoreCCLarrayG, 'Non-array parameter-list in define-macro: %=');
        return([
            B2049,
            ralphScoreCCMconcat([
                B2461,
                identifier__2464,
                ralphScoreCCMconcat([ralphScoreCCgenerate_symbol()], parameter_list__2465)
            ], forms__2466),
            [
                B2064,
                [
                    B2259,
                    identifier__2464,
                    '%macro?'
                ],
                true
            ]
        ]);
    });
}
ralphScoreCCget_setter(Bcore_macros__2044, 'define-symbol-macro', function B2468(____2469, identifier__2470, parameter_list__2471) {
    {
        var forms__2472 = $SL.call(arguments, 3);
    }
    ralphScompilerSutilitiesCCcheck_type(identifier__2470, ralphScoreCCLsymbolG, 'Non-symbol identifier in define-symbol-macro: %=');
    ralphScompilerSutilitiesCCcheck_type(parameter_list__2471, ralphScoreCCLarrayG, 'Non-array parameter-list in define-symbol-macro: %=');
    return([
        B2049,
        ralphScoreCCMconcat([
            B2461,
            identifier__2470,
            []
        ], forms__2472),
        [
            B2064,
            [
                B2259,
                identifier__2470,
                '%symbol-macro?'
            ],
            true
        ]
    ]);
});
{
    {
        var B2475 = $S('next-method', 'ralph/core');
    }
    ralphScoreCCget_setter(Bcore_macros__2044, 'call-next-method', function B2476(____2477) {
        {
            var superflous__2478 = $SL.call(arguments, 1);
        }
        return([
            [
                B2259,
                B2475,
                'apply'
            ],
            [
                B2441,
                'null'
            ],
            B2034
        ]);
    });
}
{
    {
        var Bcore_symbol_macros__2479 = ralphScoreCCmake_plain_object();
    }
    (exports)['$core-symbol-macros'] = Bcore_symbol_macros__2479;
}
{
    {
        var B2483 = $S('%next-method', 'ralph/core');
        var B2484 = $S('%this-method');
    }
    ralphScoreCCget_setter(Bcore_symbol_macros__2479, 'next-method', function B2485(____2486) {
        {
            var superflous__2487 = $SL.call(arguments, 1);
        }
        return([
            B2483,
            B2484
        ]);
    });
}
{
    {
        var Binternal_macros__2488 = ralphScoreCCmake_plain_object();
    }
    (exports)['$internal-macros'] = Binternal_macros__2488;
}
{
    {
        var B2492 = $S('%quote', 'ralph/core');
        var transform_quoted__2496 = function B2493(form__2494) {
            {
                var B2495 = form__2494;
            }
            if (($T)(ralphScoreCCinstanceQ(B2495, ralphScoreCCLarrayG)))
                return(ralphScoreCCMconcat([B2191], ralphScoreCCmap(transform_quoted__2496, form__2494)));
            else if (($T)(ralphScoreCCinstanceQ(B2495, ralphScoreCCLsymbolG)))
                return([
                    B2492,
                    form__2494
                ]);
            else
                return(form__2494);
        };
    }
    ralphScoreCCMannotate_function(transform_quoted__2496, 'transform_quoted', false);
}
ralphScoreCCget_setter(Binternal_macros__2488, 'quote', function B2498(____2499, form__2500) {
    {
        var superflous__2501 = $SL.call(arguments, 2);
    }
    return(transform_quoted__2496(form__2500));
});
ralphScoreCCget_setter(Binternal_macros__2488, 'begin', function B2504(____2505) {
    {
        var forms__2506 = $SL.call(arguments, 1);
        var B2507 = ralphScoreCCsize(forms__2506);
    }
    if (($T)(ralphScoreCCEE(B2507, 0)))
        return(false);
    else if (($T)(ralphScoreCCEE(B2507, 1)))
        return(ralphScoreCCfirst(forms__2506));
    else
        return(ralphScoreCCMconcat([B2410], forms__2506));
});
{
    {
        var B2511 = $S('%bind', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__2488, 'bind', function B2512(____2513, bindings__2514) {
        {
            var forms__2515 = $SL.call(arguments, 2);
        }
        return(ralphScoreCCreduce(function B2516(form__2517, binding__2518) {
            {
                var B2519 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(binding__2518, ralphScoreCCLsymbolG)))
                B2519 = [
                    binding__2518,
                    false
                ];
            else
                B2519 = binding__2518;
            return([
                B2511,
                B2519,
                form__2517
            ]);
        }, ralphScoreCCMconcat([B2049], forms__2515), ralphScoreCCreverse(bindings__2514)));
    });
}
ralphScoreCCget_setter(Binternal_macros__2488, 'method', function B2521(____2522, parameter_list__2523) {
    {
        var forms__2524 = $SL.call(arguments, 2);
    }
    return(named_method__2043(ralphScoreCCgenerate_symbol(), parameter_list__2523, ralphScoreCCMconcat([B2049], forms__2524)));
});
{
    {
        var B2527 = $S('%while', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__2488, 'while', function B2528(____2529, test__2530) {
        {
            var forms__2531 = $SL.call(arguments, 2);
        }
        return([
            B2527,
            test__2530,
            ralphScoreCCMconcat([B2049], forms__2531)
        ]);
    });
}
{
    {
        var B2534 = $S('%if', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__2488, 'if', function B2535(____2536, test__2537, then__2538, else__2539) {
        {
            var superflous__2540 = $SL.call(arguments, 4);
        }
        return([
            B2534,
            test__2537,
            then__2538,
            else__2539
        ]);
    });
}
ralphScoreCCget_setter(Binternal_macros__2488, 'set!', function B2542(____2543, place__2544) {
    {
        var new_values__2545 = $SL.call(arguments, 2);
        var B2546 = false;
    }
    if (($T)(ralphScoreCCinstanceQ(place__2544, ralphScoreCCLarrayG)))
        B2546 = ralphScoreCCnot(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(place__2544)), '%get-property'));
    else
        B2546 = false;
    if (($T)(B2546))
        return(ralphScoreCCMconcat(ralphScoreCCMconcat([ralphScompilerSutilitiesCCtransform_setter_identifier(ralphScoreCCfirst(place__2544))], ralphScoreCCrest(place__2544)), new_values__2545));
    else
        return([
            B2440,
            place__2544,
            ralphScoreCCfirst(new_values__2545)
        ]);
});
{
    {
        var B2550 = $S('%define', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__2488, 'define', function B2551(env__2552, identifier__2553, value__2554) {
        {
            var B2555 = value__2554;
            var B2556 = false;
        }
        if (($T)(B2555))
            B2556 = B2555;
        else
            B2556 = false;
        return([
            B2550,
            identifier__2553,
            B2556
        ]);
    });
}
{
    {
        var ralphScoreCCMkeys = B1976['%keys'];
        var B2564 = $S('%try', 'ralph/core');
        var B2565 = $S('instance?', 'ralph/core');
    }
    ralphScoreCCget_setter(Binternal_macros__2488, 'handler-case', function B2566(____2567, protected_form__2568) {
        {
            var cases__2569 = $SL.call(arguments, 2);
            var condition_var__2570 = ralphScoreCCgenerate_symbol();
        }
        return([
            B2564,
            protected_form__2568,
            condition_var__2570,
            ralphScoreCCMconcat([B2076], ralphScoreCCmap(function B2571(case__2572) {
                {
                    var B2573 = case__2572[0];
                    var type__2574 = B2573[0];
                    var B2575 = $SL.call(B2573, 1);
                    var B2576 = ralphScoreCCMkeys(B2575, { 'condition': false });
                    var condition__2577 = B2576['condition'];
                    var body__2578 = $SL.call(case__2572, 1);
                    var B2579 = [[
                                B2565,
                                condition_var__2570,
                                type__2574
                            ]];
                    var B2580 = false;
                }
                if (($T)(condition__2577))
                    B2580 = [ralphScoreCCMconcat([
                            B2007,
                            [[
                                    condition__2577,
                                    condition_var__2570
                                ]]
                        ], body__2578)];
                else
                    B2580 = body__2578;
                return(ralphScoreCCconcatenate(B2579, B2580));
            }, cases__2569))
        ]);
    });
}
{
    {
        var Binternal_symbol_macros__2581 = ralphScoreCCmake_plain_object();
    }
    (exports)['$internal-symbol-macros'] = Binternal_symbol_macros__2581;
}
