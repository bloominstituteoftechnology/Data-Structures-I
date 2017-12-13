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
    const index = getIndexBelowMax(key.toString(), this.limit); // hash our key and get back an index into our Limited Array
    const bucket = this.storage.get(index); // Use the index to fetch whatever is at that slot in our Limited Array
    if (bucket === undefined) { // See if the bucket is undefined
      this.storage.set(index, [[key, value]]); // If there is nothing in the slot, insert our key value pair inside a newly-instantiated bucket
      return;
    }
    // otherwise, we'll need to add our new key-value pair to the bucket
    // make sure to maintain the uniqueness of keys property
    for (let i = 0; i < bucket.length; i++) { // inspect each key
      if (bucket[i][0] === key) { // in the case that our input key is already inside the hash table
        bucket[i][1] = value; // overwrite the old key-value pair's value
        this.storage.set(index, bucket); // set this bucket back into the hash table
        return;
      }
    }
    // turns out that the key we're trying to insert is unique
    bucket.push([key, value]); // // we can just add it to our bucket
    this.storage.set(index, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(String(key), this.limit);// is always the same
    const bucket = this.storage.get(index);
    if (!bucket) return;// no or empty bucket case
    if (bucket.length === 1) return this.storage.set(index, undefined);// if there is only one key-value pair in the bucket
    bucket.forEach((pair, i) => { // f0r every other case,iterate over the bucket to find the key-value pair that matches the input key and remove it
      if (pair[0] === key) bucket.splice(i, 1);
      this.storage.set(index, bucket);
    });
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(String(key), this.limit);
    const bucket = this.storage.get(index);
    if (!bucket) return; // no bucket case
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
  }
}

module.exports = HashTable;
