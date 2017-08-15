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
    this.limit = limit || 8;// Modified to add set limit functionality when creating
                            // a new instance of the HashTable class
    this.storage = new LimitedArray(this.limit).storage; // Storage was another internal array according to the helper...
    // Do not modify anything inside of the constructor
  }
  // Extra Credit
  manageStorage() {
    if (this.storage.length / this.limit > 0.75) {
      this.limit = this.limit * 2;
      const newStorage = new LimitedArray(this.limit).storage;
      this.storage = newStorage.concat(this.storage);
    }
  }
  insert(key, value) {
    // Base solution
    // this.storage[getIndexBelowMax(`${key}`, this.limit)] = value;

    // Extra Credit
    const index = getIndexBelowMax(`${key}`, this.limit);
    this.storage[index] = this.storage[index] ? [...this.storage[index], [key, value]] : [[key, value]];
    this.manageStorage();
  }
  retrieve(key) {
    // Base solution
    // return this.storage[getIndexBelowMax(`${key}`, this.limit)];

    // Extra Credit
    const values = this.storage[getIndexBelowMax(`${key}`, this.limit)];
    const element = values.find(value => value[0] === key);
    return element ? element[1] : undefined;
  }
  remove(key) {
    // Base solution
    // delete this.storage[getIndexBelowMax(`${key}`, this.limit)];

    // Extra Credit
    const index = getIndexBelowMax(`${key}`, this.limit);
    const elementIndex = this.storage[index].findIndex(value => value[0] === key);
    this.storage[index] = this.storage[index].splice(elementIndex, 0);
    this.manageStorage();
  }
}

module.exports = HashTable;
