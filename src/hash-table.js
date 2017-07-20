/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
  	// Takes a key value pair and adds the value to the hash table
  }
  retrieve(key) {
  	// Returns the value associated with the key passed into the method as the argument
  }
  remove(key) {
  	// Removes the value associated with the key passed from the hash table
  }
}

// Should properly handle collisions.  If two keys map to the same index in the storage table
// then you should store a 2d array as the value.  Make each key/value pair its own array that
// is nested inside of the array stored at that index on the table.

module.exports = HashTable;
