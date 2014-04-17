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
var B1308 = require('ralph/stream');
{
    ($module)['format-integer'] = function B1310(number__1311) {
        return(B1230['as-string'](number__1311));
    };
    B1230['%annotate-function'](($module)['format-integer'], 'format-integer', false);
}
{
    var B1317 = $K('message');
    {
        {
            ($module)['format'] = function B1318(stream__1319, control_string__1320) {
                var args__1321 = $SL.call(arguments, 2);
                {
                    var dispatch__1322 = false;
                    {
                        dispatch__1322 = function B1323(char__1324, arg__1325) {
                            var B1326 = B1230['as-lowercase'](char__1324);
                            {
                                var B1327 = B1230['=='](B1326, 's');
                                {
                                    var B1334 = false;
                                    if (($T)(B1327))
                                        B1334 = B1327;
                                    else
                                        B1334 = B1230['=='](B1326, 'c');
                                    if (($T)(B1334))
                                        return(B1230['as-string'](arg__1325));
                                    else if (($T)(B1230['=='](B1326, '='))) {
                                        var B1328 = B1230['description'](arg__1325);
                                        if (($T)(B1328))
                                            return(B1328);
                                        else
                                            return('');
                                    } else if (($T)(B1230['=='](B1326, 'b')))
                                        return(($module)['format-integer'](arg__1325, 2));
                                    else if (($T)(B1230['=='](B1326, 'o')))
                                        return(($module)['format-integer'](arg__1325, 8));
                                    else if (($T)(B1230['=='](B1326, 'd')))
                                        return(($module)['format-integer'](arg__1325, 10));
                                    else if (($T)(B1230['=='](B1326, 'x')))
                                        return(($module)['format-integer'](arg__1325, 16));
                                    else if (($T)(B1230['=='](B1326, 'm'))) {
                                        arg__1325(stream__1319);
                                        return('');
                                    } else
                                        return(B1230['signal'](B1230['make'](B1230['<error>'], B1317, B1230['concatenate']('Unknown format dispatch character ', char__1324))));
                                }
                            }
                        };
                        {
                            var index__1329 = 0;
                            {
                                while (($T)(B1230['not'](B1230['empty?'](control_string__1320)))) {
                                    var next_dispatch__1330 = B1230['position'](control_string__1320, '%');
                                    if (($T)(B1230['>'](next_dispatch__1330, 0))) {
                                        B1308['stream-write'](stream__1319, B1230['slice'](control_string__1320, 0, next_dispatch__1330));
                                        control_string__1320 = B1230['slice'](control_string__1320, next_dispatch__1330);
                                    } else if (($T)(next_dispatch__1330)) {
                                        var arg__1331 = B1230['element'](args__1321, index__1329);
                                        {
                                            var char__1332 = B1230['second'](control_string__1320);
                                            {
                                                var percent__1333 = B1230['=='](char__1332, '%');
                                                {
                                                    var B1335 = B1308['stream-write'];
                                                    {
                                                        var B1336 = false;
                                                        if (($T)(percent__1333))
                                                            B1336 = '%';
                                                        else
                                                            B1336 = dispatch__1322(char__1332, arg__1331);
                                                        {
                                                            B1335(stream__1319, B1336);
                                                            {
                                                                control_string__1320 = B1230['slice'](control_string__1320, 2);
                                                                if (($T)(B1230['not'](percent__1333)))
                                                                    index__1329 = B1230['+'](index__1329, 1);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        B1308['stream-write'](stream__1319, control_string__1320);
                                        control_string__1320 = '';
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
        ($module)['format-to-string'] = function B1338(control_string__1339) {
            var args__1340 = $SL.call(arguments, 1);
            {
                var stream__1341 = B1230['make'](B1308['<string-stream>']);
                {
                    B1230['apply'](($module)['format'], stream__1341, control_string__1339, args__1340);
                    return(B1308['stream-contents'](stream__1341));
                }
            }
        };
        ($module)['%export']('format-to-string', ($module)['format-to-string']);
    }
    B1230['%annotate-function'](($module)['format-to-string'], 'format-to-string', false);
}
