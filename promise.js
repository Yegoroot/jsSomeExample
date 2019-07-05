function delay(ms) {
    return new Promise ((res, rej) =>{
        setTimeout(function(){
            console.log('Resolve');
            res(ms)
        }, ms)
    })
}

const promise = delay(1000)



// ПЕРВЫЙ ПОДХОД

// then только добавляет в очередь
// promise.then( (ms) => {
//         return new Promise ((res, rej) => {
//             setTimeout(function(){
//                 console.log('1 step')
//                 res(ms)
//             }, ms)
            
//         }) 
//     })
// promise.then( () => console.log('2 step') )
// promise.then( (ms) => {
//     return new Promise ((res, rej) => {
//         setTimeout(function(){
//             console.log('3 step')
//             res()
//         }, ms)
//     })
// })
// promise.then( () => console.log('4 step') )



// ВТОРОЙ ПОДХОД

promise.then( (ms) => {
        return new Promise ((res, rej) => {
            setTimeout(function(){
                console.log('1 step')
                res(ms)
            }, ms)
            
        }) 
    })
    .then( () => console.log('2 step') )
    .then( (ms) => {
        return new Promise ((res, rej) => {
            setTimeout(function(){
                console.log('3 step')
                res()
            }, ms)
        })
    })
    .then( () => console.log('4 step') )



// // ПЕРВЫЙ ПОДХОД
// promise.then( ()=> console.log(1) )
// promise.then( ()=> console.log(2) )
// promise.then( ()=> console.log(3) )

// // ВТОРОЙ ПОДХОД
// promise
//     .then( ()=> console.log(1) )
//     .then( ()=> console.log(2) )
//     .then( ()=> console.log(3) )
//     .then( ()=> console.log(4) )