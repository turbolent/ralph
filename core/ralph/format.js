{
    var B1271 = require('ralph/core');
}
{
    var B1374 = require('ralph/stream');
}
{
    {
        var ralphScoreCCMvar = B1271['%var'];
        var ralphScoreCCas_string = B1271['as-string'];
        var ralphScoreCCMannotate_function = B1271['%annotate-function'];
        var format_integer__1378 = function B1376(number__1377) {
            return(ralphScoreCCas_string(number__1377));
        };
    }
    ralphScoreCCMannotate_function(format_integer__1378, 'format_integer', false);
}
{
    {
        var ralphScoreCCas_lowercase = B1271['as-lowercase'];
        var ralphScoreCCEE = B1271['=='];
        var ralphScoreCCdescription = B1271['description'];
        var ralphScoreCCsignal = B1271['signal'];
        var ralphScoreCCmake = B1271['make'];
        var ralphScoreCCLerrorG = B1271['<error>'];
        var ralphScoreCCconcatenate = B1271['concatenate'];
        var ralphScoreCCnot = B1271['not'];
        var ralphScoreCCemptyQ = B1271['empty?'];
        var ralphScoreCCposition = B1271['position'];
        var ralphScoreCCG = B1271['>'];
        var ralphSstreamCCstream_write = B1374['stream-write'];
        var ralphScoreCCslice = B1271['slice'];
        var ralphScoreCCelement = B1271['element'];
        var ralphScoreCCsecond = B1271['second'];
        var ralphScoreCCP = B1271['+'];
        var B1385 = $K('message');
        var format__1402 = function B1386(stream__1387, control_string__1388) {
            {
                var args__1389 = $SL.call(arguments, 2);
                var dispatch__1390 = false;
            }
            dispatch__1390 = function B1391(char__1392, arg__1393) {
                {
                    var B1394 = ralphScoreCCas_lowercase(char__1392);
                    var B1395 = ralphScoreCCEE(B1394, 's');
                    var B1403 = false;
                }
                if (($T)(B1395))
                    B1403 = B1395;
                else
                    B1403 = ralphScoreCCEE(B1394, 'c');
                if (($T)(B1403))
                    return(arg__1393);
                else if (($T)(ralphScoreCCEE(B1394, '='))) {
                    {
                        var B1396 = ralphScoreCCdescription(arg__1393);
                    }
                    if (($T)(B1396))
                        return(B1396);
                    else
                        return('');
                } else if (($T)(ralphScoreCCEE(B1394, 'b')))
                    return(format_integer__1378(arg__1393, 2));
                else if (($T)(ralphScoreCCEE(B1394, 'o')))
                    return(format_integer__1378(arg__1393, 8));
                else if (($T)(ralphScoreCCEE(B1394, 'd')))
                    return(format_integer__1378(arg__1393, 10));
                else if (($T)(ralphScoreCCEE(B1394, 'x')))
                    return(format_integer__1378(arg__1393, 16));
                else if (($T)(ralphScoreCCEE(B1394, 'm'))) {
                    arg__1393(stream__1387);
                    return('');
                } else
                    return(ralphScoreCCsignal(ralphScoreCCmake(ralphScoreCCLerrorG, B1385, ralphScoreCCconcatenate('Unknown format dispatch character ', char__1392))));
            };
            {
                var index__1397 = 0;
            }
            while (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(control_string__1388)))) {
                {
                    var next_dispatch__1398 = ralphScoreCCposition(control_string__1388, '%');
                }
                if (($T)(ralphScoreCCG(next_dispatch__1398, 0))) {
                    ralphSstreamCCstream_write(stream__1387, ralphScoreCCslice(control_string__1388, 0, next_dispatch__1398));
                    control_string__1388 = ralphScoreCCslice(control_string__1388, next_dispatch__1398);
                } else if (($T)(next_dispatch__1398)) {
                    {
                        var arg__1399 = ralphScoreCCelement(args__1389, index__1397);
                        var char__1400 = ralphScoreCCsecond(control_string__1388);
                        var percent__1401 = ralphScoreCCEE(char__1400, '%');
                        var B1404 = false;
                    }
                    if (($T)(percent__1401))
                        B1404 = '%';
                    else
                        B1404 = dispatch__1390(char__1400, arg__1399);
                    ralphSstreamCCstream_write(stream__1387, B1404);
                    control_string__1388 = ralphScoreCCslice(control_string__1388, 2);
                    if (($T)(ralphScoreCCnot(percent__1401)))
                        index__1397 = ralphScoreCCP(index__1397, 1);
                } else {
                    ralphSstreamCCstream_write(stream__1387, control_string__1388);
                    control_string__1388 = '';
                }
            }
            return(false);
        };
    }
    (exports)['format'] = format__1402;
    ralphScoreCCMannotate_function(format__1402, 'format', false);
}
{
    {
        var ralphScoreCCapply = B1271['apply'];
        var ralphSstreamCCTstandard_outputT = B1374['*standard-output*'];
        var format_out__1409 = function B1406(control_string__1407) {
            {
                var args__1408 = $SL.call(arguments, 1);
            }
            return(ralphScoreCCapply(format__1402, ralphSstreamCCTstandard_outputT, control_string__1407, args__1408));
        };
    }
    (exports)['format-out'] = format_out__1409;
    ralphScoreCCMannotate_function(format_out__1409, 'format_out', false);
}
{
    {
        var ralphSstreamCCLstring_streamG = B1374['<string-stream>'];
        var ralphSstreamCCstream_contents = B1374['stream-contents'];
        var format_to_string__1415 = function B1411(control_string__1412) {
            {
                var args__1413 = $SL.call(arguments, 1);
                var stream__1414 = ralphScoreCCmake(ralphSstreamCCLstring_streamG);
            }
            ralphScoreCCapply(format__1402, stream__1414, control_string__1412, args__1413);
            return(ralphSstreamCCstream_contents(stream__1414));
        };
    }
    (exports)['format-to-string'] = format_to_string__1415;
    ralphScoreCCMannotate_function(format_to_string__1415, 'format_to_string', false);
}
