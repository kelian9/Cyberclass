webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ui/Slider/Slider.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/ui/Slider/Slider.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Slider_slider__container__2v40S {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Font colors */\n/* Backgrounds */\n.Slider_slider__1H_mY {\n  margin-top: 40px;\n  position: relative;\n  width: 100%;\n  min-height: 348px;\n  height: auto;\n  transition: 0.5s;\n  overflow: hidden;\n}\n.Slider_slider__container__2v40S {\n  margin-top: 60px;\n  width: 100%;\n  height: auto;\n  justify-content: flex-start;\n  transition: 0.5s;\n}\n.Slider_slider__btnWrap__2L8Tt {\n  display: flex;\n  align-items: center;\n}\n.Slider_slider__btn__1Pyb5 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #FFFFFF;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n  background-color: transparent;\n}\n.Slider_slider__btn__1Pyb5:hover {\n  opacity: 0.7;\n}\n.Slider_slider__btn__1Pyb5 svg {\n  display: block;\n}\n.Slider_slider__btn__1Pyb5 svg path {\n  fill: #FFFFFF;\n}\n.Slider_slider__btnPrev__pb52m {\n  margin-right: 14px;\n}\n.Slider_slider__btnNext__3v5jR {\n  transform: rotateY(180deg);\n}", "",{"version":3,"sources":["C:/Users/User/Projects/cyberclass/src/common/styles/variables.scss","C:/Users/User/Projects/cyberclass/src/components/ui/Slider/Slider.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;ACCJ;;ADSA,gBAAA;AAOA,gBAAA;AClBA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;AAOF;AALE;EACE,gBAAA;EACA,WAAA;EAEA,YAAA;EAEA,2BAAA;EACA,gBAAA;AAKJ;AAFE;EACE,aAAA;EACA,mBAAA;AAIJ;AACE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,gCAAA;EACA,6BAAA;AACJ;AACI;EACE,YAAA;AACN;AAEI;EACE,cAAA;AAAN;AAEM;EACE,aAAA;AAAR;AAII;EACE,kBAAA;AAFN;AAKI;EACE,0BAAA;AAHN","file":"Slider.module.scss","sourcesContent":["%display-flex-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n%display-flex-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n/* Font colors */\r\n$blackColor: #222222;\r\n$greyColor: #AAAAAA;\r\n$menuLinkColor: #EEEEEE;\r\n$purpleColor: #E25AF0;\r\n$limeColor: #75F880;\r\n\r\n/* Backgrounds */\r\n$greenColor: #81FEC6;\r\n$blueColor: #233E63;\r\n// $landingBg: rgba(5, 4, 4, 0.55);\r\n$bodyBackground: #0F1434;\r\n// $authBackground: linear-gradient(0deg, $blueColor -0.07%, $greenColor 100.07%), rgba(236, 236, 236, 0.0001);\r\n// $menuBackgroundColor: linear-gradient(87.89deg, rgba(85, 85, 85, 0.25) 6.05%, rgba(85, 85, 85, 0.0001) 93.67%), #333333;\r\n$menuBackgroundColor: none;\r\n$sidebarBackgroundColor: none;\r\n$menuActiveLink: rgba(218, 243, 247, 0.4);\r\n\r\n\r\n// Animation speed\r\n$preloader-anim-speed: 2s;\r\n\r\n\r\n// Animations\r\n\r\n// @keyframes spot {\r\n//     0% {transform: translateX(0);}\r\n//     30% {transform: translateX(20px);}\r\n//     60% {transform: translateY(20px);}\r\n//     100% {transform: translateY(0)}\r\n// }\r\n\r\n// styles for CssTransition library\r\n// .show-hide-animation-enter {\r\n//     opacity: 0;\r\n//     transform: scale(0.9);\r\n// }\r\n// .show-hide-animation-enter-active {\r\n//     opacity: 1;\r\n//     transform: translateX(0);\r\n//     transition: opacity 300ms, transform 300ms;\r\n// }\r\n// .show-hide-animation-exit {\r\n//     opacity: 1;\r\n// }\r\n// .show-hide-animation-exit-active {\r\n//     opacity: 0;\r\n//     transform: scale(0.9);\r\n//     transition: opacity 300ms, transform 300ms;\r\n// }\r\n",".slider__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n/* Font colors */\n/* Backgrounds */\n.slider {\n  margin-top: 40px;\n  position: relative;\n  width: 100%;\n  min-height: 348px;\n  height: auto;\n  transition: 0.5s;\n  overflow: hidden;\n}\n.slider__container {\n  margin-top: 60px;\n  width: 100%;\n  height: auto;\n  justify-content: flex-start;\n  transition: 0.5s;\n}\n.slider__btnWrap {\n  display: flex;\n  align-items: center;\n}\n.slider__btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #FFFFFF;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n  background-color: transparent;\n}\n.slider__btn:hover {\n  opacity: 0.7;\n}\n.slider__btn svg {\n  display: block;\n}\n.slider__btn svg path {\n  fill: #FFFFFF;\n}\n.slider__btnPrev {\n  margin-right: 14px;\n}\n.slider__btnNext {\n  transform: rotateY(180deg);\n}"]}]);
// Exports
exports.locals = {
	"slider__container": "Slider_slider__container__2v40S",
	"slider": "Slider_slider__1H_mY",
	"slider__btnWrap": "Slider_slider__btnWrap__2L8Tt",
	"slider__btn": "Slider_slider__btn__1Pyb5",
	"slider__btnPrev": "Slider_slider__btnPrev__pb52m",
	"slider__btnNext": "Slider_slider__btnNext__3v5jR"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=main.js.07336c2f2957759251ed.hot-update.js.map