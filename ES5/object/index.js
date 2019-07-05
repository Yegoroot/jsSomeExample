// СОЗДАТЬ ОБЪЕКТ
let obj1 = {
    key1: 'value1',
    key2: 'value2', 
    key3: 'value3', 
    old: undefined
}

let keyobj1 = 'key1';

// МЕТОДЫ ОБРАЩЕНИЯ К СВОЙСТВАМ ОБЪЕКТАМ
obj1[keyobj1]; // value1
obj1.key2 ;    // value2

// УДАЛИТЬ СВОЙСТВО 
delete obj1.key2;

// ПЕРЕБРАТЬ ОБЪЕКТ
for(let prop in obj1) {
   obj1[prop];  
}


// МЕТОДЫ

// Object.hasOwnProperty
obj1.hasOwnProperty('old') // true (это свойство есть в объекте)

// Object.keys (статический метод)
/* Статический метод - это метод которого нет в нашем объекте,
 * но он есть в Object */ 
Object.keys(obj1) ; // список свойств
// Object.keys(obj1).forEach( key => console.log (obj1[key]) );


// СРАВНИТЬ ДВА ОБЪЕКТА
// ПРИВИДЕНИЕ ОБЪЕКТОВ К ПРИМИТИВНЫМ ТИПАМ 

let person1 = {
    name: 'Vasya',
    length: 180,
    // valueOf: function () { return this.length}, // старый синтаксис
    valueOf() {
        return this.length
    },
    toString() {
        return this.name
    }
}
let person2 = {
    name: 'Petya',
    length: 200,
    // valueOf() {
    //     return this.length
    // },
    toString() {
        return this.name
    }
}

console.log (person1 > person2);
console.log(person2+'');


