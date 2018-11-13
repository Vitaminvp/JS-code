function solution(arr) {
    let max=0;
    for (let i=0; i<arr.length; i++){
        let j=1;
        let numbers = new Set;
        while( j < arr.length && numbers.size <=2 ) numbers.add(arr[j++])
        max = Math.max(max, j-i-(numbers.size > 2 ? 1 : 0));

    }
    return max;
}
console.log("solution", solution([5, 4, 4, 5, 0, 3, 1]));
console.log("solution", solution([1, 2, 4, 1, 2, 5, 4, 4, 5, 0, 3, 1]));
console.log("solution", solution([1, 2, 4, 1, 2, 5, 4, 4, 5]));