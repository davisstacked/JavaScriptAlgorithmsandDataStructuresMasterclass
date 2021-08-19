// Simple hash example
// Here's a has that works on strings only:

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

// Refining our Hash
// problems with our current hash (above)
//  1. only hashes strings (we wont worry about this)
//  2. not constant time - linear in key length 
//  3. could be a little more random

// So we use Prime Numbers
// (pretty much noone understands how this works - some next level math, but it does work and it's how we do it)
// The prime number in the hash is helpful in spreading out the keys more uniformly.
// it's also helpful if the array that you're putting values into has a prime length.


function hashRevisited(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}