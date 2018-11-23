function alphabetWar(fight)
{
    const left =  ['t', 's', 'b', 'p', 'w'];
    const right = ['j', 'z', 'd', 'q', 'm'];
    let leftSumm = 0;
    let rightSumm = 0;
    for(let i= 0; i < fight.length; i++){

        if((left.indexOf(fight[i]) !== -1) && (fight[i-1] !== 't' && fight[i-1] !== 'j') && (fight[i+1] !== 't' && fight[i+1] !== 'j')){
            leftSumm += left.indexOf(fight[i]);
        }else if((left.indexOf(fight[i]) !== -1) && ((fight[i-1] === 't' || fight[i-1] === 'j') && (fight[i+1] !== 't' && fight[i+1] !== 'j')) || ((fight[i-1] !== 't' || fight[i-1] !== 'j') && (fight[i+1] === 't' && fight[i+1] === 'j'))){
            rightSumm += left.indexOf(fight[i]);
        }else if((left.indexOf(fight[i]) !== -1) && (fight[i-1] === 't' || fight[i-1] === 'j') && (fight[i+1] === 't' || fight[i+1] === 'j')){
            leftSumm += left.indexOf(fight[i]);
        }
        if((right.indexOf(fight[i]) !== -1) && (fight[i-1] !== 't' && fight[i-1] !== 'j') && (fight[i+1] !== 't' && fight[i+1] !== 'j')){
            rightSumm += right.indexOf(fight[i]);
        }else if((right.indexOf(fight[i]) !== -1) && ((fight[i-1] === 't' || fight[i-1] === 'j') && (fight[i+1] !== 't' && fight[i+1] !== 'j')) || ((fight[i-1] !== 't' || fight[i-1] !== 'j') && (fight[i+1] === 't' && fight[i+1] === 'j'))) {
            leftSumm += right.indexOf(fight[i]);
        }else if((right.indexOf(fight[i]) !== -1) && (fight[i-1] === 't' || fight[i-1] === 'j')&& (fight[i+1] === 't' || fight[i+1] === 'j')){
            rightSumm += right.indexOf(fight[i]);
        }
    }
    console.log("leftSumm", leftSumm);
    console.log("rightSumm", rightSumm);
    return leftSumm > rightSumm ? "Left side wins!" : leftSumm == rightSumm ? "Let's fight again!" : "Right side wins!";
}

console.log("alphabetWar(z)", alphabetWar("z"));
console.log("alphabetWar(tz)", alphabetWar("tz"));
console.log("alphabetWar(tz)", alphabetWar("jz"));
console.log("alphabetWar(tz)", alphabetWar("zt"));
