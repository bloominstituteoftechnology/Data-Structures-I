/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(data, ...theArgs) {
    let pos = getIndexBelowMax(data, this.limit);
    if (typeof data === 'number') {
      pos = data;
    }
    this.storage[pos] = theArgs[0];
  }
  remove(data) {
    let pos = getIndexBelowMax(data, this.limit);
    if (typeof data === 'number') {
      pos = data;
    }
    this.storage[pos] = undefined;
  }
  retrieve(data) {
    let pos = getIndexBelowMax(data, this.limit);
    if (typeof data === 'number') {
      pos = data;
    }
    return this.storage[pos];
  }
}

module.exports = HashTable;
