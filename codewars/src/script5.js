<<<<<<< HEAD
function parse( data )
{
    const arr =[];
    let value = 0;
    data.split('').map(item => {
        switch(item) {
            case 'i': value++;
                break;
            case 'd': value--;
                break;
            case 's': value = value**2;
                break;
            case 'o': arr.push(value);
                break;
            default: ;
        }
    });
    return arr;
}
console.log("parse(\"iiisdoso\") => [ 8, 64 ]", parse("iiisdoso"));
=======
const makeChange = (amount) => {
    const result={};
    let rest = amount;
    let H,Q,D,N;
    if(rest>= 50){
        H = Math.floor(rest/50);
        rest = rest%50;
        result.H = +H;
    }
    if(rest>= 25){
        Q = Math.floor(rest/25);
        rest = rest%25;
        result.Q = +Q;
    }
    if(rest>= 10){
        D = Math.floor(rest/10);
        rest = rest%10;
        result.D = +D;
    }
    if(rest>= 5){
        N = Math.floor(rest/5);
        rest = rest%5;
        result.N = +N;
    }
    if(rest > 0){
        result.P = +rest;
    }
    return result
};


// Write a method make_change (makeChange in JavaScript) that will determine the minimum number of coins needed to make change for a given amount in American currency.
//
//     Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in JavaScript.
//
// The argument passed in will be an integer representing the value in cents. The return value should be a hash (an object in JavaScript) with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.


console.log(makeChange(0)); //--> {}
console.log(makeChange(1)); //--> {"P":1}
console.log(makeChange(43)); //--> {"Q":1,"D":1,"N":1,"P":3}
console.log(makeChange(91));//--> {"H":1,"Q":1,"D":1,"N":1,"P":1}
>>>>>>> 57483084780168afa701ac63d47b577547242401
