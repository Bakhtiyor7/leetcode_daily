/**
 * @param {number[]} nums
 * @return {number}
 */
let numbers = [22, 444, 2, 5, 2222];

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let numLength = nums[i].toString().length; // convert number to string and get the length because we can't get the length of a number

    if (numLength % 2 === 0) {
      count += 1;
    }

    console.log("count", count);
  }

  return count;
};

findNumbers(numbers);
