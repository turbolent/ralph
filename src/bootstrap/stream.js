function Stream (string) {
    this.string = string;
    this.index = 0;
}
exports.Stream = Stream;


Stream.prototype.peekChar = function () {
    return this.string[this.index];
}

Stream.prototype.rest = function () {
    return this.string.substring(this.index);
}

Stream.prototype.skipLine = function () {
    var result = /(.*)[\n]/.exec(this.rest());
    this.index += result[1].length;
}

Stream.prototype.skipWhitespace = function () {
    var result = /[ \t\n]*/.exec(this.rest());
    this.index += result[0].length;
}

Stream.prototype.readChar = function () {
    return this.string[this.index++];
}

Stream.prototype.eof = function () {
    return this.index >= (this.string.length - 1);
}