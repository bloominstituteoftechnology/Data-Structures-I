/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(key, value) {
    if (key !== undefined) {
      this.storage[key] = value;
    }
    if (this.limit * 0.75 < this.storage.length) {
      for (let i = 0; i < this.storage.length; i++) {
        this.storage[i].push([]);
      }
    }
  }
  remove(key) {
    if (key in this.storage) {
      const previous = this.storage[key];
      delete this.storage[key];
      return previous;
    }
    return undefined;
  }
  retrieve(key) {
    return (key in this.storage) ? this.storage[key] : undefined;
  }
}
HashTable.prototype.checkSize = 0;
module.exports = HashTable;
