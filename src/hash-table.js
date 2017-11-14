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
    if (typeof key === 'number') {
      if (this.storage.get(key) === undefined) {
        const values = [];
        values[key] = value;
        return this.storage.set(key, values);
      }
      const bucket = this.storage.get(key);
      let x;
      bucket.forEach((ele, i) => {
        if (ele.indexOf(key) !== -1) {
          x = i;
        }
      });
      if (x === undefined) {
        bucket.push([key, value]);
      } else {
        bucket[x] = [key, value];
      }
    }
    const index = getIndexBelowMax(key, this.limit);
    if (this.storage.get(index) === undefined) {
      this.storage.set(index, [[key, value]]);
    } else {
      const bucket = this.storage.get(index);
      let x;
      bucket.forEach((ele, i) => {
        if (ele.indexOf(key) !== -1) {
          x = i;
        }
      });
      if (x === undefined) {
        bucket.push([key, value]);
      } else {
        bucket[x] = [key, value];
      }
      //  if (f)
      // console.log(bucket);
    }
    return this.storage.get(index);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket

  remove(key) {
    if (typeof key === 'number') {
      const bucket = this.storage.get(key);
      bucket.forEach((ele, i) => {
        if (ele[0] === key) {
          delete bucket[i];
        }
      });
    }
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) return;
    bucket.forEach((ele, i) => {
      if (ele[0] === key) {
        delete bucket[i];
      }
    });
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (typeof key === 'number') {
      const bucket = this.storage.get(key);
      bucket.forEach((ele) => {
        if (ele[0] === key) return ele[1];
      });
    }
    const nKey = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(nKey);
    if (bucket === undefined) return;
    let i;
    bucket.forEach((ele) => {
      if (key === ele[0]) {
        i = ele[1];
      }
    });
    return i;
  }
}
const hashTable = new HashTable();
hashTable.insert(0, 'First Value');
hashTable.insert(1, 'Second Value');
console.log(hashTable.retrieve(0), 'First Value');
console.log(hashTable.retrieve(1), 'Second Value');

module.exports = HashTable;
