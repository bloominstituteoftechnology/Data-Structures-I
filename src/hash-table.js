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

  // By doing it this way, the constructed object will have a limit that doubles but the hashtable constructor's limit remains 8
  // Although when I do it my original way, a second table without any insert remains at a limit of 8... not sure I understand the difference
  // Other than the main point being that resizing the hash this way creates a new hash with a new limit
  checkCapacity() {
    let fullSlots = 0;
    this.storage.each((bucket) => {
      if (bucket) fullSlots++;
    });
    return (fullSlots / this.limit) >= 0.75;
  }

  resize() {
    this.limit *= 2;
    const oldHashTable = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldHashTable.each((bucket) => {
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
    /* This is not the proper way to do this since it chages the constructor/class variables which we shouldn't do
    // keeps track of percentage of instantiated buckets
    const filled = (this.storage.length / this.storage.limit) >= 0.75;
    // Check the size of the limited array, if greater than 75 percent then double
    if (filled) {
      this.storage.limit *= 2;
      this.limit = this.storage.limit;
    }
    */

    if (this.checkCapacity()) this.resize();

    // grab the index of limited array to insert to, you only hash by the key and the limit, value not necessary
    // toString because keys can only be strings and because getIndex requires a string
    const index = getIndexBelowMax(key.toString(), this.storage.limit);  // grab the index of limited array
    // grab the bucket that may or may not exist or may exist with nothing in it
    // creates a reference to it so the original isn't mutated until we are ready
    const bucket = this.storage.get(index);

    // checks if bucket has nothing assigned, assigns bucket + key/value pair
    // if you wanted empty bucket for some reason, this.storage.set(index, []);, but we don't
    if (bucket === undefined) {  // must check this way b/c !bucket fails, could be an empty bucket
      this.storage.set(index, [[key, value]]); // creates both the bucket array and the key/value
      return;
    }

    // we potentially have a collision if there is a bucket existing, could also be an empty bucket
    // once we know the bucket isn't empty from the previous if statement, we then need to check
    // if the bucket has the same key already inside of it
    for (let i = 0; i < bucket.length; i++) {
      // check to see if any keys in the bucket match the key we want to insert
      // the ith element and the 0 element of nested array (i.e. the key)
      if (bucket[i][0] === key) {
        // overwrites the current key's value with new value
        bucket[i][1] = value;
        // updates the actual bucket, not const bucket reference to actual bucket
        this.storage.set(index, bucket);
        return;
      }
    }

    // if not empty and no collision, we insert the unique key/value pair at the end of the bucket
    bucket.push([key, value]);  // references the bucket reference
    this.storage.set(index, bucket); // sets the bucket into the hashtable
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    // Grabs the index related to the key
    const index = getIndexBelowMax(key.toString(), this.limit);
    // Grabs the bucket related to the index
    const bucket = this.storage.get(index);

    // If the bucket doesn't exist, there is nothing to remove
    if (bucket === undefined) return;

    // Find the index of the key within the bucket
    for (let i = 0; i < bucket.length; i++) {
      // check to see if any keys in the bucket match the key we want to delete
      if (bucket[i][0] === key) {
        // delete the key/value pair at the index of the bucket
        bucket.splice(i, 1);
        return;
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    // Grabs the index related to the key
    const index = getIndexBelowMax(key.toString(), this.limit);
    // Grabs the bucket related to the index
    const bucket = this.storage.get(index);

    // If the bucket doesn't exist, there is nothing to retrieve
    if (bucket === undefined) return;

    // Find the index of the key within the bucket
    for (let i = 0; i < bucket.length; i++) {
      // check to see if any keys in the bucket match the key we want to retrieve, return the value
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
}

module.exports = HashTable;
