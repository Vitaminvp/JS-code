// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//     "use strict";
//     // change code below this line
//     const squaredIntegers = arr.filter(el => el > null && el%1 === 0)
//                                .map(item => Math.pow(item,2));
//     // change code above this line
//     return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);



// const sum = (function() {
//     "use strict";
//     return function sum(..args) {
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3)); // 6

// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     console.log("str.substring(str.lendth - target.lendth)", str.substring(str.length - target.length));
//     return str.substring(str.length - target.length) == target;
// }
//
// confirmEnding("Bastian", "n");

// function truncateString(str, num) {
//     // Clear out that junk in your trunk
//     let end = eval(num);
//     if(end > str.length-3){
//         return str;
//     }
//     console.log("str", str.length);
//     console.log("end", end);
//     return str.substring(0, end) +"...";
// }
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

// function findElement(arr, func) {
//     for(let i=0; i<arr.length; i++){
//         if(func(arr[i])){
//             return arr[i];
//         }
//     };
//     return undefined;
// };
//
//
// // findElement([1, 2, 3, 4], num => num % 2 === 0);
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
//
// console.log("__", findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

// function titleCase(str) {
//
//     return str.split(' ').map(item =>{
//         return item[0].toUpperCase()+item.substring(1).toLowerCase()||"";
//     }).join(" ");
// }
//
// console.log("I'm a little tea pot", titleCase("I'm a little tea pot"));
//
// function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     let arr = arr2.slice();
//     console.log("arr", arr);
//     for(let i=arr1.length-1; i >= 0; i--){
//         arr.splice(n, 0, arr1[i]);
//         console.log("arr_", arr);
//     }
//
//     return arr;
// }
// console.log("", frankenSplice([1, 2, 3], [4, 5, 6], 1));
//frankenSplice([1, 2, 3], [4, 5, 6], 1);

// function getIndexToIns(arr, num) {
//     // Find my place in this sorted array.
//     let res = 0;
//     const newArr = arr.sort((a, b) => a-b);
//     for(let i=0; i < newArr.length; i++){
//         if(newArr[i] > num) return i;
//     }
//     return res;
// }
//
// console.log("getIndexToIns", getIndexToIns([70, 40, 60], 50));

// function mutation(arr) {
//     let first = arr[0].toLowerCase().split('').sort().join('');
//     let last = arr[1].toLowerCase().split('').sort();
//     console.log("first", first);
//     console.log("last", last);
//     console.log(last.every(item => first.includes(item)));
//     //return last.each(item => first.includes(item));
// }
//
// ;
// console.log("mutation", mutation(["hello", "Hello"]));

var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {

    return [...bookList, bookName];

    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
    if (bookList.indexOf(bookName) >= 0) {

        return [...bookList].filter(item => item !==bookName);

        // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

console.log("newerBookList", newerBookList);
