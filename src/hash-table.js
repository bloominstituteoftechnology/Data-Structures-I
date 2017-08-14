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
    this.storage[index] = value;
  }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    return this.storage[index];
  }

  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    this.storage[index] = undefined;
  }
}

module.exports = HashTable;

// * Should have the methods: `insert`, `remove`, and `retrieve`.
//  * `insert` should take a key value pair and add the value to the hash table.
//  * `retrieve` should return the value associated with a key.
//  * `remove` should removed the given key's value from the hash table.
//  * Should properly handle collisions.  If two keys map to the same index in the
//    storage table then you should store a 2d array as the value.  Make each key/value
//    pair its own array that is nested inside of the array stored at that index on the table.
