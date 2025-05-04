//🟪 O(n³) (Extra challenge if you’re up for it!)

// Let’s look at O(n³), or “cubic time,” which you hit when your algorithm does three nested full passes over your data:

//   ⸻
//
//   1. What “Cubic Time” Means
//   	•	O(n³) means the work grows in proportion to the cube of the input size.
//   	•	If you double n, the work multiplies by 2³ = 8; triple n, it multiplies by 3³ = 27.
//
// 🔹 Use three nested loops
//
// Problem:
//
// Write a function that prints all triplets of an array (every combination of 3 elements).

function printAllTriplets(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        console.log(arr[i], arr[j], arr[k]);
      }
    }
  }
}

printAllTriplets([1, 2]);
// Output: all 8 combinations like
// 1 1 1
// 1 1 2
// ...
