/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  setLimit(newLim) {
    this.limit = newLim;
  }
  insert(key, value) {
    const arrInTable = this.storage.get(getIndexBelowMax(key, this.limit));
    if (arrInTable) {
      const overlap = arrInTable.findIndex((keyVal) => {
        return keyVal[0] === key;
      });
      if (overlap !== undefined) {
        const newArr = [];
        arrInTable.filter((item, index) => {
          if (index === overlap) {
            return false;
          }
          return true;
        }).forEach((keyVal) => {
          newArr.push(keyVal);
        });
        newArr.push([key, value]);
        this.storage.set(getIndexBelowMax(key, this.limit), newArr);
        return;
      }
      const newArr = [];
      arrInTable.forEach((keyVal) => {
        newArr.push(keyVal);
      });
      newArr.push([key, value]);
      this.storage.set(getIndexBelowMax(key, this.limit), newArr);
    } else {
      const newArr = [];
      newArr.push([key, value]);
      this.storage.set(getIndexBelowMax(key, this.limit), newArr);
    }
  }
  remove(key) {
    const arrInTable = this.storage.get(getIndexBelowMax(key, this.limit));
    const overlap = arrInTable.findIndex((keyVal) => {
      return keyVal[0] === key;
    });
    const newArr = [];
    arrInTable.filter((item, index) => {
      if (index === overlap) {
        return false;
      }
      return true;
    }).forEach((keyVal) => {
      newArr.push(keyVal);
    });
    this.storage.set(getIndexBelowMax(key, this.limit), newArr);
  }
  retrieve(key) {
    const arrInTable = this.storage.get(getIndexBelowMax(key, this.limit));
    if (arrInTable.length !== 0) {
      if (typeof key !== 'string') {
        key = String(key);
      }
      return arrInTable.find((keyVal) => {
        return String(keyVal[0]) === key;
      })[1];
    }
  }
}
module.exports = HashTable;
