// A Hash Table Class
class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {

  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!")

// Set / Get

// Set
// 1. Accepts a key and a value
// 2. Hashes the key (figure out where to store it)
// 3. Stores the key-value pair in the hash table array via separate chaining

// Get
// 1. Accepts the key
// 2. Hashes the key
// 3. Retrieves the key-value pair in the hash table
// 4. If the key isn't found, returns undefined
