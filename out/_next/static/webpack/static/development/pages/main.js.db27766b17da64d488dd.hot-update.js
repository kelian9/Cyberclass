webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./src/store/actions/materials-actions.ts":
/*!************************************************!*\
  !*** ./src/store/actions/materials-actions.ts ***!
  \************************************************/
/*! exports provided: setMaterials, rateMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMaterials", function() { return setMaterials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rateMaterial", function() { return rateMaterial; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/actions-constants.model */ "./src/store/models/actions-constants.model.ts");


var setMaterials = function setMaterials(action) {
  return {
    type: _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_1__["ActionsConstants"].SET_MATERIALS,
    materials: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action)
  };
};
var rateMaterial = function rateMaterial(action) {
  return {
    type: _models_actions_constants_model__WEBPACK_IMPORTED_MODULE_1__["ActionsConstants"].SET_MATERIALS,
    id: action.id,
    ratingtype: action.ratingType
  };
};

/***/ })

})
//# sourceMappingURL=main.js.db27766b17da64d488dd.hot-update.js.map