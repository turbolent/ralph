{
    var B1277 = require('ralph/core');
}
false;
{
    {
        var ralphScoreCCMvar = B1277['%var'];
        var ralphScoreCCMmake_class = B1277['%make-class'];
        var ralphScoreCCLobjectG = B1277['<object>'];
        var LstreamG__1279 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {}, function LstreamG__1278() {
                return(false);
            });
    }
    (exports)['<stream>'] = LstreamG__1279;
}
{
    {
        var ralphScoreCCMmake_generic = B1277['%make-generic'];
        var stream_close__1280 = ralphScoreCCMmake_generic('stream_close');
    }
    (exports)['stream-close'] = stream_close__1280;
}
{
    {
        var stream_openQ__1281 = ralphScoreCCMmake_generic('stream_openQ');
    }
    (exports)['stream-open?'] = stream_openQ__1281;
}
{
    {
        var stream_at_endQ__1282 = ralphScoreCCMmake_generic('stream_at_endQ');
    }
    (exports)['stream-at-end?'] = stream_at_endQ__1282;
}
{
    {
        var stream_peek__1283 = ralphScoreCCMmake_generic('stream_peek');
    }
    (exports)['stream-peek'] = stream_peek__1283;
}
{
    {
        var stream_read__1284 = ralphScoreCCMmake_generic('stream_read');
    }
    (exports)['stream-read'] = stream_read__1284;
}
{
    {
        var stream_read_element__1285 = ralphScoreCCMmake_generic('stream_read_element');
    }
    (exports)['stream-read-element'] = stream_read_element__1285;
}
{
    {
        var stream_read_to_end__1286 = ralphScoreCCMmake_generic('stream_read_to_end');
    }
    (exports)['stream-read-to-end'] = stream_read_to_end__1286;
}
{
    {
        var stream_read_through__1287 = ralphScoreCCMmake_generic('stream_read_through');
    }
    (exports)['stream-read-through'] = stream_read_through__1287;
}
{
    {
        var stream_unread_element__1288 = ralphScoreCCMmake_generic('stream_unread_element');
    }
    (exports)['stream-unread-element'] = stream_unread_element__1288;
}
{
    {
        var stream_write__1289 = ralphScoreCCMmake_generic('stream_write');
    }
    (exports)['stream-write'] = stream_write__1289;
}
{
    {
        var stream_contents__1290 = ralphScoreCCMmake_generic('stream_contents');
    }
    (exports)['stream-contents'] = stream_contents__1290;
}
{
    {
        var stream_remaining_contents__1291 = ralphScoreCCMmake_generic('stream_remaining_contents');
    }
    (exports)['stream-remaining-contents'] = stream_remaining_contents__1291;
}
{
    {
        var Lstring_streamG__1299 = ralphScoreCCMmake_class(LstreamG__1279, {
                'string': function B1295() {
                    return('');
                },
                'index': function B1296() {
                    return(0);
                },
                'length': function B1297() {
                    return(0);
                }
            }, function Lstring_streamG__1298() {
                {
                    var B1300 = (this);
                }
                B1300['string'] = (undefined);
                {
                    var B1301 = (this);
                }
                B1301['index'] = (undefined);
                {
                    var B1302 = (this);
                }
                return(B1302['length'] = (undefined));
            });
    }
    (exports)['<string-stream>'] = Lstring_streamG__1299;
}
{
    var ralphScoreCCMmake_method = B1277['%make-method'];
    var ralphScoreCCapply = B1277['apply'];
    var ralphScoreCCMnext_method = B1277['%next-method'];
    var ralphScoreCCget_setter = B1277['get-setter'];
    var ralphScoreCCsize = B1277['size'];
    var ralphScoreCCget = B1277['get'];
    var ralphScoreCCinitialize = B1277['initialize'];
    var initialize__1307 = ralphScoreCCMmake_method('initialize', function B1304(stream__1305) {
            {
                var rest__1306 = $SL.call(arguments, 1);
            }
            ralphScoreCCapply(ralphScoreCCMnext_method(B1304), stream__1305, rest__1306);
            return(ralphScoreCCget_setter(stream__1305, 'length', ralphScoreCCsize(ralphScoreCCget(stream__1305, 'string'))));
        }, false, Lstring_streamG__1299, ralphScoreCCinitialize);
}
{
    {
        var ralphScoreCCEE = B1277['=='];
        var stream_at_endQ__1282 = ralphScoreCCMmake_method('stream_at_endQ', function B1309(stream__1310) {
                return(ralphScoreCCEE(ralphScoreCCget(stream__1310, 'index'), ralphScoreCCget(stream__1310, 'length')));
            }, false, Lstring_streamG__1299, stream_at_endQ__1282);
    }
    (exports)['stream-at-end?'] = stream_at_endQ__1282;
}
{
    {
        var ralphScoreCCelement = B1277['element'];
        var stream_peek__1283 = ralphScoreCCMmake_method('stream_peek', function B1312(stream__1313) {
                return(ralphScoreCCelement(ralphScoreCCget(stream__1313, 'string'), ralphScoreCCget(stream__1313, 'index')));
            }, false, Lstring_streamG__1299, stream_peek__1283);
    }
    (exports)['stream-peek'] = stream_peek__1283;
}
{
    {
        var ralphScoreCCnot = B1277['not'];
        var ralphScoreCCP = B1277['+'];
        var stream_read_element__1285 = ralphScoreCCMmake_method('stream_read_element', function B1315(stream__1316) {
                if (($T)(ralphScoreCCnot(stream_at_endQ__1282(stream__1316)))) {
                    {
                        var element__1317 = stream_peek__1283(stream__1316);
                    }
                    ralphScoreCCget_setter(stream__1316, 'index', ralphScoreCCP(ralphScoreCCget(stream__1316, 'index'), 1));
                    return(element__1317);
                } else
                    return(false);
            }, false, Lstring_streamG__1299, stream_read_element__1285);
    }
    (exports)['stream-read-element'] = stream_read_element__1285;
}
{
    {
        var ralphScoreCCGE = B1277['>='];
        var ralphScoreCCconcatenate = B1277['concatenate'];
        var ralphScoreCCinc = B1277['inc'];
        var stream_read__1284 = ralphScoreCCMmake_method('stream_read', function B1321(stream__1322, n__1323) {
                {
                    var result__1324 = '';
                    var i__1325 = 0;
                }
                while (true) {
                    {
                        var B1326 = stream_at_endQ__1282(stream__1322);
                        var B1329 = false;
                    }
                    if (($T)(B1326))
                        B1329 = B1326;
                    else
                        B1329 = ralphScoreCCGE(i__1325, n__1323);
                    {
                        var B1330 = ralphScoreCCnot(B1329);
                    }
                    if (($T)(B1330)) {
                        (function B1327(i__1328) {
                            return(result__1324 = ralphScoreCCconcatenate(result__1324, stream_read_element__1285(stream__1322)));
                        }(i__1325));
                        i__1325 = ralphScoreCCinc(i__1325);
                    } else
                        break;
                }
                return(result__1324);
            }, false, Lstring_streamG__1299, stream_read__1284);
    }
    (exports)['stream-read'] = stream_read__1284;
}
{
    {
        var stream_read_through__1287 = ralphScoreCCMmake_method('stream_read_through', function B1333(stream__1334, element__1335) {
                {
                    var foundQ__1336 = false;
                }
                while (true) {
                    {
                        var B1337 = stream_at_endQ__1282(stream__1334);
                        var B1338 = false;
                    }
                    if (($T)(B1337))
                        B1338 = B1337;
                    else
                        B1338 = foundQ__1336;
                    {
                        var B1339 = ralphScoreCCnot(B1338);
                    }
                    if (($T)(B1339))
                        foundQ__1336 = ralphScoreCCEE(stream_read_element__1285(stream__1334), element__1335);
                    else
                        break;
                }
                return(false);
            }, false, Lstring_streamG__1299, stream_read_through__1287);
    }
    (exports)['stream-read-through'] = stream_read_through__1287;
}
{
    {
        var ralphScoreCCmax = B1277['max'];
        var ralphScoreCCdec = B1277['dec'];
        var stream_unread_element__1288 = ralphScoreCCMmake_method('stream_unread_element', function B1341(stream__1342) {
                return(ralphScoreCCget_setter(stream__1342, 'index', ralphScoreCCmax(0, ralphScoreCCdec(ralphScoreCCget(stream__1342, 'index')))));
            }, false, Lstring_streamG__1299, stream_unread_element__1288);
    }
    (exports)['stream-unread-element'] = stream_unread_element__1288;
}
{
    {
        var ralphScoreCCreplace_subsequence = B1277['replace-subsequence'];
        var B1347 = $K('start');
        var B1348 = $K('end');
        var stream_write__1289 = ralphScoreCCMmake_method('stream_write', function B1349(stream__1350, string__1351) {
                {
                    var B1352 = stream__1350;
                    var index__1353 = B1352['index'];
                    var length__1354 = ralphScoreCCsize(string__1351);
                    var end__1355 = ralphScoreCCP(index__1353, length__1354);
                }
                ralphScoreCCget_setter(stream__1350, 'string', ralphScoreCCreplace_subsequence(ralphScoreCCget(stream__1350, 'string'), string__1351, B1347, index__1353, B1348, end__1355));
                ralphScoreCCget_setter(stream__1350, 'index', end__1355);
                ralphScoreCCget_setter(stream__1350, 'length', ralphScoreCCmax(end__1355, ralphScoreCCget(stream__1350, 'length')));
                return(string__1351);
            }, false, Lstring_streamG__1299, stream_write__1289);
    }
    (exports)['stream-write'] = stream_write__1289;
}
{
    {
        var stream_contents__1290 = ralphScoreCCMmake_method('stream_contents', function B1357(stream__1358) {
                return(ralphScoreCCget(stream__1358, 'string'));
            }, false, Lstring_streamG__1299, stream_contents__1290);
    }
    (exports)['stream-contents'] = stream_contents__1290;
}
{
    {
        var ralphScoreCCslice = B1277['slice'];
        var stream_remaining_contents__1291 = ralphScoreCCMmake_method('stream_remaining_contents', function B1360(stream__1361) {
                return(ralphScoreCCslice(ralphScoreCCget(stream__1361, 'string'), ralphScoreCCget(stream__1361, 'index')));
            }, false, Lstring_streamG__1299, stream_remaining_contents__1291);
    }
    (exports)['stream-remaining-contents'] = stream_remaining_contents__1291;
}
{
    {
        var Lfile_streamG__1363 = ralphScoreCCMmake_class(LstreamG__1279, { 'file': false }, function Lfile_streamG__1362() {
                {
                    var B1364 = (this);
                }
                return(B1364['file'] = (undefined));
            });
    }
    (exports)['<file-stream>'] = Lfile_streamG__1363;
}
{
    {
        var stream_write__1289 = ralphScoreCCMmake_method('stream_write', function B1368(stream__1369, string__1370) {
                {
                    var B1371 = ralphScoreCCget(stream__1369, 'file');
                    var B1372 = string__1370;
                }
                return(B1371['write'](B1372));
            }, false, Lfile_streamG__1363, stream_write__1289);
    }
    (exports)['stream-write'] = stream_write__1289;
}
{
    {
        var ralphScoreCCmake = B1277['make'];
        var B1374 = $K('file');
        var Tstandard_outputT__1375 = ralphScoreCCmake(Lfile_streamG__1363, B1374, (process)['stdout']);
    }
    (exports)['*standard-output*'] = Tstandard_outputT__1375;
}
{
    {
        var Tstandard_errorT__1376 = ralphScoreCCmake(Lfile_streamG__1363, B1374, (process)['stderr']);
    }
    (exports)['*standard-error*'] = Tstandard_errorT__1376;
}
