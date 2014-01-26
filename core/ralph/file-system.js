{
    var B1423 = require('ralph/core');
}
{
    var B1426 = require('path');
    var B1427 = require('fs');
}
{
    {
        var ralphScoreCCMvar = B1423['%var'];
        var pathCCresolve = B1426['resolve'];
        var resolve_path__1428 = pathCCresolve;
    }
    (exports)['resolve-path'] = resolve_path__1428;
}
{
    {
        var fsCCexistsSync = B1427['existsSync'];
        var file_existsQ__1429 = fsCCexistsSync;
    }
    (exports)['file-exists?'] = file_existsQ__1429;
}
{
    {
        var ralphScoreCCconcatenate = B1423['concatenate'];
        var pathCCdirname = B1426['dirname'];
        var ralphScoreCCEE = B1423['=='];
        var ralphScoreCClast = B1423['last'];
        var ralphScoreCCMannotate_function = B1423['%annotate-function'];
        var path_directory__1433 = function B1431(path__1432) {
            {
                var B1434 = false;
            }
            if (($T)(ralphScoreCCEE(ralphScoreCClast(path__1432), '/')))
                B1434 = ralphScoreCCconcatenate(path__1432, '/');
            else
                B1434 = path__1432;
            {
                var B1435 = pathCCdirname(B1434);
            }
            return(ralphScoreCCconcatenate(B1435, '/'));
        };
    }
    (exports)['path-directory'] = path_directory__1433;
    ralphScoreCCMannotate_function(path_directory__1433, 'path_directory', false);
}
{
    {
        var ralphScoreCCbut_last = B1423['but-last'];
        var strip_trailing_slashes__1439 = function B1437(path__1438) {
            while (($T)(ralphScoreCCEE(ralphScoreCClast(path__1438), '/')))
                path__1438 = ralphScoreCCbut_last(path__1438);
            return(path__1438);
        };
    }
    ralphScoreCCMannotate_function(strip_trailing_slashes__1439, 'strip_trailing_slashes', false);
}
{
    {
        var path_parent_directory__1443 = function B1441(path__1442) {
            {
                var B1444 = false;
            }
            if (($T)(ralphScoreCCEE(ralphScoreCClast(path__1442, '/'))))
                B1444 = path__1442;
            else
                B1444 = pathCCdirname(path__1442);
            {
                var B1445 = pathCCdirname(B1444);
            }
            return(ralphScoreCCconcatenate(B1445, '/'));
        };
    }
    (exports)['path-parent-directory'] = path_parent_directory__1443;
    ralphScoreCCMannotate_function(path_parent_directory__1443, 'path_parent_directory', false);
}
{
    {
        var ralphScoreCCnot = B1423['not'];
        var fsCCmkdirSync = B1427['mkdirSync'];
        var ensure_directories_exist__1451 = function B1447(path__1448) {
            {
                var directory__1449 = path_directory__1433(path__1448);
                var parent__1450 = path_parent_directory__1443(directory__1449);
            }
            if (($T)(ralphScoreCCnot(file_existsQ__1429(parent__1450))))
                ensure_directories_exist__1451(parent__1450);
            if (($T)(ralphScoreCCnot(file_existsQ__1429(directory__1449))))
                fsCCmkdirSync(directory__1449);
            return(path__1448);
        };
    }
    (exports)['ensure-directories-exist'] = ensure_directories_exist__1451;
    ralphScoreCCMannotate_function(ensure_directories_exist__1451, 'ensure_directories_exist', false);
}
{
    var Tfile_properties_mappingT__1452 = [
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
}
{
    {
        var fsCCstatSync = B1427['statSync'];
        var ralphScoreCCmake_object = B1423['make-object'];
        var ralphScoreCCanyQ = B1423['any?'];
        var ralphScoreCCemptyQ = B1423['empty?'];
        var ralphScoreCCfirst = B1423['first'];
        var ralphScoreCCget_setter = B1423['get-setter'];
        var ralphScoreCCget = B1423['get'];
        var ralphScoreCCrest = B1423['rest'];
        var file_properties__1474 = function B1460(path__1461) {
            if (($T)(file_existsQ__1429(path__1461))) {
                {
                    var stats__1462 = fsCCstatSync(path__1461);
                    var result__1463 = ralphScoreCCmake_object();
                    var B1464 = Tfile_properties_mappingT__1452;
                    var B1465 = false;
                    var B1466 = false;
                    var B1467 = [B1464];
                }
                while (true) {
                    {
                        var B1468 = B1465;
                        var B1475 = false;
                    }
                    if (($T)(B1468))
                        B1475 = B1468;
                    else
                        B1475 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B1467);
                    {
                        var B1476 = ralphScoreCCnot(B1475);
                    }
                    if (($T)(B1476)) {
                        {
                            var mapping__1469 = ralphScoreCCfirst(B1464);
                        }
                        (function B1470(mapping__1471) {
                            {
                                var setter__1472 = mapping__1471[0];
                                var getter__1473 = mapping__1471[1];
                            }
                            return(ralphScoreCCget_setter(result__1463, setter__1472, ralphScoreCCget(stats__1462, getter__1473)));
                        }(mapping__1469));
                        B1464 = ralphScoreCCrest(B1464);
                        B1467 = [B1464];
                    } else
                        break;
                }
                B1466;
                return(result__1463);
            } else
                return(false);
        };
    }
    (exports)['file-properties'] = file_properties__1474;
    ralphScoreCCMannotate_function(file_properties__1474, 'file_properties', false);
}
{
    {
        var fsCClstatSync = B1427['lstatSync'];
        var file_type__1495 = function B1485(path__1486) {
            if (($T)(file_existsQ__1429(path__1486))) {
                {
                    var stat__1487 = fsCClstatSync(path__1486);
                    var B1488 = stat__1487;
                    var B1496 = B1488['isFile']();
                }
                if (($T)(B1496))
                    return('file');
                else {
                    {
                        var B1489 = stat__1487;
                        var B1497 = B1489['isDirectory']();
                    }
                    if (($T)(B1497))
                        return('directory');
                    else {
                        {
                            var B1490 = stat__1487;
                            var B1498 = B1490['isSymbolicLink']();
                        }
                        if (($T)(B1498))
                            return('link');
                        else {
                            {
                                var B1491 = stat__1487;
                                var B1499 = B1491['isBlockDevice']();
                            }
                            if (($T)(B1499))
                                return('block-device');
                            else {
                                {
                                    var B1492 = stat__1487;
                                    var B1500 = B1492['isCharacterDevice']();
                                }
                                if (($T)(B1500))
                                    return('character-device');
                                else {
                                    {
                                        var B1493 = stat__1487;
                                        var B1501 = B1493['isFIFO']();
                                    }
                                    if (($T)(B1501))
                                        return('fifo');
                                    else {
                                        {
                                            var B1494 = stat__1487;
                                            var B1502 = B1494['isSocket']();
                                        }
                                        if (($T)(B1502))
                                            return('socket');
                                        else
                                            return(false);
                                    }
                                }
                            }
                        }
                    }
                }
            } else
                return(false);
        };
    }
    (exports)['file-type'] = file_type__1495;
    ralphScoreCCMannotate_function(file_type__1495, 'file_type', false);
}
{
    {
        var ralphScoreCCas_string = B1423['as-string'];
        var fsCCreadFileSync = B1427['readFileSync'];
        var read_file__1506 = function B1504(path__1505) {
            if (($T)(file_existsQ__1429(path__1505)))
                return(ralphScoreCCas_string(fsCCreadFileSync(path__1505)));
            else
                return(false);
        };
    }
    (exports)['read-file'] = read_file__1506;
    ralphScoreCCMannotate_function(read_file__1506, 'read_file', false);
}
{
    {
        var ralphScoreCCMkeys = B1423['%keys'];
        var fsCCappendFileSync = B1427['appendFileSync'];
        var fsCCwriteFileSync = B1427['writeFileSync'];
        var write_file__1516 = function B1510(path__1511, content__1512) {
            {
                var B1513 = $SL.call(arguments, 2);
                var B1514 = ralphScoreCCMkeys(B1513, { 'append?': false });
                var appendQ__1515 = B1514['append?'];
            }
            ensure_directories_exist__1451(path__1511);
            {
                var B1517 = false;
            }
            if (($T)(appendQ__1515))
                B1517 = fsCCappendFileSync;
            else
                B1517 = fsCCwriteFileSync;
            return(B1517(path__1511, content__1512));
        };
    }
    (exports)['write-file'] = write_file__1516;
    ralphScoreCCMannotate_function(write_file__1516, 'write_file', false);
}
{
    var ralphScoreCCT = B1423['*'];
    var Tbuffer_lengthT__1518 = ralphScoreCCT(64, 1024);
}
{
    {
        var ralphScoreCCsignal = B1423['signal'];
        var fsCCopenSync = B1427['openSync'];
        var ralphScoreCCG = B1423['>'];
        var fsCCreadSync = B1427['readSync'];
        var fsCCwriteSync = B1427['writeSync'];
        var ralphScoreCCP = B1423['+'];
        var fsCCcloseSync = B1427['closeSync'];
        var B1523 = $S('signal');
        var copy_file__1536 = function B1524(old_path__1525, new_path__1526) {
            {
                var B1527 = $SL.call(arguments, 2);
                var B1528 = ralphScoreCCMkeys(B1527, {
                        'if-exists': B1523,
                        'append?': false
                    });
                var if_exists__1529 = B1528['if-exists'];
                var appendQ__1530 = B1528['append?'];
            }
            if (($T)(ralphScoreCCnot(file_existsQ__1429(old_path__1525))))
                ralphScoreCCsignal('old path doesn\'t exist');
            {
                var B1537 = false;
            }
            if (($T)(ralphScoreCCnot(appendQ__1530)))
                if (($T)(ralphScoreCCEE(if_exists__1529, B1523)))
                    B1537 = file_existsQ__1429(new_path__1526);
                else
                    B1537 = false;
            else
                B1537 = false;
            if (($T)(B1537))
                ralphScoreCCsignal('new path exists');
            {
                var buffer__1531 = new Buffer(Tbuffer_lengthT__1518);
                var source__1532 = fsCCopenSync(old_path__1525, 'r');
                var B1538 = false;
            }
            if (($T)(appendQ__1530))
                B1538 = 'a';
            else
                B1538 = 'w';
            {
                var target__1533 = fsCCopenSync(new_path__1526, B1538);
                var count__1534 = 1;
                var position__1535 = 0;
            }
            while (($T)(ralphScoreCCG(count__1534, 0))) {
                count__1534 = fsCCreadSync(source__1532, buffer__1531, 0, Tbuffer_lengthT__1518, position__1535);
                fsCCwriteSync(target__1533, buffer__1531, 0, count__1534);
                position__1535 = ralphScoreCCP(position__1535, count__1534);
            }
            fsCCcloseSync(source__1532);
            return(fsCCcloseSync(target__1533));
        };
    }
    (exports)['copy-file'] = copy_file__1536;
    ralphScoreCCMannotate_function(copy_file__1536, 'copy_file', false);
}
