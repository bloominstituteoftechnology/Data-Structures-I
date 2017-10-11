/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
// const LinkedList = require('../src/linked-list');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    this.storage[key] = value;
    if (this.storage.length >= this.limit * 0.75) {
      this.storage.push(new LimitedArray(this.limit * 2));
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

module.exports = HashTable;
