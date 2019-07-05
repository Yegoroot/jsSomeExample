{
  // ES6 стандартезирует свойство __proto__
  // объектов и добавляет новые свойства в глобальный объект Object

  // Свойства __proto__
  /*
    Каждый объект в JavaScript имеет внутреннее свойство [[prototype]]
    ( не перепеутать со свойством объекта prototype )
    со ссылкой на прототип объекта, то есть на наследуемый объект.
    Прочитать это можно с помощью метода Object.getPrototypeOf(), а, чтобы
    создать новый объект с заданным прототипом, следует использовать
    метод Object.create(). Свойство [[prototype]] объекта нельзя прочитать или
    изменить непосредственно

    Наследование в javaScript выглядит громоздким, из за особенностей свойства
    [[prototype]], поэтому некоторые браузеры добавляют специальное свойство __proto__
    обеспечивающее доступ к внгутреннему свойству [[prototype]] и упращают работу
    с прототипоми. Свойство __proto__ не было стандартизированно в спецификации Es5
    но из за его популярности это было сделано в спецификации ES6
  */

  // ES5
  var x = {x: 12};
  var y = Object.create(x, {y: {value: 13}});
  console.log(y.x); // 12
  console.log(y.y); // 13
  var animal = {
    eats: true
  };
// из статьи https://learn.javascript.ru/prototype
  var rabbit = {
    jumps: true,
    __proto__: animal
  };
  console.log( rabbit.hasOwnProperty('jumps') ); // true: jumps принадлежит rabbit
  console.log( rabbit.hasOwnProperty('eats') ); // false: eats не принадлежит

  // ES6
  let a = {a:12, __proto__: {b: 13}};
  console.log(a.a); //12
  console.log(a.b); //13
}
{
  // Метод Object.is(value1, value2)
  /*
    Метод Object.is() проверяет равенство двух значений. Он похож
    на оператор ===, но имеет некоторые особенности
  */
  console.log(Object.is(0, -1)); // false
  console.log(0 === -0); // true
  console.log(Object.is(NaN, 0/0)); // false
  console.log(NaN === 0/0); // true
  console.log(Object.is(NaN, NaN)); // true
  console.log(NaN === NaN); // false
}
{
  // Meтод Object.setPrototypeOf(object, prototype)
  /*
    Метод Object.setPrototypeOf() - это всего лишь еще один способ присваивания
    значения свойству [[prototype]].
  */
  let x = {x: 12};
  let y = {y: 13};
  Object.setPrototypeOf(y,x);
  console.log(y.x); // 12
  console.log(y.y); // 13

}
