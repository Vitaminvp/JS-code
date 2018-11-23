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
