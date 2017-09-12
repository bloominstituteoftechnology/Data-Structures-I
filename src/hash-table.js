/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      this.storage[index].push([key, value]);
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage[index] === undefined) {
      return false;
    }
    let valueIn2DArray = null;
    this.storage[index].forEach((element) => {
      if (key === element[0]) {
        valueIn2DArray = element[1];
      }
    });
    return valueIn2DArray;
  }
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    }
    this.storage[index].forEach((element) => {
      if (key === element[0]) {
        element[1] = undefined;
      }
    });
  }
}

module.exports = HashTable;
