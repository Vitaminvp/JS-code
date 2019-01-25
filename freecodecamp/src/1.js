function sumAll(arr) {
    let [first, last] = [...arr];
    let sum = 0;
    if (first > last){
        [first, last] = [last, first];
    }
    for(let i = first; i <= last; i++){
        sum +=i
    }
    return sum;
}

sumAll([1, 4]);