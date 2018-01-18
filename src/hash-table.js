/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable */
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
  checkCapacity() {
    let bucketCount = 0;
    // loop through each bucket in storage, if each bucket is defined increase bucketCount
    this.storage.each((bucket) => {
      if(bucket) {
        bucketCount++;
      }
    });
    // return true if capacity is more than 75% else return false
    return (bucketCount / this.limit) >= 0.75;
  }

  resize() {
    // increate table limit
    this.limit *= 2;
    // make a copy of old storage
    // create new storage with double the limit
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);

    // transfer old storage data to the new storage
    // loop through each bucket in old storage using its own property 'each'
    // loop through each element in bucket, insert each pair into new storage
    oldStorage.each((bucket) => {
      if(!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }


  insert(key, value) {
    // check if the hash table is 75% or more capacity
    // if returns true then call resize method

    if(this.checkCapacity()) this.resize();

    // fetch index or bucket using getIndexBelowMax
    const index = getIndexBelowMax(key.toString(), this.limit);
    // fetch bucket at this index / whatever that stores at this index
    const bucket = this.storage.get(index);
    // check to see if bucket exist, if it doesn't then create a bucket and add key + value 
    if (bucket === undefined) {
      // bucket does not exist, create new bucket [] at index and add [key, value] inside the bucket []
      this.storage.set(index, [[key, value]]);
      return value;
    }
    // bucket does exist, we'll check to see if the key already exist inside the bucket
    bucket.forEach(function(item){
      // if key exist, update the value by overwrting the old value with new value
      if(item[0] === key){
        item[1] = value;
        return;
      }

    });

    // if key does not exist, create new item
    bucket.push([key, value]);
    // update the bucket
    this.storage.set(index, bucket);
    return;
  }


  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    // get storage index by using getIndexBelowMax(key, max-limit)
    const index = getIndexBelowMax(key.toString(), this.limit);
    // fetch bucket using index
    const bucket = this.storage.get(index);
    // if no bucket
    if(!bucket) return;

    // loop through the item inside bucket and remove item using the key
    bucket.forEach((item, i) =>{
      if (item[0] === key) {
        bucket.splice(i - 1, 1);
      // update bucket
      this.storage.set(index, bucket);
      }
    });
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    // get index for the key
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index)

    if(!bucket) return;

    let found;
    bucket.forEach((item) => {
      if(item[0] === key){
        found = item[1];
      }
    });
    return found;
  }
}

module.exports = HashTable;

/* eslint-disable */