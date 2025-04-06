class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  // This method uses O(n^2) time and O(1) space complexity (slower)
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

// faster version using Set:  This uses 0(n) time and O(n) space complexity (faster)

// class Solution {
//     hasDuplicate(nums) {
//       const seen = new Set();

//       for (let num of nums) {
//         if (seen.has(num)) {
//           return true; // duplicate found
//         }
//         seen.add(num); // store the number
//       }

//       return false; // no duplicates found
//     }
//   }

// 🔥 What is a Set?

// A Set is a built-in JavaScript object that:
// •	✅ Only stores unique values
// •	❌ Doesn’t allow duplicates

// So it’s perfect for checking if something has already been seen.
