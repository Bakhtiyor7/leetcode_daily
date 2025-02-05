//7. Count the Occurrences of a Character in a String
//
// 💡 Problem: Given a string and a character, count how many times the character appears.
//📝 Hints:
// 	•	Use a for loop or .split() and .filter().

function countCharacter(str, char) {
  // split string --> array
  let arr = str.split("");
  // filter array --> count char in array
  let filter = arr.filter((e) => e === char);

  const result = filter.length;
  return result;
}

console.log(countCharacter("hello", "l")); // 2
console.log(countCharacter("mississippi", "s")); // 4
