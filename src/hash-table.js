
/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key);
    if (!this.storage[index]) {
      this.storage[index] = [[key, value]];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          break;
        }
      }
    }
    this.storage[index].push([key, value]);
  }
  remove(key) {
    const index = getIndexBelowMax(key);
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        delete this.storage[index][i];
      }
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key);
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1];
      }
    }
  }
}
module.exports = HashTable;
