const numbers = [1, 2, 3, 4];
const func = function sum(accum, curr) {
  return accum + curr;
};
let init = 100;

var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

reduce(numbers, func, init);
