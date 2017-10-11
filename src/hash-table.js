/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const {
  LimitedArray,
  getIndexBelowMax
} = require('./hash-table-helpers');

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
  

    //Fetch the bucket associated with the given key using the getIndexBelowMax function
    // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
    // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key

    insert(key, value) {
      // Adds the given key, value pair to the hash table up to the number of max indices
      const index = doHash(key, this.limit);
      const bucket = this.storage[index];
      if (bucket) {
        // get through element stored in storage[index] to find key   
        for (var i = 0; i < bucket.length; i++) {
          // if found change the value of the key 
          if (bucket[i][0] === key) {
            bucket[i][1] = value;
            // if not found add key and value
          } else {
            bucket.push([key, value]);
          }
        }
        // if there is no bucket create it 
      } else {
        this.storage[index] = [key, value];
      }
    }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key);
    for (let i = 0; i < this.storage[index]; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index].splice(index, 1);
        return;
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key);
    for (let i = 0; i < this.storage[index]; i++) {
      if (this.storage[index][i][0] === key) return this.storage[index][i][1];

    }
  }

  module.exports = HashTable;
