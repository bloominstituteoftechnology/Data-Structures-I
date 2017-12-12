/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// LimitedArray, and getIndexBelowMax are two tools provided for you in the helper file.
// There are other methods on the LimitedArray class in the './hash-table-helpers' file that you can use for your implementation.

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (!isNaN(key) && key < this.limit) {
      this.storage.set(key, value);
      this.storage.incrementLength();
    } else if (this.storage.get(getIndexBelowMax(key)) !== undefined || null) {
      const current = this.storage.get(getIndexBelowMax(key));
      const newArray = [[0, current], [key, value]];
      this.storage.set(getIndexBelowMax(key), newArray);
      this.storage.incrementLength();
    } else {
      this.storage.set(getIndexBelowMax(key), value);
      this.storage.incrementLength();
    }
    if (this.storage.length >= (0.75 * this.limit)) {
      this.limit *= 2;
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    this.storage.set(getIndexBelowMax(key), undefined);
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    // console.log(this.storage.get(getIndexBelowMax(key)));
    if (!isNaN(key)) {
      return this.storage.get(key);
    } else if (Array.isArray(this.storage.get(getIndexBelowMax(key)))) {
      // console.log(true);
      // console.log(this.storage.get(getIndexBelowMax(key)));
      let marker;
      if (this.storage.get(getIndexBelowMax(key))[0][0] === key) {
        // console.log(this.storage.get(getIndexBelowMax(key))[0]);
        marker = this.storage.get(getIndexBelowMax(key))[0][1];
      } else if (this.storage.get(getIndexBelowMax(key))[1][0] === key) {
        // console.log(this.storage.get(getIndexBelowMax(key))[1][1]);
        marker = this.storage.get(getIndexBelowMax(key))[1][1];
      } else if (marker === undefined && this.storage.get(getIndexBelowMax(key))[0][0] === 0) {
        // console.log(this.storage.get(getIndexBelowMax(key))[0][0]);
        marker = this.storage.get(getIndexBelowMax(key))[0][1];
      } else if (marker === undefined && this.storage.get(getIndexBelowMax(key))[1][0] === 0) {
        marker = this.storage.get(getIndexBelowMax(key))[1][1];
      }
      return marker;
    }
    return this.storage.get(getIndexBelowMax(key));
    // console.log(this.storage.get(getIndexBelowMax(key)));
    // return this.storage.get(getIndexBelowMax(key));
  }
  // uncomment the final test in hash-table.test.js and make the hash-table rebalance
  // if you used arrays as your underlying data structure for implementing stacks, queues and hash table buckets, convert these to use linked lists instead
  // in order to do this, you'll need to export your linked list implementation by wrapping it inside a module.exports
  // just comment out your initial implementation; don't delete perfectly good code
}

const test = new HashTable();

// console.log(Object.getPrototypeOf(test).hasOwnProperty('insert'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('remove'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('retrieve'));

// console.log(test);
// test.insert('hello', 'there');
// console.log(test.retrieve('hello'));

// test.insert('Ben', 'Nelson');
// console.log(test.retrieve('Ben'));
// test.remove('Ben');
// console.log(test.retrieve('Ben'));

// console.log(test.retrieve('Sean'));

// should handle numbers as keys

// test.insert(0, 'First Value');
// test.insert(1, 'Second Value');
// console.log(test.retrieve(0));
// console.log(test.retrieve(1));

// should properly handle collisions

// test.insert('B', 'First Value');
// test.insert('HI!', 'Second Value');
// console.log(test.storage);
// console.log(test.retrieve('B'));
// console.log(test.retrieve('HI!'));

test.insert('a', true);
test.insert('b', true);
test.insert('c', true);
test.insert('d', true);
test.insert('e', true);
test.insert('f', true);
test.insert('g', true);
console.log(test.limit);
console.log(test.storage.length);
test.insert('h', true);
test.insert('i', true);
test.insert('j', true);
test.insert('k', true);
test.insert('l', true);
test.insert('m', true);
test.insert('n', true);
test.insert('o', true);
console.log(test.limit);
console.log(test.storage.length);

module.exports = HashTable;
