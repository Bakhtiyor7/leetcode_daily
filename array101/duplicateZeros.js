/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

let numbers = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === 0) {
      arr.splice(0, 0, 0);
      arr.pop();
    }
  }
};
