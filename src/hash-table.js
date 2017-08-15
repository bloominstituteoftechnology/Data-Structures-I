/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const LinkedList = require('./linked-list');


class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const i = getIndexBelowMax(key, this.limit);
    if (this.storage[i] && this.storage[i].containsKey(key)) {
      this.storage[i].change(key, value);
    }
    if (this.storage[i] && !this.storage[i].containsKey(key)) {
      this.storage[i].addToTail([key, value]);
    } else {
      this.storage[i] = new LinkedList();
      this.storage[i].addToTail([key, value]);
    }
    this.storage.changeStorage();
  }
  retrieve(key) {
    const i = getIndexBelowMax(key, this.limit);
    return this.storage[i].search(key);
  }
  remove(key) {
    const i = getIndexBelowMax(key, this.limit);
    this.storage[i].remove(key);
  }
}

module.exports = HashTable;
