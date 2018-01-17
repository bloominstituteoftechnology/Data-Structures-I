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
    const bucket = getIndexBelowMax(key.toString(), this.limit);
    // if no values in that bucket index, then set key/value pair within that bucket
    const withinBucket = this.storage.get(bucket);
    if (withinBucket === undefined) {
      this.storage.set(bucket, [[key, value]]);
      return;
    }
    for (let i = 0; i < withinBucket.length; i++) {
      if (key === withinBucket[i][0]) {
        withinBucket[i][1] = value;
        // this.storage.set(bucket, withinBucket);
        return;
      }
    }
    withinBucket.push([key, value]);
    // this.storage.set(bucket, withinBucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucket = getIndexBelowMax(key.toString(), this.limit);
    const withinBucket = this.storage.get(bucket);
    if (withinBucket === undefined) return undefined;
    for (let i = 0; i < withinBucket.length; i++) {
      if (key === withinBucket[i][0]) {
        withinBucket.splice(i, 1);
        // this.storage.set(bucket, withinBucket);
      }
    }
    return 'no key to be found';
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const bucket = getIndexBelowMax(key.toString(), this.limit);
    if (this.storage.get(bucket) === undefined) return undefined;
    const withinBucket = this.storage.get(bucket);
    for (let i = 0; i < withinBucket.length; i++) {
      if (key === withinBucket[i][0]) {
        return withinBucket[i][1];
      }
    }
    return undefined;
  }
}

module.exports = HashTable;
