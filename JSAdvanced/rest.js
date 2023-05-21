// parameter
// arguments


// function sum(){
//     let total = 0;
//     for(let i = 0; i< arguments.length; i++){
//         total += arguments[i]
//     }
//     return total;
// }

function sum(prefix,value,...rest){
    let total = 0;
    for(let i = 0; i< rest.length; i++){
        total += rest[i]
    }
    return `${prefix}: ${total}`;
}

console.log(sum("total",5,6,7,8,9,8,5,4,43,3,3))