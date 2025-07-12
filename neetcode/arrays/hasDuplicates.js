class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // this is a brute force version
   // hasDuplicate(nums) {
   //  for ( let i = 0; i < nums.length; i++) {
   //      for (let j = i + 1; j < nums.length; j++) {
   //          if (nums[i] === nums[j]) {
   //              return true
   //          }
   //      } 
   //  } return false
   // }}
    hasDuplicate(nums) {
        let seen = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true
            }

            seen.add(nums[i]);

        } return false
       
    }

};

const example = new Solution;
const result = example.hasDuplicate([1, 2, 3, 4]);
console.log(result)
