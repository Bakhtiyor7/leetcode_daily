//  !!!Problem: Write a function that reverses a string.

function reverseString(str) {
  // for loop, split(), .reverse(), .join
  // ======== reverse method =========
  // //1) split string
  // let arr = str.split("");
  //
  // //2) reverse the array
  // let arrReverse = arr.reverse();
  // const result = arrReverse.join("");
  // return result;
  //=======reverse method end=========

  // ======= for loop ========
  // 1) split string
  let arr = str.split("");

  // 2) store into arr with for loop from the last index
  let secondArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    secondArr.push(arr[i]);
  }
  // 3) arr join ""
  const result = secondArr.join("");
  console.log("result:", result);
  return result;
  // ====== for loop end ==========
}

console.log(reverseString("hello")); //olleh
