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
    // [{key,vlaue}]
    const obj = {};
    obj[key] = value;
    const keyVal = [obj];
    if (!bucket) this.storage.set(index, keyVal);
    else {
      let flag = true;
      for (let i = 0; i < bucket.length; i++) {
        const k = Object.keys(bucket[i]);
        if (k[0] === `${key}`) {
          bucket[i][k] = value;
          flag = false;
        }
      }
      if (flag) bucket.push(obj);
    }
  }
  remove(key) {
    const index = getIndexBelowMax(`${key}`, this.limit);
    const bucket = this.storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      const k = Object.keys(bucket[i]);
      if (k[0] === `${key}`) {
        bucket[i][k] = undefined;
      }
    }
  }
  retrieve(key) {
    const index = getIndexBelowMax(`${key}`, this.limit);
    const bucket = this.storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      const k = Object.keys(bucket[i]);
      if (k[0] === `${key}`) {
        return bucket[i][k];
      }
    }
  }
}

module.exports = HashTable;

/* const test = new HashTable;
test.insert('B', 'FirstValue')
test.insert('HI!', 'SecondValue')
test.insert('HI!', 'thirdValue')
test.insert('b', '4')
console.log(test.retrieve('B'))
console.log(test.retrieve('HI!'))
console.log(test)
console.log(test.storage.storage)
 */
