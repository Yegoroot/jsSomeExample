function applyVisa (documents) {
    console.log ('Обработка заявления...');
    let promise = new Promise ( (resolve, reject)=>{
        setTimeout(() => {
            Math.random() > .5 ? resolve ({}) : reject ('В визе отказано: нехватка докуметов');
        }, 2000);
    });
    return promise
}

function bookHotel () {
    console.log('Бронируем отель');
}

function buyTicket () {
    console.log('Покупка билетов')
}

applyVisa({})
    .then(visa => console.info ('Виза получена'))
    .then(bookHotel)
    .then(buyTicket)
    .catch(error => console.error(error))