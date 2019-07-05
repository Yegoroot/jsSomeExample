function div (a, b) {
    try {
        if ( b == 0 ) {
            throw new Error('На ноль нельзя делить');
        }
    
        if ( b < 0 ) {
            throw new Error('Делитель должен быть положительным');
        }
        
        return a / b
        
    } catch (e) {
        
        console.error(e.message);
        return 0

    } finally {

        // этот код нужен для того чтоб его выполнить при любом исходе
        // (то есть исключения или нет неважно)
        console.log('FINALLY Опперация завершена');
    }
}


var q = div(10, -10);
console.log(q+100)
