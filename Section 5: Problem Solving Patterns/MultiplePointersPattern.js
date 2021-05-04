// An Example
// Write a function called sumZero which accepts a SORTED array of integers. The function should find the FIRST pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 5])) // [-3, 3]
console.log(sumZero([-1, 0, 3])) // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])) // [-3, 3]