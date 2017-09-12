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
    const bucket = this.storage.get(index);
    if (!bucket) { // bucket is empty
      this.storage.set(index, [[key, value]]);
    } else {
      let inserted = false;
      for (let i = 0; i < bucket.length; i++) { // check if key already exists in bucket. if so, overwrite value
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          inserted = false;
        }
      }
      if (!inserted) { // key does not already exist in the bucket
        bucket.push([key, value]);
      }
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    bucket.forEach((element) => {
      if (key === element[0]) {
        element[1] = undefined;
      }
    });
  }
}

module.exports = HashTable;
