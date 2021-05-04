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

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 5])) // [-3, 3]
// console.log(sumZero([-1, 0, 3])) // undefined
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])) // [-3, 3]


// countUniqueValues 
// implement a function called countUniqueValues, which accepts a SORTED array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 

const countUniqueValues = arr => {
  let i = 0;
  if (arr.length === 0) {
    return 0;
  };
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
};
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
