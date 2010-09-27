// symbol

function Symbol (name) {
    this.name = name;
}
exports.Symbol = Symbol;

Symbol.escaped = {
    '+': 'PLUS', '!': 'BANG', '?': 'WHAT', '%': 'PERCENT',
    '#': 'HASH', '@': 'AT', '*': 'STAR', '/': 'SLASH', '=': 'EQUALS',
    ':': 'COLON', '<': 'LESSTHAN', '>': 'GREATERTHAN'
}

Symbol.reserved = [
    "break", "case", "catch", "continue", "default", "delete", "do", "else",
    "finally", "for", "function", "if", "in", "instanceof", "new", "return",
    "switch", "this", "throw", "try", "typeof", "var", "void", "while",
    "with", "abstract", "boolean", "byte", "char", "class", "const",
    "debugger", "double", "enum", "export", "extends", "final", "float",
    "goto", "implements", "import", "int", "interface", "long", "native",
    "package", "private", "protected", "public", "short", "static", "super",
    "synchronized", "throws", "transient", "volatile", "null", "true", "false"
];

Symbol.prototype.escape = function () {
    if (Symbol.reserved.indexOf(this.name) >= 0) {
	return '_' + this.name;
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