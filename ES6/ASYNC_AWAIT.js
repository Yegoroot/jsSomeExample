

function delay(ms) {
        return new Promise ((res, rej) =>{
        setTimeout(function(){
            res(ms)
        }, ms)
    })
}

async function fn() {
    console.log('before')
    await delay(1000)
    console.log('Любой асинхронный код 1');
    setTimeout(function(){console.log('log')}, 1000)
    await delay(1000)
    console.log('Любой асинхронный код 2');
    await delay(1000)
    console.log('after')
}

// function delay(ms) {
//     return new Promise ((res, rej) =>{
//         setTimeout(function(){
//             res(Math.random())
//         }, ms)
//     })
// }

// async function fn() {
//     const r = await delay(1000)
//     console.log(r)
// }

// fn()
// fn()