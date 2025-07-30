/* 
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use 
O
(
1
)
O(1) additional space.

Example 1:

Input: numbers = [1,2,3,4], target = 3

Output: [1,2]

*/

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       // two pointer solution. space: o(1), time o(n)
        let l = 0, r = numbers.length - 1;

        for (let i = 0; i < numbers.length; i++) {
            while (l < r) {
                let curSum = numbers[l] + numbers[r];

                if(curSum > target) {
                    r--
                } else if (curSum < target) {
                    l++
                } else {
                    return [l + 1, r + 1]
                }
            }
        }

        return [];
    }
}

const solution = new Solution();
console.log(solution.twoSum([1, 2, 4, 5], 3))




