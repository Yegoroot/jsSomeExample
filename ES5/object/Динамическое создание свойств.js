// ДЕСКРИПТОРЫ СВОЙСТВА ОБЪЕКТА
// Object.defineProperty (объект, имя свойства, параметры);

// configurable  // можно ли будет изменить пареметры свойства
// enumerable    // будет ли свойство доступно для оператора for
// value         // значение по умолчанию
// writable      // можно ли перезаписывать значение у свойства
// get           // функция, выполняющаяся при попытке получить значение свойства
// set           // функция, выполняющаяся при попытке установить значение свойства

let obj = {
    name: 'Rahman'
}
Object.defineProperty(obj, 'name', {
    writable: false
})
obj.name = "Malik";
console.log(obj.name); 

Object.defineProperty(obj, 'lastname', {
    value: 'Quddus'
})
obj.lastname = 'Khaliq';
obj.lastname; // Quddus
//  По умолчанию свойства созданные через Object.define...value
//  не перезаписываемые если не указать writable и не читаемые в for
//  (если не указать явно)


var obj2 = {
    name: 'Yegor',
    lastName: 'Kirsanov',
    length: '172'
}
// СТАТИЧНЫЕ МЕТОД (метод класс, а не экземпляра класса)
Object.defineProperty(obj2, 'fullName', {
    configurable: true, // в дальнейшем можно менять параметры дескриптора
    get(){
        return `${this.name} ${this.lastName}`;
    },
    set(value) {
        [this.name, this.lastName] = value.split(' '); // деструктивное присваивание
    
    }
})

console.log(obj2.fullName);
obj2.fullName = 'Иван Петров';
console.log(obj2.fullName);