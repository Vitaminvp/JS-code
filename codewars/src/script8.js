function matrixAddition(a, b){
    const res = [];
    for(let i = 0; i < a.length; i++){
        res[i] = [];
        for(let j=0; j < a[i].length; j++){
            res[i][j] = a[i][j] + b[i][j];
        }
    }
    return res;
}

console.log(matrixAddition(
    [ [1, 2, 3],
        [3, 2, 1],
        [1, 1, 1] ],

    [ [2, 2, 1],
        [3, 2, 3],
        [1, 1, 3] ] ));

    // [ [3, 4, 4],
    //     [6, 4, 4],
    //     [2, 2, 4] ] );