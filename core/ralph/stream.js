{
    var B1273 = require('ralph/core');
}
false;
{
    {
        var ralphScoreCCMvar = B1273['%var'];
        var ralphScoreCCMmake_class = B1273['%make-class'];
        var ralphScoreCCLobjectG = B1273['<object>'];
        var LstreamG__1275 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {}, function LstreamG__1274() {
                return(false);
            });
    }
    (exports)['<stream>'] = LstreamG__1275;
}
{
    {
        var ralphScoreCCMmake_generic = B1273['%make-generic'];
        var stream_close__1276 = ralphScoreCCMmake_generic('stream_close');
    }
    (exports)['stream-close'] = stream_close__1276;
}
{
    {
        var stream_openQ__1277 = ralphScoreCCMmake_generic('stream_openQ');
    }
    (exports)['stream-open?'] = stream_openQ__1277;
}
{
    {
        var stream_at_endQ__1278 = ralphScoreCCMmake_generic('stream_at_endQ');
    }
    (exports)['stream-at-end?'] = stream_at_endQ__1278;
}
{
    {
        var stream_peek__1279 = ralphScoreCCMmake_generic('stream_peek');
    }
    (exports)['stream-peek'] = stream_peek__1279;
}
{
    {
        var stream_read__1280 = ralphScoreCCMmake_generic('stream_read');
    }
    (exports)['stream-read'] = stream_read__1280;
}
{
    {
        var stream_read_element__1281 = ralphScoreCCMmake_generic('stream_read_element');
    }
    (exports)['stream-read-element'] = stream_read_element__1281;
}
{
    {
        var stream_read_to_end__1282 = ralphScoreCCMmake_generic('stream_read_to_end');
    }
    (exports)['stream-read-to-end'] = stream_read_to_end__1282;
}
{
    {
        var stream_read_through__1283 = ralphScoreCCMmake_generic('stream_read_through');
    }
    (exports)['stream-read-through'] = stream_read_through__1283;
}
{
    {
        var stream_unread_element__1284 = ralphScoreCCMmake_generic('stream_unread_element');
    }
    (exports)['stream-unread-element'] = stream_unread_element__1284;
}
{
    {
        var stream_write__1285 = ralphScoreCCMmake_generic('stream_write');
    }
    (exports)['stream-write'] = stream_write__1285;
}
{
    {
        var stream_contents__1286 = ralphScoreCCMmake_generic('stream_contents');
    }
    (exports)['stream-contents'] = stream_contents__1286;
}
{
    {
        var stream_remaining_contents__1287 = ralphScoreCCMmake_generic('stream_remaining_contents');
    }
    (exports)['stream-remaining-contents'] = stream_remaining_contents__1287;
}
{
    {
        var Lstring_streamG__1295 = ralphScoreCCMmake_class(LstreamG__1275, {
                'string': function B1291() {
                    return('');
                },
                'index': function B1292() {
                    return(0);
                },
                'length': function B1293() {
                    return(0);
                }
            }, function Lstring_streamG__1294() {
                {
                    var B1296 = (this);
                }
                B1296['string'] = (undefined);
                {
                    var B1297 = (this);
                }
                B1297['index'] = (undefined);
                {
                    var B1298 = (this);
                }
                return(B1298['length'] = (undefined));
            });
    }
    (exports)['<string-stream>'] = Lstring_streamG__1295;
}
{
    var ralphScoreCCMmake_method = B1273['%make-method'];
    var ralphScoreCCapply = B1273['apply'];
    var ralphScoreCCMnext_method = B1273['%next-method'];
    var ralphScoreCCget_setter = B1273['get-setter'];
    var ralphScoreCCsize = B1273['size'];
    var ralphScoreCCget = B1273['get'];
    var ralphScoreCCinitialize = B1273['initialize'];
    var initialize__1303 = ralphScoreCCMmake_method('initialize', function B1300(stream__1301) {
            {
                var rest__1302 = $SL.call(arguments, 1);
            }
            ralphScoreCCapply(ralphScoreCCMnext_method(B1300), stream__1301, rest__1302);
            return(ralphScoreCCget_setter(stream__1301, 'length', ralphScoreCCsize(ralphScoreCCget(stream__1301, 'string'))));
        }, false, Lstring_streamG__1295, ralphScoreCCinitialize);
}
{
    {
        var ralphScoreCCEE = B1273['=='];
        var stream_at_endQ__1278 = ralphScoreCCMmake_method('stream_at_endQ', function B1305(stream__1306) {
                return(ralphScoreCCEE(ralphScoreCCget(stream__1306, 'index'), ralphScoreCCget(stream__1306, 'length')));
            }, false, Lstring_streamG__1295, stream_at_endQ__1278);
    }
    (exports)['stream-at-end?'] = stream_at_endQ__1278;
}
{
    {
        var ralphScoreCCelement = B1273['element'];
        var stream_peek__1279 = ralphScoreCCMmake_method('stream_peek', function B1308(stream__1309) {
                return(ralphScoreCCelement(ralphScoreCCget(stream__1309, 'string'), ralphScoreCCget(stream__1309, 'index')));
            }, false, Lstring_streamG__1295, stream_peek__1279);
    }
    (exports)['stream-peek'] = stream_peek__1279;
}
{
    {
        var ralphScoreCCnot = B1273['not'];
        var ralphScoreCCP = B1273['+'];
        var stream_read_element__1281 = ralphScoreCCMmake_method('stream_read_element', function B1311(stream__1312) {
                if (($T)(ralphScoreCCnot(stream_at_endQ__1278(stream__1312)))) {
                    {
                        var element__1313 = stream_peek__1279(stream__1312);
                    }
                    ralphScoreCCget_setter(stream__1312, 'index', ralphScoreCCP(ralphScoreCCget(stream__1312, 'index'), 1));
                    return(element__1313);
                } else
                    return(false);
            }, false, Lstring_streamG__1295, stream_read_element__1281);
    }
    (exports)['stream-read-element'] = stream_read_element__1281;
}
{
    {
        var ralphScoreCCGE = B1273['>='];
        var ralphScoreCCconcatenate = B1273['concatenate'];
        var ralphScoreCCinc = B1273['inc'];
        var stream_read__1280 = ralphScoreCCMmake_method('stream_read', function B1317(stream__1318, n__1319) {
                {
                    var result__1320 = '';
                    var i__1321 = 0;
                }
                while (true) {
                    {
                        var B1322 = stream_at_endQ__1278(stream__1318);
                        var B1325 = false;
                    }
                    if (($T)(B1322))
                        B1325 = B1322;
                    else
                        B1325 = ralphScoreCCGE(i__1321, n__1319);
                    {
                        var B1326 = ralphScoreCCnot(B1325);
                    }
                    if (($T)(B1326)) {
                        (function B1323(i__1324) {
                            return(result__1320 = ralphScoreCCconcatenate(result__1320, stream_read_element__1281(stream__1318)));
                        }(i__1321));
                        i__1321 = ralphScoreCCinc(i__1321);
                    } else
                        break;
                }
                return(result__1320);
            }, false, Lstring_streamG__1295, stream_read__1280);
    }
    (exports)['stream-read'] = stream_read__1280;
}
{
    {
        var stream_read_through__1283 = ralphScoreCCMmake_method('stream_read_through', function B1329(stream__1330, element__1331) {
                {
                    var foundQ__1332 = false;
                }
                while (true) {
                    {
                        var B1333 = stream_at_endQ__1278(stream__1330);
                        var B1334 = false;
                    }
                    if (($T)(B1333))
                        B1334 = B1333;
                    else
                        B1334 = foundQ__1332;
                    {
                        var B1335 = ralphScoreCCnot(B1334);
                    }
                    if (($T)(B1335))
                        foundQ__1332 = ralphScoreCCEE(stream_read_element__1281(stream__1330), element__1331);
                    else
                        break;
                }
                return(false);
            }, false, Lstring_streamG__1295, stream_read_through__1283);
    }
    (exports)['stream-read-through'] = stream_read_through__1283;
}
{
    {
        var ralphScoreCCmax = B1273['max'];
        var ralphScoreCCdec = B1273['dec'];
        var stream_unread_element__1284 = ralphScoreCCMmake_method('stream_unread_element', function B1337(stream__1338) {
                return(ralphScoreCCget_setter(stream__1338, 'index', ralphScoreCCmax(0, ralphScoreCCdec(ralphScoreCCget(stream__1338, 'index')))));
            }, false, Lstring_streamG__1295, stream_unread_element__1284);
    }
    (exports)['stream-unread-element'] = stream_unread_element__1284;
}
{
    {
        var ralphScoreCCreplace_subsequence = B1273['replace-subsequence'];
        var B1343 = $K('start');
        var B1344 = $K('end');
        var stream_write__1285 = ralphScoreCCMmake_method('stream_write', function B1345(stream__1346, string__1347) {
                {
                    var B1348 = stream__1346;
                    var index__1349 = B1348['index'];
                    var length__1350 = ralphScoreCCsize(string__1347);
                    var end__1351 = ralphScoreCCP(index__1349, length__1350);
                }
                ralphScoreCCget_setter(stream__1346, 'string', ralphScoreCCreplace_subsequence(ralphScoreCCget(stream__1346, 'string'), string__1347, B1343, index__1349, B1344, end__1351));
                ralphScoreCCget_setter(stream__1346, 'index', end__1351);
                ralphScoreCCget_setter(stream__1346, 'length', ralphScoreCCmax(end__1351, ralphScoreCCget(stream__1346, 'length')));
                return(string__1347);
            }, false, Lstring_streamG__1295, stream_write__1285);
    }
    (exports)['stream-write'] = stream_write__1285;
}
{
    {
        var stream_contents__1286 = ralphScoreCCMmake_method('stream_contents', function B1353(stream__1354) {
                return(ralphScoreCCget(stream__1354, 'string'));
            }, false, Lstring_streamG__1295, stream_contents__1286);
    }
    (exports)['stream-contents'] = stream_contents__1286;
}
{
    {
        var ralphScoreCCslice = B1273['slice'];
        var stream_remaining_contents__1287 = ralphScoreCCMmake_method('stream_remaining_contents', function B1356(stream__1357) {
                return(ralphScoreCCslice(ralphScoreCCget(stream__1357, 'string'), ralphScoreCCget(stream__1357, 'index')));
            }, false, Lstring_streamG__1295, stream_remaining_contents__1287);
    }
    (exports)['stream-remaining-contents'] = stream_remaining_contents__1287;
}
{
    {
        var Lfile_streamG__1359 = ralphScoreCCMmake_class(LstreamG__1275, { 'file': false }, function Lfile_streamG__1358() {
                {
                    var B1360 = (this);
                }
                return(B1360['file'] = (undefined));
            });
    }
    (exports)['<file-stream>'] = Lfile_streamG__1359;
}
{
    {
        var stream_write__1285 = ralphScoreCCMmake_method('stream_write', function B1364(stream__1365, string__1366) {
                {
                    var B1367 = ralphScoreCCget(stream__1365, 'file');
                    var B1368 = string__1366;
                }
                return(B1367['write'](B1368));
            }, false, Lfile_streamG__1359, stream_write__1285);
    }
    (exports)['stream-write'] = stream_write__1285;
}
{
    {
        var ralphScoreCCmake = B1273['make'];
        var B1370 = $K('file');
        var Tstandard_outputT__1371 = ralphScoreCCmake(Lfile_streamG__1359, B1370, (process)['stdout']);
    }
    (exports)['*standard-output*'] = Tstandard_outputT__1371;
}
{
    {
        var Tstandard_errorT__1372 = ralphScoreCCmake(Lfile_streamG__1359, B1370, (process)['stderr']);
    }
    (exports)['*standard-error*'] = Tstandard_errorT__1372;
}
