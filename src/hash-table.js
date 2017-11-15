/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// LimitedArray, and getIndexBelowMax are two tools provided for you in the helper file.
// There are other methods on the LimitedArray class in the './hash-table-helpers' file that you can use for your implementation.

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  capacityIsFull() {
    let fullCells = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    return fullCells / this.limit >= 0.75;
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (this.capacityIsFull()) this.resize();
    const hashIndex = getIndexBelowMax(key.toString(), this.limit);

    let bucket = this.storage.get(hashIndex) || [];
    bucket = bucket.filter(pair => pair[0] !== key);
    bucket.push([key, value]);

    this.storage.set(hashIndex, bucket);

    /* Below if statement passes the Extra Credit test,
    without the need for resize() and capacityIsFull(),
    but not the best solution */
    // if ((this.storage.length / this.limit) > 0.75) {
    //   this.limit *= 2;
    //   this.storage.limit *= 2;
    // }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const hashIndex = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(hashIndex);

    if (bucket) {
      bucket = bucket.filter(pair => pair[0] !== key);
      this.storage.set(hashIndex, bucket);
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const hashIndex = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(hashIndex);

    let retrieved;
    if (bucket) {
      retrieved = bucket.filter(pair => pair[0] === key)[0];
    }
    return retrieved ? retrieved[1] : undefined;
  }
}

const myHash = new HashTable();

module.exports = HashTable;
