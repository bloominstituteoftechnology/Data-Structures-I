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
    if (this.storage[index] === undefined) { // bucket is empty
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) { // check if key already exists in bucket. if so, overwrite value
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) { // key does not already exist in the bucket
        this.storage[index].push([key, value]);
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
  remove(key) {
    const index = getIndexBelowMax(key);
    this.storage[index].forEach((element) => {
      if (key === element[0]) {
        element[1] = undefined;
      }
    });
  }
}

module.exports = HashTable;
