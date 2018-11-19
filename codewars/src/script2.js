function solution(str){
    const arr = [];
    if(str.length%2!==0 && str.length !==0) str = str + "_";

    for(let i=0; i<=str.length; i = i+2){
        arr.push(str.substring(0, 2));
        str = str.substr(2, str.length);
        console.log("str", str);
    }
    return arr;
}

console.log("solution('abc')", solution('abc')); // should return ['ab', 'c_']
console.log("solution('abcdef')", solution('abcdef')); // should return ['ab', 'cd', 'ef']