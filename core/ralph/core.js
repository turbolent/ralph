{
    var $module = Object.create(null);
    var Mexport = function B7(name__8, value__9) {
        var B10 = (exports);
        return(B10[name__8] = value__9);
    };
}
false;
{
    var LobjectG = (Object);
    Mexport('<object>', LobjectG);
}
{
    var LstringG = (String);
    Mexport('<string>', LstringG);
}
{
    var LnumberG = (Number);
    Mexport('<number>', LnumberG);
}
{
    var LarrayG = (Array);
    Mexport('<array>', LarrayG);
}
{
    var LbooleanG = (Boolean);
    Mexport('<boolean>', LbooleanG);
}
{
    var LfunctionG = (Function);
    Mexport('<function>', LfunctionG);
}
{
    var LerrorG = (Error);
    Mexport('<error>', LerrorG);
}
LerrorG['%properties'] = { 'message': false };
{
    var Mannotate_function = function B12(function__13, name__14, setterQ__15) {
        function__13['%name'] = name__14;
        {
            function__13['%setter?'] = setterQ__15;
            return(function__13);
        }
    };
    Mexport('%annotate-function', Mannotate_function);
}
{
    {
        var trueQ = function B17(value__18) {
            return(value__18 != (null) && value__18 !== false);
        };
        Mexport('true?', trueQ);
    }
    Mannotate_function(trueQ, 'true?', false);
}
$T = trueQ;
{
    {
        var not = function B20(value__21) {
            return(!(trueQ(value__21)));
        };
        Mexport('not', not);
    }
    Mannotate_function(not, 'not', false);
}
{
    {
        var size = function B23(object__24) {
            return((object__24 || false)['length'] || 0);
        };
        Mexport('size', size);
    }
    Mannotate_function(size, 'size', false);
}
$SL = [].slice;
{
    {
        var inc = function B26(number__27) {
            return(number__27 + 1);
        };
        Mexport('inc', inc);
    }
    Mannotate_function(inc, 'inc', false);
}
{
    {
        var dec = function B29(number__30) {
            return(number__30 - 1);
        };
        Mexport('dec', dec);
    }
    Mannotate_function(dec, 'dec', false);
}
{
    {
        var binaryEE = function B32(object1__33, object2__34) {
            return(object1__33 === object2__34);
        };
        Mexport('binary==', binaryEE);
    }
    Mannotate_function(binaryEE, 'binary==', false);
}
{
    {
        var Minherit = function B36(class__37, superclass__38) {
            class__37['%superclass'] = superclass__38;
            {
                class__37['prototype']['__proto__'] = superclass__38['prototype'];
                {
                    var super_properties__39 = superclass__38['%properties'];
                    {
                        if (($T)(super_properties__39 instanceof LobjectG))
                            class__37['%properties']['__proto__'] = super_properties__39;
                        return(class__37);
                    }
                }
            }
        };
        Mexport('%inherit', Minherit);
    }
    Mannotate_function(Minherit, '%inherit', false);
}
{
    {
        var Mmake_class = function B42(superclass__43, properties__44, constructor__45) {
            if (($T)(not(constructor__45)))
                constructor__45 = function B46() {
                    return(false);
                };
            {
                constructor__45['%properties'] = properties__44;
                {
                    constructor__45['%class?'] = true;
                    {
                        if (($T)(superclass__43))
                            Minherit(constructor__45, superclass__43);
                        return(constructor__45);
                    }
                }
            }
        };
        Mexport('%make-class', Mmake_class);
    }
    Mannotate_function(Mmake_class, '%make-class', false);
}
{
    var Mkeywords = {};
    Mexport('%keywords', Mkeywords);
}
{
    var LkeywordG = Mmake_class(LobjectG, { 'name': false }, function LkeywordG__47() {
            var B48 = (this);
            return(B48['name'] = (undefined));
        });
    Mexport('<keyword>', LkeywordG);
}
{
    {
        var keyword = function B52(name__53) {
            var B54 = name__53;
            {
                var nameT__55 = B54['toLowerCase']();
                {
                    var B56 = Mkeywords[nameT__55];
                    if (($T)(B56))
                        return(B56);
                    else {
                        var keyword__57 = new(LkeywordG);
                        {
                            keyword__57['name'] = name__53;
                            {
                                Mkeywords[name__53] = keyword__57;
                                return(keyword__57);
                            }
                        }
                    }
                }
            }
        };
        Mexport('keyword', keyword);
    }
    Mannotate_function(keyword, 'keyword', false);
}
$K = keyword;
var Texit_function_counterT = 0;
{
    var Lnon_local_exitG = Mmake_class(LobjectG, {}, function Lnon_local_exitG__58() {
            return(false);
        });
    Mexport('<non-local-exit>', Lnon_local_exitG);
}
{
    {
        var Mmake_exit_function = function B61() {
            var identifier__62 = Texit_function_counterT = P(Texit_function_counterT, 1);
            {
                var exit_function__66 = function B63(return_value__64) {
                    var condition__65 = new(Lnon_local_exitG);
                    {
                        condition__65['identifier'] = identifier__62;
                        {
                            condition__65['return-value'] = return_value__64;
                            return(signal(condition__65));
                        }
                    }
                };
                {
                    exit_function__66['identifier'] = identifier__62;
                    return(exit_function__66);
                }
            }
        };
        Mexport('%make-exit-function', Mmake_exit_function);
    }
    Mannotate_function(Mmake_exit_function, '%make-exit-function', false);
}
{
    {
        var Mconcat = function B70(array1__71, array2__72) {
            var B73 = array1__71;
            {
                var B74 = array2__72;
                return(B73['concat'](B74));
            }
        };
        Mexport('%concat', Mconcat);
    }
    Mannotate_function(Mconcat, '%concat', false);
}
{
    {
        var cons = function B76(value__77, rest__78) {
            return(Mconcat([value__77], rest__78));
        };
        Mexport('cons', cons);
    }
    Mannotate_function(cons, 'cons', false);
}
{
    var as_string = (String);
    Mexport('as-string', as_string);
}
{
    var as_number = (Number);
    Mexport('as-number', as_number);
}
{
    {
        var as_array = function B80(arguments__81, skip__82) {
            return($SL.call(arguments__81, skip__82 || 0));
        };
        Mexport('as-array', as_array);
    }
    Mannotate_function(as_array, 'as-array', false);
}
{
    {
        var as_json = function B86(value__87) {
            var B88 = $SL.call(arguments, 1);
            {
                var B89 = Mkeys(B88, {
                        'replacer': (null),
                        'indent': false
                    });
                {
                    var replacer__90 = B89['replacer'];
                    {
                        var indent__91 = B89['indent'];
                        return(JSON.stringify(value__87, replacer__90, indent__91));
                    }
                }
            }
        };
        Mexport('as-json', as_json);
    }
    Mannotate_function(as_json, 'as-json', false);
}
{
    var parse_json = (JSON.parse);
    Mexport('parse-json', parse_json);
}
{
    var parse_number = (parseFloat);
    Mexport('parse-number', parse_number);
}
{
    {
        var char_code = function B95(char__96) {
            var B97 = char__96;
            {
                var B98 = 0;
                return(B97['charCodeAt'](B98));
            }
        };
        Mexport('char-code', char_code);
    }
    Mannotate_function(char_code, 'char-code', false);
}
{
    var code_char = (String.fromCharCode);
    Mexport('code-char', code_char);
}
{
    {
        var emptyQ = function B100(sequence__101) {
            return(binaryEE(size(sequence__101), 0));
        };
        Mexport('empty?', emptyQ);
    }
    Mannotate_function(emptyQ, 'empty?', false);
}
{
    {
        var rest = function B105(sequence__106) {
            var B107 = sequence__106;
            {
                var B108 = 1;
                return(B107['slice'](B108));
            }
        };
        Mexport('rest', rest);
    }
    Mannotate_function(rest, 'rest', false);
}
{
    {
        var last = function B110(array__111) {
            return(array__111[dec(size(array__111), 1)]);
        };
        Mexport('last', last);
    }
    Mannotate_function(last, 'last', false);
}
{
    {
        var last_setter = function B113(array__114, value__115) {
            var B116 = dec(size(array__114), 1);
            return(array__114[B116] = value__115);
        };
        Mexport('last-setter', last_setter);
    }
    Mannotate_function(last_setter, 'last-setter', true);
}
{
    {
        var first = function B118(sequence__119) {
            return(sequence__119[0]);
        };
        Mexport('first', first);
    }
    Mannotate_function(first, 'first', false);
}
{
    {
        var first_setter = function B121(array__122, value__123) {
            return(array__122[0] = value__123);
        };
        Mexport('first-setter', first_setter);
    }
    Mannotate_function(first_setter, 'first-setter', true);
}
{
    {
        var second = function B125(sequence__126) {
            return(sequence__126[1]);
        };
        Mexport('second', second);
    }
    Mannotate_function(second, 'second', false);
}
{
    {
        var second_setter = function B128(array__129, value__130) {
            return(array__129[1] = value__130);
        };
        Mexport('second-setter', second_setter);
    }
    Mannotate_function(second_setter, 'second-setter', true);
}
{
    {
        var third = function B132(sequence__133) {
            return(sequence__133[2]);
        };
        Mexport('third', third);
    }
    Mannotate_function(third, 'third', false);
}
{
    {
        var third_setter = function B135(array__136, value__137) {
            return(array__136[2] = value__137);
        };
        Mexport('third-setter', third_setter);
    }
    Mannotate_function(third_setter, 'third-setter', true);
}
{
    {
        var make_array = function B139() {
            var elements__140 = $SL.call(arguments, 0);
            return(elements__140);
        };
        Mexport('make-array', make_array);
    }
    Mannotate_function(make_array, 'make-array', false);
}
{
    {
        var push = function B144(array__145, value__146) {
            var B147 = array__145;
            {
                var B148 = value__146;
                {
                    B147['unshift'](B148);
                    return(value__146);
                }
            }
        };
        Mexport('push', push);
    }
    Mannotate_function(push, 'push', false);
}
{
    {
        var push_last = function B152(array__153, value__154) {
            var B155 = array__153;
            {
                var B156 = value__154;
                {
                    B155['push'](B156);
                    return(value__154);
                }
            }
        };
        Mexport('push-last', push_last);
    }
    Mannotate_function(push_last, 'push-last', false);
}
{
    {
        var pop = function B159(array__160) {
            var B161 = array__160;
            return(B161['shift']());
        };
        Mexport('pop', pop);
    }
    Mannotate_function(pop, 'pop', false);
}
{
    {
        var pop_last = function B164(array__165) {
            var B166 = array__165;
            return(B166['pop']());
        };
        Mexport('pop-last', pop_last);
    }
    Mannotate_function(pop_last, 'pop-last', false);
}
{
    {
        var but_last = function B171(array__172, n__173) {
            var B174 = array__172;
            {
                var B175 = 0;
                {
                    var B176 = (n__173 || 1) * -1;
                    return(B174['slice'](B175, B176));
                }
            }
        };
        Mexport('but-last', but_last);
    }
    Mannotate_function(but_last, 'but-last', false);
}
{
    {
        var slice = function B181(array__182, start__183, end__184) {
            var B185 = array__182;
            {
                var B186 = start__183;
                {
                    var B187 = end__184;
                    return(B185['slice'](B186, B187));
                }
            }
        };
        Mexport('slice', slice);
    }
    Mannotate_function(slice, 'slice', false);
}
{
    var B191 = $K('from-end?');
    {
        {
            var reduce1 = function B192(function__193, values__194) {
                var B195 = $SL.call(arguments, 2);
                {
                    var B196 = Mkeys(B195, { 'from-end?': false });
                    {
                        var from_endQ__197 = B196['from-end?'];
                        if (($T)(emptyQ(values__194)))
                            return(function__193());
                        else {
                            var B198 = false;
                            if (($T)(from_endQ__197))
                                B198 = [
                                    last(values__194),
                                    but_last(values__194)
                                ];
                            else
                                B198 = [
                                    first(values__194),
                                    rest(values__194)
                                ];
                            {
                                var B199 = [
                                        B191,
                                        from_endQ__197
                                    ];
                                {
                                    var B200 = Mconcat(B198, B199);
                                    return(apply(reduce, function__193, B200));
                                }
                            }
                        }
                    }
                }
            };
            Mexport('reduce1', reduce1);
        }
        Mannotate_function(reduce1, 'reduce1', false);
    }
}
{
    {
        var reduce = function B208(function__209, initial_value__210, values__211) {
            var B212 = $SL.call(arguments, 3);
            {
                var B213 = Mkeys(B212, { 'from-end?': false });
                {
                    var from_endQ__214 = B213['from-end?'];
                    {
                        var result__215 = initial_value__210;
                        {
                            if (($T)(from_endQ__214)) {
                                var values__216 = reverse(values__211);
                                {
                                    var B217 = size(values__216);
                                    {
                                        var i__218 = 0;
                                        {
                                            while (($T)(not(binaryGE(i__218, B217)))) {
                                                (function B219(i__220) {
                                                    return(result__215 = function__209(values__216[i__220], result__215));
                                                }(i__218));
                                                i__218 = inc(i__218);
                                            }
                                            false;
                                        }
                                    }
                                }
                            } else {
                                var B221 = size(values__211);
                                {
                                    var i__222 = 0;
                                    {
                                        while (($T)(not(binaryGE(i__222, B221)))) {
                                            (function B223(i__224) {
                                                return(result__215 = function__209(result__215, values__211[i__224]));
                                            }(i__222));
                                            i__222 = inc(i__222);
                                        }
                                        false;
                                    }
                                }
                            }
                            return(result__215);
                        }
                    }
                }
            }
        };
        Mexport('reduce', reduce);
    }
    Mannotate_function(reduce, 'reduce', false);
}
{
    {
        var reverseN = function B227(array__228) {
            var B229 = array__228;
            return(B229['reverse']());
        };
        Mexport('reverse!', reverseN);
    }
    Mannotate_function(reverseN, 'reverse!', false);
}
{
    {
        var reverse = function B231(array__232) {
            return(reverseN(slice(array__232)));
        };
        Mexport('reverse', reverse);
    }
    Mannotate_function(reverse, 'reverse', false);
}
{
    {
        var sortN = function B239(array__240) {
            var B241 = $SL.call(arguments, 1);
            {
                var B242 = Mkeys(B241, {
                        'test': L,
                        'key': identity
                    });
                {
                    var test__243 = B242['test'];
                    {
                        var key__244 = B242['key'];
                        {
                            var B245 = array__240;
                            {
                                var B249 = function B246(a__247, b__248) {
                                    if (($T)(test__243(key__244(a__247), key__244(b__248))))
                                        return(-1);
                                    else
                                        return(1);
                                };
                                return(B245['sort'](B249));
                            }
                        }
                    }
                }
            }
        };
        Mexport('sort!', sortN);
    }
    Mannotate_function(sortN, 'sort!', false);
}
{
    var B253 = $K('test');
    {
        var B254 = $K('key');
        {
            {
                var sort = function B255(array__256) {
                    var B257 = $SL.call(arguments, 1);
                    {
                        var B258 = Mkeys(B257, {
                                'test': L,
                                'key': identity
                            });
                        {
                            var test__259 = B258['test'];
                            {
                                var key__260 = B258['key'];
                                return(sortN(slice(array__256), B253, test__259, B254, key__260));
                            }
                        }
                    }
                };
                Mexport('sort', sort);
            }
            Mannotate_function(sort, 'sort', false);
        }
    }
}
{
    {
        var apply = function B262(function__263) {
            var actual__264 = $SL.call(arguments, 1, -1);
            {
                var last__265 = arguments[size(arguments) - 1];
                {
                    var arguments__266 = false;
                    if (($T)(binaryEE(last__265, function__263)))
                        arguments__266 = actual__264;
                    else
                        arguments__266 = Mconcat(actual__264, last__265);
                    return(function__263['apply']((null), arguments__266));
                }
            }
        };
        Mexport('apply', apply);
    }
    Mannotate_function(apply, 'apply', false);
}
{
    {
        var curry = function B269(function__270) {
            var curried_args__271 = $SL.call(arguments, 1);
            return(function B272() {
                var args__273 = $SL.call(arguments, 0);
                return(apply(function__270, Mconcat(curried_args__271, args__273)));
            });
        };
        Mexport('curry', curry);
    }
    Mannotate_function(curry, 'curry', false);
}
{
    {
        var rcurry = function B276(function__277) {
            var curried_args__278 = $SL.call(arguments, 1);
            return(function B279() {
                var args__280 = $SL.call(arguments, 0);
                return(apply(function__277, Mconcat(args__280, curried_args__278)));
            });
        };
        Mexport('rcurry', rcurry);
    }
    Mannotate_function(rcurry, 'rcurry', false);
}
{
    {
        var always = function B283(value__284) {
            return(function B285() {
                return(value__284);
            });
        };
        Mexport('always', always);
    }
    Mannotate_function(always, 'always', false);
}
{
    {
        var repeatedly = function B289(function__290, count__291) {
            var result__292 = [];
            {
                var B293 = count__291;
                {
                    var i__294 = 0;
                    {
                        while (($T)(not(binaryGE(i__294, B293)))) {
                            (function B295(i__296) {
                                return(push_last(result__292, function__290()));
                            }(i__294));
                            i__294 = inc(i__294);
                        }
                        return(result__292);
                    }
                }
            }
        };
        Mexport('repeatedly', repeatedly);
    }
    Mannotate_function(repeatedly, 'repeatedly', false);
}
{
    {
        var identity = function B298(value__299) {
            return(value__299);
        };
        Mexport('identity', identity);
    }
    Mannotate_function(identity, 'identity', false);
}
{
    {
        var complement = function B302(function__303) {
            return(function B304() {
                var arguments__305 = $SL.call(arguments, 0);
                return(not(apply(function__303, arguments__305)));
            });
        };
        Mexport('complement', complement);
    }
    Mannotate_function(complement, 'complement', false);
}
{
    {
        var compose = function B309() {
            var functions__310 = $SL.call(arguments, 0);
            if (($T)(emptyQ(functions__310)))
                return(identity);
            else
                return(function B311() {
                    var arguments__312 = $SL.call(arguments, 0);
                    return(reduce(function B313(function__314, value__315) {
                        return(function__314(value__315));
                    }, apply(last(functions__310), arguments__312), but_last(functions__310), B191, true));
                });
        };
        Mexport('compose', compose);
    }
    Mannotate_function(compose, 'compose', false);
}
{
    var binaryP = function B317(number1__318, number2__319) {
        return(number1__318 + number2__319);
    };
    Mannotate_function(binaryP, 'binary+', false);
}
{
    var binary_ = function B321(number1__322, number2__323) {
        return(number1__322 - number2__323);
    };
    Mannotate_function(binary_, 'binary-', false);
}
{
    var binaryT = function B325(number1__326, number2__327) {
        return(number1__326 * number2__327);
    };
    Mannotate_function(binaryT, 'binary*', false);
}
{
    var binaryS = function B329(number1__330, number2__331) {
        return(number1__330 / number2__331);
    };
    Mannotate_function(binaryS, 'binary/', false);
}
{
    {
        var type = function B333(object__334) {
            if (($T)(object__334))
                return(object__334['constructor']);
            else
                return(LbooleanG);
        };
        Mexport('type', type);
    }
    Mannotate_function(type, 'type', false);
}
{
    {
        var instanceQ = function B336(object__337, type__338) {
            if (($T)(object__337))
                return(object__337 instanceof type__338 || binaryEE(object__337['constructor'], type__338));
            else
                return(binaryEE(type__338, LbooleanG));
        };
        Mexport('instance?', instanceQ);
    }
    Mannotate_function(instanceQ, 'instance?', false);
}
$HP = Object.hasOwnProperty;
{
    {
        var hasQ = function B340(object__341, property__342) {
            return(($HP.call(object__341,property__342)));
        };
        Mexport('has?', hasQ);
    }
    Mannotate_function(hasQ, 'has?', false);
}
{
    {
        var Mmake_method = function B344(name__345, function__346, setterQ__347, type__348, existing__349) {
            function__346['%name'] = name__345;
            {
                function__346['%setter?'] = setterQ__347;
                {
                    function__346['%type'] = type__348;
                    {
                        type__348['prototype'][name__345] = function__346;
                        {
                            var B350 = false;
                            if (($T)(existing__349))
                                B350 = existing__349['%generic?'];
                            else
                                B350 = false;
                            if (($T)(B350))
                                return(existing__349);
                            else
                                return(Mmake_generic(name__345));
                        }
                    }
                }
            }
        };
        Mexport('%make-method', Mmake_method);
    }
    Mannotate_function(Mmake_method, '%make-method', false);
}
{
    {
        var Mmake_generic = function B353(name__354) {
            var dispatcher__358 = function B355(object__356) {
                var function__357 = ((object__356== null ? false : object__356))[name__354];
                return(function__357 && function__357['apply'](object__356, arguments));
            };
            {
                dispatcher__358['%generic?'] = true;
                {
                    dispatcher__358['%name'] = name__354;
                    return(dispatcher__358);
                }
            }
        };
        Mexport('%make-generic', Mmake_generic);
    }
    Mannotate_function(Mmake_generic, '%make-generic', false);
}
{
    {
        var Mnext_method = function B360(function__361) {
            var name__362 = function__361['%name'];
            {
                var proto__363 = function__361['%type']['prototype']['__proto__'];
                return(proto__363[name__362]);
            }
        };
        Mexport('%next-method', Mnext_method);
    }
    Mannotate_function(Mnext_method, '%next-method', false);
}
{
    {
        var concatenate = function B365() {
            var values__366 = $SL.call(arguments, 0);
            if (($T)(emptyQ(values__366)))
                return([]);
            else
                return(reduce1(Mconcat, values__366));
        };
        Mexport('concatenate', concatenate);
    }
    Mannotate_function(concatenate, 'concatenate', false);
}
{
    {
        var compare = function B369(function__370, object__371, objects__372) {
            var failedQ__373 = false;
            {
                while (true) {
                    var B374 = failedQ__373;
                    {
                        var B376 = false;
                        if (($T)(B374))
                            B376 = B374;
                        else
                            B376 = emptyQ(objects__372);
                        {
                            var B377 = not(B376);
                            if (($T)(B377)) {
                                var other__375 = first(objects__372);
                                {
                                    failedQ__373 = not(function__370(object__371, other__375));
                                    {
                                        objects__372 = rest(objects__372);
                                        object__371 = other__375;
                                    }
                                }
                            } else
                                break;
                        }
                    }
                }
                return(not(failedQ__373));
            }
        };
        Mexport('compare', compare);
    }
    Mannotate_function(compare, 'compare', false);
}
{
    {
        var EE = function B379(object__380) {
            var objects__381 = $SL.call(arguments, 1);
            return(compare(binaryEE, object__380, objects__381));
        };
        Mexport('==', EE);
    }
    Mannotate_function(EE, '==', false);
}
{
    var binaryE = Mmake_generic('binary=');
    Mexport('binary=', binaryE);
}
{
    var binaryL = Mmake_generic('binary<');
    Mexport('binary<', binaryL);
}
{
    var binaryE = Mmake_method('binary=', function B383(object1__384, object2__385) {
            if (($T)(binaryEE(type(object1__384), type(object2__385))))
                return(binaryEE(object1__384, object2__385));
            else
                return(false);
        }, false, LobjectG, binaryE);
    Mexport('binary=', binaryE);
}
{
    var binaryE = Mmake_method('binary=', function B394(array1__395, array2__396) {
            if (($T)(binaryEE(size(array1__395), size(array2__396)))) {
                var B397 = array1__395;
                {
                    var B398 = array2__396;
                    {
                        var B399 = false;
                        {
                            var B400 = false;
                            {
                                var B401 = [
                                        B397,
                                        B398
                                    ];
                                {
                                    while (true) {
                                        var B402 = B399;
                                        {
                                            var B408 = false;
                                            if (($T)(B402))
                                                B408 = B402;
                                            else
                                                B408 = anyQ(emptyQ, B401);
                                            {
                                                var B409 = not(B408);
                                                if (($T)(B409)) {
                                                    var item1__403 = first(B397);
                                                    {
                                                        var item2__404 = first(B398);
                                                        if (($T)(not(binaryE(item1__403, item2__404)))) {
                                                            B400 = true;
                                                            B399 = true;
                                                        } else {
                                                            (function B405(item1__406, item2__407) {
                                                                return(false);
                                                            }(item1__403, item2__404));
                                                            {
                                                                B397 = rest(B397);
                                                                {
                                                                    B398 = rest(B398);
                                                                    B401 = [
                                                                        B397,
                                                                        B398
                                                                    ];
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else
                                                    break;
                                            }
                                        }
                                    }
                                    return(not(B400));
                                }
                            }
                        }
                    }
                }
            } else
                return(false);
        }, false, LarrayG, binaryE);
    Mexport('binary=', binaryE);
}
var binaryE_dispatcher = binaryE;
{
    {
        var binaryE = function B412(object1__413, object2__414) {
            var B415 = false;
            if (($T)(not(object1__413)))
                B415 = not(object2__414);
            else
                B415 = false;
            if (($T)(B415))
                return(B415);
            else
                return(binaryE_dispatcher(object1__413, object2__414));
        };
        Mexport('binary=', binaryE);
    }
    Mannotate_function(binaryE, 'binary=', false);
}
{
    {
        var E = function B417(object__418) {
            var objects__419 = $SL.call(arguments, 1);
            return(compare(binaryE, object__418, objects__419));
        };
        Mexport('=', E);
    }
    Mannotate_function(E, '=', false);
}
{
    var binaryL = Mmake_method('binary<', function B421(object1__422, object2__423) {
            if (($T)(binaryEE(type(object1__422), type(object2__423))))
                return(object1__422 < object2__423);
            else
                return(false);
        }, false, LobjectG, binaryL);
    Mexport('binary<', binaryL);
}
{
    {
        var L = function B425(object__426) {
            var objects__427 = $SL.call(arguments, 1);
            return(compare(binaryL, object__426, objects__427));
        };
        Mexport('<', L);
    }
    Mannotate_function(L, '<', false);
}
{
    {
        var binaryLE = function B430(object1__431, object2__432) {
            if (($T)(object1__431))
                if (($T)(object2__432)) {
                    var B433 = binaryL(object1__431, object2__432);
                    if (($T)(B433))
                        return(B433);
                    else
                        return(binaryE(object1__431, object2__432));
                } else
                    return(false);
            else
                return(false);
        };
        Mexport('binary<=', binaryLE);
    }
    Mannotate_function(binaryLE, 'binary<=', false);
}
{
    {
        var LE = function B435(object__436) {
            var objects__437 = $SL.call(arguments, 1);
            return(compare(binaryLE, object__436, objects__437));
        };
        Mexport('<=', LE);
    }
    Mannotate_function(LE, '<=', false);
}
{
    {
        var binaryG = function B439(object1__440, object2__441) {
            if (($T)(object1__440))
                if (($T)(object2__441))
                    if (($T)(not(binaryL(object1__440, object2__441))))
                        return(not(binaryE(object1__440, object2__441)));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
        Mexport('binary>', binaryG);
    }
    Mannotate_function(binaryG, 'binary>', false);
}
{
    {
        var G = function B443(object__444) {
            var objects__445 = $SL.call(arguments, 1);
            return(compare(binaryG, object__444, objects__445));
        };
        Mexport('>', G);
    }
    Mannotate_function(G, '>', false);
}
{
    {
        var binaryGE = function B448(object1__449, object2__450) {
            var B451 = not(binaryL(object1__449, object2__450));
            if (($T)(B451))
                return(B451);
            else
                return(binaryE(object1__449, object2__450));
        };
        Mexport('binary>=', binaryGE);
    }
    Mannotate_function(binaryGE, 'binary>=', false);
}
{
    {
        var GE = function B453(object__454) {
            var objects__455 = $SL.call(arguments, 1);
            return(compare(binaryGE, object__454, objects__455));
        };
        Mexport('>=', GE);
    }
    Mannotate_function(GE, '>=', false);
}
{
    {
        var as_object = function B457(property_list__458) {
            var list__459 = slice(property_list__458);
            {
                var result__460 = {};
                {
                    while (($T)(G(size(list__459), 0))) {
                        var key__461 = pop(list__459);
                        {
                            var value__462 = pop(list__459);
                            {
                                var B463 = false;
                                if (($T)(instanceQ(key__461, LkeywordG)))
                                    B463 = key__461['name'];
                                else
                                    B463 = as_string(key__461);
                                {
                                    key__461 = B463;
                                    result__460[key__461] = value__462;
                                }
                            }
                        }
                    }
                    return(result__460);
                }
            }
        };
        Mexport('as-object', as_object);
    }
    Mannotate_function(as_object, 'as-object', false);
}
{
    {
        var position = function B470(array__471, element__472) {
            var B473 = $SL.call(arguments, 2);
            {
                var B474 = Mkeys(B473, { 'start': 0 });
                {
                    var start__475 = B474['start'];
                    {
                        var B476 = array__471;
                        {
                            var B477 = element__472;
                            {
                                var B478 = start__475;
                                {
                                    var position__479 = B476['indexOf'](B477, B478);
                                    if (($T)(G(position__479, -1)))
                                        return(position__479);
                                    else
                                        return(false);
                                }
                            }
                        }
                    }
                }
            }
        };
        Mexport('position', position);
    }
    Mannotate_function(position, 'position', false);
}
{
    {
        var last_position = function B483(array__484, element__485) {
            var B486 = array__484;
            {
                var B487 = element__485;
                {
                    var position__488 = B486['lastIndexOf'](B487);
                    if (($T)(G(position__488, -1)))
                        return(position__488);
                    else
                        return(false);
                }
            }
        };
        Mexport('last-position', last_position);
    }
    Mannotate_function(last_position, 'last-position', false);
}
{
    var B492 = $K('start');
    {
        {
            var count = function B493(item__494, array__495) {
                var result__496 = -1;
                {
                    var pos__497 = 0;
                    {
                        while (($T)(not(not(pos__497)))) {
                            (function B498(result__499, pos__500) {
                                return(false);
                            }(result__496, pos__497));
                            {
                                var B501 = inc(result__496);
                                {
                                    pos__497 = position(array__495, item__494, B492, inc(pos__497));
                                    result__496 = B501;
                                }
                            }
                        }
                        return(result__496);
                    }
                }
            };
            Mexport('count', count);
        }
        Mannotate_function(count, 'count', false);
    }
}
{
    {
        var as_uppercase = function B504(string__505) {
            var B506 = string__505;
            return(B506['toUpperCase']());
        };
        Mexport('as-uppercase', as_uppercase);
    }
    Mannotate_function(as_uppercase, 'as-uppercase', false);
}
{
    {
        var as_lowercase = function B509(string__510) {
            var B511 = string__510;
            return(B511['toLowerCase']());
        };
        Mexport('as-lowercase', as_lowercase);
    }
    Mannotate_function(as_lowercase, 'as-lowercase', false);
}
{
    {
        var join = function B515(array__516, string__517) {
            var B518 = array__516;
            {
                var B519 = string__517;
                return(B518['join'](B519));
            }
        };
        Mexport('join', join);
    }
    Mannotate_function(join, 'join', false);
}
{
    {
        var trim = function B522(string__523) {
            var B524 = string__523;
            return(B524['trim']());
        };
        Mexport('trim', trim);
    }
    Mannotate_function(trim, 'trim', false);
}
{
    {
        var replace = function B529(string__530, pattern__531, replacement__532) {
            var B533 = string__530;
            {
                var B534 = pattern__531;
                {
                    var B535 = replacement__532;
                    return(B533['replace'](B534, B535));
                }
            }
        };
        Mexport('replace', replace);
    }
    Mannotate_function(replace, 'replace', false);
}
{
    {
        var make_object = function B537() {
            var key_values__538 = $SL.call(arguments, 0);
            return(as_object(key_values__538));
        };
        Mexport('make-object', make_object);
    }
    Mannotate_function(make_object, 'make-object', false);
}
{
    var LsymbolG = Mmake_class(LobjectG, {
            'name': false,
            'module': false
        }, function LsymbolG__539() {
            var B540 = (this);
            {
                B540['name'] = (undefined);
                {
                    var B541 = (this);
                    return(B541['module'] = (undefined));
                }
            }
        });
    Mexport('<symbol>', LsymbolG);
}
var Msymbols = {};
{
    {
        var symbol = function B543(name__544, module__545) {
            var B546 = as_lowercase(name__544);
            {
                var B547 = false;
                if (($T)(module__545))
                    B547 = as_lowercase(module__545);
                else
                    B547 = false;
                return(MMsymbol(B546, B547));
            }
        };
        Mexport('symbol', symbol);
    }
    Mannotate_function(symbol, 'symbol', false);
}
{
    {
        var symbol_name = function B549(symbol__550) {
            return(get(symbol__550, 'name'));
        };
        Mexport('symbol-name', symbol_name);
    }
    Mannotate_function(symbol_name, 'symbol-name', false);
}
{
    {
        var destructure_symbol = function B552(symbol__553) {
            return([
                get(symbol__553, 'name'),
                get(symbol__553, 'module')
            ]);
        };
        Mexport('destructure-symbol', destructure_symbol);
    }
    Mannotate_function(destructure_symbol, 'destructure-symbol', false);
}
{
    var B557 = $K('name');
    {
        var B558 = $K('module');
        {
            {
                var MMsymbol = function B559(name__560, module__561) {
                    var B562 = module__561;
                    {
                        var moduleT__563 = false;
                        if (($T)(B562))
                            moduleT__563 = B562;
                        else
                            moduleT__563 = '';
                        {
                            var B564 = get(Msymbols, moduleT__563, name__560);
                            if (($T)(B564))
                                return(B564);
                            else
                                return(get_setter(Msymbols, moduleT__563, name__560, make(LsymbolG, B557, name__560, B558, module__561)));
                        }
                    }
                };
                Mexport('%%symbol', MMsymbol);
            }
            Mannotate_function(MMsymbol, '%%symbol', false);
        }
    }
}
$S = MMsymbol;
var Tsymbol_countT = 0;
{
    {
        var reset_symbol_counterN = function B566() {
            return(Tsymbol_countT = 0);
        };
        Mexport('reset-symbol-counter!', reset_symbol_counterN);
    }
    Mannotate_function(reset_symbol_counterN, 'reset-symbol-counter!', false);
}
{
    {
        var generate_symbol = function B568(env__569, prefix__570) {
            var B573 = false;
            if (($T)(prefix__570))
                B573 = concatenate(prefix__570, '_');
            else
                B573 = '$';
            {
                var B574 = as_string(Tsymbol_countT = P(Tsymbol_countT, 1));
                {
                    var name__571 = concatenate(B573, B574);
                    {
                        var B575 = false;
                        if (($T)(env__569))
                            B575 = get(env__569, 'module', 'name');
                        else
                            B575 = false;
                        {
                            var result__572 = symbol(name__571, B575);
                            {
                                get_setter(result__572, 'generated?', true);
                                return(result__572);
                            }
                        }
                    }
                }
            }
        };
        Mexport('generate-symbol', generate_symbol);
    }
    Mannotate_function(generate_symbol, 'generate-symbol', false);
}
{
    {
        var Mkeys = function B578(key_values__579, defaults__580) {
            var i__581 = 0;
            {
                while (($T)(not(i__581 >= size(key_values__579)))) {
                    (function B582(i__583) {
                        var key__584 = key_values__579[i__583];
                        {
                            var value__585 = key_values__579[inc(i__583, 1)];
                            if (($T)(instanceQ(key__584, LkeywordG))) {
                                var B586 = key__584['name'];
                                return(defaults__580[B586] = value__585);
                            } else
                                return(false);
                        }
                    }(i__581));
                    i__581 = inc(i__581, 2);
                }
                {
                    false;
                    return(defaults__580);
                }
            }
        };
        Mexport('%keys', Mkeys);
    }
    Mannotate_function(Mkeys, '%keys', false);
}
{
    {
        var find_key = function B592(array__593, predicate__594) {
            var B595 = $SL.call(arguments, 2);
            {
                var B596 = Mkeys(B595, {
                        'skip': 0,
                        'failure': false,
                        'from-end?': false
                    });
                {
                    var skip__597 = B596['skip'];
                    {
                        var failure__598 = B596['failure'];
                        {
                            var from_endQ__599 = B596['from-end?'];
                            {
                                var keys__600 = object_properties(array__593);
                                {
                                    var B605 = function B601(index__602) {
                                        return(predicate__594(element(array__593, index__602)));
                                    };
                                    {
                                        var B606 = false;
                                        if (($T)(from_endQ__599))
                                            B606 = reverse(keys__600);
                                        else
                                            B606 = keys__600;
                                        {
                                            var satisfying_keys__603 = choose(B605, B606);
                                            {
                                                var B604 = element(satisfying_keys__603, skip__597);
                                                if (($T)(B604))
                                                    return(B604);
                                                else
                                                    return(failure__598);
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
        Mexport('find-key', find_key);
    }
    Mannotate_function(find_key, 'find-key', false);
}
{
    {
        var parse_integer = function B610(value__611) {
            var B612 = $SL.call(arguments, 1);
            {
                var B613 = Mkeys(B612, { 'radix': 10 });
                {
                    var radix__614 = B613['radix'];
                    return(parseInt(value__611, radix__614));
                }
            }
        };
        Mexport('parse-integer', parse_integer);
    }
    Mannotate_function(parse_integer, 'parse-integer', false);
}
{
    {
        var element = function B619(array__620, index__621) {
            var B622 = $SL.call(arguments, 2);
            {
                var B623 = Mkeys(B622, { 'default': false });
                {
                    var default__624 = B623['default'];
                    {
                        var B625 = array__620[index__621];
                        if (($T)(B625))
                            return(B625);
                        else
                            return(default__624);
                    }
                }
            }
        };
        Mexport('element', element);
    }
    Mannotate_function(element, 'element', false);
}
{
    {
        var element_setter = function B627(array__628, key__629, value__630) {
            return(array__628[key__629] = value__630);
        };
        Mexport('element-setter', element_setter);
    }
    Mannotate_function(element_setter, 'element-setter', true);
}
{
    {
        var replace_subsequence = function B634(target_array__635, insert_array__636) {
            var B637 = $SL.call(arguments, 2);
            {
                var B638 = Mkeys(B637, {
                        'start': 0,
                        'end': size(target_array__635)
                    });
                {
                    var start__639 = B638['start'];
                    {
                        var end__640 = B638['end'];
                        return(concatenate(slice(target_array__635, 0, start__639), insert_array__636, slice(target_array__635, end__640)));
                    }
                }
            }
        };
        Mexport('replace-subsequence', replace_subsequence);
    }
    Mannotate_function(replace_subsequence, 'replace-subsequence', false);
}
{
    {
        var replace_subsequenceN = function B644(target_array__645, insert_array__646) {
            var B647 = $SL.call(arguments, 2);
            {
                var B648 = Mkeys(B647, {
                        'start': 0,
                        'end': size(target_array__645)
                    });
                {
                    var start__649 = B648['start'];
                    {
                        var end__650 = B648['end'];
                        {
                            var rest__651 = Mconcat([
                                    start__649,
                                    _(end__650, start__649)
                                ], insert_array__646);
                            {
                                []['splice']['apply'](target_array__645, rest__651);
                                return(target_array__645);
                            }
                        }
                    }
                }
            }
        };
        Mexport('replace-subsequence!', replace_subsequenceN);
    }
    Mannotate_function(replace_subsequenceN, 'replace-subsequence!', false);
}
{
    {
        var removeN = function B659(array__660, value__661) {
            var B662 = $SL.call(arguments, 2);
            {
                var B663 = Mkeys(B662, { 'test': EE });
                {
                    var test__664 = B663['test'];
                    {
                        var B665 = find_key(array__660, curry(test__664, value__661));
                        {
                            if (($T)(B665)) {
                                var key__666 = B665;
                                {
                                    var B667 = array__660;
                                    {
                                        var B668 = key__666;
                                        {
                                            var B669 = 1;
                                            B667['splice'](B668, B669);
                                        }
                                    }
                                }
                            }
                            return(array__660);
                        }
                    }
                }
            }
        };
        Mexport('remove!', removeN);
    }
    Mannotate_function(removeN, 'remove!', false);
}
{
    {
        var remove = function B673(array__674, value__675) {
            var B676 = $SL.call(arguments, 2);
            {
                var B677 = Mkeys(B676, { 'test': EE });
                {
                    var test__678 = B677['test'];
                    return(removeN(slice(array__674), value__675, B253, test__678));
                }
            }
        };
        Mexport('remove', remove);
    }
    Mannotate_function(remove, 'remove', false);
}
{
    {
        var interpose = function B681(separator__682, array__683) {
            return(reduce1(function B684(a__685, b__686) {
                return(concatenate([
                    a__685,
                    separator__682
                ], b__686));
            }, array__683));
        };
        Mexport('interpose', interpose);
    }
    Mannotate_function(interpose, 'interpose', false);
}
{
    {
        var anyQ = function B690(function__691, values__692) {
            var value__693 = false;
            {
                var n__694 = size(values__692);
                {
                    var i__695 = 0;
                    {
                        while (true) {
                            var B696 = value__693;
                            {
                                var B699 = false;
                                if (($T)(B696))
                                    B699 = B696;
                                else
                                    B699 = GE(i__695, n__694);
                                {
                                    var B700 = not(B699);
                                    if (($T)(B700)) {
                                        (function B697(i__698) {
                                            return(value__693 = function__691(values__692[i__698]));
                                        }(i__695));
                                        i__695 = inc(i__695);
                                    } else
                                        break;
                                }
                            }
                        }
                        return(value__693);
                    }
                }
            }
        };
        Mexport('any?', anyQ);
    }
    Mannotate_function(anyQ, 'any?', false);
}
{
    {
        var memberQ = function B705(value__706, array__707) {
            var B708 = $SL.call(arguments, 2);
            {
                var B709 = Mkeys(B708, { 'test': binaryEE });
                {
                    var test__710 = B709['test'];
                    return(anyQ(function B711(other_value__712) {
                        return(test__710(value__706, other_value__712));
                    }, array__707));
                }
            }
        };
        Mexport('member?', memberQ);
    }
    Mannotate_function(memberQ, 'member?', false);
}
{
    {
        var everyQ = function B714(function__715, array__716) {
            return(not(anyQ(complement(function__715), array__716)));
        };
        Mexport('every?', everyQ);
    }
    Mannotate_function(everyQ, 'every?', false);
}
{
    {
        var map = function B724(function__725) {
            var arrays__726 = $SL.call(arguments, 1);
            {
                var result__727 = [];
                {
                    if (($T)(emptyQ(rest(arrays__726)))) {
                        var B728 = first(arrays__726);
                        {
                            var B729 = false;
                            {
                                var B730 = false;
                                {
                                    var B731 = [B728];
                                    {
                                        while (true) {
                                            var B732 = B729;
                                            {
                                                var B736 = false;
                                                if (($T)(B732))
                                                    B736 = B732;
                                                else
                                                    B736 = anyQ(emptyQ, B731);
                                                {
                                                    var B737 = not(B736);
                                                    if (($T)(B737)) {
                                                        var item__733 = first(B728);
                                                        {
                                                            (function B734(item__735) {
                                                                return(push_last(result__727, function__725(item__735)));
                                                            }(item__733));
                                                            {
                                                                B728 = rest(B728);
                                                                B731 = [B728];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                        B730;
                                    }
                                }
                            }
                        }
                    } else
                        while (($T)(not(anyQ(emptyQ, arrays__726)))) {
                            push_last(result__727, apply(function__725, map(first, arrays__726)));
                            arrays__726 = map(rest, arrays__726);
                        }
                    return(result__727);
                }
            }
        };
        Mexport('map', map);
    }
    Mannotate_function(map, 'map', false);
}
{
    {
        var Rdo = function B745(function__746) {
            var arrays__747 = $SL.call(arguments, 1);
            {
                if (($T)(emptyQ(rest(arrays__747)))) {
                    var B748 = first(arrays__747);
                    {
                        var B749 = false;
                        {
                            var B750 = false;
                            {
                                var B751 = [B748];
                                {
                                    while (true) {
                                        var B752 = B749;
                                        {
                                            var B756 = false;
                                            if (($T)(B752))
                                                B756 = B752;
                                            else
                                                B756 = anyQ(emptyQ, B751);
                                            {
                                                var B757 = not(B756);
                                                if (($T)(B757)) {
                                                    var item__753 = first(B748);
                                                    {
                                                        (function B754(item__755) {
                                                            return(function__746(item__755));
                                                        }(item__753));
                                                        {
                                                            B748 = rest(B748);
                                                            B751 = [B748];
                                                        }
                                                    }
                                                } else
                                                    break;
                                            }
                                        }
                                    }
                                    B750;
                                }
                            }
                        }
                    }
                } else
                    while (($T)(not(anyQ(emptyQ, arrays__747)))) {
                        apply(function__746, map(first, arrays__747));
                        arrays__747 = map(rest, arrays__747);
                    }
                return(false);
            }
        };
        Mexport('do', Rdo);
    }
    Mannotate_function(Rdo, 'do', false);
}
{
    {
        var choose = function B765(function__766, array__767) {
            var result__768 = [];
            {
                var B769 = array__767;
                {
                    var B770 = false;
                    {
                        var B771 = false;
                        {
                            var B772 = [B769];
                            {
                                while (true) {
                                    var B773 = B770;
                                    {
                                        var B777 = false;
                                        if (($T)(B773))
                                            B777 = B773;
                                        else
                                            B777 = anyQ(emptyQ, B772);
                                        {
                                            var B778 = not(B777);
                                            if (($T)(B778)) {
                                                var element__774 = first(B769);
                                                {
                                                    (function B775(element__776) {
                                                        if (($T)(function__766(element__776)))
                                                            return(push_last(result__768, element__776));
                                                        else
                                                            return(false);
                                                    }(element__774));
                                                    {
                                                        B769 = rest(B769);
                                                        B772 = [B769];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                                {
                                    B771;
                                    return(result__768);
                                }
                            }
                        }
                    }
                }
            }
        };
        Mexport('choose', choose);
    }
    Mannotate_function(choose, 'choose', false);
}
{
    {
        var copy_sequence = function B783(array__784) {
            var B785 = $SL.call(arguments, 1);
            {
                var B786 = Mkeys(B785, {
                        'start': 0,
                        'end': false
                    });
                {
                    var start__787 = B786['start'];
                    {
                        var end__788 = B786['end'];
                        {
                            var B789 = end__788;
                            {
                                var end__790 = false;
                                if (($T)(B789))
                                    end__790 = B789;
                                else
                                    end__790 = (undefined);
                                return(slice(array__784, start__787, end__790));
                            }
                        }
                    }
                }
            }
        };
        Mexport('copy-sequence', copy_sequence);
    }
    Mannotate_function(copy_sequence, 'copy-sequence', false);
}
{
    {
        var make = function B792(type__793) {
            var arguments__794 = $SL.call(arguments, 1);
            {
                var object__795 = new(type__793);
                {
                    apply(initialize, object__795, arguments__794);
                    return(object__795);
                }
            }
        };
        Mexport('make', make);
    }
    Mannotate_function(make, 'make', false);
}
{
    {
        var object_properties = function B802(object__803) {
            var B804 = $SL.call(arguments, 1);
            {
                var B805 = Mkeys(B804, { 'inherited?': false });
                {
                    var inheritedQ__806 = B805['inherited?'];
                    if (($T)(instanceQ(object__803, LarrayG))) {
                        var result__807 = [];
                        {
                            var B808 = size(object__803);
                            {
                                var i__809 = 0;
                                {
                                    while (($T)(not(binaryGE(i__809, B808)))) {
                                        (function B810(i__811) {
                                            return(push_last(result__807, i__811));
                                        }(i__809));
                                        i__809 = inc(i__809);
                                    }
                                    {
                                        false;
                                        return(result__807);
                                    }
                                }
                            }
                        }
                    } else {
                        var B812 = inheritedQ__806;
                        {
                            var B815 = false;
                            if (($T)(B812))
                                B815 = B812;
                            else
                                B815 = typeof(object__803) !== 'object';
                            if (($T)(B815)) {
                                var i__813 = false;
                                {
                                    var result__814 = [];
                                    {
                                        for (i__813 in object__803) (inheritedQ__806||$HP.call(object__803, i__813)) &&result__814.push(i__813);
                                        return(result__814);
                                    }
                                }
                            } else
                                return(Object.keys(object__803));
                        }
                    }
                }
            }
        };
        Mexport('object-properties', object_properties);
    }
    Mannotate_function(object_properties, 'object-properties', false);
}
{
    {
        var object_values = function B818(object__819) {
            return(map(function B820(property__821) {
                return(get(object__819, property__821));
            }, object_properties(object__819)));
        };
        Mexport('object-values', object_values);
    }
    Mannotate_function(object_values, 'object-values', false);
}
{
    var initialize = Mmake_generic('initialize');
    Mexport('initialize', initialize);
}
{
    var B826 = $K('inherited?');
    {
        var initialize = Mmake_method('initialize', function B827(object__828) {
                var rest__829 = $SL.call(arguments, 1);
                {
                    var arguments__830 = as_object(rest__829);
                    {
                        var B831 = type(object__828)['%properties'];
                        {
                            if (($T)(B831)) {
                                var properties__832 = B831;
                                Rdo(function B833(property__834) {
                                    var B838 = false;
                                    if (($T)(not(hasQ(LobjectG['prototype'], property__834))))
                                        B838 = typeof(object__828[property__834]) === 'undefined';
                                    else
                                        B838 = false;
                                    if (($T)(B838)) {
                                        var B835 = arguments__830[property__834];
                                        {
                                            var value__837 = false;
                                            if (($T)(B835))
                                                value__837 = B835;
                                            else {
                                                var value__836 = properties__832[property__834];
                                                if (($T)(value__836))
                                                    value__837 = value__836();
                                                else
                                                    value__837 = false;
                                            }
                                            return(object__828[property__834] = value__837);
                                        }
                                    } else
                                        return(false);
                                }, object_properties(properties__832, B826, true));
                            }
                            return(object__828);
                        }
                    }
                }
            }, false, LobjectG, initialize);
        Mexport('initialize', initialize);
    }
}
{
    var Lhash_symbolG = Mmake_class(LobjectG, { 'name': false }, function Lhash_symbolG__839() {
            var B840 = (this);
            return(B840['name'] = (undefined));
        });
    Mexport('<hash-symbol>', Lhash_symbolG);
}
{
    var key__841 = make(Lhash_symbolG, B557, 'key');
    $KEY = key__841;
}
{
    var rest__842 = make(Lhash_symbolG, B557, 'rest');
    $REST = rest__842;
}
{
    {
        var get = function B850(object__851) {
            var properties__852 = $SL.call(arguments, 1);
            {
                var result__853 = false;
                {
                    var B854 = properties__852;
                    {
                        var B855 = false;
                        {
                            var B856 = false;
                            {
                                var B857 = [B854];
                                {
                                    while (true) {
                                        var B858 = B855;
                                        {
                                            var B862 = false;
                                            if (($T)(B858))
                                                B862 = B858;
                                            else
                                                B862 = anyQ(emptyQ, B857);
                                            {
                                                var B863 = not(B862);
                                                if (($T)(B863)) {
                                                    var property__859 = first(B854);
                                                    if (($T)(not(hasQ(object__851, property__859)))) {
                                                        B856 = result__853 = false;
                                                        B855 = true;
                                                    } else {
                                                        (function B860(property__861) {
                                                            result__853 = object__851[property__861];
                                                            return(object__851 = result__853);
                                                        }(property__859));
                                                        {
                                                            B854 = rest(B854);
                                                            B857 = [B854];
                                                        }
                                                    }
                                                } else
                                                    break;
                                            }
                                        }
                                    }
                                    {
                                        B856;
                                        return(result__853);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        Mexport('get', get);
    }
    Mannotate_function(get, 'get', false);
}
{
    {
        var get_setter = function B865(object__866) {
            var propertiesSvalue__867 = $SL.call(arguments, 1);
            if (($T)(LE(size(propertiesSvalue__867), 2))) {
                var B870 = first(propertiesSvalue__867);
                return(object__866[B870] = second(propertiesSvalue__867));
            } else {
                var property__868 = first(propertiesSvalue__867);
                {
                    var object2__869 = false;
                    if (($T)(hasQ(object__866, property__868)))
                        object2__869 = object__866[property__868];
                    else
                        object2__869 = object__866[property__868] = make_object();
                    return(apply(B865, object2__869, rest(propertiesSvalue__867)));
                }
            }
        };
        Mexport('get-setter', get_setter);
    }
    Mannotate_function(get_setter, 'get-setter', true);
}
{
    {
        var split = function B874(string__875, separator__876) {
            var B877 = string__875;
            {
                var B878 = separator__876;
                return(B877['split'](B878));
            }
        };
        Mexport('split', split);
    }
    Mannotate_function(split, 'split', false);
}
{
    {
        var split_with = function B881(function__882, array__883) {
            var a__884 = [];
            {
                var b__885 = [];
                {
                    Rdo(function B886(item__887) {
                        var B888 = false;
                        if (($T)(function__882(item__887)))
                            B888 = a__884;
                        else
                            B888 = b__885;
                        return(push_last(B888, item__887));
                    }, array__883);
                    return([
                        a__884,
                        b__885
                    ]);
                }
            }
        };
        Mexport('split-with', split_with);
    }
    Mannotate_function(split_with, 'split-with', false);
}
{
    {
        var as_hex_string = function B892(number__893) {
            var B894 = number__893;
            {
                var B895 = 16;
                return(B894['toString'](B895));
            }
        };
        Mexport('as-hex-string', as_hex_string);
    }
    Mannotate_function(as_hex_string, 'as-hex-string', false);
}
{
    var description = Mmake_generic('description');
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B897(number__898) {
            return('' + number__898);
        }, false, LnumberG, description);
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B904(string__905) {
            var B906 = string__905;
            {
                var B907 = '"';
                {
                    var B908 = '\\"';
                    {
                        var B909 = 'g';
                        {
                            var escaped__910 = B906['replace'](B907, B908, B909);
                            return('"' + escaped__910 + '"');
                        }
                    }
                }
            }
        }, false, LstringG, description);
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B912(array__913) {
            return('(' + join(map(description, array__913), ' ') + ')');
        }, false, LarrayG, description);
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B915(value__916) {
            if (($T)(value__916))
                return('#t');
            else
                return('#f');
        }, false, LbooleanG, description);
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B919(symbol__920) {
            var B921 = get(symbol__920, 'module');
            {
                var B923 = false;
                if (($T)(B921)) {
                    var module__922 = B921;
                    B923 = concatenate(module__922, '::');
                } else
                    B923 = '';
                {
                    var B924 = symbol_name(symbol__920);
                    return(B923 + B924);
                }
            }
        }, false, LsymbolG, description);
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B926(keyword__927) {
            return(symbol_name(keyword__927) + ':');
        }, false, LkeywordG, description);
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B929(symbol__930) {
            return('#' + symbol_name(symbol__930));
        }, false, Lhash_symbolG, description);
    Mexport('description', description);
}
{
    var description = Mmake_method('description', function B932(function__933) {
            if (($T)(get(function__933, '%class?')))
                return('#{class}');
            else
                return('#{function}');
        }, false, LfunctionG, description);
    Mexport('description', description);
}
{
    var min = (Math.min);
    Mexport('min', min);
}
{
    var max = (Math.max);
    Mexport('max', max);
}
{
    var abs = (Math.abs);
    Mexport('abs', abs);
}
{
    var round = (Math.round);
    Mexport('round', round);
}
{
    var floor = (Math.floor);
    Mexport('floor', floor);
}
{
    var ceil = (Math.ceil);
    Mexport('ceil', ceil);
}
{
    var sin = (Math.sin);
    Mexport('sin', sin);
}
{
    var cos = (Math.cos);
    Mexport('cos', cos);
}
{
    var atan2 = (Math.atan2);
    Mexport('atan2', atan2);
}
{
    var expt = (Math.pow);
    Mexport('expt', expt);
}
{
    var sqrt = (Math.sqrt);
    Mexport('sqrt', sqrt);
}
{
    {
        var mod = function B935(number1__936, number2__937) {
            return(number1__936 % number2__937);
        };
        Mexport('mod', mod);
    }
    Mannotate_function(mod, 'mod', false);
}
{
    var Bpi = (Math.PI);
    Mexport('$pi', Bpi);
}
var Bradiant = Bpi / 180;
{
    {
        var as_radiant = function B939(number__940) {
            return(T(number__940, Bradiant));
        };
        Mexport('as-radiant', as_radiant);
    }
    Mannotate_function(as_radiant, 'as-radiant', false);
}
{
    {
        var signal = function B942(error__943) {
            throw(error__943);
            return(false);
        };
        Mexport('signal', signal);
    }
    Mannotate_function(signal, 'signal', false);
}
{
    {
        var extendN = function B951(object1__952, object2__953) {
            var B954 = object_properties(object2__953);
            {
                var B955 = false;
                {
                    var B956 = false;
                    {
                        var B957 = [B954];
                        {
                            while (true) {
                                var B958 = B955;
                                {
                                    var B962 = false;
                                    if (($T)(B958))
                                        B962 = B958;
                                    else
                                        B962 = anyQ(emptyQ, B957);
                                    {
                                        var B963 = not(B962);
                                        if (($T)(B963)) {
                                            var key__959 = first(B954);
                                            {
                                                (function B960(key__961) {
                                                    return(get_setter(object1__952, key__961, get(object2__953, key__961)));
                                                }(key__959));
                                                {
                                                    B954 = rest(B954);
                                                    B957 = [B954];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                            {
                                B956;
                                return(object1__952);
                            }
                        }
                    }
                }
            }
        };
        Mexport('extend!', extendN);
    }
    Mannotate_function(extendN, 'extend!', false);
}
{
    {
        var as_property_list = function B973(object__974) {
            var B975 = $SL.call(arguments, 1);
            {
                var B976 = Mkeys(B975, { 'keywords?': false });
                {
                    var keywordsQ__977 = B976['keywords?'];
                    {
                        var result__978 = [];
                        {
                            var B979 = object_properties(object__974);
                            {
                                var B980 = false;
                                {
                                    var B981 = false;
                                    {
                                        var B982 = [B979];
                                        {
                                            while (true) {
                                                var B983 = B980;
                                                {
                                                    var B988 = false;
                                                    if (($T)(B983))
                                                        B988 = B983;
                                                    else
                                                        B988 = anyQ(emptyQ, B982);
                                                    {
                                                        var B989 = not(B988);
                                                        if (($T)(B989)) {
                                                            var key__984 = first(B979);
                                                            {
                                                                (function B985(key__986) {
                                                                    var B987 = false;
                                                                    if (($T)(keywordsQ__977))
                                                                        B987 = keyword(as_string(key__986));
                                                                    else
                                                                        B987 = key__986;
                                                                    {
                                                                        push_last(result__978, B987);
                                                                        return(push_last(result__978, get(object__974, key__986)));
                                                                    }
                                                                }(key__984));
                                                                {
                                                                    B979 = rest(B979);
                                                                    B982 = [B979];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                            {
                                                B981;
                                                return(result__978);
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
        Mexport('as-property-list', as_property_list);
    }
    Mannotate_function(as_property_list, 'as-property-list', false);
}
{
    {
        var as_association_list = function B999(object__1000) {
            var B1001 = $SL.call(arguments, 1);
            {
                var B1002 = Mkeys(B1001, { 'keywords?': false });
                {
                    var keywordsQ__1003 = B1002['keywords?'];
                    {
                        var result__1004 = [];
                        {
                            var B1005 = object_properties(object__1000);
                            {
                                var B1006 = false;
                                {
                                    var B1007 = false;
                                    {
                                        var B1008 = [B1005];
                                        {
                                            while (true) {
                                                var B1009 = B1006;
                                                {
                                                    var B1016 = false;
                                                    if (($T)(B1009))
                                                        B1016 = B1009;
                                                    else
                                                        B1016 = anyQ(emptyQ, B1008);
                                                    {
                                                        var B1017 = not(B1016);
                                                        if (($T)(B1017)) {
                                                            var key__1010 = first(B1005);
                                                            {
                                                                (function B1011(key__1012) {
                                                                    var B1013 = false;
                                                                    if (($T)(keywordsQ__1003))
                                                                        B1013 = keyword(as_string(key__1012));
                                                                    else
                                                                        B1013 = key__1012;
                                                                    {
                                                                        var B1014 = get(object__1000, key__1012);
                                                                        {
                                                                            var B1015 = [
                                                                                    B1013,
                                                                                    B1014
                                                                                ];
                                                                            return(push_last(result__1004, B1015));
                                                                        }
                                                                    }
                                                                }(key__1010));
                                                                {
                                                                    B1005 = rest(B1005);
                                                                    B1008 = [B1005];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                            {
                                                B1007;
                                                return(result__1004);
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
        Mexport('as-association-list', as_association_list);
    }
    Mannotate_function(as_association_list, 'as-association-list', false);
}
{
    {
        var starts_withQ = function B1022(string__1023, prefix__1024) {
            var B1025 = string__1023;
            {
                var B1026 = prefix__1024;
                {
                    var B1027 = 0;
                    {
                        var B1028 = B1025['indexOf'](B1026, B1027);
                        return(binaryEE(B1028, 0));
                    }
                }
            }
        };
        Mexport('starts-with?', starts_withQ);
    }
    Mannotate_function(starts_withQ, 'starts-with?', false);
}
{
    {
        var ends_withQ = function B1033(string__1034, suffix__1035) {
            var start_index__1036 = string__1034['length'] - suffix__1035['length'];
            {
                var B1037 = string__1034;
                {
                    var B1038 = suffix__1035;
                    {
                        var B1039 = start_index__1036;
                        {
                            var result_index__1040 = B1037['indexOf'](B1038, B1039);
                            return(MbinaryEE(result_index__1040, start_index__1036));
                        }
                    }
                }
            }
        };
        Mexport('ends-with?', ends_withQ);
    }
    Mannotate_function(ends_withQ, 'ends-with?', false);
}
{
    {
        var evenQ = function B1042(number__1043) {
            return(binaryEE(number__1043 % 2, 0));
        };
        Mexport('even?', evenQ);
    }
    Mannotate_function(evenQ, 'even?', false);
}
{
    {
        var oddQ = function B1045(number__1046) {
            return(binaryEE(number__1046 % 2, 1));
        };
        Mexport('odd?', oddQ);
    }
    Mannotate_function(oddQ, 'odd?', false);
}
{
    {
        var group_by = function B1049(predicate__1050, items__1051) {
            return(reduce(function B1052(result__1053, item__1054) {
                var key__1055 = predicate__1050(item__1054);
                {
                    if (($T)(hasQ(result__1053, key__1055)))
                        push_last(get(result__1053, key__1055), item__1054);
                    else
                        get_setter(result__1053, key__1055, [item__1054]);
                    return(result__1053);
                }
            }, make_object(), items__1051));
        };
        Mexport('group-by', group_by);
    }
    Mannotate_function(group_by, 'group-by', false);
}
{
    var wrap_object = function B1057(object__1058) {
        var rest__1059 = $SL.call(arguments, 1);
        {
            var result__1060 = Object.create(object__1058);
            {
                extendN(result__1060, as_object(rest__1059));
                return(result__1060);
            }
        }
    };
    Mannotate_function(wrap_object, 'wrap-object', false);
}
{
    var unwrap_object = function B1062(object__1063) {
        return(object__1063['__proto__']);
    };
    Mannotate_function(unwrap_object, 'unwrap-object', false);
}
{
    {
        var update_with = function B1067(fn__1068, obj__1069) {
            var objs__1070 = $SL.call(arguments, 2);
            return(Rdo(function B1071(obj2__1072) {
                return(Rdo(function B1073(property__1074) {
                    var value__1075 = get(obj2__1072, property__1074);
                    {
                        var B1076 = false;
                        if (($T)(hasQ(obj__1069, property__1074)))
                            B1076 = fn__1068(get(obj__1069, property__1074), value__1075);
                        else
                            B1076 = value__1075;
                        return(get_setter(obj__1069, property__1074, B1076));
                    }
                }, object_properties(obj2__1072)));
            }, objs__1070));
        };
        Mexport('update-with', update_with);
    }
    Mannotate_function(update_with, 'update-with', false);
}
{
    {
        var as_set = function B1078(values__1079) {
            var set__1080 = [];
            return(set_unionN(set__1080, values__1079));
        };
        Mexport('as-set', as_set);
    }
    Mannotate_function(as_set, 'as-set', false);
}
{
    {
        var set_addN = function B1082(set__1083, object__1084) {
            if (($T)(not(memberQ(object__1084, set__1083))))
                return(push_last(set__1083, object__1084));
            else
                return(false);
        };
        Mexport('set-add!', set_addN);
    }
    Mannotate_function(set_addN, 'set-add!', false);
}
{
    var set_removeN = removeN;
    Mexport('set-remove!', set_removeN);
}
{
    {
        var set_unionN = function B1086(set1__1087, set2__1088) {
            Rdo(curry(set_addN, set1__1087), set2__1088);
            return(set1__1087);
        };
        Mexport('set-union!', set_unionN);
    }
    Mannotate_function(set_unionN, 'set-union!', false);
}
{
    {
        var set_subtractN = function B1090(set1__1091, set2__1092) {
            Rdo(curry(set_removeN, set1__1091), set2__1092);
            return(set1__1091);
        };
        Mexport('set-subtract!', set_subtractN);
    }
    Mannotate_function(set_subtractN, 'set-subtract!', false);
}
{
    {
        var chain_object = function B1094(object1__1095, object2__1096) {
            object2__1096['__proto__'] = object1__1095['__proto__'];
            {
                object1__1095['__proto__'] = object2__1096;
                return(object1__1095);
            }
        };
        Mexport('chain-object', chain_object);
    }
    Mannotate_function(chain_object, 'chain-object', false);
}
{
    {
        var unchain_object = function B1098(object__1099) {
            var B1100 = false;
            if (($T)(object__1099['__proto__']))
                B1100 = object__1099['__proto__']['__proto__'];
            else
                B1100 = false;
            {
                object__1099['__proto__'] = B1100;
                return(object__1099);
            }
        };
        Mexport('unchain-object', unchain_object);
    }
    Mannotate_function(unchain_object, 'unchain-object', false);
}
{
    {
        var as_hex_string = function B1104(number__1105) {
            var B1106 = number__1105;
            {
                var B1107 = 16;
                return(B1106['toString'](B1107));
            }
        };
        Mexport('as-hex-string', as_hex_string);
    }
    Mannotate_function(as_hex_string, 'as-hex-string', false);
}
{
    {
        var make_plain_object = function B1109() {
            return((Object.create(null)));
        };
        Mexport('make-plain-object', make_plain_object);
    }
    Mannotate_function(make_plain_object, 'make-plain-object', false);
}
{
    {
        var _ = function B1111(minuend__1112) {
            var subtrahends__1113 = $SL.call(arguments, 1);
            if (($T)(emptyQ(subtrahends__1113)))
                return(-(minuend__1112));
            else
                return(reduce(binary_, minuend__1112, subtrahends__1113));
        };
        Mexport('-', _);
    }
    Mannotate_function(_, '-', false);
}
{
    {
        var P = function B1115() {
            var numbers__1116 = $SL.call(arguments, 0);
            if (($T)(emptyQ(numbers__1116)))
                return(0);
            else
                return(reduce1(binaryP, numbers__1116));
        };
        Mexport('+', P);
    }
    Mannotate_function(P, '+', false);
}
{
    {
        var T = function B1118() {
            var numbers__1119 = $SL.call(arguments, 0);
            if (($T)(emptyQ(numbers__1119)))
                return(1);
            else
                return(reduce1(binaryT, numbers__1119));
        };
        Mexport('*', T);
    }
    Mannotate_function(T, '*', false);
}
{
    {
        var S = function B1121(numerator__1122) {
            var denominators__1123 = $SL.call(arguments, 1);
            if (($T)(emptyQ(denominators__1123)))
                return(Mdivide(1, numerator__1122));
            else
                return(reduce(binaryS, numerator__1122, denominators__1123));
        };
        Mexport('/', S);
    }
    Mannotate_function(S, '/', false);
}
{
    {
        var disjoin = function B1127(predicate1__1128) {
            var predicates__1129 = $SL.call(arguments, 1);
            return(function B1130() {
                var arguments__1131 = $SL.call(arguments, 0);
                return(anyQ(function B1132(predicate__1133) {
                    return(apply(predicate__1133, arguments__1131));
                }, cons(predicate1__1128, predicates__1129)));
            });
        };
        Mexport('disjoin', disjoin);
    }
    Mannotate_function(disjoin, 'disjoin', false);
}
{
    {
        var conjoin = function B1137(predicate1__1138) {
            var predicates__1139 = $SL.call(arguments, 1);
            return(function B1140() {
                var arguments__1141 = $SL.call(arguments, 0);
                {
                    var value__1142 = false;
                    if (($T)(everyQ(function B1143(predicate__1144) {
                            return(value__1142 = apply(predicate__1144, arguments__1141));
                        }, cons(predicate1__1138, predicates__1139))))
                        return(value__1142);
                    else
                        return(false);
                }
            });
        };
        Mexport('conjoin', conjoin);
    }
    Mannotate_function(conjoin, 'conjoin', false);
}
{
    {
        var ignore = function B1146() {
            return(false);
        };
        Mexport('ignore', ignore);
    }
    Mannotate_function(ignore, 'ignore', false);
}
{
    var set_timeout = (setTimeout);
    Mexport('set-timeout', set_timeout);
}
{
    var clear_timeout = (clearTimeout);
    Mexport('clear-timeout', clear_timeout);
}
{
    var set_interval = (setInterval);
    Mexport('set-interval', set_interval);
}
{
    var clear_interval = (clearInterval);
    Mexport('clear-interval', clear_interval);
}
{
    var B1150 = $K('end');
    {
        {
            var partition = function B1151(count__1152, elements__1153) {
                var B1154 = $SL.call(arguments, 2);
                {
                    var B1155 = Mkeys(B1154, { 'step': count__1152 });
                    {
                        var step__1156 = B1155['step'];
                        {
                            var result__1157 = [];
                            {
                                var total__1158 = size(elements__1153);
                                {
                                    var last_index__1159 = 0;
                                    {
                                        while (($T)(L(last_index__1159, total__1158))) {
                                            var new_index__1160 = P(last_index__1159, count__1152);
                                            {
                                                push_last(result__1157, copy_sequence(elements__1153, B492, last_index__1159, B1150, new_index__1160));
                                                last_index__1159 = new_index__1160;
                                            }
                                        }
                                        return(result__1157);
                                    }
                                }
                            }
                        }
                    }
                }
            };
            Mexport('partition', partition);
        }
        Mannotate_function(partition, 'partition', false);
    }
}
{
    {
        var repeat_string = function B1162(string__1163, count__1164) {
            var result__1165 = '';
            {
                while (($T)(G(count__1164, 0))) {
                    if (($T)(oddQ(count__1164)))
                        result__1165 = Mconcat(result__1165, string__1163);
                    {
                        count__1164 >>= 1;
                        string__1163 = Mconcat(string__1163, string__1163);
                    }
                }
                return(result__1165);
            }
        };
        Mexport('repeat-string', repeat_string);
    }
    Mannotate_function(repeat_string, 'repeat-string', false);
}
{
    {
        var substring = function B1177(string__1178, start__1179) {
            var B1180 = $SL.call(arguments, 2);
            {
                var B1181 = Mkeys(B1180, {
                        'end': false,
                        'length': false
                    });
                {
                    var end__1182 = B1181['end'];
                    {
                        var length__1183 = B1181['length'];
                        {
                            var B1192 = false;
                            if (($T)(end__1182))
                                B1192 = length__1183;
                            else
                                B1192 = false;
                            if (($T)(B1192))
                                return(substring(string__1178, start__1179, B1150, min(end__1182, P(start__1179, length__1183))));
                            else if (($T)(end__1182)) {
                                var B1184 = string__1178;
                                {
                                    var B1185 = start__1179;
                                    {
                                        var B1186 = end__1182;
                                        return(B1184['substring'](B1185, B1186));
                                    }
                                }
                            } else if (($T)(length__1183)) {
                                var B1187 = string__1178;
                                {
                                    var B1188 = start__1179;
                                    {
                                        var B1189 = length__1183;
                                        return(B1187['substr'](B1188, B1189));
                                    }
                                }
                            } else {
                                var B1190 = string__1178;
                                {
                                    var B1191 = start__1179;
                                    return(B1190['substring'](B1191));
                                }
                            }
                        }
                    }
                }
            }
        };
        Mexport('substring', substring);
    }
    Mannotate_function(substring, 'substring', false);
}
{
    {
        var expressionQ = function B1194(form__1195) {
            if (($T)(instanceQ(form__1195, LarrayG)))
                return(instanceQ(first(form__1195), LsymbolG));
            else
                return(false);
        };
        Mexport('expression?', expressionQ);
    }
    Mannotate_function(expressionQ, 'expression?', false);
}
