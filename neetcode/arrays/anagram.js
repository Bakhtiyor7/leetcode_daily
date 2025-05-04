class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    // extract strings and save into array
    const sArr = s.split("");
    const tArr = t.split("");

    // sort the arrays
    sArr.sort();
    tArr.sort();

  // cut the process if array lengths don't match
    if (sArr.length !== tArr.length) {
      return false;
    }

    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] !== tArr[i]) {
        return false;
      }
    }
    return true;
  }
}

const solution = new Solution();
console.log(solution.isAnagram("anagram", "nagaram")); // should return true
console.log(solution.isAnagram("rat", "car")); // should return false
