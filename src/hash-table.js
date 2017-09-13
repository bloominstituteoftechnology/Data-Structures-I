/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    if (typeof key === 'number') {
      this.storage.set(key, value);
    }
    if (typeof key === 'string') {
      key = key.toLowerCase();
      const position = getIndexBelowMax(key, this.limit);
      this.storage.set(position, value);
    }
  }
  remove(key) {
    if (typeof key === 'number') {
      return this.storage.set(key, undefined);
    }
    if (typeof key === 'string') {
      key = key.toLowerCase();
    }
    const position = getIndexBelowMax(key, this.limit);
    this.storage.set(position, undefined);
  }
  retrieve(key) {
    if (typeof key === 'number') {
      return this.storage.get(key);
    }
    if (typeof key === 'string') {
      key = key.toLowerCase();
    }
    const position = getIndexBelowMax(key, this.limit);
    return this.storage.get(position);
  }
}

module.exports = HashTable;
