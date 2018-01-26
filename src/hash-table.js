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
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket ****
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
        // fetch index here
    // if the index in the storage is empty, put (key, value)
    // creates bucket ^^^^^
    const hIndex = getIndexBelowMax(key, this.limit);
    const thisBucket = this.storage.get(hIndex)
    if (thisBucket === undefined) {
      this.storage.set(hIndex, [key, value]);
    } else {
      for(let i = 0; i < thisBucket.length; i++) {
        if (thisBucket[i][0] === key) {
          this.storage.set(hIndex, value);
        }
      }
      if(thisBucket[i][0] !== key) {
       this.storage.set([key, value]);
      }

    }

    // if key exists, iterate through the storage at the index point, through the tuples and search for the key, if the key is foind
    // put the value at that point [ 1 ];
    
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const hIndex = getIndexBelowMax(key, this.limit);
    const thisBucket = this.storage.get(hIndex)
    if (this.storage[hIndex][0][0] === key) {
      this.storage.set(hIndex, null);
    } else {
      for (let i = 0; i < this.storage[hIndex].length; i++) {
        if (this.storage[hIndex][i][0] === key) {
          this.storag.set(hIndex, null);
        }
      }
    }
    
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const hIndex = getIndexBelowMax(key, this.limit);
    if (this.storage[hIndex] === undefined) {
      return undefined;
    } else {
      for(let i = 0; i < this.storage[hIndex].length; i++) {
        if (this.storage[hIndex][i][0] === key) {
          return this.storage[hIndex][i][1];
        }
      }
    }

  }
}

module.exports = HashTable;
