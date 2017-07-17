const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.table = new LimitedArray(this.limit);
  }

  insert(data, value) {
    this.table.set(getIndexBelowMax(data, this.limit), value, data, (arg) => {
      this.limit = this.table.limit;
      return this.retrieve(arg, true);
    });
  }

  remove(data) {
    return this.limit;
  }

  retrieve(value, callbacked) {
    const index = getIndexBelowMax(value, this.limit);
    let position = 0;
    if (Array.isArray(this.table.storage[index]) === true) {
      for (let i = 0; i < value.length; i++) {
        position += value.charCodeAt(i);
      }
      if (callbacked !== true) return this.table.storage[index][position] === undefined ? this.table.storage[index][0][1] : this.table.storage[index][position][1];
      return { index, position };
    }
    return callbacked === true ? { index, position: -1 } : this.table.storage[index][1];
  }
}

module.exports = HashTable;
