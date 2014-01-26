{
    var B1275 = require('ralph/core');
}
{
    var B1378 = require('ralph/stream');
}
{
    {
        var ralphScoreCCMvar = B1275['%var'];
        var ralphScoreCCas_string = B1275['as-string'];
        var ralphScoreCCMannotate_function = B1275['%annotate-function'];
        var format_integer__1382 = function B1380(number__1381) {
            return(ralphScoreCCas_string(number__1381));
        };
    }
    ralphScoreCCMannotate_function(format_integer__1382, 'format_integer', false);
}
{
    {
        var ralphScoreCCas_lowercase = B1275['as-lowercase'];
        var ralphScoreCCEE = B1275['=='];
        var ralphScoreCCdescription = B1275['description'];
        var ralphScoreCCsignal = B1275['signal'];
        var ralphScoreCCmake = B1275['make'];
        var ralphScoreCCLerrorG = B1275['<error>'];
        var ralphScoreCCconcatenate = B1275['concatenate'];
        var ralphScoreCCnot = B1275['not'];
        var ralphScoreCCemptyQ = B1275['empty?'];
        var ralphScoreCCposition = B1275['position'];
        var ralphScoreCCG = B1275['>'];
        var ralphSstreamCCstream_write = B1378['stream-write'];
        var ralphScoreCCslice = B1275['slice'];
        var ralphScoreCCelement = B1275['element'];
        var ralphScoreCCsecond = B1275['second'];
        var ralphScoreCCP = B1275['+'];
        var B1389 = $K('message');
        var format__1406 = function B1390(stream__1391, control_string__1392) {
            {
                var args__1393 = $SL.call(arguments, 2);
                var dispatch__1394 = false;
            }
            dispatch__1394 = function B1395(char__1396, arg__1397) {
                {
                    var B1398 = ralphScoreCCas_lowercase(char__1396);
                    var B1399 = ralphScoreCCEE(B1398, 's');
                    var B1407 = false;
                }
                if (($T)(B1399))
                    B1407 = B1399;
                else
                    B1407 = ralphScoreCCEE(B1398, 'c');
                if (($T)(B1407))
                    return(arg__1397);
                else if (($T)(ralphScoreCCEE(B1398, '='))) {
                    {
                        var B1400 = ralphScoreCCdescription(arg__1397);
                    }
                    if (($T)(B1400))
                        return(B1400);
                    else
                        return('');
                } else if (($T)(ralphScoreCCEE(B1398, 'b')))
                    return(format_integer__1382(arg__1397, 2));
                else if (($T)(ralphScoreCCEE(B1398, 'o')))
                    return(format_integer__1382(arg__1397, 8));
                else if (($T)(ralphScoreCCEE(B1398, 'd')))
                    return(format_integer__1382(arg__1397, 10));
                else if (($T)(ralphScoreCCEE(B1398, 'x')))
                    return(format_integer__1382(arg__1397, 16));
                else if (($T)(ralphScoreCCEE(B1398, 'm'))) {
                    arg__1397(stream__1391);
                    return('');
                } else
                    return(ralphScoreCCsignal(ralphScoreCCmake(ralphScoreCCLerrorG, B1389, ralphScoreCCconcatenate('Unknown format dispatch character ', char__1396))));
            };
            {
                var index__1401 = 0;
            }
            while (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(control_string__1392)))) {
                {
                    var next_dispatch__1402 = ralphScoreCCposition(control_string__1392, '%');
                }
                if (($T)(ralphScoreCCG(next_dispatch__1402, 0))) {
                    ralphSstreamCCstream_write(stream__1391, ralphScoreCCslice(control_string__1392, 0, next_dispatch__1402));
                    control_string__1392 = ralphScoreCCslice(control_string__1392, next_dispatch__1402);
                } else if (($T)(next_dispatch__1402)) {
                    {
                        var arg__1403 = ralphScoreCCelement(args__1393, index__1401);
                        var char__1404 = ralphScoreCCsecond(control_string__1392);
                        var percent__1405 = ralphScoreCCEE(char__1404, '%');
                        var B1408 = false;
                    }
                    if (($T)(percent__1405))
                        B1408 = '%';
                    else
                        B1408 = dispatch__1394(char__1404, arg__1403);
                    ralphSstreamCCstream_write(stream__1391, B1408);
                    control_string__1392 = ralphScoreCCslice(control_string__1392, 2);
                    if (($T)(ralphScoreCCnot(percent__1405)))
                        index__1401 = ralphScoreCCP(index__1401, 1);
                } else {
                    ralphSstreamCCstream_write(stream__1391, control_string__1392);
                    control_string__1392 = '';
                }
            }
            return(false);
        };
    }
    (exports)['format'] = format__1406;
    ralphScoreCCMannotate_function(format__1406, 'format', false);
}
{
    {
        var ralphScoreCCapply = B1275['apply'];
        var ralphSstreamCCTstandard_outputT = B1378['*standard-output*'];
        var format_out__1413 = function B1410(control_string__1411) {
            {
                var args__1412 = $SL.call(arguments, 1);
            }
            return(ralphScoreCCapply(format__1406, ralphSstreamCCTstandard_outputT, control_string__1411, args__1412));
        };
    }
    (exports)['format-out'] = format_out__1413;
    ralphScoreCCMannotate_function(format_out__1413, 'format_out', false);
}
{
    {
        var ralphSstreamCCLstring_streamG = B1378['<string-stream>'];
        var ralphSstreamCCstream_contents = B1378['stream-contents'];
        var format_to_string__1419 = function B1415(control_string__1416) {
            {
                var args__1417 = $SL.call(arguments, 1);
                var stream__1418 = ralphScoreCCmake(ralphSstreamCCLstring_streamG);
            }
            ralphScoreCCapply(format__1406, stream__1418, control_string__1416, args__1417);
            return(ralphSstreamCCstream_contents(stream__1418));
        };
    }
    (exports)['format-to-string'] = format_to_string__1419;
    ralphScoreCCMannotate_function(format_to_string__1419, 'format_to_string', false);
}
