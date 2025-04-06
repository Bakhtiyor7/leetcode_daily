let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
let n = my_array.length;

for (let i = 1; i < n; i++) {
  let insert_index = i;
  console.log("insert_index:", insert_index);
  let current_value = my_array.splice(i, 1)[0]; // pop i-th value
  console.log("current_value:", current_value);
  console.log("my_array", my_array);

  for (let j = i - 1; j >= 0; j--) {
    if (my_array[j] > current_value) {
      insert_index = j;
    }
  }

  my_array.splice(insert_index, 0, current_value); // insert at new index
  console.log("my_array after splice:", my_array);
}

console.log("Sorted array:", my_array);
