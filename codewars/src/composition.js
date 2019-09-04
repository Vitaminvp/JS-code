const sum = a => a + 2;
const sub = a => a - 2;
const mult = (a, b, c) => a * b * c;

// const composition = (...func) => {
//     func.reduce((f, g) => (...args) => f(g(...args)))
// }

//const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const compose = (...fns) => {
  console.log(fns);
  debugger;

  return fns.reduce((f, g) => {
    return (...args) => {
      console.log(args);
      console.log("g", g);
      console.log("f", f);
      console.log("g(...args)", g(...args));
      console.log("f(g(...args)", f(g(...args)));

      return f(g(...args));
    };
  });
};

const res = compose(
  sum,
  sub,
  mult
)(5, 2, 3);
console.log(res);
