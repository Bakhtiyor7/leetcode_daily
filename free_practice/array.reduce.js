/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const numbers = [1, 2, 3, 4];
const initialValue = 0;

const reducer = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

reducer(numbers);

var reduce = function (nums, fn, init) {};

// console.log(reduce(numbers, n, initialValue));
