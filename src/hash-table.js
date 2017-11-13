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
  insert(rawKey, value) {
    const key = String(rawKey);
    const insertionKey = getIndexBelowMax(key, this.limit); 
    const bucket = {key : value};
    if (!this.storage.get(insertionKey)){
      this.storage.set(insertionKey, bucket);
    } else {
      const oldBucket = this.storage.get(insertionKey);
      oldBucket.key = value;
    }

  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(rawKey) {
    if(rawKey !== undefined){
      const key = String(rawKey);
      const insertionKey = getIndexBelowMax(key, this.limit);
      const bucket = this.storage.get(insertionKey);
      if(typeof bucket === 'object'){
        bucket.key = undefined;
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(rawKey) {
    const key = String(rawKey);
    const insertionKey = getIndexBelowMax(key, this.limit);
    const bucket =this.storage.get(insertionKey);
    if(typeof bucket === 'object'){
      return bucket.key;
    }
    return undefined;
  }
}

module.exports = HashTable;
