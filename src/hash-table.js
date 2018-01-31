/* eslint-disable no-unused-vars */
/* eslint-disable */
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
    const hashIndex = getIndexBelowMax(key.toString(), this.limit) // get the index (hash table location)
    let bucket = this.storage.get(hashIndex) ? [] : this.storage.get(hashIndex);  // fetch bucket, with limited array, pass hash
    // need to avoid collisions...
    let newTuple = [key, value];
    let replaced = false;
    bucket = bucket.map((tuple) => {
      if (newTuple[0] === key) {
        replaced = true;
        return newtuple;
      }
      return tuple;
    })
    if (!replaced) {
      bucket.push(tuple);
    }
    this.storage.set(hashIndex, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    if (this.storage.length === 0) return;
    const hashIndex = getIndexBelowMax(key.toString(), this.limit)
    let bucket = this.storage.get(hashIndex);
    if(bucket === undefined || bucket.length === 0) return;

    for (let i = 0; i < bucket.length; i++) {
      let tuple = item;
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        }
      }
      this.storage.set(hashIndex, bucket);
    }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (this.storage.length === 0) return undefined;
    const hashIndex = getIndexBelowMax(key.toString(), this.limit)
    let bucket = this.storage.get(hashIndex);
    if(bucket === undefined || bucket.length === 0) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return undefined;
  }
}

module.exports = HashTable;
