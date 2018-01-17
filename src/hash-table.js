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
    const tempStore = this.storage.get(index);

    if (tempStore === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }
    for (let i = 0; i < tempStore.length; i++) {
      if (tempStore[i][0] === key) {
        tempStore[i][1] = value;
        this.storage.set(index, tempStore);
        return;
      }
    }
    tempStore.push([key, value]);
    this.storage.set(index, tempStore);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempStore = this.storage.get(index);
    if (!tempStore) return;
    if (tempStore.length === 1) {
      this.storage.set(index, undefined);
      return;
    }
    for (let i = 0; i < tempStore.length; i++) {
      if (tempStore[i][0] === key) {
        tempStore.splice(i, 1);
        this.storage.set(index, tempStore);
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempStore = this.storage.get(index);
    if (!tempStore) return;
    for (let i = 0; i < tempStore.length; i++) {
      if (tempStore[i][0] === key) {
        return tempStore[i][1];
      }
    }
  }
}

module.exports = HashTable;
