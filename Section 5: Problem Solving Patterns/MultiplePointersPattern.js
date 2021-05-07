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

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
};

// Write a function called averagePair. Given a SORTED array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the target average.

function averagePair(arr, targetAvg) {
  if (!arr.length) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else right--;
  }
  return false;
}

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. other words, the function should check whether the characters in the first string appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  // if the first string doesn't exist then the answer is TRUE - the first string of letters exist in the second string of letters.
  if (!str1) return true;
  // While there are still letters to check in the second word then...
  while (j < str2.length) {
  // if the first letter in the first and second word match, then move to the second letter of each word, then third letter, etc.
    if (str2[j] === str1[i]) i++;
  // if you make it to the end of the first word with the letters all matching a string from the second word then this is TRUE!
    if (i === str1.length) return true;
  // if the first letter in the first string doesn't match the first letter of the second string, move up a letter in the second string then check again. Whenever letters match move forward one for each. 
    j++;
  }
  // if, after checking all of the letters, you cannot find the first word duplicated somewhere in the second then Return FALSE!
  return false;
}

// Recursive solution to isSubsequence()
function isSubsequence(str1, str2) {
  // if the first word doesn't have any letters than its true
  if (str1.length === 0) return true
  // if the second word has no letters than it's false cause the first word can't appear in the second word if it doesn't exist
  if (str2.length === 0) return false
  // if the first letter in each word is the same then run this function again but on the second letter of each word.
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  // if the first letter of the first word doesnt match the first letter of the second word, then run this function again looking now at the first letter of the first word and the second letter of the second word. If you don't find a match again move on to the 3rd letter of the second word - compare it against the first - and if it's a match check the next letter of each. keep looking to see if there is a match.
  // if you make it to the end of the first word and there are no letters left then you'll know you found a match! (you wouldn't have been iterating through letters otherwise) 
  // if you make it to the end of the second word first then you will know they don't have a match and return false.
  return isSubsequence(str1, str2.slice(1))
}