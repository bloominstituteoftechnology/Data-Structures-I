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
    // const strKey = typeof key === 'number' ? key.toString() : key;
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage;

    if (bucket.get(index) === undefined) {      // No bucket at index yet
      bucket.set(index, [[key, value]]);        // Create bucket containing a k/v pair
      return;                                   // Completely done. Exit the insert function.
    }

    let keyFound = false;                     // flag to hold state: key present in bucket?
    bucket.get(index).forEach((kvPair) => {
      if (kvPair[0] === key) {                // Check to see if bucket already has key
        kvPair[1] = value;                    // Found; set kvPair value to new value
        keyFound = true;                      // Set flag true so kvPair won't be added again at end
        return;
      }
    });
    if (!keyFound) bucket.get(index).push([key, value]);  // If key wasn't found in bucket, add k/v pair
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    // const strKey = typeof key === 'number' ? key.toString() : key;
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage;

    if (bucket.get(index) !== undefined) {         // Verify there's a bucket at index
      bucket.get(index).forEach((kvPair, i) => {   // Cycle through k/v pairs, with i as forEach index
        if (kvPair[0] === key) {                   // If pair has the desired key
          bucket.get(index).splice(i, 1);          // Cut out one pair at that i (forEach index)
          return;                                  // Exit the anonymous function
        }
      });
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    // const strKey = typeof key === 'number' ? key.toString() : key;
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage;
    let value;

    if (bucket.get(index) !== undefined) {         // Verify there's a bucket at index
      bucket.get(index).forEach((kvPair) => {      // Cycle through k/v pairs
        if (kvPair[0] === key) {                   // If pair has the desired key
          value = kvPair[1];                       // Save the key's associated value
          return;                                  // Exit the anonymous function
        }
      });
      return value;                                // Return the saved value
    }
  }
}

module.exports = HashTable;
