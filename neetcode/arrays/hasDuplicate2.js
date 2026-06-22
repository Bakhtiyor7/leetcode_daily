class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    // set a hash
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
      // early return if array is empty; saves space and time;
      if (nums.length === 0) {
        return false;
      }

      if (set.has(nums[i])) {
        return true;
      }

      set.add(nums[i]);
    }
    return false;
  }
}

const solution = new Solution();

const result = solution.hasDuplicate;

console.log(result([1, 2, 3, 4, 1]));
