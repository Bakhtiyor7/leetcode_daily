// Problem: Print numbers from 1 to n, but:
// 	•	If a number is divisible by 3, print "Fizz".
// 	•	If a number is divisible by 5, print "Buzz".
// 	•	If a number is divisible by both 3 and 5, print "FizzBuzz".
// 	•	Otherwise, print the number.

function fizzBuzz(n) {
  // for loop
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3);
