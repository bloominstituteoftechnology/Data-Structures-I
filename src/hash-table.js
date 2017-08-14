/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
    this.size = 0;
  }
  checkSize() {
    if (this.size >= 6) this.limit = 16;
  }
  insert(key, value) {
    this.checkSize();
    const pairArray = [[key, value]];
    const index = getIndexBelowMax(key, this.limit);
    let bucket = this.storage.get(index);
    if (!bucket) {
      this.storage.set(index, pairArray);
      bucket = this.storage.get(index);
      this.size ++;
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          this.size ++;
        }
      }
      bucket.push(pairArray.pop());
      this.size ++;
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
  }
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) bucket.splice([i][1], 1);
      }
    }
  }
}

module.exports = HashTable;
