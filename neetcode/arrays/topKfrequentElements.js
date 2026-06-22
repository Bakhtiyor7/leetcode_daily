class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let counts = {};

    if (nums.length === 0) {
      return [];
    }

    for (const num of nums) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    let result = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(([num]) => Number(num));

    return result;
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 2, 2, 3, 3, 3], 2));
