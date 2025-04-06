// 🔷 O(log n) – Logarithmic Time
//
// 🔹 Your goal: Use binary search logic
//
// Problem:
//
//     Write a function that performs binary search on a sorted array
// (returns true if a number exists, false otherwise)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  console.log("right:", right);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid:", mid);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1; // search in the right half
    } else {
      right = mid - 1; // search in the left half
    }
  }

  return false; // not found
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); // true
console.log(binarySearch([1, 3, 5, 7, 9], 8)); // false
