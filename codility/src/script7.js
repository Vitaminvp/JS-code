function solution(arr) {
    const l = arr.length;
    const winterMax = [arr[0]];
    const summerMin = [];
    summerMin[l-1] = arr[l-1];
    for (let i=1; i<l; i++){
        winterMax[i] = Math.max(winterMax[i-1], arr[i]);
        summerMin[l-i-1] = Math.min(summerMin[l-i], arr[l-i-1]);
    }
    console.log("winterMax", winterMax);
    console.log("summerMin", summerMin);
    for(let i=1; i<l; i++){
        if(winterMax[i-1] < summerMin[i]) return i;
    }
}
console.log("solution([5, -2, 3, 8, 6])", solution([5, -2, 3, 8, 6]) === 3);
console.log("solution([-5, -5, -5, -42, 6, 12]", solution([-5, -5, -5, -42, 6, 12]) === 4);
console.log("solution([1, 1, 1, 1, 1, 2])", solution([1, 1, 1, 1, 1, 2]) === 5);
console.log("solution([1, 2, 2, 2, 2, 2])", solution([1, 2, 2, 2, 2, 2]) === 1);