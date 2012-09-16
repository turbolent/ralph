{
var B1453;
false;
B1453 = require("ralph/core")}
{
var B1456,
B1457;
false;
B1456 = require("path");
false;
B1457 = require("fs")}
{
var resolve__1458 = B1456.resolve,
resolve_path__1459;
false;
resolve_path__1459 = resolve__1458;
exports["resolve-path"] = resolve_path__1459}
{
var existssync__1460 = B1457.existsSync,
file_existsQ__1461;
false;
file_existsQ__1461 = existssync__1460;
exports["file-exists?"] = file_existsQ__1461}
{
var Mmake_function__1462 = B1453["%make-function"],
concatenate__1463 = B1453.concatenate,
dirname__1464 = B1456.dirname,
binaryEE__1465 = B1453["binary=="],
last__1466 = B1453.last,
path_directory__1467;
false;
path_directory__1467 = Mmake_function__1462("path_directory", function path_directory__1468 (path__1469)
{
var B1470;
if ($T(binaryEE__1465(last__1466(path__1469), "/")))
{B1470 = concatenate__1463(path__1469, "/")}
else
B1470 = path__1469;
var B1471 = dirname__1464(B1470);
return concatenate__1463(B1471, "/")}, false);
exports["path-directory"] = path_directory__1467}
{
var but_last__1472 = B1453["but-last"],
strip_trailing_slashes__1473;
false;
strip_trailing_slashes__1473 = Mmake_function__1462("strip_trailing_slashes", function strip_trailing_slashes__1474 (path__1475)
{
while ($T(binaryEE__1465(last__1466(path__1475), "/")))
path__1475 = but_last__1472(path__1475);
return path__1475}, false)}
{
var path_parent_directory__1476;
false;
path_parent_directory__1476 = Mmake_function__1462("path_parent_directory", function path_parent_directory__1477 (path__1478)
{
var pathT__1479 = strip_trailing_slashes__1473(path_directory__1467(path__1478));
return concatenate__1463(dirname__1464(pathT__1479), "/")}, false);
exports["path-parent-directory"] = path_parent_directory__1476}
{
var not__1480 = B1453.not,
mkdirsync__1481 = B1457.mkdirSync,
ensure_directories_exist__1482;
false;
ensure_directories_exist__1482 = Mmake_function__1462("ensure_directories_exist", function ensure_directories_exist__1483 (path__1484)
{
var directory__1485 = path_directory__1467(path__1484),
parent__1486 = path_parent_directory__1476(directory__1485);
if ($T(not__1480(file_existsQ__1461(parent__1486))))
{ensure_directories_exist__1483(parent__1486)};
if ($T(not__1480(file_existsQ__1461(directory__1485))))
{mkdirsync__1481(directory__1485)};
return path__1484}, false);
exports["ensure-directories-exist"] = ensure_directories_exist__1482}
{
var Tfile_properties_mappingT__1487;
false;
Tfile_properties_mappingT__1487 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]}
{
var anyQ__1494 = B1453["any?"],
emptyQ__1495 = B1453["empty?"],
get__1496 = B1453.get,
rest__1497 = B1453.rest,
first__1498 = B1453.first,
make_object__1499 = B1453["make-object"],
statsync__1500 = B1457.statSync,
file_properties__1501;
false;
file_properties__1501 = Mmake_function__1462("file_properties", function file_properties__1502 (path__1503)
{if ($T(file_existsQ__1461(path__1503)))
{
var stats__1504 = statsync__1500(path__1503),
result__1505 = make_object__1499(),
B1488__1506 = Tfile_properties_mappingT__1487,
B1489__1507,
B1491__1508,
B1490__1509 = [B1488__1506];
while (true)
{
var B1492__1510 = B1489__1507,
B1516;
if ($T(B1492__1510))
{B1516 = B1492__1510}
else
B1516 = anyQ__1494(emptyQ__1495, B1490__1509);
var B1517 = not__1480(B1516);
if ($T(B1517))
{
var mapping__1511 = first__1498(B1488__1506);
(function B1493__1512 (mapping__1513)
{
var setter__1514 = mapping__1513[0],
getter__1515 = mapping__1513[1];
return result__1505[setter__1514] = get__1496(stats__1504, getter__1515)})(mapping__1511);
B1488__1506 = rest__1497(B1488__1506);
B1490__1509 = [B1488__1506]}
else
break};
B1491__1508;
return result__1505}}, false);
exports["file-properties"] = file_properties__1501}
{
var lstatsync__1525 = B1457.lstatSync,
file_type__1526;
false;
file_type__1526 = Mmake_function__1462("file_type", function file_type__1527 (path__1528)
{if ($T(file_existsQ__1461(path__1528)))
{
var stat__1529 = lstatsync__1525(path__1528),
B1518__1530 = stat__1529,
B1537 = B1518__1530.isFile();
if ($T(B1537))
{return "file"}
else
{
var B1519__1531 = stat__1529,
B1538 = B1519__1531.isDirectory();
if ($T(B1538))
{return "directory"}
else
{
var B1520__1532 = stat__1529,
B1539 = B1520__1532.isSymbolicLink();
if ($T(B1539))
{return "link"}
else
{
var B1521__1533 = stat__1529,
B1540 = B1521__1533.isBlockDevice();
if ($T(B1540))
{return "block-device"}
else
{
var B1522__1534 = stat__1529,
B1541 = B1522__1534.isCharacterDevice();
if ($T(B1541))
{return "character-device"}
else
{
var B1523__1535 = stat__1529,
B1542 = B1523__1535.isFIFO();
if ($T(B1542))
{return "fifo"}
else
{
var B1524__1536 = stat__1529,
B1543 = B1524__1536.isSocket();
if ($T(B1543))
{return "socket"}}}}}}}}}, false);
exports["file-type"] = file_type__1526}
{
var as_string__1544 = B1453["as-string"],
readfilesync__1545 = B1457.readFileSync,
read_file__1546;
false;
read_file__1546 = Mmake_function__1462("read_file", function read_file__1547 (path__1548)
{if ($T(file_existsQ__1461(path__1548)))
{return as_string__1544(readfilesync__1545(path__1548))}}, false);
exports["read-file"] = read_file__1546}
{
var appendfilesync__1551 = B1457.appendFileSync,
writefilesync__1552 = B1457.writeFileSync,
Mkeys__1553 = B1453["%keys"],
write_file__1554;
false;
write_file__1554 = Mmake_function__1462("write_file", function write_file__1555 (path__1556, content__1557)
{
var B1549__1558 = $SL.call(arguments, 2),
B1550__1559 = Mkeys__1553(B1549__1558, {"append?":false}),
appendQ__1560 = B1550__1559["append?"];
ensure_directories_exist__1482(path__1556);
var B1561;
if ($T(appendQ__1560))
{B1561 = appendfilesync__1551}
else
B1561 = writefilesync__1552;
return B1561(path__1556, content__1557)}, false);
exports["write-file"] = write_file__1554}
{
var Tbuffer_lengthT__1562;
false;
Tbuffer_lengthT__1562 = (64 * 1024)}
{
var B1586 = $S("signal", false),
signal__1565 = B1453.signal,
G__1566 = B1453[">"],
readsync__1567 = B1457.readSync,
writesync__1568 = B1457.writeSync,
closesync__1569 = B1457.closeSync,
opensync__1570 = B1457.openSync,
copy_file__1571;
false;
copy_file__1571 = Mmake_function__1462("copy_file", function copy_file__1572 (old_path__1573, new_path__1574)
{
var B1563__1575 = $SL.call(arguments, 2),
B1564__1576 = Mkeys__1553(B1563__1575, {"if-exists":B1586,
"append?":false}),
if_exists__1577 = B1564__1576["if-exists"],
appendQ__1578 = B1564__1576["append?"];
if ($T(not__1480(file_existsQ__1461(old_path__1573))))
{signal__1565("old path doesn't exist")};
var B1584;
if ($T(not__1480(appendQ__1578)))
{if ($T(binaryEE__1465(if_exists__1577, B1586)))
{B1584 = file_existsQ__1461(new_path__1574)}
else
B1584 = false}
else
B1584 = false;
if ($T(B1584))
{signal__1565("new path exists")};
var buffer__1579 = new Buffer(Tbuffer_lengthT__1562),
source__1580 = opensync__1570(old_path__1573, "r"),
B1585;
if ($T(appendQ__1578))
{B1585 = "a"}
else
B1585 = "w";
var target__1581 = opensync__1570(new_path__1574, B1585),
count__1582 = 1,
position__1583 = 0;
while ($T(G__1566(count__1582, 0)))
{
count__1582 = readsync__1567(source__1580, buffer__1579, 0, Tbuffer_lengthT__1562, position__1583);
writesync__1568(target__1581, buffer__1579, 0, count__1582);
position__1583 = (position__1583 + count__1582)};
closesync__1569(source__1580);
return closesync__1569(target__1581)}, false);
exports["copy-file"] = copy_file__1571}
