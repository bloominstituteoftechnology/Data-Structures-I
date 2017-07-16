/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  hash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) total += data.charCodeAt(i);
    return total % this.limit;
  }
  insert(key, value) {
    const index = this.hash(key);
    if (this.storage.storage[index] === undefined) {
      this.storage.storage[index] = [[key, value]];
      if (this.storage.length > this.limit * 0.75) this.limit *= 2;
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage.storage[index].length; i++) {
        if (this.storage.storage[index][i][0] === key) {
          this.storage.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage.storage[index].push([key, value]);
        if (this.storage.length > this.limit * 0.75) this.limit *= 2;
      }
    }
  }
  retrieve(key) {
    const index = this.hash(key);
    if (this.storage.storage[index] === undefined) return undefined;
    for (let i = 0; i < this.storage.storage[index].length; i++) if (this.storage.storage[index][i][0] === key) return this.storage.storage[index][i][1];
  }
  remove(key) {
    const index = this.hash(key);
    if (this.storage.storage[index].length === 1 && this.storage.storage[index][0][0] === key) delete this.storage.storage[index];
    else for (let i = 0; i < this.storage.storage[index].length; i++) if (this.storage.storage[index][i][0] === key) delete this.storage.storage[index][i];
  }
}

module.exports = HashTable;
