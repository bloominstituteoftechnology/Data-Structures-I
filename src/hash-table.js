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
  } checkCapacity() {
    let fullSlots = 0;
    this.storage.each((bucket) => {
      if (bucket) fullSlots++;
    });
    return (fullSlots / this.limit) >= 0.75;
  }
  resize() {
    this.limit *= 2;
    const oldHashTable = this.storage;
    this.storage == new LimitedArray(this.limit);
    oldHashTable.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1])
      })
    }
}
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (this.checkCapacity()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    //  fetch whatever is stored at this index
    const tempBucket = this.storage.get(index);
    if (tempBucket === undefined) {
      this.storage.set(index, [[key, value]]);
      return;
    }
    for (let i = 0; i < tempBucket[index].length; i++) {
      if (tempBucket[i][0] === key) {
        tempBucket[i][1] = value;
        this.storage.set(index, tempBucket);
        return;
      }
    }

    //  the key that we are inserting is unique
    tempBucket.push([key, value]);
    this.storage.set(index, tempBucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    let tempBucket = this.storage.get(index);
    if (tempBucket === undefined) {
      return;
    }
    tempBucket = tempBucket.filter(item => item[0] !== key);
    this.storage.set(index, tempBucket);
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const all = [];
    const index = getIndexBelowMax(key.toString().this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) return;
    for (let i = 0; i < this.limit; i++) {
      let tempBucket = this.storage[i];
      while (tempBucket) {
        all.push(tempBucket);
        tempBucket = tempBucket.next;
      }
    }
    return all;
  }
}

module.exports = HashTable;
