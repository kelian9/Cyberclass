webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/store/reducers/materials.reducer.ts":
/*!*************************************************!*\
  !*** ./src/store/reducers/materials.reducer.ts ***!
  \*************************************************/
/*! exports provided: MaterialsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsReducer", function() { return MaterialsReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/actions-constants.model */ "./src/store/models/actions-constants.model.ts");


var MaterialsReducer = function MaterialsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_1__["ActionsConstants"].SET_MATERIALS:
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.materials);

    case _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_1__["ActionsConstants"].RATE_MATERIAL:
      return state.map(function (item) {
        if (item.id === action.id) {
          item.likeCount++;
          action.type === 0 ? item.myLike = true : item.myDislike = true;
          return item;
        }

        return item;
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.a89dfd21812efdb39a23.hot-update.js.map