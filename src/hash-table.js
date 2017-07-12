/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  index(key) {
    if (typeof key === 'number') key = key.toString();
    return getIndexBelowMax(key, this.limit);
  }

  insert(key, value) {
    this.storage.set(this.index(key), value);
  }

  remove(key) {
    this.storage.set(this.index(key), undefined);
  }

  retrieve(key) {
    return this.storage.get(this.index(key));
  }
}

module.exports = HashTable;
