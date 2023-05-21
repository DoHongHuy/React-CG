// pass by value
// let n1 = 5;
// let n2 = n1;
// pass by reference (array, object, function)

// let staffs_1 = ["Ngọc", "Huy", "Phát"];
// let staffs_2 = staffs_1;
// staffs_2[1] = "Thiện";
// console.log(staffs_1)
// console.log(staffs_2)
// let staffs_1 = ["Ngọc", "Huy", "Phát"];
// let staffs_2 = [...staffs_1];
// staffs_2[1] = "Thiện";
// console.log(staffs_1)
// console.log(staffs_2)

let student_1 = {
    name: "Trung",
    age: 18,
    gender: true
}

// let student_2 = student_1;
let student_2 = {
    ...student_1,
    name : "Phú",
    email: "phu@gmail.com"
};

console.log(student_1)
console.log(student_2)