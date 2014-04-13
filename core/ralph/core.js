{
    var $module = Object.create(null);
    ($module)['%export'] = function B7(name__8, value__9) {
        var B10 = (exports);
        return(B10[name__8] = value__9);
    };
}
false;
{
    ($module)['<object>'] = (Object);
    ($module)['%export']('<object>', ($module)['<object>']);
}
{
    ($module)['<string>'] = (String);
    ($module)['%export']('<string>', ($module)['<string>']);
}
{
    ($module)['<number>'] = (Number);
    ($module)['%export']('<number>', ($module)['<number>']);
}
{
    ($module)['<array>'] = (Array);
    ($module)['%export']('<array>', ($module)['<array>']);
}
{
    ($module)['<boolean>'] = (Boolean);
    ($module)['%export']('<boolean>', ($module)['<boolean>']);
}
{
    ($module)['<function>'] = (Function);
    ($module)['%export']('<function>', ($module)['<function>']);
}
{
    ($module)['<error>'] = (Error);
    ($module)['%export']('<error>', ($module)['<error>']);
}
($module)['<error>']['%properties'] = { 'message': false };
{
    ($module)['%annotate-function'] = function B12(function__13, name__14, setterQ__15) {
        function__13['%name'] = name__14;
        {
            function__13['%setter?'] = setterQ__15;
            return(function__13);
        }
    };
    ($module)['%export']('%annotate-function', ($module)['%annotate-function']);
}
{
    {
        ($module)['true?'] = function B17(value__18) {
            return(value__18 != (null) && value__18 !== false);
        };
        ($module)['%export']('true?', ($module)['true?']);
    }
    ($module)['%annotate-function'](($module)['true?'], 'true?', false);
}
$T = ($module)['true?'];
{
    {
        ($module)['not'] = function B20(value__21) {
            return(!(($module)['true?'](value__21)));
        };
        ($module)['%export']('not', ($module)['not']);
    }
    ($module)['%annotate-function'](($module)['not'], 'not', false);
}
{
    {
        ($module)['size'] = function B23(object__24) {
            return((object__24 || false)['length'] || 0);
        };
        ($module)['%export']('size', ($module)['size']);
    }
    ($module)['%annotate-function'](($module)['size'], 'size', false);
}
$SL = [].slice;
{
    {
        ($module)['inc'] = function B26(number__27) {
            return(number__27 + 1);
        };
        ($module)['%export']('inc', ($module)['inc']);
    }
    ($module)['%annotate-function'](($module)['inc'], 'inc', false);
}
{
    {
        ($module)['dec'] = function B29(number__30) {
            return(number__30 - 1);
        };
        ($module)['%export']('dec', ($module)['dec']);
    }
    ($module)['%annotate-function'](($module)['dec'], 'dec', false);
}
{
    {
        ($module)['binary=='] = function B32(object1__33, object2__34) {
            return(object1__33 === object2__34);
        };
        ($module)['%export']('binary==', ($module)['binary==']);
    }
    ($module)['%annotate-function'](($module)['binary=='], 'binary==', false);
}
{
    {
        ($module)['%inherit'] = function B36(class__37, superclass__38) {
            class__37['%superclass'] = superclass__38;
            {
                class__37['prototype']['__proto__'] = superclass__38['prototype'];
                {
                    var super_properties__39 = superclass__38['%properties'];
                    {
                        if (($T)(super_properties__39 instanceof ($module)['<object>']))
                            class__37['%properties']['__proto__'] = super_properties__39;
                        return(class__37);
                    }
                }
            }
        };
        ($module)['%export']('%inherit', ($module)['%inherit']);
    }
    ($module)['%annotate-function'](($module)['%inherit'], '%inherit', false);
}
{
    {
        ($module)['%make-class'] = function B42(superclass__43, properties__44, constructor__45) {
            if (($T)(($module)['not'](constructor__45)))
                constructor__45 = function B46() {
                    return(false);
                };
            {
                constructor__45['%properties'] = properties__44;
                {
                    constructor__45['%class?'] = true;
                    {
                        if (($T)(superclass__43))
                            ($module)['%inherit'](constructor__45, superclass__43);
                        return(constructor__45);
                    }
                }
            }
        };
        ($module)['%export']('%make-class', ($module)['%make-class']);
    }
    ($module)['%annotate-function'](($module)['%make-class'], '%make-class', false);
}
{
    ($module)['%keywords'] = {};
    ($module)['%export']('%keywords', ($module)['%keywords']);
}
{
    ($module)['<keyword>'] = ($module)['%make-class'](($module)['<object>'], { 'name': false }, function LkeywordG__47() {
        var B48 = (this);
        return(B48['name'] = (undefined));
    });
    ($module)['%export']('<keyword>', ($module)['<keyword>']);
}
{
    {
        ($module)['keyword'] = function B52(name__53) {
            var B54 = name__53;
            {
                var nameT__55 = B54['toLowerCase']();
                {
                    var B56 = ($module)['%keywords'][nameT__55];
                    if (($T)(B56))
                        return(B56);
                    else {
                        var keyword__57 = new(($module)['<keyword>']);
                        {
                            keyword__57['name'] = name__53;
                            {
                                ($module)['%keywords'][name__53] = keyword__57;
                                return(keyword__57);
                            }
                        }
                    }
                }
            }
        };
        ($module)['%export']('keyword', ($module)['keyword']);
    }
    ($module)['%annotate-function'](($module)['keyword'], 'keyword', false);
}
$K = ($module)['keyword'];
($module)['*exit-function-counter*'] = 0;
{
    ($module)['<non-local-exit>'] = ($module)['%make-class'](($module)['<object>'], {}, function Lnon_local_exitG__58() {
        return(false);
    });
    ($module)['%export']('<non-local-exit>', ($module)['<non-local-exit>']);
}
{
    {
        ($module)['%make-exit-function'] = function B61() {
            var identifier__62 = ($module)['*exit-function-counter*'] = ($module)['+'](($module)['*exit-function-counter*'], 1);
            {
                var exit_function__66 = function B63(return_value__64) {
                    var condition__65 = new(($module)['<non-local-exit>']);
                    {
                        condition__65['identifier'] = identifier__62;
                        {
                            condition__65['return-value'] = return_value__64;
                            return(($module)['signal'](condition__65));
                        }
                    }
                };
                {
                    exit_function__66['identifier'] = identifier__62;
                    return(exit_function__66);
                }
            }
        };
        ($module)['%export']('%make-exit-function', ($module)['%make-exit-function']);
    }
    ($module)['%annotate-function'](($module)['%make-exit-function'], '%make-exit-function', false);
}
{
    {
        ($module)['%concat'] = function B70(array1__71, array2__72) {
            var B73 = array1__71;
            {
                var B74 = array2__72;
                return(B73['concat'](B74));
            }
        };
        ($module)['%export']('%concat', ($module)['%concat']);
    }
    ($module)['%annotate-function'](($module)['%concat'], '%concat', false);
}
{
    {
        ($module)['cons'] = function B76(value__77, rest__78) {
            return(($module)['%concat']([value__77], rest__78));
        };
        ($module)['%export']('cons', ($module)['cons']);
    }
    ($module)['%annotate-function'](($module)['cons'], 'cons', false);
}
{
    ($module)['as-string'] = (String);
    ($module)['%export']('as-string', ($module)['as-string']);
}
{
    ($module)['as-number'] = (Number);
    ($module)['%export']('as-number', ($module)['as-number']);
}
{
    {
        ($module)['as-array'] = function B80(arguments__81, skip__82) {
            return($SL.call(arguments__81, skip__82 || 0));
        };
        ($module)['%export']('as-array', ($module)['as-array']);
    }
    ($module)['%annotate-function'](($module)['as-array'], 'as-array', false);
}
{
    {
        ($module)['as-json'] = function B86(value__87) {
            var B88 = $SL.call(arguments, 1);
            {
                var B89 = ($module)['%keys'](B88, {
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
        ($module)['%export']('as-json', ($module)['as-json']);
    }
    ($module)['%annotate-function'](($module)['as-json'], 'as-json', false);
}
{
    ($module)['parse-json'] = (JSON.parse);
    ($module)['%export']('parse-json', ($module)['parse-json']);
}
{
    ($module)['parse-number'] = (parseFloat);
    ($module)['%export']('parse-number', ($module)['parse-number']);
}
{
    {
        ($module)['char-code'] = function B95(char__96) {
            var B97 = char__96;
            {
                var B98 = 0;
                return(B97['charCodeAt'](B98));
            }
        };
        ($module)['%export']('char-code', ($module)['char-code']);
    }
    ($module)['%annotate-function'](($module)['char-code'], 'char-code', false);
}
{
    ($module)['code-char'] = (String.fromCharCode);
    ($module)['%export']('code-char', ($module)['code-char']);
}
{
    {
        ($module)['empty?'] = function B100(sequence__101) {
            return(($module)['binary=='](($module)['size'](sequence__101), 0));
        };
        ($module)['%export']('empty?', ($module)['empty?']);
    }
    ($module)['%annotate-function'](($module)['empty?'], 'empty?', false);
}
{
    {
        ($module)['rest'] = function B105(sequence__106) {
            var B107 = sequence__106;
            {
                var B108 = 1;
                return(B107['slice'](B108));
            }
        };
        ($module)['%export']('rest', ($module)['rest']);
    }
    ($module)['%annotate-function'](($module)['rest'], 'rest', false);
}
{
    {
        ($module)['last'] = function B110(array__111) {
            return(array__111[($module)['dec'](($module)['size'](array__111), 1)]);
        };
        ($module)['%export']('last', ($module)['last']);
    }
    ($module)['%annotate-function'](($module)['last'], 'last', false);
}
{
    {
        ($module)['last-setter'] = function B113(array__114, value__115) {
            var B116 = ($module)['dec'](($module)['size'](array__114), 1);
            return(array__114[B116] = value__115);
        };
        ($module)['%export']('last-setter', ($module)['last-setter']);
    }
    ($module)['%annotate-function'](($module)['last-setter'], 'last-setter', true);
}
{
    {
        ($module)['first'] = function B118(sequence__119) {
            return(sequence__119[0]);
        };
        ($module)['%export']('first', ($module)['first']);
    }
    ($module)['%annotate-function'](($module)['first'], 'first', false);
}
{
    {
        ($module)['first-setter'] = function B121(array__122, value__123) {
            return(array__122[0] = value__123);
        };
        ($module)['%export']('first-setter', ($module)['first-setter']);
    }
    ($module)['%annotate-function'](($module)['first-setter'], 'first-setter', true);
}
{
    {
        ($module)['second'] = function B125(sequence__126) {
            return(sequence__126[1]);
        };
        ($module)['%export']('second', ($module)['second']);
    }
    ($module)['%annotate-function'](($module)['second'], 'second', false);
}
{
    {
        ($module)['second-setter'] = function B128(array__129, value__130) {
            return(array__129[1] = value__130);
        };
        ($module)['%export']('second-setter', ($module)['second-setter']);
    }
    ($module)['%annotate-function'](($module)['second-setter'], 'second-setter', true);
}
{
    {
        ($module)['third'] = function B132(sequence__133) {
            return(sequence__133[2]);
        };
        ($module)['%export']('third', ($module)['third']);
    }
    ($module)['%annotate-function'](($module)['third'], 'third', false);
}
{
    {
        ($module)['third-setter'] = function B135(array__136, value__137) {
            return(array__136[2] = value__137);
        };
        ($module)['%export']('third-setter', ($module)['third-setter']);
    }
    ($module)['%annotate-function'](($module)['third-setter'], 'third-setter', true);
}
{
    {
        ($module)['make-array'] = function B139() {
            var elements__140 = $SL.call(arguments, 0);
            return(elements__140);
        };
        ($module)['%export']('make-array', ($module)['make-array']);
    }
    ($module)['%annotate-function'](($module)['make-array'], 'make-array', false);
}
{
    {
        ($module)['push'] = function B144(array__145, value__146) {
            var B147 = array__145;
            {
                var B148 = value__146;
                {
                    B147['unshift'](B148);
                    return(value__146);
                }
            }
        };
        ($module)['%export']('push', ($module)['push']);
    }
    ($module)['%annotate-function'](($module)['push'], 'push', false);
}
{
    {
        ($module)['push-last'] = function B152(array__153, value__154) {
            var B155 = array__153;
            {
                var B156 = value__154;
                {
                    B155['push'](B156);
                    return(value__154);
                }
            }
        };
        ($module)['%export']('push-last', ($module)['push-last']);
    }
    ($module)['%annotate-function'](($module)['push-last'], 'push-last', false);
}
{
    {
        ($module)['pop'] = function B159(array__160) {
            var B161 = array__160;
            return(B161['shift']());
        };
        ($module)['%export']('pop', ($module)['pop']);
    }
    ($module)['%annotate-function'](($module)['pop'], 'pop', false);
}
{
    {
        ($module)['pop-last'] = function B164(array__165) {
            var B166 = array__165;
            return(B166['pop']());
        };
        ($module)['%export']('pop-last', ($module)['pop-last']);
    }
    ($module)['%annotate-function'](($module)['pop-last'], 'pop-last', false);
}
{
    {
        ($module)['but-last'] = function B171(array__172, n__173) {
            var B174 = array__172;
            {
                var B175 = 0;
                {
                    var B176 = (n__173 || 1) * -1;
                    return(B174['slice'](B175, B176));
                }
            }
        };
        ($module)['%export']('but-last', ($module)['but-last']);
    }
    ($module)['%annotate-function'](($module)['but-last'], 'but-last', false);
}
{
    {
        ($module)['slice'] = function B181(array__182, start__183, end__184) {
            var B185 = array__182;
            {
                var B186 = start__183;
                {
                    var B187 = end__184;
                    return(B185['slice'](B186, B187));
                }
            }
        };
        ($module)['%export']('slice', ($module)['slice']);
    }
    ($module)['%annotate-function'](($module)['slice'], 'slice', false);
}
{
    var B191 = $K('from-end?');
    {
        {
            ($module)['reduce1'] = function B192(function__193, values__194) {
                var B195 = $SL.call(arguments, 2);
                {
                    var B196 = ($module)['%keys'](B195, { 'from-end?': false });
                    {
                        var from_endQ__197 = B196['from-end?'];
                        if (($T)(($module)['empty?'](values__194)))
                            return(function__193());
                        else {
                            var B198 = false;
                            if (($T)(from_endQ__197))
                                B198 = [
                                    ($module)['last'](values__194),
                                    ($module)['but-last'](values__194)
                                ];
                            else
                                B198 = [
                                    ($module)['first'](values__194),
                                    ($module)['rest'](values__194)
                                ];
                            {
                                var B199 = [
                                        B191,
                                        from_endQ__197
                                    ];
                                {
                                    var B200 = ($module)['%concat'](B198, B199);
                                    return(($module)['apply'](($module)['reduce'], function__193, B200));
                                }
                            }
                        }
                    }
                }
            };
            ($module)['%export']('reduce1', ($module)['reduce1']);
        }
        ($module)['%annotate-function'](($module)['reduce1'], 'reduce1', false);
    }
}
{
    {
        ($module)['reduce'] = function B208(function__209, initial_value__210, values__211) {
            var B212 = $SL.call(arguments, 3);
            {
                var B213 = ($module)['%keys'](B212, { 'from-end?': false });
                {
                    var from_endQ__214 = B213['from-end?'];
                    {
                        var result__215 = initial_value__210;
                        {
                            if (($T)(from_endQ__214)) {
                                var values__216 = ($module)['reverse'](values__211);
                                {
                                    var B217 = ($module)['size'](values__216);
                                    {
                                        var i__218 = 0;
                                        {
                                            while (($T)(($module)['not'](($module)['binary>='](i__218, B217)))) {
                                                (function B219(i__220) {
                                                    return(result__215 = function__209(values__216[i__220], result__215));
                                                }(i__218));
                                                i__218 = ($module)['inc'](i__218);
                                            }
                                            false;
                                        }
                                    }
                                }
                            } else {
                                var B221 = ($module)['size'](values__211);
                                {
                                    var i__222 = 0;
                                    {
                                        while (($T)(($module)['not'](($module)['binary>='](i__222, B221)))) {
                                            (function B223(i__224) {
                                                return(result__215 = function__209(result__215, values__211[i__224]));
                                            }(i__222));
                                            i__222 = ($module)['inc'](i__222);
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
        ($module)['%export']('reduce', ($module)['reduce']);
    }
    ($module)['%annotate-function'](($module)['reduce'], 'reduce', false);
}
{
    {
        ($module)['reverse!'] = function B227(array__228) {
            var B229 = array__228;
            return(B229['reverse']());
        };
        ($module)['%export']('reverse!', ($module)['reverse!']);
    }
    ($module)['%annotate-function'](($module)['reverse!'], 'reverse!', false);
}
{
    {
        ($module)['reverse'] = function B231(array__232) {
            return(($module)['reverse!'](($module)['slice'](array__232)));
        };
        ($module)['%export']('reverse', ($module)['reverse']);
    }
    ($module)['%annotate-function'](($module)['reverse'], 'reverse', false);
}
{
    {
        ($module)['sort!'] = function B239(array__240) {
            var B241 = $SL.call(arguments, 1);
            {
                var B242 = ($module)['%keys'](B241, {
                        'test': ($module)['<'],
                        'key': ($module)['identity']
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
        ($module)['%export']('sort!', ($module)['sort!']);
    }
    ($module)['%annotate-function'](($module)['sort!'], 'sort!', false);
}
{
    var B253 = $K('test');
    {
        var B254 = $K('key');
        {
            {
                ($module)['sort'] = function B255(array__256) {
                    var B257 = $SL.call(arguments, 1);
                    {
                        var B258 = ($module)['%keys'](B257, {
                                'test': ($module)['<'],
                                'key': ($module)['identity']
                            });
                        {
                            var test__259 = B258['test'];
                            {
                                var key__260 = B258['key'];
                                return(($module)['sort!'](($module)['slice'](array__256), B253, test__259, B254, key__260));
                            }
                        }
                    }
                };
                ($module)['%export']('sort', ($module)['sort']);
            }
            ($module)['%annotate-function'](($module)['sort'], 'sort', false);
        }
    }
}
{
    {
        ($module)['apply'] = function B262(function__263) {
            var actual__264 = $SL.call(arguments, 1, -1);
            {
                var last__265 = arguments[($module)['size'](arguments) - 1];
                {
                    var arguments__266 = false;
                    if (($T)(($module)['binary=='](last__265, function__263)))
                        arguments__266 = actual__264;
                    else
                        arguments__266 = ($module)['%concat'](actual__264, last__265);
                    return(function__263['apply']((null), arguments__266));
                }
            }
        };
        ($module)['%export']('apply', ($module)['apply']);
    }
    ($module)['%annotate-function'](($module)['apply'], 'apply', false);
}
{
    {
        ($module)['curry'] = function B269(function__270) {
            var curried_args__271 = $SL.call(arguments, 1);
            return(function B272() {
                var args__273 = $SL.call(arguments, 0);
                return(($module)['apply'](function__270, ($module)['%concat'](curried_args__271, args__273)));
            });
        };
        ($module)['%export']('curry', ($module)['curry']);
    }
    ($module)['%annotate-function'](($module)['curry'], 'curry', false);
}
{
    {
        ($module)['rcurry'] = function B276(function__277) {
            var curried_args__278 = $SL.call(arguments, 1);
            return(function B279() {
                var args__280 = $SL.call(arguments, 0);
                return(($module)['apply'](function__277, ($module)['%concat'](args__280, curried_args__278)));
            });
        };
        ($module)['%export']('rcurry', ($module)['rcurry']);
    }
    ($module)['%annotate-function'](($module)['rcurry'], 'rcurry', false);
}
{
    {
        ($module)['always'] = function B283(value__284) {
            return(function B285() {
                return(value__284);
            });
        };
        ($module)['%export']('always', ($module)['always']);
    }
    ($module)['%annotate-function'](($module)['always'], 'always', false);
}
{
    {
        ($module)['repeatedly'] = function B289(function__290, count__291) {
            var result__292 = [];
            {
                var B293 = count__291;
                {
                    var i__294 = 0;
                    {
                        while (($T)(($module)['not'](($module)['binary>='](i__294, B293)))) {
                            (function B295(i__296) {
                                return(($module)['push-last'](result__292, function__290()));
                            }(i__294));
                            i__294 = ($module)['inc'](i__294);
                        }
                        return(result__292);
                    }
                }
            }
        };
        ($module)['%export']('repeatedly', ($module)['repeatedly']);
    }
    ($module)['%annotate-function'](($module)['repeatedly'], 'repeatedly', false);
}
{
    {
        ($module)['identity'] = function B298(value__299) {
            return(value__299);
        };
        ($module)['%export']('identity', ($module)['identity']);
    }
    ($module)['%annotate-function'](($module)['identity'], 'identity', false);
}
{
    {
        ($module)['complement'] = function B302(function__303) {
            return(function B304() {
                var arguments__305 = $SL.call(arguments, 0);
                return(($module)['not'](($module)['apply'](function__303, arguments__305)));
            });
        };
        ($module)['%export']('complement', ($module)['complement']);
    }
    ($module)['%annotate-function'](($module)['complement'], 'complement', false);
}
{
    {
        ($module)['compose'] = function B309() {
            var functions__310 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](functions__310)))
                return(($module)['identity']);
            else
                return(function B311() {
                    var arguments__312 = $SL.call(arguments, 0);
                    return(($module)['reduce'](function B313(function__314, value__315) {
                        return(function__314(value__315));
                    }, ($module)['apply'](($module)['last'](functions__310), arguments__312), ($module)['but-last'](functions__310), B191, true));
                });
        };
        ($module)['%export']('compose', ($module)['compose']);
    }
    ($module)['%annotate-function'](($module)['compose'], 'compose', false);
}
{
    ($module)['binary+'] = function B317(number1__318, number2__319) {
        return(number1__318 + number2__319);
    };
    ($module)['%annotate-function'](($module)['binary+'], 'binary+', false);
}
{
    ($module)['binary-'] = function B321(number1__322, number2__323) {
        return(number1__322 - number2__323);
    };
    ($module)['%annotate-function'](($module)['binary-'], 'binary-', false);
}
{
    ($module)['binary*'] = function B325(number1__326, number2__327) {
        return(number1__326 * number2__327);
    };
    ($module)['%annotate-function'](($module)['binary*'], 'binary*', false);
}
{
    ($module)['binary/'] = function B329(number1__330, number2__331) {
        return(number1__330 / number2__331);
    };
    ($module)['%annotate-function'](($module)['binary/'], 'binary/', false);
}
{
    {
        ($module)['type'] = function B333(object__334) {
            if (($T)(object__334))
                return(object__334['constructor']);
            else
                return(($module)['<boolean>']);
        };
        ($module)['%export']('type', ($module)['type']);
    }
    ($module)['%annotate-function'](($module)['type'], 'type', false);
}
{
    {
        ($module)['instance?'] = function B336(object__337, type__338) {
            if (($T)(object__337))
                return(object__337 instanceof type__338 || ($module)['binary=='](object__337['constructor'], type__338));
            else
                return(($module)['binary=='](type__338, ($module)['<boolean>']));
        };
        ($module)['%export']('instance?', ($module)['instance?']);
    }
    ($module)['%annotate-function'](($module)['instance?'], 'instance?', false);
}
$HP = Object.hasOwnProperty;
{
    {
        ($module)['has?'] = function B340(object__341, property__342) {
            return(($HP.call(object__341,property__342)));
        };
        ($module)['%export']('has?', ($module)['has?']);
    }
    ($module)['%annotate-function'](($module)['has?'], 'has?', false);
}
{
    {
        ($module)['%make-method'] = function B344(name__345, function__346, setterQ__347, type__348, existing__349) {
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
                                return(($module)['%make-generic'](name__345));
                        }
                    }
                }
            }
        };
        ($module)['%export']('%make-method', ($module)['%make-method']);
    }
    ($module)['%annotate-function'](($module)['%make-method'], '%make-method', false);
}
{
    {
        ($module)['%make-generic'] = function B353(name__354) {
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
        ($module)['%export']('%make-generic', ($module)['%make-generic']);
    }
    ($module)['%annotate-function'](($module)['%make-generic'], '%make-generic', false);
}
{
    {
        ($module)['%next-method'] = function B360(function__361) {
            var name__362 = function__361['%name'];
            {
                var proto__363 = function__361['%type']['prototype']['__proto__'];
                return(proto__363[name__362]);
            }
        };
        ($module)['%export']('%next-method', ($module)['%next-method']);
    }
    ($module)['%annotate-function'](($module)['%next-method'], '%next-method', false);
}
{
    {
        ($module)['concatenate'] = function B365() {
            var values__366 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](values__366)))
                return([]);
            else
                return(($module)['reduce1'](($module)['%concat'], values__366));
        };
        ($module)['%export']('concatenate', ($module)['concatenate']);
    }
    ($module)['%annotate-function'](($module)['concatenate'], 'concatenate', false);
}
{
    {
        ($module)['compare'] = function B369(function__370, object__371, objects__372) {
            var failedQ__373 = false;
            {
                while (true) {
                    var B374 = failedQ__373;
                    {
                        var B376 = false;
                        if (($T)(B374))
                            B376 = B374;
                        else
                            B376 = ($module)['empty?'](objects__372);
                        {
                            var B377 = ($module)['not'](B376);
                            if (($T)(B377)) {
                                var other__375 = ($module)['first'](objects__372);
                                {
                                    failedQ__373 = ($module)['not'](function__370(object__371, other__375));
                                    {
                                        objects__372 = ($module)['rest'](objects__372);
                                        object__371 = other__375;
                                    }
                                }
                            } else
                                break;
                        }
                    }
                }
                return(($module)['not'](failedQ__373));
            }
        };
        ($module)['%export']('compare', ($module)['compare']);
    }
    ($module)['%annotate-function'](($module)['compare'], 'compare', false);
}
{
    {
        ($module)['=='] = function B379(object__380) {
            var objects__381 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary=='], object__380, objects__381));
        };
        ($module)['%export']('==', ($module)['==']);
    }
    ($module)['%annotate-function'](($module)['=='], '==', false);
}
{
    ($module)['binary='] = ($module)['%make-generic']('binary=');
    ($module)['%export']('binary=', ($module)['binary=']);
}
{
    ($module)['binary<'] = ($module)['%make-generic']('binary<');
    ($module)['%export']('binary<', ($module)['binary<']);
}
{
    ($module)['binary='] = ($module)['%make-method']('binary=', function B383(object1__384, object2__385) {
        if (($T)(($module)['binary=='](($module)['type'](object1__384), ($module)['type'](object2__385))))
            return(($module)['binary=='](object1__384, object2__385));
        else
            return(false);
    }, false, ($module)['<object>'], ($module)['binary=']);
    ($module)['%export']('binary=', ($module)['binary=']);
}
{
    ($module)['binary='] = ($module)['%make-method']('binary=', function B394(array1__395, array2__396) {
        if (($T)(($module)['binary=='](($module)['size'](array1__395), ($module)['size'](array2__396)))) {
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
                                            B408 = ($module)['any?'](($module)['empty?'], B401);
                                        {
                                            var B409 = ($module)['not'](B408);
                                            if (($T)(B409)) {
                                                var item1__403 = ($module)['first'](B397);
                                                {
                                                    var item2__404 = ($module)['first'](B398);
                                                    if (($T)(($module)['not'](($module)['binary='](item1__403, item2__404)))) {
                                                        B400 = true;
                                                        B399 = true;
                                                    } else {
                                                        (function B405(item1__406, item2__407) {
                                                            return(false);
                                                        }(item1__403, item2__404));
                                                        {
                                                            B397 = ($module)['rest'](B397);
                                                            {
                                                                B398 = ($module)['rest'](B398);
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
                                return(($module)['not'](B400));
                            }
                        }
                    }
                }
            }
        } else
            return(false);
    }, false, ($module)['<array>'], ($module)['binary=']);
    ($module)['%export']('binary=', ($module)['binary=']);
}
($module)['binary=-dispatcher'] = ($module)['binary='];
{
    {
        ($module)['binary='] = function B412(object1__413, object2__414) {
            var B415 = false;
            if (($T)(($module)['not'](object1__413)))
                B415 = ($module)['not'](object2__414);
            else
                B415 = false;
            if (($T)(B415))
                return(B415);
            else
                return(($module)['binary=-dispatcher'](object1__413, object2__414));
        };
        ($module)['%export']('binary=', ($module)['binary=']);
    }
    ($module)['%annotate-function'](($module)['binary='], 'binary=', false);
}
{
    {
        ($module)['='] = function B417(object__418) {
            var objects__419 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary='], object__418, objects__419));
        };
        ($module)['%export']('=', ($module)['=']);
    }
    ($module)['%annotate-function'](($module)['='], '=', false);
}
{
    ($module)['binary<'] = ($module)['%make-method']('binary<', function B421(object1__422, object2__423) {
        if (($T)(($module)['binary=='](($module)['type'](object1__422), ($module)['type'](object2__423))))
            return(object1__422 < object2__423);
        else
            return(false);
    }, false, ($module)['<object>'], ($module)['binary<']);
    ($module)['%export']('binary<', ($module)['binary<']);
}
{
    {
        ($module)['<'] = function B425(object__426) {
            var objects__427 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary<'], object__426, objects__427));
        };
        ($module)['%export']('<', ($module)['<']);
    }
    ($module)['%annotate-function'](($module)['<'], '<', false);
}
{
    {
        ($module)['binary<='] = function B430(object1__431, object2__432) {
            if (($T)(object1__431))
                if (($T)(object2__432)) {
                    var B433 = ($module)['binary<'](object1__431, object2__432);
                    if (($T)(B433))
                        return(B433);
                    else
                        return(($module)['binary='](object1__431, object2__432));
                } else
                    return(false);
            else
                return(false);
        };
        ($module)['%export']('binary<=', ($module)['binary<=']);
    }
    ($module)['%annotate-function'](($module)['binary<='], 'binary<=', false);
}
{
    {
        ($module)['<='] = function B435(object__436) {
            var objects__437 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary<='], object__436, objects__437));
        };
        ($module)['%export']('<=', ($module)['<=']);
    }
    ($module)['%annotate-function'](($module)['<='], '<=', false);
}
{
    {
        ($module)['binary>'] = function B439(object1__440, object2__441) {
            if (($T)(object1__440))
                if (($T)(object2__441))
                    if (($T)(($module)['not'](($module)['binary<'](object1__440, object2__441))))
                        return(($module)['not'](($module)['binary='](object1__440, object2__441)));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
        ($module)['%export']('binary>', ($module)['binary>']);
    }
    ($module)['%annotate-function'](($module)['binary>'], 'binary>', false);
}
{
    {
        ($module)['>'] = function B443(object__444) {
            var objects__445 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary>'], object__444, objects__445));
        };
        ($module)['%export']('>', ($module)['>']);
    }
    ($module)['%annotate-function'](($module)['>'], '>', false);
}
{
    {
        ($module)['binary>='] = function B448(object1__449, object2__450) {
            var B451 = ($module)['not'](($module)['binary<'](object1__449, object2__450));
            if (($T)(B451))
                return(B451);
            else
                return(($module)['binary='](object1__449, object2__450));
        };
        ($module)['%export']('binary>=', ($module)['binary>=']);
    }
    ($module)['%annotate-function'](($module)['binary>='], 'binary>=', false);
}
{
    {
        ($module)['>='] = function B453(object__454) {
            var objects__455 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary>='], object__454, objects__455));
        };
        ($module)['%export']('>=', ($module)['>=']);
    }
    ($module)['%annotate-function'](($module)['>='], '>=', false);
}
{
    {
        ($module)['as-object'] = function B457(property_list__458) {
            var list__459 = ($module)['slice'](property_list__458);
            {
                var result__460 = {};
                {
                    while (($T)(($module)['>'](($module)['size'](list__459), 0))) {
                        var key__461 = ($module)['pop'](list__459);
                        {
                            var value__462 = ($module)['pop'](list__459);
                            {
                                var B463 = false;
                                if (($T)(($module)['instance?'](key__461, ($module)['<keyword>'])))
                                    B463 = key__461['name'];
                                else
                                    B463 = ($module)['as-string'](key__461);
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
        ($module)['%export']('as-object', ($module)['as-object']);
    }
    ($module)['%annotate-function'](($module)['as-object'], 'as-object', false);
}
{
    {
        ($module)['position'] = function B470(array__471, element__472) {
            var B473 = $SL.call(arguments, 2);
            {
                var B474 = ($module)['%keys'](B473, { 'start': 0 });
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
                                    if (($T)(($module)['>'](position__479, -1)))
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
        ($module)['%export']('position', ($module)['position']);
    }
    ($module)['%annotate-function'](($module)['position'], 'position', false);
}
{
    {
        ($module)['last-position'] = function B483(array__484, element__485) {
            var B486 = array__484;
            {
                var B487 = element__485;
                {
                    var position__488 = B486['lastIndexOf'](B487);
                    if (($T)(($module)['>'](position__488, -1)))
                        return(position__488);
                    else
                        return(false);
                }
            }
        };
        ($module)['%export']('last-position', ($module)['last-position']);
    }
    ($module)['%annotate-function'](($module)['last-position'], 'last-position', false);
}
{
    var B492 = $K('start');
    {
        {
            ($module)['count'] = function B493(item__494, array__495) {
                var result__496 = -1;
                {
                    var pos__497 = 0;
                    {
                        while (($T)(($module)['not'](($module)['not'](pos__497)))) {
                            (function B498(result__499, pos__500) {
                                return(false);
                            }(result__496, pos__497));
                            {
                                var B501 = ($module)['inc'](result__496);
                                {
                                    pos__497 = ($module)['position'](array__495, item__494, B492, ($module)['inc'](pos__497));
                                    result__496 = B501;
                                }
                            }
                        }
                        return(result__496);
                    }
                }
            };
            ($module)['%export']('count', ($module)['count']);
        }
        ($module)['%annotate-function'](($module)['count'], 'count', false);
    }
}
{
    {
        ($module)['as-uppercase'] = function B504(string__505) {
            var B506 = string__505;
            return(B506['toUpperCase']());
        };
        ($module)['%export']('as-uppercase', ($module)['as-uppercase']);
    }
    ($module)['%annotate-function'](($module)['as-uppercase'], 'as-uppercase', false);
}
{
    {
        ($module)['as-lowercase'] = function B509(string__510) {
            var B511 = string__510;
            return(B511['toLowerCase']());
        };
        ($module)['%export']('as-lowercase', ($module)['as-lowercase']);
    }
    ($module)['%annotate-function'](($module)['as-lowercase'], 'as-lowercase', false);
}
{
    {
        ($module)['join'] = function B515(array__516, string__517) {
            var B518 = array__516;
            {
                var B519 = string__517;
                return(B518['join'](B519));
            }
        };
        ($module)['%export']('join', ($module)['join']);
    }
    ($module)['%annotate-function'](($module)['join'], 'join', false);
}
{
    {
        ($module)['trim'] = function B522(string__523) {
            var B524 = string__523;
            return(B524['trim']());
        };
        ($module)['%export']('trim', ($module)['trim']);
    }
    ($module)['%annotate-function'](($module)['trim'], 'trim', false);
}
{
    {
        ($module)['replace'] = function B529(string__530, pattern__531, replacement__532) {
            var B533 = string__530;
            {
                var B534 = pattern__531;
                {
                    var B535 = replacement__532;
                    return(B533['replace'](B534, B535));
                }
            }
        };
        ($module)['%export']('replace', ($module)['replace']);
    }
    ($module)['%annotate-function'](($module)['replace'], 'replace', false);
}
{
    {
        ($module)['make-object'] = function B537() {
            var key_values__538 = $SL.call(arguments, 0);
            return(($module)['as-object'](key_values__538));
        };
        ($module)['%export']('make-object', ($module)['make-object']);
    }
    ($module)['%annotate-function'](($module)['make-object'], 'make-object', false);
}
{
    ($module)['<symbol>'] = ($module)['%make-class'](($module)['<object>'], {
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
    ($module)['%export']('<symbol>', ($module)['<symbol>']);
}
($module)['%symbols'] = {};
{
    {
        ($module)['symbol'] = function B543(name__544, module__545) {
            var B546 = ($module)['as-lowercase'](name__544);
            {
                var B547 = false;
                if (($T)(module__545))
                    B547 = ($module)['as-lowercase'](module__545);
                else
                    B547 = false;
                return(($module)['%%symbol'](B546, B547));
            }
        };
        ($module)['%export']('symbol', ($module)['symbol']);
    }
    ($module)['%annotate-function'](($module)['symbol'], 'symbol', false);
}
{
    {
        ($module)['symbol-name'] = function B549(symbol__550) {
            return(($module)['get'](symbol__550, 'name'));
        };
        ($module)['%export']('symbol-name', ($module)['symbol-name']);
    }
    ($module)['%annotate-function'](($module)['symbol-name'], 'symbol-name', false);
}
{
    {
        ($module)['destructure-symbol'] = function B552(symbol__553) {
            return([
                ($module)['get'](symbol__553, 'name'),
                ($module)['get'](symbol__553, 'module')
            ]);
        };
        ($module)['%export']('destructure-symbol', ($module)['destructure-symbol']);
    }
    ($module)['%annotate-function'](($module)['destructure-symbol'], 'destructure-symbol', false);
}
{
    var B557 = $K('name');
    {
        var B558 = $K('module');
        {
            {
                ($module)['%%symbol'] = function B559(name__560, module__561) {
                    var B562 = module__561;
                    {
                        var moduleT__563 = false;
                        if (($T)(B562))
                            moduleT__563 = B562;
                        else
                            moduleT__563 = '';
                        {
                            var B564 = ($module)['get'](($module)['%symbols'], moduleT__563, name__560);
                            if (($T)(B564))
                                return(B564);
                            else
                                return(($module)['get-setter'](($module)['%symbols'], moduleT__563, name__560, ($module)['make'](($module)['<symbol>'], B557, name__560, B558, module__561)));
                        }
                    }
                };
                ($module)['%export']('%%symbol', ($module)['%%symbol']);
            }
            ($module)['%annotate-function'](($module)['%%symbol'], '%%symbol', false);
        }
    }
}
$S = ($module)['%%symbol'];
($module)['*symbol-count*'] = 0;
{
    {
        ($module)['reset-symbol-counter!'] = function B566() {
            return(($module)['*symbol-count*'] = 0);
        };
        ($module)['%export']('reset-symbol-counter!', ($module)['reset-symbol-counter!']);
    }
    ($module)['%annotate-function'](($module)['reset-symbol-counter!'], 'reset-symbol-counter!', false);
}
{
    {
        ($module)['generate-symbol'] = function B568(env__569, prefix__570) {
            var B573 = false;
            if (($T)(prefix__570))
                B573 = ($module)['concatenate'](prefix__570, '_');
            else
                B573 = '$';
            {
                var B574 = ($module)['as-string'](($module)['*symbol-count*'] = ($module)['+'](($module)['*symbol-count*'], 1));
                {
                    var name__571 = ($module)['concatenate'](B573, B574);
                    {
                        var B575 = false;
                        if (($T)(env__569))
                            B575 = ($module)['get'](env__569, 'module', 'name');
                        else
                            B575 = false;
                        {
                            var result__572 = ($module)['symbol'](name__571, B575);
                            {
                                ($module)['get-setter'](result__572, 'generated?', true);
                                return(result__572);
                            }
                        }
                    }
                }
            }
        };
        ($module)['%export']('generate-symbol', ($module)['generate-symbol']);
    }
    ($module)['%annotate-function'](($module)['generate-symbol'], 'generate-symbol', false);
}
{
    {
        ($module)['%keys'] = function B578(key_values__579, defaults__580) {
            var i__581 = 0;
            {
                while (($T)(($module)['not'](i__581 >= ($module)['size'](key_values__579)))) {
                    (function B582(i__583) {
                        var key__584 = key_values__579[i__583];
                        {
                            var value__585 = key_values__579[($module)['inc'](i__583, 1)];
                            if (($T)(($module)['instance?'](key__584, ($module)['<keyword>']))) {
                                var B586 = key__584['name'];
                                return(defaults__580[B586] = value__585);
                            } else
                                return(false);
                        }
                    }(i__581));
                    i__581 = ($module)['inc'](i__581, 2);
                }
                {
                    false;
                    return(defaults__580);
                }
            }
        };
        ($module)['%export']('%keys', ($module)['%keys']);
    }
    ($module)['%annotate-function'](($module)['%keys'], '%keys', false);
}
{
    {
        ($module)['find-key'] = function B592(array__593, predicate__594) {
            var B595 = $SL.call(arguments, 2);
            {
                var B596 = ($module)['%keys'](B595, {
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
                                var keys__600 = ($module)['object-properties'](array__593);
                                {
                                    var B605 = function B601(index__602) {
                                        return(predicate__594(($module)['element'](array__593, index__602)));
                                    };
                                    {
                                        var B606 = false;
                                        if (($T)(from_endQ__599))
                                            B606 = ($module)['reverse'](keys__600);
                                        else
                                            B606 = keys__600;
                                        {
                                            var satisfying_keys__603 = ($module)['choose'](B605, B606);
                                            {
                                                var B604 = ($module)['element'](satisfying_keys__603, skip__597);
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
        ($module)['%export']('find-key', ($module)['find-key']);
    }
    ($module)['%annotate-function'](($module)['find-key'], 'find-key', false);
}
{
    {
        ($module)['parse-integer'] = function B610(value__611) {
            var B612 = $SL.call(arguments, 1);
            {
                var B613 = ($module)['%keys'](B612, { 'radix': 10 });
                {
                    var radix__614 = B613['radix'];
                    return(parseInt(value__611, radix__614));
                }
            }
        };
        ($module)['%export']('parse-integer', ($module)['parse-integer']);
    }
    ($module)['%annotate-function'](($module)['parse-integer'], 'parse-integer', false);
}
{
    {
        ($module)['element'] = function B619(array__620, index__621) {
            var B622 = $SL.call(arguments, 2);
            {
                var B623 = ($module)['%keys'](B622, { 'default': false });
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
        ($module)['%export']('element', ($module)['element']);
    }
    ($module)['%annotate-function'](($module)['element'], 'element', false);
}
{
    {
        ($module)['element-setter'] = function B627(array__628, key__629, value__630) {
            return(array__628[key__629] = value__630);
        };
        ($module)['%export']('element-setter', ($module)['element-setter']);
    }
    ($module)['%annotate-function'](($module)['element-setter'], 'element-setter', true);
}
{
    {
        ($module)['replace-subsequence'] = function B634(target_array__635, insert_array__636) {
            var B637 = $SL.call(arguments, 2);
            {
                var B638 = ($module)['%keys'](B637, {
                        'start': 0,
                        'end': ($module)['size'](target_array__635)
                    });
                {
                    var start__639 = B638['start'];
                    {
                        var end__640 = B638['end'];
                        return(($module)['concatenate'](($module)['slice'](target_array__635, 0, start__639), insert_array__636, ($module)['slice'](target_array__635, end__640)));
                    }
                }
            }
        };
        ($module)['%export']('replace-subsequence', ($module)['replace-subsequence']);
    }
    ($module)['%annotate-function'](($module)['replace-subsequence'], 'replace-subsequence', false);
}
{
    {
        ($module)['replace-subsequence!'] = function B644(target_array__645, insert_array__646) {
            var B647 = $SL.call(arguments, 2);
            {
                var B648 = ($module)['%keys'](B647, {
                        'start': 0,
                        'end': ($module)['size'](target_array__645)
                    });
                {
                    var start__649 = B648['start'];
                    {
                        var end__650 = B648['end'];
                        {
                            var rest__651 = ($module)['%concat']([
                                    start__649,
                                    ($module)['-'](end__650, start__649)
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
        ($module)['%export']('replace-subsequence!', ($module)['replace-subsequence!']);
    }
    ($module)['%annotate-function'](($module)['replace-subsequence!'], 'replace-subsequence!', false);
}
{
    {
        ($module)['remove!'] = function B659(array__660, value__661) {
            var B662 = $SL.call(arguments, 2);
            {
                var B663 = ($module)['%keys'](B662, { 'test': ($module)['=='] });
                {
                    var test__664 = B663['test'];
                    {
                        var B665 = ($module)['find-key'](array__660, ($module)['curry'](test__664, value__661));
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
        ($module)['%export']('remove!', ($module)['remove!']);
    }
    ($module)['%annotate-function'](($module)['remove!'], 'remove!', false);
}
{
    {
        ($module)['remove'] = function B673(array__674, value__675) {
            var B676 = $SL.call(arguments, 2);
            {
                var B677 = ($module)['%keys'](B676, { 'test': ($module)['=='] });
                {
                    var test__678 = B677['test'];
                    return(($module)['remove!'](($module)['slice'](array__674), value__675, B253, test__678));
                }
            }
        };
        ($module)['%export']('remove', ($module)['remove']);
    }
    ($module)['%annotate-function'](($module)['remove'], 'remove', false);
}
{
    {
        ($module)['interpose'] = function B681(separator__682, array__683) {
            return(($module)['reduce1'](function B684(a__685, b__686) {
                return(($module)['concatenate']([
                    a__685,
                    separator__682
                ], b__686));
            }, array__683));
        };
        ($module)['%export']('interpose', ($module)['interpose']);
    }
    ($module)['%annotate-function'](($module)['interpose'], 'interpose', false);
}
{
    {
        ($module)['any?'] = function B690(function__691, values__692) {
            var value__693 = false;
            {
                var n__694 = ($module)['size'](values__692);
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
                                    B699 = ($module)['>='](i__695, n__694);
                                {
                                    var B700 = ($module)['not'](B699);
                                    if (($T)(B700)) {
                                        (function B697(i__698) {
                                            return(value__693 = function__691(values__692[i__698]));
                                        }(i__695));
                                        i__695 = ($module)['inc'](i__695);
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
        ($module)['%export']('any?', ($module)['any?']);
    }
    ($module)['%annotate-function'](($module)['any?'], 'any?', false);
}
{
    {
        ($module)['member?'] = function B705(value__706, array__707) {
            var B708 = $SL.call(arguments, 2);
            {
                var B709 = ($module)['%keys'](B708, { 'test': ($module)['binary=='] });
                {
                    var test__710 = B709['test'];
                    return(($module)['any?'](function B711(other_value__712) {
                        return(test__710(value__706, other_value__712));
                    }, array__707));
                }
            }
        };
        ($module)['%export']('member?', ($module)['member?']);
    }
    ($module)['%annotate-function'](($module)['member?'], 'member?', false);
}
{
    {
        ($module)['every?'] = function B714(function__715, array__716) {
            return(($module)['not'](($module)['any?'](($module)['complement'](function__715), array__716)));
        };
        ($module)['%export']('every?', ($module)['every?']);
    }
    ($module)['%annotate-function'](($module)['every?'], 'every?', false);
}
{
    {
        ($module)['map'] = function B724(function__725) {
            var arrays__726 = $SL.call(arguments, 1);
            {
                var result__727 = [];
                {
                    if (($T)(($module)['empty?'](($module)['rest'](arrays__726)))) {
                        var B728 = ($module)['first'](arrays__726);
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
                                                    B736 = ($module)['any?'](($module)['empty?'], B731);
                                                {
                                                    var B737 = ($module)['not'](B736);
                                                    if (($T)(B737)) {
                                                        var item__733 = ($module)['first'](B728);
                                                        {
                                                            (function B734(item__735) {
                                                                return(($module)['push-last'](result__727, function__725(item__735)));
                                                            }(item__733));
                                                            {
                                                                B728 = ($module)['rest'](B728);
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
                        while (($T)(($module)['not'](($module)['any?'](($module)['empty?'], arrays__726)))) {
                            ($module)['push-last'](result__727, ($module)['apply'](function__725, ($module)['map'](($module)['first'], arrays__726)));
                            arrays__726 = ($module)['map'](($module)['rest'], arrays__726);
                        }
                    return(result__727);
                }
            }
        };
        ($module)['%export']('map', ($module)['map']);
    }
    ($module)['%annotate-function'](($module)['map'], 'map', false);
}
{
    {
        ($module)['do'] = function B745(function__746) {
            var arrays__747 = $SL.call(arguments, 1);
            {
                if (($T)(($module)['empty?'](($module)['rest'](arrays__747)))) {
                    var B748 = ($module)['first'](arrays__747);
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
                                                B756 = ($module)['any?'](($module)['empty?'], B751);
                                            {
                                                var B757 = ($module)['not'](B756);
                                                if (($T)(B757)) {
                                                    var item__753 = ($module)['first'](B748);
                                                    {
                                                        (function B754(item__755) {
                                                            return(function__746(item__755));
                                                        }(item__753));
                                                        {
                                                            B748 = ($module)['rest'](B748);
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
                    while (($T)(($module)['not'](($module)['any?'](($module)['empty?'], arrays__747)))) {
                        ($module)['apply'](function__746, ($module)['map'](($module)['first'], arrays__747));
                        arrays__747 = ($module)['map'](($module)['rest'], arrays__747);
                    }
                return(false);
            }
        };
        ($module)['%export']('do', ($module)['do']);
    }
    ($module)['%annotate-function'](($module)['do'], 'do', false);
}
{
    {
        ($module)['choose'] = function B765(function__766, array__767) {
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
                                            B777 = ($module)['any?'](($module)['empty?'], B772);
                                        {
                                            var B778 = ($module)['not'](B777);
                                            if (($T)(B778)) {
                                                var element__774 = ($module)['first'](B769);
                                                {
                                                    (function B775(element__776) {
                                                        if (($T)(function__766(element__776)))
                                                            return(($module)['push-last'](result__768, element__776));
                                                        else
                                                            return(false);
                                                    }(element__774));
                                                    {
                                                        B769 = ($module)['rest'](B769);
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
        ($module)['%export']('choose', ($module)['choose']);
    }
    ($module)['%annotate-function'](($module)['choose'], 'choose', false);
}
{
    {
        ($module)['copy-sequence'] = function B783(array__784) {
            var B785 = $SL.call(arguments, 1);
            {
                var B786 = ($module)['%keys'](B785, {
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
                                return(($module)['slice'](array__784, start__787, end__790));
                            }
                        }
                    }
                }
            }
        };
        ($module)['%export']('copy-sequence', ($module)['copy-sequence']);
    }
    ($module)['%annotate-function'](($module)['copy-sequence'], 'copy-sequence', false);
}
{
    {
        ($module)['make'] = function B792(type__793) {
            var arguments__794 = $SL.call(arguments, 1);
            {
                var object__795 = new(type__793);
                {
                    ($module)['apply'](($module)['initialize'], object__795, arguments__794);
                    return(object__795);
                }
            }
        };
        ($module)['%export']('make', ($module)['make']);
    }
    ($module)['%annotate-function'](($module)['make'], 'make', false);
}
{
    {
        ($module)['object-properties'] = function B802(object__803) {
            var B804 = $SL.call(arguments, 1);
            {
                var B805 = ($module)['%keys'](B804, { 'inherited?': false });
                {
                    var inheritedQ__806 = B805['inherited?'];
                    if (($T)(($module)['instance?'](object__803, ($module)['<array>']))) {
                        var result__807 = [];
                        {
                            var B808 = ($module)['size'](object__803);
                            {
                                var i__809 = 0;
                                {
                                    while (($T)(($module)['not'](($module)['binary>='](i__809, B808)))) {
                                        (function B810(i__811) {
                                            return(($module)['push-last'](result__807, i__811));
                                        }(i__809));
                                        i__809 = ($module)['inc'](i__809);
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
        ($module)['%export']('object-properties', ($module)['object-properties']);
    }
    ($module)['%annotate-function'](($module)['object-properties'], 'object-properties', false);
}
{
    {
        ($module)['object-values'] = function B818(object__819) {
            return(($module)['map'](function B820(property__821) {
                return(($module)['get'](object__819, property__821));
            }, ($module)['object-properties'](object__819)));
        };
        ($module)['%export']('object-values', ($module)['object-values']);
    }
    ($module)['%annotate-function'](($module)['object-values'], 'object-values', false);
}
{
    ($module)['initialize'] = ($module)['%make-generic']('initialize');
    ($module)['%export']('initialize', ($module)['initialize']);
}
{
    var B826 = $K('inherited?');
    {
        ($module)['initialize'] = ($module)['%make-method']('initialize', function B827(object__828) {
            var rest__829 = $SL.call(arguments, 1);
            {
                var arguments__830 = ($module)['as-object'](rest__829);
                {
                    var B831 = ($module)['type'](object__828)['%properties'];
                    {
                        if (($T)(B831)) {
                            var properties__832 = B831;
                            ($module)['do'](function B833(property__834) {
                                var B838 = false;
                                if (($T)(($module)['not'](($module)['has?'](($module)['<object>']['prototype'], property__834))))
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
                            }, ($module)['object-properties'](properties__832, B826, true));
                        }
                        return(object__828);
                    }
                }
            }
        }, false, ($module)['<object>'], ($module)['initialize']);
        ($module)['%export']('initialize', ($module)['initialize']);
    }
}
{
    ($module)['<hash-symbol>'] = ($module)['%make-class'](($module)['<object>'], { 'name': false }, function Lhash_symbolG__839() {
        var B840 = (this);
        return(B840['name'] = (undefined));
    });
    ($module)['%export']('<hash-symbol>', ($module)['<hash-symbol>']);
}
{
    var key__841 = ($module)['make'](($module)['<hash-symbol>'], B557, 'key');
    $KEY = key__841;
}
{
    var rest__842 = ($module)['make'](($module)['<hash-symbol>'], B557, 'rest');
    $REST = rest__842;
}
{
    {
        ($module)['get'] = function B850(object__851) {
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
                                                B862 = ($module)['any?'](($module)['empty?'], B857);
                                            {
                                                var B863 = ($module)['not'](B862);
                                                if (($T)(B863)) {
                                                    var property__859 = ($module)['first'](B854);
                                                    if (($T)(($module)['not'](($module)['has?'](object__851, property__859)))) {
                                                        B856 = result__853 = false;
                                                        B855 = true;
                                                    } else {
                                                        (function B860(property__861) {
                                                            result__853 = object__851[property__861];
                                                            return(object__851 = result__853);
                                                        }(property__859));
                                                        {
                                                            B854 = ($module)['rest'](B854);
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
        ($module)['%export']('get', ($module)['get']);
    }
    ($module)['%annotate-function'](($module)['get'], 'get', false);
}
{
    {
        ($module)['get-setter'] = function B865(object__866) {
            var propertiesSvalue__867 = $SL.call(arguments, 1);
            if (($T)(($module)['<='](($module)['size'](propertiesSvalue__867), 2))) {
                var B870 = ($module)['first'](propertiesSvalue__867);
                return(object__866[B870] = ($module)['second'](propertiesSvalue__867));
            } else {
                var property__868 = ($module)['first'](propertiesSvalue__867);
                {
                    var object2__869 = false;
                    if (($T)(($module)['has?'](object__866, property__868)))
                        object2__869 = object__866[property__868];
                    else
                        object2__869 = object__866[property__868] = ($module)['make-object']();
                    return(($module)['apply'](B865, object2__869, ($module)['rest'](propertiesSvalue__867)));
                }
            }
        };
        ($module)['%export']('get-setter', ($module)['get-setter']);
    }
    ($module)['%annotate-function'](($module)['get-setter'], 'get-setter', true);
}
{
    {
        ($module)['split'] = function B874(string__875, separator__876) {
            var B877 = string__875;
            {
                var B878 = separator__876;
                return(B877['split'](B878));
            }
        };
        ($module)['%export']('split', ($module)['split']);
    }
    ($module)['%annotate-function'](($module)['split'], 'split', false);
}
{
    {
        ($module)['split-with'] = function B881(function__882, array__883) {
            var a__884 = [];
            {
                var b__885 = [];
                {
                    ($module)['do'](function B886(item__887) {
                        var B888 = false;
                        if (($T)(function__882(item__887)))
                            B888 = a__884;
                        else
                            B888 = b__885;
                        return(($module)['push-last'](B888, item__887));
                    }, array__883);
                    return([
                        a__884,
                        b__885
                    ]);
                }
            }
        };
        ($module)['%export']('split-with', ($module)['split-with']);
    }
    ($module)['%annotate-function'](($module)['split-with'], 'split-with', false);
}
{
    {
        ($module)['as-hex-string'] = function B892(number__893) {
            var B894 = number__893;
            {
                var B895 = 16;
                return(B894['toString'](B895));
            }
        };
        ($module)['%export']('as-hex-string', ($module)['as-hex-string']);
    }
    ($module)['%annotate-function'](($module)['as-hex-string'], 'as-hex-string', false);
}
{
    ($module)['description'] = ($module)['%make-generic']('description');
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B897(number__898) {
        return('' + number__898);
    }, false, ($module)['<number>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B904(string__905) {
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
    }, false, ($module)['<string>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B912(array__913) {
        return('(' + ($module)['join'](($module)['map'](($module)['description'], array__913), ' ') + ')');
    }, false, ($module)['<array>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B915(value__916) {
        if (($T)(value__916))
            return('#t');
        else
            return('#f');
    }, false, ($module)['<boolean>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B919(symbol__920) {
        var B921 = ($module)['get'](symbol__920, 'module');
        {
            var B923 = false;
            if (($T)(B921)) {
                var module__922 = B921;
                B923 = ($module)['concatenate'](module__922, '::');
            } else
                B923 = '';
            {
                var B924 = ($module)['symbol-name'](symbol__920);
                return(B923 + B924);
            }
        }
    }, false, ($module)['<symbol>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B926(keyword__927) {
        return(($module)['symbol-name'](keyword__927) + ':');
    }, false, ($module)['<keyword>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B929(symbol__930) {
        return('#' + ($module)['symbol-name'](symbol__930));
    }, false, ($module)['<hash-symbol>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B932(function__933) {
        if (($T)(($module)['get'](function__933, '%class?')))
            return('#{class}');
        else
            return('#{function}');
    }, false, ($module)['<function>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['min'] = (Math.min);
    ($module)['%export']('min', ($module)['min']);
}
{
    ($module)['max'] = (Math.max);
    ($module)['%export']('max', ($module)['max']);
}
{
    ($module)['abs'] = (Math.abs);
    ($module)['%export']('abs', ($module)['abs']);
}
{
    ($module)['round'] = (Math.round);
    ($module)['%export']('round', ($module)['round']);
}
{
    ($module)['floor'] = (Math.floor);
    ($module)['%export']('floor', ($module)['floor']);
}
{
    ($module)['ceil'] = (Math.ceil);
    ($module)['%export']('ceil', ($module)['ceil']);
}
{
    ($module)['sin'] = (Math.sin);
    ($module)['%export']('sin', ($module)['sin']);
}
{
    ($module)['cos'] = (Math.cos);
    ($module)['%export']('cos', ($module)['cos']);
}
{
    ($module)['atan2'] = (Math.atan2);
    ($module)['%export']('atan2', ($module)['atan2']);
}
{
    ($module)['expt'] = (Math.pow);
    ($module)['%export']('expt', ($module)['expt']);
}
{
    ($module)['sqrt'] = (Math.sqrt);
    ($module)['%export']('sqrt', ($module)['sqrt']);
}
{
    {
        ($module)['mod'] = function B935(number1__936, number2__937) {
            return(number1__936 % number2__937);
        };
        ($module)['%export']('mod', ($module)['mod']);
    }
    ($module)['%annotate-function'](($module)['mod'], 'mod', false);
}
{
    ($module)['$pi'] = (Math.PI);
    ($module)['%export']('$pi', ($module)['$pi']);
}
($module)['$radiant'] = ($module)['$pi'] / 180;
{
    {
        ($module)['as-radiant'] = function B939(number__940) {
            return(($module)['*'](number__940, ($module)['$radiant']));
        };
        ($module)['%export']('as-radiant', ($module)['as-radiant']);
    }
    ($module)['%annotate-function'](($module)['as-radiant'], 'as-radiant', false);
}
{
    {
        ($module)['signal'] = function B942(error__943) {
            throw(error__943);
            return(false);
        };
        ($module)['%export']('signal', ($module)['signal']);
    }
    ($module)['%annotate-function'](($module)['signal'], 'signal', false);
}
{
    {
        ($module)['extend!'] = function B951(object1__952, object2__953) {
            var B954 = ($module)['object-properties'](object2__953);
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
                                        B962 = ($module)['any?'](($module)['empty?'], B957);
                                    {
                                        var B963 = ($module)['not'](B962);
                                        if (($T)(B963)) {
                                            var key__959 = ($module)['first'](B954);
                                            {
                                                (function B960(key__961) {
                                                    return(($module)['get-setter'](object1__952, key__961, ($module)['get'](object2__953, key__961)));
                                                }(key__959));
                                                {
                                                    B954 = ($module)['rest'](B954);
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
        ($module)['%export']('extend!', ($module)['extend!']);
    }
    ($module)['%annotate-function'](($module)['extend!'], 'extend!', false);
}
{
    {
        ($module)['as-property-list'] = function B973(object__974) {
            var B975 = $SL.call(arguments, 1);
            {
                var B976 = ($module)['%keys'](B975, { 'keywords?': false });
                {
                    var keywordsQ__977 = B976['keywords?'];
                    {
                        var result__978 = [];
                        {
                            var B979 = ($module)['object-properties'](object__974);
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
                                                        B988 = ($module)['any?'](($module)['empty?'], B982);
                                                    {
                                                        var B989 = ($module)['not'](B988);
                                                        if (($T)(B989)) {
                                                            var key__984 = ($module)['first'](B979);
                                                            {
                                                                (function B985(key__986) {
                                                                    var B987 = false;
                                                                    if (($T)(keywordsQ__977))
                                                                        B987 = ($module)['keyword'](($module)['as-string'](key__986));
                                                                    else
                                                                        B987 = key__986;
                                                                    {
                                                                        ($module)['push-last'](result__978, B987);
                                                                        return(($module)['push-last'](result__978, ($module)['get'](object__974, key__986)));
                                                                    }
                                                                }(key__984));
                                                                {
                                                                    B979 = ($module)['rest'](B979);
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
        ($module)['%export']('as-property-list', ($module)['as-property-list']);
    }
    ($module)['%annotate-function'](($module)['as-property-list'], 'as-property-list', false);
}
{
    {
        ($module)['as-association-list'] = function B999(object__1000) {
            var B1001 = $SL.call(arguments, 1);
            {
                var B1002 = ($module)['%keys'](B1001, { 'keywords?': false });
                {
                    var keywordsQ__1003 = B1002['keywords?'];
                    {
                        var result__1004 = [];
                        {
                            var B1005 = ($module)['object-properties'](object__1000);
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
                                                        B1016 = ($module)['any?'](($module)['empty?'], B1008);
                                                    {
                                                        var B1017 = ($module)['not'](B1016);
                                                        if (($T)(B1017)) {
                                                            var key__1010 = ($module)['first'](B1005);
                                                            {
                                                                (function B1011(key__1012) {
                                                                    var B1013 = false;
                                                                    if (($T)(keywordsQ__1003))
                                                                        B1013 = ($module)['keyword'](($module)['as-string'](key__1012));
                                                                    else
                                                                        B1013 = key__1012;
                                                                    {
                                                                        var B1014 = ($module)['get'](object__1000, key__1012);
                                                                        {
                                                                            var B1015 = [
                                                                                    B1013,
                                                                                    B1014
                                                                                ];
                                                                            return(($module)['push-last'](result__1004, B1015));
                                                                        }
                                                                    }
                                                                }(key__1010));
                                                                {
                                                                    B1005 = ($module)['rest'](B1005);
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
        ($module)['%export']('as-association-list', ($module)['as-association-list']);
    }
    ($module)['%annotate-function'](($module)['as-association-list'], 'as-association-list', false);
}
{
    {
        ($module)['starts-with?'] = function B1022(string__1023, prefix__1024) {
            var B1025 = string__1023;
            {
                var B1026 = prefix__1024;
                {
                    var B1027 = 0;
                    {
                        var B1028 = B1025['indexOf'](B1026, B1027);
                        return(($module)['binary=='](B1028, 0));
                    }
                }
            }
        };
        ($module)['%export']('starts-with?', ($module)['starts-with?']);
    }
    ($module)['%annotate-function'](($module)['starts-with?'], 'starts-with?', false);
}
{
    {
        ($module)['ends-with?'] = function B1033(string__1034, suffix__1035) {
            var start_index__1036 = string__1034['length'] - suffix__1035['length'];
            {
                var B1037 = string__1034;
                {
                    var B1038 = suffix__1035;
                    {
                        var B1039 = start_index__1036;
                        {
                            var result_index__1040 = B1037['indexOf'](B1038, B1039);
                            return(($module)['%binary=='](result_index__1040, start_index__1036));
                        }
                    }
                }
            }
        };
        ($module)['%export']('ends-with?', ($module)['ends-with?']);
    }
    ($module)['%annotate-function'](($module)['ends-with?'], 'ends-with?', false);
}
{
    {
        ($module)['even?'] = function B1042(number__1043) {
            return(($module)['binary=='](number__1043 % 2, 0));
        };
        ($module)['%export']('even?', ($module)['even?']);
    }
    ($module)['%annotate-function'](($module)['even?'], 'even?', false);
}
{
    {
        ($module)['odd?'] = function B1045(number__1046) {
            return(($module)['binary=='](number__1046 % 2, 1));
        };
        ($module)['%export']('odd?', ($module)['odd?']);
    }
    ($module)['%annotate-function'](($module)['odd?'], 'odd?', false);
}
{
    {
        ($module)['group-by'] = function B1049(predicate__1050, items__1051) {
            return(($module)['reduce'](function B1052(result__1053, item__1054) {
                var key__1055 = predicate__1050(item__1054);
                {
                    if (($T)(($module)['has?'](result__1053, key__1055)))
                        ($module)['push-last'](($module)['get'](result__1053, key__1055), item__1054);
                    else
                        ($module)['get-setter'](result__1053, key__1055, [item__1054]);
                    return(result__1053);
                }
            }, ($module)['make-object'](), items__1051));
        };
        ($module)['%export']('group-by', ($module)['group-by']);
    }
    ($module)['%annotate-function'](($module)['group-by'], 'group-by', false);
}
{
    ($module)['wrap-object'] = function B1057(object__1058) {
        var rest__1059 = $SL.call(arguments, 1);
        {
            var result__1060 = Object.create(object__1058);
            {
                ($module)['extend!'](result__1060, ($module)['as-object'](rest__1059));
                return(result__1060);
            }
        }
    };
    ($module)['%annotate-function'](($module)['wrap-object'], 'wrap-object', false);
}
{
    ($module)['unwrap-object'] = function B1062(object__1063) {
        return(object__1063['__proto__']);
    };
    ($module)['%annotate-function'](($module)['unwrap-object'], 'unwrap-object', false);
}
{
    {
        ($module)['update-with'] = function B1067(fn__1068, obj__1069) {
            var objs__1070 = $SL.call(arguments, 2);
            return(($module)['do'](function B1071(obj2__1072) {
                return(($module)['do'](function B1073(property__1074) {
                    var value__1075 = ($module)['get'](obj2__1072, property__1074);
                    {
                        var B1076 = false;
                        if (($T)(($module)['has?'](obj__1069, property__1074)))
                            B1076 = fn__1068(($module)['get'](obj__1069, property__1074), value__1075);
                        else
                            B1076 = value__1075;
                        return(($module)['get-setter'](obj__1069, property__1074, B1076));
                    }
                }, ($module)['object-properties'](obj2__1072)));
            }, objs__1070));
        };
        ($module)['%export']('update-with', ($module)['update-with']);
    }
    ($module)['%annotate-function'](($module)['update-with'], 'update-with', false);
}
{
    {
        ($module)['as-set'] = function B1078(values__1079) {
            var set__1080 = [];
            return(($module)['set-union!'](set__1080, values__1079));
        };
        ($module)['%export']('as-set', ($module)['as-set']);
    }
    ($module)['%annotate-function'](($module)['as-set'], 'as-set', false);
}
{
    {
        ($module)['set-add!'] = function B1082(set__1083, object__1084) {
            if (($T)(($module)['not'](($module)['member?'](object__1084, set__1083))))
                return(($module)['push-last'](set__1083, object__1084));
            else
                return(false);
        };
        ($module)['%export']('set-add!', ($module)['set-add!']);
    }
    ($module)['%annotate-function'](($module)['set-add!'], 'set-add!', false);
}
{
    ($module)['set-remove!'] = ($module)['remove!'];
    ($module)['%export']('set-remove!', ($module)['set-remove!']);
}
{
    {
        ($module)['set-union!'] = function B1086(set1__1087, set2__1088) {
            ($module)['do'](($module)['curry'](($module)['set-add!'], set1__1087), set2__1088);
            return(set1__1087);
        };
        ($module)['%export']('set-union!', ($module)['set-union!']);
    }
    ($module)['%annotate-function'](($module)['set-union!'], 'set-union!', false);
}
{
    {
        ($module)['set-subtract!'] = function B1090(set1__1091, set2__1092) {
            ($module)['do'](($module)['curry'](($module)['set-remove!'], set1__1091), set2__1092);
            return(set1__1091);
        };
        ($module)['%export']('set-subtract!', ($module)['set-subtract!']);
    }
    ($module)['%annotate-function'](($module)['set-subtract!'], 'set-subtract!', false);
}
{
    {
        ($module)['chain-object'] = function B1094(object1__1095, object2__1096) {
            object2__1096['__proto__'] = object1__1095['__proto__'];
            {
                object1__1095['__proto__'] = object2__1096;
                return(object1__1095);
            }
        };
        ($module)['%export']('chain-object', ($module)['chain-object']);
    }
    ($module)['%annotate-function'](($module)['chain-object'], 'chain-object', false);
}
{
    {
        ($module)['unchain-object'] = function B1098(object__1099) {
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
        ($module)['%export']('unchain-object', ($module)['unchain-object']);
    }
    ($module)['%annotate-function'](($module)['unchain-object'], 'unchain-object', false);
}
{
    {
        ($module)['as-hex-string'] = function B1104(number__1105) {
            var B1106 = number__1105;
            {
                var B1107 = 16;
                return(B1106['toString'](B1107));
            }
        };
        ($module)['%export']('as-hex-string', ($module)['as-hex-string']);
    }
    ($module)['%annotate-function'](($module)['as-hex-string'], 'as-hex-string', false);
}
{
    {
        ($module)['make-plain-object'] = function B1109() {
            return((Object.create(null)));
        };
        ($module)['%export']('make-plain-object', ($module)['make-plain-object']);
    }
    ($module)['%annotate-function'](($module)['make-plain-object'], 'make-plain-object', false);
}
{
    {
        ($module)['-'] = function B1111(minuend__1112) {
            var subtrahends__1113 = $SL.call(arguments, 1);
            if (($T)(($module)['empty?'](subtrahends__1113)))
                return(-(minuend__1112));
            else
                return(($module)['reduce'](($module)['binary-'], minuend__1112, subtrahends__1113));
        };
        ($module)['%export']('-', ($module)['-']);
    }
    ($module)['%annotate-function'](($module)['-'], '-', false);
}
{
    {
        ($module)['+'] = function B1115() {
            var numbers__1116 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](numbers__1116)))
                return(0);
            else
                return(($module)['reduce1'](($module)['binary+'], numbers__1116));
        };
        ($module)['%export']('+', ($module)['+']);
    }
    ($module)['%annotate-function'](($module)['+'], '+', false);
}
{
    {
        ($module)['*'] = function B1118() {
            var numbers__1119 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](numbers__1119)))
                return(1);
            else
                return(($module)['reduce1'](($module)['binary*'], numbers__1119));
        };
        ($module)['%export']('*', ($module)['*']);
    }
    ($module)['%annotate-function'](($module)['*'], '*', false);
}
{
    {
        ($module)['/'] = function B1121(numerator__1122) {
            var denominators__1123 = $SL.call(arguments, 1);
            if (($T)(($module)['empty?'](denominators__1123)))
                return(($module)['%divide'](1, numerator__1122));
            else
                return(($module)['reduce'](($module)['binary/'], numerator__1122, denominators__1123));
        };
        ($module)['%export']('/', ($module)['/']);
    }
    ($module)['%annotate-function'](($module)['/'], '/', false);
}
{
    {
        ($module)['disjoin'] = function B1127(predicate1__1128) {
            var predicates__1129 = $SL.call(arguments, 1);
            return(function B1130() {
                var arguments__1131 = $SL.call(arguments, 0);
                return(($module)['any?'](function B1132(predicate__1133) {
                    return(($module)['apply'](predicate__1133, arguments__1131));
                }, ($module)['cons'](predicate1__1128, predicates__1129)));
            });
        };
        ($module)['%export']('disjoin', ($module)['disjoin']);
    }
    ($module)['%annotate-function'](($module)['disjoin'], 'disjoin', false);
}
{
    {
        ($module)['conjoin'] = function B1137(predicate1__1138) {
            var predicates__1139 = $SL.call(arguments, 1);
            return(function B1140() {
                var arguments__1141 = $SL.call(arguments, 0);
                {
                    var value__1142 = false;
                    if (($T)(($module)['every?'](function B1143(predicate__1144) {
                            return(value__1142 = ($module)['apply'](predicate__1144, arguments__1141));
                        }, ($module)['cons'](predicate1__1138, predicates__1139))))
                        return(value__1142);
                    else
                        return(false);
                }
            });
        };
        ($module)['%export']('conjoin', ($module)['conjoin']);
    }
    ($module)['%annotate-function'](($module)['conjoin'], 'conjoin', false);
}
{
    {
        ($module)['ignore'] = function B1146() {
            return(false);
        };
        ($module)['%export']('ignore', ($module)['ignore']);
    }
    ($module)['%annotate-function'](($module)['ignore'], 'ignore', false);
}
{
    ($module)['set-timeout'] = (setTimeout);
    ($module)['%export']('set-timeout', ($module)['set-timeout']);
}
{
    ($module)['clear-timeout'] = (clearTimeout);
    ($module)['%export']('clear-timeout', ($module)['clear-timeout']);
}
{
    ($module)['set-interval'] = (setInterval);
    ($module)['%export']('set-interval', ($module)['set-interval']);
}
{
    ($module)['clear-interval'] = (clearInterval);
    ($module)['%export']('clear-interval', ($module)['clear-interval']);
}
{
    var B1150 = $K('end');
    {
        {
            ($module)['partition'] = function B1151(count__1152, elements__1153) {
                var B1154 = $SL.call(arguments, 2);
                {
                    var B1155 = ($module)['%keys'](B1154, { 'step': count__1152 });
                    {
                        var step__1156 = B1155['step'];
                        {
                            var result__1157 = [];
                            {
                                var total__1158 = ($module)['size'](elements__1153);
                                {
                                    var last_index__1159 = 0;
                                    {
                                        while (($T)(($module)['<'](last_index__1159, total__1158))) {
                                            var new_index__1160 = ($module)['+'](last_index__1159, count__1152);
                                            {
                                                ($module)['push-last'](result__1157, ($module)['copy-sequence'](elements__1153, B492, last_index__1159, B1150, new_index__1160));
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
            ($module)['%export']('partition', ($module)['partition']);
        }
        ($module)['%annotate-function'](($module)['partition'], 'partition', false);
    }
}
{
    {
        ($module)['repeat-string'] = function B1162(string__1163, count__1164) {
            var result__1165 = '';
            {
                while (($T)(($module)['>'](count__1164, 0))) {
                    if (($T)(($module)['odd?'](count__1164)))
                        result__1165 = ($module)['%concat'](result__1165, string__1163);
                    {
                        count__1164 >>= 1;
                        string__1163 = ($module)['%concat'](string__1163, string__1163);
                    }
                }
                return(result__1165);
            }
        };
        ($module)['%export']('repeat-string', ($module)['repeat-string']);
    }
    ($module)['%annotate-function'](($module)['repeat-string'], 'repeat-string', false);
}
{
    {
        ($module)['substring'] = function B1177(string__1178, start__1179) {
            var B1180 = $SL.call(arguments, 2);
            {
                var B1181 = ($module)['%keys'](B1180, {
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
                                return(($module)['substring'](string__1178, start__1179, B1150, ($module)['min'](end__1182, ($module)['+'](start__1179, length__1183))));
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
        ($module)['%export']('substring', ($module)['substring']);
    }
    ($module)['%annotate-function'](($module)['substring'], 'substring', false);
}
{
    {
        ($module)['expression?'] = function B1194(form__1195) {
            if (($T)(($module)['instance?'](form__1195, ($module)['<array>'])))
                return(($module)['instance?'](($module)['first'](form__1195), ($module)['<symbol>']));
            else
                return(false);
        };
        ($module)['%export']('expression?', ($module)['expression?']);
    }
    ($module)['%annotate-function'](($module)['expression?'], 'expression?', false);
}
{
    ($module)['%eval'] = function B1197() {
        return(eval((arguments[0])));
    };
    {
        ($module)['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
