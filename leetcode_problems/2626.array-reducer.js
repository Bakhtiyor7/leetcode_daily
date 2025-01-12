/**
 * Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
 *
 * This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
 *
 * If the length of the array is 0, the function should return init.
 *
 * Please solve it without using the built-in Array.reduce method.
 *
 *
 *
 *
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const numbers = [1, 2, 3, 4];
let initVal = 10;

const reducer = function (arr, val) {
  let res = [];
  let n;
  console.log(n);
  for (let i = 0; i < arr.length; i++) {
    n = val + arr[0];
    res.push(arr[i] + n);
  }

  console.log(res);
  arr.forEach((num) => {
    initVal += num;
  });
  console.log(initVal); // Output: 10
};

var reduce = function (nums, fn, init) {};

reduce(numbers, reducer(numbers, initVal), initVal);
