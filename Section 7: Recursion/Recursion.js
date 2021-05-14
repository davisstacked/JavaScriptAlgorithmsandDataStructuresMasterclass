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
  // for n = 6 this would be 5 + 3
}

console.log(fib(6));

// Coding exercise 15: reverse
// Write a function called reverse which accepts a string and returns a new string in reverse.
function reverse() {

};