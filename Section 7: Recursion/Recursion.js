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

function factorial(num) {
  if (num < 0) return 0;
  if (num <=1) return 1;
  return num * factorial(num - 1);
}