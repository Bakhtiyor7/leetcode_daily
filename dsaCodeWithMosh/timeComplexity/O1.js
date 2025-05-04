// 🟩 O(1) – Constant Time
//1. What “Constant Time” Means
//  	•	O(1) means the number of steps your function takes does not depend on the size of the input.
//  	•	Whether the array has 3 elements, 3 million elements, or 0 elements, you always do the same fixed amount of work.

// Problem:
//
//     Write a function that takes an array and returns the first element.

function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([10, 20, 30])); // should return 10
