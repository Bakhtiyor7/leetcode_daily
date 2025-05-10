/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/
function solution(number) {
  // empty array
  let arr = [];
  let sum = 0;
  // for loop
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

solution(10); // should return 23
