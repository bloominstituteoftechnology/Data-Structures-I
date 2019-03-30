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
    const keyHash = getIndexBelowMax(key, this.limit);
    // i've been here before; the first time I made hash tables the buckets were arrays
    // i then implemented the bucket as linked lists...but this time I'm thinking...why not objects?
    if (this.storage[keyHash] === undefined) {
      this.storage[keyHash] = {};
      this.storage[keyHash][key] = value;
    } else {
      this.storage[keyHash][key] = value;
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const keyHash = getIndexBelowMax(key, this.limit);
    if (this.storage[keyHash][key] !== undefined) {
      delete this.storage[keyHash][key];
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const keyHash = getIndexBelowMax(key, this.limit);
    if (this.storage[keyHash][key] === undefined) return null;
    return this.storage[keyHash][key];
  }
}

module.exports = HashTable;

