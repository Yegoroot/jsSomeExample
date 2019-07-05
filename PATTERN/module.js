console.group('Pattern Module');

/**
 * Используем IIEF чтоб замкнуть приватные данные и в конечном случае вернуть объект
 */


var BasketModule = (function () {

    var sum = 0,
        goods = [];

    return {
        addProduct: function (product) {
            sum += product.price;
            goods.push( product );
        },
        printProducts: function () {
            for (let i = 0; i < goods.length; i++) {
               console.log( goods[i].name, goods[i].price );
            }
        }
    };
}());

var sault = {
    name: "Соль",
    price: "20"
};

BasketModule.addProduct(sault);
BasketModule.printProducts();


console.groupEnd('Pattern Module');