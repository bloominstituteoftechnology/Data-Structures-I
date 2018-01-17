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
  // Adds the given key, value pair to the hash table -- check
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const idx = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(idx);

    if (bucket === undefined) {
      this.storage.set(idx, [[key, value]]);
      return;
    }// else that means theres something else in the bucket already
    for (let i = 0; i < bucket.length; i++) {
      const bucketKey = bucket[i][0];
      if (bucketKey === key) { // itere through loop to see if the key in  the bucket exist, overwrite older value associated with key
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);// this is handling collision. If
    //  were we store all of the entires of the bucket
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const idx = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(idx);

    if (bucket === undefined) return undefined;// error handling for the test. "should not throw error for existing key "
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        delete bucket[i][0];
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const idx = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(idx);
    // if key is not in bucket do nothing else return that key pair
    if (bucket === undefined) return;// Error handling
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
}


module.exports = HashTable;
