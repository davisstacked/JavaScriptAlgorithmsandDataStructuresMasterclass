// 2 ways to Handle Colisions (when numbers are mapped to the same index in the array)
// 1. separate chaining
// with separate chaining, at each index of our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
//  so both can be stored at the same spot in an array. 

// 2. Linear Probing
// with linear probing, when we find a collision, we search through the array to find the next empty slot. 
// only store one piece of data in each empty slot. 