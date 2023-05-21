// import * as myMath from "./myLib.js";
import power, { sum, times} from "./myLib.js";

// console.log(myMath)
// console.log(myMath.sum(2,3,4,5,6,7,7,7))
// console.log(myMath.times(2,3,4,5,6,7,7,7))
console.log(sum(2,3,4,5,6,7,7,7))
console.log(times(2,3,4,5,6,7,7,7))

// let student = {
//     name: "Khoa",
//     age: 18,
//     sayHello(){
//         return 'Hello everyone'
//     },
//     sum(...rest){
//         let total = 0;
//         for(let i = 0; i< rest.length; i++){
//             total += rest[i]
//         }
    
//         return total;
//     },
//     times(...rest){
//         let total = 1;
//         for(let i = 0; i< rest.length; i++){
//             total *= rest[i]
//         }
    
//         return total;
//     }
// }

// const {sum, times} = student;