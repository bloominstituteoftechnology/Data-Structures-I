/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  checkCapacity() {
    let count = 1;
    this.storage.each((collection) => {
      if (collection !== undefined) count++;
    });
    if (count / this.limit > 0.75) return true;
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each((collection) => {
      if (collection === undefined) return;
      collection.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  insert(key, value) {
    if (this.checkCapacity()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    const collection = this.storage.get(index);

    if (collection === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }
    for (let i = 0; i < collection.length; i++) {
      if (collection[i][0] === key) {
        collection[i][1] = value;
        this.storage.set(index, collection);
        return;
      }
    }
    collection.push([key, value]);
    this.storage.set(index, collection);
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const collection = this.storage.get(index);
    if (collection === undefined) return undefined;
    for (let i = 0; i < collection.length; i++) {
      if (collection[i][0] === key) return collection[i][1];
    }
  }
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const collection = this.storage.get(index);
    if (collection.length === 1) return this.storage.set(index, undefined);
    collection.forEach((pair, i) => {
      if (pair[0] === key) collection.splice(i, 1);
      this.storage.set(index, collection);
    });
  }
}

module.exports = HashTable;