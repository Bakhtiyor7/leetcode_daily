/*

3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
*/
 

 //====== Brute force=========
// time O(n3) space o(m)

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[][]}
//      */
//     threeSum(nums) {
//         const res = new Set();
//         nums.sort((a, b) => a - b);
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 for (let k = j + 1; k < nums.length; k++) {
//                     if (nums[i] + nums[j] + nums[k] === 0) {
//                         res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
//                     }
//                 }
//             }
//         }
//         return Array.from(res).map(item => JSON.parse(item));
//     }
// }

// ===============================

// ======== Two Pointer=========
// time o(n2) space o(n) or o(1)

class Solution {

	threeSum(nums) {
		const count = nums.sort((a, b) => a - b) // we sort it so negative numbers are on the left
		let res = [];

		for (let i = 0; i < nums.length; i++) {
			if (nums[i] > 0) break; // if index is bigger than 0, stop immediately;
			if (i > 0 && nums[i] === nums[i] -1) continue; 

			let l = i + 1;
			let r = nums.length - 1;

			while (l < r) {
				const sum = nums[i] + nums[l] + nums[r];
				if(sum > 0) {
					r--
				} else if (sum < 0) {
					l++
				} else {
					res.push([nums[i], nums[l], nums[r]]);
					l++
					r--
					while (l < r && nums[i] === nums[l - 1]) 
						l++
				} 
			}
			
		}
		return res;
	}
}

const solution = new Solution();
console.log(solution.threeSum([-1, 0, 1, 2, -1, -4]));

















