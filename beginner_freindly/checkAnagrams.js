// Check if Two Strings Are Anagrams
//
// 💡 Problem: An anagram is when two words have the same characters but in a different order. Check if two strings are anagrams.
//📝 Hints:
// 	•	Sort both strings and compare them.

// ======= MY APPROACH!!! =======
// function areAnagrams(str1, str2) {
//   let split1 = str1.split(""); // split and sort string into an array
//   let split2 = str2.split("");
//
//   let arr1 = split1.sort(); // sort array elements alphabetically
//   let arr1Res = arr1.join(""); // join the elements into a single string
//   console.log(arr1Res);
//
//   let arr2 = split2.sort();
//   let arr2Res = arr2.join("");
//   console.log(arr2Res);
//
//   if (arr1Res === arr2Res) {
//     // compare if they have the same values
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world")); // Output: false

// ========== MORE OPTIMAL APPROACH!!! ==========
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
