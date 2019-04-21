/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

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
    let hash = getIndexBelowMax(key, this.limit);
    let bucket = this.storage.get(hash)

    bucket.push([key, value]);
    bucket.forEach((tuple, i) => {
      if (tuple[0] == key) {
        bucket.splice(i, 1, tuple);
      }
    });
    if (this.storage.length > this.limit * 0.75) {
      this.resize(2 * this.limit);
    }
    this.storage.set(hash, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    let hash = getIndexBelowMax(key, this.limit);
    let bucket = this.storage.get(hash);
    let match;

    bucket.forEach((tuple) => {
      if (tuple[0] == key) {
        match = tuple[1];
      } 
    });
  } 
}

module.exports = HashTable;