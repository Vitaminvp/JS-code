function uniteUnique(arr) {
    let res = [];
    const arg = Array.from(arguments).reduce((acc, cur) => {
       if(cur instanceof Array) {
           return [...acc,...cur];
       } else {
           return [...acc, cur];
       }
    }, []);
    let numbers = new Set;
    for(let i=0; i <arg.length; i++)
        numbers.add(arg[i]);
    numbers.forEach((value, valueAgain, set) => {
        res.push(value);
    });

    return res;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));