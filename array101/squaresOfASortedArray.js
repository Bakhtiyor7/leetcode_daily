/**
 * @param {number[]} nums
 * @return {number[]}
 */

let numbers = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  let squaredNums = [];

  for (let i = 0; i < nums.length; i++) {
    let squared = nums[i] * nums[i];
    squaredNums.push(squared);
  }

  console.log("squaredNums", squaredNums);

  const sorted = squaredNums.sort((a, b) => a - b);

  return sorted;
};

sortedSquares(numbers);
