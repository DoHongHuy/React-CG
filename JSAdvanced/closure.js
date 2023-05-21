// function increment(){
//     let count = 0;
//     function setCount(){
//         return ++count;
//     }
//     return setCount;
// }

// let appCount = increment();
// console.log(appCount());
// console.log(appCount());
// console.log(appCount());

// let appCount_1 = increment();
// console.log(appCount_1());
// console.log(appCount_1());
// console.log(appCount_1());

// let staffs = ["Vũ", "Huy"];

// const app = {
//     addStaff(name){
//         staffs.push(name);
//     },
//     getStaffByPos(pos){
//         return staffs[pos]
//     },
//     getStaff(){
//         return staffs;
//     },
//     removeStaff(pos){
//         staffs.splice(pos,1);
//     }
// }

// console.log(app.getStaff())
// app.addStaff("Thiện");
// console.log(app.getStaff());
// staffs = [];
// app.removeStaff(1)
// console.log(app.getStaff());

function appStaff() {
    const staffs = ["Vũ", "Huy"];

    return {
        addStaff(name) {
            staffs.push(name);
        },
        getStaffByPos(pos) {
            return staffs[pos]
        },
        getStaff() {
            return staffs;
        },
        removeStaff(pos) {
            staffs.splice(pos, 1);
        }
    }
}

let app = appStaff();
console.log(app.getStaff())
app.addStaff("Thiện");
console.log(app.getStaff());
staffs = [];
app.removeStaff(1)
console.log(app.getStaff());