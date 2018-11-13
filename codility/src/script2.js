const isIntegerRoot = el => {
    const sqrt = Math.sqrt(el);
    return (sqrt^0) === sqrt ? sqrt : false;
};
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A>B) [A, B] = [B, A];
    let result = 0;
    for(let i=A; i<=B; i++){
        let count = 0;
        let sqrt = isIntegerRoot(i);
        while(sqrt) {
            count++;
            sqrt = isIntegerRoot(sqrt)
        };
        if(count > result) result = count;
    }
    return result;
}
console.log("solution(10, 20)", solution(10, 20));
console.log("solution(6000, 7000)", solution(7000, 6000));