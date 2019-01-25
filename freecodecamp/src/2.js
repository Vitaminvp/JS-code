function diffArray(arr1, arr2) {
    var newArr = [];
    const obj = {};
    const arr12 = [...arr1, ...arr2];
    console.log("arr12", arr12);
    // Same, same; but different.
    arr12.forEach(item => {
        if(obj[item] !== undefined){
        obj[item] += 1;
    }else{
        obj[item] = 0;
    }
});
    console.log("obj", obj);
    for(let key in obj){
        if(obj[key] === 0){
            if(isNaN(key)){
                newArr.push(key);
            }else{
                newArr.push(parseFloat(key));
            }

        }
    }

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));