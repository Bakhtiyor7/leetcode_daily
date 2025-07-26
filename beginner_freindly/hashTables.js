// example of a simple hash function
// This function takes a string key and a size, and returns an index
// within the bounds of the size.
// It sums the char codes of the characters in the key and uses modulo
// to ensure the index is within the size.
// This is a basic hash function and may not be suitable for all use cases,
// but it illustrates the concept of hashing.
// Note: This is a simple hash function and may not be suitable for all use cases.
// In practice, you would want a more complex hash function to reduce collisions.

function hash(key, size) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i); // get char code
  }
  return total % size; // keep index within bounds
}

console.log(hash("name", 10)); // Example usage
