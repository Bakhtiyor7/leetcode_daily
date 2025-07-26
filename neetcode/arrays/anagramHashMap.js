class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
   if (s.length !== t.length) {
    return false;
   };

   let store = new Set();

   for (let i = 0; i < s.length; i++) {
      store.add(sCount += 1)
   }

   for let j = 0; j < t.length; j++ {
      store.add(tCount += 1); 
   }

  }
}

const solution = new Solution();
console.log(solution.isAnagram("anagram", "nagaram")); // should return true
console.log(solution.isAnagram("rat", "car")); // should return false

// Time complexity: O(n log n) due to sorting
// Space complexity: O(n) for the arrays

// TODO: Use better solution using hashmap (O(n) time complexity and O(1) space complexity)
