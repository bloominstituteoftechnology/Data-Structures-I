/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    let previous;
    if (typeof this.storage[key] !== 'string') {
      previous = this.storage[key];
    } else {
      this.length++;
    }
    this.storage[key] = value;
    return previous;
  }
}
module.exports = HashTable;
