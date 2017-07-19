/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  
  insert(key, value) {
    const hash = this.getHash(key);
    if (this.storage.get(hash) !== undefined) {
      //copy whatever is that the location already
      const backup = this.storage.get(hash);
      // remove whatever was in that position
      remove(hash);
      // set a bucket
      const bucket = [];
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === hash) {
          tuple[1] = value;
          return;
        };
      };
      // replace whatever was in that position
      
      // Like this?[[a,z],[b],[c]]
      // create 2 d array at that position

      
      
    } else {
    this.storage.set(this.getHash(key), value);
    }
  }

  getHash(key) {
    if (typeof key === 'number' && Number.isInteger(key) && key < this.limit) {
      return key;
    }
    const hash = getIndexBelowMax(key, this.limit);
    return hash;
  }

  remove(key) {
    this.storage.set(this.getHash(key), undefined);
  }

  retrieve(key) {
    return this.storage.get(this.getHash(key));
  }
}

module.exports = HashTable;

// Should have the methods: insert, remove, and retrieve.
// insert should take a key value pair and add the value to the hash table.
// retrieve should return the value associated with a key.
// remove should removed the given key's value from the hash table.
// Should properly handle collisions. If two keys map to the same index in 
// the storage table then you should store a 2d array as the value. Make each 
// key/value pair its own array that is nested inside of the array stored at 
// that index on the table.

