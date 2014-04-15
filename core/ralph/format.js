require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1225(name__1226, value__1227) {
            var B1229 = (exports);
            return(B1229[name__1226] = value__1227);
        };
        {
            ($module)['%eval'] = function B1228() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1230 = require('ralph/core');
{
    var B1308 = require('ralph/stream');
    var B1439 = require('ralph/file-stream');
}
{
    ($module)['format-integer'] = function B1441(number__1442) {
        return(B1230['as-string'](number__1442));
    };
    B1230['%annotate-function'](($module)['format-integer'], 'format-integer', false);
}
{
    var B1448 = $K('message');
    {
        {
            ($module)['format'] = function B1449(stream__1450, control_string__1451) {
                var args__1452 = $SL.call(arguments, 2);
                {
                    var dispatch__1453 = false;
                    {
                        dispatch__1453 = function B1454(char__1455, arg__1456) {
                            var B1457 = B1230['as-lowercase'](char__1455);
                            {
                                var B1458 = B1230['=='](B1457, 's');
                                {
                                    var B1465 = false;
                                    if (($T)(B1458))
                                        B1465 = B1458;
                                    else
                                        B1465 = B1230['=='](B1457, 'c');
                                    if (($T)(B1465))
                                        return(B1230['as-string'](arg__1456));
                                    else if (($T)(B1230['=='](B1457, '='))) {
                                        var B1459 = B1230['description'](arg__1456);
                                        if (($T)(B1459))
                                            return(B1459);
                                        else
                                            return('');
                                    } else if (($T)(B1230['=='](B1457, 'b')))
                                        return(($module)['format-integer'](arg__1456, 2));
                                    else if (($T)(B1230['=='](B1457, 'o')))
                                        return(($module)['format-integer'](arg__1456, 8));
                                    else if (($T)(B1230['=='](B1457, 'd')))
                                        return(($module)['format-integer'](arg__1456, 10));
                                    else if (($T)(B1230['=='](B1457, 'x')))
                                        return(($module)['format-integer'](arg__1456, 16));
                                    else if (($T)(B1230['=='](B1457, 'm'))) {
                                        arg__1456(stream__1450);
                                        return('');
                                    } else
                                        return(B1230['signal'](B1230['make'](B1230['<error>'], B1448, B1230['concatenate']('Unknown format dispatch character ', char__1455))));
                                }
                            }
                        };
                        {
                            var index__1460 = 0;
                            {
                                while (($T)(B1230['not'](B1230['empty?'](control_string__1451)))) {
                                    var next_dispatch__1461 = B1230['position'](control_string__1451, '%');
                                    if (($T)(B1230['>'](next_dispatch__1461, 0))) {
                                        B1308['stream-write'](stream__1450, B1230['slice'](control_string__1451, 0, next_dispatch__1461));
                                        control_string__1451 = B1230['slice'](control_string__1451, next_dispatch__1461);
                                    } else if (($T)(next_dispatch__1461)) {
                                        var arg__1462 = B1230['element'](args__1452, index__1460);
                                        {
                                            var char__1463 = B1230['second'](control_string__1451);
                                            {
                                                var percent__1464 = B1230['=='](char__1463, '%');
                                                {
                                                    var B1466 = B1308['stream-write'];
                                                    {
                                                        var B1467 = false;
                                                        if (($T)(percent__1464))
                                                            B1467 = '%';
                                                        else
                                                            B1467 = dispatch__1453(char__1463, arg__1462);
                                                        {
                                                            B1466(stream__1450, B1467);
                                                            {
                                                                control_string__1451 = B1230['slice'](control_string__1451, 2);
                                                                if (($T)(B1230['not'](percent__1464)))
                                                                    index__1460 = B1230['+'](index__1460, 1);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        B1308['stream-write'](stream__1450, control_string__1451);
                                        control_string__1451 = '';
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
        B1230['%annotate-function'](($module)['format'], 'format', false);
    }
}
{
    {
        ($module)['format-out'] = function B1469(control_string__1470) {
            var args__1471 = $SL.call(arguments, 1);
            return(B1230['apply'](($module)['format'], B1439['*standard-output*'], control_string__1470, args__1471));
        };
        ($module)['%export']('format-out', ($module)['format-out']);
    }
    B1230['%annotate-function'](($module)['format-out'], 'format-out', false);
}
{
    {
        ($module)['format-to-string'] = function B1473(control_string__1474) {
            var args__1475 = $SL.call(arguments, 1);
            {
                var stream__1476 = B1230['make'](B1308['<string-stream>']);
                {
                    B1230['apply'](($module)['format'], stream__1476, control_string__1474, args__1475);
                    return(B1308['stream-contents'](stream__1476));
                }
            }
        };
        ($module)['%export']('format-to-string', ($module)['format-to-string']);
    }
    B1230['%annotate-function'](($module)['format-to-string'], 'format-to-string', false);
}
