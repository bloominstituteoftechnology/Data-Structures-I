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
    if ((this.storage.length / this.limit) >= (0.75)) {
      this.storage.limit *= 2;
      this.limit *= 2;
    }
    // grab the index associated with this key via the hash function
    const index = getIndexBelowMax(key.toString(), this.limit);
    // fetch whatever is stored at this index
    const tempBucket = this.storage.get(index);

    if (tempBucket === undefined) {
      // if bucket is undefined, we need to add a bucket, this.storage.set(index, []); this would add an empty bucket
      this.storage.set(index, [[key, value]]);
      return;
    }

    // we have a bucket at this index already
    // we want to check to see if the keys we are trying to insert is already in this bucket
    for (let i = 0; i < tempBucket.length; i++) {
      // check to see if any keys in the bucket match the key we want to insert
      if (tempBucket[i][0] === key) {
        // this means we have a duplicate key we're trying to insert
        // we need to overwrite the old value with the new value
        tempBucket[i][1] = value;
        this.storage.set(index, tempBucket);
        return;
      }
    }

    // The key we are trying to insert is unique
    tempBucket.push([key, value]);
    this.storage.set(index, tempBucket);
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);
    if (tempBucket === undefined) return;
    for (let i = 0; i < tempBucket.length; i++) {
      if (tempBucket[i][0] === undefined) return;
      if (tempBucket[i][0] === key) {
        tempBucket[i].splice(0, 1);
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);
    if (tempBucket === undefined) return;
    for (let i = 0; i < tempBucket.length; i++) {
      if (tempBucket[i][0] === key) {
        return tempBucket[i][1];
      }
    }
    return;
  }
}

module.exports = HashTable;
