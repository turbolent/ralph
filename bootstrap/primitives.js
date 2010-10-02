// symbol

function Symbol (name) {
    this.name = name;
}
exports.Symbol = Symbol;

Symbol.escaped = {
    '-': '_M_', '+': '_PL_', '!': '_B_', '?': '_W_', '%': '_PE_',
    '#': '_H_', '@': '_A_', '*': '_ST_', '/': '_SL_', '=': '_E_',
    ':': '_C_', '<': '_LT_', '>': '_GT_', '_': '__'
}

Symbol.counter = 0;

Symbol.generate = function () {
    var result = new Symbol('_' + Symbol.counter++);
    result.generated = true;
    return result;
}

Symbol.reserved = [
    "break", "case", "catch", "continue", "default", "delete", "do", "else",
    "finally", "for", "function", "if", "in", "instanceof", "new", "return",
    "switch", "this", "throw", "try", "typeof", "var", "void", "while",
    "with", "abstract", "boolean", "byte", "char", "class", "const",
    "debugger", "double", "enum", "export", "extends", "final", "float",
    "goto", "implements", "import", "int", "interface", "long", "native",
    "package", "private", "protected", "public", "short", "static", "super",
    "synchronized", "throws", "transient", "volatile", "null", "true", "false",
    'arguments'
];

Symbol.prototype.escape = function () {
    var first = this.name[0];
    var last = this.name[this.name.length - 1];
    if (this.generated) {
	return this.name;
    } else if (Symbol.reserved.indexOf(this.name) >= 0) {
	return '_' + this.name;
    } else if (first == '<' && last == '>') {
	return '_CL_'
	    + (Symbol.prototype.escape
	       .call(new Symbol(this.name.slice(1, -1))));
    } else if (first == '*' && last == '*') {
	return Symbol.prototype.escape
	    .call(new Symbol(this.name.slice(1, -1)))
	    .toUpperCase();
    } else {
	var result = '';
	var up = false;
	for (var i = 0; i < this.name.length; i++) {
	    var c = this.name[i];
	    if (c != '-') {
		if (up)
		    result += c.toUpperCase();
		else if (Symbol.escaped.hasOwnProperty(c))
		    result += Symbol.escaped[c];
		else
		    result += c;
	    } else if (i == (this.name.length - 1)) {
		result += Symbol.escaped[c];
	    }
	    up = (c == '-');
	}
	return result;
    }
}

Symbol.prototype.toString = function () {
    return this.escape();
}

// hash symbols

var HashSymbol = function (name) {
    this.name = name;
}
exports.HashSymbol = HashSymbol;

HashSymbol.names = ['key', 'rest', 'values'];

HashSymbol.names.forEach(function (hashSymbol) {
    HashSymbol[hashSymbol] = new HashSymbol(hashSymbol);
});

/* TODO: into own namespace?
HashSymbol.prototype.toString = function () {
    return 'HashSymbol.' + this.name;
}
*/