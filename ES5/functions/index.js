/*
 * - ф-ии объявляются и ф-ии вызываются
 * - передаются в них параметры, а внутри они становяться аргументами
 * - начинать ф-ию конструктор с большой буквы
 * - с нижним подчеркиванием приватные или служебные ф-ии которые не нужно вызывать напрямую
 * - ф-ия это тот же объект, только ее еще можно вызвать
 */



// ФУНКЦИЯ ВЫСШЕГО ПОРЯДКА

function filter (arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if ( fn(arr[i]) ) {
            result.push(arr[i]);
        }
    }
    return result
}

function greaterThan (value) { return value > 124 }

let array = [123, 124, 125, 126],
    result = filter(array, greaterThan);

console.log(result)




// РЕКУРСИЯ 

let qq = []; 

function consoleRecFunc (arr) {
    let count = 0;

    function f (arr, count) {

        if ( arr.length > count ) {
           
            console.log(count + '--' + arr[count]);

            qq.push(arr[count]); // qq (лишнее)

            count++;
            f (arr, count);
        }        
    }
    return f (arr, count)
}

let consoleRec = consoleRecFunc(['я', 'умею', 'писать', 'рекурсивные', 'функции']);
console.log(consoleRec);
console.log(qq);


//  IIFE

(function (a, b) {
    console.log(a + b)
})(1, 2);



function calculator (num) {
    return {
        sum: function () {
            let s = num,
                l = arguments.length;
            for (let i = 0; i < l; i++) {
                s = s + arguments[i]  
            }
            return s
        }
        // и Т.Д
    }
}
var a = new calculator (100);
console.log(a.sum(12, 14));



/**
 *  THIS у СТРЕЛОЧНЫХ ФУНКЦИЙ УКАЗЫВАЕТ НА КОНТЕКСТ ГДЕ ОНИ БЫЛИ ВЫЗВАНЫ
 *  У них нет своего arguments и this они его наследуют из той области видимости где были объявленны
 *  НА СТРЕЛОЧНЫЕ Ф-ие не действует call bind apply
 */

 /*
Object
    |-- EventTarget 
    |-- Window
    |-- Document
    |---- Node
    |------ Text
    |------ Comment
    |------ Element
    |-------- Image
    |-------- Script
    |-------- Div
    |-------- *****
    |-------- *****
    |-------- *****
    |-------- *****
*/



