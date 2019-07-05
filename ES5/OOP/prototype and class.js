/**
 *  КОНСТРУКТОР ОБЪЕКТОВ
 */

 /** ------------------------------------------------------------
  * БЫЛО (грязный способ)
  */

function Counter (initial) {
    this.counter = initial;
    this.inc = function () {
        this.counter++;
    };
    this.dec = function () {
        this.counter--;
    };
    this.reset = function () {
        this.counter = initial;
    };
}

let c1 = new Counter(100);
let c2 = new Counter(200);

c1.inc();
c1.inc();
c1.reset();
c1.inc();
c1.inc();
c1.inc(); // 105



/**--------------------------------------------------------------
 * 
 * СТАЛО
 */

function Counter (initial) {
    this.counter = initial;
    this.initial = initial;
};
// Методы лучше выносить в прототип
Counter.prototype.inc = function () {
    this.counter++
};
Counter.prototype.dec = function () {
    this.counter--
};
Counter.prototype.reset = function () {
    this.counter = this.initial;
};

let c1 = new Counter(100);
let c2 = new Counter(200);

c1.inc();
c1.inc();
c1.reset();
c1.inc();
c1.inc();
c1.inc(); // 103



/** -------------------------------------------------------
 * 
 * ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ
 * 
 * В конструкторе методы добавляются при каждом создании экземпляра
 * а в прототипе методы храняться всегда 
 * 
 * Добавлять методы в конструктор или в прототип решать тебе
 */

 // Изначальное положение 

function Counter (initial) {
    this.counter = initial;
    //
    //
    //
    // много 
    // переменных
    // и  методов
    //
};

Counter.prototype.inc = function () {
    this.counter++
};
Counter.prototype.dec = function () {
    this.counter--
};

        // МАНИПУЛЯЦИИ С ПРОТОТИПНЫМ НАСЛЕДОВАНИЕМ

        // ДРУГАЯ вот такая сущьность
        function ResetableCounter (initial) {
            // Вызвали конструктор Counter в контексте текущего объекта (который создается)
            Counter.call(this, initial);
            //
            // И расширили 
            // Конструктор родителя
            this.initial = initial;
        };

        /**
         * 1) Унаследовать прототип при помощи Object.create
         * 2) РАсширить прототип
         * 3) Расширить конструктор
         * // ДЕЛАЕМ НАСЛЕДОВАНИЕ ТОЛЬКО ТАМ ГДЕ НУЖНО РАСШИРИТЬ ПРОТОТИП ИЛИ КОНСТРУКТОР
         */

        // НАСЛЕДУЕМ ПРОТОТИП Counter.prototype в ResitableCounter.prototype 
        // Object.create ДЕЛАЕМ НАСЛЕДОВАНИЕ
        ResetableCounter.prototype = Object.create(Counter.prototype);

        ResetableCounter.prototype.reset = function() {
            this.counter = this.initial;
        };

        // РАсширяем метод
        ResetableCounter.prototype.dec = function() {
            Counter.prototype.dec.call(this)
            console.log('Уменьшили');
        };


let c1 = new ResetableCounter(100);
c1.inc();
c1.inc();
c1.reset();
c1.dec();
c1.inc();
c1.inc(); // 103



/** -------------------------------------------------
 * 
 * ES6
 * super это спец слово указывает на родителя
 */

 // КОНСТРУКТОР РОДИТЕЛЯ
 class Counter {
     constructor (initial) {
        this.counter = initial;
     }
     inc() {
         this.counter++;
     }
     dec() {
         this.counter--;
     }
 }

 // НАШ СОБСТВЕННЫЙ КЛАСС
 class ResetableCounter extends Counter {
     constructor (initial) {
         // ВЫЗЫВАЕМ КОНСТРУКТОР РОДИТЕЛЯ И ПЕРЕДАЕМ ТУДА initial
         super(initial);
         // расширяем свой собственный конструктор
         this.initial = initial;
     }
     reset () {
         this.counter = this.initial;
     }
     static met () {
         // ***
     }
     dec() {
         super.dec();
         console.log('Расширили этот метод');
     }
 }

 let c1 = new ResetableCounter(100);

 c1.inc(); 
 c1.inc();
 c1.inc(); 
 c1.dec(); 