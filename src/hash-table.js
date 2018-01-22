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
    const occupiedBuckets = this.bucketsFilled();
    if (occupiedBuckets >= this.limit * 0.75) this.resize();
    const bucketIndex = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(bucketIndex);
    if (bucket === undefined) {
      // Check if bucket has not yet been instantiated
      bucket = new LinkedList();
      bucket.addToHead(new LinkedList());
      bucket.getHead().addToHead(key);
      bucket.getHead().addToHead(value);
      this.storage.set(bucketIndex, bucket);
    } else {
      let keyNode = bucket.find(node => node.value.getTail() === key);
      if (keyNode !== null) {
        keyNode = keyNode.value;
        keyNode.removeHead();
        keyNode.addToHead(value);
      } else {
        bucket.addToHead(new LinkedList());
        bucket.getHead().addToHead(key);
        bucket.getHead().addToHead(value);
      }
    }
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket

  remove(key) {
    const bucketIndex = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(bucketIndex);
    if (bucket !== undefined && bucket.getHead() !== null) {
      const newBucket = new LinkedList();
      while (bucket.getHead() !== null) {
        const node = bucket.removeHead();
        if (node.getTail() !== key) newBucket.addToHead(node);
      }
      this.storage.set(bucketIndex, newBucket);
    }
  }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value

  retrieve(key) {
    const bucket = this.storage.get(getIndexBelowMax(key.toString(), this.limit));
    if (bucket !== undefined && bucket.getHead() !== null) {
      const keyNode = bucket.find(node => node.value.getTail() === key);
      if (keyNode !== null) return keyNode.value.getHead();
    }
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    const transfer = node => this.insert(node.value.getTail(), node.value.getHead());
    for (let i = 0; i < this.limit / 2; i++) {
      const bucket = oldStorage.get(i);
      if (bucket !== undefined) bucket.each(transfer);
    }
  }

  bucketsFilled() {
    let count = 0;
    for (let i = 0; i < this.limit; i++) {
      if (this.storage.get(i)) count++;
    }
    return count;
  }
}
module.exports = HashTable;
