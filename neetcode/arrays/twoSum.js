class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    // nested loop
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
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

// Improved solution using a hash map
// class Solution {
//   /**
//    * @param {number[]} nums
//    * @param {number} target
//    * @return {number[]}
//    */
//   twoSum(nums, target) {
//     const numToIndex = {}; // or use new Map() for Map version
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
//       if (numToIndex.hasOwnProperty(complement)) {
//         return [numToIndex[complement], i];
//       }
//       numToIndex[nums[i]] = i;
//     }
//     return [];
//   }
// }

// const solution = new Solution();
// console.log(solution.twoSum([1, 3, 4, 5], 7)); // Output: [1, 2]
// console.log(solution.twoSum([3, 2, 8, 5], 8)); // Output: [0, 3]
