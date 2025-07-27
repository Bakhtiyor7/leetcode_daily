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

// 1. Brute force approach O(n) time, O(n) space
// class Solution {
// 	/**
// 	 * @param {string} s
// 	 * @return {boolean}
// 	 */
// 	isPalindrome(s) {
// 		if (typeof s !== "string") {
// 			throw new Error("Input is not a string!");
// 		}

// 		const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
// 		console.log("cleaned", cleaned)
// 		const reversed = cleaned.split("").reverse().join("");
// 		console.log("reversed", reversed)

// 		return cleaned === reversed;
// 	}
// }

// 2. Two pointer approach O(n) time, O(1) space = better approach 
class Solution {
	isPalindrome(s) {
		// add two pointers
		let l = 0,
			r = s.length - 1;
		console.log("s:", l);
		console.log("r:", r);

		while (l < r) {
			while (l < r && !this.isAlphanum(s[l])) {
				l++;
			}

			while (r > l && !this.isAlphanum(s[r])) {
				r--;
			}

			if (s[l].toLowerCase() !== s[r].toLowerCase()) {
				return false;
			}
			l++;
			r--;
		}

		return true;
	}

	isAlphanum(c) {
		return (
			(c >= "a" && c <= "z") ||
			(c >= "A" && c <= "Z") ||
			(c >= '0' && c <= '9')
		);
	}
}

const solution = new Solution();
const result = solution.isPalindrome("Was it a car or a cat I saw?");
console.log(result); // true
