
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
    if(arr.length%2 !== 0){
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
const length = (n**2).toString().length;
console.log("length", length);
const arr2 = arr.map(item  => item.map(elem => ('0000000' + elem).slice(-length)).join(' '));
arr2.forEach(item => document.write(item +'<br>'));
console.log("arr2", arr2);