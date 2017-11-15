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
    if (this.storage.length >= this.limit * 0.75) {
      this.limit *= 2;
      this.storage.limit = this.limit;
    }
    if (typeof key === 'number') {
      key = key.toString();
    }
    const index = getIndexBelowMax(key, this.limit);
    console.log(key);
    console.log(index);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      this.storage.set(index, [index.toString(), value]);
    } else {
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage.get(i)[0] === key) {
          this.storage.set(i, [i.toString(), value]);
        }
      }
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    if (typeof key === 'number') {
      key = key.toString();
    }
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (bucket !== undefined) {
      this.storage.set(index, undefined);
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (typeof key === 'number') {
      key = key.toString();
    }
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      return undefined;
    }
    return bucket[1];
  }
}

module.exports = HashTable;
