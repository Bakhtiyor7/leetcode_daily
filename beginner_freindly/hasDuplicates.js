class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }
}

const solution = new Solution();
const nums = [1, 2, 3, 4, 5, 1];

const result = solution.hasDuplicate(nums);
console.log(result); // Output: true
