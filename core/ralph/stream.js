var B1271 = require('ralph/core');
false;
{
    var ralphScoreCCMvar = B1271['%var'], ralphScoreCCMmake_class = B1271['%make-class'], ralphScoreCCLobjectG = B1271['<object>'], LstreamG__1273 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {}, function LstreamG__1272() {
            return(false);
        });
    (exports)['<stream>'] = LstreamG__1273;
}
{
    var ralphScoreCCMmake_generic = B1271['%make-generic'], stream_close__1274 = ralphScoreCCMmake_generic('stream_close');
    (exports)['stream-close'] = stream_close__1274;
}
{
    var stream_openQ__1275 = ralphScoreCCMmake_generic('stream_openQ');
    (exports)['stream-open?'] = stream_openQ__1275;
}
{
    var stream_at_endQ__1276 = ralphScoreCCMmake_generic('stream_at_endQ');
    (exports)['stream-at-end?'] = stream_at_endQ__1276;
}
{
    var stream_peek__1277 = ralphScoreCCMmake_generic('stream_peek');
    (exports)['stream-peek'] = stream_peek__1277;
}
{
    var stream_read__1278 = ralphScoreCCMmake_generic('stream_read');
    (exports)['stream-read'] = stream_read__1278;
}
{
    var stream_read_element__1279 = ralphScoreCCMmake_generic('stream_read_element');
    (exports)['stream-read-element'] = stream_read_element__1279;
}
{
    var stream_read_to_end__1280 = ralphScoreCCMmake_generic('stream_read_to_end');
    (exports)['stream-read-to-end'] = stream_read_to_end__1280;
}
{
    var stream_read_through__1281 = ralphScoreCCMmake_generic('stream_read_through');
    (exports)['stream-read-through'] = stream_read_through__1281;
}
{
    var stream_unread_element__1282 = ralphScoreCCMmake_generic('stream_unread_element');
    (exports)['stream-unread-element'] = stream_unread_element__1282;
}
{
    var stream_write__1283 = ralphScoreCCMmake_generic('stream_write');
    (exports)['stream-write'] = stream_write__1283;
}
{
    var stream_contents__1284 = ralphScoreCCMmake_generic('stream_contents');
    (exports)['stream-contents'] = stream_contents__1284;
}
{
    var stream_remaining_contents__1285 = ralphScoreCCMmake_generic('stream_remaining_contents');
    (exports)['stream-remaining-contents'] = stream_remaining_contents__1285;
}
{
    var Lstring_streamG__1293 = ralphScoreCCMmake_class(LstreamG__1273, {
            'string': function B1289() {
                return('');
            },
            'index': function B1290() {
                return(0);
            },
            'length': function B1291() {
                return(0);
            }
        }, function Lstring_streamG__1292() {
            var B1294 = (this);
            B1294['string'] = (undefined);
            var B1295 = (this);
            B1295['index'] = (undefined);
            var B1296 = (this);
            return(B1296['length'] = (undefined));
        });
    (exports)['<string-stream>'] = Lstring_streamG__1293;
}
var ralphScoreCCMmake_method = B1271['%make-method'], ralphScoreCCapply = B1271['apply'], ralphScoreCCMnext_method = B1271['%next-method'], ralphScoreCCget_setter = B1271['get-setter'], ralphScoreCCsize = B1271['size'], ralphScoreCCget = B1271['get'], ralphScoreCCinitialize = B1271['initialize'], initialize__1301 = ralphScoreCCMmake_method('initialize', function B1298(stream__1299) {
        var rest__1300 = $SL.call(arguments, 1);
        ralphScoreCCapply(ralphScoreCCMnext_method(B1298), stream__1299, rest__1300);
        return(ralphScoreCCget_setter(stream__1299, 'length', ralphScoreCCsize(ralphScoreCCget(stream__1299, 'string'))));
    }, false, Lstring_streamG__1293, ralphScoreCCinitialize);
{
    var ralphScoreCCEE = B1271['=='], stream_at_endQ__1276 = ralphScoreCCMmake_method('stream_at_endQ', function B1303(stream__1304) {
            return(ralphScoreCCEE(ralphScoreCCget(stream__1304, 'index'), ralphScoreCCget(stream__1304, 'length')));
        }, false, Lstring_streamG__1293, stream_at_endQ__1276);
    (exports)['stream-at-end?'] = stream_at_endQ__1276;
}
{
    var ralphScoreCCelement = B1271['element'], stream_peek__1277 = ralphScoreCCMmake_method('stream_peek', function B1306(stream__1307) {
            return(ralphScoreCCelement(ralphScoreCCget(stream__1307, 'string'), ralphScoreCCget(stream__1307, 'index')));
        }, false, Lstring_streamG__1293, stream_peek__1277);
    (exports)['stream-peek'] = stream_peek__1277;
}
{
    var ralphScoreCCnot = B1271['not'], ralphScoreCCP = B1271['+'], stream_read_element__1279 = ralphScoreCCMmake_method('stream_read_element', function B1309(stream__1310) {
            if (($T)(ralphScoreCCnot(stream_at_endQ__1276(stream__1310)))) {
                var element__1311 = stream_peek__1277(stream__1310);
                ralphScoreCCget_setter(stream__1310, 'index', ralphScoreCCP(ralphScoreCCget(stream__1310, 'index'), 1));
                return(element__1311);
            } else
                return(false);
        }, false, Lstring_streamG__1293, stream_read_element__1279);
    (exports)['stream-read-element'] = stream_read_element__1279;
}
{
    var ralphScoreCCGE = B1271['>='], ralphScoreCCconcatenate = B1271['concatenate'], ralphScoreCCinc = B1271['inc'], stream_read__1278 = ralphScoreCCMmake_method('stream_read', function B1315(stream__1316, n__1317) {
            var result__1318 = '', i__1319 = 0;
            while (true) {
                var B1320 = stream_at_endQ__1276(stream__1316), B1323 = false;
                if (($T)(B1320))
                    B1323 = B1320;
                else
                    B1323 = ralphScoreCCGE(i__1319, n__1317);
                var B1324 = ralphScoreCCnot(B1323);
                if (($T)(B1324)) {
                    (function B1321(i__1322) {
                        return(result__1318 = ralphScoreCCconcatenate(result__1318, stream_read_element__1279(stream__1316)));
                    }(i__1319));
                    i__1319 = ralphScoreCCinc(i__1319);
                } else
                    break;
            }
            return(result__1318);
        }, false, Lstring_streamG__1293, stream_read__1278);
    (exports)['stream-read'] = stream_read__1278;
}
{
    var stream_read_through__1281 = ralphScoreCCMmake_method('stream_read_through', function B1327(stream__1328, element__1329) {
            var foundQ__1330 = false;
            while (true) {
                var B1331 = stream_at_endQ__1276(stream__1328), B1332 = false;
                if (($T)(B1331))
                    B1332 = B1331;
                else
                    B1332 = foundQ__1330;
                var B1333 = ralphScoreCCnot(B1332);
                if (($T)(B1333))
                    foundQ__1330 = ralphScoreCCEE(stream_read_element__1279(stream__1328), element__1329);
                else
                    break;
            }
            return(false);
        }, false, Lstring_streamG__1293, stream_read_through__1281);
    (exports)['stream-read-through'] = stream_read_through__1281;
}
{
    var ralphScoreCCmax = B1271['max'], ralphScoreCCdec = B1271['dec'], stream_unread_element__1282 = ralphScoreCCMmake_method('stream_unread_element', function B1335(stream__1336) {
            return(ralphScoreCCget_setter(stream__1336, 'index', ralphScoreCCmax(0, ralphScoreCCdec(ralphScoreCCget(stream__1336, 'index')))));
        }, false, Lstring_streamG__1293, stream_unread_element__1282);
    (exports)['stream-unread-element'] = stream_unread_element__1282;
}
{
    var ralphScoreCCreplace_subsequence = B1271['replace-subsequence'], B1341 = $K('start'), B1342 = $K('end'), stream_write__1283 = ralphScoreCCMmake_method('stream_write', function B1343(stream__1344, string__1345) {
            var B1346 = stream__1344, index__1347 = B1346['index'], length__1348 = ralphScoreCCsize(string__1345), end__1349 = ralphScoreCCP(index__1347, length__1348);
            ralphScoreCCget_setter(stream__1344, 'string', ralphScoreCCreplace_subsequence(ralphScoreCCget(stream__1344, 'string'), string__1345, B1341, index__1347, B1342, end__1349));
            ralphScoreCCget_setter(stream__1344, 'index', end__1349);
            ralphScoreCCget_setter(stream__1344, 'length', ralphScoreCCmax(end__1349, ralphScoreCCget(stream__1344, 'length')));
            return(string__1345);
        }, false, Lstring_streamG__1293, stream_write__1283);
    (exports)['stream-write'] = stream_write__1283;
}
{
    var stream_contents__1284 = ralphScoreCCMmake_method('stream_contents', function B1351(stream__1352) {
            return(ralphScoreCCget(stream__1352, 'string'));
        }, false, Lstring_streamG__1293, stream_contents__1284);
    (exports)['stream-contents'] = stream_contents__1284;
}
{
    var ralphScoreCCslice = B1271['slice'], stream_remaining_contents__1285 = ralphScoreCCMmake_method('stream_remaining_contents', function B1354(stream__1355) {
            return(ralphScoreCCslice(ralphScoreCCget(stream__1355, 'string'), ralphScoreCCget(stream__1355, 'index')));
        }, false, Lstring_streamG__1293, stream_remaining_contents__1285);
    (exports)['stream-remaining-contents'] = stream_remaining_contents__1285;
}
{
    var Lfile_streamG__1357 = ralphScoreCCMmake_class(LstreamG__1273, { 'file': false }, function Lfile_streamG__1356() {
            var B1358 = (this);
            return(B1358['file'] = (undefined));
        });
    (exports)['<file-stream>'] = Lfile_streamG__1357;
}
{
    var stream_write__1283 = ralphScoreCCMmake_method('stream_write', function B1362(stream__1363, string__1364) {
            var B1365 = ralphScoreCCget(stream__1363, 'file'), B1366 = string__1364;
            return(B1365['write'](B1366));
        }, false, Lfile_streamG__1357, stream_write__1283);
    (exports)['stream-write'] = stream_write__1283;
}
{
    var ralphScoreCChasQ = B1271['has?'], ralphScoreCCmake_object = B1271['make-object'];
    if (($T)(ralphScoreCChasQ((this), 'document'))) {
        var code__1370 = document.createElement('code');
        code__1370['style']['display'] = 'block';
        var B1371 = (document.body), B1372 = code__1370;
        B1371['appendChild'](B1372);
        var Bbrowser_emulation__1375 = ralphScoreCCmake_object('write', function B1373(string__1374) {
                return(code__1370['innerText'] = code__1370['innerText'] + string__1374);
            });
    }
}
var processQ__1376 = typeof((process)) !== 'undefined';
{
    var ralphScoreCCmake = B1271['make'], B1378 = $K('file'), B1380 = false;
    if (($T)(processQ__1376))
        B1380 = (process)['stdout'];
    else if (($T)(ralphScoreCChasQ((this), 'document')))
        B1380 = Bbrowser_emulation__1375;
    else
        B1380 = false;
    var B1381 = ralphScoreCCmake(Lfile_streamG__1357, B1378, B1380), Tstandard_outputT__1379 = B1381;
    (exports)['*standard-output*'] = Tstandard_outputT__1379;
}
{
    var B1383 = false;
    if (($T)(processQ__1376))
        B1383 = (process)['stderr'];
    else if (($T)(ralphScoreCChasQ((this), 'document')))
        B1383 = Bbrowser_emulation__1375;
    else
        B1383 = false;
    var B1384 = ralphScoreCCmake(Lfile_streamG__1357, B1378, B1383), Tstandard_errorT__1382 = B1384;
    (exports)['*standard-error*'] = Tstandard_errorT__1382;
}
