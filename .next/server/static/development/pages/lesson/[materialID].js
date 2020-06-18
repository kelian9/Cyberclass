module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

  getPaidLessons() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_environment_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiEndPoint}/Lesson/GetPaidLessons`, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
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

/***/ "./src/api/rating.ts":
/*!***************************!*\
  !*** ./src/api/rating.ts ***!
  \***************************/
/*! exports provided: RatingAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingAPI", function() { return RatingAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment/environment */ "./src/api/environment/environment.ts");


const RatingAPI = {
  rateMaterial(id, ratingType) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoint}/Rating/CreateRating`, {
      materialId: id,
      ratingType: ratingType
    }, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
      }
    });
  }

};

/***/ }),

/***/ "./src/common/checkLoggedIn.ts":
/*!*************************************!*\
  !*** ./src/common/checkLoggedIn.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Check if user is not logged in and go to auth
const checkLoggedIn = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return token && token.token && +new Date(token.expireDate) > +new Date(Date.now());
};

/* harmony default export */ __webpack_exports__["default"] = (checkLoggedIn);

/***/ }),

/***/ "./src/components/ui/LessonCard/LessonCard.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/ui/LessonCard/LessonCard.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"lessonCard": "LessonCard_lessonCard__1cnPZ",
	"emptyPath": "LessonCard_emptyPath__3GDvk",
	"play-icon": "LessonCard_play-icon__1nBNt",
	"duration": "LessonCard_duration__27-wx",
	"duration-line": "LessonCard_duration-line__15ALY"
};


/***/ }),

/***/ "./src/components/ui/LessonCard/LessonCard.tsx":
/*!*****************************************************!*\
  !*** ./src/components/ui/LessonCard/LessonCard.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LessonCard.module.scss */ "./src/components/ui/LessonCard/LessonCard.module.scss");
/* harmony import */ var _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\components\\ui\\LessonCard\\LessonCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LessonCard = ({
  lesson,
  selectLesson
}) => {
  const frameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return __jsx("div", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lessonCard,
    onClick: () => selectLesson ? selectLesson(lesson.id) : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/images/play-circle.svg",
    alt: "",
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['play-icon'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), lesson.preview ? __jsx("img", {
    src: 'http://194.177.23.9:577/' + lesson.preview,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 31
    }
  }) : __jsx("div", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emptyPath,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 97
    }
  }), __jsx("span", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.duration,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, lesson.duration, ":00"), __jsx("span", {
    className: _LessonCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['duration-line'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, lesson.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, lesson.description));
};

/* harmony default export */ __webpack_exports__["default"] = (LessonCard);

/***/ }),

/***/ "./src/pages/lesson/Lesson.module.scss":
/*!*********************************************!*\
  !*** ./src/pages/lesson/Lesson.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tab_view": "Lesson_tab_view__blLQx",
	"selected-lesson": "Lesson_selected-lesson__3AIWs",
	"heading-row": "Lesson_heading-row__2XkZ6",
	"selected-lesson_preview": "Lesson_selected-lesson_preview__3uw-Y",
	"play-icon": "Lesson_play-icon__BghQc",
	"duration": "Lesson_duration__1D9Rz",
	"duration-line": "Lesson_duration-line__hrAdr",
	"selected-lesson_info": "Lesson_selected-lesson_info__2CfXl",
	"rating": "Lesson_rating__RKnzn",
	"rated": "Lesson_rated__1YgGk",
	"tab": "Lesson_tab__3_3xw",
	"tab_btns": "Lesson_tab_btns__3P4Dk",
	"tab-btn_active": "Lesson_tab-btn_active__36kBV"
};


/***/ }),

/***/ "./src/pages/lesson/[materialID].tsx":
/*!*******************************************!*\
  !*** ./src/pages/lesson/[materialID].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lesson.module.scss */ "./src/pages/lesson/Lesson.module.scss");
