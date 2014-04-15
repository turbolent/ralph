$moduleRoot = Object.create(null);
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B10(name__11, value__12) {
            var B14 = (exports);
            return(B14[name__11] = value__12);
        };
        {
            ($module)['%eval'] = function B13() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
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
    ($module)['%annotate-function'] = function B16(function__17, name__18, setterQ__19) {
        function__17['%name'] = name__18;
        {
            function__17['%setter?'] = setterQ__19;
            return(function__17);
        }
    };
    ($module)['%export']('%annotate-function', ($module)['%annotate-function']);
}
{
    {
        ($module)['true?'] = function B21(value__22) {
            return(value__22 != (null) && value__22 !== false);
        };
        ($module)['%export']('true?', ($module)['true?']);
    }
    ($module)['%annotate-function'](($module)['true?'], 'true?', false);
}
$T = ($module)['true?'];
{
    {
        ($module)['not'] = function B24(value__25) {
            return(!(($module)['true?'](value__25)));
        };
        ($module)['%export']('not', ($module)['not']);
    }
    ($module)['%annotate-function'](($module)['not'], 'not', false);
}
{
    {
        ($module)['size'] = function B27(object__28) {
            return((object__28 || false)['length'] || 0);
        };
        ($module)['%export']('size', ($module)['size']);
    }
    ($module)['%annotate-function'](($module)['size'], 'size', false);
}
$SL = [].slice;
{
    {
        ($module)['inc'] = function B30(number__31) {
            return(number__31 + 1);
        };
        ($module)['%export']('inc', ($module)['inc']);
    }
    ($module)['%annotate-function'](($module)['inc'], 'inc', false);
}
{
    {
        ($module)['dec'] = function B33(number__34) {
            return(number__34 - 1);
        };
        ($module)['%export']('dec', ($module)['dec']);
    }
    ($module)['%annotate-function'](($module)['dec'], 'dec', false);
}
{
    {
        ($module)['binary=='] = function B36(object1__37, object2__38) {
            return(object1__37 === object2__38);
        };
        ($module)['%export']('binary==', ($module)['binary==']);
    }
    ($module)['%annotate-function'](($module)['binary=='], 'binary==', false);
}
{
    {
        ($module)['%inherit'] = function B40(class__41, superclass__42) {
            class__41['%superclass'] = superclass__42;
            {
                class__41['prototype']['__proto__'] = superclass__42['prototype'];
                {
                    var super_properties__43 = superclass__42['%properties'];
                    {
                        if (($T)(super_properties__43 instanceof ($module)['<object>']))
                            class__41['%properties']['__proto__'] = super_properties__43;
                        return(class__41);
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
        ($module)['%make-class'] = function B46(superclass__47, properties__48, constructor__49) {
            if (($T)(($module)['not'](constructor__49)))
                constructor__49 = function B50() {
                    return(false);
                };
            {
                constructor__49['%properties'] = properties__48;
                {
                    constructor__49['%class?'] = true;
                    {
                        if (($T)(superclass__47))
                            ($module)['%inherit'](constructor__49, superclass__47);
                        return(constructor__49);
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
    ($module)['<keyword>'] = ($module)['%make-class'](($module)['<object>'], { 'name': false }, function LkeywordG__51() {
        var B52 = (this);
        return(B52['name'] = (undefined));
    });
    ($module)['%export']('<keyword>', ($module)['<keyword>']);
}
{
    {
        ($module)['keyword'] = function B56(name__57) {
            var B58 = name__57;
            {
                var nameT__59 = B58['toLowerCase']();
                {
                    var B60 = ($module)['%keywords'][nameT__59];
                    if (($T)(B60))
                        return(B60);
                    else {
                        var keyword__61 = new(($module)['<keyword>']);
                        {
                            keyword__61['name'] = name__57;
                            {
                                ($module)['%keywords'][name__57] = keyword__61;
                                return(keyword__61);
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
    ($module)['<non-local-exit>'] = ($module)['%make-class'](($module)['<object>'], {}, function Lnon_local_exitG__62() {
        return(false);
    });
    ($module)['%export']('<non-local-exit>', ($module)['<non-local-exit>']);
}
{
    {
        ($module)['%make-exit-function'] = function B65() {
            var identifier__66 = ($module)['*exit-function-counter*'] = ($module)['+'](($module)['*exit-function-counter*'], 1);
            {
                var exit_function__70 = function B67(return_value__68) {
                    var condition__69 = new(($module)['<non-local-exit>']);
                    {
                        condition__69['identifier'] = identifier__66;
                        {
                            condition__69['return-value'] = return_value__68;
                            return(($module)['signal'](condition__69));
                        }
                    }
                };
                {
                    exit_function__70['identifier'] = identifier__66;
                    return(exit_function__70);
                }
            }
        };
        ($module)['%export']('%make-exit-function', ($module)['%make-exit-function']);
    }
    ($module)['%annotate-function'](($module)['%make-exit-function'], '%make-exit-function', false);
}
{
    {
        ($module)['%concat'] = function B74(array1__75, array2__76) {
            var B77 = array1__75;
            {
                var B78 = array2__76;
                return(B77['concat'](B78));
            }
        };
        ($module)['%export']('%concat', ($module)['%concat']);
    }
    ($module)['%annotate-function'](($module)['%concat'], '%concat', false);
}
{
    {
        ($module)['cons'] = function B80(value__81, rest__82) {
            return(($module)['%concat']([value__81], rest__82));
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
        ($module)['as-array'] = function B84(arguments__85, skip__86) {
            return($SL.call(arguments__85, skip__86 || 0));
        };
        ($module)['%export']('as-array', ($module)['as-array']);
    }
    ($module)['%annotate-function'](($module)['as-array'], 'as-array', false);
}
{
    {
        ($module)['as-json'] = function B90(value__91) {
            var B92 = $SL.call(arguments, 1);
            {
                var B93 = ($module)['%keys'](B92, {
                        'replacer': (null),
                        'indent': false
                    });
                {
                    var replacer__94 = B93['replacer'];
                    {
                        var indent__95 = B93['indent'];
                        return(JSON.stringify(value__91, replacer__94, indent__95));
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
        ($module)['char-code'] = function B99(char__100) {
            var B101 = char__100;
            {
                var B102 = 0;
                return(B101['charCodeAt'](B102));
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
        ($module)['empty?'] = function B104(sequence__105) {
            return(($module)['binary=='](($module)['size'](sequence__105), 0));
        };
        ($module)['%export']('empty?', ($module)['empty?']);
    }
    ($module)['%annotate-function'](($module)['empty?'], 'empty?', false);
}
{
    {
        ($module)['rest'] = function B109(sequence__110) {
            var B111 = sequence__110;
            {
                var B112 = 1;
                return(B111['slice'](B112));
            }
        };
        ($module)['%export']('rest', ($module)['rest']);
    }
    ($module)['%annotate-function'](($module)['rest'], 'rest', false);
}
{
    {
        ($module)['last'] = function B114(array__115) {
            return(array__115[($module)['dec'](($module)['size'](array__115), 1)]);
        };
        ($module)['%export']('last', ($module)['last']);
    }
    ($module)['%annotate-function'](($module)['last'], 'last', false);
}
{
    {
        ($module)['last-setter'] = function B117(array__118, value__119) {
            var B120 = ($module)['dec'](($module)['size'](array__118), 1);
            return(array__118[B120] = value__119);
        };
        ($module)['%export']('last-setter', ($module)['last-setter']);
    }
    ($module)['%annotate-function'](($module)['last-setter'], 'last-setter', true);
}
{
    {
        ($module)['first'] = function B122(sequence__123) {
            return(sequence__123[0]);
        };
        ($module)['%export']('first', ($module)['first']);
    }
    ($module)['%annotate-function'](($module)['first'], 'first', false);
}
{
    {
        ($module)['first-setter'] = function B125(array__126, value__127) {
            return(array__126[0] = value__127);
        };
        ($module)['%export']('first-setter', ($module)['first-setter']);
    }
    ($module)['%annotate-function'](($module)['first-setter'], 'first-setter', true);
}
{
    {
        ($module)['second'] = function B129(sequence__130) {
            return(sequence__130[1]);
        };
        ($module)['%export']('second', ($module)['second']);
    }
    ($module)['%annotate-function'](($module)['second'], 'second', false);
}
{
    {
        ($module)['second-setter'] = function B132(array__133, value__134) {
            return(array__133[1] = value__134);
        };
        ($module)['%export']('second-setter', ($module)['second-setter']);
    }
    ($module)['%annotate-function'](($module)['second-setter'], 'second-setter', true);
}
{
    {
        ($module)['third'] = function B136(sequence__137) {
            return(sequence__137[2]);
        };
        ($module)['%export']('third', ($module)['third']);
    }
    ($module)['%annotate-function'](($module)['third'], 'third', false);
}
{
    {
        ($module)['third-setter'] = function B139(array__140, value__141) {
            return(array__140[2] = value__141);
        };
        ($module)['%export']('third-setter', ($module)['third-setter']);
    }
    ($module)['%annotate-function'](($module)['third-setter'], 'third-setter', true);
}
{
    {
        ($module)['make-array'] = function B143() {
            var elements__144 = $SL.call(arguments, 0);
            return(elements__144);
        };
        ($module)['%export']('make-array', ($module)['make-array']);
    }
    ($module)['%annotate-function'](($module)['make-array'], 'make-array', false);
}
{
    {
        ($module)['push'] = function B148(array__149, value__150) {
            var B151 = array__149;
            {
                var B152 = value__150;
                {
                    B151['unshift'](B152);
                    return(value__150);
                }
            }
        };
        ($module)['%export']('push', ($module)['push']);
    }
    ($module)['%annotate-function'](($module)['push'], 'push', false);
}
{
    {
        ($module)['push-last'] = function B156(array__157, value__158) {
            var B159 = array__157;
            {
                var B160 = value__158;
                {
                    B159['push'](B160);
                    return(value__158);
                }
            }
        };
        ($module)['%export']('push-last', ($module)['push-last']);
    }
    ($module)['%annotate-function'](($module)['push-last'], 'push-last', false);
}
{
    {
        ($module)['pop'] = function B163(array__164) {
            var B165 = array__164;
            return(B165['shift']());
        };
        ($module)['%export']('pop', ($module)['pop']);
    }
    ($module)['%annotate-function'](($module)['pop'], 'pop', false);
}
{
    {
        ($module)['pop-last'] = function B168(array__169) {
            var B170 = array__169;
            return(B170['pop']());
        };
        ($module)['%export']('pop-last', ($module)['pop-last']);
    }
    ($module)['%annotate-function'](($module)['pop-last'], 'pop-last', false);
}
{
    {
        ($module)['but-last'] = function B175(array__176, n__177) {
            var B178 = array__176;
            {
                var B179 = 0;
                {
                    var B180 = (n__177 || 1) * -1;
                    return(B178['slice'](B179, B180));
                }
            }
        };
        ($module)['%export']('but-last', ($module)['but-last']);
    }
    ($module)['%annotate-function'](($module)['but-last'], 'but-last', false);
}
{
    {
        ($module)['slice'] = function B185(array__186, start__187, end__188) {
            var B189 = array__186;
            {
                var B190 = start__187;
                {
                    var B191 = end__188;
                    return(B189['slice'](B190, B191));
                }
            }
        };
        ($module)['%export']('slice', ($module)['slice']);
    }
    ($module)['%annotate-function'](($module)['slice'], 'slice', false);
}
{
    var B195 = $K('from-end?');
    {
        {
            ($module)['reduce1'] = function B196(function__197, values__198) {
                var B199 = $SL.call(arguments, 2);
                {
                    var B200 = ($module)['%keys'](B199, { 'from-end?': false });
                    {
                        var from_endQ__201 = B200['from-end?'];
                        if (($T)(($module)['empty?'](values__198)))
                            return(function__197());
                        else {
                            var B202 = false;
                            if (($T)(from_endQ__201))
                                B202 = [
                                    ($module)['last'](values__198),
                                    ($module)['but-last'](values__198)
                                ];
                            else
                                B202 = [
                                    ($module)['first'](values__198),
                                    ($module)['rest'](values__198)
                                ];
                            {
                                var B203 = [
                                        B195,
                                        from_endQ__201
                                    ];
                                {
                                    var B204 = ($module)['%concat'](B202, B203);
                                    return(($module)['apply'](($module)['reduce'], function__197, B204));
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
        ($module)['reduce'] = function B212(function__213, initial_value__214, values__215) {
            var B216 = $SL.call(arguments, 3);
            {
                var B217 = ($module)['%keys'](B216, { 'from-end?': false });
                {
                    var from_endQ__218 = B217['from-end?'];
                    {
                        var result__219 = initial_value__214;
                        {
                            if (($T)(from_endQ__218)) {
                                var values__220 = ($module)['reverse'](values__215);
                                {
                                    var B221 = ($module)['size'](values__220);
                                    {
                                        var i__222 = 0;
                                        {
                                            while (($T)(($module)['not'](($module)['binary>='](i__222, B221)))) {
                                                (function B223(i__224) {
                                                    return(result__219 = function__213(values__220[i__224], result__219));
                                                }(i__222));
                                                i__222 = ($module)['inc'](i__222);
                                            }
                                            false;
                                        }
                                    }
                                }
                            } else {
                                var B225 = ($module)['size'](values__215);
                                {
                                    var i__226 = 0;
                                    {
                                        while (($T)(($module)['not'](($module)['binary>='](i__226, B225)))) {
                                            (function B227(i__228) {
                                                return(result__219 = function__213(result__219, values__215[i__228]));
                                            }(i__226));
                                            i__226 = ($module)['inc'](i__226);
                                        }
                                        false;
                                    }
                                }
                            }
                            return(result__219);
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
        ($module)['reverse!'] = function B231(array__232) {
            var B233 = array__232;
            return(B233['reverse']());
        };
        ($module)['%export']('reverse!', ($module)['reverse!']);
    }
    ($module)['%annotate-function'](($module)['reverse!'], 'reverse!', false);
}
{
    {
        ($module)['reverse'] = function B235(array__236) {
            return(($module)['reverse!'](($module)['slice'](array__236)));
        };
        ($module)['%export']('reverse', ($module)['reverse']);
    }
    ($module)['%annotate-function'](($module)['reverse'], 'reverse', false);
}
{
    {
        ($module)['sort!'] = function B243(array__244) {
            var B245 = $SL.call(arguments, 1);
            {
                var B246 = ($module)['%keys'](B245, {
                        'test': ($module)['<'],
                        'key': ($module)['identity']
                    });
                {
                    var test__247 = B246['test'];
                    {
                        var key__248 = B246['key'];
                        {
                            var B249 = array__244;
                            {
                                var B253 = function B250(a__251, b__252) {
                                    if (($T)(test__247(key__248(a__251), key__248(b__252))))
                                        return(-1);
                                    else
                                        return(1);
                                };
                                return(B249['sort'](B253));
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
    var B257 = $K('test');
    {
        var B258 = $K('key');
        {
            {
                ($module)['sort'] = function B259(array__260) {
                    var B261 = $SL.call(arguments, 1);
                    {
                        var B262 = ($module)['%keys'](B261, {
                                'test': ($module)['<'],
                                'key': ($module)['identity']
                            });
                        {
                            var test__263 = B262['test'];
                            {
                                var key__264 = B262['key'];
                                return(($module)['sort!'](($module)['slice'](array__260), B257, test__263, B258, key__264));
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
        ($module)['apply'] = function B266(function__267) {
            var actual__268 = $SL.call(arguments, 1, -1);
            {
                var last__269 = arguments[($module)['size'](arguments) - 1];
                {
                    var arguments__270 = false;
                    if (($T)(($module)['binary=='](last__269, function__267)))
                        arguments__270 = actual__268;
                    else
                        arguments__270 = ($module)['%concat'](actual__268, last__269);
                    return(function__267['apply']((null), arguments__270));
                }
            }
        };
        ($module)['%export']('apply', ($module)['apply']);
    }
    ($module)['%annotate-function'](($module)['apply'], 'apply', false);
}
{
    {
        ($module)['curry'] = function B273(function__274) {
            var curried_args__275 = $SL.call(arguments, 1);
            return(function B276() {
                var args__277 = $SL.call(arguments, 0);
                return(($module)['apply'](function__274, ($module)['%concat'](curried_args__275, args__277)));
            });
        };
        ($module)['%export']('curry', ($module)['curry']);
    }
    ($module)['%annotate-function'](($module)['curry'], 'curry', false);
}
{
    {
        ($module)['rcurry'] = function B280(function__281) {
            var curried_args__282 = $SL.call(arguments, 1);
            return(function B283() {
                var args__284 = $SL.call(arguments, 0);
                return(($module)['apply'](function__281, ($module)['%concat'](args__284, curried_args__282)));
            });
        };
        ($module)['%export']('rcurry', ($module)['rcurry']);
    }
    ($module)['%annotate-function'](($module)['rcurry'], 'rcurry', false);
}
{
    {
        ($module)['always'] = function B287(value__288) {
            return(function B289() {
                return(value__288);
            });
        };
        ($module)['%export']('always', ($module)['always']);
    }
    ($module)['%annotate-function'](($module)['always'], 'always', false);
}
{
    {
        ($module)['repeatedly'] = function B293(function__294, count__295) {
            var result__296 = [];
            {
                var B297 = count__295;
                {
                    var i__298 = 0;
                    {
                        while (($T)(($module)['not'](($module)['binary>='](i__298, B297)))) {
                            (function B299(i__300) {
                                return(($module)['push-last'](result__296, function__294()));
                            }(i__298));
                            i__298 = ($module)['inc'](i__298);
                        }
                        return(result__296);
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
        ($module)['identity'] = function B302(value__303) {
            return(value__303);
        };
        ($module)['%export']('identity', ($module)['identity']);
    }
    ($module)['%annotate-function'](($module)['identity'], 'identity', false);
}
{
    {
        ($module)['complement'] = function B306(function__307) {
            return(function B308() {
                var arguments__309 = $SL.call(arguments, 0);
                return(($module)['not'](($module)['apply'](function__307, arguments__309)));
            });
        };
        ($module)['%export']('complement', ($module)['complement']);
    }
    ($module)['%annotate-function'](($module)['complement'], 'complement', false);
}
{
    {
        ($module)['compose'] = function B313() {
            var functions__314 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](functions__314)))
                return(($module)['identity']);
            else
                return(function B315() {
                    var arguments__316 = $SL.call(arguments, 0);
                    return(($module)['reduce'](function B317(function__318, value__319) {
                        return(function__318(value__319));
                    }, ($module)['apply'](($module)['last'](functions__314), arguments__316), ($module)['but-last'](functions__314), B195, true));
                });
        };
        ($module)['%export']('compose', ($module)['compose']);
    }
    ($module)['%annotate-function'](($module)['compose'], 'compose', false);
}
{
    ($module)['binary+'] = function B321(number1__322, number2__323) {
        return(number1__322 + number2__323);
    };
    ($module)['%annotate-function'](($module)['binary+'], 'binary+', false);
}
{
    ($module)['binary-'] = function B325(number1__326, number2__327) {
        return(number1__326 - number2__327);
    };
    ($module)['%annotate-function'](($module)['binary-'], 'binary-', false);
}
{
    ($module)['binary*'] = function B329(number1__330, number2__331) {
        return(number1__330 * number2__331);
    };
    ($module)['%annotate-function'](($module)['binary*'], 'binary*', false);
}
{
    ($module)['binary/'] = function B333(number1__334, number2__335) {
        return(number1__334 / number2__335);
    };
    ($module)['%annotate-function'](($module)['binary/'], 'binary/', false);
}
{
    {
        ($module)['type'] = function B337(object__338) {
            if (($T)(object__338))
                return(object__338['constructor']);
            else
                return(($module)['<boolean>']);
        };
        ($module)['%export']('type', ($module)['type']);
    }
    ($module)['%annotate-function'](($module)['type'], 'type', false);
}
{
    {
        ($module)['instance?'] = function B340(object__341, type__342) {
            if (($T)(object__341))
                return(object__341 instanceof type__342 || ($module)['binary=='](object__341['constructor'], type__342));
            else
                return(($module)['binary=='](type__342, ($module)['<boolean>']));
        };
        ($module)['%export']('instance?', ($module)['instance?']);
    }
    ($module)['%annotate-function'](($module)['instance?'], 'instance?', false);
}
$HP = Object.hasOwnProperty;
{
    {
        ($module)['has?'] = function B344(object__345, property__346) {
            return(($HP.call(object__345,property__346)));
        };
        ($module)['%export']('has?', ($module)['has?']);
    }
    ($module)['%annotate-function'](($module)['has?'], 'has?', false);
}
{
    {
        ($module)['%make-method'] = function B348(name__349, function__350, setterQ__351, type__352, existing__353) {
            function__350['%name'] = name__349;
            {
                function__350['%setter?'] = setterQ__351;
                {
                    function__350['%type'] = type__352;
                    {
                        type__352['prototype'][name__349] = function__350;
                        {
                            var B354 = false;
                            if (($T)(existing__353))
                                B354 = existing__353['%generic?'];
                            else
                                B354 = false;
                            if (($T)(B354))
                                return(existing__353);
                            else
                                return(($module)['%make-generic'](name__349));
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
        ($module)['%make-generic'] = function B357(name__358) {
            var dispatcher__362 = function B359(object__360) {
                var function__361 = ((object__360== null ? false : object__360))[name__358];
                return(function__361 && function__361['apply'](object__360, arguments));
            };
            {
                dispatcher__362['%generic?'] = true;
                {
                    dispatcher__362['%name'] = name__358;
                    return(dispatcher__362);
                }
            }
        };
        ($module)['%export']('%make-generic', ($module)['%make-generic']);
    }
    ($module)['%annotate-function'](($module)['%make-generic'], '%make-generic', false);
}
{
    {
        ($module)['%next-method'] = function B364(function__365) {
            var name__366 = function__365['%name'];
            {
                var proto__367 = function__365['%type']['prototype']['__proto__'];
                return(proto__367[name__366]);
            }
        };
        ($module)['%export']('%next-method', ($module)['%next-method']);
    }
    ($module)['%annotate-function'](($module)['%next-method'], '%next-method', false);
}
{
    {
        ($module)['concatenate'] = function B369() {
            var values__370 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](values__370)))
                return([]);
            else
                return(($module)['reduce1'](($module)['%concat'], values__370));
        };
        ($module)['%export']('concatenate', ($module)['concatenate']);
    }
    ($module)['%annotate-function'](($module)['concatenate'], 'concatenate', false);
}
{
    {
        ($module)['compare'] = function B373(function__374, object__375, objects__376) {
            var failedQ__377 = false;
            {
                while (true) {
                    var B378 = failedQ__377;
                    {
                        var B380 = false;
                        if (($T)(B378))
                            B380 = B378;
                        else
                            B380 = ($module)['empty?'](objects__376);
                        {
                            var B381 = ($module)['not'](B380);
                            if (($T)(B381)) {
                                var other__379 = ($module)['first'](objects__376);
                                {
                                    failedQ__377 = ($module)['not'](function__374(object__375, other__379));
                                    {
                                        objects__376 = ($module)['rest'](objects__376);
                                        object__375 = other__379;
                                    }
                                }
                            } else
                                break;
                        }
                    }
                }
                return(($module)['not'](failedQ__377));
            }
        };
        ($module)['%export']('compare', ($module)['compare']);
    }
    ($module)['%annotate-function'](($module)['compare'], 'compare', false);
}
{
    {
        ($module)['=='] = function B383(object__384) {
            var objects__385 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary=='], object__384, objects__385));
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
    ($module)['binary='] = ($module)['%make-method']('binary=', function B387(object1__388, object2__389) {
        if (($T)(($module)['binary=='](($module)['type'](object1__388), ($module)['type'](object2__389))))
            return(($module)['binary=='](object1__388, object2__389));
        else
            return(false);
    }, false, ($module)['<object>'], ($module)['binary=']);
    ($module)['%export']('binary=', ($module)['binary=']);
}
{
    ($module)['binary='] = ($module)['%make-method']('binary=', function B398(array1__399, array2__400) {
        if (($T)(($module)['binary=='](($module)['size'](array1__399), ($module)['size'](array2__400)))) {
            var B401 = array1__399;
            {
                var B402 = array2__400;
                {
                    var B403 = false;
                    {
                        var B404 = false;
                        {
                            var B405 = [
                                    B401,
                                    B402
                                ];
                            {
                                while (true) {
                                    var B406 = B403;
                                    {
                                        var B412 = false;
                                        if (($T)(B406))
                                            B412 = B406;
                                        else
                                            B412 = ($module)['any?'](($module)['empty?'], B405);
                                        {
                                            var B413 = ($module)['not'](B412);
                                            if (($T)(B413)) {
                                                var item1__407 = ($module)['first'](B401);
                                                {
                                                    var item2__408 = ($module)['first'](B402);
                                                    if (($T)(($module)['not'](($module)['binary='](item1__407, item2__408)))) {
                                                        B404 = true;
                                                        B403 = true;
                                                    } else {
                                                        (function B409(item1__410, item2__411) {
                                                            return(false);
                                                        }(item1__407, item2__408));
                                                        {
                                                            B401 = ($module)['rest'](B401);
                                                            {
                                                                B402 = ($module)['rest'](B402);
                                                                B405 = [
                                                                    B401,
                                                                    B402
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
                                return(($module)['not'](B404));
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
        ($module)['binary='] = function B416(object1__417, object2__418) {
            var B419 = false;
            if (($T)(($module)['not'](object1__417)))
                B419 = ($module)['not'](object2__418);
            else
                B419 = false;
            if (($T)(B419))
                return(B419);
            else
                return(($module)['binary=-dispatcher'](object1__417, object2__418));
        };
        ($module)['%export']('binary=', ($module)['binary=']);
    }
    ($module)['%annotate-function'](($module)['binary='], 'binary=', false);
}
{
    {
        ($module)['='] = function B421(object__422) {
            var objects__423 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary='], object__422, objects__423));
        };
        ($module)['%export']('=', ($module)['=']);
    }
    ($module)['%annotate-function'](($module)['='], '=', false);
}
{
    ($module)['binary<'] = ($module)['%make-method']('binary<', function B425(object1__426, object2__427) {
        if (($T)(($module)['binary=='](($module)['type'](object1__426), ($module)['type'](object2__427))))
            return(object1__426 < object2__427);
        else
            return(false);
    }, false, ($module)['<object>'], ($module)['binary<']);
    ($module)['%export']('binary<', ($module)['binary<']);
}
{
    {
        ($module)['<'] = function B429(object__430) {
            var objects__431 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary<'], object__430, objects__431));
        };
        ($module)['%export']('<', ($module)['<']);
    }
    ($module)['%annotate-function'](($module)['<'], '<', false);
}
{
    {
        ($module)['binary<='] = function B434(object1__435, object2__436) {
            if (($T)(object1__435))
                if (($T)(object2__436)) {
                    var B437 = ($module)['binary<'](object1__435, object2__436);
                    if (($T)(B437))
                        return(B437);
                    else
                        return(($module)['binary='](object1__435, object2__436));
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
        ($module)['<='] = function B439(object__440) {
            var objects__441 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary<='], object__440, objects__441));
        };
        ($module)['%export']('<=', ($module)['<=']);
    }
    ($module)['%annotate-function'](($module)['<='], '<=', false);
}
{
    {
        ($module)['binary>'] = function B443(object1__444, object2__445) {
            if (($T)(object1__444))
                if (($T)(object2__445))
                    if (($T)(($module)['not'](($module)['binary<'](object1__444, object2__445))))
                        return(($module)['not'](($module)['binary='](object1__444, object2__445)));
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
        ($module)['>'] = function B447(object__448) {
            var objects__449 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary>'], object__448, objects__449));
        };
        ($module)['%export']('>', ($module)['>']);
    }
    ($module)['%annotate-function'](($module)['>'], '>', false);
}
{
    {
        ($module)['binary>='] = function B452(object1__453, object2__454) {
            var B455 = ($module)['not'](($module)['binary<'](object1__453, object2__454));
            if (($T)(B455))
                return(B455);
            else
                return(($module)['binary='](object1__453, object2__454));
        };
        ($module)['%export']('binary>=', ($module)['binary>=']);
    }
    ($module)['%annotate-function'](($module)['binary>='], 'binary>=', false);
}
{
    {
        ($module)['>='] = function B457(object__458) {
            var objects__459 = $SL.call(arguments, 1);
            return(($module)['compare'](($module)['binary>='], object__458, objects__459));
        };
        ($module)['%export']('>=', ($module)['>=']);
    }
    ($module)['%annotate-function'](($module)['>='], '>=', false);
}
{
    {
        ($module)['as-object'] = function B461(property_list__462) {
            var list__463 = ($module)['slice'](property_list__462);
            {
                var result__464 = {};
                {
                    while (($T)(($module)['>'](($module)['size'](list__463), 0))) {
                        var key__465 = ($module)['pop'](list__463);
                        {
                            var value__466 = ($module)['pop'](list__463);
                            {
                                var B467 = false;
                                if (($T)(($module)['instance?'](key__465, ($module)['<keyword>'])))
                                    B467 = key__465['name'];
                                else
                                    B467 = ($module)['as-string'](key__465);
                                {
                                    key__465 = B467;
                                    result__464[key__465] = value__466;
                                }
                            }
                        }
                    }
                    return(result__464);
                }
            }
        };
        ($module)['%export']('as-object', ($module)['as-object']);
    }
    ($module)['%annotate-function'](($module)['as-object'], 'as-object', false);
}
{
    {
        ($module)['position'] = function B474(array__475, element__476) {
            var B477 = $SL.call(arguments, 2);
            {
                var B478 = ($module)['%keys'](B477, { 'start': 0 });
                {
                    var start__479 = B478['start'];
                    {
                        var B480 = array__475;
                        {
                            var B481 = element__476;
                            {
                                var B482 = start__479;
                                {
                                    var position__483 = B480['indexOf'](B481, B482);
                                    if (($T)(($module)['>'](position__483, -1)))
                                        return(position__483);
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
        ($module)['last-position'] = function B487(array__488, element__489) {
            var B490 = array__488;
            {
                var B491 = element__489;
                {
                    var position__492 = B490['lastIndexOf'](B491);
                    if (($T)(($module)['>'](position__492, -1)))
                        return(position__492);
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
    var B496 = $K('start');
    {
        {
            ($module)['count'] = function B497(item__498, array__499) {
                var result__500 = -1;
                {
                    var pos__501 = 0;
                    {
                        while (($T)(($module)['not'](($module)['not'](pos__501)))) {
                            (function B502(result__503, pos__504) {
                                return(false);
                            }(result__500, pos__501));
                            {
                                var B505 = ($module)['inc'](result__500);
                                {
                                    pos__501 = ($module)['position'](array__499, item__498, B496, ($module)['inc'](pos__501));
                                    result__500 = B505;
                                }
                            }
                        }
                        return(result__500);
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
        ($module)['as-uppercase'] = function B508(string__509) {
            var B510 = string__509;
            return(B510['toUpperCase']());
        };
        ($module)['%export']('as-uppercase', ($module)['as-uppercase']);
    }
    ($module)['%annotate-function'](($module)['as-uppercase'], 'as-uppercase', false);
}
{
    {
        ($module)['as-lowercase'] = function B513(string__514) {
            var B515 = string__514;
            return(B515['toLowerCase']());
        };
        ($module)['%export']('as-lowercase', ($module)['as-lowercase']);
    }
    ($module)['%annotate-function'](($module)['as-lowercase'], 'as-lowercase', false);
}
{
    {
        ($module)['join'] = function B519(array__520, string__521) {
            var B522 = array__520;
            {
                var B523 = string__521;
                return(B522['join'](B523));
            }
        };
        ($module)['%export']('join', ($module)['join']);
    }
    ($module)['%annotate-function'](($module)['join'], 'join', false);
}
{
    {
        ($module)['trim'] = function B526(string__527) {
            var B528 = string__527;
            return(B528['trim']());
        };
        ($module)['%export']('trim', ($module)['trim']);
    }
    ($module)['%annotate-function'](($module)['trim'], 'trim', false);
}
{
    {
        ($module)['replace'] = function B533(string__534, pattern__535, replacement__536) {
            var B537 = string__534;
            {
                var B538 = pattern__535;
                {
                    var B539 = replacement__536;
                    return(B537['replace'](B538, B539));
                }
            }
        };
        ($module)['%export']('replace', ($module)['replace']);
    }
    ($module)['%annotate-function'](($module)['replace'], 'replace', false);
}
{
    {
        ($module)['make-object'] = function B541() {
            var key_values__542 = $SL.call(arguments, 0);
            return(($module)['as-object'](key_values__542));
        };
        ($module)['%export']('make-object', ($module)['make-object']);
    }
    ($module)['%annotate-function'](($module)['make-object'], 'make-object', false);
}
{
    ($module)['<symbol>'] = ($module)['%make-class'](($module)['<object>'], {
        'name': false,
        'module': false
    }, function LsymbolG__543() {
        var B544 = (this);
        {
            B544['name'] = (undefined);
            {
                var B545 = (this);
                return(B545['module'] = (undefined));
            }
        }
    });
    ($module)['%export']('<symbol>', ($module)['<symbol>']);
}
($module)['%symbols'] = {};
{
    {
        ($module)['symbol'] = function B547(name__548, module__549) {
            var B550 = ($module)['as-lowercase'](name__548);
            {
                var B551 = false;
                if (($T)(module__549))
                    B551 = ($module)['as-lowercase'](module__549);
                else
                    B551 = false;
                return(($module)['%%symbol'](B550, B551));
            }
        };
        ($module)['%export']('symbol', ($module)['symbol']);
    }
    ($module)['%annotate-function'](($module)['symbol'], 'symbol', false);
}
{
    {
        ($module)['symbol-name'] = function B553(symbol__554) {
            return(($module)['get'](symbol__554, 'name'));
        };
        ($module)['%export']('symbol-name', ($module)['symbol-name']);
    }
    ($module)['%annotate-function'](($module)['symbol-name'], 'symbol-name', false);
}
{
    {
        ($module)['destructure-symbol'] = function B556(symbol__557) {
            return([
                ($module)['get'](symbol__557, 'name'),
                ($module)['get'](symbol__557, 'module')
            ]);
        };
        ($module)['%export']('destructure-symbol', ($module)['destructure-symbol']);
    }
    ($module)['%annotate-function'](($module)['destructure-symbol'], 'destructure-symbol', false);
}
{
    var B561 = $K('name');
    {
        var B562 = $K('module');
        {
            {
                ($module)['%%symbol'] = function B563(name__564, module__565) {
                    var B566 = module__565;
                    {
                        var moduleT__567 = false;
                        if (($T)(B566))
                            moduleT__567 = B566;
                        else
                            moduleT__567 = '';
                        {
                            var B568 = ($module)['get'](($module)['%symbols'], moduleT__567, name__564);
                            if (($T)(B568))
                                return(B568);
                            else
                                return(($module)['get-setter'](($module)['%symbols'], moduleT__567, name__564, ($module)['make'](($module)['<symbol>'], B561, name__564, B562, module__565)));
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
        ($module)['reset-symbol-counter!'] = function B570() {
            return(($module)['*symbol-count*'] = 0);
        };
        ($module)['%export']('reset-symbol-counter!', ($module)['reset-symbol-counter!']);
    }
    ($module)['%annotate-function'](($module)['reset-symbol-counter!'], 'reset-symbol-counter!', false);
}
{
    {
        ($module)['generate-symbol'] = function B572(env__573, prefix__574) {
            var B577 = false;
            if (($T)(prefix__574))
                B577 = ($module)['concatenate'](prefix__574, '_');
            else
                B577 = '$';
            {
                var B578 = ($module)['as-string'](($module)['*symbol-count*'] = ($module)['+'](($module)['*symbol-count*'], 1));
                {
                    var name__575 = ($module)['concatenate'](B577, B578);
                    {
                        var B579 = false;
                        if (($T)(env__573))
                            B579 = ($module)['get'](env__573, 'module', 'name');
                        else
                            B579 = false;
                        {
                            var result__576 = ($module)['symbol'](name__575, B579);
                            {
                                ($module)['get-setter'](result__576, 'generated?', true);
                                return(result__576);
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
        ($module)['%keys'] = function B582(key_values__583, defaults__584) {
            var i__585 = 0;
            {
                while (($T)(($module)['not'](i__585 >= ($module)['size'](key_values__583)))) {
                    (function B586(i__587) {
                        var key__588 = key_values__583[i__587];
                        {
                            var value__589 = key_values__583[($module)['inc'](i__587, 1)];
                            if (($T)(($module)['instance?'](key__588, ($module)['<keyword>']))) {
                                var B590 = key__588['name'];
                                return(defaults__584[B590] = value__589);
                            } else
                                return(false);
                        }
                    }(i__585));
                    i__585 = ($module)['inc'](i__585, 2);
                }
                {
                    false;
                    return(defaults__584);
                }
            }
        };
        ($module)['%export']('%keys', ($module)['%keys']);
    }
    ($module)['%annotate-function'](($module)['%keys'], '%keys', false);
}
{
    {
        ($module)['find-key'] = function B596(array__597, predicate__598) {
            var B599 = $SL.call(arguments, 2);
            {
                var B600 = ($module)['%keys'](B599, {
                        'skip': 0,
                        'failure': false,
                        'from-end?': false
                    });
                {
                    var skip__601 = B600['skip'];
                    {
                        var failure__602 = B600['failure'];
                        {
                            var from_endQ__603 = B600['from-end?'];
                            {
                                var keys__604 = ($module)['object-properties'](array__597);
                                {
                                    var B609 = function B605(index__606) {
                                        return(predicate__598(($module)['element'](array__597, index__606)));
                                    };
                                    {
                                        var B610 = false;
                                        if (($T)(from_endQ__603))
                                            B610 = ($module)['reverse'](keys__604);
                                        else
                                            B610 = keys__604;
                                        {
                                            var satisfying_keys__607 = ($module)['choose'](B609, B610);
                                            {
                                                var B608 = ($module)['element'](satisfying_keys__607, skip__601);
                                                if (($T)(B608))
                                                    return(B608);
                                                else
                                                    return(failure__602);
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
        ($module)['parse-integer'] = function B614(value__615) {
            var B616 = $SL.call(arguments, 1);
            {
                var B617 = ($module)['%keys'](B616, { 'radix': 10 });
                {
                    var radix__618 = B617['radix'];
                    return(parseInt(value__615, radix__618));
                }
            }
        };
        ($module)['%export']('parse-integer', ($module)['parse-integer']);
    }
    ($module)['%annotate-function'](($module)['parse-integer'], 'parse-integer', false);
}
{
    {
        ($module)['element'] = function B623(array__624, index__625) {
            var B626 = $SL.call(arguments, 2);
            {
                var B627 = ($module)['%keys'](B626, { 'default': false });
                {
                    var default__628 = B627['default'];
                    {
                        var B629 = array__624[index__625];
                        if (($T)(B629))
                            return(B629);
                        else
                            return(default__628);
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
        ($module)['element-setter'] = function B631(array__632, key__633, value__634) {
            return(array__632[key__633] = value__634);
        };
        ($module)['%export']('element-setter', ($module)['element-setter']);
    }
    ($module)['%annotate-function'](($module)['element-setter'], 'element-setter', true);
}
{
    {
        ($module)['replace-subsequence'] = function B638(target_array__639, insert_array__640) {
            var B641 = $SL.call(arguments, 2);
            {
                var B642 = ($module)['%keys'](B641, {
                        'start': 0,
                        'end': ($module)['size'](target_array__639)
                    });
                {
                    var start__643 = B642['start'];
                    {
                        var end__644 = B642['end'];
                        return(($module)['concatenate'](($module)['slice'](target_array__639, 0, start__643), insert_array__640, ($module)['slice'](target_array__639, end__644)));
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
        ($module)['replace-subsequence!'] = function B648(target_array__649, insert_array__650) {
            var B651 = $SL.call(arguments, 2);
            {
                var B652 = ($module)['%keys'](B651, {
                        'start': 0,
                        'end': ($module)['size'](target_array__649)
                    });
                {
                    var start__653 = B652['start'];
                    {
                        var end__654 = B652['end'];
                        {
                            var rest__655 = ($module)['%concat']([
                                    start__653,
                                    ($module)['-'](end__654, start__653)
                                ], insert_array__650);
                            {
                                []['splice']['apply'](target_array__649, rest__655);
                                return(target_array__649);
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
        ($module)['remove!'] = function B663(array__664, value__665) {
            var B666 = $SL.call(arguments, 2);
            {
                var B667 = ($module)['%keys'](B666, { 'test': ($module)['=='] });
                {
                    var test__668 = B667['test'];
                    {
                        var B669 = ($module)['find-key'](array__664, ($module)['curry'](test__668, value__665));
                        {
                            if (($T)(B669)) {
                                var key__670 = B669;
                                {
                                    var B671 = array__664;
                                    {
                                        var B672 = key__670;
                                        {
                                            var B673 = 1;
                                            B671['splice'](B672, B673);
                                        }
                                    }
                                }
                            }
                            return(array__664);
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
        ($module)['remove'] = function B677(array__678, value__679) {
            var B680 = $SL.call(arguments, 2);
            {
                var B681 = ($module)['%keys'](B680, { 'test': ($module)['=='] });
                {
                    var test__682 = B681['test'];
                    return(($module)['remove!'](($module)['slice'](array__678), value__679, B257, test__682));
                }
            }
        };
        ($module)['%export']('remove', ($module)['remove']);
    }
    ($module)['%annotate-function'](($module)['remove'], 'remove', false);
}
{
    {
        ($module)['interpose'] = function B685(separator__686, array__687) {
            return(($module)['reduce1'](function B688(a__689, b__690) {
                return(($module)['concatenate']([
                    a__689,
                    separator__686
                ], b__690));
            }, array__687));
        };
        ($module)['%export']('interpose', ($module)['interpose']);
    }
    ($module)['%annotate-function'](($module)['interpose'], 'interpose', false);
}
{
    {
        ($module)['any?'] = function B694(function__695, values__696) {
            var value__697 = false;
            {
                var n__698 = ($module)['size'](values__696);
                {
                    var i__699 = 0;
                    {
                        while (true) {
                            var B700 = value__697;
                            {
                                var B703 = false;
                                if (($T)(B700))
                                    B703 = B700;
                                else
                                    B703 = ($module)['>='](i__699, n__698);
                                {
                                    var B704 = ($module)['not'](B703);
                                    if (($T)(B704)) {
                                        (function B701(i__702) {
                                            return(value__697 = function__695(values__696[i__702]));
                                        }(i__699));
                                        i__699 = ($module)['inc'](i__699);
                                    } else
                                        break;
                                }
                            }
                        }
                        return(value__697);
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
        ($module)['member?'] = function B709(value__710, array__711) {
            var B712 = $SL.call(arguments, 2);
            {
                var B713 = ($module)['%keys'](B712, { 'test': ($module)['binary=='] });
                {
                    var test__714 = B713['test'];
                    return(($module)['any?'](function B715(other_value__716) {
                        return(test__714(value__710, other_value__716));
                    }, array__711));
                }
            }
        };
        ($module)['%export']('member?', ($module)['member?']);
    }
    ($module)['%annotate-function'](($module)['member?'], 'member?', false);
}
{
    {
        ($module)['every?'] = function B718(function__719, array__720) {
            return(($module)['not'](($module)['any?'](($module)['complement'](function__719), array__720)));
        };
        ($module)['%export']('every?', ($module)['every?']);
    }
    ($module)['%annotate-function'](($module)['every?'], 'every?', false);
}
{
    {
        ($module)['map'] = function B728(function__729) {
            var arrays__730 = $SL.call(arguments, 1);
            {
                var result__731 = [];
                {
                    if (($T)(($module)['empty?'](($module)['rest'](arrays__730)))) {
                        var B732 = ($module)['first'](arrays__730);
                        {
                            var B733 = false;
                            {
                                var B734 = false;
                                {
                                    var B735 = [B732];
                                    {
                                        while (true) {
                                            var B736 = B733;
                                            {
                                                var B740 = false;
                                                if (($T)(B736))
                                                    B740 = B736;
                                                else
                                                    B740 = ($module)['any?'](($module)['empty?'], B735);
                                                {
                                                    var B741 = ($module)['not'](B740);
                                                    if (($T)(B741)) {
                                                        var item__737 = ($module)['first'](B732);
                                                        {
                                                            (function B738(item__739) {
                                                                return(($module)['push-last'](result__731, function__729(item__739)));
                                                            }(item__737));
                                                            {
                                                                B732 = ($module)['rest'](B732);
                                                                B735 = [B732];
                                                            }
                                                        }
                                                    } else
                                                        break;
                                                }
                                            }
                                        }
                                        B734;
                                    }
                                }
                            }
                        }
                    } else
                        while (($T)(($module)['not'](($module)['any?'](($module)['empty?'], arrays__730)))) {
                            ($module)['push-last'](result__731, ($module)['apply'](function__729, ($module)['map'](($module)['first'], arrays__730)));
                            arrays__730 = ($module)['map'](($module)['rest'], arrays__730);
                        }
                    return(result__731);
                }
            }
        };
        ($module)['%export']('map', ($module)['map']);
    }
    ($module)['%annotate-function'](($module)['map'], 'map', false);
}
{
    {
        ($module)['do'] = function B749(function__750) {
            var arrays__751 = $SL.call(arguments, 1);
            {
                if (($T)(($module)['empty?'](($module)['rest'](arrays__751)))) {
                    var B752 = ($module)['first'](arrays__751);
                    {
                        var B753 = false;
                        {
                            var B754 = false;
                            {
                                var B755 = [B752];
                                {
                                    while (true) {
                                        var B756 = B753;
                                        {
                                            var B760 = false;
                                            if (($T)(B756))
                                                B760 = B756;
                                            else
                                                B760 = ($module)['any?'](($module)['empty?'], B755);
                                            {
                                                var B761 = ($module)['not'](B760);
                                                if (($T)(B761)) {
                                                    var item__757 = ($module)['first'](B752);
                                                    {
                                                        (function B758(item__759) {
                                                            return(function__750(item__759));
                                                        }(item__757));
                                                        {
                                                            B752 = ($module)['rest'](B752);
                                                            B755 = [B752];
                                                        }
                                                    }
                                                } else
                                                    break;
                                            }
                                        }
                                    }
                                    B754;
                                }
                            }
                        }
                    }
                } else
                    while (($T)(($module)['not'](($module)['any?'](($module)['empty?'], arrays__751)))) {
                        ($module)['apply'](function__750, ($module)['map'](($module)['first'], arrays__751));
                        arrays__751 = ($module)['map'](($module)['rest'], arrays__751);
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
        ($module)['choose'] = function B769(function__770, array__771) {
            var result__772 = [];
            {
                var B773 = array__771;
                {
                    var B774 = false;
                    {
                        var B775 = false;
                        {
                            var B776 = [B773];
                            {
                                while (true) {
                                    var B777 = B774;
                                    {
                                        var B781 = false;
                                        if (($T)(B777))
                                            B781 = B777;
                                        else
                                            B781 = ($module)['any?'](($module)['empty?'], B776);
                                        {
                                            var B782 = ($module)['not'](B781);
                                            if (($T)(B782)) {
                                                var element__778 = ($module)['first'](B773);
                                                {
                                                    (function B779(element__780) {
                                                        if (($T)(function__770(element__780)))
                                                            return(($module)['push-last'](result__772, element__780));
                                                        else
                                                            return(false);
                                                    }(element__778));
                                                    {
                                                        B773 = ($module)['rest'](B773);
                                                        B776 = [B773];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                                {
                                    B775;
                                    return(result__772);
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
        ($module)['copy-sequence'] = function B787(array__788) {
            var B789 = $SL.call(arguments, 1);
            {
                var B790 = ($module)['%keys'](B789, {
                        'start': 0,
                        'end': false
                    });
                {
                    var start__791 = B790['start'];
                    {
                        var end__792 = B790['end'];
                        {
                            var B793 = end__792;
                            {
                                var end__794 = false;
                                if (($T)(B793))
                                    end__794 = B793;
                                else
                                    end__794 = (undefined);
                                return(($module)['slice'](array__788, start__791, end__794));
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
        ($module)['make'] = function B796(type__797) {
            var arguments__798 = $SL.call(arguments, 1);
            {
                var object__799 = new(type__797);
                {
                    ($module)['apply'](($module)['initialize'], object__799, arguments__798);
                    return(object__799);
                }
            }
        };
        ($module)['%export']('make', ($module)['make']);
    }
    ($module)['%annotate-function'](($module)['make'], 'make', false);
}
{
    {
        ($module)['object-properties'] = function B806(object__807) {
            var B808 = $SL.call(arguments, 1);
            {
                var B809 = ($module)['%keys'](B808, { 'inherited?': false });
                {
                    var inheritedQ__810 = B809['inherited?'];
                    if (($T)(($module)['instance?'](object__807, ($module)['<array>']))) {
                        var result__811 = [];
                        {
                            var B812 = ($module)['size'](object__807);
                            {
                                var i__813 = 0;
                                {
                                    while (($T)(($module)['not'](($module)['binary>='](i__813, B812)))) {
                                        (function B814(i__815) {
                                            return(($module)['push-last'](result__811, i__815));
                                        }(i__813));
                                        i__813 = ($module)['inc'](i__813);
                                    }
                                    {
                                        false;
                                        return(result__811);
                                    }
                                }
                            }
                        }
                    } else {
                        var B816 = inheritedQ__810;
                        {
                            var B819 = false;
                            if (($T)(B816))
                                B819 = B816;
                            else
                                B819 = typeof(object__807) !== 'object';
                            if (($T)(B819)) {
                                var i__817 = false;
                                {
                                    var result__818 = [];
                                    {
                                        for (i__817 in object__807) (inheritedQ__810||$HP.call(object__807, i__817)) &&result__818.push(i__817);
                                        return(result__818);
                                    }
                                }
                            } else
                                return(Object.keys(object__807));
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
        ($module)['object-values'] = function B822(object__823) {
            return(($module)['map'](function B824(property__825) {
                return(($module)['get'](object__823, property__825));
            }, ($module)['object-properties'](object__823)));
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
    var B830 = $K('inherited?');
    {
        ($module)['initialize'] = ($module)['%make-method']('initialize', function B831(object__832) {
            var rest__833 = $SL.call(arguments, 1);
            {
                var arguments__834 = ($module)['as-object'](rest__833);
                {
                    var B835 = ($module)['type'](object__832)['%properties'];
                    {
                        if (($T)(B835)) {
                            var properties__836 = B835;
                            ($module)['do'](function B837(property__838) {
                                var B842 = false;
                                if (($T)(($module)['not'](($module)['has?'](($module)['<object>']['prototype'], property__838))))
                                    B842 = typeof(object__832[property__838]) === 'undefined';
                                else
                                    B842 = false;
                                if (($T)(B842)) {
                                    var B839 = arguments__834[property__838];
                                    {
                                        var value__841 = false;
                                        if (($T)(B839))
                                            value__841 = B839;
                                        else {
                                            var value__840 = properties__836[property__838];
                                            if (($T)(value__840))
                                                value__841 = value__840();
                                            else
                                                value__841 = false;
                                        }
                                        return(object__832[property__838] = value__841);
                                    }
                                } else
                                    return(false);
                            }, ($module)['object-properties'](properties__836, B830, true));
                        }
                        return(object__832);
                    }
                }
            }
        }, false, ($module)['<object>'], ($module)['initialize']);
        ($module)['%export']('initialize', ($module)['initialize']);
    }
}
{
    ($module)['<hash-symbol>'] = ($module)['%make-class'](($module)['<object>'], { 'name': false }, function Lhash_symbolG__843() {
        var B844 = (this);
        return(B844['name'] = (undefined));
    });
    ($module)['%export']('<hash-symbol>', ($module)['<hash-symbol>']);
}
{
    var key__845 = ($module)['make'](($module)['<hash-symbol>'], B561, 'key');
    $KEY = key__845;
}
{
    var rest__846 = ($module)['make'](($module)['<hash-symbol>'], B561, 'rest');
    $REST = rest__846;
}
{
    {
        ($module)['get'] = function B854(object__855) {
            var properties__856 = $SL.call(arguments, 1);
            {
                var result__857 = false;
                {
                    var B858 = properties__856;
                    {
                        var B859 = false;
                        {
                            var B860 = false;
                            {
                                var B861 = [B858];
                                {
                                    while (true) {
                                        var B862 = B859;
                                        {
                                            var B866 = false;
                                            if (($T)(B862))
                                                B866 = B862;
                                            else
                                                B866 = ($module)['any?'](($module)['empty?'], B861);
                                            {
                                                var B867 = ($module)['not'](B866);
                                                if (($T)(B867)) {
                                                    var property__863 = ($module)['first'](B858);
                                                    if (($T)(($module)['not'](($module)['has?'](object__855, property__863)))) {
                                                        B860 = result__857 = false;
                                                        B859 = true;
                                                    } else {
                                                        (function B864(property__865) {
                                                            result__857 = object__855[property__865];
                                                            return(object__855 = result__857);
                                                        }(property__863));
                                                        {
                                                            B858 = ($module)['rest'](B858);
                                                            B861 = [B858];
                                                        }
                                                    }
                                                } else
                                                    break;
                                            }
                                        }
                                    }
                                    {
                                        B860;
                                        return(result__857);
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
        ($module)['get-setter'] = function B869(object__870) {
            var propertiesSvalue__871 = $SL.call(arguments, 1);
            if (($T)(($module)['<='](($module)['size'](propertiesSvalue__871), 2))) {
                var B874 = ($module)['first'](propertiesSvalue__871);
                return(object__870[B874] = ($module)['second'](propertiesSvalue__871));
            } else {
                var property__872 = ($module)['first'](propertiesSvalue__871);
                {
                    var object2__873 = false;
                    if (($T)(($module)['has?'](object__870, property__872)))
                        object2__873 = object__870[property__872];
                    else
                        object2__873 = object__870[property__872] = ($module)['make-object']();
                    return(($module)['apply'](B869, object2__873, ($module)['rest'](propertiesSvalue__871)));
                }
            }
        };
        ($module)['%export']('get-setter', ($module)['get-setter']);
    }
    ($module)['%annotate-function'](($module)['get-setter'], 'get-setter', true);
}
{
    {
        ($module)['remove-property!'] = function B882(object__883) {
            var properties__884 = $SL.call(arguments, 1);
            {
                var result__885 = true;
                {
                    var B886 = ($module)['but-last'](properties__884);
                    {
                        var B887 = false;
                        {
                            var B888 = false;
                            {
                                var B889 = [B886];
                                {
                                    while (true) {
                                        var B890 = B887;
                                        {
                                            var B895 = false;
                                            if (($T)(B890))
                                                B895 = B890;
                                            else
                                                B895 = ($module)['any?'](($module)['empty?'], B889);
                                            {
                                                var B896 = ($module)['not'](B895);
                                                if (($T)(B896)) {
                                                    var property__891 = ($module)['first'](B886);
                                                    if (($T)(($module)['not'](($module)['has?'](object__883, property__891)))) {
                                                        B888 = result__885 = false;
                                                        B887 = true;
                                                    } else {
                                                        (function B892(property__893) {
                                                            result__885 = object__883[property__893];
                                                            return(object__883 = result__885);
                                                        }(property__891));
                                                        {
                                                            B886 = ($module)['rest'](B886);
                                                            B889 = [B886];
                                                        }
                                                    }
                                                } else
                                                    break;
                                            }
                                        }
                                    }
                                    {
                                        B888;
                                        if (($T)(($module)['instance?'](object__883, ($module)['<object>']))) {
                                            var value__894 = object__883[($module)['last'](properties__884)];
                                            {
                                                delete(object__883[($module)['last'](properties__884)]);
                                                return(value__894);
                                            }
                                        } else
                                            return(false);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        ($module)['%export']('remove-property!', ($module)['remove-property!']);
    }
    ($module)['%annotate-function'](($module)['remove-property!'], 'remove-property!', false);
}
{
    {
        ($module)['split'] = function B900(string__901, separator__902) {
            var B903 = string__901;
            {
                var B904 = separator__902;
                return(B903['split'](B904));
            }
        };
        ($module)['%export']('split', ($module)['split']);
    }
    ($module)['%annotate-function'](($module)['split'], 'split', false);
}
{
    {
        ($module)['split-with'] = function B907(function__908, array__909) {
            var a__910 = [];
            {
                var b__911 = [];
                {
                    ($module)['do'](function B912(item__913) {
                        var B914 = false;
                        if (($T)(function__908(item__913)))
                            B914 = a__910;
                        else
                            B914 = b__911;
                        return(($module)['push-last'](B914, item__913));
                    }, array__909);
                    return([
                        a__910,
                        b__911
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
        ($module)['as-hex-string'] = function B918(number__919) {
            var B920 = number__919;
            {
                var B921 = 16;
                return(B920['toString'](B921));
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
    ($module)['description'] = ($module)['%make-method']('description', function B923(number__924) {
        return('' + number__924);
    }, false, ($module)['<number>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B930(string__931) {
        var B932 = string__931;
        {
            var B933 = '"';
            {
                var B934 = '\\"';
                {
                    var B935 = 'g';
                    {
                        var escaped__936 = B932['replace'](B933, B934, B935);
                        return('"' + escaped__936 + '"');
                    }
                }
            }
        }
    }, false, ($module)['<string>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B938(array__939) {
        return('(' + ($module)['join'](($module)['map'](($module)['description'], array__939), ' ') + ')');
    }, false, ($module)['<array>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B941(value__942) {
        if (($T)(value__942))
            return('#t');
        else
            return('#f');
    }, false, ($module)['<boolean>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B945(symbol__946) {
        var B947 = ($module)['get'](symbol__946, 'module');
        {
            var B949 = false;
            if (($T)(B947)) {
                var module__948 = B947;
                B949 = ($module)['concatenate'](module__948, '::');
            } else
                B949 = '';
            {
                var B950 = ($module)['symbol-name'](symbol__946);
                return(B949 + B950);
            }
        }
    }, false, ($module)['<symbol>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B952(keyword__953) {
        return(($module)['symbol-name'](keyword__953) + ':');
    }, false, ($module)['<keyword>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B955(symbol__956) {
        return('#' + ($module)['symbol-name'](symbol__956));
    }, false, ($module)['<hash-symbol>'], ($module)['description']);
    ($module)['%export']('description', ($module)['description']);
}
{
    ($module)['description'] = ($module)['%make-method']('description', function B958(function__959) {
        if (($T)(($module)['get'](function__959, '%class?')))
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
        ($module)['mod'] = function B961(number1__962, number2__963) {
            return(number1__962 % number2__963);
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
        ($module)['as-radiant'] = function B965(number__966) {
            return(($module)['*'](number__966, ($module)['$radiant']));
        };
        ($module)['%export']('as-radiant', ($module)['as-radiant']);
    }
    ($module)['%annotate-function'](($module)['as-radiant'], 'as-radiant', false);
}
{
    {
        ($module)['signal'] = function B968(error__969) {
            throw(error__969);
            return(false);
        };
        ($module)['%export']('signal', ($module)['signal']);
    }
    ($module)['%annotate-function'](($module)['signal'], 'signal', false);
}
{
    {
        ($module)['extend!'] = function B977(object1__978, object2__979) {
            var B980 = ($module)['object-properties'](object2__979);
            {
                var B981 = false;
                {
                    var B982 = false;
                    {
                        var B983 = [B980];
                        {
                            while (true) {
                                var B984 = B981;
                                {
                                    var B988 = false;
                                    if (($T)(B984))
                                        B988 = B984;
                                    else
                                        B988 = ($module)['any?'](($module)['empty?'], B983);
                                    {
                                        var B989 = ($module)['not'](B988);
                                        if (($T)(B989)) {
                                            var key__985 = ($module)['first'](B980);
                                            {
                                                (function B986(key__987) {
                                                    return(($module)['get-setter'](object1__978, key__987, ($module)['get'](object2__979, key__987)));
                                                }(key__985));
                                                {
                                                    B980 = ($module)['rest'](B980);
                                                    B983 = [B980];
                                                }
                                            }
                                        } else
                                            break;
                                    }
                                }
                            }
                            {
                                B982;
                                return(object1__978);
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
        ($module)['as-property-list'] = function B999(object__1000) {
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
                                                    var B1014 = false;
                                                    if (($T)(B1009))
                                                        B1014 = B1009;
                                                    else
                                                        B1014 = ($module)['any?'](($module)['empty?'], B1008);
                                                    {
                                                        var B1015 = ($module)['not'](B1014);
                                                        if (($T)(B1015)) {
                                                            var key__1010 = ($module)['first'](B1005);
                                                            {
                                                                (function B1011(key__1012) {
                                                                    var B1013 = false;
                                                                    if (($T)(keywordsQ__1003))
                                                                        B1013 = ($module)['keyword'](($module)['as-string'](key__1012));
                                                                    else
                                                                        B1013 = key__1012;
                                                                    {
                                                                        ($module)['push-last'](result__1004, B1013);
                                                                        return(($module)['push-last'](result__1004, ($module)['get'](object__1000, key__1012)));
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
        ($module)['%export']('as-property-list', ($module)['as-property-list']);
    }
    ($module)['%annotate-function'](($module)['as-property-list'], 'as-property-list', false);
}
{
    {
        ($module)['as-association-list'] = function B1025(object__1026) {
            var B1027 = $SL.call(arguments, 1);
            {
                var B1028 = ($module)['%keys'](B1027, { 'keywords?': false });
                {
                    var keywordsQ__1029 = B1028['keywords?'];
                    {
                        var result__1030 = [];
                        {
                            var B1031 = ($module)['object-properties'](object__1026);
                            {
                                var B1032 = false;
                                {
                                    var B1033 = false;
                                    {
                                        var B1034 = [B1031];
                                        {
                                            while (true) {
                                                var B1035 = B1032;
                                                {
                                                    var B1042 = false;
                                                    if (($T)(B1035))
                                                        B1042 = B1035;
                                                    else
                                                        B1042 = ($module)['any?'](($module)['empty?'], B1034);
                                                    {
                                                        var B1043 = ($module)['not'](B1042);
                                                        if (($T)(B1043)) {
                                                            var key__1036 = ($module)['first'](B1031);
                                                            {
                                                                (function B1037(key__1038) {
                                                                    var B1039 = false;
                                                                    if (($T)(keywordsQ__1029))
                                                                        B1039 = ($module)['keyword'](($module)['as-string'](key__1038));
                                                                    else
                                                                        B1039 = key__1038;
                                                                    {
                                                                        var B1040 = ($module)['get'](object__1026, key__1038);
                                                                        {
                                                                            var B1041 = [
                                                                                    B1039,
                                                                                    B1040
                                                                                ];
                                                                            return(($module)['push-last'](result__1030, B1041));
                                                                        }
                                                                    }
                                                                }(key__1036));
                                                                {
                                                                    B1031 = ($module)['rest'](B1031);
                                                                    B1034 = [B1031];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                            {
                                                B1033;
                                                return(result__1030);
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
        ($module)['starts-with?'] = function B1048(string__1049, prefix__1050) {
            var B1051 = string__1049;
            {
                var B1052 = prefix__1050;
                {
                    var B1053 = 0;
                    {
                        var B1054 = B1051['indexOf'](B1052, B1053);
                        return(($module)['binary=='](B1054, 0));
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
        ($module)['ends-with?'] = function B1059(string__1060, suffix__1061) {
            var start_index__1062 = string__1060['length'] - suffix__1061['length'];
            {
                var B1063 = string__1060;
                {
                    var B1064 = suffix__1061;
                    {
                        var B1065 = start_index__1062;
                        {
                            var result_index__1066 = B1063['indexOf'](B1064, B1065);
                            return(($module)['%binary=='](result_index__1066, start_index__1062));
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
        ($module)['even?'] = function B1068(number__1069) {
            return(($module)['binary=='](number__1069 % 2, 0));
        };
        ($module)['%export']('even?', ($module)['even?']);
    }
    ($module)['%annotate-function'](($module)['even?'], 'even?', false);
}
{
    {
        ($module)['odd?'] = function B1071(number__1072) {
            return(($module)['binary=='](number__1072 % 2, 1));
        };
        ($module)['%export']('odd?', ($module)['odd?']);
    }
    ($module)['%annotate-function'](($module)['odd?'], 'odd?', false);
}
{
    {
        ($module)['group-by'] = function B1075(predicate__1076, items__1077) {
            return(($module)['reduce'](function B1078(result__1079, item__1080) {
                var key__1081 = predicate__1076(item__1080);
                {
                    if (($T)(($module)['has?'](result__1079, key__1081)))
                        ($module)['push-last'](($module)['get'](result__1079, key__1081), item__1080);
                    else
                        ($module)['get-setter'](result__1079, key__1081, [item__1080]);
                    return(result__1079);
                }
            }, ($module)['make-object'](), items__1077));
        };
        ($module)['%export']('group-by', ($module)['group-by']);
    }
    ($module)['%annotate-function'](($module)['group-by'], 'group-by', false);
}
{
    ($module)['wrap-object'] = function B1083(object__1084) {
        var rest__1085 = $SL.call(arguments, 1);
        {
            var result__1086 = Object.create(object__1084);
            {
                ($module)['extend!'](result__1086, ($module)['as-object'](rest__1085));
                return(result__1086);
            }
        }
    };
    ($module)['%annotate-function'](($module)['wrap-object'], 'wrap-object', false);
}
{
    ($module)['unwrap-object'] = function B1088(object__1089) {
        return(object__1089['__proto__']);
    };
    ($module)['%annotate-function'](($module)['unwrap-object'], 'unwrap-object', false);
}
{
    {
        ($module)['update-with'] = function B1093(fn__1094, obj__1095) {
            var objs__1096 = $SL.call(arguments, 2);
            return(($module)['do'](function B1097(obj2__1098) {
                return(($module)['do'](function B1099(property__1100) {
                    var value__1101 = ($module)['get'](obj2__1098, property__1100);
                    {
                        var B1102 = false;
                        if (($T)(($module)['has?'](obj__1095, property__1100)))
                            B1102 = fn__1094(($module)['get'](obj__1095, property__1100), value__1101);
                        else
                            B1102 = value__1101;
                        return(($module)['get-setter'](obj__1095, property__1100, B1102));
                    }
                }, ($module)['object-properties'](obj2__1098)));
            }, objs__1096));
        };
        ($module)['%export']('update-with', ($module)['update-with']);
    }
    ($module)['%annotate-function'](($module)['update-with'], 'update-with', false);
}
{
    {
        ($module)['as-set'] = function B1104(values__1105) {
            var set__1106 = [];
            return(($module)['set-union!'](set__1106, values__1105));
        };
        ($module)['%export']('as-set', ($module)['as-set']);
    }
    ($module)['%annotate-function'](($module)['as-set'], 'as-set', false);
}
{
    {
        ($module)['set-add!'] = function B1108(set__1109, object__1110) {
            if (($T)(($module)['not'](($module)['member?'](object__1110, set__1109))))
                return(($module)['push-last'](set__1109, object__1110));
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
        ($module)['set-union!'] = function B1112(set1__1113, set2__1114) {
            ($module)['do'](($module)['curry'](($module)['set-add!'], set1__1113), set2__1114);
            return(set1__1113);
        };
        ($module)['%export']('set-union!', ($module)['set-union!']);
    }
    ($module)['%annotate-function'](($module)['set-union!'], 'set-union!', false);
}
{
    {
        ($module)['set-subtract!'] = function B1116(set1__1117, set2__1118) {
            ($module)['do'](($module)['curry'](($module)['set-remove!'], set1__1117), set2__1118);
            return(set1__1117);
        };
        ($module)['%export']('set-subtract!', ($module)['set-subtract!']);
    }
    ($module)['%annotate-function'](($module)['set-subtract!'], 'set-subtract!', false);
}
{
    {
        ($module)['chain-object'] = function B1120(object1__1121, object2__1122) {
            object2__1122['__proto__'] = object1__1121['__proto__'];
            {
                object1__1121['__proto__'] = object2__1122;
                return(object1__1121);
            }
        };
        ($module)['%export']('chain-object', ($module)['chain-object']);
    }
    ($module)['%annotate-function'](($module)['chain-object'], 'chain-object', false);
}
{
    {
        ($module)['unchain-object'] = function B1124(object__1125) {
            var B1126 = false;
            if (($T)(object__1125['__proto__']))
                B1126 = object__1125['__proto__']['__proto__'];
            else
                B1126 = false;
            {
                object__1125['__proto__'] = B1126;
                return(object__1125);
            }
        };
        ($module)['%export']('unchain-object', ($module)['unchain-object']);
    }
    ($module)['%annotate-function'](($module)['unchain-object'], 'unchain-object', false);
}
{
    {
        ($module)['as-hex-string'] = function B1130(number__1131) {
            var B1132 = number__1131;
            {
                var B1133 = 16;
                return(B1132['toString'](B1133));
            }
        };
        ($module)['%export']('as-hex-string', ($module)['as-hex-string']);
    }
    ($module)['%annotate-function'](($module)['as-hex-string'], 'as-hex-string', false);
}
{
    {
        ($module)['make-plain-object'] = function B1135() {
            return((Object.create(null)));
        };
        ($module)['%export']('make-plain-object', ($module)['make-plain-object']);
    }
    ($module)['%annotate-function'](($module)['make-plain-object'], 'make-plain-object', false);
}
{
    {
        ($module)['-'] = function B1137(minuend__1138) {
            var subtrahends__1139 = $SL.call(arguments, 1);
            if (($T)(($module)['empty?'](subtrahends__1139)))
                return(-(minuend__1138));
            else
                return(($module)['reduce'](($module)['binary-'], minuend__1138, subtrahends__1139));
        };
        ($module)['%export']('-', ($module)['-']);
    }
    ($module)['%annotate-function'](($module)['-'], '-', false);
}
{
    {
        ($module)['+'] = function B1141() {
            var numbers__1142 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](numbers__1142)))
                return(0);
            else
                return(($module)['reduce1'](($module)['binary+'], numbers__1142));
        };
        ($module)['%export']('+', ($module)['+']);
    }
    ($module)['%annotate-function'](($module)['+'], '+', false);
}
{
    {
        ($module)['*'] = function B1144() {
            var numbers__1145 = $SL.call(arguments, 0);
            if (($T)(($module)['empty?'](numbers__1145)))
                return(1);
            else
                return(($module)['reduce1'](($module)['binary*'], numbers__1145));
        };
        ($module)['%export']('*', ($module)['*']);
    }
    ($module)['%annotate-function'](($module)['*'], '*', false);
}
{
    {
        ($module)['/'] = function B1147(numerator__1148) {
            var denominators__1149 = $SL.call(arguments, 1);
            if (($T)(($module)['empty?'](denominators__1149)))
                return(($module)['%divide'](1, numerator__1148));
            else
                return(($module)['reduce'](($module)['binary/'], numerator__1148, denominators__1149));
        };
        ($module)['%export']('/', ($module)['/']);
    }
    ($module)['%annotate-function'](($module)['/'], '/', false);
}
{
    {
        ($module)['disjoin'] = function B1153(predicate1__1154) {
            var predicates__1155 = $SL.call(arguments, 1);
            return(function B1156() {
                var arguments__1157 = $SL.call(arguments, 0);
                return(($module)['any?'](function B1158(predicate__1159) {
                    return(($module)['apply'](predicate__1159, arguments__1157));
                }, ($module)['cons'](predicate1__1154, predicates__1155)));
            });
        };
        ($module)['%export']('disjoin', ($module)['disjoin']);
    }
    ($module)['%annotate-function'](($module)['disjoin'], 'disjoin', false);
}
{
    {
        ($module)['conjoin'] = function B1163(predicate1__1164) {
            var predicates__1165 = $SL.call(arguments, 1);
            return(function B1166() {
                var arguments__1167 = $SL.call(arguments, 0);
                {
                    var value__1168 = false;
                    if (($T)(($module)['every?'](function B1169(predicate__1170) {
                            return(value__1168 = ($module)['apply'](predicate__1170, arguments__1167));
                        }, ($module)['cons'](predicate1__1164, predicates__1165))))
                        return(value__1168);
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
        ($module)['ignore'] = function B1172() {
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
    var B1176 = $K('end');
    {
        {
            ($module)['partition'] = function B1177(count__1178, elements__1179) {
                var B1180 = $SL.call(arguments, 2);
                {
                    var B1181 = ($module)['%keys'](B1180, { 'step': count__1178 });
                    {
                        var step__1182 = B1181['step'];
                        {
                            var result__1183 = [];
                            {
                                var total__1184 = ($module)['size'](elements__1179);
                                {
                                    var last_index__1185 = 0;
                                    {
                                        while (($T)(($module)['<'](last_index__1185, total__1184))) {
                                            var new_index__1186 = ($module)['+'](last_index__1185, count__1178);
                                            {
                                                ($module)['push-last'](result__1183, ($module)['copy-sequence'](elements__1179, B496, last_index__1185, B1176, new_index__1186));
                                                last_index__1185 = new_index__1186;
                                            }
                                        }
                                        return(result__1183);
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
        ($module)['repeat-string'] = function B1188(string__1189, count__1190) {
            var result__1191 = '';
            {
                while (($T)(($module)['>'](count__1190, 0))) {
                    if (($T)(($module)['odd?'](count__1190)))
                        result__1191 = ($module)['%concat'](result__1191, string__1189);
                    {
                        count__1190 >>= 1;
                        string__1189 = ($module)['%concat'](string__1189, string__1189);
                    }
                }
                return(result__1191);
            }
        };
        ($module)['%export']('repeat-string', ($module)['repeat-string']);
    }
    ($module)['%annotate-function'](($module)['repeat-string'], 'repeat-string', false);
}
{
    {
        ($module)['substring'] = function B1203(string__1204, start__1205) {
            var B1206 = $SL.call(arguments, 2);
            {
                var B1207 = ($module)['%keys'](B1206, {
                        'end': false,
                        'length': false
                    });
                {
                    var end__1208 = B1207['end'];
                    {
                        var length__1209 = B1207['length'];
                        {
                            var B1218 = false;
                            if (($T)(end__1208))
                                B1218 = length__1209;
                            else
                                B1218 = false;
                            if (($T)(B1218))
                                return(($module)['substring'](string__1204, start__1205, B1176, ($module)['min'](end__1208, ($module)['+'](start__1205, length__1209))));
                            else if (($T)(end__1208)) {
                                var B1210 = string__1204;
                                {
                                    var B1211 = start__1205;
                                    {
                                        var B1212 = end__1208;
                                        return(B1210['substring'](B1211, B1212));
                                    }
                                }
                            } else if (($T)(length__1209)) {
                                var B1213 = string__1204;
                                {
                                    var B1214 = start__1205;
                                    {
                                        var B1215 = length__1209;
                                        return(B1213['substr'](B1214, B1215));
                                    }
                                }
                            } else {
                                var B1216 = string__1204;
                                {
                                    var B1217 = start__1205;
                                    return(B1216['substring'](B1217));
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
        ($module)['expression?'] = function B1220(form__1221) {
            if (($T)(($module)['instance?'](form__1221, ($module)['<array>'])))
                return(($module)['instance?'](($module)['first'](form__1221), ($module)['<symbol>']));
            else
                return(false);
        };
        ($module)['%export']('expression?', ($module)['expression?']);
    }
    ($module)['%annotate-function'](($module)['expression?'], 'expression?', false);
}
