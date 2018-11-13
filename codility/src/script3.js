function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const obj = {};
    N.map(item => {
        if(obj[item]){
        obj[item] = obj[item]+1;
    }else{
        obj[item] = 1;
    }
});
    console.log("obj", obj);
    for(let key in obj){

        if(obj[key] % 2) return key;
    }
    return -1;
}
let A = [9, 3, 9, 3, 9, 7, 9];
let B = [1, 3, 9, 3, 9, 7, 9, 7, 7, 6, 9, 6, 1, 2];


console.log("solution(A)", solution(A));
console.log("solution(B)", solution(B));