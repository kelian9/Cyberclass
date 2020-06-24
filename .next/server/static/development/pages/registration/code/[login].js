module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/auth.ts":
/*!*************************!*\
  !*** ./src/api/auth.ts ***!
  \*************************/
/*! exports provided: AuthAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAPI", function() { return AuthAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment/environment */ "./src/api/environment/environment.ts");


const AuthAPI = {
  auth(login, password) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoint}/Account/AuthUser`, {
      login: login,
      password: password
    });
  },

  register(phone, password, email, nickName) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoint}/Account/RegisterUser`, {
      phoneNumber: phone,
      password: password,
      email: email,
      nickName: nickName
    });
  },

  sendActivationCode(login) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoint}/Code/SendActivationCode`, {
      params: {
        login: login
      }
    });
  },

  checkCode(login, code) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoint}/Account/CheckCode`, {}, {
      params: {
        login: login,
        code: code
      }
    });
  },

  subscribeToNews(email) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoint}/Sub/CreateSub`, {
      email: email
    });
  }

};

/***/ }),

/***/ "./src/api/environment/environment.ts":
/*!********************************************!*\
  !*** ./src/api/environment/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
  apiEndPoint: 'http://194.177.23.9:377/api'
};

/***/ }),

/***/ "./src/api/lessons.ts":
/*!****************************!*\
  !*** ./src/api/lessons.ts ***!
  \****************************/
/*! exports provided: LessonsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsAPI", function() { return LessonsAPI; });
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment/environment */ "./src/api/environment/environment.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const LessonsAPI = {
  getLessons(materialID) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiEndPoint}/Lesson/GetLessons`, {
      params: {
        matId: materialID
      },
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
      }
    });
  },

  getPaidLessons(matId) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiEndPoint}/Lesson/GetPaidLessons`, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
      },
      params: {
        matId: matId
      }
    });
  },

  getNotAuthorizeLessons(materialID) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiEndPoint}/NotAutorize/GetLessonsNotAutarize`, {
      params: {
        matId: materialID
      }
    });
  },

  getMaterials() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiEndPoint}/Lesson/GetMaterials`, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
      }
    });
  },

  getNotAuthorizeMaterials() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiEndPoint}/NotAutorize/GetMaterialsNotAutorize`);
  }

};

/***/ }),

/***/ "./src/common/customHooks/useFormState.ts":
/*!************************************************!*\
  !*** ./src/common/customHooks/useFormState.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useFormState = inititalValue => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(inititalValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value: value,
    onChange: handleChange
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useFormState);

/***/ }),

/***/ "./src/pages/registration/code/[login].tsx":
/*!*************************************************!*\
  !*** ./src/pages/registration/code/[login].tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/customHooks/useFormState */ "./src/common/customHooks/useFormState.ts");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth */ "./src/api/auth.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_lessons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/lessons */ "./src/api/lessons.ts");
var _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\registration\\code\\[login].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const ActivationCode = () => {
  const code = Object(_common_customHooks_useFormState__WEBPACK_IMPORTED_MODULE_1__["default"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: error,
    1: toggleError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: lessonsURL,
    1: setLessonURL
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const getCourse = () => {
    _api_lessons__WEBPACK_IMPORTED_MODULE_4__["LessonsAPI"].getNotAuthorizeMaterials().then(response => {
      setLessonURL('/lesson/' + response.data[0].id);
    }).catch(err => {
      console.log(err);
    });
  };

  const checkCode = e => {
    e.preventDefault();
    _api_auth__WEBPACK_IMPORTED_MODULE_2__["AuthAPI"].checkCode(router.query.login, code.value).then(response => {
      console.log(response.data);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('user', JSON.stringify(response.data.user));
      router.push(lessonsURL);
    }).catch(err => {
      toggleError(true);
      setTimeout(() => {
        toggleError(false);
      }, 3000);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    !lessonsURL ? getCourse() : null;
  });
  return __jsx("div", {
    className: "auth-component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "auth-form",
    onSubmit: checkCode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Activation Code"), __jsx("input", _extends({
    type: "text"
  }, code, {
    className: "common-input",
    placeholder: "Code",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("button", {
    type: "submit",
    className: "common-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Send"), error ? __jsx("span", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 27
    }
  }, "Incorrect code") : null));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivationCode);

/***/ }),

/***/ 3:
/*!*******************************************************!*\
  !*** multi ./src/pages/registration/code/[login].tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Projects\cyberclass\src\pages\registration\code\[login].tsx */"./src/pages/registration/code/[login].tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[login].js.map