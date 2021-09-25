/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__.Screen(width, height);
    this.screen.loadImages({
      orc: '/img/orc.png',
      player: '/img/player.png',
      tiles: '/img/textures.png',
      title: '/img/title.jpg'
    });
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__.Loading(this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "chageScene",
    value: function chageScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_2__.Scene.LOADED:
          return this.scenes.menu;
          break;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_2__.Scene.WORKING) {
        this.currentScene = this.chageScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/imageLoader.js":
/*!****************************!*\
  !*** ./src/imageLoader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageLoader": () => (/* binding */ ImageLoader)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader = /*#__PURE__*/function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene = /*#__PURE__*/function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Loading = /*#__PURE__*/function (_Scene) {
  _inherits(Loading, _Scene);

  var _super = _createSuper(Loading);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.call(this, game);
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__.Scene.LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.game.screen.fill('#000000');
      this.game.screen.print(50, 70, 'Loading...');

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__.Scene);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => (/* binding */ Screen)
/* harmony export */ });
/* harmony import */ var _imageLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageLoader.js */ "./src/imageLoader.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Screen = /*#__PURE__*/function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  _createClass(Screen, [{
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      var loader = new _imageLoader_js__WEBPACK_IMPORTED_MODULE_0__.ImageLoader(imageFiles);
      loader.load().then(function (names) {
        _this.onages = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
        console.log(names);
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = '#FFFFFF';
      this.context.font = '22px Georgia';
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }]);

  return Screen;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var elvenScout = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();
  elvenScout.run();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YW1lLy4vc3JjL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbiBpbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIi4vc2NlbmVzL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZVwiO1xyXG5cclxuIGV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuICAgICAgICAgICAgb3JjOiAnL2ltZy9vcmMucG5nJyxcclxuICAgICAgICAgICAgcGxheWVyOiAnL2ltZy9wbGF5ZXIucG5nJyxcclxuICAgICAgICAgICAgdGlsZXM6ICcvaW1nL3RleHR1cmVzLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnL2ltZy90aXRsZS5qcGcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG5cclxuICAgICB9XHJcblxyXG4gICAgIGNoYWdlU2NlbmUoc3RhdHVzKXtcclxuICAgICAgICAgc3dpdGNoKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICBcclxuICAgICBmcmFtZSh0aW1lKXtcclxuICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY2hhZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcclxuICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICAgfVxyXG4gICAgIHJ1biAoKSB7XHJcbiAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgICB9XHJcbiB9IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVye1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcyl7XHJcbiAgICAgICAgdGhpcy5pbWFnZUZpbGVzID0gaW1hZ2VGaWxlcztcclxuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuaW1hZ2VGaWxlcykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxyXG4gICAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxyXG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxyXG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cclxuICAgIFxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICByZW5kZXIodGltZSl7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCAoKXtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ID09IDAgJiYgdGhpcy5nYW1lLnNjcmVlbi5pc0ltYWdlc0xvYWRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ICE9MCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLCA3MCwgJ0xvYWRpbmcuLi4nKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICAgICAgfVxyXG4gfSIsImltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gJy4vaW1hZ2VMb2FkZXIuanMnIFxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yICh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZXMoaW1hZ2VGaWxlcyl7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xyXG4gICAgICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4gb25hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBlbGVtZW50c1swXXx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbChjb2xvcil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLDAsdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHgsIHksIHRleHQpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSAnMjJweCBHZW9yZ2lhJztcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0ltYWdlKHgsIHksIGltYWdlTmFtZSl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xyXG4gICAgZWx2ZW5TY291dC5ydW4oKTtcclxufTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiU2NyZWVuIiwiTG9hZGluZyIsIlNjZW5lIiwiR2FtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsInBsYXllciIsInRpbGVzIiwidGl0bGUiLCJzY2VuZXMiLCJsb2FkaW5nIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIkxPQURFRCIsIm1lbnUiLCJ0aW1lIiwiV09SS0lORyIsImNoYWdlU2NlbmUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwibmFtZSIsInB1c2giLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJnYW1lIiwiY29uc3RydWN0b3IiLCJsb2FkZWRBdCIsImlzSW1hZ2VzTG9hZGVkIiwiZmluaXNoIiwiZmlsbCIsInByaW50IiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwib25hZ2VzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0IiwiaW1hZ2VOYW1lIiwiZHJhd0ltYWdlIiwid2luZG93IiwiZWx2ZW5TY291dCIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=