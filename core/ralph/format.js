{
    var $module = Object.create(null);
    ($module)['%export'] = function B1200(name__1201, value__1202) {
        var B1203 = (exports);
        return(B1203[name__1201] = value__1202);
    };
}
var B1204 = require('ralph/core');
{
    var B1282 = require('ralph/stream');
    var B1413 = require('ralph/file-stream');
}
{
    ($module)['format-integer'] = function B1415(number__1416) {
        return(B1204['as-string'](number__1416));
    };
    B1204['%annotate-function'](($module)['format-integer'], 'format-integer', false);
}
{
    var B1422 = $K('message');
    {
        {
            ($module)['format'] = function B1423(stream__1424, control_string__1425) {
                var args__1426 = $SL.call(arguments, 2);
                {
                    var dispatch__1427 = false;
                    {
                        dispatch__1427 = function B1428(char__1429, arg__1430) {
                            var B1431 = B1204['as-lowercase'](char__1429);
                            {
                                var B1432 = B1204['=='](B1431, 's');
                                {
                                    var B1439 = false;
                                    if (($T)(B1432))
                                        B1439 = B1432;
                                    else
                                        B1439 = B1204['=='](B1431, 'c');
                                    if (($T)(B1439))
                                        return(B1204['as-string'](arg__1430));
                                    else if (($T)(B1204['=='](B1431, '='))) {
                                        var B1433 = B1204['description'](arg__1430);
                                        if (($T)(B1433))
                                            return(B1433);
                                        else
                                            return('');
                                    } else if (($T)(B1204['=='](B1431, 'b')))
                                        return(($module)['format-integer'](arg__1430, 2));
                                    else if (($T)(B1204['=='](B1431, 'o')))
                                        return(($module)['format-integer'](arg__1430, 8));
                                    else if (($T)(B1204['=='](B1431, 'd')))
                                        return(($module)['format-integer'](arg__1430, 10));
                                    else if (($T)(B1204['=='](B1431, 'x')))
                                        return(($module)['format-integer'](arg__1430, 16));
                                    else if (($T)(B1204['=='](B1431, 'm'))) {
                                        arg__1430(stream__1424);
                                        return('');
                                    } else
                                        return(B1204['signal'](B1204['make'](B1204['<error>'], B1422, B1204['concatenate']('Unknown format dispatch character ', char__1429))));
                                }
                            }
                        };
                        {
                            var index__1434 = 0;
                            {
                                while (($T)(B1204['not'](B1204['empty?'](control_string__1425)))) {
                                    var next_dispatch__1435 = B1204['position'](control_string__1425, '%');
                                    if (($T)(B1204['>'](next_dispatch__1435, 0))) {
                                        B1282['stream-write'](stream__1424, B1204['slice'](control_string__1425, 0, next_dispatch__1435));
                                        control_string__1425 = B1204['slice'](control_string__1425, next_dispatch__1435);
                                    } else if (($T)(next_dispatch__1435)) {
                                        var arg__1436 = B1204['element'](args__1426, index__1434);
                                        {
                                            var char__1437 = B1204['second'](control_string__1425);
                                            {
                                                var percent__1438 = B1204['=='](char__1437, '%');
                                                {
                                                    var B1440 = B1282['stream-write'];
                                                    {
                                                        var B1441 = false;
                                                        if (($T)(percent__1438))
                                                            B1441 = '%';
                                                        else
                                                            B1441 = dispatch__1427(char__1437, arg__1436);
                                                        {
                                                            B1440(stream__1424, B1441);
                                                            {
                                                                control_string__1425 = B1204['slice'](control_string__1425, 2);
                                                                if (($T)(B1204['not'](percent__1438)))
                                                                    index__1434 = B1204['+'](index__1434, 1);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        B1282['stream-write'](stream__1424, control_string__1425);
                                        control_string__1425 = '';
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
        B1204['%annotate-function'](($module)['format'], 'format', false);
    }
}
{
    {
        ($module)['format-out'] = function B1443(control_string__1444) {
            var args__1445 = $SL.call(arguments, 1);
            return(B1204['apply'](($module)['format'], B1413['*standard-output*'], control_string__1444, args__1445));
        };
        ($module)['%export']('format-out', ($module)['format-out']);
    }
    B1204['%annotate-function'](($module)['format-out'], 'format-out', false);
}
{
    {
        ($module)['format-to-string'] = function B1447(control_string__1448) {
            var args__1449 = $SL.call(arguments, 1);
            {
                var stream__1450 = B1204['make'](B1282['<string-stream>']);
                {
                    B1204['apply'](($module)['format'], stream__1450, control_string__1448, args__1449);
                    return(B1282['stream-contents'](stream__1450));
                }
            }
        };
        ($module)['%export']('format-to-string', ($module)['format-to-string']);
    }
    B1204['%annotate-function'](($module)['format-to-string'], 'format-to-string', false);
}
{
    ($module)['%eval'] = function B1452() {
        return(eval((arguments[0])));
    };
    {
        B1204['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
