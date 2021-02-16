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