webpackHotUpdate("static\\development\\pages\\registration.js",{

/***/ "./src/pages/registration/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/registration/index.tsx ***!
  \******************************************/
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
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\registration\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Registration = function Registration() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var phone = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var password = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_3__["default"])('');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState[0],
      toggleError = _useState[1];

  var sendCode = function sendCode() {
    _api_auth__WEBPACK_IMPORTED_MODULE_4__["AuthAPI"].sendActivationCode(phone.value).then(function (response) {
      router.push("/registration/code/".concat(phone.value));
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  var register = function register(e) {
    e.preventDefault();
    _api_auth__WEBPACK_IMPORTED_MODULE_4__["AuthAPI"].register(phone.value, password.value).then(function (response) {
      sendCode();
    })["catch"](function (err) {
      toggleError(true);
      setTimeout(function () {
        toggleError(false);
      }, 3000);
    });
  };

  return __jsx("div", {
    className: "auth-component",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "auth-form",
    onSubmit: register,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Sign Up"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    mask: "+7(999)999-99-99"
  }, phone, {
    className: "common-input",
    placeholder: "+7(___)___-__-__",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 47,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: "common-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Register"), error ? __jsx("span", {
    className: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 27
    }
  }, "Incorrect code") : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/authorization",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "authorize-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "or sign in"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ })

})
//# sourceMappingURL=registration.js.ad48f4618db3ddd6d565.hot-update.js.map