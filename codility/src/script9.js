function solution(N) {
    return pow11(N).filter(el => el === 1).length;
}
function pow11(N){
    let res = [1];
    for (let i=0; i< N; i++){
        multiply11(res);
    }
    return res;
}

function multiply11(arr){
    arr.push(0);
    let tmp = 0;
    for (let i=arr.length -1; i > 0; i--){
        arr[i] = arr[i] + arr[i-1] + tmp;
        if(arr[i]>=10){
            tmp = Math.floor(arr[i]/10);
            arr[i] = arr[i]%10;
        }
    }
    const head = arr[0] + tmp;
    arr.splice(0, 1, ...head.toString().split('').map(Number));
    return arr;
}

console.log("solution(77)", solution(77));
console.log("solution(77)", Math.pow(11, 77));
