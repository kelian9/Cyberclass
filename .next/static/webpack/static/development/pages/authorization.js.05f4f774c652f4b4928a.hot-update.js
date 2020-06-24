webpackHotUpdate("static\\development\\pages\\authorization.js",{

/***/ "./src/pages/authorization/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/authorization/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/customHooks/useFormState */ "./src/common/customHooks/useFormState.ts");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/auth */ "./src/api/auth.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\authorization\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Authorization = function Authorization(_ref) {
  var store = _ref.store;
  var login = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var password = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_3__["default"])('');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      error = _useState[0],
      setError = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var authorize = function authorize(e) {
    e.preventDefault();
    _api_auth__WEBPACK_IMPORTED_MODULE_4__["AuthAPI"].auth(login.value.replace(/[\s\-\(\)]+/g, ''), password.value).then(function (response) {
      router.push('/registration/code/' + login.value.replace(/[\s\-\(\)]+/g, ''));
    })["catch"](function (err) {
      setError(err.response.data.en);
      setTimeout(function () {
        setError('');
      }, 3000);
    });
  };

  return __jsx("div", {
    className: "auth-component",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "auth-form",
    onSubmit: authorize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Sign In"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    mask: "+"
  }, login, {
    className: "common-input",
    placeholder: "+",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text",
    className: "common-input"
  }, password, {
    placeholder: "Password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: "common-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Log In"), error ? __jsx("span", {
    className: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 27
    }
  }, error) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/registration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "create-account-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "or create new account"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Authorization);

/***/ })

})
//# sourceMappingURL=authorization.js.05f4f774c652f4b4928a.hot-update.js.map