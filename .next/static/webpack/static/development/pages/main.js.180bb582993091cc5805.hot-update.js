webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./src/components/ui/LessonCard/LessonCard.tsx":
/*!*****************************************************!*\
  !*** ./src/components/ui/LessonCard/LessonCard.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LessonCard.module.scss */ "./src/components/ui/LessonCard/LessonCard.module.scss");
/* harmony import */ var _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\components\\ui\\LessonCard\\LessonCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LessonCard = function LessonCard(_ref) {
  var lesson = _ref.lesson,
      selectLesson = _ref.selectLesson;
  var frameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return __jsx("div", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lessonCard,
    onClick: function onClick() {
      return selectLesson ? selectLesson(lesson.id) : null;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/images/play-circle.svg",
    alt: "",
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['play-icon'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), lesson.preview ? __jsx("img", {
    src: 'http://194.177.23.9:577/' + lesson.preview,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 31
    }
  }) : __jsx("div", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emptyPath,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 97
    }
  }), __jsx("span", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.duration,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, lesson.duration, ":00"), __jsx("span", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['duration-line'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, lesson.name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, lesson.description));
};

/* harmony default export */ __webpack_exports__["default"] = (LessonCard);

/***/ })

})
//# sourceMappingURL=main.js.180bb582993091cc5805.hot-update.js.map