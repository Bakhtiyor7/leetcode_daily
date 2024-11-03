let arr = [1, 2, 3];
let arrCopy = [...arr];

console.log("arr", arr); // returns [1, 2, 3]
console.log("arrCopy", arrCopy); // returns [1, 2, 3]

console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // returns true
