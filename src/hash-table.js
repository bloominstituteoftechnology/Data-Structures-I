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
    const bucket = getIndexBelowMax(key, this.limit);
    if (this.storage.get(bucket) === undefined) this.storage.set(bucket, {});
    this.storage.get(bucket)[key] = value;
  }

  remove(key) {
    const bucket = getIndexBelowMax(key, this.limit);
    if (this.retrieve(key) === undefined) return undefined;
    delete this.storage.get(bucket)[key];
  }

  retrieve(key) {
    const bucket = getIndexBelowMax(key, this.limit);
    if (this.storage.get(bucket) === undefined) return undefined;
    return this.storage.get(bucket)[key];
  }
}

module.exports = HashTable;
