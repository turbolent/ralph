// symbol

function Symbol (name) {
    this.name = name;
}
exports.Symbol = Symbol;

Symbol.escaped = {
    '-': '_M_', '+': '_PL_', '!': '_B_', '?': '_W_', '%': '_PE_',
    '#': '_H_', '@': '_A_', '*': '_ST_', '/': '_SL_', '=': '_E_',
    ':': '_C_', '<': '_LT_', '>': '_GT_', '_': '__', '{': '_BRO_',
    '}': '_BRC_'
};

Symbol.counter = 0;

Symbol.generate = function () {
    var result = new Symbol('_' + Symbol.counter++);
    result.generated = true;
    return result;
};

Symbol.reserved = [
    "break", "case", "catch", "continue", "default", "delete", "do", "else",
    "finally", "for", "function", "if", "in", "instanceof", "new", "return",
    "switch", "this", "throw", "try", "typeof", "var", "void", "while",
    "with", "abstract", "boolean", "byte", "char", "class", "const",
    "debugger", "double", "enum", "export", "extends", "final", "float",
    "goto", "implements", "import", "int", "interface", "long", "native",
    "package", "private", "protected", "public", "short", "static", "super",
    "synchronized", "throws", "transient", "volatile", "null", "true", "false",
    "arguments", "object", "number", "string", "array"
];

function escape (name) {
    var dehyphenated = name.replace(/-(.)/g, function (match) {
					return match[1].toUpperCase();
				    });
    return Array.prototype.slice.call(dehyphenated)
	.map(function (c) { if (Symbol.escaped.hasOwnProperty(c)) {
				return Symbol.escaped[c];
			    } else
				return c;
			  })
	.join("");
}

Symbol.prototype.escape = function () {
    var first = this.name[0];
    var last = this.name[this.name.length - 1];
    if (this.generated) {
	return this.name;
    } else if (Symbol.reserved.indexOf(this.name) >= 0) {
	return '_' + this.name;
    } else if (first == '<' && last == '>') {
	return '_CL_' + escape(this.name.slice(1, -1));
    } else if (first == '*' && last == '*'
	       && this.name.length > 2)
    {
	return escape(this.name.slice(1, -1))
	    .toUpperCase();
    } else {
	return escape(this.name);
    }
}

Symbol.prototype.toString = function () {
    return this.escape();
}

Symbol.interned = {};

function S (name) {
    if (Symbol.interned.hasOwnProperty(name))
	return Symbol.interned[name];
    else {
	var symbol = new Symbol(name);
	Symbol.interned[name] = symbol;
	return symbol;
    }
}
exports.S = S;

// hash symbols

var HashSymbol = function (name) {
    this.name = name;
}
exports.HashSymbol = HashSymbol;

HashSymbol.names = ['key', 'rest'];

HashSymbol.names.forEach(function (hashSymbol) {
    HashSymbol[hashSymbol] = new HashSymbol(hashSymbol);
});

HashSymbol.prototype.toString = function () {
    return '_' + this.name;
};

// keywords

function Keyword (name) {
    this.name = name;
}
exports.Keyword = Keyword;

Keyword.prototype.toString = function () {
    return '_k("' + this.name + '")';
}

Keyword.interned = {};

function K (name) {
    if (Keyword.interned.hasOwnProperty(name))
	return Keyword.interned[name];
    else {
	var keyword = new Keyword(name);
	Keyword.interned[name] = keyword;
	return keyword;
    }
}
exports.K = K;
