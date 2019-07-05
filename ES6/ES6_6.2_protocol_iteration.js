// ПРОТОКОЛ ИТЕРАЦИЙ
/**
 Протокол итераций представляет собой набор правил, которым должен следовать объект для реализации интерфейса, испольуемого циклами или конструкциями итераций по набору значений объекта
 Спецификация ES6 вводит два новых протокола итераций:
                         ИТЕРАЦИОННЫЙ ПРОТОКОЛ (iterable protocol)
                         ПРОТОКОЛ ИТЕРАТОРА (iterator protocol)
 */
{
 // ПРОТОКОЛ ИТЕРАТОРА
 /**
  Любой объект, реализующий протокол итератора, называется ИТЕРАТОРОМ.
  В соответсвии с протоком итератора, объект должен реализовать метод next(), возвращающий следующий элемент в последовательности групп элементов
  */
let obj = {
    array: [1,2,3,4,5],
    nextIndex: 0,
    next: function(){
      return this.nextIndex < this.array.length ?
        {value: this.array[this.nextIndex++], done: false}:
        {done: true};
    }
}
console.log(obj.next().value); // 1
console.log(obj.next().value); // 2
console.log(obj.next().value); // 3
console.log(obj.next().value); // 4
console.log(obj.next().value); // 5
console.log(obj.next().done); // true
/**
 * каждый раз когда вызывается метод next(), он возвращает объект с двумя свойствами: value и done
 Разберем эти свойства:
    --- свойство done возвращает true, если итератор заончил обход коллекции значений, иначе оно возвращает false
    --- свойство value хранит значение текущего элемента коллекции, оно опускается, когда свойство done возвращает true
 */
}
{
  // ИТЕРАЦИОННЫЙ ПРОТОКОЛ
  /**
   Любой объект, реализующий итерационный протокол, называется ИТЕРИРУЕМЫМ
   Согласно итерационному протоколу, объект должен предоставлять метод @@iterator, то есть, иметь свойство с символьным ключом Symbol.iterator
   Метод @@iterator должен возвращать объект-итератор
   */
   let obj = {
     array: [1,2,3,4,5],
     nextIndex: 0,
     [Symbol.iterator]: function() {
       return {
         array: this.array,
         nextIndex: this.nextIndex,
         next: function() {
           return this.nextIndex < this.array.length ?
           {value: this.array[this.nextIndex++], done: false}:
           {done: true};
         }
       }
     }
   };
   let iterable = obj[Symbol.iterator]();
   console.log(iterable.next().value); // 1
   console.log(iterable.next().value); // 2
   console.log(iterable.next().value); // 3
   console.log(iterable.next().value); // 4
   console.log(iterable.next().value); // 5
   console.log(iterable.next().done); // true
}
