/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'uikit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'uikit/dist/js/uikit-icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../node_modules/jquery/src/jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));



!(function webpackMissingModule() { var e = new Error("Cannot find module 'uikit'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).use(!(function webpackMissingModule() { var e = new Error("Cannot find module 'uikit/dist/js/uikit-icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // require('../node_modules/uikit/src/js/icons');

$(function () {
  $('audio').on('play', function () {
    ga('send', 'event', 'audio', 'play', this.currentSrc);

    if ($(this).hasClass('fade')) {
      this.volume = 0;
      $(this).animate({
        volume: $(this).attr('data-volume') || 1
      }, 1000);
    } else {
      this.volume = $(this).attr('data-volume') || 1;
    }

    if ($(this).hasClass('loop')) {
      loopAudio($(this));
    }
  }).on('pause', function () {
    $(this).closest('.sound').find('.uk-button-primary:visible').click();
  });
  $('.start-btn').click(function () {
    $(this).closest('.sound').find('audio')[0].play();
    $(this).closest('.sound').find('.uk-button').toggleClass('uk-hidden');

    if ($(this).closest('.sound')[0].hasAttribute('data-disable')) {
      console.log("Disabling ".concat($(this).closest('.sound').attr('data-disable')));
      $($(this).closest('.sound').attr('data-disable')).find('.uk-button-primary:visible').click();
    }
  });
  $('.stop-btn').click(function () {
    $(this).attr('disabled', true);
    var audio = $(this).closest('.sound').find('audio');

    if (audio.hasClass('fade')) {
      audio.animate({
        volume: 0
      }, 1000, function () {
        audio[0].pause();
        audio[0].currentTime = 0;
        audio.closest('.sound').find('.uk-button').removeAttr('disabled').toggleClass('uk-hidden');
      });
    } else {
      audio[0].pause();
      audio[0].currentTime = 0;
      audio.closest('.sound').find('.uk-button').removeAttr('disabled').toggleClass('uk-hidden');
    }
  }); // $('.rev-btn').click(function() {
  //     var audio = $(this).parent().siblings('audio');
  //     audio[0].preservesPitch = false;
  //     audio.animate({
  //         volume: audio[0].volume + 0.4,
  //         playbackRate: 2
  //     }, 1000);
  // });
  // $('.idle-btn').click(function() {
  //     var audio = $(this).parent().siblings('audio');
  //     audio.animate({
  //         volume: audio.attr('data-volume'),
  //         playbackRate: 1
  //     }, 1000);
  // });
});

function loopAudio(el) {
  /*if (!el[0].paused) {
      setTimeout(function() {
          el[0].currentTime = 0;
          loopAudio(el);
      }, el[0].duration * 1000 - 10);
  }*/
  if (el[0].currentTime * 1000 + 50 >= el[0].duration * 1000) {
    el[0].currentTime = 0;
    loopAudio(el);
  } else {
    setTimeout(function () {
      loopAudio(el);
    }, 10);
  }
}

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\r\n@import '../node_modules/uikit/src/scss/variables-theme';\r\n       ^\r\n      Can't find stylesheet to import.\n  ╷\n2 │ @import '../node_modules/uikit/src/scss/variables-theme';\r\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  stdin 2:9  root stylesheet\r\n      in C:\\Users\\MattD\\Code\\loco-sound\\src\\app.scss (line 2, column 9)\n    at runLoaders (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\webpack\\lib\\NormalModule.js:302:20)\n    at C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at render (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass-loader\\lib\\loader.js:52:13)\n    at Function.$2 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:23927:48)\n    at xS.$2 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:14932:15)\n    at vX.wa (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8897:42)\n    at vX.w9 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8899:32)\n    at iM.vm (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8296:46)\n    at vj.$0 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8432:7)\n    at Object.eP (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:1465:80)\n    at ak.bc (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8354:3)\n    at j_.bc (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8291:25)\n    at j_.cA (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8278:6)\n    at pL.cA (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8080:35)\n    at Object.m (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:1348:19)\n    at C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:4974:51\n    at yi.a (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:1356:71)\n    at yi.$2 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8095:23)\n    at wU.$2 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8090:25)\n    at vX.wa (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8897:42)\n    at vX.w9 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8899:32)\n    at iM.vm (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8296:46)\n    at vj.$0 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8432:7)\n    at Object.eP (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:1465:80)\n    at ak.bc (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8354:3)\n    at j_.bc (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8291:25)\n    at j_.cA (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8278:6)\n    at Object.eval (eval at DS (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:628:8), <anonymous>:3:38)\n    at vX.wa (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8897:42)\n    at vX.w9 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8899:32)\n    at iM.vm (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8296:46)\n    at vj.$0 (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8432:7)\n    at Object.eP (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:1465:80)\n    at ak.bc (C:\\Users\\MattD\\Code\\loco-sound\\node_modules\\sass\\sass.dart.js:8354:3)");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\MattD\Code\loco-sound\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\Users\MattD\Code\loco-sound\src\app.scss */"./src/app.scss");


/***/ })

/******/ });