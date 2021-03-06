//  BIG O NOTATION 2.5 - TIMING OUR CODE 

// write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// Slower example
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// slower example's number of operations grows with the numbers being checked. 
// Number of operations is (eventually) bounded by a multiple of n (say, 10n): Big O of O(n)

// slower example speed performance check
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// Faster example
function addUpTo(n) {
    return n * (n + 1) / 2;
};

// Fastest example above is always 3 operations: Big O of O(1)

// faster example speed performance check
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)


// BIG O NOTATION 2.8 - OFFICIAL INTRO TO BIG O

function countUpAndDown(n) {
    console.log("Going up!");
    // For loop counts the number of operations - increases as n goes up so O(n)
    for (let i = 0; i < n; i++) { 
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    //  this loop is also O(n)
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

console.log(countUpAndDown(10));

// omg moar examplez lol
function printAllPairs(n) {
    //O(n)
    for (var i = 0; i < n; i++) {
        // also O(n) 
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// O(n) operation inside of an O(n) operation (like nested loops) is O(n2)

// A couple more examples
// O(n)
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// O(1)
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// An Example
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Another example

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// 20. Step 4 - Solve or Simplify

// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character 
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        };
    }
    // if character is something else (space, period, etc.) don't do anything 
    // return object at end
    return result;
}

console.log(charCount('Hi there!'));

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the 2nd array. the frequency of values must be the same. 

// naive solution - O(n^2) - because nested loops.
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        } arr2.splice(correctIndex, 1)
    }
    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// Refactored solution
// break down the arrays into two objects which can be compared.
// big O is O(n) so much better than nested arrays.
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
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
    return true
}

// 28. frequency counter: anagram challenge
// Anagrams 
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another such as cinema, formed from iceman.

// Take two words and see if they contain all of the same letters in a different order

// if the words are the same they are not anagrams 
// if one word has more letters than the other word they are not anagrams

// my solution to 29. Anagram Challenge solution
function anagram(str1, str2) {
    if (str1 === str2) {
        return false;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    };
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    };
    for (let key in frequencyCounter1) {
        if (!key in frequencyCounter2) {
            return false;
        }
    }
    return true;
}

console.log(anagram('ello', 'hello'));

// Prof's solution to 29. Anagram Challenge solution
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// 30. MULTIPLE POINTERS PATTERN
//An example
// Write a function called sumZero which accepts a SORTED array of integers. The function should find the FIRST pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Naive Solution - Not ideal - Time Complexity O(N^2) -- Space Complexity O(1)
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
// 30. 
// sumZero Refactored with MULTIPLE POINTERS PATTERN 
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
            left++
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))

// Section 31 Multiple Pointers: Count Unique Value Challenge

// Implement a function called countUniqueValues, which accepts a SORTED array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]  
        }
    }
    return i + 1;
}

[1, 1, 2, 3, 3, 4, 5, 6, 6, 7]

// Section 33. Sliding Window Pattern

//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

// Section 33 - A naive solution - time complexity O(N^2)
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// 33. Refactor - Time Complexity O(N) - SLIDING WINDOW 
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// 34. Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1.

// 34. a naive solution - linear search - Time Complexity O(N)
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// 34. DIVIDE AND CONQUER - Refactor - Time Complexity - Log(N) - Binary Search!

function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}

// SECTION 43. OUR FIRST RECURSIVE FUNCTION 

// our first recursive function
function countDown(num) {
    if (num <= 0) {
        console.log('all done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

console.log(countDown(20));

// section 45. writing factorial iteratively
function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i
    }
    return total;
}

console.log(factorial(10));

// SECTION 46. WRITING FACTORIAL RECURSIVELY
function factorialRecursive(num) {
    if (num === 1) return 1;
    return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(10))

// SECTION 48. HELPER METHOD RECURSION

// This is the pattern of a helper function recursion
function outer(input) {
    let outerScopedVariable = [];

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable;
}

// 48. Helper Method Recursion example
// let's try to collect all of the odd values in an array!

function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr);
    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 49. PURE RECURSION
// same as last sections problem - let's try to collect all of the odd values in an array!

function collectOddValuesPure(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9]));

// SECTION 8: RECURSION POWER SETS

// Coding exercise 10: power
// Write a function called power which accepts a base and an exponent. the function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(4, 3));

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4*3*2*1 equals 24. Factorial zero (0!) is always 1. 

// SECTION 10: SEARCHING ALGORITHMS
// linear search pseudocode
// this function accepts an array and a value
// loop through the array and check if the current array element is equal to the vlaue, if it is, return the index at which the element is found.

// O(n)
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return `${val} was found at index ${i}`
        }
    }
    return -1;
}

const leah = [1, 2, 3, 4, 5, 6, 7, 15, 26, 19];

console.log(linearSearch(leah, 15));

//62. BINARY SEARCH pseudocode solution
// This function accepts a sorted array and a value
// create a left pointer at the start of the array, and a right pointer at the end of the array. 
// While the left pointer comes before the right pointer: 
    // create a pointer in the middle
    // if you find teh value you want, return the index
    // if the value is too small, move the left pointer up. 
// if you never find the value, return -1
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val && left <= right) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
}

//  64. NAIVE STRING SEARCH
// pseudocode:
// loop over the longer string
// loop over the shorter string
//if the characters don't match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count.
function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if(j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));

// 68. Introduction to Sorting Algorithms

// 70. Bubble Sort: Overview

//Before we start, we must swap!
// Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Bubble Sort Pseudocode
// define a function called bubblesort that takes an array which is all numbers 
// Start Looping with a variable called i from the end of the array towards the beginning. 
// start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values!
// return the sorted array

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // SWAP!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
} 

console.log(bubbleSort([37, 45, 29, 8]));

// 75. Selection Sort: Introduction

//Selection Sort pseudocode
//Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// if a smaller number is found, designmate that smaller number to be the new "minimum" and continue until the end of the array.
// If the 'mimimum is not the value (index) you initially began with, swap the two values.
//Repeat this with the next element until the array is sorted. 

// 76. from 75. Selection Sort pseudocode
//Big O complexity is O(n^2);
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;      
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
}

console.log(selectionSort([34, 22, 10, 19, 17]));

// 79. Insertion Sort Pseudocode

//Start by picking the second element in the array
//Now compare the second element to the one before it and swap if necessary.
//Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
//Repeat until the array is sorted. 
