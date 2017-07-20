/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  
  insert(key, value) {
    const pairArray = [[key, value]];
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) {
      this.storage.set(index, pairArray);
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
        }
      }
      bucket.push(pairArray.pop());
    } 
    if (this.storage.length >= (this.limit * 0.75)) {
      this.limit *= 2;
      this.storage.limit = this.limit;
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

  getHash(key) {
    if (typeof key === 'number' && Number.isInteger(key) && key < this.limit) {
      return key;
    }
    const hash = getIndexBelowMax(key, this.limit);
    return hash;
  }

  remove(key) {
    this.storage.set(this.getHash(key), undefined);
  }
}

module.exports = HashTable;
