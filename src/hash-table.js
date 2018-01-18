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
    // If there is no bucket for the parameters, this will create a new bucket
    // for them, then add them to the bucket as a key/value pair.
    if (bucket === undefined) {
      // I'm assuming that the outer array brackets represent the bucket itself.
      // The inner array brackets hold the new key/value pair.
      return this.storage.set(index, [[key, value]]);
    }
    // This iterates through the bucket.
    for (let i = 0; i < bucket.length; i++) {
      // This checks to see if any of the keys in the bucket match the paramater key.
      if (bucket[i][0] === key) {
        // If it does, it changes the value of that key to the newer value stated in
        // the parameters.
        bucket[i][1] = value;
        // Now that the bucket has been properly altered, it can now be set. This is because
        // the 'bucket' parameter holds the changes that were performed in this loop.
        return this.storage.set(index, bucket);
      }
    }
    // I believe that this avoids collision (two objects being assigned the same hash
    // key) by ensuring that eack key/value pair has a unique place in the bucket array.
    bucket.push([key, value]);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      return undefined;
    }
    this.storage.set(index, undefined);
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
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
