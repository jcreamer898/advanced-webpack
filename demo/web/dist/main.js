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

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _shipsGalaxy_class = __webpack_require__(1);

	var _shipsGalaxy_class2 = _interopRequireDefault(_shipsGalaxy_class);

	var enterprise = new _shipsGalaxy_class2["default"]({
	  captain: "Jean Luc Picard",
	  weaponSystems: { TorpedoLauncher: TorpedoLauncher, PhaserArrays: PhaserArrays }
	});

	enterprise.fire("PhaserArrays");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _starship = __webpack_require__(2);

	var _starship2 = _interopRequireDefault(_starship);

	var GalaxyClass = (function (_Starship) {
	  function GalaxyClass() {
	    _classCallCheck(this, GalaxyClass);

	    if (_Starship != null) {
	      _Starship.apply(this, arguments);
	    }
	  }

	  _inherits(GalaxyClass, _Starship);

	  _createClass(GalaxyClass, [{
	    key: "deflectorShields",
	    value: function deflectorShields() {}
	  }, {
	    key: "warp",
	    value: function warp(speed) {
	      if (!speed) {
	        _get(Object.getPrototypeOf(GalaxyClass.prototype), "warp", this).call(this, 9.8);
	      }
	    }
	  }]);

	  return GalaxyClass;
	})(Starship);

	exports["default"] = GalaxyClass;
	module.exports = exports["default"];

	// ...

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StarShip = (function () {
	  function StarShip(options) {
	    _classCallCheck(this, StarShip);

	    var captain = options.captain;
	    var _options$weaponSystems = options.weaponSystems;
	    var weaponSystems = _options$weaponSystems === undefined ? {} : _options$weaponSystems;
	    var _options$maxWarp = options.maxWarp;
	    var maxWarp = _options$maxWarp === undefined ? 5 : _options$maxWarp;

	    this.captain = captain;
	    this.firstOfficer = firstOfficer;
	    this.weaponSystems = weaponSystems;
	  }

	  _createClass(StarShip, [{
	    key: "fire",
	    value: function fire(system) {
	      this.weaponSystems[system].fire();
	    }
	  }, {
	    key: "fireAll",
	    value: function fireAll() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.weaponSystems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var system = _step.value;

	          this.weaponSystems[system].fire();
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator["return"]) {
	            _iterator["return"]();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "warp",
	    value: function warp(speed) {
	      if (speed > this.maxWarp) {
	        throw "I can't do it captain, I don't have the power!";
	      }
	    }
	  }]);

	  return StarShip;
	})();

	exports["default"] = StarShip;
	module.exports = exports["default"];

/***/ }
/******/ ]);