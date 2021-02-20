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