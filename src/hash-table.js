/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const index = this.fetchKey(key);
    const bucket = this.storage.get(index);

    if (this.storage.length === this.limit * 0.75) this.resizeHash();

    if (bucket === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }

    const repIndex = bucket.indexOf(bucket.filter(arrItem => arrItem[0] === key)[0]);

    if (repIndex !== -1) {
      bucket[repIndex] = [key, value];
      return;
    }

    this.storage.set(index, [...bucket, [key, value]]);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = this.fetchKey(key);
    const bucket = this.storage.get(index);
    if (bucket === undefined || bucket === []) return undefined;

    let retValue;
    this.storage.set(index, undefined);
    bucket.forEach((element, i) => {
      if (element[0] !== key) {
        this.insert(element);
      } else {
        retValue = element;
      }
    });
    return retValue;
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = this.fetchKey(key);
    const bucket = this.storage.get(index);
    if (bucket === undefined || bucket === []) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
  }

  fetchKey(key) {
    if (!(isNaN(key))) key = `${key}`;
    return getIndexBelowMax(key, this.limit);
  }

  resizeHash() {
    const limit = this.limit * 2;
    const tempStorage = new LimitedArray(limit);
    this.storage.each((value, index) => {
      tempStorage.set(index, value);
    });
    this.limit = limit;
    this.storage = tempStorage;
  }
}

module.exports = HashTable;