/* harmony import */ var _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_LessonCard_LessonCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/LessonCard/LessonCard */ "./src/components/ui/LessonCard/LessonCard.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/checkLoggedIn */ "./src/common/checkLoggedIn.ts");
/* harmony import */ var _api_lessons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/lessons */ "./src/api/lessons.ts");
/* harmony import */ var _store_actions_lessons_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/lessons-actions */ "./src/store/actions/lessons-actions.ts");
/* harmony import */ var _api_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/rating */ "./src/api/rating.ts");
/* harmony import */ var _store_actions_materials_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/materials-actions */ "./src/store/actions/materials-actions.ts");
var _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\lesson\\[materialID].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Lesson = ({
  store
}) => {
  var _store$getState$Mater;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const materialState = (_store$getState$Mater = store.getState().MaterialsReducer) === null || _store$getState$Mater === void 0 ? void 0 : _store$getState$Mater.find(({
    id
  }) => id === +router.query.materialID);
  const lessonsState = store.getState().LessonsReducer;
  const {
    0: selectedLesson,
    1: selectLesson
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: lessonsCount,
    1: setLessonsCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(6);
  const {
    0: tab,
    1: changeTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const rateMaterial = type => {
    Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__["default"])() && !materialState.myLike && !materialState.myDislike ? _api_rating__WEBPACK_IMPORTED_MODULE_7__["RatingAPI"].rateMaterial(+router.query.materialID, type).then(response => {
      store.dispatch(Object(_store_actions_materials_actions__WEBPACK_IMPORTED_MODULE_8__["rateMaterialState"])({
        id: +router.query.materialID,
        ratingType: type
      }));
      console.log(response);
    }).catch(err => console.log(err)) : null;
  };

  const getPaidLessons = () => {
    changeTab(1);
    _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getPaidLessons().then(response => {
      store.dispatch(Object(_store_actions_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["setLessons"])(response.data));
      selectLesson(response.data[0]);
      changeTab(1);
    }).catch(err => {
      console.log(err);
    });
  };

  const getLessons = materialID => {
    changeTab(0);
    (Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__["default"])() ? _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getLessons(materialID) : _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getNotAuthorizeLessons(materialID)).then(response => {
      store.dispatch(Object(_store_actions_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["setLessons"])(response.data));
      selectLesson(response.data[0]);
      changeTab(0);
    }).catch(err => {
      console.log(err);
    });
  };

  const getCourse = () => {
    (Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__["default"])() ? _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getMaterials() : _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getNotAuthorizeMaterials()).then(response => {
      store.dispatch(Object(_store_actions_materials_actions__WEBPACK_IMPORTED_MODULE_8__["setMaterials"])(response.data));
      getLessons(response.data[0].id);
    }).catch(err => {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    !materialState ? getCourse() : null;
    lessonsState.length === 0 ? getLessons(+router.query.materialID) : null;
    !selectedLesson ? selectLesson(lessonsState[0]) : null; // selectedLesson?.url.slice(0,8) + 'player.' + selectedLesson?.url.slice(8,18) + 'video/' + selectedLesson?.url.slice(18)
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['selected-lesson'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, (selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.url) ? // <iframe src={selectedLesson?.url} allow="autoplay; fullscreen" frameBorder="0"></iframe>
  // '//playercdn.cdnvideo.ru/aloha/players/cyberclass_player1.html?source=//cyberclass-cache.cdnvideo.ru/cyberclass/1.%20Osnovi_mst.mp4'
  __jsx("iframe", {
    src: selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.url,
    frameBorder: "0",
    scrolling: "no",
    style: {
      overflow: "hidden"
    },
    allowFullScreen: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }) : __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['selected-lesson_preview'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.preview,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: "/static/images/play-circle.svg",
    alt: "",
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['play-icon'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.duration,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.duration, ":00"), __jsx("span", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['duration-line'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['selected-lesson_info'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['heading-row'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/images/fifa20.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }), __jsx("a", {
    className: "transparent-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, "Get access to all cources")), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "0", selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.number, ": ", selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.name), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "\u043E\u0442 mozz \u0438 klenoff"), __jsx("p", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "Rate this\xA0\xA0\xA0", materialState === null || materialState === void 0 ? void 0 : materialState.likeCount, " ", __jsx("img", {
    src: "/static/images/like.svg",
    alt: "",
    onClick: () => rateMaterial(0),
    className: (materialState === null || materialState === void 0 ? void 0 : materialState.myLike) ? _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['rated'] : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 52
    }
  }), "\xA0\xA0", materialState === null || materialState === void 0 ? void 0 : materialState.dislikeCount, " ", __jsx("img", {
    src: "/static/images/like.svg",
    alt: "",
    onClick: () => rateMaterial(1),
    className: (materialState === null || materialState === void 0 ? void 0 : materialState.myDislike) ? _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['rated'] : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 55
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.description), __jsx("button", {
    className: "common-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, "Open workbook"))), __jsx("div", {
    className: "content-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab_btns,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: !tab ? _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['tab-btn_active'] : null,
    onClick: () => getLessons(+router.query.materialID),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "Free lessons"), __jsx("button", {
    className: tab ? _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['tab-btn_active'] : null,
    onClick: getPaidLessons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "Buy lessons")), __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab_view,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, lessonsState === null || lessonsState === void 0 ? void 0 : lessonsState.slice(0, lessonsCount).map((item, index) => __jsx(_components_ui_LessonCard_LessonCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lesson: item,
    selectLesson: id => selectLesson(lessonsState.find(item => item.id === id)),
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 84
    }
  }))), (lessonsState === null || lessonsState === void 0 ? void 0 : lessonsState.length) > 6 ? __jsx("button", {
    className: "common-btn",
    onClick: () => lessonsState.length > lessonsCount ? setLessonsCount(lessonsCount + 3) : setLessonsCount(6),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, lessonsState.length > lessonsCount ? 'Show more' : 'Hide') : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Lesson);

/***/ }),

/***/ "./src/store/actions/lessons-actions.ts":
/*!**********************************************!*\
  !*** ./src/store/actions/lessons-actions.ts ***!
  \**********************************************/
/*! exports provided: setLessons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLessons", function() { return setLessons; });
/* harmony import */ var _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/actions-constants.model */ "./src/store/models/actions-constants.model.ts");

const setLessons = action => {
  return {
    type: _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_0__["ActionsConstants"].SET_LESSONS,
    lessons: action
  };
};

/***/ }),

