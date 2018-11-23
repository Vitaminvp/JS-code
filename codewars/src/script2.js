function solution(str){
    const arr = [];
<<<<<<< HEAD
    if(str.length%2!==0 && str.length !==0) str = str + "_";

    for(let i=0; i<=str.length; i = i+2){
        arr.push(str.substring(0, 2));
        str = str.substr(2, str.length);
        console.log("str", str);
=======
    if(str.length%2!==0 && str.length !==0) str += "_";

    while(str.length){
        arr.push(str.substring(0, 2));
        str = str.slice(2, str.length);
>>>>>>> 57483084780168afa701ac63d47b577547242401
    }
    return arr;
}

<<<<<<< HEAD
console.log("solution('abc')", solution('abc')); // should return ['ab', 'c_']
console.log("solution('abcdef')", solution('abcdef')); // should return ['ab', 'cd', 'ef']
=======
// function solution(str) {
//     return (str.length % 2 ? str + '_' : str).match(/../g);
// }


// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd
// number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:

console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']
>>>>>>> 57483084780168afa701ac63d47b577547242401
