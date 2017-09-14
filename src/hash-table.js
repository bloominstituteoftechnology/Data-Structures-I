/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit); // get index from hashing function
    let bucket = this.storage.get(index); // get the bucket at that index
    if (bucket) {
      let overridenFlag = false;
      for (let i = 0; i < bucket.length; i++) {
        const pair = bucket[i];
        if (pair[0] === key) {
          pair[1] = value;
          overridenFlag = true;
        } else {
          bucket.push([key, value]);
        }
      }
    }
    if (!bucket) {
      bucket = [];
      bucket.push([key, value]);
      this.storage.set(index, bucket);
    }
  }
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) {
      return;
    }
    if (bucket) {
      if (bucket.length === 1) {
        bucket[0] = undefined;
        return;
      }
      for (let i = 0; i < bucket.length; i++) {
        const pair = bucket[i];
        if (pair[0] === key) {
          pair[1] = undefined;
          return;
        }
      }
    }
    return;
  }
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair !== undefined && pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }
}

module.exports = HashTable;
