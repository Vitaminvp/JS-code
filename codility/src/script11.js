function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = A.sort((a,b)=> a-b);
    console.log("arr: ", arr);
    let res = arr[0];
    for(let i=0; i<arr.length; i=i+2){
        if(arr[i] !== arr[i+1]){
            return arr[i];
        }
    }
    return res;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));