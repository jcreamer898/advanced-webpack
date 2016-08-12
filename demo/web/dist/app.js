webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _itineraryMaker = __webpack_require__(1);

	var _itineraryMaker2 = _interopRequireDefault(_itineraryMaker);

	var _stop = __webpack_require__(2);

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

/***/ }
]);