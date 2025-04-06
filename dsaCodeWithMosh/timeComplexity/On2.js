//🟥 O(n²) – Quadratic Time
//
// 🔹 Your goal: Use a nested loop (loop inside loop).
//
// Problem:
//
// Write a function that prints all pairs of elements in an array.

function printAllPairs(arr) {
  // nested loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printAllPairs([1, 2, 3]);
// should print:
// 1 1
// 1 2
// 1 3
// 2 1
// ...
