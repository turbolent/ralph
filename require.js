var require;

(function () {
     var directories = ["runtime/", ""];
     var modules = {};
     var requests = 0;
     var deferredCallbacks = [];

     function e (exports, code) {
	 eval(code);
     }

     function request (name, callback) {
	 function tryRequest (directories) {
	     var req = new XMLHttpRequest();
	     req.open("GET", document.location.href + directories[0]
		      + name + ".js", true);
	     req.onreadystatechange = function () {
		 if (req.readyState == 4) {
		     if (req.status == 200) {
			 var currentRequests = requests;
			 var exports = {};
			 e(exports, req.responseText);
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
			 // alternatives left?
			 if (directories.length > 1)
			     tryRequest(directories.slice(1));
			 else {
			     callback();
			     requests--;
			 }
		     }
		 }
	     };
	     req.send(null);
	 };
	 tryRequest(directories);
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
