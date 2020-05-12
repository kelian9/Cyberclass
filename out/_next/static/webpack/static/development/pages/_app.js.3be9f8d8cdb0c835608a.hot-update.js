webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/ui/Header/Header.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/Header/Header.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/ui/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\components\\ui\\Header\\Header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header(_ref) {
  var store = _ref.store;
  var userState = store.getState().UserReducer;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(userState.userID);
  });
  return __jsx("header", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    id: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__wrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__logo_link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/static/images/navigation/logo.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  })))), __jsx("nav", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__nav_list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__nav_item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__nav_link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/static/images/navigation/search.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, "Search"))), __jsx("li", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__nav_item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, !(userState === null || userState === void 0 ? void 0 : userState.userID) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/authorization",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header__nav_link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "/static/images/navigation/login.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, "Log in"))) : __jsx("span", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['user-name'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, userState.person.name))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.3be9f8d8cdb0c835608a.hot-update.js.map