// An Example
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

const maxSubarraySum = (arr, num) => {
  // Create a maxSum variable to hold the eventual solution
  let maxSum = 0;
  //  create a tempSum variable to compare the different possible solutions to find the biggest number
  let tempSum = 0;
  // if there aren't as many numbers in the array as the amount of numbers we want to add then the problem is flawed and we return null
  if (arr.length < num) return null;
  // add the first numbers in the array together until we've added the number specified by n
  for (let i = 0; i < num; i++) {
    // these numbers added together are our "maxSum"
    maxSum += arr[i];
  }
  // for now make our temporary sum equal to our max sum
  tempSum = maxSum;
  // since we already went through the first n numbers and added them, we can start our next loop n numbers into the array. we'll run this function until there are no elements left in the array.
  for (let i = num; i < arr.length; i++) {
    // this line subtracts the first number and adds the last number 
    // now subtract from temp sum the first number from the array and add a new last number to the array.
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

// time complexity O(N)

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null

// looking at the 2nd array after this first loop 
// maxSum = 10
// tempSum = 10
// now subtract the first number from temp sum and add the next number
// now maxSum = 10
// tempSum = 17
// compare these two numbers and change the maxSum wo whichever is greater. 
// continue until the entire array has been checked.