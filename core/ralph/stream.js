var B33 = require("ralph/core")
false
{
var B34 = B33["%make-class"],
B35 = B33["<object>"],
B36 = B34(B35, {});
exports["<stream>"] = B36}
{
var B37 = B33["%make-generic"],
B38 = B37("stream_close");
exports["stream-close"] = B38}
{
var B39 = B37("stream_openQ");
exports["stream-open?"] = B39}
{
var B40 = B37("stream_at_endQ");
exports["stream-at-end?"] = B40}
{
var B41 = B37("stream_peek");
exports["stream-peek"] = B41}
{
var B42 = B37("stream_read");
exports["stream-read"] = B42}
{
var B43 = B37("stream_read_element");
exports["stream-read-element"] = B43}
{
var B44 = B37("stream_read_to_end");
exports["stream-read-to-end"] = B44}
{
var B45 = B37("stream_read_through");
exports["stream-read-through"] = B45}
{
var B46 = B37("stream_unread_element");
exports["stream-unread-element"] = B46}
{
var B47 = B37("stream_write");
exports["stream-write"] = B47}
{
var B48 = B37("stream_contents");
exports["stream-contents"] = B48}
{
var B49 = B37("stream_remaining_contents");
exports["stream-remaining-contents"] = B49}
{
var B53 = B34(B36, {"string":function B54 ()
{return ""},
index:function B55 ()
{return 0},
length:function B56 ()
{return 0}});
exports["<string-stream>"] = B53}
var B58 = B33["%make-method"],
B59 = B33.apply,
B60 = B33["%next-method"],
B61 = B33.size,
B62 = B33.get,
B63 = B58("initialize", function B64 (stream__65)
{
var rest__66 = $SL.call(arguments, 1);
B59(B60(B64), stream__65, rest__66);
return stream__65.length = B61(B62(stream__65, "string"))}, false, B53, B63)
{
var B68 = B33["binary=="];
B40 = B58("stream_at_endQ", function B69 (stream__70)
{return B68(B62(stream__70, "index"), B62(stream__70, "length"))}, false, B53, B40);
exports["stream-at-end?"] = B40}
{
var B72 = B33.element;
B41 = B58("stream_peek", function B73 (stream__74)
{return B72(B62(stream__74, "string"), B62(stream__74, "index"))}, false, B53, B41);
exports["stream-peek"] = B41}
{
var B76 = B33.not;
B43 = B58("stream_read_element", function B77 (stream__78)
{if ($T(B76(B40(stream__78))))
{
var element__79 = B41(stream__78);
stream__78.index = (B62(stream__78, "index") + 1);
return element__79}}, false, B53, B43);
exports["stream-read-element"] = B43}
{
var B83 = B33[">="],
B84 = B33.concatenate,
B85 = B33.inc;
B42 = B58("stream_read", function B86 (stream__87, n__88)
{
var result__89 = "",
i__90 = 0;
while (true)
{
var B91 = B40(stream__87),
B94;
if ($T(B91))
B94 = B91
else
B94 = B83(i__90, n__88);
var B95 = B76(B94);
if ($T(B95))
{
(function B92 (i__93)
{return result__89 = B84(result__89, B43(stream__87))})(i__90);
i__90 = B85(i__90)}
else
break};
return result__89}, false, B53, B42);
exports["stream-read"] = B42}
{
B45 = B58("stream_read_through", function B98 (stream__99, element__100)
{
var foundQ__101;
while (true)
{
var B102 = B40(stream__99),
B103;
if ($T(B102))
B103 = B102
else
B103 = foundQ__101;
var B104 = B76(B103);
if ($T(B104))
foundQ__101 = B68(B43(stream__99), element__100)
else
break};
return false}, false, B53, B45);
exports["stream-read-through"] = B45}
{
var B106 = B33.max,
B107 = B33.dec;
B46 = B58("stream_unread_element", function B108 (stream__109)
{return stream__109.index = B106(0, B107(B62(stream__109, "index")))}, false, B53, B46);
exports["stream-unread-element"] = B46}
{
var B120 = $K("start"),
B121 = $K("end"),
B112 = B33["replace-subsequence"];
B47 = B58("stream_write", function B113 (stream__114, string__115)
{
var B116 = stream__114,
index__117 = B116.index,
length__118 = B61(string__115),
end__119 = (index__117 + length__118);
stream__114["string"] = B112(B62(stream__114, "string"), string__115, B120, index__117, B121, end__119);
stream__114.index = end__119;
stream__114.length = B106(end__119, B62(stream__114, "length"));
return string__115}, false, B53, B47);
exports["stream-write"] = B47}
{
B48 = B58("stream_contents", function B123 (stream__124)
{return B62(stream__124, "string")}, false, B53, B48);
exports["stream-contents"] = B48}
{
var B126 = B33.slice;
B49 = B58("stream_remaining_contents", function B127 (stream__128)
{return B126(B62(stream__128, "string"), B62(stream__128, "index"))}, false, B53, B49);
exports["stream-remaining-contents"] = B49}
{
var B129 = B34(B36, {file:false});
exports["<file-stream>"] = B129}
{
B47 = B58("stream_write", function B131 (stream__132, string__133)
{return stream__132.file.write(string__133)}, false, B129, B47);
exports["stream-write"] = B47}
{
var B136 = $K("file"),
B134 = B33.make,
B135 = B134(B129, B136, process.stdout);
exports["*standard-out*"] = B135}
