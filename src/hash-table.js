/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    let pos = this.hashFunc(key, this.limit);
    let bucket = this.storage[pos]
    if (!bucket) {
      let bucket = [];
      this.storage[pos] = bucket;
    }
    let fixConflict = false;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        fixConflict = true;
      }
    }
  };
  hashFunc(str, max) {
    let hash = 0;
    for (let i = 0;i < str.length; i++) {
      let letter = str[i];
      hash = (hash << 5) + letter.charCodeAt(0);
      hash = (hash & hash) % max;
    }
    return hash;
  };
}
module.exports = HashTable;
