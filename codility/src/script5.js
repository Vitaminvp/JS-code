function solution(A, K) {
    let B = [...A];
    const oneStep = B => [B[B.length-1],...B].slice(0, B.length);
    for(let i=0; i<K; i++) B = [...oneStep(B)];
    return B;
}
console.log("solution", solution([3, 8, 9, 7, 6], 3));