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
// compare these two numbers and change the maxSum to whichever is greater. 
// continue until the entire array has been checked.

// Write a function called minSubArrayLen which accepts two paramaters - an array of positive integers and a positive integer. 
// This function should return the minimum length of a contiguous subarray of which the sum is greater than or equal to the integer passed into the function. If there isn't one, return 0 instead. 

// My solution

// const minSubArrayLen = (arr, num) => {
//   if (!num) return 0;
//   let currentTotal = 0;
//   // create a number count to represent how many elements are added together to get a total equal to or greater than num
//   let currentLen = 0;
//   // create a temporary number count so we can compare elements and find the minimum length
//   let minLen = 0;

//   for (let i = 0; i < arr.length; i++) {
//     // if just one number is greater than goal number then return one - we only needed the one number
//     if (arr[i] >= num) return 1;
//     // if that one number is less than goal number than
//     if (arr[i] < num) {
//       // add one to count that number in how many are needed to equal or beat goal number. 
//       currentLen++;
//       // and make the current total equal to the first number in our array. We keep adding numbers on and moving forward in the array until the current total is greater than our number. 
//       currentTotal += arr[i];
//       if (currentTotal >= num) {
//         // once that happens, make the current length we've found equal to our min length. And set current length back to one.
//         minLen = currentLen;
//         currentLen = i;
//       }
//     }
//   }
// };

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  // we initialize to infinity so that our first number will be smaller when comparing in the while loop
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then add the first number in array to total and then move on to the next number
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    
    // when the total of the numbers in the array you've been adding are greater than the target number
    else if (total >= sum) {
      // compare infinity to how ever many numbers we needed to equal or exceed the goal number and make minLen whichever is smaller.
      minLen = Math.min(minLen, end - start);
      // now we subtract the first number in the array from our total. And move our start number over one in the array.
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}


// write a function called findLongestSubstring, which accepts a string and returns the longest substring from all distinct characters.

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
//  iterate over the string argument
  for (let i = 0; i < str.length; i++) {
  // each letter in the string when it is being iterated over is known as "char"
    let char = str[i];
    console.log(char);
    // if our object has that character in it already then we've reached the end of a unique substring and need to check if there are longer unique substrings...
    // so on our first loop there is no seen[char] in the object so it is false and we don't do this part.
    if (seen[char]) {
      // then we need to start looking at new substrings by setting start to either 0 or the number of times we've seen a character - whichever is larger 
      start = Math.max(start, seen[char]);
      console.log(start)
    }
    console.log(seen[char])
    // index - beginning of substring + 1 (to include current in count)
    // after the first loop, longest will be 1 because it is comparing 0 to 0
    longest = Math.max(longest, i - start + 1);
    console.log(longest);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('thisisawesome'));