/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
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
    const bucketIndex = getIndexBelowMax(key, this.limit);
    if (!this.storage.get(bucketIndex)) {
      this.storage.set(bucketIndex, []);
    }
    let wasChanged = false;
    this.storage.get(bucketIndex).forEach((arr) => {
      if (arr[0] === key) {
        arr[1] = value;
        wasChanged = true;
        return;
      }
    });
    if (!wasChanged) {
      this.storage.get(bucketIndex).push([key, value]);
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucketIndex = getIndexBelowMax(key, this.limit);
    if (this.storage.get(bucketIndex) !== undefined) {
      this.storage.get(bucketIndex).forEach((arr, i) => {
        if (arr[0] === key) {
          this.storage.get(bucketIndex).splice(i, 1);
        }
      });
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const bucketIndex = getIndexBelowMax(key, this.limit);
    let value;
    if (this.storage.get(bucketIndex) !== undefined) {
      this.storage.get(bucketIndex).forEach((arr) => {
        if (arr[0] === key) {
          value = arr[1];
          return;
        }
      });
      return value;
    }
  }
}

module.exports = HashTable;
