webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _utilsLogger = __webpack_require__(1);

	var captainsLog = (function () {
	  var messages = [];

	  return {
	    add: function add(msg) {
	      if (msg) {
	        var message = date + ": " + msg,
	            date = new Date();

	        messages.push(message);

	        (0, _utilsLogger.log)(message);

	        return message;
	      }
	    }
	  };
	})();

/***/ }
]);