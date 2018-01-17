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
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) {
      // if bucket is undefined, we need to add a bucket there
      this.storage.set(index, [[key, value]]);
      return;
    }

    // we have a collision or we have an empty bucket
    for (let i = 0; i < bucket.length; i++) {
      // check to see if any keys in the bucket match the key we want to insert
      if (bucket[i][0] === key) {
        // this means we have a duplicate key we're trying to insert
        bucket[i][1] = value;
        this.storage.set(index, bucket);
        return;
      }
    }

    // the key we're trying to insert is unique
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) return;

    if (bucket.length === 1) {
      this.storage.set(index, undefined);
      return;
    }

    bucket.forEach((pair, i) => {
      if (pair[0] === key) {
        bucket.splice(i, 1);
        this.storage.set(index, bucket);
      }
    });
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    let result;
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          result = bucket[i][1];
        }
      }
    }
    return result;
  }
}

module.exports = HashTable;
