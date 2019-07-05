// url который можно открыть
// name имя вкладки - пусть будет уникально
// некоторые future
// и создается новый window
window.open (url, name, params);  // Открытие вкладок новых

window.open('', 'someWindow');
window.open(url, 'someWindow');
let newWindow = window.open('', 'someWindow');
newWindow.close();                   // Закрытие вкладки  

// в новой вкладке
w = window.open('', 'someWindow', 'resizable=true');
w = window.open('', 'someWindow', 'resizable=true, width=200, height=200');

let div = w.document.createElement('div');
w.document.body.appendChid(div);
w.document.write('<div>Победа!</div>');