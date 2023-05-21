class Student{
    constructor(fullname, email){
        this.fullname = fullname;
        this.email = email;
    }
    introduction(){
        return `${this.fullname}, ${this.email}`;
    }
    // getEmail(){
    //     return this.email;
    // }
}

Student.prototype.getEmail = function(){
    return this.email;
}

let vinh = new Student("Vinh Bùi", "vinh@gmail.com");
console.log(vinh.introduction())
console.log(vinh.getEmail())

Array.prototype.check = function(){
    
}