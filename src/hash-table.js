/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const indexKey = getIndexBelowMax(`${key}`, this.limit);
    const table = this.storage.get(indexKey);

    if (table === undefined) {
      this.storage.set(indexKey, [[key, value]]);
      return;
    }

    table.forEach((item) => {
      if (item[0] === key) {
        item[1] = value;
        return;
      }
    });

    table.push([key, value]);
  }

  retrieve(key) {
    const indexKey = getIndexBelowMax(`${key}`, this.limit);
    const table = this.storage.get(indexKey);
    for (let i = 0; i < table.length; i++) {
      if (table[i][0] === key) {
        return table[i][1];
      }
    }
  }
  remove(key) {
    const indexKey = getIndexBelowMax(`${key}`, this.limit);
    const table = this.storage.get(indexKey);
    table.forEach((item, i) => {
      if (item[0] === key) {
        table.splice(i, 1);
        return;
      }
    });
  }
}

module.exports = HashTable;
