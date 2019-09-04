const curryIt = function(unCurried) {
  const parameters = Array.prototype.slice.call(arguments, 1);
  console.log(parameters);
  return function() {
    return unCurried.apply(
      this,
      parameters.concat(Array.prototype.slice.call(arguments, 0))
    );
  };
};

const greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

const greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi");

const greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "Joe");

const curry = function(fn) {
  const arity = fn.length;

  return function f1(...args) {
    console.log("f1 args", args);
    if (args.length >= arity) {
      console.log("enough arguments");
      return fn(...args);
    } else {
      console.log("need more arguments");
      return function f2(...moreArgs) {
        console.log("f2", moreArgs);
        const newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

// https://monsterlessons.com/project/lessons/pishem-funkciyu-curry-v-javascript

const add = function(a, b, c) {
  return a + b + c;
};

const curriedAdd = curry(add);

// curriedAdd(1)(2)(3)
console.log("____", curriedAdd(1)(2)(3));
// curriedAdd(1)(2, 3)
console.log("____", curriedAdd(1)(2, 3));
// curriedAdd(1, 2, 3)
console.log("____", curriedAdd(1, 2, 3));


// const curry = function(fn) {
//   const arity = fn.length;
//   console.log("arity", arity)
//
//   return function first(...args1){
//     if(args1.length >= arity){
//       return fn(...args1)
//     } else {
//       return function second(...args2){
//         const args = args1.concat(args2);
//         if(args.length >= arity){
//           return fn(...args)
//         } else {
//           return first(...args)
//         }
//       }
//     }
//   }
// }
//
//
// var add = function (a, b, c) {
//   return a + b + c
// }
//
// var curriedAdd = curry(add)
//
// var result1 = curriedAdd(1)
// console.log('result1', result1(2)(3))
//
// var result2 = curriedAdd(1)(2)
// console.log('result2', result2(3))
//
// var result3 = curriedAdd(1)(2)(3)
// console.log('result3', result3)