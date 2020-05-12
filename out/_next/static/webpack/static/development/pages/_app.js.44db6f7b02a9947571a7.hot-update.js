webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ui/PreLoader/PreLoader.module.scss":
false,

/***/ "./src/components/ui/PreLoader/PreLoader.module.scss":
false,

/***/ "./src/components/ui/PreLoader/PreLoader.tsx":
false,

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_styles_common_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/styles/common.scss */ "./src/common/styles/common.scss");
/* harmony import */ var _common_styles_common_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_styles_common_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/AppLayout/AppLayout */ "./src/components/layouts/AppLayout/AppLayout.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./src/store/store.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var makeStore = function makeStore(initialState, options) {
  return Object(_store_store__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      store = _ref.store;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      pageWidth = _useState[0],
      setPageWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      activeHandle = _useState2[0],
      setActiveHandle = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!activeHandle) {
      setPageWidth(document.body.clientWidth);

      document.body.onresize = function () {
        setPageWidth(document.body.clientWidth);
      };

      setActiveHandle(true);
    }
  });
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, router.pathname != '/authorization' && !router.pathname.includes('/registration') ? __jsx(_components_layouts_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    store: store
  }, pageProps, {
    pageWidth: pageWidth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }))) : __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    store: store
  }, pageProps, {
    pageWidth: pageWidth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(makeStore)(App));

/***/ })

})
//# sourceMappingURL=_app.js.44db6f7b02a9947571a7.hot-update.js.map