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
  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (this.limit * 0.75 === this.storage.length) {
      const nHashTable = new HashTable(this.limit * 2);
      for (let i = 0; i < this.storage.length; i++) {
        const bucket = this.storage.get(i);
        if (bucket !== undefined) {
          bucket.forEach((e) => {
            nHashTable.insert(e[0], e[1]);
          });
        }
      }
      this.limit *= 2;
      this.storage = nHashTable.storage;
    }
    if (typeof key === 'number') {
      const values = [];
      values[key] = value;
      return this.storage.set(key, values);
    }
    const myKey = getIndexBelowMax(key, this.limit);
    const myValues = [];
    const nvalue = [key, value];
    if (this.storage.get(myKey) !== undefined) {
      const myCurrentValue = this.storage.get(myKey);
      myCurrentValue.push(nvalue);
      return this.storage.set(myKey, myCurrentValue);
    }
    myValues.push(nvalue);
    return this.storage.set(myKey, myValues);
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucketId = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(bucketId);
    if (bucket === undefined) return undefined;
    let x;
    for (let i = 0; i < bucket.length; i++) {
      if (x === undefined) {
        x = bucket[i].indexOf(key);
        if (bucket[i][x] !== undefined) delete bucket[i][x];
      }
    }
    return;
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (typeof key === 'number') {
      const bucket = this.storage.get(key);
      if (bucket[key] !== undefined) return bucket[key];
    }
    if (this.storage.get(getIndexBelowMax(key, this.limit)) !== undefined) {
      const bucket = this.storage.get(getIndexBelowMax(key, this.limit));
      let x;
      bucket.forEach((v) => {
        if (v[0] === key) x = v[1];
      });
      return x;
    }
    return;
  }
}

module.exports = HashTable;