/***/ "./src/store/actions/materials-actions.ts":
/*!************************************************!*\
  !*** ./src/store/actions/materials-actions.ts ***!
  \************************************************/
/*! exports provided: setMaterials, rateMaterialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMaterials", function() { return setMaterials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rateMaterialState", function() { return rateMaterialState; });
/* harmony import */ var _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/actions-constants.model */ "./src/store/models/actions-constants.model.ts");

const setMaterials = action => ({
  type: _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_0__["ActionsConstants"].SET_MATERIALS,
  materials: [...action]
});
const rateMaterialState = action => ({
  type: _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_0__["ActionsConstants"].RATE_MATERIAL,
  id: action.id,
  ratingtype: action.ratingType
});

/***/ }),

/***/ "./src/store/models/actions-constants.model.ts":
/*!*****************************************************!*\
  !*** ./src/store/models/actions-constants.model.ts ***!
  \*****************************************************/
/*! exports provided: ActionsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsConstants", function() { return ActionsConstants; });
const ActionsConstants = {
  SET_LESSONS: 'SET_LESSONS',
  SET_MATERIALS: 'SET_MATERIALS',
  SET_USER: 'SET_USER',
  SET_AVATAR: 'SET_AVATAR',
  RATE_MATERIAL: 'RATE_MATERIAL'
};

/***/ }),

/***/ 3:
/*!*************************************************!*\
  !*** multi ./src/pages/lesson/[materialID].tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Projects\cyberclass\src\pages\lesson\[materialID].tsx */"./src/pages/lesson/[materialID].tsx");


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
//# sourceMappingURL=[materialID].js.map