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
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);

    if (tempBucket === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }
    for (let i = 0; i < tempBucket.length; i++) {
      if (tempBucket[i][0] === key) {
        tempBucket[i][1] = value;
        this.storage.set(index, tempBucket);
        return;
      }
      tempBucket.push([key, value]);
      this.storage.set(index, tempBucket);
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);
    if (tempBucket === undefined) {
      return undefined;
    }
    if (tempBucket.length === 1 && tempBucket[0][0] === key) {
      tempBucket.pop(index);
      return;
    }
    for (let i = 0; i < tempBucket.length; i++) {
      if (tempBucket[i][0] === key) {
        tempBucket.pop(index);
        return;
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);
    if (tempBucket === undefined) {
      return undefined;
    }
    for (let i = 0; i < tempBucket.length; i++) {
      if (tempBucket[i][0] === key) {
        return tempBucket[i][1];
      }
    }
  }
}

module.exports = HashTable;
