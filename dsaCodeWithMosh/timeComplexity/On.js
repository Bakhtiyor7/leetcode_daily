// 🟨 O(n) – Linear Time

//1. What “Linear Time” Means
//  	•	O(n) means the amount of work your algorithm does grows in direct proportion to the size of the input (n).
//  	•	If you double n, you roughly double the work; triple n, triple the work.
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
