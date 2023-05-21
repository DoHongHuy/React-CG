// Export: nhiều lần
// Export Default: trong 1 file js chỉ được export default 1 lần

export function sum(...rest){
    let total = 0;
    for(let i = 0; i< rest.length; i++){
        total += rest[i]
    }

    return total;
}
export function times(...rest){
    let total = 1;
    for(let i = 0; i< rest.length; i++){
        total *= rest[i]
    }

    return total;
}

function power(n, k){
    let total = 1;
    for(let i = 0; i < k ; i++){
        total *= n;
    }
    return total;
}

export default power;