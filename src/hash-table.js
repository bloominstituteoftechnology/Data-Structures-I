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
    let bucket = this.storage.get(index);
    if (bucket === undefined) bucket = [];

    this.storage.set(index, [...bucket, [key, value]]);
    if (this.storage.length === this.limit * 0.75) this.resizeHash();
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
    let retValue;

    bucket.forEach((value) => {
      if (value[0] === key) retValue = value[1];
    });
    return retValue;
  }

  fetchKey(key) {
    if (!(isNaN(key))) key = `${key}`; // Parse key as number
    return getIndexBelowMax(key, this.limit); // fetch key index
  }

  resizeHash() {
    const limit = this.limit * 2;
    const tempStorage = new LimitedArray(limit);
    this.storage.each((value, index) => {
      tempStorage.storage[index] = value;
    });
    this.limit = limit;
    this.storage = tempStorage;
  }
}

module.exports = HashTable;
