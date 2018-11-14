function anagrams(word, words) {
    const res= [];
    if(word.length){
        const length = word.length;
        const wordLC = Array.from(word.toLowerCase());
        words.map(item => {
            let el = Array.from(item.toLowerCase());
            console.log("item.length", item.length);
            if(length === item.length){
                for(let i=0; i<length; i++){
                    const index = el.indexOf(wordLC[i]);
                    if(~index){
                        el.splice(index, 1);
                    }
                }
                if(el.length === 0) res.push(item);
            }
        });
    }
    return res;
}

// String.prototype.sort = function() {
//     return this.split("").sort().join("");
// };
//
// function anagrams(word, words) {
//     return words.filter(function(x) {
//         return x.sort() === word.sort();
//     });
// }


console.log("anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']", anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// console.log("anagrams('racer', [ 'caers']) => ['carer', 'racer']", anagrams('racer', ['caers']));
console.log("anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']", anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log("anagrams('laser', ['lazing', 'lazy',  'lacer']) => []", anagrams('laser', ['lazing', 'lazy',  'lacer']));

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []