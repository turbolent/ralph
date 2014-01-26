var B1431 = require('ralph/core');
var B1434 = require('path'), B1435 = require('fs');
{
    var ralphScoreCCMvar = B1431['%var'], pathCCresolve = B1434['resolve'], resolve_path__1436 = pathCCresolve;
    (exports)['resolve-path'] = resolve_path__1436;
}
{
    var fsCCexistsSync = B1435['existsSync'], file_existsQ__1437 = fsCCexistsSync;
    (exports)['file-exists?'] = file_existsQ__1437;
}
{
    var ralphScoreCCMmake_function = B1431['%make-function'], ralphScoreCCconcatenate = B1431['concatenate'], pathCCdirname = B1434['dirname'], ralphScoreCCEE = B1431['=='], ralphScoreCClast = B1431['last'], path_directory__1441 = ralphScoreCCMmake_function('path_directory', function B1439(path__1440) {
            var B1442 = false;
            if (($T)(ralphScoreCCEE(ralphScoreCClast(path__1440), '/')))
                B1442 = ralphScoreCCconcatenate(path__1440, '/');
            else
                B1442 = path__1440;
            var B1443 = pathCCdirname(B1442);
            return(ralphScoreCCconcatenate(B1443, '/'));
        }, false);
    (exports)['path-directory'] = path_directory__1441;
}
var ralphScoreCCbut_last = B1431['but-last'], strip_trailing_slashes__1447 = ralphScoreCCMmake_function('strip_trailing_slashes', function B1445(path__1446) {
        while (($T)(ralphScoreCCEE(ralphScoreCClast(path__1446), '/')))
            path__1446 = ralphScoreCCbut_last(path__1446);
        return(path__1446);
    }, false);
{
    var path_parent_directory__1452 = ralphScoreCCMmake_function('path_parent_directory', function B1449(path__1450) {
            var path = path__1450[path__1450.length - 1] == '/' ? path__1450 : pathCCdirname(path__1450); 
            return pathCCdirname(path) + '/';
        }, false);
    (exports)['path-parent-directory'] = path_parent_directory__1452;
}
{
    var ralphScoreCCnot = B1431['not'], fsCCmkdirSync = B1435['mkdirSync'], ensure_directories_exist__1458 = ralphScoreCCMmake_function('ensure_directories_exist', function B1454(path__1455) {
            var directory__1456 = path_directory__1441(path__1455), parent__1457 = path_parent_directory__1452(directory__1456);
            if (($T)(ralphScoreCCnot(file_existsQ__1437(parent__1457))))
                ensure_directories_exist__1458(parent__1457);
            if (($T)(ralphScoreCCnot(file_existsQ__1437(directory__1456))))
                fsCCmkdirSync(directory__1456);
            return(path__1455);
        }, false);
    (exports)['ensure-directories-exist'] = ensure_directories_exist__1458;
}
var Tfile_properties_mappingT__1459 = [
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
    var fsCCstatSync = B1435['statSync'], ralphScoreCCmake_object = B1431['make-object'], ralphScoreCCanyQ = B1431['any?'], ralphScoreCCemptyQ = B1431['empty?'], ralphScoreCCfirst = B1431['first'], ralphScoreCCget_setter = B1431['get-setter'], ralphScoreCCget = B1431['get'], ralphScoreCCrest = B1431['rest'], file_properties__1481 = ralphScoreCCMmake_function('file_properties', function B1467(path__1468) {
            if (($T)(file_existsQ__1437(path__1468))) {
                var stats__1469 = fsCCstatSync(path__1468), result__1470 = ralphScoreCCmake_object(), B1471 = Tfile_properties_mappingT__1459, B1472 = false, B1473 = false, B1474 = [B1471];
                while (true) {
                    var B1475 = B1472, B1482 = false;
                    if (($T)(B1475))
                        B1482 = B1475;
                    else
                        B1482 = ralphScoreCCanyQ(ralphScoreCCemptyQ, B1474);
                    var B1483 = ralphScoreCCnot(B1482);
                    if (($T)(B1483)) {
                        var mapping__1476 = ralphScoreCCfirst(B1471);
                        (function B1477(mapping__1478) {
                            var setter__1479 = mapping__1478[0], getter__1480 = mapping__1478[1];
                            return(ralphScoreCCget_setter(result__1470, setter__1479, ralphScoreCCget(stats__1469, getter__1480)));
                        }(mapping__1476));
                        B1471 = ralphScoreCCrest(B1471);
                        B1474 = [B1471];
                    } else
                        break;
                }
                B1473;
                return(result__1470);
            } else
                return(false);
        }, false);
    (exports)['file-properties'] = file_properties__1481;
}
{
    var fsCClstatSync = B1435['lstatSync'], file_type__1502 = ralphScoreCCMmake_function('file_type', function B1492(path__1493) {
            if (($T)(file_existsQ__1437(path__1493))) {
                var stat__1494 = fsCClstatSync(path__1493), B1495 = stat__1494, B1503 = B1495['isFile']();
                if (($T)(B1503))
                    return('file');
                else {
                    var B1496 = stat__1494, B1504 = B1496['isDirectory']();
                    if (($T)(B1504))
                        return('directory');
                    else {
                        var B1497 = stat__1494, B1505 = B1497['isSymbolicLink']();
                        if (($T)(B1505))
                            return('link');
                        else {
                            var B1498 = stat__1494, B1506 = B1498['isBlockDevice']();
                            if (($T)(B1506))
                                return('block-device');
                            else {
                                var B1499 = stat__1494, B1507 = B1499['isCharacterDevice']();
                                if (($T)(B1507))
                                    return('character-device');
                                else {
                                    var B1500 = stat__1494, B1508 = B1500['isFIFO']();
                                    if (($T)(B1508))
                                        return('fifo');
                                    else {
                                        var B1501 = stat__1494, B1509 = B1501['isSocket']();
                                        if (($T)(B1509))
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
        }, false);
    (exports)['file-type'] = file_type__1502;
}
{
    var ralphScoreCCas_string = B1431['as-string'], fsCCreadFileSync = B1435['readFileSync'], read_file__1513 = ralphScoreCCMmake_function('read_file', function B1511(path__1512) {
            if (($T)(file_existsQ__1437(path__1512)))
                return(ralphScoreCCas_string(fsCCreadFileSync(path__1512)));
            else
                return(false);
        }, false);
    (exports)['read-file'] = read_file__1513;
}
{
    var ralphScoreCCMkeys = B1431['%keys'], fsCCappendFileSync = B1435['appendFileSync'], fsCCwriteFileSync = B1435['writeFileSync'], write_file__1523 = ralphScoreCCMmake_function('write_file', function B1517(path__1518, content__1519) {
            var B1520 = $SL.call(arguments, 2), B1521 = ralphScoreCCMkeys(B1520, { 'append?': false }), appendQ__1522 = B1521['append?'];
            ensure_directories_exist__1458(path__1518);
            var B1524 = false;
            if (($T)(appendQ__1522))
                B1524 = fsCCappendFileSync;
            else
                B1524 = fsCCwriteFileSync;
            return(B1524(path__1518, content__1519));
        }, false);
    (exports)['write-file'] = write_file__1523;
}
var ralphScoreCCT = B1431['*'], Tbuffer_lengthT__1525 = ralphScoreCCT(64, 1024);
{
    var ralphScoreCCsignal = B1431['signal'], fsCCopenSync = B1435['openSync'], ralphScoreCCG = B1431['>'], fsCCreadSync = B1435['readSync'], fsCCwriteSync = B1435['writeSync'], ralphScoreCCP = B1431['+'], fsCCcloseSync = B1435['closeSync'], B1530 = $S('signal'), copy_file__1543 = ralphScoreCCMmake_function('copy_file', function B1531(old_path__1532, new_path__1533) {
            var B1534 = $SL.call(arguments, 2), B1535 = ralphScoreCCMkeys(B1534, {
                    'if-exists': B1530,
                    'append?': false
                }), if_exists__1536 = B1535['if-exists'], appendQ__1537 = B1535['append?'];
            if (($T)(ralphScoreCCnot(file_existsQ__1437(old_path__1532))))
                ralphScoreCCsignal('old path doesn\'t exist');
            var B1544 = false;
            if (($T)(ralphScoreCCnot(appendQ__1537)))
                if (($T)(ralphScoreCCEE(if_exists__1536, B1530)))
                    B1544 = file_existsQ__1437(new_path__1533);
                else
                    B1544 = false;
            else
                B1544 = false;
            if (($T)(B1544))
                ralphScoreCCsignal('new path exists');
            var buffer__1538 = new Buffer(Tbuffer_lengthT__1525), source__1539 = fsCCopenSync(old_path__1532, 'r'), B1545 = false;
            if (($T)(appendQ__1537))
                B1545 = 'a';
            else
                B1545 = 'w';
            var target__1540 = fsCCopenSync(new_path__1533, B1545), count__1541 = 1, position__1542 = 0;
            while (($T)(ralphScoreCCG(count__1541, 0))) {
                count__1541 = fsCCreadSync(source__1539, buffer__1538, 0, Tbuffer_lengthT__1525, position__1542);
                fsCCwriteSync(target__1540, buffer__1538, 0, count__1541);
                position__1542 = ralphScoreCCP(position__1542, count__1541);
            }
            fsCCcloseSync(source__1539);
            return(fsCCcloseSync(target__1540));
        }, false);
    (exports)['copy-file'] = copy_file__1543;
}
