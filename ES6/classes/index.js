/** -------------------------------------------------
 * ES6
 * super это спец слово указывает на родителя
 */

console.group('ES6 class');

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



console.groupEnd('ES6 class');