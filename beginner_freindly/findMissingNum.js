//Find the Missing Number in an Array
//
// 💡 Problem: You are given an array of numbers from 1 to n, but one number is missing. Find the missing number.

//📝 Hints:
// 	•	Use sum formula: sum = n * (n + 1) / 2.
// 	•	Find sum of array and subtract from expected sum.

function findMissingNumber(arr) {
  let sum = 0;

  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;

  console.log("expectedSum:", expectedSum);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("sum:", sum);

  return expectedSum - sum;
}

console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5])); // Output: 9
