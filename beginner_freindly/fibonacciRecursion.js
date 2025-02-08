console.log(0);
console.log(1);
let count = 2;
function fibonacci(prev1, prev2) {
  if (count <= 19) {
    const newFibo = prev1 + prev2;
    console.log("newFibo:", newFibo);
    // update for next iteration
    count++;
    fibonacci(newFibo, prev1);
  }
}
fibonacci(1, 0);

// this method is less efficient than the iterative method (for loop) because it uses more memory and time. Also it can cause stack overflow if the number is too big. Which means call stack is full and can't add more function calls.
