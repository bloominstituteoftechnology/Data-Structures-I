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

    // hash key to get index
    const index = getIndexBelowMax(key.toString(), this.limit);
    // use index to get whatever is at that slot
    const bucket = this.storage.get(index);
    // inspect
    if (bucket === undefined) {
      // create bucket and insert key value pair in array;
      this.storage.set(index, [[key, value]]);
      return;
    }
    // otherwise, add another key value pair if key not in the bucket;
    for (let i = 0; i < bucket.length; i++) {
      // if key is in the HashTable
      if (bucket[i][0] === key) {
        // overwrite the old value
        bucket[i][1] = value;
        // set bucket back into HashTable
        this.storage.set(index, bucket);
        return;
      }
    }
    // unique key insert new bucket

    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  // bucket = [[1, 2][3,4][5,6]]
  // bucket[1][0] = 3
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      // if key not not in bucket
      if (bucket[i][0] === undefined) {
        return undefined;
      }
      if (bucket[i][0] === key) {
        bucket[i].splice(0, 1);
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  // for (let i = 0; i < bucket.length; i++) {
  //   // if key is in the HashTable
  //   if (bucket[i][0] === key) {
  //     // overwrite the old value
  //     bucket[i][1] = value;
  //     // set bucket back into HashTable
  //     this.storage.set(index, bucket);
  //     return;
  //   }
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    // if key is not in bucket do nothing else return that key pair
    if (bucket === undefined) return;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
}

module.exports = HashTable;
