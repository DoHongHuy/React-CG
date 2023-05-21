if(typeof Array.prototype.includes_2 != 'Function'){
    Array.prototype.includes_2 = function(value) {
        for(let i = 0 ; i < this.length; i++){
            if(this[i] == value){
                return true;
            }
        }
        return false;
    }
}


// let numbers = [3,4,6,7,8];
let numbers_2 = [3,41,6,17,8];

console.log(numbers_2.includes_2(41));