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
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    // Base solution
    this.storage[getIndexBelowMax(`${key}`, this.limit)] = value;

    // Extra Credit
    // const index = getIndexBelowMax(`${key}`, this.limit);
    // this.storage[index] = [...this.storage[index], [key, value]];
  }
  retrieve(key) {
    // Base solution
    return this.storage[getIndexBelowMax(`${key}`, this.limit)];

    // Extra Credit
    // const 
  }
  remove(key) {
    delete this.storage[getIndexBelowMax(`${key}`, this.limit)];
  }
}

module.exports = HashTable;
