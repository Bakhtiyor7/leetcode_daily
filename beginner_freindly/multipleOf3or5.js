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
