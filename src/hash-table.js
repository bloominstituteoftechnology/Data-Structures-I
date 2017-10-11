/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class Bucket {
  constructor(items = []) {
    this.items = items;
  }
  add({ key, value }) {
    this.items = [...this.items.filter(item => item.key !== key), { key, value }];
  }
  findValue(key) {
    const results = this.items.filter(item => item.key === key);
    return results.length === 0 ? undefined : results[0].value;
  }
  dump() {
    return this.items;
  }
}

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
    const index = getIndexBelowMax(key, this.limit);
    const bucket = new Bucket(this.storage.get(index));
    bucket.add({ key, value });

    if (this.storage.length >= this.limit * 0.75) {
      const prevStorage = this.storage;
      this.limit *= 2;
      this.storage = new LimitedArray((this.limit));
      prevStorage.each((item, i) => {
        this.storage.set(i, item);
      });
    }
    this.storage.set(index, [...bucket.dump()]);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = new Bucket(this.storage.get(index));
    this.storage.set(index, bucket.dump().filter(item => item.key !== key));
  }
  // Fetches the value associated with the giv en key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = new Bucket(this.storage.get(index));
    return bucket.findValue(key);
  }
}

// const k = new HashTable();
// console.log('Inserted', 1);
// k.insert(0, 'First Value');
// console.log('Inserted', 2);
// k.insert(1, 'Second Value');
// console.log('Inserted', 3);
// k.insert('a', true);
// console.log('Inserted', 4);
// k.insert('a', false);
// console.log('Inserted', 5);
// k.insert('b', true);
// console.log('Inserted', 6);
// console.log('should increase');
// k.insert('c', true);
// console.log('Inserted', 7);
// k.insert('d', true);
// console.log('Inserted', 8);
// k.insert('e', true);
// console.log('Inserted', 9);
// k.insert('f', true);
// console.log('Inserted', 10);
// k.insert('g', true);

// class HashTable {
//   constructor(limit = 8) {
//     this.limit = limit;
//     this.storage = new LimitedArray(this.limit);
//     // Do not modify anything inside of the constructor
//   }
//   // Adds the given key, value pair to the hash table
//   // Fetch the bucket associated with the given key using the getIndexBelowMax function
//   // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
//   // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
//   insert(key, value) {
//     const index = getIndexBelowMax(key, this.limit);
//     let bucket = this.storage.get(index);

//     if (bucket === undefined) {
//       // create bucket
//       this.storage.set(index, []);
//     }

//     bucket = [...this.storage.get(index).filter(item => item.key !== key), { key, value }];
//     this.storage.set(index, bucket);
//   }
//   // Removes the key, value pair from the hash table
//   // Fetch the bucket associated with the given key using the getIndexBelowMax function
//   // Remove the key, value pair from the bucket
//   remove(key) {
//     const index = getIndexBelowMax(key, this.limit);
//     const bucket = this.storage.get(index);
//     if (bucket === undefined) {
//       return;
//     }
//     this.storage.set(index, bucket.filter(item => item.key !== key));
//   }
//   // Fetches the value associated with the given key from the hash table
//   // Fetch the bucket associated with the given key using the getIndexBelowMax function
//   // Find the key, value pair inside the bucket and return the value
//   retrieve(key) {
//     const index = getIndexBelowMax(key, this.limit);
//     const bucket = this.storage.get(index);
//     if (bucket === undefined) {
//       return undefined;
//     }
//     const results = bucket.filter((item) => {
//       return item.key === key;
//     });
//     if (results.length === 0) {
//       return undefined;
//     }
//     return results[0].value;
//   }
// }

module.exports = HashTable;
