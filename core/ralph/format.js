{
    var $module = Object.create(null);
    var Mexport = function B1198(name__1199, value__1200) {
        var B1201 = (exports);
        return(B1201[name__1199] = value__1200);
    };
}
var B1202 = require('ralph/core');
{
    var B1278 = require('ralph/stream');
    var B1405 = require('ralph/file-stream');
}
{
    var format_integer = function B1407(number__1408) {
        return(B1202['as-string'](number__1408));
    };
    B1202['%annotate-function'](format_integer, 'format-integer', false);
}
{
    var B1414 = $K('message');
    {
        {
            var format = function B1415(stream__1416, control_string__1417) {
                var args__1418 = $SL.call(arguments, 2);
                {
                    var dispatch__1419 = false;
                    {
                        dispatch__1419 = function B1420(char__1421, arg__1422) {
                            var B1423 = B1202['as-lowercase'](char__1421);
                            {
                                var B1424 = B1202['=='](B1423, 's');
                                {
                                    var B1431 = false;
                                    if (($T)(B1424))
                                        B1431 = B1424;
                                    else
                                        B1431 = B1202['=='](B1423, 'c');
                                    if (($T)(B1431))
                                        return(B1202['as-string'](arg__1422));
                                    else if (($T)(B1202['=='](B1423, '='))) {
                                        var B1425 = B1202['description'](arg__1422);
                                        if (($T)(B1425))
                                            return(B1425);
                                        else
                                            return('');
                                    } else if (($T)(B1202['=='](B1423, 'b')))
                                        return(format_integer(arg__1422, 2));
                                    else if (($T)(B1202['=='](B1423, 'o')))
                                        return(format_integer(arg__1422, 8));
                                    else if (($T)(B1202['=='](B1423, 'd')))
                                        return(format_integer(arg__1422, 10));
                                    else if (($T)(B1202['=='](B1423, 'x')))
                                        return(format_integer(arg__1422, 16));
                                    else if (($T)(B1202['=='](B1423, 'm'))) {
                                        arg__1422(stream__1416);
                                        return('');
                                    } else
                                        return(B1202['signal'](B1202['make'](B1202['<error>'], B1414, B1202['concatenate']('Unknown format dispatch character ', char__1421))));
                                }
                            }
                        };
                        {
                            var index__1426 = 0;
                            {
                                while (($T)(B1202['not'](B1202['empty?'](control_string__1417)))) {
                                    var next_dispatch__1427 = B1202['position'](control_string__1417, '%');
                                    if (($T)(B1202['>'](next_dispatch__1427, 0))) {
                                        B1278['stream-write'](stream__1416, B1202['slice'](control_string__1417, 0, next_dispatch__1427));
                                        control_string__1417 = B1202['slice'](control_string__1417, next_dispatch__1427);
                                    } else if (($T)(next_dispatch__1427)) {
                                        var arg__1428 = B1202['element'](args__1418, index__1426);
                                        {
                                            var char__1429 = B1202['second'](control_string__1417);
                                            {
                                                var percent__1430 = B1202['=='](char__1429, '%');
                                                {
                                                    var B1432 = B1278['stream-write'];
                                                    {
                                                        var B1433 = false;
                                                        if (($T)(percent__1430))
                                                            B1433 = '%';
                                                        else
                                                            B1433 = dispatch__1419(char__1429, arg__1428);
                                                        {
                                                            B1432(stream__1416, B1433);
                                                            {
                                                                control_string__1417 = B1202['slice'](control_string__1417, 2);
                                                                if (($T)(B1202['not'](percent__1430)))
                                                                    index__1426 = B1202['+'](index__1426, 1);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        B1278['stream-write'](stream__1416, control_string__1417);
                                        control_string__1417 = '';
                                    }
                                }
                                return(false);
                            }
                        }
                    }
                }
            };
            Mexport('format', format);
        }
        B1202['%annotate-function'](format, 'format', false);
    }
}
{
    {
        var format_out = function B1435(control_string__1436) {
            var args__1437 = $SL.call(arguments, 1);
            return(B1202['apply'](format, B1405['*standard-output*'], control_string__1436, args__1437));
        };
        Mexport('format-out', format_out);
    }
    B1202['%annotate-function'](format_out, 'format-out', false);
}
{
    {
        var format_to_string = function B1439(control_string__1440) {
            var args__1441 = $SL.call(arguments, 1);
            {
                var stream__1442 = B1202['make'](B1278['<string-stream>']);
                {
                    B1202['apply'](format, stream__1442, control_string__1440, args__1441);
                    return(B1278['stream-contents'](stream__1442));
                }
            }
        };
        Mexport('format-to-string', format_to_string);
    }
    B1202['%annotate-function'](format_to_string, 'format-to-string', false);
}
