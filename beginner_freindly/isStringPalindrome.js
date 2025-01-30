// Check if a String is a Palindrome
//
// 💡 Problem: A string is a palindrome if it reads the same forward and backward. Write a function to check if a string is a palindrome.

function isPalindrome(str) {
  let arrVal = str.split("");
  let reverseString = arrVal.reverse();
  let result = reverseString.join("");

  if (str == result) {
    console.log("string is a palindrome");
    return true;
  } else {
    console.log("string is NOT a palindrome");
    return false;
  }
  // return !!(str == join); // simplified if else
  // returns true if palindrome, or false if not.
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); //  false
console.log(isPalindrome("wow")); // true
