<<<<<<< HEAD
=======

>>>>>>> 57483084780168afa701ac63d47b577547242401
var Harshad = ( function() {
    'use strict';

    return {
        isValid: function( number ) {
            return (number % String(number).split('').reduce((sum, current) => sum + Number(current), 0)) === 0;
        },

        getNext: function( number ) {
            let num = number+1;
            while((num % String(num).split('').reduce((sum, current) => (sum + +current), 0)) !== 0){
                num++;
            }
            return num;
        },

        getSerie: function( count = 0, start=0 ) {
            let numArr = [];
            let startNum = (start+1);
            while(numArr.length < count){
                if(startNum % (''+startNum).split('').reduce((sum, current) => (sum + +current), 0) === 0)
                    numArr.push(startNum);
                startNum++;
            }
            return numArr;
        }
    };

} () );

console.log("Harshad.isValid(1)", Harshad.isValid(1));   //      ==>  true
console.log("Harshad.getNext(0)", Harshad.getNext(0));   //      ==>  1
console.log("Harshad.getNext(1)", Harshad.getNext(1));   //      ==>  2
console.log("Harshad.getNext(18)", Harshad.getNext(18));   //      ==>  20
console.log("Harshad.getNext(1000)", Harshad.getNext(1000));   //      ==>  1002
console.log("Harshad.getSerie(3)", Harshad.getSerie(3));   //    ==>  [ 1, 2, 3 ]
<<<<<<< HEAD
console.log("Harshad.getSerie(3, 1000)", Harshad.getSerie(3, 1000));   //    ==>  [ 1002, 1008, 1010 ]
=======
console.log("Harshad.getSerie(3, 1000)", Harshad.getSerie(3, 1000));   //    ==>  [ 1002, 1008, 1010 ]
>>>>>>> 57483084780168afa701ac63d47b577547242401
