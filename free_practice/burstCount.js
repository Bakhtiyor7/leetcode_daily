function burstCount(input) {
  let inputData = input.split(""); // create an array by splitting input values
  let occurances = [];

  for (let i = 0; i < inputData.length; i++) {
    let count = 1;
    if (inputData[i] > 0) {
      count++;
    }

    console.log(count);

    if (count > 2) {
      occurances.push(inputData[i]);
    }
  }
  console.log(occurances);

  return occurances;
}

burstCount("aaabbbccc"); // [a, b, c]

// correct version:

// function burstCount(input) {
//     let occurrences = [];
//     let n = input.length;

//     for (let i = 0; i < n; i++) {
//         let count = 1;

//         // Count consecutive occurrences of the same character
//         while (i + 1 < n && input[i] === input[i + 1]) {
//             count++;
//             i++;
//         }

//         // If there are 3 or more consecutive occurrences, add to result
//         if (count >= 3 && !occurrences.includes(input[i])) {
//             occurrences.push(input[i]);
//         }
//     }

//     return occurrences;
// }
