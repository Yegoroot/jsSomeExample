// свойство online показывает есть ли у пользователя internet

var connected = navigator.onLine;
connected; // true or false

document.addEventListener('online', ()=> {
    console.log('У вас есть интернет');
});
document.addEventListener('ofline', ()=> {

});