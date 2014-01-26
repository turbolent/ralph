{
    var B8 = require('ralph/core');
}
{
    var B57 = require('ralph/stream');
    var B58 = require('ralph/format');
    var B59 = require('ralph/regexp');
    var B60 = require('ralph/compiler/syntax-quote');
}
{
    var ralphScoreCCMvar = B8['%var'];
    var ralphScoreCCmap = B8['map'];
    var ralphScoreCCcurry = B8['curry'];
    var ralphScoreCCmake = B8['make'];
    var ralphSregexpCCLregexpG = B59['<regexp>'];
    var B63 = $K('ignore-case?');
    var B64 = $K('pattern');
    var Tnumber_patternsT__65 = ralphScoreCCmap(ralphScoreCCcurry(ralphScoreCCmake, ralphSregexpCCLregexpG, B63, true, B64), [
            '^[+-]?0x[0-9a-f]+',
            '^[+-]?0[0-7]+',
            '^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?'
        ]);
}
{
    var Tline_patternT__66 = ralphScoreCCmake(ralphSregexpCCLregexpG, B64, '(.*)[\n\r]?');
}
{
    var Twhitespace_subpatternT__67 = '\t\n\r\x0B\f\xA0\uFEFF ';
}
{
    var ralphScoreCCconcatenate = B8['concatenate'];
    var Twhitespace_patternT__68 = ralphScoreCCmake(ralphSregexpCCLregexpG, B64, ralphScoreCCconcatenate('[', Twhitespace_subpatternT__67, ']*'));
}
{
    var Tatom_patternT__69 = ralphScoreCCmake(ralphSregexpCCLregexpG, B64, ralphScoreCCconcatenate('[^\\[\\]();`,', Twhitespace_subpatternT__67, ']+'));
}
{
    {
        var ralphSregexpCCmatch = B59['match'];
        var ralphSstreamCCstream_remaining_contents = B57['stream-remaining-contents'];
        var ralphSstreamCCstream_read = B57['stream-read'];
        var ralphScoreCCsize = B8['size'];
        var ralphScoreCCfirst = B8['first'];
        var ralphScoreCCMannotate_function = B8['%annotate-function'];
        var match_stream__77 = function B72(regexp__73, stream__74) {
            {
                var B75 = ralphSregexpCCmatch(regexp__73, ralphSstreamCCstream_remaining_contents(stream__74));
            }
            if (($T)(B75)) {
                {
                    var result__76 = B75;
                }
                ralphSstreamCCstream_read(stream__74, ralphScoreCCsize(ralphScoreCCfirst(result__76)));
                return(result__76);
            } else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(match_stream__77, 'match_stream', false);
}
{
    {
        var read_line__81 = function B79(stream__80) {
            return(match_stream__77(Tline_patternT__66, stream__80));
        };
    }
    ralphScoreCCMannotate_function(read_line__81, 'read_line', false);
}
{
    {
        var read_whitespace__85 = function B83(stream__84) {
            return(match_stream__77(Twhitespace_patternT__68, stream__84));
        };
    }
    ralphScoreCCMannotate_function(read_whitespace__85, 'read_whitespace', false);
}
{
    {
        var ralphScoreCCEE = B8['=='];
        var ralphScoreCCanyQ = B8['any?'];
        var ralphScoreCCrcurry = B8['rcurry'];
        var ralphScoreCCas_number = B8['as-number'];
        var ralphScoreCClast = B8['last'];
        var ralphScoreCCkeyword = B8['keyword'];
        var ralphScoreCCbut_last = B8['but-last'];
        var ralphScoreCCsplit = B8['split'];
        var ralphScoreCCemptyQ = B8['empty?'];
        var ralphScoreCCsymbol = B8['symbol'];
        var ralphScoreCCreduce1 = B8['reduce1'];
        var B92 = $KEY;
        var B93 = $REST;
        var make_atom__102 = function B94(value__95) {
            {
                var B96 = value__95;
            }
            if (($T)(ralphScoreCCEE(B96, '#t')))
                return(true);
            else if (($T)(ralphScoreCCEE(B96, '#f')))
                return(false);
            else if (($T)(ralphScoreCCEE(B96, '#key')))
                return(B92);
            else if (($T)(ralphScoreCCEE(B96, '#rest')))
                return(B93);
            else {
                {
                    var B97 = ralphScoreCCanyQ(ralphScoreCCrcurry(ralphSregexpCCmatch, value__95), Tnumber_patternsT__65);
                }
                if (($T)(B97)) {
                    {
                        var number__98 = B97;
                    }
                    return(ralphScoreCCas_number(ralphScoreCCfirst(number__98)));
                } else if (($T)(ralphScoreCCEE(ralphScoreCClast(value__95), ':')))
                    return(ralphScoreCCkeyword(ralphScoreCCbut_last(value__95)));
                else {
                    {
                        var B99 = ralphScoreCCsplit(value__95, '::');
                        var head__100 = B99[0];
                        var tail__101 = $SL.call(B99, 1);
                    }
                    if (($T)(ralphScoreCCemptyQ(tail__101)))
                        return(ralphScoreCCsymbol(head__100));
                    else
                        return(ralphScoreCCsymbol(ralphScoreCCreduce1(ralphScoreCCconcatenate, tail__101), head__100));
                }
            }
        };
    }
    ralphScoreCCMannotate_function(make_atom__102, 'make_atom', false);
}
{
    {
        var ralphSstreamCCLstring_streamG = B57['<string-stream>'];
        var ralphSstreamCCstream_read_element = B57['stream-read-element'];
        var ralphScoreCCnot = B8['not'];
        var ralphSstreamCCstream_at_endQ = B57['stream-at-end?'];
        var ralphScoreCCsignal = B8['signal'];
        var ralphSstreamCCstream_write = B57['stream-write'];
        var ralphScoreCCcode_char = B8['code-char'];
        var ralphScoreCCparse_integer = B8['parse-integer'];
        var ralphSstreamCCstream_contents = B57['stream-contents'];
        var B106 = $K('radix');
        var read_string__112 = function B107(stream__108) {
            {
                var result__109 = ralphScoreCCmake(ralphSstreamCCLstring_streamG);
                var char__110 = ralphSstreamCCstream_read_element(stream__108);
            }
            while (($T)(ralphScoreCCnot(ralphScoreCCEE(char__110, '"')))) {
                if (($T)(ralphSstreamCCstream_at_endQ(stream__108)))
                    ralphScoreCCsignal('missing end of string');
                {
                    var B113 = false;
                }
                if (($T)(ralphScoreCCEE(char__110, '\\'))) {
                    {
                        var B111 = ralphSstreamCCstream_read_element(stream__108);
                    }
                    if (($T)(ralphScoreCCEE(B111, '"')))
                        B113 = '"';
                    else if (($T)(ralphScoreCCEE(B111, '\\')))
                        B113 = '\\';
                    else if (($T)(ralphScoreCCEE(B111, 'b')))
                        B113 = '\b';
                    else if (($T)(ralphScoreCCEE(B111, 'f')))
                        B113 = '\f';
                    else if (($T)(ralphScoreCCEE(B111, 'n')))
                        B113 = '\n';
                    else if (($T)(ralphScoreCCEE(B111, 'r')))
                        B113 = '\r';
                    else if (($T)(ralphScoreCCEE(B111, 't')))
                        B113 = '\t';
                    else if (($T)(ralphScoreCCEE(B111, 'v')))
                        B113 = '\x0B';
                    else if (($T)(ralphScoreCCEE(B111, 'u')))
                        B113 = ralphScoreCCcode_char(ralphScoreCCparse_integer(ralphSstreamCCstream_read(stream__108, 4), B106, 16));
                    else
                        B113 = ralphScoreCCsignal('bad escape sequence');
                } else
                    B113 = char__110;
                ralphSstreamCCstream_write(result__109, B113);
                char__110 = ralphSstreamCCstream_read_element(stream__108);
            }
            return(ralphSstreamCCstream_contents(result__109));
        };
    }
    ralphScoreCCMannotate_function(read_string__112, 'read_string', false);
}
{
    var B117 = $S('quote', 'ralph/core');
    var B118 = $S('unquote', 'ralph/core');
    var B119 = $S('unquote-splicing', 'ralph/core');
    var Twrapper_symbolsT__120 = [
            B117,
            B118,
            B119
        ];
}
{
    {
        var ralphScoreCCmake_object = B8['make-object'];
        var Bend_of_file__121 = ralphScoreCCmake_object();
    }
    (exports)['$end-of-file'] = Bend_of_file__121;
}
{
    {
        var ralphScoreCCMkeys = B8['%keys'];
        var ralphScoreCCpush_last = B8['push-last'];
        var ralphScoreCCpop_last = B8['pop-last'];
        var ralphScompilerSsyntax_quoteCCsyntax_quote_form = B60['syntax-quote-form'];
        var ralphScoreCCmemberQ = B8['member?'];
        var ralphSformatCCformat_to_string = B58['format-to-string'];
        var ralphSstreamCCstream_peek = B57['stream-peek'];
        var ralphSstreamCCstream_unread_element = B57['stream-unread-element'];
        var B131 = $S('syntax-quote', 'ralph/core');
        var B132 = $S('%array', 'ralph/core');
        var read__154 = function B133(stream__134, env__135) {
            {
                var B136 = $SL.call(arguments, 2);
                var B137 = ralphScoreCCMkeys(B136, {
                        'eof-error?': true,
                        'eof-value': Bend_of_file__121
                    });
                var eof_errorQ__138 = B137['eof-error?'];
                var eof_value__139 = B137['eof-value'];
                var stack__140 = [[]];
                var ends__141 = [];
                var readQ__142 = true;
                var result__143 = false;
                var add_to_stackN__144 = false;
                var add_lastN__145 = false;
            }
            add_to_stackN__144 = function B146(value__147) {
                ralphScoreCCpush_last(stack__140, value__147);
                return(add_lastN__145());
            };
            add_lastN__145 = function B148() {
                {
                    var value__149 = ralphScoreCCpop_last(stack__140);
                    var l__150 = ralphScoreCClast(stack__140);
                }
                if (($T)(ralphScoreCCEE(l__150, B131))) {
                    ralphScoreCCpop_last(stack__140);
                    return(add_to_stackN__144(ralphScompilerSsyntax_quoteCCsyntax_quote_form(value__149, env__135)));
                } else if (($T)(ralphScoreCCmemberQ(l__150, Twrapper_symbolsT__120)))
                    return(add_to_stackN__144([
                        ralphScoreCCpop_last(stack__140),
                        value__149
                    ]));
                else
                    return(ralphScoreCCpush_last(l__150, value__149));
            };
            while (($T)(readQ__142)) {
                read_whitespace__85(stream__134);
                if (($T)(ralphSstreamCCstream_at_endQ(stream__134))) {
                    readQ__142 = false;
                    if (($T)(ralphScoreCCemptyQ(ends__141)))
                        if (($T)(eof_errorQ__138))
                            ralphScoreCCsignal('EOF before finished');
                        else
                            result__143 = eof_value__139;
                    else
                        ralphScoreCCsignal(ralphSformatCCformat_to_string('missing closings: %=', ends__141));
                } else {
                    {
                        var char__151 = ralphSstreamCCstream_read_element(stream__134);
                        var B152 = char__151;
                    }
                    if (($T)(ralphScoreCCEE(B152, ';')))
                        read_line__81(stream__134);
                    else if (($T)(ralphScoreCCEE(B152, '\'')))
                        ralphScoreCCpush_last(stack__140, B117);
                    else if (($T)(ralphScoreCCEE(B152, '`')))
                        ralphScoreCCpush_last(stack__140, B131);
                    else if (($T)(ralphScoreCCEE(B152, ',')))
                        if (($T)(ralphScoreCCEE(ralphSstreamCCstream_peek(stream__134), '@'))) {
                            ralphSstreamCCstream_read_element(stream__134);
                            ralphScoreCCpush_last(stack__140, B119);
                        } else
                            ralphScoreCCpush_last(stack__140, B118);
                    else if (($T)(ralphScoreCCEE(B152, '('))) {
                        ralphScoreCCpush_last(ends__141, ')');
                        ralphScoreCCpush_last(stack__140, []);
                    } else if (($T)(ralphScoreCCEE(B152, '['))) {
                        ralphScoreCCpush_last(ends__141, ']');
                        ralphScoreCCpush_last(stack__140, [B132]);
                    } else if (($T)(ralphScoreCCEE(B152, ralphScoreCClast(ends__141)))) {
                        ralphScoreCCpop_last(ends__141);
                        add_lastN__145();
                    } else {
                        {
                            var B153 = ralphScoreCCEE(B152, ')');
                            var B155 = false;
                        }
                        if (($T)(B153))
                            B155 = B153;
                        else
                            B155 = ralphScoreCCEE(B152, ']');
                        if (($T)(B155))
                            ralphScoreCCsignal(ralphSformatCCformat_to_string('too many closings: %=', char__151));
                        else if (($T)(ralphScoreCCEE(B152, '"')))
                            add_to_stackN__144(read_string__112(stream__134));
                        else {
                            ralphSstreamCCstream_unread_element(stream__134);
                            add_to_stackN__144(make_atom__102(ralphScoreCCfirst(match_stream__77(Tatom_patternT__69, stream__134))));
                        }
                    }
                    {
                        var B156 = false;
                    }
                    if (($T)(ralphScoreCCEE(ralphScoreCCsize(stack__140), 1)))
                        B156 = ralphScoreCCnot(ralphScoreCCemptyQ(ralphScoreCCfirst(stack__140)));
                    else
                        B156 = false;
                    if (($T)(B156)) {
                        readQ__142 = false;
                        result__143 = ralphScoreCCfirst(ralphScoreCCfirst(stack__140));
                    }
                }
            }
            return(result__143);
        };
    }
    (exports)['read'] = read__154;
    ralphScoreCCMannotate_function(read__154, 'read', false);
}
