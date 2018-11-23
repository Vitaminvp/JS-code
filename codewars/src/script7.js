function chooseBestSum(t, k, ls) {
    var max = 0;
    let townsSoFar = [];
    var recurseTowns = function(lsi=[], lastIndex = 0) {
        townsSoFar = townsSoFar.concat(lsi);
        console.log("townsSoFar1", townsSoFar);
        //base case
        if (townsSoFar.length === k) {
            console.log("townsSoFar2", townsSoFar);
            var sum = townsSoFar.reduce((a,b)=>a+b, 0);
            if (sum <= t && sum > max) {
                max = sum;
                console.log("max", max);
            }
            return null; //EJECT
        }
        //recursive case
        for (var i = lastIndex+1; i < ls.length; i++) {
            recurseTowns(ls[i], i);
        }
    };
    recurseTowns();

    return max;
}

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


