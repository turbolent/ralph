var B139 = require("ralph/core")
var B141 = require("ralph/stream")
var B142 = B139["%make-function"],
B143 = B139["as-string"],
B144 = B142("format_integer", function format_integer__145 (number__146)
{return B143(number__146)}, false)
{
var B184 = $K("message"),
B150 = B139["binary=="],
B151 = B139.description,
B152 = B139.signal,
B153 = B139.make,
B154 = B139["<error>"],
B155 = B139.concatenate,
B156 = B139["as-lowercase"],
B157 = B139.not,
B158 = B139["empty?"],
B159 = B139[">"],
B160 = B141["stream-write"],
B161 = B139.slice,
B162 = B139.second,
B163 = B139.element,
B164 = B139.position,
B165 = B142("format", function format__166 (stream__167, control_string__168)
{
var args__169 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__170 = function dispatch__171 (char__172, arg__173)
{
var B174 = B156(char__172),
B175 = B150(B174, "s"),
B182;
if ($T(B175))
B182 = B175
else
B182 = B150(B174, "c");
if ($T(B182))
return arg__173
else
if ($T(B150(B174, "=")))
{
var B176 = B151(arg__173);
if ($T(B176))
return B176
else
return ""}
else
if ($T(B150(B174, "b")))
return B144(arg__173, 2)
else
if ($T(B150(B174, "o")))
return B144(arg__173, 8)
else
if ($T(B150(B174, "d")))
return B144(arg__173, 10)
else
if ($T(B150(B174, "x")))
return B144(arg__173, 16)
else
if ($T(B150(B174, "m")))
{
arg__173(stream__167);
return ""}
else
return B152(B153(B154, B184, B155("Unknown format dispatch character ", char__172)))},
index__177 = 0;
while ($T(B157(B158(control_string__168))))
{
var next_dispatch__178 = B164(control_string__168, "%");
if ($T(B159(next_dispatch__178, 0)))
{
B160(stream__167, B161(control_string__168, 0, next_dispatch__178));
control_string__168 = B161(control_string__168, next_dispatch__178)}
else
if ($T(next_dispatch__178))
{
var arg__179 = B163(args__169, index__177),
char__180 = B162(control_string__168),
percent__181 = B150(char__180, "%"),
B183;
if ($T(percent__181))
B183 = "%"
else
B183 = dispatch__170(char__180, arg__179);
B160(stream__167, B183);
control_string__168 = B161(control_string__168, 2);
if ($T(B157(percent__181)))
index__177 = (index__177 + 1)}
else
{
B160(stream__167, control_string__168);
control_string__168 = ""}};
return false}, false);
exports.format = B165}
{
var B185 = B139.apply,
B186 = B141["*standard-out*"],
B187 = B142("format_out", function format_out__188 (control_string__189)
{
var args__190 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return B185(B165, B186, control_string__189, args__190)}, false);
exports["format-out"] = B187}
{
var B191 = B141["stream-contents"],
B192 = B141["<string-stream>"],
B193 = B142("format_to_string", function format_to_string__194 (control_string__195)
{
var args__196 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__197 = B153(B192);
B185(B165, stream__197, control_string__195, args__196);
return B191(stream__197)}, false);
exports["format-to-string"] = B193}
