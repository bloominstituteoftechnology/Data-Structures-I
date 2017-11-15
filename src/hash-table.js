/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index) || [];
    let foundPair = false;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        foundPair = true;
      }
    }
    if (!foundPair) {
      bucket.push([key, value]);
      this.storage.set(index, bucket);
    }
    if ((this.storage.length / this.limit) >= this.limit * 0.75) {
      this.storage.resize(this.limit * 2);
    }
  }
  resize(newLimit) {
    const oldStorage = this.storage;
    this.limit = newLimit;
    this.storage = [];
    // oldStorage = oldStorage.each((bucket) => {
    for (let i = 0; i < oldStorage.length; i++) {
      const bucket = oldStorage[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          const index = getIndexBelowMax(bucket[j][0], this.limit);
          let newBucket = this.storage[index];
          if (newBucket) {
            newBucket.push([bucket[j][0], bucket[j][1]]);
          } else {
            newBucket = [];
            newBucket.push([bucket[j][0], bucket[j][1]]);
          }
        }
      }
    }
    // });
  }

  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);
    if (bucket) {
      bucket = bucket.filter(pair => pair[0] !== key);
      this.storage.set(index, bucket);
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    let retrieved;
    if (bucket) {
      retrieved = bucket.filter(pair => pair[0] === key)[0];
    }
    return retrieved ? retrieved[1] : undefined;
  }
}
module.exports = HashTable;
