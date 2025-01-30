// Check if a String is a Palindrome
//
// 💡 Problem: A string is a palindrome if it reads the same forward and backward. Write a function to check if a string is a palindrome.

function isPalindrome(str) {
  let split = str.split("");
  let reverse = split.reverse();
  let join = reverse.join("");

  return !!(str == join);
  // returns true if palindrome, or false if not.
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("abcdcba")); // Output: false
