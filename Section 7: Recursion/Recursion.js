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