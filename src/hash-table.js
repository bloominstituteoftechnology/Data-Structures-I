/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    if (typeof key === 'number') {
      this.storage.set(key, [key] = value);
    } else {
      this.storage.set(getIndexBelowMax(key, this.limit), [key] = value);
      // this.storage.set(getIndexBelowMax(key, this.limit), value);
    }
  }
  remove(key) {
    if (typeof key === 'number') {
      this.storage.remove(key);
    } else {
      const delKey = getIndexBelowMax(key, this.limit);
      if (this.storage.storage[delKey]) {
        this.storage.remove(key);
      }
    }
  }
  retrieve(key) {
    if (typeof key === 'number') {
      // return this.storage.storage[key];
      return this.storage.get(key);
    }
    return this.storage.get(getIndexBelowMax(key, this.limit));
  }
}

module.exports = HashTable;
