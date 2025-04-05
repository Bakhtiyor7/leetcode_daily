// This code finds the minimum value in an array of numbers
const my_array = [6, 2, 5, 44, 34, 3, 9];

let minVal = my_array[0];

for (let i = 0; i < my_array.length; i++) {
  if (my_array[i] < minVal) {
    minVal = my_array[i];
  }
}
console.log("minVal:", minVal);
