/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this, no-throw-literal, no-console */
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
    const bucketNumber = getIndexBelowMax(key)
    let bucket = this.storage.get(bucketNumber)
    if (bucket === undefined) {
      bucket = [{ key, value }]
      this.storage.set(bucketNumber, bucket)
    } else {
      const k = bucket.filter(o => o.key === key)
      if (!k.length) {
        bucket.push({ key, value })
      } else {
        k[0].value = value
      }
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucketNumber = getIndexBelowMax(key)
    const bucket = this.storage.get(bucketNumber)
    if (bucket === undefined) {
      return bucket
    }
    const k = bucket.filter(o => o.key === key)
    if (!k.length) {
      return undefined
    }
    bucket.splice(bucket.indexOf(k), 1)
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const bucketNumber = getIndexBelowMax(key)
    const bucket = this.storage.get(bucketNumber)
    if (bucket === undefined) {
      return undefined
    }
    const k = bucket.filter(o => o.key === key)
    if (!k.length) {
      return undefined
    }
    return bucket[bucket.indexOf(k[0])].value
  }
}

module.exports = HashTable;
