class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    // nested loop
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length + 1; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }
}

const solution = new Solution();
console.log(solution.twoSum([1, 3, 4, 5], 7));
console.log(solution.twoSum([3, 2, 8, 5], 8));
