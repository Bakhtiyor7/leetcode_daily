//🟪 O(n³) (Extra challenge if you’re up for it!)
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
