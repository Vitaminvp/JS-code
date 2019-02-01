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
// function remove (bookList, bookName) {
//     if (bookList.indexOf(bookName) >= 0) {
//
//         return [...bookList].filter(item => item !==bookName);
//
//         // Add your code above this line
//     }
// }
//
// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
//
// console.log(bookList);
//
// console.log("newerBookList", newerBookList);
// the global variable
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Add your code below this line

var filteredList = watchList.filter(item => parseInt(item["imdbRating"])>=8)
.map(item=>({title: item["Title"], rating: item["imdbRating"]}));

// Add your code above this line

console.log(filteredList);
