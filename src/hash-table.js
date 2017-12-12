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
    if ((this.storage.length + 1) / this.limit > 0.75) {
      this.storage.limit *= 2;
      this.limit *= 2;
    }
    const index = getIndexBelowMax(key, this.limit);
    // this.storage.get(index) is the bucket in hash table
    if (this.storage.get(index) === undefined) this.storage.set(index, {});
    this.storage.get(index)[key] = value;
  }

  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.retrieve(key) === undefined) return undefined;
    delete this.storage.get(index)[key];
  }

  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage.get(index) === undefined) return undefined;
    return this.storage.get(index)[key];
  }
}

module.exports = HashTable;
