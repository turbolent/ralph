require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1203(name__1204, value__1205) {
            var B1207 = (exports);
            return(B1207[name__1204] = value__1205);
        };
        {
            ($module)['%eval'] = function B1206() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1208 = require('ralph/core');
{
    var B1286 = require('ralph/stream');
    var B1417 = require('ralph/file-stream');
}
{
    ($module)['format-integer'] = function B1419(number__1420) {
        return(B1208['as-string'](number__1420));
    };
    B1208['%annotate-function'](($module)['format-integer'], 'format-integer', false);
}
{
    var B1426 = $K('message');
    {
        {
            ($module)['format'] = function B1427(stream__1428, control_string__1429) {
                var args__1430 = $SL.call(arguments, 2);
                {
                    var dispatch__1431 = false;
                    {
                        dispatch__1431 = function B1432(char__1433, arg__1434) {
                            var B1435 = B1208['as-lowercase'](char__1433);
                            {
                                var B1436 = B1208['=='](B1435, 's');
                                {
                                    var B1443 = false;
                                    if (($T)(B1436))
                                        B1443 = B1436;
                                    else
                                        B1443 = B1208['=='](B1435, 'c');
                                    if (($T)(B1443))
                                        return(B1208['as-string'](arg__1434));
                                    else if (($T)(B1208['=='](B1435, '='))) {
                                        var B1437 = B1208['description'](arg__1434);
                                        if (($T)(B1437))
                                            return(B1437);
                                        else
                                            return('');
                                    } else if (($T)(B1208['=='](B1435, 'b')))
                                        return(($module)['format-integer'](arg__1434, 2));
                                    else if (($T)(B1208['=='](B1435, 'o')))
                                        return(($module)['format-integer'](arg__1434, 8));
                                    else if (($T)(B1208['=='](B1435, 'd')))
                                        return(($module)['format-integer'](arg__1434, 10));
                                    else if (($T)(B1208['=='](B1435, 'x')))
                                        return(($module)['format-integer'](arg__1434, 16));
                                    else if (($T)(B1208['=='](B1435, 'm'))) {
                                        arg__1434(stream__1428);
                                        return('');
                                    } else
                                        return(B1208['signal'](B1208['make'](B1208['<error>'], B1426, B1208['concatenate']('Unknown format dispatch character ', char__1433))));
                                }
                            }
                        };
                        {
                            var index__1438 = 0;
                            {
                                while (($T)(B1208['not'](B1208['empty?'](control_string__1429)))) {
                                    var next_dispatch__1439 = B1208['position'](control_string__1429, '%');
                                    if (($T)(B1208['>'](next_dispatch__1439, 0))) {
                                        B1286['stream-write'](stream__1428, B1208['slice'](control_string__1429, 0, next_dispatch__1439));
                                        control_string__1429 = B1208['slice'](control_string__1429, next_dispatch__1439);
                                    } else if (($T)(next_dispatch__1439)) {
                                        var arg__1440 = B1208['element'](args__1430, index__1438);
                                        {
                                            var char__1441 = B1208['second'](control_string__1429);
                                            {
                                                var percent__1442 = B1208['=='](char__1441, '%');
                                                {
                                                    var B1444 = B1286['stream-write'];
                                                    {
                                                        var B1445 = false;
                                                        if (($T)(percent__1442))
                                                            B1445 = '%';
                                                        else
                                                            B1445 = dispatch__1431(char__1441, arg__1440);
                                                        {
                                                            B1444(stream__1428, B1445);
                                                            {
                                                                control_string__1429 = B1208['slice'](control_string__1429, 2);
                                                                if (($T)(B1208['not'](percent__1442)))
                                                                    index__1438 = B1208['+'](index__1438, 1);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        B1286['stream-write'](stream__1428, control_string__1429);
                                        control_string__1429 = '';
                                    }
                                }
                                return(false);
                            }
                        }
                    }
                }
            };
            ($module)['%export']('format', ($module)['format']);
        }
        B1208['%annotate-function'](($module)['format'], 'format', false);
    }
}
{
    {
        ($module)['format-out'] = function B1447(control_string__1448) {
            var args__1449 = $SL.call(arguments, 1);
            return(B1208['apply'](($module)['format'], B1417['*standard-output*'], control_string__1448, args__1449));
        };
        ($module)['%export']('format-out', ($module)['format-out']);
    }
    B1208['%annotate-function'](($module)['format-out'], 'format-out', false);
}
{
    {
        ($module)['format-to-string'] = function B1451(control_string__1452) {
            var args__1453 = $SL.call(arguments, 1);
            {
                var stream__1454 = B1208['make'](B1286['<string-stream>']);
                {
                    B1208['apply'](($module)['format'], stream__1454, control_string__1452, args__1453);
                    return(B1286['stream-contents'](stream__1454));
                }
            }
        };
        ($module)['%export']('format-to-string', ($module)['format-to-string']);
    }
    B1208['%annotate-function'](($module)['format-to-string'], 'format-to-string', false);
}
