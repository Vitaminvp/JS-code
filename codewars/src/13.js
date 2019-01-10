
let n = parseInt(prompt('Введите размерность двумерного массива для заполнения зигзагом по диагонали:'));
let arr = new Array(n);
for(let i =0; i < arr.length; i++){
    arr[i] = new Array(n);
}
for(let i =0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
        arr[i][j] = 0;
    }
}
let count = 1;
for(let i=0; i<arr.length; i++){
    if( i%2 === 0 ){
        let y = 0;
        for(let j = i; j>=0; j--){
            arr[y++][j] = count++;
        }
    }else {
        let y = i;
        for(let j = 0; j<=i; j++){
            arr[y--][j] = count++;
        }
    }
}
for(let i=1; i < arr.length; i++){
    if(arr.length === 0){
        if( i%2 === 0 ){
            let y = i;
            for(let j = arr.length-1; j >= i; j--){
                arr[y++][j] = count++;
            }
        }else {
            let y = arr.length-1;
            for(let j = i; j < arr.length; j++){
                arr[y--][j] = count++;
            }
        }
    }else{
        if( i%2 !== 0 ){
            let y = i;
            for(let j = arr.length-1; j >= i; j--){
                arr[y++][j] = count++;
            }

        }else {
            let y = arr.length-1;
            for(let j = i; j < arr.length; j++){
                arr[y--][j] = count++;
            }
        }
    }
}
arr.forEach(item  => document.write(item+'<br>'));
console.log("arr", arr);