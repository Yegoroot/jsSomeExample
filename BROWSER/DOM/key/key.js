
/* 1) */  window.onload = function() {}


var keys = {
  'W': 87,
  'S': 83,
  'A': 65,
  'D': 68
};

// объект в которой будет храниться значения кода клавишы
var keyDown = {};

// ф-ия которая присваивает кодСимвола нашей переменной
var setKey = function (keyCode){
  keyDown[keyCode] = true;
}

// ф-ия отчищает наш объект
var clearKey = function (keyCode) {
  keyDown[keyCode] = false;
}

// возвращает булевое условие, нажата ли клавиша isKeyDown('КЛАВИША')
var isKeyDown = function (keyName){
  return keyDown[keys[keyName]] == true;
}

var gameEngine = function (){
  if(typeof engine == 'function')
    engine()
  else
    document.body.innerHTML = "Не определена engine";
  requestAnimationFrame(gameEngine);
}

/* 2) */
/* при загрузке window, выполняем ф-ию нажатия */
window.addEventListener('load', function(){
  window.onkeydown = function(event) {
    setKey(event.keyCode);
  };
  gameEngine(); // ВЫПОЛНЯЕМ ФУНКЦИЮ
});

/* когда отжимаем клавишу то отчищаем нашу переменную */
window.onkeyup = function (e) {
  clearKey(e.keyCode);
}


/*
1) вариант затрет все имеющиеся обработчики
2) второй вариант добавит обработчик в конец

*/
//console.log(window)
