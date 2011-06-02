var require;

function _e (exports, _code) {
    eval(_code);
}

(function () {
     var modules = {};
     var requests = 0;
     var deferredCallbacks = [];

     function dirname (path) {
         return path.substring(0, path.lastIndexOf('/') + 1);
     }

     function request (name, callback) {
         var req = new XMLHttpRequest();
         var path = name + ".js";
         req.open("GET", dirname(document.location.href) + path, true);
         req.onreadystatechange = function () {
             if (req.readyState == 4) {
                 if ((req.status == 200)
                     || (req.status == 0))
                 {
                     var currentRequests = requests;
                     var exports = {};
                    var location = "//@ sourceURL="
                         + path.replace(/\//g, "_").replace(/\.js$/, "") + "\n";
                     _e(exports, location + req.responseText);
                     modules[name] = exports;
                     deferredCallbacks
                         .unshift(function() {
                                      if (currentRequests == requests) {
                                          callback(exports);
                                          requests--;
                                          return true;
                                      } else
                                          return false;
                                  });
                     for (var i = 0; i < deferredCallbacks.length; i++) {
                         if (deferredCallbacks[0]()) {
                             deferredCallbacks.splice(i, 1);
                             i--;
                         }
                     }
                 } else {
                     callback();
                     requests--;

                 }
             }
         };
         req.send(null);
     }

     require = function (name, callback) {
         if (modules.hasOwnProperty(name))
             callback(modules[name]);
         else {
             requests++;
             request(name, callback);
         }
     };
 })();
