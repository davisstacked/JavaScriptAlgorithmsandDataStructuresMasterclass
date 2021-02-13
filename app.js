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

// slower example speed performance check
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// Faster example
function addUpTo(n) {
    return n * (n + 1) / 2;
};

// faster example speed performance check
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)


