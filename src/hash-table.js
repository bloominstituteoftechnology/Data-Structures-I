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
    if (!isNaN(key) && key < this.limit) {
      this.storage.set(key, value);
    } else if (this.storage.get(getIndexBelowMax(key)) !== undefined || null) {
      const current = this.storage.get(getIndexBelowMax(key));
      const newArray = [[0, current], [key, value]];
      this.storage.set(getIndexBelowMax(key), newArray);
    } else {
      this.storage.set(getIndexBelowMax(key), value);
    }
  }
  remove(key) {
    this.storage.set(getIndexBelowMax(key), undefined);
  }
  retrieve(key) {
    if (!isNaN(key)) {
      return this.storage.get(key);
    } else if (Array.isArray(this.storage.get(getIndexBelowMax(key)))) {
      let marker;
      if (this.storage.get(getIndexBelowMax(key))[0][0] === key) {
        marker = this.storage.get(getIndexBelowMax(key))[0][1];
      } else if (this.storage.get(getIndexBelowMax(key))[1][0] === key) {
        marker = this.storage.get(getIndexBelowMax(key))[1][1];
      } else if (marker === undefined && this.storage.get(getIndexBelowMax(key))[0][0] === 0) {
        marker = this.storage.get(getIndexBelowMax(key))[0][1];
      } else if (marker === undefined && this.storage.get(getIndexBelowMax(key))[1][0] === 0) {
        marker = this.storage.get(getIndexBelowMax(key))[1][1];
      }
      return marker;
    }
    return this.storage.get(getIndexBelowMax(key));
  }
}

module.exports = HashTable;
