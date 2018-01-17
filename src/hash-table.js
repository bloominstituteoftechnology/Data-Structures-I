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
    const index = getIndexBelowMax(key.toString(), this.limit); // grab index associated with key via hash function
    const bucket = this.storage.get(index); // fetch whatever is stored at this index

    if (this.storage.length >= this.limit * 0.75) {
      this.limit *= 2;
      this.storage.limit *= 2;
    }

    if (bucket === undefined) {
      // if bucket is undefined, we need to create the bucket at that index
      this.storage.set(index, [[key, value]]);
      return;
    }
    // we have a bucket at this index already
    // we want to check to see if the key we're trying to insert is already in the bucket
    for (let i = 0; i < bucket.length; i++) {
      // check to see if any keys in the bucket match the key we want to insert
      if (bucket[i][0] === key) {
        // this means we have a duplicate key we're trying to insert
        // we need to overwrite the old value with the new value
        bucket[i][1] = value;
        this.storage.set(index, bucket);
        return;
      }
    }
    // the key we are inserting is unique
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.storage.set(index, bucket);
        return;
      }
      return;
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
    return;
  }
}

module.exports = HashTable;
