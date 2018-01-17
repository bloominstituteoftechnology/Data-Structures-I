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
  // - Fetch the bucket associated with the given key using the getIndexBelowMax function
  // - If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // - If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const bucketIndex = getIndexBelowMax(key.toString(), this.limit); // returns the bucket associated with the given key
    const bucket = this.storage.get(bucketIndex); // returns the bucket associated with the given key
    // This simply ensures that the hash function always returns an index that is within the boundaries of the limited array

    if (bucket === undefined) {
      this.storage.set(bucketIndex, [[key, value]]);
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      const bucketKey = bucket[i][0];
      if (bucketKey === key) {
        bucket[i][1] = value;
        this.storage.set(bucketIndex, bucket);
        return;
      }
    }

    bucket.push([key, value]);
    this.storage.set(bucketIndex, bucket);
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {

  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {

  }
}

module.exports = HashTable;
