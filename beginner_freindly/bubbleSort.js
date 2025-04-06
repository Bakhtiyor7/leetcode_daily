let my_array = [64, 34, 25, 12, 22, 11, 90, 5];

let n = my_array.length;

for (let i = 0; i < n - 1; i++) {
  console.log("n -1 :", n - 1);
  console.log("i:", i);
  for (let j = 0; j < n - i - 1; j++) {
    console.log("n-i-1: ", n - i - 1);
    console.log("j:", j);
    if (my_array[j] > my_array[j + 1]) {
      // Swap
      let temp = my_array[j];
      my_array[j] = my_array[j + 1];
      my_array[j + 1] = temp;
    }
  }
}

console.log("Sorted array:", my_array);
