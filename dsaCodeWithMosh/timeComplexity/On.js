// 🟨 O(n) – Linear Time
//
// 🔹 Your goal: Loop over all elements once.
//
//     Problem:
//
// Write a function that takes an array and returns the sum of all elements.

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // should return 10
