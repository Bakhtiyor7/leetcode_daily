class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = {}
        
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if(nums[num] >= k) {
                result.push(num);
                }
            
        
           seen[num] = (seen[num] || 0) + 1;

    }
    console.log(seen)
        return result;
    
}}

const solution = new Solution;

console.log(solution.topKFrequent([1, 1, 2, 2, 3], 2));
