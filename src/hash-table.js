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

  find(key) {
    const hash = getIndexBelowMax(key, this.limit);

    // if no bucket, initialize a bucket:
    const bucket = this.storage[hash] || [];

    let match;
    let matchIndex;
    bucket.forEach((item, index) => {
      if (item[0] === key) {
	match = item;
	matchIndex = index;
      }
    });
    return {
      match,
      bucket,
      matchIndex,
      hash
    }
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const { match, bucket, hash } = this.find(key);

    if (!bucket.length) {
      this.storage[hash] = [[key, value]];
    } else {
      this.storage[hash].push([key, value]);
    }
  }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    try {
      return this.find(key).match[1];
    } catch(e) {
      return undefined;
    }
  }

  // REMOVES the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const { match, bucket, matchIndex } = this.find(key);
    bucket.splice(matchIndex, 1);
  }

}

module.exports = HashTable;
