require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1211(name__1212, value__1213) {
            var B1215 = (exports);
            return(B1215[name__1212] = value__1213);
        };
        {
            ($module)['%eval'] = function B1214() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1216 = require('ralph/core');
false;
{
    ($module)['<stream>'] = B1216['%make-class'](B1216['<object>'], {}, function LstreamG__1217() {
        return(false);
    });
    ($module)['%export']('<stream>', ($module)['<stream>']);
}
{
    ($module)['stream-close'] = B1216['%make-generic']('stream-close');
    ($module)['%export']('stream-close', ($module)['stream-close']);
}
{
    ($module)['stream-open?'] = B1216['%make-generic']('stream-open?');
    ($module)['%export']('stream-open?', ($module)['stream-open?']);
}
{
    ($module)['stream-at-end?'] = B1216['%make-generic']('stream-at-end?');
    ($module)['%export']('stream-at-end?', ($module)['stream-at-end?']);
}
{
    ($module)['stream-peek'] = B1216['%make-generic']('stream-peek');
    ($module)['%export']('stream-peek', ($module)['stream-peek']);
}
{
    ($module)['stream-read'] = B1216['%make-generic']('stream-read');
    ($module)['%export']('stream-read', ($module)['stream-read']);
}
{
    ($module)['stream-read-element'] = B1216['%make-generic']('stream-read-element');
    ($module)['%export']('stream-read-element', ($module)['stream-read-element']);
}
{
    ($module)['stream-read-to-end'] = B1216['%make-generic']('stream-read-to-end');
    ($module)['%export']('stream-read-to-end', ($module)['stream-read-to-end']);
}
{
    ($module)['stream-read-through'] = B1216['%make-generic']('stream-read-through');
    ($module)['%export']('stream-read-through', ($module)['stream-read-through']);
}
{
    ($module)['stream-unread-element'] = B1216['%make-generic']('stream-unread-element');
    ($module)['%export']('stream-unread-element', ($module)['stream-unread-element']);
}
{
    ($module)['stream-write'] = B1216['%make-generic']('stream-write');
    ($module)['%export']('stream-write', ($module)['stream-write']);
}
{
    ($module)['stream-contents'] = B1216['%make-generic']('stream-contents');
    ($module)['%export']('stream-contents', ($module)['stream-contents']);
}
{
    ($module)['stream-remaining-contents'] = B1216['%make-generic']('stream-remaining-contents');
    ($module)['%export']('stream-remaining-contents', ($module)['stream-remaining-contents']);
}
{
    ($module)['<string-stream>'] = B1216['%make-class'](($module)['<stream>'], {
        'string': function B1221() {
            return('');
        },
        'index': function B1222() {
            return(0);
        },
        'length': function B1223() {
            return(0);
        }
    }, function Lstring_streamG__1224() {
        var B1225 = (this);
        {
            B1225['string'] = (undefined);
            {
                var B1226 = (this);
                {
                    B1226['index'] = (undefined);
                    {
                        var B1227 = (this);
                        return(B1227['length'] = (undefined));
                    }
                }
            }
        }
    });
    ($module)['%export']('<string-stream>', ($module)['<string-stream>']);
}
($module)['initialize'] = B1216['%make-method']('initialize', function B1229(stream__1230) {
    var rest__1231 = $SL.call(arguments, 1);
    {
        B1216['apply'](B1216['%next-method'](B1229), stream__1230, rest__1231);
        return(B1216['get-setter'](stream__1230, 'length', B1216['size'](B1216['get'](stream__1230, 'string'))));
    }
}, false, ($module)['<string-stream>'], ($module)['initialize']);
{
    ($module)['stream-at-end?'] = B1216['%make-method']('stream-at-end?', function B1233(stream__1234) {
        return(B1216['=='](B1216['get'](stream__1234, 'index'), B1216['get'](stream__1234, 'length')));
    }, false, ($module)['<string-stream>'], ($module)['stream-at-end?']);
    ($module)['%export']('stream-at-end?', ($module)['stream-at-end?']);
}
{
    ($module)['stream-peek'] = B1216['%make-method']('stream-peek', function B1236(stream__1237) {
        return(B1216['element'](B1216['get'](stream__1237, 'string'), B1216['get'](stream__1237, 'index')));
    }, false, ($module)['<string-stream>'], ($module)['stream-peek']);
    ($module)['%export']('stream-peek', ($module)['stream-peek']);
}
{
    ($module)['stream-read-element'] = B1216['%make-method']('stream-read-element', function B1239(stream__1240) {
        if (($T)(B1216['not'](($module)['stream-at-end?'](stream__1240)))) {
            var element__1241 = ($module)['stream-peek'](stream__1240);
            {
                B1216['get-setter'](stream__1240, 'index', B1216['+'](B1216['get'](stream__1240, 'index'), 1));
                return(element__1241);
            }
        } else
            return(false);
    }, false, ($module)['<string-stream>'], ($module)['stream-read-element']);
    ($module)['%export']('stream-read-element', ($module)['stream-read-element']);
}
{
    ($module)['stream-read'] = B1216['%make-method']('stream-read', function B1245(stream__1246, n__1247) {
        var result__1248 = '';
        {
            var i__1249 = 0;
            {
                while (true) {
                    var B1253 = B1216['not'];
                    {
                        var B1250 = ($module)['stream-at-end?'](stream__1246);
                        {
                            var B1254 = false;
                            if (($T)(B1250))
                                B1254 = B1250;
                            else
                                B1254 = B1216['>='](i__1249, n__1247);
                            {
                                var B1255 = B1253(B1254);
                                if (($T)(B1255)) {
                                    (function B1251(i__1252) {
                                        return(result__1248 = B1216['concatenate'](result__1248, ($module)['stream-read-element'](stream__1246)));
                                    }(i__1249));
                                    i__1249 = B1216['inc'](i__1249);
                                } else
                                    break;
                            }
                        }
                    }
                }
                return(result__1248);
            }
        }
    }, false, ($module)['<string-stream>'], ($module)['stream-read']);
    ($module)['%export']('stream-read', ($module)['stream-read']);
}
{
    ($module)['stream-read-through'] = B1216['%make-method']('stream-read-through', function B1258(stream__1259, element__1260) {
        var foundQ__1261 = false;
        {
            while (true) {
                var B1263 = B1216['not'];
                {
                    var B1262 = ($module)['stream-at-end?'](stream__1259);
                    {
                        var B1264 = false;
                        if (($T)(B1262))
                            B1264 = B1262;
                        else
                            B1264 = foundQ__1261;
                        {
                            var B1265 = B1263(B1264);
                            if (($T)(B1265))
                                foundQ__1261 = B1216['=='](($module)['stream-read-element'](stream__1259), element__1260);
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
    ($module)['stream-unread-element'] = B1216['%make-method']('stream-unread-element', function B1267(stream__1268) {
        return(B1216['get-setter'](stream__1268, 'index', B1216['max'](0, B1216['dec'](B1216['get'](stream__1268, 'index')))));
    }, false, ($module)['<string-stream>'], ($module)['stream-unread-element']);
    ($module)['%export']('stream-unread-element', ($module)['stream-unread-element']);
}
{
    var B1271 = $K('start');
    {
        var B1272 = $K('end');
        {
            ($module)['stream-write'] = B1216['%make-method']('stream-write', function B1273(stream__1274, string__1275) {
                var B1276 = stream__1274;
                {
                    var index__1277 = B1276['index'];
                    {
                        var length__1278 = B1216['size'](string__1275);
                        {
                            var end__1279 = B1216['+'](index__1277, length__1278);
                            {
                                B1216['get-setter'](stream__1274, 'string', B1216['replace-subsequence'](B1216['get'](stream__1274, 'string'), string__1275, B1271, index__1277, B1272, end__1279));
                                {
                                    B1216['get-setter'](stream__1274, 'index', end__1279);
                                    {
                                        B1216['get-setter'](stream__1274, 'length', B1216['max'](end__1279, B1216['get'](stream__1274, 'length')));
                                        return(string__1275);
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
    ($module)['stream-contents'] = B1216['%make-method']('stream-contents', function B1281(stream__1282) {
        return(B1216['get'](stream__1282, 'string'));
    }, false, ($module)['<string-stream>'], ($module)['stream-contents']);
    ($module)['%export']('stream-contents', ($module)['stream-contents']);
}
{
    ($module)['stream-remaining-contents'] = B1216['%make-method']('stream-remaining-contents', function B1284(stream__1285) {
        return(B1216['slice'](B1216['get'](stream__1285, 'string'), B1216['get'](stream__1285, 'index')));
    }, false, ($module)['<string-stream>'], ($module)['stream-remaining-contents']);
    ($module)['%export']('stream-remaining-contents', ($module)['stream-remaining-contents']);
}
