webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./src/components/ui/Slider/Slider.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/Slider/Slider.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.module.scss */ "./src/components/ui/Slider/Slider.module.scss");
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\components\\ui\\Slider\\Slider.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Slider = function Slider(props) {
  var sliderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var touches = [];
  var slideWidth = null;
  var slidesCount = null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      slideIndex = _useState[0],
      changeSlideIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      slideStyle = _useState2[0],
      changeSlideStyle = _useState2[1];

  var handleBack = function handleBack() {
    if (slideIndex !== 0) {
      changeSlideStyle({
        transform: 'translateX(' + (-slideWidth - 30) * (slideIndex - 1) + 'px)'
      });
      changeSlideIndex(slideIndex - 1);
    }
  };

  var handleNext = function handleNext() {
    if (slideIndex !== slidesCount - 1) {
      changeSlideStyle({
        transform: 'translateX(' + (-slideWidth - 30) * (slideIndex + 1) + 'px)'
      });
      changeSlideIndex(slideIndex + 1);
    }
  };

  var handleTouch = function handleTouch(e) {
    e.preventDefault();
    touches.push(e.changedTouches[0]);
  };

  var handleTouchEnd = function handleTouchEnd() {
    var touchDivision = touches[touches.length - 1].clientX - touches[0].clientX;
    console.log(touches);
    console.log(touchDivision);

    if (touchDivision > slideWidth / 3) {
      handleBack();
    } else if (touchDivision < -slideWidth / 3 && touchDivision < 0) {
      handleNext();
    }

    touches = [];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (slideRef) {
      slideWidth = slideRef.current.getBoundingClientRect().width;
      slidesCount = Math.ceil(slideRef.current.scrollWidth / sliderRef.current.getBoundingClientRect().width);
      console.log(slidesCount);
    }
  });
  return __jsx("div", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider,
    ref: sliderRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider__btnWrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider__btn + ' ' + _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider__btnPrev,
    onClick: handleBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/arrow-left.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  })), __jsx("button", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider__btn + ' ' + _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider__btnNext,
    onClick: handleNext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/arrow-left.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slider__container,
    ref: slideRef,
    style: slideStyle,
    onTouchMove: handleTouch,
    onTouchEnd: handleTouchEnd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ })

})
//# sourceMappingURL=main.js.e8387794da1c0230bb01.hot-update.js.map