{
    var $module = Object.create(null);
    var Mexport = function B1636(name__1637, value__1638) {
        var B1639 = (exports);
        return(B1639[name__1637] = value__1638);
    };
}
var B1640 = require('ralph/core');
var B1641 = require('ralph/format');
var Bspecial_symbol_names = [
        '%all-arguments',
        '%this-method'
    ];
{
    {
        var special_symbolQ = function B1643(symbol__1644) {
            return(B1640['member?'](B1640['symbol-name'](symbol__1644), Bspecial_symbol_names));
        };
        Mexport('special-symbol?', special_symbolQ);
    }
    B1640['%annotate-function'](special_symbolQ, 'special-symbol?', false);
}
{
    {
        var check_type = function B1646(value__1647, type__1648, format_string__1649) {
            if (($T)(B1640['not'](B1640['instance?'](value__1647, type__1648))))
                return(B1640['signal'](B1641['format-to-string'](format_string__1649, value__1647)));
            else
                return(false);
        };
        Mexport('check-type', check_type);
    }
    B1640['%annotate-function'](check_type, 'check-type', false);
}
{
    {
        var check_identifier = function B1653(identifier__1654, env__1655, format_string__1656) {
            var B1659 = B1640['not'];
            {
                var B1657 = B1640['not'](B1640['get'](identifier__1654, 'module'));
                {
                    var B1660 = false;
                    if (($T)(B1657))
                        B1660 = B1657;
                    else
                        B1660 = B1640['=='](B1640['get'](identifier__1654, 'module'), B1640['get'](env__1655, 'module', 'name'));
                    {
                        var B1661 = B1659(B1660);
                        if (($T)(B1661)) {
                            var B1662 = B1640['signal'];
                            {
                                var B1663 = B1641['format-to-string'];
                                {
                                    var B1658 = format_string__1656;
                                    {
                                        var B1664 = false;
                                        if (($T)(B1658))
                                            B1664 = B1658;
                                        else
                                            B1664 = 'External identifier: %=';
                                        {
                                            var B1665 = B1663(B1664, identifier__1654);
                                            return(B1662(B1665));
                                        }
                                    }
                                }
                            }
                        } else
                            return(false);
                    }
                }
            }
        };
        Mexport('check-identifier', check_identifier);
    }
    B1640['%annotate-function'](check_identifier, 'check-identifier', false);
}
{
    var B1670 = $REST;
    {
        var B1671 = $KEY;
        {
            var B1672 = $K('end');
            {
                var B1673 = $K('start');
                {
                    {
                        var destructure_parameter_list = function B1674(list__1675) {
                            var position__1676 = false;
                            {
                                position__1676 = function B1677(symbol__1678) {
                                    return(B1640['find-key'](list__1675, B1640['curry'](B1640['='], symbol__1678)));
                                };
                                {
                                    var rest__1679 = position__1676(B1670);
                                    {
                                        var key__1680 = position__1676(B1671);
                                        {
                                            var B1683 = B1640['copy-sequence'];
                                            {
                                                var B1681 = rest__1679;
                                                {
                                                    var B1684 = false;
                                                    if (($T)(B1681))
                                                        B1684 = B1681;
                                                    else {
                                                        var B1682 = key__1680;
                                                        if (($T)(B1682))
                                                            B1684 = B1682;
                                                        else
                                                            B1684 = B1640['size'](list__1675);
                                                    }
                                                    {
                                                        var B1685 = B1683(list__1675, B1672, B1684);
                                                        {
                                                            var B1686 = false;
                                                            if (($T)(rest__1679))
                                                                B1686 = B1640['element'](list__1675, B1640['inc'](rest__1679));
                                                            else
                                                                B1686 = false;
                                                            {
                                                                var B1687 = false;
                                                                if (($T)(key__1680))
                                                                    B1687 = B1640['copy-sequence'](list__1675, B1673, B1640['inc'](key__1680));
                                                                else
                                                                    B1687 = false;
                                                                return([
                                                                    B1685,
                                                                    B1686,
                                                                    B1687
                                                                ]);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        };
                        Mexport('destructure-parameter-list', destructure_parameter_list);
                    }
                    B1640['%annotate-function'](destructure_parameter_list, 'destructure-parameter-list', false);
                }
            }
        }
    }
}
{
    {
        var opQ = function B1689(op__1690, exp__1691) {
            if (($T)(B1640['expression?'](exp__1691)))
                return(B1640['=='](B1640['symbol-name'](B1640['first'](exp__1691)), op__1690));
            else
                return(false);
        };
        Mexport('op?', opQ);
    }
    B1640['%annotate-function'](opQ, 'op?', false);
}
{
    {
        var process_import_names = function B1699(all__1700) {
            var B1701 = $SL.call(arguments, 1);
            {
                var B1702 = B1640['%keys'](B1701, {
                        'only': false,
                        'exclude': false,
                        'prefix': false,
                        'rename': false
                    });
                {
                    var only__1703 = B1702['only'];
                    {
                        var exclude__1704 = B1702['exclude'];
                        {
                            var prefix__1705 = B1702['prefix'];
                            {
                                var rename__1706 = B1702['rename'];
                                {
                                    var resolve__1707 = false;
                                    {
                                        resolve__1707 = function B1708(exp__1709) {
                                            if (($T)(B1640['instance?'](exp__1709, B1640['<string>'])))
                                                return(exp__1709);
                                            else
                                                return(identifier_name(exp__1709));
                                        };
                                        {
                                            var B1717 = B1640['as-set'];
                                            {
                                                var B1718 = false;
                                                if (($T)(B1640['instance?'](only__1703, B1640['<array>'])))
                                                    B1718 = B1640['map'](resolve__1707, only__1703);
                                                else
                                                    B1718 = all__1700;
                                                {
                                                    var names__1710 = B1717(B1718);
                                                    {
                                                        var B1719 = B1640['as-object'];
                                                        {
                                                            var B1720 = B1640['map'];
                                                            {
                                                                var B1711 = rename__1706;
                                                                {
                                                                    var B1721 = false;
                                                                    if (($T)(B1711))
                                                                        B1721 = B1711;
                                                                    else
                                                                        B1721 = [];
                                                                    {
                                                                        var B1722 = B1720(resolve__1707, B1721);
                                                                        {
                                                                            var renamings__1712 = B1719(B1722);
                                                                            {
                                                                                B1640['do'](B1640['curry'](B1640['remove!'], names__1710), B1640['map'](resolve__1707, exclude__1704));
                                                                                {
                                                                                    B1640['set-union!'](names__1710, B1640['object-properties'](renamings__1712));
                                                                                    return(B1640['map'](function B1713(name__1714) {
                                                                                        var B1715 = B1640['get'](renamings__1712, name__1714);
                                                                                        if (($T)(B1715)) {
                                                                                            var renaming__1716 = B1715;
                                                                                            return([
                                                                                                name__1714,
                                                                                                renaming__1716
                                                                                            ]);
                                                                                        } else if (($T)(B1640['instance?'](prefix__1705, B1640['<string>'])))
                                                                                            return([
                                                                                                name__1714,
                                                                                                B1640['concatenate'](prefix__1705, name__1714)
                                                                                            ]);
                                                                                        else
                                                                                            return(name__1714);
                                                                                    }, names__1710));
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        Mexport('process-import-names', process_import_names);
    }
    B1640['%annotate-function'](process_import_names, 'process-import-names', false);
}
{
    {
        var transform_setter_identifier = function B1724(identifier__1725) {
            return(B1640['symbol'](B1640['concatenate'](B1640['symbol-name'](identifier__1725), '-setter')));
        };
        Mexport('transform-setter-identifier', transform_setter_identifier);
    }
    B1640['%annotate-function'](transform_setter_identifier, 'transform-setter-identifier', false);
}
{
    {
        var setter_identifierQ = function B1727(form__1728) {
            if (($T)(B1640['instance?'](form__1728, B1640['<array>'])))
                if (($T)(B1640['=='](B1640['size'](form__1728), 2)))
                    if (($T)(B1640['every?'](B1640['rcurry'](B1640['instance?'], B1640['<symbol>']), form__1728)))
                        return(B1640['=='](B1640['symbol-name'](B1640['first'](form__1728)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
        Mexport('setter-identifier?', setter_identifierQ);
    }
    B1640['%annotate-function'](setter_identifierQ, 'setter-identifier?', false);
}
{
    {
        var identifier_name = function B1730(identifier__1731) {
            var B1732 = B1640['symbol-name'];
            {
                var B1733 = false;
                if (($T)(setter_identifierQ(identifier__1731)))
                    B1733 = transform_setter_identifier(B1640['second'](identifier__1731));
                else
                    B1733 = identifier__1731;
                return(B1732(B1733));
            }
        };
        Mexport('identifier-name', identifier_name);
    }
    B1640['%annotate-function'](identifier_name, 'identifier-name', false);
}
