class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let res = {};

    for (let s of strs) {
      let sorted = s.split("").sort().join("");

      if (!res[sorted]) {
        res[sorted] = [];
      }
      res[sorted].push(s);
    }

    console.log(res);
    // Convert the object values to an array of arrays

    return Object.values(res);
  }
}

const solution = new Solution();
console.log(solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // should return [["eat","tea","ate"],["tan","nat
