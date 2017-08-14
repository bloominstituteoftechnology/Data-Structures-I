/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    this.storage.set(index, value);
    if (this.storage.length >= 6) {
      this.limit = 16;
    }
  }
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    this.storage.set(index, undefined);
  }
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    return this.storage.get(index);
  }
}
module.exports = HashTable;
