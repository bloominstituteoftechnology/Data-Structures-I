/* eslint-disable no-unused-vars */
const {
  LimitedArray,
  getIndexBelowMax
} = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  // hashKeyToNum(str) {
  //   let result;
  //
  //   // Get length of string
  //   result = string.length;
  //   // Get the characters
  //   chars =
  //   // Multiply by prime
  //
  //   return
  // }

  insert(key, value) {
    if (typeof key === 'number') {
      key = key.toString();
    }
    // Create object
    const somethingCool = {};
    somethingCool[key] = value;
    // console.log(`insert(${key}, ${value})`);
    // console.log(`Index: ${getIndexBelowMax(key, this.limit)}`);
    this.storage.add(getIndexBelowMax(key, this.limit), somethingCool);
  }

  remove(key) {
    if (typeof key === 'number') {
      key = key.toString();
    }
    // console.log(`remove(${key})`);
    // const sKey = Object.toString(key);
    // returns the object that has this key.
    if (this.storage.checkHasObject(key)) {
      this.storage.removeObjWithKey(key);
    }
  }

  retrieve(key) {
    if (typeof key === 'number') {
      key = key.toString();
    }
    // returns the value of the object with this key.
    // console.log(`retrieve(${key})`);
    // console.log(this.storage.getObjectWithKey(key));
    // console.log(this.storage.getObjectWithKey(key));
    if (this.storage.checkHasObject(key)) {
      return this.storage.getObjectWithKey(key)[key];
    }
  }
}

// console.log(typeof {});
// console.log(typeof 1);
// const ht = new HashTable();
// console.log("1 - Test");
// ht.insert('hello', 'world');
// // console.log(Object.toString(ht));
// console.log(ht.retrieve('hello'));
//
// console.log("2 - Test");
// ht.insert('hello1', 'world');
// console.log(ht.retrieve('hello1'));
//
// console.log("3 - Test");
// ht.insert(1, 'one');
// console.log(ht.retrieve(1));
// ht.insert(2, 'two');
// console.log(ht.retrieve(2));
//

// console.log("5 - Test");
// ht.insert('hello', 'darkness');
// console.log(ht.retrieve('hello'));
//
// console.log("4 - Test");
// ht.remove('hello');
// console.log(ht.retrieve('hello'));

module.exports = HashTable;


/* * Should have the methods: `insert`, `remove`, and `retrieve`.
 * `insert` should take a key value pair and add the value to the hash table.
 * `retrieve` should return the value associated with a key.
 * `remove` should removed the given key's value from the hash table.
 * Should properly handle collisions.  If two keys map to the same index in the storage table then you should store a 2d array as the value.  Make each key/value pair its own array that is nested inside of the array stored at that index on the table. */
