function sumFibs(num) {
    const arrFibs = [1];
    for(let i=1; i<= num;){
        arrFibs.push(i);
        i = arrFibs[arrFibs.length-1] + arrFibs[arrFibs.length-2];
    }
    const res = arrFibs.reduce((acc, cur) => (cur%2 !== 0)? acc + cur : acc);
    return res;
}


console.log("sumFibs(10)", sumFibs(10));