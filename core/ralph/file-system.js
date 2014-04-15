{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B1298(name__1299, value__1300) {
            var B1302 = (exports);
            return(B1302[name__1299] = value__1300);
        };
        {
            ($module)['%eval'] = function B1301() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1303 = require('ralph/core');
{
    var B1304 = require('path');
    var B1305 = require('fs');
}
{
    ($module)['resolve-path'] = B1304['resolve'];
    ($module)['%export']('resolve-path', ($module)['resolve-path']);
}
{
    ($module)['file-exists?'] = B1305['existsSync'];
    ($module)['%export']('file-exists?', ($module)['file-exists?']);
}
{
    {
        ($module)['path-directory'] = function B1307(path__1308) {
            var B1309 = B1303['concatenate'];
            {
                var B1310 = B1304['dirname'];
                {
                    var B1311 = false;
                    if (($T)(B1303['=='](B1303['last'](path__1308), '/')))
                        B1311 = B1303['concatenate'](path__1308, '/');
                    else
                        B1311 = path__1308;
                    {
                        var B1312 = B1310(B1311);
                        return(B1309(B1312, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-directory', ($module)['path-directory']);
    }
    B1303['%annotate-function'](($module)['path-directory'], 'path-directory', false);
}
{
    ($module)['strip-trailing-slashes'] = function B1314(path__1315) {
        while (($T)(B1303['=='](B1303['last'](path__1315), '/')))
            path__1315 = B1303['but-last'](path__1315);
        return(path__1315);
    };
    B1303['%annotate-function'](($module)['strip-trailing-slashes'], 'strip-trailing-slashes', false);
}
{
    {
        ($module)['path-parent-directory'] = function B1317(path__1318) {
            var B1319 = B1303['concatenate'];
            {
                var B1320 = B1304['dirname'];
                {
                    var B1321 = false;
                    if (($T)(B1303['=='](B1303['last'](path__1318, '/'))))
                        B1321 = path__1318;
                    else
                        B1321 = B1304['dirname'](path__1318);
                    {
                        var B1322 = B1320(B1321);
                        return(B1319(B1322, '/'));
                    }
                }
            }
        };
        ($module)['%export']('path-parent-directory', ($module)['path-parent-directory']);
    }
    B1303['%annotate-function'](($module)['path-parent-directory'], 'path-parent-directory', false);
}
{
    {
        ($module)['ensure-directories-exist'] = function B1324(path__1325) {
            var directory__1326 = ($module)['path-directory'](path__1325);
            {
                var parent__1327 = ($module)['path-parent-directory'](directory__1326);
                {
                    if (($T)(B1303['not'](($module)['file-exists?'](parent__1327))))
                        ($module)['ensure-directories-exist'](parent__1327);
                    {
                        if (($T)(B1303['not'](($module)['file-exists?'](directory__1326))))
                            B1305['mkdirSync'](directory__1326);
                        return(path__1325);
                    }
                }
            }
        };
        ($module)['%export']('ensure-directories-exist', ($module)['ensure-directories-exist']);
    }
    B1303['%annotate-function'](($module)['ensure-directories-exist'], 'ensure-directories-exist', false);
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
        ($module)['file-properties'] = function B1335(path__1336) {
            if (($T)(($module)['file-exists?'](path__1336))) {
                var stats__1337 = B1305['statSync'](path__1336);
                {
                    var result__1338 = B1303['make-object']();
                    {
                        var B1339 = ($module)['*file-properties-mapping*'];
                        {
                            var B1340 = false;
                            {
                                var B1341 = false;
                                {
                                    var B1342 = [B1339];
                                    {
                                        while (true) {
                                            var B1349 = B1303['not'];
                                            {
                                                var B1343 = B1340;
                                                {
                                                    var B1350 = false;
                                                    if (($T)(B1343))
                                                        B1350 = B1343;
                                                    else
                                                        B1350 = B1303['any?'](B1303['empty?'], B1342);
                                                    {
                                                        var B1351 = B1349(B1350);
                                                        if (($T)(B1351)) {
                                                            var mapping__1344 = B1303['first'](B1339);
                                                            {
                                                                (function B1345(mapping__1346) {
                                                                    var setter__1347 = mapping__1346[0];
                                                                    {
                                                                        var getter__1348 = mapping__1346[1];
                                                                        return(B1303['get-setter'](result__1338, setter__1347, B1303['get'](stats__1337, getter__1348)));
                                                                    }
                                                                }(mapping__1344));
                                                                {
                                                                    B1339 = B1303['rest'](B1339);
                                                                    B1342 = [B1339];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                        }
                                        {
                                            B1341;
                                            return(result__1338);
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
    B1303['%annotate-function'](($module)['file-properties'], 'file-properties', false);
}
{
    {
        ($module)['file-type'] = function B1360(path__1361) {
            if (($T)(($module)['file-exists?'](path__1361))) {
                var stat__1362 = B1305['lstatSync'](path__1361);
                {
                    var B1363 = stat__1362;
                    {
                        var B1370 = B1363['isFile']();
                        if (($T)(B1370))
                            return('file');
                        else {
                            var B1364 = stat__1362;
                            {
                                var B1371 = B1364['isDirectory']();
                                if (($T)(B1371))
                                    return('directory');
                                else {
                                    var B1365 = stat__1362;
                                    {
                                        var B1372 = B1365['isSymbolicLink']();
                                        if (($T)(B1372))
                                            return('link');
                                        else {
                                            var B1366 = stat__1362;
                                            {
                                                var B1373 = B1366['isBlockDevice']();
                                                if (($T)(B1373))
                                                    return('block-device');
                                                else {
                                                    var B1367 = stat__1362;
                                                    {
                                                        var B1374 = B1367['isCharacterDevice']();
                                                        if (($T)(B1374))
                                                            return('character-device');
                                                        else {
                                                            var B1368 = stat__1362;
                                                            {
                                                                var B1375 = B1368['isFIFO']();
                                                                if (($T)(B1375))
                                                                    return('fifo');
                                                                else {
                                                                    var B1369 = stat__1362;
                                                                    {
                                                                        var B1376 = B1369['isSocket']();
                                                                        if (($T)(B1376))
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
    B1303['%annotate-function'](($module)['file-type'], 'file-type', false);
}
{
    {
        ($module)['read-file'] = function B1378(path__1379) {
            if (($T)(($module)['file-exists?'](path__1379)))
                return(B1303['as-string'](B1305['readFileSync'](path__1379)));
            else
                return(false);
        };
        ($module)['%export']('read-file', ($module)['read-file']);
    }
    B1303['%annotate-function'](($module)['read-file'], 'read-file', false);
}
{
    {
        ($module)['write-file'] = function B1383(path__1384, content__1385) {
            var B1386 = $SL.call(arguments, 2);
            {
                var B1387 = B1303['%keys'](B1386, { 'append?': false });
                {
                    var appendQ__1388 = B1387['append?'];
                    {
                        ($module)['ensure-directories-exist'](path__1384);
                        {
                            var B1389 = false;
                            if (($T)(appendQ__1388))
                                B1389 = B1305['appendFileSync'];
                            else
                                B1389 = B1305['writeFileSync'];
                            return(B1389(path__1384, content__1385));
                        }
                    }
                }
            }
        };
        ($module)['%export']('write-file', ($module)['write-file']);
    }
    B1303['%annotate-function'](($module)['write-file'], 'write-file', false);
}
