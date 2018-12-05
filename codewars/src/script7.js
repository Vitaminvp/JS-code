
function chooseBestSum(distance, number, ls) {
    const arr = [...ls];
    let max = null;

    const reducer = (element = [], index = 0) => {
        // console.log("element", element);
        if(element.length === number) {
            // console.log("element", element);
            const summ = element.reduce((sum, cur) => sum + cur, 0);
            // console.log("sum", summ);
            if(summ <= distance)
                max = Math.max(max, summ);
            // console.log("max", max);
            return max;
        }
        for(let i=index; i < arr.length; i++){
            // console.log("i", i);
            const newElement = [...element];
            reducer(newElement.concat(arr[i]), i+1);
        }
    };

        reducer();
>>>>>>> 57483084780168afa701ac63d47b577547242401

    return max;
}

<<<<<<< HEAD
// function chooseBestSum(distance, number, ls) {
//     let arr = [...ls];
//     console.log("arr", arr);
//     console.log("distance", distance);
//     console.log("number", number);
//     let max = null;
//     if(arr.length == number)
//         return arr.reduce((sum, cur) => sum + cur, 0);
//     else if (arr.length > number && arr.length > 0) {
//         for (let i = 0; i < arr.length; i++) {
//             const head = [...arr].splice(0, number);
//             const tail = [...arr].splice(number);
//             for (let j = 0; j < tail.length; j++) {
//                 const headnext = [...head];
//                 headnext[number - 1] = tail[j];
//                 const summ = headnext.reduce((sum, cur) => sum + cur, 0);
//                 console.log("summ", summ);
//                 if (summ <= distance){
//                     max = Math.max(max, summ);
//                     console.log("max", max);
//                 }
//                 arr = arr.splice(-1).concat(arr);
//             }
//         }
//     }
//     return max;
// }

// console.log("chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]) === 228 ", chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]) === 228);
// console.log("chooseBestSum(163, 3, [50]) === null ", chooseBestSum(163, 3, [50]) === null);
// console.log("chooseBestSum(163, 3, [50, 55, 56, 57, 58]) === 163 ", chooseBestSum(163, 3, [50, 55, 56, 57, 58]) === 163);
console.log("chooseBestSum(2333, 8, [ 100, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ]) === 825 ", chooseBestSum(2333, 8, [ 100, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ]) === 825);
// console.log("chooseBestSum(163, 3, [ 100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ]) === 876 ", chooseBestSum(880, 8, [ 100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ]) === 876);
// console.log("chooseBestSum(174, 3, [50, 55, 57, 58, 60]) === 173 ", chooseBestSum(174, 3, [50, 55, 57, 58, 60]) === 173);
=======


console.log("chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]) === 228 ", chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]) === 228);
console.log("chooseBestSum(163, 3, [50]) === null ", chooseBestSum(163, 3, [50]) === null);
console.log("chooseBestSum(163, 3, [50, 55, 56, 57, 58]) === 163 ", chooseBestSum(163, 3, [50, 55, 56, 57, 58]) === 163);
console.log("chooseBestSum(174, 3, [50, 55, 57, 58, 60]) === 173 ", chooseBestSum(174, 3, [50, 55, 57, 58, 60]) === 173);


// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
//
// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible
//
// to please Mary and John- ?
//     Example:
//
//     With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
//
//     The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
//
// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
//
//     The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.
//
// Examples:
//
//     ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
//
// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)
//
// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
>>>>>>> 57483084780168afa701ac63d47b577547242401


