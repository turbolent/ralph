{
var B1683;
false;
B1683 = require("ralph/core")}
{
var B1686,
B1687;
false;
B1686 = require("path");
false;
B1687 = require("fs")}
{
var resolve__1688 = B1686.resolve,
resolve_path__1689;
false;
resolve_path__1689 = resolve__1688;
exports["resolve-path"] = resolve_path__1689}
{
var existssync__1690 = B1687.existsSync,
file_existsQ__1691;
false;
file_existsQ__1691 = existssync__1690;
exports["file-exists?"] = file_existsQ__1691}
{
var Mmake_function__1692 = B1683["%make-function"],
concatenate__1693 = B1683.concatenate,
dirname__1694 = B1686.dirname,
binaryEE__1695 = B1683["binary=="],
last__1696 = B1683.last,
path_directory__1697;
false;
path_directory__1697 = Mmake_function__1692("path_directory", function path_directory__1698 (path__1699)
{
var object2__1701 = "/",
object1__1700 = last__1696(path__1699),
B1702 = (object1__1700 === object2__1701),
B1703;
if ($T(B1702))
{B1703 = concatenate__1693(path__1699, "/")}
else
B1703 = path__1699;
var B1704 = dirname__1694(B1703);
return concatenate__1693(B1704, "/")}, false);
exports["path-directory"] = path_directory__1697}
{
var but_last__1705 = B1683["but-last"],
strip_trailing_slashes__1706;
false;
strip_trailing_slashes__1706 = Mmake_function__1692("strip_trailing_slashes", function strip_trailing_slashes__1707 (path__1708)
{
while (true)
{
var object2__1710 = "/",
object1__1709 = last__1696(path__1708),
B1714 = (object1__1709 === object2__1710);
if ($T(B1714))
{
var n__1712,
array__1711 = path__1708,
B1713 = array__1711.slice(0, ((n__1712 || 1) * -1));
path__1708 = B1713}
else
break};
return path__1708}, false)}
{
var path_parent_directory__1715;
false;
path_parent_directory__1715 = Mmake_function__1692("path_parent_directory", function path_parent_directory__1716 (path__1717)
{
var pathT__1718 = strip_trailing_slashes__1706(path_directory__1697(path__1717));
return concatenate__1693(dirname__1694(pathT__1718), "/")}, false);
exports["path-parent-directory"] = path_parent_directory__1715}
{
var ralphScoreCCtrueQ = B1683["true?"],
not__1719 = B1683.not,
mkdirsync__1720 = B1687.mkdirSync,
ensure_directories_exist__1721;
false;
ensure_directories_exist__1721 = Mmake_function__1692("ensure_directories_exist", function ensure_directories_exist__1722 (path__1723)
{
var directory__1724 = path_directory__1697(path__1723),
parent__1725 = path_parent_directory__1715(directory__1724),
value__1726 = file_existsQ__1691(parent__1725),
B1728 = !(ralphScoreCCtrueQ(value__1726));
if ($T(B1728))
{ensure_directories_exist__1722(parent__1725)};
var value__1727 = file_existsQ__1691(directory__1724),
B1729 = !(ralphScoreCCtrueQ(value__1727));
if ($T(B1729))
{mkdirsync__1720(directory__1724)};
return path__1723}, false);
exports["ensure-directories-exist"] = ensure_directories_exist__1721}
{
var Tfile_properties_mappingT__1730;
false;
Tfile_properties_mappingT__1730 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]}
{
var anyQ__1737 = B1683["any?"],
emptyQ__1738 = B1683["empty?"],
get__1739 = B1683.get,
rest__1740 = B1683.rest,
first__1741 = B1683.first,
make_object__1742 = B1683["make-object"],
statsync__1743 = B1687.statSync,
file_properties__1744;
false;
file_properties__1744 = Mmake_function__1692("file_properties", function file_properties__1745 (path__1746)
{if ($T(file_existsQ__1691(path__1746)))
{
var stats__1747 = statsync__1743(path__1746),
result__1748 = make_object__1742(),
B1731__1749 = Tfile_properties_mappingT__1730,
B1732__1750,
B1734__1751,
B1733__1752 = [B1731__1749];
while (true)
{
var B1735__1753 = B1732__1750,
value__1759;
if ($T(B1735__1753))
{value__1759 = B1735__1753}
else
value__1759 = anyQ__1737(emptyQ__1738, B1733__1752);
var B1763 = !(ralphScoreCCtrueQ(value__1759));
if ($T(B1763))
{
var sequence__1760 = B1731__1749,
mapping__1754 = sequence__1760[0];
(function B1736__1755 (mapping__1756)
{
var setter__1757 = mapping__1756[0],
getter__1758 = mapping__1756[1];
return result__1748[setter__1757] = get__1739(stats__1747, getter__1758)})(mapping__1754);
var sequence__1761 = B1731__1749,
B1762 = sequence__1761.slice(1);
B1731__1749 = B1762;
B1733__1752 = [B1731__1749]}
else
break};
B1734__1751;
return result__1748}}, false);
exports["file-properties"] = file_properties__1744}
{
var lstatsync__1764 = B1687.lstatSync,
file_type__1765;
false;
file_type__1765 = Mmake_function__1692("file_type", function file_type__1766 (path__1767)
{if ($T(file_existsQ__1691(path__1767)))
{
var stat__1768 = lstatsync__1764(path__1767);
if ($T(stat__1768.isFile()))
{return "file"}
else
if ($T(stat__1768.isDirectory()))
{return "directory"}
else
if ($T(stat__1768.isSymbolicLink()))
{return "link"}
else
if ($T(stat__1768.isBlockDevice()))
{return "block-device"}
else
if ($T(stat__1768.isCharacterDevice()))
{return "character-device"}
else
if ($T(stat__1768.isFIFO()))
{return "fifo"}
else
if ($T(stat__1768.isSocket()))
{return "socket"}}}, false);
exports["file-type"] = file_type__1765}
{
var as_string__1769 = B1683["as-string"],
readfilesync__1770 = B1687.readFileSync,
read_file__1771;
false;
read_file__1771 = Mmake_function__1692("read_file", function read_file__1772 (path__1773)
{if ($T(file_existsQ__1691(path__1773)))
{return as_string__1769(readfilesync__1770(path__1773))}}, false);
exports["read-file"] = read_file__1771}
{
var writefilesync__1774 = B1687.writeFileSync,
write_file__1775;
false;
write_file__1775 = Mmake_function__1692("write_file", function write_file__1776 (path__1777, content__1778)
{
ensure_directories_exist__1721(path__1777);
return writefilesync__1774(path__1777, content__1778)}, false);
exports["write-file"] = write_file__1775}
