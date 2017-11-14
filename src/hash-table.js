/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  hashtable() {
    const max = this.bucketCount;
    this.bucketCount = this.limit;
    this.buckets = this.storage;
    for (let i = 0; i < this.bucketCount; i++) {
      this.buckets.push(new HashTable());
    }
  }
  hashFunction(str) {
    const max = this.bucketCount;
    return this.storage.getIndexBelow(str, max);
  }

  insert(key, value) {
    const index = this.hashFunction(key);
    if (!this.buckets.checkLimit(index)) {
      this.buckets.set(index, value);
      this.bucketCount++;
    }
  }

  remove(key) {
    const index = this.buckets.retrieve(key);
    const hash = this.buckets.get(index);
    if (this.buckets.values.hasProperty(hash) && this.buckets.values[hash].hasProperty(index)) {
      delete this.storage.values[hash][index];
      this.bucketCount--;
    }
  }
  retrieve(key) {
    const index = this.hashFunction(key);
    const hash = this.buckets.get(index);
    if (this.buckets.values.hasProperty(hash) && this.buckets.values[hash].hasProperty(index)) {
      return this.buckets.values[hash][index];
    }
    return null;
  }
}
module.exports = HashTable;
