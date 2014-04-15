require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1233(name__1234, value__1235) {
            var B1237 = (exports);
            return(B1237[name__1234] = value__1235);
        };
        {
            ($module)['%eval'] = function B1236() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1238 = require('ralph/core');
false;
{
    ($module)['<stream>'] = B1238['%make-class'](B1238['<object>'], {}, function LstreamG__1239() {
        return(false);
    });
    ($module)['%export']('<stream>', ($module)['<stream>']);
}
{
    ($module)['stream-close'] = B1238['%make-generic']('stream-close');
    ($module)['%export']('stream-close', ($module)['stream-close']);
}
{
    ($module)['stream-open?'] = B1238['%make-generic']('stream-open?');
    ($module)['%export']('stream-open?', ($module)['stream-open?']);
}
{
    ($module)['stream-at-end?'] = B1238['%make-generic']('stream-at-end?');
    ($module)['%export']('stream-at-end?', ($module)['stream-at-end?']);
}
{
    ($module)['stream-peek'] = B1238['%make-generic']('stream-peek');
    ($module)['%export']('stream-peek', ($module)['stream-peek']);
}
{
    ($module)['stream-read'] = B1238['%make-generic']('stream-read');
    ($module)['%export']('stream-read', ($module)['stream-read']);
}
{
    ($module)['stream-read-element'] = B1238['%make-generic']('stream-read-element');
    ($module)['%export']('stream-read-element', ($module)['stream-read-element']);
}
{
    ($module)['stream-read-to-end'] = B1238['%make-generic']('stream-read-to-end');
    ($module)['%export']('stream-read-to-end', ($module)['stream-read-to-end']);
}
{
    ($module)['stream-read-through'] = B1238['%make-generic']('stream-read-through');
    ($module)['%export']('stream-read-through', ($module)['stream-read-through']);
}
{
    ($module)['stream-unread-element'] = B1238['%make-generic']('stream-unread-element');
    ($module)['%export']('stream-unread-element', ($module)['stream-unread-element']);
}
{
    ($module)['stream-write'] = B1238['%make-generic']('stream-write');
    ($module)['%export']('stream-write', ($module)['stream-write']);
}
{
    ($module)['stream-contents'] = B1238['%make-generic']('stream-contents');
    ($module)['%export']('stream-contents', ($module)['stream-contents']);
}
{
    ($module)['stream-remaining-contents'] = B1238['%make-generic']('stream-remaining-contents');
    ($module)['%export']('stream-remaining-contents', ($module)['stream-remaining-contents']);
}
{
    ($module)['<string-stream>'] = B1238['%make-class'](($module)['<stream>'], {
        'string': function B1243() {
            return('');
        },
        'index': function B1244() {
            return(0);
        },
        'length': function B1245() {
            return(0);
        }
    }, function Lstring_streamG__1246() {
        var B1247 = (this);
        {
            B1247['string'] = (undefined);
            {
                var B1248 = (this);
                {
                    B1248['index'] = (undefined);
                    {
                        var B1249 = (this);
                        return(B1249['length'] = (undefined));
                    }
                }
            }
        }
    });
    ($module)['%export']('<string-stream>', ($module)['<string-stream>']);
}
($module)['initialize'] = B1238['%make-method']('initialize', function B1251(stream__1252) {
    var rest__1253 = $SL.call(arguments, 1);
    {
        B1238['apply'](B1238['%next-method'](B1251), stream__1252, rest__1253);
        return(B1238['get-setter'](stream__1252, 'length', B1238['size'](B1238['get'](stream__1252, 'string'))));
    }
}, false, ($module)['<string-stream>'], ($module)['initialize']);
{
    ($module)['stream-at-end?'] = B1238['%make-method']('stream-at-end?', function B1255(stream__1256) {
        return(B1238['=='](B1238['get'](stream__1256, 'index'), B1238['get'](stream__1256, 'length')));
    }, false, ($module)['<string-stream>'], ($module)['stream-at-end?']);
    ($module)['%export']('stream-at-end?', ($module)['stream-at-end?']);
}
{
    ($module)['stream-peek'] = B1238['%make-method']('stream-peek', function B1258(stream__1259) {
        return(B1238['element'](B1238['get'](stream__1259, 'string'), B1238['get'](stream__1259, 'index')));
    }, false, ($module)['<string-stream>'], ($module)['stream-peek']);
    ($module)['%export']('stream-peek', ($module)['stream-peek']);
}
{
    ($module)['stream-read-element'] = B1238['%make-method']('stream-read-element', function B1261(stream__1262) {
        if (($T)(B1238['not'](($module)['stream-at-end?'](stream__1262)))) {
            var element__1263 = ($module)['stream-peek'](stream__1262);
            {
                B1238['get-setter'](stream__1262, 'index', B1238['+'](B1238['get'](stream__1262, 'index'), 1));
                return(element__1263);
            }
        } else
            return(false);
    }, false, ($module)['<string-stream>'], ($module)['stream-read-element']);
    ($module)['%export']('stream-read-element', ($module)['stream-read-element']);
}
{
    ($module)['stream-read'] = B1238['%make-method']('stream-read', function B1267(stream__1268, n__1269) {
        var result__1270 = '';
        {
            var i__1271 = 0;
            {
                while (true) {
                    var B1275 = B1238['not'];
                    {
                        var B1272 = ($module)['stream-at-end?'](stream__1268);
                        {
                            var B1276 = false;
                            if (($T)(B1272))
                                B1276 = B1272;
                            else
                                B1276 = B1238['>='](i__1271, n__1269);
                            {
                                var B1277 = B1275(B1276);
                                if (($T)(B1277)) {
                                    (function B1273(i__1274) {
                                        return(result__1270 = B1238['concatenate'](result__1270, ($module)['stream-read-element'](stream__1268)));
                                    }(i__1271));
                                    i__1271 = B1238['inc'](i__1271);
                                } else
                                    break;
                            }
                        }
                    }
                }
                return(result__1270);
            }
        }
    }, false, ($module)['<string-stream>'], ($module)['stream-read']);
    ($module)['%export']('stream-read', ($module)['stream-read']);
}
{
    ($module)['stream-read-through'] = B1238['%make-method']('stream-read-through', function B1280(stream__1281, element__1282) {
        var foundQ__1283 = false;
        {
            while (true) {
                var B1285 = B1238['not'];
                {
                    var B1284 = ($module)['stream-at-end?'](stream__1281);
                    {
                        var B1286 = false;
                        if (($T)(B1284))
                            B1286 = B1284;
                        else
                            B1286 = foundQ__1283;
                        {
                            var B1287 = B1285(B1286);
                            if (($T)(B1287))
                                foundQ__1283 = B1238['=='](($module)['stream-read-element'](stream__1281), element__1282);
                            else
                                break;
                        }
                    }
                }
            }
            return(false);
        }
    }, false, ($module)['<string-stream>'], ($module)['stream-read-through']);
    ($module)['%export']('stream-read-through', ($module)['stream-read-through']);
}
{
    ($module)['stream-unread-element'] = B1238['%make-method']('stream-unread-element', function B1289(stream__1290) {
        return(B1238['get-setter'](stream__1290, 'index', B1238['max'](0, B1238['dec'](B1238['get'](stream__1290, 'index')))));
    }, false, ($module)['<string-stream>'], ($module)['stream-unread-element']);
    ($module)['%export']('stream-unread-element', ($module)['stream-unread-element']);
}
{
    var B1293 = $K('start');
    {
        var B1294 = $K('end');
        {
            ($module)['stream-write'] = B1238['%make-method']('stream-write', function B1295(stream__1296, string__1297) {
                var B1298 = stream__1296;
                {
                    var index__1299 = B1298['index'];
                    {
                        var length__1300 = B1238['size'](string__1297);
                        {
                            var end__1301 = B1238['+'](index__1299, length__1300);
                            {
                                B1238['get-setter'](stream__1296, 'string', B1238['replace-subsequence'](B1238['get'](stream__1296, 'string'), string__1297, B1293, index__1299, B1294, end__1301));
                                {
                                    B1238['get-setter'](stream__1296, 'index', end__1301);
                                    {
                                        B1238['get-setter'](stream__1296, 'length', B1238['max'](end__1301, B1238['get'](stream__1296, 'length')));
                                        return(string__1297);
                                    }
                                }
                            }
                        }
                    }
                }
            }, false, ($module)['<string-stream>'], ($module)['stream-write']);
            ($module)['%export']('stream-write', ($module)['stream-write']);
        }
    }
}
{
    ($module)['stream-contents'] = B1238['%make-method']('stream-contents', function B1303(stream__1304) {
        return(B1238['get'](stream__1304, 'string'));
    }, false, ($module)['<string-stream>'], ($module)['stream-contents']);
    ($module)['%export']('stream-contents', ($module)['stream-contents']);
}
{
    ($module)['stream-remaining-contents'] = B1238['%make-method']('stream-remaining-contents', function B1306(stream__1307) {
        return(B1238['slice'](B1238['get'](stream__1307, 'string'), B1238['get'](stream__1307, 'index')));
    }, false, ($module)['<string-stream>'], ($module)['stream-remaining-contents']);
    ($module)['%export']('stream-remaining-contents', ($module)['stream-remaining-contents']);
}
