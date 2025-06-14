/**
 * @param {number} num
 * @return {number}
 */

// num max -> 9
// num min -> 0
// max - min = result

var minMaxDifference = function (num) {
  let str = num.toString();

  let maxStr = str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "9") {
      maxStr = str.replaceAll(str[i], "9");
      break;
    }
  }

  let minStr = str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      minStr = str.replaceAll(str[i], "0");
      break;
    }
  }

  const result = parseInt(maxStr) - parseInt(minStr);
  console.log(result);

  return result;
};

minMaxDifference(11891);
