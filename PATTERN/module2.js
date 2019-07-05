// ПАТТЕРН МОДУЛЬ
// инкапсуляция
// Скрываем детали реализации

let Counter = function() {
    let c = 0;

    return {
        inc() {
            c++;
        },
        current () {
            return c
        }
    };
};

let myCounter = Counter();

myCounter.inc(); // c++ 1
myCounter.inc(); // c++ 2
myCounter.inc(); // c++ 3
console.log( myCounter.current() ); // 3

let myCounter2 = Counter();

myCounte2r.inc(); // c++ 1
console.log( myCounter2.current() ); // 1