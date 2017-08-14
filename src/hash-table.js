/* eslint-disable no-unused-vars */
class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit);
    const pair = [key, value];
    const bucket = this.storage.get(index);
    if (!bucket) this.storage.set(index, [pair]);
    else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) bucket[i][1] = value;
      }
      bucket.push(pair);
    }
    if (this.storage.length >= this.limit * 0.75) {
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
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) bucket.splice(i, 1);
      }
    }
  }
}

module.exports = HashTable;
