
// 3 Подписываемся на изминения из View
var Presenter = function(view) {
    view.on('firstName', function(newValue) {
        //какие-то действия...
        view.changeFirstName(newValue);
    });

    view.on('lastName', function(newValue) {
        //какие-то действия...
        view.changeLastName(newValue);
    });

    view.on('old', function(newValue) {
        //какие-то действия...
        view.changeOld(newValue);
    });

    view.on('town', function(newValue) {
        //какие-то действия...
        view.changeTown(newValue);
    });
};

/**
 * Одна из задач View м этой моделе - сообщать об изминениях в файлах 
 */
var View = function() {
    var that = this;

    this.handlers = {};

    // 2 (ядро)  сообoаем об изминениях файлов и как изминились ()
    // подписываемся на событие input, вызываем триггер с спараметрами (кто_изменился, новое_значение)
    document.addEventListener('input', function(e) {
        that.trigger(e.target.id, e.target.value)
    });
};

View.prototype.on = function(event, fn) {
    this.handlers[event] = this.handlers[event] || [];

    if (this.handlers[event].indexOf(fn) === -1) {
        this.handlers[event].push(fn);
    }
};

// ТРИГГЕР САМ РАЗРУЛИВАЕТ КАКОЙ ОБРАБОТЧИК ВЫЗВАТЬ
View.prototype.trigger = function(event) {
    if (this.handlers[event]) {
        var args = Array.prototype.slice.call(arguments, 1);

        this.handlers[event].forEach(function(fn) {
            fn.apply(null, args);
        });
    }
};

View.prototype.changeFirstName = function(value) {
    firstNameText.innerText = value;
};

View.prototype.changeLastName = function(value) {
    lastNameText.innerText = value;
};

View.prototype.changeOld = function(value) {
    oldText.innerText = value;
};

View.prototype.changeTown = function(value) {
    townText.innerText = value;
};


// 1
// вызываем new View
new Presenter(new View()); // тут мы говорим Presenter c чем работать
