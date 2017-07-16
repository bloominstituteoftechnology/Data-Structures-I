/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert() {
    return this;
  }
  remove() {
    return this;
  }
  retrieve() {
    return this;
  }
}

module.exports = HashTable;
