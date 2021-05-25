// ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}



// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Selection Sort PseudoCode
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find the smaller number
// if a smaller number is found, designnate that smaller number to be the new "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// my attempt
// const selectionSort = arr => {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       // Swap! 
//       temp = min;
//       min = arr[i];
//       arr[i] = min;
//     }
//   }
//   return arr;
// };

// Solution
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // console.log(arr);
    // console.log("Swapping to:")
    if (i !== min) {
      console.log(i, lowest);
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      // console.log(arr);
    }
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);