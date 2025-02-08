let prev2 = 0;
let prev1 = 1;

console.log(prev2);
console.log(prev1);

for (let fibo = 0; fibo < 18; fibo++) {
  let newFibo = prev1 + prev2;
  console.log("newFibo:", newFibo);
  prev2 = prev1;
  prev1 = newFibo;
}

// this method is more efficient than the recursive method because it uses less memory and time. Also it can handle bigger numbers without causing stack overflow. Which means call stack is not full and can add more function calls.
