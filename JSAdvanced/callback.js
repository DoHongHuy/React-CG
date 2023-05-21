// 1. phải là 1 function
// 2. function phải được truyền vào 1 function khác thông qua agrument
// 3. function này phải được thực thi

// function callback(n1, n2){
//     return n1 + n2;
// }

// function calback_2(n1, n2){
//     return n1 * n2;
// }
// function useCallback(){
//     console.log(callback(10, 20)) //calback(10, 20)
// }

// useCallback()

// function useCallback(param){
//     // logic
//     console.log(param(10, 20)) //calback(10, 20)
// }


// useCallback(function (n1, n2){
//     return n1 - n2;
// })
// useCallback(calback_2)

let numbers = [3, 6, 7, 8, 89, 4];
function process_1(n){
    return n * 2;
}
let result_1 = numbers.map(process_1)
let result_2 = numbers.map(function(n){
    return n ** 2;
})
console.log(result_1);
console.log(result_2);
// function times2(array){
//     let result = []
//     for(let n of array){
//         result.push(n * 2);
//     }
//     return result
// }

// let result = times2(numbers);
// console.log(result)