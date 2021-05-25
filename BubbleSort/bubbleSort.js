// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}



// ES2015
const swap2015 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


// Bubble Sort Pseudo Code
// with a variable called i start looping from the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i -1
// if arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array
// my attempt
// const bubbleSort = arr => {
//   const sortedArr = [];
//   for (let i = arr.length - 1; i = 0; i--) {
//     for (let j = 0; j = i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, arr[j], arr[j+1])
//       }
//     }
//   }
//   return arr;
// };

const leah = [23, 3, 33, 34, 5, 66, 7, 77, 8, 20];


// Class Solution
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i -1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(leah));
