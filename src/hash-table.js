// Messed around with this a LOT but could never get any tests to pass.
// Changed a lot of different things around, tried different structures
// and syntaxes... nothing. But I'm uploading my broken, wonky half-
// dissected code anyway because... well... I tried.

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


    const index = getIndexBelowMax(key, this.limit);
    if (this.index === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }
    index.forEach((item) => {
      if (item.key === key) {
        item.value = value;
        this.storage.set(index,)
        return;
      }
    });
    this.storage.set(bucket, [key, value]);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucket = getIndexBelowMax(key, this.limit);
    bucket.forEach((keys, values) => {
      if (key === keys) {
        bucket.splice(1, bucket[keys]);
      }
    });
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const bucket = getIndexBelowMax(key, this.limit);
    bucket.forEach((keys, values) => {
      if (key === keys) {
        return this.storage.get(bucket);
      }
    });
  }
}
module.exports = HashTable;
