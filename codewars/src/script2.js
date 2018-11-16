function solution(str){
    const arr = [];
    if(str.length%2!==0 && str.length !==0) str += "_";

    while(str.length){
        arr.push(str.substring(0, 2));
        str = str.slice(2, str.length);
    }
    return arr;
}

// function solution(str) {
//     return (str.length % 2 ? str + '_' : str).match(/../g);
// }


// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd
// number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:

console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']