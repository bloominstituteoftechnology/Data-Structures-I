/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable */

const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

// LimitedArray, and getIndexBelowMax are two tools provided for you in the helper file.
// There are other methods on the LimitedArray class in the './hash-table-helpers' file that you can use for your implementation.

// class LimitedArray {
//   constructor(limit) {
//     // You should not be directly accessing this array from your hash table methods
//     // Use the getter and setter methods included in this class to manipulate data in this class
//     this.storage = [];
//     this.limit = limit;
//   }

// checkLimit(index) {
//   if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
//   if (this.limit <= index) {
//     throw new Error('The supplied index lies out of the array\'s bounds');
//   }
// }

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  // Adds the given key, value pair to the hash table
  // - Fetch the bucket associated with the given key using the getIndexBelowMax function
  // - If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // - If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const index = getIndexBelowMax(key.toString(), this.limit); // returns the bucket associated with the given key
    const bucket = this.storage.get(index); // returns the bucket associated with the given key so you can work with it

    if (this.storage.length / this.limit >= .5) {
      this.limit *= 2
    }
    
    if (bucket === undefined) { // If bucket is undefined, add a bucket.
      this.storage.set(index, [[key, value]]);
      return;
    }

    // We have a collision or an empty bucket, so now:
    // Check to see if the key is already used, if so, rewrite it.
    for (let i = 0; i < bucket.length; i++) { // This is cycling through the total storage of the bucket?? If it's empty, it adds the key/value pair.
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        this.storage.set(index, bucket);
        return;
      }
    }

    // Finally, if they key we are trying to insert is unique:
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) return undefined; // Error handling

    if (bucket.length === 1) {
      this.storage.set(index, undefined);
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.storage.set(index, bucket);
      }
    }
  }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    // Fetch the bucket associated with the given key using the getIndexBelowMax function
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) return undefined; // Error handling

    // Find the key, value pair inside the bucket and return the value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
  }
}

module.exports = HashTable;

// const getIndexBelowMax = (str, max) => {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     hash = (hash << 5) + hash + str.charCodeAt(i);
//     hash = hash & hash;
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// };