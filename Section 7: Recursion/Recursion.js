// Simple Recursive Function
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// 45. Writing Factorial Iteraviely
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i
//   }
//   return total;
// }

// 46. Same thing as 45. but recursive

const factorial = num => {
  if (num === 1) return 1;
  return num * factorial(num-1)
}

// 48. Helper Method Recursion
// this is a sort of pseudo code explaining how helper functions work. not an actual function.
// function outer(input) {
//   var outerScopedVariable = []

//   function helper(helperInput) {
//     // modify the outerScopedVariable
//     helper(helperInput--)
//   }

//   helper(input)

//   return outerScopedVariable;
// }

// An example of helper method recursion
// Let's try to collect all of the odd values in an array!
// function collectOddValues(arr) {
//   let result = []

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0])
//     }
//     helper(helperInput.slice(1))
//   }
//   helper(arr)

//   return result;
// }

// 49. Pure Recursion - same problem of collecting the odd values with pure recursion
function collectOddValues(arr) {
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

// Coding Exercise 10: Power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// Coding Exercise 11: Factorial
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integrs below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 *1 equals 24. factorial(0!) is always 1.

// function factorial(num) {
//   if (num < 0) return 0;
//   if (num <=1) return 1;
//   return num * factorial(num - 1);
// }

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number therafter is equal to the sum of the previous two numbers. 

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(25));

// Coding exercise 15: reverse
// Write a function called reverse which accepts a string and returns a new string in reverse.
// my attempt - doesnt work
// function reverse(str) {
//   let reversedArr = [];
//   let arr = str.split("");
//   let end = arr.length;
//   if (end === 0) return reversedArr;
//   reversedArr.push(arr[end]);
//   reverse(arr.pop());
// };


// Reverse Solution
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// reverse("hellodolly");

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
//  my try. doesnt work.
// function isPalindrome(str) {
//   if (str.length === 0) return false;
//   if (str.length === 1) return true;
//   let reversedString = isPalindrome(str.slice(1)) + str[0];
//   console.log(reversedString);
//   if (reversedString === str) return true;
//   else return false;
// };

// console.log(isPalindrome('tacocat'));

//  Recursive solution to isPalindrome
function isPalindrome(str){
  if(str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false. 
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

// Coding Challenge 18.
// Flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. 
// my attempt - doesnt work
// function flatten(arr) {
//   if (arr.length === 0) return arr;
//   if (Array.isArray(arr[0])) {
//     arr.flat();
//     return flatten(arr.slice(1))
//   } else {
//     return flatten(arr.slice(1))
//   }
// };

// Solution to Coding Challenge 18 
function flatten(oldArr){
  var newArr = []
  // iterate over the length of the array
  for (var i = 0; i < oldArr.length; i++){
      // if the first element in the array is an array
    if (Array.isArray(oldArr[i])) {
        // then merge this old array into the new array
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// Write a recursive function called capitalizeFirst. given an array of strings capitalize the first letter of each string in the array.
// my solution doesnt work
// function capitalizeFirst(arr) {
//   if (arr.length === 0) return arr;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i][0].toUpperCase();
//   }
// };

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  // res returns a new array minus the last element. this is only modifying the original array.
  const res = capitalizeFirst(array.slice(0, -1));
  // capitalize the first letter of the last word in the array.
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  console.log(array.slice(array.length - 1));
  return res;
}


console.log(capitalizeFirst(['car', 'toad', 'milk', 'cream']))

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum(obj, sum = 0) {
  // look at ever key in the object.
  for (var key in obj) {
    // if the type of the object key is an object
    if (typeof obj[key] === 'object') {
        // then that means there's nesting to get to the even numbers we need. so we'll run the equation again to look through the smaller object inside of the object in order to extract the numbers. 
      sum += nestedEvenSum(obj[key]);
      // if the object in the object is a number and it's even then add it to the sum.
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}