require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1320(name__1321, value__1322) {
            var B1324 = (exports);
            return(B1324[name__1321] = value__1322);
        };
        {
            ($module)['%eval'] = function B1323() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1325 = require('ralph/core');
{
    var B1326 = require('path');
    var B1327 = require('fs');
}
{
    ($module)['resolve-path'] = B1326['resolve'];
    ($module)['%export']('resolve-path', ($module)['resolve-path']);
}
{
    ($module)['file-exists?'] = B1327['existsSync'];
    ($module)['%export']('file-exists?', ($module)['file-exists?']);
}
{
    {
        ($module)['path-directory'] = function B1329(path__1330) {
            var B1331 = B1325['concatenate'];
            {
                var B1332 = B1326['dirname'];
                {
                    var B1333 = false;
                    if (($T)(B1325['=='](B1325['last'](path__1330), '/')))
                        B1333 = B1325['concatenate'](path__1330, '/');
                    else
                        B1333 = path__1330;
                    {
                        var B1334 = B1332(B1333);
                        return(B1331(B1334, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-directory', ($module)['path-directory']);
    }
    B1325['%annotate-function'](($module)['path-directory'], 'path-directory', false);
}
{
    ($module)['strip-trailing-slashes'] = function B1336(path__1337) {
        while (($T)(B1325['=='](B1325['last'](path__1337), '/')))
            path__1337 = B1325['but-last'](path__1337);
        return(path__1337);
    };
    B1325['%annotate-function'](($module)['strip-trailing-slashes'], 'strip-trailing-slashes', false);
}
{
    {
        ($module)['path-parent-directory'] = function B1339(path__1340) {
            var B1341 = B1325['concatenate'];
            {
                var B1342 = B1326['dirname'];
                {
                    var B1343 = false;
                    if (($T)(B1325['=='](B1325['last'](path__1340, '/'))))
                        B1343 = path__1340;
                    else
                        B1343 = B1326['dirname'](path__1340);
                    {
                        var B1344 = B1342(B1343);
                        return(B1341(B1344, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-parent-directory', ($module)['path-parent-directory']);
    }
    B1325['%annotate-function'](($module)['path-parent-directory'], 'path-parent-directory', false);
}
{
    {
        ($module)['ensure-directories-exist'] = function B1346(path__1347) {
            var directory__1348 = ($module)['path-directory'](path__1347);
            {
                var parent__1349 = ($module)['path-parent-directory'](directory__1348);
                {
                    if (($T)(B1325['not'](($module)['file-exists?'](parent__1349))))
                        ($module)['ensure-directories-exist'](parent__1349);
                    {
                        if (($T)(B1325['not'](($module)['file-exists?'](directory__1348))))
                            B1327['mkdirSync'](directory__1348);
                        return(path__1347);
                    }
                }
            }
        };
        ($module)['%export']('ensure-directories-exist', ($module)['ensure-directories-exist']);
    }
    B1325['%annotate-function'](($module)['ensure-directories-exist'], 'ensure-directories-exist', false);
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
        ($module)['file-properties'] = function B1357(path__1358) {
            if (($T)(($module)['file-exists?'](path__1358))) {
                var stats__1359 = B1327['statSync'](path__1358);
                {
                    var result__1360 = B1325['make-object']();
                    {
                        var B1361 = ($module)['*file-properties-mapping*'];
                        {
                            var B1362 = false;
                            {
                                var B1363 = false;
                                {
                                    var B1364 = [B1361];
                                    {
                                        while (true) {
                                            var B1371 = B1325['not'];
                                            {
                                                var B1365 = B1362;
                                                {
                                                    var B1372 = false;
                                                    if (($T)(B1365))
                                                        B1372 = B1365;
                                                    else
                                                        B1372 = B1325['any?'](B1325['empty?'], B1364);
                                                    {
                                                        var B1373 = B1371(B1372);
                                                        if (($T)(B1373)) {
                                                            var mapping__1366 = B1325['first'](B1361);
                                                            {
                                                                (function B1367(mapping__1368) {
                                                                    var setter__1369 = mapping__1368[0];
                                                                    {
                                                                        var getter__1370 = mapping__1368[1];
                                                                        return(B1325['get-setter'](result__1360, setter__1369, B1325['get'](stats__1359, getter__1370)));
                                                                    }
                                                                }(mapping__1366));
                                                                {
                                                                    B1361 = B1325['rest'](B1361);
                                                                    B1364 = [B1361];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                        }
                                        {
                                            B1363;
                                            return(result__1360);
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
    B1325['%annotate-function'](($module)['file-properties'], 'file-properties', false);
}
{
    {
        ($module)['file-type'] = function B1382(path__1383) {
            if (($T)(($module)['file-exists?'](path__1383))) {
                var stat__1384 = B1327['lstatSync'](path__1383);
                {
                    var B1385 = stat__1384;
                    {
                        var B1392 = B1385['isFile']();
                        if (($T)(B1392))
                            return('file');
                        else {
                            var B1386 = stat__1384;
                            {
                                var B1393 = B1386['isDirectory']();
                                if (($T)(B1393))
                                    return('directory');
                                else {
                                    var B1387 = stat__1384;
                                    {
                                        var B1394 = B1387['isSymbolicLink']();
                                        if (($T)(B1394))
                                            return('link');
                                        else {
                                            var B1388 = stat__1384;
                                            {
                                                var B1395 = B1388['isBlockDevice']();
                                                if (($T)(B1395))
                                                    return('block-device');
                                                else {
                                                    var B1389 = stat__1384;
                                                    {
                                                        var B1396 = B1389['isCharacterDevice']();
                                                        if (($T)(B1396))
                                                            return('character-device');
                                                        else {
                                                            var B1390 = stat__1384;
                                                            {
                                                                var B1397 = B1390['isFIFO']();
                                                                if (($T)(B1397))
                                                                    return('fifo');
                                                                else {
                                                                    var B1391 = stat__1384;
                                                                    {
                                                                        var B1398 = B1391['isSocket']();
                                                                        if (($T)(B1398))
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
    B1325['%annotate-function'](($module)['file-type'], 'file-type', false);
}
{
    {
        ($module)['read-file'] = function B1400(path__1401) {
            if (($T)(($module)['file-exists?'](path__1401)))
                return(B1325['as-string'](B1327['readFileSync'](path__1401)));
            else
                return(false);
        };
        ($module)['%export']('read-file', ($module)['read-file']);
    }
    B1325['%annotate-function'](($module)['read-file'], 'read-file', false);
}
{
    {
        ($module)['write-file'] = function B1405(path__1406, content__1407) {
            var B1408 = $SL.call(arguments, 2);
            {
                var B1409 = B1325['%keys'](B1408, { 'append?': false });
                {
                    var appendQ__1410 = B1409['append?'];
                    {
                        ($module)['ensure-directories-exist'](path__1406);
                        {
                            var B1411 = false;
                            if (($T)(appendQ__1410))
                                B1411 = B1327['appendFileSync'];
                            else
                                B1411 = B1327['writeFileSync'];
                            return(B1411(path__1406, content__1407));
                        }
                    }
                }
            }
        };
        ($module)['%export']('write-file', ($module)['write-file']);
    }
    B1325['%annotate-function'](($module)['write-file'], 'write-file', false);
}
