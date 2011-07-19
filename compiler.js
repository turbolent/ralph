var http = require('http'),
  url = require('url'),
  core = require("runtime/core"),
  stream = require("runtime/stream"),
  reader = require("compiler/reader"),
  compiler = require("compiler/compiler");


function handler (req, res) {
    var code = "";
    req.on('data', function(chunk) {
               code += chunk.toString();
           });

    req.on('end', function() {
               try {
                   var sourceStream =
                       core.make(stream._CL_stringStream, core._k("string"),
                                 "(begin\n" + code + "\n)");
                   var form = reader.read(sourceStream);
				   var options = url.parse(req.url, true).query;
                   var compiled = compiler.compile(form,
												   core._k('statements?'), ((options && options.hasOwnProperty('statements'))
																			? !!options.statements : true),
												   core._k('asynchronous?'), options && !!options.asynchronous);
                   res.writeHead(200, {'Content-Type': 'text/javascript'});
                   res.end(compiled);
               } catch (e) {
                   res.writeHead(500);
                   res.end(e.stack.toString());
               }
           });
}

http.createServer(handler).listen(5000, "127.0.0.1");
console.log('POST Ralph code to http://127.0.0.1:5000/');
