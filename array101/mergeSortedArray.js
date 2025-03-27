/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Start from the end of both arrays
  let p1 = m - 1; // pointer for nums1
  let p2 = n - 1; // pointer for nums2
  let p = m + n - 1; // pointer for merged array

  // While there are elements to compare in both arrays
  while (p2 >= 0 && p1 >= 0) {
    console.log("p1:", p1);
    console.log("p2:", p2);
    if (nums1[p1] > nums2[p2]) {
      console.log("if: nums1[p1]:", nums1[p1]);
      console.log("if: nums1[p]:", nums1[p]);
      nums1[p] = nums1[p1];
      console.log("if: nums1[p]:", nums1[p]);
      p1--;
      console.log("p1--:", p1);
    } else {
      nums1[p] = nums2[p2];
      console.log("nums1[p]:", nums1[p]);
      p2--;
      console.log("p2--:", p2);
      console.log("nums1:", nums1);
    }
    p--;
  }

  // If there are remaining elements in nums2
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};
// Test
let numbers1 = [1, 2, 0, 0];
let numbers2 = [2, 3];
merge(numbers1, 2, numbers2, 2);
console.log(numbers1); // [1, 2, 3, 5, 7, 8]
