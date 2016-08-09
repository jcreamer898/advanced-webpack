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
	var itineraryMaker_1 = __webpack_require__(2);
	var stop_1 = __webpack_require__(3);
	var App = (function () {
	    // Poor man's DI
	    function App(itineraryMaker) {
	        if (itineraryMaker === void 0) { itineraryMaker = new itineraryMaker_1.default(); }
	        var stop = new stop_1.default({
	            latLng: [30, -45],
	            name: "Nashville"
	        });
	        itineraryMaker.add(stop);
	    }
	    return App;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var ItineraryMaker = (function () {
	    function ItineraryMaker() {
	    }
	    ItineraryMaker.prototype.add = function (stop) {
	        this.stops.push(stop);
	    };
	    ItineraryMaker.prototype.remove = function (stop) {
	        var index = this.stops.indexOf(stop);
	        this.stops.splice(index, 1);
	    };
	    return ItineraryMaker;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ItineraryMaker;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var Stop = (function () {
	    function Stop(_a) {
	        var latLng = _a.latLng, name = _a.name;
	        this.latLng = latLng;
	        this.name = name;
	    }
	    return Stop;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Stop;


/***/ }
/******/ ]);