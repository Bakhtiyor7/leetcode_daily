/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // Step 1: Count zeros and determine final length impact
  let zeros = 0;
  for (let num of arr) {
    if (num === 0) zeros++;
  }

  // Step 2: Work backwards to place elements
  let i = arr.length - 1; // original array pointer
  let j = arr.length + zeros - 1; // virtual "expanded" array pointer

  while (i >= 0 && j >= 0) {
    if (arr[i] !== 0) {
      // If not zero, just copy if within bounds
      if (j < arr.length) {
        arr[j] = arr[i];
      }
    } else {
      // If zero, place two zeros if within bounds
      if (j < arr.length) {
        arr[j] = 0;
      }
      j--;
      if (j < arr.length) {
        arr[j] = 0;
      }
    }
    i--;
    j--;
  }
};
