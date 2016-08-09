/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _itineraryMaker = __webpack_require__(2);

	var _itineraryMaker2 = _interopRequireDefault(_itineraryMaker);

	var _stop = __webpack_require__(3);

	var _stop2 = _interopRequireDefault(_stop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App =
	// Poor man's DI
	function App() {
	  _classCallCheck(this, App);

	  var itineraryMaker = arguments.length <= 0 || arguments[0] === undefined ? new _itineraryMaker2.default() : arguments[0];

	  itineraryMaker.add(new _stop2.default({
	    latLng: [30, -45],
	    name: "Nashville"
	  }));
	};

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ItineraryMaker = function () {
	  function ItineraryMaker() {
	    _classCallCheck(this, ItineraryMaker);

	    this.stops = [];
	  }

	  _createClass(ItineraryMaker, [{
	    key: "add",
	    value: function add(stop) {
	      this.stops.push(stop);
	    }
	  }, {
	    key: "remove",
	    value: function remove(stop) {
	      var index = this.stops.indexOf(stop);
	      this.stops.splice(index, 1);
	    }
	  }]);

	  return ItineraryMaker;
	}();

	exports.default = ItineraryMaker;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Stop = function Stop() {
	  _classCallCheck(this, Stop);
	};

/***/ }
/******/ ]);