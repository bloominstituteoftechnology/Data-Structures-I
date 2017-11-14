/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// LimitedArray, and getIndexBelowMax are two tools provided for you in the helper file.
// There are other methods on the LimitedArray class in the './hash-table-helpers' file that you can use for your implementation.

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    this.length = 0;
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const hash = getIndexBelowMax(key, this.limit);
    this.storage.set(hash, value);
    this.length++;
    // this.adjustLimit();
  }

  // extra credit
  adjustLimit() {
    if (this.length >= this.limit * 0.75) {
      this.limit = this.limit * 2;
      /*
      const newStorage = new LimitedArray(this.limit);
      this.storage = newStorage;
      */
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const hash = getIndexBelowMax(key, this.limit);
    if (typeof this.storage.get(hash) === 'undefined') return undefined;
    this.storage.set(hash, undefined);
    this.length--;
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const hash = getIndexBelowMax(key, this.limit);
    if (typeof this.storage.get(hash) === 'undefined') return undefined;
    return this.storage.get(hash);
  }
}
module.exports = HashTable;
