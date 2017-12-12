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

  // Given a key and a value, pass the key to the hash function.
  // It returns you an index.
  // Using that index, grab whatever is located at this.storage[index]
  // max is refering to the limit (so is 8 in this case)
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage[index];
    if (Array.isArray(bucket)) {
      for (let i = 0; i < bucket.length; i++) {
        const objKey = bucket[i][0];
        if (objKey === key) {
          bucket.splice(i, 1, [key, value]);
        } else {
          bucket.push([key, value]);
        }
      }
    } else {
      this.storage[index] = [[key, value]];
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage[index];
    if (Array.isArray(bucket)) {
      for (let i = 0; i < bucket.length; i++) {
        const objKey = bucket[i][0];
        if (objKey === key) {
          bucket.splice(i, 1);
        }
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage[index];
    if (Array.isArray(bucket)) {
      for (let i = 0; i < bucket.length; i++) {
        const objKey = bucket[i][0];
        if (objKey === key) {
          return bucket[i][1];
        }
      }
    }
  }
}

module.exports = HashTable;
