// A brute force solution would be to create a copy of the string,
// reverse it, and then check for equality.
//This would be an O(n) solution with extra space.
//Can you think of a way to do this without O(n) space?

// example:
// Input: s = "Was it a car or a cat I saw?"

// Output: true

// HINT:
// A brute force solution would be to create a copy of the string,
// reverse it, and then check for equality.
// This would be an O(n) solution with extra space.
// Can you think of a way to do this without O(n) space?

class Solution {
	/**
	 * @param {string} s
	 * @return {boolean}
	 */
	isPalindrome(s) {
		if (typeof s !== "string") {
			throw new Error("Input is not a string!");
		}

		const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
		const reversed = cleaned.split("").reverse().join("");

		return cleaned === reversed;
	}
}

const solution = new Solution();
const result = solution.isPalindrome("Was it a car or a cat I saw?");
console.log(result); // true
