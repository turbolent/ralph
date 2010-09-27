
var primitives = require('./primitives');
var Symbol = primitives.Symbol, HashSymbol = primitives.HashSymbol;

function Reader (stream) {
    this.stream = stream;
}
exports.Reader = Reader;

Reader.prototype.read = function () {
    this.stream.skipWhitespace();

    if (!this.stream.eof()) {
	switch (this.stream.peekChar()) {
	case ';':
	    this.stream.skipLine();
	    return this.read();
	case '"':
	    return this.readString();
	case '(':
	    return this.readList();
	default:
	    return this.readAtom();
	}
    }
}

var hexNumberExpression = /0x[0-9a-fA-F]+/;
var octalNumberExpression = /0[0-7]+/;
var decimalNumberExpression = /\d*\.?\d*(?:[eE]-?\d*(?:\d\.?|\.?\d)\d*)?/;

Reader.prototype.readAtom = function () {
    var c = this.stream.peekChar();
    var rest = this.stream.rest()
    if ([hexNumberExpression,
	 octalNumberExpression,
	 decimalNumberExpression]
	.some(function (expression) {
	    var match = expression.exec(rest);
	    return match && match[0] != '';
	}))
    {
	return this.readNumber();
    } else
	return this.readSymbol();
}

Reader.prototype.readList = function () {
    var result = new Array();
    this.stream.readChar();
    this.stream.skipWhitespace();

    while (this.stream.peekChar() != ')') {
	if (this.stream.eof())
	    throw new Error('Unbalanced parens');
	var next = this.read();
	result.push(next);
	this.stream.skipWhitespace();
    }

    this.stream.readChar();
    return result;
}

Reader.prototype.readSymbol = function () {
    var match = /[^()\n\t ]+/.exec(this.stream.rest());
    var name = match[0];
    this.stream.index += name.length;
    // TODO: keywords
    if (name[0] == '#' && HashSymbol.names.indexOf(name.substring(1)) >= 0)
	return HashSymbol[name.substring(1)];
    else
	return new Symbol(match[0]);
}

// TODO: escapes in strings: \t, \r, \n

Reader.prototype.readString = function () {
    this.stream.readChar();
    var c, result = "";
    while ((c = this.stream.readChar()) != '"') {
	if (c == '\\')
	    result += this.stream.readChar();
	else
	    result += c;
    }
    return result;
}

Reader.prototype.readNumber = function () {
    var match = /[^()\n\t ]+/.exec(this.stream.rest());
    this.stream.index += match[0].length;
    return new Number(match[0]);
}