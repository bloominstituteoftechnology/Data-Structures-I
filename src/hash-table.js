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
    const index = getIndexBelowMax(String(key), this.limit);
    const bucket = this.storage.get(index);
    const arr = [key, value];

    if (bucket === undefined) {
      this.storage.set(index, [arr]);
    } else {
      let keyPresent = false;
      bucket.forEach((pair) => {
        if (pair[0] === key) {
          pair[1] = value;
          keyPresent = true;
        }
      });
      if (keyPresent === false) {
        bucket.push(arr);
      }
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(String(key), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(String(key), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
}

module.exports = HashTable;
