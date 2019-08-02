
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    function dec2Bin(dec)
    {
        if(dec >= 0) {
            return dec.toString(2);
        }
        else {
            return (~dec).toString(2);
        }
    }

    const binNum = dec2Bin(N);
    console.log("binNum", binNum)
    let arr = binNum.split("1");
    console.log("arr", arr)
    if(binNum[0]==="0"){
        arr = arr.slice(1)
    }
    if(binNum[binNum.length-1] ==="0"){
        arr.pop();
    }
    console.log("arr", arr)
    let max=0;

    arr.forEach(item => {
        if(item.length > max){
            max = item.length
        }
    })

    return +max;

}

console.log("solution(32)", solution(32));
//solution(1041)
