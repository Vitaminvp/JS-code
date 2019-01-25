function destroyer(arr) {
    const [first, ...rest] = [...arguments];
    const newArr = [];
    first.forEach(item => {
        if(rest.every(el => el !== item))
            newArr.push(item);
    });
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));