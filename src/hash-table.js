/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(key, value) {
    if (this.storage.length / this.limit > 0.75) this.limit *= 2;
    const index = getIndexBelowMax(`${key}`, this.limit);
    const bucket = this.storage.get(index);
    const keyVal = [`${key}`, value];
    if (!bucket) this.storage.set(index, [keyVal]);
    else {
      let flag = true;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === `${key}`) {
          bucket[i][1] = value;
          flag = false;
        }
      }
      if (flag) bucket.push(keyVal);
    }
  }
  remove(key) {
    const index = getIndexBelowMax(`${key}`, this.limit);
    const bucket = this.storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === `${key}`) {
        bucket.splice(i, 1);
      }
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(`${key}`, this.limit);
    const bucket = this.storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === `${key}`) {
        return bucket[i][1];
      }
    }
  }
}

module.exports = HashTable;

// const test = new HashTable;
// test.insert('B', 'FirstValue')
// test.insert('HI!', 'SecondValue')
// test.insert('HI!', 'thirdValue')
// test.insert(0, '4')
// console.log(test.retrieve('B'));
// console.log(test.retrieve('HI!'));
// console.log(test);
// console.log(test.storage.storage);
