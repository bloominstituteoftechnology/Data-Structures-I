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
  insert(key, value) {
    if (typeof key === 'number') {
      this.storage.set(key, value);
    } else {
      this.storage.set(getIndexBelowMax(key, this.limit), value);
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
