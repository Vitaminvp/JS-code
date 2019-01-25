function dropElements(arr, func) {
    // Drop them elements.
    let arr2 = [...arr];
    for (let i=0; i<arr.length; i++){
        if(func(arr[i])) break;
        arr2.shift();
    }
    return arr2;
}

//console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []