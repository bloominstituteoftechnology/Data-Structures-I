/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax, get, checkLimit } = require('./hash-table-helpers');

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
    const obj = {};
    obj[key] = value;
    if (getIndexBelowMax(value, this.limit) === 0) {
      const bucket = [obj];
      this.storage[0] = bucket;
    } else {
      this.storage[getIndexBelowMax(value, this.limit)].push(obj);
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    for (let i = 0; i < this.storage[getIndexBelowMax(key, this.limit)].length; i++) {
      if (key in this.storage[getIndexBelowMax(key, this.limit)][i]) {
        this.storage[getIndexBelowMax(key, this.limit)].splice(i, 1);
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const arr = this.storage;
    arr.forEach((bucket) => {
      bucket.forEach((kv) => {
        if (key in kv) return kv[key];
      });
    });
  }
}

module.exports = HashTable;
