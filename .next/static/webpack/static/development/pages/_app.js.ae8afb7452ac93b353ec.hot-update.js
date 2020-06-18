webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/ui/Footer/Footer.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/Footer/Footer.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/components/ui/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/auth */ "./src/api/auth.ts");
/* harmony import */ var _common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/customHooks/useFormState */ "./src/common/customHooks/useFormState.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\components\\ui\\Footer\\Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Footer = function Footer() {
  var email = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_4__["default"])('');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      res = _useState[0],
      setRes = _useState[1];

  var subscribe = function subscribe(e) {
    e.preventDefault();
    _api_auth__WEBPACK_IMPORTED_MODULE_3__["AuthAPI"].subscribeToNews(email.value).then(function (response) {
      setRes('Вы подписались');
      setTimeout(function () {
        return setRes('');
      }, 3000);
    })["catch"](function (err) {
      setRes(err.response.data.en);
      setTimeout(function () {
        return setRes('');
      }, 3000);
    });
  };

  return __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__wrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__top,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__news,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "News & updates"), __jsx("p", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__subtext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Enter your email to  get the latest on sales, new releases and more..."), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "email",
    name: "email",
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__formInput
  }, email, {
    placeholder: "Email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  })), __jsx("button", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__formBtn + ' common-btn',
    onClick: subscribe,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Subscribe"), res ? __jsx("span", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.response,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, res) : null)), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__contact,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Contact us"), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__contactInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__infoBlock,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__contactName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "For business & support:"), __jsx("a", {
    href: "#",
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__contactLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, "info@cyberclass.team"))), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__follow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__followTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, "Follow us"), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__followGroup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "",
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__followLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__followIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "/static/images/footer/inst.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  })))))), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, "Main menu"), __jsx("ul", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menuList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menuItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/static/docs/CyberClass. Terms.pdf",
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menuLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, "Terms")), __jsx("li", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menuItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/static/docs/CyberClass. Privacy.pdf",
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menuLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, "Privacy")), __jsx("li", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menuItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/static/docs/Payments. Security. Refund.pdf",
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__menuLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, "Payments. Security. Refund"))))), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__bottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__bottom_center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__bottomPay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/static/images/footer/pay.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__bottomCopy,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, "\xA9 2020 \u0421yberClass")), __jsx("div", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__bottom_right,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, "\u0418\u041F \u0416\u0443\u0440\u0430\u0432\u0435\u043B\u044C \u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0438\u044F \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u043D\u0430"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "\u0418\u041D\u041D 772619676401, \u041E\u0413\u0420\u041D\u0418\u041F 319774600696590")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=_app.js.ae8afb7452ac93b353ec.hot-update.js.map