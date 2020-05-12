webpackHotUpdate("static\\development\\pages\\lesson\\[materialID].js",{

/***/ "./src/pages/lesson/[materialID].tsx":
/*!*******************************************!*\
  !*** ./src/pages/lesson/[materialID].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lesson.module.scss */ "./src/pages/lesson/Lesson.module.scss");
/* harmony import */ var _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_LessonCard_LessonCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/LessonCard/LessonCard */ "./src/components/ui/LessonCard/LessonCard.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/checkLoggedIn */ "./src/common/checkLoggedIn.ts");
/* harmony import */ var _api_lessons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/lessons */ "./src/api/lessons.ts");
/* harmony import */ var _store_actions_lessons_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/lessons-actions */ "./src/store/actions/lessons-actions.ts");
/* harmony import */ var _api_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/rating */ "./src/api/rating.ts");
/* harmony import */ var _store_actions_materials_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/materials-actions */ "./src/store/actions/materials-actions.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\lesson\\[materialID].tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var testLessons = [{
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}, {
  name: 'Введение',
  description: 'Мы поделимся лучшими настройками управления, камеры и других игровых параметров'
}];

var Lesson = function Lesson(_ref) {
  var _store$getState$Mater;

  var store = _ref.store;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var materialState = (_store$getState$Mater = store.getState().MaterialsReducer) === null || _store$getState$Mater === void 0 ? void 0 : _store$getState$Mater.find(function (_ref2) {
    var id = _ref2.id;
    return id === +router.query.materialID;
  });
  var lessonsState = store.getState().LessonsReducer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selectedLesson = _useState[0],
      _selectLesson = _useState[1];

  var rateMaterial = function rateMaterial(type) {
    Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__["default"])() && (!materialState.myLike || !materialState.myDislike) ? _api_rating__WEBPACK_IMPORTED_MODULE_7__["RatingAPI"].rateMaterial(+router.query.materialID, type).then(function (response) {
      store.dispatch(rateMater());
      console.log(response);
    })["catch"](function (err) {
      return console.log(err);
    }) : null;
  };

  var getLessons = function getLessons(materialID) {
    (Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__["default"])() ? _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getLessons(materialID) : _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getNotAuthorizeLessons(materialID)).then(function (response) {
      store.dispatch(Object(_store_actions_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["setLessons"])(response.data));

      _selectLesson(response.data[0]);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getCourse = function getCourse() {
    (Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_4__["default"])() ? _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getMaterials() : _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getNotAuthorizeMaterials()).then(function (response) {
      store.dispatch(Object(_store_actions_materials_actions__WEBPACK_IMPORTED_MODULE_8__["setMaterials"])(response.data));
      getLessons(response.data[0].id);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    !materialState ? getCourse() : null;
    lessonsState.length == 0 ? getLessons(+router.query.materialID) : null;
    !selectedLesson ? _selectLesson(lessonsState[0]) : null; // window.location.replace(selectedLesson?.url + '&output=embed')
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['selected-lesson'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, (selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.url) ? __jsx("iframe", {
    src: selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.url,
    allow: "autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture",
    frameBorder: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }) : __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['selected-lesson_preview'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.preview,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: "/static/images/play-circle.svg",
    alt: "",
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['play-icon'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.duration,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.duration, ":00"), __jsx("span", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['duration-line'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['selected-lesson_info'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['heading-row'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/images/fifa20.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }), __jsx("a", {
    href: "",
    className: "transparent-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "Get acess to all cources")), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "0", selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.number, ": ", selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.name), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "\u043E\u0442 mozz \u0438 klenoff"), __jsx("p", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rating,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "Rate this\xA0\xA0\xA0", materialState === null || materialState === void 0 ? void 0 : materialState.likeCount, " ", __jsx("img", {
    src: "/static/images/like.svg",
    alt: "",
    onClick: function onClick() {
      return rateMaterial(0);
    },
    className: (materialState === null || materialState === void 0 ? void 0 : materialState.myLike) ? _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['rated'] : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 52
    }
  }), "\xA0\xA0", materialState === null || materialState === void 0 ? void 0 : materialState.dislikeCount, " ", __jsx("img", {
    src: "/static/images/like.svg",
    alt: "",
    onClick: function onClick() {
      return rateMaterial(1);
    },
    className: (materialState === null || materialState === void 0 ? void 0 : materialState.myDislike) ? _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['rated'] : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 55
    }
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, selectedLesson === null || selectedLesson === void 0 ? void 0 : selectedLesson.description), __jsx("button", {
    className: "common-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, "Open workbook"))), __jsx("div", {
    className: "content-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab_btns,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, "Free lessons"), __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "Buy lessons")), __jsx("div", {
    className: _Lesson_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tab_view,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, lessonsState === null || lessonsState === void 0 ? void 0 : lessonsState.map(function (item, index) {
    return __jsx(_components_ui_LessonCard_LessonCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      lesson: item,
      selectLesson: function selectLesson(id) {
        return _selectLesson(lessonsState.find(function (item) {
          return item.id === id;
        }));
      },
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 61
      }
    });
  })), (lessonsState === null || lessonsState === void 0 ? void 0 : lessonsState.length) > 6 ? __jsx("button", {
    className: "common-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 50
    }
  }, "Show more") : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Lesson);

/***/ })

})
//# sourceMappingURL=[materialID].js.ed565b2d076381e8ffc2.hot-update.js.map