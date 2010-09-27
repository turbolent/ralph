// symbol

function Symbol (name) {
    this.name = name;
}
exports.Symbol = Symbol;

Symbol.escaped = {
    '-': 'minus', '+': 'plus', '!': 'bang', '?': 'what', '%': 'percent',
    '#': 'hash', '@': 'at', '*': 'star', '/': 'slash', '=': 'equals', 
    ':': 'colon', '<': 'lessthan', '>': 'greaterthan'
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
    var name = this.name;
    for (var c in Symbol.escaped) {
	name = name.replace(new RegExp('\\' + c, 'g'),
			    '_' + Symbol.escaped[c] + '_');
    }
    if (Symbol.reserved.indexOf(name) >= 0)
	name = '_' + name;
    return name;
}

Symbol.prototype.toString = function () {
    return this.escape().toLowerCase();
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