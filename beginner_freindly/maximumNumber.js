// Problem: Given an array of numbers, return the largest number.

function findMax(arr) {
  const result = Math.max(...arr);
  console.log("result:", result);
  return result;
}

console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-1, -5, -3, -9, -2])); // Output: -1
