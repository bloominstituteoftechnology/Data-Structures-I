/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

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
    if (typeof key === 'number') {
      // this.storage.storage[key] = value;
      this.storage.set(key, value);
      // console.log('number was a key');
    } else {
      // this.storage.storage[getIndexBelowMax(key, this.limit)] = value;
      this.storage.set(getIndexBelowMax(key, this.limit), value);
      // console.log('key was string');
    }
    // console.log(typeof key);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    if (typeof key === 'number') {
      this.storage.remove(key);
    } else {
      const delKey = getIndexBelowMax(key, this.limit);
      if (this.storage.storage[delKey]) {
        this.storage.remove(key);
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (typeof key === 'number') {
      // return this.storage.storage[key];
      return this.storage.get(key);
    }
    return this.storage.get(getIndexBelowMax(key, this.limit));
  }
}

module.exports = HashTable;
