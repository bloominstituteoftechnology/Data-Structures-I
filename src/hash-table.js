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
    const size = this.storage.length;
    if (size / this.limit >= 0.75) {
      this.limit *= 2;
      this.storage = new LimitedArray(this.limit);
    }
    const bucketIndex = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(bucketIndex);
    if (!bucket) bucket = {};
    bucket[key] = value;
    this.storage.set(bucketIndex, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucketIndex = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(bucketIndex);
    if (!bucket || !bucket[key]) return undefined;
    delete bucket[key];
    this.storage.set(bucketIndex, bucket);
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const bucketIndex = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(bucketIndex);
    if (!bucket || !bucket[key]) return undefined;
    return bucket[key];
  }
}

module.exports = HashTable;
