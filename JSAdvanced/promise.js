// Async: đông bộ, tuần tự
// b1. Province
// b2. District
// b3. ward

// Rút tiền trong ATM
// b1. trả tiền cho người rút: 3 dvtg (done)
// b2. email notify: 2 dvtg (done)
// b3. mobile notify: 2 dvtg (done)

// setTimeout(function () {
//     console.log("1");
// }, 2 * 1000)
// setTimeout(function () {
//     console.log("2");
// }, 1 * 1000)

// setTimeout(function () {
//     console.log("1");
//     setTimeout(function () {
//         console.log("2");
//     }, 1 * 1000)
// }, 2 * 1000)

// promise chain
const promise = new Promise(
    function executor(resolve, reject){
        // logic -> return resolve hay reject
        let number = 10;
        if(number >= 10){
            return resolve(1);
        }
            
        return reject("404 Not found");
    }
)

promise
    .then(function(data){
        console.log(data);
        return ++data;
    })
    .then(function(data){
        console.log(data);
        return ++data;
    })
    .then(function(data){
        console.log(data);
        return ++data;
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("Done");
    })