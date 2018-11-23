<<<<<<< HEAD
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
=======
function alphabetWar(fight)
{
    const left =  ['t', 's', 'b', 'p', 'w'];
    const right = ['j', 'z', 'd', 'q', 'm'];
    let leftSumm = 0;
    let rightSumm = 0;
    console.log("fight", fight);
    for(let i= 0; i < fight.length; i++){
        if((left.indexOf(fight[i]) !== -1) && ((fight[i-1] !== 'j' && fight[i+1] !== 't') || ( fight[i-1] !== 't' && fight[i+1] !== 'j') ) ){
            console.log("7", 'leftSumm', fight[i],leftSumm);
            leftSumm += left.indexOf(fight[i]);
            console.log("7", 'leftSumm',fight[i], leftSumm);
        }
        else if((left.indexOf(fight[i]) !== -1) && (((fight[i-1] === 'j') && (fight[i+1] !== 't' && fight[i+1] !== 'j')) || ((fight[i-1] !== 't' && fight[i-1] !== 'j') && (fight[i+1] === 'j')))){
            console.log("6", 'rightSumm',fight[i], rightSumm);
            rightSumm += left.indexOf(fight[i]);
            console.log("6", 'rightSumm',fight[i], rightSumm);
        }
        else if((left.indexOf(fight[i]) !== -1) && (fight[i+1] === 'j' && fight[i-1] === 't') || ( fight[i+1] === 't' && fight[i-1] === 'j' )){
            console.log("5", 'leftSumm', leftSumm);
            leftSumm += left.indexOf(fight[i]);
            console.log("5", 'leftSumm',fight[i], leftSumm);
        }
        else if((left.indexOf(fight[i]) !== -1)){
            console.log("5", 'leftSumm', leftSumm);
            leftSumm += left.indexOf(fight[i]);
            console.log("5", 'leftSumm',fight[i], leftSumm);
        }




        if((right.indexOf(fight[i]) !== -1) && (((fight[i-1] !== 'j' && fight[i+1] !== 't') || ( fight[i-1] !== 't' && fight[i+1] !== 'j') ) )){
            console.log("4", 'leftSumm',fight[i],  rightSumm);
            rightSumm += right.indexOf(fight[i]);
            console.log("4", 'rightSumm',fight[i],  rightSumm);
        }
        else if((right.indexOf(fight[i]) !== -1) && (((fight[i-1] === 't') && (fight[i+1] !== 't' && fight[i+1] !== 'j')) || ((fight[i-1] !== 't' && fight[i-1] !== 'j') && (fight[i+1] === 't')))) {
            console.log("3", 'leftSumm',fight[i], leftSumm);
            leftSumm += right.indexOf(fight[i]);
            console.log("3", 'leftSumm',fight[i], leftSumm);
        }
        else if((right.indexOf(fight[i]) !== -1) && ((fight[i+1] === 'j' && fight[i-1] === 't'  ) || (fight[i+1] === 't' && fight[i-1] === 'j'))){
            console.log("2", 'rightSumm',fight[i], rightSumm);
            rightSumm += right.indexOf(fight[i]);
            console.log("2", 'rightSumm',fight[i], rightSumm);
        }
        else if((right.indexOf(fight[i]) !== -1)){
            console.log("2", 'rightSumm',fight[i], rightSumm);
            rightSumm += right.indexOf(fight[i]);
            console.log("2", 'rightSumm',fight[i], rightSumm);
        }

    }
    console.log("leftSumm", leftSumm);
    console.log("rightSumm", rightSumm);
    return leftSumm > rightSumm ? "Left side wins!" : leftSumm == rightSumm ? "Let's fight again!" : "Right side wins!";
}

// console.log("alphabetWar(z)", alphabetWar("z"));
// console.log("alphabetWar(tz)", alphabetWar("tz"));
// console.log("alphabetWar(jz)", alphabetWar("jz"));
// console.log("alphabetWar(zt)", alphabetWar("zt"));
// console.log("alphabetWar(sj)", alphabetWar("sj"));
// console.log("alphabetWar(azt)", alphabetWar("azt"));
console.log("alphabetWar(cqitwtz)", alphabetWar("cqitwtz"));
// console.log("alphabetWar(tzj)", alphabetWar("tzj"));
// console.log("alphabetWar(jbdt)", alphabetWar("jbdt"));
// console.log("alphabetWar(wololooooo)", alphabetWar("wololooooo"));
// console.log("alphabetWar(zdqmwpbs)", alphabetWar("zdqmwpbs"));
// console.log("alphabetWar(ztztztzs)", alphabetWar("ztztztzs"));
>>>>>>> 57483084780168afa701ac63d47b577547242401
