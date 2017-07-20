/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      this.storage[index].push([key, value]);
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage[index] === undefined) {
      return false;
    }
    let valueIn2DArray = null;
    this.storage[index].forEach((element) => {
      if (key === element[0]) {
        valueIn2DArray = element[1];
      }
    });
    return valueIn2DArray;
  }
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    }
    this.storage[index].forEach((element) => {
      if (key === element[0]) {
        element[1] = undefined;
      }
    });
  }
}

module.exports = HashTable;


// * Should have the methods: `insert`, `remove`, and `retrieve`.
// * `insert` should take a key value pair and add the value to the hash table.
// * `retrieve` should return the value associated with a key.
// * `remove` should removed the given key's value from the hash table.
// * Should properly handle collisions.  If two keys map to the same index in the storage table then you should store a 2d array as the value.  Make each key/value pair its own array that is nested inside of the array stored at that index on the table.
