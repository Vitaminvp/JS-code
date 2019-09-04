function memo(func) {
  var cache = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (cache[key]) {
      console.log(cache);
      return cache[key];
    } else {
      val = func.apply(null, arguments);
      cache[key] = val;
      return val;
    }
  };
}

function fibonacci(n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }
  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}

function memoizer(fun) {
  let cache = {};
  return function(n) {
    if (cache[n] != undefined) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}

const fib = (() => {
  const memo = {};

    return fibonacci = number => {
    if (number <= 1) return number;

    if (memo[number]) return memo[number];
    memo[number] = fibonacci(number - 1) + fibonacci(number - 2);
    return memo[number];
  };
})();

console.log(fib(7));

const memoize = (callback) => {
    let memo = {}
    return (...args) => {
        if (memo[args]) { return memo[args] }
        else {
            memo[args] = callback(args)
            return memo[args]
        }
    }
}