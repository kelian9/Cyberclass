export const pay = (amount, successAction) => {
    var widget = new cp.CloudPayments();
    widget.charge({ // options
            publicId: 'pk_d6ade581f1060d5e657f0d18ebd81',  //id из личного кабинета
            description: 'Пример оплаты (деньги сниматься не будут)', //назначение
            amount: amount, //сумма
            currency: 'RUB', //валюта
            accountId: 'user@example.com', //идентификатор плательщика (необязательно)
            skin: "modern", //дизайн виджета
            // data: {
            //     myProp: 'myProp value' //произвольный набор параметров
            // }
        },
        function (options) { // success
            //действие при успешной оплате
            successAction();
        },
        function (reason, options) { // fail
            //действие при неуспешной оплате
            console.log('Произошла ошибка')
        });
};