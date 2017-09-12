/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const LinkedList = require('../src/linked-list');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit);
    let arr = this.storage.get(index);
    if (arr === undefined) {
      // this.storage.set(index, []);
      this.storage.set(index, new LinkedList());
      arr = this.storage.get(index);
    }
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === key) {
          arr[i] = [key, value];
          return this.size;
        }
      }
    }
    arr.push([key, value]);
    this.rebalance();
    return this.size;
  }
  rebalance() {
    if (this.size / this.limit > 0.75) {
      this.limit *= 2;
      const tmp = this.storage;
      this.storage = new LimitedArray(this.limit);
      tmp.each((item) => {
        if (item === undefined) {
          return;
        }
        item.forEach(([key, value]) => {
          this.insert(key, value);
        });
      });
    }
  }
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const arr = this.storage.get(index);
    if (arr === undefined) {
      return;
    }
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i][0] === key) {
          const data = arr[i][1];
          delete arr[i];
          return data;
        }
      }
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const arr = this.storage.get(index);
    if (arr === undefined) {
      return;
    }
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i][0] === key) {
          const data = arr[i][1];
          return data;
        }
      }
    }
  }
  get size() {
    let count = 0;
    this.storage.each(item => count = item === undefined ? count : ++count);
    return count;
  }
}

module.exports = HashTable;
