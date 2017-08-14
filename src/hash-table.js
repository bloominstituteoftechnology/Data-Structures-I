/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers'); // Importing LimitedArray class and getIndexBelowMax function
//      LimitedArray is just an array which is not going to resize
class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit); // LimitedArray only used to create storage device
    // Do not modify anything inside of the constructor
  }
  // `insert` should take a key value pair and add the value to the hash table.
  insert(aKey, andItsValue) {
    const index = getIndexBelowMax(aKey.toString(), this.limit);
    this.storage.set(index, [[aKey, andItsValue]]);
    return;
  }
  // `remove` should removed the given key's value from the hash table.
  remove(unwantedKey) {
    const index = getIndexBelowMax(unwantedKey.toString(), this.limit);
    const temp = this.storage.get(index);
    if (temp.length === 1) return this.storage.set(index, undefined);
    temp.forEach((pair, i) => {
      if (pair[0] === unwantedKey) temp.splice(i, 1);
      this.storage.set(index, temp);
    });
  }
  // `retrieve` should return the value associated with a key.
  retrieve(someKey) {
    const index = getIndexBelowMax(someKey.toString(), this.limit);
    if (this.storage.get(index) === undefined) return;
    return this.storage.get(index)[0][1];
  }
}

module.exports = HashTable; // exporting HashTable class to the test suite

// // TEST SUITE
// const test = new HashTable();
// // insert() & retrieve()
// test.insert('hello', 'there');
// console.log(test.retrieve('hello')); // <--- there
// // remove()
// console.log(test.remove('hello'));
// console.log(test.retrieve('hello'));
