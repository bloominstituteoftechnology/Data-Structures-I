/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit) {
    this.limit = limit || 8;// Modified to add set limit functionality when creating
                            // a new instance of the HashTable class
    this.storage = new LimitedArray(this.limit); // Storage was another internal array according to the helper...
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    // This inserts a key and value to the array
    this.storage[getIndexBelowMax(`${key}`, this.limit)] = value;
  }
  retrieve(key) {
    // This retrieves the items from the array
    return this.storage[getIndexBelowMax(`${key}`, this.limit)];
  }
  remove(key) {
    // This will remove the items from the array
    delete this.storage[getIndexBelowMax(`${key}`, this.limit)];
  }
}

module.exports = HashTable;
