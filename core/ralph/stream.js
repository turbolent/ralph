{
    var $module = Object.create(null);
    var Mexport = function B1204(name__1205, value__1206) {
        var B1207 = (exports);
        return(B1207[name__1205] = value__1206);
    };
}
var B1208 = require('ralph/core');
false;
{
    var LstreamG = B1208['%make-class'](B1208['<object>'], {}, function LstreamG__1209() {
            return(false);
        });
    Mexport('<stream>', LstreamG);
}
{
    var stream_close = B1208['%make-generic']('stream-close');
    Mexport('stream-close', stream_close);
}
{
    var stream_openQ = B1208['%make-generic']('stream-open?');
    Mexport('stream-open?', stream_openQ);
}
{
    var stream_at_endQ = B1208['%make-generic']('stream-at-end?');
    Mexport('stream-at-end?', stream_at_endQ);
}
{
    var stream_peek = B1208['%make-generic']('stream-peek');
    Mexport('stream-peek', stream_peek);
}
{
    var stream_read = B1208['%make-generic']('stream-read');
    Mexport('stream-read', stream_read);
}
{
    var stream_read_element = B1208['%make-generic']('stream-read-element');
    Mexport('stream-read-element', stream_read_element);
}
{
    var stream_read_to_end = B1208['%make-generic']('stream-read-to-end');
    Mexport('stream-read-to-end', stream_read_to_end);
}
{
    var stream_read_through = B1208['%make-generic']('stream-read-through');
    Mexport('stream-read-through', stream_read_through);
}
{
    var stream_unread_element = B1208['%make-generic']('stream-unread-element');
    Mexport('stream-unread-element', stream_unread_element);
}
{
    var stream_write = B1208['%make-generic']('stream-write');
    Mexport('stream-write', stream_write);
}
{
    var stream_contents = B1208['%make-generic']('stream-contents');
    Mexport('stream-contents', stream_contents);
}
{
    var stream_remaining_contents = B1208['%make-generic']('stream-remaining-contents');
    Mexport('stream-remaining-contents', stream_remaining_contents);
}
{
    var Lstring_streamG = B1208['%make-class'](LstreamG, {
            'string': function B1213() {
                return('');
            },
            'index': function B1214() {
                return(0);
            },
            'length': function B1215() {
                return(0);
            }
        }, function Lstring_streamG__1216() {
            var B1217 = (this);
            {
                B1217['string'] = (undefined);
                {
                    var B1218 = (this);
                    {
                        B1218['index'] = (undefined);
                        {
                            var B1219 = (this);
                            return(B1219['length'] = (undefined));
                        }
                    }
                }
            }
        });
    Mexport('<string-stream>', Lstring_streamG);
}
var initialize = B1208['%make-method']('initialize', function B1221(stream__1222) {
        var rest__1223 = $SL.call(arguments, 1);
        {
            B1208['apply'](B1208['%next-method'](B1221), stream__1222, rest__1223);
            return(B1208['get-setter'](stream__1222, 'length', B1208['size'](B1208['get'](stream__1222, 'string'))));
        }
    }, false, Lstring_streamG, initialize);
{
    var stream_at_endQ = B1208['%make-method']('stream-at-end?', function B1225(stream__1226) {
            return(B1208['=='](B1208['get'](stream__1226, 'index'), B1208['get'](stream__1226, 'length')));
        }, false, Lstring_streamG, stream_at_endQ);
    Mexport('stream-at-end?', stream_at_endQ);
}
{
    var stream_peek = B1208['%make-method']('stream-peek', function B1228(stream__1229) {
            return(B1208['element'](B1208['get'](stream__1229, 'string'), B1208['get'](stream__1229, 'index')));
        }, false, Lstring_streamG, stream_peek);
    Mexport('stream-peek', stream_peek);
}
{
    var stream_read_element = B1208['%make-method']('stream-read-element', function B1231(stream__1232) {
            if (($T)(B1208['not'](stream_at_endQ(stream__1232)))) {
                var element__1233 = stream_peek(stream__1232);
                {
                    B1208['get-setter'](stream__1232, 'index', B1208['+'](B1208['get'](stream__1232, 'index'), 1));
                    return(element__1233);
                }
            } else
                return(false);
        }, false, Lstring_streamG, stream_read_element);
    Mexport('stream-read-element', stream_read_element);
}
{
    var stream_read = B1208['%make-method']('stream-read', function B1237(stream__1238, n__1239) {
            var result__1240 = '';
            {
                var i__1241 = 0;
                {
                    while (true) {
                        var B1245 = B1208['not'];
                        {
                            var B1242 = stream_at_endQ(stream__1238);
                            {
                                var B1246 = false;
                                if (($T)(B1242))
                                    B1246 = B1242;
                                else
                                    B1246 = B1208['>='](i__1241, n__1239);
                                {
                                    var B1247 = B1245(B1246);
                                    if (($T)(B1247)) {
                                        (function B1243(i__1244) {
                                            return(result__1240 = B1208['concatenate'](result__1240, stream_read_element(stream__1238)));
                                        }(i__1241));
                                        i__1241 = B1208['inc'](i__1241);
                                    } else
                                        break;
                                }
                            }
                        }
                    }
                    return(result__1240);
                }
            }
        }, false, Lstring_streamG, stream_read);
    Mexport('stream-read', stream_read);
}
{
    var stream_read_through = B1208['%make-method']('stream-read-through', function B1250(stream__1251, element__1252) {
            var foundQ__1253 = false;
            {
                while (true) {
                    var B1255 = B1208['not'];
                    {
                        var B1254 = stream_at_endQ(stream__1251);
                        {
                            var B1256 = false;
                            if (($T)(B1254))
                                B1256 = B1254;
                            else
                                B1256 = foundQ__1253;
                            {
                                var B1257 = B1255(B1256);
                                if (($T)(B1257))
                                    foundQ__1253 = B1208['=='](stream_read_element(stream__1251), element__1252);
                                else
                                    break;
                            }
                        }
                    }
                }
                return(false);
            }
        }, false, Lstring_streamG, stream_read_through);
    Mexport('stream-read-through', stream_read_through);
}
{
    var stream_unread_element = B1208['%make-method']('stream-unread-element', function B1259(stream__1260) {
            return(B1208['get-setter'](stream__1260, 'index', B1208['max'](0, B1208['dec'](B1208['get'](stream__1260, 'index')))));
        }, false, Lstring_streamG, stream_unread_element);
    Mexport('stream-unread-element', stream_unread_element);
}
{
    var B1263 = $K('start');
    {
        var B1264 = $K('end');
        {
            var stream_write = B1208['%make-method']('stream-write', function B1265(stream__1266, string__1267) {
                    var B1268 = stream__1266;
                    {
                        var index__1269 = B1268['index'];
                        {
                            var length__1270 = B1208['size'](string__1267);
                            {
                                var end__1271 = B1208['+'](index__1269, length__1270);
                                {
                                    B1208['get-setter'](stream__1266, 'string', B1208['replace-subsequence'](B1208['get'](stream__1266, 'string'), string__1267, B1263, index__1269, B1264, end__1271));
                                    {
                                        B1208['get-setter'](stream__1266, 'index', end__1271);
                                        {
                                            B1208['get-setter'](stream__1266, 'length', B1208['max'](end__1271, B1208['get'](stream__1266, 'length')));
                                            return(string__1267);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, false, Lstring_streamG, stream_write);
            Mexport('stream-write', stream_write);
        }
    }
}
{
    var stream_contents = B1208['%make-method']('stream-contents', function B1273(stream__1274) {
            return(B1208['get'](stream__1274, 'string'));
        }, false, Lstring_streamG, stream_contents);
    Mexport('stream-contents', stream_contents);
}
{
    var stream_remaining_contents = B1208['%make-method']('stream-remaining-contents', function B1276(stream__1277) {
            return(B1208['slice'](B1208['get'](stream__1277, 'string'), B1208['get'](stream__1277, 'index')));
        }, false, Lstring_streamG, stream_remaining_contents);
    Mexport('stream-remaining-contents', stream_remaining_contents);
}
