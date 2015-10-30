webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _utilsLogger = __webpack_require__(1);

	var _shipsGalaxy_class = __webpack_require__(2);

	var _shipsGalaxy_class2 = _interopRequireDefault(_shipsGalaxy_class);

	var _weaponsTorpedo_launcher = __webpack_require__(4);

	var _weaponsTorpedo_launcher2 = _interopRequireDefault(_weaponsTorpedo_launcher);

	var enterprise = new _shipsGalaxy_class2["default"]({
	  captain: "Jean Luc Picard",
	  firstOfficer: "William Riker",
	  weaponSystems: { torpedos: new _weaponsTorpedo_launcher2["default"]() }
	});

	enterprise.fire("torpedos");

	(0, _utilsLogger.log)("Torpedoes fired, prepare for warp...");

	enterprise.warp();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _starship = __webpack_require__(3);

	var _starship2 = _interopRequireDefault(_starship);

	var GalaxyClass = (function (_StarShip) {
	  _inherits(GalaxyClass, _StarShip);

	  function GalaxyClass() {
	    _classCallCheck(this, GalaxyClass);

	    _get(Object.getPrototypeOf(GalaxyClass.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(GalaxyClass, [{
	    key: "deflectorShields",
	    value: function deflectorShields() {
	      // ...
	    }
	  }, {
	    key: "warp",
	    value: function warp(speed) {
	      if (!speed) {
	        _get(Object.getPrototypeOf(GalaxyClass.prototype), "warp", this).call(this, 9.8);
	      }
	    }
	  }]);

	  return GalaxyClass;
	})(_starship2["default"]);

	exports["default"] = GalaxyClass;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StarShip = (function () {
	  function StarShip(_ref) {
	    var captain = _ref.captain;
	    var firstOfficer = _ref.firstOfficer;
	    var _ref$weaponSystems = _ref.weaponSystems;
	    var weaponSystems = _ref$weaponSystems === undefined ? {} : _ref$weaponSystems;
	    var _ref$maxWarp = _ref.maxWarp;
	    var maxWarp = _ref$maxWarp === undefined ? 5 : _ref$maxWarp;

	    _classCallCheck(this, StarShip);

	    this.captain = captain;
	    this.firstOfficer = firstOfficer;
	    this.weaponSystems = weaponSystems;
	    this.maxWarp = maxWarp;
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TorpedoLauncher = (function () {
	  function TorpedoLauncher() {
	    _classCallCheck(this, TorpedoLauncher);

	    this.shotsRemaining = 10;
	  }

	  _createClass(TorpedoLauncher, [{
	    key: "fire",
	    value: function fire() {
	      this.shotsRemaining -= 1;

	      console.log(this.shotsRemaining + " torpedos left");
	    }
	  }]);

	  return TorpedoLauncher;
	})();

	exports["default"] = TorpedoLauncher;
	module.exports = exports["default"];

/***/ }
]);