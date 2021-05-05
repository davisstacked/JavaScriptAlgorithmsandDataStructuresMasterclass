function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2)
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))

// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema" formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  };
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  };
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2)
  return true;
};

console.log(validAnagram('timetwisttext', 'texttwisttime'));


// Coding exercise three
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities: Time: O(N)

// My solution

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }
  // converts a number to an iterable string
  str1 = "" + num1;
  str2 = "" + num2;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  };
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
};

console.log(sameFrequency(123456123456, 654321654321));
console.log(sameFrequency(12345671234567, 23456782345678));
