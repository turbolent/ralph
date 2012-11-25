false;
{
    var LobjectG__1 = (Object);
    (exports)['<object>'] = LobjectG__1;
}
{
    var LstringG__2 = (String);
    (exports)['<string>'] = LstringG__2;
}
{
    var LnumberG__3 = (Number);
    (exports)['<number>'] = LnumberG__3;
}
{
    var LarrayG__4 = (Array);
    (exports)['<array>'] = LarrayG__4;
}
{
    var LbooleanG__5 = (Boolean);
    (exports)['<boolean>'] = LbooleanG__5;
}
{
    var LfunctionG__6 = (Function);
    (exports)['<function>'] = LfunctionG__6;
}
{
    var LerrorG__7 = (Error);
    (exports)['<error>'] = LerrorG__7;
}
LerrorG__7['%properties'] = { 'message': false };
{
    var Mmake_function__13 = function B9(name__10, function__11, setterQ__12) {
        function__11['%name'] = name__10;
        function__11['%setter?'] = setterQ__12;
        return(function__11);
    };
    (exports)['%make-function'] = Mmake_function__13;
}
{
    var trueQ__17 = Mmake_function__13('trueQ', function B15(value__16) {
            return(value__16 != (null) && value__16 !== false);
        }, false);
    (exports)['true?'] = trueQ__17;
}
$T = trueQ__17;
{
    var not__21 = Mmake_function__13('not', function B19(value__20) {
            return(!(trueQ__17(value__20)));
        }, false);
    (exports)['not'] = not__21;
}
{
    var size__25 = Mmake_function__13('size', function B23(object__24) {
            return((object__24 || false)['length'] || 0);
        }, false);
    (exports)['size'] = size__25;
}
$SL = [].slice;
{
    var inc__29 = Mmake_function__13('inc', function B27(number__28) {
            return(number__28 + 1);
        }, false);
    (exports)['inc'] = inc__29;
}
{
    var dec__33 = Mmake_function__13('dec', function B31(number__32) {
            return(number__32 - 1);
        }, false);
    (exports)['dec'] = dec__33;
}
{
    var binaryEE__38 = Mmake_function__13('binaryEE', function B35(object1__36, object2__37) {
            return(object1__36 === object2__37);
        }, false);
    (exports)['binary=='] = binaryEE__38;
}
{
    var Minherit__43 = Mmake_function__13('Minherit', function B40(class__41, superclass__42) {
            class__41['%superclass'] = superclass__42;
            class__41['prototype']['__proto__'] = superclass__42['prototype'];
            class__41['%properties']['__proto__'] = superclass__42['%properties'];
            return(class__41);
        }, false);
    (exports)['%inherit'] = Minherit__43;
}
{
    var Mmake_class__51 = Mmake_function__13('Mmake_class', function B46(superclass__47, properties__48, constructor__49) {
            if (($T)(not__21(constructor__49)))
                constructor__49 = function B50() {
                    return(false);
                };
            constructor__49['%properties'] = properties__48;
            if (($T)(superclass__47))
                Minherit__43(constructor__49, superclass__47);
            return(constructor__49);
        }, false);
    (exports)['%make-class'] = Mmake_class__51;
}
{
    var Mkeywords__52 = {};
    (exports)['%keywords'] = Mkeywords__52;
}
{
    var LkeywordG__54 = Mmake_class__51(LobjectG__1, { 'name': false }, function LkeywordG__53() {
            var B55 = (this);
            return(B55['name'] = (undefined));
        });
    (exports)['<keyword>'] = LkeywordG__54;
}
{
    var keyword__65 = Mmake_function__13('keyword', function B59(name__60) {
            var B61 = name__60, nameT__62 = B61['toLowerCase'](), B63 = Mkeywords__52[nameT__62];
            if (($T)(B63))
                return(B63);
            else {
                var keyword__64 = new(LkeywordG__54);
                keyword__64['name'] = name__60;
                Mkeywords__52[name__60] = keyword__64;
                return(keyword__64);
            }
        }, false);
    (exports)['keyword'] = keyword__65;
}
$K = keyword__65;
{
    var Mconcat__74 = Mmake_function__13('Mconcat', function B69(array1__70, array2__71) {
            var B72 = array1__70, B73 = array2__71;
            return(B72['concat'](B73));
        }, false);
    (exports)['%concat'] = Mconcat__74;
}
{
    var cons__79 = Mmake_function__13('cons', function B76(value__77, rest__78) {
            return(Mconcat__74([value__77], rest__78));
        }, false);
    (exports)['cons'] = cons__79;
}
{
    var as_string__80 = (String);
    (exports)['as-string'] = as_string__80;
}
{
    var as_number__81 = (Number);
    (exports)['as-number'] = as_number__81;
}
{
    var as_array__86 = Mmake_function__13('as_array', function B83(arguments__84, skip__85) {
            return($SL.call(arguments__84, skip__85 || 0));
        }, false);
    (exports)['as-array'] = as_array__86;
}
{
    var as_json__87 = (JSON.stringify);
    (exports)['as-json'] = as_json__87;
}
{
    var parse_json__88 = (JSON.parse);
    (exports)['parse-json'] = parse_json__88;
}
{
    var parse_number__89 = (parseFloat);
    (exports)['parse-number'] = parse_number__89;
}
{
    var char_code__97 = Mmake_function__13('char_code', function B93(char__94) {
            var B95 = char__94, B96 = 0;
            return(B95['charCodeAt'](B96));
        }, false);
    (exports)['char-code'] = char_code__97;
}
{
    var code_char__98 = (String.fromCharCode);
    (exports)['code-char'] = code_char__98;
}
{
    var emptyQ__102 = Mmake_function__13('emptyQ', function B100(sequence__101) {
            return(binaryEE__38(size__25(sequence__101), 0));
        }, false);
    (exports)['empty?'] = emptyQ__102;
}
{
    var rest__110 = Mmake_function__13('rest', function B106(sequence__107) {
            var B108 = sequence__107, B109 = 1;
            return(B108['slice'](B109));
        }, false);
    (exports)['rest'] = rest__110;
}
{
    var last__114 = Mmake_function__13('last', function B112(array__113) {
            return(array__113[dec__33(size__25(array__113), 1)]);
        }, false);
    (exports)['last'] = last__114;
}
{
    var last_setter__119 = Mmake_function__13('last_setter', function B116(array__117, value__118) {
            var B120 = dec__33(size__25(array__117), 1);
            return(array__117[B120] = value__118);
        }, true);
    (exports)['last-setter'] = last_setter__119;
}
{
    var first__124 = Mmake_function__13('first', function B122(sequence__123) {
            return(sequence__123[0]);
        }, false);
    (exports)['first'] = first__124;
}
{
    var first_setter__129 = Mmake_function__13('first_setter', function B126(array__127, value__128) {
            return(array__127[0] = value__128);
        }, true);
    (exports)['first-setter'] = first_setter__129;
}
{
    var second__133 = Mmake_function__13('second', function B131(sequence__132) {
            return(sequence__132[1]);
        }, false);
    (exports)['second'] = second__133;
}
{
    var second_setter__138 = Mmake_function__13('second_setter', function B135(array__136, value__137) {
            return(array__136[1] = value__137);
        }, true);
    (exports)['second-setter'] = second_setter__138;
}
{
    var third__142 = Mmake_function__13('third', function B140(sequence__141) {
            return(sequence__141[2]);
        }, false);
    (exports)['third'] = third__142;
}
{
    var third_setter__147 = Mmake_function__13('third_setter', function B144(array__145, value__146) {
            return(array__145[2] = value__146);
        }, true);
    (exports)['third-setter'] = third_setter__147;
}
{
    var make_array__151 = Mmake_function__13('make_array', function B149() {
            var elements__150 = $SL.call(arguments, 0);
            return(elements__150);
        }, false);
    (exports)['make-array'] = make_array__151;
}
{
    var push__156 = Mmake_function__13('push', function B153(array__154, value__155) {
            array__154.unshift(value__155);
            return(array__154);
        }, false);
    (exports)['push'] = push__156;
}
{
    var push_last__161 = Mmake_function__13('push_last', function B158(array__159, value__160) {
            array__159.push(value__160);
            return(array__159);
        }, false);
    (exports)['push-last'] = push_last__161;
}
{
    var pop__167 = Mmake_function__13('pop', function B164(array__165) {
            var B166 = array__165;
            return(B166['shift']());
        }, false);
    (exports)['pop'] = pop__167;
}
{
    var pop_last__173 = Mmake_function__13('pop_last', function B170(array__171) {
            var B172 = array__171;
            return(B172['pop']());
        }, false);
    (exports)['pop-last'] = pop_last__173;
}
{
    var but_last__184 = Mmake_function__13('but_last', function B178(array__179, n__180) {
            var B181 = array__179, B182 = 0, B183 = (n__180 || 1) * -1;
            return(B181['slice'](B182, B183));
        }, false);
    (exports)['but-last'] = but_last__184;
}
{
    var slice__196 = Mmake_function__13('slice', function B189(array__190, start__191, end__192) {
            var B193 = array__190, B194 = start__191, B195 = end__192;
            return(B193['slice'](B194, B195));
        }, false);
    (exports)['slice'] = slice__196;
}
{
    var B201 = $K('from-end?'), reduce1__211 = Mmake_function__13('reduce1', function B202(function__203, values__204) {
            var B205 = $SL.call(arguments, 2), B207 = Mkeys__206(B205, { 'from-end?': false }), from_endQ__208 = B207['from-end?'];
            if (($T)(emptyQ__102(values__204)))
                return(function__203());
            else {
                var B212 = false;
                if (($T)(from_endQ__208))
                    B212 = [
                        last__114(values__204),
                        but_last__184(values__204)
                    ];
                else
                    B212 = [
                        first__124(values__204),
                        rest__110(values__204)
                    ];
                var B213 = [
                        B201,
                        from_endQ__208
                    ], B214 = Mconcat__74(B212, B213);
                return(apply__209(reduce__210, function__203, B214));
            }
        }, false);
    (exports)['reduce1'] = reduce1__211;
}
{
    var reduce__210 = Mmake_function__13('reduce', function B222(function__223, initial_value__224, values__225) {
            var B226 = $SL.call(arguments, 3), B227 = Mkeys__206(B226, { 'from-end?': false }), from_endQ__228 = B227['from-end?'], result__229 = initial_value__224;
            if (($T)(from_endQ__228)) {
                var values__231 = reverse__230(values__225), B232 = size__25(values__231), i__233 = 0;
                while (($T)(not__21(binaryGE__234(i__233, B232)))) {
                    (function B235(i__236) {
                        return(result__229 = function__223(values__231[i__236], result__229));
                    }(i__233));
                    i__233 = inc__29(i__233);
                }
                false;
            } else {
                var B237 = size__25(values__225), i__238 = 0;
                while (($T)(not__21(binaryGE__234(i__238, B237)))) {
                    (function B239(i__240) {
                        return(result__229 = function__223(result__229, values__225[i__240]));
                    }(i__238));
                    i__238 = inc__29(i__238);
                }
                false;
            }
            return(result__229);
        }, false);
    (exports)['reduce'] = reduce__210;
}
{
    var reverseN__246 = Mmake_function__13('reverseN', function B243(array__244) {
            var B245 = array__244;
            return(B245['reverse']());
        }, false);
    (exports)['reverse!'] = reverseN__246;
}
{
    var reverse__230 = Mmake_function__13('reverse', function B248(array__249) {
            return(reverseN__246(slice__196(array__249)));
        }, false);
    (exports)['reverse'] = reverse__230;
}
{
    var sortN__269 = Mmake_function__13('sortN', function B256(array__257) {
            var B258 = $SL.call(arguments, 1), B261 = Mkeys__206(B258, {
                    'test': L__259,
                    'key': identity__260
                }), test__262 = B261['test'], key__263 = B261['key'], B264 = array__257, B268 = function B265(a__266, b__267) {
                    if (($T)(test__262(key__263(a__266), key__263(b__267))))
                        return(-1);
                    else
                        return(1);
                };
            return(B264['sort'](B268));
        }, false);
    (exports)['sort!'] = sortN__269;
}
{
    var B275 = $K('test'), B276 = $K('key'), sort__283 = Mmake_function__13('sort', function B277(array__278) {
            var B279 = $SL.call(arguments, 1), B280 = Mkeys__206(B279, {
                    'test': L__259,
                    'key': identity__260
                }), test__281 = B280['test'], key__282 = B280['key'];
            return(sortN__269(slice__196(array__278), B275, test__281, B276, key__282));
        }, false);
    (exports)['sort'] = sort__283;
}
{
    var apply__209 = Mmake_function__13('apply', function B285(function__286) {
            var actual__287 = $SL.call(arguments, 1, -1), last__288 = arguments[size__25(arguments) - 1], arguments__289 = false;
            if (($T)(binaryEE__38(last__288, function__286)))
                arguments__289 = actual__287;
            else
                arguments__289 = Mconcat__74(actual__287, last__288);
            return(function__286['apply']((null), arguments__289));
        }, false);
    (exports)['apply'] = apply__209;
}
{
    var curry__297 = Mmake_function__13('curry', function B292(function__293) {
            var curried_args__294 = $SL.call(arguments, 1);
            return(function B295() {
                var args__296 = $SL.call(arguments, 0);
                return(apply__209(function__293, Mconcat__74(curried_args__294, args__296)));
            });
        }, false);
    (exports)['curry'] = curry__297;
}
{
    var rcurry__305 = Mmake_function__13('rcurry', function B300(function__301) {
            var curried_args__302 = $SL.call(arguments, 1);
            return(function B303() {
                var args__304 = $SL.call(arguments, 0);
                return(apply__209(function__301, Mconcat__74(args__304, curried_args__302)));
            });
        }, false);
    (exports)['rcurry'] = rcurry__305;
}
{
    var always__311 = Mmake_function__13('always', function B308(value__309) {
            return(function B310() {
                return(value__309);
            });
        }, false);
    (exports)['always'] = always__311;
}
{
    var repeatedly__323 = Mmake_function__13('repeatedly', function B315(function__316, count__317) {
            var result__318 = [], B319 = count__317, i__320 = 0;
            while (($T)(not__21(binaryGE__234(i__320, B319)))) {
                (function B321(i__322) {
                    return(push_last__161(result__318, function__316()));
                }(i__320));
                i__320 = inc__29(i__320);
            }
            return(result__318);
        }, false);
    (exports)['repeatedly'] = repeatedly__323;
}
{
    var identity__260 = Mmake_function__13('identity', function B325(value__326) {
            return(value__326);
        }, false);
    (exports)['identity'] = identity__260;
}
{
    var complement__333 = Mmake_function__13('complement', function B329(function__330) {
            return(function B331() {
                var arguments__332 = $SL.call(arguments, 0);
                return(not__21(apply__209(function__330, arguments__332)));
            });
        }, false);
    (exports)['complement'] = complement__333;
}
{
    var compose__344 = Mmake_function__13('compose', function B337() {
            var functions__338 = $SL.call(arguments, 0);
            if (($T)(emptyQ__102(functions__338)))
                return(identity__260);
            else
                return(function B339() {
                    var arguments__340 = $SL.call(arguments, 0);
                    return(reduce__210(function B341(value__342, function__343) {
                        return(function__343(value__342));
                    }, apply__209(last__114(functions__338), arguments__340), but_last__184(functions__338), B201, true));
                });
        }, false);
    (exports)['compose'] = compose__344;
}
var binaryP__349 = Mmake_function__13('binaryP', function B346(number1__347, number2__348) {
        return(number1__347 + number2__348);
    }, false);
