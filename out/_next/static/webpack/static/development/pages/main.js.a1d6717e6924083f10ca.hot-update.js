webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./src/pages/main/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/main/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.module.scss */ "./src/pages/main/Main.module.scss");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Main_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_LessonCard_LessonCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/LessonCard/LessonCard */ "./src/components/ui/LessonCard/LessonCard.tsx");
/* harmony import */ var _components_ui_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui/Slider/Slider */ "./src/components/ui/Slider/Slider.tsx");
/* harmony import */ var _components_ui_Comment_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/Comment/Comment */ "./src/components/ui/Comment/Comment.tsx");
/* harmony import */ var _api_lessons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/lessons */ "./src/api/lessons.ts");
/* harmony import */ var _common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/checkLoggedIn */ "./src/common/checkLoggedIn.ts");
/* harmony import */ var _store_actions_materials_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/materials-actions */ "./src/store/actions/materials-actions.ts");
/* harmony import */ var _store_actions_lessons_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/lessons-actions */ "./src/store/actions/lessons-actions.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User\\Projects\\cyberclass\\src\\pages\\main\\index.tsx";


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

var Main = function Main(_ref) {
  var _materialsState$;

  var pageWidth = _ref.pageWidth,
      store = _ref.store;
  var materialsState = store.getState().MaterialsReducer;
  var lessonsState = store.getState().LessonsReducer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      lessonsURL = _useState[0],
      setLessonURL = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      ballShift = _useState2[0],
      changeBallShift = _useState2[1];

  var listener = function listener(e) {
    if (pageYOffset < 600) {
      changeBallShift(pageYOffset / 5);
    }
  };

  var getCourse = function getCourse() {
    (Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_6__["default"])() ? _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getMaterials() : _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getNotAuthorizeMaterials()).then(function (response) {
      store.dispatch(Object(_store_actions_materials_actions__WEBPACK_IMPORTED_MODULE_7__["setMaterials"])(response.data));
      getLessons(response.data[0].id);
      setLessonURL('/lesson/' + response.data[0].id);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getLessons = function getLessons(materialID) {
    (Object(_common_checkLoggedIn__WEBPACK_IMPORTED_MODULE_6__["default"])() ? _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getLessons(materialID) : _api_lessons__WEBPACK_IMPORTED_MODULE_5__["LessonsAPI"].getNotAuthorizeLessons(materialID)).then(function (response) {
      store.dispatch(Object(_store_actions_lessons_actions__WEBPACK_IMPORTED_MODULE_8__["setLessons"])(response.data));
    })["catch"](function (err) {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    !materialsState ? getCourse() : null;
    !lessonsURL && materialsState ? setLessonURL('/lesson/' + materialsState[0].id) : null;
    document.body.scrollTop < 1 ? document.addEventListener('scroll', listener) : document.removeEventListener('scroll', listener);
    return function () {
      document.body.scrollTop > 1 ? document.removeEventListener('scroll', listener) : null;
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, pageWidth > 768 ? __jsx("div", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.headerBg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "static/images/female.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: "static/images/ball.svg",
    alt: "",
    style: {
      right: "".concat(120 + ballShift, "px"),
      transform: "rotate(".concat(-ballShift * 1.5, "deg)")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: "static/images/male.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  })) : null, __jsx("div", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, "Teaches FIFA 20"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "cyberclass: FIFA 20"), __jsx("span", {
    className: "topSeller",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Top seller"), __jsx("img", {
    src: "static/images/fifa20.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "what",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "what__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "what__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, "\u0427\u0415\u041C\u0423 \u0412\u042B \u041D\u0410\u0423\u0427\u0418\u0422\u0415\u0421\u042C?"), __jsx("h3", {
    className: "what__subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "\u0418\u043C\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043E \u044D\u0442\u043E \u043B\u0438\u0448\u044C \u043F\u0435\u0440\u0432\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0438\u0437 5, \u0438 \u043D\u0430\u0447\u043D\u0435\u043C \u043C\u044B \u0441 \u043E\u0441\u043D\u043E\u0432"), __jsx("div", {
    className: "what__group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "what__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "what__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, "\u0423\u041F\u0420\u0410\u0412\u041B\u0415\u041D\u0418\u0415"), __jsx("p", {
    className: "what__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0438\u0433\u0440\u0443 \u043F\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u0438\u0431\u0435\u0440\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u043E\u0432")), __jsx("div", {
    className: "what__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "what__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, "\u0438\u0433\u0440\u0430 \u0432\u0440\u0430\u0442\u0430\u0440\u0451\u043C"), __jsx("p", {
    className: "what__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0444\u0438\u0448\u043A\u0438 \u0438\u0433\u0440\u044B \u0432\u0440\u0430\u0442\u0430\u0440\u0435\u043C. \u041C\u044B \u043D\u0430\u0443\u0447\u0438\u043C \u043E\u0442\u0431\u0438\u0432\u0430\u0442\u044C \u0434\u0430\u0436\u0435 \u201C\u043C\u0451\u0440\u0442\u0432\u044B\u0435\u201D \u0443\u0434\u0430\u0440\u044B!")), __jsx("div", {
    className: "what__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "what__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, "\u0441\u0445\u0435\u043C\u044B"), __jsx("p", {
    className: "what__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }, "\u0421\u0430\u043C\u044B\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 FIFA 20 \u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u0447\u0451\u0442\u0430")), __jsx("div", {
    className: "what__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "what__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, "\u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u0433\u0440\u043E\u043A\u0430\u043C"), __jsx("p", {
    className: "what__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, "\u041A\u0430\u0436\u0434\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442. \u0418 \u0442\u044B \u0443\u0437\u043D\u0430\u0435\u0448\u044C, \u043A\u0430\u043A \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0430 \u043D\u0430 100%")), __jsx("div", {
    className: "what__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "what__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, "\u0437\u0430\u0449\u0438\u0442\u0430"), __jsx("p", {
    className: "what__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, "\u041F\u043E\u0434\u0431\u043E\u0440 \u043B\u0443\u0447\u0448\u0438\u0445 \u0437\u0430\u0449\u0438\u0442\u043D\u0438\u043A\u043E\u0432 \u0438 \u0440\u0430\u0437\u0431\u043E\u0440 \u0441\u0430\u043C\u044B\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0442\u0430\u043A\u0442\u0438\u043A \u043F\u0440\u0438 \u043E\u0431\u043E\u0440\u043E\u043D\u0435")), __jsx("div", {
    className: "what__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "what__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 29
    }
  }, "\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043C\u044F\u0447\u0430"), __jsx("p", {
    className: "what__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, "\u0412\u043B\u0430\u0434\u0435\u043D\u0438\u0435 = \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434 \u0438\u0433\u0440\u043E\u0439, \u0434\u0430\u0436\u0435 \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u043F\u0440\u0435\u0441\u0441\u0438\u043D\u0433\u0435 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430")))), __jsx("div", {
    className: "what__buy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "what__price-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "what__price-finish",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, "599\u20BD"), __jsx("span", {
    className: "what__price-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, "999\u20BD"), __jsx("span", {
    className: "what__price-sale",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, "Save 40%")), __jsx("div", {
    className: "what__offer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, "SPECIAL OFFER"), __jsx("div", {
    className: "what__btn-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    className: "what__btn common-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, "Buy course ($", materialsState && ((_materialsState$ = materialsState[0]) === null || _materialsState$ === void 0 ? void 0 : _materialsState$.price), ".00)"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: lessonsURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "what__btn transparent-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, "Watch free episodes"))), __jsx("span", {
    className: "what__guard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, "Satisfaction guaranteed"))), __jsx("div", {
    className: "content-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "course",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "course__wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "course__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, "\u041E\u0411\u0423\u0427\u0415\u041D\u0418\u0415 \u041E\u0422 \u041B\u0423\u0427\u0428\u0418\u0425 \u2013 \u044D\u0442\u043E:"), __jsx("div", {
    className: "course__group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "course__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "course__block-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "/static/images/course/1.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 37
    }
  })), __jsx("h4", {
    className: "course__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, "\u041D\u0410\u0421\u0422\u0420\u0410\u0418\u0412\u0410\u0422\u042C \u0418\u0413\u0420\u0423 \u041A\u0410\u041A \u041F\u0420\u041E"), __jsx("p", {
    className: "course__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043B\u0443\u0447\u0448\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0438 \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0443 \u0438\u0433\u0440\u044B")), __jsx("div", {
    className: "course__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "course__block-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "/static/images/course/2.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  })), __jsx("h4", {
    className: "course__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, "\u0418\u0413\u0420\u0410\u0422\u042C \u0412 \u0417\u0410\u0429\u0418\u0422\u0415 \u041A\u0410\u041A \u041F\u0420\u041E"), __jsx("p", {
    className: "course__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 33
    }
  }, "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0438\u0433\u0440\u0430 \u0432 \u043E\u0431\u043E\u0440\u043E\u043D\u0435 \u2013 \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u043F\u043E\u0431\u0435\u0434!")), __jsx("div", {
    className: "course__block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "course__block-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "/static/images/course/3.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 37
    }
  })), __jsx("h4", {
    className: "course__block-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 33
    }
  }, "\u0412\u041E\u0417\u041C\u041E\u0416\u041D\u041E\u0421\u0422\u042C \u0421\u0422\u0410\u0422\u042C \u041F\u0420\u041E"), __jsx("p", {
    className: "course__block-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 33
    }
  }, "\u041D\u0430\u0448 \u043A\u0443\u0440\u0441 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u043B\u0443\u0447\u0448\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435!"))), __jsx("div", {
    className: "course__desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "course__desc-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430"), __jsx("p", {
    className: "course__desc-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }, "\u0421\u0430\u043C\u044B\u0439 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u043A\u0438\u0431\u0435\u0440\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D \u0420\u043E\u0441\u0441\u0438\u0438 \u0410\u043D\u0442\u043E\u043D \u041A\u043B\u0435\u043D\u043E\u0432 [KLENOFF] \u0438 \u043B\u0443\u0447\u0448\u0438\u0439 \u0430\u0432\u0442\u043E\u0440 \u0433\u0430\u0439\u0434\u043E\u0432 \u043F\u043E FIFA \u0410\u0440\u0442\u0451\u043C \u041A\u0440\u0430\u0441\u0443\u043B\u0438\u043D [MOZZ] \u043F\u043E\u0434\u0435\u043B\u044F\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0441\u0430\u043C\u043E\u0439 \u0446\u0435\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0438 \u0444\u0438\u0448\u043A\u0430\u043C\u0438 \u043F\u043E \u0424\u0418\u0424\u0410. \u041C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0438\u0433\u0440\u0443, \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043D\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0438 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0432 \u0437\u0430\u0449\u0438\u0442\u0435, \u043F\u0440\u0438 \u0438\u0433\u0440\u0435 \u0432\u0440\u0430\u0442\u0430\u0440\u0451\u043C, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B \u043F\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u043C\u044F\u0447\u0430.")))), __jsx("div", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.firstPart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, "\u0427\u0422\u041E \u0412\u0410\u0421 \u0416\u0414\u0415\u0422 \u0412 \u041F\u0415\u0420\u0412\u041E\u0419 \u0427\u0410\u0421\u0422\u0418?"), __jsx("div", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }, lessonsState === null || lessonsState === void 0 ? void 0 : lessonsState.map(function (item, index) {
    return __jsx(_components_ui_LessonCard_LessonCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      lesson: item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 62
      }
    });
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: lessonsURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "common-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, "Show more"))), __jsx(_components_ui_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (item) {
    return __jsx(_components_ui_Comment_Comment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      comment: item,
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 55
      }
    });
  })), __jsx(_components_ui_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, testLessons.map(function (item, index) {
    return __jsx(_components_ui_LessonCard_LessonCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      lesson: item,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 72
      }
    });
  }))), __jsx("div", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ready,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ready__wrap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ready__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }, "\u0413\u041E\u0422\u041E\u0412 \u041D\u0410\u0427\u0410\u0422\u042C?"), __jsx("h3", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ready__subtitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, "\u0423\u0427\u0418\u0421\u042C \u0423 \u041B\u0423\u0427\u0428\u0418\u0425 \u0412 \u041C\u0418\u0420\u0415!"), __jsx("div", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ready__icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/images/fifa20.svg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: "#",
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ready__btn + ' common-btn',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }, "Get started"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=main.js.a1d6717e6924083f10ca.hot-update.js.map