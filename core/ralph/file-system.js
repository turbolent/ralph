{
    var $module = Object.create(null);
    ($module)['%export'] = function B1291(name__1292, value__1293) {
        var B1294 = (exports);
        return(B1294[name__1292] = value__1293);
    };
}
var B1295 = require('ralph/core');
{
    var B1296 = require('path');
    var B1297 = require('fs');
}
{
    ($module)['resolve-path'] = B1296['resolve'];
    ($module)['%export']('resolve-path', ($module)['resolve-path']);
}
{
    ($module)['file-exists?'] = B1297['existsSync'];
    ($module)['%export']('file-exists?', ($module)['file-exists?']);
}
{
    {
        ($module)['path-directory'] = function B1299(path__1300) {
            var B1301 = B1295['concatenate'];
            {
                var B1302 = B1296['dirname'];
                {
                    var B1303 = false;
                    if (($T)(B1295['=='](B1295['last'](path__1300), '/')))
                        B1303 = B1295['concatenate'](path__1300, '/');
                    else
                        B1303 = path__1300;
                    {
                        var B1304 = B1302(B1303);
                        return(B1301(B1304, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-directory', ($module)['path-directory']);
    }
    B1295['%annotate-function'](($module)['path-directory'], 'path-directory', false);
}
{
    ($module)['strip-trailing-slashes'] = function B1306(path__1307) {
        while (($T)(B1295['=='](B1295['last'](path__1307), '/')))
            path__1307 = B1295['but-last'](path__1307);
        return(path__1307);
    };
    B1295['%annotate-function'](($module)['strip-trailing-slashes'], 'strip-trailing-slashes', false);
}
{
    {
        ($module)['path-parent-directory'] = function B1309(path__1310) {
            var B1311 = B1295['concatenate'];
            {
                var B1312 = B1296['dirname'];
                {
                    var B1313 = false;
                    if (($T)(B1295['=='](B1295['last'](path__1310, '/'))))
                        B1313 = path__1310;
                    else
                        B1313 = B1296['dirname'](path__1310);
                    {
                        var B1314 = B1312(B1313);
                        return(B1311(B1314, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-parent-directory', ($module)['path-parent-directory']);
    }
    B1295['%annotate-function'](($module)['path-parent-directory'], 'path-parent-directory', false);
}
{
    {
        ($module)['ensure-directories-exist'] = function B1316(path__1317) {
            var directory__1318 = ($module)['path-directory'](path__1317);
            {
                var parent__1319 = ($module)['path-parent-directory'](directory__1318);
                {
                    if (($T)(B1295['not'](($module)['file-exists?'](parent__1319))))
                        ($module)['ensure-directories-exist'](parent__1319);
                    {
                        if (($T)(B1295['not'](($module)['file-exists?'](directory__1318))))
                            B1297['mkdirSync'](directory__1318);
                        return(path__1317);
                    }
                }
            }
        };
        ($module)['%export']('ensure-directories-exist', ($module)['ensure-directories-exist']);
    }
    B1295['%annotate-function'](($module)['ensure-directories-exist'], 'ensure-directories-exist', false);
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
        ($module)['file-properties'] = function B1327(path__1328) {
            if (($T)(($module)['file-exists?'](path__1328))) {
                var stats__1329 = B1297['statSync'](path__1328);
                {
                    var result__1330 = B1295['make-object']();
                    {
                        var B1331 = ($module)['*file-properties-mapping*'];
                        {
                            var B1332 = false;
                            {
                                var B1333 = false;
                                {
                                    var B1334 = [B1331];
                                    {
                                        while (true) {
                                            var B1341 = B1295['not'];
                                            {
                                                var B1335 = B1332;
                                                {
                                                    var B1342 = false;
                                                    if (($T)(B1335))
                                                        B1342 = B1335;
                                                    else
                                                        B1342 = B1295['any?'](B1295['empty?'], B1334);
                                                    {
                                                        var B1343 = B1341(B1342);
                                                        if (($T)(B1343)) {
                                                            var mapping__1336 = B1295['first'](B1331);
                                                            {
                                                                (function B1337(mapping__1338) {
                                                                    var setter__1339 = mapping__1338[0];
                                                                    {
                                                                        var getter__1340 = mapping__1338[1];
                                                                        return(B1295['get-setter'](result__1330, setter__1339, B1295['get'](stats__1329, getter__1340)));
                                                                    }
                                                                }(mapping__1336));
                                                                {
                                                                    B1331 = B1295['rest'](B1331);
                                                                    B1334 = [B1331];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                        }
                                        {
                                            B1333;
                                            return(result__1330);
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
    B1295['%annotate-function'](($module)['file-properties'], 'file-properties', false);
}
{
    {
        ($module)['file-type'] = function B1352(path__1353) {
            if (($T)(($module)['file-exists?'](path__1353))) {
                var stat__1354 = B1297['lstatSync'](path__1353);
                {
                    var B1355 = stat__1354;
                    {
                        var B1362 = B1355['isFile']();
                        if (($T)(B1362))
                            return('file');
                        else {
                            var B1356 = stat__1354;
                            {
                                var B1363 = B1356['isDirectory']();
                                if (($T)(B1363))
                                    return('directory');
                                else {
                                    var B1357 = stat__1354;
                                    {
                                        var B1364 = B1357['isSymbolicLink']();
                                        if (($T)(B1364))
                                            return('link');
                                        else {
                                            var B1358 = stat__1354;
                                            {
                                                var B1365 = B1358['isBlockDevice']();
                                                if (($T)(B1365))
                                                    return('block-device');
                                                else {
                                                    var B1359 = stat__1354;
                                                    {
                                                        var B1366 = B1359['isCharacterDevice']();
                                                        if (($T)(B1366))
                                                            return('character-device');
                                                        else {
                                                            var B1360 = stat__1354;
                                                            {
                                                                var B1367 = B1360['isFIFO']();
                                                                if (($T)(B1367))
                                                                    return('fifo');
                                                                else {
                                                                    var B1361 = stat__1354;
                                                                    {
                                                                        var B1368 = B1361['isSocket']();
                                                                        if (($T)(B1368))
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
    B1295['%annotate-function'](($module)['file-type'], 'file-type', false);
}
{
    {
        ($module)['read-file'] = function B1370(path__1371) {
            if (($T)(($module)['file-exists?'](path__1371)))
                return(B1295['as-string'](B1297['readFileSync'](path__1371)));
            else
                return(false);
        };
        ($module)['%export']('read-file', ($module)['read-file']);
    }
    B1295['%annotate-function'](($module)['read-file'], 'read-file', false);
}
{
    {
        ($module)['write-file'] = function B1375(path__1376, content__1377) {
            var B1378 = $SL.call(arguments, 2);
            {
                var B1379 = B1295['%keys'](B1378, { 'append?': false });
                {
                    var appendQ__1380 = B1379['append?'];
                    {
                        ($module)['ensure-directories-exist'](path__1376);
                        {
                            var B1381 = false;
                            if (($T)(appendQ__1380))
                                B1381 = B1297['appendFileSync'];
                            else
                                B1381 = B1297['writeFileSync'];
                            return(B1381(path__1376, content__1377));
                        }
                    }
                }
            }
        };
        ($module)['%export']('write-file', ($module)['write-file']);
    }
    B1295['%annotate-function'](($module)['write-file'], 'write-file', false);
}
{
    ($module)['%eval'] = function B1383() {
        return(eval((arguments[0])));
    };
    {
        B1295['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
