function trampoline(fn){
  return function(...args){
    let result = fn(args);
    while(typeof result=== "function"){
      result = result()
    }
    return result;
  }

}


const trampolined = trampoline(function f(sum, num, nums) {
  sum = sum + num;
  if (nums.length === 0) return sum;
  return function() {
    return f(sum, ...nums);
  };
});

console.log(trampolined([3, 4, 5, 6, 7, 8, 9]));
