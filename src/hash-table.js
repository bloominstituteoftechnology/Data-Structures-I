/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(index, val) {
    // get hashed index
    const hashIndex = this.hash(index);
    // get the specific hash storage location
    const storageLocation = this.storage.get(hashIndex);
    if (storageLocation === undefined) {
      // Empty point
      this.storage.set(hashIndex, HashTable.addBucket([], index, val));
    } else {
      // Not empty.
      if (index === hashIndex) {
        // Overwrite because targeting index
        this.storage.set(hashIndex, HashTable.addBucket([], index, val));
        return;
      }
      // both need to be stored somehow.
      this.storage.set(hashIndex, HashTable.addBucket(storageLocation, index, val));
      // Get hash count
    }
    // Resize hash table if too few empty hashes.
    if (this.hashesUsed > this.resizeThreshold) this.resizeHashTable(2);
    // Resize hash table if too many empty hashesUsed
    if ((this.limit - this.hashesUsed) > this.emptyThreshold) {
      // still not sure about this one...
    }
  }

  remove(index) {
    // get hash index from value or digit back
    const hashedIndex = this.hash(index);
    // get target from hash-table (row, essentially)
    const target = this.storage.get(hashedIndex);
    // Return undefined if item wasn't found
    if (target === undefined) return undefined;
    // Get the bucket after deleting the index from it
    const deleted = target.splice(target.findIndex(e => e[0] === index));
    // Set the index with the new bucket
    this.storage.set(hashedIndex, target);
    // Return the deleted item
    return deleted;
  }

  retrieve(index) {
    // Get hashedIndex
    const hashIndex = this.hash(index);
    // Fetch the bucket from storage
    const bucket = this.storage.get(hashIndex);
    // Find sub-bucket for index
    const singleBucket = bucket.find((sub) => {
      return (sub[0] === index) ? sub : undefined;
    });
    // Return undefined or the value of the fetched bucket
    return (singleBucket === undefined) ? undefined : singleBucket[1];
  }

  hash(index) {
    // is index a number
    if (typeof index === 'number') {
      // Return NaN if number is beyond limit of storage, it would not be a useful number.
      if (index > this.limit) return NaN;
      // Return index, since they are looking for the index.
      return index;
    }
    // Return the hashed index since it's an identifier index.
    return getIndexBelowMax(index, this.limit);
  }

  get hashesUsed() {
    let count = 0;
    // Look through each storage location (bucket) and count ones that are used.
    this.storage.each((collection) => {
      // if it isn't undefined, it's used.
      if (collection !== undefined) count++;
    });
    // return the count
    return count;
  }

  get resizeThreshold() {
    // This can be used to have a changable resize
    // threshold without doing math inline.
    // could use this.threshold like this:
    // this.threshould would be a decimal-point percentage. (0.5, 0.65, ...)
    // return this.limit this.threshold
    const threshold = 0.75;
    return this.limit * threshold;
  }

  get emptyThreshold() {
    // Similiar to `resizeThreshold`, but to shrink if too many empty spaces.
    // placeholder value for this.emptyMax
    const emptyMax = 0.9;
    return this.limit * emptyMax;
  }

  resizeHashTable(modifier) {
    this.limit *= modifier;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each((collection) => {
      if (collection === undefined) return;
      collection.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  static addBucket(bucket, index, val) {
    bucket.push([index, val]);
    return bucket;
  }
}

module.exports = HashTable;
