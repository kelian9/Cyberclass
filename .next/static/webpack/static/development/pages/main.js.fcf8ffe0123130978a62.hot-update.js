webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./src/pages/main/cloudpayments.js":
/*!*****************************************!*\
  !*** ./src/pages/main/cloudpayments.js ***!
  \*****************************************/
/*! exports provided: pay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay", function() { return pay; });
var pay = function pay(amount, successAction) {
  var widget = new cp.CloudPayments();
  widget.charge({
    // options
    publicId: 'pk_d6ade581f1060d5e657f0d18ebd81',
    //id из личного кабинета
    description: 'Пример оплаты (деньги сниматься не будут)',
    //назначение
    amount: amount,
    //сумма
    currency: 'RUB',
    //валюта
    accountId: 'user@example.com',
    //идентификатор плательщика (необязательно)
    skin: "modern" //дизайн виджета
    // data: {
    //     myProp: 'myProp value' //произвольный набор параметров
    // }

  }, function (options) {
    // success
    //действие при успешной оплате
    successAction();
  }, function (reason, options) {
    // fail
    //действие при неуспешной оплате
    console.log('Произошла ошибка');
  });
};

/***/ })

})
//# sourceMappingURL=main.js.fcf8ffe0123130978a62.hot-update.js.map