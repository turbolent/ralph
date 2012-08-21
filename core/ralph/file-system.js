var B351 = require("ralph/core")
{
var B354,
B355;
B354 = require("path");
B355 = require("fs")}
{
var B356 = B354.resolve,
B357 = B356;
exports["resolve-path"] = B357}
{
var B358 = B355.existsSync,
B359 = B358;
exports["file-exists?"] = B359}
{
var B360 = B351["%make-function"],
B361 = B351.concatenate,
B362 = B354.dirname,
B363 = B351["binary=="],
B364 = B351.last,
B365 = B360("path_directory", function path_directory__366 (path__367)
{
var B368;
if ($T(B363(B364(path__367), "/")))
B368 = B361(path__367, "/")
else
B368 = path__367;
var B369 = B362(B368);
return B361(B369, "/")}, false);
exports["path-directory"] = B365}
var B370 = B351["but-last"],
B371 = B360("strip_trailing_slashes", function strip_trailing_slashes__372 (path__373)
{
while ($T(B363(B364(path__373), "/")))
path__373 = B370(path__373);
return path__373}, false)
{
var B374 = B360("path_parent_directory", function path_parent_directory__375 (path__376)
{
var pathT__377 = B371(B365(path__376));
return B361(B362(pathT__377), "/")}, false);
exports["path-parent-directory"] = B374}
{
var ensure_directories_exist__381,
B378 = B351.not,
B379 = B355.mkdirSync,
B380 = B360("ensure_directories_exist", function ensure_directories_exist__381 (path__382)
{
var directory__383 = B365(path__382),
parent__384 = B374(directory__383);
if ($T(B378(B359(parent__384))))
ensure_directories_exist__381(parent__384);
if ($T(B378(B359(directory__383))))
B379(directory__383);
return path__382}, false);
exports["ensure-directories-exist"] = B380}
var B385 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{
var B392 = B351["any?"],
B393 = B351["empty?"],
B394 = B351.get,
B395 = B351.rest,
B396 = B351.first,
B397 = B351["make-object"],
B398 = B355.statSync,
B399 = B360("file_properties", function file_properties__400 (path__401)
{if ($T(B359(path__401)))
{
var stats__402 = B398(path__401),
result__403 = B397(),
B404 = B385,
B405,
B406,
B407 = [B404];
while (true)
{
var B408 = B405,
B414;
if ($T(B408))
B414 = B408
else
B414 = B392(B393, B407);
var B415 = B378(B414);
if ($T(B415))
{
var mapping__409 = B396(B404);
(function B410 (mapping__411)
{
var setter__412 = mapping__411[0],
getter__413 = mapping__411[1];
return result__403[setter__412] = B394(stats__402, getter__413)})(mapping__409);
B404 = B395(B404);
B407 = [B404]}
else
break};
B406;
return result__403}}, false);
exports["file-properties"] = B399}
{
var B416 = B355.lstatSync,
B417 = B360("file_type", function file_type__418 (path__419)
{if ($T(B359(path__419)))
{
var stat__420 = B416(path__419);
if ($T(stat__420.isFile()))
return "file"
else
if ($T(stat__420.isDirectory()))
return "directory"
else
if ($T(stat__420.isSymbolicLink()))
return "link"
else
if ($T(stat__420.isBlockDevice()))
return "block-device"
else
if ($T(stat__420.isCharacterDevice()))
return "character-device"
else
if ($T(stat__420.isFIFO()))
return "fifo"
else
if ($T(stat__420.isSocket()))
return "socket"}}, false);
exports["file-type"] = B417}
{
var B421 = B351["as-string"],
B422 = B355.readFileSync,
B423 = B360("read_file", function read_file__424 (path__425)
{if ($T(B359(path__425)))
return B421(B422(path__425))}, false);
exports["read-file"] = B423}
{
var B426 = B355.writeFileSync,
B427 = B360("write_file", function write_file__428 (path__429, content__430)
{
B380(path__429);
return B426(path__429, content__430)}, false);
exports["write-file"] = B427}
