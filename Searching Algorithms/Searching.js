// Linear Search Pseudocode

// This function accepts an array and a value
// Loop through the array and check if the current element is equal to the value
// if it is, return the index at which the element is found
// if the value is never found, return -1 

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Binary Search Pseudocode 
// this function accepts a sorted array and a value
// create a left pointer at the start of the array, and a right (length-1) pointer at the end of the array
// While the left pointer comes before the right pointer


// Create a pointer in the middle (can take the average of the length to find a middle value.)
// If you find the value you want, return the index. 
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if you never find the value, return -1 
// My attempt
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  // middle index
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle -1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  };
  return (arr[middle] === val) ? middle : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

// Naive String Search
// pseudocode
// loop over the longer string
// loop over the shorter string
// if the characters dont match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count

function naiveString(long, short) {
  let matches = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i+j] !== short[j]) break;
      if (j === short.length - 1) matches++;
    };
  }
  return matches;
};

console.log(naiveString('hellomellowhellowmello', 'ello'));