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

  insert(key, value) {
    // Adds the given key, value pair to the hash table
    // Fetch the bucket associated with the given key using the getIndexBelowMax function
    // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
    // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
    const dataIndex = getIndexBelowMax(key.toString(), this.limit);
    const keyVal = value;
    // this.storage.each((content, index) => {
    //   if (content !== keyVal) {
    //     //console.log(content);
    //     const contentDataIndex = getIndexBelowMax(key.toString(), this.limit);
    //     const colide = this.storage.get(contentDataIndex);
    //     if (colide.length > 1)
    //     //console.log(colide);
    //     const concatColide = [keyVal, colide];
    //     //console.log(concatColide);
    //     this.storage.set(dataIndex, concatColide);
    //     console.log(this.retrieve(key))
    //   } else {
    //     this.storage.set(dataIndex, keyVal);
    //   }
    // });
    this.storage.set(dataIndex, keyVal);
  }

  remove(key) {
    // Removes the key, value pair from the hash table
    // Fetch the bucket associated with the given key using the getIndexBelowMax function
    // Remove the key, value pair from the bucket
    const dataIndex = getIndexBelowMax(key.toString(), this.limit);
    this.storage.set(dataIndex);
  }

  retrieve(key) {
    const dataIndex = getIndexBelowMax(key.toString(), this.limit);
    return this.storage.get(dataIndex);
    // Fetches the value associated with the given key from the hash table
    // Fetch the bucket associated with the given key using the getIndexBelowMax function
    // Find the key, value pair inside the bucket and return the value
  }
}

// const l = new HashTable();
// const kb = (x, y) => { console.log(x, y); };
// l.insert('name', 'Moises');
// l.insert('name', 'Alex');
// console.log(l.retrieve('name'));
// console.log(l.storage.get(1));
// console.log(l.storage.each(kb));


module.exports = HashTable;
