{
var B1267;
false;
B1267 = require("ralph/core")}
{
var B1270,
B1271;
false;
B1270 = require("path");
false;
B1271 = require("fs")}
{
var resolve__1272 = B1270.resolve,
resolve_path__1273;
false;
resolve_path__1273 = resolve__1272;
exports["resolve-path"] = resolve_path__1273}
{
var exists_sync__1274 = B1271.existsSync,
file_existsQ__1275;
false;
file_existsQ__1275 = exists_sync__1274;
exports["file-exists?"] = file_existsQ__1275}
{
var Mmake_function__1276 = B1267["%make-function"],
concatenate__1277 = B1267.concatenate,
dirname__1278 = B1270.dirname,
binaryEE__1279 = B1267["binary=="],
last__1280 = B1267.last,
path_directory__1281;
false;
path_directory__1281 = Mmake_function__1276("path_directory", function path_directory__1282 (path__1283)
{
var B1284;
if ($T(binaryEE__1279(last__1280(path__1283), "/")))
{B1284 = concatenate__1277(path__1283, "/")}
else
B1284 = path__1283;
var B1285 = dirname__1278(B1284);
return concatenate__1277(B1285, "/")}, false);
exports["path-directory"] = path_directory__1281}
{
var but_last__1286 = B1267["but-last"],
strip_trailing_slashes__1287;
false;
strip_trailing_slashes__1287 = Mmake_function__1276("strip_trailing_slashes", function strip_trailing_slashes__1288 (path__1289)
{
while ($T(binaryEE__1279(last__1280(path__1289), "/")))
path__1289 = but_last__1286(path__1289);
return path__1289}, false)}
{
var path_parent_directory__1290;
false;
path_parent_directory__1290 = Mmake_function__1276("path_parent_directory", function path_parent_directory__1291 (path__1292)
{
var pathT__1293 = strip_trailing_slashes__1287(path_directory__1281(path__1292));
return concatenate__1277(dirname__1278(pathT__1293), "/")}, false);
exports["path-parent-directory"] = path_parent_directory__1290}
{
var not__1294 = B1267.not,
mkdir_sync__1295 = B1271.mkdirSync,
ensure_directories_exist__1296;
false;
ensure_directories_exist__1296 = Mmake_function__1276("ensure_directories_exist", function ensure_directories_exist__1297 (path__1298)
{
var directory__1299 = path_directory__1281(path__1298),
parent__1300 = path_parent_directory__1290(directory__1299);
if ($T(not__1294(file_existsQ__1275(parent__1300))))
{ensure_directories_exist__1297(parent__1300)};
if ($T(not__1294(file_existsQ__1275(directory__1299))))
{mkdir_sync__1295(directory__1299)};
return path__1298}, false);
exports["ensure-directories-exist"] = ensure_directories_exist__1296}
{
var Tfile_properties_mappingT__1301;
false;
Tfile_properties_mappingT__1301 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]}
{
var anyQ__1308 = B1267["any?"],
emptyQ__1309 = B1267["empty?"],
get__1310 = B1267.get,
rest__1311 = B1267.rest,
first__1312 = B1267.first,
make_object__1313 = B1267["make-object"],
stat_sync__1314 = B1271.statSync,
file_properties__1315;
false;
file_properties__1315 = Mmake_function__1276("file_properties", function file_properties__1316 (path__1317)
{if ($T(file_existsQ__1275(path__1317)))
{
var stats__1318 = stat_sync__1314(path__1317),
result__1319 = make_object__1313(),
B1320 = Tfile_properties_mappingT__1301,
B1321,
B1322,
B1323 = [B1320];
while (true)
{
var B1324 = B1321,
B1330;
if ($T(B1324))
{B1330 = B1324}
else
B1330 = anyQ__1308(emptyQ__1309, B1323);
var B1331 = not__1294(B1330);
if ($T(B1331))
{
var mapping__1325 = first__1312(B1320);
(function B1326 (mapping__1327)
{
var setter__1328 = mapping__1327[0],
getter__1329 = mapping__1327[1];
return result__1319[setter__1328] = get__1310(stats__1318, getter__1329)})(mapping__1325);
B1320 = rest__1311(B1320);
B1323 = [B1320]}
else
break};
B1322;
return result__1319}}, false);
exports["file-properties"] = file_properties__1315}
{
var lstat_sync__1332 = B1271.lstatSync,
file_type__1333;
false;
file_type__1333 = Mmake_function__1276("file_type", function file_type__1334 (path__1335)
{if ($T(file_existsQ__1275(path__1335)))
{
var stat__1336 = lstat_sync__1332(path__1335);
if ($T(stat__1336.isFile()))
{return "file"}
else
if ($T(stat__1336.isDirectory()))
{return "directory"}
else
if ($T(stat__1336.isSymbolicLink()))
{return "link"}
else
if ($T(stat__1336.isBlockDevice()))
{return "block-device"}
else
if ($T(stat__1336.isCharacterDevice()))
{return "character-device"}
else
if ($T(stat__1336.isFIFO()))
{return "fifo"}
else
if ($T(stat__1336.isSocket()))
{return "socket"}}}, false);
exports["file-type"] = file_type__1333}
{
var as_string__1337 = B1267["as-string"],
read_file_sync__1338 = B1271.readFileSync,
read_file__1339;
false;
read_file__1339 = Mmake_function__1276("read_file", function read_file__1340 (path__1341)
{if ($T(file_existsQ__1275(path__1341)))
{return as_string__1337(read_file_sync__1338(path__1341))}}, false);
exports["read-file"] = read_file__1339}
{
var write_file_sync__1342 = B1271.writeFileSync,
write_file__1343;
false;
write_file__1343 = Mmake_function__1276("write_file", function write_file__1344 (path__1345, content__1346)
{
ensure_directories_exist__1296(path__1345);
return write_file_sync__1342(path__1345, content__1346)}, false);
exports["write-file"] = write_file__1343}
