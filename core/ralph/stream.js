{
    var $module = Object.create(null);
    ($module)['%export'] = function B1206(name__1207, value__1208) {
        var B1209 = (exports);
        return(B1209[name__1207] = value__1208);
    };
}
var B1210 = require('ralph/core');
false;
{
    ($module)['<stream>'] = B1210['%make-class'](B1210['<object>'], {}, function LstreamG__1211() {
        return(false);
    });
    ($module)['%export']('<stream>', ($module)['<stream>']);
}
{
    ($module)['stream-close'] = B1210['%make-generic']('stream-close');
    ($module)['%export']('stream-close', ($module)['stream-close']);
}
{
    ($module)['stream-open?'] = B1210['%make-generic']('stream-open?');
    ($module)['%export']('stream-open?', ($module)['stream-open?']);
}
{
    ($module)['stream-at-end?'] = B1210['%make-generic']('stream-at-end?');
    ($module)['%export']('stream-at-end?', ($module)['stream-at-end?']);
}
{
    ($module)['stream-peek'] = B1210['%make-generic']('stream-peek');
    ($module)['%export']('stream-peek', ($module)['stream-peek']);
}
{
    ($module)['stream-read'] = B1210['%make-generic']('stream-read');
    ($module)['%export']('stream-read', ($module)['stream-read']);
}
{
    ($module)['stream-read-element'] = B1210['%make-generic']('stream-read-element');
    ($module)['%export']('stream-read-element', ($module)['stream-read-element']);
}
{
    ($module)['stream-read-to-end'] = B1210['%make-generic']('stream-read-to-end');
    ($module)['%export']('stream-read-to-end', ($module)['stream-read-to-end']);
}
{
    ($module)['stream-read-through'] = B1210['%make-generic']('stream-read-through');
    ($module)['%export']('stream-read-through', ($module)['stream-read-through']);
}
{
    ($module)['stream-unread-element'] = B1210['%make-generic']('stream-unread-element');
    ($module)['%export']('stream-unread-element', ($module)['stream-unread-element']);
}
{
    ($module)['stream-write'] = B1210['%make-generic']('stream-write');
    ($module)['%export']('stream-write', ($module)['stream-write']);
}
{
    ($module)['stream-contents'] = B1210['%make-generic']('stream-contents');
    ($module)['%export']('stream-contents', ($module)['stream-contents']);
}
{
    ($module)['stream-remaining-contents'] = B1210['%make-generic']('stream-remaining-contents');
    ($module)['%export']('stream-remaining-contents', ($module)['stream-remaining-contents']);
}
{
    ($module)['<string-stream>'] = B1210['%make-class'](($module)['<stream>'], {
        'string': function B1215() {
            return('');
        },
        'index': function B1216() {
            return(0);
        },
        'length': function B1217() {
            return(0);
        }
    }, function Lstring_streamG__1218() {
        var B1219 = (this);
        {
            B1219['string'] = (undefined);
            {
                var B1220 = (this);
                {
                    B1220['index'] = (undefined);
                    {
                        var B1221 = (this);
                        return(B1221['length'] = (undefined));
                    }
                }
            }
        }
    });
    ($module)['%export']('<string-stream>', ($module)['<string-stream>']);
}
($module)['initialize'] = B1210['%make-method']('initialize', function B1223(stream__1224) {
    var rest__1225 = $SL.call(arguments, 1);
    {
        B1210['apply'](B1210['%next-method'](B1223), stream__1224, rest__1225);
        return(B1210['get-setter'](stream__1224, 'length', B1210['size'](B1210['get'](stream__1224, 'string'))));
    }
}, false, ($module)['<string-stream>'], ($module)['initialize']);
{
    ($module)['stream-at-end?'] = B1210['%make-method']('stream-at-end?', function B1227(stream__1228) {
        return(B1210['=='](B1210['get'](stream__1228, 'index'), B1210['get'](stream__1228, 'length')));
    }, false, ($module)['<string-stream>'], ($module)['stream-at-end?']);
    ($module)['%export']('stream-at-end?', ($module)['stream-at-end?']);
}
{
    ($module)['stream-peek'] = B1210['%make-method']('stream-peek', function B1230(stream__1231) {
        return(B1210['element'](B1210['get'](stream__1231, 'string'), B1210['get'](stream__1231, 'index')));
    }, false, ($module)['<string-stream>'], ($module)['stream-peek']);
    ($module)['%export']('stream-peek', ($module)['stream-peek']);
}
{
    ($module)['stream-read-element'] = B1210['%make-method']('stream-read-element', function B1233(stream__1234) {
        if (($T)(B1210['not'](($module)['stream-at-end?'](stream__1234)))) {
            var element__1235 = ($module)['stream-peek'](stream__1234);
            {
                B1210['get-setter'](stream__1234, 'index', B1210['+'](B1210['get'](stream__1234, 'index'), 1));
                return(element__1235);
            }
        } else
            return(false);
    }, false, ($module)['<string-stream>'], ($module)['stream-read-element']);
    ($module)['%export']('stream-read-element', ($module)['stream-read-element']);
}
{
    ($module)['stream-read'] = B1210['%make-method']('stream-read', function B1239(stream__1240, n__1241) {
        var result__1242 = '';
        {
            var i__1243 = 0;
            {
                while (true) {
                    var B1247 = B1210['not'];
                    {
                        var B1244 = ($module)['stream-at-end?'](stream__1240);
                        {
                            var B1248 = false;
                            if (($T)(B1244))
                                B1248 = B1244;
                            else
                                B1248 = B1210['>='](i__1243, n__1241);
                            {
                                var B1249 = B1247(B1248);
                                if (($T)(B1249)) {
                                    (function B1245(i__1246) {
                                        return(result__1242 = B1210['concatenate'](result__1242, ($module)['stream-read-element'](stream__1240)));
                                    }(i__1243));
                                    i__1243 = B1210['inc'](i__1243);
                                } else
                                    break;
                            }
                        }
                    }
                }
                return(result__1242);
            }
        }
    }, false, ($module)['<string-stream>'], ($module)['stream-read']);
    ($module)['%export']('stream-read', ($module)['stream-read']);
}
{
    ($module)['stream-read-through'] = B1210['%make-method']('stream-read-through', function B1252(stream__1253, element__1254) {
        var foundQ__1255 = false;
        {
            while (true) {
                var B1257 = B1210['not'];
                {
                    var B1256 = ($module)['stream-at-end?'](stream__1253);
                    {
                        var B1258 = false;
                        if (($T)(B1256))
                            B1258 = B1256;
                        else
                            B1258 = foundQ__1255;
                        {
                            var B1259 = B1257(B1258);
                            if (($T)(B1259))
                                foundQ__1255 = B1210['=='](($module)['stream-read-element'](stream__1253), element__1254);
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
    ($module)['stream-unread-element'] = B1210['%make-method']('stream-unread-element', function B1261(stream__1262) {
        return(B1210['get-setter'](stream__1262, 'index', B1210['max'](0, B1210['dec'](B1210['get'](stream__1262, 'index')))));
    }, false, ($module)['<string-stream>'], ($module)['stream-unread-element']);
    ($module)['%export']('stream-unread-element', ($module)['stream-unread-element']);
}
{
    var B1265 = $K('start');
    {
        var B1266 = $K('end');
        {
            ($module)['stream-write'] = B1210['%make-method']('stream-write', function B1267(stream__1268, string__1269) {
                var B1270 = stream__1268;
                {
                    var index__1271 = B1270['index'];
                    {
                        var length__1272 = B1210['size'](string__1269);
                        {
                            var end__1273 = B1210['+'](index__1271, length__1272);
                            {
                                B1210['get-setter'](stream__1268, 'string', B1210['replace-subsequence'](B1210['get'](stream__1268, 'string'), string__1269, B1265, index__1271, B1266, end__1273));
                                {
                                    B1210['get-setter'](stream__1268, 'index', end__1273);
                                    {
                                        B1210['get-setter'](stream__1268, 'length', B1210['max'](end__1273, B1210['get'](stream__1268, 'length')));
                                        return(string__1269);
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
    ($module)['stream-contents'] = B1210['%make-method']('stream-contents', function B1275(stream__1276) {
        return(B1210['get'](stream__1276, 'string'));
    }, false, ($module)['<string-stream>'], ($module)['stream-contents']);
    ($module)['%export']('stream-contents', ($module)['stream-contents']);
}
{
    ($module)['stream-remaining-contents'] = B1210['%make-method']('stream-remaining-contents', function B1278(stream__1279) {
        return(B1210['slice'](B1210['get'](stream__1279, 'string'), B1210['get'](stream__1279, 'index')));
    }, false, ($module)['<string-stream>'], ($module)['stream-remaining-contents']);
    ($module)['%export']('stream-remaining-contents', ($module)['stream-remaining-contents']);
}
{
    ($module)['%eval'] = function B1281() {
        return(eval((arguments[0])));
    };
    {
        B1210['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
