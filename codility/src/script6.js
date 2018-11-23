function solution(arr) {
    let max=0;
    for (let i=0; i<arr.length; i++){
        let j=i;
        let numbers = new Set;
        while( j < arr.length && numbers.size <=2 ) numbers.add(arr[j++]);
        // console.log("number", numbers);
        max = Math.max(max, j-i-(numbers.size > 2 ? 1 : 0));
        // console.log("max", max);

    }
    return max;
}
// function solution(arr) {
//     let max=0;
//     for (let i=0; i<arr.length; i++){
//         let j=i+1;
//         let numbers = new Set;
//         numbers.add(arr[i]);
//         while( j < arr.length && numbers.size < 2 ) numbers.add(arr[j++]);
//         console.log("number", numbers);
//         max = Math.max(max, j-i+1);
//         console.log("max", max);
//
//     }
//     return max;
// }
console.log("solution", solution([5, 4, 4, 5, 0, 12]));
console.log("solution", solution([5, 4, 4, 5, 0, 3, 1]));
console.log("solution", solution([1, 2, 4, 1, 2, 5, 4, 4, 5, 0, 3, 1]));


console.log("[5, 4, 4, 5, 0, 3, 1].map(String)", [5, 4, 4, 5, 0, 3, 1].map(String));
console.log("[\"1\", \"2\", \"3\", \"4\"].map(Number)", ["1", "2", "3", "4"].map(Number));
