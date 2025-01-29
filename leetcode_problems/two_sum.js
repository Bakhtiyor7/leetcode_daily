/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 * Example :
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let numbers = [1, 3, 5, 8];
let targetNum = 6;

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      const result = [map[complement], i];
      console.log(result);
      return result;
    }
    map[nums[i]] = i;
  }
  return [];
};

console.log(twoSum(numbers, targetNum));
