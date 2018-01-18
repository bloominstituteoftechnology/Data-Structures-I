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
  checkCapacity() {
    let fullSlots = 0;
    this.storage.each((bucket) => {
      if (bucket) fullSlots++;
    });
    return (fullSlots / this.limit) >= 0.75;
  }
  reSize() {
    this.limit *= 2;
    const oldHash = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldHash.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }
  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);

    if (tempBucket === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }
    // we have a bucket at this index already
     // we want to check to see if the we're trying to insert is already in this bucket
    for (let i = 0; i < tempBucket.length; i++) {
       // check to see if any keys in the bucket match the key we want to insert
      if (tempBucket[i][0] === key) {
         // this means we have a duplicate key we're trying to insert
         // we need to overwrite the old value with the new value
        tempBucket[i][1] = value;
        this.storage.set(index, tempBucket);
        return;
      }
    }
    tempBucket.push([key, value]);
    this.storage.set(index, tempBucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);
    if (!tempBucket) return;
    if (tempBucket.length === 1) {
      this.storage.set(index, undefined);
      return;
    }
    tempBucket.forEach((pair, i) => {
      if (pair[0] === key) {
        tempBucket.splice(i, 1);
        this.storage.set(index, tempBucket);
      }
    });
  }
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const tempBucket = this.storage.get(index);
    if (!tempBucket) return;
    const found = tempBucket.find((pair) => {
      return pair[0] === key;
    });
    return found[1];
  }
}
module.exports = HashTable;
