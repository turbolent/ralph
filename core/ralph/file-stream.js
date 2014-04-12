{
    var $module = Object.create(null);
    var Mexport = function B1280(name__1281, value__1282) {
        var B1283 = (exports);
        return(B1283[name__1281] = value__1282);
    };
}
var B1284 = require('ralph/core');
{
    var B1285 = require('ralph/stream');
    {
        var B1378 = require('ralph/file-system');
        var B1379 = require('fs');
    }
}
{
    var Lfile_streamG = B1284['%make-class'](B1285['<stream>'], { 'file': false }, function Lfile_streamG__1380() {
            var B1381 = (this);
            return(B1381['file'] = (undefined));
        });
    Mexport('<file-stream>', Lfile_streamG);
}
var initialize = B1284['%make-method']('initialize', function B1384(stream__1385) {
        var rest__1386 = $SL.call(arguments, 1);
        {
            var B1387 = B1284['%keys'](rest__1386, {
                    'path': false,
                    'file': false
                });
            {
                var path__1388 = B1387['path'];
                {
                    var file__1389 = B1387['file'];
                    {
                        B1284['apply'](B1284['%next-method'](B1384), stream__1385, rest__1386);
                        {
                            var B1390 = false;
                            if (($T)(B1284['not'](file__1389)))
                                B1390 = path__1388;
                            else
                                B1390 = false;
                            if (($T)(B1390))
                                return(B1284['get-setter'](stream__1385, 'file', B1379['createWriteStream'](path__1388)));
                            else
                                return(false);
                        }
                    }
                }
            }
        }
    }, false, Lfile_streamG, initialize);
var stream_write = B1284['%make-method']('stream-write', function B1394(stream__1395, string__1396) {
        var B1397 = B1284['get'](stream__1395, 'file');
        {
            var B1398 = string__1396;
            return(B1397['write'](B1398));
        }
    }, false, Lfile_streamG, stream_write);
var stream_close = B1284['%make-method']('stream-close', function B1401(stream__1402) {
        var B1403 = B1284['get'](stream__1402, 'file');
        return(B1403['end']());
    }, false, Lfile_streamG, stream_close);
{
    var B1404 = $K('file');
    {
        var Tstandard_outputT = B1284['make'](Lfile_streamG, B1404, (process)['stdout']);
        Mexport('*standard-output*', Tstandard_outputT);
    }
}
{
    var Tstandard_errorT = B1284['make'](Lfile_streamG, B1404, (process)['stderr']);
    Mexport('*standard-error*', Tstandard_errorT);
}