var binary___354 = Mmake_function__13('binary_', function B351(number1__352, number2__353) {
        return(number1__352 - number2__353);
    }, false);
var binaryT__359 = Mmake_function__13('binaryT', function B356(number1__357, number2__358) {
        return(number1__357 * number2__358);
    }, false);
var binaryS__364 = Mmake_function__13('binaryS', function B361(number1__362, number2__363) {
        return(number1__362 / number2__363);
    }, false);
{
    var type__368 = Mmake_function__13('type', function B366(object__367) {
            if (($T)(object__367))
                return(object__367['constructor']);
            else
                return(LbooleanG__5);
        }, false);
    (exports)['type'] = type__368;
}
{
    var instanceQ__373 = Mmake_function__13('instanceQ', function B370(object__371, type__372) {
            if (($T)(object__371))
                return(object__371 instanceof type__372 || binaryEE__38(object__371['constructor'], type__372));
            else
                return(binaryEE__38(type__372, LbooleanG__5));
        }, false);
    (exports)['instance?'] = instanceQ__373;
}
$HP = Object.hasOwnProperty;
{
    var hasQ__378 = Mmake_function__13('hasQ', function B375(object__376, property__377) {
            return(($HP.call(object__376,property__377)));
        }, false);
    (exports)['has?'] = hasQ__378;
}
{
    var Mmake_method__387 = Mmake_function__13('Mmake_method', function B380(name__381, function__382, setterQ__383, type__384, existing__385) {
            function__382['%name'] = name__381;
            function__382['%setter?'] = setterQ__383;
            function__382['%type'] = type__384;
            type__384['prototype'][name__381] = function__382;
            var B388 = false;
            if (($T)(existing__385))
                B388 = existing__385['%generic?'];
            else
                B388 = false;
            if (($T)(B388))
                return(existing__385);
            else
                return(Mmake_generic__386(name__381));
        }, false);
    (exports)['%make-method'] = Mmake_method__387;
}
{
    var Mmake_generic__386 = Mmake_function__13('Mmake_generic', function B391(name__392) {
            var dispatcher__396 = function B393(object__394) {
                var function__395 = ((object__394== null ? false : object__394))[name__392];
                return(function__395 && function__395['apply'](object__394, arguments));
            };
            dispatcher__396['%generic?'] = true;
            dispatcher__396['%name'] = name__392;
            return(dispatcher__396);
        }, false);
    (exports)['%make-generic'] = Mmake_generic__386;
}
{
    var Mnext_method__402 = Mmake_function__13('Mnext_method', function B398(function__399) {
            var name__400 = function__399['%name'], proto__401 = function__399['%type']['prototype']['__proto__'];
            return(proto__401[name__400]);
        }, false);
    (exports)['%next-method'] = Mnext_method__402;
}
{
    var concatenate__406 = Mmake_function__13('concatenate', function B404() {
            var values__405 = $SL.call(arguments, 0);
            if (($T)(emptyQ__102(values__405)))
                return([]);
            else
                return(reduce1__211(Mconcat__74, values__405));
        }, false);
    (exports)['concatenate'] = concatenate__406;
}
{
    var compare__416 = Mmake_function__13('compare', function B409(function__410, object__411, objects__412) {
            var failedQ__413 = false;
            while (true) {
                var B414 = failedQ__413, B417 = false;
                if (($T)(B414))
                    B417 = B414;
                else
                    B417 = emptyQ__102(objects__412);
                var B418 = not__21(B417);
                if (($T)(B418)) {
                    var other__415 = first__124(objects__412);
                    failedQ__413 = not__21(function__410(object__411, other__415));
                    objects__412 = rest__110(objects__412);
                    object__411 = other__415;
                } else
                    break;
            }
            return(not__21(failedQ__413));
        }, false);
    (exports)['compare'] = compare__416;
}
{
    var EE__423 = Mmake_function__13('EE', function B420(object__421) {
            var objects__422 = $SL.call(arguments, 1);
            return(compare__416(binaryEE__38, object__421, objects__422));
        }, false);
    (exports)['=='] = EE__423;
}
{
    var binaryE__424 = Mmake_generic__386('binaryE');
    (exports)['binary='] = binaryE__424;
}
{
    var binaryL__425 = Mmake_generic__386('binaryL');
    (exports)['binary<'] = binaryL__425;
}
{
    var binaryE__424 = Mmake_method__387('binaryE', function B427(object1__428, object2__429) {
            if (($T)(binaryEE__38(type__368(object1__428), type__368(object2__429))))
                return(binaryEE__38(object1__428, object2__429));
            else
                return(false);
        }, false, LobjectG__1, binaryE__424);
    (exports)['binary='] = binaryE__424;
}
{
    var binaryE__424 = Mmake_method__387('binaryE', function B438(array1__439, array2__440) {
            if (($T)(binaryEE__38(size__25(array1__439), size__25(array2__440)))) {
                var B441 = array1__439, B442 = array2__440, B443 = false, B444 = false, B445 = [
                        B441,
                        B442
                    ];
                while (true) {
                    var B446 = B443, B453 = false;
                    if (($T)(B446))
                        B453 = B446;
                    else
                        B453 = anyQ__447(emptyQ__102, B445);
                    var B454 = not__21(B453);
                    if (($T)(B454)) {
                        var item1__448 = first__124(B441), item2__449 = first__124(B442);
                        if (($T)(not__21(binaryE__424(item1__448, item2__449)))) {
                            B444 = true;
                            B443 = true;
                        } else {
                            (function B450(item1__451, item2__452) {
                                return(false);
                            }(item1__448, item2__449));
                            B441 = rest__110(B441);
                            B442 = rest__110(B442);
                            B445 = [
                                B441,
                                B442
                            ];
                        }
                    } else
                        break;
                }
                return(not__21(B444));
            } else
                return(false);
        }, false, LarrayG__4, binaryE__424);
    (exports)['binary='] = binaryE__424;
}
var binaryE_dispatcher__455 = binaryE__424;
{
    var binaryE__424 = Mmake_function__13('binaryE', function B458(object1__459, object2__460) {
            var B461 = false;
            if (($T)(not__21(object1__459)))
                B461 = not__21(object2__460);
            else
                B461 = false;
            if (($T)(B461))
                return(B461);
            else
                return(binaryE_dispatcher__455(object1__459, object2__460));
        }, false);
    (exports)['binary='] = binaryE__424;
}
{
    var E__466 = Mmake_function__13('E', function B463(object__464) {
            var objects__465 = $SL.call(arguments, 1);
            return(compare__416(binaryE__424, object__464, objects__465));
        }, false);
    (exports)['='] = E__466;
}
{
    var binaryL__425 = Mmake_method__387('binaryL', function B468(object1__469, object2__470) {
            if (($T)(binaryEE__38(type__368(object1__469), type__368(object2__470))))
                return(object1__469 < object2__470);
            else
                return(false);
        }, false, LobjectG__1, binaryL__425);
    (exports)['binary<'] = binaryL__425;
}
{
    var L__259 = Mmake_function__13('L', function B472(object__473) {
            var objects__474 = $SL.call(arguments, 1);
            return(compare__416(binaryL__425, object__473, objects__474));
        }, false);
    (exports)['<'] = L__259;
}
{
    var binaryLE__481 = Mmake_function__13('binaryLE', function B477(object1__478, object2__479) {
            if (($T)(object1__478))
                if (($T)(object2__479)) {
                    var B480 = binaryL__425(object1__478, object2__479);
                    if (($T)(B480))
                        return(B480);
                    else
                        return(binaryE__424(object1__478, object2__479));
                } else
                    return(false);
            else
                return(false);
        }, false);
    (exports)['binary<='] = binaryLE__481;
}
{
    var LE__486 = Mmake_function__13('LE', function B483(object__484) {
            var objects__485 = $SL.call(arguments, 1);
            return(compare__416(binaryLE__481, object__484, objects__485));
        }, false);
    (exports)['<='] = LE__486;
}
{
    var binaryG__491 = Mmake_function__13('binaryG', function B488(object1__489, object2__490) {
            if (($T)(object1__489))
                if (($T)(object2__490))
                    if (($T)(not__21(binaryL__425(object1__489, object2__490))))
                        return(not__21(binaryE__424(object1__489, object2__490)));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        }, false);
    (exports)['binary>'] = binaryG__491;
}
{
    var G__496 = Mmake_function__13('G', function B493(object__494) {
            var objects__495 = $SL.call(arguments, 1);
            return(compare__416(binaryG__491, object__494, objects__495));
        }, false);
    (exports)['>'] = G__496;
}
{
    var binaryGE__234 = Mmake_function__13('binaryGE', function B499(object1__500, object2__501) {
            var B502 = not__21(binaryL__425(object1__500, object2__501));
            if (($T)(B502))
                return(B502);
            else
                return(binaryE__424(object1__500, object2__501));
        }, false);
    (exports)['binary>='] = binaryGE__234;
}
{
    var GE__507 = Mmake_function__13('GE', function B504(object__505) {
            var objects__506 = $SL.call(arguments, 1);
            return(compare__416(binaryGE__234, object__505, objects__506));
        }, false);
    (exports)['>='] = GE__507;
}
{
    var as_object__515 = Mmake_function__13('as_object', function B509(property_list__510) {
            var list__511 = slice__196(property_list__510), result__512 = {};
            while (($T)(G__496(size__25(list__511), 0))) {
                var key__513 = pop__167(list__511), value__514 = pop__167(list__511), B516 = false;
                if (($T)(instanceQ__373(key__513, LkeywordG__54)))
                    B516 = key__513['name'];
                else
                    B516 = as_string__80(key__513);
                key__513 = B516;
                result__512[key__513] = value__514;
            }
            return(result__512);
        }, false);
    (exports)['as-object'] = as_object__515;
}
{
    var position__526 = Mmake_function__13('position', function B520(array__521, element__522) {
            var B523 = array__521, B524 = element__522, position__525 = B523['indexOf'](B524);
            if (($T)(G__496(position__525, -1)))
                return(position__525);
            else
                return(false);
        }, false);
    (exports)['position'] = position__526;
}
{
    var last_position__536 = Mmake_function__13('last_position', function B530(array__531, element__532) {
            var B533 = array__531, B534 = element__532, position__535 = B533['lastIndexOf'](B534);
            if (($T)(G__496(position__535, -1)))
                return(position__535);
            else
                return(false);
        }, false);
    (exports)['last-position'] = last_position__536;
}
{
    var as_uppercase__542 = Mmake_function__13('as_uppercase', function B539(string__540) {
            var B541 = string__540;
            return(B541['toUpperCase']());
        }, false);
    (exports)['as-uppercase'] = as_uppercase__542;
}
{
    var as_lowercase__548 = Mmake_function__13('as_lowercase', function B545(string__546) {
            var B547 = string__546;
            return(B547['toLowerCase']());
        }, false);
    (exports)['as-lowercase'] = as_lowercase__548;
}
{
    var join__557 = Mmake_function__13('join', function B552(array__553, string__554) {
            var B555 = array__553, B556 = string__554;
            return(B555['join'](B556));
        }, false);
    (exports)['join'] = join__557;
}
{
    var trim__563 = Mmake_function__13('trim', function B560(string__561) {
            var B562 = string__561;
            return(B562['trim']());
        }, false);
    (exports)['trim'] = trim__563;
}
{
    var replace__575 = Mmake_function__13('replace', function B568(string__569, pattern__570, replacement__571) {
            var B572 = string__569, B573 = pattern__570, B574 = replacement__571;
            return(B572['replace'](B573, B574));
        }, false);
    (exports)['replace'] = replace__575;
}
{
    var make_object__579 = Mmake_function__13('make_object', function B577() {
            var key_values__578 = $SL.call(arguments, 0);
            return(as_object__515(key_values__578));
        }, false);
    (exports)['make-object'] = make_object__579;
}
{
    var LsymbolG__581 = Mmake_class__51(LobjectG__1, {
            'name': false,
            'module': false
        }, function LsymbolG__580() {
            var B582 = (this);
            B582['name'] = (undefined);
            var B583 = (this);
            return(B583['module'] = (undefined));
        });
    (exports)['<symbol>'] = LsymbolG__581;
}
var Msymbols__584 = {};
{
    var symbol__590 = Mmake_function__13('symbol', function B586(name__587, module__588) {
            var B591 = as_lowercase__548(name__587), B592 = false;
            if (($T)(module__588))
                B592 = as_lowercase__548(module__588);
            else
                B592 = false;
            return(MMsymbol__589(B591, B592));
        }, false);
    (exports)['symbol'] = symbol__590;
}
{
    var symbol_name__597 = Mmake_function__13('symbol_name', function B594(symbol__595) {
            return(get__596(symbol__595, 'name'));
        }, false);
    (exports)['symbol-name'] = symbol_name__597;
}
{
    var destructure_symbol__601 = Mmake_function__13('destructure_symbol', function B599(symbol__600) {
            return([
                get__596(symbol__600, 'name'),
                get__596(symbol__600, 'module')
            ]);
        }, false);
    (exports)['destructure-symbol'] = destructure_symbol__601;
}
{
    var B607 = $K('name'), B608 = $K('module'), MMsymbol__589 = Mmake_function__13('MMsymbol', function B609(name__610, module__611) {
            var B612 = module__611, moduleT__613 = false;
            if (($T)(B612))
                moduleT__613 = B612;
            else
                moduleT__613 = '';
            var B614 = get__596(Msymbols__584, moduleT__613, name__610);
            if (($T)(B614))
                return(B614);
            else
                return(get_setter__615(Msymbols__584, moduleT__613, name__610, make__616(LsymbolG__581, B607, name__610, B608, module__611)));
        }, false);
    (exports)['%%symbol'] = MMsymbol__589;
}
$S = MMsymbol__589;
var Tsymbol_countT__617 = 0;
{
    var reset_symbol_counterN__620 = Mmake_function__13('reset_symbol_counterN', function B619() {
            return(Tsymbol_countT__617 = 0);
        }, false);
    (exports)['reset-symbol-counter!'] = reset_symbol_counterN__620;
}
{
    var generate_symbol__628 = Mmake_function__13('generate_symbol', function B622(env__623, prefix__624) {
            var B629 = false;
            if (($T)(prefix__624))
                B629 = concatenate__406(prefix__624, '_');
            else
                B629 = '$';
            var B630 = as_string__80(Tsymbol_countT__617 = P__625(Tsymbol_countT__617, 1)), name__626 = concatenate__406(B629, B630), B631 = false;
            if (($T)(env__623))
                B631 = get__596(env__623, 'module', 'name');
            else
                B631 = false;
            var result__627 = symbol__590(name__626, B631);
            get_setter__615(result__627, 'generated?', true);
            return(result__627);
        }, false);
    (exports)['generate-symbol'] = generate_symbol__628;
}
{
    var Mkeys__206 = Mmake_function__13('Mkeys', function B634(key_values__635, defaults__636) {
            var i__637 = 0;
            while (($T)(not__21(i__637 >= size__25(key_values__635)))) {
                (function B638(i__639) {
                    var key__640 = key_values__635[i__639], value__641 = key_values__635[inc__29(i__639, 1)];
                    if (($T)(instanceQ__373(key__640, LkeywordG__54))) {
                        var B642 = key__640['name'];
                        return(defaults__636[B642] = value__641);
                    } else
                        return(false);
                }(i__637));
                i__637 = inc__29(i__637, 2);
            }
            false;
            return(defaults__636);
        }, false);
    (exports)['%keys'] = Mkeys__206;
}
{
    var find_key__664 = Mmake_function__13('find_key', function B648(array__649, predicate__650) {
            var B651 = $SL.call(arguments, 2), B652 = Mkeys__206(B651, {
                    'skip': 0,
                    'failure': false,
                    'from-end?': false
                }), skip__653 = B652['skip'], failure__654 = B652['failure'], from_endQ__655 = B652['from-end?'], keys__657 = object_properties__656(array__649), B665 = function B659(index__660) {
                    return(predicate__650(element__661(array__649, index__660)));
                }, B666 = false;
            if (($T)(from_endQ__655))
                B666 = reverse__230(keys__657);
            else
                B666 = keys__657;
            var satisfying_keys__662 = choose__658(B665, B666), B663 = element__661(satisfying_keys__662, skip__653);
            if (($T)(B663))
                return(B663);
            else
                return(failure__654);
        }, false);
    (exports)['find-key'] = find_key__664;
}
{
    var parse_integer__675 = Mmake_function__13('parse_integer', function B670(value__671) {
            var B672 = $SL.call(arguments, 1), B673 = Mkeys__206(B672, { 'radix': 10 }), radix__674 = B673['radix'];
            return(parseInt(value__671, radix__674));
        }, false);
    (exports)['parse-integer'] = parse_integer__675;
}
{
    var element__661 = Mmake_function__13('element', function B680(array__681, index__682) {
            var B683 = $SL.call(arguments, 2), B684 = Mkeys__206(B683, { 'default': false }), default__685 = B684['default'], B686 = array__681[index__682];
            if (($T)(B686))
                return(B686);
            else
                return(default__685);
        }, false);
    (exports)['element'] = element__661;
}
{
    var element_setter__692 = Mmake_function__13('element_setter', function B688(array__689, key__690, value__691) {
            return(array__689[key__690] = value__691);
        }, true);
    (exports)['element-setter'] = element_setter__692;
}
{
    var replace_subsequence__703 = Mmake_function__13('replace_subsequence', function B696(target_array__697, insert_array__698) {
            var B699 = $SL.call(arguments, 2), B700 = Mkeys__206(B699, {
                    'start': 0,
                    'end': size__25(target_array__697)
                }), start__701 = B700['start'], end__702 = B700['end'];
            return(concatenate__406(slice__196(target_array__697, 0, start__701), insert_array__698, slice__196(target_array__697, end__702)));
        }, false);
    (exports)['replace-subsequence'] = replace_subsequence__703;
}
{
    var replace_subsequenceN__716 = Mmake_function__13('replace_subsequenceN', function B707(target_array__708, insert_array__709) {
            var B710 = $SL.call(arguments, 2), B711 = Mkeys__206(B710, {
                    'start': 0,
                    'end': size__25(target_array__708)
                }), start__712 = B711['start'], end__713 = B711['end'], rest__715 = Mconcat__74([
                    start__712,
                    ___714(end__713, start__712)
                ], insert_array__709);
            []['splice']['apply'](target_array__708, rest__715);
            return(target_array__708);
        }, false);
    (exports)['replace-subsequence!'] = replace_subsequenceN__716;
}
{
    var removeN__735 = Mmake_function__13('removeN', function B724(array__725, value__726) {
            var B727 = $SL.call(arguments, 2), B728 = Mkeys__206(B727, { 'test': EE__423 }), test__729 = B728['test'], B730 = find_key__664(array__725, curry__297(test__729, value__726));
            if (($T)(B730)) {
                var key__731 = B730, B732 = array__725, B733 = key__731, B734 = 1;
                B732['splice'](B733, B734);
            }
            return(array__725);
        }, false);
    (exports)['remove!'] = removeN__735;
}
{
    var remove__745 = Mmake_function__13('remove', function B739(array__740, value__741) {
            var B742 = $SL.call(arguments, 2), B743 = Mkeys__206(B742, { 'test': EE__423 }), test__744 = B743['test'];
            return(removeN__735(slice__196(array__740), value__741, B275, test__744));
        }, false);
    (exports)['remove'] = remove__745;
}
{
    var interpose__754 = Mmake_function__13('interpose', function B748(separator__749, array__750) {
            return(reduce1__211(function B751(a__752, b__753) {
                return(concatenate__406([
                    a__752,
                    separator__749
                ], b__753));
            }, array__750));
        }, false);
    (exports)['interpose'] = interpose__754;
}
{
    var anyQ__447 = Mmake_function__13('anyQ', function B758(function__759, values__760) {
            var value__761 = false, n__762 = size__25(values__760), i__763 = 0;
            while (true) {
                var B764 = value__761, B767 = false;
                if (($T)(B764))
                    B767 = B764;
                else
                    B767 = GE__507(i__763, n__762);
                var B768 = not__21(B767);
                if (($T)(B768)) {
                    (function B765(i__766) {
                        return(value__761 = function__759(values__760[i__766]));
                    }(i__763));
                    i__763 = inc__29(i__763);
                } else
                    break;
            }
            return(value__761);
        }, false);
    (exports)['any?'] = anyQ__447;
}
{
    var memberQ__781 = Mmake_function__13('memberQ', function B773(value__774, array__775) {
            var B776 = $SL.call(arguments, 2), B777 = Mkeys__206(B776, { 'test': binaryEE__38 }), test__778 = B777['test'];
            return(anyQ__447(function B779(other_value__780) {
                return(test__778(value__774, other_value__780));
            }, array__775));
        }, false);
    (exports)['member?'] = memberQ__781;
}
{
    var everyQ__786 = Mmake_function__13('everyQ', function B783(function__784, array__785) {
            return(not__21(anyQ__447(complement__333(function__784), array__785)));
        }, false);
    (exports)['every?'] = everyQ__786;
}
{
    var map__806 = Mmake_function__13('map', function B794(function__795) {
            var arrays__796 = $SL.call(arguments, 1), result__797 = [];
            if (($T)(emptyQ__102(rest__110(arrays__796)))) {
                var B798 = first__124(arrays__796), B799 = false, B800 = false, B801 = [B798];
                while (true) {
                    var B802 = B799, B807 = false;
                    if (($T)(B802))
                        B807 = B802;
                    else
                        B807 = anyQ__447(emptyQ__102, B801);
                    var B808 = not__21(B807);
                    if (($T)(B808)) {
                        var item__803 = first__124(B798);
                        (function B804(item__805) {
                            return(push_last__161(result__797, function__795(item__805)));
                        }(item__803));
                        B798 = rest__110(B798);
                        B801 = [B798];
                    } else
                        break;
                }
                B800;
            } else
                while (($T)(not__21(anyQ__447(emptyQ__102, arrays__796)))) {
                    push_last__161(result__797, apply__209(function__795, map__806(first__124, arrays__796)));
                    arrays__796 = map__806(rest__110, arrays__796);
                }
            return(result__797);
        }, false);
    (exports)['map'] = map__806;
}
{
    var do__827 = Mmake_function__13('Rdo', function B816(function__817) {
            var arrays__818 = $SL.call(arguments, 1);
            if (($T)(emptyQ__102(rest__110(arrays__818)))) {
                var B819 = first__124(arrays__818), B820 = false, B821 = false, B822 = [B819];
                while (true) {
                    var B823 = B820, B828 = false;
                    if (($T)(B823))
                        B828 = B823;
                    else
                        B828 = anyQ__447(emptyQ__102, B822);
                    var B829 = not__21(B828);
                    if (($T)(B829)) {
                        var item__824 = first__124(B819);
                        (function B825(item__826) {
                            return(function__817(item__826));
                        }(item__824));
                        B819 = rest__110(B819);
                        B822 = [B819];
                    } else
                        break;
                }
                B821;
            } else
                while (($T)(not__21(anyQ__447(emptyQ__102, arrays__818)))) {
                    apply__209(function__817, map__806(first__124, arrays__818));
                    arrays__818 = map__806(rest__110, arrays__818);
                }
            return(false);
        }, false);
    (exports)['do'] = do__827;
}
{
    var choose__658 = Mmake_function__13('choose', function B837(function__838, array__839) {
            var result__840 = [], B841 = array__839, B842 = false, B843 = false, B844 = [B841];
            while (true) {
                var B845 = B842, B849 = false;
                if (($T)(B845))
                    B849 = B845;
                else
                    B849 = anyQ__447(emptyQ__102, B844);
                var B850 = not__21(B849);
                if (($T)(B850)) {
                    var element__846 = first__124(B841);
                    (function B847(element__848) {
                        if (($T)(function__838(element__848)))
                            return(push_last__161(result__840, element__848));
                        else
                            return(false);
                    }(element__846));
                    B841 = rest__110(B841);
                    B844 = [B841];
                } else
                    break;
            }
            B843;
            return(result__840);
        }, false);
    (exports)['choose'] = choose__658;
}
{
    var copy_sequence__863 = Mmake_function__13('copy_sequence', function B855(array__856) {
            var B857 = $SL.call(arguments, 1), B858 = Mkeys__206(B857, {
                    'start': 0,
                    'end': false
                }), start__859 = B858['start'], end__860 = B858['end'], B861 = end__860, end__862 = false;
            if (($T)(B861))
                end__862 = B861;
            else
                end__862 = (undefined);
            return(slice__196(array__856, start__859, end__862));
        }, false);
    (exports)['copy-sequence'] = copy_sequence__863;
}
{
    var make__616 = Mmake_function__13('make', function B865(type__866) {
            var arguments__867 = $SL.call(arguments, 1), object__868 = new(type__866);
            apply__209(initialize__869, object__868, arguments__867);
            return(object__868);
        }, false);
    (exports)['make'] = make__616;
}
{
    var object_properties__656 = Mmake_function__13('object_properties', function B875(object__876) {
            var B877 = $SL.call(arguments, 1), B878 = Mkeys__206(B877, { 'inherited?': false }), inheritedQ__879 = B878['inherited?'], result__880 = [];
            if (($T)(instanceQ__373(object__876, LarrayG__4))) {
                var B881 = size__25(object__876), i__882 = 0;
                while (($T)(not__21(binaryGE__234(i__882, B881)))) {
                    (function B883(i__884) {
                        return(push_last__161(result__880, i__884));
                    }(i__882));
                    i__882 = inc__29(i__882);
                }
                false;
            } else {
                var i__885 = false;
                for (i__885 in object__876) (inheritedQ__879||$HP.call(object__876, i__885)) &&result__880.push(i__885);
            }
            return(result__880);
        }, false);
    (exports)['object-properties'] = object_properties__656;
}
{
    var object_values__889 = Mmake_function__13('object_values', function B887(object__888) {
            return(map__806(curry__297(get__596, object__888), object_properties__656(object__888)));
        }, false);
    (exports)['object-values'] = object_values__889;
}
{
    var initialize__869 = Mmake_generic__386('initialize');
    (exports)['initialize'] = initialize__869;
}
{
    var B895 = $K('inherited?'), initialize__869 = Mmake_method__387('initialize', function B896(object__897) {
            var rest__898 = $SL.call(arguments, 1), arguments__899 = as_object__515(rest__898), B900 = type__368(object__897)['%properties'];
            if (($T)(B900)) {
                var properties__901 = B900;
                do__827(function B902(property__903) {
                    var B907 = false;
                    if (($T)(not__21(hasQ__378(LobjectG__1['prototype'], property__903))))
                        B907 = typeof(object__897[property__903]) === 'undefined';
                    else
                        B907 = false;
                    if (($T)(B907)) {
                        var B904 = arguments__899[property__903], value__906 = false;
                        if (($T)(B904))
                            value__906 = B904;
                        else {
                            var value__905 = properties__901[property__903];
                            if (($T)(value__905))
                                value__906 = value__905();
                            else
                                value__906 = false;
                        }
                        return(object__897[property__903] = value__906);
                    } else
                        return(false);
                }, object_properties__656(properties__901, B895, true));
            }
            return(object__897);
        }, false, LobjectG__1, initialize__869);
    (exports)['initialize'] = initialize__869;
}
{
    var Lhash_symbolG__909 = Mmake_class__51(LobjectG__1, { 'name': false }, function Lhash_symbolG__908() {
            var B910 = (this);
            return(B910['name'] = (undefined));
        });
    (exports)['<hash-symbol>'] = Lhash_symbolG__909;
}
{
    var key__911 = make__616(Lhash_symbolG__909, B607, 'key');
    $KEY = key__911;
}
{
    var rest__912 = make__616(Lhash_symbolG__909, B607, 'rest');
    $REST = rest__912;
}
{
    var get__596 = Mmake_function__13('get', function B920(object__921) {
            var properties__922 = $SL.call(arguments, 1), result__923 = false, B924 = properties__922, B925 = false, B926 = false, B927 = [B924];
            while (true) {
                var B928 = B925, B932 = false;
                if (($T)(B928))
                    B932 = B928;
                else
                    B932 = anyQ__447(emptyQ__102, B927);
                var B933 = not__21(B932);
                if (($T)(B933)) {
                    var property__929 = first__124(B924);
                    if (($T)(not__21(hasQ__378(object__921, property__929)))) {
                        B926 = result__923 = false;
                        B925 = true;
                    } else {
                        (function B930(property__931) {
                            result__923 = object__921[property__931];
                            return(object__921 = result__923);
                        }(property__929));
                        B924 = rest__110(B924);
                        B927 = [B924];
                    }
                } else
                    break;
            }
            B926;
            return(result__923);
        }, false);
    (exports)['get'] = get__596;
}
{
    var get_setter__615 = Mmake_function__13('get_setter', function B935(object__936) {
            var propertiesSvalue__937 = $SL.call(arguments, 1);
            if (($T)(LE__486(size__25(propertiesSvalue__937), 2))) {
                var B940 = first__124(propertiesSvalue__937);
                return(object__936[B940] = second__133(propertiesSvalue__937));
            } else {
                var property__938 = first__124(propertiesSvalue__937), object2__939 = false;
                if (($T)(hasQ__378(object__936, property__938)))
                    object2__939 = object__936[property__938];
                else
                    object2__939 = object__936[property__938] = make_object__579();
                return(apply__209(B935, object2__939, rest__110(propertiesSvalue__937)));
            }
        }, true);
    (exports)['get-setter'] = get_setter__615;
}
{
    var split__949 = Mmake_function__13('split', function B944(string__945, separator__946) {
            var B947 = string__945, B948 = separator__946;
            return(B947['split'](B948));
        }, false);
    (exports)['split'] = split__949;
}
{
    var split_with__959 = Mmake_function__13('split_with', function B952(function__953, array__954) {
            var a__955 = [], b__956 = [];
            do__827(function B957(item__958) {
                var B960 = false;
                if (($T)(function__953(item__958)))
                    B960 = a__955;
                else
                    B960 = b__956;
                return(push_last__161(B960, item__958));
            }, array__954);
            return([
                a__955,
                b__956
            ]);
        }, false);
    (exports)['split-with'] = split_with__959;
}
{
    var as_hex_string__968 = Mmake_function__13('as_hex_string', function B964(number__965) {
            var B966 = number__965, B967 = 16;
            return(B966['toString'](B967));
        }, false);
    (exports)['as-hex-string'] = as_hex_string__968;
}
{
    var description__969 = Mmake_generic__386('description');
    (exports)['description'] = description__969;
}
{
    var description__969 = Mmake_method__387('description', function B971(number__972) {
            return('' + number__972);
        }, false, LnumberG__3, description__969);
    (exports)['description'] = description__969;
}
{
    var description__969 = Mmake_method__387('description', function B978(string__979) {
            var B980 = string__979, B981 = '"', B982 = '\\"', B983 = 'g', escaped__984 = B980['replace'](B981, B982, B983);
            return('"' + escaped__984 + '"');
        }, false, LstringG__2, description__969);
    (exports)['description'] = description__969;
}
{
    var description__969 = Mmake_method__387('description', function B986(array__987) {
            return('(' + join__557(map__806(description__969, array__987), ' ') + ')');
        }, false, LarrayG__4, description__969);
    (exports)['description'] = description__969;
}
{
    var description__969 = Mmake_method__387('description', function B989(value__990) {
            if (($T)(value__990))
                return('#t');
            else
                return('#f');
        }, false, LbooleanG__5, description__969);
    (exports)['description'] = description__969;
}
{
    var description__969 = Mmake_method__387('description', function B993(symbol__994) {
            var B995 = get__596(symbol__994, 'module'), B997 = false;
            if (($T)(B995)) {
                var module__996 = B995;
                B997 = concatenate__406(module__996, '::');
            } else
                B997 = '';
            var B998 = symbol_name__597(symbol__994);
            return(B997 + B998);
        }, false, LsymbolG__581, description__969);
    (exports)['description'] = description__969;
}
{
    var description__969 = Mmake_method__387('description', function B1000(keyword__1001) {
            return(symbol_name__597(keyword__1001) + ':');
        }, false, LkeywordG__54, description__969);
    (exports)['description'] = description__969;
}
{
    var description__969 = Mmake_method__387('description', function B1003(symbol__1004) {
            return('#' + symbol_name__597(symbol__1004));
        }, false, Lhash_symbolG__909, description__969);
    (exports)['description'] = description__969;
}
{
    var min__1005 = (Math.min);
    (exports)['min'] = min__1005;
}
{
    var max__1006 = (Math.max);
    (exports)['max'] = max__1006;
}
{
    var abs__1007 = (Math.abs);
    (exports)['abs'] = abs__1007;
}
{
    var round__1008 = (Math.round);
    (exports)['round'] = round__1008;
}
{
    var floor__1009 = (Math.floor);
    (exports)['floor'] = floor__1009;
}
{
    var ceil__1010 = (Math.ceil);
    (exports)['ceil'] = ceil__1010;
}
{
    var sin__1011 = (Math.sin);
    (exports)['sin'] = sin__1011;
}
{
    var cos__1012 = (Math.cos);
    (exports)['cos'] = cos__1012;
}
{
    var atan2__1013 = (Math.atan2);
    (exports)['atan2'] = atan2__1013;
}
{
    var expt__1014 = (Math.pow);
    (exports)['expt'] = expt__1014;
}
{
    var sqrt__1015 = (Math.sqrt);
    (exports)['sqrt'] = sqrt__1015;
}
{
    var mod__1020 = Mmake_function__13('mod', function B1017(number1__1018, number2__1019) {
            return(number1__1018 % number2__1019);
        }, false);
    (exports)['mod'] = mod__1020;
}
{
    var Bpi__1021 = (Math.PI);
    (exports)['$pi'] = Bpi__1021;
}
var Bradiant__1022 = Bpi__1021 / 180;
{
    var as_radiant__1027 = Mmake_function__13('as_radiant', function B1024(number__1025) {
            return(T__1026(number__1025, Bradiant__1022));
        }, false);
    (exports)['as-radiant'] = as_radiant__1027;
}
{
    var signal__1031 = Mmake_function__13('signal', function B1029(error__1030) {
            throw(error__1030);
            return(false);
        }, false);
    (exports)['signal'] = signal__1031;
}
{
    var extendN__1050 = Mmake_function__13('extendN', function B1039(object1__1040, object2__1041) {
            var B1042 = object_properties__656(object2__1041), B1043 = false, B1044 = false, B1045 = [B1042];
            while (true) {
                var B1046 = B1043, B1051 = false;
                if (($T)(B1046))
                    B1051 = B1046;
                else
                    B1051 = anyQ__447(emptyQ__102, B1045);
                var B1052 = not__21(B1051);
                if (($T)(B1052)) {
                    var key__1047 = first__124(B1042);
                    (function B1048(key__1049) {
                        return(get_setter__615(object1__1040, key__1049, get__596(object2__1041, key__1049)));
                    }(key__1047));
                    B1042 = rest__110(B1042);
                    B1045 = [B1042];
                } else
                    break;
            }
            B1044;
            return(object1__1040);
        }, false);
    (exports)['extend!'] = extendN__1050;
}
{
    var as_property_list__1076 = Mmake_function__13('as_property_list', function B1062(object__1063) {
            var B1064 = $SL.call(arguments, 1), B1065 = Mkeys__206(B1064, { 'keywords?': false }), keywordsQ__1066 = B1065['keywords?'], result__1067 = [], B1068 = object_properties__656(object__1063), B1069 = false, B1070 = false, B1071 = [B1068];
            while (true) {
                var B1072 = B1069, B1078 = false;
                if (($T)(B1072))
                    B1078 = B1072;
                else
                    B1078 = anyQ__447(emptyQ__102, B1071);
                var B1079 = not__21(B1078);
                if (($T)(B1079)) {
                    var key__1073 = first__124(B1068);
                    (function B1074(key__1075) {
                        var B1077 = false;
                        if (($T)(keywordsQ__1066))
                            B1077 = keyword__65(as_string__80(key__1075));
                        else
                            B1077 = key__1075;
                        push_last__161(result__1067, B1077);
                        return(push_last__161(result__1067, get__596(object__1063, key__1075)));
                    }(key__1073));
                    B1068 = rest__110(B1068);
                    B1071 = [B1068];
                } else
                    break;
            }
            B1070;
            return(result__1067);
        }, false);
    (exports)['as-property-list'] = as_property_list__1076;
}
{
    var as_association_list__1103 = Mmake_function__13('as_association_list', function B1089(object__1090) {
            var B1091 = $SL.call(arguments, 1), B1092 = Mkeys__206(B1091, { 'keywords?': false }), keywordsQ__1093 = B1092['keywords?'], result__1094 = [], B1095 = object_properties__656(object__1090), B1096 = false, B1097 = false, B1098 = [B1095];
            while (true) {
                var B1099 = B1096, B1107 = false;
                if (($T)(B1099))
                    B1107 = B1099;
                else
                    B1107 = anyQ__447(emptyQ__102, B1098);
                var B1108 = not__21(B1107);
                if (($T)(B1108)) {
                    var key__1100 = first__124(B1095);
                    (function B1101(key__1102) {
                        var B1104 = false;
                        if (($T)(keywordsQ__1093))
                            B1104 = keyword__65(as_string__80(key__1102));
                        else
                            B1104 = key__1102;
                        var B1105 = get__596(object__1090, key__1102), B1106 = [
                                B1104,
                                B1105
                            ];
                        return(push_last__161(result__1094, B1106));
                    }(key__1100));
                    B1095 = rest__110(B1095);
                    B1098 = [B1095];
                } else
                    break;
            }
            B1097;
            return(result__1094);
        }, false);
    (exports)['as-association-list'] = as_association_list__1103;
}
{
    var starts_withQ__1117 = Mmake_function__13('starts_withQ', function B1112(string__1113, prefix__1114) {
            var B1115 = string__1113, B1116 = prefix__1114, B1118 = B1115['indexOf'](B1116);
            return(binaryEE__38(B1118, 0));
        }, false);
    (exports)['starts-with?'] = starts_withQ__1117;
}
{
    var evenQ__1122 = Mmake_function__13('evenQ', function B1120(number__1121) {
            return(binaryEE__38(number__1121 % 2, 0));
        }, false);
    (exports)['even?'] = evenQ__1122;
}
{
    var oddQ__1126 = Mmake_function__13('oddQ', function B1124(number__1125) {
            return(binaryEE__38(number__1125 % 2, 1));
        }, false);
    (exports)['odd?'] = oddQ__1126;
}
{
    var group_by__1136 = Mmake_function__13('group_by', function B1129(predicate__1130, items__1131) {
            return(reduce__210(function B1132(result__1133, item__1134) {
                var key__1135 = predicate__1130(item__1134);
                if (($T)(hasQ__378(result__1133, key__1135)))
                    push_last__161(get__596(result__1133, key__1135), item__1134);
                else
                    get_setter__615(result__1133, key__1135, [item__1134]);
                return(result__1133);
            }, make_object__579(), items__1131));
        }, false);
    (exports)['group-by'] = group_by__1136;
}
var wrap_object__1142 = Mmake_function__13('wrap_object', function B1138(object__1139) {
        var rest__1140 = $SL.call(arguments, 1), result__1141 = Object.create(object__1139);
        extendN__1050(result__1141, as_object__515(rest__1140));
        return(result__1141);
    }, false);
