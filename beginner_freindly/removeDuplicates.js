// Remove Duplicates from an Array

function removeDuplicates(arr) {
  // 1) filter array
  return arr.filter((item, index) => arr.indexOf(item) === index);
  //2) remove duplicate.

  // Explanation: arr.filter iterates over each item and finds the first occurrence
  // and keeps only the first occurrence
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["apple", "banana", "apple"])); // Output: ["apple", "banana"]
