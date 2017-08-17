/* eslint-disable no-unused-vars */

/**
 * #### Hash Tables
 * ### Extra Credit
 * Uncomment the final test in `hash-table.test.js` and make the hash-table rebalance.
 * As a hash table increases in size the associated storage table will typically double
 * in size once it reaches a certain capacity. Change the hash table so that it doubles
 * the size of the storage table once it is 75% full.
 */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  manageStorage() {
    if (this.storage.length / this.limit > 0.75) {
      this.limit *= 2;
      const resizedStorage = new LimitedArray(this.limit);
      this.storage.each((element, index) => resizedStorage.set(index, element));
      this.storage = resizedStorage;
    }
  }

  getIndex(key) {
    return getIndexBelowMax(`${key}`, this.limit);
  }

  insert(key, value) {
    this.manageStorage();
    const index = this.getIndex(key);
    const element = this.storage.get(index) || [];
    element.push([key, value]);
    this.storage.set(index, element);
  }

  retrieve(key) {
    const index = this.getIndex(key);
    const element = this.storage.get(index);
    if (!element) return;
    const values = element.find(value => value[0] === key);
    const returnVal = values ? values[1] : undefined;
    return returnVal;
  }

  remove(key) {
    const index = this.getIndex(key);
    const element = this.storage.get(index);
    if (element.length === 1) return this.storage.set(index, undefined);
    element.forEach((value, i) => {
      if (value[0] === key) element.splice(i, 1);
      this.storage.set(index, element);
    });
  }
}

module.exports = HashTable;

