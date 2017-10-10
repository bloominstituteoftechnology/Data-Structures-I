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
    // definition of storage in constructor gives access to limited array class
    this.storage.set(key, value);
    const index = getIndexBelowMax(value, this.storage.length);
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
    }
    bucket[key] = value;
    let override = false;
    // now iterate through our bucket to see if there are any conflicting
    // key value pairs within our bucket. If there are any, override them.
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        // overide value stored at this key
        tuple[1] = value;
        override = true;
      }
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    delete this.storage[key];
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {

  }
}

module.exports = HashTable;
