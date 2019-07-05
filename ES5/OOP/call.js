/**
 * ПЕРВЫЙ СЛУЧАЙ *****************************************
 */

let man1 = {
    name: "Сергей",
    getName () {
        return this.name;
    }
};

let man2 = {
    name: 'Андрей'
};

// ВЫЗВАЛИ МЕТОД ПЕРВОГО ОБЪЕКТА С КОНТЕКСТОМ ВТОРОГО
let q = man1.getName.call(man2);


/**
 * ВТОРОЙ СЛУЧАЙ ******************************************
 */

let man1 = { name: "Сергей" },
    man2 = { name: 'Андрей' };

function getName () {
    return this.name;
}

let w = getName.call( man2 );


/**
 * ПЕРЕДАЧА АРГУМЕНТОВ В ФУНКЦИЮ, ВМЕСТЕ С ДРУГИМ КОНТЕКСТОМ
 */

 let o1 = { origin: 100 },
     o2 = { origin: 200 }

function sum () {
    let origin = this.origin;
    
    for (arg of arguments) { // перебераем аргументы
        origin += arg;
    }

    return origin;
}
//__________// первый параметр контекст, потом другие аргументы
let e = sum.call(o1, 1, 2, 3, 4);



