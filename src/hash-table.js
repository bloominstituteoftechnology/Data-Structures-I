/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  // hashtable() {
  //   const max = this.bucketCount;
  //   this.bucketCount = this.limit;
  //   this.buckets = this.storage;
  //   for (let i = 0; i < this.bucketCount; i++) {
  //   }
  // }
  // hashFunction(key) {
  //   const max = this.limit;
  //   return getIndexBelowMax(key.toString(), max);
  // }

  insert(key, value) {
    // if (!this.storage.checkLimit(index)) {
      // this.buckets.get(index);
      // this.bucketCount++;
      // }
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index) || [];
    let foundPair = false;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        foundPair = true;
      }
    }
    if (!foundPair) bucket.push([key, value]);
    this.storage.set(index, bucket);
  }

  remove(key) {
    // const hash = this.buckets.get(index);
    // if (this.buckets.values.hasProperty(hash) && this.buckets.values[hash].hasProperty(index)) {
    //   delete this.storage.values[hash][index];
    //   this.bucketCount--;
    // }
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);
    if (bucket) {
      bucket = bucket.filter(pair => pair[0] !== key);
      this.storage.set(index, bucket);
    }
  }
  retrieve(key) {
  //   const index = this.hashFunction(key);
  //   const hash = this.buckets.get(index);
  //   if (this.buckets.values.hasProperty(hash) && this.buckets.values[hash].hasProperty(index)) {
  //     return this.buckets.values[hash][index];
  //   }
  //   return null;
  // }
    const index = getIndexBelowMax(key.toString(), this.max);
    const bucket = this.storage.get(index);
    let retrieved;
    if (bucket) {
      retrieved = bucket.filter(pair => pair[0] === key)[0];
    }
    return retrieved ? retrieved[1] : undefined;
  }
}
module.exports = HashTable;
