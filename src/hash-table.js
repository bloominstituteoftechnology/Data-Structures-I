/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');
const LinkedList = require('./linked-list');

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
    const bucketIndex = getIndexBelowMax(key.toString(), this.limit);
    if (this.storage.get(bucketIndex) === undefined) {
      // Check if bucket has not yet been instantiated
      this.storage.set(bucketIndex, [[key, value]]);
    } else {
      const bucket = this.storage.get(bucketIndex);
      const keyIndex = bucket.findIndex(el => el[0] === key);
      if (keyIndex !== -1) {
        bucket[keyIndex][1] = value;
      } else {
        bucket.push([key, value]);
        this.storage.set(bucketIndex, bucket);
      }
    }
  }
  // insert(key, value) {
  //   const bucketIndex = getIndexBelowMax(key.toString(), this.limit);
  //   let bucket = this.storage.get(bucketIndex);
  //   if (bucket === undefined) {
  //     // Check if bucket has not yet been instantiated
  //     bucket = new LinkedList();
  //     bucket.addToHead(new LinkedList());
  //     bucket.getHead().addToHead(key);
  //     bucket.getHead().addToHead(value);
  //     this.storage.set(bucketIndex, bucket);
  //   } else {
  //     const keyNode = bucket.find(node => node.getTail() === key);
  //     if (keyNode !== null) {
  //       keyNode.removeHead();
  //       keyNode.addToHead(value);
  //     } else {
  //       bucket.addToHead(new LinkedList());
  //       bucket.getHead().addToHead(key);
  //       bucket.getHead().addToHead(value);
  //     }
  //   }
  // }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucket = this.storage.get(getIndexBelowMax(key.toString(), this.limit));
    if (bucket) {
      const keyIndex = bucket.findIndex(el => el[0] === key);
      if (keyIndex !== -1) bucket.splice(keyIndex, 1);
    }
  }
  // remove(key) {
  //   const bucket = this.storage.get(getIndexBelowMax(key.toString(), this.limit));
  //   if (bucket) {
  //     const keyNode = bucket.find(node => node.getTail() === key);
  //     if (keyNode !== null) bucket.remove(keyNode);
  //   }
  // }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const bucket = this.storage.get(getIndexBelowMax(key.toString(), this.limit));
    if (bucket) {
      const keyIndex = bucket.findIndex(el => el[0] === key);
      if (keyIndex !== -1) return bucket[keyIndex][1];
    }
  }
  // retrieve(key) {
  //   const bucket = this.storage.get(getIndexBelowMax(key.toString(), this.limit));
  //   if (bucket) {
  //     const keyNode = bucket.find(node => node.getTail() === key);
  //     if (keyNode !== null) {
  //       return keyNode.getHead();
  //     }
  //   }
  // }
}

module.exports = HashTable;
