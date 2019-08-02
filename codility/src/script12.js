function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = [...A]
    if(K === arr.length) return arr;
    for(let i=0; i<K; i++){
        let item = arr.pop();
        console.log("item", item);
        arr.unshift(item)
    }
    return arr
}


console.log(solution([3, 8, 9, 7, 6], 3));