false;
{
    {
        var LobjectG__1 = (Object);
    }
    (exports)['<object>'] = LobjectG__1;
}
{
    {
        var LstringG__2 = (String);
    }
    (exports)['<string>'] = LstringG__2;
}
{
    {
        var LnumberG__3 = (Number);
    }
    (exports)['<number>'] = LnumberG__3;
}
{
    {
        var LarrayG__4 = (Array);
    }
    (exports)['<array>'] = LarrayG__4;
}
{
    {
        var LbooleanG__5 = (Boolean);
    }
    (exports)['<boolean>'] = LbooleanG__5;
}
{
    {
        var LfunctionG__6 = (Function);
    }
    (exports)['<function>'] = LfunctionG__6;
}
{
    {
        var LerrorG__7 = (Error);
    }
    (exports)['<error>'] = LerrorG__7;
}
LerrorG__7['%properties'] = { 'message': false };
{
    {
        var Mannotate_function__13 = function B9(function__10, name__11, setterQ__12) {
            function__10['%name'] = name__11;
            function__10['%setter?'] = setterQ__12;
            return(function__10);
        };
    }
    (exports)['%annotate-function'] = Mannotate_function__13;
}
{
    {
        var Mmake_function__19 = function B15(name__16, function__17, setterQ__18) {
            function__17['%name'] = name__16;
            function__17['%setter?'] = setterQ__18;
            return(function__17);
        };
    }
    (exports)['%make-function'] = Mmake_function__19;
}
{
    {
        var trueQ__23 = function B21(value__22) {
            return(value__22 != (null) && value__22 !== false);
        };
    }
    (exports)['true?'] = trueQ__23;
    Mannotate_function__13(trueQ__23, 'trueQ', false);
}
$T = trueQ__23;
{
    {
        var not__27 = function B25(value__26) {
            return(!(trueQ__23(value__26)));
        };
    }
    (exports)['not'] = not__27;
    Mannotate_function__13(not__27, 'not', false);
}
{
    {
        var size__31 = function B29(object__30) {
            return((object__30 || false)['length'] || 0);
        };
    }
    (exports)['size'] = size__31;
    Mannotate_function__13(size__31, 'size', false);
}
$SL = [].slice;
{
    {
        var inc__35 = function B33(number__34) {
            return(number__34 + 1);
        };
    }
    (exports)['inc'] = inc__35;
    Mannotate_function__13(inc__35, 'inc', false);
}
{
    {
        var dec__39 = function B37(number__38) {
            return(number__38 - 1);
        };
    }
    (exports)['dec'] = dec__39;
    Mannotate_function__13(dec__39, 'dec', false);
}
{
    {
        var binaryEE__44 = function B41(object1__42, object2__43) {
            return(object1__42 === object2__43);
        };
    }
    (exports)['binary=='] = binaryEE__44;
    Mannotate_function__13(binaryEE__44, 'binaryEE', false);
}
{
    {
        var Minherit__49 = function B46(class__47, superclass__48) {
            class__47['%superclass'] = superclass__48;
            class__47['prototype']['__proto__'] = superclass__48['prototype'];
            class__47['%properties']['__proto__'] = superclass__48['%properties'];
            return(class__47);
        };
    }
    (exports)['%inherit'] = Minherit__49;
    Mannotate_function__13(Minherit__49, 'Minherit', false);
}
{
    {
        var Mmake_class__57 = function B52(superclass__53, properties__54, constructor__55) {
            if (($T)(not__27(constructor__55)))
                constructor__55 = function B56() {
                    return(false);
                };
            constructor__55['%properties'] = properties__54;
            if (($T)(superclass__53))
                Minherit__49(constructor__55, superclass__53);
            return(constructor__55);
        };
    }
    (exports)['%make-class'] = Mmake_class__57;
    Mannotate_function__13(Mmake_class__57, 'Mmake_class', false);
}
{
    {
        var Mkeywords__58 = {};
    }
    (exports)['%keywords'] = Mkeywords__58;
}
{
    {
        var LkeywordG__60 = Mmake_class__57(LobjectG__1, { 'name': false }, function LkeywordG__59() {
                {
                    var B61 = (this);
                }
                return(B61['name'] = (undefined));
            });
    }
    (exports)['<keyword>'] = LkeywordG__60;
}
{
    {
        var keyword__71 = function B65(name__66) {
            {
                var B67 = name__66;
                var nameT__68 = B67['toLowerCase']();
                var B69 = Mkeywords__58[nameT__68];
            }
            if (($T)(B69))
                return(B69);
            else {
                {
                    var keyword__70 = new(LkeywordG__60);
                }
                keyword__70['name'] = name__66;
                Mkeywords__58[name__66] = keyword__70;
                return(keyword__70);
            }
        };
    }
    (exports)['keyword'] = keyword__71;
    Mannotate_function__13(keyword__71, 'keyword', false);
}
$K = keyword__71;
{
    {
        var Mconcat__80 = function B75(array1__76, array2__77) {
            {
                var B78 = array1__76;
                var B79 = array2__77;
            }
            return(B78['concat'](B79));
        };
    }
    (exports)['%concat'] = Mconcat__80;
    Mannotate_function__13(Mconcat__80, 'Mconcat', false);
}
{
    {
        var cons__85 = function B82(value__83, rest__84) {
            return(Mconcat__80([value__83], rest__84));
        };
    }
    (exports)['cons'] = cons__85;
    Mannotate_function__13(cons__85, 'cons', false);
}
{
    {
        var as_string__86 = (String);
    }
    (exports)['as-string'] = as_string__86;
}
{
    {
        var as_number__87 = (Number);
    }
    (exports)['as-number'] = as_number__87;
}
{
    {
        var as_array__92 = function B89(arguments__90, skip__91) {
            return($SL.call(arguments__90, skip__91 || 0));
        };
    }
    (exports)['as-array'] = as_array__92;
    Mannotate_function__13(as_array__92, 'as_array', false);
}
{
    {
        var as_json__93 = (JSON.stringify);
    }
    (exports)['as-json'] = as_json__93;
}
{
    {
        var parse_json__94 = (JSON.parse);
    }
    (exports)['parse-json'] = parse_json__94;
}
{
    {
        var parse_number__95 = (parseFloat);
    }
    (exports)['parse-number'] = parse_number__95;
}
{
    {
        var char_code__103 = function B99(char__100) {
            {
                var B101 = char__100;
                var B102 = 0;
            }
            return(B101['charCodeAt'](B102));
        };
    }
    (exports)['char-code'] = char_code__103;
    Mannotate_function__13(char_code__103, 'char_code', false);
}
{
    {
        var code_char__104 = (String.fromCharCode);
    }
    (exports)['code-char'] = code_char__104;
}
{
    {
        var emptyQ__108 = function B106(sequence__107) {
            return(binaryEE__44(size__31(sequence__107), 0));
        };
    }
    (exports)['empty?'] = emptyQ__108;
    Mannotate_function__13(emptyQ__108, 'emptyQ', false);
}
{
    {
        var rest__116 = function B112(sequence__113) {
            {
                var B114 = sequence__113;
                var B115 = 1;
            }
            return(B114['slice'](B115));
        };
    }
    (exports)['rest'] = rest__116;
    Mannotate_function__13(rest__116, 'rest', false);
}
{
    {
        var last__120 = function B118(array__119) {
            return(array__119[dec__39(size__31(array__119), 1)]);
        };
    }
    (exports)['last'] = last__120;
    Mannotate_function__13(last__120, 'last', false);
}
{
    {
        var last_setter__125 = function B122(array__123, value__124) {
            {
                var B126 = dec__39(size__31(array__123), 1);
            }
            return(array__123[B126] = value__124);
        };
    }
    (exports)['last-setter'] = last_setter__125;
    Mannotate_function__13(last_setter__125, 'last_setter', true);
}
{
    {
        var first__130 = function B128(sequence__129) {
            return(sequence__129[0]);
        };
    }
    (exports)['first'] = first__130;
    Mannotate_function__13(first__130, 'first', false);
}
{
    {
        var first_setter__135 = function B132(array__133, value__134) {
            return(array__133[0] = value__134);
        };
    }
    (exports)['first-setter'] = first_setter__135;
    Mannotate_function__13(first_setter__135, 'first_setter', true);
}
{
    {
        var second__139 = function B137(sequence__138) {
            return(sequence__138[1]);
        };
    }
    (exports)['second'] = second__139;
    Mannotate_function__13(second__139, 'second', false);
}
{
    {
        var second_setter__144 = function B141(array__142, value__143) {
            return(array__142[1] = value__143);
        };
    }
    (exports)['second-setter'] = second_setter__144;
    Mannotate_function__13(second_setter__144, 'second_setter', true);
}
{
    {
        var third__148 = function B146(sequence__147) {
            return(sequence__147[2]);
        };
    }
    (exports)['third'] = third__148;
    Mannotate_function__13(third__148, 'third', false);
}
{
    {
        var third_setter__153 = function B150(array__151, value__152) {
            return(array__151[2] = value__152);
        };
    }
    (exports)['third-setter'] = third_setter__153;
    Mannotate_function__13(third_setter__153, 'third_setter', true);
}
{
    {
        var make_array__157 = function B155() {
            {
                var elements__156 = $SL.call(arguments, 0);
            }
            return(elements__156);
        };
    }
    (exports)['make-array'] = make_array__157;
    Mannotate_function__13(make_array__157, 'make_array', false);
}
{
    {
        var push__162 = function B159(array__160, value__161) {
            array__160.unshift(value__161);
            return(array__160);
        };
    }
    (exports)['push'] = push__162;
    Mannotate_function__13(push__162, 'push', false);
}
{
    {
        var push_last__167 = function B164(array__165, value__166) {
            array__165.push(value__166);
            return(array__165);
        };
    }
    (exports)['push-last'] = push_last__167;
    Mannotate_function__13(push_last__167, 'push_last', false);
}
{
    {
        var pop__173 = function B170(array__171) {
            {
                var B172 = array__171;
            }
            return(B172['shift']());
        };
    }
    (exports)['pop'] = pop__173;
    Mannotate_function__13(pop__173, 'pop', false);
}
{
    {
        var pop_last__179 = function B176(array__177) {
            {
                var B178 = array__177;
            }
            return(B178['pop']());
        };
    }
    (exports)['pop-last'] = pop_last__179;
    Mannotate_function__13(pop_last__179, 'pop_last', false);
}
{
    {
        var but_last__190 = function B184(array__185, n__186) {
            {
                var B187 = array__185;
                var B188 = 0;
                var B189 = (n__186 || 1) * -1;
            }
            return(B187['slice'](B188, B189));
        };
    }
    (exports)['but-last'] = but_last__190;
    Mannotate_function__13(but_last__190, 'but_last', false);
}
{
    {
        var slice__202 = function B195(array__196, start__197, end__198) {
            {
                var B199 = array__196;
                var B200 = start__197;
                var B201 = end__198;
            }
            return(B199['slice'](B200, B201));
        };
    }
    (exports)['slice'] = slice__202;
    Mannotate_function__13(slice__202, 'slice', false);
}
{
    {
        var B207 = $K('from-end?');
        var reduce1__217 = function B208(function__209, values__210) {
            {
                var B211 = $SL.call(arguments, 2);
                var B213 = Mkeys__212(B211, { 'from-end?': false });
                var from_endQ__214 = B213['from-end?'];
            }
            if (($T)(emptyQ__108(values__210)))
                return(function__209());
            else {
                {
                    var B218 = false;
                }
                if (($T)(from_endQ__214))
                    B218 = [
                        last__120(values__210),
                        but_last__190(values__210)
                    ];
                else
                    B218 = [
                        first__130(values__210),
                        rest__116(values__210)
                    ];
                {
                    var B219 = [
                            B207,
                            from_endQ__214
                        ];
                    var B220 = Mconcat__80(B218, B219);
                }
                return(apply__215(reduce__216, function__209, B220));
            }
        };
    }
    (exports)['reduce1'] = reduce1__217;
    Mannotate_function__13(reduce1__217, 'reduce1', false);
}
{
    {
        var reduce__216 = function B228(function__229, initial_value__230, values__231) {
            {
                var B232 = $SL.call(arguments, 3);
                var B233 = Mkeys__212(B232, { 'from-end?': false });
                var from_endQ__234 = B233['from-end?'];
                var result__235 = initial_value__230;
            }
            if (($T)(from_endQ__234)) {
                {
                    var values__237 = reverse__236(values__231);
                    var B238 = size__31(values__237);
                    var i__239 = 0;
                }
                while (($T)(not__27(binaryGE__240(i__239, B238)))) {
                    (function B241(i__242) {
                        return(result__235 = function__229(values__237[i__242], result__235));
                    }(i__239));
                    i__239 = inc__35(i__239);
                }
                false;
            } else {
                {
                    var B243 = size__31(values__231);
                    var i__244 = 0;
                }
                while (($T)(not__27(binaryGE__240(i__244, B243)))) {
                    (function B245(i__246) {
                        return(result__235 = function__229(result__235, values__231[i__246]));
                    }(i__244));
                    i__244 = inc__35(i__244);
                }
                false;
            }
            return(result__235);
        };
    }
    (exports)['reduce'] = reduce__216;
    Mannotate_function__13(reduce__216, 'reduce', false);
}
{
    {
        var reverseN__252 = function B249(array__250) {
            {
                var B251 = array__250;
            }
            return(B251['reverse']());
        };
    }
    (exports)['reverse!'] = reverseN__252;
    Mannotate_function__13(reverseN__252, 'reverseN', false);
}
{
    {
        var reverse__236 = function B254(array__255) {
            return(reverseN__252(slice__202(array__255)));
        };
    }
    (exports)['reverse'] = reverse__236;
    Mannotate_function__13(reverse__236, 'reverse', false);
}
{
    {
        var sortN__275 = function B262(array__263) {
            {
                var B264 = $SL.call(arguments, 1);
                var B267 = Mkeys__212(B264, {
                        'test': L__265,
                        'key': identity__266
                    });
                var test__268 = B267['test'];
                var key__269 = B267['key'];
                var B270 = array__263;
                var B274 = function B271(a__272, b__273) {
                    if (($T)(test__268(key__269(a__272), key__269(b__273))))
                        return(-1);
                    else
                        return(1);
                };
            }
            return(B270['sort'](B274));
        };
    }
    (exports)['sort!'] = sortN__275;
    Mannotate_function__13(sortN__275, 'sortN', false);
}
{
    {
        var B281 = $K('test');
        var B282 = $K('key');
        var sort__289 = function B283(array__284) {
            {
                var B285 = $SL.call(arguments, 1);
                var B286 = Mkeys__212(B285, {
                        'test': L__265,
                        'key': identity__266
                    });
                var test__287 = B286['test'];
                var key__288 = B286['key'];
            }
            return(sortN__275(slice__202(array__284), B281, test__287, B282, key__288));
        };
    }
    (exports)['sort'] = sort__289;
    Mannotate_function__13(sort__289, 'sort', false);
}
{
    {
        var apply__215 = function B291(function__292) {
            {
                var actual__293 = $SL.call(arguments, 1, -1);
                var last__294 = arguments[size__31(arguments) - 1];
                var arguments__295 = false;
            }
            if (($T)(binaryEE__44(last__294, function__292)))
                arguments__295 = actual__293;
            else
                arguments__295 = Mconcat__80(actual__293, last__294);
            return(function__292['apply']((null), arguments__295));
        };
    }
    (exports)['apply'] = apply__215;
    Mannotate_function__13(apply__215, 'apply', false);
}
{
    {
        var curry__303 = function B298(function__299) {
            {
                var curried_args__300 = $SL.call(arguments, 1);
            }
            return(function B301() {
                {
                    var args__302 = $SL.call(arguments, 0);
                }
                return(apply__215(function__299, Mconcat__80(curried_args__300, args__302)));
            });
        };
    }
    (exports)['curry'] = curry__303;
    Mannotate_function__13(curry__303, 'curry', false);
}
{
    {
        var rcurry__311 = function B306(function__307) {
            {
                var curried_args__308 = $SL.call(arguments, 1);
            }
            return(function B309() {
                {
                    var args__310 = $SL.call(arguments, 0);
                }
                return(apply__215(function__307, Mconcat__80(args__310, curried_args__308)));
            });
        };
    }
    (exports)['rcurry'] = rcurry__311;
    Mannotate_function__13(rcurry__311, 'rcurry', false);
}
{
    {
        var always__317 = function B314(value__315) {
            return(function B316() {
                return(value__315);
            });
        };
    }
    (exports)['always'] = always__317;
    Mannotate_function__13(always__317, 'always', false);
}
{
    {
        var repeatedly__329 = function B321(function__322, count__323) {
            {
                var result__324 = [];
                var B325 = count__323;
                var i__326 = 0;
            }
            while (($T)(not__27(binaryGE__240(i__326, B325)))) {
                (function B327(i__328) {
                    return(push_last__167(result__324, function__322()));
                }(i__326));
                i__326 = inc__35(i__326);
            }
            return(result__324);
        };
    }
    (exports)['repeatedly'] = repeatedly__329;
    Mannotate_function__13(repeatedly__329, 'repeatedly', false);
}
{
    {
        var identity__266 = function B331(value__332) {
            return(value__332);
        };
    }
    (exports)['identity'] = identity__266;
    Mannotate_function__13(identity__266, 'identity', false);
}
{
    {
        var complement__339 = function B335(function__336) {
            return(function B337() {
                {
                    var arguments__338 = $SL.call(arguments, 0);
                }
                return(not__27(apply__215(function__336, arguments__338)));
            });
        };
    }
    (exports)['complement'] = complement__339;
    Mannotate_function__13(complement__339, 'complement', false);
}
{
    {
        var compose__350 = function B343() {
            {
                var functions__344 = $SL.call(arguments, 0);
            }
            if (($T)(emptyQ__108(functions__344)))
                return(identity__266);
            else
                return(function B345() {
                    {
                        var arguments__346 = $SL.call(arguments, 0);
                    }
                    return(reduce__216(function B347(function__348, value__349) {
                        return(function__348(value__349));
                    }, apply__215(last__120(functions__344), arguments__346), but_last__190(functions__344), B207, true));
                });
        };
    }
    (exports)['compose'] = compose__350;
    Mannotate_function__13(compose__350, 'compose', false);
}
{
    {
        var binaryP__355 = function B352(number1__353, number2__354) {
            return(number1__353 + number2__354);
        };
    }
    Mannotate_function__13(binaryP__355, 'binaryP', false);
}
{
    {
        var binary___360 = function B357(number1__358, number2__359) {
            return(number1__358 - number2__359);
        };
    }
    Mannotate_function__13(binary___360, 'binary_', false);
}
{
    {
        var binaryT__365 = function B362(number1__363, number2__364) {
            return(number1__363 * number2__364);
        };
    }
    Mannotate_function__13(binaryT__365, 'binaryT', false);
}
{
    {
        var binaryS__370 = function B367(number1__368, number2__369) {
            return(number1__368 / number2__369);
        };
    }
    Mannotate_function__13(binaryS__370, 'binaryS', false);
}
{
    {
        var type__374 = function B372(object__373) {
            if (($T)(object__373))
                return(object__373['constructor']);
            else
                return(LbooleanG__5);
        };
    }
    (exports)['type'] = type__374;
    Mannotate_function__13(type__374, 'type', false);
}
{
    {
        var instanceQ__379 = function B376(object__377, type__378) {
            if (($T)(object__377))
                return(object__377 instanceof type__378 || binaryEE__44(object__377['constructor'], type__378));
            else
                return(binaryEE__44(type__378, LbooleanG__5));
        };
    }
    (exports)['instance?'] = instanceQ__379;
    Mannotate_function__13(instanceQ__379, 'instanceQ', false);
}
$HP = Object.hasOwnProperty;
{
    {
        var hasQ__384 = function B381(object__382, property__383) {
            return(($HP.call(object__382,property__383)));
        };
    }
    (exports)['has?'] = hasQ__384;
    Mannotate_function__13(hasQ__384, 'hasQ', false);
}
{
    {
        var Mmake_method__393 = function B386(name__387, function__388, setterQ__389, type__390, existing__391) {
            function__388['%name'] = name__387;
            function__388['%setter?'] = setterQ__389;
            function__388['%type'] = type__390;
            type__390['prototype'][name__387] = function__388;
            {
                var B394 = false;
            }
            if (($T)(existing__391))
                B394 = existing__391['%generic?'];
            else
                B394 = false;
            if (($T)(B394))
                return(existing__391);
            else
                return(Mmake_generic__392(name__387));
        };
    }
    (exports)['%make-method'] = Mmake_method__393;
    Mannotate_function__13(Mmake_method__393, 'Mmake_method', false);
}
{
    {
        var Mmake_generic__392 = function B397(name__398) {
            {
                var dispatcher__402 = function B399(object__400) {
                    {
                        var function__401 = ((object__400== null ? false : object__400))[name__398];
                    }
                    return(function__401 && function__401['apply'](object__400, arguments));
                };
            }
            dispatcher__402['%generic?'] = true;
            dispatcher__402['%name'] = name__398;
            return(dispatcher__402);
        };
    }
    (exports)['%make-generic'] = Mmake_generic__392;
    Mannotate_function__13(Mmake_generic__392, 'Mmake_generic', false);
}
{
    {
        var Mnext_method__408 = function B404(function__405) {
            {
                var name__406 = function__405['%name'];
                var proto__407 = function__405['%type']['prototype']['__proto__'];
            }
            return(proto__407[name__406]);
        };
    }
    (exports)['%next-method'] = Mnext_method__408;
    Mannotate_function__13(Mnext_method__408, 'Mnext_method', false);
}
{
    {
        var concatenate__412 = function B410() {
            {
                var values__411 = $SL.call(arguments, 0);
            }
            if (($T)(emptyQ__108(values__411)))
                return([]);
            else
                return(reduce1__217(Mconcat__80, values__411));
        };
    }
    (exports)['concatenate'] = concatenate__412;
    Mannotate_function__13(concatenate__412, 'concatenate', false);
}
{
    {
        var compare__422 = function B415(function__416, object__417, objects__418) {
            {
                var failedQ__419 = false;
            }
            while (true) {
                {
                    var B420 = failedQ__419;
                    var B423 = false;
                }
                if (($T)(B420))
                    B423 = B420;
                else
                    B423 = emptyQ__108(objects__418);
                {
                    var B424 = not__27(B423);
                }
                if (($T)(B424)) {
                    {
                        var other__421 = first__130(objects__418);
                    }
                    failedQ__419 = not__27(function__416(object__417, other__421));
                    objects__418 = rest__116(objects__418);
                    object__417 = other__421;
                } else
                    break;
            }
            return(not__27(failedQ__419));
        };
    }
    (exports)['compare'] = compare__422;
    Mannotate_function__13(compare__422, 'compare', false);
}
{
    {
        var EE__429 = function B426(object__427) {
            {
                var objects__428 = $SL.call(arguments, 1);
            }
            return(compare__422(binaryEE__44, object__427, objects__428));
        };
    }
    (exports)['=='] = EE__429;
    Mannotate_function__13(EE__429, 'EE', false);
}
{
    {
        var binaryE__430 = Mmake_generic__392('binaryE');
    }
    (exports)['binary='] = binaryE__430;
}
{
    {
        var binaryL__431 = Mmake_generic__392('binaryL');
    }
    (exports)['binary<'] = binaryL__431;
}
{
    {
        var binaryE__430 = Mmake_method__393('binaryE', function B433(object1__434, object2__435) {
                if (($T)(binaryEE__44(type__374(object1__434), type__374(object2__435))))
                    return(binaryEE__44(object1__434, object2__435));
                else
                    return(false);
            }, false, LobjectG__1, binaryE__430);
    }
    (exports)['binary='] = binaryE__430;
}
{
    {
        var binaryE__430 = Mmake_method__393('binaryE', function B444(array1__445, array2__446) {
                if (($T)(binaryEE__44(size__31(array1__445), size__31(array2__446)))) {
                    {
                        var B447 = array1__445;
                        var B448 = array2__446;
                        var B449 = false;
                        var B450 = false;
                        var B451 = [
                                B447,
                                B448
                            ];
                    }
                    while (true) {
                        {
                            var B452 = B449;
                            var B459 = false;
                        }
                        if (($T)(B452))
                            B459 = B452;
                        else
                            B459 = anyQ__453(emptyQ__108, B451);
                        {
                            var B460 = not__27(B459);
                        }
                        if (($T)(B460)) {
                            {
                                var item1__454 = first__130(B447);
                                var item2__455 = first__130(B448);
                            }
                            if (($T)(not__27(binaryE__430(item1__454, item2__455)))) {
                                B450 = true;
                                B449 = true;
                            } else {
                                (function B456(item1__457, item2__458) {
                                    return(false);
                                }(item1__454, item2__455));
                                B447 = rest__116(B447);
                                B448 = rest__116(B448);
                                B451 = [
                                    B447,
                                    B448
                                ];
                            }
                        } else
                            break;
                    }
                    return(not__27(B450));
                } else
                    return(false);
            }, false, LarrayG__4, binaryE__430);
    }
    (exports)['binary='] = binaryE__430;
}
{
    var binaryE_dispatcher__461 = binaryE__430;
}
{
    {
        var binaryE__430 = function B464(object1__465, object2__466) {
            {
                var B467 = false;
            }
            if (($T)(not__27(object1__465)))
                B467 = not__27(object2__466);
            else
                B467 = false;
            if (($T)(B467))
                return(B467);
            else
                return(binaryE_dispatcher__461(object1__465, object2__466));
        };
    }
    (exports)['binary='] = binaryE__430;
    Mannotate_function__13(binaryE__430, 'binaryE', false);
}
{
    {
        var E__472 = function B469(object__470) {
            {
                var objects__471 = $SL.call(arguments, 1);
            }
            return(compare__422(binaryE__430, object__470, objects__471));
        };
    }
    (exports)['='] = E__472;
    Mannotate_function__13(E__472, 'E', false);
}
{
    {
        var binaryL__431 = Mmake_method__393('binaryL', function B474(object1__475, object2__476) {
                if (($T)(binaryEE__44(type__374(object1__475), type__374(object2__476))))
                    return(object1__475 < object2__476);
                else
                    return(false);
            }, false, LobjectG__1, binaryL__431);
    }
    (exports)['binary<'] = binaryL__431;
}
{
    {
        var L__265 = function B478(object__479) {
            {
                var objects__480 = $SL.call(arguments, 1);
            }
            return(compare__422(binaryL__431, object__479, objects__480));
        };
    }
    (exports)['<'] = L__265;
    Mannotate_function__13(L__265, 'L', false);
}
{
    {
        var binaryLE__487 = function B483(object1__484, object2__485) {
            if (($T)(object1__484))
                if (($T)(object2__485)) {
                    {
                        var B486 = binaryL__431(object1__484, object2__485);
                    }
                    if (($T)(B486))
                        return(B486);
                    else
                        return(binaryE__430(object1__484, object2__485));
                } else
                    return(false);
            else
                return(false);
        };
    }
    (exports)['binary<='] = binaryLE__487;
    Mannotate_function__13(binaryLE__487, 'binaryLE', false);
}
{
    {
        var LE__492 = function B489(object__490) {
            {
                var objects__491 = $SL.call(arguments, 1);
            }
            return(compare__422(binaryLE__487, object__490, objects__491));
        };
    }
    (exports)['<='] = LE__492;
    Mannotate_function__13(LE__492, 'LE', false);
}
{
    {
        var binaryG__497 = function B494(object1__495, object2__496) {
            if (($T)(object1__495))
                if (($T)(object2__496))
                    if (($T)(not__27(binaryL__431(object1__495, object2__496))))
                        return(not__27(binaryE__430(object1__495, object2__496)));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
    }
    (exports)['binary>'] = binaryG__497;
    Mannotate_function__13(binaryG__497, 'binaryG', false);
}
{
    {
        var G__502 = function B499(object__500) {
            {
                var objects__501 = $SL.call(arguments, 1);
            }
            return(compare__422(binaryG__497, object__500, objects__501));
        };
    }
    (exports)['>'] = G__502;
    Mannotate_function__13(G__502, 'G', false);
}
{
    {
        var binaryGE__240 = function B505(object1__506, object2__507) {
            {
                var B508 = not__27(binaryL__431(object1__506, object2__507));
            }
            if (($T)(B508))
                return(B508);
            else
                return(binaryE__430(object1__506, object2__507));
        };
    }
    (exports)['binary>='] = binaryGE__240;
    Mannotate_function__13(binaryGE__240, 'binaryGE', false);
}
{
    {
        var GE__513 = function B510(object__511) {
            {
                var objects__512 = $SL.call(arguments, 1);
            }
            return(compare__422(binaryGE__240, object__511, objects__512));
        };
    }
    (exports)['>='] = GE__513;
    Mannotate_function__13(GE__513, 'GE', false);
}
{
    {
        var as_object__521 = function B515(property_list__516) {
            {
                var list__517 = slice__202(property_list__516);
                var result__518 = {};
            }
            while (($T)(G__502(size__31(list__517), 0))) {
                {
                    var key__519 = pop__173(list__517);
                    var value__520 = pop__173(list__517);
                    var B522 = false;
                }
                if (($T)(instanceQ__379(key__519, LkeywordG__60)))
                    B522 = key__519['name'];
                else
                    B522 = as_string__86(key__519);
                key__519 = B522;
                result__518[key__519] = value__520;
            }
            return(result__518);
        };
    }
    (exports)['as-object'] = as_object__521;
    Mannotate_function__13(as_object__521, 'as_object', false);
}
{
    {
        var position__532 = function B526(array__527, element__528) {
            {
                var B529 = array__527;
                var B530 = element__528;
                var position__531 = B529['indexOf'](B530);
            }
            if (($T)(G__502(position__531, -1)))
                return(position__531);
            else
                return(false);
        };
    }
    (exports)['position'] = position__532;
    Mannotate_function__13(position__532, 'position', false);
}
{
    {
        var last_position__542 = function B536(array__537, element__538) {
            {
                var B539 = array__537;
                var B540 = element__538;
                var position__541 = B539['lastIndexOf'](B540);
            }
            if (($T)(G__502(position__541, -1)))
                return(position__541);
            else
                return(false);
        };
    }
    (exports)['last-position'] = last_position__542;
    Mannotate_function__13(last_position__542, 'last_position', false);
}
{
    {
        var as_uppercase__548 = function B545(string__546) {
            {
                var B547 = string__546;
            }
            return(B547['toUpperCase']());
        };
    }
    (exports)['as-uppercase'] = as_uppercase__548;
    Mannotate_function__13(as_uppercase__548, 'as_uppercase', false);
}
{
    {
        var as_lowercase__554 = function B551(string__552) {
            {
                var B553 = string__552;
            }
            return(B553['toLowerCase']());
        };
    }
    (exports)['as-lowercase'] = as_lowercase__554;
    Mannotate_function__13(as_lowercase__554, 'as_lowercase', false);
}
{
    {
        var join__563 = function B558(array__559, string__560) {
            {
                var B561 = array__559;
                var B562 = string__560;
            }
            return(B561['join'](B562));
        };
    }
    (exports)['join'] = join__563;
    Mannotate_function__13(join__563, 'join', false);
}
{
    {
        var trim__569 = function B566(string__567) {
            {
                var B568 = string__567;
            }
            return(B568['trim']());
        };
    }
    (exports)['trim'] = trim__569;
    Mannotate_function__13(trim__569, 'trim', false);
}
{
    {
        var replace__581 = function B574(string__575, pattern__576, replacement__577) {
            {
                var B578 = string__575;
                var B579 = pattern__576;
                var B580 = replacement__577;
            }
            return(B578['replace'](B579, B580));
        };
    }
    (exports)['replace'] = replace__581;
    Mannotate_function__13(replace__581, 'replace', false);
}
{
    {
        var make_object__585 = function B583() {
            {
                var key_values__584 = $SL.call(arguments, 0);
            }
            return(as_object__521(key_values__584));
        };
    }
    (exports)['make-object'] = make_object__585;
    Mannotate_function__13(make_object__585, 'make_object', false);
}
{
    {
        var LsymbolG__587 = Mmake_class__57(LobjectG__1, {
                'name': false,
                'module': false
            }, function LsymbolG__586() {
                {
                    var B588 = (this);
                }
                B588['name'] = (undefined);
                {
                    var B589 = (this);
                }
                return(B589['module'] = (undefined));
            });
    }
    (exports)['<symbol>'] = LsymbolG__587;
}
{
    var Msymbols__590 = {};
}
{
    {
        var symbol__596 = function B592(name__593, module__594) {
            {
                var B597 = as_lowercase__554(name__593);
                var B598 = false;
            }
            if (($T)(module__594))
                B598 = as_lowercase__554(module__594);
            else
                B598 = false;
            return(MMsymbol__595(B597, B598));
        };
    }
    (exports)['symbol'] = symbol__596;
    Mannotate_function__13(symbol__596, 'symbol', false);
}
{
    {
        var symbol_name__603 = function B600(symbol__601) {
            return(get__602(symbol__601, 'name'));
        };
    }
    (exports)['symbol-name'] = symbol_name__603;
    Mannotate_function__13(symbol_name__603, 'symbol_name', false);
}
{
    {
        var destructure_symbol__607 = function B605(symbol__606) {
            return([
                get__602(symbol__606, 'name'),
                get__602(symbol__606, 'module')
            ]);
        };
    }
    (exports)['destructure-symbol'] = destructure_symbol__607;
    Mannotate_function__13(destructure_symbol__607, 'destructure_symbol', false);
}
{
    {
        var B613 = $K('name');
        var B614 = $K('module');
        var MMsymbol__595 = function B615(name__616, module__617) {
            {
                var B618 = module__617;
                var moduleT__619 = false;
            }
            if (($T)(B618))
                moduleT__619 = B618;
            else
                moduleT__619 = '';
            {
                var B620 = get__602(Msymbols__590, moduleT__619, name__616);
            }
            if (($T)(B620))
                return(B620);
            else
                return(get_setter__621(Msymbols__590, moduleT__619, name__616, make__622(LsymbolG__587, B613, name__616, B614, module__617)));
        };
    }
    (exports)['%%symbol'] = MMsymbol__595;
    Mannotate_function__13(MMsymbol__595, 'MMsymbol', false);
}
$S = MMsymbol__595;
{
    var Tsymbol_countT__623 = 0;
}
{
    {
        var reset_symbol_counterN__626 = function B625() {
            return(Tsymbol_countT__623 = 0);
        };
    }
    (exports)['reset-symbol-counter!'] = reset_symbol_counterN__626;
    Mannotate_function__13(reset_symbol_counterN__626, 'reset_symbol_counterN', false);
}
{
    {
        var generate_symbol__634 = function B628(env__629, prefix__630) {
            {
                var B635 = false;
            }
            if (($T)(prefix__630))
                B635 = concatenate__412(prefix__630, '_');
            else
                B635 = '$';
            {
                var B636 = as_string__86(Tsymbol_countT__623 = P__631(Tsymbol_countT__623, 1));
                var name__632 = concatenate__412(B635, B636);
                var B637 = false;
            }
            if (($T)(env__629))
                B637 = get__602(env__629, 'module', 'name');
            else
                B637 = false;
            {
                var result__633 = symbol__596(name__632, B637);
            }
            get_setter__621(result__633, 'generated?', true);
            return(result__633);
        };
    }
    (exports)['generate-symbol'] = generate_symbol__634;
    Mannotate_function__13(generate_symbol__634, 'generate_symbol', false);
}
{
    {
        var Mkeys__212 = function B640(key_values__641, defaults__642) {
            {
                var i__643 = 0;
            }
            while (($T)(not__27(i__643 >= size__31(key_values__641)))) {
                (function B644(i__645) {
                    {
                        var key__646 = key_values__641[i__645];
                        var value__647 = key_values__641[inc__35(i__645, 1)];
                    }
                    if (($T)(instanceQ__379(key__646, LkeywordG__60))) {
                        {
                            var B648 = key__646['name'];
                        }
                        return(defaults__642[B648] = value__647);
                    } else
                        return(false);
                }(i__643));
                i__643 = inc__35(i__643, 2);
            }
            false;
            return(defaults__642);
        };
    }
    (exports)['%keys'] = Mkeys__212;
    Mannotate_function__13(Mkeys__212, 'Mkeys', false);
}
{
    {
        var find_key__670 = function B654(array__655, predicate__656) {
            {
                var B657 = $SL.call(arguments, 2);
                var B658 = Mkeys__212(B657, {
                        'skip': 0,
                        'failure': false,
                        'from-end?': false
                    });
                var skip__659 = B658['skip'];
                var failure__660 = B658['failure'];
                var from_endQ__661 = B658['from-end?'];
                var keys__663 = object_properties__662(array__655);
                var B671 = function B665(index__666) {
                    return(predicate__656(element__667(array__655, index__666)));
                };
                var B672 = false;
            }
            if (($T)(from_endQ__661))
                B672 = reverse__236(keys__663);
            else
                B672 = keys__663;
            {
                var satisfying_keys__668 = choose__664(B671, B672);
                var B669 = element__667(satisfying_keys__668, skip__659);
            }
            if (($T)(B669))
                return(B669);
            else
                return(failure__660);
        };
    }
    (exports)['find-key'] = find_key__670;
    Mannotate_function__13(find_key__670, 'find_key', false);
}
{
    {
        var parse_integer__681 = function B676(value__677) {
            {
                var B678 = $SL.call(arguments, 1);
                var B679 = Mkeys__212(B678, { 'radix': 10 });
                var radix__680 = B679['radix'];
            }
            return(parseInt(value__677, radix__680));
        };
    }
    (exports)['parse-integer'] = parse_integer__681;
    Mannotate_function__13(parse_integer__681, 'parse_integer', false);
}
{
    {
        var element__667 = function B686(array__687, index__688) {
            {
                var B689 = $SL.call(arguments, 2);
                var B690 = Mkeys__212(B689, { 'default': false });
                var default__691 = B690['default'];
                var B692 = array__687[index__688];
            }
            if (($T)(B692))
                return(B692);
            else
                return(default__691);
        };
    }
    (exports)['element'] = element__667;
    Mannotate_function__13(element__667, 'element', false);
}
{
    {
        var element_setter__698 = function B694(array__695, key__696, value__697) {
            return(array__695[key__696] = value__697);
        };
    }
    (exports)['element-setter'] = element_setter__698;
    Mannotate_function__13(element_setter__698, 'element_setter', true);
}
{
    {
        var replace_subsequence__709 = function B702(target_array__703, insert_array__704) {
            {
                var B705 = $SL.call(arguments, 2);
                var B706 = Mkeys__212(B705, {
                        'start': 0,
                        'end': size__31(target_array__703)
                    });
                var start__707 = B706['start'];
                var end__708 = B706['end'];
            }
            return(concatenate__412(slice__202(target_array__703, 0, start__707), insert_array__704, slice__202(target_array__703, end__708)));
        };
    }
    (exports)['replace-subsequence'] = replace_subsequence__709;
    Mannotate_function__13(replace_subsequence__709, 'replace_subsequence', false);
}
{
    {
        var replace_subsequenceN__722 = function B713(target_array__714, insert_array__715) {
            {
                var B716 = $SL.call(arguments, 2);
                var B717 = Mkeys__212(B716, {
                        'start': 0,
                        'end': size__31(target_array__714)
                    });
                var start__718 = B717['start'];
                var end__719 = B717['end'];
                var rest__721 = Mconcat__80([
                        start__718,
                        ___720(end__719, start__718)
                    ], insert_array__715);
            }
            []['splice']['apply'](target_array__714, rest__721);
            return(target_array__714);
        };
    }
    (exports)['replace-subsequence!'] = replace_subsequenceN__722;
    Mannotate_function__13(replace_subsequenceN__722, 'replace_subsequenceN', false);
}
{
    {
        var removeN__741 = function B730(array__731, value__732) {
            {
                var B733 = $SL.call(arguments, 2);
                var B734 = Mkeys__212(B733, { 'test': EE__429 });
                var test__735 = B734['test'];
                var B736 = find_key__670(array__731, curry__303(test__735, value__732));
            }
            if (($T)(B736)) {
                {
                    var key__737 = B736;
                    var B738 = array__731;
                    var B739 = key__737;
                    var B740 = 1;
                }
                B738['splice'](B739, B740);
            }
            return(array__731);
        };
    }
    (exports)['remove!'] = removeN__741;
    Mannotate_function__13(removeN__741, 'removeN', false);
}
{
    {
        var remove__751 = function B745(array__746, value__747) {
            {
                var B748 = $SL.call(arguments, 2);
                var B749 = Mkeys__212(B748, { 'test': EE__429 });
                var test__750 = B749['test'];
            }
            return(removeN__741(slice__202(array__746), value__747, B281, test__750));
        };
    }
    (exports)['remove'] = remove__751;
    Mannotate_function__13(remove__751, 'remove', false);
}
{
    {
        var interpose__760 = function B754(separator__755, array__756) {
            return(reduce1__217(function B757(a__758, b__759) {
                return(concatenate__412([
                    a__758,
                    separator__755
                ], b__759));
            }, array__756));
        };
    }
    (exports)['interpose'] = interpose__760;
    Mannotate_function__13(interpose__760, 'interpose', false);
}
{
    {
        var anyQ__453 = function B764(function__765, values__766) {
            {
                var value__767 = false;
                var n__768 = size__31(values__766);
                var i__769 = 0;
            }
            while (true) {
                {
                    var B770 = value__767;
                    var B773 = false;
                }
                if (($T)(B770))
                    B773 = B770;
                else
                    B773 = GE__513(i__769, n__768);
                {
                    var B774 = not__27(B773);
                }
                if (($T)(B774)) {
                    (function B771(i__772) {
                        return(value__767 = function__765(values__766[i__772]));
                    }(i__769));
                    i__769 = inc__35(i__769);
                } else
                    break;
            }
            return(value__767);
        };
    }
    (exports)['any?'] = anyQ__453;
    Mannotate_function__13(anyQ__453, 'anyQ', false);
}
{
    {
        var memberQ__787 = function B779(value__780, array__781) {
            {
                var B782 = $SL.call(arguments, 2);
                var B783 = Mkeys__212(B782, { 'test': binaryEE__44 });
                var test__784 = B783['test'];
            }
            return(anyQ__453(function B785(other_value__786) {
                return(test__784(value__780, other_value__786));
            }, array__781));
        };
    }
    (exports)['member?'] = memberQ__787;
    Mannotate_function__13(memberQ__787, 'memberQ', false);
}
{
    {
        var everyQ__792 = function B789(function__790, array__791) {
            return(not__27(anyQ__453(complement__339(function__790), array__791)));
        };
    }
    (exports)['every?'] = everyQ__792;
    Mannotate_function__13(everyQ__792, 'everyQ', false);
}
{
    {
        var map__812 = function B800(function__801) {
            {
                var arrays__802 = $SL.call(arguments, 1);
                var result__803 = [];
            }
            if (($T)(emptyQ__108(rest__116(arrays__802)))) {
                {
                    var B804 = first__130(arrays__802);
                    var B805 = false;
                    var B806 = false;
                    var B807 = [B804];
                }
                while (true) {
                    {
                        var B808 = B805;
                        var B813 = false;
                    }
                    if (($T)(B808))
                        B813 = B808;
                    else
                        B813 = anyQ__453(emptyQ__108, B807);
                    {
                        var B814 = not__27(B813);
                    }
                    if (($T)(B814)) {
                        {
                            var item__809 = first__130(B804);
                        }
                        (function B810(item__811) {
                            return(push_last__167(result__803, function__801(item__811)));
                        }(item__809));
                        B804 = rest__116(B804);
                        B807 = [B804];
                    } else
                        break;
                }
                B806;
            } else
                while (($T)(not__27(anyQ__453(emptyQ__108, arrays__802)))) {
                    push_last__167(result__803, apply__215(function__801, map__812(first__130, arrays__802)));
                    arrays__802 = map__812(rest__116, arrays__802);
                }
            return(result__803);
        };
    }
    (exports)['map'] = map__812;
    Mannotate_function__13(map__812, 'map', false);
}
{
    {
        var do__833 = function B822(function__823) {
            {
                var arrays__824 = $SL.call(arguments, 1);
            }
            if (($T)(emptyQ__108(rest__116(arrays__824)))) {
                {
                    var B825 = first__130(arrays__824);
                    var B826 = false;
                    var B827 = false;
                    var B828 = [B825];
                }
                while (true) {
                    {
                        var B829 = B826;
                        var B834 = false;
                    }
                    if (($T)(B829))
                        B834 = B829;
                    else
                        B834 = anyQ__453(emptyQ__108, B828);
                    {
                        var B835 = not__27(B834);
                    }
                    if (($T)(B835)) {
                        {
                            var item__830 = first__130(B825);
                        }
                        (function B831(item__832) {
                            return(function__823(item__832));
                        }(item__830));
                        B825 = rest__116(B825);
                        B828 = [B825];
                    } else
                        break;
                }
                B827;
            } else
                while (($T)(not__27(anyQ__453(emptyQ__108, arrays__824)))) {
                    apply__215(function__823, map__812(first__130, arrays__824));
                    arrays__824 = map__812(rest__116, arrays__824);
                }
            return(false);
        };
    }
    (exports)['do'] = do__833;
    Mannotate_function__13(do__833, 'Rdo', false);
}
{
    {
        var choose__664 = function B843(function__844, array__845) {
            {
                var result__846 = [];
                var B847 = array__845;
                var B848 = false;
                var B849 = false;
                var B850 = [B847];
            }
            while (true) {
                {
                    var B851 = B848;
                    var B855 = false;
                }
                if (($T)(B851))
                    B855 = B851;
                else
                    B855 = anyQ__453(emptyQ__108, B850);
                {
                    var B856 = not__27(B855);
                }
                if (($T)(B856)) {
                    {
                        var element__852 = first__130(B847);
                    }
                    (function B853(element__854) {
                        if (($T)(function__844(element__854)))
                            return(push_last__167(result__846, element__854));
                        else
                            return(false);
                    }(element__852));
                    B847 = rest__116(B847);
                    B850 = [B847];
                } else
                    break;
            }
            B849;
            return(result__846);
        };
    }
    (exports)['choose'] = choose__664;
    Mannotate_function__13(choose__664, 'choose', false);
}
{
    {
        var copy_sequence__869 = function B861(array__862) {
            {
                var B863 = $SL.call(arguments, 1);
                var B864 = Mkeys__212(B863, {
                        'start': 0,
                        'end': false
                    });
                var start__865 = B864['start'];
                var end__866 = B864['end'];
                var B867 = end__866;
                var end__868 = false;
            }
            if (($T)(B867))
                end__868 = B867;
            else
                end__868 = (undefined);
            return(slice__202(array__862, start__865, end__868));
        };
    }
    (exports)['copy-sequence'] = copy_sequence__869;
    Mannotate_function__13(copy_sequence__869, 'copy_sequence', false);
}
{
    {
        var make__622 = function B871(type__872) {
            {
                var arguments__873 = $SL.call(arguments, 1);
                var object__874 = new(type__872);
            }
            apply__215(initialize__875, object__874, arguments__873);
            return(object__874);
        };
    }
    (exports)['make'] = make__622;
    Mannotate_function__13(make__622, 'make', false);
}
{
    {
        var object_properties__662 = function B881(object__882) {
            {
                var B883 = $SL.call(arguments, 1);
                var B884 = Mkeys__212(B883, { 'inherited?': false });
                var inheritedQ__885 = B884['inherited?'];
                var result__886 = [];
            }
            if (($T)(instanceQ__379(object__882, LarrayG__4))) {
                {
                    var B887 = size__31(object__882);
                    var i__888 = 0;
                }
                while (($T)(not__27(binaryGE__240(i__888, B887)))) {
                    (function B889(i__890) {
                        return(push_last__167(result__886, i__890));
                    }(i__888));
                    i__888 = inc__35(i__888);
                }
                false;
            } else {
                {
                    var i__891 = false;
                }
                for (i__891 in object__882) (inheritedQ__885||$HP.call(object__882, i__891)) &&result__886.push(i__891);
            }
            return(result__886);
        };
    }
    (exports)['object-properties'] = object_properties__662;
    Mannotate_function__13(object_properties__662, 'object_properties', false);
}
{
    {
        var object_values__895 = function B893(object__894) {
            return(map__812(curry__303(get__602, object__894), object_properties__662(object__894)));
        };
    }
    (exports)['object-values'] = object_values__895;
    Mannotate_function__13(object_values__895, 'object_values', false);
}
{
    {
        var initialize__875 = Mmake_generic__392('initialize');
    }
    (exports)['initialize'] = initialize__875;
}
{
    {
        var B901 = $K('inherited?');
        var initialize__875 = Mmake_method__393('initialize', function B902(object__903) {
                {
                    var rest__904 = $SL.call(arguments, 1);
                    var arguments__905 = as_object__521(rest__904);
                    var B906 = type__374(object__903)['%properties'];
                }
                if (($T)(B906)) {
                    {
                        var properties__907 = B906;
                    }
                    do__833(function B908(property__909) {
                        {
                            var B913 = false;
                        }
                        if (($T)(not__27(hasQ__384(LobjectG__1['prototype'], property__909))))
                            B913 = typeof(object__903[property__909]) === 'undefined';
                        else
                            B913 = false;
                        if (($T)(B913)) {
                            {
                                var B910 = arguments__905[property__909];
                                var value__912 = false;
                            }
                            if (($T)(B910))
                                value__912 = B910;
                            else {
                                {
                                    var value__911 = properties__907[property__909];
                                }
                                if (($T)(value__911))
                                    value__912 = value__911();
                                else
                                    value__912 = false;
                            }
                            return(object__903[property__909] = value__912);
                        } else
                            return(false);
                    }, object_properties__662(properties__907, B901, true));
                }
                return(object__903);
            }, false, LobjectG__1, initialize__875);
    }
    (exports)['initialize'] = initialize__875;
}
{
    {
        var Lhash_symbolG__915 = Mmake_class__57(LobjectG__1, { 'name': false }, function Lhash_symbolG__914() {
                {
                    var B916 = (this);
                }
                return(B916['name'] = (undefined));
            });
    }
    (exports)['<hash-symbol>'] = Lhash_symbolG__915;
}
{
    {
        var key__917 = make__622(Lhash_symbolG__915, B613, 'key');
    }
    $KEY = key__917;
}
{
    {
        var rest__918 = make__622(Lhash_symbolG__915, B613, 'rest');
    }
    $REST = rest__918;
}
{
    {
        var get__602 = function B926(object__927) {
            {
                var properties__928 = $SL.call(arguments, 1);
                var result__929 = false;
                var B930 = properties__928;
                var B931 = false;
                var B932 = false;
                var B933 = [B930];
            }
            while (true) {
                {
                    var B934 = B931;
                    var B938 = false;
                }
                if (($T)(B934))
                    B938 = B934;
                else
                    B938 = anyQ__453(emptyQ__108, B933);
                {
                    var B939 = not__27(B938);
                }
                if (($T)(B939)) {
                    {
                        var property__935 = first__130(B930);
                    }
                    if (($T)(not__27(hasQ__384(object__927, property__935)))) {
                        B932 = result__929 = false;
                        B931 = true;
                    } else {
                        (function B936(property__937) {
                            result__929 = object__927[property__937];
                            return(object__927 = result__929);
                        }(property__935));
                        B930 = rest__116(B930);
                        B933 = [B930];
                    }
                } else
                    break;
            }
            B932;
            return(result__929);
        };
    }
    (exports)['get'] = get__602;
    Mannotate_function__13(get__602, 'get', false);
}
{
    {
        var get_setter__621 = function B941(object__942) {
            {
                var propertiesSvalue__943 = $SL.call(arguments, 1);
            }
            if (($T)(LE__492(size__31(propertiesSvalue__943), 2))) {
                {
                    var B946 = first__130(propertiesSvalue__943);
                }
                return(object__942[B946] = second__139(propertiesSvalue__943));
            } else {
                {
                    var property__944 = first__130(propertiesSvalue__943);
                    var object2__945 = false;
                }
                if (($T)(hasQ__384(object__942, property__944)))
                    object2__945 = object__942[property__944];
                else
                    object2__945 = object__942[property__944] = make_object__585();
                return(apply__215(B941, object2__945, rest__116(propertiesSvalue__943)));
            }
        };
    }
    (exports)['get-setter'] = get_setter__621;
    Mannotate_function__13(get_setter__621, 'get_setter', true);
}
{
    {
        var split__955 = function B950(string__951, separator__952) {
            {
                var B953 = string__951;
                var B954 = separator__952;
            }
            return(B953['split'](B954));
        };
    }
    (exports)['split'] = split__955;
    Mannotate_function__13(split__955, 'split', false);
}
{
    {
        var split_with__965 = function B958(function__959, array__960) {
            {
                var a__961 = [];
                var b__962 = [];
            }
            do__833(function B963(item__964) {
                {
                    var B966 = false;
                }
                if (($T)(function__959(item__964)))
                    B966 = a__961;
                else
                    B966 = b__962;
                return(push_last__167(B966, item__964));
            }, array__960);
            return([
                a__961,
                b__962
            ]);
        };
    }
    (exports)['split-with'] = split_with__965;
    Mannotate_function__13(split_with__965, 'split_with', false);
}
{
    {
        var as_hex_string__974 = function B970(number__971) {
            {
                var B972 = number__971;
                var B973 = 16;
            }
            return(B972['toString'](B973));
        };
    }
    (exports)['as-hex-string'] = as_hex_string__974;
    Mannotate_function__13(as_hex_string__974, 'as_hex_string', false);
}
{
    {
        var description__975 = Mmake_generic__392('description');
    }
    (exports)['description'] = description__975;
}
{
    {
        var description__975 = Mmake_method__393('description', function B977(number__978) {
                return('' + number__978);
            }, false, LnumberG__3, description__975);
    }
    (exports)['description'] = description__975;
}
{
    {
        var description__975 = Mmake_method__393('description', function B984(string__985) {
                {
                    var B986 = string__985;
                    var B987 = '"';
                    var B988 = '\\"';
                    var B989 = 'g';
                    var escaped__990 = B986['replace'](B987, B988, B989);
                }
                return('"' + escaped__990 + '"');
            }, false, LstringG__2, description__975);
    }
    (exports)['description'] = description__975;
}
{
    {
        var description__975 = Mmake_method__393('description', function B992(array__993) {
                return('(' + join__563(map__812(description__975, array__993), ' ') + ')');
            }, false, LarrayG__4, description__975);
    }
    (exports)['description'] = description__975;
}
{
    {
        var description__975 = Mmake_method__393('description', function B995(value__996) {
                if (($T)(value__996))
                    return('#t');
                else
                    return('#f');
            }, false, LbooleanG__5, description__975);
    }
    (exports)['description'] = description__975;
}
{
    {
        var description__975 = Mmake_method__393('description', function B999(symbol__1000) {
                {
                    var B1001 = get__602(symbol__1000, 'module');
                    var B1003 = false;
                }
                if (($T)(B1001)) {
                    {
                        var module__1002 = B1001;
                    }
                    B1003 = concatenate__412(module__1002, '::');
                } else
                    B1003 = '';
                {
                    var B1004 = symbol_name__603(symbol__1000);
                }
                return(B1003 + B1004);
            }, false, LsymbolG__587, description__975);
    }
    (exports)['description'] = description__975;
}
{
    {
        var description__975 = Mmake_method__393('description', function B1006(keyword__1007) {
                return(symbol_name__603(keyword__1007) + ':');
            }, false, LkeywordG__60, description__975);
    }
    (exports)['description'] = description__975;
}
{
    {
        var description__975 = Mmake_method__393('description', function B1009(symbol__1010) {
                return('#' + symbol_name__603(symbol__1010));
            }, false, Lhash_symbolG__915, description__975);
    }
    (exports)['description'] = description__975;
}
{
    {
        var min__1011 = (Math.min);
    }
    (exports)['min'] = min__1011;
}
{
    {
        var max__1012 = (Math.max);
    }
    (exports)['max'] = max__1012;
}
{
    {
        var abs__1013 = (Math.abs);
    }
    (exports)['abs'] = abs__1013;
}
{
    {
        var round__1014 = (Math.round);
    }
    (exports)['round'] = round__1014;
}
{
    {
        var floor__1015 = (Math.floor);
    }
    (exports)['floor'] = floor__1015;
}
{
    {
        var ceil__1016 = (Math.ceil);
    }
    (exports)['ceil'] = ceil__1016;
}
{
    {
        var sin__1017 = (Math.sin);
    }
    (exports)['sin'] = sin__1017;
}
{
    {
        var cos__1018 = (Math.cos);
    }
    (exports)['cos'] = cos__1018;
}
{
    {
        var atan2__1019 = (Math.atan2);
    }
    (exports)['atan2'] = atan2__1019;
}
{
    {
        var expt__1020 = (Math.pow);
    }
    (exports)['expt'] = expt__1020;
}
{
    {
        var sqrt__1021 = (Math.sqrt);
    }
    (exports)['sqrt'] = sqrt__1021;
}
{
    {
        var mod__1026 = function B1023(number1__1024, number2__1025) {
            return(number1__1024 % number2__1025);
        };
    }
    (exports)['mod'] = mod__1026;
    Mannotate_function__13(mod__1026, 'mod', false);
}
{
    {
        var Bpi__1027 = (Math.PI);
    }
    (exports)['$pi'] = Bpi__1027;
}
{
    var Bradiant__1028 = Bpi__1027 / 180;
}
{
    {
        var as_radiant__1033 = function B1030(number__1031) {
            return(T__1032(number__1031, Bradiant__1028));
        };
    }
    (exports)['as-radiant'] = as_radiant__1033;
    Mannotate_function__13(as_radiant__1033, 'as_radiant', false);
}
{
    {
        var signal__1037 = function B1035(error__1036) {
            throw(error__1036);
            return(false);
        };
    }
    (exports)['signal'] = signal__1037;
    Mannotate_function__13(signal__1037, 'signal', false);
}
{
    {
        var extendN__1056 = function B1045(object1__1046, object2__1047) {
            {
                var B1048 = object_properties__662(object2__1047);
                var B1049 = false;
                var B1050 = false;
                var B1051 = [B1048];
            }
            while (true) {
                {
                    var B1052 = B1049;
                    var B1057 = false;
                }
                if (($T)(B1052))
                    B1057 = B1052;
                else
                    B1057 = anyQ__453(emptyQ__108, B1051);
                {
                    var B1058 = not__27(B1057);
                }
                if (($T)(B1058)) {
                    {
                        var key__1053 = first__130(B1048);
                    }
                    (function B1054(key__1055) {
                        return(get_setter__621(object1__1046, key__1055, get__602(object2__1047, key__1055)));
                    }(key__1053));
                    B1048 = rest__116(B1048);
                    B1051 = [B1048];
                } else
                    break;
            }
            B1050;
            return(object1__1046);
        };
    }
    (exports)['extend!'] = extendN__1056;
    Mannotate_function__13(extendN__1056, 'extendN', false);
}
{
    {
        var as_property_list__1082 = function B1068(object__1069) {
            {
                var B1070 = $SL.call(arguments, 1);
                var B1071 = Mkeys__212(B1070, { 'keywords?': false });
                var keywordsQ__1072 = B1071['keywords?'];
                var result__1073 = [];
                var B1074 = object_properties__662(object__1069);
                var B1075 = false;
                var B1076 = false;
                var B1077 = [B1074];
            }
            while (true) {
                {
                    var B1078 = B1075;
                    var B1084 = false;
                }
                if (($T)(B1078))
                    B1084 = B1078;
                else
                    B1084 = anyQ__453(emptyQ__108, B1077);
                {
                    var B1085 = not__27(B1084);
                }
                if (($T)(B1085)) {
                    {
                        var key__1079 = first__130(B1074);
                    }
                    (function B1080(key__1081) {
                        {
                            var B1083 = false;
                        }
                        if (($T)(keywordsQ__1072))
                            B1083 = keyword__71(as_string__86(key__1081));
                        else
                            B1083 = key__1081;
                        push_last__167(result__1073, B1083);
                        return(push_last__167(result__1073, get__602(object__1069, key__1081)));
                    }(key__1079));
                    B1074 = rest__116(B1074);
                    B1077 = [B1074];
                } else
                    break;
            }
            B1076;
            return(result__1073);
        };
    }
    (exports)['as-property-list'] = as_property_list__1082;
    Mannotate_function__13(as_property_list__1082, 'as_property_list', false);
}
{
    {
        var as_association_list__1109 = function B1095(object__1096) {
            {
                var B1097 = $SL.call(arguments, 1);
                var B1098 = Mkeys__212(B1097, { 'keywords?': false });
                var keywordsQ__1099 = B1098['keywords?'];
                var result__1100 = [];
                var B1101 = object_properties__662(object__1096);
                var B1102 = false;
                var B1103 = false;
                var B1104 = [B1101];
            }
            while (true) {
                {
                    var B1105 = B1102;
                    var B1113 = false;
                }
                if (($T)(B1105))
                    B1113 = B1105;
                else
                    B1113 = anyQ__453(emptyQ__108, B1104);
                {
                    var B1114 = not__27(B1113);
                }
                if (($T)(B1114)) {
                    {
                        var key__1106 = first__130(B1101);
                    }
                    (function B1107(key__1108) {
                        {
                            var B1110 = false;
                        }
                        if (($T)(keywordsQ__1099))
                            B1110 = keyword__71(as_string__86(key__1108));
                        else
                            B1110 = key__1108;
                        {
                            var B1111 = get__602(object__1096, key__1108);
                            var B1112 = [
                                    B1110,
                                    B1111
                                ];
                        }
                        return(push_last__167(result__1100, B1112));
                    }(key__1106));
                    B1101 = rest__116(B1101);
                    B1104 = [B1101];
                } else
                    break;
            }
            B1103;
            return(result__1100);
        };
    }
    (exports)['as-association-list'] = as_association_list__1109;
    Mannotate_function__13(as_association_list__1109, 'as_association_list', false);
}
{
    {
        var starts_withQ__1123 = function B1118(string__1119, prefix__1120) {
            {
                var B1121 = string__1119;
                var B1122 = prefix__1120;
                var B1124 = B1121['indexOf'](B1122);
            }
            return(binaryEE__44(B1124, 0));
        };
    }
    (exports)['starts-with?'] = starts_withQ__1123;
    Mannotate_function__13(starts_withQ__1123, 'starts_withQ', false);
}
{
    {
        var evenQ__1128 = function B1126(number__1127) {
            return(binaryEE__44(number__1127 % 2, 0));
        };
    }
    (exports)['even?'] = evenQ__1128;
    Mannotate_function__13(evenQ__1128, 'evenQ', false);
}
{
    {
        var oddQ__1132 = function B1130(number__1131) {
            return(binaryEE__44(number__1131 % 2, 1));
        };
    }
    (exports)['odd?'] = oddQ__1132;
    Mannotate_function__13(oddQ__1132, 'oddQ', false);
}
{
    {
        var group_by__1142 = function B1135(predicate__1136, items__1137) {
            return(reduce__216(function B1138(result__1139, item__1140) {
                {
                    var key__1141 = predicate__1136(item__1140);
                }
                if (($T)(hasQ__384(result__1139, key__1141)))
                    push_last__167(get__602(result__1139, key__1141), item__1140);
                else
                    get_setter__621(result__1139, key__1141, [item__1140]);
                return(result__1139);
            }, make_object__585(), items__1137));
        };
    }
    (exports)['group-by'] = group_by__1142;
    Mannotate_function__13(group_by__1142, 'group_by', false);
}
{
    {
        var wrap_object__1148 = function B1144(object__1145) {
            {
                var rest__1146 = $SL.call(arguments, 1);
                var result__1147 = Object.create(object__1145);
            }
            extendN__1056(result__1147, as_object__521(rest__1146));
            return(result__1147);
        };
    }
    Mannotate_function__13(wrap_object__1148, 'wrap_object', false);
}
{
    {
        var unwrap_object__1152 = function B1150(object__1151) {
            return(object__1151['__proto__']);
        };
    }
    Mannotate_function__13(unwrap_object__1152, 'unwrap_object', false);
}
{
    {
        var update_with__1165 = function B1156(fn__1157, obj__1158) {
            {
                var objs__1159 = $SL.call(arguments, 2);
            }
            return(do__833(function B1160(obj2__1161) {
                return(do__833(function B1162(property__1163) {
                    {
                        var value__1164 = get__602(obj2__1161, property__1163);
                        var B1166 = false;
                    }
                    if (($T)(hasQ__384(obj__1158, property__1163)))
                        B1166 = fn__1157(get__602(obj__1158, property__1163), value__1164);
                    else
                        B1166 = value__1164;
                    return(get_setter__621(obj__1158, property__1163, B1166));
                }, object_properties__662(obj2__1161)));
            }, objs__1159));
        };
    }
    (exports)['update-with'] = update_with__1165;
    Mannotate_function__13(update_with__1165, 'update_with', false);
}
{
    {
        var as_set__1172 = function B1168(values__1169) {
            {
                var set__1170 = [];
            }
            return(set_unionN__1171(set__1170, values__1169));
        };
    }
    (exports)['as-set'] = as_set__1172;
    Mannotate_function__13(as_set__1172, 'as_set', false);
}
{
    {
        var set_addN__1177 = function B1174(set__1175, object__1176) {
            if (($T)(not__27(memberQ__787(object__1176, set__1175))))
                return(push_last__167(set__1175, object__1176));
            else
                return(false);
        };
    }
    (exports)['set-add!'] = set_addN__1177;
    Mannotate_function__13(set_addN__1177, 'set_addN', false);
}
{
    {
        var set_removeN__1178 = removeN__741;
    }
    (exports)['set-remove!'] = set_removeN__1178;
}
{
    {
        var set_unionN__1171 = function B1180(set1__1181, set2__1182) {
            do__833(curry__303(set_addN__1177, set1__1181), set2__1182);
            return(set1__1181);
        };
    }
    (exports)['set-union!'] = set_unionN__1171;
    Mannotate_function__13(set_unionN__1171, 'set_unionN', false);
}
{
    {
        var set_subtractN__1187 = function B1184(set1__1185, set2__1186) {
            do__833(curry__303(set_removeN__1178, set1__1185), set2__1186);
            return(set1__1185);
        };
    }
    (exports)['set-subtract!'] = set_subtractN__1187;
    Mannotate_function__13(set_subtractN__1187, 'set_subtractN', false);
}
{
    {
        var chain_object__1192 = function B1189(object1__1190, object2__1191) {
            object2__1191['__proto__'] = object1__1190['__proto__'];
            object1__1190['__proto__'] = object2__1191;
            return(object1__1190);
        };
    }
    (exports)['chain-object'] = chain_object__1192;
    Mannotate_function__13(chain_object__1192, 'chain_object', false);
}
{
    {
        var unchain_object__1196 = function B1194(object__1195) {
            {
                var B1197 = false;
            }
            if (($T)(object__1195['__proto__']))
                B1197 = object__1195['__proto__']['__proto__'];
            else
                B1197 = false;
            object__1195['__proto__'] = B1197;
            return(object__1195);
        };
    }
    (exports)['unchain-object'] = unchain_object__1196;
    Mannotate_function__13(unchain_object__1196, 'unchain_object', false);
}
{
    {
        var as_hex_string__974 = function B1201(number__1202) {
            {
                var B1203 = number__1202;
                var B1204 = 16;
            }
            return(B1203['toString'](B1204));
        };
    }
    (exports)['as-hex-string'] = as_hex_string__974;
    Mannotate_function__13(as_hex_string__974, 'as_hex_string', false);
}
{
    {
        var make_plain_object__1207 = function B1206() {
            return((Object.create(null)));
        };
    }
    (exports)['make-plain-object'] = make_plain_object__1207;
    Mannotate_function__13(make_plain_object__1207, 'make_plain_object', false);
}
{
    {
        var ___720 = function B1209(minuend__1210) {
            {
                var subtrahends__1211 = $SL.call(arguments, 1);
            }
            if (($T)(emptyQ__108(subtrahends__1211)))
                return(-(minuend__1210));
            else
                return(reduce__216(binary___360, minuend__1210, subtrahends__1211));
        };
    }
    (exports)['-'] = ___720;
    Mannotate_function__13(___720, '_', false);
}
{
    {
        var P__631 = function B1213() {
            {
                var numbers__1214 = $SL.call(arguments, 0);
            }
            if (($T)(emptyQ__108(numbers__1214)))
                return(0);
            else
                return(reduce1__217(binaryP__355, numbers__1214));
        };
    }
    (exports)['+'] = P__631;
    Mannotate_function__13(P__631, 'P', false);
}
{
    {
        var T__1032 = function B1216() {
            {
                var numbers__1217 = $SL.call(arguments, 0);
            }
            if (($T)(emptyQ__108(numbers__1217)))
                return(1);
            else
                return(reduce1__217(binaryT__365, numbers__1217));
        };
    }
    (exports)['*'] = T__1032;
    Mannotate_function__13(T__1032, 'T', false);
}
{
    {
        var S__1223 = function B1219(numerator__1220) {
            {
                var denominators__1221 = $SL.call(arguments, 1);
            }
            if (($T)(emptyQ__108(denominators__1221)))
                return(Mdivide__1222(1, numerator__1220));
            else
                return(reduce__216(binaryS__370, numerator__1220, denominators__1221));
        };
    }
    (exports)['/'] = S__1223;
    Mannotate_function__13(S__1223, 'S', false);
}
{
    {
        var disjoin__1234 = function B1227(predicate1__1228) {
            {
                var predicates__1229 = $SL.call(arguments, 1);
            }
            return(function B1230() {
                {
                    var arguments__1231 = $SL.call(arguments, 0);
                }
                return(anyQ__453(function B1232(predicate__1233) {
                    return(apply__215(predicate__1233, arguments__1231));
                }, cons__85(predicate1__1228, predicates__1229)));
            });
        };
    }
    (exports)['disjoin'] = disjoin__1234;
    Mannotate_function__13(disjoin__1234, 'disjoin', false);
}
{
    {
        var conjoin__1246 = function B1238(predicate1__1239) {
            {
                var predicates__1240 = $SL.call(arguments, 1);
            }
            return(function B1241() {
                {
                    var arguments__1242 = $SL.call(arguments, 0);
                    var value__1243 = false;
                }
                if (($T)(everyQ__792(function B1244(predicate__1245) {
                        return(value__1243 = apply__215(predicate__1245, arguments__1242));
                    }, cons__85(predicate1__1239, predicates__1240))))
                    return(value__1243);
                else
                    return(false);
            });
        };
    }
    (exports)['conjoin'] = conjoin__1246;
    Mannotate_function__13(conjoin__1246, 'conjoin', false);
}
{
    {
        var ignore__1249 = function B1248() {
            return(false);
        };
    }
    (exports)['ignore'] = ignore__1249;
    Mannotate_function__13(ignore__1249, 'ignore', false);
}
{
    {
        var set_timeout__1250 = (setTimeout);
    }
    (exports)['set-timeout'] = set_timeout__1250;
}
{
    {
        var clear_timeout__1251 = (clearTimeout);
    }
    (exports)['clear-timeout'] = clear_timeout__1251;
}
{
    {
        var set_interval__1252 = (setInterval);
    }
    (exports)['set-interval'] = set_interval__1252;
}
{
    {
        var clear_interval__1253 = (clearInterval);
    }
    (exports)['clear-interval'] = clear_interval__1253;
}
{
    {
        var B1259 = $K('start');
        var B1260 = $K('end');
        var partition__1271 = function B1261(count__1262, elements__1263) {
            {
                var B1264 = $SL.call(arguments, 2);
                var B1265 = Mkeys__212(B1264, { 'step': count__1262 });
                var step__1266 = B1265['step'];
                var result__1267 = [];
                var total__1268 = size__31(elements__1263);
                var last_index__1269 = 0;
            }
            while (($T)(L__265(last_index__1269, total__1268))) {
                {
                    var new_index__1270 = P__631(last_index__1269, count__1262);
                }
                push_last__167(result__1267, copy_sequence__869(elements__1263, B1259, last_index__1269, B1260, new_index__1270));
                last_index__1269 = new_index__1270;
            }
            return(result__1267);
        };
    }
    (exports)['partition'] = partition__1271;
    Mannotate_function__13(partition__1271, 'partition', false);
}
