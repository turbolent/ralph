{
    var $module = Object.create(null);
    var Mexport = function B1287(name__1288, value__1289) {
        var B1290 = (exports);
        return(B1290[name__1288] = value__1289);
    };
}
var B1291 = require('ralph/core');
{
    var B1292 = require('path');
    var B1293 = require('fs');
}
{
    var resolve_path = B1292['resolve'];
    Mexport('resolve-path', resolve_path);
}
{
    var file_existsQ = B1293['existsSync'];
    Mexport('file-exists?', file_existsQ);
}
{
    {
        var path_directory = function B1295(path__1296) {
            var B1297 = B1291['concatenate'];
            {
                var B1298 = B1292['dirname'];
                {
                    var B1299 = false;
                    if (($T)(B1291['=='](B1291['last'](path__1296), '/')))
                        B1299 = B1291['concatenate'](path__1296, '/');
                    else
                        B1299 = path__1296;
                    {
                        var B1300 = B1298(B1299);
                        return(B1297(B1300, '/'));
                    }
                }
            }
        };
        Mexport('path-directory', path_directory);
    }
    B1291['%annotate-function'](path_directory, 'path-directory', false);
}
{
    var strip_trailing_slashes = function B1302(path__1303) {
        while (($T)(B1291['=='](B1291['last'](path__1303), '/')))
            path__1303 = B1291['but-last'](path__1303);
        return(path__1303);
    };
    B1291['%annotate-function'](strip_trailing_slashes, 'strip-trailing-slashes', false);
}
{
    {
        var path_parent_directory = function B1305(path__1306) {
            var B1307 = B1291['concatenate'];
            {
                var B1308 = B1292['dirname'];
                {
                    var B1309 = false;
                    if (($T)(B1291['=='](B1291['last'](path__1306, '/'))))
                        B1309 = path__1306;
                    else
                        B1309 = B1292['dirname'](path__1306);
                    {
                        var B1310 = B1308(B1309);
                        return(B1307(B1310, '/'));
                    }
                }
            }
        };
        Mexport('path-parent-directory', path_parent_directory);
    }
    B1291['%annotate-function'](path_parent_directory, 'path-parent-directory', false);
}
{
    {
        var ensure_directories_exist = function B1312(path__1313) {
            var directory__1314 = path_directory(path__1313);
            {
                var parent__1315 = path_parent_directory(directory__1314);
                {
                    if (($T)(B1291['not'](file_existsQ(parent__1315))))
                        ensure_directories_exist(parent__1315);
                    {
                        if (($T)(B1291['not'](file_existsQ(directory__1314))))
                            B1293['mkdirSync'](directory__1314);
                        return(path__1313);
                    }
                }
            }
        };
        Mexport('ensure-directories-exist', ensure_directories_exist);
    }
    B1291['%annotate-function'](ensure_directories_exist, 'ensure-directories-exist', false);
}
var Tfile_properties_mappingT = [
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
        var file_properties = function B1323(path__1324) {
            if (($T)(file_existsQ(path__1324))) {
                var stats__1325 = B1293['statSync'](path__1324);
                {
                    var result__1326 = B1291['make-object']();
                    {
                        var B1327 = Tfile_properties_mappingT;
                        {
                            var B1328 = false;
                            {
                                var B1329 = false;
                                {
                                    var B1330 = [B1327];
                                    {
                                        while (true) {
                                            var B1337 = B1291['not'];
                                            {
                                                var B1331 = B1328;
                                                {
                                                    var B1338 = false;
                                                    if (($T)(B1331))
                                                        B1338 = B1331;
                                                    else
                                                        B1338 = B1291['any?'](B1291['empty?'], B1330);
                                                    {
                                                        var B1339 = B1337(B1338);
                                                        if (($T)(B1339)) {
                                                            var mapping__1332 = B1291['first'](B1327);
                                                            {
                                                                (function B1333(mapping__1334) {
                                                                    var setter__1335 = mapping__1334[0];
                                                                    {
                                                                        var getter__1336 = mapping__1334[1];
                                                                        return(B1291['get-setter'](result__1326, setter__1335, B1291['get'](stats__1325, getter__1336)));
                                                                    }
                                                                }(mapping__1332));
                                                                {
                                                                    B1327 = B1291['rest'](B1327);
                                                                    B1330 = [B1327];
                                                                }
                                                            }
                                                        } else
                                                            break;
                                                    }
                                                }
                                            }
                                        }
                                        {
                                            B1329;
                                            return(result__1326);
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
        Mexport('file-properties', file_properties);
    }
    B1291['%annotate-function'](file_properties, 'file-properties', false);
}
{
    {
        var file_type = function B1348(path__1349) {
            if (($T)(file_existsQ(path__1349))) {
                var stat__1350 = B1293['lstatSync'](path__1349);
                {
                    var B1351 = stat__1350;
                    {
                        var B1358 = B1351['isFile']();
                        if (($T)(B1358))
                            return('file');
                        else {
                            var B1352 = stat__1350;
                            {
                                var B1359 = B1352['isDirectory']();
                                if (($T)(B1359))
                                    return('directory');
                                else {
                                    var B1353 = stat__1350;
                                    {
                                        var B1360 = B1353['isSymbolicLink']();
                                        if (($T)(B1360))
                                            return('link');
                                        else {
                                            var B1354 = stat__1350;
                                            {
                                                var B1361 = B1354['isBlockDevice']();
                                                if (($T)(B1361))
                                                    return('block-device');
                                                else {
                                                    var B1355 = stat__1350;
                                                    {
                                                        var B1362 = B1355['isCharacterDevice']();
                                                        if (($T)(B1362))
                                                            return('character-device');
                                                        else {
                                                            var B1356 = stat__1350;
                                                            {
                                                                var B1363 = B1356['isFIFO']();
                                                                if (($T)(B1363))
                                                                    return('fifo');
                                                                else {
                                                                    var B1357 = stat__1350;
                                                                    {
                                                                        var B1364 = B1357['isSocket']();
                                                                        if (($T)(B1364))
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
        Mexport('file-type', file_type);
    }
    B1291['%annotate-function'](file_type, 'file-type', false);
}
{
    {
        var read_file = function B1366(path__1367) {
            if (($T)(file_existsQ(path__1367)))
                return(B1291['as-string'](B1293['readFileSync'](path__1367)));
            else
                return(false);
        };
        Mexport('read-file', read_file);
    }
    B1291['%annotate-function'](read_file, 'read-file', false);
}
{
    {
        var write_file = function B1371(path__1372, content__1373) {
            var B1374 = $SL.call(arguments, 2);
            {
                var B1375 = B1291['%keys'](B1374, { 'append?': false });
                {
                    var appendQ__1376 = B1375['append?'];
                    {
                        ensure_directories_exist(path__1372);
                        {
                            var B1377 = false;
                            if (($T)(appendQ__1376))
                                B1377 = B1293['appendFileSync'];
                            else
                                B1377 = B1293['writeFileSync'];
                            return(B1377(path__1372, content__1373));
                        }
                    }
                }
            }
        };
        Mexport('write-file', write_file);
    }
    B1291['%annotate-function'](write_file, 'write-file', false);
}
