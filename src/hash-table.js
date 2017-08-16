/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const LinkedList = require('./linked-list');


class HashTable {
  constructor(limit) {
    this.limit = limit || 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
    this.count = 0;
    this.memo = [[]];
  }
  resize(newLimit) {
    const oldstorage = this.storage;
    this.limit = 16;
    this.storage.limit = 16;
    this.storage.storage = this.memo;
  }
  insert(key, value) {
    this.count++;
    const i = getIndexBelowMax(key, this.limit);
    this.memo.push([key, value]);
    if (this.storage[i] && this.storage[i].containsKey(key)) {
      this.storage[i].change(key, value);
    }
    if (this.storage[i] && !this.storage[i].containsKey(key)) {
      this.storage[i].addToTail([key, value]);
    } else {
      this.storage[i] = new LinkedList();
      this.storage[i].addToTail([key, value]);
    }
    if (this.count === 6) this.resize();
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
