require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1363(name__1364, value__1365) {
            var B1367 = (exports);
            return(B1367[name__1364] = value__1365);
        };
        {
            ($module)['%eval'] = function B1366() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1368 = require('ralph/core');
{
    var B1369 = require('path');
    var B1370 = require('fs');
}
{
    ($module)['resolve-path'] = B1369['resolve'];
    ($module)['%export']('resolve-path', ($module)['resolve-path']);
}
{
    ($module)['file-exists?'] = B1370['existsSync'];
    ($module)['%export']('file-exists?', ($module)['file-exists?']);
}
{
    {
        ($module)['path-directory'] = function B1372(path__1373) {
            var B1374 = B1368['concatenate'];
            {
                var B1375 = B1369['dirname'];
                {
                    var B1376 = false;
                    if (($T)(B1368['=='](B1368['last'](path__1373), '/')))
                        B1376 = B1368['concatenate'](path__1373, '/');
                    else
                        B1376 = path__1373;
                    {
                        var B1377 = B1375(B1376);
                        return(B1374(B1377, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-directory', ($module)['path-directory']);
    }
    B1368['%annotate-function'](($module)['path-directory'], 'path-directory', false);
}
{
    ($module)['strip-trailing-slashes'] = function B1379(path__1380) {
        while (($T)(B1368['=='](B1368['last'](path__1380), '/')))
            path__1380 = B1368['but-last'](path__1380);
        return(path__1380);
    };
    B1368['%annotate-function'](($module)['strip-trailing-slashes'], 'strip-trailing-slashes', false);
}
{
    {
        ($module)['path-parent-directory'] = function B1382(path__1383) {
            var B1384 = B1368['concatenate'];
            {
                var B1385 = B1369['dirname'];
                {
                    var B1386 = false;
                    if (($T)(B1368['=='](B1368['last'](path__1383, '/'))))
                        B1386 = path__1383;
                    else
                        B1386 = B1369['dirname'](path__1383);
                    {
                        var B1387 = B1385(B1386);
                        return(B1384(B1387, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-parent-directory', ($module)['path-parent-directory']);
    }
    B1368['%annotate-function'](($module)['path-parent-directory'], 'path-parent-directory', false);
}
{
    {
        ($module)['ensure-directories-exist'] = function B1389(path__1390) {
            var directory__1391 = ($module)['path-directory'](path__1390);
            {
                var parent__1392 = ($module)['path-parent-directory'](directory__1391);
                {
                    if (($T)(B1368['not'](($module)['file-exists?'](parent__1392))))
                        ($module)['ensure-directories-exist'](parent__1392);
                    {
                        if (($T)(B1368['not'](($module)['file-exists?'](directory__1391))))
                            B1370['mkdirSync'](directory__1391);
                        return(path__1390);
                    }
                }
            }
        };
        ($module)['%export']('ensure-directories-exist', ($module)['ensure-directories-exist']);
    }
    B1368['%annotate-function'](($module)['ensure-directories-exist'], 'ensure-directories-exist', false);
}
($module)['*file-properties-mapping*'] = [
    [
        'modification-date',
        'mtime'
    ],
    [
        'creation-date',
        'ctime'
    ],
    [
        'access-date',
        'atime'
    ]
];
{
    {
        ($module)['file-properties'] = function B1400(path__1401) {
            if (($T)(($module)['file-exists?'](path__1401))) {
                var stats__1402 = B1370['statSync'](path__1401);
                {
                    var result__1403 = B1368['make-object']();
                    {
                        var B1404 = ($module)['*file-properties-mapping*'];
                        {
                            var B1405 = false;
                            {
                                var B1406 = false;
                                {
                                    var B1407 = [B1404];
                                    {
                                        while (true) {
                                            var B1414 = B1368['not'];
                                            {
                                                var B1408 = B1405;
                                                {
                                                    var B1415 = false;
                                                    if (($T)(B1408))
                                                        B1415 = B1408;
                                                    else
                                                        B1415 = B1368['any?'](B1368['empty?'], B1407);
                                                    {
                                                        var B1416 = B1414(B1415);
                                                        if (($T)(B1416)) {
                                                            var mapping__1409 = B1368['first'](B1404);
                                                            {
                                                                (function B1410(mapping__1411) {
                                                                    var setter__1412 = mapping__1411[0];
                                                                    {
                                                                        var getter__1413 = mapping__1411[1];
                                                                        return(B1368['get-setter'](result__1403, setter__1412, B1368['get'](stats__1402, getter__1413)));
                                                                    }
                                                                }(mapping__1409));
                                                                {
                                                                    B1404 = B1368['rest'](B1404);
                                                                    B1407 = [B1404];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                        }
                                        {
                                            B1406;
                                            return(result__1403);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else
                return(false);
        };
        ($module)['%export']('file-properties', ($module)['file-properties']);
    }
    B1368['%annotate-function'](($module)['file-properties'], 'file-properties', false);
}
{
    {
        ($module)['file-type'] = function B1425(path__1426) {
            if (($T)(($module)['file-exists?'](path__1426))) {
                var stat__1427 = B1370['lstatSync'](path__1426);
                {
                    var B1428 = stat__1427;
                    {
                        var B1435 = B1428['isFile']();
                        if (($T)(B1435))
                            return('file');
                        else {
                            var B1429 = stat__1427;
                            {
                                var B1436 = B1429['isDirectory']();
                                if (($T)(B1436))
                                    return('directory');
                                else {
                                    var B1430 = stat__1427;
                                    {
                                        var B1437 = B1430['isSymbolicLink']();
                                        if (($T)(B1437))
                                            return('link');
                                        else {
                                            var B1431 = stat__1427;
                                            {
                                                var B1438 = B1431['isBlockDevice']();
                                                if (($T)(B1438))
                                                    return('block-device');
                                                else {
                                                    var B1432 = stat__1427;
                                                    {
                                                        var B1439 = B1432['isCharacterDevice']();
                                                        if (($T)(B1439))
                                                            return('character-device');
                                                        else {
                                                            var B1433 = stat__1427;
                                                            {
                                                                var B1440 = B1433['isFIFO']();
                                                                if (($T)(B1440))
                                                                    return('fifo');
                                                                else {
                                                                    var B1434 = stat__1427;
                                                                    {
                                                                        var B1441 = B1434['isSocket']();
                                                                        if (($T)(B1441))
                                                                            return('socket');
                                                                        else
                                                                            return(false);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else
                return(false);
        };
        ($module)['%export']('file-type', ($module)['file-type']);
    }
    B1368['%annotate-function'](($module)['file-type'], 'file-type', false);
}
{
    {
        ($module)['read-file'] = function B1443(path__1444) {
            if (($T)(($module)['file-exists?'](path__1444)))
                return(B1368['as-string'](B1370['readFileSync'](path__1444)));
            else
                return(false);
        };
        ($module)['%export']('read-file', ($module)['read-file']);
    }
    B1368['%annotate-function'](($module)['read-file'], 'read-file', false);
}
{
    {
        ($module)['write-file'] = function B1448(path__1449, content__1450) {
            var B1451 = $SL.call(arguments, 2);
            {
                var B1452 = B1368['%keys'](B1451, { 'append?': false });
                {
                    var appendQ__1453 = B1452['append?'];
                    {
                        ($module)['ensure-directories-exist'](path__1449);
                        {
                            var B1454 = false;
                            if (($T)(appendQ__1453))
                                B1454 = B1370['appendFileSync'];
                            else
                                B1454 = B1370['writeFileSync'];
                            return(B1454(path__1449, content__1450));
                        }
                    }
                }
            }
        };
        ($module)['%export']('write-file', ($module)['write-file']);
    }
    B1368['%annotate-function'](($module)['write-file'], 'write-file', false);
}
