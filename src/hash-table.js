/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  /* original method */
  // insert(key, value) {
  //   const index = getIndexBelowMax(key.toString(), this.limit);
  //   this.storage.set(index, value);
  //   if (this.storage.length >= this.limit * 0.75) {
  //     this.limit *= 2;
  //   }
  // }

  /* EC method */
  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) {
      this.storage.set(index, [[key, value]]);
    } else {
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        if (tuple[0] === key) {
          tuple[1] = value;
        }
      }
      bucket.push([key, value]);
    }
    if (this.storage.length >= this.limit * 0.75) {
      this.limit *= 2;
    }
  }

  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    this.storage.set(index);
  }

  /* original method */
  // retrieve(key) {
  //   const index = getIndexBelowMax(key.toString(), this.limit);
  //   const bucket = this.sotrage.get(index);
  //   return this.storage.get(index);
  // }

  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
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
