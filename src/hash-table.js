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
    } else if (this.storage.get(getIndexBelowMax(key)) !== undefined || null) {
      const current = this.storage.get(getIndexBelowMax(key));
      // console.log(current);
      const newArray = [[0, current], [key, value]];
      this.storage.set(getIndexBelowMax(key), newArray);
      // console.log(newArray[0][0]);
      // console.log(this.storage.get(getIndexBelowMax(key)));
      // console.log(Array.isArray(this.storage.get(getIndexBelowMax(key))));
    } else {
      this.storage.set(getIndexBelowMax(key), value);
    }
    // this.storage.set(getIndexBelowMax(key), value);
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

module.exports = HashTable;
