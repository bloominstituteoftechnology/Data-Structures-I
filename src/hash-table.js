/* eslint-disable no-unused-vars */

/**
 * #### Hash Tables

 * Should have the methods: `insert`, `remove`, and `retrieve`.
 * `insert` should take a key value pair and add the value to the hash table.
 * `retrieve` should return the value associated with a key.
 * `remove` should removed the given key's value from the hash table.
 * Should properly handle collisions.  If two keys map to the same index in the
 * storage table then you should store a 2d array as the value.  Make each key/value
 * pair its own array that is nested inside of the array stored at that index on the table.
 */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit) {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  getIndex(key) {
    return getIndexBelowMax(`${key}`, this.limit);
  }

  insert(key, value) {
    const index = this.getIndex(key);
    const element = [[key, value]];
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