var unwrap_object__1146 = Mmake_function__13('unwrap_object', function B1144(object__1145) {
        return(object__1145['__proto__']);
    }, false);
{
    var update_with__1159 = Mmake_function__13('update_with', function B1150(fn__1151, obj__1152) {
            var objs__1153 = $SL.call(arguments, 2);
            return(do__827(function B1154(obj2__1155) {
                return(do__827(function B1156(property__1157) {
                    var value__1158 = get__596(obj2__1155, property__1157), B1160 = false;
                    if (($T)(hasQ__378(obj__1152, property__1157)))
                        B1160 = fn__1151(get__596(obj__1152, property__1157), value__1158);
                    else
                        B1160 = value__1158;
                    return(get_setter__615(obj__1152, property__1157, B1160));
                }, object_properties__656(obj2__1155)));
            }, objs__1153));
        }, false);
    (exports)['update-with'] = update_with__1159;
}
{
    var as_set__1166 = Mmake_function__13('as_set', function B1162(values__1163) {
            var set__1164 = [];
            return(set_unionN__1165(set__1164, values__1163));
        }, false);
    (exports)['as-set'] = as_set__1166;
}
{
    var set_addN__1171 = Mmake_function__13('set_addN', function B1168(set__1169, object__1170) {
            if (($T)(not__21(memberQ__781(object__1170, set__1169))))
                return(push_last__161(set__1169, object__1170));
            else
                return(false);
        }, false);
    (exports)['set-add!'] = set_addN__1171;
}
{
    var set_removeN__1172 = removeN__735;
    (exports)['set-remove!'] = set_removeN__1172;
}
{
    var set_unionN__1165 = Mmake_function__13('set_unionN', function B1174(set1__1175, set2__1176) {
            do__827(curry__297(set_addN__1171, set1__1175), set2__1176);
            return(set1__1175);
        }, false);
    (exports)['set-union!'] = set_unionN__1165;
}
{
    var set_subtractN__1181 = Mmake_function__13('set_subtractN', function B1178(set1__1179, set2__1180) {
            do__827(curry__297(set_removeN__1172, set1__1179), set2__1180);
            return(set1__1179);
        }, false);
    (exports)['set-subtract!'] = set_subtractN__1181;
}
{
    var chain_object__1186 = Mmake_function__13('chain_object', function B1183(object1__1184, object2__1185) {
            object2__1185['__proto__'] = object1__1184['__proto__'];
            object1__1184['__proto__'] = object2__1185;
            return(object1__1184);
        }, false);
    (exports)['chain-object'] = chain_object__1186;
}
{
    var unchain_object__1190 = Mmake_function__13('unchain_object', function B1188(object__1189) {
            var B1191 = false;
            if (($T)(object__1189['__proto__']))
                B1191 = object__1189['__proto__']['__proto__'];
            else
                B1191 = false;
            object__1189['__proto__'] = B1191;
            return(object__1189);
        }, false);
    (exports)['unchain-object'] = unchain_object__1190;
}
{
    var as_hex_string__968 = Mmake_function__13('as_hex_string', function B1195(number__1196) {
            var B1197 = number__1196, B1198 = 16;
            return(B1197['toString'](B1198));
        }, false);
    (exports)['as-hex-string'] = as_hex_string__968;
}
{
    var make_plain_object__1201 = Mmake_function__13('make_plain_object', function B1200() {
            return((Object.create(null)));
        }, false);
    (exports)['make-plain-object'] = make_plain_object__1201;
}
{
    var ___714 = Mmake_function__13('_', function B1203(minuend__1204) {
            var subtrahends__1205 = $SL.call(arguments, 1);
            if (($T)(emptyQ__102(subtrahends__1205)))
                return(-(minuend__1204));
            else
                return(reduce__210(binary___354, minuend__1204, subtrahends__1205));
        }, false);
    (exports)['-'] = ___714;
}
{
    var P__625 = Mmake_function__13('P', function B1207() {
            var numbers__1208 = $SL.call(arguments, 0);
            if (($T)(emptyQ__102(numbers__1208)))
                return(0);
            else
                return(reduce1__211(binaryP__349, numbers__1208));
        }, false);
    (exports)['+'] = P__625;
}
{
    var T__1026 = Mmake_function__13('T', function B1210() {
            var numbers__1211 = $SL.call(arguments, 0);
            if (($T)(emptyQ__102(numbers__1211)))
                return(1);
            else
                return(reduce1__211(binaryT__359, numbers__1211));
        }, false);
    (exports)['*'] = T__1026;
}
{
    var S__1217 = Mmake_function__13('S', function B1213(numerator__1214) {
            var denominators__1215 = $SL.call(arguments, 1);
            if (($T)(emptyQ__102(denominators__1215)))
                return(Mdivide__1216(1, numerator__1214));
            else
                return(reduce__210(binaryS__364, numerator__1214, denominators__1215));
        }, false);
    (exports)['/'] = S__1217;
}
{
    var disjoin__1228 = Mmake_function__13('disjoin', function B1221(predicate1__1222) {
            var predicates__1223 = $SL.call(arguments, 1);
            return(function B1224() {
                var arguments__1225 = $SL.call(arguments, 0);
                return(anyQ__447(function B1226(predicate__1227) {
                    return(apply__209(predicate__1227, arguments__1225));
                }, cons__79(predicate1__1222, predicates__1223)));
            });
        }, false);
    (exports)['disjoin'] = disjoin__1228;
}
{
    var conjoin__1240 = Mmake_function__13('conjoin', function B1232(predicate1__1233) {
            var predicates__1234 = $SL.call(arguments, 1);
            return(function B1235() {
                var arguments__1236 = $SL.call(arguments, 0), value__1237 = false;
                if (($T)(everyQ__786(function B1238(predicate__1239) {
                        return(value__1237 = apply__209(predicate__1239, arguments__1236));
                    }, cons__79(predicate1__1233, predicates__1234))))
                    return(value__1237);
                else
                    return(false);
            });
        }, false);
    (exports)['conjoin'] = conjoin__1240;
}
{
    var ignore__1243 = Mmake_function__13('ignore', function B1242() {
            return(false);
        }, false);
    (exports)['ignore'] = ignore__1243;
}
{
    var set_timeout__1244 = (setTimeout);
    (exports)['set-timeout'] = set_timeout__1244;
}
{
    var clear_timeout__1245 = (clearTimeout);
    (exports)['clear-timeout'] = clear_timeout__1245;
}
{
    var set_interval__1246 = (setInterval);
    (exports)['set-interval'] = set_interval__1246;
}
{
    var clear_interval__1247 = (clearInterval);
    (exports)['clear-interval'] = clear_interval__1247;
}
{
    var B1253 = $K('start'), B1254 = $K('end'), partition__1265 = Mmake_function__13('partition', function B1255(count__1256, elements__1257) {
            var B1258 = $SL.call(arguments, 2), B1259 = Mkeys__206(B1258, { 'step': count__1256 }), step__1260 = B1259['step'], result__1261 = [], total__1262 = size__25(elements__1257), last_index__1263 = 0;
            while (($T)(L__259(last_index__1263, total__1262))) {
                var new_index__1264 = P__625(last_index__1263, count__1256);
                push_last__161(result__1261, copy_sequence__863(elements__1257, B1253, last_index__1263, B1254, new_index__1264));
                last_index__1263 = new_index__1264;
            }
            return(result__1261);
        }, false);
    (exports)['partition'] = partition__1265;
}
