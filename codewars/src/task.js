// Написать класс Dog, который наследуется от класcа Animal.
// Класс Animal имеет метод getName (name можно передать в конструктор).
// Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
// Пример использования:
// var dog = new Dog ('Aban');
// dog.getName () === 'Aban'; // true
// dog.bark () === 'Dog Aban is barking'; // true
// Задание необходимо сделать в двух вариантах: на ES5 и ES6.

// class Animal {
//     constructor(name = 'Aban-чик'){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
// }
// class Dog extends Animal{
//     constructor(dogname){
//         super(dogname);
//     }
//     bark(){
//         return `Dog ${this.name} is barking`;
//     }
// }
// const dog = new Dog('Aban');
// console.log("dog.getName() === 'Aban'", dog.getName() === 'Aban');
// console.log("dog.bark() === 'Dog Aban is barking'", dog.bark() === 'Dog Aban is barking');


function Animal(name){
    if(!name){this.name = 'Aban-чик'}
    this.name = name;
}
Animal.prototype.getName = function () {
    return this.name;
};
function Dog(name){
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    return 'Dog '+ this.name+ ' is barking';
};
var dog = new Dog('Aban');

console.log("dog.getName() === 'Aban'", dog.getName() === 'Aban');
console.log("dog.bark() === 'Dog Aban is barking'", dog.bark() === 'Dog Aban is barking');
