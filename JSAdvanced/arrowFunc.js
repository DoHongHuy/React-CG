// 1. Function Declareration
sum(10, 5);

function sum(a, b) {
    console.log(a + b);
}

// 2. Function expression
// const substract = function(a, b){
//     console.log(a - b);
// }
// const substract = (a, b) => console.log(a - b)
// substract(10, 5);

// const hello = function(msg){
//     console.log(msg)
// }
// const hello = (msg) => console.log(msg);

// hello("Tiến");

// const slogen = function() {
//     return 'Vu mai dinh';
// }
// const slogen = () => 'Vu mai dinh';

// console.log(slogen())

// 3. Anonymous function / callback function
let numbers = [1, 2, 4];
const process = function (number) {
    return number * 2;
}
// let result = numbers.map(process)
// let result = numbers.map(function (number){
//     return number*2;
// })
let result = numbers.map((number) => number * 2)
console.log(result)

console.log(process(5));

// 4. class
// function Student(fn) {
//     this.fullname = fn;
//     // 5. method
//     this.getFullname = function () {
//         return this.fullname
//     }
// }
class Student {
    constructor(fn){
        this.fullname = fn;
    }
    // 5. method
    getFullname() {
        return this.fullname
    }
}

let sinh = new Student("Sinh Nguyễn");
console.log(sinh.getFullname())
