// ГЕНЕРАТОРЫ

/**
 Функция-генератор похожа на обычную функцию, но возвращает не одно значение, а несколько значений по одному. При вызове функция-генератор выполняет код в своем теле не весь сразу, а возвращает новый экземпляр объекта-генератора
 Каждый объект-генератор содержит новый исполняемый контекст функции-генератора. Когда вызывается метод next() объекта-генератора, он выполняет тело функции-генератора до ключевого слова yield.
 Это ключевое слово yield возвращает значение и приостанавливает фукцию. Когда метод next() вызывается снова, функция возобнавляет выполнение и возвращает следующее значение
 Свойство done получает значение true, когда функция-генератор вернет все значения
 Определяется с помощью слова function*
 */
 {
   function* generator_function(){
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
   }

let generation = generation_function();
console.log(generation.next().value); // 1
console.log(generation.next().value); // 2
console.log(generation.next().value); // 3
console.log(generation.next().value); // 4
console.log(generation.next().value); // 5
console.log(generation.next().done); // true

let generation2 = generation[Symbol.iterator]();
console.log(generation.next().value); // 1
console.log(generation.next().value); // 2
console.log(generation.next().value); // 3
console.log(generation.next().value); //4
console.log(generation.next().value); //5
console.log(generation.next().done); // true
}
/**
 За ключевым словом yield следует выражение Значение этого выражения возвращется функцией генератором с помощью итерационного протокола
 Если опутить выражение, функция вернет undefined. Значение выражения называется значением выдачи.
 Метод next() принимает один необязательный аргумент. Этот аргумент становиться значением возвращаемым оператором yield который приостоновил функцию генератор. Следующий пример демонстрирует это
 */
 {
   function* generator_function() {
     var a = yield 12;
     var b = yield a + 1;
     var c = yield b + 2;
     yield c + 3;
   }
   var generator = generator_function();
   console.log(generator.next().value); // 12
   console.log(generator.next(5).value); //6
   console.log(generator.next(11).value); // 13
   console.log(generator.next(78).value); //81
   console.log(generator.next().done); // true
 }
{
  /**
   * Метод return (value)
   Выполнение ф-ии генератора можно завершить в любой момент, до того, как она вернет все значения, вызвав метод return() объекта генератора
   Метод return() принимает необязательный аргумент с последним возвращаемым значением.
   */
   function* generator_function(){
     yield 1;
     yield 2;
     yield 3;
   }
   var generator = generator_function();
   console.log(generator.next().value) ; // 1
   console.log(generator.return(22).value) ; // 22
   console.log(generator.next().done) ; // true
}
{
  /**
   * Метод throw(exception)
   внутри ф-ии генератора можно вручную вызвать исключение с помощью метода throw() объекта-генератора.
   Методу throw(), при этом, следует передать исключение, которое требуется возбудить
   */

     function* generator_function(){
       try
      {
        yield 1;
       }
       catch (e) {
         console.log("1st Exception");
       }
       try {
         yield 2;
       }
       catch(e)
       {
         console.log("2st Exception");
       }
     }

     var generator = generator_function();
     console.log(generator.next().value); // 1
     console.log(generator.throw("exception string").value); // 1st Exception
     console.log(generator.next().value); // 2
     console.log(generator.throw("exception string").done); // 2st Exception
    /**
     * в примере видно, что исключение возбуждается в месте, где функция была приостановлена в последний раз. После обработки исключения, метод throw() продолжил выполение и вернул слудующее значение для выдачи
     */
}
{
  // Ключевое слово yield* внутри функции-генератора принимат итерируемый объект и выполняет итерации по нему, возвращая полученные из него значения
  function* generator_function_1(){
    yield 2;
    yield 3;
  }
  function* generator_function_2(){
    yield 1;
    yield* generator_function_1();
    yield* [4,5];
  }
  var generator = generator_function_2();
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
  console.log(generator.next().value); // 3
  console.log(generator.next().value); // 4
  console.log(generator.next().value); // 5
  console.log(generator.next().done); // true
}
{
  // ЦИКЛЫ for...of
  /**
   * До сих пор мы переберила значения методом next() что является трудоемкой задачей
     в спецификацию ES6 введен цикл for...of для облегчения этой задачи
     Цикл for...of был добавлен для обхода значений итерируемого объекта. */
    function* generation_function(){
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    }
    let arr = [1,2,3];
    for (let value of generation_function() ){
      console.log(value);
    }
    //1
    //2
    //3
    //4
    //5
    for (let value of arr){
      console.log(value);
    }
    //1
    //2
    //3
}


/**
 * Далее в книге сказано о ОПТИМИЗАЦИЯ ХВОСТОВОГО ВЫЗОВА
 Если мы работает с уровнем вложенности функций более тысячи то следует оптимизировать хвостовой вызов
 Хвостовым вызовом (tail call) является вызов функции, осуществляемый в самом конце функции оператором return.
 Если хвостовой вызов ведет в ту же самую функцию снова и снова, он называется хвостовой рекурсией (tail-recursion), которая является частным случаем рекрсии
 Особенность хвостового вызова в том, что есть возможность избежать дополнительных расходов процессорного времени и памяти за счет повторного использования существующего кадра стека функции вместо создании нового.
 Повторное использование кадра стека при хвостовом вызове называется оптимизацией хвостового вызова
 */
 {
   "use strict";

   function _add(x,y)
     {
       return x+y;
     }
   function add(x,y)
     {
       x = parseInt(x);
       y = parseInt(y);
       var result = _add(x,y);
       return result;
     }
     console.log(add(1, '1'));
 }
 // сдесь вызов ф-ии _add() не является хвостовым, поэтому было создано два кадра в стеке вызовов

function add (x, y) {
  x = parseInt (x);
  y = parseInt (y);
  return _add(x, y);
}
