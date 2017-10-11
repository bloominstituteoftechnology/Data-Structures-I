/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
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
    if (typeof key === 'number') key = key.toString();
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage.get(index) === undefined) {          // there is no bucket; create it and store in new array
      this.storage.set(index, [key, value]);
      console.log(this.storage.get(index));
    } else if (Array.isArray(this.storage.get(index))) {   // bucket with key exists, replace key's value
      console.log('else if');
      // this.storage.each(this.storage.set(index, value));
      // console.log(this.storage.storage);
    } else {                                          // bucket(s) exist, add another to array
      console.log('else');
      // this.storage.set(index, value);
      // console.log(this.storage.storage);
    }
    // if (this.storage.storage[index] === undefined) {          // there is no bucket; create it and store in new array
    //   // this.storage.storage[index] = [[key, value]];
    //   this.set(index, value);
    // } else if (this.storage.storage[index][0][0] === key) {   // bucket with key exists, replace key's value
    //   // this.storage.storage[index][0][1] = value;
    //   this.set(index[0][1], value);
    // } else {                                          // bucket(s) exist, add another to array
    //   // this.storage.storage[index].push([key, value]);
    //   this.set(index, value);
    // }
    // console.log(JSON.stringify(this));
    // return this.storage.storage;
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {

  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {

  }
}

module.exports = HashTable;
