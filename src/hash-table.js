/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  checkCapacity() {
    // instantiate a variable to keep track of the number of full slots in our limited array
    // increment our variable for every full slot
    // if the number of buckets we have is >= 0.75 of the total limit, return true
    let fullSlots = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullSlots++;
    });
    return (fullSlots / this.limit) >= 0.75;
  }

  resize() {
    // increase the limit of our limited array by a factor of 2
    this.limit *= 2;
    // keep a reference to the old limited array
    const oldStorage = this.storage;
    // create a new limited array with double the original capacity
    this.storage = new LimitedArray(this.limit);
    // put all of the buckets from our old limited array into our new expanded limited array
    oldStorage.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    // check the capacity of our limited array
    // if checkCapacity returns true, call resize
    if (this.checkCapacity()) this.resize();
    // hash our key and get back an index into our Limited Array
    const index = getIndexBelowMax(key.toString(), this.limit);
    // use the index to fetch whatever is at that slot in our Limited Array
    const bucket = this.storage.get(index);
    // inspect what we got
    if (bucket === undefined) {
      // if there is nothing in the slot, insert our key value pair inside a newly-instantiated bucket
      this.storage.set(index, [[key, value]]);
      return;
    }
    // otherwise, we'll need to add our new key-value pair to the bucket
    // make sure to maintain the uniqueness of keys property
    for (let i = 0; i < bucket.length; i++) {
      // inspect each key
      // in the case that our input key is already inside the hash table
      if (bucket[i][0] === key) {
        // overwrite the old key-value pair's value
        bucket[i][1] = value;
        // set this bucket back into the hash table
        this.storage.set(index, bucket);
        return;
      }
    }
    // turns out that the key we're trying to insert is unique
    // we can just add it to our bucket
    bucket.push([key, value]);
    this.storage.set(index, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    // no or empty bucket case
    if (!bucket) return;
    // when we only have one key-value pair in the bucket
    if (bucket.length === 1) return this.storage.set(index, undefined);
    // every other case
    // iterate over our bucket to find the key-value pair that matches the input key and remove it
    bucket.forEach((pair, i) => {
      // check if the given pair's key matches our input key
      if (pair[0] === key) bucket.splice(i, 1);
      this.storage.set(index, bucket);
    });
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);

    // no bucket case
    if (!bucket) return;
    // otherwise, there is a non-empty bucket; iterate through it to find the key-value pair that matches the key
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
  }
}

module.exports = HashTable;
