/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
  }

  fullCapacity() {
    let fullCell = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCell++;
    });
    return fullCell / this.limit >= 0.75;
  }

  resize() {
    this.limit *= 2;
    const resizeStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    resizeStorage.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  insert(key, value) {
    if (this.fullCapacity()) this.resize();
    const hashIndex = getIndexBelowMax(key.toString(), this.limit);

    let bucket = this.storage.get(hashIndex) || [];
    bucket = bucket.filter(pair => pair[0] !== key);
    bucket.push([key, value]);

    this.storage.set(hashIndex, bucket);
  }

  remove(key) {
    const hashIndex = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(hashIndex);

    if (bucket) {
      bucket = bucket.filter(pair => pair[0] !== key);
      this.storage.set(hashIndex, bucket);
    }
  }

  retrieve(key) {
    const hashIndex = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(hashIndex);

    let retrieval;
    if (bucket) {
      retrieval = bucket.filter(pair => pair[0] === key)[0];
    }
    return retrieval ? retrieval[1] : undefined;
  }
}
const myHash = new HashTable();

module.exports = HashTable;
