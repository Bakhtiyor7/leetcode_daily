let my_array = [64, 34, 25, 12, 22, 11, 90, 5];

let n = my_array.length;

for (let i = 0; i < n; i++) {
  let min_index = i;

  for (let j = i + 1; j < n; j++) {
    if (my_array[j] < my_array[min_index]) {
      min_index = j;
    }
  }

  // Swap elements
  let temp = my_array[i];
  my_array[i] = my_array[min_index];
  my_array[min_index] = temp;
}

console.log("Sorted array:", my_array);
