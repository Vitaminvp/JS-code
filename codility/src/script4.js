function solution(N) {
    const arr = Array.from((N).toString(2));
    let maxgap = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1){
            let gap = 0;
            let j = i + 1;
            while(arr[j] !== "1" && arr[j] && arr[j] < arr.length){
                gap++;
                j++
            }
            if (maxgap < gap && arr[j] < arr.length) maxgap = gap;
            console.log("i", i);
            console.log("j", j);
            console.log("gap", gap);
            console.log("maxgap", maxgap);
            i = j-1;
        }

    }
    return maxgap;
}
console.log("(20).toString(2)", Array.from((328).toString(2)));
console.log("solution", solution(328));
console.log("(20).toString(2)", Array.from((1162).toString(2)));
console.log("solution", solution(1162));