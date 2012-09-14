{
var B1341;
false;
B1341 = require("ralph/core")}
{
var B1344,
B1345;
false;
B1344 = require("path");
false;
B1345 = require("fs")}
{
var resolve__1346 = B1344.resolve,
resolve_path__1347;
false;
resolve_path__1347 = resolve__1346;
exports["resolve-path"] = resolve_path__1347}
{
var existssync__1348 = B1345.existsSync,
file_existsQ__1349;
false;
file_existsQ__1349 = existssync__1348;
exports["file-exists?"] = file_existsQ__1349}
{
var Mmake_function__1350 = B1341["%make-function"],
concatenate__1351 = B1341.concatenate,
dirname__1352 = B1344.dirname,
binaryEE__1353 = B1341["binary=="],
last__1354 = B1341.last,
path_directory__1355;
false;
path_directory__1355 = Mmake_function__1350("path_directory", function path_directory__1356 (path__1357)
{
var B1358;
if ($T(binaryEE__1353(last__1354(path__1357), "/")))
{B1358 = concatenate__1351(path__1357, "/")}
else
B1358 = path__1357;
var B1359 = dirname__1352(B1358);
return concatenate__1351(B1359, "/")}, false);
exports["path-directory"] = path_directory__1355}
{
var but_last__1360 = B1341["but-last"],
strip_trailing_slashes__1361;
false;
strip_trailing_slashes__1361 = Mmake_function__1350("strip_trailing_slashes", function strip_trailing_slashes__1362 (path__1363)
{
while ($T(binaryEE__1353(last__1354(path__1363), "/")))
path__1363 = but_last__1360(path__1363);
return path__1363}, false)}
{
var path_parent_directory__1364;
false;
path_parent_directory__1364 = Mmake_function__1350("path_parent_directory", function path_parent_directory__1365 (path__1366)
{
var pathT__1367 = strip_trailing_slashes__1361(path_directory__1355(path__1366));
return concatenate__1351(dirname__1352(pathT__1367), "/")}, false);
exports["path-parent-directory"] = path_parent_directory__1364}
{
var not__1368 = B1341.not,
mkdirsync__1369 = B1345.mkdirSync,
ensure_directories_exist__1370;
false;
ensure_directories_exist__1370 = Mmake_function__1350("ensure_directories_exist", function ensure_directories_exist__1371 (path__1372)
{
var directory__1373 = path_directory__1355(path__1372),
parent__1374 = path_parent_directory__1364(directory__1373);
if ($T(not__1368(file_existsQ__1349(parent__1374))))
{ensure_directories_exist__1371(parent__1374)};
if ($T(not__1368(file_existsQ__1349(directory__1373))))
{mkdirsync__1369(directory__1373)};
return path__1372}, false);
exports["ensure-directories-exist"] = ensure_directories_exist__1370}
{
var Tfile_properties_mappingT__1375;
false;
Tfile_properties_mappingT__1375 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]}
{
var anyQ__1382 = B1341["any?"],
emptyQ__1383 = B1341["empty?"],
get__1384 = B1341.get,
rest__1385 = B1341.rest,
first__1386 = B1341.first,
make_object__1387 = B1341["make-object"],
statsync__1388 = B1345.statSync,
file_properties__1389;
false;
file_properties__1389 = Mmake_function__1350("file_properties", function file_properties__1390 (path__1391)
{if ($T(file_existsQ__1349(path__1391)))
{
var stats__1392 = statsync__1388(path__1391),
result__1393 = make_object__1387(),
B1376__1394 = Tfile_properties_mappingT__1375,
B1377__1395,
B1379__1396,
B1378__1397 = [B1376__1394];
while (true)
{
var B1380__1398 = B1377__1395,
B1404;
if ($T(B1380__1398))
{B1404 = B1380__1398}
else
B1404 = anyQ__1382(emptyQ__1383, B1378__1397);
var B1405 = not__1368(B1404);
if ($T(B1405))
{
var mapping__1399 = first__1386(B1376__1394);
(function B1381__1400 (mapping__1401)
{
var setter__1402 = mapping__1401[0],
getter__1403 = mapping__1401[1];
return result__1393[setter__1402] = get__1384(stats__1392, getter__1403)})(mapping__1399);
B1376__1394 = rest__1385(B1376__1394);
B1378__1397 = [B1376__1394]}
else
break};
B1379__1396;
return result__1393}}, false);
exports["file-properties"] = file_properties__1389}
{
var lstatsync__1406 = B1345.lstatSync,
file_type__1407;
false;
file_type__1407 = Mmake_function__1350("file_type", function file_type__1408 (path__1409)
{if ($T(file_existsQ__1349(path__1409)))
{
var stat__1410 = lstatsync__1406(path__1409);
if ($T(stat__1410.isFile()))
{return "file"}
else
if ($T(stat__1410.isDirectory()))
{return "directory"}
else
if ($T(stat__1410.isSymbolicLink()))
{return "link"}
else
if ($T(stat__1410.isBlockDevice()))
{return "block-device"}
else
if ($T(stat__1410.isCharacterDevice()))
{return "character-device"}
else
if ($T(stat__1410.isFIFO()))
{return "fifo"}
else
if ($T(stat__1410.isSocket()))
{return "socket"}}}, false);
exports["file-type"] = file_type__1407}
{
var as_string__1411 = B1341["as-string"],
readfilesync__1412 = B1345.readFileSync,
read_file__1413;
false;
read_file__1413 = Mmake_function__1350("read_file", function read_file__1414 (path__1415)
{if ($T(file_existsQ__1349(path__1415)))
{return as_string__1411(readfilesync__1412(path__1415))}}, false);
exports["read-file"] = read_file__1413}
{
var writefilesync__1416 = B1345.writeFileSync,
write_file__1417;
false;
write_file__1417 = Mmake_function__1350("write_file", function write_file__1418 (path__1419, content__1420)
{
ensure_directories_exist__1370(path__1419);
return writefilesync__1416(path__1419, content__1420)}, false);
exports["write-file"] = write_file__1417}
