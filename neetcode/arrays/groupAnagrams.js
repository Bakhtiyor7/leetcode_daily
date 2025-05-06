class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = {};
    for (let s of strs) {
      const sortedS = s.split("").sort().join("");
      console.log("sortedS:", sortedS);
      if (!res[sortedS]) {
        res[sortedS] = [];
      }
      res[sortedS].push(s);
    }
    return Object.values(res);
  }
}

const solution = new Solution();
console.log(solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
