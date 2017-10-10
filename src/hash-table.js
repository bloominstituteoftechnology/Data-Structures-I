/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

const keyObj = {};

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
    const index = this.fetchKey(key);
    this.storage.set(index, value);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const indexk = this.fetchKey(key);
    this.storage.each((element, index) => {
      if (element === this.retrieve(indexk)) {
        this.storage.storage.splice(index, 1);
      }
    });
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = this.fetchKey(key);
    return this.storage.get(index);
  }

  fetchKey(key) {
    if (!(isNaN(key))) return key;
    const keyTest = !(Object.values(keyObj).includes(getIndexBelowMax(key, this.limit)));
    if (keyObj[key] !== undefined) {
      return keyObj[key];
    } else if (keyTest) {
      keyObj[key] = getIndexBelowMax(key, this.limit);
    } else if (!(keyTest)) {
      keyObj[key] = getIndexBelowMax(key + key, this.limit);
    }
    return keyObj[key];
  }
}

module.exports = HashTable;
