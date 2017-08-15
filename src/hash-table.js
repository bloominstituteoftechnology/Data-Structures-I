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
    if (this.storage[i]) {
      this.storage[i].push([key, value]);
    } else {
      this.storage[i] = [[key, value]];
    }
    this.storage.changeStorage();
  }
  retrieve(key) {
    const i = getIndexBelowMax(key, this.limit);
    let found;
    this.storage[i].forEach((k) => {
      if (k[0] === key) {
        found = k[1];
      }
    });
    return found;
  }
  remove(key) {
    const i = getIndexBelowMax(key, this.limit);
    const index = this.storage[i].findIndex(k => k[0] === key);
    this.storage[i].splice(index, 1);
  }
}

module.exports = HashTable;
