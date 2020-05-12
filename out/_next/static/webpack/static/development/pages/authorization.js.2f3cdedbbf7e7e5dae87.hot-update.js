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
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/user-actions */ "./src/store/actions/user-actions.ts");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\authorization\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Authorization = function Authorization(_ref) {
  var store = _ref.store;
  var login = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var password = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var authorize = function authorize(e) {
    e.preventDefault();
    _api_auth__WEBPACK_IMPORTED_MODULE_4__["AuthAPI"].auth(login.value.replace(/[\s\-\(\)]+/g, ''), password.value).then(function (response) {
      store.dispatch(Object(_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__["setUser"])(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      router.push('/main');
      console.log('done');
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return __jsx("div", {
    className: "auth-component",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "auth-form",
    onSubmit: authorize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Sign In"), __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    mask: "+7(999)999-99-99"
  }, login, {
    className: "common-input",
    placeholder: "+7(___)___-__-__",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 17
    }
  })), __jsx("button", {
    className: "common-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Log In"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/registration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "create-account-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "or create new account"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Authorization);

/***/ })

})
//# sourceMappingURL=authorization.js.2f3cdedbbf7e7e5dae87.hot-update.js.map