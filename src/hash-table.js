/* eslint-disable no-unused-vars */
/* eslint-disable */

const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    //this.count = 0;
    // Do not modify anything inside of the constructor
  }
  hash(key) {
    const H = 37;
    let total = 0;
    key = key.toString();
    for (let i = 0; i < key.length; ++i) {
      total += (H * (total + key.charCodeAt(i)));
    }
    total %= this.limit;
    return parseInt(total, 10);
  }
  insert(key, value) {
    //++count;
    const hashedKey = this.hash(key);
    this.storage[hashedKey] = value;

  }
  retrieve(key) {
    const hashedKey = this.hash(key);
    const retrivedKey = this.storage[hashedKey];
    return retrivedKey;
  }
  remove(key) {
    //--count;
    const hashedKey = this.hash(key);
    this.storage[hashedKey] = undefined;
  }

}
// table = new HashTable();
// // table.insert('hello', 'there');
// table.insert('type', 'new');
// table.insert('Ben', 'Nelson');
// console.log(table);
// table.remove('Ben');
// // //console.log(table.retrieve('hello'));
// // console.log(table.remove('hello'));
// console.log(table);
module.exports = HashTable;
