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
    key = key.toString();
    const idx = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(idx);
    // check if bucket exists
    if (bucket === undefined) {
      this.storage.set(idx, [[key, value]]);
      if (this.storage.length > this.limit * 0.75) {
        this.rebalance();
      }
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        this.storage.set(idx, bucket);
        return;
      }
    }
    bucket.push([key, value]);
    this.storage.set(idx, bucket);
    if (this.storage.length > this.limit * 0.75) {
      this.rebalance();
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    key = key.toString();
    const idx = getIndexBelowMax(key, this.limit);
    let bucket = this.storage.get(idx);
    if (bucket === undefined) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        if (bucket.length === 0) {
          bucket = undefined;
        }
        this.storage.set(idx, bucket);
        return;
      }
      return undefined;
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    key = key.toString();
    const idx = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(idx);
    if (bucket === undefined) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }
  // rebalance the table
  rebalance() {
    const buckets = [];
    this.storage.each((bucket) => {
      buckets.push(bucket);
    });
    const pairs = buckets.reduce((collection, pair) => collection.concat(pair), []);
    this.limit = this.limit * 2;
    this.storage = new LimitedArray(this.limit);
    pairs.forEach((pair) => {
      if (pair !== undefined) {
        this.insert(pair[0], pair[1]);
      }
    });
  }
}

module.exports = HashTable;
