const curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...more) => curry(fn, ...args, ...more);

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const add1 = v => v + 1;
const isOdd = v => v % 2 === 1;
const sum = (total, v) => v + total;

const list = [2, 5, 8, 11, 14, 17, 20];

console.log(
  list
    .map(add1)
    .filter(isOdd)
    .reduce(sum)
);

const mapWithReduce = (arr, mappingFunc) => {
  return arr.reduce((list, v) => {
    list.push(mappingFunc(v));
    return list;
  }, []);
};

const filterWithReduce = (arr, predicateFunc) => {
  return arr.reduce((list, v) => {
    if (predicateFunc(v)) list.push(v);
    return list;
  }, []);
};

const listMap = mapWithReduce(list, add1);
const listFilter = filterWithReduce(listMap, isOdd);
const listReduce = listFilter.reduce(sum);

console.log(listReduce);

const mapReducer = mappingFunc => (list, v) => [...list, mappingFunc(v)];
const filterReducer = predicateFn => (list, v) => {
  if (predicateFn(v)) return [...list, v];
  return [...list];
};

console.log(
  list
    .reduce(mapReducer(add1), [])
    .reduce(filterReducer(isOdd), [])
    .reduce(sum)
);

const listCombination = (list, v) => [...list, v];

const mapReducer2 = mappingFunc => (list, v) =>
  listCombination(list, mappingFunc(v));
const filterReducer2 = predicateFn => (list, v) => {
  if (predicateFn(v)) return listCombination(list, v);
  return [...list];
};

console.log(
  list
    .reduce(mapReducer2(add1), [])
    .reduce(filterReducer2(isOdd), [])
    .reduce(sum)
);

const mapReducer3 = curry((mappingFunc, combinerFunc) =>
                                  (list, v) =>
                                    combinerFunc(list, mappingFunc(v))
                          );

const filterReducer3 = curry((predicateFn, combinerFunc) =>
                                    (list, v) => {
                                      if (predicateFn(v)) return combinerFunc(list, v);
                                      return list;
                                    }
                          );

console.log(
    list
        .reduce(mapReducer3(add1)(listCombination), [])
        .reduce(filterReducer3(isOdd)(listCombination), [])
        .reduce(sum)
);

const transducer = compose(mapReducer3(add1), filterReducer3(isOdd));

console.log(
    list.reduce(transducer(sum), 0)
);

const transduce = (transducer, combinerFunc, initialValue, list) => {
  const reducer = transducer(combinerFunc);
  return list.reduce(reducer, initialValue)
};


console.log(
    transduce(transducer, sum, 0, list)
);